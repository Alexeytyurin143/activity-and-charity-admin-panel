import React, { useState } from 'react'
import styles from './CreateCompany.module.scss'

export const CreateCompany = () => {
    const [company, setCompany] = useState({
        companyname: 'string',
        password: 'string',
        employees: [],
    })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(company)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.header}>Создание компании</div>
            <input
                className={styles.input}
                onChange={(e) => {
                    setCompany({ ...company, companyname: e.target.value })
                }}
                type='text'
                placeholder='Введите название компании'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setCompany({ ...company, password: e.target.value })
                }}
                type='text'
                placeholder='Введите пароль для админ-панели компании'
            />
            <button type='submit'>Создать компанию</button>
        </form>
    )
}
