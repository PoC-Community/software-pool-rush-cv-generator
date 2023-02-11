import { ReactElement } from 'react';
import { Stack } from '@chakra-ui/react';
import { TopBar } from 'components/Bar/TopBar';

const Dashboard = () : ReactElement => {
    return (
        <Stack>
            <TopBar/>
        </Stack>
    )
}

export { Dashboard };
