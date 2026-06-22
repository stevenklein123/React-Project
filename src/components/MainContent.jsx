import Facebook from "../assets/facebook.png";
import Background from "../assets/Background.png";

const MainContent = () => {
  return (
    <>

    <header>

        <div className="w-40 h-40 flex items-center justify-center">
        <img 
            src={Facebook} 
            alt="Facebook" 
            className="w-25 h-600 object-contain" 
        />
        </div>

    </header>
    
    <main>
        <div className="flex flex-row justify-between">
            <div>
                <h1 className="font-semibold text-6xl">Explore</h1>
                <h1 className="font-semibold text-6xl">the</h1>
                <h1 className="font-semibold text-6xl">things</h1> 
                <h1 className="font-semibold text-6xl text-[#1877F2]">you love.</h1>
            </div>

            <div>
                <img src={Background} alt="" />
            </div>

        </div>

    </main>

    <footer>
        Meta © 2026
    </footer>
    </>
  )
}

export default MainContent