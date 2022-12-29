import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styled from './Header.module.css' ;
import mealsImage from '../../assets/meals.jpg' ;

const Header = (props) => {
  return (
    <Fragment>
      <header className={styled.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styled['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!'/>
      </div>
    </Fragment>
  );
};

export default Header;
