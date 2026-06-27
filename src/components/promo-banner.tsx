import Link from "next/link";

export function PromoBanner() {
    return (
        <section className="bg-[#f7f9fc] py-24 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
                    {/* Left half — text */}
                    <div className="w-full md:w-1/2 p-12 md:p-20">
                        {/* Badge pill */}
                        <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-8">
                            Offre Spéciale
                        </span>

                        <h2 className="font-headline text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Découvrez la Tunisie en toute liberté
                        </h2>

                        <p className="font-body text-[#92abff] text-lg mb-10 opacity-90">
                            Profitez de nos tarifs exceptionnels pour explorer chaque coin du pays.
                            Livraison gratuite à l&apos;aéroport.
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            {/* Price */}
                            <div className="text-white">
                                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">
                                    À partir de
                                </p>
                                <p className="font-body text-4xl font-black">
                                    324 <span className="text-lg font-semibold">DT / 3 jours</span>
                                </p>
                            </div>
                            {/* CTA */}
                            <Link
                                href="/nos-voitures"
                                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-bold hover:bg-white/80 transition-colors"
                            >
                                Voir les offres
                            </Link>
                        </div>
                    </div>

                    {/* Right half — image */}
                    <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative ">
                        <img
                            src="/images/Promo-banner.jpg"
                            alt="Location voiture Tunisie"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
