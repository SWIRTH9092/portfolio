//---------------------------------------
//   import dependencies
//---------------------------------------
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  }  from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import ProjectsSkills from "./pages/ProjectsSkills"
import ContactAbout from "./pages/ContactAbout"
  
  //---------------------------------------
  //   Router Paths
  //---------------------------------------
 
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route path="" element={<Index />}  />
          <Route path="projectsskills" element={<ProjectsSkills />}  />
          <Route path="contact-about" element={<ContactAbout />}  />
      </Route>)
)
  
  //---------------------------------------
  //   Export Router Definition
  //---------------------------------------
  export default router;