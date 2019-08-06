import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <Fragment>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }

                const errorMsg = error && 'El usuario existe o hay algun problema.'

                return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>
          <LoginMutation>
            {
              (login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables }).then(activateAuth)
                }

                const errorMsg = error && 'El usuario no existe o la contraseña es incorrecta.'
                return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
              }
            }
          </LoginMutation>
        </Fragment>
      )
    }
  </Context.Consumer>
)
