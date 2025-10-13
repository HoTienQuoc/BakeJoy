export default function OrderSection() {
    const steps = [
        { id: 1, title: "Choose", desc: "Pick your favorite cake & design." },
        { id: 2, title: "Customize", desc: "Add your personal message or decoration." },
        { id: 3, title: "Order", desc: "Place your order online or in-store." },
    ];

    return (
        <section className="py-16 bg-orange-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-serif text-orange-700 mb-10">How to Order</h3>

                <div className="grid sm:grid-cols-3 gap-6">
                    {steps.map((s) => (
                        <div
                            key={s.id}
                            className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition flex flex-col items-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-lg font-bold mb-4">
                                {s.id}
                            </div>
                            <h4 className="font-semibold text-orange-600 mb-2">{s.title}</h4>
                            <p className="text-gray-600 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
