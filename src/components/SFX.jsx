import shuffleDeck from '../assets/shuffleDeck.mp3'
import flipCard1 from '../assets/flipCard1.mp3'
import flipCard2 from '../assets/flipCard2.mp3'

function SFX({ input }) {

    let sound;

    if (input == 'shuffleDeck') {
        sound = shuffleDeck;
    } else if (input == 'flipCard1') {
        sound = flipCard1;
    } else if (input == 'flipCard2') {
        sound = flipCard2;
    }

    return (
        <audio controls className="mySFX" id={input}>
            <source src={sound} type="audio/mp3" ></source>
        </audio>
    )

}

export default SFX;