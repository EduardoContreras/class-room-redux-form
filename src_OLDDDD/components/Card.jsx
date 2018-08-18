import React from 'react'

const styles = {
  card: {
    backgroundColor: '#fff',
    border: 'solid 1px #ccc',
    borderRadius: '4px',
    padding: '10px 15px',
    margin: '10px',
  }
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={styles.card}>
        {this.props.children}
      </div>
    )
  }
}