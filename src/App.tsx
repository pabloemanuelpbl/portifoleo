import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Projects } from "./components/projects"
import Title from "./components/title"
import myProjects from "./user/projects"

function App() {

  return (
    <>
      <Title />
      <About />
      <Projects projects={myProjects}/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
