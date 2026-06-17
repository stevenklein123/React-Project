import { useState } from "react";


function App() {

  const [like , setLike] = useState(0);
  const [disLike , setDislike] = useState(0);

  const IncrementLike = () => {
    setLike((prevState) => prevState+1);
  }

    const IncrementDisLike = () => {
    setDislike((prevState) => prevState+1);
  }

  const resetFunc = () => { 
    setLike(0);
    setDislike(0);
  }


  return (
    <>  
<div className="min-h-screen flex justify-center items-center">

  <div className="
    text-sm md:text-lg lg:text-xl
    bg-slate-700 text-white
    w-full max-w-xs
    p-4
    flex flex-col
    rounded-xl
  ">

    <p>Like : {like}</p>
    <p>👍</p>

    <button
      className="bg-purple-700 rounded-xl py-2 my-2 cursor-pointer"
      onClick={IncrementLike}
    >
      Like
    </button>

    <p>Dislike : {disLike}</p>
    <p>👎</p>

    <button
      className="bg-purple-700 rounded-xl py-2 my-2 cursor-pointer"
      onClick={IncrementDisLike}
    >
      Dislike
    </button>

    <button
      className="bg-blue-700 rounded-xl py-2 my-2 cursor-pointer"
      onClick={resetFunc}
    >
      Reset
    </button>

  </div>

</div>

    </>
  );  
}

export default App;