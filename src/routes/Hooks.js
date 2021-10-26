import { useState } from "react";
import "./Hooks.css";
import Tabs from "./Tabs";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const Hooks = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    const maxLen = (value) => value.length < 10;

    const name = useInput("Mr. ", maxLen);
    return (
        <section className="container">
            <div className="Hooks">
                <h1>Hello CodeSandbox {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick={incrementItem}>increment</button>
                <button onClick={decrementItem}>decrement</button>
                <h1>hello</h1>
                <input placeholder="Name" {...name} />
                <Tabs />
            </div>
        </section>
    );
};

export default Hooks;
