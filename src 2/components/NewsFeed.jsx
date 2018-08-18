import React from 'react'

export default class NewsFeed extends React.Component{
    render(){
        const { news } = this.props
        console.log(news)
        
        return(
            <ul>
              {news.map(x=><li key={x.id}>{x.text}</li>)}
            </ul>
            
        )
    }
}