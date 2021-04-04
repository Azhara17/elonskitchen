import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardGroup, CardBody} from 'reactstrap';
import Product1 from "../assets/img/product1.jpg";
import Product2 from "../assets/img/product2.jpg";
import Product3 from "../assets/img/product3.jpg";

const Product = (props) => {
  return (
    <div>
    <div className="product-header">
    <h3>OUR MENU</h3>
</div>
    <CardGroup className="product-section">
      <Card className="product-card">
        <CardImg  className="product-img" src={Product1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg className="product-img" src={Product2} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>

        </CardBody>
      </Card>
      <Card className="product-card">
        <CardImg   className="product-img" src={Product3} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText> This card has even longer content than the first to show that equal height action.</CardText>

        </CardBody>
      </Card>  
    </CardGroup>
    </div>
  );
};

export default Product;