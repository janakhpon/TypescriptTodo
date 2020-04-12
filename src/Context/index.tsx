import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { todoType } from '../Types'
import * as URL from '../Constants'

export const Context = createContext({})

export const ContextProvider = (props: any) => {

    const [todolist, setTodolist] = useState<todoType[]>([])

    useEffect(() => {

        const getData = async () => {
            let data = await axios.request<todoType[]>({
                method: 'get',
                url: URL.MAIN_URL
            })
            setTodolist(data.data)
        }

        try {
            getData()
        } catch (err) { }

    }, [])


    return (
        <Context.Provider value={[todolist, setTodolist]}>
            {props.children}
        </Context.Provider>
    )
}