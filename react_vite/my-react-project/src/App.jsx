import HelloWorld from "./components/Helloworld"
import ParaGraphPage from "./components/paragraph"
import NewLearn from "./components/NewLearn"
import LearnProps from "./components/LearnProps"
import LearnEvents from "./components/LearnEvents"
import LearnLifting_up from "./components/LearnLifting_up"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/CounterApp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChildA from "./components/ChildA"
import { createContext, useState } from "react"
import LearnUseRef from "./components/LearnUseRef"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnInlineCSS from "./components/LearnInlineCSS"
import LearnLoadingImages from "./components/LearnLoadingImages"
import LearnForms from "./components/LearnForms"

const StockContext = createContext()
const UserContext = createContext()



function App() {
  let price = 200
  let stock = "Apple"
  const [user,setUser] = useState({name:'Prodip',isLogin : 'Yes'});
  let getStock = (data) =>{
    console.log(data)

  }
  // create,provider and consumer

  return (
    
    <>
     {/* <h1>Learn React</h1>  */}
     {/* <HelloWorld />
     <ParaGraphPage />
     <NewLearn /> */}
     {/* <LearnProps stock="Apple" price={price} />
      */}
    {/* <LearnEvents/> */}
    {/* <LearnLifting_up getStock={getStock} /> */}
    {/* <LearnUseState /> */}
    {/* <CounterApp /> */}
    {/* <LearnUseEffect /> */}
    {/* <LearnUseMemo />
      */}
    {/* <ChildA stock={stock}/> */}
    {/* <StockContext.Provider value={{stock,price}}>
    <UserContext.Provider value={{user,setUser}}>
    <ChildA />
    </UserContext.Provider>
    </StockContext.Provider>
    <ChildA /> */}
    {/* <LearnUseRef/> */}
    {/* <LearnCustomHooks /> */}
    {/* <LearnConditionalRendering /> */}
    {/* <LearnMap /> */}
    {/* <LearnInlineCSS /> */}
    {/* <LearnLoadingImages /> */}
    <LearnForms />
   
    
    
    </>
  )
}

export default App
export {StockContext,UserContext}
