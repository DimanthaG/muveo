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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { id } = params
    const body = await request.json()
    const { status } = body

    if (!status || !['read', 'unread', 'responded'].includes(status)) {
      return new NextResponse("Invalid status", { status: 400 })
    }

    // Update the submission status
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('[CONTACT_UPDATE]', error)
    return new NextResponse(
      error instanceof Error ? error.message : "Failed to update contact submission",
      { status: 500 }
    )
  }
} 