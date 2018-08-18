import React from 'react'

export default class NewsForm extends React.Component{
    
    state = {
        value: '',
    }

    handleChange = e =>{
        const { value } = e.target
        this.setState({ value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { handleSubmit, categoryId } = this.props
        handleSubmit(categoryId, this.state)
        e.target.reset()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' placeholder = 'Agregar Noticia'/>
                <button type = 'submit'>Enviar</button>
            </form>
            
        )
    }
}