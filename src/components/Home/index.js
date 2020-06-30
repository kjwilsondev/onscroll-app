import React, { Component } from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends Component {
  constructor(props) {
    super(props);
    AOS.init({
      duration: 1200,
    });
  }
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="title">
        <div className="title-text" data-aos="fade-up">
          <p>DJPROJECT</p>
          {/* <p className="sub-text">TRANSFORM YOUR COMMUNITY</p> */}
        </div>
      </div>
    );
  }
}

export default Home;
