<script>
  export let slideData = {};
  const { TITLE, SLIDE_LIST } = slideData;
  import MediaQuery from "../helpers/MediaQuery.svelte";
  import { Swiper, SwiperSlide } from "svelte-swiper";

  const options = {
    slidesPerView: 1.15,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  import InlineSVG from "svelte-inline-svg";
  $: attributes = {
    viewBox: "-2 -1 24 24",
  };
</script>

<!----------------MARKUP----------------------->
<section>
  <div class="container">
    <h2>{TITLE}</h2>

    <Swiper {options}>
      {#each SLIDE_LIST as list}
        <SwiperSlide>
          <div class="product-slide">
            <!-- mobile image -->
            <MediaQuery query="(max-width: 480px)" let:matches>
              {#if matches}
                <img
                  src={list.M_IMAGE}
                  alt={list.HEADING}
                  class="img-fluid rounded"
                />
              {/if}
            </MediaQuery>
            <!-- desktop image -->
            <MediaQuery query="(min-width: 481px)" let:matches>
              {#if matches}
                <img src={list.D_IMAGE} alt={list.HEADING} class="img-fluid" />
              {/if}
            </MediaQuery>
            <h4>{list.HEADING}</h4>
            <p>{list.DESCRIPTION}</p>
            <a href={list.URL} target="_blank">
              {list.CTA}
              <InlineSVG src="icons/icons-right-blue.svg" {...attributes} />
            </a>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
    <div class="swiper-button-next" />
    <div class="swiper-button-prev" />
  </div>
</section>

<!----------------STYLE----------------------->
<style>
  section {
    padding: 2rem 0;
    position: relative;
  }

  .product-slide {
    border-radius: 2px; 
    border: 2px #eee;
    padding: 16px;
    margin: 15px 5px;
    -webkit-box-shadow: 2px 3px 8px #eee;
    -moz-box-shadow: 2px 3px 8px #eee;
    box-shadow: 2px 3px 8px #eee;
  }

  .swiper-button-next {
    display: none;
  }

  .swiper-button-prev {
    display: none;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #1a171b;
  }

  h2::after {
    content: "";
    background-color: #0082c3;
    width: 70px;
    height: 2px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    display: block;
    transform: translateY(14px);
  }

  h4 {
    margin-top: 16px;
    font-size: 20px;
    font-weight: bold;
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4d4d4d;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #7c7c7c;
  }

  section a {
    font-size: 14px;
    font-weight: normal;
    font-stretch: condensed;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0082c3;
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    section {
      padding: 2rem 2rem;
    }
    h2 {
      font-size: 36px;
    }
    .swiper-button-next {
      top: 50%;
      right: 5%;
      display: inline-block;
      width: 60px;
      height: 60px;
      border: 3px solid #0082c3;
      border-radius: 50%;
    }

    .swiper-button-next:after {
      content: "";
      display: inline-block;
      margin-top: 23px;
      margin-left: 20px;
      width: 10px;
      height: 10px;
      border-top: 2px solid #0082c3;
      border-right: 2px solid #0082c3;
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .swiper-button-prev {
      top: 50%;
      left: 5%;
      display: inline-block;
      width: 60px;
      height: 60px;
      border: 3px solid #0082c3;
      border-radius: 50%;
    }

    .swiper-button-prev:after {
      content: "";
      display: inline-block;
      margin-top: 23px;
      margin-left: 23px;
      width: 10px;
      height: 10px;
      border-top: 2px solid #0082c3;
      border-right: 2px solid #0082c3;
      -moz-transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }

  @media (min-width: 1440px) {
    section {
      padding: 4rem 10rem;
    }
    .swiper-button-next {
      right: 15%;
    }
    .swiper-button-prev {
      right: 6%;
    }
  }
</style>
