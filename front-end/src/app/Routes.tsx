import { ReactElement } from 'react';
import { Stack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Dashboard } from 'pages/Dashboard';

const MyRoutes = (): ReactElement => {
  return (
      <Stack>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
      </Stack>
  );
}

export default MyRoutes;