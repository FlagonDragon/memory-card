import { useState , useEffect } from "react";

function Test() {

  const [done, setDone] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  console.log(imgSrc);
  

    // async function logWeather() {

    //     try {

    //     const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker`);

    //     let weatherData = await response.json();+

    //     console.log(weatherData);
        

    //     return weatherData;

    //     } catch {

    //         console.log('error');

    //     }

    // };

    // let myResult = logWeather();

  useEffect(() => {

    async function getCards() {

      try {
        console.log('trying');
        

        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker`);
        const cardData = await response.json();
        console.log(cardData.data[0].card_images[0].image_url);
        setImgSrc(cardData.data[0].card_images[0].image_url);
        
      } catch (error) {
        console.error(error);
      }

    }

    if (done == false) {
      getCards();
      setDone(true);
    }

  }, [done])

  



    return (
        <div>
            <p>TESTINGGGG</p>
            <p>My result is: {}!!!</p>
            <img src={imgSrc}></img>
        </div>
    )
}

export default Test;