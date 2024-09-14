import Event from "@/models/events"
import { NextResponse } from "next/server"

export default async function POST(){
    const events = await Event.find({})
    return NextResponse.json(events)
}