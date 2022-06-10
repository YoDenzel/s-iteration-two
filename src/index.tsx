import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import './index.scss';
import { App } from './app/App';
import { store } from './redux/store';
import './fonts/Roboto/Roboto-Black.ttf';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import './fonts/Roboto/Roboto-Medium.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';
import { AppThemeProvider } from './shared/ui/theme';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const queryClient = new QueryClient();

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <CookiesProvider>
                <App />
              </CookiesProvider>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </AppThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
