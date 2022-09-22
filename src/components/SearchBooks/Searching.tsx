import axios from "axios";
import { useState } from "react";
import { checkSearching } from "../../helpers/usefulFunctions";
import PageSearch from "./PageSearch";

const SearchingBook = () => {
    const [searching, setSearching] = useState<[boolean, string]>([false, '']);
    function handleSearch(event: any) {

    }
    return (
        <section className="flex relative flex-col justify-center items-center gap-3 w-screen overflow-hidden">
            <div className="form-control flex ">
                <div className="input-group">
                    <input onChange={(e) => setSearching(prev => [false, e.target.value])} type="text" placeholder="Search a book..." className="input input-accent sm:w-96" />
                    <button onClick={() => setSearching((prev) => [true, searching[1]])} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className={checkSearching(searching[0])}>
                <div className="h-96 carousel carousel-vertical w-full px-24">
                    <PageSearch></PageSearch>
                    <PageSearch></PageSearch>
                    <PageSearch></PageSearch>
                    <PageSearch></PageSearch>
                </div>
            </div>
        </section>
    )
}

export default SearchingBook