"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { CurrencyToggle } from "@/components/currency-toggle";

interface NavbarLuxuryProps {
    phoneDisplay?: string;
    phoneWhatsappUrl?: string;
}

export function NavbarLuxury({ phoneDisplay, phoneWhatsappUrl }: NavbarLuxuryProps = {}) {
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
            {/* Dark solid navbar with gold bottom border */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-[var(--color-accent)]">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src={siteConfig.logo.white}
                                alt={siteConfig.brand.name}
                                width={160}
                                height={56}
                                className="h-12 w-auto opacity-90"
                                priority
                            />
                        </Link>

                        {/* Links spread with wide spacing */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-headline text-xs font-bold text-gray-300 hover:text-[var(--color-accent)] uppercase tracking-[0.15em] transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-5">
                            <CurrencyToggle />
                            <a
                                href={callUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm border border-[var(--color-accent)] px-4 py-2 hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 uppercase tracking-wider"
                            >
                                <span className="material-symbols-outlined text-base">call</span>
                                {displayPhone}
                            </a>
                        </div>

                        <button className="md:hidden p-2 -mr-2 text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                            <span className="material-symbols-outlined text-2xl">{isOpen ? "close" : "menu"}</span>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden animate-fade-in">
                    <div className="pt-24 px-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block font-headline text-2xl font-bold text-white py-2 border-b border-white/10 uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sm text-gray-500">Devise :</span>
                                <CurrencyToggle />
                            </div>
                            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base font-semibold text-[var(--color-accent)]">
                                <span className="material-symbols-outlined">call</span>
                                {displayPhone}
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <div className="h-20" />
        </>
    );
}
