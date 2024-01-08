import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Car insurance", amount: 200 },
  ]);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [submittedExpense, setSubmittedExpense] = useState(null);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      id: expenses.length + 1,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    setSubmittedExpense(newExpense);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}

      <form onSubmit={submitHandler}>
        <label>
          Expense Title:
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </label>
        <label>
          Expense Amount:
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </label>
        <label>
          Expense Date:
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </label>
        <button type="submit">Add Expense</button>
      </form>

      {submittedExpense && (
        <div>
          <h2>Submitted Expense:</h2>
          <p>Title: {submittedExpense.title}</p>
          <p>Amount: {submittedExpense.amount}</p>
          <p>Date: {submittedExpense.date.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default ExpenseTracker;
