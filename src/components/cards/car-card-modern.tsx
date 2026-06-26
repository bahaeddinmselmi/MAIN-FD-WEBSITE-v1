import Image from "next/image";
import Link from "next/link";
import { CarCardPrice } from "../car-card-price";

interface CarCardModernProps {
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

export function CarCardModern({
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
}: CarCardModernProps) {
    return (
        /* Horizontal card — image left 40%, content right 60% */
        <div className="group flex bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 h-full">
            {/* Image — left 40% */}
            <div className="relative shrink-0 overflow-hidden bg-[#f2f4f7]" style={{ width: '42%' }}>
                <Image
                    src={image || "/car-placeholder.png"}
                    alt={title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 40vw, 20vw"
                />
                {category && (
                    <span className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {category}
                    </span>
                )}
            </div>

            {/* Content — right 58% */}
            <div className="flex flex-col flex-1 p-4 min-w-0">
                <h3 className="font-headline text-base font-bold text-[#191c1e] leading-tight mb-0.5 truncate">{title}</h3>
                <p className="text-xs text-[#444651] mb-3">{subtitle}</p>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mb-3 text-[11px] text-[#444651]">
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[var(--color-primary)]">airline_seat_recline_normal</span>{seats} places</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[var(--color-primary)]">sensor_door</span>{doors}</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[var(--color-primary)]">settings</span>{transmission}</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-[var(--color-primary)]">local_gas_station</span>{fuel}</div>
                </div>

                <div className="mt-auto border-t border-gray-100 pt-3">
                    <p className="text-[10px] text-[#444651] uppercase tracking-wide font-medium mb-0.5">3 jours dès</p>
                    <CarCardPrice price3Days={price3Days} />
                    {freeCancellation && (
                        <div className="flex items-center gap-1 text-emerald-600 mt-1.5 mb-3">
                            <span className="material-symbols-outlined text-xs">check_circle</span>
                            <span className="text-[10px] font-semibold">Annulation gratuite</span>
                        </div>
                    )}
                    <Link
                        href={`/rental/${citySlug}/${slug}`}
                        className="block w-full py-2.5 bg-[var(--color-primary)] text-white font-bold rounded-full text-center text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Voir l&apos;offre
                    </Link>
                </div>
            </div>
        </div>
    );
}
