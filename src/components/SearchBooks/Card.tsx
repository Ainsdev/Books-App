import { SearchedBook } from '../../helpers/interfaces';
// type cardProps = {

// }
export default function Card(props: SearchedBook) {
    return (
        <div className="card card-side bg-neutral p-0 text-center m-5 lg:w-1/6 h-52 w-full">
            <figure><img className="h-full" src={props.thumbnail} alt="Image" loading='lazy' /></figure>
            <div className="card-body flex justify-start items-center">
                <h2 className="card-title text-lg ">{props.name}</h2>
                <p className="text-md">Author</p>
                <div className="card-actions justify-center">
                    <Modal type={props.type}
                        categorie={props.categorie}
                        name={props.name}
                        author={props.author}
                        thumbnail={props.thumbnail}
                        date={props.date}
                        description={props.description}
                        valoration={props.valoration}
                        pages={props.pages}
                    />
                </div>
            </div>
        </div>
    )
}
const Modal = (data: SearchedBook) => {
    const ratingStars = []
    for (let i = 0; i < data.valoration; i++) {
        ratingStars.push(<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />)
    }
    return (
        <>
            <label htmlFor="my-modal-3" className="btn btn-sm btn-primary">See More</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative z-40 w-72 sm:w-full text-center">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <figure><img className="h-full rounded-xl" src={data.thumbnail} alt="Shoes" loading='lazy' /></figure>
                    <h3 className="text-xl font-bold pt-5">Title: {data.name}</h3>
                    <h3 className="text-lg font-semibold pt-5">Author: {data.author}</h3>
                    <div className="divider"></div>
                    <h3 className="text-lg font-light pt-1">Date: {data.date}</h3>
                    <h3 className="text-lg font-light pt-1">{data.categorie}</h3>
                    <h3 className="text-lg font-light pt-1">{data.pages}</h3>
                    <div className="rating pt-1">
                        {ratingStars}
                    </div>
                    <div className="collapse text-center">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold text-center underline">
                            Description
                        </div>
                        <div className="collapse-content">
                            <p className='text-lg font-medium'>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

