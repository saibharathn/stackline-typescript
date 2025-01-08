import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/Store';
import { setProducts } from './store/dataSlice';
import data from './stackline_frontend_assessment_data_2021.json';
import Table from './components/Table';
import Graph from './components/Graph';
import ProductDetails from './components/ProductDetails';
import '../src/styles/App.css';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.data.products[0]); // Get the first product

    useEffect(() => {
        dispatch(setProducts(data));
    }, [dispatch]);

    return (
        <div>
           
            <div className="main-container" >
            {/* Left Panel */}
                <div className="left-panel">
                    {product && (
                        <ProductDetails
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            subtitle={product.subtitle}
                            brand={product.brand}
                            tags={["Pantry", "Obsolete", "Blender", "Lightning Deal"]}
                        />
                    )}
                </div>

                {/* Right Panel */}
                <div className="right-panel">
                    <Graph />
                    <Table salesData={product?.sales || []} />
                </div>
            </div>
        </div>
    );
};

export default App;
