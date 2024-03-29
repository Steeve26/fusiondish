import React from 'react'
import styled from 'styled-components'
import food1 from '../assets/food1.png'
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import avatar from '../assets/avatar-male-president-svgrepo-com.svg'
import title from '../assets/logo.png'
import title2 from '../assets/logo3.png'
import title3 from '../assets/logo4.png'
// import title4 from '../assets/logo5.png'
// import title4 from '../assets/logo6.png'
// import title4 from '../assets/logo7.png'
// import title4 from '../assets/logo8.png'
// import title4 from '../assets/logo9.png'
import title4 from '../assets/logo10.png'
// import title4 from '../assets/logo11.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  height: 57px;
  box-shadow: #63636333 0px 2px 8px 0px;
  padding-inline: 1.2em 2em;
  position: relative;
  @media only screen and (max-width: 900px) {
    padding-inline: 1.2em;
  }
  @media only screen and (max-width: 420px) {
    padding-inline: .8em;
  }
  @media only screen and (max-width: 400px) {
    padding-right: .6em;
  }
  `

const Links = styled.ul`
  display: flex;
  gap: 2em;
  text-transform: capitalize;
  align-items: center;
  &:first-of-type {
    height: 100%;
  }
  @media (max-width: 800px) {
    &:last-of-type {
      font-size: 1.35em;
      gap: 1.5em;
    }
  }
  @media (max-width: 830px ) {
    &:first-of-type {
      display: none;
    }
  }
  @media (max-width: 400px) {
    &:last-of-type {
      gap: 1.3em;
    }
  }
`
const List = styled.li`
  position: relative;
  cursor: pointer;
  height: 100%;
  line-height: 4.6;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0%;
    transition-duration: .3s;
    border-radius: 10em;
    background: #333;
  }
  &:hover::after, :focus-visible::after {
    width: 100%;
  }
  @media (min-width: 1160px) {
    line-height: 3.8;
  }
`
const Button = styled.button`
  display: flex;
  gap: 1em;
  text-transform: capitalize;
  &:last-of-type {
    > img {
      width: 1.4375em;
    }
  }
  `
const ImageContainer = styled.div`
  height: 60vh;
  min-height: 330px;
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
  @media only screen and (max-width: 730px) {
    transform: translateX(-40%);
left: 40%;
    height: 300px !important;
    width: 15em;
  }
  @media only screen and (max-height: 750px) and (min-width: 730px) {
    height: 50vh !important;
    width: 15em;
  }
  `
const HeroImage = styled.img`
  width: 108%;
  transform: translateY(0.5em);
  filter: drop-shadow(5px 5px 5px rgb(0, 0, 0, .6));
`
const HomeLink = styled.a`
  margin-top: 6.5px;
  width: 100%;
  position: relative;
  text-align: center;
  font-family: Oswald;
  font-weight: 600;
  /* transform: translateX(10px); */
  /* &::before {
    content: 'Fusion';
    color: white;
    position: absolute;
    left: 7%;
    top: -6px;
  }
  &::after {
    content: 'Dish';
    color: white;
    position: absolute;
    right: 17%;
    top: -6px;
  } */
  @media (min-width: 730px ) {
    margin-top: 3px;
  }
  @media (min-height: 730px) {
    > img {
      width: 70%;
    }
  }
  @media (max-height: 750px ) and (min-width: 730px) {
    > img {
      width: 80%;
    }
  }
  @media (min-height: 900px) and (min-width: 830px) {
    margin-block: auto;
  }
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 13em;
  transition: .2s linear;
  height: 100%;
  @media (max-width: 1160px ) {
    gap: 5em;
    font-size: .8em;
  }
`
export default function navbar({menu, setMenuOpen}) {
  return (
    <Nav>
      <button className='menuButton' onClick={() => setMenuOpen(prev => !prev)}><RiMenu2Fill style={{pointerEvents: 'none'}} size={25} color='#2e2e2'/></button>
      <ImageContainer>
        {/* <Header>FusionDish</Header> */}
        {/* <HomeLink href='/'><img src={title} alt="logo" width={35}/></HomeLink> */}
        <HomeLink href='/'><img src={title4} alt="logo" width={'70%'}/></HomeLink>
        <HeroImage src={food1} alt="food"/>
      </ImageContainer>

      <LinksContainer>
        <Links>
          <List>home</List>
          <List>shop</List>
          <List>recipes</List>
          <List>about us</List>
        </Links>

        <Links>
          <Button><FiShoppingCart size={'1.125em'}/></Button>
          <Button><img src={avatar} alt="avatar" /></Button>
        </Links>
      </LinksContainer>
    </Nav>
  )
}
