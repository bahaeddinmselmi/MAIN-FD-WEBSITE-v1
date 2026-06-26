import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getServiceBySlug, getCities, getServices } from "@/lib/get-site-data";
import CityPageTemplate, { generateCityMetadata } from "@/components/city-page-template";
import ServicePageTemplate, { generateServiceMetadata } from "@/components/service-page-template";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Pre-generate all city + service slugs at build time
export async function generateStaticParams() {
    const [cities, services] = await Promise.allSettled([
        getCities(),
        getServices(),
    ]);
    const citySlugs = cities.status === 'fulfilled' ? cities.value.map(c => ({ slug: c.slug })) : [];
    const serviceSlugs = services.status === 'fulfilled' ? services.value.map(s => ({ slug: s.slug })) : [];
    // Deduplicate: cities take priority over services for the same slug
    const seen = new Set(citySlugs.map(c => c.slug));
    const uniqueServiceSlugs = serviceSlugs.filter(s => !seen.has(s.slug));
    return [...citySlugs, ...uniqueServiceSlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    // Try city first, then service
    const city = await getCityBySlug(slug);
    if (city) return generateCityMetadata(slug);
    return generateServiceMetadata(slug);
}

export default async function LocationVoiturePage({ params }: PageProps) {
    const { slug } = await params;

    // Check city first
    const city = await getCityBySlug(slug);
    if (city) return <CityPageTemplate citySlug={slug} />;

    // Check service
    const service = await getServiceBySlug(slug);
    if (service) return <ServicePageTemplate serviceSlug={slug} />;

    notFound();
}
