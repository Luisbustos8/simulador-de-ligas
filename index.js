class League {

    constructor(name, teams=[], rounds=1){
        this.name = name;
        this.teams = teams;
        this.rounds = rounds;
        this.matchDaySchedule = [];
    }
}

const nfl = new League("NFL");
console.log(nfl);