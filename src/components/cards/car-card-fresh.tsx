import Image from "next/image";
import Link from "next/link";
import { CarCardPrice } from "../car-card-price";

interface CarCardFreshProps {
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

export function CarCardFresh({
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
}: CarCardFreshProps) {
    return (
        /* Very rounded card, warm off-white bg, orange top accent stripe */
        <div className="group bg-[#fff8f5] rounded-3xl overflow-hidden border-t-4 border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col h-full">
            {/* Image on warm bg */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#fff0e8]">
                <Image
                    src={image || "/car-placeholder.png"}
                    alt={title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {category && (
                    <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                        {category}
                    </span>
                )}
            </div>

            <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="font-headline text-lg md:text-xl font-bold text-[#191c1e] leading-tight mb-0.5">{title}</h3>
                <p className="text-xs text-[#444651] mb-4">{subtitle}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5 text-[13px] text-[#444651]">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-primary)]">airline_seat_recline_normal</span>{seats} places</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-primary)]">sensor_door</span>{doors}</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-primary)]">settings</span>{transmission}</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-[var(--color-primary)]">local_gas_station</span>{fuel}</div>
                </div>

                {/* Price + CTA inside a white inner card */}
                <div className="bg-white rounded-2xl p-4 mt-auto shadow-sm">
                    <div className="flex items-end justify-between mb-3">
                        <div>
                            <p className="text-[10px] text-[#444651] uppercase tracking-wide font-medium">Prix 3 jours</p>
                            <CarCardPrice price3Days={price3Days} />
                        </div>
                        {freeCancellation && (
                            <div className="flex items-center gap-1 text-emerald-600">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                <span className="text-[10px] font-bold">Annulation gratuite</span>
                            </div>
                        )}
                    </div>
                    <Link
                        href={`/rental/${citySlug}/${slug}`}
                        className="block w-full py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-full text-center text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-[var(--color-primary)]/20"
                    >
                        🚗 Réserver maintenant
                    </Link>
                </div>
            </div>
        </div>
    );
}
