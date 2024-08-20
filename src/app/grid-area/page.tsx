import clsx from 'clsx';
import styles from '@/app/grid-area/page.module.css';

function GridAreaPage() {
    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.grid, styles.grid1)}>
                <div className={styles.header}>Header</div>
                <div className={styles.sidebar}>Sidebar</div>
                <div className={styles.content}>Content</div>
                <div className={styles.footer}>Footer</div>
            </div>
            <div className={clsx(styles.grid, styles.grid2)}>
                <div className={styles.header}>Header</div>
                <div className={styles.sidebar}>Sidebar</div>
                <div className={styles.content}>Content</div>
                <div className={styles.footer}>Footer</div>
            </div>
            <div className={clsx(styles.grid, styles.grid3)}>
                <div className={styles.header}>Header</div>
                <div className={styles.sidebar}>Sidebar</div>
                <div className={styles.content}>Content</div>
                <div className={styles.footer}>Footer</div>
            </div>
            <div className={clsx(styles.grid, styles.grid4)}>
                <div className={styles.header}>Header</div>
                <div className={styles.sidebar}>Sidebar</div>
                <div className={styles.content}>Content</div>
                <div className={styles.footer}>Footer</div>
            </div>
            <div className={clsx(styles.grid, styles.grid5)}>
                <div className={styles.header}>Header</div>
                <div className={styles.content}>Content</div>
                <div className={styles.footer}>Footer</div>
            </div>
            <div className={clsx(styles.grid, styles.grid6)}>
                <div>Column 1</div>
                <div>Column 2</div>
                <div>Column 3</div>
            </div>
            <div className={clsx(styles.grid, styles.grid7)}>
                <div>Column 1</div>
                <div>Column 2</div>
                <div>Column 3</div>
                <div>Column 4</div>
            </div>
        </div>
    );
}

export default GridAreaPage;
