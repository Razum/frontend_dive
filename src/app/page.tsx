import Link from 'next/link';
import styles from '@/app/page.module.css';

function Home() {
    return (
        <main className={styles.main}>
            <ul>
                <li>
                    <Link href="/matchacss">Matcha CSS</Link>
                </li>
                <li>
                    <Link href="/responsive-sizing">Responsive sizing</Link>
                </li>
                <li>
                    <Link href="/grid-area">Grid area</Link>
                </li>
                <li>
                    <Link href="/animation-delay">Animation delay</Link>
                </li>
                <li>
                    <Link href="/media-hover">Media hover</Link>
                </li>
                <li>
                    <Link href="/border-image-overlay">
                        Border Image Overlay
                    </Link>
                </li>
                <li>
                    <Link href="/masonry">Masonry</Link>
                </li>
                <li>
                    <Link href="/subgrid">Subgrid</Link>
                </li>
                <li>
                    <Link href="/abort-controller">Abort Controller</Link>
                </li>
                <li>
                    <Link href="/anchor-positioning">Anchor Positioning</Link>
                </li>
                <li>
                    <Link href="/text-wrap">Text wrap</Link>
                </li>
                <li>
                    <Link href="/nth-child">Nth-child</Link>
                </li>
                <li>
                    <Link href="/scope">Scope</Link>
                </li>
                <li>
                    <Link href="/display-contents">Display Contents</Link>
                </li>
                <li>
                    <Link href="/css-masking">CSS Masking</Link>
                </li>
                <li>
                    <Link href="/blur-and-scale">Blur and scale</Link>
                </li>
                <li>
                    <Link href="/grid-has-nth-child">Grid has nth-child</Link>
                </li>
                <li>
                    <Link href="/has-animation">Has Animation</Link>
                </li>
                <li>
                    <Link href="/split-effect">Split effect</Link>
                </li>
                <li>
                    <Link href="/has_not_animation">:has :not animation</Link>
                </li>
                <li>
                    <Link href="/text-decoration">Text Decoration</Link>
                </li>
                <li>
                    <Link href="/offset">Offset</Link>
                </li>
            </ul>
        </main>
    );
}

export default Home;
