import { Suspense } from "react";
import { CountryItemSkeleton } from "./components/country/CountryItem";
import CountryList from "./components/country/CountryList";

const App = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-[1224px] flex flex-wrap gap-4 justify-center">
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
