import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error(
    'Missing environment variable: NEXT_PUBLIC_SUPABASE_URL. Please check your .env file and Vercel environment variables.'
  )
}

if (!supabaseAnonKey) {
  throw new Error(
    'Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY. Please check your .env file and Vercel environment variables.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

export type Client = {
  id: number
  name: string
  email: string
  project: string
  status: 'active' | 'inactive' | 'pending'
  created_at: string
}

export type Portfolio = {
  id: number
  title: string
  description: string
  image_url: string
  category: string
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      clients: {
        Row: Client
        Insert: Omit<Client, 'id' | 'created_at'>
        Update: Partial<Omit<Client, 'id' | 'created_at'>>
      }
      portfolio: {
        Row: Portfolio
        Insert: Omit<Portfolio, 'id' | 'created_at'>
        Update: Partial<Omit<Portfolio, 'id' | 'created_at'>>
      }
    }
  }
} 