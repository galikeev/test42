import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../../../store/selectors/vendingSelector";
import { addProductNumber } from "../../../../store/slices/vendingSlice";

const ProductForm: React.FC = () => {
    const dispatch = useDispatch();
    const ref = useRef<any>();
    const { money, products } = useSelector(productsData);

    const [product, setProduct] = useState<number>(0);
    const [text, setText] = useState<string>("/");
    const [disabledInput, setDisabledInput] = useState<boolean>(!money);

    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

    const isEnoughMoney = products.some(
        ({ price, id }: any) => price <= money && id === product
    );

    const onSubmit = (event: any) => {
        event.preventDefault();
        const eventProduct = +event.target[0].value;
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
            ref.current.value = "";
            setDisabledInput(true);
        }
        if (product > 0 && !isEnoughMoney) {
            setText("No enough money");
        }
    }, [product, isEnoughMoney]);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">{text}</label>
            <input
                ref={ref}
                type="text"
                name="product"
                placeholder="..."
                disabled={disabledInput}
            />
        </form>
    );
};

export default ProductForm;
