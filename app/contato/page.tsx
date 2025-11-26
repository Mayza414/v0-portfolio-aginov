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
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    // TODO: Implement form submission logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Entre em Contato</h1>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Estamos prontos para atender empresas, pesquisadores e parceiros interessados em inovação e transferência
              de tecnologia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-teal-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Endereço</p>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Av. Tancredo Neves, 1095
                            <br />
                            Cavalhada, Cáceres - MT
                            <br />
                            CEP 78200-000
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Telefone</p>
                          <p className="text-sm text-gray-600">(65) 3221-0000</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">E-mail</p>
                          <p className="text-sm text-gray-600">aginov@unemat.br</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Segunda a Sexta</span>
                        <span className="font-medium text-gray-900">8h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábado e Domingo</span>
                        <span className="font-medium text-gray-900">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-teal-100">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envie sua Mensagem</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="organization">Organização/Empresa</Label>
                          <Input
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="Nome da organização"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Assunto *</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parcerias">Parcerias e Colaborações</SelectItem>
                            <SelectItem value="tecnologias">Interesse em Tecnologias</SelectItem>
                            <SelectItem value="licenciamento">Licenciamento de Tecnologia</SelectItem>
                            <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                            <SelectItem value="eventos">Eventos e Workshops</SelectItem>
                            <SelectItem value="imprensa">Assessoria de Imprensa</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Descreva sua solicitação ou dúvida..."
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Partnership CTA */}
            <Card className="mt-12 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Empresas e Organizações</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Interessado em estabelecer parcerias estratégicas, licenciar tecnologias ou desenvolver projetos
                      conjuntos? Nossa equipe está pronta para apresentar as oportunidades de colaboração com a UNEMAT.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700">Agendar Reunião</Button>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        Conhecer Tecnologias
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
