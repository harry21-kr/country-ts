import { Suspense } from "react";
import { CountryItemSkeleton } from "./components/Country/CountryItem";
import CountryList from "./components/Country/CountryList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="mt-36 flex max-w-[1224px] flex-wrap justify-center gap-4">
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
