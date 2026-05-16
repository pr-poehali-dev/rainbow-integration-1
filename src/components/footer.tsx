import { Phone } from "lucide-react"

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
              <a href="tel:+78920032211" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Phone size={18} />
                <span className="font-space-mono">+7 (920) 032-21-19</span>
              </a>
              <a href="https://vk.com/peresvetgranta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-.96-1.738-.96-.366 0-.468.102-.468.6v1.566c0 .426-.138.678-1.27.678-1.873 0-3.953-1.134-5.414-3.248C4.735 10.97 4 8.862 4 8.39c0-.246.102-.474.6-.474h1.744c.448 0 .618.204.79.682.87 2.512 2.33 4.71 2.93 4.71.228 0 .33-.102.33-.666V10.15c-.066-1.194-.696-1.296-.696-1.722 0-.21.168-.42.438-.42h2.742c.372 0 .504.198.504.642v3.45c0 .372.162.504.264.504.228 0 .42-.132.84-.552 1.302-1.458 2.226-3.702 2.226-3.702.126-.246.33-.474.78-.474h1.746c.528 0 .642.27.528.642-.222 1.032-2.382 4.086-2.382 4.086-.186.312-.252.45 0 .792.186.264.798.81 1.206 1.302.744.858 1.314 1.578 1.47 2.076.132.492-.132.744-.624.744z"/>
                </svg>
                <span className="font-space-mono">vk.com/peresvetgranta</span>
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