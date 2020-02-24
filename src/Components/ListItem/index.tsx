import React, { StatelessComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import moment from 'moment'
import { SerRep, ServerResponse } from '../../Types'

import styles from './index.module.scss'
export interface PageListItemProps {
    task: SerRep
}

const PageListItem: StatelessComponent<PageListItemProps> = ({ task }) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <h4>{task.text}</h4>
                <p>{moment(task.date, 'x').fromNow()} </p>
            </Grid>
            <Grid item xs={4}>
                <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                    <Box p={1} width={1}>
                        <EditRoundedIcon />
                    </Box>
                    <Box p={1} width={1}>
                        <DeleteRoundedIcon />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}


export default PageListItem