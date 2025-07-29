import Card from './Components/Card'
import Counter from './Components/Counter'
import MyForm from './Components/form/MyForm'
import Greetings from './Components/Greetings'
import  './index.css'


function App() {
  
  return (
    <div>
    <Greetings />
    <Counter />
    <Card />
    <MyForm  onAddProduct={(product)=> console.log("Added Product", product)}
    />
    {/* <list/> */}
 
    </div>
  )
}

export default App
