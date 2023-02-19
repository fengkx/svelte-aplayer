function A() {
}
function $e(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function dt(e) {
  return e();
}
function et() {
  return /* @__PURE__ */ Object.create(null);
}
function Ne(e) {
  e.forEach(dt);
}
function C(e) {
  return typeof e == "function";
}
function ht(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function _t(e) {
  return Object.keys(e).length === 0;
}
function mt(e, ...t) {
  if (e == null)
    return A;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(e, t, n) {
  e.$$.on_destroy.push(mt(t, n));
}
function tt(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function S(e, t, n) {
  return e.set(n), t;
}
function c(e, t) {
  e.appendChild(t);
}
function W(e, t, n) {
  e.insertBefore(t, n || null);
}
function j(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function yt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function bt(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function se(e) {
  return document.createTextNode(e);
}
function B() {
  return se(" ");
}
function Me() {
  return se("");
}
function D(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function wt(e) {
  return Array.from(e.childNodes);
}
function ze(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function J(e, t, n, l) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
function ce(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function kt(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(e, n, l, t), s;
}
class xe {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = bt(n.nodeName) : this.e = v(n.nodeName), this.t = n, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      W(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(j);
  }
}
let Ue;
function Ye(e) {
  Ue = e;
}
function Je() {
  if (!Ue)
    throw new Error("Function called outside component initialization");
  return Ue;
}
function zt(e) {
  Je().$$.on_mount.push(e);
}
function Mt(e) {
  Je().$$.on_destroy.push(e);
}
function xt() {
  const e = Je();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const s = e.$$.callbacks[t];
    if (s) {
      const u = kt(t, n, { cancelable: l });
      return s.slice().forEach((a) => {
        a.call(e, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
const Be = [], Pe = [], Ve = [], nt = [], Et = Promise.resolve();
let Ke = !1;
function Tt() {
  Ke || (Ke = !0, Et.then(pt));
}
function Qe(e) {
  Ve.push(e);
}
const Ge = /* @__PURE__ */ new Set();
let Ae = 0;
function pt() {
  if (Ae !== 0)
    return;
  const e = Ue;
  do {
    try {
      for (; Ae < Be.length; ) {
        const t = Be[Ae];
        Ae++, Ye(t), Lt(t.$$);
      }
    } catch (t) {
      throw Be.length = 0, Ae = 0, t;
    }
    for (Ye(null), Be.length = 0, Ae = 0; Pe.length; )
      Pe.pop()();
    for (let t = 0; t < Ve.length; t += 1) {
      const n = Ve[t];
      Ge.has(n) || (Ge.add(n), n());
    }
    Ve.length = 0;
  } while (Be.length);
  for (; nt.length; )
    nt.pop()();
  Ke = !1, Ge.clear(), Ye(e);
}
function Lt(e) {
  if (e.fragment !== null) {
    e.update(), Ne(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Qe);
  }
}
const St = /* @__PURE__ */ new Set();
function gt(e, t) {
  e && e.i && (St.delete(e), e.i(t));
}
function qt(e, t) {
  e.d(1), t.delete(e.key);
}
function Dt(e, t, n, l, s, u, a, i, h, r, f, _) {
  let y = e.length, b = u.length, k = y;
  const q = {};
  for (; k--; )
    q[e[k].key] = k;
  const m = [], p = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (k = b; k--; ) {
    const T = _(s, u, k), L = n(T);
    let d = a.get(L);
    d ? l && d.p(T, t) : (d = r(L, T), d.c()), p.set(L, m[k] = d), L in q && w.set(L, Math.abs(k - q[L]));
  }
  const E = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
  function K(T) {
    gt(T, 1), T.m(i, f), a.set(T.key, T), f = T.first, b--;
  }
  for (; y && b; ) {
    const T = m[b - 1], L = e[y - 1], d = T.key, z = L.key;
    T === L ? (f = T.first, y--, b--) : p.has(z) ? !a.has(d) || E.has(d) ? K(T) : G.has(z) ? y-- : w.get(d) > w.get(z) ? (G.add(d), K(T)) : (E.add(z), y--) : (h(L, a), y--);
  }
  for (; y--; ) {
    const T = e[y];
    p.has(T.key) || h(T, a);
  }
  for (; b; )
    K(m[b - 1]);
  return m;
}
function At(e, t, n, l) {
  const { fragment: s, after_update: u } = e.$$;
  s && s.m(t, n), l || Qe(() => {
    const a = e.$$.on_mount.map(dt).filter(C);
    e.$$.on_destroy ? e.$$.on_destroy.push(...a) : Ne(a), e.$$.on_mount = [];
  }), u.forEach(Qe);
}
function It(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ne(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Bt(e, t) {
  e.$$.dirty[0] === -1 && (Be.push(e), Tt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ht(e, t, n, l, s, u, a, i = [-1]) {
  const h = Ue;
  Ye(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: A,
    not_equal: s,
    bound: et(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: et(),
    dirty: i,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  a && a(r.root);
  let f = !1;
  if (r.ctx = n ? n(e, t.props || {}, (_, y, ...b) => {
    const k = b.length ? b[0] : y;
    return r.ctx && s(r.ctx[_], r.ctx[_] = k) && (!r.skip_bound && r.bound[_] && r.bound[_](k), f && Bt(e, _)), y;
  }) : [], r.update(), f = !0, Ne(r.before_update), r.fragment = l ? l(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const _ = wt(t.target);
      r.fragment && r.fragment.l(_), _.forEach(j);
    } else
      r.fragment && r.fragment.c();
    t.intro && gt(e.$$.fragment), At(e, t.target, t.anchor, t.customElement), pt();
  }
  Ye(h);
}
class Pt {
  $destroy() {
    It(this, 1), this.$destroy = A;
  }
  $on(t, n) {
    if (!C(n))
      return A;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const s = l.indexOf(n);
      s !== -1 && l.splice(s, 1);
    };
  }
  $set(t) {
    this.$$set && !_t(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ie = [];
function Nt(e, t) {
  return {
    subscribe: He(e, t).subscribe
  };
}
function He(e, t = A) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function s(i) {
    if (ht(e, i) && (e = i, n)) {
      const h = !Ie.length;
      for (const r of l)
        r[1](), Ie.push(r, e);
      if (h) {
        for (let r = 0; r < Ie.length; r += 2)
          Ie[r][0](Ie[r + 1]);
        Ie.length = 0;
      }
    }
  }
  function u(i) {
    s(i(e));
  }
  function a(i, h = A) {
    const r = [i, h];
    return l.add(r), l.size === 1 && (n = t(s) || A), i(e), () => {
      l.delete(r), l.size === 0 && (n(), n = null);
    };
  }
  return { set: s, update: u, subscribe: a };
}
function ke(e, t, n) {
  const l = !Array.isArray(e), s = l ? [e] : e, u = t.length < 2;
  return Nt(n, (a) => {
    let i = !1;
    const h = [];
    let r = 0, f = A;
    const _ = () => {
      if (r)
        return;
      f();
      const b = t(l ? h[0] : h, a);
      u ? a(b) : f = C(b) ? b : A;
    }, y = s.map((b, k) => mt(b, (q) => {
      h[k] = q, r &= ~(1 << k), i && _();
    }, () => {
      r |= 1 << k;
    }));
    return i = !0, _(), function() {
      Ne(y), f();
    };
  });
}
const lt = (e) => {
  const t = (u) => u < 10 ? "0" + u : "" + u, n = Math.floor(e / 3600), l = Math.floor((e - n * 3600) / 60), s = Math.floor(e - n * 3600 - l * 60);
  return (n > 0 ? [n, l, s] : [l, s]).map(t).join(":");
}, Ct = /mobile/i.test(window.navigator.userAgent);
function st(e) {
  if (e) {
    e = e.replace(/([^\]^\n])\[/g, (s, u) => u + `
[`);
    const t = e.split(`
`);
    let n = [];
    const l = t.length;
    for (let s = 0; s < l; s++) {
      const u = t[s].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), a = t[s].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
      if (u) {
        const i = u.length;
        for (let h = 0; h < i; h++) {
          const r = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(u[h]), f = r[1] * 60, _ = parseInt(r[2]), y = r[4] ? parseInt(r[4]) / ((r[4] + "").length === 2 ? 100 : 1e3) : 0, b = f + _ + y;
          n.push([b, a]);
        }
      }
    }
    return n = n.filter((s) => s[1]), n.sort((s, u) => s[0] - u[0]), n;
  } else
    return [];
}
function jt(e, t) {
  const n = e[t];
  return !(n == null || n === "false");
}
console.log(
  `
 %c Svelte APlayer v0.1.1 %c http://svelte-aplayer.js.org 

`,
  "color: #fff; background: #ff3e00; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
const vt = [];
function Ot(e) {
  const t = document.createElement("audio");
  vt.push(t), Rt(t, e);
  let n = He(0), l = He(NaN);
  const s = ke(
    [n, l],
    ([m, p]) => {
      let w = m / p;
      return w = Math.max(w, 0), w = Math.min(w, 1), w *= 100, {
        ptime: lt(m),
        duration: lt(p),
        playPercentage: `${w}%`
      };
    }
  );
  let u = He(0);
  const a = ke([u, l], ([m, p]) => {
    let w = m / p;
    return w = Math.max(w, 0), w = Math.min(w, 1), w *= 100, { bufferPercentage: `${w}%`, bufTime: m };
  }), i = He({
    playingIndex: 0,
    audio: []
  }), h = ke(i, (m) => m.audio), r = He({
    volume: 0.7,
    loop: "all",
    order: "list",
    showList: !0
  }), f = ke(r, (m) => ({
    volumePercentage: `${m.volume * 100}%`,
    muted: m.volume === 0
  })), _ = ke(i, (m) => m.audio[m.playingIndex]), y = ke(
    [a, n],
    ([{ bufTime: m }, p]) => t.paused ? !1 : t.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA || m - p < 2 && t.readyState === HTMLMediaElement.HAVE_FUTURE_DATA
  ), b = ke(
    _,
    // @ts-ignore
    (m, p) => {
      if (!m || !m.lrc) {
        p([]);
        return;
      }
      const w = m.lrc;
      w.startsWith("http") ? fetch(w).then((E) => {
        if (!E.ok)
          throw new Error(
            `${E.statusText} canot loading lrc from ${w}`
          );
        return E.text();
      }).then((E) => {
        p(st(E));
      }).catch((E) => {
        throw p([]), console.error(E), E;
      }) : p(st(w));
    },
    []
  );
  let k = !1;
  _.subscribe((m) => {
    k && e("listswitch", m), k = !0;
  });
  let q = !1;
  return h.subscribe((m) => {
    q && e("listchange", m), q = !0;
  }), b.subscribe((m) => {
    m.length > 0 ? e("lrcshow") : e("lrchide");
  }), {
    player: t,
    playList: i,
    audioList: h,
    currentSong: _,
    rdTime: s,
    currentTime: n,
    duration: l,
    rdBufTime: a,
    wtBufTime: u,
    loading: y,
    lrc: b,
    controlState: r,
    volumeState: f
  };
}
function Rt(e, t) {
  [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "mozaudioavailable",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting"
  ].forEach((l) => {
    e.addEventListener(l, (s) => {
      t(l, s);
    });
  });
}
function Yt(e, t) {
  let n = !1;
  return { volumeDragStart: () => {
    n = !0;
  }, volumeDragMove: (a) => {
    if (n) {
      let i = 1 - ((a.clientY || a.changedTouches[0].clientY) - t.getBoundingClientRect().top) / t.clientHeight;
      i = Math.max(i, 0), i = Math.min(i, 1), e.volume = i;
    }
  }, volumeDragEnd: (a) => {
    if (n) {
      let i = 1 - ((a.clientY || a.changedTouches[0].clientY) - t.getBoundingClientRect().top) / t.clientHeight;
      i = Math.max(i, 0), i = Math.min(i, 1), e.volume = i, n = !1;
    }
  } };
}
function Ut(e, t) {
  let n = !1;
  return {
    progressDragStart: () => {
      n = !0;
    },
    progressDragMove: (a) => {
      if (n) {
        let i = ((a.clientX || a.changedTouches[0].clientX) - t.getBoundingClientRect().left) / t.clientWidth;
        i = Math.max(i, 0), i = Math.min(i, 1), e.currentTime = e.duration * i;
      }
    },
    progressDragEnd: (a) => {
      if (n) {
        n = !1;
        let i = ((a.clientX || a.changedTouches[0].clientX) - t.getBoundingClientRect().left) / t.clientWidth;
        i = Math.max(i, 0), i = Math.min(i, 1), e.currentTime = e.duration * i;
      }
    }
  };
}
const Xt = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 28 32"
                  ><path
                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"
                  /></svg
        >`, Ft = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 28 32"
                  ><path
                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"
                  /></svg
                >`, Wt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 32 32"
                ><path
                  d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"
                /></svg
              >`, Vt = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 32 32"
                    ><path
                      d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"
                    /></svg
                  >`, Jt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 32 32"
                ><path
                  d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"
                /></svg
              >`, Gt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 33 32"
                ><path
                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"
                /></svg
              >`, Kt = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 29 32"
                ><path
                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"
                /></svg
              >`, Qt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 29 32"
                ><path
                  d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"
                /></svg
              >`;
function it(e, t, n) {
  const l = e.slice();
  return l[72] = t[n], l[74] = n, l;
}
function rt(e, t, n) {
  const l = e.slice();
  return l[75] = t[n], l[77] = n, l;
}
function Zt(e) {
  let t;
  return {
    c() {
      t = v("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31" class="svelte-afaxzx"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z" class="svelte-afaxzx"></path></svg>', g(t, "class", "aplayer-button aplayer-play svelte-afaxzx");
    },
    m(n, l) {
      W(n, t, l);
    },
    d(n) {
      n && j(t);
    }
  };
}
function $t(e) {
  let t;
  return {
    c() {
      t = v("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32" class="svelte-afaxzx"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z" class="svelte-afaxzx"></path></svg>', g(t, "class", "aplayer-button aplayer-pause svelte-afaxzx");
    },
    m(n, l) {
      W(n, t, l);
    },
    d(n) {
      n && j(t);
    }
  };
}
function ot(e) {
  let t, n, l = [], s = /* @__PURE__ */ new Map(), u = (
    /*$lrc*/
    e[5]
  );
  const a = (i) => (
    /*line*/
    i[75][0]
  );
  for (let i = 0; i < u.length; i += 1) {
    let h = rt(e, u, i), r = a(h);
    s.set(r, l[i] = at(r, h));
  }
  return {
    c() {
      t = v("div"), n = v("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      g(n, "class", "aplayer-lrc-contents svelte-afaxzx"), J(n, "transform", "translateY(calc(" + Math.max(
        /*lrcActiveIndex*/
        e[7],
        0
      ) + " * -1 * calc(var(--base-font-size) + 4px)))"), g(t, "class", "aplayer-lrc svelte-afaxzx");
    },
    m(i, h) {
      W(i, t, h), c(t, n);
      for (let r = 0; r < l.length; r += 1)
        l[r].m(n, null);
    },
    p(i, h) {
      h[0] & /*$lrc, lrcActiveIndex*/
      160 && (u = /*$lrc*/
      i[5], l = Dt(l, h, a, 1, i, u, s, n, qt, at, null, rt)), h[0] & /*lrcActiveIndex*/
      128 && J(n, "transform", "translateY(calc(" + Math.max(
        /*lrcActiveIndex*/
        i[7],
        0
      ) + " * -1 * calc(var(--base-font-size) + 4px)))");
    },
    d(i) {
      i && j(t);
      for (let h = 0; h < l.length; h += 1)
        l[h].d();
    }
  };
}
function at(e, t) {
  let n, l = (
    /*line*/
    t[75][1] + ""
  ), s, u;
  return {
    key: e,
    first: null,
    c() {
      n = v("p"), s = se(l), u = B(), g(n, "class", "svelte-afaxzx"), ce(
        n,
        "aplayer-lrc-current",
        /*index*/
        t[77] === /*lrcActiveIndex*/
        t[7]
      ), this.first = n;
    },
    m(a, i) {
      W(a, n, i), c(n, s), c(n, u);
    },
    p(a, i) {
      t = a, i[0] & /*$lrc*/
      32 && l !== (l = /*line*/
      t[75][1] + "") && ze(s, l), i[0] & /*$lrc, lrcActiveIndex*/
      160 && ce(
        n,
        "aplayer-lrc-current",
        /*index*/
        t[77] === /*lrcActiveIndex*/
        t[7]
      );
    },
    d(a) {
      a && j(n);
    }
  };
}
function en(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Xt, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function tn(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Ft, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function nn(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Jt, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function ln(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Wt, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function sn(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Kt, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function rn(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Gt, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function on(e) {
  let t, n;
  return {
    c() {
      t = new xe(!1), n = Me(), t.a = n;
    },
    m(l, s) {
      t.m(Qt, l, s), W(l, n, s);
    },
    p: A,
    d(l) {
      l && j(n), l && t.d();
    }
  };
}
function ct(e) {
  let t, n, l;
  return {
    c() {
      t = v("button"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32" class="svelte-afaxzx"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z" class="svelte-afaxzx"></path></svg>', g(t, "type", "button"), g(t, "class", "aplayer-icon aplayer-icon-menu svelte-afaxzx");
    },
    m(s, u) {
      W(s, t, u), n || (l = D(
        t,
        "click",
        /*click_handler_4*/
        e[58]
      ), n = !0);
    },
    p: A,
    d(s) {
      s && j(t), n = !1, l();
    }
  };
}
function ut(e) {
  let t;
  return {
    c() {
      t = v("span"), g(t, "class", "aplayer-list-cur svelte-afaxzx");
    },
    m(n, l) {
      W(n, t, l);
    },
    d(n) {
      n && j(t);
    }
  };
}
function ft(e) {
  let t, n, l, s = (
    /*idx*/
    e[74] + 1 + ""
  ), u, a, i, h = (
    /*song*/
    e[72].name + ""
  ), r, f, _, y = (
    /*song*/
    e[72].artist + ""
  ), b, k, q, m, p = (
    /*idx*/
    e[74] === /*$playList*/
    e[17].playingIndex && ut()
  );
  function w() {
    return (
      /*click_handler_5*/
      e[59](
        /*idx*/
        e[74]
      )
    );
  }
  return {
    c() {
      t = v("li"), p && p.c(), n = B(), l = v("span"), u = se(s), a = B(), i = v("span"), r = se(h), f = B(), _ = v("span"), b = se(y), k = B(), g(l, "class", "aplayer-list-index svelte-afaxzx"), g(i, "class", "aplayer-list-title"), g(_, "class", "aplayer-list-artist svelte-afaxzx"), g(t, "class", "svelte-afaxzx");
    },
    m(E, G) {
      W(E, t, G), p && p.m(t, null), c(t, n), c(t, l), c(l, u), c(t, a), c(t, i), c(i, r), c(t, f), c(t, _), c(_, b), c(t, k), q || (m = D(t, "click", w), q = !0);
    },
    p(E, G) {
      e = E, /*idx*/
      e[74] === /*$playList*/
      e[17].playingIndex ? p || (p = ut(), p.c(), p.m(t, n)) : p && (p.d(1), p = null), G[0] & /*$audioList*/
      16 && h !== (h = /*song*/
      e[72].name + "") && ze(r, h), G[0] & /*$audioList*/
      16 && y !== (y = /*song*/
      e[72].artist + "") && ze(b, y);
    },
    d(E) {
      E && j(t), p && p.d(), q = !1, m();
    }
  };
}
function an(e) {
  let t, n, l, s, u, a, i, h = (
    /*$currentSong*/
    e[6].name + ""
  ), r, f, _, y = (
    /*$currentSong*/
    e[6].artist + ""
  ), b, k, q, m, p, w, E, G, K, T, L, d, z, re, me, pe = (
    /*$rdTime*/
    e[20].ptime + ""
  ), ge, ve, _e, ue = (
    /*$rdTime*/
    e[20].duration + ""
  ), Ee, Ce, O, je, Z, te, Te, R, fe, oe, Le, ne, ye, V, Se, qe, $, Y, De, Xe;
  function be(M, x) {
    return (
      /*player*/
      M[1].paused ? Zt : $t
    );
  }
  let ae = be(e), le = ae(e), H = (
    /*$currentSong*/
    e[6].lrc && ot(e)
  );
  function Oe(M, x) {
    return (
      /*$volumeState*/
      M[22].muted || /*player*/
      M[1].muted ? tn : en
    );
  }
  let we = Oe(e), Q = we(e);
  function Re(M, x) {
    return (
      /*$controlState*/
      M[18].order === "random" ? ln : nn
    );
  }
  let P = Re(e), N = P(e);
  function Fe(M, x) {
    if (
      /*$controlState*/
      M[18].loop === "none"
    )
      return on;
    if (
      /*$controlState*/
      M[18].loop === "one"
    )
      return rn;
    if (
      /*$controlState*/
      M[18].loop === "all"
    )
      return sn;
  }
  let de = Fe(e), U = de && de(e), X = (
    /*$audioList*/
    e[4].length > 1 && ct(e)
  ), he = (
    /*$audioList*/
    e[4]
  ), F = [];
  for (let M = 0; M < he.length; M += 1)
    F[M] = ft(it(e, he, M));
  return {
    c() {
      t = v("div"), n = v("div"), l = v("div"), le.c(), s = B(), u = v("div"), a = v("div"), i = v("span"), r = se(h), f = B(), _ = v("span"), b = se(y), k = B(), H && H.c(), q = B(), m = v("div"), p = v("div"), w = v("div"), E = v("div"), G = B(), K = v("div"), T = v("div"), L = v("span"), d = B(), z = v("div"), re = v("span"), me = v("span"), ge = se(pe), ve = se(` /
            `), _e = v("span"), Ee = se(ue), Ce = B(), O = v("span"), je = B(), Z = v("div"), te = v("button"), Q.c(), Te = B(), R = v("div"), fe = v("div"), oe = v("div"), Le = B(), ne = v("button"), N.c(), ye = B(), V = v("button"), U && U.c(), Se = B(), X && X.c(), qe = B(), $ = v("div"), Y = v("ol");
      for (let M = 0; M < F.length; M += 1)
        F[M].c();
      g(l, "class", "aplayer-pic svelte-afaxzx"), J(l, "background-image", "url( " + /*$currentSong*/
      e[6].cover + " )"), g(i, "class", "aplayer-title svelte-afaxzx"), g(_, "class", "aplayer-artist svelte-afaxzx"), g(a, "class", "aplayer-music svelte-afaxzx"), g(E, "class", "aplayer-loaded svelte-afaxzx"), J(
        E,
        "width",
        /*$rdBufTime*/
        e[19].bufferPercentage
      ), g(L, "class", "aplayer-loading-icon"), J(
        L,
        "display",
        /*$loading*/
        e[21] ? "inline" : "none"
      ), g(T, "class", "aplayer-thumb svelte-afaxzx"), g(K, "class", "aplayer-played svelte-afaxzx"), J(
        K,
        "width",
        /*$rdTime*/
        e[20].playPercentage
      ), g(w, "class", "aplayer-bar svelte-afaxzx"), g(p, "class", "aplayer-bar-wrap svelte-afaxzx"), g(me, "class", "aplayer-ptime"), g(_e, "class", "aplayer-dtime"), g(re, "class", "aplayer-time-inner svelte-afaxzx"), O.hidden = !0, g(te, "type", "button"), g(te, "class", "aplayer-icon aplayer-icon-volume-down svelte-afaxzx"), g(oe, "class", "aplayer-volume svelte-afaxzx"), J(
        oe,
        "height",
        /*player*/
        e[1].muted ? "0px" : (
          /*$volumeState*/
          e[22].volumePercentage
        )
      ), g(fe, "class", "aplayer-volume-bar svelte-afaxzx"), g(R, "class", "aplayer-volume-bar-wrap svelte-afaxzx"), g(Z, "class", "aplayer-volume-wrap svelte-afaxzx"), g(ne, "type", "button"), g(ne, "class", "aplayer-icon aplayer-icon-order svelte-afaxzx"), g(V, "type", "button"), g(V, "class", "aplayer-icon aplayer-icon-loop svelte-afaxzx"), g(z, "class", "aplayer-time svelte-afaxzx"), g(m, "class", "aplayer-controller svelte-afaxzx"), g(u, "class", "aplayer-info svelte-afaxzx"), g(Y, "class", "svelte-afaxzx"), g($, "class", "aplayer-list svelte-afaxzx"), J(
        $,
        "height",
        /*$controlState*/
        e[18].showList ? `${/*playerListHeight*/
        e[16]}px` : "0px"
      ), g(n, "class", "aplayer-body  svelte-afaxzx"), g(t, "class", "aplayer svelte-afaxzx"), ce(
        t,
        "aplayer-withlrc",
        /*$lrc*/
        e[5].length > 0
      ), ce(
        t,
        "aplayer-withlist",
        /*$audioList*/
        e[4].length > 1
      ), ce(
        t,
        "aplayer-narrow",
        /*mini*/
        e[0]
      ), ce(t, "aplayer-mobile", Ct);
    },
    m(M, x) {
      W(M, t, x), c(t, n), c(n, l), le.m(l, null), c(n, s), c(n, u), c(u, a), c(a, i), c(i, r), c(a, f), c(a, _), c(_, b), c(u, k), H && H.m(u, null), c(u, q), c(u, m), c(m, p), c(p, w), c(w, E), c(w, G), c(w, K), c(K, T), c(T, L), L.innerHTML = Vt, e[53](p), c(m, d), c(m, z), c(z, re), c(re, me), c(me, ge), c(re, ve), c(re, _e), c(_e, Ee), c(z, Ce), c(z, O), c(z, je), c(z, Z), c(Z, te), Q.m(te, null), c(Z, Te), c(Z, R), c(R, fe), c(fe, oe), e[55](fe), c(z, Le), c(z, ne), N.m(ne, null), c(z, ye), c(z, V), U && U.m(V, null), c(z, Se), X && X.m(z, null), c(n, qe), c(n, $), c($, Y);
      for (let I = 0; I < F.length; I += 1)
        F[I].m(Y, null);
      e[60]($), e[61](t), De || (Xe = [
        D(
          l,
          "click",
          /*click_handler*/
          e[52]
        ),
        D(p, "mousedown", function() {
          C(
            /*progressDragStart*/
            e[13]
          ) && e[13].apply(this, arguments);
        }),
        D(p, "mousemove", function() {
          C(
            /*progressDragMove*/
            e[14]
          ) && e[14].apply(this, arguments);
        }),
        D(p, "mouseup", function() {
          C(
            /*progressDragEnd*/
            e[15]
          ) && e[15].apply(this, arguments);
        }),
        D(p, "mouseleave", function() {
          C(
            /*progressDragEnd*/
            e[15]
          ) && e[15].apply(this, arguments);
        }),
        D(p, "touchstart", function() {
          C(
            /*progressDragStart*/
            e[13]
          ) && e[13].apply(this, arguments);
        }),
        D(p, "touchmove", function() {
          C(
            /*progressDragMove*/
            e[14]
          ) && e[14].apply(this, arguments);
        }),
        D(p, "touchend", function() {
          C(
            /*progressDragEnd*/
            e[15]
          ) && e[15].apply(this, arguments);
        }),
        D(
          te,
          "click",
          /*click_handler_1*/
          e[54],
          !0
        ),
        D(R, "mousedown", function() {
          C(
            /*volumeDragStart*/
            e[10]
          ) && e[10].apply(this, arguments);
        }),
        D(R, "mousemove", function() {
          C(
            /*volumeDragMove*/
            e[11]
          ) && e[11].apply(this, arguments);
        }),
        D(R, "mouseup", function() {
          C(
            /*volumeDragEnd*/
            e[12]
          ) && e[12].apply(this, arguments);
        }),
        D(R, "mouseleave", function() {
          C(
            /*volumeDragEnd*/
            e[12]
          ) && e[12].apply(this, arguments);
        }),
        D(R, "touchstart", function() {
          C(
            /*volumeDragStart*/
            e[10]
          ) && e[10].apply(this, arguments);
        }),
        D(R, "touchmove", function() {
          C(
            /*volumeDragMove*/
            e[11]
          ) && e[11].apply(this, arguments);
        }),
        D(R, "touchend", function() {
          C(
            /*volumeDragEnd*/
            e[12]
          ) && e[12].apply(this, arguments);
        }),
        D(
          ne,
          "click",
          /*click_handler_2*/
          e[56]
        ),
        D(
          V,
          "click",
          /*click_handler_3*/
          e[57]
        )
      ], De = !0);
    },
    p(M, x) {
      if (e = M, ae !== (ae = be(e)) && (le.d(1), le = ae(e), le && (le.c(), le.m(l, null))), x[0] & /*$currentSong*/
      64 && J(l, "background-image", "url( " + /*$currentSong*/
      e[6].cover + " )"), x[0] & /*$currentSong*/
      64 && h !== (h = /*$currentSong*/
      e[6].name + "") && ze(r, h), x[0] & /*$currentSong*/
      64 && y !== (y = /*$currentSong*/
      e[6].artist + "") && ze(b, y), /*$currentSong*/
      e[6].lrc ? H ? H.p(e, x) : (H = ot(e), H.c(), H.m(u, q)) : H && (H.d(1), H = null), x[0] & /*$rdBufTime*/
      524288 && J(
        E,
        "width",
        /*$rdBufTime*/
        e[19].bufferPercentage
      ), x[0] & /*$loading*/
      2097152 && J(
        L,
        "display",
        /*$loading*/
        e[21] ? "inline" : "none"
      ), x[0] & /*$rdTime*/
      1048576 && J(
        K,
        "width",
        /*$rdTime*/
        e[20].playPercentage
      ), x[0] & /*$rdTime*/
      1048576 && pe !== (pe = /*$rdTime*/
      e[20].ptime + "") && ze(ge, pe), x[0] & /*$rdTime*/
      1048576 && ue !== (ue = /*$rdTime*/
      e[20].duration + "") && ze(Ee, ue), we === (we = Oe(e)) && Q ? Q.p(e, x) : (Q.d(1), Q = we(e), Q && (Q.c(), Q.m(te, null))), x[0] & /*player, $volumeState*/
      4194306 && J(
        oe,
        "height",
        /*player*/
        e[1].muted ? "0px" : (
          /*$volumeState*/
          e[22].volumePercentage
        )
      ), P === (P = Re(e)) && N ? N.p(e, x) : (N.d(1), N = P(e), N && (N.c(), N.m(ne, null))), de === (de = Fe(e)) && U ? U.p(e, x) : (U && U.d(1), U = de && de(e), U && (U.c(), U.m(V, null))), /*$audioList*/
      e[4].length > 1 ? X ? X.p(e, x) : (X = ct(e), X.c(), X.m(z, null)) : X && (X.d(1), X = null), x[0] & /*$playList, player, $audioList*/
      131090) {
        he = /*$audioList*/
        e[4];
        let I;
        for (I = 0; I < he.length; I += 1) {
          const We = it(e, he, I);
          F[I] ? F[I].p(We, x) : (F[I] = ft(We), F[I].c(), F[I].m(Y, null));
        }
        for (; I < F.length; I += 1)
          F[I].d(1);
        F.length = he.length;
      }
      x[0] & /*$controlState, playerListHeight*/
      327680 && J(
        $,
        "height",
        /*$controlState*/
        e[18].showList ? `${/*playerListHeight*/
        e[16]}px` : "0px"
      ), x[0] & /*$lrc*/
      32 && ce(
        t,
        "aplayer-withlrc",
        /*$lrc*/
        e[5].length > 0
      ), x[0] & /*$audioList*/
      16 && ce(
        t,
        "aplayer-withlist",
        /*$audioList*/
        e[4].length > 1
      ), x[0] & /*mini*/
      1 && ce(
        t,
        "aplayer-narrow",
        /*mini*/
        e[0]
      );
    },
    i: A,
    o: A,
    d(M) {
      M && j(t), le.d(), H && H.d(), e[53](null), Q.d(), e[55](null), N.d(), U && U.d(), X && X.d(), yt(F, M), e[60](null), e[61](null), De = !1, Ne(Xe);
    }
  };
}
function cn(e, t, n) {
  let l, s, u, a, i, h, r, f, _, y, b, k, q, m, p, w, E, G;
  const K = Je(), T = xt(), L = (o, ie) => {
    T(o, ie), K.dispatchEvent && K.dispatchEvent(new CustomEvent(o, { detail: ie }));
  }, { player: d, playList: z, audioList: re, currentSong: me, rdTime: pe, currentTime: ge, duration: ve, rdBufTime: _e, wtBufTime: ue, loading: Ee, lrc: Ce, controlState: O, volumeState: je } = Ot(L);
  ee(e, z, (o) => n(17, r = o)), ee(e, re, (o) => n(4, _ = o)), ee(e, me, (o) => n(6, m = o)), ee(e, pe, (o) => n(20, w = o)), ee(e, ge, (o) => n(66, q = o)), ee(e, ve, (o) => n(64, y = o)), ee(e, _e, (o) => n(19, p = o)), ee(e, ue, (o) => n(65, b = o)), ee(e, Ee, (o) => n(21, E = o)), ee(e, Ce, (o) => n(5, k = o)), ee(e, O, (o) => n(18, f = o)), ee(e, je, (o) => n(22, G = o));
  let { audio: Z } = t, { order: te = f.order } = t, { loop: Te = f.loop } = t, { volume: R = f.volume } = t, { mini: fe = !1 } = t, { mutex: oe = !0 } = t, { autoplay: Le = !1 } = t, { theme: ne = "#fadfa3" } = t, { list_max_height: ye = 1 / 0 } = t, V, Se = !1, { base_font_size: qe = "12" } = t;
  const $ = () => {
    oe && vt.forEach((o) => o.pause()), d.play().catch((o) => {
      console.error(o);
    });
  };
  let Y = -1;
  d.addEventListener("timeupdate", () => {
    if (S(ge, q = d.currentTime, q), h.includes("lrc")) {
      for (; Y > 0 && d.currentTime < k[Y][0]; )
        n(7, Y--, Y);
      for (; Y + 1 < k.length && d.currentTime >= k[Y + 1][0]; )
        n(7, Y++, Y);
    }
  }), d.addEventListener("volumechange", () => {
    S(O, f.volume = d.volume, f);
  }), d.addEventListener("loadedmetadata", () => {
    S(ve, y = d.duration, y);
  }), d.addEventListener("error", () => {
    console.warn("An audio error has occurred, player will skip forward in 2 seconds."), _.length > 1 && setTimeout(
      () => {
        S(z, r.playingIndex = (r.playingIndex + 1) % _.length, r), d.paused && $();
      },
      2e3
    );
  });
  const De = () => {
    const o = d.buffered.length ? d.buffered.end(d.buffered.length - 1) : 0;
    S(ue, b = o, b);
  };
  d.addEventListener("progress", De), d.addEventListener("canplay", De), d.addEventListener("durationchange", () => {
    S(ve, y = d.duration, y);
  });
  const Xe = () => {
    const o = _, ie = (r.playingIndex + 1) % o.length;
    if (f.loop === "none") {
      if (f.order === "list")
        r.playingIndex < o.length - 1 ? (S(z, r.playingIndex = ie, r), n(1, d.currentTime = 0, d)) : (S(z, r.playingIndex = (r.playingIndex + 1) % o.length, r), n(46, V = !0), d.pause());
      else if (f.order === "random") {
        const Ze = Math.floor(o.length * Math.random());
        Ze === r.playingIndex ? S(z, r.playingIndex = ie, r) : S(z, r.playingIndex = Ze, r), n(1, d.currentTime = 0, d);
      }
    } else
      f.loop === "one" ? n(1, d.currentTime = 0, d) : f.loop === "all" && S(z, r.playingIndex = ie, r);
  };
  d.addEventListener("ended", () => {
    d.paused || Xe();
  });
  let be, ae, le, H, Oe, we, Q, Re, P, N;
  zt(() => {
    location.hostname === "localhost" && window && (window.theAudio = d);
    const o = Yt(d, be);
    n(10, le = o.volumeDragStart), n(11, H = o.volumeDragMove), n(12, Oe = o.volumeDragEnd);
    const ie = Ut(d, ae);
    n(13, we = ie.progressDragStart), n(14, Q = ie.progressDragMove), n(15, Re = ie.progressDragEnd), P == null || P.addEventListener("transitionend", () => {
      n(16, u = Math.min((P == null ? void 0 : P.scrollHeight) ?? 0, ye));
    });
  }), Mt(() => {
    L("destroy");
  });
  const Fe = () => {
    d.paused ? $() : d.pause();
  };
  function de(o) {
    Pe[o ? "unshift" : "push"](() => {
      ae = o, n(9, ae);
    });
  }
  const U = () => {
    n(1, d.muted = !d.muted, d);
  };
  function X(o) {
    Pe[o ? "unshift" : "push"](() => {
      be = o, n(8, be);
    });
  }
  const he = () => {
    S(O, f.order = f.order === "list" ? "random" : "list", f);
  }, F = () => {
    f.loop === "all" ? S(O, f.loop = "one", f) : f.loop === "one" ? S(O, f.loop = "none", f) : f.loop === "none" && S(O, f.loop = "all", f);
  }, M = () => {
    S(O, f.showList = !f.showList, f), f.showList ? L("listshow") : L("listhide");
  }, x = (o) => {
    S(z, r.playingIndex = o, r), n(1, d.currentTime = 0, d);
  };
  function I(o) {
    Pe[o ? "unshift" : "push"](() => {
      P = o, n(2, P);
    });
  }
  function We(o) {
    Pe[o ? "unshift" : "push"](() => {
      N = o, n(3, N);
    });
  }
  return e.$$set = (o) => {
    n(71, t = $e($e({}, t), tt(o))), "audio" in o && n(37, Z = o.audio), "order" in o && n(38, te = o.order), "loop" in o && n(39, Te = o.loop), "volume" in o && n(40, R = o.volume), "mini" in o && n(0, fe = o.mini), "mutex" in o && n(41, oe = o.mutex), "autoplay" in o && n(42, Le = o.autoplay), "theme" in o && n(43, ne = o.theme), "list_max_height" in o && n(44, ye = o.list_max_height), "base_font_size" in o && n(45, qe = o.base_font_size);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*audio, audioPropInited, autoplay*/
    67648 && (Se ? n(46, V = !0) : n(46, V = !Le), n(47, Se = !0)), e.$$.dirty[1] & /*audio*/
    64 && n(51, l = typeof Z == "string" ? JSON.parse(Z) : Z), e.$$.dirty[1] & /*parsedAudio*/
    1048576 && S(z, r.audio = Array.isArray(l) ? l : [l], r), n(50, s = !jt(t, "list_folded") && _.length > 1), e.$$.dirty[1] & /*initShowList*/
    524288 && S(O, f.showList = s, f), e.$$.dirty[1] & /*loop*/
    256 && S(O, f.loop = Te, f), e.$$.dirty[1] & /*order*/
    128 && S(O, f.order = te, f), e.$$.dirty[1] & /*volume*/
    512 && S(O, f.volume = R, f), e.$$.dirty[0] & /*playListElement*/
    4 | e.$$.dirty[1] & /*list_max_height*/
    8192 && n(16, u = Math.min((P == null ? void 0 : P.scrollHeight) ?? 0, ye)), e.$$.dirty[1] & /*volume*/
    512 && n(1, d.volume = R, d), e.$$.dirty[0] & /*$currentSong*/
    64 && n(1, d.src = m.url, d), e.$$.dirty[0] & /*$currentSong*/
    64 | e.$$.dirty[1] & /*theme*/
    4096 && n(49, a = m.theme ?? ne), e.$$.dirty[1] & /*base_font_size*/
    16384 && n(48, i = String(qe).match(/^\d+/)[0] + "px"), e.$$.dirty[0] & /*rootEl*/
    8 | e.$$.dirty[1] & /*themeColor, baseFontSize*/
    393216 && N && (N.style.setProperty("--theme-color", a), N.style.setProperty("--base-font-size", i)), e.$$.dirty[0] & /*$lrc*/
    32 && (h = k && k.length > 0 ? "withlrc" : ""), e.$$.dirty[0] & /*player*/
    2 | e.$$.dirty[1] & /*playLock*/
    32768 && (d.src, n(7, Y = -1), V || $(), n(46, V = !1));
  }, t = tt(t), [
    fe,
    d,
    P,
    N,
    _,
    k,
    m,
    Y,
    be,
    ae,
    le,
    H,
    Oe,
    we,
    Q,
    Re,
    u,
    r,
    f,
    p,
    w,
    E,
    G,
    L,
    z,
    re,
    me,
    pe,
    ge,
    ve,
    _e,
    ue,
    Ee,
    Ce,
    O,
    je,
    $,
    Z,
    te,
    Te,
    R,
    oe,
    Le,
    ne,
    ye,
    qe,
    V,
    Se,
    i,
    a,
    s,
    l,
    Fe,
    de,
    U,
    X,
    he,
    F,
    M,
    x,
    I,
    We
  ];
}
class un extends Pt {
  constructor(t) {
    super(), Ht(
      this,
      t,
      cn,
      an,
      ht,
      {
        audio: 37,
        order: 38,
        loop: 39,
        volume: 40,
        mini: 0,
        mutex: 41,
        autoplay: 42,
        theme: 43,
        list_max_height: 44,
        base_font_size: 45
      },
      null,
      [-1, -1, -1]
    );
  }
}
export {
  un as default
};
