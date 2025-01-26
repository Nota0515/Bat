import { navLinks } from "../constants";
import Button from "../components/Button";

const Headers = () => {

  return (
    <div className="flex items-center justify-center">
      <div className="flex fixed top-0 left-1/2 -translate-x-1/2 items-center justify-between bg-n-1/30 lg:bg-transparent backdrop-blur-3xl lg:backdrop-blur-none border-b-2 border-n-4/20 lg:border-none  h-16 md:h-20 lg:mt-5 z-50 md:px-4 px-2 w-full lg:px-12">
        <div className="flex h-[48px] w-[128px] items-center justify-center">
          <div className="logo w-[50px] h-[50px] overflow-hidden">
            <img src="/src/assets/brandlogo.png" alt="logo" className="h-full w-auto" />
          </div>
          <div>
            <span className="text-white text-3xl font-doto font-black">Bat</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="nav-links-container hidden lg:flex items-center justify-center h-[3.125rem] px-1">
            <div className="nav-links flex items-center justify-between rounded-full border backdrop-blur-xl border-n-4/20 drop-shadow-1 gap-10  px-10 h-full font-ocr font-black text-white">
              {navLinks.map((nav) => (
                <a href={nav.link} key={nav.id} className="px-4">{nav.name}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hamburger-menu flex items-center justify-center h-[48px] w-[128px] rounded-full overflow-hidden">
          <div className="absolute animate-rotate button-animation-color h-[10rem] w-[10rem] bg-button rounded-full rotate-45"></div>
          <Button className="text-n-3 h-[46px] w-[126px] z-10 bg-btngradient2 font-ocr font-black">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Headers
