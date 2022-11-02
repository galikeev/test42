import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { productsData } from "../../../../store/selectors/vendingSelector";
import { addProductNumber } from "../../../../store/slices/vendingSlice";
import { FormFields } from "../../../../types/type";

interface ProductItemProps {
    id: number;
    price: number;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

const ProductForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLFormElement>(null);
    const { money, products, productChoose } = useAppSelector(productsData);

    const [product, setProduct] = useState<number>(0);
    const [text, setText] = useState<string>("/");
    const [disabledInput, setDisabledInput] = useState<boolean>(!money);

    const isEnoughMoney = products.some(
        ({ price, id }: ProductItemProps) => price <= money && id === product
    );

    const onSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
        event
    ) => {
        event.preventDefault();
        const eventProduct = +event.currentTarget.product.value;
        if (numbers.includes(eventProduct)) {
            setProduct(eventProduct);
        } else {
            setText("Enter corected number");
        }
    };

    useEffect(() => {
        if (money) {
            setText("Choose product");
            setDisabledInput(false);
        }
    }, [money]);

    useEffect(() => {
        if (product > 0 && isEnoughMoney) {
            dispatch(addProductNumber(product));
            setText("Success");
            ref.current?.reset();
            setDisabledInput(true);
        }
        if (product > 0 && !isEnoughMoney) {
            setText("No enough money");
            ref.current?.reset();
        }
    }, [product, isEnoughMoney, dispatch]);

    useEffect(() => {
        if (productChoose === 0) {
            setText("/");
            setProduct(0);
        }
    }, [productChoose]);

    return (
        <form ref={ref} onSubmit={onSubmit}>
            <label htmlFor="">{text}</label>
            <input
                type="text"
                name="product"
                placeholder="..."
                disabled={disabledInput}
            />
        </form>
    );
};

export default ProductForm;
