// "use client";
// import React, { useState, useCallback, useMemo } from "react";
// import dynamic from 'next/dynamic';
// import "react-quill/dist/quill.snow.css";
// import { toast } from "react-hot-toast";
// import { FileUpload } from "@/components/ui/file-upload";

// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const EventEditForm = ({ data, eventType, eventID }) => {
//   const [formData, setFormData] = useState({
//     name: data.name || "",
//     date: data.date ? data.date.slice(0, 16) : "",
//     venue: data.venue || "",
//     description: data.description || "",
//     coverImage: data.coverImage || "",
//     youtube: data.youtube || "",
//     isPast: data.isPast || false,
//   });
//   const [contentValue, setContentValue] = useState(data.content || "");
//   const [newImage, setNewImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = useCallback((e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   }, []);

//   const handleImageChange = useCallback((e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors((prev) => ({
//           ...prev,
//           image: "File size should be less than 5MB",
//         }));
//         return;
//       }
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//       setErrors((prev) => ({ ...prev, image: "" }));
//     }
//   }, []);

//   const handleMultipleImagesChange = useCallback((files) => {
//     setFormData(prev => ({ ...prev, images: files }));
//   }, []);

//   const handleMultipleImageUpload = useCallback(async () => {
//     if (!formData.images || formData.images.length === 0) return [];
//     const toastId = toast.loading("Uploading Images...");
//     try {
//       const imagesUrls = await uploadMultipleFiles(eventID, formData.images, false);
//       toast.success("Images uploaded successfully", { id: toastId });
//       return imagesUrls;
//     } catch (error) {
//       console.error("Error uploading images:", error);
//       toast.error("Failed to upload images", { id: toastId });
//       return [];
//     }
//   }, [eventID, formData.images]);

//   const validateForm = useCallback(() => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.date) newErrors.date = "Date is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }, [formData]);

//   const handleSubmit = useCallback(async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
  
//     setIsSubmitting(true);
//     let toastId;
//     try {
//       const updatedFormData = { ...formData, content: contentValue };
//       if (formData.images && formData.images.length > 0) {
//         toastId = toast.loading("Uploading Images...");
//         const imagesUrls = await handleMultipleImageUpload();
//         if (imagesUrls.length > 0) {
//           updatedFormData.images = imagesUrls;
//         }
//         toast.success("Images uploaded successfully", { id: toastId });
//       }
  
//       toastId = toast.loading("Saving Changes");
      
//       if (imageFile) {
//         const url = await uploadImages({ file: imageFile, isWebinar: true });
//         updatedFormData.coverImage = url;
//       }
      
//       await updateSubCollectionDocByID(
//         "events",
//         eventID,
//         `${eventType}s`,
//         data.id,
//         updatedFormData
//       );
      
//       toast.success("Changes saved successfully", { id: toastId });
//     } catch (error) {
//       console.error("Error updating event:", error);
//       toast.error("Failed to save changes. Please try again.", { id: toastId });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [formData, contentValue, imageFile, eventID, eventType, data.id, validateForm, handleMultipleImageUpload]);
  
//   const renderInput = useCallback((name, label, type = "text", placeholder = "") => (
//     <div>
//       <label htmlFor={name} className="block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={formData[name]}
//         onChange={handleChange}
//         className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none ${
//           errors[name] ? "border-red-500" : ""
//         }`}
//         placeholder={placeholder}
//       />
//       {errors[name] && (
//         <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
//       )}
//     </div>
//   ), [formData, errors, handleChange]);

//   const coverImagePreview = useMemo(() => {
//     if (newImage || formData.coverImage) {
//       return (
//         <img
//           src={newImage || formData.coverImage}
//           alt="Cover preview"
//           className="w-full h-64 object-cover rounded-md mb-2"
//         />
//       );
//     }
//     return null;
//   }, [newImage, formData.coverImage]);

//   return (
//     <div className="mx-auto max-w-5xl p-6">
//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         Edit {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {renderInput("name", "Name", "text", `${eventType.charAt(0).toUpperCase() + eventType.slice(1)} Name`)}
//         {renderInput("date", "Date and Time", "datetime-local")}
//         {renderInput("venue", "Venue")}
        
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none ${
//               errors.description ? "border-red-500" : ""
//             }`}
//             placeholder={`${eventType.charAt(0).toUpperCase() + eventType.slice(1)} description`}
//           ></textarea>
//           {errors.description && (
//             <p className="mt-1 text-sm text-red-500">{errors.description}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
//             Cover Image
//           </label>
//           {coverImagePreview}
//           <input
//             type="file"
//             id="newImage"
//             accept="image/*"
//             onChange={handleImageChange}
//             className={`w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 ${
//               errors.image ? "border-red-500" : ""
//             }`}
//           />
//           {errors.image && (
//             <p className="mt-1 text-sm text-red-500">{errors.image}</p>
//           )}
//         </div>

//         {eventType === "webinar" ? (
//           renderInput("youtube", "YouTube Link")
//         ) : (
//           <div className="mt-4">
//             <label htmlFor="conferencesImages" className="block text-sm font-medium text-gray-700">
//               Conference Images
//             </label>
//             <FileUpload onChange={handleMultipleImagesChange} />
//             {data.images && data.images.length > 0 && <small className="text-red-500">Already Selected images: {data.images.length}</small>}
//           </div>
//         )}

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             id="isPast"
//             name="isPast"
//             checked={formData.isPast}
//             onChange={handleChange}
//             className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded outline-none"
//           />
//           <label htmlFor="isPast" className="ml-2 block text-sm text-gray-900">
//             Is Past Event
//           </label>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="content" className="block text-sm font-medium text-gray-700">
//             Content
//           </label>
//           <ReactQuill
//             theme="snow"
//             value={contentValue}
//             onChange={setContentValue}
//             className={errors.content ? "border-red-500" : ""}
//           />
//           {errors.content && (
//             <p className="mt-1 text-sm text-red-500">{errors.content}</p>
//           )}
//         </div>

//         <div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//               isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {isSubmitting ? "Saving..." : "Save Changes"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EventEditForm;