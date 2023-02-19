function D() {
}
function tt(e, t) {
  for (const a in t)
    e[a] = t[a];
  return e;
}
function $e(e) {
  return e();
}
function at() {
  return /* @__PURE__ */ Object.create(null);
}
function ze(e) {
  e.forEach($e);
}
function H(e) {
  return typeof e == "function";
}
function dt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function bt(e) {
  return Object.keys(e).length === 0;
}
function yt(e, ...t) {
  if (e == null)
    return D;
  const a = e.subscribe(...t);
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
function te(e, t, a) {
  e.$$.on_destroy.push(yt(t, a));
}
function lt(e) {
  const t = {};
  for (const a in e)
    a[0] !== "$" && (t[a] = e[a]);
  return t;
}
function S(e, t, a) {
  return e.set(a), t;
}
function c(e, t) {
  e.appendChild(t);
}
function j(e, t, a) {
  e.insertBefore(t, a || null);
}
function R(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function _t(e, t) {
  for (let a = 0; a < e.length; a += 1)
    e[a] && e[a].d(t);
}
function g(e) {
  return document.createElement(e);
}
function wt(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function ne(e) {
  return document.createTextNode(e);
}
function B() {
  return ne(" ");
}
function Ee() {
  return ne("");
}
function A(e, t, a, l) {
  return e.addEventListener(t, a, l), () => e.removeEventListener(t, a, l);
}
function m(e, t, a) {
  a == null ? e.removeAttribute(t) : e.getAttribute(t) !== a && e.setAttribute(t, a);
}
function kt(e) {
  return Array.from(e.childNodes);
}
function Me(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function J(e, t, a, l) {
  a === null ? e.style.removeProperty(t) : e.style.setProperty(t, a, l ? "important" : "");
}
function pe(e, t, a) {
  e.classList[a ? "add" : "remove"](t);
}
function xt(e, t, { bubbles: a = !1, cancelable: l = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, a, l, t), i;
}
class Te {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, a, l = null) {
    this.e || (this.is_svg ? this.e = wt(a.nodeName) : this.e = g(a.nodeName), this.t = a, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.childNodes);
  }
  i(t) {
    for (let a = 0; a < this.n.length; a += 1)
      j(this.t, this.n[a], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(R);
  }
}
function Mt(e) {
  const t = {};
  for (const a of e)
    t[a.name] = a.value;
  return t;
}
let Xe;
function Ue(e) {
  Xe = e;
}
function Ge() {
  if (!Xe)
    throw new Error("Function called outside component initialization");
  return Xe;
}
function zt(e) {
  Ge().$$.on_mount.push(e);
}
function Et(e) {
  Ge().$$.on_destroy.push(e);
}
function Tt() {
  const e = Ge();
  return (t, a, { cancelable: l = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const p = xt(t, a, { cancelable: l });
      return i.slice().forEach((s) => {
        s.call(e, p);
      }), !p.defaultPrevented;
    }
    return !0;
  };
}
const Pe = [], Ne = [], Je = [], rt = [], Lt = Promise.resolve();
let Qe = !1;
function St() {
  Qe || (Qe = !0, Lt.then(Z));
}
function Ze(e) {
  Je.push(e);
}
const Ke = /* @__PURE__ */ new Set();
let He = 0;
function Z() {
  if (He !== 0)
    return;
  const e = Xe;
  do {
    try {
      for (; He < Pe.length; ) {
        const t = Pe[He];
        He++, Ue(t), qt(t.$$);
      }
    } catch (t) {
      throw Pe.length = 0, He = 0, t;
    }
    for (Ue(null), Pe.length = 0, He = 0; Ne.length; )
      Ne.pop()();
    for (let t = 0; t < Je.length; t += 1) {
      const a = Je[t];
      Ke.has(a) || (Ke.add(a), a());
    }
    Je.length = 0;
  } while (Pe.length);
  for (; rt.length; )
    rt.pop()();
  Qe = !1, Ke.clear(), Ue(e);
}
function qt(e) {
  if (e.fragment !== null) {
    e.update(), ze(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ze);
  }
}
const At = /* @__PURE__ */ new Set();
function gt(e, t) {
  e && e.i && (At.delete(e), e.i(t));
}
function Dt(e, t) {
  e.d(1), t.delete(e.key);
}
function It(e, t, a, l, i, p, s, r, f, n, u, v) {
  let b = e.length, _ = p.length, k = b;
  const q = {};
  for (; k--; )
    q[e[k].key] = k;
  const d = [], y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (k = _; k--; ) {
    const T = v(i, p, k), L = a(T);
    let h = s.get(L);
    h ? l && h.p(T, t) : (h = n(L, T), h.c()), y.set(L, d[k] = h), L in q && w.set(L, Math.abs(k - q[L]));
  }
  const E = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
  function K(T) {
    gt(T, 1), T.m(r, u), s.set(T.key, T), u = T.first, _--;
  }
  for (; b && _; ) {
    const T = d[_ - 1], L = e[b - 1], h = T.key, x = L.key;
    T === L ? (u = T.first, b--, _--) : y.has(x) ? !s.has(h) || E.has(h) ? K(T) : G.has(x) ? b-- : w.get(h) > w.get(x) ? (G.add(h), K(T)) : (E.add(x), b--) : (f(L, s), b--);
  }
  for (; b--; ) {
    const T = e[b];
    y.has(T.key) || f(T, s);
  }
  for (; _; )
    K(d[_ - 1]);
  return d;
}
function Ht(e, t, a, l) {
  const { fragment: i, after_update: p } = e.$$;
  i && i.m(t, a), l || Ze(() => {
    const s = e.$$.on_mount.map($e).filter(H);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : ze(s), e.$$.on_mount = [];
  }), p.forEach(Ze);
}
function Bt(e, t) {
  const a = e.$$;
  a.fragment !== null && (ze(a.on_destroy), a.fragment && a.fragment.d(t), a.on_destroy = a.fragment = null, a.ctx = []);
}
function Pt(e, t) {
  e.$$.dirty[0] === -1 && (Pe.push(e), St(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ct(e, t, a, l, i, p, s, r = [-1]) {
  const f = Xe;
  Ue(e);
  const n = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: p,
    update: D,
    not_equal: i,
    bound: at(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: at(),
    dirty: r,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(n.root);
  let u = !1;
  if (n.ctx = a ? a(e, t.props || {}, (v, b, ..._) => {
    const k = _.length ? _[0] : b;
    return n.ctx && i(n.ctx[v], n.ctx[v] = k) && (!n.skip_bound && n.bound[v] && n.bound[v](k), u && Pt(e, v)), b;
  }) : [], n.update(), u = !0, ze(n.before_update), n.fragment = l ? l(n.ctx) : !1, t.target) {
    if (t.hydrate) {
      const v = kt(t.target);
      n.fragment && n.fragment.l(v), v.forEach(R);
    } else
      n.fragment && n.fragment.c();
    t.intro && gt(e.$$.fragment), Ht(e, t.target, t.anchor, t.customElement), Z();
  }
  Ue(f);
}
let mt;
typeof HTMLElement == "function" && (mt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map($e).filter(H);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, a) {
    this[e] = a;
  }
  disconnectedCallback() {
    ze(this.$$.on_disconnect);
  }
  $destroy() {
    Bt(this, 1), this.$destroy = D;
  }
  $on(e, t) {
    if (!H(t))
      return D;
    const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return a.push(t), () => {
      const l = a.indexOf(t);
      l !== -1 && a.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !bt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
const Be = [];
function Nt(e, t) {
  return {
    subscribe: Ce(e, t).subscribe
  };
}
function Ce(e, t = D) {
  let a;
  const l = /* @__PURE__ */ new Set();
  function i(r) {
    if (dt(e, r) && (e = r, a)) {
      const f = !Be.length;
      for (const n of l)
        n[1](), Be.push(n, e);
      if (f) {
        for (let n = 0; n < Be.length; n += 2)
          Be[n][0](Be[n + 1]);
        Be.length = 0;
      }
    }
  }
  function p(r) {
    i(r(e));
  }
  function s(r, f = D) {
    const n = [r, f];
    return l.add(n), l.size === 1 && (a = t(i) || D), r(e), () => {
      l.delete(n), l.size === 0 && (a(), a = null);
    };
  }
  return { set: i, update: p, subscribe: s };
}
function xe(e, t, a) {
  const l = !Array.isArray(e), i = l ? [e] : e, p = t.length < 2;
  return Nt(a, (s) => {
    let r = !1;
    const f = [];
    let n = 0, u = D;
    const v = () => {
      if (n)
        return;
      u();
      const _ = t(l ? f[0] : f, s);
      p ? s(_) : u = H(_) ? _ : D;
    }, b = i.map((_, k) => yt(_, (q) => {
      f[k] = q, n &= ~(1 << k), r && v();
    }, () => {
      n |= 1 << k;
    }));
    return r = !0, v(), function() {
      ze(b), u();
    };
  });
}
const nt = (e) => {
  const t = (p) => p < 10 ? "0" + p : "" + p, a = Math.floor(e / 3600), l = Math.floor((e - a * 3600) / 60), i = Math.floor(e - a * 3600 - l * 60);
  return (a > 0 ? [a, l, i] : [l, i]).map(t).join(":");
}, jt = /mobile/i.test(window.navigator.userAgent);
function it(e) {
  if (e) {
    e = e.replace(/([^\]^\n])\[/g, (i, p) => p + `
[`);
    const t = e.split(`
`);
    let a = [];
    const l = t.length;
    for (let i = 0; i < l; i++) {
      const p = t[i].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), s = t[i].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
      if (p) {
        const r = p.length;
        for (let f = 0; f < r; f++) {
          const n = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(p[f]), u = n[1] * 60, v = parseInt(n[2]), b = n[4] ? parseInt(n[4]) / ((n[4] + "").length === 2 ? 100 : 1e3) : 0, _ = u + v + b;
          a.push([_, s]);
        }
      }
    }
    return a = a.filter((i) => i[1]), a.sort((i, p) => i[0] - p[0]), a;
  } else
    return [];
}
function Rt(e, t) {
  const a = e[t];
  return !(a == null || a === "false");
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
  vt.push(t), Yt(t, e);
  let a = Ce(0), l = Ce(NaN);
  const i = xe(
    [a, l],
    ([d, y]) => {
      let w = d / y;
      return w = Math.max(w, 0), w = Math.min(w, 1), w *= 100, {
        ptime: nt(d),
        duration: nt(y),
        playPercentage: `${w}%`
      };
    }
  );
  let p = Ce(0);
  const s = xe([p, l], ([d, y]) => {
    let w = d / y;
    return w = Math.max(w, 0), w = Math.min(w, 1), w *= 100, { bufferPercentage: `${w}%`, bufTime: d };
  }), r = Ce({
    playingIndex: 0,
    audio: []
  }), f = xe(r, (d) => d.audio), n = Ce({
    volume: 0.7,
    loop: "all",
    order: "list",
    showList: !0
  }), u = xe(n, (d) => ({
    volumePercentage: `${d.volume * 100}%`,
    muted: d.volume === 0
  })), v = xe(r, (d) => d.audio[d.playingIndex]), b = xe(
    [s, a],
    ([{ bufTime: d }, y]) => t.paused ? !1 : t.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA || d - y < 2 && t.readyState === HTMLMediaElement.HAVE_FUTURE_DATA
  ), _ = xe(
    v,
    // @ts-ignore
    (d, y) => {
      if (!d || !d.lrc) {
        y([]);
        return;
      }
      const w = d.lrc;
      w.startsWith("http") ? fetch(w).then((E) => {
        if (!E.ok)
          throw new Error(
            `${E.statusText} canot loading lrc from ${w}`
          );
        return E.text();
      }).then((E) => {
        y(it(E));
      }).catch((E) => {
        throw y([]), console.error(E), E;
      }) : y(it(w));
    },
    []
  );
  let k = !1;
  v.subscribe((d) => {
    k && e("listswitch", d), k = !0;
  });
  let q = !1;
  return f.subscribe((d) => {
    q && e("listchange", d), q = !0;
  }), _.subscribe((d) => {
    d.length > 0 ? e("lrcshow") : e("lrchide");
  }), {
    player: t,
    playList: r,
    audioList: f,
    currentSong: v,
    rdTime: i,
    currentTime: a,
    duration: l,
    rdBufTime: s,
    wtBufTime: p,
    loading: b,
    lrc: _,
    controlState: n,
    volumeState: u
  };
}
function Yt(e, t) {
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
    e.addEventListener(l, (i) => {
      t(l, i);
    });
  });
}
function Ut(e, t) {
  let a = !1;
  return { volumeDragStart: () => {
    a = !0;
  }, volumeDragMove: (s) => {
    if (a) {
      let r = 1 - ((s.clientY || s.changedTouches[0].clientY) - t.getBoundingClientRect().top) / t.clientHeight;
      r = Math.max(r, 0), r = Math.min(r, 1), e.volume = r;
    }
  }, volumeDragEnd: (s) => {
    if (a) {
      let r = 1 - ((s.clientY || s.changedTouches[0].clientY) - t.getBoundingClientRect().top) / t.clientHeight;
      r = Math.max(r, 0), r = Math.min(r, 1), e.volume = r, a = !1;
    }
  } };
}
function Xt(e, t) {
  let a = !1;
  return {
    progressDragStart: () => {
      a = !0;
    },
    progressDragMove: (s) => {
      if (a) {
        let r = ((s.clientX || s.changedTouches[0].clientX) - t.getBoundingClientRect().left) / t.clientWidth;
        r = Math.max(r, 0), r = Math.min(r, 1), e.currentTime = e.duration * r;
      }
    },
    progressDragEnd: (s) => {
      if (a) {
        a = !1;
        let r = ((s.clientX || s.changedTouches[0].clientX) - t.getBoundingClientRect().left) / t.clientWidth;
        r = Math.max(r, 0), r = Math.min(r, 1), e.currentTime = e.duration * r;
      }
    }
  };
}
const Ft = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 28 32"
                  ><path
                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"
                  /></svg
        >`, Vt = `<svg
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
              >`, Jt = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 32 32"
                    ><path
                      d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"
                    /></svg
                  >`, Gt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 32 32"
                ><path
                  d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"
                /></svg
              >`, Kt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 33 32"
                ><path
                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"
                /></svg
              >`, Qt = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 29 32"
                ><path
                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"
                /></svg
              >`, Zt = `<svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 29 32"
                ><path
                  d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"
                /></svg
              >`;
function ot(e, t, a) {
  const l = e.slice();
  return l[72] = t[a], l[74] = a, l;
}
function st(e, t, a) {
  const l = e.slice();
  return l[75] = t[a], l[77] = a, l;
}
function $t(e) {
  let t;
  return {
    c() {
      t = g("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>', m(t, "class", "aplayer-button aplayer-play");
    },
    m(a, l) {
      j(a, t, l);
    },
    d(a) {
      a && R(t);
    }
  };
}
function ea(e) {
  let t;
  return {
    c() {
      t = g("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>', m(t, "class", "aplayer-button aplayer-pause");
    },
    m(a, l) {
      j(a, t, l);
    },
    d(a) {
      a && R(t);
    }
  };
}
function ct(e) {
  let t, a, l = [], i = /* @__PURE__ */ new Map(), p = (
    /*$lrc*/
    e[5]
  );
  const s = (r) => (
    /*line*/
    r[75][0]
  );
  for (let r = 0; r < p.length; r += 1) {
    let f = st(e, p, r), n = s(f);
    i.set(n, l[r] = pt(n, f));
  }
  return {
    c() {
      t = g("div"), a = g("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      m(a, "class", "aplayer-lrc-contents"), J(a, "transform", "translateY(calc(" + Math.max(
        /*lrcActiveIndex*/
        e[7],
        0
      ) + " * -1 * calc(var(--base-font-size) + 4px)))"), m(t, "class", "aplayer-lrc");
    },
    m(r, f) {
      j(r, t, f), c(t, a);
      for (let n = 0; n < l.length; n += 1)
        l[n].m(a, null);
    },
    p(r, f) {
      f[0] & /*$lrc, lrcActiveIndex*/
      160 && (p = /*$lrc*/
      r[5], l = It(l, f, s, 1, r, p, i, a, Dt, pt, null, st)), f[0] & /*lrcActiveIndex*/
      128 && J(a, "transform", "translateY(calc(" + Math.max(
        /*lrcActiveIndex*/
        r[7],
        0
      ) + " * -1 * calc(var(--base-font-size) + 4px)))");
    },
    d(r) {
      r && R(t);
      for (let f = 0; f < l.length; f += 1)
        l[f].d();
    }
  };
}
function pt(e, t) {
  let a, l = (
    /*line*/
    t[75][1] + ""
  ), i, p;
  return {
    key: e,
    first: null,
    c() {
      a = g("p"), i = ne(l), p = B(), pe(
        a,
        "aplayer-lrc-current",
        /*index*/
        t[77] === /*lrcActiveIndex*/
        t[7]
      ), this.first = a;
    },
    m(s, r) {
      j(s, a, r), c(a, i), c(a, p);
    },
    p(s, r) {
      t = s, r[0] & /*$lrc*/
      32 && l !== (l = /*line*/
      t[75][1] + "") && Me(i, l), r[0] & /*$lrc, lrcActiveIndex*/
      160 && pe(
        a,
        "aplayer-lrc-current",
        /*index*/
        t[77] === /*lrcActiveIndex*/
        t[7]
      );
    },
    d(s) {
      s && R(a);
    }
  };
}
function ta(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Ft, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function aa(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Vt, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function la(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Gt, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function ra(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Wt, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function na(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Qt, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function ia(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Kt, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function oa(e) {
  let t, a;
  return {
    c() {
      t = new Te(!1), a = Ee(), t.a = a;
    },
    m(l, i) {
      t.m(Zt, l, i), j(l, a, i);
    },
    p: D,
    d(l) {
      l && R(a), l && t.d();
    }
  };
}
function ut(e) {
  let t, a, l;
  return {
    c() {
      t = g("button"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>', m(t, "type", "button"), m(t, "class", "aplayer-icon aplayer-icon-menu");
    },
    m(i, p) {
      j(i, t, p), a || (l = A(
        t,
        "click",
        /*click_handler_4*/
        e[58]
      ), a = !0);
    },
    p: D,
    d(i) {
      i && R(t), a = !1, l();
    }
  };
}
function ht(e) {
  let t;
  return {
    c() {
      t = g("span"), m(t, "class", "aplayer-list-cur");
    },
    m(a, l) {
      j(a, t, l);
    },
    d(a) {
      a && R(t);
    }
  };
}
function ft(e) {
  let t, a, l, i = (
    /*idx*/
    e[74] + 1 + ""
  ), p, s, r, f = (
    /*song*/
    e[72].name + ""
  ), n, u, v, b = (
    /*song*/
    e[72].artist + ""
  ), _, k, q, d, y = (
    /*idx*/
    e[74] === /*$playList*/
    e[17].playingIndex && ht()
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
      t = g("li"), y && y.c(), a = B(), l = g("span"), p = ne(i), s = B(), r = g("span"), n = ne(f), u = B(), v = g("span"), _ = ne(b), k = B(), m(l, "class", "aplayer-list-index"), m(r, "class", "aplayer-list-title"), m(v, "class", "aplayer-list-artist");
    },
    m(E, G) {
      j(E, t, G), y && y.m(t, null), c(t, a), c(t, l), c(l, p), c(t, s), c(t, r), c(r, n), c(t, u), c(t, v), c(v, _), c(t, k), q || (d = A(t, "click", w), q = !0);
    },
    p(E, G) {
      e = E, /*idx*/
      e[74] === /*$playList*/
      e[17].playingIndex ? y || (y = ht(), y.c(), y.m(t, a)) : y && (y.d(1), y = null), G[0] & /*$audioList*/
      16 && f !== (f = /*song*/
      e[72].name + "") && Me(n, f), G[0] & /*$audioList*/
      16 && b !== (b = /*song*/
      e[72].artist + "") && Me(_, b);
    },
    d(E) {
      E && R(t), y && y.d(), q = !1, d();
    }
  };
}
function sa(e) {
  let t, a, l, i, p, s, r, f = (
    /*$currentSong*/
    e[6].name + ""
  ), n, u, v, b = (
    /*$currentSong*/
    e[6].artist + ""
  ), _, k, q, d, y, w, E, G, K, T, L, h, x, oe, ye, ge = (
    /*$rdTime*/
    e[20].ptime + ""
  ), me, ve, be, ue = (
    /*$rdTime*/
    e[20].duration + ""
  ), Le, je, O, Re, $, ae, Se, Y, he, se, qe, le, _e, W, Ae, De, ee, V, Ie, Fe;
  function we(M, z) {
    return (
      /*player*/
      M[1].paused ? $t : ea
    );
  }
  let ce = we(e), re = ce(e), P = (
    /*$currentSong*/
    e[6].lrc && ct(e)
  );
  function Oe(M, z) {
    return (
      /*$volumeState*/
      M[22].muted || /*player*/
      M[1].muted ? aa : ta
    );
  }
  let ke = Oe(e), Q = ke(e);
  function Ye(M, z) {
    return (
      /*$controlState*/
      M[18].order === "random" ? ra : la
    );
  }
  let C = Ye(e), N = C(e);
  function Ve(M, z) {
    if (
      /*$controlState*/
      M[18].loop === "none"
    )
      return oa;
    if (
      /*$controlState*/
      M[18].loop === "one"
    )
      return ia;
    if (
      /*$controlState*/
      M[18].loop === "all"
    )
      return na;
  }
  let fe = Ve(e), U = fe && fe(e), X = (
    /*$audioList*/
    e[4].length > 1 && ut(e)
  ), de = (
    /*$audioList*/
    e[4]
  ), F = [];
  for (let M = 0; M < de.length; M += 1)
    F[M] = ft(ot(e, de, M));
  return {
    c() {
      t = g("div"), a = g("div"), l = g("div"), re.c(), i = B(), p = g("div"), s = g("div"), r = g("span"), n = ne(f), u = B(), v = g("span"), _ = ne(b), k = B(), P && P.c(), q = B(), d = g("div"), y = g("div"), w = g("div"), E = g("div"), G = B(), K = g("div"), T = g("div"), L = g("span"), h = B(), x = g("div"), oe = g("span"), ye = g("span"), me = ne(ge), ve = ne(` /
            `), be = g("span"), Le = ne(ue), je = B(), O = g("span"), Re = B(), $ = g("div"), ae = g("button"), Q.c(), Se = B(), Y = g("div"), he = g("div"), se = g("div"), qe = B(), le = g("button"), N.c(), _e = B(), W = g("button"), U && U.c(), Ae = B(), X && X.c(), De = B(), ee = g("div"), V = g("ol");
      for (let M = 0; M < F.length; M += 1)
        F[M].c();
      this.c = D, m(l, "class", "aplayer-pic"), J(l, "background-image", "url( " + /*$currentSong*/
      e[6].cover + " )"), m(r, "class", "aplayer-title"), m(v, "class", "aplayer-artist"), m(s, "class", "aplayer-music"), m(E, "class", "aplayer-loaded"), J(
        E,
        "width",
        /*$rdBufTime*/
        e[19].bufferPercentage
      ), m(L, "class", "aplayer-loading-icon"), J(
        L,
        "display",
        /*$loading*/
        e[21] ? "inline" : "none"
      ), m(T, "class", "aplayer-thumb"), m(K, "class", "aplayer-played"), J(
        K,
        "width",
        /*$rdTime*/
        e[20].playPercentage
      ), m(w, "class", "aplayer-bar"), m(y, "class", "aplayer-bar-wrap"), m(ye, "class", "aplayer-ptime"), m(be, "class", "aplayer-dtime"), m(oe, "class", "aplayer-time-inner"), O.hidden = !0, m(ae, "type", "button"), m(ae, "class", "aplayer-icon aplayer-icon-volume-down"), m(se, "class", "aplayer-volume"), J(
        se,
        "height",
        /*player*/
        e[1].muted ? "0px" : (
          /*$volumeState*/
          e[22].volumePercentage
        )
      ), m(he, "class", "aplayer-volume-bar"), m(Y, "class", "aplayer-volume-bar-wrap"), m($, "class", "aplayer-volume-wrap"), m(le, "type", "button"), m(le, "class", "aplayer-icon aplayer-icon-order"), m(W, "type", "button"), m(W, "class", "aplayer-icon aplayer-icon-loop"), m(x, "class", "aplayer-time"), m(d, "class", "aplayer-controller"), m(p, "class", "aplayer-info"), m(ee, "class", "aplayer-list"), J(
        ee,
        "height",
        /*$controlState*/
        e[18].showList ? `${/*playerListHeight*/
        e[16]}px` : "0px"
      ), m(a, "class", "aplayer-body "), m(t, "class", "aplayer"), pe(
        t,
        "aplayer-withlrc",
        /*$lrc*/
        e[5].length > 0
      ), pe(
        t,
        "aplayer-withlist",
        /*$audioList*/
        e[4].length > 1
      ), pe(
        t,
        "aplayer-narrow",
        /*mini*/
        e[0]
      ), pe(t, "aplayer-mobile", jt);
    },
    m(M, z) {
      j(M, t, z), c(t, a), c(a, l), re.m(l, null), c(a, i), c(a, p), c(p, s), c(s, r), c(r, n), c(s, u), c(s, v), c(v, _), c(p, k), P && P.m(p, null), c(p, q), c(p, d), c(d, y), c(y, w), c(w, E), c(w, G), c(w, K), c(K, T), c(T, L), L.innerHTML = Jt, e[53](y), c(d, h), c(d, x), c(x, oe), c(oe, ye), c(ye, me), c(oe, ve), c(oe, be), c(be, Le), c(x, je), c(x, O), c(x, Re), c(x, $), c($, ae), Q.m(ae, null), c($, Se), c($, Y), c(Y, he), c(he, se), e[55](he), c(x, qe), c(x, le), N.m(le, null), c(x, _e), c(x, W), U && U.m(W, null), c(x, Ae), X && X.m(x, null), c(a, De), c(a, ee), c(ee, V);
      for (let I = 0; I < F.length; I += 1)
        F[I].m(V, null);
      e[60](ee), e[61](t), Ie || (Fe = [
        A(
          l,
          "click",
          /*click_handler*/
          e[52]
        ),
        A(y, "mousedown", function() {
          H(
            /*progressDragStart*/
            e[13]
          ) && e[13].apply(this, arguments);
        }),
        A(y, "mousemove", function() {
          H(
            /*progressDragMove*/
            e[14]
          ) && e[14].apply(this, arguments);
        }),
        A(y, "mouseup", function() {
          H(
            /*progressDragEnd*/
            e[15]
          ) && e[15].apply(this, arguments);
        }),
        A(y, "mouseleave", function() {
          H(
            /*progressDragEnd*/
            e[15]
          ) && e[15].apply(this, arguments);
        }),
        A(y, "touchstart", function() {
          H(
            /*progressDragStart*/
            e[13]
          ) && e[13].apply(this, arguments);
        }),
        A(y, "touchmove", function() {
          H(
            /*progressDragMove*/
            e[14]
          ) && e[14].apply(this, arguments);
        }),
        A(y, "touchend", function() {
          H(
            /*progressDragEnd*/
            e[15]
          ) && e[15].apply(this, arguments);
        }),
        A(
          ae,
          "click",
          /*click_handler_1*/
          e[54],
          !0
        ),
        A(Y, "mousedown", function() {
          H(
            /*volumeDragStart*/
            e[10]
          ) && e[10].apply(this, arguments);
        }),
        A(Y, "mousemove", function() {
          H(
            /*volumeDragMove*/
            e[11]
          ) && e[11].apply(this, arguments);
        }),
        A(Y, "mouseup", function() {
          H(
            /*volumeDragEnd*/
            e[12]
          ) && e[12].apply(this, arguments);
        }),
        A(Y, "mouseleave", function() {
          H(
            /*volumeDragEnd*/
            e[12]
          ) && e[12].apply(this, arguments);
        }),
        A(Y, "touchstart", function() {
          H(
            /*volumeDragStart*/
            e[10]
          ) && e[10].apply(this, arguments);
        }),
        A(Y, "touchmove", function() {
          H(
            /*volumeDragMove*/
            e[11]
          ) && e[11].apply(this, arguments);
        }),
        A(Y, "touchend", function() {
          H(
            /*volumeDragEnd*/
            e[12]
          ) && e[12].apply(this, arguments);
        }),
        A(
          le,
          "click",
          /*click_handler_2*/
          e[56]
        ),
        A(
          W,
          "click",
          /*click_handler_3*/
          e[57]
        )
      ], Ie = !0);
    },
    p(M, z) {
      if (e = M, ce !== (ce = we(e)) && (re.d(1), re = ce(e), re && (re.c(), re.m(l, null))), z[0] & /*$currentSong*/
      64 && J(l, "background-image", "url( " + /*$currentSong*/
      e[6].cover + " )"), z[0] & /*$currentSong*/
      64 && f !== (f = /*$currentSong*/
      e[6].name + "") && Me(n, f), z[0] & /*$currentSong*/
      64 && b !== (b = /*$currentSong*/
      e[6].artist + "") && Me(_, b), /*$currentSong*/
      e[6].lrc ? P ? P.p(e, z) : (P = ct(e), P.c(), P.m(p, q)) : P && (P.d(1), P = null), z[0] & /*$rdBufTime*/
      524288 && J(
        E,
        "width",
        /*$rdBufTime*/
        e[19].bufferPercentage
      ), z[0] & /*$loading*/
      2097152 && J(
        L,
        "display",
        /*$loading*/
        e[21] ? "inline" : "none"
      ), z[0] & /*$rdTime*/
      1048576 && J(
        K,
        "width",
        /*$rdTime*/
        e[20].playPercentage
      ), z[0] & /*$rdTime*/
      1048576 && ge !== (ge = /*$rdTime*/
      e[20].ptime + "") && Me(me, ge), z[0] & /*$rdTime*/
      1048576 && ue !== (ue = /*$rdTime*/
      e[20].duration + "") && Me(Le, ue), ke === (ke = Oe(e)) && Q ? Q.p(e, z) : (Q.d(1), Q = ke(e), Q && (Q.c(), Q.m(ae, null))), z[0] & /*player, $volumeState*/
      4194306 && J(
        se,
        "height",
        /*player*/
        e[1].muted ? "0px" : (
          /*$volumeState*/
          e[22].volumePercentage
        )
      ), C === (C = Ye(e)) && N ? N.p(e, z) : (N.d(1), N = C(e), N && (N.c(), N.m(le, null))), fe === (fe = Ve(e)) && U ? U.p(e, z) : (U && U.d(1), U = fe && fe(e), U && (U.c(), U.m(W, null))), /*$audioList*/
      e[4].length > 1 ? X ? X.p(e, z) : (X = ut(e), X.c(), X.m(x, null)) : X && (X.d(1), X = null), z[0] & /*$playList, player, $audioList*/
      131090) {
        de = /*$audioList*/
        e[4];
        let I;
        for (I = 0; I < de.length; I += 1) {
          const We = ot(e, de, I);
          F[I] ? F[I].p(We, z) : (F[I] = ft(We), F[I].c(), F[I].m(V, null));
        }
        for (; I < F.length; I += 1)
          F[I].d(1);
        F.length = de.length;
      }
      z[0] & /*$controlState, playerListHeight*/
      327680 && J(
        ee,
        "height",
        /*$controlState*/
        e[18].showList ? `${/*playerListHeight*/
        e[16]}px` : "0px"
      ), z[0] & /*$lrc*/
      32 && pe(
        t,
        "aplayer-withlrc",
        /*$lrc*/
        e[5].length > 0
      ), z[0] & /*$audioList*/
      16 && pe(
        t,
        "aplayer-withlist",
        /*$audioList*/
        e[4].length > 1
      ), z[0] & /*mini*/
      1 && pe(
        t,
        "aplayer-narrow",
        /*mini*/
        e[0]
      );
    },
    i: D,
    o: D,
    d(M) {
      M && R(t), re.d(), P && P.d(), e[53](null), Q.d(), e[55](null), N.d(), U && U.d(), X && X.d(), _t(F, M), e[60](null), e[61](null), Ie = !1, ze(Fe);
    }
  };
}
function ca(e, t, a) {
  let l, i, p, s, r, f, n, u, v, b, _, k, q, d, y, w, E, G;
  const K = Ge(), T = Tt(), L = (o, ie) => {
    T(o, ie), K.dispatchEvent && K.dispatchEvent(new CustomEvent(o, { detail: ie }));
  }, { player: h, playList: x, audioList: oe, currentSong: ye, rdTime: ge, currentTime: me, duration: ve, rdBufTime: be, wtBufTime: ue, loading: Le, lrc: je, controlState: O, volumeState: Re } = Ot(L);
  te(e, x, (o) => a(17, n = o)), te(e, oe, (o) => a(4, v = o)), te(e, ye, (o) => a(6, d = o)), te(e, ge, (o) => a(20, w = o)), te(e, me, (o) => a(66, q = o)), te(e, ve, (o) => a(64, b = o)), te(e, be, (o) => a(19, y = o)), te(e, ue, (o) => a(65, _ = o)), te(e, Le, (o) => a(21, E = o)), te(e, je, (o) => a(5, k = o)), te(e, O, (o) => a(18, u = o)), te(e, Re, (o) => a(22, G = o));
  let { audio: $ } = t, { order: ae = u.order } = t, { loop: Se = u.loop } = t, { volume: Y = u.volume } = t, { mini: he = !1 } = t, { mutex: se = !0 } = t, { autoplay: qe = !1 } = t, { theme: le = "#fadfa3" } = t, { list_max_height: _e = 1 / 0 } = t, W, Ae = !1, { base_font_size: De = "12" } = t;
  const ee = () => {
    se && vt.forEach((o) => o.pause()), h.play().catch((o) => {
      console.error(o);
    });
  };
  let V = -1;
  h.addEventListener("timeupdate", () => {
    if (S(me, q = h.currentTime, q), f.includes("lrc")) {
      for (; V > 0 && h.currentTime < k[V][0]; )
        a(7, V--, V);
      for (; V + 1 < k.length && h.currentTime >= k[V + 1][0]; )
        a(7, V++, V);
    }
  }), h.addEventListener("volumechange", () => {
    S(O, u.volume = h.volume, u);
  }), h.addEventListener("loadedmetadata", () => {
    S(ve, b = h.duration, b);
  }), h.addEventListener("error", () => {
    console.warn("An audio error has occurred, player will skip forward in 2 seconds."), v.length > 1 && setTimeout(
      () => {
        S(x, n.playingIndex = (n.playingIndex + 1) % v.length, n), h.paused && ee();
      },
      2e3
    );
  });
  const Ie = () => {
    const o = h.buffered.length ? h.buffered.end(h.buffered.length - 1) : 0;
    S(ue, _ = o, _);
  };
  h.addEventListener("progress", Ie), h.addEventListener("canplay", Ie), h.addEventListener("durationchange", () => {
    S(ve, b = h.duration, b);
  });
  const Fe = () => {
    const o = v, ie = (n.playingIndex + 1) % o.length;
    if (u.loop === "none") {
      if (u.order === "list")
        n.playingIndex < o.length - 1 ? (S(x, n.playingIndex = ie, n), a(1, h.currentTime = 0, h)) : (S(x, n.playingIndex = (n.playingIndex + 1) % o.length, n), a(46, W = !0), h.pause());
      else if (u.order === "random") {
        const et = Math.floor(o.length * Math.random());
        et === n.playingIndex ? S(x, n.playingIndex = ie, n) : S(x, n.playingIndex = et, n), a(1, h.currentTime = 0, h);
      }
    } else
      u.loop === "one" ? a(1, h.currentTime = 0, h) : u.loop === "all" && S(x, n.playingIndex = ie, n);
  };
  h.addEventListener("ended", () => {
    h.paused || Fe();
  });
  let we, ce, re, P, Oe, ke, Q, Ye, C, N;
  zt(() => {
    location.hostname === "localhost" && window && (window.theAudio = h);
    const o = Ut(h, we);
    a(10, re = o.volumeDragStart), a(11, P = o.volumeDragMove), a(12, Oe = o.volumeDragEnd);
    const ie = Xt(h, ce);
    a(13, ke = ie.progressDragStart), a(14, Q = ie.progressDragMove), a(15, Ye = ie.progressDragEnd), C == null || C.addEventListener("transitionend", () => {
      a(16, p = Math.min((C == null ? void 0 : C.scrollHeight) ?? 0, _e));
    });
  }), Et(() => {
    L("destroy");
  });
  const Ve = () => {
    h.paused ? ee() : h.pause();
  };
  function fe(o) {
    Ne[o ? "unshift" : "push"](() => {
      ce = o, a(9, ce);
    });
  }
  const U = () => {
    a(1, h.muted = !h.muted, h);
  };
  function X(o) {
    Ne[o ? "unshift" : "push"](() => {
      we = o, a(8, we);
    });
  }
  const de = () => {
    S(O, u.order = u.order === "list" ? "random" : "list", u);
  }, F = () => {
    u.loop === "all" ? S(O, u.loop = "one", u) : u.loop === "one" ? S(O, u.loop = "none", u) : u.loop === "none" && S(O, u.loop = "all", u);
  }, M = () => {
    S(O, u.showList = !u.showList, u), u.showList ? L("listshow") : L("listhide");
  }, z = (o) => {
    S(x, n.playingIndex = o, n), a(1, h.currentTime = 0, h);
  };
  function I(o) {
    Ne[o ? "unshift" : "push"](() => {
      C = o, a(2, C);
    });
  }
  function We(o) {
    Ne[o ? "unshift" : "push"](() => {
      N = o, a(3, N);
    });
  }
  return e.$$set = (o) => {
    a(71, t = tt(tt({}, t), lt(o))), "audio" in o && a(37, $ = o.audio), "order" in o && a(38, ae = o.order), "loop" in o && a(39, Se = o.loop), "volume" in o && a(40, Y = o.volume), "mini" in o && a(0, he = o.mini), "mutex" in o && a(41, se = o.mutex), "autoplay" in o && a(42, qe = o.autoplay), "theme" in o && a(43, le = o.theme), "list_max_height" in o && a(44, _e = o.list_max_height), "base_font_size" in o && a(45, De = o.base_font_size);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*audio, audioPropInited, autoplay*/
    67648 && (Ae ? a(46, W = !0) : a(46, W = !qe), a(47, Ae = !0)), e.$$.dirty[1] & /*audio*/
    64 && a(51, l = typeof $ == "string" ? JSON.parse($) : $), e.$$.dirty[1] & /*parsedAudio*/
    1048576 && S(x, n.audio = Array.isArray(l) ? l : [l], n), a(50, i = !Rt(t, "list_folded") && v.length > 1), e.$$.dirty[1] & /*initShowList*/
    524288 && S(O, u.showList = i, u), e.$$.dirty[1] & /*loop*/
    256 && S(O, u.loop = Se, u), e.$$.dirty[1] & /*order*/
    128 && S(O, u.order = ae, u), e.$$.dirty[1] & /*volume*/
    512 && S(O, u.volume = Y, u), e.$$.dirty[0] & /*playListElement*/
    4 | e.$$.dirty[1] & /*list_max_height*/
    8192 && a(16, p = Math.min((C == null ? void 0 : C.scrollHeight) ?? 0, _e)), e.$$.dirty[1] & /*volume*/
    512 && a(1, h.volume = Y, h), e.$$.dirty[0] & /*$currentSong*/
    64 && a(1, h.src = d.url, h), e.$$.dirty[0] & /*$currentSong*/
    64 | e.$$.dirty[1] & /*theme*/
    4096 && a(49, s = d.theme ?? le), e.$$.dirty[1] & /*base_font_size*/
    16384 && a(48, r = String(De).match(/^\d+/)[0] + "px"), e.$$.dirty[0] & /*rootEl*/
    8 | e.$$.dirty[1] & /*themeColor, baseFontSize*/
    393216 && N && (N.style.setProperty("--theme-color", s), N.style.setProperty("--base-font-size", r)), e.$$.dirty[0] & /*$lrc*/
    32 && (f = k && k.length > 0 ? "withlrc" : ""), e.$$.dirty[0] & /*player*/
    2 | e.$$.dirty[1] & /*playLock*/
    32768 && (h.src, a(7, V = -1), W || ee(), a(46, W = !1));
  }, t = lt(t), [
    he,
    h,
    C,
    N,
    v,
    k,
    d,
    V,
    we,
    ce,
    re,
    P,
    Oe,
    ke,
    Q,
    Ye,
    p,
    n,
    u,
    y,
    w,
    E,
    G,
    L,
    x,
    oe,
    ye,
    ge,
    me,
    ve,
    be,
    ue,
    Le,
    je,
    O,
    Re,
    ee,
    $,
    ae,
    Se,
    Y,
    se,
    qe,
    le,
    _e,
    De,
    W,
    Ae,
    r,
    s,
    i,
    l,
    Ve,
    fe,
    U,
    X,
    de,
    F,
    M,
    z,
    I,
    We
  ];
}
class pa extends mt {
  constructor(t) {
    super(), this.shadowRoot.innerHTML = "<style>.aplayer{--base-font-size:12px;--aplayer-height:calc(var(--base-font-size) * 5.5);--lrc-height:calc(calc(var(--base-font-size) + 4px) * 2);--aplayer-height-lrc:calc(var(--aplayer-height) + var(--lrc-height) - 6px);--theme-color:#fadfa3;position:relative;background:#fff;box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);font-family:Arial, Helvetica, sans-serif;margin:5px;overflow:hidden;border-radius:2px;user-select:none;line-height:normal}.aplayer svg{width:100%;height:100%}.aplayer svg path{fill:#fff}.aplayer .aplayer-icon{width:calc(var(--base-font-size) + 3px);height:calc(var(--base-font-size) + 3px);border:none;background-color:transparent;outline:none;cursor:pointer;opacity:0.8;vertical-align:middle;padding:0;font-size:var(--base-font-size);margin:0;display:inline-block}.aplayer .aplayer-icon path{transition:all 0.2s ease-in-out}.aplayer .aplayer-pic{position:relative;float:left;height:var(--aplayer-height);width:var(--aplayer-height);background-color:antiquewhite;background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;transition:all 0.3s ease;cursor:pointer}.aplayer .aplayer-pic:hover .aplayer-button{opacity:1}.aplayer .aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:0.8;text-shadow:0 1px 1px rgba(0, 0, 0, 0.2);box-shadow:0 1px 1px rgba(0, 0, 0, 0.2);background:rgba(0, 0, 0, 0.2);transition:all 0.1s ease}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px}.aplayer .aplayer-pic .aplayer-play svg{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause svg{position:absolute;top:2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:var(--aplayer-height);height:var(--aplayer-height);padding:14px 7px 0 10px;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:text;margin:0 0 calc(var(--base-font-size) + 1px) 5px;padding-bottom:2px;cursor:default}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:calc(var(--base-font-size) + 2px)}.aplayer .aplayer-info .aplayer-music .aplayer-artist{font-size:var(--base-font-size);color:#666}.aplayer .aplayer-info .aplayer-controller{display:flex;position:relative;align-items:center}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap{flex:1;margin:0 0 0 5px;padding:4px 0;cursor:pointer !important}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap:hover .aplayer-bar .aplayer-played .aplayer-thumb{transform:scale(1)}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;transition:all 0.5s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px;background:var(--theme-color) none repeat scroll 0 0}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:10px;width:10px;border-radius:50%;cursor:pointer;transition:all 0.3s ease-in-out;background:var(--theme-color) none repeat scroll 0 0;transform:scale(0)}.aplayer .aplayer-info .aplayer-controller .aplayer-loading-icon svg{display:block;position:absolute;animation:rotate 1s linear infinite}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:relative;right:0;bottom:4px;height:calc(var(--base-font-size) + 5px);color:#999;font-size:11px;padding-left:7px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:center}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;transition:all 0.2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon path{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{display:inline-block;position:relative;margin-left:3px;cursor:pointer}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{height:40px}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{position:absolute;bottom:15px;right:-3px;width:25px;height:0;z-index:99;overflow:hidden;transition:all 0.2s ease-in-out}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa;border-radius:2.5px;overflow:hidden}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{background:var(--theme-color) none repeat scroll 0 0;position:absolute;bottom:0;right:0;width:5px;transition:all 0.1s ease}.aplayer .aplayer-lrc{display:none;position:relative;height:var(--lrc-height);text-align:center;overflow:hidden;margin:-10px 0 calc(var(--base-font-size) - 5px)}.aplayer .aplayer-lrc p{font-size:var(--base-font-size);color:#666;line-height:calc(var(--base-font-size) + 4px) !important;height:calc(var(--base-font-size) + 4px) !important;padding:0 !important;margin:0 !important;transition:all 0.5s ease-out;opacity:0.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1;overflow:visible;height:initial !important;min-height:16px}.aplayer .aplayer-lrc .aplayer-lrc-contents{transition:all 0.5s ease-out;width:100%;user-select:text;cursor:default}.aplayer .aplayer-list{transition:all 0.5s ease;will-change:height;display:none;overflow:hidden;list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list li{position:relative;text-align:left;height:calc((var(--base-font-size) + 4px) * 2);line-height:32px;padding:0 15px;font-size:var(--base-font-size);border-top:1px solid #e9e9e9;cursor:pointer;transition:all 0.2s ease;overflow:hidden;margin:0}.aplayer .aplayer-list li:first-child{border-top:none}.aplayer .aplayer-list li:hover{background:#efefef}.aplayer .aplayer-list li .aplayer-list-cur{width:3px;height:calc((var(--base-font-size) + 4px) * 2 - 10px);position:absolute;left:0;top:5px;cursor:pointer;background-color:var(--theme-color)}.aplayer .aplayer-list li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list li .aplayer-list-artist{color:#666;float:right;cursor:pointer}.aplayer.aplayer-withlrc .aplayer-pic{height:var(--aplayer-height-lrc);width:var(--aplayer-height-lrc)}.aplayer.aplayer-withlrc .aplayer-info{margin-left:var(--aplayer-height-lrc);height:var(--aplayer-height-lrc);padding:10px 7px 0 7px}.aplayer.aplayer-withlrc .aplayer-lrc{display:block}.aplayer.aplayer-withlist .aplayer-list{display:block}.aplayer.aplayer-narrow{width:var(--aplayer-height)}.aplayer.aplayer-narrow .aplayer-info{display:none}.aplayer.aplayer-narrow .aplayer-list{display:none}.aplayer.aplayer-narrow .aplayer-pic,.aplayer.aplayer-narrow .aplayer-body{height:var(--aplayer-height);width:var(--aplayer-height)}.aplayer.aplayer-mobile .aplayer-icon-volume-down{display:none}@keyframes aplayer-roll{0%{left:0}100%{left:-100%}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>", Ct(
      this,
      {
        target: this.shadowRoot,
        props: Mt(this.attributes),
        customElement: !0
      },
      ca,
      sa,
      dt,
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
    ), t && (t.target && j(t.target, this, t.anchor), t.props && (this.$set(t.props), Z()));
  }
  static get observedAttributes() {
    return [
      "audio",
      "order",
      "loop",
      "volume",
      "mini",
      "mutex",
      "autoplay",
      "theme",
      "list_max_height",
      "base_font_size"
    ];
  }
  get audio() {
    return this.$$.ctx[37];
  }
  set audio(t) {
    this.$$set({ audio: t }), Z();
  }
  get order() {
    return this.$$.ctx[38];
  }
  set order(t) {
    this.$$set({ order: t }), Z();
  }
  get loop() {
    return this.$$.ctx[39];
  }
  set loop(t) {
    this.$$set({ loop: t }), Z();
  }
  get volume() {
    return this.$$.ctx[40];
  }
  set volume(t) {
    this.$$set({ volume: t }), Z();
  }
  get mini() {
    return this.$$.ctx[0];
  }
  set mini(t) {
    this.$$set({ mini: t }), Z();
  }
  get mutex() {
    return this.$$.ctx[41];
  }
  set mutex(t) {
    this.$$set({ mutex: t }), Z();
  }
  get autoplay() {
    return this.$$.ctx[42];
  }
  set autoplay(t) {
    this.$$set({ autoplay: t }), Z();
  }
  get theme() {
    return this.$$.ctx[43];
  }
  set theme(t) {
    this.$$set({ theme: t }), Z();
  }
  get list_max_height() {
    return this.$$.ctx[44];
  }
  set list_max_height(t) {
    this.$$set({ list_max_height: t }), Z();
  }
  get base_font_size() {
    return this.$$.ctx[45];
  }
  set base_font_size(t) {
    this.$$set({ base_font_size: t }), Z();
  }
}
customElements.define("s-aplayer", pa);
export {
  pa as default
};
