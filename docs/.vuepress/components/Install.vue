<template>
  <div class="bg-near-white mv4 pa4" id="install">
    <h2 class="tc f2 ma0 bw0">Get started</h2>
    <p class="mt3 lh-title f4 fw5">
      Already know what you need? Download and install it here.
    </p>
    <div class=" bg-white pa3 mb3 db">
      <div class="lh-title f4 fw3 mb3">Install the go-ipfs daemon from your terminal:</div>
      <div class="db bg-gray white pa2 code f4">$ fancypackagemanager install ipfs</div>
    </div>
    <div class="flex">
      <div class="bg-white mr3 pa3 tc f4">
        <div class="lh-title f4 fw3 mb3">IPFS Desktop for an easy-to-use GUI</div>
        <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="#0">Details</a>
      </div>
      <div class="bg-white mr3 pa3 tc f4">
        <div class="lh-title f4 fw3 mb3">IPFS Companion for integrated IPFS in your browser</div>
        <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="#0">Details</a>
      </div>
      <div class="bg-white pa3 tc f4">
        <div class="lh-title f4 fw3 mb3">IPFS Cluster for IPFS at scale</div>
        <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="#0">Details</a>
      </div>
    </div>
    <p class="mt4 lh-title f4 fw5">
      Or, if you're not sure which flavor of IPFS is right for you, take this short quiz.
    </p>
    <div class="flex items-center justify-between bg-white pa3 f4">
      <label for="diagnostic">What do you want to do?</label>
      <select name="diagnostic" id="diagnostic">
        <option value="volvo">Use IPFS in my browser</option>
        <option value="saab">Store my own personal files</option>
        <option value="mercedes">Store files at CDN scale</option>
        <option value="audi">Store files at a big-data scale</option>
        <option value="audi">Build apps or services on IPFS</option>
      </select>
    </div>
    <p class="tc lh-title mt4 f4 fw5">
      Not sure what to do next? Explore these resources:
    </p>
    <div class="tc mt3">
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray mr2" href="https://docs.ipfs.io" target="_blank">IPFS Docs</a>
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray mh2" href="#0">Tutorial Videos</a>
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="https://discuss.ipfs.io" target="_blank">IPFS Forums</a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
// css/stylus here or in global stylus file
</style>
