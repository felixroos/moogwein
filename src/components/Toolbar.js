import React from 'react';
import logo from '../img/logo_white.png';

export const Toolbar = ({ items }) => {
    const largeMenu = (<nav className="nav is-visible-from-md">
        <ul className="nav__items">
            {items.filter(i => !i.smallOnly).map((item, index) => (
                <li className="nav__item" key={index}>
                    <a href={item.href} className="btn btn_clear btn_invert">{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>);

    const smallMenu = (<nav tabIndex="0" className="nav dropdown dropdown_right is-hidden-from-md">
        <ul className="nav__items">
            <li className="nav__item">
                <a className="btn btn_clear btn_invert">Menu</a>
            </li>
        </ul>
        <ul className="dropdown-options">
            {items.map((item, index) => (
                <li className="dropdown-option" key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>);

    return (<div className="menu is-fixed" data-container>
        <div className="menu-container">
            <div className="menu_title logo">
                <img src={logo} alt="moog" />
            </div>
            {largeMenu}
            {smallMenu}
        </div>
    </div>);
}