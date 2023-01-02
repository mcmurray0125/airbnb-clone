import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


export default function App() {
  
  const cardElements = data.map(i => {
    return (
      <Card
          key={i.id}
          item={i}
          />
    )
  })
  return (
    <div>
        <Navbar/>
        <Hero/>
        <section className='cards-list'>
        {cardElements}
        </section>
    </div>
  )
}
