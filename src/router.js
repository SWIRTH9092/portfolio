//---------------------------------------
//   import dependencies
//---------------------------------------
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  }  from "react-router-dom"
  
  //---------------------------------------
  //   Router Paths
  //---------------------------------------
  const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Index />}>
            </Route>)
  )
  
  //---------------------------------------
  //   Export Router Definition
  //---------------------------------------
  export default router;