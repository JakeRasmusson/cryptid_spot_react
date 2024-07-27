import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


import App from './App.jsx'
import './index.css'

const apolloClient = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error / >,
    children: []
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider  client={apolloClient} >
    <RouterProvider router={router} />
  </ApolloProvider>
)
