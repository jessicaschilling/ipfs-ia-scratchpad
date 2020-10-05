<template>
  <div class="center mw8 mv5 pb3">
    <h2 class="f1 ma0 pb3 bw0">Install IPFS</h2>
    <p class="mt3 lh-title f3 fw4">
      No matter what you want to do with IPFS, it’s easy to get started right away.
    </p>

    <div class="bg-snow-muted pa4 mt3 mb4 f4">
      <h3 class="f3 ma0 pa0">
        Run an IPFS node, no frills
      </h3>
      <p class="mt3 mb2 lh-title">Just want a node on your computer? Install IPFS and run it in the background in two commands.</p>
      <div class="db bg-charcoal-muted white pa2 code f4">$ fancypackagemanager install ipfs<br/>$ ipfs daemon</div>
    </div>

    <div class="bg-snow-muted pa4 mt3 mb4 f4">
      <h3 class="f3 ma0 pa0">
        Use IPFS from your desktop and browser
      </h3>
      <p class="mt3 mb4 lh-title">The IPFS desktop app and browser extension are a power pair for storing and sharing files &mdash; no code needed. And because IPFS Desktop includes a full node, it's great for devs and power users, too.</p>
      <div class="flex">
        <div class="w-50 mr3">
          <h4 class="ma0">IPFS Desktop</h4>
          <p class="ma0 lh-title f5 mv2">Browse, add, and share files in an easy desktop app.</p>
          <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mv2 br2 dib" href="#download-desktop">Details &amp; Download</a>
        </div>
        <div class="w-50">
          <h4 class="ma0">IPFS Companion</h4>
          <p class="ma0 lh-title f5 mv2">Load, import, and share IPFS resources right in your browser.</p>
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
        <div class="f6 pt0 charcoal-muted">21.2MB, Mac OSX. Need a different OS? <a href="https://github.com/ipfs-shipyard/ipfs-desktop/#install" target="_blank">View all</a></div>
      </div>
    </div>

    <div id="download-companion" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f3 montserrat">X</a>
        <h1 class="mv2 f2">IPFS Companion</h1>
        <div>
          <p class="fw6 lh-title">Extend the power of IPFS Desktop (or any locally running IPFS node) to your favorite browser. IPFS Companion unlocks seamless support for IPFS-hosted websites, plus the ability to import and share resources directly from your browser.</p>
          <h2 class="mv0 pv0 f4 bn">Features</h2>
          <ul class="mv2 pv0 lh-title">
            <li class="mb1">Import items to your IPFS node with a simple right-click</li>
            <li class="mb1">Open your node's file browser or share a file right from your browser bar</li>
            <li class="mb1">Automatically support <span class="bg-light-gray pa1 code">ipfs://</span>, <span class="bg-light-gray pa1 code">ipns://</span> and <span class="bg-light-gray pa1 code">dweb:</span> addresses</li>
            <li class="mb1">Get CIDs and content paths on the fly when browsing IPFS-hosted sites</li>
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
      <p class="mt3 lh-title">With implementations in <a href="https://github.com/ipfs/go-ipfs" target="_blank">Go</a> and <a href="https://github.com/ipfs/js-ipfs" target="_blank">JavaScript</a>, it's straightforward to integrate IPFS into your app or service. You can also leverage IPFS for file storage without running your own nodes by using a <a href="does/not/exist" target="_blank">pinning service</a> or <a href="https://filecoin.io/" target="_blank">Filecoin</a>. And for big data, <a href="https://cluster.ipfs.io/" target="_blank">IPFS Cluster</a> offers orchestration across many nodes.</p>
      <div class="flex items-center mt3">
        <label class="mr3" for="diagnostic">What do you want to do?</label>
        <select name="diagnostic" id="diagnostic" class="pa1 pr2 mr2">
          <option value="go-ipfs">Integrate IPFS with a Go app or service</option>
          <option value="js-ipfs">Use IPFS with JavaScript for web apps</option>
          <option value="ipfs-cluster">Use IPFS Cluster to orchestrate many nodes</option>
          <option value="pinning-service">Store and serve files using a pinning service</option>
          <option value="filecoin">Store files or provide storage on the Filecoin network</option>
        </select>
        <a class="button-primary bg-teal f5 link glow o-80 ba ph4 pv2 mv2 br2 dib" href="#install">Get Started</a>
      </div>
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
