import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  max-width: 1280px;
`;

const DateSpan = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
`;

const TempSpan = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: right;
    margin-right: 25px;
    flex: 1;
`;

function MyFunction() {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-'
    + (tempDate.getMonth() + 1) + '-'
    + tempDate.getDate() + ' '
    + tempDate.getHours() + ':'
    + tempDate.getMinutes() + ':'
    + tempDate.getSeconds();

  const currDate = date;
  return (
    <p>{currDate}</p>
  );
}

const Header = () => {
  return (
    <div className="header">
      {/* <span className="date">SMARCH 32, 2018</span> */}  {/* <--------- this was bugging me so i wrote a function to get the current date and time and time :D */}
      <span className="date">
        <MyFunction />
      </span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}

export default Header