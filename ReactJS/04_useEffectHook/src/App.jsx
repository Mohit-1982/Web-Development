import { useEffect, useState } from "react";


const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function getUsers() {
        const response = await fetch(`https://api.github.com/users?per_page=${count}`);
        const data = await response.json();

        setUsers(data);
      }

    getUsers();
  }, [count]);
  
function handleCount(e) {
  setCount(e.target.value);
}

  return (
    <div className="flex justify-center items-center flex-wrap gap-5 bg-black h-screen w-full text-white text-2xl">
      <input className="" type="number" value={count} onChange={handleCount}/>
      {
        users.map((user) => {
          return (
            <img key={user.id} className="hover:scale-115 rounded-2xl transition-transform" src={user.avatar_url} alt="images" />
          )
        })  
      }
    </div>
  )
}

export default App










//Infinite Recursion so prefer useEffect hook for this 
// const App = () => {

//   const [times, setTimes] = useState(1);
//   const [users, setUsers] = useState([]);

//   async function getUsers() {
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();

//     setUsers(data);
//     console.log(`mohit ${times}`);
//     setTimes(prev => prev + 1);
//   }

//   // getUsers();

//   return (
//     <div className="flex justify-center items-center flex-wrap gap-5 bg-black h-screen w-full text-white text-2xl">
//       {
//         users.map((user) => {
//           return (
//             <img className="hover:scale-115 rounded-2xl transition-transform" src={user.avatar_url} alt="images" />
//           )
//         })  
//       }
//     </div>
//   )
// }

// export default App;