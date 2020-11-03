<template>
  <div>
    <div class="">
      <p class="mt2 mb0 lh-title">
        Event organizer, content creator, or journalist? <a href="/does/not/exist">Submit</a> an item or view the <a href="press">IPFS press kit</a>.
      </p>
      <div class="flex items-center">
        <div class="mr1">Prefer your news a different way? Try our <a href="#newsletter">weekly newsletter</a>, <a href="/does/not/exist">RSS</a>, or social media.</div>
        <div>
          <a href="https://twitter.com/ipfs" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="36" fill="#aaa" viewBox="0 0 34 34" id="twitter-icon"><path d="M13.055 25.636c8.016 0 12.402-6.647 12.402-12.402 0-.187 0-.374-.009-.56a8.88 8.88 0 002.176-2.262 8.834 8.834 0 01-2.507.689 4.385 4.385 0 001.92-2.414 8.67 8.67 0 01-2.77 1.054 4.35 4.35 0 00-3.18-1.377 4.364 4.364 0 00-4.36 4.36c0 .34.043.672.11.995a12.377 12.377 0 01-8.984-4.556 4.37 4.37 0 001.351 5.823 4.409 4.409 0 01-1.971-.545v.06a4.368 4.368 0 003.493 4.275 4.25 4.25 0 01-1.147.153c-.28 0-.553-.025-.816-.076a4.358 4.358 0 004.071 3.026 8.742 8.742 0 01-5.414 1.87c-.349 0-.697-.017-1.037-.06a12.398 12.398 0 006.672 1.947z"></path></svg></a>
          <a href="https://www.youtube.com/channel/UCdjsUXJ3QawK4O5L1kqqsew" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" class="mb1" fill="#aaa" viewBox="0 0 35 35" id="youtube-icon"><path d="M25.949 18.022c0 1.395-.175 2.787-.175 2.787s-.174 1.133-.696 1.656c-.61.696-1.395.696-1.742.696-2.352.175-5.923.175-5.923.175s-4.442 0-5.748-.175c-.349-.086-1.22-.086-1.916-.696-.523-.523-.697-1.656-.697-1.656s-.174-1.392-.174-2.787v-1.306c0-1.394.174-2.787.174-2.787s.174-1.132.697-1.655c.61-.696 1.393-.696 1.741-.696 2.352-.175 5.923-.175 5.923-.175s3.571 0 5.923.175c.347 0 1.045 0 1.742.696.522.523.696 1.655.696 1.655s.175 1.393.175 2.787v1.306zM15.67 19.591l4.616-2.352-4.616-2.44v4.792zM4 17.413c0 7.404 6.009 13.413 13.412 13.413 7.403 0 13.413-6.01 13.413-13.413C30.913 10.009 24.816 4 17.413 4 10.01 4 4 10.01 4 17.413z"></path></svg></a>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" class="pb2 ml2" fill="#aaa" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/></svg></a>
        </div>
      </div>
    </div>

    <div class="mt4 mb3 flex items-center">
      <span class="mr2">Sort items by type:</span>
      <select name="type" id="type" class="charcoal pa1 w5">
        <option value="browser">All content</option>
        <option value="blog-posts">Blog posts</option>
        <option value="release-notes">Release notes</option>
        <option value="news-coverage">Academic papers</option>
        <option value="news-coverage">News coverage</option>
        <option value="videos">Videos</option>
        <option value="tutorials">Tutorials</option>
        <option value="events">Events</option>
      </select>
      <span class="mh2">and/or</span>
      <input type="text" name="search" class="w-40 pa1" placeholder="Search for words or #tags">
      <a class="button-primary bg-teal f5 glow o-80 ph3 pv2 br2 dib white ml2" href="#0">Search</a>
    </div>

    <div class="ba br2 b--gray pa2 mb4">
      <p class="ma0 pa0">Displaying <span class="fw7">42 results</span> (newest first) of all types for "search string" with tags:
        <span class="f6 glow o-80 ph2 br3 dib bg-snow ml1"><a href="#0">x </a>#foo</span>
        <span class="f6 glow o-80 ph2 br3 dib bg-snow ml2"><a href="#0">x </a>#bar</span>
      </p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
// css/stylus here or in global stylus file
</style>
