const LOCAL_TEAM = 0
const AWAY_TEAM = 1


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
    initSchedule(){
        const numberOfMatchDays = this.teams.length -1
        const numberOfMatchesPerMarchDay = this.teams.length / 2
        for (let i = 0; i< numberOfMatchDays; i++){
            const matchDay = []
            for (let j = 0; j < numberOfMatchesPerMarchDay; j++){
                const match = ["Equipo local", "Equipo visitante"]
                matchDay.push(match)
            }
            // Añadidos los partidos a la jornada
            this.matchDaySchedule.push(matchDay) // Añadimos jornada a la planificación
        }

    }
    getTeamNames() {
        const teamNames = this.teams.map(team => team.name)
    }
    setLocalTeams(){
        const teamNames = this.getTeamNames()
        const maxHomeTeams = this.teams.length - 2
        let teamIndex = 0
        this.matchDaySchedule.forEach(matchDay =>{ //Por cada jornada
            matchDay.forEach(match => {
                //establecer el equipo local
                match[LOCAL_TEAM] = teamNames[teamIndex]
                teamIndex++
                if (teamIndex > maxHomeTeams){
                    teamIndex = 0
                }                        
            })
        })

    }
    scheduleMatchDays(){
        this.initSchedule()
        this.setLocalTeams()

        
    }
}
