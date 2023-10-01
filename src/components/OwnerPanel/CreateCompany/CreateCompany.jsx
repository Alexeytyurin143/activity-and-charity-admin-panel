import React, { useState } from 'react'
import styles from './CreateCompany.module.scss'
import { requestPostCompany } from '../../../redux/main-reducer'
import { connect } from 'react-redux'

const CreateCompanyForm = ({requestPostCompany}) => {
    const [companyForm, setCompanyForm] = useState({
        companyname: '',
        password: '',
        employees: [],
    })

    const submitHandler = (e) => {
        e.preventDefault()
        requestPostCompany(companyForm)
        console.log(companyForm)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.header}>Создание компании</div>
            <input
                className={styles.input}
                onChange={(e) => {
                    setCompanyForm({ ...companyForm, companyname: e.target.value })
                }}
                type='text'
                placeholder='Введите название компании'
            />
            <input
                className={styles.input}
                onChange={(e) => {
                    setCompanyForm({ ...companyForm, password: e.target.value })
                }}
                type='text'
                placeholder='Введите пароль для админ-панели компании'
            />
            <button type='submit'>Создать компанию</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    company: state.main.company,
})

export const CreateCompany = connect(mapStateToProps, { requestPostCompany })(CreateCompanyForm)
