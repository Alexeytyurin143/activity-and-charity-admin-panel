import React, { useEffect } from 'react'
import styles from './EmployeesList.module.scss'
import { requestUsers } from '../../../redux/main-reducer'
import { connect } from 'react-redux'

const Employees = ({ users, requestUsers }) => {
    useEffect(() => {
        requestUsers()
    }, [])

    return (
        <div className={styles.employees}>
            <div className={styles.title}>Список пользователей</div>
            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user.id} className={styles.list__item}>
                        <div>
                            <div>Имя пользователя: {user.username}</div>
                            <div>e-mail: {user.email}</div>
                        </div>
                        <div>
                            <div>Благотворительный фонд: {user.charity}</div>
                            <div>Компания: {user.company}</div>
                        </div>
                        <div>
                            <div>Активность: {user.activity}</div>
                            <div>Баланс: {user.balance}</div>
                        </div>
                        <div>
                            <div>Роль: {user.role}</div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={styles.nothing}>Нет пользователей</div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.main.users,
})

export const EmployeesList = connect(mapStateToProps, { requestUsers })(Employees)
