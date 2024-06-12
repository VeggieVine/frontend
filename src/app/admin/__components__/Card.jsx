const Card = ({ title, description }) => {
    return (
        <div className="card w-52 lg:w-72 bg-base-100 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
