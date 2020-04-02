import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "./logo.svg";
import "./App.css";
import { getDataAsync } from "./redux/action";
import { render } from "react-dom";
import * as _ from "lodash";
import {
  Currency,
  MainContainer,
  InputContainer,
  OutputContainer,
  Header,
  Dropdown,
  DropdownWrapper,
  CurrencyText
} from "./App.style";

class App extends React.Component {
  state={
    inputValue: 1,
    outputValue: 1.5601,
    numericValue: 1.5601
  }
  componentDidMount(props) {
    this.props.getCurrencyData();
  }
  handleChange=(e)=>{
    this.setState({outputValue: this.state.inputValue * e.target.value, numericValue: e.target.value});
  }
  handleUserInput=(e)=> {
    this.setState({inputValue : e.target.value},() => {
      this.setState({outputValue: this.state.inputValue * this.state.numericValue})
    });
  }
  render() {
    const { currencyData } = this.props;
    

    return (
      <MainContainer>
        <Header>Currency converter rates as per date {currencyData.date} </Header>
           <InputContainer><Currency type='tel' value={this.state.inputValue} onChange={this.handleUserInput} /> <CurrencyText>EUR</CurrencyText> </InputContainer>
           
           <OutputContainer>
           <Currency type='tel' value={this.state.outputValue} />
           <DropdownWrapper>
           <Dropdown onChange={(event)=>this.handleChange(event)}>
           {_.map(currencyData.rates,(data, key) => 
             <option value={data}>{key}</option>
           )}
           </Dropdown>
           </DropdownWrapper>
           
           
           </OutputContainer>
           
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencyData: state && state.currency
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCurrencyData: value => dispatch(getDataAsync(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
