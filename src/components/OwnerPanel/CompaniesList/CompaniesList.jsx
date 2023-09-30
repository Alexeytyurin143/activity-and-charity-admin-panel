import React, { useEffect } from 'react'
import styles from './CompaniesList.module.scss'
import { requestCompanies } from '../../../redux/main-reducer'
import { connect } from 'react-redux'

const Companies = ({ companies, requestCompanies }) => {
    useEffect(() => {
        requestCompanies()
    }, [])

    return (
        <div className={styles.companies}>
            {companies.length > 0 ? (
                companies.map((company) => (
                    <div key={company.id} className={styles.list__item}>
                        <div>Компания: {company.companyname}</div>
                    </div>
                ))
            ) : (
                <div className={styles.nothing}>Нет компаний</div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    companies: state.main.companies,
})

export const CompaniesList = connect(mapStateToProps, { requestCompanies })(Companies)
