interface AddBookFirstProps {
    data: Function;
}
const AddBookThird: React.FC<AddBookFirstProps> = ({ data }) => {
    let categ = 'Book'
    return (
        <form className="m-5 flex flex-col gap-5 justify-center items-center">
            <label className="label">
                <span className="label-text-alt">Select the Categorie</span>
            </label>
            <select onChange={(e) => categ = e.target.value} className="select select-bordered w-full max-w-xs">
                <option value='Book' selected>Book</option>
                <option value='Podcast'>Podcast</option>
                <option value='Article'>Article</option>
            </select>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">To Personal list</span>
                    <input type="checkbox" className="m-5 toggle toggle-primary" checked />
                </label>
            </div>
            <button onClick={(event) => data(event, categ, false)} className="btn btn-primary">Continue</button>
        </form >
    );
};

export default AddBookThird