import { io } from "socket.io-client";
const socket = io("https://work-match-server.vercel.app/");
export default socket;