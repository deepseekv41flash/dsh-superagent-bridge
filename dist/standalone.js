//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var l = Symbol.for("react.element");
	var n = Symbol.for("react.portal");
	var p = Symbol.for("react.fragment");
	var q = Symbol.for("react.strict_mode");
	var r = Symbol.for("react.profiler");
	var t = Symbol.for("react.provider");
	var u = Symbol.for("react.context");
	var v = Symbol.for("react.forward_ref");
	var w = Symbol.for("react.suspense");
	var x = Symbol.for("react.memo");
	var y = Symbol.for("react.lazy");
	var z = Symbol.iterator;
	function A(a) {
		if (null === a || "object" !== typeof a) return null;
		a = z && a[z] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var C = Object.assign;
	var D = {};
	function E(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	E.prototype.isReactComponent = {};
	E.prototype.setState = function(a, b) {
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E.prototype;
	function G(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	var H = G.prototype = new F();
	H.constructor = G;
	C(H, E.prototype);
	H.isPureReactComponent = !0;
	var I = Array.isArray;
	var J = Object.prototype.hasOwnProperty;
	var K = { current: null };
	var L = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function M(a, b, e) {
		var d, c = {}, k = null, h = null;
		if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		var g = arguments.length - 2;
		if (1 === g) c.children = e;
		else if (1 < g) {
			for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
			c.children = f;
		}
		if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		return {
			$$typeof: l,
			type: a,
			key: k,
			ref: h,
			props: c,
			_owner: K.current
		};
	}
	function N(a, b) {
		return {
			$$typeof: l,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a) {
			return b[a];
		});
	}
	var P = /\/+/g;
	function Q(a, b) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
		var k = typeof a;
		if ("undefined" === k || "boolean" === k) a = null;
		var h = !1;
		if (null === a) h = !0;
		else switch (k) {
			case "string":
			case "number":
				h = !0;
				break;
			case "object": switch (a.$$typeof) {
				case l:
				case n: h = !0;
			}
		}
		if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
			return a;
		})) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		h = 0;
		d = "" === d ? "." : d + ":";
		if (I(a)) for (var g = 0; g < a.length; g++) {
			k = a[g];
			var f = d + Q(k, g);
			h += R(k, b, e, f, c);
		}
		else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
		else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		return h;
	}
	function S(a, b, e) {
		if (null == a) return a;
		var d = [], c = 0;
		R(a, d, "", "", function(a) {
			return b.call(e, a, c++);
		});
		return d;
	}
	function T(a) {
		if (-1 === a._status) {
			var b = a._result;
			b = b();
			b.then(function(b) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
			}, function(b) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
			});
			-1 === a._status && (a._status = 0, a._result = b);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U = { current: null };
	var V = { transition: null };
	var W = {
		ReactCurrentDispatcher: U,
		ReactCurrentBatchConfig: V,
		ReactCurrentOwner: K
	};
	function X() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	exports.Children = {
		map: S,
		forEach: function(a, b, e) {
			S(a, function() {
				b.apply(this, arguments);
			}, e);
		},
		count: function(a) {
			var b = 0;
			S(a, function() {
				b++;
			});
			return b;
		},
		toArray: function(a) {
			return S(a, function(a) {
				return a;
			}) || [];
		},
		only: function(a) {
			if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E;
	exports.Fragment = p;
	exports.Profiler = r;
	exports.PureComponent = G;
	exports.StrictMode = q;
	exports.Suspense = w;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	exports.act = X;
	exports.cloneElement = function(a, b, e) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
		if (null != b) {
			void 0 !== b.ref && (k = b.ref, h = K.current);
			void 0 !== b.key && (c = "" + b.key);
			if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
			for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		}
		var f = arguments.length - 2;
		if (1 === f) d.children = e;
		else if (1 < f) {
			g = Array(f);
			for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
			d.children = g;
		}
		return {
			$$typeof: l,
			type: a.type,
			key: c,
			ref: k,
			props: d,
			_owner: h
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t,
			_context: a
		};
		return a.Consumer = a;
	};
	exports.createElement = M;
	exports.createFactory = function(a) {
		var b = M.bind(null, a);
		b.type = a;
		return b;
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(a) {
		return {
			$$typeof: v,
			render: a
		};
	};
	exports.isValidElement = O;
	exports.lazy = function(a) {
		return {
			$$typeof: y,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T
		};
	};
	exports.memo = function(a, b) {
		return {
			$$typeof: x,
			type: a,
			compare: void 0 === b ? null : b
		};
	};
	exports.startTransition = function(a) {
		var b = V.transition;
		V.transition = {};
		try {
			a();
		} finally {
			V.transition = b;
		}
	};
	exports.unstable_act = X;
	exports.useCallback = function(a, b) {
		return U.current.useCallback(a, b);
	};
	exports.useContext = function(a) {
		return U.current.useContext(a);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(a) {
		return U.current.useDeferredValue(a);
	};
	exports.useEffect = function(a, b) {
		return U.current.useEffect(a, b);
	};
	exports.useId = function() {
		return U.current.useId();
	};
	exports.useImperativeHandle = function(a, b, e) {
		return U.current.useImperativeHandle(a, b, e);
	};
	exports.useInsertionEffect = function(a, b) {
		return U.current.useInsertionEffect(a, b);
	};
	exports.useLayoutEffect = function(a, b) {
		return U.current.useLayoutEffect(a, b);
	};
	exports.useMemo = function(a, b) {
		return U.current.useMemo(a, b);
	};
	exports.useReducer = function(a, b, e) {
		return U.current.useReducer(a, b, e);
	};
	exports.useRef = function(a) {
		return U.current.useRef(a);
	};
	exports.useState = function(a) {
		return U.current.useState(a);
	};
	exports.useSyncExternalStore = function(a, b, e) {
		return U.current.useSyncExternalStore(a, b, e);
	};
	exports.useTransition = function() {
		return U.current.useTransition();
	};
	exports.version = "18.3.1";
}));
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production_min();
}));
//#endregion
//#region node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
				var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
				if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
				else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p = Date, q = p.now();
		exports.unstable_now = function() {
			return p.now() - q;
		};
	}
	var r = [];
	var t = [];
	var u = 1;
	var v = null;
	var y = 3;
	var z = !1;
	var A = !1;
	var B = !1;
	var D = "function" === typeof setTimeout ? setTimeout : null;
	var E = "function" === typeof clearTimeout ? clearTimeout : null;
	var F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G(a) {
		for (var b = h(t); null !== b;) {
			if (null === b.callback) k(t);
			else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
			else break;
			b = h(t);
		}
	}
	function H(a) {
		B = !1;
		G(a);
		if (!A) if (null !== h(r)) A = !0, I(J);
		else {
			var b = h(t);
			null !== b && K(H, b.startTime - a);
		}
	}
	function J(a, b) {
		A = !1;
		B && (B = !1, E(L), L = -1);
		z = !0;
		var c = y;
		try {
			G(b);
			for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
				var d = v.callback;
				if ("function" === typeof d) {
					v.callback = null;
					y = v.priorityLevel;
					var e = d(v.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v.callback = e : v === h(r) && k(r);
					G(b);
				} else k(r);
				v = h(r);
			}
			if (null !== v) var w = !0;
			else {
				var m = h(t);
				null !== m && K(H, m.startTime - b);
				w = !1;
			}
			return w;
		} finally {
			v = null, y = c, z = !1;
		}
	}
	var N = !1;
	var O = null;
	var L = -1;
	var P = 5;
	var Q = -1;
	function M() {
		return exports.unstable_now() - Q < P ? !1 : !0;
	}
	function R() {
		if (null !== O) {
			var a = exports.unstable_now();
			Q = a;
			var b = !0;
			try {
				b = O(!0, a);
			} finally {
				b ? S() : (N = !1, O = null);
			}
		} else N = !1;
	}
	var S;
	if ("function" === typeof F) S = function() {
		F(R);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T = new MessageChannel(), U = T.port2;
		T.port1.onmessage = R;
		S = function() {
			U.postMessage(null);
		};
	} else S = function() {
		D(R, 0);
	};
	function I(a) {
		O = a;
		N || (N = !0, S());
	}
	function K(a, b) {
		L = D(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A || z || (A = !0, I(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		return a;
	};
	exports.unstable_shouldYield = M;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
//#endregion
//#region node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom.production.min.js
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var aa = require_react();
	var ca = require_scheduler();
	function p(a) {
		for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set();
	var ea = {};
	function fa(a, b) {
		ha(a, b);
		ha(a + "Capture", b);
	}
	function ha(a, b) {
		ea[a] = b;
		for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
	var ja = Object.prototype.hasOwnProperty;
	var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
	var la = {};
	var ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b, c, d) {
		if (null !== c && 0 === c.type) return !1;
		switch (typeof b) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d) return !1;
				if (null !== c) return !c.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b, c, d) {
		if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		if (d) return !1;
		if (null !== c) switch (c.type) {
			case 3: return !b;
			case 4: return !1 === b;
			case 5: return isNaN(b);
			case 6: return isNaN(b) || 1 > b;
		}
		return !1;
	}
	function v(a, b, c, d, e, f, g) {
		this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		this.attributeName = d;
		this.attributeNamespace = e;
		this.mustUseProperty = c;
		this.propertyName = a;
		this.type = b;
		this.sanitizeURL = f;
		this.removeEmptyString = g;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b = a[0];
		z[b] = new v(b, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
		var e = z.hasOwnProperty(b) ? z[b] : null;
		if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	var va = Symbol.for("react.element");
	var wa = Symbol.for("react.portal");
	var ya = Symbol.for("react.fragment");
	var za = Symbol.for("react.strict_mode");
	var Aa = Symbol.for("react.profiler");
	var Ba = Symbol.for("react.provider");
	var Ca = Symbol.for("react.context");
	var Da = Symbol.for("react.forward_ref");
	var Ea = Symbol.for("react.suspense");
	var Fa = Symbol.for("react.suspense_list");
	var Ga = Symbol.for("react.memo");
	var Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign;
	var La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c) {
			var b = c.stack.trim().match(/\n( *(at )?)/);
			La = b && b[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
		if (!a || Na) return "";
		Na = !0;
		var c = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b) if (b = function() {
				throw Error();
			}, Object.defineProperty(b.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b, []);
				} catch (l) {
					var d = l;
				}
				Reflect.construct(a, [], b);
			} else {
				try {
					b.call();
				} catch (l) {
					d = l;
				}
				a.call(b.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l) {
					d = l;
				}
				a();
			}
		} catch (l) {
			if (l && d && "string" === typeof l.stack) {
				for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
				for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
					if (1 !== g || 1 !== h) do
						if (g--, h--, 0 > h || e[g] !== f[h]) {
							var k = "\n" + e[g].replace(" at new ", " at ");
							a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
							return k;
						}
					while (1 <= g && 0 <= h);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b = a.render;
				a = a.displayName;
				a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
			case Ha:
				b = a._payload;
				a = a._init;
				try {
					return Qa(a(b));
				} catch (c) {}
		}
		return null;
	}
	function Ra(a) {
		var b = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b.displayName || "Context") + ".Consumer";
			case 10: return (b._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b);
			case 8: return b === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b) return b.displayName || b.name || null;
				if ("string" === typeof b) return b;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
		var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
		if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
			var e = c.get, f = c.set;
			Object.defineProperty(a, b, {
				configurable: !0,
				get: function() {
					return e.call(this);
				},
				set: function(a) {
					d = "" + a;
					f.call(this, a);
				}
			});
			Object.defineProperty(a, b, { enumerable: c.enumerable });
			return {
				getValue: function() {
					return d;
				},
				setValue: function(a) {
					d = "" + a;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b = a._valueTracker;
		if (!b) return !0;
		var c = b.getValue();
		var d = "";
		a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d;
		return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b) {
			return a.body;
		}
	}
	function Ya(a, b) {
		var c = b.checked;
		return A({}, b, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : a._wrapperState.initialChecked
		});
	}
	function Za(a, b) {
		var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
		c = Sa(null != b.value ? b.value : c);
		a._wrapperState = {
			initialChecked: d,
			initialValue: c,
			controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		};
	}
	function ab(a, b) {
		b = b.checked;
		null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
		ab(a, b);
		var c = Sa(b.value), d = b.type;
		if (null != c) if ("number" === d) {
			if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		} else a.value !== "" + c && (a.value = "" + c);
		else if ("submit" === d || "reset" === d) {
			a.removeAttribute("value");
			return;
		}
		b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
		if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
			var d = b.type;
			if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
			b = "" + a._wrapperState.initialValue;
			c || b === a.value || (a.value = b);
			a.defaultValue = b;
		}
		c = a.name;
		"" !== c && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c && (a.name = c);
	}
	function cb(a, b, c) {
		if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
		a = a.options;
		if (b) {
			b = {};
			for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
			for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		} else {
			c = "" + Sa(c);
			b = null;
			for (e = 0; e < a.length; e++) {
				if (a[e].value === c) {
					a[e].selected = !0;
					d && (a[e].defaultSelected = !0);
					return;
				}
				null !== b || a[e].disabled || (b = a[e]);
			}
			null !== b && (b.selected = !0);
		}
	}
	function gb(a, b) {
		if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		return A({}, b, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b) {
		var c = b.value;
		if (null == c) {
			c = b.children;
			b = b.defaultValue;
			if (null != c) {
				if (null != b) throw Error(p(92));
				if (eb(c)) {
					if (1 < c.length) throw Error(p(93));
					c = c[0];
				}
				b = c;
			}
			b ??= "";
			c = b;
		}
		a._wrapperState = { initialValue: Sa(c) };
	}
	function ib(a, b) {
		var c = Sa(b.value), d = Sa(b.defaultValue);
		null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
		var b = a.textContent;
		b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb;
	var nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b, c, d, e);
			});
		} : a;
	}(function(a, b) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
			for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b.firstChild;) a.appendChild(b.firstChild);
		}
	});
	function ob(a, b) {
		if (b) {
			var c = a.firstChild;
			if (c && c === a.lastChild && 3 === c.nodeType) {
				c.nodeValue = b;
				return;
			}
		}
		a.textContent = b;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	};
	var qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b) {
			b = b + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b] = pb[a];
		});
	});
	function rb(a, b, c) {
		return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
		a = a.style;
		for (var c in b) if (b.hasOwnProperty(c)) {
			var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
			"float" === c && (c = "cssFloat");
			d ? a.setProperty(c, e) : a[c] = e;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b) {
		if (b) {
			if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
			if (null != b.dangerouslySetInnerHTML) {
				if (null != b.children) throw Error(p(60));
				if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
			}
			if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		}
	}
	function vb(a, b) {
		if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null;
	var zb = null;
	var Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p(280));
			var b = a.stateNode;
			b && (b = Db(b), yb(a.stateNode, a.type, b));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b = Ab;
			Ab = zb = null;
			Bb(a);
			if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		}
	}
	function Gb(a, b) {
		return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
		if (Ib) return a(b, c);
		Ib = !0;
		try {
			return Gb(a, b, c);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b) {
		var c = a.stateNode;
		if (null === c) return null;
		var d = Db(c);
		if (null === d) return null;
		c = d[b];
		a: switch (b) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		return c;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			b.apply(c, l);
		} catch (m) {
			this.onError(m);
		}
	}
	var Ob = !1;
	var Pb = null;
	var Qb = !1;
	var Rb = null;
	var Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b, c, d, e, f, g, h, k) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p(198));
			Qb || (Qb = !0, Rb = l);
		}
	}
	function Vb(a) {
		var b = a, c = a;
		if (a.alternate) for (; b.return;) b = b.return;
		else {
			a = b;
			do
				b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
			while (a);
		}
		return 3 === b.tag ? c : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b = a.memoizedState;
			null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
			if (null !== b) return b.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p(188));
	}
	function Yb(a) {
		var b = a.alternate;
		if (!b) {
			b = Vb(a);
			if (null === b) throw Error(p(188));
			return b !== a ? null : a;
		}
		for (var c = a, d = b;;) {
			var e = c.return;
			if (null === e) break;
			var f = e.alternate;
			if (null === f) {
				d = e.return;
				if (null !== d) {
					c = d;
					continue;
				}
				break;
			}
			if (e.child === f.child) {
				for (f = e.child; f;) {
					if (f === c) return Xb(e), a;
					if (f === d) return Xb(e), b;
					f = f.sibling;
				}
				throw Error(p(188));
			}
			if (c.return !== d.return) c = e, d = f;
			else {
				for (var g = !1, h = e.child; h;) {
					if (h === c) {
						g = !0;
						c = e;
						d = f;
						break;
					}
					if (h === d) {
						g = !0;
						d = e;
						c = f;
						break;
					}
					h = h.sibling;
				}
				if (!g) {
					for (h = f.child; h;) {
						if (h === c) {
							g = !0;
							c = f;
							d = e;
							break;
						}
						if (h === d) {
							g = !0;
							d = f;
							c = e;
							break;
						}
						h = h.sibling;
					}
					if (!g) throw Error(p(189));
				}
			}
			if (c.alternate !== d) throw Error(p(190));
		}
		if (3 !== c.tag) throw Error(p(188));
		return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b = $b(a);
			if (null !== b) return b;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback;
	var bc = ca.unstable_cancelCallback;
	var cc = ca.unstable_shouldYield;
	var dc = ca.unstable_requestPaint;
	var B = ca.unstable_now;
	var ec = ca.unstable_getCurrentPriorityLevel;
	var fc = ca.unstable_ImmediatePriority;
	var gc = ca.unstable_UserBlockingPriority;
	var hc = ca.unstable_NormalPriority;
	var ic = ca.unstable_LowPriority;
	var jc = ca.unstable_IdlePriority;
	var kc = null;
	var lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc;
	var pc = Math.log;
	var qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64;
	var sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b) {
		var c = a.pendingLanes;
		if (0 === c) return 0;
		var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
		if (0 !== g) {
			var h = g & ~e;
			0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		} else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		if (0 === d) return 0;
		if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		0 !== (d & 4) && (d |= c & 16);
		b = a.entangledLanes;
		if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		return d;
	}
	function vc(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b) {
		for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
			var g = 31 - oc(f), h = 1 << g, k = e[g];
			if (-1 === k) {
				if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
			} else k <= b && (a.expiredLanes |= h);
			f &= ~h;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b = [], c = 0; 31 > c; c++) b.push(a);
		return b;
	}
	function Ac(a, b, c) {
		a.pendingLanes |= b;
		536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b = 31 - oc(b);
		a[b] = c;
	}
	function Bc(a, b) {
		var c = a.pendingLanes & ~b;
		a.pendingLanes = b;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b;
		a.mutableReadLanes &= b;
		a.entangledLanes &= b;
		b = a.entanglements;
		var d = a.eventTimes;
		for (a = a.expirationTimes; 0 < c;) {
			var e = 31 - oc(c), f = 1 << e;
			b[e] = 0;
			d[e] = -1;
			a[e] = -1;
			c &= ~f;
		}
	}
	function Cc(a, b) {
		var c = a.entangledLanes |= b;
		for (a = a.entanglements; c;) {
			var d = 31 - oc(c), e = 1 << d;
			e & b | a[d] & b && (a[d] |= b);
			c &= ~e;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec;
	var Fc;
	var Gc;
	var Hc;
	var Ic;
	var Jc = !1;
	var Kc = [];
	var Lc = null;
	var Mc = null;
	var Nc = null;
	var Oc = /* @__PURE__ */ new Map();
	var Pc = /* @__PURE__ */ new Map();
	var Qc = [];
	var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b.pointerId);
		}
	}
	function Tc(a, b, c, d, e, f) {
		if (null === a || a.nativeEvent !== f) return a = {
			blockedOn: b,
			domEventName: c,
			eventSystemFlags: d,
			nativeEvent: f,
			targetContainers: [e]
		}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		a.eventSystemFlags |= d;
		b = a.targetContainers;
		null !== e && -1 === b.indexOf(e) && b.push(e);
		return a;
	}
	function Uc(a, b, c, d, e) {
		switch (b) {
			case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
			case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
			case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
			case "pointerover":
				var f = e.pointerId;
				Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
				return !0;
			case "gotpointercapture": return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b = Wc(a.target);
		if (null !== b) {
			var c = Vb(b);
			if (null !== c) {
				if (b = c.tag, 13 === b) {
					if (b = Wb(c), null !== b) {
						a.blockedOn = b;
						Ic(a.priority, function() {
							Gc(c);
						});
						return;
					}
				} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b = a.targetContainers; 0 < b.length;) {
			var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
			if (null === c) {
				c = a.nativeEvent;
				var d = new c.constructor(c.type, c);
				wb = d;
				c.target.dispatchEvent(d);
				wb = null;
			} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
			b.shift();
		}
		return !0;
	}
	function Zc(a, b, c) {
		Xc(a) && c.delete(b);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b) {
		a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b(b) {
			return ad(b, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c = 1; c < Kc.length; c++) {
				var d = Kc[c];
				d.blockedOn === a && (d.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b);
		Pc.forEach(b);
		for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig;
	var dd = !0;
	function ed(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function gd(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function fd(a, b, c, d) {
		if (dd) {
			var e = Yc(a, b, c, d);
			if (null === e) hd(a, b, d, id, c), Sc(a, d);
			else if (Uc(e, a, b, c, d)) d.stopPropagation();
			else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e;) {
					var f = Cb(e);
					null !== f && Ec(f);
					f = Yc(a, b, c, d);
					null === f && hd(a, b, d, id, c);
					if (f === e) break;
					e = f;
				}
				null !== e && d.stopPropagation();
			} else hd(a, b, d, null, c);
		}
	}
	var id = null;
	function Yc(a, b, c, d) {
		id = null;
		a = xb(d);
		a = Wc(a);
		if (null !== a) if (b = Vb(a), null === b) a = null;
		else if (c = b.tag, 13 === c) {
			a = Wb(b);
			if (null !== a) return a;
			a = null;
		} else if (3 === c) {
			if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
			a = null;
		} else b !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null;
	var ld = null;
	var md = null;
	function nd() {
		if (md) return md;
		var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
		for (a = 0; a < c && b[a] === e[a]; a++);
		var g = c - a;
		for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
		var b = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b(b, d, e, f, g) {
			this._reactName = b;
			this._targetInst = e;
			this.type = d;
			this.nativeEvent = f;
			this.target = g;
			this.currentTarget = null;
			for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
			this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a = this.nativeEvent;
				a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a = this.nativeEvent;
				a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	};
	var td = rd(sd);
	var ud = A({}, sd, {
		view: 0,
		detail: 0
	});
	var vd = rd(ud);
	var wd;
	var xd;
	var yd;
	var Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	});
	var Bd = rd(Ad);
	var Dd = rd(A({}, Ad, { dataTransfer: 0 }));
	var Fd = rd(A({}, ud, { relatedTarget: 0 }));
	var Hd = rd(A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var Jd = rd(A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} }));
	var Ld = rd(A({}, sd, { data: 0 }));
	var Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	};
	var Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	};
	var Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b = this.nativeEvent;
		return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Rd = rd(A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b = Md[a.key] || a.key;
				if ("Unidentified" !== b) return b;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	}));
	var Td = rd(A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}));
	var Vd = rd(A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	}));
	var Xd = rd(A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}));
	var Zd = rd(A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}));
	var $d = [
		9,
		13,
		27,
		32
	];
	var ae = ia && "CompositionEvent" in window;
	var be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be;
	var de = ia && (!ae || be && 8 < be && 11 >= be);
	var ee = String.fromCharCode(32);
	var fe = !1;
	function ge(a, b) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b.keyCode);
			case "keydown": return 229 !== b.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
		switch (a) {
			case "compositionend": return he(b);
			case "keypress":
				if (32 !== b.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b) {
		if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
					if (b.char && 1 < b.char.length) return b.char;
					if (b.which) return String.fromCharCode(b.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b.locale ? null : b.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
		Eb(d);
		b = oe(b, "onChange");
		0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
			event: c,
			listeners: b
		}));
	}
	var pe = null;
	var qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		if (Wa(ue(a))) return a;
	}
	function ve(a, b) {
		if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b = [];
			ne(b, qe, a, xb(a));
			Jb(re, b);
		}
	}
	function Ce(a, b, c) {
		"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
		if ("click" === a) return te(b);
	}
	function Fe(a, b) {
		if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
		return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
		if (He(a, b)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		var c = Object.keys(a), d = Object.keys(b);
		if (c.length !== d.length) return !1;
		for (d = 0; d < c.length; d++) {
			var e = c[d];
			if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b) {
		var c = Je(a);
		a = 0;
		for (var d; c;) {
			if (3 === c.nodeType) {
				d = a + c.textContent.length;
				if (a <= b && d >= b) return {
					node: c,
					offset: b - a
				};
				a = d;
			}
			a: {
				for (; c;) {
					if (c.nextSibling) {
						c = c.nextSibling;
						break a;
					}
					c = c.parentNode;
				}
				c = void 0;
			}
			c = Je(c);
		}
	}
	function Le(a, b) {
		return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof b.contentWindow.location.href;
			} catch (d) {
				c = !1;
			}
			if (c) a = b.contentWindow;
			else break;
			b = Xa(a.document);
		}
		return b;
	}
	function Ne(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b = Me(), c = a.focusedElem, d = a.selectionRange;
		if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
			if (null !== d && Ne(c)) {
				if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
				else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e = c.textContent.length, f = Math.min(d.start, e);
					d = void 0 === d.end ? f : Math.min(d.end, e);
					!a.extend && f > d && (e = d, d = f, f = e);
					e = Ke(c, f);
					var g = Ke(c, d);
					e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
				}
			}
			b = [];
			for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c.focus && c.focus();
			for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
	var Qe = null;
	var Re = null;
	var Se = null;
	var Te = !1;
	function Ue(a, b, c) {
		var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
			start: d.selectionStart,
			end: d.selectionEnd
		} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
			anchorNode: d.anchorNode,
			anchorOffset: d.anchorOffset,
			focusNode: d.focusNode,
			focusOffset: d.focusOffset
		}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
			event: b,
			listeners: d
		}), b.target = Qe)));
	}
	function Ve(a, b) {
		var c = {};
		c[a.toLowerCase()] = b.toLowerCase();
		c["Webkit" + a] = "webkit" + b;
		c["Moz" + a] = "moz" + b;
		return c;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	};
	var Xe = {};
	var Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b = We[a], c;
		for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		return a;
	}
	var $e = Ze("animationend");
	var af = Ze("animationiteration");
	var bf = Ze("animationstart");
	var cf = Ze("transitionend");
	var df = /* @__PURE__ */ new Map();
	var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
		df.set(a, b);
		fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf];
		ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
	var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
		var d = a.type || "unknown-event";
		a.currentTarget = c;
		Ub(d, b, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b) {
		b = 0 !== (b & 4);
		for (var c = 0; c < a.length; c++) {
			var d = a[c], e = d.event;
			d = d.listeners;
			a: {
				var f = void 0;
				if (b) for (var g = d.length - 1; 0 <= g; g--) {
					var h = d[g], k = h.instance, l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
				else for (g = 0; g < d.length; g++) {
					h = d[g];
					k = h.instance;
					l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
		var c = b[of];
		void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
		var d = a + "__bubble";
		c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
		var d = 0;
		b && (d |= 4);
		pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b) {
				"selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
			});
			var b = 9 === a.nodeType ? a : a.ownerDocument;
			null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		}
	}
	function pf(a, b, c, d) {
		switch (jd(b)) {
			case 1:
				var e = ed;
				break;
			case 4:
				e = gd;
				break;
			default: e = fd;
		}
		c = e.bind(null, b, c, a);
		e = void 0;
		!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		d ? void 0 !== e ? a.addEventListener(b, c, {
			capture: !0,
			passive: e
		}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
		var f = d;
		if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
			if (null === d) return;
			var g = d.tag;
			if (3 === g || 4 === g) {
				var h = d.stateNode.containerInfo;
				if (h === e || 8 === h.nodeType && h.parentNode === e) break;
				if (4 === g) for (g = d.return; null !== g;) {
					var k = g.tag;
					if (3 === k || 4 === k) {
						if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
					}
					g = g.return;
				}
				for (; null !== h;) {
					g = Wc(h);
					if (null === g) return;
					k = g.tag;
					if (5 === k || 6 === k) {
						d = f = g;
						continue a;
					}
					h = h.parentNode;
				}
			}
			d = d.return;
		}
		Jb(function() {
			var d = f, e = xb(c), g = [];
			a: {
				var h = df.get(a);
				if (void 0 !== h) {
					var k = td, n = a;
					switch (a) {
						case "keypress": if (0 === od(c)) break a;
						case "keydown":
						case "keyup":
							k = Rd;
							break;
						case "focusin":
							n = "focus";
							k = Fd;
							break;
						case "focusout":
							n = "blur";
							k = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k = Fd;
							break;
						case "click": if (2 === c.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k = Vd;
							break;
						case $e:
						case af:
						case bf:
							k = Hd;
							break;
						case cf:
							k = Xd;
							break;
						case "scroll":
							k = vd;
							break;
						case "wheel":
							k = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k = Td;
					}
					var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
					t = [];
					for (var w = d, u; null !== w;) {
						u = w;
						var F = u.stateNode;
						5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
						if (J) break;
						w = w.return;
					}
					0 < t.length && (h = new k(h, n, null, c, e), g.push({
						event: h,
						listeners: t
					}));
				}
			}
			if (0 === (b & 7)) {
				a: {
					h = "mouseover" === a || "pointerover" === a;
					k = "mouseout" === a || "pointerout" === a;
					if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
					if (k || h) {
						h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
						if (k) {
							if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
						} else k = null, n = d;
						if (k !== n) {
							t = Bd;
							F = "onMouseLeave";
							x = "onMouseEnter";
							w = "mouse";
							if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
							J = null == k ? h : ue(k);
							u = null == n ? h : ue(n);
							h = new t(F, w + "leave", k, c, e);
							h.target = J;
							h.relatedTarget = u;
							F = null;
							Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
							J = F;
							if (k && n) b: {
								t = k;
								x = n;
								w = 0;
								for (u = t; u; u = vf(u)) w++;
								u = 0;
								for (F = x; F; F = vf(F)) u++;
								for (; 0 < w - u;) t = vf(t), w--;
								for (; 0 < u - w;) x = vf(x), u--;
								for (; w--;) {
									if (t === x || null !== x && t === x.alternate) break b;
									t = vf(t);
									x = vf(x);
								}
								t = null;
							}
							else t = null;
							null !== k && wf(g, h, k, t, !1);
							null !== n && null !== J && wf(g, J, n, t, !0);
						}
					}
				}
				a: {
					h = d ? ue(d) : window;
					k = h.nodeName && h.nodeName.toLowerCase();
					if ("select" === k || "input" === k && "file" === h.type) var na = ve;
					else if (me(h)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
					if (na && (na = na(a, d))) {
						ne(g, na, c, e);
						break a;
					}
					xa && xa(a, h, d);
					"focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
				}
				xa = d ? ue(d) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g, c, e);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g, c, e);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
					event: e,
					listeners: d
				}), e.data = $a);
			}
			se(g, b);
		});
	}
	function tf(a, b, c) {
		return {
			instance: a,
			listener: b,
			currentTarget: c
		};
	}
	function oe(a, b) {
		for (var c = b + "Capture", d = []; null !== a;) {
			var e = a, f = e.stateNode;
			5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
			a = a.return;
		}
		return d;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b, c, d, e) {
		for (var f = b._reactName, g = []; null !== c && c !== d;) {
			var h = c, k = h.alternate, l = h.stateNode;
			if (null !== k && k === d) break;
			5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
			c = c.return;
		}
		0 !== g.length && a.push({
			event: b,
			listeners: g
		});
	}
	var xf = /\r\n?/g;
	var yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
		b = zf(b);
		if (zf(a) !== b && c) throw Error(p(425));
	}
	function Bf() {}
	var Cf = null;
	var Df = null;
	function Ef(a, b) {
		return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
	var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
	var Hf = "function" === typeof Promise ? Promise : void 0;
	var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b) {
		var c = b, d = 0;
		do {
			var e = c.nextSibling;
			a.removeChild(c);
			if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
				if (0 === d) {
					a.removeChild(e);
					bd(b);
					return;
				}
				d--;
			} else "$" !== c && "$?" !== c && "$!" !== c || d++;
			c = e;
		} while (c);
		bd(b);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b = a.nodeType;
			if (1 === b || 3 === b) break;
			if (8 === b) {
				b = a.data;
				if ("$" === b || "$!" === b || "$?" === b) break;
				if ("/$" === b) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b = 0; a;) {
			if (8 === a.nodeType) {
				var c = a.data;
				if ("$" === c || "$!" === c || "$?" === c) {
					if (0 === b) return a;
					b--;
				} else "/$" === c && b++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2);
	var Of = "__reactFiber$" + Nf;
	var Pf = "__reactProps$" + Nf;
	var uf = "__reactContainer$" + Nf;
	var of = "__reactEvents$" + Nf;
	var Qf = "__reactListeners$" + Nf;
	var Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b = a[Of];
		if (b) return b;
		for (var c = a.parentNode; c;) {
			if (b = c[uf] || c[Of]) {
				c = b.alternate;
				if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
					if (c = a[Of]) return c;
					a = Mf(a);
				}
				return b;
			}
			a = c;
			c = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [];
	var Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b;
	}
	var Vf = {};
	var H = Uf(Vf);
	var Wf = Uf(!1);
	var Xf = Vf;
	function Yf(a, b) {
		var c = a.type.contextTypes;
		if (!c) return Vf;
		var d = a.stateNode;
		if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		var e = {}, f;
		for (f in c) e[f] = b[f];
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		return e;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b, c) {
		if (H.current !== Vf) throw Error(p(168));
		G(H, b);
		G(Wf, c);
	}
	function bg(a, b, c) {
		var d = a.stateNode;
		b = b.childContextTypes;
		if ("function" !== typeof d.getChildContext) return c;
		d = d.getChildContext();
		for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		return A({}, c, d);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b, c) {
		var d = a.stateNode;
		if (!d) throw Error(p(169));
		c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c);
	}
	var eg = null;
	var fg = !1;
	var gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b = C;
			try {
				var c = eg;
				for (C = 1; a < c.length; a++) {
					var d = c[a];
					do
						d = d(!0);
					while (null !== d);
				}
				eg = null;
				fg = !1;
			} catch (e) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
			} finally {
				C = b, gg = !1;
			}
		}
		return null;
	}
	var kg = [];
	var lg = 0;
	var mg = null;
	var ng = 0;
	var og = [];
	var pg = 0;
	var qg = null;
	var rg = 1;
	var sg = "";
	function tg(a, b) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b;
	}
	function ug(a, b, c) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d = rg;
		a = sg;
		var e = 32 - oc(d) - 1;
		d &= ~(1 << e);
		c += 1;
		var f = 32 - oc(b) + e;
		if (30 < f) {
			var g = e - e % 5;
			f = (d & (1 << g) - 1).toString(32);
			d >>= g;
			e -= g;
			rg = 1 << 32 - oc(b) + e | c << e | d;
			sg = f + a;
		} else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null;
	var yg = null;
	var I = !1;
	var zg = null;
	function Ag(a, b) {
		var c = Bg(5, null, null, 0);
		c.elementType = "DELETED";
		c.stateNode = b;
		c.return = a;
		b = a.deletions;
		null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
		switch (a.tag) {
			case 5:
				var c = a.type;
				b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
				return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
			case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
			case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b,
				treeContext: c,
				retryLane: 1073741824
			}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b = yg;
			if (b) {
				var c = b;
				if (!Cg(a, b)) {
					if (Dg(a)) throw Error(p(418));
					b = Lf(c.nextSibling);
					var d = xg;
					b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b;
		(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		if (b && (b = yg)) {
			if (Dg(a)) throw Hg(), Error(p(418));
			for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b = 0; a;) {
					if (8 === a.nodeType) {
						var c = a.data;
						if ("/$" === c) {
							if (0 === b) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b--;
						} else "$" !== c && "$!" !== c && "$?" !== c || b++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b, c) {
		a = c.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c._owner) {
				c = c._owner;
				if (c) {
					if (1 !== c.tag) throw Error(p(309));
					var d = c.stateNode;
				}
				if (!d) throw Error(p(147, a));
				var e = d, f = "" + a;
				if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
				b = function(a) {
					var b = e.refs;
					null === a ? delete b[f] : b[f] = a;
				};
				b._stringRef = f;
				return b;
			}
			if ("string" !== typeof a) throw Error(p(284));
			if (!c._owner) throw Error(p(290, a));
		}
		return a;
	}
	function Mg(a, b) {
		a = Object.prototype.toString.call(b);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function Ng(a) {
		var b = a._init;
		return b(a._payload);
	}
	function Og(a) {
		function b(b, c) {
			if (a) {
				var d = b.deletions;
				null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
			}
		}
		function c(c, d) {
			if (!a) return null;
			for (; null !== d;) b(c, d), d = d.sibling;
			return null;
		}
		function d(a, b) {
			for (a = /* @__PURE__ */ new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
			return a;
		}
		function e(a, b) {
			a = Pg(a, b);
			a.index = 0;
			a.sibling = null;
			return a;
		}
		function f(b, c, d) {
			b.index = d;
			if (!a) return b.flags |= 1048576, c;
			d = b.alternate;
			if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
			b.flags |= 2;
			return c;
		}
		function g(b) {
			a && null === b.alternate && (b.flags |= 2);
			return b;
		}
		function h(a, b, c, d) {
			if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function k(a, b, c, d) {
			var f = c.type;
			if (f === ya) return m(a, b, c.props.children, d, c.key);
			if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
			d = Rg(c.type, c.key, c.props, null, a.mode, d);
			d.ref = Lg(a, b, c);
			d.return = a;
			return d;
		}
		function l(a, b, c, d) {
			if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
			b = e(b, c.children || []);
			b.return = a;
			return b;
		}
		function m(a, b, c, d, f) {
			if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function q(a, b, c) {
			if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
			if ("object" === typeof b && null !== b) {
				switch (b.$$typeof) {
					case va: return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
					case wa: return b = Sg(b, a.mode, c), b.return = a, b;
					case Ha:
						var d = b._init;
						return q(a, d(b._payload), c);
				}
				if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
				Mg(a, b);
			}
			return null;
		}
		function r(a, b, c, d) {
			var e = null !== b ? b.key : null;
			if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
			if ("object" === typeof c && null !== c) {
				switch (c.$$typeof) {
					case va: return c.key === e ? k(a, b, c, d) : null;
					case wa: return c.key === e ? l(a, b, c, d) : null;
					case Ha: return e = c._init, r(a, b, e(c._payload), d);
				}
				if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
				Mg(a, c);
			}
			return null;
		}
		function y(a, b, c, d, e) {
			if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
			if ("object" === typeof d && null !== d) {
				switch (d.$$typeof) {
					case va: return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
					case wa: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
					case Ha:
						var f = d._init;
						return y(a, b, c, f(d._payload), e);
				}
				if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
				Mg(b, d);
			}
			return null;
		}
		function n(e, g, h, k) {
			for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
				u.index > w ? (x = u, u = null) : x = u.sibling;
				var n = r(e, u, h[w], k);
				if (null === n) {
					null === u && (u = x);
					break;
				}
				a && u && null === n.alternate && b(e, u);
				g = f(n, g, w);
				null === m ? l = n : m.sibling = n;
				m = n;
				u = x;
			}
			if (w === h.length) return c(e, u), I && tg(e, w), l;
			if (null === u) {
				for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
				I && tg(e, w);
				return l;
			}
			for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
			a && u.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function t(e, g, h, k) {
			var l = Ka(h);
			if ("function" !== typeof l) throw Error(p(150));
			h = l.call(h);
			if (null == h) throw Error(p(151));
			for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
				m.index > w ? (x = m, m = null) : x = m.sibling;
				var t = r(e, m, n.value, k);
				if (null === t) {
					null === m && (m = x);
					break;
				}
				a && m && null === t.alternate && b(e, m);
				g = f(t, g, w);
				null === u ? l = t : u.sibling = t;
				u = t;
				m = x;
			}
			if (n.done) return c(e, m), I && tg(e, w), l;
			if (null === m) {
				for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
				I && tg(e, w);
				return l;
			}
			for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
			a && m.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function J(a, d, f, h) {
			"object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
			if ("object" === typeof f && null !== f) {
				switch (f.$$typeof) {
					case va:
						a: {
							for (var k = f.key, l = d; null !== l;) {
								if (l.key === k) {
									k = f.type;
									if (k === ya) {
										if (7 === l.tag) {
											c(a, l.sibling);
											d = e(l, f.props.children);
											d.return = a;
											a = d;
											break a;
										}
									} else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
										c(a, l.sibling);
										d = e(l, f.props);
										d.ref = Lg(a, l, f);
										d.return = a;
										a = d;
										break a;
									}
									c(a, l);
									break;
								} else b(a, l);
								l = l.sibling;
							}
							f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
						}
						return g(a);
					case wa:
						a: {
							for (l = f.key; null !== d;) {
								if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
									c(a, d.sibling);
									d = e(d, f.children || []);
									d.return = a;
									a = d;
									break a;
								} else {
									c(a, d);
									break;
								}
								else b(a, d);
								d = d.sibling;
							}
							d = Sg(f, a.mode, h);
							d.return = a;
							a = d;
						}
						return g(a);
					case Ha: return l = f._init, J(a, d, l(f._payload), h);
				}
				if (eb(f)) return n(a, d, f, h);
				if (Ka(f)) return t(a, d, f, h);
				Mg(a, f);
			}
			return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		}
		return J;
	}
	var Ug = Og(!0);
	var Vg = Og(!1);
	var Wg = Uf(null);
	var Xg = null;
	var Yg = null;
	var Zg = null;
	function $g() {
		Zg = Yg = Xg = null;
	}
	function ah(a) {
		var b = Wg.current;
		E(Wg);
		a._currentValue = b;
	}
	function bh(a, b, c) {
		for (; null !== a;) {
			var d = a.alternate;
			(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
			if (a === c) break;
			a = a.return;
		}
	}
	function ch(a, b) {
		Xg = a;
		Zg = Yg = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
	}
	function eh(a) {
		var b = a._currentValue;
		if (Zg !== a) if (a = {
			context: a,
			memoizedValue: b,
			next: null
		}, null === Yg) {
			if (null === Xg) throw Error(p(308));
			Yg = a;
			Xg.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Yg = Yg.next = a;
		return b;
	}
	var fh = null;
	function gh(a) {
		null === fh ? fh = [a] : fh.push(a);
	}
	function hh(a, b, c, d) {
		var e = b.interleaved;
		null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
		b.interleaved = c;
		return ih(a, d);
	}
	function ih(a, b) {
		a.lanes |= b;
		var c = a.alternate;
		null !== c && (c.lanes |= b);
		c = a;
		for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		return 3 === c.tag ? c.stateNode : null;
	}
	var jh = !1;
	function kh(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function lh(a, b) {
		a = a.updateQueue;
		b.updateQueue === a && (b.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function mh(a, b) {
		return {
			eventTime: a,
			lane: b,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function nh(a, b, c) {
		var d = a.updateQueue;
		if (null === d) return null;
		d = d.shared;
		if (0 !== (K & 2)) {
			var e = d.pending;
			null === e ? b.next = b : (b.next = e.next, e.next = b);
			d.pending = b;
			return ih(a, c);
		}
		e = d.interleaved;
		null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
		d.interleaved = b;
		return ih(a, c);
	}
	function oh(a, b, c) {
		b = b.updateQueue;
		if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	function ph(a, b) {
		var c = a.updateQueue, d = a.alternate;
		if (null !== d && (d = d.updateQueue, c === d)) {
			var e = null, f = null;
			c = c.firstBaseUpdate;
			if (null !== c) {
				do {
					var g = {
						eventTime: c.eventTime,
						lane: c.lane,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null
					};
					null === f ? e = f = g : f = f.next = g;
					c = c.next;
				} while (null !== c);
				null === f ? e = f = b : f = f.next = b;
			} else e = f = b;
			c = {
				baseState: d.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: f,
				shared: d.shared,
				effects: d.effects
			};
			a.updateQueue = c;
			return;
		}
		a = c.lastBaseUpdate;
		null === a ? c.firstBaseUpdate = b : a.next = b;
		c.lastBaseUpdate = b;
	}
	function qh(a, b, c, d) {
		var e = a.updateQueue;
		jh = !1;
		var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
		if (null !== h) {
			e.shared.pending = null;
			var k = h, l = k.next;
			k.next = null;
			null === g ? f = l : g.next = l;
			g = k;
			var m = a.alternate;
			null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		}
		if (null !== f) {
			var q = e.baseState;
			g = 0;
			m = l = k = null;
			h = f;
			do {
				var r = h.lane, y = h.eventTime;
				if ((d & r) === r) {
					null !== m && (m = m.next = {
						eventTime: y,
						lane: 0,
						tag: h.tag,
						payload: h.payload,
						callback: h.callback,
						next: null
					});
					a: {
						var n = a, t = h;
						r = b;
						y = c;
						switch (t.tag) {
							case 1:
								n = t.payload;
								if ("function" === typeof n) {
									q = n.call(y, q, r);
									break a;
								}
								q = n;
								break a;
							case 3: n.flags = n.flags & -65537 | 128;
							case 0:
								n = t.payload;
								r = "function" === typeof n ? n.call(y, q, r) : n;
								if (null === r || void 0 === r) break a;
								q = A({}, q, r);
								break a;
							case 2: jh = !0;
						}
					}
					null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
				} else y = {
					eventTime: y,
					lane: r,
					tag: h.tag,
					payload: h.payload,
					callback: h.callback,
					next: null
				}, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
				h = h.next;
				if (null === h) if (h = e.shared.pending, null === h) break;
				else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
			} while (1);
			null === m && (k = q);
			e.baseState = k;
			e.firstBaseUpdate = l;
			e.lastBaseUpdate = m;
			b = e.shared.interleaved;
			if (null !== b) {
				e = b;
				do
					g |= e.lane, e = e.next;
				while (e !== b);
			} else null === f && (e.shared.lanes = 0);
			rh |= g;
			a.lanes = g;
			a.memoizedState = q;
		}
	}
	function sh(a, b, c) {
		a = b.effects;
		b.effects = null;
		if (null !== a) for (b = 0; b < a.length; b++) {
			var d = a[b], e = d.callback;
			if (null !== e) {
				d.callback = null;
				d = c;
				if ("function" !== typeof e) throw Error(p(191, e));
				e.call(d);
			}
		}
	}
	var th = {};
	var uh = Uf(th);
	var vh = Uf(th);
	var wh = Uf(th);
	function xh(a) {
		if (a === th) throw Error(p(174));
		return a;
	}
	function yh(a, b) {
		G(wh, b);
		G(vh, a);
		G(uh, th);
		a = b.nodeType;
		switch (a) {
			case 9:
			case 11:
				b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		}
		E(uh);
		G(uh, b);
	}
	function zh() {
		E(uh);
		E(vh);
		E(wh);
	}
	function Ah(a) {
		xh(wh.current);
		var b = xh(uh.current);
		var c = lb(b, a.type);
		b !== c && (G(vh, a), G(uh, c));
	}
	function Bh(a) {
		vh.current === a && (E(uh), E(vh));
	}
	var L = Uf(0);
	function Ch(a) {
		for (var b = a; null !== b;) {
			if (13 === b.tag) {
				var c = b.memoizedState;
				if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
			} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
				if (0 !== (b.flags & 128)) return b;
			} else if (null !== b.child) {
				b.child.return = b;
				b = b.child;
				continue;
			}
			if (b === a) break;
			for (; null === b.sibling;) {
				if (null === b.return || b.return === a) return null;
				b = b.return;
			}
			b.sibling.return = b.return;
			b = b.sibling;
		}
		return null;
	}
	var Dh = [];
	function Eh() {
		for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
		Dh.length = 0;
	}
	var Fh = ua.ReactCurrentDispatcher;
	var Gh = ua.ReactCurrentBatchConfig;
	var Hh = 0;
	var M = null;
	var N = null;
	var O = null;
	var Ih = !1;
	var Jh = !1;
	var Kh = 0;
	var Lh = 0;
	function P() {
		throw Error(p(321));
	}
	function Mh(a, b) {
		if (null === b) return !1;
		for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		return !0;
	}
	function Nh(a, b, c, d, e, f) {
		Hh = f;
		M = b;
		b.memoizedState = null;
		b.updateQueue = null;
		b.lanes = 0;
		Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
		a = c(d, e);
		if (Jh) {
			f = 0;
			do {
				Jh = !1;
				Kh = 0;
				if (25 <= f) throw Error(p(301));
				f += 1;
				O = N = null;
				b.updateQueue = null;
				Fh.current = Qh;
				a = c(d, e);
			} while (Jh);
		}
		Fh.current = Rh;
		b = null !== N && null !== N.next;
		Hh = 0;
		O = N = M = null;
		Ih = !1;
		if (b) throw Error(p(300));
		return a;
	}
	function Sh() {
		var a = 0 !== Kh;
		Kh = 0;
		return a;
	}
	function Th() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === O ? M.memoizedState = O = a : O = O.next = a;
		return O;
	}
	function Uh() {
		if (null === N) {
			var a = M.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = N.next;
		var b = null === O ? M.memoizedState : O.next;
		if (null !== b) O = b, N = a;
		else {
			if (null === a) throw Error(p(310));
			N = a;
			a = {
				memoizedState: N.memoizedState,
				baseState: N.baseState,
				baseQueue: N.baseQueue,
				queue: N.queue,
				next: null
			};
			null === O ? M.memoizedState = O = a : O = O.next = a;
		}
		return O;
	}
	function Vh(a, b) {
		return "function" === typeof b ? b(a) : b;
	}
	function Wh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = N, e = d.baseQueue, f = c.pending;
		if (null !== f) {
			if (null !== e) {
				var g = e.next;
				e.next = f.next;
				f.next = g;
			}
			d.baseQueue = e = f;
			c.pending = null;
		}
		if (null !== e) {
			f = e.next;
			d = d.baseState;
			var h = g = null, k = null, l = f;
			do {
				var m = l.lane;
				if ((Hh & m) === m) null !== k && (k = k.next = {
					lane: 0,
					action: l.action,
					hasEagerState: l.hasEagerState,
					eagerState: l.eagerState,
					next: null
				}), d = l.hasEagerState ? l.eagerState : a(d, l.action);
				else {
					var q = {
						lane: m,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					};
					null === k ? (h = k = q, g = d) : k = k.next = q;
					M.lanes |= m;
					rh |= m;
				}
				l = l.next;
			} while (null !== l && l !== f);
			null === k ? g = d : k.next = h;
			He(d, b.memoizedState) || (dh = !0);
			b.memoizedState = d;
			b.baseState = g;
			b.baseQueue = k;
			c.lastRenderedState = d;
		}
		a = c.interleaved;
		if (null !== a) {
			e = a;
			do
				f = e.lane, M.lanes |= f, rh |= f, e = e.next;
			while (e !== a);
		} else null === e && (c.lanes = 0);
		return [b.memoizedState, c.dispatch];
	}
	function Xh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = c.dispatch, e = c.pending, f = b.memoizedState;
		if (null !== e) {
			c.pending = null;
			var g = e = e.next;
			do
				f = a(f, g.action), g = g.next;
			while (g !== e);
			He(f, b.memoizedState) || (dh = !0);
			b.memoizedState = f;
			null === b.baseQueue && (b.baseState = f);
			c.lastRenderedState = f;
		}
		return [f, d];
	}
	function Yh() {}
	function Zh(a, b) {
		var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
		f && (d.memoizedState = e, dh = !0);
		d = d.queue;
		$h(ai.bind(null, c, d, a), [a]);
		if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
			c.flags |= 2048;
			bi(9, ci.bind(null, c, d, e, b), void 0, null);
			if (null === Q) throw Error(p(349));
			0 !== (Hh & 30) || di(c, b, e);
		}
		return e;
	}
	function di(a, b, c) {
		a.flags |= 16384;
		a = {
			getSnapshot: b,
			value: c
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function ci(a, b, c, d) {
		b.value = c;
		b.getSnapshot = d;
		ei(b) && fi(a);
	}
	function ai(a, b, c) {
		return c(function() {
			ei(b) && fi(a);
		});
	}
	function ei(a) {
		var b = a.getSnapshot;
		a = a.value;
		try {
			var c = b();
			return !He(a, c);
		} catch (d) {
			return !0;
		}
	}
	function fi(a) {
		var b = ih(a, 1);
		null !== b && gi(b, a, 1, -1);
	}
	function hi(a) {
		var b = Th();
		"function" === typeof a && (a = a());
		b.memoizedState = b.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vh,
			lastRenderedState: a
		};
		b.queue = a;
		a = a.dispatch = ii.bind(null, M, a);
		return [b.memoizedState, a];
	}
	function bi(a, b, c, d) {
		a = {
			tag: a,
			create: b,
			destroy: c,
			deps: d,
			next: null
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		return a;
	}
	function ji() {
		return Uh().memoizedState;
	}
	function ki(a, b, c, d) {
		var e = Th();
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function li(a, b, c, d) {
		var e = Uh();
		d = void 0 === d ? null : d;
		var f = void 0;
		if (null !== N) {
			var g = N.memoizedState;
			f = g.destroy;
			if (null !== d && Mh(d, g.deps)) {
				e.memoizedState = bi(b, c, f, d);
				return;
			}
		}
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, f, d);
	}
	function mi(a, b) {
		return ki(8390656, 8, a, b);
	}
	function $h(a, b) {
		return li(2048, 8, a, b);
	}
	function ni(a, b) {
		return li(4, 2, a, b);
	}
	function oi(a, b) {
		return li(4, 4, a, b);
	}
	function pi(a, b) {
		if ("function" === typeof b) return a = a(), b(a), function() {
			b(null);
		};
		if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
			b.current = null;
		};
	}
	function qi(a, b, c) {
		c = null !== c && void 0 !== c ? c.concat([a]) : null;
		return li(4, 4, pi.bind(null, b, a), c);
	}
	function ri() {}
	function si(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		c.memoizedState = [a, b];
		return a;
	}
	function ti(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		a = a();
		c.memoizedState = [a, b];
		return a;
	}
	function ui(a, b, c) {
		if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
		He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
		return b;
	}
	function vi(a, b) {
		var c = C;
		C = 0 !== c && 4 > c ? c : 4;
		a(!0);
		var d = Gh.transition;
		Gh.transition = {};
		try {
			a(!1), b();
		} finally {
			C = c, Gh.transition = d;
		}
	}
	function wi() {
		return Uh().memoizedState;
	}
	function xi(a, b, c) {
		var d = yi(a);
		c = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, c);
		else if (c = hh(a, b, c, d), null !== c) {
			var e = R();
			gi(c, a, d, e);
			Bi(c, b, d);
		}
	}
	function ii(a, b, c) {
		var d = yi(a), e = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, e);
		else {
			var f = a.alternate;
			if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
				var g = b.lastRenderedState, h = f(g, c);
				e.hasEagerState = !0;
				e.eagerState = h;
				if (He(h, g)) {
					var k = b.interleaved;
					null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
					b.interleaved = e;
					return;
				}
			} catch (l) {}
			c = hh(a, b, e, d);
			null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
		}
	}
	function zi(a) {
		var b = a.alternate;
		return a === M || null !== b && b === M;
	}
	function Ai(a, b) {
		Jh = Ih = !0;
		var c = a.pending;
		null === c ? b.next = b : (b.next = c.next, c.next = b);
		a.pending = b;
	}
	function Bi(a, b, c) {
		if (0 !== (c & 4194240)) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	var Rh = {
		readContext: eh,
		useCallback: P,
		useContext: P,
		useEffect: P,
		useImperativeHandle: P,
		useInsertionEffect: P,
		useLayoutEffect: P,
		useMemo: P,
		useReducer: P,
		useRef: P,
		useState: P,
		useDebugValue: P,
		useDeferredValue: P,
		useTransition: P,
		useMutableSource: P,
		useSyncExternalStore: P,
		useId: P,
		unstable_isNewReconciler: !1
	};
	var Oh = {
		readContext: eh,
		useCallback: function(a, b) {
			Th().memoizedState = [a, void 0 === b ? null : b];
			return a;
		},
		useContext: eh,
		useEffect: mi,
		useImperativeHandle: function(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return ki(4194308, 4, pi.bind(null, b, a), c);
		},
		useLayoutEffect: function(a, b) {
			return ki(4194308, 4, a, b);
		},
		useInsertionEffect: function(a, b) {
			return ki(4, 2, a, b);
		},
		useMemo: function(a, b) {
			var c = Th();
			b = void 0 === b ? null : b;
			a = a();
			c.memoizedState = [a, b];
			return a;
		},
		useReducer: function(a, b, c) {
			var d = Th();
			b = void 0 !== c ? c(b) : b;
			d.memoizedState = d.baseState = b;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b
			};
			d.queue = a;
			a = a.dispatch = xi.bind(null, M, a);
			return [d.memoizedState, a];
		},
		useRef: function(a) {
			var b = Th();
			a = { current: a };
			return b.memoizedState = a;
		},
		useState: hi,
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return Th().memoizedState = a;
		},
		useTransition: function() {
			var a = hi(!1), b = a[0];
			a = vi.bind(null, a[1]);
			Th().memoizedState = a;
			return [b, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b, c) {
			var d = M, e = Th();
			if (I) {
				if (void 0 === c) throw Error(p(407));
				c = c();
			} else {
				c = b();
				if (null === Q) throw Error(p(349));
				0 !== (Hh & 30) || di(d, b, c);
			}
			e.memoizedState = c;
			var f = {
				value: c,
				getSnapshot: b
			};
			e.queue = f;
			mi(ai.bind(null, d, f, a), [a]);
			d.flags |= 2048;
			bi(9, ci.bind(null, d, f, c, b), void 0, null);
			return c;
		},
		useId: function() {
			var a = Th(), b = Q.identifierPrefix;
			if (I) {
				var c = sg;
				var d = rg;
				c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
				b = ":" + b + "R" + c;
				c = Kh++;
				0 < c && (b += "H" + c.toString(32));
				b += ":";
			} else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
			return a.memoizedState = b;
		},
		unstable_isNewReconciler: !1
	};
	var Ph = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Wh,
		useRef: ji,
		useState: function() {
			return Wh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return ui(Uh(), N.memoizedState, a);
		},
		useTransition: function() {
			return [Wh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	var Qh = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Xh,
		useRef: ji,
		useState: function() {
			return Xh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			var b = Uh();
			return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
		},
		useTransition: function() {
			return [Xh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	function Ci(a, b) {
		if (a && a.defaultProps) {
			b = A({}, b);
			a = a.defaultProps;
			for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			return b;
		}
		return b;
	}
	function Di(a, b, c, d) {
		b = a.memoizedState;
		c = c(d, b);
		c = null === c || void 0 === c ? b : A({}, b, c);
		a.memoizedState = c;
		0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var Ei = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueReplaceState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.tag = 1;
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueForceUpdate: function(a, b) {
			a = a._reactInternals;
			var c = R(), d = yi(a), e = mh(c, d);
			e.tag = 2;
			void 0 !== b && null !== b && (e.callback = b);
			b = nh(a, e, d);
			null !== b && (gi(b, a, d, c), oh(b, a, d));
		}
	};
	function Fi(a, b, c, d, e, f, g) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function Gi(a, b, c) {
		var d = !1, e = Vf;
		var f = b.contextType;
		"object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		b = new b(c, f);
		a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		b.updater = Ei;
		a.stateNode = b;
		b._reactInternals = a;
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		return b;
	}
	function Hi(a, b, c, d) {
		a = b.state;
		"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
	}
	function Ii(a, b, c, d) {
		var e = a.stateNode;
		e.props = c;
		e.state = a.memoizedState;
		e.refs = {};
		kh(a);
		var f = b.contextType;
		"object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		e.state = a.memoizedState;
		f = b.getDerivedStateFromProps;
		"function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
		"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
		"function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function Ji(a, b) {
		try {
			var c = "", d = b;
			do
				c += Pa(d), d = d.return;
			while (d);
			var e = c;
		} catch (f) {
			e = "\nError generating stack: " + f.message + "\n" + f.stack;
		}
		return {
			value: a,
			source: b,
			stack: e,
			digest: null
		};
	}
	function Ki(a, b, c) {
		return {
			value: a,
			source: null,
			stack: null != c ? c : null,
			digest: null != b ? b : null
		};
	}
	function Li(a, b) {
		try {
			console.error(b.value);
		} catch (c) {
			setTimeout(function() {
				throw c;
			});
		}
	}
	var Mi = "function" === typeof WeakMap ? WeakMap : Map;
	function Ni(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		c.payload = { element: null };
		var d = b.value;
		c.callback = function() {
			Oi || (Oi = !0, Pi = d);
			Li(a, b);
		};
		return c;
	}
	function Qi(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		var d = a.type.getDerivedStateFromError;
		if ("function" === typeof d) {
			var e = b.value;
			c.payload = function() {
				return d(e);
			};
			c.callback = function() {
				Li(a, b);
			};
		}
		var f = a.stateNode;
		null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
			Li(a, b);
			"function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
			var c = b.stack;
			this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" });
		});
		return c;
	}
	function Si(a, b, c) {
		var d = a.pingCache;
		if (null === d) {
			d = a.pingCache = new Mi();
			var e = /* @__PURE__ */ new Set();
			d.set(b, e);
		} else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
		e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
	}
	function Ui(a) {
		do {
			var b;
			if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
			if (b) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Vi(a, b, c, d, e) {
		if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e;
		return a;
	}
	var Wi = ua.ReactCurrentOwner;
	var dh = !1;
	function Xi(a, b, c, d) {
		b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
	}
	function Yi(a, b, c, d, e) {
		c = c.render;
		var f = b.ref;
		ch(b, e);
		d = Nh(a, b, c, d, f, e);
		c = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && c && vg(b);
		b.flags |= 1;
		Xi(a, b, d, e);
		return b.child;
	}
	function $i(a, b, c, d, e) {
		if (null === a) {
			var f = c.type;
			if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
			a = Rg(c.type, null, d, b, b.mode, e);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		f = a.child;
		if (0 === (a.lanes & e)) {
			var g = f.memoizedProps;
			c = c.compare;
			c = null !== c ? c : Ie;
			if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
		}
		b.flags |= 1;
		a = Pg(f, d);
		a.ref = b.ref;
		a.return = b;
		return b.child = a;
	}
	function bj(a, b, c, d, e) {
		if (null !== a) {
			var f = a.memoizedProps;
			if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);
			else return b.lanes = a.lanes, Zi(a, b, e);
		}
		return cj(a, b, c, d, e);
	}
	function dj(a, b, c) {
		var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
		if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(ej, fj), fj |= c;
		else {
			if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b.updateQueue = null, G(ej, fj), fj |= a, null;
			b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d = null !== f ? f.baseLanes : c;
			G(ej, fj);
			fj |= d;
		}
		else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
		Xi(a, b, e, c);
		return b.child;
	}
	function gj(a, b) {
		var c = b.ref;
		if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function cj(a, b, c, d, e) {
		var f = Zf(c) ? Xf : H.current;
		f = Yf(b, f);
		ch(b, e);
		c = Nh(a, b, c, d, f, e);
		d = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && d && vg(b);
		b.flags |= 1;
		Xi(a, b, c, e);
		return b.child;
	}
	function hj(a, b, c, d, e) {
		if (Zf(c)) {
			var f = !0;
			cg(b);
		} else f = !1;
		ch(b, e);
		if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;
		else if (null === a) {
			var g = b.stateNode, h = b.memoizedProps;
			g.props = h;
			var k = g.context, l = c.contextType;
			"object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
			var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
			q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
			jh = !1;
			var r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			k = b.memoizedState;
			h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
		} else {
			g = b.stateNode;
			lh(a, b);
			h = b.memoizedProps;
			l = b.type === b.elementType ? h : Ci(b.type, h);
			g.props = l;
			q = b.pendingProps;
			r = g.context;
			k = c.contextType;
			"object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
			var y = c.getDerivedStateFromProps;
			(m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
			jh = !1;
			r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			var n = b.memoizedState;
			h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
		}
		return jj(a, b, c, d, f, e);
	}
	function jj(a, b, c, d, e, f) {
		gj(a, b);
		var g = 0 !== (b.flags & 128);
		if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
		d = b.stateNode;
		Wi.current = b;
		var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		b.flags |= 1;
		null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
		b.memoizedState = d.state;
		e && dg(b, c, !0);
		return b.child;
	}
	function kj(a) {
		var b = a.stateNode;
		b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		yh(a, b.containerInfo);
	}
	function lj(a, b, c, d, e) {
		Ig();
		Jg(e);
		b.flags |= 256;
		Xi(a, b, c, d);
		return b.child;
	}
	var mj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function nj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function oj(a, b, c) {
		var d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128), h;
		(h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		if (h) f = !0, b.flags &= -129;
		else if (null === a || null !== a.memoizedState) e |= 1;
		G(L, e & 1);
		if (null === a) {
			Eg(b);
			a = b.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
			g = d.children;
			a = d.fallback;
			return f ? (d = b.mode, f = b.child, g = {
				mode: "hidden",
				children: g
			}, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
		}
		e = a.memoizedState;
		if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
		if (f) {
			f = d.fallback;
			g = b.mode;
			e = a.child;
			h = e.sibling;
			var k = {
				mode: "hidden",
				children: d.children
			};
			0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
			null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
			f.return = b;
			d.return = b;
			d.sibling = f;
			b.child = d;
			d = f;
			f = b.child;
			g = a.child.memoizedState;
			g = null === g ? nj(c) : {
				baseLanes: g.baseLanes | c,
				cachePool: null,
				transitions: g.transitions
			};
			f.memoizedState = g;
			f.childLanes = a.childLanes & ~c;
			b.memoizedState = mj;
			return d;
		}
		f = a.child;
		a = f.sibling;
		d = Pg(f, {
			mode: "visible",
			children: d.children
		});
		0 === (b.mode & 1) && (d.lanes = c);
		d.return = b;
		d.sibling = null;
		null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		b.child = d;
		b.memoizedState = null;
		return d;
	}
	function qj(a, b) {
		b = pj({
			mode: "visible",
			children: b
		}, a.mode, 0, null);
		b.return = a;
		return a.child = b;
	}
	function sj(a, b, c, d) {
		null !== d && Jg(d);
		Ug(b, a.child, null, c);
		a = qj(b, b.pendingProps.children);
		a.flags |= 2;
		b.memoizedState = null;
		return a;
	}
	function rj(a, b, c, d, e, f, g) {
		if (c) {
			if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
			if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
			f = d.fallback;
			e = b.mode;
			d = pj({
				mode: "visible",
				children: d.children
			}, e, 0, null);
			f = Tg(f, e, g, null);
			f.flags |= 2;
			d.return = b;
			f.return = b;
			d.sibling = f;
			b.child = d;
			0 !== (b.mode & 1) && Ug(b, a.child, null, g);
			b.child.memoizedState = nj(g);
			b.memoizedState = mj;
			return f;
		}
		if (0 === (b.mode & 1)) return sj(a, b, g, null);
		if ("$!" === e.data) {
			d = e.nextSibling && e.nextSibling.dataset;
			if (d) var h = d.dgst;
			d = h;
			f = Error(p(419));
			d = Ki(f, d, void 0);
			return sj(a, b, g, d);
		}
		h = 0 !== (g & a.childLanes);
		if (dh || h) {
			d = Q;
			if (null !== d) {
				switch (g & -g) {
					case 4:
						e = 2;
						break;
					case 16:
						e = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e = 32;
						break;
					case 536870912:
						e = 268435456;
						break;
					default: e = 0;
				}
				e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
				0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
			}
			tj();
			d = Ki(Error(p(421)));
			return sj(a, b, g, d);
		}
		if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
		a = f.treeContext;
		yg = Lf(e.nextSibling);
		xg = b;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		b = qj(b, d.children);
		b.flags |= 4096;
		return b;
	}
	function vj(a, b, c) {
		a.lanes |= b;
		var d = a.alternate;
		null !== d && (d.lanes |= b);
		bh(a.return, b, c);
	}
	function wj(a, b, c, d, e) {
		var f = a.memoizedState;
		null === f ? a.memoizedState = {
			isBackwards: b,
			rendering: null,
			renderingStartTime: 0,
			last: d,
			tail: c,
			tailMode: e
		} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function xj(a, b, c) {
		var d = b.pendingProps, e = d.revealOrder, f = d.tail;
		Xi(a, b, d.children, c);
		d = L.current;
		if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
				else if (19 === a.tag) vj(a, c, b);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d &= 1;
		}
		G(L, d);
		if (0 === (b.mode & 1)) b.memoizedState = null;
		else switch (e) {
			case "forwards":
				c = b.child;
				for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
				c = e;
				null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
				wj(b, !1, e, c, f);
				break;
			case "backwards":
				c = null;
				e = b.child;
				for (b.child = null; null !== e;) {
					a = e.alternate;
					if (null !== a && null === Ch(a)) {
						b.child = e;
						break;
					}
					a = e.sibling;
					e.sibling = c;
					c = e;
					e = a;
				}
				wj(b, !0, c, null, f);
				break;
			case "together":
				wj(b, !1, null, null, void 0);
				break;
			default: b.memoizedState = null;
		}
		return b.child;
	}
	function ij(a, b) {
		0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function Zi(a, b, c) {
		null !== a && (b.dependencies = a.dependencies);
		rh |= b.lanes;
		if (0 === (c & b.childLanes)) return null;
		if (null !== a && b.child !== a.child) throw Error(p(153));
		if (null !== b.child) {
			a = b.child;
			c = Pg(a, a.pendingProps);
			b.child = c;
			for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
			c.sibling = null;
		}
		return b.child;
	}
	function yj(a, b, c) {
		switch (b.tag) {
			case 3:
				kj(b);
				Ig();
				break;
			case 5:
				Ah(b);
				break;
			case 1:
				Zf(b.type) && cg(b);
				break;
			case 4:
				yh(b, b.stateNode.containerInfo);
				break;
			case 10:
				var d = b.type._context, e = b.memoizedProps.value;
				G(Wg, d._currentValue);
				d._currentValue = e;
				break;
			case 13:
				d = b.memoizedState;
				if (null !== d) {
					if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
					if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
					G(L, L.current & 1);
					a = Zi(a, b, c);
					return null !== a ? a.sibling : null;
				}
				G(L, L.current & 1);
				break;
			case 19:
				d = 0 !== (c & b.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d) return xj(a, b, c);
					b.flags |= 128;
				}
				e = b.memoizedState;
				null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
				G(L, L.current);
				if (d) break;
				else return null;
			case 22:
			case 23: return b.lanes = 0, dj(a, b, c);
		}
		return Zi(a, b, c);
	}
	var zj = function(a, b) {
		for (var c = b.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
			else if (4 !== c.tag && null !== c.child) {
				c.child.return = c;
				c = c.child;
				continue;
			}
			if (c === b) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === b) return;
				c = c.return;
			}
			c.sibling.return = c.return;
			c = c.sibling;
		}
	};
	var Bj = function(a, b, c, d) {
		var e = a.memoizedProps;
		if (e !== d) {
			a = b.stateNode;
			xh(uh.current);
			var f = null;
			switch (c) {
				case "input":
					e = Ya(a, e);
					d = Ya(a, d);
					f = [];
					break;
				case "select":
					e = A({}, e, { value: void 0 });
					d = A({}, d, { value: void 0 });
					f = [];
					break;
				case "textarea":
					e = gb(a, e);
					d = gb(a, d);
					f = [];
					break;
				default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
			}
			ub(c, d);
			var g;
			c = null;
			for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
				var h = e[l];
				for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
			} else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
			for (l in d) {
				var k = d[l];
				h = null != e ? e[l] : void 0;
				if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
					for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
					for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
				} else c || (f || (f = []), f.push(l, c)), c = k;
				else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
			}
			c && (f = f || []).push("style", c);
			var l = f;
			if (b.updateQueue = l) b.flags |= 4;
		}
	};
	var Cj = function(a, b, c, d) {
		c !== d && (b.flags |= 4);
	};
	function Dj(a, b) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b = a.tail;
				for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
				null === c ? a.tail = null : c.sibling = null;
				break;
			case "collapsed":
				c = a.tail;
				for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
				null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		}
	}
	function S(a) {
		var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
		if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
		else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		a.subtreeFlags |= d;
		a.childLanes = c;
		return b;
	}
	function Ej(a, b, c) {
		var d = b.pendingProps;
		wg(b);
		switch (b.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b), null;
			case 1: return Zf(b.type) && $f(), S(b), null;
			case 3:
				d = b.stateNode;
				zh();
				E(Wf);
				E(H);
				Eh();
				d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
				if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
				S(b);
				return null;
			case 5:
				Bh(b);
				var e = xh(wh.current);
				c = b.type;
				if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				else {
					if (!d) {
						if (null === b.stateNode) throw Error(p(166));
						S(b);
						return null;
					}
					a = xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.type;
						var f = b.memoizedProps;
						d[Of] = b;
						d[Pf] = f;
						a = 0 !== (b.mode & 1);
						switch (c) {
							case "dialog":
								D("cancel", d);
								D("close", d);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d);
								break;
							case "video":
							case "audio":
								for (e = 0; e < lf.length; e++) D(lf[e], d);
								break;
							case "source":
								D("error", d);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d);
								D("load", d);
								break;
							case "details":
								D("toggle", d);
								break;
							case "input":
								Za(d, f);
								D("invalid", d);
								break;
							case "select":
								d._wrapperState = { wasMultiple: !!f.multiple };
								D("invalid", d);
								break;
							case "textarea": hb(d, f), D("invalid", d);
						}
						ub(c, f);
						e = null;
						for (var g in f) if (f.hasOwnProperty(g)) {
							var h = f[g];
							"children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
						}
						switch (c) {
							case "input":
								Va(d);
								db(d, f, !0);
								break;
							case "textarea":
								Va(d);
								jb(d);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f.onClick && (d.onclick = Bf);
						}
						d = e;
						b.updateQueue = d;
						null !== d && (b.flags |= 4);
					} else {
						g = 9 === e.nodeType ? e : e.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
						a[Of] = b;
						a[Pf] = d;
						zj(a, b, !1, !1);
						b.stateNode = a;
						a: {
							g = vb(c, d);
							switch (c) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e = d;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e = d;
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], a);
									e = d;
									break;
								case "source":
									D("error", a);
									e = d;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e = d;
									break;
								case "details":
									D("toggle", a);
									e = d;
									break;
								case "input":
									Za(a, d);
									e = Ya(a, d);
									D("invalid", a);
									break;
								case "option":
									e = d;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									e = A({}, d, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d);
									e = gb(a, d);
									D("invalid", a);
									break;
								default: e = d;
							}
							ub(c, e);
							h = e;
							for (f in h) if (h.hasOwnProperty(f)) {
								var k = h[f];
								"style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
							}
							switch (c) {
								case "input":
									Va(a);
									db(a, d, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + Sa(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									f = d.value;
									null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof e.onClick && (a.onclick = Bf);
							}
							switch (c) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d = !!d.autoFocus;
									break a;
								case "img":
									d = !0;
									break a;
								default: d = !1;
							}
						}
						d && (b.flags |= 4);
					}
					null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				}
				S(b);
				return null;
			case 6:
				if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
				else {
					if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
					c = xh(wh.current);
					xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.memoizedProps;
						d[Of] = b;
						if (f = d.nodeValue !== c) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d.nodeValue, c, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
							}
						}
						f && (b.flags |= 4);
					} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
				}
				S(b);
				return null;
			case 13:
				E(L);
				d = b.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
					else if (f = Gg(b), null !== d && null !== d.dehydrated) {
						if (null === a) {
							if (!f) throw Error(p(318));
							f = b.memoizedState;
							f = null !== f ? f.dehydrated : null;
							if (!f) throw Error(p(317));
							f[Of] = b;
						} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
						S(b);
						f = !1;
					} else null !== zg && (Fj(zg), zg = null), f = !0;
					if (!f) return b.flags & 65536 ? b : null;
				}
				if (0 !== (b.flags & 128)) return b.lanes = c, b;
				d = null !== d;
				d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
				null !== b.updateQueue && (b.flags |= 4);
				S(b);
				return null;
			case 4: return zh(), null === a && sf(b.stateNode.containerInfo), S(b), null;
			case 10: return ah(b.type._context), S(b), null;
			case 17: return Zf(b.type) && $f(), S(b), null;
			case 19:
				E(L);
				f = b.memoizedState;
				if (null === f) return S(b), null;
				d = 0 !== (b.flags & 128);
				g = f.rendering;
				if (null === g) if (d) Dj(f, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
						g = Ch(a);
						if (null !== g) {
							b.flags |= 128;
							Dj(f, !1);
							d = g.updateQueue;
							null !== d && (b.updateQueue = d, b.flags |= 4);
							b.subtreeFlags = 0;
							d = c;
							for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c = c.sibling;
							G(L, L.current & 1 | 2);
							return b.child;
						}
						a = a.sibling;
					}
					null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
				}
				else {
					if (!d) if (a = Ch(g), null !== a) {
						if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
					} else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
					f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
				}
				if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
				S(b);
				return null;
			case 22:
			case 23: return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p(156, b.tag));
	}
	function Ij(a, b) {
		wg(b);
		switch (b.tag) {
			case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 3: return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
			case 5: return Bh(b), null;
			case 13:
				E(L);
				a = b.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b.alternate) throw Error(p(340));
					Ig();
				}
				a = b.flags;
				return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 19: return E(L), null;
			case 4: return zh(), null;
			case 10: return ah(b.type._context), null;
			case 22:
			case 23: return Hj(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Jj = !1;
	var U = !1;
	var Kj = "function" === typeof WeakSet ? WeakSet : Set;
	var V = null;
	function Lj(a, b) {
		var c = a.ref;
		if (null !== c) if ("function" === typeof c) try {
			c(null);
		} catch (d) {
			W(a, b, d);
		}
		else c.current = null;
	}
	function Mj(a, b, c) {
		try {
			c();
		} catch (d) {
			W(a, b, d);
		}
	}
	var Nj = !1;
	function Oj(a, b) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c = (c = a.ownerDocument) && c.defaultView || window;
				var d = c.getSelection && c.getSelection();
				if (d && 0 !== d.rangeCount) {
					c = d.anchorNode;
					var e = d.anchorOffset, f = d.focusNode;
					d = d.focusOffset;
					try {
						c.nodeType, f.nodeType;
					} catch (F) {
						c = null;
						break a;
					}
					var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
					b: for (;;) {
						for (var y;;) {
							q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
							q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
							3 === q.nodeType && (g += q.nodeValue.length);
							if (null === (y = q.firstChild)) break;
							r = q;
							q = y;
						}
						for (;;) {
							if (q === a) break b;
							r === c && ++l === e && (h = g);
							r === f && ++m === d && (k = g);
							if (null !== (y = q.nextSibling)) break;
							q = r;
							r = q.parentNode;
						}
						q = y;
					}
					c = -1 === h || -1 === k ? null : {
						start: h,
						end: k
					};
				} else c = null;
			}
			c = c || {
				start: 0,
				end: 0
			};
		} else c = null;
		Df = {
			focusedElem: a,
			selectionRange: c
		};
		dd = !1;
		for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
		else for (; null !== V;) {
			b = V;
			try {
				var n = b.alternate;
				if (0 !== (b.flags & 1024)) switch (b.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n) {
							var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode;
							x.__reactInternalSnapshotBeforeUpdate = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
						}
						break;
					case 3:
						var u = b.stateNode.containerInfo;
						1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p(163));
				}
			} catch (F) {
				W(b, b.return, F);
			}
			a = b.sibling;
			if (null !== a) {
				a.return = b.return;
				V = a;
				break;
			}
			V = b.return;
		}
		n = Nj;
		Nj = !1;
		return n;
	}
	function Pj(a, b, c) {
		var d = b.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & a) === a) {
					var f = e.destroy;
					e.destroy = void 0;
					void 0 !== f && Mj(b, c, f);
				}
				e = e.next;
			} while (e !== d);
		}
	}
	function Qj(a, b) {
		b = b.updateQueue;
		b = null !== b ? b.lastEffect : null;
		if (null !== b) {
			var c = b = b.next;
			do {
				if ((c.tag & a) === a) {
					var d = c.create;
					c.destroy = d();
				}
				c = c.next;
			} while (c !== b);
		}
	}
	function Rj(a) {
		var b = a.ref;
		if (null !== b) {
			var c = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c;
					break;
				default: a = c;
			}
			"function" === typeof b ? b(a) : b.current = a;
		}
	}
	function Sj(a) {
		var b = a.alternate;
		null !== b && (a.alternate = null, Sj(b));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Tj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Uj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Tj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Vj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
		else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
	}
	function Wj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
		else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	var X = null;
	var Xj = !1;
	function Yj(a, b, c) {
		for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
	}
	function Zj(a, b, c) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c);
		} catch (h) {}
		switch (c.tag) {
			case 5: U || Lj(c, b);
			case 6:
				var d = X, e = Xj;
				X = null;
				Yj(a, b, c);
				X = d;
				Xj = e;
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
				break;
			case 18:
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
				break;
			case 4:
				d = X;
				e = Xj;
				X = c.stateNode.containerInfo;
				Xj = !0;
				Yj(a, b, c);
				X = d;
				Xj = e;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
					e = d = d.next;
					do {
						var f = e, g = f.destroy;
						f = f.tag;
						void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
						e = e.next;
					} while (e !== d);
				}
				Yj(a, b, c);
				break;
			case 1:
				if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
					d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
				} catch (h) {
					W(c, b, h);
				}
				Yj(a, b, c);
				break;
			case 21:
				Yj(a, b, c);
				break;
			case 22:
				c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
				break;
			default: Yj(a, b, c);
		}
	}
	function ak(a) {
		var b = a.updateQueue;
		if (null !== b) {
			a.updateQueue = null;
			var c = a.stateNode;
			null === c && (c = a.stateNode = new Kj());
			b.forEach(function(b) {
				var d = bk.bind(null, a, b);
				c.has(b) || (c.add(b), b.then(d, d));
			});
		}
	}
	function ck(a, b) {
		var c = b.deletions;
		if (null !== c) for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				var f = a, g = b, h = g;
				a: for (; null !== h;) {
					switch (h.tag) {
						case 5:
							X = h.stateNode;
							Xj = !1;
							break a;
						case 3:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
						case 4:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
					}
					h = h.return;
				}
				if (null === X) throw Error(p(160));
				Zj(f, g, e);
				X = null;
				Xj = !1;
				var k = e.alternate;
				null !== k && (k.return = null);
				e.return = null;
			} catch (l) {
				W(e, b, l);
			}
		}
		if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
	}
	function dk(a, b) {
		var c = a.alternate, d = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ck(b, a);
				ek(a);
				if (d & 4) {
					try {
						Pj(3, a, a.return), Qj(3, a);
					} catch (t) {
						W(a, a.return, t);
					}
					try {
						Pj(5, a, a.return);
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 1:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				break;
			case 5:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				if (a.flags & 32) {
					var e = a.stateNode;
					try {
						ob(e, "");
					} catch (t) {
						W(a, a.return, t);
					}
				}
				if (d & 4 && (e = a.stateNode, null != e)) {
					var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
					a.updateQueue = null;
					if (null !== k) try {
						"input" === h && "radio" === f.type && null != f.name && ab(e, f);
						vb(h, g);
						var l = vb(h, f);
						for (g = 0; g < k.length; g += 2) {
							var m = k[g], q = k[g + 1];
							"style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
						}
						switch (h) {
							case "input":
								bb(e, f);
								break;
							case "textarea":
								ib(e, f);
								break;
							case "select":
								var r = e._wrapperState.wasMultiple;
								e._wrapperState.wasMultiple = !!f.multiple;
								var y = f.value;
								null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
						}
						e[Pf] = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 6:
				ck(b, a);
				ek(a);
				if (d & 4) {
					if (null === a.stateNode) throw Error(p(162));
					e = a.stateNode;
					f = a.memoizedProps;
					try {
						e.nodeValue = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 3:
				ck(b, a);
				ek(a);
				if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
					bd(b.containerInfo);
				} catch (t) {
					W(a, a.return, t);
				}
				break;
			case 4:
				ck(b, a);
				ek(a);
				break;
			case 13:
				ck(b, a);
				ek(a);
				e = a.child;
				e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
				d & 4 && ak(a);
				break;
			case 22:
				m = null !== c && null !== c.memoizedState;
				a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
				ek(a);
				if (d & 8192) {
					l = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
						for (q = V = m; null !== V;) {
							r = V;
							y = r.child;
							switch (r.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Pj(4, r, r.return);
									break;
								case 1:
									Lj(r, r.return);
									var n = r.stateNode;
									if ("function" === typeof n.componentWillUnmount) {
										d = r;
										c = r.return;
										try {
											b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
										} catch (t) {
											W(d, c, t);
										}
									}
									break;
								case 5:
									Lj(r, r.return);
									break;
								case 22: if (null !== r.memoizedState) {
									gk(q);
									continue;
								}
							}
							null !== y ? (y.return = r, V = y) : gk(q);
						}
						m = m.sibling;
					}
					a: for (m = null, q = a;;) {
						if (5 === q.tag) {
							if (null === m) {
								m = q;
								try {
									e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
								} catch (t) {
									W(a, a.return, t);
								}
							}
						} else if (6 === q.tag) {
							if (null === m) try {
								q.stateNode.nodeValue = l ? "" : q.memoizedProps;
							} catch (t) {
								W(a, a.return, t);
							}
						} else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
							q.child.return = q;
							q = q.child;
							continue;
						}
						if (q === a) break a;
						for (; null === q.sibling;) {
							if (null === q.return || q.return === a) break a;
							m === q && (m = null);
							q = q.return;
						}
						m === q && (m = null);
						q.sibling.return = q.return;
						q = q.sibling;
					}
				}
				break;
			case 19:
				ck(b, a);
				ek(a);
				d & 4 && ak(a);
				break;
			case 21: break;
			default: ck(b, a), ek(a);
		}
	}
	function ek(a) {
		var b = a.flags;
		if (b & 2) {
			try {
				a: {
					for (var c = a.return; null !== c;) {
						if (Tj(c)) {
							var d = c;
							break a;
						}
						c = c.return;
					}
					throw Error(p(160));
				}
				switch (d.tag) {
					case 5:
						var e = d.stateNode;
						d.flags & 32 && (ob(e, ""), d.flags &= -33);
						Wj(a, Uj(a), e);
						break;
					case 3:
					case 4:
						var g = d.stateNode.containerInfo;
						Vj(a, Uj(a), g);
						break;
					default: throw Error(p(161));
				}
			} catch (k) {
				W(a, a.return, k);
			}
			a.flags &= -3;
		}
		b & 4096 && (a.flags &= -4097);
	}
	function hk(a, b, c) {
		V = a;
		ik(a, b, c);
	}
	function ik(a, b, c) {
		for (var d = 0 !== (a.mode & 1); null !== V;) {
			var e = V, f = e.child;
			if (22 === e.tag && d) {
				var g = null !== e.memoizedState || Jj;
				if (!g) {
					var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
					h = Jj;
					var l = U;
					Jj = g;
					if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
					for (; null !== f;) V = f, ik(f, b, c), f = f.sibling;
					V = e;
					Jj = h;
					U = l;
				}
				kk(a, b, c);
			} else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b = V;
			if (0 !== (b.flags & 8772)) {
				var c = b.alternate;
				try {
					if (0 !== (b.flags & 8772)) switch (b.tag) {
						case 0:
						case 11:
						case 15:
							U || Qj(5, b);
							break;
						case 1:
							var d = b.stateNode;
							if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
							else {
								var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
								d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
							}
							var f = b.updateQueue;
							null !== f && sh(b, f, d);
							break;
						case 3:
							var g = b.updateQueue;
							if (null !== g) {
								c = null;
								if (null !== b.child) switch (b.child.tag) {
									case 5:
										c = b.child.stateNode;
										break;
									case 1: c = b.child.stateNode;
								}
								sh(b, g, c);
							}
							break;
						case 5:
							var h = b.stateNode;
							if (null === c && b.flags & 4) {
								c = h;
								var k = b.memoizedProps;
								switch (b.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k.autoFocus && c.focus();
										break;
									case "img": k.src && (c.src = k.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b.memoizedState) {
								var l = b.alternate;
								if (null !== l) {
									var m = l.memoizedState;
									if (null !== m) {
										var q = m.dehydrated;
										null !== q && bd(q);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p(163));
					}
					U || b.flags & 512 && Rj(b);
				} catch (r) {
					W(b, b.return, r);
				}
			}
			if (b === a) {
				V = null;
				break;
			}
			c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function gk(a) {
		for (; null !== V;) {
			var b = V;
			if (b === a) {
				V = null;
				break;
			}
			var c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function jk(a) {
		for (; null !== V;) {
			var b = V;
			try {
				switch (b.tag) {
					case 0:
					case 11:
					case 15:
						var c = b.return;
						try {
							Qj(4, b);
						} catch (k) {
							W(b, c, k);
						}
						break;
					case 1:
						var d = b.stateNode;
						if ("function" === typeof d.componentDidMount) {
							var e = b.return;
							try {
								d.componentDidMount();
							} catch (k) {
								W(b, e, k);
							}
						}
						var f = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, f, k);
						}
						break;
					case 5:
						var g = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, g, k);
						}
				}
			} catch (k) {
				W(b, b.return, k);
			}
			if (b === a) {
				V = null;
				break;
			}
			var h = b.sibling;
			if (null !== h) {
				h.return = b.return;
				V = h;
				break;
			}
			V = b.return;
		}
	}
	var lk = Math.ceil;
	var mk = ua.ReactCurrentDispatcher;
	var nk = ua.ReactCurrentOwner;
	var ok = ua.ReactCurrentBatchConfig;
	var K = 0;
	var Q = null;
	var Y = null;
	var Z = 0;
	var fj = 0;
	var ej = Uf(0);
	var T = 0;
	var pk = null;
	var rh = 0;
	var qk = 0;
	var rk = 0;
	var sk = null;
	var tk = null;
	var fk = 0;
	var Gj = Infinity;
	var uk = null;
	var Oi = !1;
	var Pi = null;
	var Ri = null;
	var vk = !1;
	var wk = null;
	var xk = 0;
	var yk = 0;
	var zk = null;
	var Ak = -1;
	var Bk = 0;
	function R() {
		return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
	}
	function yi(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function gi(a, b, c, d) {
		if (50 < yk) throw yk = 0, zk = null, Error(p(185));
		Ac(a, c, d);
		if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
	}
	function Dk(a, b) {
		var c = a.callbackNode;
		wc(a, b);
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
		else if (b = d & -d, a.callbackPriority !== b) {
			null != c && bc(c);
			if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c = null;
			else {
				switch (Dc(d)) {
					case 1:
						c = fc;
						break;
					case 4:
						c = gc;
						break;
					case 16:
						c = hc;
						break;
					case 536870912:
						c = jc;
						break;
					default: c = hc;
				}
				c = Fk(c, Gk.bind(null, a));
			}
			a.callbackPriority = b;
			a.callbackNode = c;
		}
	}
	function Gk(a, b) {
		Ak = -1;
		Bk = 0;
		if (0 !== (K & 6)) throw Error(p(327));
		var c = a.callbackNode;
		if (Hk() && a.callbackNode !== c) return null;
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) return null;
		if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
		else {
			b = d;
			var e = K;
			K |= 2;
			var f = Jk();
			if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
			do
				try {
					Lk();
					break;
				} catch (h) {
					Mk(a, h);
				}
			while (1);
			$g();
			mk.current = f;
			K = e;
			null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
		}
		if (0 !== b) {
			2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
			if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
			if (6 === b) Ck(a, d);
			else {
				e = a.current.alternate;
				if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
				a.finishedWork = e;
				a.finishedLanes = d;
				switch (b) {
					case 0:
					case 1: throw Error(p(345));
					case 2:
						Pk(a, tk, uk);
						break;
					case 3:
						Ck(a, d);
						if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
							if (0 !== uc(a, 0)) break;
							e = a.suspendedLanes;
							if ((e & d) !== d) {
								R();
								a.pingedLanes |= a.suspendedLanes & e;
								break;
							}
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 4:
						Ck(a, d);
						if ((d & 4194240) === d) break;
						b = a.eventTimes;
						for (e = -1; 0 < d;) {
							var g = 31 - oc(d);
							f = 1 << g;
							g = b[g];
							g > e && (e = g);
							d &= ~f;
						}
						d = e;
						d = B() - d;
						d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
						if (10 < d) {
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 5:
						Pk(a, tk, uk);
						break;
					default: throw Error(p(329));
				}
			}
		}
		Dk(a, B());
		return a.callbackNode === c ? Gk.bind(null, a) : null;
	}
	function Nk(a, b) {
		var c = sk;
		a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
		a = Ik(a, b);
		2 !== a && (b = tk, tk = c, null !== b && Fj(b));
		return a;
	}
	function Fj(a) {
		null === tk ? tk = a : tk.push.apply(tk, a);
	}
	function Ok(a) {
		for (var b = a;;) {
			if (b.flags & 16384) {
				var c = b.updateQueue;
				if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
					var e = c[d], f = e.getSnapshot;
					e = e.value;
					try {
						if (!He(f(), e)) return !1;
					} catch (g) {
						return !1;
					}
				}
			}
			c = b.child;
			if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
			else {
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return !0;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
		}
		return !0;
	}
	function Ck(a, b) {
		b &= ~rk;
		b &= ~qk;
		a.suspendedLanes |= b;
		a.pingedLanes &= ~b;
		for (a = a.expirationTimes; 0 < b;) {
			var c = 31 - oc(b), d = 1 << c;
			a[c] = -1;
			b &= ~d;
		}
	}
	function Ek(a) {
		if (0 !== (K & 6)) throw Error(p(327));
		Hk();
		var b = uc(a, 0);
		if (0 === (b & 1)) return Dk(a, B()), null;
		var c = Ik(a, b);
		if (0 !== a.tag && 2 === c) {
			var d = xc(a);
			0 !== d && (b = d, c = Nk(a, d));
		}
		if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
		if (6 === c) throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b;
		Pk(a, tk, uk);
		Dk(a, B());
		return null;
	}
	function Qk(a, b) {
		var c = K;
		K |= 1;
		try {
			return a(b);
		} finally {
			K = c, 0 === K && (Gj = B() + 500, fg && jg());
		}
	}
	function Rk(a) {
		null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
		var b = K;
		K |= 1;
		var c = ok.transition, d = C;
		try {
			if (ok.transition = null, C = 1, a) return a();
		} finally {
			C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
		}
	}
	function Hj() {
		fj = ej.current;
		E(ej);
	}
	function Kk(a, b) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c = a.timeoutHandle;
		-1 !== c && (a.timeoutHandle = -1, Gf(c));
		if (null !== Y) for (c = Y.return; null !== c;) {
			var d = c;
			wg(d);
			switch (d.tag) {
				case 1:
					d = d.type.childContextTypes;
					null !== d && void 0 !== d && $f();
					break;
				case 3:
					zh();
					E(Wf);
					E(H);
					Eh();
					break;
				case 5:
					Bh(d);
					break;
				case 4:
					zh();
					break;
				case 13:
					E(L);
					break;
				case 19:
					E(L);
					break;
				case 10:
					ah(d.type._context);
					break;
				case 22:
				case 23: Hj();
			}
			c = c.return;
		}
		Q = a;
		Y = a = Pg(a.current, null);
		Z = fj = b;
		T = 0;
		pk = null;
		rk = qk = rh = 0;
		tk = sk = null;
		if (null !== fh) {
			for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
				c.interleaved = null;
				var e = d.next, f = c.pending;
				if (null !== f) {
					var g = f.next;
					f.next = e;
					d.next = g;
				}
				c.pending = d;
			}
			fh = null;
		}
		return a;
	}
	function Mk(a, b) {
		do {
			var c = Y;
			try {
				$g();
				Fh.current = Rh;
				if (Ih) {
					for (var d = M.memoizedState; null !== d;) {
						var e = d.queue;
						null !== e && (e.pending = null);
						d = d.next;
					}
					Ih = !1;
				}
				Hh = 0;
				O = N = M = null;
				Jh = !1;
				Kh = 0;
				nk.current = null;
				if (null === c || null === c.return) {
					T = 1;
					pk = b;
					Y = null;
					break;
				}
				a: {
					var f = a, g = c.return, h = c, k = b;
					b = Z;
					h.flags |= 32768;
					if (null !== k && "object" === typeof k && "function" === typeof k.then) {
						var l = k, m = h, q = m.tag;
						if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
							var r = m.alternate;
							r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
						}
						var y = Ui(g);
						if (null !== y) {
							y.flags &= -257;
							Vi(y, g, h, f, b);
							y.mode & 1 && Si(f, l, b);
							b = y;
							k = l;
							var n = b.updateQueue;
							if (null === n) {
								var t = /* @__PURE__ */ new Set();
								t.add(k);
								b.updateQueue = t;
							} else n.add(k);
							break a;
						} else {
							if (0 === (b & 1)) {
								Si(f, l, b);
								tj();
								break a;
							}
							k = Error(p(426));
						}
					} else if (I && h.mode & 1) {
						var J = Ui(g);
						if (null !== J) {
							0 === (J.flags & 65536) && (J.flags |= 256);
							Vi(J, g, h, f, b);
							Jg(Ji(k, h));
							break a;
						}
					}
					f = k = Ji(k, h);
					4 !== T && (T = 2);
					null === sk ? sk = [f] : sk.push(f);
					f = g;
					do {
						switch (f.tag) {
							case 3:
								f.flags |= 65536;
								b &= -b;
								f.lanes |= b;
								var x = Ni(f, k, b);
								ph(f, x);
								break a;
							case 1:
								h = k;
								var w = f.type, u = f.stateNode;
								if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
									f.flags |= 65536;
									b &= -b;
									f.lanes |= b;
									var F = Qi(f, h, b);
									ph(f, F);
									break a;
								}
						}
						f = f.return;
					} while (null !== f);
				}
				Sk(c);
			} catch (na) {
				b = na;
				Y === c && null !== c && (Y = c = c.return);
				continue;
			}
			break;
		} while (1);
	}
	function Jk() {
		var a = mk.current;
		mk.current = Rh;
		return null === a ? Rh : a;
	}
	function tj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
	}
	function Ik(a, b) {
		var c = K;
		K |= 2;
		var d = Jk();
		if (Q !== a || Z !== b) uk = null, Kk(a, b);
		do
			try {
				Tk();
				break;
			} catch (e) {
				Mk(a, e);
			}
		while (1);
		$g();
		K = c;
		mk.current = d;
		if (null !== Y) throw Error(p(261));
		Q = null;
		Z = 0;
		return T;
	}
	function Tk() {
		for (; null !== Y;) Uk(Y);
	}
	function Lk() {
		for (; null !== Y && !cc();) Uk(Y);
	}
	function Uk(a) {
		var b = Vk(a.alternate, a, fj);
		a.memoizedProps = a.pendingProps;
		null === b ? Sk(a) : Y = b;
		nk.current = null;
	}
	function Sk(a) {
		var b = a;
		do {
			var c = b.alternate;
			a = b.return;
			if (0 === (b.flags & 32768)) {
				if (c = Ej(c, b, fj), null !== c) {
					Y = c;
					return;
				}
			} else {
				c = Ij(c, b);
				if (null !== c) {
					c.flags &= 32767;
					Y = c;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b = b.sibling;
			if (null !== b) {
				Y = b;
				return;
			}
			Y = b = a;
		} while (null !== b);
		0 === T && (T = 5);
	}
	function Pk(a, b, c) {
		var d = C, e = ok.transition;
		try {
			ok.transition = null, C = 1, Wk(a, b, c, d);
		} finally {
			ok.transition = e, C = d;
		}
		return null;
	}
	function Wk(a, b, c, d) {
		do
			Hk();
		while (null !== wk);
		if (0 !== (K & 6)) throw Error(p(327));
		c = a.finishedWork;
		var e = a.finishedLanes;
		if (null === c) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c === a.current) throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f = c.lanes | c.childLanes;
		Bc(a, f);
		a === Q && (Y = Q = null, Z = 0);
		0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function() {
			Hk();
			return null;
		}));
		f = 0 !== (c.flags & 15990);
		if (0 !== (c.subtreeFlags & 15990) || f) {
			f = ok.transition;
			ok.transition = null;
			var g = C;
			C = 1;
			var h = K;
			K |= 4;
			nk.current = null;
			Oj(a, c);
			dk(c, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c;
			hk(c, a, e);
			dc();
			K = h;
			C = g;
			ok.transition = f;
		} else a.current = c;
		vk && (vk = !1, wk = a, xk = e);
		f = a.pendingLanes;
		0 === f && (Ri = null);
		mc(c.stateNode, d);
		Dk(a, B());
		if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
			componentStack: e.stack,
			digest: e.digest
		});
		if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
		0 !== (xk & 1) && 0 !== a.tag && Hk();
		f = a.pendingLanes;
		0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
		jg();
		return null;
	}
	function Hk() {
		if (null !== wk) {
			var a = Dc(xk), b = ok.transition, c = C;
			try {
				ok.transition = null;
				C = 16 > a ? 16 : a;
				if (null === wk) var d = !1;
				else {
					a = wk;
					wk = null;
					xk = 0;
					if (0 !== (K & 6)) throw Error(p(331));
					var e = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f = V, g = f.child;
						if (0 !== (V.flags & 16)) {
							var h = f.deletions;
							if (null !== h) {
								for (var k = 0; k < h.length; k++) {
									var l = h[k];
									for (V = l; null !== V;) {
										var m = V;
										switch (m.tag) {
											case 0:
											case 11:
											case 15: Pj(8, m, f);
										}
										var q = m.child;
										if (null !== q) q.return = m, V = q;
										else for (; null !== V;) {
											m = V;
											var r = m.sibling, y = m.return;
											Sj(m);
											if (m === l) {
												V = null;
												break;
											}
											if (null !== r) {
												r.return = y;
												V = r;
												break;
											}
											V = y;
										}
									}
								}
								var n = f.alternate;
								if (null !== n) {
									var t = n.child;
									if (null !== t) {
										n.child = null;
										do {
											var J = t.sibling;
											t.sibling = null;
											t = J;
										} while (null !== t);
									}
								}
								V = f;
							}
						}
						if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
						else b: for (; null !== V;) {
							f = V;
							if (0 !== (f.flags & 2048)) switch (f.tag) {
								case 0:
								case 11:
								case 15: Pj(9, f, f.return);
							}
							var x = f.sibling;
							if (null !== x) {
								x.return = f.return;
								V = x;
								break b;
							}
							V = f.return;
						}
					}
					var w = a.current;
					for (V = w; null !== V;) {
						g = V;
						var u = g.child;
						if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
						else b: for (g = w; null !== V;) {
							h = V;
							if (0 !== (h.flags & 2048)) try {
								switch (h.tag) {
									case 0:
									case 11:
									case 15: Qj(9, h);
								}
							} catch (na) {
								W(h, h.return, na);
							}
							if (h === g) {
								V = null;
								break b;
							}
							var F = h.sibling;
							if (null !== F) {
								F.return = h.return;
								V = F;
								break b;
							}
							V = h.return;
						}
					}
					K = e;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d = !0;
				}
				return d;
			} finally {
				C = c, ok.transition = b;
			}
		}
		return !1;
	}
	function Xk(a, b, c) {
		b = Ji(c, b);
		b = Ni(a, b, 1);
		a = nh(a, b, 1);
		b = R();
		null !== a && (Ac(a, 1, b), Dk(a, b));
	}
	function W(a, b, c) {
		if (3 === a.tag) Xk(a, a, c);
		else for (; null !== b;) {
			if (3 === b.tag) {
				Xk(b, a, c);
				break;
			} else if (1 === b.tag) {
				var d = b.stateNode;
				if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
					a = Ji(c, a);
					a = Qi(b, a, 1);
					b = nh(b, a, 1);
					a = R();
					null !== b && (Ac(b, 1, a), Dk(b, a));
					break;
				}
			}
			b = b.return;
		}
	}
	function Ti(a, b, c) {
		var d = a.pingCache;
		null !== d && d.delete(b);
		b = R();
		a.pingedLanes |= a.suspendedLanes & c;
		Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
		Dk(a, b);
	}
	function Yk(a, b) {
		0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c = R();
		a = ih(a, b);
		null !== a && (Ac(a, b, c), Dk(a, c));
	}
	function uj(a) {
		var b = a.memoizedState, c = 0;
		null !== b && (c = b.retryLane);
		Yk(a, c);
	}
	function bk(a, b) {
		var c = 0;
		switch (a.tag) {
			case 13:
				var d = a.stateNode;
				var e = a.memoizedState;
				null !== e && (c = e.retryLane);
				break;
			case 19:
				d = a.stateNode;
				break;
			default: throw Error(p(314));
		}
		null !== d && d.delete(b);
		Yk(a, c);
	}
	var Vk = function(a, b, c) {
		if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;
		else {
			if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
			dh = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		b.lanes = 0;
		switch (b.tag) {
			case 2:
				var d = b.type;
				ij(a, b);
				a = b.pendingProps;
				var e = Yf(b, H.current);
				ch(b, c);
				e = Nh(null, b, d, a, e, c);
				var f = Sh();
				b.flags |= 1;
				"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
				return b;
			case 16:
				d = b.elementType;
				a: {
					ij(a, b);
					a = b.pendingProps;
					e = d._init;
					d = e(d._payload);
					b.type = d;
					e = b.tag = Zk(d);
					a = Ci(d, a);
					switch (e) {
						case 0:
							b = cj(null, b, d, a, c);
							break a;
						case 1:
							b = hj(null, b, d, a, c);
							break a;
						case 11:
							b = Yi(null, b, d, a, c);
							break a;
						case 14:
							b = $i(null, b, d, Ci(d.type, a), c);
							break a;
					}
					throw Error(p(306, d, ""));
				}
				return b;
			case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
			case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
			case 3:
				a: {
					kj(b);
					if (null === a) throw Error(p(387));
					d = b.pendingProps;
					f = b.memoizedState;
					e = f.element;
					lh(a, b);
					qh(b, d, null, c);
					var g = b.memoizedState;
					d = g.element;
					if (f.isDehydrated) if (f = {
						element: d,
						isDehydrated: !1,
						cache: g.cache,
						pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
						transitions: g.transitions
					}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
						e = Ji(Error(p(423)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else if (d !== e) {
						e = Ji(Error(p(424)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
					else {
						Ig();
						if (d === e) {
							b = Zi(a, b, c);
							break a;
						}
						Xi(a, b, d, c);
					}
					b = b.child;
				}
				return b;
			case 5: return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
			case 6: return null === a && Eg(b), null;
			case 13: return oj(a, b, c);
			case 4: return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
			case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
			case 7: return Xi(a, b, b.pendingProps, c), b.child;
			case 8: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 12: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 10:
				a: {
					d = b.type._context;
					e = b.pendingProps;
					f = b.memoizedProps;
					g = e.value;
					G(Wg, d._currentValue);
					d._currentValue = g;
					if (null !== f) if (He(f.value, g)) {
						if (f.children === e.children && !Wf.current) {
							b = Zi(a, b, c);
							break a;
						}
					} else for (f = b.child, null !== f && (f.return = b); null !== f;) {
						var h = f.dependencies;
						if (null !== h) {
							g = f.child;
							for (var k = h.firstContext; null !== k;) {
								if (k.context === d) {
									if (1 === f.tag) {
										k = mh(-1, c & -c);
										k.tag = 2;
										var l = f.updateQueue;
										if (null !== l) {
											l = l.shared;
											var m = l.pending;
											null === m ? k.next = k : (k.next = m.next, m.next = k);
											l.pending = k;
										}
									}
									f.lanes |= c;
									k = f.alternate;
									null !== k && (k.lanes |= c);
									bh(f.return, c, b);
									h.lanes |= c;
									break;
								}
								k = k.next;
							}
						} else if (10 === f.tag) g = f.type === b.type ? null : f.child;
						else if (18 === f.tag) {
							g = f.return;
							if (null === g) throw Error(p(341));
							g.lanes |= c;
							h = g.alternate;
							null !== h && (h.lanes |= c);
							bh(g, c, b);
							g = f.sibling;
						} else g = f.child;
						if (null !== g) g.return = f;
						else for (g = f; null !== g;) {
							if (g === b) {
								g = null;
								break;
							}
							f = g.sibling;
							if (null !== f) {
								f.return = g.return;
								g = f;
								break;
							}
							g = g.return;
						}
						f = g;
					}
					Xi(a, b, e.children, c);
					b = b.child;
				}
				return b;
			case 9: return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
			case 14: return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
			case 15: return bj(a, b, b.type, b.pendingProps, c);
			case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
			case 19: return xj(a, b, c);
			case 22: return dj(a, b, c);
		}
		throw Error(p(156, b.tag));
	};
	function Fk(a, b) {
		return ac(a, b);
	}
	function $k(a, b, c, d) {
		this.tag = a;
		this.key = c;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b, c, d) {
		return new $k(a, b, c, d);
	}
	function aj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function Zk(a) {
		if ("function" === typeof a) return aj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function Pg(a, b) {
		var c = a.alternate;
		null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		c.flags = a.flags & 14680064;
		c.childLanes = a.childLanes;
		c.lanes = a.lanes;
		c.child = a.child;
		c.memoizedProps = a.memoizedProps;
		c.memoizedState = a.memoizedState;
		c.updateQueue = a.updateQueue;
		b = a.dependencies;
		c.dependencies = null === b ? null : {
			lanes: b.lanes,
			firstContext: b.firstContext
		};
		c.sibling = a.sibling;
		c.index = a.index;
		c.ref = a.ref;
		return c;
	}
	function Rg(a, b, c, d, e, f) {
		var g = 2;
		d = a;
		if ("function" === typeof a) aj(a) && (g = 1);
		else if ("string" === typeof a) g = 5;
		else a: switch (a) {
			case ya: return Tg(c.children, e, f, b);
			case za:
				g = 8;
				e |= 8;
				break;
			case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
			case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
			case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
			case Ia: return pj(c, e, f, b);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g = 10;
						break a;
					case Ca:
						g = 9;
						break a;
					case Da:
						g = 11;
						break a;
					case Ga:
						g = 14;
						break a;
					case Ha:
						g = 16;
						d = null;
						break a;
				}
				throw Error(p(130, null == a ? a : typeof a, ""));
		}
		b = Bg(g, c, b, e);
		b.elementType = a;
		b.type = d;
		b.lanes = f;
		return b;
	}
	function Tg(a, b, c, d) {
		a = Bg(7, a, d, b);
		a.lanes = c;
		return a;
	}
	function pj(a, b, c, d) {
		a = Bg(22, a, d, b);
		a.elementType = Ia;
		a.lanes = c;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function Qg(a, b, c) {
		a = Bg(6, a, null, b);
		a.lanes = c;
		return a;
	}
	function Sg(a, b, c) {
		b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		b.lanes = c;
		b.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b;
	}
	function al(a, b, c, d, e) {
		this.tag = b;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d;
		this.onRecoverableError = e;
		this.mutableSourceEagerHydrationData = null;
	}
	function bl(a, b, c, d, e, f, g, h, k) {
		a = new al(a, b, c, h, k);
		1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
		f = Bg(3, null, null, b);
		a.current = f;
		f.stateNode = a;
		f.memoizedState = {
			element: d,
			isDehydrated: c,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		kh(f);
		return a;
	}
	function cl(a, b, c) {
		var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d ? null : "" + d,
			children: a,
			containerInfo: b,
			implementation: c
		};
	}
	function dl(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
			var b = a;
			do {
				switch (b.tag) {
					case 3:
						b = b.stateNode.context;
						break a;
					case 1: if (Zf(b.type)) {
						b = b.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b = b.return;
			} while (null !== b);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c = a.type;
			if (Zf(c)) return bg(a, c, b);
		}
		return b;
	}
	function el(a, b, c, d, e, f, g, h, k) {
		a = bl(c, d, !0, a, e, f, g, h, k);
		a.context = dl(null);
		c = a.current;
		d = R();
		e = yi(c);
		f = mh(d, e);
		f.callback = void 0 !== b && null !== b ? b : null;
		nh(c, f, e);
		a.current.lanes = e;
		Ac(a, e, d);
		Dk(a, d);
		return a;
	}
	function fl(a, b, c, d) {
		var e = b.current, f = R(), g = yi(e);
		c = dl(c);
		null === b.context ? b.context = c : b.pendingContext = c;
		b = mh(f, g);
		b.payload = { element: a };
		d = void 0 === d ? null : d;
		null !== d && (b.callback = d);
		a = nh(e, b, g);
		null !== a && (gi(a, e, g, f), oh(a, e, g));
		return g;
	}
	function gl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function hl(a, b) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c = a.retryLane;
			a.retryLane = 0 !== c && c < b ? c : b;
		}
	}
	function il(a, b) {
		hl(a, b);
		(a = a.alternate) && hl(a, b);
	}
	function jl() {
		return null;
	}
	var kl = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ll(a) {
		this._internalRoot = a;
	}
	ml.prototype.render = ll.prototype.render = function(a) {
		var b = this._internalRoot;
		if (null === b) throw Error(p(409));
		fl(a, b, null, null);
	};
	ml.prototype.unmount = ll.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b = a.containerInfo;
			Rk(function() {
				fl(null, a, null, null);
			});
			b[uf] = null;
		}
	};
	function ml(a) {
		this._internalRoot = a;
	}
	ml.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b
			};
			for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
			Qc.splice(c, 0, a);
			0 === c && Vc(a);
		}
	};
	function nl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function pl() {}
	function ql(a, b, c, d, e) {
		if (e) {
			if ("function" === typeof d) {
				var f = d;
				d = function() {
					var a = gl(g);
					f.call(a);
				};
			}
			var g = el(b, d, a, 0, null, !1, !1, "", pl);
			a._reactRootContainer = g;
			a[uf] = g.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Rk();
			return g;
		}
		for (; e = a.lastChild;) a.removeChild(e);
		if ("function" === typeof d) {
			var h = d;
			d = function() {
				var a = gl(k);
				h.call(a);
			};
		}
		var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
		a._reactRootContainer = k;
		a[uf] = k.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Rk(function() {
			fl(b, k, c, d);
		});
		return k;
	}
	function rl(a, b, c, d, e) {
		var f = c._reactRootContainer;
		if (f) {
			var g = f;
			if ("function" === typeof e) {
				var h = e;
				e = function() {
					var a = gl(g);
					h.call(a);
				};
			}
			fl(b, g, a, e);
		} else g = ql(c, b, a, e, d);
		return gl(g);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b = a.stateNode;
				if (b.current.memoizedState.isDehydrated) {
					var c = tc(b.pendingLanes);
					0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
				}
				break;
			case 13: Rk(function() {
				var b = ih(a, 1);
				if (null !== b) gi(b, a, 1, R());
			}), il(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b = ih(a, 134217728);
			if (null !== b) gi(b, a, 134217728, R());
			il(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b = yi(a), c = ih(a, b);
			if (null !== c) gi(c, a, b, R());
			il(a, b);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b) {
		var c = C;
		try {
			return C = a, b();
		} finally {
			C = c;
		}
	};
	yb = function(a, b, c) {
		switch (b) {
			case "input":
				bb(a, c);
				b = c.name;
				if ("radio" === c.type && null != b) {
					for (c = a; c.parentNode;) c = c.parentNode;
					c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						if (d !== a && d.form === a.form) {
							var e = Db(d);
							if (!e) throw Error(p(90));
							Wa(d);
							bb(d, e);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c);
				break;
			case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		}
	};
	Gb = Qk;
	Hb = Rk;
	var sl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Qk
		]
	};
	var tl = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	};
	var ul = {
		bundleType: tl.bundleType,
		version: tl.version,
		rendererPackageName: tl.rendererPackageName,
		rendererConfig: tl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: tl.findFiberByHostInstance || jl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!vl.isDisabled && vl.supportsFiber) try {
			kc = vl.inject(ul), lc = vl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
	exports.createPortal = function(a, b) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!nl(b)) throw Error(p(200));
		return cl(a, b, null, c);
	};
	exports.createRoot = function(a, b) {
		if (!nl(a)) throw Error(p(299));
		var c = !1, d = "", e = kl;
		null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		b = bl(a, 1, !1, null, null, c, !1, d, e);
		a[uf] = b.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ll(b);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b = a._reactInternals;
		if (void 0 === b) {
			if ("function" === typeof a.render) throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Rk(a);
	};
	exports.hydrate = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !0, c);
	};
	exports.hydrateRoot = function(a, b, c) {
		if (!nl(a)) throw Error(p(405));
		var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
		null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
		a[uf] = b.current;
		sf(a);
		if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		return new ml(b);
	};
	exports.render = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !1, c);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!ol(a)) throw Error(p(40));
		return a._reactRootContainer ? (Rk(function() {
			rl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Qk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
		if (!ol(c)) throw Error(p(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		return rl(a, b, c, !1, d);
	};
	exports.version = "18.3.1-next-f1338f8080-20240426";
}));
//#endregion
//#region node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
//#endregion
//#region node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var f = require_react();
	var k = Symbol.for("react.element");
	var l = Symbol.for("react.fragment");
	var m = Object.prototype.hasOwnProperty;
	var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
	var p = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function q(c, a, g) {
		var b, d = {}, e = null, h = null;
		void 0 !== g && (e = "" + g);
		void 0 !== a.key && (e = "" + a.key);
		void 0 !== a.ref && (h = a.ref);
		for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
		if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
		return {
			$$typeof: k,
			type: c,
			key: e,
			ref: h,
			props: d,
			_owner: n.current
		};
	}
	exports.Fragment = l;
	exports.jsx = q;
	exports.jsxs = q;
}));
//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production_min();
}));
//#endregion
//#region src/client/controls.tsx
var import_client = require_client();
var import_react = require_react();
var import_react_dom = require_react_dom();
var import_jsx_runtime = require_jsx_runtime();
const cx = (...names) => names.filter(Boolean).join(" ");
const ICON_PATHS = {
	"chevron-left": "M15 5l-7 7 7 7",
	"chevron-right": "M9 5l7 7-7 7",
	"chevron-down": "M5 9l7 7 7-7",
	"chevron-up": "M5 15l7-7 7 7",
	search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",
	question: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01",
	plus: "M12 5v14M5 12h14",
	trash: "M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",
	refresh: "M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5",
	clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
	history: "M3.5 12a8.5 8.5 0 1 0 2.5-6M3.5 4v4h4M12 8v4l3 2",
	shield: "M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z",
	decision: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5",
	message: "M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-5 4V6a1 1 0 0 1 1-1z",
	inbox: "M4 13l2.5-8h11l2.5 8M4 13v6h16v-6M4 13h5l1 2h4l1-2h5",
	hash: "M10 4L8 20M16 4l-2 16M5 9h15M4 15h15",
	filter: "M4 5h16l-6 7.5V18l-4 2v-7.5z",
	user: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5",
	close: "M6 6l12 12M18 6L6 18",
	settings: "M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4",
	external: "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
	session: "M4 5h16v14H4zM8 10l3 2-3 2M13 15h3",
	stop: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.5h5v5h-5z",
	pause: "M9 6v12M15 6v12",
	play: "M8 5l11 7-11 7z",
	unsubscribe: "M6 16v-5a6 6 0 0 1 10-4.5M18 11v5l2 2H8M10 20h4M4 4l16 16",
	dismiss: "M4 4l16 16M9.9 5.2A9 9 0 0 1 21 12a12 12 0 0 1-2.4 3.2M6.3 6.4A12 12 0 0 0 3 12c2 4 5.5 6 9 6 1.4 0 2.7-.3 3.9-.9",
	pull: "M7 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 8v8M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 16V9a2 2 0 0 0-2-2h-4M13 5l-2 2 2 2",
	copy: "M9 9h10v11H9zM5 15V4h10",
	review: "M9 4h6v3H9zM7 5H5v15h14V5h-2M9 13l2 2 4-4",
	ask: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01",
	alert: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7.5v5.5M12 16.5h.01",
	running: "M12 3a9 9 0 1 0 9 9",
	blocked: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM5.6 5.6l12.8 12.8",
	queue: "M4 6h16M4 12h16M4 18h10"
};
function Icon({ name, size = 16 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.8,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: ICON_PATHS[name] })
	});
}
function Button({ variant = "ghost", size = "md", icon, className, children, type = "button", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type,
		className: cx("dt-btn", `dt-btn-${variant}`, `dt-btn-${size}`, className),
		...rest,
		children: [icon !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-btn-icon",
			children: icon
		}), children]
	});
}
function Tag({ tone = "outline", title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "dt-tag",
		"data-tone": tone,
		title,
		children
	});
}
function Pill({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cx("dt-pill", active && "dt-pill-active"),
		"aria-pressed": active,
		onClick,
		children
	});
}
function walk(event, values, value, onChange) {
	const index = values.indexOf(value);
	const next = {
		ArrowRight: index + 1,
		ArrowLeft: index - 1,
		Home: 0,
		End: values.length - 1
	}[event.key];
	if (next === void 0) return;
	event.preventDefault();
	const target = values[(next + values.length) % values.length];
	if (target !== value) onChange(target);
	const list = event.currentTarget;
	requestAnimationFrame(() => list.querySelector("[role=\"tab\"][aria-selected=\"true\"]")?.focus());
}
/** Page-level tab bar that re-emits `onChange` when clicking the active tab so callers can reset to the tab root. */
function SegmentedTabs({ items, value, onChange, label, className }) {
	const list = (0, import_react.useRef)(null);
	const [more, setMore] = (0, import_react.useState)();
	const measure = (0, import_react.useCallback)(() => {
		const element = list.current;
		if (!element) return;
		const start = element.scrollLeft > 1, end = element.scrollLeft + element.clientWidth < element.scrollWidth - 1;
		setMore(start && end ? "both" : start ? "start" : end ? "end" : void 0);
	}, []);
	(0, import_react.useEffect)(() => {
		measure();
		if (!list.current || typeof ResizeObserver === "undefined") return;
		const observer = new ResizeObserver(measure);
		observer.observe(list.current);
		for (const tab of list.current.children) observer.observe(tab);
		return () => {
			observer.disconnect();
		};
	}, [measure, items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: list,
		role: "tablist",
		"aria-label": label,
		className: cx("dt-tabs", className),
		"data-more": more,
		onScroll: measure,
		style: { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` },
		onKeyDown: (event) => walk(event, items.map((item) => item.value), value, onChange),
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "tab",
			id: item.id,
			"aria-controls": item.panelId,
			"aria-selected": item.value === value,
			tabIndex: item.value === value ? 0 : -1,
			className: "dt-tab",
			onClick: () => onChange(item.value),
			children: item.label
		}, item.value))
	});
}
function SegmentedControl({ options, value, onChange, label, disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": label,
		className: cx("dt-segmented", className),
		style: { gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` },
		onKeyDown: (event) => {
			if (!disabled) walk(event, options.map((option) => option.value), value, onChange);
		},
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "tab",
			"aria-selected": option.value === value,
			tabIndex: option.value === value ? 0 : -1,
			title: option.title,
			disabled,
			className: "dt-segment",
			onClick: () => {
				if (option.value !== value) onChange(option.value);
			},
			children: option.label
		}, option.value))
	});
}
function Input({ icon, className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cx("dt-input", className),
		children: [icon !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-input-icon",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ...rest })]
	});
}
function Switch({ checked, onChange, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-label": label,
		className: cx("dt-switch", className),
		onClick: () => onChange(!checked),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dt-switch-thumb" })
	});
}
function StateDot({ state, className }) {
	if (state === "ongoing") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: cx("dt-spinner", className),
		"data-state": "ongoing",
		width: 14,
		height: 14,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9.5"
		})] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cx("dt-state-dot", className),
		"data-state": state,
		"aria-hidden": "true"
	});
}
function Dot({ state, label }) {
	const dot = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateDot, {
		className: "dt-dot",
		state
	});
	return label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "dt-dot-wrap",
		title: label,
		role: "img",
		"aria-label": label,
		children: dot
	}) : dot;
}
function DisclosureRow({ icon, title, open, onToggle, collapsedContent, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-disclosure",
		"data-open": open || void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-disclosure-row",
			role: "button",
			tabIndex: 0,
			"aria-expanded": open,
			"data-disclosure-row": true,
			onClick: onToggle,
			onKeyDown: (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					onToggle();
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "dt-disclosure-lead",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-disclosure-icon",
						children: icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-disclosure-chevron",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: open ? "chevron-up" : "chevron-down" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-disclosure-title",
					children: title
				}),
				!open && collapsedContent
			]
		}), open && children]
	});
}
const FOCUSABLE = "a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex=\"-1\"])";
function trapTab(event, dialog) {
	const items = [...dialog.querySelectorAll("*")].filter((element) => element.matches(FOCUSABLE));
	const first = items[0], last = items.at(-1), active = document.activeElement;
	const target = event.shiftKey ? last : first;
	if (!target || !dialog.contains(active) || active === dialog || active === (event.shiftKey ? first : last)) {
		event.preventDefault();
		target?.focus();
	}
}
/** Accessible modal dialog with focus trapping, Escape/backdrop dismissal, and focus restoration. */
function Modal({ open, onClose, title, closeLabel, description, footer, className, children }) {
	const dialog = (0, import_react.useRef)(null);
	const close = (0, import_react.useRef)(onClose);
	close.current = onClose;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const opener = document.activeElement instanceof HTMLElement ? document.activeElement : void 0;
		dialog.current?.focus();
		const onKeyDown = (event) => {
			if (event.key === "Escape") close.current();
			else if (event.key === "Tab" && dialog.current) trapTab(event, dialog.current);
		};
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			opener?.focus();
		};
	}, [open]);
	if (!open) return null;
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-modal-root",
		role: "presentation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-modal-mask",
			"aria-hidden": "true",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: dialog,
			className: cx("dt-modal", className),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			tabIndex: -1,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-modal-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-modal-close",
						"aria-label": closeLabel,
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "close",
							size: 14
						})
					})]
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dt-modal-description",
					children: description
				}),
				children !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-modal-body",
					children
				}),
				footer !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-modal-footer",
					children: footer
				})
			]
		})]
	}), document.body);
}
/** Portaled tooltip trigger supporting hover, keyboard focus, and touch toggle. */
function InfoTip({ text, icon = "question", warn }) {
	const anchor = (0, import_react.useRef)(null);
	const bubble = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useLayoutEffect)(() => {
		const target = anchor.current, element = bubble.current;
		if (!open || !target || !element) return;
		const margin = 12, gap = 8;
		const a = target.getBoundingClientRect(), b = element.getBoundingClientRect();
		const above = a.top - gap - b.height >= margin;
		element.style.left = `${Math.max(margin, Math.min(a.left + a.width / 2 - b.width / 2, window.innerWidth - margin - b.width))}px`;
		element.style.top = `${above ? a.top - gap - b.height : a.bottom + gap}px`;
		element.style.visibility = "visible";
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const close = () => setOpen(false);
		window.addEventListener("scroll", close, true);
		window.addEventListener("resize", close);
		return () => {
			window.removeEventListener("scroll", close, true);
			window.removeEventListener("resize", close);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref: anchor,
		type: "button",
		className: warn ? "dt-info dt-info-warn" : "dt-info",
		"aria-label": text,
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		onBlur: () => setOpen(false),
		onFocus: (event) => {
			if (event.currentTarget.matches(":focus-visible")) setOpen(true);
		},
		onKeyDown: (event) => {
			if (event.key === "Escape") setOpen(false);
		},
		onPointerUp: (event) => {
			if (event.pointerType === "touch") setOpen(!open);
		},
		onClick: (event) => {
			if (event.detail > 0 && event.nativeEvent.pointerType !== "touch") setOpen(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: icon,
			size: 14
		})
	}), open && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: bubble,
		role: "tooltip",
		className: "dt-tooltip",
		style: { visibility: "hidden" },
		children: text
	}), document.body)] });
}
//#endregion
//#region src/admission.ts
const ADMISSION_OPTIONS = {
	listedUnaddressed: ["inferred", "ignore"],
	unlistedAddressed: [
		"explicit",
		"inferred",
		"ignore"
	],
	unlistedUnaddressed: ["inferred", "ignore"]
};
/** Default admission rules (matching pre-table behavior): unaddressed messages from listed senders are inferred candidates; unlisted senders are ignored. */
const ADMISSION_DEFAULTS = {
	listedUnaddressed: "inferred",
	unlistedAddressed: "ignore",
	unlistedUnaddressed: "ignore"
};
//#endregion
//#region src/limits.ts
/** Validation bounds shared between host schemas and management panel forms. */
const LIMITS = {
	ruleName: 100,
	ruleInstruction: 2e3,
	evalTimeoutSeconds: {
		min: 30,
		max: 600
	},
	maxWorkers: {
		min: 1,
		max: 16
	},
	prepareCommand: 4e3,
	promptMaxChars: {
		min: 1e3,
		max: 1e6
	},
	admissionContextMaxPages: {
		min: 1,
		max: 100
	},
	admissionContextTimeoutMs: {
		min: 1,
		max: 9e4
	}
};
//#endregion
//#region src/core/errors.ts
/** User-facing error codes mapped to their category ('missing' or 'refused') and English message template. */
const USER_ERRORS = {
	unknownTicket: ["missing", "Unknown ticket"],
	unknownProblem: ["missing", "Unavailable Eval not found"],
	unknownTrigger: ["missing", "Unknown trigger"],
	unknownAssignment: ["missing", "Unknown assignment"],
	unknownBlock: ["missing", "Unknown settings block: {block}"],
	unknownPromptRevision: ["missing", "Unknown prompt revision {revision}"],
	unknownPromptPart: ["refused", "Unknown built-in prompt part {part}"],
	ticketEnded: ["refused", "Ticket has ended"],
	assignmentEnded: ["refused", "Assignment has ended; a newer assignment owns this ticket"],
	evalFinished: ["refused", "Eval {eval} has finished or a later eval replaced it; decide the trigger's current eval"],
	notAdmissible: ["refused", "Trigger is not admissible: {reason}"],
	notExplicit: ["refused", "An accept through orchestrator_route is for explicit requests from allowed senders; assess proactive candidates with orchestrator_eval and orchestrator_eval_decide"],
	ticketStopped: ["refused", "A person stopped this ticket; new work needs an accept through orchestrator_route"],
	mandateRevoked: ["refused", "The current policy no longer holds this ticket's mandate; new work needs an accept through orchestrator_route"],
	notRetryable: ["refused", "Only an open ticket can be retried, and only when its worker last reported failed or blocked and no person has sent a message since, or when delivering an Input to its worker failed"],
	sourceThread: ["refused", "This is the thread the ticket started on; it stays subscribed"],
	followedThread: ["refused", "This thread is the ticket's own, such as its pull request's; it stays subscribed"],
	notFollowing: ["refused", "This ticket does not follow that thread"],
	questionWithResult: ["refused", "A question for a person cannot also be a ready result or an answer; report it separately"],
	askerWithoutQuestion: ["refused", "The message that raised a question needs the question it raised"],
	notAsker: ["refused", "A question must name the person's message that raised it, which reached this ticket"],
	notAnswerable: ["refused", "An answer must name the person's question it answers, which reached this ticket"],
	ackEnded: ["refused", "Ticket ended; do not acknowledge historical requests"],
	notReached: ["refused", "Trigger does not belong to this worker"],
	handedBack: ["refused", "This ticket handed that trigger back already"],
	handedBackHere: ["refused", "The worker of this ticket handed that trigger back as beyond it: accept it as new work, attach it to another ticket, or ignore it"],
	workerDecides: ["refused", "This message reached ticket {tickets} on its thread: its worker decides whether it belongs there and hands back what does not, which then arrives as a candidate. Only a stop goes through orchestrator_route, with kind stop"],
	ackNoChannel: ["refused", "Acknowledgement requires an assigned human source message"],
	ackNotPerson: ["refused", "Use the original human trigger, not a bot, CI or worker report"],
	notReady: ["refused", "Ticket is not ready for delivery. Keep progress internal and wait for a verified ready report; do not relabel progress as an answer or send it through another channel."],
	notAttention: ["refused", "Attention requires the ticket's current attention question in human_action. Routine unfinished work stays internal."],
	notQuestion: ["refused", "An answer must target the original human question, not a worker report or automated trigger"],
	noAnswer: ["refused", "No worker answer is ready for this human trigger. Wait for the worker's report, or request one with orchestrator_ticket_request_status, which acts only on a worker that reported waiting; ordinary progress cannot be relabelled as an answer."],
	noChannel: ["refused", "No reply channel for this ticket or trigger"],
	panelOnlyEnvironment: ["refused", "The execution environment (ticket directory, prepare command, blocked commands) can only be changed in the management panel"],
	panelOnlyAccounts: ["refused", "Source fields that setup reads, such as account CLIs, can only be changed in the management panel"],
	setupComplete: ["refused", "Setup is complete"],
	modelUnavailable: ["refused", "The {block} model is not available: {error}"],
	promptTooLong: ["refused", "Prompt configuration exceeds {limit} characters"],
	promptPlaceholders: ["refused", "The “{part}” template must keep {placeholders}, which the system fills in"],
	promptPartEmpty: ["refused", "The “{part}” part cannot be empty; reset it to follow its built-in text"],
	sourceNotInstalled: ["refused", "The {source} Source kind is not installed"],
	noLabels: ["refused", "This Source has no names to refresh"],
	nothingToSync: ["refused", "The {source} Source's part of the Policy has nothing to sync from, or the Source is off or waiting for setup"]
};
//#endregion
//#region src/client/api.ts
/** Same-origin client and polling hook for the orchestrator management API. */
/**
* Represents a failed management API request with a localized message and structured diagnostic details.
* Thrown by API callers and inspected by UI views and draft state to distinguish validation issues, missing records,
* and unreachable hosts (`details.unreachable` is set when `dsh-superagent` did not answer at all, such as during a restart,
* in which case a 404 does not mean a record is missing).
*/
var ApiError = class extends Error {
	status;
	details;
	constructor(message, status, details = {}) {
		super(message);
		this.status = status;
		this.details = details;
	}
	get issues() {
		return this.details.issues ?? [];
	}
	/** True when the host confirmed the record does not exist, rather than being unreachable. */
	get missing() {
		return this.status === 404 && !this.details.unreachable;
	}
};
const isUserError = (code) => typeof code === "string" && Object.hasOwn(USER_ERRORS, code);
/** Calls one management endpoint; the `x-orchestrator-request` header marks the request as originating from this page. */
async function api(messages, path, method, body) {
	let response;
	const json = body === void 0 ? {} : {
		headers: { "content-type": "application/json" },
		body: JSON.stringify(body)
	};
	try {
		response = await fetch(`/orchestrator/api/${path}`, {
			method,
			...json,
			headers: {
				"x-orchestrator-request": "1",
				...json.headers
			}
		});
	} catch {
		throw new ApiError(messages.offline, 0, { unreachable: true });
	}
	const text = await response.text();
	let value;
	try {
		value = text ? JSON.parse(text) : {};
	} catch {
		value = void 0;
	}
	if (!response.ok) {
		const failure = value ?? {};
		const issues = Array.isArray(failure.issues) ? failure.issues : [];
		const user = isUserError(failure.code) ? {
			code: failure.code,
			values: failure.values ?? {}
		} : void 0;
		const { status } = response;
		throw new ApiError(failure.setup ? messages.setup(failure.setup) : user ? messages.user(user) : typeof failure.error === "string" ? failure.error : !text && status === 404 ? messages.notRunning : status >= 500 ? messages.serverError(status) : messages.requestFailed(status), status, {
			issues,
			...failure.setup ? { setup: failure.setup } : {},
			...user ? { user } : {},
			...text ? {} : { unreachable: true }
		});
	}
	return value;
}
const HIDDEN_FACTOR = 6;
const same$1 = (a, b) => a === b || JSON.stringify(a) === JSON.stringify(b);
/**
* Poll an endpoint while mounted, backing off when the document is hidden.
* Preserves the last successful value across dependency changes and errors, skips state updates when the response is unchanged,
* and drops stale responses when `deps` or `intervalMs` changes start a new subscription.
*/
function usePoll(load, deps, intervalMs = 5e3) {
	const [state, setState] = (0, import_react.useState)({});
	const loader = (0, import_react.useRef)(load);
	loader.current = load;
	const refresh = (0, import_react.useRef)(async () => {});
	(0, import_react.useEffect)(() => {
		let active = true;
		let timer;
		let queue = Promise.resolve();
		const once = async () => {
			clearTimeout(timer);
			try {
				const value = await loader.current();
				if (active) setState((previous) => same$1(previous.data, value) ? previous.error ? { data: previous.data } : previous : { data: value });
			} catch (failure) {
				if (active) setState((previous) => ({
					...previous,
					error: failure instanceof Error ? failure : new Error(String(failure))
				}));
			} finally {
				if (active) timer = setTimeout(run, document.hidden ? intervalMs * HIDDEN_FACTOR : intervalMs);
			}
		};
		const run = () => queue = queue.then(once);
		const shown = () => {
			if (!document.hidden) run();
		};
		refresh.current = run;
		run();
		document.addEventListener("visibilitychange", shown);
		return () => {
			active = false;
			clearTimeout(timer);
			document.removeEventListener("visibilitychange", shown);
		};
	}, [...deps, intervalMs]);
	const reload = (0, import_react.useCallback)(() => refresh.current(), []);
	return {
		data: state.data,
		error: state.error,
		reload
	};
}
const DECISION_FILTERS = [
	"work",
	"stop",
	"ignore",
	"unavailable",
	"all"
];
const DECISION_KINDS = {
	work: "accept,reopen",
	stop: "stop",
	ignore: "ignore",
	unavailable: "unavailable",
	all: ""
};
/** Build a typed route caller that resolves localized error messages on each request. */
function caller(messages) {
	return (route, ...[request]) => {
		const [method, pattern] = route.split(" ");
		const values = request ?? {};
		const path = pattern.replace(/:(\w+)/g, (_match, name) => encodeURIComponent(String(values[name])));
		const query = Object.entries(values.query ?? {}).filter(([, value]) => value !== void 0 && value !== "").map(([name, value]) => `${name}=${encodeURIComponent(String(value))}`).join("&");
		return api(messages(), query ? `${path}?${query}` : path, method, values.body);
	};
}
//#endregion
//#region src/client/client.css?raw
var client_default = "/* Panel layout and local UI controls styled with DSH `--dsw-alias-*` design tokens; one rule per line. */\r\n.dt-page { box-sizing: border-box; height: 100%; overflow: auto; scrollbar-gutter: stable; scroll-padding: 48px 0 72px; container-type: inline-size; padding: 28px clamp(24px, 4vw, 48px) 0; color: var(--dsw-alias-label-primary); }\r\n/* Deployment page rendered inside DSH Plugin Manager, which owns scrolling and padding. */\r\n.dt-embedded { container-type: inline-size; color: var(--dsw-alias-label-primary); }\r\n/* Disable sticky positioning inside DSH Plugin Manager, where the host container owns scrolling and bottom padding. */\r\n.dt-embedded .dt-savebar { position: static; }\r\n.dt-page > .dt-column { max-width: 960px; margin: 0 auto; padding-bottom: 48px; display: flex; flex-direction: column; gap: 24px; }\r\n.dt-head { position: relative; z-index: 3; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px 16px; flex-wrap: wrap; }\r\n.dt-search { position: relative; width: 240px; max-width: 100%; }\r\n.dt-search-results { position: absolute; top: calc(100% + 6px); right: 0; width: min(560px, 90cqw); max-height: 60vh; overflow: auto; padding: 8px 16px; border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 12px; background: var(--dsw-alias-bg-layer-2); box-shadow: var(--dsw-elevation-prominent); z-index: 5; display: flex; flex-direction: column; gap: 8px; }\r\n.dt-mark { background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 25%, transparent); color: inherit; border-radius: 2px; }\r\n[data-platform='darwin'] .dt-page .dt-head { padding-top: var(--dsh-frame-top-clearance, 0px); }\r\n.dt-title { margin: 0; font-size: 15px; line-height: 22px; font-weight: 600; color: var(--dsw-alias-label-secondary); }\r\n.dt-toolbar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }\r\n.dt-page .dt-tabs { overflow-x: auto; display: flex; gap: 20px; max-width: none; padding: 0; border-radius: 0; background: none; border-bottom: 0.5px solid var(--dsw-alias-border-l3); }\r\n.dt-segmented { width: 100%; max-width: 420px; box-sizing: border-box; display: inline-grid; gap: 2px; padding: 3px; border-radius: 9px; background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-form.dt-block { padding: 16px; border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 16px; gap: 16px; }\r\n.dt-block-title { display: flex; align-items: center; gap: 4px; margin: 0; font-size: 16px; line-height: 24px; font-weight: 500; }\r\n.dt-section { display: flex; flex-direction: column; gap: 8px; min-width: 0; }\r\n.dt-section-title { margin: 0; display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px; font-size: 13px; line-height: 20px; font-weight: 600; color: var(--dsw-alias-label-secondary); }\r\n.dt-section-name { white-space: nowrap; }\r\n.dt-count { font-size: 14px; color: var(--dsw-alias-label-caption); font-variant-numeric: tabular-nums; font-weight: 400; }\r\n.dt-hint { margin: 0; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-tertiary); }\r\n.dt-error { margin: 0; font-size: 13px; line-height: 20px; color: var(--dsw-alias-state-error-primary); }\r\n.dt-banner { margin: 0; padding: 8px 12px; border-radius: 10px; font-size: 13px; line-height: 20px; background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 10%, transparent); overflow-wrap: anywhere; }\r\n.dt-banner.dt-danger { background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); }\r\n.dt-list { list-style: none; margin: 0 -8px; padding: 0; display: flex; flex-direction: column; gap: 2px; }\r\n.dt-row { position: relative; min-width: 0; border-radius: 12px; padding: 10px 8px; display: flex; flex-wrap: wrap; gap: 4px 12px; align-items: flex-start; }\r\n.dt-row.dt-link:hover { background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-row-main { flex: 1 1 200px; min-width: 0; display: flex; flex-direction: column; gap: 4px; }\r\n.dt-disclosure-body .dt-row-main { flex-basis: 0; }\r\n.dt-row-title { display: flex; align-items: center; gap: 8px; min-width: 0; font-size: 14px; line-height: 20px; font-weight: 500; }\r\n.dt-open { max-width: 100%; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; font-size: 14px; line-height: 20px; font-weight: 500; text-align: left; cursor: pointer; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r\n.dt-open::after { content: ''; position: absolute; inset: 0; border-radius: 12px; }\r\n.dt-open:focus-visible { outline: none; }\r\n.dt-open-wrap { white-space: normal; }\r\n.dt-open:focus-visible::after { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }\r\n.dt-row-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 4px 10px; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-caption); overflow-wrap: anywhere; }\r\n.dt-row-quote { font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r\n.dt-clamp { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }\r\n/* Transparent block borders preserve vertical spacing when line clamping clips padding. */\r\n.dt-banner:is(.dt-clamp, .dt-clamp-8) { padding-block: 0; border-block: 8px solid transparent; }\r\n.dt-banner-label { font-weight: 500; }\r\n.dt-banner .dt-md { display: inline; }\r\n.dt-banner .dt-md > p:first-child { display: inline; }\r\n.dt-row-buttons { position: relative; z-index: 1; gap: 8px; margin-top: 4px; }\r\n.dt-row-actions { position: relative; z-index: 1; display: flex; align-items: center; gap: 4px; flex: none; margin-left: auto; font-size: 13px; line-height: 20px; }\r\n.dt-dot { flex: none; margin-top: 5px; }\r\n.dt-inline-link { position: relative; z-index: 1; color: var(--dsw-alias-link); text-decoration: none; }\r\n.dt-inline-link:hover { text-decoration: underline; }\r\n.dt-textlink { padding: 0; border: 0; background: none; font: inherit; color: var(--dsw-alias-link); cursor: pointer; text-align: left; }\r\n.dt-textlink:hover { text-decoration: underline; }\r\n.dt-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 13px; line-height: 20px; }\r\n.dt-kv { display: grid; grid-template-columns: max-content 1fr; gap: 6px 16px; margin: 0; font-size: 13px; line-height: 20px; }\r\n.dt-kv dt { color: var(--dsw-alias-label-tertiary); }\r\n.dt-kv dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }\r\n.dt-timeline { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }\r\n.dt-event { padding: 12px 0; border-bottom: 0.5px solid var(--dsw-alias-border-l2); display: flex; flex-direction: column; gap: 6px; min-width: 0; }\r\n.dt-event:last-child { border-bottom: 0; }\r\n.dt-event.dt-highlight { background: var(--dsw-alias-interactive-bg-hover); border-radius: 8px; padding-inline: 8px; margin-inline: -8px; }\r\n.dt-event-text { margin: 0; font-size: 13px; line-height: 20px; white-space: pre-wrap; overflow-wrap: anywhere; }\r\n.dt-event-actor { font-weight: 500; color: var(--dsw-alias-label-secondary); }\r\n.dt-event-quiet .dt-event-text { color: var(--dsw-alias-label-tertiary); }\r\n.dt-flow { margin: 0; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-secondary); }\r\n.dt-clamp-8 { display: -webkit-box; -webkit-line-clamp: 8; -webkit-box-orient: vertical; overflow: hidden; }\r\n.dt-more { align-self: flex-start; font-size: 12px; }\r\n.dt-reveal { opacity: 0; }\r\n.dt-event:hover .dt-reveal, .dt-reveal:focus-visible { opacity: 1; }\r\n@media (hover: none) {\r\n  .dt-reveal { opacity: 1; }\r\n}\r\n.dt-event-foot { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary); }\r\n.dt-filters { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\r\n.dt-filters .dt-search { margin-left: auto; }\r\n.dt-form { display: flex; flex-direction: column; gap: 24px; }\r\n.dt-fieldset { display: flex; flex-direction: column; gap: inherit; min-width: 0; margin: 0; padding: 0; border: 0; }\r\n.dt-field { display: flex; flex-direction: column; gap: 6px; font-size: 13px; line-height: 20px; min-width: 0; }\r\n.dt-field small { color: var(--dsw-alias-label-caption); font-size: 12px; }\r\n.dt-textarea { box-sizing: border-box; width: 100%; min-width: 0; border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 10px; padding: 8px 12px; font: inherit; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-1, transparent); resize: vertical; }\r\n.dt-select { box-sizing: border-box; width: 100%; min-width: 0; height: 32px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 8px; padding: 0 28px 0 8px; text-overflow: ellipsis; font: inherit; font-size: 14px; line-height: 22px; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-1, transparent); }\r\n.dt-textarea:focus-visible, .dt-select:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }\r\n.dt-mono { font-family: var(--ds-font-family-code, Menlo, monospace); font-size: 12px; overflow-wrap: anywhere; }\r\n.dt-detail { margin-top: 2px; color: var(--dsw-alias-label-secondary); }\r\n.dt-savebar .dt-error { white-space: pre-line; }\r\n.dt-switch-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 36px; font-size: 13px; }\r\n.dt-subhead-actions { display: inline-flex; align-items: center; gap: 4px; }\r\n.dt-btn-busy .dt-btn-icon svg { animation: dt-spin 1s linear infinite; }\r\n.dt-subhead { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-secondary); }\r\n.dt-rules, .dt-changes { list-style: none; margin: 0; padding: 0; }\r\n.dt-field-head { display: inline-flex; align-items: center; gap: 4px; color: var(--dsw-alias-label-secondary); }\r\n.dt-info { display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; padding: 0; border: 0; background: none; color: var(--dsw-alias-label-caption); cursor: help; }\r\n.dt-info:hover, .dt-info:focus-visible { color: var(--dsw-alias-label-secondary); }\r\n.dt-info:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; border-radius: 50%; }\r\n.dt-tooltip { position: fixed; z-index: 1100; width: max-content; max-width: min(320px, calc(100vw - 24px)); padding: 3px 7px; border-radius: 8px; background: var(--dsw-alias-tooltip-bg); color: var(--dsw-static-neutral-bluish-00); font-size: 13px; line-height: 20px; overflow-wrap: break-word; pointer-events: none; animation: dt-tooltip-in 150ms ease-in-out; }\r\n@keyframes dt-tooltip-in { from { opacity: 0; } }\r\n.dt-rules { border-top: 0.5px solid var(--dsw-alias-border-l2); }\r\n.dt-rule { display: flex; align-items: flex-start; gap: 12px; padding: 6px 0; border-bottom: 0.5px solid var(--dsw-alias-border-l2); }\r\n.dt-rule > :first-child { flex: 1; min-width: 0; }\r\n.dt-rule-preview { flex: 1; min-width: 0; margin-left: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; color: var(--dsw-alias-label-caption); }\r\n.dt-rule-switch { margin-top: 2px; flex: none; }\r\n.dt-rule-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--dsw-alias-label-caption); }\r\n.dt-rule-dot[data-enabled] { background: var(--dsw-alias-brand-primary); }\r\n.dt-rule-body { display: flex; flex-direction: column; gap: 12px; padding: 8px 0 8px 28px; }\r\n.dt-model { display: flex; flex-direction: column; gap: 6px; }\r\n.dt-grid3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\r\n.dt-changes { display: flex; flex-direction: column; gap: 2px; font-size: 13px; line-height: 20px; }\r\n.dt-changes li::before { content: '· '; color: var(--dsw-alias-label-caption); }\r\n.dt-main { display: flex; flex-direction: column; gap: 24px; min-width: 0; }\r\n.dt-modal.dt-glossary-modal { width: min(680px, 100%); }\r\n.dt-nav-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; min-height: 32px; padding: 6px 10px; border: 0; border-radius: 8px; background: transparent; color: var(--dsw-alias-label-secondary); font: inherit; font-size: 13px; line-height: 20px; text-align: left; cursor: pointer; }\r\n.dt-nav-item:hover { background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-nav-item[aria-current='true'] { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); font-weight: 500; }\r\n.dt-nav-item:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -2px; }\r\n.dt-changed-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--dsw-alias-brand-primary); flex: none; }\r\n.dt-add-skill { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; padding-top: 8px; border-top: 0.5px solid var(--dsw-alias-border-l2); }\r\n.dt-prompt-main { display: flex; flex-direction: column; gap: 12px; min-width: 0; }\r\n.dt-editor { min-height: 360px; }\r\n.dt-inline-select { width: auto; }\r\n.dt-preview-part { display: flex; flex-direction: column; gap: 6px; padding: 2px 0 2px 12px; border-left: 2px solid var(--dsw-alias-border-l3); }\r\n.dt-preview-head { font-size: 13px; line-height: 20px; display: flex; align-items: baseline; gap: 8px; }\r\ndiv.dt-preview-head { color: var(--dsw-alias-label-secondary); }\r\n.dt-card { display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 16px; min-width: 0; }\r\n.dt-card-head { display: flex; align-items: center; gap: 12px; min-height: 28px; }\r\n.dt-card-head .dt-row-main { flex: 1 1 0; min-width: 64px; }\r\n.dt-card-title { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r\n.dt-row-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; font-weight: 500; }\r\n.dt-rows { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }\r\n.dt-rows-item { display: grid; grid-template-columns: repeat(var(--dt-columns), minmax(0, 1fr)) auto; gap: 8px; align-items: center; }\r\n.dt-filter-gap { flex: 1; }\r\n.dt-page-head { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }\r\n.dt-page-head > .dt-btn { margin-left: -10px; }\r\n.dt-page-title { display: flex; align-items: center; gap: 8px 16px; flex-wrap: wrap; width: 100%; }\r\n.dt-page-title h2 { margin: 0; flex: 1 1 auto; min-width: 0; font-size: 20px; line-height: 28px; font-weight: 500; overflow-wrap: anywhere; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }\r\n.dt-status-line { margin-top: -16px; }\r\n.dt-plain-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; font-size: 13px; line-height: 20px; }\r\n.dt-details { display: flex; flex-direction: column; gap: 2px; border-top: 0.5px solid var(--dsw-alias-border-l2); padding-top: 8px; }\r\n.dt-danger-zone { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding-top: 16px; border-top: 0.5px solid var(--dsw-alias-border-l2); }\r\n.dt-danger-zone .dt-btn { color: var(--dsw-alias-state-error-primary); }\r\n.dt-md { display: flex; flex-direction: column; gap: 6px; font-size: 13px; line-height: 20px; overflow-wrap: anywhere; }\r\n.dt-md p, .dt-md ul, .dt-md ol { margin: 0; }\r\n.dt-md ul, .dt-md ol { padding-left: 20px; display: flex; flex-direction: column; gap: 2px; }\r\n.dt-md-heading { font-weight: 500; }\r\n.dt-code { font-family: var(--ds-font-family-code, Menlo, monospace); font-size: 12px; padding: 0 4px; border-radius: 4px; background: var(--dsw-alias-bg-module-platform); }\r\n.dt-dot-wrap { display: inline-flex; flex: none; }\r\n.dt-search-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\r\n.dt-ellipsis { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 280px; }\r\n.dt-legend-title { margin: 16px 0 6px; font-size: 13px; color: var(--dsw-alias-label-tertiary); }\r\n.dt-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 13px; }\r\n.dt-legend li { display: flex; align-items: center; gap: 6px; }\r\n.dt-legend .dt-dot { margin-top: 0; }\r\n.dt-savebar { position: sticky; bottom: 0; z-index: 2; display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap; padding: 12px 0; background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-1)); border-top: 0.5px solid var(--dsw-alias-border-l2); }\r\n.dt-savebar .dt-hint { margin-right: auto; }\r\n.dt-card > .dt-savebar, .dt-block > .dt-savebar { margin: 0 -16px -16px; padding: 12px 16px; border-radius: 0 0 16px 16px; }\r\n.dt-glossary { width: 100%; border-collapse: collapse; font-size: 13px; line-height: 20px; }\r\n.dt-glossary th, .dt-glossary td { text-align: left; padding: 6px 8px; border-bottom: 0.5px solid var(--dsw-alias-border-l2); vertical-align: top; }\r\n.dt-glossary th { color: var(--dsw-alias-label-tertiary); font-weight: 400; }\r\n.dt-glossary th.dt-glossary-group { color: var(--dsw-alias-label-secondary); font-weight: 600; padding-top: 14px; }\r\n.dt-glossary th:nth-child(-n+2), .dt-glossary td:nth-child(-n+2) { white-space: nowrap; }\r\n.dt-values { display: grid; grid-template-columns: max-content 1fr; gap: 6px 16px; margin: 16px 0 0; font-size: 13px; }\r\n.dt-values dt { color: var(--dsw-alias-label-tertiary); }\r\n.dt-values dd { margin: 0; }\r\n.dt-pre { margin: 0; padding: 12px; border-radius: 10px; background: var(--dsw-alias-bg-module-platform); font-family: var(--ds-font-family-code, Menlo, monospace); font-size: 12px; line-height: 18px; white-space: pre-wrap; overflow-wrap: anywhere; max-height: 480px; overflow: auto; }\r\n.dt-pre ins { background: color-mix(in srgb, var(--dsw-alias-state-success-primary, green) 18%, transparent); text-decoration: none; }\r\n.dt-pre del { background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 18%, transparent); text-decoration: none; }\r\n.dt-prompt { display: grid; grid-template-columns: 200px minmax(0, 1fr); gap: 20px; align-items: start; }\r\n.dt-prompt-nav { display: flex; flex-direction: column; gap: 2px; }\r\n.dt-prompt-nav button { justify-content: flex-start; }\r\n.dt-disclosure-body { padding: 8px 0 8px 28px; display: flex; flex-direction: column; gap: 8px; }\r\n@container (max-width: 640px) {\r\n  .dt-tab { padding: 0 8px; font-size: 13px; }\r\n  .dt-segment { padding: 0 10px; }\r\n  .dt-head { align-items: center; }\r\n  .dt-search-results { right: auto; left: 0; width: 100%; }\r\n  .dt-page-title h2 { font-size: 17px; line-height: 24px; }\r\n  .dt-status-line { margin-top: -12px; }\r\n  .dt-page .dt-tabs { display: flex; flex-wrap: nowrap; scrollbar-width: thin; }\r\n  .dt-page .dt-tab { flex: none; }\r\n  .dt-page .dt-tabs[data-more='end'] { mask-image: linear-gradient(to right, #000 calc(100% - 40px), transparent); }\r\n  .dt-page .dt-tabs[data-more='start'] { mask-image: linear-gradient(to right, transparent, #000 40px); }\r\n  .dt-page .dt-tabs[data-more='both'] { mask-image: linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent); }\r\n  .dt-kv { grid-template-columns: 1fr; gap: 2px; }\r\n  .dt-grid3, .dt-prompt { grid-template-columns: 1fr; }\r\n  .dt-search { width: 100%; }\r\n  .dt-filters .dt-search { margin-left: 0; }\r\n}\r\n/* Local UI primitive styles (see controls.tsx). */\r\n.dt-btn { display: inline-flex; align-items: center; justify-content: center; gap: 4px; border: none; border-radius: 18px; cursor: pointer; font: inherit; font-size: 14px; line-height: 22px; color: var(--dsw-alias-label-primary); background: transparent; padding: 0 14px; white-space: nowrap; }\r\n.dt-btn:disabled { cursor: not-allowed; opacity: 0.4; }\r\n.dt-btn:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }\r\n.dt-btn-md { height: 36px; }\r\n.dt-btn-sm { height: 28px; font-size: 12px; line-height: 18px; padding: 0 10px; border-radius: 14px; }\r\n.dt-btn-primary { background: var(--dsw-alias-button-primary-fill); color: var(--dsw-alias-label-primary-foreground); }\r\n.dt-btn-primary:hover:not(:disabled) { background: var(--dsw-alias-button-primary-hover); }\r\n.dt-btn-ghost:hover:not(:disabled), .dt-btn-outline:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-btn-ghost:active:not(:disabled) { background: var(--dsw-alias-interactive-bg-active); }\r\n.dt-btn-outline { border: 0.5px solid var(--dsw-alias-border-l3); }\r\n.dt-btn-icon { display: inline-flex; width: 16px; height: 16px; align-items: center; justify-content: center; }\r\n.dt-tag { display: inline-flex; align-items: center; border-radius: 999px; padding: 1px 8px; font-size: 11px; line-height: 17px; font-weight: 500; white-space: nowrap; }\r\n.dt-tag[data-tone='outline'] { border: 0.5px solid var(--dsw-alias-border-l4); color: var(--dsw-alias-label-tertiary); }\r\n.dt-tag[data-tone='neutral'] { background: var(--dsw-alias-bg-module-platform); color: var(--dsw-alias-label-secondary); }\r\n.dt-tag[data-tone='quiet'] { color: var(--dsw-alias-label-tertiary); }\r\n.dt-tag[data-tone='success'] { background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent); color: var(--dsw-alias-state-success-primary); }\r\n.dt-tag[data-tone='info'] { background: color-mix(in srgb, var(--dsw-alias-state-business-primary) 10%, transparent); color: var(--dsw-alias-state-business-primary); }\r\n.dt-tag[data-tone='warning'] { background: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 12%, transparent); color: var(--dsw-alias-state-warn-primary); }\r\n.dt-tag[data-tone='danger'] { background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); color: var(--dsw-alias-state-error-primary); }\r\n.dt-pill { display: inline-flex; align-items: center; gap: 4px; height: 24px; padding: 0 8px; border: none; border-radius: 12px; font: inherit; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-2); cursor: pointer; }\r\n.dt-pill:hover { background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-pill-active, .dt-pill-active:hover { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-button-ghost-active-fill); box-shadow: inset 0 0 0 1px var(--dsw-alias-button-ghost-active-border); }\r\n.dt-tabs { display: grid; padding: 4px; border-radius: 12px; background: var(--dsw-alias-bg-module-platform); }\r\n.dt-tab { box-sizing: border-box; height: 34px; padding: 0 12px; border: 0.5px solid transparent; border-radius: 8px; background: transparent; color: var(--dsw-alias-label-secondary); font: inherit; font-size: 14px; line-height: 20px; white-space: nowrap; cursor: pointer; transition: color 180ms ease, background 180ms ease; }\r\n.dt-tab:hover { color: var(--dsw-alias-label-primary); }\r\n.dt-tab[aria-selected='true'] { color: var(--dsw-alias-label-primary); font-weight: 600; background: var(--dsw-alias-bg-layer-3); border-color: var(--dsw-alias-border-l3); }\r\n.dt-tab:focus-visible { outline: none; text-decoration: underline; text-underline-offset: 4px; }\r\n.dt-segment { height: 28px; padding: 0 16px; border: 0; border-radius: 7px; background: transparent; color: var(--dsw-alias-label-secondary); font: inherit; font-size: 13px; line-height: 20px; font-weight: 500; white-space: nowrap; cursor: pointer; transition: color 120ms ease, background 160ms ease; }\r\n.dt-segment:hover:not(:disabled), .dt-segment[aria-selected='true'] { color: var(--dsw-alias-label-primary); }\r\n.dt-segment[aria-selected='true'] { background: var(--dsw-alias-bg-layer-1); box-shadow: var(--dsw-elevation-soft); }\r\n.dt-segment:disabled { cursor: default; opacity: 0.4; }\r\n.dt-segment:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -2px; }\r\n.dt-input { box-sizing: border-box; display: inline-flex; align-items: center; gap: 6px; height: 32px; min-width: 0; padding: 0 8px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 8px; background: var(--dsw-alias-bg-layer-1); }\r\n.dt-input:focus-within { border-color: var(--dsw-alias-brand-primary); }\r\n.dt-input-icon { display: inline-flex; width: 16px; height: 16px; align-items: center; justify-content: center; color: var(--dsw-alias-label-tertiary); }\r\n.dt-input input { flex: 1; min-width: 0; border: none; outline: none; background: transparent; font: inherit; font-size: 14px; line-height: 22px; color: var(--dsw-alias-label-primary); }\r\n.dt-input input::placeholder { color: var(--dsw-alias-label-dimmed); }\r\n.dt-input input::-webkit-search-cancel-button { -webkit-appearance: none; appearance: none; }\r\n.dt-field .dt-input, .dt-search .dt-input, .dt-add-skill .dt-input { display: flex; width: 100%; }\r\n.dt-switch { box-sizing: border-box; flex: 0 0 auto; width: 36px; height: 20px; padding: 2px; border: 0; border-radius: 10px; background: var(--dsw-alias-border-l3); cursor: pointer; }\r\n.dt-switch[aria-checked='true'] { background: var(--dsw-alias-brand-primary); }\r\n.dt-switch:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }\r\n.dt-switch-thumb { display: block; width: 16px; height: 16px; border-radius: 50%; background: var(--dsw-alias-label-primary-foreground); transition: transform 120ms ease; }\r\n.dt-switch[aria-checked='true'] .dt-switch-thumb { transform: translateX(16px); }\r\n.dt-state-dot { position: relative; display: inline-block; flex: none; width: 10px; height: 10px; color: var(--dsw-alias-state-idle-primary); }\r\n.dt-state-dot::after { content: ''; position: absolute; inset: 20%; border-radius: 50%; background: currentColor; }\r\n.dt-state-dot[data-state='done'] { color: var(--dsw-alias-state-success-primary); }\r\n.dt-state-dot[data-state='warning'] { color: var(--dsw-alias-state-warn-primary); }\r\n.dt-state-dot[data-state='error'] { color: var(--dsw-alias-state-error-primary); }\r\n.dt-spinner { flex: none; color: var(--dsw-alias-label-tertiary); }\r\n.dt-spinner g { transform-origin: center; animation: dt-spin 1.5s linear infinite; }\r\n.dt-spinner circle { fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }\r\n.dt-spinner circle:first-child { opacity: 0.25; }\r\n.dt-spinner circle:last-child { stroke-dasharray: 18 150; }\r\n@keyframes dt-spin { to { transform: rotate(360deg); } }\r\n.dt-disclosure-row { display: flex; align-items: center; gap: 4px; min-height: 28px; min-width: 0; border-radius: 8px; cursor: pointer; font-size: 13px; line-height: 20px; color: var(--dsw-alias-label-secondary); }\r\n.dt-disclosure-row:hover { color: var(--dsw-alias-label-primary); }\r\n.dt-disclosure-row:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 2px; }\r\n.dt-disclosure-lead { position: relative; display: inline-flex; flex: none; width: 24px; height: 24px; align-items: center; justify-content: center; }\r\n.dt-disclosure-icon { display: inline-flex; align-items: center; justify-content: center; }\r\n.dt-disclosure-chevron { position: absolute; inset: 0; display: none; align-items: center; justify-content: center; }\r\n.dt-disclosure-row:hover .dt-disclosure-icon, .dt-disclosure[data-open] .dt-disclosure-icon { visibility: hidden; }\r\n.dt-disclosure-row:hover .dt-disclosure-chevron, .dt-disclosure[data-open] .dt-disclosure-chevron { display: inline-flex; }\r\n.dt-disclosure-title { flex: 0 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r\n.dt-modal-root { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; padding: max(24px, var(--dsh-frame-top-clearance, 24px)) 24px; }\r\n.dt-modal-mask { position: absolute; inset: 0; background: var(--dsw-alias-bg-mask-1); backdrop-filter: var(--dsw-mask-blur); }\r\n.dt-modal { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 20px; width: min(380px, 100%); max-height: 100%; padding: 0 0 24px; overflow: hidden; border-radius: 24px; background: var(--dsw-alias-bg-layer-2); box-shadow: var(--dsw-elevation-prominent); color: var(--dsw-alias-label-primary); outline: none; }\r\n.dt-modal-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 22px 14px 0 24px; }\r\n.dt-modal-header h2 { margin: 0; font-size: 16px; line-height: 24px; font-weight: 500; }\r\n.dt-modal-close { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border: none; border-radius: 8px; background: transparent; cursor: pointer; color: var(--dsw-alias-label-secondary); }\r\n.dt-modal-close:hover { background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-modal-description { margin: -8px 0 0; padding: 0 24px; font-size: 14px; line-height: 22px; }\r\n.dt-modal-body { min-width: 0; min-height: 0; overflow: auto; padding: 0 24px; }\r\n.dt-modal-footer { display: flex; align-items: center; justify-content: flex-end; gap: 8px; padding: 0 24px; }\r\n.dt-toast { position: fixed; top: 40px; left: 50%; z-index: 1100; pointer-events: none; width: max-content; max-width: min(640px, calc(100vw - 48px)); padding: 12px 16px; border-radius: 14px; background: var(--dsw-alias-toast-bg); color: var(--dsw-static-neutral-bluish-00); font-size: 14px; line-height: 22px; box-shadow: var(--dsw-shadow-lv3); transform: translateX(-50%); animation: dt-toast-in 160ms ease-out, dt-toast-fade 1000ms ease var(--dt-toast-hold, 3000ms) forwards; }\r\n@keyframes dt-toast-in { from { opacity: 0; transform: translate(-50%, -6px); } to { opacity: 1; transform: translate(-50%, 0); } }\r\n@keyframes dt-toast-fade { to { opacity: 0; visibility: hidden; } }\r\n@media (prefers-reduced-motion: reduce) {\r\n  .dt-tab, .dt-segment, .dt-switch-thumb, .dt-spinner g, .dt-btn-busy .dt-btn-icon svg, .dt-tooltip { transition: none; animation: none; }\r\n  .dt-toast { animation: dt-toast-fade 1000ms ease var(--dt-toast-hold, 3000ms) forwards; }\r\n}\r\n.dt-page .dt-tab { height: 34px; padding: 0 2px; border: 0; border-radius: 0; color: var(--dsw-alias-label-tertiary); font-size: 14px; }\r\n.dt-page .dt-tab[aria-selected='true'] { background: none; color: var(--dsw-alias-label-primary); font-weight: 500; box-shadow: inset 0 -1.5px 0 var(--dsw-alias-label-primary); }\r\n.dt-status-head { display: flex; align-items: center; gap: 8px; }\r\n.dt-status-title { margin: 0; flex: 1; display: flex; align-items: center; gap: 4px; font-size: 15px; line-height: 22px; font-weight: 600; }\r\n.dt-status-text { margin-left: auto; flex: none; font-size: 12px; font-weight: 400; color: var(--dsw-alias-label-secondary); }\r\n.dt-status-line .dt-status-text { margin-left: 0; }\r\n.dt-status-text[data-state='warning'] { color: var(--dsw-alias-state-warn-primary); }\r\n.dt-status-text[data-state='error'] { color: var(--dsw-alias-state-error-primary); }\r\n.dt-row-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; }\r\n.dt-lv { white-space: nowrap; }\r\n.dt-lv-label { color: var(--dsw-alias-label-caption); }\r\n.dt-lv-value { color: var(--dsw-alias-label-secondary); font-variant-numeric: tabular-nums; }\r\n.dt-chip { display: inline-flex; flex-wrap: wrap; max-width: 100%; border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 6px; overflow: hidden; font-size: 11px; line-height: 18px; color: var(--dsw-alias-label-secondary); }\r\n.dt-chip-source { padding: 0 6px; color: var(--dsw-alias-label-tertiary); background: var(--dsw-alias-bg-module-platform); }\r\n.dt-chip-fact { padding: 0 6px; border-left: 0.5px solid var(--dsw-alias-border-l3); white-space: nowrap; }\r\n.dt-chip-label { margin-right: 4px; color: var(--dsw-alias-label-caption); }\r\n.dt-chip-link { position: relative; z-index: 1; text-decoration: none; cursor: pointer; transition: border-color 120ms ease; }\r\n.dt-chip-link:hover { border-color: var(--dsw-alias-brand-primary); }\r\n.dt-chip-link:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }\r\n.dt-chip-open { display: inline-flex; align-items: center; padding: 0 5px; border-left: 0.5px solid var(--dsw-alias-border-l3); color: var(--dsw-alias-brand-primary); }\r\n.dt-chip-problem, .dt-chip-problem .dt-chip-label { color: var(--dsw-alias-state-error-primary); }\r\n.dt-cards { gap: 8px; }\r\n.dt-att .dt-inline-link { font-size: 13px; font-weight: 500; }\r\n.dt-list > .dt-att { margin: 2px 8px; }\r\n.dt-att { padding: 10px 12px 10px 16px; border: 0; border-radius: 0; border-bottom: 0.5px solid var(--dsw-alias-border-l3); }\r\n.dt-att::before { content: ''; position: absolute; left: 6px; top: 10px; bottom: 10px; width: 2px; border-radius: 1px; background: var(--dsw-alias-state-warn-primary); opacity: 0.7; }\r\n.dt-att-error::before { background: var(--dsw-alias-state-error-primary); }\r\n.dt-att-what { font-size: 12px; line-height: 18px; font-weight: 500; color: var(--dsw-alias-state-warn-primary); }\r\n.dt-att-error .dt-att-what, .dt-att-error .dt-att-what .dt-open { color: var(--dsw-alias-state-error-primary); }\r\n.dt-stats { display: flex; flex-wrap: wrap; gap: 6px 20px; }\r\n.dt-stat { display: inline-flex; align-items: baseline; gap: 6px; font-size: 12px; color: var(--dsw-alias-label-caption); }\r\n.dt-stat-value { font-size: 14px; font-weight: 500; color: var(--dsw-alias-label-primary); font-variant-numeric: tabular-nums; }\r\n.dt-more-link { font-size: 12px; font-weight: 400; }\r\n.dt-settings { display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 24px; align-items: start; }\r\n.dt-settings-nav { position: sticky; top: 0; display: flex; flex-direction: column; gap: 2px; }\r\n.dt-settings-link { padding: 6px 10px; border: 0; border-radius: 8px; background: none; color: var(--dsw-alias-label-secondary); font: inherit; font-size: 14px; text-align: left; cursor: pointer; }\r\n.dt-settings-link:hover { color: var(--dsw-alias-label-primary); }\r\n.dt-settings-link[aria-current='page'] { background: var(--dsw-alias-bg-module-platform); color: var(--dsw-alias-label-primary); font-weight: 500; }\r\n.dt-settings-link[data-stage] + .dt-settings-link:not([data-stage]) { margin-top: 10px; }\r\n.dt-settings-body { display: flex; flex-direction: column; gap: 16px; min-width: 0; }\r\n.dt-settings-title { margin: 0; font-size: 15px; line-height: 22px; font-weight: 600; }\r\n.dt-subtabs { display: flex; gap: 16px; border-bottom: 0.5px solid var(--dsw-alias-border-l3); }\r\n.dt-subtab { padding: 0 0 6px; border: 0; background: none; color: var(--dsw-alias-label-tertiary); font: inherit; font-size: 13px; cursor: pointer; }\r\n.dt-subtab[aria-selected='true'] { color: var(--dsw-alias-label-primary); font-weight: 500; box-shadow: inset 0 -1.5px 0 var(--dsw-alias-label-primary); }\r\n.dt-part { display: flex; flex-direction: column; gap: 12px; }\r\n.dt-rows-summary { text-align: left; color: var(--dsw-alias-label-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; }\r\n.dt-table { width: 100%; border-collapse: collapse; font-size: 12px; line-height: 18px; }\r\n.dt-table th { text-align: left; font-weight: 400; color: var(--dsw-alias-label-caption); padding: 2px 8px 2px 0; }\r\n.dt-table td { padding: 4px 8px 4px 0; border-top: 0.5px solid var(--dsw-alias-border-l3); vertical-align: top; color: var(--dsw-alias-label-secondary); overflow-wrap: anywhere; }\r\n@container (max-width: 640px) {\r\n  .dt-settings { grid-template-columns: 1fr; gap: 12px; }\r\n  .dt-settings-nav { position: static; flex-direction: row; flex-wrap: wrap; }\r\n  .dt-settings-link[data-stage] + .dt-settings-link:not([data-stage]) { margin-top: 0; }\r\n  .dt-page .dt-tabs { gap: 14px; }\r\n}\r\n.dt-list > .dt-ticket { display: grid; grid-template-columns: 112px minmax(0, 1fr); column-gap: 12px; align-items: start; margin: 0; padding: 12px 8px 12px 18px; border-radius: 0; border-bottom: 0.5px solid var(--dsw-alias-border-l3); }\r\n.dt-list > .dt-ticket[data-state]::before { content: ''; position: absolute; left: 6px; top: 12px; bottom: 12px; width: 2px; border-radius: 1px; background: var(--dsw-alias-state-warn-primary); opacity: 0.7; }\r\n.dt-list > .dt-ticket[data-state='error']::before { background: var(--dsw-alias-state-error-primary); }\r\n.dt-ticket-stage { align-self: stretch; padding-top: 1px; border-right: 0.5px solid var(--dsw-alias-border-l3); }\r\n.dt-ticket-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }\r\n.dt-ticket-body .dt-row-title .dt-open { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r\n.dt-ticket-meta { flex-wrap: nowrap; overflow: hidden; white-space: nowrap; }\r\n.dt-ticket-meta .dt-chip { flex: none; }\r\n.dt-ticket-note { min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--dsw-alias-label-primary); }\r\n.dt-ticket-note-error { color: var(--dsw-alias-state-error-primary); }\r\n.dt-ticket-actions { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 8px; min-height: 30px; margin-top: 2px; }\r\n/* Pass pointer events through action containers to the row link, keeping only child controls interactive. */\r\n.dt-ticket-actions, .dt-row-buttons, .dt-row-actions { pointer-events: none; }\r\n.dt-ticket-actions > *, .dt-row-buttons > *, .dt-row-actions > * { pointer-events: auto; }\r\n.dt-line { min-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\r\n.dt-row-meta.dt-line { flex-wrap: nowrap; }\r\n.dt-line-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\r\n.dt-error-text { color: var(--dsw-alias-state-error-primary); }\r\n.dt-stage { display: inline-flex; align-items: flex-start; gap: 5px; font-size: 12px; line-height: 18px; font-weight: 500; color: var(--dsw-alias-label-secondary); }\r\n.dt-stage svg { flex: none; margin-top: 2px; }\r\n.dt-stage[data-state='warning'] { color: var(--dsw-alias-state-warn-primary); }\r\n.dt-stage[data-state='error'] { color: var(--dsw-alias-state-error-primary); }\r\n.dt-stage[data-state='ongoing'] { color: var(--dsw-alias-state-business-primary); }\r\n.dt-icon-link { display: inline-flex; align-items: center; gap: 4px; }\r\na.dt-btn, a.dt-btn:hover { text-decoration: none; }\r\n.dt-section-icon { display: inline-flex; align-self: center; color: var(--dsw-alias-label-tertiary); }\r\n.dt-trigger-link { display: flex; flex-direction: column; gap: 2px; width: 100%; margin: -4px 0 -4px -8px; padding: 4px 8px; border: 0; border-radius: 8px; background: none; font: inherit; color: inherit; text-align: left; cursor: pointer; }\r\n.dt-trigger-link:hover { background: var(--dsw-alias-interactive-bg-hover); }\r\n.dt-trigger-link:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }\r\n.dt-trigger-text { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }\r\n.dt-kv-stack { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\r\n.dt-banner-actions { margin-top: 6px; }\r\n@container (max-width: 640px) {\r\n  .dt-list > .dt-ticket { grid-template-columns: 1fr; row-gap: 4px; }\r\n  .dt-ticket-stage { border-right: 0; }\r\n}\r\n.dt-nav-group { margin: 10px 10px 2px; font-size: 12px; font-weight: 600; color: var(--dsw-alias-label-secondary); }\r\n.dt-nav-group:first-child { margin-top: 0; }\r\n.dt-prompt-nav .dt-nav-item { flex-direction: column; align-items: flex-start; gap: 2px; text-align: left; }\r\n.dt-nav-item > span { display: inline-flex; align-items: center; gap: 6px; }\r\n.dt-nav-item small { font-size: 12px; line-height: 18px; font-weight: 400; color: var(--dsw-alias-label-caption); }\r\n.dt-preview-part[data-editable] { border-left-color: var(--dsw-alias-brand-primary); }\r\n.dt-preview-head b { font-weight: 500; }\r\n.dt-preview-head > span { font-size: 12px; color: var(--dsw-alias-label-caption); }\r\n.dt-changed-tag { margin-left: 6px; padding: 0 5px; border: 0.5px solid var(--dsw-alias-border-l3); border-radius: 4px; font-size: 11px; line-height: 16px; font-weight: 400; color: var(--dsw-alias-label-secondary); }\r\n.dt-updated-tag { border-color: var(--dsw-alias-state-warn-primary); color: var(--dsw-alias-state-warn-primary); }\r\n.dt-default-updated { display: flex; flex-direction: column; gap: 6px; padding: 2px 0 2px 12px; border-left: 2px solid var(--dsw-alias-state-warn-primary); }\r\n.dt-diff-fold { color: var(--dsw-alias-label-caption); font-style: italic; }\r\n.dt-compare { margin-left: auto; }\r\n.dt-admission th { white-space: nowrap; }\r\n.dt-admission thead tr:first-child th:not(:first-child) { color: var(--dsw-alias-label-secondary); font-weight: 500; }\r\n.dt-admission td { vertical-align: middle; }\r\n.dt-admission-scope { color: var(--dsw-alias-label-primary); font-size: 13px; }\r\n.dt-admission-scope small { display: block; font-size: 11px; color: var(--dsw-alias-label-caption); }\r\n.dt-admission-na { color: var(--dsw-alias-label-caption); }\r\n.dt-admission-cell { display: flex; align-items: center; gap: 4px; }\r\n.dt-admission-cell .dt-select { flex: 1; min-width: 0; }\r\n.dt-admission-slot { display: inline-flex; flex: none; width: 16px; }\r\n.dt-info-warn { color: var(--dsw-alias-state-warn-primary); }\r\n.dt-field-segmented { max-width: 240px; }\r\n";
//#endregion
//#region src/core/reasons.ts
/**
* Structured reason codes and templates for decisions, filtered triggers, and ended assignments.
* Policy gates and source scopes may also emit their own literal reason codes.
*/
const REASONS = {
	said: "{text}",
	timeout: "Assessment timed out",
	policyChanged: "Policy changed during assessment",
	noAdmissible: "No admissible trigger",
	startedTicket: "Already started ticket {ticket}",
	acceptedBefore: "Trigger {trigger} was accepted before",
	routed: "Routed to ticket {ticket}",
	explicitRouted: "Explicit request from an allowed sender routed by the orchestrator",
	humanStop: "Human asked to stop",
	legacyImport: "Imported from the pre-domain-model task record",
	forwarded: "Forwarded to the worker of the Ticket already on this Thread",
	senderNotMember: "The sender is not on the Source's list",
	retried: "Retried by a person",
	hostRestarted: "dsh-superagent restarted",
	stopUnknown: "Stop target is unknown or already ended",
	stopNotExplicit: "A stop needs an explicit request from a sender on the list",
	directionUnsettled: "Implementation intent or target direction is not established, or a product/design decision is still required",
	noRuleMatched: "No enabled admission rule matched",
	ignoredFromCard: "Ignored from its card, without a rule assessment",
	observed: "Observe mode: would accept ({text})"
};
/** Formats reasons in English (prefixed by `triggerId` when present) for agent consumption. */
function reasonText(reasons) {
	return [reasons ?? []].flat().map((reason) => {
		const text = (REASONS[reason.code] ?? reason.code).replace(/\{(\w+)\}/g, (match, name) => reason.values?.[name] ?? match);
		return reason.triggerId ? `${reason.triggerId}: ${text}` : text;
	}).join("; ");
}
//#endregion
//#region src/client/text.ts
const errorText = (failure) => failure instanceof Error ? failure.message : String(failure);
const localized = (t, text) => typeof text === "string" ? text : text ? text[t("lang") === "en" ? "en" : "zh"] : "";
const actorName = (t, actor) => actor?.name ? localized(t, actor.name) : t("automatedNotice");
function valueLabel(t, group, key) {
	if (!key) return "";
	const name = `${group}.${key}`;
	const text = t(name);
	return text === name ? key : text;
}
/** Format one or more structured or raw reasons in the active UI language, truncating multi-line host errors to their first line. */
function reasonLabel(t, reason) {
	if (typeof reason === "string") return reason ? label(t, { code: reason }) : "";
	return [reason ?? []].flat().map((item) => label(t, item)).filter(Boolean).join("；");
}
function label(t, reason) {
	const key = `reason.${reason.code}`;
	const text = reason.code === "said" ? reason.values?.text ?? "" : t(key, reason.values);
	if (reason.code !== "said" && text !== key) return text;
	const written = reason.code === "said" ? text : reasonText({
		...reason,
		triggerId: void 0
	});
	if (/^\w*Error\b/.test(written)) {
		const first = written.split("\n")[0];
		return first.length > 140 ? `${first.slice(0, 140)}…` : first;
	}
	return written;
}
const setupText = (t, problem) => t(`setup.${problem.code}`, problem.values);
const healthText = (t, health) => health.code ? t(`healthCode.${health.code}`, health.values) : health.detail;
/** Replaces Feishu and GitHub content placeholders (images, cards, media, forwards, unresolved mentions) with localized labels. */
function readableMarkers(t, text) {
	return text.replace(/!\[[^\]]*\]\([^)]*\)|\[Image: [^\]]*\]|\[image\]/g, t("imageMarker")).replace(/\[Chat card: [^\]]*\]/g, t("cardMarker")).replace(/\[Media: [^\]]*\]/g, t("mediaMarker")).replace(/\[Merged forward\]/g, t("forwardMarker")).replace(/@_user_\d+/g, t("unknownMention"));
}
const timeLocale = (lang) => lang === "en" ? "en" : "zh-CN";
function when(value, lang) {
	if (!value) return "";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	const seconds = Math.round((date.getTime() - Date.now()) / 1e3);
	if (Math.abs(seconds) < 86400) {
		const relative = new Intl.RelativeTimeFormat(timeLocale(lang), { numeric: "auto" });
		if (Math.abs(seconds) < 60) return relative.format(0, "second");
		if (Math.abs(seconds) < 3600) return relative.format(Math.round(seconds / 60), "minute");
		return relative.format(Math.round(seconds / 3600), "hour");
	}
	const year = date.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? {} : { year: "numeric" };
	return date.toLocaleString(timeLocale(lang), {
		...year,
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function fullTime(value, lang) {
	const date = new Date(value ?? "");
	return Number.isNaN(date.getTime()) ? "" : date.toLocaleString(timeLocale(lang));
}
//#endregion
//#region src/client/provider.tsx
/** Shared panel React contexts, state polling, restart detection, and action runner hook. */
const Panel = (0, import_react.createContext)(void 0);
const PanelState = (0, import_react.createContext)(void 0);
function usePanel() {
	const value = (0, import_react.useContext)(Panel);
	if (!value) throw new Error("dsh-superagent page rendered outside its panel");
	return value;
}
function usePanelData() {
	const value = (0, import_react.useContext)(PanelState);
	if (!value) throw new Error("dsh-superagent page rendered outside its panel");
	return value;
}
/** Wrap an async action with re-entrancy protection, busy state, optional reload, and error toast reporting. */
function useAction(action, { reload } = {}) {
	const { notify } = usePanel();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const running = (0, import_react.useRef)(false);
	const run = async (...args) => {
		if (running.current) return false;
		running.current = true;
		setBusy(true);
		try {
			await action(...args);
			await reload?.();
			return true;
		} catch (failure) {
			notify(errorText(failure));
			return false;
		} finally {
			running.current = false;
			setBusy(false);
		}
	};
	return {
		run,
		busy
	};
}
const messages = (t) => ({
	offline: t("offline"),
	notRunning: t("hostNotRunning"),
	serverError: (status) => t("serverError", { status }),
	requestFailed: (status) => t("requestFailed", { status }),
	setup: (problem) => problem.values.output ? `${setupText(t, problem)}\n${problem.values.output}` : setupText(t, problem),
	user: ({ code, values }) => t(`userError.${code}`, values.part ? {
		...values,
		part: valueLabel(t, "promptPart", values.part)
	} : values)
});
function Toast({ text, onDone, holdMs = 3e3 }) {
	const done = (0, import_react.useRef)(onDone);
	done.current = onDone;
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => done.current(), holdMs + 1e3);
		return () => clearTimeout(timer);
	}, [holdMs]);
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dt-toast",
		role: "status",
		style: { ["--dt-toast-hold"]: `${holdMs}ms` },
		children: text
	}), document.body);
}
const stay = () => {};
const noSession = async () => {};
function PanelProvider({ t, interval = 5e3, openSession = noSession, navigate = stay, back = stay, backLabel = "", children }) {
	const copy = (0, import_react.useRef)(t);
	copy.current = t;
	const call = (0, import_react.useMemo)(() => caller(() => messages(copy.current)), []);
	const [toast, setToast] = (0, import_react.useState)();
	const notify = (0, import_react.useCallback)((text) => setToast({
		text,
		id: Date.now()
	}), []);
	const [restarting, setRestarting] = (0, import_react.useState)();
	const [restarts, setRestarts] = (0, import_react.useState)(0);
	const restart = (0, import_react.useCallback)(() => setRestarting({ down: false }), []);
	const { data: state, error, reload } = usePoll(() => call("GET state"), [call], restarting ? 1e3 : interval);
	if (restarting && !!error !== restarting.down) {
		setRestarting(error ? { down: true } : void 0);
		if (!error) setRestarts(restarts + 1);
	}
	(0, import_react.useEffect)(() => {
		if (!restarting) return;
		const timer = setTimeout(() => setRestarting(void 0), 3e4);
		return () => clearTimeout(timer);
	}, [restarting]);
	const context = (0, import_react.useMemo)(() => ({
		t,
		call,
		navigate,
		back,
		backLabel,
		openSession,
		notify,
		restart
	}), [
		t,
		call,
		navigate,
		back,
		backLabel,
		openSession,
		notify,
		restart
	]);
	const data = (0, import_react.useMemo)(() => ({
		state,
		error,
		reload,
		setup: state?.setup,
		running: state?.load.running ?? 0,
		restarts
	}), [
		state,
		error,
		reload,
		restarts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel.Provider, {
		value: context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelState.Provider, {
			value: data,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: client_default }),
				children,
				toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
					text: toast.text,
					onDone: () => setToast(void 0)
				}, toast.id)
			]
		})
	});
}
//#endregion
//#region src/client/draft.tsx
/**
* Optimistic settings draft state with sessionStorage persistence and three-way rebase against concurrent saves.
*/
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const isRecord = (value) => !!value && typeof value === "object" && !Array.isArray(value);
const LIST_KEYS = ["id", "chatId"];
const named = (list, field) => list.every((item) => isRecord(item) && typeof item[field] === "string") && new Set(list.map((item) => item[field])).size === list.length;
/**
* Three-way merge between `base`, local `mine`, and remote `theirs`.
* Merges objects by key and arrays of keyed records (`id` or `chatId`) by element: a key or element removed by one side is
* deleted if the other side left it unchanged; a removal against a modification keeps `mine` and is recorded in `conflicts`.
*/
function merge3(base, mine, theirs, conflicts = [], path = []) {
	if (same(mine, base) || same(mine, theirs)) return theirs;
	if (same(theirs, base)) return mine;
	if (Array.isArray(mine) && Array.isArray(theirs) && (base === void 0 || Array.isArray(base))) {
		const lists = [
			base ?? [],
			mine,
			theirs
		];
		const field = LIST_KEYS.find((name) => lists.every((list) => named(list, name)));
		if (field) return mergeList(lists, field, conflicts, path);
	}
	if (!isRecord(base) || !isRecord(mine) || !isRecord(theirs)) {
		conflicts.push(path);
		return mine;
	}
	const merged = {};
	for (const key of /* @__PURE__ */ new Set([...Object.keys(theirs), ...Object.keys(mine)])) {
		const value = merge3(base[key], mine[key], theirs[key], conflicts, [...path, key]);
		if (value !== void 0) merged[key] = value;
	}
	return merged;
}
function mergeList([base, mine, theirs], field, conflicts, path) {
	const name = (item) => String(item[field]);
	const [before, ours, others] = [
		base,
		mine,
		theirs
	].map((list) => new Map(list.map((item) => [name(item), item])));
	const order = theirs.map(name);
	mine.forEach((item, index) => {
		if (order.includes(name(item))) return;
		const previous = mine.slice(0, index).map(name).reverse().find((key) => order.includes(key));
		order.splice(previous === void 0 ? 0 : order.indexOf(previous) + 1, 0, name(item));
	});
	return order.flatMap((key) => {
		const value = merge3(before.get(key), ours.get(key), others.get(key), conflicts, [...path, key]);
		return value === void 0 ? [] : [value];
	});
}
function read(key) {
	if (!key) return void 0;
	try {
		const stored = JSON.parse(sessionStorage.getItem(key) ?? "null");
		return stored && "base" in stored && "value" in stored && Number.isInteger(stored.revision) ? stored : void 0;
	} catch (error) {
		return;
	}
}
const FAILURES = /* @__PURE__ */ new Set([
	"conflict",
	"invalid",
	"failed",
	"unstored"
]);
/**
* State machine for a settings draft.
* Holds submitted values in `awaitingRevision` until the polled revision catches up, and rebases active edits onto newer remote revisions via `merge3`.
*/
function draftReducer(state, action) {
	const { phase, draft, seen } = state;
	switch (action.type) {
		case "edit":
			if (phase === "saving" || phase === "awaitingRevision") return state;
			if (same(action.value, action.saved)) return {
				phase: "clean",
				seen
			};
			return {
				phase: "editing",
				seen,
				notice: state.notice && FAILURES.has(state.notice.kind) ? state.notice : void 0,
				draft: {
					base: draft?.base ?? action.saved,
					value: action.value,
					revision: draft?.revision ?? action.revision ?? 0,
					...action.meta === void 0 ? {} : { meta: action.meta }
				}
			};
		case "discard": return phase === "saving" || phase === "awaitingRevision" ? state : {
			phase: "clean",
			seen
		};
		case "submit": return phase === "editing" ? {
			...state,
			phase: "saving"
		} : state;
		case "saved": return phase === "saving" && draft ? {
			phase: "awaitingRevision",
			seen,
			sent: {
				value: draft.value,
				revision: action.revision,
				restarting: action.restarting
			}
		} : state;
		case "refused": return {
			...state,
			phase: phase === "saving" ? "editing" : phase,
			notice: action.notice
		};
		case "revisionArrived": {
			if (phase === "saving") return state;
			const { revision, saved } = action;
			if (state.sent) return revision >= state.sent.revision ? {
				phase: "clean",
				seen: revision
			} : {
				...state,
				seen: revision
			};
			if (!draft || draft.revision === revision) return {
				...state,
				seen: revision
			};
			const paths = [];
			const value = merge3(draft.base, draft.value, saved, paths);
			if (same(value, saved)) return {
				phase: "clean",
				seen: revision
			};
			return {
				phase: "editing",
				seen: revision,
				draft: {
					...draft,
					base: saved,
					value,
					revision
				},
				notice: paths.length ? {
					kind: "conflict",
					revision,
					paths
				} : {
					kind: "merged",
					revision
				}
			};
		}
	}
}
function saveBarText(t, { phase, sent, notice }, words = {}) {
	switch (notice?.kind) {
		case "conflict": return {
			error: words.conflict?.(notice.revision, notice.paths) ?? t("saveConflict"),
			status: ""
		};
		case "invalid": return {
			error: t("invalidSettings", { fields: notice.fields.join(t("listSeparator")) }),
			status: ""
		};
		case "failed": return {
			error: notice.error,
			status: ""
		};
		case "unstored": return {
			error: t("draftFailed", { error: notice.error }),
			status: ""
		};
		case "merged": return { status: words.merged?.(notice.revision) ?? t("saveMerged") };
		case "rebasing": return { status: t("saveRebasing") };
	}
	if (phase === "awaitingRevision") return { status: t(sent?.restarting ? "savedRestarting" : "saved") };
	return { status: phase === "clean" ? t("saved") : words.editing ?? t(notice?.kind === "restored" ? "draftRestored" : "draftKept") };
}
/** Manage a settings draft, persisting unsaved edits in `sessionStorage` and rebasing them when newer server revisions arrive. */
function useDraft({ key, saved, revision, save, reload }) {
	const { restart } = usePanel();
	const [state, dispatch] = (0, import_react.useReducer)(draftReducer, void 0, () => {
		const stored = read(key);
		const initial = stored ? {
			phase: "editing",
			draft: stored,
			notice: { kind: "restored" }
		} : { phase: "clean" };
		return revision === void 0 ? initial : draftReducer(initial, {
			type: "revisionArrived",
			saved,
			revision
		});
	});
	if (state.phase !== "saving" && revision !== void 0 && revision !== state.seen) dispatch({
		type: "revisionArrived",
		saved,
		revision
	});
	(0, import_react.useEffect)(() => {
		if (!key) return;
		try {
			if (state.draft) sessionStorage.setItem(key, JSON.stringify(state.draft));
			else sessionStorage.removeItem(key);
		} catch (failure) {
			dispatch({
				type: "refused",
				notice: {
					kind: "unstored",
					error: errorText(failure)
				}
			});
		}
	}, [key, state.draft]);
	const failed = (failure) => dispatch({
		type: "refused",
		notice: {
			kind: "failed",
			error: errorText(failure)
		}
	});
	const submit = async (event) => {
		event?.preventDefault();
		const { draft } = state;
		if (state.phase !== "editing" || !draft) return;
		dispatch({ type: "submit" });
		let result;
		try {
			result = await save(draft.value, draft.revision, draft.base);
		} catch (failure) {
			const fields = failure instanceof ApiError ? failure.issues.map((issue) => issue.path) : [];
			if (failure instanceof ApiError && failure.status === 409) await reload().then(() => dispatch({
				type: "refused",
				notice: { kind: "rebasing" }
			}), failed);
			else dispatch({
				type: "refused",
				notice: fields.length ? {
					kind: "invalid",
					fields
				} : {
					kind: "failed",
					error: errorText(failure)
				}
			});
			return;
		}
		dispatch({
			type: "saved",
			revision: result.revision,
			restarting: !!result.restarting
		});
		if (result.restarting) restart();
		else await reload().catch(failed);
	};
	return {
		state,
		value: state.sent?.value ?? state.draft?.value ?? saved,
		meta: state.draft?.meta,
		revision: state.draft?.revision ?? revision ?? 0,
		dirty: state.draft !== void 0,
		busy: state.phase === "saving" || state.phase === "awaitingRevision",
		submit,
		edit: (value, meta) => dispatch({
			type: "edit",
			value,
			meta,
			saved,
			revision
		}),
		discard: () => dispatch({ type: "discard" })
	};
}
/** Sticky save/discard bar for a settings block; transfers focus back to its parent block when hidden so keyboard navigation does not reset. */
function SaveBar({ state, dirty, busy, words, status, onDiscard, onSave }) {
	const { t } = usePanel();
	const line = saveBarText(t, state, words);
	const shown = dirty || busy || !!line.error;
	const bar = (0, import_react.useRef)(null);
	const block = (0, import_react.useRef)(null);
	const focused = (0, import_react.useRef)(false);
	(0, import_react.useLayoutEffect)(() => {
		if (shown) {
			block.current = bar.current?.parentElement ?? null;
			return;
		}
		const lost = !document.activeElement || document.activeElement === document.body;
		if (focused.current && block.current && lost) {
			block.current.tabIndex = -1;
			block.current.focus({ preventScroll: true });
		}
		focused.current = false;
	}, [shown]);
	if (!shown) return null;
	const leave = (next) => {
		if (next && !bar.current?.contains(next)) focused.current = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: bar,
		className: "dt-savebar",
		onFocus: () => {
			focused.current = true;
		},
		onBlur: (event) => leave(event.relatedTarget),
		children: [
			line.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "dt-error dt-clamp",
				role: "alert",
				children: line.error
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "dt-hint",
				"aria-live": "polite",
				children: status ?? line.status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				disabled: !dirty || busy,
				onClick: onDiscard,
				children: t("discard")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				size: "sm",
				disabled: !dirty || busy,
				...onSave ? { onClick: onSave } : { type: "submit" },
				children: t("save")
			})
		]
	});
}
//#endregion
//#region src/client/marks.ts
function ticketMark(t, ticket) {
	switch (ticket.stage) {
		case "ended": return {
			label: valueLabel(t, "outcome", ticket.ended?.outcome),
			tone: "neutral",
			dot: "idle",
			icon: "stop"
		};
		case "person": {
			const action = ticket.action;
			const icon = action === "review" ? "review" : action === "failed" ? "alert" : action === "blocked" ? "blocked" : action === "delivery" ? "inbox" : "ask";
			return {
				label: t(`stage.${action}`),
				tone: action === "failed" ? "danger" : "warning",
				dot: action === "failed" ? "error" : "warning",
				icon
			};
		}
		case "working": return ticket.action === "queued" ? {
			label: t("stage.queued"),
			tone: "neutral",
			dot: "idle",
			icon: "queue"
		} : {
			label: t("stage.working"),
			tone: "info",
			dot: "ongoing",
			icon: "running"
		};
		default: return {
			label: t("stage.idle"),
			tone: "neutral",
			dot: "idle",
			icon: "clock"
		};
	}
}
const reportDot = (report) => report === "failed" ? "error" : report === "blocked" || report === "waiting" ? "warning" : report === "ready" ? "done" : "ongoing";
const THREAD_MARKS = {
	error: {
		dot: "error",
		icon: "alert",
		label: "threadPollFailed"
	},
	evaluating: {
		dot: "ongoing",
		icon: "running",
		label: "threadEvaluating"
	},
	queued: {
		dot: "warning",
		icon: "queue",
		label: "threadQueued"
	},
	subscribed: {
		dot: "done",
		icon: "inbox",
		label: "threadSubscribed"
	},
	dormant: {
		dot: "idle",
		icon: "clock",
		label: "threadDormantShort"
	},
	unsubscribed: {
		dot: "idle",
		icon: "hash",
		label: "threadUnsubscribed"
	}
};
function threadMark(t, thread) {
	const { dot, icon, label } = THREAD_MARKS[thread.stage];
	return {
		dot,
		icon,
		label: t(label, { count: thread.pending })
	};
}
const SOURCE_MARKS = {
	missing: {
		dot: "idle",
		label: "sourceNotInstalled"
	},
	off: {
		dot: "idle",
		label: "sourceOff"
	},
	error: {
		dot: "error",
		label: "sourceState.error"
	},
	setup: {
		dot: "idle",
		label: "sourceState.setup"
	},
	starting: {
		dot: "ongoing",
		label: "sourceState.ongoing"
	},
	paused: {
		dot: "warning",
		label: "sourceState.warning"
	},
	ready: {
		dot: "done",
		label: "sourceState.done"
	}
};
const sourceMark = (t, state) => ({
	dot: SOURCE_MARKS[state].dot,
	label: t(SOURCE_MARKS[state].label)
});
const DECISION_MARKS = {
	accept: {
		dot: "done",
		icon: "decision",
		tone: "success"
	},
	reopen: {
		dot: "done",
		icon: "refresh",
		tone: "success"
	},
	stop: {
		dot: "idle",
		icon: "stop",
		tone: "danger"
	},
	ignore: {
		dot: "idle",
		icon: "dismiss",
		tone: "neutral"
	},
	unavailable: {
		dot: "warning",
		icon: "alert",
		tone: "warning"
	},
	wouldAccept: {
		dot: "idle",
		icon: "dismiss",
		tone: "warning"
	}
};
/** Maps a Decision outcome to its visual mark, distinguishing `wouldAccept` (an ignore that observe mode would have accepted). */
function decisionMark(t, outcome) {
	return {
		...DECISION_MARKS[outcome],
		label: outcome === "wouldAccept" ? t("wouldAccept") : valueLabel(t, "decision", outcome)
	};
}
//#endregion
//#region src/client/markdown.ts
function shortUrl(url) {
	try {
		const parsed = new URL(url);
		const path = parsed.pathname.length > 24 ? `${parsed.pathname.slice(0, 24)}…` : parsed.pathname;
		return `${parsed.host}${path === "/" ? "" : path}`;
	} catch (error) {
		return url;
	}
}
/** Splits plain text into text and bare-URL link nodes, excluding trailing sentence punctuation from URLs. */
function linkify(text) {
	return text.split(/(https?:\/\/[^\s)，。]*[^\s)，。.,;:!?'"])/).filter(Boolean).map((part) => /^https?:\/\//.test(part) ? {
		kind: "link",
		text: shortUrl(part),
		url: part
	} : {
		kind: "text",
		text: part
	});
}
function inlines(text) {
	return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/).flatMap((part) => {
		if (/^\*\*[^*]+\*\*$/.test(part)) return [{
			kind: "bold",
			text: part.slice(2, -2)
		}];
		if (/^`[^`]+`$/.test(part)) return [{
			kind: "code",
			text: part.slice(1, -1)
		}];
		const link = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/.exec(part);
		return link ? [{
			kind: "link",
			text: link[1],
			url: link[2]
		}] : linkify(part);
	});
}
function markdownBlocks(text) {
	const blocks = [];
	let list;
	for (const line of text.split("\n")) {
		const item = /^\s*[-*]\s+(.*)$/.exec(line) ?? /^\s*\d+[.)]\s+(.*)$/.exec(line);
		if (item) {
			const ordered = !/^\s*[-*]/.test(line);
			if (!list || list.ordered !== ordered) blocks.push(list = {
				kind: "list",
				ordered,
				items: []
			});
			list.items.push(item[1]);
			continue;
		}
		list = void 0;
		const heading = /^#{1,6}\s+(.*)$/.exec(line);
		if (line.trim()) blocks.push(heading ? {
			kind: "heading",
			text: heading[1]
		} : {
			kind: "paragraph",
			text: line
		});
	}
	return blocks;
}
//#endregion
//#region src/app/api.ts
const TICKET_FILTERS = [
	"open",
	"person",
	"working",
	"idle",
	"ended"
];
const THREAD_FILTERS = [
	"subscribed",
	"evaluating",
	"recent",
	"all"
];
//#endregion
//#region src/client/route.ts
/** Typed panel routes, route parser, and sessionStorage location history. */
const TABS = [
	"overview",
	"source",
	"trigger",
	"eval",
	"execution",
	"settings"
];
const SETTINGS_GROUPS = [
	"source",
	"eval",
	"execution",
	"prompts",
	"deployment"
];
const HOME = { page: "overview" };
const settingsRoute = (group, query = {}) => ({
	page: "settings",
	query: {
		group,
		...query
	}
});
const setupPage = (place) => place === "deployment" ? settingsRoute("deployment") : settingsRoute("source", { source: place });
const routeLabel = (t, route) => route.id ? t(route.page === "trigger" ? "term.thread" : "term.ticket") : t(`tab.${route.page}`);
const pick = (values, value) => values.find((item) => item === value);
function compact(query) {
	const set = Object.entries(query).filter(([, value]) => value !== void 0);
	return set.length ? Object.fromEntries(set) : void 0;
}
/** Validate and normalize a stored route, dropping unrecognized query filters or removed tabs (such as the legacy `policy` tab). */
function parseRoute(value) {
	const { page, id, query } = value ?? {};
	const text = (name) => typeof query?.[name] === "string" ? query[name] : void 0;
	const record = typeof id === "string" && id ? id : void 0;
	switch (page) {
		case "overview":
		case "source": return { page };
		case "trigger": return record ? {
			page,
			id: record,
			query: compact({ trigger: text("trigger") })
		} : {
			page,
			query: compact({ filter: pick(THREAD_FILTERS, query?.filter) })
		};
		case "eval": return {
			page,
			query: compact({
				filter: pick(DECISION_FILTERS, query?.filter),
				window: query?.window === "24h" ? "24h" : void 0
			})
		};
		case "execution": return record ? {
			page,
			id: record
		} : {
			page,
			query: compact({ filter: pick(TICKET_FILTERS, query?.filter) })
		};
		case "settings": return {
			page,
			query: {
				group: pick(SETTINGS_GROUPS, query?.group) ?? "source",
				...compact({
					source: text("source"),
					version: text("version")
				})
			}
		};
		default: return;
	}
}
const ROUTE_KEY = "dsh-superagent/route";
const lastSettingsGroup = ({ route, group }) => route.page === "settings" ? route.query.group : group ?? "source";
function initialLocation() {
	try {
		const stored = JSON.parse(sessionStorage.getItem(ROUTE_KEY) ?? "null");
		const route = parseRoute(stored?.route);
		const stack = Array.isArray(stored?.stack) ? stored.stack : [];
		if (route) return {
			route,
			stack: stack.flatMap((item) => parseRoute(item) ?? []),
			group: pick(SETTINGS_GROUPS, stored?.group)
		};
	} catch (error) {}
	return {
		route: HOME,
		stack: []
	};
}
function remember(location) {
	try {
		sessionStorage.setItem(ROUTE_KEY, JSON.stringify(location));
	} catch (failure) {}
}
//#endregion
//#region src/client/widgets.tsx
/** Context-aware shared UI widgets: page/section headers, timestamps, Markdown rendering, and confirmation actions. */
const external = {
	target: "_blank",
	rel: "noopener noreferrer"
};
function When({ at }) {
	const { t } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
		dateTime: at,
		title: fullTime(at, t("lang")),
		children: when(at, t("lang"))
	});
}
function SetupMessage({ problem, lead }) {
	const { t } = usePanel();
	const text = setupText(t, problem);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [lead ? t("setupProblem", { detail: text }) : text, problem.values.output && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "dt-detail dt-mono dt-clamp",
		children: problem.values.output
	})] });
}
function Section({ title, count, children, action, hint, badge, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "dt-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "dt-section-title",
			children: [
				icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-section-icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						name: icon,
						size: 14
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-section-name",
					children: title
				}),
				count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-count",
					children: count
				}),
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: hint }),
				badge,
				action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { marginLeft: "auto" },
					children: action
				})
			]
		}), children]
	});
}
function Hint({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "dt-hint",
		children
	});
}
function LabelValue({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "dt-lv",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-lv-label",
				children: label
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-lv-value",
				children: value
			})
		]
	});
}
function KeyValues({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "dt-kv",
		children: rows.map(([key, value], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { display: "contents" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: key }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
		}, index))
	});
}
function Inlines({ parts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => part.kind === "bold" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.text }, index) : part.kind === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
		className: "dt-code",
		children: part.text
	}, index) : part.kind === "link" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: "dt-inline-link",
		href: part.url,
		title: part.url,
		...external,
		children: part.text
	}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: part.text }, index)) });
}
/** Renders a safe Markdown subset (headings, lists, paragraphs, bold, inline code, links) without interpreting raw HTML. */
function MarkdownLite({ text }) {
	const { t } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dt-md",
		children: markdownBlocks(readableMarkers(t, text)).map((block, index) => {
			if (block.kind !== "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: block.kind === "heading" ? "dt-md-heading" : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inlines, { parts: inlines(block.text) })
			}, index);
			const items = block.items.map((item, at) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inlines, { parts: inlines(item) }) }, at));
			return block.ordered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: items }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items }, index);
		})
	});
}
function MoreToggle({ open, onToggle }) {
	const { t } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "dt-textlink dt-more",
		"aria-expanded": open,
		onClick: onToggle,
		children: open ? t("collapse") : t("expand")
	});
}
function ClampText({ text }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const long = text.length > 480 || text.split("\n").length > 8;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: long && !open ? "dt-event-text dt-clamp-8" : "dt-event-text",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inlines, { parts: linkify(text) })
	}), long && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreToggle, {
		open,
		onToggle: () => setOpen(!open)
	})] });
}
function ConfirmButton({ label, title, message, onConfirm, variant = "ghost", icon }) {
	const { t } = usePanel();
	const [open, setOpen] = (0, import_react.useState)(false);
	const confirm = useAction(onConfirm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant,
		size: "sm",
		icon: icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: icon,
			size: 14
		}),
		onClick: () => setOpen(true),
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onClose: () => setOpen(false),
		title,
		closeLabel: t("close"),
		description: message,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			onClick: () => setOpen(false),
			children: t("cancel")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "primary",
			disabled: confirm.busy,
			onClick: () => {
				confirm.run().then((done) => {
					if (done) setOpen(false);
				});
			},
			children: t("confirm")
		})] })
	})] });
}
function SessionButton({ sessionId, label, variant = "ghost" }) {
	const { t, openSession, notify } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant,
		size: "sm",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: "session",
			size: 14
		}),
		onClick: () => {
			openSession(sessionId).catch((error) => notify(errorText(error)));
		},
		children: label ?? t("openSession")
	});
}
function ExternalLink({ href, children, icon = "external" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "dt-inline-link dt-icon-link",
		href,
		...external,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: icon,
			size: 13
		}), children]
	});
}
function ActionLink({ href, children, icon = "external" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "dt-btn dt-btn-outline dt-btn-sm",
		href,
		...external,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-btn-icon",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: icon,
				size: 14
			})
		}), children]
	});
}
function StageMark({ state, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "dt-stage",
		"data-state": state,
		children: [state === "ongoing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateDot, { state: "ongoing" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: icon,
			size: 14
		}), label]
	});
}
function LoadState({ error, loading }) {
	const { t } = usePanel();
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "dt-error",
		role: "alert",
		children: error.message
	});
	return loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("loading") }) : null;
}
function LoadMore({ onMore }) {
	const { t } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "sm",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: "chevron-down",
			size: 14
		}),
		onClick: onMore,
		children: t("loadMore")
	});
}
function StatusHead({ hint, settings }) {
	const { t, navigate } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-status-head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "dt-status-title",
			children: [t("statusTitle"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: hint })]
		}), settings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "settings" }),
			onClick: () => navigate(settingsRoute(settings)),
			children: t("tab.settings")
		})]
	});
}
function PageHead({ title, children }) {
	const { back, backLabel } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-page-head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "chevron-left" }),
			onClick: back,
			children: backLabel
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-page-title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-actions",
				children
			})]
		})]
	});
}
/** Trigger a host setup re-check and restart, prompting for confirmation when running Assignments would be interrupted. */
function CheckSetupButton() {
	const { t, call, notify, restart } = usePanel();
	const { running } = usePanelData();
	const check = async () => {
		await call("POST setup/check");
		notify(t("setupChecking"));
		restart();
	};
	const action = useAction(check);
	if (running > 0) {
		const message = t("setupCheckInterrupts", { count: running });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
			variant: "outline",
			icon: "refresh",
			label: t("setupCheck"),
			title: t("setupCheck"),
			message,
			onConfirm: check
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "sm",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: "refresh",
			size: 14
		}),
		disabled: action.busy,
		onClick: () => {
			action.run();
		},
		children: t("setupCheck")
	});
}
//#endregion
//#region src/client/rows.tsx
/** Shared list rows for Tickets, Threads, and Decisions, plus Source fact chips and automated-message run folding. */
function TicketLine({ ticket, question, onChanged, context }) {
	const { t, call, navigate } = usePanel();
	const status = ticketMark(t, ticket);
	const after = async (request) => {
		await request;
		await onChanged?.();
	};
	const note = question && ticket.note && {
		...ticket.note,
		text: readableMarkers(t, ticket.note.text)
	};
	const answer = ticket.reply && ticket.stage === "person" && ticket.action === "answer" ? ticket.reply : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "dt-row dt-link dt-ticket",
		"data-state": question ? status.dot : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-ticket-stage",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageMark, {
				state: status.dot,
				icon: status.icon,
				label: status.label
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-ticket-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-open",
						onClick: () => navigate({
							page: "execution",
							id: ticket.id
						}),
						children: ticket.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-meta dt-ticket-meta",
					children: [
						ticket.threads.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChip, { thread }, thread.key)),
						context && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextTag, {}),
						ticket.undelivered > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
							label: t("ticketUndeliveredLabel"),
							value: ticket.undelivered
						}),
						note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: note.error ? "dt-ticket-note dt-ticket-note-error" : "dt-ticket-note",
							title: note.text,
							children: note.text
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: ticket.updatedAt })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-ticket-actions",
					children: onChanged && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						answer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
							href: answer.url,
							icon: "message",
							children: t("answerIn", { source: valueLabel(t, "source", answer.source) })
						}),
						ticket.actions.retry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
							variant: "outline",
							icon: "refresh",
							label: t("retry"),
							title: t("retryTitle"),
							message: t("retryConfirm", { title: ticket.title }),
							onConfirm: () => after(call("POST tickets/:id/retry", { id: ticket.id }))
						}),
						ticket.actions.retry && ticket.sessionId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionButton, {
							variant: "outline",
							sessionId: ticket.sessionId
						}),
						ticket.actions.stop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
							variant: "outline",
							icon: "stop",
							label: t("stop"),
							title: t("stopConfirmTitle"),
							message: t("stopConfirm", { title: ticket.title }),
							onConfirm: () => after(call("POST tickets/:id/stop", { id: ticket.id }))
						})
					] })
				})
			]
		})]
	});
}
function ContextTag() {
	const { t } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone: "quiet",
		title: t("contextOnlyHint"),
		children: t("contextOnly")
	});
}
/** Thread list row; on a Ticket page, `ticketId` omits that Ticket from fanout targets and `context` marks context-only threads. */
function ThreadLine({ thread, ticketId, context }) {
	const { t, navigate } = usePanel();
	const live = thread.tickets.filter((ticket) => ticket.state === "open" && ticket.id !== ticketId);
	const { dot, icon, label } = threadMark(t, thread);
	const reaches = live.length > 0 && `${live[0].title}${live.length > 1 ? t("andMore", { count: live.length - 1 }) : ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "dt-row dt-link dt-ticket",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-ticket-stage",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageMark, {
				state: dot,
				icon,
				label
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-ticket-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-open",
						title: thread.pollError,
						onClick: () => navigate({
							page: "trigger",
							id: thread.key
						}),
						children: readableMarkers(t, thread.title)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-quote dt-line",
					children: thread.latest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						actorName(t, thread.latest.actor),
						t("labelSeparator"),
						readableMarkers(t, thread.latest.preview) || t("empty")
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-meta dt-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChip, { thread }),
						context && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextTag, {}),
						thread.pollError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-line-text dt-error-text",
							children: thread.pollError
						}) : reaches && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
							label: t("fanoutTo"),
							value: reaches
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: thread.lastAt })
					]
				})
			]
		})]
	});
}
function DecisionLine({ decision }) {
	const { t, navigate } = usePanel();
	const matched = decision.rules.filter((rule) => rule.matched).map((rule) => rule.name);
	const mark = decisionMark(t, decision.outcome);
	const preview = readableMarkers(t, decision.preview);
	const reason = decision.reason ? reasonLabel(t, decision.reason) : "";
	const open = () => decision.ticketId ? navigate({
		page: "execution",
		id: decision.ticketId
	}) : navigate({
		page: "trigger",
		id: decision.thread,
		query: { trigger: decision.triggerIds[0] ?? "" }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "dt-row dt-link dt-ticket",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-ticket-stage",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageMark, {
				state: mark.dot,
				icon: mark.icon,
				label: mark.label
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-ticket-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-open",
						title: reason || void 0,
						onClick: open,
						children: decision.ticketTitle ?? (decision.threadTitle ? readableMarkers(t, decision.threadTitle) : preview || t("empty"))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-quote dt-line",
					children: preview
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-meta dt-line",
					children: [
						reason && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-line-text",
							children: reason
						}),
						matched.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
							label: t("ruleLabel"),
							value: matched.join(t("listSeparator"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: decision.at })
					]
				})
			]
		})]
	});
}
function ThreadChip({ thread }) {
	const { t } = usePanel();
	const cells = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "dt-chip-source",
		children: valueLabel(t, "source", thread.source)
	}), Object.entries(thread.facts).map(([id, fact]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: fact.problem ? "dt-chip-fact dt-chip-problem" : "dt-chip-fact",
		children: [fact.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-chip-label",
			children: localized(t, fact.label)
		}), localized(t, fact.value)]
	}, id))] });
	return thread.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "dt-chip dt-chip-link",
		href: thread.url,
		target: "_blank",
		rel: "noopener noreferrer",
		title: thread.title,
		children: [cells, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-chip-open",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: "external",
				size: 11
			})
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "dt-chip",
		children: cells
	});
}
/** Group consecutive automated items from the same sender so only the newest is shown by default. */
function automatedRuns(items, sender) {
	const runs = [];
	for (const item of items) {
		const last = runs.at(-1), from = sender(item);
		if (last && from !== void 0 && sender(last.item) === from) last.earlier.push(item);
		else runs.push({
			item,
			earlier: []
		});
	}
	return runs;
}
function Earlier({ items }) {
	const { t } = usePanel();
	const [open, setOpen] = (0, import_react.useState)(false);
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "dt-textlink",
		"aria-expanded": open,
		onClick: () => setOpen(!open),
		children: open ? t("collapse") : t("automatedEarlier", { count: items.length })
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "dt-plain-list dt-hint",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: item.at }),
			" · ",
			readableMarkers(t, item.preview) || t("empty")
		] }, item.id))
	})] });
}
//#endregion
//#region src/client/settings-kit.tsx
/** Shared settings context, block draft hook, form controls, Source schema field renderer, and configuration history. */
/** Parse a numeric input string, returning `null` when empty so the server rejects blank required numbers instead of coercing to 0. */
const numberOf = (text) => text.trim() ? Number(text) : null;
const SettingsContext = (0, import_react.createContext)(void 0);
function useSettings() {
	const value = (0, import_react.useContext)(SettingsContext);
	if (!value) throw new Error("A settings block rendered outside the settings");
	return value;
}
function SettingsProvider({ children }) {
	const { call } = usePanel();
	const { restarts } = usePanelData();
	const { data, error, reload } = usePoll(() => call("GET settings"), [call, restarts]);
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
		error,
		loading: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsContext.Provider, {
		value: {
			settings: data,
			reload
		},
		children: [error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: false
		}), children]
	});
}
function useBlockDraft(block, saved, revision, toValue = (draft) => draft) {
	const { t, call, notify } = usePanel();
	const { state } = usePanelData();
	const { reload } = useSettings();
	return useDraft({
		key: `dsh-superagent/draft/${state?.masterId ?? ""}/${block}`,
		saved,
		revision,
		reload,
		save: async (value, from) => {
			const result = await call("PUT settings/:block", {
				block,
				body: {
					value: toValue(value),
					revision: from
				}
			});
			notify(t(result.restarting ? "savedRestarting" : "saved"));
			return result;
		}
	});
}
/** Fieldset wrapper that restores focus to the previously active input after a save completes and re-enables the form. */
function Fields({ disabled, children }) {
	const set = (0, import_react.useRef)(null);
	const focused = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const active = document.activeElement;
		if (disabled) focused.current = active instanceof HTMLElement && set.current?.contains(active) ? active : null;
		else if (focused.current && (!active || active === document.body)) {
			focused.current.focus({ preventScroll: true });
			focused.current = null;
		}
	}, [disabled]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fieldset", {
		ref: set,
		className: "dt-fieldset",
		disabled,
		children
	});
}
function Field({ label, hint, note, children }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "dt-field-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: id,
					children: label
				}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: hint })]
			}),
			(0, import_react.cloneElement)(children, { id }),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: note })
		]
	});
}
function SwitchRow({ label, hint, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-switch-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-field-head",
			children: [label, hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: hint })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onChange,
			label
		})]
	});
}
function ModelField({ id, value, onChange }) {
	const { t, call } = usePanel();
	const [catalog, setCatalog] = (0, import_react.useState)();
	const [error, setError] = (0, import_react.useState)();
	(0, import_react.useEffect)(() => {
		call("GET models").then(setCatalog, (failure) => setError(errorText(failure)));
	}, [call]);
	const current = {
		provider: value?.provider ?? "",
		model: value?.model ?? "",
		effort: value?.reasoningEffort ?? ""
	};
	const set = (next) => {
		const { provider, model, effort } = {
			...current,
			...next
		};
		onChange(provider.trim() || model.trim() || effort.trim() ? {
			provider,
			model,
			...effort ? { reasoningEffort: effort } : {}
		} : null);
	};
	const models = catalog?.groups.find((group) => group.id === current.provider.trim())?.models ?? [];
	const fallback = catalog?.default;
	const input = (name, label, placeholder) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			list: `${id}-${name}s`,
			spellCheck: false,
			placeholder,
			value: current[name],
			onChange: (event) => set({ [name]: event.target.value })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-model",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: fallback ? t("defaultModel", { model: `${fallback.provider} / ${fallback.model}${fallback.reasoningEffort ? ` · ${fallback.reasoningEffort}` : ""}` }) : t("defaultModelUnavailable") }),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "dt-error",
				children: t("modelCatalogError", { error })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-grid3",
				children: [
					input("provider", t("modelProvider"), t("modelInherit")),
					input("model", t("modelName"), t("modelInherit")),
					input("effort", t("modelEffort"), t("modelEffortDefault"))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
				id: `${id}-providers`,
				children: catalog?.groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: group.id,
					children: group.name
				}, group.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
				id: `${id}-models`,
				children: models.map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: model.id,
					children: model.name
				}, model.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
				id: `${id}-efforts`,
				children: (models.find((model) => model.id === current.model.trim())?.reasoning?.efforts ?? []).map((effort) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: effort.id,
					children: effort.name
				}, effort.id))
			})
		]
	});
}
function changeText(t, change, sources) {
	const source = sources.find((item) => item.id === change.source);
	const field = (change.part ? source?.policy?.fields : source?.fields)?.find((item) => item.key === change.field);
	const shown = (value) => value === void 0 || value === null || value === "" ? t("unsetValue") : typeof value === "boolean" ? t(value ? "yes" : "no") : change.code === "mode" ? valueLabel(t, "mode", String(value)) : String(value);
	return t(`change.${change.code}`, {
		items: (change.items ?? []).map((item) => source?.labels[item] ?? item).join(t("listSeparator")),
		from: shown(change.from),
		to: shown(change.to),
		name: change.name ?? "",
		source: source ? localized(t, source.title) : change.source ?? "",
		field: field ? localized(t, field.label) : change.field ?? ""
	});
}
/**
* Collapsible revision history for the specified settings blocks, optionally including all Policy-changing saves.
* Revisions saved before per-block tracking existed have no `block` and appear under `policy`.
*/
function ConfigHistory({ blocks, versions, focus }) {
	const { t, call } = usePanel();
	const { settings } = useSettings();
	const { sources } = settings;
	const [open, setOpen] = (0, import_react.useState)(!!focus);
	const [data, setData] = (0, import_react.useState)();
	const [error, setError] = (0, import_react.useState)();
	const revisions = JSON.stringify([Object.values(settings.blocks).map((block) => block.revision), sources.map((source) => source.revision)]);
	(0, import_react.useEffect)(() => {
		if (open) call("GET policy/history").then(setData, (failure) => setError(errorText(failure)));
	}, [
		open,
		call,
		revisions
	]);
	const listed = (block) => block ? blocks.some((item) => item === block || item.endsWith(":") && block.startsWith(item)) : blocks.includes("policy");
	const items = data?.items.filter((item) => versions && item.policyChanged || listed(item.block)) ?? [];
	const target = focus ? items.filter((item) => item.policyChanged && item.policyVersion.startsWith(focus)).at(-1) : void 0;
	const scroll = (element) => {
		if (element && !element.dataset.scrolled) {
			element.dataset.scrolled = "1";
			element.scrollIntoView?.({ block: "center" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "history" }),
		title: t("configHistory"),
		open,
		onToggle: () => setOpen(!open),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-disclosure-body",
			children: [error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "dt-error",
				children: error
			}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("historyIntro") }),
				focus && !target && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("policyVersionUnrecorded", { version: focus.slice(0, 8) }) }),
				items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "dt-timeline",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: item === target ? "dt-event dt-highlight" : "dt-event",
						ref: item === target ? scroll : void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dt-row-title",
								children: t("historyItem", {
									revision: item.revision,
									source: valueLabel(t, "historySource", item.source)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dt-event-foot",
								children: [when(item.savedAt, t("lang")), item.policyChanged && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", t("historyPolicyChanged", { version: item.policyVersion.slice(0, 8) })] })]
							}),
							item.changes === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("historyNoBaseline") }) : item.changes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "dt-changes",
								children: item.changes.map((change, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: changeText(t, change, sources) }, index))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("historyNoChanges") }),
							item.notified.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("historyNotified", {
								count: item.notified.length,
								titles: item.notified.map((ticket) => ticket.title).join(t("listSeparator"))
							}) })
						]
					}, item.revision))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("historyEmpty") })
			] })]
		})
	});
}
const ROWS_SHOWN = 6;
const byName = ([, a], [, b]) => a.localeCompare(b);
function RowsField({ field, value, saved, onChange, labels, refreshLabels }) {
	const { t, notify } = usePanel();
	const [open, setOpen] = (0, import_react.useState)(false);
	const refresh = useAction(async () => {
		try {
			const added = await refreshLabels();
			notify(added.length ? t("labelsAdded", { names: added.join(t("listSeparator")) }) : t("labelsCurrent"));
		} catch (failure) {
			notify(t("labelsFailed", { error: errorText(failure) }));
		}
	});
	const label = localized(t, field.label), hint = localized(t, field.hint);
	const rows = Array.isArray(value) ? value : [];
	const set = (index, row) => onChange(rows.map((item, position) => position === index ? row : item));
	const key = field.columns[0];
	const savedKeys = new Set((Array.isArray(saved) ? saved : []).map((row) => row[key.key]));
	const choose = key.type === "text" && key.choose && Object.keys(labels).length ? localized(t, key.choose) : "";
	const choices = (id) => Object.entries(labels).filter(([option]) => option === id || !rows.some((other) => other[key.key] === option)).sort(byName);
	const blank = Object.fromEntries(field.columns.map((column) => [column.key, column.type === "select" ? column.options[0].value : ""]));
	const named = field.columns[1]?.type === "text" ? field.columns[1] : void 0;
	const rowName = (row) => named && row[named.key] || labels[row[key.key] ?? ""] || row[key.key] || "";
	const cell = (row, index, column) => {
		const id = row[key.key] ?? "", change = (next) => set(index, {
			...row,
			[column.key]: next
		});
		if (column === key && (savedKeys.has(id) || !choose && labels[id])) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: labels[id] ? "dt-row-label" : "dt-row-label dt-mono",
			title: id,
			children: labels[id] ?? id
		}, column.key);
		if (column === key && choose) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "dt-select",
			"aria-label": choose,
			required: true,
			value: id,
			onChange: (event) => change(event.target.value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				disabled: true,
				children: choose
			}), choices(id).map(([option, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option,
				children: name
			}, option))]
		}, column.key);
		if (column.type === "select") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "dt-select",
			"aria-label": localized(t, column.label),
			value: row[column.key] ?? "",
			onChange: (event) => change(event.target.value),
			children: column.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option.value,
				children: localized(t, option.label)
			}, option.value))
		}, column.key);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			className: column.optional ? void 0 : "dt-mono",
			"aria-label": localized(t, column.label),
			placeholder: localized(t, column.label),
			required: !column.optional,
			pattern: column.pattern,
			spellCheck: false,
			value: row[column.key] ?? "",
			onChange: (event) => change(event.target.value)
		}, column.key);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-subhead",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "dt-field-head",
					children: [
						label,
						hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: hint }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-count",
							children: rows.length || ""
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "dt-subhead-actions",
					children: [key.type === "text" && key.refresh && refreshLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: refresh.busy ? "dt-btn-busy" : void 0,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "refresh" }),
						disabled: refresh.busy,
						"aria-busy": refresh.busy,
						onClick: () => {
							refresh.run();
						},
						children: localized(t, key.refresh)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "plus" }),
						onClick: () => {
							setOpen(true);
							onChange([...rows, blank]);
						},
						children: t("addRow")
					})]
				})]
			}),
			rows.length > ROWS_SHOWN && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "dt-textlink dt-rows-summary",
				"aria-expanded": open,
				onClick: () => setOpen(!open),
				children: open ? t("collapse") : rows.map(rowName).join(t("listSeparator"))
			}),
			(rows.length <= ROWS_SHOWN || open) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-rows",
				style: { ["--dt-columns"]: field.columns.length },
				children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "dt-rows-item",
					children: [field.columns.map((column) => cell(row, index, column)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "trash" }),
						"aria-label": t("removeRow", { name: labels[row[key.key] ?? ""] || row[key.key] || label }),
						onClick: () => onChange(rows.filter((_, position) => position !== index))
					})]
				}, index))
			})
		]
	});
}
function SourceField({ field, value, saved, fact, onChange, labels, refreshLabels }) {
	const { t, navigate } = usePanel();
	const label = localized(t, field.label), hint = localized(t, field.hint);
	switch (field.type) {
		case "switch": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
			label,
			hint,
			checked: value === true,
			onChange
		});
		case "select": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label,
			hint,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedControl, {
				className: "dt-segmented dt-field-segmented",
				label,
				value: String(value ?? field.options[0].value),
				options: field.options.map((option) => ({
					value: option.value,
					label: localized(t, option.label)
				})),
				onChange
			})
		});
		case "number": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label,
			hint,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "number",
				min: field.min,
				max: field.max,
				required: true,
				value: String(value ?? ""),
				onChange: (event) => onChange(event.target.value === "" ? "" : Number(event.target.value))
			})
		});
		case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label,
			hint,
			note: localized(t, fact),
			children: field.choose && Object.keys(labels).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "dt-select",
				value: String(value ?? ""),
				onChange: (event) => onChange(event.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: localized(t, field.choose)
					}),
					value && !labels[String(value)] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: String(value),
						children: String(value)
					}) : null,
					Object.entries(labels).sort(byName).map(([option, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: option,
						children: name
					}, option))
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: String(value ?? ""),
				readOnly: field.readonly,
				pattern: field.pattern,
				spellCheck: false,
				onChange: (event) => onChange(event.target.value)
			})
		});
		case "fact": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-field",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "dt-field-head",
					children: [label, hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: hint })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-mono",
					children: localized(t, fact) || t("empty")
				}),
				field.settings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "dt-textlink",
					onClick: () => navigate(settingsRoute(field.settings)),
					children: t(`openSettingsOf.${field.settings}`)
				}) })
			]
		});
		case "rows": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowsField, {
			field,
			value,
			saved,
			onChange,
			labels,
			refreshLabels
		});
	}
}
//#endregion
//#region src/client/eval.tsx
/** Eval status view (Decision log) and Eval settings group (Policy rules, per-Source admission, and assessor settings). */
function EvalStatus({ filter, window, paused }) {
	const { t, call, navigate } = usePanel();
	const [limit, setLimit] = (0, import_react.useState)(30);
	const { data, error } = usePoll(() => call("GET decisions", { query: {
		limit,
		kind: DECISION_KINDS[filter],
		...window ? { window } : {}
	} }), [
		filter,
		limit,
		window
	]);
	const show = (key, last24h) => navigate({
		page: "eval",
		query: {
			...key === "work" ? {} : { filter: key },
			...last24h ? { window: "24h" } : {}
		}
	}, true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusHead, {
			hint: t("evalStatusIntro"),
			settings: "eval"
		}),
		paused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "dt-banner",
			children: [
				t("evalRecordsPaused"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "dt-textlink",
					onClick: () => navigate({ page: "execution" }),
					children: t("resumeWhere")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-filters",
			children: [DECISION_FILTERS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				active: filter === key,
				onClick: () => {
					setLimit(30);
					show(key, !!window);
				},
				children: t(`decisionFilter.${key}`)
			}, key)), window && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dt-filter-gap" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				active: true,
				onClick: () => show(filter, false),
				children: t("lastDayOnly")
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: !data
		}),
		data && (data.items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "dt-list",
			children: data.items.map((decision) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, { decision }, decision.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("none") })),
		data?.next_offset != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadMore, { onMore: () => setLimit(limit + 30) })
	] });
}
function RuleRow({ rule, expanded, onToggle, onChange, onDuplicate, onRemove }) {
	const { t } = usePanel();
	const name = rule.name.trim() || t("newRule");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "dt-rule",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-rule-dot",
				"data-enabled": rule.enabled || void 0
			}),
			title: name,
			open: expanded,
			onToggle,
			collapsedContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-rule-preview",
				children: rule.instruction
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-rule-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ruleName"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: rule.name,
							required: true,
							maxLength: LIMITS.ruleName,
							onChange: (event) => onChange({
								...rule,
								name: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ruleInstruction"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "dt-textarea",
							rows: 4,
							required: true,
							maxLength: LIMITS.ruleInstruction,
							value: rule.instruction,
							placeholder: t("ruleInstructionPlaceholder"),
							onChange: (event) => onChange({
								...rule,
								instruction: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dt-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "copy" }),
							onClick: onDuplicate,
							children: t("duplicate")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "trash" }),
							onClick: onRemove,
							children: t("remove")
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			className: "dt-rule-switch",
			checked: rule.enabled,
			onChange: (enabled) => onChange({
				...rule,
				enabled
			}),
			label: t("ruleEnable", { name })
		})]
	});
}
function SourcePart({ source, part, saved, dirty, onChange, reload }) {
	const { t, call, notify } = usePanel();
	const policy = source.policy;
	const sync = policy.sync;
	const run = useAction(() => call("POST policy-sync/:id", { id: source.id }), { reload });
	const syncNow = () => {
		if (dirty) notify(t("syncNeedsSave"));
		else run.run();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-part",
		children: [
			policy.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceField, {
				field,
				value: part[field.key],
				saved: saved[field.key],
				fact: void 0,
				labels: source.labels,
				onChange: (next) => onChange({
					...part,
					[field.key]: next
				})
			}, field.key)),
			sync && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-row-buttons",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "refresh" }),
						disabled: run.busy || !sync.ready,
						onClick: syncNow,
						children: localized(t, sync.label)
					}),
					sync.health?.state === "ready" && sync.health.at && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
						label: t("syncDone"),
						value: when(sync.health.at, t("lang"))
					}),
					sync.health?.state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-error dt-clamp",
						children: sync.health.detail
					})
				]
			}),
			policy.rows ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmissionTable, {
				rows: policy.rows,
				labels: source.labels,
				table: part.admission ?? {},
				explicit: localized(t, policy.explicit),
				onChange: (admission) => onChange({
					...part,
					admission
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-field-head",
					children: t("explicitRequest")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: localized(t, policy.explicit) })]
			})
		]
	});
}
const CELLS = [
	"listedUnaddressed",
	"unlistedAddressed",
	"unlistedUnaddressed"
];
function AdmissionTable({ rows, labels, table, explicit, onChange }) {
	const { t } = usePanel();
	const name = (row) => labels[row.id] ?? localized(t, row.label);
	const set = (row, cell, value) => onChange({
		...table,
		[row]: {
			...table[row],
			[cell]: value
		}
	});
	const select = (row, cell) => {
		const value = table[row.id]?.[cell] ?? ADMISSION_DEFAULTS[cell];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "dt-admission-cell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "dt-select",
				"aria-label": `${name(row)} · ${t(`admissionCell.${cell}`)}`,
				value,
				onChange: (event) => set(row.id, cell, event.target.value),
				children: ADMISSION_OPTIONS[cell].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: option,
					children: t(`admissionValue.${option}`)
				}, option))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-admission-slot",
				children: cell === "unlistedAddressed" && value === "explicit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, {
					text: t("admissionAnyoneWarning"),
					icon: "alert",
					warn: true
				})
			})]
		}) }, cell);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: t("admission"),
		hint: t("admissionHint"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: explicit }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "dt-table dt-admission",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("thead", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						rowSpan: 2,
						children: t("admissionScope")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("admissionListed") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						colSpan: 2,
						children: t("admissionUnlisted")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("admissionUnaddressed") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("admissionAddressed") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("admissionUnaddressed") })
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "dt-admission-scope",
					children: [name(row), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: localized(t, row.note) })]
				}), CELLS.map((cell) => row.cells[cell] ? select(row, cell) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "dt-admission-na",
					"aria-label": t("admissionNotReceived"),
					children: "—"
				}, cell))] }, row.id)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("admissionFootnote") })
		]
	});
}
function PolicyBlock() {
	const { t } = usePanel();
	const { settings: { blocks, sources, policyVersion }, reload } = useSettings();
	const draft = useBlockDraft("policy", blocks.policy.value, blocks.policy.revision);
	const policy = draft.value;
	const [expanded, setExpanded] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const parts = sources.filter((source) => source.installed && source.policy);
	const [tab, setTab] = (0, import_react.useState)();
	const current = parts.find((source) => source.id === tab) ?? parts[0];
	const edit = (next) => draft.edit({
		...policy,
		...next
	});
	const toggle = (id) => {
		const next = new Set(expanded);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		setExpanded(next);
	};
	const insert = (rule, at) => {
		setExpanded(/* @__PURE__ */ new Set([...expanded, rule.id]));
		edit({ rules: [
			...policy.rules.slice(0, at),
			rule,
			...policy.rules.slice(at)
		] });
	};
	const reveal = (target) => {
		if (target instanceof Element && target.closest(".dt-rules")) setExpanded(new Set(policy.rules.map((rule) => rule.id)));
	};
	const part = (id) => policy.sources[id] ?? { allowed: [] };
	const add = () => insert({
		id: crypto.randomUUID(),
		name: "",
		enabled: true,
		instruction: ""
	}, policy.rules.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "dt-form dt-block",
		onSubmit: (event) => {
			draft.submit(event);
		},
		onInvalidCapture: (event) => reveal(event.target),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, {
			disabled: draft.busy,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "dt-block-title",
					children: [t("term.policy"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: t("policyIntro") })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "dt-flow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
						label: t("policyVersion"),
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-mono",
							children: policyVersion.slice(0, 8)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: t("policyVersionHint") })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("rules"),
					hint: t("rulesHint"),
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "plus" }),
						onClick: add,
						children: t("addRule")
					}),
					children: policy.rules.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "dt-rules",
						children: policy.rules.map((rule, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleRow, {
							rule,
							expanded: expanded.has(rule.id),
							onToggle: () => toggle(rule.id),
							onChange: (next) => edit({ rules: policy.rules.map((item, position) => position === index ? next : item) }),
							onDuplicate: () => insert({
								...rule,
								id: crypto.randomUUID(),
								name: `${rule.name}${t("copySuffix")}`.slice(0, LIMITS.ruleName)
							}, index + 1),
							onRemove: () => edit({ rules: policy.rules.filter((_, position) => position !== index) })
						}, rule.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("rulesEmpty") })
				}),
				current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("policyPerSource"),
					hint: t("policyPerSourceHint"),
					children: [parts.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dt-subtabs",
						role: "tablist",
						"aria-label": t("policyPerSource"),
						children: parts.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": source === current,
							className: "dt-subtab",
							onClick: () => setTab(source.id),
							children: localized(t, source.title)
						}, source.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcePart, {
						source: current,
						part: part(current.id),
						saved: blocks.policy.value.sources[current.id] ?? {},
						dirty: draft.dirty,
						reload,
						onChange: (next) => edit({ sources: {
							...policy.sources,
							[current.id]: next
						} })
					}, current.id)]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
			...draft,
			onDiscard: draft.discard
		})]
	});
}
function EvalBlock() {
	const { t } = usePanel();
	const block = useSettings().settings.blocks.eval;
	const draft = useBlockDraft("eval", {
		...block.value,
		timeoutSeconds: String(block.value.timeoutSeconds)
	}, block.revision, (value) => ({
		...value,
		timeoutSeconds: numberOf(value.timeoutSeconds)
	}));
	const value = draft.value;
	const edit = (next) => draft.edit({
		...value,
		...next
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "dt-form dt-block",
		onSubmit: (event) => {
			draft.submit(event);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, {
			disabled: draft.busy,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "dt-block-title",
					children: [t("evalSettings"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: t("evalIntro") })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("acceptMode"),
					hint: t(`modeOption.${value.mode}`),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedControl, {
						className: "dt-segmented",
						label: t("acceptMode"),
						value: value.mode,
						onChange: (mode) => edit({ mode }),
						options: [
							"off",
							"observe",
							"auto"
						].map((mode) => ({
							value: mode,
							label: valueLabel(t, "mode", mode),
							title: t(`modeOption.${mode}`)
						}))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("evalTimeout"),
					hint: t("evalTimeoutHint"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: LIMITS.evalTimeoutSeconds.min,
						max: LIMITS.evalTimeoutSeconds.max,
						required: true,
						value: value.timeoutSeconds,
						onChange: (event) => edit({ timeoutSeconds: event.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("assessorModel"),
					hint: t("assessorModelHint"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelField, {
						id: "dt-eval-model",
						value: value.model,
						onChange: (model) => edit({ model })
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
			...draft,
			onDiscard: draft.discard
		})]
	});
}
function EvalSettings({ version }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvalBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigHistory, {
				blocks: ["policy", "eval"],
				versions: true,
				...version ? { focus: version } : {}
			})
		]
	});
}
//#endregion
//#region src/client/execution.tsx
/** Execution status view (active Tickets and pause control) and Execution settings group (Executor capacity and workspace environment). */
function ExecutionStatus({ filter: current, state, reload }) {
	const { t, call, navigate } = usePanel();
	const [limit, setLimit] = (0, import_react.useState)(20);
	const { data, error, reload: reloadTickets } = usePoll(() => call("GET tickets", { query: {
		state: current,
		limit
	} }), [current, limit]);
	const { paused, load: { maxWorkers } } = state;
	const pause = async () => {
		await call("POST executor/pause", { body: { paused: !paused } });
		await reload();
	};
	const status = state.setup.problem ? {
		tone: "warning",
		label: t("executorWaitingSetup")
	} : paused ? {
		tone: "warning",
		label: t("processingPaused")
	} : {
		tone: "ongoing",
		label: t("executorRunning")
	};
	const action = paused ? "resumeProcessing" : "pauseProcessing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusHead, {
			hint: t("executionStatusIntro"),
			settings: "execution"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-meta dt-status-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-status-text",
					"data-state": status.tone,
					children: status.label
				}),
				!state.setup.problem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
					label: t("executingLabel"),
					value: `${state.load.running} / ${maxWorkers}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
					label: t("queuedLabel"),
					value: state.load.queued
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
					variant: "outline",
					icon: paused ? "play" : "pause",
					label: t(action),
					title: t(action),
					message: t(paused ? "resumeProcessingConfirm" : "pauseProcessingConfirm"),
					onConfirm: pause
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-filters",
			children: TICKET_FILTERS.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				active: current === value,
				onClick: () => {
					setLimit(20);
					navigate({
						page: "execution",
						query: value === "open" ? {} : { filter: value }
					}, true);
				},
				children: t(`ticketFilter.${value}`)
			}, value))
		}),
		current === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("idleHint") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: !data
		}),
		data && (data.items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "dt-list",
			children: data.items.map((ticket) => ticket.stage === "person" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketLine, {
				ticket,
				question: true,
				onChanged: reloadTickets
			}, ticket.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketLine, { ticket }, ticket.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("none") })),
		data?.next_offset != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadMore, { onMore: () => setLimit(limit + 20) })
	] });
}
const firstSentence = (text) => /^[^。；;.]*(?:[。；;]|\.(?=\s|$))?/.exec(text)?.[0] ?? text;
function EnvironmentVariables({ groups, sources, onPick }) {
	const { t } = usePanel();
	const [open, setOpen] = (0, import_react.useState)(false);
	const owner = (id) => id === "executor" ? t("term.executor") : localized(t, sources.find((source) => source.id === id)?.title ?? id);
	const count = groups.reduce((sum, group) => sum + group.variables.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "hash" }),
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			t("environmentVariables"),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-count",
				children: count
			})
		] }),
		open,
		onToggle: () => setOpen(!open),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-disclosure-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("environmentPick") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "dt-table",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("environmentKey") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("environmentDescription") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("environmentOwner") })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: groups.flatMap((group) => group.variables.map((variable) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-textlink dt-mono",
						onClick: () => onPick(variable.key),
						children: variable.key
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						title: localized(t, variable.description),
						children: firstSentence(localized(t, variable.description))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [owner(group.owner), !group.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "dt-hint",
						children: [" · ", t("sourceOff")]
					})] })
				] }, variable.key))) })]
			})]
		})
	});
}
function ExecutionSettings() {
	const { t } = usePanel();
	const { blocks, environment, sources } = useSettings().settings;
	const executor = blocks.executor.value;
	const draft = useBlockDraft("executor", {
		...executor,
		maxWorkers: String(executor.maxWorkers),
		blockedCommands: executor.blockedCommands.join(" ")
	}, blocks.executor.revision, (value) => ({
		...value,
		maxWorkers: numberOf(value.maxWorkers),
		blockedCommands: value.blockedCommands.split(/[\s,]+/).filter(Boolean)
	}));
	const value = draft.value;
	const edit = (next) => draft.edit({
		...value,
		...next
	});
	const prepare = (0, import_react.useRef)(null);
	const insert = (key) => {
		const field = prepare.current;
		const at = field?.selectionStart ?? value.prepare.length, to = field?.selectionEnd ?? at;
		edit({ prepare: `${value.prepare.slice(0, at)}"$${key}"${value.prepare.slice(to)}` });
		requestAnimationFrame(() => {
			field?.focus();
			const caret = at + key.length + 3;
			field?.setSelectionRange(caret, caret);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-form",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "dt-form",
			onSubmit: (event) => {
				draft.submit(event);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, {
				disabled: draft.busy,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-form dt-block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "dt-block-title",
							children: [t("term.executor"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: t("executorIntro") })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: t("executorModel"),
							hint: t("executorModelHint"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelField, {
								id: "dt-worker-model",
								value: value.model,
								onChange: (model) => edit({ model })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("maxWorkers"),
							hint: t("maxWorkersHint"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: LIMITS.maxWorkers.min,
								max: LIMITS.maxWorkers.max,
								required: true,
								value: value.maxWorkers,
								onChange: (event) => edit({ maxWorkers: event.target.value })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-form dt-block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "dt-block-title",
							children: [t("term.environment"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: t("environmentIntro") })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("executionDirectory"),
							hint: t("executionDirectoryHint"),
							note: value.directory ? void 0 : t("executionDirectoryDefault", { root: environment.root }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "dt-mono",
								value: value.directory,
								placeholder: t("executionDirectoryEmpty"),
								spellCheck: false,
								pattern: "/.*",
								onChange: (event) => edit({ directory: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("prepareCommand"),
							hint: t("prepareCommandHint"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: prepare,
								className: "dt-textarea dt-mono",
								rows: 3,
								maxLength: LIMITS.prepareCommand,
								spellCheck: false,
								placeholder: t("prepareCommandEmpty"),
								value: value.prepare,
								onChange: (event) => edit({ prepare: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvironmentVariables, {
							groups: environment.variables,
							sources,
							onPick: insert
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("blockedCommands"),
							hint: t("blockedCommandsHint"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "dt-mono",
								value: value.blockedCommands,
								placeholder: t("blockedCommandsNone"),
								spellCheck: false,
								onChange: (event) => edit({ blockedCommands: event.target.value })
							})
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
				...draft,
				onDiscard: draft.discard
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigHistory, { blocks: ["executor", "pause"] })]
	});
}
new Intl.Segmenter("zh", { granularity: "word" });
//#endregion
//#region src/setup.ts
const SETUP_PROBLEMS = {
	foreignFile: ["deployment", "{file} was not written by dsh-superagent; move it, or choose another state directory."],
	gitTooOld: ["deployment", "git does not read the github.com credential configuration dsh-superagent writes; dsh-superagent needs git 2.32 or later."],
	environmentFailed: ["deployment", "Preparing the agent environment failed."],
	repositoryUnset: ["github", "The GitHub Source names no repository."],
	agentCliUnset: ["github", "The agent GitHub CLI is not set."],
	agentCliMissing: ["github", "The agent GitHub CLI was not found."],
	agentCliSignedOut: ["github", "The agent GitHub CLI cannot read its account."],
	agentCliNoAccount: ["github", "The agent GitHub CLI did not report a GitHub account."],
	repositoryUnreadable: ["github", "@{account} cannot read {repository}."],
	repositoryUnreported: ["github", "The agent GitHub CLI did not return {repository}."],
	repositoryReadOnly: ["github", "@{account} cannot push to {repository}."],
	feishuCliFailed: ["feishu", "The bot lark-cli does not work."],
	feishuNoApp: ["feishu", "auth status of the bot lark-cli did not report the app."],
	feishuBotNotReady: ["feishu", "The bot identity of app {app} is {status}; configure the app secret with lark-cli."],
	feishuUserIdentity: ["feishu", "The bot lark-cli allows user identities (strict mode {mode}); give the bot its own lark-cli configuration in strict mode bot, as docs/006-deployment.md describes."],
	feishuNoBot: ["feishu", "The Feishu bot API did not return the bot's open_id."]
};
//#endregion
//#region src/sources/host.ts
/** Fixed English health templates (`{name}` placeholders); the panel localizes each `code` in the interface language. */
const HEALTH_TEXT = {
	setupPending: "Waiting for the deployment check",
	sourceOff: "Off",
	feishuCliUnset: "The Source is on, and its bot lark-cli is not set",
	feishuBotMissing: "Waiting for the Feishu bot",
	pollFailures: "{count} consecutive failed polls; last: {error}"
};
//#endregion
//#region src/client/locales.ts
/**
* Bilingual UI dictionaries (`[zh, en]`) and glossary groupings, following the domain terms in `docs/001-domain.md`.
*/
const TEXT = {
	title: ["Superagent", "Superagent"],
	close: ["关闭", "Close"],
	cancel: ["取消", "Cancel"],
	confirm: ["确定", "Confirm"],
	loading: ["正在读取…", "Loading…"],
	loadMore: ["加载更多", "Load more"],
	offline: ["无法连接到 dsh-superagent 服务。请确认它正在运行（dsh-superagent status），然后重试。", "Cannot reach the dsh-superagent service. Check that it is running (dsh-superagent status), then retry."],
	serverError: ["dsh-superagent 服务内部错误（{status}），请查看运行日志后重试。", "dsh-superagent service error ({status}). Check the log, then retry."],
	requestFailed: ["请求失败（{status}）。", "Request failed ({status})."],
	empty: ["—", "—"],
	yes: ["是", "Yes"],
	no: ["否", "No"],
	"decision.accept": ["接单", "Accept"],
	"decision.reopen": ["续做", "Reopen"],
	"decision.stop": ["停止", "Stop"],
	"decision.ignore": ["忽略", "Ignore"],
	"decision.unavailable": ["未完成", "Unavailable"],
	"strength.explicit": ["明确", "Explicit"],
	"strength.inferred": ["推断", "Inferred"],
	"mode.off": ["关闭", "Off"],
	"mode.observe": ["仅观察", "Observe"],
	"mode.auto": ["自动接单", "Auto"],
	"source.feishu": ["飞书", "Feishu"],
	"source.github": ["GitHub", "GitHub"],
	"source.github-issue": ["GitHub Issue", "GitHub Issue"],
	"health.github": ["GitHub 来源", "GitHub Source"],
	"health.feishu": ["飞书来源", "Feishu Source"],
	"health.history": ["飞书补收", "Feishu recovery"],
	"health.runtime": ["dsh-superagent", "dsh-superagent"],
	"health.models": ["模型服务", "Model service"],
	"health.assessment": ["发给主 Session 的评估", "Evals sent to the main Session"],
	"health.launch": ["派工启动", "Assignment launches"],
	"health.delivery": ["输入送达", "Input delivery to Assignments"],
	"health.relay": ["转达给主 Session 的消息", "Relays to the main Session"],
	"health.notice": ["给主 Session 的通知", "Notices to the main Session"],
	"health.reply": ["发往渠道的消息", "Messages to Channels"],
	"health.worker": ["执行器事件处理", "Executor event handling"],
	"health.evals": ["未完成的评估", "Unavailable Evals"],
	none: ["暂无。", "None."],
	openSession: ["打开 Session", "Open Session"],
	stop: ["停止", "Stop"],
	policyVersion: ["策略版本", "Policy version"],
	mediaMarker: ["[媒体]", "[Media]"],
	forwardMarker: ["[合并转发]", "[Merged forward]"],
	ticketId: ["工单 id", "Ticket id"],
	wouldAccept: ["忽略（可接单，仅观察）", "Ignore (would accept; observe only)"],
	timeline: ["触发时间线", "Trigger timeline"],
	groupMember: ["飞书用户", "Feishu user"],
	feishuBot: ["飞书机器人", "Feishu bot"],
	unknownMention: ["@某人", "@someone"],
	automatedNotice: ["自动通知", "Automated notice"],
	requeue: ["重新评估", "Evaluate again"],
	imageMarker: ["[图片]", "[image]"],
	rules: ["接单规则", "Accept rules"],
	remove: ["删除", "Delete"],
	"historySource.panel": ["管理页", "Management page"],
	"historySource.defaults": ["插件默认值", "Plugin defaults"],
	"historySource.tool": ["主 Session 工具", "Main Session tool"],
	"historySource.sync": ["从群同步", "Sync"],
	"historySource.web": ["管理页", "Management page"],
	"historySource.member-sync": ["成员同步", "Member sync"],
	"historySource.orchestrator-tool": ["主 Session 工具", "Main Session tool"],
	"historySource.internal": ["内部", "Internal"],
	"historySource.policy-sync": ["从群同步", "Sync"],
	"historySource.sections-migration": ["升级迁移", "Upgrade migration"],
	"historySource.vocabulary-migration": ["升级迁移", "Upgrade migration"],
	"historySource.settings-migration": ["升级迁移", "Upgrade migration"],
	listSeparator: ["、", ", "],
	labelSeparator: ["：", ": "],
	lang: ["zh", "en"],
	automatedEarlier: ["同一发送者之前还有 {count} 条自动消息", "{count} earlier automated messages from the same sender"],
	collapse: ["收起", "Collapse"],
	expand: ["展开全文", "Show all"],
	cardMarker: ["[卡片消息]", "[card message]"],
	setupProblem: ["部署检查未通过：{detail}", "Deployment check failed: {detail}"],
	hostNotRunning: ["dsh-superagent 没有响应：它可能正在重启；持续如此时，DSH 的日志写明原因，常见的是配置有误。", "dsh-superagent is not answering: it may be restarting; if this persists, the DSH log names the cause, often a configuration error."],
	savedRestarting: ["已保存，dsh-superagent 正在重启", "Saved; dsh-superagent is restarting"],
	problems: ["系统问题", "System problems"],
	dismiss: ["不再提示", "Dismiss"],
	saved: ["已保存", "Saved"],
	"tab.settings": ["设置", "Settings"],
	statusTitle: ["状态", "Status"],
	executingLabel: ["执行中", "Executing"],
	queuedLabel: ["排队", "Queued"],
	resumeProcessing: ["恢复处理", "Resume processing"],
	resumeProcessingConfirm: ["恢复后继续评估、派工和发送回复。", "Resuming starts Evals, Assignments and replies again."],
	restartInterrupts: ["保存会重启 dsh-superagent：{count} 个进行中的派工会中断，并带恢复说明重新开始。", "Saving restarts dsh-superagent: {count} running Assignments stop and start again with a recovery note."],
	sourceOff: ["已关闭", "Off"],
	executorWaitingSetup: ["执行器等待部署检查", "Executor waiting for the deployment check"],
	panel: ["Superagent", "Superagent"],
	openMaster: ["打开主 Session", "Open main Session"],
	pagesLabel: ["dsh-superagent 页面", "dsh-superagent pages"],
	searchPlaceholder: ["搜索工单、线程、触发或链接", "Search Tickets, Threads, Triggers or links"],
	searchLabel: ["搜索", "Search"],
	searchFound: ["找到 {tickets} 个工单、{threads} 个线程、{items} 条触发", "Found {tickets} Tickets, {threads} Threads and {items} Triggers"],
	searchNone: ["没有找到。可以输入触发文字、GitHub PR 或 Issue 链接、#编号、飞书消息链接或 om_ 开头的消息 id。", "Nothing found. Try Trigger text, a GitHub PR or Issue link, #number, a Feishu message link, or an om_ message id."],
	searchNoneGithub: ["没有找到。可以输入触发文字、GitHub PR 或 Issue 链接或 #编号。", "Nothing found. Try Trigger text, a GitHub PR or Issue link, or #number."],
	"ticket.ended": ["已结束", "ended"],
	sessionListNotReady: ["Session 列表尚未加载，请稍后重试。", "The Session list has not loaded yet; try again shortly."],
	sessionNotListed: ["这个 Session 不在当前会话列表里，可能已被归档或删除。", "This Session is not in the current list; it may have been archived or deleted."],
	searchFiltered: ["被来源过滤：{reason}", "Filtered by its Source: {reason}"],
	searchFoundCapped: ["找到 {tickets} 个工单、{threads} 个线程、前 {items} 条触发（请缩小搜索范围）", "Found {tickets} Tickets, {threads} Threads and the first {items} Triggers (narrow the search)"],
	inThread: ["在 {thread}", "in {thread}"],
	"tab.overview": ["概览", "Overview"],
	"tab.source": ["来源", "Source"],
	"tab.trigger": ["触发", "Trigger"],
	"tab.eval": ["评估", "Eval"],
	"tab.execution": ["执行", "Execution"],
	sourceError: ["{source} 来源异常", "{source} Source failing"],
	needsYouNone: ["没有待处理的工单。", "No pending Tickets."],
	pendingTickets: ["待处理工单", "Pending Tickets"],
	problemEvalOverdue: ["评估超时未决定：{thread}", "Eval overdue: {thread}"],
	problemSetup: ["部署检查未通过，dsh-superagent 暂不接单", "Deployment check failed; dsh-superagent takes no work"],
	problemNoSource: ["没有运行中的来源，不会收到任何触发", "No Source is running; no Triggers arrive"],
	actionOpenSources: ["去打开来源", "Turn on a Source"],
	problemPaused: ["处理已暂停：不开始新的评估，不派工，不发送回复", "Processing paused: no new Evals, Assignments or replies"],
	problemReply: ["{source} 回复发送失败（已重试 {attempts} 次）", "{source} reply failing (retried {attempts} times)"],
	problemRuntime: ["运行异常：{name}", "{name} failing"],
	problemEvalUnavailable: ["评估未完成：{thread}", "Eval unavailable: {thread}"],
	sourceErrorHint: ["来源会在每次轮询时自动重试。持续出现时检查网络和该来源的登录状态。", "The Source retries on every poll. If this persists, check the network and the Source's sign-in."],
	details: ["详情 ›", "Details ›"],
	lastDay: ["过去 24 小时", "Last 24 hours"],
	flowReceivedLabel: ["到达", "Arrived"],
	flowFilteredLabel: ["被过滤", "Filtered"],
	flowDroppedLabel: ["放弃发送", "Not sent"],
	flowJudgedLabel: ["已评估", "Evaluated"],
	flowAcceptedLabel: ["接单或续做", "Accepted or continued"],
	idleLabel: ["等待新触发", "Waiting for a Trigger"],
	problemNoAllowed: ["没有人能发起工作：各来源上的名单都为空，任何请求都不会成为工单", "No one may originate work: the lists on every Source are empty, so no request can become a Ticket"],
	actionAddAllowed: ["去添加", "Add senders"],
	"problemSetupFix.github": ["在设置 › 来源的 GitHub 卡片修正后保存，会重新检查；在 dsh-superagent 之外修复的（例如登录 CLI），点“重新检查”。", "Fix it on the GitHub card of the Source settings and save to check again; after a fix outside dsh-superagent, such as signing a CLI in, choose Check again."],
	"problemSetupFix.feishu": ["在设置 › 来源的飞书卡片修正后保存，会重新检查；在 dsh-superagent 之外修复的（例如配置机器人），点“重新检查”。", "Fix it on the Feishu card of the Source settings and save to check again; after a fix outside dsh-superagent, such as configuring the bot, choose Check again."],
	"problemSetupFix.deployment": ["在部署设置里修正后保存，会重新检查；在 dsh-superagent 之外修复的（例如升级 git），点“重新检查”。", "Fix it in the Deployment settings and save to check again; after a fix outside dsh-superagent, such as upgrading git, choose Check again."],
	problemSetupFeishu: ["飞书机器人检查未通过，飞书来源暂停", "Feishu bot check failed; the Feishu Source is paused"],
	labelsAdded: ["列表已更新，新增：{names}", "List updated, added: {names}"],
	labelsCurrent: ["列表已是最新", "List is up to date"],
	labelsFailed: ["读取失败，列表保持不变：{error}", "Could not read the list; it stays as it was: {error}"],
	sourceNotInstalled: ["插件未安装", "Plugin not installed"],
	sourceNotInstalledHint: ["提供这个来源的插件没有加载，配置按保存时的样子保留。", "The plugin that provides this Source is not loaded; its configuration is kept as saved."],
	sourceEnable: ["运行来源：{name}", "Run Source: {name}"],
	addRow: ["添加", "Add"],
	removeRow: ["移除：{name}", "Remove: {name}"],
	sourceFilteredTitle: ["24 小时内最近被过滤的触发", "Latest Triggers filtered in the last 24 hours"],
	sourceDroppedTitle: ["24 小时内放弃发送的消息", "Not sent in the last 24 hours"],
	sourceDroppedHint: ["这些消息要发往的对话已无法接收，或来源已不再监听该对话，因此放弃发送。", "Their conversation can no longer receive them, or the Source no longer listens to it, so they are not sent."],
	sourceStatusIntro: ["每个来源是否在运行、过去 24 小时到达和被过滤的触发，以及被过滤的原因。", "Whether each Source runs, the Triggers that arrived and were filtered in the last 24 hours, and why they were filtered."],
	sourceReceivedLabel: ["24 小时到达", "Arrived in 24 h"],
	sourceFilteredLabel: ["被过滤", "Filtered"],
	sourceLatestLabel: ["最近", "Latest"],
	advanced: ["高级", "Advanced"],
	"sourceState.done": ["运行中", "Running"],
	"sourceState.ongoing": ["启动中", "Starting"],
	"sourceState.warning": ["待处理", "Pending"],
	"sourceState.error": ["出错", "Failing"],
	sourceOpenSettings: ["去设置", "Open settings"],
	"sourceState.setup": ["等待部署检查", "Waiting for the deployment check"],
	setupFixLink: ["去修正", "Fix it"],
	"openSettingsOf.deployment": ["去部署页修改", "Change it on Deployment"],
	loadEarlier: ["加载更早的触发", "Load earlier Triggers"],
	subscribedTickets: ["订阅此线程的工单", "Tickets subscribed to this Thread"],
	threadNotFound: ["找不到这个线程。", "Thread not found."],
	threadsNone: ["没有符合条件的线程。", "No matching Threads."],
	threadLatest: ["最近 {time}", "Latest {time}"],
	threadCreated: ["创建 {time}", "Created {time}"],
	threadEvaluating: ["评估进行中", "Eval running"],
	pollFailed: ["轮询失败：{error}", "Polling failed: {error}"],
	unsubscribe: ["取消订阅", "Unsubscribe"],
	unsubscribeTitle: ["取消订阅", "Unsubscribe"],
	unsubscribeConfirm: ["取消后，“{title}”的新触发不再扇出给工单，直到下一次接单或关联。", "New Triggers in \"{title}\" will stop fanning out to Tickets until the next accept or attach."],
	unsubscribePending: ["已取消订阅，结果等待注入主 Session。", "Unsubscribed; the receipt is waiting to reach the main Session."],
	openOriginal: ["打开原文", "Open original"],
	evaluatingBanner: ["评估进行中：{count} 条触发，{strength}，{deadline} 到期。", "Eval running: {count} Triggers, {strength}, due {deadline}."],
	noTriggers: ["没有保留的触发。", "No retained Triggers."],
	dispositionQueued: ["已排队，等待评估", "Queued for Eval"],
	dispositionEvaluating: ["评估进行中", "Eval running"],
	dispositionFanout: ["扇出到 {count} 个工单", "Fanned out to {count} Tickets"],
	dispositionDelivered: ["已送达工单", "Delivered to Ticket"],
	dispositionDeliveredHint: ["有人在已有工单的线程上跟进时，消息直接送达工单的执行器，不经评估，也不产生决定。", "A person's follow-up on a Thread with a Ticket goes straight to the Ticket's Executor, with no Eval and no Decision."],
	handedBack: ["“{ticket}”的执行器把这条触发交回评估：{reason}", "The Executor of “{ticket}” handed it back for an Eval: {reason}"],
	inputHandedBack: ["已交回评估：{reason}", "Handed back for an Eval: {reason}"],
	contextOnly: ["仅作上下文", "Context only"],
	contextOnlyHint: ["执行器关注这个线程只为了解情况：这里的消息会送达工单，但不带授权，也不会恢复已结束的工单。", "The Executor follows this Thread only to stay informed: its messages reach the Ticket but grant nothing and resume no ended Ticket."],
	requeueAlready: ["这条触发已经在评估中。", "This Trigger is already in an Eval."],
	andMore: ["等 {count} 个", " and {count} more"],
	newestFirst: ["最新在前", "newest first"],
	openTicket: ["查看工单", "Open Ticket"],
	tagFiltered: ["已过滤：{reason}", "Filtered: {reason}"],
	threadDormantShort: ["工单已结束", "Tickets ended"],
	threadPollFailed: ["轮询失败", "Polling failed"],
	threadQueued: ["排队 {count}", "{count} queued"],
	threadSubscribed: ["已订阅", "Subscribed"],
	threadUnsubscribed: ["未订阅", "Not subscribed"],
	fanoutTo: ["扇出给", "Fans out to"],
	unsubscribeHint: ["取消订阅后，这个线程的新触发不再扇出给工单，直到下一次接单或关联。", "After unsubscribing, new Triggers here stop fanning out to Tickets until the next accept or attach."],
	"threadFilter.subscribed": ["已被订阅", "Subscribed"],
	"threadFilter.evaluating": ["评估中", "Evaluating"],
	"threadFilter.recent": ["24 小时内有新触发", "New Triggers in 24 h"],
	"threadFilter.all": ["全部线程", "All Threads"],
	triggerIntro: ["触发按线程归组；线程决定它们扇出给哪些工单、由哪次评估处理。", "Triggers grouped by Thread; the Thread decides which Tickets they fan out to and which Eval handles them."],
	threadDecisions: ["这个线程的决定 · {count}", "Decisions in this Thread · {count}"],
	policyVersionHint: ["策略版本由接单规则、各来源上的策略和评估的接单模式决定；修改任何一项都会生成新版本，并通知进行中的工单。每个工单记下接单时的版本。", "The rules, the Policy on each Source and the accept mode of Eval make up the Policy version; any change makes a new version and notifies open Tickets. Each Ticket records the version it was accepted under."],
	syncNeedsSave: ["请先保存或放弃修改，再同步。", "Save or discard your changes before syncing."],
	acceptMode: ["接单模式", "Accept mode"],
	"modeOption.off": ["只处理明确的请求，不评估其他触发", "Only explicit requests are handled; other Triggers are not evaluated"],
	"modeOption.observe": ["评估其他触发并记录研判，但不接单", "Other Triggers are evaluated and Assessments recorded, but nothing is accepted"],
	"modeOption.auto": ["其他触发符合规则时接单", "Other Triggers that match a rule are accepted"],
	rulesHint: ["写明可以接什么、应忽略什么，也可以写明按这条规则接下的工单请谁审阅 PR。多条命中只接一单，有冲突或不明确时不接单。", "State what to accept and what to ignore, and optionally who reviews the PRs of Tickets accepted under the rule. Several matches accept once; conflicts or ambiguity accept nothing."],
	addRule: ["添加规则", "Add rule"],
	rulesEmpty: ["暂无规则，不会主动接单。", "No rules; nothing is accepted proactively."],
	ruleName: ["规则名称", "Rule name"],
	ruleInstruction: ["接单条件", "Acceptance condition"],
	ruleInstructionPlaceholder: ["例如：明确要求修正已有说明中的失效链接；不新增或改变产品承诺。", "For example: explicit requests to fix broken links in existing docs; no new product promises."],
	ruleEnable: ["启用规则：{name}", "Enable rule: {name}"],
	newRule: ["新规则", "New rule"],
	duplicate: ["复制", "Duplicate"],
	copySuffix: [" 副本", " copy"],
	evalTimeout: ["单次评估时限 / 秒", "Eval time limit / seconds"],
	evalTimeoutHint: ["主 Session 读取上下文并研判。到期后记为未完成，后续触发重新评估。", "The main Session reads context and assesses. When time runs out the Eval is unavailable and later Triggers are evaluated again."],
	evalIntro: ["评估决定一批触发是否成为工作：推断出的候选能否接单、评估时限和研判模型。", "Eval decides whether a batch of Triggers becomes work: whether inferred candidates may be accepted, the time limit, and the assessor model."],
	evalSettings: ["评估设置", "Eval settings"],
	policyIntro: ["评估依据的规则：接单规则，以及各来源上谁能发起工作。修改会生成新的策略版本，并通知进行中的工单。", "The rules Eval follows: the accept rules, and who may originate work on each Source. A change makes a new Policy version and notifies open Tickets."],
	assessorModel: ["研判模型", "Assessor model"],
	assessorModelHint: ["主 Session 的模型，负责研判和路由。保存后用于新建的主 Session，已有 Session 保持原选择。", "Model of the main Session, which assesses and routes. Applies to a newly created main Session; existing Sessions keep their choice."],
	ruleLabel: ["规则", "Rules"],
	"decisionFilter.work": ["接单与续做", "Accept and reopen"],
	"decisionFilter.stop": ["停止", "Stopped"],
	"decisionFilter.ignore": ["忽略", "Ignored"],
	"decisionFilter.unavailable": ["未完成", "Unavailable"],
	"decisionFilter.all": ["全部", "All"],
	lastDayOnly: ["仅过去 24 小时到达的触发 ✕", "Triggers from the last 24 hours only ✕"],
	evalStatusIntro: ["评估按策略对触发做出的决定，每条写明理由。", "The Decisions Eval made on Triggers under the Policy, each with its reason."],
	policyPerSource: ["在各来源上", "On each Source"],
	policyPerSourceHint: ["策略在每个来源上的部分：谁能通过这个来源发起工作，用这个来源自己的身份；不同来源之间不对应。要让智能体知道同一个人在各来源的账号，写在提示词里。", "The Policy's part on each Source: who may originate work through it, in that Source's own identities, with no mapping between Sources. To tell the agents a person's account on each Source, write it in the prompts."],
	explicitRequest: ["明确的请求", "Explicit request"],
	admission: ["准入", "Admission"],
	admissionHint: ["每个接收范围里，谁的什么消息算明确的请求、推断的候选，或被忽略。行来自来源设置里的接收范围。计入策略版本。", "For each receiving scope, whose messages are explicit requests, inferred candidates, or ignored. The rows come from the receiving scopes in the Source settings. Part of the Policy version."],
	admissionScope: ["接收范围", "Receiving scope"],
	admissionListed: ["名单内", "On the list"],
	admissionUnlisted: ["名单外", "Not on the list"],
	admissionAddressed: ["点名智能体", "Addresses the agent"],
	admissionUnaddressed: ["未 @", "No mention"],
	admissionNotReceived: ["这个范围收不到这类消息", "This scope does not receive these messages"],
	"admissionCell.listedUnaddressed": ["名单内 · 未 @", "On the list · no mention"],
	"admissionCell.unlistedAddressed": ["名单外 · 点名智能体", "Not on the list · addresses the agent"],
	"admissionCell.unlistedUnaddressed": ["名单外 · 未 @", "Not on the list · no mention"],
	"admissionValue.explicit": ["明确的请求", "Explicit request"],
	"admissionValue.inferred": ["推断的候选", "Inferred candidate"],
	"admissionValue.ignore": ["忽略", "Ignore"],
	admissionAnyoneWarning: ["这个范围里任何人点名智能体都能直接发起工作", "Anyone here who addresses the agent can originate work directly"],
	admissionFootnote: ["「推断的候选」按接单模式评估：模式为关闭时忽略。已有工单的线程里的跟进不看这张表。改成更弱的选项时，按这一格接下的进行中工单的授权失效。", "Inferred candidates follow the accept mode and are ignored when it is off. Follow-ups on Threads that have Tickets do not use this table. Weakening a cell revokes the Mandates of open Tickets accepted under it."],
	syncDone: ["上次同步", "Last synced"],
	evalRecordsPaused: ["处理已暂停：新的触发会被记录，但不会被评估。", "Processing is paused: new Triggers are recorded but not evaluated."],
	resumeWhere: ["在执行状态中恢复", "Resume in the Execution status"],
	"outcome.completed": ["已完成", "Completed"],
	"outcome.merged": ["PR 已合并", "Pull request merged"],
	"outcome.closed": ["PR 已关闭（未合并）", "Pull request closed unmerged"],
	"outcome.dropped": ["无需处理", "Nothing to do"],
	"outcome.stopped": ["人工停止", "Stopped by a person"],
	"assignment.pending": ["待启动", "Pending"],
	"assignment.running": ["执行中", "Running"],
	"assignment.ended": ["已结束", "Ended"],
	"report.queued": ["排队", "queued"],
	"report.running": ["执行中", "running"],
	"report.progress": ["进展", "progress"],
	"report.waiting": ["等待", "waiting"],
	"report.ready": ["就绪", "ready"],
	"report.blocked": ["受阻", "blocked"],
	"report.failed": ["失败", "failed"],
	"report.dropped": ["无需处理", "no action needed"],
	"report.completed": ["已完成", "completed"],
	"report.merged": ["已合并", "merged"],
	"report.closed": ["PR 已关闭", "PR closed"],
	"report.stopped": ["已停止", "stopped"],
	"report.open": ["进行中", "open"],
	"input.trigger": ["触发", "Trigger"],
	"input.policy-changed": ["策略变更", "Policy change"],
	"input.reopen": ["续做", "Reopened"],
	"input.resumed": ["恢复：线程上有人发了新消息", "Resumed by a new message on its thread"],
	"input.text": ["dsh-superagent 说明", "dsh-superagent note"],
	"input.note": ["主 Session 的备注", "Orchestrator note"],
	attentionPrefix: ["待人工决定：", "Attention: "],
	stopConfirmTitle: ["停止工单", "Stop Ticket"],
	stopConfirm: ["停止“{title}”？当前派工结束，Session 和执行目录保留；停止收回授权，之后线程里的消息不再恢复它，要继续需要重新接单。", "Stop \"{title}\"? Its current Assignment ends; its Session and directory stay. Stopping withdraws its Mandate: later messages on its Threads do not resume it, and continuing needs a new accept."],
	endedAt: ["{time} {outcome}：{reason}", "{time} {outcome}: {reason}"],
	assignmentNumber: ["第 {number} 次派工", "Assignment {number}"],
	inputDelivered: ["已送达", "Delivered"],
	inputPausedHint: ["未送达：处理已暂停，恢复后送达", "Undelivered: processing is paused; delivery resumes with it"],
	inputWaitingHint: ["未送达：等待派工运行", "Undelivered: waiting for the Assignment to run"],
	inputRetryHint: ["未送达：会自动重试，直到送达", "Undelivered: delivery is retried until it succeeds"],
	deliveryFailedPrefix: ["送达失败：", "Delivery failed: "],
	subscribedThreads: ["订阅的线程", "Subscribed Threads"],
	answerIn: ["去{source}回答", "Answer in {source}"],
	ticketNotFound: ["找不到这个工单。", "Ticket not found."],
	identifiers: ["标识", "Identifiers"],
	"basis.admission": ["准入", "Admission"],
	"basis.followup": ["线程内跟进", "Follow-up in Thread"],
	"basis.observation": ["接收全部消息的群", "Chat receiving all messages"],
	"basis.bot": ["名单内的机器人", "Listed bot"],
	"basis.mode": ["接单模式", "Accept mode"],
	"basis.rules": ["命中规则", "Matched rules"],
	"basis.legacyAuthority": ["旧版授权", "Legacy authority"],
	"legacy.explicit_mention": ["@ 智能体", "Mention"],
	"legacy.proactive_rule": ["主动规则", "Proactive rule"],
	"legacy.thread_followup": ["线程内跟进", "Thread follow-up"],
	ruleMatched: ["{rule} · 匹配：{reason}", "{rule} · matched: {reason}"],
	ruleUnmatched: ["{rule} · 不匹配：{reason}", "{rule} · not matched: {reason}"],
	directionLine: ["实施意图：{intent}；修改依据：{basis}；{design}", "Implementation intent: {intent}; target: {basis}; {design}"],
	intentYes: ["已明确", "established"],
	intentNo: ["未明确", "not established"],
	"targetBasis.specified": ["已明确目标", "specified"],
	"targetBasis.existing-standard": ["既有规范／已验证正确状态", "existing standard or verified correct state"],
	"targetBasis.undetermined": ["目标未定", "undetermined"],
	designNeeded: ["仍需产品／视觉设计决策", "a product or design decision remains"],
	designNotNeeded: ["无需新增设计决策", "no new design decision"],
	directionEvidence: ["方向证据：{evidence}", "Evidence: {evidence}"],
	maxWorkers: ["并行工单数", "Concurrent Tickets"],
	maxWorkersHint: ["超过并发上限的工单排队等待。", "Tickets beyond the limit wait in a queue."],
	"basis.sender": ["发起人", "Sender"],
	"basis.addressed": ["点名方式", "Addressed by"],
	"addressed.mention": ["@ 智能体", "Mention"],
	"addressed.direct": ["私聊", "Direct message"],
	executorIntro: ["执行器执行派工：每个工单一个执行器 Session 和执行目录。", "The Executor runs Assignments: one Executor Session and directory per Ticket."],
	executorModel: ["执行器模型", "Executor model"],
	executorModelHint: ["保存后用于新建的执行器 Session，已有 Session 保持原选择。留空继承 DSH 默认值。", "Applies to new Executor Sessions; existing Sessions keep their choice. Leave empty to inherit the DSH default."],
	assignmentReportShort: ["报告：{state}", "Report: {state}"],
	assignmentSpan: ["{from} → {to}", "{from} → {to}"],
	inputUndelivered: ["未送达", "Undelivered"],
	mandateDetails: ["授权详情", "Mandate details"],
	now: ["现在", "now"],
	stopHint: ["停止后当前派工结束，Session 和执行目录保留；停止收回授权，之后线程里的消息不再恢复它，要继续需要重新接单。", "Stopping ends the current Assignment; its Session and directory stay. Stopping withdraws its Mandate: later messages on its Threads do not resume it, and continuing needs a new accept."],
	idleHint: ["执行器结束了当前回合，没有提出问题；这些工单订阅的线程收到新触发时继续。", "The Executor ended its turn without asking anything; a new Trigger on a subscribed Thread resumes it."],
	"stage.answer": ["待回答", "Awaiting answer"],
	"stage.review": ["待验收", "Awaiting review"],
	"stage.blocked": ["待处理受阻", "Blocked"],
	"stage.failed": ["待处理失败", "Failed"],
	"stage.delivery": ["输入未送达", "Input undelivered"],
	"stage.queued": ["排队中", "Queued"],
	"stage.working": ["执行中", "Working"],
	"stage.idle": ["等待新触发", "Waiting for a Trigger"],
	deliveredInputs: ["已送达的输入 · {count}", "Delivered Inputs · {count}"],
	endedAtShort: ["{time} {outcome}", "{time} {outcome}"],
	legacyAssignment: ["原始说明", "Original brief"],
	legacyScopeShort: ["未记录（旧版导入）", "Not recorded (legacy import)"],
	retry: ["重试", "Retry"],
	failedPrefix: ["失败：", "Failed: "],
	blockedPrefix: ["受阻：", "Blocked: "],
	retryConfirm: ["为“{title}”结束当前派工并重新派工？授权和订阅不变。", "End the current Assignment of \"{title}\" and start a new one? Mandate and Subscriptions stay."],
	retryTitle: ["重试工单", "Retry Ticket"],
	undeliveredInputs: ["未送达的输入", "Undelivered Inputs"],
	executionStatusIntro: ["执行器的状态，以及按在等谁分组的工单。", "The Executor's state, and the Tickets grouped by who they wait on."],
	ticketUndeliveredLabel: ["未送达", "Undelivered"],
	ticketMandateLabel: ["授权", "Mandate"],
	ticketActorLabel: ["发起", "From"],
	ticketUpdatedLabel: ["更新", "Updated"],
	executionDirectory: ["执行目录的根目录", "Ticket directory root"],
	executionDirectoryDefault: ["留空时用 {root}", "Empty uses {root}"],
	executionDirectoryEmpty: ["留空：默认目录", "Empty: the default directory"],
	openThread: ["打开 {source} 原文", "Open on {source}"],
	executionDirectoryHint: ["每个工单在这里有自己的目录，以工单短名命名；执行器 Session 在其中工作。这只按目录分开工单，不是安全边界。", "Each Ticket gets its own directory here, named by its short name, where its Executor Session works. This separates Tickets by directory only; it is not a security boundary."],
	prepareCommand: ["准备命令", "Prepare command"],
	prepareCommandHint: ["新工单的目录建好前，在根目录下用 sh 运行一次，执行环境的变量是它的环境变量，例如用 git worktree 把仓库检出到 $DSH_SUPERAGENT_DIR。留空就是空目录。失败时工单显示失败，并附上命令的输出。", "Runs once with sh in the root before a new Ticket's directory exists, with the execution environment's variables as its environment, for example to check a repository out to $DSH_SUPERAGENT_DIR with git worktree. Leave it empty for an empty directory. A failure fails the Ticket with the command's output."],
	prepareCommandEmpty: ["留空：空目录", "Empty: an empty directory"],
	blockedCommands: ["禁止调用的命令", "Blocked commands"],
	blockedCommandsHint: ["执行器 Session 调用这些命令名时直接失败，例如用你个人账号登录的 CLI。只拦按名字的调用，用绝对路径仍能运行，所以不是安全边界。gh、git、lark-cli 不能禁止。", "Command names that fail when an Executor Session calls them, such as a CLI signed in to your own account. Only calls by name fail; an absolute path still runs, so this is not a security boundary. gh, git and lark-cli cannot be blocked."],
	blockedCommandsNone: ["以空格分隔；没有", "Separated by spaces; none"],
	environmentIntro: ["执行器和各来源向执行环境登记变量，每个有键、值和说明。准备命令以环境变量读取它们，执行器 Session 在指令里读到它们和说明。工单自己的值来自它的目录和接下它的触发，其余是部署的当前值；不含任何密钥。只能在管理页修改。", "The Executor and the Sources register variables with the execution environment, each with a key, a value and a description. The prepare command reads them as environment variables, and the Executor Session reads them with their descriptions in its instructions. A Ticket's own values follow from its directory and the Trigger that started it; the others are the deployment's current values. None holds a credential. Only the management page can change these settings."],
	environmentVariables: ["可用的环境变量", "Available variables"],
	environmentPick: ["点击键名插入到准备命令。", "Choose a key to insert it into the prepare command."],
	environmentKey: ["键", "Key"],
	environmentDescription: ["说明", "Description"],
	environmentOwner: ["注册者", "Registered by"],
	executorRunning: ["执行器运行中", "Executor running"],
	pauseProcessing: ["暂停处理", "Pause processing"],
	pauseProcessingConfirm: ["暂停后，来源继续记录触发，但不开始新的评估、不派工、不发送回复，直到恢复。", "While paused, Sources keep recording Triggers, but no Evals or Assignments start and no replies are sent until processing resumes."],
	processingPaused: ["处理已暂停", "Processing paused"],
	"ticketFilter.open": ["进行中", "Open"],
	"ticketFilter.person": ["待处理", "Pending"],
	"ticketFilter.working": ["执行中", "Working"],
	"ticketFilter.idle": ["等待新触发", "Waiting for a Trigger"],
	"ticketFilter.ended": ["已结束", "Ended"],
	policyVersionUnrecorded: ["最近的保存记录里没有策略版本 {version}：它来自更早的保存、首次启动时的设置或更早的数据。", "The recent saves do not include Policy version {version}: an older save, the settings at the first start, or older data made it."],
	defaultModel: ["DSH 当前默认：{model}", "DSH default: {model}"],
	defaultModelUnavailable: ["DSH 默认模型暂不可用", "DSH default model unavailable"],
	modelProvider: ["服务商", "Provider"],
	modelName: ["模型", "Model"],
	modelEffort: ["推理强度（可选）", "Reasoning effort (optional)"],
	modelInherit: ["继承 DSH 默认值", "Inherit the DSH default"],
	modelEffortDefault: ["模型默认", "Model default"],
	modelCatalogError: ["无法加载模型建议，仍可填写已知的服务商和模型：{error}", "Model suggestions are unavailable; known Provider and Model names still work: {error}"],
	historyIntro: ["每次保存记一条；改变策略版本的保存（接单规则、各来源上的策略、接单模式）通知进行中的工单。", "Each save is one entry; saves that change the Policy version (rules, the Policy on each Source, accept mode) notify open Tickets."],
	historyItem: ["第 {revision} 次保存 · {source}", "Save {revision} · {source}"],
	historyPolicyChanged: ["生成策略版本 {version}", "New Policy version {version}"],
	historyNoBaseline: ["上一个设置版本没有记录，无法比较。", "The previous revision was not recorded; nothing to compare."],
	historyNoChanges: ["当前设置项没有变化。", "No change to current settings."],
	historyNotified: ["因策略变更通知了 {count} 个进行中的工单：{titles}", "Policy change notified {count} open Tickets: {titles}"],
	historyEmpty: ["还没有记录的版本；下次保存后开始记录。", "No revisions recorded yet; history starts with the next save."],
	"change.mode": ["接单模式：{from} → {to}", "Accept mode: {from} → {to}"],
	"change.timeout": ["评估时限：{from} → {to} 秒", "Eval time limit: {from} → {to} s"],
	"change.ruleAdded": ["新增规则：{name}", "Rule added: {name}"],
	"change.ruleRenamed": ["规则改名：{from} → {to}", "Rule renamed: {from} → {to}"],
	"change.ruleInstruction": ["规则条件修改：{name}", "Rule condition changed: {name}"],
	"change.ruleEnabled": ["规则启用：{name}", "Rule enabled: {name}"],
	"change.ruleDisabled": ["规则停用：{name}", "Rule disabled: {name}"],
	"change.ruleRemoved": ["删除规则：{name}", "Rule removed: {name}"],
	"change.paused": ["暂停处理", "Processing paused"],
	"change.resumed": ["恢复处理", "Processing resumed"],
	"change.maxWorkers": ["并行工单数：{from} → {to}", "Concurrent Tickets: {from} → {to}"],
	"change.executionDirectory": ["执行目录的根目录：{from} → {to}", "Ticket directory root: {from} → {to}"],
	"change.prepareCommand": ["准备命令", "Prepare command"],
	"change.blockedCommands": ["禁止调用的命令：{from} → {to}", "Blocked commands: {from} → {to}"],
	configHistory: ["配置历史", "Configuration history"],
	"change.evalModel": ["研判模型", "Assessor model"],
	"change.executorModel": ["执行器模型", "Executor model"],
	"change.sourceEnabled": ["启用来源：{source}", "Source enabled: {source}"],
	"change.sourceDisabled": ["停用来源：{source}", "Source disabled: {source}"],
	"change.sourceAdmission": ["{source} · 准入修改", "{source} · admission changed"],
	"change.sourceField": ["{source} · {field}：{from} → {to}", "{source} · {field}: {from} → {to}"],
	"change.sourceRowsAdded": ["{source} · {field} 新增：{items}", "{source} · {field} added: {items}"],
	"change.sourceRowsRemoved": ["{source} · {field} 移除：{items}", "{source} · {field} removed: {items}"],
	"change.sourceRowsChanged": ["{source} · {field} 修改：{items}", "{source} · {field} changed: {items}"],
	draftRestored: ["未保存 · 已恢复草稿", "Unsaved · draft restored"],
	draftKept: ["未保存 · 草稿已保留", "Unsaved · draft kept"],
	draftFailed: ["无法保留草稿，请保存后再离开：{error}", "Could not keep the draft; save before leaving: {error}"],
	save: ["保存", "Save"],
	discard: ["放弃修改", "Discard changes"],
	saveConflict: ["设置已在别处修改，其中有你也改过的项；保存会以你的修改为准。", "Settings changed elsewhere, including items you changed too; saving keeps your version of them."],
	saveMerged: ["设置已在别处修改，你的修改已合并到最新版本；请检查后保存。", "Settings changed elsewhere; your changes are merged onto the latest version. Check them, then save."],
	saveRebasing: ["已在别处修改，正在读取最新版本…", "Changed elsewhere; reading the latest version…"],
	invalidSettings: ["这些字段无效：{fields}", "Invalid fields: {fields}"],
	"settingsGroup.source": ["来源", "Sources"],
	"settingsGroup.eval": ["评估", "Eval"],
	"settingsGroup.execution": ["执行", "Execution"],
	"settingsGroup.prompts": ["提示词", "Prompts"],
	"settingsGroup.deployment": ["部署", "Deployment"],
	unsetValue: ["未设置", "not set"],
	promptChanges: ["{count} 处修改", "{count} changes"],
	unsaved: ["未保存", "Unsaved"],
	promptsDraftVersion: ["未保存 · 基于版本 {revision}", "Unsaved · based on version {revision}"],
	"promptPart.runtime/admission": ["主 Session 接单约束", "Main Session accept constraints"],
	"promptPart.runtime/policy": ["策略与启用的规则", "Policy and enabled rules"],
	"promptPart.runtime/handoff/orchestrator": ["工单交付与人工确认（主 Session）", "Ticket handoff and human confirmation (main Session)"],
	"promptPart.runtime/handoff/worker": ["工单交付与人工确认（执行器）", "Ticket handoff and human confirmation (Executor)"],
	"promptPart.runtime/policy/none": ["策略（没有启用的规则时）", "Policy (when no rule is enabled)"],
	"promptPart.skill/feishu": ["飞书技能", "Feishu skill"],
	"promptPart.skill/github": ["GitHub 技能", "GitHub skill"],
	"promptPart.runtime/environment": ["执行环境", "Execution environment"],
	promptViewEdit: ["编辑", "Edit"],
	promptViewFull: ["完整提示词", "Full prompt"],
	promptViewHistory: ["历史", "History"],
	promptSections: ["提示词段落", "Prompt sections"],
	promptTeamGroup: ["团队约定", "Team agreements"],
	promptSkillsGroup: ["技能", "Skills"],
	"promptPartHint.communication": ["何时通知人、消息的写法、GitHub 首行声明、Review 的回复与 review bot", "When to notify people, how messages read, the GitHub first line, review replies and review bots"],
	"promptPartHint.scope": ["工单何时继续、何时暂停并交草稿", "When a Ticket goes on, and when it stops with a draft"],
	"promptPartHint.delivery": ["PR 证据、自动合并条件、提交作者", "PR evidence, the auto-merge condition, the commit author"],
	"promptReadBy.both": ["主 Session 和执行器 Session 都会读到。", "The main Session and Executor Sessions read it."],
	"promptReadBy.skill": ["Session 需要时按名字加载。", "Sessions load it by name when they need it."],
	"promptReadBy.orchestrator": ["只有主 Session 会读到。", "Only the main Session reads it."],
	"promptReadBy.worker": ["只有执行器 Session 会读到。", "Only Executor Sessions read it."],
	promptBuiltInGroup: ["内置段落", "Built-in parts"],
	promptTemplateHint: ["这是模板：保留占位符 {placeholders}，由系统填入内容。", "A template: keep the placeholders {placeholders}, which the system fills in."],
	promptDefaultUpdated: ["默认内容已更新", "Default updated"],
	promptDefaultUpdatedHint: ["升级改了这一段的默认内容，你的文本保持不变。", "An upgrade changed the default of this part; your text stays as it is."],
	promptDefaultUpdatedKnown: ["下面是默认内容的变化。", "Below is how the default changed."],
	promptDefaultUpdatedUnknown: ["系统没有记录你编辑时的默认内容；下面是你的文本与新默认内容的对比。", "The default you edited from was not recorded; below, your text against the new default."],
	promptRemovedParts: ["当前插件版本已没有这些段落，你为它们写的文本不再使用，下次保存时移除：{parts}", "This version no longer has these parts; your text for them is unused and goes at the next save: {parts}"],
	promptKeepMine: ["保留我的文本", "Keep my text"],
	promptTakeDefault: ["改用新的默认内容", "Use the new default"],
	promptFullState: ["共 {count} 段 · {chars} 字符 · {state}", "{count} sections · {chars} characters · {state}"],
	promptCopyAll: ["复制全文", "Copy all"],
	promptChanged: ["已改", "Changed"],
	promptCompare: ["比较对象", "Compare with"],
	promptCompareSaved: ["与已保存比较", "Against saved"],
	promptCompareDefault: ["与默认比较", "Against defaults"],
	promptBuiltInFolded: ["按当前设置生成，不参与比较。", "Generated from the current settings; not compared."],
	promptSameAsSaved: ["与已保存相同。", "Same as saved."],
	promptSameLines: ["… 相同的 {count} 行 …", "… {count} unchanged lines …"],
	copied: ["已复制", "Copied"],
	promptPartTeam: ["团队约定", "Team agreement"],
	promptPartFixed: ["内置", "Built in"],
	promptPartGenerated: ["内置 · 按当前设置生成", "Built in · from the current settings"],
	"promptPart.communication": ["沟通方式", "Communication"],
	"promptPart.scope": ["工单范围", "Ticket scope"],
	"promptPart.delivery": ["交付要求", "Delivery requirements"],
	"promptPart.legacy": ["早期版本的完整配置（载入后是内置文本加它的技能）", "A complete configuration of an earlier version (loading it gives the built-in text and its skills)"],
	"promptPart.runtime/shared": ["共享约定", "Shared rules"],
	"promptPart.runtime/orchestrator": ["主 Session 角色", "Main Session role"],
	"promptPart.runtime/worker": ["执行器角色", "Executor role"],
	"promptPart.runtime/subscriptions": ["订阅", "Subscriptions"],
	"promptPart.runtime/replies": ["回复与确认", "Replies and acknowledgements"],
	"promptPart.runtime/dispatch": ["路由", "Routing"],
	"promptPart.runtime/work": ["执行", "Execution"],
	promptViews: ["查看方式", "View"],
	promptBody: ["Markdown 正文", "Markdown"],
	promptResetSection: ["恢复此段默认内容", "Restore this section default"],
	promptPreviewTarget: ["预览目标", "Preview target"],
	promptPreviewDraft: ["未保存草稿", "unsaved draft"],
	promptPreviewSaved: ["版本 {revision}", "version {revision}"],
	promptEditSource: ["编辑此段", "Edit section"],
	promptHistoryHint: ["载入会替换整套草稿：三个团队段落和团队技能；保存后才生效。", "Loading replaces the whole draft: the three team sections and the team skills; nothing changes until you save."],
	promptHistoryItem: ["版本 {revision} · {time} · {source}", "Version {revision} · {time} · {source}"],
	promptHistoryInitial: ["初始版本", "initial"],
	promptHistoryChanged: ["修改段：{parts}", "Changed: {parts}"],
	promptHistoryNone: ["初始版本或无内容变化", "Initial version or no content change"],
	promptOlder: ["更早版本", "Older versions"],
	promptRestore: ["将这个版本载入草稿", "Load this version into the draft"],
	promptDefaults: ["将整套默认内容载入草稿", "Load all defaults into the draft"],
	promptDraftFromHistory: ["整套草稿来自历史版本 {revision}；保存将创建新版本", "Draft loaded from version {revision}; saving creates a new version"],
	promptDraftFromDefaults: ["整套草稿来自当前插件默认值", "Draft loaded from the current plugin defaults"],
	promptDraftSectionReset: ["已恢复此段默认内容：{part}", "Restored the default of: {part}"],
	promptAddSkill: ["添加自定义技能", "Add a custom skill"],
	promptSkillName: ["名称，例如 testing", "Name, e.g. testing"],
	promptAddSkillAction: ["添加到草稿", "Add to draft"],
	promptSkillNameInvalid: ["技能名称须唯一，仅使用小写字母、数字和连字符，以字母开头。", "Skill names must be unique, start with a letter, and use lowercase letters, digits and hyphens."],
	promptConflict: ["提示词已被修改到版本 {revision}。已保留你的草稿；请比较后重新保存。", "Prompts changed to version {revision}. Your draft is kept; compare and save again."],
	promptConflictParts: ["提示词已被修改到版本 {revision}，其中 {parts} 你也改过；保存会以你的版本为准。", "Prompts changed to version {revision}, including {parts}, which you changed too; saving keeps your version."],
	promptSavedPending: ["已保存；通知等待注入主 Session。", "Saved; the notice is waiting to reach the main Session."],
	promptSessions: ["Session 最近使用的版本", "Versions used by Sessions"],
	promptSessionItem: ["{session}：版本 {revision}", "{session}: version {revision}"],
	promptNoSessions: ["暂无模型请求", "No model requests yet"],
	"promptRole.orchestrator": ["主 Session", "Main Session"],
	"promptRole.worker": ["执行器 Session", "Executor Session"],
	deploymentIntro: ["这台机器上的 dsh-superagent 设置，存放在 DSH 配置文件的 dsh-superagent 条目里；保存后立即生效，不会重启 dsh-superagent。", "dsh-superagent's settings on this machine, kept in the dsh-superagent entry of the DSH configuration; a saved change applies at once, without restarting dsh-superagent."],
	deploymentUnavailable: ["dsh-superagent 启动完成后才能修改这些值。", "These values can be changed once dsh-superagent has started."],
	deploymentDerived: ["仓库与账号", "Repository and accounts"],
	deploymentDerivedHint: ["由来源设置里的仓库和 CLI 得出。", "Derived from the repository and the CLIs in the Source settings."],
	deploymentRepository: ["仓库", "Repository"],
	deploymentAgent: ["智能体账号", "Agent account"],
	deploymentFeishu: ["飞书机器人", "Feishu bot"],
	deploymentFeishuNone: ["未设置", "Not set"],
	deploymentAccountsWhere: ["账号在 dsh-superagent 面板的来源设置里修改。", "Accounts are changed in the Source settings of the dsh-superagent panel."],
	deploymentMachine: ["本机设置", "This machine"],
	deploymentStateDir: ["状态目录", "State directory"],
	deploymentStateDirHint: ["数据库、锁、执行器的命令和智能体的 git 配置所在目录，只能在 DSH 配置文件里修改。", "Holds the database, locks, the Executor's commands and the agent's git configuration; change it only in the DSH configuration file."],
	deploymentLimits: ["上限", "Limits"],
	deploymentLimitsHint: ["本机资源的上限：保存的提示词最长多少字，评估读取线程上下文时最多读几页、每次读取最多等多久。", "Resource limits on this machine: how long a saved prompt may be, and how many Thread pages Eval may read and how long one read may take."],
	deploymentPromptMaxChars: ["提示词配置的最大字符数", "Largest prompt configuration / characters"],
	deploymentContextPages: ["一次研判可读的线程页数", "Thread pages one Assessment may read"],
	deploymentContextTimeout: ["一次上下文读取的时限 / 毫秒", "Time limit of one context read / ms"],
	deploymentRefused: ["DSH 拒绝了这次修改：设置可能已在别处修改。放弃修改后可看到当前值。", "DSH refused the change; the settings may have changed elsewhere. Discard to see the current values."],
	deploymentNoForms: ["这个 DSH 版本不提供配置表单，这些值只能在 DSH 配置文件的 dsh-superagent 条目里修改。", "This DSH version has no configuration forms; change these values in the dsh-superagent entry of the DSH configuration file."],
	deploymentReadOnly: ["只有本机上的浏览器可以修改这些值。", "Only a browser on this machine can change these values."],
	setupCheck: ["重新检查", "Check again"],
	setupChecking: ["正在重新检查，dsh-superagent 正在重启", "Checking again; dsh-superagent is restarting"],
	setupCheckInterrupts: ["重新检查会重启 dsh-superagent：{count} 个进行中的派工会中断，并带恢复说明重新开始。", "Checking again restarts dsh-superagent: {count} running Assignments stop and start again with a recovery note."],
	"reason.not_human": ["自动消息", "Automated message"],
	"reason.not_a_member": ["发送者不在这个来源的名单里", "Sender is not on this Source's list"],
	"reason.no_mention": ["没有点名智能体，且这个来源不接收其余消息", "Does not address the agent, and this Source does not receive the rest"],
	"reason.admission_ignored": ["准入设为忽略", "Admission set to ignore"],
	"reason.chat_not_allowed": ["群不在监听的群里", "Chat is not a listened chat"],
	"reason.direct_messages_not_allowed": ["私聊未开放", "Direct messages are off"],
	"reason.observation_only": ["仅观察的群（旧版过滤）", "Observe-only chat (legacy filter)"],
	"reason.untracked_source": ["线程未被订阅", "Thread not subscribed"],
	"reason.issue_assigned": ["Issue 已有负责人", "Issue has an assignee"],
	"reason.issue_closed": ["Issue 已关闭", "Issue is closed"],
	"reason.issue_has_pull_request": ["Issue 已有关联 PR", "Issue has a linked PR"],
	"reason.issue_unclaimed_less_than_day": ["Issue 无人认领未满一天", "Issue unclaimed for less than a day"],
	"reason.task_ended": ["工单已结束", "Ticket ended"],
	"reason.task_paused": ["工单已暂停", "Ticket paused"],
	"reason.subscription_inactive": ["订阅未生效", "Subscription inactive"],
	"reason.subscription_removed": ["订阅已移除", "Subscription removed"],
	"reason.issue_awaiting_eligibility": ["等待 Issue 满足资格", "Waiting for Issue eligibility"],
	"reason.timeout": ["评估超时未决定", "Eval timed out"],
	"reason.policyChanged": ["评估期间策略已变更", "Policy changed during the Eval"],
	"reason.noAdmissible": ["没有可准入的触发", "No admissible Trigger"],
	"reason.startedTicket": ["已经开过工单 {ticket}", "Already started Ticket {ticket}"],
	"reason.acceptedBefore": ["触发 {trigger} 之前已接单", "Trigger {trigger} was accepted before"],
	"reason.routed": ["已转给工单 {ticket}", "Routed to Ticket {ticket}"],
	"reason.stopUnknown": ["要停止的工单不存在或已结束", "The Ticket to stop is unknown or ended"],
	"reason.stopNotExplicit": ["停止需要名单里的人明确要求", "Stopping needs an explicit request from someone on the list"],
	"reason.directionUnsettled": ["实现意图或目标未确定，或还要产品或设计决定", "Intent or target not settled, or a product or design decision is still open"],
	"reason.noRuleMatched": ["没有启用的准入规则匹配", "No enabled admission rule matched"],
	"reason.ignoredFromCard": ["仅凭候选卡片忽略，未经规则研判", "Ignored from its card, without a rule assessment"],
	"reason.observed": ["观察模式：本会接单（{text}）", "Observe mode: would accept ({text})"],
	"reason.explicitRouted": ["名单里的人明确请求，由主 Session 接单", "Explicit request from someone on the list, accepted by the main Session"],
	"reason.legacyImport": ["从旧版工单记录导入", "Imported from a legacy Ticket record"],
	"reason.channelGone": ["对话已无法接收消息", "The conversation can no longer receive messages"],
	"reason.channelIgnored": ["来源已不再监听这个对话", "The Source no longer listens to this conversation"],
	"reason.hostRestarted": ["dsh-superagent 重启", "dsh-superagent restarted"],
	"reason.retried": ["人工重试", "Retried by a person"],
	"reason.completed": ["已完成", "Completed"],
	"reason.dropped": ["无需处理，已关闭", "No action needed; closed"],
	"reason.merged": ["PR 已合并", "PR merged"],
	"reason.closed": ["PR 已关闭", "PR closed"],
	"reason.stopped": ["人工停止", "Stopped by a human"],
	"reason.revoked": ["授权已失效", "Mandate no longer valid"],
	"reason.humanStop": ["有人要求停止", "Someone asked to stop"],
	"reason.forwarded": ["已扇出给该线程的工单", "Fanned out to the Thread's Ticket"],
	"reason.senderNotMember": ["发送者不在这个来源的名单里", "Sender is not on this Source's list"],
	"reason.source_disabled": ["来源已停用", "Source disabled"],
	"reason.issue_sender_or_admission_disabled": ["Issue 发起人不在名单或主动接单已关闭", "Issue sender not on the list, or proactive accept off"],
	"reason.source_not_installed": ["来源插件未加载", "Source plugin not loaded"],
	"reason.issue_unclaimed_less_than_wait": ["Issue 无人认领未满等待时长", "Issue unclaimed for less than the wait"],
	glossary: ["术语表", "Glossary"],
	glossaryIntro: ["界面只显示一种语言；文档、代码和工具使用英文术语。", "The interface shows one language; documents, code and tools use the English terms."],
	glossaryChinese: ["中文", "中文"],
	glossaryEnglish: ["English", "English"],
	glossaryMeaning: ["含义", "Meaning"],
	"term.source": ["来源", "Source"],
	"term.trigger": ["触发", "Trigger"],
	"term.thread": ["线程", "Thread"],
	"term.correlation": ["关联", "Correlation"],
	"term.channel": ["渠道", "Channel"],
	"term.policy": ["策略", "Policy"],
	"term.eval": ["评估", "Eval"],
	"term.gate": ["准入", "Gate"],
	"term.assessment": ["研判", "Assessment"],
	"term.decision": ["决定", "Decision"],
	"term.mandate": ["授权", "Mandate"],
	"term.ticket": ["工单", "Ticket"],
	"term.assignment": ["派工", "Assignment"],
	"term.subscription": ["订阅", "Subscription"],
	"term.fanout": ["扇出", "Fan-out"],
	"term.executor": ["执行器", "Executor"],
	"term.report": ["报告", "Report"],
	"term.attention": ["待人工决定", "Attention"],
	"term.disposition": ["去向", "Disposition"],
	"term.input": ["输入", "Input"],
	"term.scope": ["范围", "Scope"],
	"term.strength": ["强度", "Strength"],
	"term.agent": ["智能体", "Agent"],
	"term.mainSession": ["主 Session", "Main Session"],
	"term.executorSession": ["执行器 Session", "Executor Session"],
	"term.policyVersion": ["策略版本", "Policy version"],
	"meaning.agent": ["以 dsh-superagent 身份工作的虚拟同事：通过 GitHub 账号、飞书机器人等身份在来源上行动", "The virtual colleague dsh-superagent runs: it acts on the Sources through its identities, such as a GitHub account or a Feishu bot"],
	"meaning.mainSession": ["评估触发、接单派工并回复的 DSH Session；提示词里称 orchestrator", "The DSH Session that evaluates Triggers, accepts and dispatches work, and replies; prompts call it the orchestrator"],
	"meaning.executorSession": ["执行器为一个工单运行的 DSH Session；提示词里称 worker", "The DSH Session the Executor runs for one Ticket; prompts call it the worker"],
	"meaning.policyVersion": ["接单规则、各来源上的策略和接单模式的一个组合的标识；每个工单记下接单时的版本", "The identifier of one combination of rules, the Policy on each Source and accept mode; each Ticket records the version it was accepted under"],
	"glossaryGroup.roles": ["角色", "Roles"],
	"meaning.source": ["产生触发的事件流；由插件提供的类型加一份配置（是否运行、监听什么）", "An event stream that produces Triggers; a plugin-provided kind plus one configuration (whether it runs, what it listens to)"],
	"meaning.trigger": ["来源产生的单个不可变事件", "One immutable event produced by a Source"],
	"meaning.thread": ["按时间排列的触发；同一时间只有一个评估", "Triggers in time order; one Eval at a time"],
	"meaning.correlation": ["一个触发同属多个线程时线程之间的关系，只用来补充上下文", "Relation between Threads that share a Trigger; context only"],
	"meaning.channel": ["线程的只写端，用于回复", "The write-only side of a Thread, for replies"],
	"meaning.policy": ["版本化的接单规则和各来源上的名单；决定谁能发起工作、接什么", "Versioned rules and each Source's list; decides who may originate work and what is accepted"],
	"meaning.eval": ["对一批触发做出决定的过程", "The process that turns a batch of Triggers into a Decision"],
	"meaning.gate": ["评估的第一层：谁能发起工作、强度多少", "First Eval layer: who may originate work, and how strongly"],
	"meaning.assessment": ["评估中的模型语义判断", "Eval step where the model judges meaning"],
	"meaning.decision": ["评估的结果", "The result of an Eval"],
	"meaning.mandate": ["接单时产出的授权：强度、范围、依据的策略版本", "Authorization produced by accept: strength, scope and Policy version"],
	"meaning.ticket": ["被授权的工作单位", "An authorized unit of work"],
	"meaning.assignment": ["工单与一个执行器 Session 的绑定", "Binding of a Ticket to one Executor Session"],
	"meaning.subscription": ["工单与线程的关系；主 Session 只在消息明确指向某个工单时才把线程关联给它，执行器可以退订与本工单无关的线程", "Relation between a Ticket and a Thread; the main Session attaches a Thread only when its message points at the Ticket, and the Executor can drop a Thread unrelated to its Ticket"],
	"meaning.fanout": ["订阅线程上的触发作为上下文送达工单，不带授权", "Triggers on a subscribed Thread reach the Ticket as context, without authority"],
	"meaning.executor": ["执行派工的一方：每个工单一个执行器 Session 和执行目录", "What runs Assignments: one Executor Session and directory per Ticket"],
	"meaning.report": ["派工向工单回报的状态", "State an Assignment reports to its Ticket"],
	"meaning.attention": ["工单上等待人回答的问题", "A question on a Ticket waiting for a human"],
	"meaning.disposition": ["一个触发被过滤、评估、扇出的记录", "Where a Trigger went: filtered, evaluated, fanned out"],
	"meaning.input": ["送达工单的上下文（扇出的触发、策略变更、恢复、文本）", "Context delivered to a Ticket (fanned-out Triggers, Policy changes, resumes, text)"],
	"meaning.scope": ["授权允许的工作范围", "The work a Mandate allows"],
	"meaning.strength": ["授权与评估的依据强度", "How strong the grounds of a Mandate or Eval are"],
	legendTitle: ["状态颜色", "Status colors"],
	"legend.done": ["完成、就绪或已接单", "Done, ready or accepted"],
	"legend.ongoing": ["执行中或评估中", "Running or evaluating"],
	"legend.warning": ["等待、受阻或需要人", "Waiting, blocked or needs a person"],
	"legend.error": ["失败或异常", "Failed or failing"],
	"legend.idle": ["已结束、已停用或无后续", "Ended, disabled or no follow-up"],
	"term.environment": ["执行环境", "Execution environment"],
	"meaning.environment": ["每个工单的执行器 Session 和准备命令运行的环境：执行器和各来源登记的变量，每个有键、值和说明", "Where a Ticket's Executor Session and prepare command run: the variables the Executor and the Sources register, each with a key, a value and a description"],
	"userError.unknownTicket": ["找不到这个工单。", USER_ERRORS.unknownTicket[1]],
	"userError.unknownProblem": ["找不到这个未完成的评估。", USER_ERRORS.unknownProblem[1]],
	"userError.unknownTrigger": ["找不到这个触发。", USER_ERRORS.unknownTrigger[1]],
	"userError.unknownAssignment": ["找不到这个派工。", USER_ERRORS.unknownAssignment[1]],
	"userError.unknownBlock": ["没有这个设置块：{block}", USER_ERRORS.unknownBlock[1]],
	"userError.unknownPromptRevision": ["没有提示词版本 {revision}。", USER_ERRORS.unknownPromptRevision[1]],
	"userError.unknownPromptPart": ["没有内置提示词段落 {part}。", USER_ERRORS.unknownPromptPart[1]],
	"userError.ticketEnded": ["工单已结束。", USER_ERRORS.ticketEnded[1]],
	"userError.assignmentEnded": ["这个派工已结束，工单已由较新的派工接手。", USER_ERRORS.assignmentEnded[1]],
	"userError.evalFinished": ["评估 {eval} 已结束，或已被之后的评估取代；请对这个触发当前的评估做决定。", USER_ERRORS.evalFinished[1]],
	"userError.notAdmissible": ["这个触发未通过准入：{reason}", USER_ERRORS.notAdmissible[1]],
	"userError.notExplicit": ["通过 orchestrator_route 接单只用于名单内发送者的明确请求；主动接单的候选请用 orchestrator_eval 和 orchestrator_eval_decide 研判。", USER_ERRORS.notExplicit[1]],
	"userError.ticketStopped": ["有人停止了这个工单；新工作需要通过 orchestrator_route 接单。", USER_ERRORS.ticketStopped[1]],
	"userError.mandateRevoked": ["按当前策略，这个工单的授权已失效；新工作需要通过 orchestrator_route 接单。", USER_ERRORS.mandateRevoked[1]],
	"userError.notRetryable": ["只有进行中的工单可以重试，而且仅当执行器最近一次报告为失败或受阻且此后没有人发过消息，或者向执行器送达输入失败时才可以。", USER_ERRORS.notRetryable[1]],
	"userError.sourceThread": ["这是工单开始时所在的线程，会保持订阅。", USER_ERRORS.sourceThread[1]],
	"userError.followedThread": ["这是工单自己的线程，例如它的 PR，会保持订阅。", USER_ERRORS.followedThread[1]],
	"userError.notFollowing": ["这个工单没有订阅那个线程。", USER_ERRORS.notFollowing[1]],
	"userError.questionWithResult": ["给人的问题不能同时是就绪的结果或回答，请分开报告。", USER_ERRORS.questionWithResult[1]],
	"userError.askerWithoutQuestion": ["提出问题的消息需要附上它提出的问题。", USER_ERRORS.askerWithoutQuestion[1]],
	"userError.notAsker": ["问题必须指明提出它的那条人发的消息，且那条消息已送达这个工单。", USER_ERRORS.notAsker[1]],
	"userError.notAnswerable": ["回答必须指明它所回答的、由人提出的问题，且这个问题已送达这个工单。", USER_ERRORS.notAnswerable[1]],
	"userError.ackEnded": ["工单已结束，不要确认过去的请求。", USER_ERRORS.ackEnded[1]],
	"userError.notReached": ["这个触发不属于这个执行器。", USER_ERRORS.notReached[1]],
	"userError.handedBack": ["这个工单已经交回过这个触发。", USER_ERRORS.handedBack[1]],
	"userError.handedBackHere": ["这个工单的执行器已把这个触发交回，认为它超出本工单的范围：请把它作为新工作接单、关联到另一个工单，或忽略它。", USER_ERRORS.handedBackHere[1]],
	"userError.workerDecides": ["这条消息已通过所在线程送达工单 {tickets}：由工单的执行器判断它是否属于这个工单，不属于的会被交回，之后作为候选到达。只有停止例外，用 orchestrator_route 并把 kind 设为 stop。", USER_ERRORS.workerDecides[1]],
	"userError.ackNoChannel": ["确认需要一条已派给这个执行器、由人发出的原始消息。", USER_ERRORS.ackNoChannel[1]],
	"userError.ackNotPerson": ["请使用最初那条人发的触发，而不是机器人、CI 或执行器的报告。", USER_ERRORS.ackNotPerson[1]],
	"userError.notReady": ["工单还不能交付。进展只在内部保留，等待经过验证的就绪报告；不要把进展当作回答，也不要通过其他渠道发送。", USER_ERRORS.notReady[1]],
	"userError.notAttention": ["待人工决定的消息需要在 human_action 中写明工单当前待人工决定的问题。日常未完成的工作只在内部保留。", USER_ERRORS.notAttention[1]],
	"userError.notQuestion": ["回答必须针对最初由人提出的问题，而不是执行器报告或自动触发。", USER_ERRORS.notQuestion[1]],
	"userError.noAnswer": ["执行器还没有回答这条人发的触发。请等待执行器的报告，或用 orchestrator_ticket_request_status 请求一份（它只对处于等待状态的执行器起作用）；普通进展不能当作回答。", USER_ERRORS.noAnswer[1]],
	"userError.noChannel": ["这个工单或触发没有可以回复的渠道。", USER_ERRORS.noChannel[1]],
	"userError.panelOnlyEnvironment": ["执行环境（执行目录、准备命令、禁止调用的命令）只能在管理页修改。", USER_ERRORS.panelOnlyEnvironment[1]],
	"userError.panelOnlyAccounts": ["部署检查读取的来源字段（例如账号 CLI）只能在管理页修改。", USER_ERRORS.panelOnlyAccounts[1]],
	"userError.setupComplete": ["部署检查已通过。", USER_ERRORS.setupComplete[1]],
	"userError.modelUnavailable": ["{block} 的模型不可用：{error}", USER_ERRORS.modelUnavailable[1]],
	"userError.promptTooLong": ["提示词配置超过 {limit} 个字符。", USER_ERRORS.promptTooLong[1]],
	"userError.promptPlaceholders": ["「{part}」的模板必须保留占位符 {placeholders}，由系统填入内容。", USER_ERRORS.promptPlaceholders[1]],
	"userError.promptPartEmpty": ["「{part}」段落不能为空；要沿用内置文本，请恢复此段默认内容。", USER_ERRORS.promptPartEmpty[1]],
	"userError.sourceNotInstalled": ["{source} 来源的插件没有安装。", USER_ERRORS.sourceNotInstalled[1]],
	"userError.noLabels": ["这个来源没有可以刷新的名称。", USER_ERRORS.noLabels[1]],
	"userError.nothingToSync": ["{source} 来源上的策略没有指定从哪里同步，或者这个来源已关闭或在等待部署检查。", USER_ERRORS.nothingToSync[1]],
	"setup.repositoryUnset": ["GitHub 来源没有设置监听的仓库。", SETUP_PROBLEMS.repositoryUnset[1]],
	"setup.foreignFile": ["{file} 不是 dsh-superagent 写入的文件；移走它，或换一个状态目录。", SETUP_PROBLEMS.foreignFile[1]],
	"setup.gitTooOld": ["git 没有读取 dsh-superagent 为 github.com 写的凭据配置；需要 git 2.32 或更新版本。", SETUP_PROBLEMS.gitTooOld[1]],
	"setup.environmentFailed": ["准备智能体的运行环境失败。", SETUP_PROBLEMS.environmentFailed[1]],
	"setup.agentCliUnset": ["没有设置智能体的 GitHub CLI。", SETUP_PROBLEMS.agentCliUnset[1]],
	"setup.agentCliMissing": ["找不到智能体的 GitHub CLI。", SETUP_PROBLEMS.agentCliMissing[1]],
	"setup.agentCliSignedOut": ["智能体的 GitHub CLI 读不到它的账号。", SETUP_PROBLEMS.agentCliSignedOut[1]],
	"setup.agentCliNoAccount": ["智能体的 GitHub CLI 没有报告 GitHub 账号。", SETUP_PROBLEMS.agentCliNoAccount[1]],
	"setup.repositoryUnreadable": ["@{account} 读不到 {repository}。", SETUP_PROBLEMS.repositoryUnreadable[1]],
	"setup.repositoryUnreported": ["智能体的 GitHub CLI 没有返回 {repository}。", SETUP_PROBLEMS.repositoryUnreported[1]],
	"setup.repositoryReadOnly": ["@{account} 没有 {repository} 的推送权限。", SETUP_PROBLEMS.repositoryReadOnly[1]],
	"setup.feishuCliFailed": ["机器人的 lark-cli 不可用。", SETUP_PROBLEMS.feishuCliFailed[1]],
	"setup.feishuNoApp": ["机器人的 lark-cli 的 auth status 没有报告应用。", SETUP_PROBLEMS.feishuNoApp[1]],
	"setup.feishuBotNotReady": ["应用 {app} 的机器人身份状态是 {status}；用 lark-cli 配置应用密钥。", SETUP_PROBLEMS.feishuBotNotReady[1]],
	"setup.feishuUserIdentity": ["机器人的 lark-cli 允许用户身份（strict mode 为 {mode}）；按 docs/006-deployment.md 给机器人一份 strict mode 为 bot 的单独配置。", SETUP_PROBLEMS.feishuUserIdentity[1]],
	"setup.feishuNoBot": ["飞书机器人接口没有返回机器人的 open_id。", SETUP_PROBLEMS.feishuNoBot[1]],
	"healthCode.setupPending": ["等待部署检查", HEALTH_TEXT.setupPending],
	"healthCode.sourceOff": ["已关闭", HEALTH_TEXT.sourceOff],
	"healthCode.feishuCliUnset": ["来源已打开，还没有设置机器人的 lark-cli", HEALTH_TEXT.feishuCliUnset],
	"healthCode.feishuBotMissing": ["等待飞书机器人", HEALTH_TEXT.feishuBotMissing],
	"healthCode.pollFailures": ["连续 {count} 次轮询失败，最近一次：{error}", HEALTH_TEXT.pollFailures]
};
const language = (index) => Object.fromEntries(Object.entries(TEXT).map(([key, pair]) => [key, pair[index]]));
const zh = language(0);
const en = language(1);
/** Glossary terms grouped by stage flow after the acting roles; each key maps to `term.<key>` and `meaning.<key>`. */
const GLOSSARY = {
	roles: [
		"agent",
		"mainSession",
		"executorSession"
	],
	source: ["source", "channel"],
	trigger: [
		"trigger",
		"thread",
		"correlation",
		"subscription",
		"fanout",
		"disposition"
	],
	eval: [
		"policy",
		"policyVersion",
		"eval",
		"gate",
		"assessment",
		"decision",
		"mandate",
		"scope",
		"strength"
	],
	execution: [
		"executor",
		"environment",
		"ticket",
		"assignment",
		"input",
		"report",
		"attention"
	]
};
const GLOSSARY_VALUES = {
	decision: [
		"decision.accept",
		"decision.reopen",
		"decision.stop",
		"decision.ignore",
		"decision.unavailable"
	],
	strength: ["strength.explicit", "strength.inferred"],
	ticket: [
		"stage.answer",
		"stage.review",
		"stage.blocked",
		"stage.failed",
		"stage.delivery",
		"stage.queued",
		"stage.working",
		"stage.idle",
		"ticket.ended"
	],
	assignment: [
		"assignment.pending",
		"assignment.running",
		"assignment.ended"
	],
	report: [
		"report.progress",
		"report.waiting",
		"report.ready",
		"report.blocked",
		"report.failed",
		"report.dropped"
	]
};
//#endregion
//#region src/client/overview.tsx
function ProblemLine({ problem, onChanged }) {
	const { t, call, navigate } = usePanel();
	const post = useAction((request) => request(), { reload: onChanged });
	const row = (title, detail, route, hint, actions) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "dt-row dt-link dt-att dt-att-error",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-att-what",
					children: route ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-open dt-open-wrap",
						onClick: () => navigate(route),
						children: title
					}) : title
				}),
				detail,
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: hint }),
				actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-meta dt-row-buttons",
					children: actions
				})
			]
		})
	});
	const go = (label, route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "sm",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			name: "settings",
			size: 14
		}),
		onClick: () => navigate(route),
		children: label
	});
	const raw = (text) => text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "dt-error dt-clamp dt-mono",
		children: text
	});
	const worded = (text) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "dt-error",
		children: text
	});
	switch (problem.kind) {
		case "setup": return row(t(problem.place === "feishu" ? "problemSetupFeishu" : "problemSetup"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "dt-error",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupMessage, { problem })
		}), setupPage(problem.place), t(`problemSetupFix.${problem.place}`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckSetupButton, {}));
		case "no-source": return row(t("problemNoSource"), void 0, settingsRoute("source"), void 0, go(t("actionOpenSources"), settingsRoute("source")));
		case "no-allowed": return row(t("problemNoAllowed"), void 0, settingsRoute("eval"), void 0, go(t("actionAddAllowed"), settingsRoute("eval")));
		case "executor-paused": return row(t("problemPaused"), void 0, { page: "execution" }, void 0, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
			variant: "outline",
			icon: "play",
			label: t("resumeProcessing"),
			title: t("resumeProcessing"),
			message: t("resumeProcessingConfirm"),
			onConfirm: async () => {
				await call("POST executor/pause", { body: { paused: false } });
				await onChanged();
			}
		}));
		case "runtime-error": return row(t("problemRuntime", { name: valueLabel(t, "health", problem.name) }), raw(problem.detail), void 0);
		case "source-error": {
			const health = problem.source.health;
			return row(t("sourceError", { source: localized(t, problem.source.title) }), health.code ? worded(healthText(t, health)) : raw(health.detail), { page: "source" }, t("sourceErrorHint"));
		}
		case "eval-overdue": return row(t("problemEvalOverdue", { thread: readableMarkers(t, problem.thread.title) }), void 0, {
			page: "trigger",
			id: problem.thread.key
		});
		case "eval-unavailable": return row(t("problemEvalUnavailable", { thread: readableMarkers(t, problem.thread.title) }), raw(reasonLabel(t, problem.reason)), {
			page: "trigger",
			id: problem.thread.key,
			query: { trigger: problem.triggerId }
		}, void 0, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "sm",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: "refresh",
				size: 14
			}),
			disabled: post.busy,
			onClick: () => {
				post.run(() => call("POST triggers/:id/requeue", { id: problem.triggerId }));
			},
			children: t("requeue")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "sm",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: "dismiss",
				size: 14
			}),
			disabled: post.busy,
			onClick: () => {
				post.run(() => call("POST decisions/:id/dismiss", { id: problem.decisionId }));
			},
			children: t("dismiss")
		})] }));
		case "outgoing": return row(t("problemReply", {
			source: valueLabel(t, "source", problem.outgoing.channel.source),
			attempts: problem.outgoing.attempts
		}), raw(problem.outgoing.error), void 0);
	}
}
function OverviewPage() {
	const { t, call, navigate } = usePanel();
	const { setup } = usePanelData();
	const { data, error, reload } = usePoll(() => call("GET overview"), []);
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
		error,
		loading: true
	});
	const stat = (label, value, route) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "dt-stat",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-stat-label",
			children: label
		}), route ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "dt-textlink dt-stat-value",
			onClick: () => navigate(route),
			children: value
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-stat-value",
			children: value
		})]
	});
	const more = (route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "dt-textlink dt-more-link",
		onClick: () => navigate(route),
		children: t("details")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("pendingTickets"),
			count: data.person.length,
			children: data.person.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list dt-cards",
				children: data.person.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketLine, {
					ticket,
					question: true,
					onChanged: reload
				}, ticket.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("needsYouNone") })
		}),
		data.problems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("problems"),
			count: data.problems.length,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list dt-cards",
				children: data.problems.map((problem, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemLine, {
					problem,
					onChanged: reload
				}, index))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("lastDay"),
			action: more({
				page: "trigger",
				query: { filter: "recent" }
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-stats",
				children: [
					stat(t("flowReceivedLabel"), data.flow.received),
					stat(t("flowFilteredLabel"), data.flow.filtered, data.flow.filtered ? { page: "source" } : void 0),
					stat(t("flowJudgedLabel"), data.flow.judged),
					stat(t("flowAcceptedLabel"), data.flow.accepted, {
						page: "eval",
						query: { window: "24h" }
					}),
					data.flow.dropped > 0 && stat(t("flowDroppedLabel"), data.flow.dropped, { page: "source" })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("term.executor"),
			action: more({ page: "execution" }),
			children: setup?.problem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("executorWaitingSetup") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-stats",
				children: [
					stat(t("executingLabel"), `${data.executor.running} / ${data.executor.maxWorkers}`),
					stat(t("queuedLabel"), data.executor.queued),
					stat(t("idleLabel"), data.executor.idle)
				]
			})
		})
	] });
}
//#endregion
//#region src/client/deployment.tsx
/**
* Deployment settings view shared between the panel Settings tab and the DSH Plugin Manager config page.
* Edits host-level plugin configuration limits through DSH `ConfigForm` when writable.
*/
const MACHINE_LIMITS = [
	"promptMaxChars",
	"admissionContextMaxPages",
	"admissionContextTimeoutMs"
];
const text = (value) => typeof value === "string" || typeof value === "number" ? String(value) : "";
const limitsOf = (values) => Object.fromEntries(MACHINE_LIMITS.map((key) => [key, text(values?.[key])]));
/** Deployment configuration form; falls back to read-only display when DSH config forms are unavailable or read-only. */
function DeploymentPage({ setup, form, accounts: showAccounts }) {
	const { t, notify } = usePanel();
	const snapshot = form?.state;
	const editable = snapshot?.status === "ready" && snapshot.writable;
	const draft = useDraft({
		saved: limitsOf(editable ? snapshot.value : setup.machine),
		revision: editable ? snapshot.revision : void 0,
		reload: async () => {},
		save: async (value, revision, base) => {
			const ops = MACHINE_LIMITS.filter((key) => value[key].trim() !== base[key].trim()).map((key) => value[key].trim() ? {
				op: "set",
				path: [key],
				value: Number(value[key])
			} : {
				op: "unset",
				path: [key]
			});
			if (!form || !await form.mutate(ops, revision)) throw new Error(t("deploymentRefused"));
			notify(t("saved"));
			return {
				revision: revision + 1,
				restarting: false
			};
		}
	});
	const accounts = setup.accounts;
	const readOnlyHint = !form ? t("deploymentNoForms") : snapshot?.mode === "memory" ? t("deploymentReadOnly") : snapshot?.status === "loading" ? t("loading") : snapshot?.status === "unavailable" ? t("deploymentUnavailable") : !editable ? t("deploymentReadOnly") : void 0;
	const limit = (key, label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "number",
			min: LIMITS[key].min,
			max: LIMITS[key].max,
			step: 1,
			value: draft.value[key],
			disabled: !editable,
			onChange: (event) => draft.edit({
				...draft.value,
				[key]: event.target.value
			})
		})
	});
	const feishu = accounts?.feishu ? accounts.feishu.name || accounts.feishu.botId : setup.feishuProblem ? setupText(t, setup.feishuProblem) : t("deploymentFeishuNone");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "dt-form",
		onSubmit: (event) => {
			draft.submit(event);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, {
			disabled: draft.busy,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("deploymentIntro") }),
				setup.problem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-buttons",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dt-error",
						role: "status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupMessage, {
							problem: setup.problem,
							lead: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckSetupButton, {})]
				}),
				showAccounts && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("deploymentDerived"),
					hint: t("deploymentDerivedHint"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValues, { rows: [
						[t("deploymentRepository"), accounts?.repository ?? "—"],
						[t("deploymentAgent"), accounts ? `@${accounts.agent}` : "—"],
						[t("deploymentFeishu"), feishu]
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("deploymentAccountsWhere") })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("deploymentMachine"),
					children: [readOnlyHint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: readOnlyHint }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dt-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "dt-field-head",
							children: [t("deploymentStateDir"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: t("deploymentStateDirHint") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-mono",
							children: setup.machine.stateDir
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("deploymentLimits"),
					hint: t("deploymentLimitsHint"),
					children: [
						limit("promptMaxChars", t("deploymentPromptMaxChars")),
						limit("admissionContextMaxPages", t("deploymentContextPages")),
						limit("admissionContextTimeoutMs", t("deploymentContextTimeout"))
					]
				})
			]
		}), editable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
			...draft,
			onDiscard: draft.discard
		})]
	});
}
//#endregion
//#region src/client/prompt-config.ts
const isSkill = (name) => name.startsWith("skill/");
/** A built-in part, which the editor names `part/<key>`, apart from the team skills (`skill/<name>`). */
const isPart = (name) => name.startsWith("part/");
const partKey = (name) => name.slice(5);
const sections = (config) => [
	...Object.keys(config).filter((name) => name !== "skills" && name !== "overrides"),
	...Object.keys(config.skills).map((name) => `skill/${name}`),
	...Object.keys(config.overrides ?? {}).map((key) => `part/${key}`)
];
/** Returns a team section or team skill's text, a built-in part's override, or `undefined` for one the team did not write. */
const sectionText = (config, name) => isPart(name) ? config.overrides?.[partKey(name)]?.text : isSkill(name) ? config.skills[name.slice(6)] : name !== "skills" && name !== "overrides" && Object.hasOwn(config, name) ? config[name] : void 0;
/**
* A configuration with its overrides, none as an empty map, as the editor keeps it: a draft and the version it moves onto then
* merge override by override, as a host stores no overrides as none. With `parts`, only the overrides of those parts stay, as
* a version loaded from the history may override a part this version no longer has.
*/
const withOverrides = (config, parts) => ({
	...config,
	overrides: Object.fromEntries(Object.entries(config.overrides ?? {}).filter(([key]) => !parts || parts.some((part) => part.key === key)))
});
/** The text a built-in part reads with: the team's override, else its built-in text. */
const partText = (config, part) => config.overrides?.[part.key]?.text ?? part.text;
/**
* Override a built-in part with `text`: an override keeps the built-in text it was edited from, the current one when new or
* when `rebase`, and goes when its text is the built-in text again.
*/
function withOverride(config, part, text, rebase = false) {
	const { [part.key]: previous, ...others } = config.overrides ?? {};
	const base = rebase ? part.base : previous?.base ?? part.base;
	return {
		...config,
		overrides: text === void 0 || text === part.text ? others : {
			...others,
			[part.key]: {
				text,
				base
			}
		}
	};
}
function withSection(config, name, text) {
	return isSkill(name) ? {
		...config,
		skills: {
			...config.skills,
			[name.slice(6)]: text
		}
	} : {
		...config,
		[name]: text
	};
}
function withoutSkill(config, name) {
	const { [name.slice(6)]: _removed, ...skills } = config.skills;
	return {
		...config,
		skills
	};
}
/** The sections, skills and overrides of a draft that differ from the saved version; an override re-based counts too. */
const changedSections = (config, saved) => [.../* @__PURE__ */ new Set([...sections(config), ...sections(saved)])].filter((name) => isPart(name) ? JSON.stringify(config.overrides?.[partKey(name)]) !== JSON.stringify(saved.overrides?.[partKey(name)]) : sectionText(config, name) !== sectionText(saved, name));
const sectionLabel = (t, view, name) => isPart(name) ? valueLabel(t, "promptPart", partKey(name)) : isSkill(name) ? `${view.skillPrefix}${name.slice(6)}` : valueLabel(t, "promptPart", name);
const skillNameFree = (name, config, view) => new RegExp(view.skillName).test(name) && !Object.hasOwn(config.skills, name) && !view.builtin.includes(name);
/** Formats a team prompt part with its heading (omitted for skills, which have no heading). */
const partWith = (part, base) => part.heading === void 0 ? base : `${part.heading}\n${base}`;
/** Compute a line diff, folding runs of more than four unchanged lines to their boundary lines and a count. */
function lineDiff(before, after) {
	const a = before.split("\n"), b = after.split("\n");
	const lcs = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
	for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
	const lines = [];
	for (let i = 0, j = 0; i < a.length || j < b.length;) if (i < a.length && j < b.length && a[i] === b[j]) {
		lines.push({
			kind: "same",
			text: a[i]
		});
		i++;
		j++;
	} else if (j < b.length && (i === a.length || lcs[i][j + 1] >= lcs[i + 1][j])) lines.push({
		kind: "ins",
		text: b[j++]
	});
	else lines.push({
		kind: "del",
		text: a[i++]
	});
	const folded = [];
	for (let k = 0; k < lines.length;) {
		let end = k;
		while (end < lines.length && lines[end].kind === "same") end++;
		if (end - k > 4) folded.push(lines[k], {
			kind: "fold",
			count: end - k - 2
		}, lines[end - 1]);
		else folded.push(...lines.slice(k, Math.max(end, k + 1)));
		k = Math.max(end, k + 1);
	}
	return folded;
}
//#endregion
//#region src/client/prompts.tsx
/** Prompts settings group: section/skill editor, full composed prompt preview with diffing, and revision history. */
const originText = (t, view, from) => from === void 0 ? void 0 : from === "defaults" ? t("promptDraftFromDefaults") : "revision" in from ? t("promptDraftFromHistory", { revision: from.revision }) : t("promptDraftSectionReset", { part: sectionLabel(t, view, from.reset) });
function PromptsPage() {
	const { call } = usePanel();
	const [view, setView] = (0, import_react.useState)();
	const [error, setError] = (0, import_react.useState)();
	const reload = (0, import_react.useCallback)(async () => {
		setView(await call("GET prompts"));
	}, [call]);
	(0, import_react.useEffect)(() => {
		reload().catch(setError);
	}, [reload]);
	return view ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptsEditor, {
		view,
		reload
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
		loading: true,
		error
	});
}
function PromptsEditor({ view, reload }) {
	const { t, call, notify } = usePanel();
	const saved = withOverrides(view.current.config);
	const draft = useDraft({
		key: `dsh-superagent/prompts/${view.masterId}`,
		saved,
		revision: view.revision,
		reload,
		save: async (config, baseRevision) => {
			const result = await call("PUT prompts", { body: {
				config,
				baseRevision
			} });
			notify(t(result.context_delivery === "pending" ? "promptSavedPending" : "saved"));
			return result;
		}
	});
	const config = draft.value;
	const [tab, setTab] = (0, import_react.useState)("edit");
	const [selection, select] = (0, import_react.useState)(draft.meta?.selection ?? "communication");
	const selected = (isPart(selection) ? view.parts.some((part) => part.key === partKey(selection)) : sectionText(config, selection) !== void 0) ? selection : "communication";
	const changed = changedSections(config, saved);
	const edit = (next, note = {}) => draft.edit(next, {
		from: note.from ?? draft.meta?.from,
		selection: note.selection ?? selected
	});
	const open = (name) => {
		select(name);
		setTab("edit");
	};
	const words = {
		merged: (revision) => t("promptConflict", { revision }),
		conflict: (revision, paths) => t("promptConflictParts", {
			revision,
			parts: paths.map(([name, item]) => sectionLabel(t, view, item === void 0 ? name : name === "skills" ? `skill/${item}` : name === "overrides" ? `part/${item}` : name)).join(t("listSeparator"))
		}),
		editing: [
			t("promptsDraftVersion", { revision: draft.revision }),
			t("promptChanges", { count: changed.length }),
			originText(t, view, draft.meta?.from)
		].filter(Boolean).join(" · ")
	};
	const tabs = [
		{
			value: "edit",
			label: t("promptViewEdit")
		},
		{
			value: "full",
			label: t("promptViewFull")
		},
		{
			value: "history",
			label: t("promptViewHistory")
		}
	];
	const removed = view.defaultChanged.filter((item) => item.removed).map((item) => item.part);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dt-subtabs",
				role: "tablist",
				"aria-label": t("promptViews"),
				children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					className: "dt-subtab",
					"aria-selected": tab === item.value,
					onClick: () => setTab(item.value),
					children: item.label
				}, item.value))
			}),
			removed.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptRemovedParts", { parts: removed.join(t("listSeparator")) }) }),
			tab === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptSections, {
				config,
				view,
				changed,
				selected,
				onSelect: select,
				onEdit: edit
			}),
			tab === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullPrompt, {
				config,
				view,
				dirty: draft.dirty,
				revision: draft.revision,
				onEdit: open
			}),
			tab === "history" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptHistory, {
				view,
				from: draft.meta?.from,
				onLoad: (next, from) => edit(withOverrides(next, view.parts), { from })
			}, view.revision),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
				...draft,
				words,
				onSave: () => {
					draft.submit();
				},
				onDiscard: () => {
					draft.discard();
					reload().catch((failure) => notify(errorText(failure)));
				}
			})
		]
	});
}
function PromptSections({ config, view, changed, selected, onSelect, onEdit }) {
	const { t } = usePanel();
	const [name, setName] = (0, import_react.useState)("");
	const [invalid, setInvalid] = (0, import_react.useState)(false);
	const item = (section, children) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "dt-nav-item",
		"aria-current": section === selected ? "true" : void 0,
		onClick: () => onSelect(section),
		children
	}, section);
	const unsaved = (section) => changed.includes(section) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "dt-changed-dot",
		"aria-label": t("unsaved")
	});
	const add = (event) => {
		event.preventDefault();
		if (!skillNameFree(name.trim(), config, view)) {
			setInvalid(true);
			return;
		}
		const section = `skill/${name.trim()}`;
		setName("");
		onEdit(withSection(config, section, ""), { selection: section });
		onSelect(section);
	};
	const part = isPart(selected) ? view.parts.find((item) => item.key === partKey(selected)) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-prompt",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "dt-prompt-nav",
			"aria-label": t("promptSections"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-nav-group",
					children: t("promptTeamGroup")
				}),
				view.sections.map((section) => item(section, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					sectionLabel(t, view, section),
					config[section] !== view.defaults[section] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-changed-tag",
						children: t("promptChanged")
					}),
					unsaved(section)
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(`promptPartHint.${section}`) })] }))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-nav-group",
					children: t("promptBuiltInGroup")
				}),
				view.parts.map((entry) => item(`part/${entry.key}`, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					sectionLabel(t, view, `part/${entry.key}`),
					config.overrides?.[entry.key] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-changed-tag",
						children: t("promptChanged")
					}),
					updated(config, entry) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-changed-tag dt-updated-tag",
						children: t("promptDefaultUpdated")
					}),
					unsaved(`part/${entry.key}`)
				] }))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-nav-group",
					children: t("promptSkillsGroup")
				}),
				Object.keys(config.skills).map((skill) => item(`skill/${skill}`, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [sectionLabel(t, view, `skill/${skill}`), unsaved(`skill/${skill}`)] }))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "dt-add-skill",
					onSubmit: add,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							placeholder: t("promptSkillName"),
							"aria-label": t("promptAddSkill"),
							spellCheck: false,
							onChange: (event) => {
								setName(event.target.value);
								setInvalid(false);
							}
						}),
						invalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dt-error",
							role: "alert",
							children: t("promptSkillNameInvalid")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							type: "submit",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "plus" }),
							children: t("promptAddSkillAction")
						})
					]
				})
			]
		}), part ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuiltInEditor, {
			config,
			view,
			part,
			onEdit
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamEditor, {
			config,
			view,
			selected,
			onSelect,
			onEdit
		})]
	});
}
/** Whether an override was edited from a built-in text that has changed since. */
const updated = (config, part) => {
	const override = config.overrides?.[part.key];
	return !!override?.base && override.base !== part.base;
};
function TeamEditor({ config, view, selected, onSelect, onEdit }) {
	const { t } = usePanel();
	const text = sectionText(config, selected) ?? "";
	const fallback = sectionText(view.defaults, selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-prompt-main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-subhead",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "dt-section-title",
					children: sectionLabel(t, view, selected)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-actions",
					children: isSkill(selected) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "trash" }),
						onClick: () => {
							onEdit(withoutSkill(config, selected), { selection: "communication" });
							onSelect("communication");
						},
						children: t("remove")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "refresh" }),
						disabled: fallback === text,
						onClick: () => onEdit(withSection(config, selected, fallback ?? ""), { from: { reset: selected } }),
						children: t("promptResetSection")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t(isSkill(selected) ? "promptReadBy.skill" : "promptReadBy.both") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "dt-textarea dt-mono dt-editor",
				spellCheck: false,
				"aria-label": t("promptBody"),
				value: text,
				onChange: (event) => onEdit(withSection(config, selected, event.target.value))
			})
		]
	});
}
/**
* A built-in part: its text, the team's override or the built-in one, with a reset; a template says which placeholders it
* keeps; an override whose built-in text changed since shows the change and offers to keep the team's text or take the new one.
*/
function BuiltInEditor({ config, view, part, onEdit }) {
	const { t } = usePanel();
	const name = `part/${part.key}`;
	const reset = () => onEdit(withOverride(config, part, void 0), { from: { reset: name } });
	const base = config.overrides?.[part.key]?.base;
	const previous = view.defaultChanged.find((item) => item.part === part.key && item.base === base)?.previous;
	const readBy = part.key.startsWith("skill/") ? "promptReadBy.skill" : part.roles.length > 1 ? "promptReadBy.both" : `promptReadBy.${part.roles[0]}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-prompt-main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-subhead",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "dt-section-title",
					children: sectionLabel(t, view, name)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-actions",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "refresh" }),
						disabled: !config.overrides?.[part.key],
						onClick: reset,
						children: t("promptResetSection")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t(readBy) }),
			part.placeholders && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptTemplateHint", { placeholders: part.placeholders.join(t("listSeparator")) }) }),
			updated(config, part) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "dt-default-updated",
				"aria-label": t("promptDefaultUpdated"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("promptDefaultUpdated") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptDefaultUpdatedHint") }),
					previous !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptDefaultUpdatedKnown") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diff, { lines: lineDiff(previous, part.text) })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptDefaultUpdatedUnknown") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diff, { lines: lineDiff(partText(config, part), part.text) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "dt-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => onEdit(withOverride(config, part, partText(config, part), true)),
							children: t("promptKeepMine")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: reset,
							children: t("promptTakeDefault")
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "dt-textarea dt-mono dt-editor",
				spellCheck: false,
				"aria-label": t("promptBody"),
				value: partText(config, part),
				onChange: (event) => onEdit(withOverride(config, part, event.target.value))
			})
		]
	});
}
const KIND_LABEL = {
	team: "promptPartTeam",
	fixed: "promptPartFixed",
	generated: "promptPartGenerated"
};
function FullPrompt({ config, view, dirty, revision, onEdit }) {
	const { t, call, notify } = usePanel();
	const [target, setTarget] = (0, import_react.useState)("orchestrator");
	const [compare, setCompare] = (0, import_react.useState)(dirty ? "saved" : "default");
	const [preview, setPreview] = (0, import_react.useState)();
	const [error, setError] = (0, import_react.useState)();
	(0, import_react.useEffect)(() => {
		let active = true;
		call("POST prompts/preview", { body: config }).then((value) => {
			if (active) {
				setPreview({
					config,
					value
				});
				setError(void 0);
			}
		}, (failure) => {
			if (active) setError(failure);
		});
		return () => {
			active = false;
		};
	}, [call, config]);
	if (!preview || error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
		loading: true,
		error
	});
	const shown = dirty ? compare : "default";
	const team = isSkill(target) && Object.hasOwn(preview.config.skills, target.slice(6));
	const parts = isSkill(target) ? [{
		name: target,
		kind: team ? "team" : "fixed",
		...team ? {} : { key: target },
		text: preview.value.skills[target.slice(6)] ?? ""
	}] : preview.value.parts[target];
	const builtIn = (key) => view.parts.find((part) => part.key === key);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-subhead",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "dt-select dt-inline-select",
				"aria-label": t("promptPreviewTarget"),
				value: target,
				onChange: (event) => setTarget(event.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "orchestrator",
						children: valueLabel(t, "promptRole", "orchestrator")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "worker",
						children: valueLabel(t, "promptRole", "worker")
					}),
					Object.keys(preview.value.skills).map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: `skill/${name}`,
						children: sectionLabel(t, view, `skill/${name}`)
					}, name))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptFullState", {
				count: parts.length,
				chars: parts.reduce((sum, part) => sum + part.text.length, 0),
				state: dirty ? t("promptPreviewDraft") : t("promptPreviewSaved", { revision })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedControl, {
				className: "dt-segmented dt-compare",
				label: t("promptCompare"),
				value: shown,
				options: [...dirty ? [{
					value: "saved",
					label: t("promptCompareSaved")
				}] : [], {
					value: "default",
					label: t("promptCompareDefault")
				}],
				onChange: setCompare
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "copy" }),
				onClick: () => {
					navigator.clipboard.writeText(parts.map((part) => part.text).join("\n\n")).then(() => notify(t("copied")));
				},
				children: t("promptCopyAll")
			})
		]
	}), parts.map((part) => {
		const { kind } = part;
		const text = sectionText(preview.config, part.name) ?? "";
		const entry = part.key === void 0 ? void 0 : builtIn(part.key);
		const from = (config) => kind === "team" ? partWith(part, sectionText(config, part.name) ?? "") : kind === "fixed" && entry ? partText(config, entry) : void 0;
		const base = from(shown === "saved" ? view.current.config : view.defaults);
		const edited = kind === "team" ? !isSkill(part.name) && text !== sectionText(view.defaults, part.name) : !!entry && !!preview.config.overrides?.[entry.key];
		const template = kind === "generated" && !!entry && preview.config.overrides?.[entry.key]?.text !== view.current.config.overrides?.[entry.key]?.text;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dt-preview-part",
			"data-editable": kind === "team" || entry !== void 0 || void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-preview-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: sectionLabel(t, view, entry ? `part/${entry.key}` : part.name) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(KIND_LABEL[kind]) }),
					edited && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-changed-tag",
						children: t("promptChanged")
					}),
					(kind === "team" || entry) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-textlink",
						onClick: () => onEdit(entry ? `part/${entry.key}` : part.name),
						children: t("promptEditSource")
					})
				]
			}), base !== void 0 && base !== part.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diff, { lines: lineDiff(base, part.text) }) : shown === "saved" && !template ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t(kind === "generated" ? "promptBuiltInFolded" : "promptSameAsSaved") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "dt-pre",
				children: part.text
			})]
		}, part.name);
	})] });
}
function Diff({ lines }) {
	const { t } = usePanel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "dt-pre",
		children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: line.kind === "fold" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-diff-fold",
			children: t("promptSameLines", { count: line.count })
		}), "\n"] }) : line.kind === "ins" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ins", { children: `${line.text}\n` }) : line.kind === "del" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children: `${line.text}\n` }) : `${line.text}\n` }, index))
	});
}
function PromptHistory({ view, from, onLoad }) {
	const { t, call } = usePanel();
	const [older, setOlder] = (0, import_react.useState)();
	const next = older ? older.next_offset : view.next_offset;
	const more = useAction(async (offset) => {
		const page = await call("GET prompts", { query: { offset } });
		setOlder({
			revisions: [...older?.revisions ?? [], ...page.revisions],
			next_offset: page.next_offset
		});
	});
	const load = useAction(async (revision) => {
		onLoad((await call("GET prompts", { query: { revision } })).current.config, { revision });
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptHistoryHint") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list",
				children: [...view.revisions, ...older?.revisions ?? []].map((version) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "dt-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dt-row-main",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dt-row-title",
							children: t("promptHistoryItem", {
								revision: version.revision,
								time: version.savedAt ? when(version.savedAt, t("lang")) : t("promptHistoryInitial"),
								source: valueLabel(t, "historySource", version.source)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dt-row-meta",
							children: version.changed.length ? t("promptHistoryChanged", { parts: version.changed.map((name) => sectionLabel(t, view, name)).join(t("listSeparator")) }) : t("promptHistoryNone")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dt-row-actions",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "history" }),
							disabled: load.busy || typeof from === "object" && "revision" in from && from.revision === version.revision,
							onClick: () => {
								load.run(version.revision);
							},
							children: t("promptRestore")
						})
					})]
				}, version.revision))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-actions",
				children: [next !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "chevron-down" }),
					disabled: more.busy,
					onClick: () => {
						more.run(next);
					},
					children: t("promptOlder")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "refresh" }),
					onClick: () => onLoad(view.defaults, "defaults"),
					children: t("promptDefaults")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("promptSessions") }), view.sessions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "dt-changes dt-mono",
					children: view.sessions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("promptSessionItem", {
						session: item.sessionId,
						revision: item.revision
					}) }, item.sessionId))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("promptNoSessions") })]
			})
		]
	});
}
//#endregion
//#region src/client/source.tsx
/** Source status view (health, filtered Triggers, dropped replies) and Source settings cards. */
function SourceCard({ source }) {
	const { t, call } = usePanel();
	const { running } = usePanelData();
	const { reload } = useSettings();
	const [advancedOpen, setAdvancedOpen] = (0, import_react.useState)(false);
	const refreshLabels = async () => {
		const { added } = await call("POST sources/:id/labels", { id: source.id });
		await reload();
		return added;
	};
	const draft = useBlockDraft(`source:${source.id}`, source.value, source.revision);
	const value = draft.value;
	const { problem, value: saved } = source;
	const changed = (key) => String(value.config[key] ?? "") !== String(saved.config[key] ?? "");
	const restarts = draft.dirty && source.restarts.some(changed);
	const description = localized(t, source.description);
	const field = (spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceField, {
		field: spec,
		value: value.config[spec.key],
		saved: saved.config[spec.key],
		labels: source.labels,
		refreshLabels,
		fact: spec.type === "fact" || !changed(spec.key) ? source.facts[spec.key] : void 0,
		onChange: (next) => draft.edit({
			...value,
			config: {
				...value.config,
				[spec.key]: next
			}
		})
	}, spec.key);
	const advanced = source.fields.filter((spec) => spec.advanced);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: `dt-source-${source.id}`,
		className: "dt-card",
		onSubmit: (event) => {
			draft.submit(event);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, {
			disabled: draft.busy,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-card-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dt-row-main",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dt-row-title",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dt-card-title",
									children: localized(t, source.title)
								}),
								description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, { text: description }),
								!source.installed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
									tone: "warning",
									children: t("sourceNotInstalled")
								})
							]
						})
					}), source.installed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: value.enabled,
						onChange: (enabled) => draft.edit({
							...value,
							enabled
						}),
						label: t("sourceEnable", { name: localized(t, source.title) })
					})]
				}),
				problem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-buttons",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dt-error",
						role: "status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupMessage, {
							problem,
							lead: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckSetupButton, {})]
				}),
				!source.installed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("sourceNotInstalledHint") }),
				source.installed && source.fields.filter((spec) => !spec.advanced).map(field),
				source.installed && advanced.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "settings" }),
					title: t("advanced"),
					open: advancedOpen,
					onToggle: () => setAdvancedOpen(!advancedOpen),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dt-disclosure-body",
						children: advanced.map(field)
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
			...draft,
			status: restarts && running > 0 ? t("restartInterrupts", { count: running }) : void 0,
			onDiscard: draft.discard
		})]
	});
}
function SourceSettings({ focus }) {
	const { sources } = useSettings().settings;
	(0, import_react.useEffect)(() => {
		if (focus) document.getElementById(`dt-source-${focus}`)?.scrollIntoView?.({ block: "start" });
	}, [focus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-form",
		children: [sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceCard, { source }, source.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigHistory, { blocks: ["source:"] })]
	});
}
function DroppedReplies({ items }) {
	const { t, navigate } = usePanel();
	const [open, setOpen] = (0, import_react.useState)(false);
	const target = (item) => item.ticket ? {
		route: {
			page: "execution",
			id: item.ticket.id
		},
		name: item.ticket.title
	} : item.thread ? {
		route: {
			page: "trigger",
			id: item.thread
		},
		name: t("term.thread")
	} : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "dismiss" }),
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			t("sourceDroppedTitle"),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-count",
				children: items.length
			})
		] }),
		open,
		onToggle: () => setOpen(!open),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-disclosure-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("sourceDroppedHint") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list",
				children: items.map((item) => {
					const link = target(item);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "dt-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { state: "idle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dt-row-main",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dt-row-title dt-line",
								children: readableMarkers(t, item.preview) || t("empty")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dt-row-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
										tone: "neutral",
										children: reasonLabel(t, item.dropped.reason)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: item.dropped.at }),
									link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "dt-textlink",
										onClick: () => navigate(link.route),
										children: link.name
									})
								]
							})]
						})]
					}, item.id);
				})
			})]
		})
	});
}
function SourceRow({ source }) {
	const { t, navigate } = usePanel();
	const { setup } = usePanelData();
	const [filteredOpen, setFilteredOpen] = (0, import_react.useState)(false);
	const { problem, dropped } = source;
	const { dot, label: state } = sourceMark(t, source.state);
	const { received, filtered, lastAt } = source.stats;
	const notes = source.enabled && !problem && !setup?.problem ? source.health.filter((item) => item.state === "error" || item.state === "paused") : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "dt-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, {
			state: dot,
			label: state
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-row-name",
						children: localized(t, source.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dt-status-text",
						"data-state": dot,
						children: state
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-meta",
					children: [
						received > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
							label: t("sourceReceivedLabel"),
							value: received
						}),
						filtered > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
							label: t("sourceFilteredLabel"),
							value: filtered
						}),
						lastAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
							label: t("sourceLatestLabel"),
							value: when(lastAt, t("lang"))
						})
					]
				}),
				problem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "dt-error",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupMessage, {
							problem,
							lead: true
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dt-textlink",
							onClick: () => navigate(settingsRoute("source", { source: source.id })),
							children: t("sourceOpenSettings")
						})
					]
				}),
				notes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: item.state === "error" ? "dt-error dt-clamp" : "dt-hint dt-clamp",
					children: [
						valueLabel(t, "health", item.name),
						t("labelSeparator"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: item.code ? void 0 : "dt-mono",
							children: healthText(t, item)
						})
					]
				}, item.name)),
				source.filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "filter" }),
					title: t("sourceFilteredTitle"),
					open: filteredOpen,
					onToggle: () => setFilteredOpen(!filteredOpen),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dt-disclosure-body",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "dt-list",
							children: source.filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "dt-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { state: "idle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "dt-row-main",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "dt-row-title",
										children: [
											actorName(t, item.actor),
											t("labelSeparator"),
											readableMarkers(t, item.preview) || t("empty")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "dt-row-meta",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
											tone: "neutral",
											children: reasonLabel(t, item.reason)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: item.at })]
									})]
								})]
							}, item.id))
						})
					})
				}),
				dropped.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DroppedReplies, { items: dropped })
			]
		})]
	});
}
function SourceStatus() {
	const { t, call, navigate } = usePanel();
	const { setup } = usePanelData();
	const { data, error } = usePoll(() => call("GET sources"), []);
	const elsewhere = setup?.problem?.place === "deployment" ? setup.problem : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusHead, {
				hint: t("sourceStatusIntro"),
				settings: "source"
			}),
			elsewhere && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "dt-error",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupMessage, {
						problem: elsewhere,
						lead: true
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-textlink",
						onClick: () => navigate(setupPage(elsewhere.place)),
						children: t("setupFixLink")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
				error,
				loading: !data
			}),
			data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list",
				children: data.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceRow, { source }, source.id))
			})
		]
	});
}
//#endregion
//#region src/client/settings.tsx
const STAGE_GROUPS = [
	"source",
	"eval",
	"execution"
];
function SettingsPage({ group, query, state, deploymentForm }) {
	const { t, navigate } = usePanel();
	const content = (() => {
		switch (group) {
			case "source": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceSettings, { ...query.source ? { focus: query.source } : {} }) });
			case "eval": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvalSettings, { version: query.version }) });
			case "execution": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionSettings, {}) });
			case "prompts": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptsPage, {});
			case "deployment": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeploymentPage, {
				setup: state.setup,
				form: deploymentForm
			});
		}
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-settings",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "dt-settings-nav",
			"aria-label": t("tab.settings"),
			children: SETTINGS_GROUPS.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "dt-settings-link",
				"data-stage": STAGE_GROUPS.includes(value) || void 0,
				"aria-current": value === group ? "page" : void 0,
				onClick: () => navigate(settingsRoute(value), true),
				children: t(`settingsGroup.${value}`)
			}, value))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-settings-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "dt-settings-title",
				children: t(`settingsGroup.${group}`)
			}), content]
		})]
	});
}
//#endregion
//#region src/client/thread.tsx
/** Thread detail page: Trigger timeline with gap-free pagination, Decisions, subscribed Tickets, and correlated Threads. */
/** Disposition tags for a Trigger; omits `ignore` (the common case) and suppresses fanout tags when every target Ticket is already listed in `subscribed`. */
function triggerTags(t, trigger, subscribed) {
	const d = trigger.disposition;
	const tags = [];
	if (d.queued) tags.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone: "info",
		children: t("dispositionQueued")
	}, "q"));
	else if (d.evaluating) tags.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone: "info",
		children: t("dispositionEvaluating")
	}, "e"));
	else if (d.filtered) tags.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone: "neutral",
		children: t("tagFiltered", { reason: reasonLabel(t, d.filtered) })
	}, "f"));
	else if (d.decision && d.decision.outcome !== "ignore") {
		const { tone, label } = decisionMark(t, d.decision.outcome);
		tags.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
			tone,
			children: label
		}, "d"));
	}
	if (d.delivered) tags.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone: "info",
		title: t("dispositionDeliveredHint"),
		children: t("dispositionDelivered")
	}, "o"));
	else if (d.fanout.length && !(subscribed && d.fanout.every((id) => subscribed.has(id)))) tags.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		tone: "info",
		children: t("dispositionFanout", { count: d.fanout.length })
	}, "o"));
	return tags;
}
function TriggerItem({ trigger, earlier, target, subscribed, requeue }) {
	const { t, navigate } = usePanel();
	const ticketId = trigger.disposition.decision?.ticketId;
	const scroll = (element) => {
		if (element && target === trigger.id && !element.dataset.scrolled) {
			element.dataset.scrolled = "1";
			element.scrollIntoView?.({ block: "center" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		id: `trigger-${trigger.id}`,
		className: `dt-event${target === trigger.id ? " dt-highlight" : ""}${trigger.human ? "" : " dt-event-quiet"}`,
		ref: scroll,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-event-foot",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "dt-event-actor",
					children: actorName(t, trigger.actor)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: trigger.at })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClampText, { text: readableMarkers(t, trigger.text || trigger.preview) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earlier, { items: earlier }),
			trigger.disposition.handbacks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("handedBack", {
				ticket: item.title,
				reason: item.reason
			}) }, item.ticketId)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-event-foot",
				children: [
					triggerTags(t, trigger, subscribed),
					ticketId && !subscribed.has(ticketId) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dt-textlink dt-icon-link",
						onClick: () => navigate({
							page: "execution",
							id: ticketId
						}),
						children: t("openTicket")
					}),
					requeue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "dt-textlink dt-icon-link dt-reveal",
						disabled: requeue.busy,
						"aria-busy": requeue.busy,
						onClick: requeue.run,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "refresh",
							size: 13
						}), t("requeue")]
					})
				]
			})
		]
	});
}
const overlaps = (some, others) => some.some((item) => others.some((other) => other.id === item.id));
const byTime = (triggers) => [...new Map(triggers.map((item) => [item.id, item])).values()].sort((a, b) => a.at.localeCompare(b.at));
const gapBetween = (newest, older) => !!older && newest.earlier !== null && !overlaps(newest.timeline, older.triggers);
function mergeTimeline(newest, older) {
	if (!older || newest.earlier === null || gapBetween(newest, older)) return newest;
	return {
		...newest,
		timeline: byTime([...older.triggers, ...newest.timeline]),
		earlier: older.cursor
	};
}
const PAGE = 50;
/**
* Manage a Thread's timeline across live polling, deep-linked `target` Triggers, and manual pagination.
* Fills any gap between the latest polled page and older loaded pages before merging so the timeline remains contiguous.
*/
function useThreadTimeline(key, target) {
	const { call, notify } = usePanel();
	const [older, setOlder] = (0, import_react.useState)();
	const { data: newest, error, reload } = usePoll(() => call("GET threads/:key", {
		key,
		query: { limit: PAGE }
	}), [key]);
	const data = newest && mergeTimeline(newest, older);
	const read = (id) => !!newest?.timeline.some((item) => item.id === id) || !!older?.triggers.some((item) => item.id === id);
	const missing = !!target && !!newest && !read(target);
	(0, import_react.useEffect)(() => {
		if (!missing) return;
		let active = true;
		call("GET threads/:key", {
			key,
			query: {
				limit: PAGE,
				around: target
			}
		}).then((page) => {
			if (active) setOlder({
				triggers: page.timeline,
				cursor: page.earlier
			});
		}, (failure) => {
			if (active) notify(errorText(failure));
		});
		return () => {
			active = false;
		};
	}, [
		missing,
		call,
		key,
		target,
		notify
	]);
	const gap = !!newest && gapBetween(newest, older);
	(0, import_react.useEffect)(() => {
		if (!gap || !newest || !older) return;
		let active = true;
		const fill = async () => {
			let run = newest.timeline, cursor = newest.earlier;
			while (cursor !== null && !overlaps(run, older.triggers)) {
				const page = await call("GET threads/:key", {
					key,
					query: {
						limit: PAGE,
						before: cursor
					}
				});
				run = [...page.timeline, ...run];
				cursor = page.earlier;
			}
			if (active) setOlder({
				triggers: byTime([...older.triggers, ...run]),
				cursor: overlaps(run, older.triggers) ? older.cursor : cursor
			});
		};
		fill().catch((failure) => {
			if (active) notify(errorText(failure));
		});
		return () => {
			active = false;
		};
	}, [
		gap,
		newest,
		older,
		call,
		key,
		notify
	]);
	return {
		data,
		error,
		reload,
		earlier: useAction(async (shown) => {
			const page = await call("GET threads/:key", {
				key,
				query: {
					limit: PAGE,
					before: shown.earlier
				}
			});
			setOlder({
				triggers: [...page.timeline, ...shown.timeline],
				cursor: page.earlier
			});
		})
	};
}
function ThreadPage({ id, target }) {
	const { t, call, navigate, notify } = usePanel();
	const [decisionsOpen, setDecisionsOpen] = (0, import_react.useState)(false);
	const { data, error, reload, earlier } = useThreadTimeline(id, target);
	const requeue = useAction(async (trigger) => {
		if (!(await call("POST triggers/:id/requeue", { id: trigger })).queued) notify(t("requeueAlready"));
	}, { reload });
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, { title: t("term.thread") }), error instanceof ApiError && error.missing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("threadNotFound") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
		error,
		loading: true
	})] });
	const subscribed = new Set(data.tickets.map((ticket) => ticket.id));
	const sender = (trigger) => !trigger.human && trigger.id !== target ? `${trigger.actor.source}:${trigger.actor.id}` : void 0;
	const unsubscribe = async () => {
		if ((await call("POST threads/:key/unsubscribe", { key: data.key })).context_delivery === "pending") notify(t("unsubscribePending"));
		await reload();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: readableMarkers(t, data.title),
			children: data.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				href: data.url,
				children: t("openOriginal")
			})
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-meta dt-status-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: valueLabel(t, "source", data.source) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("threadLatest", { time: when(data.lastAt, t("lang")) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("threadCreated", { time: when(data.createdAt, t("lang")) }) })
			]
		}),
		data.evaluating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "dt-banner",
			children: t("evaluatingBanner", {
				count: data.evaluating.triggers,
				strength: valueLabel(t, "strength", data.evaluating.strength),
				deadline: when(data.evaluating.deadline, t("lang"))
			})
		}),
		data.pollError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "dt-error dt-clamp",
			children: t("pollFailed", { error: data.pollError })
		}),
		data.tickets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("subscribedTickets"),
			count: data.tickets.length,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list",
				children: data.tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketLine, {
					ticket,
					context: data.context.includes(ticket.id)
				}, ticket.id))
			})
		}),
		data.decisions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "decision" }),
			title: t("threadDecisions", { count: data.decisions.length }),
			open: decisionsOpen,
			onToggle: () => setDecisionsOpen(!decisionsOpen),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dt-disclosure-body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "dt-list",
					children: data.decisions.map((decision) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, { decision }, decision.id))
				})
			})
		}),
		data.correlated.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("term.correlation"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-plain-list",
				children: data.correlated.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "dt-textlink",
					onClick: () => navigate({
						page: "trigger",
						id: item.key
					}),
					children: readableMarkers(t, item.title)
				}) }, item.key))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: t("timeline"),
			count: t("newestFirst"),
			children: [data.timeline.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "dt-timeline",
				children: automatedRuns(data.timeline.slice().reverse(), sender).map(({ item, earlier: folded }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriggerItem, {
					trigger: item,
					earlier: folded,
					target,
					subscribed,
					requeue: item.actions.requeue ? {
						busy: requeue.busy,
						run: () => {
							requeue.run(item.id);
						}
					} : void 0
				}, item.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("noTriggers") }), data.earlier && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "chevron-down",
					size: 14
				}),
				disabled: earlier.busy,
				onClick: () => {
					earlier.run(data);
				},
				children: t("loadEarlier")
			}) })]
		}),
		data.tickets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-danger-zone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-hint",
				children: t("unsubscribeHint")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
				variant: "outline",
				icon: "unsubscribe",
				label: t("unsubscribe"),
				title: t("unsubscribeTitle"),
				message: t("unsubscribeConfirm", { title: data.title }),
				onConfirm: unsubscribe
			})]
		})
	] });
}
//#endregion
//#region src/client/ticket.tsx
/** Ticket detail page: stage and actions, Mandate details, undelivered/delivered Inputs, subscribed Threads, and Assignments. */
function InputLine({ input, earlier = [] }) {
	const { t, navigate } = usePanel();
	const trigger = input.kind === "trigger" ? input.trigger : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "dt-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, {
			state: input.delivered ? "idle" : "warning",
			label: input.delivered ? t("inputDelivered") : t("inputUndelivered")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-main",
			children: [
				trigger ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "dt-open",
						onClick: () => navigate({
							page: "trigger",
							id: trigger.thread,
							query: { trigger: trigger.id }
						}),
						children: [
							actorName(t, trigger.actor),
							t("labelSeparator"),
							readableMarkers(t, trigger.preview) || t("empty")
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-title",
					children: valueLabel(t, "input", input.kind)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-meta",
					children: [input.kind === "trigger" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: valueLabel(t, "input", input.kind) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: input.at })]
				}),
				(input.kind === "text" || input.kind === "note") && input.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-quote",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownLite, { text: input.text })
				}),
				trigger?.handback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("inputHandedBack", { reason: trigger.handback.reason }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earlier, { items: earlier })
			]
		})]
	});
}
function InputList({ inputs }) {
	const sender = (input) => input.kind === "trigger" && input.trigger && !input.trigger.human ? `${input.trigger.actor.source}:${input.trigger.actor.id}` : void 0;
	const shown = (input) => ({
		id: input.id,
		at: input.at,
		preview: input.kind === "trigger" ? input.trigger?.preview ?? "" : ""
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "dt-list",
		children: automatedRuns(inputs, sender).map((run) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
			input: run.item,
			earlier: run.earlier.map(shown)
		}, run.item.id))
	});
}
function Details({ icon, title, open = false, children }) {
	const [shown, setShown] = (0, import_react.useState)(open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclosureRow, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: icon }),
		title,
		open: shown,
		onToggle: () => setShown(!shown),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-disclosure-body",
			children
		})
	});
}
function Assignments({ ticket }) {
	const { t } = usePanel();
	const report = (state) => t("assignmentReportShort", { state: valueLabel(t, "report", state) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "dt-list",
		children: ticket.assignments.slice().reverse().map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "dt-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, {
					state: item.state === "running" ? reportDot(item.report?.state) : "idle",
					label: valueLabel(t, "assignment", item.state)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dt-row-main",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dt-row-title",
						children: t("assignmentNumber", { number: ticket.assignments.length - index })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dt-row-meta",
						children: [
							item.turnEndedAt && item.report ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								tone: "neutral",
								children: report(item.report.state)
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								tone: item.state === "running" ? "info" : "neutral",
								children: valueLabel(t, "assignment", item.state)
							}),
							item.state !== "running" && item.report && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: report(item.report.state) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("assignmentSpan", {
								from: when(item.startedAt ?? item.createdAt, t("lang")),
								to: when(item.endedAt ?? item.turnEndedAt, t("lang")) || t("now")
							}) }),
							item.endedReason && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: reasonLabel(t, item.endedReason) })
						]
					})]
				}),
				item.ref && item.ref !== ticket.sessionId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-row-actions",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionButton, {
						variant: "outline",
						sessionId: item.ref
					})
				})
			]
		}, item.id))
	});
}
function MandateDetails({ ticket, actor }) {
	const { t, navigate } = usePanel();
	const { mandate, decision } = ticket;
	const fact = (item) => {
		if (item.name === "legacyAuthority") return valueLabel(t, "legacy", item.value);
		if (item.name === "mode" || item.name === "addressed") return valueLabel(t, item.name, item.value);
		if (item.name === "admission") return valueLabel(t, "admissionCell", item.value);
		if (item.name === "rules") return item.value.map((rule) => rule.name).join(t("listSeparator"));
		return item.name === "sender" ? item.value : t("yes");
	};
	const { legacy } = ticket.basis;
	const facts = ticket.basis.facts.filter((item) => !(item.name === "sender" && item.value === actor));
	const direction = decision?.direction;
	const rows = decision ? [[t("term.trigger"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "dt-trigger-link",
		onClick: () => navigate({
			page: "trigger",
			id: decision.thread,
			query: { trigger: decision.triggerIds[0] ?? "" }
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "dt-trigger-text",
			children: readableMarkers(t, decision.preview) || t("empty")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "dt-row-meta",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				valueLabel(t, "source", mandate.actor.source),
				" · ",
				actor
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: decision.at })]
		})]
	})], [t("term.decision"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-kv-stack",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: decisionMark(t, decision.outcome).label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: reasonLabel(t, decision.reason) }),
			decision.rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t(rule.matched ? "ruleMatched" : "ruleUnmatched", {
				rule: rule.name,
				reason: rule.reason
			}) }, rule.id)),
			direction && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Hint, { children: [
				t("directionLine", {
					intent: t(direction.implementation_requested ? "intentYes" : "intentNo"),
					basis: valueLabel(t, "targetBasis", direction.target_basis),
					design: t(direction.requires_design_decision ? "designNeeded" : "designNotNeeded")
				}),
				" ",
				t("directionEvidence", { evidence: direction.evidence })
			] })
		]
	})]] : [];
	const version = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "dt-textlink dt-mono",
		onClick: () => navigate(settingsRoute("eval", { version: mandate.policyVersion })),
		children: mandate.policyVersion.slice(0, 8)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: t("mandateDetails"),
		icon: "shield",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValues, { rows: [
			...rows,
			[t("term.scope"), legacy ? t("legacyScopeShort") : mandate.scope || t("empty")],
			...facts.map((item) => [valueLabel(t, "basis", item.name), fact(item)]),
			...legacy ? [] : [[t("policyVersion"), version]]
		] })
	});
}
function TicketPage({ id }) {
	const { t, call } = usePanel();
	const { data, error, reload } = usePoll(() => call("GET tickets/:id", { id }), [id]);
	const after = async (request) => {
		await request;
		await reload();
	};
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, { title: t("term.ticket") }), error instanceof ApiError && error.missing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("ticketNotFound") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
		error,
		loading: true
	})] });
	const status = ticketMark(t, data);
	const actor = actorName(t, data.mandate.actor);
	const { legacy } = data.basis;
	const undelivered = data.inputs.filter((input) => !input.delivered);
	const failedText = /^(?:\w+Error|Error)\b[:：]/.test(data.summary);
	const failed = data.stage === "person" && data.action === "failed";
	const opening = data.threads.find((thread) => thread.url);
	const ended = data.ended && (() => {
		const outcome = valueLabel(t, "outcome", data.ended.outcome), reason = reasonLabel(t, data.ended.reason), time = when(data.ended.at, t("lang"));
		return reason ? t("endedAt", {
			time,
			outcome,
			reason
		}) : t("endedAtShort", {
			time,
			outcome
		});
	})();
	const channel = data.channels[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHead, {
			title: data.title,
			children: [
				opening?.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
					href: opening.url,
					children: t("openThread", { source: valueLabel(t, "source", opening.source) })
				}),
				data.actions.retry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
					variant: "outline",
					icon: "refresh",
					label: t("retry"),
					title: t("retryTitle"),
					message: t("retryConfirm", { title: data.title }),
					onConfirm: () => after(call("POST tickets/:id/retry", { id }))
				}),
				data.sessionId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionButton, {
					variant: "outline",
					sessionId: data.sessionId
				})
			]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-meta dt-status-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageMark, {
					state: status.dot,
					icon: status.icon,
					label: status.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
					label: t("ticketMandateLabel"),
					value: valueLabel(t, "strength", data.mandate.strength)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
					label: t("ticketActorLabel"),
					value: `${valueLabel(t, "source", data.mandate.actor.source)} · ${actor}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelValue, {
					label: t("ticketUpdatedLabel"),
					value: when(data.updatedAt, t("lang"))
				})
			]
		}),
		ended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: ended }),
		data.attention && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-banner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "dt-banner-label",
					children: t("attentionPrefix")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownLite, { text: data.attention.question }),
				channel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dt-banner-actions",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						href: channel.url,
						icon: "message",
						children: t("answerIn", { source: valueLabel(t, "source", channel.source) })
					})
				})
			]
		}),
		data.actions.retry && data.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: `dt-banner${failed ? " dt-danger" : ""}${failedText ? " dt-mono" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-banner-label",
				children: t(failed ? "failedPrefix" : "blockedPrefix")
			}), data.summary]
		}),
		data.deliveryError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "dt-banner dt-danger dt-mono",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-banner-label",
				children: t("deliveryFailedPrefix")
			}), data.deliveryError]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MandateDetails, {
			ticket: data,
			actor
		}),
		undelivered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: t("undeliveredInputs"),
			count: undelivered.length,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: data.deliveryError ? t("inputRetryHint") : data.paused ? t("inputPausedHint") : t("inputWaitingHint") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputList, { inputs: undelivered })]
		}),
		data.threads.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: t("subscribedThreads"),
			count: data.threads.length,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "dt-list",
				children: data.threads.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadLine, {
					thread,
					ticketId: data.id,
					context: thread.context
				}, thread.key))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-details",
			children: [
				data.assignments.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {
					icon: "queue",
					title: `${t("term.assignment")} · ${data.assignments.length}`,
					open: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assignments, { ticket: data })
				}),
				data.environment.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {
					icon: "settings",
					title: t("term.environment"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "dt-table",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.environment.map((variable) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							title: localized(t, variable.description),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "dt-mono",
								children: variable.key
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "dt-mono",
								children: variable.value || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dt-hint",
									children: t("empty")
								})
							})]
						}, variable.key)) })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {
					icon: "message",
					title: t("term.channel"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "dt-plain-list",
						children: data.channels.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							href: item.url,
							icon: item.source === "github" ? "pull" : "message",
							children: localized(t, item.label)
						}) }, index))
					})
				}),
				data.inputs.length > undelivered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {
					icon: "inbox",
					title: t("deliveredInputs", { count: data.inputs.length - undelivered.length }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputList, { inputs: data.inputs.filter((input) => input.delivered) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {
					icon: "hash",
					title: t("identifiers"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyValues, { rows: [
						[t("ticketId"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-mono",
							children: data.id
						})],
						[t("executionDirectory"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-mono",
							children: data.directory ?? t("empty")
						})],
						...legacy && data.mandate.scope ? [[t("legacyAssignment"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-mono dt-clamp",
							children: data.mandate.scope
						})]] : []
					] })
				})
			]
		}),
		data.actions.stop && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-danger-zone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-hint",
				children: t("stopHint")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmButton, {
				variant: "outline",
				label: t("stop"),
				title: t("stopConfirmTitle"),
				message: t("stopConfirm", { title: data.title }),
				onConfirm: () => after(call("POST tickets/:id/stop", { id }))
			})]
		})
	] });
}
//#endregion
//#region src/client/trigger.tsx
/** Trigger status view listing Threads filtered by subscription and evaluation activity. */
function TriggerStatus({ filter }) {
	const { t, call, navigate } = usePanel();
	const [limit, setLimit] = (0, import_react.useState)(20);
	const { data, error } = usePoll(() => call("GET threads", { query: {
		filter,
		limit
	} }), [filter, limit]);
	const go = (next) => {
		setLimit(20);
		navigate({
			page: "trigger",
			query: next !== "subscribed" ? { filter: next } : {}
		}, true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusHead, { hint: t("triggerIntro") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dt-filters",
			children: THREAD_FILTERS.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				active: filter === value,
				onClick: () => go(value),
				children: t(`threadFilter.${value}`)
			}, value))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadState, {
			error,
			loading: !data
		}),
		data && (data.items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "dt-list",
			children: data.items.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadLine, { thread }, thread.key))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hint, { children: t("threadsNone") })),
		data?.next_offset != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadMore, { onMore: () => setLimit(limit + 20) })
	] });
}
//#endregion
//#region src/client/app.tsx
/** Root panel shell: header with global search and glossary, top-level navigation tabs, and active route view. */
function Glossary({ open, onClose }) {
	const { t } = usePanel();
	const chinese = t("tab.overview") === zh["tab.overview"];
	const [own, other] = chinese ? [zh, en] : [en, zh];
	const heading = (group) => t(group === "roles" ? "glossaryGroup.roles" : `tab.${group}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		className: "dt-glossary-modal",
		open,
		onClose,
		title: t("glossary"),
		closeLabel: t("close"),
		description: t("glossaryIntro"),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "primary",
			onClick: onClose,
			children: t("close")
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-glossary-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "dt-glossary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t(chinese ? "glossaryChinese" : "glossaryEnglish") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t(chinese ? "glossaryEnglish" : "glossaryChinese") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: t("glossaryMeaning") })
					] }) }), Object.entries(GLOSSARY).map(([group, keys]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						colSpan: 3,
						scope: "rowgroup",
						className: "dt-glossary-group",
						children: heading(group)
					}) }), keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: own[`term.${key}`] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: other[`term.${key}`] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: own[`meaning.${key}`] })
					] }, key))] }, group))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dt-legend-title",
					children: t("legendTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "dt-legend",
					children: [
						"done",
						"ongoing",
						"warning",
						"error",
						"idle"
					].map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { state }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(`legend.${state}`) })] }, state))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "dt-values",
					children: Object.entries(GLOSSARY_VALUES).map(([group, values]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { display: "contents" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: own[`term.${group}`] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: values.map((key) => `${own[key]} ${other[key]}`).join(" · ") })]
					}, group))
				})
			]
		})
	});
}
function Highlight({ text, query }) {
	const index = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
	if (index < 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		text.slice(0, index),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
			className: "dt-mark",
			children: text.slice(index, index + query.length)
		}),
		text.slice(index + query.length)
	] });
}
function Result({ name, open, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "dt-row dt-link",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-row-main",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dt-row-title",
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "dt-open",
					onClick: open,
					children: name
				}) : name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dt-row-meta",
				children
			})]
		})
	});
}
function SearchResults({ result, query, onClose }) {
	const { t, navigate } = usePanel();
	const { setup } = usePanelData();
	const empty = !result.items.length && !result.threads.length && !result.tickets.length;
	const counts = {
		tickets: result.tickets.length,
		threads: result.threads.length,
		items: result.items.length
	};
	const go = (route) => () => {
		onClose();
		navigate(route);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dt-search-results",
		role: "region",
		"aria-label": t("searchLabel"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-search-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dt-hint",
				children: empty ? t(setup?.accounts?.feishu ? "searchNone" : "searchNoneGithub") : t(result.items.length >= 20 ? "searchFoundCapped" : "searchFound", counts)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "close",
					size: 14
				}),
				"aria-label": t("close"),
				onClick: onClose
			})]
		}), !empty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "dt-list",
			children: [
				result.tickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, {
					name: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
						text: ticket.title,
						query
					}),
					open: go({
						page: "execution",
						id: ticket.id
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("term.ticket") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ticket.stage === "ended" ? t("ticket.ended") : ticketMark(t, ticket).label })]
				}, ticket.id)),
				result.threads.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
					name: readableMarkers(t, thread.title),
					open: go({
						page: "trigger",
						id: thread.key
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("term.thread") })
				}, thread.key)),
				result.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result, {
					name: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
						text: readableMarkers(t, item.preview) || t("empty"),
						query
					}),
					open: item.filtered === void 0 ? go({
						page: "trigger",
						id: item.threads[0],
						query: { trigger: item.id }
					}) : void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: valueLabel(t, "source", item.source) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: actorName(t, item.actor) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(When, { at: item.at }),
						item.threadTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dt-ellipsis",
							children: t("inThread", { thread: readableMarkers(t, item.threadTitle) })
						}),
						item.filtered !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("searchFiltered", { reason: reasonLabel(t, item.filtered) }) })
					]
				}, item.id))
			]
		})]
	});
}
function Header({ masterId }) {
	const { t, call, openSession, notify } = usePanel();
	const [glossary, setGlossary] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)();
	const latest = (0, import_react.useRef)(0);
	const show = (value) => {
		latest.current++;
		setResult(value);
	};
	const search = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!result) return;
		const close = (event) => {
			if (!search.current?.contains(event.target)) show();
		};
		document.addEventListener("pointerdown", close);
		return () => {
			document.removeEventListener("pointerdown", close);
		};
	}, [result]);
	const submit = (event) => {
		event.preventDefault();
		const text = query.trim();
		if (!text) {
			show();
			return;
		}
		const request = ++latest.current;
		call("GET search", { query: { q: text } }).then((value) => {
			if (request === latest.current) setResult({
				query: text,
				value
			});
		}, (failure) => {
			if (request === latest.current) notify(errorText(failure));
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "dt-head",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dt-head-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "dt-title",
					children: t("title")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dt-toolbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						ref: search,
						className: "dt-search",
						role: "search",
						onSubmit: submit,
						onKeyDown: (event) => {
							if (event.key === "Escape") show();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "search",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "search" }),
							value: query,
							placeholder: t("searchPlaceholder"),
							"aria-label": t("searchLabel"),
							onChange: (event) => {
								setQuery(event.target.value);
								if (!event.target.value) show();
							}
						}), result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchResults, {
							result: result.value,
							query: result.query,
							onClose: () => {
								show();
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "question" }),
						"aria-label": t("glossary"),
						title: t("glossary"),
						"aria-haspopup": "dialog",
						onClick: () => setGlossary(true)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "session",
							size: 14
						}),
						disabled: !masterId,
						onClick: () => {
							if (masterId) openSession(masterId).catch((failure) => notify(errorText(failure)));
						},
						children: t("openMaster")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glossary, {
				open: glossary,
				onClose: () => setGlossary(false)
			})
		]
	});
}
function Pages({ route, openTab, deploymentForm }) {
	const { t } = usePanel();
	const { state, error, reload } = usePanelData();
	(0, import_react.useEffect)(() => {
		document.getElementById(`dt-tab-${route.page}`)?.scrollIntoView?.({
			block: "nearest",
			inline: "nearest"
		});
	}, [route.page]);
	const waiting = error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "dt-error",
		role: "alert",
		children: error.message
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "dt-hint",
		children: t("loading")
	});
	const page = (() => {
		switch (route.page) {
			case "overview": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPage, {});
			case "source": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceStatus, {});
			case "trigger": return route.id !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadPage, {
				id: route.id,
				target: route.query?.trigger
			}, route.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriggerStatus, { filter: route.query?.filter ?? "subscribed" });
			case "eval": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvalStatus, {
				filter: route.query?.filter ?? "work",
				window: route.query?.window,
				paused: !!state?.paused
			});
			case "execution": return route.id !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketPage, { id: route.id }, route.id) : state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionStatus, {
				filter: route.query?.filter ?? "open",
				state,
				reload
			}) : waiting;
			case "settings": return state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {
				group: route.query.group,
				query: route.query,
				state,
				deploymentForm
			}, state.masterId) : waiting;
		}
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dt-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dt-column",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { masterId: state?.masterId }),
				error && state && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dt-error",
					role: "status",
					children: error.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedTabs, {
					className: "dt-tabs",
					label: t("pagesLabel"),
					value: route.page,
					onChange: openTab,
					items: TABS.map((value) => ({
						value,
						label: t(`tab.${value}`),
						id: `dt-tab-${value}`,
						panelId: "dt-page"
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "dt-page",
					role: "tabpanel",
					"aria-labelledby": `dt-tab-${route.page}`,
					className: "dt-main",
					children: page
				})
			]
		})
	});
}
/** Root panel component managing route history and shared panel state. */
function App({ t, openSession, deploymentForm }) {
	const [location, setLocation] = (0, import_react.useState)(initialLocation);
	(0, import_react.useEffect)(() => {
		remember(location);
	}, [location]);
	const move = (0, import_react.useCallback)((next) => setLocation((current) => ({
		...next(current),
		group: lastSettingsGroup(current)
	})), []);
	/** Navigates to `route`; `replace` swaps the current entry (filters, paging) instead of pushing a back step. */
	const navigate = (0, import_react.useCallback)((route, replace = false) => move((current) => ({
		route,
		stack: replace ? current.stack : [...current.stack, current.route].slice(-20)
	})), [move]);
	const back = (0, import_react.useCallback)(() => move((current) => ({
		route: current.stack.at(-1) ?? HOME,
		stack: current.stack.slice(0, -1)
	})), [move]);
	const openTab = (0, import_react.useCallback)((tab) => move((current) => ({
		stack: [],
		route: tab === "settings" ? settingsRoute(lastSettingsGroup(current)) : {
			page: tab,
			id: void 0
		}
	})), [move]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelProvider, {
		t,
		openSession,
		navigate,
		back,
		backLabel: routeLabel(t, location.stack.at(-1) ?? HOME),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pages, {
			route: location.route,
			openTab,
			deploymentForm
		})
	});
}
//#endregion
//#region src/client/standalone.tsx
/**
* Standalone page entry: mounts the management `App` into a plain HTML page so it can run outside DSH,
* inside the bridge iframe that DSH NEXT embeds through its same-origin proxy.
*
* Only three host capabilities are replaced:
* - translation: the built-in `zh` / `en` dictionaries instead of the DSH locale service;
* - opening a Session: `postMessage` to the parent DSH NEXT panel, which calls `uiWorkspace.openSession`;
* - management API base: `/orchestrator/api/…` is rewritten to a page-relative path that hits the proxy.
*/
const DICTIONARIES = {
	zh,
	en
};
const interpolate = (text, values) => text.replace(/\{(\w+)\}/g, (match, name) => values && name in values ? String(values[name]) : match);
/** Minimal stand-in for the DSH translator: `{name}` interpolation with the key as its own fallback. */
function translator(lang) {
	const dictionary = DICTIONARIES[lang] ?? DICTIONARIES.zh;
	const translate = (key, values) => {
		const text = dictionary[key];
		return text === void 0 ? String(key) : interpolate(text, values);
	};
	return translate;
}
/** Rewrite the panel's absolute management-API paths to page-relative ones so they stay inside the proxy. */
function installApiBase() {
	const native = window.fetch.bind(window);
	window.fetch = (input, init) => {
		const url = typeof input === "string" ? input : void 0;
		if (url !== void 0 && url.startsWith("/orchestrator/api/")) return native("../" + url.slice(1), init);
		return native(input, init);
	};
}
/** Render the panel into `container`; returns the React root for callers that need to unmount it. */
function mount(container, options = {}) {
	installApiBase();
	const t = translator(options.lang ?? "zh");
	const openSession = async (sessionId) => {
		if (window.parent && window.parent !== window) window.parent.postMessage({
			type: "superagent-bridge:open-session",
			sessionId
		}, "*");
	};
	const root = (0, import_client.createRoot)(container);
	root.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {
		t,
		openSession,
		deploymentForm: void 0
	}));
	return root;
}
//#endregion
export { mount, translator };
