import { Stack } from '@chakra-ui/react';
import axios from 'axios';
import { TopBar } from 'components/Bar/TopBar';
import CvCard from 'components/Card/CvCard';
import { ReactElement, useEffect, useState } from 'react';
import Cv from 'Types/Cv';

const Dashboard = () : ReactElement => {

    const listCv = async () : Promise<Cv[]> => {
        try {
            const res = await axios.get('http://localhost:8080/cvs');
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
            {cv.map((element) => (
				<CvCard cv={element} />
			))}
        </Stack>
    )
}

export { Dashboard };
