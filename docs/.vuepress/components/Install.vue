<template>
  <div class="bg-near-white mv4 pa4" id="install">
    <h2 class="tc f2 ma0 bw0">Get started</h2>
    <p class="mt3 lh-title f4 fw5">
      No matter what you want to do with IPFS, it's easy to get started.
    </p>
    <p class="mt3 lh-title f4">
      Already know what you need? Download and install it here.
    </p>
    <div class=" bg-white pa3 mb3 db">
      <div class="lh-title f4 fw3 mb3">Install the go-ipfs daemon from your terminal:</div>
      <div class="db bg-gray white pa2 code f4">$ fancypackagemanager install ipfs</div>
    </div>
    <div class="flex">
      <div class="bg-white mr3 pa3 tc f4">
        <div class="lh-title f4 fw3 mb3">IPFS Desktop for an easy-to-use GUI</div>
        <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="#modal-desktop">Details</a>
      </div>
      <div class="bg-white mr3 pa3 tc f4">
        <div class="lh-title f4 fw3 mb3">IPFS Companion for integrated IPFS in your browser</div>
        <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="#modal-companion">Details</a>
      </div>
      <div class="bg-white pa3 tc f4">
        <div class="lh-title f4 fw3 mb3">IPFS Cluster for IPFS at scale</div>
        <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="#modal-cluster">Details</a>
      </div>
    </div>

    <div id="modal-desktop" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
        <h1 class="mt2 f2 w-90">Desktop</h1>
        <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
        <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
        </div>
    </div>

    <div id="modal-companion" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
        <h1 class="mt2 f2 w-90">Companion</h1>
        <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
        <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
        </div>
    </div>

    <div id="modal-cluster" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
        <h1 class="mt2 f2 w-90">Cluster</h1>
        <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
        <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
        </div>
    </div>

    <p class="mt4 lh-title f4 ">
      Or, if you're not sure which flavor of IPFS is right for you, take this short quiz.
    </p>
    <div class="flex items-center justify-between bg-white pa3 f4">
      <label for="diagnostic">What do you want to do?</label>
      <select name="diagnostic" id="diagnostic">
        <option value="browser">Use IPFS in my browser</option>
        <option value="files-personal">Store my own personal files</option>
        <option value="files-cdn">Store files at CDN scale</option>
        <option value="files-bigdata">Store files at a big-data scale</option>
        <option value="build">Build apps or services on IPFS</option>
      </select>
    </div>
    <p class="tc lh-title mt4 f4 fw5">
      What to do next? Explore these resources:
    </p>
    <div class="tc mt3">
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray mr2" href="https://docs.ipfs.io" target="_blank">IPFS Docs</a>
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray mh2" href="#0">Tutorial Videos</a>
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="https://discuss.ipfs.io" target="_blank">IPFS Forums</a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.modal-window {
  background-color: rgba(0, 0, 0, 0.25);
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  &>div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

</style>
