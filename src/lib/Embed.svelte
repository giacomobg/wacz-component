<script>

    export let visible;
    export let filename;

    // async function import_json() {
        const json_content = fetch('https://giacomobg.github.io.wacz-component/dist/assets/'+filename+'.content.json')['contentMetadata'];
        console.log(json_content);
        const json = fetch('https://giacomobg.github.io.wacz-component/dist/assets/'+filename+'.json');
    // }
    // import_json();
    // import data from json_filename;
    // let json_filename = '/assets/'+filename+'.json';
    // import data from json_filename;

    function closeBox() {
        visible = false;
    }


</script>

<div id="wacz-popup" class={visible ? 'visible' : ''}
on:click={closeBox}>

<p class='info-title'>Mono County</p>

  <replay-web-page id="embed" source={"/assets/" + filename} embed="replay-only" url="https://monocounty.ca.gov/sites/default/files/fileattachments/board_of_supervisors/meeting/30464/r20-93.pdf">
  </replay-web-page>

  <div id="info">
    <p>Webpage</p>
        <p><a href={'https://monocounty.ca.gov/sites/default/files/fileattachments/board_of_supervisors/meeting/30464/r20-93.pdf'}>https://monocounty.ca.gov/sites/default/files/fileattachments/board_of_supervisors/meeting/30464/r20-93.pdf</a></p>
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
