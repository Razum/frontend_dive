import Image from 'next/image';
import styles from '@/app/matchacss/page.module.css';

function MatchaCSSPage() {
    return (
        <>
            <header />
            <section>
                <h2>What is Lorem Ipsum?</h2>
                <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </blockquote>
            </section>
            <section className={styles.grid}>
                <article className={styles.article}>
                    <h3>Where does it come from?</h3>
                    <Image
                        loading="lazy"
                        src="https://placehold.co/600x400"
                        alt="image_1"
                    />

                    <p className={styles.article__decription}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of de
                        Finibus Bonorum et Malorum (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, Lorem
                        ipsum dolor sit amet.., comes from a line in section
                        1.10.32.
                    </p>
                </article>
                <article className={styles.article}>
                    <h3>Where does it come from?</h3>
                    <Image
                        loading="lazy"
                        src="https://placehold.co/600x400"
                        alt="image_1"
                    />

                    <p className={styles.article__decription}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of de
                        Finibus Bonorum et Malorum (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, Lorem
                        ipsum dolor sit amet.., comes from a line in section
                        1.10.32.
                    </p>
                </article>
            </section>
            <section>
                <form>
                    <fieldset>
                        <legend>Inputs</legend>
                        <label>
                            Text:
                            <input type="text" placeholder="Operator 6O" />
                        </label>
                        <label>
                            Password:
                            <input type="password" placeholder="●●●●●●●●" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Checkbox</legend>
                        <label>
                            <input
                                type="checkbox"
                                name="color"
                                value="black"
                                defaultChecked
                            />
                            Black
                        </label>
                        <label>
                            <input type="checkbox" name="color" value="red" />
                            Red
                        </label>
                        <label>
                            <input type="checkbox" name="color" value="blue" />
                            Blue
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="color"
                                value="yellow"
                                disabled
                            />
                            Yellow
                        </label>
                    </fieldset>
                    <meter
                        min="0"
                        max="100"
                        low={40}
                        high={70}
                        optimum={99}
                        value="33"
                     />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default MatchaCSSPage;
