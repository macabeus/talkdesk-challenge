import React, { useContext } from 'react'
import { Card, CardContent } from 'former-kit'
import ApiContext from '../../contexts/api-context'
import AppRow from './app-row'
import style from './style.css'

const AppList = () => {
  const { appsListState } = useContext(ApiContext)

  const apps = appsListState.data.apps.map(i => (
    <Card key={i.id} className={style.cardApp}>
      <CardContent>
        <AppRow
          name={i.name}
          description={i.description}
          categories={i.categories}
          subscriptions={i.subscriptions}
        />
      </CardContent>
    </Card>
  ))

  return apps
}

export default AppList
