<template>
  <div class="bg-near-white mv4 pa4" id="install">
    <h2 class="tc f2 ma0 bw0">Get Started</h2>
    <p class="mt3 lh-title f4 fw5">
      No matter what you want to do with IPFS, it’s easy to download and get started right away.
    </p>

    <div class=" bg-white pa3 mb3 db">
      <div class="lh-title f4 fw3 mb3">Install the go-ipfs daemon from your terminal:</div>
      <div class="db bg-gray white pa2 code f4">$ fancypackagemanager install ipfs</div>
    </div>

    <div class="bg-white pa3">
      <p class="mt0 mb3 lh-title f4 fw3">
        Or, install one of our easy-to-use apps:
      </p>
      <div class="flex">
        <div class="bg-near-white w-50 mr3 pa3 tc f4">
          <div class="lh-title f4 fw3 mb3"><span class="fw5">IPFS Desktop:</span> A full IPFS node plus an easy GUI</div>
          <a class="f5 link dim ba bw1 ph4 pv2 mb2 br2 dib bg-gray b--gray white ml2" href="#modal-desktop">Details</a>
        </div>
        <div class="bg-near-white w-50 pa3 tc f4">
          <div class="lh-title f4 fw3 mb3"><span class="fw5">IPFS Companion:</span> Use IPFS in your favorite browser</div>
          <a class="f5 link dim ba bw1 ph4 pv2 mb2 br2 dib bg-gray b--gray white ml2" href="#modal-companion">Details</a>
        </div>
      </div>

      <div id="modal-desktop" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
        <div class="absolute pa4 bg-white">
          <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
          <h1 class="mv2 f2">IPFS Desktop</h1>
          <div>
            <p class="fw6 lh-title">You don't need the command line to run an IPFS node. Just install IPFS Desktop and have all the power of IPFS in your hands.</p>
            <p class="mv0 pv0 fw6 lh-title">Features:</p>
            <ul class="mv2 pv0">
              <li>Easy GUI with all the background power of go-ipfs</li>
              <li>Start/stop the daemon from your menubar</li>
              <li>Easily support <span class="bg-light-gray pa1 code">ipfs://</span>, <span class="bg-light-gray pa1 code">ipns://</span> and <span class="bg-light-gray pa1 code">dweb:</span> links</li>
              <li>CLI Tutor Mode makes it easy to learn IPFS commands as you go</li>
            </ul>
            <p class="mb0 pb0 fw6 lh-title">Great for:</p>
            <ul class="mt2 mb4 pt0">
              <li>Exploring and getting acquainted with IPFS</li>
              <li>Transitioning to command-line IPFS</li>
              <li>Anyone who wants an easy GUI for interacting with IPFS files</li>
            </ul>
          </div>
          <div>
            <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray" href="#install">Download</a>
          </div>
          <div class="f6 pt0">21.2MB, Mac OSX. Need a different OS? Visit the <a href="https://github.com/ipfs-shipyard/ipfs-desktop/" target="_blank">GitHub repo</a> or <a href="https://dist.ipfs.io/" target="_blank">dist.ipfs.io</a>.</div>
        </div>
      </div>

      <div id="modal-companion" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
        <div class="absolute pa4 bg-white">
          <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
          <h1 class="mv2 f2">IPFS Companion</h1>
          <div>
            <p class="fw6 lh-title">Harness the power of your locally running IPFS node directly inside your browser.</p>
            <p class="mv0 pv0 fw6 lh-title">Features:</p>
            <ul class="mv2 pv0">
              <li>Automatically detect and redirect IPFS resources</li>
              <li>Access frequently-used IPFS actions right from your browser bar</li>
              <li>Enable and disable IPFS features on a per-website basis</li>
              <li>Import and pin items to your local IPFS node directly from your browser</li>
            </ul>
            <p class="mb0 pb0 fw6 lh-title">Great for:</p>
            <ul class="mt2 mb4 pt0">
              <li>Making the most of IPFS features and functions in your favorite browser</li>
              <li>Easy access to your node on the fly</li>
              <li>Expanding your IPFS developer workflow to the browser</li>
            </ul>
          </div>
          <div>
            <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray" href="#install">Download</a>
          </div>
          <div class="f6 pt0">11.2MB, Firefox. Need a different browser? Visit the <a href="https://github.com/ipfs-shipyard/ipfs-companion/" target="_blank">GitHub repo</a> or the <a href="https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch" target="_blank">Chrome</a> or <a href="https://addons.mozilla.org/firefox/addon/ipfs-companion/" target="_blank">Firefox</a> stores.</div>
        </div>
      </div>

      <div id="modal-cluster" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
        <div class="absolute pa4 bg-white">
          <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
          <h1 class="mv2 f2">IPFS Cluster</h1>
          <div>
            <p class="fw6 lh-title">IPFS Cluster provides data orchestration across a swarm of IPFS daemons by allocating, replicating and tracking a global pinset distributed among multiple peers.</p>
            <p class="mv0 pv0 fw6 lh-title">Features:</p>
            <ul class="mv2 pv0">
              <li>Runs as an independent daemon from IPFS, integrating with the IPFS daemon's API</li>
              <li>Fully featured CLI and HTTP REST API</li>
              <li>Cluster peers form a distributed network with a global list of pins - no central server needed</li>
              <li>Baked-in permission model that supports standard peers and follower peers</li>
            </ul>
            <p class="mb0 pb0 fw6 lh-title">Great for:</p>
            <ul class="mt2 mb4 pt0">
              <li>Easy integration with your Go or JavaScript app</li>
              <li>Powerful, reliable IPFS in big-data environments</li>
              <li>Ensuring automated data availability and redundancy on IPFS</li>
            </ul>
          </div>
          <div>
            <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray" href="#install">Download</a>
          </div>
          <div class="f6 pt0">11.2MB, Firefox. Need a different browser? Visit the <a href="https://cluster.ipfs.io/" target="_blank">IPFS Cluster website</a> or <a href="https://dist.ipfs.io/#ipfs-cluster-ctl" target="_blank">dist.ipfs.io</a>.</div>
        </div>
      </div>
    </div>

    <div class="bg-white pa3 mt3">
      <p class="mt0 mb3 lh-title f4 fw3">
        Not sure which flavor of IPFS is right for you? Take this short quiz.
      </p>
      <div class="flex items-center justify-between mt3 f4">
        <label for="diagnostic">What do you want to do?</label>
        <select name="diagnostic" id="diagnostic">
          <option value="browser">Use IPFS in my browser</option>
          <option value="files-personal">Store my own personal files</option>
          <option value="files-cdn">Store files at CDN scale</option>
          <option value="files-bigdata">Store files at a big-data scale</option>
          <option value="build">Build apps or services on IPFS</option>
        </select>
      </div>
    </div>
    <p class="tc lh-title mt4 f4 fw5">
      Already installed and need some next steps? Start here:
    </p>
    <div class="tc mt3">
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray mr2" href="https://docs.ipfs.io" target="_blank">IPFS Docs</a>
      <a class="f5 link dim ba bw1 ph4 pv3 mb2 br2 dib dark-gray ml2" href="https://discuss.ipfs.io" target="_blank">Community Forum</a>
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
    width: 60vw;
    max-width:640px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

</style>
