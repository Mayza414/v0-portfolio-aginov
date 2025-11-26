"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function CadastrarPage() {
  const [formType, setFormType] = useState<"tecnologia" | "competencia">("tecnologia")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cadastrar no Portfólio</h1>
            <p className="text-lg text-gray-600">Registre uma nova tecnologia ou competência no portfólio da AGINOV</p>
          </div>

          <Tabs value={formType} onValueChange={(v) => setFormType(v as "tecnologia" | "competencia")} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tecnologia">Cadastrar Tecnologia</TabsTrigger>
              <TabsTrigger value="competencia">Cadastrar Competência</TabsTrigger>
            </TabsList>

            <TabsContent value="tecnologia">
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Cadastro de Tecnologia</CardTitle>
                  <CardDescription>
                    Preencha as informações sobre a tecnologia desenvolvida para inclusão no portfólio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="tech-name">Nome da Tecnologia *</Label>
                      <Input id="tech-name" placeholder="Ex: Cultivar Solar de Maracujá" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-category">Categoria *</Label>
                      <Select required>
                        <SelectTrigger id="tech-category">
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cultivares">Cultivares</SelectItem>
                          <SelectItem value="processos">Processos</SelectItem>
                          <SelectItem value="produtos">Produtos</SelectItem>
                          <SelectItem value="software">Software</SelectItem>
                          <SelectItem value="metodologias">Metodologias</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tech-area">Macro Área *</Label>
                        <Select required>
                          <SelectTrigger id="tech-area">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="agronegocio">Agronegócio</SelectItem>
                            <SelectItem value="saude">Saúde</SelectItem>
                            <SelectItem value="tecnologia">Tecnologia</SelectItem>
                            <SelectItem value="meio-ambiente">Meio Ambiente</SelectItem>
                            <SelectItem value="educacao">Educação</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tech-trl">Nível de Maturidade (TRL) *</Label>
                        <Select required>
                          <SelectTrigger id="tech-trl">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">TRL 1 - Princípios básicos observados</SelectItem>
                            <SelectItem value="2">TRL 2 - Conceito formulado</SelectItem>
                            <SelectItem value="3">TRL 3 - Prova de conceito experimental</SelectItem>
                            <SelectItem value="4">TRL 4 - Validação em laboratório</SelectItem>
                            <SelectItem value="5">TRL 5 - Validação em ambiente relevante</SelectItem>
                            <SelectItem value="6">TRL 6 - Demonstração em ambiente relevante</SelectItem>
                            <SelectItem value="7">TRL 7 - Demonstração em ambiente operacional</SelectItem>
                            <SelectItem value="8">TRL 8 - Sistema completo e qualificado</SelectItem>
                            <SelectItem value="9">TRL 9 - Sistema comprovado em ambiente operacional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-description">Descrição Técnica *</Label>
                      <Textarea
                        id="tech-description"
                        placeholder="Descreva os aspectos técnicos da tecnologia..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-business">Descrição Comercial *</Label>
                      <Textarea
                        id="tech-business"
                        placeholder="Descreva as aplicações comerciais e benefícios para o mercado..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-advantages">Vantagens Competitivas *</Label>
                      <Textarea
                        id="tech-advantages"
                        placeholder="Liste as principais vantagens e diferenciais da tecnologia..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-applications">Aplicações de Mercado *</Label>
                      <Textarea
                        id="tech-applications"
                        placeholder="Descreva as possíveis aplicações no mercado..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <Label>Propriedade Intelectual</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tech-ip-type">Tipo de PI</Label>
                          <Select>
                            <SelectTrigger id="tech-ip-type">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="patente">Patente</SelectItem>
                              <SelectItem value="software">Registro de Software</SelectItem>
                              <SelectItem value="cultivar">Proteção de Cultivar</SelectItem>
                              <SelectItem value="marca">Marca</SelectItem>
                              <SelectItem value="know-how">Know-how</SelectItem>
                              <SelectItem value="nenhum">Nenhum</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="tech-ip-number">Número de Registro</Label>
                          <Input id="tech-ip-number" placeholder="Ex: BR1020230123456" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tech-ip-status">Status da PI</Label>
                        <Select>
                          <SelectTrigger id="tech-ip-status">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="depositado">Depositado</SelectItem>
                            <SelectItem value="concedido">Concedido</SelectItem>
                            <SelectItem value="em-analise">Em análise</SelectItem>
                            <SelectItem value="licenciado">Licenciado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-authors">Autores/Inventores *</Label>
                      <Textarea
                        id="tech-authors"
                        placeholder="Liste os nomes dos autores/inventores (um por linha)"
                        rows={3}
                        required
                      />
                      <p className="text-sm text-gray-500">Informe os nomes completos dos pesquisadores envolvidos</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-keywords">Palavras-chave *</Label>
                      <Input
                        id="tech-keywords"
                        placeholder="Ex: agricultura, maracujá, melhoramento genético"
                        required
                      />
                      <p className="text-sm text-gray-500">Separe as palavras-chave por vírgula</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-image">Imagem da Tecnologia</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-sm text-gray-600 mb-2">Clique para fazer upload ou arraste uma imagem</p>
                        <p className="text-xs text-gray-500">PNG, JPG ou JPEG (máx. 5MB)</p>
                        <Input id="tech-image" type="file" accept="image/*" className="hidden" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-video">Link de Vídeo (opcional)</Label>
                      <Input id="tech-video" type="url" placeholder="https://youtube.com/..." />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="tech-terms" required />
                      <label htmlFor="tech-terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        Declaro que as informações fornecidas são verdadeiras e autorizo a publicação desta tecnologia
                        no portfólio da AGINOV/UNEMAT *
                      </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" size="lg" className="flex-1">
                        Enviar Cadastro
                      </Button>
                      <Button type="button" variant="outline" size="lg" asChild>
                        <Link href="/">Cancelar</Link>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competencia">
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Cadastro de Competência</CardTitle>
                  <CardDescription>
                    Preencha suas informações para inclusão no portfólio de competências
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="comp-name">Nome Completo *</Label>
                        <Input id="comp-name" placeholder="Seu nome completo" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comp-title">Titulação *</Label>
                        <Select required>
                          <SelectTrigger id="comp-title">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="graduacao">Graduação</SelectItem>
                            <SelectItem value="especializacao">Especialização</SelectItem>
                            <SelectItem value="mestrado">Mestrado</SelectItem>
                            <SelectItem value="doutorado">Doutorado</SelectItem>
                            <SelectItem value="pos-doutorado">Pós-Doutorado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-area">Área de Atuação *</Label>
                      <Select required>
                        <SelectTrigger id="comp-area">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agronegocio">Agronegócio</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="meio-ambiente">Meio Ambiente</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="ciencias-sociais">Ciências Sociais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-specialties">Especialidades *</Label>
                      <Textarea
                        id="comp-specialties"
                        placeholder="Liste suas principais áreas de especialização..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-bio">Biografia Profissional *</Label>
                      <Textarea
                        id="comp-bio"
                        placeholder="Descreva sua trajetória acadêmica e profissional..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-research">Linhas de Pesquisa *</Label>
                      <Textarea
                        id="comp-research"
                        placeholder="Descreva suas principais linhas de pesquisa..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="comp-email">E-mail Profissional *</Label>
                        <Input id="comp-email" type="email" placeholder="seu.email@unemat.br" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comp-phone">Telefone</Label>
                        <Input id="comp-phone" type="tel" placeholder="(00) 00000-0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-lattes">Link do Currículo Lattes *</Label>
                      <Input id="comp-lattes" type="url" placeholder="http://lattes.cnpq.br/..." required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-orcid">ORCID</Label>
                      <Input id="comp-orcid" placeholder="0000-0000-0000-0000" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-technologies">Tecnologias Desenvolvidas</Label>
                      <Textarea
                        id="comp-technologies"
                        placeholder="Liste as principais tecnologias que você desenvolveu ou participou..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-publications">Principais Publicações</Label>
                      <Textarea
                        id="comp-publications"
                        placeholder="Liste suas principais publicações (artigos, livros, patentes)..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-projects">Projetos em Andamento</Label>
                      <Textarea
                        id="comp-projects"
                        placeholder="Descreva os projetos de pesquisa em andamento..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comp-photo">Foto Profissional</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-sm text-gray-600 mb-2">Clique para fazer upload ou arraste uma foto</p>
                        <p className="text-xs text-gray-500">PNG ou JPG (máx. 2MB)</p>
                        <Input id="comp-photo" type="file" accept="image/*" className="hidden" />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="comp-terms" required />
                      <label htmlFor="comp-terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        Declaro que as informações fornecidas são verdadeiras e autorizo a publicação do meu perfil no
                        portfólio de competências da AGINOV/UNEMAT *
                      </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" size="lg" className="flex-1">
                        Enviar Cadastro
                      </Button>
                      <Button type="button" variant="outline" size="lg" asChild>
                        <Link href="/competencias">Cancelar</Link>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
