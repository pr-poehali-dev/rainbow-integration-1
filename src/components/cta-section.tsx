import { OrderForm } from "@/components/order-form"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans text-balance">
              Готовы обновить приборы?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Оставьте заявку — перезвоним, проконсультируем бесплатно и назовём точную стоимость для вашего автомобиля.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Бесплатная консультация и расчёт стоимости</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Выполнение работ за 1–2 дня</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span>Гарантия 6 месяцев на все работы</span>
              </div>
            </div>
          </div>
          <div className="slide-up">
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  )
}
