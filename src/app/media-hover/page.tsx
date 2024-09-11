import { CiHome } from 'react-icons/ci';

import styles from '@/app/media-hover/page.module.css';

function MediaHoverPage() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} type="button">
                <CiHome className={styles.icon} />
                <span className={styles.text}>Hover me</span>
            </button>
        </div>
    );
}

export default MediaHoverPage;
