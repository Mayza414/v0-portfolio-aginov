"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, ExternalLink, GraduationCap, X } from "lucide-react"
import Link from "next/link"

// Mock data for researchers
const researchers = [
  {
    id: 1,
    name: "Profa. Dra. Geovana Alves Lima Fedato",
    area: "Agronegócio",
    specialties: ["Melhoramento Genético", "Fruticultura Tropical"],
    technologies: ["Solar - Cultivar de Maracujá"],
    href: "/competencias/agronegocio/geovana-fedato",
  },
  {
    id: 2,
    name: "Prof. Dr. João Silva Santos",
    area: "Tecnologia da Informação",
    specialties: ["Inteligência Artificial", "Machine Learning"],
    technologies: ["Sistema de Análise Preditiva"],
    href: "#",
  },
  {
    id: 3,
    name: "Profa. Dra. Maria Oliveira Costa",
    area: "Saúde Humana",
    specialties: ["Farmacologia", "Produtos Naturais"],
    technologies: ["Extrato Medicinal de Própolis"],
    href: "#",
  },
  {
    id: 4,
    name: "Prof. Dr. Carlos Eduardo Mendes",
    area: "Educação",
    specialties: ["Tecnologias Educacionais", "Ensino de Ciências"],
    technologies: ["QUILEGAL - Aplicativo de Química"],
    href: "#",
  },
]

function ResearcherSearchResults() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "")
  const [selectedArea, setSelectedArea] = useState(searchParams.get("area") || "all")
  const [showFilters, setShowFilters] = useState(false)
  const [results, setResults] = useState(researchers)

  useEffect(() => {
    const query = searchParams.get("q")?.toLowerCase() || ""
    const area = searchParams.get("area") || "all"

    let filtered = researchers

    if (query) {
      filtered = filtered.filter(
        (researcher) =>
          researcher.name.toLowerCase().includes(query) ||
          researcher.specialties.some((s) => s.toLowerCase().includes(query)) ||
          researcher.technologies.some((t) => t.toLowerCase().includes(query)),
      )
    }

    if (area !== "all") {
      filtered = filtered.filter((researcher) => researcher.area === area)
    }

    setResults(filtered)
    setSearchTerm(query)
    setSelectedArea(area)
  }, [searchParams])

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (searchTerm) {
      params.set("q", searchTerm)
    }

    if (selectedArea !== "all") {
      params.set("area", selectedArea)
    }

    router.push(`/competencias/buscar?${params.toString()}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-blue-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Buscar Pesquisadores</h1>
            <p className="text-lg text-gray-600">
              Encontre pesquisadores por nome, área de atuação ou tecnologias associadas
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Buscar por nome, especialidade ou tecnologia..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="h-12 pl-4 pr-10 text-base"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-6">
                    <Filter className="w-5 h-5 mr-2" />
                    Filtros
                  </Button>
                  <Button onClick={handleSearch} className="h-12 px-6 bg-teal-600 hover:bg-teal-700">
                    <Search className="w-5 h-5 mr-2" />
                    Buscar
                  </Button>
                </div>

                {showFilters && (
                  <div className="pt-4 border-t">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Área de Atuação</label>
                        <Select value={selectedArea} onValueChange={setSelectedArea}>
                          <SelectTrigger>
                            <SelectValue placeholder="Todas as áreas" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas as áreas</SelectItem>
                            <SelectItem value="Agronegócio">Agronegócio</SelectItem>
                            <SelectItem value="Tecnologia da Informação">Tecnologia da Informação</SelectItem>
                            <SelectItem value="Saúde Humana">Saúde Humana</SelectItem>
                            <SelectItem value="Educação">Educação</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600">
              Encontrados <strong>{results.length}</strong> pesquisador(es)
            </p>
          </div>

          {results.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-gray-600 text-lg mb-4">
                  Nenhum pesquisador encontrado com os critérios selecionados.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedArea("all")
                    router.push("/competencias/buscar")
                  }}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Limpar busca
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {results.map((researcher) => (
                <Card key={researcher.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                            {researcher.name
                              .split(" ")
                              .slice(0, 2)
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{researcher.name}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <GraduationCap className="w-4 h-4" />
                              {researcher.area}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Especialidades:</p>
                            <div className="flex flex-wrap gap-2">
                              {researcher.specialties.map((specialty) => (
                                <Badge key={specialty} variant="secondary">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Tecnologias Associadas:</p>
                            <div className="flex flex-wrap gap-2">
                              {researcher.technologies.map((tech) => (
                                <Badge key={tech} className="bg-green-600">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link href={researcher.href}>
                        <Button variant="outline" className="ml-4 bg-transparent">
                          Ver Perfil
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

export default function BuscarCompetenciasPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResearcherSearchResults />
    </Suspense>
  )
}
