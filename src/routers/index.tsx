import { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DefaultLayout from '../layout'
import Login from '../views/Login'
import NotFound from '@/views/404'
import routes, { IRoute } from './routes'

function renderRoutes(list: IRoute[], basePath: string):JSX.Element[] {
  return (
    list.reduce((pre:JSX.Element[], item) => {
      if (item.children) {
        pre = pre.concat(renderRoutes(item.children, basePath + '/' + item.path))
      } else if (item.path && item.component) {
        pre.push(
          <Route key={item.path} path={basePath + '/' + item.path} element={
            <Suspense fallback={null}>
              <item.component />
            </Suspense>
          }>
          </Route>
        )
      }
      return pre
    }, [])
  );
}

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to='/index' />} />
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<DefaultLayout />}>
          {
            renderRoutes(routes, '')
          }
          <Route path='404' element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to='/404' />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router