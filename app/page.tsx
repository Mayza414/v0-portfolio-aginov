import Header from "@/components/header"
import Footer from "@/components/footer"
import { AdvancedSearch } from "@/components/advanced-search"
import {
  Accessibility,
  Tractor,
  Building2,
  Cog,
  Droplets,
  Beaker,
  GraduationCap,
  Pill,
  FlaskConical,
  Settings,
  Atom,
  FileText,
  Beef,
  Fish,
  Apple,
  Recycle,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Wifi,
  Trash2,
} from "lucide-react"

export default function PortfolioPage() {
  const categories = [
    { name: "Acessibilidade", icon: Accessibility, href: "#" },
    { name: "Agronegócio", icon: Tractor, href: "/tecnologias/cultivares" }, // Updated Agronegócio to link to Cultivares macro-area listing
    { name: "Arquitetura e Construção Civil", icon: Building2, href: "#" },
    { name: "Automação e Robótica", icon: Cog, href: "#" },
    { name: "Captação, Tratamento, Distribuição de Água e Tratamento de Esgoto", icon: Droplets, href: "#" },
    { name: "Cosméticos", icon: Beaker, href: "#" },
    { name: "Educação", icon: GraduationCap, href: "#" },
    { name: "Fármacos", icon: Pill, href: "#" },
    { name: "Indústria Química", icon: FlaskConical, href: "#" },
    { name: "Máquinas e Equipamentos", icon: Settings, href: "#" },
    { name: "Novos Materiais", icon: Atom, href: "#" },
    { name: "Papel e Celulose", icon: FileText, href: "#" },
    { name: "Pecuária", icon: Beef, href: "#" },
    { name: "Pesca e Aquicultura", icon: Fish, href: "#" },
    { name: "Produtos Alimentícios", icon: Apple, href: "#" },
    { name: "Reciclagem de Materiais", icon: Recycle, href: "#" },
    { name: "Saúde Animal", icon: Stethoscope, href: "#" },
    { name: "Saúde Humana", icon: HeartPulse, href: "#" },
    { name: "Segurança Pública", icon: ShieldCheck, href: "#" },
    { name: "Tecnologia da Informação e Comunicação", icon: Wifi, href: "#" },
    { name: "Tratamento de Resíduos", icon: Trash2, href: "#" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4 text-balance text-gray-900">Portfólio de Tecnologias</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12 text-pretty">
            Pesquise patentes, softwares e outras tecnologias protegidas da Unemat e disponíveis para licenciamento
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <AdvancedSearch />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.name}
                  href={category.href} // Changed from button to anchor tag for navigation
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#0891b2] group block"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#0891b2]/10 transition-colors">
                      <Icon className="w-8 h-8 text-gray-600 group-hover:text-[#0891b2] transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight text-balance">{category.name}</h3>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
