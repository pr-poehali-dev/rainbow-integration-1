export function CoverSection() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Фото */}
      <img
        src="https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/files/d8e9ee18-deb7-4bcf-a1e2-9183db941d73.jpg"
        alt="Пересвет и прошивка комбинации приборов"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Контент */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-16 max-w-7xl mx-auto">
        <div className="slide-up">
          <span className="inline-block text-xs font-bold tracking-widest text-red-400 border border-red-500/40 rounded-full px-4 py-1.5 mb-5 font-space-mono uppercase">
            Профессиональный сервис
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white font-orbitron leading-tight mb-4">
            Преображаем<br />
            <span className="text-red-500">приборы</span> вашего авто
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl font-space-mono leading-relaxed">
            Прошивка, пересвет и ремонт комбинаций приборов любых автомобилей. Гарантия 6 месяцев.
          </p>
        </div>
      </div>

      {/* Нижний переход */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
