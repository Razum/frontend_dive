import { FaRegQuestionCircle } from 'react-icons/fa';

import styles from '@/app/anchor-positioning/page.module.css';

function AnchorPositioningPage() {
    return (
        <div className={styles.wrapper}>
            <h1>Anchor Positioning</h1>
            <div>
                Just some text before the icon
                <button
                    type="button"
                    className={styles.button}
                    popoverTarget="info"
                    popoverTargetAction="toggle"
                    id="btn"
                >
                    <FaRegQuestionCircle />
                </button>
                <div
                    id="info"
                    className={styles.tooltip}
                    popover="manual"
                    anchor="btn"
                >
                    This is a tooltip
                </div>
            </div>
        </div>
    );
}

export default AnchorPositioningPage;
