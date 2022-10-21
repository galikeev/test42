import { useSelector } from "react-redux";
import classNames from "classnames";
import { productsData } from "../../../../store/selectors/vendingSelector";

import styles from "./index.module.scss";

interface ProductItemProps {
    id: number;
    name: string;
    type: string;
    price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, type, price, id }) => {
    const { money } = useSelector(productsData);

    return (
        <li
            className={classNames(styles.item, {
                [styles.active]: money >= price,
            })}
        >
            <h3>{name}</h3>
            <p>{type}</p>
            <div className={styles.price}>
                <span>{price}₽</span>
                <span className={styles.id}>{id}</span>
            </div>
        </li>
    );
};

export default ProductItem;
