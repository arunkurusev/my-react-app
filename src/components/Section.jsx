import Counter from "./Counter";
import Documentation from "./Documentation";
import Hero from "./Hero";
import Social from "./Social";

export default function Section() {
  console.log("Section component rendered");
  return (
    <>
      <section id="center">
        <Hero />
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <Counter />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <Documentation />
        <Social />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}
