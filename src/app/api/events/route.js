import { NextResponse } from "next/server"
export default function GET(){
    return  NextResponse('hello', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    })
}