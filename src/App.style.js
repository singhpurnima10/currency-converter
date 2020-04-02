import styled from "styled-components";
import bcg from './curr-conv1.jpg';

export const Main = styled.div`
background-image:url(${bcg});
background-repeat: no-repeat;
    height: 100vh;
    background-size: cover;
    background-position: center;
`;

export const MainContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
padding-top:100px;
width: 90%;
`;

export const Currency = styled.input`
width: 150px;
    font-size: 16px;
    margin-right: 15px;
    font-family: Roboto,HelveticaNeue,Arial,sans-serif;
    font-weight: normal !important;
    font-size: 16px !important;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #DFE1E5;
    font-size: 14px !important;
    height: 36px;
    padding: 0 12px 0 12px;
`;

export const Header = styled.div`
margin-bottom:15px;
font-size:64px;
`;

export const SubHeader = styled.div`
font-size:24px;
margin-top:0;
font-weight: bold;
`;

export const InputContainer = styled.div`
margin 20px;
margin-left:0px;
`;

export const OutputContainer = styled.div`
margin 20px;
margin-left:58px;
display: inline-flex;
`;

export const Dropdown = styled.select`
    border: none;
    font-size: 13px;
    list-style: none;
    outline: none;
    overflow: hidden;
    text-align: left;
    text-decoration: none;
    vertical-align: middle;
    width: 120px;
    background-color: #fff;
    color: #202124!important;
    height: 36px;
    padding-left: 8px;
    background-image: none;
`;

export const DropdownWrapper = styled.div`
border-radius: 6px;
    border: 1px solid #DFE1E5;
    overflow: hidden;
    position: relative;
    width: 120px;
`;

export const CurrencyText = styled.h2`
color: white;
display: inline-block;`;
