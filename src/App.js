import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import Dashboard from './view/dashboard'
import Students from './view/students'
import Groups from './view/groups'
import Error from './view/error'
import { Sidebar } from './components'

import './App.css'

function App() {
    const { dark_mode } = useSelector(state => state.changeTheme)
    const theme = createTheme({ palette: { mode: dark_mode ? 'dark' : 'light' } })

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Suspense fallback={<h1>Loading</h1>}>
                    <Sidebar>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/students' element={<Students />} />
                            <Route path='/teams' element={<Groups />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </Sidebar>
                </Suspense>
            </Router>
        </ThemeProvider>
    )
}

export default App
