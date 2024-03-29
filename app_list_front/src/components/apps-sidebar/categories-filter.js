import React, { useContext } from 'react'
import {
  SidebarLinks,
  SidebarLink,
} from 'former-kit'
import ChevronDown from 'emblematic-icons/svg/ChevronDown24.svg'
import ChevronUp from 'emblematic-icons/svg/ChevronUp24.svg'
import ApiContext from '../../contexts/api-context'

const CategoriesFilter = () => {
  const {
    categoriesState,
    clearFilterByCategory,
    filterByCategory,
    setFilterByCategory,
  } = useContext(ApiContext)

  const createOnClickHandle = name => (
    name === filterByCategory
      ? clearFilterByCategory
      : () => setFilterByCategory(name)
  )

  return (
    <SidebarLinks>
      <SidebarLink
        title="Filter by Categories"
        beginExpanded
        icons={{
          collapse: <ChevronUp height={12} width={12} />,
          expand: <ChevronDown height={12} width={12} />,
        }}
      >
        {
          categoriesState.data.map(name => (
            <SidebarLink
              active={name === filterByCategory}
              key={name}
              title={name}
              onClick={createOnClickHandle(name)}
            />
          ))
        }
      </SidebarLink>
    </SidebarLinks>
  )
}

export default CategoriesFilter
