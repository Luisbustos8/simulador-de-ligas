import League from "./League.js"


export default class PointsBasedLeague extends League {
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