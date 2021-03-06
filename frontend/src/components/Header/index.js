import React from 'react';

function Header (props) {

  const {title, children} = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
