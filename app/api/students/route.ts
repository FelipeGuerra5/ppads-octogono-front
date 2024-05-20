import { NextResponse } from 'next/server'

// Will be needed when we inset actual classes in a DB

export async function GET() {
    const res = await fetch(`${process.env.IP_API}api/view-attendance/?period=Vespertino&schoolGrade=6&classMeta=Português&teacher=1&date=2024-03-31`);
    const students = await res.json();
    return NextResponse.json(students)
}