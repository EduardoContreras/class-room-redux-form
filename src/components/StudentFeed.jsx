import React from 'react'
import Card from './Card'

export default class StudentFeed extends React.Component{
    
    render(){
        const { students, handleClick } = this.props
        console.log('STUDENT DESDE PROPS .... ', students);
        
        return(
            <ul>
                <Card>
                  {students.map(x=>
                      <li key={x.id} onClick={handleClick}>                            
                        {x.text}
                      </li>)}
                  </Card>
            </ul>            
        )
    }
}