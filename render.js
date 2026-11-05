(function () {
  "use strict";

  // --- Dev live-reload: localhost only, inert on any deployed host ---
  // Polls content.js's Last-Modified; reloads when the auto-apply watcher updates it.
  if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
    (function () {
      var seen = null;
      setInterval(function () {
        fetch("content.js?_=" + Date.now(), { method: "HEAD", cache: "no-store" })
          .then(function (r) {
            var tag = r.headers.get("last-modified") || r.headers.get("content-length");
            if (seen === null) { seen = tag; return; }
            if (tag && tag !== seen) location.reload();
          })
          .catch(function () {});
      }, 1500);
    })();
  }

  var S = window.SITE || {};
  var page = document.body.getAttribute("data-page") || "home";

  // ---- NAV ----
  var navEl = document.getElementById("site-nav");
  if (navEl) {
    [{ label: S.name || "", href: "index.html", page: "home" }]
      .concat(S.sections || [])
      .forEach(function (it) {
        var a = document.createElement("a");
        a.className = "header-link" + (it.page === page ? " active" : "");
        a.href = it.href;
        a.textContent = it.label;
        navEl.appendChild(a);
      });
  }

  var root = document.getElementById("content");
  if (!root) return;

  // ---- Modal (shared, appended once per channel page) ----
  var modalOverlay = null, modalBox = null;

  function initModal() {
    modalOverlay = document.createElement("div");
    modalOverlay.className = "things-modal-overlay";

    modalBox = document.createElement("div");
    modalBox.className = "things-modal";

    var closeBtn = document.createElement("button");
    closeBtn.className = "things-modal-close";
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", closeModal);

    modalBox.appendChild(closeBtn);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  function openModal(bl) {
    while (modalBox.children.length > 1) modalBox.removeChild(modalBox.lastChild);
    if (bl.video) {
      var mvid = document.createElement("video");
      mvid.className = "things-modal-video";
      mvid.src = bl.video;
      mvid.controls = true;
      mvid.autoplay = true;
      mvid.loop = true;
      mvid.muted = true;
      mvid.playsInline = true;
      if (bl.poster || bl.image) mvid.poster = bl.poster || bl.image;
      modalBox.appendChild(mvid);
    } else if (bl.image) {
      var mimg = document.createElement("img");
      mimg.className = "things-modal-img";
      mimg.src = bl.image;
      mimg.alt = bl.content || bl.text || "";
      modalBox.appendChild(mimg);
    }
    var mainText = bl.content || bl.text || "";
    if (mainText) {
      var t = document.createElement("p");
      t.className = "things-modal-title";
      appendRich(t, mainText);
      modalBox.appendChild(t);
    }
    if (bl.description) {
      var p = document.createElement("p");
      p.className = "things-modal-author";
      appendRich(p, bl.description);
      modalBox.appendChild(p);
    }
    var noteText = bl.note || bl.body || "";
    if (noteText) {
      var n = document.createElement("p");
      n.className = "things-modal-note";
      appendRich(n, noteText);
      modalBox.appendChild(n);
    }
    modalOverlay.classList.add("active");
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove("active");
  }

  // ---- Relative time ----
  function relativeTime(dateStr) {
    if (!dateStr) return "";
    var days = Math.floor((new Date() - new Date(dateStr)) / 86400000);
    if (days < 1)  return "today";
    if (days === 1) return "1 day ago";
    if (days < 30)  return days + " days ago";
    var mo = Math.round(days / 30);
    if (mo === 1)   return "1 month ago";
    if (mo < 12)    return mo + " months ago";
    var yr = Math.round(days / 365);
    return yr + (yr === 1 ? " year ago" : " years ago");
  }

  function findChannel(channels, slug) {
    for (var i = 0; i < channels.length; i++) {
      if (channels[i].slug === slug) return channels[i];
    }
    return null;
  }

  if (page === "home")        renderHome(root);
  else if (page === "mind")   renderChannelPage(root, S.mindIntro   || "", S.mind   || []);
  else if (page === "matter") renderChannelPage(root, S.matterIntro || "",
    (S.matter || []).slice().sort(function (a, b) {
      return (b.blocks ? b.blocks.length : 0) - (a.blocks ? a.blocks.length : 0);
    }));

  // ---- HOME ----
  function renderHome(root) {
    (S.bio || []).forEach(function (para) {
      var token = "{bookshelf}";
      var i = para.indexOf(token);
      var p = document.createElement("p");
      if (i === -1) { appendRich(p, para); root.appendChild(p); return; }

      appendRich(p, para.slice(0, i));
      var trigger = document.createElement("a");
      trigger.href = "#";
      trigger.className = "highlight-link";
      trigger.textContent = "bookshelf";
      trigger.setAttribute("role", "button");
      trigger.setAttribute("aria-expanded", "false");
      p.appendChild(trigger);
      appendRich(p, para.slice(i + token.length));
      root.appendChild(p);

      var desc = document.createElement("p");
      desc.className = "description-text";
      appendRich(desc, (S.bookshelfNote || "") + " ");
      var dl = document.createElement("a");
      dl.className = "description-link";
      dl.href = "mind.html";
      dl.textContent = "Browse the bookshelf →";
      desc.appendChild(dl);
      root.appendChild(desc);

      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        var open = desc.classList.toggle("active");
        trigger.classList.toggle("active", open);
        trigger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    if (S.links && S.links.length) {
      var wrap = document.createElement("div");
      wrap.className = "contact-links";
      S.links.forEach(function (lnk, idx) {
        if (idx > 0) {
          var sep = document.createElement("span");
          sep.className = "separator";
          sep.textContent = "/";
          wrap.appendChild(sep);
        }
        var a = document.createElement("a");
        a.className = "contact-link";
        a.href = lnk.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = (lnk.label || "").toUpperCase();
        wrap.appendChild(a);
      });
      root.appendChild(wrap);
    }

    // Autoplaying, muted, looping clip underneath (saradu-style)
    if (S.homeVideo) {
      var hv = document.createElement("video");
      hv.className = "home-video";
      hv.src = S.homeVideo;
      if (S.homeVideoPoster) hv.poster = S.homeVideoPoster;
      hv.autoplay = true; hv.loop = true; hv.muted = true; hv.playsInline = true;
      hv.preload = "auto";
      hv.setAttribute("autoplay", ""); hv.setAttribute("muted", "");
      hv.setAttribute("loop", ""); hv.setAttribute("playsinline", "");
      root.appendChild(hv);
      var hp = hv.play(); if (hp && hp.catch) hp.catch(function () {});
    }
  }

  // ---- MIND / MATTER: channel grid with hash routing ----
  function renderChannelPage(root, intro, channels) {
    initModal();

    if (intro) {
      var introEl = document.createElement("p");
      introEl.className = "page-intro";
      appendRich(introEl, intro);
      root.appendChild(introEl);
    }

    var gridEl = document.createElement("div");
    gridEl.className = "things-grid";
    root.appendChild(gridEl);

    var detailEl = document.createElement("div");
    detailEl.style.display = "none";
    root.appendChild(detailEl);

    function showGrid() {
      gridEl.style.display = "";
      detailEl.style.display = "none";
      detailEl.innerHTML = "";
      history.pushState(null, "", location.pathname);
    }

    function showChannel(ch) {
      gridEl.style.display = "none";
      detailEl.style.display = "";
      detailEl.innerHTML = "";
      history.pushState(null, "", location.pathname + "#" + ch.slug);
      renderChannelDetail(detailEl, ch, showGrid);
    }

    channels.forEach(function (ch) {
      var card = document.createElement("button");
      card.className = "things-card";

      var titleEl = document.createElement("span");
      titleEl.className = "things-card-title";
      titleEl.textContent = ch.title;
      card.appendChild(titleEl);

      var hasCount = ch.blocks && ch.blocks.length;
      var hasTime  = !!ch.updated;
      if (hasCount || hasTime) {
        var meta = document.createElement("div");
        meta.className = "things-card-meta";
        if (hasCount) {
          var c = document.createElement("span");
          c.textContent = ch.blocks.length + (ch.blocks.length === 1 ? " block" : " blocks");
          meta.appendChild(c);
        }
        if (hasTime) {
          var t = document.createElement("span");
          t.textContent = relativeTime(ch.updated);
          meta.appendChild(t);
        }
        card.appendChild(meta);
      }

      card.addEventListener("click", function () { showChannel(ch); });
      gridEl.appendChild(card);
    });

    // Restore channel from URL hash on load
    var initSlug = location.hash.replace("#", "");
    if (initSlug) {
      var initCh = findChannel(channels, initSlug);
      if (initCh) showChannel(initCh);
    }

    // Browser back/forward
    window.addEventListener("popstate", function () {
      closeModal();
      var slug = location.hash.replace("#", "");
      if (!slug) { showGrid(); return; }
      var ch = findChannel(channels, slug);
      if (ch) showChannel(ch); else showGrid();
    });
  }

  // ---- Caption below a block: subtitle that swaps to relative time on hover ----
  function appendCaption(wrap, bl) {
    var subtitleText = bl.subtitle || bl.meta || bl.author || "";
    if (!subtitleText && !bl.added) return;
    if (subtitleText) {
      var sub = document.createElement("div");
      sub.className = "things-block-subtitle";
      sub.textContent = subtitleText;
      wrap.appendChild(sub);
    }
    if (bl.added) {
      var timeEl = document.createElement("div");
      timeEl.className = "things-block-time";
      timeEl.textContent = relativeTime(bl.added);
      wrap.appendChild(timeEl);
    }
  }

  // ---- Channel detail ----
  // Hardcoded layout rule for section grids (grid is up to 3 columns wide):
  // keep videos in the upper rows, and never more than one video per row.
  // Each video leads a row followed by up to 2 photos (max columns - 1), which
  // spaces videos 3 apart — guaranteeing <=1 video per row at both 3- and 2-col widths.
  function arrangeVideosToTop(blocks) {
    var vids = [], photos = [];
    blocks.forEach(function (b) { (b && b.video ? vids : photos).push(b); });
    if (!vids.length) return blocks;
    var out = [], pi = 0;
    vids.forEach(function (v) {
      out.push(v);
      for (var k = 0; k < 2 && pi < photos.length; k++) out.push(photos[pi++]);
    });
    while (pi < photos.length) out.push(photos[pi++]);
    return out;
  }

  function renderChannelDetail(root, ch, onBack) {
    var backEl = document.createElement("a");
    backEl.href = "#";
    backEl.className = "things-back";
    backEl.textContent = "← All things";
    backEl.addEventListener("click", function (e) { e.preventDefault(); onBack(); });
    root.appendChild(backEl);

    var titleEl = document.createElement("p");
    titleEl.className = "things-channel-title";
    titleEl.textContent = ch.title;
    root.appendChild(titleEl);

    var blocks = arrangeVideosToTop(ch.blocks || []);
    if (!blocks.length) {
      var emptyEl = document.createElement("p");
      emptyEl.className = "things-empty";
      emptyEl.textContent = "Nothing here yet.";
      root.appendChild(emptyEl);
      return;
    }

    var grid = document.createElement("div");
    grid.className = "things-blocks";

    // Autoplay video thumbnails only while they're on screen (saves bandwidth/CPU).
    var videoObserver = ("IntersectionObserver" in window)
      ? new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            var v = en.target;
            if (en.isIntersecting) {
              var p = v.play();
              if (p && p.catch) p.catch(function () {});
            } else {
              v.pause();
            }
          });
        }, { threshold: 0.2 })
      : null;

    blocks.forEach(function (bl) {
      var wrap = document.createElement("div");
      wrap.className = "things-block-wrap";

      var block = document.createElement("div");
      var mainText = bl.content || bl.text || "";
      var isClickable = !bl.noModal && (mainText || bl.description || bl.image || bl.video);
      block.className = "things-block"
        + ((bl.image || bl.video) ? " things-block-cover" : "")
        + (isClickable ? " things-block-link" : " things-block-static");

      if (isClickable) {
        block.addEventListener("click", function () { openModal(bl); });
      }

      if (bl.video) {
        // video thumbnail: autoplays muted + looped while on screen; opens with sound in the modal
        var vid = document.createElement("video");
        vid.className = "things-block-img things-block-video";
        vid.src = bl.video;
        if (bl.poster || bl.image) vid.poster = bl.poster || bl.image;
        vid.muted = true;
        vid.defaultMuted = true;
        vid.loop = true;
        vid.playsInline = true;
        vid.preload = "metadata";
        vid.setAttribute("muted", "");
        vid.setAttribute("playsinline", "");
        vid.setAttribute("aria-label", mainText || "video");
        block.appendChild(vid);
        if (videoObserver) {
          videoObserver.observe(vid);
        } else {
          vid.autoplay = true;
          vid.setAttribute("autoplay", "");
        }
        wrap.appendChild(block);
        appendCaption(wrap, bl);
        grid.appendChild(wrap);
        return;
      }

      if (bl.image) {
        // image-only thumbnail: just the cover, centered, shown in full
        var img = document.createElement("img");
        img.className = "things-block-img";
        img.src = bl.image;
        img.alt = mainText || "";
        img.loading = "lazy";
        block.appendChild(img);
        wrap.appendChild(block);
        appendCaption(wrap, bl);
        grid.appendChild(wrap);
        return;
      }

      // content = bold title line (word, book title, etc.)
      if (mainText) {
        var p1 = document.createElement("p");
        if (bl.description) p1.style.fontWeight = "500";
        appendRich(p1, mainText);
        block.appendChild(p1);
      }

      // description = body text below
      if (bl.description) {
        var p2 = document.createElement("p");
        p2.className = "things-block-body";
        appendRich(p2, bl.description);
        block.appendChild(p2);
      }

      wrap.appendChild(block);
      appendCaption(wrap, bl);
      grid.appendChild(wrap);
    });

    root.appendChild(grid);
  }

  // ---- Rich text parser: [label](url) ----
  function tokenize(text) {
    var re = /\[([^\]]+)\]\(([^)]+)\)/g, out = [], last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) out.push({ t: "text", v: text.slice(last, m.index) });
      out.push({ t: "link", label: m[1], url: m[2] });
      last = re.lastIndex;
    }
    if (last < text.length) out.push({ t: "text", v: text.slice(last) });
    return out;
  }

  function appendRich(parent, text) {
    tokenize(text).forEach(function (tok) {
      if (tok.t === "text") {
        parent.appendChild(document.createTextNode(tok.v));
      } else {
        var a = document.createElement("a");
        a.className = "text-link";
        a.href = tok.url;
        a.textContent = tok.label;
        if (/^https?:\/\//i.test(tok.url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        parent.appendChild(a);
      }
    });
  }
})();
