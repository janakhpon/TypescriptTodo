import React from 'react'
import Grid from '@material-ui/core/Grid'
import PageListItem from '../ListItem'
import PageListForm from '../ListForm'
import styles from './index.module.scss'
function PageList() {
    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12} className={styles.listform}>
                <PageListForm />
            </Grid>
            <Grid item xs={12} className={styles.listitem}>
                <PageListItem />
            </Grid>
        </Grid>
    )
}


export default PageList