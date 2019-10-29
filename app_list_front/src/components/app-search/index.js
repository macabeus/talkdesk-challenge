import React, { useContext, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Flexbox,
  FormInput,
} from 'former-kit'
import SearchIcon from 'emblematic-icons/svg/Search24.svg'
import ApiContext from '../../contexts/api-context'
import style from './style.css'

const AppSearch = () => {
  const {
    filterByName,
    setFilterByName,
  } = useContext(ApiContext)

  const [inputValue, setInputValue] = useState(filterByName)

  const filterLabel = (
    filterByName
      ? `Filtering by "${filterByName}"`
      : 'No name filter'
  )

  return (
    <Card className={style.cardSearch}>
      <CardContent>

        <FormInput
          label="Search by app name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <Flexbox className={style.footer} alignItems="center">
          <Button
            icon={<SearchIcon height={12} width={12} />}
            onClick={() => setFilterByName(inputValue)}
          >
            Filter by name
          </Button>

          <span>
            {filterLabel}
          </span>
        </Flexbox>

      </CardContent>
    </Card>
  )
}

export default AppSearch
