import Image from 'next/image';

export function HeroClassic() {
    return (
        <section className="relative bg-[#00256f] min-h-[500px] px-6 md:px-12 py-24 flex items-center justify-center overflow-hidden">
            <Image
                src="/images/hero-bg.webp"
                alt="Location voiture Tunisie"
                fill
                className="object-cover object-center"
                priority
                quality={85}
            />
            <div className="absolute inset-0 bg-[#00256f]/60" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#00256f]/80 to-transparent" />
            <div className="relative z-10 max-w-5xl text-center">
                <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 uppercase drop-shadow-lg">
                    Location Voiture Tunisie
                </h1>
                <p className="font-body text-lg md:text-xl font-medium text-white/85 max-w-2xl mx-auto drop-shadow-md">
                    Louez une voiture en Tunisie avec livraison gratuite dans toutes les villes
                    et aéroports. Sans carte bancaire, kilométrage illimité, assurance incluse.
                    Dès 324 DT pour 3 jours.
                </p>
                <div className="mt-6 inline-flex items-center gap-3">
                    <span className="h-px w-8 bg-white/50" />
                    <span className="font-headline text-sm md:text-base font-bold tracking-widest text-white uppercase drop-shadow-md">
                        24h / 7j
                    </span>
                    <span className="h-px w-8 bg-white/50" />
                </div>
            </div>
        </section>
    );
}
