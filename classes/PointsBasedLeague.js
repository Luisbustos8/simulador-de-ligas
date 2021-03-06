import League from "./League.js"
import { LOCAL_TEAM, AWAY_TEAM } from "./League.js"


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
    generateGoals(){
         return Math.round( Math.random() * 10 )
    }
    play(match) { //
       const homeGoals = this.generateGoals()
       const awayGoals = this.generateGoals()
       return {
           homeTeam: match[LOCAL_TEAM],
           homeGoals,
           awayTeam: match[AWAY_TEAM],
           awayGoals
       }

    }
    getTeamForName(name){
        return this.teams.find(team => team.name ==name)
    }
    updateTeams(result){
        
        const homeTeam = this.getTeamForName(result.homeTeam)
        const awayTeam = this.getTeamForName(result.awayTeam)

        homeTeam.goalsFor += result.homeGoals
        homeTeam.goalsAgainst += result.awayGoals
        awayTeam.goalsFor += result.awayGoals
        awayTeam.goalsAgainst += result.homeGoals

        if (result.homeGoals > result.awayGoals) {
            homeTeam.points += this.config.pointsPerWin
            homeTeam.matchesWon += 1
            awayTeam.points += this.config.pointsPerLose
            awayTeam.matchesLost += 1
        }else if (result.homeGoals < result.awayGoals){
            awayTeam.points += this.config.pointsPerWin
            awayTeam.matchesWon += 1
            homeTeam.points += this.config.pointsPerLose
            homeTeam.matchesLost += 1
        }else{
            homeTeam.points += this.config.pointsPerDraw
            homeTeam.matchesDrawn += 1
            awayTeam.points += this.config.pointsPerDraw
            awayTeam.matchesDrawn += 1
        }
        
    }
    getStandings(){
        this.teams.sort(function(teamA, teamB) {
            if (teamA.points > teamB.points){
                return -1
            }else if (teamA.points < teamB.points){
                return 1
            }else{
                const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst
                const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst
                if (goalsDiffA > goalsDiffB) {
                    return -1
                }else if(goalsDiffA < goalsDiffB){
                    return 1
                }else{
                    return 0
                }
            }
        })
        console.log("Standings")
        console.table(this.teams)
        
    }
}