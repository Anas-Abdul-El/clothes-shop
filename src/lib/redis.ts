import { createClient } from 'redis';

if (!process.env.REDIS_PORT)
    throw Error("there is an error in caching")

const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
    }
});

client.on("error", (err) => console.error("Redis error:", err));

await client.connect();

export {
    client
}