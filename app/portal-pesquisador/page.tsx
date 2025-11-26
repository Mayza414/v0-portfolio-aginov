import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Lightbulb, Scale, Users, ArrowRight, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function PortalPesquisadorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Portal do Pesquisador</h1>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Recursos e orientações para pesquisadores da UNEMAT sobre inovação, proteção intelectual e transferência
              de tecnologia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-purple-100 bg-gradient-to-br from-purple-50 to-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunicar Invenção</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Desenvolveu uma nova tecnologia? Comunique sua invenção à Aginov para iniciar o processo de
                        proteção intelectual.
                      </p>
                      <Link href="/portal-pesquisador/comunicar-invencao">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Acessar Formulário
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cadastrar Competência</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Registre suas competências e áreas de atuação no portfólio para facilitar parcerias e
                        colaborações.
                      </p>
                      <Link href="/competencias">
                        <Button
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          Cadastrar Agora
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Innovation Process Guide */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Processo de Inovação</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Identificação</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Identifique o potencial inovador da sua pesquisa. Avalie se há aplicação prática, diferencial
                      competitivo e viabilidade de mercado.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Proteção</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comunique a invenção à Aginov. Analisaremos o melhor tipo de proteção: patente, registro de
                      software, cultivar ou segredo industrial.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Transferência</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Após a proteção, trabalhamos na transferência da tecnologia para empresas e organizações
                      interessadas, gerando impacto social e econômico.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Intellectual Property Guide */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proteção Intelectual</h2>
              <Card className="border-gray-200">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Scale className="w-6 h-6 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-900">Tipos de Proteção</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Patente de Invenção</p>
                            <p className="text-sm text-gray-600">
                              Produtos ou processos novos com aplicação industrial
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Registro de Software</p>
                            <p className="text-sm text-gray-600">Programas de computador e aplicativos</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Proteção de Cultivares</p>
                            <p className="text-sm text-gray-600">Novas variedades de plantas</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Desenho Industrial</p>
                            <p className="text-sm text-gray-600">Forma ornamental de objetos</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-900">Recursos Úteis</h3>
                      </div>
                      <div className="space-y-3">
                        <a
                          href="#"
                          className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Download className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-gray-900">Guia de Propriedade Intelectual</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Download className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-gray-900">Manual de Comunicação de Invenção</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Download className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-gray-900">Política de Inovação da UNEMAT</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-gray-900">Perguntas Frequentes (FAQ)</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technology Transfer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transferência de Tecnologia</h2>
              <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-white">
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A transferência de tecnologia é o processo pelo qual conhecimentos, habilidades e tecnologias
                    desenvolvidas na universidade são transferidas para o setor produtivo, gerando benefícios econômicos
                    e sociais.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Licenciamento</h4>
                      <p className="text-sm text-gray-600">
                        Concessão de direitos de uso da tecnologia para empresas mediante contrato
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Parcerias</h4>
                      <p className="text-sm text-gray-600">
                        Desenvolvimento conjunto de projetos com empresas e instituições
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Spin-offs</h4>
                      <p className="text-sm text-gray-600">
                        Criação de empresas baseadas em tecnologias desenvolvidas na universidade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <Card className="border-purple-100 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Precisa de Ajuda?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Nossa equipe está pronta para orientar você em todas as etapas do processo de inovação e proteção
                  intelectual.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <FileText className="w-5 h-5 mr-2" />
                    Agendar Consultoria
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Falar com a Aginov
                  </Button>
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
