import Link from 'next/link';

export function HeroBold() {
    return (
        <section className="relative min-h-[600px] bg-[#191c1e] flex items-center overflow-hidden">
            {/* Diagonal red stripe accent — right side */}
            <div
                className="absolute right-0 top-0 bottom-0 w-2/5 md:w-1/3 bg-[var(--color-primary)] hidden md:block"
                style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            />

            {/* Subtle dot pattern on dark background */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 py-24 w-full">
                {/* Eyebrow */}
                <p className="text-[var(--color-primary)] text-xs font-extrabold uppercase tracking-[0.4em] mb-5">
                    Service 24h / 24 · 7j / 7
                </p>

                {/* Giant uppercase headline */}
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase leading-none mb-6 tracking-tight max-w-2xl">
                    LOCATION<br />
                    VOITURE<br />
                    <span className="text-[var(--color-primary)]">TUNISIE</span>
                </h1>

                <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
                    Sans carte bancaire. Kilométrage illimité. Livraison gratuite
                    partout en Tunisie. Dès 324 DT / 3 jours.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="/nos-voitures"
                        className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-wider text-sm hover:bg-[var(--color-primary-container)] transition-colors shadow-xl shadow-[var(--color-primary)]/30"
                    >
                        Voir les voitures
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>

                    <a
                        href="/tarifs"
                        className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:border-white/50 transition-colors"
                    >
                        Nos tarifs
                    </a>
                </div>

                {/* Bottom stat row */}
                <div className="mt-16 flex flex-wrap gap-8">
                    {[
                        { icon: 'local_shipping', label: 'Livraison gratuite' },
                        { icon: 'credit_card_off', label: 'Sans carte bancaire' },
                        { icon: 'all_inclusive', label: 'Kilométrage illimité' },
                        { icon: 'shield', label: 'Assurance incluse' },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-xl">{item.icon}</span>
                            <span className="text-sm font-bold text-gray-300 uppercase tracking-wide">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
