import { useState } from "react";
import AddToDataBase from "../../helpers/interfaces";
import { str } from "../../helpers/usefulFunctions";
import AddBookFirst from "../AddBooks/AddBookFirst";
import AddBookSecond from "../AddBooks/AddBookSecond";
import AddBookThird from "../AddBooks/AddBookThird";

const AddBook = () => {
    const [data, setdata] = useState<AddToDataBase>({
        categorie: '',
        personal: false,
        name: '',
        author: '',
        date: '',
        description: '',
        valoration: 0,
        links: ['']
    });
    const [step, setStep] = useState<number>(1);
    //Save data and go to next step
    const continueClickFirst = (e: { preventDefault: () => void; }, categorie: string, personal: boolean) => {
        e.preventDefault()
        setStep(prev => prev + 1)
        setdata({
            categorie: categorie,
            personal: personal,
            name: '',
            author: '',
            date: '',
            description: '',
            valoration: 0,
            links: ['']
        })
    }
    console.log(data)
    //To go to Back step
    const backClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setStep(prev => prev - 1,)
    }
    return (
        <section>
            <h1 className="text-xl">Add More Knowledge:</h1>
            <ul className="steps lg:steps-horizontal mt-5">
                <li className={str(1, step)}></li>
                <li className={str(2, step)}></li>
                <li className={str(3, step)}></li>
            </ul>
            {step == 1 && <AddBookFirst data={continueClickFirst} />}
            {step == 2 && <AddBookSecond func={continueClickFirst} funcBack={backClick} data={data} />}
            {step == 3 && <AddBookThird data={continueClickFirst} />}
        </section>
    );
};

export default AddBook;
