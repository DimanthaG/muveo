import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/auth-options"

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

export async function GET() {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // Fetch submissions ordered by created_at desc (newest first)
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('[CONTACT_GET]', error)
    return new NextResponse(
      error instanceof Error ? error.message : "Failed to fetch contact submissions",
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    const { data, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          phone,
          company,
          subject,
          message,
        },
      ])
      .select()

    if (error) {
      console.error("Error creating contact submission:", error)
      return new NextResponse("Internal Server Error", { status: 500 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error in contact submission route:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 