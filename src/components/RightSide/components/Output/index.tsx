import { useSelector } from "react-redux";
import { productsData } from "../../../../store/selectors/vendingSelector";
import styles from "./index.module.scss";

const Output = () => {
    const { productChoose, products } = useSelector(productsData);

    if (!productChoose) return null;

    const filteredProduct = products.filter(({ id }) => id === productChoose);

    return (
        <div className={styles.output}>
            <div className={styles.change}>1</div>
            <div className={styles.product}>
                {filteredProduct.map(({ name, type, price }) => {
                    return (
                        <div className={styles.productChoose}>
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