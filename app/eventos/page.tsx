import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink, Video } from "lucide-react"
import Link from "next/link"

// Mock data for events
const upcomingEvents = [
  {
    id: 1,
    title: "Workshop: Propriedade Intelectual para Pesquisadores",
    date: "2025-03-15",
    time: "14:00 - 17:00",
    location: "Auditório Central - Campus Cáceres",
    type: "Workshop",
    description:
      "Aprenda sobre os diferentes tipos de proteção intelectual e como proteger suas invenções. Evento gratuito com certificado.",
    spots: 50,
    spotsAvailable: 23,
    online: false,
  },
  {
    id: 2,
    title: "Webinar: Transferência de Tecnologia na Prática",
    date: "2025-03-22",
    time: "10:00 - 12:00",
    location: "Online via Zoom",
    type: "Webinar",
    description:
      "Cases de sucesso de transferência de tecnologia da UNEMAT para o setor produtivo. Participe e tire suas dúvidas.",
    spots: 200,
    spotsAvailable: 145,
    online: true,
  },
  {
    id: 3,
    title: "Feira de Inovação e Tecnologia UNEMAT 2025",
    date: "2025-04-10",
    time: "08:00 - 18:00",
    location: "Centro de Convenções - Cáceres",
    type: "Feira",
    description:
      "Exposição de tecnologias desenvolvidas na UNEMAT, palestras, rodadas de negócios e networking com empresas.",
    spots: 500,
    spotsAvailable: 387,
    online: false,
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Seminário de Inovação no Agronegócio",
    date: "2025-02-10",
    type: "Seminário",
    attendees: 120,
  },
  {
    id: 5,
    title: "Curso: Como Comunicar sua Invenção",
    date: "2025-01-25",
    type: "Curso",
    attendees: 45,
  },
]

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-balance text-gray-900">Agenda de Eventos</h1>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Participe de workshops, webinars, feiras e outros eventos sobre inovação, propriedade intelectual e
              transferência de tecnologia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Upcoming Events */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Próximos Eventos</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow border-indigo-100">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Date Badge */}
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex flex-col items-center justify-center text-white">
                            <span className="text-3xl font-bold">
                              {new Date(event.date).getDate().toString().padStart(2, "0")}
                            </span>
                            <span className="text-sm uppercase">
                              {new Date(event.date).toLocaleDateString("pt-BR", { month: "short" })}
                            </span>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <Badge className="mb-2 bg-indigo-600">{event.type}</Badge>
                              {event.online && (
                                <Badge className="mb-2 ml-2 bg-green-600">
                                  <Video className="w-3 h-3 mr-1" />
                                  Online
                                </Badge>
                              )}
                              <h3 className="text-2xl font-semibold text-gray-900 text-balance">{event.title}</h3>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                          <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4 text-indigo-600" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4 text-indigo-600" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="w-4 h-4 text-indigo-600" />
                              {event.spotsAvailable} vagas disponíveis
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Button className="bg-indigo-600 hover:bg-indigo-700">
                              <Calendar className="w-4 h-4 mr-2" />
                              Inscrever-se
                            </Button>
                            <Button
                              variant="outline"
                              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                            >
                              Ver Detalhes
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Eventos Realizados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="border-gray-200">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {event.type}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString("pt-BR")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees} participantes
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="mt-12 border-indigo-100 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quer Organizar um Evento Conosco?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  A Aginov apoia a realização de eventos sobre inovação, empreendedorismo e transferência de tecnologia.
                  Entre em contato para discutir parcerias.
                </p>
                <Link href="/contato">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Falar com a Aginov
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
