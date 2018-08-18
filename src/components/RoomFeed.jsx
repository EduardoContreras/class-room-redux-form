import React from 'react'
import Card from './Card'

export default class RoomFeed extends React.Component{
    
    render(){
        const { rooms, handleClick } = this.props
        console.log('ROOMS DESDE PROPS .... ', rooms);
        
        return(
            <ul>
              {rooms.map(x=>
                <li key={x.id} onClick={handleClick}>
                    <Card>
                        {x.text}
                    </Card>
                </li>)}
            </ul>            
        )
    }
}