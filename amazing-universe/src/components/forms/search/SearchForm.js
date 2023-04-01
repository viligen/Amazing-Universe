import styles from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <input
                type='text'
                id='search'
                name='search'
                defaultValue=''
                placeholder='Search by title or source...'
            />
            <button type='reset' className={styles.reset}>
                x
            </button>

            <button type='submit' className={styles.search}>
                Search
            </button>
        </form>
    );
}
