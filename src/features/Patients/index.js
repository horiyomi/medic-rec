import React, { Component } from 'react'
import Table from "./table";
import { withStyles } from "@material-ui/core/styles"
import { Grid, TextField, IconButton, InputBase, Paper, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Patients extends Component {
    filter = () => {

    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <div>
                    <Typography>Patients</Typography>
                </div>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Paper className={classes.searchWrapper}>
                                <IconButton className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Patient Record"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    onChange={this.filter}
                                />
                            </Paper>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                    <Table />
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    container: {
        margin: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    searchWrapper: {
        padding: '5px 5px',
        margin: '10px'
    }
})

export default withStyles(styles)(Patients)