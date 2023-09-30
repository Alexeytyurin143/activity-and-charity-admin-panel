import React from 'react'
import styles from './OwnerPanel.module.scss'
import { CreateCompany } from './CreateCompany/CreateCompany'
import { CreateFund } from './CreateFund/CreateFund'
import { EmployeesList } from './EmployeesList/EmployeesList'
import { CompaniesList } from './CompaniesList/CompaniesList'
import { FundsList } from './FundsList/FundsList'

export const OwnerPanel = () => {
    return (
        <div>
            <div className={styles.creating}>
                <div className={styles.companies}>
                    <CreateCompany />
                    <CompaniesList />
                </div>
                <div className={styles.funds}>
                    <CreateFund />
                    <FundsList />
                </div>
            </div>

            <EmployeesList />
        </div>
    )
}
