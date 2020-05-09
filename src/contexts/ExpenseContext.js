import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    expense: "School & Tusion Fees",
    paidby: "Paid through debit card",
    value: 1000,
  },
  {
    id: uuidv4(),
    expense: "School & Tusion Fees",
    paidby: "Paid through debit card",
    value: 2000,
  },
];

export const ExpenseContext = createContext();

const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState(initialState);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
