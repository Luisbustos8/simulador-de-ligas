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
nfl.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        const home = match[0] != null ? match[0] : 'DESCANSA'
        const away = match[1] != null ? match[1] : 'DESCANSA'
        console.log(`${home} vs ${away}`)
    })
    i++
})



// Comenzar la liga
nfl.start()
i = 1
nfl.summaries.forEach(summary => {
    console.log(`RESUMEN JORNADA ${i}`)
    summary.results.forEach(result => {
        console.log(`${result.homeTeam} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeam}`)
    })
    console.table(summary.standings)
    i++
})


