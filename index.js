import League from "./classes/League.js"
import nflLeague from "./classes/PointsBasedLeague.js"

import { nflTeams } from "./teams.js"
const config = { rounds: 2, pointsPerWin: 3 };
const nfl = new nflLeague("NFL", nflTeams, config); // Otra consts con el nombre de la liga. 
console.log("CONFIG", nfl.config)

for (const team of nfl.teams){
    console.log(team);
}