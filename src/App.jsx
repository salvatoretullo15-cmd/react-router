import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Chisiamo from './pages/Chisiamo'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/chisiamo" element={<Chisiamo/>}/>
            <Route path="/prodotti" element={<Prodotti/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
