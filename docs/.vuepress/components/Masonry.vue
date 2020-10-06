<template>
  <div>
  <div class="">
    <p class="mt2 mb0 lh-title">
      Is something missing, like your event? <a href="press">Submit it here</a>.
    </p>
    <p class="mt2 mb0 lh-title">
      Want the latest in your inbox? Sign up for our <a href="#newsletter">weekly newsletter</a>.
    </p>
    <p class="mt2 mb0 lh-title">
      Member of the press? <a href="press">Get materials here</a>.
    </p>
    <div class="flex items-center">
      <div class="mr2">Keep up with IPFS via RSS or social media:</div>
      <div>
        <a href="https://twitter.com/ipfs" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="36" fill="#aaa" viewBox="0 0 34 34" id="twitter-icon"><path d="M13.055 25.636c8.016 0 12.402-6.647 12.402-12.402 0-.187 0-.374-.009-.56a8.88 8.88 0 002.176-2.262 8.834 8.834 0 01-2.507.689 4.385 4.385 0 001.92-2.414 8.67 8.67 0 01-2.77 1.054 4.35 4.35 0 00-3.18-1.377 4.364 4.364 0 00-4.36 4.36c0 .34.043.672.11.995a12.377 12.377 0 01-8.984-4.556 4.37 4.37 0 001.351 5.823 4.409 4.409 0 01-1.971-.545v.06a4.368 4.368 0 003.493 4.275 4.25 4.25 0 01-1.147.153c-.28 0-.553-.025-.816-.076a4.358 4.358 0 004.071 3.026 8.742 8.742 0 01-5.414 1.87c-.349 0-.697-.017-1.037-.06a12.398 12.398 0 006.672 1.947z"></path></svg></a>
        <a href="https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" class="mb1" fill="#aaa" viewBox="0 0 35 35" id="youtube-icon"><path d="M25.949 18.022c0 1.395-.175 2.787-.175 2.787s-.174 1.133-.696 1.656c-.61.696-1.395.696-1.742.696-2.352.175-5.923.175-5.923.175s-4.442 0-5.748-.175c-.349-.086-1.22-.086-1.916-.696-.523-.523-.697-1.656-.697-1.656s-.174-1.392-.174-2.787v-1.306c0-1.394.174-2.787.174-2.787s.174-1.132.697-1.655c.61-.696 1.393-.696 1.741-.696 2.352-.175 5.923-.175 5.923-.175s3.571 0 5.923.175c.347 0 1.045 0 1.742.696.522.523.696 1.655.696 1.655s.175 1.393.175 2.787v1.306zM15.67 19.591l4.616-2.352-4.616-2.44v4.792zM4 17.413c0 7.404 6.009 13.413 13.412 13.413 7.403 0 13.413-6.01 13.413-13.413C30.913 10.009 24.816 4 17.413 4 10.01 4 4 10.01 4 17.413z"></path></svg></a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" class="pb2 ml2" fill="#aaa" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/></svg></a>
      </div>
    </div>
  </div>
    <div class="mt4 mb3 flex items-center">
      <select name="type" id="type" class="gray">
        <option value="browser">Filter by type</option>
        <option value="blog-posts">Blog posts</option>
        <option value="release-notes">Release notes</option>
        <option value="news-coverage">News coverage</option>
        <option value="videos">Videos</option>
        <option value="tutorials">Tutorials</option>
        <option value="events">Events</option>
      </select>
      <span class="mh2">or</span>
      <input type="text" id="newsletter" name="search" class="w-90" placeholder="Search for words or tags">
      <a class="f6 link glow o-80 ph2 pv1 br2 dib white bg-mid-gray ml2" href="#0">Go</a>
    </div>
    <p class="mb4">123 items filtered by
    <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray ml1"><a href="#0">x</a> type: news</span>
    <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray ml2"><a href="#0">x</a> type: blog</span>
    <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray ml2"><a href="#0">x</a> type: event</span>
    <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray ml2"><a href="#0">x</a> tag: foo</span></p>
    <div class="fl w-100 w-50-ns ph2">
      <div class="pa1 mb3 bg-gray-muted grow db no-underline">
        <a href="/blog-post"><img class="db w-100 o-60" src="/assets/img/blog-casestudy.png"></a>
        <p class="pa1 ma0 fw6">
          <a href="/blog-post">Lorem ipsum dolor sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">blog</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">bar</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">baz</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar velit. Nunc vitae blandit nisi. Nam pulvinar augue nibh, sit amet varius magna egestas ac.
        </p>
      </div>
      <div class="pa1 mb3 bg-gray-muted grow db no-underline">
        <a href="/blog-post"><img class="db w-100 o-60" src="/assets/img/blog-weekly.png"></a>
        <p class="pa1 ma0 fw6">
          <a href="/blog-post">Lorem ipsum dolor sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">blog</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">bar</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">baz</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar velit. Nunc vitae blandit nisi. Nam pulvinar augue nibh, sit amet varius magna egestas ac.
        </p>
      </div>
      <div class="pa1 mb3 bg-gray-muted grow db no-underline">
        <a href="/blog-post"><img class="db w-100 o-60" src="/assets/img/blog-contentrouting.png"></a>
        <p class="pa1 ma0 fw6">
          <a href="/blog-post">Lorem ipsum dolor sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">blog</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">bar</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">baz</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar velit. Nunc vitae blandit nisi. Nam pulvinar augue nibh, sit amet varius magna egestas ac.
        </p>
      </div>
    </div>
    <div class="fl w-50 w-25-ns ph2">
      <div class="pa1 mb3 bg-light-gray grow db no-underline">
        <a href="#modal-video"><img class="db w-100" src="/assets/img/video-placeholder.jpg"></a>
        <p class="ph1 pt ma0 fw6">
          <a href="#modal-video">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">video</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">bar</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="pa1 mb3 bg-washed-blue grow db no-underline">
        <img class="db w-100 o-60" src="/assets/img/event-protoschool.jpg">
        <p class="ph1 pt ma0 fw6">
          <a href="">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">event</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">bar</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="pa1 mb3 bg-light-gray grow db no-underline">
        <a href="#modal-video"><img class="db w-100" src="/assets/img/release-example.png"></a>
        <p class="ph1 pt ma0 fw6">
          <a href="#modal-video">go-ipfs v0.7</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">release</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">foo</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="pa1 mb3 bg-washed-blue grow db no-underline">
        <img class="db w-100" src="/assets/img/tutorial-protoschool.png">
        <p class="ph1 pt ma0 fw6">
          <a href="">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">tutorial</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div class="fl w-50 w-25-ns ph2">
      <div class="pa1 mb3 bg-washed-blue grow db no-underline">
        <img class="db w-100" src="/assets/img/tutorial-protoschool.png">
        <p class="ph1 pt ma0 fw6">
          <a href="">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">tutorial</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="pa1 mb3 bg-light-gray grow db no-underline">
        <a href="#modal-video"><img class="db w-100" src="/assets/img/video-placeholder.jpg"></a>
        <p class="ph1 pt ma0 fw6">
          <a href="#modal-video">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">video</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">bar</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="pa1 mb3 bg-washed-blue grow db no-underline">
        <img class="db w-100 o-60" src="/assets/img/news-example.jpg">
        <p class="ph1 pt ma0 fw6">
          <a href="">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">news</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-light-gray"><a href="">bar</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020<br/>CoinTelegraph</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet, with lightning bolts.
        </p>
      </div>
      <div class="pa1 mb3 bg-light-gray grow db no-underline">
        <a href="#modal-video"><img class="db w-100" src="/assets/img/video-placeholder.jpg"></a>
        <p class="ph1 pt ma0 fw6">
          <a href="#modal-video">Lorem sit amet</a>
        </p>
        <div class="ph1 mb1">
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">video</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">foo</a></span>
          <span class="f7 link glow o-80 ph2 pv1 br2 dib bg-white"><a href="">bar</a></span>
        </div>
        <p class="ml1 i f7 mv0">XX Month 2020</p>
        <p class="pa1 ma0">
          Lorem ipsum dolor sit amet, lorem ipsum ipsum.
        </p>
      </div>
    </div>
    <div class="tc cf cb mb3">
      <a class="button-secondary f5 link glow o-80 ba bw1 ph4 pv3 mb2 br2 dib dark-gray mh2" href="">Load More</a>
    </div>
    <div id="modal-video" class="modal-window fixed top-0 right-0 bottom-0 left-0 z-999">
      <div class="absolute pa4 bg-white">
        <a href="#install" title="Close" class="mt3 mr3 tr absolute top-0 right-0 no-underline f4">X</a>
        <div class="mt3">
          <a href="#modal-video"><img class="db w-100" src="/assets/img/video-placeholder.jpg"></a>
          <p class="lh-title mb2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar velit.</p>
          <p class="lh-title i f6 gray mt0">Published 24 November 2020</p>
          <div>
            <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray">type: <a href="">video</a></span>
            <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray">tag: <a href="">foo</a></span>
            <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray">tag: <a href="">bar</a></span>
            <span class="f6 link glow o-80 ph2 pv1 br3 dib bg-light-gray">tag: <a href="">baz</a></span>
          </div>
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
