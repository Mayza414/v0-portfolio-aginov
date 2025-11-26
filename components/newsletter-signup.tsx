"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("[v0] Newsletter signup:", email)
    // TODO: Implement newsletter signup logic
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
    }, 1000)
  }

  return (
    <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-white">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Receba Novidades</h3>
            <p className="text-gray-600 leading-relaxed">
              Cadastre-se para receber informações sobre editais, eventos, novas tecnologias e oportunidades de
              colaboração
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="flex-1"
            disabled={isSubmitting}
          />
          <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Enviando..." : "Inscrever"}
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-3">
          Ao se inscrever, você concorda em receber e-mails da Aginov. Você pode cancelar a inscrição a qualquer
          momento.
        </p>
      </CardContent>
    </Card>
  )
}
