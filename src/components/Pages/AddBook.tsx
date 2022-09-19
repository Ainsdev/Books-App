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
    //steps
    const [step, setStep] = useState<number>(1);

    //Save data and go to step 2
    const continueClickFirst = (e: { preventDefault: () => void; }, categorie: string, personal: boolean) => {
        e.preventDefault()
        setStep(prev => prev + 1)
        setdata({
            ...data,
            categorie: categorie,
            personal: personal,
        })
    }
    //Save data and go to step 3
    const continueClickSecond = (e: { preventDefault: () => void; }, title: string, author: string, autoSearch: boolean) => {
        e.preventDefault()
        setStep(prev => prev + 1)
        if (autoSearch) {
            console.log("Searching Data")
            //Here the function to search with google books api, passing the setData and data to put all the information of a book
        } else {
            setdata({
                ...data,
                name: title,
                author: author,
            })
        }
    }
    //Ultimate
    const continueClickThird = (e: { preventDefault: () => void; }, link: Array<string>, rating: number, readed: boolean) => {
        e.preventDefault()
        if (readed) {
            setdata({
                ...data,
                links: link,
                valoration: rating,
            })
        } else {
            setdata({
                ...data,
                links: link
            })
        }
    }
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
            {step == 2 && <AddBookSecond func={continueClickSecond} funcBack={backClick} data={data.categorie} />}
            {step == 3 && <AddBookThird func={continueClickThird} funcBack={backClick} data={data.categorie} />}
        </section>
    );
};

export default AddBook;
