import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils/createPageUrl";
import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import logo from "../assets/logo-sabra-zlote.png";
import { CONTACT_INFO } from '../config/contact';

type NavItem = { name: string; page: "Home" | "Wyroby" | "Galeria" | "Kontakt" };

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navigation: NavItem[] = [
        { name: "Strona główna", page: "Home" },
        { name: "Wyroby", page: "Wyroby" },
        { name: "Galeria", page: "Galeria" },
        { name: "Kontakt", page: "Kontakt" },
    ];

    const isActive = (page: NavItem["page"]) => {
        const url = createPageUrl(page);
        return location.pathname === url || location.pathname === url + "/";
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Top Bar */}
            <div className="bg-neutral-900 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a
                            href={`tel:${CONTACT_INFO.phoneRaw}`}
                            className="flex items-center gap-2 hover:text-[#B5A642] transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">{CONTACT_INFO.phone}</span>
                        </a>
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="flex items-center gap-2 hover:text-[#B5A642] transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noreferrer" className="hover:text-[#B5A642]">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href={CONTACT_INFO.social.instagram}target="_blank" rel="noreferrer" className="hover:text-[#B5A642]">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <Link to={createPageUrl("Home")} className="flex-shrink-0">
                            <img src={logo} alt="Sabra - Hodowla Strusi Afrykańskich" className="h-16 w-auto" />
                        </Link>

                        <nav className="hidden md:flex items-center gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.page}
                                    to={createPageUrl(item.page)}
                                    className={`text-sm font-medium uppercase tracking-wider transition-colors ${isActive(item.page)
                                        ? "text-[#B5A642] border-b-2 border-[#B5A642] pb-1"
                                        : "text-neutral-700 hover:text-[#B5A642]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <button onClick={() => setMobileMenuOpen((v) => !v)} className="md:hidden p-2 text-neutral-700">
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-neutral-200">
                        <nav className="px-4 py-4 space-y-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.page}
                                    to={createPageUrl(item.page)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors ${isActive(item.page) ? "text-[#B5A642]" : "text-neutral-700 hover:text-[#B5A642]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="bg-neutral-700 text-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <img src={logo} alt="Sabra" className="h-20 w-auto mb-4" />
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Hodowla Strusi Afrykańskich - najwyższa jakość produktów strusich.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#B5A642] font-semibold uppercase tracking-wider mb-4">Menu</h3>
                            <ul className="space-y-2">
                                {navigation.map((item) => (
                                    <li key={item.page}>
                                        <Link to={createPageUrl(item.page)} className="text-neutral-400 hover:text-[#B5A642] text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#B5A642] font-semibold uppercase tracking-wider mb-4">Kontakt</h3>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                                <li>{CONTACT_INFO.address.street}</li>
                                <li>{CONTACT_INFO.address.city}</li>
                                <li className="pt-2">
                                    <a href={`mailto:${CONTACT_INFO.phoneRaw}`} className="hover:text-[#B5A642]">Tel: {CONTACT_INFO.phone}</a>
                                </li>
                                <li>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#B5A642]">{CONTACT_INFO.email}</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#B5A642] font-semibold uppercase tracking-wider mb-4">Godziny otwarcia</h3>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                                <li>Poniedziałek - Piątek: 9:00 - 17:00</li>
                                <li>Sobota: 9:00 - 14:00</li>
                                <li>Niedziela: Zamknięte</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-500 text-sm">
                            © {new Date().getFullYear()} Sabra - Hodowla Strusi Afrykańskich. Wszelkie prawa zastrzeżone.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#B5A642]">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#B5A642]">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
