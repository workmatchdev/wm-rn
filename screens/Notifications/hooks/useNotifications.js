import { useEffect, useMemo } from "react";
import socket from "../../../hooks/sokect";
import useSession from "../../../hooks/sessions/useSession";
import axios from "axios";
import useStore from "../store/useStore";

const useNotifications = () => {
    const { user } = useSession();
    const { notifications, setNotifications } = useStore();
    useEffect(() => {
        socket.on('connect', () => {
        });
        socket.on('notification', (notification) => {
            if (notification.user === user._id) {
                setNotifications([notification,...notifications])
            }
        });
        return () => {
            socket.off('notification')
        }
    }, [socket, user, notifications]);

    useEffect(() => {
        const getData = async () => {
            try {
                const query = await axios.get(`https://workmatch-server-0c86658d19cb.herokuapp.com/api/notifications/getNotifications/${user._id}`)
                console.log(query);
                setNotifications(query.data.reverse())
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    const hasNoReadItems = useMemo(() => {
        return notifications.some(notification => !notification.review)
    }, [notifications])

    return {
        notifications,
        hasNoReadItems
    };
}

export default useNotifications;