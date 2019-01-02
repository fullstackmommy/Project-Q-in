import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: '#E6ECFF',
    color: 'black'
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backButton: {
    marginRight: theme.spacing.unit * 2,
  }
})

class CardItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: 20 }}>
        <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
            <div>
              <Avatar className={classes.avatar}>
                <DescriptionIcon />
              </Avatar>
            </div>
            <div style={{ alignSelf: 'baseline', marginLeft: 80 }}>
              <div style={{ display: 'inline-block' }}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Months
                </Typography>
                <Typography variant="h6" gutterBottom>
                  4 month(s)
                </Typography>
              </div>
              <div style={{ display: 'inline-block', marginLeft: 40 }}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Creation date
                </Typography>
                <Typography variant="h6" gutterBottom>
                  01 February 2019
                </Typography>
              </div>
              <div style={{ display: 'inline-block', marginLeft: 40 }}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  Amount
                </Typography>
                <Typography variant="h6" gutterBottom>
                  6,600 USD
                </Typography>
              </div>
            </div>
            <div style={{ width: '30%', textAlign: 'right', marginLeft: 50, alignSelf: 'flex-end' }}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                Other Amount
              </Typography>
              <Typography variant="h4" gutterBottom>
                Once a month
              </Typography>
              <div style={{ marginTop: 24 }}>
                <Button
                  onClick={() => null}
                  className={classes.backButton}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ background: '#182841', color: 'white' }}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(CardItem);