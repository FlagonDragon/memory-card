import { useState , useEffect } from "react";
import backSrc from '../assets/back.jpg';
import '../styles/Card.css'

function Card({ id, name, turned, solved, handleClick }) {
  const [imgSrc, setImgSrc] = useState(null);

  function onClick() {
    handleClick(id)
    console.log(id);
  }

  useEffect(() => {

    async function getCards() {

      try {        

        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
        const cardData = await response.json();
        // console.log(cardData.data[0].card_images[0].image_url);
        setImgSrc(cardData.data[0].card_images[0].image_url);
        
      } catch (error) {
        console.error(error);
      }

    }

    getCards();

  }, [name])

  let cardStyle = {}
  let solvedStyle = {
    pointerEvents: 'none'
  }

  return (
    <div style={turned ? cardStyle : solvedStyle} className="cardDiv">

      <div style={solved ? solvedStyle : cardStyle} className={turned ? "innerDiv" : "innerDiv cardTurned"}>

        <div className="cardFront">
          <img src={imgSrc} height='400px' width='274.42px' onClick={onClick}></img>
        </div>

        <div className="cardBack">
          <img src={backSrc} height='400px' width='274.42px' onClick={onClick}></img>
        </div>

      </div>

    </div>
  )

}

{/* <img src={turned ? backSrc : imgSrc} height='400px' width='274.42px' onClick={onClick}></img> */}

export default Card;