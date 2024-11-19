import styles from '@/app/scope/page.module.css';

function ScopePage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.light}>
                Lorem Ipsum is simply dummy text of the{' '}
                <a href="/">printing and typesetting industry</a>. Lorem Ipsum
                has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
            </div>
            <div className={styles.dark}>
                Contrary to popular belief, <a href="/">Lorem Ipsum</a> is not
                simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source.
            </div>
        </div>
    );
}

export default ScopePage;
