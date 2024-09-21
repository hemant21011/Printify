import React from 'react'
import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Hero from './component/Hero'
import Investment from './component/investment/Investment'
import Carousel from './component/caraousel/Carousel'
import Ideas from './component/Ideas'
import Pricing from './component/Pricing'
import CardSection from './component/Card/CardSection'
import Footer from './component/Footer'

function AppLayout() {
  return(
   <>
     <Navbar />
     <Hero />
     <Investment />
     <Carousel />
     <Ideas />
     <Pricing />
     <CardSection />
     <Footer />
   </>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />
  },
])


const App = () => {
  return <RouterProvider router={appRouter} />
}

export default App