import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for news
const featuredNews = {
  id: 1,
  title: "FAPEMAT lança edital de R$ 5 milhões para projetos de inovação tecnológica",
  excerpt:
    "Novo edital visa apoiar pesquisas aplicadas com potencial de transferência para o setor produtivo. Inscrições abertas até 30 de março.",
  category: "Editais",
  date: "2025-02-15",
  image: "/agricultural-research-lab.png",
  featured: true,
}

const news = [
  {
    id: 2,
    title: "Pesquisadora da UNEMAT recebe prêmio nacional por desenvolvimento de cultivar de maracujá",
    excerpt:
      "Profa. Dra. Geovana Fedato foi reconhecida pela Sociedade Brasileira de Fruticultura pelo impacto da cultivar Solar.",
    category: "Destaques",
    date: "2025-02-10",
    image: "/passion-fruit-plantation-with-yellow-fruits.jpg",
  },
  {
    id: 3,
    title: "Programa de incentivo à inovação oferece bolsas para desenvolvimento de startups",
    excerpt:
      "UNEMAT e SEBRAE lançam programa conjunto para apoiar empreendedores que desejam transformar pesquisas em negócios.",
    category: "Oportunidades",
    date: "2025-02-08",
  },
  {
    id: 4,
    title: "Workshop sobre propriedade intelectual acontece na próxima semana",
    excerpt:
      "Evento gratuito abordará estratégias de proteção e comercialização de tecnologias desenvolvidas na universidade.",
    category: "Eventos",
    date: "2025-02-05",
  },
  {
    id: 5,
    title: "CNPq anuncia chamada universal com foco em sustentabilidade e bioeconomia",
    excerpt: "Edital prevê investimento de R$ 200 milhões em projetos de pesquisa nas áreas prioritárias.",
    category: "Editais",
    date: "2025-02-01",
  },
  {
    id: 6,
    title: "Tecnologia da UNEMAT é licenciada para empresa do agronegócio",
    excerpt:
      "Primeiro contrato de transferência de tecnologia do ano marca expansão das parcerias universidade-empresa.",
    category: "Transferência de Tecnologia",
    date: "2025-01-28",
  },
]

const categories = [
  "Todos",
  "Editais",
  "Oportunidades",
  "Destaques",
  "Eventos",
  "Transferência de Tecnologia",
  "Fomento",
]

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Notícias e Oportunidades</h1>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Fique por dentro dos editais, programas de fomento, eventos e destaques da inovação na UNEMAT
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Featured News */}
            <Card className="mb-12 overflow-hidden border-orange-200 hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-600">Destaque</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 bg-blue-600">{featuredNews.category}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">{featuredNews.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{featuredNews.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredNews.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <Link href={`/noticias/${featuredNews.id}`}>
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Todos" ? "default" : "outline"}
                    className={
                      category === "Todos"
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "border-orange-200 hover:bg-orange-50 bg-transparent"
                    }
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                  {item.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-600">{item.category}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-balance group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.date).toLocaleDateString("pt-BR")}
                      </span>
                      <Link href={`/noticias/${item.id}`}>
                        <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 p-0">
                          Ler mais
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                Carregar mais notícias
              </Button>
            </div>

            {/* Highlighted Researchers Section */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900">Pesquisadores em Destaque</h2>
              </div>
              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        GF
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Profa. Dra. Geovana Fedato</h3>
                      <p className="text-sm text-gray-600 mb-3">Melhoramento Genético Vegetal</p>
                      <Link href="/competencias/agronegocio/geovana-fedato">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                        >
                          Ver perfil
                        </Button>
                      </Link>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        JS
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Prof. Dr. João Silva</h3>
                      <p className="text-sm text-gray-600 mb-3">Inteligência Artificial</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        Ver perfil
                      </Button>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        MC
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Profa. Dra. Maria Costa</h3>
                      <p className="text-sm text-gray-600 mb-3">Farmacologia</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        Ver perfil
                      </Button>
                    </div>
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
