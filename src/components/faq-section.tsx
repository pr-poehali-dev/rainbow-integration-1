import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие марки автомобилей вы обслуживаете?",
      answer:
        "Работаем со всеми популярными марками: BMW, Mercedes-Benz, Audi, Volkswagen, Toyota, Kia, Hyundai, Ford, Renault, Lada, Skoda и многими другими. Уточните вашу марку при обращении — подберём решение.",
    },
    {
      question: "Сколько времени занимает прошивка или пересвет?",
      answer:
        "Большинство работ выполняем за 1–2 рабочих дня. Срочные заказы возможны в день обращения при наличии необходимых материалов. Точный срок назвём после диагностики.",
    },
    {
      question: "Нужно ли снимать приборную панель самому?",
      answer:
        "Нет, вы можете привезти уже снятую комбинацию или приехать к нам — поможем со снятием. Также принимаем отправку по почте или транспортной компанией с упаковкой.",
    },
    {
      question: "Есть ли гарантия на работы?",
      answer:
        "Да, на все виды работ даём гарантию 6 месяцев. Перед выдачей проводим полную проверку: все показатели, подсветку, дисплей. Если что-то не так — бесплатно исправим.",
    },
    {
      question: "Можно ли выбрать цвет подсветки при пересвете?",
      answer:
        "Да, доступны любые цвета: классический белый, синий, красный, зелёный, оранжевый и другие. Можно сделать многоцветную подсветку или повторить оригинальный стиль.",
    },
    {
      question: "Как узнать стоимость работ?",
      answer:
        "Стоимость зависит от марки, модели автомобиля и объёма работ. Свяжитесь с нами — назовём точную цену после диагностики. Никаких скрытых доплат после согласования.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о прошивке и пересвете комбинаций приборов.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
