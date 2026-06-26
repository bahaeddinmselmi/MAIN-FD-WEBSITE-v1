import Image from "next/image";
import Link from "next/link";

interface CarCardLuxuryProps {
    id: string;
    title: string;
    slug: string;
    subtitle?: string;
    price3Days: number;
    currency?: string;
    image: string;
    category?: string;
    seats?: string;
    doors?: string;
    transmission?: string;
    fuel?: string;
    caution?: string;
    freeCancellation?: boolean;
    citySlug?: string;
}

export function CarCardLuxury({
    title,
    slug,
    subtitle = "ou similaire",
    price3Days,
    image,
    category,
    seats = "5",
    doors = "5 portes",
    transmission = "Manuelle",
    fuel = "Essence",
    freeCancellation = true,
    citySlug = "tunis",
}: CarCardLuxuryProps) {
    return (
        <div className="group bg-[#1c1c1e] rounded-lg overflow-hidden border border-white/5 hover:border-[var(--color-accent)]/40 hover:shadow-2xl hover:shadow-black/50 transition-all duration-400 flex flex-col h-full">
            {/* Image on dark bg */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                <Image
                    src={image || "/car-placeholder.png"}
                    alt={title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {category && (
                    <span className="absolute top-4 left-4 border border-[var(--color-accent)] text-[var(--color-accent)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                        {category}
                    </span>
                )}
            </div>

            <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="font-headline text-lg md:text-xl font-bold text-white leading-tight mb-1">{title}</h3>
                <p className="text-xs text-gray-500 mb-4">{subtitle}</p>

                {/* Specs on dark bg */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-[13px] text-gray-400">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-accent)]">airline_seat_recline_normal</span>{seats} places</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-accent)]">sensor_door</span>{doors}</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-accent)]">settings</span>{transmission}</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-accent)]">local_gas_station</span>{fuel}</div>
                </div>

                <div className="border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-end justify-between mb-4">
                        <div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">À partir de</p>
                            <p className="text-2xl font-bold text-[var(--color-accent)]">
                                {price3Days} <span className="text-sm text-gray-400 font-normal">DT</span>
                            </p>
                            <p className="text-[10px] text-gray-500 mt-0.5">pour 3 jours</p>
                        </div>
                        {freeCancellation && (
                            <div className="flex items-center gap-1.5 text-emerald-400">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                <span className="text-[11px] font-semibold">Annulation gratuite</span>
                            </div>
                        )}
                    </div>
                    <Link
                        href={`/rental/${citySlug}/${slug}`}
                        className="block w-full py-3.5 border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded text-center text-sm uppercase tracking-[0.1em] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                    >
                        Découvrir l&apos;offre
                    </Link>
                </div>
            </div>
        </div>
    );
}
