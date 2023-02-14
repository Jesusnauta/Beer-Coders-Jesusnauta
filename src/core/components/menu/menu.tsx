/* eslint-disable jsx-a11y/anchor-is-valid */
import { MenuOption } from '../app/App';
import './menu.scss';

type MenuProps = {
  menuOptions: MenuOption[];
};

export function Menu({ menuOptions }: MenuProps) {
  return (
    <>
      <div className="container">
        <a href="#">
          <img className="burgerPic" src="./img/burger-menu.png" alt=""></img>
        </a>
        <ul className="menu">
          {menuOptions.map((option) => (
            <li key={option.label}>
              <a href={option.path}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
