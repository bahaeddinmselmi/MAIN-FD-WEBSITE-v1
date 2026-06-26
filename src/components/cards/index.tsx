import { CarCardClassic } from './car-card-classic';
import { CarCardModern } from './car-card-modern';
import { CarCardLuxury } from './car-card-luxury';
import { CarCardBold } from './car-card-bold';
import { CarCardFresh } from './car-card-fresh';

interface ThemedCarCardProps {
    layoutTemplate?: string;
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

export function ThemedCarCard({ layoutTemplate = 'classic', ...props }: ThemedCarCardProps) {
    switch (layoutTemplate) {
        case 'modern':  return <CarCardModern {...props} />;
        case 'luxury':  return <CarCardLuxury {...props} />;
        case 'bold':    return <CarCardBold {...props} />;
        case 'fresh':   return <CarCardFresh {...props} />;
        default:        return <CarCardClassic {...props} />;
    }
}
