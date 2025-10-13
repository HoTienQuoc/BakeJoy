// src/components/OccasionSection.tsx
export default function OccasionSection() {
    return (
        <section className="relative">
            {/* teal band with laptop */}
            <div className="bg-[var(--bake-deep)] text-white py-10">
                <div className="max-w-[1180px] mx-auto px-6 lg:px-8 flex justify-center">
                    <div className="w-full max-w-[720px] relative">
                        <img src="/assets/occasion-laptop.png" alt="laptop" className="mx-auto w-full h-auto object-contain drop-shadow-lg" />
                        <div className="absolute left-4 top-8 bg-[var(--bake-peach)] text-[var(--bake-deep)] p-4 rounded-lg shadow">BakeJoy made my daughter's birthday special… <div className="text-xs font-semibold mt-2">Mike Johnson</div></div>
                        <div className="absolute right-8 bottom-10 bg-[var(--bake-peach)] text-[var(--bake-deep)] p-4 rounded-lg shadow">Their chocolate cake is the best… <div className="text-xs font-semibold mt-2">Ellie Anderson</div></div>
                    </div>
                </div>
            </div>

            {/* below teal, content with donut image on right */}
            <div className="bg-[var(--bake-cream)] py-12">
                <div className="max-w-[1180px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="h-playful text-[34px] text-[var(--bake-coral)]">Best Choice for Every Occasion</h3>
                        <p className="mt-3 text-gray-600 max-w-lg">At BAKEJOY, we turn simple ingredients into delectable works of edible art... delivered fresh from the oven for you truly.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-[var(--bake-deep)] text-white rounded-full text-xs">QUALITY INGREDIENTS</span>
                            <span className="px-4 py-2 bg-white border border-[var(--bake-deep)] text-[var(--bake-deep)] rounded-full text-xs">PERSONALIZED DESIGNS</span>
                            <span className="px-4 py-2 bg-[var(--bake-deep)] text-white rounded-full text-xs">ON-TIME DELIVERY</span>
                            <span className="px-4 py-2 bg-[var(--bake-deep)] text-white rounded-full text-xs">AFFORDABLE PRICES</span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img src="/assets/donut.png" alt="donut" className="w-48 h-48 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}
