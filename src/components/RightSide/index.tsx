import { MoneyForm, Output, ProductForm } from "./components";
import styles from "./index.module.scss";

const RightSide: React.FC = () => {
    return (
        <section className={styles.right}>
            <MoneyForm />
            <ProductForm />
            <Output />
        </section>
    );
};

export default RightSide;
