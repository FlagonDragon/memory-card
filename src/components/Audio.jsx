import bgm from '../assets/passionateDuelist.mp3'

function Audio() {

    return (
        <audio loop id="myBGM">
            <source src={bgm} type="audio/mp3" ></source>
        </audio>
    )

}

export default Audio;