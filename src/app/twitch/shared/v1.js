! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.video = e() : (t.Twitch = t.Twitch || {}, t.Twitch.video = e())
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 152)
  }([function (t, e, n) {
    var r = n(28),
      o = "object" == typeof self && self && self.Object === Object && self,
      i = r || o || Function("return this")();
    t.exports = i
  }, function (t, e) {
    var n = Array.isArray;
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return null != t && "object" == typeof t
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return null == t ? void 0 === t ? c : a : s && s in Object(t) ? i(t) : u(t)
    }
    var o = n(7),
      i = n(53),
      u = n(54),
      a = "[object Null]",
      c = "[object Undefined]",
      s = o ? o.toStringTag : void 0;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = i(t, e);
      return o(n) ? n : void 0
    }
    var o = n(70),
      i = n(73);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n, r) {
      var u = !n;
      n || (n = {});
      for (var a = -1, c = e.length; ++a < c;) {
        var s = e[a],
          f = r ? r(n[s], t[s], s, n, t) : void 0;
        void 0 === f && (f = t[s]), u ? i(n, s, f) : o(n, s, f)
      }
      return n
    }
    var o = n(17),
      i = n(34);
    t.exports = r
  }, function (t, e, n) {
    var r = n(0),
      o = r.Symbol;
    t.exports = o
  }, function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1])
      }
    }
    var o = n(60),
      i = n(61),
      u = n(62),
      a = n(63),
      c = n(64);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = a, r.prototype.set = c, t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = t.length; n--;)
        if (o(t[n][0], e)) return n;
      return -1
    }
    var o = n(15);
    t.exports = r
  }, function (t, e, n) {
    var r = n(4),
      o = r(Object, "create");
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      var n = t.__data__;
      return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
    var o = n(82);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(t) ? o(t) : i(t)
    }
    var o = n(36),
      i = n(93),
      u = n(14);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = t && t.constructor;
      return t === ("function" == typeof e && e.prototype || r)
    }
    var r = Object.prototype;
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return null != t && i(t.length) && !o(t)
    }
    var o = n(31),
      i = n(40);
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      return t === e || t !== t && e !== e
    }
    t.exports = n
  }, function (t, e, n) {
    var r = n(4),
      o = n(0),
      i = r(o, "Map");
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = t[e];
      a.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n)
    }
    var o = n(34),
      i = n(15),
      u = Object.prototype,
      a = u.hasOwnProperty;
    t.exports = r
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function () {
          return t.l
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function () {
          return t.i
        }
      }), t.webpackPolyfill = 1), t
    }
  }, function (t, e) {
    function n(t) {
      return function (e) {
        return t(e)
      }
    }
    t.exports = n
  }, function (t, e, n) {
    (function (t) {
      var r = n(28),
        o = "object" == typeof e && e && !e.nodeType && e,
        i = o && "object" == typeof t && t && !t.nodeType && t,
        u = i && i.exports === o,
        a = u && r.process,
        c = function () {
          try {
            return a && a.binding && a.binding("util")
          } catch (t) {}
        }();
      t.exports = c
    }).call(e, n(18)(t))
  }, function (t, e, n) {
    var r = n(101),
      o = n(43),
      i = Object.prototype,
      u = i.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      c = a ? function (t) {
        return null == t ? [] : (t = Object(t), r(a(t), function (e) {
          return u.call(t, e)
        }))
      } : o;
    t.exports = c
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
      return t
    }
    t.exports = n
  }, function (t, e, n) {
    var r = n(41),
      o = r(Object.getPrototypeOf, Object);
    t.exports = o
  }, function (t, e, n) {
    var r = n(104),
      o = n(16),
      i = n(105),
      u = n(106),
      a = n(107),
      c = n(3),
      s = n(32),
      f = s(r),
      l = s(o),
      p = s(i),
      h = s(u),
      v = s(a),
      d = c;
    (r && "[object DataView]" != d(new r(new ArrayBuffer(1))) || o && "[object Map]" != d(new o) || i && "[object Promise]" != d(i.resolve()) || u && "[object Set]" != d(new u) || a && "[object WeakMap]" != d(new a)) && (d = function (t) {
      var e = c(t),
        n = "[object Object]" == e ? t.constructor : void 0,
        r = n ? s(n) : "";
      if (r) switch (r) {
        case f:
          return "[object DataView]";
        case l:
          return "[object Map]";
        case p:
          return "[object Promise]";
        case h:
          return "[object Set]";
        case v:
          return "[object WeakMap]"
      }
      return e
    }), t.exports = d
  }, function (t, e, n) {
    function r(t) {
      var e = new t.constructor(t.byteLength);
      return new o(e).set(new o(t)), e
    }
    var o = n(110);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      return o(t) ? t : i(t, e) ? [t] : u(a(t))
    }
    var o = n(1),
      i = n(122),
      u = n(123),
      a = n(126);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return "symbol" == typeof t || i(t) && o(t) == u
    }
    var o = n(3),
      i = n(2),
      u = "[object Symbol]";
    t.exports = r
  }, function (t, e, n) {
    (function (e) {
      var n = "object" == typeof e && e && e.Object === Object && e;
      t.exports = n
    }).call(e, n(29))
  }, function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
      return o
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      if (!i(t)) return !1;
      var e = o(t);
      return e == a || e == c || e == u || e == s
    }
    var o = n(3),
      i = n(5),
      u = "[object AsyncFunction]",
      a = "[object Function]",
      c = "[object GeneratorFunction]",
      s = "[object Proxy]";
    t.exports = r
  }, function (t, e) {
    function n(t) {
      if (null != t) {
        try {
          return o.call(t)
        } catch (t) {}
        try {
          return t + ""
        } catch (t) {}
      }
      return ""
    }
    var r = Function.prototype,
      o = r.toString;
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1])
      }
    }
    var o = n(74),
      i = n(81),
      u = n(83),
      a = n(84),
      c = n(85);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = a, r.prototype.set = c, t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      "__proto__" == e && o ? o(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
      }) : t[e] = n
    }
    var o = n(35);
    t.exports = r
  }, function (t, e, n) {
    var r = n(4),
      o = function () {
        try {
          var t = r(Object, "defineProperty");
          return t({}, "", {}), t
        } catch (t) {}
      }();
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      var n = u(t),
        r = !n && i(t),
        f = !n && !r && a(t),
        p = !n && !r && !f && s(t),
        h = n || r || f || p,
        v = h ? o(t.length, String) : [],
        d = v.length;
      for (var y in t) !e && !l.call(t, y) || h && ("length" == y || f && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || c(y, d)) || v.push(y);
      return v
    }
    var o = n(88),
      i = n(37),
      u = n(1),
      a = n(38),
      c = n(39),
      s = n(91),
      f = Object.prototype,
      l = f.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    var r = n(89),
      o = n(2),
      i = Object.prototype,
      u = i.hasOwnProperty,
      a = i.propertyIsEnumerable,
      c = r(function () {
        return arguments
      }()) ? r : function (t) {
        return o(t) && u.call(t, "callee") && !a.call(t, "callee")
      };
    t.exports = c
  }, function (t, e, n) {
    (function (t) {
      var r = n(0),
        o = n(90),
        i = "object" == typeof e && e && !e.nodeType && e,
        u = i && "object" == typeof t && t && !t.nodeType && t,
        a = u && u.exports === i,
        c = a ? r.Buffer : void 0,
        s = c ? c.isBuffer : void 0,
        f = s || o;
      t.exports = f
    }).call(e, n(18)(t))
  }, function (t, e) {
    function n(t, e) {
      var n = typeof t;
      return !!(e = null == e ? r : e) && ("number" == n || "symbol" != n && o.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var r = 9007199254740991,
      o = /^(?:0|[1-9]\d*)$/;
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
    var r = 9007199254740991;
    t.exports = n
  }, function (t, e) {
    function n(t, e) {
      return function (n) {
        return t(e(n))
      }
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return u(t) ? o(t, !0) : i(t)
    }
    var o = n(36),
      i = n(96),
      u = n(14);
    t.exports = r
  }, function (t, e) {
    function n() {
      return []
    }
    t.exports = n
  }, function (t, e, n) {
    var r = n(22),
      o = n(23),
      i = n(21),
      u = n(43),
      a = Object.getOwnPropertySymbols,
      c = a ? function (t) {
        for (var e = []; t;) r(e, i(t)), t = o(t);
        return e
      } : u;
    t.exports = c
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = e(t);
      return i(t) ? r : o(r, n(t))
    }
    var o = n(22),
      i = n(1);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(t, u, i)
    }
    var o = n(45),
      i = n(44),
      u = n(42);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t || o(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -i ? "-0" : e
    }
    var o = n(27),
      i = 1 / 0;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      return e = i(void 0 === e ? t.length - 1 : e, 0),
        function () {
          for (var r = arguments, u = -1, a = i(r.length - e, 0), c = Array(a); ++u < a;) c[u] = r[e + u];
          u = -1;
          for (var s = Array(e + 1); ++u < e;) s[u] = r[u];
          return s[e] = n(c), o(t, this, s)
        }
    }
    var o = n(138),
      i = Math.max;
    t.exports = r
  }, function (t, e, n) {
    var r = n(139),
      o = n(141),
      i = o(r);
    t.exports = i
  }, function (t, e) {
    function n(t) {
      return t
    }
    t.exports = n
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      for (var e = {
          strictMode: !1,
          key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
          q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
          },
          parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
          }
        }, n = e.parser[e.strictMode ? "strict" : "loose"].exec(t), r = {}, o = 14; o--;) r[e.key[o]] = n[o] || "";
      return r[e.q.name] = {}, r[e.key[12]].replace(e.q.parser, function (t, n, o) {
        n && (r[e.q.name][n] = o)
      }), r
    }
    e.a = r
  }, function (t, e, n) {
    function r(t) {
      return "string" == typeof t || !i(t) && u(t) && o(t) == a
    }
    var o = n(3),
      i = n(1),
      u = n(2),
      a = "[object String]";
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = u.call(t, c),
        n = t[c];
      try {
        t[c] = void 0;
        var r = !0
      } catch (t) {}
      var o = a.call(t);
      return r && (e ? t[c] = n : delete t[c]), o
    }
    var o = n(7),
      i = Object.prototype,
      u = i.hasOwnProperty,
      a = i.toString,
      c = o ? o.toStringTag : void 0;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      return o.call(t)
    }
    var r = Object.prototype,
      o = r.toString;
    t.exports = n
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n.d(e, "l", function () {
      return _
    }), n.d(e, "i", function () {
      return m
    }), n.d(e, "k", function () {
      return w
    }), n.d(e, "h", function () {
      return x
    }), n.d(e, "c", function () {
      return j
    }), n.d(e, "g", function () {
      return O
    }), n.d(e, "f", function () {
      return A
    }), n.d(e, "m", function () {
      return E
    }), n.d(e, "b", function () {
      return S
    }), n.d(e, "j", function () {
      return P
    }), n.d(e, "e", function () {
      return k
    }), n.d(e, "n", function () {
      return T
    }), n.d(e, "a", function () {
      return L
    }), n.d(e, "o", function () {
      return M
    }), n.d(e, "d", function () {
      return C
    }), n.d(e, "t", function () {
      return I
    }), n.d(e, "s", function () {
      return R
    }), n.d(e, "x", function () {
      return N
    }), n.d(e, "y", function () {
      return D
    }), n.d(e, "L", function () {
      return F
    }), n.d(e, "A", function () {
      return z
    }), n.d(e, "u", function () {
      return B
    }), n.d(e, "I", function () {
      return V
    }), n.d(e, "G", function () {
      return U
    }), n.d(e, "N", function () {
      return W
    }), n.d(e, "J", function () {
      return q
    }), n.d(e, "D", function () {
      return $
    }), n.d(e, "F", function () {
      return H
    }), n.d(e, "B", function () {
      return K
    }), n.d(e, "z", function () {
      return Y
    }), n.d(e, "M", function () {
      return G
    }), n.d(e, "K", function () {
      return J
    }), n.d(e, "H", function () {
      return Q
    }), n.d(e, "E", function () {
      return Z
    }), n.d(e, "r", function () {
      return X
    }), n.d(e, "q", function () {
      return tt
    }), n.d(e, "w", function () {
      return et
    }), n.d(e, "C", function () {
      return nt
    }), n.d(e, "v", function () {
      return rt
    }), n.d(e, "P", function () {
      return ut
    }), n.d(e, "O", function () {
      return at
    }), n.d(e, "p", function () {
      return ct
    });
    var o = n(56),
      i = n.n(o),
      u = n(57),
      a = n.n(u),
      c = n(142),
      s = n.n(c),
      f = n(146),
      l = n.n(f),
      p = n(51),
      h = n(147),
      v = n(149),
      d = (n.n(v), function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }()),
      y = function () {
        var t = "https://player.twitch.tv";
        if (document.currentScript) t = document.currentScript.src;
        else {
          var e = Array.prototype.filter.call(document.scripts, function (t) {
            return /twitch\.tv.*embed/.test(t.src)
          });
          t = e.length > 0 ? e[0].src : document.scripts[document.scripts.length - 1].src
        }
        var n = Object(p.a)(t);
        if ("testplayer.twitch.tv" === n.host.toLowerCase()) {
          var r = n.path.split("/")[1].replace(/[^a-zA-Z0-9_-]+/g, "");
          return n.protocol + "://" + n.authority + "/" + r
        }
        return n.protocol + "://" + n.authority
      }(),
      b = Object.freeze({
        channelName: "",
        currentTime: 0,
        duration: 0,
        muted: !1,
        playback: "",
        quality: "",
        qualitiesAvailable: [],
        stats: {},
        videoID: "",
        viewers: 0,
        volume: 0
      }),
      g = Object.freeze({
        height: 390,
        width: 640,
        allowfullscreen: !1
      }),
      _ = "ready",
      m = "play",
      w = "playing",
      x = "pause",
      j = "ended",
      O = "online",
      A = "offline",
      E = "transitionToRecommendedVod",
      S = "captions",
      P = "playbackBlocked",
      k = "minuteWatched",
      T = "videoPlay",
      L = "bufferEmpty",
      M = "videoError",
      C = "error",
      I = "play",
      R = "pause",
      N = "channel",
      D = "channelId",
      F = "video",
      z = "collection",
      B = "seek",
      V = "quality",
      U = "mute",
      W = "volume",
      q = "theatre",
      $ = "fullscreen",
      H = "setminiplayermode",
      K = "setcontent",
      Y = "setclip",
      G = "setvideosource",
      J = "setTrackingProperties",
      Q = "setPlayerType",
      Z = "setLiveMaxLatency",
      X = "enableCaptions",
      tt = "disableCaptions",
      et = "setCaptionSize",
      nt = "setEditClip",
      rt = "setAutoplay",
      ot = "subscribe",
      it = "ready",
      ut = "paused",
      at = "ended",
      ct = function () {
        function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
          r(this, t), this._eventEmitter = new l.a, this._playerStateEmitter = new l.a, this._playerState = b, this._storeState = {}, this._onHostReady = this._getHostReady(), this._iframe = this._createPlayerIframe(n), e.appendChild(this._iframe), this._host = this._iframe.contentWindow, this._send(ot)
        }
        return d(t, [{
          key: "destroy",
          value: function () {
            this.callPlayerMethod("destroy")
          }
        }, {
          key: "_createPlayerIframe",
          value: function (t) {
            var e = this._normalizeOptions(t);
            e.origin = document.location.origin;
            var n = document.createElement("iframe"),
              r = Object(h.a)(a()(e, "width", "height")),
              o = y + "/?" + r;
            return n.setAttribute("src", o), n.setAttribute("width", e.width), n.setAttribute("height", e.height), n.setAttribute("frameBorder", "0"), n.setAttribute("scrolling", "no"), e.allowfullscreen && n.setAttribute("allowfullscreen", ""), n
          }
        }, {
          key: "_normalizeOptions",
          value: function (t) {
            var e = s()({}, g, t);
            return !1 !== t.allowfullscreen && (e.allowfullscreen = !0), e
          }
        }, {
          key: "_getHostReady",
          value: function () {
            var t = this;
            return new v.Promise(function (e, n) {
              function r(t) {
                this._isClientMessage(t) && t.data.method === it && (this._storeState = t.data.args[0], window.removeEventListener("message", o), window.addEventListener("message", this), this._eventEmitter.emit(_), e())
              }
              var o = r.bind(t);
              window.addEventListener("message", o), setTimeout(n, 15e3)
            })
          }
        }, {
          key: "_send",
          value: function (t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            var o = {
              namespace: "player.embed.host",
              method: t,
              args: n
            };
            this._host.postMessage(o, "*")
          }
        }, {
          key: "_deferSend",
          value: function () {
            for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return this._onHostReady.then(function () {
              return t._send.apply(t, n)
            })
          }
        }, {
          key: "_isClientMessage",
          value: function (t) {
            return !!this._iframe && (Boolean(t.data) && "player.embed.client" === t.data.namespace && t.source === this._iframe.contentWindow)
          }
        }, {
          key: "handleEvent",
          value: function (t) {
            if (this._isClientMessage(t)) switch (t.data.method) {
              case "bridgestateupdate":
                this._playerState = t.data.args[0], this._playerStateEmitter.emit("playerstateupdate", this._playerState);
                break;
              case "bridgeplayerevent":
                this._eventEmitter.emit(t.data.args[0].event);
                break;
              case "bridgeplayereventwithpayload":
                this._eventEmitter.emit(t.data.args[0].event, t.data.args[0].data);
                break;
              case "bridgestorestateupdate":
                this._storeState = t.data.args[0];
                break;
              case "bridgedestroy":
                this._iframe.parentNode.removeChild(this._iframe), window.removeEventListener("message", this), delete this._iframe, delete this._host
            }
          }
        }, {
          key: "getPlayerState",
          value: function () {
            return this._playerState
          }
        }, {
          key: "getStoreState",
          value: function () {
            return this._storeState
          }
        }, {
          key: "addEventListener",
          value: function (t, e) {
            this._eventEmitter.on(t, e)
          }
        }, {
          key: "addPlayerStateListener",
          value: function (t) {
            this._playerStateEmitter.on("playerstateupdate", t), t(this._playerState)
          }
        }, {
          key: "removePlayerStateListener",
          value: function (t) {
            this._playerStateEmitter.off("playerstateupdate", t)
          }
        }, {
          key: "removeEventListener",
          value: function (t, e) {
            this._eventEmitter.off(t, e)
          }
        }, {
          key: "callPlayerMethod",
          value: function (t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return this._deferSend.apply(this, [t].concat(n))
          }
        }, {
          key: "setWidth",
          value: function (t) {
            i()(t) && t >= 0 && this._iframe.setAttribute("width", t)
          }
        }, {
          key: "setHeight",
          value: function (t) {
            i()(t) && t >= 0 && this._iframe.setAttribute("height", t)
          }
        }]), t
      }()
  }, function (t, e, n) {
    function r(t) {
      return "number" == typeof t && i(t)
    }
    var o = n(0),
      i = o.isFinite;
    t.exports = r
  }, function (t, e, n) {
    var r = n(30),
      o = n(58),
      i = n(121),
      u = n(26),
      a = n(6),
      c = n(132),
      s = n(134),
      f = n(46),
      l = s(function (t, e) {
        var n = {};
        if (null == t) return n;
        var s = !1;
        e = r(e, function (e) {
          return e = u(e, t), s || (s = e.length > 1), e
        }), a(t, f(t), n), s && (n = o(n, 7, c));
        for (var l = e.length; l--;) i(n, e[l]);
        return n
      });
    t.exports = l
  }, function (t, e, n) {
    function r(t, e, n, C, I, R) {
      var N, D = e & A,
        F = e & E,
        z = e & S;
      if (n && (N = I ? n(t, C, I, R) : n(t)), void 0 !== N) return N;
      if (!x(t)) return t;
      var B = _(t);
      if (B) {
        if (N = y(t), !D) return f(t, N)
      } else {
        var V = d(t),
          U = V == k || V == T;
        if (m(t)) return s(t, D);
        if (V == L || V == P || U && !I) {
          if (N = F || U ? {} : g(t), !D) return F ? p(t, c(N, t)) : l(t, a(N, t))
        } else {
          if (!M[V]) return I ? t : {};
          N = b(t, V, D)
        }
      }
      R || (R = new o);
      var W = R.get(t);
      if (W) return W;
      if (R.set(t, N), j(t)) return t.forEach(function (o) {
        N.add(r(o, e, n, o, t, R))
      }), N;
      if (w(t)) return t.forEach(function (o, i) {
        N.set(i, r(o, e, n, i, t, R))
      }), N;
      var q = z ? F ? v : h : F ? keysIn : O,
        $ = B ? void 0 : q(t);
      return i($ || t, function (o, i) {
        $ && (i = o, o = t[i]), u(N, i, r(o, e, n, i, t, R))
      }), N
    }
    var o = n(59),
      i = n(86),
      u = n(17),
      a = n(87),
      c = n(95),
      s = n(98),
      f = n(99),
      l = n(100),
      p = n(102),
      h = n(103),
      v = n(46),
      d = n(24),
      y = n(108),
      b = n(109),
      g = n(115),
      _ = n(1),
      m = n(38),
      w = n(117),
      x = n(5),
      j = n(119),
      O = n(12),
      A = 1,
      E = 2,
      S = 4,
      P = "[object Arguments]",
      k = "[object Function]",
      T = "[object GeneratorFunction]",
      L = "[object Object]",
      M = {};
    M[P] = M["[object Array]"] = M["[object ArrayBuffer]"] = M["[object DataView]"] = M["[object Boolean]"] = M["[object Date]"] = M["[object Float32Array]"] = M["[object Float64Array]"] = M["[object Int8Array]"] = M["[object Int16Array]"] = M["[object Int32Array]"] = M["[object Map]"] = M["[object Number]"] = M[L] = M["[object RegExp]"] = M["[object Set]"] = M["[object String]"] = M["[object Symbol]"] = M["[object Uint8Array]"] = M["[object Uint8ClampedArray]"] = M["[object Uint16Array]"] = M["[object Uint32Array]"] = !0, M["[object Error]"] = M[k] = M["[object WeakMap]"] = !1, t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__ = new o(t);
      this.size = e.size
    }
    var o = n(8),
      i = n(65),
      u = n(66),
      a = n(67),
      c = n(68),
      s = n(69);
    r.prototype.clear = i, r.prototype.delete = u, r.prototype.get = a, r.prototype.has = c, r.prototype.set = s, t.exports = r
  }, function (t, e) {
    function n() {
      this.__data__ = [], this.size = 0
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__,
        n = o(e, t);
      return !(n < 0) && (n == e.length - 1 ? e.pop() : u.call(e, n, 1), --this.size, !0)
    }
    var o = n(9),
      i = Array.prototype,
      u = i.splice;
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__,
        n = o(e, t);
      return n < 0 ? void 0 : e[n][1]
    }
    var o = n(9);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(this.__data__, t) > -1
    }
    var o = n(9);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__,
        r = o(n, t);
      return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }
    var o = n(9);
    t.exports = r
  }, function (t, e, n) {
    function r() {
      this.__data__ = new o, this.size = 0
    }
    var o = n(8);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = this.__data__,
        n = e.delete(t);
      return this.size = e.size, n
    }
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return this.__data__.get(t)
    }
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return this.__data__.has(t)
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__;
      if (n instanceof o) {
        var r = n.__data__;
        if (!i || r.length < a - 1) return r.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new u(r)
      }
      return n.set(t, e), this.size = n.size, this
    }
    var o = n(8),
      i = n(16),
      u = n(33),
      a = 200;
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return !(!u(t) || i(t)) && (o(t) ? v : s).test(a(t))
    }
    var o = n(31),
      i = n(71),
      u = n(5),
      a = n(32),
      c = /[\\^$.*+?()[\]{}|]/g,
      s = /^\[object .+?Constructor\]$/,
      f = Function.prototype,
      l = Object.prototype,
      p = f.toString,
      h = l.hasOwnProperty,
      v = RegExp("^" + p.call(h).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return !!i && i in t
    }
    var o = n(72),
      i = function () {
        var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
      }();
    t.exports = r
  }, function (t, e, n) {
    var r = n(0),
      o = r["__core-js_shared__"];
    t.exports = o
  }, function (t, e) {
    function n(t, e) {
      return null == t ? void 0 : t[e]
    }
    t.exports = n
  }, function (t, e, n) {
    function r() {
      this.size = 0, this.__data__ = {
        hash: new o,
        map: new(u || i),
        string: new o
      }
    }
    var o = n(75),
      i = n(8),
      u = n(16);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1])
      }
    }
    var o = n(76),
      i = n(77),
      u = n(78),
      a = n(79),
      c = n(80);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = a, r.prototype.set = c, t.exports = r
  }, function (t, e, n) {
    function r() {
      this.__data__ = o ? o(null) : {}, this.size = 0
    }
    var o = n(10);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__;
      if (o) {
        var n = e[t];
        return n === i ? void 0 : n
      }
      return a.call(e, t) ? e[t] : void 0
    }
    var o = n(10),
      i = "__lodash_hash_undefined__",
      u = Object.prototype,
      a = u.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__;
      return o ? void 0 !== e[t] : u.call(e, t)
    }
    var o = n(10),
      i = Object.prototype,
      u = i.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__;
      return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this
    }
    var o = n(10),
      i = "__lodash_hash_undefined__";
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = o(this, t).delete(t);
      return this.size -= e ? 1 : 0, e
    }
    var o = n(11);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return o(this, t).get(t)
    }
    var o = n(11);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(this, t).has(t)
    }
    var o = n(11);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = o(this, t),
        r = n.size;
      return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }
    var o = n(11);
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
      return t
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return t && o(e, i(e), t)
    }
    var o = n(6),
      i = n(12);
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
      return r
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return i(t) && o(t) == u
    }
    var o = n(3),
      i = n(2),
      u = "[object Arguments]";
    t.exports = r
  }, function (t, e) {
    function n() {
      return !1
    }
    t.exports = n
  }, function (t, e, n) {
    var r = n(92),
      o = n(19),
      i = n(20),
      u = i && i.isTypedArray,
      a = u ? o(u) : r;
    t.exports = a
  }, function (t, e, n) {
    function r(t) {
      return u(t) && i(t.length) && !!a[o(t)]
    }
    var o = n(3),
      i = n(40),
      u = n(2),
      a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!o(t)) return i(t);
      var e = [];
      for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
      return e
    }
    var o = n(13),
      i = n(94),
      u = Object.prototype,
      a = u.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    var r = n(41),
      o = r(Object.keys, Object);
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      return t && o(e, i(e), t)
    }
    var o = n(6),
      i = n(42);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!o(t)) return u(t);
      var e = i(t),
        n = [];
      for (var r in t)("constructor" != r || !e && c.call(t, r)) && n.push(r);
      return n
    }
    var o = n(5),
      i = n(13),
      u = n(97),
      a = Object.prototype,
      c = a.hasOwnProperty;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = [];
      if (null != t)
        for (var n in Object(t)) e.push(n);
      return e
    }
    t.exports = n
  }, function (t, e, n) {
    (function (t) {
      function r(t, e) {
        if (e) return t.slice();
        var n = t.length,
          r = s ? s(n) : new t.constructor(n);
        return t.copy(r), r
      }
      var o = n(0),
        i = "object" == typeof e && e && !e.nodeType && e,
        u = i && "object" == typeof t && t && !t.nodeType && t,
        a = u && u.exports === i,
        c = a ? o.Buffer : void 0,
        s = c ? c.allocUnsafe : void 0;
      t.exports = r
    }).call(e, n(18)(t))
  }, function (t, e) {
    function n(t, e) {
      var n = -1,
        r = t.length;
      for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
      return e
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return o(t, i(t), e)
    }
    var o = n(6),
      i = n(21);
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
        var u = t[n];
        e(u, n, t) && (i[o++] = u)
      }
      return i
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return o(t, i(t), e)
    }
    var o = n(6),
      i = n(44);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(t, u, i)
    }
    var o = n(45),
      i = n(21),
      u = n(12);
    t.exports = r
  }, function (t, e, n) {
    var r = n(4),
      o = n(0),
      i = r(o, "DataView");
    t.exports = i
  }, function (t, e, n) {
    var r = n(4),
      o = n(0),
      i = r(o, "Promise");
    t.exports = i
  }, function (t, e, n) {
    var r = n(4),
      o = n(0),
      i = r(o, "Set");
    t.exports = i
  }, function (t, e, n) {
    var r = n(4),
      o = n(0),
      i = r(o, "WeakMap");
    t.exports = i
  }, function (t, e) {
    function n(t) {
      var e = t.length,
        n = new t.constructor(e);
      return e && "string" == typeof t[0] && o.call(t, "index") && (n.index = t.index, n.input = t.input), n
    }
    var r = Object.prototype,
      o = r.hasOwnProperty;
    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = t.constructor;
      switch (e) {
        case b:
          return o(t);
        case s:
        case f:
          return new r(+t);
        case g:
          return i(t, n);
        case _:
        case m:
        case w:
        case x:
        case j:
        case O:
        case A:
        case E:
        case S:
          return c(t, n);
        case l:
          return new r;
        case p:
        case d:
          return new r(t);
        case h:
          return u(t);
        case v:
          return new r;
        case y:
          return a(t)
      }
    }
    var o = n(25),
      i = n(111),
      u = n(112),
      a = n(113),
      c = n(114),
      s = "[object Boolean]",
      f = "[object Date]",
      l = "[object Map]",
      p = "[object Number]",
      h = "[object RegExp]",
      v = "[object Set]",
      d = "[object String]",
      y = "[object Symbol]",
      b = "[object ArrayBuffer]",
      g = "[object DataView]",
      _ = "[object Float32Array]",
      m = "[object Float64Array]",
      w = "[object Int8Array]",
      x = "[object Int16Array]",
      j = "[object Int32Array]",
      O = "[object Uint8Array]",
      A = "[object Uint8ClampedArray]",
      E = "[object Uint16Array]",
      S = "[object Uint32Array]";
    t.exports = r
  }, function (t, e, n) {
    var r = n(0),
      o = r.Uint8Array;
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      var n = e ? o(t.buffer) : t.buffer;
      return new t.constructor(n, t.byteOffset, t.byteLength)
    }
    var o = n(25);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = new t.constructor(t.source, r.exec(t));
      return e.lastIndex = t.lastIndex, e
    }
    var r = /\w*$/;
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return u ? Object(u.call(t)) : {}
    }
    var o = n(7),
      i = o ? o.prototype : void 0,
      u = i ? i.valueOf : void 0;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = e ? o(t.buffer) : t.buffer;
      return new t.constructor(n, t.byteOffset, t.length)
    }
    var o = n(25);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return "function" != typeof t.constructor || u(t) ? {} : o(i(t))
    }
    var o = n(116),
      i = n(23),
      u = n(13);
    t.exports = r
  }, function (t, e, n) {
    var r = n(5),
      o = Object.create,
      i = function () {
        function t() {}
        return function (e) {
          if (!r(e)) return {};
          if (o) return o(e);
          t.prototype = e;
          var n = new t;
          return t.prototype = void 0, n
        }
      }();
    t.exports = i
  }, function (t, e, n) {
    var r = n(118),
      o = n(19),
      i = n(20),
      u = i && i.isMap,
      a = u ? o(u) : r;
    t.exports = a
  }, function (t, e, n) {
    function r(t) {
      return i(t) && o(t) == u
    }
    var o = n(24),
      i = n(2),
      u = "[object Map]";
    t.exports = r
  }, function (t, e, n) {
    var r = n(120),
      o = n(19),
      i = n(20),
      u = i && i.isSet,
      a = u ? o(u) : r;
    t.exports = a
  }, function (t, e, n) {
    function r(t) {
      return i(t) && o(t) == u
    }
    var o = n(24),
      i = n(2),
      u = "[object Set]";
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      return e = o(e, t), null == (t = u(t, e)) || delete t[a(i(e))]
    }
    var o = n(26),
      i = n(128),
      u = n(129),
      a = n(47);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      if (o(t)) return !1;
      var n = typeof t;
      return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (a.test(t) || !u.test(t) || null != e && t in Object(e))
    }
    var o = n(1),
      i = n(27),
      u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = r
  }, function (t, e, n) {
    var r = n(124),
      o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      i = /\\(\\)?/g,
      u = r(function (t) {
        var e = [];
        return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, function (t, n, r, o) {
          e.push(r ? o.replace(i, "$1") : n || t)
        }), e
      });
    t.exports = u
  }, function (t, e, n) {
    function r(t) {
      var e = o(t, function (t) {
          return n.size === i && n.clear(), t
        }),
        n = e.cache;
      return e
    }
    var o = n(125),
      i = 500;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
      var n = function () {
        var r = arguments,
          o = e ? e.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(o)) return i.get(o);
        var u = t.apply(this, r);
        return n.cache = i.set(o, u) || i, u
      };
      return n.cache = new(r.Cache || o), n
    }
    var o = n(33),
      i = "Expected a function";
    r.Cache = o, t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return null == t ? "" : o(t)
    }
    var o = n(127);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t) return t;
      if (u(t)) return i(t, r) + "";
      if (a(t)) return f ? f.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -c ? "-0" : e
    }
    var o = n(7),
      i = n(30),
      u = n(1),
      a = n(27),
      c = 1 / 0,
      s = o ? o.prototype : void 0,
      f = s ? s.toString : void 0;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : void 0
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return e.length < 2 ? t : o(t, i(e, 0, -1))
    }
    var o = n(130),
      i = n(131);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      e = o(e, t);
      for (var n = 0, r = e.length; null != t && n < r;) t = t[i(e[n++])];
      return n && n == r ? t : void 0
    }
    var o = n(26),
      i = n(47);
    t.exports = r
  }, function (t, e) {
    function n(t, e, n) {
      var r = -1,
        o = t.length;
      e < 0 && (e = -e > o ? 0 : o + e), n = n > o ? o : n, n < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
      for (var i = Array(o); ++r < o;) i[r] = t[r + e];
      return i
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return o(t) ? void 0 : t
    }
    var o = n(133);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!u(t) || o(t) != a) return !1;
      var e = i(t);
      if (null === e) return !0;
      var n = l.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && f.call(n) == p
    }
    var o = n(3),
      i = n(23),
      u = n(2),
      a = "[object Object]",
      c = Function.prototype,
      s = Object.prototype,
      f = c.toString,
      l = s.hasOwnProperty,
      p = f.call(Object);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(i(t, void 0, o), t + "")
    }
    var o = n(135),
      i = n(48),
      u = n(49);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return (null == t ? 0 : t.length) ? o(t, 1) : []
    }
    var o = n(136);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n, u, a) {
      var c = -1,
        s = t.length;
      for (n || (n = i), a || (a = []); ++c < s;) {
        var f = t[c];
        e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, u, a) : o(a, f) : u || (a[a.length] = f)
      }
      return a
    }
    var o = n(22),
      i = n(137);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(t) || i(t) || !!(a && t && t[a])
    }
    var o = n(7),
      i = n(37),
      u = n(1),
      a = o ? o.isConcatSpreadable : void 0;
    t.exports = r
  }, function (t, e) {
    function n(t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2])
      }
      return t.apply(e, n)
    }
    t.exports = n
  }, function (t, e, n) {
    var r = n(140),
      o = n(35),
      i = n(50),
      u = o ? function (t, e) {
        return o(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: r(e),
          writable: !0
        })
      } : i;
    t.exports = u
  }, function (t, e) {
    function n(t) {
      return function () {
        return t
      }
    }
    t.exports = n
  }, function (t, e) {
    function n(t) {
      var e = 0,
        n = 0;
      return function () {
        var u = i(),
          a = o - (u - n);
        if (n = u, a > 0) {
          if (++e >= r) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
      }
    }
    var r = 800,
      o = 16,
      i = Date.now;
    t.exports = n
  }, function (t, e, n) {
    var r = n(17),
      o = n(6),
      i = n(143),
      u = n(14),
      a = n(13),
      c = n(12),
      s = Object.prototype,
      f = s.hasOwnProperty,
      l = i(function (t, e) {
        if (a(e) || u(e)) return void o(e, c(e), t);
        for (var n in e) f.call(e, n) && r(t, n, e[n])
      });
    t.exports = l
  }, function (t, e, n) {
    function r(t) {
      return o(function (e, n) {
        var r = -1,
          o = n.length,
          u = o > 1 ? n[o - 1] : void 0,
          a = o > 2 ? n[2] : void 0;
        for (u = t.length > 3 && "function" == typeof u ? (o--, u) : void 0, a && i(n[0], n[1], a) && (u = o < 3 ? void 0 : u, o = 1), e = Object(e); ++r < o;) {
          var c = n[r];
          c && t(e, c, r, u)
        }
        return e
      })
    }
    var o = n(144),
      i = n(145);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      return u(i(t, e, o), t + "")
    }
    var o = n(50),
      i = n(48),
      u = n(49);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      if (!a(n)) return !1;
      var r = typeof e;
      return !!("number" == r ? i(n) && u(e, n.length) : "string" == r && e in n) && o(n[e], t)
    }
    var o = n(15),
      i = n(14),
      u = n(39),
      a = n(5);
    t.exports = r
  }, function (t, e, n) {
    var r;
    ! function (e) {
      "use strict";

      function o() {}

      function i(t, e) {
        for (var n = t.length; n--;)
          if (t[n].listener === e) return n;
        return -1
      }

      function u(t) {
        return function () {
          return this[t].apply(this, arguments)
        }
      }

      function a(t) {
        return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && a(t.listener)
      }
      var c = o.prototype,
        s = e.EventEmitter;
      c.getListeners = function (t) {
        var e, n, r = this._getEvents();
        if (t instanceof RegExp) {
          e = {};
          for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
        } else e = r[t] || (r[t] = []);
        return e
      }, c.flattenListeners = function (t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
        return n
      }, c.getListenersAsObject = function (t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
      }, c.addListener = function (t, e) {
        if (!a(e)) throw new TypeError("listener must be a function");
        var n, r = this.getListenersAsObject(t),
          o = "object" == typeof e;
        for (n in r) r.hasOwnProperty(n) && -1 === i(r[n], e) && r[n].push(o ? e : {
          listener: e,
          once: !1
        });
        return this
      }, c.on = u("addListener"), c.addOnceListener = function (t, e) {
        return this.addListener(t, {
          listener: e,
          once: !0
        })
      }, c.once = u("addOnceListener"), c.defineEvent = function (t) {
        return this.getListeners(t), this
      }, c.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
      }, c.removeListener = function (t, e) {
        var n, r, o = this.getListenersAsObject(t);
        for (r in o) o.hasOwnProperty(r) && -1 !== (n = i(o[r], e)) && o[r].splice(n, 1);
        return this
      }, c.off = u("removeListener"), c.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
      }, c.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
      }, c.manipulateListeners = function (t, e, n) {
        var r, o, i = t ? this.removeListener : this.addListener,
          u = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (r = n.length; r--;) i.call(this, e, n[r]);
        else
          for (r in e) e.hasOwnProperty(r) && (o = e[r]) && ("function" == typeof o ? i.call(this, r, o) : u.call(this, r, o));
        return this
      }, c.removeEvent = function (t) {
        var e, n = typeof t,
          r = this._getEvents();
        if ("string" === n) delete r[t];
        else if (t instanceof RegExp)
          for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
        else delete this._events;
        return this
      }, c.removeAllListeners = u("removeEvent"), c.emitEvent = function (t, e) {
        var n, r, o, i, u = this.getListenersAsObject(t);
        for (i in u)
          if (u.hasOwnProperty(i))
            for (n = u[i].slice(0), o = 0; o < n.length; o++) r = n[o], !0 === r.once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
        return this
      }, c.trigger = u("emitEvent"), c.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
      }, c.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
      }, c._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
      }, c._getEvents = function () {
        return this._events || (this._events = {})
      }, o.noConflict = function () {
        return e.EventEmitter = s, o
      }, void 0 !== (r = function () {
        return o
      }.call(e, n, e, t)) && (t.exports = r)
    }(this || {})
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = [];
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          n = encodeURIComponent(n), !0 === r ? e.push(n) : !1 === r ? e.push("!" + n) : null !== r && "object" === (void 0 === r ? "undefined" : o(r)) ? (r = encodeURIComponent(JSON.stringify(r)), e.push(n + "=" + r)) : (r = encodeURIComponent(r), e.push(n + "=" + r))
        }
      return e.join("&")
    }
    e.a = r;
    var o = (n(148), "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      for (var e = [t / 3600, t / 60 % 60, t % 60], n = 0; n < e.length; n++) {
        var r = Math.floor(e[n]);
        e[n] = r < 10 ? "0" + r : r
      }
      return e
    }

    function o(t) {
      var e = r(t),
        n = ["h", "m", "s"],
        o = "";
      e = e.reverse(), n = n.reverse();
      for (var i = 0; i < e.length; i++) o = e[i] + n[i] + o;
      return o.replace(/00(h|m|s)/g, "")
    }
    e.a = o
  }, function (t, e, n) {
    (function (e, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.4+314e4831
       */
      ! function (e, n) {
        t.exports = n()
      }(0, function () {
        "use strict";

        function t(t) {
          var e = typeof t;
          return null !== t && ("object" === e || "function" === e)
        }

        function r(t) {
          return "function" == typeof t
        }

        function o(t) {
          V = t
        }

        function i(t) {
          U = t
        }

        function u() {
          return void 0 !== B ? function () {
            B(c)
          } : a()
        }

        function a() {
          var t = setTimeout;
          return function () {
            return t(c, 1)
          }
        }

        function c() {
          for (var t = 0; t < z; t += 2) {
            (0, Y[t])(Y[t + 1]), Y[t] = void 0, Y[t + 1] = void 0
          }
          z = 0
        }

        function s(t, e) {
          var n = this,
            r = new this.constructor(l);
          void 0 === r[J] && k(r);
          var o = n._state;
          if (o) {
            var i = arguments[o - 1];
            U(function () {
              return E(o, r, i, n._result)
            })
          } else j(n, r, t, e);
          return r
        }

        function f(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e) return t;
          var n = new e(l);
          return _(n, t), n
        }

        function l() {}

        function p() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function h() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function v(t) {
          try {
            return t.then
          } catch (t) {
            return tt.error = t, tt
          }
        }

        function d(t, e, n, r) {
          try {
            t.call(e, n, r)
          } catch (t) {
            return t
          }
        }

        function y(t, e, n) {
          U(function (t) {
            var r = !1,
              o = d(n, e, function (n) {
                r || (r = !0, e !== n ? _(t, n) : w(t, n))
              }, function (e) {
                r || (r = !0, x(t, e))
              }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, x(t, o))
          }, t)
        }

        function b(t, e) {
          e._state === Z ? w(t, e._result) : e._state === X ? x(t, e._result) : j(e, void 0, function (e) {
            return _(t, e)
          }, function (e) {
            return x(t, e)
          })
        }

        function g(t, e, n) {
          e.constructor === t.constructor && n === s && e.constructor.resolve === f ? b(t, e) : n === tt ? (x(t, tt.error), tt.error = null) : void 0 === n ? w(t, e) : r(n) ? y(t, e, n) : w(t, e)
        }

        function _(e, n) {
          e === n ? x(e, p()) : t(n) ? g(e, n, v(n)) : w(e, n)
        }

        function m(t) {
          t._onerror && t._onerror(t._result), O(t)
        }

        function w(t, e) {
          t._state === Q && (t._result = e, t._state = Z, 0 !== t._subscribers.length && U(O, t))
        }

        function x(t, e) {
          t._state === Q && (t._state = X, t._result = e, U(m, t))
        }

        function j(t, e, n, r) {
          var o = t._subscribers,
            i = o.length;
          t._onerror = null, o[i] = e, o[i + Z] = n, o[i + X] = r, 0 === i && t._state && U(O, t)
        }

        function O(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) r = e[u], o = e[u + n], r ? E(n, r, o, i) : o(i);
            t._subscribers.length = 0
          }
        }

        function A(t, e) {
          try {
            return t(e)
          } catch (t) {
            return tt.error = t, tt
          }
        }

        function E(t, e, n, o) {
          var i = r(n),
            u = void 0,
            a = void 0,
            c = void 0,
            s = void 0;
          if (i) {
            if (u = A(n, o), u === tt ? (s = !0, a = u.error, u.error = null) : c = !0, e === u) return void x(e, h())
          } else u = o, c = !0;
          e._state !== Q || (i && c ? _(e, u) : s ? x(e, a) : t === Z ? w(e, u) : t === X && x(e, u))
        }

        function S(t, e) {
          try {
            e(function (e) {
              _(t, e)
            }, function (e) {
              x(t, e)
            })
          } catch (e) {
            x(t, e)
          }
        }

        function P() {
          return et++
        }

        function k(t) {
          t[J] = et++, t._state = void 0, t._result = void 0, t._subscribers = []
        }

        function T() {
          return new Error("Array Methods must be provided an Array")
        }

        function L(t) {
          return new nt(this, t).promise
        }

        function M(t) {
          var e = this;
          return new e(F(t) ? function (n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
          } : function (t, e) {
            return e(new TypeError("You must pass an array to race."))
          })
        }

        function C(t) {
          var e = this,
            n = new e(l);
          return x(n, t), n
        }

        function I() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function R() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function N() {
          var t = void 0;
          if (void 0 !== n) t = n;
          else if ("undefined" != typeof self) t = self;
          else try {
            t = Function("return this")()
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var e = t.Promise;
          if (e) {
            var r = null;
            try {
              r = Object.prototype.toString.call(e.resolve())
            } catch (t) {}
            if ("[object Promise]" === r && !e.cast) return
          }
          t.Promise = rt
        }
        var D = void 0;
        D = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        };
        var F = D,
          z = 0,
          B = void 0,
          V = void 0,
          U = function (t, e) {
            Y[z] = t, Y[z + 1] = e, 2 === (z += 2) && (V ? V(c) : G())
          },
          W = "undefined" != typeof window ? window : void 0,
          q = W || {},
          $ = q.MutationObserver || q.WebKitMutationObserver,
          H = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
          K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          Y = new Array(1e3),
          G = void 0;
        G = H ? function () {
          return function () {
            return e.nextTick(c)
          }
        }() : $ ? function () {
          var t = 0,
            e = new $(c),
            n = document.createTextNode("");
          return e.observe(n, {
              characterData: !0
            }),
            function () {
              n.data = t = ++t % 2
            }
        }() : K ? function () {
          var t = new MessageChannel;
          return t.port1.onmessage = c,
            function () {
              return t.port2.postMessage(0)
            }
        }() : void 0 === W ? function () {
          try {
            var t = Function("return this")().require("vertx");
            return B = t.runOnLoop || t.runOnContext, u()
          } catch (t) {
            return a()
          }
        }() : a();
        var J = Math.random().toString(36).substring(2),
          Q = void 0,
          Z = 1,
          X = 2,
          tt = {
            error: null
          },
          et = 0,
          nt = function () {
            function t(t, e) {
              this._instanceConstructor = t, this.promise = new t(l), this.promise[J] || k(this.promise), F(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : x(this.promise, T())
            }
            return t.prototype._enumerate = function (t) {
              for (var e = 0; this._state === Q && e < t.length; e++) this._eachEntry(t[e], e)
            }, t.prototype._eachEntry = function (t, e) {
              var n = this._instanceConstructor,
                r = n.resolve;
              if (r === f) {
                var o = v(t);
                if (o === s && t._state !== Q) this._settledAt(t._state, e, t._result);
                else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                else if (n === rt) {
                  var i = new n(l);
                  g(i, t, o), this._willSettleAt(i, e)
                } else this._willSettleAt(new n(function (e) {
                  return e(t)
                }), e)
              } else this._willSettleAt(r(t), e)
            }, t.prototype._settledAt = function (t, e, n) {
              var r = this.promise;
              r._state === Q && (this._remaining--, t === X ? x(r, n) : this._result[e] = n), 0 === this._remaining && w(r, this._result)
            }, t.prototype._willSettleAt = function (t, e) {
              var n = this;
              j(t, void 0, function (t) {
                return n._settledAt(Z, e, t)
              }, function (t) {
                return n._settledAt(X, e, t)
              })
            }, t
          }(),
          rt = function () {
            function t(e) {
              this[J] = P(), this._result = this._state = void 0, this._subscribers = [], l !== e && ("function" != typeof e && I(), this instanceof t ? S(this, e) : R())
            }
            return t.prototype.catch = function (t) {
              return this.then(null, t)
            }, t.prototype.finally = function (t) {
              var e = this,
                n = e.constructor;
              return e.then(function (e) {
                return n.resolve(t()).then(function () {
                  return e
                })
              }, function (e) {
                return n.resolve(t()).then(function () {
                  throw e
                })
              })
            }, t
          }();
        return rt.prototype.then = s, rt.all = L, rt.race = M, rt.resolve = f, rt.reject = C, rt._setScheduler = o, rt._setAsap = i, rt._asap = U, rt.polyfill = N, rt.Promise = rt, rt
      })
    }).call(e, n(150), n(29))
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
      if (f === setTimeout) return setTimeout(t, 0);
      if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
      try {
        return f(t, 0)
      } catch (e) {
        try {
          return f.call(null, t, 0)
        } catch (e) {
          return f.call(this, t, 0)
        }
      }
    }

    function i(t) {
      if (l === clearTimeout) return clearTimeout(t);
      if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
      try {
        return l(t)
      } catch (e) {
        try {
          return l.call(null, t)
        } catch (e) {
          return l.call(this, t)
        }
      }
    }

    function u() {
      d && h && (d = !1, h.length ? v = h.concat(v) : y = -1, v.length && a())
    }

    function a() {
      if (!d) {
        var t = o(u);
        d = !0;
        for (var e = v.length; e;) {
          for (h = v, v = []; ++y < e;) h && h[y].run();
          y = -1, e = v.length
        }
        h = null, d = !1, i(t)
      }
    }

    function c(t, e) {
      this.fun = t, this.array = e
    }

    function s() {}
    var f, l, p = t.exports = {};
    ! function () {
      try {
        f = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
        f = n
      }
      try {
        l = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (t) {
        l = r
      }
    }();
    var h, v = [],
      d = !1,
      y = -1;
    p.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      v.push(new c(t, e)), 1 !== v.length || d || o(a)
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, p.listeners = function (t) {
      return []
    }, p.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, p.cwd = function () {
      return "/"
    }, p.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, p.umask = function () {
      return 0
    }
  }, , function (t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t) {
      return u()(t) ? document.getElementById(t) : t
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), n.d(e, "PlayerEmbed", function () {
      return v
    });
    var i = n(52),
      u = n.n(i),
      a = n(55),
      c = n(153),
      s = n(154),
      f = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      l = Object.freeze({
        ABORTED: s.a.ABORTED.code,
        NETWORK: s.a.NETWORK.code,
        DECODE: s.a.DECODE.code,
        FORMAT_NOT_SUPPORTED: s.a.FORMAT_NOT_SUPPORTED.code,
        CONTENT_NOT_AVAILABLE: s.a.CONTENT_NOT_AVAILABLE.code,
        RENDERER_NOT_AVAILABLE: s.a.RENDERER_NOT_AVAILABLE.code
      }),
      p = Object.freeze({
        MINUTE_WATCHED: a.e,
        VIDEO_PLAY: a.n,
        BUFFER_EMPTY: a.a,
        VIDEO_ERROR: a.o
      }),
      h = Object.freeze({
        TRANSITION_TO_RECOMMENDED_VOD: a.m
      }),
      v = function () {
        function t(e, n) {
          r(this, t), this._bridge = new a.p(o(e), n)
        }
        return f(t, [{
          key: "play",
          value: function () {
            this._bridge.callPlayerMethod(a.t)
          }
        }, {
          key: "pause",
          value: function () {
            this._bridge.callPlayerMethod(a.s)
          }
        }, {
          key: "seek",
          value: function (t) {
            this._bridge.callPlayerMethod(a.u, t)
          }
        }, {
          key: "setVolume",
          value: function (t) {
            this._bridge.callPlayerMethod(a.N, t)
          }
        }, {
          key: "setTheatre",
          value: function (t) {
            this._bridge.callPlayerMethod(a.J, t)
          }
        }, {
          key: "setAutoplay",
          value: function (t) {
            this._bridge.callPlayerMethod(a.v, t)
          }
        }, {
          key: "setFullscreen",
          value: function (t) {
            this._bridge.callPlayerMethod(a.D, t)
          }
        }, {
          key: "setMuted",
          value: function (t) {
            this._bridge.callPlayerMethod(a.G, t)
          }
        }, {
          key: "setChannel",
          value: function (t) {
            this._bridge.callPlayerMethod(a.x, t)
          }
        }, {
          key: "setChannelId",
          value: function (t) {
            this._bridge.callPlayerMethod(a.y, t)
          }
        }, {
          key: "setCollection",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            this._bridge.callPlayerMethod(a.A, t, e, n)
          }
        }, {
          key: "setVideo",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this._bridge.callPlayerMethod(a.L, t, e)
          }
        }, {
          key: "setContent",
          value: function (t) {
            var e = t.contentId,
              n = t.customerId;
            this._bridge.callPlayerMethod(a.B, e, n)
          }
        }, {
          key: "setClip",
          value: function (t) {
            this._bridge.callPlayerMethod(a.z, t)
          }
        }, {
          key: "setEditClip",
          value: function (t) {
            this._bridge.callPlayerMethod(a.C, t)
          }
        }, {
          key: "setVideoSource",
          value: function (t) {
            this._bridge.callPlayerMethod(a.M, t)
          }
        }, {
          key: "setQuality",
          value: function (t) {
            this._bridge.callPlayerMethod(a.I, t)
          }
        }, {
          key: "setWidth",
          value: function (t) {
            this._bridge.setWidth(t)
          }
        }, {
          key: "setHeight",
          value: function (t) {
            this._bridge.setHeight(t)
          }
        }, {
          key: "setMiniPlayerMode",
          value: function (t) {
            this._bridge.callPlayerMethod(a.F, t)
          }
        }, {
          key: "setTrackingProperties",
          value: function (t) {
            Object(c.a)() && this._bridge.callPlayerMethod(a.K, t)
          }
        }, {
          key: "setPlayerType",
          value: function (t) {
            this._bridge.callPlayerMethod(a.H, t)
          }
        }, {
          key: "setLiveMaxLatency",
          value: function (t) {
            this._bridge.callPlayerMethod(a.E, t)
          }
        }, {
          key: "addEventListener",
          value: function (t, e) {
            this._bridge.addEventListener(t, e)
          }
        }, {
          key: "removeEventListener",
          value: function (t, e) {
            this._bridge.removeEventListener(t, e)
          }
        }, {
          key: "enableCaptions",
          value: function () {
            this._bridge.callPlayerMethod(a.r)
          }
        }, {
          key: "disableCaptions",
          value: function () {
            this._bridge.callPlayerMethod(a.q)
          }
        }, {
          key: "setCaptionSize",
          value: function (t) {
            this._bridge.callPlayerMethod(a.w, t)
          }
        }, {
          key: "getContentId",
          value: function () {
            return this._bridge.getStoreState().stream.contentId
          }
        }, {
          key: "getChannel",
          value: function () {
            return this._bridge.getPlayerState().channelName
          }
        }, {
          key: "getChannelId",
          value: function () {
            return this._bridge.getPlayerState().channelId
          }
        }, {
          key: "getCurrentTime",
          value: function () {
            return this._bridge.getPlayerState().currentTime
          }
        }, {
          key: "getCustomerId",
          value: function () {
            return this._bridge.getStoreState().stream.customerId
          }
        }, {
          key: "getDuration",
          value: function () {
            return this._bridge.getPlayerState().duration
          }
        }, {
          key: "getEnded",
          value: function () {
            return this._bridge.getPlayerState().playback === a.O
          }
        }, {
          key: "getMuted",
          value: function () {
            return this._bridge.getPlayerState().muted
          }
        }, {
          key: "getPlaybackStats",
          value: function () {
            return this._bridge.getStoreState().stats.videoStats
          }
        }, {
          key: "getPlaySessionId",
          value: function () {
            return this._bridge.getStoreState().playSessionId
          }
        }, {
          key: "isPaused",
          value: function () {
            return this._bridge.getPlayerState().playback === a.P
          }
        }, {
          key: "getQuality",
          value: function () {
            return this._bridge.getPlayerState().quality
          }
        }, {
          key: "getQualities",
          value: function () {
            return this._bridge.getPlayerState().qualitiesAvailable
          }
        }, {
          key: "getViewers",
          value: function () {
            return this._bridge.getStoreState().viewercount
          }
        }, {
          key: "getVideo",
          value: function () {
            return this._bridge.getPlayerState().videoID
          }
        }, {
          key: "getVolume",
          value: function () {
            return this._bridge.getPlayerState().volume
          }
        }, {
          key: "getAutoplay",
          value: function () {
            return this._bridge.getPlayerState().autoplay
          }
        }, {
          key: "getTheatre",
          value: function () {
            return this._bridge.getStoreState().screenMode.isTheatreMode
          }
        }, {
          key: "getFullscreen",
          value: function () {
            return this._bridge.getStoreState().screenMode.isFullScreen
          }
        }, {
          key: "getFullscreenEnabled",
          value: function () {
            return this._bridge.getStoreState().screenMode.canFullScreen
          }
        }, {
          key: "getSessionInfo",
          value: function () {
            return {
              broadcastId: this._bridge.getStoreState().broadcastId,
              playSessionId: this._bridge.getStoreState().playSessionId
            }
          }
        }, {
          key: "getCaptionsAvailable",
          value: function () {
            return this._bridge.getStoreState().captions.available
          }
        }, {
          key: "_addPlayerStateListener",
          value: function (t) {
            this._bridge.addPlayerStateListener(t)
          }
        }, {
          key: "_removePlayerStateListener",
          value: function (t) {
            this._bridge.removePlayerStateListener(t)
          }
        }, {
          key: "destroy",
          value: function () {
            this._bridge.destroy()
          }
        }], [{
          key: "READY",
          get: function () {
            return a.l
          }
        }, {
          key: "PLAY",
          get: function () {
            return a.i
          }
        }, {
          key: "PLAYING",
          get: function () {
            return a.k
          }
        }, {
          key: "PAUSE",
          get: function () {
            return a.h
          }
        }, {
          key: "ENDED",
          get: function () {
            return a.c
          }
        }, {
          key: "ONLINE",
          get: function () {
            return a.g
          }
        }, {
          key: "OFFLINE",
          get: function () {
            return a.f
          }
        }, {
          key: "ERROR",
          get: function () {
            return a.d
          }
        }, {
          key: "CAPTIONS",
          get: function () {
            return a.b
          }
        }, {
          key: "PLAYBACK_BLOCKED",
          get: function () {
            return a.j
          }
        }]), t
      }();
    window.Twitch = window.Twitch || {}, window.Twitch.Player = v, window.Twitch.Analytics = p, window.Twitch.Errors = l, window.Twitch.EmbedEvents = h
  }, function (t, e, n) {
    "use strict";

    function r() {
      return window.self !== window.parent ? document.referrer : window.location.href
    }

    function o() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
        e = Object(i.a)(t),
        n = e.host.split(".").slice(-2).join(".");
      return n === u || n === a
    }
    e.a = o;
    var i = n(51),
      u = "twitch.tv",
      a = "twitch.tech"
  }, function (t, e, n) {
    "use strict";
    var r = Object.freeze({
      ABORTED: {
        code: 1e3,
        message: "Media playback aborted error"
      },
      NETWORK: {
        code: 2e3,
        message: "Network error"
      },
      CCU_CAP_REACHED: {
        code: 2001,
        message: "Max users reached"
      },
      DECODE: {
        code: 3e3,
        message: "Media resource decoding error"
      },
      FORMAT_NOT_SUPPORTED: {
        code: 4e3,
        message: "Resource format not supported error"
      },
      CONTENT_NOT_AVAILABLE: {
        code: 5e3,
        message: "Content not available"
      },
      RENDERER_NOT_AVAILABLE: {
        code: 6e3,
        message: "Renderer not available"
      }
    });
    e.a = r
  }])
});
