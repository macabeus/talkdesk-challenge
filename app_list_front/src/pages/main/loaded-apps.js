import React from 'react'
import { Layout } from 'former-kit'
import AppList from '../../components/app-list'
import AppsSidebar from '../../components/apps-sidebar'
import AppsPagination from '../../components/apps-pagination'
import './style.css'

const LoadedApps = () => (
  <Layout sidebar={<AppsSidebar />}>
    <AppList />

    <AppsPagination />
  </Layout>
)

export default LoadedApps
