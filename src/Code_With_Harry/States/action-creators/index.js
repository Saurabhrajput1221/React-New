export const DepositeMoney = (amount) => {
  return  ({
    type: "deposit",
    payload: amount,
  });
};

export const WithdrawMoney = (amount) => {
  return  ({
    type: "withdraw",
    payload: amount,
  });
};
