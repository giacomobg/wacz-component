<script>

  // import * from './lib/replay/ui.js';
  import Embed from './lib/Embed.svelte';

  let filename = 'mono-county';
  let visible = false;

  function handleClick() {
    // load in mono-county-web-01.json
    visible = true;
  };

  
</script>

<Embed bind:visible={visible} {filename}/>

<main>

  <button id="show-info" on:click={handleClick}>Click this to trigger bringing up the Mono County embed</button>




</main>

<style>

  main {
    display: block;
    position: absolute;
    width: 800px;
    height: 800px;
    border: 4px black solid;
  }

  button {
    display: block;
    margin: 0 auto;
  }



  /* html, body {
    width: 100%;
    height: 100%;
  } */
</style>
