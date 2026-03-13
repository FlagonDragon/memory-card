import Card from './Card.jsx'
import '../styles/Mat.css'

function Mat() {

    let deck = [];
    // deck.push(<Card></Card>);
    console.log(deck);
    

    let i = 0;
    while (i < 6) {
        deck.push(i);
        i++;
        console.log(i);
        
    }

    console.log(deck);
    

    return (
    <div className='Mat'>
        {deck.map((card) => {
            return <Card key={card}></Card>
        })}
    </div>
    )
}

export default Mat;