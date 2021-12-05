import React, { useEffect } from "react";
import { CockTail, Header } from "./components/index";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/cockTailSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <main>
      <Header />
      <section className="section-center marginTop3">
        <CockTail />
      </section>
    </main>
  );
}
export default App;
