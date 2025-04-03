import Providers from "@/app/providers/providers";
import AppRouter from '@/app/router/appRouter';

function App() {
  return (
    <Providers>
      <AppRouter/>
    </Providers>
  )
}

export default App
