"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for a free quote or any questions about our moving services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={fadeInUp}>
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h2>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    2031 Kennedy Road<br />
                    Unit 3212<br />
                    Toronto M1T 0B8
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:4379914935" className="hover:text-blue-600 transition-colors">
                      (437) 991-4935
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:MuveoInc@gmail.com" className="hover:text-blue-600 transition-colors">
                      MuveoInc@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Moving</option>
                  <option value="commercial">Commercial Moving</option>
                  <option value="senior">Senior Moving</option>
                  <option value="apartment">Apartment/Condo Moving</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your moving needs"
                  className="min-h-[120px] bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
} 