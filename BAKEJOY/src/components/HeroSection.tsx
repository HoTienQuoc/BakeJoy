// src/components/HeroSection.tsx
const HeroSection = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
            {/* Text content */}
            <div className="z-10 flex-1 max-w-lg space-y-6">
                <h1 className="text-5xl md:text-6xl font-serif text-brown-800 leading-tight">
                    Delight in <br />
                    every <span className="text-orange-500">bites!</span>
                </h1>

                <p className="text-gray-700 text-lg">
                    Freshly baked treats that bring happiness in every bite. Crafted with
                    love, passion, and the finest ingredients.
                </p>

                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-medium hover:bg-orange-600 transition">
                        Order Now
                    </button>
                    <button className="px-6 py-3 border border-orange-400 text-orange-500 rounded-full text-lg font-medium hover:bg-orange-50 transition">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex-1 mt-10 md:mt-0 flex justify-center">
                <img
                    src="/assets/hero-cake-placeholder.png"
                    alt="Delicious cake"
                    className="w-80 md:w-[450px] drop-shadow-2xl rounded-3xl object-cover"
                />
                {/* Decorative circle */}
                <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Floating elements (optional) */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-100 rounded-full blur-2xl opacity-70"></div>
            <div className="absolute -top-10 right-0 w-64 h-64 bg-orange-100 rounded-full blur-2xl opacity-70"></div>
        </section>
    );
}

export default HeroSection;
