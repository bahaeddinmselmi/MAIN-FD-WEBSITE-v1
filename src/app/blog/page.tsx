import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/get-site-data";
import { siteConfig } from "@/lib/site-config";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export const revalidate = 300;

export const metadata: Metadata = {
    title: `Blog | ${siteConfig.brand.name}`,
    description: `Conseils, actualités et guides pour la location de voiture en Tunisie par ${siteConfig.brand.name}.`,
    alternates: { canonical: `${siteConfig.url.baseUrl}/blog` },
};

function formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPage() {
    const posts = await getBlogPosts(1, 20);

    return (
        <main>
            {/* Hero */}
            <section className="bg-primary py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Blog</h1>
                    <p className="text-xl text-white/80">Conseils, guides et actualités sur la location de voiture en Tunisie.</p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    {posts.length === 0 ? (
                        <p className="text-center text-muted py-16">Aucun article publié pour le moment.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => (
                                <article key={post.id} className="card overflow-hidden group hover:shadow-lg transition-shadow">
                                    {post.coverImage && (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                                                <Tag size={12} />
                                                {post.tags[0]}
                                            </div>
                                        )}
                                        <h2 className="font-headline text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        {post.excerpt && (
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                        )}
                                        <div className="flex items-center justify-between text-xs text-muted">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {formatDate(post.publishedAt)}
                                            </span>
                                            <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-accent font-bold hover:gap-2 transition-all">
                                                Lire <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
