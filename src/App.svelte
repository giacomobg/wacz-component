<svelte:options customElement="wacz-lightbox"/>

<script>

  // import * from './lib/replay/ui.js';

  export let filename = 'mono-county-pdf-01-2023-08-25T15-57-33.wacz';
  // let visible = false;
  export let https_link = 'https://giacomobg.github.io/wacz-component/dist/assets/'

  let json_content;

  async function import_json() {
      let response = await fetch(https_link+filename+'.content.json');
      let response_json = await response.json();
      const json_content = response_json['contentMetadata']
      console.log(json_content);
      url = json_content['private']['crawl_config']['config']['seeds'][0]['url'];
      const json = await fetch(https_link + filename + '.json');
  }
  import_json();
  // import data from json_filename;
  // let json_filename = '/assets/'+filename+'.json';
  // import data from json_filename;

  // function closeBox() {
  //     visible = true;
  // }

  let url;
  $: console.log(json_content);
  $: if (json_content) {
      console.log(url);
  } 

</script>

  <div class="popup-container">
    <div id="wacz-popup">
  
      <p class='info-title'>Mono County</p>
    
      <replay-web-page id="embed" source={https_link + filename} embed="replay-only" {url}>
      </replay-web-page>
    
      <div id="info">
        <p>Webpage</p>
            <p><a href={url}>{url}</a></p>
      </div>
    
    </div>  
  </div>


<style>

  .popup-container {
    display: block;
    height: 100%;
    width: 100%;
  }

  #wacz-popup {
    height: 100%;
    width: 100%;
    position: absolute;
    color: white;
    background-color: #333;
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
