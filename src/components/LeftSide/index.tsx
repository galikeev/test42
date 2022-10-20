import classNames from "classnames";
import { useSelector } from "react-redux";
import { productsData } from "../../store/selectors/vendingSelector";

import styles from "./index.module.scss";

const ProductItem = ({ name, type, price, id }) => {
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

const LeftSide = () => {
    const { products } = useSelector(productsData);

    console.log(products);

    return (
        <section className={styles.left}>
            <ul className={styles.wrapper}>
                {products.map(({ name, type, price, id }) => {
                    return (
                        <ProductItem
                            key={id}
                            name={name}
                            type={type}
                            price={price}
                            id={id}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default LeftSide;
