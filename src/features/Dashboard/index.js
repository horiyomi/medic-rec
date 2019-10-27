import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import Chart from '../../shared/Layout/Chart';
import Deposits from '../../shared/Layout/Deposits';
import PatientOrders from '../../shared/Layout/patientInfo';
import RecordDialog from '../RecordModal';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 280,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
})


class Dashboard extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({ open: !this.state.open})
    }
    render() {
        const { classes } = this.props
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            <Chart />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    {/* <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits />
                        </Paper>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <PatientOrders handleClickOpen={this.handleOpen} />
                        </Paper>
                    </Grid>
                </Grid>
                <RecordDialog open={this.state.open} handleClickOpen={this.handleOpen} />
            </Container>
        )
    }
}

export default withStyles(styles)(Dashboard)