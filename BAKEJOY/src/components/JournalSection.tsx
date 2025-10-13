export default function JournalSection() {
    const posts = [
        {
            title: "Our Best-Selling Cakes You Must Try",
            img: "https://placehold.co/400x250?text=Blog+1",
        },
        {
            title: "How to Design a Custom Birthday Cake",
            img: "https://placehold.co/400x250?text=Blog+2",
        },
        {
            title: "Choosing the Right Cake for Every Occasion",
            img: "https://placehold.co/400x250?text=Blog+3",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-serif text-orange-600 mb-8">Cake Journal</h3>

                <div className="grid sm:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <article
                            key={post.title}
                            className="bg-orange-50 rounded-2xl overflow-hidden hover:shadow-md transition"
                        >
                            <img src={post.img} alt={post.title} className="w-full h-44 object-cover" />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm">{post.title}</h4>
                                <button className="text-orange-500 text-xs font-medium">Read more</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
