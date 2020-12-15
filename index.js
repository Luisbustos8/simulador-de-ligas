class League { // Creamos la clase liga.

    constructor(name, teams=[], config={}){ //Constructor con sus parametros;
        this.name = name;
        this.teams = teams;
        this.matchDaySchedule = [];

       
        this.setup(config);
        
    }
    setup(config){
        const defaultConfig = { rounds: 1 }
        this.config = Object.assign(this.defaultConfig, config);
        
    }
}


class PointsBasedLeague extends League {
    constructor (name, teams=[], config={}){
        super(name, teams, config);
    }
    
    setup(config){
        const defaultConfig = {
            rounds: 1,
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0
        }
        this.config = Object.assign(defaultConfig, config)
    }
}
const NFLTeams = ["Minnesota Vikings", "Washington Football Team"] // Una Const con el nombre de los equipos.
const config = { rounds: 2, pointsPerWin: 3 };
const nfl = new PointsBasedLeague("NFL", NFLTeams, config); // Otra consts con el nombre de la liga. 
console.log("CONFIG", nfl.config)

for (const team of nfl.teams){
    console.log(team);
}