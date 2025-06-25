"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
    <main className="min-h-screen bg-white">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Muveo Inc</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted moving partner in Toronto, delivering professional and reliable moving services with a commitment to customer satisfaction.
          </p>
        </motion.div>

        {/* Who We Are Section */}
        <motion.div variants={fadeInUp} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[100px] rounded-2xl overflow-hidden">
              <Image
                src="/images/logo-dark.png"
                alt="Professional movers loading a moving truck"
                fill
                className="object-cover w-10 h-10"
                sizes="w-10 h-10"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Muveo Inc. is a logistics company based in Toronto which provides moving services for all over GTA with 2 years of experience. We are an experienced, skilled family-owned business and dedicated to the utmost customer satisfaction.
              </p>
              <p className="text-gray-600">
                We have custom-built moving vans for the safe and effective transportation of your goods. At Muveo Inc. we take immense pride in our commitment to ensuring the efficient, safe transportation of your belongings and making the entire moving experience as seamless as can be.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Services Section */}
        <motion.div variants={fadeInUp} className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=800&auto=format&fit=crop"
                  alt="Household Moving"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Household Moving</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Residential Moving</li>
                  <li>• Apartment and Condo Moving</li>
                  <li>• Senior Moving</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                  alt="Commercial Moving"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Moving</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Office Moving</li>
                  <li>• Business Relocation</li>
                  <li>• Commercial Equipment Moving</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Muveo Inc</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                  alt="Professional Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Team</h3>
              <p className="text-gray-600">
                Experienced and skilled professionals dedicated to providing the best moving service.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop"
                  alt="Custom Equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Equipment</h3>
              <p className="text-gray-600">
                Custom-built moving vans and professional equipment for safe transportation.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=800&auto=format&fit=crop"
                  alt="Customer Focus"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Dedicated to customer satisfaction with a seamless moving experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Move?</h2>
          <Button
            asChild
            size="lg"
            className="group"
          >
            <Link href="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  )
} 