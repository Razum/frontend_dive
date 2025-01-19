import Image from 'next/image';
import styles from '@/app/has-animation/page.module.css';

const importAll = (context: __WebpackModuleApi.RequireContext) =>
    context.keys().map((key) => context(key).default);

const images = importAll(require.context('./images/', false, /\.(?:png|jpg)$/));

function HasAnimationPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {images.map((image, index) => (
                    <div key={index} className={styles.item}>
                        <Image alt="" src={image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HasAnimationPage;
