"use client"

import { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Beaker, Sprout, Palette, Code } from "lucide-react"
import Link from "next/link"

// Mock database of technologies
const technologies = [
  {
    id: 1,
    title: "Solar - Cultivar de Maracujá",
    type: "Cultivar",
    category: "cultivar",
    description: "Cultivar de maracujá com alta produtividade e resistência a doenças",
    macroArea: "agronegocio",
    campus: "tangara",
    featuredArea: "agricultura-sustentavel",
    ods: "ods2",
    authors: ["Geovana Alves Lima Fedato"],
    href: "/tecnologias/solar-maracuja",
  },
  {
    id: 2,
    title: "Extrato Alcoólico de Própolis do Pantanal",
    type: "Patente",
    category: "patente",
    description: "Solução natural e eficaz contra infecções bacterianas",
    macroArea: "farmacos",
    campus: "caceres",
    featuredArea: "saude-publica",
    ods: "ods3",
    authors: ["Carla Gabiati", "Elaine Maria Loureiro"],
    href: "#",
  },
  {
    id: 3,
    title: "Prancheta para Escrita Subaquática",
    type: "Patente",
    category: "patente",
    description: "Permite anotações com segurança debaixo d'água ou sob chuva intensa",
    macroArea: "tecnologia",
    campus: "sinop",
    featuredArea: "tecnologia-informacao",
    ods: "ods9",
    authors: ["Eduardo Bessa P. da Silva"],
    href: "#",
  },
  {
    id: 4,
    title: "GNATA - Jogo Educativo de Entomologia",
    type: "Desenho Industrial",
    category: "desenho-industrial",
    description: "Jogo educativo que transforma o estudo dos insetos em experiência divertida",
    macroArea: "educacao",
    campus: "caceres",
    featuredArea: "biotecnologia",
    ods: "ods4",
    authors: ["Beatriz Marques Freire", "Milaine Fernandes dos Santos"],
    href: "#",
  },
  {
    id: 5,
    title: "QUILEGAL - Aplicativo de Química",
    type: "Programa de Computador",
    category: "programa-computador",
    description: "Aplicativo interativo para ensino de Química com gamificação",
    macroArea: "educacao",
    campus: "sinop",
    featuredArea: "tecnologia-informacao",
    ods: "ods4",
    authors: ["Leonardo Elias Alves", "Cosme da Silva Lorim"],
    href: "#",
  },
]

function SearchResults() {
  const searchParams = useSearchParams()

  const query = searchParams.get("q")?.toLowerCase() || ""
  const macroArea = searchParams.get("macroArea") || ""
  const campus = searchParams.get("campus") || ""
  const category = searchParams.get("category") || ""
  const featuredArea = searchParams.get("featuredArea") || ""
  const ods = searchParams.get("ods") || ""

  const results = useMemo(() => {
    let filtered = technologies

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (tech) =>
          tech.title.toLowerCase().includes(query) ||
          tech.description.toLowerCase().includes(query) ||
          tech.authors.some((author) => author.toLowerCase().includes(query)),
      )
    }

    // Filter by macro area
    if (macroArea) {
      filtered = filtered.filter((tech) => tech.macroArea === macroArea)
    }

    // Filter by campus
    if (campus) {
      filtered = filtered.filter((tech) => tech.campus === campus)
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter((tech) => tech.category === category)
    }

    // Filter by featured area
    if (featuredArea) {
      filtered = filtered.filter((tech) => tech.featuredArea === featuredArea)
    }

    // Filter by ODS
    if (ods) {
      filtered = filtered.filter((tech) => tech.ods === ods)
    }

    return filtered
  }, [query, macroArea, campus, category, featuredArea, ods])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Patente":
        return <Beaker className="w-5 h-5" />
      case "Cultivar":
        return <Sprout className="w-5 h-5" />
      case "Desenho Industrial":
        return <Palette className="w-5 h-5" />
      case "Programa de Computador":
        return <Code className="w-5 h-5" />
      default:
        return <Beaker className="w-5 h-5" />
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Patente":
        return "bg-blue-600"
      case "Cultivar":
        return "bg-green-600"
      case "Desenho Industrial":
        return "bg-purple-600"
      case "Programa de Computador":
        return "bg-orange-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-blue-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resultados da Busca</h1>
            <p className="text-lg text-gray-600">
              Encontradas <strong>{results.length}</strong> tecnologia(s)
            </p>
          </div>

          {results.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-gray-600 text-lg mb-4">
                  Nenhuma tecnologia encontrada com os critérios selecionados.
                </p>
                <Link href="/">
                  <Button className="bg-teal-600 hover:bg-teal-700">Voltar para a busca</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {results.map((tech) => (
                <Card key={tech.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={`${getTypeBadgeColor(tech.type)} flex items-center gap-1.5`}>
                            {getTypeIcon(tech.type)}
                            {tech.type}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>

                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-gray-700">Autores: </span>
                            <span className="text-sm text-gray-600">{tech.authors.join(", ")}</span>
                          </div>
                        </div>
                      </div>

                      <Link href={tech.href}>
                        <Button variant="outline" className="flex-shrink-0 bg-transparent">
                          Ver Detalhes
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function BuscarPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SearchResults />
    </Suspense>
  )
}
