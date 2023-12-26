import { useState, useEffect, useRef } from 'react';
import { Button, Text } from 'react-native';
import Layout from '../../components/Layout/Layout';
import SwipeCard from '../../components/SwipeCard/swipeCard';
import SelectJob from '../../components/SelectJob';
import useSession from '../../hooks/sessions/useSession';
import axios from 'axios';

const Home = () => {
    const { isBussiness, user } = useSession();
    const [currentJob, setcurrentJob] = useState(null);
    const [listJobs, setListJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await axios.get(`http://192.168.134.1:4000/api/jobs/${user._id}`);
                const data = response.data;
                const formatterJobs = data.map(jobs => {
                    return {
                        value: jobs._id,
                        label: jobs.title
                    }
                })
                setListJobs(formatterJobs);
            } catch (error) {
                console.log('error', error);
            }
        }
        if (isBussiness) getJobs()
    }, [isBussiness, user])

    

    return (
        <Layout>
            {isBussiness ? <SelectJob items={listJobs} setcurrentJob={setcurrentJob} currentJob={currentJob} /> : null}
            {isBussiness && !currentJob ? <Text
                style={{
                    textAlign: 'center',
                    fontSize: 18,
                    padding: 15
                }}
            > Selecciona una vacante para poder ver los matchs disponibles. </Text> :
                <SwipeCard currentJob={currentJob} />}
        </Layout>
    );
}

export default Home;