"use client"
import React from 'react'
import { useState } from "react";
import Datepicker from 'react-tailwindcss-datepicker';

const InputForm = () => {
    const [stockAllocations, setStockAllocations] = useState({});
    const [currSymbol, setCurrSymbol] = useState("");
    const [currPercentage, setCurrPercentage] = useState("");
    const [initialBalance, setInitialBalance] = useState(0);
    const [selectedDate, setSelectedDate] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleSymbolChange = (event) => {
        setCurrSymbol(event.target.value);
    }
    const handlePercentageChange = (event) => {
        setCurrPercentage(event.target.value);
    }

    const handleBalanceChange = (event) => {
        setInitialBalance(event.target.value);
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    const addStock = () => {
        setStockAllocations(prevData => ({
            ...prevData,
            [currSymbol]: currPercentage
        }));
        setCurrSymbol("");
        setCurrPercentage("");
    }

    return(
        <form className = "flex flex-col bg-offWhite shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-1/2" onSubmit={handleSubmit}>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Symbol" type = "text" name = "symbol" value = {currSymbol} onChange={handleSymbolChange}/>
            </label>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Percentage" type = "text" name = "symbol" value = {currPercentage} onChange={handlePercentageChange}/>
            </label>
            <div className ="flex justify-end w-1/2"><button className = "block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-auto" type = "button" onClick = {addStock}>Add Stock To Portfolio</button></div>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Initial Balance" type = "text" name = "initialBalance" value = {initialBalance} onChange={handleBalanceChange}/>
            </label>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Start Date" type = "text" name = "date" value = {selectedDate} onChange={handleDateChange}/>
            </label>
            <div className ="flex justify-end w-1/2"><button className = "block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-auto" type = "submit">Submit</button></div>
        </form>

        //Add Output to the right of form to display current stock allocations.
    );
};

export default InputForm;