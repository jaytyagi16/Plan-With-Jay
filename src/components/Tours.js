import Card from "./Card";

function Tours({tours, removeTour}){
    return (
        <div className="card-container">
            {
                tours.map((tour) => {
                    return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                })
            }
        </div>
    );
}

export default Tours;