export const teamName = (name) => {
    return name.replace(/(FC|AFC)/g, "").trim();
}