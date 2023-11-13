import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import useSesion from '../../../../../hooks/sessions/useSession';
import socket from '../../../../../hooks/sokect';
import { useIsFocused } from '@react-navigation/native';

const useChatList = () => {

    const [error, setError] = useState(null);
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);

    const isFocused = useIsFocused();

    const {
        user
    } = useSesion();

    const updateMessageWhenResiveMessage = (message) => {
        const { chatId } = message;
        const updateChat = chats.map(chat => {
            if (chat.chat === chatId) {
                chat.lastMessages = [message];
                chat.counterMessagesNoView = Number(chat.counterMessagesNoView) + 1;
            }
            return chat
        })
        setChats(updateChat);
    }

    useEffect(() => {
        socket.on('message', (msg) => {
            updateMessageWhenResiveMessage(msg)
        });
        return () => {
            socket.off('message')
        }
    }, [updateMessageWhenResiveMessage])


    useEffect(() => {
        const getChats = async () => {
            try {
                if (!user) return null
                setLoading(true);
                const response = await axios.get(`https://work-match-server.vercel.app/api/chats/getChats/${user._id}`);
                const data = response.data;
                setChats(data.data)
                setLoading(false);
                setError(null)
            } catch (error) {
                setLoading(false);
            }
        }
        if (isFocused) getChats()
    }, [user, isFocused])

    const handleUpdateMessageStatus = async (chatId) => {
        try {
            const query = await axios.get(`https://work-match-server.vercel.app/api/chats/updateMessageStatus/${chatId}/${user._id}`)
            return query
        } catch (error) {
            console.log('error');
        }
    }

    return {
        chats,
        loading,
        error,
        handleUpdateMessageStatus
    };
}

export default useChatList;