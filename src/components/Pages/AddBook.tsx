import { useState } from "react";
import AddToDataBase from "../../helpers/interfaces";
import { str } from "../../helpers/usefulFunctions";
import AddBookFirst from "../AddBooks/AddBookFirst";
import AddBookSecond from "../AddBooks/AddBookSecond";
import AddBookThird from "../AddBooks/AddBookThird";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddBook = () => {
    const [data, setdata] = useState<AddToDataBase>({
        type: 'book',
        categorie: '',
        personal: false,
        name: '',
        author: '',
        image: '',
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
    //Save data and go to step 3 & api call

    const continueClickSecond = (e: { preventDefault: () => void; }, title: string, author: string, autoSearch: boolean) => {
        e.preventDefault()
        let finalAuthor = author.toLowerCase().split(" ").join("%20");
        let finalTitle = title.toLowerCase().split(" ").join("%20");
        const apiKey = 'AIzaSyBW6XdvTAhBeV7HjxBedAMttoguo-d6WBk';
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${finalTitle}+inauthor:${finalAuthor}&key=${apiKey}&maxrespults=3`;
        async function fetchData() {
            await axios.get(apiUrl).then((res) => {
                setdata({
                    ...data,
                    categorie: res.data.items[0].volumeInfo.categories[0],
                    name: res.data.items[0].volumeInfo.title,
                    author: res.data.items[0].volumeInfo.authors[0],
                    image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
                    date: res.data.items[0].volumeInfo.publishedDate,
                    description: res.data.items[0].volumeInfo.description,
                    valoration: res.data.items[0].volumeInfo.averageRating,
                    links: ['']

                })
                console.log(data)
            }).catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'We didnt find any book with that title and author',
                    footer: 'Try again with other'
                })
            })
        }
        if (autoSearch == true) {
            console.log("Searching Data")
            fetchData()
            setStep(prev => prev + 1)
        } else {
            console.log("Not Searching Data")
            setdata({
                ...data,
                name: title,
                author: author,
            })
            setStep(prev => prev + 1)
        }
    }
    //Ultimate sending data
    const continueClickThird = (e: { preventDefault: () => void; }, link: Array<string>, rating: number, readed: boolean) => {
        e.preventDefault()
        if (readed) {
            setdata({
                ...data,
                links: link,
                valoration: rating,
            })
            console.log(data)
        } else {
            setdata({
                ...data,
                links: link
            })
            console.log(data)
        }
    }
    //To go to Back step
    const backClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setStep(prev => prev - 1,)
    }
    return (
        <section className="pb-20">
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
