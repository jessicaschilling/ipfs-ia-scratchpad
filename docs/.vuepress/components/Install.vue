<template>
  <div class="center mw8 mv5 pb3">
    <h2 class="f1 ma0 pb3 bw0">Install IPFS</h2>
    <p class="mt3 lh-title f3 fw4">
      No matter what you want to do with IPFS, it’s easy to get started right away.
    </p>

    <div class="bg-snow-muted pa4 mt3 mb4 f4">
      <h3 class="f3 ma0 pa0">
        For command-line fans
      </h3>
      <p class="mt3 mb2 lh-title">Just want an IPFS node on your computer? Install IPFS and run in the background in two commands.</p>
      <div class="db bg-charcoal-muted white pa2 code f4">$ fancypackagemanager install ipfs<br/>$ ipfs daemon</div>
      <div class="f6 mt2 charcoal-muted">Need a different package manager or step-by-step CLI instructions? <a href="https://docs.ipfs.io/install/command-line/" target="_blank">Check here.</a></div>
    </div>

    <div class="bg-snow-muted pa4 mt3 mb4 f4">
      <h3 class="f3 ma0 pa0">
        For everyone
      </h3>
      <p class="mt3 mb4 lh-title">The IPFS desktop app and browser extension are a power pair for storing and sharing files &mdash; no code needed. And because IPFS Desktop includes a full node, it's great for devs and power users, too.</p>
      <div class="flex items-center">
        <div class="w-50 mr3">
          <h4 class="ma0"><a href="#download-desktop" class="fw6">IPFS Desktop</a></h4>
          <p class="ma0 lh-title f5 mv2">Manage your node, import/share files and more in a convenient, robust desktop app.</p>
          <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mv2 br2 dib" href="#download-desktop">Details &amp; Download</a>
        </div>
        <div class="ml4 mr5">
          <h4 class="ma0 pb4" style="font-size: 3em;">+</h4>
        </div>
        <div class="w-50">
          <h4 class="ma0"><a href="#download-companion" class="fw6">IPFS Companion</a></h4>
          <p class="ma0 lh-title f5 mv2">Add browser support for IPFS plus handy shortcuts for importing, sharing, and more.</p>
          <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mv2 br2 dib" href="#download-companion">Details &amp; Download</a>
        </div>
      </div>
    </div>

    <div id="download-desktop" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f3 montserrat">X</a>
        <h1 class="mv2 f2">IPFS Desktop</h1>
        <div>
          <p class="fw6 lh-title">A complete IPFS node plus a simple-to-use file browser for adding, viewing, and sharing items, IPFS Desktop gives you all the power of IPFS in an easy desktop app.</p>
          <h2 class="mv0 pv0 f4 bn">Features</h2>
          <ul class="mv2 pv0 lh-title">
            <li class="mb1">File browser lets you add, move, view, share, and pin files</li>
            <li class="mb1">Peer visualizer gives you info on connected nodes worldwide</li>
            <li class="mb1">Start IPFS and other common commands straight from your menubar</li>
            <li class="mb1">Learn IPFS commands as you go with an optional CLI Tutor Mode</li>
          </ul>
          <h2 class="mb0 pv0 f4 bn">Great for</h2>
          <ul class="mv2 pv0 lh-title">
            <li class="mb1">Exploring and getting acquainted with IPFS</li>
            <li class="mb1">Storing and sharing files without needing terminal commands</li>
            <li class="mb1">Easy menubar access to IPFS — useful for devs and power users, too</li>
          </ul>
        </div>
        <div>
          <a class="button-primary bg-teal f5 link glow o-80 ba bw1 ph4 pv3 mt2 mb1 br2 dib" href="#install">Download</a>
        </div>
        <div class="f6 pt0 charcoal-muted">114.2MB, Mac OSX. Need a different OS? <a href="https://github.com/ipfs-shipyard/ipfs-desktop/#install" target="_blank">View all</a></div>
      </div>
    </div>

    <div id="download-companion" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f3 montserrat">X</a>
        <h1 class="mv2 f2">IPFS Companion</h1>
        <div>
          <p class="fw6 lh-title">Extend the power of IPFS to your favorite browser. IPFS Companion unlocks seamless support for IPFS-hosted sites, plus browser shortcuts for adding/sharing files, keeping sites available offline, and more. <br/><em>Requires IPFS Desktop or the IPFS daemon for full functionality.</em></p>
          <h2 class="mv0 pv0 f4 bn">Features</h2>
          <ul class="mv2 pv0 lh-title">
            <li class="mb1">Import items to your IPFS node directly from your browser</li>
            <li class="mb1">Open your node's dashboard or share a file right from your browser bar</li>
            <li class="mb1">Automatically support <span class="bg-light-gray pa1 code">ipfs://</span>, <span class="bg-light-gray pa1 code">ipns://</span> and <span class="bg-light-gray pa1 code">dweb:</span> addresses</li>
            <li class="mb1">Easily copy CIDs and content paths when browsing IPFS-hosted sites</li>
          </ul>
          <h2 class="mb0 pv0 f4 bn">Great for</h2>
          <ul class="mv2 pv0 lh-title">
            <li class="mb1">Integrating IPFS features directly in your favorite browser</li>
            <li class="mb1">Easy access to common tasks like adding, sharing, or browsing your node's files</li>
            <li class="mb1">Testing IPFS apps and other common developer tasks</li>
          </ul>
        </div>
        <div>
          <a class="button-primary bg-teal f5 link glow o-80 ba bw1 ph4 pv3 mt2 mb1 br2 dib" href="#install">Download</a>
        </div>
        <div class="f6 pt0 charcoal-muted">2.2MB, Firefox. Need a different browser? Visit the <a href="https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch" target="_blank">Chrome</a> or <a href="https://addons.mozilla.org/firefox/addon/ipfs-companion/" target="_blank">Firefox</a> stores.</div>
      </div>
    </div>

    <div class="bg-snow-muted pa4 mt3 mb4 f4">
      <h3 class="f3 ma0 pa0">
        Build with IPFS
      </h3>
      <p class="mt3 lh-title">With multiple language implementations and storage tooling ranging from data orchestration across your own node cluster to storing on pinning services or Filecoin, there's a world of flexible options for you to build on.</p>
      <div class="mv4 f4 flex">
        <div class="w-50 br b--gray-muted">
          <h4 class="mt0 mb2">Language implementations</h4>
          <div class="f5 h4 items-center lh-title flex justify-between h-100">
            <div class="w-33 pr3 tc items-center br b--gray-muted">
              <img class="desaturate o-50 h3" src="/assets/img/build-go.png">
              <h5 class="pt1 ma0 f5"><a href="https://github.com/ipfs/go-ipfs" target="_blank" class="fw6">Go</a></h5>
              <div>The reference implementation of IPFS.</div>
            </div>
            <div class="w-33 ph3 tc items-center br b--gray-muted">
              <div<img class="desaturate o-50 h3" src="/assets/img/build-js.png">
              <h5 class="pt1 ma0 f5"><a href="https://js.ipfs.io" target="_blank" class="fw6">JavaScript</a></h5>
              <div>A full p2p protocol written entirely in JS.</div>
            </div>
            <div class="w-33 ph3 tc items-center">
              <img class="desaturate o-30 h3" src="/assets/img/build-rust.png">
              <h5 class="pt1 ma0 f5"><a href="does/not/exist" target="_blank" class="fw6">Rust</a></h5>
              <div>The newest member of the IPFS family.</div>
            </div>
          </div>
        </div>
        <div class="w-50">
          <h4 class="mt0 mb2 pl3">Storage tooling</h4>
          <div class="f5 h4 items-center lh-title flex justify-between h-100">
            <div class="w-33 ph3 tc items-center br b--gray-muted">
              <img class="desaturate o-70 h3" src="/assets/img/build-cluster.png">
              <h5 class="pt1 ma0 f5"><a href="https://cluster.ipfs.io" target="_blank" class="fw6">IPFS Cluster</a></h5>
              <div>Orchestration for large multi-node projects.</div>
            </div>
            <div class="w-33 ph2 tc items-center br b--gray-muted">
              <img class="desaturate o-30 h3" src="/assets/img/build-pinning.svg">
              <h5 class="pt1 ma0 f5"><a href="does/not/exist" target="_blank" class="fw6">Pinning services</a></h5>
              <div class="pt1">IPFS storage without running your own nodes.</div>
            </div>
            <div class="w-33 pl3 tc items-center">
              <img class="desaturate o-50 w3" src="/assets/img/build-filecoin.png">
              <h5 class="pt1 ma0 f5"><a href="https://filecoin.io" target="_blank" class="fw6">Filecoin</a></h5>
              <div class="pt1">Cold storage on the incentivized Filecoin network.</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex items-center mt3">
        <label class="mr3" for="diagnostic">What do you want to do?</label>
        <select name="diagnostic" id="diagnostic" class="pa1 pr2 mr2">
          <option value="go-ipfs">Integrate IPFS with a Go app or service</option>
          <option value="js-ipfs">Use IPFS with JavaScript for web apps</option>
          <option value="ipfs-cluster">Use IPFS Cluster to orchestrate many nodes</option>
          <option value="pinning-service">Store and serve files using a pinning service</option>
          <option value="filecoin">Store files or provide storage on the Filecoin network</option>
        </select>
        <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mv2 br2 dib" href="#install">Get Started</a>
      </div> -->
    </div>

    <div class="next-steps bg-white pa4 ba bw1 br3 b--gray-muted mt5">
      <h3 class="f3 ma0 pa0">
        Next steps
      </h3>
      <div class="flex mt2 justify-between">
        <div class="w-33 mr4">
          <p class="lh-title">Check out how-tos and tutorials in the IPFS docs.</p>
          <a class="fw7" href="https://docs.ipfs.io/how-to/" target="_blank">See the how-tos&nbsp;&nbsp;&gt;&gt;</a>
        </div>
        <div class="w-33 mr4">
          <p class="lh-title">Ask questions and get community support in the official forum.</p>
          <a class="fw7" href="https://discuss.ipfs.io" target="_blank">Start a conversation&nbsp;&nbsp;&gt;&gt;</a>
        </div>
        <div class="w-33">
          <p class="lh-title">Watch this video series demystifying core IPFS concepts.</p>
          <a class="fw7" href="https://www.youtube.com/playlist?list=PLuhRWgmPaHtSsHMhjeWpfOzr8tonPaePu" target="_blank">View the playlist&nbsp;&nbsp;&gt;&gt;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
img.desaturate {
	filter: grayscale(100%);
}

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
