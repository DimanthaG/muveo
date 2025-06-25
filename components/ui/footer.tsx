"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background/60 backdrop-blur-xl border-t border-border/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Business name: Muveo Inc</p>
            <p>Business Email: <a href="mailto:MuveoInc@gmail.com" className="text-primary hover:underline">MuveoInc@gmail.com</a></p>
            <p>Developed by: <Link href="https://codavra.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Codavra.com</Link></p>
            <p>Developer Email: <a href="mailto:info@codavra.com" className="text-primary hover:underline">info@codavra.com</a></p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground text-right">
            <p>Address:</p>
            <p>2031 Kennedy Road</p>
            <p>Unit 3212</p>
            <p>Toronto M1T 0B8</p>
            <p>Phone: (437) 991-4935</p>
          </div>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muveo Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 