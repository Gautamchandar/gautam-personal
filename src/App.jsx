import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';
import CertificateCollection from './Components/CertificateCollection';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element: <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: "/skills",
      element: <div>
        <Navbar/>
        <Skills/>
      </div>
    },
    {
      path: "/projects",
      element: <div>
        <Navbar/>
        <Projects/>
      </div>
    },
    {
      path: "/certificates",
      element: <div>
        <Navbar/>
        <CertificateCollection/>
      </div>
    },
    {
      path: "/contactUs",
      element: <div>
        <Navbar/>
        <ContactUs/>
      </div>
    }
  ]
)

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
