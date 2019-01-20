export const teamName = name => {
  return name.replace(/(FC|AFC)/g, "").trim();
};

export const findCoachInSquad = squad => {
  let coach = [];

  if (!squad || squad.length === 0) {
    return false;
  }

  coach = squad.filter(man => {
    return man.role === "COACH";
  });

  return coach[0];
};
