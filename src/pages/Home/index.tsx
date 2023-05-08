import { Banner } from "./Banner";
import { Ecosystem } from "./Ecosystem";
import { Founded } from "./Founded";
import { Function } from "./Function";
import { PopularCrypto } from "./PopularCrypto";
import { Roadmap } from "./Roadmap";
import { TrustBy } from "./TrustBy";
import { Why } from "./Why";

export const HomePage = () => {
 return (
  <>
   <main className="flex flex-col space-y-12">
    <Banner />
    <TrustBy />
    <PopularCrypto />
    <Function />
    <Why />
    <Ecosystem />
    <Roadmap />
    <Founded />
   </main>
  </>
 );
};
