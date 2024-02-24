import React, { useState } from 'react'
import data from "./data"
import {FaCirclePlus, FaCircleMinus} from "react-icons/fa6";


const Questions = () => {

const [showInfo, setShowInfo] = useState(null)

const toggleInfo = (index) => {
  setShowInfo(showInfo === index ? null : index)
};

return (
    <div className='container'>
      <h3>Questions and Answers about login</h3>

      {data.map((item, index) => {
        const {id, title, info} = item
          return( 
            <article className='questions' key={id}>
              <header className='question-header'>
                <h3>{title}</h3>
                <button onClick={() => toggleInfo(index)}>{showInfo === index ?  <FaCircleMinus className='fa-circle-plus'/> : <FaCirclePlus className='fa-circle-plus'/> }</button>
              </header>
                {showInfo === index && <p>{info}</p>}
            </article> 
          )
          }
      
      )}
    </div>
  )
}

export default Questions























// ORORORORORORORORORROROROROR
// ////////////////////////////////////

// import React, { useState } from 'react'
// import data from "./data"
// import {FaCirclePlus, FaCircleMinus} from "react-icons/fa6";


// const Questions = () => {

// const [showInfo, setShowInfo] = useState(data.map(() => false))

// const toggleInfo = (index) => {
//   setShowInfo(prevState => {
//     const newState = [...prevState];
//     newState[index] = !newState[index];
//     return newState;
//   });
// };

// return (
//     <div className='container'>
//       <h3>Questions and Answers about login</h3>

//       {data.map((item, index) => {
//         const {id, title, info} = item
//           return( 
//             <article className='questions' key={id}>
//               <header className='question-header'>
//                 <h3>{title}</h3>
//                 <button onClick={() => toggleInfo(index)}>{showInfo[index] ?  <FaCircleMinus className='fa-circle-plus'/> : <FaCirclePlus className='fa-circle-plus'/> }</button>
//               </header>
//                 {showInfo[index] && <p>{info}</p>}
//             </article> 
//           )
//           }
      
//       )}
//     </div>
//   )
// }

// export default Questions
