import Routers from "./Routers/Routers"
import Footer from "./layout/footer/Footer"
import Header from "./layout/header/Header"


function App() {


  return (
    <div className="container">
      <Header />
        <Routers />
      <Footer />
    </div>
  )
}

export default App
