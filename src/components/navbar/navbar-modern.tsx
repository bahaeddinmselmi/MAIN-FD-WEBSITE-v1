"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { CurrencyToggle } from "@/components/currency-toggle";

interface NavbarModernProps {
    phoneDisplay?: string;
    phoneWhatsappUrl?: string;
}

export function NavbarModern({ phoneDisplay, phoneWhatsappUrl }: NavbarModernProps = {}) {
    const [isOpen, setIsOpen] = useState(false);

    const displayPhone = phoneDisplay ?? siteConfig.contact.phone.display;
    const callUrl = phoneWhatsappUrl ?? whatsappUrl;

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/nos-voitures", label: "Nos Voitures" },
        { href: "/tarifs", label: "Tarifs" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* White navbar with green bottom border */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[var(--color-primary)] shadow-sm">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex-shrink-0">
                            <Image src={siteConfig.logo.main} alt={siteConfig.brand.name} width={140} height={48} className="h-11 w-auto" priority />
                        </Link>

                        {/* Nav links with pill hover */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-headline text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-fixed)] px-4 py-2 rounded-full transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <CurrencyToggle />
                            <a
                                href={callUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
                            >
                                <span className="material-symbols-outlined text-base">call</span>
                                {displayPhone}
                            </a>
                        </div>

                        <button className="md:hidden p-2 -mr-2 text-slate-600" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                            <span className="material-symbols-outlined text-2xl">{isOpen ? "close" : "menu"}</span>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-white md:hidden animate-fade-in">
                    <div className="pt-20 px-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block font-headline text-xl font-bold text-[#191c1e] py-3 px-4 rounded-2xl hover:bg-[var(--color-primary-fixed)] hover:text-[var(--color-primary)] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-gray-100 mt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sm text-gray-500">Devise :</span>
                                <CurrencyToggle />
                            </div>
                            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base font-semibold text-[var(--color-primary)]">
                                <span className="material-symbols-outlined">call</span>
                                {displayPhone}
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <div className="h-16" />
        </>
    );
}
