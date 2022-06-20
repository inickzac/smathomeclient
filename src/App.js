import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Management from './pages/management/Management'
import Statistics from './pages/statistics/Statistics'
import Pages from './pages/Pages'

function App() {
    return (
        <>
            <Routes>
                <Route path= {Pages.dashboard} element={<Dashboard/>} />
                <Route path= {Pages.login} element={<Login />} />
                <Route path= {Pages.management} element={< Management />} />
                <Route path= {Pages.statistics} element={< Statistics />} />
            </Routes>
        </>
    )
}

export default App