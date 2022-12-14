import { useState } from "react";

interface AddBookFirstProps {
    func: Function;
    funcBack: Function;
    data: string;
}
type checks = {
    checked: boolean
    valoration: number
    links: Array<string>
}
const AddBookThird: React.FC<AddBookFirstProps> = ({ func, funcBack, data }) => {
    const action = data == 'Podcast' ? "Listen" : "Read"

    const [link, setLink] = useState<string>('');
    const [check, setCheck] = useState<checks>({
        checked: false,
        valoration: 5,
        links: []
    });
    console.log(check.valoration)
    return (
        <form className="m-5 flex flex-col gap-5 justify-center items-center">
            <label className="label">
                <span className="label-text">Your opinion is important</span>
            </label>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">You readed?</span>
                    <input onChange={() => setCheck({ ...check, checked: !check.checked })} type="checkbox" checked={check.checked} className="ml-2 checkbox checkbox-secondary" />
                </label>
            </div>
            {check.checked == true ? <div className="rating">
                <input onChange={(e) => {
                    e.preventDefault();
                    setCheck({ ...check, valoration: 1 })
                }} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input onChange={(e) => {
                    e.preventDefault();
                    setCheck({ ...check, valoration: 2 })
                }} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input onChange={(e) => {
                    e.preventDefault();
                    setCheck({ ...check, valoration: 3 })
                }} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                    onChange={(e) => {
                        e.preventDefault();
                        setCheck({ ...check, valoration: 4 })
                    }} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input onChange={(e) => {
                    e.preventDefault();
                    setCheck({ ...check, valoration: 5 })
                }} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div> : <></>}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">{"Where others can " + action + '?'}</span>
                </label>
                <div className="input-group">
                    <input value={link} onChange={(e) => setLink(e.target.value)} type="text" placeholder="Add a link..." className="input input-bordered" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setLink('')
                        setCheck({ ...check, links: check.links.concat(link) })
                    }} className="btn btn-square">Add</button>
                </div>
            </div>
            <div>
                <ul>
                    {check.links.map((item, index) => <li className="flex gap-3" key={index}><a className="link">{item}</a><button value={item} onClick={(e) => {
                        e.preventDefault();
                        setCheck({ ...check, links: check.links.filter((i) => i != e.currentTarget.value) })
                    }}>X</button></li>)}
                </ul>
            </div>
            <section className="flex gap-5 mt-5">
                <button onClick={(event) => funcBack(event)} className="btn btn-outline">Back</button>
                <button onClick={(event) => func(event,check.links,check.valoration,check.checked)} className="btn btn-primary">Publish</button>
            </section>
        </form >
    );
};

export default AddBookThird