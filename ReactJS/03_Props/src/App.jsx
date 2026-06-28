import './index.css';
import Card from './Card.jsx';

function App() {

  let myObj = {
    name: "Bakasur Rakshas",
    age: 150000000,
    DOB: "10/09/AC-1431",
    Married: false,
    Bio: "A Yound child eager to become a web developer not actually a web developer but a person who want to know the depth of how computer and everything works how ai works"
  };
{/* these are props which we pass inside the function which we are calling */}
  return (
    <>
      <Card name="mohit" newObj={myObj}/>
    </>
  )
}

export default App
