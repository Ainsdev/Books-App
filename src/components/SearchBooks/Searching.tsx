import axios from "axios";
import { useState } from "react";
import { checkSearching } from "../../helpers/usefulFunctions";
import Card from "./Card";
import PageSearch from "./PageSearch";

const SearchingBook = () => {
    const [searching, setSearching] = useState<[boolean, string]>([false, '']);
    const [data, setData] = useState<Array<any> | null>(null);
    const apiKey = 'AIzaSyBW6XdvTAhBeV7HjxBedAMttoguo-d6WBk'
    const fetchData = async (title: string) => {
        let finalTitle = title.toLowerCase().split(" ").join("%20");
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${apiKey}&maxResults=24`;
        await axios.get(apiUrl).then((res) => {
            setData(res.data.items)
        })
            .catch((err) => { console.log(err) })
            .finally(() => { setSearching(prev => [true, '']) })
    }
    const handleSearching = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        searching[1] !== '' ? fetchData(searching[1]) : console.log('no searching')
    }
    return (
        <section className="flex relative flex-col justify-center items-center gap-3 w-screen overflow-hidden">
            <div className="form-control flex ">
                <div className="input-group">
                    <input value={searching[1]} onChange={(e) => setSearching(prev => [false, e.target.value])} type="text" placeholder="Search a title..." className="input input-accent sm:w-96" />
                    <button onClick={(e) => handleSearching(e)} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className={checkSearching(searching[0])}>
                <div className="h-96 carousel carousel-vertical w-screen ">
                    <div className="carousel-item h-max w-full flex flex-col lg:flex-row flex-wrap justify-center items-center">
                        {
                            data !== null ? data.map((item: any) => {
                                return <Card
                                    key={item.id}
                                    type={"book"}
                                    categorie={'item.volumeInfo.categories[0]'}
                                    name={item.volumeInfo.title}
                                    author={item.volumeInfo.authors}
                                    thumbnail={'https://img1.od-cdn.com/ImageType-100/5835-1/%7B1826793D-98B7-4CB3-B503-6F32034047AA%7DImg100.jpg'}
                                    date={item.volumeInfo.publishedDate}
                                    description={item.volumeInfo.description}
                                    valoration={item.volumeInfo.averageRating}
                                    pages={item.volumeInfo.pageCount}
                                />
                            }) : <h1 className="text-2xl text-center">No results</h1>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchingBook