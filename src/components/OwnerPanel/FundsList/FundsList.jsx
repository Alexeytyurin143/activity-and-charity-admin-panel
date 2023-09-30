import React, { useEffect } from 'react'
import styles from './FundsList.module.scss'
import { requestFunds } from '../../../redux/main-reducer'
import { connect } from 'react-redux'

const Funds = ({ funds, requestFunds }) => {
    useEffect(() => {
        requestFunds()
    }, [])

    return (
        <div className={styles.companies}>
            {funds.length > 0 ? (
                funds.map((fund) => (
                    <div key={fund.id} className={styles.list__item}>
                        <div>Фонд: {fund.fundname}</div>
                    </div>
                ))
            ) : (
                <div className={styles.nothing}>Нет фондов</div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    funds: state.main.funds,
})

export const FundsList = connect(mapStateToProps, { requestFunds })(Funds)
