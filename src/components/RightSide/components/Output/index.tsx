import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../../../store/selectors/vendingSelector";
import {
    addMoney,
    addProductNumber,
} from "../../../../store/slices/vendingSlice";
import styles from "./index.module.scss";

const Output: React.FC = () => {
    const dispatch = useDispatch();
    const { productChoose, products, money } = useSelector(productsData);
    const coins = [10, 5, 2, 1];
    const back: number[] = [];
    let objCoins = {};

    const filteredProduct = products.filter(
        ({ id }: any) => id === productChoose
    );

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
        return (objCoins = back.reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {}));
    };

    getChange(200, 75);

    if (!productChoose) return null;

    return (
        <div className={styles.output}>
            <div className={styles.change}>
                <span></span>
                <span></span>
            </div>
            <div className={styles.product}>
                {filteredProduct.map(({ name, type, price, id }: any) => {
                    return (
                        <div
                            key={id}
                            className={styles.productChoose}
                            onClick={onAcceptProduct}
                        >
                            <h3>{name}</h3>
                            <p>{type}</p>
                            <span>{price}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Output;
