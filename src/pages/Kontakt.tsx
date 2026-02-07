import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/createPageUrl";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { CONTACT_INFO } from '../config/contact';

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker icon fix (Vite/React)
const ensureLeafletMarkerIcons = () => {
  const proto = L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown };
  if ("_getIconUrl" in proto) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete proto._getIconUrl;
  }

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactInfoItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  link?: string;
};

export default function Kontakt() {
  useMemo(() => {
    ensureLeafletMarkerIcons();
    return null;
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: podmień na prawdziwy endpoint / email service
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Example coordinates - replace with actual location
  const position: LatLngExpression = [52.2297, 21.0122];

  const contactInfo: ContactInfoItem[] = [
    {
      icon: MapPin,
      title: "Adres",
      lines: [CONTACT_INFO.address.street, `${CONTACT_INFO.address.postalCode} ${CONTACT_INFO.address.city}`],
    },
    {
      icon: Phone,
      title: "Telefon",
      lines: [CONTACT_INFO.phone],
      link: `tel:${CONTACT_INFO.phoneRaw}`,
    },
    {
      icon: Mail,
      title: "E-mail",
      lines: [CONTACT_INFO.email],
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      lines: ["Pon - Pt: 9:00 - 17:00", "Sob: 9:00 - 14:00", "Nd: Zamknięte"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-neutral-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
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
              <span className="text-[#B5A642]">Kontakt</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl">
              Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania
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
            <span className="text-[#B5A642]">Kontakt</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Formularz kontaktowy
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Dziękujemy za wiadomość!
                  </h3>
                  <p className="text-neutral-600">
                    Odpowiemy najszybciej jak to możliwe.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-[#B5A642] hover:bg-[#8B7D32]"
                  >
                    Wyślij kolejną wiadomość
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-neutral-300 focus:border-[#B5A642] focus:ring-[#B5A642]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-neutral-300 focus:border-[#B5A642] focus:ring-[#B5A642]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-neutral-300 focus:border-[#B5A642] focus:ring-[#B5A642]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-neutral-300 focus:border-[#B5A642] focus:ring-[#B5A642] resize-none"
                    />
                  </div>

                  <p className="text-sm text-neutral-500">* Pola wymagane</p>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B5A642] hover:bg-[#8B7D32] text-white py-6 text-lg font-medium uppercase tracking-wider rounded-none"
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Informacje kontaktowe
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 shadow-sm">
                    <div className="w-12 h-12 bg-[#B5A642]/10 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-[#B5A642]" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      {info.title}
                    </h3>

                    {info.lines.map((line, i) =>
                      info.link ? (
                        <a
                          key={i}
                          href={info.link}
                          className="block text-neutral-600 hover:text-[#B5A642] transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-neutral-600">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>Sabra - Hodowla Strusi Afrykańskich</strong>
              <br />
              {CONTACT_INFO.address.street}
              <br />
              {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
}