import styles from './Header.module.scss';
import Link from './Link';

export default function Header() {
  return (
    <header>
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_bar__list}>
          <li className={styles.nav_bar__list__item}>
            <Link name='Sobre' href='#' />
          </li>
          <li className={styles.nav_bar__list__item}>
            <Link name='Formações' href='#' />
          </li>
          <li className={styles.nav_bar__list__item}>
            <Link name='Conhecimentos' href='#' />
          </li>
          <li className={styles.nav_bar__list__item}>
            <Link name='Contato' href='#' />
          </li>
        </ul>
      </nav>
    </header>
  );
}
