import NavBar from './components/NavBar';

function App() {
	return (
		<div className='wrapper'>
			<NavBar></NavBar>
			<aside className='aside'>
				<h2>Aside</h2>
			</aside>
			<main className='main'>
				<h2>Main</h2>
			</main>
		</div>
	);
}

export default App;
