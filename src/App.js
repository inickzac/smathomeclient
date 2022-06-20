import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Management from './pages/management/Management'
import Statistics from './pages/statistics/Statistics'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/management" element={< Management />} />
                <Route path="/statistics" element={< Statistics />} />
            </Routes>
        </>
    )
}

export default App