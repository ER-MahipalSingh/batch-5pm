import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../../store/productReducer/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { getAllProducts } = useSelector((state) => state.products);
  console.log(getAllProducts);

  useEffect(() => {
    dispatch(allProducts());
  }, []);
  return (
    <>
      <div>Products</div>
      <div>
        {getAllProducts?.products?.map((item) => (
          <div key={item.id}>
            <h1>Name: {item.title}</h1>
            <img src={item.thumbnail} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
