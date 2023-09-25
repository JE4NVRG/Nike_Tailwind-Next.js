import {
  CustomerReviews,
  Footer,
  Hero,
  Popular,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => (
  <main className="relative">
    {/* Pode ser que você quisesse incluir o componente <Nav /> aqui, mas ele não foi importado. Se for o caso, adicione-o. */}
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Popular />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
