import styled from "styled-components";



export const NavbarContainer = styled.nav`
display: flex;
justify-content:space-between;
align-items: center;
background-color: white;
width:100%;
height:11%;
position:absolute;
z-index: 999;
position: fixed;
left: 0;
right: 0;
top: 0;
`;

export const LogoContainer = styled.section`
display:flex;
align-items: center;
margin-left:7%;

`;

export const NavLists = styled.ul`
list-style: none;
display: flex;
justify-content:center;
align-items:center;
margin: 0;
padding: 0;
margin-right:9%;
gap:15px;


@media(max-width: 768px){
width: 100%;
height: 60vh;
position: absolute;
top:60px;
left: 0;
flex-direction: column;
align-items:center;
transition:0.5s all ease-in;
background-color:#3939AE; 
margin:0;
    }
`;

export const NavItem = styled.li`
display:flex;
justify-content:center;
margin: 0 10px;

@media(max-width: 768px){
width: 100%;
height: 7%;
margin:0;
}
`;

export const NavList = styled.a`
color: #515184;
text-decoration: none;
font-size: 15px;

@media(max-width: 768px){
color:white;

}
`;

export const Button = styled.button`
width:150px;
height:43px;
color:white;
background-color:#3939AE;
border-radius:20px;
border:solid;
font-size:15px;
`;
