import type { Post } from '@/lib/types';

export const posts: Post[] = [
    {
        slug: "hello-next",
        title: "Hello Next.js",
        date: "2025-09-29",
        excerpt:
          "Next.js は React ベースのフレームワーク。まずは App Router と TypeScript で最小ブログを作ってみる。",
        content: `これはデモ記事です。
    複数行のテキストでもOK。バッククォートで囲めば改行を含められます。`,
      },
      {
        slug: "why-typescript",
        title: "なぜ TypeScript？",
        date: "2025-09-28",
        excerpt:
          "型があると“壊れた瞬間にIDEが怒ってくれる”。保守が楽になり、安心してリファクタできるのが利点。",
        content: `TypeScript は JavaScript に“型”を足した言語。
    書いている最中にエラーを見つけられるので、学習初期でも恩恵が大きいです。`,
      },
      {
        slug: "first-steps-react",
        title: "React の第一歩",
        date: "2025-09-27",
        excerpt:
          "React は“コンポーネント”でUIを組む。関数の入力（props）→画面という流れを押さえればOK。",
        content: `React コンポーネントは関数です。小さく作って組み合わせるのがコツ。`,
      },
];

// slugから1件取り出すヘルパー
export const findPostBySlug = (slug: string): Post | undefined => {
    return posts.find((post) => post.slug === slug);
}