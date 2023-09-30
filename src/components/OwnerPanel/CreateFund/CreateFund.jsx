import React, { useState } from 'react'
import styles from './CreateFund.module.scss'

export const CreateFund = () => {
    const [fund, setFund] = useState({
        fundname: '',
        password: '',
        checkingAccount: 0,
        inn: 0,
        description: '',
    })

    const submitHandler = (e) => {
        e.preventDefault()
        let newFund = {
            fundname: fund.fundname,
            password: fund.password,
            checkingAccount: Number(fund.checkingAccount),
            inn: Number(fund.inn),
            description: fund.description,
        }
        console.log(newFund)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.header}>Создание фонда</div>
            <input
                className={styles.input}
                onChange={(e) => {
                    setFund({ ...fund, fundname: e.target.value })
                }}
                type='text'
                placeholder='Введите название фонда'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setFund({ ...fund, password: e.target.value })
                }}
                type='text'
                placeholder='Введите пароль для админ-панели фонда'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setFund({ ...fund, inn: e.target.value })
                }}
                type='text'
                placeholder='Введите ИНН фонда'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setFund({ ...fund, checkingAccount: e.target.value })
                }}
                type='text'
                placeholder='Введите расчётный счёт фонда'
            />
            <textarea
                name='description'
                placeholder='Введите описание фонда'
                onChange={(e) => {
                    setFund({ ...fund, description: e.target.value })
                }}
                cols='30'
                rows='10'
            />
            <button type='submit'>Создать фонд</button>
        </form>
    )
}
