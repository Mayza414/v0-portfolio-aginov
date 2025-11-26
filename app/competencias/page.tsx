import { Search, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Accessibility,
  Tractor,
  Building2,
  Bot,
  Droplets,
  Sparkles,
  BookOpen,
  Pill,
  Flag as Flask,
  Settings,
  Atom,
  FileText,
  Beef,
  Fish,
  Apple,
  Recycle,
  PawPrint,
  Stethoscope,
  Shield,
  Network,
  Trash2,
} from "lucide-react"

const categories = [
  { name: "Acessibilidade", icon: Accessibility, href: "#" },
  { name: "Agronegócio", icon: Tractor, href: "/competencias/agronegocio/geovana-fedato" },
  { name: "Arquitetura e Construção Civil", icon: Building2, href: "#" },
  { name: "Automação e Robótica", icon: Bot, href: "#" },
  {
    name: "Captação, Tratamento, Distribuição de Água e Tratamento de Esgoto",
    icon: Droplets,
    href: "#",
  },
  { name: "Cosméticos", icon: Sparkles, href: "#" },
  { name: "Educação", icon: BookOpen, href: "#" },
  { name: "Fármacos", icon: Pill, href: "#" },
  { name: "Indústria Química", icon: Flask, href: "#" },
  { name: "Máquinas e Equipamentos", icon: Settings, href: "#" },
  { name: "Novos Materiais", icon: Atom, href: "#" },
  { name: "Papel e Celulose", icon: FileText, href: "#" },
  { name: "Pecuária", icon: Beef, href: "#" },
  { name: "Pesca e Aquicultura", icon: Fish, href: "#" },
  { name: "Produtos Alimentícios", icon: Apple, href: "#" },
  { name: "Reciclagem de Materiais", icon: Recycle, href: "#" },
  { name: "Saúde Animal", icon: PawPrint, href: "#" },
  { name: "Saúde Humana", icon: Stethoscope, href: "#" },
  { name: "Segurança Pública", icon: Shield, href: "#" },
  { name: "Tecnologia da Informação e Comunicação", icon: Network, href: "#" },
  { name: "Tratamento de Resíduos", icon: Trash2, href: "#" },
]

export default function CompetenciasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-blue-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Portfólio de Competências</h1>
          <p className="text-lg text-gray-600 mb-6">Explore as competências dos pesquisadores da UNEMAT</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 h-12 shadow-lg hover:shadow-xl transition-all"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Cadastrar Minha Competência
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Técnicos, professores e pesquisadores da UNEMAT podem registrar suas competências
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative flex gap-2">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="O que deseja buscar?"
                className="w-full h-12 pl-4 pr-4 text-base border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 h-12">
              <Search className="w-5 h-5 mr-2" />
              Pesquisar
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <a
                key={category.name}
                href={category.href}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center min-h-[160px] border border-gray-100 hover:border-primary/30 group"
              >
                <Icon className="w-12 h-12 text-gray-600 mb-4 group-hover:text-primary transition-colors" />
                <h3 className="text-sm font-semibold text-gray-900 leading-tight">{category.name}</h3>
              </a>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}
