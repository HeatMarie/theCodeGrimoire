import type React from "react"
import { Lightbulb } from "lucide-react"

interface SpellNoteProps {
  children: React.ReactNode
  title?: string
}

export function SpellNote({ children, title }: SpellNoteProps) {
  return (
    <div className="spell-note">
      {title && (
        <div className="flex items-center gap-2 font-bold mb-2">
          <Lightbulb className="h-4 w-4 text-accent" />
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}
