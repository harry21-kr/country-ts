import CountryList from "./components/country/CountryList";

const App = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-[1224px] flex flex-wrap gap-4 justify-center">
        <CountryList />
      </div>
    </main>
  );
};

export default App;
