class League {

    constructor(name, teams=[], rounds=1){
        this.name = name;
        this.teams = teams;
        this.rounds = rounds;
        this.matchDaySchedule = [];
    }
}
const NFLTeams = ["Minnesota Vikings", "Washington Football Team"]
const nfl = new League("NFL", NFLTeams);

for (const team of nfl.teams){
    console.log(team);
}