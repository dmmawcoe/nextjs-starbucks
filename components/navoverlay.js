import Link from 'next/link'
import ButtonUI from './buttonui'

import styles from './navoverlay.module.scss'

export default function NavOverlay({closeClickHandler}) {
    return (
        <div className={styles.nav_overlay}>
            <nav className={styles.nav_overlay_menu}>
                <ButtonUI icon="close" clickHandler={closeClickHandler} />
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/menu">
                            <a>Menu</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/locations">
                            <a>Locations</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/employees">
                            <a>Employees</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}