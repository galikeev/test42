import { useAppDispatch, useAppSelector } from "../../../../hook";
import { productsData } from "../../../../store/selectors/vendingSelector";
import {
    addMoney,
    addProductNumber,
} from "../../../../store/slices/vendingSlice";

import styles from "./index.module.scss";

type IDs = {
    id: number;
};

type objOptions = {
    [key: string]: number;
};

const Output: React.FC = () => {
    const dispatch = useAppDispatch();
    const { productChoose, products, money } = useAppSelector(productsData);
    const coins = [10, 5, 2, 1];
    const back: number[] = [];
    let objCoins: objOptions = {};

    if (!productChoose) return null;

    const [touchProduct] = products.filter(
        ({ id }: IDs) => id === productChoose
    );

    const { id, name, type, price } = touchProduct;

    const onAcceptProduct = () => {
        dispatch(addMoney(0));
        dispatch(addProductNumber(0));
    };

    const getChange = (money: number, price: number = 0) => {
        let change = money - price;
        let coin = coins.filter((c) => c <= change)[0];
        back.push(coin);
        change -= coin;
        if (change) {
            getChange(change);
        }
        return (objCoins = back.reduce<Record<string, number>>((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {}));
    };

    getChange(money, price);

    console.log(objCoins);

    return (
        <div className={styles.output}>
            <div className={styles.change}>
                <span></span>
                <span></span>
            </div>
            <div className={styles.product}>
                <div
                    key={id}
                    className={styles.productChoose}
                    onClick={onAcceptProduct}
                >
                    <h3>{name}</h3>
                    <p>{type}</p>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};

export default Output;
