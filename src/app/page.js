import InputForm from '../components/InputForm'
import APIComponent from './APIComponent'

export default async function Home() {
  return (
     <main>
      <h1 className="flex m-5 justify-center text-4xl font-bold">Portfolio Calculator</h1>
      <InputForm />
      {/* We can then pass the props { symbol, allocation, date_from, date_to, initialBalance } to the APIComponent here */}
      <APIComponent />
    </main>
  )
}
