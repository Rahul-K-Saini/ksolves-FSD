"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", userData);

      if (response.status === 200) {
        console.log(response.data);
        toast.success("Login successful!");

        localStorage.setItem("token", response.data.token);
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error: any) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      toast.error("Login failed. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto max-w-md p-8 min-h-[calc(100vh-300px)]">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={userData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={userData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
      <small className="mt-4">
        Don't Have an account?{" "}
        <Link className="text-blue-500" href="/register">
          Register Here
        </Link>{" "}
      </small>
    </div>
  );
}
