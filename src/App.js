import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "./logo.svg";
import "./App.css";
import { getDataAsync } from "./redux/action";
import { render } from "react-dom";
import * as _ from "lodash";
// import  from "./data"
import { CurrencyKeyData } from "./data";

import {
  Main,
  Currency,
  MainContainer,
  InputContainer,
  OutputContainer,
  Header,
  Dropdown,
  DropdownWrapper,
  CurrencyText,
  SubHeader
} from "./App.style";

class App extends React.Component {
  state = {
    inputValue: 1,
    outputValue: 1.5601,
    numericValue: 1.5601,
    currencyText: "Canadian Dollar"
  };
  componentDidMount(props) {
    this.props.getCurrencyData();
  }
  handleChange = e => {
    this.setState({
      outputValue: this.state.inputValue * e.target.value,
      numericValue: e.target.value,
      currencyText: e.target.options[e.target.selectedIndex].text
    });
  };
  handleUserInput = e => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ inputValue: e.target.value }, () => {
        this.setState({
          outputValue: this.state.inputValue * this.state.numericValue
        });
      });
    }
  };

  render() {
    const { currencyData } = this.props;
    const d = currencyData.date && new Date(currencyData.date.toString());
    const dtf = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
    const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
      d
    );
    return (
      <Main>
        <MainContainer>
          <Header>Currency converter Application</Header>
          <SubHeader>
            Rates as per date {da} {mo} {ye}{" "}
          </SubHeader>
          <CurrencyText>
            1 Euro equals {this.state.numericValue} {this.state.currencyText}
          </CurrencyText>
          <InputContainer>
            <Currency
              type="text"
              value={this.state.inputValue}
              onChange={this.handleUserInput}
            />{" "}
            <CurrencyText>EURO</CurrencyText>{" "}
          </InputContainer>

          <OutputContainer>
            <Currency type="text" value={this.state.outputValue} />
            <DropdownWrapper>
              <Dropdown onChange={event => this.handleChange(event)}>
                {_.map(currencyData.rates, (data, key) => (
                  <option value={data}>{CurrencyKeyData[key]}</option>
                ))}
              </Dropdown>
            </DropdownWrapper>
          </OutputContainer>
        </MainContainer>
      </Main>
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
