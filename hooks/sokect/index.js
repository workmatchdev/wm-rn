import { io } from "socket.io-client";
const socket = io("http://192.168.134.1:4000");
export default socket;