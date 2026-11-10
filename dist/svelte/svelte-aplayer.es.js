var e = 1024, t = 2048, n = 4096, r = 8192, i = 32768, a = 1 << 25, o = 65536, s = 1 << 19, c = 1 << 20, l = 1 << 25, u = 65536, d = 1 << 21, f = 1 << 22, p = 1 << 23, m = Symbol("$state"), h = Symbol("legacy props"), g = Symbol(""), _ = Symbol("attributes"), v = Symbol("class"), ee = Symbol("style"), y = Symbol("text"), b = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), x = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), S = Array.isArray, te = Array.prototype.indexOf, ne = Array.prototype.includes, C = Array.from, w = Object.defineProperty, T = Object.getOwnPropertyDescriptor, re = Object.getOwnPropertyDescriptors, ie = Object.prototype, ae = Array.prototype, oe = Object.getPrototypeOf, se = Object.isExtensible, ce = () => {};
function le(e) {
	return e();
}
function ue(e) {
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
var Ae = {}, E = Symbol("uninitialized"), je = "http://www.w3.org/1999/xhtml", Me = "http://www.w3.org/2000/svg", Ne = "http://www.w3.org/1998/Math/MathML", D = null;
function Pe(e) {
	D = e;
}
function Fe(e, t = !1, n) {
	D = {
		p: D,
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
function Ie(e) {
	var t = D, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) tr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, D = t.p, e ?? {};
}
function Le() {
	return !Oe || D !== null && D.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Re = [];
function ze() {
	var e = Re;
	Re = [], ue(e);
}
function Be(e) {
	if (Re.length === 0 && !Jt) {
		var t = Re;
		queueMicrotask(() => {
			t === Re && ze();
		});
	}
	Re.push(e);
}
function Ve() {
	for (; Re.length > 0;) ze();
}
function He() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ue(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function We() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var O = !1;
function k(e) {
	O = e;
}
var A;
function j(e) {
	if (e === null) throw Ue(), Ae;
	return A = e;
}
function Ge() {
	return j(/* @__PURE__ */ nt(A));
}
function M(e) {
	if (O) {
		if (/* @__PURE__ */ nt(A) !== null) throw Ue(), Ae;
		A = e;
	}
}
function Ke(e = 1) {
	if (O) {
		for (var t = e, n = A; t--;) n = /* @__PURE__ */ nt(n);
		A = n;
	}
}
function qe(e = !0) {
	for (var t = 0, n = A;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ nt(n);
		e && n.remove(), n = i;
	}
}
function Je(e) {
	if (!e || e.nodeType !== 8) throw Ue(), Ae;
	return e.data;
}
function Ye(e) {
	if (typeof e != "object" || !e || m in e) return e;
	let t = oe(e);
	if (t !== ie && t !== ae) return e;
	var n = /* @__PURE__ */ new Map(), r = S(e), i = /* @__PURE__ */ hn(0), a = null, o = Fn, s = (e) => {
		if (Fn === o) return e();
		var t = U, n = Fn;
		Dn(null), In(o);
		var r = e();
		return Dn(t), In(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ hn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && we();
			var i = n.get(t);
			return i === void 0 ? s(() => {
				var e = /* @__PURE__ */ hn(r.value, a);
				return n.set(t, e), e;
			}) : H(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = s(() => /* @__PURE__ */ hn(E, a));
					n.set(t, e), bn(i);
				}
			} else H(r, E), bn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === m) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || T(t, r)?.writable) && (o = s(() => /* @__PURE__ */ hn(Ye(c ? t[r] : E), a)), n.set(r, o)), o !== void 0) {
				var l = q(o);
				return l === E ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = q(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== E) return {
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
			var r = n.get(t), i = r !== void 0 && r.v !== E || Reflect.has(e, t);
			return (r !== void 0 || W !== null && (!i || T(e, t)?.writable)) && (r === void 0 && (r = s(() => /* @__PURE__ */ hn(i ? Ye(e[t]) : E, a)), n.set(t, r)), q(r) === E) ? !1 : i;
		},
		set(e, t, o, c) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var f = n.get(d + "");
				f === void 0 ? d in e && (f = s(() => /* @__PURE__ */ hn(E, a)), n.set(d + "", f)) : H(f, E);
			}
			if (l === void 0) (!u || T(e, t)?.writable) && (l = s(() => /* @__PURE__ */ hn(void 0, a)), H(l, Ye(o)), n.set(t, l));
			else {
				u = l.v !== E;
				var p = s(() => Ye(o));
				H(l, p);
			}
			var m = Reflect.getOwnPropertyDescriptor(e, t);
			if (m?.set && m.set.call(c, o), !u) {
				if (r && typeof t == "string") {
					var h = n.get("length"), g = Number(t);
					Number.isInteger(g) && g >= h.v && H(h, g + 1);
				}
				bn(i);
			}
			return !0;
		},
		ownKeys(e) {
			q(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== E;
			});
			for (var [r, a] of n) a.v !== E && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Te();
		}
	});
}
var Xe, Ze, Qe, $e;
function et() {
	if (Xe === void 0) {
		Xe = window, Ze = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Qe = T(t, "firstChild").get, $e = T(t, "nextSibling").get, se(e) && (e[v] = void 0, e[_] = null, e[ee] = void 0, e.__e = void 0), se(n) && (n[y] = void 0);
	}
}
function tt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function N(e) {
	return Qe.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function nt(e) {
	return $e.call(e);
}
function P(e, t) {
	if (!O) return /* @__PURE__ */ N(e);
	var n = /* @__PURE__ */ N(A);
	if (n === null) n = A.appendChild(tt());
	else if (t && n.nodeType !== 3) {
		var r = tt();
		return n?.before(r), j(r), r;
	}
	return t && I(n), j(n), n;
}
function rt(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ N(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nt(n) : n;
	}
	if (t) {
		if (A?.nodeType !== 3) {
			var r = tt();
			return A?.before(r), j(r), r;
		}
		I(A);
	}
	return A;
}
function F(e, t = 1, n = !1) {
	let r = O ? A : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ nt(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = tt();
			return r === null ? i?.after(a) : r.before(a), j(a), a;
		}
		I(r);
	}
	return j(r), r;
}
function it(e) {
	e.textContent = "";
}
function at() {
	return !1;
}
function ot(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function I(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function st(e) {
	var t = W;
	if (t === null) return U.f |= p, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	ct(e, t);
}
function ct(e, t) {
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
var lt = ~(t | n | e);
function L(e, t) {
	e.f = e.f & lt | t;
}
function ut(t) {
	t.f & 512 || t.deps === null ? L(t, e) : L(t, n);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function dt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= u, dt(t.deps));
}
function ft(t, n, r) {
	t.f & 2048 ? n.add(t) : t.f & 4096 && r.add(t), dt(t.deps), L(t, e);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function pt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), ce;
	let r = J(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var mt = [];
function ht(e, t) {
	return { subscribe: gt(e, t).subscribe };
}
function gt(e, t = ce) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (pe(e, t) && (e = t, n)) {
			let t = !mt.length;
			for (let t of r) t[1](), mt.push(t, e);
			if (t) {
				for (let e = 0; e < mt.length; e += 2) mt[e][0](mt[e + 1]);
				mt.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = ce) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || ce), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function _t(e, t, n) {
	let r = !Array.isArray(e), i = r ? [e] : e;
	if (!i.every(Boolean)) throw Error("derived() expects stores as input, got a falsy value");
	let a = t.length < 2;
	return ht(n, (e, n) => {
		let o = !1, s = [], c = 0, l = ce, u = () => {
			if (c) return;
			l();
			let i = t(r ? s[0] : s, e, n);
			a ? e(i) : l = typeof i == "function" ? i : ce;
		}, d = i.map((e, t) => pt(e, (e) => {
			s[t] = e, c &= ~(1 << t), o && u();
		}, () => {
			c |= 1 << t;
		}));
		return o = !0, u(), function() {
			ue(d), l(), o = !1;
		};
	});
}
function vt(e) {
	let t;
	return pt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var yt = !1, bt = !1, xt = Symbol("unmounted");
function St(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ V(void 0),
		unsubscribe: ce
	};
	if (r.store !== e && !(xt in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = ce;
	else {
		var i = !0;
		r.unsubscribe = pt(e, (e) => {
			i ? r.source.v = e : H(r.source, e);
		}), i = !1;
	}
	return e && xt in n ? vt(e) : q(r.source);
}
function Ct(e, t) {
	return R(e, t), t;
}
function wt() {
	let e = {};
	function t() {
		$n(() => {
			for (var t in e) e[t].unsubscribe();
			w(e, xt, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function R(e, t) {
	yt = !0;
	try {
		e.set(t);
	} finally {
		yt = !1;
	}
}
function z(e, t, n) {
	return R(e, n), t;
}
function Tt(e) {
	var t = bt;
	try {
		return bt = !1, [e(), bt];
	} finally {
		bt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Et(e) {
	var t = U, n = W;
	Dn(null), G(null);
	try {
		return e();
	} finally {
		Dn(t), G(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Dt(e) {
	let t = 0, n = mn(0), r;
	return () => {
		Qn() && (q(n), sr(() => (t === 0 && (r = J(() => e(() => bn(n)))), t += 1, () => {
			Be(() => {
				--t, t === 0 && (r?.(), r = void 0, bn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ot = o | s;
function kt(e, t, n, r) {
	new At(e, t, n, r);
}
var At = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = O ? A : null;
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
	#h = Dt(() => (this.#m = mn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = lr(() => {
			if (O) {
				let e = this.#t;
				Ge();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ot), O && (this.#e = A);
	}
	#g() {
		try {
			this.#a = ur(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Be(r), t && (this.#s = ur(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				We();
				return;
			}
			t = !0, n && De(), this.#s !== null && gr(this.#s, () => {
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
					ct(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = ur(() => e(this.#e)), Be(() => {
			var e = this.#c = document.createDocumentFragment(), t = tt();
			e.append(t), this.#a = this.#S(() => ur(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, gr(this.#o, () => {
				this.#o = null;
			}), this.#x(B));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = ur(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				br(this.#a, e);
				let t = this.#n.pending;
				this.#o = ur(() => t(this.#e));
			} else this.#x(B);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		ft(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = W, n = U, r = D;
		G(this.#i), Dn(this.#i), Pe(this.#i.ctx);
		try {
			return en.ensure(), e();
		} catch (e) {
			return st(e), null;
		} finally {
			G(t), Dn(n), Pe(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && gr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Be(() => {
			this.#d = !1, this.#m && _n(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		B?.is_fork ? (this.#a && B.skip_effect(this.#a), this.#o && B.skip_effect(this.#o), this.#s && B.skip_effect(this.#s), B.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (X(this.#a), null), this.#o &&= (X(this.#o), null), this.#s &&= (X(this.#s), null), O && (j(this.#t), Ke(), j(qe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return ur(() => {
						var r = W;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return ct(e, this.#i.parent), null;
				}
			}));
		};
		Be(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				ct(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => ct(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function jt(e, t, n, r) {
	let i = Le() ? Ft : Rt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = W, c = Mt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				ct(e, s);
			}
			Nt();
		}
	}
	var d = Pt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Lt(e))).then(u).catch((e) => ct(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Nt();
	}) : f();
}
function Mt() {
	var e = W, t = U, n = D, r = B;
	return function(i = !0) {
		G(e), Dn(t), Pe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Nt(e = !0) {
	G(null), Dn(null), Pe(null), e && B?.deactivate();
}
function Pt() {
	var e = W, t = e.b, n = B, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ft(e) {
	var n = 2 | t;
	return W !== null && (W.f |= s), {
		ctx: D,
		deps: null,
		effects: null,
		equals: fe,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: E,
		wv: 0,
		parent: W,
		ac: null
	};
}
var It = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Lt(e, t, n) {
	let r = W;
	r === null && ge();
	var i = void 0, a = mn(E), o = !U, s = /* @__PURE__ */ new Set();
	return or(() => {
		var t = W, n = de();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== b && n.reject(e);
			}).finally(Nt);
		} catch (e) {
			n.reject(e), Nt();
		}
		var c = B;
		if (o) {
			if (t.f & 32768) var l = Pt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(It);
			else for (let e of s.values()) e.reject(It);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== It && (c.activate(), t ? (a.f |= p, _n(a, t)) : (a.f & 8388608 && (a.f ^= p), _n(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), $n(() => {
		for (let e of s) e.reject(It);
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
function Rt(e) {
	let t = /* @__PURE__ */ Ft(e);
	return t.equals = me, t;
}
function zt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) X(t[n]);
	}
}
function Bt(e) {
	var t, n = W, r = e.parent;
	if (!wn && r !== null && e.v !== E && r.f & 24576) return He(), e.v;
	G(r);
	try {
		e.f &= ~u, zt(e), t = Bn(e);
	} finally {
		G(n);
	}
	return t;
}
function Vt(t) {
	var n = Bt(t);
	if (!t.equals(n) && (t.wv = Ln(), (!B?.is_fork || t.deps === null) && (B === null ? t.v = n : (B.capture(t, n, !0), Gt?.capture(t, n, !0)), t.deps === null))) {
		L(t, e);
		return;
	}
	wn || (Kt === null ? ut(t) : (Qn() || B?.is_fork) && Kt.set(t, n));
}
function Ht(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Et(() => {
		t.ac.abort(b), t.ac = null;
	}), t.fn !== null && (t.teardown = ce), Hn(t, 0), fr(t));
}
function Ut(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Un(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Wt = null, B = null, Gt = null, Kt = null, qt = null, Jt = !1, Yt = !1, Xt = null, Zt = null, Qt = 0, $t = 1, en = class r {
	id = $t++;
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
		Wt === null ? Wt = this : (Wt.#n = this, this.#t = Wt), Wt = this;
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
			for (var a of i.d) L(a, t), r(a);
			for (a of i.m) L(a, n), r(a);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Qt++ > 1e3 && (this.#x(), nn());
		for (let e of this.#u) this.#d.delete(e), L(e, t), this.schedule(e);
		for (let e of this.#d) L(e, n), this.schedule(e);
		let e = this.#c;
		this.#c = [], this.apply();
		var i = Xt = [], a = [], o = Zt = [];
		for (let t of e) try {
			this.#_(t, i, a);
		} catch (e) {
			throw un(t), this.#h() || this.discard(), e;
		}
		if (B = null, o.length > 0) {
			var s = r.ensure();
			for (let e of o) s.schedule(e);
		}
		if (Xt = null, Zt = null, this.#h()) {
			this.#b(a), this.#b(i);
			for (let [e, t] of this.#f) ln(e, t);
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
		this.#r.clear(), Gt = this, an(a), an(i), Gt = null, this.#s?.resolve();
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
				o ? i.f ^= e : a & 4 ? n.push(i) : Rn(i) && (a & 16 && this.#d.add(i), Un(i));
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
					i & 4194320 && !this.async_deriveds.has(a) && (this.#d.delete(a), L(a, t), this.schedule(a));
				}
			}
		};
		for (let e of this.current.keys()) n(e);
		this.oncommit(() => e.discard()), e.#x(), B = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) ft(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== E && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), Kt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		B = this;
	}
	deactivate() {
		B = null, Kt = null;
	}
	flush() {
		try {
			Yt = !0, B = this, this.#g();
		} finally {
			Qt = 0, qt = null, Xt = null, Zt = null, Yt = !1, B = null, Kt = null, fn.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(It);
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
		this.#m || (this.#m = !0, Be(() => {
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
			!Yt && !Jt && Be(() => {
				e.#e || e.flush();
			});
		}
		return B;
	}
	apply() {
		Kt = null;
	}
	schedule(t) {
		if (qt = t, t.b?.is_pending && t.f & 16777228 && !(t.f & 32768)) {
			t.b.defer_effect(t);
			return;
		}
		for (var n = t; n.parent !== null;) {
			n = n.parent;
			var r = n.f;
			if (Xt !== null && n === W && (U === null || !(U.f & 2)) && !yt) return;
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
			e === null || (e.#n = t), t === null ? Wt = e : t.#t = e, this.linked = !1;
		}
	}
};
function tn(e) {
	var t = Jt;
	Jt = !0;
	try {
		var n;
		for (e && (B !== null && !B.is_fork && B.flush(), n = e());;) {
			if (Ve(), B === null) return n;
			B.flush();
		}
	} finally {
		Jt = t;
	}
}
function nn() {
	try {
		xe();
	} catch (e) {
		ct(e, qt);
	}
}
var rn = null;
function an(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Rn(r) && (rn = /* @__PURE__ */ new Set(), Un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && hr(r), rn?.size > 0)) {
				fn.clear();
				for (let e of rn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) rn.has(n) && (rn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Un(n);
					}
				}
				rn.clear();
			}
		}
		rn = null;
	}
}
function on(e, n, r, i) {
	if (!r.has(e) && (r.add(e), e.reactions !== null)) for (let a of e.reactions) {
		let e = a.f;
		e & 2 ? on(a, n, r, i) : e & 4194320 && !(e & 2048) && sn(a, n, i) && (L(a, t), cn(a));
	}
}
function sn(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (ne.call(t, r)) return !0;
		if (r.f & 2 && sn(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function cn(e) {
	B.schedule(e);
}
function ln(t, n) {
	if (!(t.f & 32 && t.f & 1024)) {
		t.f & 2048 ? n.d.push(t) : t.f & 4096 && n.m.push(t), L(t, e);
		for (var r = t.first; r !== null;) ln(r, n), r = r.next;
	}
}
function un(t) {
	L(t, e);
	for (var n = t.first; n !== null;) un(n), n = n.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var dn = /* @__PURE__ */ new Set(), fn = /* @__PURE__ */ new Map(), pn = !1;
function mn(e, t) {
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
function hn(e, t) {
	let n = mn(e, t);
	return kn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function V(e, t = !1, n = !0) {
	let r = mn(e);
	return t || (r.equals = me), Oe && n && D !== null && D.l !== null && (D.l.s ??= []).push(r), r;
}
function gn(e, t) {
	return H(e, J(() => q(e))), t;
}
function H(e, t, n = !1) {
	return U !== null && (!En || U.f & 131072) && Le() && U.f & 4325394 && (On === null || !On.has(e)) && Ee(), _n(e, n ? Ye(t) : t, Zt);
}
function _n(e, n, r = null) {
	if (!e.equals(n)) {
		fn.set(e, wn ? n : e.v);
		var i = en.ensure();
		if (i.capture(e, n), e.f & 2) {
			let t = e;
			e.f & 2048 && Bt(t), Kt === null && ut(t);
		}
		e.wv = Ln(), xn(e, t, r), Le() && W !== null && W.f & 1024 && !(W.f & 96) && (jn === null ? Mn([e]) : jn.push(e)), !i.is_fork && dn.size > 0 && !pn && vn();
	}
	return n;
}
function vn() {
	pn = !1;
	for (let e of dn) {
		e.f & 1024 && L(e, n);
		let t;
		try {
			t = Rn(e);
		} catch {
			t = !0;
		}
		t && Un(e);
	}
	dn.clear();
}
function yn(e, t = 1) {
	var n = q(e), r = t === 1 ? n++ : n--;
	return H(e, n), r;
}
function bn(e) {
	H(e, e.v + 1);
}
function xn(e, r, i) {
	var a = e.reactions;
	if (a !== null) for (var o = Le(), s = a.length, c = 0; c < s; c++) {
		var l = a[c], d = l.f;
		if (!(!o && l === W)) {
			var f = (d & t) === 0;
			if (f && L(l, r), d & 131072) dn.add(l);
			else if (d & 2) {
				var p = l;
				Kt?.delete(p), d & 65536 || (d & 512 && (W === null || !(W.f & 2097152)) && (l.f |= u), xn(p, n, i));
			} else if (f) {
				var m = l;
				d & 16 && rn !== null && rn.add(m), i === null ? cn(m) : i.push(m);
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Sn = null, Cn = !1, wn = !1;
function Tn(e) {
	wn = e;
}
var U = null, En = !1;
function Dn(e) {
	U = e;
}
var W = null;
function G(e) {
	W = e;
}
var On = null;
function kn(e) {
	U !== null && (On ??= /* @__PURE__ */ new Set()).add(e);
}
var K = null, An = 0, jn = null;
function Mn(e) {
	jn = e;
}
var Nn = 1, Pn = 0, Fn = Pn;
function In(e) {
	Fn = e;
}
function Ln() {
	return ++Nn;
}
function Rn(t) {
	var n = t.f;
	if (n & 2048) return !0;
	if (n & 2 && (t.f &= ~u), n & 4096) {
		for (var r = t.deps, i = r.length, a = 0; a < i; a++) {
			var o = r[a];
			if (Rn(o) && Vt(o), o.wv > t.wv) return !0;
		}
		n & 512 && Kt === null && L(t, e);
	}
	return !1;
}
function zn(e, r, i = !0) {
	var a = e.reactions;
	if (a !== null && !(On !== null && On.has(e))) for (var o = 0; o < a.length; o++) {
		var s = a[o];
		s.f & 2 ? zn(s, r, !1) : r === s && (i ? L(s, t) : s.f & 1024 && L(s, n), cn(s));
	}
}
function Bn(e) {
	var t = K, n = An, r = jn, a = U, o = On, s = D, c = En, l = Fn, u = e.f;
	K = null, An = 0, jn = null, U = u & 96 ? null : e, On = null, Pe(e.ctx), En = !1, Fn = ++Pn, e.ac !== null && (Et(() => {
		e.ac.abort(b);
	}), e.ac = null);
	try {
		e.f |= d;
		var f = e.fn, m = f();
		e.f |= i;
		var h = e.deps, g = B?.is_fork;
		if (K !== null) {
			var _;
			if (g || Hn(e, An), h !== null && An > 0) for (h.length = An + K.length, _ = 0; _ < K.length; _++) h[An + _] = K[_];
			else e.deps = h = K;
			if (Qn() && e.f & 512) for (_ = An; _ < h.length; _++) (h[_].reactions ??= []).push(e);
		} else !g && h !== null && An < h.length && (Hn(e, An), h.length = An);
		if (Le() && jn !== null && !En && h !== null && !(e.f & 6146)) for (_ = 0; _ < jn.length; _++) zn(jn[_], e);
		if (a !== null && a !== e) {
			if (Pn++, a.deps !== null) for (let e = 0; e < n; e += 1) a.deps[e].rv = Pn;
			if (t !== null) for (let e of t) e.rv = Pn;
			jn !== null && (r === null ? r = jn : r.push(...jn));
		}
		return e.f & 8388608 && (e.f ^= p), m;
	} catch (e) {
		return st(e);
	} finally {
		e.f ^= d, K = t, An = n, jn = r, U = a, On = o, Pe(s), En = c, Fn = l;
	}
}
function Vn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var i = te.call(r, e);
		if (i !== -1) {
			var a = r.length - 1;
			a === 0 ? r = n.reactions = null : (r[i] = r[a], r.pop());
		}
	}
	if (r === null && n.f & 2 && (K === null || !ne.call(K, n))) {
		var o = n;
		o.f & 512 && (o.f ^= 512, o.f &= ~u), o.v !== E && ut(o), o.ac !== null && Et(() => {
			o.ac.abort(b), o.ac = null, L(o, t);
		}), Ht(o), Hn(o, 0);
	}
}
function Hn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Vn(e, n[r]);
}
function Un(t) {
	var n = t.f;
	if (!(n & 16384)) {
		L(t, e);
		var r = W, i = Cn;
		W = t, Cn = (n & 96) == 0;
		try {
			n & 16777232 ? pr(t) : fr(t), dr(t);
			var a = Bn(t);
			t.teardown = typeof a == "function" ? a : null, t.wv = Nn;
		} finally {
			Cn = i, W = r;
		}
	}
}
async function Wn() {
	await Promise.resolve(), tn();
}
function q(e) {
	var t = (e.f & 2) != 0;
	if (Sn?.add(e), U !== null && !En && !(W !== null && W.f & 16384) && (On === null || !On.has(e))) {
		var n = U.deps;
		if (U.f & 2097152) e.rv < Pn && (e.rv = Pn, K === null && n !== null && n[An] === e ? An++ : K === null ? K = [e] : K.push(e));
		else {
			U.deps ??= [], ne.call(U.deps, e) || U.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [U] : ne.call(r, U) || r.push(U);
		}
	}
	if (wn && fn.has(e)) return fn.get(e);
	if (t) {
		var a = e;
		if (wn) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Kn(a)) && (o = Bt(a)), fn.set(a, o), o;
		}
		var s = (a.f & 512) == 0 && !En && U !== null && (Cn || (U.f & 512) != 0), c = (a.f & i) == 0;
		Rn(a) && (s && (a.f |= 512), Vt(a)), s && !c && (Ut(a), Gn(a));
	}
	if (Kt?.has(e)) return Kt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Gn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ut(t), Gn(t));
}
function Kn(e) {
	if (e.v === E) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (fn.has(t) || t.f & 2 && Kn(t)) return !0;
	return !1;
}
function J(e) {
	var t = En;
	try {
		return En = !0, e();
	} finally {
		En = t;
	}
}
function qn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (m in e) Jn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && m in n && Jn(n);
		}
	}
}
function Jn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Jn(e[n], t);
		} catch {}
		let n = oe(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = re(n);
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
function Yn(e) {
	W === null && (U === null && be(e), ye()), wn && ve(e);
}
function Xn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Zn(e, n) {
	var i = W;
	i !== null && i.f & 8192 && (e |= r);
	var a = {
		ctx: D,
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
	if (e & 4) Xt === null ? en.ensure().schedule(a) : Xt.push(a);
	else if (n !== null) {
		try {
			Un(a);
		} catch (e) {
			throw X(a), e;
		}
		s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & 524288) && (s = s.first, e & 16 && e & 65536 && s !== null && (s.f |= o));
	}
	if (s !== null && (s.parent = i, i !== null && Xn(s, i), U !== null && U.f & 2 && !(e & 64))) {
		var c = U;
		(c.effects ??= []).push(s);
	}
	return a;
}
function Qn() {
	return U !== null && !En;
}
function $n(t) {
	let n = Zn(8, null);
	return L(n, e), n.teardown = t, n;
}
function er(e) {
	Yn("$effect");
	var t = W.f;
	if (!U && t & 32 && D !== null && !D.i) {
		var n = D;
		(n.e ??= []).push(e);
	} else return tr(e);
}
function tr(e) {
	return Zn(4 | c, e);
}
function nr(e) {
	return Yn("$effect.pre"), Zn(8 | c, e);
}
function rr(e) {
	en.ensure();
	let t = Zn(64 | s, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? gr(t, () => {
			X(t), n(void 0);
		}) : (X(t), n(void 0));
	});
}
function ir(e) {
	return Zn(4, e);
}
function Y(e, t) {
	var n = D, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = sr(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = W;
			try {
				G(n.parent), J(t);
			} finally {
				G(n);
			}
		}
	});
}
function ar() {
	var e = D;
	sr(() => {
		for (var t of e.l.$) {
			t.deps();
			var r = t.effect;
			r.f & 1024 && r.deps !== null && L(r, n), Rn(r) && Un(r), t.ran = !1;
		}
	});
}
function or(e) {
	return Zn(f | s, e);
}
function sr(e, t = 0) {
	return Zn(8 | t, e);
}
function cr(e, t = [], n = [], r = []) {
	jt(r, t, n, (t) => {
		Zn(8, () => {
			e(...t.map(q));
		});
	});
}
function lr(e, t = 0) {
	return Zn(16 | t, e);
}
function ur(e) {
	return Zn(32 | s, e);
}
function dr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = wn, n = U;
		Tn(!0), Dn(null);
		try {
			t.call(null);
		} finally {
			Tn(e), Dn(n);
		}
	}
}
function fr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Et(() => {
			e.abort(b);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : X(n, t), n = r;
	}
}
function pr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || X(t), t = n;
	}
}
function X(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (mr(e.nodes.start, e.nodes.end), n = !0), e.f |= a, fr(e, t && !n), Hn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	dr(e), e.f ^= a, e.f |= 16384;
	var i = e.parent;
	i !== null && i.first !== null && hr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function mr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ nt(e);
		e.remove(), e = n;
	}
}
function hr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gr(e, t, n = !0) {
	var r = [];
	_r(e, r, !0);
	var i = () => {
		n && X(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function _r(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= r;
		var i = e.nodes && e.nodes.t;
		if (i !== null) for (let e of i) (e.is_global || n) && t.push(e);
		for (var a = e.first; a !== null;) {
			var o = a.next;
			if (!(a.f & 64)) {
				var s = (a.f & 65536) != 0 || (a.f & 32) != 0 && (e.f & 16) != 0;
				_r(a, t, s ? n : !1);
			}
			a = o;
		}
	}
}
function vr(e) {
	yr(e, !0);
}
function yr(e, n) {
	if (e.f & 8192) {
		e.f ^= r, e.f & 1024 || (L(e, t), en.ensure().schedule(e));
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0;
			yr(i, o ? n : !1), i = a;
		}
		var s = e.nodes && e.nodes.t;
		if (s !== null) for (let e of s) (e.is_global || n) && e.in();
	}
}
function br(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ nt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var xr = Symbol("events"), Sr = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function wr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Er.call(t, e), !e.cancelBubble) return Et(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Be(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Z(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = wr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && $n(() => {
		t.removeEventListener(e, o, a);
	});
}
var Tr = null;
function Er(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Tr = e;
	var o = 0, s = Tr === e && e[xr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[xr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		w(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = U, d = W;
		Dn(null), G(null);
		try {
			for (var f, p = []; a !== null && a !== t;) {
				try {
					var m = a[xr]?.[r];
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
			e[xr] = t, delete e.currentTarget, Dn(u), G(d);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Dr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Or(e) {
	return Dr?.createHTML(e) ?? e;
}
function kr(e) {
	var t = ot("template");
	return t.innerHTML = Or(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Ar(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function jr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (O) return Ar(A, null), A;
		i === void 0 && (i = kr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ N(i)));
		var t = r || Ze ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ N(t), s = t.lastChild;
			Ar(o, s);
		} else Ar(t, t);
		return t;
	};
}
function Mr() {
	if (O) return Ar(A, null), A;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = tt();
	return e.append(t, n), Ar(t, n), e;
}
function Q(e, t) {
	if (O) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = A), Ge();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Nr = ["touchstart", "touchmove"];
function Pr(e) {
	return Nr.includes(e);
}
function Fr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[y] ??= e.nodeValue) && (e[y] = n, e.nodeValue = `${n}`);
}
function Ir(e, t) {
	return zr(e, t);
}
function Lr(e, t) {
	et(), t.intro = t.intro ?? !1;
	let n = t.target, r = O, i = A;
	try {
		for (var a = /* @__PURE__ */ N(n); a && (a.nodeType !== 8 || a.data !== "[");) a = /* @__PURE__ */ nt(a);
		if (!a) throw Ae;
		k(!0), j(a);
		let r = zr(e, {
			...t,
			anchor: a
		});
		return k(!1), r;
	} catch (r) {
		if (r instanceof Error && r.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw r;
		return r !== Ae && console.warn("Failed to hydrate: ", r), t.recover === !1 && Se(), et(), it(n), k(!1), Ir(e, t);
	} finally {
		k(r), j(i);
	}
}
var Rr = /* @__PURE__ */ new Map();
function zr(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	et();
	var c = void 0, l = rr(() => {
		var o = n ?? t.appendChild(tt());
		kt(o, { pending: () => {} }, (t) => {
			Fe({});
			var n = D;
			if (a && (n.c = a), i && (r.$$events = i), O && Ar(t, null), c = e(t, r) || {}, O && (W.nodes.end = A, A === null || A.nodeType !== 8 || A.data !== "]")) throw Ue(), Ae;
			Ie();
		}, s);
		var l = /* @__PURE__ */ new Set(), u = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!l.has(r)) {
					l.add(r);
					var i = Pr(r);
					for (let e of [t, document]) {
						var a = Rr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Rr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Er, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return u(C(Sr)), Cr.add(u), () => {
			for (var e of l) for (let n of [t, document]) {
				var r = Rr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Er), r.delete(e), r.size === 0 && Rr.delete(n)) : r.set(e, i);
			}
			Cr.delete(u), o !== n && o.parentNode?.removeChild(o);
		};
	});
	return Br.set(c, l), c;
}
var Br = /* @__PURE__ */ new WeakMap();
function Vr(e, t) {
	let n = Br.get(e);
	return n ? (Br.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Hr(e) {
	return new Ur(e);
}
var Ur = class {
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
				return q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === h ? !0 : (q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return H(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Lr : Ir)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && tn(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || w(this, e, {
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
			Vr(this.#t);
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
var Wr = class {
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
			if (n) vr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (vr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (X(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						br(r, t), t.append(tt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else X(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), gr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (X(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = B, r = at();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = tt();
			i.append(a), this.#n.set(e, {
				effect: ur(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, ur(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else O && (this.anchor = A), this.#a(n);
	}
};
function Gr(e) {
	D === null && he("onMount"), Oe && D.l !== null ? Yr(D).m.push(e) : er(() => {
		let t = J(e);
		if (typeof t == "function") return t;
	});
}
function Kr(e) {
	D === null && he("onDestroy"), Gr(() => () => J(e));
}
function qr(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
	return new CustomEvent(e, {
		detail: t,
		bubbles: n,
		cancelable: r
	});
}
function Jr() {
	let e = D;
	return e === null && he("createEventDispatcher"), (t, n, r) => {
		let i = e.s.$$events?.[t];
		if (i) {
			let a = S(i) ? i.slice() : [i], o = qr(t, n, r);
			for (let t of a) t.call(e.x, o);
			return !o.defaultPrevented;
		}
		return !0;
	};
}
function Yr(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Xr(e, t, n = !1) {
	var r;
	O && (r = A, Ge());
	var i = new Wr(e), a = n ? o : 0;
	function s(e, t) {
		if (O) {
			var n = Je(r);
			if (e !== parseInt(n.substring(1))) {
				var a = qe();
				j(a), i.anchor = a, k(!1), i.ensure(e, t), k(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	lr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, s(n, t);
		}), e || s(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Zr(e, t) {
	return t;
}
function Qr(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		gr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					$r(e, C(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, u = l.parentNode;
			it(u), u.append(l), e.items.clear();
		}
		$r(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function $r(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= l, br(a, document.createDocumentFragment())) : X(t[i], n);
	}
}
var ei;
function ti(e, t, n, r, i, a = null) {
	var o = e, s = /* @__PURE__ */ new Map();
	if (t & 4) {
		var c = e;
		o = O ? j(/* @__PURE__ */ N(c)) : c.appendChild(tt());
	}
	O && Ge();
	var u = null, d = /* @__PURE__ */ Rt(() => {
		var e = n();
		return S(e) ? e : e == null ? [] : C(e);
	}), f, p = /* @__PURE__ */ new Map(), m = !0;
	function h(e) {
		_.effect.f & 16384 || (_.pending.delete(e), _.fallback = u, ri(_, f, o, t, r), u !== null && (f.length === 0 ? u.f & 33554432 ? (u.f ^= l, ai(u, null, o)) : vr(u) : gr(u, () => {
			u = null;
		})));
	}
	function g(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: lr(() => {
			f = q(d);
			var e = f.length;
			let c = !1;
			O && Je(o) === "[!" != (e === 0) && (o = qe(), j(o), k(!1), c = !0);
			for (var _ = /* @__PURE__ */ new Set(), v = B, ee = at(), y = 0; y < e; y += 1) {
				O && A.nodeType === 8 && A.data === "]" && (o = A, c = !0, k(!1));
				var b = f[y], x = r(b, y), S = m ? null : s.get(x);
				S ? (S.v && _n(S.v, b), S.i && _n(S.i, y), ee && v.unskip_effect(S.e)) : (S = ii(s, m ? o : ei ??= tt(), b, x, y, i, t, n), m || (S.e.f |= l), s.set(x, S)), _.add(x);
			}
			if (e === 0 && a && !u && (m ? u = ur(() => a(o)) : (u = ur(() => a(ei ??= tt())), u.f |= l)), e > _.size && _e("", "", ""), O && e > 0 && j(qe()), !m) if (p.set(v, _), ee) {
				for (let [e, t] of s) _.has(e) || v.skip_effect(t.e);
				v.oncommit(h), v.ondiscard(g);
			} else h(v);
			c && k(!0), q(d);
		}),
		flags: t,
		items: s,
		pending: p,
		outrogroups: null,
		fallback: u
	};
	m = !1, O && (o = A);
}
function ni(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function ri(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = ni(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (vr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= l, _ === c) ai(_, null, n);
		else {
			var ee = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), oi(e, d, _), oi(e, _, ee), ai(_, ee, n), d = _, p = [], m = [], c = ni(d.next);
			continue;
		}
		if (_ !== c) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var y = m[0], b;
					d = y.prev;
					var x = p[0], S = p[p.length - 1];
					for (b = 0; b < p.length; b += 1) ai(p[b], y, n);
					for (b = 0; b < m.length; b += 1) u.delete(m[b]);
					oi(e, x.prev, S.next), oi(e, d, x), oi(e, S, y), c = y, d = S, --v, p = [], m = [];
				} else u.delete(_), ai(_, c, n), oi(e, _.prev, _.next), oi(e, _, d === null ? e.effect.first : d.next), oi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (u ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = ni(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = ni(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && ($r(e, C(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || u !== void 0) {
		var te = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || te.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && te.push(c), c = ni(c.next);
		var ne = te.length;
		if (ne > 0) {
			var w = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
			}
			Qr(e, te, w);
		}
	}
	a && Be(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function ii(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? mn(n) : /* @__PURE__ */ V(n, !1, !1) : null, l = o & 2 ? mn(i) : null;
	return {
		v: c,
		i: l,
		e: ur(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function ai(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ nt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function oi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function si(e, t, n = !1, r = !1, i = !1, a = !1) {
	var o = e, s = "";
	if (n) {
		var c = e;
		O && (o = j(/* @__PURE__ */ N(c)));
	}
	cr(() => {
		var e = W;
		if (s === (s = t() ?? "")) {
			O && Ge();
			return;
		}
		if (n && !O) {
			e.nodes = null, c.innerHTML = s, s !== "" && Ar(/* @__PURE__ */ N(c), c.lastChild);
			return;
		}
		if (e.nodes !== null && (mr(e.nodes.start, e.nodes.end), e.nodes = null), s !== "") {
			if (O) {
				for (var a = A.data, l = Ge(), u = l; l !== null && (l.nodeType !== 8 || l.data !== "");) u = l, l = /* @__PURE__ */ nt(l);
				if (l === null) throw Ue(), Ae;
				Ar(A, u), o = j(l);
				return;
			}
			var d = ot(r ? "svg" : i ? "math" : "template", r ? Me : i ? Ne : void 0);
			d.innerHTML = s;
			var f = r || i ? d : d.content;
			if (Ar(/* @__PURE__ */ N(f), f.lastChild), r || i) for (; /* @__PURE__ */ N(f);) o.before(/* @__PURE__ */ N(f));
			else o.before(f);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var ci = [..." 	\n\r\f\xA0\v﻿"];
function li(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ci.includes(r[o - 1])) && (s === r.length || ci.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ui(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function di(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function fi(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(di)), i && c.push(...Object.keys(i).map(di));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = di(e.substring(l, u).trim());
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
		return r && (n += ui(r)), i && (n += ui(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function pi(e, t, n, r, i, a) {
	var o = e[v];
	if (O || o !== n || o === void 0) {
		var s = li(n, r, a);
		(!O || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[v] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function mi(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function hi(e, t, n, r) {
	var i = e[ee];
	if (O || i !== t) {
		var a = fi(t, r);
		(!O || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[ee] = t;
	} else r && (Array.isArray(r) ? (mi(e, n?.[0], r[0]), mi(e, n?.[1], r[1], "important")) : mi(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var gi = Symbol("is custom element"), _i = Symbol("is html"), vi = x ? "link" : "LINK";
function $(e, t, n, r) {
	var i = yi(e);
	O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === vi) || i[t] !== (i[t] = n) && (t === "loading" && (e[g] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && xi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function yi(e) {
	return e[_] ??= {
		[gi]: e.nodeName.includes("-"),
		[_i]: e.namespaceURI === je
	};
}
var bi = /* @__PURE__ */ new Map();
function xi(e) {
	var t = e.getAttribute("is") || e.nodeName, n = bi.get(t);
	if (n) return n;
	bi.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = re(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = oe(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Si(e, t) {
	return e === t || e?.[m] === t;
}
function Ci(e = {}, t, n, r) {
	var i = D.r, a = W;
	return ir(() => {
		var o, s;
		return sr(() => {
			o = s, s = r?.() || [], J(() => {
				Si(n(...s), e) || (t(e, ...s), o && Si(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Si(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function wi(e = !1) {
	let t = D, n = t.l.u;
	if (!n) return;
	let r = () => qn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Ft(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => q(i);
	}
	n.b.length && nr(() => {
		Ti(t, r), ue(n.b);
	}), er(() => {
		let e = J(() => n.m.map(le));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && er(() => {
		Ti(t, r), ue(n.a);
	});
}
function Ti(e, t) {
	if (e.l.s) for (let t of e.l.s) q(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/misc.js
function Ei(e, t, n) {
	e.$$events ||= {}, e.$$events[t] ||= [], e.$$events[t].push(n);
}
function Di(e) {
	for (var t in e) t in this && (this[t] = e[t]);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var Oi = {
	get(e, t) {
		if (!e.exclude.includes(t)) return q(e.version), t in e.special ? e.special[t]() : e.props[t];
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = W;
			try {
				G(e.parent_effect), e.special[t] = Ai({ get [t]() {
					return e.props[t];
				} }, t, 4);
			} finally {
				G(r);
			}
		}
		return e.special[t](n), yn(e.version), !0;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) ? !0 : (e.exclude.push(t), yn(e.version), !0);
	},
	has(e, t) {
		return !e.exclude.includes(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function ki(e, t) {
	return new Proxy({
		props: e,
		exclude: t,
		special: {},
		version: mn(0),
		parent_effect: W
	}, Oi);
}
function Ai(e, t, n, r) {
	var i = !Oe || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Ft(r), q(l)) : (c && (c = !1, s = o ? J(r) : r), s);
	let d;
	if (a) {
		var f = m in e || h in e;
		d = T(e, t)?.set ?? (f && t in e ? (n) => e[t] = n : void 0);
	}
	var p, g = !1;
	a ? [p, g] = Tt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = u(), d && (i && Ce(t), d(p)));
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
	var ee = !1, y = (n & 1 ? Ft : Rt)(() => (ee = !1, _()));
	a && q(y);
	var b = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? q(y) : i && a ? Ye(e) : e;
			return H(y, n), ee = !0, s !== void 0 && (s = n), e;
		}
		return wn && ee || b.f & 16384 ? y.v : q(y);
	});
}
//#endregion
//#region src/lib/utils.ts
var ji = (e) => {
	let t = (e) => e < 10 ? "0" + e : "" + e, n = Math.floor(e / 3600), r = Math.floor((e - n * 3600) / 60), i = Math.floor(e - n * 3600 - r * 60);
	return (n > 0 ? [
		n,
		r,
		i
	] : [r, i]).map(t).join(":");
}, Mi = !(typeof window > "u") && /mobile/i.test(window.navigator.userAgent);
function Ni(e) {
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
function Pi(e, t) {
	let n = e[t];
	return !(n == null || n === "false");
}
console.log("\n %c Svelte APlayer v0.1.2 %c http://svelte-aplayer.js.org\n\n", "color: #fff; background: #ff3e00; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
//#endregion
//#region src/lib/store.ts
var Fi = [];
function Ii(e) {
	let t = document.createElement("audio");
	Fi.push(t), Li(t, e);
	let n = gt(0), r = gt(NaN), i = _t([n, r], ([e, t]) => {
		let n = e / t;
		return n = Math.max(n, 0), n = Math.min(n, 1), n *= 100, {
			ptime: ji(e),
			duration: ji(t),
			playPercentage: `${n}%`
		};
	}), a = gt(0), o = _t([a, r], ([e, t]) => {
		let n = e / t;
		return n = Math.max(n, 0), n = Math.min(n, 1), n *= 100, {
			bufferPercentage: `${n}%`,
			bufTime: e
		};
	}), s = gt({
		playingIndex: 0,
		audio: []
	}), c = _t(s, (e) => e.audio), l = gt({
		volume: .7,
		loop: "all",
		order: "list",
		showList: !0
	}), u = _t(l, (e) => ({
		volumePercentage: `${e.volume * 100}%`,
		muted: e.volume === 0
	})), d = _t(s, (e) => e.audio[e.playingIndex]), f = _t([o, n], ([{ bufTime: e }, n]) => t.paused ? !1 : t.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA || e - n < 2 && t.readyState === HTMLMediaElement.HAVE_FUTURE_DATA), p = _t(d, (e, t) => {
		if (!e || !e.lrc) {
			t([]);
			return;
		}
		let n = e.lrc;
		if (n.startsWith("http")) {
			let e = new AbortController();
			return t([]), fetch(n, { signal: e.signal }).then((e) => {
				if (!e.ok) throw Error(`${e.statusText} canot loading lrc from ${n}`);
				return e.text();
			}).then((n) => {
				e.signal.aborted || t(Ni(n));
			}).catch((n) => {
				e.signal.aborted || (t([]), console.error(n));
			}), () => e.abort();
		} else t(Ni(n));
	}, []), m = !1;
	d.subscribe((t) => {
		m && t && e("listswitch", t), m = !0;
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
function Li(e, t) {
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
var Ri = (e) => e instanceof MouseEvent ? e.clientY : e.changedTouches[0]?.clientY ?? 0;
function zi(e, t) {
	let n = !1;
	return {
		volumeDragStart: () => {
			n = !0;
		},
		volumeDragMove: (r) => {
			if (n) {
				let n = 1 - (Ri(r) - t.getBoundingClientRect().top) / t.clientHeight;
				n = Math.max(n, 0), n = Math.min(n, 1), e.volume = n;
			}
		},
		volumeDragEnd: (r) => {
			if (n) {
				let i = 1 - (Ri(r) - t.getBoundingClientRect().top) / t.clientHeight;
				i = Math.max(i, 0), i = Math.min(i, 1), e.volume = i, n = !1;
			}
		}
	};
}
//#endregion
//#region src/lib/progress-handlers.ts
var Bi = (e) => e instanceof MouseEvent ? e.clientX : e.changedTouches[0]?.clientX ?? 0;
function Vi(e, t) {
	let n = !1;
	return {
		progressDragStart: () => {
			n = !0;
		},
		progressDragMove: (r) => {
			if (n) {
				let n = (Bi(r) - t.getBoundingClientRect().left) / t.clientWidth;
				n = Math.max(n, 0), n = Math.min(n, 1), e.currentTime = e.duration * n;
			}
		},
		progressDragEnd: (r) => {
			if (n) {
				n = !1;
				let i = (Bi(r) - t.getBoundingClientRect().left) / t.clientWidth;
				i = Math.max(i, 0), i = Math.min(i, 1), e.currentTime = e.duration * i;
			}
		}
	};
}
//#endregion
//#region src/assets/svg.ts
var Hi = "<svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  version=\"1.1\"\n                  viewBox=\"0 0 28 32\"\n                  ><path\n                    d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z\"\n                  /></svg\n        >", Ui = "<svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  version=\"1.1\"\n                  viewBox=\"0 0 28 32\"\n                  ><path\n                    d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z\"\n                  /></svg\n                >", Wi = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 32 32\"\n                ><path\n                  d=\"M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z\"\n                /></svg\n              >", Gi = "<svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    version=\"1.1\"\n                    viewBox=\"0 0 32 32\"\n                    ><path\n                      d=\"M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z\"\n                    /></svg\n                  >", Ki = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 32 32\"\n                ><path\n                  d=\"M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z\"\n                /></svg\n              >", qi = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 33 32\"\n                ><path\n                  d=\"M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z\"\n                /></svg\n              >", Ji = " <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 29 32\"\n                ><path\n                  d=\"M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z\"\n                /></svg\n              >", Yi = "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                version=\"1.1\"\n                viewBox=\"0 0 29 32\"\n                ><path\n                  d=\"M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z\"\n                /></svg\n              >", Xi = /* @__PURE__ */ jr("<span class=\"aplayer-button aplayer-pause svelte-es3fdp\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 17 32\" class=\"svelte-es3fdp\"><path d=\"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z\" class=\"svelte-es3fdp\"></path></svg></span>"), Zi = /* @__PURE__ */ jr("<span class=\"aplayer-button aplayer-play svelte-es3fdp\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 31\" class=\"svelte-es3fdp\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\" class=\"svelte-es3fdp\"></path></svg></span>"), Qi = /* @__PURE__ */ jr("<p> </p>"), $i = /* @__PURE__ */ jr("<div class=\"aplayer-lrc svelte-es3fdp\"><div class=\"aplayer-lrc-contents svelte-es3fdp\"></div></div>"), ea = /* @__PURE__ */ jr("<button type=\"button\" class=\"aplayer-icon aplayer-icon-order svelte-es3fdp\" aria-label=\"Shuffle\"><!></button>"), ta = /* @__PURE__ */ jr("<button type=\"button\" class=\"aplayer-icon aplayer-icon-menu svelte-es3fdp\" aria-label=\"Playlist\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 22 32\" class=\"svelte-es3fdp\"><path d=\"M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z\" class=\"svelte-es3fdp\"></path></svg></button>"), na = /* @__PURE__ */ jr("<span class=\"aplayer-list-cur svelte-es3fdp\"></span>"), ra = /* @__PURE__ */ jr("<li class=\"svelte-es3fdp\"><button type=\"button\" class=\"aplayer-track svelte-es3fdp\"><!> <span class=\"aplayer-list-index svelte-es3fdp\"></span> <span class=\"aplayer-list-title svelte-es3fdp\"> </span> <span class=\"aplayer-list-artist svelte-es3fdp\"> </span></button></li>"), ia = /* @__PURE__ */ jr("<div><div class=\"aplayer-body svelte-es3fdp\"><button type=\"button\" class=\"aplayer-pic svelte-es3fdp\"><!></button> <div class=\"aplayer-info svelte-es3fdp\"><div class=\"aplayer-music svelte-es3fdp\"><span class=\"aplayer-title svelte-es3fdp\"> </span> <span class=\"aplayer-artist svelte-es3fdp\"> </span></div> <!> <div class=\"aplayer-controller svelte-es3fdp\"><div class=\"aplayer-bar-wrap svelte-es3fdp\" role=\"slider\" tabindex=\"0\" aria-label=\"Playback position\"><div class=\"aplayer-bar svelte-es3fdp\"><div class=\"aplayer-loaded svelte-es3fdp\"></div> <div class=\"aplayer-played svelte-es3fdp\"><div class=\"aplayer-thumb svelte-es3fdp\"><span class=\"aplayer-loading-icon svelte-es3fdp\"></span></div></div></div></div> <div class=\"aplayer-time svelte-es3fdp\"><span class=\"aplayer-time-inner svelte-es3fdp\"><span class=\"aplayer-ptime svelte-es3fdp\"> </span> / <span class=\"aplayer-dtime svelte-es3fdp\"> </span></span> <span hidden=\"\" class=\"svelte-es3fdp\"></span> <div class=\"aplayer-volume-wrap svelte-es3fdp\"><button type=\"button\" class=\"aplayer-icon aplayer-icon-volume-down svelte-es3fdp\" aria-label=\"Mute\"><!></button> <div class=\"aplayer-volume-bar-wrap svelte-es3fdp\" role=\"slider\" tabindex=\"0\" aria-label=\"Volume\" aria-orientation=\"vertical\"><div class=\"aplayer-volume-bar svelte-es3fdp\"><div class=\"aplayer-volume svelte-es3fdp\"></div></div></div></div> <!> <button type=\"button\" class=\"aplayer-icon aplayer-icon-loop svelte-es3fdp\"><!></button> <!></div></div></div> <div class=\"aplayer-list svelte-es3fdp\"><ol class=\"svelte-es3fdp\"></ol></div></div></div>");
function aa(e, t) {
	if (new.target) return Hr({
		component: aa,
		...e
	});
	let n = ki(t, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	Fe(t, !1);
	let r = () => St(fe, "$controlState", m), i = () => St(T, "$playList", m), a = () => St(re, "$audioList", m), o = () => St(ie, "$currentSong", m), s = () => St(de, "$lrc", m), c = () => St(oe, "$currentTime", m), l = () => St(se, "$duration", m), u = () => St(ce, "$rdBufTime", m), d = () => St(ae, "$rdTime", m), f = () => St(ue, "$loading", m), p = () => St(pe, "$volumeState", m), [m, h] = wt(), g = /* @__PURE__ */ V(), _ = /* @__PURE__ */ V(), v = /* @__PURE__ */ V(), ee = /* @__PURE__ */ V(), y = /* @__PURE__ */ V(), b = /* @__PURE__ */ V(), x = /* @__PURE__ */ V(), S = /* @__PURE__ */ V(), te = Jr(), ne = (e, t) => {
		te(e, t);
		let n = q(S)?.getRootNode();
		n instanceof ShadowRoot && n.host.dispatchEvent(new CustomEvent(e, { detail: t }));
	}, C = Ii(ne), w = /* @__PURE__ */ V(C.player), T = C.playList, re = C.audioList, ie = C.currentSong, ae = C.rdTime, oe = C.currentTime, se = C.duration, ce = C.rdBufTime, le = C.wtBufTime, ue = C.loading, de = C.lrc, fe = C.controlState, pe = C.volumeState, me = /* @__PURE__ */ V(q(w).paused), he = /* @__PURE__ */ V(q(w).muted);
	q(w).addEventListener("play", () => {
		H(me, !1);
	}), q(w).addEventListener("pause", () => {
		H(me, !0);
	});
	let ge = Ai(t, "audio", 12, void 0), _e = Ai(t, "order", 28, () => r().order), ve = Ai(t, "loop", 28, () => r().loop), ye = Ai(t, "volume", 28, () => r().volume), be = Ai(t, "mini", 12, !1), xe = Ai(t, "mutex", 12, !0), Se = Ai(t, "autoplay", 12, !1), Ce = Ai(t, "theme", 12, "#fadfa3"), we = Ai(t, "list_max_height", 12, Infinity), Te, Ee = !1, De, Oe = (e) => {
		let t = e == null ? [] : Array.isArray(e) ? e : [e];
		clearTimeout(De), Te = Ee || !Se(), t.length > 0 && (Ee = !0), Ct(T, {
			audio: t,
			playingIndex: 0
		});
	}, ke = Ai(t, "base_font_size", 12, "12"), Ae = () => {
		o() && (xe() && Fi.forEach((e) => e.pause()), q(w).play().catch((e) => {
			console.error(e);
		}));
	}, E = /* @__PURE__ */ V(-1), je = (e) => {
		H(E, -1), e ? (gn(w, q(w).src = e.url), Te || Ae()) : (q(w).pause(), q(w).hasAttribute("src") && (q(w).removeAttribute("src"), q(w).load()), Ct(oe, 0), Ct(se, NaN), Ct(le, 0)), Te = !1;
	};
	q(w).addEventListener("timeupdate", () => {
		if (Ct(oe, q(w).currentTime), q(b).includes("lrc")) {
			for (; q(E) > 0 && q(w).currentTime < s()[q(E)][0];) yn(E, -1);
			for (; q(E) + 1 < s().length && q(w).currentTime >= s()[q(E) + 1][0];) yn(E);
		}
	}), q(w).addEventListener("volumechange", () => {
		H(he, q(w).muted), z(fe, J(r).volume = q(w).volume, J(r));
	}), q(w).addEventListener("loadedmetadata", () => {
		Ct(se, q(w).duration);
	}), q(w).addEventListener("error", () => {
		console.warn("An audio error has occurred, player will skip forward in 2 seconds."), a().length > 1 && (De = setTimeout(() => {
			z(T, J(i).playingIndex = (i().playingIndex + 1) % a().length, J(i)), q(w).paused && Ae();
		}, 2e3));
	});
	let Me = () => {
		let e = q(w).buffered.length ? q(w).buffered.end(q(w).buffered.length - 1) : 0;
		Ct(le, e);
	};
	q(w).addEventListener("progress", Me), q(w).addEventListener("canplay", Me), q(w).addEventListener("durationchange", () => {
		Ct(se, q(w).duration);
	});
	let Ne = () => {
		let e = a();
		if (e.length === 0) return;
		let t = (i().playingIndex + 1) % e.length;
		if (r().loop === "none") {
			if (r().order === "list") i().playingIndex < e.length - 1 ? (z(T, J(i).playingIndex = t, J(i)), gn(w, q(w).currentTime = 0)) : (z(T, J(i).playingIndex = (i().playingIndex + 1) % e.length, J(i)), Te = !0, q(w).pause());
			else if (r().order === "random") {
				let n = Math.floor(e.length * Math.random());
				n === i().playingIndex ? z(T, J(i).playingIndex = t, J(i)) : z(T, J(i).playingIndex = n, J(i)), gn(w, q(w).currentTime = 0);
			}
		} else r().loop === "one" ? gn(w, q(w).currentTime = 0) : r().loop === "all" && z(T, J(i).playingIndex = t, J(i));
	};
	q(w).addEventListener("ended", () => {
		q(w).paused || Ne();
	});
	let D = (e, t, n, r) => {
		let i;
		switch (e.key) {
			case "ArrowRight":
			case "ArrowUp":
				i = t + r;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				i = t - r;
				break;
			case "Home":
				i = 0;
				break;
			case "End":
				i = n;
				break;
			default: return;
		}
		return e.preventDefault(), Math.min(n, Math.max(0, i));
	}, Pe = (e) => {
		let t = D(e, q(w).currentTime, q(x), 5);
		t !== void 0 && q(x) > 0 && (gn(w, q(w).currentTime = t), Ct(oe, t));
	}, Le = (e) => {
		let t = D(e, q(w).volume, 1, .05);
		t !== void 0 && (gn(w, q(w).volume = t), gn(w, q(w).muted = !1));
	}, Re = /* @__PURE__ */ V(), ze = /* @__PURE__ */ V(), Be = /* @__PURE__ */ V(() => {}), Ve = /* @__PURE__ */ V(() => {}), He = /* @__PURE__ */ V(() => {}), Ue = /* @__PURE__ */ V(() => {}), We = /* @__PURE__ */ V(() => {}), O = /* @__PURE__ */ V(() => {}), k = /* @__PURE__ */ V();
	Gr(() => {
		location.hostname === "localhost" && window && (window.theAudio = q(w));
		let e = zi(q(w), q(Re));
		H(Be, e.volumeDragStart), H(Ve, e.volumeDragMove), H(He, e.volumeDragEnd);
		let t = Vi(q(w), q(ze));
		H(Ue, t.progressDragStart), H(We, t.progressDragMove), H(O, t.progressDragEnd), q(k)?.addEventListener("transitionend", () => {
			H(v, Math.min(q(k)?.scrollHeight ?? 0, we()));
		});
	}), Kr(() => {
		clearTimeout(De), q(w).pause();
		let e = Fi.indexOf(q(w));
		e !== -1 && Fi.splice(e, 1), ne("destroy");
	}), Y(() => qn(ge()), () => {
		H(g, typeof ge() == "string" ? JSON.parse(ge()) : ge());
	}), Y(() => q(g), () => {
		Oe(q(g));
	}), Y(() => (qn(n), a()), () => {
		H(_, !Pi(n, "list_folded") && a().length > 1);
	}), Y(() => q(_), () => {
		z(fe, J(r).showList = q(_), J(r));
	}), Y(() => qn(ve()), () => {
		z(fe, J(r).loop = ve(), J(r));
	}), Y(() => qn(_e()), () => {
		z(fe, J(r).order = _e(), J(r));
	}), Y(() => qn(ye()), () => {
		z(fe, J(r).volume = ye(), J(r));
	}), Y(() => (q(k), qn(we())), () => {
		H(v, Math.min(q(k)?.scrollHeight ?? 0, we()));
	}), Y(() => (a(), q(k), qn(we())), () => {
		a(), Wn().then(() => {
			H(v, Math.min(q(k)?.scrollHeight ?? 0, we()));
		});
	}), Y(() => qn(ye()), () => {
		gn(w, q(w).volume = ye());
	}), Y(() => (o(), qn(Ce())), () => {
		H(ee, o()?.theme ?? Ce());
	}), Y(() => qn(ke()), () => {
		H(y, (String(ke()).match(/^\d+/)?.[0] ?? "12") + "px");
	}), Y(() => (q(S), q(ee), q(y)), () => {
		q(S) && (q(S).style.setProperty("--theme-color", q(ee)), q(S).style.setProperty("--base-font-size", q(y)));
	}), Y(() => s(), () => {
		H(b, s() && s().length > 0 ? "withlrc" : "");
	}), Y(() => o(), () => {
		je(o());
	}), Y(() => l(), () => {
		H(x, Number.isFinite(l()) && l() > 0 ? l() : 0);
	}), ar();
	var A = {
		get audio() {
			return ge();
		},
		set audio(e) {
			ge(e), tn();
		},
		get order() {
			return _e();
		},
		set order(e) {
			_e(e), tn();
		},
		get loop() {
			return ve();
		},
		set loop(e) {
			ve(e), tn();
		},
		get volume() {
			return ye();
		},
		set volume(e) {
			ye(e), tn();
		},
		get mini() {
			return be();
		},
		set mini(e) {
			be(e), tn();
		},
		get mutex() {
			return xe();
		},
		set mutex(e) {
			xe(e), tn();
		},
		get autoplay() {
			return Se();
		},
		set autoplay(e) {
			Se(e), tn();
		},
		get theme() {
			return Ce();
		},
		set theme(e) {
			Ce(e), tn();
		},
		get list_max_height() {
			return we();
		},
		set list_max_height(e) {
			we(e), tn();
		},
		get base_font_size() {
			return ke();
		},
		set base_font_size(e) {
			ke(e), tn();
		},
		$set: Di,
		$on: (e, n) => Ei(t, e, n)
	};
	wi();
	var j = ia();
	let Ge;
	var Ke = P(j), qe = P(Ke);
	let Je;
	var Ye = P(qe), Xe = (e) => {
		Q(e, Xi());
	}, Ze = (e) => {
		Q(e, Zi());
	};
	Xr(Ye, (e) => {
		q(me) ? e(Ze, -1) : e(Xe);
	}), M(qe);
	var Qe = F(qe, 2), $e = P(Qe), et = P($e), tt = P(et, !0);
	M(et);
	var N = F(et, 2), nt = P(N, !0);
	M(N), M($e);
	var it = F($e, 2), at = (e) => {
		var t = $i(), n = P(t);
		ti(n, 7, s, (e) => e[0], (e, t, n) => {
			var r = Qi();
			let i;
			var a = P(r, !0);
			M(r), cr(() => {
				i = pi(r, 1, "svelte-es3fdp", null, i, { "aplayer-lrc-current": q(n) === q(E) }), Fr(a, (q(t), J(() => q(t)[1])));
			}), Q(e, r);
		}), M(n), M(t), cr((e) => hi(n, `transform: translateY(calc(${e ?? ""} * -1 * calc(var(--base-font-size) + 4px)))`), [() => (q(E), J(() => Math.max(q(E), 0)))]), Q(e, t);
	};
	Xr(it, (e) => {
		o(), J(() => o()?.lrc) && e(at);
	});
	var ot = F(it, 2), I = P(ot);
	$(I, "aria-valuemin", 0);
	var st = P(I), ct = P(st), lt = F(ct, 2), L = P(lt), ut = P(L);
	si(ut, () => Gi, !0), M(ut), M(L), M(lt), M(st), M(I), Ci(I, (e) => H(ze, e), () => q(ze));
	var dt = F(I, 2), ft = P(dt), pt = P(ft), mt = P(pt, !0);
	M(pt);
	var ht = F(pt, 2), gt = P(ht, !0);
	M(ht), M(ft);
	var _t = F(ft, 4), vt = P(_t), yt = P(vt), bt = (e) => {
		var t = Mr();
		si(rt(t), () => Ui), Q(e, t);
	}, xt = (e) => {
		var t = Mr();
		si(rt(t), () => Hi), Q(e, t);
	};
	Xr(yt, (e) => {
		p(), q(w), J(() => p().muted || q(w).muted) ? e(bt) : e(xt, -1);
	}), M(vt);
	var R = F(vt, 2);
	$(R, "aria-valuemin", 0), $(R, "aria-valuemax", 100);
	var Tt = P(R), Et = P(Tt);
	M(Tt), Ci(Tt, (e) => H(Re, e), () => q(Re)), M(R), M(_t);
	var Dt = F(_t, 2), Ot = (e) => {
		var t = ea(), n = P(t), i = (e) => {
			var t = Mr();
			si(rt(t), () => Wi), Q(e, t);
		}, a = (e) => {
			var t = Mr();
			si(rt(t), () => Ki), Q(e, t);
		};
		Xr(n, (e) => {
			r(), J(() => r().order === "random") ? e(i) : e(a, -1);
		}), M(t), cr(() => $(t, "aria-pressed", (r(), J(() => r().order === "random")))), Z("click", t, () => {
			z(fe, J(r).order = r().order === "list" ? "random" : "list", J(r));
		}), Q(e, t);
	};
	Xr(Dt, (e) => {
		a(), J(() => a().length > 1) && e(Ot);
	});
	var kt = F(Dt, 2), At = P(kt), jt = (e) => {
		var t = Mr();
		si(rt(t), () => Yi), Q(e, t);
	}, Mt = (e) => {
		var t = Mr();
		si(rt(t), () => qi), Q(e, t);
	}, Nt = (e) => {
		var t = Mr();
		si(rt(t), () => Ji), Q(e, t);
	};
	Xr(At, (e) => {
		r(), J(() => r().loop === "none") ? e(jt) : (r(), J(() => r().loop === "one") ? e(Mt, 1) : (r(), J(() => r().loop === "all") && e(Nt, 2)));
	}), M(kt);
	var Pt = F(kt, 2), Ft = (e) => {
		var t = ta();
		cr(() => $(t, "aria-expanded", (r(), J(() => r().showList)))), Z("click", t, () => {
			z(fe, J(r).showList = !r().showList, J(r)), r().showList ? ne("listshow") : ne("listhide");
		}), Q(e, t);
	};
	Xr(Pt, (e) => {
		a(), J(() => a().length > 1) && e(Ft);
	}), M(dt), M(ot), M(Qe);
	var It = F(Qe, 2), Lt = P(It);
	ti(Lt, 5, a, Zr, (e, t, n) => {
		var r = ra(), a = P(r), o = P(a), s = (e) => {
			Q(e, na());
		};
		Xr(o, (e) => {
			i(), J(() => n === i().playingIndex) && e(s);
		});
		var c = F(o, 2);
		c.textContent = n + 1;
		var l = F(c, 2), u = P(l, !0);
		M(l);
		var d = F(l, 2), f = P(d, !0);
		M(d), M(a), M(r), cr(() => {
			$(a, "aria-current", (i(), J(() => n === i().playingIndex ? "true" : void 0))), Fr(u, (q(t), J(() => q(t).name))), Fr(f, (q(t), J(() => q(t).artist)));
		}), Z("click", a, () => {
			z(T, J(i).playingIndex = n, J(i)), gn(w, q(w).currentTime = 0);
		}), Q(e, r);
	}), M(Lt), M(It), Ci(It, (e) => H(k, e), () => q(k)), M(Ke), M(j), Ci(j, (e) => H(S, e), () => q(S)), cr((e, t, n, i) => {
		Ge = pi(j, 1, "aplayer svelte-es3fdp", null, Ge, {
			"aplayer-withlrc": s().length > 0,
			"aplayer-withlist": a().length > 1,
			"aplayer-narrow": be(),
			"aplayer-mobile": Mi
		}), $(j, "hidden", !o()), $(qe, "aria-label", q(me) ? "Play" : "Pause"), Je = hi(qe, "", Je, { "background-image": (o(), J(() => o()?.cover ? `url("${o().cover}")` : "none")) }), Fr(tt, (o(), J(() => o()?.name))), Fr(nt, (o(), J(() => o()?.artist))), $(I, "aria-valuemax", q(x)), $(I, "aria-valuenow", e), $(I, "aria-valuetext", t), $(I, "aria-disabled", q(x) === 0), hi(ct, `width: ${(u(), J(() => u().bufferPercentage)) ?? ""}`), hi(lt, `width: ${(d(), J(() => d().playPercentage)) ?? ""}`), hi(ut, `display: ${f() ? "inline" : "none"}`), Fr(mt, (d(), J(() => d().ptime))), Fr(gt, (d(), J(() => d().duration))), $(vt, "aria-pressed", q(he)), $(R, "aria-valuenow", n), $(R, "aria-valuetext", i), hi(Et, `height: ${(q(w), p(), J(() => q(w).muted ? "0px" : p().volumePercentage)) ?? ""}`), $(kt, "aria-label", (r(), J(() => `Repeat: ${r().loop === "all" ? "all tracks" : r().loop === "one" ? "one track" : "off"}. Change repeat mode`))), It.inert = (r(), J(() => !r().showList)), $(It, "aria-hidden", (r(), J(() => !r().showList))), hi(It, `height: ${(r(), q(v), J(() => r().showList ? `${q(v)}px` : "0px")) ?? ""}`);
	}, [
		() => (q(x), c(), J(() => Math.min(q(x), Math.max(0, c())))),
		() => (q(x), qn(ji), c(), J(() => q(x) ? `${ji(c())} of ${ji(q(x))}` : "Not ready")),
		() => (r(), J(() => Math.round(r().volume * 100))),
		() => (r(), q(he), J(() => `${Math.round(r().volume * 100)}%${q(he) ? " (muted)" : ""}`))
	]), Z("click", qe, () => {
		q(me) ? Ae() : q(w).pause();
	}), Z("keydown", I, Pe), Z("mousedown", I, function(...e) {
		q(Ue)?.apply(this, e);
	}), Z("mousemove", I, function(...e) {
		q(We)?.apply(this, e);
	}), Z("mouseup", I, function(...e) {
		q(O)?.apply(this, e);
	}), Z("mouseleave", I, function(...e) {
		q(O)?.apply(this, e);
	}), Z("touchstart", I, function(...e) {
		q(Ue)?.apply(this, e);
	}), Z("touchmove", I, function(...e) {
		q(We)?.apply(this, e);
	}), Z("touchend", I, function(...e) {
		q(O)?.apply(this, e);
	}), Z("click", vt, () => {
		gn(w, q(w).muted = !q(w).muted);
	}, !0), Z("keydown", R, Le), Z("mousedown", R, function(...e) {
		q(Be)?.apply(this, e);
	}), Z("mousemove", R, function(...e) {
		q(Ve)?.apply(this, e);
	}), Z("mouseup", R, function(...e) {
		q(He)?.apply(this, e);
	}), Z("mouseleave", R, function(...e) {
		q(He)?.apply(this, e);
	}), Z("touchstart", R, function(...e) {
		q(Be)?.apply(this, e);
	}), Z("touchmove", R, function(...e) {
		q(Ve)?.apply(this, e);
	}), Z("touchend", R, function(...e) {
		q(He)?.apply(this, e);
	}), Z("click", kt, () => {
		r().loop === "all" ? z(fe, J(r).loop = "one", J(r)) : r().loop === "one" ? z(fe, J(r).loop = "none", J(r)) : r().loop === "none" && z(fe, J(r).loop = "all", J(r));
	}), Q(e, j);
	var Rt = Ie(A);
	return h(), Rt;
}
//#endregion
//#region src/main.ts
var oa = aa;
//#endregion
export { oa as default };
