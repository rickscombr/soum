import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`nav-menu-wrap ${menuOpen ? 'nav-menu-2--open' : '' }`}>
      <div className="menu-button w-nav-button">
        <div className="menu-icon w-icon-nav-menu" onClick={() => setMenuOpen(!menuOpen)}></div>
      </div>
      <nav
        role="navigation"
        className="w-nav-menu nav-menu-2">
        <a href="#about" className="nav-link w-nav-link">Sobre</a>
        <a href="#features" className="nav-link w-nav-link">Benefícios</a>
        <a href="#Como-funciona" className="nav-link w-nav-link">Como funciona</a>
        <a href="#formulario-topo" className="nav-link w-nav-link">Formulário</a>
      </nav>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;