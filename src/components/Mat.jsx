import { useState } from "react"
import Card from './Card.jsx'
import Audio from "./Audio.jsx"
import '../styles/Mat.css'
import shuffleArray from '../shuffleArray.js'
import yugi0 from '../assets/yugi0.jpg'
import yugi1 from '../assets/yugi1.jpg'
import yugi2 from '../assets/yugi2.jpg'
import yugi3 from '../assets/yugi3.jpg'
import yugi4 from '../assets/yugi4.jpg'
import yugi5 from '../assets/yugi5.jpg'
import yugi6 from '../assets/yugi6.jpg'
import yugi7 from '../assets/yugi7.jpg'
import yugi8 from '../assets/yugi8.jpg'
import yugi9 from '../assets/yugi9.jpg'

const myNum = () => Math.floor(Math.random() * 10);

let backgroundArray = [yugi0, yugi1, yugi2, yugi3, yugi4, yugi5, yugi6, yugi7, yugi8, yugi9];

let myRoot = document.body
myRoot.style.backgroundImage = `url(${backgroundArray[myNum()]})`

let StartingMatStyle = {};

let StartingDeck = ['Spright%20Blue', 'Spright%20Blue', 'Toon%20Kingdom', 'Toon%20Kingdom', 'Dark%20Magician', 'Dark%20Magician'];

let stage = 1;
let activeId;
let strikes = 0;

StartingDeck = [{name: 'Spright%20Blue', turned: true, solved: false}, {name: 'Spright%20Blue', turned: true, solved: false}, {name: 'Toon%20Kingdom', turned: true, solved: false}, {name: 'Toon%20Kingdom', turned: true, solved: false}, {name: 'Gem-Knight%20Master%20Diamond', turned: true, solved: false}, {name: 'Gem-Knight%20Master%20Diamond', turned: true, solved: false}, {name: 'Ukiyoe-P.U.N.K.%20Amazing%20Dragon', turned: true, solved: false}, {name: 'Ukiyoe-P.U.N.K.%20Amazing%20Dragon', turned: true, solved: false}, {name: 'Kashtira%20Arise-Heart', turned: true, solved: false}, {name: 'Kashtira%20Arise-Heart', turned: true, solved: false}, {name: 'Eldlich%20the%20Golden%20Lord', turned: true, solved: false}, {name: 'Eldlich%20the%20Golden%20Lord', turned: true, solved: false}, {name: 'Blue-Eyes%20Chaos%20MAX%20Dragon', turned: true, solved: false}, {name: 'Blue-Eyes%20Chaos%20MAX%20Dragon', turned: true, solved: false}, {name: 'Knightmare%20Unicorn', turned: true, solved: false}, {name: 'Knightmare%20Unicorn', turned: true, solved: false}, {name: 'Infinite%20Impermanence', turned: true, solved: false}, {name: 'Infinite%20Impermanence', turned: true, solved: false}, {name: 'Divine%20Arsenal%20AA-ZEUS%20-%20Sky%20Thunder', turned: true, solved: false}, {name: 'Divine%20Arsenal%20AA-ZEUS%20-%20Sky%20Thunder', turned: true, solved: false}];

shuffleArray(StartingDeck);


// let playing = false;

// function playMusic() {
//     if (playing == false) {
//         myBGM.play();
//     }
//     playing = true;
// }

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
        myRoot.style.backgroundImage = `url(${backgroundArray[myNum()]})`

        let newDeck = deck.slice();
        shuffleArray(newDeck);
        setDeck(newDeck);
    }

    function handleClick(id) {

        const myBGM = document.getElementById('myBGM');

        myBGM.play()

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
            pointerEvents: 'none'
        })

        setTimeout(() => {afterClick(id)}, stage == 1 ? 0 : 2000);

    }

    function afterClick(id) {

        setMatStyle ({})
        
        if (stage == 2) {

            let newDeck = deck.slice();

            if (newDeck[id].name != newDeck[activeId].name) {

                strikes += 1

                newDeck[id].turned = !newDeck[id].turned
                newDeck[activeId].turned = !newDeck[activeId].turned
                
                setDeck(newDeck);

                if (strikes == 4) {
                    strikes = 0;
                    restartLogic();;
                    setTimeout(() => {restartImgs()}, 800)
                }

            } else {
                strikes = 0;
                newDeck[id].solved = true;
                newDeck[activeId].solved = true;
            }
            
            stage = 1;

        } else if (stage == 1) {
            activeId = id
            stage = 2;            
        }

    }

    let gameSolved = false;

    if (score == 10 ) gameSolved = true;    

    return (
    <div className="matDiv">  

        <Audio></Audio>

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
                return <Card key={index} id={index} name={card.name} turned={card.turned} solved={card.solved} gameSolved={gameSolved} handleClick={handleClick}></Card>
            })}
        </div>

    </div>
    )
    
}

export default Mat;