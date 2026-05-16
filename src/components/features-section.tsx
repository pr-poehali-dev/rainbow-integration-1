import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Прошивка комбинации",
    description: "Перепрошивка блока комбинации приборов: корректировка пробега, адаптация под другой двигатель, устранение ошибок.",
    icon: "zap",
    badge: "Прошивка",
  },
  {
    title: "Пересвет приборов",
    description: "Замена штатной подсветки на светодиодную. Любой цвет: белый, синий, красный, зелёный — под стиль салона.",
    icon: "target",
    badge: "Подсветка",
  },
  {
    title: "Любые марки авто",
    description: "Работаем с BMW, Mercedes, Audi, Volkswagen, Toyota, Ford, Kia, Hyundai, Lada и многими другими марками.",
    icon: "globe",
    badge: "Все марки",
  },
  {
    title: "Восстановление дисплея",
    description: "Ремонт пикселей и замена матрицы информационного дисплея, восстановление сегментных индикаторов.",
    icon: "brain",
    badge: "Дисплей",
  },
  {
    title: "Гарантия на работу",
    description: "Гарантия 6 месяцев на все виды работ. Проверка работоспособности перед выдачей клиенту.",
    icon: "lock",
    badge: "Гарантия",
  },
  {
    title: "Быстрые сроки",
    description: "Большинство работ выполняем за 1–2 дня. Срочные заказы — в день обращения при наличии запчастей.",
    icon: "link",
    badge: "Быстро",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что мы делаем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Профессиональный сервис по прошивке и пересвету комбинаций приборов любых автомобилей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🖥️"}
                    {feature.icon === "lock" && "🛡️"}
                    {feature.icon === "globe" && "🚗"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "⏱️"}
                    {feature.icon === "target" && "💡"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
