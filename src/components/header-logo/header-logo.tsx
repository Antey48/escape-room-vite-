import { PageName } from '../../constants';
import { memo} from 'react';

    type HeaderLogoProps = {
      pageName: string;
    }

// function HeaderLogoSpan():JSX.Element{
//   return(
//     <span className="logo header__logo">
//       <svg width={134} height={52} aria-hidden="true">
//         <use xlinkHref="#logo" />
//       </svg>
//     </span>
//   );
// }

// function HeaderLogoLink():JSX.Element{
//   return(
//     <a
//       className="logo header__logo"
//       href="index.html"
//       aria-label="Перейти на Главную"
//     >
//       <svg width={134} height={52} aria-hidden="true">
//         <use xlinkHref="#logo" />
//       </svg>
//     </a>
//   );
// }

const HeaderLogo = memo(({pageName}:HeaderLogoProps):JSX.Element =>{
  const headerLogo = pageName === PageName.Main;
  return(
    <a
      className="logo header__logo"
      href={headerLogo ? '#' : 'index.html'}
      aria-label="Перейти на Главную"
    >
      <svg width={134} height={52} aria-hidden="true">
        <use xlinkHref="#logo" />
      </svg>
    </a>
  );
});

HeaderLogo.displayName = 'HeaderLogo';

export default HeaderLogo;
