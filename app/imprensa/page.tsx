import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, FileText, ImageIcon, Video } from "lucide-react"

export default function ImprensaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Área de Imprensa</h1>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Materiais, releases e contatos para jornalistas e profissionais de comunicação
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Press Contact */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contato para Imprensa</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessoria de Comunicação</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">E-mail</p>
                          <p className="font-medium text-gray-900">imprensa@unemat.br</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Telefone</p>
                          <p className="font-medium text-gray-900">(65) 3221-0000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Segunda a Sexta</span>
                        <span className="font-medium text-gray-900">8h às 18h</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Para solicitações urgentes fora do horário comercial, entre em contato pelo e-mail com o assunto
                        "URGENTE".
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Press Releases */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Releases Recentes</h2>
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-slate-600" />
                          <span className="text-sm text-gray-500">15 de fevereiro de 2025</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          UNEMAT registra cultivar de maracujá com alta produtividade
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Tecnologia desenvolvida por pesquisadores da universidade promete aumentar em até 40% a
                          produtividade de maracujá em Mato Grosso.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4 flex-shrink-0 bg-transparent">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-slate-600" />
                          <span className="text-sm text-gray-500">8 de fevereiro de 2025</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Aginov lança programa de incentivo à inovação tecnológica
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Iniciativa visa apoiar pesquisadores na proteção e comercialização de suas invenções, com foco
                          em transferência de tecnologia.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4 flex-shrink-0 bg-transparent">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-slate-600" />
                          <span className="text-sm text-gray-500">1 de fevereiro de 2025</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Primeira transferência de tecnologia do ano fortalece parceria universidade-empresa
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Acordo de licenciamento marca início de colaboração estratégica entre UNEMAT e setor produtivo
                          regional.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4 flex-shrink-0 bg-transparent">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Media Kit */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kit de Mídia</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Logotipos</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Logos da UNEMAT e Aginov em diferentes formatos e versões
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar (ZIP)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fotos Institucionais</h3>
                    <p className="text-sm text-gray-600 mb-4">Imagens de alta resolução de instalações e eventos</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar (ZIP)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <Video className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vídeos Institucionais</h3>
                    <p className="text-sm text-gray-600 mb-4">Materiais audiovisuais sobre a Aginov e tecnologias</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* About Section */}
            <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre a Aginov</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A Agência de Inovação da UNEMAT (Aginov) é responsável por gerir a política de inovação da
                    universidade, promovendo a proteção da propriedade intelectual e a transferência de tecnologias
                    desenvolvidas na instituição para o setor produtivo.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Fundada em 2010, a Aginov atua como ponte entre pesquisadores, empresas e sociedade, facilitando a
                    transformação de conhecimento científico em soluções práticas que geram impacto econômico e social.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                      <p className="text-4xl font-bold text-slate-900 mb-2">50+</p>
                      <p className="text-sm text-gray-600">Tecnologias Protegidas</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                      <p className="text-4xl font-bold text-slate-900 mb-2">120+</p>
                      <p className="text-sm text-gray-600">Pesquisadores Cadastrados</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                      <p className="text-4xl font-bold text-slate-900 mb-2">25+</p>
                      <p className="text-sm text-gray-600">Parcerias Ativas</p>
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
