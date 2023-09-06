<svelte:options customElement="wacz-lightbox"/>

<script>

  // import * from './lib/replay/ui.js';

  export let filename = 'mono-county-pdf-01-2023-08-25T15-57-33.wacz';
  // let visible = false;
  export let path = 'https://giacomobg.github.io/wacz-component/dist/assets/'
  // export let replayBase;
  export let replayBase = './dist/replay/';

  // let json_content;
  // let json;

  let url, archive_name, date_crawled, domain, domainCert,
    package_hash, iscn, numbers, avalanche, ipfs, filecoin;
  let parsed_json = false;

  async function import_json() {
      let response_content = await fetch(path+filename+'.content.json');
      let response_json_content = await response_content.json();
      const json_content = response_json_content['contentMetadata']
      console.log(json_content);
      
      let response = await fetch(path + filename + '.json');
      const json = await response.json();

      url = json_content['private']['crawl_config']['config']['seeds'][0]['url'];
      console.log(json)
      archive_name = json.sourceId.value;
      date_crawled = json_content.extras.wacz.dateCrawled;
      domain = json_content.validatedSignatures[0].custom.domain;
      domainCert = "To be hashed:" + json_content.validatedSignatures[0].custom.domainCert;
      package_hash = json_content.validatedSignatures[0].custom.hash;
      iscn = json.registrationRecords.iscn.txHash;
      numbers = json.registrationRecords.numbersProtocol.numbers.txHash;
      avalanche = json.registrationRecords.numbersProtocol.avalanche.txHash;
      ipfs = json.content.cid;
      filecoin = "Will come later";

      parsed_json = true;
  }
  import_json();
  // import data from json_filename;
  // let json_filename = '/assets/'+filename+'.json';
  // import data from json_filename;

  // function closeBox() {
  //     visible = true;
  // }

  // $: if (json_content) {
  // } 

</script>

  <div class="popup-container">
    <div id="wacz-popup">
  
      <p class='info-title'>Mono County</p>
    
      <replay-web-page
        id="embed" 
        source={path + filename} 
        embed="replay-only" 
        {url}
        replayBase={replayBase}
        >
      </replay-web-page>
      
      <!-- <button on:click={open}>View archive information</button> -->
      <details>
        <summary><span>View archive information</span></summary>
      </details>

        <div id="info" class="content">
          {#if parsed_json}
          <p><strong>Archive name</strong><br>{archive_name}</p>
          <p><strong>Webpage</strong><br><a href={url}>{url}</a></p>
          <p><strong>Archived on</strong><br>{date_crawled}</p>
          <p><strong>Observed by</strong><br>{domain}<br>{domainCert.slice(0,100)}</p>
          <p><strong>Package hash</strong><br>{package_hash}</p>
  
          <p><strong>Blockchain registration</strong></p>
          <p><strong>ISCN on Likecoin</strong><br>Transaction ID: <a href={"https://app.like.co/"}>{iscn}</a></p>
          <p><strong>Numbers Protocol on Numbers</strong><br>Transaction ID: <a href={"https://mainnet.num.network/overview"}>{numbers}</a></p>
          <p><strong>Numbers Protocol on Avalanche</strong><br>Transaction ID: <a href={"https://snowtrace.io/search?f=0&q="+avalanche}>{avalanche}</a></p>
          <p><strong>Storage and archiving</strong></p>
          <p><strong>IPFS</strong><br>CID: <a href={"http://ipfs.io/ipfs/"+ipfs}>{ipfs}</a></p>
          <p><strong>Filecoin</strong><br>Piece Content ID: <a href="https://filecoin.tools">{filecoin}</a></p>
          <a href={"http://ipfs.io/ipfs/"+ipfs} class="button"><strong>Download archive</strong></a>
  
          {/if}
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
    /* color: white; */
    background-color: #eeeef4;
  }

  /* @media(max-width: 800px) { */
    replay-web-page {
      position: absolute;
      top: 100px;
      z-index: 1;
    }

    details {
      position: relative;
      padding: 4px 10px;
      background-color: #D8DDE6;
      z-index: 2;
      border: 2px solid #AAB6C2;
    }
  /* }

  

  @media(min-width: 800px) {
    #info, replay-web-page {
      float: left;
      width: calc(50% - 10px);
    }
  } */

  details {
    /* max-width: 500px; */
    overflow: hidden;
    border-radius: 30px;
    width: 300px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }


  div.content { 
    margin: 1px;
    position: relative;
    padding: 0 10px;
    z-index: 2;
    /* width: 100%; */
    border: 2px solid #eeeef4;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 0 10px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 400ms ease-out, border 0ms 400ms linear;
    background-color: #D8DDE6;
  }
  details[open] + div.content {
    border: 2px solid #AAB6C2;
    max-height: 1200px; /* Set a max-height value enough to show all the content */        
    transition: max-height 400ms ease-out, border 0ms linear;
  }

  details[open] span::before {
      rotate: 90deg;
      transition: rotate 200ms ease-out;
  }


  .info-title {
    font-size: 18px;
    font-weight: 700;
  }

</style>
