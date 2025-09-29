import Link from "next/link";
import { posts } from '@/data/posts';

export default function Home() {
  return (
    <>
      <h1 className="text-2x1 font-bold mb-6">Demo Blog</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border rounded-1g p-4">
            <Link href={`/posts/${post.slug}`} className="text-lg font-samibold hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
