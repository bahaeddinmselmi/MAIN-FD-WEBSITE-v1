import Link from 'next/link';

export function HeroLuxury() {
    return (
        <section className="relative min-h-[640px] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1c1c1e]" />

            {/* Gold accent line — top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

            {/* Decorative grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 py-28">
                {/* Eyebrow */}
                <p className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.4em] mb-7">
                    Prestige · Confort · Excellence
                </p>

                {/* Large serif headline — left aligned */}
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-5 leading-none max-w-3xl">
                    Location<br />
                    Voiture<br />
                    <span className="text-gray-300">Tunisie</span>
                </h1>

                {/* Gold underline accent */}
                <div className="w-20 h-0.5 bg-[var(--color-accent)] mb-8" />

                <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
                    Une expérience de conduite d&apos;exception. Flotte premium, service 24h/7j.
                    Sans carte bancaire — kilométrage illimité inclus.
                </p>

                <div className="flex items-center gap-5">
                    {/* Gold outlined CTA */}
                    <Link
                        href="/nos-voitures"
                        className="inline-flex items-center gap-3 border border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-4 uppercase tracking-[0.15em] text-xs font-bold hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                    >
                        Découvrir la flotte
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>

                    <a
                        href="/contact"
                        className="text-gray-400 text-xs uppercase tracking-[0.15em] font-bold hover:text-white transition-colors duration-300"
                    >
                        Nous contacter
                    </a>
                </div>

                {/* Bottom stats */}
                <div className="mt-16 flex gap-12">
                    {[
                        { value: '15+', label: 'Années d\'expérience' },
                        { value: '4.9★', label: 'Satisfaction client' },
                        { value: '24/7', label: 'Disponibilité' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl font-bold text-[var(--color-accent)]">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
