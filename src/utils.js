export const generateStats = (data) => {
  let competitors = new Set();
  let stats = [];
  for (const match of data) {
    competitors.add(match.blue[0]);
    competitors.add(match.red[0]);
    let index = stats.findIndex((val) => match.blue[0] === val.name);
    if (index === -1) {
      stats.push({
        name: match.blue[0],
        opponents: {}
      });
    }
    index = stats.findIndex((val) => match.red[0] === val.name);
    if (index === -1) {
      stats.push({
        name: match.red[0],
        opponents: {}
      });
    }
    index = stats.findIndex((val) => match[match.winner][0] === val.name);
    const loser = match.winner === "blue" ? "red" : "blue";
    stats[index].opponents[match[loser][0]] =
      stats[index].opponents[match[loser][0]] + 1 || 1;
  }
  competitors = [...competitors];
  return [competitors, stats];
};

export function createDate(date) {
  let month = date.slice(0, 2);
  let day = date.slice(2, 4);
  let year = date.slice(4);
  return month + "-" + day + "-" + year;
}
