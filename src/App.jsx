import data from '../data.json';
import Comments from './Comments';

function App() {
  return (
    <main className='min-h-screen flex items-center'>
      <Comments data={data}/>
    </main>
  )
}

export default App