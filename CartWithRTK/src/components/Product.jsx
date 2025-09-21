import { addItem, clearItem, removeItem } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./../Redux/productSlice";

export const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => {
          return (
            <div className="card">
              <img src={item.thumbnail} alt="" />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="title">{item.brand}</div>
                <div className="title">{item.price}</div>
                <div className="title">{item.rating}</div>
                <button
                  onClick={() => dispatch(addItem(1))}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeItem(1))}
                  className="btn-danger"
                >
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}
      {/* 

     
      <button onClick={() => dispatch(clearItem())} className="btn-danger">
        Clear
      </button> */}
    </div>
  );
};
