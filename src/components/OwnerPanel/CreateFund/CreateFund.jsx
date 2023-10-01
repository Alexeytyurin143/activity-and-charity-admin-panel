import React, { useState } from 'react'
import styles from './CreateFund.module.scss'
import { requestPostFund } from '../../../redux/main-reducer'
import { connect } from 'react-redux'

const CreateFundComponent = ({requestPostFund}) => {
    const [fundForm, setFundForm] = useState({
        fundname: '',
        checkingAccount: 0,
        inn: 0,
        description: '',
    })

    const submitHandler = (e) => {
        e.preventDefault()
        let newFund = {
            fundname: fundForm.fundname,
            checkingAccount: Number(fundForm.checkingAccount),
            inn: Number(fundForm.inn),
            description: fundForm.description,
        }
        requestPostFund(newFund)
        console.log(newFund)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.header}>Создание фонда</div>
            <input
                className={styles.input}
                onChange={(e) => {
                    setFundForm({ ...fundForm, fundname: e.target.value })
                }}
                type='text'
                placeholder='Введите название фонда'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setFundForm({ ...fundForm, inn: e.target.value })
                }}
                type='text'
                placeholder='Введите ИНН фонда'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setFundForm({ ...fundForm, checkingAccount: e.target.value })
                }}
                type='text'
                placeholder='Введите расчётный счёт фонда'
            />
            <textarea
                name='description'
                placeholder='Введите описание фонда'
                onChange={(e) => {
                    setFundForm({ ...fundForm, description: e.target.value })
                }}
                cols='30'
                rows='10'
            />
            <button type='submit'>Создать фонд</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    fund: state.main.fund,
})

export const CreateFund = connect(mapStateToProps, { requestPostFund })(CreateFundComponent)
