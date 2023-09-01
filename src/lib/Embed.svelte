<svelte:options customElement="embed-element"/>

<script>

    export let visible;
    export let filename;

    let json_content;

    async function import_json() {
        let response = await fetch('https://giacomobg.github.io/wacz-component/dist/assets/'+filename+'.content.json');
        let response_json = await response.json();
        const json_content = response_json['contentMetadata']
        console.log(json_content);
        url = json_content['private']['crawl_config']['config']['seeds'][0]['url'];
        const json = await fetch('https://giacomobg.github.io/wacz-component/dist/assets/'+filename+'.json');
    }
    import_json();
    // import data from json_filename;
    // let json_filename = '/assets/'+filename+'.json';
    // import data from json_filename;

    function closeBox() {
        visible = false;
    }

    let url;
    $: console.log(json_content);
    $: if (json_content) {
        console.log(url);
    } 

</script>

<div id="wacz-popup" class={visible ? 'visible' : ''}
on:click={closeBox}>

<p class='info-title'>Mono County</p>

  <replay-web-page id="embed" source={"/assets/" + filename} embed="replay-only" {url}>
  </replay-web-page>

  <div id="info">
    <p>Webpage</p>
        <p><a href={url}>{url}</a></p>
  </div>

</div>

<style>

  #wacz-popup {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: white;
    background-color: #333;
    opacity: 0;
    transition: opacity 1s, z-index 1s;
  }

  #wacz-popup.visible {
    z-index: 10;
    opacity:1;
  }

  #info, replay-web-page {
    float: left;
    /* display: inline; */
    /* position: relative; */
    width: calc(50% - 10px);
  }

  #info {
    margin: 10px;
  }

  .info-title {
    font-size: 18px;
    font-weight: 700;
  }
</style>
