import { useState } from "react"
import data from './data'
import List from './List'

const App = () => {
  const [reset, setReset] = useState(data)
  return(
    <main>
      <section className="displayFrame">
        <h2>{reset.length} Birthdays Today</h2>
        <List reset={reset} />
        {/* {reset.map((person) => {
          const {id, name, age, image} = person
          return(
          <div key={id}>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h4>{age} years</h4>
          </div>
        )})} */}
        <button
          type="button"
          onClick={() => {
            setReset([])
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  )
};
export default App;
