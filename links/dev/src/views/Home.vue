<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>This page includes a few links to various URLs:</p>
    <ul style="text-align: left">
      <li>A mention to a URL, in this case https://experiments.geekonaut.de/io19 that is not actually a link.</li>
      <li>An incorrect link tag <a data-href="https://avgp.github.io/lazy-loading-experiments">to the lazy-loading experiments</a></li>
      <li>A properly formatted link tag to <a href="https://50linesofco.de">my blog</a>.</li>
      <li>A link to an <a href="#another-section">anchor on this page</a>.</li>
    </ul>
    <h2 id="another-section">Another section</h2>
    <p>This section just functions as an anchor target</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nunc a dolor pellentesque laoreet. Pellentesque id lacus sem. Integer vitae erat turpis. Vestibulum eu metus ac velit vestibulum semper. Etiam laoreet felis sit amet imperdiet iaculis. Nullam convallis velit at ex posuere vestibulum. In sed semper ligula. Phasellus porttitor consequat tempor. Vestibulum rhoncus magna nec enim porta, vitae sodales est ultricies. Donec congue ipsum et metus dapibus, id dictum sem elementum. Pellentesque dictum vestibulum fermentum. Nullam molestie sollicitudin tincidunt. In in justo commodo, pulvinar dolor vitae, mattis ex. Maecenas id tortor nunc. Aenean ac neque rhoncus, ultrices massa et, dapibus mauris. Proin eu egestas lorem, vel tempus lectus.</p>
    <p>Donec vitae massa lacinia tellus accumsan volutpat. In semper vel risus in ornare. In quam dui, interdum vitae diam sollicitudin, ultrices ullamcorper lacus. Praesent euismod rutrum turpis. Pellentesque at convallis arcu, ut aliquam lorem. Nullam in massa at dolor condimentum ultrices a sit amet quam. Proin eget justo ac felis convallis rutrum vel a erat. Fusce vitae odio quam. Sed pharetra urna nibh, ac consectetur tellus auctor sit amet. Integer commodo tortor ut magna hendrerit aliquam. Cras tortor augue, auctor et condimentum eget, tempus convallis metus. Nunc molestie velit at nunc pharetra luctus. Duis pretium pulvinar felis, non tempor neque finibus nec. Nullam in erat eu ipsum scelerisque ornare. Vivamus risus justo, ultrices id ipsum vitae, feugiat porttitor risus. Donec quis mollis erat, non scelerisque erat.</p>
    <p>Phasellus hendrerit viverra odio, id mollis dui feugiat at. Phasellus vel risus vel ante faucibus consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut pulvinar eros. Proin et pretium felis. Quisque in odio ac ex facilisis consectetur. Sed justo urna, suscipit tristique tincidunt nec, sagittis quis arcu. Duis eu quam arcu. Cras sed diam sit amet nunc porta aliquet. Integer lobortis a nisi nec dignissim. Ut vulputate risus mi, at dictum arcu tincidunt nec. Morbi volutpat justo in ligula luctus accumsan. Sed in pellentesque nisi. Nulla molestie porta nulla quis aliquam. Quisque vehicula laoreet lacinia. Nam tortor lectus, efficitur ut ullamcorper non, sagittis ac libero.</p>
    <p>Maecenas fermentum tortor libero. Etiam blandit mauris sit amet orci congue, eu suscipit velit finibus. Fusce id iaculis est. Cras tincidunt rhoncus tellus, sed interdum enim sodales at. Aliquam in elit quam. Sed eu odio imperdiet, porta risus ut, placerat nibh. Vivamus felis metus, malesuada quis odio eget, viverra molestie elit. Fusce sagittis lectus ipsum, vel mattis nulla maximus sit amet. Aenean vitae dolor mauris.</p><p>Curabitur imperdiet tellus magna, a pellentesque ante mattis efficitur. Aenean vel ultrices sem. Ut a vestibulum libero. Quisque laoreet, lacus quis molestie varius, diam felis tristique sapien, nec dignissim diam magna vel nisl. In ac urna tincidunt, feugiat est non, faucibus tellus. Fusce id aliquet est. Cras blandit lacus facilisis, rutrum dolor a, sollicitudin sem.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
