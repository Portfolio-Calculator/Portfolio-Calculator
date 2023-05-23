"use client"
import React from 'react'
import { useState } from "react";
import Datepicker from 'react-tailwindcss-datepicker';

const InputForm = () => {
    const [symbols, setSymbols] = useState([]);
    const [currSymbol, setCurrSymbol] = useState("");
    const [initialBalance, setInitialBalance] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleSymbolChange = (event) => {
        setCurrSymbol(event.target.value);
    }

    const handleBalanceChange = (event) => {
        setInitialBalance(event.target.value);
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    const addStock = () => {
        setSymbols((symbols) => [...symbols, currSymbol])
        setCurrSymbol("");
    }

    return(
        <form className = "flex flex-col bg-offWhite shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-1/2" onSubmit={handleSubmit}>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Symbol" type = "text" name = "symbol" value = {currSymbol} onChange={handleSymbolChange}/>
            </label>
            <div className ="flex justify-end w-1/2"><button className = "block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-auto" type = "button" onClick = {addStock}>Add Stock To Portfolio</button></div>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Initial Balance" type = "text" name = "symbol" value = {initialBalance} onChange={handleBalanceChange}/>
            </label>
            <label className = "w-1/2">
                <input className ="block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-full" placeholder = "Start Date" type = "text" name = "symbol" value = {selectedDate} onChange={handleDateChange}/>
            </label>
            <div className ="flex justify-end w-1/2"><button className = "block bg-offWhite border-grey rounded border-2 text-gray-700 text-sm font-bold mb-2 w-auto" type = "submit">Submit</button></div>
        </form>
    );
};

export default InputForm;