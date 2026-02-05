import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/createPageUrl";
import { ArrowRight, Award, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Award,
      title: "Najwyższa jakość",
      description: "Nasze produkty pochodzą z certyfikowanej hodowli, gwarantując najwyższe standardy."
    },
    {
      icon: Heart,
      title: "Pasja i tradycja",
      description: "Hodowla strusi to nasza pasja przekazywana z pokolenia na pokolenie."
    },
    {
      icon: Leaf,
      title: "Naturalne produkty",
      description: "Wszystkie nasze produkty są w 100% naturalne i ekologiczne."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-neutral-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Witamy w <span className="text-[#B5A642]">Sabra</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Hodowla Strusi Afrykańskich - oferujemy najwyższej jakości produkty strusie: 
              mięso, jaja, skórę i pióra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl("Wyroby")}
                className="inline-flex items-center justify-center gap-2 bg-[#B5A642] text-white px-8 py-4 rounded-none font-medium uppercase tracking-wider hover:bg-[#8B7D32] transition-colors"
              >
                Nasze wyroby
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl("Kontakt")}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-none font-medium uppercase tracking-wider hover:bg-white hover:text-neutral-900 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#B5A642] uppercase tracking-wider font-medium text-sm">O nas</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                Hodowla Strusi Afrykańskich
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Sabra to rodzinna hodowla strusi afrykańskich z wieloletnim doświadczeniem. 
                Naszą misją jest dostarczanie najwyższej jakości produktów strusich, 
                przy zachowaniu najwyższych standardów dobrostanu zwierząt.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Oferujemy szeroki asortyment produktów: od świeżego mięsa strusiego, 
                przez jaja i produkty jajeczne, po ekskluzywną skórę i dekoracyjne pióra.
              </p>
              <Link
                to={createPageUrl("Galeria")}
                className="inline-flex items-center gap-2 text-[#B5A642] font-medium hover:text-[#8B7D32] transition-colors"
              >
                Zobacz naszą galerię
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Struś"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#B5A642] text-white p-6">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm uppercase tracking-wider">Lat doświadczenia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#B5A642] uppercase tracking-wider font-medium text-sm">Dlaczego my</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
              Nasze atuty
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#B5A642]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#B5A642]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Zainteresowany naszymi produktami?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby dowiedzieć się więcej o naszej ofercie 
            i zamówić najwyższej jakości produkty strusie.
          </p>
          <Link
            to={createPageUrl("Kontakt")}
            className="inline-flex items-center justify-center gap-2 bg-[#B5A642] text-white px-8 py-4 rounded-none font-medium uppercase tracking-wider hover:bg-[#8B7D32] transition-colors"
          >
            Skontaktuj się z nami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}