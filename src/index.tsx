import React from 'react'
import ReactDOM from 'react-dom/client'
import ForInvestor from './components/for-investor/ForInvestor'
import './assets/style/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='' element={<ForInvestor />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
