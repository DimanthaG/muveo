"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
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

  return (
    <main className="min-h-screen bg-gray-50">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 pt-8 md:pt-16"
      >
        {/* Hero Section with Main Logo */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <motion.div 
            className="w-full max-w-3xl mx-auto mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-full max-w-5xl mx-auto" style={{ height: "150px" }}>
              <Image
                src="/images/logo-dark.png"
                alt="Muveo Inc Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Your trusted moving partner in Toronto with 2 years of experience in professional moving services
          </motion.p>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div variants={fadeInUp} className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                To become the best moving service forwarder for our clients by delivering an effective, transparent, and collaborative experience.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                To provide the utmost satisfaction, efficient and reliable services to our clients. We are not satisfied until you are.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          variants={staggerContainer}
        >
          {[
            {
              title: "Household Moving",
              description: "Professional residential, apartment, and senior moving services across the GTA.",
              color: "text-blue-600",
              image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800&auto=format&fit=crop",
              alt: "Moving boxes and furniture in a home"
            },
            {
              title: "Commercial Moving",
              description: "Comprehensive office relocation solutions for businesses.",
              color: "text-purple-600",
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
              alt: "Modern office space with moving boxes"
            },
            {
              title: "Senior Moving",
              description: "Specialized moving services tailored for senior citizens.",
              color: "text-orange-600",
              image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop",
              alt: "Comfortable senior living space"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative p-6">
                <h3 className={`text-xl font-semibold mb-3 ${service.color}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Make Your Move Easier?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Address</h3>
              <p className="text-gray-600">
                2031 Kennedy Road<br />
                Unit 3212<br />
                Toronto M1T 0B8
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Contact</h3>
              <p className="text-gray-600">
                Phone: (437) 991-4935<br />
                Email: MuveoInc@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "1M+", label: "Engagements Generated" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]
