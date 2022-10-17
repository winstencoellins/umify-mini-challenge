import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Heading from "./components/Heading"
import Navigation from "./components/Navigation"
import Reviews from "./components/Reviews"


export default function App() {
  return (
    <div>
      <Navigation />
      <Heading />
      <Features />
      <Reviews />
      <GetStarted />
      <Faq />
      <Footer />
    </div>
  )
}