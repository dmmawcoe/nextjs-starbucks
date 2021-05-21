import styles from './heading.module.scss'

export default function heading({type, children}) {
    switch(type) {
        case 'h1':
            return <h1 className={styles.heading1}>{children}</h1>
            break;
        
        case 'h2':
            return <h2 className={styles.heading2}>{children}</h2>
            break;

        case 'h3':
            return <h3 className={styles.heading3}>{children}</h3>
            break;

        case 'h4':
            return <h4 className={styles.heading4}>{children}</h4>
            break;

        default:
            return <p>The heading type you provided doesnt match any expected value.</p>
    }
}