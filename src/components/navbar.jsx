import React from 'react'
import styled from 'styled-components'
import food1 from '../assets/food1.png'
import { FiShoppingCart } from "react-icons/fi";
import avatar from '../assets/avatar-male-president-svgrepo-com.svg'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-inline: 37em 2em;
  padding-block: 1em;
  position: relative;
`

const Links = styled.ul`
  display: flex;
  gap: 2em;
  text-transform: capitalize;
  align-items: center;
  &:last-of-type {
    gap: 1.5em;
  }
`

const List = styled.li`
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 3px;
    width: 0%;
    transition-duration: .3s;
    border-radius: 10em;
    background: #333;
  }
  &:hover::after {
    width: 100%;
  }
`
const Button = styled.button`
  display: flex;
  gap: 1em;
  text-transform: capitalize;
`
const ImageContainer = styled.div`
    height: 28em;
    width: 19em;
    background-color: #282828;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 5em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    top: 0%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: .3s linear;
`
const HeroImage = styled.img`
  width: 120%;
  transform: translateY(1em);
  filter: drop-shadow(5px 5px 5px rgb(0, 0, 0, .6));
`
const Header = styled.h1`
  color: white;
  font-weight: 600;
`

export default function navbar() {
  return (
    <Nav>
      <button> </button>
      <ImageContainer>
        <Header>FusionDish</Header>
        <HeroImage src={food1} alt="food"/>
      </ImageContainer>

      <div className="links" style={{display: 'flex', justifyContent: 'space-between', gap: '13em'}}>
        <Links>
          <List>home</List>
          <List>shop</List>
          <List>recipes</List>
          <List>about us</List>
        </Links>

        <Links>
          <Button><FiShoppingCart size={20}/></Button>
          <Button><img src={avatar} width={30} alt="avatar" /></Button>
        </Links>
      </div>
    </Nav>
  )
}
