import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <Link href="/" className="text-sm hover:underline">← Home</Link>
            <p className="mt-8">ページが見つかりませんでした。</p>
        </div>
    )
}
export default NotFound;