import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
// import { Formik } from 'formik'
import * as Yup from 'yup';
import { Grid, TextField, Paper, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const style = theme => ({
    container: {
        display: 'flex',
        // width: '100%',
        justifyContent: 'center',
        margin: "80px 160px"

    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '40px 25px',
        margin: '120px 80px'
    },
    input: {
        // width: '100%',
    },
    contentWrapper: {
        display: 'flex',
        // width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    formWrapper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

class Login extends Component {
    render() {
        const { classes, dispatch } = this.props
        return (
            <div className={classes.container}>
                <Grid container>
                    <Grid xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.contentWrapper}>
                                <Typography className={classes.textTitle}>Sign In</Typography>
                            </div>
                            <div className={classes.formWrapper}>
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    label="Username"
                                    inputProps={{ 'aria-label': 'bare' }}
                                    className={classes.input}
                                />
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    label="Password"
                                    inputProps={{ 'aria-label': 'bare' }}
                                    className={classes.input}
                                />
                                <Button component={Link} to="/dashboard" variant="contained" color="primary">Login</Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps)(withStyles(style)(Login))