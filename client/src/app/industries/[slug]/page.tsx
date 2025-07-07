'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { servicesContent, IndustrySlug } from '../../../data/industries'

export default function IndustryPage() {
    const params = useParams();
    const rawSlug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
    const slug = (rawSlug || 'pharmaceuticals') as IndustrySlug;

    const content = servicesContent[slug];

    if (!content) {
        return <p>Not found</p>;
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black  text-black dark:text-white px-4 py-12">
            <section className="text-center mb-12 mt-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h1>
                <p className="text-lg max-w-3xl mx-auto opacity-80">{content.abstract}</p>
            </section>

            <article className="max-w-3xl mx-auto space-y-8">
                <div className="space-y-4 border rounded-lg p-6 bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold">Overview</h2>
                    <p className="leading-relaxed">{content.intro}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {content.highlights.map((point, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-lg bg-gray-50 dark:bg-black/70 border border-gray-200 dark:border-gray-700"
                        >
                            <p className="leading-relaxed">{point}</p>
                        </div>
                    ))}
                </div>

                <div className="border rounded-lg p-6 bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                    <p className="leading-relaxed">{content.conclusion}</p>
                </div>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </article>
        </main>
    );
}
