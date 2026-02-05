import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/createPageUrl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  category?: string;
};

export default function Galeria() {
  const images: GalleryImage[] = useMemo(
    () => [
      {
        src: "https://images.unsplash.com/photo-1520975682031-a7a7a6bcbaf4?w=1600&q=80",
        alt: "Struś – zdjęcie 1",
        category: "Hodowla",
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80",
        alt: "Struś – zdjęcie 2",
        category: "Hodowla",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80",
        alt: "Gospodarstwo – zdjęcie 3",
        category: "Gospodarstwo",
      },
      {
        src: "https://images.unsplash.com/photo-1520975958221-100c7e9f06b3?w=1600&q=80",
        alt: "Produkty – zdjęcie 4",
        category: "Produkty",
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
        alt: "Natura – zdjęcie 5",
        category: "Okolica",
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80",
        alt: "Natura – zdjęcie 6",
        category: "Okolica",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80",
        alt: "Gospodarstwo – zdjęcie 7",
        category: "Gospodarstwo",
      },
      {
        src: "https://images.unsplash.com/photo-1520975682031-a7a7a6bcbaf4?w=1600&q=80",
        alt: "Struś – zdjęcie 8",
        category: "Hodowla",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] bg-neutral-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/60" />

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-[#B5A642]">Galeria</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl">
              Zobacz zdjęcia z naszej hodowli i gospodarstwa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link
              to={createPageUrl("Home")}
              className="hover:text-[#B5A642] transition-colors"
            >
              Strona główna
            </Link>
            <span>/</span>
            <span className="text-[#B5A642]">Galeria</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => open(index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group bg-white shadow-sm overflow-hidden text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
                </div>
                <div className="p-4">
                  {img.category && (
                    <p className="text-xs uppercase tracking-wider text-[#B5A642] mb-1">
                      {img.category}
                    </p>
                  )}
                  <p className="text-sm text-neutral-800">{img.alt}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-neutral-950/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black overflow-hidden">
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="flex items-center justify-between bg-neutral-900 px-4 py-3">
                <div className="text-sm text-neutral-200">
                  {images[activeIndex].alt}
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="text-neutral-200 hover:text-white transition-colors"
                  aria-label="Zamknij"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-900/70 hover:bg-neutral-900 text-white p-2"
                aria-label="Poprzednie"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-900/70 hover:bg-neutral-900 text-white p-2"
                aria-label="Następne"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
