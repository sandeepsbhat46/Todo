import React from 'react'
import './listitem.css'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'



function ListItem(props){
    const items=props.items
    const listitems=items.map(item=>{
        return(
            <div className='list' key={item.key}>
                <p>
                    <input type='text' id={item.key} value={item.text} onChange={(e)=>{
                        props.setUpdate(e.target.value, item.key)
                    }}/>
                   {/* <span>
       
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span> */}
                </p>
            </div>
        )
    })
    return <div>
                    {listitems }
        </div>
}
export default ListItem