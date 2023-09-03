import React from "react";
import styles from "./WithDraw.module.css";
import { useDispatch, useSelector } from "react-redux";
import { withdrawFive, withdrawTen } from "./withdrawSlice";

const Withdraw = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.withDraw.amount);

  return (
    <>
      <div className={styles.container}>
        <img
          src="https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="This is an image"
          className={styles.pic}
        />
        <h1>Hello Jenny</h1>
        <div className={styles.amount}>
          <div>$ {totalAmount}</div>
          <sub>Total Amount</sub>
        </div>
        <div className={styles.btnGroup}>
          <button onClick={() => dispatch(withdrawTen())}>
            WITHDRAW $ 10,000
          </button>
          <button onClick={() => dispatch(withdrawFive())}>
            WITHDRAW $ 5000
          </button>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
