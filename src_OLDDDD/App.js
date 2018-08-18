import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserForm } from './components'
import * as usersActions from './ducks/Users'

const styles = {
  container: {
    backgroundColor: '#efefef',
    display: 'flex',
    flexFlow: 'column wrap',
    height: '100vh',
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  column: width => ({
    display: 'flex',
    flexFlow: 'column wrap',
    flex: width,
  }),
}

class App extends Component {
  render() {
    const { createUser } = this.props
    return (
      <div style={styles.container}>
        <UserForm initialValues={{ name: 'Chanchito', lastname: 'feliz' }} onSubmit={createUser} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  createUser: usersActions.createUser,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
