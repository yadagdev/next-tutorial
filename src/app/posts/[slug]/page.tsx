import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findPostBySlug, posts } from '@/data/posts';

// オプション：ビルド時に静的化したい時用
export const generateStaticParams = () => {
    return posts.map((post) => ({ slug: post.slug}));
}

const PostPage = ({ params }: { params: { slug: string }}) => {
    const post = findPostBySlug(params.slug);
    if (!post) return notFound();

    return (
        <article className="prose prose-invert max-w-none">
            <Link href="/" className="text-sm hover:underline">← Home</Link>
            <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
            <div className="text-sm opacity-70">{post.date}</div>
            <p className="mt-4 whitespace-pre-wrap">{post.content}</p>
        </article>
    )
}
export default PostPage;