export function TrustBadges() {
    const badges = [
        {
            icon: "credit_card_off",
            title: "Sans Carte Bancaire",
            desc: "Payez en espèces à la livraison. Réservation 100% gratuite et sans engagement.",
        },
        {
            icon: "schedule",
            title: "Service 24/7",
            desc: "Disponible jour et nuit. Livraison à l'aéroport et partout en Tunisie.",
        },
        {
            icon: "verified_user",
            title: "Assurance Incluse",
            desc: "Tous nos véhicules sont assurés tous risques. Conduisez l'esprit tranquille.",
        },
    ];

    return (
        <section className="bg-[#f7f9fc] py-24 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {badges.map((badge, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-[#dbe1ff] rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-[#00256f] text-4xl">
                                    {badge.icon}
                                </span>
                            </div>
                            <h3 className="font-headline text-xl font-bold text-[#191c1e] mb-2">
                                {badge.title}
                            </h3>
                            <p className="font-body text-[#444651] text-sm max-w-[250px]">
                                {badge.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
