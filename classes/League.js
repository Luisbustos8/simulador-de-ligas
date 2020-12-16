export default class League { // Creamos la clase liga.

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