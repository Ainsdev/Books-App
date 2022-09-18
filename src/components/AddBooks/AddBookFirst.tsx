import { useState } from "react";

interface AddBookFirstProps {
    data: Function;
}
interface info {
    categorie: string
    personal: boolean
}
const AddBookFirst: React.FC<AddBookFirstProps> = ({ data }) => {
    const [info, setInfo] = useState<info>({
        categorie: "Book",
        personal: false
    });
    return (
        <form className="m-5 flex flex-col gap-5 justify-center items-center">
            <label className="label">
                <span className="label-text-alt">Select the Categorie</span>
            </label>
            <select onChange={(e) => setInfo({ categorie: e.target.value, personal: info.personal })} className="select select-bordered w-full max-w-xs">
                <option value='Book' selected>Book</option>
                <option value='Podcast'>Podcast</option>
                <option value='Article'>Article</option>
            </select>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">To Personal list</span>
                    <input onClick={() => setInfo({
                        categorie: info.categorie,
                        personal: !info.personal
                    })} type="checkbox" className="m-5 toggle toggle-primary" checked={info.personal} />
                </label>
            </div>
            <button onClick={(event) => data(event, info.categorie, info.personal)} className="btn btn-primary">Continue</button>
        </form >
    );
};

export default AddBookFirst
