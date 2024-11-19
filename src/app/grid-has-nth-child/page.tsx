import styles from '@/app/grid-has-nth-child/page.module.css';

function GridHasNthChildPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.photo}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                    />
                </div>
                <div className={styles.title}>Product Title</div>
                <div className={styles.labels}>
                    <span className={styles.label}>Label 1</span>
                    <span className={styles.label}>Label 2</span>
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.photo}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                    />
                </div>
                <div className={styles.title}>Product Title</div>
                <div className={styles.labels}>
                    <span className={styles.label}>Label 1</span>
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.photo}>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                    />
                </div>
                <div className={styles.title}>Product Title</div>
                <div className={styles.labels}>
                    <span className={styles.label}>Label 1</span>
                    <span className={styles.label}>Label 2</span>
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
            </div>
        </div>
    );
}

export default GridHasNthChildPage;
