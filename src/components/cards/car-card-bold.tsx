import Image from "next/image";
import Link from "next/link";
import { CarCardPrice } from "../car-card-price";

interface CarCardBoldProps {
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

export function CarCardBold({
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
}: CarCardBoldProps) {
    return (
        /* Portrait card with thick red top accent border + pill spec badges */
        <div className="group bg-white rounded-xl overflow-hidden border-t-4 border-[var(--color-primary)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f7f7f7]">
                <Image
                    src={image || "/car-placeholder.png"}
                    alt={title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {category && (
                    <span className="absolute top-3 right-3 bg-[var(--color-primary)] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                        {category}
                    </span>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-headline text-xl font-extrabold text-[#191c1e] uppercase tracking-tight leading-tight mb-1">{title}</h3>
                <p className="text-xs text-[#444651] mb-4">{subtitle}</p>

                {/* Specs as pill badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {[
                        { icon: 'airline_seat_recline_normal', text: `${seats} places` },
                        { icon: 'settings', text: transmission },
                        { icon: 'local_gas_station', text: fuel },
                        { icon: 'sensor_door', text: doors },
                    ].map((spec) => (
                        <span key={spec.text} className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-[11px] font-semibold text-gray-600">
                            <span className="material-symbols-outlined text-xs text-[var(--color-primary)]">{spec.icon}</span>
                            {spec.text}
                        </span>
                    ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-end justify-between mb-4">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">3 jours dès</p>
                            <CarCardPrice price3Days={price3Days} />
                        </div>
                        {freeCancellation && (
                            <span className="text-emerald-600 text-[11px] font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                Gratuite
                            </span>
                        )}
                    </div>
                    <Link
                        href={`/rental/${citySlug}/${slug}`}
                        className="block w-full py-3.5 bg-[var(--color-primary)] text-white font-extrabold rounded-full text-center text-sm uppercase tracking-wider hover:bg-[var(--color-primary-container)] transition-colors shadow-md shadow-[var(--color-primary)]/20"
                    >
                        Voir l&apos;offre →
                    </Link>
                </div>
            </div>
        </div>
    );
}
