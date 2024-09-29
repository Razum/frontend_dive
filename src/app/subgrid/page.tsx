import styles from '@/app/subgrid/page.module.css';

function SubgridPage() {
    return (
        <main className={styles.main}>
            <h1>Subgrid</h1>
            <div className={styles.grid}>
                <article className={styles.article}>
                    <h3>Blossoming Beauty: Embracing the Vibrancy of Spring</h3>
                    <div>
                        As winter fades, spring emerges with a burst of color
                        and life. Gardens come alive with blooming flowers, and
                        the weather warms, inviting outdoor activities.
                    </div>
                    <img
                        className={styles.image}
                        src="https://placehold.co/600x400"
                        alt=""
                    />
                </article>
                <article className={styles.article}>
                    <h3>Sunny Days Ahead: Celebrating the Joys of Summer</h3>
                    <div>
                        Summer brings long, sunny days and endless opportunities
                        for adventure. Whether its beach trips, barbecues, or
                        exploring new hobbies, the season encourages relaxation
                        and fun. Embrace the warmth and make unforgettable
                        memories under the bright summer sun.
                    </div>
                    <img
                        className={styles.image}
                        src="https://placehold.co/600x400"
                        alt=""
                    />
                </article>
                <article className={styles.article}>
                    <h3>Harvest Harmony: The Rich Tapestry of Autumn</h3>
                    <div>
                        Autumn paints the world in stunning hues of red, orange,
                        and gold. Its a time for harvest festivals, cozy
                        gatherings, and enjoying the crisp, cool air. As leaves
                        fall, theres a sense of reflection and gratitude for the
                        abundance of the year.
                    </div>
                    <img
                        className={styles.image}
                        src="https://placehold.co/600x400"
                        alt=""
                    />
                </article>
                <article className={styles.article}>
                    <h3>
                        Winter Wonderland: Embracing the Magic of the Cold
                        Season
                    </h3>
                    <div>
                        Winter transforms landscapes into serene, snowy vistas,
                        offering a peaceful respite from the hustle and bustle.
                        Its a season for festive celebrations, warm beverages by
                        the fire, and engaging in winter sports. Embrace the
                        tranquility and beauty that winter uniquely provides.
                    </div>

                    <img
                        className={styles.image}
                        src="https://placehold.co/600x400"
                        alt=""
                    />
                </article>
                <article className={styles.article}>
                    <h3>
                        Winter Wonderland: Embracing the Magic of the Cold
                        Season
                    </h3>
                    <div>
                        Winter transforms landscapes into serene, snowy vistas,
                        offering a peaceful respite from the hustle and bustle.
                        Its a season for festive celebrations, warm beverages by
                        the fire, and engaging in winter sports. Embrace the
                        tranquility and beauty that winter uniquely provides.
                    </div>

                    <img
                        className={styles.image}
                        src="https://placehold.co/600x400"
                        alt=""
                    />
                </article>
            </div>
        </main>
    );
}

export default SubgridPage;
