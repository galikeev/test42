import { MoneyForm, ProductForm } from "./components";
import styles from "./index.module.scss";

const RightSide = () => {
    return (
        <section className={styles.right}>
            <MoneyForm />
            <ProductForm />
        </section>
    );
};

export default RightSide;
