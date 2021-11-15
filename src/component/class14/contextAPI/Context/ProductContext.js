// Context
// 1. create the Context
// 2. provide a context value
// 3. consume the context value
import React from 'react';

const ProductContext = React.createContext();
const ProductProvider = ProductContext.Provider;
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
export default ProductContext;