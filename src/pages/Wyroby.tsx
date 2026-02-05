import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/createPageUrl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Wyroby() {
  const categories = [
    {
      id: "mieso",
      title: "Mięso Strusie",
      description: "Świeże, chude mięso strusie - zdrowa alternatywa dla tradycyjnych mięs.",
      image: "https://images.unsplash.com/photo-1588347818036-558601350947?w=600&q=80"
    },
    {
      id: "jaja",
      title: "Jaja i Produkty Jajeczne",
      description: "Jaja strusie - idealne do dekoracji i konsumpcji.",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80"
    },
    {
      id: "skora",
      title: "Skóra Strusia",
      description: "Ekskluzywna skóra strusia najwyższej jakości.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    },
    {
      id: "piora",
      title: "Pióra Strusie",
      description: "Dekoracyjne pióra strusie do różnych zastosowań.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80"
    },
    {
      id: "tluszcz",
      title: "Tłuszcz Strusi",
      description: "Naturalny tłuszcz strusi o właściwościach kosmetycznych.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80"
    },
    {
      id: "inne",
      title: "Inne Produkty",
      description: "Pamiątki, dekoracje i inne produkty strusie.",
      image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-neutral-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=1920&q=80')"
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
              Nasze <span className="text-[#B5A642]">Wyroby</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl">
              Odkryj pełną gamę produktów z naszej hodowli strusi afrykańskich
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link to={createPageUrl("Home")} className="hover:text-[#B5A642] transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <span className="text-[#B5A642]">Wyroby</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Oferujemy szeroki wybór produktów strusich najwyższej jakości. 
              Każdy produkt pochodzi z naszej certyfikowanej hodowli i spełnia najwyższe standardy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">{category.description}</p>
                  <button 
                    className="inline-flex items-center gap-2 text-[#B5A642] font-medium hover:text-[#8B7D32] transition-colors cursor-pointer"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-neutral-900 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Zainteresowany zamówieniem?
              </h3>
              <p className="text-neutral-400">
                Skontaktuj się z nami, aby poznać szczegóły oferty i ceny.
              </p>
            </div>
            <Link
              to={createPageUrl("Kontakt")}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#B5A642] text-white px-8 py-4 font-medium uppercase tracking-wider hover:bg-[#8B7D32] transition-colors"
            >
              Kontakt
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}