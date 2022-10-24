import {FaBell} from 'react-icons/fa'
import {BiExit} from 'react-icons/bi'

export default function Messages(){
const MsgQty = 0

    return (
        <div className='messages'>
            <FaBell className='icons'/>
            <span className='msj-qty'>{MsgQty}</span>
            <BiExit className='icons'/>
        </div>
    )
}