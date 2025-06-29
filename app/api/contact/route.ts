import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, subject, message } = body

    console.log('Received contact form submission:', { name, email, phone, company, subject })

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name, email, message })
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Store in Supabase
    console.log('Attempting to store in Supabase...')
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          subject: subject || null,
          message,
          status: 'unread',
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Detailed Supabase error:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
      throw error
    }

    console.log('Successfully stored contact submission:', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error("[CONTACT_POST] Detailed error:", error instanceof Error ? {
      message: error.message,
      stack: error.stack
    } : error)
    return new NextResponse(
      error instanceof Error ? error.message : "Failed to submit contact form",
      { status: 500 }
    )
  }
} 