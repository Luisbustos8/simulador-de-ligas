import League from "./classes/League.js"
import nflLeague from "./classes/PointsBasedLeague.js"

import { nflTeams } from "./teams.js"
const config = { rounds: 2, pointsPerWin: 3 };
const nfl = new nflLeague("NFL", nflTeams, config); // Otra consts con el nombre de la liga. 


const teamNames = nfl.teams.map(team => team.name)
/*
teamNames.forEach(function(equipo){
    console.log(equipo)
})
*/

nfl.scheduleMatchDays()

let i = 1

nfl.matchDaySchedule.forEach(matchday => {
    console.log(`WEEK ${i}`)
    matchday.forEach(match => {
        console.log(match.join(" VS "))
    })
    i++
})
