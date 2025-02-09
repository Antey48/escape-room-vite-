import { PageName } from '../../constants';
import { memo} from 'react';

    type HeaderMainLogoProps = {
      pageName: string;
    }


const HeaderMainNav = memo(({pageName}:HeaderMainLogoProps):JSX.Element =>{
  const authStatus = false;
  return (
    <ul className="main-nav__list">
      <li className="main-nav__item">
        <a className={`link ${pageName !== PageName.Contacts || pageName !== PageName.MyQuest ? 'active' : ''}`} href="index.html">
      Квесты
        </a>
      </li>
      <li className="main-nav__item">
        <a className={`link ${pageName === PageName.Contacts ? 'active' : ''}`} href="contacts.html">
      Контакты
        </a>
      </li>
      {
        authStatus &&
        <li className="main-nav__item">
          <a className={`link ${pageName === PageName.MyQuest ? 'active' : ''}`} href="my-quests.html">
      Мои бронирования
          </a>
        </li>
      }

    </ul>
  );
});

HeaderMainNav.displayName = 'HeaderMainNav';

export default HeaderMainNav;
