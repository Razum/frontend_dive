import styles from '@/app/nth-child/page.module.css';

function NTHChildPage() {
    return (
        <div className={styles.wrapper}>
            <h1>nth-child</h1>
            <h3>nth of</h3>
            <div className={styles.parent}>
                <div>Child #1</div>
                <div className={styles.child}>Child #2 with class .child</div>
                <div>Child #3</div>
                <div>Child #4</div>
                <div className={styles.child}>Child #5 with class .child</div>
                <div className={styles.child}>Child #6 with class .child</div>
                <div>Child #7</div>
                <div>Child #8</div>
                <div className={styles.child}>Child #9 with class .child</div>
                <div>Child #10</div>
            </div>
        </div>
    );
}

export default NTHChildPage;
