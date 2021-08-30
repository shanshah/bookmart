import styles from './styles/BookCard.module.css';

export default function BookCard({ book }) {
    const { title, author, description, price } = book.fields;

    return (
        <div className={styles.card}>
            <h3>{ title }</h3>
            <h4 className={styles.author}>
                { author }
            </h4>
            <p className={styles.description} >    
                { description }
            </p>
            <span className={styles.price}>
                Price: Rs. { price }
            </span>
        </div>
    )
}