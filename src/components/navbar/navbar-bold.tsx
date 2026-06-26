"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { CurrencyToggle } from "@/components/currency-toggle";

interface NavbarBoldProps {
    phoneDisplay?: string;
    phoneWhatsappUrl?: string;
}

export function NavbarBold({ phoneDisplay, phoneWhatsappUrl }: NavbarBoldProps = {}) {
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
            {/* Solid primary-red navbar — no transparency */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)]">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src={siteConfig.logo.white}
                                alt={siteConfig.brand.name}
                                width={160}
                                height={56}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-headline text-sm font-extrabold text-white/80 hover:text-white uppercase tracking-wider transition-colors duration-200"
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
                                className="flex items-center gap-2 bg-white text-[var(--color-primary)] font-extrabold px-5 py-2.5 rounded-full text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
                            >
                                <span className="material-symbols-outlined text-base">call</span>
                                {displayPhone}
                            </a>
                        </div>

                        <button className="md:hidden p-2 -mr-2 text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                            <span className="material-symbols-outlined text-2xl">{isOpen ? "close" : "menu"}</span>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[var(--color-primary)] md:hidden animate-fade-in">
                    <div className="pt-24 px-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block font-headline text-2xl font-extrabold text-white py-3 uppercase tracking-wide hover:text-white/70 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-white/20 mt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sm text-white/60">Devise :</span>
                                <CurrencyToggle />
                            </div>
                            <a href={callUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base font-bold text-white">
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
