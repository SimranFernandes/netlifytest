"use strict";
var precacheConfig = [
    ["/index.html", "995c8562009ff329ecb4d72a0e1e359c"],
    ["/static/css/main.73058893.css", "70415ff08757b326cd4a8715b51f53f7"],
    ["/static/js/main.b57bb003.js", "a9fb048929a1f0b74c48c8d9bd676ece"],
    ["/static/media/04.9d3725d7.jpg", "9d3725d7629ef38bdccfc1a0327280ab"],
    [
      "/static/media/08 1600x400 px.5d230a72.jpg",
      "5d230a72aa0afdeb49038557dba43959"
    ],
    ["/static/media/4.431f126d.jpg", "431f126d1719e95946b7c31e00f34806"],
    ["/static/media/Blog.c86196fb.jpg", "c86196fbc264ee970c2f631f15e9d852"],
    [
      "/static/media/ChickenKeemaBiryani.2525607a.jpg",
      "2525607abc3e25cd46b15a648f681326"
    ],
    [
      "/static/media/Contact_Us.41a3538d.jpg",
      "41a3538d08bf408de22f85db4bfbe4a3"
    ],
    [
      "/static/media/Final slider banner 02.a867b720.jpg",
      "a867b7205b05b5c585f9f3cf3068f201"
    ],
    [
      "/static/media/Final slider banner 03.bfbeb75a.jpg",
      "bfbeb75a2517cde3645c3b8ce8d8c7cc"
    ],
    [
      "/static/media/Final slider banner 04.0602e1b2.jpg",
      "0602e1b2ab441a95a5012f6ad21ec46c"
    ],
    [
      "/static/media/Final slider banner 05.229b0330.jpg",
      "229b03308eca6454637cc1733aa63934"
    ],
    ["/static/media/Logo.1c790cb3.png", "1c790cb3aa132a3adda9ce1550b94e3f"],
    [
      "/static/media/MobileAppImagebbk.e2e6a42c.png",
      "e2e6a42c6fe95cab6172fbb8db9ded5d"
    ],
    [
      "/static/media/MobileAppImagebbk.fc4aa427.jpg",
      "fc4aa427d9e119359160f99a740faf75"
    ],
    [
      "/static/media/News reviews.b6f90db7.jpg",
      "b6f90db73f718097e14c22351403361f"
    ],
    ["/static/media/Quantity.15b84c4c.png", "15b84c4cf0d49a471cf53e38a88b37b0"],
    [
      "/static/media/Social gathering.a6d5cb60.jpg",
      "a6d5cb60d2398b785afe48f05c5e555d"
    ],
    ["/static/media/birthday.ede073b1.jpg", "ede073b186674ccd161fa08776ef898c"],
    ["/static/media/catering.769c973c.jpg", "769c973cf4996a2072331bd5629294b1"],
    [
      "/static/media/dividerTop.3b6ebaf3.svg",
      "3b6ebaf3d6d5180e3752b2b402d4feb9"
    ],
    [
      "/static/media/field trip.7198a443.jpg",
      "7198a4434e4aa8f8ce59d3998e148079"
    ],
    ["/static/media/google.fb75a6de.png", "fb75a6de771f161e3c66296c55f48dcf"],
    [
      "/static/media/instagram.10038aaf.png",
      "10038aaf48d81c1b511014f36aed2bf1"
    ],
    ["/static/media/meeting.1dfa9273.jpg", "1dfa92731f1017819049e39f02399e37"],
    ["/static/media/party.1ba0b65f.jpg", "1ba0b65f66d4d2d7bc874d953bf23866"],
    [
      "/static/media/quality-icon.357546c6.png",
      "357546c67fe5e8670e4bf87379d38690"
    ],
    [
      "/static/media/react-bootstrap-carousel.21823303.eot",
      "2182330384ebbad826821fdf8e84efe5"
    ],
    [
      "/static/media/react-bootstrap-carousel.2fe6d179.svg",
      "2fe6d179ea5aa1ceab26113e77e13da4"
    ],
    [
      "/static/media/react-bootstrap-carousel.c746c488.woff",
      "c746c4882df00af3b0a7a3b1616bf295"
    ],
    [
      "/static/media/react-bootstrap-carousel.f7448c04.ttf",
      "f7448c0408e7a78012a82def0fb9e2fe"
    ],
    ["/static/media/sponsor.36873255.jpg", "3687325508223fa1b973ef17fee251dd"],
    ["/static/media/sports.0a661db6.JPG", "0a661db64f851bc40b7f3ccd8ce41187"],
    ["/static/media/taste.71a94476.png", "71a944767fd65f82427f3dd92684e297"],
    ["/static/media/twitter.115af657.png", "115af65712ccb5cdf3b4a3c065dfe852"]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, a) {
    var t = new URL(e);
    return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString();
  },
  cleanResponse = function(a) {
    return a.redirected
      ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function(e) {
          return new Response(e, {
            headers: a.headers,
            status: a.status,
            statusText: a.statusText
          });
        })
      : Promise.resolve(a);
  },
  createCacheKey = function(e, a, t, c) {
    var n = new URL(e);
    return (
      (c && n.pathname.match(c)) ||
        (n.search +=
          (n.search ? "&" : "") +
          encodeURIComponent(a) +
          "=" +
          encodeURIComponent(t)),
      n.toString()
    );
  },
  isPathWhitelisted = function(e, a) {
    if (0 === e.length) return !0;
    var t = new URL(a).pathname;
    return e.some(function(e) {
      return t.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return (
      (a.hash = ""),
      (a.search = a.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(a) {
          return t.every(function(e) {
            return !e.test(a[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      a.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var a = e[0],
        t = e[1],
        c = new URL(a, self.location),
        n = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
      return [c.toString(), n];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(c) {
        return setOfCachedUrls(c).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!t.has(a)) {
                var e = new Request(a, { credentials: "same-origin" });
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      "Request for " +
                        a +
                        " returned a response with status " +
                        e.status
                    );
                  return cleanResponse(e).then(function(e) {
                    return c.put(a, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(a) {
          return a.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!t.has(e.url)) return a.delete(e);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(a) {
    if ("GET" === a.request.method) {
      var e,
        t = stripIgnoredUrlParameters(
          a.request.url,
          ignoreUrlParametersMatching
        ),
        c = "index.html";
      (e = urlsToCacheKeys.has(t)) ||
        ((t = addDirectoryIndex(t, c)), (e = urlsToCacheKeys.has(t)));
      var n = "/index.html";
      !e &&
        "navigate" === a.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], a.request.url) &&
        ((t = new URL(n, self.location).toString()),
        (e = urlsToCacheKeys.has(t))),
        e &&
          a.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(t)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    a.request.url,
                    e
                  ),
                  fetch(a.request)
                );
              })
          );
    }
  });
