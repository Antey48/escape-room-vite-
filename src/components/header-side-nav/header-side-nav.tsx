import { PageName } from '../../constants';
import { memo} from 'react';

    type HeaderMainLogoProps = {
      pageName: string;
    }


const HeaderSideNav = memo(({pageName}:HeaderMainLogoProps):JSX.Element =>{
  const authStatus = false;
  return (
    <div className="header__side-nav">
      { pageName !== PageName.Login &&
         <a className={`btn ${authStatus ? 'btn--accent' : 'header__login-btn'} header__side-item`}
           href={`${authStatus ? '#' : 'login.html'}`}
         >
           { authStatus ? 'Выйти' : 'Войти' }
         </a>}
      <a
        className="link header__side-item header__phone-link"
        href="tel:88003335599"
      >
              8 (000) 111-11-11
      </a>
    </div>
  );
});

HeaderSideNav.displayName = 'HeaderMainLogo';

export default HeaderSideNav;
