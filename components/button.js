import Link from 'next/link'
import classNames from 'classnames/bind'

import styles from './button.module.scss'

let cx = classNames.bind(styles)

const Button = ({ label, path, type }) => {
    let btnClasses = cx({
        btn: true,
        primary: type === 'primary',
        secondary: type === 'secondary'
    })

    return (
        <Link href={path}>
            <a className={btnClasses}>{label}</a>
        </Link>
    )
}
export default Button;