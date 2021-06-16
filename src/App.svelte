<script>
  import Meta from "./components/Meta.svelte";
  const metadata = {
    title: "Decathlon Tech Test",
    description: "tech test homepage build",
    image: "https://svelte.dev/images/twitter-card.png",
    imageAlt: "Decathlon Tech Test",
    url: "https://decathlon-tech-test.herokuapp.com/",
  };

  import Navbar from "./components/Navbar.svelte";
  import HeroBanner from "./components/HeroBanner.svelte";
  import ProductSlider from "./components/ProductSlider.svelte";
  import Banner from "./components/Banner.svelte";
  import DATA from "./data/data";

  import "swiper/swiper-bundle.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Meta {metadata} />

<main>
  <Navbar />
  <HeroBanner heroBannerData={DATA.HERO_BANNER_DATA} />
  <ProductSlider slideData={DATA.SLIDE_DATA} />
  <Banner bannerData={DATA.BANNER_DATA} />
</main>

<style>
  :global(body) {
    font-family: "Roboto Condensed", sans-serif;
  }
</style>
