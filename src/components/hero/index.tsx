import { HeroClassic } from './hero-classic';
import { HeroModern } from './hero-modern';
import { HeroLuxury } from './hero-luxury';
import { HeroBold } from './hero-bold';
import { HeroFresh } from './hero-fresh';

interface ThemedHeroProps {
    layoutTemplate?: string;
}

export function ThemedHero({ layoutTemplate = 'classic' }: ThemedHeroProps) {
    switch (layoutTemplate) {
        case 'modern':  return <HeroModern />;
        case 'luxury':  return <HeroLuxury />;
        case 'bold':    return <HeroBold />;
        case 'fresh':   return <HeroFresh />;
        default:        return <HeroClassic />;
    }
}
