import { MoneyForm, Output, ProductForm } from "./components";
import styles from "./index.module.scss";

const RightSide = () => {
    return (
        <section className={styles.right}>
            <MoneyForm />
            <ProductForm />
            <Output />
        </section>
    );
};

export default RightSide;
