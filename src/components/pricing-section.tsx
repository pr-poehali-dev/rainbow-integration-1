const services = [
  {
    title: "Пересвет комбинации приборов",
    price: "от 1 000 ₽",
    description: "Замена штатной подсветки на светодиодную. Любой цвет на выбор: белый, синий, красный, оранжевый и другие.",
    items: [
      "Любой цвет подсветки",
      "Все марки и модели",
      "Гарантия 6 месяцев",
    ],
    accent: true,
  },
  {
    title: "Прошивка комбинации приборов",
    price: "от 800 ₽",
    description: "Прошивка комбинаций приборов автомобилей Lada и Datsun, включая поддержку круиз-контроля.",
    items: [
      "Lada Granta / Granta FL",
      "Lada Vesta",
      "Lada Kalina 2",
      "Datsun on-DO / mi-DO",
      "Прошивка под круиз-контроль",
    ],
    accent: false,
  },
  {
    title: "Изготовление проводки для подрулевого переключателя",
    price: "1 000 ₽",
    description: "Изготовление и установка проводки для монтажа подрулевого переключателя при его отсутствии.",
    items: [
      "Под любой тип переключателя",
      "Аккуратный монтаж",
      "Гарантия 6 месяцев",
    ],
    accent: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Цены на услуги</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-space-mono">
            Фиксированные цены без скрытых доплат. Точную стоимость назовём после уточнения деталей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                service.accent
                  ? "border-red-500 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                  : "border-red-500/20 bg-white/5"
              }`}
            >
              {service.accent && (
                <span className="inline-block text-xs font-bold text-red-400 border border-red-500/40 rounded-full px-3 py-1 mb-4 font-space-mono w-fit">
                  ПОПУЛЯРНО
                </span>
              )}
              <h3 className="text-white font-bold text-xl font-orbitron mb-3 leading-snug">{service.title}</h3>
              <p className="text-gray-400 text-sm font-space-mono mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 text-sm font-space-mono">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-red-500/20 pt-6">
                <p className={`text-3xl font-extrabold font-orbitron ${service.accent ? "text-red-400" : "text-white"}`}>
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
