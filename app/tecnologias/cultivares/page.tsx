import Header from "@/components/header"
import Footer from "@/components/footer"
import { AdvancedSearch } from "@/components/advanced-search"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CultivaresPage() {
  const cultivares = [
    {
      id: "solar-maracuja",
      title: "Solar - Cultivar de Maracujá",
      description:
        "Cultivar de maracujá com alta produtividade, frutos maiores e resistência a doenças, ideal para solos argilosos bem drenados.",
      image: "/passion-fruit-plantation-with-yellow-fruits.jpg",
      href: "/tecnologias/solar-maracuja",
    },
    {
      id: "cultivar-soja",
      title: "Cultivar de Soja Resistente",
      description:
        "Variedade de soja desenvolvida para resistir a condições climáticas adversas e pragas comuns na região Centro-Oeste.",
      image: "/agricultural-research-lab.png",
      href: "#",
    },
    {
      id: "cultivar-milho",
      title: "Cultivar de Milho de Alto Rendimento",
      description:
        "Híbrido de milho com alta produtividade e adaptação ao clima tropical, desenvolvido especialmente para o cerrado mato-grossense.",
      image: "/seed-germination-analysis.jpg",
      href: "#",
    },
    {
      id: "cultivar-arroz",
      title: "Cultivar de Arroz Irrigado",
      description:
        "Variedade de arroz com ciclo médio, alta produtividade e qualidade de grãos superior para cultivo irrigado.",
      image: "/agricultural-equipment-fertilizer.jpg",
      href: "#",
    },
    {
      id: "cultivar-feijao",
      title: "Cultivar de Feijão Carioca",
      description:
        "Cultivar de feijão carioca com resistência a doenças e alta adaptabilidade às condições do Mato Grosso.",
      image: "/plant-stress-research-field.jpg",
      href: "#",
    },
    {
      id: "cultivar-algodao",
      title: "Cultivar de Algodão Fibra Longa",
      description:
        "Variedade de algodão com fibras longas e resistentes, desenvolvida para maximizar a qualidade e produtividade.",
      image: "/biomass-production-laboratory.jpg",
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0891b2] transition-colors">
              Portfólio de Tecnologias
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Cultivares</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AdvancedSearch />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-3 text-gray-900">Macro Área: Cultivares</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore as cultivares desenvolvidas pela UNEMAT, com foco em alta produtividade, resistência e adaptação ao
            clima regional.
          </p>

          {/* Cultivares Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cultivares.map((cultivar) => (
              <Link
                key={cultivar.id}
                href={cultivar.href}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[#0891b2]"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={cultivar.image || "/placeholder.svg"}
                    alt={cultivar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-[#0891b2]">UNEMAT</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-[#0891b2] transition-colors text-balance">
                    {cultivar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-pretty">{cultivar.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-full bg-[#0891b2] text-white font-semibold hover:bg-[#0e7490] transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              2
            </button>
            <span className="text-gray-400 px-2">...</span>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              4
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors border border-gray-200">
              »
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
