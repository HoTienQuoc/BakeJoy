const products = [
    { title: "Descendant Choco Chips", price: "$15" },
    { title: "Classic Vanilla Chiffon", price: "$25" },
    { title: "Choco Mousse Extravaganza", price: "$35" },
];

export default function SignatureSection() {
    return (
        <section className="py-16 bg-orange-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif text-orange-600 mb-10">
                    Our Signature
                </h2>

                <div className="grid sm:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div
                            key={p.title}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
                        >
                            <img
                                src="https://placehold.co/300x200?text=Cake"
                                alt={p.title}
                                className="rounded-xl mb-4 mx-auto"
                            />
                            <h3 className="text-lg font-semibold text-gray-700">{p.title}</h3>
                            <p className="text-orange-500 font-bold mt-2">{p.price}</p>
                            <button className="mt-4 px-5 py-2 border border-orange-300 text-orange-500 rounded-full hover:bg-orange-50 transition">
                                View details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
