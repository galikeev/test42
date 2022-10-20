import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMoney } from "../../../../store/slices/vendingSlice";

const MoneyForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("Insert money");

    const banknotes = [50, 100, 200, 500];

    const onSubmit = (event: any) => {
        event.preventDefault();
        const eventMoney = event.target[0].value;
        if (banknotes.includes(+eventMoney)) {
            dispatch(addMoney(eventMoney));
            setText(`Inserted money: ${eventMoney}`);
        } else {
            setText("Money is not accepted");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">{text}</label>
            <input type="text" name="money" placeholder="..." />
            <p>
                Available banknotes: 50, 100, 200 or 500 ₽. The machine gives
                change in 1, 2, 5 and 10 ₽ coins.
            </p>
        </form>
    );
};

export default MoneyForm;
