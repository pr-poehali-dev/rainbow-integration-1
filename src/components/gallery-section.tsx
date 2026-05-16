import { useState } from "react"

const photos = [
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/8d0cad4d-9611-4870-992c-148dadbafcdc.jpg",
    title: "Прошивка Lada Granta",
    desc: "Прошивка комбинации приборов",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/33d9350a-c55d-4b4c-9555-db92abcd4cf9.jpg",
    title: "Пересвет — красная подсветка",
    desc: "Замена подсветки шкал на красную LED",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/922789f2-7d0b-4508-8961-fb78422b59cb.jpg",
    title: "Диагностика и прошивка",
    desc: "Подключение и запись прошивки",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/8fc0abf4-d132-4695-9278-59896a9a512d.jpg",
    title: "Пересвет — синяя подсветка",
    desc: "Эффектный пересвет в синий цвет",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/84bd6a26-dc0e-4495-bb13-bc89b6251a14.jpg",
    title: "Многоцветный пересвет",
    desc: "Синяя + красная подсветка всех шкал",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/6bb8e516-e1eb-408f-9a26-320fa91516bc.jpg",
    title: "Магнитола Lada Granta",
    desc: "Установка и настройка штатной магнитолы",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/6e7a364d-5056-4338-b900-d59f436f86ed.jpg",
    title: "Пересвет — синий Hyundai",
    desc: "Синяя подсветка комбинации приборов",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/82f7a7d3-5f33-45c1-a15f-93691055ac7c.jpg",
    title: "Прошивка Chevrolet",
    desc: "Прошивка и диагностика комбинации",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/d992fa91-c701-410e-95be-22b8eed383d5.jpg",
    title: "Пересвет — синий + красный",
    desc: "Двухцветный пересвет шкал",
  },
  {
    url: "https://cdn.poehali.dev/projects/aa99f139-5e44-4617-807b-c0255797a2a4/bucket/9aaf2407-8ca9-404f-9088-95257f970395.jpg",
    title: "Прошивка Hyundai",
    desc: "Прошивка и корректировка данных",
  },
]

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Наши работы</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-space-mono">
            Реальные фото выполненных прошивок и пересветов комбинаций приборов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-red-500/20 hover:border-red-500/60 transition-all duration-300"
              onClick={() => setActive(i)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-white font-bold text-lg font-orbitron">{photo.title}</p>
                <p className="text-gray-300 text-sm font-space-mono mt-1">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 transition-colors leading-none"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white text-5xl hover:text-red-500 transition-colors leading-none px-2"
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length) }}
          >
            ‹
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[active].url}
              alt={photos[active].title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-bold text-xl font-orbitron">{photos[active].title}</p>
              <p className="text-gray-400 font-space-mono mt-1">{photos[active].desc}</p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white text-5xl hover:text-red-500 transition-colors leading-none px-2"
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length) }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}