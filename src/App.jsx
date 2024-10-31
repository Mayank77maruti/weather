import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Weather from './components/Weather';
import { useTranslate } from '@tolgee/react';
import { LangSelector } from './components/LanguageDropdown'; 

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslate();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-row items-start justify-center p-8 gap-8">
        
        {/* Left Section: Header, Summary, and Features */}
        <aside className="w-1/3 bg-transparent shadow-lg rounded-lg p-6 flex flex-col gap-6 bg-white">
          <header className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-gray-800">Weather App</h1>
            <LangSelector />
          </header>
          <section className="mt-4 text-gray-700 ">
            <h2 className="text-2xl font-semibold mb-2">Weather App Summary</h2>
            <p>
              This weather app provides accurate and real-time weather updates to keep you informed.
              With seamless language selection, access weather data wherever you are.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Real-time Weather Data</li>
              <li>Customizable Location Search</li>
              <li>Language Selection</li>
              <li>Hourly and Daily Forecasts</li>
            </ul>
          </section>
        </aside>
        
        {/* Right Section: Weather Component */}
        <main className="w-2/3 flex justify-center">
          <div className="bg-transparent shadow-lg rounded-lg p-8 w-full max-w-lg">
            <Weather />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
