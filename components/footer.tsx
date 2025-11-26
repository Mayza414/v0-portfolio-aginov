import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>

        <div className="flex items-center justify-between mb-8">
          <Image
            src="/aginov-logo-color.png"
            alt="AGINOV - Agência de Inovação da UNEMAT"
            width={220}
            height={80}
            className="h-16 w-auto"
          />

          <div className="flex items-center gap-8">
            <Link href="/contato" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Fale Conosco
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="font-medium">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">© 2025. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

export { Footer }
