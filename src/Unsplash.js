import React, { Component } from 'react'

export class Unsplash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divStyle = {
      color: 'blue',
      //backgroundImage: 'url(' + this.props.currentCityImage + ')',
      background: "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85))," + 'url(' + this.props.currentCityImage + ')',
      backgroundSize: "cover",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -100,
      width: "100%",
      height: "100%"
    };

  return (
    <div style={divStyle}>
    </div>
  );
 }
}
