import { useState } from "react"
import Card from './Card.jsx'
import '../styles/Mat.css'
import shuffleArray from '../shuffleArray.js'


let StartingMatStyle = {border: '5px solid white'};

let StartingDeck = ['Spright%20Blue', 'Spright%20Blue', 'Toon%20Kingdom', 'Toon%20Kingdom', 'Dark%20Magician', 'Dark%20Magician'];

let stage = 1;
let activeId;

StartingDeck = [{name: 'Spright%20Blue', turned: true, solved: false}, {name: 'Spright%20Blue', turned: true, solved: false}, {name: 'Toon%20Kingdom', turned: true, solved: false}, {name: 'Toon%20Kingdom', turned: true, solved: false}, {name: 'Gem-Knight%20Master%20Diamond', turned: true, solved: false}, {name: 'Gem-Knight%20Master%20Diamond', turned: true, solved: false}, {name: 'Ukiyoe-P.U.N.K.%20Amazing%20Dragon', turned: true, solved: false}, {name: 'Ukiyoe-P.U.N.K.%20Amazing%20Dragon', turned: true, solved: false}, {name: 'Kashtira%20Arise-Heart', turned: true, solved: false}, {name: 'Kashtira%20Arise-Heart', turned: true, solved: false}, {name: 'Eldlich%20the%20Golden%20Lord', turned: true, solved: false}, {name: 'Eldlich%20the%20Golden%20Lord', turned: true, solved: false}, {name: 'Blue-Eyes%20Chaos%20MAX%20Dragon', turned: true, solved: false}, {name: 'Blue-Eyes%20Chaos%20MAX%20Dragon', turned: true, solved: false}, {name: 'Knightmare%20Unicorn', turned: true, solved: false}, {name: 'Knightmare%20Unicorn', turned: true, solved: false}, {name: 'Infinite%20Impermanence', turned: true, solved: false}, {name: 'Infinite%20Impermanence', turned: true, solved: false}, {name: 'Divine%20Arsenal%20AA-ZEUS%20-%20Sky%20Thunder', turned: true, solved: false}, {name: 'Divine%20Arsenal%20AA-ZEUS%20-%20Sky%20Thunder', turned: true, solved: false}];

shuffleArray(StartingDeck);

function Mat() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [matStyle, setMatStyle] = useState(StartingMatStyle);
    const [deck, setDeck] = useState(StartingDeck); 

    if (score > bestScore) setBestScore(score);

    function restartLogic() {

        stage = 1;

        let newDeck = deck.slice();
        newDeck.forEach(card => {
            card.turned = true;
            card.solved = false;
        });
        // shuffleArray(newDeck);

        setScore(0);
        setDeck(newDeck);

    }

    function restartImgs() {
        let newDeck = deck.slice();
        shuffleArray(newDeck);
        setDeck(newDeck);
    }

    function handleClick(id) {

        let newDeck = deck.slice();
        newDeck[id].turned = !newDeck[id].turned
        setDeck(newDeck);

        function findPair(card) {
            return (card != newDeck[id] && card.name == newDeck[id].name && card.turned == false);
        }

        if (newDeck.find(findPair) != undefined) {
            setScore(score + 1)
        }

        setMatStyle ({
            border: '5px solid white',
            pointerEvents: 'none'
        })

        setTimeout(() => {afterClick(id)}, stage == 1 ? 0 : 2000);

    }

    function afterClick(id) {

        setMatStyle ({border: '5px solid white'})
        
        if (stage == 2) {

            let newDeck = deck.slice();

            if (newDeck[id].name != newDeck[activeId].name) {

                newDeck[id].turned = !newDeck[id].turned
                newDeck[activeId].turned = !newDeck[activeId].turned
                setDeck(newDeck);

            } else {
                newDeck[id].solved = true;
                newDeck[activeId].solved = true;
            }
            
            stage = 1;

        } else if (stage == 1) {
            activeId = id
            stage = 2;            
        }

    }

    return (
    <div className="matDiv">    

        <div className="header">
            <button className="restartBtn" onClick={() => {
                restartLogic()
                setTimeout(() => {restartImgs()}, 800)
            }} style={matStyle}>Restart</button>
            <p className="scoreP">Score: {score}</p>
            <p className="scoreP">BestScore: {bestScore}</p>
        </div>

        <div className='field' style={matStyle}>
            {deck.map((card, index) => {
                return <Card key={index} id={index} name={card.name} turned={card.turned} solved={card.solved} handleClick={handleClick} ></Card>
            })}
        </div>

    </div>
    )
    
}

export default Mat;