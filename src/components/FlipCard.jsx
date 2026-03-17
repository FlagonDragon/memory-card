import backSrc from '../assets/back.jpg';

function FlipCard() {

    return(
        <div class="flip-card">
            <div class="flip-card-inner">

                <div class="flip-card-front">
                    <img src={backSrc} alt="back" height='400px' width='274.42px'></img>
                </div>  

                {/* <div class="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div> */}
                
            </div>
        </div>
    )

}

export default FlipCard;