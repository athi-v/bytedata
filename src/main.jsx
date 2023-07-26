import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {router} from './routes'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider>
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
    </ChakraProvider>
)