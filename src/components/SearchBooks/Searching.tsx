import axios from "axios";
import { useState } from "react";
import { checkSearching } from "../../helpers/usefulFunctions";
import Card from "./Card";
import PageSearch from "./PageSearch";

const SearchingBook = () => {
    const [searching, setSearching] = useState<[boolean, string]>([false, '']);
    const handleSearching = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //setSearching((prev) => [true, searching[1]])
    }
    return (
        <section className="flex relative flex-col justify-center items-center gap-3 w-screen overflow-hidden">
            <div className="form-control flex ">
                <div className="input-group">
                    <input onChange={(e) => setSearching(prev => [false, e.target.value])} type="text" placeholder="Search a book..." className="input input-accent sm:w-96" />
                    <button onClick={(e) => handleSearching(e)} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className={checkSearching(searching[0])}>
                <div className="h-96 carousel carousel-vertical w-full px-24">
                    <div className="carousel-item h-max w-full flex flex-col lg:flex-row flex-wrap justify-center items-center">
                        <Card
                            type={"Book"}
                            categorie={"Business"}
                            name={"Mba Personal"}
                            author={"Josh Kaufmann"}
                            thumbnail={"https://img1.od-cdn.com/ImageType-100/5835-1/%7B1826793D-98B7-4CB3-B503-6F32034047AA%7DImg100.jpg"}
                            date={"15-09-2011"}
                            description={"Muchas personas dan por sentado que necesitan ir a una escuela de negocios para aprender a montar un negocio de éxito o progresar en su profesión. Eso no es cierto. La mayor parte de la práctica empresarial moderna requiere poco más que tener sentido común, saber aritmética elemental y conocer unas cuantas ideasy principios de suma importancia.MBA personal condensa los conceptos esenciales en todas las áreas de la gestión empresarial: emprendimiento, desarrollo del producto, marketing, ventas, negociación, contabilidad, finanzas, productividad, comunicación, psicología, liderazgo, diseño de sistemas, análisis y dirección de operaciones... Todo en un único volumen.La lectura de este libro le permitirá realizar un excelente trabajo, tomar buenas decisiones y sacar el máximo provecho de sus competencias, sus capacidades y las oportunidades que se le presenten, al margen de cómo se gane (o quiera ganarse) la vida."}
                            valoration={4}
                            pages={504}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchingBook