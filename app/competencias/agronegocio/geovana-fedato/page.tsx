import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink, BookOpen, Award, Users, GraduationCap, Briefcase, Globe } from "lucide-react"
import Link from "next/link"

export default function GeovanaFedatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Agronegócio</Badge>
          <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Profa. Dra. Geovana Alves Lima Fedato</h1>
          <p className="text-xl text-gray-600 max-w-4xl text-pretty leading-relaxed">
            Pesquisadora especializada em melhoramento genético vegetal com foco em fruticultura tropical. Coordena
            projetos de desenvolvimento de cultivares de maracujá com alta produtividade e resistência a doenças,
            contribuindo para a inovação no agronegócio brasileiro.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Profile and Contact */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    GF
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-semibold text-gray-900">Professora Doutora</p>
                    <p className="text-sm text-gray-600">UNEMAT - Universidade do Estado de Mato Grosso</p>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Entrar em contato
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Formação Acadêmica
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Doutorado em Agronomia</p>
                      <p className="text-xs text-gray-600">Universidade Estadual Paulista (UNESP)</p>
                      <p className="text-xs text-gray-500">2015 - 2019</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Mestrado em Genética e Melhoramento</p>
                      <p className="text-xs text-gray-600">Universidade Federal de Viçosa (UFV)</p>
                      <p className="text-xs text-gray-500">2013 - 2015</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Graduação em Agronomia</p>
                      <p className="text-xs text-gray-600">UNEMAT</p>
                      <p className="text-xs text-gray-500">2008 - 2012</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Contato Profissional
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:geovana.fedato@unemat.br"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="w-4 h-4" />
                      geovana.fedato@unemat.br
                    </a>
                    <a
                      href="http://lattes.cnpq.br/example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Currículo Lattes
                    </a>
                    <a
                      href="https://linkedin.com/in/example"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Tecnologias Relacionadas
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/tecnologias/solar-maracuja"
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <p className="font-medium text-gray-900 text-sm group-hover:text-blue-700 flex items-center justify-between">
                        Solar - Cultivar de Maracujá
                        <ExternalLink className="w-4 h-4" />
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Melhoramento genético vegetal</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Cargo e Área de Atuação
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Professora Associada</p>
                      <p className="text-sm text-gray-600">Faculdade de Ciências Agrárias e Biológicas - UNEMAT</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Áreas de Atuação:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Melhoramento Genético Vegetal</Badge>
                        <Badge variant="secondary">Fruticultura Tropical</Badge>
                        <Badge variant="secondary">Biotecnologia Agrícola</Badge>
                        <Badge variant="secondary">Agricultura Sustentável</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Macro Areas */}
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Macro Áreas de Competência</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Melhoramento Genético Vegetal</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Fruticultura Tropical</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Biotecnologia Agrícola</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Agricultura Sustentável</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Competencies */}
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Competências Tecnológicas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Seleção e desenvolvimento de cultivares com características agronômicas superiores
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Análise genética e marcadores moleculares para melhoramento assistido
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Avaliação de resistência a doenças e pragas em culturas frutíferas
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Desenvolvimento de protocolos de propagação e cultivo sustentável
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Publicações e Contribuições Relevantes
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Artigos Científicos</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                          <p className="text-sm font-medium text-gray-900 mb-2">
                            Desenvolvimento e caracterização da cultivar Solar de maracujá-amarelo
                          </p>
                          <p className="text-xs text-gray-600 mb-2">
                            Revista Brasileira de Fruticultura, v. 46, p. 1-12, 2024
                          </p>
                          <a href="#" className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Acessar publicação
                          </a>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                          <p className="text-sm font-medium text-gray-900 mb-2">
                            Resistência genética a doenças em cultivares de Passiflora edulis
                          </p>
                          <p className="text-xs text-gray-600 mb-2">
                            Pesquisa Agropecuária Brasileira, v. 58, p. 1-15, 2023
                          </p>
                          <a href="#" className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Acessar publicação
                          </a>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                          <p className="text-sm font-medium text-gray-900 mb-2">
                            Marcadores moleculares aplicados ao melhoramento de fruteiras tropicais
                          </p>
                          <p className="text-xs text-gray-600 mb-2">Ciência Rural, v. 52, p. 1-10, 2022</p>
                          <a href="#" className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Acessar publicação
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Projetos de Pesquisa</h4>
                      <div className="space-y-3">
                        <div className="p-4 bg-white border border-blue-200 rounded-lg">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Desenvolvimento de cultivares de maracujá resistentes a doenças
                          </p>
                          <p className="text-xs text-gray-600 mb-2">FAPEMAT | 2020-2024 | Coordenadora</p>
                          <Badge variant="secondary" className="text-xs">
                            Em andamento
                          </Badge>
                        </div>
                        <div className="p-4 bg-white border border-blue-200 rounded-lg">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Caracterização genética de germoplasma de Passiflora spp.
                          </p>
                          <p className="text-xs text-gray-600 mb-2">CNPq | 2018-2022 | Coordenadora</p>
                          <Badge variant="outline" className="text-xs">
                            Concluído
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Orientações</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-blue-600">8</p>
                          <p className="text-xs text-gray-600">Doutorado</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-blue-600">15</p>
                          <p className="text-xs text-gray-600">Mestrado</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-blue-600">32</p>
                          <p className="text-xs text-gray-600">Iniciação Científica</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Experience */}
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Experiência de Parcerias com Empresas
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Desenvolvimento de cultivares comerciais em parceria com produtores rurais de Mato Grosso
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Consultoria técnica para empresas do setor de fruticultura tropical
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Transferência de tecnologia para cooperativas agrícolas regionais
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-gray-900">Interessado em Projetos Parceiros?</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Entre em contato para discutir oportunidades de colaboração em pesquisa e desenvolvimento de
                    tecnologias agrícolas inovadoras.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Entrar em contato para projetos parceiros
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
