import React from 'react'


const style = {

    selected : selected => ({
        backgroundColor : selected ? '#fafafa' : 'transparent',
        borderBottom: 'solid 1px black',
        padding :  '10px 5px 0px 0px',
        cursor : 'pointer',
    })
        
}




export default class CategoriesList extends React.Component{
     
    render(){
    
        const { categories, handleClick } = this.props
     
        return(
            <ul>
                {categories.map(x => 
                <li 
                    style= {style.selected(x.selected)}
                    key={x.id}
                    onClick = {()=> handleClick(x.id)}
                    
                    >{x.name}</li> )}
            </ul>

        )
    }
}