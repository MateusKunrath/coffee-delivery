import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

function Appzin() {
  return <h1>App</h1>
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Appzin />} />
      </Route>
    </Routes>
  )
}
