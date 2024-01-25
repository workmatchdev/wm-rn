import { io } from "socket.io-client";
const socket = io("https://workmatch-server-0c86658d19cb.herokuapp.com/");
export default socket;