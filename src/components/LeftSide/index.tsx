import React from "react";
import { useAppSelector } from "../../hook";
import { productsData } from "../../store/selectors/vendingSelector";
import { Product } from "../../types/type";
import { ProductItem } from "./components";

import styles from "./index.module.scss";

const LeftSide: React.FC = () => {
    const { products } = useAppSelector(productsData);

    return (
        <section className={styles.left}>
            <ul className={styles.wrapper}>
                {products.map(({ name, type, price, id }: Product) => {
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

export default React.memo(LeftSide);
