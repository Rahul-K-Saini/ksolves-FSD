import mongoose from "mongoose";


const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Event title is required"],
    trim: true,
    minlength: [3, "Event title must be at least 3 characters long"]
  },
  date: {
    type: Date,
    required: [true, "Event date is required"],
    validate: {
      validator: (value:any) => value >= new Date(),
      message: "Event date must be a future date"
    }
  },
  location: {
    type: String,
    required: [true, "Event location is required"],
    minlength: [5, "Location must be at least 5 characters long"]
  },
  description: {
    type: String,
    required: [true, "Event description is required"],
    minlength: [10, "Description must be at least 10 characters long"]
  },
  isPast: {
    type: Boolean,
    default: false,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
}, {
  timestamps: true
});

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;
