import React, { useContext, useEffect } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const ExpensesComp = () => {
  const { expenses } = useContext(ExpenseContext);

  useEffect(() => {
    console.log("dsd", expenses);
  });

  return (
    <div>
      <ul>
        {expenses.map((expenseItem) => {
          return <li key={expenseItem.id}><span>{expenseItem.expense}</span><span>${expenseItem.value}</span></li>;
        })}
      </ul>
    </div>
  );
};

export default ExpensesComp;
