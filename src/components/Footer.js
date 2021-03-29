/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Top from "../assets/img/top_icon.png";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} Elon's Kitchen ВСЕ ПРАВА ЗАЩИЩЕНЫ
        </div>
        <div id="back-top">
        <a title="Go to top" href="#">
        <img src={Top} alt="" style={{height:"40px", width: "40px"}}/>
        </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
