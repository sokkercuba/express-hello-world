import { Box } from '@mui/material/'
import { lazy, ReactNode, Suspense } from 'react'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages'
import { Footer } from '../components'
import PrivateRoute from './PrivateRoute'
import AppFallback from '../components/AppFallback'
import { ResponsiveDrawer } from '../components/Navigation'

const SignIn = lazy(() => import('../components/SignIn'))
// const SignUp = lazy(() => import('../components/SignUp'))
const TeamPage = lazy(() => import('../pages/team/TeamPage'))
const AboutPage = lazy(() => import('../pages/about/AboutPage'))
const ContactPage = lazy(() => import('../pages/contact/ContactPage'))
const NotFoundPage = lazy(() => import('../pages/404/NotFoundPage'))

interface SuspenseProps {
  children: ReactNode
}
const SuspenseWrapper = ({ children }: SuspenseProps) => (
  <Suspense fallback={<AppFallback />}>{children}</Suspense>
)

export const AppRouter = () => (
  <BrowserRouter>
    <ResponsiveDrawer>
      <Box
        sx={{
          p: 3,
          display: 'flex',
          height: '100vh',
          flexDirection: 'column'
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/about"
            element={
              <SuspenseWrapper>
                <AboutPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <SuspenseWrapper>
                <ContactPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/404"
            element={
              <SuspenseWrapper>
                <NotFoundPage />
              </SuspenseWrapper>
            }
          />

          <Route
            path="/login"
            element={
              <SuspenseWrapper>
                <SignIn />
              </SuspenseWrapper>
            }
          />

          {/* <Route
            path="/signup"
            element={
              <SuspenseWrapper>
                <SignUp />
              </SuspenseWrapper>
            }
          /> */}

          <Route path="/team" element={<PrivateRoute />}>
            <Route
              path="/team"
              element={
                <SuspenseWrapper>
                  <TeamPage />
                </SuspenseWrapper>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Box>
      <Footer />
    </ResponsiveDrawer>
  </BrowserRouter>
)
