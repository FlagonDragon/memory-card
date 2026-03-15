import { useState } from "react"
import Card from './Card.jsx'
import '../styles/Mat.css'
import shuffleArray from '../shuffleArray.js'


let StartingMatStyle = {border: '5px solid blue'};

let StartingDeck = ['Spright%20Blue', 'Spright%20Blue', 'Toon%20Kingdom', 'Toon%20Kingdom', 'Dark%20Magician', 'Dark%20Magician'];

StartingDeck = [{name: 'Spright%20Blue', turned: true, pair: 'a'}, {name: 'Spright%20Blue', turned: true, pair: 'a'}, {name: 'Toon%20Kingdom', turned: true, pair: 'b'}, {name: 'Toon%20Kingdom', turned: true, pair: 'b'}, {name: 'Dark%20Magician', turned: true, pair: 'c'}, {name: 'Dark%20Magician', turned: true, pair: 'c'}];

shuffleArray(StartingDeck);

function Mat() {
    const [points, setPoints] = useState(0);
    const [matStyle, setMatStyle] = useState(StartingMatStyle);
    const [deck, setDeck] = useState(StartingDeck); 

   

    function handleClick(id) {

        let newDeck = deck.slice();
        newDeck[id].turned = !newDeck[id].turned
        setDeck(newDeck);

        function findPair(card) {
            return (card != newDeck[id] && card.name == newDeck[id].name && card.turned == false);
        }

        if (newDeck.find(findPair) != undefined) {
            setPoints(points + 1)
        }

        setMatStyle ({
            border: '5px solid green',
            pointerEvents: 'none'
        })

        setTimeout(changeStyle, 3000);

    }

    function changeStyle() {
        setMatStyle ({border: '5px solid blue'})
    }

    return (
    <>
        <div className="pointsDiv">Points: {points}</div>
        <div className='Mat' style={matStyle}>
            {deck.map((card, index) => {
                return <Card key={index} id={index} name={card.name} turned={card.turned} handleClick={handleClick} ></Card>
            })}
        </div>
    </>
    )
    
}

export default Mat;