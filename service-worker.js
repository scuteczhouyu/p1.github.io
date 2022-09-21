/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1f6bbe6abc7c2659fc933f6dabd59659"
  },
  {
    "url": "assets/css/0.styles.c986e881.css",
    "revision": "a42f4bd6b90ab87430d2b9ff5d1dc994"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.3e94535d.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.cf8bfb2f.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.bdfba657.js",
    "revision": "03ecf82cefce3ebbbb2644c493aaa943"
  },
  {
    "url": "assets/js/13.cd66c14e.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.1a94d600.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.45732e83.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.ea5a63c1.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.2a1f81ec.js",
    "revision": "13a68ee4e2168c9ffccac54e4705a7c8"
  },
  {
    "url": "assets/js/18.558301ea.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.7ba65a8e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.38ad200e.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.e9124f59.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.f99d6d8e.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.b9207daf.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.c432a680.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.9f640e87.js",
    "revision": "a4d311892fb563f9e2d3de9307c864b1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "593c0163ef1a4307bc758e285c19e3a6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3e6008766c70b35fe2066d2c6fe9bb8c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d1e33b25759bd7a1e4cb10ec7c1499e4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "acbe8379dcde57131151b987d8616d75"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "79f81e3cc217840f052580b999d4fd36"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "02dc2a7dda90afa8cf4744ab6dd6e47d"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "d6e56abe070312767ceb04bc8ef08641"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "500208b811ef46f2c1cc7befd76f73c7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c39caf7ad65d86d6a6260eb841cf59d5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e64b1ab937bde11fdef7702a2d002d47"
  },
  {
    "url": "tags/js/index.html",
    "revision": "502be98c38492fdd758d06f968bfd587"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b1caf9c5a9165dde05daf09ce06284c2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "566bbcf1a2cc540cdd46eba0b3f9b486"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f0704902b6fc110c8a06ba73ac0148b0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "660496cc91513317481417880e340aa5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8a3d60d43e57c9bb0525ad3edba97b8c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "36617422eb8c5cf7e4f0065465178835"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "259af4830975e4fccddfca9f12d20c94"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7f267a49f57e4c7da7642eadbc54993"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "11519f94bd745d8b92e5d45ebc4c3ed3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fa9f658fff8aec4f872952e90c6abf06"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a07400a110f60fd29bf28886f2072d5c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "63f42fac340507e0b7b95bfe2d779fe8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "93452353f0682d1b0994f61b7047056c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
