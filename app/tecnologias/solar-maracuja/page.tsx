import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ExternalLink, FileText, Scale, Beaker } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import InterestFormDialog from "@/components/interest-form-dialog"

export default function SolarMaracujaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">Agronegócio</Badge>
          <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Solar - Cultivar de Maracujá</h1>
          <p className="text-xl text-gray-600 max-w-4xl text-pretty leading-relaxed">
            Desenvolvida pela UNEMAT, a cultivar de maracujá Solar combina alta produtividade, frutos maiores e
            resistência a doenças, o que reduz perdas e aumenta o retorno ao produtor. Originada de uma seleção genética
            criteriosa, é ideal para solos argilosos bem drenados. Essa tecnologia representa uma excelente oportunidade
            para produtores e empresas que buscam inovação no campo com menor risco e maior rentabilidade.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Image and Coordinator */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="overflow-hidden border-green-100">
                <Image
                  src="/passion-fruit-plantation-with-yellow-fruits.jpg"
                  alt="Plantação de maracujá Solar"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </Card>

              <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Beaker className="w-5 h-5 text-teal-600" />
                    <h3 className="font-semibold text-lg text-gray-900">Estágio de Desenvolvimento</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-teal-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-teal-600">TRL 9</span>
                      <Badge className="bg-green-600">Pronto para Mercado</Badge>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sistema comprovado em ambiente operacional. Tecnologia madura e pronta para comercialização.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold text-lg text-gray-900">Propriedade Intelectual</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <p className="text-xs text-gray-500 mb-1">Tipo</p>
                      <p className="font-medium text-gray-900">Cultivar</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <p className="text-xs text-gray-500 mb-1">Registro MAPA</p>
                      <p className="font-medium text-gray-900">42313</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <p className="text-xs text-gray-500 mb-1">Data do Registro</p>
                      <p className="font-medium text-gray-900">26/12/2019</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <p className="text-xs text-gray-500 mb-1">Situação</p>
                      <Badge className="bg-green-600">Registrada</Badge>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <p className="text-xs text-gray-500 mb-1">Titularidade</p>
                      <p className="font-medium text-gray-900 text-sm">FAPEMAT, UNEMAT, FELTRIN</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Coordenadora</h3>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Profa. Dra.</p>
                    <p className="text-green-700 font-semibold">Geovana Alves Lima Fedato</p>
                  </div>
                  <div className="space-y-3 mt-6">
                    <InterestFormDialog technologyName="Solar - Cultivar de Maracujá" />
                    <Button
                      variant="outline"
                      className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Baixar Ficha Técnica
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Competências Relacionadas */}
              <Card className="border-green-100 bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Competências Relacionadas
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Conheça os pesquisadores e suas competências que contribuíram para o desenvolvimento desta
                    tecnologia:
                  </p>
                  <Link
                    href="/competencias/agronegocio/geovana-fedato"
                    className="block p-4 bg-white border border-green-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-green-700">
                          Profa. Dra. Geovana Alves Lima Fedato
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Coordenadora do Projeto</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="secondary" className="text-xs">
                            Melhoramento Genético
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Fruticultura Tropical
                          </Badge>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-600 flex-shrink-0" />
                    </div>
                  </Link>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Aplicações</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 text-center">Melhoramento genético vegetal</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 text-center">Cultivo em larga escala</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900 text-center">Agricultura familiar sustentável</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Problem Solved */}
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Problema Solucionado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A cultivar Solar foi desenvolvida para superar os principais desafios enfrentados pelos produtores
                    de maracujá, incluindo baixa produtividade, suscetibilidade a doenças e frutos de tamanho irregular.
                    Com sua genética aprimorada, oferece uma solução completa para aumentar a rentabilidade e
                    sustentabilidade da produção.
                  </p>
                </CardContent>
              </Card>

              {/* Advantages */}
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Vantagens</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Alta produtividade com frutos de maior calibre e peso
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">
                        Resistência natural a principais doenças da cultura
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">Adaptação ideal para solos argilosos bem drenados</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">Redução de perdas e aumento do retorno financeiro</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Collaborators */}
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Principais Colaboradores</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900">Profa. Dra. Geovana Alves Lima Fedato</p>
                      <p className="text-sm text-gray-600">Coordenadora do Projeto</p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg mt-6 mb-3 text-gray-900">Melhoristas</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Willian Krause",
                      "Leonarda Grillo Neves",
                      "Petterson Baptista da Luz",
                      "Celice Alexandre Silva",
                      "Leandro Rafael Fachi",
                      "Dejânia Vieira de Araújo",
                    ].map((name) => (
                      <div key={name} className="text-sm text-gray-600">
                        • {name}
                      </div>
                    ))}
                  </div>
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
