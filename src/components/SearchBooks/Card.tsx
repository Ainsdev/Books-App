type cardProps = {
    title: string,
    author: string
}
export default function Card(props: cardProps) {
    return (
        <div className="card card-side bg-neutral p-0 text-center m-5 lg:w-1/6 h-52 w-screen">
            <figure><img className="h-full" src="https://img1.od-cdn.com/ImageType-100/5835-1/%7B1826793D-98B7-4CB3-B503-6F32034047AA%7DImg100.jpg" alt="Image" /></figure>
            <div className="card-body flex justify-start items-center">
                <h2 className="card-title text-lg ">{props.title}</h2>
                <p className="text-md">{props.author}</p>
                <div className="card-actions justify-center">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-primary">See More</label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative z-40">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <figure><img className="h-full" src="https://img1.od-cdn.com/ImageType-100/5835-1/%7B1826793D-98B7-4CB3-B503-6F32034047AA%7DImg100.jpg" alt="Shoes" /></figure>
                            <h3 className="text-lg font-bold">{props.title}</h3>
                            <h3 className="text-lg font-light">{props.author}</h3>
                            <h3 className="text-lg font-light">Date</h3>
                            <h3 className="text-lg font-light">Rating</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
