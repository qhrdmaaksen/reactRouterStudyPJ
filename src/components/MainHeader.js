import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/*-NavLink component 는 navigation 역할을 해주며 표준 링크를 대체할수있음 --여전히 앵커 태그를 생성하여 클릭이 브라우저 기본값을 방지활성함,
            앵커 항목에 CSS 클래스를 설정가능 activeClassName attr 로 하면됨*/}
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
