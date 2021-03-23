/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} Elon's Kitchen ВСЕ ПРАВА ЗАЩИЩЕНЫ
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
