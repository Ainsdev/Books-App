type cardProps = {
    title:string,
    description:string
}
export default function Card(props:cardProps) {
    return(
        <div className="card w-96 bg-base-300">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    )
}