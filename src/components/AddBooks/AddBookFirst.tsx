import { useState } from "react";

interface AddBookFirstProps {
    data: Function;
}
interface info {
    type: string
    personal: boolean
}
const AddBookFirst: React.FC<AddBookFirstProps> = ({ data }) => {
    const [info, setInfo] = useState<info>({
        type: "Book",
        personal: false
    });
    return (
        <form className="m-5 flex flex-col gap-5 justify-center items-center">
            <label className="label">
                <span className="label-text-alt">Select the Categorie</span>
            </label>
            <select onChange={(e) => setInfo({ type: e.target.value, personal: info.personal })} className="select select-bordered w-full max-w-xs">
                <option value='Book' defaultValue={1}>Book</option>
                <option disabled value='Podcast'>Podcast(Soon)</option>
                <option disabled value='Article'>Article(Soon)</option>
            </select>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">To Personal list</span>
                    <input onChange={() => setInfo({
                        type: info.type,
                        personal: !info.personal
                    })} type="checkbox" className="m-5 toggle toggle-primary" checked={info.personal} />
                </label>
            </div>
            <button onClick={(event) => data(event, info.type, info.personal)} className="btn btn-primary">Continue</button>
        </form >
    );
};

export default AddBookFirst
