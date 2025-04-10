import {useContext} from 'react'
import { StockContext,UserContext } from '../App'

const ChildC = () => {
    const stockData = useContext(StockContext)
    const UserData = useContext(UserContext)
  return (
    <>
    {/* <StockContext.Consumer>
        {
            ({stock,price}) => {
                return (
                    <>
                    <h2>ChildC - {stock}: {price}</h2>
                    </>
                )
            }

        }
    </StockContext.Consumer> */}
    <h2>ChildC - {UserData.user.name}: {UserData.user.isLogin}</h2>
    <h2>ChildC - {stockData.stock}: {stockData.price}</h2>
    </>
  )
}

export default ChildC