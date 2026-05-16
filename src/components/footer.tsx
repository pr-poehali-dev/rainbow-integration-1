import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Прошивка<span className="text-red-500">Приборов</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Профессиональная прошивка и пересвет комбинаций приборов любых автомобилей. Гарантия 6 месяцев.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+7" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Phone size={18} />
                <span className="font-space-mono">+7 (XXX) XXX-XX-XX</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={18} />
                <span className="font-space-mono">info@example.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Прошивка приборов
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Пересвет подсветки
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Ремонт дисплея
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Частые вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Как мы работаем
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 ПрошивкаПриборов. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
