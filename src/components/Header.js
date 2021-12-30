import React from "react";
import styled from "styled-components";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth, provider } from "./firebase";

const Header = (props) => {
  const googleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+"></img>
      </Logo>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt=""></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt=""></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt=""></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt=""></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt=""></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt=""></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={googleHandler}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 5px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 14px;
      letter-spacing: 1.42px;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        left: 0;
        transform-origin: right center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* 
  @media (max-width: 768px) {
    display: none;
  } */
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    font-weight: 600;
    border-color: black;
  }
`;

export default Header;
