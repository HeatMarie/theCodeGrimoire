import Link from "next/link"
import { BookOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const chapters = [
    { id: 1, title: "The Hero's Awakening", concept: "Introduction to React Components" },
    { id: 2, title: "The Enchanted Backpack", concept: "Database and Schema Design" },
    { id: 3, title: "Casting Your First Spell", concept: "Functions and Event Handlers" },
    { id: 4, title: "The Magical Contract", concept: "Forms and User Input" },
    { id: 5, title: "Realms of the Changing Mist", concept: "Dynamic Pages and Routing" },
  ]

  return (
    <main className="min-h-screen spellbook flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full magical-border bg-black/40 backdrop-blur-sm p-6 md:p-10">
        <div className="text-center mb-8">
          <h1 className="font-fantasy text-4xl md:text-5xl lg:text-6xl text-primary mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
            The Enchanted Codex
            <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
          </h1>
          <p className="font-serif text-xl md:text-2xl text-foreground/80">
            A Magical Journey Through Software Development
          </p>
        </div>

        <div className="mb-8 font-serif text-lg leading-relaxed">
          <p>
            Welcome, brave adventurer, to the mystical realm of code and magic. Within these enchanted pages, you shall
            discover the ancient arts of software development, woven into tales of fantasy and wonder.
          </p>
          <p className="mt-4">
            Each chapter of this magical tome reveals secrets of the coding craft through the journey of our hero.
            Choose a chapter to begin your quest for knowledge.
          </p>
        </div>

        <h2 className="font-fantasy text-2xl md:text-3xl text-accent mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Table of Contents
        </h2>

        <div className="space-y-4">
          {chapters.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="block">
              <div className="magical-border p-4 hover:bg-black/60 transition-all duration-300 tome-link">
                <div className="flex justify-between items-center">
                  <h3 className="font-fantasy text-xl text-primary">
                    Chapter {chapter.id}: {chapter.title}
                  </h3>
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/20">
                    Read
                  </Button>
                </div>
                <p className="font-serif text-sm text-foreground/70 mt-1">{chapter.concept}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center font-serif text-sm text-foreground/60">
          <p>Crafted with arcane wisdom and the magic of Next.js</p>
        </div>
      </div>
    </main>
  )
}
