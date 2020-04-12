import React, { StatelessComponent, useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import moment from 'moment'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Context } from '../../Context'
import * as go from '../../Constants'
import { SerRep, ServerData, todoType } from '../../Types'

import styles from './index.module.scss'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        background: 'transparent',
    },
    btn: {
        backgroundColor: '#bf1a2f',
        color: '#ffffff',
        margin: theme.spacing(2),
    },
    btn1: {
        backgroundColor: '#02c39a',
        color: '#ffffff',
        margin: theme.spacing(2),
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
}));


export interface PageContextListItemProps {
    task: SerRep
}

const PageContextListItem: StatelessComponent<PageContextListItemProps> = ({ task }) => {
    const [updateopen, setUpdateopen] = useState(false)
    const [setTodolist] = useContext<any>(Context)
    const [text, setText] = useState<string>(task.text)

    const updateTodo = async (text: string) => {
        let url = `${go.URL_BY_ID}${task._id}`
        try {
            let data = await axios.request<ServerData>({
                method: 'put',
                url,
                data: { text }
            })

            if (data) {

                const getData = async () => {
                    let data = await axios.request<todoType[]>({
                        method: 'get',
                        url: go.MAIN_URL
                    })

                    setTodolist(data.data)
                }

                try {
                    getData()
                } catch (err) { }
            }

        } catch (err) {

        }
    }

    const classes = useStyles();

    const handleUpdateOpen = () => {
        setUpdateopen(true)
    }

    const handleUpdateClose = () => {
        setUpdateopen(false)
    }
    const deleteTodo = async () => {
        let url = `${go.URL_BY_ID}${task._id}`
        try {
            await axios.request<ServerData>({
                method: 'delete',
                url: url
            })
        } catch (err) {

        }
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <h4>{task.text}</h4>
                    <p>{moment(task.date).fromNow()} </p>
                </Grid>
                <Grid item xs={4}>
                    <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                        <Box p={1} width={1}>
                            <EditRoundedIcon className={styles.editbtn} onClick={handleUpdateOpen} />
                        </Box>
                        <Box p={1} width={1}>
                            <DeleteRoundedIcon className={styles.delbtn} onClick={deleteTodo} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Dialog
                open={updateopen}
                keepMounted
                onClose={handleUpdateClose}
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
                                        updateTodo(text)
                                        setUpdateopen(false)
                                    }
                                }} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateClose} color="primary" className={classes.btn}>
                        CANCEL
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default PageContextListItem