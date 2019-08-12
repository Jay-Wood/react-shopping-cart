import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";
// Components
import Product from './Product';


const Products = () => {
	//what's with the {} around products and addItem? Don't we need []?
	const { products, addItem }  = useContext(ProductContext);

	return (
		// <ProductContext.
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
