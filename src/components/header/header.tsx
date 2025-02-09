import { memo } from 'react';
import HeaderLogo from '../header-logo/header-logo';
import HeaderMainNav from '../header-main-nav/header-main-nav';
import HeaderSideNav from '../header-side-nav/header-side-nav';

type HeaderProps = {
    pageName: string;
  }

const Header = memo(({pageName }:HeaderProps): JSX.Element =>
//   const headerNavigationEmpty = pageNames === PageNames.Login ?
//     '' : <HeaderNavigation pageNames = {pageNames}/>;
  (
    <header className="header">
      <div className="container container--size-l">
        <HeaderLogo pageName={pageName} />
        <nav className="main-nav header__main-nav">
          <HeaderMainNav pageName={pageName}/>
        </nav>
        <HeaderSideNav pageName={pageName}/>
      </div>
    </header>
  )
);

Header.displayName = 'Header';
export default Header;
