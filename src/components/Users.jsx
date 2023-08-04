import React from 'react'
import "./Users.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { filterData } from '../features/List'
import { PiUserSquareDuotone} from 'react-icons/pi';
import { GiNothingToSay} from 'react-icons/gi';



const Users = () => {

    const dispatch = useDispatch()
 
    
  const User = useSelector(state => state.list)
   
 console.log(User)

  return (
    <div className='users'>
       {User.length ? (<div className='users'>
        {User.map((x) => {
            return (
                <div className='usercard'>
                    <PiUserSquareDuotone size={70} style={{color:"blue"}}/>
                    <p> Name : {x.name}</p>
                    <p>Email : {x.email}</p>
                    <button onClick={() => dispatch(filterData(x.id))} style={{backgroundColor:"red"}}>BAN USER</button>
                </div>
            )
         })}
       </div>) : (
        <div>
              <p style={{display:"flex",alignItems:"center",gap:"5px"}}><GiNothingToSay size={30}/> User List is Empty</p>
         </div>
     )}
         

    </div>
  )
}

export default Users