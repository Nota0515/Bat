import { useEffect, useState } from "react";
import Button from "../components/Button"
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {

  const handleShopNowClick = () => {
    console.log("Shop Now button clicked");
  }
  const [IsVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsVisible(true);
    } , 8500);

    return ()=> clearTimeout(timer);
  } , []);

  return (
    <div className="flex relative justify-center items-start">
      <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
        <video className="w-[100%] h-[100%] object-cover " style={{ objectPosition: '50% 10%' }} src="src/assets/video/product.mp4" alt="brandvideo" autoPlay muted playsInline></video>
      </div>
      <div className="shopnow-container flex justify-center items-center absolute w-full h-[9rem] bottom-0 left-1/2 -translate-x-1/2">
        <div className="shopnow-button flex  justify-center items-center bg-gradtop  w-full h-full">
          <div className="flex justify-center items-center h-full w-[30rem] ">
            <Button className={`relative font-ocr font-black h-14 bg-n-10 w-[8rem]" alt="shopnowbtn ${IsVisible ? 'animate-fadeup' : 'opacity-0'}`} onClick={handleShopNowClick}><span className="text-lg md:text-xl lg:text-xl text-black inline-flex items-center justify-center gap-x-1">ShopNow <FaShoppingBag /></span></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
