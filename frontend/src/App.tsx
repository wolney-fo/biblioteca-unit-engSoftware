import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SupportButton from "./components/SupportButton"

function App() {
  return (
    <>
      <Header />

      <main>
        <section className='searchBar'>
          <div className="content">
            <SearchBar />
          </div>
        </section>
      </main>

      <SupportButton />
      <Footer />
    </>
  )
}

export default App
