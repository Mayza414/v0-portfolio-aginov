import Header from "@/components/header"
import Footer from "@/components/footer"
import { AdvancedSearch } from "@/components/advanced-search"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AgronegocioPage() {
  const technologies = [
    {
      id: "solar-maracuja",
      title:
        "Composição e/ou solução bioestimulante, seu uso e método para crescimento de plantas e aumento de biomassa",
      image: "/passion-fruit-plantation-with-yellow-fruits.jpg",
      href: "/tecnologias/solar-maracuja",
    },
    {
      id: "nanoparticulas",
      title: "Processo de biossíntese de nanopartículas metálicas e óxido de nanopartículas assim obtidas",
      image: "/agricultural-research-lab.png",
      href: "#",
    },
    {
      id: "plantas-transgenicas",
      title:
        "Método para a obtenção de plantas transgênicas através de algas verdes da espécie Chlamydomonas reinhardtii resistentes a herbicidas",
      image: "/green-algae-laboratory-research.jpg",
      href: "#",
    },
    {
      id: "cassete-duplo",
      title:
        "Cassete duplo de co-expressão de alfa-amilase e glucoamilase, microrganismo recombinante e processo de obtenção de etanol, biomassa e CO2 utilizando o microrganismo recombinante",
      image: "/biofuel-ethanol-production.jpg",
      href: "#",
    },
    {
      id: "xilose-isomerase",
      title:
        "Cassete de expressão de xilose isomerase e microrganismo recombinante para produção de etanol, biomassa e CO2",
      image: "/biomass-production-laboratory.jpg",
      href: "#",
    },
    {
      id: "estresses-abioticos",
      title: "Método para reduzir os efeitos de estresses abióticos em plantas",
      image: "/plant-stress-research-field.jpg",
      href: "#",
    },
    {
      id: "equipamento-aplicacao",
      title: "Equipamento com princípio de funcionamento para aplicação localizada de adubo líquido em profundidade",
      image: "/agricultural-equipment-fertilizer.jpg",
      href: "#",
    },
    {
      id: "analise-sementes",
      title: "Método para análise de vigor de germinação de sementes",
      image: "/seed-germination-analysis.jpg",
      href: "#",
    },
    {
      id: "pe-cuba-fermentacao",
      title: "Processo para tratamento do pé de cuba de fermentação",
      image: "/fermentation-process-sugarcane.jpg",
      href: "#",
    },
    {
      id: "filmes-nanocompartimentados",
      title:
        "Composição para filmes nanocompartimentados multifuncionais, método de fabricação dos filmes e uso da composição",
      image: "/nanofilm-agricultural-technology.jpg",
      href: "#",
    },
    {
      id: "softcana",
      title: "Softcana",
      image: "/sugarcane-innovation.jpg",
      href: "#",
    },
    {
      id: "sistema-monitoramento",
      title: "Sistema de monitoramento e localização de rebanho",
      image: "/livestock-monitoring-system.jpg",
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search Section */}
      <section className="py-8 bg-[#c4d82e]">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-800 mb-6 text-pretty max-w-3xl mx-auto">
            Explore o portfólio por palavras-chave ou nomes dos inventores. A busca também pode ser mais completa,
            usando filtros avançados.
          </p>
          <div className="max-w-4xl mx-auto">
            <AdvancedSearch />
          </div>
        </div>
      </section>

      {/* Breadcrumb and Title */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-[#0891b2]">
              Portfólio de Tecnologias
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Agronegócio</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Macro Área: Agronegócio</h1>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {technologies.map((tech) => (
              <Link
                key={tech.id}
                href={tech.href}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-[#0891b2]"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-[#0891b2]">UNEMAT</span>
                    </div>
                  </div>
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-800 leading-relaxed text-pretty line-clamp-4">{tech.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-full bg-[#0891b2] text-white font-medium hover:bg-[#0e7490] transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors border border-gray-300">
              2
            </button>
            <span className="text-gray-500 px-2">...</span>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors border border-gray-300">
              4
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition-colors border border-gray-300">
              »
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
