// src/components/HeroSection.tsx
export default function HeroSection() {
    return (
        <section className="relative bg-[var(--bake-cream)] overflow-hidden">
            <div className="max-w-[1180px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-8 py-12">
                {/* Left: title + text */}
                <div className="z-10">
                    <nav className="flex items-center justify-between mb-4">
                        <div className="h-playful text-[22px] text-[var(--bake-coral)]">BAKEJÖY</div>
                        <div className="hidden md:flex gap-6 text-sm text-[var(--bake-deep)]">
                            <a>ABOUT</a><a>PRODUCTS</a><a>BLOG</a><a>CONTACT</a>
                        </div>
                    </nav>

                    <h1 className="h-playful text-[48px] md:text-[72px] leading-none text-[var(--bake-deep)]">
                        Delight in
                        <br />
                        <span className="text-[var(--bake-coral)]">every bites!</span>
                    </h1>

                    <p className="mt-4 max-w-md text-[14px] text-gray-600">
                        Experience the joy of perfectly baked cakes, made with love and crafted to bring a smile to every celebration.
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                        <button className="rounded-full bg-[var(--bake-coral)] text-white px-6 py-2 text-sm shadow-card">SHOP NOW</button>
                        <div className="text-sm text-[var(--bake-deep)]">Choco Croissant (0.6$)</div>
                    </div>
                </div>

                {/* Right: big croissant image overlapping, arrows */}
                <div className="relative flex justify-center lg:justify-end items-center">
                    {/* left arrow */}
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border text-[var(--bake-deep)] hidden md:flex items-center justify-center shadow">‹</button>
                    {/* right arrow */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border text-[var(--bake-deep)] hidden md:flex items-center justify-center shadow">›</button>

                    <div className="relative w-[520px] h-[320px] md:w-[640px] md:h-[380px]">
                        <div className="absolute -left-10 top-6 w-80 h-80 rounded-[40px] bg-[var(--bake-peach)] blur-[6px] opacity-80"></div>

                        <img src="/assets/hero-croissant.png" alt="croissant" className="relative w-full h-full object-contain rounded-[28px] drop-shadow-[0_25px_60px_rgba(15,77,72,0.08)]" />

                        {/* badge */}
                        <div className="absolute bottom-6 left-8 bg-white px-3 py-1 rounded-full shadow flex items-center gap-2">
                            <img src="/assets/hero-badge.png" alt="badge" className="w-6 h-6" />
                            <div className="text-xs text-[var(--bake-deep)]">
                                <div className="font-semibold">Best Seller</div>
                                <div className="text-gray-500 text-[11px]">Chocolate Truffle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* waved divider */}
            <div className="wave-top"></div>
        </section>
    );
}
