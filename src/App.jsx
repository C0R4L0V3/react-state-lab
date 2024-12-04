import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zombies from './assets/ZombieFighters/ZombieFighters.jsx'
import Money from './assets/PlayerMoney/PlayerMoney.jsx'
import Team from './assets/PlayerTeam/team.jsx'

// src/App.jsx
const App = () => {


// hooks need to be declared inside the component fuction body
const [team, setTeam ]= useState([])
const [money, setMoney] = useState(100)
const [totalStr, setTotalStr] = useState(0)
const [totalAgi, setTotalAgi] = useState(0)


// const [zombieFighters, setZombieFighters] = useState([
//   {
//     name: 'Survivor',
//     price: 12,
//     strength: 6,
//     agility: 4,
//     img: 'https://via.placeholder.com/150/92c952',
//   },
//   {
//     name: 'Scavenger',
//     price: 10,
//     strength: 5,
//     agility: 5,
//     img: 'https://via.placeholder.com/150/771796',
//   },
//   {
//     name: 'Shadow',
//     price: 18,
//     strength: 7,
//     agility: 8,
//     img: 'https://via.placeholder.com/150/24f355',
//   },
//   {
//     name: 'Tracker',
//     price: 14,
//     strength: 7,
//     agility: 6,
//     img: 'https://via.placeholder.com/150/d32776',
//   },
//   {
//     name: 'Sharpshooter',
//     price: 20,
//     strength: 6,
//     agility: 8,
//     img: 'https://via.placeholder.com/150/1ee8a4',
//   },
//   {
//     name: 'Medic',
//     price: 15,
//     strength: 5,
//     agility: 7,
//     img: 'https://via.placeholder.com/150/66b7d2',
//   },
//   {
//     name: 'Engineer',
//     price: 16,
//     strength: 6,
//     agility: 5,
//     img: 'https://via.placeholder.com/150/56acb2',
//   },
//   {
//     name: 'Brawler',
//     price: 11,
//     strength: 8,
//     agility: 3,
//     img: 'https://via.placeholder.com/150/8985dc',
//   },
//   {
//     name: 'Infiltrator',
//     price: 17,
//     strength: 5,
//     agility: 9,
//     img: 'https://via.placeholder.com/150/392537',
//   },
//   {
//     name: 'Leader',
//     price: 22,
//     strength: 7,
//     agility: 6,
//     img: 'https://via.placeholder.com/150/602b9e',
//   },
// ]);

//handler to calculate total agility
const calcTotalAgi = (team) => {
  return team.reduce((total, member) => total + member.agility, 0)
};

//handler to calculate total strength
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const calcTotalStr = (team) => {
  return team.reduce((total, member) => total + member.strength, 0)
};

//handler for adding a fighter
const handleAddFighter = (fighter) => {
  // try {
  //not loking the ternary?
    // money >= fighter.price ? setTeam([...team, fighter]), setMoney(money - fighter.price) : console.log('Not enough Money');
    if( money >= fighter.price){
      //simplifying
      //merging the team spreeead and fighter to be added, and putting it in a varible to be reused
      const updateTeam = [...team, fighter]
      setTeam(updateTeam);//updates team
      setMoney(money - fighter.price)//updates money
      setTotalStr(calcTotalStr(updateTeam))//updates total strength
      setTotalAgi(calcTotalAgi(updateTeam))//updates agility
    } else {
      console.log('Not enough Money');
      
    }
  };

// handler to remove a fighter and adjust values
const handleRemoveFighter = (fighterIndex) => {
  //filter creates a new array so it does not directly impact the state of any current array
  // _ This is the first parameter (which would normally represent the element itself), but in this case, it’s not used. It’s a common pattern when you don’t need the value of the element but just the index. The underscore (_) is a placeholder that indicates you’re intentionally ignoring this parameter.
  // the updated team will be put in a varible and will be filtered through the array index. if the index does not match the fightIndex(the fighter we are removing), then that index will get added to the new array
  //having it in a varible will allow me to recall this to setTeam, calcTotalStr, and calcTotalAgi
  const updateTeam = team.filter((_, index) => index !== fighterIndex );
  setTeam(updateTeam);
  //to add the amount back to the total, all is needed is to add the team[index of hte fight were are removing"fighterIndex"].price and add that value to money, and set it
  setMoney(money + team[fighterIndex].price)
  setTotalStr(calcTotalStr(updateTeam));
  setTotalAgi(calcTotalAgi(updateTeam));

};



  return (
    <>
    <Team team={team} teamStr={totalStr} teamAgi={totalAgi} handleRemoveFighter={handleRemoveFighter}/>
    <Money money={money}/>
    <Zombies handleAddFighter={handleAddFighter}/>
      {/* <<h2>Zombie Fighters</h2>
      <ul>
        {zombieFighters.map((zombie, index) => (
          <li key={index}>
          <img src={zombie.img} alt={zombie.name}></img>
          <h3>{zombie.name}</h3>
          <p><strong>Price: </strong>{zombie.price}</p>
          <p><strong>Strength: </strong>{zombie.strength}</p>
          <p><strong>Agility: </strong>{zombie.agility}</p>

        </li>

        ))}
      </ul>> */}
    
    </>

  );
}

export default App

