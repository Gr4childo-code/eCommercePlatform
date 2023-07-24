import { useEffect, useContext } from 'react';
import styles from './Nav.module.scss';
import { AppContext } from '@/app/App';
export const Nav = () => {
  const navLinks = [
    { id: 1, title: 'About', link: 'About' },
    { id: 2, title: 'Provides', link: 'Provides' },
    { id: 3, title: 'What We Do', link: 'What_We_Do' },
    { id: 4, title: 'Product', link: 'Product' },
    { id: 5, title: 'Process', link: 'Process' },
    { id: 6, title: 'Contact', link: 'Contact' }
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_link}>
        {navLinks.map(navLink => (
          <Links id={navLink.id} title={navLink.title} key={navLink.id} link={navLink.link} />
        ))}
      </ul>
    </nav>
  );
};

const Links = ({ id, link, title }: any) => {
  const { initialView } = useContext(AppContext);

  return (
    <li className={styles.nav_link_item} key={id}>
      <a
        href={`#${link}`}
        className={`${styles.link}  ${initialView === link ? styles.active : ''} `}
        id={`${id}`}
      >
        {title}
      </a>
    </li>
  );
};
