import React from 'react'
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'


const App = () => {

const getData = (data) => { console.log('data received::::::',data) }

let fname = 'lobna'


  return (
    <div>
<Child1 fname={fname} lname='drissi' getData={getData}/>
<Child2 />



    </div>
  )
}

export default App