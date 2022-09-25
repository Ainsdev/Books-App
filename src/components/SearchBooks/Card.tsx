import { SearchedBook } from '../../helpers/interfaces';
// type cardProps = {

// }
export default function Card(props: SearchedBook) {
    return (
        <div className="card card-side bg-neutral p-0 text-justify m-5 w-3/4 lg:w-1/5 h-52">
            <figure><img className="h-full w-full 2xl:w-32" src={props.image} alt="Image" loading='lazy' /></figure>
            <div className="card-body w-3/4">
                <div className=' w-full text-justify  text-ellipsis overflow-hidden ' >
                    <h2 className="align-top text-sm lg:text-lg font-bold ">{props.name}</h2>
                </div>
                <p>{props.author}</p>
                <div className="card-actions flex">
                    <Modal
                        id={props.id}
                        key={props.id}
                        type={props.type}
                        categorie={props.categorie}
                        name={props.name}
                        author={props.author}
                        image={props.image}
                        date={props.date}
                        description={props.description}
                        valoration={props.valoration}
                        pages={props.pages}
                    />
                    <button className='btn btn-sm btn-outline'>Add</button>
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
            <label htmlFor={'my-modal-' + data.id} className="btn btn-sm btn-primary">See More</label>
            <input type="checkbox" id={'my-modal-' + data.id} className="modal-toggle" />

            <label htmlFor={'my-modal-' + data.id} className="modal cursor-pointer">F
                <div className="modal-box relative z-40 w-72 sm:w-full text-center">
                    {/* <label htmlFor={'my-modal-' + data.id} className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label> */}
                    <div className='flex justify-center items-center'><img className="rounded-xl h-96" src={data.image} alt="Image not found" loading='lazy' /></div>
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
            </label>


        </>
    );
};

