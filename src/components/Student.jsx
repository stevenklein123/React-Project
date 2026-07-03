import { useState } from "react"

const Student = () => {

    const [Status , setStatus] = useState(false);

    const isActive = () => {
    setStatus(!Status);
}
  return (

    <div className="bg-slate-600 flex flex-cols justify-center items-center color-white" >

        <p>Name:</p>
        <p>Status : {}</p>

        <button onClick={isActive}></button>

    </div>
  )
}

export default Student