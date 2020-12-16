class League { // Creamos la clase liga.

    constructor(name, teams=[], config={}){ //Constructor con sus parametros;
        this.name = name;
        
        this.matchDaySchedule = [];


       this.setupTeams(teams);
        this.setup(config);
        
    }
    setup(config){
        const defaultConfig = { rounds: 1 }
        this.config = Object.assign(this.defaultConfig, config);
        
    }
    setupTeams(teamNames) {
        this.teams = []
        for(const teamName of teamNames) {
            const team = this.customizeTeam(teamName)
            this.teams.push(team)
        }
    
        
    }

customizeTeam(teamName) {
    return {
        name: teamName,
        matchesWon: 0,
        matchesDrawn: 0,
        matchesLost: 0
    }
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
    customizeTeam(teamName){
        const customizeTeam = super.customizeTeam(teamName) // Con super hacemos referencia a la clase madre
        //customizeTeam.points = 0
        //customizeTeam.goalsFor = 0
        //customizeTeam.goalsAgainst = 0
        //return customizeTeam
        return {
            points:0,
            goalsFor:0,
            goalsAgainst:0,
            ...customizeTeam
        }

    }
}
const nfcNorth = ["Green Bay Packers", "Chicago Bears", "Minnesota Vikings", "Detroit Lions"]
const nfcEast = ["Washington Redskins", "New York Giants", "Dallas Cowboys", "Philadelphia Eagles"]
const nfcWest = ["Los Angeles Rams", "Seattle SeaHawks", "Arizona Cardinals", "San Francisco 49ers"]
const nfcSouth = ["New Orleans Saints", "Tampa Bay Buccaneers", "Carolina Panthers", "Atlanta Falcons"]
const NFLTeams = [
    ...nfcNorth,
    ...nfcEast,
    ...nfcWest,
    ...nfcSouth
] // Una Const con el nombre de los equipos.
const config = { rounds: 2, pointsPerWin: 3 };
const nfl = new PointsBasedLeague("NFL", NFLTeams, config); // Otra consts con el nombre de la liga. 
console.log("CONFIG", nfl.config)

for (const team of nfl.teams){
    console.log(team);
}