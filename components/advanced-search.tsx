"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdvancedSearch() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    macroArea: "",
    campus: "",
    category: "",
    featuredArea: "",
    ods: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    if (filters.macroArea) {
      params.set("macroArea", filters.macroArea)
    }

    if (filters.campus) {
      params.set("campus", filters.campus)
    }

    if (filters.category) {
      params.set("category", filters.category)
    }

    if (filters.featuredArea) {
      params.set("featuredArea", filters.featuredArea)
    }

    if (filters.ods) {
      params.set("ods", filters.ods)
    }

    router.push(`/buscar?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setFilters({
      macroArea: "",
      campus: "",
      category: "",
      featuredArea: "",
      ods: "",
    })
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm">
      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">
        Explore o portfólio por palavras-chave ou nomes dos inventores. A busca também pode ser mais completa, usando
        filtros avançados.
      </p>

      {/* Main Search Input */}
      <div className="relative">
        <Input
          type="text"
          placeholder="O que deseja buscar?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="h-14 text-base border-2 border-[#f97316] focus-visible:ring-[#f97316] rounded-full px-6"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={filters.macroArea} onValueChange={(value) => setFilters({ ...filters, macroArea: value })}>
          <SelectTrigger className="h-12 border-2 border-[#f97316] rounded-full px-6 text-gray-500">
            <SelectValue placeholder="Macro Áreas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="acessibilidade">Acessibilidade</SelectItem>
            <SelectItem value="agronegocio">Agronegócio</SelectItem>
            <SelectItem value="arquitetura">Arquitetura e Construção Civil</SelectItem>
            <SelectItem value="automacao">Automação e Robótica</SelectItem>
            <SelectItem value="cosmeticos">Cosméticos</SelectItem>
            <SelectItem value="educacao">Educação</SelectItem>
            <SelectItem value="farmacos">Fármacos</SelectItem>
            <SelectItem value="industria-quimica">Indústria Química</SelectItem>
            <SelectItem value="maquinas">Máquinas e Equipamentos</SelectItem>
            <SelectItem value="novos-materiais">Novos Materiais</SelectItem>
            <SelectItem value="papel">Papel e Celulose</SelectItem>
            <SelectItem value="pecuaria">Pecuária</SelectItem>
            <SelectItem value="pesca">Pesca e Aquicultura</SelectItem>
            <SelectItem value="alimentos">Produtos Alimentícios</SelectItem>
            <SelectItem value="reciclagem">Reciclagem de Materiais</SelectItem>
            <SelectItem value="saude-animal">Saúde Animal</SelectItem>
            <SelectItem value="saude-humana">Saúde Humana</SelectItem>
            <SelectItem value="seguranca">Segurança Pública</SelectItem>
            <SelectItem value="tecnologia">Tecnologia da Informação e Comunicação</SelectItem>
            <SelectItem value="residuos">Tratamento de Resíduos</SelectItem>
            <SelectItem value="agua">Distribuição e Tratamento de Água e Esgoto</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.campus} onValueChange={(value) => setFilters({ ...filters, campus: value })}>
          <SelectTrigger className="h-12 border-2 border-[#f97316] rounded-full px-6 text-gray-500">
            <SelectValue placeholder="Unidades da UNEMAT" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="caceres">Cáceres</SelectItem>
            <SelectItem value="sinop">Sinop</SelectItem>
            <SelectItem value="tangara">Tangará da Serra</SelectItem>
            <SelectItem value="alta-floresta">Alta Floresta</SelectItem>
            <SelectItem value="barra-bugres">Barra do Bugres</SelectItem>
            <SelectItem value="colider">Colíder</SelectItem>
            <SelectItem value="juara">Juara</SelectItem>
            <SelectItem value="luciara">Luciara</SelectItem>
            <SelectItem value="nova-mutum">Nova Mutum</SelectItem>
            <SelectItem value="pontes-lacerda">Pontes e Lacerda</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
          <SelectTrigger className="h-12 border-2 border-[#f97316] rounded-full px-6 text-gray-500">
            <SelectValue placeholder="Categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="patente">Patente</SelectItem>
            <SelectItem value="cultivar">Cultivar</SelectItem>
            <SelectItem value="desenho-industrial">Desenho Industrial</SelectItem>
            <SelectItem value="programa-computador">Programa de Computador</SelectItem>
            <SelectItem value="marca">Marca</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.featuredArea} onValueChange={(value) => setFilters({ ...filters, featuredArea: value })}>
          <SelectTrigger className="h-12 border-2 border-[#f97316] rounded-full px-6 text-gray-500">
            <SelectValue placeholder="Áreas em destaque" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="biotecnologia">Biotecnologia</SelectItem>
            <SelectItem value="agricultura-sustentavel">Agricultura Sustentável</SelectItem>
            <SelectItem value="saude-publica">Saúde Pública</SelectItem>
            <SelectItem value="tecnologia-informacao">Tecnologia da Informação</SelectItem>
            <SelectItem value="energias-renovaveis">Energias Renováveis</SelectItem>
            <SelectItem value="biodiversidade">Biodiversidade</SelectItem>
            <SelectItem value="nanotecnologia">Nanotecnologia</SelectItem>
            <SelectItem value="economia-circular">Economia Circular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Select value={filters.ods} onValueChange={(value) => setFilters({ ...filters, ods: value })}>
        <SelectTrigger className="h-12 border-2 border-[#f97316] rounded-full px-6 max-w-md text-gray-500">
          <SelectValue placeholder="Objetivos de Desenvolvimento Sustentável (ODS)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ods1">ODS 1 - Erradicação da Pobreza</SelectItem>
          <SelectItem value="ods2">ODS 2 - Fome Zero e Agricultura Sustentável</SelectItem>
          <SelectItem value="ods3">ODS 3 - Saúde e Bem-Estar</SelectItem>
          <SelectItem value="ods4">ODS 4 - Educação de Qualidade</SelectItem>
          <SelectItem value="ods6">ODS 6 - Água Potável e Saneamento</SelectItem>
          <SelectItem value="ods7">ODS 7 - Energia Limpa e Acessível</SelectItem>
          <SelectItem value="ods9">ODS 9 - Indústria, Inovação e Infraestrutura</SelectItem>
          <SelectItem value="ods11">ODS 11 - Cidades e Comunidades Sustentáveis</SelectItem>
          <SelectItem value="ods12">ODS 12 - Consumo e Produção Responsáveis</SelectItem>
          <SelectItem value="ods13">ODS 13 - Ação Contra a Mudança Global do Clima</SelectItem>
          <SelectItem value="ods15">ODS 15 - Vida Terrestre</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex justify-end gap-3">
        <Button
          onClick={clearFilters}
          variant="outline"
          className="h-12 px-8 rounded-full border-2 bg-transparent hover:bg-gray-50"
        >
          Limpar
        </Button>
        <Button
          onClick={handleSearch}
          className="h-12 px-8 bg-[#0891b2] hover:bg-[#0e7490] text-white rounded-full font-medium"
        >
          <Search className="w-5 h-5 mr-2" />
          Pesquisar
        </Button>
      </div>
    </div>
  )
}
