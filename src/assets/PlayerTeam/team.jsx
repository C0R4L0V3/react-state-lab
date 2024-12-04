 
 
 const Team = ({ team, teamStr, teamAgi, handleRemoveFighter }) => {

    return (
        <>
        <div>
            <h2>Your Team</h2>
            <h4>Team Strength: {teamStr}</h4>
            <h4>Team Agility: {teamAgi}</h4>
            <ul>
                {/* wrapped the ternary for readability */}
                {team.length === 0 ? ( 
                    <p>Pick Some Team Members</p>
                 ) : ( 
                    team.map (( fighter, index ) => (
                    <li key={index}>
                        <img src={fighter.img} alt={fighter.name}></img>
                        <h3>{fighter.name}</h3>
                        <p><strong>Price: </strong>{fighter.price}</p>
                        <p><strong>Strength: </strong>{fighter.strength}</p>
                        <p><strong>Agility: </strong>{fighter.agility}</p>
                        <button onClick={() => handleRemoveFighter(index)}>Remove Fighter</button>
                    </li>
                    ))
                )}
            </ul>
        </div>
        </>
    )


 }

 export default Team;