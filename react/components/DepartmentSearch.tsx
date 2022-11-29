import React from 'react';
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDeparmentGroup.graphql"
import DepartmentGroup from "./DepartmentGroup"
import { useState } from "react"
import { SearchBar } from "vtex.store-components"
import { useCssHandles } from 'vtex.css-handles'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("");
  const CSS_HANDLES = [
    "departmentSearch__categories"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  console.log("mis datos", data?.categories[0]?.children)
  console.log("mi slug", slug)

  return loading
    ?
    <div className={handles["departmentSearch__categories"]}>
      Loading ...
    </div>
    :
    <div className='flex flex-column'>
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Ques buscas para tu mascota?"
        displayMode="search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch
