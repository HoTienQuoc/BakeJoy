export default function OccasionSection() {
    const tags = [
        "Quality ingredients",
        "Custom designs",
        "Fast delivery",
        "Affordable prices",
        "Made with love",
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-4xl font-serif text-orange-600 mb-6">
                        Best Choice for Every Occasion
                    </h3>
                    <p className="text-gray-700 mb-6">
                        At BakeJoy, we craft more than cakes — we create delightful memories.
                        Our treats are perfect for birthdays, weddings, and every sweet
                        celebration in between.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {tags.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://placehold.co/400x400?text=Occasion"
                        alt="Occasion Cake"
                        className="rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
