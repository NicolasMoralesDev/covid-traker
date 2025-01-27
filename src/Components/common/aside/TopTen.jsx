import styled from "styled-components"

const TopCountry = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 320px;
height: 30px;
padding: 20px;
margin-bottom: 10px;
background-color: #ffffff;
color: #1a1662;
border: #f7f8fc solid 3px;
border-radius: 5px;
`;


const TopTen = (props) => {
  return (
    <TopCountry>
      <img src={props.flag} alt={props.country} width={50}></img>
      <h3>{props.country}</h3>
      <h3>{props.value}</h3>
    </TopCountry>
  )
}

export default TopTen