import { useState , useEffect } from "react";
import backSrc from '../assets/back.jpg';

function Card({ id, name, turned, handleClick }) {
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

 

  return (
      <div>
          <img src={turned ? backSrc : imgSrc} height='400px' width='274.42px' onClick={onClick}></img>
      </div>
  )

}

export default Card;