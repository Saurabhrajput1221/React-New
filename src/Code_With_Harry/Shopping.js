import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
// import { DepositeMoney, WithdrawMoney } from "./States/action-creators";
import { actionCreators } from "./States/index";

const Shopping = () => {
  const amount = useSelector(state => state.amount)
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      {/* <div className="container my-5 mx-2"> */}
      {/* ************ without bindActionCreator********************************************* */}
      {/* <button  className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.DepositeMoney(100))}}>Deposite</button>
    Bank Money
    <button className='btn btn-danger mx-2' onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>Withdraw</button>
      </div> */}
      {/* ************ with bindActionCreator********************************************* */}
      <div>
        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            actions.WithdrawMoney(100);
          }}
        >
          Withdraw
        </button>
        Bank Money :{amount}
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            actions.DepositeMoney(100);
          }}
        >
          Deposite
        </button>
      </div>
    </>
  );
};

export default Shopping;
