import React, { useState, useEffect, StatelessComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import PageListItem from '../ListItem'
import PageListForm from '../ListForm'
import { todoType } from '../../Types'
import * as go from '../../Constants'
import styles from './index.module.scss'


const PageList = () => {
    const [todolist, setTodolist] = useState<todoType[]>([])

    const getData = async () => {
        let data = await axios.request<todoType[]>({
            method: 'get',
            url: go.MAIN_URL
        })
        setTodolist(data.data)
    }

    useEffect(() => {
        try {
            getData()
        } catch (err) {

        }
    }, [])
    
    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12} className={styles.listform}>
                <PageListForm />
            </Grid>
            <Grid item xs={12} className={styles.listitem}>
                {
                    todolist.map((task, key) => {
                        return <PageListItem task={task} key={key} />
                    })
                }
            </Grid>
        </Grid>
    )
}


export default PageList