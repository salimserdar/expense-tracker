import React, { useState, useEffect, useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const CurrentButget = () => {
  const totalBudget = 10000;

  const { expenses } = useContext(ExpenseContext);

  const [currBudtget, setCurrBudget] = useState(0);

  useEffect(() => {
    const calcBudget = () => {
      const curentExpense = expenses.reduce(
        (acc, curr) => acc + parseInt(curr.value),
        0
      );
      return totalBudget - curentExpense;
    };
    setCurrBudget(calcBudget());
  }, [expenses]);

  return (<>
    <div className="current-budtget">
        <span>
            Total budget: ${currBudtget}
        </span>
    </div>
  </>);
};

export default CurrentButget;
