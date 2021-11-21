import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import './App.css';
const Todo = lazy(() => import('./todo'))
const Footer = lazy(() => import('./layout/Footer'))
const Header = lazy(() => import('./layout/Header'))
const Sidebar = lazy(() => import('./layout/Sidebar'))


function App() {
  const { Content } = Layout
  return (
    <>
      < BrowserRouter>
        <Suspense fallback={<Spin />}>
          <Layout style={{
            minHeight: '100vh'
          }}
          >
            <Sidebar />
            <Layout>
              <Header />
              <Content style={{ backgroundColor: "#f5f6fa", margin: '0 16px', borderRadius: "4px" }} >
                <Routes>
                  <Route path="/" element={<Todo />} />
                </Routes>
              </Content>
              {/* <Footer /> */}
            </Layout>
          </Layout>
        </Suspense >
      </BrowserRouter>
    </>
  )
}

export default App;
