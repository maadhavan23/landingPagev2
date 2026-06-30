import "../styles/carousel.css";
import React, { useState, useEffect } from "react";

// Array of image URLs
const images = [
  "/carousel/busnProf.jpg", // The beach
  "/carousel/deku.png", // A girl doing kayak
  "/carousel/dreamhack1.jpeg", // A small boat in the sea
  "/carousel/ktpumpkins.jpg",
  "/carousel/modAndBarnes.jpg",
  "/carousel/realty.jpg",
  "/carousel/redBull.jpg",
  "/carousel/redbull2.jpg",
  "/carousel/robeats.jpg",
  "/carousel/rulyHouse.jpg",
  "/carousel/soccer!.jpg",
  "/carousel/STP1.jpg",
  "/carousel/STP2.jpg",
  "/carousel/twoNotTwo.jpg",
  "/carousel/yack.jpg",
  "/carousel/yapping.jpg",
  "/carousel/zfnaf.jpg",
  "/carousel/injector.jpg",
  "/carousel/buzz.jpg",
  "/carousel/tailgate2.jpg",
  "/carousel/cruisey.jpg",
  "/carousel/cranberry.jpg",
  "/carousel/Post Project.jpg",
  "/carousel/Pre Project.jpg",
  "/carousel/laloSalamanca.jpg",
  "/carousel/hotsauceinc!.jpg",
  "/carousel/mlpLove.jpg",
  "/carousel/fwaeh.jpg",
  "/carousel/summerPrezzy.jpg",
  "/carousel/celebrityStatus....jpg",
  "/carousel/certifiedEater.jpg",
  "/carousel/plspmogooglethxkushi.jpg",
  "/carousel/moooog.jpg"
];

function shuffleArray(array: string[]) {
  // Fisher-Yates algorithm to shuffle the array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export default function Carousel() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = shuffleArray([...images]);
    console.log(shuffled); // Debugging shuffle to check the output in console
    setShuffledImages(shuffled); // Update the state with shuffled images
    console.log(shuffled.length); // Ensure that it logs the correct number of images
  }, []); // Empty dependency array ensures this only runs once when the component mounts
  return (
    <div className="carousel-container py-16">
      <div className="gallery">
        {shuffledImages.map((image, index) => (
          <img key={index} src={image} alt={`Random Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
