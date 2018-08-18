import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { NewsForm, CategoriesList, NewsFeed, Card } from './components'
import { bindActionCreators } from 'redux';
import * as categoriesActions from './ducks/Categories'
import * as newsActions from './ducks/News'
import { RoomForm } from './components'


const style = {
  container:{
    display : 'flex',
    flexFlow: 'column wrap',
  },
  
  row:{
    display : 'flex',
    flexFlow: 'row wrap',
  },

  colum : width => ({
    display: 'flex',
    flexFlow: 'column wrap',
    justifiyContent: 'space-evenly',
    flex: width,
  }),
}


class App extends Component {
  render() {
    const { createUser } = this.props
    const { categories, news, selectCategory, addNews, selectedCategory } = this.props
    console.log(news)
    return (
      <div style={style.container}>
        <div style={style.row}>
          <div style = {style.colum(1)}></div>
          <div style = {style.colum(2)}>
            <Card><NewsForm
              handleSubmit= {addNews}
              categoryId={selectedCategory.id}
            /></Card>

            <Card>
              <RoomForm initialValues={{ name: 'Chanchito', lastname: 'feliz' }} onSubmit={createUser} />
            </Card>
          </div>
        </div>

        <div style={style.row}>
          <div style= {style.colum(1)}>
            <Card><CategoriesList handleClick = {selectCategory} categories = {categories}/></Card>
          </div>
          <div style={style.colum(2)}>
            <Card><NewsFeed news = {news}/></Card>
          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Categories : { data: categories }} = state; 
  const { News : { data: news }} = state;

  const selectedCategory = categories.find(x=>x.selected)
  const filteredNews = news.filter(x =>
    x.categoryId === selectedCategory.id)

  return {
    categories,
    selectedCategory,
    news: filteredNews,

  }
}

const mapDispatchToProps = dispatch => bindActionCreators( {
  ...categoriesActions,
  ...newsActions,
},dispatch,)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
