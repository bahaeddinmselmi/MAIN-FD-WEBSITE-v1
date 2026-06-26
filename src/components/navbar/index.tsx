import { NavbarClassic } from './navbar-classic';
import { NavbarModern } from './navbar-modern';
import { NavbarLuxury } from './navbar-luxury';
import { NavbarBold } from './navbar-bold';
import { NavbarFresh } from './navbar-fresh';

interface ThemedNavbarProps {
    layoutTemplate?: string;
    phoneDisplay?: string;
    phoneWhatsappUrl?: string;
}

export function ThemedNavbar({ layoutTemplate = 'classic', ...props }: ThemedNavbarProps) {
    switch (layoutTemplate) {
        case 'modern':  return <NavbarModern {...props} />;
        case 'luxury':  return <NavbarLuxury {...props} />;
        case 'bold':    return <NavbarBold {...props} />;
        case 'fresh':   return <NavbarFresh {...props} />;
        default:        return <NavbarClassic {...props} />;
    }
}
