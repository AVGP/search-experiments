<template>
  <div class="simple">
    <img alt="Vue logo" src="../assets/logo.png">
    <script type="application/ld+json" v-html="structuredData"></script>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Pulvinar sapien et ligula ullamcorper malesuada. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Neque viverra justo nec ultrices. Lobortis scelerisque fermentum dui faucibus in ornare. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Etiam tempor orci eu lobortis elementum nibh.
    </p><p>
      Sed viverra ipsum nunc aliquet bibendum enim facilisis. Tincidunt tortor aliquam nulla facilisi cras fermentum. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Mattis molestie a iaculis at erat pellentesque adipiscing. Sem nulla pharetra diam sit amet nisl. Egestas quis ipsum suspendisse ultrices gravida. Elit ut aliquam purus sit amet luctus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Non enim praesent elementum facilisis leo vel.
    </p><p>
      Urna cursus eget nunc scelerisque viverra mauris in. Quis lectus nulla at volutpat. At tellus at urna condimentum mattis. Diam in arcu cursus euismod quis viverra nibh. Massa tempor nec feugiat nisl pretium fusce id. Auctor neque vitae tempus quam. Lectus urna duis convallis convallis tellus. Sed adipiscing diam donec adipiscing tristique risus. Et leo duis ut diam quam nulla porttitor massa id. Urna porttitor rhoncus dolor purus non. Morbi tristique senectus et netus et malesuada fames ac. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Enim nunc faucibus a pellentesque sit. In aliquam sem fringilla ut morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Feugiat pretium nibh ipsum consequat nisl.
    </p><p>
      Ipsum nunc aliquet bibendum enim facilisis. Sit amet facilisis magna etiam tempor orci eu. Donec massa sapien faucibus et. Viverra mauris in aliquam sem fringilla ut morbi. Odio aenean sed adipiscing diam. Convallis a cras semper auctor neque vitae tempus. Est placerat in egestas erat imperdiet sed. Consequat ac felis donec et odio pellentesque diam volutpat. Vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Integer enim neque volutpat ac tincidunt. Proin sagittis nisl rhoncus mattis rhoncus. Platea dictumst quisque sagittis purus sit amet. Lorem mollis aliquam ut porttitor leo a.
    </p><p>
      Suspendisse in est ante in nibh mauris cursus mattis molestie. Et malesuada fames ac turpis egestas maecenas pharetra. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Ac turpis egestas integer eget aliquet nibh praesent. Quam vulputate dignissim suspendisse in est ante in. Faucibus turpis in eu mi bibendum neque egestas congue. Metus aliquam eleifend mi in nulla. Pretium vulputate sapien nec sagittis aliquam. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Tristique nulla aliquet enim tortor. Ac tortor dignissim convallis aenean et tortor at risus. Vulputate sapien nec sagittis aliquam malesuada. Elementum integer enim neque volutpat. Mattis molestie a iaculis at erat pellentesque. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Venenatis tellus in metus vulputate eu scelerisque. Quis imperdiet massa tincidunt nunc pulvinar. Et odio pellentesque diam volutpat commodo.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Simple',
  data() {
    return {
      structuredData: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://experiments.geekonaut.de/",
  "logo": "https://experiments.geekonaut.de/structured-data/logo.png"
}`
    }
  }
}
</script>
