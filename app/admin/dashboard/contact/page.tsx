"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Mail, Phone, MapPin, Calendar, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  move_type: string
  move_date: string
  from_location: string
  to_location: string
  message: string
  status: 'unread' | 'read' | 'responded'
  created_at: string
}

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/contact')
      if (!response.ok) throw new Error('Failed to fetch submissions')
      const data = await response.json()
      setSubmissions(data)
    } catch (error) {
      console.error('Error fetching submissions:', error)
      toast({
        title: "Error",
        description: "Failed to load contact submissions",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: 'read' | 'responded') => {
    try {
      const response = await fetch(`/api/admin/contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) throw new Error('Failed to update status')

      setSubmissions(prev =>
        prev.map(sub =>
          sub.id === id ? { ...sub, status } : sub
        )
      )

      toast({
        title: "Success",
        description: `Message marked as ${status}`,
      })
    } catch (error) {
      console.error('Error updating submission:', error)
      toast({
        title: "Error",
        description: "Failed to update message status",
        variant: "destructive",
      })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread':
        return 'default'
      case 'read':
        return 'secondary'
      case 'responded':
        return 'success'
      default:
        return 'default'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Moving Quote Requests</h2>
        <p className="text-muted-foreground">
          View and manage moving quote requests from potential customers.
        </p>
      </div>

      <div className="grid gap-6">
        {submissions.length === 0 ? (
          <Card className="p-8 text-center text-muted-foreground">
            No contact submissions yet.
          </Card>
        ) : (
          submissions.map((submission) => (
            <Card key={submission.id} className="p-6">
              <div className="flex flex-col md:flex-row gap-6 justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        {submission.name}
                        <Badge variant={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(submission.created_at), 'PPpp')}
                      </p>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {submission.move_type.replace(/-/g, ' ')}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <a
                        href={`mailto:${submission.email}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {submission.email}
                      </a>
                      <a
                        href={`tel:${submission.phone}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {submission.phone}
                      </a>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(submission.move_date), 'PPP')}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">From:</span>
                          {submission.from_location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">To:</span>
                          {submission.to_location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2 md:w-[120px]">
                  {submission.status === 'unread' && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => updateStatus(submission.id, 'read')}
                    >
                      Mark as Read
                    </Button>
                  )}
                  {submission.status !== 'responded' && (
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => updateStatus(submission.id, 'responded')}
                    >
                      Mark Responded
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
} 