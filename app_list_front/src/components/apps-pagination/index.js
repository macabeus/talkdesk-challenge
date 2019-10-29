import React, { useContext } from 'react'
import { Pagination } from 'former-kit'
import ChevronBack from 'emblematic-icons/svg/ChevronBack24.svg'
import ChevronForward from 'emblematic-icons/svg/ChevronForward24.svg'
import ApiContext from '../../contexts/api-context'

const AppsPagination = () => {
  const { appsListState, page, setPage } = useContext(ApiContext)

  if (appsListState.data.metadata.pagesCount <= 1) {
    return null
  }

  return (
    <Pagination
      currentPage={page + 1}
      totalPages={appsListState.data.metadata.pagesCount}
      onPageChange={newPage => setPage(newPage - 1)}
      icons={{
        next: <ChevronForward height={12} width={12} />,
        previous: <ChevronBack height={12} width={12} />,
      }}
    />
  )
}

export default AppsPagination
