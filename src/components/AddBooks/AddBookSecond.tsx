import AddToDataBase from "../../helpers/interfaces";
import SearchingBook from "../SearchBooks/Searching";
interface AddBookFirstProps {
    func: Function;
    funcBack: Function;
    data: AddToDataBase;
}
const AddBookSecond: React.FC<AddBookFirstProps> = ({ func, funcBack, data }) => {
    const categorie = data.categorie
    return (
        <form className="m-5 flex flex-col gap-5 justify-center items-center">
            <label className="label">
                <span className="label-text-alt">Data of your {categorie}</span>
            </label>
            <SearchingBook style="input input-primary" placeholder="Search your Book" />
            <section className="flex gap-5">
                <button onClick={(event) => funcBack(event)} className="btn btn-primary">Back</button>
                <button onClick={(event) => func(event)} className="btn btn-primary">Continue</button>
            </section>
        </form >
    );
};

export default AddBookSecond