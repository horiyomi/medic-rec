import React, { Component } from 'react'
import { Paper, Typography } from '@material-ui/core';
import Data from './a'
import { withStyles } from '@material-ui/styles';

const style = theme => ({
    container: {
        padding: '30px 30px'
    }
}
)

class Report extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <Typography>Report</Typography>
                {/* <Data /> */}
            </div>
        )
    }
}

export default withStyles(style)(Report)