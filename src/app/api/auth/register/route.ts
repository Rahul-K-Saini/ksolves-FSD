import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/connectToDB";
import User from "@/models/user";

type RequestBody = {
  name: string;
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  await connectDB();
  console.log("Request received");

  try {
    const body: RequestBody = await req.json();
    const { name, email, password } = body;
    console.log(name, email, password);

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "sdavc@bhhsvchavhcvjhvhc",
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}