import { useSelector } from "react-redux";
import { productsData } from "../../store/selectors/vendingSelector";
import { ProductItem } from "./components";

import styles from "./index.module.scss";

const LeftSide: React.FC = () => {
    const { products } = useSelector(productsData);

    return (
        <section className={styles.left}>
            <ul className={styles.wrapper}>
                {products.map(({ name, type, price, id }: any) => {
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
