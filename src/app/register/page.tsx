"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log(res);
    } catch (error) {
      toast("Something went wrong !");
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <Input
          name="name"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Full Name"
          required
        />
        <Input
          name="email"
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          name="password"
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
      <small>
        Already Have an account ?{" "}
        <Link className="text-blue-500" href="/login">
          Login here
        </Link>
      </small>
    </div>
  );
}
