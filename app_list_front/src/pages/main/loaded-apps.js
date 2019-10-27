import React, { useContext } from 'react'
import { Card, CardContent, Layout } from 'former-kit'
import ApiContext from '../../contexts/api-context'
import AppListRow from '../../components/app-list-row'
import AppsSidebar from '../../components/apps-sidebar'
import style from './style.css'

const LoadedApps = () => {
  const { appsListState } = useContext(ApiContext)

  const apps = appsListState.apps.map(i => (
    <Card key={i.id} className={style.cardApp}>
      <CardContent>
        <AppListRow
          name={i.name}
          description={i.description}
          categories={i.categories}
          subscriptions={i.subscriptions}
        />
      </CardContent>
    </Card>
  ))

  return (
    <Layout sidebar={<AppsSidebar />}>
      {apps}
    </Layout>
  )
}

export default LoadedApps
