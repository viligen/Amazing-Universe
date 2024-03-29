import NewPostBtn from '../../btns/NewPostBtn';

import styles from './Header.module.css';

export default function HeroInfo() {
    return (
        <div className={styles['main-info']}>
            <h2 className={styles.larger}>
                Share your favourite<br></br>
                space photography, facts and thoughts
            </h2>
            <blockquote>
                <p>
                    "The universe is a pretty big place. If it's just us, seems
                    like an awful waste of space."
                </p>
                <p>― Carl Sagan, Contact</p>
            </blockquote>
            <NewPostBtn />
        </div>
    );
}
