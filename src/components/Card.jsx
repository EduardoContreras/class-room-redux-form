import React from 'react'

const style = {
    card: {
    border: 'solid 1px black',
    borderRadius: '4px',
    backgroundColor: '#eee',
    padding: '15px',
    margin: '15px',
}}

export default class Card extends React.Component{
    render(){
        return(
            <div style = {style.card}>
            {this.props.children}
            </div>
        )
    }
}