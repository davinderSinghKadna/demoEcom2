import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../components/DataProvider';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom'

function ProductsListingPage(props) {
    const { products } = useContext(DataContext);
    if (!products.length) {
        return  <ReactBootStrap.Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </ReactBootStrap.Spinner>
    }
return(<div>
        <h5>Category name = {props.category} </h5>
        <ReactBootStrap.CardColumns>
            {products.map(({ id,sku,name,price,category,description }) => (
                
                <ReactBootStrap.Card key={id}>
                    <ReactBootStrap.Card.Img variant="top" src="" />
                    <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>{name}</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Subtitle className="mb-2 text-muted">Item ID : {sku}</ReactBootStrap.Card.Subtitle>
                    <ReactBootStrap.Card.Text>{description}</ReactBootStrap.Card.Text>
                    <ReactBootStrap.Button variant="success">Add To Cart</ReactBootStrap.Button>
                    <Link to={`/product/${sku}`} className="view-product-details link">View Details</Link>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                
            ))}
        </ReactBootStrap.CardColumns>
    </div>
)
}
export default ProductsListingPage;