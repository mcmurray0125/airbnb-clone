import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

/*
Challenge:

- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
          //Hero//

  const cardElements = data.map(i => {
    return (
      <Card
          key={i.id}
          rating={i.stats.rating}
          reviewCount={i.stats.reviewCount}
          img={i.coverImg}
          title={i.title}
          description={i.description}
          price={i.price}
          stats={i.stats}
          location={i.location}
          openSpots={i.openSpots}
          />
    )
  })
  return (
    <div>
        <Navbar/>
        <section className='cards-list'>
        {cardElements}
        </section>
    </div>
  )
}
