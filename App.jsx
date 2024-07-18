import React  from "react";
import { useState } from "react";

function App (){
  return (
    <div>
      <CardWrapper >
      <TextComponent/> 

        hi there
        
        </CardWrapper>    
    </div>
  )
}




function CardWrapper({children}){    //always get access to "children prop" which is everything written inside the Component (see up where it is used) like hi there is children prop
  console.log(children)  
  return(
      <div style = {{border:"2px solid red"}}>
        {children}
      </div>
    )
}

function TextComponent(){
  return (
    <div>
      hello i am text component
    </div>
  )
} 
export default App



