import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  primary: {
    marginRight: theme.spacing.unit * 2
  },
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  }
})

class ButtonBar extends Component {

  render() {
    const {classes, id, handleClickLike, handleClickUnlike} = this.props;

    return (
      <div className={classes.spaceTop}>
        <Button className={classes.primary}>
          Delete
        </Button>
        <Button //variant="contained"
          size="small" color="primary" onClick={() => handleClickUnlike(id)} className={classes.button}>
          Unlike
        </Button>
        <Button //variant="contained"
          size="small" color="secondary" onClick={() => handleClickLike(id)} className={classes.button}>
          Like
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);