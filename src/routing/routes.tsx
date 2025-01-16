import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import GameDetailPage from '@/pages/GameDetailPage';
import HomePage from '@/pages/HomePage';
import ErrorPage from '@/pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> }, // "path: ''" is the default path so we can just replace it with "index: true"
			{ path: 'games/:id', element: <GameDetailPage /> },
		],
	},
]);

export default router;
