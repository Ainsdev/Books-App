type cardProps = {
    title: string,
    author: string
}
export default function Card(props: cardProps) {
    return (
        <div className="card card-side bg-base-100 p-0 text-center m-5 xl:w-1/6 h-52">
            <figure><img className="h-full" src="https://img1.od-cdn.com/ImageType-100/5835-1/%7B1826793D-98B7-4CB3-B503-6F32034047AA%7DImg100.jpg" alt="Shoes" /></figure>
            <div className="card-body flex justify-start items-center">
                <h2 className="card-title text-lg ">{props.title}</h2>
                <p className="text-md">{props.author}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary">See More</button>
                </div>
            </div>
        </div>
    )
}