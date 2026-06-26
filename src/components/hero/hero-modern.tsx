import Image from 'next/image';
import Link from 'next/link';

export function HeroModern() {
    return (
        <section className="bg-white py-14 md:py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left: Text content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary-fixed)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                            <span className="material-symbols-outlined text-sm">verified</span>
                            Service 24h / 7j · Sans carte bancaire
                        </div>

                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#191c1e] mb-5 leading-tight">
                            Louez une voiture<br />
                            <span className="text-[var(--color-primary)]">en Tunisie</span>
                        </h1>

                        <p className="text-lg text-[#444651] mb-8 max-w-md leading-relaxed">
                            Livraison gratuite à domicile, aéroport ou hôtel. Kilométrage illimité,
                            assurance incluse. Dès 324 DT pour 3 jours.
                        </p>

                        {/* Trust stats row */}
                        <div className="flex gap-6 mb-9">
                            <div>
                                <div className="text-2xl font-extrabold text-[#191c1e]">15+</div>
                                <div className="text-xs text-[#444651] mt-0.5">Années<br />d&apos;expérience</div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <div className="text-2xl font-extrabold text-[#191c1e]">50+</div>
                                <div className="text-xs text-[#444651] mt-0.5">Véhicules<br />disponibles</div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <div className="text-2xl font-extrabold text-[#191c1e]">4.9★</div>
                                <div className="text-xs text-[#444651] mt-0.5">Note<br />clients</div>
                            </div>
                        </div>

                        <Link
                            href="/nos-voitures"
                            className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-full text-base hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[var(--color-primary)]/25"
                        >
                            Voir nos voitures
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Right: Car image */}
                    <div className="relative h-72 md:h-[440px] flex items-center justify-center">
                        {/* Decorative circle bg */}
                        <div className="absolute inset-0 bg-[var(--color-primary-fixed)] rounded-3xl" />
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/hero-bg.webp"
                                alt="Location voiture Tunisie"
                                fill
                                className="object-contain p-6"
                                priority
                                quality={90}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
