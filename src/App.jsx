import data from '../data.json';
import Comments from './Comments';

function App() {
  return (
    <main className='min-h-screen flex items-center'>
      <h1 className='hidden'>Interactive Comments Section</h1>
      <Comments data={data}/>
    </main>
  )
}

export default App