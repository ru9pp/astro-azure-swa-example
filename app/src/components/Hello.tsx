import * as React from 'react'

export interface IHelloProps {}

const apiHost = import.meta.env.DEV ? 'http://localhost:4280' : 'https://<SWA URL>.azurestaticapps.net'

export const Hello: React.FunctionComponent<IHelloProps> = (props: React.PropsWithChildren<IHelloProps>) => {
  const [name, setName] = React.useState({ firstName: '', lastName: '' })

  const fetchName = async () => {
    const apiUrl = `${apiHost}/api/name`
    try {
      const response = await fetch(apiUrl)
      const { firstName, lastName } = await response.json()
      return { firstName, lastName }
    } catch (error) {
      console.log(error)
      console.log(apiUrl)
      return { firstName: '', lastName: '' }
    }
  }

  React.useEffect(() => {
    const getName = async () => {
      const fetchedName = await fetchName()
      setName(fetchedName)
    }
    getName()
  }, [])

  if (!name.firstName || !name.lastName) {
    return <p>Loading...</p>
  }

  return (
    <p>
      Hello, {name.firstName} {name.lastName}
    </p>
  )
}
