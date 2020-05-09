import React, { useContext, useState } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
        id: uuidv4(),
        expense: name,
        value
    }
    addExpense(newExpense);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="expense" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="value" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
