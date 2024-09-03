import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="grid justify-between p-5">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>

  )
}