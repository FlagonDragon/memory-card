import Card from './Card.jsx'
import '../styles/Mat.css'
import shuffleArray from '../shuffleArray.js'

function Mat() {

    let deck = ['Spright%20Blue', 'Spright%20Blue', 'Toon%20Kingdom', 'Toon%20Kingdom', 'Dark%20Magician', 'Dark%20Magician'];

    shuffleArray(deck);

    // let i = 0;
    // while (i < 6) {
    //     deck.push(i);
    //     i++;        
    // }    

    return (
    <div className='Mat'>
        {deck.map((card, index) => {
            return <Card key={index} name={card}></Card>
        })}
    </div>
    )
}

export default Mat;