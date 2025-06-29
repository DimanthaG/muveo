import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

// Create a Supabase client with the service role key for admin access
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
    }
  }
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, moveType, moveDate, fromLocation, toLocation, message } = body

    console.log('Received contact form submission:', { name, email, phone, moveType, moveDate })

    // Validate required fields
    if (!name || !email || !phone || !moveType || !moveDate || !fromLocation || !toLocation || !message) {
      console.error('Missing required fields')
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Store in Supabase using admin client
    console.log('Attempting to store in Supabase...')
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone,
          move_type: moveType,
          move_date: moveDate,
          from_location: fromLocation,
          to_location: toLocation,
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