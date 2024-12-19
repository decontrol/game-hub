import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
function App() {
	return (
		<div>
			<Button disabled>
				<Loader2 className='animate-spin' />
				Please wait
			</Button>
		</div>
	);
}

export default App;
