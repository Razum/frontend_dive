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
                    <Link href="/border-image-overlay">Border Image Overlay</Link>
                </li>
            </ul>
        </main>
    );
}

export default Home;
