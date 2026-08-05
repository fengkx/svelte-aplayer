var e = 1024, t = 2048, n = 4096, r = 8192, i = 32768, a = 1 << 25, o = 65536, s = 1 << 19, c = 1 << 20, l = 1 << 25, u = 65536, d = 1 << 21, f = 1 << 22, p = 1 << 23, m = Symbol("$state"), h = Symbol("legacy props"), g = Symbol("attributes"), _ = Symbol("class"), v = Symbol("style"), ee = Symbol("text"), y = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/shared/utils.js
var b = Array.isArray, te = Array.prototype.indexOf, x = Array.prototype.includes, S = Array.from, C = Object.keys, ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, ie = Object.getOwnPropertyDescriptors, ae = Object.prototype, oe = Array.prototype, se = Object.getPrototypeOf, ce = Object.isExtensible, le = () => {};
function ue(e) {
	return e();
}
function w(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function de() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function fe(e) {
	return e === this.v;
}
function pe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function me(e) {
	return !pe(e, this.v);
}
function he(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ge() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function _e(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ve(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ye() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function be(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function xe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Se() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function we() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Te() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function De() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Oe = !1;
function ke() {
	Oe = !0;
}
//#endregion
//#region node_modules/svelte/src/constants.js
var Ae = {}, T = Symbol("uninitialized"), je = "http://www.w3.org/2000/svg", Me = "http://www.w3.org/1998/Math/MathML", E = null;
function Ne(e) {
	E = e;
}
function Pe(e, t = !1, n) {
	E = {
		p: E,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: W,
		l: Oe && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Fe(e) {
	var t = E, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Zn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, E = t.p, e ?? {};
}
function Ie() {
	return !Oe || E !== null && E.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Le = [];
function Re() {
	var e = Le;
	Le = [], w(e);
}
function D(e) {
	if (Le.length === 0 && !Kt) {
		var t = Le;
		queueMicrotask(() => {
			t === Le && Re();
		});
	}
	Le.push(e);
}
function ze() {
	for (; Le.length > 0;) Re();
}
function Be() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ve(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function He() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var O = !1;
function Ue(e) {
	O = e;
}
var k;
function A(e) {
	if (e === null) throw Ve(), Ae;
	return k = e;
}
function We() {
	return A(/* @__PURE__ */ F(k));
}
function j(e) {
	if (O) {
		if (/* @__PURE__ */ F(k) !== null) throw Ve(), Ae;
		k = e;
	}
}
function Ge(e = 1) {
	if (O) {
		for (var t = e, n = k; t--;) n = /* @__PURE__ */ F(n);
		k = n;
	}
}
function Ke(e = !0) {
	for (var t = 0, n = k;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ F(n);
		e && n.remove(), n = i;
	}
}
function qe(e) {
	if (!e || e.nodeType !== 8) throw Ve(), Ae;
	return e.data;
}
function Je(e) {
	if (typeof e != "object" || !e || m in e) return e;
	let t = se(e);
	if (t !== ae && t !== oe) return e;
	var n = /* @__PURE__ */ new Map(), r = b(e), i = /* @__PURE__ */ pn(0), a = null, o = Mn, s = (e) => {
		if (Mn === o) return e();
		var t = U, n = Mn;
		Tn(null), Nn(o);
		var r = e();
		return Tn(t), Nn(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ pn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && we();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ pn(r.value, a);
				return n.set(t, e), e;
			}) : H(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ pn(T, a));
					n.set(t, e), vn(i);
				}
			} else H(r, T), vn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === m) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || re(t, r)?.writable) && (o = s(() => /* @__PURE__ */ pn(Je(c ? t[r] : T), a)), n.set(r, o)), o !== void 0) {
				var l = J(o);
				return l === T ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = J(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== T) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === m) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== T || Reflect.has(e, t);
			return (r !== void 0 || W !== null && (!i || re(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ pn(i ? Je(e[t]) : T, a)), n.set(t, r)), J(r) === T) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ pn(T, a)), n.set(d + "", f)) : H(f, T);
			}
			if (l === void 0) (!u || re(e, t)?.writable) && (l = s(() => /* @__PURE__ */ pn(void 0, a)), H(l, Je(o)), n.set(t, l));
			else {
				u = l.v !== T;
				var p = s(() => Je(o));
				H(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && H(h, g + 1);
				}
				vn(i);
			}
			return !0;
		},
		ownKeys(e) {
			J(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== T;
			});
			for (var [r, a] of n) a.v !== T && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Te();
		}
	});
}
var Ye, Xe, M, Ze;
function Qe() {
	if (Ye === void 0) {
		Ye = window, Xe = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		M = re(t, "firstChild").get, Ze = re(t, "nextSibling").get, ce(e) && (e[_] = void 0, e[g] = null, e[v] = void 0, e.__e = void 0), ce(n) && (n[ee] = void 0);
	}
}
function N(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function P(e) {
	return M.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function F(e) {
	return Ze.call(e);
}
function I(e, t) {
	if (!O) return /* @__PURE__ */ P(e);
	var n = /* @__PURE__ */ P(k);
	if (n === null) n = k.appendChild(N());
	else if (t && n.nodeType !== 3) {
		var r = N();
		return n?.before(r), A(r), r;
	}
	return t && rt(n), A(n), n;
}
function $e(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ P(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ F(n) : n;
	}
	if (t) {
		if (k?.nodeType !== 3) {
			var r = N();
			return k?.before(r), A(r), r;
		}
		rt(k);
	}
	return k;
}
function L(e, t = 1, n = !1) {
	let r = O ? k : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ F(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = N();
			return r === null ? i?.after(a) : r.before(a), A(a), a;
		}
		rt(r);
	}
	return A(r), r;
}
function et(e) {
	e.textContent = "";
}
function tt() {
	return !1;
}
function nt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function rt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function it(e) {
	var t = W;
	if (t === null) return U.f |= p, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	at(e, t);
}
function at(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var ot = ~(t | n | e);
function R(e, t) {
	e.f = e.f & ot | t;
}
function st(t) {
	t.f & 512 || t.deps === null ? R(t, e) : R(t, n);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function ct(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= u, ct(t.deps));
}
function lt(t, n, r) {
	t.f & 2048 ? n.add(t) : t.f & 4096 && r.add(t), ct(t.deps), R(t, e);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function ut(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), le;
	let r = Y(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var dt = [];
function ft(e, t) {
	return { subscribe: pt(e, t).subscribe };
}
function pt(e, t = le) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (pe(e, t) && (e = t, n)) {
			let t = !dt.length;
			for (let t of r) t[1](), dt.push(t, e);
			if (t) {
				for (let e = 0; e < dt.length; e += 2) dt[e][0](dt[e + 1]);
				dt.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = le) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || le), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function mt(e, t, n) {
	let r = !Array.isArray(e), i = r ? [e] : e;
	if (!i.every(Boolean)) throw Error("derived() expects stores as input, got a falsy value");
	let a = t.length < 2;
	return ft(n, (e, n) => {
		let o = !1, s = [], c = 0, l = le, u = () => {
			if (c) return;
			l();
			let i = t(r ? s[0] : s, e, n);
			a ? e(i) : l = typeof i == "function" ? i : le;
		}, d = i.map((e, t) => ut(e, (e) => {
			s[t] = e, c &= ~(1 << t), o && u();
		}, () => {
			c |= 1 << t;
		}));
		return o = !0, u(), function() {
			w(d), l(), o = !1;
		};
	});
}
function ht(e) {
	let t;
	return ut(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var gt = !1, _t = !1, vt = Symbol("unmounted");
function yt(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ V(void 0),
		unsubscribe: le
	};
	if (r.store !== e && !(vt in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = le;
	else {
		var i = !0;
		r.unsubscribe = ut(e, (e) => {
			i ? r.source.v = e : H(r.source, e);
		}), i = !1;
	}
	return e && vt in n ? ht(e) : J(r.source);
}
function bt(e, t) {
	return St(e, t), t;
}
function xt() {
	let e = {};
	function t() {
		Yn(() => {
			for (var t in e) e[t].unsubscribe();
			ne(e, vt, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function St(e, t) {
	gt = !0;
	try {
		e.set(t);
	} finally {
		gt = !1;
	}
}
function z(e, t, n) {
	return St(e, n), t;
}
function Ct(e) {
	var t = _t;
	try {
		return _t = !1, [e(), _t];
	} finally {
		_t = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function wt(e) {
	var t = U, n = W;
	Tn(null), G(null);
	try {
		return e();
	} finally {
		Tn(t), G(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Tt(e) {
	let t = 0, n = fn(0), r;
	return () => {
		Jn() && (J(n), ir(() => (t === 0 && (r = Y(() => e(() => vn(n)))), t += 1, () => {
			D(() => {
				--t, t === 0 && (r?.(), r = void 0, vn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Et = o | s;
function Dt(e, t, n, r) {
	new Ot(e, t, n, r);
}
var Ot = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = O ? k : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = Tt(() => (this.#m = fn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = or(() => {
			if (O) {
				let e = this.#t;
				We();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Et), O && (this.#e = k);
	}
	#g() {
		try {
			this.#a = sr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		D(r), t && (this.#s = sr(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				He();
				return;
			}
			t = !0, n && De(), this.#s !== null && pr(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					at(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = sr(() => e(this.#e)), D(() => {
			var e = this.#c = document.createDocumentFragment(), t = N();
			e.append(t), this.#a = this.#S(() => sr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, pr(this.#o, () => {
				this.#o = null;
			}), this.#x(B));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = sr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				_r(this.#a, e);
				let t = this.#n.pending;
				this.#o = sr(() => t(this.#e));
			} else this.#x(B);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		lt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = W, n = U, r = E;
		G(this.#i), Tn(this.#i), Ne(this.#i.ctx);
		try {
			return Qt.ensure(), e();
		} catch (e) {
			return it(e), null;
		} finally {
			G(t), Tn(n), Ne(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && pr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, D(() => {
			this.#d = !1, this.#m && hn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), J(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		B?.is_fork ? (this.#a && B.skip_effect(this.#a), this.#o && B.skip_effect(this.#o), this.#s && B.skip_effect(this.#s), B.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (Z(this.#a), null), this.#o &&= (Z(this.#o), null), this.#s &&= (Z(this.#s), null), O && (A(this.#t), Ge(), A(Ke()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return sr(() => {
						var r = W;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return at(e, this.#i.parent), null;
				}
			}));
		};
		D(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				at(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => at(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function kt(e, t, n, r) {
	let i = Ie() ? Nt : It;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = W, c = At(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				at(e, s);
			}
			jt();
		}
	}
	var d = Mt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Ft(e))).then(u).catch((e) => at(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), jt();
	}) : f();
}
function At() {
	var e = W, t = U, n = E, r = B;
	return function(i = !0) {
		G(e), Tn(t), Ne(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function jt(e = !0) {
	G(null), Tn(null), Ne(null), e && B?.deactivate();
}
function Mt() {
	var e = W, t = e.b, n = B, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Nt(e) {
	var n = 2 | t;
	return W !== null && (W.f |= s), {
		ctx: E,
		deps: null,
		effects: null,
		equals: fe,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: T,
		wv: 0,
		parent: W,
		ac: null
	};
}
var Pt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Ft(e, t, n) {
	let r = W;
	r === null && ge();
	var i = void 0, a = fn(T), o = !U, s = /* @__PURE__ */ new Set();
	return rr(() => {
		var t = W, n = de();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== y && n.reject(e);
			}).finally(jt);
		} catch (e) {
			n.reject(e), jt();
		}
		var c = B;
		if (o) {
			if (t.f & 32768) var l = Mt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(Pt);
			else for (let e of s.values()) e.reject(Pt);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== Pt && (c.activate(), t ? (a.f |= p, hn(a, t)) : (a.f & 8388608 && (a.f ^= p), hn(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Yn(() => {
		for (let e of s) e.reject(Pt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function It(e) {
	let t = /* @__PURE__ */ Nt(e);
	return t.equals = me, t;
}
function Lt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) Z(t[n]);
	}
}
function Rt(e) {
	var t, n = W, r = e.parent;
	if (!Sn && r !== null && e.v !== T && r.f & 24576) return Be(), e.v;
	G(r);
	try {
		e.f &= ~u, Lt(e), t = Ln(e);
	} finally {
		G(n);
	}
	return t;
}
function zt(t) {
	var n = Rt(t);
	if (!t.equals(n) && (t.wv = Pn(), (!B?.is_fork || t.deps === null) && (B === null ? t.v = n : (B.capture(t, n, !0), Ut?.capture(t, n, !0)), t.deps === null))) {
		R(t, e);
		return;
	}
	Sn || (Wt === null ? st(t) : (Jn() || B?.is_fork) && Wt.set(t, n));
}
function Bt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && wt(() => {
		t.ac.abort(y), t.ac = null;
	}), t.fn !== null && (t.teardown = le), zn(t, 0), lr(t));
}
function Vt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Bn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Ht = null, B = null, Ut = null, Wt = null, Gt = null, Kt = !1, qt = !1, Jt = null, Yt = null, Xt = 0, Zt = 1, Qt = class r {
	id = Zt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		Ht === null ? Ht = this : (Ht.#n = this, this.#t = Ht), Ht = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, r = (e) => this.schedule(e)) {
		var i = this.#f.get(e);
		if (i) {
			this.#f.delete(e);
			for (var a of i.d) R(a, t), r(a);
			for (a of i.m) R(a, n), r(a);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Xt++ > 1e3 && (this.#x(), en());
		for (let e of this.#u) this.#d.delete(e), R(e, t), this.schedule(e);
		for (let e of this.#d) R(e, n), this.schedule(e);
		let e = this.#c;
		this.#c = [], this.apply();
		var i = Jt = [], a = [], o = Yt = [];
		for (let t of e) try {
			this.#_(t, i, a);
		} catch (e) {
			throw cn(t), this.#h() || this.discard(), e;
		}
		if (B = null, o.length > 0) {
			var s = r.ensure();
			for (let e of o) s.schedule(e);
		}
		if (Jt = null, Yt = null, this.#h()) {
			this.#b(a), this.#b(i);
			for (let [e, t] of this.#f) sn(e, t);
			o.length > 0 && B.#g();
			return;
		}
		let c = this.#v();
		if (c) {
			this.#b(a), this.#b(i), c.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Ut = this, nn(a), nn(i), Ut = null, this.#s?.resolve();
		var l = B;
		if (this.#a === 0 && (this.#c.length === 0 || l !== null) && this.#x(), this.#c.length > 0) if (l !== null) {
			let e = l;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else l = this;
		l !== null && l.#g();
	}
	#_(t, n, r) {
		t.f ^= e;
		for (var i = t.first; i !== null;) {
			var a = i.f, o = (a & 96) != 0;
			if (!(o && a & 1024 || a & 8192 || this.#f.has(i)) && i.fn !== null) {
				o ? i.f ^= e : a & 4 ? n.push(i) : Fn(i) && (a & 16 && this.#d.add(i), Bn(i));
				var s = i.first;
				if (s !== null) {
					i = s;
					continue;
				}
			}
			for (; i !== null;) {
				var c = i.next;
				if (c !== null) {
					i = c;
					break;
				}
				i = i.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let n = (e) => {
			var r = e.reactions;
			if (r !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of r) {
				var i = e.f;
				if (i & 2) n(e);
				else {
					var a = e;
					i & 4194320 && !this.async_deriveds.has(a) && (this.#d.delete(a), R(a, t), this.schedule(a));
				}
			}
		};
		for (let e of this.current.keys()) n(e);
		this.oncommit(() => e.discard()), e.#x(), B = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) lt(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== T && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Wt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		B = this;
	}
	deactivate() {
		B = null, Wt = null;
	}
	flush() {
		try {
			qt = !0, B = this, this.#g();
		} finally {
			Xt = 0, Gt = null, Jt = null, Yt = null, qt = !1, B = null, Wt = null, un.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Pt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, D(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= de()).promise;
	}
	static ensure() {
		if (B === null) {
			let e = B = new r();
			!qt && !Kt && D(() => {
				e.#e || e.flush();
			});
		}
		return B;
	}
	apply() {
		Wt = null;
	}
	schedule(t) {
		if (Gt = t, t.b?.is_pending && t.f & 16777228 && !(t.f & 32768)) {
			t.b.defer_effect(t);
			return;
		}
		for (var n = t; n.parent !== null;) {
			n = n.parent;
			var r = n.f;
			if (Jt !== null && n === W && (U === null || !(U.f & 2)) && !gt) return;
			if (r & 96) {
				if (!(r & 1024)) return;
				n.f ^= e;
			}
		}
		this.#c.push(n);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? Ht = e : t.#t = e, this.linked = !1;
		}
	}
};
function $t(e) {
	var t = Kt;
	Kt = !0;
	try {
		var n;
		for (e && (B !== null && !B.is_fork && B.flush(), n = e());;) {
			if (ze(), B === null) return n;
			B.flush();
		}
	} finally {
		Kt = t;
	}
}
function en() {
	try {
		xe();
	} catch (e) {
		at(e, Gt);
	}
}
var tn = null;
function nn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Fn(r) && (tn = /* @__PURE__ */ new Set(), Bn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && fr(r), tn?.size > 0)) {
				un.clear();
				for (let e of tn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) tn.has(n) && (tn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Bn(n);
					}
				}
				tn.clear();
			}
		}
		tn = null;
	}
}
function rn(e, n, r, i) {
	if (!r.has(e) && (r.add(e), e.reactions !== null)) for (let a of e.reactions) {
		let e = a.f;
		e & 2 ? rn(a, n, r, i) : e & 4194320 && !(e & 2048) && an(a, n, i) && (R(a, t), on(a));
	}
}
function an(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (x.call(t, r)) return !0;
		if (r.f & 2 && an(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function on(e) {
	B.schedule(e);
}
function sn(t, n) {
	if (!(t.f & 32 && t.f & 1024)) {
		t.f & 2048 ? n.d.push(t) : t.f & 4096 && n.m.push(t), R(t, e);
		for (var r = t.first; r !== null;) sn(r, n), r = r.next;
	}
}
function cn(t) {
	R(t, e);
	for (var n = t.first; n !== null;) cn(n), n = n.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var ln = /* @__PURE__ */ new Set(), un = /* @__PURE__ */ new Map(), dn = !1;
function fn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: fe,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function pn(e, t) {
	let n = fn(e, t);
	return Dn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function V(e, t = !1, n = !0) {
	let r = fn(e);
	return t || (r.equals = me), Oe && n && E !== null && E.l !== null && (E.l.s ??= []).push(r), r;
}
function mn(e, t) {
	return H(e, Y(() => J(e))), t;
}
function H(e, t, n = !1) {
	return U !== null && (!wn || U.f & 131072) && Ie() && U.f & 4325394 && (En === null || !En.has(e)) && Ee(), hn(e, n ? Je(t) : t, Yt);
}
function hn(e, n, r = null) {
	if (!e.equals(n)) {
		un.set(e, Sn ? n : e.v);
		var i = Qt.ensure();
		if (i.capture(e, n), e.f & 2) {
			let t = e;
			e.f & 2048 && Rt(t), Wt === null && st(t);
		}
		e.wv = Pn(), yn(e, t, r), Ie() && W !== null && W.f & 1024 && !(W.f & 96) && (On === null ? kn([e]) : On.push(e)), !i.is_fork && ln.size > 0 && !dn && gn();
	}
	return n;
}
function gn() {
	dn = !1;
	for (let e of ln) {
		e.f & 1024 && R(e, n);
		let t;
		try {
			t = Fn(e);
		} catch {
			t = !0;
		}
		t && Bn(e);
	}
	ln.clear();
}
function _n(e, t = 1) {
	var n = J(e), r = t === 1 ? n++ : n--;
	return H(e, n), r;
}
function vn(e) {
	H(e, e.v + 1);
}
function yn(e, r, i) {
	var a = e.reactions;
	if (a !== null) for (var o = Ie(), s = a.length, c = 0; c < s; c++) {
		var l = a[c], d = l.f;
		if (!(!o && l === W)) {
			var f = (d & t) === 0;
			if (f && R(l, r), d & 131072) ln.add(l);
			else if (d & 2) {
				var p = l;
				Wt?.delete(p), d & 65536 || (d & 512 && (W === null || !(W.f & 2097152)) && (l.f |= u), yn(p, n, i));
			} else if (f) {
				var m = l;
				d & 16 && tn !== null && tn.add(m), i === null ? on(m) : i.push(m);
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var bn = null, xn = !1, Sn = !1;
function Cn(e) {
	Sn = e;
}
var U = null, wn = !1;
function Tn(e) {
	U = e;
}
var W = null;
function G(e) {
	W = e;
}
var En = null;
function Dn(e) {
	U !== null && (En ??= /* @__PURE__ */ new Set()).add(e);
}
var K = null, q = 0, On = null;
function kn(e) {
	On = e;
}
var An = 1, jn = 0, Mn = jn;
function Nn(e) {
	Mn = e;
}
function Pn() {
	return ++An;
}
function Fn(t) {
	var n = t.f;
	if (n & 2048) return !0;
	if (n & 2 && (t.f &= ~u), n & 4096) {
		for (var r = t.deps, i = r.length, a = 0; a < i; a++) {
			var o = r[a];
			if (Fn(o) && zt(o), o.wv > t.wv) return !0;
		}
		n & 512 && Wt === null && R(t, e);
	}
	return !1;
}
function In(e, r, i = !0) {
	var a = e.reactions;
	if (a !== null && !(En !== null && En.has(e))) for (var o = 0; o < a.length; o++) {
		var s = a[o];
		s.f & 2 ? In(s, r, !1) : r === s && (i ? R(s, t) : s.f & 1024 && R(s, n), on(s));
	}
}
function Ln(e) {
	var t = K, n = q, r = On, a = U, o = En, s = E, c = wn, l = Mn, u = e.f;
	K = null, q = 0, On = null, U = u & 96 ? null : e, En = null, Ne(e.ctx), wn = !1, Mn = ++jn, e.ac !== null && (wt(() => {
		e.ac.abort(y);
	}), e.ac = null);
	try {
		e.f |= d;
		var f = e.fn, m = f();
		e.f |= i;
		var h = e.deps, g = B?.is_fork;
		if (K !== null) {
			var _;
			if (g || zn(e, q), h !== null && q > 0) for (h.length = q + K.length, _ = 0; _ < K.length; _++) h[q + _] = K[_];
			else e.deps = h = K;
			if (Jn() && e.f & 512) for (_ = q; _ < h.length; _++) (h[_].reactions ??= []).push(e);
		} else !g && h !== null && q < h.length && (zn(e, q), h.length = q);
		if (Ie() && On !== null && !wn && h !== null && !(e.f & 6146)) for (_ = 0; _ < On.length; _++) In(On[_], e);
		if (a !== null && a !== e) {
			if (jn++, a.deps !== null) for (let e = 0; e < n; e += 1) a.deps[e].rv = jn;
			if (t !== null) for (let e of t) e.rv = jn;
			On !== null && (r === null ? r = On : r.push(...On));
		}
		return e.f & 8388608 && (e.f ^= p), m;
	} catch (e) {
		return it(e);
	} finally {
		e.f ^= d, K = t, q = n, On = r, U = a, En = o, Ne(s), wn = c, Mn = l;
	}
}
function Rn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var i = te.call(r, e);
		if (i !== -1) {
			var a = r.length - 1;
			a === 0 ? r = n.reactions = null : (r[i] = r[a], r.pop());
		}
	}
	if (r === null && n.f & 2 && (K === null || !x.call(K, n))) {
		var o = n;
		o.f & 512 && (o.f ^= 512, o.f &= ~u), o.v !== T && st(o), o.ac !== null && wt(() => {
			o.ac.abort(y), o.ac = null, R(o, t);
		}), Bt(o), zn(o, 0);
	}
}
function zn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Rn(e, n[r]);
}
function Bn(t) {
	var n = t.f;
	if (!(n & 16384)) {
		R(t, e);
		var r = W, i = xn;
		W = t, xn = (n & 96) == 0;
		try {
			n & 16777232 ? ur(t) : lr(t), cr(t);
			var a = Ln(t);
			t.teardown = typeof a == "function" ? a : null, t.wv = An;
		} finally {
			xn = i, W = r;
		}
	}
}
function J(e) {
	var t = (e.f & 2) != 0;
	if (bn?.add(e), U !== null && !wn && !(W !== null && W.f & 16384) && (En === null || !En.has(e))) {
		var n = U.deps;
		if (U.f & 2097152) e.rv < jn && (e.rv = jn, K === null && n !== null && n[q] === e ? q++ : K === null ? K = [e] : K.push(e));
		else {
			U.deps ??= [], x.call(U.deps, e) || U.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [U] : x.call(r, U) || r.push(U);
		}
	}
	if (Sn && un.has(e)) return un.get(e);
	if (t) {
		var a = e;
		if (Sn) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Hn(a)) && (o = Rt(a)), un.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !wn && U !== null && (xn || (U.f & 512) != 0), c = (a.f & i) == 0;
		Fn(a) && (s && (a.f |= 512), zt(a)), s && !c && (Vt(a), Vn(a));
	}
	if (Wt?.has(e)) return Wt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Vn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Vt(t), Vn(t));
}
function Hn(e) {
	if (e.v === T) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (un.has(t) || t.f & 2 && Hn(t)) return !0;
	return !1;
}
function Y(e) {
	var t = wn;
	try {
		return wn = !0, e();
	} finally {
		wn = t;
	}
}
function Un(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (m in e) Wn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && m in n && Wn(n);
		}
	}
}
function Wn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Wn(e[n], t);
		} catch {}
		let n = se(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = ie(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Gn(e) {
	W === null && (U === null && be(e), ye()), Sn && ve(e);
}
function Kn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function qn(e, n) {
	var i = W;
	i !== null && i.f & 8192 && (e |= r);
	var a = {
		ctx: E,
		deps: null,
		nodes: null,
		f: e | t | 512,
		first: null,
		fn: n,
		last: null,
		next: null,
		parent: i,
		b: i && i.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	B?.register_created_effect(a);
	var s = a;
	if (e & 4) Jt === null ? Qt.ensure().schedule(a) : Jt.push(a);
	else if (n !== null) {
		try {
			Bn(a);
		} catch (e) {
			throw Z(a), e;
		}
		s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & 524288) && (s = s.first, e & 16 && e & 65536 && s !== null && (s.f |= o));
	}
	if (s !== null && (s.parent = i, i !== null && Kn(s, i), U !== null && U.f & 2 && !(e & 64))) {
		var c = U;
		(c.effects ??= []).push(s);
	}
	return a;
}
function Jn() {
	return U !== null && !wn;
}
function Yn(t) {
	let n = qn(8, null);
	return R(n, e), n.teardown = t, n;
}
function Xn(e) {
	Gn("$effect");
	var t = W.f;
	if (!U && t & 32 && E !== null && !E.i) {
		var n = E;
		(n.e ??= []).push(e);
	} else return Zn(e);
}
function Zn(e) {
	return qn(4 | c, e);
}
function Qn(e) {
	return Gn("$effect.pre"), qn(8 | c, e);
}
function $n(e) {
	Qt.ensure();
	let t = qn(64 | s, e);
	return () => {
		Z(t);
	};
}
function er(e) {
	Qt.ensure();
	let t = qn(64 | s, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? pr(t, () => {
			Z(t), n(void 0);
		}) : (Z(t), n(void 0));
	});
}
function tr(e) {
	return qn(4, e);
}
function X(e, t) {
	var n = E, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = ir(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = W;
			try {
				G(n.parent), Y(t);
			} finally {
				G(n);
			}
		}
	});
}
function nr() {
	var e = E;
	ir(() => {
		for (var t of e.l.$) {
			t.deps();
			var r = t.effect;
			r.f & 1024 && r.deps !== null && R(r, n), Fn(r) && Bn(r), t.ran = !1;
		}
	});
}
function rr(e) {
	return qn(f | s, e);
}
function ir(e, t = 0) {
	return qn(8 | t, e);
}
function ar(e, t = [], n = [], r = []) {
	kt(r, t, n, (t) => {
		qn(8, () => {
			e(...t.map(J));
		});
	});
}
function or(e, t = 0) {
	return qn(16 | t, e);
}
function sr(e) {
	return qn(32 | s, e);
}
function cr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Sn, n = U;
		Cn(!0), Tn(null);
		try {
			t.call(null);
		} finally {
			Cn(e), Tn(n);
		}
	}
}
function lr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && wt(() => {
			e.abort(y);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : Z(n, t), n = r;
	}
}
function ur(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || Z(t), t = n;
	}
}
function Z(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (dr(e.nodes.start, e.nodes.end), n = !0), e.f |= a, lr(e, t && !n), zn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	cr(e), e.f ^= a, e.f |= 16384;
	var i = e.parent;
	i !== null && i.first !== null && fr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function dr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ F(e);
		e.remove(), e = n;
	}
}
function fr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pr(e, t, n = !0) {
	var r = [];
	mr(e, r, !0);
	var i = () => {
		n && Z(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function mr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= r;
		var i = e.nodes && e.nodes.t;
		if (i !== null) for (let e of i) (e.is_global || n) && t.push(e);
		for (var a = e.first; a !== null;) {
			var o = a.next;
			if (!(a.f & 64)) {
				var s = (a.f & 65536) != 0 || (a.f & 32) != 0 && (e.f & 16) != 0;
				mr(a, t, s ? n : !1);
			}
			a = o;
		}
	}
}
function hr(e) {
	gr(e, !0);
}
function gr(e, n) {
	if (e.f & 8192) {
		e.f ^= r, e.f & 1024 || (R(e, t), Qt.ensure().schedule(e));
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0;
			gr(i, o ? n : !1), i = a;
		}
		var s = e.nodes && e.nodes.t;
		if (s !== null) for (let e of s) (e.is_global || n) && e.in();
	}
}
function _r(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ F(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var vr = Symbol("events"), yr = /* @__PURE__ */ new Set(), br = /* @__PURE__ */ new Set();
function xr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Cr.call(t, e), !e.cancelBubble) return wt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? D(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Q(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = xr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Yn(() => {
		t.removeEventListener(e, o, a);
	});
}
var Sr = null;
function Cr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Sr = e;
	var o = 0, s = Sr === e && e[vr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[vr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		ne(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = U, d = W;
		Tn(null), G(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[vr]?.[r];
					m != null && (!a.disabled || e.target === a) && m.call(a, e);
				} catch (e) {
					f ? p.push(e) : f = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (f) {
				for (let e of p) queueMicrotask(() => {
					throw e;
				});
				throw f;
			}
		} finally {
			e[vr] = t, delete e.currentTarget, Tn(u), G(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var wr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Tr(e) {
	return wr?.createHTML(e) ?? e;
}
function Er(e) {
	var t = nt("template");
	return t.innerHTML = Tr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Dr(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Or(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (O) return Dr(k, null), k;
		i === void 0 && (i = Er(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ P(i)));
		var t = r || Xe ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ P(t), s = t.lastChild;
			Dr(o, s);
		} else Dr(t, t);
		return t;
	};
}
function kr() {
	if (O) return Dr(k, null), k;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = N();
	return e.append(t, n), Dr(t, n), e;
}
function $(e, t) {
	if (O) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = k), We();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Ar = ["touchstart", "touchmove"];
function jr(e) {
	return Ar.includes(e);
}
function Mr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ee] ??= e.nodeValue) && (e[ee] = n, e.nodeValue = `${n}`);
}
function Nr(e, t) {
	return Ir(e, t);
}
function Pr(e, t) {
	Qe(), t.intro = t.intro ?? !1;
	let n = t.target, r = O, i = k;
	try {
		for (var a = /* @__PURE__ */ P(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ F(a);
		if (!a) throw Ae;
		Ue(!0), A(a);
		let r = Ir(e, {
			...t,
			anchor: a
		});
		return Ue(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== Ae && console.warn("Failed to hydrate: ", r), t.recover === !1 && Se(), Qe(), et(n), Ue(!1), Nr(e, t);
	} finally {
		Ue(r), A(i);
	}
}
var Fr = /* @__PURE__ */ new Map();
function Ir(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Qe();
	var c = void 0, l = er(() => {
		var o = n ?? t.appendChild(N());
		Dt(o, { pending: () => {} }, (t) => {
			Pe({});
			var n = E;
			if (a && (n.c = a), i && (r.$$events = i), O && Dr(t, null), c = e(t, r) || {}, O && (W.nodes.end = k, k === null || k.nodeType !== 8 || k.data !== "]")) throw Ve(), Ae;
			Fe();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = jr(r);
					for (let e of [t, document]) {
						var a = Fr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Fr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Cr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(S(yr)), br.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Fr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Cr), r.delete(e), r.size === 0 && Fr.delete(n)) : r.set(e, i);
			}
			br.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Lr.set(c, l), c;
}
var Lr = /* @__PURE__ */ new WeakMap();
function Rr(e, t) {
	let n = Lr.get(e);
	return n ? (Lr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function zr(e) {
	return new Br(e);
}
var Br = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ V(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return J(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === h ? !0 : (J(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return H(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Pr : Nr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && $t(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || ne(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			Rr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
};
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5"), ke();
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Vr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) hr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (hr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (Z(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						_r(r, t), t.append(N()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else Z(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), pr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (Z(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = B, r = tt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = N();
			i.append(a), this.#n.set(e, {
				effect: sr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, sr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else O && (this.anchor = k), this.#a(n);
	}
};
function Hr(e) {
	E === null && he("onMount"), Oe && E.l !== null ? Kr(E).m.push(e) : Xn(() => {
		let t = Y(e);
		if (typeof t == "function") return t;
	});
}
function Ur(e) {
	E === null && he("onDestroy"), Hr(() => () => Y(e));
}
function Wr(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
	return new CustomEvent(e, {
		detail: t,
		bubbles: n,
		cancelable: r
	});
}
function Gr() {
	let e = E;
	return e === null && he("createEventDispatcher"), (t, n, r) => {
		let i = e.s.$$events?.[t];
		if (i) {
			let a = b(i) ? i.slice() : [i], o = Wr(t, n, r);
			for (let t of a) t.call(e.x, o);
			return !o.defaultPrevented;
		}
		return !0;
	};
}
function Kr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function qr(e, t, n = !1) {
	var r;
	O && (r = k, We());
	var i = new Vr(e), a = n ? o : 0;
	function s(e, t) {
		if (O) {
			var n = qe(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ke();
				A(a), i.anchor = a, Ue(!1), i.ensure(e, t), Ue(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	or(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, s(n, t);
		}), e || s(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Jr(e, t) {
	return t;
}
function Yr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		pr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Xr(e, S(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			et(u), u.append(l), e.items.clear();
		}
		Xr(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Xr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= l, _r(a, document.createDocumentFragment())) : Z(t[i], n);
	}
}
var Zr;
function Qr(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = O ? A(/* @__PURE__ */ P(c)) : c.appendChild(N());
	}
	O && We();
	var u = null, d = /* @__PURE__ */ It(() => {
		var e = n();
		return b(e) ? e : e == null ? [] : S(e);
	}), f, p = /* @__PURE__ */ new Map(), m = !0;
	function h(e) {
		_.effect.f & 16384 || (_.pending.delete(e), _.fallback = u, ei(_, f, o, t, r), u !== null && (f.length === 0 ? u.f & 33554432 ? (u.f ^= l, ni(u, null, o)) : hr(u) : pr(u, () => {
			u = null;
		})));
	}
	function g(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: or(() => {
			f = J(d);
			var e = f.length;
			let c = !1;
			O && qe(o) === "[!" != (e === 0) && (o = Ke(), A(o), Ue(!1), c = !0);
			for (var _ = /* @__PURE__ */ new Set(), v = B, ee = tt(), y = 0; y < e; y += 1) {
				O && k.nodeType === 8 && k.data === "]" && (o = k, c = !0, Ue(!1));
				var b = f[y], te = r(b, y), x = m ? null : s.get(te);
				x ? (x.v && hn(x.v, b), x.i && hn(x.i, y), ee && v.unskip_effect(x.e)) : (x = ti(s, m ? o : Zr ??= N(), b, te, y, i, t, n), m || (x.e.f |= l), s.set(te, x)), _.add(te);
			}
			if (e === 0 && a && !u && (m ? u = sr(() => a(o)) : (u = sr(() => a(Zr ??= N())), u.f |= l)), e > _.size && _e("", "", ""), O && e > 0 && A(Ke()), !m) if (p.set(v, _), ee) {
				for (let [e, t] of s) _.has(e) || v.skip_effect(t.e);
				v.oncommit(h), v.ondiscard(g);
			} else h(v);
			c && Ue(!0), J(d);
		}),
		flags: t,
		items: s,
		pending: p,
		outrogroups: null,
		fallback: u
	};
	m = !1, O && (o = k);
}
function $r(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function ei(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = $r(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (hr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= l, _ === c) ni(_, null, n);
		else {
			var ee = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), ri(e, d, _), ri(e, _, ee), ni(_, ee, n), d = _, p = [], m = [], c = $r(d.next);
			continue;
		}
		if (_ !== c) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var y = m[0], b;
					d = y.prev;
					var te = p[0], x = p[p.length - 1];
					for (b = 0; b < p.length; b += 1) ni(p[b], y, n);
					for (b = 0; b < m.length; b += 1) u.delete(m[b]);
					ri(e, te.prev, x.next), ri(e, d, te), ri(e, x, y), c = y, d = x, --v, p = [], m = [];
				} else u.delete(_), ni(_, c, n), ri(e, _.prev, _.next), ri(e, _, d === null ? e.effect.first : d.next), ri(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (u ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = $r(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = $r(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Xr(e, S(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && C.push(c), c = $r(c.next);
		var ne = C.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.fix();
			}
			Yr(e, C, re);
		}
	}
	a && D(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function ti(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? fn(n) : /* @__PURE__ */ V(n, !1, !1) : null, l = o & 2 ? fn(i) : null;
	return {
		v: c,
		i: l,
		e: sr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function ni(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ F(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function ri(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ii(e, t, n = !1, r = !1, i = !1, a = !1) {
	var o = e, s = "";
	if (n) {
		var c = e;
		O && (o = A(/* @__PURE__ */ P(c)));
	}
	ar(() => {
		var e = W;
		if (s === (s = t() ?? "")) {
			O && We();
			return;
		}
		if (n && !O) {
			e.nodes = null, c.innerHTML = s, s !== "" && Dr(/* @__PURE__ */ P(c), c.lastChild);
			return;
		}
		if (e.nodes !== null && (dr(e.nodes.start, e.nodes.end), e.nodes = null), s !== "") {
			if (O) {
				for (var a = k.data, l = We(), u = l; l !== null && (l.nodeType !== 8 || l.data !== "");) u = l, l = /* @__PURE__ */ F(l);
				if (l === null) throw Ve(), Ae;
				Dr(k, u), o = A(l);
				return;
			}
			var d = nt(r ? "svg" : i ? "math" : "template", r ? je : i ? Me : void 0);
			d.innerHTML = s;
			var f = r || i ? d : d.content;
			if (Dr(/* @__PURE__ */ P(f), f.lastChild), r || i) for (; /* @__PURE__ */ P(f);) o.before(/* @__PURE__ */ P(f));
			else o.before(f);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function ai(e, t) {
	tr(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = nt("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var oi = [..." 	\n\r\f\xA0\v﻿"];
function si(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || oi.includes(r[o - 1])) && (s === r.length || oi.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ci(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function li(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ui(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(li)), i && c.push(...Object.keys(i).map(li));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = li(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += ci(r)), i && (n += ci(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function di(e, t, n, r, i, a) {
	var o = e[_];
	if (O || o !== n || o === void 0) {
		var s = si(n, r, a);
		(!O || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[_] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function fi(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function pi(e, t, n, r) {
	var i = e[v];
	if (O || i !== t) {
		var a = ui(t, r);
		(!O || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[v] = t;
	} else r && (Array.isArray(r) ? (fi(e, n?.[0], r[0]), fi(e, n?.[1], r[1], "important")) : fi(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function mi(e, t) {
	return e === t || e?.[m] === t;
}
function hi(e = {}, t, n, r) {
	var i = E.r, a = W;
	return tr(() => {
		var o, s;
		return ir(() => {
			o = s, s = r?.() || [], Y(() => {
				mi(n(...s), e) || (t(e, ...s), o && mi(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && mi(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function gi(e = !1) {
	let t = E, n = t.l.u;
	if (!n) return;
	let r = () => Un(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Nt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => J(i);
	}
	n.b.length && Qn(() => {
		_i(t, r), w(n.b);
	}), Xn(() => {
		let e = Y(() => n.m.map(ue));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Xn(() => {
		_i(t, r), w(n.a);
	});
}
function _i(e, t) {
	if (e.l.s) for (let t of e.l.s) J(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/misc.js
function vi(e, t, n) {
	e.$$events ||= {}, e.$$events[t] ||= [], e.$$events[t].push(n);
}
function yi(e) {
	for (var t in e) t in this && (this[t] = e[t]);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var bi = {
	get(e, t) {
		if (!e.exclude.includes(t)) return J(e.version), t in e.special ? e.special[t]() : e.props[t];
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = W;
			try {
				G(e.parent_effect), e.special[t] = Si({ get [t]() {
					return e.props[t];
				} }, t, 4);
			} finally {
				G(r);
			}
		}
		return e.special[t](n), _n(e.version), !0;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) ? !0 : (e.exclude.push(t), _n(e.version), !0);
	},
	has(e, t) {
		return !e.exclude.includes(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function xi(e, t) {
	return new Proxy({
		props: e,
		exclude: t,
		special: {},
		version: fn(0),
		parent_effect: W
	}, bi);
}
function Si(e, t, n, r) {
	var i = !Oe || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Nt(r), J(l)) : (c && (c = !1, s = o ? Y(r) : r), s);
	let d;
	if (a) {
		var f = m in e || h in e;
		d = re(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, g = !1;
	a ? [p, g] = Ct(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Ce(t), d(p)));
	var _ = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return _;
	if (d) {
		var v = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || v || g) && d(t ? _() : e), e) : _();
		});
	}
	var ee = !1, y = (n & 1 ? Nt : It)(() => (ee = !1, _()));
	a && J(y);
	var b = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? J(y) : i && a ? Je(e) : e;
			return H(y, n), ee = !0, s !== void 0 && (s = n), e;
		}
		return Sn && ee || b.f & 16384 ? y.v : J(y);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var Ci;
typeof HTMLElement == "function" && (Ci = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = nt("slot");
					e !== "default" && (n.name = e), $(t, n);
				};
			}
			let t = {}, n = Ti(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = wi(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = zr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = $n(() => {
				ir(() => {
					this.$$r = !0;
					for (let e of C(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = wi(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = wi(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return C(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function wi(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Ti(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Ei(e, t, n, r, i, a) {
	let o = class extends Ci {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return C(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return C(t).forEach((e) => {
		ne(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = wi(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (re(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		ne(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/lib/utils.ts
var Di = (e) => {
	let t = (e) => e < 10 ? "0" + e : "" + e, n = Math.floor(e / 3600), r = Math.floor((e - n * 3600) / 60), i = Math.floor(e - n * 3600 - r * 60);
	return (n > 0 ? [
		n,
		r,
		i
	] : [r, i]).map(t).join(":");
}, Oi = !(typeof window > "u") && /mobile/i.test(window.navigator.userAgent);
function ki(e) {
	if (e) {
		e = e.replace(/([^\]^\n])\[/g, (e, t) => t + "\n[");
		let t = e.split("\n"), n = [], r = t.length;
		for (let e = 0; e < r; e++) {
			let r = t[e].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), i = t[e].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
			if (r) {
				let e = r.length;
				for (let t = 0; t < e; t++) {
					let e = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[t]);
					if (!e) continue;
					let a = Number(e[1]) * 60, o = parseInt(e[2]), s = e[4] ? parseInt(e[4]) / ((e[4] + "").length === 2 ? 100 : 1e3) : 0, c = a + o + s;
					n.push([c, i]);
				}
			}
		}
		return n = n.filter((e) => e[1]), n.sort((e, t) => e[0] - t[0]), n;
	} else return [];
}
function Ai(e, t) {
	let n = e[t];
	return !(n == null || n === "false");
}
console.log("\n %c Svelte APlayer v0.1.2 %c http://svelte-aplayer.js.org\n\n", "color: #fff; background: #ff3e00; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
//#endregion
//#region src/lib/store.ts
var ji = [];
function Mi(e) {
	let t = document.createElement("audio");
	ji.push(t), Ni(t, e);
	let n = pt(0), r = pt(NaN), i = mt([n, r], ([e, t]) => {
		let n = e / t;
		return n = Math.max(n, 0), n = Math.min(n, 1), n *= 100, {
			ptime: Di(e),
			duration: Di(t),
			playPercentage: `${n}%`
		};
	}), a = pt(0), o = mt([a, r], ([e, t]) => {
		let n = e / t;
		return n = Math.max(n, 0), n = Math.min(n, 1), n *= 100, {
			bufferPercentage: `${n}%`,
			bufTime: e
		};
	}), s = pt({
		playingIndex: 0,
		audio: []
	}), c = mt(s, (e) => e.audio), l = pt({
		volume: .7,
		loop: "all",
		order: "list",
		showList: !0
	}), u = mt(l, (e) => ({
		volumePercentage: `${e.volume * 100}%`,
		muted: e.volume === 0
	})), d = mt(s, (e) => e.audio[e.playingIndex]), f = mt([o, n], ([{ bufTime: e }, n]) => t.paused ? !1 : t.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA || e - n < 2 && t.readyState === HTMLMediaElement.HAVE_FUTURE_DATA), p = mt(d, (e, t) => {
		if (!e || !e.lrc) {
			t([]);
			return;
		}
		let n = e.lrc;
		n.startsWith("http") ? fetch(n).then((e) => {
			if (!e.ok) throw Error(`${e.statusText} canot loading lrc from ${n}`);
			return e.text();
		}).then((e) => {
			t(ki(e));
		}).catch((e) => {
			throw t([]), console.error(e), e;
		}) : t(ki(n));
	}, []), m = !1;
	d.subscribe((t) => {
		m && e("listswitch", t), m = !0;
	});
	let h = !1;
	return c.subscribe((t) => {
		h && e("listchange", t), h = !0;
	}), p.subscribe((t) => {
		t.length > 0 ? e("lrcshow") : e("lrchide");
	}), {
		player: t,
		playList: s,
		audioList: c,
		currentSong: d,
		rdTime: i,
		currentTime: n,
		duration: r,
		rdBufTime: o,
		wtBufTime: a,
		loading: f,
		lrc: p,
		controlState: l,
		volumeState: u
	};
}
function Ni(e, t) {
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
	].forEach((n) => {
		e.addEventListener(n, (e) => {
			t(n, e);
		});
	});
}
//#endregion
//#region src/lib/volume-handler.ts
var Pi = (e) => e instanceof MouseEvent ? e.clientY : e.changedTouches[0]?.clientY ?? 0;
function Fi(e, t) {
	let n = !1;
	return {
		volumeDragStart: () => {
			n = !0;
		},
		volumeDragMove: (r) => {
			if (n) {
				let n = 1 - (Pi(r) - t.getBoundingClientRect().top) / t.clientHeight;
				n = Math.max(n, 0), n = Math.min(n, 1), e.volume = n;
			}
		},
		volumeDragEnd: (r) => {
			if (n) {
				let i = 1 - (Pi(r) - t.getBoundingClientRect().top) / t.clientHeight;
				i = Math.max(i, 0), i = Math.min(i, 1), e.volume = i, n = !1;
			}
		}
	};
}
//#endregion
//#region src/lib/progress-handlers.ts
var Ii = (e) => e instanceof MouseEvent ? e.clientX : e.changedTouches[0]?.clientX ?? 0;
function Li(e, t) {
	let n = !1;
	return {
		progressDragStart: () => {
			n = !0;
		},
		progressDragMove: (r) => {
			if (n) {
				let n = (Ii(r) - t.getBoundingClientRect().left) / t.clientWidth;
				n = Math.max(n, 0), n = Math.min(n, 1), e.currentTime = e.duration * n;
			}
		},
		progressDragEnd: (r) => {
			if (n) {
				n = !1;
				let i = (Ii(r) - t.getBoundingClientRect().left) / t.clientWidth;
				i = Math.max(i, 0), i = Math.min(i, 1), e.currentTime = e.duration * i;
			}
		}
	};
}
//#endregion
//#region src/assets/svg.ts
var Ri = "<svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  version=\"1.1\"\n                  viewBox=\"0 0 28 32\"\n                  ><path\n                    d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z\"\n                  /></svg\n        >", zi = "<svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  version=\"1.1\"\n                  viewBox=\"0 0 28 32\"\n                  ><path\n                    d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z\"\n                  /></svg\n                >", Bi = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 32 32\"\n                ><path\n                  d=\"M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z\"\n                /></svg\n              >", Vi = "<svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    version=\"1.1\"\n                    viewBox=\"0 0 32 32\"\n                    ><path\n                      d=\"M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z\"\n                    /></svg\n                  >", Hi = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 32 32\"\n                ><path\n                  d=\"M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z\"\n                /></svg\n              >", Ui = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 33 32\"\n                ><path\n                  d=\"M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z\"\n                /></svg\n              >", Wi = " <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 29 32\"\n                ><path\n                  d=\"M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z\"\n                /></svg\n              >", Gi = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 29 32\"\n                ><path\n                  d=\"M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z\"\n                /></svg\n              >", Ki = (e) => class extends e {
	$destroy() {
		this.dispatchEvent(new CustomEvent("destroy")), this.remove();
	}
}, qi = /* @__PURE__ */ Or("<div class=\"aplayer-button aplayer-pause svelte-es3fdp\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 17 32\" class=\"svelte-es3fdp\"><path d=\"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z\" class=\"svelte-es3fdp\"></path></svg></div>"), Ji = /* @__PURE__ */ Or("<div class=\"aplayer-button aplayer-play svelte-es3fdp\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 31\" class=\"svelte-es3fdp\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\" class=\"svelte-es3fdp\"></path></svg></div>"), Yi = /* @__PURE__ */ Or("<p> </p>"), Xi = /* @__PURE__ */ Or("<div class=\"aplayer-lrc svelte-es3fdp\"><div class=\"aplayer-lrc-contents svelte-es3fdp\"></div></div>"), Zi = /* @__PURE__ */ Or("<button type=\"button\" class=\"aplayer-icon aplayer-icon-menu svelte-es3fdp\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 22 32\" class=\"svelte-es3fdp\"><path d=\"M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z\" class=\"svelte-es3fdp\"></path></svg></button>"), Qi = /* @__PURE__ */ Or("<span class=\"aplayer-list-cur svelte-es3fdp\"></span>"), $i = /* @__PURE__ */ Or("<li class=\"svelte-es3fdp\"><!> <span class=\"aplayer-list-index svelte-es3fdp\"></span> <span class=\"aplayer-list-title svelte-es3fdp\"> </span> <span class=\"aplayer-list-artist svelte-es3fdp\"> </span></li>"), ea = /* @__PURE__ */ Or("<div><div class=\"aplayer-body svelte-es3fdp\"><div class=\"aplayer-pic svelte-es3fdp\"><!></div> <div class=\"aplayer-info svelte-es3fdp\"><div class=\"aplayer-music svelte-es3fdp\"><span class=\"aplayer-title svelte-es3fdp\"> </span> <span class=\"aplayer-artist svelte-es3fdp\"> </span></div> <!> <div class=\"aplayer-controller svelte-es3fdp\"><div class=\"aplayer-bar-wrap svelte-es3fdp\"><div class=\"aplayer-bar svelte-es3fdp\"><div class=\"aplayer-loaded svelte-es3fdp\"></div> <div class=\"aplayer-played svelte-es3fdp\"><div class=\"aplayer-thumb svelte-es3fdp\"><span class=\"aplayer-loading-icon svelte-es3fdp\"></span></div></div></div></div> <div class=\"aplayer-time svelte-es3fdp\"><span class=\"aplayer-time-inner svelte-es3fdp\"><span class=\"aplayer-ptime svelte-es3fdp\"> </span> / <span class=\"aplayer-dtime svelte-es3fdp\"> </span></span> <span hidden=\"\" class=\"svelte-es3fdp\"></span> <div class=\"aplayer-volume-wrap svelte-es3fdp\"><button type=\"button\" class=\"aplayer-icon aplayer-icon-volume-down svelte-es3fdp\"><!></button> <div class=\"aplayer-volume-bar-wrap svelte-es3fdp\"><div class=\"aplayer-volume-bar svelte-es3fdp\"><div class=\"aplayer-volume svelte-es3fdp\"></div></div></div></div> <button type=\"button\" class=\"aplayer-icon aplayer-icon-order svelte-es3fdp\"><!></button> <button type=\"button\" class=\"aplayer-icon aplayer-icon-loop svelte-es3fdp\"><!></button> <!></div></div></div> <div class=\"aplayer-list svelte-es3fdp\"><ol class=\"svelte-es3fdp\"></ol></div></div></div>"), ta = {
	hash: "svelte-es3fdp",
	code: ".aplayer.svelte-es3fdp {--base-font-size: 12px;--aplayer-height: calc(var(--base-font-size) * 5.5);--lrc-height: calc(calc(var(--base-font-size) + 4px) * 2);--aplayer-height-lrc: calc(var(--aplayer-height) + var(--lrc-height) - 6px);--theme-color: #fadfa3;position:relative;background:#fff;box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);font-family:Arial, Helvetica, sans-serif;margin:5px;overflow:hidden;border-radius:2px;user-select:none;line-height:normal;}.aplayer.svelte-es3fdp svg:where(.svelte-es3fdp) {width:100%;height:100%;}.aplayer.svelte-es3fdp svg:where(.svelte-es3fdp) path:where(.svelte-es3fdp) {fill:#fff;}.aplayer.svelte-es3fdp .aplayer-icon:where(.svelte-es3fdp) {width:calc(var(--base-font-size) + 3px);height:calc(var(--base-font-size) + 3px);border:none;background-color:transparent;outline:none;cursor:pointer;opacity:0.8;vertical-align:middle;padding:0;font-size:var(--base-font-size);margin:0;display:inline-block;}.aplayer.svelte-es3fdp .aplayer-icon:where(.svelte-es3fdp) path:where(.svelte-es3fdp) {transition:all 0.2s ease-in-out;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) {position:relative;float:left;height:var(--aplayer-height);width:var(--aplayer-height);background-color:antiquewhite;background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;transition:all 0.3s ease;cursor:pointer;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp):hover .aplayer-button:where(.svelte-es3fdp) {opacity:1;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) .aplayer-button:where(.svelte-es3fdp) {position:absolute;box-sizing:content-box;border-radius:50%;opacity:0.8;text-shadow:0 1px 1px rgba(0, 0, 0, 0.2);box-shadow:0 1px 1px rgba(0, 0, 0, 0.2);background:rgba(0, 0, 0, 0.2);transition:all 0.1s ease;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) .aplayer-play:where(.svelte-es3fdp) {width:26px;height:26px;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) .aplayer-play:where(.svelte-es3fdp) svg:where(.svelte-es3fdp) {position:absolute;top:3px;left:4px;height:20px;width:20px;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) .aplayer-pause:where(.svelte-es3fdp) {width:16px;height:16px;border:2px solid #fff;bottom:0;right:4px;}.aplayer.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) .aplayer-pause:where(.svelte-es3fdp) svg:where(.svelte-es3fdp) {position:absolute;top:2px;left:2px;height:12px;width:12px;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) {margin-left:var(--aplayer-height);height:var(--aplayer-height);padding:14px 7px 0 10px;box-sizing:border-box;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-music:where(.svelte-es3fdp) {overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:text;margin:0 0 calc(var(--base-font-size) + 1px) 5px;padding-bottom:2px;cursor:default;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-music:where(.svelte-es3fdp) .aplayer-title:where(.svelte-es3fdp) {font-size:calc(var(--base-font-size) + 2px);}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-music:where(.svelte-es3fdp) .aplayer-artist:where(.svelte-es3fdp) {font-size:var(--base-font-size);color:#666;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) {display:flex;position:relative;align-items:center;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-bar-wrap:where(.svelte-es3fdp) {flex:1;margin:0 0 0 5px;padding:4px 0;cursor:pointer !important;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-bar-wrap:where(.svelte-es3fdp):hover .aplayer-bar:where(.svelte-es3fdp) .aplayer-played:where(.svelte-es3fdp) .aplayer-thumb:where(.svelte-es3fdp) {transform:scale(1);}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-bar-wrap:where(.svelte-es3fdp) .aplayer-bar:where(.svelte-es3fdp) {position:relative;height:2px;width:100%;background:#cdcdcd;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-bar-wrap:where(.svelte-es3fdp) .aplayer-bar:where(.svelte-es3fdp) .aplayer-loaded:where(.svelte-es3fdp) {position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;transition:all 0.5s ease;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-bar-wrap:where(.svelte-es3fdp) .aplayer-bar:where(.svelte-es3fdp) .aplayer-played:where(.svelte-es3fdp) {position:absolute;left:0;top:0;bottom:0;height:2px;background:var(--theme-color) none repeat scroll 0 0;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-bar-wrap:where(.svelte-es3fdp) .aplayer-bar:where(.svelte-es3fdp) .aplayer-played:where(.svelte-es3fdp) .aplayer-thumb:where(.svelte-es3fdp) {position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:10px;width:10px;border-radius:50%;cursor:pointer;transition:all 0.3s ease-in-out;background:var(--theme-color) none repeat scroll 0 0;transform:scale(0);}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-time:where(.svelte-es3fdp) {position:relative;right:0;bottom:4px;height:calc(var(--base-font-size) + 5px);color:#999;font-size:11px;padding-left:7px;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-time:where(.svelte-es3fdp) .aplayer-time-inner:where(.svelte-es3fdp) {vertical-align:center;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-time:where(.svelte-es3fdp) .aplayer-icon:where(.svelte-es3fdp) {cursor:pointer;transition:all 0.2s ease;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-time:where(.svelte-es3fdp) .aplayer-icon:where(.svelte-es3fdp) path:where(.svelte-es3fdp) {fill:#666;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-volume-wrap:where(.svelte-es3fdp) {display:inline-block;position:relative;margin-left:3px;cursor:pointer;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-volume-wrap:where(.svelte-es3fdp):hover .aplayer-volume-bar-wrap:where(.svelte-es3fdp) {height:40px;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-volume-wrap:where(.svelte-es3fdp) .aplayer-volume-bar-wrap:where(.svelte-es3fdp) {position:absolute;bottom:15px;right:-3px;width:25px;height:0;z-index:99;overflow:hidden;transition:all 0.2s ease-in-out;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-volume-wrap:where(.svelte-es3fdp) .aplayer-volume-bar-wrap:where(.svelte-es3fdp) .aplayer-volume-bar:where(.svelte-es3fdp) {position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa;border-radius:2.5px;overflow:hidden;}.aplayer.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) .aplayer-controller:where(.svelte-es3fdp) .aplayer-volume-wrap:where(.svelte-es3fdp) .aplayer-volume-bar-wrap:where(.svelte-es3fdp) .aplayer-volume-bar:where(.svelte-es3fdp) .aplayer-volume:where(.svelte-es3fdp) {background:var(--theme-color) none repeat scroll 0 0;position:absolute;bottom:0;right:0;width:5px;transition:all 0.1s ease;}.aplayer.svelte-es3fdp .aplayer-lrc:where(.svelte-es3fdp) {display:none;position:relative;height:var(--lrc-height);text-align:center;overflow:hidden;margin:-10px 0 calc(var(--base-font-size) - 5px);}.aplayer.svelte-es3fdp .aplayer-lrc:where(.svelte-es3fdp) p:where(.svelte-es3fdp) {font-size:var(--base-font-size);color:#666;line-height:calc(var(--base-font-size) + 4px) !important;height:calc(var(--base-font-size) + 4px) !important;padding:0 !important;margin:0 !important;transition:all 0.5s ease-out;opacity:0.4;overflow:hidden;}.aplayer.svelte-es3fdp .aplayer-lrc:where(.svelte-es3fdp) p.aplayer-lrc-current:where(.svelte-es3fdp) {opacity:1;overflow:visible;height:initial !important;min-height:16px;}.aplayer.svelte-es3fdp .aplayer-lrc:where(.svelte-es3fdp) .aplayer-lrc-contents:where(.svelte-es3fdp) {transition:all 0.5s ease-out;width:100%;user-select:text;cursor:default;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) {transition:all 0.5s ease;will-change:height;display:none;overflow:hidden;list-style-type:none;margin:0;padding:0;overflow-y:auto;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) ol:where(.svelte-es3fdp) {list-style-type:none;margin:0;padding:0;overflow-y:auto;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) li:where(.svelte-es3fdp) {position:relative;text-align:left;height:calc((var(--base-font-size) + 4px) * 2);line-height:32px;padding:0 15px;font-size:var(--base-font-size);border-top:1px solid #e9e9e9;cursor:pointer;transition:all 0.2s ease;overflow:hidden;margin:0;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) li:where(.svelte-es3fdp):first-child {border-top:none;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) li:where(.svelte-es3fdp):hover {background:#efefef;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) li:where(.svelte-es3fdp) .aplayer-list-cur:where(.svelte-es3fdp) {width:3px;height:calc((var(--base-font-size) + 4px) * 2 - 10px);position:absolute;left:0;top:5px;cursor:pointer;background-color:var(--theme-color);}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) li:where(.svelte-es3fdp) .aplayer-list-index:where(.svelte-es3fdp) {color:#666;margin-right:12px;cursor:pointer;}.aplayer.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) li:where(.svelte-es3fdp) .aplayer-list-artist:where(.svelte-es3fdp) {color:#666;float:right;cursor:pointer;}.aplayer.aplayer-withlrc.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp) {height:var(--aplayer-height-lrc);width:var(--aplayer-height-lrc);}.aplayer.aplayer-withlrc.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) {margin-left:var(--aplayer-height-lrc);height:var(--aplayer-height-lrc);padding:10px 7px 0 7px;}.aplayer.aplayer-withlrc.svelte-es3fdp .aplayer-lrc:where(.svelte-es3fdp) {display:block;}.aplayer.aplayer-withlist.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) {display:block;}.aplayer.aplayer-narrow.svelte-es3fdp {width:var(--aplayer-height);}.aplayer.aplayer-narrow.svelte-es3fdp .aplayer-info:where(.svelte-es3fdp) {display:none;}.aplayer.aplayer-narrow.svelte-es3fdp .aplayer-list:where(.svelte-es3fdp) {display:none;}.aplayer.aplayer-narrow.svelte-es3fdp .aplayer-pic:where(.svelte-es3fdp),\n.aplayer.aplayer-narrow.svelte-es3fdp .aplayer-body:where(.svelte-es3fdp) {height:var(--aplayer-height);width:var(--aplayer-height);}.aplayer.aplayer-mobile.svelte-es3fdp .aplayer-icon-volume-down:where(.svelte-es3fdp) {display:none;}\n\n@keyframes svelte-es3fdp-aplayer-roll {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes svelte-es3fdp-rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"
};
function na(e, t) {
	if (new.target) return zr({
		component: na,
		...e
	});
	let n = xi(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy",
		"$$host"
	]);
	Pe(t, !1), ai(e, ta);
	let r = () => yt(w, "$controlState", f), i = () => yt(C, "$playList", f), a = () => yt(ne, "$audioList", f), o = () => yt(re, "$currentSong", f), s = () => yt(ue, "$lrc", f), c = () => yt(se, "$rdBufTime", f), l = () => yt(ie, "$rdTime", f), u = () => yt(le, "$loading", f), d = () => yt(de, "$volumeState", f), [f, p] = xt(), m = /* @__PURE__ */ V(), h = /* @__PURE__ */ V(), g = /* @__PURE__ */ V(), _ = /* @__PURE__ */ V(), v = /* @__PURE__ */ V(), ee = /* @__PURE__ */ V(), y = /* @__PURE__ */ V(), b = Gr(), te = (e, t) => {
		b(e, t);
		let n = J(y)?.getRootNode();
		n instanceof ShadowRoot && n.host.dispatchEvent(new CustomEvent(e, { detail: t }));
	}, x = Mi(te), S = /* @__PURE__ */ V(x.player), C = x.playList, ne = x.audioList, re = x.currentSong, ie = x.rdTime, ae = x.currentTime, oe = x.duration, se = x.rdBufTime, ce = x.wtBufTime, le = x.loading, ue = x.lrc, w = x.controlState, de = x.volumeState, fe = /* @__PURE__ */ V(J(S).paused);
	J(S).addEventListener("play", () => {
		H(fe, !1);
	}), J(S).addEventListener("pause", () => {
		H(fe, !0);
	});
	let pe = Si(t, "audio", 12), me = Si(t, "order", 28, () => r().order), he = Si(t, "loop", 28, () => r().loop), ge = Si(t, "volume", 28, () => r().volume), _e = Si(t, "mini", 12, !1), ve = Si(t, "mutex", 12, !0), ye = Si(t, "autoplay", 12, !1), be = Si(t, "theme", 12, "#fadfa3"), xe = Si(t, "list_max_height", 12, Infinity), Se = /* @__PURE__ */ V(), Ce = /* @__PURE__ */ V(!1), we = Si(t, "base_font_size", 12, "12"), Te = () => {
		ve() && ji.forEach((e) => e.pause()), J(S).play().catch((e) => {
			console.error(e);
		});
	}, Ee = /* @__PURE__ */ V(-1);
	J(S).addEventListener("timeupdate", () => {
		if (bt(ae, J(S).currentTime), J(ee).includes("lrc")) {
			for (; J(Ee) > 0 && J(S).currentTime < s()[J(Ee)][0];) _n(Ee, -1);
			for (; J(Ee) + 1 < s().length && J(S).currentTime >= s()[J(Ee) + 1][0];) _n(Ee);
		}
	}), J(S).addEventListener("volumechange", () => {
		z(w, Y(r).volume = J(S).volume, Y(r));
	}), J(S).addEventListener("loadedmetadata", () => {
		bt(oe, J(S).duration);
	}), J(S).addEventListener("error", () => {
		console.warn("An audio error has occurred, player will skip forward in 2 seconds."), a().length > 1 && setTimeout(() => {
			z(C, Y(i).playingIndex = (i().playingIndex + 1) % a().length, Y(i)), J(S).paused && Te();
		}, 2e3);
	});
	let De = () => {
		let e = J(S).buffered.length ? J(S).buffered.end(J(S).buffered.length - 1) : 0;
		bt(ce, e);
	};
	J(S).addEventListener("progress", De), J(S).addEventListener("canplay", De), J(S).addEventListener("durationchange", () => {
		bt(oe, J(S).duration);
	});
	let Oe = () => {
		let e = a(), t = (i().playingIndex + 1) % e.length;
		if (r().loop === "none") {
			if (r().order === "list") i().playingIndex < e.length - 1 ? (z(C, Y(i).playingIndex = t, Y(i)), mn(S, J(S).currentTime = 0)) : (z(C, Y(i).playingIndex = (i().playingIndex + 1) % e.length, Y(i)), H(Se, !0), J(S).pause());
			else if (r().order === "random") {
				let n = Math.floor(e.length * Math.random());
				n === i().playingIndex ? z(C, Y(i).playingIndex = t, Y(i)) : z(C, Y(i).playingIndex = n, Y(i)), mn(S, J(S).currentTime = 0);
			}
		} else r().loop === "one" ? mn(S, J(S).currentTime = 0) : r().loop === "all" && z(C, Y(i).playingIndex = t, Y(i));
	};
	J(S).addEventListener("ended", () => {
		J(S).paused || Oe();
	});
	let ke = /* @__PURE__ */ V(), Ae = /* @__PURE__ */ V(), T = /* @__PURE__ */ V(() => {}), je = /* @__PURE__ */ V(() => {}), Me = /* @__PURE__ */ V(() => {}), E = /* @__PURE__ */ V(() => {}), Ne = /* @__PURE__ */ V(() => {}), Ie = /* @__PURE__ */ V(() => {}), Le = /* @__PURE__ */ V();
	Hr(() => {
		location.hostname === "localhost" && window && (window.theAudio = J(S));
		let e = Fi(J(S), J(ke));
		H(T, e.volumeDragStart), H(je, e.volumeDragMove), H(Me, e.volumeDragEnd);
		let t = Li(J(S), J(Ae));
		H(E, t.progressDragStart), H(Ne, t.progressDragMove), H(Ie, t.progressDragEnd), J(Le)?.addEventListener("transitionend", () => {
			H(g, Math.min(J(Le)?.scrollHeight ?? 0, xe()));
		});
	}), Ur(() => {
		te("destroy");
	}), X(() => (Un(pe()), J(Ce), Un(ye())), () => {
		pe(), J(Ce) ? H(Se, !0) : H(Se, !ye()), H(Ce, !0);
	}), X(() => Un(pe()), () => {
		H(m, typeof pe() == "string" ? JSON.parse(pe()) : pe());
	}), X(() => J(m), () => {
		z(C, Y(i).audio = Array.isArray(J(m)) ? J(m) : [J(m)], Y(i));
	}), X(() => (Un(n), a()), () => {
		H(h, !Ai(n, "list_folded") && a().length > 1);
	}), X(() => J(h), () => {
		z(w, Y(r).showList = J(h), Y(r));
	}), X(() => Un(he()), () => {
		z(w, Y(r).loop = he(), Y(r));
	}), X(() => Un(me()), () => {
		z(w, Y(r).order = me(), Y(r));
	}), X(() => Un(ge()), () => {
		z(w, Y(r).volume = ge(), Y(r));
	}), X(() => (J(Le), Un(xe())), () => {
		H(g, Math.min(J(Le)?.scrollHeight ?? 0, xe()));
	}), X(() => Un(ge()), () => {
		mn(S, J(S).volume = ge());
	}), X(() => o(), () => {
		mn(S, J(S).src = o().url);
	}), X(() => (o(), Un(be())), () => {
		H(_, o().theme ?? be());
	}), X(() => Un(we()), () => {
		H(v, (String(we()).match(/^\d+/)?.[0] ?? "12") + "px");
	}), X(() => (J(y), J(_), J(v)), () => {
		J(y) && (J(y).style.setProperty("--theme-color", J(_)), J(y).style.setProperty("--base-font-size", J(v)));
	}), X(() => s(), () => {
		H(ee, s() && s().length > 0 ? "withlrc" : "");
	}), X(() => (J(S), J(Se)), () => {
		J(S).src, H(Ee, -1), J(Se) || Te(), H(Se, !1);
	}), nr();
	var Re = {
		get audio() {
			return pe();
		},
		set audio(e) {
			pe(e), $t();
		},
		get order() {
			return me();
		},
		set order(e) {
			me(e), $t();
		},
		get loop() {
			return he();
		},
		set loop(e) {
			he(e), $t();
		},
		get volume() {
			return ge();
		},
		set volume(e) {
			ge(e), $t();
		},
		get mini() {
			return _e();
		},
		set mini(e) {
			_e(e), $t();
		},
		get mutex() {
			return ve();
		},
		set mutex(e) {
			ve(e), $t();
		},
		get autoplay() {
			return ye();
		},
		set autoplay(e) {
			ye(e), $t();
		},
		get theme() {
			return be();
		},
		set theme(e) {
			be(e), $t();
		},
		get list_max_height() {
			return xe();
		},
		set list_max_height(e) {
			xe(e), $t();
		},
		get base_font_size() {
			return we();
		},
		set base_font_size(e) {
			we(e), $t();
		},
		$set: yi,
		$on: (e, n) => vi(t, e, n)
	};
	gi();
	var D = ea();
	let ze;
	var Be = I(D), Ve = I(Be), He = I(Ve), O = (e) => {
		$(e, qi());
	}, Ue = (e) => {
		$(e, Ji());
	};
	qr(He, (e) => {
		J(fe) ? e(Ue, -1) : e(O);
	}), j(Ve);
	var k = L(Ve, 2), A = I(k), We = I(A), Ge = I(We, !0);
	j(We);
	var Ke = L(We, 2), qe = I(Ke, !0);
	j(Ke), j(A);
	var Je = L(A, 2), Ye = (e) => {
		var t = Xi(), n = I(t);
		Qr(n, 7, s, (e) => e[0], (e, t, n) => {
			var r = Yi();
			let i;
			var a = I(r, !0);
			j(r), ar(() => {
				i = di(r, 1, "svelte-es3fdp", null, i, { "aplayer-lrc-current": J(n) === J(Ee) }), Mr(a, (J(t), Y(() => J(t)[1])));
			}), $(e, r);
		}), j(n), j(t), ar((e) => pi(n, `transform: translateY(calc(${e ?? ""} * -1 * calc(var(--base-font-size) + 4px)))`), [() => (J(Ee), Y(() => Math.max(J(Ee), 0)))]), $(e, t);
	};
	qr(Je, (e) => {
		o(), Y(() => o().lrc) && e(Ye);
	});
	var Xe = L(Je, 2), M = I(Xe), Ze = I(M), Qe = I(Ze), N = L(Qe, 2), P = I(N), F = I(P);
	ii(F, () => Vi, !0), j(F), j(P), j(N), j(Ze), j(M), hi(M, (e) => H(Ae, e), () => J(Ae));
	var et = L(M, 2), tt = I(et), nt = I(tt), rt = I(nt, !0);
	j(nt);
	var it = L(nt, 2), at = I(it, !0);
	j(it), j(tt);
	var ot = L(tt, 4), R = I(ot), st = I(R), ct = (e) => {
		var t = kr();
		ii($e(t), () => zi), $(e, t);
	}, lt = (e) => {
		var t = kr();
		ii($e(t), () => Ri), $(e, t);
	};
	qr(st, (e) => {
		d(), J(S), Y(() => d().muted || J(S).muted) ? e(ct) : e(lt, -1);
	}), j(R);
	var ut = L(R, 2), dt = I(ut), ft = I(dt);
	j(dt), hi(dt, (e) => H(ke, e), () => J(ke)), j(ut), j(ot);
	var pt = L(ot, 2), mt = I(pt), ht = (e) => {
		var t = kr();
		ii($e(t), () => Bi), $(e, t);
	}, gt = (e) => {
		var t = kr();
		ii($e(t), () => Hi), $(e, t);
	};
	qr(mt, (e) => {
		r(), Y(() => r().order === "random") ? e(ht) : e(gt, -1);
	}), j(pt);
	var _t = L(pt, 2), vt = I(_t), St = (e) => {
		var t = kr();
		ii($e(t), () => Gi), $(e, t);
	}, Ct = (e) => {
		var t = kr();
		ii($e(t), () => Ui), $(e, t);
	}, wt = (e) => {
		var t = kr();
		ii($e(t), () => Wi), $(e, t);
	};
	qr(vt, (e) => {
		r(), Y(() => r().loop === "none") ? e(St) : (r(), Y(() => r().loop === "one") ? e(Ct, 1) : (r(), Y(() => r().loop === "all") && e(wt, 2)));
	}), j(_t);
	var Tt = L(_t, 2), Et = (e) => {
		var t = Zi();
		Q("click", t, () => {
			z(w, Y(r).showList = !r().showList, Y(r)), r().showList ? te("listshow") : te("listhide");
		}), $(e, t);
	};
	qr(Tt, (e) => {
		a(), Y(() => a().length > 1) && e(Et);
	}), j(et), j(Xe), j(k);
	var Dt = L(k, 2), Ot = I(Dt);
	Qr(Ot, 5, a, Jr, (e, t, n) => {
		var r = $i(), a = I(r), o = (e) => {
			$(e, Qi());
		};
		qr(a, (e) => {
			i(), Y(() => n === i().playingIndex) && e(o);
		});
		var s = L(a, 2);
		s.textContent = n + 1;
		var c = L(s, 2), l = I(c, !0);
		j(c);
		var u = L(c, 2), d = I(u, !0);
		j(u), j(r), ar(() => {
			Mr(l, (J(t), Y(() => J(t).name))), Mr(d, (J(t), Y(() => J(t).artist)));
		}), Q("click", r, () => {
			z(C, Y(i).playingIndex = n, Y(i)), mn(S, J(S).currentTime = 0);
		}), $(e, r);
	}), j(Ot), j(Dt), hi(Dt, (e) => H(Le, e), () => J(Le)), j(Be), j(D), hi(D, (e) => H(y, e), () => J(y)), ar(() => {
		ze = di(D, 1, "aplayer svelte-es3fdp", null, ze, {
			"aplayer-withlrc": s().length > 0,
			"aplayer-withlist": a().length > 1,
			"aplayer-narrow": _e(),
			"aplayer-mobile": Oi
		}), pi(Ve, `background-image: url( ${(o(), Y(() => o().cover)) ?? ""} )`), Mr(Ge, (o(), Y(() => o().name))), Mr(qe, (o(), Y(() => o().artist))), pi(Qe, `width: ${(c(), Y(() => c().bufferPercentage)) ?? ""}`), pi(N, `width: ${(l(), Y(() => l().playPercentage)) ?? ""}`), pi(F, `display: ${u() ? "inline" : "none"}`), Mr(rt, (l(), Y(() => l().ptime))), Mr(at, (l(), Y(() => l().duration))), pi(ft, `height: ${(J(S), d(), Y(() => J(S).muted ? "0px" : d().volumePercentage)) ?? ""}`), pi(Dt, `height: ${(r(), J(g), Y(() => r().showList ? `${J(g)}px` : "0px")) ?? ""}`);
	}), Q("click", Ve, () => {
		J(fe) ? Te() : J(S).pause();
	}), Q("mousedown", M, function(...e) {
		J(E)?.apply(this, e);
	}), Q("mousemove", M, function(...e) {
		J(Ne)?.apply(this, e);
	}), Q("mouseup", M, function(...e) {
		J(Ie)?.apply(this, e);
	}), Q("mouseleave", M, function(...e) {
		J(Ie)?.apply(this, e);
	}), Q("touchstart", M, function(...e) {
		J(E)?.apply(this, e);
	}), Q("touchmove", M, function(...e) {
		J(Ne)?.apply(this, e);
	}), Q("touchend", M, function(...e) {
		J(Ie)?.apply(this, e);
	}), Q("click", R, () => {
		mn(S, J(S).muted = !J(S).muted);
	}, !0), Q("mousedown", ut, function(...e) {
		J(T)?.apply(this, e);
	}), Q("mousemove", ut, function(...e) {
		J(je)?.apply(this, e);
	}), Q("mouseup", ut, function(...e) {
		J(Me)?.apply(this, e);
	}), Q("mouseleave", ut, function(...e) {
		J(Me)?.apply(this, e);
	}), Q("touchstart", ut, function(...e) {
		J(T)?.apply(this, e);
	}), Q("touchmove", ut, function(...e) {
		J(je)?.apply(this, e);
	}), Q("touchend", ut, function(...e) {
		J(Me)?.apply(this, e);
	}), Q("click", pt, () => {
		z(w, Y(r).order = r().order === "list" ? "random" : "list", Y(r));
	}), Q("click", _t, () => {
		r().loop === "all" ? z(w, Y(r).loop = "one", Y(r)) : r().loop === "one" ? z(w, Y(r).loop = "none", Y(r)) : r().loop === "none" && z(w, Y(r).loop = "all", Y(r));
	}), $(e, D);
	var kt = Fe(Re);
	return p(), kt;
}
customElements.define("s-aplayer", Ei(na, {
	audio: {},
	order: {},
	loop: {},
	volume: {},
	mini: {},
	mutex: {},
	autoplay: {},
	theme: {},
	list_max_height: {},
	base_font_size: {}
}, [], [], { mode: "open" }, Ki));
//#endregion
//#region src/main.ts
var ra = na;
//#endregion
export { ra as default };
