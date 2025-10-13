// src/components/OrderSection.tsx
export default function OrderSection() {
    const steps = [
        { id: 1, title: "Choose", text: "Pick your favorite cake flavor and design." },
        { id: 2, title: "Customize", text: "Add personal touches and special requests." },
        { id: 3, title: "Order", text: "Place and pay your order via online." }
    ];

    return (
        <section className="bg-[var(--bake-peach)] py-12">
            <div className="max-w-[1180px] mx-auto px-6 lg:px-8 text-center">
                <h3 className="h-playful text-[34px] text-[var(--bake-coral)]">How to Order</h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {steps.map(s => (
                        <div key={s.id} className="relative bg-white rounded-[48px] p-6 h-64 flex flex-col items-center justify-between">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[var(--bake-deep)] text-white rounded-full flex items-center justify-center text-xl font-bold">
                                {s.id}
                            </div>
                            <div className="mt-8 text-[var(--bake-coral)] font-semibold">{s.title}</div>
                            <p className="text-xs text-gray-600 px-4">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
