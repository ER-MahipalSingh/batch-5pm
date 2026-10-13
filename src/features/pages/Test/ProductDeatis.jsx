import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../../../store/productReducer/productSlice";

const ProductDeatis = () => {
  const id = useParams();
  const dispatch = useDispatch();

  const { singleProduct } = useSelector((state) => state.products);
  console.log(singleProduct);

  useEffect(() => {
    dispatch(productDetails(id));
  }, []);
  return (
    <div>
      Title: {singleProduct?.title}
      <img src={singleProduct?.thumbnail} />
     <h2>{singleProduct?.description}</h2>
    </div>
  );
};

export default ProductDeatis;
