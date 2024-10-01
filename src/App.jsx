import React from 'react'
import NewsLetter from './components/NewsLetter';
import Thanks from './components/Thanks';

export const App = () => {
  return (
   <div className="">
    <NewsLetter/>
    {/* <Thanks/> */}

    <div class="attribution flex items-center justify-center">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#" className="text-red-700 font-bold" >&nbsp;PROVEE</a>.
  </div>
   </div>
  )
}


export default App;