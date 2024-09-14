"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
export default function Login() {

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="container mx-auto max-w-md p-8 min-h-[calc(100vh-300px)]">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit" className="w-full">Login</Button>
      </form>
      <small className="mt-4">Don&apos;t Have a account? <Link className="text-blue-500" href="/register">Register Here</Link> </small>
    </div>
  );
}
