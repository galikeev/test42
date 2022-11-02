import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addMoney } from "../../../../store/slices/vendingSlice";
import { productsData } from "../../../../store/selectors/vendingSelector";
import { FormFields } from "../../../../types/type";

const banknotes: number[] = [50, 100, 200, 500];

const MoneyForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { money: moneyState, productChoose } = useAppSelector(productsData);
    const ref = useRef<HTMLFormElement>(null);
    const [text, setText] = useState<string>("Insert money");
    const [money, setMoney] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);

    const onSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
        event
    ) => {
        event.preventDefault();
        const eventMoney = +event.currentTarget.money.value;
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
            setMoney(0);
            setDisabled(false);
            ref.current?.reset();
        }
    }, [moneyState]);

    useEffect(() => {
        if (productChoose !== 0) {
            setDisabled(true);
        }
    }, [productChoose]);

    return (
        <form ref={ref} onSubmit={onSubmit}>
            <label htmlFor="">{text}</label>
            <input
                type="text"
                name="money"
                placeholder="..."
                disabled={disabled}
            />
            <p>
                Available banknotes: 50, 100, 200 or 500 ₽. The machine gives
                change in 1, 2, 5 and 10 ₽ coins.
            </p>
        </form>
    );
};

export default MoneyForm;
