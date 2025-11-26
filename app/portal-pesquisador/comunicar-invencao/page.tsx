"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, AlertCircle, FileText } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ComunicarInvencaoPage() {
  const [formData, setFormData] = useState({
    // Inventor data
    inventorName: "",
    inventorEmail: "",
    inventorPhone: "",
    department: "",
    // Invention data
    inventionTitle: "",
    inventionType: "",
    description: "",
    problem: "",
    solution: "",
    advantages: "",
    applications: "",
    developmentStage: "",
    // Additional info
    hasPrototype: false,
    hasPublication: false,
    publicationDetails: "",
    hasPartners: false,
    partnersDetails: "",
    confidentiality: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Invention disclosure form submitted:", formData)
    // TODO: Implement form submission logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Comunicação de Invenção</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Preencha o formulário abaixo para comunicar sua invenção à Aginov. Todas as informações serão tratadas
                com confidencialidade.
              </p>
            </div>

            <Alert className="mb-8 border-purple-200 bg-purple-50">
              <AlertCircle className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-purple-900">
                <strong>Importante:</strong> Não divulgue sua invenção publicamente antes de comunicá-la à Aginov. A
                divulgação prévia pode comprometer a possibilidade de proteção intelectual.
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Inventor Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-600" />
                    Dados do Inventor
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="inventorName">Nome Completo *</Label>
                      <Input
                        id="inventorName"
                        required
                        value={formData.inventorName}
                        onChange={(e) => setFormData({ ...formData, inventorName: e.target.value })}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="inventorEmail">E-mail Institucional *</Label>
                        <Input
                          id="inventorEmail"
                          type="email"
                          required
                          value={formData.inventorEmail}
                          onChange={(e) => setFormData({ ...formData, inventorEmail: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inventorPhone">Telefone *</Label>
                        <Input
                          id="inventorPhone"
                          type="tel"
                          required
                          value={formData.inventorPhone}
                          onChange={(e) => setFormData({ ...formData, inventorPhone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="department">Departamento/Faculdade *</Label>
                      <Input
                        id="department"
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Invention Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dados da Invenção</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="inventionTitle">Título da Invenção *</Label>
                      <Input
                        id="inventionTitle"
                        required
                        value={formData.inventionTitle}
                        onChange={(e) => setFormData({ ...formData, inventionTitle: e.target.value })}
                        placeholder="Dê um nome descritivo à sua invenção"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inventionType">Tipo de Invenção *</Label>
                      <Select
                        value={formData.inventionType}
                        onValueChange={(value) => setFormData({ ...formData, inventionType: value })}
                      >
                        <SelectTrigger id="inventionType">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="produto">Produto</SelectItem>
                          <SelectItem value="processo">Processo</SelectItem>
                          <SelectItem value="software">Software</SelectItem>
                          <SelectItem value="cultivar">Cultivar</SelectItem>
                          <SelectItem value="desenho-industrial">Desenho Industrial</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Descrição da Invenção *</Label>
                      <Textarea
                        id="description"
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Descreva detalhadamente sua invenção, incluindo suas características técnicas..."
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="problem">Problema Solucionado *</Label>
                      <Textarea
                        id="problem"
                        required
                        value={formData.problem}
                        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                        placeholder="Qual problema ou necessidade sua invenção resolve?"
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="solution">Como a Invenção Soluciona o Problema *</Label>
                      <Textarea
                        id="solution"
                        required
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        placeholder="Explique como sua invenção resolve o problema identificado..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="advantages">Vantagens e Diferenciais *</Label>
                      <Textarea
                        id="advantages"
                        required
                        value={formData.advantages}
                        onChange={(e) => setFormData({ ...formData, advantages: e.target.value })}
                        placeholder="Quais são as vantagens da sua invenção em relação às soluções existentes?"
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="applications">Aplicações Práticas *</Label>
                      <Textarea
                        id="applications"
                        required
                        value={formData.applications}
                        onChange={(e) => setFormData({ ...formData, applications: e.target.value })}
                        placeholder="Em quais áreas ou setores sua invenção pode ser aplicada?"
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="developmentStage">Estágio de Desenvolvimento *</Label>
                      <Select
                        value={formData.developmentStage}
                        onValueChange={(value) => setFormData({ ...formData, developmentStage: value })}
                      >
                        <SelectTrigger id="developmentStage">
                          <SelectValue placeholder="Selecione o estágio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conceito">Conceito/Ideia</SelectItem>
                          <SelectItem value="prototipo-laboratorio">Protótipo de Laboratório</SelectItem>
                          <SelectItem value="prototipo-funcional">Protótipo Funcional</SelectItem>
                          <SelectItem value="testes-campo">Testes em Campo</SelectItem>
                          <SelectItem value="pronto-mercado">Pronto para Mercado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informações Adicionais</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="hasPrototype"
                        checked={formData.hasPrototype}
                        onCheckedChange={(checked) => setFormData({ ...formData, hasPrototype: checked as boolean })}
                      />
                      <div>
                        <Label htmlFor="hasPrototype" className="cursor-pointer">
                          Possui protótipo ou prova de conceito?
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="hasPublication"
                          checked={formData.hasPublication}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, hasPublication: checked as boolean })
                          }
                        />
                        <div>
                          <Label htmlFor="hasPublication" className="cursor-pointer">
                            A invenção foi divulgada em publicações, eventos ou apresentações?
                          </Label>
                        </div>
                      </div>
                      {formData.hasPublication && (
                        <Textarea
                          value={formData.publicationDetails}
                          onChange={(e) => setFormData({ ...formData, publicationDetails: e.target.value })}
                          placeholder="Descreva onde e quando foi divulgada..."
                          rows={3}
                          className="resize-none ml-7"
                        />
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="hasPartners"
                          checked={formData.hasPartners}
                          onCheckedChange={(checked) => setFormData({ ...formData, hasPartners: checked as boolean })}
                        />
                        <div>
                          <Label htmlFor="hasPartners" className="cursor-pointer">
                            Há outros inventores ou parceiros envolvidos?
                          </Label>
                        </div>
                      </div>
                      {formData.hasPartners && (
                        <Textarea
                          value={formData.partnersDetails}
                          onChange={(e) => setFormData({ ...formData, partnersDetails: e.target.value })}
                          placeholder="Liste os nomes e instituições dos demais envolvidos..."
                          rows={3}
                          className="resize-none ml-7"
                        />
                      )}
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <Checkbox
                        id="confidentiality"
                        required
                        checked={formData.confidentiality}
                        onCheckedChange={(checked) => setFormData({ ...formData, confidentiality: checked as boolean })}
                      />
                      <div>
                        <Label htmlFor="confidentiality" className="cursor-pointer">
                          Declaro que as informações fornecidas são verdadeiras e concordo com os termos de
                          confidencialidade da Aginov *
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  Salvar Rascunho
                </Button>
                <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Comunicação
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
