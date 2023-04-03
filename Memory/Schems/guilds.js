module.exports = (guild = {id: "!", name: "!"}) => {
    return {
        id: guild.id,
        name: guild.name,
        muted: [],
        prefix: "l/",
        members: {},
        warns: 0,
        pvRooms:[]
    };
};