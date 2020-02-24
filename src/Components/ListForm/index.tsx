import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import { TodoFormProps, todoType, ServerData, ServerResponse } from '../../Types'
import * as go from '../../Constants'

import styles from './index.module.scss'

const useStyles = makeStyles({
    underline: {
        // normal style
        "&::before": {
            borderBottom: "1px solid #06D648"
        },
        // hover style
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #DFEF4C"
        },
        // focus style
        "&::after": {
            borderBottom: "3px solid red"
        },

        background: 'transparent',
        color: '#000',
    },
    formLabel: {
        color: '#000',
        '&.Mui-focused': {
            color: '#d90429'
        }
    },
})


function PageListForm() {
    const classes = useStyles();
    const [text, setText] = useState<string>('')

    const addTodo = async (text: string) => {
        try {
            await axios.request<ServerData>({
                method: 'post',
                url: go.MAIN_URL,
                data: { text }
            })
        } catch (err) {

        }
    }

    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12}>
                <TextField id="input-with-icon-grid" label="todo task/context here ..." fullWidth
                    InputProps={{ className: classes.underline }} InputLabelProps={{ className: classes.formLabel }} className={styles.searchbox}
                    onChange={(e) => setText(e.target.value)} onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addTodo(text)
                        }
                    }} />
            </Grid>
        </Grid>
    )
}


export default PageListForm