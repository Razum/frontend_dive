import styles from '@/app/animation-delay/page.module.css';

function AnimationDelay() {
    const vars = {
        '--time': '30s',
        '--quantity': 10
    };
    return (
        <section className={styles.slider}>
            <div className={styles.inner} style={vars}>
                <div style={{ '--index': 1 }} />
                <div style={{ '--index': 2 }} />
                <div style={{ '--index': 3 }} />
                <div style={{ '--index': 4 }} />
                <div style={{ '--index': 5 }} />
                <div style={{ '--index': 6 }} />
                <div style={{ '--index': 7 }} />
                <div style={{ '--index': 8 }} />
                <div style={{ '--index': 9 }} />
                <div style={{ '--index': 10 }} />
            </div>
        </section>
    );
}

export default AnimationDelay;
