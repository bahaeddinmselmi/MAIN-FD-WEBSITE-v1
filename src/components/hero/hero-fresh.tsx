import Link from 'next/link';

export function HeroFresh() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 px-6 md:px-12" style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)' }}>
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-xl" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/10 rounded-full blur-xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />

            <div className="relative z-10 max-w-screen-2xl mx-auto text-center">
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full px-5 py-2.5 mb-7">
                    <span className="text-xl">🚗</span>
                    <span className="text-white font-semibold text-sm">Service disponible 24h / 7j</span>
                    <span className="text-xl">✅</span>
                </div>

                {/* Main headline */}
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-tight drop-shadow-sm">
                    Location Voiture<br />
                    <span className="text-white/80">en Tunisie</span>
                </h1>

                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Livraison gratuite à domicile, à l&apos;aéroport ou à l&apos;hôtel.
                    Sans carte bancaire — payez à l&apos;arrivée. Dès 324 DT pour 3 jours.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <Link
                        href="/nos-voitures"
                        className="inline-flex items-center gap-3 bg-white text-orange-600 font-extrabold px-8 py-4 rounded-full text-base hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-xl"
                    >
                        🚗 Choisir ma voiture
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 border-2 border-white/50 text-white font-bold px-7 py-4 rounded-full text-base hover:bg-white/15 transition-colors"
                    >
                        Nous contacter
                    </Link>
                </div>

                {/* Trust pills row */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {[
                        '✅ Sans carte bancaire',
                        '🚚 Livraison gratuite',
                        '∞ Kilométrage illimité',
                        '🛡️ Assurance incluse',
                    ].map((item) => (
                        <span key={item} className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
