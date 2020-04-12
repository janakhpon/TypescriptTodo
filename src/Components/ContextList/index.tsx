import React, { useState, useEffect, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import PageContextListItem from '../ContextListItem'
import PageContextListForm from '../ContextListForm'
import { todoType } from '../../Types'
import * as go from '../../Constants'
import { Context } from '../../Context'
import styles from './index.module.scss'


const PageContextList = () => {
    const [todolist] = useContext<any>(Context)

    return (
        <Grid container spacing={4} className={styles.container}>
            <Grid item xs={12} className={styles.listform}>
                <PageContextListForm />
            </Grid>
            <Grid item xs={12} className={styles.listitem}>
                {
                    todolist.map((task: todoType, key: any) => {
                        return <PageContextListItem task={task} key={key} />
                    })
                }
            </Grid>
        </Grid>
    )
}


export default PageContextList