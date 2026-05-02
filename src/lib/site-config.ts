// ═══════════════════════════════════════════════════════════════════
// Site Configuration — Location Voitures Tunisie
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
    // ── Brand Identity ─────────────────────────────────────────────
    brand: {
        name: "Location Voitures Tunisie",
        nameShort: "LVT",
        nameUpper: "LOCATION VOITURES TUNISIE",
        slug: "locationvoitures-tunisie",
        foundingYear: 2009,
        description: "Louez une voiture en Tunisie au meilleur prix. Djerba, Tunis, Hammamet, Monastir.",
    },

    // ── Contact Information ────────────────────────────────────────
    contact: {
        phone: {
            display: "+216 23 179 016",
            link: "+21623179016",
            whatsapp: "21623179016",
        },
        email: "contact@locationvoitures-tunisie.com",
        address: {
            street: "Aeroport Tunis-Carthage",
            city: "Tunis",
            region: "Tunis",
            postalCode: "2035",
            country: "TN",
            displayShort: "Tunis, Tunisie",
        },
        geo: {
            latitude: 36.8510,
            longitude: 10.2272,
        },
    },

    // ── Domain & URLs ──────────────────────────────────────────────
    url: {
        domain: "locationvoitures-tunisie.com",
        baseUrl: "https://locationvoitures-tunisie.com",
        googleReview: "https://g.page/r/CdmeTUTRPsPKEBM/review",
    },

    // ── Social Media ───────────────────────────────────────────────
    social: {
        facebook: "https://www.facebook.com/locationvoiturestunisie",
        instagram: "https://www.instagram.com/locationvoiturestunisie",
    },

    // ── Logo Paths ─────────────────────────────────────────────────
    logo: {
        main: "/images/logo/logo.png",
        white: "/images/logo/logo-wh.png",
        external: "",
        ogImage: "/images/og-image.jpg",
    },

    // ── Ratings & Reviews ──────────────────────────────────────────
    rating: {
        value: 4.9,
        reviewCount: 150,
        bestRating: 5,
        worstRating: 1,
    },

    // ── Pricing ────────────────────────────────────────────────────
    pricing: {
        currency: "TND",
        currencyDisplay: "DT",
        eurRate: 3.3,              // 1 EUR = 3.3 TND
        minPrice3Days: 324,       // cheapest 3-day price (Swift / i10)
        minPrice3DaysEur: 98,     // Math.round(324 / 3.3)
        maxPrice3Days: 1521,      // most expensive 3-day price (Transporter)
        priceRange3Days: "324 DT - 1521 DT",
        priceRange3DaysEur: "98€ - 461€",
        pricingLabel: "Prix pour 3 jours",
    },

    // ── SEO ────────────────────────────────────────────────────────
    seo: {
        titleDefault: "Location Voitures Tunisie – Pas Cher & Rapide",
        titleTemplate: "%s | Location Voitures Tunisie",
        description: "Louez une voiture en Tunisie au meilleur prix. Djerba, Tunis, Hammamet, Monastir.",
        keywords: [
            "location voiture tunisie",
            "location voiture tunis",
            "location voiture djerba",
            "location voiture hammamet",
            "location voiture monastir",
            "location voiture sfax",
            "location voiture sousse",
            "location voiture aeroport tunis",
            "location voiture aeroport djerba",
            "louer voiture tunisie pas cher",
            "location voiture sans carte bancaire tunisie",
        ],
        locale: "fr_TN",
        language: "fr",
        // TODO: Replace with actual Google Search Console verification code
        googleVerification: "",
    },

    // ── Booking ────────────────────────────────────────────────────
    booking: {
        storageKey: "lvt-booking-storage",
        reviewStorageKey: "lvt_reviewed",
        defaultLocation: "Tunis, Tunisie",
    },

    // ── Telegram Bot ─────────────────────────────────────────────────
    telegram: {
        botToken: "YOUR_BOT_TOKEN",
        chatId: "YOUR_CHAT_ID",
    },

    // ── Email ─────────────────────────────────────────────────────────
    email: {
        to: "contact@locationvoitures-tunisie.com",
    },

    // ── Theme / Colors ─────────────────────────────────────────────
    theme: {
        primary: "#00256f",
        primaryContainer: "#1a3c8f",
        primaryFixed: "#dbe1ff",
        onPrimary: "#ffffff",
        onPrimaryContainer: "#92abff",
        accent: "#00256f",
        accentDark: "#1a3c8f",
        background: "#f7f9fc",
        surface: "#f7f9fc",
        surfaceContainerLow: "#f2f4f7",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerHighest: "#e0e3e6",
        onSurface: "#191c1e",
        onSurfaceVariant: "#444651",
        outlineVariant: "#c4c6d3",
        footerBg: "#172554",
    },
} as const;

// ── Derived Helpers ────────────────────────────────────────────────

/** Full WhatsApp URL */
export const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.whatsapp}`;

/** Full tel: link */
export const telUrl = `tel:${siteConfig.contact.phone.link}`;

/** Full mailto: link */
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;

/** OG image full URL */
export const ogImageUrl = `${siteConfig.url.baseUrl}${siteConfig.logo.ogImage}`;

/** Logo full URL (for structured data) */
export const logoFullUrl = `${siteConfig.url.baseUrl}/images/logo/logo.png`;

/** Copyright line */
export const copyrightLine = (year: number) =>
    `\u00A9 ${siteConfig.brand.foundingYear} - ${year} ${siteConfig.brand.name}. Tous droits réservés.`;

export type SiteConfig = typeof siteConfig;
