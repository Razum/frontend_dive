import styles from '@/app/masonry/page.module.css';

const divs = [
    { color: 'red', width: 200, height: 400, number: 1 },
    { color: 'blue', width: 300, height: 300, number: 2 },
    { color: 'green', width: 200, height: 600, number: 3 },
    { color: 'yellow', width: 300, height: 300, number: 4 },
    { color: 'purple', width: 200, height: 300, number: 5 },
    { color: 'orange', width: 300, height: 400, number: 6 },
    { color: 'pink', width: 250, height: 400, number: 7 },
    { color: 'brown', width: 300, height: 380, number: 8 },
    { color: 'cyan', width: 200, height: 300, number: 9 },
    { color: 'magenta', width: 400, height: 600, number: 10 },
];

const MasonryPage = () => {
    return (
        <>
        <h1>Masonry</h1>
            <div className={styles.wrapper}>
                <div className="styles fff"></div>
                {divs.map((div, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: div.color,
                            width: `${div.width}px`,
                            height: `${div.height}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '10px',
                            color: 'white',
                            fontSize: '20px',
                        }}
                    >
                        {div.number}
                    </div>
                ))}
            </div>
        </>
    );
}

export default MasonryPage;