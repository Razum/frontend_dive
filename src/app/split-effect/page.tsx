'use client';

import React, { useState } from 'react';
import styles from '@/app/split-effect/page.module.css';

function SplitEffectPage() {
    const [value, setValue] = useState(50);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target;
        setValue(+t.value);
    };

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                onChange={handleChange}
                type="range"
                style={{ '--k': value }}
            />
        </div>
    );
}

export default SplitEffectPage;
