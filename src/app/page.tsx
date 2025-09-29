import Link from "next/link";
import { posts } from '@/data/posts';

export default function Home() {
  return (
    <>
      <h1 className="text-2x1 font-bold mb-6">Demo Blog</h1>
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug} className="border rounded-x1 p-5 hover:shadow-sm transition-shadow">
            <Link href={`/posts/${post.slug}`} className="text-lg font-samibold hover:underline">
              {post.title}
            </Link>
            <div className="text-xs opacity-70 mt-1">{post.date}</div>
            <p className="mt-3">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
