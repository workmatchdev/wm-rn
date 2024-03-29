import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import useSession from "../../../../../hooks/sessions/useSession";
import { useRoute } from "@react-navigation/native";
import socket from "../../../../../hooks/sokect";

const useChat = () => {

    const { user } = useSession();
    const router = useRoute();

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const senderName = useMemo(() =>  router?.params?.name , [ router?.params?.name]);

    useEffect(() => {
        socket.on('message', (msg) => {
            if (router.params.chatId === msg.chat) {
                setMessages([...messages, msg])
            }
        });
        return () => {
            socket.off('message')
        }
    }, [messages, router?.params?.chatId])

    useEffect(() => {
        const getChats = async () => {
            try {
                const response = await axios.get(`https://workmatch-server-0c86658d19cb.herokuapp.com/api/chats/getMessages/${router.params.chatId}`);
                const data = response.data;
                setMessages(data.data)
                setLoading(false);
                setError(null)
            } catch (error) {
                console.log(error);
                setError('Ha ocurrido un error')
                setLoading(false);
            }
        }
        getChats()
    }, [router.params.chatId])


    const handleSubmit = async (values) => {
        try {
            const newMessage = {
                "chatId": router.params.chatId,
                "message": {
                    "content": values.message,
                    "type": "text"
                },
                "sender": user._id
            }

            const response = await axios.post('https://workmatch-server-0c86658d19cb.herokuapp.com/api/chats/sendMessage', newMessage);
            setMessages([...messages, response.data.data])
        } catch (error) {
            alert('Ha ocurrido un error')
        }
    }

    return {
        handleSubmit,
        messages,
        error,
        loading,
        senderName
    };
}

export default useChat;