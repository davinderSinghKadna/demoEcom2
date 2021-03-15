import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import ProductsListingPage from './pages/ProductsListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import {DataProvider} from './components/DataProvider';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <DataProvider>
          <Route exact path="/rings">
            <ProductsListingPage category={window.location.pathname.replace("/","")}/>
          </Route>
          <Route exact path="/necklace">
            <ProductsListingPage category={window.location.pathname.replace("/","")}/>
          </Route>
          <Route exact path="/earrings">
            <ProductsListingPage category={window.location.pathname.replace("/","")}/>
          </Route>
          <Route exact path="/all-products">
            <ProductsListingPage category={window.location.pathname.replace("/","")}/>
          </Route>
          <Route exact path="/product/:sku" component={ProductDetailsPage} />
          <Route exact path="/cart" component={CartPage}/>
          <Route exact path="/" component={Home}/>
        </DataProvider>
        <Route exact path="*" component={ErrorPage}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
