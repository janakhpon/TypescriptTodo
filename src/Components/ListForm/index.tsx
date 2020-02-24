import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import { ServerData } from '../../Types'
import * as go from '../../Constants'

import styles from './index.module.scss'

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#bf1a2f',
        color: '#ffffff',
        margin: 2
    },

    btn1: {
        backgroundColor: '#02c39a',
        color: '#ffffff',
        margin: 2,
    },
    Dialog: {
        background: '#46494C',
        color: '#ffffff',
    },
    Dialogcontent: {
        maxWidth: '100%',
        background: '#46494C',
        color: '#ffffff',
    },
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
        color: '#fff',
    },
    formLabel: {
        color: '#fff',
        '&.Mui-focused': {
            color: 'rgb(0, 124, 128)'
        }
    },
});


function PageListForm() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
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

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <>
            <Grid container spacing={2} className={styles.container}>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="row" p={1} m={1}>
                        <Box p={1}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.btn1}
                                startIcon={<AddIcon />}
                                onClick={handleOpen}
                            >
                                New
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    classes: {
                        root: classes.Dialog
                    }
                }}
            >
                <DialogTitle id="alert-dialog-slide-title">Edit and Save your Data carefully!</DialogTitle>
                <DialogContent className={classes.Dialogcontent}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="input-with-icon-grid" label="create todo task/context here ..." fullWidth
                                InputProps={{ className: classes.underline }} InputLabelProps={{ className: classes.formLabel }} className={styles.searchbox}
                                value={text}
                                onChange={(e) => setText(e.target.value)} onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        addTodo(text)
                                        setOpen(false)
                                    }
                                }} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.btn}>
                        CANCEL
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default PageListForm