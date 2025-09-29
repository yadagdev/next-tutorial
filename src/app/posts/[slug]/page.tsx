import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findPostBySlug, posts } from '@/data/posts';

// オプション：ビルド時に静的化したい時用
export const generateStaticParams = () => {
    return posts.map((post) => ({ slug: post.slug}));
}

export const generateMetaData = ({ params }: { params: { slug: string } }) => {
    const post = findPostBySlug(params.slug);
    if (!post) return { title: "Not Found" };
    return {
        title: `${post.title} | Next Tutorial Blog`,
        description: post.excerpt,
    };
}

// 事前申告したslug以外は404にする
export const dynamicparams = false;

const PostPage = ({ params }: { params: { slug: string }}) => {
    const post = findPostBySlug(params.slug);
    if (!post) return notFound();

    return (
        <article className="max-w-[70ch] leading-relaxed">
            <Link href="/" className="text-sm hover:underline">← Home</Link>
            <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
            <div className="text-sm opacity-70">{post.date}</div>
            <p className="mt-4 whitespace-pre-wrap">{post.content}</p>
        </article>
    )
}
export default PostPage;