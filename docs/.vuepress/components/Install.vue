<template>
  <div class="center mw8 mv5 pb3">
    <h2 class="f1 ma0 pb3 bw0">Install IPFS</h2>
    <p class="mt3 lh-title f3 fw4">
      No matter what you want to do with IPFS, it’s easy to get started right away.
    </p>

    <div class="mt4 mb3 db">
      <div class="lh-title f4 mb3">Install the go-ipfs daemon from your terminal:</div>
      <div class="db bg-charcoal-muted white pa2 code f4">$ fancypackagemanager install ipfs</div>
    </div>

    <div>
      <p class="mt4 mb3 lh-title f4">
        Or, install one of our easy-to-use apps:
      </p>
      <div class="flex">
        <div class="bg-snow-muted w-50 mr3 pa3 tc f4">
          <div class="lh-title f4 mb3"><span class="fw5">IPFS Desktop:</span> A full IPFS node plus an easy GUI</div>
          <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mb2 br2 dib ml2" href="#modal-desktop">Details</a>
        </div>
        <div class="bg-snow-muted w-50 pa3 tc f4">
          <div class="lh-title f4 mb3"><span class="fw5">IPFS Companion:</span> Use IPFS in your favorite browser</div>
          <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mb2 br2 dib ml2" href="#modal-companion">Details</a>
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
            <a class="f5 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray" href="#install">Download</a>
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
            <a class="f5 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray" href="#install">Download</a>
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
            <a class="f5 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib b--mid-gray white bg-mid-gray" href="#install">Download</a>
          </div>
          <div class="f6 pt0">11.2MB, Firefox. Need a different browser? Visit the <a href="https://cluster.ipfs.io/" target="_blank">IPFS Cluster website</a> or <a href="https://dist.ipfs.io/#ipfs-cluster-ctl" target="_blank">dist.ipfs.io</a>.</div>
        </div>
      </div>
    </div>

    <div class="mt4">
      <p class="mt0 mb3 lh-title f4">
        Not sure which flavor of IPFS is right for you? Take this short quiz.
      </p>
      <div class="flex items-center bg-snow-muted pa3 justify-between mt3 f4">
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
    <div class="next-steps bg-white pa4 ba bw1 br3 b--gray-muted mt5">
      <h3 class="f3 ma0 pa0">
        After you install
      </h3>
      <div class="flex mt2 justify-between">
        <div class="w-33 mr4">
          <p>Check out how-tos and tutorials in the IPFS docs.</p>
          <a class="fw7" href="https://docs.ipfs.io/how-to/" target="_blank">See the how-tos&nbsp;&nbsp;&gt;&gt;</a>
        </div>
        <div class="w-33 mr4">
          <p>Ask questions and get community support in the official forum.</p>
          <a class="fw7" href="https://discuss.ipfs.io" target="_blank">Start a conversation&nbsp;&nbsp;&gt;&gt;</a>
        </div>
        <div class="w-33">
          <p>Watch this video series demystifying core IPFS concepts.</p>
          <a class="fw7" href="https://www.youtube.com/playlist?list=PLuhRWgmPaHtSsHMhjeWpfOzr8tonPaePu" target="_blank">View the playlist&nbsp;&nbsp;&gt;&gt;</a>
        </div>
      </div>
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
