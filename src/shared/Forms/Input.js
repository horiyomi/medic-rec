import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {}

export const InputField = (props) => {
    return (
        <TextField
            {...props}
            margin="normal"
            variant="outlined"
            inputProps={{ 'aria-label': 'bare' }}
        />
    )
}


