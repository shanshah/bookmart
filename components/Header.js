import NavLink from './shared/NavLink';

import styles from './styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
         <div className={styles.wrapper}>
           <h2>BOOK MART</h2>
           <div>
              <NavLink text="Login" navPath="/login" />
              <NavLink text="Register" navPath="/register" />
           </div>
         </div>
      </header>
    );
}
