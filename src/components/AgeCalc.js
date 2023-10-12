import { Component } from "react";

class AgeCalc extends Component {
  constructor(props) {
    super(props);
    this.state = { age: "   ", birth_year: 0, current_year: new Date().getFullYear() };
  }
  render() {
    return (
      <div>
        <center
          style={{
            marginTop: "50px",
          }}
        >
          <h1>Age Calculator</h1>
          <h4
            style={{
              margin: "0px",
            }}
          >
            Enter your date of birth
          </h4>
          <input
            type="date"
            name="dob"
            id="dob"
            onInput={(event) => {
              this.setState({
                birth_year: Number(event.target.value.split("-")[0]),
              });
            }}
            style={{
              margin: "10px",
              width: "250px",
              padding: "10px",
            }}
          />
          <button
            onClick={() => {
              this.setState({
                age: this.state.current_year - this.state.birth_year,
              });
            }}
            style={{
              display: "block",
              color: "white",
              backgroundColor: "#027BFC",
              border: "0px",
              borderRadius: "3px",
              padding: "7px",
              margin: "10px",
            }}
          >
            Calculte Age
          </button>
          <h3
            style={{
              whiteSpace: "pre",
            }}
          >
            You are {this.state.age} years old
          </h3>
        </center>
      </div>
    );
  }
}

export default AgeCalc;
