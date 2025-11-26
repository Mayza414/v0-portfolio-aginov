"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send } from "lucide-react"

interface InterestFormDialogProps {
  technologyName: string
  triggerText?: string
  variant?: "default" | "outline"
}

export default function InterestFormDialog({
  technologyName,
  triggerText = "Tenho Interesse",
  variant = "default",
}: InterestFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("[v0] Interest form submitted:", { technology: technologyName, ...formData })
    setOpen(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      organizationType: "",
      message: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
          <Mail className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Solicitar Mais Informações</DialogTitle>
          <DialogDescription className="text-base">
            Preencha o formulário abaixo para demonstrar interesse na tecnologia <strong>{technologyName}</strong>.
            Nossa equipe entrará em contato em breve.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu nome completo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
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

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organização/Empresa</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="Nome da sua organização"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organizationType">Tipo de Organização</Label>
            <Select
              value={formData.organizationType}
              onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
            >
              <SelectTrigger id="organizationType">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="empresa-privada">Empresa Privada</SelectItem>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="orgao-publico">Órgão Público</SelectItem>
                <SelectItem value="cooperativa">Cooperativa</SelectItem>
                <SelectItem value="associacao">Associação</SelectItem>
                <SelectItem value="instituicao-ensino">Instituição de Ensino</SelectItem>
                <SelectItem value="produtor-rural">Produtor Rural</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Descreva seu interesse nesta tecnologia e como pretende utilizá-la..."
              rows={5}
              className="resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 bg-teal-600 hover:bg-teal-700">
              <Send className="w-4 h-4 mr-2" />
              Enviar Solicitação
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
