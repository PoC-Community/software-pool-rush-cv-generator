import { Grid, GridItem, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { TopBar } from 'components/Bar/TopBar';
import CvCard from 'components/Card/CvCard';
import { ReactElement, useEffect, useState } from 'react';
import Cv from 'Types/Cv';

const Dashboard = () : ReactElement => {

    const listCv = async () : Promise<Cv[]> => {
        try {
            const res = await axios.get(`http://localhost:8080/cvs`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            });
            return res.data;
        } catch(error) {
            console.log(error);
            return [];
        }
    };

    const [cv, setCv] = useState<Cv[]>([]);

    useEffect(() => {
        (async () => {
            setCv(await listCv());
        })();
    }, []);

    return (
        <Stack>
            <TopBar/>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    {cv.map((element) => (
                         <GridItem w="100%" h="100%" key={element.uuid}><CvCard cv={element} actualisationCv={() => (async () => {
                            setCv(await listCv());
                        })()} /></GridItem>
                    ))}
            </Grid>
        </Stack>
    )
}

export { Dashboard };
