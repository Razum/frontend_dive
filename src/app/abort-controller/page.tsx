'use client';

import { useEffect, useState } from 'react';
import styles from '@/app/abort-controller/page.module.css';

function AbortControllerPage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isAborted, setIsAborted] = useState(false);
    useEffect(() => {
        const controller = new AbortController();

        window.addEventListener(
            'mousemove',
            (event) => {
                setPosition({ x: event.clientX, y: event.clientY });
            },
            { signal: controller.signal }
        );

        setTimeout(() => {
            controller.abort();
            setIsAborted(true);
        }, 5000);

        return () => {
            controller.abort();
        };
    }, []);
    return (
        <div>
            <h1>Abort Controller</h1>

            <div className={styles.value}>
                {isAborted ? 'Aborted' : 'Not Aborted'}
            </div>
            <div
                className={styles.value}
            >{`${position.x}; y: ${position.y}`}</div>
        </div>
    );
}

export default AbortControllerPage;
