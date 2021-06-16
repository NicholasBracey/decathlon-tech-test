<script>
  export let bannerData = {};
  const { HEADING } = bannerData;
</script>

<!----------------MARKUP----------------------->
<section class="container">
  <div class="banner-experience">
    <div class="banner-experience-bg">
      <h3>{HEADING}</h3>
    </div>
  </div>
</section>

<!----------------STYLE----------------------->
<style>
  section {
    padding: 2rem 0;
  }

  .banner-experience {
    position: relative;
    height: 75px;
    width: calc(100% - 30px);
    display: block;
    margin: 0 auto;
  }

  .banner-experience-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
  }

  h3 {
    position: relative;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    top: 50%;
    left: 50%;
    width: 150px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    .banner-experience {
      height: 102px;
    }
    
    h3 {
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
  }
</style>
