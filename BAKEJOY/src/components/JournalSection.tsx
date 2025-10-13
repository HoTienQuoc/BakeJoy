const posts = [
    { id: 1, title: "Our Favorite Cakes", img: "/assets/j1.png" },
    { id: 2, title: "Designing Birthday Cakes", img: "/assets/j2.png" },
    { id: 3, title: "Party Cake Guide", img: "/assets/j3.png" },
];

export default function JournalSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h3 className="h-playful text-2xl text-[var(--bake-deep)]">Cake Journal</h3>
                <div className="mt-6 grid sm:grid-cols-3 gap-6">
                    {posts.map(p => (
                        <article key={p.id} className="rounded-2xl overflow-hidden shadow-card">
                            <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                            <div className="p-4">
                                <h4 className="font-semibold text-sm">{p.title}</h4>
                                <p className="text-xs text-gray-500 mt-2">Short excerpt about the post…</p>
                                <button className="mt-3 text-[var(--bake-coral)] text-xs font-semibold">Read more</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
