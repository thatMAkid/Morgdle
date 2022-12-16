import WordRow from './WordRow'

export default function App() {
  return (
    <div className='mx-auto w-96'>
      <header className="border-b border-gray-500 pb-2 mb-2">
        <h1 className="text-4xl text-center">Reacdle</h1>
      </header>

      <main>
        <WordRow letters={['h', 'e', 'l']} />
        <WordRow letters={['h', 'e', 'l', 'l']} />
        <WordRow letters={['h', 'e', 'l', 'l', 'o']} />
      </main>

    </div>
  )
}