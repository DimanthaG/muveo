"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactContent() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        moveType: formData.get('moveType'),
        moveDate: formData.get('moveDate'),
        fromLocation: formData.get('fromLocation'),
        toLocation: formData.get('toLocation'),
        message: formData.get('message'),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error('Detailed error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your move? Contact us today for a free quote and let's make your moving experience smooth and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/50 rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moveType">Type of Move *</Label>
                  <select
                    id="moveType"
                    name="moveType"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    required
                  >
                    <option value="">Select move type</option>
                    <option value="residential">Residential Moving</option>
                    <option value="commercial">Commercial Moving</option>
                    <option value="senior">Senior Moving</option>
                    <option value="apartment">Apartment/Condo Moving</option>
                    <option value="storage">Storage Solutions</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="moveDate">Preferred Moving Date *</Label>
                <Input
                  id="moveDate"
                  name="moveDate"
                  type="date"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fromLocation">Moving From *</Label>
                  <Input
                    id="fromLocation"
                    name="fromLocation"
                    placeholder="Current address"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="toLocation">Moving To *</Label>
                  <Input
                    id="toLocation"
                    name="toLocation"
                    placeholder="Destination address"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Additional Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about any special requirements, items that need special care, or questions you have"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Get Free Quote"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Company Address */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Our Location</h3>
                  <address className="text-muted-foreground not-italic">
                    2031 Kennedy Road<br />
                    Unit 3212<br />
                    Toronto, ON M1T 0B8
                  </address>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+14379914935" className="hover:text-primary transition-colors">
                      (437) 991-4935
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:Muveo.Inc@gmail.com" className="hover:text-primary transition-colors">
                      Muveo.Inc@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
} 