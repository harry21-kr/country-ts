import { Suspense } from "react";
import { CountryItemSkeleton } from "./components/Country/CountryItem";
import CountryList from "./components/Country/CountryList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="max-w-[1224px] mt-36 flex flex-wrap gap-4 justify-center">
        <Suspense
          fallback={Array.from({ length: 20 }).map((_, idx) => (
            <CountryItemSkeleton key={idx} />
          ))}
        >
          <CountryList />
        </Suspense>
      </div>
    </main>
  );
};

export default App;
