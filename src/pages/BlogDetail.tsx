import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  limit,
  getDocs,
} from "firebase/firestore";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

type BlogDoc = {
  title: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  content?: string;
  createdAt?: any;
  author?: string;
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<(BlogDoc & { id: string }) | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    (async () => {
      try {
        // 1) doc id == slug
        const byId = await getDoc(doc(db, "blogs", slug));
        if (byId.exists()) {
          if (!cancelled) setPost({ id: byId.id, ...(byId.data() as BlogDoc) });
        } else {
          // 2) where slug == slug
          const q = query(
            collection(db, "blogs"),
            where("slug", "==", slug),
            limit(1)
          );
          const snap = await getDocs(q);
          if (!snap.empty) {
            const d = snap.docs[0];
            if (!cancelled) setPost({ id: d.id, ...(d.data() as BlogDoc) });
          } else if (!cancelled) setNotFound(true);
        }
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (post?.title) document.title = `${post.title} | Blog`;
  }, [post]);

  const dateString = useMemo(() => {
    const t = post?.createdAt;
    if (!t) return "";
    const d = t?.seconds ? new Date(t.seconds * 1000) : new Date(t);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }, [post]);

  const rendered = useMemo(() => {
    const raw = post?.content || "";
    const looksHtml = /<\w+[\s>]/.test(raw);
    if (looksHtml) return { __html: raw };
    const safe = raw
      .split("\n\n")
      .map((p) => `<p>${escapeHtml(p).replace(/\n/g, "<br/>")}</p>`)
      .join("");
    return { __html: safe };
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1E222A] text-white">
        <Navbar />
        <PageBanner title="Loading…" size="lg" pattern="dots" />
        <Footer />
      </div>
    );
  }
  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-[#1E222A] text-white">
        <Navbar />
        <PageBanner title="Post Not Found" size="lg" pattern="dots" />
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Link to="/blog" className="text-[#FED045] hover:underline">
            ← Back to Blog
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E222A] text-white">
      <Navbar />
      <PageBanner
        title={post.title}
        subtitle={post.excerpt}
        size="lg"
        pattern="waves"
      />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6 text-sm text-white/60">
          {post.author && <span>{post.author}</span>}
          {post.author && dateString && <span className="mx-2">•</span>}
          {dateString && <span>{dateString}</span>}
        </div>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="mb-8 w-full rounded-2xl border border-white/10 bg-white/5"
          />
        )}
        <article
          className="prose prose-invert max-w-none prose-a:text-[#FED045]"
          dangerouslySetInnerHTML={rendered}
        />
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <Link to="/blog" className="text-[#FED045] hover:underline">
          ← Back to Blog
        </Link>
      </section>
      <Footer />
    </div>
  );
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
