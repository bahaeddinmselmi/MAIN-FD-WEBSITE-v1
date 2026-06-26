import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/get-site-data";
import { siteConfig } from "@/lib/site-config";
import { Calendar, Tag, ArrowLeft } from "lucide-react";

export const revalidate = 300;
export const dynamicParams = true;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getBlogPosts(1, 100);
    return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return { title: "Article non trouvé" };

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt || undefined,
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.excerpt || undefined,
            type: 'article',
            publishedTime: post.publishedAt || undefined,
            images: post.coverImage ? [post.coverImage] : [],
        },
        alternates: { canonical: `${siteConfig.url.baseUrl}/blog/${post.slug}` },
    };
}

function formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt || post.publishedAt,
        "author": { "@type": "Organization", "name": siteConfig.brand.name },
        "publisher": {
            "@type": "Organization",
            "name": siteConfig.brand.name,
            "logo": { "@type": "ImageObject", "url": `${siteConfig.url.baseUrl}${siteConfig.logo.main}` },
        },
        "image": post.coverImage || undefined,
        "url": `${siteConfig.url.baseUrl}/blog/${post.slug}`,
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/<\/script>/gi, '<\\/script>') }} />

            <main className="max-w-3xl mx-auto px-6 py-12">
                {/* Back */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft size={16} /> Retour au blog
                </Link>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider">
                                <Tag size={11} />{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h1 className="font-headline text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                    {post.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted mb-8">
                    <span className="flex items-center gap-1"><Calendar size={14} />{formatDate(post.publishedAt)}</span>
                    <span>{siteConfig.brand.name}</span>
                </div>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
                        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
                    </div>
                )}

                {/* Excerpt */}
                {post.excerpt && (
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium border-l-4 border-accent pl-4">
                        {post.excerpt}
                    </p>
                )}

                {/* Content */}
                {post.content && (
                    <div
                        className="prose prose-lg max-w-none text-foreground leading-relaxed"
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {post.content}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="font-bold text-foreground mb-3">Prêt à louer une voiture en Tunisie ?</p>
                    <Link href="/nos-voitures" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent-dark transition-colors">
                        Voir nos voitures
                    </Link>
                </div>
            </main>
        </>
    );
}
