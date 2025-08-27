import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  createdAt: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Blog, "id">),
        }));
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />

      <PageBanner
        title="Blog"
        subtitle="Insights, tips, and strategies on Local SEO, Google Business Profile, and digital growth."
        size="lg"
        pattern="dots"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {loading ? (
          <p className="text-center text-white/60">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-white/60">
            No blogs yet. Add some in Firebase.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:translate-y-[-3px] transition"
              >
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p className="mt-2 text-sm text-white/70">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-[#FED045] hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
