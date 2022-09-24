import { useState } from "react";
import AddToDataBase from "../../helpers/interfaces";
import Alert from "../Alert";
interface AddBookFirstProps {
    func: Function;
    funcBack: Function;
    data: string;
}
const AddBookSecond: React.FC<AddBookFirstProps> = ({ func, funcBack, data }) => {
    const [fields, setFields] = useState<Array<string | Boolean>>(['', '', true]);
    //handle errors
    const [alert, setAlert] = useState<boolean>(false);

    return (
        <form className="m-5 flex flex-col gap-5 justify-center items-center">
            {alert && <Alert style={"alert-warning"} text={"Error, Fill all the inputs"} />}
            <label className="label">
                <span className="label-text-alt">Data of your {data}</span>
            </label>
            <div className="form-control flex flex-col gap-2    ">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input onChange={(e) => setFields([
                    e.target.value, fields[1], fields[2]
                ])} type="text" placeholder="Macbeth..." className="input input-bordered w-full input-group-lg" />
                <label className="label">
                    <span className="label-text">Author</span>
                </label>
                <input onChange={(e) => setFields([
                    fields[0], e.target.value, fields[2]
                ])} type="text" placeholder="Shakespeare..." className="input input-bordered w-full input-group-lg" />
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">Fill other data</span>
                    <input onChange={() => setFields([
                        fields[0], fields[1], !fields[2]
                    ])} type="checkbox" checked={fields[2] as boolean} className="ml-2 checkbox checkbox-secondary" />
                </label>
            </div>
            <section className="flex gap-5 mt-5">
                <button onClick={(event) => funcBack(event)} className="btn btn-outline">Back</button>
                <button onClick={(event) => {
                    event.preventDefault();
                    if (fields[0] == "" || fields[1] == "") {
                        setAlert(true)
                    } else {
                        func(event, fields[0], fields[1], fields[2])
                    }
                }} className="btn btn-primary">Continue</button>
            </section>
        </form >
    );
};

export default AddBookSecond