import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import { DataContext } from '../components/DataProvider';
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { sku } = useParams();
    const { products } = useContext(DataContext);

    const product = products.find((product) => {
        return product.sku  === parseInt(sku);
    });

    console.log("products = ",products);
    console.log("product outside = ",product.id);
    console.log("product outside = ",product.sku);
    console.log("product outside = ",product.name);
    console.log("product outside = ",product.price);
    console.log("product outside = ",product.description);
    console.log("product outside = ",product.category);
    console.log("product outside = ",product.url);

    if (!product) {
    return  <ReactBootStrap.Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </ReactBootStrap.Spinner>
    }

    return(<div>
            <h5>ProductDetailsPage of =  </h5>

        </div>
    )
};
export default ProductDetailsPage;