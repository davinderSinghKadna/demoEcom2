import React, {createContext, useEffect, useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listProductss as ListProductss } from '../graphql/queries'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await API.graphql(graphqlOperation(ListProductss,{
                filter :{
                    category: {
                        eq: window.location.pathname.replace("/","")
                    }
                }
            }))
            const products = data.listProductss.items;
            console.log('data:', data)
            setProducts(products);
            setLoading(false);
        } catch (err) {
            console.log('error fetching products...', err);
        }
        };
    
        return (
        <DataContext.Provider value={{ products, loading }}>
            {children}
        </DataContext.Provider>
        );
};
export { DataContext, DataProvider };
