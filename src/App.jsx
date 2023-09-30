import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { OwnerPanel } from './components/OwnerPanel/OwnerPanel'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='App'>
                    <Routes>
                        <Route path='/adminpanel' Component={OwnerPanel} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
