import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addMoney } from "../../../../store/slices/vendingSlice";
import { productsData } from "../../../../store/selectors/vendingSelector";

const MoneyForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { money: moneyState } = useAppSelector(productsData);
    const ref = useRef<any>();
    const [text, setText] = useState<string>("Insert money");
    const [money, setMoney] = useState<number>(0);

    const banknotes: number[] = [50, 100, 200, 500];

    const onSubmit = (event: any) => {
        event.preventDefault();
        const eventMoney = +event.target[0].value;
        if (banknotes.includes(eventMoney)) {
            setMoney((prev) => prev + eventMoney);
        } else {
            setText("Money is not accepted");
            dispatch(addMoney(0));
        }
    };

    useEffect(() => {
        if (money > 0) {
            dispatch(addMoney(money));
            setText(`Inserted money: ${money}₽`);
        }
    }, [money, dispatch]);

    useEffect(() => {
        if (moneyState === 0) {
            setText("Insert Money");
            ref.current.value = "";
        }
    }, [moneyState]);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">{text}</label>
            <input ref={ref} type="text" name="money" placeholder="..." />
            <p>
                Available banknotes: 50, 100, 200 or 500 ₽. The machine gives
                change in 1, 2, 5 and 10 ₽ coins.
            </p>
        </form>
    );
};

export default MoneyForm;
