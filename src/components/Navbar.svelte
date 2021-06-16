<script>
  import MediaQuery from "../helpers/MediaQuery.svelte";
</script>

<!----------------MARKUP----------------------->
<section>
  <nav>
    <!-- mobile image -->
    <MediaQuery query="(max-width: 480px)" let:matches>
      {#if matches}
        <img src="/images/nav-mob.png" alt="nav mobile image" class="img-fluid" />
      {/if}
    </MediaQuery>
    <!-- desktop image -->
    <MediaQuery query="(min-width: 481px)" let:matches>
      {#if matches}
        <img src="/images/nav-desk.png" alt="nav desktop image" class="img-fluid" />
      {/if}
    </MediaQuery>
  </nav>
</section>
