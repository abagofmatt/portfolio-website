import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import utilStyles from '../styles/utils.module.css'

export const Navbar = () => {
    return (
      <div className={styles.navbarouter}>
        <nav className={`${styles.navbar} ${utilStyles.container}`}>
            <Link href='/#home'>
                <a className={styles.navhome}>
                    <Image
                        priority
                        src="/images/matt3.WebP"
                        height={48}
                        width={48}
                    />
                </a>
            </Link>
            <section className={styles.links}>
                <Link href='/#home'>
                    <a className={styles.navlink}>Home</a>
                </Link>
                <Link href='/posts/Projects'>
                    <a className={styles.navlink}>Projects</a>
                </Link>
            </section>
        </nav>
      </div>
    );
  };