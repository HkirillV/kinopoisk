import { Providers } from 'app/providers';
import { AppRouter } from 'app/routers';

function App() {
  return (
      <Providers>
        <AppRouter/>
      </Providers>
  )
}

export default App
