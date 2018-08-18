import React from 'react'

const styles = {
  input: {
    border: '1px solid transparent',
    backgroundColor: '#fff',
    borderColor: '#dbdbdb',
    color: '#363636',
    boxShadow: 'inset 0 1px 2px rgba(10,10,10,.1)',
    maxWidth: '100%',
    width: '100%',
    height: '2.25em',
    lineHeight: 1.5,
    fontSize: '1rem',
    padding: '8',
    margin: '5px 0',
  }
}

export default class Input extends React.Component {
  render() {
    const { input, meta } = this.props
    console.log('EDUARDO ----> ', input.value, meta);
    return (
      <div>
        <input
          {...this.props}
          {...input}
          style={styles.input}
          value={input.value}
          onChange={e => input.onChange(e.target.value)}
        />
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    )
  }
}