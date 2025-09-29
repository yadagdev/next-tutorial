export type Post = {
    slug: string;    // URL用の一意キー
    title: string;   // 記事タイトル
    date: string;    // ISO日付
    excerpt: string; // 一覧用の短い説明
    content: string; // 本文
}