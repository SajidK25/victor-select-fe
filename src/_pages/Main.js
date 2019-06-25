import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
//import Signin from '../_pages/signin'
import { Questionaire } from '../Questionaire'
import edQuestionaire from '../Questionaire/edQuestionPaths'
import sleepQuestionaire from '../Questionaire/sleepQuestionPaths'
import hairQuestionaire from '../Questionaire/hairQuestionPaths'
//import Checkout from '../_pages/Checkout'

const styles = () => ({
  app: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})

class Main extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <Switch>
          {/* //<Route path="/signin" render={() => <Signin />} />
          //<Route path="/checkout" render={() => <Checkout />} /> */}
          <Route
            path="/visit/ed"
            render={() => <Questionaire questionaire={edQuestionaire} />}
          />
          <Route
            path="/visit/sleep"
            render={() => <Questionaire questionaire={sleepQuestionaire} />}
          />
          <Route
            path="/visit/hair"
            render={() => <Questionaire questionaire={hairQuestionaire} />}
          />
        </Switch>
      </div>
    )
  }
}

let connectedMain = withStyles(styles)(Main)
connectedMain = withRouter(connectedMain)
export { connectedMain as Main }
