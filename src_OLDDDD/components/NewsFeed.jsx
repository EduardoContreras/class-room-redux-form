import React from 'react'

const styles = {
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  li: {
    borderBottom: 'solid 1px #eee',
    padding: '10px 5px',
    cursor: 'pointer',
  }
}

export default class NewsFeed extends React.Component {
  render() {
    const { news } = this.props

    return (
      <ul style={styles.ul}>
        {news.map(x =>
          <li
            style={styles.li}
            key={x.id}
          >
            {x.text}
          </li>)}
      </ul>
    )
  }
}