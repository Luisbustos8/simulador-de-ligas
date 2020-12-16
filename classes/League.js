
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
        return this.teams.map(team => team.name)
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
    setAwayTeams(){
        const teamNames = this.getTeamNames()
        const maxAwayTeams = this.teams.length -2 
        let teamIndex = maxAwayTeams
        this.matchDaySchedule.forEach(matchDay => {
            let isFirstMatch = true
            matchDay.forEach(match => {
                if (isFirstMatch){
                    isFirstMatch = false
                }else{
                    match[AWAY_TEAM] = teamNames[teamIndex]
                    teamIndex--
                    if (teamIndex <0) {
                        teamIndex = maxAwayTeams
                    }
                }
            })
        })
    }
    fixLastTeamSchedule(){
        let matchDayNumber = 1
        const teamNames = this.getTeamNames()
        const lastTeamName = teamNames[teamNames.length -1]
        this.matchDaySchedule.forEach(matchDay => {
            const firstMatch = matchDay[0]
            // Establecer el último equipo de la lista como visitante o local alternativamente
            if (matchDayNumber % 2 == 0) { // juega en casa
                firstMatch[AWAY_TEAM]= firstMatch[LOCAL_TEAM]
                firstMatch[LOCAL_TEAM] = lastTeamName
            }else{ // juega como vistante
                firstMatch[AWAY_TEAM] = lastTeamName
            }
            matchDayNumber++
        })
    }
    scheduleMatchDays(){
        this.initSchedule()
        this.setLocalTeams()
        this.setAwayTeams()
        this.fixLastTeamSchedule()

        
    }
}
