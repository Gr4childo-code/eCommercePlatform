import { useEffect, useContext, useState } from 'react';
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi';
import { AppContext } from '@/app/App';
import styles from './Nav.module.scss';
export const Nav = () => {
  const { initialView } = useContext(AppContext);

  const [toggle, setToggle] = useState(false);
  const navLinks = [
    { id: 1, title: 'About', link: 'About' },
    { id: 2, title: 'Provides', link: 'Provides' },
    { id: 3, title: 'What We Do', link: 'What_We_Do' },
    { id: 4, title: 'Product', link: 'Product' },
    { id: 5, title: 'Process', link: 'Process' },
    { id: 6, title: 'Contact', link: 'Contact' }
  ];

  useEffect(() => {
    console.log(initialView);
  }, [initialView]);
  return (
    <nav className={styles.nav}>
      <div className={styles.open} onClick={() => setToggle(prev => !prev)}>
        {toggle ? <BiMenuAltLeft size={'30px'} /> : <BiMenu size={'30px'} />}
      </div>
      <ul className={`${styles.nav_link} ${toggle ? styles.openNav : ''}`}>
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
    <li
      className={`${styles.nav_link_item}  ${initialView === link ? styles.active : ''} `}
      key={id}
    >
      <a href={`#${link}`} className={`${styles.link}  `} id={`${id}`}>
        {title}
      </a>
    </li>
  );
};
