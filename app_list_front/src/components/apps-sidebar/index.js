import React from 'react'
import {
  Sidebar,
  SidebarLinks,
} from 'former-kit'
import CategoriesFilter from './categories-filter'

const AppsSidebar = () => (
  <Sidebar>
    <SidebarLinks>

      <CategoriesFilter />

    </SidebarLinks>
  </Sidebar>
)

export default AppsSidebar
