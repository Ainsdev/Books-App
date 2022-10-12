type props = {
    cant: number
}

const Stats = (props: props) => {
    return (
        <div className="stats shadow">

            <div className="stat">
                <div className="stat-title">Readed Books</div>
                <div className="stat-value">{Math.round(props.cant * 100)}% </div>
                <div className="stat-desc">of your list</div>
            </div>

        </div>
    )
}

export default Stats