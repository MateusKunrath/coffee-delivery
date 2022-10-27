import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OurCoffees } from './pages/OurCoffees'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<OurCoffees />} />
      </Route>
    </Routes>
  )
}
