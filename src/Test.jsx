import { useState , useEffect } from "react";

function Test() {

  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {

    async function getCards() {

      try {        

        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Toon%20Kingdom`);
        const cardData = await response.json();
        console.log(cardData.data[0].card_images[0].image_url);
        setImgSrc(cardData.data[0].card_images[0].image_url);
        
      } catch (error) {
        console.error(error);
      }

    }

    getCards();

  }, [])

  return (
      <div>
          <p>TESTINGGGG</p>
          <p>My result is: {}!!!</p>
          <img src={imgSrc} height='400px'></img>
      </div>
  )

}

export default Test;