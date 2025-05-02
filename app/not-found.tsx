import Link from "next/link"
import { Frown, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen parchment flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center magical-border bg-black/40 backdrop-blur-sm p-8">
        <Frown className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="font-fantasy text-3xl text-accent mb-4">Page Not Found</h1>
        <p className="font-serif text-lg mb-6">
          The magical realm you seek does not exist or has been hidden by powerful enchantments.
        </p>
        <Link href="/">
          <Button className="font-fantasy flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return to the Enchanted Codex
          </Button>
        </Link>
      </div>
    </main>
  )
}
