import classNames from "classnames";
import React from "react";
import { useAppSelector } from "../../../../hook";
import { productsData } from "../../../../store/selectors/vendingSelector";
import { Product } from "../../../../types/type";

import styles from "./index.module.scss";

const ProductItem: React.FC<Product> = ({ name, type, price, id }) => {
    const { money } = useAppSelector(productsData);

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

export default React.memo(ProductItem);
