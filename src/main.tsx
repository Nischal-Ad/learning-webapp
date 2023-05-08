import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from '@Store';
import { GlobalStyles } from '@Styles/GlobalStyle';
import { SnackbarProvider } from 'notistack';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<GlobalStyles />
		<SnackbarProvider
			maxSnack={1}
			autoHideDuration={1000}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<App />
		</SnackbarProvider>
	</Provider>
);
