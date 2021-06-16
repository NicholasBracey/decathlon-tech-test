<script>
  export let heroBannerData = {};
  const { HEADING, DECRIPTION, URL, CTA } = heroBannerData;
  import MediaQuery from "../helpers/MediaQuery.svelte";
  import InlineSVG from "svelte-inline-svg";
  $: attributes = {
    viewBox: "6 2 24 24",
  };
</script>

<!----------------MARKUP----------------------->
<section>
  <div class="banner d-flex align-items-center justify-content-center">
    <div class="banner-copy">
      <h1>{HEADING}</h1>
      <p>{DECRIPTION}</p>
      <button>
        <a href={URL} target="_blank">
          {CTA}
          <InlineSVG src="icons/icons-right.svg" {...attributes} />
        </a>
      </button>
    </div>
    <!-- mobile image -->
    <MediaQuery query="(max-width: 480px)" let:matches>
      {#if matches}
        <div class="col-6">
          <img
            src="/images/getreadywrapup-mobile.png"
            alt="coats"
            class="img-fluid"
          />
        </div>
      {/if}
    </MediaQuery>
    <!-- desktop image -->
    <MediaQuery query="(min-width: 481px)" let:matches>
      {#if matches}
      <div class="col-6">
          <img
            src="/images/getreadywrapup-desktop.png"
            alt="coats"
            class="img-fluid"
          />
        </div>
      {/if}
    </MediaQuery>
  </div>
</section>

<!----------------STYLE----------------------->
<style>
  section {
    background-image: url("/images/bg-placeholder-mobile.png");
    background-size: contain;
  }
  .banner {
    width: 100%;
  }
  :global(.mob-img) {
    width: 160px;
  }
  .banner-copy {
    width: 160px;
    padding: 0 0rem 0rem 1rem;
    font-family: "Roboto Condensed", "Arial Narrow", sans-serif;
  }
  h1 {
    text-align: left;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    font-stretch: condensed;
    font-style: italic;
    line-height: normal;
    letter-spacing: normal;
    color: #0072b5;
  }
  p {
    text-align: left;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #1a171b;
  }
  button {
    border-radius: 3px;
    background-color: #ffea28;
  }
  section a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #1a171b;
  }

  @media (min-width: 768px) {
    section {
      padding: 0 4rem;
    }
  }

  @media (min-width: 1024px) {
    section {
      background-image: url("/images/bg-placeholder-desktop.png");
      padding: 0 3rem;
    }
    .banner-copy {
      width: 35%;
      padding: 2rem 1rem;
    }
    h1 {
      font-size: 70px;
      margin-bottom: 33px;
      width: 478px;
    }
    p {
      font-size: 24px;
      margin-bottom: 33px;
    }
  }

  @media (min-width: 1440px) {
    section {
      padding: 0 8rem;
    }
  }
</style>
