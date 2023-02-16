
import fotoProfile from "./assets/image-victor.jpg";
import cardBackground from "./assets/bg-pattern-card.svg";
import patternTop from "./assets/bg-pattern-top.svg";
import patternBottom from "./assets/bg-pattern-bottom.svg";

function App() {

  return (
    <div className="App w-screen min-h-screen bg-primary-dark flex justify-center items-center">

      <div className="absolute left-0 top-0 w-screen h-screen -translate-y-80 max-lg:-translate-y-20 duration-200">
        <img src={patternTop} alt="ball-top" className="absolute w-[55%] max-sm:w-[75%] select-none" />
      </div>

      <div className="absolute bottom-0 right-0 w-screen h-screen translate-y-[30rem] translate-x-28 max-lg:translate-y-40 duration-200 max-xl:translate-y-80">
        <img src={patternBottom} alt="ball-bottom" className="absolute w-[55%] bottom-0 right-0 max-sm:w-[75%] select-none" />
      </div>

      <div className="flex flex-col w-[20rem] h-[22rem] bg-white rounded-2xl overflow-hidden z-10 ml-4 mr-4 min-w-[15rem]">
        <div>
          <img src={cardBackground} alt="background-card" />
        </div>
        <div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-center items-center h-0 mb-14">
              <img src={fotoProfile} alt="foto-card" className="rounded-full border-4 border-solid border-white w-[6rem]" />
            </div>
            <div className="flex justify-center items-center gap-3">
              <h1 className="font-bold text-lg mb-2">Victor Crest</h1>
              <p className="text-primary-dark-grawish-blue font-semibold">26</p>
            </div>
            <p className="text-center text-sm mt-0 text-primary-dark-grawish-blue -translate-y-1.5">London</p>
          </div>
          <div className="flex border-t-2 w-full justify-evenly items-center h-1/2 text-center text-md">
            <div>
              <h2 className="font-bold mb-0.5">80K</h2>
              <p className="text-sm text-primary-dark-grawish-blue">Followers</p>
            </div>
            <div>
              <h2 className="font-bold mb-0.5">803K</h2>
              <p className="text-sm text-primary-dark-grawish-blue">Likes</p>
            </div>
            <div>
              <h2 className="font-bold mb-0.5">1.4K</h2>
              <p className="text-sm text-primary-dark-grawish-blue">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
