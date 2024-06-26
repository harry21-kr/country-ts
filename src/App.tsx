import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CountryItemSkeleton from "./components/Country/CountryItemSkeleton";
import CountryList from "./components/Country/CountryList";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="mt-36 flex max-w-[1224px] flex-wrap justify-center gap-4">
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense
            fallback={Array.from({ length: 20 }).map((_, idx) => (
              <CountryItemSkeleton key={idx} />
            ))}
          >
            <CountryList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
