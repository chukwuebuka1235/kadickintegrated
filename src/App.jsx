import React from 'react'
import Homebody from "./Homebody.jsx"
import Navlayout from './layout/Navlayout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Support from './Support.jsx'
import Getstarted from './Getstarted.jsx'
import Faqs from './Faqs.jsx'
import Requirements from './Requirements.jsx'
import Jointeam from './Jointeam.jsx'
import Privacy from './Privacy.jsx'
import Terms from './Terms.jsx'
import Applynow from './Applynow.jsx'
import BecomeAgent from './BecomeAgent.jsx'
import Notfound from './layout/Notfound.jsx'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navlayout/>}>
          <Route index element={<Homebody />} /> 
          <Route path="getstarted" element={<Getstarted/>} />
          <Route path="support" element={<Support />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="apply-now" element={<Applynow />} />
          <Route path="join-team" element={<Jointeam />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="becomeagent" element={<BecomeAgent />} />
          <Route path='/*' element={<Notfound />} />
      </Route>
    )
  )


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
