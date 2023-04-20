import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from '@Store';
import { GlobalStyles } from '@Styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<GlobalStyles />
		<App />
	</Provider>
);
