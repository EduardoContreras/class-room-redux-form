import React from 'react'

const styles = {
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  selected: selected => ({
    backgroundColor: selected ? '#eee' : 'transparent',
    borderBottom: 'solid 1px #eee',
    padding: '10px 5px',
    cursor: 'pointer',
  })
}

export default class CategoriesList extends React.Component {
  render() {
    const { categories, handleClick } = this.props

    return (
      <ul style={styles.ul}>
        {categories.map(x =>
          <li
            style={styles.selected(x.selected)}
            key={x.id}
            onClick={() => handleClick(x.id)}
          >
            {x.name}
          </li>)}
      </ul>
    )
  }
}