'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import hmc1 from '@/assets/gallery/hmc1.jpeg';
import hmc2 from '@/assets/gallery/hmc2.jpeg';
import hmc3 from '@/assets/gallery/hmc3.jpeg';
import hmc4 from '@/assets/gallery/hmc4.jpeg';
import hmc5 from '@/assets/gallery/hmc 5.jpeg';
import hmc6 from '@/assets/gallery/hmc 6.jpeg';
import hmc7 from '@/assets/gallery/hmc7.jpeg';

const images = [hmc1, hmc2, hmc3, hmc4, hmc5, hmc6, hmc7];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-10 px-6">
            <div className="max-w-4xl mx-auto text-center mb-12 mt-30">
                <h1 className="text-3xl font-bold mb-4">Hero MotoCorp Plant Visit</h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    We visited <strong>Hero MotoCorp</strong> to understand their industrial processes,
                    gather sensor-level data, and identify challenges in monitoring real-time metrics across various
                    departments. This helped us define the core problems and design potential solutions.
                </p>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {images.map((src, idx) => (
                    <Card
                        key={idx}
                        className="p-4 rounded-xl overflow-hidden"
                    >
                        <CardContent className="p-0 bg-none">
                            <Image
                                src={src}
                                alt={`Hero Visit ${idx + 1}`}
                                placeholder="blur"
                                className="w-full h-auto object-cover rounded-b-xl"
                            />
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    );
}
