import type React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChapterLayoutProps {
  children: React.ReactNode
  chapterId: number
  title: string
  totalChapters: number
}

export function ChapterLayout({ children, chapterId, title, totalChapters }: ChapterLayoutProps) {
  return (
    <main className="min-h-screen parchment py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <Link href="/" className="inline-block mb-4">
            <Button variant="ghost" className="font-fantasy flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Tome
            </Button>
          </Link>

          <h1 className="chapter-title flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Chapter {chapterId}: {title}
            <Sparkles className="h-6 w-6 text-primary" />
          </h1>
        </header>

        <div className="magical-border bg-black/30 backdrop-blur-sm p-6 md:p-8">{children}</div>

        <footer className="mt-8 flex justify-between">
          {chapterId > 1 ? (
            <Link href={`/chapters/${chapterId - 1}`}>
              <Button variant="outline" className="font-fantasy flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous Chapter
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {chapterId < totalChapters && (
            <Link href={`/chapters/${chapterId + 1}`}>
              <Button variant="outline" className="font-fantasy flex items-center gap-2">
                Next Chapter
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </footer>
      </div>
    </main>
  )
}
