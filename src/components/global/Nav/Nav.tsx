import styles from './Nav.module.scss';
export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_link}>
        <li className={styles.nav_link_item}>About</li>
        <li className={styles.nav_link_item}>Product</li>
        <li className={styles.nav_link_item}>Service</li>
        <li className={styles.nav_link_item}>Contact</li>
      </ul>
    </nav>
  );
};
