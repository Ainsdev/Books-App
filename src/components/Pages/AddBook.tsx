import { useState } from "react";
import AddToDataBase from "../../helpers/interfaces";
import str from "../../helpers/usefulFunctions";
import AddBookFirst from "../AddBooks/AddBookFirst";

const AddBook = () => {
    const [data, setdata] = useState<AddToDataBase | object>({
        categorie: '',
        personal: false,
        name: '',
        author: '',
        date: '',
        description: '',
        valoration: 0
    });
    const [step, setStep] = useState<number>(1);
    const continueClick = (e: { preventDefault: () => void; }, categorie: string, personal: boolean) => {
        e.preventDefault()
        setStep(prev => prev + 1)
        setdata({
            categorie: categorie,
            personal: personal
        })
    }
    console.log(data)
    const backClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setStep(prev => prev - 1,)
    }
    console.log(data)
    return (
        <section>
            <h1 className="text-xl">Add More Knowledge:</h1>
            <ul className="steps steps-vertical lg:steps-horizontal mt-5">
                <li className={str(1, step)}></li>
                <li className={str(2, step)}></li>
                <li className={str(3, step)}></li>
            </ul>
            {step == 1 && <AddBookFirst data={continueClick} />}
        </section>
    );
};

export default AddBook;
