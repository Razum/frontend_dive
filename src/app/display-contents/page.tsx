import { FaFilter } from 'react-icons/fa';

import styles from '@/app/display-contents/page.module.css';

function DisplayContentsPage() {
    return (
        <div className={styles.wrapper}>
            <h1>Display Contents</h1>
            <div className={styles.nav}>
                <a href="/">Gallery</a>
                <a href="/">About Us</a>
                <a href="/">Contacts</a>
                <div className={styles.block}>
                    <input
                        type="text"
                        value="Search"
                        className={styles.input}
                    />
                    <FaFilter />
                </div>
            </div>
        </div>
    );
}

export default DisplayContentsPage;
