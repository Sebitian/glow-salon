"use client"
import Link from "next/link"
import { Instagram } from "lucide-react"

interface InstagramAccount {
  handle: string
  url: string
}

const instagramAccounts: InstagramAccount[] = [
  {
    handle: "@venegassalonspa",
    url: "https://www.instagram.com/venegassalonspa/"
  },
  {
    handle: "@cerva.beauty",
    url: "https://www.instagram.com/cerva.beauty/"
  },
]

export default function InstagramLinks() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent mb-3">
          Follow Us on Instagram
        </p>
      </div>

      <div className="space-y-4">
        {instagramAccounts.map((account) => (
          <Link
            key={account.handle}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="bg-gradient-to-br from-accent via-primary to-[#1A1C20] p-3 rounded-lg">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl text-white underline underline-offset-4 decoration-2 decoration-primary group-hover:decoration-primary/80 transition-colors">
              {account.handle}
            </span>
          </Link>
        ))}
      </div>

      {/* <div className="text-center pt-2">
        <p className="text-sm text-gray-300">
          Click to visit our Instagram profile
        </p>
      </div> */}
    </div>
  )
}
