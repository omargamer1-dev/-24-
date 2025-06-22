// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1359942136467820785",
        serverId: "1133285493778436136",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
    {
        channelId: "1359942136467820785",
        serverId: "1133285493778436136",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
