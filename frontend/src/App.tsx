import React from 'react'
import { 
  Routes, 
  Route,
  Navigate,
} from 'react-router-dom'
import GetSentiment from './GetSentiment'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<GetSentiment />} />
      </Routes>
    </Layout>
  )
}
