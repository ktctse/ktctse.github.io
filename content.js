/* ============================================================================
   YOUR CONTENT  —  this is the ONLY file you need to edit.
   No HTML tags, no build step. Save it, refresh the browser, done.

   Block format (used in every channel):
     content:     the title line shown bold at the top of the block (required)
     description: body text — clicking the block opens a modal with both (optional)
     added:       "YYYY-MM-DD" — shows as "X days ago" on hover (optional)
     subtitle:    tiny mono label shown below the block, swaps to 'added' on hover (optional)
     image:       path to an image (e.g. "images/cover.jpeg"). The thumbnail shows ONLY the
                  image; the title, author (description) and note appear in the modal (optional)
     note:        free text shown in the modal below the title/author — your writing space (optional)
     noModal:     set to true to disable click-to-expand (optional)
   ============================================================================ */
window.SITE = {

  name: "Kevin Tse",

  // Autoplaying, muted, looping clip shown at the bottom of the homepage.
  homeVideo: "videos/homepage.mp4",
  homeVideoPoster: "images/homepage-poster.jpeg",

  sections: [
    { label: "Mind",   href: "mind.html",   page: "mind" },
    { label: "Matter", href: "matter.html", page: "matter" }
  ],

  /* ------------------------------- HOMEPAGE ------------------------------- */

  bio: [
    "Here to share uncaptured Third Culture perspectives.",
    "I went to UBC in my hometown Vancouver and worked in hardware/ consulting/ SaaS.",
    "Recently I've been spending time in Tokyo and Nagano."
  ],

  bookshelfNote: "",

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tsekevin/" },
    { label: "Github",   href: "https://github.com/ktctse" },
    // { label: "X",        href: "https://x.com/yourhandle" },
    // { label: "Substack", href: "https://yourname.substack.com" },
  ],

  /* --------------------------------- MIND -------------------------------- */

  mindIntro: "Sometimes I jot down ideas and share booklists",

  mind: [
    {
      slug: "writing",
      title: "writing",
      blocks: []
    },
    {
      slug: "ideas",
      title: "ideas",
      blocks: []
    },
    {
      slug: "bookshelf",
      title: "bookshelf",
      blocks: [
        { content: "The Beginning of Infinity", description: "David Deutsch", image: "images/beginning-of-infinity.jpeg", subtitle: "Explanations that transform the world", added: "2026-06-30", note: "" },
        { content: "Focus", description: "Marc Hijink", image: "images/focus-the-asml-way.jpeg", subtitle: "EUV lithography machines", added: "2026-06-30", note: "" },
        { content: "The Order of Time", description: "Carlo Rovelli", image: "images/the-order-of-time.jpg", subtitle: "Philosophy and the physics of time", added: "2026-06-30", note: "" },
        { content: "The Thinking Machine", description: "Stephen Witt", image: "images/the-thinking-machine.jpeg", subtitle: "A primer on Nvidia and GPU development", added: "2026-06-30", note: "" },
        { content: "", description: "", image: "images/this-is-for-everyone.jpeg", subtitle: "origin story of the internet", added: "2026-07-01", note: "" }
      ]
    }
  ],

  /* -------------------------------- MATTER ------------------------------- */

  matterIntro: "Moments, spaces, and things that inspire me",

  matter: [
    {
      slug: "moments",
      title: "moments",
      blocks: [
        { content: "", description: "", image: "images/fukuoka-art2.jpeg", subtitle: "street mural in fukuoka", added: "2026-06-30" },
        { content: "", description: "", image: "images/gold-coast.jpeg", subtitle: 2017.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/kitsilano-beach2.jpeg", subtitle: "kitsilano", added: "2026-06-30" },
        { content: "", description: "", image: "images/konbini.jpeg", subtitle: "konbini", added: "2026-06-30" },
        { content: "", description: "", image: "images/kyoto-station2.jpeg", subtitle: "sunset @ kyoto station", added: "2026-06-30" },
        { content: "", description: "", image: "images/nanjing.jpeg", subtitle: "memorial in nanjing", added: "2026-06-30" },
        { content: "", description: "", image: "images/river-district2.jpeg", subtitle: "blue hour by fraser river", added: "2026-06-30" },
        { content: "", description: "", image: "images/shekou.jpeg", subtitle: 2019.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/stanley-park.jpeg", subtitle: "sunset @ stanley park", added: "2026-06-30" },
        { content: "", description: "", image: "images/westernsichuan4.jpeg", subtitle: 2023.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/jingumae-2010.jpeg", subtitle: 2010.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/qplex.jpeg", subtitle: "new beginnings @ oct park", added: "2026-06-30" },
        { content: "", description: "", video: "videos/han-river.mp4", poster: "images/han-river-poster.jpeg", subtitle: "along han river in seoul", added: "2026-06-30" },
        { content: "", description: "", video: "videos/niseko-hyatt2.mp4", poster: "images/niseko-hyatt2-poster.jpeg", subtitle: "konayuki in hokkaido", added: "2026-06-30" },
        { content: "", description: "", video: "videos/tokyo-bakery.mp4", poster: "images/tokyo-bakery-poster.jpeg", subtitle: "hatsuyuki in tokyo", added: "2026-06-30" },
        { content: "", description: "", image: "images/gateau-basque.jpeg", subtitle: 2021.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/abel-light.jpeg", subtitle: 2020.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/canada-2023.jpeg", subtitle: "canada day", added: "2026-06-30" },
        { content: "", description: "", image: "images/dd-2022.jpeg", subtitle: 2022.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/vk2-2024.jpeg", subtitle: 2024.0, added: "2026-06-30" },
        { content: "", description: "", video: "videos/2018.mp4", poster: "images/2018-poster.jpeg", subtitle: 2018.0, added: "2026-06-30" },
        { content: "", description: "", video: "videos/aviation.mp4", poster: "images/aviation-poster.jpeg", subtitle: "“you have control”", added: "2026-06-30" },
        { content: "", description: "", image: "images/homemade-taiwanese-noodles.jpeg", subtitle: 2013.0, added: "2026-06-30" },
        { content: "", description: "", image: "images/lambai-island-taiwan.jpeg", subtitle: 2016.0, added: "2026-06-30" }
      ]
    },
    {
      slug: "shred",
      title: "shred",
      blocks: [
        { content: "", description: "", image: "images/hakuba-goryu.jpeg", subtitle: "hakuba goryu (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/mount-myoko.jpeg", subtitle: "mount myōkō (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/myoko-kogen.jpeg", subtitle: "myōkō kogen (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/myoko-view.jpeg", subtitle: "myōkō base (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/sanosaka.jpeg", subtitle: "lake aoki from sanosaka (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/hanazono.jpeg", subtitle: "hanazono (hokkaido)", added: "2026-06-30" },
        { content: "", description: "", image: "images/niseko-united.jpeg", subtitle: "niseko united", added: "2026-06-30" },
        { content: "", description: "", image: "images/shiga-kogen.jpeg", subtitle: "shiga kogen (nagano)", added: "2026-06-30" }
      ]
    },
    {
      slug: "cafes",
      title: "cafés",
      blocks: [
        { content: "", description: "", image: "images/fuglen2.jpeg", subtitle: "fuglen (tokyo)", added: "2026-06-30" },
        { content: "", description: "", image: "images/groove-coffee.jpeg", subtitle: "groove coffee (nagoya)", added: "2026-06-30" },
        { content: "", description: "", image: "images/miion-cafe.jpeg", subtitle: "miion café (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/motto-coffee.jpeg", subtitle: "moto coffee (osaka)", added: "2026-06-30" },
        { content: "", description: "", image: "images/sz-kurasu.jpeg", subtitle: "specialty by kurasu (shenzhen)", added: "2026-06-30" },
        { content: "", description: "", image: "images/sz-kurasu-match2.jpeg", subtitle: "matcha latte by kurasu (shenzhen)", added: "2026-06-30" },
        { content: "", description: "", image: "images/ai-coffee-hakuba.jpeg", subtitle: "ai coffee hakuba (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/gee-coffee-shenzhen.jpeg", subtitle: "panama geisha by gee coffee (shenzhen)", added: "2026-06-30" },
        { content: "", description: "", image: "images/glitch-coffee.jpeg", subtitle: "glitch coffee (osaka)", added: "2026-06-30" },
        { content: "", description: "", image: "images/halfway-coffee.jpeg", subtitle: "halfway coffee (hong kong)", added: "2026-06-30" },
        { content: "", description: "", image: "images/ops-shanghai.jpeg", subtitle: "cherry blossom by o.p.s. cafe (shanghai)", added: "2026-06-30" },
        { content: "", description: "", image: "images/ping-coffee-hangzhou.jpeg", subtitle: "ping coffee (hangzhou)", added: "2026-06-30" },
        { content: "", description: "", image: "images/rokkan-coffee-creators.jpeg", subtitle: "rokkan coffee roasters (okinawa)", added: "2026-06-30" },
        { content: "", description: "", image: "images/single-origin.jpeg", subtitle: "single origin (macau)", added: "2026-06-30" },
        { content: "", description: "", image: "images/vangogh-chagee.jpeg", subtitle: "chagee x van gogh (hong kong)", added: "2026-06-30" },
        { content: "", description: "", image: "images/three-and-a-half.jpeg", subtitle: "specialty by three & a half (shanghai)", added: "2026-06-30" }
      ]
    },
    {
      slug: "cuisine",
      title: "cuisine",
      blocks: [
        { content: "", description: "", image: "images/unaju-kawatoyo-narita.jpeg", subtitle: "unaju by kawatoyo (narita)", added: "2026-06-30" },
        { content: "", description: "", image: "images/homemade-avocado-cheese-salmon-bagel.jpeg", subtitle: "homemade avocado cheese salmon bagel (nanshan)", added: "2026-06-30" },
        { content: "", description: "", image: "images/homemade-salmon-rice-2026.jpeg", subtitle: "homemade grilled salmon on rice (richmond)", added: "2026-06-30" },
        { content: "", description: "", image: "images/negitoro-cone-by-sushi-tokyo-ten.jpeg", subtitle: "negitoro cone by sushi tokyo ten (tokyo)", added: "2026-06-30" },
        { content: "", description: "", image: "images/soba-noodles-ayamedo.jpeg", subtitle: "soba noodles by ayademo (osaka)", added: "2026-06-30" },
        { content: "", description: "", image: "images/ebimaru.jpeg", subtitle: "lobster soup ramen by ebimaru (tokyo)", added: "2026-06-30" },
        { content: "", description: "", image: "images/macau-mizumi-sushi.jpeg", subtitle: "sushi mizumi (macau)", added: "2026-06-30" },
        { content: "", description: "", image: "images/new-fuji.jpeg", subtitle: "new fuji (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/osaka-omakase.jpeg", subtitle: "sushidokoro amano (osaka)", added: "2026-06-30" },
        { content: "", description: "", image: "images/raisu2.jpeg", subtitle: "mosaic chirashi by raisu (vancouver)", added: "2026-06-30" },
        { content: "", description: "", video: "videos/rakuichi.mp4", poster: "images/rakuichi-poster.jpeg", subtitle: "hand-rolled soba by rakuichi (niseko)", added: "2026-06-30" },
        { content: "", description: "", image: "images/akatsutei-curry-nagoya.jpeg", subtitle: "akatsu tei curry (nagoya)", added: "2026-06-30" },
        { content: "", description: "", image: "images/bc-wildsalmon.jpeg", subtitle: "homemade seasoned bc wild sockeye salmon (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/britannia-brewing-steveston-chili-salmon-spaghetti.jpeg", subtitle: "chili & salmon spaghetti by brittania brewing (steveston)", added: "2026-06-30" },
        { content: "", description: "", image: "images/butagumi-tonkatsu-tokyo.jpeg", subtitle: "tonkatsu by butagumi (tokyo)", added: "2026-06-30" },
        { content: "", description: "", image: "images/colette-hanoi.jpeg", subtitle: "lobster bisque by colette (hanoi)", added: "2026-06-30" },
        { content: "", description: "", image: "images/fineprint-ricotta-toast.jpeg", subtitle: "ricotta toast by fineprint (hong kong)", added: "2026-06-30" },
        { content: "", description: "", image: "images/fuchun-xlb-shanghai.jpeg", subtitle: "xiaolongbao by fuchun (shanghai)", added: "2026-06-30" },
        { content: "", description: "", image: "images/homemade-overnight-oats.jpeg", subtitle: "homemade overnight oats (burnaby)", added: "2026-06-30" },
        { content: "", description: "", image: "images/homemade-salmon-quinoa-bowl.jpeg", subtitle: "homemade salmon quinoa bowl (melbourne)", added: "2026-06-30" },
        { content: "", description: "", image: "images/june-chocolate-mousse-vancouver.jpeg", subtitle: "chocolate mousse by june (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/mikado-goya-chanpuru-okinawa.jpeg", subtitle: "goya chanpuru by mikado (okinawa)", added: "2026-06-30" },
        { content: "", description: "", image: "images/moumoutei-hiroki-nagoya.jpeg", subtitle: "wagyu donburi by moumoutei hiroki (nagoya)", added: "2026-06-30" },
        { content: "", description: "", image: "images/notti-lasagne.jpeg", subtitle: "lasagna by notti (shenzhen)", added: "2026-06-30" },
        { content: "", description: "", image: "images/pasta-tuscan-pork-sausage-ragu.jpeg", subtitle: "tuscan pasta with pork sausage ragu by associazione chianti (hong kong)", added: "2026-06-30" },
        { content: "", description: "", image: "images/penang-air-itam-laksa.jpeg", subtitle: "laksa by penang air itam (malaysia)", added: "2026-06-30" },
        { content: "", description: "", image: "images/rongxiaoguan-shasuan-doumian.jpeg", subtitle: "shasuan doumian by rong xiaoguan (shanghai)", added: "2026-06-30" },
        { content: "", description: "", image: "images/ryoma-katsudon-hakuba.jpeg", subtitle: "katsu-don by ryoma (hakuba)", added: "2026-06-30" },
        { content: "", description: "", image: "images/salmon-soba-okini.jpeg", subtitle: "salmon soba by okini (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/shakshouka-medina-cafe.jpeg", subtitle: "shakshouka by medina cafe (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/unagi-sora-shirayaki.jpeg", subtitle: "shirayaki by unagi sora (kyoto)", added: "2026-06-30" },
        { content: "", description: "", image: "images/uni-rakuichi.jpeg", subtitle: "bafun uni by rakuichi (hokkaido)", added: "2026-06-30" }
      ]
    },
    {
      slug: "stuff",
      title: "stuff",
      blocks: [
        { content: "", description: "", image: "images/hirono-2024.jpeg", subtitle: "terracotta", added: "2026-06-30" },
        { content: "", description: "", image: "images/okinawa-2024.jpeg", subtitle: "ryukyu glass", added: "2026-06-30" },
        { content: "", description: "", image: "images/air-canada.jpeg", subtitle: "widebody engine", added: "2026-06-30" },
        { content: "", description: "", image: "images/da20.jpeg", subtitle: "da-20", added: "2026-06-30" },
        { content: "", description: "", image: "images/goyemon.jpeg", subtitle: "modern setta’s by goyemon", added: "2026-06-30" },
        { content: "", description: "", image: "images/marcusaurelius.jpeg", subtitle: "marcus aurelius", added: "2026-06-30" },
        { content: "", description: "", image: "images/martinator.jpeg", subtitle: "martinator by alpinestars", added: "2026-06-30" },
        { content: "", description: "", image: "images/postcard-alien.jpeg", subtitle: "alpha centauri", added: "2026-06-30" },
        { content: "", description: "", image: "images/richmond-porsche.jpeg", subtitle: "vintage 911", added: "2026-06-30" },
        { content: "", description: "", image: "images/asterisk-clockwork.jpeg", subtitle: "clockwork", added: "2026-06-30" },
        { content: "", description: "", image: "images/escher.jpeg", subtitle: "escher", added: "2026-06-30" },
        { content: "", description: "", image: "images/gentemstick-goodie-bag.jpeg", subtitle: "gentemstick goodie bag", added: "2026-06-30" }
      ]
    },
    {
      slug: "interior",
      title: "interior",
      blocks: [
        { content: "", description: "", image: "images/osaka-cuisine.jpeg", subtitle: "ayamedo", added: "2026-06-30" },
        { content: "", description: "", image: "images/cantonese.jpeg", subtitle: "cantonese style", added: "2026-06-30" },
        { content: "", description: "", image: "images/hot-desks.jpeg", subtitle: "hot desks", added: "2026-06-30" },
        { content: "", description: "", image: "images/chengdu-art-museum.jpeg", subtitle: "chengdu art museum", added: "2026-06-30" },
        { content: "", description: "", image: "images/chengdu-niccolo.jpeg", subtitle: "niccolò chengdu", added: "2026-06-30" },
        { content: "", description: "", image: "images/dali.jpeg", subtitle: "lakeview in dali", added: "2026-06-30" },
        { content: "", description: "", image: "images/myoko-hotel.jpeg", subtitle: "some lodge lobby in myoko", added: "2026-06-30" },
        { content: "", description: "", image: "images/niseko-hyatt-room.jpeg", subtitle: "park hyatt niseko", added: "2026-06-30" },
        { content: "", description: "", image: "images/niseko-muwa.jpeg", subtitle: "muwa", added: "2026-06-30" },
        { content: "", description: "", image: "images/okinawa-seaview.jpeg", subtitle: "umi no ryotei okinawa", added: "2026-06-30" },
        { content: "", description: "", image: "images/osaka-library.jpeg", subtitle: "hirakata t-site ", added: "2026-06-30" },
        { content: "", description: "", image: "images/hangzhoudining.jpeg", subtitle: "chance gathering in west lake", added: "2026-06-30" },
        { content: "", description: "", image: "images/associazione-chianti-interior.jpeg", subtitle: "associazione chianti", added: "2026-06-30" },
        { content: "", description: "", image: "images/the-temple-house.jpeg", subtitle: "the temple house", added: "2026-06-30" }
      ]
    },
    {
      slug: "structure",
      title: "structure",
      blocks: [
        { content: "", description: "", image: "images/nyc.jpeg", subtitle: "upper east side (nyc)", added: "2026-06-30" },
        { content: "", description: "", image: "images/whitewall.jpeg", subtitle: "de_mirage by whitewall (jerusalem)", added: "2026-06-30" },
        { content: "", description: "", image: "images/universal-business-park-beijing.jpeg", subtitle: "universal business park (beijing)", added: "2026-06-30" },
        { content: "", description: "", image: "images/bc-place.jpeg", subtitle: "canada place (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/chongqing-hongya-cave.jpeg", subtitle: "hongyadong (chongqing)", added: "2026-06-30" },
        { content: "", description: "", image: "images/chongqing-wulong.jpeg", subtitle: "wulong karst (chongqing)", added: "2026-06-30" },
        { content: "", description: "", image: "images/fushimi-inari.jpeg", subtitle: "fushimi inari (kyoto)", added: "2026-06-30" },
        { content: "", description: "", image: "images/garden-of-gethsemane.jpeg", subtitle: "garden of gethsemane (jerusalem)", added: "2026-06-30" },
        { content: "", description: "", image: "images/kaohsiung-station.jpeg", subtitle: "formosa boulevard station (kaohsiung)", added: "2026-06-30" },
        { content: "", description: "", image: "images/osaka-nakanoshima.jpeg", subtitle: "nakanoshima park (osaka)", added: "2026-06-30" },
        { content: "", description: "", image: "images/shanghai-bund.jpeg", subtitle: "the bund (shanghai)", added: "2026-06-30" },
        { content: "", description: "", image: "images/stanley-park2.jpeg", subtitle: "coal harbour (vancouver)", added: "2026-06-30" },
        { content: "", description: "", image: "images/summer-palace.jpeg", subtitle: "summer palace (beijing)", added: "2026-06-30" },
        { content: "", description: "", image: "images/telaviv2.jpeg", subtitle: "nordoy hotel (tel aviv)", added: "2026-06-30" },
        { content: "", description: "", image: "images/tokyo-tower.jpeg", subtitle: "tokyo tower (from roppongi hills)", added: "2026-06-30" },
        { content: "", description: "", video: "videos/kyoto-castle.mp4", poster: "images/kyoto-castle-poster.jpeg", subtitle: "nijō castle (kyoto)", added: "2026-06-30" },
        { content: "", description: "", image: "images/sakae-nagoya.jpeg", subtitle: "sakae (nagoya)", added: "2026-06-30" }
      ]
    },
    {
      slug: "nature",
      title: "nature",
      blocks: [
        { content: "", description: "", video: "videos/2023.mp4", poster: "images/2023-poster.jpeg", subtitle: "shuanglang, dali (yunnan)", added: "2026-06-30" },
        { content: "", description: "", video: "videos/xihu-2022.mp4", poster: "images/xihu-2022-poster.jpeg", subtitle: "west lake (hangzhou)", added: "2026-06-30" },
        { content: "", description: "", image: "images/dali-seaview.jpeg", subtitle: "erhai lake (dali)", added: "2026-06-30" },
        { content: "", description: "", image: "images/jigokudani-monkeys.jpeg", subtitle: "jigokudani monkeys (nagano)", added: "2026-06-30" },
        { content: "", description: "", image: "images/sunshine-coast.jpeg", subtitle: "madeira park, sunshine coast (bc)", added: "2026-06-30" },
        { content: "", description: "", image: "images/westernsichuan.jpeg", subtitle: "bipeng valley (western sichuan)", added: "2026-06-30" },
        { content: "", description: "", image: "images/westernsichuan2.jpeg", subtitle: "mount siguniang (western sichuan)", added: "2026-06-30" },
        { content: "", description: "", image: "images/wilsonpromontory2.jpeg", subtitle: "wilson's promontory park (melbourne)", added: "2026-06-30" },
        { content: "", description: "", image: "images/jade-dragon-snow-mountain.jpeg", subtitle: "jade dragon snow mountain (yunnan)", added: "2026-06-30" },
        { content: "", description: "", image: "images/garibaldi-trees.jpeg", subtitle: "garibaldi provincial park (bc)", added: "2026-06-30" },
        { content: "", description: "", image: "images/lamma-island.jpeg", subtitle: "lamma island (hong kong)", added: "2026-06-30" },
        { content: "", description: "", image: "images/vancouver-aurora.jpeg", subtitle: "aurora lights in vancouver (10/2024)", added: "2026-06-30" },
        { content: "", description: "", image: "images/xishuangbanna.jpeg", subtitle: "xishuangbanna (yunnan)", added: "2026-06-30" }
      ]
    }
  ]

};

// Sort moments data: named blocks first (preserve order), year-numbered after (descending).
// This controls the base order; a DOM sort below handles render.js's video interleaving.
(function () {
  var sec = window.SITE.matter.find(function (s) { return s.slug === "moments"; });
  if (!sec) return;
  sec.blocks.sort(function (a, b) {
    var aNum = typeof a.subtitle === "number";
    var bNum = typeof b.subtitle === "number";
    if (aNum && bNum) return b.subtitle - a.subtitle;
    if (aNum) return 1;
    if (bNum) return -1;
    return 0;
  });
}());

// DOM sort for moments: re-sort rendered blocks after render.js's arrangeVideosToTop
// interleaves videos with photos (which would otherwise place the 2018 video next to
// text-captioned photos). Runs whenever the moments grid is inserted into the DOM.
(function () {
  function isYear(text) { return /^\d{4}$/.test((text || "").trim()); }

  function sortGrid(grid) {
    var wraps = Array.from(grid.children);
    wraps.sort(function (a, b) {
      var aEl = a.querySelector(".things-block-subtitle");
      var bEl = b.querySelector(".things-block-subtitle");
      var aText = aEl ? aEl.textContent : "";
      var bText = bEl ? bEl.textContent : "";
      var aIsYear = isYear(aText), bIsYear = isYear(bText);
      if (aIsYear && bIsYear) return +bText - +aText;
      if (aIsYear) return 1;
      if (bIsYear) return -1;
      return 0;
    });
    wraps.forEach(function (w) { grid.appendChild(w); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          var grid = node.classList && node.classList.contains("things-blocks")
            ? node : (node.querySelector ? node.querySelector(".things-blocks") : null);
          if (!grid) return;
          var sib = grid.previousElementSibling;
          while (sib && !sib.classList.contains("things-channel-title")) {
            sib = sib.previousElementSibling;
          }
          if (sib && sib.textContent === "moments") sortGrid(grid);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
}());
