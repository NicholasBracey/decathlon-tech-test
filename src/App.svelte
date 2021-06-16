<script>
  import Navbar from "./components/Navbar.svelte";
  import HeroBanner from "./components/HeroBanner.svelte";
  import ProductSlider from "./components/ProductSlider.svelte";
  import Banner from "./components/Banner.svelte";
  import DATA from "./data/data";
  import "swiper/swiper-bundle.css";
  console.log(DATA);
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

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
  main {
    margin: 0 auto;
  }
</style>
