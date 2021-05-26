import React, { useState, useMemo } from 'react'
import api from '../../services/api'


import './styles.css'

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null)
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault()
        
        const data = new FormData()
        const user_id = localStorage.getItem('user')

        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard')
    }

    return (
        <>
        </>
    )
}