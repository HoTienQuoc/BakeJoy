// src/components/SignatureSection.tsx
const items = [
    { id: 1, title: "Descendant Choco Chips", price: "$15", img: "/assets/sign-1.png" },
    { id: 2, title: "Classic Vanilla Chiffon", price: "$25", img: "/assets/sign-2.png" },
    { id: 3, title: "Choco Mousse Extravaganza", price: "$35", img: "/assets/sign-3.png" }
];

export default function SignatureSection() {
    return (
        <section className="bg-[var(--bake-peach)] py-12">
            <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
                <h2 className="h-playful text-[34px] text-center text-[var(--bake-coral)] mb-8">Our Signature</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {items.map(it => (
                        <div key={it.id} className="flex flex-col items-center text-center">
                            <div className="stamp-fallback rounded-xl p-4 bg-white shadow-card">
                                {/* image inside scalloped visual (use border/padding to mimic) */}
                                <div className="bg-white p-4 rounded-md">
                                    <img src={it.img} alt={it.title} className="w-48 h-48 object-cover rounded-md" />
                                </div>
                            </div>

                            <h3 className="mt-4 text-[var(--bake-deep)] h-playful text-lg">{it.title}</h3>
                            <div className="text-[var(--bake-coral)] font-bold mt-2">{it.price}</div>
                            <div className="mt-3 flex items-center gap-4">
                                <button className="bg-[var(--bake-deep)] text-white w-9 h-9 rounded-md flex items-center justify-center">🛍️</button>
                                <a className="text-[var(--bake-deep)] text-xs underline">More Details</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* pagination mimic */}
                <div className="mt-8 flex justify-center items-center gap-4 text-[var(--bake-deep)]">
                    <button className="text-2xl">‹</button>
                    <div className="flex gap-3 items-center">
                        <span className="px-2">1</span>
                        <span className="px-2">2</span>
                        <span className="px-2">3</span>
                        <span className="px-2">…</span>
                        <span className="px-2">10</span>
                    </div>
                    <button className="text-2xl">›</button>
                </div>
            </div>
        </section>
    );
}
