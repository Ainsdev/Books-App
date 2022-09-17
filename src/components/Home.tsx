import { useState } from "react";
import AddBook from './Pages/AddBook';
import Books from "./Pages/Books";
import PersonalBooks from "./Pages/YourBooks";


export default function Home() {
    const [home, setHome] = useState<number>(1);
    function goHome(tab: number) {
        setHome(tab);
    }
    function str(num: number) {
        if (home == num) {
            return 'tab-active'
        } else {
            return ''
        }
    }
    return (
        <section className="flex flex-col justify-start items-center w-screen">
            <div className="tabs">
                <a onClick={() => goHome(0)} className={'tab' + str(0)}>Add Books</a>
                <a onClick={() => goHome(1)} className={"tab" + str(1)}>BB Books</a>
                <a onClick={() => goHome(2)} className={"tab" + str(2)}>Your Books</a>
            </div>
            <article className="h-96 w-scree px-14 py-10">
                {home == 0 && <AddBook />}
                {home == 1 && <Books />}
                {home == 2 && <PersonalBooks />}
            </article>
        </section>
    )
}

