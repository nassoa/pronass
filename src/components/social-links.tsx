import Link from "next/link"
import { Github, Mail, Calendar } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link
        href="https://github.com/nassoa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-4 w-4" />
      </Link>
      <Link
        href="mailto:hello@nasoavina.site"
        className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
        aria-label="Email"
      >
        <Mail className="h-4 w-4" />
      </Link>
      <Link
        href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
        aria-label="Schedule"
      >
        <Calendar className="h-4 w-4" />
      </Link>
    </div>
  )
}
