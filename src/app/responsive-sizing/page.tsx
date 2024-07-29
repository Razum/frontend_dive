import styles from '@/app/responsive-sizing/page.module.css';

const ResponsiveSizingPage = () => {
    return (
        <>
            <div>
                <h5>max-content</h5>
                <div className={styles.box1}>What is Lorem Ipsum?</div>
                <div className={styles.box2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </div>
            </div>

            <hr/>

            <div>
                <h5>min-content</h5>
                <div className={styles.box3}>What is Lorem Ipsum?</div>
                <div className={styles.box4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>

            <hr/>

            <div>
                <h5>fit-content</h5>
                <div className={styles.box5}>What is Lorem Ipsum?</div>
                <div className={styles.box6}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>

            <hr/>

            <div>
                <h5>fit-content()</h5>
                <div className={styles.box7}>What is Lorem Ipsum?</div>
                <div className={styles.box8}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>

            <div>
                <h5>clamp</h5>
                <div className={styles.box9}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </div>
            </div>
        </>
    );
}

export default ResponsiveSizingPage;