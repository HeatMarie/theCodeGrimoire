"use client"

import { CopyIcon, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CodeSpellProps {
  children: string
  language?: string
  title?: string
}

export function CodeSpell({ children, language = "jsx", title }: CodeSpellProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6">
      {title && (
        <div className="bg-accent/80 text-accent-foreground px-4 py-2 font-fantasy text-sm rounded-t-md flex items-center gap-2">
          <Wand2 className="h-4 w-4" />
          {title}
        </div>
      )}
      <div className="relative">
        <pre className={`spell-code language-${language} overflow-x-auto`}>
          <code>{children}</code>
        </pre>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 text-muted-foreground hover:bg-accent/20"
          onClick={copyToClipboard}
        >
          {copied ? <span className="text-primary text-xs">Copied!</span> : <CopyIcon className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </div>
  )
}
