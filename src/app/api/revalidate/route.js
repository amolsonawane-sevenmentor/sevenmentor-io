import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

// This API route allows you to revalidate specific pages when content changes
export async function POST(request) {
  try {
    const { path, secret } = await request.json()

    // Check for secret to prevent unauthorized revalidations
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    if (!path) {
      return NextResponse.json({ message: "Path is required" }, { status: 400 })
    }

    // Revalidate the specific path
    revalidatePath(path)

    return NextResponse.json({ revalidated: true, message: `Path ${path} revalidated` })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
