import React from 'react'
import {useState, useReducer} from "react"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./toggle.style"
import { Data } from "./data"


 



function reducer(state,action){ 

  if(action.type === "increase"){
    return state +1;
  }
   if (action.type === "reset"){
     return 0
   }
   if(action.type === "decrease"){
     return state -1
   }
   else{
     return "nan"
   }

}
 function UseReducer() {
  const [state,dispatch] = useReducer(reducer, 0)
  const [search, setSearch] = useState("")
    const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

 
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      
      <GlobalStyles/>
    
    <div   className='home'>
      <input type="text" 
      className='search'
       placeholder="Search.." 
       name="search"
       onChange={(events)=>{
         setSearch(events.target.value)
       }}

       
       />
      <button onClick={themeToggler} type="button" className="btn btn-dark">DARK</button>
    <div className='list'>
      <ol>
        {Data.filter((list)=>{
          if(search == ""){
            return list
          }else if(list.name.toLowerCase().includes(search.toLowerCase())){
            return list
          }
  

        }).map(list=>{
         
          return<>
          <div ><li key={list.id}><h4>{list.name}</h4></li></div>
          
          
          </>
        })


        }
      
      </ol>
    </div> 
    
    <div className='maths'>
      <div className='zero'> <h1>{state}</h1></div>
    <button onClick={()=>dispatch({type:"increase"})} type="button" className="btn btn-primary btn-sm">INCREMENT</button> <br/>
<button onClick={()=>dispatch({type:"reset"})} type="button" className="btn btn-secondary btn-sm">RESET</button>
<button onClick={()=>dispatch({type:"decrease"})} type="button" className="btn btn-primary btn-sm">DECREMENT</button>
</div>

    </div> 
    
    
    </ThemeProvider>
  )
}

export default UseReducer