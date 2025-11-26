import Link from "next/link"
import Image from "next/image"
import { Search, User, Moon } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="bg-[#17a2b8] text-white">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/unemat-logo-white.png" alt="UNEMAT" width={140} height={45} className="h-10 w-auto" />
            <div className="h-8 w-px bg-white/30" />
            <span className="text-sm font-medium">Universidade do Estado de Mato Grosso</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-white/80 transition-colors flex items-center gap-2">
              Currículo Lattes
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors flex items-center gap-2">
              Moodle
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors flex items-center gap-2">
              Webmail
            </Link>
            <button className="hover:text-white/80 transition-colors p-1" aria-label="Buscar">
              <Search className="h-4 w-4" />
            </button>
            <button className="hover:text-white/80 transition-colors p-1" aria-label="Área do usuário">
              <User className="h-4 w-4" />
            </button>
            <button
              className="px-3 py-1.5 bg-white text-[#17a2b8] rounded font-medium text-xs hover:bg-white/90 transition-colors flex items-center gap-1.5"
              aria-label="Ativar alto contraste"
            >
              <Moon className="h-3.5 w-3.5" />
              Alto Contraste
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/design-mode/logo%20aginov%20final%20-%20colorida%20fundo%20transparente%20%28responsiva1%29%282%29.png"
              alt="AGINOV - Agência de Inovação da UNEMAT"
              width={340}
              height={184}
              className="h-16 w-auto"
            />
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Serviços
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1 transition-colors">
                Portfólio
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary first:rounded-t-lg transition-colors"
                >
                  Portfólio de Tecnologias
                </Link>
                <Link
                  href="/competencias"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Portfólio de Competências
                </Link>
                <Link
                  href="/competencias/buscar"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  Buscar Pesquisadores
                </Link>
                <Link
                  href="/cadastrar"
                  className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary last:rounded-b-lg transition-colors"
                >
                  Cadastrar Tecnologia/Competência
                </Link>
              </div>
            </div>
            <Link href="/portal-pesquisador" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Portal do Pesquisador
            </Link>
            <Link href="/noticias" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Notícias
            </Link>
            <Link href="/eventos" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Eventos
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { Header }
