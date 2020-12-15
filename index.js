class League { // Creamos la clase liga.

    constructor(name, teams=[], rounds=1){ //Constructor con sus parametros;
        this.name = name;
        this.teams = teams;
        this.rounds = rounds;
        this.matchDaySchedule = [];
    }
}

class PointsBasedLeague extends nfl {
    constructor (name, teams=[], rounds=1, pointsPerWin=3, pointsPerDraw=1, pointsPerLose=0){
        super(name, teams, rounds);
        this.pointsPerWin = pointsPerWin;
        this.pointsPerDraw = pointsPerDraw;
        this.pointsPerLose = pointsPerLose;
    }
}
const NFLTeams = ["Minnesota Vikings", "Washington Football Team"] // Una Const con el nombre de los equipos.
const nfl = new PointsBasedLeague("NFL", NFLTeams); // Otra consts con el nombre de la liga. 


for (const team of nfl.teams){
    console.log(team);
}