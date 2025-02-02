import styles from '@/app/offset/page.module.css';

function OffsetPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.square}>
                <div className={styles.box1} />
            </div>
            inset
            <div className={styles.square}>
                <div className={styles.box2} />
            </div>
            stroke offset
            <div className={styles.square}>
                <div className={styles.box3} />
            </div>
            stroke offset
            <div className={styles.square}>
                <div className={styles.box4} />
            </div>
        </div>
    );
}

export default OffsetPage;
