import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const SEND_ORDER_URL = "https://functions.poehali.dev/bc208600-a475-4d58-b6de-a7e6361b3383"

type Status = "idle" | "loading" | "success" | "error"

export function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", car: "", description: "" })
  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", phone: "", car: "", description: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-card border border-red-500/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-gray-300">Мы свяжемся с вами в ближайшее время.</p>
        <Button
          className="mt-6 bg-red-500 hover:bg-red-600 text-white border-0"
          onClick={() => setStatus("idle")}
        >
          Отправить ещё одну
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-red-500/30 rounded-2xl p-8 text-left space-y-5"
    >
      <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">Оставить заявку</h3>
      <p className="text-gray-400 text-sm mb-4">Заполните форму — перезвоним и рассчитаем стоимость бесплатно.</p>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300">Ваше имя *</Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Иван"
          required
          className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-600 focus:border-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-300">Номер телефона *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+7 (900) 000-00-00"
          required
          className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-600 focus:border-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="car" className="text-gray-300">Марка и модель авто</Label>
        <Input
          id="car"
          name="car"
          value={form.car}
          onChange={handleChange}
          placeholder="BMW 5 серии, 2018"
          className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-600 focus:border-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-gray-300">Опишите задачу</Label>
        <Textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Например: нужен пересвет подсветки в белый цвет"
          rows={3}
          className="bg-black/50 border-red-500/30 text-white placeholder:text-gray-600 focus:border-red-500 resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз или позвоните нам.</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-red-500 hover:bg-red-600 text-white border-0 text-lg py-6"
      >
        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
      </Button>
    </form>
  )
}
