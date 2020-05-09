import React from "react";
import ExpenseContextProvider from "./contexts/ExpenseContext";
import CurrentButget from "./components/CurrentButget";
import ExpensesComp from "./components/ExpensesComp";
import AddExpense from "./components/AddExpense";

const app = () => {
  return (
    <ExpenseContextProvider>
      <CurrentButget/>
      <AddExpense/>
      <ExpensesComp/>
    </ExpenseContextProvider>
  );
};

export default app;
