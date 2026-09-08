let teams = [
    {
        id:1,
        tname: "Code Acers",
        tl: "Aryan Dubey",
        email:"aru@gmail.com",
        members:6,
    },
    {
        id:2,
        tname: "Dev Tech",
        tl: "Jagriti",
        email: "jags@gmail.com",
        members:5,
    }
];

let nextid = 3;
const getAllTeams = () => teams;
export const getTeamByid = (id) => teams.find((team) => team.id === id);
export const addTeam = (newteam) => {
    const team = { id: nextId++, newTeam};
    teams.push(team);
    return team;
};
export const updateTeambyid = (id, u_team) => {
    const team = getTeamByid(id);
    if(!team) return null;
    Object.assign(team, u_team);
    return team;
};
export const deleteTeam = (id) => {
    const index = teams.findIndex((team)=> team.id === id);
    if(index == -1) return false;
    teams.splice(index, 1);
    return true;
};
