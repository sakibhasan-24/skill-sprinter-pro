import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Services from "../components/Services";
import Reviews from "./Reviews";

export default function HomeItems() {
  return (
    <div>
      <Banner />
      <Services />
      <FAQ />
      <Reviews />
    </div>
  );
}
