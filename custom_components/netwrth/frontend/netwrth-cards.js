var w3 = Object.defineProperty;
var A3 = (e, t, n) => t in e ? w3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Nr = (e, t, n) => A3(e, typeof t != "symbol" ? t + "" : t, n);
var Rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ev = { exports: {} }, nl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RO;
function T3() {
  if (RO) return nl;
  RO = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      l = {};
      for (var f in o)
        f !== "key" && (l[f] = o[f]);
    } else l = o;
    return o = l.ref, {
      $$typeof: e,
      type: r,
      key: c,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return nl.Fragment = t, nl.jsx = n, nl.jsxs = n, nl;
}
var $O;
function E3() {
  return $O || ($O = 1, ev.exports = T3()), ev.exports;
}
var z = E3(), tv = { exports: {} }, Ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zO;
function j3() {
  if (zO) return Ae;
  zO = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), g = Symbol.iterator;
  function b(P) {
    return P === null || typeof P != "object" ? null : (P = g && P[g] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, S = Object.assign, x = {};
  function A(P, U, re) {
    this.props = P, this.context = U, this.refs = x, this.updater = re || _;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(P, U) {
    if (typeof P != "object" && typeof P != "function" && P != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, P, U, "setState");
  }, A.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function E() {
  }
  E.prototype = A.prototype;
  function M(P, U, re) {
    this.props = P, this.context = U, this.refs = x, this.updater = re || _;
  }
  var j = M.prototype = new E();
  j.constructor = M, S(j, A.prototype), j.isPureReactComponent = !0;
  var w = Array.isArray;
  function T() {
  }
  var C = { H: null, A: null, T: null, S: null }, R = Object.prototype.hasOwnProperty;
  function N(P, U, re) {
    var se = re.ref;
    return {
      $$typeof: e,
      type: P,
      key: U,
      ref: se !== void 0 ? se : null,
      props: re
    };
  }
  function K(P, U) {
    return N(P.type, U, P.props);
  }
  function L(P) {
    return typeof P == "object" && P !== null && P.$$typeof === e;
  }
  function B(P) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(re) {
      return U[re];
    });
  }
  var F = /\/+/g;
  function G(P, U) {
    return typeof P == "object" && P !== null && P.key != null ? B("" + P.key) : U.toString(36);
  }
  function V(P) {
    switch (P.status) {
      case "fulfilled":
        return P.value;
      case "rejected":
        throw P.reason;
      default:
        switch (typeof P.status == "string" ? P.then(T, T) : (P.status = "pending", P.then(
          function(U) {
            P.status === "pending" && (P.status = "fulfilled", P.value = U);
          },
          function(U) {
            P.status === "pending" && (P.status = "rejected", P.reason = U);
          }
        )), P.status) {
          case "fulfilled":
            return P.value;
          case "rejected":
            throw P.reason;
        }
    }
    throw P;
  }
  function $(P, U, re, se, pe) {
    var fe = typeof P;
    (fe === "undefined" || fe === "boolean") && (P = null);
    var _e = !1;
    if (P === null) _e = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          _e = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case e:
            case t:
              _e = !0;
              break;
            case y:
              return _e = P._init, $(
                _e(P._payload),
                U,
                re,
                se,
                pe
              );
          }
      }
    if (_e)
      return pe = pe(P), _e = se === "" ? "." + G(P, 0) : se, w(pe) ? (re = "", _e != null && (re = _e.replace(F, "$&/") + "/"), $(pe, U, re, "", function(he) {
        return he;
      })) : pe != null && (L(pe) && (pe = K(
        pe,
        re + (pe.key == null || P && P.key === pe.key ? "" : ("" + pe.key).replace(
          F,
          "$&/"
        ) + "/") + _e
      )), U.push(pe)), 1;
    _e = 0;
    var Ce = se === "" ? "." : se + ":";
    if (w(P))
      for (var ce = 0; ce < P.length; ce++)
        se = P[ce], fe = Ce + G(se, ce), _e += $(
          se,
          U,
          re,
          fe,
          pe
        );
    else if (ce = b(P), typeof ce == "function")
      for (P = ce.call(P), ce = 0; !(se = P.next()).done; )
        se = se.value, fe = Ce + G(se, ce++), _e += $(
          se,
          U,
          re,
          fe,
          pe
        );
    else if (fe === "object") {
      if (typeof P.then == "function")
        return $(
          V(P),
          U,
          re,
          se,
          pe
        );
      throw U = String(P), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return _e;
  }
  function Y(P, U, re) {
    if (P == null) return P;
    var se = [], pe = 0;
    return $(P, se, "", "", function(fe) {
      return U.call(re, fe, pe++);
    }), se;
  }
  function ne(P) {
    if (P._status === -1) {
      var U = P._result;
      U = U(), U.then(
        function(re) {
          (P._status === 0 || P._status === -1) && (P._status = 1, P._result = re);
        },
        function(re) {
          (P._status === 0 || P._status === -1) && (P._status = 2, P._result = re);
        }
      ), P._status === -1 && (P._status = 0, P._result = U);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var H = typeof reportError == "function" ? reportError : function(P) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof P == "object" && P !== null && typeof P.message == "string" ? String(P.message) : String(P),
        error: P
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", P);
      return;
    }
    console.error(P);
  }, J = {
    map: Y,
    forEach: function(P, U, re) {
      Y(
        P,
        function() {
          U.apply(this, arguments);
        },
        re
      );
    },
    count: function(P) {
      var U = 0;
      return Y(P, function() {
        U++;
      }), U;
    },
    toArray: function(P) {
      return Y(P, function(U) {
        return U;
      }) || [];
    },
    only: function(P) {
      if (!L(P))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return P;
    }
  };
  return Ae.Activity = v, Ae.Children = J, Ae.Component = A, Ae.Fragment = n, Ae.Profiler = o, Ae.PureComponent = M, Ae.StrictMode = r, Ae.Suspense = d, Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, Ae.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(P) {
      return C.H.useMemoCache(P);
    }
  }, Ae.cache = function(P) {
    return function() {
      return P.apply(null, arguments);
    };
  }, Ae.cacheSignal = function() {
    return null;
  }, Ae.cloneElement = function(P, U, re) {
    if (P == null)
      throw Error(
        "The argument must be a React element, but you passed " + P + "."
      );
    var se = S({}, P.props), pe = P.key;
    if (U != null)
      for (fe in U.key !== void 0 && (pe = "" + U.key), U)
        !R.call(U, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && U.ref === void 0 || (se[fe] = U[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) se.children = re;
    else if (1 < fe) {
      for (var _e = Array(fe), Ce = 0; Ce < fe; Ce++)
        _e[Ce] = arguments[Ce + 2];
      se.children = _e;
    }
    return N(P.type, pe, se);
  }, Ae.createContext = function(P) {
    return P = {
      $$typeof: c,
      _currentValue: P,
      _currentValue2: P,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, P.Provider = P, P.Consumer = {
      $$typeof: l,
      _context: P
    }, P;
  }, Ae.createElement = function(P, U, re) {
    var se, pe = {}, fe = null;
    if (U != null)
      for (se in U.key !== void 0 && (fe = "" + U.key), U)
        R.call(U, se) && se !== "key" && se !== "__self" && se !== "__source" && (pe[se] = U[se]);
    var _e = arguments.length - 2;
    if (_e === 1) pe.children = re;
    else if (1 < _e) {
      for (var Ce = Array(_e), ce = 0; ce < _e; ce++)
        Ce[ce] = arguments[ce + 2];
      pe.children = Ce;
    }
    if (P && P.defaultProps)
      for (se in _e = P.defaultProps, _e)
        pe[se] === void 0 && (pe[se] = _e[se]);
    return N(P, fe, pe);
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(P) {
    return { $$typeof: f, render: P };
  }, Ae.isValidElement = L, Ae.lazy = function(P) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: P },
      _init: ne
    };
  }, Ae.memo = function(P, U) {
    return {
      $$typeof: h,
      type: P,
      compare: U === void 0 ? null : U
    };
  }, Ae.startTransition = function(P) {
    var U = C.T, re = {};
    C.T = re;
    try {
      var se = P(), pe = C.S;
      pe !== null && pe(re, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(T, H);
    } catch (fe) {
      H(fe);
    } finally {
      U !== null && re.types !== null && (U.types = re.types), C.T = U;
    }
  }, Ae.unstable_useCacheRefresh = function() {
    return C.H.useCacheRefresh();
  }, Ae.use = function(P) {
    return C.H.use(P);
  }, Ae.useActionState = function(P, U, re) {
    return C.H.useActionState(P, U, re);
  }, Ae.useCallback = function(P, U) {
    return C.H.useCallback(P, U);
  }, Ae.useContext = function(P) {
    return C.H.useContext(P);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(P, U) {
    return C.H.useDeferredValue(P, U);
  }, Ae.useEffect = function(P, U) {
    return C.H.useEffect(P, U);
  }, Ae.useEffectEvent = function(P) {
    return C.H.useEffectEvent(P);
  }, Ae.useId = function() {
    return C.H.useId();
  }, Ae.useImperativeHandle = function(P, U, re) {
    return C.H.useImperativeHandle(P, U, re);
  }, Ae.useInsertionEffect = function(P, U) {
    return C.H.useInsertionEffect(P, U);
  }, Ae.useLayoutEffect = function(P, U) {
    return C.H.useLayoutEffect(P, U);
  }, Ae.useMemo = function(P, U) {
    return C.H.useMemo(P, U);
  }, Ae.useOptimistic = function(P, U) {
    return C.H.useOptimistic(P, U);
  }, Ae.useReducer = function(P, U, re) {
    return C.H.useReducer(P, U, re);
  }, Ae.useRef = function(P) {
    return C.H.useRef(P);
  }, Ae.useState = function(P) {
    return C.H.useState(P);
  }, Ae.useSyncExternalStore = function(P, U, re) {
    return C.H.useSyncExternalStore(
      P,
      U,
      re
    );
  }, Ae.useTransition = function() {
    return C.H.useTransition();
  }, Ae.version = "19.2.8", Ae;
}
var qO;
function M0() {
  return qO || (qO = 1, tv.exports = j3()), tv.exports;
}
var ee = M0();
const k = /* @__PURE__ */ et(ee), $M = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
}), M3 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), So = "•••••";
function ir(e, t = !1) {
  return (t ? M3 : $M).format(e);
}
const C3 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1
});
function D3(e) {
  return C3.format(e);
}
function ub(e) {
  return `${e >= 0 ? "+" : ""}${$M.format(e)}`;
}
function Al(e) {
  return isFinite(e) ? `${e >= 0 ? "+" : ""}${(e * 100).toFixed(1)}%` : "–";
}
function ei(e, t = !1) {
  return new Date(e).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...t ? { hour: "numeric", minute: "2-digit" } : {}
  });
}
const C0 = ["1d", "1w", "1m", "3m", "6m", "1y", "all"], To = [
  {
    key: "daily",
    label: "Day-to-day",
    flow: !0,
    pick: (e) => e.kind === "cash" || e.kind === "credit",
    modes: ["flow", "total", "stacked"],
    defaultMode: "flow"
  },
  {
    key: "invest",
    label: "Investments",
    flow: !1,
    pick: (e) => e.kind === "investment",
    modes: ["total", "stacked", "category"],
    defaultMode: "total"
  },
  {
    key: "all",
    label: "Everything",
    flow: !1,
    pick: () => !0,
    modes: ["total", "stacked", "category"],
    defaultMode: "total"
  }
], P3 = "netwrth_censor_changed";
function N3(e, t) {
  return e.connection.sendMessagePromise({
    type: "netwrth/overview",
    ...t ? { entry_id: t } : {}
  });
}
function zM(e, t, n) {
  return e.connection.sendMessagePromise({
    type: "netwrth/series",
    range: n,
    ...t ? { entry_id: t } : {}
  });
}
function R3(e, t, n) {
  return e.connection.sendMessagePromise({
    type: "netwrth/spending_summary",
    ...n ? { month: n } : {},
    ...t ? { entry_id: t } : {}
  });
}
function qM(e, t, n) {
  return e.connection.sendMessagePromise({
    type: "netwrth/spending_recurring",
    ...n ? { month: n } : {},
    ...t ? { entry_id: t } : {}
  });
}
function BM(e, t, n, r) {
  return e.connection.sendMessagePromise({
    type: "netwrth/spending_transactions",
    ...n ? { month: n } : {},
    ...r ? { theme: r } : {},
    ...t ? { entry_id: t } : {}
  });
}
function $3(e) {
  return e.connection.sendMessagePromise({ type: "netwrth/entries" });
}
function z3(e, t, n, r) {
  return e.connection.sendMessagePromise({
    type: "netwrth/reveal",
    code: n,
    ...r !== void 0 ? { ttl_minutes: r } : {},
    ...t ? { entry_id: t } : {}
  });
}
function q3(e, t) {
  return e.connection.sendMessagePromise({
    type: "netwrth/conceal",
    ...t ? { entry_id: t } : {}
  });
}
function B3({
  onSubmit: e,
  error: t,
  label: n,
  footer: r
}) {
  const [o, l] = ee.useState(""), [c, f] = ee.useState(!1), d = async (h) => {
    if (c || o.length >= 4) return;
    const y = o + h;
    if (l(y), y.length === 4) {
      f(!0);
      const v = await e(y);
      f(!1), v || l("");
    }
  };
  return /* @__PURE__ */ z.jsxs("div", { className: "pinpad", children: [
    n && /* @__PURE__ */ z.jsx("div", { className: "pin-label", children: n }),
    /* @__PURE__ */ z.jsx("div", { className: "pin-dots", children: [0, 1, 2, 3].map((h) => /* @__PURE__ */ z.jsx("span", { className: `pin-dot ${h < o.length ? "filled" : ""}` }, h)) }),
    /* @__PURE__ */ z.jsxs("div", { className: "pin-grid", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((h) => /* @__PURE__ */ z.jsx("button", { onClick: () => d(h), disabled: c, children: h }, h)),
      /* @__PURE__ */ z.jsx("button", { onClick: () => l(""), disabled: c, children: "C" }),
      /* @__PURE__ */ z.jsx("button", { onClick: () => d("0"), disabled: c, children: "0" }),
      /* @__PURE__ */ z.jsx("button", { onClick: () => l(o.slice(0, -1)), disabled: c, children: "⌫" })
    ] }),
    t && /* @__PURE__ */ z.jsx("div", { className: "pw-err", children: t }),
    r
  ] });
}
const k3 = 6e4;
function td(e, t, n) {
  const [r, o] = ee.useState(null), [l, c] = ee.useState(null), [f, d] = ee.useState(!0), [h, y] = ee.useState(null), [v, g] = ee.useState(0), b = ee.useCallback(() => g((A) => A + 1), []), _ = ee.useCallback(() => {
    c(null), o(
      (A) => A && { ...A, me: { ...A.me, censored: !0, revealed: !1, reveal_expires: null } }
    ), d(!0), b();
  }, [b]), S = r && !r.me.censored && r.me.reveal_expires ? new Date(r.me.reveal_expires).getTime() : null;
  ee.useEffect(() => {
    let A = !0;
    Promise.all([N3(e, t), n(e, t)]).then(([M, j]) => {
      A && (o(M), c(j.data), d(j.censored), y(null));
    }).catch((M) => {
      A && y((M == null ? void 0 : M.message) ?? String(M));
    });
    const E = setInterval(b, k3);
    return () => {
      A = !1, clearInterval(E);
    };
  }, [e, t, n, v, b]);
  const x = ee.useRef(null);
  return x.current = (r == null ? void 0 : r.entry_id) ?? null, ee.useEffect(() => {
    let A = null, E = !0;
    return e.connection.subscribeEvents((M) => {
      const j = x.current;
      (j == null || M.data.entry_id === j) && b();
    }, P3).then((M) => {
      E ? A = M : M();
    }).catch(() => {
    }), () => {
      E = !1, A == null || A();
    };
  }, [e.connection, b]), ee.useEffect(() => {
    if (S == null) return;
    const A = S - Date.now() + 1e3;
    if (A <= 0) {
      _();
      return;
    }
    const E = setTimeout(_, A);
    return () => clearTimeout(E);
  }, [S, _]), ee.useEffect(() => {
    const A = () => {
      document.visibilityState === "visible" && (S != null && Date.now() >= S ? _() : b());
    };
    return document.addEventListener("visibilitychange", A), window.addEventListener("pageshow", A), () => {
      document.removeEventListener("visibilitychange", A), window.removeEventListener("pageshow", A);
    };
  }, [S, _, b]), { overview: r, data: l, masked: f, error: h, refresh: b };
}
function D0(e, t, n) {
  const r = ee.useCallback(
    (h, y) => zM(h, y, n).then((v) => ({ data: v.series, censored: v.censored })),
    [n]
  ), { overview: o, data: l, masked: c, error: f, refresh: d } = td(
    e,
    t,
    r
  );
  return { overview: o, series: l, masked: c, error: f, refresh: d };
}
const L3 = ({ open: e }) => /* @__PURE__ */ z.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", children: [
  /* @__PURE__ */ z.jsx("rect", { x: "4", y: "11", width: "16", height: "10", rx: "2" }),
  e ? /* @__PURE__ */ z.jsx("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" }) : /* @__PURE__ */ z.jsx("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] });
function Jo({
  hass: e,
  entry: t,
  overview: n,
  autoConcealMinutes: r,
  onChanged: o
}) {
  const [l, c] = ee.useState(!1), [f, d] = ee.useState(null), h = n.me;
  if (!h.can_reveal) return null;
  const y = r ?? n.default_reveal_ttl_minutes, v = async (b) => {
    const _ = await z3(e, t, b, y).catch((S) => ({
      ok: !1,
      error: (S == null ? void 0 : S.message) ?? String(S)
    }));
    return _.ok ? (d(null), c(!1), o(), !0) : (d(_.error ?? "rejected"), !1);
  }, g = async () => {
    if (!h.censored) {
      await q3(e, t).catch(() => {
      }), o();
      return;
    }
    if (!h.code_required) {
      await v("");
      return;
    }
    d(null), c((b) => !b);
  };
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsx(
      "button",
      {
        className: "lock",
        title: h.censored ? "Reveal amounts" : "Conceal amounts",
        onClick: g,
        children: /* @__PURE__ */ z.jsx(L3, { open: !h.censored })
      }
    ),
    l && h.censored && /* @__PURE__ */ z.jsx("div", { className: "pin-wrap", children: /* @__PURE__ */ z.jsx(
      B3,
      {
        onSubmit: v,
        error: f,
        label: y > 0 ? `Reveal for ${y} min` : "Reveal until concealed",
        footer: /* @__PURE__ */ z.jsx("button", { className: "pin-footer", onClick: () => c(!1), children: "Cancel" })
      }
    ) })
  ] });
}
function Js({
  options: e,
  value: t,
  onChange: n
}) {
  return /* @__PURE__ */ z.jsx("span", { className: "seg", children: e.map((r) => /* @__PURE__ */ z.jsx("button", { className: r === t ? "active" : "", onClick: () => n(r), children: r }, r)) });
}
function U3(e) {
  return e ? Date.now() - new Date(e).getTime() > 48 * 3600 * 1e3 : !0;
}
function nd(e) {
  return ee.useMemo(
    () => e ? e.accounts.filter((t) => !t.hidden) : [],
    [e]
  );
}
const I3 = ["cash", "investment", "credit", "loan", "other"];
function H3(e, t) {
  if (e.balance == null) return "–";
  const n = parseFloat(e.balance);
  return t ? `${n.toFixed(1)}%` : ir(n, !0);
}
function G3({
  hass: e,
  config: t
}) {
  const n = To.find((S) => S.key === (t.view ?? "all")) ?? To[2], [r, o] = ee.useState(t.range ?? "1m"), { overview: l, series: c, masked: f, error: d, refresh: h } = D0(e, t.entry, r), y = nd(l), v = t.accounts, g = ee.useMemo(() => {
    let S = y.filter(n.pick);
    if (v && v.length > 0) {
      const x = v.map((A) => A.trim().toLowerCase()).filter(Boolean);
      S = S.filter(
        (A) => x.some(
          (E) => (A.nickname ?? "").toLowerCase().includes(E) || A.name.toLowerCase().includes(E)
        )
      );
    }
    return S;
  }, [y, n, v]), b = ee.useMemo(() => {
    const S = /* @__PURE__ */ new Map();
    if (!c) return S;
    for (const x of c) {
      if (x.points.length < 2) continue;
      const A = [...x.points].sort(
        (j, w) => new Date(j.ts).getTime() - new Date(w.ts).getTime()
      ), E = parseFloat(A[0].balance), M = parseFloat(A[A.length - 1].balance);
      E !== 0 && S.set(x.account_id, (M - E) / Math.abs(E));
    }
    return S;
  }, [c]), _ = ee.useMemo(
    () => I3.map((S) => ({
      kind: S,
      accounts: g.filter((x) => x.kind === S)
    })).filter((S) => S.accounts.length > 0),
    [g]
  );
  return /* @__PURE__ */ z.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ z.jsx("h2", { children: t.title ?? "Accounts" }),
      /* @__PURE__ */ z.jsxs("span", { className: "head-right", children: [
        t.show_controls !== !1 && t.show_range_selector !== !1 && /* @__PURE__ */ z.jsx("span", { className: "controls", children: /* @__PURE__ */ z.jsx(Js, { options: C0, value: r, onChange: o }) }),
        l && /* @__PURE__ */ z.jsx(
          Jo,
          {
            hass: e,
            entry: t.entry,
            overview: l,
            autoConcealMinutes: t.auto_conceal_minutes,
            onChanged: h
          }
        )
      ] })
    ] }),
    d && /* @__PURE__ */ z.jsx("div", { className: "error-box", children: d }),
    !d && !l && /* @__PURE__ */ z.jsx("div", { className: "status", children: "Loading…" }),
    !d && l && _.length === 0 && /* @__PURE__ */ z.jsx("div", { className: "status", children: "No accounts." }),
    !d && l && _.length > 0 && /* @__PURE__ */ z.jsx("table", { children: /* @__PURE__ */ z.jsx("tbody", { children: _.map((S) => /* @__PURE__ */ z.jsx(
      Y3,
      {
        kind: S.kind,
        accounts: S.accounts,
        masked: f,
        deltas: b
      },
      S.kind
    )) }) })
  ] });
}
function Y3({
  kind: e,
  accounts: t,
  masked: n,
  deltas: r
}) {
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsx("tr", { className: "kind-row", children: /* @__PURE__ */ z.jsx("td", { colSpan: 3, children: e }) }),
    t.map((o) => {
      const l = r.get(o.id);
      return /* @__PURE__ */ z.jsxs("tr", { children: [
        /* @__PURE__ */ z.jsxs("td", { children: [
          /* @__PURE__ */ z.jsx("span", { className: `dot ${U3(o.balance_at) ? "stale" : ""}` }),
          o.nickname || o.name,
          /* @__PURE__ */ z.jsxs("span", { className: "muted", children: [
            " · ",
            o.org_name || o.org_domain
          ] })
        ] }),
        /* @__PURE__ */ z.jsx("td", { className: "num", children: H3(o, n) }),
        /* @__PURE__ */ z.jsx("td", { className: `num row-delta ${l == null ? "muted" : l >= 0 ? "up" : "down"}`, children: l == null ? "–" : Al(l) })
      ] }, o.id);
    })
  ] });
}
const K3 = {
  dining: "#fb923c",
  shopping: "#60a5fa",
  groceries: "#34d399",
  subscriptions: "#a78bfa",
  utilities: "#22d3ee",
  housing: "#f472b6",
  transport: "#fbbf24",
  travel: "#93c5fd",
  health: "#4ade80",
  leisure: "#e879f9",
  fees: "#fca5a5",
  payments: "#fb7185",
  other: "#8b9bb4"
}, Tl = (e) => K3[e] ?? "#8b9bb4", X3 = /* @__PURE__ */ new Set(["income", "transfers", "debt"]), V3 = {
  weekly: 52 / 12,
  biweekly: 26 / 12,
  monthly: 1,
  quarterly: 1 / 3,
  annual: 1 / 12
};
function Gt(e, t) {
  return t ? So : ir(e, Math.abs(e) < 100);
}
function El() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
}
function BO(e, t) {
  const [n, r] = e.split("-").map(Number);
  return new Date(Date.UTC(n, r - 1 + t, 1)).toISOString().slice(0, 7);
}
function F3(e) {
  const [t, n] = e.split("-").map(Number);
  return new Date(Date.UTC(t, n - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}
function P0({
  month: e,
  onChange: t
}) {
  return /* @__PURE__ */ z.jsxs("span", { className: "seg", children: [
    /* @__PURE__ */ z.jsx("button", { onClick: () => t(BO(e, -1)), children: "‹" }),
    /* @__PURE__ */ z.jsx("button", { className: "active spend-month-label", children: F3(e) }),
    /* @__PURE__ */ z.jsx("button", { onClick: () => t(BO(e, 1)), disabled: e >= El(), children: "›" })
  ] });
}
const $s = 820, nr = 310, Bt = { top: 88, right: 16, bottom: 28, left: 16 }, kO = 24, Rr = 26, W3 = { quarterly: "/qtr", annual: "/yr" }, nv = /* @__PURE__ */ new Set(["monthly", "quarterly", "annual"]), LO = {
  actual: "charged",
  expected: "expected around this day",
  overdue: "expected but not seen yet"
};
function rl(e) {
  return new Date(e).getUTCDate();
}
function Z3({
  hass: e,
  config: t
}) {
  const [n, r] = ee.useState(El()), [o, l] = ee.useState(null), [c, f] = ee.useState(/* @__PURE__ */ new Set()), d = ee.useCallback(
    (H, J) => qM(H, J, n).then((P) => ({ data: P, censored: P.censored })),
    [n]
  ), { overview: h, data: y, masked: v, error: g, refresh: b } = td(
    e,
    t.entry,
    d
  ), _ = (y == null ? void 0 : y.streams) ?? [], S = (y == null ? void 0 : y.expected) ?? [], x = (y == null ? void 0 : y.actuals) ?? [], A = (y == null ? void 0 : y.today) ?? "", E = v, M = ee.useMemo(() => {
    const H = /* @__PURE__ */ new Map();
    for (const J of _) H.set(`${J.merchant_key}|${J.is_income}`, J);
    return H;
  }, [_]), j = ee.useMemo(() => {
    var J;
    const H = [];
    for (const P of x) {
      const U = M.get(`${P.merchant_key}|false`);
      P.is_income || !U || !nv.has(U.frequency) || H.push({
        id: `a-${P.merchant_key}-${P.date}`,
        merchantKey: P.merchant_key,
        name: U.merchant ?? P.merchant_key,
        logo: U.logo_url,
        day: rl(P.date),
        amount: parseFloat(P.amount),
        state: "actual",
        frequency: U.frequency,
        theme: U.theme
      });
    }
    for (const P of S)
      P.is_income || !nv.has(P.frequency) || H.push({
        id: `e-${P.merchant_key}-${P.date}`,
        merchantKey: P.merchant_key,
        name: P.merchant || P.merchant_key,
        logo: P.logo_url ?? null,
        day: rl(P.date),
        amount: P.amount,
        state: P.overdue ? "overdue" : "expected",
        frequency: P.frequency,
        theme: ((J = M.get(`${P.merchant_key}|false`)) == null ? void 0 : J.theme) ?? null
      });
    return H;
  }, [x, S, M]), w = ee.useMemo(() => {
    const H = [];
    for (const J of x) {
      if (!J.is_income) continue;
      const P = M.get(`${J.merchant_key}|true`);
      H.push({
        id: `ia-${J.merchant_key}-${J.date}`,
        merchantKey: J.merchant_key,
        name: (P == null ? void 0 : P.merchant) ?? J.merchant_key,
        logo: null,
        day: rl(J.date),
        amount: parseFloat(J.amount),
        state: "actual",
        frequency: (P == null ? void 0 : P.frequency) ?? "monthly",
        theme: null
      });
    }
    for (const J of S)
      J.is_income && H.push({
        id: `ie-${J.merchant_key}-${J.date}`,
        merchantKey: J.merchant_key,
        name: J.merchant || J.merchant_key,
        logo: null,
        day: rl(J.date),
        amount: J.amount,
        state: J.overdue ? "overdue" : "expected",
        frequency: J.frequency,
        theme: null
      });
    return H.sort((J, P) => J.day - P.day);
  }, [x, S, M]), T = ee.useMemo(
    () => _.filter(
      (H) => !H.is_income && (H.active && !nv.has(H.frequency) || !H.active && H.theme === "subscriptions")
    ),
    [_]
  ), C = A ? rl(A) : 0, R = j.map((H) => H.amount).filter((H) => H > 0), N = Math.max(1e-9, ...R), K = Math.min(N, ...R), L = $s - Bt.left - Bt.right, B = nr - Bt.top - Bt.bottom, F = (H) => Bt.left + (H - 1) / 30 * L, G = Math.log(N) - Math.log(K), V = (H) => {
    const J = G < 1e-6 ? 0.6 : (Math.log(Math.max(H, K)) - Math.log(K)) / G;
    return nr - Bt.bottom - (0.15 + 0.85 * J) * B;
  }, $ = ee.useMemo(() => {
    const H = /* @__PURE__ */ new Map();
    for (const P of j) H.set(P.day, [...H.get(P.day) ?? [], P]);
    const J = /* @__PURE__ */ new Map();
    for (const P of H.values())
      P.forEach((U, re) => J.set(U.id, (re - (P.length - 1) / 2) * (Rr + 6)));
    return J;
  }, [j]), Y = (H) => {
    const J = Tl(H.theme ?? "other");
    return H.state === "actual" ? {
      stemOpacity: 1,
      stem: "var(--nb-ink)",
      ring: J,
      chipFill: "var(--nb-panel-2)",
      initialInk: "var(--nb-text)"
    } : H.state === "expected" ? {
      stemOpacity: 0.35,
      stem: "var(--nb-ink)",
      ring: "var(--nb-ink)",
      chipFill: "var(--nb-bg)",
      initialInk: "var(--nb-muted)"
    } : {
      stemOpacity: 0.5,
      stem: "var(--nb-warn)",
      ring: "var(--nb-warn)",
      chipFill: "var(--nb-bg)",
      initialInk: "var(--nb-warn)"
    };
  }, ne = j.length === 0 && w.length === 0 && T.length === 0;
  return /* @__PURE__ */ z.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ z.jsx("h2", { children: t.title ?? "Recurring bills" }),
      /* @__PURE__ */ z.jsxs("span", { className: "head-right", children: [
        /* @__PURE__ */ z.jsx(P0, { month: n, onChange: r }),
        h && /* @__PURE__ */ z.jsx(
          Jo,
          {
            hass: e,
            entry: t.entry,
            overview: h,
            autoConcealMinutes: t.auto_conceal_minutes,
            onChanged: b
          }
        )
      ] })
    ] }),
    g && /* @__PURE__ */ z.jsx("div", { className: "error-box", children: g }),
    !g && !y && /* @__PURE__ */ z.jsx("div", { className: "status", children: "Loading…" }),
    !g && y && ne && /* @__PURE__ */ z.jsx("div", { className: "status", children: "No recurring activity this month." }),
    !g && y && !ne && /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      (j.length > 0 || w.length > 0) && /* @__PURE__ */ z.jsxs(
        "svg",
        {
          viewBox: `0 0 ${$s} ${nr}`,
          className: "spend-cal-svg",
          role: "img",
          "aria-label": "Recurring bills and income by day of month",
          children: [
            [1, 8, 15, 22, 29].map((H) => /* @__PURE__ */ z.jsxs("g", { children: [
              /* @__PURE__ */ z.jsx(
                "line",
                {
                  x1: F(H),
                  y1: Bt.top - 8,
                  x2: F(H),
                  y2: nr - Bt.bottom,
                  stroke: "var(--nb-border)",
                  strokeWidth: "1",
                  opacity: "0.45"
                }
              ),
              /* @__PURE__ */ z.jsx("text", { x: F(H), y: nr - 8, textAnchor: "middle", fill: "var(--nb-muted)", fontSize: "12", children: H })
            ] }, H)),
            /* @__PURE__ */ z.jsx(
              "line",
              {
                x1: Bt.left,
                y1: nr - Bt.bottom,
                x2: $s - Bt.right,
                y2: nr - Bt.bottom,
                stroke: "var(--nb-border)",
                strokeWidth: "1"
              }
            ),
            C > 0 && /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
              /* @__PURE__ */ z.jsx(
                "line",
                {
                  x1: F(C),
                  y1: 16,
                  x2: F(C),
                  y2: nr - Bt.bottom,
                  stroke: "var(--nb-accent)",
                  strokeWidth: "1.5",
                  opacity: "0.75"
                }
              ),
              /* @__PURE__ */ z.jsx("text", { x: F(C), y: 12, textAnchor: "middle", fill: "var(--nb-accent)", fontSize: "11", children: "today" })
            ] }),
            j.map((H) => {
              const J = Y(H), P = F(H.day) + ($.get(H.id) ?? 0), U = V(H.amount), re = P < Bt.left + 34 ? "start" : P > $s - Bt.right - 34 ? "end" : "middle", se = o === H.id, pe = `clip-${H.id.replace(/\W+/g, "-")}`;
              return /* @__PURE__ */ z.jsxs(
                "g",
                {
                  onMouseEnter: () => l(H.id),
                  onMouseLeave: () => l(null),
                  opacity: o === null || se ? 1 : 0.35,
                  className: "spend-cal-mark",
                  children: [
                    /* @__PURE__ */ z.jsx(
                      "line",
                      {
                        x1: P,
                        y1: nr - Bt.bottom,
                        x2: P,
                        y2: U + Rr / 2 + 2,
                        stroke: J.stem,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        opacity: J.stemOpacity
                      }
                    ),
                    /* @__PURE__ */ z.jsx("circle", { cx: P, cy: U, r: Rr / 2 + 2, fill: J.chipFill, stroke: J.ring, strokeWidth: "2" }),
                    H.logo && !c.has(H.merchantKey) ? /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                      /* @__PURE__ */ z.jsx("clipPath", { id: pe, children: /* @__PURE__ */ z.jsx("circle", { cx: P, cy: U, r: Rr / 2 }) }),
                      /* @__PURE__ */ z.jsx(
                        "image",
                        {
                          href: H.logo,
                          x: P - Rr / 2,
                          y: U - Rr / 2,
                          width: Rr,
                          height: Rr,
                          clipPath: `url(#${pe})`,
                          onError: () => f((fe) => new Set(fe).add(H.merchantKey))
                        }
                      )
                    ] }) : /* @__PURE__ */ z.jsx(
                      "text",
                      {
                        x: P,
                        y: U + 5,
                        textAnchor: "middle",
                        fill: J.initialInk,
                        fontSize: "14",
                        fontWeight: "600",
                        children: H.name.charAt(0).toUpperCase()
                      }
                    ),
                    !E && /* @__PURE__ */ z.jsxs("text", { x: P, y: U - Rr / 2 - 6, textAnchor: re, fill: "var(--nb-text)", fontSize: "12", children: [
                      H.state === "expected" ? "~" : "",
                      Gt(H.amount, E),
                      W3[H.frequency] ?? ""
                    ] }),
                    se && /* @__PURE__ */ z.jsx(
                      "text",
                      {
                        x: P,
                        y: nr - Bt.bottom + 16,
                        textAnchor: re,
                        fill: "var(--nb-text)",
                        fontSize: "12",
                        fontWeight: "600",
                        children: H.name
                      }
                    ),
                    /* @__PURE__ */ z.jsx("title", { children: `${H.name} — ${LO[H.state]}, day ${H.day}${E ? "" : `: ${H.state === "actual" ? "" : "~"}${Gt(H.amount, E)}`} (${H.frequency})` })
                  ]
                },
                H.id
              );
            }),
            w.map((H) => {
              const J = F(H.day), P = H.state === "actual" ? 1 : H.state === "expected" ? 0.6 : 0.45;
              return /* @__PURE__ */ z.jsxs("g", { opacity: P, children: [
                /* @__PURE__ */ z.jsx(
                  "circle",
                  {
                    cx: J,
                    cy: kO,
                    r: 7,
                    fill: H.state === "actual" ? "var(--nb-green)" : "var(--nb-bg)",
                    stroke: "var(--nb-green)",
                    strokeWidth: "2"
                  }
                ),
                !E && /* @__PURE__ */ z.jsx("text", { x: J, y: kO + 18, textAnchor: "middle", fill: "var(--nb-green)", fontSize: "10", children: Gt(H.amount, E) }),
                /* @__PURE__ */ z.jsx("title", { children: `${H.name} — income, ${LO[H.state]} (day ${H.day})${E ? "" : `: ${Gt(H.amount, E)}`}` })
              ] }, H.id);
            })
          ]
        }
      ),
      T.length > 0 && /* @__PURE__ */ z.jsx("div", { className: "spend-strip", children: T.map((H) => /* @__PURE__ */ z.jsxs(
        "span",
        {
          className: `spend-strip-item ${H.active ? "" : "lapsed"}`,
          title: H.active ? `${H.frequency}, last on ${H.last_seen.slice(0, 10)}` : `looks cancelled — last charged ${H.last_seen.slice(0, 10)}`,
          children: [
            H.merchant ?? H.merchant_key,
            /* @__PURE__ */ z.jsxs("span", { className: "muted", children: [
              E ? ` ${H.frequency}` : ` ${Gt(parseFloat(H.average_amount), E)}/${{ weekly: "wk", biweekly: "2wk", monthly: "mo", quarterly: "qtr", annual: "yr" }[H.frequency]}`,
              H.active ? "" : " · lapsed"
            ] })
          ]
        },
        `${H.merchant_key}-${H.is_income}`
      )) })
    ] })
  ] });
}
const ti = 820, rr = 200, it = { top: 26, right: 16, bottom: 24, left: 56 };
function Q3(e) {
  const [t, n] = e.split("-").map(Number);
  return {
    from: new Date(Date.UTC(t, n - 1, 1)),
    to: new Date(Date.UTC(t, n, 1))
  };
}
function J3({
  hass: e,
  config: t
}) {
  const [n, r] = ee.useState(El()), [o, l] = ee.useState(null), c = ee.useRef(null), [f, d] = ee.useState(() => {
    const G = Number(localStorage.getItem("netwrth-cardcycle-card"));
    return Number.isFinite(G) && G > 0 ? G : null;
  }), h = (G) => {
    d(G), localStorage.setItem("netwrth-cardcycle-card", String(G));
  }, y = ee.useCallback(
    (G, V) => Promise.all([zM(G, V, "6m"), BM(G, V, n)]).then(
      ([$, Y]) => ({
        data: { series: $.series, txns: Y.transactions },
        censored: Y.censored
      })
    ),
    [n]
  ), { overview: v, data: g, masked: b, error: _, refresh: S } = td(
    e,
    t.entry,
    y
  ), x = nd(v), A = ee.useMemo(
    () => x.filter((G) => G.kind === "credit"),
    [x]
  ), E = (g == null ? void 0 : g.series) ?? [], M = (g == null ? void 0 : g.txns) ?? [], j = b, { from: w, to: T } = Q3(n), R = ee.useMemo(() => A.map((G) => {
    var pe;
    const V = (((pe = E.find((fe) => fe.account_id === G.id)) == null ? void 0 : pe.points) ?? []).map((fe) => ({ ts: new Date(fe.ts), debt: Math.max(0, -parseFloat(fe.balance)) })).filter((fe) => !isNaN(fe.debt)).sort((fe, _e) => fe.ts.getTime() - _e.ts.getTime()), $ = V.filter((fe) => fe.ts < w), Y = V.filter((fe) => fe.ts >= w && fe.ts < T), ne = V.filter((fe) => fe.ts >= T), H = M.filter((fe) => fe.account_id === G.id && !fe.pending).map((fe) => ({ ...fe, v: parseFloat(fe.amount), date: new Date(fe.posted_at) })).sort((fe, _e) => fe.date.getTime() - _e.date.getTime());
    let J = 0, P = 0;
    const U = [];
    for (const fe of H)
      fe.v > 0 ? J += fe.v : (fe.theme === "debt" || fe.theme === "transfers") && (P += -fe.v, U.push({ date: fe.date, amount: -fe.v }));
    const re = [...$.length ? [{ ...$[$.length - 1], ts: w }] : [], ...Y];
    let se = [];
    if ($.length === 0 && (Y.length > 0 || ne.length > 0)) {
      const fe = Y.length > 0 ? Y[0].ts : T, _e = Y.length > 0 ? Y[0].debt : ne[0].debt;
      let Ce = _e;
      const ce = [];
      for (const he of [...H].reverse())
        he.date >= fe || he.date < w || (Ce = Math.max(0, Ce - he.v), ce.unshift({ ts: he.date, debt: Ce }));
      se = [{ ts: w, debt: ce.length ? ce[0].debt : Ce }, ...ce], Y.length > 0 && se.push({ ts: fe, debt: _e });
    }
    return { card: G, line: re, recon: se, spent: J, paid: P, payments: U };
  }), [A, E, M, w, T]).filter(
    (G) => G.line.length > 0 || G.recon.length > 0 || G.spent > 0 || G.paid > 0
  ), N = R.find((G) => G.card.id === f) ?? R[0], K = N ? [N] : [], L = Math.round((T.getTime() - w.getTime()) / 864e5), B = (G) => it.left + Math.min(Math.max((G.getTime() - w.getTime()) / 864e5, 0), L) / L * (ti - it.left - it.right), F = (G, V) => {
    let $ = null;
    for (const Y of G)
      if (Y.ts.getTime() <= V) $ = Y.debt;
      else break;
    return $;
  };
  return /* @__PURE__ */ z.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ z.jsx("h2", { children: t.title ?? "Card credit" }),
      /* @__PURE__ */ z.jsxs("span", { className: "head-right", children: [
        /* @__PURE__ */ z.jsx(P0, { month: n, onChange: r }),
        v && /* @__PURE__ */ z.jsx(
          Jo,
          {
            hass: e,
            entry: t.entry,
            overview: v,
            autoConcealMinutes: t.auto_conceal_minutes,
            onChanged: S
          }
        )
      ] })
    ] }),
    _ && /* @__PURE__ */ z.jsx("div", { className: "error-box", children: _ }),
    !_ && !g && /* @__PURE__ */ z.jsx("div", { className: "status", children: "Loading…" }),
    !_ && g && R.length === 0 && /* @__PURE__ */ z.jsx("div", { className: "status", children: "No credit-card activity this month." }),
    !_ && g && R.length > 1 && /* @__PURE__ */ z.jsx("div", { className: "spend-card-chips", children: R.map(({ card: G }) => /* @__PURE__ */ z.jsx(
      "button",
      {
        className: `spend-card-chip ${N && G.id === N.card.id ? "on" : ""}`,
        title: "Show this card",
        onClick: () => h(G.id),
        children: G.nickname ?? G.name
      },
      G.id
    )) }),
    !_ && g && K.map(({ card: G, line: V, recon: $, spent: Y, paid: ne, payments: H }) => {
      const J = Math.max(
        1,
        ...V.map((he) => he.debt),
        ...$.map((he) => he.debt),
        ...H.map((he) => he.amount)
      ), P = (he) => rr - it.bottom - he / J * (rr - it.top - it.bottom), U = (he, ge) => {
        let le = "";
        return he.forEach((ze, Oe) => {
          le += Oe === 0 ? `M${B(ze.ts)},${P(ze.debt)}` : `H${B(ze.ts)}V${P(ze.debt)}`;
        }), le && ge && (le += `H${ti - it.right}`), le;
      }, re = U($, V.length === 0), se = U(V, !0), pe = [...$, ...V].sort((he, ge) => he.ts.getTime() - ge.ts.getTime()), fe = pe.length ? `${U(pe, !0)} V${rr - it.bottom} H${B(pe[0].ts)} Z` : "", _e = /* @__PURE__ */ new Date(), Ce = _e >= w && _e < T ? B(_e) : null, ce = G.nickname ?? G.name;
      return /* @__PURE__ */ z.jsxs("div", { className: "spend-card-row", children: [
        /* @__PURE__ */ z.jsxs("div", { className: "spend-card-head", children: [
          /* @__PURE__ */ z.jsx("span", { children: ce }),
          /* @__PURE__ */ z.jsxs("span", { className: "muted", children: [
            "spent ",
            Gt(Y, j),
            " · paid ",
            Gt(ne, j),
            (V.length > 0 || $.length > 0) && ` · owing ${Gt((V[V.length - 1] ?? $[$.length - 1]).debt, j)}`
          ] })
        ] }),
        /* @__PURE__ */ z.jsxs(
          "svg",
          {
            viewBox: `0 0 ${ti} ${rr}`,
            className: "spend-cal-svg",
            role: "img",
            "aria-label": `${ce} balance through the month`,
            onMouseLeave: () => {
              c.current && clearTimeout(c.current), c.current = setTimeout(() => l(null), 80);
            },
            onMouseMove: (he) => {
              c.current && clearTimeout(c.current);
              const ge = he.currentTarget.getBoundingClientRect(), le = ge.width / ti, ze = (he.clientX - ge.left) / le, Oe = (he.clientY - ge.top) / le;
              if (ze < it.left || ze > ti - it.right) {
                l(null);
                return;
              }
              const Xe = w.getTime() + (ze - it.left) / (ti - it.left - it.right) * L * 864e5, nt = new Date(Xe).getUTCDate(), Et = P, Xt = H.find(
                (Pt) => Math.abs(B(Pt.date) - ze) < 12 && Math.abs(Et(Pt.amount) - Oe) < 14
              );
              let Wt, _n;
              if (Xt)
                Wt = [
                  { label: "day", value: String(Xt.date.getUTCDate()) },
                  { label: "payment", value: `-${Gt(Xt.amount, j)}` }
                ], _n = "a payment landed on the card";
              else {
                const Pt = V.length > 0 && Xe >= V[0].ts.getTime(), On = F(Pt ? V : $, Xe);
                if (On === null) {
                  l(null);
                  return;
                }
                Wt = [
                  { label: "day", value: String(nt) },
                  { label: "owing", value: Gt(On, j) }
                ], _n = Pt ? "balance reported by the card" : "estimated from transactions — before the first report we have";
              }
              l({ left: he.clientX + 14, top: he.clientY - 12, title: ce, rows: Wt, note: _n });
            },
            children: [
              /* @__PURE__ */ z.jsx("defs", { children: /* @__PURE__ */ z.jsxs("linearGradient", { id: `ccfill-${G.id}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ z.jsx("stop", { offset: "0", stopColor: "var(--nb-ink)", stopOpacity: "0.26" }),
                /* @__PURE__ */ z.jsx("stop", { offset: "1", stopColor: "var(--nb-ink)", stopOpacity: "0" })
              ] }) }),
              [1, 8, 15, 22, 29].map((he) => {
                const ge = B(new Date(w.getTime() + (he - 1) * 864e5));
                return /* @__PURE__ */ z.jsxs("g", { children: [
                  /* @__PURE__ */ z.jsx(
                    "line",
                    {
                      x1: ge,
                      y1: it.top,
                      x2: ge,
                      y2: rr - it.bottom,
                      stroke: "var(--nb-border)",
                      strokeWidth: "1",
                      opacity: "0.45"
                    }
                  ),
                  /* @__PURE__ */ z.jsx("text", { x: ge, y: rr - 6, textAnchor: "middle", fill: "var(--nb-muted)", fontSize: "11", children: he })
                ] }, he);
              }),
              /* @__PURE__ */ z.jsx(
                "line",
                {
                  x1: it.left,
                  y1: rr - it.bottom,
                  x2: ti - it.right,
                  y2: rr - it.bottom,
                  stroke: "var(--nb-border)",
                  strokeWidth: "1"
                }
              ),
              !j && /* @__PURE__ */ z.jsx("text", { x: it.left - 6, y: it.top + 4, textAnchor: "end", fill: "var(--nb-muted)", fontSize: "11", children: Gt(J, j) }),
              fe && /* @__PURE__ */ z.jsx("path", { d: fe, fill: `url(#ccfill-${G.id})` }),
              re && /* @__PURE__ */ z.jsx(
                "path",
                {
                  d: re,
                  fill: "none",
                  stroke: "var(--nb-ink)",
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                  opacity: "0.45"
                }
              ),
              se && /* @__PURE__ */ z.jsx(
                "path",
                {
                  d: se,
                  fill: "none",
                  stroke: "var(--nb-ink)",
                  strokeWidth: "2",
                  strokeLinejoin: "round",
                  opacity: "0.95"
                }
              ),
              Ce !== null && /* @__PURE__ */ z.jsxs("g", { children: [
                /* @__PURE__ */ z.jsx(
                  "line",
                  {
                    x1: Ce,
                    y1: it.top - 6,
                    x2: Ce,
                    y2: rr - it.bottom,
                    stroke: "var(--nb-accent)",
                    strokeWidth: "1.5",
                    opacity: "0.8"
                  }
                ),
                /* @__PURE__ */ z.jsx(
                  "text",
                  {
                    x: Ce,
                    y: it.top - 10,
                    textAnchor: "middle",
                    fill: "var(--nb-accent)",
                    fontSize: "11",
                    children: "today"
                  }
                )
              ] }),
              H.map((he, ge) => /* @__PURE__ */ z.jsxs("g", { children: [
                /* @__PURE__ */ z.jsx(
                  "line",
                  {
                    x1: B(he.date),
                    y1: P(he.amount),
                    x2: B(he.date),
                    y2: rr - it.bottom,
                    stroke: "var(--nb-green)",
                    strokeWidth: "2",
                    opacity: "0.55"
                  }
                ),
                /* @__PURE__ */ z.jsx(
                  "circle",
                  {
                    cx: B(he.date),
                    cy: P(he.amount),
                    r: 4.5,
                    fill: "var(--nb-bg)",
                    stroke: "var(--nb-green)",
                    strokeWidth: "2"
                  }
                ),
                !j && /* @__PURE__ */ z.jsxs(
                  "text",
                  {
                    x: B(he.date),
                    y: P(he.amount) - 10,
                    textAnchor: "middle",
                    fill: "var(--nb-green)",
                    fontSize: "11",
                    children: [
                      "-",
                      Gt(he.amount, j)
                    ]
                  }
                ),
                /* @__PURE__ */ z.jsx("title", { children: `payment ${he.date.toISOString().slice(0, 10)}${j ? "" : `: ${Gt(he.amount, j)}`}` })
              ] }, ge))
            ]
          }
        )
      ] }, G.id);
    }),
    o && /* @__PURE__ */ z.jsxs(
      "div",
      {
        className: "spend-hoverbubble",
        style: {
          left: Math.min(o.left, window.innerWidth - 240),
          top: o.top
        },
        children: [
          /* @__PURE__ */ z.jsx("div", { className: "spend-bubble-title", children: o.title }),
          /* @__PURE__ */ z.jsx("div", { className: "spend-bubble-rows", children: o.rows.map((G) => /* @__PURE__ */ z.jsxs("div", { className: "spend-bubble-row", children: [
            /* @__PURE__ */ z.jsx("span", { className: "muted", children: G.label }),
            /* @__PURE__ */ z.jsx("span", { children: G.value })
          ] }, G.label)) }),
          /* @__PURE__ */ z.jsx("div", { className: "muted spend-hoverbubble-note", children: o.note })
        ]
      }
    )
  ] });
}
function e$({ tx: e }) {
  const [t, n] = ee.useState(!1), r = e.merchant ?? e.merchant_key;
  return e.logo_url && !t ? /* @__PURE__ */ z.jsx(
    "img",
    {
      className: "spend-txn-logo",
      src: e.logo_url,
      alt: "",
      onError: () => n(!0)
    }
  ) : /* @__PURE__ */ z.jsx(
    "span",
    {
      className: "spend-txn-logo spend-txn-initial",
      style: { borderColor: Tl(e.theme ?? "other") },
      children: (r.charAt(0) || "?").toUpperCase()
    }
  );
}
function t$({
  rows: e,
  totalSpend: t,
  censored: n
}) {
  const r = e.reduce((g, b) => g + parseFloat(b.total), 0);
  if (r <= 0) return null;
  const o = 5, l = e.slice(0, o).map((g) => ({ theme: g.theme, value: parseFloat(g.total), color: Tl(g.theme) })), c = e.slice(o).reduce((g, b) => g + parseFloat(b.total), 0);
  c > 0 && l.push({ theme: "everything else", value: c, color: "#8b9bb4" });
  const f = 80, d = 50, h = 90;
  let y = -Math.PI / 2;
  const v = l.map((g) => {
    const b = g.value / r * Math.PI * 2, _ = y, S = y + b;
    y = S;
    const x = b > Math.PI ? 1 : 0, A = (j, w) => `${h + j * Math.cos(w)},${h + j * Math.sin(w)}`, E = `M${A(f, _)} A${f},${f} 0 ${x} 1 ${A(f, S)} L${A(d, S)} A${d},${d} 0 ${x} 0 ${A(d, _)} Z`, M = (_ + S) / 2;
    return { ...g, d: E, mid: M, share: g.value / r };
  });
  return /* @__PURE__ */ z.jsxs("svg", { viewBox: "0 0 180 180", className: "spend-donut", role: "img", "aria-label": "Share of spending by theme", children: [
    v.map((g) => /* @__PURE__ */ z.jsx(
      "path",
      {
        d: g.d,
        fill: g.color,
        fillOpacity: 0.85,
        stroke: "var(--nb-bg)",
        strokeWidth: "2",
        children: /* @__PURE__ */ z.jsx("title", { children: `${g.theme} — ${Math.round(g.share * 100)}%${n ? "" : ` (${Gt(g.value, n)})`}` })
      },
      g.theme
    )),
    v.filter((g) => g.share >= 0.08).map((g) => /* @__PURE__ */ z.jsxs(
      "text",
      {
        x: h + (f + d) / 2 * Math.cos(g.mid),
        y: h + (f + d) / 2 * Math.sin(g.mid) + 4,
        textAnchor: "middle",
        fill: "#0b0f17",
        fontSize: "11",
        fontWeight: "600",
        pointerEvents: "none",
        children: [
          Math.round(g.share * 100),
          "%"
        ]
      },
      `l-${g.theme}`
    )),
    /* @__PURE__ */ z.jsx("text", { x: h, y: h - 2, textAnchor: "middle", fill: "var(--nb-text)", fontSize: "15", fontWeight: "600", children: n ? So : ir(t) }),
    /* @__PURE__ */ z.jsx("text", { x: h, y: h + 14, textAnchor: "middle", fill: "var(--nb-muted)", fontSize: "10", children: "spent" })
  ] });
}
function n$({
  hass: e,
  config: t
}) {
  const [n, r] = ee.useState(El()), [o, l] = ee.useState(null), [c, f] = ee.useState(null), d = ee.useCallback(
    (N, K) => Promise.all([R3(N, K, n), qM(N, K, n)]).then(
      ([L, B]) => ({ data: { summary: L, recurring: B }, censored: L.censored })
    ),
    [n]
  ), { overview: h, data: y, masked: v, error: g, refresh: b } = td(
    e,
    t.entry,
    d
  ), _ = (N) => {
    r(N), l(null), f(null);
  }, S = (N) => {
    if (o === N) {
      l(null), f(null);
      return;
    }
    l(N), f(null), BM(e, t.entry, n, N).then((K) => f(K.transactions)).catch(() => f([]));
  }, x = (y == null ? void 0 : y.summary) ?? null, A = (y == null ? void 0 : y.recurring) ?? null, E = x ? x.themes.filter((N) => !X3.has(N.theme) && parseFloat(N.total) > 0) : [], M = Math.max(1e-9, ...E.map((N) => parseFloat(N.total))), w = (A ? A.streams.filter((N) => !N.is_income) : []).filter((N) => N.active), T = w.reduce(
    (N, K) => N + parseFloat(K.average_amount) * (V3[K.frequency] ?? 1),
    0
  ), C = A ? A.expected.filter((N) => !N.is_income && !N.overdue).reduce((N, K) => N + K.amount, 0) : 0, R = x && n === El() && C > 0 ? parseFloat(x.total_spend) + C : null;
  return /* @__PURE__ */ z.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ z.jsx("h2", { children: t.title ?? "Spending" }),
      /* @__PURE__ */ z.jsxs("span", { className: "head-right", children: [
        /* @__PURE__ */ z.jsx(P0, { month: n, onChange: _ }),
        h && /* @__PURE__ */ z.jsx(
          Jo,
          {
            hass: e,
            entry: t.entry,
            overview: h,
            autoConcealMinutes: t.auto_conceal_minutes,
            onChanged: b
          }
        )
      ] })
    ] }),
    g && /* @__PURE__ */ z.jsx("div", { className: "error-box", children: g }),
    !g && !x && /* @__PURE__ */ z.jsx("div", { className: "status", children: "Loading…" }),
    !g && x && /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      t.show_stats !== !1 && /* @__PURE__ */ z.jsxs("div", { className: "spend-stats", children: [
        /* @__PURE__ */ z.jsxs("div", { className: "spend-stat", children: [
          /* @__PURE__ */ z.jsx("span", { className: "spend-stat-label", children: "Spent" }),
          /* @__PURE__ */ z.jsx("span", { className: "spend-stat-value", children: v ? So : ir(parseFloat(x.total_spend)) }),
          R !== null && !v && /* @__PURE__ */ z.jsxs("span", { className: "muted", children: [
            "on track ~",
            ir(R)
          ] })
        ] }),
        /* @__PURE__ */ z.jsxs("div", { className: "spend-stat", children: [
          /* @__PURE__ */ z.jsx("span", { className: "spend-stat-label", children: "Income" }),
          /* @__PURE__ */ z.jsx("span", { className: "spend-stat-value up", children: v ? So : ir(parseFloat(x.total_income)) })
        ] }),
        /* @__PURE__ */ z.jsxs("div", { className: "spend-stat", children: [
          /* @__PURE__ */ z.jsx("span", { className: "spend-stat-label", children: "Recurring bills" }),
          /* @__PURE__ */ z.jsx("span", { className: "spend-stat-value", children: v ? So : `${ir(T)}/mo` }),
          /* @__PURE__ */ z.jsxs("span", { className: "muted", children: [
            w.length,
            " active"
          ] })
        ] })
      ] }),
      E.length === 0 && /* @__PURE__ */ z.jsx("div", { className: "status", children: "No spending recorded this month." }),
      E.length > 0 && /* @__PURE__ */ z.jsxs("div", { className: "spend-themes-split", children: [
        t.show_donut !== !1 && /* @__PURE__ */ z.jsx(
          t$,
          {
            rows: E,
            totalSpend: parseFloat(x.total_spend),
            censored: v
          }
        ),
        /* @__PURE__ */ z.jsx("div", { className: "spend-themes-bars", children: E.map((N) => /* @__PURE__ */ z.jsxs("div", { children: [
          /* @__PURE__ */ z.jsxs(
            "button",
            {
              className: `spend-row ${o === N.theme ? "open" : ""}`,
              onClick: () => S(N.theme),
              children: [
                /* @__PURE__ */ z.jsxs("span", { className: "spend-row-label", children: [
                  /* @__PURE__ */ z.jsx(
                    "span",
                    {
                      className: "spend-theme-dot",
                      style: { background: Tl(N.theme) }
                    }
                  ),
                  N.theme
                ] }),
                /* @__PURE__ */ z.jsx("span", { className: "spend-row-bar", children: /* @__PURE__ */ z.jsx(
                  "span",
                  {
                    className: "spend-row-fill",
                    style: {
                      width: `${parseFloat(N.total) / M * 100}%`,
                      "--bar-color": Tl(N.theme)
                    }
                  }
                ) }),
                /* @__PURE__ */ z.jsx("span", { className: "spend-row-amount", children: Gt(parseFloat(N.total), v) }),
                /* @__PURE__ */ z.jsxs("span", { className: "muted spend-row-count", children: [
                  N.count,
                  "×"
                ] })
              ]
            }
          ),
          o === N.theme && /* @__PURE__ */ z.jsxs("div", { className: "spend-txns", children: [
            c === null && /* @__PURE__ */ z.jsx("div", { className: "muted", children: "Loading…" }),
            c !== null && [...c].sort(
              (K, L) => Number(L.pending) - Number(K.pending) || L.posted_at.localeCompare(K.posted_at)
            ).map((K) => /* @__PURE__ */ z.jsxs("div", { className: "spend-txn", children: [
              /* @__PURE__ */ z.jsx("span", { className: "muted spend-txn-date", children: new Date(K.posted_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                timeZone: "UTC"
              }) }),
              /* @__PURE__ */ z.jsx(e$, { tx: K }),
              /* @__PURE__ */ z.jsxs("span", { className: "spend-txn-desc", title: K.description, children: [
                K.merchant ?? K.description,
                K.pending ? " · pending" : ""
              ] }),
              /* @__PURE__ */ z.jsx("span", { className: "spend-txn-amount", children: Gt(parseFloat(K.amount), v) })
            ] }, K.id))
          ] })
        ] }, N.theme)) })
      ] })
    ] })
  ] });
}
function kM(e) {
  const t = /* @__PURE__ */ new Set();
  for (const o of e)
    for (const l of o.points) t.add(new Date(l.ts).getTime());
  const r = [...t].sort((o, l) => o - l).map((o) => ({ ts: o, values: {} }));
  for (const o of e) {
    const l = o.points.map((d) => ({ ts: new Date(d.ts).getTime(), v: parseFloat(d.balance) })).sort((d, h) => d.ts - h.ts);
    let c = 0, f = l.length > 0 ? l[0].v : 0;
    for (const d of r) {
      for (; c < l.length && l[c].ts <= d.ts; )
        f = l[c].v, c++;
      d.values[o.account_id] = f;
    }
  }
  return r;
}
function ar(e, t, n = () => !0) {
  let r = 0;
  for (const o of t)
    n(o) && (r += e.values[o.id] ?? 0);
  return r;
}
function LM(e) {
  const t = e === "1d" || e === "1w" ? "day" : e === "1m" || e === "3m" ? "week" : "month";
  return (n) => {
    const r = new Date(n);
    if (t === "day") return new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
    if (t === "week") {
      const o = (r.getDay() + 6) % 7;
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() - o).getTime();
    }
    return new Date(r.getFullYear(), r.getMonth(), 1).getTime();
  };
}
function r$(e, t, n) {
  if (e.length === 0) return [];
  const r = LM(n), o = /* @__PURE__ */ new Map();
  for (const f of e) o.set(r(f.ts), ar(f, t));
  const l = [...o.keys()].sort((f, d) => f - d);
  let c = ar(e[0], t);
  return l.map((f) => {
    const d = o.get(f), h = d - c;
    return c = d, { ts: f, flow: h };
  });
}
function a$(e, t, n) {
  if (e.length === 0) return [];
  const r = LM(n), o = /* @__PURE__ */ new Map();
  for (const f of e) o.set(r(f.ts), f);
  const l = [...o.keys()].sort((f, d) => f - d);
  let c = e[0];
  return l.map((f) => {
    const d = o.get(f), h = {};
    let y = 0;
    for (const v of t) {
      const g = (d.values[v.id] ?? 0) - (c.values[v.id] ?? 0);
      h[v.id] = g, y += g;
    }
    return c = d, { ts: f, deltas: h, net: y };
  });
}
function UO(e, t) {
  let n = 0;
  for (const r of t) {
    const o = e.values[r.id] ?? 0;
    o < 0 && (n += o);
  }
  return n;
}
function i$({
  hass: e,
  config: t
}) {
  const n = To.find((_) => _.key === (t.view ?? "all")) ?? To[2], [r, o] = ee.useState(t.range ?? "1m"), { overview: l, series: c, masked: f, error: d, refresh: h } = D0(e, t.entry, r), y = nd(l), v = ee.useMemo(() => y.filter(n.pick), [y, n]), g = ee.useMemo(() => {
    if (!c) return null;
    const _ = new Set(v.map((E) => E.id)), S = kM(c.filter((E) => _.has(E.account_id)));
    if (S.length === 0) return null;
    const x = ar(S[0], v), A = ar(S[S.length - 1], v);
    return {
      last: A,
      diff: A - x,
      delta: x !== 0 ? (A - x) / Math.abs(x) : null
    };
  }, [c, v]), b = g != null && g.delta != null && !n.flow;
  return /* @__PURE__ */ z.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ z.jsx("h2", { children: t.title ?? n.label }),
      /* @__PURE__ */ z.jsxs("span", { className: "head-right", children: [
        t.show_controls !== !1 && t.show_range_selector !== !1 && /* @__PURE__ */ z.jsx("span", { className: "controls", children: /* @__PURE__ */ z.jsx(Js, { options: C0, value: r, onChange: o }) }),
        l && /* @__PURE__ */ z.jsx(
          Jo,
          {
            hass: e,
            entry: t.entry,
            overview: l,
            autoConcealMinutes: t.auto_conceal_minutes,
            onChanged: h
          }
        )
      ] })
    ] }),
    d && /* @__PURE__ */ z.jsx("div", { className: "error-box", children: d }),
    !d && !g && /* @__PURE__ */ z.jsx("div", { className: "status", children: "Loading…" }),
    !d && g && f && // Censored: the dollar amount is redacted anyway, so promote the real
    // percent change to the big slot and drop the footer line entirely.
    /* @__PURE__ */ z.jsx(
      "div",
      {
        className: `stat-value ${b ? g.delta >= 0 ? "up" : "down" : ""}`,
        children: b ? Al(g.delta) : So
      }
    ),
    !d && g && !f && /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
      /* @__PURE__ */ z.jsx("div", { className: "stat-value", children: ir(g.last) }),
      b && /* @__PURE__ */ z.jsxs("div", { className: `stat-delta ${g.delta >= 0 ? "up" : "down"}`, children: [
        ub(g.diff),
        " (",
        Al(g.delta),
        ") over ",
        r
      ] })
    ] })
  ] });
}
function UM(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = UM(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $e() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = UM(e)) && (r && (r += " "), r += t);
  return r;
}
var rv, IO;
function un() {
  if (IO) return rv;
  IO = 1;
  var e = Array.isArray;
  return rv = e, rv;
}
var av, HO;
function IM() {
  if (HO) return av;
  HO = 1;
  var e = typeof Rs == "object" && Rs && Rs.Object === Object && Rs;
  return av = e, av;
}
var iv, GO;
function pr() {
  if (GO) return iv;
  GO = 1;
  var e = IM(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return iv = n, iv;
}
var ov, YO;
function sc() {
  if (YO) return ov;
  YO = 1;
  var e = pr(), t = e.Symbol;
  return ov = t, ov;
}
var uv, KO;
function o$() {
  if (KO) return uv;
  KO = 1;
  var e = sc(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, o = e ? e.toStringTag : void 0;
  function l(c) {
    var f = n.call(c, o), d = c[o];
    try {
      c[o] = void 0;
      var h = !0;
    } catch {
    }
    var y = r.call(c);
    return h && (f ? c[o] = d : delete c[o]), y;
  }
  return uv = l, uv;
}
var lv, XO;
function u$() {
  if (XO) return lv;
  XO = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return lv = n, lv;
}
var cv, VO;
function Xr() {
  if (VO) return cv;
  VO = 1;
  var e = sc(), t = o$(), n = u$(), r = "[object Null]", o = "[object Undefined]", l = e ? e.toStringTag : void 0;
  function c(f) {
    return f == null ? f === void 0 ? o : r : l && l in Object(f) ? t(f) : n(f);
  }
  return cv = c, cv;
}
var sv, FO;
function Vr() {
  if (FO) return sv;
  FO = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return sv = e, sv;
}
var fv, WO;
function eu() {
  if (WO) return fv;
  WO = 1;
  var e = Xr(), t = Vr(), n = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || t(o) && e(o) == n;
  }
  return fv = r, fv;
}
var dv, ZO;
function N0() {
  if (ZO) return dv;
  ZO = 1;
  var e = un(), t = eu(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function o(l, c) {
    if (e(l))
      return !1;
    var f = typeof l;
    return f == "number" || f == "symbol" || f == "boolean" || l == null || t(l) ? !0 : r.test(l) || !n.test(l) || c != null && l in Object(c);
  }
  return dv = o, dv;
}
var hv, QO;
function Ca() {
  if (QO) return hv;
  QO = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return hv = e, hv;
}
var pv, JO;
function R0() {
  if (JO) return pv;
  JO = 1;
  var e = Xr(), t = Ca(), n = "[object AsyncFunction]", r = "[object Function]", o = "[object GeneratorFunction]", l = "[object Proxy]";
  function c(f) {
    if (!t(f))
      return !1;
    var d = e(f);
    return d == r || d == o || d == n || d == l;
  }
  return pv = c, pv;
}
var vv, ew;
function l$() {
  if (ew) return vv;
  ew = 1;
  var e = pr(), t = e["__core-js_shared__"];
  return vv = t, vv;
}
var yv, tw;
function c$() {
  if (tw) return yv;
  tw = 1;
  var e = l$(), t = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!t && t in r;
  }
  return yv = n, yv;
}
var mv, nw;
function HM() {
  if (nw) return mv;
  nw = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return mv = n, mv;
}
var gv, rw;
function s$() {
  if (rw) return gv;
  rw = 1;
  var e = R0(), t = c$(), n = Ca(), r = HM(), o = /[\\^$.*+?()[\]{}|]/g, l = /^\[object .+?Constructor\]$/, c = Function.prototype, f = Object.prototype, d = c.toString, h = f.hasOwnProperty, y = RegExp(
    "^" + d.call(h).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function v(g) {
    if (!n(g) || t(g))
      return !1;
    var b = e(g) ? y : l;
    return b.test(r(g));
  }
  return gv = v, gv;
}
var bv, aw;
function f$() {
  if (aw) return bv;
  aw = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return bv = e, bv;
}
var xv, iw;
function bi() {
  if (iw) return xv;
  iw = 1;
  var e = s$(), t = f$();
  function n(r, o) {
    var l = t(r, o);
    return e(l) ? l : void 0;
  }
  return xv = n, xv;
}
var Sv, ow;
function rd() {
  if (ow) return Sv;
  ow = 1;
  var e = bi(), t = e(Object, "create");
  return Sv = t, Sv;
}
var _v, uw;
function d$() {
  if (uw) return _v;
  uw = 1;
  var e = rd();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return _v = t, _v;
}
var Ov, lw;
function h$() {
  if (lw) return Ov;
  lw = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Ov = e, Ov;
}
var wv, cw;
function p$() {
  if (cw) return wv;
  cw = 1;
  var e = rd(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function o(l) {
    var c = this.__data__;
    if (e) {
      var f = c[l];
      return f === t ? void 0 : f;
    }
    return r.call(c, l) ? c[l] : void 0;
  }
  return wv = o, wv;
}
var Av, sw;
function v$() {
  if (sw) return Av;
  sw = 1;
  var e = rd(), t = Object.prototype, n = t.hasOwnProperty;
  function r(o) {
    var l = this.__data__;
    return e ? l[o] !== void 0 : n.call(l, o);
  }
  return Av = r, Av;
}
var Tv, fw;
function y$() {
  if (fw) return Tv;
  fw = 1;
  var e = rd(), t = "__lodash_hash_undefined__";
  function n(r, o) {
    var l = this.__data__;
    return this.size += this.has(r) ? 0 : 1, l[r] = e && o === void 0 ? t : o, this;
  }
  return Tv = n, Tv;
}
var Ev, dw;
function m$() {
  if (dw) return Ev;
  dw = 1;
  var e = d$(), t = h$(), n = p$(), r = v$(), o = y$();
  function l(c) {
    var f = -1, d = c == null ? 0 : c.length;
    for (this.clear(); ++f < d; ) {
      var h = c[f];
      this.set(h[0], h[1]);
    }
  }
  return l.prototype.clear = e, l.prototype.delete = t, l.prototype.get = n, l.prototype.has = r, l.prototype.set = o, Ev = l, Ev;
}
var jv, hw;
function g$() {
  if (hw) return jv;
  hw = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return jv = e, jv;
}
var Mv, pw;
function $0() {
  if (pw) return Mv;
  pw = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Mv = e, Mv;
}
var Cv, vw;
function ad() {
  if (vw) return Cv;
  vw = 1;
  var e = $0();
  function t(n, r) {
    for (var o = n.length; o--; )
      if (e(n[o][0], r))
        return o;
    return -1;
  }
  return Cv = t, Cv;
}
var Dv, yw;
function b$() {
  if (yw) return Dv;
  yw = 1;
  var e = ad(), t = Array.prototype, n = t.splice;
  function r(o) {
    var l = this.__data__, c = e(l, o);
    if (c < 0)
      return !1;
    var f = l.length - 1;
    return c == f ? l.pop() : n.call(l, c, 1), --this.size, !0;
  }
  return Dv = r, Dv;
}
var Pv, mw;
function x$() {
  if (mw) return Pv;
  mw = 1;
  var e = ad();
  function t(n) {
    var r = this.__data__, o = e(r, n);
    return o < 0 ? void 0 : r[o][1];
  }
  return Pv = t, Pv;
}
var Nv, gw;
function S$() {
  if (gw) return Nv;
  gw = 1;
  var e = ad();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Nv = t, Nv;
}
var Rv, bw;
function _$() {
  if (bw) return Rv;
  bw = 1;
  var e = ad();
  function t(n, r) {
    var o = this.__data__, l = e(o, n);
    return l < 0 ? (++this.size, o.push([n, r])) : o[l][1] = r, this;
  }
  return Rv = t, Rv;
}
var $v, xw;
function id() {
  if (xw) return $v;
  xw = 1;
  var e = g$(), t = b$(), n = x$(), r = S$(), o = _$();
  function l(c) {
    var f = -1, d = c == null ? 0 : c.length;
    for (this.clear(); ++f < d; ) {
      var h = c[f];
      this.set(h[0], h[1]);
    }
  }
  return l.prototype.clear = e, l.prototype.delete = t, l.prototype.get = n, l.prototype.has = r, l.prototype.set = o, $v = l, $v;
}
var zv, Sw;
function z0() {
  if (Sw) return zv;
  Sw = 1;
  var e = bi(), t = pr(), n = e(t, "Map");
  return zv = n, zv;
}
var qv, _w;
function O$() {
  if (_w) return qv;
  _w = 1;
  var e = m$(), t = id(), n = z0();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return qv = r, qv;
}
var Bv, Ow;
function w$() {
  if (Ow) return Bv;
  Ow = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Bv = e, Bv;
}
var kv, ww;
function od() {
  if (ww) return kv;
  ww = 1;
  var e = w$();
  function t(n, r) {
    var o = n.__data__;
    return e(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
  }
  return kv = t, kv;
}
var Lv, Aw;
function A$() {
  if (Aw) return Lv;
  Aw = 1;
  var e = od();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Lv = t, Lv;
}
var Uv, Tw;
function T$() {
  if (Tw) return Uv;
  Tw = 1;
  var e = od();
  function t(n) {
    return e(this, n).get(n);
  }
  return Uv = t, Uv;
}
var Iv, Ew;
function E$() {
  if (Ew) return Iv;
  Ew = 1;
  var e = od();
  function t(n) {
    return e(this, n).has(n);
  }
  return Iv = t, Iv;
}
var Hv, jw;
function j$() {
  if (jw) return Hv;
  jw = 1;
  var e = od();
  function t(n, r) {
    var o = e(this, n), l = o.size;
    return o.set(n, r), this.size += o.size == l ? 0 : 1, this;
  }
  return Hv = t, Hv;
}
var Gv, Mw;
function q0() {
  if (Mw) return Gv;
  Mw = 1;
  var e = O$(), t = A$(), n = T$(), r = E$(), o = j$();
  function l(c) {
    var f = -1, d = c == null ? 0 : c.length;
    for (this.clear(); ++f < d; ) {
      var h = c[f];
      this.set(h[0], h[1]);
    }
  }
  return l.prototype.clear = e, l.prototype.delete = t, l.prototype.get = n, l.prototype.has = r, l.prototype.set = o, Gv = l, Gv;
}
var Yv, Cw;
function GM() {
  if (Cw) return Yv;
  Cw = 1;
  var e = q0(), t = "Expected a function";
  function n(r, o) {
    if (typeof r != "function" || o != null && typeof o != "function")
      throw new TypeError(t);
    var l = function() {
      var c = arguments, f = o ? o.apply(this, c) : c[0], d = l.cache;
      if (d.has(f))
        return d.get(f);
      var h = r.apply(this, c);
      return l.cache = d.set(f, h) || d, h;
    };
    return l.cache = new (n.Cache || e)(), l;
  }
  return n.Cache = e, Yv = n, Yv;
}
var Kv, Dw;
function M$() {
  if (Dw) return Kv;
  Dw = 1;
  var e = GM(), t = 500;
  function n(r) {
    var o = e(r, function(c) {
      return l.size === t && l.clear(), c;
    }), l = o.cache;
    return o;
  }
  return Kv = n, Kv;
}
var Xv, Pw;
function C$() {
  if (Pw) return Xv;
  Pw = 1;
  var e = M$(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(o) {
    var l = [];
    return o.charCodeAt(0) === 46 && l.push(""), o.replace(t, function(c, f, d, h) {
      l.push(d ? h.replace(n, "$1") : f || c);
    }), l;
  });
  return Xv = r, Xv;
}
var Vv, Nw;
function B0() {
  if (Nw) return Vv;
  Nw = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, l = Array(o); ++r < o; )
      l[r] = n(t[r], r, t);
    return l;
  }
  return Vv = e, Vv;
}
var Fv, Rw;
function D$() {
  if (Rw) return Fv;
  Rw = 1;
  var e = sc(), t = B0(), n = un(), r = eu(), o = e ? e.prototype : void 0, l = o ? o.toString : void 0;
  function c(f) {
    if (typeof f == "string")
      return f;
    if (n(f))
      return t(f, c) + "";
    if (r(f))
      return l ? l.call(f) : "";
    var d = f + "";
    return d == "0" && 1 / f == -1 / 0 ? "-0" : d;
  }
  return Fv = c, Fv;
}
var Wv, $w;
function YM() {
  if ($w) return Wv;
  $w = 1;
  var e = D$();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Wv = t, Wv;
}
var Zv, zw;
function KM() {
  if (zw) return Zv;
  zw = 1;
  var e = un(), t = N0(), n = C$(), r = YM();
  function o(l, c) {
    return e(l) ? l : t(l, c) ? [l] : n(r(l));
  }
  return Zv = o, Zv;
}
var Qv, qw;
function ud() {
  if (qw) return Qv;
  qw = 1;
  var e = eu();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Qv = t, Qv;
}
var Jv, Bw;
function k0() {
  if (Bw) return Jv;
  Bw = 1;
  var e = KM(), t = ud();
  function n(r, o) {
    o = e(o, r);
    for (var l = 0, c = o.length; r != null && l < c; )
      r = r[t(o[l++])];
    return l && l == c ? r : void 0;
  }
  return Jv = n, Jv;
}
var ey, kw;
function XM() {
  if (kw) return ey;
  kw = 1;
  var e = k0();
  function t(n, r, o) {
    var l = n == null ? void 0 : e(n, r);
    return l === void 0 ? o : l;
  }
  return ey = t, ey;
}
var P$ = XM();
const kn = /* @__PURE__ */ et(P$);
var ty, Lw;
function N$() {
  if (Lw) return ty;
  Lw = 1;
  function e(t) {
    return t == null;
  }
  return ty = e, ty;
}
var R$ = N$();
const we = /* @__PURE__ */ et(R$);
var ny, Uw;
function $$() {
  if (Uw) return ny;
  Uw = 1;
  var e = Xr(), t = un(), n = Vr(), r = "[object String]";
  function o(l) {
    return typeof l == "string" || !t(l) && n(l) && e(l) == r;
  }
  return ny = o, ny;
}
var z$ = $$();
const hi = /* @__PURE__ */ et(z$);
var q$ = R0();
const Ee = /* @__PURE__ */ et(q$);
var B$ = Ca();
const tu = /* @__PURE__ */ et(B$);
var ry = { exports: {} }, He = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iw;
function k$() {
  if (Iw) return He;
  Iw = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), _;
  _ = Symbol.for("react.module.reference");
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var A = x.$$typeof;
      switch (A) {
        case e:
          switch (x = x.type, x) {
            case n:
            case o:
            case r:
            case h:
            case y:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case f:
                case c:
                case d:
                case g:
                case v:
                case l:
                  return x;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return He.ContextConsumer = c, He.ContextProvider = l, He.Element = e, He.ForwardRef = d, He.Fragment = n, He.Lazy = g, He.Memo = v, He.Portal = t, He.Profiler = o, He.StrictMode = r, He.Suspense = h, He.SuspenseList = y, He.isAsyncMode = function() {
    return !1;
  }, He.isConcurrentMode = function() {
    return !1;
  }, He.isContextConsumer = function(x) {
    return S(x) === c;
  }, He.isContextProvider = function(x) {
    return S(x) === l;
  }, He.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, He.isForwardRef = function(x) {
    return S(x) === d;
  }, He.isFragment = function(x) {
    return S(x) === n;
  }, He.isLazy = function(x) {
    return S(x) === g;
  }, He.isMemo = function(x) {
    return S(x) === v;
  }, He.isPortal = function(x) {
    return S(x) === t;
  }, He.isProfiler = function(x) {
    return S(x) === o;
  }, He.isStrictMode = function(x) {
    return S(x) === r;
  }, He.isSuspense = function(x) {
    return S(x) === h;
  }, He.isSuspenseList = function(x) {
    return S(x) === y;
  }, He.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === o || x === r || x === h || x === y || x === b || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === v || x.$$typeof === l || x.$$typeof === c || x.$$typeof === d || x.$$typeof === _ || x.getModuleId !== void 0);
  }, He.typeOf = S, He;
}
var Hw;
function L$() {
  return Hw || (Hw = 1, ry.exports = k$()), ry.exports;
}
var U$ = L$(), ay, Gw;
function VM() {
  if (Gw) return ay;
  Gw = 1;
  var e = Xr(), t = Vr(), n = "[object Number]";
  function r(o) {
    return typeof o == "number" || t(o) && e(o) == n;
  }
  return ay = r, ay;
}
var iy, Yw;
function I$() {
  if (Yw) return iy;
  Yw = 1;
  var e = VM();
  function t(n) {
    return e(n) && n != +n;
  }
  return iy = t, iy;
}
var H$ = I$();
const nu = /* @__PURE__ */ et(H$);
var G$ = VM();
const Y$ = /* @__PURE__ */ et(G$);
var Fn = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, ii = function(t) {
  return hi(t) && t.indexOf("%") === t.length - 1;
}, de = function(t) {
  return Y$(t) && !nu(t);
}, K$ = function(t) {
  return we(t);
}, wt = function(t) {
  return de(t) || hi(t);
}, X$ = 0, xi = function(t) {
  var n = ++X$;
  return "".concat(t || "").concat(n);
}, pi = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!de(t) && !hi(t))
    return r;
  var l;
  if (ii(t)) {
    var c = t.indexOf("%");
    l = n * parseFloat(t.slice(0, c)) / 100;
  } else
    l = +t;
  return nu(l) && (l = r), o && l > n && (l = n), l;
}, Aa = function(t) {
  if (!t)
    return null;
  var n = Object.keys(t);
  return n && n.length ? t[n[0]] : null;
}, V$ = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var n = t.length, r = {}, o = 0; o < n; o++)
    if (!r[t[o]])
      r[t[o]] = !0;
    else
      return !0;
  return !1;
}, pt = function(t, n) {
  return de(t) && de(n) ? function(r) {
    return t + r * (n - t);
  } : function() {
    return n;
  };
};
function ef(e, t, n) {
  return !e || !e.length ? null : e.find(function(r) {
    return r && (typeof t == "function" ? t(r) : kn(r, t)) === n;
  });
}
var F$ = function(t) {
  if (!t || !t.length)
    return null;
  for (var n = t.length, r = 0, o = 0, l = 0, c = 0, f = 1 / 0, d = -1 / 0, h = 0, y = 0, v = 0; v < n; v++)
    h = t[v].cx || 0, y = t[v].cy || 0, r += h, o += y, l += h * y, c += h * h, f = Math.min(f, h), d = Math.max(d, h);
  var g = n * c !== r * r ? (n * l - r * o) / (n * c - r * r) : 0;
  return {
    xmin: f,
    xmax: d,
    a: g,
    b: (o - g * r) / n
  };
}, W$ = function(t, n) {
  return de(t) && de(n) ? t - n : hi(t) && hi(n) ? t.localeCompare(n) : t instanceof Date && n instanceof Date ? t.getTime() - n.getTime() : String(t).localeCompare(String(n));
};
function _o(e, t) {
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n) && (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n]))
      return !1;
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r))
      return !1;
  return !0;
}
function lb(e) {
  "@babel/helpers - typeof";
  return lb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lb(e);
}
var Z$ = ["viewBox", "children"], Q$ = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Kw = ["points", "pathLength"], oy = {
  svg: Z$,
  polygon: Kw,
  polyline: Kw
}, L0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], tf = function(t, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var r = t;
  if (/* @__PURE__ */ ee.isValidElement(t) && (r = t.props), !tu(r))
    return null;
  var o = {};
  return Object.keys(r).forEach(function(l) {
    L0.includes(l) && (o[l] = n || function(c) {
      return r[l](r, c);
    });
  }), o;
}, J$ = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, jl = function(t, n, r) {
  if (!tu(t) || lb(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(l) {
    var c = t[l];
    L0.includes(l) && typeof c == "function" && (o || (o = {}), o[l] = J$(c, n, r));
  }), o;
}, ez = ["children"], tz = ["children"];
function Xw(e, t) {
  if (e == null) return {};
  var n = nz(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function nz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function cb(e) {
  "@babel/helpers - typeof";
  return cb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cb(e);
}
var Vw = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, Lr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Fw = null, uy = null, U0 = function e(t) {
  if (t === Fw && Array.isArray(uy))
    return uy;
  var n = [];
  return ee.Children.forEach(t, function(r) {
    we(r) || (U$.isFragment(r) ? n = n.concat(e(r.props.children)) : n.push(r));
  }), uy = n, Fw = t, n;
};
function on(e, t) {
  var n = [], r = [];
  return Array.isArray(t) ? r = t.map(function(o) {
    return Lr(o);
  }) : r = [Lr(t)], U0(e).forEach(function(o) {
    var l = kn(o, "type.displayName") || kn(o, "type.name");
    r.indexOf(l) !== -1 && n.push(o);
  }), n;
}
function bn(e, t) {
  var n = on(e, t);
  return n && n[0];
}
var Ww = function(t) {
  if (!t || !t.props)
    return !1;
  var n = t.props, r = n.width, o = n.height;
  return !(!de(r) || r <= 0 || !de(o) || o <= 0);
}, rz = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], az = function(t) {
  return t && t.type && hi(t.type) && rz.indexOf(t.type) >= 0;
}, FM = function(t) {
  return t && cb(t) === "object" && "clipDot" in t;
}, iz = function(t, n, r, o) {
  var l, c = (l = oy == null ? void 0 : oy[o]) !== null && l !== void 0 ? l : [];
  return n.startsWith("data-") || !Ee(t) && (o && c.includes(n) || Q$.includes(n)) || r && L0.includes(n);
}, Te = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ ee.isValidElement(t) && (o = t.props), !tu(o))
    return null;
  var l = {};
  return Object.keys(o).forEach(function(c) {
    var f;
    iz((f = o) === null || f === void 0 ? void 0 : f[c], c, n, r) && (l[c] = o[c]);
  }), l;
}, sb = function e(t, n) {
  if (t === n)
    return !0;
  var r = ee.Children.count(t);
  if (r !== ee.Children.count(n))
    return !1;
  if (r === 0)
    return !0;
  if (r === 1)
    return Zw(Array.isArray(t) ? t[0] : t, Array.isArray(n) ? n[0] : n);
  for (var o = 0; o < r; o++) {
    var l = t[o], c = n[o];
    if (Array.isArray(l) || Array.isArray(c)) {
      if (!e(l, c))
        return !1;
    } else if (!Zw(l, c))
      return !1;
  }
  return !0;
}, Zw = function(t, n) {
  if (we(t) && we(n))
    return !0;
  if (!we(t) && !we(n)) {
    var r = t.props || {}, o = r.children, l = Xw(r, ez), c = n.props || {}, f = c.children, d = Xw(c, tz);
    return o && f ? _o(l, d) && sb(o, f) : !o && !f ? _o(l, d) : !1;
  }
  return !1;
}, Qw = function(t, n) {
  var r = [], o = {};
  return U0(t).forEach(function(l, c) {
    if (az(l))
      r.push(l);
    else if (l) {
      var f = Lr(l.type), d = n[f] || {}, h = d.handler, y = d.once;
      if (h && (!y || !o[f])) {
        var v = h(l, f, c);
        r.push(v), o[f] = !0;
      }
    }
  }), r;
}, oz = function(t) {
  var n = t && t.type;
  return n && Vw[n] ? Vw[n] : null;
}, uz = function(t, n) {
  return U0(n).indexOf(t);
}, lz = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function fb() {
  return fb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fb.apply(this, arguments);
}
function cz(e, t) {
  if (e == null) return {};
  var n = sz(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function db(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, l = e.className, c = e.style, f = e.title, d = e.desc, h = cz(e, lz), y = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, v = $e("recharts-surface", l);
  return /* @__PURE__ */ k.createElement("svg", fb({}, Te(h, !0, "svg"), {
    className: v,
    width: n,
    height: r,
    style: c,
    viewBox: "".concat(y.x, " ").concat(y.y, " ").concat(y.width, " ").concat(y.height)
  }), /* @__PURE__ */ k.createElement("title", null, f), /* @__PURE__ */ k.createElement("desc", null, d), t);
}
var fz = ["children", "className"];
function hb() {
  return hb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hb.apply(this, arguments);
}
function dz(e, t) {
  if (e == null) return {};
  var n = hz(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function hz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var Ie = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var n = e.children, r = e.className, o = dz(e, fz), l = $e("recharts-layer", r);
  return /* @__PURE__ */ k.createElement("g", hb({
    className: l
  }, Te(o, !0), {
    ref: t
  }), n);
}), Ur = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++)
    o[l - 2] = arguments[l];
}, ly, Jw;
function pz() {
  if (Jw) return ly;
  Jw = 1;
  function e(t, n, r) {
    var o = -1, l = t.length;
    n < 0 && (n = -n > l ? 0 : l + n), r = r > l ? l : r, r < 0 && (r += l), l = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var c = Array(l); ++o < l; )
      c[o] = t[o + n];
    return c;
  }
  return ly = e, ly;
}
var cy, eA;
function vz() {
  if (eA) return cy;
  eA = 1;
  var e = pz();
  function t(n, r, o) {
    var l = n.length;
    return o = o === void 0 ? l : o, !r && o >= l ? n : e(n, r, o);
  }
  return cy = t, cy;
}
var sy, tA;
function WM() {
  if (tA) return sy;
  tA = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = t + n + r, l = "\\ufe0e\\ufe0f", c = "\\u200d", f = RegExp("[" + c + e + o + l + "]");
  function d(h) {
    return f.test(h);
  }
  return sy = d, sy;
}
var fy, nA;
function yz() {
  if (nA) return fy;
  nA = 1;
  function e(t) {
    return t.split("");
  }
  return fy = e, fy;
}
var dy, rA;
function mz() {
  if (rA) return dy;
  rA = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = t + n + r, l = "\\ufe0e\\ufe0f", c = "[" + e + "]", f = "[" + o + "]", d = "\\ud83c[\\udffb-\\udfff]", h = "(?:" + f + "|" + d + ")", y = "[^" + e + "]", v = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", b = "\\u200d", _ = h + "?", S = "[" + l + "]?", x = "(?:" + b + "(?:" + [y, v, g].join("|") + ")" + S + _ + ")*", A = S + _ + x, E = "(?:" + [y + f + "?", f, v, g, c].join("|") + ")", M = RegExp(d + "(?=" + d + ")|" + E + A, "g");
  function j(w) {
    return w.match(M) || [];
  }
  return dy = j, dy;
}
var hy, aA;
function gz() {
  if (aA) return hy;
  aA = 1;
  var e = yz(), t = WM(), n = mz();
  function r(o) {
    return t(o) ? n(o) : e(o);
  }
  return hy = r, hy;
}
var py, iA;
function bz() {
  if (iA) return py;
  iA = 1;
  var e = vz(), t = WM(), n = gz(), r = YM();
  function o(l) {
    return function(c) {
      c = r(c);
      var f = t(c) ? n(c) : void 0, d = f ? f[0] : c.charAt(0), h = f ? e(f, 1).join("") : c.slice(1);
      return d[l]() + h;
    };
  }
  return py = o, py;
}
var vy, oA;
function xz() {
  if (oA) return vy;
  oA = 1;
  var e = bz(), t = e("toUpperCase");
  return vy = t, vy;
}
var Sz = xz();
const ld = /* @__PURE__ */ et(Sz);
function tt(e) {
  return function() {
    return e;
  };
}
const ZM = Math.cos, nf = Math.sin, Zn = Math.sqrt, rf = Math.PI, cd = 2 * rf, pb = Math.PI, vb = 2 * pb, ri = 1e-6, _z = vb - ri;
function QM(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Oz(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return QM;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, l = r.length; o < l; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class wz {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? QM : Oz(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, l, c) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +l},${this._y1 = +c}`;
  }
  arcTo(t, n, r, o, l) {
    if (t = +t, n = +n, r = +r, o = +o, l = +l, l < 0) throw new Error(`negative radius: ${l}`);
    let c = this._x1, f = this._y1, d = r - t, h = o - n, y = c - t, v = f - n, g = y * y + v * v;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (g > ri) if (!(Math.abs(v * d - h * y) > ri) || !l)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let b = r - c, _ = o - f, S = d * d + h * h, x = b * b + _ * _, A = Math.sqrt(S), E = Math.sqrt(g), M = l * Math.tan((pb - Math.acos((S + g - x) / (2 * A * E))) / 2), j = M / E, w = M / A;
      Math.abs(j - 1) > ri && this._append`L${t + j * y},${n + j * v}`, this._append`A${l},${l},0,0,${+(v * b > y * _)},${this._x1 = t + w * d},${this._y1 = n + w * h}`;
    }
  }
  arc(t, n, r, o, l, c) {
    if (t = +t, n = +n, r = +r, c = !!c, r < 0) throw new Error(`negative radius: ${r}`);
    let f = r * Math.cos(o), d = r * Math.sin(o), h = t + f, y = n + d, v = 1 ^ c, g = c ? o - l : l - o;
    this._x1 === null ? this._append`M${h},${y}` : (Math.abs(this._x1 - h) > ri || Math.abs(this._y1 - y) > ri) && this._append`L${h},${y}`, r && (g < 0 && (g = g % vb + vb), g > _z ? this._append`A${r},${r},0,1,${v},${t - f},${n - d}A${r},${r},0,1,${v},${this._x1 = h},${this._y1 = y}` : g > ri && this._append`A${r},${r},0,${+(g >= pb)},${v},${this._x1 = t + r * Math.cos(l)},${this._y1 = n + r * Math.sin(l)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function I0(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new wz(t);
}
function H0(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function JM(e) {
  this._context = e;
}
JM.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function sd(e) {
  return new JM(e);
}
function eC(e) {
  return e[0];
}
function tC(e) {
  return e[1];
}
function nC(e, t) {
  var n = tt(!0), r = null, o = sd, l = null, c = I0(f);
  e = typeof e == "function" ? e : e === void 0 ? eC : tt(e), t = typeof t == "function" ? t : t === void 0 ? tC : tt(t);
  function f(d) {
    var h, y = (d = H0(d)).length, v, g = !1, b;
    for (r == null && (l = o(b = c())), h = 0; h <= y; ++h)
      !(h < y && n(v = d[h], h, d)) === g && ((g = !g) ? l.lineStart() : l.lineEnd()), g && l.point(+e(v, h, d), +t(v, h, d));
    if (b) return l = null, b + "" || null;
  }
  return f.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : tt(+d), f) : e;
  }, f.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : tt(+d), f) : t;
  }, f.defined = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : tt(!!d), f) : n;
  }, f.curve = function(d) {
    return arguments.length ? (o = d, r != null && (l = o(r)), f) : o;
  }, f.context = function(d) {
    return arguments.length ? (d == null ? r = l = null : l = o(r = d), f) : r;
  }, f;
}
function zs(e, t, n) {
  var r = null, o = tt(!0), l = null, c = sd, f = null, d = I0(h);
  e = typeof e == "function" ? e : e === void 0 ? eC : tt(+e), t = typeof t == "function" ? t : tt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? tC : tt(+n);
  function h(v) {
    var g, b, _, S = (v = H0(v)).length, x, A = !1, E, M = new Array(S), j = new Array(S);
    for (l == null && (f = c(E = d())), g = 0; g <= S; ++g) {
      if (!(g < S && o(x = v[g], g, v)) === A)
        if (A = !A)
          b = g, f.areaStart(), f.lineStart();
        else {
          for (f.lineEnd(), f.lineStart(), _ = g - 1; _ >= b; --_)
            f.point(M[_], j[_]);
          f.lineEnd(), f.areaEnd();
        }
      A && (M[g] = +e(x, g, v), j[g] = +t(x, g, v), f.point(r ? +r(x, g, v) : M[g], n ? +n(x, g, v) : j[g]));
    }
    if (E) return f = null, E + "" || null;
  }
  function y() {
    return nC().defined(o).curve(c).context(l);
  }
  return h.x = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : tt(+v), r = null, h) : e;
  }, h.x0 = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : tt(+v), h) : e;
  }, h.x1 = function(v) {
    return arguments.length ? (r = v == null ? null : typeof v == "function" ? v : tt(+v), h) : r;
  }, h.y = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : tt(+v), n = null, h) : t;
  }, h.y0 = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : tt(+v), h) : t;
  }, h.y1 = function(v) {
    return arguments.length ? (n = v == null ? null : typeof v == "function" ? v : tt(+v), h) : n;
  }, h.lineX0 = h.lineY0 = function() {
    return y().x(e).y(t);
  }, h.lineY1 = function() {
    return y().x(e).y(n);
  }, h.lineX1 = function() {
    return y().x(r).y(t);
  }, h.defined = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : tt(!!v), h) : o;
  }, h.curve = function(v) {
    return arguments.length ? (c = v, l != null && (f = c(l)), h) : c;
  }, h.context = function(v) {
    return arguments.length ? (v == null ? l = f = null : f = c(l = v), h) : l;
  }, h;
}
class rC {
  constructor(t, n) {
    this._context = t, this._x = n;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n);
        break;
      }
    }
    this._x0 = t, this._y0 = n;
  }
}
function Az(e) {
  return new rC(e, !0);
}
function Tz(e) {
  return new rC(e, !1);
}
const G0 = {
  draw(e, t) {
    const n = Zn(t / rf);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, cd);
  }
}, Ez = {
  draw(e, t) {
    const n = Zn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, aC = Zn(1 / 3), jz = aC * 2, Mz = {
  draw(e, t) {
    const n = Zn(t / jz), r = n * aC;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, Cz = {
  draw(e, t) {
    const n = Zn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, Dz = 0.8908130915292852, iC = nf(rf / 10) / nf(7 * rf / 10), Pz = nf(cd / 10) * iC, Nz = -ZM(cd / 10) * iC, Rz = {
  draw(e, t) {
    const n = Zn(t * Dz), r = Pz * n, o = Nz * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let l = 1; l < 5; ++l) {
      const c = cd * l / 5, f = ZM(c), d = nf(c);
      e.lineTo(d * n, -f * n), e.lineTo(f * r - d * o, d * r + f * o);
    }
    e.closePath();
  }
}, yy = Zn(3), $z = {
  draw(e, t) {
    const n = -Zn(t / (yy * 3));
    e.moveTo(0, n * 2), e.lineTo(-yy * n, -n), e.lineTo(yy * n, -n), e.closePath();
  }
}, Rn = -0.5, $n = Zn(3) / 2, yb = 1 / Zn(12), zz = (yb / 2 + 1) * 3, qz = {
  draw(e, t) {
    const n = Zn(t / zz), r = n / 2, o = n * yb, l = r, c = n * yb + n, f = -l, d = c;
    e.moveTo(r, o), e.lineTo(l, c), e.lineTo(f, d), e.lineTo(Rn * r - $n * o, $n * r + Rn * o), e.lineTo(Rn * l - $n * c, $n * l + Rn * c), e.lineTo(Rn * f - $n * d, $n * f + Rn * d), e.lineTo(Rn * r + $n * o, Rn * o - $n * r), e.lineTo(Rn * l + $n * c, Rn * c - $n * l), e.lineTo(Rn * f + $n * d, Rn * d - $n * f), e.closePath();
  }
};
function Bz(e, t) {
  let n = null, r = I0(o);
  e = typeof e == "function" ? e : tt(e || G0), t = typeof t == "function" ? t : tt(t === void 0 ? 64 : +t);
  function o() {
    let l;
    if (n || (n = l = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), l) return n = null, l + "" || null;
  }
  return o.type = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : tt(l), o) : e;
  }, o.size = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : tt(+l), o) : t;
  }, o.context = function(l) {
    return arguments.length ? (n = l ?? null, o) : n;
  }, o;
}
function af() {
}
function of(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function oC(e) {
  this._context = e;
}
oC.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        of(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        of(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function kz(e) {
  return new oC(e);
}
function uC(e) {
  this._context = e;
}
uC.prototype = {
  areaStart: af,
  areaEnd: af,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        of(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Lz(e) {
  return new uC(e);
}
function lC(e) {
  this._context = e;
}
lC.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        of(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Uz(e) {
  return new lC(e);
}
function cC(e) {
  this._context = e;
}
cC.prototype = {
  areaStart: af,
  areaEnd: af,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Iz(e) {
  return new cC(e);
}
function uA(e) {
  return e < 0 ? -1 : 1;
}
function lA(e, t, n) {
  var r = e._x1 - e._x0, o = t - e._x1, l = (e._y1 - e._y0) / (r || o < 0 && -0), c = (n - e._y1) / (o || r < 0 && -0), f = (l * o + c * r) / (r + o);
  return (uA(l) + uA(c)) * Math.min(Math.abs(l), Math.abs(c), 0.5 * Math.abs(f)) || 0;
}
function cA(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function my(e, t, n) {
  var r = e._x0, o = e._y0, l = e._x1, c = e._y1, f = (l - r) / 3;
  e._context.bezierCurveTo(r + f, o + f * t, l - f, c - f * n, l, c);
}
function uf(e) {
  this._context = e;
}
uf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        my(this, this._t0, cA(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, my(this, cA(this, n = lA(this, e, t)), n);
          break;
        default:
          my(this, this._t0, n = lA(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function sC(e) {
  this._context = new fC(e);
}
(sC.prototype = Object.create(uf.prototype)).point = function(e, t) {
  uf.prototype.point.call(this, t, e);
};
function fC(e) {
  this._context = e;
}
fC.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, r, o, l) {
    this._context.bezierCurveTo(t, e, r, n, l, o);
  }
};
function Hz(e) {
  return new uf(e);
}
function Gz(e) {
  return new sC(e);
}
function dC(e) {
  this._context = e;
}
dC.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length;
    if (n)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = sA(e), o = sA(t), l = 0, c = 1; c < n; ++l, ++c)
          this._context.bezierCurveTo(r[0][l], o[0][l], r[1][l], o[1][l], e[c], t[c]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function sA(e) {
  var t, n = e.length - 1, r, o = new Array(n), l = new Array(n), c = new Array(n);
  for (o[0] = 0, l[0] = 2, c[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, l[t] = 4, c[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, l[n - 1] = 7, c[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = o[t] / l[t - 1], l[t] -= r, c[t] -= r * c[t - 1];
  for (o[n - 1] = c[n - 1] / l[n - 1], t = n - 2; t >= 0; --t) o[t] = (c[t] - o[t + 1]) / l[t];
  for (l[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) l[t] = 2 * e[t + 1] - o[t + 1];
  return [o, l];
}
function Yz(e) {
  return new dC(e);
}
function fd(e, t) {
  this._context = e, this._t = t;
}
fd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Kz(e) {
  return new fd(e, 0.5);
}
function Xz(e) {
  return new fd(e, 0);
}
function Vz(e) {
  return new fd(e, 1);
}
function Eo(e, t) {
  if ((c = e.length) > 1)
    for (var n = 1, r, o, l = e[t[0]], c, f = l.length; n < c; ++n)
      for (o = l, l = e[t[n]], r = 0; r < f; ++r)
        l[r][1] += l[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
}
function mb(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function Fz(e, t) {
  return e[t];
}
function Wz(e) {
  const t = [];
  return t.key = e, t;
}
function Zz() {
  var e = tt([]), t = mb, n = Eo, r = Fz;
  function o(l) {
    var c = Array.from(e.apply(this, arguments), Wz), f, d = c.length, h = -1, y;
    for (const v of l)
      for (f = 0, ++h; f < d; ++f)
        (c[f][h] = [0, +r(v, c[f].key, h, l)]).data = v;
    for (f = 0, y = H0(t(c)); f < d; ++f)
      c[y[f]].index = f;
    return n(c, y), c;
  }
  return o.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : tt(Array.from(l)), o) : e;
  }, o.value = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : tt(+l), o) : r;
  }, o.order = function(l) {
    return arguments.length ? (t = l == null ? mb : typeof l == "function" ? l : tt(Array.from(l)), o) : t;
  }, o.offset = function(l) {
    return arguments.length ? (n = l ?? Eo, o) : n;
  }, o;
}
function Qz(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, o = 0, l = e[0].length, c; o < l; ++o) {
      for (c = n = 0; n < r; ++n) c += e[n][o][1] || 0;
      if (c) for (n = 0; n < r; ++n) e[n][o][1] /= c;
    }
    Eo(e, t);
  }
}
function Jz(e, t) {
  if ((o = e.length) > 0) {
    for (var n = 0, r = e[t[0]], o, l = r.length; n < l; ++n) {
      for (var c = 0, f = 0; c < o; ++c) f += e[c][n][1] || 0;
      r[n][1] += r[n][0] = -f / 2;
    }
    Eo(e, t);
  }
}
function eq(e, t) {
  if (!(!((c = e.length) > 0) || !((l = (o = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, o, l, c; r < l; ++r) {
      for (var f = 0, d = 0, h = 0; f < c; ++f) {
        for (var y = e[t[f]], v = y[r][1] || 0, g = y[r - 1][1] || 0, b = (v - g) / 2, _ = 0; _ < f; ++_) {
          var S = e[t[_]], x = S[r][1] || 0, A = S[r - 1][1] || 0;
          b += x - A;
        }
        d += v, h += b * v;
      }
      o[r - 1][1] += o[r - 1][0] = n, d && (n -= h / d);
    }
    o[r - 1][1] += o[r - 1][0] = n, Eo(e, t);
  }
}
function Ml(e) {
  "@babel/helpers - typeof";
  return Ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ml(e);
}
var tq = ["type", "size", "sizeType"];
function gb() {
  return gb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gb.apply(this, arguments);
}
function fA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fA(Object(n), !0).forEach(function(r) {
      nq(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fA(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nq(e, t, n) {
  return t = rq(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rq(e) {
  var t = aq(e, "string");
  return Ml(t) == "symbol" ? t : t + "";
}
function aq(e, t) {
  if (Ml(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ml(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iq(e, t) {
  if (e == null) return {};
  var n = oq(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function oq(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var hC = {
  symbolCircle: G0,
  symbolCross: Ez,
  symbolDiamond: Mz,
  symbolSquare: Cz,
  symbolStar: Rz,
  symbolTriangle: $z,
  symbolWye: qz
}, uq = Math.PI / 180, lq = function(t) {
  var n = "symbol".concat(ld(t));
  return hC[n] || G0;
}, cq = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * uq;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, sq = function(t, n) {
  hC["symbol".concat(ld(t))] = n;
}, dd = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, l = o === void 0 ? 64 : o, c = t.sizeType, f = c === void 0 ? "area" : c, d = iq(t, tq), h = dA(dA({}, d), {}, {
    type: r,
    size: l,
    sizeType: f
  }), y = function() {
    var x = lq(r), A = Bz().type(x).size(cq(l, f, r));
    return A();
  }, v = h.className, g = h.cx, b = h.cy, _ = Te(h, !0);
  return g === +g && b === +b && l === +l ? /* @__PURE__ */ k.createElement("path", gb({}, _, {
    className: $e("recharts-symbols", v),
    transform: "translate(".concat(g, ", ").concat(b, ")"),
    d: y()
  })) : null;
};
dd.registerSymbol = sq;
function jo(e) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e);
}
function bb() {
  return bb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bb.apply(this, arguments);
}
function hA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hA(Object(n), !0).forEach(function(r) {
      Cl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hA(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hq(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, vC(r.key), r);
  }
}
function pq(e, t, n) {
  return t && hq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vq(e, t, n) {
  return t = lf(t), yq(e, pC() ? Reflect.construct(t, n || [], lf(e).constructor) : t.apply(e, n));
}
function yq(e, t) {
  if (t && (jo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mq(e);
}
function mq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pC = function() {
    return !!e;
  })();
}
function lf(e) {
  return lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, lf(e);
}
function gq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xb(e, t);
}
function xb(e, t) {
  return xb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, xb(e, t);
}
function Cl(e, t, n) {
  return t = vC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vC(e) {
  var t = bq(e, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function bq(e, t) {
  if (jo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (jo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zn = 32, Y0 = /* @__PURE__ */ (function(e) {
  function t() {
    return dq(this, t), vq(this, t, arguments);
  }
  return gq(t, e), pq(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, l = zn / 2, c = zn / 6, f = zn / 3, d = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ k.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: d,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: l,
            x2: zn,
            y2: l,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ k.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: d,
            d: "M0,".concat(l, "h").concat(f, `
            A`).concat(c, ",").concat(c, ",0,1,1,").concat(2 * f, ",").concat(l, `
            H`).concat(zn, "M").concat(2 * f, ",").concat(l, `
            A`).concat(c, ",").concat(c, ",0,1,1,").concat(f, ",").concat(l),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ k.createElement("path", {
            stroke: "none",
            fill: d,
            d: "M0,".concat(zn / 8, "h").concat(zn, "v").concat(zn * 3 / 4, "h").concat(-zn, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ k.isValidElement(r.legendIcon)) {
          var h = fq({}, r);
          return delete h.legendIcon, /* @__PURE__ */ k.cloneElement(r.legendIcon, h);
        }
        return /* @__PURE__ */ k.createElement(dd, {
          fill: d,
          cx: l,
          cy: l,
          size: zn,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, l = o.payload, c = o.iconSize, f = o.layout, d = o.formatter, h = o.inactiveColor, y = {
        x: 0,
        y: 0,
        width: zn,
        height: zn
      }, v = {
        display: f === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, g = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return l.map(function(b, _) {
        var S = b.formatter || d, x = $e(Cl(Cl({
          "recharts-legend-item": !0
        }, "legend-item-".concat(_), !0), "inactive", b.inactive));
        if (b.type === "none")
          return null;
        var A = Ee(b.value) ? null : b.value;
        Ur(
          !Ee(b.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var E = b.inactive ? h : b.color;
        return /* @__PURE__ */ k.createElement("li", bb({
          className: x,
          style: v,
          key: "legend-item-".concat(_)
        }, jl(r.props, b, _)), /* @__PURE__ */ k.createElement(db, {
          width: c,
          height: c,
          viewBox: y,
          style: g
        }, r.renderIcon(b)), /* @__PURE__ */ k.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: E
          }
        }, S ? S(A, b, _) : A));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, l = r.layout, c = r.align;
      if (!o || !o.length)
        return null;
      var f = {
        padding: 0,
        margin: 0,
        textAlign: l === "horizontal" ? c : "left"
      };
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-default-legend",
        style: f
      }, this.renderItems());
    }
  }]);
})(ee.PureComponent);
Cl(Y0, "displayName", "Legend");
Cl(Y0, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var gy, pA;
function xq() {
  if (pA) return gy;
  pA = 1;
  var e = id();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return gy = t, gy;
}
var by, vA;
function Sq() {
  if (vA) return by;
  vA = 1;
  function e(t) {
    var n = this.__data__, r = n.delete(t);
    return this.size = n.size, r;
  }
  return by = e, by;
}
var xy, yA;
function _q() {
  if (yA) return xy;
  yA = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return xy = e, xy;
}
var Sy, mA;
function Oq() {
  if (mA) return Sy;
  mA = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Sy = e, Sy;
}
var _y, gA;
function wq() {
  if (gA) return _y;
  gA = 1;
  var e = id(), t = z0(), n = q0(), r = 200;
  function o(l, c) {
    var f = this.__data__;
    if (f instanceof e) {
      var d = f.__data__;
      if (!t || d.length < r - 1)
        return d.push([l, c]), this.size = ++f.size, this;
      f = this.__data__ = new n(d);
    }
    return f.set(l, c), this.size = f.size, this;
  }
  return _y = o, _y;
}
var Oy, bA;
function yC() {
  if (bA) return Oy;
  bA = 1;
  var e = id(), t = xq(), n = Sq(), r = _q(), o = Oq(), l = wq();
  function c(f) {
    var d = this.__data__ = new e(f);
    this.size = d.size;
  }
  return c.prototype.clear = t, c.prototype.delete = n, c.prototype.get = r, c.prototype.has = o, c.prototype.set = l, Oy = c, Oy;
}
var wy, xA;
function Aq() {
  if (xA) return wy;
  xA = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return wy = t, wy;
}
var Ay, SA;
function Tq() {
  if (SA) return Ay;
  SA = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ay = e, Ay;
}
var Ty, _A;
function mC() {
  if (_A) return Ty;
  _A = 1;
  var e = q0(), t = Aq(), n = Tq();
  function r(o) {
    var l = -1, c = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++l < c; )
      this.add(o[l]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Ty = r, Ty;
}
var Ey, OA;
function gC() {
  if (OA) return Ey;
  OA = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length; ++r < o; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return Ey = e, Ey;
}
var jy, wA;
function bC() {
  if (wA) return jy;
  wA = 1;
  function e(t, n) {
    return t.has(n);
  }
  return jy = e, jy;
}
var My, AA;
function xC() {
  if (AA) return My;
  AA = 1;
  var e = mC(), t = gC(), n = bC(), r = 1, o = 2;
  function l(c, f, d, h, y, v) {
    var g = d & r, b = c.length, _ = f.length;
    if (b != _ && !(g && _ > b))
      return !1;
    var S = v.get(c), x = v.get(f);
    if (S && x)
      return S == f && x == c;
    var A = -1, E = !0, M = d & o ? new e() : void 0;
    for (v.set(c, f), v.set(f, c); ++A < b; ) {
      var j = c[A], w = f[A];
      if (h)
        var T = g ? h(w, j, A, f, c, v) : h(j, w, A, c, f, v);
      if (T !== void 0) {
        if (T)
          continue;
        E = !1;
        break;
      }
      if (M) {
        if (!t(f, function(C, R) {
          if (!n(M, R) && (j === C || y(j, C, d, h, v)))
            return M.push(R);
        })) {
          E = !1;
          break;
        }
      } else if (!(j === w || y(j, w, d, h, v))) {
        E = !1;
        break;
      }
    }
    return v.delete(c), v.delete(f), E;
  }
  return My = l, My;
}
var Cy, TA;
function Eq() {
  if (TA) return Cy;
  TA = 1;
  var e = pr(), t = e.Uint8Array;
  return Cy = t, Cy;
}
var Dy, EA;
function jq() {
  if (EA) return Dy;
  EA = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o, l) {
      r[++n] = [l, o];
    }), r;
  }
  return Dy = e, Dy;
}
var Py, jA;
function K0() {
  if (jA) return Py;
  jA = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(o) {
      r[++n] = o;
    }), r;
  }
  return Py = e, Py;
}
var Ny, MA;
function Mq() {
  if (MA) return Ny;
  MA = 1;
  var e = sc(), t = Eq(), n = $0(), r = xC(), o = jq(), l = K0(), c = 1, f = 2, d = "[object Boolean]", h = "[object Date]", y = "[object Error]", v = "[object Map]", g = "[object Number]", b = "[object RegExp]", _ = "[object Set]", S = "[object String]", x = "[object Symbol]", A = "[object ArrayBuffer]", E = "[object DataView]", M = e ? e.prototype : void 0, j = M ? M.valueOf : void 0;
  function w(T, C, R, N, K, L, B) {
    switch (R) {
      case E:
        if (T.byteLength != C.byteLength || T.byteOffset != C.byteOffset)
          return !1;
        T = T.buffer, C = C.buffer;
      case A:
        return !(T.byteLength != C.byteLength || !L(new t(T), new t(C)));
      case d:
      case h:
      case g:
        return n(+T, +C);
      case y:
        return T.name == C.name && T.message == C.message;
      case b:
      case S:
        return T == C + "";
      case v:
        var F = o;
      case _:
        var G = N & c;
        if (F || (F = l), T.size != C.size && !G)
          return !1;
        var V = B.get(T);
        if (V)
          return V == C;
        N |= f, B.set(T, C);
        var $ = r(F(T), F(C), N, K, L, B);
        return B.delete(T), $;
      case x:
        if (j)
          return j.call(T) == j.call(C);
    }
    return !1;
  }
  return Ny = w, Ny;
}
var Ry, CA;
function SC() {
  if (CA) return Ry;
  CA = 1;
  function e(t, n) {
    for (var r = -1, o = n.length, l = t.length; ++r < o; )
      t[l + r] = n[r];
    return t;
  }
  return Ry = e, Ry;
}
var $y, DA;
function Cq() {
  if (DA) return $y;
  DA = 1;
  var e = SC(), t = un();
  function n(r, o, l) {
    var c = o(r);
    return t(r) ? c : e(c, l(r));
  }
  return $y = n, $y;
}
var zy, PA;
function Dq() {
  if (PA) return zy;
  PA = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length, l = 0, c = []; ++r < o; ) {
      var f = t[r];
      n(f, r, t) && (c[l++] = f);
    }
    return c;
  }
  return zy = e, zy;
}
var qy, NA;
function Pq() {
  if (NA) return qy;
  NA = 1;
  function e() {
    return [];
  }
  return qy = e, qy;
}
var By, RA;
function Nq() {
  if (RA) return By;
  RA = 1;
  var e = Dq(), t = Pq(), n = Object.prototype, r = n.propertyIsEnumerable, o = Object.getOwnPropertySymbols, l = o ? function(c) {
    return c == null ? [] : (c = Object(c), e(o(c), function(f) {
      return r.call(c, f);
    }));
  } : t;
  return By = l, By;
}
var ky, $A;
function Rq() {
  if ($A) return ky;
  $A = 1;
  function e(t, n) {
    for (var r = -1, o = Array(t); ++r < t; )
      o[r] = n(r);
    return o;
  }
  return ky = e, ky;
}
var Ly, zA;
function $q() {
  if (zA) return Ly;
  zA = 1;
  var e = Xr(), t = Vr(), n = "[object Arguments]";
  function r(o) {
    return t(o) && e(o) == n;
  }
  return Ly = r, Ly;
}
var Uy, qA;
function X0() {
  if (qA) return Uy;
  qA = 1;
  var e = $q(), t = Vr(), n = Object.prototype, r = n.hasOwnProperty, o = n.propertyIsEnumerable, l = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(c) {
    return t(c) && r.call(c, "callee") && !o.call(c, "callee");
  };
  return Uy = l, Uy;
}
var pl = { exports: {} }, Iy, BA;
function zq() {
  if (BA) return Iy;
  BA = 1;
  function e() {
    return !1;
  }
  return Iy = e, Iy;
}
pl.exports;
var kA;
function _C() {
  return kA || (kA = 1, (function(e, t) {
    var n = pr(), r = zq(), o = t && !t.nodeType && t, l = o && !0 && e && !e.nodeType && e, c = l && l.exports === o, f = c ? n.Buffer : void 0, d = f ? f.isBuffer : void 0, h = d || r;
    e.exports = h;
  })(pl, pl.exports)), pl.exports;
}
var Hy, LA;
function V0() {
  if (LA) return Hy;
  LA = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(r, o) {
    var l = typeof r;
    return o = o ?? e, !!o && (l == "number" || l != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < o;
  }
  return Hy = n, Hy;
}
var Gy, UA;
function F0() {
  if (UA) return Gy;
  UA = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Gy = t, Gy;
}
var Yy, IA;
function qq() {
  if (IA) return Yy;
  IA = 1;
  var e = Xr(), t = F0(), n = Vr(), r = "[object Arguments]", o = "[object Array]", l = "[object Boolean]", c = "[object Date]", f = "[object Error]", d = "[object Function]", h = "[object Map]", y = "[object Number]", v = "[object Object]", g = "[object RegExp]", b = "[object Set]", _ = "[object String]", S = "[object WeakMap]", x = "[object ArrayBuffer]", A = "[object DataView]", E = "[object Float32Array]", M = "[object Float64Array]", j = "[object Int8Array]", w = "[object Int16Array]", T = "[object Int32Array]", C = "[object Uint8Array]", R = "[object Uint8ClampedArray]", N = "[object Uint16Array]", K = "[object Uint32Array]", L = {};
  L[E] = L[M] = L[j] = L[w] = L[T] = L[C] = L[R] = L[N] = L[K] = !0, L[r] = L[o] = L[x] = L[l] = L[A] = L[c] = L[f] = L[d] = L[h] = L[y] = L[v] = L[g] = L[b] = L[_] = L[S] = !1;
  function B(F) {
    return n(F) && t(F.length) && !!L[e(F)];
  }
  return Yy = B, Yy;
}
var Ky, HA;
function OC() {
  if (HA) return Ky;
  HA = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return Ky = e, Ky;
}
var vl = { exports: {} };
vl.exports;
var GA;
function Bq() {
  return GA || (GA = 1, (function(e, t) {
    var n = IM(), r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, l = o && o.exports === r, c = l && n.process, f = (function() {
      try {
        var d = o && o.require && o.require("util").types;
        return d || c && c.binding && c.binding("util");
      } catch {
      }
    })();
    e.exports = f;
  })(vl, vl.exports)), vl.exports;
}
var Xy, YA;
function wC() {
  if (YA) return Xy;
  YA = 1;
  var e = qq(), t = OC(), n = Bq(), r = n && n.isTypedArray, o = r ? t(r) : e;
  return Xy = o, Xy;
}
var Vy, KA;
function kq() {
  if (KA) return Vy;
  KA = 1;
  var e = Rq(), t = X0(), n = un(), r = _C(), o = V0(), l = wC(), c = Object.prototype, f = c.hasOwnProperty;
  function d(h, y) {
    var v = n(h), g = !v && t(h), b = !v && !g && r(h), _ = !v && !g && !b && l(h), S = v || g || b || _, x = S ? e(h.length, String) : [], A = x.length;
    for (var E in h)
      (y || f.call(h, E)) && !(S && // Safari 9 has enumerable `arguments.length` in strict mode.
      (E == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      b && (E == "offset" || E == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      _ && (E == "buffer" || E == "byteLength" || E == "byteOffset") || // Skip index properties.
      o(E, A))) && x.push(E);
    return x;
  }
  return Vy = d, Vy;
}
var Fy, XA;
function Lq() {
  if (XA) return Fy;
  XA = 1;
  var e = Object.prototype;
  function t(n) {
    var r = n && n.constructor, o = typeof r == "function" && r.prototype || e;
    return n === o;
  }
  return Fy = t, Fy;
}
var Wy, VA;
function AC() {
  if (VA) return Wy;
  VA = 1;
  function e(t, n) {
    return function(r) {
      return t(n(r));
    };
  }
  return Wy = e, Wy;
}
var Zy, FA;
function Uq() {
  if (FA) return Zy;
  FA = 1;
  var e = AC(), t = e(Object.keys, Object);
  return Zy = t, Zy;
}
var Qy, WA;
function Iq() {
  if (WA) return Qy;
  WA = 1;
  var e = Lq(), t = Uq(), n = Object.prototype, r = n.hasOwnProperty;
  function o(l) {
    if (!e(l))
      return t(l);
    var c = [];
    for (var f in Object(l))
      r.call(l, f) && f != "constructor" && c.push(f);
    return c;
  }
  return Qy = o, Qy;
}
var Jy, ZA;
function fc() {
  if (ZA) return Jy;
  ZA = 1;
  var e = R0(), t = F0();
  function n(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Jy = n, Jy;
}
var em, QA;
function hd() {
  if (QA) return em;
  QA = 1;
  var e = kq(), t = Iq(), n = fc();
  function r(o) {
    return n(o) ? e(o) : t(o);
  }
  return em = r, em;
}
var tm, JA;
function Hq() {
  if (JA) return tm;
  JA = 1;
  var e = Cq(), t = Nq(), n = hd();
  function r(o) {
    return e(o, n, t);
  }
  return tm = r, tm;
}
var nm, eT;
function Gq() {
  if (eT) return nm;
  eT = 1;
  var e = Hq(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function o(l, c, f, d, h, y) {
    var v = f & t, g = e(l), b = g.length, _ = e(c), S = _.length;
    if (b != S && !v)
      return !1;
    for (var x = b; x--; ) {
      var A = g[x];
      if (!(v ? A in c : r.call(c, A)))
        return !1;
    }
    var E = y.get(l), M = y.get(c);
    if (E && M)
      return E == c && M == l;
    var j = !0;
    y.set(l, c), y.set(c, l);
    for (var w = v; ++x < b; ) {
      A = g[x];
      var T = l[A], C = c[A];
      if (d)
        var R = v ? d(C, T, A, c, l, y) : d(T, C, A, l, c, y);
      if (!(R === void 0 ? T === C || h(T, C, f, d, y) : R)) {
        j = !1;
        break;
      }
      w || (w = A == "constructor");
    }
    if (j && !w) {
      var N = l.constructor, K = c.constructor;
      N != K && "constructor" in l && "constructor" in c && !(typeof N == "function" && N instanceof N && typeof K == "function" && K instanceof K) && (j = !1);
    }
    return y.delete(l), y.delete(c), j;
  }
  return nm = o, nm;
}
var rm, tT;
function Yq() {
  if (tT) return rm;
  tT = 1;
  var e = bi(), t = pr(), n = e(t, "DataView");
  return rm = n, rm;
}
var am, nT;
function Kq() {
  if (nT) return am;
  nT = 1;
  var e = bi(), t = pr(), n = e(t, "Promise");
  return am = n, am;
}
var im, rT;
function TC() {
  if (rT) return im;
  rT = 1;
  var e = bi(), t = pr(), n = e(t, "Set");
  return im = n, im;
}
var om, aT;
function Xq() {
  if (aT) return om;
  aT = 1;
  var e = bi(), t = pr(), n = e(t, "WeakMap");
  return om = n, om;
}
var um, iT;
function Vq() {
  if (iT) return um;
  iT = 1;
  var e = Yq(), t = z0(), n = Kq(), r = TC(), o = Xq(), l = Xr(), c = HM(), f = "[object Map]", d = "[object Object]", h = "[object Promise]", y = "[object Set]", v = "[object WeakMap]", g = "[object DataView]", b = c(e), _ = c(t), S = c(n), x = c(r), A = c(o), E = l;
  return (e && E(new e(new ArrayBuffer(1))) != g || t && E(new t()) != f || n && E(n.resolve()) != h || r && E(new r()) != y || o && E(new o()) != v) && (E = function(M) {
    var j = l(M), w = j == d ? M.constructor : void 0, T = w ? c(w) : "";
    if (T)
      switch (T) {
        case b:
          return g;
        case _:
          return f;
        case S:
          return h;
        case x:
          return y;
        case A:
          return v;
      }
    return j;
  }), um = E, um;
}
var lm, oT;
function Fq() {
  if (oT) return lm;
  oT = 1;
  var e = yC(), t = xC(), n = Mq(), r = Gq(), o = Vq(), l = un(), c = _C(), f = wC(), d = 1, h = "[object Arguments]", y = "[object Array]", v = "[object Object]", g = Object.prototype, b = g.hasOwnProperty;
  function _(S, x, A, E, M, j) {
    var w = l(S), T = l(x), C = w ? y : o(S), R = T ? y : o(x);
    C = C == h ? v : C, R = R == h ? v : R;
    var N = C == v, K = R == v, L = C == R;
    if (L && c(S)) {
      if (!c(x))
        return !1;
      w = !0, N = !1;
    }
    if (L && !N)
      return j || (j = new e()), w || f(S) ? t(S, x, A, E, M, j) : n(S, x, C, A, E, M, j);
    if (!(A & d)) {
      var B = N && b.call(S, "__wrapped__"), F = K && b.call(x, "__wrapped__");
      if (B || F) {
        var G = B ? S.value() : S, V = F ? x.value() : x;
        return j || (j = new e()), M(G, V, A, E, j);
      }
    }
    return L ? (j || (j = new e()), r(S, x, A, E, M, j)) : !1;
  }
  return lm = _, lm;
}
var cm, uT;
function W0() {
  if (uT) return cm;
  uT = 1;
  var e = Fq(), t = Vr();
  function n(r, o, l, c, f) {
    return r === o ? !0 : r == null || o == null || !t(r) && !t(o) ? r !== r && o !== o : e(r, o, l, c, n, f);
  }
  return cm = n, cm;
}
var sm, lT;
function Wq() {
  if (lT) return sm;
  lT = 1;
  var e = yC(), t = W0(), n = 1, r = 2;
  function o(l, c, f, d) {
    var h = f.length, y = h, v = !d;
    if (l == null)
      return !y;
    for (l = Object(l); h--; ) {
      var g = f[h];
      if (v && g[2] ? g[1] !== l[g[0]] : !(g[0] in l))
        return !1;
    }
    for (; ++h < y; ) {
      g = f[h];
      var b = g[0], _ = l[b], S = g[1];
      if (v && g[2]) {
        if (_ === void 0 && !(b in l))
          return !1;
      } else {
        var x = new e();
        if (d)
          var A = d(_, S, b, l, c, x);
        if (!(A === void 0 ? t(S, _, n | r, d, x) : A))
          return !1;
      }
    }
    return !0;
  }
  return sm = o, sm;
}
var fm, cT;
function EC() {
  if (cT) return fm;
  cT = 1;
  var e = Ca();
  function t(n) {
    return n === n && !e(n);
  }
  return fm = t, fm;
}
var dm, sT;
function Zq() {
  if (sT) return dm;
  sT = 1;
  var e = EC(), t = hd();
  function n(r) {
    for (var o = t(r), l = o.length; l--; ) {
      var c = o[l], f = r[c];
      o[l] = [c, f, e(f)];
    }
    return o;
  }
  return dm = n, dm;
}
var hm, fT;
function jC() {
  if (fT) return hm;
  fT = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return hm = e, hm;
}
var pm, dT;
function Qq() {
  if (dT) return pm;
  dT = 1;
  var e = Wq(), t = Zq(), n = jC();
  function r(o) {
    var l = t(o);
    return l.length == 1 && l[0][2] ? n(l[0][0], l[0][1]) : function(c) {
      return c === o || e(c, o, l);
    };
  }
  return pm = r, pm;
}
var vm, hT;
function Jq() {
  if (hT) return vm;
  hT = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return vm = e, vm;
}
var ym, pT;
function eB() {
  if (pT) return ym;
  pT = 1;
  var e = KM(), t = X0(), n = un(), r = V0(), o = F0(), l = ud();
  function c(f, d, h) {
    d = e(d, f);
    for (var y = -1, v = d.length, g = !1; ++y < v; ) {
      var b = l(d[y]);
      if (!(g = f != null && h(f, b)))
        break;
      f = f[b];
    }
    return g || ++y != v ? g : (v = f == null ? 0 : f.length, !!v && o(v) && r(b, v) && (n(f) || t(f)));
  }
  return ym = c, ym;
}
var mm, vT;
function tB() {
  if (vT) return mm;
  vT = 1;
  var e = Jq(), t = eB();
  function n(r, o) {
    return r != null && t(r, o, e);
  }
  return mm = n, mm;
}
var gm, yT;
function nB() {
  if (yT) return gm;
  yT = 1;
  var e = W0(), t = XM(), n = tB(), r = N0(), o = EC(), l = jC(), c = ud(), f = 1, d = 2;
  function h(y, v) {
    return r(y) && o(v) ? l(c(y), v) : function(g) {
      var b = t(g, y);
      return b === void 0 && b === v ? n(g, y) : e(v, b, f | d);
    };
  }
  return gm = h, gm;
}
var bm, mT;
function ru() {
  if (mT) return bm;
  mT = 1;
  function e(t) {
    return t;
  }
  return bm = e, bm;
}
var xm, gT;
function rB() {
  if (gT) return xm;
  gT = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return xm = e, xm;
}
var Sm, bT;
function aB() {
  if (bT) return Sm;
  bT = 1;
  var e = k0();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Sm = t, Sm;
}
var _m, xT;
function iB() {
  if (xT) return _m;
  xT = 1;
  var e = rB(), t = aB(), n = N0(), r = ud();
  function o(l) {
    return n(l) ? e(r(l)) : t(l);
  }
  return _m = o, _m;
}
var Om, ST;
function Da() {
  if (ST) return Om;
  ST = 1;
  var e = Qq(), t = nB(), n = ru(), r = un(), o = iB();
  function l(c) {
    return typeof c == "function" ? c : c == null ? n : typeof c == "object" ? r(c) ? t(c[0], c[1]) : e(c) : o(c);
  }
  return Om = l, Om;
}
var wm, _T;
function MC() {
  if (_T) return wm;
  _T = 1;
  function e(t, n, r, o) {
    for (var l = t.length, c = r + (o ? 1 : -1); o ? c-- : ++c < l; )
      if (n(t[c], c, t))
        return c;
    return -1;
  }
  return wm = e, wm;
}
var Am, OT;
function oB() {
  if (OT) return Am;
  OT = 1;
  function e(t) {
    return t !== t;
  }
  return Am = e, Am;
}
var Tm, wT;
function uB() {
  if (wT) return Tm;
  wT = 1;
  function e(t, n, r) {
    for (var o = r - 1, l = t.length; ++o < l; )
      if (t[o] === n)
        return o;
    return -1;
  }
  return Tm = e, Tm;
}
var Em, AT;
function lB() {
  if (AT) return Em;
  AT = 1;
  var e = MC(), t = oB(), n = uB();
  function r(o, l, c) {
    return l === l ? n(o, l, c) : e(o, t, c);
  }
  return Em = r, Em;
}
var jm, TT;
function cB() {
  if (TT) return jm;
  TT = 1;
  var e = lB();
  function t(n, r) {
    var o = n == null ? 0 : n.length;
    return !!o && e(n, r, 0) > -1;
  }
  return jm = t, jm;
}
var Mm, ET;
function sB() {
  if (ET) return Mm;
  ET = 1;
  function e(t, n, r) {
    for (var o = -1, l = t == null ? 0 : t.length; ++o < l; )
      if (r(n, t[o]))
        return !0;
    return !1;
  }
  return Mm = e, Mm;
}
var Cm, jT;
function fB() {
  if (jT) return Cm;
  jT = 1;
  function e() {
  }
  return Cm = e, Cm;
}
var Dm, MT;
function dB() {
  if (MT) return Dm;
  MT = 1;
  var e = TC(), t = fB(), n = K0(), r = 1 / 0, o = e && 1 / n(new e([, -0]))[1] == r ? function(l) {
    return new e(l);
  } : t;
  return Dm = o, Dm;
}
var Pm, CT;
function hB() {
  if (CT) return Pm;
  CT = 1;
  var e = mC(), t = cB(), n = sB(), r = bC(), o = dB(), l = K0(), c = 200;
  function f(d, h, y) {
    var v = -1, g = t, b = d.length, _ = !0, S = [], x = S;
    if (y)
      _ = !1, g = n;
    else if (b >= c) {
      var A = h ? null : o(d);
      if (A)
        return l(A);
      _ = !1, g = r, x = new e();
    } else
      x = h ? [] : S;
    e:
      for (; ++v < b; ) {
        var E = d[v], M = h ? h(E) : E;
        if (E = y || E !== 0 ? E : 0, _ && M === M) {
          for (var j = x.length; j--; )
            if (x[j] === M)
              continue e;
          h && x.push(M), S.push(E);
        } else g(x, M, y) || (x !== S && x.push(M), S.push(E));
      }
    return S;
  }
  return Pm = f, Pm;
}
var Nm, DT;
function pB() {
  if (DT) return Nm;
  DT = 1;
  var e = Da(), t = hB();
  function n(r, o) {
    return r && r.length ? t(r, e(o, 2)) : [];
  }
  return Nm = n, Nm;
}
var vB = pB();
const PT = /* @__PURE__ */ et(vB);
function CC(e, t, n) {
  return t === !0 ? PT(e, n) : Ee(t) ? PT(e, t) : e;
}
function Mo(e) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mo(e);
}
var yB = ["ref"];
function NT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? NT(Object(n), !0).forEach(function(r) {
      pd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : NT(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function RT(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, PC(r.key), r);
  }
}
function gB(e, t, n) {
  return t && RT(e.prototype, t), n && RT(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bB(e, t, n) {
  return t = cf(t), xB(e, DC() ? Reflect.construct(t, n || [], cf(e).constructor) : t.apply(e, n));
}
function xB(e, t) {
  if (t && (Mo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return SB(e);
}
function SB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function DC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DC = function() {
    return !!e;
  })();
}
function cf(e) {
  return cf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, cf(e);
}
function _B(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sb(e, t);
}
function Sb(e, t) {
  return Sb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Sb(e, t);
}
function pd(e, t, n) {
  return t = PC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function PC(e) {
  var t = OB(e, "string");
  return Mo(t) == "symbol" ? t : t + "";
}
function OB(e, t) {
  if (Mo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Mo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wB(e, t) {
  if (e == null) return {};
  var n = AB(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function AB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function TB(e) {
  return e.value;
}
function EB(e, t) {
  if (/* @__PURE__ */ k.isValidElement(e))
    return /* @__PURE__ */ k.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ k.createElement(e, t);
  t.ref;
  var n = wB(t, yB);
  return /* @__PURE__ */ k.createElement(Y0, n);
}
var $T = 1, Oo = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    mB(this, t);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = bB(this, t, [].concat(o)), pd(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return _B(t, e), gB(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > $T || Math.abs(o.height - this.lastBoundingBox.height) > $T) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? $r({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, l = o.layout, c = o.align, f = o.verticalAlign, d = o.margin, h = o.chartWidth, y = o.chartHeight, v, g;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (c === "center" && l === "vertical") {
          var b = this.getBBoxSnapshot();
          v = {
            left: ((h || 0) - b.width) / 2
          };
        } else
          v = c === "right" ? {
            right: d && d.right || 0
          } : {
            left: d && d.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (f === "middle") {
          var _ = this.getBBoxSnapshot();
          g = {
            top: ((y || 0) - _.height) / 2
          };
        } else
          g = f === "bottom" ? {
            bottom: d && d.bottom || 0
          } : {
            top: d && d.top || 0
          };
      return $r($r({}, v), g);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.content, c = o.width, f = o.height, d = o.wrapperStyle, h = o.payloadUniqBy, y = o.payload, v = $r($r({
        position: "absolute",
        width: c || "auto",
        height: f || "auto"
      }, this.getDefaultPosition(d)), d);
      return /* @__PURE__ */ k.createElement("div", {
        className: "recharts-legend-wrapper",
        style: v,
        ref: function(b) {
          r.wrapperNode = b;
        }
      }, EB(l, $r($r({}, this.props), {}, {
        payload: CC(y, h, TB)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var l = $r($r({}, this.defaultProps), r.props), c = l.layout;
      return c === "vertical" && de(r.props.height) ? {
        height: r.props.height
      } : c === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
})(ee.PureComponent);
pd(Oo, "displayName", "Legend");
pd(Oo, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Rm, zT;
function jB() {
  if (zT) return Rm;
  zT = 1;
  var e = sc(), t = X0(), n = un(), r = e ? e.isConcatSpreadable : void 0;
  function o(l) {
    return n(l) || t(l) || !!(r && l && l[r]);
  }
  return Rm = o, Rm;
}
var $m, qT;
function NC() {
  if (qT) return $m;
  qT = 1;
  var e = SC(), t = jB();
  function n(r, o, l, c, f) {
    var d = -1, h = r.length;
    for (l || (l = t), f || (f = []); ++d < h; ) {
      var y = r[d];
      o > 0 && l(y) ? o > 1 ? n(y, o - 1, l, c, f) : e(f, y) : c || (f[f.length] = y);
    }
    return f;
  }
  return $m = n, $m;
}
var zm, BT;
function MB() {
  if (BT) return zm;
  BT = 1;
  function e(t) {
    return function(n, r, o) {
      for (var l = -1, c = Object(n), f = o(n), d = f.length; d--; ) {
        var h = f[t ? d : ++l];
        if (r(c[h], h, c) === !1)
          break;
      }
      return n;
    };
  }
  return zm = e, zm;
}
var qm, kT;
function CB() {
  if (kT) return qm;
  kT = 1;
  var e = MB(), t = e();
  return qm = t, qm;
}
var Bm, LT;
function RC() {
  if (LT) return Bm;
  LT = 1;
  var e = CB(), t = hd();
  function n(r, o) {
    return r && e(r, o, t);
  }
  return Bm = n, Bm;
}
var km, UT;
function DB() {
  if (UT) return km;
  UT = 1;
  var e = fc();
  function t(n, r) {
    return function(o, l) {
      if (o == null)
        return o;
      if (!e(o))
        return n(o, l);
      for (var c = o.length, f = r ? c : -1, d = Object(o); (r ? f-- : ++f < c) && l(d[f], f, d) !== !1; )
        ;
      return o;
    };
  }
  return km = t, km;
}
var Lm, IT;
function Z0() {
  if (IT) return Lm;
  IT = 1;
  var e = RC(), t = DB(), n = t(e);
  return Lm = n, Lm;
}
var Um, HT;
function $C() {
  if (HT) return Um;
  HT = 1;
  var e = Z0(), t = fc();
  function n(r, o) {
    var l = -1, c = t(r) ? Array(r.length) : [];
    return e(r, function(f, d, h) {
      c[++l] = o(f, d, h);
    }), c;
  }
  return Um = n, Um;
}
var Im, GT;
function PB() {
  if (GT) return Im;
  GT = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return Im = e, Im;
}
var Hm, YT;
function NB() {
  if (YT) return Hm;
  YT = 1;
  var e = eu();
  function t(n, r) {
    if (n !== r) {
      var o = n !== void 0, l = n === null, c = n === n, f = e(n), d = r !== void 0, h = r === null, y = r === r, v = e(r);
      if (!h && !v && !f && n > r || f && d && y && !h && !v || l && d && y || !o && y || !c)
        return 1;
      if (!l && !f && !v && n < r || v && o && c && !l && !f || h && o && c || !d && c || !y)
        return -1;
    }
    return 0;
  }
  return Hm = t, Hm;
}
var Gm, KT;
function RB() {
  if (KT) return Gm;
  KT = 1;
  var e = NB();
  function t(n, r, o) {
    for (var l = -1, c = n.criteria, f = r.criteria, d = c.length, h = o.length; ++l < d; ) {
      var y = e(c[l], f[l]);
      if (y) {
        if (l >= h)
          return y;
        var v = o[l];
        return y * (v == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return Gm = t, Gm;
}
var Ym, XT;
function $B() {
  if (XT) return Ym;
  XT = 1;
  var e = B0(), t = k0(), n = Da(), r = $C(), o = PB(), l = OC(), c = RB(), f = ru(), d = un();
  function h(y, v, g) {
    v.length ? v = e(v, function(S) {
      return d(S) ? function(x) {
        return t(x, S.length === 1 ? S[0] : S);
      } : S;
    }) : v = [f];
    var b = -1;
    v = e(v, l(n));
    var _ = r(y, function(S, x, A) {
      var E = e(v, function(M) {
        return M(S);
      });
      return { criteria: E, index: ++b, value: S };
    });
    return o(_, function(S, x) {
      return c(S, x, g);
    });
  }
  return Ym = h, Ym;
}
var Km, VT;
function zB() {
  if (VT) return Km;
  VT = 1;
  function e(t, n, r) {
    switch (r.length) {
      case 0:
        return t.call(n);
      case 1:
        return t.call(n, r[0]);
      case 2:
        return t.call(n, r[0], r[1]);
      case 3:
        return t.call(n, r[0], r[1], r[2]);
    }
    return t.apply(n, r);
  }
  return Km = e, Km;
}
var Xm, FT;
function qB() {
  if (FT) return Xm;
  FT = 1;
  var e = zB(), t = Math.max;
  function n(r, o, l) {
    return o = t(o === void 0 ? r.length - 1 : o, 0), function() {
      for (var c = arguments, f = -1, d = t(c.length - o, 0), h = Array(d); ++f < d; )
        h[f] = c[o + f];
      f = -1;
      for (var y = Array(o + 1); ++f < o; )
        y[f] = c[f];
      return y[o] = l(h), e(r, this, y);
    };
  }
  return Xm = n, Xm;
}
var Vm, WT;
function BB() {
  if (WT) return Vm;
  WT = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Vm = e, Vm;
}
var Fm, ZT;
function zC() {
  if (ZT) return Fm;
  ZT = 1;
  var e = bi(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Fm = t, Fm;
}
var Wm, QT;
function kB() {
  if (QT) return Wm;
  QT = 1;
  var e = BB(), t = zC(), n = ru(), r = t ? function(o, l) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(l),
      writable: !0
    });
  } : n;
  return Wm = r, Wm;
}
var Zm, JT;
function LB() {
  if (JT) return Zm;
  JT = 1;
  var e = 800, t = 16, n = Date.now;
  function r(o) {
    var l = 0, c = 0;
    return function() {
      var f = n(), d = t - (f - c);
      if (c = f, d > 0) {
        if (++l >= e)
          return arguments[0];
      } else
        l = 0;
      return o.apply(void 0, arguments);
    };
  }
  return Zm = r, Zm;
}
var Qm, eE;
function UB() {
  if (eE) return Qm;
  eE = 1;
  var e = kB(), t = LB(), n = t(e);
  return Qm = n, Qm;
}
var Jm, tE;
function IB() {
  if (tE) return Jm;
  tE = 1;
  var e = ru(), t = qB(), n = UB();
  function r(o, l) {
    return n(t(o, l, e), o + "");
  }
  return Jm = r, Jm;
}
var eg, nE;
function vd() {
  if (nE) return eg;
  nE = 1;
  var e = $0(), t = fc(), n = V0(), r = Ca();
  function o(l, c, f) {
    if (!r(f))
      return !1;
    var d = typeof c;
    return (d == "number" ? t(f) && n(c, f.length) : d == "string" && c in f) ? e(f[c], l) : !1;
  }
  return eg = o, eg;
}
var tg, rE;
function HB() {
  if (rE) return tg;
  rE = 1;
  var e = NC(), t = $B(), n = IB(), r = vd(), o = n(function(l, c) {
    if (l == null)
      return [];
    var f = c.length;
    return f > 1 && r(l, c[0], c[1]) ? c = [] : f > 2 && r(c[0], c[1], c[2]) && (c = [c[0]]), t(l, e(c, 1), []);
  });
  return tg = o, tg;
}
var GB = HB();
const Q0 = /* @__PURE__ */ et(GB);
function Dl(e) {
  "@babel/helpers - typeof";
  return Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dl(e);
}
function _b() {
  return _b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _b.apply(this, arguments);
}
function YB(e, t) {
  return FB(e) || VB(e, t) || XB(e, t) || KB();
}
function KB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XB(e, t) {
  if (e) {
    if (typeof e == "string") return aE(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aE(e, t);
  }
}
function aE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function VB(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function FB(e) {
  if (Array.isArray(e)) return e;
}
function iE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ng(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iE(Object(n), !0).forEach(function(r) {
      WB(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iE(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function WB(e, t, n) {
  return t = ZB(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ZB(e) {
  var t = QB(e, "string");
  return Dl(t) == "symbol" ? t : t + "";
}
function QB(e, t) {
  if (Dl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Dl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JB(e) {
  return Array.isArray(e) && wt(e[0]) && wt(e[1]) ? e.join(" ~ ") : e;
}
var e8 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, l = o === void 0 ? {} : o, c = t.itemStyle, f = c === void 0 ? {} : c, d = t.labelStyle, h = d === void 0 ? {} : d, y = t.payload, v = t.formatter, g = t.itemSorter, b = t.wrapperClassName, _ = t.labelClassName, S = t.label, x = t.labelFormatter, A = t.accessibilityLayer, E = A === void 0 ? !1 : A, M = function() {
    if (y && y.length) {
      var B = {
        padding: 0,
        margin: 0
      }, F = (g ? Q0(y, g) : y).map(function(G, V) {
        if (G.type === "none")
          return null;
        var $ = ng({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: G.color || "#000"
        }, f), Y = G.formatter || v || JB, ne = G.value, H = G.name, J = ne, P = H;
        if (Y && J != null && P != null) {
          var U = Y(ne, H, G, V, y);
          if (Array.isArray(U)) {
            var re = YB(U, 2);
            J = re[0], P = re[1];
          } else
            J = U;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ k.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(V),
            style: $
          }, wt(P) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, P) : null, wt(P) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, J), /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, G.unit || ""))
        );
      });
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: B
      }, F);
    }
    return null;
  }, j = ng({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, l), w = ng({
    margin: 0
  }, h), T = !we(S), C = T ? S : "", R = $e("recharts-default-tooltip", b), N = $e("recharts-tooltip-label", _);
  T && x && y !== void 0 && y !== null && (C = x(S, y));
  var K = E ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ k.createElement("div", _b({
    className: R,
    style: j
  }, K), /* @__PURE__ */ k.createElement("p", {
    className: N,
    style: w
  }, /* @__PURE__ */ k.isValidElement(C) ? C : "".concat(C)), M());
};
function Pl(e) {
  "@babel/helpers - typeof";
  return Pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pl(e);
}
function qs(e, t, n) {
  return t = t8(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function t8(e) {
  var t = n8(e, "string");
  return Pl(t) == "symbol" ? t : t + "";
}
function n8(e, t) {
  if (Pl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var al = "recharts-tooltip-wrapper", r8 = {
  visibility: "hidden"
};
function a8(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return $e(al, qs(qs(qs(qs({}, "".concat(al, "-right"), de(n) && t && de(t.x) && n >= t.x), "".concat(al, "-left"), de(n) && t && de(t.x) && n < t.x), "".concat(al, "-bottom"), de(r) && t && de(t.y) && r >= t.y), "".concat(al, "-top"), de(r) && t && de(t.y) && r < t.y));
}
function oE(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, l = e.position, c = e.reverseDirection, f = e.tooltipDimension, d = e.viewBox, h = e.viewBoxDimension;
  if (l && de(l[r]))
    return l[r];
  var y = n[r] - f - o, v = n[r] + o;
  if (t[r])
    return c[r] ? y : v;
  if (c[r]) {
    var g = y, b = d[r];
    return g < b ? Math.max(v, d[r]) : Math.max(y, d[r]);
  }
  var _ = v + f, S = d[r] + h;
  return _ > S ? Math.max(y, d[r]) : Math.max(v, d[r]);
}
function i8(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function o8(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, l = e.reverseDirection, c = e.tooltipBox, f = e.useTranslate3d, d = e.viewBox, h, y, v;
  return c.height > 0 && c.width > 0 && n ? (y = oE({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: l,
    tooltipDimension: c.width,
    viewBox: d,
    viewBoxDimension: d.width
  }), v = oE({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: l,
    tooltipDimension: c.height,
    viewBox: d,
    viewBoxDimension: d.height
  }), h = i8({
    translateX: y,
    translateY: v,
    useTranslate3d: f
  })) : h = r8, {
    cssProperties: h,
    cssClasses: a8({
      translateX: y,
      translateY: v,
      coordinate: n
    })
  };
}
function Co(e) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e);
}
function uE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uE(Object(n), !0).forEach(function(r) {
      wb(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uE(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function u8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, BC(r.key), r);
  }
}
function c8(e, t, n) {
  return t && l8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s8(e, t, n) {
  return t = sf(t), f8(e, qC() ? Reflect.construct(t, n || [], sf(e).constructor) : t.apply(e, n));
}
function f8(e, t) {
  if (t && (Co(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d8(e);
}
function d8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qC = function() {
    return !!e;
  })();
}
function sf(e) {
  return sf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, sf(e);
}
function h8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ob(e, t);
}
function Ob(e, t) {
  return Ob = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ob(e, t);
}
function wb(e, t, n) {
  return t = BC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function BC(e) {
  var t = p8(e, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function p8(e, t) {
  if (Co(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Co(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var cE = 1, v8 = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    u8(this, t);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = s8(this, t, [].concat(o)), wb(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), wb(n, "handleKeyDown", function(c) {
      if (c.key === "Escape") {
        var f, d, h, y;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (f = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.x) !== null && f !== void 0 ? f : 0,
            y: (h = (y = n.props.coordinate) === null || y === void 0 ? void 0 : y.y) !== null && h !== void 0 ? h : 0
          }
        });
      }
    }), n;
  }
  return h8(t, e), c8(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > cE || Math.abs(r.height - this.state.lastBoundingBox.height) > cE) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.active, c = o.allowEscapeViewBox, f = o.animationDuration, d = o.animationEasing, h = o.children, y = o.coordinate, v = o.hasPayload, g = o.isAnimationActive, b = o.offset, _ = o.position, S = o.reverseDirection, x = o.useTranslate3d, A = o.viewBox, E = o.wrapperStyle, M = o8({
        allowEscapeViewBox: c,
        coordinate: y,
        offsetTopLeft: b,
        position: _,
        reverseDirection: S,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: x,
        viewBox: A
      }), j = M.cssClasses, w = M.cssProperties, T = lE(lE({
        transition: g && l ? "transform ".concat(f, "ms ").concat(d) : void 0
      }, w), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && l && v ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, E);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ k.createElement("div", {
          tabIndex: -1,
          className: j,
          style: T,
          ref: function(R) {
            r.wrapperNode = R;
          }
        }, h)
      );
    }
  }]);
})(ee.PureComponent), y8 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Pa = {
  isSsr: y8()
};
function Do(e) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e);
}
function sE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sE(Object(n), !0).forEach(function(r) {
      J0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sE(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function m8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function g8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, LC(r.key), r);
  }
}
function b8(e, t, n) {
  return t && g8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function x8(e, t, n) {
  return t = ff(t), S8(e, kC() ? Reflect.construct(t, n || [], ff(e).constructor) : t.apply(e, n));
}
function S8(e, t) {
  if (t && (Do(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _8(e);
}
function _8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kC() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kC = function() {
    return !!e;
  })();
}
function ff(e) {
  return ff = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ff(e);
}
function O8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ab(e, t);
}
function Ab(e, t) {
  return Ab = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ab(e, t);
}
function J0(e, t, n) {
  return t = LC(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function LC(e) {
  var t = w8(e, "string");
  return Do(t) == "symbol" ? t : t + "";
}
function w8(e, t) {
  if (Do(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Do(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function A8(e) {
  return e.dataKey;
}
function T8(e, t) {
  return /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ k.createElement(e, t) : /* @__PURE__ */ k.createElement(e8, t);
}
var xn = /* @__PURE__ */ (function(e) {
  function t() {
    return m8(this, t), x8(this, t, arguments);
  }
  return O8(t, e), b8(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.active, c = o.allowEscapeViewBox, f = o.animationDuration, d = o.animationEasing, h = o.content, y = o.coordinate, v = o.filterNull, g = o.isAnimationActive, b = o.offset, _ = o.payload, S = o.payloadUniqBy, x = o.position, A = o.reverseDirection, E = o.useTranslate3d, M = o.viewBox, j = o.wrapperStyle, w = _ ?? [];
      v && w.length && (w = CC(_.filter(function(C) {
        return C.value != null && (C.hide !== !0 || r.props.includeHidden);
      }), S, A8));
      var T = w.length > 0;
      return /* @__PURE__ */ k.createElement(v8, {
        allowEscapeViewBox: c,
        animationDuration: f,
        animationEasing: d,
        isAnimationActive: g,
        active: l,
        coordinate: y,
        hasPayload: T,
        offset: b,
        position: x,
        reverseDirection: A,
        useTranslate3d: E,
        viewBox: M,
        wrapperStyle: j
      }, T8(h, fE(fE({}, this.props), {}, {
        payload: w
      })));
    }
  }]);
})(ee.PureComponent);
J0(xn, "displayName", "Tooltip");
J0(xn, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Pa.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var rg, dE;
function E8() {
  if (dE) return rg;
  dE = 1;
  var e = pr(), t = function() {
    return e.Date.now();
  };
  return rg = t, rg;
}
var ag, hE;
function j8() {
  if (hE) return ag;
  hE = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return ag = t, ag;
}
var ig, pE;
function M8() {
  if (pE) return ig;
  pE = 1;
  var e = j8(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return ig = n, ig;
}
var og, vE;
function UC() {
  if (vE) return og;
  vE = 1;
  var e = M8(), t = Ca(), n = eu(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, f = parseInt;
  function d(h) {
    if (typeof h == "number")
      return h;
    if (n(h))
      return r;
    if (t(h)) {
      var y = typeof h.valueOf == "function" ? h.valueOf() : h;
      h = t(y) ? y + "" : y;
    }
    if (typeof h != "string")
      return h === 0 ? h : +h;
    h = e(h);
    var v = l.test(h);
    return v || c.test(h) ? f(h.slice(2), v ? 2 : 8) : o.test(h) ? r : +h;
  }
  return og = d, og;
}
var ug, yE;
function C8() {
  if (yE) return ug;
  yE = 1;
  var e = Ca(), t = E8(), n = UC(), r = "Expected a function", o = Math.max, l = Math.min;
  function c(f, d, h) {
    var y, v, g, b, _, S, x = 0, A = !1, E = !1, M = !0;
    if (typeof f != "function")
      throw new TypeError(r);
    d = n(d) || 0, e(h) && (A = !!h.leading, E = "maxWait" in h, g = E ? o(n(h.maxWait) || 0, d) : g, M = "trailing" in h ? !!h.trailing : M);
    function j(F) {
      var G = y, V = v;
      return y = v = void 0, x = F, b = f.apply(V, G), b;
    }
    function w(F) {
      return x = F, _ = setTimeout(R, d), A ? j(F) : b;
    }
    function T(F) {
      var G = F - S, V = F - x, $ = d - G;
      return E ? l($, g - V) : $;
    }
    function C(F) {
      var G = F - S, V = F - x;
      return S === void 0 || G >= d || G < 0 || E && V >= g;
    }
    function R() {
      var F = t();
      if (C(F))
        return N(F);
      _ = setTimeout(R, T(F));
    }
    function N(F) {
      return _ = void 0, M && y ? j(F) : (y = v = void 0, b);
    }
    function K() {
      _ !== void 0 && clearTimeout(_), x = 0, y = S = v = _ = void 0;
    }
    function L() {
      return _ === void 0 ? b : N(t());
    }
    function B() {
      var F = t(), G = C(F);
      if (y = arguments, v = this, S = F, G) {
        if (_ === void 0)
          return w(S);
        if (E)
          return clearTimeout(_), _ = setTimeout(R, d), j(S);
      }
      return _ === void 0 && (_ = setTimeout(R, d)), b;
    }
    return B.cancel = K, B.flush = L, B;
  }
  return ug = c, ug;
}
var lg, mE;
function D8() {
  if (mE) return lg;
  mE = 1;
  var e = C8(), t = Ca(), n = "Expected a function";
  function r(o, l, c) {
    var f = !0, d = !0;
    if (typeof o != "function")
      throw new TypeError(n);
    return t(c) && (f = "leading" in c ? !!c.leading : f, d = "trailing" in c ? !!c.trailing : d), e(o, l, {
      leading: f,
      maxWait: l,
      trailing: d
    });
  }
  return lg = r, lg;
}
var P8 = D8();
const IC = /* @__PURE__ */ et(P8);
function Nl(e) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nl(e);
}
function gE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gE(Object(n), !0).forEach(function(r) {
      N8(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gE(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function N8(e, t, n) {
  return t = R8(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function R8(e) {
  var t = $8(e, "string");
  return Nl(t) == "symbol" ? t : t + "";
}
function $8(e, t) {
  if (Nl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z8(e, t) {
  return L8(e) || k8(e, t) || B8(e, t) || q8();
}
function q8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B8(e, t) {
  if (e) {
    if (typeof e == "string") return bE(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bE(e, t);
  }
}
function bE(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function k8(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function L8(e) {
  if (Array.isArray(e)) return e;
}
var ks = /* @__PURE__ */ ee.forwardRef(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, l = e.width, c = l === void 0 ? "100%" : l, f = e.height, d = f === void 0 ? "100%" : f, h = e.minWidth, y = h === void 0 ? 0 : h, v = e.minHeight, g = e.maxHeight, b = e.children, _ = e.debounce, S = _ === void 0 ? 0 : _, x = e.id, A = e.className, E = e.onResize, M = e.style, j = M === void 0 ? {} : M, w = ee.useRef(null), T = ee.useRef();
  T.current = E, ee.useImperativeHandle(t, function() {
    return Object.defineProperty(w.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), w.current;
      },
      configurable: !0
    });
  });
  var C = ee.useState({
    containerWidth: o.width,
    containerHeight: o.height
  }), R = z8(C, 2), N = R[0], K = R[1], L = ee.useCallback(function(F, G) {
    K(function(V) {
      var $ = Math.round(F), Y = Math.round(G);
      return V.containerWidth === $ && V.containerHeight === Y ? V : {
        containerWidth: $,
        containerHeight: Y
      };
    });
  }, []);
  ee.useEffect(function() {
    var F = function(H) {
      var J, P = H[0].contentRect, U = P.width, re = P.height;
      L(U, re), (J = T.current) === null || J === void 0 || J.call(T, U, re);
    };
    S > 0 && (F = IC(F, S, {
      trailing: !0,
      leading: !1
    }));
    var G = new ResizeObserver(F), V = w.current.getBoundingClientRect(), $ = V.width, Y = V.height;
    return L($, Y), G.observe(w.current), function() {
      G.disconnect();
    };
  }, [L, S]);
  var B = ee.useMemo(function() {
    var F = N.containerWidth, G = N.containerHeight;
    if (F < 0 || G < 0)
      return null;
    Ur(ii(c) || ii(d), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, c, d), Ur(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var V = ii(c) ? F : c, $ = ii(d) ? G : d;
    n && n > 0 && (V ? $ = V / n : $ && (V = $ * n), g && $ > g && ($ = g)), Ur(V > 0 || $ > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, V, $, c, d, y, v, n);
    var Y = !Array.isArray(b) && Lr(b.type).endsWith("Chart");
    return k.Children.map(b, function(ne) {
      return /* @__PURE__ */ k.isValidElement(ne) ? /* @__PURE__ */ ee.cloneElement(ne, Bs({
        width: V,
        height: $
      }, Y ? {
        style: Bs({
          height: "100%",
          width: "100%",
          maxHeight: $,
          maxWidth: V
        }, ne.props.style)
      } : {})) : ne;
    });
  }, [n, b, d, g, v, y, N, c]);
  return /* @__PURE__ */ k.createElement("div", {
    id: x ? "".concat(x) : void 0,
    className: $e("recharts-responsive-container", A),
    style: Bs(Bs({}, j), {}, {
      width: c,
      height: d,
      minWidth: y,
      minHeight: v,
      maxHeight: g
    }),
    ref: w
  }, B);
}), yd = function(t) {
  return null;
};
yd.displayName = "Cell";
function Rl(e) {
  "@babel/helpers - typeof";
  return Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rl(e);
}
function xE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xE(Object(n), !0).forEach(function(r) {
      U8(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xE(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function U8(e, t, n) {
  return t = I8(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function I8(e) {
  var t = H8(e, "string");
  return Rl(t) == "symbol" ? t : t + "";
}
function H8(e, t) {
  if (Rl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Rl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var po = {
  widthCache: {},
  cacheCount: 0
}, G8 = 2e3, Y8 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, SE = "recharts_measurement_span";
function K8(e) {
  var t = Tb({}, e);
  return Object.keys(t).forEach(function(n) {
    t[n] || delete t[n];
  }), t;
}
var gl = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Pa.isSsr)
    return {
      width: 0,
      height: 0
    };
  var r = K8(n), o = JSON.stringify({
    text: t,
    copyStyle: r
  });
  if (po.widthCache[o])
    return po.widthCache[o];
  try {
    var l = document.getElementById(SE);
    l || (l = document.createElement("span"), l.setAttribute("id", SE), l.setAttribute("aria-hidden", "true"), document.body.appendChild(l));
    var c = Tb(Tb({}, Y8), r);
    Object.assign(l.style, c), l.textContent = "".concat(t);
    var f = l.getBoundingClientRect(), d = {
      width: f.width,
      height: f.height
    };
    return po.widthCache[o] = d, ++po.cacheCount > G8 && (po.cacheCount = 0, po.widthCache = {}), d;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, X8 = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function $l(e) {
  "@babel/helpers - typeof";
  return $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $l(e);
}
function df(e, t) {
  return Z8(e) || W8(e, t) || F8(e, t) || V8();
}
function V8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F8(e, t) {
  if (e) {
    if (typeof e == "string") return _E(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _E(e, t);
  }
}
function _E(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function W8(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        d = !1;
      } else for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function Z8(e) {
  if (Array.isArray(e)) return e;
}
function Q8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function OE(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ek(r.key), r);
  }
}
function J8(e, t, n) {
  return t && OE(e.prototype, t), n && OE(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ek(e) {
  var t = tk(e, "string");
  return $l(t) == "symbol" ? t : t + "";
}
function tk(e, t) {
  if ($l(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, AE = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, nk = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, rk = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, HC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, ak = Object.keys(HC), go = "NaN";
function ik(e, t) {
  return e * HC[t];
}
var Ls = /* @__PURE__ */ (function() {
  function e(t, n) {
    Q8(this, e), this.num = t, this.unit = n, this.num = t, this.unit = n, Number.isNaN(t) && (this.unit = ""), n !== "" && !nk.test(n) && (this.num = NaN, this.unit = ""), ak.includes(n) && (this.num = ik(t, n), this.unit = "px");
  }
  return J8(e, [{
    key: "add",
    value: function(n) {
      return this.unit !== n.unit ? new e(NaN, "") : new e(this.num + n.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(n) {
      return this.unit !== n.unit ? new e(NaN, "") : new e(this.num - n.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(n) {
      return this.unit !== "" && n.unit !== "" && this.unit !== n.unit ? new e(NaN, "") : new e(this.num * n.num, this.unit || n.unit);
    }
  }, {
    key: "divide",
    value: function(n) {
      return this.unit !== "" && n.unit !== "" && this.unit !== n.unit ? new e(NaN, "") : new e(this.num / n.num, this.unit || n.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(n) {
      var r, o = (r = rk.exec(n)) !== null && r !== void 0 ? r : [], l = df(o, 3), c = l[1], f = l[2];
      return new e(parseFloat(c), f ?? "");
    }
  }]);
})();
function GC(e) {
  if (e.includes(go))
    return go;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var n, r = (n = wE.exec(t)) !== null && n !== void 0 ? n : [], o = df(r, 4), l = o[1], c = o[2], f = o[3], d = Ls.parse(l ?? ""), h = Ls.parse(f ?? ""), y = c === "*" ? d.multiply(h) : d.divide(h);
    if (y.isNaN())
      return go;
    t = t.replace(wE, y.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var v, g = (v = AE.exec(t)) !== null && v !== void 0 ? v : [], b = df(g, 4), _ = b[1], S = b[2], x = b[3], A = Ls.parse(_ ?? ""), E = Ls.parse(x ?? ""), M = S === "+" ? A.add(E) : A.subtract(E);
    if (M.isNaN())
      return go;
    t = t.replace(AE, M.toString());
  }
  return t;
}
var TE = /\(([^()]*)\)/;
function ok(e) {
  for (var t = e; t.includes("("); ) {
    var n = TE.exec(t), r = df(n, 2), o = r[1];
    t = t.replace(TE, GC(o));
  }
  return t;
}
function uk(e) {
  var t = e.replace(/\s+/g, "");
  return t = ok(t), t = GC(t), t;
}
function lk(e) {
  try {
    return uk(e);
  } catch {
    return go;
  }
}
function cg(e) {
  var t = lk(e.slice(5, -1));
  return t === go ? "" : t;
}
var ck = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], sk = ["dx", "dy", "angle", "className", "breakAll"];
function Eb() {
  return Eb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Eb.apply(this, arguments);
}
function EE(e, t) {
  if (e == null) return {};
  var n = fk(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function jE(e, t) {
  return vk(e) || pk(e, t) || hk(e, t) || dk();
}
function dk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hk(e, t) {
  if (e) {
    if (typeof e == "string") return ME(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ME(e, t);
  }
}
function ME(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pk(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        d = !1;
      } else for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function vk(e) {
  if (Array.isArray(e)) return e;
}
var YC = /[ \f\n\r\t\v\u2028\u2029]+/, KC = function(t) {
  var n = t.children, r = t.breakAll, o = t.style;
  try {
    var l = [];
    we(n) || (r ? l = n.toString().split("") : l = n.toString().split(YC));
    var c = l.map(function(d) {
      return {
        word: d,
        width: gl(d, o).width
      };
    }), f = r ? 0 : gl(" ", o).width;
    return {
      wordsWithComputedWidth: c,
      spaceWidth: f
    };
  } catch {
    return null;
  }
}, yk = function(t, n, r, o, l) {
  var c = t.maxLines, f = t.children, d = t.style, h = t.breakAll, y = de(c), v = f, g = function() {
    var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return V.reduce(function($, Y) {
      var ne = Y.word, H = Y.width, J = $[$.length - 1];
      if (J && (o == null || l || J.width + H + r < Number(o)))
        J.words.push(ne), J.width += H + r;
      else {
        var P = {
          words: [ne],
          width: H
        };
        $.push(P);
      }
      return $;
    }, []);
  }, b = g(n), _ = function(V) {
    return V.reduce(function($, Y) {
      return $.width > Y.width ? $ : Y;
    });
  };
  if (!y)
    return b;
  for (var S = "…", x = function(V) {
    var $ = v.slice(0, V), Y = KC({
      breakAll: h,
      style: d,
      children: $ + S
    }).wordsWithComputedWidth, ne = g(Y), H = ne.length > c || _(ne).width > Number(o);
    return [H, ne];
  }, A = 0, E = v.length - 1, M = 0, j; A <= E && M <= v.length - 1; ) {
    var w = Math.floor((A + E) / 2), T = w - 1, C = x(T), R = jE(C, 2), N = R[0], K = R[1], L = x(w), B = jE(L, 1), F = B[0];
    if (!N && !F && (A = w + 1), N && F && (E = w - 1), !N && F) {
      j = K;
      break;
    }
    M++;
  }
  return j || b;
}, CE = function(t) {
  var n = we(t) ? [] : t.toString().split(YC);
  return [{
    words: n
  }];
}, mk = function(t) {
  var n = t.width, r = t.scaleToFit, o = t.children, l = t.style, c = t.breakAll, f = t.maxLines;
  if ((n || r) && !Pa.isSsr) {
    var d, h, y = KC({
      breakAll: c,
      children: o,
      style: l
    });
    if (y) {
      var v = y.wordsWithComputedWidth, g = y.spaceWidth;
      d = v, h = g;
    } else
      return CE(o);
    return yk({
      breakAll: c,
      children: o,
      maxLines: f,
      style: l
    }, d, h, n, r);
  }
  return CE(o);
}, DE = "#808080", hf = function(t) {
  var n = t.x, r = n === void 0 ? 0 : n, o = t.y, l = o === void 0 ? 0 : o, c = t.lineHeight, f = c === void 0 ? "1em" : c, d = t.capHeight, h = d === void 0 ? "0.71em" : d, y = t.scaleToFit, v = y === void 0 ? !1 : y, g = t.textAnchor, b = g === void 0 ? "start" : g, _ = t.verticalAnchor, S = _ === void 0 ? "end" : _, x = t.fill, A = x === void 0 ? DE : x, E = EE(t, ck), M = ee.useMemo(function() {
    return mk({
      breakAll: E.breakAll,
      children: E.children,
      maxLines: E.maxLines,
      scaleToFit: v,
      style: E.style,
      width: E.width
    });
  }, [E.breakAll, E.children, E.maxLines, v, E.style, E.width]), j = E.dx, w = E.dy, T = E.angle, C = E.className, R = E.breakAll, N = EE(E, sk);
  if (!wt(r) || !wt(l))
    return null;
  var K = r + (de(j) ? j : 0), L = l + (de(w) ? w : 0), B;
  switch (S) {
    case "start":
      B = cg("calc(".concat(h, ")"));
      break;
    case "middle":
      B = cg("calc(".concat((M.length - 1) / 2, " * -").concat(f, " + (").concat(h, " / 2))"));
      break;
    default:
      B = cg("calc(".concat(M.length - 1, " * -").concat(f, ")"));
      break;
  }
  var F = [];
  if (v) {
    var G = M[0].width, V = E.width;
    F.push("scale(".concat((de(V) ? V / G : 1) / G, ")"));
  }
  return T && F.push("rotate(".concat(T, ", ").concat(K, ", ").concat(L, ")")), F.length && (N.transform = F.join(" ")), /* @__PURE__ */ k.createElement("text", Eb({}, Te(N, !0), {
    x: K,
    y: L,
    className: $e("recharts-text", C),
    textAnchor: b,
    fill: A.includes("url") ? DE : A
  }), M.map(function($, Y) {
    var ne = $.words.join(R ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ k.createElement("tspan", {
        x: K,
        dy: Y === 0 ? B : f,
        key: "".concat(ne, "-").concat(Y)
      }, ne)
    );
  }));
};
function Ma(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function gk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function e1(e) {
  let t, n, r;
  e.length !== 2 ? (t = Ma, n = (f, d) => Ma(e(f), d), r = (f, d) => e(f) - d) : (t = e === Ma || e === gk ? e : bk, n = e, r = e);
  function o(f, d, h = 0, y = f.length) {
    if (h < y) {
      if (t(d, d) !== 0) return y;
      do {
        const v = h + y >>> 1;
        n(f[v], d) < 0 ? h = v + 1 : y = v;
      } while (h < y);
    }
    return h;
  }
  function l(f, d, h = 0, y = f.length) {
    if (h < y) {
      if (t(d, d) !== 0) return y;
      do {
        const v = h + y >>> 1;
        n(f[v], d) <= 0 ? h = v + 1 : y = v;
      } while (h < y);
    }
    return h;
  }
  function c(f, d, h = 0, y = f.length) {
    const v = o(f, d, h, y - 1);
    return v > h && r(f[v - 1], d) > -r(f[v], d) ? v - 1 : v;
  }
  return { left: o, center: c, right: l };
}
function bk() {
  return 0;
}
function XC(e) {
  return e === null ? NaN : +e;
}
function* xk(e, t) {
  for (let n of e)
    n != null && (n = +n) >= n && (yield n);
}
const Sk = e1(Ma), dc = Sk.right;
e1(XC).center;
class PE extends Map {
  constructor(t, n = wk) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [r, o] of t) this.set(r, o);
  }
  get(t) {
    return super.get(NE(this, t));
  }
  has(t) {
    return super.has(NE(this, t));
  }
  set(t, n) {
    return super.set(_k(this, t), n);
  }
  delete(t) {
    return super.delete(Ok(this, t));
  }
}
function NE({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function _k({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Ok({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function wk(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Ak(e = Ma) {
  if (e === Ma) return VC;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, n) => {
    const r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function VC(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const Tk = Math.sqrt(50), Ek = Math.sqrt(10), jk = Math.sqrt(2);
function pf(e, t, n) {
  const r = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(r)), l = r / Math.pow(10, o), c = l >= Tk ? 10 : l >= Ek ? 5 : l >= jk ? 2 : 1;
  let f, d, h;
  return o < 0 ? (h = Math.pow(10, -o) / c, f = Math.round(e * h), d = Math.round(t * h), f / h < e && ++f, d / h > t && --d, h = -h) : (h = Math.pow(10, o) * c, f = Math.round(e / h), d = Math.round(t / h), f * h < e && ++f, d * h > t && --d), d < f && 0.5 <= n && n < 2 ? pf(e, t, n * 2) : [f, d, h];
}
function jb(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const r = t < e, [o, l, c] = r ? pf(t, e, n) : pf(e, t, n);
  if (!(l >= o)) return [];
  const f = l - o + 1, d = new Array(f);
  if (r)
    if (c < 0) for (let h = 0; h < f; ++h) d[h] = (l - h) / -c;
    else for (let h = 0; h < f; ++h) d[h] = (l - h) * c;
  else if (c < 0) for (let h = 0; h < f; ++h) d[h] = (o + h) / -c;
  else for (let h = 0; h < f; ++h) d[h] = (o + h) * c;
  return d;
}
function Mb(e, t, n) {
  return t = +t, e = +e, n = +n, pf(e, t, n)[2];
}
function Cb(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, o = r ? Mb(t, e, n) : Mb(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function RE(e, t) {
  let n;
  for (const r of e)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function $E(e, t) {
  let n;
  for (const r of e)
    r != null && (n > r || n === void 0 && r >= r) && (n = r);
  return n;
}
function FC(e, t, n = 0, r = 1 / 0, o) {
  if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
  for (o = o === void 0 ? VC : Ak(o); r > n; ) {
    if (r - n > 600) {
      const d = r - n + 1, h = t - n + 1, y = Math.log(d), v = 0.5 * Math.exp(2 * y / 3), g = 0.5 * Math.sqrt(y * v * (d - v) / d) * (h - d / 2 < 0 ? -1 : 1), b = Math.max(n, Math.floor(t - h * v / d + g)), _ = Math.min(r, Math.floor(t + (d - h) * v / d + g));
      FC(e, t, b, _, o);
    }
    const l = e[t];
    let c = n, f = r;
    for (il(e, n, t), o(e[r], l) > 0 && il(e, n, r); c < f; ) {
      for (il(e, c, f), ++c, --f; o(e[c], l) < 0; ) ++c;
      for (; o(e[f], l) > 0; ) --f;
    }
    o(e[n], l) === 0 ? il(e, n, f) : (++f, il(e, f, r)), f <= t && (n = f + 1), t <= f && (r = f - 1);
  }
  return e;
}
function il(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Mk(e, t, n) {
  if (e = Float64Array.from(xk(e)), !(!(r = e.length) || isNaN(t = +t))) {
    if (t <= 0 || r < 2) return $E(e);
    if (t >= 1) return RE(e);
    var r, o = (r - 1) * t, l = Math.floor(o), c = RE(FC(e, l).subarray(0, l + 1)), f = $E(e.subarray(l + 1));
    return c + (f - c) * (o - l);
  }
}
function Ck(e, t, n = XC) {
  if (!(!(r = e.length) || isNaN(t = +t))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r, o = (r - 1) * t, l = Math.floor(o), c = +n(e[l], l, e), f = +n(e[l + 1], l + 1, e);
    return c + (f - c) * (o - l);
  }
}
function Dk(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var r = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(o); ++r < o; )
    l[r] = e + r * n;
  return l;
}
function Un(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Fr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Db = Symbol("implicit");
function t1() {
  var e = new PE(), t = [], n = [], r = Db;
  function o(l) {
    let c = e.get(l);
    if (c === void 0) {
      if (r !== Db) return r;
      e.set(l, c = t.push(l) - 1);
    }
    return n[c % n.length];
  }
  return o.domain = function(l) {
    if (!arguments.length) return t.slice();
    t = [], e = new PE();
    for (const c of l)
      e.has(c) || e.set(c, t.push(c) - 1);
    return o;
  }, o.range = function(l) {
    return arguments.length ? (n = Array.from(l), o) : n.slice();
  }, o.unknown = function(l) {
    return arguments.length ? (r = l, o) : r;
  }, o.copy = function() {
    return t1(t, n).unknown(r);
  }, Un.apply(o, arguments), o;
}
function zl() {
  var e = t1().unknown(void 0), t = e.domain, n = e.range, r = 0, o = 1, l, c, f = !1, d = 0, h = 0, y = 0.5;
  delete e.unknown;
  function v() {
    var g = t().length, b = o < r, _ = b ? o : r, S = b ? r : o;
    l = (S - _) / Math.max(1, g - d + h * 2), f && (l = Math.floor(l)), _ += (S - _ - l * (g - d)) * y, c = l * (1 - d), f && (_ = Math.round(_), c = Math.round(c));
    var x = Dk(g).map(function(A) {
      return _ + l * A;
    });
    return n(b ? x.reverse() : x);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), v()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([r, o] = g, r = +r, o = +o, v()) : [r, o];
  }, e.rangeRound = function(g) {
    return [r, o] = g, r = +r, o = +o, f = !0, v();
  }, e.bandwidth = function() {
    return c;
  }, e.step = function() {
    return l;
  }, e.round = function(g) {
    return arguments.length ? (f = !!g, v()) : f;
  }, e.padding = function(g) {
    return arguments.length ? (d = Math.min(1, h = +g), v()) : d;
  }, e.paddingInner = function(g) {
    return arguments.length ? (d = Math.min(1, g), v()) : d;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (h = +g, v()) : h;
  }, e.align = function(g) {
    return arguments.length ? (y = Math.max(0, Math.min(1, g)), v()) : y;
  }, e.copy = function() {
    return zl(t(), [r, o]).round(f).paddingInner(d).paddingOuter(h).align(y);
  }, Un.apply(v(), arguments);
}
function WC(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return WC(t());
  }, e;
}
function bl() {
  return WC(zl.apply(null, arguments).paddingInner(1));
}
function n1(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ZC(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function hc() {
}
var ql = 0.7, vf = 1 / ql, wo = "\\s*([+-]?\\d+)\\s*", Bl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Pk = /^#([0-9a-f]{3,8})$/, Nk = new RegExp(`^rgb\\(${wo},${wo},${wo}\\)$`), Rk = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`), $k = new RegExp(`^rgba\\(${wo},${wo},${wo},${Bl}\\)$`), zk = new RegExp(`^rgba\\(${sr},${sr},${sr},${Bl}\\)$`), qk = new RegExp(`^hsl\\(${Bl},${sr},${sr}\\)$`), Bk = new RegExp(`^hsla\\(${Bl},${sr},${sr},${Bl}\\)$`), zE = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
n1(hc, kl, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: qE,
  // Deprecated! Use color.formatHex.
  formatHex: qE,
  formatHex8: kk,
  formatHsl: Lk,
  formatRgb: BE,
  toString: BE
});
function qE() {
  return this.rgb().formatHex();
}
function kk() {
  return this.rgb().formatHex8();
}
function Lk() {
  return QC(this).formatHsl();
}
function BE() {
  return this.rgb().formatRgb();
}
function kl(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Pk.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? kE(t) : n === 3 ? new an(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Us(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Us(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Nk.exec(e)) ? new an(t[1], t[2], t[3], 1) : (t = Rk.exec(e)) ? new an(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $k.exec(e)) ? Us(t[1], t[2], t[3], t[4]) : (t = zk.exec(e)) ? Us(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = qk.exec(e)) ? IE(t[1], t[2] / 100, t[3] / 100, 1) : (t = Bk.exec(e)) ? IE(t[1], t[2] / 100, t[3] / 100, t[4]) : zE.hasOwnProperty(e) ? kE(zE[e]) : e === "transparent" ? new an(NaN, NaN, NaN, 0) : null;
}
function kE(e) {
  return new an(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Us(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new an(e, t, n, r);
}
function Uk(e) {
  return e instanceof hc || (e = kl(e)), e ? (e = e.rgb(), new an(e.r, e.g, e.b, e.opacity)) : new an();
}
function Pb(e, t, n, r) {
  return arguments.length === 1 ? Uk(e) : new an(e, t, n, r ?? 1);
}
function an(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
n1(an, Pb, ZC(hc, {
  brighter(e) {
    return e = e == null ? vf : Math.pow(vf, e), new an(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ql : Math.pow(ql, e), new an(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new an(si(this.r), si(this.g), si(this.b), yf(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: LE,
  // Deprecated! Use color.formatHex.
  formatHex: LE,
  formatHex8: Ik,
  formatRgb: UE,
  toString: UE
}));
function LE() {
  return `#${oi(this.r)}${oi(this.g)}${oi(this.b)}`;
}
function Ik() {
  return `#${oi(this.r)}${oi(this.g)}${oi(this.b)}${oi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function UE() {
  const e = yf(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${si(this.r)}, ${si(this.g)}, ${si(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function yf(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function si(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function oi(e) {
  return e = si(e), (e < 16 ? "0" : "") + e.toString(16);
}
function IE(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vn(e, t, n, r);
}
function QC(e) {
  if (e instanceof Vn) return new Vn(e.h, e.s, e.l, e.opacity);
  if (e instanceof hc || (e = kl(e)), !e) return new Vn();
  if (e instanceof Vn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), l = Math.max(t, n, r), c = NaN, f = l - o, d = (l + o) / 2;
  return f ? (t === l ? c = (n - r) / f + (n < r) * 6 : n === l ? c = (r - t) / f + 2 : c = (t - n) / f + 4, f /= d < 0.5 ? l + o : 2 - l - o, c *= 60) : f = d > 0 && d < 1 ? 0 : c, new Vn(c, f, d, e.opacity);
}
function Hk(e, t, n, r) {
  return arguments.length === 1 ? QC(e) : new Vn(e, t, n, r ?? 1);
}
function Vn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
n1(Vn, Hk, ZC(hc, {
  brighter(e) {
    return e = e == null ? vf : Math.pow(vf, e), new Vn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ql : Math.pow(ql, e), new Vn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new an(
      sg(e >= 240 ? e - 240 : e + 120, o, r),
      sg(e, o, r),
      sg(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Vn(HE(this.h), Is(this.s), Is(this.l), yf(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = yf(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${HE(this.h)}, ${Is(this.s) * 100}%, ${Is(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function HE(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Is(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function sg(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const r1 = (e) => () => e;
function Gk(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Yk(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Kk(e) {
  return (e = +e) == 1 ? JC : function(t, n) {
    return n - t ? Yk(t, n, e) : r1(isNaN(t) ? n : t);
  };
}
function JC(e, t) {
  var n = t - e;
  return n ? Gk(e, n) : r1(isNaN(e) ? t : e);
}
const GE = (function e(t) {
  var n = Kk(t);
  function r(o, l) {
    var c = n((o = Pb(o)).r, (l = Pb(l)).r), f = n(o.g, l.g), d = n(o.b, l.b), h = JC(o.opacity, l.opacity);
    return function(y) {
      return o.r = c(y), o.g = f(y), o.b = d(y), o.opacity = h(y), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function Xk(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(l) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - l) + t[o] * l;
    return r;
  };
}
function Vk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Fk(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), l = new Array(n), c;
  for (c = 0; c < r; ++c) o[c] = au(e[c], t[c]);
  for (; c < n; ++c) l[c] = t[c];
  return function(f) {
    for (c = 0; c < r; ++c) l[c] = o[c](f);
    return l;
  };
}
function Wk(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function mf(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Zk(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = au(e[o], t[o]) : r[o] = t[o];
  return function(l) {
    for (o in n) r[o] = n[o](l);
    return r;
  };
}
var Nb = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fg = new RegExp(Nb.source, "g");
function Qk(e) {
  return function() {
    return e;
  };
}
function Jk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function e4(e, t) {
  var n = Nb.lastIndex = fg.lastIndex = 0, r, o, l, c = -1, f = [], d = [];
  for (e = e + "", t = t + ""; (r = Nb.exec(e)) && (o = fg.exec(t)); )
    (l = o.index) > n && (l = t.slice(n, l), f[c] ? f[c] += l : f[++c] = l), (r = r[0]) === (o = o[0]) ? f[c] ? f[c] += o : f[++c] = o : (f[++c] = null, d.push({ i: c, x: mf(r, o) })), n = fg.lastIndex;
  return n < t.length && (l = t.slice(n), f[c] ? f[c] += l : f[++c] = l), f.length < 2 ? d[0] ? Jk(d[0].x) : Qk(t) : (t = d.length, function(h) {
    for (var y = 0, v; y < t; ++y) f[(v = d[y]).i] = v.x(h);
    return f.join("");
  });
}
function au(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? r1(t) : (n === "number" ? mf : n === "string" ? (r = kl(t)) ? (t = r, GE) : e4 : t instanceof kl ? GE : t instanceof Date ? Wk : Vk(t) ? Xk : Array.isArray(t) ? Fk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zk : mf)(e, t);
}
function a1(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function t4(e, t) {
  t === void 0 && (t = e, e = au);
  for (var n = 0, r = t.length - 1, o = t[0], l = new Array(r < 0 ? 0 : r); n < r; ) l[n] = e(o, o = t[++n]);
  return function(c) {
    var f = Math.max(0, Math.min(r - 1, Math.floor(c *= r)));
    return l[f](c - f);
  };
}
function n4(e) {
  return function() {
    return e;
  };
}
function gf(e) {
  return +e;
}
var YE = [0, 1];
function Ft(e) {
  return e;
}
function Rb(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : n4(isNaN(t) ? NaN : 0.5);
}
function r4(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function a4(e, t, n) {
  var r = e[0], o = e[1], l = t[0], c = t[1];
  return o < r ? (r = Rb(o, r), l = n(c, l)) : (r = Rb(r, o), l = n(l, c)), function(f) {
    return l(r(f));
  };
}
function i4(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, o = new Array(r), l = new Array(r), c = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++c < r; )
    o[c] = Rb(e[c], e[c + 1]), l[c] = n(t[c], t[c + 1]);
  return function(f) {
    var d = dc(e, f, 1, r) - 1;
    return l[d](o[d](f));
  };
}
function pc(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function md() {
  var e = YE, t = YE, n = au, r, o, l, c = Ft, f, d, h;
  function y() {
    var g = Math.min(e.length, t.length);
    return c !== Ft && (c = r4(e[0], e[g - 1])), f = g > 2 ? i4 : a4, d = h = null, v;
  }
  function v(g) {
    return g == null || isNaN(g = +g) ? l : (d || (d = f(e.map(r), t, n)))(r(c(g)));
  }
  return v.invert = function(g) {
    return c(o((h || (h = f(t, e.map(r), mf)))(g)));
  }, v.domain = function(g) {
    return arguments.length ? (e = Array.from(g, gf), y()) : e.slice();
  }, v.range = function(g) {
    return arguments.length ? (t = Array.from(g), y()) : t.slice();
  }, v.rangeRound = function(g) {
    return t = Array.from(g), n = a1, y();
  }, v.clamp = function(g) {
    return arguments.length ? (c = g ? !0 : Ft, y()) : c !== Ft;
  }, v.interpolate = function(g) {
    return arguments.length ? (n = g, y()) : n;
  }, v.unknown = function(g) {
    return arguments.length ? (l = g, v) : l;
  }, function(g, b) {
    return r = g, o = b, y();
  };
}
function i1() {
  return md()(Ft, Ft);
}
function o4(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function bf(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function Po(e) {
  return e = bf(Math.abs(e)), e ? e[1] : NaN;
}
function u4(e, t) {
  return function(n, r) {
    for (var o = n.length, l = [], c = 0, f = e[0], d = 0; o > 0 && f > 0 && (d + f + 1 > r && (f = Math.max(1, r - d)), l.push(n.substring(o -= f, o + f)), !((d += f + 1) > r)); )
      f = e[c = (c + 1) % e.length];
    return l.reverse().join(t);
  };
}
function l4(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var c4 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ll(e) {
  if (!(t = c4.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new o1({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Ll.prototype = o1.prototype;
function o1(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
o1.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function s4(e) {
  e: for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        r === 0 && (r = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
}
var xf;
function f4(e, t) {
  var n = bf(e, t);
  if (!n) return xf = void 0, e.toPrecision(t);
  var r = n[0], o = n[1], l = o - (xf = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, c = r.length;
  return l === c ? r : l > c ? r + new Array(l - c + 1).join("0") : l > 0 ? r.slice(0, l) + "." + r.slice(l) : "0." + new Array(1 - l).join("0") + bf(e, Math.max(0, t + l - 1))[0];
}
function KE(e, t) {
  var n = bf(e, t);
  if (!n) return e + "";
  var r = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
}
const XE = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: o4,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => KE(e * 100, t),
  r: KE,
  s: f4,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function VE(e) {
  return e;
}
var FE = Array.prototype.map, WE = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function d4(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? VE : u4(FE.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", l = e.numerals === void 0 ? VE : l4(FE.call(e.numerals, String)), c = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function h(v, g) {
    v = Ll(v);
    var b = v.fill, _ = v.align, S = v.sign, x = v.symbol, A = v.zero, E = v.width, M = v.comma, j = v.precision, w = v.trim, T = v.type;
    T === "n" ? (M = !0, T = "g") : XE[T] || (j === void 0 && (j = 12), w = !0, T = "g"), (A || b === "0" && _ === "=") && (A = !0, b = "0", _ = "=");
    var C = (g && g.prefix !== void 0 ? g.prefix : "") + (x === "$" ? n : x === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : ""), R = (x === "$" ? r : /[%p]/.test(T) ? c : "") + (g && g.suffix !== void 0 ? g.suffix : ""), N = XE[T], K = /[defgprs%]/.test(T);
    j = j === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j));
    function L(B) {
      var F = C, G = R, V, $, Y;
      if (T === "c")
        G = N(B) + G, B = "";
      else {
        B = +B;
        var ne = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? d : N(Math.abs(B), j), w && (B = s4(B)), ne && +B == 0 && S !== "+" && (ne = !1), F = (ne ? S === "(" ? S : f : S === "-" || S === "(" ? "" : S) + F, G = (T === "s" && !isNaN(B) && xf !== void 0 ? WE[8 + xf / 3] : "") + G + (ne && S === "(" ? ")" : ""), K) {
          for (V = -1, $ = B.length; ++V < $; )
            if (Y = B.charCodeAt(V), 48 > Y || Y > 57) {
              G = (Y === 46 ? o + B.slice(V + 1) : B.slice(V)) + G, B = B.slice(0, V);
              break;
            }
        }
      }
      M && !A && (B = t(B, 1 / 0));
      var H = F.length + B.length + G.length, J = H < E ? new Array(E - H + 1).join(b) : "";
      switch (M && A && (B = t(J + B, J.length ? E - G.length : 1 / 0), J = ""), _) {
        case "<":
          B = F + B + G + J;
          break;
        case "=":
          B = F + J + B + G;
          break;
        case "^":
          B = J.slice(0, H = J.length >> 1) + F + B + G + J.slice(H);
          break;
        default:
          B = J + F + B + G;
          break;
      }
      return l(B);
    }
    return L.toString = function() {
      return v + "";
    }, L;
  }
  function y(v, g) {
    var b = Math.max(-8, Math.min(8, Math.floor(Po(g) / 3))) * 3, _ = Math.pow(10, -b), S = h((v = Ll(v), v.type = "f", v), { suffix: WE[8 + b / 3] });
    return function(x) {
      return S(_ * x);
    };
  }
  return {
    format: h,
    formatPrefix: y
  };
}
var Hs, u1, eD;
h4({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function h4(e) {
  return Hs = d4(e), u1 = Hs.format, eD = Hs.formatPrefix, Hs;
}
function p4(e) {
  return Math.max(0, -Po(Math.abs(e)));
}
function v4(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Po(t) / 3))) * 3 - Po(Math.abs(e)));
}
function y4(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Po(t) - Po(e)) + 1;
}
function tD(e, t, n, r) {
  var o = Cb(e, t, n), l;
  switch (r = Ll(r ?? ",f"), r.type) {
    case "s": {
      var c = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(l = v4(o, c)) && (r.precision = l), eD(r, c);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(l = y4(o, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = l - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(l = p4(o)) && (r.precision = l - (r.type === "%") * 2);
      break;
    }
  }
  return u1(r);
}
function Na(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return jb(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var o = t();
    return tD(o[0], o[o.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), o = 0, l = r.length - 1, c = r[o], f = r[l], d, h, y = 10;
    for (f < c && (h = c, c = f, f = h, h = o, o = l, l = h); y-- > 0; ) {
      if (h = Mb(c, f, n), h === d)
        return r[o] = c, r[l] = f, t(r);
      if (h > 0)
        c = Math.floor(c / h) * h, f = Math.ceil(f / h) * h;
      else if (h < 0)
        c = Math.ceil(c * h) / h, f = Math.floor(f * h) / h;
      else
        break;
      d = h;
    }
    return e;
  }, e;
}
function Sf() {
  var e = i1();
  return e.copy = function() {
    return pc(e, Sf());
  }, Un.apply(e, arguments), Na(e);
}
function nD(e) {
  var t;
  function n(r) {
    return r == null || isNaN(r = +r) ? t : r;
  }
  return n.invert = n, n.domain = n.range = function(r) {
    return arguments.length ? (e = Array.from(r, gf), n) : e.slice();
  }, n.unknown = function(r) {
    return arguments.length ? (t = r, n) : t;
  }, n.copy = function() {
    return nD(e).unknown(t);
  }, e = arguments.length ? Array.from(e, gf) : [0, 1], Na(n);
}
function rD(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, o = e[n], l = e[r], c;
  return l < o && (c = n, n = r, r = c, c = o, o = l, l = c), e[n] = t.floor(o), e[r] = t.ceil(l), e;
}
function ZE(e) {
  return Math.log(e);
}
function QE(e) {
  return Math.exp(e);
}
function m4(e) {
  return -Math.log(-e);
}
function g4(e) {
  return -Math.exp(-e);
}
function b4(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function x4(e) {
  return e === 10 ? b4 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function S4(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function JE(e) {
  return (t, n) => -e(-t, n);
}
function l1(e) {
  const t = e(ZE, QE), n = t.domain;
  let r = 10, o, l;
  function c() {
    return o = S4(r), l = x4(r), n()[0] < 0 ? (o = JE(o), l = JE(l), e(m4, g4)) : e(ZE, QE), t;
  }
  return t.base = function(f) {
    return arguments.length ? (r = +f, c()) : r;
  }, t.domain = function(f) {
    return arguments.length ? (n(f), c()) : n();
  }, t.ticks = (f) => {
    const d = n();
    let h = d[0], y = d[d.length - 1];
    const v = y < h;
    v && ([h, y] = [y, h]);
    let g = o(h), b = o(y), _, S;
    const x = f == null ? 10 : +f;
    let A = [];
    if (!(r % 1) && b - g < x) {
      if (g = Math.floor(g), b = Math.ceil(b), h > 0) {
        for (; g <= b; ++g)
          for (_ = 1; _ < r; ++_)
            if (S = g < 0 ? _ / l(-g) : _ * l(g), !(S < h)) {
              if (S > y) break;
              A.push(S);
            }
      } else for (; g <= b; ++g)
        for (_ = r - 1; _ >= 1; --_)
          if (S = g > 0 ? _ / l(-g) : _ * l(g), !(S < h)) {
            if (S > y) break;
            A.push(S);
          }
      A.length * 2 < x && (A = jb(h, y, x));
    } else
      A = jb(g, b, Math.min(b - g, x)).map(l);
    return v ? A.reverse() : A;
  }, t.tickFormat = (f, d) => {
    if (f == null && (f = 10), d == null && (d = r === 10 ? "s" : ","), typeof d != "function" && (!(r % 1) && (d = Ll(d)).precision == null && (d.trim = !0), d = u1(d)), f === 1 / 0) return d;
    const h = Math.max(1, r * f / t.ticks().length);
    return (y) => {
      let v = y / l(Math.round(o(y)));
      return v * r < r - 0.5 && (v *= r), v <= h ? d(y) : "";
    };
  }, t.nice = () => n(rD(n(), {
    floor: (f) => l(Math.floor(o(f))),
    ceil: (f) => l(Math.ceil(o(f)))
  })), t;
}
function aD() {
  const e = l1(md()).domain([1, 10]);
  return e.copy = () => pc(e, aD()).base(e.base()), Un.apply(e, arguments), e;
}
function e2(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function t2(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function c1(e) {
  var t = 1, n = e(e2(t), t2(t));
  return n.constant = function(r) {
    return arguments.length ? e(e2(t = +r), t2(t)) : t;
  }, Na(n);
}
function iD() {
  var e = c1(md());
  return e.copy = function() {
    return pc(e, iD()).constant(e.constant());
  }, Un.apply(e, arguments);
}
function n2(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function _4(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function O4(e) {
  return e < 0 ? -e * e : e * e;
}
function s1(e) {
  var t = e(Ft, Ft), n = 1;
  function r() {
    return n === 1 ? e(Ft, Ft) : n === 0.5 ? e(_4, O4) : e(n2(n), n2(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, r()) : n;
  }, Na(t);
}
function f1() {
  var e = s1(md());
  return e.copy = function() {
    return pc(e, f1()).exponent(e.exponent());
  }, Un.apply(e, arguments), e;
}
function w4() {
  return f1.apply(null, arguments).exponent(0.5);
}
function r2(e) {
  return Math.sign(e) * e * e;
}
function A4(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function oD() {
  var e = i1(), t = [0, 1], n = !1, r;
  function o(l) {
    var c = A4(e(l));
    return isNaN(c) ? r : n ? Math.round(c) : c;
  }
  return o.invert = function(l) {
    return e.invert(r2(l));
  }, o.domain = function(l) {
    return arguments.length ? (e.domain(l), o) : e.domain();
  }, o.range = function(l) {
    return arguments.length ? (e.range((t = Array.from(l, gf)).map(r2)), o) : t.slice();
  }, o.rangeRound = function(l) {
    return o.range(l).round(!0);
  }, o.round = function(l) {
    return arguments.length ? (n = !!l, o) : n;
  }, o.clamp = function(l) {
    return arguments.length ? (e.clamp(l), o) : e.clamp();
  }, o.unknown = function(l) {
    return arguments.length ? (r = l, o) : r;
  }, o.copy = function() {
    return oD(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
  }, Un.apply(o, arguments), Na(o);
}
function uD() {
  var e = [], t = [], n = [], r;
  function o() {
    var c = 0, f = Math.max(1, t.length);
    for (n = new Array(f - 1); ++c < f; ) n[c - 1] = Ck(e, c / f);
    return l;
  }
  function l(c) {
    return c == null || isNaN(c = +c) ? r : t[dc(n, c)];
  }
  return l.invertExtent = function(c) {
    var f = t.indexOf(c);
    return f < 0 ? [NaN, NaN] : [
      f > 0 ? n[f - 1] : e[0],
      f < n.length ? n[f] : e[e.length - 1]
    ];
  }, l.domain = function(c) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let f of c) f != null && !isNaN(f = +f) && e.push(f);
    return e.sort(Ma), o();
  }, l.range = function(c) {
    return arguments.length ? (t = Array.from(c), o()) : t.slice();
  }, l.unknown = function(c) {
    return arguments.length ? (r = c, l) : r;
  }, l.quantiles = function() {
    return n.slice();
  }, l.copy = function() {
    return uD().domain(e).range(t).unknown(r);
  }, Un.apply(l, arguments);
}
function lD() {
  var e = 0, t = 1, n = 1, r = [0.5], o = [0, 1], l;
  function c(d) {
    return d != null && d <= d ? o[dc(r, d, 0, n)] : l;
  }
  function f() {
    var d = -1;
    for (r = new Array(n); ++d < n; ) r[d] = ((d + 1) * t - (d - n) * e) / (n + 1);
    return c;
  }
  return c.domain = function(d) {
    return arguments.length ? ([e, t] = d, e = +e, t = +t, f()) : [e, t];
  }, c.range = function(d) {
    return arguments.length ? (n = (o = Array.from(d)).length - 1, f()) : o.slice();
  }, c.invertExtent = function(d) {
    var h = o.indexOf(d);
    return h < 0 ? [NaN, NaN] : h < 1 ? [e, r[0]] : h >= n ? [r[n - 1], t] : [r[h - 1], r[h]];
  }, c.unknown = function(d) {
    return arguments.length && (l = d), c;
  }, c.thresholds = function() {
    return r.slice();
  }, c.copy = function() {
    return lD().domain([e, t]).range(o).unknown(l);
  }, Un.apply(Na(c), arguments);
}
function cD() {
  var e = [0.5], t = [0, 1], n, r = 1;
  function o(l) {
    return l != null && l <= l ? t[dc(e, l, 0, r)] : n;
  }
  return o.domain = function(l) {
    return arguments.length ? (e = Array.from(l), r = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(l) {
    return arguments.length ? (t = Array.from(l), r = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(l) {
    var c = t.indexOf(l);
    return [e[c - 1], e[c]];
  }, o.unknown = function(l) {
    return arguments.length ? (n = l, o) : n;
  }, o.copy = function() {
    return cD().domain(e).range(t).unknown(n);
  }, Un.apply(o, arguments);
}
const dg = /* @__PURE__ */ new Date(), hg = /* @__PURE__ */ new Date();
function Tt(e, t, n, r) {
  function o(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return o.floor = (l) => (e(l = /* @__PURE__ */ new Date(+l)), l), o.ceil = (l) => (e(l = new Date(l - 1)), t(l, 1), e(l), l), o.round = (l) => {
    const c = o(l), f = o.ceil(l);
    return l - c < f - l ? c : f;
  }, o.offset = (l, c) => (t(l = /* @__PURE__ */ new Date(+l), c == null ? 1 : Math.floor(c)), l), o.range = (l, c, f) => {
    const d = [];
    if (l = o.ceil(l), f = f == null ? 1 : Math.floor(f), !(l < c) || !(f > 0)) return d;
    let h;
    do
      d.push(h = /* @__PURE__ */ new Date(+l)), t(l, f), e(l);
    while (h < l && l < c);
    return d;
  }, o.filter = (l) => Tt((c) => {
    if (c >= c) for (; e(c), !l(c); ) c.setTime(c - 1);
  }, (c, f) => {
    if (c >= c)
      if (f < 0) for (; ++f <= 0; )
        for (; t(c, -1), !l(c); )
          ;
      else for (; --f >= 0; )
        for (; t(c, 1), !l(c); )
          ;
  }), n && (o.count = (l, c) => (dg.setTime(+l), hg.setTime(+c), e(dg), e(hg), Math.floor(n(dg, hg))), o.every = (l) => (l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? o.filter(r ? (c) => r(c) % l === 0 : (c) => o.count(0, c) % l === 0) : o)), o;
}
const _f = Tt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
_f.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Tt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : _f);
_f.range;
const zr = 1e3, Bn = zr * 60, qr = Bn * 60, Hr = qr * 24, d1 = Hr * 7, a2 = Hr * 30, pg = Hr * 365, ui = Tt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * zr);
}, (e, t) => (t - e) / zr, (e) => e.getUTCSeconds());
ui.range;
const h1 = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * zr);
}, (e, t) => {
  e.setTime(+e + t * Bn);
}, (e, t) => (t - e) / Bn, (e) => e.getMinutes());
h1.range;
const p1 = Tt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Bn);
}, (e, t) => (t - e) / Bn, (e) => e.getUTCMinutes());
p1.range;
const v1 = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * zr - e.getMinutes() * Bn);
}, (e, t) => {
  e.setTime(+e + t * qr);
}, (e, t) => (t - e) / qr, (e) => e.getHours());
v1.range;
const y1 = Tt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * qr);
}, (e, t) => (t - e) / qr, (e) => e.getUTCHours());
y1.range;
const vc = Tt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Bn) / Hr,
  (e) => e.getDate() - 1
);
vc.range;
const gd = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Hr, (e) => e.getUTCDate() - 1);
gd.range;
const sD = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Hr, (e) => Math.floor(e / Hr));
sD.range;
function Si(e) {
  return Tt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Bn) / d1);
}
const bd = Si(0), Of = Si(1), T4 = Si(2), E4 = Si(3), No = Si(4), j4 = Si(5), M4 = Si(6);
bd.range;
Of.range;
T4.range;
E4.range;
No.range;
j4.range;
M4.range;
function _i(e) {
  return Tt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / d1);
}
const xd = _i(0), wf = _i(1), C4 = _i(2), D4 = _i(3), Ro = _i(4), P4 = _i(5), N4 = _i(6);
xd.range;
wf.range;
C4.range;
D4.range;
Ro.range;
P4.range;
N4.range;
const m1 = Tt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
m1.range;
const g1 = Tt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
g1.range;
const Gr = Tt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Gr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Gr.range;
const Yr = Tt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Yr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Yr.range;
function fD(e, t, n, r, o, l) {
  const c = [
    [ui, 1, zr],
    [ui, 5, 5 * zr],
    [ui, 15, 15 * zr],
    [ui, 30, 30 * zr],
    [l, 1, Bn],
    [l, 5, 5 * Bn],
    [l, 15, 15 * Bn],
    [l, 30, 30 * Bn],
    [o, 1, qr],
    [o, 3, 3 * qr],
    [o, 6, 6 * qr],
    [o, 12, 12 * qr],
    [r, 1, Hr],
    [r, 2, 2 * Hr],
    [n, 1, d1],
    [t, 1, a2],
    [t, 3, 3 * a2],
    [e, 1, pg]
  ];
  function f(h, y, v) {
    const g = y < h;
    g && ([h, y] = [y, h]);
    const b = v && typeof v.range == "function" ? v : d(h, y, v), _ = b ? b.range(h, +y + 1) : [];
    return g ? _.reverse() : _;
  }
  function d(h, y, v) {
    const g = Math.abs(y - h) / v, b = e1(([, , x]) => x).right(c, g);
    if (b === c.length) return e.every(Cb(h / pg, y / pg, v));
    if (b === 0) return _f.every(Math.max(Cb(h, y, v), 1));
    const [_, S] = c[g / c[b - 1][2] < c[b][2] / g ? b - 1 : b];
    return _.every(S);
  }
  return [f, d];
}
const [R4, $4] = fD(Yr, g1, xd, sD, y1, p1), [z4, q4] = fD(Gr, m1, bd, vc, v1, h1);
function vg(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function yg(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ol(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function B4(e) {
  var t = e.dateTime, n = e.date, r = e.time, o = e.periods, l = e.days, c = e.shortDays, f = e.months, d = e.shortMonths, h = ul(o), y = ll(o), v = ul(l), g = ll(l), b = ul(c), _ = ll(c), S = ul(f), x = ll(f), A = ul(d), E = ll(d), M = {
    a: Y,
    A: ne,
    b: H,
    B: J,
    c: null,
    d: s2,
    e: s2,
    f: u6,
    g: m6,
    G: b6,
    H: a6,
    I: i6,
    j: o6,
    L: dD,
    m: l6,
    M: c6,
    p: P,
    q: U,
    Q: h2,
    s: p2,
    S: s6,
    u: f6,
    U: d6,
    V: h6,
    w: p6,
    W: v6,
    x: null,
    X: null,
    y: y6,
    Y: g6,
    Z: x6,
    "%": d2
  }, j = {
    a: re,
    A: se,
    b: pe,
    B: fe,
    c: null,
    d: f2,
    e: f2,
    f: w6,
    g: R6,
    G: z6,
    H: S6,
    I: _6,
    j: O6,
    L: pD,
    m: A6,
    M: T6,
    p: _e,
    q: Ce,
    Q: h2,
    s: p2,
    S: E6,
    u: j6,
    U: M6,
    V: C6,
    w: D6,
    W: P6,
    x: null,
    X: null,
    y: N6,
    Y: $6,
    Z: q6,
    "%": d2
  }, w = {
    a: K,
    A: L,
    b: B,
    B: F,
    c: G,
    d: l2,
    e: l2,
    f: e6,
    g: u2,
    G: o2,
    H: c2,
    I: c2,
    j: W4,
    L: J4,
    m: F4,
    M: Z4,
    p: N,
    q: V4,
    Q: n6,
    s: r6,
    S: Q4,
    u: H4,
    U: G4,
    V: Y4,
    w: I4,
    W: K4,
    x: V,
    X: $,
    y: u2,
    Y: o2,
    Z: X4,
    "%": t6
  };
  M.x = T(n, M), M.X = T(r, M), M.c = T(t, M), j.x = T(n, j), j.X = T(r, j), j.c = T(t, j);
  function T(ce, he) {
    return function(ge) {
      var le = [], ze = -1, Oe = 0, Xe = ce.length, nt, Et, Xt;
      for (ge instanceof Date || (ge = /* @__PURE__ */ new Date(+ge)); ++ze < Xe; )
        ce.charCodeAt(ze) === 37 && (le.push(ce.slice(Oe, ze)), (Et = i2[nt = ce.charAt(++ze)]) != null ? nt = ce.charAt(++ze) : Et = nt === "e" ? " " : "0", (Xt = he[nt]) && (nt = Xt(ge, Et)), le.push(nt), Oe = ze + 1);
      return le.push(ce.slice(Oe, ze)), le.join("");
    };
  }
  function C(ce, he) {
    return function(ge) {
      var le = ol(1900, void 0, 1), ze = R(le, ce, ge += "", 0), Oe, Xe;
      if (ze != ge.length) return null;
      if ("Q" in le) return new Date(le.Q);
      if ("s" in le) return new Date(le.s * 1e3 + ("L" in le ? le.L : 0));
      if (he && !("Z" in le) && (le.Z = 0), "p" in le && (le.H = le.H % 12 + le.p * 12), le.m === void 0 && (le.m = "q" in le ? le.q : 0), "V" in le) {
        if (le.V < 1 || le.V > 53) return null;
        "w" in le || (le.w = 1), "Z" in le ? (Oe = yg(ol(le.y, 0, 1)), Xe = Oe.getUTCDay(), Oe = Xe > 4 || Xe === 0 ? wf.ceil(Oe) : wf(Oe), Oe = gd.offset(Oe, (le.V - 1) * 7), le.y = Oe.getUTCFullYear(), le.m = Oe.getUTCMonth(), le.d = Oe.getUTCDate() + (le.w + 6) % 7) : (Oe = vg(ol(le.y, 0, 1)), Xe = Oe.getDay(), Oe = Xe > 4 || Xe === 0 ? Of.ceil(Oe) : Of(Oe), Oe = vc.offset(Oe, (le.V - 1) * 7), le.y = Oe.getFullYear(), le.m = Oe.getMonth(), le.d = Oe.getDate() + (le.w + 6) % 7);
      } else ("W" in le || "U" in le) && ("w" in le || (le.w = "u" in le ? le.u % 7 : "W" in le ? 1 : 0), Xe = "Z" in le ? yg(ol(le.y, 0, 1)).getUTCDay() : vg(ol(le.y, 0, 1)).getDay(), le.m = 0, le.d = "W" in le ? (le.w + 6) % 7 + le.W * 7 - (Xe + 5) % 7 : le.w + le.U * 7 - (Xe + 6) % 7);
      return "Z" in le ? (le.H += le.Z / 100 | 0, le.M += le.Z % 100, yg(le)) : vg(le);
    };
  }
  function R(ce, he, ge, le) {
    for (var ze = 0, Oe = he.length, Xe = ge.length, nt, Et; ze < Oe; ) {
      if (le >= Xe) return -1;
      if (nt = he.charCodeAt(ze++), nt === 37) {
        if (nt = he.charAt(ze++), Et = w[nt in i2 ? he.charAt(ze++) : nt], !Et || (le = Et(ce, ge, le)) < 0) return -1;
      } else if (nt != ge.charCodeAt(le++))
        return -1;
    }
    return le;
  }
  function N(ce, he, ge) {
    var le = h.exec(he.slice(ge));
    return le ? (ce.p = y.get(le[0].toLowerCase()), ge + le[0].length) : -1;
  }
  function K(ce, he, ge) {
    var le = b.exec(he.slice(ge));
    return le ? (ce.w = _.get(le[0].toLowerCase()), ge + le[0].length) : -1;
  }
  function L(ce, he, ge) {
    var le = v.exec(he.slice(ge));
    return le ? (ce.w = g.get(le[0].toLowerCase()), ge + le[0].length) : -1;
  }
  function B(ce, he, ge) {
    var le = A.exec(he.slice(ge));
    return le ? (ce.m = E.get(le[0].toLowerCase()), ge + le[0].length) : -1;
  }
  function F(ce, he, ge) {
    var le = S.exec(he.slice(ge));
    return le ? (ce.m = x.get(le[0].toLowerCase()), ge + le[0].length) : -1;
  }
  function G(ce, he, ge) {
    return R(ce, t, he, ge);
  }
  function V(ce, he, ge) {
    return R(ce, n, he, ge);
  }
  function $(ce, he, ge) {
    return R(ce, r, he, ge);
  }
  function Y(ce) {
    return c[ce.getDay()];
  }
  function ne(ce) {
    return l[ce.getDay()];
  }
  function H(ce) {
    return d[ce.getMonth()];
  }
  function J(ce) {
    return f[ce.getMonth()];
  }
  function P(ce) {
    return o[+(ce.getHours() >= 12)];
  }
  function U(ce) {
    return 1 + ~~(ce.getMonth() / 3);
  }
  function re(ce) {
    return c[ce.getUTCDay()];
  }
  function se(ce) {
    return l[ce.getUTCDay()];
  }
  function pe(ce) {
    return d[ce.getUTCMonth()];
  }
  function fe(ce) {
    return f[ce.getUTCMonth()];
  }
  function _e(ce) {
    return o[+(ce.getUTCHours() >= 12)];
  }
  function Ce(ce) {
    return 1 + ~~(ce.getUTCMonth() / 3);
  }
  return {
    format: function(ce) {
      var he = T(ce += "", M);
      return he.toString = function() {
        return ce;
      }, he;
    },
    parse: function(ce) {
      var he = C(ce += "", !1);
      return he.toString = function() {
        return ce;
      }, he;
    },
    utcFormat: function(ce) {
      var he = T(ce += "", j);
      return he.toString = function() {
        return ce;
      }, he;
    },
    utcParse: function(ce) {
      var he = C(ce += "", !0);
      return he.toString = function() {
        return ce;
      }, he;
    }
  };
}
var i2 = { "-": "", _: " ", 0: "0" }, Dt = /^\s*\d+/, k4 = /^%/, L4 = /[\\^$*+?|[\]().{}]/g;
function Le(e, t, n) {
  var r = e < 0 ? "-" : "", o = (r ? -e : e) + "", l = o.length;
  return r + (l < n ? new Array(n - l + 1).join(t) + o : o);
}
function U4(e) {
  return e.replace(L4, "\\$&");
}
function ul(e) {
  return new RegExp("^(?:" + e.map(U4).join("|") + ")", "i");
}
function ll(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function I4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function H4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function G4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Y4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function K4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function o2(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function u2(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function X4(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function V4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function F4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function l2(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function W4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function c2(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Z4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Q4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function J4(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function e6(e, t, n) {
  var r = Dt.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function t6(e, t, n) {
  var r = k4.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function n6(e, t, n) {
  var r = Dt.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function r6(e, t, n) {
  var r = Dt.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function s2(e, t) {
  return Le(e.getDate(), t, 2);
}
function a6(e, t) {
  return Le(e.getHours(), t, 2);
}
function i6(e, t) {
  return Le(e.getHours() % 12 || 12, t, 2);
}
function o6(e, t) {
  return Le(1 + vc.count(Gr(e), e), t, 3);
}
function dD(e, t) {
  return Le(e.getMilliseconds(), t, 3);
}
function u6(e, t) {
  return dD(e, t) + "000";
}
function l6(e, t) {
  return Le(e.getMonth() + 1, t, 2);
}
function c6(e, t) {
  return Le(e.getMinutes(), t, 2);
}
function s6(e, t) {
  return Le(e.getSeconds(), t, 2);
}
function f6(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function d6(e, t) {
  return Le(bd.count(Gr(e) - 1, e), t, 2);
}
function hD(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? No(e) : No.ceil(e);
}
function h6(e, t) {
  return e = hD(e), Le(No.count(Gr(e), e) + (Gr(e).getDay() === 4), t, 2);
}
function p6(e) {
  return e.getDay();
}
function v6(e, t) {
  return Le(Of.count(Gr(e) - 1, e), t, 2);
}
function y6(e, t) {
  return Le(e.getFullYear() % 100, t, 2);
}
function m6(e, t) {
  return e = hD(e), Le(e.getFullYear() % 100, t, 2);
}
function g6(e, t) {
  return Le(e.getFullYear() % 1e4, t, 4);
}
function b6(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? No(e) : No.ceil(e), Le(e.getFullYear() % 1e4, t, 4);
}
function x6(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Le(t / 60 | 0, "0", 2) + Le(t % 60, "0", 2);
}
function f2(e, t) {
  return Le(e.getUTCDate(), t, 2);
}
function S6(e, t) {
  return Le(e.getUTCHours(), t, 2);
}
function _6(e, t) {
  return Le(e.getUTCHours() % 12 || 12, t, 2);
}
function O6(e, t) {
  return Le(1 + gd.count(Yr(e), e), t, 3);
}
function pD(e, t) {
  return Le(e.getUTCMilliseconds(), t, 3);
}
function w6(e, t) {
  return pD(e, t) + "000";
}
function A6(e, t) {
  return Le(e.getUTCMonth() + 1, t, 2);
}
function T6(e, t) {
  return Le(e.getUTCMinutes(), t, 2);
}
function E6(e, t) {
  return Le(e.getUTCSeconds(), t, 2);
}
function j6(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function M6(e, t) {
  return Le(xd.count(Yr(e) - 1, e), t, 2);
}
function vD(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ro(e) : Ro.ceil(e);
}
function C6(e, t) {
  return e = vD(e), Le(Ro.count(Yr(e), e) + (Yr(e).getUTCDay() === 4), t, 2);
}
function D6(e) {
  return e.getUTCDay();
}
function P6(e, t) {
  return Le(wf.count(Yr(e) - 1, e), t, 2);
}
function N6(e, t) {
  return Le(e.getUTCFullYear() % 100, t, 2);
}
function R6(e, t) {
  return e = vD(e), Le(e.getUTCFullYear() % 100, t, 2);
}
function $6(e, t) {
  return Le(e.getUTCFullYear() % 1e4, t, 4);
}
function z6(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ro(e) : Ro.ceil(e), Le(e.getUTCFullYear() % 1e4, t, 4);
}
function q6() {
  return "+0000";
}
function d2() {
  return "%";
}
function h2(e) {
  return +e;
}
function p2(e) {
  return Math.floor(+e / 1e3);
}
var vo, yD, mD;
B6({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function B6(e) {
  return vo = B4(e), yD = vo.format, vo.parse, mD = vo.utcFormat, vo.utcParse, vo;
}
function k6(e) {
  return new Date(e);
}
function L6(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function b1(e, t, n, r, o, l, c, f, d, h) {
  var y = i1(), v = y.invert, g = y.domain, b = h(".%L"), _ = h(":%S"), S = h("%I:%M"), x = h("%I %p"), A = h("%a %d"), E = h("%b %d"), M = h("%B"), j = h("%Y");
  function w(T) {
    return (d(T) < T ? b : f(T) < T ? _ : c(T) < T ? S : l(T) < T ? x : r(T) < T ? o(T) < T ? A : E : n(T) < T ? M : j)(T);
  }
  return y.invert = function(T) {
    return new Date(v(T));
  }, y.domain = function(T) {
    return arguments.length ? g(Array.from(T, L6)) : g().map(k6);
  }, y.ticks = function(T) {
    var C = g();
    return e(C[0], C[C.length - 1], T ?? 10);
  }, y.tickFormat = function(T, C) {
    return C == null ? w : h(C);
  }, y.nice = function(T) {
    var C = g();
    return (!T || typeof T.range != "function") && (T = t(C[0], C[C.length - 1], T ?? 10)), T ? g(rD(C, T)) : y;
  }, y.copy = function() {
    return pc(y, b1(e, t, n, r, o, l, c, f, d, h));
  }, y;
}
function U6() {
  return Un.apply(b1(z4, q4, Gr, m1, bd, vc, v1, h1, ui, yD).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function I6() {
  return Un.apply(b1(R4, $4, Yr, g1, xd, gd, y1, p1, ui, mD).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Sd() {
  var e = 0, t = 1, n, r, o, l, c = Ft, f = !1, d;
  function h(v) {
    return v == null || isNaN(v = +v) ? d : c(o === 0 ? 0.5 : (v = (l(v) - n) * o, f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t] = v, n = l(e = +e), r = l(t = +t), o = n === r ? 0 : 1 / (r - n), h) : [e, t];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function y(v) {
    return function(g) {
      var b, _;
      return arguments.length ? ([b, _] = g, c = v(b, _), h) : [c(0), c(1)];
    };
  }
  return h.range = y(au), h.rangeRound = y(a1), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return l = v, n = v(e), r = v(t), o = n === r ? 0 : 1 / (r - n), h;
  };
}
function Ra(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function gD() {
  var e = Na(Sd()(Ft));
  return e.copy = function() {
    return Ra(e, gD());
  }, Fr.apply(e, arguments);
}
function bD() {
  var e = l1(Sd()).domain([1, 10]);
  return e.copy = function() {
    return Ra(e, bD()).base(e.base());
  }, Fr.apply(e, arguments);
}
function xD() {
  var e = c1(Sd());
  return e.copy = function() {
    return Ra(e, xD()).constant(e.constant());
  }, Fr.apply(e, arguments);
}
function x1() {
  var e = s1(Sd());
  return e.copy = function() {
    return Ra(e, x1()).exponent(e.exponent());
  }, Fr.apply(e, arguments);
}
function H6() {
  return x1.apply(null, arguments).exponent(0.5);
}
function SD() {
  var e = [], t = Ft;
  function n(r) {
    if (r != null && !isNaN(r = +r)) return t((dc(e, r, 1) - 1) / (e.length - 1));
  }
  return n.domain = function(r) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let o of r) o != null && !isNaN(o = +o) && e.push(o);
    return e.sort(Ma), n;
  }, n.interpolator = function(r) {
    return arguments.length ? (t = r, n) : t;
  }, n.range = function() {
    return e.map((r, o) => t(o / (e.length - 1)));
  }, n.quantiles = function(r) {
    return Array.from({ length: r + 1 }, (o, l) => Mk(e, l / r));
  }, n.copy = function() {
    return SD(t).domain(e);
  }, Fr.apply(n, arguments);
}
function _d() {
  var e = 0, t = 0.5, n = 1, r = 1, o, l, c, f, d, h = Ft, y, v = !1, g;
  function b(S) {
    return isNaN(S = +S) ? g : (S = 0.5 + ((S = +y(S)) - l) * (r * S < r * l ? f : d), h(v ? Math.max(0, Math.min(1, S)) : S));
  }
  b.domain = function(S) {
    return arguments.length ? ([e, t, n] = S, o = y(e = +e), l = y(t = +t), c = y(n = +n), f = o === l ? 0 : 0.5 / (l - o), d = l === c ? 0 : 0.5 / (c - l), r = l < o ? -1 : 1, b) : [e, t, n];
  }, b.clamp = function(S) {
    return arguments.length ? (v = !!S, b) : v;
  }, b.interpolator = function(S) {
    return arguments.length ? (h = S, b) : h;
  };
  function _(S) {
    return function(x) {
      var A, E, M;
      return arguments.length ? ([A, E, M] = x, h = t4(S, [A, E, M]), b) : [h(0), h(0.5), h(1)];
    };
  }
  return b.range = _(au), b.rangeRound = _(a1), b.unknown = function(S) {
    return arguments.length ? (g = S, b) : g;
  }, function(S) {
    return y = S, o = S(e), l = S(t), c = S(n), f = o === l ? 0 : 0.5 / (l - o), d = l === c ? 0 : 0.5 / (c - l), r = l < o ? -1 : 1, b;
  };
}
function _D() {
  var e = Na(_d()(Ft));
  return e.copy = function() {
    return Ra(e, _D());
  }, Fr.apply(e, arguments);
}
function OD() {
  var e = l1(_d()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Ra(e, OD()).base(e.base());
  }, Fr.apply(e, arguments);
}
function wD() {
  var e = c1(_d());
  return e.copy = function() {
    return Ra(e, wD()).constant(e.constant());
  }, Fr.apply(e, arguments);
}
function S1() {
  var e = s1(_d());
  return e.copy = function() {
    return Ra(e, S1()).exponent(e.exponent());
  }, Fr.apply(e, arguments);
}
function G6() {
  return S1.apply(null, arguments).exponent(0.5);
}
const v2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: zl,
  scaleDiverging: _D,
  scaleDivergingLog: OD,
  scaleDivergingPow: S1,
  scaleDivergingSqrt: G6,
  scaleDivergingSymlog: wD,
  scaleIdentity: nD,
  scaleImplicit: Db,
  scaleLinear: Sf,
  scaleLog: aD,
  scaleOrdinal: t1,
  scalePoint: bl,
  scalePow: f1,
  scaleQuantile: uD,
  scaleQuantize: lD,
  scaleRadial: oD,
  scaleSequential: gD,
  scaleSequentialLog: bD,
  scaleSequentialPow: x1,
  scaleSequentialQuantile: SD,
  scaleSequentialSqrt: H6,
  scaleSequentialSymlog: xD,
  scaleSqrt: w4,
  scaleSymlog: iD,
  scaleThreshold: cD,
  scaleTime: U6,
  scaleUtc: I6,
  tickFormat: tD
}, Symbol.toStringTag, { value: "Module" }));
var mg, y2;
function AD() {
  if (y2) return mg;
  y2 = 1;
  var e = eu();
  function t(n, r, o) {
    for (var l = -1, c = n.length; ++l < c; ) {
      var f = n[l], d = r(f);
      if (d != null && (h === void 0 ? d === d && !e(d) : o(d, h)))
        var h = d, y = f;
    }
    return y;
  }
  return mg = t, mg;
}
var gg, m2;
function Y6() {
  if (m2) return gg;
  m2 = 1;
  function e(t, n) {
    return t > n;
  }
  return gg = e, gg;
}
var bg, g2;
function K6() {
  if (g2) return bg;
  g2 = 1;
  var e = AD(), t = Y6(), n = ru();
  function r(o) {
    return o && o.length ? e(o, n, t) : void 0;
  }
  return bg = r, bg;
}
var X6 = K6();
const Ta = /* @__PURE__ */ et(X6);
var xg, b2;
function V6() {
  if (b2) return xg;
  b2 = 1;
  function e(t, n) {
    return t < n;
  }
  return xg = e, xg;
}
var Sg, x2;
function F6() {
  if (x2) return Sg;
  x2 = 1;
  var e = AD(), t = V6(), n = ru();
  function r(o) {
    return o && o.length ? e(o, n, t) : void 0;
  }
  return Sg = r, Sg;
}
var W6 = F6();
const Od = /* @__PURE__ */ et(W6);
var _g, S2;
function Z6() {
  if (S2) return _g;
  S2 = 1;
  var e = B0(), t = Da(), n = $C(), r = un();
  function o(l, c) {
    var f = r(l) ? e : n;
    return f(l, t(c, 3));
  }
  return _g = o, _g;
}
var Og, _2;
function Q6() {
  if (_2) return Og;
  _2 = 1;
  var e = NC(), t = Z6();
  function n(r, o) {
    return e(t(r, o), 1);
  }
  return Og = n, Og;
}
var J6 = Q6();
const e5 = /* @__PURE__ */ et(J6);
var wg, O2;
function t5() {
  if (O2) return wg;
  O2 = 1;
  var e = W0();
  function t(n, r) {
    return e(n, r);
  }
  return wg = t, wg;
}
var n5 = t5();
const vi = /* @__PURE__ */ et(n5);
var iu = 1e9, r5 = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, O1, lt = !0, Ln = "[DecimalError] ", fi = Ln + "Invalid argument: ", _1 = Ln + "Exponent out of range: ", ou = Math.floor, ai = Math.pow, a5 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Sn, Ct = 1e7, ot = 7, TD = 9007199254740991, Af = ou(TD / ot), ve = {};
ve.absoluteValue = ve.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ve.comparedTo = ve.cmp = function(e) {
  var t, n, r, o, l = this;
  if (e = new l.constructor(e), l.s !== e.s) return l.s || -e.s;
  if (l.e !== e.e) return l.e > e.e ^ l.s < 0 ? 1 : -1;
  for (r = l.d.length, o = e.d.length, t = 0, n = r < o ? r : o; t < n; ++t)
    if (l.d[t] !== e.d[t]) return l.d[t] > e.d[t] ^ l.s < 0 ? 1 : -1;
  return r === o ? 0 : r > o ^ l.s < 0 ? 1 : -1;
};
ve.decimalPlaces = ve.dp = function() {
  var e = this, t = e.d.length - 1, n = (t - e.e) * ot;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) n--;
  return n < 0 ? 0 : n;
};
ve.dividedBy = ve.div = function(e) {
  return Ir(this, new this.constructor(e));
};
ve.dividedToIntegerBy = ve.idiv = function(e) {
  var t = this, n = t.constructor;
  return Je(Ir(t, new n(e), 0, 1), n.precision);
};
ve.equals = ve.eq = function(e) {
  return !this.cmp(e);
};
ve.exponent = function() {
  return xt(this);
};
ve.greaterThan = ve.gt = function(e) {
  return this.cmp(e) > 0;
};
ve.greaterThanOrEqualTo = ve.gte = function(e) {
  return this.cmp(e) >= 0;
};
ve.isInteger = ve.isint = function() {
  return this.e > this.d.length - 2;
};
ve.isNegative = ve.isneg = function() {
  return this.s < 0;
};
ve.isPositive = ve.ispos = function() {
  return this.s > 0;
};
ve.isZero = function() {
  return this.s === 0;
};
ve.lessThan = ve.lt = function(e) {
  return this.cmp(e) < 0;
};
ve.lessThanOrEqualTo = ve.lte = function(e) {
  return this.cmp(e) < 1;
};
ve.logarithm = ve.log = function(e) {
  var t, n = this, r = n.constructor, o = r.precision, l = o + 5;
  if (e === void 0)
    e = new r(10);
  else if (e = new r(e), e.s < 1 || e.eq(Sn)) throw Error(Ln + "NaN");
  if (n.s < 1) throw Error(Ln + (n.s ? "NaN" : "-Infinity"));
  return n.eq(Sn) ? new r(0) : (lt = !1, t = Ir(Ul(n, l), Ul(e, l), l), lt = !0, Je(t, o));
};
ve.minus = ve.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? MD(t, e) : ED(t, (e.s = -e.s, e));
};
ve.modulo = ve.mod = function(e) {
  var t, n = this, r = n.constructor, o = r.precision;
  if (e = new r(e), !e.s) throw Error(Ln + "NaN");
  return n.s ? (lt = !1, t = Ir(n, e, 0, 1).times(e), lt = !0, n.minus(t)) : Je(new r(n), o);
};
ve.naturalExponential = ve.exp = function() {
  return jD(this);
};
ve.naturalLogarithm = ve.ln = function() {
  return Ul(this);
};
ve.negated = ve.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ve.plus = ve.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? ED(t, e) : MD(t, (e.s = -e.s, e));
};
ve.precision = ve.sd = function(e) {
  var t, n, r, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(fi + e);
  if (t = xt(o) + 1, r = o.d.length - 1, n = r * ot + 1, r = o.d[r], r) {
    for (; r % 10 == 0; r /= 10) n--;
    for (r = o.d[0]; r >= 10; r /= 10) n++;
  }
  return e && t > n ? t : n;
};
ve.squareRoot = ve.sqrt = function() {
  var e, t, n, r, o, l, c, f = this, d = f.constructor;
  if (f.s < 1) {
    if (!f.s) return new d(0);
    throw Error(Ln + "NaN");
  }
  for (e = xt(f), lt = !1, o = Math.sqrt(+f), o == 0 || o == 1 / 0 ? (t = or(f.d), (t.length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = ou((e + 1) / 2) - (e < 0 || e % 2), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), r = new d(t)) : r = new d(o.toString()), n = d.precision, o = c = n + 3; ; )
    if (l = r, r = l.plus(Ir(f, l, c + 2)).times(0.5), or(l.d).slice(0, c) === (t = or(r.d)).slice(0, c)) {
      if (t = t.slice(c - 3, c + 1), o == c && t == "4999") {
        if (Je(l, n + 1, 0), l.times(l).eq(f)) {
          r = l;
          break;
        }
      } else if (t != "9999")
        break;
      c += 4;
    }
  return lt = !0, Je(r, n);
};
ve.times = ve.mul = function(e) {
  var t, n, r, o, l, c, f, d, h, y = this, v = y.constructor, g = y.d, b = (e = new v(e)).d;
  if (!y.s || !e.s) return new v(0);
  for (e.s *= y.s, n = y.e + e.e, d = g.length, h = b.length, d < h && (l = g, g = b, b = l, c = d, d = h, h = c), l = [], c = d + h, r = c; r--; ) l.push(0);
  for (r = h; --r >= 0; ) {
    for (t = 0, o = d + r; o > r; )
      f = l[o] + b[r] * g[o - r - 1] + t, l[o--] = f % Ct | 0, t = f / Ct | 0;
    l[o] = (l[o] + t) % Ct | 0;
  }
  for (; !l[--c]; ) l.pop();
  return t ? ++n : l.shift(), e.d = l, e.e = n, lt ? Je(e, v.precision) : e;
};
ve.toDecimalPlaces = ve.todp = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (hr(e, 0, iu), t === void 0 ? t = r.rounding : hr(t, 0, 8), Je(n, e + xt(n) + 1, t));
};
ve.toExponential = function(e, t) {
  var n, r = this, o = r.constructor;
  return e === void 0 ? n = yi(r, !0) : (hr(e, 0, iu), t === void 0 ? t = o.rounding : hr(t, 0, 8), r = Je(new o(r), e + 1, t), n = yi(r, !0, e + 1)), n;
};
ve.toFixed = function(e, t) {
  var n, r, o = this, l = o.constructor;
  return e === void 0 ? yi(o) : (hr(e, 0, iu), t === void 0 ? t = l.rounding : hr(t, 0, 8), r = Je(new l(o), e + xt(o) + 1, t), n = yi(r.abs(), !1, e + xt(r) + 1), o.isneg() && !o.isZero() ? "-" + n : n);
};
ve.toInteger = ve.toint = function() {
  var e = this, t = e.constructor;
  return Je(new t(e), xt(e) + 1, t.rounding);
};
ve.toNumber = function() {
  return +this;
};
ve.toPower = ve.pow = function(e) {
  var t, n, r, o, l, c, f = this, d = f.constructor, h = 12, y = +(e = new d(e));
  if (!e.s) return new d(Sn);
  if (f = new d(f), !f.s) {
    if (e.s < 1) throw Error(Ln + "Infinity");
    return f;
  }
  if (f.eq(Sn)) return f;
  if (r = d.precision, e.eq(Sn)) return Je(f, r);
  if (t = e.e, n = e.d.length - 1, c = t >= n, l = f.s, c) {
    if ((n = y < 0 ? -y : y) <= TD) {
      for (o = new d(Sn), t = Math.ceil(r / ot + 4), lt = !1; n % 2 && (o = o.times(f), A2(o.d, t)), n = ou(n / 2), n !== 0; )
        f = f.times(f), A2(f.d, t);
      return lt = !0, e.s < 0 ? new d(Sn).div(o) : Je(o, r);
    }
  } else if (l < 0) throw Error(Ln + "NaN");
  return l = l < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1, f.s = 1, lt = !1, o = e.times(Ul(f, r + h)), lt = !0, o = jD(o), o.s = l, o;
};
ve.toPrecision = function(e, t) {
  var n, r, o = this, l = o.constructor;
  return e === void 0 ? (n = xt(o), r = yi(o, n <= l.toExpNeg || n >= l.toExpPos)) : (hr(e, 1, iu), t === void 0 ? t = l.rounding : hr(t, 0, 8), o = Je(new l(o), e, t), n = xt(o), r = yi(o, e <= n || n <= l.toExpNeg, e)), r;
};
ve.toSignificantDigits = ve.tosd = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (hr(e, 1, iu), t === void 0 ? t = r.rounding : hr(t, 0, 8)), Je(new r(n), e, t);
};
ve.toString = ve.valueOf = ve.val = ve.toJSON = ve[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = xt(e), n = e.constructor;
  return yi(e, t <= n.toExpNeg || t >= n.toExpPos);
};
function ED(e, t) {
  var n, r, o, l, c, f, d, h, y = e.constructor, v = y.precision;
  if (!e.s || !t.s)
    return t.s || (t = new y(e)), lt ? Je(t, v) : t;
  if (d = e.d, h = t.d, c = e.e, o = t.e, d = d.slice(), l = c - o, l) {
    for (l < 0 ? (r = d, l = -l, f = h.length) : (r = h, o = c, f = d.length), c = Math.ceil(v / ot), f = c > f ? c + 1 : f + 1, l > f && (l = f, r.length = 1), r.reverse(); l--; ) r.push(0);
    r.reverse();
  }
  for (f = d.length, l = h.length, f - l < 0 && (l = f, r = h, h = d, d = r), n = 0; l; )
    n = (d[--l] = d[l] + h[l] + n) / Ct | 0, d[l] %= Ct;
  for (n && (d.unshift(n), ++o), f = d.length; d[--f] == 0; ) d.pop();
  return t.d = d, t.e = o, lt ? Je(t, v) : t;
}
function hr(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(fi + e);
}
function or(e) {
  var t, n, r, o = e.length - 1, l = "", c = e[0];
  if (o > 0) {
    for (l += c, t = 1; t < o; t++)
      r = e[t] + "", n = ot - r.length, n && (l += wa(n)), l += r;
    c = e[t], r = c + "", n = ot - r.length, n && (l += wa(n));
  } else if (c === 0)
    return "0";
  for (; c % 10 === 0; ) c /= 10;
  return l + c;
}
var Ir = /* @__PURE__ */ (function() {
  function e(r, o) {
    var l, c = 0, f = r.length;
    for (r = r.slice(); f--; )
      l = r[f] * o + c, r[f] = l % Ct | 0, c = l / Ct | 0;
    return c && r.unshift(c), r;
  }
  function t(r, o, l, c) {
    var f, d;
    if (l != c)
      d = l > c ? 1 : -1;
    else
      for (f = d = 0; f < l; f++)
        if (r[f] != o[f]) {
          d = r[f] > o[f] ? 1 : -1;
          break;
        }
    return d;
  }
  function n(r, o, l) {
    for (var c = 0; l--; )
      r[l] -= c, c = r[l] < o[l] ? 1 : 0, r[l] = c * Ct + r[l] - o[l];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, o, l, c) {
    var f, d, h, y, v, g, b, _, S, x, A, E, M, j, w, T, C, R, N = r.constructor, K = r.s == o.s ? 1 : -1, L = r.d, B = o.d;
    if (!r.s) return new N(r);
    if (!o.s) throw Error(Ln + "Division by zero");
    for (d = r.e - o.e, C = B.length, w = L.length, b = new N(K), _ = b.d = [], h = 0; B[h] == (L[h] || 0); ) ++h;
    if (B[h] > (L[h] || 0) && --d, l == null ? E = l = N.precision : c ? E = l + (xt(r) - xt(o)) + 1 : E = l, E < 0) return new N(0);
    if (E = E / ot + 2 | 0, h = 0, C == 1)
      for (y = 0, B = B[0], E++; (h < w || y) && E--; h++)
        M = y * Ct + (L[h] || 0), _[h] = M / B | 0, y = M % B | 0;
    else {
      for (y = Ct / (B[0] + 1) | 0, y > 1 && (B = e(B, y), L = e(L, y), C = B.length, w = L.length), j = C, S = L.slice(0, C), x = S.length; x < C; ) S[x++] = 0;
      R = B.slice(), R.unshift(0), T = B[0], B[1] >= Ct / 2 && ++T;
      do
        y = 0, f = t(B, S, C, x), f < 0 ? (A = S[0], C != x && (A = A * Ct + (S[1] || 0)), y = A / T | 0, y > 1 ? (y >= Ct && (y = Ct - 1), v = e(B, y), g = v.length, x = S.length, f = t(v, S, g, x), f == 1 && (y--, n(v, C < g ? R : B, g))) : (y == 0 && (f = y = 1), v = B.slice()), g = v.length, g < x && v.unshift(0), n(S, v, x), f == -1 && (x = S.length, f = t(B, S, C, x), f < 1 && (y++, n(S, C < x ? R : B, x))), x = S.length) : f === 0 && (y++, S = [0]), _[h++] = y, f && S[0] ? S[x++] = L[j] || 0 : (S = [L[j]], x = 1);
      while ((j++ < w || S[0] !== void 0) && E--);
    }
    return _[0] || _.shift(), b.e = d, Je(b, c ? l + xt(b) + 1 : l);
  };
})();
function jD(e, t) {
  var n, r, o, l, c, f, d = 0, h = 0, y = e.constructor, v = y.precision;
  if (xt(e) > 16) throw Error(_1 + xt(e));
  if (!e.s) return new y(Sn);
  for (lt = !1, f = v, c = new y(0.03125); e.abs().gte(0.1); )
    e = e.times(c), h += 5;
  for (r = Math.log(ai(2, h)) / Math.LN10 * 2 + 5 | 0, f += r, n = o = l = new y(Sn), y.precision = f; ; ) {
    if (o = Je(o.times(e), f), n = n.times(++d), c = l.plus(Ir(o, n, f)), or(c.d).slice(0, f) === or(l.d).slice(0, f)) {
      for (; h--; ) l = Je(l.times(l), f);
      return y.precision = v, t == null ? (lt = !0, Je(l, v)) : l;
    }
    l = c;
  }
}
function xt(e) {
  for (var t = e.e * ot, n = e.d[0]; n >= 10; n /= 10) t++;
  return t;
}
function Ag(e, t, n) {
  if (t > e.LN10.sd())
    throw lt = !0, n && (e.precision = n), Error(Ln + "LN10 precision limit exceeded");
  return Je(new e(e.LN10), t);
}
function wa(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Ul(e, t) {
  var n, r, o, l, c, f, d, h, y, v = 1, g = 10, b = e, _ = b.d, S = b.constructor, x = S.precision;
  if (b.s < 1) throw Error(Ln + (b.s ? "NaN" : "-Infinity"));
  if (b.eq(Sn)) return new S(0);
  if (t == null ? (lt = !1, h = x) : h = t, b.eq(10))
    return t == null && (lt = !0), Ag(S, h);
  if (h += g, S.precision = h, n = or(_), r = n.charAt(0), l = xt(b), Math.abs(l) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = or(b.d), r = n.charAt(0), v++;
    l = xt(b), r > 1 ? (b = new S("0." + n), l++) : b = new S(r + "." + n.slice(1));
  } else
    return d = Ag(S, h + 2, x).times(l + ""), b = Ul(new S(r + "." + n.slice(1)), h - g).plus(d), S.precision = x, t == null ? (lt = !0, Je(b, x)) : b;
  for (f = c = b = Ir(b.minus(Sn), b.plus(Sn), h), y = Je(b.times(b), h), o = 3; ; ) {
    if (c = Je(c.times(y), h), d = f.plus(Ir(c, new S(o), h)), or(d.d).slice(0, h) === or(f.d).slice(0, h))
      return f = f.times(2), l !== 0 && (f = f.plus(Ag(S, h + 2, x).times(l + ""))), f = Ir(f, new S(v), h), S.precision = x, t == null ? (lt = !0, Je(f, x)) : f;
    f = d, o += 2;
  }
}
function w2(e, t) {
  var n, r, o;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; ) ++r;
  for (o = t.length; t.charCodeAt(o - 1) === 48; ) --o;
  if (t = t.slice(r, o), t) {
    if (o -= r, n = n - r - 1, e.e = ou(n / ot), e.d = [], r = (n + 1) % ot, n < 0 && (r += ot), r < o) {
      for (r && e.d.push(+t.slice(0, r)), o -= ot; r < o; ) e.d.push(+t.slice(r, r += ot));
      t = t.slice(r), r = ot - t.length;
    } else
      r -= o;
    for (; r--; ) t += "0";
    if (e.d.push(+t), lt && (e.e > Af || e.e < -Af)) throw Error(_1 + n);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Je(e, t, n) {
  var r, o, l, c, f, d, h, y, v = e.d;
  for (c = 1, l = v[0]; l >= 10; l /= 10) c++;
  if (r = t - c, r < 0)
    r += ot, o = t, h = v[y = 0];
  else {
    if (y = Math.ceil((r + 1) / ot), l = v.length, y >= l) return e;
    for (h = l = v[y], c = 1; l >= 10; l /= 10) c++;
    r %= ot, o = r - ot + c;
  }
  if (n !== void 0 && (l = ai(10, c - o - 1), f = h / l % 10 | 0, d = t < 0 || v[y + 1] !== void 0 || h % l, d = n < 4 ? (f || d) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (n == 4 || d || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (r > 0 ? o > 0 ? h / ai(10, c - o) : 0 : v[y - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !v[0])
    return d ? (l = xt(e), v.length = 1, t = t - l - 1, v[0] = ai(10, (ot - t % ot) % ot), e.e = ou(-t / ot) || 0) : (v.length = 1, v[0] = e.e = e.s = 0), e;
  if (r == 0 ? (v.length = y, l = 1, y--) : (v.length = y + 1, l = ai(10, ot - r), v[y] = o > 0 ? (h / ai(10, c - o) % ai(10, o) | 0) * l : 0), d)
    for (; ; )
      if (y == 0) {
        (v[0] += l) == Ct && (v[0] = 1, ++e.e);
        break;
      } else {
        if (v[y] += l, v[y] != Ct) break;
        v[y--] = 0, l = 1;
      }
  for (r = v.length; v[--r] === 0; ) v.pop();
  if (lt && (e.e > Af || e.e < -Af))
    throw Error(_1 + xt(e));
  return e;
}
function MD(e, t) {
  var n, r, o, l, c, f, d, h, y, v, g = e.constructor, b = g.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new g(e), lt ? Je(t, b) : t;
  if (d = e.d, v = t.d, r = t.e, h = e.e, d = d.slice(), c = h - r, c) {
    for (y = c < 0, y ? (n = d, c = -c, f = v.length) : (n = v, r = h, f = d.length), o = Math.max(Math.ceil(b / ot), f) + 2, c > o && (c = o, n.length = 1), n.reverse(), o = c; o--; ) n.push(0);
    n.reverse();
  } else {
    for (o = d.length, f = v.length, y = o < f, y && (f = o), o = 0; o < f; o++)
      if (d[o] != v[o]) {
        y = d[o] < v[o];
        break;
      }
    c = 0;
  }
  for (y && (n = d, d = v, v = n, t.s = -t.s), f = d.length, o = v.length - f; o > 0; --o) d[f++] = 0;
  for (o = v.length; o > c; ) {
    if (d[--o] < v[o]) {
      for (l = o; l && d[--l] === 0; ) d[l] = Ct - 1;
      --d[l], d[o] += Ct;
    }
    d[o] -= v[o];
  }
  for (; d[--f] === 0; ) d.pop();
  for (; d[0] === 0; d.shift()) --r;
  return d[0] ? (t.d = d, t.e = r, lt ? Je(t, b) : t) : new g(0);
}
function yi(e, t, n) {
  var r, o = xt(e), l = or(e.d), c = l.length;
  return t ? (n && (r = n - c) > 0 ? l = l.charAt(0) + "." + l.slice(1) + wa(r) : c > 1 && (l = l.charAt(0) + "." + l.slice(1)), l = l + (o < 0 ? "e" : "e+") + o) : o < 0 ? (l = "0." + wa(-o - 1) + l, n && (r = n - c) > 0 && (l += wa(r))) : o >= c ? (l += wa(o + 1 - c), n && (r = n - o - 1) > 0 && (l = l + "." + wa(r))) : ((r = o + 1) < c && (l = l.slice(0, r) + "." + l.slice(r)), n && (r = n - c) > 0 && (o + 1 === c && (l += "."), l += wa(r))), e.s < 0 ? "-" + l : l;
}
function A2(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function CD(e) {
  var t, n, r;
  function o(l) {
    var c = this;
    if (!(c instanceof o)) return new o(l);
    if (c.constructor = o, l instanceof o) {
      c.s = l.s, c.e = l.e, c.d = (l = l.d) ? l.slice() : l;
      return;
    }
    if (typeof l == "number") {
      if (l * 0 !== 0)
        throw Error(fi + l);
      if (l > 0)
        c.s = 1;
      else if (l < 0)
        l = -l, c.s = -1;
      else {
        c.s = 0, c.e = 0, c.d = [0];
        return;
      }
      if (l === ~~l && l < 1e7) {
        c.e = 0, c.d = [l];
        return;
      }
      return w2(c, l.toString());
    } else if (typeof l != "string")
      throw Error(fi + l);
    if (l.charCodeAt(0) === 45 ? (l = l.slice(1), c.s = -1) : c.s = 1, a5.test(l)) w2(c, l);
    else throw Error(fi + l);
  }
  if (o.prototype = ve, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = CD, o.config = o.set = i5, e === void 0 && (e = {}), e)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return o.config(e), o;
}
function i5(e) {
  if (!e || typeof e != "object")
    throw Error(Ln + "Object expected");
  var t, n, r, o = [
    "precision",
    1,
    iu,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < o.length; t += 3)
    if ((r = e[n = o[t]]) !== void 0)
      if (ou(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
      else throw Error(fi + n + ": " + r);
  if ((r = e[n = "LN10"]) !== void 0)
    if (r == Math.LN10) this[n] = new this(r);
    else throw Error(fi + n + ": " + r);
  return this;
}
var O1 = CD(r5);
Sn = new O1(1);
const Ze = O1;
function o5(e) {
  return s5(e) || c5(e) || l5(e) || u5();
}
function u5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l5(e, t) {
  if (e) {
    if (typeof e == "string") return $b(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $b(e, t);
  }
}
function c5(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function s5(e) {
  if (Array.isArray(e)) return $b(e);
}
function $b(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var f5 = function(t) {
  return t;
}, DD = {}, PD = function(t) {
  return t === DD;
}, T2 = function(t) {
  return function n() {
    return arguments.length === 0 || arguments.length === 1 && PD(arguments.length <= 0 ? void 0 : arguments[0]) ? n : t.apply(void 0, arguments);
  };
}, d5 = function e(t, n) {
  return t === 1 ? n : T2(function() {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    var c = o.filter(function(f) {
      return f !== DD;
    }).length;
    return c >= t ? n.apply(void 0, o) : e(t - c, T2(function() {
      for (var f = arguments.length, d = new Array(f), h = 0; h < f; h++)
        d[h] = arguments[h];
      var y = o.map(function(v) {
        return PD(v) ? d.shift() : v;
      });
      return n.apply(void 0, o5(y).concat(d));
    }));
  });
}, wd = function(t) {
  return d5(t.length, t);
}, zb = function(t, n) {
  for (var r = [], o = t; o < n; ++o)
    r[o - t] = o;
  return r;
}, h5 = wd(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(n) {
    return t[n];
  }).map(e);
}), p5 = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  if (!n.length)
    return f5;
  var o = n.reverse(), l = o[0], c = o.slice(1);
  return function() {
    return c.reduce(function(f, d) {
      return d(f);
    }, l.apply(void 0, arguments));
  };
}, qb = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, ND = function(t) {
  var n = null, r = null;
  return function() {
    for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
      l[c] = arguments[c];
    return n && l.every(function(f, d) {
      return f === n[d];
    }) || (n = l, r = t.apply(void 0, l)), r;
  };
};
function v5(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ze(e).abs().log(10).toNumber()) + 1, t;
}
function y5(e, t, n) {
  for (var r = new Ze(e), o = 0, l = []; r.lt(t) && o < 1e5; )
    l.push(r.toNumber()), r = r.add(n), o++;
  return l;
}
var m5 = wd(function(e, t, n) {
  var r = +e, o = +t;
  return r + n * (o - r);
}), g5 = wd(function(e, t, n) {
  var r = t - +e;
  return r = r || 1 / 0, (n - e) / r;
}), b5 = wd(function(e, t, n) {
  var r = t - +e;
  return r = r || 1 / 0, Math.max(0, Math.min(1, (n - e) / r));
});
const Ad = {
  rangeStep: y5,
  getDigitCount: v5,
  interpolateNumber: m5,
  uninterpolateNumber: g5,
  uninterpolateTruncation: b5
};
function Bb(e) {
  return _5(e) || S5(e) || RD(e) || x5();
}
function x5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S5(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function _5(e) {
  if (Array.isArray(e)) return kb(e);
}
function Il(e, t) {
  return A5(e) || w5(e, t) || RD(e, t) || O5();
}
function O5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RD(e, t) {
  if (e) {
    if (typeof e == "string") return kb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kb(e, t);
  }
}
function kb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function w5(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [], r = !0, o = !1, l = void 0;
    try {
      for (var c = e[Symbol.iterator](), f; !(r = (f = c.next()).done) && (n.push(f.value), !(t && n.length === t)); r = !0)
        ;
    } catch (d) {
      o = !0, l = d;
    } finally {
      try {
        !r && c.return != null && c.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function A5(e) {
  if (Array.isArray(e)) return e;
}
function $D(e) {
  var t = Il(e, 2), n = t[0], r = t[1], o = n, l = r;
  return n > r && (o = r, l = n), [o, l];
}
function zD(e, t, n) {
  if (e.lte(0))
    return new Ze(0);
  var r = Ad.getDigitCount(e.toNumber()), o = new Ze(10).pow(r), l = e.div(o), c = r !== 1 ? 0.05 : 0.1, f = new Ze(Math.ceil(l.div(c).toNumber())).add(n).mul(c), d = f.mul(o);
  return t ? d : new Ze(Math.ceil(d));
}
function T5(e, t, n) {
  var r = 1, o = new Ze(e);
  if (!o.isint() && n) {
    var l = Math.abs(e);
    l < 1 ? (r = new Ze(10).pow(Ad.getDigitCount(e) - 1), o = new Ze(Math.floor(o.div(r).toNumber())).mul(r)) : l > 1 && (o = new Ze(Math.floor(e)));
  } else e === 0 ? o = new Ze(Math.floor((t - 1) / 2)) : n || (o = new Ze(Math.floor(e)));
  var c = Math.floor((t - 1) / 2), f = p5(h5(function(d) {
    return o.add(new Ze(d - c).mul(r)).toNumber();
  }), zb);
  return f(0, t);
}
function qD(e, t, n, r) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (n - 1)))
    return {
      step: new Ze(0),
      tickMin: new Ze(0),
      tickMax: new Ze(0)
    };
  var l = zD(new Ze(t).sub(e).div(n - 1), r, o), c;
  e <= 0 && t >= 0 ? c = new Ze(0) : (c = new Ze(e).add(t).div(2), c = c.sub(new Ze(c).mod(l)));
  var f = Math.ceil(c.sub(e).div(l).toNumber()), d = Math.ceil(new Ze(t).sub(c).div(l).toNumber()), h = f + d + 1;
  return h > n ? qD(e, t, n, r, o + 1) : (h < n && (d = t > 0 ? d + (n - h) : d, f = t > 0 ? f : f + (n - h)), {
    step: l,
    tickMin: c.sub(new Ze(f).mul(l)),
    tickMax: c.add(new Ze(d).mul(l))
  });
}
function E5(e) {
  var t = Il(e, 2), n = t[0], r = t[1], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = Math.max(o, 2), f = $D([n, r]), d = Il(f, 2), h = d[0], y = d[1];
  if (h === -1 / 0 || y === 1 / 0) {
    var v = y === 1 / 0 ? [h].concat(Bb(zb(0, o - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Bb(zb(0, o - 1).map(function() {
      return -1 / 0;
    })), [y]);
    return n > r ? qb(v) : v;
  }
  if (h === y)
    return T5(h, o, l);
  var g = qD(h, y, c, l), b = g.step, _ = g.tickMin, S = g.tickMax, x = Ad.rangeStep(_, S.add(new Ze(0.1).mul(b)), b);
  return n > r ? qb(x) : x;
}
function j5(e, t) {
  var n = Il(e, 2), r = n[0], o = n[1], l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = $D([r, o]), f = Il(c, 2), d = f[0], h = f[1];
  if (d === -1 / 0 || h === 1 / 0)
    return [r, o];
  if (d === h)
    return [d];
  var y = Math.max(t, 2), v = zD(new Ze(h).sub(d).div(y - 1), l, 0), g = [].concat(Bb(Ad.rangeStep(new Ze(d), new Ze(h).sub(new Ze(0.99).mul(v)), v)), [h]);
  return r > o ? qb(g) : g;
}
var M5 = ND(E5), C5 = ND(j5), D5 = "Invariant failed";
function mi(e, t) {
  throw new Error(D5);
}
var P5 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function $o(e) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e);
}
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tf.apply(this, arguments);
}
function N5(e, t) {
  return q5(e) || z5(e, t) || $5(e, t) || R5();
}
function R5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $5(e, t) {
  if (e) {
    if (typeof e == "string") return E2(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E2(e, t);
  }
}
function E2(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function z5(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function q5(e) {
  if (Array.isArray(e)) return e;
}
function B5(e, t) {
  if (e == null) return {};
  var n = k5(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function k5(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function L5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U5(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, LD(r.key), r);
  }
}
function I5(e, t, n) {
  return t && U5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H5(e, t, n) {
  return t = Ef(t), G5(e, BD() ? Reflect.construct(t, n || [], Ef(e).constructor) : t.apply(e, n));
}
function G5(e, t) {
  if (t && ($o(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Y5(e);
}
function Y5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BD() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (BD = function() {
    return !!e;
  })();
}
function Ef(e) {
  return Ef = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ef(e);
}
function K5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lb(e, t);
}
function Lb(e, t) {
  return Lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Lb(e, t);
}
function kD(e, t, n) {
  return t = LD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function LD(e) {
  var t = X5(e, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function X5(e, t) {
  if ($o(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($o(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var uu = /* @__PURE__ */ (function(e) {
  function t() {
    return L5(this, t), H5(this, t, arguments);
  }
  return K5(t, e), I5(t, [{
    key: "render",
    value: function() {
      var r = this.props, o = r.offset, l = r.layout, c = r.width, f = r.dataKey, d = r.data, h = r.dataPointFormatter, y = r.xAxis, v = r.yAxis, g = B5(r, P5), b = Te(g, !1);
      this.props.direction === "x" && y.type !== "number" && mi();
      var _ = d.map(function(S) {
        var x = h(S, f), A = x.x, E = x.y, M = x.value, j = x.errorVal;
        if (!j)
          return null;
        var w = [], T, C;
        if (Array.isArray(j)) {
          var R = N5(j, 2);
          T = R[0], C = R[1];
        } else
          T = C = j;
        if (l === "vertical") {
          var N = y.scale, K = E + o, L = K + c, B = K - c, F = N(M - T), G = N(M + C);
          w.push({
            x1: G,
            y1: L,
            x2: G,
            y2: B
          }), w.push({
            x1: F,
            y1: K,
            x2: G,
            y2: K
          }), w.push({
            x1: F,
            y1: L,
            x2: F,
            y2: B
          });
        } else if (l === "horizontal") {
          var V = v.scale, $ = A + o, Y = $ - c, ne = $ + c, H = V(M - T), J = V(M + C);
          w.push({
            x1: Y,
            y1: J,
            x2: ne,
            y2: J
          }), w.push({
            x1: $,
            y1: H,
            x2: $,
            y2: J
          }), w.push({
            x1: Y,
            y1: H,
            x2: ne,
            y2: H
          });
        }
        return /* @__PURE__ */ k.createElement(Ie, Tf({
          className: "recharts-errorBar",
          key: "bar-".concat(w.map(function(P) {
            return "".concat(P.x1, "-").concat(P.x2, "-").concat(P.y1, "-").concat(P.y2);
          }))
        }, b), w.map(function(P) {
          return /* @__PURE__ */ k.createElement("line", Tf({}, P, {
            key: "line-".concat(P.x1, "-").concat(P.x2, "-").concat(P.y1, "-").concat(P.y2)
          }));
        }));
      });
      return /* @__PURE__ */ k.createElement(Ie, {
        className: "recharts-errorBars"
      }, _);
    }
  }]);
})(k.Component);
kD(uu, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
kD(uu, "displayName", "ErrorBar");
function Hl(e) {
  "@babel/helpers - typeof";
  return Hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hl(e);
}
function j2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? j2(Object(n), !0).forEach(function(r) {
      V5(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function V5(e, t, n) {
  return t = F5(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function F5(e) {
  var t = W5(e, "string");
  return Hl(t) == "symbol" ? t : t + "";
}
function W5(e, t) {
  if (Hl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Hl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var UD = function(t) {
  var n = t.children, r = t.formattedGraphicalItems, o = t.legendWidth, l = t.legendContent, c = bn(n, Oo);
  if (!c)
    return null;
  var f = Oo.defaultProps, d = f !== void 0 ? ni(ni({}, f), c.props) : {}, h;
  return c.props && c.props.payload ? h = c.props && c.props.payload : l === "children" ? h = (r || []).reduce(function(y, v) {
    var g = v.item, b = v.props, _ = b.sectors || b.data || [];
    return y.concat(_.map(function(S) {
      return {
        type: c.props.iconType || g.props.legendType,
        value: S.name,
        color: S.fill,
        payload: S
      };
    }));
  }, []) : h = (r || []).map(function(y) {
    var v = y.item, g = v.type.defaultProps, b = g !== void 0 ? ni(ni({}, g), v.props) : {}, _ = b.dataKey, S = b.name, x = b.legendType, A = b.hide;
    return {
      inactive: A,
      dataKey: _,
      type: d.iconType || x || "square",
      color: w1(v),
      value: S || _,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: b
    };
  }), ni(ni(ni({}, d), Oo.getWithHeight(c, o)), {}, {
    payload: h,
    item: c
  });
};
function Gl(e) {
  "@babel/helpers - typeof";
  return Gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gl(e);
}
function M2(e) {
  return eL(e) || J5(e) || Q5(e) || Z5();
}
function Z5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q5(e, t) {
  if (e) {
    if (typeof e == "string") return Ub(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ub(e, t);
  }
}
function J5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eL(e) {
  if (Array.isArray(e)) return Ub(e);
}
function Ub(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function C2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? C2(Object(n), !0).forEach(function(r) {
      Ao(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ao(e, t, n) {
  return t = tL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function tL(e) {
  var t = nL(e, "string");
  return Gl(t) == "symbol" ? t : t + "";
}
function nL(e, t) {
  if (Gl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Gl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function At(e, t, n) {
  return we(e) || we(t) ? n : wt(t) ? kn(e, t, n) : Ee(t) ? t(e) : n;
}
function xl(e, t, n, r) {
  var o = e5(e, function(f) {
    return At(f, t);
  });
  if (n === "number") {
    var l = o.filter(function(f) {
      return de(f) || parseFloat(f);
    });
    return l.length ? [Od(l), Ta(l)] : [1 / 0, -1 / 0];
  }
  var c = r ? o.filter(function(f) {
    return !we(f);
  }) : o;
  return c.map(function(f) {
    return wt(f) || f instanceof Date ? f : "";
  });
}
var rL = function(t) {
  var n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], o = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, c = -1, f = (n = r == null ? void 0 : r.length) !== null && n !== void 0 ? n : 0;
  if (f <= 1)
    return 0;
  if (l && l.axisType === "angleAxis" && Math.abs(Math.abs(l.range[1] - l.range[0]) - 360) <= 1e-6)
    for (var d = l.range, h = 0; h < f; h++) {
      var y = h > 0 ? o[h - 1].coordinate : o[f - 1].coordinate, v = o[h].coordinate, g = h >= f - 1 ? o[0].coordinate : o[h + 1].coordinate, b = void 0;
      if (Fn(v - y) !== Fn(g - v)) {
        var _ = [];
        if (Fn(g - v) === Fn(d[1] - d[0])) {
          b = g;
          var S = v + d[1] - d[0];
          _[0] = Math.min(S, (S + y) / 2), _[1] = Math.max(S, (S + y) / 2);
        } else {
          b = y;
          var x = g + d[1] - d[0];
          _[0] = Math.min(v, (x + v) / 2), _[1] = Math.max(v, (x + v) / 2);
        }
        var A = [Math.min(v, (b + v) / 2), Math.max(v, (b + v) / 2)];
        if (t > A[0] && t <= A[1] || t >= _[0] && t <= _[1]) {
          c = o[h].index;
          break;
        }
      } else {
        var E = Math.min(y, g), M = Math.max(y, g);
        if (t > (E + v) / 2 && t <= (M + v) / 2) {
          c = o[h].index;
          break;
        }
      }
    }
  else
    for (var j = 0; j < f; j++)
      if (j === 0 && t <= (r[j].coordinate + r[j + 1].coordinate) / 2 || j > 0 && j < f - 1 && t > (r[j].coordinate + r[j - 1].coordinate) / 2 && t <= (r[j].coordinate + r[j + 1].coordinate) / 2 || j === f - 1 && t > (r[j].coordinate + r[j - 1].coordinate) / 2) {
        c = r[j].index;
        break;
      }
  return c;
}, w1 = function(t) {
  var n, r = t, o = r.type.displayName, l = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ft(ft({}, t.type.defaultProps), t.props) : t.props, c = l.stroke, f = l.fill, d;
  switch (o) {
    case "Line":
      d = c;
      break;
    case "Area":
    case "Radar":
      d = c && c !== "none" ? c : f;
      break;
    default:
      d = f;
      break;
  }
  return d;
}, aL = function(t) {
  var n = t.barSize, r = t.totalSize, o = t.stackGroups, l = o === void 0 ? {} : o;
  if (!l)
    return {};
  for (var c = {}, f = Object.keys(l), d = 0, h = f.length; d < h; d++)
    for (var y = l[f[d]].stackGroups, v = Object.keys(y), g = 0, b = v.length; g < b; g++) {
      var _ = y[v[g]], S = _.items, x = _.cateAxisId, A = S.filter(function(C) {
        return Lr(C.type).indexOf("Bar") >= 0;
      });
      if (A && A.length) {
        var E = A[0].type.defaultProps, M = E !== void 0 ? ft(ft({}, E), A[0].props) : A[0].props, j = M.barSize, w = M[x];
        c[w] || (c[w] = []);
        var T = we(j) ? n : j;
        c[w].push({
          item: A[0],
          stackList: A.slice(1),
          barSize: we(T) ? void 0 : pi(T, r, 0)
        });
      }
    }
  return c;
}, iL = function(t) {
  var n = t.barGap, r = t.barCategoryGap, o = t.bandSize, l = t.sizeList, c = l === void 0 ? [] : l, f = t.maxBarSize, d = c.length;
  if (d < 1) return null;
  var h = pi(n, o, 0, !0), y, v = [];
  if (c[0].barSize === +c[0].barSize) {
    var g = !1, b = o / d, _ = c.reduce(function(j, w) {
      return j + w.barSize || 0;
    }, 0);
    _ += (d - 1) * h, _ >= o && (_ -= (d - 1) * h, h = 0), _ >= o && b > 0 && (g = !0, b *= 0.9, _ = d * b);
    var S = (o - _) / 2 >> 0, x = {
      offset: S - h,
      size: 0
    };
    y = c.reduce(function(j, w) {
      var T = {
        item: w.item,
        position: {
          offset: x.offset + x.size + h,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: g ? b : w.barSize
        }
      }, C = [].concat(M2(j), [T]);
      return x = C[C.length - 1].position, w.stackList && w.stackList.length && w.stackList.forEach(function(R) {
        C.push({
          item: R,
          position: x
        });
      }), C;
    }, v);
  } else {
    var A = pi(r, o, 0, !0);
    o - 2 * A - (d - 1) * h <= 0 && (h = 0);
    var E = (o - 2 * A - (d - 1) * h) / d;
    E > 1 && (E >>= 0);
    var M = f === +f ? Math.min(E, f) : E;
    y = c.reduce(function(j, w, T) {
      var C = [].concat(M2(j), [{
        item: w.item,
        position: {
          offset: A + (E + h) * T + (E - M) / 2,
          size: M
        }
      }]);
      return w.stackList && w.stackList.length && w.stackList.forEach(function(R) {
        C.push({
          item: R,
          position: C[C.length - 1].position
        });
      }), C;
    }, v);
  }
  return y;
}, oL = function(t, n, r, o) {
  var l = r.children, c = r.width, f = r.margin, d = c - (f.left || 0) - (f.right || 0), h = UD({
    children: l,
    legendWidth: d
  });
  if (h) {
    var y = o || {}, v = y.width, g = y.height, b = h.align, _ = h.verticalAlign, S = h.layout;
    if ((S === "vertical" || S === "horizontal" && _ === "middle") && b !== "center" && de(t[b]))
      return ft(ft({}, t), {}, Ao({}, b, t[b] + (v || 0)));
    if ((S === "horizontal" || S === "vertical" && b === "center") && _ !== "middle" && de(t[_]))
      return ft(ft({}, t), {}, Ao({}, _, t[_] + (g || 0)));
  }
  return t;
}, uL = function(t, n, r) {
  return we(n) ? !0 : t === "horizontal" ? n === "yAxis" : t === "vertical" || r === "x" ? n === "xAxis" : r === "y" ? n === "yAxis" : !0;
}, ID = function(t, n, r, o, l) {
  var c = n.props.children, f = on(c, uu).filter(function(h) {
    return uL(o, l, h.props.direction);
  });
  if (f && f.length) {
    var d = f.map(function(h) {
      return h.props.dataKey;
    });
    return t.reduce(function(h, y) {
      var v = At(y, r);
      if (we(v)) return h;
      var g = Array.isArray(v) ? [Od(v), Ta(v)] : [v, v], b = d.reduce(function(_, S) {
        var x = At(y, S, 0), A = g[0] - Math.abs(Array.isArray(x) ? x[0] : x), E = g[1] + Math.abs(Array.isArray(x) ? x[1] : x);
        return [Math.min(A, _[0]), Math.max(E, _[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(b[0], h[0]), Math.max(b[1], h[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, lL = function(t, n, r, o, l) {
  var c = n.map(function(f) {
    return ID(t, f, r, l, o);
  }).filter(function(f) {
    return !we(f);
  });
  return c && c.length ? c.reduce(function(f, d) {
    return [Math.min(f[0], d[0]), Math.max(f[1], d[1])];
  }, [1 / 0, -1 / 0]) : null;
}, HD = function(t, n, r, o, l) {
  var c = n.map(function(d) {
    var h = d.props.dataKey;
    return r === "number" && h && ID(t, d, h, o) || xl(t, h, r, l);
  });
  if (r === "number")
    return c.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(d, h) {
        return [Math.min(d[0], h[0]), Math.max(d[1], h[1])];
      },
      [1 / 0, -1 / 0]
    );
  var f = {};
  return c.reduce(function(d, h) {
    for (var y = 0, v = h.length; y < v; y++)
      f[h[y]] || (f[h[y]] = !0, d.push(h[y]));
    return d;
  }, []);
}, GD = function(t, n) {
  return t === "horizontal" && n === "xAxis" || t === "vertical" && n === "yAxis" || t === "centric" && n === "angleAxis" || t === "radial" && n === "radiusAxis";
}, YD = function(t, n, r, o) {
  if (o)
    return t.map(function(d) {
      return d.coordinate;
    });
  var l, c, f = t.map(function(d) {
    return d.coordinate === n && (l = !0), d.coordinate === r && (c = !0), d.coordinate;
  });
  return l || f.push(n), c || f.push(r), f;
}, Br = function(t, n, r) {
  if (!t) return null;
  var o = t.scale, l = t.duplicateDomain, c = t.type, f = t.range, d = t.realScaleType === "scaleBand" ? o.bandwidth() / 2 : 2, h = (n || r) && c === "category" && o.bandwidth ? o.bandwidth() / d : 0;
  if (h = t.axisType === "angleAxis" && (f == null ? void 0 : f.length) >= 2 ? Fn(f[0] - f[1]) * 2 * h : h, n && (t.ticks || t.niceTicks)) {
    var y = (t.ticks || t.niceTicks).map(function(v) {
      var g = l ? l.indexOf(v) : v;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: o(g) + h,
        value: v,
        offset: h
      };
    });
    return y.filter(function(v) {
      return !nu(v.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(v, g) {
    return {
      coordinate: o(v) + h,
      value: v,
      index: g,
      offset: h
    };
  }) : o.ticks && !r ? o.ticks(t.tickCount).map(function(v) {
    return {
      coordinate: o(v) + h,
      value: v,
      offset: h
    };
  }) : o.domain().map(function(v, g) {
    return {
      coordinate: o(v) + h,
      value: l ? l[v] : v,
      index: g,
      offset: h
    };
  });
}, Tg = /* @__PURE__ */ new WeakMap(), Gs = function(t, n) {
  if (typeof n != "function")
    return t;
  Tg.has(t) || Tg.set(t, /* @__PURE__ */ new WeakMap());
  var r = Tg.get(t);
  if (r.has(n))
    return r.get(n);
  var o = function() {
    t.apply(void 0, arguments), n.apply(void 0, arguments);
  };
  return r.set(n, o), o;
}, cL = function(t, n, r) {
  var o = t.scale, l = t.type, c = t.layout, f = t.axisType;
  if (o === "auto")
    return c === "radial" && f === "radiusAxis" ? {
      scale: zl(),
      realScaleType: "band"
    } : c === "radial" && f === "angleAxis" ? {
      scale: Sf(),
      realScaleType: "linear"
    } : l === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? {
      scale: bl(),
      realScaleType: "point"
    } : l === "category" ? {
      scale: zl(),
      realScaleType: "band"
    } : {
      scale: Sf(),
      realScaleType: "linear"
    };
  if (hi(o)) {
    var d = "scale".concat(ld(o));
    return {
      scale: (v2[d] || bl)(),
      realScaleType: v2[d] ? d : "point"
    };
  }
  return Ee(o) ? {
    scale: o
  } : {
    scale: bl(),
    realScaleType: "point"
  };
}, D2 = 1e-4, sL = function(t) {
  var n = t.domain();
  if (!(!n || n.length <= 2)) {
    var r = n.length, o = t.range(), l = Math.min(o[0], o[1]) - D2, c = Math.max(o[0], o[1]) + D2, f = t(n[0]), d = t(n[r - 1]);
    (f < l || f > c || d < l || d > c) && t.domain([n[0], n[r - 1]]);
  }
}, fL = function(t, n) {
  if (!t)
    return null;
  for (var r = 0, o = t.length; r < o; r++)
    if (t[r].item === n)
      return t[r].position;
  return null;
}, dL = function(t, n) {
  if (!n || n.length !== 2 || !de(n[0]) || !de(n[1]))
    return t;
  var r = Math.min(n[0], n[1]), o = Math.max(n[0], n[1]), l = [t[0], t[1]];
  return (!de(t[0]) || t[0] < r) && (l[0] = r), (!de(t[1]) || t[1] > o) && (l[1] = o), l[0] > o && (l[0] = o), l[1] < r && (l[1] = r), l;
}, hL = function(t) {
  var n = t.length;
  if (!(n <= 0))
    for (var r = 0, o = t[0].length; r < o; ++r)
      for (var l = 0, c = 0, f = 0; f < n; ++f) {
        var d = nu(t[f][r][1]) ? t[f][r][0] : t[f][r][1];
        d >= 0 ? (t[f][r][0] = l, t[f][r][1] = l + d, l = t[f][r][1]) : (t[f][r][0] = c, t[f][r][1] = c + d, c = t[f][r][1]);
      }
}, pL = function(t) {
  var n = t.length;
  if (!(n <= 0))
    for (var r = 0, o = t[0].length; r < o; ++r)
      for (var l = 0, c = 0; c < n; ++c) {
        var f = nu(t[c][r][1]) ? t[c][r][0] : t[c][r][1];
        f >= 0 ? (t[c][r][0] = l, t[c][r][1] = l + f, l = t[c][r][1]) : (t[c][r][0] = 0, t[c][r][1] = 0);
      }
}, vL = {
  sign: hL,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Qz,
  // @ts-expect-error definitelytyped types are incorrect
  none: Eo,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Jz,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: eq,
  positive: pL
}, yL = function(t, n, r) {
  var o = n.map(function(f) {
    return f.props.dataKey;
  }), l = vL[r], c = Zz().keys(o).value(function(f, d) {
    return +At(f, d, 0);
  }).order(mb).offset(l);
  return c(t);
}, mL = function(t, n, r, o, l, c) {
  if (!t)
    return null;
  var f = c ? n.reverse() : n, d = {}, h = f.reduce(function(v, g) {
    var b, _ = (b = g.type) !== null && b !== void 0 && b.defaultProps ? ft(ft({}, g.type.defaultProps), g.props) : g.props, S = _.stackId, x = _.hide;
    if (x)
      return v;
    var A = _[r], E = v[A] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (wt(S)) {
      var M = E.stackGroups[S] || {
        numericAxisId: r,
        cateAxisId: o,
        items: []
      };
      M.items.push(g), E.hasStack = !0, E.stackGroups[S] = M;
    } else
      E.stackGroups[xi("_stackId_")] = {
        numericAxisId: r,
        cateAxisId: o,
        items: [g]
      };
    return ft(ft({}, v), {}, Ao({}, A, E));
  }, d), y = {};
  return Object.keys(h).reduce(function(v, g) {
    var b = h[g];
    if (b.hasStack) {
      var _ = {};
      b.stackGroups = Object.keys(b.stackGroups).reduce(function(S, x) {
        var A = b.stackGroups[x];
        return ft(ft({}, S), {}, Ao({}, x, {
          numericAxisId: r,
          cateAxisId: o,
          items: A.items,
          stackedData: yL(t, A.items, l)
        }));
      }, _);
    }
    return ft(ft({}, v), {}, Ao({}, g, b));
  }, y);
}, gL = function(t, n) {
  var r = n.realScaleType, o = n.type, l = n.tickCount, c = n.originalDomain, f = n.allowDecimals, d = r || n.scale;
  if (d !== "auto" && d !== "linear")
    return null;
  if (l && o === "number" && c && (c[0] === "auto" || c[1] === "auto")) {
    var h = t.domain();
    if (!h.length)
      return null;
    var y = M5(h, l, f);
    return t.domain([Od(y), Ta(y)]), {
      niceTicks: y
    };
  }
  if (l && o === "number") {
    var v = t.domain(), g = C5(v, l, f);
    return {
      niceTicks: g
    };
  }
  return null;
};
function zo(e) {
  var t = e.axis, n = e.ticks, r = e.bandSize, o = e.entry, l = e.index, c = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !we(o[t.dataKey])) {
      var f = ef(n, "value", o[t.dataKey]);
      if (f)
        return f.coordinate + r / 2;
    }
    return n[l] ? n[l].coordinate + r / 2 : null;
  }
  var d = At(o, we(c) ? t.dataKey : c);
  return we(d) ? null : t.scale(d);
}
var P2 = function(t) {
  var n = t.axis, r = t.ticks, o = t.offset, l = t.bandSize, c = t.entry, f = t.index;
  if (n.type === "category")
    return r[f] ? r[f].coordinate + o : null;
  var d = At(c, n.dataKey, n.domain[f]);
  return we(d) ? null : n.scale(d) - l / 2 + o;
}, bL = function(t) {
  var n = t.numericAxis, r = n.scale.domain();
  if (n.type === "number") {
    var o = Math.min(r[0], r[1]), l = Math.max(r[0], r[1]);
    return o <= 0 && l >= 0 ? 0 : l < 0 ? l : o;
  }
  return r[0];
}, xL = function(t, n) {
  var r, o = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ft(ft({}, t.type.defaultProps), t.props) : t.props, l = o.stackId;
  if (wt(l)) {
    var c = n[l];
    if (c) {
      var f = c.items.indexOf(t);
      return f >= 0 ? c.stackedData[f] : null;
    }
  }
  return null;
}, SL = function(t) {
  return t.reduce(function(n, r) {
    return [Od(r.concat([n[0]]).filter(de)), Ta(r.concat([n[1]]).filter(de))];
  }, [1 / 0, -1 / 0]);
}, KD = function(t, n, r) {
  return Object.keys(t).reduce(function(o, l) {
    var c = t[l], f = c.stackedData, d = f.reduce(function(h, y) {
      var v = SL(y.slice(n, r + 1));
      return [Math.min(h[0], v[0]), Math.max(h[1], v[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(d[0], o[0]), Math.max(d[1], o[1])];
  }, [1 / 0, -1 / 0]).map(function(o) {
    return o === 1 / 0 || o === -1 / 0 ? 0 : o;
  });
}, N2 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, R2 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ib = function(t, n, r) {
  if (Ee(t))
    return t(n, r);
  if (!Array.isArray(t))
    return n;
  var o = [];
  if (de(t[0]))
    o[0] = r ? t[0] : Math.min(t[0], n[0]);
  else if (N2.test(t[0])) {
    var l = +N2.exec(t[0])[1];
    o[0] = n[0] - l;
  } else Ee(t[0]) ? o[0] = t[0](n[0]) : o[0] = n[0];
  if (de(t[1]))
    o[1] = r ? t[1] : Math.max(t[1], n[1]);
  else if (R2.test(t[1])) {
    var c = +R2.exec(t[1])[1];
    o[1] = n[1] + c;
  } else Ee(t[1]) ? o[1] = t[1](n[1]) : o[1] = n[1];
  return o;
}, jf = function(t, n, r) {
  if (t && t.scale && t.scale.bandwidth) {
    var o = t.scale.bandwidth();
    if (!r || o > 0)
      return o;
  }
  if (t && n && n.length >= 2) {
    for (var l = Q0(n, function(v) {
      return v.coordinate;
    }), c = 1 / 0, f = 1, d = l.length; f < d; f++) {
      var h = l[f], y = l[f - 1];
      c = Math.min((h.coordinate || 0) - (y.coordinate || 0), c);
    }
    return c === 1 / 0 ? 0 : c;
  }
  return r ? void 0 : 0;
}, $2 = function(t, n, r) {
  return !t || !t.length || vi(t, kn(r, "type.defaultProps.domain")) ? n : t;
}, XD = function(t, n) {
  var r = t.type.defaultProps ? ft(ft({}, t.type.defaultProps), t.props) : t.props, o = r.dataKey, l = r.name, c = r.unit, f = r.formatter, d = r.tooltipType, h = r.chartType, y = r.hide;
  return ft(ft({}, Te(t, !1)), {}, {
    dataKey: o,
    unit: c,
    formatter: f,
    name: l || o,
    color: w1(t),
    value: At(n, o),
    type: d,
    payload: n,
    chartType: h,
    hide: y
  });
};
function Yl(e) {
  "@babel/helpers - typeof";
  return Yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yl(e);
}
function z2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function q2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? z2(Object(n), !0).forEach(function(r) {
      _L(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _L(e, t, n) {
  return t = OL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function OL(e) {
  var t = wL(e, "string");
  return Yl(t) == "symbol" ? t : t + "";
}
function wL(e, t) {
  if (Yl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Yl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mf = Math.PI / 180, AL = function(t) {
  return t * 180 / Math.PI;
}, Lt = function(t, n, r, o) {
  return {
    x: t + Math.cos(-Mf * o) * r,
    y: n + Math.sin(-Mf * o) * r
  };
}, TL = function(t, n) {
  var r = t.x, o = t.y, l = n.x, c = n.y;
  return Math.sqrt(Math.pow(r - l, 2) + Math.pow(o - c, 2));
}, EL = function(t, n) {
  var r = t.x, o = t.y, l = n.cx, c = n.cy, f = TL({
    x: r,
    y: o
  }, {
    x: l,
    y: c
  });
  if (f <= 0)
    return {
      radius: f
    };
  var d = (r - l) / f, h = Math.acos(d);
  return o > c && (h = 2 * Math.PI - h), {
    radius: f,
    angle: AL(h),
    angleInRadian: h
  };
}, jL = function(t) {
  var n = t.startAngle, r = t.endAngle, o = Math.floor(n / 360), l = Math.floor(r / 360), c = Math.min(o, l);
  return {
    startAngle: n - c * 360,
    endAngle: r - c * 360
  };
}, ML = function(t, n) {
  var r = n.startAngle, o = n.endAngle, l = Math.floor(r / 360), c = Math.floor(o / 360), f = Math.min(l, c);
  return t + f * 360;
}, B2 = function(t, n) {
  var r = t.x, o = t.y, l = EL({
    x: r,
    y: o
  }, n), c = l.radius, f = l.angle, d = n.innerRadius, h = n.outerRadius;
  if (c < d || c > h)
    return !1;
  if (c === 0)
    return !0;
  var y = jL(n), v = y.startAngle, g = y.endAngle, b = f, _;
  if (v <= g) {
    for (; b > g; )
      b -= 360;
    for (; b < v; )
      b += 360;
    _ = b >= v && b <= g;
  } else {
    for (; b > v; )
      b -= 360;
    for (; b < g; )
      b += 360;
    _ = b >= g && b <= v;
  }
  return _ ? q2(q2({}, n), {}, {
    radius: c,
    angle: ML(b, n)
  }) : null;
};
function Kl(e) {
  "@babel/helpers - typeof";
  return Kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kl(e);
}
var CL = ["offset"];
function DL(e) {
  return $L(e) || RL(e) || NL(e) || PL();
}
function PL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NL(e, t) {
  if (e) {
    if (typeof e == "string") return Hb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hb(e, t);
  }
}
function RL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $L(e) {
  if (Array.isArray(e)) return Hb(e);
}
function Hb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zL(e, t) {
  if (e == null) return {};
  var n = qL(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function qL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function k2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? k2(Object(n), !0).forEach(function(r) {
      BL(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function BL(e, t, n) {
  return t = kL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function kL(e) {
  var t = LL(e, "string");
  return Kl(t) == "symbol" ? t : t + "";
}
function LL(e, t) {
  if (Kl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Kl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xl.apply(this, arguments);
}
var UL = function(t) {
  var n = t.value, r = t.formatter, o = we(t.children) ? n : t.children;
  return Ee(r) ? r(o) : o;
}, IL = function(t, n) {
  var r = Fn(n - t), o = Math.min(Math.abs(n - t), 360);
  return r * o;
}, HL = function(t, n, r) {
  var o = t.position, l = t.viewBox, c = t.offset, f = t.className, d = l, h = d.cx, y = d.cy, v = d.innerRadius, g = d.outerRadius, b = d.startAngle, _ = d.endAngle, S = d.clockWise, x = (v + g) / 2, A = IL(b, _), E = A >= 0 ? 1 : -1, M, j;
  o === "insideStart" ? (M = b + E * c, j = S) : o === "insideEnd" ? (M = _ - E * c, j = !S) : o === "end" && (M = _ + E * c, j = S), j = A <= 0 ? j : !j;
  var w = Lt(h, y, x, M), T = Lt(h, y, x, M + (j ? 1 : -1) * 359), C = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(x, ",").concat(x, ",0,1,").concat(j ? 0 : 1, `,
    `).concat(T.x, ",").concat(T.y), R = we(t.id) ? xi("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ k.createElement("text", Xl({}, r, {
    dominantBaseline: "central",
    className: $e("recharts-radial-bar-label", f)
  }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("path", {
    id: R,
    d: C
  })), /* @__PURE__ */ k.createElement("textPath", {
    xlinkHref: "#".concat(R)
  }, n));
}, GL = function(t) {
  var n = t.viewBox, r = t.offset, o = t.position, l = n, c = l.cx, f = l.cy, d = l.innerRadius, h = l.outerRadius, y = l.startAngle, v = l.endAngle, g = (y + v) / 2;
  if (o === "outside") {
    var b = Lt(c, f, h + r, g), _ = b.x, S = b.y;
    return {
      x: _,
      y: S,
      textAnchor: _ >= c ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (o === "center")
    return {
      x: c,
      y: f,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (o === "centerTop")
    return {
      x: c,
      y: f,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (o === "centerBottom")
    return {
      x: c,
      y: f,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var x = (d + h) / 2, A = Lt(c, f, x, g), E = A.x, M = A.y;
  return {
    x: E,
    y: M,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, YL = function(t) {
  var n = t.viewBox, r = t.parentViewBox, o = t.offset, l = t.position, c = n, f = c.x, d = c.y, h = c.width, y = c.height, v = y >= 0 ? 1 : -1, g = v * o, b = v > 0 ? "end" : "start", _ = v > 0 ? "start" : "end", S = h >= 0 ? 1 : -1, x = S * o, A = S > 0 ? "end" : "start", E = S > 0 ? "start" : "end";
  if (l === "top") {
    var M = {
      x: f + h / 2,
      y: d - v * o,
      textAnchor: "middle",
      verticalAnchor: b
    };
    return Ot(Ot({}, M), r ? {
      height: Math.max(d - r.y, 0),
      width: h
    } : {});
  }
  if (l === "bottom") {
    var j = {
      x: f + h / 2,
      y: d + y + g,
      textAnchor: "middle",
      verticalAnchor: _
    };
    return Ot(Ot({}, j), r ? {
      height: Math.max(r.y + r.height - (d + y), 0),
      width: h
    } : {});
  }
  if (l === "left") {
    var w = {
      x: f - x,
      y: d + y / 2,
      textAnchor: A,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, w), r ? {
      width: Math.max(w.x - r.x, 0),
      height: y
    } : {});
  }
  if (l === "right") {
    var T = {
      x: f + h + x,
      y: d + y / 2,
      textAnchor: E,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, T), r ? {
      width: Math.max(r.x + r.width - T.x, 0),
      height: y
    } : {});
  }
  var C = r ? {
    width: h,
    height: y
  } : {};
  return l === "insideLeft" ? Ot({
    x: f + x,
    y: d + y / 2,
    textAnchor: E,
    verticalAnchor: "middle"
  }, C) : l === "insideRight" ? Ot({
    x: f + h - x,
    y: d + y / 2,
    textAnchor: A,
    verticalAnchor: "middle"
  }, C) : l === "insideTop" ? Ot({
    x: f + h / 2,
    y: d + g,
    textAnchor: "middle",
    verticalAnchor: _
  }, C) : l === "insideBottom" ? Ot({
    x: f + h / 2,
    y: d + y - g,
    textAnchor: "middle",
    verticalAnchor: b
  }, C) : l === "insideTopLeft" ? Ot({
    x: f + x,
    y: d + g,
    textAnchor: E,
    verticalAnchor: _
  }, C) : l === "insideTopRight" ? Ot({
    x: f + h - x,
    y: d + g,
    textAnchor: A,
    verticalAnchor: _
  }, C) : l === "insideBottomLeft" ? Ot({
    x: f + x,
    y: d + y - g,
    textAnchor: E,
    verticalAnchor: b
  }, C) : l === "insideBottomRight" ? Ot({
    x: f + h - x,
    y: d + y - g,
    textAnchor: A,
    verticalAnchor: b
  }, C) : tu(l) && (de(l.x) || ii(l.x)) && (de(l.y) || ii(l.y)) ? Ot({
    x: f + pi(l.x, h),
    y: d + pi(l.y, y),
    textAnchor: "end",
    verticalAnchor: "end"
  }, C) : Ot({
    x: f + h / 2,
    y: d + y / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, C);
}, KL = function(t) {
  return "cx" in t && de(t.cx);
};
function Yt(e) {
  var t = e.offset, n = t === void 0 ? 5 : t, r = zL(e, CL), o = Ot({
    offset: n
  }, r), l = o.viewBox, c = o.position, f = o.value, d = o.children, h = o.content, y = o.className, v = y === void 0 ? "" : y, g = o.textBreakAll;
  if (!l || we(f) && we(d) && !/* @__PURE__ */ ee.isValidElement(h) && !Ee(h))
    return null;
  if (/* @__PURE__ */ ee.isValidElement(h))
    return /* @__PURE__ */ ee.cloneElement(h, o);
  var b;
  if (Ee(h)) {
    if (b = /* @__PURE__ */ ee.createElement(h, o), /* @__PURE__ */ ee.isValidElement(b))
      return b;
  } else
    b = UL(o);
  var _ = KL(l), S = Te(o, !0);
  if (_ && (c === "insideStart" || c === "insideEnd" || c === "end"))
    return HL(o, b, S);
  var x = _ ? GL(o) : YL(o);
  return /* @__PURE__ */ k.createElement(hf, Xl({
    className: $e("recharts-label", v)
  }, S, x, {
    breakAll: g
  }), b);
}
Yt.displayName = "Label";
var VD = function(t) {
  var n = t.cx, r = t.cy, o = t.angle, l = t.startAngle, c = t.endAngle, f = t.r, d = t.radius, h = t.innerRadius, y = t.outerRadius, v = t.x, g = t.y, b = t.top, _ = t.left, S = t.width, x = t.height, A = t.clockWise, E = t.labelViewBox;
  if (E)
    return E;
  if (de(S) && de(x)) {
    if (de(v) && de(g))
      return {
        x: v,
        y: g,
        width: S,
        height: x
      };
    if (de(b) && de(_))
      return {
        x: b,
        y: _,
        width: S,
        height: x
      };
  }
  return de(v) && de(g) ? {
    x: v,
    y: g,
    width: 0,
    height: 0
  } : de(n) && de(r) ? {
    cx: n,
    cy: r,
    startAngle: l || o || 0,
    endAngle: c || o || 0,
    innerRadius: h || 0,
    outerRadius: y || d || f || 0,
    clockWise: A
  } : t.viewBox ? t.viewBox : {};
}, XL = function(t, n) {
  return t ? t === !0 ? /* @__PURE__ */ k.createElement(Yt, {
    key: "label-implicit",
    viewBox: n
  }) : wt(t) ? /* @__PURE__ */ k.createElement(Yt, {
    key: "label-implicit",
    viewBox: n,
    value: t
  }) : /* @__PURE__ */ ee.isValidElement(t) ? t.type === Yt ? /* @__PURE__ */ ee.cloneElement(t, {
    key: "label-implicit",
    viewBox: n
  }) : /* @__PURE__ */ k.createElement(Yt, {
    key: "label-implicit",
    content: t,
    viewBox: n
  }) : Ee(t) ? /* @__PURE__ */ k.createElement(Yt, {
    key: "label-implicit",
    content: t,
    viewBox: n
  }) : tu(t) ? /* @__PURE__ */ k.createElement(Yt, Xl({
    viewBox: n
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, VL = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && r && !t.label)
    return null;
  var o = t.children, l = VD(t), c = on(o, Yt).map(function(d, h) {
    return /* @__PURE__ */ ee.cloneElement(d, {
      viewBox: n || l,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(h)
    });
  });
  if (!r)
    return c;
  var f = XL(t.label, n || l);
  return [f].concat(DL(c));
};
Yt.parseViewBox = VD;
Yt.renderCallByParent = VL;
var Eg, L2;
function FL() {
  if (L2) return Eg;
  L2 = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return Eg = e, Eg;
}
var WL = FL();
const ZL = /* @__PURE__ */ et(WL);
function Vl(e) {
  "@babel/helpers - typeof";
  return Vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vl(e);
}
var QL = ["valueAccessor"], JL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function eU(e) {
  return aU(e) || rU(e) || nU(e) || tU();
}
function tU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nU(e, t) {
  if (e) {
    if (typeof e == "string") return Gb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gb(e, t);
  }
}
function rU(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function aU(e) {
  if (Array.isArray(e)) return Gb(e);
}
function Gb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Cf() {
  return Cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cf.apply(this, arguments);
}
function U2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? U2(Object(n), !0).forEach(function(r) {
      iU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iU(e, t, n) {
  return t = oU(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function oU(e) {
  var t = uU(e, "string");
  return Vl(t) == "symbol" ? t : t + "";
}
function uU(e, t) {
  if (Vl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Vl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H2(e, t) {
  if (e == null) return {};
  var n = lU(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function lU(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var cU = function(t) {
  return Array.isArray(t.value) ? ZL(t.value) : t.value;
};
function fr(e) {
  var t = e.valueAccessor, n = t === void 0 ? cU : t, r = H2(e, QL), o = r.data, l = r.dataKey, c = r.clockWise, f = r.id, d = r.textBreakAll, h = H2(r, JL);
  return !o || !o.length ? null : /* @__PURE__ */ k.createElement(Ie, {
    className: "recharts-label-list"
  }, o.map(function(y, v) {
    var g = we(l) ? n(y, v) : At(y && y.payload, l), b = we(f) ? {} : {
      id: "".concat(f, "-").concat(v)
    };
    return /* @__PURE__ */ k.createElement(Yt, Cf({}, Te(y, !0), h, b, {
      parentViewBox: y.parentViewBox,
      value: g,
      textBreakAll: d,
      viewBox: Yt.parseViewBox(we(c) ? y : I2(I2({}, y), {}, {
        clockWise: c
      })),
      key: "label-".concat(v),
      index: v
    }));
  }));
}
fr.displayName = "LabelList";
function sU(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ k.createElement(fr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ k.isValidElement(e) || Ee(e) ? /* @__PURE__ */ k.createElement(fr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : tu(e) ? /* @__PURE__ */ k.createElement(fr, Cf({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function fU(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && n && !e.label)
    return null;
  var r = e.children, o = on(r, fr).map(function(c, f) {
    return /* @__PURE__ */ ee.cloneElement(c, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(f)
    });
  });
  if (!n)
    return o;
  var l = sU(e.label, t);
  return [l].concat(eU(o));
}
fr.renderCallByParent = fU;
function Fl(e) {
  "@babel/helpers - typeof";
  return Fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fl(e);
}
function Yb() {
  return Yb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yb.apply(this, arguments);
}
function G2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Y2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? G2(Object(n), !0).forEach(function(r) {
      dU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dU(e, t, n) {
  return t = hU(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hU(e) {
  var t = pU(e, "string");
  return Fl(t) == "symbol" ? t : t + "";
}
function pU(e, t) {
  if (Fl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Fl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vU = function(t, n) {
  var r = Fn(n - t), o = Math.min(Math.abs(n - t), 359.999);
  return r * o;
}, Ys = function(t) {
  var n = t.cx, r = t.cy, o = t.radius, l = t.angle, c = t.sign, f = t.isExternal, d = t.cornerRadius, h = t.cornerIsExternal, y = d * (f ? 1 : -1) + o, v = Math.asin(d / y) / Mf, g = h ? l : l + c * v, b = Lt(n, r, y, g), _ = Lt(n, r, o, g), S = h ? l - c * v : l, x = Lt(n, r, y * Math.cos(v * Mf), S);
  return {
    center: b,
    circleTangency: _,
    lineTangency: x,
    theta: v
  };
}, FD = function(t) {
  var n = t.cx, r = t.cy, o = t.innerRadius, l = t.outerRadius, c = t.startAngle, f = t.endAngle, d = vU(c, f), h = c + d, y = Lt(n, r, l, c), v = Lt(n, r, l, h), g = "M ".concat(y.x, ",").concat(y.y, `
    A `).concat(l, ",").concat(l, `,0,
    `).concat(+(Math.abs(d) > 180), ",").concat(+(c > h), `,
    `).concat(v.x, ",").concat(v.y, `
  `);
  if (o > 0) {
    var b = Lt(n, r, o, c), _ = Lt(n, r, o, h);
    g += "L ".concat(_.x, ",").concat(_.y, `
            A `).concat(o, ",").concat(o, `,0,
            `).concat(+(Math.abs(d) > 180), ",").concat(+(c <= h), `,
            `).concat(b.x, ",").concat(b.y, " Z");
  } else
    g += "L ".concat(n, ",").concat(r, " Z");
  return g;
}, yU = function(t) {
  var n = t.cx, r = t.cy, o = t.innerRadius, l = t.outerRadius, c = t.cornerRadius, f = t.forceCornerRadius, d = t.cornerIsExternal, h = t.startAngle, y = t.endAngle, v = Fn(y - h), g = Ys({
    cx: n,
    cy: r,
    radius: l,
    angle: h,
    sign: v,
    cornerRadius: c,
    cornerIsExternal: d
  }), b = g.circleTangency, _ = g.lineTangency, S = g.theta, x = Ys({
    cx: n,
    cy: r,
    radius: l,
    angle: y,
    sign: -v,
    cornerRadius: c,
    cornerIsExternal: d
  }), A = x.circleTangency, E = x.lineTangency, M = x.theta, j = d ? Math.abs(h - y) : Math.abs(h - y) - S - M;
  if (j < 0)
    return f ? "M ".concat(_.x, ",").concat(_.y, `
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(c * 2, `,0
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(-c * 2, `,0
      `) : FD({
      cx: n,
      cy: r,
      innerRadius: o,
      outerRadius: l,
      startAngle: h,
      endAngle: y
    });
  var w = "M ".concat(_.x, ",").concat(_.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(v < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(l, ",").concat(l, ",0,").concat(+(j > 180), ",").concat(+(v < 0), ",").concat(A.x, ",").concat(A.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(v < 0), ",").concat(E.x, ",").concat(E.y, `
  `);
  if (o > 0) {
    var T = Ys({
      cx: n,
      cy: r,
      radius: o,
      angle: h,
      sign: v,
      isExternal: !0,
      cornerRadius: c,
      cornerIsExternal: d
    }), C = T.circleTangency, R = T.lineTangency, N = T.theta, K = Ys({
      cx: n,
      cy: r,
      radius: o,
      angle: y,
      sign: -v,
      isExternal: !0,
      cornerRadius: c,
      cornerIsExternal: d
    }), L = K.circleTangency, B = K.lineTangency, F = K.theta, G = d ? Math.abs(h - y) : Math.abs(h - y) - N - F;
    if (G < 0 && c === 0)
      return "".concat(w, "L").concat(n, ",").concat(r, "Z");
    w += "L".concat(B.x, ",").concat(B.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(v < 0), ",").concat(L.x, ",").concat(L.y, `
      A`).concat(o, ",").concat(o, ",0,").concat(+(G > 180), ",").concat(+(v > 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(v < 0), ",").concat(R.x, ",").concat(R.y, "Z");
  } else
    w += "L".concat(n, ",").concat(r, "Z");
  return w;
}, mU = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, WD = function(t) {
  var n = Y2(Y2({}, mU), t), r = n.cx, o = n.cy, l = n.innerRadius, c = n.outerRadius, f = n.cornerRadius, d = n.forceCornerRadius, h = n.cornerIsExternal, y = n.startAngle, v = n.endAngle, g = n.className;
  if (c < l || y === v)
    return null;
  var b = $e("recharts-sector", g), _ = c - l, S = pi(f, _, 0, !0), x;
  return S > 0 && Math.abs(y - v) < 360 ? x = yU({
    cx: r,
    cy: o,
    innerRadius: l,
    outerRadius: c,
    cornerRadius: Math.min(S, _ / 2),
    forceCornerRadius: d,
    cornerIsExternal: h,
    startAngle: y,
    endAngle: v
  }) : x = FD({
    cx: r,
    cy: o,
    innerRadius: l,
    outerRadius: c,
    startAngle: y,
    endAngle: v
  }), /* @__PURE__ */ k.createElement("path", Yb({}, Te(n, !0), {
    className: b,
    d: x,
    role: "img"
  }));
};
function Wl(e) {
  "@babel/helpers - typeof";
  return Wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wl(e);
}
function Kb() {
  return Kb = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kb.apply(this, arguments);
}
function K2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? K2(Object(n), !0).forEach(function(r) {
      gU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K2(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gU(e, t, n) {
  return t = bU(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bU(e) {
  var t = xU(e, "string");
  return Wl(t) == "symbol" ? t : t + "";
}
function xU(e, t) {
  if (Wl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var V2 = {
  curveBasisClosed: Lz,
  curveBasisOpen: Uz,
  curveBasis: kz,
  curveBumpX: Az,
  curveBumpY: Tz,
  curveLinearClosed: Iz,
  curveLinear: sd,
  curveMonotoneX: Hz,
  curveMonotoneY: Gz,
  curveNatural: Yz,
  curveStep: Kz,
  curveStepAfter: Vz,
  curveStepBefore: Xz
}, Ks = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, cl = function(t) {
  return t.x;
}, sl = function(t) {
  return t.y;
}, SU = function(t, n) {
  if (Ee(t))
    return t;
  var r = "curve".concat(ld(t));
  return (r === "curveMonotone" || r === "curveBump") && n ? V2["".concat(r).concat(n === "vertical" ? "Y" : "X")] : V2[r] || sd;
}, _U = function(t) {
  var n = t.type, r = n === void 0 ? "linear" : n, o = t.points, l = o === void 0 ? [] : o, c = t.baseLine, f = t.layout, d = t.connectNulls, h = d === void 0 ? !1 : d, y = SU(r, f), v = h ? l.filter(function(S) {
    return Ks(S);
  }) : l, g;
  if (Array.isArray(c)) {
    var b = h ? c.filter(function(S) {
      return Ks(S);
    }) : c, _ = v.map(function(S, x) {
      return X2(X2({}, S), {}, {
        base: b[x]
      });
    });
    return f === "vertical" ? g = zs().y(sl).x1(cl).x0(function(S) {
      return S.base.x;
    }) : g = zs().x(cl).y1(sl).y0(function(S) {
      return S.base.y;
    }), g.defined(Ks).curve(y), g(_);
  }
  return f === "vertical" && de(c) ? g = zs().y(sl).x1(cl).x0(c) : de(c) ? g = zs().x(cl).y1(sl).y0(c) : g = nC().x(cl).y(sl), g.defined(Ks).curve(y), g(v);
}, di = function(t) {
  var n = t.className, r = t.points, o = t.path, l = t.pathRef;
  if ((!r || !r.length) && !o)
    return null;
  var c = r && r.length ? _U(t) : o;
  return /* @__PURE__ */ ee.createElement("path", Kb({}, Te(t, !1), tf(t), {
    className: $e("recharts-curve", n),
    d: c,
    ref: l
  }));
}, jg = { exports: {} }, Mg, F2;
function OU() {
  if (F2) return Mg;
  F2 = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mg = e, Mg;
}
var Cg, W2;
function wU() {
  if (W2) return Cg;
  W2 = 1;
  var e = /* @__PURE__ */ OU();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Cg = function() {
    function r(c, f, d, h, y, v) {
      if (v !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var l = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return l.PropTypes = l, l;
  }, Cg;
}
var Z2;
function AU() {
  return Z2 || (Z2 = 1, jg.exports = /* @__PURE__ */ wU()()), jg.exports;
}
var TU = /* @__PURE__ */ AU();
const Ge = /* @__PURE__ */ et(TU), { getOwnPropertyNames: EU, getOwnPropertySymbols: jU } = Object, { hasOwnProperty: MU } = Object.prototype;
function Dg(e, t) {
  return function(r, o, l) {
    return e(r, o, l) && t(r, o, l);
  };
}
function Xs(e) {
  return function(n, r, o) {
    if (!n || !r || typeof n != "object" || typeof r != "object")
      return e(n, r, o);
    const { cache: l } = o, c = l.get(n), f = l.get(r);
    if (c && f)
      return c === r && f === n;
    l.set(n, r), l.set(r, n);
    const d = e(n, r, o);
    return l.delete(n), l.delete(r), d;
  };
}
function CU(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function Q2(e) {
  return EU(e).concat(jU(e));
}
const DU = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((e, t) => MU.call(e, t))
);
function Oi(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
const PU = "__v", NU = "__o", RU = "_owner", { getOwnPropertyDescriptor: J2, keys: ej } = Object;
function $U(e, t) {
  return e.byteLength === t.byteLength && Df(new Uint8Array(e), new Uint8Array(t));
}
function zU(e, t, n) {
  let r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (!n.equals(e[r], t[r], r, r, e, t, n))
      return !1;
  return !0;
}
function qU(e, t) {
  return e.byteLength === t.byteLength && Df(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function BU(e, t) {
  return Oi(e.getTime(), t.getTime());
}
function kU(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function LU(e, t) {
  return e === t;
}
function tj(e, t, n) {
  const r = e.size;
  if (r !== t.size)
    return !1;
  if (!r)
    return !0;
  const o = new Array(r), l = e.entries();
  let c, f, d = 0;
  for (; (c = l.next()) && !c.done; ) {
    const h = t.entries();
    let y = !1, v = 0;
    for (; (f = h.next()) && !f.done; ) {
      if (o[v]) {
        v++;
        continue;
      }
      const g = c.value, b = f.value;
      if (n.equals(g[0], b[0], d, v, e, t, n) && n.equals(g[1], b[1], g[0], b[0], e, t, n)) {
        y = o[v] = !0;
        break;
      }
      v++;
    }
    if (!y)
      return !1;
    d++;
  }
  return !0;
}
const UU = Oi;
function IU(e, t, n) {
  const r = ej(e);
  let o = r.length;
  if (ej(t).length !== o)
    return !1;
  for (; o-- > 0; )
    if (!ZD(e, t, n, r[o]))
      return !1;
  return !0;
}
function fl(e, t, n) {
  const r = Q2(e);
  let o = r.length;
  if (Q2(t).length !== o)
    return !1;
  let l, c, f;
  for (; o-- > 0; )
    if (l = r[o], !ZD(e, t, n, l) || (c = J2(e, l), f = J2(t, l), (c || f) && (!c || !f || c.configurable !== f.configurable || c.enumerable !== f.enumerable || c.writable !== f.writable)))
      return !1;
  return !0;
}
function HU(e, t) {
  return Oi(e.valueOf(), t.valueOf());
}
function GU(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function nj(e, t, n) {
  const r = e.size;
  if (r !== t.size)
    return !1;
  if (!r)
    return !0;
  const o = new Array(r), l = e.values();
  let c, f;
  for (; (c = l.next()) && !c.done; ) {
    const d = t.values();
    let h = !1, y = 0;
    for (; (f = d.next()) && !f.done; ) {
      if (!o[y] && n.equals(c.value, f.value, c.value, f.value, e, t, n)) {
        h = o[y] = !0;
        break;
      }
      y++;
    }
    if (!h)
      return !1;
  }
  return !0;
}
function Df(e, t) {
  let n = e.byteLength;
  if (t.byteLength !== n || e.byteOffset !== t.byteOffset)
    return !1;
  for (; n-- > 0; )
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function YU(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function ZD(e, t, n, r) {
  return (r === RU || r === NU || r === PU) && (e.$$typeof || t.$$typeof) ? !0 : DU(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
const KU = "[object ArrayBuffer]", XU = "[object Arguments]", VU = "[object Boolean]", FU = "[object DataView]", WU = "[object Date]", ZU = "[object Error]", QU = "[object Map]", JU = "[object Number]", eI = "[object Object]", tI = "[object RegExp]", nI = "[object Set]", rI = "[object String]", aI = {
  "[object Int8Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Int16Array]": !0,
  "[object Uint16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float16Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0,
  "[object BigInt64Array]": !0,
  "[object BigUint64Array]": !0
}, iI = "[object URL]", oI = Object.prototype.toString;
function uI({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: o, areFunctionsEqual: l, areMapsEqual: c, areNumbersEqual: f, areObjectsEqual: d, arePrimitiveWrappersEqual: h, areRegExpsEqual: y, areSetsEqual: v, areTypedArraysEqual: g, areUrlsEqual: b, unknownTagComparators: _ }) {
  return function(x, A, E) {
    if (x === A)
      return !0;
    if (x == null || A == null)
      return !1;
    const M = typeof x;
    if (M !== typeof A)
      return !1;
    if (M !== "object")
      return M === "number" ? f(x, A, E) : M === "function" ? l(x, A, E) : !1;
    const j = x.constructor;
    if (j !== A.constructor)
      return !1;
    if (j === Object)
      return d(x, A, E);
    if (Array.isArray(x))
      return t(x, A, E);
    if (j === Date)
      return r(x, A, E);
    if (j === RegExp)
      return y(x, A, E);
    if (j === Map)
      return c(x, A, E);
    if (j === Set)
      return v(x, A, E);
    const w = oI.call(x);
    if (w === WU)
      return r(x, A, E);
    if (w === tI)
      return y(x, A, E);
    if (w === QU)
      return c(x, A, E);
    if (w === nI)
      return v(x, A, E);
    if (w === eI)
      return typeof x.then != "function" && typeof A.then != "function" && d(x, A, E);
    if (w === iI)
      return b(x, A, E);
    if (w === ZU)
      return o(x, A, E);
    if (w === XU)
      return d(x, A, E);
    if (aI[w])
      return g(x, A, E);
    if (w === KU)
      return e(x, A, E);
    if (w === FU)
      return n(x, A, E);
    if (w === VU || w === JU || w === rI)
      return h(x, A, E);
    if (_) {
      let T = _[w];
      if (!T) {
        const C = CU(x);
        C && (T = _[C]);
      }
      if (T)
        return T(x, A, E);
    }
    return !1;
  };
}
function lI({ circular: e, createCustomConfig: t, strict: n }) {
  let r = {
    areArrayBuffersEqual: $U,
    areArraysEqual: n ? fl : zU,
    areDataViewsEqual: qU,
    areDatesEqual: BU,
    areErrorsEqual: kU,
    areFunctionsEqual: LU,
    areMapsEqual: n ? Dg(tj, fl) : tj,
    areNumbersEqual: UU,
    areObjectsEqual: n ? fl : IU,
    arePrimitiveWrappersEqual: HU,
    areRegExpsEqual: GU,
    areSetsEqual: n ? Dg(nj, fl) : nj,
    areTypedArraysEqual: n ? Dg(Df, fl) : Df,
    areUrlsEqual: YU,
    unknownTagComparators: void 0
  };
  if (t && (r = Object.assign({}, r, t(r))), e) {
    const o = Xs(r.areArraysEqual), l = Xs(r.areMapsEqual), c = Xs(r.areObjectsEqual), f = Xs(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: o,
      areMapsEqual: l,
      areObjectsEqual: c,
      areSetsEqual: f
    });
  }
  return r;
}
function cI(e) {
  return function(t, n, r, o, l, c, f) {
    return e(t, n, f);
  };
}
function sI({ circular: e, comparator: t, createState: n, equals: r, strict: o }) {
  if (n)
    return function(f, d) {
      const { cache: h = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: y } = n();
      return t(f, d, {
        cache: h,
        equals: r,
        meta: y,
        strict: o
      });
    };
  if (e)
    return function(f, d) {
      return t(f, d, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: r,
        meta: void 0,
        strict: o
      });
    };
  const l = {
    cache: void 0,
    equals: r,
    meta: void 0,
    strict: o
  };
  return function(f, d) {
    return t(f, d, l);
  };
}
const fI = $a();
$a({ strict: !0 });
$a({ circular: !0 });
$a({
  circular: !0,
  strict: !0
});
$a({
  createInternalComparator: () => Oi
});
$a({
  strict: !0,
  createInternalComparator: () => Oi
});
$a({
  circular: !0,
  createInternalComparator: () => Oi
});
$a({
  circular: !0,
  createInternalComparator: () => Oi,
  strict: !0
});
function $a(e = {}) {
  const { circular: t = !1, createInternalComparator: n, createState: r, strict: o = !1 } = e, l = lI(e), c = uI(l), f = n ? n(c) : cI(c);
  return sI({ circular: t, comparator: c, createState: r, equals: f, strict: o });
}
function dI(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function rj(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = -1, r = function o(l) {
    n < 0 && (n = l), l - n > t ? (e(l), n = -1) : dI(o);
  };
  requestAnimationFrame(r);
}
function Xb(e) {
  "@babel/helpers - typeof";
  return Xb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xb(e);
}
function hI(e) {
  return mI(e) || yI(e) || vI(e) || pI();
}
function pI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vI(e, t) {
  if (e) {
    if (typeof e == "string") return aj(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aj(e, t);
  }
}
function aj(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mI(e) {
  if (Array.isArray(e)) return e;
}
function gI() {
  var e = {}, t = function() {
    return null;
  }, n = !1, r = function o(l) {
    if (!n) {
      if (Array.isArray(l)) {
        if (!l.length)
          return;
        var c = l, f = hI(c), d = f[0], h = f.slice(1);
        if (typeof d == "number") {
          rj(o.bind(null, h), d);
          return;
        }
        o(d), rj(o.bind(null, h));
        return;
      }
      Xb(l) === "object" && (e = l, t(e)), typeof l == "function" && l();
    }
  };
  return {
    stop: function() {
      n = !0;
    },
    start: function(l) {
      n = !1, r(l);
    },
    subscribe: function(l) {
      return t = l, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Zl(e) {
  "@babel/helpers - typeof";
  return Zl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zl(e);
}
function ij(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ij(Object(n), !0).forEach(function(r) {
      QD(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ij(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function QD(e, t, n) {
  return t = bI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bI(e) {
  var t = xI(e, "string");
  return Zl(t) === "symbol" ? t : String(t);
}
function xI(e, t) {
  if (Zl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Zl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var SI = function(t, n) {
  return [Object.keys(t), Object.keys(n)].reduce(function(r, o) {
    return r.filter(function(l) {
      return o.includes(l);
    });
  });
}, _I = function(t) {
  return t;
}, OI = function(t) {
  return t.replace(/([A-Z])/g, function(n) {
    return "-".concat(n.toLowerCase());
  });
}, Sl = function(t, n) {
  return Object.keys(n).reduce(function(r, o) {
    return oj(oj({}, r), {}, QD({}, o, t(o, n[o])));
  }, {});
}, uj = function(t, n, r) {
  return t.map(function(o) {
    return "".concat(OI(o), " ").concat(n, "ms ").concat(r);
  }).join(",");
};
function wI(e, t) {
  return EI(e) || TI(e, t) || JD(e, t) || AI();
}
function AI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TI(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function EI(e) {
  if (Array.isArray(e)) return e;
}
function jI(e) {
  return DI(e) || CI(e) || JD(e) || MI();
}
function MI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JD(e, t) {
  if (e) {
    if (typeof e == "string") return Vb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vb(e, t);
  }
}
function CI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function DI(e) {
  if (Array.isArray(e)) return Vb(e);
}
function Vb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Pf = 1e-4, eP = function(t, n) {
  return [0, 3 * t, 3 * n - 6 * t, 3 * t - 3 * n + 1];
}, tP = function(t, n) {
  return t.map(function(r, o) {
    return r * Math.pow(n, o);
  }).reduce(function(r, o) {
    return r + o;
  });
}, lj = function(t, n) {
  return function(r) {
    var o = eP(t, n);
    return tP(o, r);
  };
}, PI = function(t, n) {
  return function(r) {
    var o = eP(t, n), l = [].concat(jI(o.map(function(c, f) {
      return c * f;
    }).slice(1)), [0]);
    return tP(l, r);
  };
}, cj = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n[0], l = n[1], c = n[2], f = n[3];
  if (n.length === 1)
    switch (n[0]) {
      case "linear":
        o = 0, l = 0, c = 1, f = 1;
        break;
      case "ease":
        o = 0.25, l = 0.1, c = 0.25, f = 1;
        break;
      case "ease-in":
        o = 0.42, l = 0, c = 1, f = 1;
        break;
      case "ease-out":
        o = 0.42, l = 0, c = 0.58, f = 1;
        break;
      case "ease-in-out":
        o = 0, l = 0, c = 0.58, f = 1;
        break;
      default: {
        var d = n[0].split("(");
        if (d[0] === "cubic-bezier" && d[1].split(")")[0].split(",").length === 4) {
          var h = d[1].split(")")[0].split(",").map(function(x) {
            return parseFloat(x);
          }), y = wI(h, 4);
          o = y[0], l = y[1], c = y[2], f = y[3];
        }
      }
    }
  var v = lj(o, c), g = lj(l, f), b = PI(o, c), _ = function(A) {
    return A > 1 ? 1 : A < 0 ? 0 : A;
  }, S = function(A) {
    for (var E = A > 1 ? 1 : A, M = E, j = 0; j < 8; ++j) {
      var w = v(M) - E, T = b(M);
      if (Math.abs(w - E) < Pf || T < Pf)
        return g(M);
      M = _(M - w / T);
    }
    return g(M);
  };
  return S.isStepper = !1, S;
}, NI = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.stiff, r = n === void 0 ? 100 : n, o = t.damping, l = o === void 0 ? 8 : o, c = t.dt, f = c === void 0 ? 17 : c, d = function(y, v, g) {
    var b = -(y - v) * r, _ = g * l, S = g + (b - _) * f / 1e3, x = g * f / 1e3 + y;
    return Math.abs(x - v) < Pf && Math.abs(S) < Pf ? [v, 0] : [x, S];
  };
  return d.isStepper = !0, d.dt = f, d;
}, RI = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n[0];
  if (typeof o == "string")
    switch (o) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return cj(o);
      case "spring":
        return NI();
      default:
        if (o.split("(")[0] === "cubic-bezier")
          return cj(o);
    }
  return typeof o == "function" ? o : null;
};
function Ql(e) {
  "@babel/helpers - typeof";
  return Ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ql(e);
}
function sj(e) {
  return qI(e) || zI(e) || nP(e) || $I();
}
function $I() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qI(e) {
  if (Array.isArray(e)) return Wb(e);
}
function fj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fj(Object(n), !0).forEach(function(r) {
      Fb(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fb(e, t, n) {
  return t = BI(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function BI(e) {
  var t = kI(e, "string");
  return Ql(t) === "symbol" ? t : String(t);
}
function kI(e, t) {
  if (Ql(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ql(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LI(e, t) {
  return HI(e) || II(e, t) || nP(e, t) || UI();
}
function UI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nP(e, t) {
  if (e) {
    if (typeof e == "string") return Wb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wb(e, t);
  }
}
function Wb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function II(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function HI(e) {
  if (Array.isArray(e)) return e;
}
var Nf = function(t, n, r) {
  return t + (n - t) * r;
}, Zb = function(t) {
  var n = t.from, r = t.to;
  return n !== r;
}, GI = function e(t, n, r) {
  var o = Sl(function(l, c) {
    if (Zb(c)) {
      var f = t(c.from, c.to, c.velocity), d = LI(f, 2), h = d[0], y = d[1];
      return kt(kt({}, c), {}, {
        from: h,
        velocity: y
      });
    }
    return c;
  }, n);
  return r < 1 ? Sl(function(l, c) {
    return Zb(c) ? kt(kt({}, c), {}, {
      velocity: Nf(c.velocity, o[l].velocity, r),
      from: Nf(c.from, o[l].from, r)
    }) : c;
  }, n) : e(t, o, r - 1);
};
const YI = (function(e, t, n, r, o) {
  var l = SI(e, t), c = l.reduce(function(x, A) {
    return kt(kt({}, x), {}, Fb({}, A, [e[A], t[A]]));
  }, {}), f = l.reduce(function(x, A) {
    return kt(kt({}, x), {}, Fb({}, A, {
      from: e[A],
      velocity: 0,
      to: t[A]
    }));
  }, {}), d = -1, h, y, v = function() {
    return null;
  }, g = function() {
    return Sl(function(A, E) {
      return E.from;
    }, f);
  }, b = function() {
    return !Object.values(f).filter(Zb).length;
  }, _ = function(A) {
    h || (h = A);
    var E = A - h, M = E / n.dt;
    f = GI(n, f, M), o(kt(kt(kt({}, e), t), g())), h = A, b() || (d = requestAnimationFrame(v));
  }, S = function(A) {
    y || (y = A);
    var E = (A - y) / r, M = Sl(function(w, T) {
      return Nf.apply(void 0, sj(T).concat([n(E)]));
    }, c);
    if (o(kt(kt(kt({}, e), t), M)), E < 1)
      d = requestAnimationFrame(v);
    else {
      var j = Sl(function(w, T) {
        return Nf.apply(void 0, sj(T).concat([n(1)]));
      }, c);
      o(kt(kt(kt({}, e), t), j));
    }
  };
  return v = n.isStepper ? _ : S, function() {
    return requestAnimationFrame(v), function() {
      cancelAnimationFrame(d);
    };
  };
});
function qo(e) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e);
}
var KI = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function XI(e, t) {
  if (e == null) return {};
  var n = VI(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function VI(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, l;
  for (l = 0; l < r.length; l++)
    o = r[l], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Pg(e) {
  return QI(e) || ZI(e) || WI(e) || FI();
}
function FI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WI(e, t) {
  if (e) {
    if (typeof e == "string") return Qb(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qb(e, t);
  }
}
function ZI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function QI(e) {
  if (Array.isArray(e)) return Qb(e);
}
function Qb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function dj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dj(Object(n), !0).forEach(function(r) {
      yl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function yl(e, t, n) {
  return t = rP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function JI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e9(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rP(r.key), r);
  }
}
function t9(e, t, n) {
  return t && e9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rP(e) {
  var t = n9(e, "string");
  return qo(t) === "symbol" ? t : String(t);
}
function n9(e, t) {
  if (qo(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (qo(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jb(e, t);
}
function Jb(e, t) {
  return Jb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Jb(e, t);
}
function a9(e) {
  var t = i9();
  return function() {
    var r = Rf(e), o;
    if (t) {
      var l = Rf(this).constructor;
      o = Reflect.construct(r, arguments, l);
    } else
      o = r.apply(this, arguments);
    return e0(this, o);
  };
}
function e0(e, t) {
  if (t && (qo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return t0(e);
}
function t0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function i9() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rf(e) {
  return Rf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rf(e);
}
var Wn = /* @__PURE__ */ (function(e) {
  r9(n, e);
  var t = a9(n);
  function n(r, o) {
    var l;
    JI(this, n), l = t.call(this, r, o);
    var c = l.props, f = c.isActive, d = c.attributeName, h = c.from, y = c.to, v = c.steps, g = c.children, b = c.duration;
    if (l.handleStyleChange = l.handleStyleChange.bind(t0(l)), l.changeStyle = l.changeStyle.bind(t0(l)), !f || b <= 0)
      return l.state = {
        style: {}
      }, typeof g == "function" && (l.state = {
        style: y
      }), e0(l);
    if (v && v.length)
      l.state = {
        style: v[0].style
      };
    else if (h) {
      if (typeof g == "function")
        return l.state = {
          style: h
        }, e0(l);
      l.state = {
        style: d ? yl({}, d, h) : h
      };
    } else
      l.state = {
        style: {}
      };
    return l;
  }
  return t9(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, l = o.isActive, c = o.canBegin;
      this.mounted = !0, !(!l || !c) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var l = this.props, c = l.isActive, f = l.canBegin, d = l.attributeName, h = l.shouldReAnimate, y = l.to, v = l.from, g = this.state.style;
      if (f) {
        if (!c) {
          var b = {
            style: d ? yl({}, d, y) : y
          };
          this.state && g && (d && g[d] !== y || !d && g !== y) && this.setState(b);
          return;
        }
        if (!(fI(o.to, y) && o.canBegin && o.isActive)) {
          var _ = !o.canBegin || !o.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var S = _ || h ? v : o.to;
          if (this.state && g) {
            var x = {
              style: d ? yl({}, d, S) : S
            };
            (d && g[d] !== S || !d && g !== S) && this.setState(x);
          }
          this.runAnimation(Yn(Yn({}, this.props), {}, {
            from: S,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var o = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), o && o();
    }
  }, {
    key: "handleStyleChange",
    value: function(o) {
      this.changeStyle(o);
    }
  }, {
    key: "changeStyle",
    value: function(o) {
      this.mounted && this.setState({
        style: o
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(o) {
      var l = this, c = o.from, f = o.to, d = o.duration, h = o.easing, y = o.begin, v = o.onAnimationEnd, g = o.onAnimationStart, b = YI(c, f, RI(h), d, this.changeStyle), _ = function() {
        l.stopJSAnimation = b();
      };
      this.manager.start([g, y, _, d, v]);
    }
  }, {
    key: "runStepAnimation",
    value: function(o) {
      var l = this, c = o.steps, f = o.begin, d = o.onAnimationStart, h = c[0], y = h.style, v = h.duration, g = v === void 0 ? 0 : v, b = function(S, x, A) {
        if (A === 0)
          return S;
        var E = x.duration, M = x.easing, j = M === void 0 ? "ease" : M, w = x.style, T = x.properties, C = x.onAnimationEnd, R = A > 0 ? c[A - 1] : x, N = T || Object.keys(w);
        if (typeof j == "function" || j === "spring")
          return [].concat(Pg(S), [l.runJSAnimation.bind(l, {
            from: R.style,
            to: w,
            duration: E,
            easing: j
          }), E]);
        var K = uj(N, E, j), L = Yn(Yn(Yn({}, R.style), w), {}, {
          transition: K
        });
        return [].concat(Pg(S), [L, E, C]).filter(_I);
      };
      return this.manager.start([d].concat(Pg(c.reduce(b, [y, Math.max(g, f)])), [o.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(o) {
      this.manager || (this.manager = gI());
      var l = o.begin, c = o.duration, f = o.attributeName, d = o.to, h = o.easing, y = o.onAnimationStart, v = o.onAnimationEnd, g = o.steps, b = o.children, _ = this.manager;
      if (this.unSubscribe = _.subscribe(this.handleStyleChange), typeof h == "function" || typeof b == "function" || h === "spring") {
        this.runJSAnimation(o);
        return;
      }
      if (g.length > 1) {
        this.runStepAnimation(o);
        return;
      }
      var S = f ? yl({}, f, d) : d, x = uj(Object.keys(S), c, h);
      _.start([y, l, Yn(Yn({}, S), {}, {
        transition: x
      }), c, v]);
    }
  }, {
    key: "render",
    value: function() {
      var o = this.props, l = o.children;
      o.begin;
      var c = o.duration;
      o.attributeName, o.easing;
      var f = o.isActive;
      o.steps, o.from, o.to, o.canBegin, o.onAnimationEnd, o.shouldReAnimate, o.onAnimationReStart;
      var d = XI(o, KI), h = ee.Children.count(l), y = this.state.style;
      if (typeof l == "function")
        return l(y);
      if (!f || h === 0 || c <= 0)
        return l;
      var v = function(b) {
        var _ = b.props, S = _.style, x = S === void 0 ? {} : S, A = _.className, E = /* @__PURE__ */ ee.cloneElement(b, Yn(Yn({}, d), {}, {
          style: Yn(Yn({}, x), y),
          className: A
        }));
        return E;
      };
      return h === 1 ? v(ee.Children.only(l)) : /* @__PURE__ */ k.createElement("div", null, ee.Children.map(l, function(g) {
        return v(g);
      }));
    }
  }]), n;
})(ee.PureComponent);
Wn.displayName = "Animate";
Wn.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Wn.propTypes = {
  from: Ge.oneOfType([Ge.object, Ge.string]),
  to: Ge.oneOfType([Ge.object, Ge.string]),
  attributeName: Ge.string,
  // animation duration
  duration: Ge.number,
  begin: Ge.number,
  easing: Ge.oneOfType([Ge.string, Ge.func]),
  steps: Ge.arrayOf(Ge.shape({
    duration: Ge.number.isRequired,
    style: Ge.object.isRequired,
    easing: Ge.oneOfType([Ge.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ge.func]),
    // transition css properties(dash case), optional
    properties: Ge.arrayOf("string"),
    onAnimationEnd: Ge.func
  })),
  children: Ge.oneOfType([Ge.node, Ge.func]),
  isActive: Ge.bool,
  canBegin: Ge.bool,
  onAnimationEnd: Ge.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Ge.bool,
  onAnimationStart: Ge.func,
  onAnimationReStart: Ge.func
};
var Ng = { exports: {} }, It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hj;
function o9() {
  if (hj) return It;
  hj = 1;
  var e = M0();
  function t(d) {
    var h = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + d + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var r = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function l(d, h, y) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : "" + v,
      children: d,
      containerInfo: h,
      implementation: y
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(d, h) {
    if (d === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, It.createPortal = function(d, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(t(299));
    return l(d, h, null, y);
  }, It.flushSync = function(d) {
    var h = c.T, y = r.p;
    try {
      if (c.T = null, r.p = 2, d) return d();
    } finally {
      c.T = h, r.p = y, r.d.f();
    }
  }, It.preconnect = function(d, h) {
    typeof d == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(d, h));
  }, It.prefetchDNS = function(d) {
    typeof d == "string" && r.d.D(d);
  }, It.preinit = function(d, h) {
    if (typeof d == "string" && h && typeof h.as == "string") {
      var y = h.as, v = f(y, h.crossOrigin), g = typeof h.integrity == "string" ? h.integrity : void 0, b = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? r.d.S(
        d,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: v,
          integrity: g,
          fetchPriority: b
        }
      ) : y === "script" && r.d.X(d, {
        crossOrigin: v,
        integrity: g,
        fetchPriority: b,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, It.preinitModule = function(d, h) {
    if (typeof d == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var y = f(
            h.as,
            h.crossOrigin
          );
          r.d.M(d, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(d);
  }, It.preload = function(d, h) {
    if (typeof d == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, v = f(y, h.crossOrigin);
      r.d.L(d, y, {
        crossOrigin: v,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, It.preloadModule = function(d, h) {
    if (typeof d == "string")
      if (h) {
        var y = f(h.as, h.crossOrigin);
        r.d.m(d, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(d);
  }, It.requestFormReset = function(d) {
    r.d.r(d);
  }, It.unstable_batchedUpdates = function(d, h) {
    return d(h);
  }, It.useFormState = function(d, h, y) {
    return c.H.useFormState(d, h, y);
  }, It.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, It.version = "19.2.8", It;
}
var pj;
function u9() {
  if (pj) return Ng.exports;
  pj = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), Ng.exports = o9(), Ng.exports;
}
function Jl(e) {
  "@babel/helpers - typeof";
  return Jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jl(e);
}
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $f.apply(this, arguments);
}
function l9(e, t) {
  return d9(e) || f9(e, t) || s9(e, t) || c9();
}
function c9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s9(e, t) {
  if (e) {
    if (typeof e == "string") return vj(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vj(e, t);
  }
}
function vj(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function f9(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function d9(e) {
  if (Array.isArray(e)) return e;
}
function yj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function mj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yj(Object(n), !0).forEach(function(r) {
      h9(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function h9(e, t, n) {
  return t = p9(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function p9(e) {
  var t = v9(e, "string");
  return Jl(t) == "symbol" ? t : t + "";
}
function v9(e, t) {
  if (Jl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Jl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gj = function(t, n, r, o, l) {
  var c = Math.min(Math.abs(r) / 2, Math.abs(o) / 2), f = o >= 0 ? 1 : -1, d = r >= 0 ? 1 : -1, h = o >= 0 && r >= 0 || o < 0 && r < 0 ? 1 : 0, y;
  if (c > 0 && l instanceof Array) {
    for (var v = [0, 0, 0, 0], g = 0, b = 4; g < b; g++)
      v[g] = l[g] > c ? c : l[g];
    y = "M".concat(t, ",").concat(n + f * v[0]), v[0] > 0 && (y += "A ".concat(v[0], ",").concat(v[0], ",0,0,").concat(h, ",").concat(t + d * v[0], ",").concat(n)), y += "L ".concat(t + r - d * v[1], ",").concat(n), v[1] > 0 && (y += "A ".concat(v[1], ",").concat(v[1], ",0,0,").concat(h, `,
        `).concat(t + r, ",").concat(n + f * v[1])), y += "L ".concat(t + r, ",").concat(n + o - f * v[2]), v[2] > 0 && (y += "A ".concat(v[2], ",").concat(v[2], ",0,0,").concat(h, `,
        `).concat(t + r - d * v[2], ",").concat(n + o)), y += "L ".concat(t + d * v[3], ",").concat(n + o), v[3] > 0 && (y += "A ".concat(v[3], ",").concat(v[3], ",0,0,").concat(h, `,
        `).concat(t, ",").concat(n + o - f * v[3])), y += "Z";
  } else if (c > 0 && l === +l && l > 0) {
    var _ = Math.min(c, l);
    y = "M ".concat(t, ",").concat(n + f * _, `
            A `).concat(_, ",").concat(_, ",0,0,").concat(h, ",").concat(t + d * _, ",").concat(n, `
            L `).concat(t + r - d * _, ",").concat(n, `
            A `).concat(_, ",").concat(_, ",0,0,").concat(h, ",").concat(t + r, ",").concat(n + f * _, `
            L `).concat(t + r, ",").concat(n + o - f * _, `
            A `).concat(_, ",").concat(_, ",0,0,").concat(h, ",").concat(t + r - d * _, ",").concat(n + o, `
            L `).concat(t + d * _, ",").concat(n + o, `
            A `).concat(_, ",").concat(_, ",0,0,").concat(h, ",").concat(t, ",").concat(n + o - f * _, " Z");
  } else
    y = "M ".concat(t, ",").concat(n, " h ").concat(r, " v ").concat(o, " h ").concat(-r, " Z");
  return y;
}, y9 = function(t, n) {
  if (!t || !n)
    return !1;
  var r = t.x, o = t.y, l = n.x, c = n.y, f = n.width, d = n.height;
  if (Math.abs(f) > 0 && Math.abs(d) > 0) {
    var h = Math.min(l, l + f), y = Math.max(l, l + f), v = Math.min(c, c + d), g = Math.max(c, c + d);
    return r >= h && r <= y && o >= v && o <= g;
  }
  return !1;
}, m9 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, A1 = function(t) {
  var n = mj(mj({}, m9), t), r = ee.useRef(), o = ee.useState(-1), l = l9(o, 2), c = l[0], f = l[1];
  ee.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var j = r.current.getTotalLength();
        j && f(j);
      } catch {
      }
  }, []);
  var d = n.x, h = n.y, y = n.width, v = n.height, g = n.radius, b = n.className, _ = n.animationEasing, S = n.animationDuration, x = n.animationBegin, A = n.isAnimationActive, E = n.isUpdateAnimationActive;
  if (d !== +d || h !== +h || y !== +y || v !== +v || y === 0 || v === 0)
    return null;
  var M = $e("recharts-rectangle", b);
  return E ? /* @__PURE__ */ k.createElement(Wn, {
    canBegin: c > 0,
    from: {
      width: y,
      height: v,
      x: d,
      y: h
    },
    to: {
      width: y,
      height: v,
      x: d,
      y: h
    },
    duration: S,
    animationEasing: _,
    isActive: E
  }, function(j) {
    var w = j.width, T = j.height, C = j.x, R = j.y;
    return /* @__PURE__ */ k.createElement(Wn, {
      canBegin: c > 0,
      from: "0px ".concat(c === -1 ? 1 : c, "px"),
      to: "".concat(c, "px 0px"),
      attributeName: "strokeDasharray",
      begin: x,
      duration: S,
      isActive: A,
      easing: _
    }, /* @__PURE__ */ k.createElement("path", $f({}, Te(n, !0), {
      className: M,
      d: gj(C, R, w, T, g),
      ref: r
    })));
  }) : /* @__PURE__ */ k.createElement("path", $f({}, Te(n, !0), {
    className: M,
    d: gj(d, h, y, v, g)
  }));
};
function n0() {
  return n0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, n0.apply(this, arguments);
}
var Td = function(t) {
  var n = t.cx, r = t.cy, o = t.r, l = t.className, c = $e("recharts-dot", l);
  return n === +n && r === +r && o === +o ? /* @__PURE__ */ ee.createElement("circle", n0({}, Te(t, !1), tf(t), {
    className: c,
    cx: n,
    cy: r,
    r: o
  })) : null;
};
function ec(e) {
  "@babel/helpers - typeof";
  return ec = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ec(e);
}
var g9 = ["x", "y", "top", "left", "width", "height", "className"];
function r0() {
  return r0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, r0.apply(this, arguments);
}
function bj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function b9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bj(Object(n), !0).forEach(function(r) {
      x9(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function x9(e, t, n) {
  return t = S9(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function S9(e) {
  var t = _9(e, "string");
  return ec(t) == "symbol" ? t : t + "";
}
function _9(e, t) {
  if (ec(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ec(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O9(e, t) {
  if (e == null) return {};
  var n = w9(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function w9(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var A9 = function(t, n, r, o, l, c) {
  return "M".concat(t, ",").concat(l, "v").concat(o, "M").concat(c, ",").concat(n, "h").concat(r);
}, T9 = function(t) {
  var n = t.x, r = n === void 0 ? 0 : n, o = t.y, l = o === void 0 ? 0 : o, c = t.top, f = c === void 0 ? 0 : c, d = t.left, h = d === void 0 ? 0 : d, y = t.width, v = y === void 0 ? 0 : y, g = t.height, b = g === void 0 ? 0 : g, _ = t.className, S = O9(t, g9), x = b9({
    x: r,
    y: l,
    top: f,
    left: h,
    width: v,
    height: b
  }, S);
  return !de(r) || !de(l) || !de(v) || !de(b) || !de(f) || !de(h) ? null : /* @__PURE__ */ k.createElement("path", r0({}, Te(x, !0), {
    className: $e("recharts-cross", _),
    d: A9(r, l, v, b, f, h)
  }));
}, Rg, xj;
function E9() {
  if (xj) return Rg;
  xj = 1;
  var e = AC(), t = e(Object.getPrototypeOf, Object);
  return Rg = t, Rg;
}
var $g, Sj;
function j9() {
  if (Sj) return $g;
  Sj = 1;
  var e = Xr(), t = E9(), n = Vr(), r = "[object Object]", o = Function.prototype, l = Object.prototype, c = o.toString, f = l.hasOwnProperty, d = c.call(Object);
  function h(y) {
    if (!n(y) || e(y) != r)
      return !1;
    var v = t(y);
    if (v === null)
      return !0;
    var g = f.call(v, "constructor") && v.constructor;
    return typeof g == "function" && g instanceof g && c.call(g) == d;
  }
  return $g = h, $g;
}
var M9 = j9();
const C9 = /* @__PURE__ */ et(M9);
var zg, _j;
function D9() {
  if (_j) return zg;
  _j = 1;
  var e = Xr(), t = Vr(), n = "[object Boolean]";
  function r(o) {
    return o === !0 || o === !1 || t(o) && e(o) == n;
  }
  return zg = r, zg;
}
var P9 = D9();
const N9 = /* @__PURE__ */ et(P9);
function tc(e) {
  "@babel/helpers - typeof";
  return tc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tc(e);
}
function zf() {
  return zf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zf.apply(this, arguments);
}
function R9(e, t) {
  return B9(e) || q9(e, t) || z9(e, t) || $9();
}
function $9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z9(e, t) {
  if (e) {
    if (typeof e == "string") return Oj(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Oj(e, t);
  }
}
function Oj(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function q9(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function B9(e) {
  if (Array.isArray(e)) return e;
}
function wj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Aj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wj(Object(n), !0).forEach(function(r) {
      k9(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function k9(e, t, n) {
  return t = L9(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function L9(e) {
  var t = U9(e, "string");
  return tc(t) == "symbol" ? t : t + "";
}
function U9(e, t) {
  if (tc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (tc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tj = function(t, n, r, o, l) {
  var c = r - o, f;
  return f = "M ".concat(t, ",").concat(n), f += "L ".concat(t + r, ",").concat(n), f += "L ".concat(t + r - c / 2, ",").concat(n + l), f += "L ".concat(t + r - c / 2 - o, ",").concat(n + l), f += "L ".concat(t, ",").concat(n, " Z"), f;
}, I9 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, H9 = function(t) {
  var n = Aj(Aj({}, I9), t), r = ee.useRef(), o = ee.useState(-1), l = R9(o, 2), c = l[0], f = l[1];
  ee.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var M = r.current.getTotalLength();
        M && f(M);
      } catch {
      }
  }, []);
  var d = n.x, h = n.y, y = n.upperWidth, v = n.lowerWidth, g = n.height, b = n.className, _ = n.animationEasing, S = n.animationDuration, x = n.animationBegin, A = n.isUpdateAnimationActive;
  if (d !== +d || h !== +h || y !== +y || v !== +v || g !== +g || y === 0 && v === 0 || g === 0)
    return null;
  var E = $e("recharts-trapezoid", b);
  return A ? /* @__PURE__ */ k.createElement(Wn, {
    canBegin: c > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: g,
      x: d,
      y: h
    },
    to: {
      upperWidth: y,
      lowerWidth: v,
      height: g,
      x: d,
      y: h
    },
    duration: S,
    animationEasing: _,
    isActive: A
  }, function(M) {
    var j = M.upperWidth, w = M.lowerWidth, T = M.height, C = M.x, R = M.y;
    return /* @__PURE__ */ k.createElement(Wn, {
      canBegin: c > 0,
      from: "0px ".concat(c === -1 ? 1 : c, "px"),
      to: "".concat(c, "px 0px"),
      attributeName: "strokeDasharray",
      begin: x,
      duration: S,
      easing: _
    }, /* @__PURE__ */ k.createElement("path", zf({}, Te(n, !0), {
      className: E,
      d: Tj(C, R, j, w, T),
      ref: r
    })));
  }) : /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", zf({}, Te(n, !0), {
    className: E,
    d: Tj(d, h, y, v, g)
  })));
}, G9 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function nc(e) {
  "@babel/helpers - typeof";
  return nc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nc(e);
}
function Y9(e, t) {
  if (e == null) return {};
  var n = K9(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function K9(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ej(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ej(Object(n), !0).forEach(function(r) {
      X9(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ej(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function X9(e, t, n) {
  return t = V9(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function V9(e) {
  var t = F9(e, "string");
  return nc(t) == "symbol" ? t : t + "";
}
function F9(e, t) {
  if (nc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (nc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function W9(e, t) {
  return qf(qf({}, t), e);
}
function Z9(e, t) {
  return e === "symbols";
}
function jj(e) {
  var t = e.shapeType, n = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ k.createElement(A1, n);
    case "trapezoid":
      return /* @__PURE__ */ k.createElement(H9, n);
    case "sector":
      return /* @__PURE__ */ k.createElement(WD, n);
    case "symbols":
      if (Z9(t))
        return /* @__PURE__ */ k.createElement(dd, n);
      break;
    default:
      return null;
  }
}
function Q9(e) {
  return /* @__PURE__ */ ee.isValidElement(e) ? e.props : e;
}
function a0(e) {
  var t = e.option, n = e.shapeType, r = e.propTransformer, o = r === void 0 ? W9 : r, l = e.activeClassName, c = l === void 0 ? "recharts-active-shape" : l, f = e.isActive, d = Y9(e, G9), h;
  if (/* @__PURE__ */ ee.isValidElement(t))
    h = /* @__PURE__ */ ee.cloneElement(t, qf(qf({}, d), Q9(t)));
  else if (Ee(t))
    h = t(d);
  else if (C9(t) && !N9(t)) {
    var y = o(t, d);
    h = /* @__PURE__ */ k.createElement(jj, {
      shapeType: n,
      elementProps: y
    });
  } else {
    var v = d;
    h = /* @__PURE__ */ k.createElement(jj, {
      shapeType: n,
      elementProps: v
    });
  }
  return f ? /* @__PURE__ */ k.createElement(Ie, {
    className: c
  }, h) : h;
}
function Ed(e, t) {
  return t != null && "trapezoids" in e.props;
}
function jd(e, t) {
  return t != null && "sectors" in e.props;
}
function rc(e, t) {
  return t != null && "points" in e.props;
}
function J9(e, t) {
  var n, r, o = e.x === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.x) || e.x === t.x, l = e.y === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.y) || e.y === t.y;
  return o && l;
}
function eH(e, t) {
  var n = e.endAngle === t.endAngle, r = e.startAngle === t.startAngle;
  return n && r;
}
function tH(e, t) {
  var n = e.x === t.x, r = e.y === t.y, o = e.z === t.z;
  return n && r && o;
}
function nH(e, t) {
  var n;
  return Ed(e, t) ? n = J9 : jd(e, t) ? n = eH : rc(e, t) && (n = tH), n;
}
function rH(e, t) {
  var n;
  return Ed(e, t) ? n = "trapezoids" : jd(e, t) ? n = "sectors" : rc(e, t) && (n = "points"), n;
}
function aH(e, t) {
  if (Ed(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  if (jd(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  return rc(e, t) ? t.payload : {};
}
function iH(e) {
  var t = e.activeTooltipItem, n = e.graphicalItem, r = e.itemData, o = rH(n, t), l = aH(n, t), c = r.filter(function(d, h) {
    var y = vi(l, d), v = n.props[o].filter(function(_) {
      var S = nH(n, t);
      return S(_, t);
    }), g = n.props[o].indexOf(v[v.length - 1]), b = h === g;
    return y && b;
  }), f = r.indexOf(c[c.length - 1]);
  return f;
}
var qg, Mj;
function oH() {
  if (Mj) return qg;
  Mj = 1;
  var e = Math.ceil, t = Math.max;
  function n(r, o, l, c) {
    for (var f = -1, d = t(e((o - r) / (l || 1)), 0), h = Array(d); d--; )
      h[c ? d : ++f] = r, r += l;
    return h;
  }
  return qg = n, qg;
}
var Bg, Cj;
function aP() {
  if (Cj) return Bg;
  Cj = 1;
  var e = UC(), t = 1 / 0, n = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === t || o === -t) {
      var l = o < 0 ? -1 : 1;
      return l * n;
    }
    return o === o ? o : 0;
  }
  return Bg = r, Bg;
}
var kg, Dj;
function uH() {
  if (Dj) return kg;
  Dj = 1;
  var e = oH(), t = vd(), n = aP();
  function r(o) {
    return function(l, c, f) {
      return f && typeof f != "number" && t(l, c, f) && (c = f = void 0), l = n(l), c === void 0 ? (c = l, l = 0) : c = n(c), f = f === void 0 ? l < c ? 1 : -1 : n(f), e(l, c, f, o);
    };
  }
  return kg = r, kg;
}
var Lg, Pj;
function lH() {
  if (Pj) return Lg;
  Pj = 1;
  var e = uH(), t = e();
  return Lg = t, Lg;
}
var cH = lH();
const Bf = /* @__PURE__ */ et(cH);
function ac(e) {
  "@babel/helpers - typeof";
  return ac = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ac(e);
}
function Nj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nj(Object(n), !0).forEach(function(r) {
      iP(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iP(e, t, n) {
  return t = sH(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sH(e) {
  var t = fH(e, "string");
  return ac(t) == "symbol" ? t : t + "";
}
function fH(e, t) {
  if (ac(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ac(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dH = ["Webkit", "Moz", "O", "ms"], hH = function(t, n) {
  var r = t.replace(/(\w)/, function(l) {
    return l.toUpperCase();
  }), o = dH.reduce(function(l, c) {
    return Rj(Rj({}, l), {}, iP({}, c + r, n));
  }, {});
  return o[t] = n, o;
};
function Bo(e) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bo(e);
}
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kf.apply(this, arguments);
}
function $j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $j(Object(n), !0).forEach(function(r) {
      gn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $j(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function pH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, uP(r.key), r);
  }
}
function vH(e, t, n) {
  return t && zj(e.prototype, t), n && zj(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yH(e, t, n) {
  return t = Lf(t), mH(e, oP() ? Reflect.construct(t, n || [], Lf(e).constructor) : t.apply(e, n));
}
function mH(e, t) {
  if (t && (Bo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gH(e);
}
function gH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oP = function() {
    return !!e;
  })();
}
function Lf(e) {
  return Lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lf(e);
}
function bH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && i0(e, t);
}
function i0(e, t) {
  return i0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, i0(e, t);
}
function gn(e, t, n) {
  return t = uP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function uP(e) {
  var t = xH(e, "string");
  return Bo(t) == "symbol" ? t : t + "";
}
function xH(e, t) {
  if (Bo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Bo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var SH = function(t) {
  var n = t.data, r = t.startIndex, o = t.endIndex, l = t.x, c = t.width, f = t.travellerWidth;
  if (!n || !n.length)
    return {};
  var d = n.length, h = bl().domain(Bf(0, d)).range([l, l + c - f]), y = h.domain().map(function(v) {
    return h(v);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: h(r),
    endX: h(o),
    scale: h,
    scaleValues: y
  };
}, qj = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, ko = /* @__PURE__ */ (function(e) {
  function t(n) {
    var r;
    return pH(this, t), r = yH(this, t, [n]), gn(r, "handleDrag", function(o) {
      r.leaveTimer && (clearTimeout(r.leaveTimer), r.leaveTimer = null), r.state.isTravellerMoving ? r.handleTravellerMove(o) : r.state.isSlideMoving && r.handleSlideDrag(o);
    }), gn(r, "handleTouchMove", function(o) {
      o.changedTouches != null && o.changedTouches.length > 0 && r.handleDrag(o.changedTouches[0]);
    }), gn(r, "handleDragEnd", function() {
      r.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var o = r.props, l = o.endIndex, c = o.onDragEnd, f = o.startIndex;
        c == null || c({
          endIndex: l,
          startIndex: f
        });
      }), r.detachDragEndListener();
    }), gn(r, "handleLeaveWrapper", function() {
      (r.state.isTravellerMoving || r.state.isSlideMoving) && (r.leaveTimer = window.setTimeout(r.handleDragEnd, r.props.leaveTimeOut));
    }), gn(r, "handleEnterSlideOrTraveller", function() {
      r.setState({
        isTextActive: !0
      });
    }), gn(r, "handleLeaveSlideOrTraveller", function() {
      r.setState({
        isTextActive: !1
      });
    }), gn(r, "handleSlideDragStart", function(o) {
      var l = qj(o) ? o.changedTouches[0] : o;
      r.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: l.pageX
      }), r.attachDragEndListener();
    }), r.travellerDragStartHandlers = {
      startX: r.handleTravellerDragStart.bind(r, "startX"),
      endX: r.handleTravellerDragStart.bind(r, "endX")
    }, r.state = {}, r;
  }
  return bH(t, e), vH(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(r) {
      var o = r.startX, l = r.endX, c = this.state.scaleValues, f = this.props, d = f.gap, h = f.data, y = h.length - 1, v = Math.min(o, l), g = Math.max(o, l), b = t.getIndexInRange(c, v), _ = t.getIndexInRange(c, g);
      return {
        startIndex: b - b % d,
        endIndex: _ === y ? y : _ - _ % d
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(r) {
      var o = this.props, l = o.data, c = o.tickFormatter, f = o.dataKey, d = At(l[r], f, r);
      return Ee(c) ? c(d, r) : d;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(r) {
      var o = this.state, l = o.slideMoveStartX, c = o.startX, f = o.endX, d = this.props, h = d.x, y = d.width, v = d.travellerWidth, g = d.startIndex, b = d.endIndex, _ = d.onChange, S = r.pageX - l;
      S > 0 ? S = Math.min(S, h + y - v - f, h + y - v - c) : S < 0 && (S = Math.max(S, h - c, h - f));
      var x = this.getIndex({
        startX: c + S,
        endX: f + S
      });
      (x.startIndex !== g || x.endIndex !== b) && _ && _(x), this.setState({
        startX: c + S,
        endX: f + S,
        slideMoveStartX: r.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(r, o) {
      var l = qj(o) ? o.changedTouches[0] : o;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: r,
        brushMoveStartX: l.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(r) {
      var o = this.state, l = o.brushMoveStartX, c = o.movingTravellerId, f = o.endX, d = o.startX, h = this.state[c], y = this.props, v = y.x, g = y.width, b = y.travellerWidth, _ = y.onChange, S = y.gap, x = y.data, A = {
        startX: this.state.startX,
        endX: this.state.endX
      }, E = r.pageX - l;
      E > 0 ? E = Math.min(E, v + g - b - h) : E < 0 && (E = Math.max(E, v - h)), A[c] = h + E;
      var M = this.getIndex(A), j = M.startIndex, w = M.endIndex, T = function() {
        var R = x.length - 1;
        return c === "startX" && (f > d ? j % S === 0 : w % S === 0) || f < d && w === R || c === "endX" && (f > d ? w % S === 0 : j % S === 0) || f > d && w === R;
      };
      this.setState(gn(gn({}, c, h + E), "brushMoveStartX", r.pageX), function() {
        _ && T() && _(M);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(r, o) {
      var l = this, c = this.state, f = c.scaleValues, d = c.startX, h = c.endX, y = this.state[o], v = f.indexOf(y);
      if (v !== -1) {
        var g = v + r;
        if (!(g === -1 || g >= f.length)) {
          var b = f[g];
          o === "startX" && b >= h || o === "endX" && b <= d || this.setState(gn({}, o, b), function() {
            l.props.onChange(l.getIndex({
              startX: l.state.startX,
              endX: l.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var r = this.props, o = r.x, l = r.y, c = r.width, f = r.height, d = r.fill, h = r.stroke;
      return /* @__PURE__ */ k.createElement("rect", {
        stroke: h,
        fill: d,
        x: o,
        y: l,
        width: c,
        height: f
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var r = this.props, o = r.x, l = r.y, c = r.width, f = r.height, d = r.data, h = r.children, y = r.padding, v = ee.Children.only(h);
      return v ? /* @__PURE__ */ k.cloneElement(v, {
        x: o,
        y: l,
        width: c,
        height: f,
        margin: y,
        compact: !0,
        data: d
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(r, o) {
      var l, c, f = this, d = this.props, h = d.y, y = d.travellerWidth, v = d.height, g = d.traveller, b = d.ariaLabel, _ = d.data, S = d.startIndex, x = d.endIndex, A = Math.max(r, this.props.x), E = Ug(Ug({}, Te(this.props, !1)), {}, {
        x: A,
        y: h,
        width: y,
        height: v
      }), M = b || "Min value: ".concat((l = _[S]) === null || l === void 0 ? void 0 : l.name, ", Max value: ").concat((c = _[x]) === null || c === void 0 ? void 0 : c.name);
      return /* @__PURE__ */ k.createElement(Ie, {
        tabIndex: 0,
        role: "slider",
        "aria-label": M,
        "aria-valuenow": r,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[o],
        onTouchStart: this.travellerDragStartHandlers[o],
        onKeyDown: function(w) {
          ["ArrowLeft", "ArrowRight"].includes(w.key) && (w.preventDefault(), w.stopPropagation(), f.handleTravellerMoveKeyboard(w.key === "ArrowRight" ? 1 : -1, o));
        },
        onFocus: function() {
          f.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          f.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(g, E));
    }
  }, {
    key: "renderSlide",
    value: function(r, o) {
      var l = this.props, c = l.y, f = l.height, d = l.stroke, h = l.travellerWidth, y = Math.min(r, o) + h, v = Math.max(Math.abs(o - r) - h, 0);
      return /* @__PURE__ */ k.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: d,
        fillOpacity: 0.2,
        x: y,
        y: c,
        width: v,
        height: f
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var r = this.props, o = r.startIndex, l = r.endIndex, c = r.y, f = r.height, d = r.travellerWidth, h = r.stroke, y = this.state, v = y.startX, g = y.endX, b = 5, _ = {
        pointerEvents: "none",
        fill: h
      };
      return /* @__PURE__ */ k.createElement(Ie, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ k.createElement(hf, kf({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(v, g) - b,
        y: c + f / 2
      }, _), this.getTextOfTick(o)), /* @__PURE__ */ k.createElement(hf, kf({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(v, g) + d + b,
        y: c + f / 2
      }, _), this.getTextOfTick(l)));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.data, l = r.className, c = r.children, f = r.x, d = r.y, h = r.width, y = r.height, v = r.alwaysShowText, g = this.state, b = g.startX, _ = g.endX, S = g.isTextActive, x = g.isSlideMoving, A = g.isTravellerMoving, E = g.isTravellerFocused;
      if (!o || !o.length || !de(f) || !de(d) || !de(h) || !de(y) || h <= 0 || y <= 0)
        return null;
      var M = $e("recharts-brush", l), j = k.Children.count(c) === 1, w = hH("userSelect", "none");
      return /* @__PURE__ */ k.createElement(Ie, {
        className: M,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: w
      }, this.renderBackground(), j && this.renderPanorama(), this.renderSlide(b, _), this.renderTravellerLayer(b, "startX"), this.renderTravellerLayer(_, "endX"), (S || x || A || E || v) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(r) {
      var o = r.x, l = r.y, c = r.width, f = r.height, d = r.stroke, h = Math.floor(l + f / 2) - 1;
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("rect", {
        x: o,
        y: l,
        width: c,
        height: f,
        fill: d,
        stroke: "none"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: o + 1,
        y1: h,
        x2: o + c - 1,
        y2: h,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: o + 1,
        y1: h + 2,
        x2: o + c - 1,
        y2: h + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(r, o) {
      var l;
      return /* @__PURE__ */ k.isValidElement(r) ? l = /* @__PURE__ */ k.cloneElement(r, o) : Ee(r) ? l = r(o) : l = t.renderDefaultTraveller(o), l;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      var l = r.data, c = r.width, f = r.x, d = r.travellerWidth, h = r.updateId, y = r.startIndex, v = r.endIndex;
      if (l !== o.prevData || h !== o.prevUpdateId)
        return Ug({
          prevData: l,
          prevTravellerWidth: d,
          prevUpdateId: h,
          prevX: f,
          prevWidth: c
        }, l && l.length ? SH({
          data: l,
          width: c,
          x: f,
          travellerWidth: d,
          startIndex: y,
          endIndex: v
        }) : {
          scale: null,
          scaleValues: null
        });
      if (o.scale && (c !== o.prevWidth || f !== o.prevX || d !== o.prevTravellerWidth)) {
        o.scale.range([f, f + c - d]);
        var g = o.scale.domain().map(function(b) {
          return o.scale(b);
        });
        return {
          prevData: l,
          prevTravellerWidth: d,
          prevUpdateId: h,
          prevX: f,
          prevWidth: c,
          startX: o.scale(r.startIndex),
          endX: o.scale(r.endIndex),
          scaleValues: g
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(r, o) {
      for (var l = r.length, c = 0, f = l - 1; f - c > 1; ) {
        var d = Math.floor((c + f) / 2);
        r[d] > o ? f = d : c = d;
      }
      return o >= r[f] ? f : c;
    }
  }]);
})(ee.PureComponent);
gn(ko, "displayName", "Brush");
gn(ko, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var Ig, Bj;
function _H() {
  if (Bj) return Ig;
  Bj = 1;
  var e = Z0();
  function t(n, r) {
    var o;
    return e(n, function(l, c, f) {
      return o = r(l, c, f), !o;
    }), !!o;
  }
  return Ig = t, Ig;
}
var Hg, kj;
function OH() {
  if (kj) return Hg;
  kj = 1;
  var e = gC(), t = Da(), n = _H(), r = un(), o = vd();
  function l(c, f, d) {
    var h = r(c) ? e : n;
    return d && o(c, f, d) && (f = void 0), h(c, t(f, 3));
  }
  return Hg = l, Hg;
}
var wH = OH();
const AH = /* @__PURE__ */ et(wH);
var dr = function(t, n) {
  var r = t.alwaysShow, o = t.ifOverflow;
  return r && (o = "extendDomain"), o === n;
}, Gg, Lj;
function TH() {
  if (Lj) return Gg;
  Lj = 1;
  var e = zC();
  function t(n, r, o) {
    r == "__proto__" && e ? e(n, r, {
      configurable: !0,
      enumerable: !0,
      value: o,
      writable: !0
    }) : n[r] = o;
  }
  return Gg = t, Gg;
}
var Yg, Uj;
function EH() {
  if (Uj) return Yg;
  Uj = 1;
  var e = TH(), t = RC(), n = Da();
  function r(o, l) {
    var c = {};
    return l = n(l, 3), t(o, function(f, d, h) {
      e(c, d, l(f, d, h));
    }), c;
  }
  return Yg = r, Yg;
}
var jH = EH();
const MH = /* @__PURE__ */ et(jH);
var Kg, Ij;
function CH() {
  if (Ij) return Kg;
  Ij = 1;
  function e(t, n) {
    for (var r = -1, o = t == null ? 0 : t.length; ++r < o; )
      if (!n(t[r], r, t))
        return !1;
    return !0;
  }
  return Kg = e, Kg;
}
var Xg, Hj;
function DH() {
  if (Hj) return Xg;
  Hj = 1;
  var e = Z0();
  function t(n, r) {
    var o = !0;
    return e(n, function(l, c, f) {
      return o = !!r(l, c, f), o;
    }), o;
  }
  return Xg = t, Xg;
}
var Vg, Gj;
function PH() {
  if (Gj) return Vg;
  Gj = 1;
  var e = CH(), t = DH(), n = Da(), r = un(), o = vd();
  function l(c, f, d) {
    var h = r(c) ? e : t;
    return d && o(c, f, d) && (f = void 0), h(c, n(f, 3));
  }
  return Vg = l, Vg;
}
var NH = PH();
const lP = /* @__PURE__ */ et(NH);
var RH = ["x", "y"];
function ic(e) {
  "@babel/helpers - typeof";
  return ic = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ic(e);
}
function o0() {
  return o0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, o0.apply(this, arguments);
}
function Yj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yj(Object(n), !0).forEach(function(r) {
      $H(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $H(e, t, n) {
  return t = zH(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zH(e) {
  var t = qH(e, "string");
  return ic(t) == "symbol" ? t : t + "";
}
function qH(e, t) {
  if (ic(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ic(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BH(e, t) {
  if (e == null) return {};
  var n = kH(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function kH(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function LH(e, t) {
  var n = e.x, r = e.y, o = BH(e, RH), l = "".concat(n), c = parseInt(l, 10), f = "".concat(r), d = parseInt(f, 10), h = "".concat(t.height || o.height), y = parseInt(h, 10), v = "".concat(t.width || o.width), g = parseInt(v, 10);
  return dl(dl(dl(dl(dl({}, t), o), c ? {
    x: c
  } : {}), d ? {
    y: d
  } : {}), {}, {
    height: y,
    width: g,
    name: t.name,
    radius: t.radius
  });
}
function Kj(e) {
  return /* @__PURE__ */ k.createElement(a0, o0({
    shapeType: "rectangle",
    propTransformer: LH,
    activeClassName: "recharts-active-bar"
  }, e));
}
var UH = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(r, o) {
    if (typeof t == "number") return t;
    var l = de(r) || K$(r);
    return l ? t(r, o) : (l || mi(), n);
  };
}, IH = ["value", "background"], cP;
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function HH(e, t) {
  if (e == null) return {};
  var n = GH(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function GH(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Uf() {
  return Uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Uf.apply(this, arguments);
}
function Xj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xj(Object(n), !0).forEach(function(r) {
      Ea(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function YH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, fP(r.key), r);
  }
}
function KH(e, t, n) {
  return t && Vj(e.prototype, t), n && Vj(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XH(e, t, n) {
  return t = If(t), VH(e, sP() ? Reflect.construct(t, n || [], If(e).constructor) : t.apply(e, n));
}
function VH(e, t) {
  if (t && (Lo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return FH(e);
}
function FH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sP = function() {
    return !!e;
  })();
}
function If(e) {
  return If = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, If(e);
}
function WH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && u0(e, t);
}
function u0(e, t) {
  return u0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, u0(e, t);
}
function Ea(e, t, n) {
  return t = fP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fP(e) {
  var t = ZH(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function ZH(e, t) {
  if (Lo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Lo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Kr = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    YH(this, t);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = XH(this, t, [].concat(o)), Ea(n, "state", {
      isAnimationFinished: !1
    }), Ea(n, "id", xi("recharts-bar-")), Ea(n, "handleAnimationEnd", function() {
      var c = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), c && c();
    }), Ea(n, "handleAnimationStart", function() {
      var c = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), c && c();
    }), n;
  }
  return WH(t, e), KH(t, [{
    key: "renderRectanglesStatically",
    value: function(r) {
      var o = this, l = this.props, c = l.shape, f = l.dataKey, d = l.activeIndex, h = l.activeBar, y = Te(this.props, !1);
      return r && r.map(function(v, g) {
        var b = g === d, _ = b ? h : c, S = bt(bt(bt({}, y), v), {}, {
          isActive: b,
          option: _,
          index: g,
          dataKey: f,
          onAnimationStart: o.handleAnimationStart,
          onAnimationEnd: o.handleAnimationEnd
        });
        return /* @__PURE__ */ k.createElement(Ie, Uf({
          className: "recharts-bar-rectangle"
        }, jl(o.props, v, g), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(v == null ? void 0 : v.x, "-").concat(v == null ? void 0 : v.y, "-").concat(v == null ? void 0 : v.value, "-").concat(g)
        }), /* @__PURE__ */ k.createElement(Kj, S));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var r = this, o = this.props, l = o.data, c = o.layout, f = o.isAnimationActive, d = o.animationBegin, h = o.animationDuration, y = o.animationEasing, v = o.animationId, g = this.state.prevData;
      return /* @__PURE__ */ k.createElement(Wn, {
        begin: d,
        duration: h,
        isActive: f,
        easing: y,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(v),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(b) {
        var _ = b.t, S = l.map(function(x, A) {
          var E = g && g[A];
          if (E) {
            var M = pt(E.x, x.x), j = pt(E.y, x.y), w = pt(E.width, x.width), T = pt(E.height, x.height);
            return bt(bt({}, x), {}, {
              x: M(_),
              y: j(_),
              width: w(_),
              height: T(_)
            });
          }
          if (c === "horizontal") {
            var C = pt(0, x.height), R = C(_);
            return bt(bt({}, x), {}, {
              y: x.y + x.height - R,
              height: R
            });
          }
          var N = pt(0, x.width), K = N(_);
          return bt(bt({}, x), {}, {
            width: K
          });
        });
        return /* @__PURE__ */ k.createElement(Ie, null, r.renderRectanglesStatically(S));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var r = this.props, o = r.data, l = r.isAnimationActive, c = this.state.prevData;
      return l && o && o.length && (!c || !vi(c, o)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(o);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var r = this, o = this.props, l = o.data, c = o.dataKey, f = o.activeIndex, d = Te(this.props.background, !1);
      return l.map(function(h, y) {
        h.value;
        var v = h.background, g = HH(h, IH);
        if (!v)
          return null;
        var b = bt(bt(bt(bt(bt({}, g), {}, {
          fill: "#eee"
        }, v), d), jl(r.props, h, y)), {}, {
          onAnimationStart: r.handleAnimationStart,
          onAnimationEnd: r.handleAnimationEnd,
          dataKey: c,
          index: y,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ k.createElement(Kj, Uf({
          key: "background-bar-".concat(y),
          option: r.props.background,
          isActive: y === f
        }, b));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(r, o) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var l = this.props, c = l.data, f = l.xAxis, d = l.yAxis, h = l.layout, y = l.children, v = on(y, uu);
      if (!v)
        return null;
      var g = h === "vertical" ? c[0].height / 2 : c[0].width / 2, b = function(x, A) {
        var E = Array.isArray(x.value) ? x.value[1] : x.value;
        return {
          x: x.x,
          y: x.y,
          value: E,
          errorVal: At(x, A)
        };
      }, _ = {
        clipPath: r ? "url(#clipPath-".concat(o, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ie, _, v.map(function(S) {
        return /* @__PURE__ */ k.cloneElement(S, {
          key: "error-bar-".concat(o, "-").concat(S.props.dataKey),
          data: c,
          xAxis: f,
          yAxis: d,
          layout: h,
          offset: g,
          dataPointFormatter: b
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.hide, l = r.data, c = r.className, f = r.xAxis, d = r.yAxis, h = r.left, y = r.top, v = r.width, g = r.height, b = r.isAnimationActive, _ = r.background, S = r.id;
      if (o || !l || !l.length)
        return null;
      var x = this.state.isAnimationFinished, A = $e("recharts-bar", c), E = f && f.allowDataOverflow, M = d && d.allowDataOverflow, j = E || M, w = we(S) ? this.id : S;
      return /* @__PURE__ */ k.createElement(Ie, {
        className: A
      }, E || M ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(w)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: E ? h : h - v / 2,
        y: M ? y : y - g / 2,
        width: E ? v : v * 2,
        height: M ? g : g * 2
      }))) : null, /* @__PURE__ */ k.createElement(Ie, {
        className: "recharts-bar-rectangles",
        clipPath: j ? "url(#clipPath-".concat(w, ")") : null
      }, _ ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(j, w), (!b || x) && fr.renderCallByParent(this.props, l));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      return r.animationId !== o.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curData: r.data,
        prevData: o.curData
      } : r.data !== o.curData ? {
        curData: r.data
      } : null;
    }
  }]);
})(ee.PureComponent);
cP = Kr;
Ea(Kr, "displayName", "Bar");
Ea(Kr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Pa.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Ea(Kr, "getComposedData", function(e) {
  var t = e.props, n = e.item, r = e.barPosition, o = e.bandSize, l = e.xAxis, c = e.yAxis, f = e.xAxisTicks, d = e.yAxisTicks, h = e.stackedData, y = e.dataStartIndex, v = e.displayedData, g = e.offset, b = fL(r, n);
  if (!b)
    return null;
  var _ = t.layout, S = n.type.defaultProps, x = S !== void 0 ? bt(bt({}, S), n.props) : n.props, A = x.dataKey, E = x.children, M = x.minPointSize, j = _ === "horizontal" ? c : l, w = h ? j.scale.domain() : null, T = bL({
    numericAxis: j
  }), C = on(E, yd), R = v.map(function(N, K) {
    var L, B, F, G, V, $;
    h ? L = dL(h[y + K], w) : (L = At(N, A), Array.isArray(L) || (L = [T, L]));
    var Y = UH(M, cP.defaultProps.minPointSize)(L[1], K);
    if (_ === "horizontal") {
      var ne, H = [c.scale(L[0]), c.scale(L[1])], J = H[0], P = H[1];
      B = P2({
        axis: l,
        ticks: f,
        bandSize: o,
        offset: b.offset,
        entry: N,
        index: K
      }), F = (ne = P ?? J) !== null && ne !== void 0 ? ne : void 0, G = b.size;
      var U = J - P;
      if (V = Number.isNaN(U) ? 0 : U, $ = {
        x: B,
        y: c.y,
        width: G,
        height: c.height
      }, Math.abs(Y) > 0 && Math.abs(V) < Math.abs(Y)) {
        var re = Fn(V || Y) * (Math.abs(Y) - Math.abs(V));
        F -= re, V += re;
      }
    } else {
      var se = [l.scale(L[0]), l.scale(L[1])], pe = se[0], fe = se[1];
      if (B = pe, F = P2({
        axis: c,
        ticks: d,
        bandSize: o,
        offset: b.offset,
        entry: N,
        index: K
      }), G = fe - pe, V = b.size, $ = {
        x: l.x,
        y: F,
        width: l.width,
        height: V
      }, Math.abs(Y) > 0 && Math.abs(G) < Math.abs(Y)) {
        var _e = Fn(G || Y) * (Math.abs(Y) - Math.abs(G));
        G += _e;
      }
    }
    return bt(bt(bt({}, N), {}, {
      x: B,
      y: F,
      width: G,
      height: V,
      value: h ? L : L[1],
      payload: N,
      background: $
    }, C && C[K] && C[K].props), {}, {
      tooltipPayload: [XD(n, N)],
      tooltipPosition: {
        x: B + G / 2,
        y: F + V / 2
      }
    });
  });
  return bt({
    data: R,
    layout: _
  }, g);
});
function oc(e) {
  "@babel/helpers - typeof";
  return oc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oc(e);
}
function QH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dP(r.key), r);
  }
}
function JH(e, t, n) {
  return t && Fj(e.prototype, t), n && Fj(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Wj(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wj(Object(n), !0).forEach(function(r) {
      Md(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wj(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Md(e, t, n) {
  return t = dP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function dP(e) {
  var t = e7(e, "string");
  return oc(t) == "symbol" ? t : t + "";
}
function e7(e, t) {
  if (oc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (oc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cd = function(t, n, r, o, l) {
  var c = t.width, f = t.height, d = t.layout, h = t.children, y = Object.keys(n), v = {
    left: r.left,
    leftMirror: r.left,
    right: c - r.right,
    rightMirror: c - r.right,
    top: r.top,
    topMirror: r.top,
    bottom: f - r.bottom,
    bottomMirror: f - r.bottom
  }, g = !!bn(h, Kr);
  return y.reduce(function(b, _) {
    var S = n[_], x = S.orientation, A = S.domain, E = S.padding, M = E === void 0 ? {} : E, j = S.mirror, w = S.reversed, T = "".concat(x).concat(j ? "Mirror" : ""), C, R, N, K, L;
    if (S.type === "number" && (S.padding === "gap" || S.padding === "no-gap")) {
      var B = A[1] - A[0], F = 1 / 0, G = S.categoricalDomain.sort(W$);
      if (G.forEach(function(se, pe) {
        pe > 0 && (F = Math.min((se || 0) - (G[pe - 1] || 0), F));
      }), Number.isFinite(F)) {
        var V = F / B, $ = S.layout === "vertical" ? r.height : r.width;
        if (S.padding === "gap" && (C = V * $ / 2), S.padding === "no-gap") {
          var Y = pi(t.barCategoryGap, V * $), ne = V * $ / 2;
          C = ne - Y - (ne - Y) / $ * Y;
        }
      }
    }
    o === "xAxis" ? R = [r.left + (M.left || 0) + (C || 0), r.left + r.width - (M.right || 0) - (C || 0)] : o === "yAxis" ? R = d === "horizontal" ? [r.top + r.height - (M.bottom || 0), r.top + (M.top || 0)] : [r.top + (M.top || 0) + (C || 0), r.top + r.height - (M.bottom || 0) - (C || 0)] : R = S.range, w && (R = [R[1], R[0]]);
    var H = cL(S, l, g), J = H.scale, P = H.realScaleType;
    J.domain(A).range(R), sL(J);
    var U = gL(J, Kn(Kn({}, S), {}, {
      realScaleType: P
    }));
    o === "xAxis" ? (L = x === "top" && !j || x === "bottom" && j, N = r.left, K = v[T] - L * S.height) : o === "yAxis" && (L = x === "left" && !j || x === "right" && j, N = v[T] - L * S.width, K = r.top);
    var re = Kn(Kn(Kn({}, S), U), {}, {
      realScaleType: P,
      x: N,
      y: K,
      scale: J,
      width: o === "xAxis" ? r.width : S.width,
      height: o === "yAxis" ? r.height : S.height
    });
    return re.bandSize = jf(re, U), !S.hide && o === "xAxis" ? v[T] += (L ? -1 : 1) * re.height : S.hide || (v[T] += (L ? -1 : 1) * re.width), Kn(Kn({}, b), {}, Md({}, _, re));
  }, {});
}, hP = function(t, n) {
  var r = t.x, o = t.y, l = n.x, c = n.y;
  return {
    x: Math.min(r, l),
    y: Math.min(o, c),
    width: Math.abs(l - r),
    height: Math.abs(c - o)
  };
}, t7 = function(t) {
  var n = t.x1, r = t.y1, o = t.x2, l = t.y2;
  return hP({
    x: n,
    y: r
  }, {
    x: o,
    y: l
  });
}, pP = /* @__PURE__ */ (function() {
  function e(t) {
    QH(this, e), this.scale = t;
  }
  return JH(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.bandAware, l = r.position;
      if (n !== void 0) {
        if (l)
          switch (l) {
            case "start":
              return this.scale(n);
            case "middle": {
              var c = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(n) + c;
            }
            case "end": {
              var f = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(n) + f;
            }
            default:
              return this.scale(n);
          }
        if (o) {
          var d = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(n) + d;
        }
        return this.scale(n);
      }
    }
  }, {
    key: "isInRange",
    value: function(n) {
      var r = this.range(), o = r[0], l = r[r.length - 1];
      return o <= l ? n >= o && n <= l : n >= l && n <= o;
    }
  }], [{
    key: "create",
    value: function(n) {
      return new e(n);
    }
  }]);
})();
Md(pP, "EPS", 1e-4);
var T1 = function(t) {
  var n = Object.keys(t).reduce(function(r, o) {
    return Kn(Kn({}, r), {}, Md({}, o, pP.create(t[o])));
  }, {});
  return Kn(Kn({}, n), {}, {
    apply: function(o) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = l.bandAware, f = l.position;
      return MH(o, function(d, h) {
        return n[h].apply(d, {
          bandAware: c,
          position: f
        });
      });
    },
    isInRange: function(o) {
      return lP(o, function(l, c) {
        return n[c].isInRange(l);
      });
    }
  });
};
function n7(e) {
  return (e % 180 + 180) % 180;
}
var r7 = function(t) {
  var n = t.width, r = t.height, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = n7(o), c = l * Math.PI / 180, f = Math.atan(r / n), d = c > f && c < Math.PI - f ? r / Math.sin(c) : n / Math.cos(c);
  return Math.abs(d);
}, Fg, Zj;
function a7() {
  if (Zj) return Fg;
  Zj = 1;
  var e = Da(), t = fc(), n = hd();
  function r(o) {
    return function(l, c, f) {
      var d = Object(l);
      if (!t(l)) {
        var h = e(c, 3);
        l = n(l), c = function(v) {
          return h(d[v], v, d);
        };
      }
      var y = o(l, c, f);
      return y > -1 ? d[h ? l[y] : y] : void 0;
    };
  }
  return Fg = r, Fg;
}
var Wg, Qj;
function i7() {
  if (Qj) return Wg;
  Qj = 1;
  var e = aP();
  function t(n) {
    var r = e(n), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return Wg = t, Wg;
}
var Zg, Jj;
function o7() {
  if (Jj) return Zg;
  Jj = 1;
  var e = MC(), t = Da(), n = i7(), r = Math.max;
  function o(l, c, f) {
    var d = l == null ? 0 : l.length;
    if (!d)
      return -1;
    var h = f == null ? 0 : n(f);
    return h < 0 && (h = r(d + h, 0)), e(l, t(c, 3), h);
  }
  return Zg = o, Zg;
}
var Qg, eM;
function u7() {
  if (eM) return Qg;
  eM = 1;
  var e = a7(), t = o7(), n = e(t);
  return Qg = n, Qg;
}
var l7 = u7();
const c7 = /* @__PURE__ */ et(l7);
var s7 = GM();
const f7 = /* @__PURE__ */ et(s7);
var d7 = f7(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), E1 = /* @__PURE__ */ ee.createContext(void 0), j1 = /* @__PURE__ */ ee.createContext(void 0), vP = /* @__PURE__ */ ee.createContext(void 0), yP = /* @__PURE__ */ ee.createContext({}), mP = /* @__PURE__ */ ee.createContext(void 0), gP = /* @__PURE__ */ ee.createContext(0), bP = /* @__PURE__ */ ee.createContext(0), tM = function(t) {
  var n = t.state, r = n.xAxisMap, o = n.yAxisMap, l = n.offset, c = t.clipPathId, f = t.children, d = t.width, h = t.height, y = d7(l);
  return /* @__PURE__ */ k.createElement(E1.Provider, {
    value: r
  }, /* @__PURE__ */ k.createElement(j1.Provider, {
    value: o
  }, /* @__PURE__ */ k.createElement(yP.Provider, {
    value: l
  }, /* @__PURE__ */ k.createElement(vP.Provider, {
    value: y
  }, /* @__PURE__ */ k.createElement(mP.Provider, {
    value: c
  }, /* @__PURE__ */ k.createElement(gP.Provider, {
    value: h
  }, /* @__PURE__ */ k.createElement(bP.Provider, {
    value: d
  }, f)))))));
}, h7 = function() {
  return ee.useContext(mP);
}, xP = function(t) {
  var n = ee.useContext(E1);
  n == null && mi();
  var r = n[t];
  return r == null && mi(), r;
}, p7 = function() {
  var t = ee.useContext(E1);
  return Aa(t);
}, v7 = function() {
  var t = ee.useContext(j1), n = c7(t, function(r) {
    return lP(r.domain, Number.isFinite);
  });
  return n || Aa(t);
}, SP = function(t) {
  var n = ee.useContext(j1);
  n == null && mi();
  var r = n[t];
  return r == null && mi(), r;
}, y7 = function() {
  var t = ee.useContext(vP);
  return t;
}, m7 = function() {
  return ee.useContext(yP);
}, M1 = function() {
  return ee.useContext(bP);
}, C1 = function() {
  return ee.useContext(gP);
};
function Uo(e) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e);
}
function g7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b7(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, OP(r.key), r);
  }
}
function x7(e, t, n) {
  return t && b7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function S7(e, t, n) {
  return t = Hf(t), _7(e, _P() ? Reflect.construct(t, n || [], Hf(e).constructor) : t.apply(e, n));
}
function _7(e, t) {
  if (t && (Uo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O7(e);
}
function O7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _P() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_P = function() {
    return !!e;
  })();
}
function Hf(e) {
  return Hf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hf(e);
}
function w7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && l0(e, t);
}
function l0(e, t) {
  return l0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, l0(e, t);
}
function nM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nM(Object(n), !0).forEach(function(r) {
      D1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function D1(e, t, n) {
  return t = OP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function OP(e) {
  var t = A7(e, "string");
  return Uo(t) == "symbol" ? t : t + "";
}
function A7(e, t) {
  if (Uo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Uo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function T7(e, t) {
  return C7(e) || M7(e, t) || j7(e, t) || E7();
}
function E7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j7(e, t) {
  if (e) {
    if (typeof e == "string") return aM(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aM(e, t);
  }
}
function aM(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function M7(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function C7(e) {
  if (Array.isArray(e)) return e;
}
function c0() {
  return c0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, c0.apply(this, arguments);
}
var D7 = function(t, n) {
  var r;
  return /* @__PURE__ */ k.isValidElement(t) ? r = /* @__PURE__ */ k.cloneElement(t, n) : Ee(t) ? r = t(n) : r = /* @__PURE__ */ k.createElement("line", c0({}, n, {
    className: "recharts-reference-line-line"
  })), r;
}, P7 = function(t, n, r, o, l, c, f, d, h) {
  var y = l.x, v = l.y, g = l.width, b = l.height;
  if (r) {
    var _ = h.y, S = t.y.apply(_, {
      position: c
    });
    if (dr(h, "discard") && !t.y.isInRange(S))
      return null;
    var x = [{
      x: y + g,
      y: S
    }, {
      x: y,
      y: S
    }];
    return d === "left" ? x.reverse() : x;
  }
  if (n) {
    var A = h.x, E = t.x.apply(A, {
      position: c
    });
    if (dr(h, "discard") && !t.x.isInRange(E))
      return null;
    var M = [{
      x: E,
      y: v + b
    }, {
      x: E,
      y: v
    }];
    return f === "top" ? M.reverse() : M;
  }
  if (o) {
    var j = h.segment, w = j.map(function(T) {
      return t.apply(T, {
        position: c
      });
    });
    return dr(h, "discard") && AH(w, function(T) {
      return !t.isInRange(T);
    }) ? null : w;
  }
  return null;
};
function N7(e) {
  var t = e.x, n = e.y, r = e.segment, o = e.xAxisId, l = e.yAxisId, c = e.shape, f = e.className, d = e.alwaysShow, h = h7(), y = xP(o), v = SP(l), g = y7();
  if (!h || !g)
    return null;
  Ur(d === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var b = T1({
    x: y.scale,
    y: v.scale
  }), _ = wt(t), S = wt(n), x = r && r.length === 2, A = P7(b, _, S, x, g, e.position, y.orientation, v.orientation, e);
  if (!A)
    return null;
  var E = T7(A, 2), M = E[0], j = M.x, w = M.y, T = E[1], C = T.x, R = T.y, N = dr(e, "hidden") ? "url(#".concat(h, ")") : void 0, K = rM(rM({
    clipPath: N
  }, Te(e, !0)), {}, {
    x1: j,
    y1: w,
    x2: C,
    y2: R
  });
  return /* @__PURE__ */ k.createElement(Ie, {
    className: $e("recharts-reference-line", f)
  }, D7(c, K), Yt.renderCallByParent(e, t7({
    x1: j,
    y1: w,
    x2: C,
    y2: R
  })));
}
var Dd = /* @__PURE__ */ (function(e) {
  function t() {
    return g7(this, t), S7(this, t, arguments);
  }
  return w7(t, e), x7(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ k.createElement(N7, this.props);
    }
  }]);
})(k.Component);
D1(Dd, "displayName", "ReferenceLine");
D1(Dd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function s0() {
  return s0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, s0.apply(this, arguments);
}
function Io(e) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e);
}
function iM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iM(Object(n), !0).forEach(function(r) {
      Pd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function R7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $7(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, AP(r.key), r);
  }
}
function z7(e, t, n) {
  return t && $7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q7(e, t, n) {
  return t = Gf(t), B7(e, wP() ? Reflect.construct(t, n || [], Gf(e).constructor) : t.apply(e, n));
}
function B7(e, t) {
  if (t && (Io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k7(e);
}
function k7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wP = function() {
    return !!e;
  })();
}
function Gf(e) {
  return Gf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Gf(e);
}
function L7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && f0(e, t);
}
function f0(e, t) {
  return f0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, f0(e, t);
}
function Pd(e, t, n) {
  return t = AP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function AP(e) {
  var t = U7(e, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function U7(e, t) {
  if (Io(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Io(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var I7 = function(t) {
  var n = t.x, r = t.y, o = t.xAxis, l = t.yAxis, c = T1({
    x: o.scale,
    y: l.scale
  }), f = c.apply({
    x: n,
    y: r
  }, {
    bandAware: !0
  });
  return dr(t, "discard") && !c.isInRange(f) ? null : f;
}, Nd = /* @__PURE__ */ (function(e) {
  function t() {
    return R7(this, t), q7(this, t, arguments);
  }
  return L7(t, e), z7(t, [{
    key: "render",
    value: function() {
      var r = this.props, o = r.x, l = r.y, c = r.r, f = r.alwaysShow, d = r.clipPathId, h = wt(o), y = wt(l);
      if (Ur(f === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !h || !y)
        return null;
      var v = I7(this.props);
      if (!v)
        return null;
      var g = v.x, b = v.y, _ = this.props, S = _.shape, x = _.className, A = dr(this.props, "hidden") ? "url(#".concat(d, ")") : void 0, E = oM(oM({
        clipPath: A
      }, Te(this.props, !0)), {}, {
        cx: g,
        cy: b
      });
      return /* @__PURE__ */ k.createElement(Ie, {
        className: $e("recharts-reference-dot", x)
      }, t.renderDot(S, E), Yt.renderCallByParent(this.props, {
        x: g - c,
        y: b - c,
        width: 2 * c,
        height: 2 * c
      }));
    }
  }]);
})(k.Component);
Pd(Nd, "displayName", "ReferenceDot");
Pd(Nd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Pd(Nd, "renderDot", function(e, t) {
  var n;
  return /* @__PURE__ */ k.isValidElement(e) ? n = /* @__PURE__ */ k.cloneElement(e, t) : Ee(e) ? n = e(t) : n = /* @__PURE__ */ k.createElement(Td, s0({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), n;
});
function d0() {
  return d0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, d0.apply(this, arguments);
}
function Ho(e) {
  "@babel/helpers - typeof";
  return Ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ho(e);
}
function uM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uM(Object(n), !0).forEach(function(r) {
      Rd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function H7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function G7(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, EP(r.key), r);
  }
}
function Y7(e, t, n) {
  return t && G7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function K7(e, t, n) {
  return t = Yf(t), X7(e, TP() ? Reflect.construct(t, n || [], Yf(e).constructor) : t.apply(e, n));
}
function X7(e, t) {
  if (t && (Ho(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return V7(e);
}
function V7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (TP = function() {
    return !!e;
  })();
}
function Yf(e) {
  return Yf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yf(e);
}
function F7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && h0(e, t);
}
function h0(e, t) {
  return h0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, h0(e, t);
}
function Rd(e, t, n) {
  return t = EP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function EP(e) {
  var t = W7(e, "string");
  return Ho(t) == "symbol" ? t : t + "";
}
function W7(e, t) {
  if (Ho(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ho(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Z7 = function(t, n, r, o, l) {
  var c = l.x1, f = l.x2, d = l.y1, h = l.y2, y = l.xAxis, v = l.yAxis;
  if (!y || !v) return null;
  var g = T1({
    x: y.scale,
    y: v.scale
  }), b = {
    x: t ? g.x.apply(c, {
      position: "start"
    }) : g.x.rangeMin,
    y: r ? g.y.apply(d, {
      position: "start"
    }) : g.y.rangeMin
  }, _ = {
    x: n ? g.x.apply(f, {
      position: "end"
    }) : g.x.rangeMax,
    y: o ? g.y.apply(h, {
      position: "end"
    }) : g.y.rangeMax
  };
  return dr(l, "discard") && (!g.isInRange(b) || !g.isInRange(_)) ? null : hP(b, _);
}, $d = /* @__PURE__ */ (function(e) {
  function t() {
    return H7(this, t), K7(this, t, arguments);
  }
  return F7(t, e), Y7(t, [{
    key: "render",
    value: function() {
      var r = this.props, o = r.x1, l = r.x2, c = r.y1, f = r.y2, d = r.className, h = r.alwaysShow, y = r.clipPathId;
      Ur(h === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var v = wt(o), g = wt(l), b = wt(c), _ = wt(f), S = this.props.shape;
      if (!v && !g && !b && !_ && !S)
        return null;
      var x = Z7(v, g, b, _, this.props);
      if (!x && !S)
        return null;
      var A = dr(this.props, "hidden") ? "url(#".concat(y, ")") : void 0;
      return /* @__PURE__ */ k.createElement(Ie, {
        className: $e("recharts-reference-area", d)
      }, t.renderRect(S, lM(lM({
        clipPath: A
      }, Te(this.props, !0)), x)), Yt.renderCallByParent(this.props, x));
    }
  }]);
})(k.Component);
Rd($d, "displayName", "ReferenceArea");
Rd($d, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
Rd($d, "renderRect", function(e, t) {
  var n;
  return /* @__PURE__ */ k.isValidElement(e) ? n = /* @__PURE__ */ k.cloneElement(e, t) : Ee(e) ? n = e(t) : n = /* @__PURE__ */ k.createElement(A1, d0({}, t, {
    className: "recharts-reference-area-rect"
  })), n;
});
function jP(e, t, n) {
  if (t < 1)
    return [];
  if (t === 1 && n === void 0)
    return e;
  for (var r = [], o = 0; o < e.length; o += t)
    r.push(e[o]);
  return r;
}
function Q7(e, t, n) {
  var r = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return r7(r, n);
}
function J7(e, t, n) {
  var r = n === "width", o = e.x, l = e.y, c = e.width, f = e.height;
  return t === 1 ? {
    start: r ? o : l,
    end: r ? o + c : l + f
  } : {
    start: r ? o + c : l + f,
    end: r ? o : l
  };
}
function Kf(e, t, n, r, o) {
  if (e * t < e * r || e * t > e * o)
    return !1;
  var l = n();
  return e * (t - e * l / 2 - r) >= 0 && e * (t + e * l / 2 - o) <= 0;
}
function eG(e, t) {
  return jP(e, t + 1);
}
function tG(e, t, n, r, o) {
  for (var l = (r || []).slice(), c = t.start, f = t.end, d = 0, h = 1, y = c, v = function() {
    var _ = r == null ? void 0 : r[d];
    if (_ === void 0)
      return {
        v: jP(r, h)
      };
    var S = d, x, A = function() {
      return x === void 0 && (x = n(_, S)), x;
    }, E = _.coordinate, M = d === 0 || Kf(e, E, A, y, f);
    M || (d = 0, y = c, h += 1), M && (y = E + e * (A() / 2 + o), d += h);
  }, g; h <= l.length; )
    if (g = v(), g) return g.v;
  return [];
}
function uc(e) {
  "@babel/helpers - typeof";
  return uc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uc(e);
}
function cM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cM(Object(n), !0).forEach(function(r) {
      nG(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nG(e, t, n) {
  return t = rG(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rG(e) {
  var t = aG(e, "string");
  return uc(t) == "symbol" ? t : t + "";
}
function aG(e, t) {
  if (uc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (uc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iG(e, t, n, r, o) {
  for (var l = (r || []).slice(), c = l.length, f = t.start, d = t.end, h = function(g) {
    var b = l[g], _, S = function() {
      return _ === void 0 && (_ = n(b, g)), _;
    };
    if (g === c - 1) {
      var x = e * (b.coordinate + e * S() / 2 - d);
      l[g] = b = Ht(Ht({}, b), {}, {
        tickCoord: x > 0 ? b.coordinate - x * e : b.coordinate
      });
    } else
      l[g] = b = Ht(Ht({}, b), {}, {
        tickCoord: b.coordinate
      });
    var A = Kf(e, b.tickCoord, S, f, d);
    A && (d = b.tickCoord - e * (S() / 2 + o), l[g] = Ht(Ht({}, b), {}, {
      isShow: !0
    }));
  }, y = c - 1; y >= 0; y--)
    h(y);
  return l;
}
function oG(e, t, n, r, o, l) {
  var c = (r || []).slice(), f = c.length, d = t.start, h = t.end;
  if (l) {
    var y = r[f - 1], v = n(y, f - 1), g = e * (y.coordinate + e * v / 2 - h);
    c[f - 1] = y = Ht(Ht({}, y), {}, {
      tickCoord: g > 0 ? y.coordinate - g * e : y.coordinate
    });
    var b = Kf(e, y.tickCoord, function() {
      return v;
    }, d, h);
    b && (h = y.tickCoord - e * (v / 2 + o), c[f - 1] = Ht(Ht({}, y), {}, {
      isShow: !0
    }));
  }
  for (var _ = l ? f - 1 : f, S = function(E) {
    var M = c[E], j, w = function() {
      return j === void 0 && (j = n(M, E)), j;
    };
    if (E === 0) {
      var T = e * (M.coordinate - e * w() / 2 - d);
      c[E] = M = Ht(Ht({}, M), {}, {
        tickCoord: T < 0 ? M.coordinate - T * e : M.coordinate
      });
    } else
      c[E] = M = Ht(Ht({}, M), {}, {
        tickCoord: M.coordinate
      });
    var C = Kf(e, M.tickCoord, w, d, h);
    C && (d = M.tickCoord + e * (w() / 2 + o), c[E] = Ht(Ht({}, M), {}, {
      isShow: !0
    }));
  }, x = 0; x < _; x++)
    S(x);
  return c;
}
function P1(e, t, n) {
  var r = e.tick, o = e.ticks, l = e.viewBox, c = e.minTickGap, f = e.orientation, d = e.interval, h = e.tickFormatter, y = e.unit, v = e.angle;
  if (!o || !o.length || !r)
    return [];
  if (de(d) || Pa.isSsr)
    return eG(o, typeof d == "number" && de(d) ? d : 0);
  var g = [], b = f === "top" || f === "bottom" ? "width" : "height", _ = y && b === "width" ? gl(y, {
    fontSize: t,
    letterSpacing: n
  }) : {
    width: 0,
    height: 0
  }, S = function(M, j) {
    var w = Ee(h) ? h(M.value, j) : M.value;
    return b === "width" ? Q7(gl(w, {
      fontSize: t,
      letterSpacing: n
    }), _, v) : gl(w, {
      fontSize: t,
      letterSpacing: n
    })[b];
  }, x = o.length >= 2 ? Fn(o[1].coordinate - o[0].coordinate) : 1, A = J7(l, x, b);
  return d === "equidistantPreserveStart" ? tG(x, A, S, o, c) : (d === "preserveStart" || d === "preserveStartEnd" ? g = oG(x, A, S, o, c, d === "preserveStartEnd") : g = iG(x, A, S, o, c), g.filter(function(E) {
    return E.isShow;
  }));
}
var uG = ["viewBox"], lG = ["viewBox"], cG = ["ticks"];
function Go(e) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e);
}
function bo() {
  return bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bo.apply(this, arguments);
}
function sM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sM(Object(n), !0).forEach(function(r) {
      N1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Jg(e, t) {
  if (e == null) return {};
  var n = sG(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sG(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function fG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fM(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, CP(r.key), r);
  }
}
function dG(e, t, n) {
  return t && fM(e.prototype, t), n && fM(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hG(e, t, n) {
  return t = Xf(t), pG(e, MP() ? Reflect.construct(t, n || [], Xf(e).constructor) : t.apply(e, n));
}
function pG(e, t) {
  if (t && (Go(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return vG(e);
}
function vG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function MP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (MP = function() {
    return !!e;
  })();
}
function Xf(e) {
  return Xf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xf(e);
}
function yG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && p0(e, t);
}
function p0(e, t) {
  return p0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, p0(e, t);
}
function N1(e, t, n) {
  return t = CP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function CP(e) {
  var t = mG(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function mG(e, t) {
  if (Go(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var lu = /* @__PURE__ */ (function(e) {
  function t(n) {
    var r;
    return fG(this, t), r = hG(this, t, [n]), r.state = {
      fontSize: "",
      letterSpacing: ""
    }, r;
  }
  return yG(t, e), dG(t, [{
    key: "shouldComponentUpdate",
    value: function(r, o) {
      var l = r.viewBox, c = Jg(r, uG), f = this.props, d = f.viewBox, h = Jg(f, lG);
      return !_o(l, d) || !_o(c, h) || !_o(o, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var r = this.layerReference;
      if (r) {
        var o = r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        o && this.setState({
          fontSize: window.getComputedStyle(o).fontSize,
          letterSpacing: window.getComputedStyle(o).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(r) {
      var o = this.props, l = o.x, c = o.y, f = o.width, d = o.height, h = o.orientation, y = o.tickSize, v = o.mirror, g = o.tickMargin, b, _, S, x, A, E, M = v ? -1 : 1, j = r.tickSize || y, w = de(r.tickCoord) ? r.tickCoord : r.coordinate;
      switch (h) {
        case "top":
          b = _ = r.coordinate, x = c + +!v * d, S = x - M * j, E = S - M * g, A = w;
          break;
        case "left":
          S = x = r.coordinate, _ = l + +!v * f, b = _ - M * j, A = b - M * g, E = w;
          break;
        case "right":
          S = x = r.coordinate, _ = l + +v * f, b = _ + M * j, A = b + M * g, E = w;
          break;
        default:
          b = _ = r.coordinate, x = c + +v * d, S = x + M * j, E = S + M * g, A = w;
          break;
      }
      return {
        line: {
          x1: b,
          y1: S,
          x2: _,
          y2: x
        },
        tick: {
          x: A,
          y: E
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var r = this.props, o = r.orientation, l = r.mirror, c;
      switch (o) {
        case "left":
          c = l ? "start" : "end";
          break;
        case "right":
          c = l ? "end" : "start";
          break;
        default:
          c = "middle";
          break;
      }
      return c;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var r = this.props, o = r.orientation, l = r.mirror, c = "end";
      switch (o) {
        case "left":
        case "right":
          c = "middle";
          break;
        case "top":
          c = l ? "start" : "end";
          break;
        default:
          c = l ? "end" : "start";
          break;
      }
      return c;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, o = r.x, l = r.y, c = r.width, f = r.height, d = r.orientation, h = r.mirror, y = r.axisLine, v = _t(_t(_t({}, Te(this.props, !1)), Te(y, !1)), {}, {
        fill: "none"
      });
      if (d === "top" || d === "bottom") {
        var g = +(d === "top" && !h || d === "bottom" && h);
        v = _t(_t({}, v), {}, {
          x1: o,
          y1: l + g * f,
          x2: o + c,
          y2: l + g * f
        });
      } else {
        var b = +(d === "left" && !h || d === "right" && h);
        v = _t(_t({}, v), {}, {
          x1: o + b * c,
          y1: l,
          x2: o + b * c,
          y2: l + f
        });
      }
      return /* @__PURE__ */ k.createElement("line", bo({}, v, {
        className: $e("recharts-cartesian-axis-line", kn(y, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(r, o, l) {
        var c = this, f = this.props, d = f.tickLine, h = f.stroke, y = f.tick, v = f.tickFormatter, g = f.unit, b = P1(_t(_t({}, this.props), {}, {
          ticks: r
        }), o, l), _ = this.getTickTextAnchor(), S = this.getTickVerticalAnchor(), x = Te(this.props, !1), A = Te(y, !1), E = _t(_t({}, x), {}, {
          fill: "none"
        }, Te(d, !1)), M = b.map(function(j, w) {
          var T = c.getTickLineCoord(j), C = T.line, R = T.tick, N = _t(_t(_t(_t({
            textAnchor: _,
            verticalAnchor: S
          }, x), {}, {
            stroke: "none",
            fill: h
          }, A), R), {}, {
            index: w,
            payload: j,
            visibleTicksCount: b.length,
            tickFormatter: v
          });
          return /* @__PURE__ */ k.createElement(Ie, bo({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(j.value, "-").concat(j.coordinate, "-").concat(j.tickCoord)
          }, jl(c.props, j, w)), d && /* @__PURE__ */ k.createElement("line", bo({}, E, C, {
            className: $e("recharts-cartesian-axis-tick-line", kn(d, "className"))
          })), y && t.renderTickItem(y, N, "".concat(Ee(v) ? v(j.value, w) : j.value).concat(g || "")));
        });
        return /* @__PURE__ */ k.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, M);
      }
    )
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.axisLine, c = o.width, f = o.height, d = o.ticksGenerator, h = o.className, y = o.hide;
      if (y)
        return null;
      var v = this.props, g = v.ticks, b = Jg(v, cG), _ = g;
      return Ee(d) && (_ = g && g.length > 0 ? d(this.props) : d(b)), c <= 0 || f <= 0 || !_ || !_.length ? null : /* @__PURE__ */ k.createElement(Ie, {
        className: $e("recharts-cartesian-axis", h),
        ref: function(x) {
          r.layerReference = x;
        }
      }, l && this.renderAxisLine(), this.renderTicks(_, this.state.fontSize, this.state.letterSpacing), Yt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, o, l) {
      var c, f = $e(o.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ k.isValidElement(r) ? c = /* @__PURE__ */ k.cloneElement(r, _t(_t({}, o), {}, {
        className: f
      })) : Ee(r) ? c = r(_t(_t({}, o), {}, {
        className: f
      })) : c = /* @__PURE__ */ k.createElement(hf, bo({}, o, {
        className: "recharts-cartesian-axis-tick-value"
      }), l), c;
    }
  }]);
})(ee.Component);
N1(lu, "displayName", "CartesianAxis");
N1(lu, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var gG = ["x1", "y1", "x2", "y2", "key"], bG = ["offset"];
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function dM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dM(Object(n), !0).forEach(function(r) {
      xG(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xG(e, t, n) {
  return t = SG(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function SG(e) {
  var t = _G(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function _G(e, t) {
  if (gi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (gi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, li.apply(this, arguments);
}
function hM(e, t) {
  if (e == null) return {};
  var n = OG(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function OG(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var wG = function(t) {
  var n = t.fill;
  if (!n || n === "none")
    return null;
  var r = t.fillOpacity, o = t.x, l = t.y, c = t.width, f = t.height, d = t.ry;
  return /* @__PURE__ */ k.createElement("rect", {
    x: o,
    y: l,
    ry: d,
    width: c,
    height: f,
    stroke: "none",
    fill: n,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function DP(e, t) {
  var n;
  if (/* @__PURE__ */ k.isValidElement(e))
    n = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Ee(e))
    n = e(t);
  else {
    var r = t.x1, o = t.y1, l = t.x2, c = t.y2, f = t.key, d = hM(t, gG), h = Te(d, !1);
    h.offset;
    var y = hM(h, bG);
    n = /* @__PURE__ */ k.createElement("line", li({}, y, {
      x1: r,
      y1: o,
      x2: l,
      y2: c,
      fill: "none",
      key: f
    }));
  }
  return n;
}
function AG(e) {
  var t = e.x, n = e.width, r = e.horizontal, o = r === void 0 ? !0 : r, l = e.horizontalPoints;
  if (!o || !l || !l.length)
    return null;
  var c = l.map(function(f, d) {
    var h = Kt(Kt({}, e), {}, {
      x1: t,
      y1: f,
      x2: t + n,
      y2: f,
      key: "line-".concat(d),
      index: d
    });
    return DP(o, h);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function TG(e) {
  var t = e.y, n = e.height, r = e.vertical, o = r === void 0 ? !0 : r, l = e.verticalPoints;
  if (!o || !l || !l.length)
    return null;
  var c = l.map(function(f, d) {
    var h = Kt(Kt({}, e), {}, {
      x1: f,
      y1: t,
      x2: f,
      y2: t + n,
      key: "line-".concat(d),
      index: d
    });
    return DP(o, h);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function EG(e) {
  var t = e.horizontalFill, n = e.fillOpacity, r = e.x, o = e.y, l = e.width, c = e.height, f = e.horizontalPoints, d = e.horizontal, h = d === void 0 ? !0 : d;
  if (!h || !t || !t.length)
    return null;
  var y = f.map(function(g) {
    return Math.round(g + o - o);
  }).sort(function(g, b) {
    return g - b;
  });
  o !== y[0] && y.unshift(0);
  var v = y.map(function(g, b) {
    var _ = !y[b + 1], S = _ ? o + c - g : y[b + 1] - g;
    if (S <= 0)
      return null;
    var x = b % t.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(b),
      y: g,
      x: r,
      height: S,
      width: l,
      stroke: "none",
      fill: t[x],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, v);
}
function jG(e) {
  var t = e.vertical, n = t === void 0 ? !0 : t, r = e.verticalFill, o = e.fillOpacity, l = e.x, c = e.y, f = e.width, d = e.height, h = e.verticalPoints;
  if (!n || !r || !r.length)
    return null;
  var y = h.map(function(g) {
    return Math.round(g + l - l);
  }).sort(function(g, b) {
    return g - b;
  });
  l !== y[0] && y.unshift(0);
  var v = y.map(function(g, b) {
    var _ = !y[b + 1], S = _ ? l + f - g : y[b + 1] - g;
    if (S <= 0)
      return null;
    var x = b % r.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(b),
      x: g,
      y: c,
      width: S,
      height: d,
      stroke: "none",
      fill: r[x],
      fillOpacity: o,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, v);
}
var MG = function(t, n) {
  var r = t.xAxis, o = t.width, l = t.height, c = t.offset;
  return YD(P1(Kt(Kt(Kt({}, lu.defaultProps), r), {}, {
    ticks: Br(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: o,
      height: l
    }
  })), c.left, c.left + c.width, n);
}, CG = function(t, n) {
  var r = t.yAxis, o = t.width, l = t.height, c = t.offset;
  return YD(P1(Kt(Kt(Kt({}, lu.defaultProps), r), {}, {
    ticks: Br(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: o,
      height: l
    }
  })), c.top, c.top + c.height, n);
}, yo = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function ml(e) {
  var t, n, r, o, l, c, f = M1(), d = C1(), h = m7(), y = Kt(Kt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : yo.stroke,
    fill: (n = e.fill) !== null && n !== void 0 ? n : yo.fill,
    horizontal: (r = e.horizontal) !== null && r !== void 0 ? r : yo.horizontal,
    horizontalFill: (o = e.horizontalFill) !== null && o !== void 0 ? o : yo.horizontalFill,
    vertical: (l = e.vertical) !== null && l !== void 0 ? l : yo.vertical,
    verticalFill: (c = e.verticalFill) !== null && c !== void 0 ? c : yo.verticalFill,
    x: de(e.x) ? e.x : h.left,
    y: de(e.y) ? e.y : h.top,
    width: de(e.width) ? e.width : h.width,
    height: de(e.height) ? e.height : h.height
  }), v = y.x, g = y.y, b = y.width, _ = y.height, S = y.syncWithTicks, x = y.horizontalValues, A = y.verticalValues, E = p7(), M = v7();
  if (!de(b) || b <= 0 || !de(_) || _ <= 0 || !de(v) || v !== +v || !de(g) || g !== +g)
    return null;
  var j = y.verticalCoordinatesGenerator || MG, w = y.horizontalCoordinatesGenerator || CG, T = y.horizontalPoints, C = y.verticalPoints;
  if ((!T || !T.length) && Ee(w)) {
    var R = x && x.length, N = w({
      yAxis: M ? Kt(Kt({}, M), {}, {
        ticks: R ? x : M.ticks
      }) : void 0,
      width: f,
      height: d,
      offset: h
    }, R ? !0 : S);
    Ur(Array.isArray(N), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(gi(N), "]")), Array.isArray(N) && (T = N);
  }
  if ((!C || !C.length) && Ee(j)) {
    var K = A && A.length, L = j({
      xAxis: E ? Kt(Kt({}, E), {}, {
        ticks: K ? A : E.ticks
      }) : void 0,
      width: f,
      height: d,
      offset: h
    }, K ? !0 : S);
    Ur(Array.isArray(L), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(gi(L), "]")), Array.isArray(L) && (C = L);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(wG, {
    fill: y.fill,
    fillOpacity: y.fillOpacity,
    x: y.x,
    y: y.y,
    width: y.width,
    height: y.height,
    ry: y.ry
  }), /* @__PURE__ */ k.createElement(AG, li({}, y, {
    offset: h,
    horizontalPoints: T,
    xAxis: E,
    yAxis: M
  })), /* @__PURE__ */ k.createElement(TG, li({}, y, {
    offset: h,
    verticalPoints: C,
    xAxis: E,
    yAxis: M
  })), /* @__PURE__ */ k.createElement(EG, li({}, y, {
    horizontalPoints: T
  })), /* @__PURE__ */ k.createElement(jG, li({}, y, {
    verticalPoints: C
  })));
}
ml.displayName = "CartesianGrid";
var DG = ["type", "layout", "connectNulls", "ref"], PG = ["key"];
function Yo(e) {
  "@babel/helpers - typeof";
  return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
function pM(e, t) {
  if (e == null) return {};
  var n = NG(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function NG(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function _l() {
  return _l = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _l.apply(this, arguments);
}
function vM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vM(Object(n), !0).forEach(function(r) {
      Xn(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mo(e) {
  return qG(e) || zG(e) || $G(e) || RG();
}
function RG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $G(e, t) {
  if (e) {
    if (typeof e == "string") return v0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v0(e, t);
  }
}
function zG(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qG(e) {
  if (Array.isArray(e)) return v0(e);
}
function v0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function BG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yM(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, NP(r.key), r);
  }
}
function kG(e, t, n) {
  return t && yM(e.prototype, t), n && yM(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function LG(e, t, n) {
  return t = Vf(t), UG(e, PP() ? Reflect.construct(t, n || [], Vf(e).constructor) : t.apply(e, n));
}
function UG(e, t) {
  if (t && (Yo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IG(e);
}
function IG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (PP = function() {
    return !!e;
  })();
}
function Vf(e) {
  return Vf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vf(e);
}
function HG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && y0(e, t);
}
function y0(e, t) {
  return y0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, y0(e, t);
}
function Xn(e, t, n) {
  return t = NP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function NP(e) {
  var t = GG(e, "string");
  return Yo(t) == "symbol" ? t : t + "";
}
function GG(e, t) {
  if (Yo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Yo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var kr = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    BG(this, t);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = LG(this, t, [].concat(o)), Xn(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Xn(n, "generateSimpleStrokeDasharray", function(c, f) {
      return "".concat(f, "px ").concat(c - f, "px");
    }), Xn(n, "getStrokeDasharray", function(c, f, d) {
      var h = d.reduce(function(A, E) {
        return A + E;
      });
      if (!h)
        return n.generateSimpleStrokeDasharray(f, c);
      for (var y = Math.floor(c / h), v = c % h, g = f - c, b = [], _ = 0, S = 0; _ < d.length; S += d[_], ++_)
        if (S + d[_] > v) {
          b = [].concat(mo(d.slice(0, _)), [v - S]);
          break;
        }
      var x = b.length % 2 === 0 ? [0, g] : [g];
      return [].concat(mo(t.repeat(d, y)), mo(b), x).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), Xn(n, "id", xi("recharts-line-")), Xn(n, "pathRef", function(c) {
      n.mainCurve = c;
    }), Xn(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      }), n.props.onAnimationEnd && n.props.onAnimationEnd();
    }), Xn(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      }), n.props.onAnimationStart && n.props.onAnimationStart();
    }), n;
  }
  return HG(t, e), kG(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var r = this.getTotalLength();
        this.setState({
          totalLength: r
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var r = this.getTotalLength();
        r !== this.state.totalLength && this.setState({
          totalLength: r
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var r = this.mainCurve;
      try {
        return r && r.getTotalLength && r.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(r, o) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var l = this.props, c = l.points, f = l.xAxis, d = l.yAxis, h = l.layout, y = l.children, v = on(y, uu);
      if (!v)
        return null;
      var g = function(S, x) {
        return {
          x: S.x,
          y: S.y,
          value: S.value,
          errorVal: At(S.payload, x)
        };
      }, b = {
        clipPath: r ? "url(#clipPath-".concat(o, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ie, b, v.map(function(_) {
        return /* @__PURE__ */ k.cloneElement(_, {
          key: "bar-".concat(_.props.dataKey),
          data: c,
          xAxis: f,
          yAxis: d,
          layout: h,
          dataPointFormatter: g
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(r, o, l) {
      var c = this.props.isAnimationActive;
      if (c && !this.state.isAnimationFinished)
        return null;
      var f = this.props, d = f.dot, h = f.points, y = f.dataKey, v = Te(this.props, !1), g = Te(d, !0), b = h.map(function(S, x) {
        var A = mn(mn(mn({
          key: "dot-".concat(x),
          r: 3
        }, v), g), {}, {
          index: x,
          cx: S.x,
          cy: S.y,
          value: S.value,
          dataKey: y,
          payload: S.payload,
          points: h
        });
        return t.renderDotItem(d, A);
      }), _ = {
        clipPath: r ? "url(#clipPath-".concat(o ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ie, _l({
        className: "recharts-line-dots",
        key: "dots"
      }, _), b);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, o, l, c) {
      var f = this.props, d = f.type, h = f.layout, y = f.connectNulls;
      f.ref;
      var v = pM(f, DG), g = mn(mn(mn({}, Te(v, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: o ? "url(#clipPath-".concat(l, ")") : null,
        points: r
      }, c), {}, {
        type: d,
        layout: h,
        connectNulls: y
      });
      return /* @__PURE__ */ k.createElement(di, _l({}, g, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, o) {
      var l = this, c = this.props, f = c.points, d = c.strokeDasharray, h = c.isAnimationActive, y = c.animationBegin, v = c.animationDuration, g = c.animationEasing, b = c.animationId, _ = c.animateNewValues, S = c.width, x = c.height, A = this.state, E = A.prevPoints, M = A.totalLength;
      return /* @__PURE__ */ k.createElement(Wn, {
        begin: y,
        duration: v,
        isActive: h,
        easing: g,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(b),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(j) {
        var w = j.t;
        if (E) {
          var T = E.length / f.length, C = f.map(function(B, F) {
            var G = Math.floor(F * T);
            if (E[G]) {
              var V = E[G], $ = pt(V.x, B.x), Y = pt(V.y, B.y);
              return mn(mn({}, B), {}, {
                x: $(w),
                y: Y(w)
              });
            }
            if (_) {
              var ne = pt(S * 2, B.x), H = pt(x / 2, B.y);
              return mn(mn({}, B), {}, {
                x: ne(w),
                y: H(w)
              });
            }
            return mn(mn({}, B), {}, {
              x: B.x,
              y: B.y
            });
          });
          return l.renderCurveStatically(C, r, o);
        }
        var R = pt(0, M), N = R(w), K;
        if (d) {
          var L = "".concat(d).split(/[,\s]+/gim).map(function(B) {
            return parseFloat(B);
          });
          K = l.getStrokeDasharray(N, M, L);
        } else
          K = l.generateSimpleStrokeDasharray(M, N);
        return l.renderCurveStatically(f, r, o, {
          strokeDasharray: K
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(r, o) {
      var l = this.props, c = l.points, f = l.isAnimationActive, d = this.state, h = d.prevPoints, y = d.totalLength;
      return f && c && c.length && (!h && y > 0 || !vi(h, c)) ? this.renderCurveWithAnimation(r, o) : this.renderCurveStatically(c, r, o);
    }
  }, {
    key: "render",
    value: function() {
      var r, o = this.props, l = o.hide, c = o.dot, f = o.points, d = o.className, h = o.xAxis, y = o.yAxis, v = o.top, g = o.left, b = o.width, _ = o.height, S = o.isAnimationActive, x = o.id;
      if (l || !f || !f.length)
        return null;
      var A = this.state.isAnimationFinished, E = f.length === 1, M = $e("recharts-line", d), j = h && h.allowDataOverflow, w = y && y.allowDataOverflow, T = j || w, C = we(x) ? this.id : x, R = (r = Te(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, N = R.r, K = N === void 0 ? 3 : N, L = R.strokeWidth, B = L === void 0 ? 2 : L, F = FM(c) ? c : {}, G = F.clipDot, V = G === void 0 ? !0 : G, $ = K * 2 + B;
      return /* @__PURE__ */ k.createElement(Ie, {
        className: M
      }, j || w ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: j ? g : g - b / 2,
        y: w ? v : v - _ / 2,
        width: j ? b : b * 2,
        height: w ? _ : _ * 2
      })), !V && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: g - $ / 2,
        y: v - $ / 2,
        width: b + $,
        height: _ + $
      }))) : null, !E && this.renderCurve(T, C), this.renderErrorBar(T, C), (E || c) && this.renderDots(T, V, C), (!S || A) && fr.renderCallByParent(this.props, f));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      return r.animationId !== o.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: o.curPoints
      } : r.points !== o.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(r, o) {
      for (var l = r.length % 2 !== 0 ? [].concat(mo(r), [0]) : r, c = [], f = 0; f < o; ++f)
        c = [].concat(mo(c), mo(l));
      return c;
    }
  }, {
    key: "renderDotItem",
    value: function(r, o) {
      var l;
      if (/* @__PURE__ */ k.isValidElement(r))
        l = /* @__PURE__ */ k.cloneElement(r, o);
      else if (Ee(r))
        l = r(o);
      else {
        var c = o.key, f = pM(o, PG), d = $e("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        l = /* @__PURE__ */ k.createElement(Td, _l({
          key: c
        }, f, {
          className: d
        }));
      }
      return l;
    }
  }]);
})(ee.PureComponent);
Xn(kr, "displayName", "Line");
Xn(kr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Pa.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Xn(kr, "getComposedData", function(e) {
  var t = e.props, n = e.xAxis, r = e.yAxis, o = e.xAxisTicks, l = e.yAxisTicks, c = e.dataKey, f = e.bandSize, d = e.displayedData, h = e.offset, y = t.layout, v = d.map(function(g, b) {
    var _ = At(g, c);
    return y === "horizontal" ? {
      x: zo({
        axis: n,
        ticks: o,
        bandSize: f,
        entry: g,
        index: b
      }),
      y: we(_) ? null : r.scale(_),
      value: _,
      payload: g
    } : {
      x: we(_) ? null : n.scale(_),
      y: zo({
        axis: r,
        ticks: l,
        bandSize: f,
        entry: g,
        index: b
      }),
      value: _,
      payload: g
    };
  });
  return mn({
    points: v,
    layout: y
  }, h);
});
var YG = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], KG = ["key"], RP;
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e);
}
function $P(e, t) {
  if (e == null) return {};
  var n = XG(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function XG(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ci.apply(this, arguments);
}
function mM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mM(Object(n), !0).forEach(function(r) {
      ur(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function VG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gM(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, qP(r.key), r);
  }
}
function FG(e, t, n) {
  return t && gM(e.prototype, t), n && gM(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function WG(e, t, n) {
  return t = Ff(t), ZG(e, zP() ? Reflect.construct(t, n || [], Ff(e).constructor) : t.apply(e, n));
}
function ZG(e, t) {
  if (t && (Ko(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QG(e);
}
function QG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zP = function() {
    return !!e;
  })();
}
function Ff(e) {
  return Ff = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ff(e);
}
function JG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && m0(e, t);
}
function m0(e, t) {
  return m0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, m0(e, t);
}
function ur(e, t, n) {
  return t = qP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function qP(e) {
  var t = eY(e, "string");
  return Ko(t) == "symbol" ? t : t + "";
}
function eY(e, t) {
  if (Ko(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ko(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Wr = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    VG(this, t);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = WG(this, t, [].concat(o)), ur(n, "state", {
      isAnimationFinished: !0
    }), ur(n, "id", xi("recharts-area-")), ur(n, "handleAnimationEnd", function() {
      var c = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Ee(c) && c();
    }), ur(n, "handleAnimationStart", function() {
      var c = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Ee(c) && c();
    }), n;
  }
  return JG(t, e), FG(t, [{
    key: "renderDots",
    value: function(r, o, l) {
      var c = this.props.isAnimationActive, f = this.state.isAnimationFinished;
      if (c && !f)
        return null;
      var d = this.props, h = d.dot, y = d.points, v = d.dataKey, g = Te(this.props, !1), b = Te(h, !0), _ = y.map(function(x, A) {
        var E = Oa(Oa(Oa({
          key: "dot-".concat(A),
          r: 3
        }, g), b), {}, {
          index: A,
          cx: x.x,
          cy: x.y,
          dataKey: v,
          value: x.value,
          payload: x.payload,
          points: y
        });
        return t.renderDotItem(h, E);
      }), S = {
        clipPath: r ? "url(#clipPath-".concat(o ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Ie, ci({
        className: "recharts-area-dots"
      }, S), _);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(r) {
      var o = this.props, l = o.baseLine, c = o.points, f = o.strokeWidth, d = c[0].x, h = c[c.length - 1].x, y = r * Math.abs(d - h), v = Ta(c.map(function(g) {
        return g.y || 0;
      }));
      return de(l) && typeof l == "number" ? v = Math.max(l, v) : l && Array.isArray(l) && l.length && (v = Math.max(Ta(l.map(function(g) {
        return g.y || 0;
      })), v)), de(v) ? /* @__PURE__ */ k.createElement("rect", {
        x: d < h ? d : d - y,
        y: 0,
        width: y,
        height: Math.floor(v + (f ? parseInt("".concat(f), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(r) {
      var o = this.props, l = o.baseLine, c = o.points, f = o.strokeWidth, d = c[0].y, h = c[c.length - 1].y, y = r * Math.abs(d - h), v = Ta(c.map(function(g) {
        return g.x || 0;
      }));
      return de(l) && typeof l == "number" ? v = Math.max(l, v) : l && Array.isArray(l) && l.length && (v = Math.max(Ta(l.map(function(g) {
        return g.x || 0;
      })), v)), de(v) ? /* @__PURE__ */ k.createElement("rect", {
        x: 0,
        y: d < h ? d : d - y,
        width: v + (f ? parseInt("".concat(f), 10) : 1),
        height: Math.floor(y)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(r) {
      var o = this.props.layout;
      return o === "vertical" ? this.renderVerticalRect(r) : this.renderHorizontalRect(r);
    }
  }, {
    key: "renderAreaStatically",
    value: function(r, o, l, c) {
      var f = this.props, d = f.layout, h = f.type, y = f.stroke, v = f.connectNulls, g = f.isRange;
      f.ref;
      var b = $P(f, YG);
      return /* @__PURE__ */ k.createElement(Ie, {
        clipPath: l ? "url(#clipPath-".concat(c, ")") : null
      }, /* @__PURE__ */ k.createElement(di, ci({}, Te(b, !0), {
        points: r,
        connectNulls: v,
        type: h,
        baseLine: o,
        layout: d,
        stroke: "none",
        className: "recharts-area-area"
      })), y !== "none" && /* @__PURE__ */ k.createElement(di, ci({}, Te(this.props, !1), {
        className: "recharts-area-curve",
        layout: d,
        type: h,
        connectNulls: v,
        fill: "none",
        points: r
      })), y !== "none" && g && /* @__PURE__ */ k.createElement(di, ci({}, Te(this.props, !1), {
        className: "recharts-area-curve",
        layout: d,
        type: h,
        connectNulls: v,
        fill: "none",
        points: o
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(r, o) {
      var l = this, c = this.props, f = c.points, d = c.baseLine, h = c.isAnimationActive, y = c.animationBegin, v = c.animationDuration, g = c.animationEasing, b = c.animationId, _ = this.state, S = _.prevPoints, x = _.prevBaseLine;
      return /* @__PURE__ */ k.createElement(Wn, {
        begin: y,
        duration: v,
        isActive: h,
        easing: g,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(b),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(A) {
        var E = A.t;
        if (S) {
          var M = S.length / f.length, j = f.map(function(R, N) {
            var K = Math.floor(N * M);
            if (S[K]) {
              var L = S[K], B = pt(L.x, R.x), F = pt(L.y, R.y);
              return Oa(Oa({}, R), {}, {
                x: B(E),
                y: F(E)
              });
            }
            return R;
          }), w;
          if (de(d) && typeof d == "number") {
            var T = pt(x, d);
            w = T(E);
          } else if (we(d) || nu(d)) {
            var C = pt(x, 0);
            w = C(E);
          } else
            w = d.map(function(R, N) {
              var K = Math.floor(N * M);
              if (x[K]) {
                var L = x[K], B = pt(L.x, R.x), F = pt(L.y, R.y);
                return Oa(Oa({}, R), {}, {
                  x: B(E),
                  y: F(E)
                });
              }
              return R;
            });
          return l.renderAreaStatically(j, w, r, o);
        }
        return /* @__PURE__ */ k.createElement(Ie, null, /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: "animationClipPath-".concat(o)
        }, l.renderClipRect(E))), /* @__PURE__ */ k.createElement(Ie, {
          clipPath: "url(#animationClipPath-".concat(o, ")")
        }, l.renderAreaStatically(f, d, r, o)));
      });
    }
  }, {
    key: "renderArea",
    value: function(r, o) {
      var l = this.props, c = l.points, f = l.baseLine, d = l.isAnimationActive, h = this.state, y = h.prevPoints, v = h.prevBaseLine, g = h.totalLength;
      return d && c && c.length && (!y && g > 0 || !vi(y, c) || !vi(v, f)) ? this.renderAreaWithAnimation(r, o) : this.renderAreaStatically(c, f, r, o);
    }
  }, {
    key: "render",
    value: function() {
      var r, o = this.props, l = o.hide, c = o.dot, f = o.points, d = o.className, h = o.top, y = o.left, v = o.xAxis, g = o.yAxis, b = o.width, _ = o.height, S = o.isAnimationActive, x = o.id;
      if (l || !f || !f.length)
        return null;
      var A = this.state.isAnimationFinished, E = f.length === 1, M = $e("recharts-area", d), j = v && v.allowDataOverflow, w = g && g.allowDataOverflow, T = j || w, C = we(x) ? this.id : x, R = (r = Te(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, N = R.r, K = N === void 0 ? 3 : N, L = R.strokeWidth, B = L === void 0 ? 2 : L, F = FM(c) ? c : {}, G = F.clipDot, V = G === void 0 ? !0 : G, $ = K * 2 + B;
      return /* @__PURE__ */ k.createElement(Ie, {
        className: M
      }, j || w ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: j ? y : y - b / 2,
        y: w ? h : h - _ / 2,
        width: j ? b : b * 2,
        height: w ? _ : _ * 2
      })), !V && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: y - $ / 2,
        y: h - $ / 2,
        width: b + $,
        height: _ + $
      }))) : null, E ? null : this.renderArea(T, C), (c || E) && this.renderDots(T, V, C), (!S || A) && fr.renderCallByParent(this.props, f));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      return r.animationId !== o.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        curBaseLine: r.baseLine,
        prevPoints: o.curPoints,
        prevBaseLine: o.curBaseLine
      } : r.points !== o.curPoints || r.baseLine !== o.curBaseLine ? {
        curPoints: r.points,
        curBaseLine: r.baseLine
      } : null;
    }
  }]);
})(ee.PureComponent);
RP = Wr;
ur(Wr, "displayName", "Area");
ur(Wr, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Pa.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
ur(Wr, "getBaseValue", function(e, t, n, r) {
  var o = e.layout, l = e.baseValue, c = t.props.baseValue, f = c ?? l;
  if (de(f) && typeof f == "number")
    return f;
  var d = o === "horizontal" ? r : n, h = d.scale.domain();
  if (d.type === "number") {
    var y = Math.max(h[0], h[1]), v = Math.min(h[0], h[1]);
    return f === "dataMin" ? v : f === "dataMax" || y < 0 ? y : Math.max(Math.min(h[0], h[1]), 0);
  }
  return f === "dataMin" ? h[0] : f === "dataMax" ? h[1] : h[0];
});
ur(Wr, "getComposedData", function(e) {
  var t = e.props, n = e.item, r = e.xAxis, o = e.yAxis, l = e.xAxisTicks, c = e.yAxisTicks, f = e.bandSize, d = e.dataKey, h = e.stackedData, y = e.dataStartIndex, v = e.displayedData, g = e.offset, b = t.layout, _ = h && h.length, S = RP.getBaseValue(t, n, r, o), x = b === "horizontal", A = !1, E = v.map(function(j, w) {
    var T;
    _ ? T = h[y + w] : (T = At(j, d), Array.isArray(T) ? A = !0 : T = [S, T]);
    var C = T[1] == null || _ && At(j, d) == null;
    return x ? {
      x: zo({
        axis: r,
        ticks: l,
        bandSize: f,
        entry: j,
        index: w
      }),
      y: C ? null : o.scale(T[1]),
      value: T,
      payload: j
    } : {
      x: C ? null : r.scale(T[1]),
      y: zo({
        axis: o,
        ticks: c,
        bandSize: f,
        entry: j,
        index: w
      }),
      value: T,
      payload: j
    };
  }), M;
  return _ || A ? M = E.map(function(j) {
    var w = Array.isArray(j.value) ? j.value[0] : null;
    return x ? {
      x: j.x,
      y: w != null && j.y != null ? o.scale(w) : null
    } : {
      x: w != null ? r.scale(w) : null,
      y: j.y
    };
  }) : M = x ? o.scale(S) : r.scale(S), Oa({
    points: E,
    baseLine: M,
    layout: b,
    isRange: A
  }, g);
});
ur(Wr, "renderDotItem", function(e, t) {
  var n;
  if (/* @__PURE__ */ k.isValidElement(e))
    n = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Ee(e))
    n = e(t);
  else {
    var r = $e("recharts-area-dot", typeof e != "boolean" ? e.className : ""), o = t.key, l = $P(t, KG);
    n = /* @__PURE__ */ k.createElement(Td, ci({}, l, {
      key: o,
      className: r
    }));
  }
  return n;
});
function Xo(e) {
  "@babel/helpers - typeof";
  return Xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xo(e);
}
function tY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, LP(r.key), r);
  }
}
function rY(e, t, n) {
  return t && nY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function aY(e, t, n) {
  return t = Wf(t), iY(e, BP() ? Reflect.construct(t, n || [], Wf(e).constructor) : t.apply(e, n));
}
function iY(e, t) {
  if (t && (Xo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oY(e);
}
function oY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (BP = function() {
    return !!e;
  })();
}
function Wf(e) {
  return Wf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Wf(e);
}
function uY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && g0(e, t);
}
function g0(e, t) {
  return g0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, g0(e, t);
}
function kP(e, t, n) {
  return t = LP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function LP(e) {
  var t = lY(e, "string");
  return Xo(t) == "symbol" ? t : t + "";
}
function lY(e, t) {
  if (Xo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Xo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zd = /* @__PURE__ */ (function(e) {
  function t() {
    return tY(this, t), aY(this, t, arguments);
  }
  return uY(t, e), rY(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(ee.Component);
kP(zd, "displayName", "ZAxis");
kP(zd, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var cY = ["option", "isActive"];
function Ol() {
  return Ol = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ol.apply(this, arguments);
}
function sY(e, t) {
  if (e == null) return {};
  var n = fY(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fY(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function dY(e) {
  var t = e.option, n = e.isActive, r = sY(e, cY);
  return typeof t == "string" ? /* @__PURE__ */ ee.createElement(a0, Ol({
    option: /* @__PURE__ */ ee.createElement(dd, Ol({
      type: t
    }, r)),
    isActive: n,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ ee.createElement(a0, Ol({
    option: t,
    isActive: n,
    shapeType: "symbols"
  }, r));
}
function Vo(e) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e);
}
function wl() {
  return wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wl.apply(this, arguments);
}
function bM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bM(Object(n), !0).forEach(function(r) {
      ja(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xM(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, IP(r.key), r);
  }
}
function pY(e, t, n) {
  return t && xM(e.prototype, t), n && xM(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vY(e, t, n) {
  return t = Zf(t), yY(e, UP() ? Reflect.construct(t, n || [], Zf(e).constructor) : t.apply(e, n));
}
function yY(e, t) {
  if (t && (Vo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mY(e);
}
function mY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function UP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UP = function() {
    return !!e;
  })();
}
function Zf(e) {
  return Zf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Zf(e);
}
function gY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && b0(e, t);
}
function b0(e, t) {
  return b0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, b0(e, t);
}
function ja(e, t, n) {
  return t = IP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function IP(e) {
  var t = bY(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function bY(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qd = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    hY(this, t);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = vY(this, t, [].concat(o)), ja(n, "state", {
      isAnimationFinished: !1
    }), ja(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      });
    }), ja(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      });
    }), ja(n, "id", xi("recharts-scatter-")), n;
  }
  return gY(t, e), pY(t, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var o = this, l = this.props, c = l.shape, f = l.activeShape, d = l.activeIndex, h = Te(this.props, !1);
      return r.map(function(y, v) {
        var g = d === v, b = g ? f : c, _ = qn(qn({}, h), y);
        return /* @__PURE__ */ k.createElement(Ie, wl({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(y == null ? void 0 : y.cx, "-").concat(y == null ? void 0 : y.cy, "-").concat(y == null ? void 0 : y.size, "-").concat(v)
        }, jl(o.props, y, v), {
          role: "img"
        }), /* @__PURE__ */ k.createElement(dY, wl({
          option: b,
          isActive: g,
          key: "symbol-".concat(v)
        }, _)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var r = this, o = this.props, l = o.points, c = o.isAnimationActive, f = o.animationBegin, d = o.animationDuration, h = o.animationEasing, y = o.animationId, v = this.state.prevPoints;
      return /* @__PURE__ */ k.createElement(Wn, {
        begin: f,
        duration: d,
        isActive: c,
        easing: h,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(y),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(g) {
        var b = g.t, _ = l.map(function(S, x) {
          var A = v && v[x];
          if (A) {
            var E = pt(A.cx, S.cx), M = pt(A.cy, S.cy), j = pt(A.size, S.size);
            return qn(qn({}, S), {}, {
              cx: E(b),
              cy: M(b),
              size: j(b)
            });
          }
          var w = pt(0, S.size);
          return qn(qn({}, S), {}, {
            size: w(b)
          });
        });
        return /* @__PURE__ */ k.createElement(Ie, null, r.renderSymbolsStatically(_));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, o = r.points, l = r.isAnimationActive, c = this.state.prevPoints;
      return l && o && o.length && (!c || !vi(c, o)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(o);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var o = this.props, l = o.points, c = o.xAxis, f = o.yAxis, d = o.children, h = on(d, uu);
      return h ? h.map(function(y, v) {
        var g = y.props, b = g.direction, _ = g.dataKey;
        return /* @__PURE__ */ k.cloneElement(y, {
          key: "".concat(b, "-").concat(_, "-").concat(l[v]),
          data: l,
          xAxis: c,
          yAxis: f,
          layout: b === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(x, A) {
            return {
              x: x.cx,
              y: x.cy,
              value: b === "x" ? +x.node.x : +x.node.y,
              errorVal: At(x, A)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, o = r.points, l = r.line, c = r.lineType, f = r.lineJointType, d = Te(this.props, !1), h = Te(l, !1), y, v;
      if (c === "joint")
        y = o.map(function(M) {
          return {
            x: M.cx,
            y: M.cy
          };
        });
      else if (c === "fitting") {
        var g = F$(o), b = g.xmin, _ = g.xmax, S = g.a, x = g.b, A = function(j) {
          return S * j + x;
        };
        y = [{
          x: b,
          y: A(b)
        }, {
          x: _,
          y: A(_)
        }];
      }
      var E = qn(qn(qn({}, d), {}, {
        fill: "none",
        stroke: d && d.fill
      }, h), {}, {
        points: y
      });
      return /* @__PURE__ */ k.isValidElement(l) ? v = /* @__PURE__ */ k.cloneElement(l, E) : Ee(l) ? v = l(E) : v = /* @__PURE__ */ k.createElement(di, wl({}, E, {
        type: f
      })), /* @__PURE__ */ k.createElement(Ie, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, v);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.hide, l = r.points, c = r.line, f = r.className, d = r.xAxis, h = r.yAxis, y = r.left, v = r.top, g = r.width, b = r.height, _ = r.id, S = r.isAnimationActive;
      if (o || !l || !l.length)
        return null;
      var x = this.state.isAnimationFinished, A = $e("recharts-scatter", f), E = d && d.allowDataOverflow, M = h && h.allowDataOverflow, j = E || M, w = we(_) ? this.id : _;
      return /* @__PURE__ */ k.createElement(Ie, {
        className: A,
        clipPath: j ? "url(#clipPath-".concat(w, ")") : null
      }, E || M ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(w)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: E ? y : y - g / 2,
        y: M ? v : v - b / 2,
        width: E ? g : g * 2,
        height: M ? b : b * 2
      }))) : null, c && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ k.createElement(Ie, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!S || x) && fr.renderCallByParent(this.props, l));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      return r.animationId !== o.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: o.curPoints
      } : r.points !== o.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }]);
})(ee.PureComponent);
ja(qd, "displayName", "Scatter");
ja(qd, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Pa.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
ja(qd, "getComposedData", function(e) {
  var t = e.xAxis, n = e.yAxis, r = e.zAxis, o = e.item, l = e.displayedData, c = e.xAxisTicks, f = e.yAxisTicks, d = e.offset, h = o.props.tooltipType, y = on(o.props.children, yd), v = we(t.dataKey) ? o.props.dataKey : t.dataKey, g = we(n.dataKey) ? o.props.dataKey : n.dataKey, b = r && r.dataKey, _ = r ? r.range : zd.defaultProps.range, S = _ && _[0], x = t.scale.bandwidth ? t.scale.bandwidth() : 0, A = n.scale.bandwidth ? n.scale.bandwidth() : 0, E = l.map(function(M, j) {
    var w = At(M, v), T = At(M, g), C = !we(b) && At(M, b) || "-", R = [{
      name: we(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: w,
      payload: M,
      dataKey: v,
      type: h
    }, {
      name: we(n.dataKey) ? o.props.name : n.name || n.dataKey,
      unit: n.unit || "",
      value: T,
      payload: M,
      dataKey: g,
      type: h
    }];
    C !== "-" && R.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: C,
      payload: M,
      dataKey: b,
      type: h
    });
    var N = zo({
      axis: t,
      ticks: c,
      bandSize: x,
      entry: M,
      index: j,
      dataKey: v
    }), K = zo({
      axis: n,
      ticks: f,
      bandSize: A,
      entry: M,
      index: j,
      dataKey: g
    }), L = C !== "-" ? r.scale(C) : S, B = Math.sqrt(Math.max(L, 0) / Math.PI);
    return qn(qn({}, M), {}, {
      cx: N,
      cy: K,
      x: N - B,
      y: K - B,
      xAxis: t,
      yAxis: n,
      zAxis: r,
      width: 2 * B,
      height: 2 * B,
      size: L,
      node: {
        x: w,
        y: T,
        z: C
      },
      tooltipPayload: R,
      tooltipPosition: {
        x: N,
        y: K
      },
      payload: M
    }, y && y[j] && y[j].props);
  });
  return qn({
    points: E
  }, d);
});
function Fo(e) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e);
}
function xY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, YP(r.key), r);
  }
}
function _Y(e, t, n) {
  return t && SY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function OY(e, t, n) {
  return t = Qf(t), wY(e, HP() ? Reflect.construct(t, n || [], Qf(e).constructor) : t.apply(e, n));
}
function wY(e, t) {
  if (t && (Fo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AY(e);
}
function AY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (HP = function() {
    return !!e;
  })();
}
function Qf(e) {
  return Qf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qf(e);
}
function TY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && x0(e, t);
}
function x0(e, t) {
  return x0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, x0(e, t);
}
function GP(e, t, n) {
  return t = YP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function YP(e) {
  var t = EY(e, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function EY(e, t) {
  if (Fo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Fo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function S0() {
  return S0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, S0.apply(this, arguments);
}
function jY(e) {
  var t = e.xAxisId, n = M1(), r = C1(), o = xP(t);
  return o == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ ee.createElement(lu, S0({}, o, {
      className: $e("recharts-".concat(o.axisType, " ").concat(o.axisType), o.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: r
      },
      ticksGenerator: function(c) {
        return Br(c, !0);
      }
    }))
  );
}
var lr = /* @__PURE__ */ (function(e) {
  function t() {
    return xY(this, t), OY(this, t, arguments);
  }
  return TY(t, e), _Y(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ ee.createElement(jY, this.props);
    }
  }]);
})(ee.Component);
GP(lr, "displayName", "XAxis");
GP(lr, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function Wo(e) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e);
}
function MY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, VP(r.key), r);
  }
}
function DY(e, t, n) {
  return t && CY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PY(e, t, n) {
  return t = Jf(t), NY(e, KP() ? Reflect.construct(t, n || [], Jf(e).constructor) : t.apply(e, n));
}
function NY(e, t) {
  if (t && (Wo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return RY(e);
}
function RY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KP = function() {
    return !!e;
  })();
}
function Jf(e) {
  return Jf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Jf(e);
}
function $Y(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _0(e, t);
}
function _0(e, t) {
  return _0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, _0(e, t);
}
function XP(e, t, n) {
  return t = VP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function VP(e) {
  var t = zY(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function zY(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function O0() {
  return O0 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, O0.apply(this, arguments);
}
var qY = function(t) {
  var n = t.yAxisId, r = M1(), o = C1(), l = SP(n);
  return l == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ ee.createElement(lu, O0({}, l, {
      className: $e("recharts-".concat(l.axisType, " ").concat(l.axisType), l.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: o
      },
      ticksGenerator: function(f) {
        return Br(f, !0);
      }
    }))
  );
}, cr = /* @__PURE__ */ (function(e) {
  function t() {
    return MY(this, t), PY(this, t, arguments);
  }
  return $Y(t, e), DY(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ ee.createElement(qY, this.props);
    }
  }]);
})(ee.Component);
XP(cr, "displayName", "YAxis");
XP(cr, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function SM(e) {
  return UY(e) || LY(e) || kY(e) || BY();
}
function BY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kY(e, t) {
  if (e) {
    if (typeof e == "string") return w0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w0(e, t);
  }
}
function LY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function UY(e) {
  if (Array.isArray(e)) return w0(e);
}
function w0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var A0 = function(t, n, r, o, l) {
  var c = on(t, Dd), f = on(t, Nd), d = [].concat(SM(c), SM(f)), h = on(t, $d), y = "".concat(o, "Id"), v = o[0], g = n;
  if (d.length && (g = d.reduce(function(S, x) {
    if (x.props[y] === r && dr(x.props, "extendDomain") && de(x.props[v])) {
      var A = x.props[v];
      return [Math.min(S[0], A), Math.max(S[1], A)];
    }
    return S;
  }, g)), h.length) {
    var b = "".concat(v, "1"), _ = "".concat(v, "2");
    g = h.reduce(function(S, x) {
      if (x.props[y] === r && dr(x.props, "extendDomain") && de(x.props[b]) && de(x.props[_])) {
        var A = x.props[b], E = x.props[_];
        return [Math.min(S[0], A, E), Math.max(S[1], A, E)];
      }
      return S;
    }, g);
  }
  return l && l.length && (g = l.reduce(function(S, x) {
    return de(x) ? [Math.min(S[0], x), Math.max(S[1], x)] : S;
  }, g)), g;
}, eb = { exports: {} }, _M;
function IY() {
  return _M || (_M = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, n = "~";
    function r() {
    }
    Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
    function o(d, h, y) {
      this.fn = d, this.context = h, this.once = y || !1;
    }
    function l(d, h, y, v, g) {
      if (typeof y != "function")
        throw new TypeError("The listener must be a function");
      var b = new o(y, v || d, g), _ = n ? n + h : h;
      return d._events[_] ? d._events[_].fn ? d._events[_] = [d._events[_], b] : d._events[_].push(b) : (d._events[_] = b, d._eventsCount++), d;
    }
    function c(d, h) {
      --d._eventsCount === 0 ? d._events = new r() : delete d._events[h];
    }
    function f() {
      this._events = new r(), this._eventsCount = 0;
    }
    f.prototype.eventNames = function() {
      var h = [], y, v;
      if (this._eventsCount === 0) return h;
      for (v in y = this._events)
        t.call(y, v) && h.push(n ? v.slice(1) : v);
      return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(y)) : h;
    }, f.prototype.listeners = function(h) {
      var y = n ? n + h : h, v = this._events[y];
      if (!v) return [];
      if (v.fn) return [v.fn];
      for (var g = 0, b = v.length, _ = new Array(b); g < b; g++)
        _[g] = v[g].fn;
      return _;
    }, f.prototype.listenerCount = function(h) {
      var y = n ? n + h : h, v = this._events[y];
      return v ? v.fn ? 1 : v.length : 0;
    }, f.prototype.emit = function(h, y, v, g, b, _) {
      var S = n ? n + h : h;
      if (!this._events[S]) return !1;
      var x = this._events[S], A = arguments.length, E, M;
      if (x.fn) {
        switch (x.once && this.removeListener(h, x.fn, void 0, !0), A) {
          case 1:
            return x.fn.call(x.context), !0;
          case 2:
            return x.fn.call(x.context, y), !0;
          case 3:
            return x.fn.call(x.context, y, v), !0;
          case 4:
            return x.fn.call(x.context, y, v, g), !0;
          case 5:
            return x.fn.call(x.context, y, v, g, b), !0;
          case 6:
            return x.fn.call(x.context, y, v, g, b, _), !0;
        }
        for (M = 1, E = new Array(A - 1); M < A; M++)
          E[M - 1] = arguments[M];
        x.fn.apply(x.context, E);
      } else {
        var j = x.length, w;
        for (M = 0; M < j; M++)
          switch (x[M].once && this.removeListener(h, x[M].fn, void 0, !0), A) {
            case 1:
              x[M].fn.call(x[M].context);
              break;
            case 2:
              x[M].fn.call(x[M].context, y);
              break;
            case 3:
              x[M].fn.call(x[M].context, y, v);
              break;
            case 4:
              x[M].fn.call(x[M].context, y, v, g);
              break;
            default:
              if (!E) for (w = 1, E = new Array(A - 1); w < A; w++)
                E[w - 1] = arguments[w];
              x[M].fn.apply(x[M].context, E);
          }
      }
      return !0;
    }, f.prototype.on = function(h, y, v) {
      return l(this, h, y, v, !1);
    }, f.prototype.once = function(h, y, v) {
      return l(this, h, y, v, !0);
    }, f.prototype.removeListener = function(h, y, v, g) {
      var b = n ? n + h : h;
      if (!this._events[b]) return this;
      if (!y)
        return c(this, b), this;
      var _ = this._events[b];
      if (_.fn)
        _.fn === y && (!g || _.once) && (!v || _.context === v) && c(this, b);
      else {
        for (var S = 0, x = [], A = _.length; S < A; S++)
          (_[S].fn !== y || g && !_[S].once || v && _[S].context !== v) && x.push(_[S]);
        x.length ? this._events[b] = x.length === 1 ? x[0] : x : c(this, b);
      }
      return this;
    }, f.prototype.removeAllListeners = function(h) {
      var y;
      return h ? (y = n ? n + h : h, this._events[y] && c(this, y)) : (this._events = new r(), this._eventsCount = 0), this;
    }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = n, f.EventEmitter = f, e.exports = f;
  })(eb)), eb.exports;
}
var HY = IY();
const GY = /* @__PURE__ */ et(HY);
var tb = new GY(), nb = "recharts.syncMouseEvents";
function lc(e) {
  "@babel/helpers - typeof";
  return lc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lc(e);
}
function YY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function KY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, FP(r.key), r);
  }
}
function XY(e, t, n) {
  return t && KY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rb(e, t, n) {
  return t = FP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function FP(e) {
  var t = VY(e, "string");
  return lc(t) == "symbol" ? t : t + "";
}
function VY(e, t) {
  if (lc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (lc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var FY = /* @__PURE__ */ (function() {
  function e() {
    YY(this, e), rb(this, "activeIndex", 0), rb(this, "coordinateList", []), rb(this, "layout", "horizontal");
  }
  return XY(e, [{
    key: "setDetails",
    value: function(n) {
      var r, o = n.coordinateList, l = o === void 0 ? null : o, c = n.container, f = c === void 0 ? null : c, d = n.layout, h = d === void 0 ? null : d, y = n.offset, v = y === void 0 ? null : y, g = n.mouseHandlerCallback, b = g === void 0 ? null : g;
      this.coordinateList = (r = l ?? this.coordinateList) !== null && r !== void 0 ? r : [], this.container = f ?? this.container, this.layout = h ?? this.layout, this.offset = v ?? this.offset, this.mouseHandlerCallback = b ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(n) {
      if (this.coordinateList.length !== 0)
        switch (n.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(n) {
      this.activeIndex = n;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var n, r;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var o = this.container.getBoundingClientRect(), l = o.x, c = o.y, f = o.height, d = this.coordinateList[this.activeIndex].coordinate, h = ((n = window) === null || n === void 0 ? void 0 : n.scrollX) || 0, y = ((r = window) === null || r === void 0 ? void 0 : r.scrollY) || 0, v = l + d + h, g = c + this.offset.top + f / 2 + y;
        this.mouseHandlerCallback({
          pageX: v,
          pageY: g
        });
      }
    }
  }]);
})();
function WY(e, t, n) {
  if (n === "number" && t === !0 && Array.isArray(e)) {
    var r = e == null ? void 0 : e[0], o = e == null ? void 0 : e[1];
    if (r && o && de(r) && de(o))
      return !0;
  }
  return !1;
}
function ZY(e, t, n, r) {
  var o = r / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - o : n.left + 0.5,
    y: e === "horizontal" ? n.top + 0.5 : t.y - o,
    width: e === "horizontal" ? r : n.width - 1,
    height: e === "horizontal" ? n.height - 1 : r
  };
}
function WP(e) {
  var t = e.cx, n = e.cy, r = e.radius, o = e.startAngle, l = e.endAngle, c = Lt(t, n, r, o), f = Lt(t, n, r, l);
  return {
    points: [c, f],
    cx: t,
    cy: n,
    radius: r,
    startAngle: o,
    endAngle: l
  };
}
function QY(e, t, n) {
  var r, o, l, c;
  if (e === "horizontal")
    r = t.x, l = r, o = n.top, c = n.top + n.height;
  else if (e === "vertical")
    o = t.y, c = o, r = n.left, l = n.left + n.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var f = t.cx, d = t.cy, h = t.innerRadius, y = t.outerRadius, v = t.angle, g = Lt(f, d, h, v), b = Lt(f, d, y, v);
      r = g.x, o = g.y, l = b.x, c = b.y;
    } else
      return WP(t);
  return [{
    x: r,
    y: o
  }, {
    x: l,
    y: c
  }];
}
function cc(e) {
  "@babel/helpers - typeof";
  return cc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cc(e);
}
function OM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? OM(Object(n), !0).forEach(function(r) {
      JY(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : OM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function JY(e, t, n) {
  return t = eK(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function eK(e) {
  var t = tK(e, "string");
  return cc(t) == "symbol" ? t : t + "";
}
function tK(e, t) {
  if (cc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (cc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nK(e) {
  var t, n, r = e.element, o = e.tooltipEventType, l = e.isActive, c = e.activeCoordinate, f = e.activePayload, d = e.offset, h = e.activeTooltipIndex, y = e.tooltipAxisBandSize, v = e.layout, g = e.chartName, b = (t = r.props.cursor) !== null && t !== void 0 ? t : (n = r.type.defaultProps) === null || n === void 0 ? void 0 : n.cursor;
  if (!r || !b || !l || !c || g !== "ScatterChart" && o !== "axis")
    return null;
  var _, S = di;
  if (g === "ScatterChart")
    _ = c, S = T9;
  else if (g === "BarChart")
    _ = ZY(v, c, d, y), S = A1;
  else if (v === "radial") {
    var x = WP(c), A = x.cx, E = x.cy, M = x.radius, j = x.startAngle, w = x.endAngle;
    _ = {
      cx: A,
      cy: E,
      startAngle: j,
      endAngle: w,
      innerRadius: M,
      outerRadius: M
    }, S = WD;
  } else
    _ = {
      points: QY(v, c, d)
    }, S = di;
  var T = Vs(Vs(Vs(Vs({
    stroke: "#ccc",
    pointerEvents: "none"
  }, d), _), Te(b, !1)), {}, {
    payload: f,
    payloadIndex: h,
    className: $e("recharts-tooltip-cursor", b.className)
  });
  return /* @__PURE__ */ ee.isValidElement(b) ? /* @__PURE__ */ ee.cloneElement(b, T) : /* @__PURE__ */ ee.createElement(S, T);
}
var rK = ["item"], aK = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Zo(e) {
  "@babel/helpers - typeof";
  return Zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zo(e);
}
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xo.apply(this, arguments);
}
function wM(e, t) {
  return uK(e) || oK(e, t) || QP(e, t) || iK();
}
function iK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oK(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, c, f = [], d = !0, h = !1;
    try {
      if (l = (n = n.call(e)).next, t !== 0) for (; !(d = (r = l.call(n)).done) && (f.push(r.value), f.length !== t); d = !0) ;
    } catch (y) {
      h = !0, o = y;
    } finally {
      try {
        if (!d && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (h) throw o;
      }
    }
    return f;
  }
}
function uK(e) {
  if (Array.isArray(e)) return e;
}
function AM(e, t) {
  if (e == null) return {};
  var n = lK(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function lK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function cK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sK(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, JP(r.key), r);
  }
}
function fK(e, t, n) {
  return t && sK(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dK(e, t, n) {
  return t = ed(t), hK(e, ZP() ? Reflect.construct(t, n || [], ed(e).constructor) : t.apply(e, n));
}
function hK(e, t) {
  if (t && (Zo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pK(e);
}
function pK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZP = function() {
    return !!e;
  })();
}
function ed(e) {
  return ed = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ed(e);
}
function vK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && T0(e, t);
}
function T0(e, t) {
  return T0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, T0(e, t);
}
function Qo(e) {
  return gK(e) || mK(e) || QP(e) || yK();
}
function yK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QP(e, t) {
  if (e) {
    if (typeof e == "string") return E0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E0(e, t);
  }
}
function mK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gK(e) {
  if (Array.isArray(e)) return E0(e);
}
function E0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function TM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? TM(Object(n), !0).forEach(function(r) {
      Se(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : TM(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Se(e, t, n) {
  return t = JP(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function JP(e) {
  var t = bK(e, "string");
  return Zo(t) == "symbol" ? t : t + "";
}
function bK(e, t) {
  if (Zo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Zo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xK = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, SK = {
  width: "100%",
  height: "100%"
}, eN = {
  x: 0,
  y: 0
};
function Fs(e) {
  return e;
}
var _K = function(t, n) {
  return n === "horizontal" ? t.x : n === "vertical" ? t.y : n === "centric" ? t.angle : t.radius;
}, OK = function(t, n, r, o) {
  var l = n.find(function(y) {
    return y && y.index === r;
  });
  if (l) {
    if (t === "horizontal")
      return {
        x: l.coordinate,
        y: o.y
      };
    if (t === "vertical")
      return {
        x: o.x,
        y: l.coordinate
      };
    if (t === "centric") {
      var c = l.coordinate, f = o.radius;
      return ie(ie(ie({}, o), Lt(o.cx, o.cy, f, c)), {}, {
        angle: c,
        radius: f
      });
    }
    var d = l.coordinate, h = o.angle;
    return ie(ie(ie({}, o), Lt(o.cx, o.cy, d, h)), {}, {
      angle: h,
      radius: d
    });
  }
  return eN;
}, Bd = function(t, n) {
  var r = n.graphicalItems, o = n.dataStartIndex, l = n.dataEndIndex, c = (r ?? []).reduce(function(f, d) {
    var h = d.props.data;
    return h && h.length ? [].concat(Qo(f), Qo(h)) : f;
  }, []);
  return c.length > 0 ? c : t && t.length && de(o) && de(l) ? t.slice(o, l + 1) : [];
};
function tN(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var j0 = function(t, n, r, o) {
  var l = t.graphicalItems, c = t.tooltipAxis, f = Bd(n, t);
  return r < 0 || !l || !l.length || r >= f.length ? null : l.reduce(function(d, h) {
    var y, v = (y = h.props.data) !== null && y !== void 0 ? y : n;
    v && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= r && (v = v.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var g;
    if (c.dataKey && !c.allowDuplicatedCategory) {
      var b = v === void 0 ? f : v;
      g = ef(b, c.dataKey, o);
    } else
      g = v && v[r] || f[r];
    return g ? [].concat(Qo(d), [XD(h, g)]) : d;
  }, []);
}, EM = function(t, n, r, o) {
  var l = o || {
    x: t.chartX,
    y: t.chartY
  }, c = _K(l, r), f = t.orderedTooltipTicks, d = t.tooltipAxis, h = t.tooltipTicks, y = rL(c, f, h, d);
  if (y >= 0 && h) {
    var v = h[y] && h[y].value, g = j0(t, n, y, v), b = OK(r, f, y, l);
    return {
      activeTooltipIndex: y,
      activeLabel: v,
      activePayload: g,
      activeCoordinate: b
    };
  }
  return null;
}, wK = function(t, n) {
  var r = n.axes, o = n.graphicalItems, l = n.axisType, c = n.axisIdKey, f = n.stackGroups, d = n.dataStartIndex, h = n.dataEndIndex, y = t.layout, v = t.children, g = t.stackOffset, b = GD(y, l);
  return r.reduce(function(_, S) {
    var x, A = S.type.defaultProps !== void 0 ? ie(ie({}, S.type.defaultProps), S.props) : S.props, E = A.type, M = A.dataKey, j = A.allowDataOverflow, w = A.allowDuplicatedCategory, T = A.scale, C = A.ticks, R = A.includeHidden, N = A[c];
    if (_[N])
      return _;
    var K = Bd(t.data, {
      graphicalItems: o.filter(function(U) {
        var re, se = c in U.props ? U.props[c] : (re = U.type.defaultProps) === null || re === void 0 ? void 0 : re[c];
        return se === N;
      }),
      dataStartIndex: d,
      dataEndIndex: h
    }), L = K.length, B, F, G;
    WY(A.domain, j, E) && (B = Ib(A.domain, null, j), b && (E === "number" || T !== "auto") && (G = xl(K, M, "category")));
    var V = tN(E);
    if (!B || B.length === 0) {
      var $, Y = ($ = A.domain) !== null && $ !== void 0 ? $ : V;
      if (M) {
        if (B = xl(K, M, E), E === "category" && b) {
          var ne = V$(B);
          w && ne ? (F = B, B = Bf(0, L)) : w || (B = $2(Y, B, S).reduce(function(U, re) {
            return U.indexOf(re) >= 0 ? U : [].concat(Qo(U), [re]);
          }, []));
        } else if (E === "category")
          w ? B = B.filter(function(U) {
            return U !== "" && !we(U);
          }) : B = $2(Y, B, S).reduce(function(U, re) {
            return U.indexOf(re) >= 0 || re === "" || we(re) ? U : [].concat(Qo(U), [re]);
          }, []);
        else if (E === "number") {
          var H = lL(K, o.filter(function(U) {
            var re, se, pe = c in U.props ? U.props[c] : (re = U.type.defaultProps) === null || re === void 0 ? void 0 : re[c], fe = "hide" in U.props ? U.props.hide : (se = U.type.defaultProps) === null || se === void 0 ? void 0 : se.hide;
            return pe === N && (R || !fe);
          }), M, l, y);
          H && (B = H);
        }
        b && (E === "number" || T !== "auto") && (G = xl(K, M, "category"));
      } else b ? B = Bf(0, L) : f && f[N] && f[N].hasStack && E === "number" ? B = g === "expand" ? [0, 1] : KD(f[N].stackGroups, d, h) : B = HD(K, o.filter(function(U) {
        var re = c in U.props ? U.props[c] : U.type.defaultProps[c], se = "hide" in U.props ? U.props.hide : U.type.defaultProps.hide;
        return re === N && (R || !se);
      }), E, y, !0);
      if (E === "number")
        B = A0(v, B, N, l, C), Y && (B = Ib(Y, B, j));
      else if (E === "category" && Y) {
        var J = Y, P = B.every(function(U) {
          return J.indexOf(U) >= 0;
        });
        P && (B = J);
      }
    }
    return ie(ie({}, _), {}, Se({}, N, ie(ie({}, A), {}, {
      axisType: l,
      domain: B,
      categoricalDomain: G,
      duplicateDomain: F,
      originalDomain: (x = A.domain) !== null && x !== void 0 ? x : V,
      isCategorical: b,
      layout: y
    })));
  }, {});
}, AK = function(t, n) {
  var r = n.graphicalItems, o = n.Axis, l = n.axisType, c = n.axisIdKey, f = n.stackGroups, d = n.dataStartIndex, h = n.dataEndIndex, y = t.layout, v = t.children, g = Bd(t.data, {
    graphicalItems: r,
    dataStartIndex: d,
    dataEndIndex: h
  }), b = g.length, _ = GD(y, l), S = -1;
  return r.reduce(function(x, A) {
    var E = A.type.defaultProps !== void 0 ? ie(ie({}, A.type.defaultProps), A.props) : A.props, M = E[c], j = tN("number");
    if (!x[M]) {
      S++;
      var w;
      return _ ? w = Bf(0, b) : f && f[M] && f[M].hasStack ? (w = KD(f[M].stackGroups, d, h), w = A0(v, w, M, l)) : (w = Ib(j, HD(g, r.filter(function(T) {
        var C, R, N = c in T.props ? T.props[c] : (C = T.type.defaultProps) === null || C === void 0 ? void 0 : C[c], K = "hide" in T.props ? T.props.hide : (R = T.type.defaultProps) === null || R === void 0 ? void 0 : R.hide;
        return N === M && !K;
      }), "number", y), o.defaultProps.allowDataOverflow), w = A0(v, w, M, l)), ie(ie({}, x), {}, Se({}, M, ie(ie({
        axisType: l
      }, o.defaultProps), {}, {
        hide: !0,
        orientation: kn(xK, "".concat(l, ".").concat(S % 2), null),
        domain: w,
        originalDomain: j,
        isCategorical: _,
        layout: y
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return x;
  }, {});
}, TK = function(t, n) {
  var r = n.axisType, o = r === void 0 ? "xAxis" : r, l = n.AxisComp, c = n.graphicalItems, f = n.stackGroups, d = n.dataStartIndex, h = n.dataEndIndex, y = t.children, v = "".concat(o, "Id"), g = on(y, l), b = {};
  return g && g.length ? b = wK(t, {
    axes: g,
    graphicalItems: c,
    axisType: o,
    axisIdKey: v,
    stackGroups: f,
    dataStartIndex: d,
    dataEndIndex: h
  }) : c && c.length && (b = AK(t, {
    Axis: l,
    graphicalItems: c,
    axisType: o,
    axisIdKey: v,
    stackGroups: f,
    dataStartIndex: d,
    dataEndIndex: h
  })), b;
}, EK = function(t) {
  var n = Aa(t), r = Br(n, !1, !0);
  return {
    tooltipTicks: r,
    orderedTooltipTicks: Q0(r, function(o) {
      return o.coordinate;
    }),
    tooltipAxis: n,
    tooltipAxisBandSize: jf(n, r)
  };
}, jM = function(t) {
  var n = t.children, r = t.defaultShowTooltip, o = bn(n, ko), l = 0, c = 0;
  return t.data && t.data.length !== 0 && (c = t.data.length - 1), o && o.props && (o.props.startIndex >= 0 && (l = o.props.startIndex), o.props.endIndex >= 0 && (c = o.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: l,
    dataEndIndex: c,
    activeTooltipIndex: -1,
    isTooltipActive: !!r
  };
}, jK = function(t) {
  return !t || !t.length ? !1 : t.some(function(n) {
    var r = Lr(n && n.type);
    return r && r.indexOf("Bar") >= 0;
  });
}, MM = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, MK = function(t, n) {
  var r = t.props, o = t.graphicalItems, l = t.xAxisMap, c = l === void 0 ? {} : l, f = t.yAxisMap, d = f === void 0 ? {} : f, h = r.width, y = r.height, v = r.children, g = r.margin || {}, b = bn(v, ko), _ = bn(v, Oo), S = Object.keys(d).reduce(function(w, T) {
    var C = d[T], R = C.orientation;
    return !C.mirror && !C.hide ? ie(ie({}, w), {}, Se({}, R, w[R] + C.width)) : w;
  }, {
    left: g.left || 0,
    right: g.right || 0
  }), x = Object.keys(c).reduce(function(w, T) {
    var C = c[T], R = C.orientation;
    return !C.mirror && !C.hide ? ie(ie({}, w), {}, Se({}, R, kn(w, "".concat(R)) + C.height)) : w;
  }, {
    top: g.top || 0,
    bottom: g.bottom || 0
  }), A = ie(ie({}, x), S), E = A.bottom;
  b && (A.bottom += b.props.height || ko.defaultProps.height), _ && n && (A = oL(A, o, r, n));
  var M = h - A.left - A.right, j = y - A.top - A.bottom;
  return ie(ie({
    brushBottom: E
  }, A), {}, {
    // never return negative values for height and width
    width: Math.max(M, 0),
    height: Math.max(j, 0)
  });
}, CK = function(t, n) {
  if (n === "xAxis")
    return t[n].width;
  if (n === "yAxis")
    return t[n].height;
}, kd = function(t) {
  var n = t.chartName, r = t.GraphicalChild, o = t.defaultTooltipEventType, l = o === void 0 ? "axis" : o, c = t.validateTooltipEventTypes, f = c === void 0 ? ["axis"] : c, d = t.axisComponents, h = t.legendContent, y = t.formatAxisMap, v = t.defaultProps, g = function(A, E) {
    var M = E.graphicalItems, j = E.stackGroups, w = E.offset, T = E.updateId, C = E.dataStartIndex, R = E.dataEndIndex, N = A.barSize, K = A.layout, L = A.barGap, B = A.barCategoryGap, F = A.maxBarSize, G = MM(K), V = G.numericAxisName, $ = G.cateAxisName, Y = jK(M), ne = [];
    return M.forEach(function(H, J) {
      var P = Bd(A.data, {
        graphicalItems: [H],
        dataStartIndex: C,
        dataEndIndex: R
      }), U = H.type.defaultProps !== void 0 ? ie(ie({}, H.type.defaultProps), H.props) : H.props, re = U.dataKey, se = U.maxBarSize, pe = U["".concat(V, "Id")], fe = U["".concat($, "Id")], _e = {}, Ce = d.reduce(function(Pt, On) {
        var cu = E["".concat(On.axisType, "Map")], Ut = U["".concat(On.axisType, "Id")];
        cu && cu[Ut] || On.axisType === "zAxis" || mi();
        var yc = cu[Ut];
        return ie(ie({}, Pt), {}, Se(Se({}, On.axisType, yc), "".concat(On.axisType, "Ticks"), Br(yc)));
      }, _e), ce = Ce[$], he = Ce["".concat($, "Ticks")], ge = j && j[pe] && j[pe].hasStack && xL(H, j[pe].stackGroups), le = Lr(H.type).indexOf("Bar") >= 0, ze = jf(ce, he), Oe = [], Xe = Y && aL({
        barSize: N,
        stackGroups: j,
        totalSize: CK(Ce, $)
      });
      if (le) {
        var nt, Et, Xt = we(se) ? F : se, Wt = (nt = (Et = jf(ce, he, !0)) !== null && Et !== void 0 ? Et : Xt) !== null && nt !== void 0 ? nt : 0;
        Oe = iL({
          barGap: L,
          barCategoryGap: B,
          bandSize: Wt !== ze ? Wt : ze,
          sizeList: Xe[fe],
          maxBarSize: Xt
        }), Wt !== ze && (Oe = Oe.map(function(Pt) {
          return ie(ie({}, Pt), {}, {
            position: ie(ie({}, Pt.position), {}, {
              offset: Pt.position.offset - Wt / 2
            })
          });
        }));
      }
      var _n = H && H.type && H.type.getComposedData;
      _n && ne.push({
        props: ie(ie({}, _n(ie(ie({}, Ce), {}, {
          displayedData: P,
          props: A,
          dataKey: re,
          item: H,
          bandSize: ze,
          barPosition: Oe,
          offset: w,
          stackedData: ge,
          layout: K,
          dataStartIndex: C,
          dataEndIndex: R
        }))), {}, Se(Se(Se({
          key: H.key || "item-".concat(J)
        }, V, Ce[V]), $, Ce[$]), "animationId", T)),
        childIndex: uz(H, A.children),
        item: H
      });
    }), ne;
  }, b = function(A, E) {
    var M = A.props, j = A.dataStartIndex, w = A.dataEndIndex, T = A.updateId;
    if (!Ww({
      props: M
    }))
      return null;
    var C = M.children, R = M.layout, N = M.stackOffset, K = M.data, L = M.reverseStackOrder, B = MM(R), F = B.numericAxisName, G = B.cateAxisName, V = on(C, r), $ = mL(K, V, "".concat(F, "Id"), "".concat(G, "Id"), N, L), Y = d.reduce(function(U, re) {
      var se = "".concat(re.axisType, "Map");
      return ie(ie({}, U), {}, Se({}, se, TK(M, ie(ie({}, re), {}, {
        graphicalItems: V,
        stackGroups: re.axisType === F && $,
        dataStartIndex: j,
        dataEndIndex: w
      }))));
    }, {}), ne = MK(ie(ie({}, Y), {}, {
      props: M,
      graphicalItems: V
    }), E == null ? void 0 : E.legendBBox);
    Object.keys(Y).forEach(function(U) {
      Y[U] = y(M, Y[U], ne, U.replace("Map", ""), n);
    });
    var H = Y["".concat(G, "Map")], J = EK(H), P = g(M, ie(ie({}, Y), {}, {
      dataStartIndex: j,
      dataEndIndex: w,
      updateId: T,
      graphicalItems: V,
      stackGroups: $,
      offset: ne
    }));
    return ie(ie({
      formattedGraphicalItems: P,
      graphicalItems: V,
      offset: ne,
      stackGroups: $
    }, J), Y);
  }, _ = /* @__PURE__ */ (function(x) {
    function A(E) {
      var M, j, w;
      return cK(this, A), w = dK(this, A, [E]), Se(w, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Se(w, "accessibilityManager", new FY()), Se(w, "handleLegendBBoxUpdate", function(T) {
        if (T) {
          var C = w.state, R = C.dataStartIndex, N = C.dataEndIndex, K = C.updateId;
          w.setState(ie({
            legendBBox: T
          }, b({
            props: w.props,
            dataStartIndex: R,
            dataEndIndex: N,
            updateId: K
          }, ie(ie({}, w.state), {}, {
            legendBBox: T
          }))));
        }
      }), Se(w, "handleReceiveSyncEvent", function(T, C, R) {
        if (w.props.syncId === T) {
          if (R === w.eventEmitterSymbol && typeof w.props.syncMethod != "function")
            return;
          w.applySyncEvent(C);
        }
      }), Se(w, "handleBrushChange", function(T) {
        var C = T.startIndex, R = T.endIndex;
        if (C !== w.state.dataStartIndex || R !== w.state.dataEndIndex) {
          var N = w.state.updateId;
          w.setState(function() {
            return ie({
              dataStartIndex: C,
              dataEndIndex: R
            }, b({
              props: w.props,
              dataStartIndex: C,
              dataEndIndex: R,
              updateId: N
            }, w.state));
          }), w.triggerSyncEvent({
            dataStartIndex: C,
            dataEndIndex: R
          });
        }
      }), Se(w, "handleMouseEnter", function(T) {
        var C = w.getMouseInfo(T);
        if (C) {
          var R = ie(ie({}, C), {}, {
            isTooltipActive: !0
          });
          w.setState(R), w.triggerSyncEvent(R);
          var N = w.props.onMouseEnter;
          Ee(N) && N(R, T);
        }
      }), Se(w, "triggeredAfterMouseMove", function(T) {
        var C = w.getMouseInfo(T), R = C ? ie(ie({}, C), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        w.setState(R), w.triggerSyncEvent(R);
        var N = w.props.onMouseMove;
        Ee(N) && N(R, T);
      }), Se(w, "handleItemMouseEnter", function(T) {
        w.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: T,
            activePayload: T.tooltipPayload,
            activeCoordinate: T.tooltipPosition || {
              x: T.cx,
              y: T.cy
            }
          };
        });
      }), Se(w, "handleItemMouseLeave", function() {
        w.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), Se(w, "handleMouseMove", function(T) {
        T.persist(), w.throttleTriggeredAfterMouseMove(T);
      }), Se(w, "handleMouseLeave", function(T) {
        w.throttleTriggeredAfterMouseMove.cancel();
        var C = {
          isTooltipActive: !1
        };
        w.setState(C), w.triggerSyncEvent(C);
        var R = w.props.onMouseLeave;
        Ee(R) && R(C, T);
      }), Se(w, "handleOuterEvent", function(T) {
        var C = oz(T), R = kn(w.props, "".concat(C));
        if (C && Ee(R)) {
          var N, K;
          /.*touch.*/i.test(C) ? K = w.getMouseInfo(T.changedTouches[0]) : K = w.getMouseInfo(T), R((N = K) !== null && N !== void 0 ? N : {}, T);
        }
      }), Se(w, "handleClick", function(T) {
        var C = w.getMouseInfo(T);
        if (C) {
          var R = ie(ie({}, C), {}, {
            isTooltipActive: !0
          });
          w.setState(R), w.triggerSyncEvent(R);
          var N = w.props.onClick;
          Ee(N) && N(R, T);
        }
      }), Se(w, "handleMouseDown", function(T) {
        var C = w.props.onMouseDown;
        if (Ee(C)) {
          var R = w.getMouseInfo(T);
          C(R, T);
        }
      }), Se(w, "handleMouseUp", function(T) {
        var C = w.props.onMouseUp;
        if (Ee(C)) {
          var R = w.getMouseInfo(T);
          C(R, T);
        }
      }), Se(w, "handleTouchMove", function(T) {
        T.changedTouches != null && T.changedTouches.length > 0 && w.throttleTriggeredAfterMouseMove(T.changedTouches[0]);
      }), Se(w, "handleTouchStart", function(T) {
        T.changedTouches != null && T.changedTouches.length > 0 && w.handleMouseDown(T.changedTouches[0]);
      }), Se(w, "handleTouchEnd", function(T) {
        T.changedTouches != null && T.changedTouches.length > 0 && w.handleMouseUp(T.changedTouches[0]);
      }), Se(w, "handleDoubleClick", function(T) {
        var C = w.props.onDoubleClick;
        if (Ee(C)) {
          var R = w.getMouseInfo(T);
          C(R, T);
        }
      }), Se(w, "handleContextMenu", function(T) {
        var C = w.props.onContextMenu;
        if (Ee(C)) {
          var R = w.getMouseInfo(T);
          C(R, T);
        }
      }), Se(w, "triggerSyncEvent", function(T) {
        w.props.syncId !== void 0 && tb.emit(nb, w.props.syncId, T, w.eventEmitterSymbol);
      }), Se(w, "applySyncEvent", function(T) {
        var C = w.props, R = C.layout, N = C.syncMethod, K = w.state.updateId, L = T.dataStartIndex, B = T.dataEndIndex;
        if (T.dataStartIndex !== void 0 || T.dataEndIndex !== void 0)
          w.setState(ie({
            dataStartIndex: L,
            dataEndIndex: B
          }, b({
            props: w.props,
            dataStartIndex: L,
            dataEndIndex: B,
            updateId: K
          }, w.state)));
        else if (T.activeTooltipIndex !== void 0) {
          var F = T.chartX, G = T.chartY, V = T.activeTooltipIndex, $ = w.state, Y = $.offset, ne = $.tooltipTicks;
          if (!Y)
            return;
          if (typeof N == "function")
            V = N(ne, T);
          else if (N === "value") {
            V = -1;
            for (var H = 0; H < ne.length; H++)
              if (ne[H].value === T.activeLabel) {
                V = H;
                break;
              }
          }
          var J = ie(ie({}, Y), {}, {
            x: Y.left,
            y: Y.top
          }), P = Math.min(F, J.x + J.width), U = Math.min(G, J.y + J.height), re = ne[V] && ne[V].value, se = j0(w.state, w.props.data, V), pe = ne[V] ? {
            x: R === "horizontal" ? ne[V].coordinate : P,
            y: R === "horizontal" ? U : ne[V].coordinate
          } : eN;
          w.setState(ie(ie({}, T), {}, {
            activeLabel: re,
            activeCoordinate: pe,
            activePayload: se,
            activeTooltipIndex: V
          }));
        } else
          w.setState(T);
      }), Se(w, "renderCursor", function(T) {
        var C, R = w.state, N = R.isTooltipActive, K = R.activeCoordinate, L = R.activePayload, B = R.offset, F = R.activeTooltipIndex, G = R.tooltipAxisBandSize, V = w.getTooltipEventType(), $ = (C = T.props.active) !== null && C !== void 0 ? C : N, Y = w.props.layout, ne = T.key || "_recharts-cursor";
        return /* @__PURE__ */ k.createElement(nK, {
          key: ne,
          activeCoordinate: K,
          activePayload: L,
          activeTooltipIndex: F,
          chartName: n,
          element: T,
          isActive: $,
          layout: Y,
          offset: B,
          tooltipAxisBandSize: G,
          tooltipEventType: V
        });
      }), Se(w, "renderPolarAxis", function(T, C, R) {
        var N = kn(T, "type.axisType"), K = kn(w.state, "".concat(N, "Map")), L = T.type.defaultProps, B = L !== void 0 ? ie(ie({}, L), T.props) : T.props, F = K && K[B["".concat(N, "Id")]];
        return /* @__PURE__ */ ee.cloneElement(T, ie(ie({}, F), {}, {
          className: $e(N, F.className),
          key: T.key || "".concat(C, "-").concat(R),
          ticks: Br(F, !0)
        }));
      }), Se(w, "renderPolarGrid", function(T) {
        var C = T.props, R = C.radialLines, N = C.polarAngles, K = C.polarRadius, L = w.state, B = L.radiusAxisMap, F = L.angleAxisMap, G = Aa(B), V = Aa(F), $ = V.cx, Y = V.cy, ne = V.innerRadius, H = V.outerRadius;
        return /* @__PURE__ */ ee.cloneElement(T, {
          polarAngles: Array.isArray(N) ? N : Br(V, !0).map(function(J) {
            return J.coordinate;
          }),
          polarRadius: Array.isArray(K) ? K : Br(G, !0).map(function(J) {
            return J.coordinate;
          }),
          cx: $,
          cy: Y,
          innerRadius: ne,
          outerRadius: H,
          key: T.key || "polar-grid",
          radialLines: R
        });
      }), Se(w, "renderLegend", function() {
        var T = w.state.formattedGraphicalItems, C = w.props, R = C.children, N = C.width, K = C.height, L = w.props.margin || {}, B = N - (L.left || 0) - (L.right || 0), F = UD({
          children: R,
          formattedGraphicalItems: T,
          legendWidth: B,
          legendContent: h
        });
        if (!F)
          return null;
        var G = F.item, V = AM(F, rK);
        return /* @__PURE__ */ ee.cloneElement(G, ie(ie({}, V), {}, {
          chartWidth: N,
          chartHeight: K,
          margin: L,
          onBBoxUpdate: w.handleLegendBBoxUpdate
        }));
      }), Se(w, "renderTooltip", function() {
        var T, C = w.props, R = C.children, N = C.accessibilityLayer, K = bn(R, xn);
        if (!K)
          return null;
        var L = w.state, B = L.isTooltipActive, F = L.activeCoordinate, G = L.activePayload, V = L.activeLabel, $ = L.offset, Y = (T = K.props.active) !== null && T !== void 0 ? T : B;
        return /* @__PURE__ */ ee.cloneElement(K, {
          viewBox: ie(ie({}, $), {}, {
            x: $.left,
            y: $.top
          }),
          active: Y,
          label: V,
          payload: Y ? G : [],
          coordinate: F,
          accessibilityLayer: N
        });
      }), Se(w, "renderBrush", function(T) {
        var C = w.props, R = C.margin, N = C.data, K = w.state, L = K.offset, B = K.dataStartIndex, F = K.dataEndIndex, G = K.updateId;
        return /* @__PURE__ */ ee.cloneElement(T, {
          key: T.key || "_recharts-brush",
          onChange: Gs(w.handleBrushChange, T.props.onChange),
          data: N,
          x: de(T.props.x) ? T.props.x : L.left,
          y: de(T.props.y) ? T.props.y : L.top + L.height + L.brushBottom - (R.bottom || 0),
          width: de(T.props.width) ? T.props.width : L.width,
          startIndex: B,
          endIndex: F,
          updateId: "brush-".concat(G)
        });
      }), Se(w, "renderReferenceElement", function(T, C, R) {
        if (!T)
          return null;
        var N = w, K = N.clipPathId, L = w.state, B = L.xAxisMap, F = L.yAxisMap, G = L.offset, V = T.type.defaultProps || {}, $ = T.props, Y = $.xAxisId, ne = Y === void 0 ? V.xAxisId : Y, H = $.yAxisId, J = H === void 0 ? V.yAxisId : H;
        return /* @__PURE__ */ ee.cloneElement(T, {
          key: T.key || "".concat(C, "-").concat(R),
          xAxis: B[ne],
          yAxis: F[J],
          viewBox: {
            x: G.left,
            y: G.top,
            width: G.width,
            height: G.height
          },
          clipPathId: K
        });
      }), Se(w, "renderActivePoints", function(T) {
        var C = T.item, R = T.activePoint, N = T.basePoint, K = T.childIndex, L = T.isRange, B = [], F = C.props.key, G = C.item.type.defaultProps !== void 0 ? ie(ie({}, C.item.type.defaultProps), C.item.props) : C.item.props, V = G.activeDot, $ = G.dataKey, Y = ie(ie({
          index: K,
          dataKey: $,
          cx: R.x,
          cy: R.y,
          r: 4,
          fill: w1(C.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: R.payload,
          value: R.value
        }, Te(V, !1)), tf(V));
        return B.push(A.renderActiveDot(V, Y, "".concat(F, "-activePoint-").concat(K))), N ? B.push(A.renderActiveDot(V, ie(ie({}, Y), {}, {
          cx: N.x,
          cy: N.y
        }), "".concat(F, "-basePoint-").concat(K))) : L && B.push(null), B;
      }), Se(w, "renderGraphicChild", function(T, C, R) {
        var N = w.filterFormatItem(T, C, R);
        if (!N)
          return null;
        var K = w.getTooltipEventType(), L = w.state, B = L.isTooltipActive, F = L.tooltipAxis, G = L.activeTooltipIndex, V = L.activeLabel, $ = w.props.children, Y = bn($, xn), ne = N.props, H = ne.points, J = ne.isRange, P = ne.baseLine, U = N.item.type.defaultProps !== void 0 ? ie(ie({}, N.item.type.defaultProps), N.item.props) : N.item.props, re = U.activeDot, se = U.hide, pe = U.activeBar, fe = U.activeShape, _e = !!(!se && B && Y && (re || pe || fe)), Ce = {};
        K !== "axis" && Y && Y.props.trigger === "click" ? Ce = {
          onClick: Gs(w.handleItemMouseEnter, T.props.onClick)
        } : K !== "axis" && (Ce = {
          onMouseLeave: Gs(w.handleItemMouseLeave, T.props.onMouseLeave),
          onMouseEnter: Gs(w.handleItemMouseEnter, T.props.onMouseEnter)
        });
        var ce = /* @__PURE__ */ ee.cloneElement(T, ie(ie({}, N.props), Ce));
        function he(On) {
          return typeof F.dataKey == "function" ? F.dataKey(On.payload) : null;
        }
        if (_e)
          if (G >= 0) {
            var ge, le;
            if (F.dataKey && !F.allowDuplicatedCategory) {
              var ze = typeof F.dataKey == "function" ? he : "payload.".concat(F.dataKey.toString());
              ge = ef(H, ze, V), le = J && P && ef(P, ze, V);
            } else
              ge = H == null ? void 0 : H[G], le = J && P && P[G];
            if (fe || pe) {
              var Oe = T.props.activeIndex !== void 0 ? T.props.activeIndex : G;
              return [/* @__PURE__ */ ee.cloneElement(T, ie(ie(ie({}, N.props), Ce), {}, {
                activeIndex: Oe
              })), null, null];
            }
            if (!we(ge))
              return [ce].concat(Qo(w.renderActivePoints({
                item: N,
                activePoint: ge,
                basePoint: le,
                childIndex: G,
                isRange: J
              })));
          } else {
            var Xe, nt = (Xe = w.getItemByXY(w.state.activeCoordinate)) !== null && Xe !== void 0 ? Xe : {
              graphicalItem: ce
            }, Et = nt.graphicalItem, Xt = Et.item, Wt = Xt === void 0 ? T : Xt, _n = Et.childIndex, Pt = ie(ie(ie({}, N.props), Ce), {}, {
              activeIndex: _n
            });
            return [/* @__PURE__ */ ee.cloneElement(Wt, Pt), null, null];
          }
        return J ? [ce, null, null] : [ce, null];
      }), Se(w, "renderCustomized", function(T, C, R) {
        return /* @__PURE__ */ ee.cloneElement(T, ie(ie({
          key: "recharts-customized-".concat(R)
        }, w.props), w.state));
      }), Se(w, "renderMap", {
        CartesianGrid: {
          handler: Fs,
          once: !0
        },
        ReferenceArea: {
          handler: w.renderReferenceElement
        },
        ReferenceLine: {
          handler: Fs
        },
        ReferenceDot: {
          handler: w.renderReferenceElement
        },
        XAxis: {
          handler: Fs
        },
        YAxis: {
          handler: Fs
        },
        Brush: {
          handler: w.renderBrush,
          once: !0
        },
        Bar: {
          handler: w.renderGraphicChild
        },
        Line: {
          handler: w.renderGraphicChild
        },
        Area: {
          handler: w.renderGraphicChild
        },
        Radar: {
          handler: w.renderGraphicChild
        },
        RadialBar: {
          handler: w.renderGraphicChild
        },
        Scatter: {
          handler: w.renderGraphicChild
        },
        Pie: {
          handler: w.renderGraphicChild
        },
        Funnel: {
          handler: w.renderGraphicChild
        },
        Tooltip: {
          handler: w.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: w.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: w.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: w.renderPolarAxis
        },
        Customized: {
          handler: w.renderCustomized
        }
      }), w.clipPathId = "".concat((M = E.id) !== null && M !== void 0 ? M : xi("recharts"), "-clip"), w.throttleTriggeredAfterMouseMove = IC(w.triggeredAfterMouseMove, (j = E.throttleDelay) !== null && j !== void 0 ? j : 1e3 / 60), w.state = {}, w;
    }
    return vK(A, x), fK(A, [{
      key: "componentDidMount",
      value: function() {
        var M, j;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (M = this.props.margin.left) !== null && M !== void 0 ? M : 0,
            top: (j = this.props.margin.top) !== null && j !== void 0 ? j : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var M = this.props, j = M.children, w = M.data, T = M.height, C = M.layout, R = bn(j, xn);
        if (R) {
          var N = R.props.defaultIndex;
          if (!(typeof N != "number" || N < 0 || N > this.state.tooltipTicks.length - 1)) {
            var K = this.state.tooltipTicks[N] && this.state.tooltipTicks[N].value, L = j0(this.state, w, N, K), B = this.state.tooltipTicks[N].coordinate, F = (this.state.offset.top + T) / 2, G = C === "horizontal", V = G ? {
              x: B,
              y: F
            } : {
              y: B,
              x: F
            }, $ = this.state.formattedGraphicalItems.find(function(ne) {
              var H = ne.item;
              return H.type.name === "Scatter";
            });
            $ && (V = ie(ie({}, V), $.props.points[N].tooltipPosition), L = $.props.points[N].tooltipPayload);
            var Y = {
              activeTooltipIndex: N,
              isTooltipActive: !0,
              activeLabel: K,
              activePayload: L,
              activeCoordinate: V
            };
            this.setState(Y), this.renderCursor(R), this.accessibilityManager.setIndex(N);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(M, j) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== j.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== M.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== M.margin) {
          var w, T;
          this.accessibilityManager.setDetails({
            offset: {
              left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
              top: (T = this.props.margin.top) !== null && T !== void 0 ? T : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(M) {
        sb([bn(M.children, xn)], [bn(this.props.children, xn)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var M = bn(this.props.children, xn);
        if (M && typeof M.props.shared == "boolean") {
          var j = M.props.shared ? "axis" : "item";
          return f.indexOf(j) >= 0 ? j : l;
        }
        return l;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(M) {
        if (!this.container)
          return null;
        var j = this.container, w = j.getBoundingClientRect(), T = X8(w), C = {
          chartX: Math.round(M.pageX - T.left),
          chartY: Math.round(M.pageY - T.top)
        }, R = w.width / j.offsetWidth || 1, N = this.inRange(C.chartX, C.chartY, R);
        if (!N)
          return null;
        var K = this.state, L = K.xAxisMap, B = K.yAxisMap, F = this.getTooltipEventType(), G = EM(this.state, this.props.data, this.props.layout, N);
        if (F !== "axis" && L && B) {
          var V = Aa(L).scale, $ = Aa(B).scale, Y = V && V.invert ? V.invert(C.chartX) : null, ne = $ && $.invert ? $.invert(C.chartY) : null;
          return ie(ie({}, C), {}, {
            xValue: Y,
            yValue: ne
          }, G);
        }
        return G ? ie(ie({}, C), G) : null;
      }
    }, {
      key: "inRange",
      value: function(M, j) {
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, T = this.props.layout, C = M / w, R = j / w;
        if (T === "horizontal" || T === "vertical") {
          var N = this.state.offset, K = C >= N.left && C <= N.left + N.width && R >= N.top && R <= N.top + N.height;
          return K ? {
            x: C,
            y: R
          } : null;
        }
        var L = this.state, B = L.angleAxisMap, F = L.radiusAxisMap;
        if (B && F) {
          var G = Aa(B);
          return B2({
            x: C,
            y: R
          }, G);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var M = this.props.children, j = this.getTooltipEventType(), w = bn(M, xn), T = {};
        w && j === "axis" && (w.props.trigger === "click" ? T = {
          onClick: this.handleClick
        } : T = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var C = tf(this.props, this.handleOuterEvent);
        return ie(ie({}, C), T);
      }
    }, {
      key: "addListener",
      value: function() {
        tb.on(nb, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        tb.removeListener(nb, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(M, j, w) {
        for (var T = this.state.formattedGraphicalItems, C = 0, R = T.length; C < R; C++) {
          var N = T[C];
          if (N.item === M || N.props.key === M.key || j === Lr(N.item.type) && w === N.childIndex)
            return N;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var M = this.clipPathId, j = this.state.offset, w = j.left, T = j.top, C = j.height, R = j.width;
        return /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: M
        }, /* @__PURE__ */ k.createElement("rect", {
          x: w,
          y: T,
          height: C,
          width: R
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var M = this.state.xAxisMap;
        return M ? Object.entries(M).reduce(function(j, w) {
          var T = wM(w, 2), C = T[0], R = T[1];
          return ie(ie({}, j), {}, Se({}, C, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var M = this.state.yAxisMap;
        return M ? Object.entries(M).reduce(function(j, w) {
          var T = wM(w, 2), C = T[0], R = T[1];
          return ie(ie({}, j), {}, Se({}, C, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(M) {
        var j;
        return (j = this.state.xAxisMap) === null || j === void 0 || (j = j[M]) === null || j === void 0 ? void 0 : j.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(M) {
        var j;
        return (j = this.state.yAxisMap) === null || j === void 0 || (j = j[M]) === null || j === void 0 ? void 0 : j.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(M) {
        var j = this.state, w = j.formattedGraphicalItems, T = j.activeItem;
        if (w && w.length)
          for (var C = 0, R = w.length; C < R; C++) {
            var N = w[C], K = N.props, L = N.item, B = L.type.defaultProps !== void 0 ? ie(ie({}, L.type.defaultProps), L.props) : L.props, F = Lr(L.type);
            if (F === "Bar") {
              var G = (K.data || []).find(function(ne) {
                return y9(M, ne);
              });
              if (G)
                return {
                  graphicalItem: N,
                  payload: G
                };
            } else if (F === "RadialBar") {
              var V = (K.data || []).find(function(ne) {
                return B2(M, ne);
              });
              if (V)
                return {
                  graphicalItem: N,
                  payload: V
                };
            } else if (Ed(N, T) || jd(N, T) || rc(N, T)) {
              var $ = iH({
                graphicalItem: N,
                activeTooltipItem: T,
                itemData: B.data
              }), Y = B.activeIndex === void 0 ? $ : B.activeIndex;
              return {
                graphicalItem: ie(ie({}, N), {}, {
                  childIndex: Y
                }),
                payload: rc(N, T) ? B.data[$] : N.props.data[$]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var M = this;
        if (!Ww(this))
          return null;
        var j = this.props, w = j.children, T = j.className, C = j.width, R = j.height, N = j.style, K = j.compact, L = j.title, B = j.desc, F = AM(j, aK), G = Te(F, !1);
        if (K)
          return /* @__PURE__ */ k.createElement(tM, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ k.createElement(db, xo({}, G, {
            width: C,
            height: R,
            title: L,
            desc: B
          }), this.renderClipPath(), Qw(w, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var V, $;
          G.tabIndex = (V = this.props.tabIndex) !== null && V !== void 0 ? V : 0, G.role = ($ = this.props.role) !== null && $ !== void 0 ? $ : "application", G.onKeyDown = function(ne) {
            M.accessibilityManager.keyboardEvent(ne);
          }, G.onFocus = function() {
            M.accessibilityManager.focus();
          };
        }
        var Y = this.parseEventsOfWrapper();
        return /* @__PURE__ */ k.createElement(tM, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ k.createElement("div", xo({
          className: $e("recharts-wrapper", T),
          style: ie({
            position: "relative",
            cursor: "default",
            width: C,
            height: R
          }, N)
        }, Y, {
          ref: function(H) {
            M.container = H;
          }
        }), /* @__PURE__ */ k.createElement(db, xo({}, G, {
          width: C,
          height: R,
          title: L,
          desc: B,
          style: SK
        }), this.renderClipPath(), Qw(w, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(ee.Component);
  Se(_, "displayName", n), Se(_, "defaultProps", ie({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, v)), Se(_, "getDerivedStateFromProps", function(x, A) {
    var E = x.dataKey, M = x.data, j = x.children, w = x.width, T = x.height, C = x.layout, R = x.stackOffset, N = x.margin, K = A.dataStartIndex, L = A.dataEndIndex;
    if (A.updateId === void 0) {
      var B = jM(x);
      return ie(ie(ie({}, B), {}, {
        updateId: 0
      }, b(ie(ie({
        props: x
      }, B), {}, {
        updateId: 0
      }), A)), {}, {
        prevDataKey: E,
        prevData: M,
        prevWidth: w,
        prevHeight: T,
        prevLayout: C,
        prevStackOffset: R,
        prevMargin: N,
        prevChildren: j
      });
    }
    if (E !== A.prevDataKey || M !== A.prevData || w !== A.prevWidth || T !== A.prevHeight || C !== A.prevLayout || R !== A.prevStackOffset || !_o(N, A.prevMargin)) {
      var F = jM(x), G = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: A.chartX,
        chartY: A.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: A.isTooltipActive
      }, V = ie(ie({}, EM(A, M, C)), {}, {
        updateId: A.updateId + 1
      }), $ = ie(ie(ie({}, F), G), V);
      return ie(ie(ie({}, $), b(ie({
        props: x
      }, $), A)), {}, {
        prevDataKey: E,
        prevData: M,
        prevWidth: w,
        prevHeight: T,
        prevLayout: C,
        prevStackOffset: R,
        prevMargin: N,
        prevChildren: j
      });
    }
    if (!sb(j, A.prevChildren)) {
      var Y, ne, H, J, P = bn(j, ko), U = P && (Y = (ne = P.props) === null || ne === void 0 ? void 0 : ne.startIndex) !== null && Y !== void 0 ? Y : K, re = P && (H = (J = P.props) === null || J === void 0 ? void 0 : J.endIndex) !== null && H !== void 0 ? H : L, se = U !== K || re !== L, pe = !we(M), fe = pe && !se ? A.updateId : A.updateId + 1;
      return ie(ie({
        updateId: fe
      }, b(ie(ie({
        props: x
      }, A), {}, {
        updateId: fe,
        dataStartIndex: U,
        dataEndIndex: re
      }), A)), {}, {
        prevChildren: j,
        dataStartIndex: U,
        dataEndIndex: re
      });
    }
    return null;
  }), Se(_, "renderActiveDot", function(x, A, E) {
    var M;
    return /* @__PURE__ */ ee.isValidElement(x) ? M = /* @__PURE__ */ ee.cloneElement(x, A) : Ee(x) ? M = x(A) : M = /* @__PURE__ */ k.createElement(Td, A), /* @__PURE__ */ k.createElement(Ie, {
      className: "recharts-active-dot",
      key: E
    }, M);
  });
  var S = /* @__PURE__ */ ee.forwardRef(function(A, E) {
    return /* @__PURE__ */ k.createElement(_, xo({}, A, {
      ref: E
    }));
  });
  return S.displayName = _.displayName, S;
}, DK = kd({
  chartName: "LineChart",
  GraphicalChild: kr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: lr
  }, {
    axisType: "yAxis",
    AxisComp: cr
  }],
  formatAxisMap: Cd
}), PK = kd({
  chartName: "BarChart",
  GraphicalChild: Kr,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: lr
  }, {
    axisType: "yAxis",
    AxisComp: cr
  }],
  formatAxisMap: Cd
}), NK = kd({
  chartName: "AreaChart",
  GraphicalChild: Wr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: lr
  }, {
    axisType: "yAxis",
    AxisComp: cr
  }],
  formatAxisMap: Cd
}), RK = kd({
  chartName: "ComposedChart",
  GraphicalChild: [kr, Wr, Kr, qd],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: lr
  }, {
    axisType: "yAxis",
    AxisComp: cr
  }, {
    axisType: "zAxis",
    AxisComp: zd
  }],
  formatAxisMap: Cd
});
function Ws(e, t) {
  let n = 0, r = 0;
  for (const l of t)
    l == null || !isFinite(l) || (l < n && (n = l), l > r && (r = l));
  let o = 1;
  for (const l of [n, r]) o = Math.max(o, e(l).length);
  return Math.min(90, Math.ceil(o * 7) + 14);
}
const Zs = { top: 8, right: 12, bottom: 0, left: 0 }, CM = [
  "#60a5fa",
  "#34d399",
  "#fbbf24",
  "#f472b6",
  "#a78bfa",
  "#22d3ee",
  "#fb923c",
  "#4ade80",
  "#e879f9",
  "#93c5fd"
], _a = { fill: "#8b9bb4", fontSize: 12 }, Qs = {
  backgroundColor: "#17202f",
  border: "1px solid #223047",
  borderRadius: 8,
  color: "#e6edf7",
  fontSize: 13
};
function $K({
  rows: e,
  accounts: t,
  mode: n,
  range: r,
  masked: o = !1,
  compact: l = !0
}) {
  const c = r === "1d" || r === "1w", f = (j) => ei(j, c), d = (j, w) => w !== 0 ? (j - w) / Math.abs(w) : null, h = l ? D3 : ir, y = (j) => o ? Al(j) : h(j), v = (j) => o ? Al(j) : ir(j, !0);
  if (n === "flow") {
    const j = r$(e, t, r), w = (C) => o ? C.toFixed(2) : ub(C), T = (C) => o ? C.toFixed(1) : h(C);
    return /* @__PURE__ */ z.jsx(ks, { width: "100%", height: 340, children: /* @__PURE__ */ z.jsxs(PK, { data: j, margin: Zs, children: [
      /* @__PURE__ */ z.jsx(ml, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ z.jsx(lr, { dataKey: "ts", tickFormatter: (C) => ei(C), tick: _a, minTickGap: 40 }),
      /* @__PURE__ */ z.jsx(cr, { tickFormatter: (C) => T(C), tick: _a, width: Ws(T, j.map((C) => C.flow)) }),
      /* @__PURE__ */ z.jsx(
        xn,
        {
          contentStyle: Qs,
          labelFormatter: (C) => ei(C),
          formatter: (C) => [w(C), "Net flow"],
          cursor: { fill: "#223047", fillOpacity: 0.4 }
        }
      ),
      /* @__PURE__ */ z.jsx(Kr, { dataKey: "flow", radius: [3, 3, 0, 0], children: j.map((C, R) => /* @__PURE__ */ z.jsx(yd, { fill: C.flow >= 0 ? "#34d399" : "#f87171", fillOpacity: 0.8 }, R)) })
    ] }) });
  }
  if (n === "total") {
    const j = ar(e[0], t), w = e.map((T) => {
      const C = ar(T, t);
      return { ts: T.ts, total: o ? d(C, j) : C };
    });
    return /* @__PURE__ */ z.jsx(ks, { width: "100%", height: 340, children: /* @__PURE__ */ z.jsxs(NK, { data: w, margin: Zs, children: [
      /* @__PURE__ */ z.jsx("defs", { children: /* @__PURE__ */ z.jsxs("linearGradient", { id: "nw", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ z.jsx("stop", { offset: "0%", stopColor: "#60a5fa", stopOpacity: 0.35 }),
        /* @__PURE__ */ z.jsx("stop", { offset: "100%", stopColor: "#60a5fa", stopOpacity: 0 })
      ] }) }),
      /* @__PURE__ */ z.jsx(ml, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ z.jsx(lr, { dataKey: "ts", tickFormatter: f, tick: _a, minTickGap: 40 }),
      /* @__PURE__ */ z.jsx(cr, { tickFormatter: y, tick: _a, width: Ws(y, w.map((T) => T.total)), domain: ["auto", "auto"] }),
      /* @__PURE__ */ z.jsx(
        xn,
        {
          contentStyle: Qs,
          labelFormatter: (T) => ei(T, !0),
          formatter: (T) => [v(T), "Total"]
        }
      ),
      /* @__PURE__ */ z.jsx(Wr, { type: "monotone", dataKey: "total", stroke: "#60a5fa", strokeWidth: 2, fill: "url(#nw)" })
    ] }) });
  }
  if (n === "category") {
    const j = (C) => C.category === "retirement", w = {
      retirement: ar(e[0], t, j),
      other: ar(e[0], t, (C) => !j(C)),
      debt: UO(e[0], t)
    }, T = e.map((C) => {
      const R = ar(C, t, j), N = ar(C, t, (L) => !j(L)), K = UO(C, t);
      return o ? {
        ts: C.ts,
        retirement: d(R, w.retirement),
        other: d(N, w.other),
        debt: d(K, w.debt)
      } : { ts: C.ts, retirement: R, other: N, debt: K };
    });
    return /* @__PURE__ */ z.jsx(ks, { width: "100%", height: 340, children: /* @__PURE__ */ z.jsxs(DK, { data: T, margin: Zs, children: [
      /* @__PURE__ */ z.jsx(ml, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ z.jsx(lr, { dataKey: "ts", tickFormatter: f, tick: _a, minTickGap: 40 }),
      /* @__PURE__ */ z.jsx(
        cr,
        {
          tickFormatter: y,
          tick: _a,
          width: Ws(y, T.flatMap((C) => [C.retirement, C.other, C.debt])),
          domain: ["auto", "auto"]
        }
      ),
      /* @__PURE__ */ z.jsx(
        xn,
        {
          contentStyle: Qs,
          labelFormatter: (C) => ei(C, !0),
          formatter: (C, R) => [v(C), R]
        }
      ),
      /* @__PURE__ */ z.jsx(kr, { type: "monotone", dataKey: "retirement", stroke: "#34d399", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ z.jsx(kr, { type: "monotone", dataKey: "other", stroke: "#60a5fa", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ z.jsx(kr, { type: "monotone", dataKey: "debt", stroke: "#f87171", strokeWidth: 2, dot: !1 })
    ] }) });
  }
  const g = (j) => o ? `${j >= 0 ? "+" : ""}${j.toFixed(2)}` : ub(j), b = (j) => o ? j.toFixed(1) : h(j), _ = a$(e, t, r), S = t.filter(
    (j) => _.some((w) => Math.abs(w.deltas[j.id] ?? 0) > 4e-3)
  ), x = _.map((j) => {
    const w = { ts: j.ts, net: j.net };
    for (const T of S) w[`a${T.id}`] = j.deltas[T.id] ?? 0;
    return w;
  }), A = _.flatMap((j) => {
    let w = 0, T = 0;
    for (const C of S) {
      const R = j.deltas[C.id] ?? 0;
      R >= 0 ? w += R : T += R;
    }
    return [w, T];
  }), E = (j) => `${j.org_name || j.org_domain} · ${j.nickname || j.name}`, M = ({
    active: j,
    payload: w,
    label: T
  }) => {
    if (!j || !w || w.length === 0) return null;
    const C = w.filter((N) => N.dataKey !== "net" && Math.abs(Number(N.value)) > 4e-3).sort((N, K) => Math.abs(Number(K.value)) - Math.abs(Number(N.value))), R = w.find((N) => N.dataKey === "net");
    return /* @__PURE__ */ z.jsxs("div", { style: { ...Qs, padding: "8px 12px" }, children: [
      /* @__PURE__ */ z.jsx("div", { style: { marginBottom: 4 }, children: ei(T ?? 0) }),
      C.map((N) => {
        const K = S.find((L) => `a${L.id}` === N.dataKey);
        return /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 16 }, children: [
          /* @__PURE__ */ z.jsx("span", { style: { color: N.color }, children: K ? E(K) : String(N.dataKey) }),
          /* @__PURE__ */ z.jsx("span", { children: g(Number(N.value)) })
        ] }, String(N.dataKey));
      }),
      R && /* @__PURE__ */ z.jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 16, marginTop: 4, color: "#8b9bb4" }, children: [
        /* @__PURE__ */ z.jsx("span", { children: "net" }),
        /* @__PURE__ */ z.jsx("span", { children: g(Number(R.value)) })
      ] })
    ] });
  };
  return /* @__PURE__ */ z.jsx(ks, { width: "100%", height: 340, children: /* @__PURE__ */ z.jsxs(RK, { data: x, stackOffset: "sign", margin: Zs, children: [
    /* @__PURE__ */ z.jsx(ml, { stroke: "#223047", strokeDasharray: "3 3" }),
    /* @__PURE__ */ z.jsx(lr, { dataKey: "ts", tickFormatter: (j) => ei(j), tick: _a, minTickGap: 40 }),
    /* @__PURE__ */ z.jsx(cr, { tickFormatter: b, tick: _a, width: Ws(b, A) }),
    /* @__PURE__ */ z.jsx(xn, { content: /* @__PURE__ */ z.jsx(M, {}), cursor: { fill: "#223047", fillOpacity: 0.4 } }),
    /* @__PURE__ */ z.jsx(Dd, { y: 0, stroke: "#8b9bb4", strokeOpacity: 0.6 }),
    S.map((j, w) => /* @__PURE__ */ z.jsx(
      Kr,
      {
        dataKey: `a${j.id}`,
        stackId: "delta",
        fill: CM[w % CM.length],
        fillOpacity: 0.8,
        isAnimationActive: !1
      },
      j.id
    )),
    /* @__PURE__ */ z.jsx(
      kr,
      {
        type: "monotone",
        dataKey: "net",
        stroke: "#e6edf7",
        strokeWidth: 1.5,
        strokeOpacity: 0.65,
        strokeDasharray: "4 3",
        dot: { r: 2, fill: "#e6edf7", strokeWidth: 0 },
        isAnimationActive: !1
      }
    )
  ] }) });
}
function nN({
  hass: e,
  config: t
}) {
  const n = To.find((E) => E.key === (t.view ?? "all")) ?? To[2], [r, o] = ee.useState(t.range ?? "6m"), [l, c] = ee.useState(
    t.mode && n.modes.includes(t.mode) ? t.mode : n.defaultMode
  ), { overview: f, series: d, masked: h, error: y, refresh: v } = D0(e, t.entry, r), g = nd(f), b = ee.useMemo(() => g.filter(n.pick), [g, n]), _ = ee.useMemo(() => {
    if (!d) return [];
    const E = new Set(b.map((M) => M.id));
    return kM(d.filter((M) => E.has(M.account_id)));
  }, [d, b]), S = t.show_controls !== !1, x = S && t.show_mode_selector !== !1 && n.modes.length > 1, A = S && t.show_range_selector !== !1;
  return /* @__PURE__ */ z.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ z.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ z.jsx("h2", { children: t.title ?? n.label }),
      /* @__PURE__ */ z.jsxs("span", { className: "head-right", children: [
        (x || A) && /* @__PURE__ */ z.jsxs("span", { className: "controls", children: [
          x && /* @__PURE__ */ z.jsx(Js, { options: n.modes, value: l, onChange: c }),
          A && /* @__PURE__ */ z.jsx(Js, { options: C0, value: r, onChange: o })
        ] }),
        f && /* @__PURE__ */ z.jsx(
          Jo,
          {
            hass: e,
            entry: t.entry,
            overview: f,
            autoConcealMinutes: t.auto_conceal_minutes,
            onChanged: v
          }
        )
      ] })
    ] }),
    y && /* @__PURE__ */ z.jsx("div", { className: "error-box", children: y }),
    !y && (!f || !d) && /* @__PURE__ */ z.jsx("div", { className: "status", children: "Loading…" }),
    !y && f && d && _.length === 0 && /* @__PURE__ */ z.jsx("div", { className: "status", children: "No data for this view yet." }),
    !y && f && d && _.length > 0 && /* @__PURE__ */ z.jsx(
      $K,
      {
        rows: _,
        accounts: b,
        mode: l,
        range: r,
        masked: h,
        compact: t.compact !== !1
      }
    )
  ] });
}
var ab = { exports: {} }, hl = {}, ib = { exports: {} }, ob = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DM;
function zK() {
  return DM || (DM = 1, (function(e) {
    function t($, Y) {
      var ne = $.length;
      $.push(Y);
      e: for (; 0 < ne; ) {
        var H = ne - 1 >>> 1, J = $[H];
        if (0 < o(J, Y))
          $[H] = Y, $[ne] = J, ne = H;
        else break e;
      }
    }
    function n($) {
      return $.length === 0 ? null : $[0];
    }
    function r($) {
      if ($.length === 0) return null;
      var Y = $[0], ne = $.pop();
      if (ne !== Y) {
        $[0] = ne;
        e: for (var H = 0, J = $.length, P = J >>> 1; H < P; ) {
          var U = 2 * (H + 1) - 1, re = $[U], se = U + 1, pe = $[se];
          if (0 > o(re, ne))
            se < J && 0 > o(pe, re) ? ($[H] = pe, $[se] = ne, H = se) : ($[H] = re, $[U] = ne, H = U);
          else if (se < J && 0 > o(pe, ne))
            $[H] = pe, $[se] = ne, H = se;
          else break e;
        }
      }
      return Y;
    }
    function o($, Y) {
      var ne = $.sortIndex - Y.sortIndex;
      return ne !== 0 ? ne : $.id - Y.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
        return l.now();
      };
    } else {
      var c = Date, f = c.now();
      e.unstable_now = function() {
        return c.now() - f;
      };
    }
    var d = [], h = [], y = 1, v = null, g = 3, b = !1, _ = !1, S = !1, x = !1, A = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function j($) {
      for (var Y = n(h); Y !== null; ) {
        if (Y.callback === null) r(h);
        else if (Y.startTime <= $)
          r(h), Y.sortIndex = Y.expirationTime, t(d, Y);
        else break;
        Y = n(h);
      }
    }
    function w($) {
      if (S = !1, j($), !_)
        if (n(d) !== null)
          _ = !0, T || (T = !0, B());
        else {
          var Y = n(h);
          Y !== null && V(w, Y.startTime - $);
        }
    }
    var T = !1, C = -1, R = 5, N = -1;
    function K() {
      return x ? !0 : !(e.unstable_now() - N < R);
    }
    function L() {
      if (x = !1, T) {
        var $ = e.unstable_now();
        N = $;
        var Y = !0;
        try {
          e: {
            _ = !1, S && (S = !1, E(C), C = -1), b = !0;
            var ne = g;
            try {
              t: {
                for (j($), v = n(d); v !== null && !(v.expirationTime > $ && K()); ) {
                  var H = v.callback;
                  if (typeof H == "function") {
                    v.callback = null, g = v.priorityLevel;
                    var J = H(
                      v.expirationTime <= $
                    );
                    if ($ = e.unstable_now(), typeof J == "function") {
                      v.callback = J, j($), Y = !0;
                      break t;
                    }
                    v === n(d) && r(d), j($);
                  } else r(d);
                  v = n(d);
                }
                if (v !== null) Y = !0;
                else {
                  var P = n(h);
                  P !== null && V(
                    w,
                    P.startTime - $
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              v = null, g = ne, b = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? B() : T = !1;
        }
      }
    }
    var B;
    if (typeof M == "function")
      B = function() {
        M(L);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), G = F.port2;
      F.port1.onmessage = L, B = function() {
        G.postMessage(null);
      };
    } else
      B = function() {
        A(L, 0);
      };
    function V($, Y) {
      C = A(function() {
        $(e.unstable_now());
      }, Y);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
      $.callback = null;
    }, e.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : R = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_next = function($) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = g;
      }
      var ne = g;
      g = Y;
      try {
        return $();
      } finally {
        g = ne;
      }
    }, e.unstable_requestPaint = function() {
      x = !0;
    }, e.unstable_runWithPriority = function($, Y) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var ne = g;
      g = $;
      try {
        return Y();
      } finally {
        g = ne;
      }
    }, e.unstable_scheduleCallback = function($, Y, ne) {
      var H = e.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? H + ne : H) : ne = H, $) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = ne + J, $ = {
        id: y++,
        callback: Y,
        priorityLevel: $,
        startTime: ne,
        expirationTime: J,
        sortIndex: -1
      }, ne > H ? ($.sortIndex = ne, t(h, $), n(d) === null && $ === n(h) && (S ? (E(C), C = -1) : S = !0, V(w, ne - H))) : ($.sortIndex = J, t(d, $), _ || b || (_ = !0, T || (T = !0, B()))), $;
    }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function($) {
      var Y = g;
      return function() {
        var ne = g;
        g = Y;
        try {
          return $.apply(this, arguments);
        } finally {
          g = ne;
        }
      };
    };
  })(ob)), ob;
}
var PM;
function qK() {
  return PM || (PM = 1, ib.exports = zK()), ib.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NM;
function BK() {
  if (NM) return hl;
  NM = 1;
  var e = qK(), t = M0(), n = u9();
  function r(a) {
    var i = "https://react.dev/errors/" + a;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        i += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + a + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
  }
  function l(a) {
    var i = a, u = a;
    if (a.alternate) for (; i.return; ) i = i.return;
    else {
      a = i;
      do
        i = a, (i.flags & 4098) !== 0 && (u = i.return), a = i.return;
      while (a);
    }
    return i.tag === 3 ? u : null;
  }
  function c(a) {
    if (a.tag === 13) {
      var i = a.memoizedState;
      if (i === null && (a = a.alternate, a !== null && (i = a.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function f(a) {
    if (a.tag === 31) {
      var i = a.memoizedState;
      if (i === null && (a = a.alternate, a !== null && (i = a.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function d(a) {
    if (l(a) !== a)
      throw Error(r(188));
  }
  function h(a) {
    var i = a.alternate;
    if (!i) {
      if (i = l(a), i === null) throw Error(r(188));
      return i !== a ? null : a;
    }
    for (var u = a, s = i; ; ) {
      var p = u.return;
      if (p === null) break;
      var m = p.alternate;
      if (m === null) {
        if (s = p.return, s !== null) {
          u = s;
          continue;
        }
        break;
      }
      if (p.child === m.child) {
        for (m = p.child; m; ) {
          if (m === u) return d(p), a;
          if (m === s) return d(p), i;
          m = m.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== s.return) u = p, s = m;
      else {
        for (var O = !1, D = p.child; D; ) {
          if (D === u) {
            O = !0, u = p, s = m;
            break;
          }
          if (D === s) {
            O = !0, s = p, u = m;
            break;
          }
          D = D.sibling;
        }
        if (!O) {
          for (D = m.child; D; ) {
            if (D === u) {
              O = !0, u = m, s = p;
              break;
            }
            if (D === s) {
              O = !0, s = m, u = p;
              break;
            }
            D = D.sibling;
          }
          if (!O) throw Error(r(189));
        }
      }
      if (u.alternate !== s) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? a : i;
  }
  function y(a) {
    var i = a.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return a;
    for (a = a.child; a !== null; ) {
      if (i = y(a), i !== null) return i;
      a = a.sibling;
    }
    return null;
  }
  var v = Object.assign, g = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), M = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), K = Symbol.for("react.memo_cache_sentinel"), L = Symbol.iterator;
  function B(a) {
    return a === null || typeof a != "object" ? null : (a = L && a[L] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var F = Symbol.for("react.client.reference");
  function G(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === F ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case S:
        return "Fragment";
      case A:
        return "Profiler";
      case x:
        return "StrictMode";
      case w:
        return "Suspense";
      case T:
        return "SuspenseList";
      case N:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case _:
          return "Portal";
        case M:
          return a.displayName || "Context";
        case E:
          return (a._context.displayName || "Context") + ".Consumer";
        case j:
          var i = a.render;
          return a = a.displayName, a || (a = i.displayName || i.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case C:
          return i = a.displayName || null, i !== null ? i : G(a.type) || "Memo";
        case R:
          i = a._payload, a = a._init;
          try {
            return G(a(i));
          } catch {
          }
      }
    return null;
  }
  var V = Array.isArray, $ = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, H = [], J = -1;
  function P(a) {
    return { current: a };
  }
  function U(a) {
    0 > J || (a.current = H[J], H[J] = null, J--);
  }
  function re(a, i) {
    J++, H[J] = a.current, a.current = i;
  }
  var se = P(null), pe = P(null), fe = P(null), _e = P(null);
  function Ce(a, i) {
    switch (re(fe, i), re(pe, a), re(se, null), i.nodeType) {
      case 9:
      case 11:
        a = (a = i.documentElement) && (a = a.namespaceURI) ? rO(a) : 0;
        break;
      default:
        if (a = i.tagName, i = i.namespaceURI)
          i = rO(i), a = aO(i, a);
        else
          switch (a) {
            case "svg":
              a = 1;
              break;
            case "math":
              a = 2;
              break;
            default:
              a = 0;
          }
    }
    U(se), re(se, a);
  }
  function ce() {
    U(se), U(pe), U(fe);
  }
  function he(a) {
    a.memoizedState !== null && re(_e, a);
    var i = se.current, u = aO(i, a.type);
    i !== u && (re(pe, a), re(se, u));
  }
  function ge(a) {
    pe.current === a && (U(se), U(pe)), _e.current === a && (U(_e), Qu._currentValue = ne);
  }
  var le, ze;
  function Oe(a) {
    if (le === void 0)
      try {
        throw Error();
      } catch (u) {
        var i = u.stack.trim().match(/\n( *(at )?)/);
        le = i && i[1] || "", ze = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + le + a + ze;
  }
  var Xe = !1;
  function nt(a, i) {
    if (!a || Xe) return "";
    Xe = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (i) {
              var ue = function() {
                throw Error();
              };
              if (Object.defineProperty(ue.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ue, []);
                } catch (te) {
                  var Q = te;
                }
                Reflect.construct(a, [], ue);
              } else {
                try {
                  ue.call();
                } catch (te) {
                  Q = te;
                }
                a.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (te) {
                Q = te;
              }
              (ue = a()) && typeof ue.catch == "function" && ue.catch(function() {
              });
            }
          } catch (te) {
            if (te && Q && typeof te.stack == "string")
              return [te.stack, Q.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var p = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      p && p.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var m = s.DetermineComponentFrameRoot(), O = m[0], D = m[1];
      if (O && D) {
        var q = O.split(`
`), Z = D.split(`
`);
        for (p = s = 0; s < q.length && !q[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; p < Z.length && !Z[p].includes(
          "DetermineComponentFrameRoot"
        ); )
          p++;
        if (s === q.length || p === Z.length)
          for (s = q.length - 1, p = Z.length - 1; 1 <= s && 0 <= p && q[s] !== Z[p]; )
            p--;
        for (; 1 <= s && 0 <= p; s--, p--)
          if (q[s] !== Z[p]) {
            if (s !== 1 || p !== 1)
              do
                if (s--, p--, 0 > p || q[s] !== Z[p]) {
                  var ae = `
` + q[s].replace(" at new ", " at ");
                  return a.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", a.displayName)), ae;
                }
              while (1 <= s && 0 <= p);
            break;
          }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = u;
    }
    return (u = a ? a.displayName || a.name : "") ? Oe(u) : "";
  }
  function Et(a, i) {
    switch (a.tag) {
      case 26:
      case 27:
      case 5:
        return Oe(a.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return a.child !== i && i !== null ? Oe("Suspense Fallback") : Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 15:
        return nt(a.type, !1);
      case 11:
        return nt(a.type.render, !1);
      case 1:
        return nt(a.type, !0);
      case 31:
        return Oe("Activity");
      default:
        return "";
    }
  }
  function Xt(a) {
    try {
      var i = "", u = null;
      do
        i += Et(a, u), u = a, a = a.return;
      while (a);
      return i;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  var Wt = Object.prototype.hasOwnProperty, _n = e.unstable_scheduleCallback, Pt = e.unstable_cancelCallback, On = e.unstable_shouldYield, cu = e.unstable_requestPaint, Ut = e.unstable_now, yc = e.unstable_getCurrentPriorityLevel, $1 = e.unstable_ImmediatePriority, z1 = e.unstable_UserBlockingPriority, mc = e.unstable_NormalPriority, iN = e.unstable_LowPriority, q1 = e.unstable_IdlePriority, oN = e.log, uN = e.unstable_setDisableYieldValue, su = null, ln = null;
  function Zr(a) {
    if (typeof oN == "function" && uN(a), ln && typeof ln.setStrictMode == "function")
      try {
        ln.setStrictMode(su, a);
      } catch {
      }
  }
  var cn = Math.clz32 ? Math.clz32 : sN, lN = Math.log, cN = Math.LN2;
  function sN(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (lN(a) / cN | 0) | 0;
  }
  var gc = 256, bc = 262144, xc = 4194304;
  function za(a) {
    var i = a & 42;
    if (i !== 0) return i;
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
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
        return a & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return a & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return a;
    }
  }
  function Sc(a, i, u) {
    var s = a.pendingLanes;
    if (s === 0) return 0;
    var p = 0, m = a.suspendedLanes, O = a.pingedLanes;
    a = a.warmLanes;
    var D = s & 134217727;
    return D !== 0 ? (s = D & ~m, s !== 0 ? p = za(s) : (O &= D, O !== 0 ? p = za(O) : u || (u = D & ~a, u !== 0 && (p = za(u))))) : (D = s & ~m, D !== 0 ? p = za(D) : O !== 0 ? p = za(O) : u || (u = s & ~a, u !== 0 && (p = za(u)))), p === 0 ? 0 : i !== 0 && i !== p && (i & m) === 0 && (m = p & -p, u = i & -i, m >= u || m === 32 && (u & 4194048) !== 0) ? i : p;
  }
  function fu(a, i) {
    return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & i) === 0;
  }
  function fN(a, i) {
    switch (a) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
      case 16:
      case 32:
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
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function B1() {
    var a = xc;
    return xc <<= 1, (xc & 62914560) === 0 && (xc = 4194304), a;
  }
  function Id(a) {
    for (var i = [], u = 0; 31 > u; u++) i.push(a);
    return i;
  }
  function du(a, i) {
    a.pendingLanes |= i, i !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
  }
  function dN(a, i, u, s, p, m) {
    var O = a.pendingLanes;
    a.pendingLanes = u, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= u, a.entangledLanes &= u, a.errorRecoveryDisabledLanes &= u, a.shellSuspendCounter = 0;
    var D = a.entanglements, q = a.expirationTimes, Z = a.hiddenUpdates;
    for (u = O & ~u; 0 < u; ) {
      var ae = 31 - cn(u), ue = 1 << ae;
      D[ae] = 0, q[ae] = -1;
      var Q = Z[ae];
      if (Q !== null)
        for (Z[ae] = null, ae = 0; ae < Q.length; ae++) {
          var te = Q[ae];
          te !== null && (te.lane &= -536870913);
        }
      u &= ~ue;
    }
    s !== 0 && k1(a, s, 0), m !== 0 && p === 0 && a.tag !== 0 && (a.suspendedLanes |= m & ~(O & ~i));
  }
  function k1(a, i, u) {
    a.pendingLanes |= i, a.suspendedLanes &= ~i;
    var s = 31 - cn(i);
    a.entangledLanes |= i, a.entanglements[s] = a.entanglements[s] | 1073741824 | u & 261930;
  }
  function L1(a, i) {
    var u = a.entangledLanes |= i;
    for (a = a.entanglements; u; ) {
      var s = 31 - cn(u), p = 1 << s;
      p & i | a[s] & i && (a[s] |= i), u &= ~p;
    }
  }
  function U1(a, i) {
    var u = i & -i;
    return u = (u & 42) !== 0 ? 1 : Hd(u), (u & (a.suspendedLanes | i)) !== 0 ? 0 : u;
  }
  function Hd(a) {
    switch (a) {
      case 2:
        a = 1;
        break;
      case 8:
        a = 4;
        break;
      case 32:
        a = 16;
        break;
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
        a = 128;
        break;
      case 268435456:
        a = 134217728;
        break;
      default:
        a = 0;
    }
    return a;
  }
  function Gd(a) {
    return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function I1() {
    var a = Y.p;
    return a !== 0 ? a : (a = window.event, a === void 0 ? 32 : EO(a.type));
  }
  function H1(a, i) {
    var u = Y.p;
    try {
      return Y.p = a, i();
    } finally {
      Y.p = u;
    }
  }
  var Qr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + Qr, Zt = "__reactProps$" + Qr, Mi = "__reactContainer$" + Qr, Yd = "__reactEvents$" + Qr, hN = "__reactListeners$" + Qr, pN = "__reactHandles$" + Qr, G1 = "__reactResources$" + Qr, hu = "__reactMarker$" + Qr;
  function Kd(a) {
    delete a[Nt], delete a[Zt], delete a[Yd], delete a[hN], delete a[pN];
  }
  function Ci(a) {
    var i = a[Nt];
    if (i) return i;
    for (var u = a.parentNode; u; ) {
      if (i = u[Mi] || u[Nt]) {
        if (u = i.alternate, i.child !== null || u !== null && u.child !== null)
          for (a = fO(a); a !== null; ) {
            if (u = a[Nt]) return u;
            a = fO(a);
          }
        return i;
      }
      a = u, u = a.parentNode;
    }
    return null;
  }
  function Di(a) {
    if (a = a[Nt] || a[Mi]) {
      var i = a.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3)
        return a;
    }
    return null;
  }
  function pu(a) {
    var i = a.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return a.stateNode;
    throw Error(r(33));
  }
  function Pi(a) {
    var i = a[G1];
    return i || (i = a[G1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function jt(a) {
    a[hu] = !0;
  }
  var Y1 = /* @__PURE__ */ new Set(), K1 = {};
  function qa(a, i) {
    Ni(a, i), Ni(a + "Capture", i);
  }
  function Ni(a, i) {
    for (K1[a] = i, a = 0; a < i.length; a++)
      Y1.add(i[a]);
  }
  var vN = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), X1 = {}, V1 = {};
  function yN(a) {
    return Wt.call(V1, a) ? !0 : Wt.call(X1, a) ? !1 : vN.test(a) ? V1[a] = !0 : (X1[a] = !0, !1);
  }
  function _c(a, i, u) {
    if (yN(i))
      if (u === null) a.removeAttribute(i);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            a.removeAttribute(i);
            return;
          case "boolean":
            var s = i.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              a.removeAttribute(i);
              return;
            }
        }
        a.setAttribute(i, "" + u);
      }
  }
  function Oc(a, i, u) {
    if (u === null) a.removeAttribute(i);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(i);
          return;
      }
      a.setAttribute(i, "" + u);
    }
  }
  function vr(a, i, u, s) {
    if (s === null) a.removeAttribute(u);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(u);
          return;
      }
      a.setAttributeNS(i, u, "" + s);
    }
  }
  function wn(a) {
    switch (typeof a) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function F1(a) {
    var i = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function mN(a, i, u) {
    var s = Object.getOwnPropertyDescriptor(
      a.constructor.prototype,
      i
    );
    if (!a.hasOwnProperty(i) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var p = s.get, m = s.set;
      return Object.defineProperty(a, i, {
        configurable: !0,
        get: function() {
          return p.call(this);
        },
        set: function(O) {
          u = "" + O, m.call(this, O);
        }
      }), Object.defineProperty(a, i, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(O) {
          u = "" + O;
        },
        stopTracking: function() {
          a._valueTracker = null, delete a[i];
        }
      };
    }
  }
  function Xd(a) {
    if (!a._valueTracker) {
      var i = F1(a) ? "checked" : "value";
      a._valueTracker = mN(
        a,
        i,
        "" + a[i]
      );
    }
  }
  function W1(a) {
    if (!a) return !1;
    var i = a._valueTracker;
    if (!i) return !0;
    var u = i.getValue(), s = "";
    return a && (s = F1(a) ? a.checked ? "true" : "false" : a.value), a = s, a !== u ? (i.setValue(a), !0) : !1;
  }
  function wc(a) {
    if (a = a || (typeof document < "u" ? document : void 0), typeof a > "u") return null;
    try {
      return a.activeElement || a.body;
    } catch {
      return a.body;
    }
  }
  var gN = /[\n"\\]/g;
  function An(a) {
    return a.replace(
      gN,
      function(i) {
        return "\\" + i.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vd(a, i, u, s, p, m, O, D) {
    a.name = "", O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? a.type = O : a.removeAttribute("type"), i != null ? O === "number" ? (i === 0 && a.value === "" || a.value != i) && (a.value = "" + wn(i)) : a.value !== "" + wn(i) && (a.value = "" + wn(i)) : O !== "submit" && O !== "reset" || a.removeAttribute("value"), i != null ? Fd(a, O, wn(i)) : u != null ? Fd(a, O, wn(u)) : s != null && a.removeAttribute("value"), p == null && m != null && (a.defaultChecked = !!m), p != null && (a.checked = p && typeof p != "function" && typeof p != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? a.name = "" + wn(D) : a.removeAttribute("name");
  }
  function Z1(a, i, u, s, p, m, O, D) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (a.type = m), i != null || u != null) {
      if (!(m !== "submit" && m !== "reset" || i != null)) {
        Xd(a);
        return;
      }
      u = u != null ? "" + wn(u) : "", i = i != null ? "" + wn(i) : u, D || i === a.value || (a.value = i), a.defaultValue = i;
    }
    s = s ?? p, s = typeof s != "function" && typeof s != "symbol" && !!s, a.checked = D ? a.checked : !!s, a.defaultChecked = !!s, O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" && (a.name = O), Xd(a);
  }
  function Fd(a, i, u) {
    i === "number" && wc(a.ownerDocument) === a || a.defaultValue === "" + u || (a.defaultValue = "" + u);
  }
  function Ri(a, i, u, s) {
    if (a = a.options, i) {
      i = {};
      for (var p = 0; p < u.length; p++)
        i["$" + u[p]] = !0;
      for (u = 0; u < a.length; u++)
        p = i.hasOwnProperty("$" + a[u].value), a[u].selected !== p && (a[u].selected = p), p && s && (a[u].defaultSelected = !0);
    } else {
      for (u = "" + wn(u), i = null, p = 0; p < a.length; p++) {
        if (a[p].value === u) {
          a[p].selected = !0, s && (a[p].defaultSelected = !0);
          return;
        }
        i !== null || a[p].disabled || (i = a[p]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Q1(a, i, u) {
    if (i != null && (i = "" + wn(i), i !== a.value && (a.value = i), u == null)) {
      a.defaultValue !== i && (a.defaultValue = i);
      return;
    }
    a.defaultValue = u != null ? "" + wn(u) : "";
  }
  function J1(a, i, u, s) {
    if (i == null) {
      if (s != null) {
        if (u != null) throw Error(r(92));
        if (V(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        u = s;
      }
      u == null && (u = ""), i = u;
    }
    u = wn(i), a.defaultValue = u, s = a.textContent, s === u && s !== "" && s !== null && (a.value = s), Xd(a);
  }
  function $i(a, i) {
    if (i) {
      var u = a.firstChild;
      if (u && u === a.lastChild && u.nodeType === 3) {
        u.nodeValue = i;
        return;
      }
    }
    a.textContent = i;
  }
  var bN = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ex(a, i, u) {
    var s = i.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? s ? a.setProperty(i, "") : i === "float" ? a.cssFloat = "" : a[i] = "" : s ? a.setProperty(i, u) : typeof u != "number" || u === 0 || bN.has(i) ? i === "float" ? a.cssFloat = u : a[i] = ("" + u).trim() : a[i] = u + "px";
  }
  function tx(a, i, u) {
    if (i != null && typeof i != "object")
      throw Error(r(62));
    if (a = a.style, u != null) {
      for (var s in u)
        !u.hasOwnProperty(s) || i != null && i.hasOwnProperty(s) || (s.indexOf("--") === 0 ? a.setProperty(s, "") : s === "float" ? a.cssFloat = "" : a[s] = "");
      for (var p in i)
        s = i[p], i.hasOwnProperty(p) && u[p] !== s && ex(a, p, s);
    } else
      for (var m in i)
        i.hasOwnProperty(m) && ex(a, m, i[m]);
  }
  function Wd(a) {
    if (a.indexOf("-") === -1) return !1;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var xN = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), SN = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ac(a) {
    return SN.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
  }
  function yr() {
  }
  var Zd = null;
  function Qd(a) {
    return a = a.target || a.srcElement || window, a.correspondingUseElement && (a = a.correspondingUseElement), a.nodeType === 3 ? a.parentNode : a;
  }
  var zi = null, qi = null;
  function nx(a) {
    var i = Di(a);
    if (i && (a = i.stateNode)) {
      var u = a[Zt] || null;
      e: switch (a = i.stateNode, i.type) {
        case "input":
          if (Vd(
            a,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), i = u.name, u.type === "radio" && i != null) {
            for (u = a; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + An(
                "" + i
              ) + '"][type="radio"]'
            ), i = 0; i < u.length; i++) {
              var s = u[i];
              if (s !== a && s.form === a.form) {
                var p = s[Zt] || null;
                if (!p) throw Error(r(90));
                Vd(
                  s,
                  p.value,
                  p.defaultValue,
                  p.defaultValue,
                  p.checked,
                  p.defaultChecked,
                  p.type,
                  p.name
                );
              }
            }
            for (i = 0; i < u.length; i++)
              s = u[i], s.form === a.form && W1(s);
          }
          break e;
        case "textarea":
          Q1(a, u.value, u.defaultValue);
          break e;
        case "select":
          i = u.value, i != null && Ri(a, !!u.multiple, i, !1);
      }
    }
  }
  var Jd = !1;
  function rx(a, i, u) {
    if (Jd) return a(i, u);
    Jd = !0;
    try {
      var s = a(i);
      return s;
    } finally {
      if (Jd = !1, (zi !== null || qi !== null) && (ds(), zi && (i = zi, a = qi, qi = zi = null, nx(i), a)))
        for (i = 0; i < a.length; i++) nx(a[i]);
    }
  }
  function vu(a, i) {
    var u = a.stateNode;
    if (u === null) return null;
    var s = u[Zt] || null;
    if (s === null) return null;
    u = s[i];
    e: switch (i) {
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
        (s = !s.disabled) || (a = a.type, s = !(a === "button" || a === "input" || a === "select" || a === "textarea")), a = !s;
        break e;
      default:
        a = !1;
    }
    if (a) return null;
    if (u && typeof u != "function")
      throw Error(
        r(231, i, typeof u)
      );
    return u;
  }
  var mr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), eh = !1;
  if (mr)
    try {
      var yu = {};
      Object.defineProperty(yu, "passive", {
        get: function() {
          eh = !0;
        }
      }), window.addEventListener("test", yu, yu), window.removeEventListener("test", yu, yu);
    } catch {
      eh = !1;
    }
  var Jr = null, th = null, Tc = null;
  function ax() {
    if (Tc) return Tc;
    var a, i = th, u = i.length, s, p = "value" in Jr ? Jr.value : Jr.textContent, m = p.length;
    for (a = 0; a < u && i[a] === p[a]; a++) ;
    var O = u - a;
    for (s = 1; s <= O && i[u - s] === p[m - s]; s++) ;
    return Tc = p.slice(a, 1 < s ? 1 - s : void 0);
  }
  function Ec(a) {
    var i = a.keyCode;
    return "charCode" in a ? (a = a.charCode, a === 0 && i === 13 && (a = 13)) : a = i, a === 10 && (a = 13), 32 <= a || a === 13 ? a : 0;
  }
  function jc() {
    return !0;
  }
  function ix() {
    return !1;
  }
  function Qt(a) {
    function i(u, s, p, m, O) {
      this._reactName = u, this._targetInst = p, this.type = s, this.nativeEvent = m, this.target = O, this.currentTarget = null;
      for (var D in a)
        a.hasOwnProperty(D) && (u = a[D], this[D] = u ? u(m) : m[D]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? jc : ix, this.isPropagationStopped = ix, this;
    }
    return v(i.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = jc);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = jc);
      },
      persist: function() {
      },
      isPersistent: jc
    }), i;
  }
  var Ba = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Mc = Qt(Ba), mu = v({}, Ba, { view: 0, detail: 0 }), _N = Qt(mu), nh, rh, gu, Cc = v({}, mu, {
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
    getModifierState: ih,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
      return "movementX" in a ? a.movementX : (a !== gu && (gu && a.type === "mousemove" ? (nh = a.screenX - gu.screenX, rh = a.screenY - gu.screenY) : rh = nh = 0, gu = a), nh);
    },
    movementY: function(a) {
      return "movementY" in a ? a.movementY : rh;
    }
  }), ox = Qt(Cc), ON = v({}, Cc, { dataTransfer: 0 }), wN = Qt(ON), AN = v({}, mu, { relatedTarget: 0 }), ah = Qt(AN), TN = v({}, Ba, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), EN = Qt(TN), jN = v({}, Ba, {
    clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }), MN = Qt(jN), CN = v({}, Ba, { data: 0 }), ux = Qt(CN), DN = {
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
  }, PN = {
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
  }, NN = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function RN(a) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(a) : (a = NN[a]) ? !!i[a] : !1;
  }
  function ih() {
    return RN;
  }
  var $N = v({}, mu, {
    key: function(a) {
      if (a.key) {
        var i = DN[a.key] || a.key;
        if (i !== "Unidentified") return i;
      }
      return a.type === "keypress" ? (a = Ec(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? PN[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ih,
    charCode: function(a) {
      return a.type === "keypress" ? Ec(a) : 0;
    },
    keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    },
    which: function(a) {
      return a.type === "keypress" ? Ec(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }
  }), zN = Qt($N), qN = v({}, Cc, {
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
  }), lx = Qt(qN), BN = v({}, mu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ih
  }), kN = Qt(BN), LN = v({}, Ba, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), UN = Qt(LN), IN = v({}, Cc, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), HN = Qt(IN), GN = v({}, Ba, {
    newState: 0,
    oldState: 0
  }), YN = Qt(GN), KN = [9, 13, 27, 32], oh = mr && "CompositionEvent" in window, bu = null;
  mr && "documentMode" in document && (bu = document.documentMode);
  var XN = mr && "TextEvent" in window && !bu, cx = mr && (!oh || bu && 8 < bu && 11 >= bu), sx = " ", fx = !1;
  function dx(a, i) {
    switch (a) {
      case "keyup":
        return KN.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hx(a) {
    return a = a.detail, typeof a == "object" && "data" in a ? a.data : null;
  }
  var Bi = !1;
  function VN(a, i) {
    switch (a) {
      case "compositionend":
        return hx(i);
      case "keypress":
        return i.which !== 32 ? null : (fx = !0, sx);
      case "textInput":
        return a = i.data, a === sx && fx ? null : a;
      default:
        return null;
    }
  }
  function FN(a, i) {
    if (Bi)
      return a === "compositionend" || !oh && dx(a, i) ? (a = ax(), Tc = th = Jr = null, Bi = !1, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length)
            return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return cx && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var WN = {
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
  function px(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i === "input" ? !!WN[a.type] : i === "textarea";
  }
  function vx(a, i, u, s) {
    zi ? qi ? qi.push(s) : qi = [s] : zi = s, i = bs(i, "onChange"), 0 < i.length && (u = new Mc(
      "onChange",
      "change",
      null,
      u,
      s
    ), a.push({ event: u, listeners: i }));
  }
  var xu = null, Su = null;
  function ZN(a) {
    Z_(a, 0);
  }
  function Dc(a) {
    var i = pu(a);
    if (W1(i)) return a;
  }
  function yx(a, i) {
    if (a === "change") return i;
  }
  var mx = !1;
  if (mr) {
    var uh;
    if (mr) {
      var lh = "oninput" in document;
      if (!lh) {
        var gx = document.createElement("div");
        gx.setAttribute("oninput", "return;"), lh = typeof gx.oninput == "function";
      }
      uh = lh;
    } else uh = !1;
    mx = uh && (!document.documentMode || 9 < document.documentMode);
  }
  function bx() {
    xu && (xu.detachEvent("onpropertychange", xx), Su = xu = null);
  }
  function xx(a) {
    if (a.propertyName === "value" && Dc(Su)) {
      var i = [];
      vx(
        i,
        Su,
        a,
        Qd(a)
      ), rx(ZN, i);
    }
  }
  function QN(a, i, u) {
    a === "focusin" ? (bx(), xu = i, Su = u, xu.attachEvent("onpropertychange", xx)) : a === "focusout" && bx();
  }
  function JN(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return Dc(Su);
  }
  function eR(a, i) {
    if (a === "click") return Dc(i);
  }
  function tR(a, i) {
    if (a === "input" || a === "change")
      return Dc(i);
  }
  function nR(a, i) {
    return a === i && (a !== 0 || 1 / a === 1 / i) || a !== a && i !== i;
  }
  var sn = typeof Object.is == "function" ? Object.is : nR;
  function _u(a, i) {
    if (sn(a, i)) return !0;
    if (typeof a != "object" || a === null || typeof i != "object" || i === null)
      return !1;
    var u = Object.keys(a), s = Object.keys(i);
    if (u.length !== s.length) return !1;
    for (s = 0; s < u.length; s++) {
      var p = u[s];
      if (!Wt.call(i, p) || !sn(a[p], i[p]))
        return !1;
    }
    return !0;
  }
  function Sx(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function _x(a, i) {
    var u = Sx(a);
    a = 0;
    for (var s; u; ) {
      if (u.nodeType === 3) {
        if (s = a + u.textContent.length, a <= i && s >= i)
          return { node: u, offset: i - a };
        a = s;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Sx(u);
    }
  }
  function Ox(a, i) {
    return a && i ? a === i ? !0 : a && a.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Ox(a, i.parentNode) : "contains" in a ? a.contains(i) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function wx(a) {
    a = a != null && a.ownerDocument != null && a.ownerDocument.defaultView != null ? a.ownerDocument.defaultView : window;
    for (var i = wc(a.document); i instanceof a.HTMLIFrameElement; ) {
      try {
        var u = typeof i.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) a = i.contentWindow;
      else break;
      i = wc(a.document);
    }
    return i;
  }
  function ch(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i && (i === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || i === "textarea" || a.contentEditable === "true");
  }
  var rR = mr && "documentMode" in document && 11 >= document.documentMode, ki = null, sh = null, Ou = null, fh = !1;
  function Ax(a, i, u) {
    var s = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    fh || ki == null || ki !== wc(s) || (s = ki, "selectionStart" in s && ch(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Ou && _u(Ou, s) || (Ou = s, s = bs(sh, "onSelect"), 0 < s.length && (i = new Mc(
      "onSelect",
      "select",
      null,
      i,
      u
    ), a.push({ event: i, listeners: s }), i.target = ki)));
  }
  function ka(a, i) {
    var u = {};
    return u[a.toLowerCase()] = i.toLowerCase(), u["Webkit" + a] = "webkit" + i, u["Moz" + a] = "moz" + i, u;
  }
  var Li = {
    animationend: ka("Animation", "AnimationEnd"),
    animationiteration: ka("Animation", "AnimationIteration"),
    animationstart: ka("Animation", "AnimationStart"),
    transitionrun: ka("Transition", "TransitionRun"),
    transitionstart: ka("Transition", "TransitionStart"),
    transitioncancel: ka("Transition", "TransitionCancel"),
    transitionend: ka("Transition", "TransitionEnd")
  }, dh = {}, Tx = {};
  mr && (Tx = document.createElement("div").style, "AnimationEvent" in window || (delete Li.animationend.animation, delete Li.animationiteration.animation, delete Li.animationstart.animation), "TransitionEvent" in window || delete Li.transitionend.transition);
  function La(a) {
    if (dh[a]) return dh[a];
    if (!Li[a]) return a;
    var i = Li[a], u;
    for (u in i)
      if (i.hasOwnProperty(u) && u in Tx)
        return dh[a] = i[u];
    return a;
  }
  var Ex = La("animationend"), jx = La("animationiteration"), Mx = La("animationstart"), aR = La("transitionrun"), iR = La("transitionstart"), oR = La("transitioncancel"), Cx = La("transitionend"), Dx = /* @__PURE__ */ new Map(), hh = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hh.push("scrollEnd");
  function In(a, i) {
    Dx.set(a, i), qa(i, [a]);
  }
  var Pc = typeof reportError == "function" ? reportError : function(a) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var i = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof a == "object" && a !== null && typeof a.message == "string" ? String(a.message) : String(a),
        error: a
      });
      if (!window.dispatchEvent(i)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", a);
      return;
    }
    console.error(a);
  }, Tn = [], Ui = 0, ph = 0;
  function Nc() {
    for (var a = Ui, i = ph = Ui = 0; i < a; ) {
      var u = Tn[i];
      Tn[i++] = null;
      var s = Tn[i];
      Tn[i++] = null;
      var p = Tn[i];
      Tn[i++] = null;
      var m = Tn[i];
      if (Tn[i++] = null, s !== null && p !== null) {
        var O = s.pending;
        O === null ? p.next = p : (p.next = O.next, O.next = p), s.pending = p;
      }
      m !== 0 && Px(u, p, m);
    }
  }
  function Rc(a, i, u, s) {
    Tn[Ui++] = a, Tn[Ui++] = i, Tn[Ui++] = u, Tn[Ui++] = s, ph |= s, a.lanes |= s, a = a.alternate, a !== null && (a.lanes |= s);
  }
  function vh(a, i, u, s) {
    return Rc(a, i, u, s), $c(a);
  }
  function Ua(a, i) {
    return Rc(a, null, null, i), $c(a);
  }
  function Px(a, i, u) {
    a.lanes |= u;
    var s = a.alternate;
    s !== null && (s.lanes |= u);
    for (var p = !1, m = a.return; m !== null; )
      m.childLanes |= u, s = m.alternate, s !== null && (s.childLanes |= u), m.tag === 22 && (a = m.stateNode, a === null || a._visibility & 1 || (p = !0)), a = m, m = m.return;
    return a.tag === 3 ? (m = a.stateNode, p && i !== null && (p = 31 - cn(u), a = m.hiddenUpdates, s = a[p], s === null ? a[p] = [i] : s.push(i), i.lane = u | 536870912), m) : null;
  }
  function $c(a) {
    if (50 < Yu)
      throw Yu = 0, wp = null, Error(r(185));
    for (var i = a.return; i !== null; )
      a = i, i = a.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var Ii = {};
  function uR(a, i, u, s) {
    this.tag = a, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fn(a, i, u, s) {
    return new uR(a, i, u, s);
  }
  function yh(a) {
    return a = a.prototype, !(!a || !a.isReactComponent);
  }
  function gr(a, i) {
    var u = a.alternate;
    return u === null ? (u = fn(
      a.tag,
      i,
      a.key,
      a.mode
    ), u.elementType = a.elementType, u.type = a.type, u.stateNode = a.stateNode, u.alternate = a, a.alternate = u) : (u.pendingProps = i, u.type = a.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = a.flags & 65011712, u.childLanes = a.childLanes, u.lanes = a.lanes, u.child = a.child, u.memoizedProps = a.memoizedProps, u.memoizedState = a.memoizedState, u.updateQueue = a.updateQueue, i = a.dependencies, u.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, u.sibling = a.sibling, u.index = a.index, u.ref = a.ref, u.refCleanup = a.refCleanup, u;
  }
  function Nx(a, i) {
    a.flags &= 65011714;
    var u = a.alternate;
    return u === null ? (a.childLanes = 0, a.lanes = i, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = u.childLanes, a.lanes = u.lanes, a.child = u.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = u.memoizedProps, a.memoizedState = u.memoizedState, a.updateQueue = u.updateQueue, a.type = u.type, i = u.dependencies, a.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), a;
  }
  function zc(a, i, u, s, p, m) {
    var O = 0;
    if (s = a, typeof a == "function") yh(a) && (O = 1);
    else if (typeof a == "string")
      O = d3(
        a,
        u,
        se.current
      ) ? 26 : a === "html" || a === "head" || a === "body" ? 27 : 5;
    else
      e: switch (a) {
        case N:
          return a = fn(31, u, i, p), a.elementType = N, a.lanes = m, a;
        case S:
          return Ia(u.children, p, m, i);
        case x:
          O = 8, p |= 24;
          break;
        case A:
          return a = fn(12, u, i, p | 2), a.elementType = A, a.lanes = m, a;
        case w:
          return a = fn(13, u, i, p), a.elementType = w, a.lanes = m, a;
        case T:
          return a = fn(19, u, i, p), a.elementType = T, a.lanes = m, a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case M:
                O = 10;
                break e;
              case E:
                O = 9;
                break e;
              case j:
                O = 11;
                break e;
              case C:
                O = 14;
                break e;
              case R:
                O = 16, s = null;
                break e;
            }
          O = 29, u = Error(
            r(130, a === null ? "null" : typeof a, "")
          ), s = null;
      }
    return i = fn(O, u, i, p), i.elementType = a, i.type = s, i.lanes = m, i;
  }
  function Ia(a, i, u, s) {
    return a = fn(7, a, s, i), a.lanes = u, a;
  }
  function mh(a, i, u) {
    return a = fn(6, a, null, i), a.lanes = u, a;
  }
  function Rx(a) {
    var i = fn(18, null, null, 0);
    return i.stateNode = a, i;
  }
  function gh(a, i, u) {
    return i = fn(
      4,
      a.children !== null ? a.children : [],
      a.key,
      i
    ), i.lanes = u, i.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    }, i;
  }
  var $x = /* @__PURE__ */ new WeakMap();
  function En(a, i) {
    if (typeof a == "object" && a !== null) {
      var u = $x.get(a);
      return u !== void 0 ? u : (i = {
        value: a,
        source: i,
        stack: Xt(i)
      }, $x.set(a, i), i);
    }
    return {
      value: a,
      source: i,
      stack: Xt(i)
    };
  }
  var Hi = [], Gi = 0, qc = null, wu = 0, jn = [], Mn = 0, ea = null, Qn = 1, Jn = "";
  function br(a, i) {
    Hi[Gi++] = wu, Hi[Gi++] = qc, qc = a, wu = i;
  }
  function zx(a, i, u) {
    jn[Mn++] = Qn, jn[Mn++] = Jn, jn[Mn++] = ea, ea = a;
    var s = Qn;
    a = Jn;
    var p = 32 - cn(s) - 1;
    s &= ~(1 << p), u += 1;
    var m = 32 - cn(i) + p;
    if (30 < m) {
      var O = p - p % 5;
      m = (s & (1 << O) - 1).toString(32), s >>= O, p -= O, Qn = 1 << 32 - cn(i) + p | u << p | s, Jn = m + a;
    } else
      Qn = 1 << m | u << p | s, Jn = a;
  }
  function bh(a) {
    a.return !== null && (br(a, 1), zx(a, 1, 0));
  }
  function xh(a) {
    for (; a === qc; )
      qc = Hi[--Gi], Hi[Gi] = null, wu = Hi[--Gi], Hi[Gi] = null;
    for (; a === ea; )
      ea = jn[--Mn], jn[Mn] = null, Jn = jn[--Mn], jn[Mn] = null, Qn = jn[--Mn], jn[Mn] = null;
  }
  function qx(a, i) {
    jn[Mn++] = Qn, jn[Mn++] = Jn, jn[Mn++] = ea, Qn = i.id, Jn = i.overflow, ea = a;
  }
  var Rt = null, rt = null, qe = !1, ta = null, Cn = !1, Sh = Error(r(519));
  function na(a) {
    var i = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Au(En(i, a)), Sh;
  }
  function Bx(a) {
    var i = a.stateNode, u = a.type, s = a.memoizedProps;
    switch (i[Nt] = a, i[Zt] = s, u) {
      case "dialog":
        Pe("cancel", i), Pe("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        Pe("load", i);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Xu.length; u++)
          Pe(Xu[u], i);
        break;
      case "source":
        Pe("error", i);
        break;
      case "img":
      case "image":
      case "link":
        Pe("error", i), Pe("load", i);
        break;
      case "details":
        Pe("toggle", i);
        break;
      case "input":
        Pe("invalid", i), Z1(
          i,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        );
        break;
      case "select":
        Pe("invalid", i);
        break;
      case "textarea":
        Pe("invalid", i), J1(i, s.value, s.defaultValue, s.children);
    }
    u = s.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || i.textContent === "" + u || s.suppressHydrationWarning === !0 || tO(i.textContent, u) ? (s.popover != null && (Pe("beforetoggle", i), Pe("toggle", i)), s.onScroll != null && Pe("scroll", i), s.onScrollEnd != null && Pe("scrollend", i), s.onClick != null && (i.onclick = yr), i = !0) : i = !1, i || na(a, !0);
  }
  function kx(a) {
    for (Rt = a.return; Rt; )
      switch (Rt.tag) {
        case 5:
        case 31:
        case 13:
          Cn = !1;
          return;
        case 27:
        case 3:
          Cn = !0;
          return;
        default:
          Rt = Rt.return;
      }
  }
  function Yi(a) {
    if (a !== Rt) return !1;
    if (!qe) return kx(a), qe = !0, !1;
    var i = a.tag, u;
    if ((u = i !== 3 && i !== 27) && ((u = i === 5) && (u = a.type, u = !(u !== "form" && u !== "button") || kp(a.type, a.memoizedProps)), u = !u), u && rt && na(a), kx(a), i === 13) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      rt = sO(a);
    } else if (i === 31) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      rt = sO(a);
    } else
      i === 27 ? (i = rt, ya(a.type) ? (a = Gp, Gp = null, rt = a) : rt = i) : rt = Rt ? Pn(a.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    rt = Rt = null, qe = !1;
  }
  function _h() {
    var a = ta;
    return a !== null && (nn === null ? nn = a : nn.push.apply(
      nn,
      a
    ), ta = null), a;
  }
  function Au(a) {
    ta === null ? ta = [a] : ta.push(a);
  }
  var Oh = P(null), Ga = null, xr = null;
  function ra(a, i, u) {
    re(Oh, i._currentValue), i._currentValue = u;
  }
  function Sr(a) {
    a._currentValue = Oh.current, U(Oh);
  }
  function wh(a, i, u) {
    for (; a !== null; ) {
      var s = a.alternate;
      if ((a.childLanes & i) !== i ? (a.childLanes |= i, s !== null && (s.childLanes |= i)) : s !== null && (s.childLanes & i) !== i && (s.childLanes |= i), a === u) break;
      a = a.return;
    }
  }
  function Ah(a, i, u, s) {
    var p = a.child;
    for (p !== null && (p.return = a); p !== null; ) {
      var m = p.dependencies;
      if (m !== null) {
        var O = p.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var D = m;
          m = p;
          for (var q = 0; q < i.length; q++)
            if (D.context === i[q]) {
              m.lanes |= u, D = m.alternate, D !== null && (D.lanes |= u), wh(
                m.return,
                u,
                a
              ), s || (O = null);
              break e;
            }
          m = D.next;
        }
      } else if (p.tag === 18) {
        if (O = p.return, O === null) throw Error(r(341));
        O.lanes |= u, m = O.alternate, m !== null && (m.lanes |= u), wh(O, u, a), O = null;
      } else O = p.child;
      if (O !== null) O.return = p;
      else
        for (O = p; O !== null; ) {
          if (O === a) {
            O = null;
            break;
          }
          if (p = O.sibling, p !== null) {
            p.return = O.return, O = p;
            break;
          }
          O = O.return;
        }
      p = O;
    }
  }
  function Ki(a, i, u, s) {
    a = null;
    for (var p = i, m = !1; p !== null; ) {
      if (!m) {
        if ((p.flags & 524288) !== 0) m = !0;
        else if ((p.flags & 262144) !== 0) break;
      }
      if (p.tag === 10) {
        var O = p.alternate;
        if (O === null) throw Error(r(387));
        if (O = O.memoizedProps, O !== null) {
          var D = p.type;
          sn(p.pendingProps.value, O.value) || (a !== null ? a.push(D) : a = [D]);
        }
      } else if (p === _e.current) {
        if (O = p.alternate, O === null) throw Error(r(387));
        O.memoizedState.memoizedState !== p.memoizedState.memoizedState && (a !== null ? a.push(Qu) : a = [Qu]);
      }
      p = p.return;
    }
    a !== null && Ah(
      i,
      a,
      u,
      s
    ), i.flags |= 262144;
  }
  function Bc(a) {
    for (a = a.firstContext; a !== null; ) {
      if (!sn(
        a.context._currentValue,
        a.memoizedValue
      ))
        return !0;
      a = a.next;
    }
    return !1;
  }
  function Ya(a) {
    Ga = a, xr = null, a = a.dependencies, a !== null && (a.firstContext = null);
  }
  function $t(a) {
    return Lx(Ga, a);
  }
  function kc(a, i) {
    return Ga === null && Ya(a), Lx(a, i);
  }
  function Lx(a, i) {
    var u = i._currentValue;
    if (i = { context: i, memoizedValue: u, next: null }, xr === null) {
      if (a === null) throw Error(r(308));
      xr = i, a.dependencies = { lanes: 0, firstContext: i }, a.flags |= 524288;
    } else xr = xr.next = i;
    return u;
  }
  var lR = typeof AbortController < "u" ? AbortController : function() {
    var a = [], i = this.signal = {
      aborted: !1,
      addEventListener: function(u, s) {
        a.push(s);
      }
    };
    this.abort = function() {
      i.aborted = !0, a.forEach(function(u) {
        return u();
      });
    };
  }, cR = e.unstable_scheduleCallback, sR = e.unstable_NormalPriority, vt = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Th() {
    return {
      controller: new lR(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Tu(a) {
    a.refCount--, a.refCount === 0 && cR(sR, function() {
      a.controller.abort();
    });
  }
  var Eu = null, Eh = 0, Xi = 0, Vi = null;
  function fR(a, i) {
    if (Eu === null) {
      var u = Eu = [];
      Eh = 0, Xi = Cp(), Vi = {
        status: "pending",
        value: void 0,
        then: function(s) {
          u.push(s);
        }
      };
    }
    return Eh++, i.then(Ux, Ux), i;
  }
  function Ux() {
    if (--Eh === 0 && Eu !== null) {
      Vi !== null && (Vi.status = "fulfilled");
      var a = Eu;
      Eu = null, Xi = 0, Vi = null;
      for (var i = 0; i < a.length; i++) (0, a[i])();
    }
  }
  function dR(a, i) {
    var u = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(p) {
        u.push(p);
      }
    };
    return a.then(
      function() {
        s.status = "fulfilled", s.value = i;
        for (var p = 0; p < u.length; p++) (0, u[p])(i);
      },
      function(p) {
        for (s.status = "rejected", s.reason = p, p = 0; p < u.length; p++)
          (0, u[p])(void 0);
      }
    ), s;
  }
  var Ix = $.S;
  $.S = function(a, i) {
    A_ = Ut(), typeof i == "object" && i !== null && typeof i.then == "function" && fR(a, i), Ix !== null && Ix(a, i);
  };
  var Ka = P(null);
  function jh() {
    var a = Ka.current;
    return a !== null ? a : Qe.pooledCache;
  }
  function Lc(a, i) {
    i === null ? re(Ka, Ka.current) : re(Ka, i.pool);
  }
  function Hx() {
    var a = jh();
    return a === null ? null : { parent: vt._currentValue, pool: a };
  }
  var Fi = Error(r(460)), Mh = Error(r(474)), Uc = Error(r(542)), Ic = { then: function() {
  } };
  function Gx(a) {
    return a = a.status, a === "fulfilled" || a === "rejected";
  }
  function Yx(a, i, u) {
    switch (u = a[u], u === void 0 ? a.push(i) : u !== i && (i.then(yr, yr), i = u), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw a = i.reason, Xx(a), a;
      default:
        if (typeof i.status == "string") i.then(yr, yr);
        else {
          if (a = Qe, a !== null && 100 < a.shellSuspendCounter)
            throw Error(r(482));
          a = i, a.status = "pending", a.then(
            function(s) {
              if (i.status === "pending") {
                var p = i;
                p.status = "fulfilled", p.value = s;
              }
            },
            function(s) {
              if (i.status === "pending") {
                var p = i;
                p.status = "rejected", p.reason = s;
              }
            }
          );
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw a = i.reason, Xx(a), a;
        }
        throw Va = i, Fi;
    }
  }
  function Xa(a) {
    try {
      var i = a._init;
      return i(a._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Va = u, Fi) : u;
    }
  }
  var Va = null;
  function Kx() {
    if (Va === null) throw Error(r(459));
    var a = Va;
    return Va = null, a;
  }
  function Xx(a) {
    if (a === Fi || a === Uc)
      throw Error(r(483));
  }
  var Wi = null, ju = 0;
  function Hc(a) {
    var i = ju;
    return ju += 1, Wi === null && (Wi = []), Yx(Wi, a, i);
  }
  function Mu(a, i) {
    i = i.props.ref, a.ref = i !== void 0 ? i : null;
  }
  function Gc(a, i) {
    throw i.$$typeof === g ? Error(r(525)) : (a = Object.prototype.toString.call(i), Error(
      r(
        31,
        a === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : a
      )
    ));
  }
  function Vx(a) {
    function i(X, I) {
      if (a) {
        var W = X.deletions;
        W === null ? (X.deletions = [I], X.flags |= 16) : W.push(I);
      }
    }
    function u(X, I) {
      if (!a) return null;
      for (; I !== null; )
        i(X, I), I = I.sibling;
      return null;
    }
    function s(X) {
      for (var I = /* @__PURE__ */ new Map(); X !== null; )
        X.key !== null ? I.set(X.key, X) : I.set(X.index, X), X = X.sibling;
      return I;
    }
    function p(X, I) {
      return X = gr(X, I), X.index = 0, X.sibling = null, X;
    }
    function m(X, I, W) {
      return X.index = W, a ? (W = X.alternate, W !== null ? (W = W.index, W < I ? (X.flags |= 67108866, I) : W) : (X.flags |= 67108866, I)) : (X.flags |= 1048576, I);
    }
    function O(X) {
      return a && X.alternate === null && (X.flags |= 67108866), X;
    }
    function D(X, I, W, oe) {
      return I === null || I.tag !== 6 ? (I = mh(W, X.mode, oe), I.return = X, I) : (I = p(I, W), I.return = X, I);
    }
    function q(X, I, W, oe) {
      var be = W.type;
      return be === S ? ae(
        X,
        I,
        W.props.children,
        oe,
        W.key
      ) : I !== null && (I.elementType === be || typeof be == "object" && be !== null && be.$$typeof === R && Xa(be) === I.type) ? (I = p(I, W.props), Mu(I, W), I.return = X, I) : (I = zc(
        W.type,
        W.key,
        W.props,
        null,
        X.mode,
        oe
      ), Mu(I, W), I.return = X, I);
    }
    function Z(X, I, W, oe) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== W.containerInfo || I.stateNode.implementation !== W.implementation ? (I = gh(W, X.mode, oe), I.return = X, I) : (I = p(I, W.children || []), I.return = X, I);
    }
    function ae(X, I, W, oe, be) {
      return I === null || I.tag !== 7 ? (I = Ia(
        W,
        X.mode,
        oe,
        be
      ), I.return = X, I) : (I = p(I, W), I.return = X, I);
    }
    function ue(X, I, W) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return I = mh(
          "" + I,
          X.mode,
          W
        ), I.return = X, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            return W = zc(
              I.type,
              I.key,
              I.props,
              null,
              X.mode,
              W
            ), Mu(W, I), W.return = X, W;
          case _:
            return I = gh(
              I,
              X.mode,
              W
            ), I.return = X, I;
          case R:
            return I = Xa(I), ue(X, I, W);
        }
        if (V(I) || B(I))
          return I = Ia(
            I,
            X.mode,
            W,
            null
          ), I.return = X, I;
        if (typeof I.then == "function")
          return ue(X, Hc(I), W);
        if (I.$$typeof === M)
          return ue(
            X,
            kc(X, I),
            W
          );
        Gc(X, I);
      }
      return null;
    }
    function Q(X, I, W, oe) {
      var be = I !== null ? I.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
        return be !== null ? null : D(X, I, "" + W, oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            return W.key === be ? q(X, I, W, oe) : null;
          case _:
            return W.key === be ? Z(X, I, W, oe) : null;
          case R:
            return W = Xa(W), Q(X, I, W, oe);
        }
        if (V(W) || B(W))
          return be !== null ? null : ae(X, I, W, oe, null);
        if (typeof W.then == "function")
          return Q(
            X,
            I,
            Hc(W),
            oe
          );
        if (W.$$typeof === M)
          return Q(
            X,
            I,
            kc(X, W),
            oe
          );
        Gc(X, W);
      }
      return null;
    }
    function te(X, I, W, oe, be) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return X = X.get(W) || null, D(I, X, "" + oe, be);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case b:
            return X = X.get(
              oe.key === null ? W : oe.key
            ) || null, q(I, X, oe, be);
          case _:
            return X = X.get(
              oe.key === null ? W : oe.key
            ) || null, Z(I, X, oe, be);
          case R:
            return oe = Xa(oe), te(
              X,
              I,
              W,
              oe,
              be
            );
        }
        if (V(oe) || B(oe))
          return X = X.get(W) || null, ae(I, X, oe, be, null);
        if (typeof oe.then == "function")
          return te(
            X,
            I,
            W,
            Hc(oe),
            be
          );
        if (oe.$$typeof === M)
          return te(
            X,
            I,
            W,
            kc(I, oe),
            be
          );
        Gc(I, oe);
      }
      return null;
    }
    function ye(X, I, W, oe) {
      for (var be = null, Be = null, me = I, Me = I = 0, Re = null; me !== null && Me < W.length; Me++) {
        me.index > Me ? (Re = me, me = null) : Re = me.sibling;
        var ke = Q(
          X,
          me,
          W[Me],
          oe
        );
        if (ke === null) {
          me === null && (me = Re);
          break;
        }
        a && me && ke.alternate === null && i(X, me), I = m(ke, I, Me), Be === null ? be = ke : Be.sibling = ke, Be = ke, me = Re;
      }
      if (Me === W.length)
        return u(X, me), qe && br(X, Me), be;
      if (me === null) {
        for (; Me < W.length; Me++)
          me = ue(X, W[Me], oe), me !== null && (I = m(
            me,
            I,
            Me
          ), Be === null ? be = me : Be.sibling = me, Be = me);
        return qe && br(X, Me), be;
      }
      for (me = s(me); Me < W.length; Me++)
        Re = te(
          me,
          X,
          Me,
          W[Me],
          oe
        ), Re !== null && (a && Re.alternate !== null && me.delete(
          Re.key === null ? Me : Re.key
        ), I = m(
          Re,
          I,
          Me
        ), Be === null ? be = Re : Be.sibling = Re, Be = Re);
      return a && me.forEach(function(Sa) {
        return i(X, Sa);
      }), qe && br(X, Me), be;
    }
    function xe(X, I, W, oe) {
      if (W == null) throw Error(r(151));
      for (var be = null, Be = null, me = I, Me = I = 0, Re = null, ke = W.next(); me !== null && !ke.done; Me++, ke = W.next()) {
        me.index > Me ? (Re = me, me = null) : Re = me.sibling;
        var Sa = Q(X, me, ke.value, oe);
        if (Sa === null) {
          me === null && (me = Re);
          break;
        }
        a && me && Sa.alternate === null && i(X, me), I = m(Sa, I, Me), Be === null ? be = Sa : Be.sibling = Sa, Be = Sa, me = Re;
      }
      if (ke.done)
        return u(X, me), qe && br(X, Me), be;
      if (me === null) {
        for (; !ke.done; Me++, ke = W.next())
          ke = ue(X, ke.value, oe), ke !== null && (I = m(ke, I, Me), Be === null ? be = ke : Be.sibling = ke, Be = ke);
        return qe && br(X, Me), be;
      }
      for (me = s(me); !ke.done; Me++, ke = W.next())
        ke = te(me, X, Me, ke.value, oe), ke !== null && (a && ke.alternate !== null && me.delete(ke.key === null ? Me : ke.key), I = m(ke, I, Me), Be === null ? be = ke : Be.sibling = ke, Be = ke);
      return a && me.forEach(function(O3) {
        return i(X, O3);
      }), qe && br(X, Me), be;
    }
    function We(X, I, W, oe) {
      if (typeof W == "object" && W !== null && W.type === S && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            e: {
              for (var be = W.key; I !== null; ) {
                if (I.key === be) {
                  if (be = W.type, be === S) {
                    if (I.tag === 7) {
                      u(
                        X,
                        I.sibling
                      ), oe = p(
                        I,
                        W.props.children
                      ), oe.return = X, X = oe;
                      break e;
                    }
                  } else if (I.elementType === be || typeof be == "object" && be !== null && be.$$typeof === R && Xa(be) === I.type) {
                    u(
                      X,
                      I.sibling
                    ), oe = p(I, W.props), Mu(oe, W), oe.return = X, X = oe;
                    break e;
                  }
                  u(X, I);
                  break;
                } else i(X, I);
                I = I.sibling;
              }
              W.type === S ? (oe = Ia(
                W.props.children,
                X.mode,
                oe,
                W.key
              ), oe.return = X, X = oe) : (oe = zc(
                W.type,
                W.key,
                W.props,
                null,
                X.mode,
                oe
              ), Mu(oe, W), oe.return = X, X = oe);
            }
            return O(X);
          case _:
            e: {
              for (be = W.key; I !== null; ) {
                if (I.key === be)
                  if (I.tag === 4 && I.stateNode.containerInfo === W.containerInfo && I.stateNode.implementation === W.implementation) {
                    u(
                      X,
                      I.sibling
                    ), oe = p(I, W.children || []), oe.return = X, X = oe;
                    break e;
                  } else {
                    u(X, I);
                    break;
                  }
                else i(X, I);
                I = I.sibling;
              }
              oe = gh(W, X.mode, oe), oe.return = X, X = oe;
            }
            return O(X);
          case R:
            return W = Xa(W), We(
              X,
              I,
              W,
              oe
            );
        }
        if (V(W))
          return ye(
            X,
            I,
            W,
            oe
          );
        if (B(W)) {
          if (be = B(W), typeof be != "function") throw Error(r(150));
          return W = be.call(W), xe(
            X,
            I,
            W,
            oe
          );
        }
        if (typeof W.then == "function")
          return We(
            X,
            I,
            Hc(W),
            oe
          );
        if (W.$$typeof === M)
          return We(
            X,
            I,
            kc(X, W),
            oe
          );
        Gc(X, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint" ? (W = "" + W, I !== null && I.tag === 6 ? (u(X, I.sibling), oe = p(I, W), oe.return = X, X = oe) : (u(X, I), oe = mh(W, X.mode, oe), oe.return = X, X = oe), O(X)) : u(X, I);
    }
    return function(X, I, W, oe) {
      try {
        ju = 0;
        var be = We(
          X,
          I,
          W,
          oe
        );
        return Wi = null, be;
      } catch (me) {
        if (me === Fi || me === Uc) throw me;
        var Be = fn(29, me, null, X.mode);
        return Be.lanes = oe, Be.return = X, Be;
      } finally {
      }
    };
  }
  var Fa = Vx(!0), Fx = Vx(!1), aa = !1;
  function Ch(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Dh(a, i) {
    a = a.updateQueue, i.updateQueue === a && (i.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      callbacks: null
    });
  }
  function ia(a) {
    return { lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function oa(a, i, u) {
    var s = a.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ue & 2) !== 0) {
      var p = s.pending;
      return p === null ? i.next = i : (i.next = p.next, p.next = i), s.pending = i, i = $c(a), Px(a, null, u), i;
    }
    return Rc(a, s, i, u), $c(a);
  }
  function Cu(a, i, u) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (u & 4194048) !== 0)) {
      var s = i.lanes;
      s &= a.pendingLanes, u |= s, i.lanes = u, L1(a, u);
    }
  }
  function Ph(a, i) {
    var u = a.updateQueue, s = a.alternate;
    if (s !== null && (s = s.updateQueue, u === s)) {
      var p = null, m = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var O = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          m === null ? p = m = O : m = m.next = O, u = u.next;
        } while (u !== null);
        m === null ? p = m = i : m = m.next = i;
      } else p = m = i;
      u = {
        baseState: s.baseState,
        firstBaseUpdate: p,
        lastBaseUpdate: m,
        shared: s.shared,
        callbacks: s.callbacks
      }, a.updateQueue = u;
      return;
    }
    a = u.lastBaseUpdate, a === null ? u.firstBaseUpdate = i : a.next = i, u.lastBaseUpdate = i;
  }
  var Nh = !1;
  function Du() {
    if (Nh) {
      var a = Vi;
      if (a !== null) throw a;
    }
  }
  function Pu(a, i, u, s) {
    Nh = !1;
    var p = a.updateQueue;
    aa = !1;
    var m = p.firstBaseUpdate, O = p.lastBaseUpdate, D = p.shared.pending;
    if (D !== null) {
      p.shared.pending = null;
      var q = D, Z = q.next;
      q.next = null, O === null ? m = Z : O.next = Z, O = q;
      var ae = a.alternate;
      ae !== null && (ae = ae.updateQueue, D = ae.lastBaseUpdate, D !== O && (D === null ? ae.firstBaseUpdate = Z : D.next = Z, ae.lastBaseUpdate = q));
    }
    if (m !== null) {
      var ue = p.baseState;
      O = 0, ae = Z = q = null, D = m;
      do {
        var Q = D.lane & -536870913, te = Q !== D.lane;
        if (te ? (Ne & Q) === Q : (s & Q) === Q) {
          Q !== 0 && Q === Xi && (Nh = !0), ae !== null && (ae = ae.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = a, xe = D;
            Q = i;
            var We = u;
            switch (xe.tag) {
              case 1:
                if (ye = xe.payload, typeof ye == "function") {
                  ue = ye.call(We, ue, Q);
                  break e;
                }
                ue = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = xe.payload, Q = typeof ye == "function" ? ye.call(We, ue, Q) : ye, Q == null) break e;
                ue = v({}, ue, Q);
                break e;
              case 2:
                aa = !0;
            }
          }
          Q = D.callback, Q !== null && (a.flags |= 64, te && (a.flags |= 8192), te = p.callbacks, te === null ? p.callbacks = [Q] : te.push(Q));
        } else
          te = {
            lane: Q,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, ae === null ? (Z = ae = te, q = ue) : ae = ae.next = te, O |= Q;
        if (D = D.next, D === null) {
          if (D = p.shared.pending, D === null)
            break;
          te = D, D = te.next, te.next = null, p.lastBaseUpdate = te, p.shared.pending = null;
        }
      } while (!0);
      ae === null && (q = ue), p.baseState = q, p.firstBaseUpdate = Z, p.lastBaseUpdate = ae, m === null && (p.shared.lanes = 0), fa |= O, a.lanes = O, a.memoizedState = ue;
    }
  }
  function Wx(a, i) {
    if (typeof a != "function")
      throw Error(r(191, a));
    a.call(i);
  }
  function Zx(a, i) {
    var u = a.callbacks;
    if (u !== null)
      for (a.callbacks = null, a = 0; a < u.length; a++)
        Wx(u[a], i);
  }
  var Zi = P(null), Yc = P(0);
  function Qx(a, i) {
    a = Cr, re(Yc, a), re(Zi, i), Cr = a | i.baseLanes;
  }
  function Rh() {
    re(Yc, Cr), re(Zi, Zi.current);
  }
  function $h() {
    Cr = Yc.current, U(Zi), U(Yc);
  }
  var dn = P(null), Dn = null;
  function ua(a) {
    var i = a.alternate;
    re(dt, dt.current & 1), re(dn, a), Dn === null && (i === null || Zi.current !== null || i.memoizedState !== null) && (Dn = a);
  }
  function zh(a) {
    re(dt, dt.current), re(dn, a), Dn === null && (Dn = a);
  }
  function Jx(a) {
    a.tag === 22 ? (re(dt, dt.current), re(dn, a), Dn === null && (Dn = a)) : la();
  }
  function la() {
    re(dt, dt.current), re(dn, dn.current);
  }
  function hn(a) {
    U(dn), Dn === a && (Dn = null), U(dt);
  }
  var dt = P(0);
  function Kc(a) {
    for (var i = a; i !== null; ) {
      if (i.tag === 13) {
        var u = i.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Ip(u) || Hp(u)))
          return i;
      } else if (i.tag === 19 && (i.memoizedProps.revealOrder === "forwards" || i.memoizedProps.revealOrder === "backwards" || i.memoizedProps.revealOrder === "unstable_legacy-backwards" || i.memoizedProps.revealOrder === "together")) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === a) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === a) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var _r = 0, je = null, Ve = null, yt = null, Xc = !1, Qi = !1, Wa = !1, Vc = 0, Nu = 0, Ji = null, hR = 0;
  function ct() {
    throw Error(r(321));
  }
  function qh(a, i) {
    if (i === null) return !1;
    for (var u = 0; u < i.length && u < a.length; u++)
      if (!sn(a[u], i[u])) return !1;
    return !0;
  }
  function Bh(a, i, u, s, p, m) {
    return _r = m, je = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, $.H = a === null || a.memoizedState === null ? zS : Jh, Wa = !1, m = u(s, p), Wa = !1, Qi && (m = tS(
      i,
      u,
      s,
      p
    )), eS(a), m;
  }
  function eS(a) {
    $.H = zu;
    var i = Ve !== null && Ve.next !== null;
    if (_r = 0, yt = Ve = je = null, Xc = !1, Nu = 0, Ji = null, i) throw Error(r(300));
    a === null || mt || (a = a.dependencies, a !== null && Bc(a) && (mt = !0));
  }
  function tS(a, i, u, s) {
    je = a;
    var p = 0;
    do {
      if (Qi && (Ji = null), Nu = 0, Qi = !1, 25 <= p) throw Error(r(301));
      if (p += 1, yt = Ve = null, a.updateQueue != null) {
        var m = a.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      $.H = qS, m = i(u, s);
    } while (Qi);
    return m;
  }
  function pR() {
    var a = $.H, i = a.useState()[0];
    return i = typeof i.then == "function" ? Ru(i) : i, a = a.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== a && (je.flags |= 1024), i;
  }
  function kh() {
    var a = Vc !== 0;
    return Vc = 0, a;
  }
  function Lh(a, i, u) {
    i.updateQueue = a.updateQueue, i.flags &= -2053, a.lanes &= ~u;
  }
  function Uh(a) {
    if (Xc) {
      for (a = a.memoizedState; a !== null; ) {
        var i = a.queue;
        i !== null && (i.pending = null), a = a.next;
      }
      Xc = !1;
    }
    _r = 0, yt = Ve = je = null, Qi = !1, Nu = Vc = 0, Ji = null;
  }
  function Vt() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yt === null ? je.memoizedState = yt = a : yt = yt.next = a, yt;
  }
  function ht() {
    if (Ve === null) {
      var a = je.alternate;
      a = a !== null ? a.memoizedState : null;
    } else a = Ve.next;
    var i = yt === null ? je.memoizedState : yt.next;
    if (i !== null)
      yt = i, Ve = a;
    else {
      if (a === null)
        throw je.alternate === null ? Error(r(467)) : Error(r(310));
      Ve = a, a = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null
      }, yt === null ? je.memoizedState = yt = a : yt = yt.next = a;
    }
    return yt;
  }
  function Fc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ru(a) {
    var i = Nu;
    return Nu += 1, Ji === null && (Ji = []), a = Yx(Ji, a, i), i = je, (yt === null ? i.memoizedState : yt.next) === null && (i = i.alternate, $.H = i === null || i.memoizedState === null ? zS : Jh), a;
  }
  function Wc(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return Ru(a);
      if (a.$$typeof === M) return $t(a);
    }
    throw Error(r(438, String(a)));
  }
  function Ih(a) {
    var i = null, u = je.updateQueue;
    if (u !== null && (i = u.memoCache), i == null) {
      var s = je.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (i = {
        data: s.data.map(function(p) {
          return p.slice();
        }),
        index: 0
      })));
    }
    if (i == null && (i = { data: [], index: 0 }), u === null && (u = Fc(), je.updateQueue = u), u.memoCache = i, u = i.data[i.index], u === void 0)
      for (u = i.data[i.index] = Array(a), s = 0; s < a; s++)
        u[s] = K;
    return i.index++, u;
  }
  function Or(a, i) {
    return typeof i == "function" ? i(a) : i;
  }
  function Zc(a) {
    var i = ht();
    return Hh(i, Ve, a);
  }
  function Hh(a, i, u) {
    var s = a.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = u;
    var p = a.baseQueue, m = s.pending;
    if (m !== null) {
      if (p !== null) {
        var O = p.next;
        p.next = m.next, m.next = O;
      }
      i.baseQueue = p = m, s.pending = null;
    }
    if (m = a.baseState, p === null) a.memoizedState = m;
    else {
      i = p.next;
      var D = O = null, q = null, Z = i, ae = !1;
      do {
        var ue = Z.lane & -536870913;
        if (ue !== Z.lane ? (Ne & ue) === ue : (_r & ue) === ue) {
          var Q = Z.revertLane;
          if (Q === 0)
            q !== null && (q = q.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            }), ue === Xi && (ae = !0);
          else if ((_r & Q) === Q) {
            Z = Z.next, Q === Xi && (ae = !0);
            continue;
          } else
            ue = {
              lane: 0,
              revertLane: Z.revertLane,
              gesture: null,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            }, q === null ? (D = q = ue, O = m) : q = q.next = ue, je.lanes |= Q, fa |= Q;
          ue = Z.action, Wa && u(m, ue), m = Z.hasEagerState ? Z.eagerState : u(m, ue);
        } else
          Q = {
            lane: ue,
            revertLane: Z.revertLane,
            gesture: Z.gesture,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          }, q === null ? (D = q = Q, O = m) : q = q.next = Q, je.lanes |= ue, fa |= ue;
        Z = Z.next;
      } while (Z !== null && Z !== i);
      if (q === null ? O = m : q.next = D, !sn(m, a.memoizedState) && (mt = !0, ae && (u = Vi, u !== null)))
        throw u;
      a.memoizedState = m, a.baseState = O, a.baseQueue = q, s.lastRenderedState = m;
    }
    return p === null && (s.lanes = 0), [a.memoizedState, s.dispatch];
  }
  function Gh(a) {
    var i = ht(), u = i.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = a;
    var s = u.dispatch, p = u.pending, m = i.memoizedState;
    if (p !== null) {
      u.pending = null;
      var O = p = p.next;
      do
        m = a(m, O.action), O = O.next;
      while (O !== p);
      sn(m, i.memoizedState) || (mt = !0), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), u.lastRenderedState = m;
    }
    return [m, s];
  }
  function nS(a, i, u) {
    var s = je, p = ht(), m = qe;
    if (m) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = i();
    var O = !sn(
      (Ve || p).memoizedState,
      u
    );
    if (O && (p.memoizedState = u, mt = !0), p = p.queue, Xh(iS.bind(null, s, p, a), [
      a
    ]), p.getSnapshot !== i || O || yt !== null && yt.memoizedState.tag & 1) {
      if (s.flags |= 2048, eo(
        9,
        { destroy: void 0 },
        aS.bind(
          null,
          s,
          p,
          u,
          i
        ),
        null
      ), Qe === null) throw Error(r(349));
      m || (_r & 127) !== 0 || rS(s, i, u);
    }
    return u;
  }
  function rS(a, i, u) {
    a.flags |= 16384, a = { getSnapshot: i, value: u }, i = je.updateQueue, i === null ? (i = Fc(), je.updateQueue = i, i.stores = [a]) : (u = i.stores, u === null ? i.stores = [a] : u.push(a));
  }
  function aS(a, i, u, s) {
    i.value = u, i.getSnapshot = s, oS(i) && uS(a);
  }
  function iS(a, i, u) {
    return u(function() {
      oS(i) && uS(a);
    });
  }
  function oS(a) {
    var i = a.getSnapshot;
    a = a.value;
    try {
      var u = i();
      return !sn(a, u);
    } catch {
      return !0;
    }
  }
  function uS(a) {
    var i = Ua(a, 2);
    i !== null && rn(i, a, 2);
  }
  function Yh(a) {
    var i = Vt();
    if (typeof a == "function") {
      var u = a;
      if (a = u(), Wa) {
        Zr(!0);
        try {
          u();
        } finally {
          Zr(!1);
        }
      }
    }
    return i.memoizedState = i.baseState = a, i.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Or,
      lastRenderedState: a
    }, i;
  }
  function lS(a, i, u, s) {
    return a.baseState = u, Hh(
      a,
      Ve,
      typeof s == "function" ? s : Or
    );
  }
  function vR(a, i, u, s, p) {
    if (es(a)) throw Error(r(485));
    if (a = i.action, a !== null) {
      var m = {
        payload: p,
        action: a,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(O) {
          m.listeners.push(O);
        }
      };
      $.T !== null ? u(!0) : m.isTransition = !1, s(m), u = i.pending, u === null ? (m.next = i.pending = m, cS(i, m)) : (m.next = u.next, i.pending = u.next = m);
    }
  }
  function cS(a, i) {
    var u = i.action, s = i.payload, p = a.state;
    if (i.isTransition) {
      var m = $.T, O = {};
      $.T = O;
      try {
        var D = u(p, s), q = $.S;
        q !== null && q(O, D), sS(a, i, D);
      } catch (Z) {
        Kh(a, i, Z);
      } finally {
        m !== null && O.types !== null && (m.types = O.types), $.T = m;
      }
    } else
      try {
        m = u(p, s), sS(a, i, m);
      } catch (Z) {
        Kh(a, i, Z);
      }
  }
  function sS(a, i, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(s) {
        fS(a, i, s);
      },
      function(s) {
        return Kh(a, i, s);
      }
    ) : fS(a, i, u);
  }
  function fS(a, i, u) {
    i.status = "fulfilled", i.value = u, dS(i), a.state = u, i = a.pending, i !== null && (u = i.next, u === i ? a.pending = null : (u = u.next, i.next = u, cS(a, u)));
  }
  function Kh(a, i, u) {
    var s = a.pending;
    if (a.pending = null, s !== null) {
      s = s.next;
      do
        i.status = "rejected", i.reason = u, dS(i), i = i.next;
      while (i !== s);
    }
    a.action = null;
  }
  function dS(a) {
    a = a.listeners;
    for (var i = 0; i < a.length; i++) (0, a[i])();
  }
  function hS(a, i) {
    return i;
  }
  function pS(a, i) {
    if (qe) {
      var u = Qe.formState;
      if (u !== null) {
        e: {
          var s = je;
          if (qe) {
            if (rt) {
              t: {
                for (var p = rt, m = Cn; p.nodeType !== 8; ) {
                  if (!m) {
                    p = null;
                    break t;
                  }
                  if (p = Pn(
                    p.nextSibling
                  ), p === null) {
                    p = null;
                    break t;
                  }
                }
                m = p.data, p = m === "F!" || m === "F" ? p : null;
              }
              if (p) {
                rt = Pn(
                  p.nextSibling
                ), s = p.data === "F!";
                break e;
              }
            }
            na(s);
          }
          s = !1;
        }
        s && (i = u[0]);
      }
    }
    return u = Vt(), u.memoizedState = u.baseState = i, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hS,
      lastRenderedState: i
    }, u.queue = s, u = NS.bind(
      null,
      je,
      s
    ), s.dispatch = u, s = Yh(!1), m = Qh.bind(
      null,
      je,
      !1,
      s.queue
    ), s = Vt(), p = {
      state: i,
      dispatch: null,
      action: a,
      pending: null
    }, s.queue = p, u = vR.bind(
      null,
      je,
      p,
      m,
      u
    ), p.dispatch = u, s.memoizedState = a, [i, u, !1];
  }
  function vS(a) {
    var i = ht();
    return yS(i, Ve, a);
  }
  function yS(a, i, u) {
    if (i = Hh(
      a,
      i,
      hS
    )[0], a = Zc(Or)[0], typeof i == "object" && i !== null && typeof i.then == "function")
      try {
        var s = Ru(i);
      } catch (O) {
        throw O === Fi ? Uc : O;
      }
    else s = i;
    i = ht();
    var p = i.queue, m = p.dispatch;
    return u !== i.memoizedState && (je.flags |= 2048, eo(
      9,
      { destroy: void 0 },
      yR.bind(null, p, u),
      null
    )), [s, m, a];
  }
  function yR(a, i) {
    a.action = i;
  }
  function mS(a) {
    var i = ht(), u = Ve;
    if (u !== null)
      return yS(i, u, a);
    ht(), i = i.memoizedState, u = ht();
    var s = u.queue.dispatch;
    return u.memoizedState = a, [i, s, !1];
  }
  function eo(a, i, u, s) {
    return a = { tag: a, create: u, deps: s, inst: i, next: null }, i = je.updateQueue, i === null && (i = Fc(), je.updateQueue = i), u = i.lastEffect, u === null ? i.lastEffect = a.next = a : (s = u.next, u.next = a, a.next = s, i.lastEffect = a), a;
  }
  function gS() {
    return ht().memoizedState;
  }
  function Qc(a, i, u, s) {
    var p = Vt();
    je.flags |= a, p.memoizedState = eo(
      1 | i,
      { destroy: void 0 },
      u,
      s === void 0 ? null : s
    );
  }
  function Jc(a, i, u, s) {
    var p = ht();
    s = s === void 0 ? null : s;
    var m = p.memoizedState.inst;
    Ve !== null && s !== null && qh(s, Ve.memoizedState.deps) ? p.memoizedState = eo(i, m, u, s) : (je.flags |= a, p.memoizedState = eo(
      1 | i,
      m,
      u,
      s
    ));
  }
  function bS(a, i) {
    Qc(8390656, 8, a, i);
  }
  function Xh(a, i) {
    Jc(2048, 8, a, i);
  }
  function mR(a) {
    je.flags |= 4;
    var i = je.updateQueue;
    if (i === null)
      i = Fc(), je.updateQueue = i, i.events = [a];
    else {
      var u = i.events;
      u === null ? i.events = [a] : u.push(a);
    }
  }
  function xS(a) {
    var i = ht().memoizedState;
    return mR({ ref: i, nextImpl: a }), function() {
      if ((Ue & 2) !== 0) throw Error(r(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function SS(a, i) {
    return Jc(4, 2, a, i);
  }
  function _S(a, i) {
    return Jc(4, 4, a, i);
  }
  function OS(a, i) {
    if (typeof i == "function") {
      a = a();
      var u = i(a);
      return function() {
        typeof u == "function" ? u() : i(null);
      };
    }
    if (i != null)
      return a = a(), i.current = a, function() {
        i.current = null;
      };
  }
  function wS(a, i, u) {
    u = u != null ? u.concat([a]) : null, Jc(4, 4, OS.bind(null, i, a), u);
  }
  function Vh() {
  }
  function AS(a, i) {
    var u = ht();
    i = i === void 0 ? null : i;
    var s = u.memoizedState;
    return i !== null && qh(i, s[1]) ? s[0] : (u.memoizedState = [a, i], a);
  }
  function TS(a, i) {
    var u = ht();
    i = i === void 0 ? null : i;
    var s = u.memoizedState;
    if (i !== null && qh(i, s[1]))
      return s[0];
    if (s = a(), Wa) {
      Zr(!0);
      try {
        a();
      } finally {
        Zr(!1);
      }
    }
    return u.memoizedState = [s, i], s;
  }
  function Fh(a, i, u) {
    return u === void 0 || (_r & 1073741824) !== 0 && (Ne & 261930) === 0 ? a.memoizedState = i : (a.memoizedState = u, a = E_(), je.lanes |= a, fa |= a, u);
  }
  function ES(a, i, u, s) {
    return sn(u, i) ? u : Zi.current !== null ? (a = Fh(a, u, s), sn(a, i) || (mt = !0), a) : (_r & 42) === 0 || (_r & 1073741824) !== 0 && (Ne & 261930) === 0 ? (mt = !0, a.memoizedState = u) : (a = E_(), je.lanes |= a, fa |= a, i);
  }
  function jS(a, i, u, s, p) {
    var m = Y.p;
    Y.p = m !== 0 && 8 > m ? m : 8;
    var O = $.T, D = {};
    $.T = D, Qh(a, !1, i, u);
    try {
      var q = p(), Z = $.S;
      if (Z !== null && Z(D, q), q !== null && typeof q == "object" && typeof q.then == "function") {
        var ae = dR(
          q,
          s
        );
        $u(
          a,
          i,
          ae,
          yn(a)
        );
      } else
        $u(
          a,
          i,
          s,
          yn(a)
        );
    } catch (ue) {
      $u(
        a,
        i,
        { then: function() {
        }, status: "rejected", reason: ue },
        yn()
      );
    } finally {
      Y.p = m, O !== null && D.types !== null && (O.types = D.types), $.T = O;
    }
  }
  function gR() {
  }
  function Wh(a, i, u, s) {
    if (a.tag !== 5) throw Error(r(476));
    var p = MS(a).queue;
    jS(
      a,
      p,
      i,
      ne,
      u === null ? gR : function() {
        return CS(a), u(s);
      }
    );
  }
  function MS(a) {
    var i = a.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Or,
        lastRenderedState: ne
      },
      next: null
    };
    var u = {};
    return i.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Or,
        lastRenderedState: u
      },
      next: null
    }, a.memoizedState = i, a = a.alternate, a !== null && (a.memoizedState = i), i;
  }
  function CS(a) {
    var i = MS(a);
    i.next === null && (i = a.alternate.memoizedState), $u(
      a,
      i.next.queue,
      {},
      yn()
    );
  }
  function Zh() {
    return $t(Qu);
  }
  function DS() {
    return ht().memoizedState;
  }
  function PS() {
    return ht().memoizedState;
  }
  function bR(a) {
    for (var i = a.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var u = yn();
          a = ia(u);
          var s = oa(i, a, u);
          s !== null && (rn(s, i, u), Cu(s, i, u)), i = { cache: Th() }, a.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function xR(a, i, u) {
    var s = yn();
    u = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, es(a) ? RS(i, u) : (u = vh(a, i, u, s), u !== null && (rn(u, a, s), $S(u, i, s)));
  }
  function NS(a, i, u) {
    var s = yn();
    $u(a, i, u, s);
  }
  function $u(a, i, u, s) {
    var p = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (es(a)) RS(i, p);
    else {
      var m = a.alternate;
      if (a.lanes === 0 && (m === null || m.lanes === 0) && (m = i.lastRenderedReducer, m !== null))
        try {
          var O = i.lastRenderedState, D = m(O, u);
          if (p.hasEagerState = !0, p.eagerState = D, sn(D, O))
            return Rc(a, i, p, 0), Qe === null && Nc(), !1;
        } catch {
        } finally {
        }
      if (u = vh(a, i, p, s), u !== null)
        return rn(u, a, s), $S(u, i, s), !0;
    }
    return !1;
  }
  function Qh(a, i, u, s) {
    if (s = {
      lane: 2,
      revertLane: Cp(),
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, es(a)) {
      if (i) throw Error(r(479));
    } else
      i = vh(
        a,
        u,
        s,
        2
      ), i !== null && rn(i, a, 2);
  }
  function es(a) {
    var i = a.alternate;
    return a === je || i !== null && i === je;
  }
  function RS(a, i) {
    Qi = Xc = !0;
    var u = a.pending;
    u === null ? i.next = i : (i.next = u.next, u.next = i), a.pending = i;
  }
  function $S(a, i, u) {
    if ((u & 4194048) !== 0) {
      var s = i.lanes;
      s &= a.pendingLanes, u |= s, i.lanes = u, L1(a, u);
    }
  }
  var zu = {
    readContext: $t,
    use: Wc,
    useCallback: ct,
    useContext: ct,
    useEffect: ct,
    useImperativeHandle: ct,
    useLayoutEffect: ct,
    useInsertionEffect: ct,
    useMemo: ct,
    useReducer: ct,
    useRef: ct,
    useState: ct,
    useDebugValue: ct,
    useDeferredValue: ct,
    useTransition: ct,
    useSyncExternalStore: ct,
    useId: ct,
    useHostTransitionStatus: ct,
    useFormState: ct,
    useActionState: ct,
    useOptimistic: ct,
    useMemoCache: ct,
    useCacheRefresh: ct
  };
  zu.useEffectEvent = ct;
  var zS = {
    readContext: $t,
    use: Wc,
    useCallback: function(a, i) {
      return Vt().memoizedState = [
        a,
        i === void 0 ? null : i
      ], a;
    },
    useContext: $t,
    useEffect: bS,
    useImperativeHandle: function(a, i, u) {
      u = u != null ? u.concat([a]) : null, Qc(
        4194308,
        4,
        OS.bind(null, i, a),
        u
      );
    },
    useLayoutEffect: function(a, i) {
      return Qc(4194308, 4, a, i);
    },
    useInsertionEffect: function(a, i) {
      Qc(4, 2, a, i);
    },
    useMemo: function(a, i) {
      var u = Vt();
      i = i === void 0 ? null : i;
      var s = a();
      if (Wa) {
        Zr(!0);
        try {
          a();
        } finally {
          Zr(!1);
        }
      }
      return u.memoizedState = [s, i], s;
    },
    useReducer: function(a, i, u) {
      var s = Vt();
      if (u !== void 0) {
        var p = u(i);
        if (Wa) {
          Zr(!0);
          try {
            u(i);
          } finally {
            Zr(!1);
          }
        }
      } else p = i;
      return s.memoizedState = s.baseState = p, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: p
      }, s.queue = a, a = a.dispatch = xR.bind(
        null,
        je,
        a
      ), [s.memoizedState, a];
    },
    useRef: function(a) {
      var i = Vt();
      return a = { current: a }, i.memoizedState = a;
    },
    useState: function(a) {
      a = Yh(a);
      var i = a.queue, u = NS.bind(null, je, i);
      return i.dispatch = u, [a.memoizedState, u];
    },
    useDebugValue: Vh,
    useDeferredValue: function(a, i) {
      var u = Vt();
      return Fh(u, a, i);
    },
    useTransition: function() {
      var a = Yh(!1);
      return a = jS.bind(
        null,
        je,
        a.queue,
        !0,
        !1
      ), Vt().memoizedState = a, [!1, a];
    },
    useSyncExternalStore: function(a, i, u) {
      var s = je, p = Vt();
      if (qe) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = i(), Qe === null)
          throw Error(r(349));
        (Ne & 127) !== 0 || rS(s, i, u);
      }
      p.memoizedState = u;
      var m = { value: u, getSnapshot: i };
      return p.queue = m, bS(iS.bind(null, s, m, a), [
        a
      ]), s.flags |= 2048, eo(
        9,
        { destroy: void 0 },
        aS.bind(
          null,
          s,
          m,
          u,
          i
        ),
        null
      ), u;
    },
    useId: function() {
      var a = Vt(), i = Qe.identifierPrefix;
      if (qe) {
        var u = Jn, s = Qn;
        u = (s & ~(1 << 32 - cn(s) - 1)).toString(32) + u, i = "_" + i + "R_" + u, u = Vc++, 0 < u && (i += "H" + u.toString(32)), i += "_";
      } else
        u = hR++, i = "_" + i + "r_" + u.toString(32) + "_";
      return a.memoizedState = i;
    },
    useHostTransitionStatus: Zh,
    useFormState: pS,
    useActionState: pS,
    useOptimistic: function(a) {
      var i = Vt();
      i.memoizedState = i.baseState = a;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return i.queue = u, i = Qh.bind(
        null,
        je,
        !0,
        u
      ), u.dispatch = i, [a, i];
    },
    useMemoCache: Ih,
    useCacheRefresh: function() {
      return Vt().memoizedState = bR.bind(
        null,
        je
      );
    },
    useEffectEvent: function(a) {
      var i = Vt(), u = { impl: a };
      return i.memoizedState = u, function() {
        if ((Ue & 2) !== 0)
          throw Error(r(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Jh = {
    readContext: $t,
    use: Wc,
    useCallback: AS,
    useContext: $t,
    useEffect: Xh,
    useImperativeHandle: wS,
    useInsertionEffect: SS,
    useLayoutEffect: _S,
    useMemo: TS,
    useReducer: Zc,
    useRef: gS,
    useState: function() {
      return Zc(Or);
    },
    useDebugValue: Vh,
    useDeferredValue: function(a, i) {
      var u = ht();
      return ES(
        u,
        Ve.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = Zc(Or)[0], i = ht().memoizedState;
      return [
        typeof a == "boolean" ? a : Ru(a),
        i
      ];
    },
    useSyncExternalStore: nS,
    useId: DS,
    useHostTransitionStatus: Zh,
    useFormState: vS,
    useActionState: vS,
    useOptimistic: function(a, i) {
      var u = ht();
      return lS(u, Ve, a, i);
    },
    useMemoCache: Ih,
    useCacheRefresh: PS
  };
  Jh.useEffectEvent = xS;
  var qS = {
    readContext: $t,
    use: Wc,
    useCallback: AS,
    useContext: $t,
    useEffect: Xh,
    useImperativeHandle: wS,
    useInsertionEffect: SS,
    useLayoutEffect: _S,
    useMemo: TS,
    useReducer: Gh,
    useRef: gS,
    useState: function() {
      return Gh(Or);
    },
    useDebugValue: Vh,
    useDeferredValue: function(a, i) {
      var u = ht();
      return Ve === null ? Fh(u, a, i) : ES(
        u,
        Ve.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = Gh(Or)[0], i = ht().memoizedState;
      return [
        typeof a == "boolean" ? a : Ru(a),
        i
      ];
    },
    useSyncExternalStore: nS,
    useId: DS,
    useHostTransitionStatus: Zh,
    useFormState: mS,
    useActionState: mS,
    useOptimistic: function(a, i) {
      var u = ht();
      return Ve !== null ? lS(u, Ve, a, i) : (u.baseState = a, [a, u.queue.dispatch]);
    },
    useMemoCache: Ih,
    useCacheRefresh: PS
  };
  qS.useEffectEvent = xS;
  function ep(a, i, u, s) {
    i = a.memoizedState, u = u(s, i), u = u == null ? i : v({}, i, u), a.memoizedState = u, a.lanes === 0 && (a.updateQueue.baseState = u);
  }
  var tp = {
    enqueueSetState: function(a, i, u) {
      a = a._reactInternals;
      var s = yn(), p = ia(s);
      p.payload = i, u != null && (p.callback = u), i = oa(a, p, s), i !== null && (rn(i, a, s), Cu(i, a, s));
    },
    enqueueReplaceState: function(a, i, u) {
      a = a._reactInternals;
      var s = yn(), p = ia(s);
      p.tag = 1, p.payload = i, u != null && (p.callback = u), i = oa(a, p, s), i !== null && (rn(i, a, s), Cu(i, a, s));
    },
    enqueueForceUpdate: function(a, i) {
      a = a._reactInternals;
      var u = yn(), s = ia(u);
      s.tag = 2, i != null && (s.callback = i), i = oa(a, s, u), i !== null && (rn(i, a, u), Cu(i, a, u));
    }
  };
  function BS(a, i, u, s, p, m, O) {
    return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(s, m, O) : i.prototype && i.prototype.isPureReactComponent ? !_u(u, s) || !_u(p, m) : !0;
  }
  function kS(a, i, u, s) {
    a = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(u, s), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(u, s), i.state !== a && tp.enqueueReplaceState(i, i.state, null);
  }
  function Za(a, i) {
    var u = i;
    if ("ref" in i) {
      u = {};
      for (var s in i)
        s !== "ref" && (u[s] = i[s]);
    }
    if (a = a.defaultProps) {
      u === i && (u = v({}, u));
      for (var p in a)
        u[p] === void 0 && (u[p] = a[p]);
    }
    return u;
  }
  function LS(a) {
    Pc(a);
  }
  function US(a) {
    console.error(a);
  }
  function IS(a) {
    Pc(a);
  }
  function ts(a, i) {
    try {
      var u = a.onUncaughtError;
      u(i.value, { componentStack: i.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function HS(a, i, u) {
    try {
      var s = a.onCaughtError;
      s(u.value, {
        componentStack: u.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null
      });
    } catch (p) {
      setTimeout(function() {
        throw p;
      });
    }
  }
  function np(a, i, u) {
    return u = ia(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      ts(a, i);
    }, u;
  }
  function GS(a) {
    return a = ia(a), a.tag = 3, a;
  }
  function YS(a, i, u, s) {
    var p = u.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var m = s.value;
      a.payload = function() {
        return p(m);
      }, a.callback = function() {
        HS(i, u, s);
      };
    }
    var O = u.stateNode;
    O !== null && typeof O.componentDidCatch == "function" && (a.callback = function() {
      HS(i, u, s), typeof p != "function" && (da === null ? da = /* @__PURE__ */ new Set([this]) : da.add(this));
      var D = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function SR(a, i, u, s, p) {
    if (u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (i = u.alternate, i !== null && Ki(
        i,
        u,
        p,
        !0
      ), u = dn.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Dn === null ? hs() : u.alternate === null && st === 0 && (st = 3), u.flags &= -257, u.flags |= 65536, u.lanes = p, s === Ic ? u.flags |= 16384 : (i = u.updateQueue, i === null ? u.updateQueue = /* @__PURE__ */ new Set([s]) : i.add(s), Ep(a, s, p)), !1;
          case 22:
            return u.flags |= 65536, s === Ic ? u.flags |= 16384 : (i = u.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, u.updateQueue = i) : (u = i.retryQueue, u === null ? i.retryQueue = /* @__PURE__ */ new Set([s]) : u.add(s)), Ep(a, s, p)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Ep(a, s, p), hs(), !1;
    }
    if (qe)
      return i = dn.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = p, s !== Sh && (a = Error(r(422), { cause: s }), Au(En(a, u)))) : (s !== Sh && (i = Error(r(423), {
        cause: s
      }), Au(
        En(i, u)
      )), a = a.current.alternate, a.flags |= 65536, p &= -p, a.lanes |= p, s = En(s, u), p = np(
        a.stateNode,
        s,
        p
      ), Ph(a, p), st !== 4 && (st = 2)), !1;
    var m = Error(r(520), { cause: s });
    if (m = En(m, u), Gu === null ? Gu = [m] : Gu.push(m), st !== 4 && (st = 2), i === null) return !0;
    s = En(s, u), u = i;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, a = p & -p, u.lanes |= a, a = np(u.stateNode, s, a), Ph(u, a), !1;
        case 1:
          if (i = u.type, m = u.stateNode, (u.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (da === null || !da.has(m))))
            return u.flags |= 65536, p &= -p, u.lanes |= p, p = GS(p), YS(
              p,
              a,
              u,
              s
            ), Ph(u, p), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var rp = Error(r(461)), mt = !1;
  function zt(a, i, u, s) {
    i.child = a === null ? Fx(i, null, u, s) : Fa(
      i,
      a.child,
      u,
      s
    );
  }
  function KS(a, i, u, s, p) {
    u = u.render;
    var m = i.ref;
    if ("ref" in s) {
      var O = {};
      for (var D in s)
        D !== "ref" && (O[D] = s[D]);
    } else O = s;
    return Ya(i), s = Bh(
      a,
      i,
      u,
      O,
      m,
      p
    ), D = kh(), a !== null && !mt ? (Lh(a, i, p), wr(a, i, p)) : (qe && D && bh(i), i.flags |= 1, zt(a, i, s, p), i.child);
  }
  function XS(a, i, u, s, p) {
    if (a === null) {
      var m = u.type;
      return typeof m == "function" && !yh(m) && m.defaultProps === void 0 && u.compare === null ? (i.tag = 15, i.type = m, VS(
        a,
        i,
        m,
        s,
        p
      )) : (a = zc(
        u.type,
        null,
        s,
        i,
        i.mode,
        p
      ), a.ref = i.ref, a.return = i, i.child = a);
    }
    if (m = a.child, !fp(a, p)) {
      var O = m.memoizedProps;
      if (u = u.compare, u = u !== null ? u : _u, u(O, s) && a.ref === i.ref)
        return wr(a, i, p);
    }
    return i.flags |= 1, a = gr(m, s), a.ref = i.ref, a.return = i, i.child = a;
  }
  function VS(a, i, u, s, p) {
    if (a !== null) {
      var m = a.memoizedProps;
      if (_u(m, s) && a.ref === i.ref)
        if (mt = !1, i.pendingProps = s = m, fp(a, p))
          (a.flags & 131072) !== 0 && (mt = !0);
        else
          return i.lanes = a.lanes, wr(a, i, p);
    }
    return ap(
      a,
      i,
      u,
      s,
      p
    );
  }
  function FS(a, i, u, s) {
    var p = s.children, m = a !== null ? a.memoizedState : null;
    if (a === null && i.stateNode === null && (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), s.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (m = m !== null ? m.baseLanes | u : u, a !== null) {
          for (s = i.child = a.child, p = 0; s !== null; )
            p = p | s.lanes | s.childLanes, s = s.sibling;
          s = p & ~m;
        } else s = 0, i.child = null;
        return WS(
          a,
          i,
          m,
          u,
          s
        );
      }
      if ((u & 536870912) !== 0)
        i.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && Lc(
          i,
          m !== null ? m.cachePool : null
        ), m !== null ? Qx(i, m) : Rh(), Jx(i);
      else
        return s = i.lanes = 536870912, WS(
          a,
          i,
          m !== null ? m.baseLanes | u : u,
          u,
          s
        );
    } else
      m !== null ? (Lc(i, m.cachePool), Qx(i, m), la(), i.memoizedState = null) : (a !== null && Lc(i, null), Rh(), la());
    return zt(a, i, p, u), i.child;
  }
  function qu(a, i) {
    return a !== null && a.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function WS(a, i, u, s, p) {
    var m = jh();
    return m = m === null ? null : { parent: vt._currentValue, pool: m }, i.memoizedState = {
      baseLanes: u,
      cachePool: m
    }, a !== null && Lc(i, null), Rh(), Jx(i), a !== null && Ki(a, i, s, !0), i.childLanes = p, null;
  }
  function ns(a, i) {
    return i = as(
      { mode: i.mode, children: i.children },
      a.mode
    ), i.ref = a.ref, a.child = i, i.return = a, i;
  }
  function ZS(a, i, u) {
    return Fa(i, a.child, null, u), a = ns(i, i.pendingProps), a.flags |= 2, hn(i), i.memoizedState = null, a;
  }
  function _R(a, i, u) {
    var s = i.pendingProps, p = (i.flags & 128) !== 0;
    if (i.flags &= -129, a === null) {
      if (qe) {
        if (s.mode === "hidden")
          return a = ns(i, s), i.lanes = 536870912, qu(null, a);
        if (zh(i), (a = rt) ? (a = cO(
          a,
          Cn
        ), a = a !== null && a.data === "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: ea !== null ? { id: Qn, overflow: Jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Rx(a), u.return = i, i.child = u, Rt = i, rt = null)) : a = null, a === null) throw na(i);
        return i.lanes = 536870912, null;
      }
      return ns(i, s);
    }
    var m = a.memoizedState;
    if (m !== null) {
      var O = m.dehydrated;
      if (zh(i), p)
        if (i.flags & 256)
          i.flags &= -257, i = ZS(
            a,
            i,
            u
          );
        else if (i.memoizedState !== null)
          i.child = a.child, i.flags |= 128, i = null;
        else throw Error(r(558));
      else if (mt || Ki(a, i, u, !1), p = (u & a.childLanes) !== 0, mt || p) {
        if (s = Qe, s !== null && (O = U1(s, u), O !== 0 && O !== m.retryLane))
          throw m.retryLane = O, Ua(a, O), rn(s, a, O), rp;
        hs(), i = ZS(
          a,
          i,
          u
        );
      } else
        a = m.treeContext, rt = Pn(O.nextSibling), Rt = i, qe = !0, ta = null, Cn = !1, a !== null && qx(i, a), i = ns(i, s), i.flags |= 4096;
      return i;
    }
    return a = gr(a.child, {
      mode: s.mode,
      children: s.children
    }), a.ref = i.ref, i.child = a, a.return = i, a;
  }
  function rs(a, i) {
    var u = i.ref;
    if (u === null)
      a !== null && a.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (a === null || a.ref !== u) && (i.flags |= 4194816);
    }
  }
  function ap(a, i, u, s, p) {
    return Ya(i), u = Bh(
      a,
      i,
      u,
      s,
      void 0,
      p
    ), s = kh(), a !== null && !mt ? (Lh(a, i, p), wr(a, i, p)) : (qe && s && bh(i), i.flags |= 1, zt(a, i, u, p), i.child);
  }
  function QS(a, i, u, s, p, m) {
    return Ya(i), i.updateQueue = null, u = tS(
      i,
      s,
      u,
      p
    ), eS(a), s = kh(), a !== null && !mt ? (Lh(a, i, m), wr(a, i, m)) : (qe && s && bh(i), i.flags |= 1, zt(a, i, u, m), i.child);
  }
  function JS(a, i, u, s, p) {
    if (Ya(i), i.stateNode === null) {
      var m = Ii, O = u.contextType;
      typeof O == "object" && O !== null && (m = $t(O)), m = new u(s, m), i.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = tp, i.stateNode = m, m._reactInternals = i, m = i.stateNode, m.props = s, m.state = i.memoizedState, m.refs = {}, Ch(i), O = u.contextType, m.context = typeof O == "object" && O !== null ? $t(O) : Ii, m.state = i.memoizedState, O = u.getDerivedStateFromProps, typeof O == "function" && (ep(
        i,
        u,
        O,
        s
      ), m.state = i.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (O = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), O !== m.state && tp.enqueueReplaceState(m, m.state, null), Pu(i, s, m, p), Du(), m.state = i.memoizedState), typeof m.componentDidMount == "function" && (i.flags |= 4194308), s = !0;
    } else if (a === null) {
      m = i.stateNode;
      var D = i.memoizedProps, q = Za(u, D);
      m.props = q;
      var Z = m.context, ae = u.contextType;
      O = Ii, typeof ae == "object" && ae !== null && (O = $t(ae));
      var ue = u.getDerivedStateFromProps;
      ae = typeof ue == "function" || typeof m.getSnapshotBeforeUpdate == "function", D = i.pendingProps !== D, ae || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (D || Z !== O) && kS(
        i,
        m,
        s,
        O
      ), aa = !1;
      var Q = i.memoizedState;
      m.state = Q, Pu(i, s, m, p), Du(), Z = i.memoizedState, D || Q !== Z || aa ? (typeof ue == "function" && (ep(
        i,
        u,
        ue,
        s
      ), Z = i.memoizedState), (q = aa || BS(
        i,
        u,
        q,
        s,
        Q,
        Z,
        O
      )) ? (ae || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = s, i.memoizedState = Z), m.props = s, m.state = Z, m.context = O, s = q) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), s = !1);
    } else {
      m = i.stateNode, Dh(a, i), O = i.memoizedProps, ae = Za(u, O), m.props = ae, ue = i.pendingProps, Q = m.context, Z = u.contextType, q = Ii, typeof Z == "object" && Z !== null && (q = $t(Z)), D = u.getDerivedStateFromProps, (Z = typeof D == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (O !== ue || Q !== q) && kS(
        i,
        m,
        s,
        q
      ), aa = !1, Q = i.memoizedState, m.state = Q, Pu(i, s, m, p), Du();
      var te = i.memoizedState;
      O !== ue || Q !== te || aa || a !== null && a.dependencies !== null && Bc(a.dependencies) ? (typeof D == "function" && (ep(
        i,
        u,
        D,
        s
      ), te = i.memoizedState), (ae = aa || BS(
        i,
        u,
        ae,
        s,
        Q,
        te,
        q
      ) || a !== null && a.dependencies !== null && Bc(a.dependencies)) ? (Z || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(s, te, q), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        s,
        te,
        q
      )), typeof m.componentDidUpdate == "function" && (i.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || O === a.memoizedProps && Q === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || O === a.memoizedProps && Q === a.memoizedState || (i.flags |= 1024), i.memoizedProps = s, i.memoizedState = te), m.props = s, m.state = te, m.context = q, s = ae) : (typeof m.componentDidUpdate != "function" || O === a.memoizedProps && Q === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || O === a.memoizedProps && Q === a.memoizedState || (i.flags |= 1024), s = !1);
    }
    return m = s, rs(a, i), s = (i.flags & 128) !== 0, m || s ? (m = i.stateNode, u = s && typeof u.getDerivedStateFromError != "function" ? null : m.render(), i.flags |= 1, a !== null && s ? (i.child = Fa(
      i,
      a.child,
      null,
      p
    ), i.child = Fa(
      i,
      null,
      u,
      p
    )) : zt(a, i, u, p), i.memoizedState = m.state, a = i.child) : a = wr(
      a,
      i,
      p
    ), a;
  }
  function e_(a, i, u, s) {
    return Ha(), i.flags |= 256, zt(a, i, u, s), i.child;
  }
  var ip = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function op(a) {
    return { baseLanes: a, cachePool: Hx() };
  }
  function up(a, i, u) {
    return a = a !== null ? a.childLanes & ~u : 0, i && (a |= vn), a;
  }
  function t_(a, i, u) {
    var s = i.pendingProps, p = !1, m = (i.flags & 128) !== 0, O;
    if ((O = m) || (O = a !== null && a.memoizedState === null ? !1 : (dt.current & 2) !== 0), O && (p = !0, i.flags &= -129), O = (i.flags & 32) !== 0, i.flags &= -33, a === null) {
      if (qe) {
        if (p ? ua(i) : la(), (a = rt) ? (a = cO(
          a,
          Cn
        ), a = a !== null && a.data !== "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: ea !== null ? { id: Qn, overflow: Jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Rx(a), u.return = i, i.child = u, Rt = i, rt = null)) : a = null, a === null) throw na(i);
        return Hp(a) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var D = s.children;
      return s = s.fallback, p ? (la(), p = i.mode, D = as(
        { mode: "hidden", children: D },
        p
      ), s = Ia(
        s,
        p,
        u,
        null
      ), D.return = i, s.return = i, D.sibling = s, i.child = D, s = i.child, s.memoizedState = op(u), s.childLanes = up(
        a,
        O,
        u
      ), i.memoizedState = ip, qu(null, s)) : (ua(i), lp(i, D));
    }
    var q = a.memoizedState;
    if (q !== null && (D = q.dehydrated, D !== null)) {
      if (m)
        i.flags & 256 ? (ua(i), i.flags &= -257, i = cp(
          a,
          i,
          u
        )) : i.memoizedState !== null ? (la(), i.child = a.child, i.flags |= 128, i = null) : (la(), D = s.fallback, p = i.mode, s = as(
          { mode: "visible", children: s.children },
          p
        ), D = Ia(
          D,
          p,
          u,
          null
        ), D.flags |= 2, s.return = i, D.return = i, s.sibling = D, i.child = s, Fa(
          i,
          a.child,
          null,
          u
        ), s = i.child, s.memoizedState = op(u), s.childLanes = up(
          a,
          O,
          u
        ), i.memoizedState = ip, i = qu(null, s));
      else if (ua(i), Hp(D)) {
        if (O = D.nextSibling && D.nextSibling.dataset, O) var Z = O.dgst;
        O = Z, s = Error(r(419)), s.stack = "", s.digest = O, Au({ value: s, source: null, stack: null }), i = cp(
          a,
          i,
          u
        );
      } else if (mt || Ki(a, i, u, !1), O = (u & a.childLanes) !== 0, mt || O) {
        if (O = Qe, O !== null && (s = U1(O, u), s !== 0 && s !== q.retryLane))
          throw q.retryLane = s, Ua(a, s), rn(O, a, s), rp;
        Ip(D) || hs(), i = cp(
          a,
          i,
          u
        );
      } else
        Ip(D) ? (i.flags |= 192, i.child = a.child, i = null) : (a = q.treeContext, rt = Pn(
          D.nextSibling
        ), Rt = i, qe = !0, ta = null, Cn = !1, a !== null && qx(i, a), i = lp(
          i,
          s.children
        ), i.flags |= 4096);
      return i;
    }
    return p ? (la(), D = s.fallback, p = i.mode, q = a.child, Z = q.sibling, s = gr(q, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = q.subtreeFlags & 65011712, Z !== null ? D = gr(
      Z,
      D
    ) : (D = Ia(
      D,
      p,
      u,
      null
    ), D.flags |= 2), D.return = i, s.return = i, s.sibling = D, i.child = s, qu(null, s), s = i.child, D = a.child.memoizedState, D === null ? D = op(u) : (p = D.cachePool, p !== null ? (q = vt._currentValue, p = p.parent !== q ? { parent: q, pool: q } : p) : p = Hx(), D = {
      baseLanes: D.baseLanes | u,
      cachePool: p
    }), s.memoizedState = D, s.childLanes = up(
      a,
      O,
      u
    ), i.memoizedState = ip, qu(a.child, s)) : (ua(i), u = a.child, a = u.sibling, u = gr(u, {
      mode: "visible",
      children: s.children
    }), u.return = i, u.sibling = null, a !== null && (O = i.deletions, O === null ? (i.deletions = [a], i.flags |= 16) : O.push(a)), i.child = u, i.memoizedState = null, u);
  }
  function lp(a, i) {
    return i = as(
      { mode: "visible", children: i },
      a.mode
    ), i.return = a, a.child = i;
  }
  function as(a, i) {
    return a = fn(22, a, null, i), a.lanes = 0, a;
  }
  function cp(a, i, u) {
    return Fa(i, a.child, null, u), a = lp(
      i,
      i.pendingProps.children
    ), a.flags |= 2, i.memoizedState = null, a;
  }
  function n_(a, i, u) {
    a.lanes |= i;
    var s = a.alternate;
    s !== null && (s.lanes |= i), wh(a.return, i, u);
  }
  function sp(a, i, u, s, p, m) {
    var O = a.memoizedState;
    O === null ? a.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: u,
      tailMode: p,
      treeForkCount: m
    } : (O.isBackwards = i, O.rendering = null, O.renderingStartTime = 0, O.last = s, O.tail = u, O.tailMode = p, O.treeForkCount = m);
  }
  function r_(a, i, u) {
    var s = i.pendingProps, p = s.revealOrder, m = s.tail;
    s = s.children;
    var O = dt.current, D = (O & 2) !== 0;
    if (D ? (O = O & 1 | 2, i.flags |= 128) : O &= 1, re(dt, O), zt(a, i, s, u), s = qe ? wu : 0, !D && a !== null && (a.flags & 128) !== 0)
      e: for (a = i.child; a !== null; ) {
        if (a.tag === 13)
          a.memoizedState !== null && n_(a, u, i);
        else if (a.tag === 19)
          n_(a, u, i);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === i) break e;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === i)
            break e;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    switch (p) {
      case "forwards":
        for (u = i.child, p = null; u !== null; )
          a = u.alternate, a !== null && Kc(a) === null && (p = u), u = u.sibling;
        u = p, u === null ? (p = i.child, i.child = null) : (p = u.sibling, u.sibling = null), sp(
          i,
          !1,
          p,
          u,
          m,
          s
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, p = i.child, i.child = null; p !== null; ) {
          if (a = p.alternate, a !== null && Kc(a) === null) {
            i.child = p;
            break;
          }
          a = p.sibling, p.sibling = u, u = p, p = a;
        }
        sp(
          i,
          !0,
          u,
          null,
          m,
          s
        );
        break;
      case "together":
        sp(
          i,
          !1,
          null,
          null,
          void 0,
          s
        );
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function wr(a, i, u) {
    if (a !== null && (i.dependencies = a.dependencies), fa |= i.lanes, (u & i.childLanes) === 0)
      if (a !== null) {
        if (Ki(
          a,
          i,
          u,
          !1
        ), (u & i.childLanes) === 0)
          return null;
      } else return null;
    if (a !== null && i.child !== a.child)
      throw Error(r(153));
    if (i.child !== null) {
      for (a = i.child, u = gr(a, a.pendingProps), i.child = u, u.return = i; a.sibling !== null; )
        a = a.sibling, u = u.sibling = gr(a, a.pendingProps), u.return = i;
      u.sibling = null;
    }
    return i.child;
  }
  function fp(a, i) {
    return (a.lanes & i) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && Bc(a)));
  }
  function OR(a, i, u) {
    switch (i.tag) {
      case 3:
        Ce(i, i.stateNode.containerInfo), ra(i, vt, a.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        he(i);
        break;
      case 4:
        Ce(i, i.stateNode.containerInfo);
        break;
      case 10:
        ra(
          i,
          i.type,
          i.memoizedProps.value
        );
        break;
      case 31:
        if (i.memoizedState !== null)
          return i.flags |= 128, zh(i), null;
        break;
      case 13:
        var s = i.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (ua(i), i.flags |= 128, null) : (u & i.child.childLanes) !== 0 ? t_(a, i, u) : (ua(i), a = wr(
            a,
            i,
            u
          ), a !== null ? a.sibling : null);
        ua(i);
        break;
      case 19:
        var p = (a.flags & 128) !== 0;
        if (s = (u & i.childLanes) !== 0, s || (Ki(
          a,
          i,
          u,
          !1
        ), s = (u & i.childLanes) !== 0), p) {
          if (s)
            return r_(
              a,
              i,
              u
            );
          i.flags |= 128;
        }
        if (p = i.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), re(dt, dt.current), s) break;
        return null;
      case 22:
        return i.lanes = 0, FS(
          a,
          i,
          u,
          i.pendingProps
        );
      case 24:
        ra(i, vt, a.memoizedState.cache);
    }
    return wr(a, i, u);
  }
  function a_(a, i, u) {
    if (a !== null)
      if (a.memoizedProps !== i.pendingProps)
        mt = !0;
      else {
        if (!fp(a, u) && (i.flags & 128) === 0)
          return mt = !1, OR(
            a,
            i,
            u
          );
        mt = (a.flags & 131072) !== 0;
      }
    else
      mt = !1, qe && (i.flags & 1048576) !== 0 && zx(i, wu, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        e: {
          var s = i.pendingProps;
          if (a = Xa(i.elementType), i.type = a, typeof a == "function")
            yh(a) ? (s = Za(a, s), i.tag = 1, i = JS(
              null,
              i,
              a,
              s,
              u
            )) : (i.tag = 0, i = ap(
              null,
              i,
              a,
              s,
              u
            ));
          else {
            if (a != null) {
              var p = a.$$typeof;
              if (p === j) {
                i.tag = 11, i = KS(
                  null,
                  i,
                  a,
                  s,
                  u
                );
                break e;
              } else if (p === C) {
                i.tag = 14, i = XS(
                  null,
                  i,
                  a,
                  s,
                  u
                );
                break e;
              }
            }
            throw i = G(a) || a, Error(r(306, i, ""));
          }
        }
        return i;
      case 0:
        return ap(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 1:
        return s = i.type, p = Za(
          s,
          i.pendingProps
        ), JS(
          a,
          i,
          s,
          p,
          u
        );
      case 3:
        e: {
          if (Ce(
            i,
            i.stateNode.containerInfo
          ), a === null) throw Error(r(387));
          s = i.pendingProps;
          var m = i.memoizedState;
          p = m.element, Dh(a, i), Pu(i, s, null, u);
          var O = i.memoizedState;
          if (s = O.cache, ra(i, vt, s), s !== m.cache && Ah(
            i,
            [vt],
            u,
            !0
          ), Du(), s = O.element, m.isDehydrated)
            if (m = {
              element: s,
              isDehydrated: !1,
              cache: O.cache
            }, i.updateQueue.baseState = m, i.memoizedState = m, i.flags & 256) {
              i = e_(
                a,
                i,
                s,
                u
              );
              break e;
            } else if (s !== p) {
              p = En(
                Error(r(424)),
                i
              ), Au(p), i = e_(
                a,
                i,
                s,
                u
              );
              break e;
            } else {
              switch (a = i.stateNode.containerInfo, a.nodeType) {
                case 9:
                  a = a.body;
                  break;
                default:
                  a = a.nodeName === "HTML" ? a.ownerDocument.body : a;
              }
              for (rt = Pn(a.firstChild), Rt = i, qe = !0, ta = null, Cn = !0, u = Fx(
                i,
                null,
                s,
                u
              ), i.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ha(), s === p) {
              i = wr(
                a,
                i,
                u
              );
              break e;
            }
            zt(a, i, s, u);
          }
          i = i.child;
        }
        return i;
      case 26:
        return rs(a, i), a === null ? (u = vO(
          i.type,
          null,
          i.pendingProps,
          null
        )) ? i.memoizedState = u : qe || (u = i.type, a = i.pendingProps, s = xs(
          fe.current
        ).createElement(u), s[Nt] = i, s[Zt] = a, qt(s, u, a), jt(s), i.stateNode = s) : i.memoizedState = vO(
          i.type,
          a.memoizedProps,
          i.pendingProps,
          a.memoizedState
        ), null;
      case 27:
        return he(i), a === null && qe && (s = i.stateNode = dO(
          i.type,
          i.pendingProps,
          fe.current
        ), Rt = i, Cn = !0, p = rt, ya(i.type) ? (Gp = p, rt = Pn(s.firstChild)) : rt = p), zt(
          a,
          i,
          i.pendingProps.children,
          u
        ), rs(a, i), a === null && (i.flags |= 4194304), i.child;
      case 5:
        return a === null && qe && ((p = s = rt) && (s = JR(
          s,
          i.type,
          i.pendingProps,
          Cn
        ), s !== null ? (i.stateNode = s, Rt = i, rt = Pn(s.firstChild), Cn = !1, p = !0) : p = !1), p || na(i)), he(i), p = i.type, m = i.pendingProps, O = a !== null ? a.memoizedProps : null, s = m.children, kp(p, m) ? s = null : O !== null && kp(p, O) && (i.flags |= 32), i.memoizedState !== null && (p = Bh(
          a,
          i,
          pR,
          null,
          null,
          u
        ), Qu._currentValue = p), rs(a, i), zt(a, i, s, u), i.child;
      case 6:
        return a === null && qe && ((a = u = rt) && (u = e3(
          u,
          i.pendingProps,
          Cn
        ), u !== null ? (i.stateNode = u, Rt = i, rt = null, a = !0) : a = !1), a || na(i)), null;
      case 13:
        return t_(a, i, u);
      case 4:
        return Ce(
          i,
          i.stateNode.containerInfo
        ), s = i.pendingProps, a === null ? i.child = Fa(
          i,
          null,
          s,
          u
        ) : zt(a, i, s, u), i.child;
      case 11:
        return KS(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 7:
        return zt(
          a,
          i,
          i.pendingProps,
          u
        ), i.child;
      case 8:
        return zt(
          a,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 12:
        return zt(
          a,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 10:
        return s = i.pendingProps, ra(i, i.type, s.value), zt(a, i, s.children, u), i.child;
      case 9:
        return p = i.type._context, s = i.pendingProps.children, Ya(i), p = $t(p), s = s(p), i.flags |= 1, zt(a, i, s, u), i.child;
      case 14:
        return XS(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 15:
        return VS(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 19:
        return r_(a, i, u);
      case 31:
        return _R(a, i, u);
      case 22:
        return FS(
          a,
          i,
          u,
          i.pendingProps
        );
      case 24:
        return Ya(i), s = $t(vt), a === null ? (p = jh(), p === null && (p = Qe, m = Th(), p.pooledCache = m, m.refCount++, m !== null && (p.pooledCacheLanes |= u), p = m), i.memoizedState = { parent: s, cache: p }, Ch(i), ra(i, vt, p)) : ((a.lanes & u) !== 0 && (Dh(a, i), Pu(i, null, null, u), Du()), p = a.memoizedState, m = i.memoizedState, p.parent !== s ? (p = { parent: s, cache: s }, i.memoizedState = p, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = p), ra(i, vt, s)) : (s = m.cache, ra(i, vt, s), s !== p.cache && Ah(
          i,
          [vt],
          u,
          !0
        ))), zt(
          a,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 29:
        throw i.pendingProps;
    }
    throw Error(r(156, i.tag));
  }
  function Ar(a) {
    a.flags |= 4;
  }
  function dp(a, i, u, s, p) {
    if ((i = (a.mode & 32) !== 0) && (i = !1), i) {
      if (a.flags |= 16777216, (p & 335544128) === p)
        if (a.stateNode.complete) a.flags |= 8192;
        else if (D_()) a.flags |= 8192;
        else
          throw Va = Ic, Mh;
    } else a.flags &= -16777217;
  }
  function i_(a, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      a.flags &= -16777217;
    else if (a.flags |= 16777216, !xO(i))
      if (D_()) a.flags |= 8192;
      else
        throw Va = Ic, Mh;
  }
  function is(a, i) {
    i !== null && (a.flags |= 4), a.flags & 16384 && (i = a.tag !== 22 ? B1() : 536870912, a.lanes |= i, ao |= i);
  }
  function Bu(a, i) {
    if (!qe)
      switch (a.tailMode) {
        case "hidden":
          i = a.tail;
          for (var u = null; i !== null; )
            i.alternate !== null && (u = i), i = i.sibling;
          u === null ? a.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = a.tail;
          for (var s = null; u !== null; )
            u.alternate !== null && (s = u), u = u.sibling;
          s === null ? i || a.tail === null ? a.tail = null : a.tail.sibling = null : s.sibling = null;
      }
  }
  function at(a) {
    var i = a.alternate !== null && a.alternate.child === a.child, u = 0, s = 0;
    if (i)
      for (var p = a.child; p !== null; )
        u |= p.lanes | p.childLanes, s |= p.subtreeFlags & 65011712, s |= p.flags & 65011712, p.return = a, p = p.sibling;
    else
      for (p = a.child; p !== null; )
        u |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = a, p = p.sibling;
    return a.subtreeFlags |= s, a.childLanes = u, i;
  }
  function wR(a, i, u) {
    var s = i.pendingProps;
    switch (xh(i), i.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return at(i), null;
      case 1:
        return at(i), null;
      case 3:
        return u = i.stateNode, s = null, a !== null && (s = a.memoizedState.cache), i.memoizedState.cache !== s && (i.flags |= 2048), Sr(vt), ce(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (a === null || a.child === null) && (Yi(i) ? Ar(i) : a === null || a.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, _h())), at(i), null;
      case 26:
        var p = i.type, m = i.memoizedState;
        return a === null ? (Ar(i), m !== null ? (at(i), i_(i, m)) : (at(i), dp(
          i,
          p,
          null,
          s,
          u
        ))) : m ? m !== a.memoizedState ? (Ar(i), at(i), i_(i, m)) : (at(i), i.flags &= -16777217) : (a = a.memoizedProps, a !== s && Ar(i), at(i), dp(
          i,
          p,
          a,
          s,
          u
        )), null;
      case 27:
        if (ge(i), u = fe.current, p = i.type, a !== null && i.stateNode != null)
          a.memoizedProps !== s && Ar(i);
        else {
          if (!s) {
            if (i.stateNode === null)
              throw Error(r(166));
            return at(i), null;
          }
          a = se.current, Yi(i) ? Bx(i) : (a = dO(p, s, u), i.stateNode = a, Ar(i));
        }
        return at(i), null;
      case 5:
        if (ge(i), p = i.type, a !== null && i.stateNode != null)
          a.memoizedProps !== s && Ar(i);
        else {
          if (!s) {
            if (i.stateNode === null)
              throw Error(r(166));
            return at(i), null;
          }
          if (m = se.current, Yi(i))
            Bx(i);
          else {
            var O = xs(
              fe.current
            );
            switch (m) {
              case 1:
                m = O.createElementNS(
                  "http://www.w3.org/2000/svg",
                  p
                );
                break;
              case 2:
                m = O.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  p
                );
                break;
              default:
                switch (p) {
                  case "svg":
                    m = O.createElementNS(
                      "http://www.w3.org/2000/svg",
                      p
                    );
                    break;
                  case "math":
                    m = O.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      p
                    );
                    break;
                  case "script":
                    m = O.createElement("div"), m.innerHTML = "<script><\/script>", m = m.removeChild(
                      m.firstChild
                    );
                    break;
                  case "select":
                    m = typeof s.is == "string" ? O.createElement("select", {
                      is: s.is
                    }) : O.createElement("select"), s.multiple ? m.multiple = !0 : s.size && (m.size = s.size);
                    break;
                  default:
                    m = typeof s.is == "string" ? O.createElement(p, { is: s.is }) : O.createElement(p);
                }
            }
            m[Nt] = i, m[Zt] = s;
            e: for (O = i.child; O !== null; ) {
              if (O.tag === 5 || O.tag === 6)
                m.appendChild(O.stateNode);
              else if (O.tag !== 4 && O.tag !== 27 && O.child !== null) {
                O.child.return = O, O = O.child;
                continue;
              }
              if (O === i) break e;
              for (; O.sibling === null; ) {
                if (O.return === null || O.return === i)
                  break e;
                O = O.return;
              }
              O.sibling.return = O.return, O = O.sibling;
            }
            i.stateNode = m;
            e: switch (qt(m, p, s), p) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
            s && Ar(i);
          }
        }
        return at(i), dp(
          i,
          i.type,
          a === null ? null : a.memoizedProps,
          i.pendingProps,
          u
        ), null;
      case 6:
        if (a && i.stateNode != null)
          a.memoizedProps !== s && Ar(i);
        else {
          if (typeof s != "string" && i.stateNode === null)
            throw Error(r(166));
          if (a = fe.current, Yi(i)) {
            if (a = i.stateNode, u = i.memoizedProps, s = null, p = Rt, p !== null)
              switch (p.tag) {
                case 27:
                case 5:
                  s = p.memoizedProps;
              }
            a[Nt] = i, a = !!(a.nodeValue === u || s !== null && s.suppressHydrationWarning === !0 || tO(a.nodeValue, u)), a || na(i, !0);
          } else
            a = xs(a).createTextNode(
              s
            ), a[Nt] = i, i.stateNode = a;
        }
        return at(i), null;
      case 31:
        if (u = i.memoizedState, a === null || a.memoizedState !== null) {
          if (s = Yi(i), u !== null) {
            if (a === null) {
              if (!s) throw Error(r(318));
              if (a = i.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(557));
              a[Nt] = i;
            } else
              Ha(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            at(i), a = !1;
          } else
            u = _h(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = u), a = !0;
          if (!a)
            return i.flags & 256 ? (hn(i), i) : (hn(i), null);
          if ((i.flags & 128) !== 0)
            throw Error(r(558));
        }
        return at(i), null;
      case 13:
        if (s = i.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
          if (p = Yi(i), s !== null && s.dehydrated !== null) {
            if (a === null) {
              if (!p) throw Error(r(318));
              if (p = i.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(r(317));
              p[Nt] = i;
            } else
              Ha(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            at(i), p = !1;
          } else
            p = _h(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = p), p = !0;
          if (!p)
            return i.flags & 256 ? (hn(i), i) : (hn(i), null);
        }
        return hn(i), (i.flags & 128) !== 0 ? (i.lanes = u, i) : (u = s !== null, a = a !== null && a.memoizedState !== null, u && (s = i.child, p = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (p = s.alternate.memoizedState.cachePool.pool), m = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (m = s.memoizedState.cachePool.pool), m !== p && (s.flags |= 2048)), u !== a && u && (i.child.flags |= 8192), is(i, i.updateQueue), at(i), null);
      case 4:
        return ce(), a === null && Rp(i.stateNode.containerInfo), at(i), null;
      case 10:
        return Sr(i.type), at(i), null;
      case 19:
        if (U(dt), s = i.memoizedState, s === null) return at(i), null;
        if (p = (i.flags & 128) !== 0, m = s.rendering, m === null)
          if (p) Bu(s, !1);
          else {
            if (st !== 0 || a !== null && (a.flags & 128) !== 0)
              for (a = i.child; a !== null; ) {
                if (m = Kc(a), m !== null) {
                  for (i.flags |= 128, Bu(s, !1), a = m.updateQueue, i.updateQueue = a, is(i, a), i.subtreeFlags = 0, a = u, u = i.child; u !== null; )
                    Nx(u, a), u = u.sibling;
                  return re(
                    dt,
                    dt.current & 1 | 2
                  ), qe && br(i, s.treeForkCount), i.child;
                }
                a = a.sibling;
              }
            s.tail !== null && Ut() > ss && (i.flags |= 128, p = !0, Bu(s, !1), i.lanes = 4194304);
          }
        else {
          if (!p)
            if (a = Kc(m), a !== null) {
              if (i.flags |= 128, p = !0, a = a.updateQueue, i.updateQueue = a, is(i, a), Bu(s, !0), s.tail === null && s.tailMode === "hidden" && !m.alternate && !qe)
                return at(i), null;
            } else
              2 * Ut() - s.renderingStartTime > ss && u !== 536870912 && (i.flags |= 128, p = !0, Bu(s, !1), i.lanes = 4194304);
          s.isBackwards ? (m.sibling = i.child, i.child = m) : (a = s.last, a !== null ? a.sibling = m : i.child = m, s.last = m);
        }
        return s.tail !== null ? (a = s.tail, s.rendering = a, s.tail = a.sibling, s.renderingStartTime = Ut(), a.sibling = null, u = dt.current, re(
          dt,
          p ? u & 1 | 2 : u & 1
        ), qe && br(i, s.treeForkCount), a) : (at(i), null);
      case 22:
      case 23:
        return hn(i), $h(), s = i.memoizedState !== null, a !== null ? a.memoizedState !== null !== s && (i.flags |= 8192) : s && (i.flags |= 8192), s ? (u & 536870912) !== 0 && (i.flags & 128) === 0 && (at(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : at(i), u = i.updateQueue, u !== null && is(i, u.retryQueue), u = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== u && (i.flags |= 2048), a !== null && U(Ka), null;
      case 24:
        return u = null, a !== null && (u = a.memoizedState.cache), i.memoizedState.cache !== u && (i.flags |= 2048), Sr(vt), at(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function AR(a, i) {
    switch (xh(i), i.tag) {
      case 1:
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 3:
        return Sr(vt), ce(), a = i.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (i.flags = a & -65537 | 128, i) : null;
      case 26:
      case 27:
      case 5:
        return ge(i), null;
      case 31:
        if (i.memoizedState !== null) {
          if (hn(i), i.alternate === null)
            throw Error(r(340));
          Ha();
        }
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 13:
        if (hn(i), a = i.memoizedState, a !== null && a.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(r(340));
          Ha();
        }
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 19:
        return U(dt), null;
      case 4:
        return ce(), null;
      case 10:
        return Sr(i.type), null;
      case 22:
      case 23:
        return hn(i), $h(), a !== null && U(Ka), a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 24:
        return Sr(vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function o_(a, i) {
    switch (xh(i), i.tag) {
      case 3:
        Sr(vt), ce();
        break;
      case 26:
      case 27:
      case 5:
        ge(i);
        break;
      case 4:
        ce();
        break;
      case 31:
        i.memoizedState !== null && hn(i);
        break;
      case 13:
        hn(i);
        break;
      case 19:
        U(dt);
        break;
      case 10:
        Sr(i.type);
        break;
      case 22:
      case 23:
        hn(i), $h(), a !== null && U(Ka);
        break;
      case 24:
        Sr(vt);
    }
  }
  function ku(a, i) {
    try {
      var u = i.updateQueue, s = u !== null ? u.lastEffect : null;
      if (s !== null) {
        var p = s.next;
        u = p;
        do {
          if ((u.tag & a) === a) {
            s = void 0;
            var m = u.create, O = u.inst;
            s = m(), O.destroy = s;
          }
          u = u.next;
        } while (u !== p);
      }
    } catch (D) {
      Ke(i, i.return, D);
    }
  }
  function ca(a, i, u) {
    try {
      var s = i.updateQueue, p = s !== null ? s.lastEffect : null;
      if (p !== null) {
        var m = p.next;
        s = m;
        do {
          if ((s.tag & a) === a) {
            var O = s.inst, D = O.destroy;
            if (D !== void 0) {
              O.destroy = void 0, p = i;
              var q = u, Z = D;
              try {
                Z();
              } catch (ae) {
                Ke(
                  p,
                  q,
                  ae
                );
              }
            }
          }
          s = s.next;
        } while (s !== m);
      }
    } catch (ae) {
      Ke(i, i.return, ae);
    }
  }
  function u_(a) {
    var i = a.updateQueue;
    if (i !== null) {
      var u = a.stateNode;
      try {
        Zx(i, u);
      } catch (s) {
        Ke(a, a.return, s);
      }
    }
  }
  function l_(a, i, u) {
    u.props = Za(
      a.type,
      a.memoizedProps
    ), u.state = a.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (s) {
      Ke(a, i, s);
    }
  }
  function Lu(a, i) {
    try {
      var u = a.ref;
      if (u !== null) {
        switch (a.tag) {
          case 26:
          case 27:
          case 5:
            var s = a.stateNode;
            break;
          case 30:
            s = a.stateNode;
            break;
          default:
            s = a.stateNode;
        }
        typeof u == "function" ? a.refCleanup = u(s) : u.current = s;
      }
    } catch (p) {
      Ke(a, i, p);
    }
  }
  function er(a, i) {
    var u = a.ref, s = a.refCleanup;
    if (u !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (p) {
          Ke(a, i, p);
        } finally {
          a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (p) {
          Ke(a, i, p);
        }
      else u.current = null;
  }
  function c_(a) {
    var i = a.type, u = a.memoizedProps, s = a.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && s.focus();
          break e;
        case "img":
          u.src ? s.src = u.src : u.srcSet && (s.srcset = u.srcSet);
      }
    } catch (p) {
      Ke(a, a.return, p);
    }
  }
  function hp(a, i, u) {
    try {
      var s = a.stateNode;
      XR(s, a.type, u, i), s[Zt] = i;
    } catch (p) {
      Ke(a, a.return, p);
    }
  }
  function s_(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 26 || a.tag === 27 && ya(a.type) || a.tag === 4;
  }
  function pp(a) {
    e: for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || s_(a.return)) return null;
        a = a.return;
      }
      for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.tag === 27 && ya(a.type) || a.flags & 2 || a.child === null || a.tag === 4) continue e;
        a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function vp(a, i, u) {
    var s = a.tag;
    if (s === 5 || s === 6)
      a = a.stateNode, i ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(a, i) : (i = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, i.appendChild(a), u = u._reactRootContainer, u != null || i.onclick !== null || (i.onclick = yr));
    else if (s !== 4 && (s === 27 && ya(a.type) && (u = a.stateNode, i = null), a = a.child, a !== null))
      for (vp(a, i, u), a = a.sibling; a !== null; )
        vp(a, i, u), a = a.sibling;
  }
  function os(a, i, u) {
    var s = a.tag;
    if (s === 5 || s === 6)
      a = a.stateNode, i ? u.insertBefore(a, i) : u.appendChild(a);
    else if (s !== 4 && (s === 27 && ya(a.type) && (u = a.stateNode), a = a.child, a !== null))
      for (os(a, i, u), a = a.sibling; a !== null; )
        os(a, i, u), a = a.sibling;
  }
  function f_(a) {
    var i = a.stateNode, u = a.memoizedProps;
    try {
      for (var s = a.type, p = i.attributes; p.length; )
        i.removeAttributeNode(p[0]);
      qt(i, s, u), i[Nt] = a, i[Zt] = u;
    } catch (m) {
      Ke(a, a.return, m);
    }
  }
  var Tr = !1, gt = !1, yp = !1, d_ = typeof WeakSet == "function" ? WeakSet : Set, Mt = null;
  function TR(a, i) {
    if (a = a.containerInfo, qp = Es, a = wx(a), ch(a)) {
      if ("selectionStart" in a)
        var u = {
          start: a.selectionStart,
          end: a.selectionEnd
        };
      else
        e: {
          u = (u = a.ownerDocument) && u.defaultView || window;
          var s = u.getSelection && u.getSelection();
          if (s && s.rangeCount !== 0) {
            u = s.anchorNode;
            var p = s.anchorOffset, m = s.focusNode;
            s = s.focusOffset;
            try {
              u.nodeType, m.nodeType;
            } catch {
              u = null;
              break e;
            }
            var O = 0, D = -1, q = -1, Z = 0, ae = 0, ue = a, Q = null;
            t: for (; ; ) {
              for (var te; ue !== u || p !== 0 && ue.nodeType !== 3 || (D = O + p), ue !== m || s !== 0 && ue.nodeType !== 3 || (q = O + s), ue.nodeType === 3 && (O += ue.nodeValue.length), (te = ue.firstChild) !== null; )
                Q = ue, ue = te;
              for (; ; ) {
                if (ue === a) break t;
                if (Q === u && ++Z === p && (D = O), Q === m && ++ae === s && (q = O), (te = ue.nextSibling) !== null) break;
                ue = Q, Q = ue.parentNode;
              }
              ue = te;
            }
            u = D === -1 || q === -1 ? null : { start: D, end: q };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Bp = { focusedElem: a, selectionRange: u }, Es = !1, Mt = i; Mt !== null; )
      if (i = Mt, a = i.child, (i.subtreeFlags & 1028) !== 0 && a !== null)
        a.return = i, Mt = a;
      else
        for (; Mt !== null; ) {
          switch (i = Mt, m = i.alternate, a = i.flags, i.tag) {
            case 0:
              if ((a & 4) !== 0 && (a = i.updateQueue, a = a !== null ? a.events : null, a !== null))
                for (u = 0; u < a.length; u++)
                  p = a[u], p.ref.impl = p.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((a & 1024) !== 0 && m !== null) {
                a = void 0, u = i, p = m.memoizedProps, m = m.memoizedState, s = u.stateNode;
                try {
                  var ye = Za(
                    u.type,
                    p
                  );
                  a = s.getSnapshotBeforeUpdate(
                    ye,
                    m
                  ), s.__reactInternalSnapshotBeforeUpdate = a;
                } catch (xe) {
                  Ke(
                    u,
                    u.return,
                    xe
                  );
                }
              }
              break;
            case 3:
              if ((a & 1024) !== 0) {
                if (a = i.stateNode.containerInfo, u = a.nodeType, u === 9)
                  Up(a);
                else if (u === 1)
                  switch (a.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Up(a);
                      break;
                    default:
                      a.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((a & 1024) !== 0) throw Error(r(163));
          }
          if (a = i.sibling, a !== null) {
            a.return = i.return, Mt = a;
            break;
          }
          Mt = i.return;
        }
  }
  function h_(a, i, u) {
    var s = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        jr(a, u), s & 4 && ku(5, u);
        break;
      case 1:
        if (jr(a, u), s & 4)
          if (a = u.stateNode, i === null)
            try {
              a.componentDidMount();
            } catch (O) {
              Ke(u, u.return, O);
            }
          else {
            var p = Za(
              u.type,
              i.memoizedProps
            );
            i = i.memoizedState;
            try {
              a.componentDidUpdate(
                p,
                i,
                a.__reactInternalSnapshotBeforeUpdate
              );
            } catch (O) {
              Ke(
                u,
                u.return,
                O
              );
            }
          }
        s & 64 && u_(u), s & 512 && Lu(u, u.return);
        break;
      case 3:
        if (jr(a, u), s & 64 && (a = u.updateQueue, a !== null)) {
          if (i = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                i = u.child.stateNode;
                break;
              case 1:
                i = u.child.stateNode;
            }
          try {
            Zx(a, i);
          } catch (O) {
            Ke(u, u.return, O);
          }
        }
        break;
      case 27:
        i === null && s & 4 && f_(u);
      case 26:
      case 5:
        jr(a, u), i === null && s & 4 && c_(u), s & 512 && Lu(u, u.return);
        break;
      case 12:
        jr(a, u);
        break;
      case 31:
        jr(a, u), s & 4 && y_(a, u);
        break;
      case 13:
        jr(a, u), s & 4 && m_(a, u), s & 64 && (a = u.memoizedState, a !== null && (a = a.dehydrated, a !== null && (u = $R.bind(
          null,
          u
        ), t3(a, u))));
        break;
      case 22:
        if (s = u.memoizedState !== null || Tr, !s) {
          i = i !== null && i.memoizedState !== null || gt, p = Tr;
          var m = gt;
          Tr = s, (gt = i) && !m ? Mr(
            a,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : jr(a, u), Tr = p, gt = m;
        }
        break;
      case 30:
        break;
      default:
        jr(a, u);
    }
  }
  function p_(a) {
    var i = a.alternate;
    i !== null && (a.alternate = null, p_(i)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (i = a.stateNode, i !== null && Kd(i)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
  }
  var ut = null, Jt = !1;
  function Er(a, i, u) {
    for (u = u.child; u !== null; )
      v_(a, i, u), u = u.sibling;
  }
  function v_(a, i, u) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
      try {
        ln.onCommitFiberUnmount(su, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        gt || er(u, i), Er(
          a,
          i,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        gt || er(u, i);
        var s = ut, p = Jt;
        ya(u.type) && (ut = u.stateNode, Jt = !1), Er(
          a,
          i,
          u
        ), Fu(u.stateNode), ut = s, Jt = p;
        break;
      case 5:
        gt || er(u, i);
      case 6:
        if (s = ut, p = Jt, ut = null, Er(
          a,
          i,
          u
        ), ut = s, Jt = p, ut !== null)
          if (Jt)
            try {
              (ut.nodeType === 9 ? ut.body : ut.nodeName === "HTML" ? ut.ownerDocument.body : ut).removeChild(u.stateNode);
            } catch (m) {
              Ke(
                u,
                i,
                m
              );
            }
          else
            try {
              ut.removeChild(u.stateNode);
            } catch (m) {
              Ke(
                u,
                i,
                m
              );
            }
        break;
      case 18:
        ut !== null && (Jt ? (a = ut, uO(
          a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
          u.stateNode
        ), ho(a)) : uO(ut, u.stateNode));
        break;
      case 4:
        s = ut, p = Jt, ut = u.stateNode.containerInfo, Jt = !0, Er(
          a,
          i,
          u
        ), ut = s, Jt = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, u, i), gt || ca(4, u, i), Er(
          a,
          i,
          u
        );
        break;
      case 1:
        gt || (er(u, i), s = u.stateNode, typeof s.componentWillUnmount == "function" && l_(
          u,
          i,
          s
        )), Er(
          a,
          i,
          u
        );
        break;
      case 21:
        Er(
          a,
          i,
          u
        );
        break;
      case 22:
        gt = (s = gt) || u.memoizedState !== null, Er(
          a,
          i,
          u
        ), gt = s;
        break;
      default:
        Er(
          a,
          i,
          u
        );
    }
  }
  function y_(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null))) {
      a = a.dehydrated;
      try {
        ho(a);
      } catch (u) {
        Ke(i, i.return, u);
      }
    }
  }
  function m_(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
      try {
        ho(a);
      } catch (u) {
        Ke(i, i.return, u);
      }
  }
  function ER(a) {
    switch (a.tag) {
      case 31:
      case 13:
      case 19:
        var i = a.stateNode;
        return i === null && (i = a.stateNode = new d_()), i;
      case 22:
        return a = a.stateNode, i = a._retryCache, i === null && (i = a._retryCache = new d_()), i;
      default:
        throw Error(r(435, a.tag));
    }
  }
  function us(a, i) {
    var u = ER(a);
    i.forEach(function(s) {
      if (!u.has(s)) {
        u.add(s);
        var p = zR.bind(null, a, s);
        s.then(p, p);
      }
    });
  }
  function en(a, i) {
    var u = i.deletions;
    if (u !== null)
      for (var s = 0; s < u.length; s++) {
        var p = u[s], m = a, O = i, D = O;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (ya(D.type)) {
                ut = D.stateNode, Jt = !1;
                break e;
              }
              break;
            case 5:
              ut = D.stateNode, Jt = !1;
              break e;
            case 3:
            case 4:
              ut = D.stateNode.containerInfo, Jt = !0;
              break e;
          }
          D = D.return;
        }
        if (ut === null) throw Error(r(160));
        v_(m, O, p), ut = null, Jt = !1, m = p.alternate, m !== null && (m.return = null), p.return = null;
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; )
        g_(i, a), i = i.sibling;
  }
  var Hn = null;
  function g_(a, i) {
    var u = a.alternate, s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        en(i, a), tn(a), s & 4 && (ca(3, a, a.return), ku(3, a), ca(5, a, a.return));
        break;
      case 1:
        en(i, a), tn(a), s & 512 && (gt || u === null || er(u, u.return)), s & 64 && Tr && (a = a.updateQueue, a !== null && (s = a.callbacks, s !== null && (u = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = u === null ? s : u.concat(s))));
        break;
      case 26:
        var p = Hn;
        if (en(i, a), tn(a), s & 512 && (gt || u === null || er(u, u.return)), s & 4) {
          var m = u !== null ? u.memoizedState : null;
          if (s = a.memoizedState, u === null)
            if (s === null)
              if (a.stateNode === null) {
                e: {
                  s = a.type, u = a.memoizedProps, p = p.ownerDocument || p;
                  t: switch (s) {
                    case "title":
                      m = p.getElementsByTagName("title")[0], (!m || m[hu] || m[Nt] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = p.createElement(s), p.head.insertBefore(
                        m,
                        p.querySelector("head > title")
                      )), qt(m, s, u), m[Nt] = a, jt(m), s = m;
                      break e;
                    case "link":
                      var O = gO(
                        "link",
                        "href",
                        p
                      ).get(s + (u.href || ""));
                      if (O) {
                        for (var D = 0; D < O.length; D++)
                          if (m = O[D], m.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && m.getAttribute("rel") === (u.rel == null ? null : u.rel) && m.getAttribute("title") === (u.title == null ? null : u.title) && m.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            O.splice(D, 1);
                            break t;
                          }
                      }
                      m = p.createElement(s), qt(m, s, u), p.head.appendChild(m);
                      break;
                    case "meta":
                      if (O = gO(
                        "meta",
                        "content",
                        p
                      ).get(s + (u.content || ""))) {
                        for (D = 0; D < O.length; D++)
                          if (m = O[D], m.getAttribute("content") === (u.content == null ? null : "" + u.content) && m.getAttribute("name") === (u.name == null ? null : u.name) && m.getAttribute("property") === (u.property == null ? null : u.property) && m.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && m.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            O.splice(D, 1);
                            break t;
                          }
                      }
                      m = p.createElement(s), qt(m, s, u), p.head.appendChild(m);
                      break;
                    default:
                      throw Error(r(468, s));
                  }
                  m[Nt] = a, jt(m), s = m;
                }
                a.stateNode = s;
              } else
                bO(
                  p,
                  a.type,
                  a.stateNode
                );
            else
              a.stateNode = mO(
                p,
                s,
                a.memoizedProps
              );
          else
            m !== s ? (m === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : m.count--, s === null ? bO(
              p,
              a.type,
              a.stateNode
            ) : mO(
              p,
              s,
              a.memoizedProps
            )) : s === null && a.stateNode !== null && hp(
              a,
              a.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        en(i, a), tn(a), s & 512 && (gt || u === null || er(u, u.return)), u !== null && s & 4 && hp(
          a,
          a.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (en(i, a), tn(a), s & 512 && (gt || u === null || er(u, u.return)), a.flags & 32) {
          p = a.stateNode;
          try {
            $i(p, "");
          } catch (ye) {
            Ke(a, a.return, ye);
          }
        }
        s & 4 && a.stateNode != null && (p = a.memoizedProps, hp(
          a,
          p,
          u !== null ? u.memoizedProps : p
        )), s & 1024 && (yp = !0);
        break;
      case 6:
        if (en(i, a), tn(a), s & 4) {
          if (a.stateNode === null)
            throw Error(r(162));
          s = a.memoizedProps, u = a.stateNode;
          try {
            u.nodeValue = s;
          } catch (ye) {
            Ke(a, a.return, ye);
          }
        }
        break;
      case 3:
        if (Os = null, p = Hn, Hn = Ss(i.containerInfo), en(i, a), Hn = p, tn(a), s & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ho(i.containerInfo);
          } catch (ye) {
            Ke(a, a.return, ye);
          }
        yp && (yp = !1, b_(a));
        break;
      case 4:
        s = Hn, Hn = Ss(
          a.stateNode.containerInfo
        ), en(i, a), tn(a), Hn = s;
        break;
      case 12:
        en(i, a), tn(a);
        break;
      case 31:
        en(i, a), tn(a), s & 4 && (s = a.updateQueue, s !== null && (a.updateQueue = null, us(a, s)));
        break;
      case 13:
        en(i, a), tn(a), a.child.flags & 8192 && a.memoizedState !== null != (u !== null && u.memoizedState !== null) && (cs = Ut()), s & 4 && (s = a.updateQueue, s !== null && (a.updateQueue = null, us(a, s)));
        break;
      case 22:
        p = a.memoizedState !== null;
        var q = u !== null && u.memoizedState !== null, Z = Tr, ae = gt;
        if (Tr = Z || p, gt = ae || q, en(i, a), gt = ae, Tr = Z, tn(a), s & 8192)
          e: for (i = a.stateNode, i._visibility = p ? i._visibility & -2 : i._visibility | 1, p && (u === null || q || Tr || gt || Qa(a)), u = null, i = a; ; ) {
            if (i.tag === 5 || i.tag === 26) {
              if (u === null) {
                q = u = i;
                try {
                  if (m = q.stateNode, p)
                    O = m.style, typeof O.setProperty == "function" ? O.setProperty("display", "none", "important") : O.display = "none";
                  else {
                    D = q.stateNode;
                    var ue = q.memoizedProps.style, Q = ue != null && ue.hasOwnProperty("display") ? ue.display : null;
                    D.style.display = Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                  }
                } catch (ye) {
                  Ke(q, q.return, ye);
                }
              }
            } else if (i.tag === 6) {
              if (u === null) {
                q = i;
                try {
                  q.stateNode.nodeValue = p ? "" : q.memoizedProps;
                } catch (ye) {
                  Ke(q, q.return, ye);
                }
              }
            } else if (i.tag === 18) {
              if (u === null) {
                q = i;
                try {
                  var te = q.stateNode;
                  p ? lO(te, !0) : lO(q.stateNode, !1);
                } catch (ye) {
                  Ke(q, q.return, ye);
                }
              }
            } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === a) && i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === a) break e;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === a) break e;
              u === i && (u = null), i = i.return;
            }
            u === i && (u = null), i.sibling.return = i.return, i = i.sibling;
          }
        s & 4 && (s = a.updateQueue, s !== null && (u = s.retryQueue, u !== null && (s.retryQueue = null, us(a, u))));
        break;
      case 19:
        en(i, a), tn(a), s & 4 && (s = a.updateQueue, s !== null && (a.updateQueue = null, us(a, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        en(i, a), tn(a);
    }
  }
  function tn(a) {
    var i = a.flags;
    if (i & 2) {
      try {
        for (var u, s = a.return; s !== null; ) {
          if (s_(s)) {
            u = s;
            break;
          }
          s = s.return;
        }
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var p = u.stateNode, m = pp(a);
            os(a, m, p);
            break;
          case 5:
            var O = u.stateNode;
            u.flags & 32 && ($i(O, ""), u.flags &= -33);
            var D = pp(a);
            os(a, D, O);
            break;
          case 3:
          case 4:
            var q = u.stateNode.containerInfo, Z = pp(a);
            vp(
              a,
              Z,
              q
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (ae) {
        Ke(a, a.return, ae);
      }
      a.flags &= -3;
    }
    i & 4096 && (a.flags &= -4097);
  }
  function b_(a) {
    if (a.subtreeFlags & 1024)
      for (a = a.child; a !== null; ) {
        var i = a;
        b_(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), a = a.sibling;
      }
  }
  function jr(a, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; )
        h_(a, i.alternate, i), i = i.sibling;
  }
  function Qa(a) {
    for (a = a.child; a !== null; ) {
      var i = a;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, i, i.return), Qa(i);
          break;
        case 1:
          er(i, i.return);
          var u = i.stateNode;
          typeof u.componentWillUnmount == "function" && l_(
            i,
            i.return,
            u
          ), Qa(i);
          break;
        case 27:
          Fu(i.stateNode);
        case 26:
        case 5:
          er(i, i.return), Qa(i);
          break;
        case 22:
          i.memoizedState === null && Qa(i);
          break;
        case 30:
          Qa(i);
          break;
        default:
          Qa(i);
      }
      a = a.sibling;
    }
  }
  function Mr(a, i, u) {
    for (u = u && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var s = i.alternate, p = a, m = i, O = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Mr(
            p,
            m,
            u
          ), ku(4, m);
          break;
        case 1:
          if (Mr(
            p,
            m,
            u
          ), s = m, p = s.stateNode, typeof p.componentDidMount == "function")
            try {
              p.componentDidMount();
            } catch (Z) {
              Ke(s, s.return, Z);
            }
          if (s = m, p = s.updateQueue, p !== null) {
            var D = s.stateNode;
            try {
              var q = p.shared.hiddenCallbacks;
              if (q !== null)
                for (p.shared.hiddenCallbacks = null, p = 0; p < q.length; p++)
                  Wx(q[p], D);
            } catch (Z) {
              Ke(s, s.return, Z);
            }
          }
          u && O & 64 && u_(m), Lu(m, m.return);
          break;
        case 27:
          f_(m);
        case 26:
        case 5:
          Mr(
            p,
            m,
            u
          ), u && s === null && O & 4 && c_(m), Lu(m, m.return);
          break;
        case 12:
          Mr(
            p,
            m,
            u
          );
          break;
        case 31:
          Mr(
            p,
            m,
            u
          ), u && O & 4 && y_(p, m);
          break;
        case 13:
          Mr(
            p,
            m,
            u
          ), u && O & 4 && m_(p, m);
          break;
        case 22:
          m.memoizedState === null && Mr(
            p,
            m,
            u
          ), Lu(m, m.return);
          break;
        case 30:
          break;
        default:
          Mr(
            p,
            m,
            u
          );
      }
      i = i.sibling;
    }
  }
  function mp(a, i) {
    var u = null;
    a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), a = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (a = i.memoizedState.cachePool.pool), a !== u && (a != null && a.refCount++, u != null && Tu(u));
  }
  function gp(a, i) {
    a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && Tu(a));
  }
  function Gn(a, i, u, s) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; )
        x_(
          a,
          i,
          u,
          s
        ), i = i.sibling;
  }
  function x_(a, i, u, s) {
    var p = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Gn(
          a,
          i,
          u,
          s
        ), p & 2048 && ku(9, i);
        break;
      case 1:
        Gn(
          a,
          i,
          u,
          s
        );
        break;
      case 3:
        Gn(
          a,
          i,
          u,
          s
        ), p & 2048 && (a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && Tu(a)));
        break;
      case 12:
        if (p & 2048) {
          Gn(
            a,
            i,
            u,
            s
          ), a = i.stateNode;
          try {
            var m = i.memoizedProps, O = m.id, D = m.onPostCommit;
            typeof D == "function" && D(
              O,
              i.alternate === null ? "mount" : "update",
              a.passiveEffectDuration,
              -0
            );
          } catch (q) {
            Ke(i, i.return, q);
          }
        } else
          Gn(
            a,
            i,
            u,
            s
          );
        break;
      case 31:
        Gn(
          a,
          i,
          u,
          s
        );
        break;
      case 13:
        Gn(
          a,
          i,
          u,
          s
        );
        break;
      case 23:
        break;
      case 22:
        m = i.stateNode, O = i.alternate, i.memoizedState !== null ? m._visibility & 2 ? Gn(
          a,
          i,
          u,
          s
        ) : Uu(a, i) : m._visibility & 2 ? Gn(
          a,
          i,
          u,
          s
        ) : (m._visibility |= 2, to(
          a,
          i,
          u,
          s,
          (i.subtreeFlags & 10256) !== 0 || !1
        )), p & 2048 && mp(O, i);
        break;
      case 24:
        Gn(
          a,
          i,
          u,
          s
        ), p & 2048 && gp(i.alternate, i);
        break;
      default:
        Gn(
          a,
          i,
          u,
          s
        );
    }
  }
  function to(a, i, u, s, p) {
    for (p = p && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null; ) {
      var m = a, O = i, D = u, q = s, Z = O.flags;
      switch (O.tag) {
        case 0:
        case 11:
        case 15:
          to(
            m,
            O,
            D,
            q,
            p
          ), ku(8, O);
          break;
        case 23:
          break;
        case 22:
          var ae = O.stateNode;
          O.memoizedState !== null ? ae._visibility & 2 ? to(
            m,
            O,
            D,
            q,
            p
          ) : Uu(
            m,
            O
          ) : (ae._visibility |= 2, to(
            m,
            O,
            D,
            q,
            p
          )), p && Z & 2048 && mp(
            O.alternate,
            O
          );
          break;
        case 24:
          to(
            m,
            O,
            D,
            q,
            p
          ), p && Z & 2048 && gp(O.alternate, O);
          break;
        default:
          to(
            m,
            O,
            D,
            q,
            p
          );
      }
      i = i.sibling;
    }
  }
  function Uu(a, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var u = a, s = i, p = s.flags;
        switch (s.tag) {
          case 22:
            Uu(u, s), p & 2048 && mp(
              s.alternate,
              s
            );
            break;
          case 24:
            Uu(u, s), p & 2048 && gp(s.alternate, s);
            break;
          default:
            Uu(u, s);
        }
        i = i.sibling;
      }
  }
  var Iu = 8192;
  function no(a, i, u) {
    if (a.subtreeFlags & Iu)
      for (a = a.child; a !== null; )
        S_(
          a,
          i,
          u
        ), a = a.sibling;
  }
  function S_(a, i, u) {
    switch (a.tag) {
      case 26:
        no(
          a,
          i,
          u
        ), a.flags & Iu && a.memoizedState !== null && h3(
          u,
          Hn,
          a.memoizedState,
          a.memoizedProps
        );
        break;
      case 5:
        no(
          a,
          i,
          u
        );
        break;
      case 3:
      case 4:
        var s = Hn;
        Hn = Ss(a.stateNode.containerInfo), no(
          a,
          i,
          u
        ), Hn = s;
        break;
      case 22:
        a.memoizedState === null && (s = a.alternate, s !== null && s.memoizedState !== null ? (s = Iu, Iu = 16777216, no(
          a,
          i,
          u
        ), Iu = s) : no(
          a,
          i,
          u
        ));
        break;
      default:
        no(
          a,
          i,
          u
        );
    }
  }
  function __(a) {
    var i = a.alternate;
    if (i !== null && (a = i.child, a !== null)) {
      i.child = null;
      do
        i = a.sibling, a.sibling = null, a = i;
      while (a !== null);
    }
  }
  function Hu(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          Mt = s, w_(
            s,
            a
          );
        }
      __(a);
    }
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        O_(a), a = a.sibling;
  }
  function O_(a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Hu(a), a.flags & 2048 && ca(9, a, a.return);
        break;
      case 3:
        Hu(a);
        break;
      case 12:
        Hu(a);
        break;
      case 22:
        var i = a.stateNode;
        a.memoizedState !== null && i._visibility & 2 && (a.return === null || a.return.tag !== 13) ? (i._visibility &= -3, ls(a)) : Hu(a);
        break;
      default:
        Hu(a);
    }
  }
  function ls(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          Mt = s, w_(
            s,
            a
          );
        }
      __(a);
    }
    for (a = a.child; a !== null; ) {
      switch (i = a, i.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, i, i.return), ls(i);
          break;
        case 22:
          u = i.stateNode, u._visibility & 2 && (u._visibility &= -3, ls(i));
          break;
        default:
          ls(i);
      }
      a = a.sibling;
    }
  }
  function w_(a, i) {
    for (; Mt !== null; ) {
      var u = Mt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, u, i);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var s = u.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Tu(u.memoizedState.cache);
      }
      if (s = u.child, s !== null) s.return = u, Mt = s;
      else
        e: for (u = a; Mt !== null; ) {
          s = Mt;
          var p = s.sibling, m = s.return;
          if (p_(s), s === u) {
            Mt = null;
            break e;
          }
          if (p !== null) {
            p.return = m, Mt = p;
            break e;
          }
          Mt = m;
        }
    }
  }
  var jR = {
    getCacheForType: function(a) {
      var i = $t(vt), u = i.data.get(a);
      return u === void 0 && (u = a(), i.data.set(a, u)), u;
    },
    cacheSignal: function() {
      return $t(vt).controller.signal;
    }
  }, MR = typeof WeakMap == "function" ? WeakMap : Map, Ue = 0, Qe = null, De = null, Ne = 0, Ye = 0, pn = null, sa = !1, ro = !1, bp = !1, Cr = 0, st = 0, fa = 0, Ja = 0, xp = 0, vn = 0, ao = 0, Gu = null, nn = null, Sp = !1, cs = 0, A_ = 0, ss = 1 / 0, fs = null, da = null, St = 0, ha = null, io = null, Dr = 0, _p = 0, Op = null, T_ = null, Yu = 0, wp = null;
  function yn() {
    return (Ue & 2) !== 0 && Ne !== 0 ? Ne & -Ne : $.T !== null ? Cp() : I1();
  }
  function E_() {
    if (vn === 0)
      if ((Ne & 536870912) === 0 || qe) {
        var a = bc;
        bc <<= 1, (bc & 3932160) === 0 && (bc = 262144), vn = a;
      } else vn = 536870912;
    return a = dn.current, a !== null && (a.flags |= 32), vn;
  }
  function rn(a, i, u) {
    (a === Qe && (Ye === 2 || Ye === 9) || a.cancelPendingCommit !== null) && (oo(a, 0), pa(
      a,
      Ne,
      vn,
      !1
    )), du(a, u), ((Ue & 2) === 0 || a !== Qe) && (a === Qe && ((Ue & 2) === 0 && (Ja |= u), st === 4 && pa(
      a,
      Ne,
      vn,
      !1
    )), tr(a));
  }
  function j_(a, i, u) {
    if ((Ue & 6) !== 0) throw Error(r(327));
    var s = !u && (i & 127) === 0 && (i & a.expiredLanes) === 0 || fu(a, i), p = s ? PR(a, i) : Tp(a, i, !0), m = s;
    do {
      if (p === 0) {
        ro && !s && pa(a, i, 0, !1);
        break;
      } else {
        if (u = a.current.alternate, m && !CR(u)) {
          p = Tp(a, i, !1), m = !1;
          continue;
        }
        if (p === 2) {
          if (m = i, a.errorRecoveryDisabledLanes & m)
            var O = 0;
          else
            O = a.pendingLanes & -536870913, O = O !== 0 ? O : O & 536870912 ? 536870912 : 0;
          if (O !== 0) {
            i = O;
            e: {
              var D = a;
              p = Gu;
              var q = D.current.memoizedState.isDehydrated;
              if (q && (oo(D, O).flags |= 256), O = Tp(
                D,
                O,
                !1
              ), O !== 2) {
                if (bp && !q) {
                  D.errorRecoveryDisabledLanes |= m, Ja |= m, p = 4;
                  break e;
                }
                m = nn, nn = p, m !== null && (nn === null ? nn = m : nn.push.apply(
                  nn,
                  m
                ));
              }
              p = O;
            }
            if (m = !1, p !== 2) continue;
          }
        }
        if (p === 1) {
          oo(a, 0), pa(a, i, 0, !0);
          break;
        }
        e: {
          switch (s = a, m = p, m) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              pa(
                s,
                i,
                vn,
                !sa
              );
              break e;
            case 2:
              nn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((i & 62914560) === i && (p = cs + 300 - Ut(), 10 < p)) {
            if (pa(
              s,
              i,
              vn,
              !sa
            ), Sc(s, 0, !0) !== 0) break e;
            Dr = i, s.timeoutHandle = iO(
              M_.bind(
                null,
                s,
                u,
                nn,
                fs,
                Sp,
                i,
                vn,
                Ja,
                ao,
                sa,
                m,
                "Throttled",
                -0,
                0
              ),
              p
            );
            break e;
          }
          M_(
            s,
            u,
            nn,
            fs,
            Sp,
            i,
            vn,
            Ja,
            ao,
            sa,
            m,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    tr(a);
  }
  function M_(a, i, u, s, p, m, O, D, q, Z, ae, ue, Q, te) {
    if (a.timeoutHandle = -1, ue = i.subtreeFlags, ue & 8192 || (ue & 16785408) === 16785408) {
      ue = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yr
      }, S_(
        i,
        m,
        ue
      );
      var ye = (m & 62914560) === m ? cs - Ut() : (m & 4194048) === m ? A_ - Ut() : 0;
      if (ye = p3(
        ue,
        ye
      ), ye !== null) {
        Dr = m, a.cancelPendingCommit = ye(
          q_.bind(
            null,
            a,
            i,
            m,
            u,
            s,
            p,
            O,
            D,
            q,
            ae,
            ue,
            null,
            Q,
            te
          )
        ), pa(a, m, O, !Z);
        return;
      }
    }
    q_(
      a,
      i,
      m,
      u,
      s,
      p,
      O,
      D,
      q
    );
  }
  function CR(a) {
    for (var i = a; ; ) {
      var u = i.tag;
      if ((u === 0 || u === 11 || u === 15) && i.flags & 16384 && (u = i.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var s = 0; s < u.length; s++) {
          var p = u[s], m = p.getSnapshot;
          p = p.value;
          try {
            if (!sn(m(), p)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = i.child, i.subtreeFlags & 16384 && u !== null)
        u.return = i, i = u;
      else {
        if (i === a) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === a) return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function pa(a, i, u, s) {
    i &= ~xp, i &= ~Ja, a.suspendedLanes |= i, a.pingedLanes &= ~i, s && (a.warmLanes |= i), s = a.expirationTimes;
    for (var p = i; 0 < p; ) {
      var m = 31 - cn(p), O = 1 << m;
      s[m] = -1, p &= ~O;
    }
    u !== 0 && k1(a, u, i);
  }
  function ds() {
    return (Ue & 6) === 0 ? (Ku(0), !1) : !0;
  }
  function Ap() {
    if (De !== null) {
      if (Ye === 0)
        var a = De.return;
      else
        a = De, xr = Ga = null, Uh(a), Wi = null, ju = 0, a = De;
      for (; a !== null; )
        o_(a.alternate, a), a = a.return;
      De = null;
    }
  }
  function oo(a, i) {
    var u = a.timeoutHandle;
    u !== -1 && (a.timeoutHandle = -1, WR(u)), u = a.cancelPendingCommit, u !== null && (a.cancelPendingCommit = null, u()), Dr = 0, Ap(), Qe = a, De = u = gr(a.current, null), Ne = i, Ye = 0, pn = null, sa = !1, ro = fu(a, i), bp = !1, ao = vn = xp = Ja = fa = st = 0, nn = Gu = null, Sp = !1, (i & 8) !== 0 && (i |= i & 32);
    var s = a.entangledLanes;
    if (s !== 0)
      for (a = a.entanglements, s &= i; 0 < s; ) {
        var p = 31 - cn(s), m = 1 << p;
        i |= a[p], s &= ~m;
      }
    return Cr = i, Nc(), u;
  }
  function C_(a, i) {
    je = null, $.H = zu, i === Fi || i === Uc ? (i = Kx(), Ye = 3) : i === Mh ? (i = Kx(), Ye = 4) : Ye = i === rp ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, pn = i, De === null && (st = 1, ts(
      a,
      En(i, a.current)
    ));
  }
  function D_() {
    var a = dn.current;
    return a === null ? !0 : (Ne & 4194048) === Ne ? Dn === null : (Ne & 62914560) === Ne || (Ne & 536870912) !== 0 ? a === Dn : !1;
  }
  function P_() {
    var a = $.H;
    return $.H = zu, a === null ? zu : a;
  }
  function N_() {
    var a = $.A;
    return $.A = jR, a;
  }
  function hs() {
    st = 4, sa || (Ne & 4194048) !== Ne && dn.current !== null || (ro = !0), (fa & 134217727) === 0 && (Ja & 134217727) === 0 || Qe === null || pa(
      Qe,
      Ne,
      vn,
      !1
    );
  }
  function Tp(a, i, u) {
    var s = Ue;
    Ue |= 2;
    var p = P_(), m = N_();
    (Qe !== a || Ne !== i) && (fs = null, oo(a, i)), i = !1;
    var O = st;
    e: do
      try {
        if (Ye !== 0 && De !== null) {
          var D = De, q = pn;
          switch (Ye) {
            case 8:
              Ap(), O = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              dn.current === null && (i = !0);
              var Z = Ye;
              if (Ye = 0, pn = null, uo(a, D, q, Z), u && ro) {
                O = 0;
                break e;
              }
              break;
            default:
              Z = Ye, Ye = 0, pn = null, uo(a, D, q, Z);
          }
        }
        DR(), O = st;
        break;
      } catch (ae) {
        C_(a, ae);
      }
    while (!0);
    return i && a.shellSuspendCounter++, xr = Ga = null, Ue = s, $.H = p, $.A = m, De === null && (Qe = null, Ne = 0, Nc()), O;
  }
  function DR() {
    for (; De !== null; ) R_(De);
  }
  function PR(a, i) {
    var u = Ue;
    Ue |= 2;
    var s = P_(), p = N_();
    Qe !== a || Ne !== i ? (fs = null, ss = Ut() + 500, oo(a, i)) : ro = fu(
      a,
      i
    );
    e: do
      try {
        if (Ye !== 0 && De !== null) {
          i = De;
          var m = pn;
          t: switch (Ye) {
            case 1:
              Ye = 0, pn = null, uo(a, i, m, 1);
              break;
            case 2:
            case 9:
              if (Gx(m)) {
                Ye = 0, pn = null, $_(i);
                break;
              }
              i = function() {
                Ye !== 2 && Ye !== 9 || Qe !== a || (Ye = 7), tr(a);
              }, m.then(i, i);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              Gx(m) ? (Ye = 0, pn = null, $_(i)) : (Ye = 0, pn = null, uo(a, i, m, 7));
              break;
            case 5:
              var O = null;
              switch (De.tag) {
                case 26:
                  O = De.memoizedState;
                case 5:
                case 27:
                  var D = De;
                  if (O ? xO(O) : D.stateNode.complete) {
                    Ye = 0, pn = null;
                    var q = D.sibling;
                    if (q !== null) De = q;
                    else {
                      var Z = D.return;
                      Z !== null ? (De = Z, ps(Z)) : De = null;
                    }
                    break t;
                  }
              }
              Ye = 0, pn = null, uo(a, i, m, 5);
              break;
            case 6:
              Ye = 0, pn = null, uo(a, i, m, 6);
              break;
            case 8:
              Ap(), st = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        NR();
        break;
      } catch (ae) {
        C_(a, ae);
      }
    while (!0);
    return xr = Ga = null, $.H = s, $.A = p, Ue = u, De !== null ? 0 : (Qe = null, Ne = 0, Nc(), st);
  }
  function NR() {
    for (; De !== null && !On(); )
      R_(De);
  }
  function R_(a) {
    var i = a_(a.alternate, a, Cr);
    a.memoizedProps = a.pendingProps, i === null ? ps(a) : De = i;
  }
  function $_(a) {
    var i = a, u = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = QS(
          u,
          i,
          i.pendingProps,
          i.type,
          void 0,
          Ne
        );
        break;
      case 11:
        i = QS(
          u,
          i,
          i.pendingProps,
          i.type.render,
          i.ref,
          Ne
        );
        break;
      case 5:
        Uh(i);
      default:
        o_(u, i), i = De = Nx(i, Cr), i = a_(u, i, Cr);
    }
    a.memoizedProps = a.pendingProps, i === null ? ps(a) : De = i;
  }
  function uo(a, i, u, s) {
    xr = Ga = null, Uh(i), Wi = null, ju = 0;
    var p = i.return;
    try {
      if (SR(
        a,
        p,
        i,
        u,
        Ne
      )) {
        st = 1, ts(
          a,
          En(u, a.current)
        ), De = null;
        return;
      }
    } catch (m) {
      if (p !== null) throw De = p, m;
      st = 1, ts(
        a,
        En(u, a.current)
      ), De = null;
      return;
    }
    i.flags & 32768 ? (qe || s === 1 ? a = !0 : ro || (Ne & 536870912) !== 0 ? a = !1 : (sa = a = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = dn.current, s !== null && s.tag === 13 && (s.flags |= 16384))), z_(i, a)) : ps(i);
  }
  function ps(a) {
    var i = a;
    do {
      if ((i.flags & 32768) !== 0) {
        z_(
          i,
          sa
        );
        return;
      }
      a = i.return;
      var u = wR(
        i.alternate,
        i,
        Cr
      );
      if (u !== null) {
        De = u;
        return;
      }
      if (i = i.sibling, i !== null) {
        De = i;
        return;
      }
      De = i = a;
    } while (i !== null);
    st === 0 && (st = 5);
  }
  function z_(a, i) {
    do {
      var u = AR(a.alternate, a);
      if (u !== null) {
        u.flags &= 32767, De = u;
        return;
      }
      if (u = a.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !i && (a = a.sibling, a !== null)) {
        De = a;
        return;
      }
      De = a = u;
    } while (a !== null);
    st = 6, De = null;
  }
  function q_(a, i, u, s, p, m, O, D, q) {
    a.cancelPendingCommit = null;
    do
      vs();
    while (St !== 0);
    if ((Ue & 6) !== 0) throw Error(r(327));
    if (i !== null) {
      if (i === a.current) throw Error(r(177));
      if (m = i.lanes | i.childLanes, m |= ph, dN(
        a,
        u,
        m,
        O,
        D,
        q
      ), a === Qe && (De = Qe = null, Ne = 0), io = i, ha = a, Dr = u, _p = m, Op = p, T_ = s, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (a.callbackNode = null, a.callbackPriority = 0, qR(mc, function() {
        return I_(), null;
      })) : (a.callbackNode = null, a.callbackPriority = 0), s = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || s) {
        s = $.T, $.T = null, p = Y.p, Y.p = 2, O = Ue, Ue |= 4;
        try {
          TR(a, i, u);
        } finally {
          Ue = O, Y.p = p, $.T = s;
        }
      }
      St = 1, B_(), k_(), L_();
    }
  }
  function B_() {
    if (St === 1) {
      St = 0;
      var a = ha, i = io, u = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || u) {
        u = $.T, $.T = null;
        var s = Y.p;
        Y.p = 2;
        var p = Ue;
        Ue |= 4;
        try {
          g_(i, a);
          var m = Bp, O = wx(a.containerInfo), D = m.focusedElem, q = m.selectionRange;
          if (O !== D && D && D.ownerDocument && Ox(
            D.ownerDocument.documentElement,
            D
          )) {
            if (q !== null && ch(D)) {
              var Z = q.start, ae = q.end;
              if (ae === void 0 && (ae = Z), "selectionStart" in D)
                D.selectionStart = Z, D.selectionEnd = Math.min(
                  ae,
                  D.value.length
                );
              else {
                var ue = D.ownerDocument || document, Q = ue && ue.defaultView || window;
                if (Q.getSelection) {
                  var te = Q.getSelection(), ye = D.textContent.length, xe = Math.min(q.start, ye), We = q.end === void 0 ? xe : Math.min(q.end, ye);
                  !te.extend && xe > We && (O = We, We = xe, xe = O);
                  var X = _x(
                    D,
                    xe
                  ), I = _x(
                    D,
                    We
                  );
                  if (X && I && (te.rangeCount !== 1 || te.anchorNode !== X.node || te.anchorOffset !== X.offset || te.focusNode !== I.node || te.focusOffset !== I.offset)) {
                    var W = ue.createRange();
                    W.setStart(X.node, X.offset), te.removeAllRanges(), xe > We ? (te.addRange(W), te.extend(I.node, I.offset)) : (W.setEnd(I.node, I.offset), te.addRange(W));
                  }
                }
              }
            }
            for (ue = [], te = D; te = te.parentNode; )
              te.nodeType === 1 && ue.push({
                element: te,
                left: te.scrollLeft,
                top: te.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < ue.length; D++) {
              var oe = ue[D];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          Es = !!qp, Bp = qp = null;
        } finally {
          Ue = p, Y.p = s, $.T = u;
        }
      }
      a.current = i, St = 2;
    }
  }
  function k_() {
    if (St === 2) {
      St = 0;
      var a = ha, i = io, u = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || u) {
        u = $.T, $.T = null;
        var s = Y.p;
        Y.p = 2;
        var p = Ue;
        Ue |= 4;
        try {
          h_(a, i.alternate, i);
        } finally {
          Ue = p, Y.p = s, $.T = u;
        }
      }
      St = 3;
    }
  }
  function L_() {
    if (St === 4 || St === 3) {
      St = 0, cu();
      var a = ha, i = io, u = Dr, s = T_;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? St = 5 : (St = 0, io = ha = null, U_(a, a.pendingLanes));
      var p = a.pendingLanes;
      if (p === 0 && (da = null), Gd(u), i = i.stateNode, ln && typeof ln.onCommitFiberRoot == "function")
        try {
          ln.onCommitFiberRoot(
            su,
            i,
            void 0,
            (i.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        i = $.T, p = Y.p, Y.p = 2, $.T = null;
        try {
          for (var m = a.onRecoverableError, O = 0; O < s.length; O++) {
            var D = s[O];
            m(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          $.T = i, Y.p = p;
        }
      }
      (Dr & 3) !== 0 && vs(), tr(a), p = a.pendingLanes, (u & 261930) !== 0 && (p & 42) !== 0 ? a === wp ? Yu++ : (Yu = 0, wp = a) : Yu = 0, Ku(0);
    }
  }
  function U_(a, i) {
    (a.pooledCacheLanes &= i) === 0 && (i = a.pooledCache, i != null && (a.pooledCache = null, Tu(i)));
  }
  function vs() {
    return B_(), k_(), L_(), I_();
  }
  function I_() {
    if (St !== 5) return !1;
    var a = ha, i = _p;
    _p = 0;
    var u = Gd(Dr), s = $.T, p = Y.p;
    try {
      Y.p = 32 > u ? 32 : u, $.T = null, u = Op, Op = null;
      var m = ha, O = Dr;
      if (St = 0, io = ha = null, Dr = 0, (Ue & 6) !== 0) throw Error(r(331));
      var D = Ue;
      if (Ue |= 4, O_(m.current), x_(
        m,
        m.current,
        O,
        u
      ), Ue = D, Ku(0, !1), ln && typeof ln.onPostCommitFiberRoot == "function")
        try {
          ln.onPostCommitFiberRoot(su, m);
        } catch {
        }
      return !0;
    } finally {
      Y.p = p, $.T = s, U_(a, i);
    }
  }
  function H_(a, i, u) {
    i = En(u, i), i = np(a.stateNode, i, 2), a = oa(a, i, 2), a !== null && (du(a, 2), tr(a));
  }
  function Ke(a, i, u) {
    if (a.tag === 3)
      H_(a, a, u);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          H_(
            i,
            a,
            u
          );
          break;
        } else if (i.tag === 1) {
          var s = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (da === null || !da.has(s))) {
            a = En(u, a), u = GS(2), s = oa(i, u, 2), s !== null && (YS(
              u,
              s,
              i,
              a
            ), du(s, 2), tr(s));
            break;
          }
        }
        i = i.return;
      }
  }
  function Ep(a, i, u) {
    var s = a.pingCache;
    if (s === null) {
      s = a.pingCache = new MR();
      var p = /* @__PURE__ */ new Set();
      s.set(i, p);
    } else
      p = s.get(i), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(i, p));
    p.has(u) || (bp = !0, p.add(u), a = RR.bind(null, a, i, u), i.then(a, a));
  }
  function RR(a, i, u) {
    var s = a.pingCache;
    s !== null && s.delete(i), a.pingedLanes |= a.suspendedLanes & u, a.warmLanes &= ~u, Qe === a && (Ne & u) === u && (st === 4 || st === 3 && (Ne & 62914560) === Ne && 300 > Ut() - cs ? (Ue & 2) === 0 && oo(a, 0) : xp |= u, ao === Ne && (ao = 0)), tr(a);
  }
  function G_(a, i) {
    i === 0 && (i = B1()), a = Ua(a, i), a !== null && (du(a, i), tr(a));
  }
  function $R(a) {
    var i = a.memoizedState, u = 0;
    i !== null && (u = i.retryLane), G_(a, u);
  }
  function zR(a, i) {
    var u = 0;
    switch (a.tag) {
      case 31:
      case 13:
        var s = a.stateNode, p = a.memoizedState;
        p !== null && (u = p.retryLane);
        break;
      case 19:
        s = a.stateNode;
        break;
      case 22:
        s = a.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    s !== null && s.delete(i), G_(a, u);
  }
  function qR(a, i) {
    return _n(a, i);
  }
  var ys = null, lo = null, jp = !1, ms = !1, Mp = !1, va = 0;
  function tr(a) {
    a !== lo && a.next === null && (lo === null ? ys = lo = a : lo = lo.next = a), ms = !0, jp || (jp = !0, kR());
  }
  function Ku(a, i) {
    if (!Mp && ms) {
      Mp = !0;
      do
        for (var u = !1, s = ys; s !== null; ) {
          if (a !== 0) {
            var p = s.pendingLanes;
            if (p === 0) var m = 0;
            else {
              var O = s.suspendedLanes, D = s.pingedLanes;
              m = (1 << 31 - cn(42 | a) + 1) - 1, m &= p & ~(O & ~D), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (u = !0, V_(s, m));
          } else
            m = Ne, m = Sc(
              s,
              s === Qe ? m : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (m & 3) === 0 || fu(s, m) || (u = !0, V_(s, m));
          s = s.next;
        }
      while (u);
      Mp = !1;
    }
  }
  function BR() {
    Y_();
  }
  function Y_() {
    ms = jp = !1;
    var a = 0;
    va !== 0 && FR() && (a = va);
    for (var i = Ut(), u = null, s = ys; s !== null; ) {
      var p = s.next, m = K_(s, i);
      m === 0 ? (s.next = null, u === null ? ys = p : u.next = p, p === null && (lo = u)) : (u = s, (a !== 0 || (m & 3) !== 0) && (ms = !0)), s = p;
    }
    St !== 0 && St !== 5 || Ku(a), va !== 0 && (va = 0);
  }
  function K_(a, i) {
    for (var u = a.suspendedLanes, s = a.pingedLanes, p = a.expirationTimes, m = a.pendingLanes & -62914561; 0 < m; ) {
      var O = 31 - cn(m), D = 1 << O, q = p[O];
      q === -1 ? ((D & u) === 0 || (D & s) !== 0) && (p[O] = fN(D, i)) : q <= i && (a.expiredLanes |= D), m &= ~D;
    }
    if (i = Qe, u = Ne, u = Sc(
      a,
      a === i ? u : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), s = a.callbackNode, u === 0 || a === i && (Ye === 2 || Ye === 9) || a.cancelPendingCommit !== null)
      return s !== null && s !== null && Pt(s), a.callbackNode = null, a.callbackPriority = 0;
    if ((u & 3) === 0 || fu(a, u)) {
      if (i = u & -u, i === a.callbackPriority) return i;
      switch (s !== null && Pt(s), Gd(u)) {
        case 2:
        case 8:
          u = z1;
          break;
        case 32:
          u = mc;
          break;
        case 268435456:
          u = q1;
          break;
        default:
          u = mc;
      }
      return s = X_.bind(null, a), u = _n(u, s), a.callbackPriority = i, a.callbackNode = u, i;
    }
    return s !== null && s !== null && Pt(s), a.callbackPriority = 2, a.callbackNode = null, 2;
  }
  function X_(a, i) {
    if (St !== 0 && St !== 5)
      return a.callbackNode = null, a.callbackPriority = 0, null;
    var u = a.callbackNode;
    if (vs() && a.callbackNode !== u)
      return null;
    var s = Ne;
    return s = Sc(
      a,
      a === Qe ? s : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), s === 0 ? null : (j_(a, s, i), K_(a, Ut()), a.callbackNode != null && a.callbackNode === u ? X_.bind(null, a) : null);
  }
  function V_(a, i) {
    if (vs()) return null;
    j_(a, i, !0);
  }
  function kR() {
    ZR(function() {
      (Ue & 6) !== 0 ? _n(
        $1,
        BR
      ) : Y_();
    });
  }
  function Cp() {
    if (va === 0) {
      var a = Xi;
      a === 0 && (a = gc, gc <<= 1, (gc & 261888) === 0 && (gc = 256)), va = a;
    }
    return va;
  }
  function F_(a) {
    return a == null || typeof a == "symbol" || typeof a == "boolean" ? null : typeof a == "function" ? a : Ac("" + a);
  }
  function W_(a, i) {
    var u = i.ownerDocument.createElement("input");
    return u.name = i.name, u.value = i.value, a.id && u.setAttribute("form", a.id), i.parentNode.insertBefore(u, i), a = new FormData(a), u.parentNode.removeChild(u), a;
  }
  function LR(a, i, u, s, p) {
    if (i === "submit" && u && u.stateNode === p) {
      var m = F_(
        (p[Zt] || null).action
      ), O = s.submitter;
      O && (i = (i = O[Zt] || null) ? F_(i.formAction) : O.getAttribute("formAction"), i !== null && (m = i, O = null));
      var D = new Mc(
        "action",
        "action",
        null,
        s,
        p
      );
      a.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (va !== 0) {
                  var q = O ? W_(p, O) : new FormData(p);
                  Wh(
                    u,
                    {
                      pending: !0,
                      data: q,
                      method: p.method,
                      action: m
                    },
                    null,
                    q
                  );
                }
              } else
                typeof m == "function" && (D.preventDefault(), q = O ? W_(p, O) : new FormData(p), Wh(
                  u,
                  {
                    pending: !0,
                    data: q,
                    method: p.method,
                    action: m
                  },
                  m,
                  q
                ));
            },
            currentTarget: p
          }
        ]
      });
    }
  }
  for (var Dp = 0; Dp < hh.length; Dp++) {
    var Pp = hh[Dp], UR = Pp.toLowerCase(), IR = Pp[0].toUpperCase() + Pp.slice(1);
    In(
      UR,
      "on" + IR
    );
  }
  In(Ex, "onAnimationEnd"), In(jx, "onAnimationIteration"), In(Mx, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(aR, "onTransitionRun"), In(iR, "onTransitionStart"), In(oR, "onTransitionCancel"), In(Cx, "onTransitionEnd"), Ni("onMouseEnter", ["mouseout", "mouseover"]), Ni("onMouseLeave", ["mouseout", "mouseover"]), Ni("onPointerEnter", ["pointerout", "pointerover"]), Ni("onPointerLeave", ["pointerout", "pointerover"]), qa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), qa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), qa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), qa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), qa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), qa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Xu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), HR = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xu)
  );
  function Z_(a, i) {
    i = (i & 4) !== 0;
    for (var u = 0; u < a.length; u++) {
      var s = a[u], p = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (i)
          for (var O = s.length - 1; 0 <= O; O--) {
            var D = s[O], q = D.instance, Z = D.currentTarget;
            if (D = D.listener, q !== m && p.isPropagationStopped())
              break e;
            m = D, p.currentTarget = Z;
            try {
              m(p);
            } catch (ae) {
              Pc(ae);
            }
            p.currentTarget = null, m = q;
          }
        else
          for (O = 0; O < s.length; O++) {
            if (D = s[O], q = D.instance, Z = D.currentTarget, D = D.listener, q !== m && p.isPropagationStopped())
              break e;
            m = D, p.currentTarget = Z;
            try {
              m(p);
            } catch (ae) {
              Pc(ae);
            }
            p.currentTarget = null, m = q;
          }
      }
    }
  }
  function Pe(a, i) {
    var u = i[Yd];
    u === void 0 && (u = i[Yd] = /* @__PURE__ */ new Set());
    var s = a + "__bubble";
    u.has(s) || (Q_(i, a, 2, !1), u.add(s));
  }
  function Np(a, i, u) {
    var s = 0;
    i && (s |= 4), Q_(
      u,
      a,
      s,
      i
    );
  }
  var gs = "_reactListening" + Math.random().toString(36).slice(2);
  function Rp(a) {
    if (!a[gs]) {
      a[gs] = !0, Y1.forEach(function(u) {
        u !== "selectionchange" && (HR.has(u) || Np(u, !1, a), Np(u, !0, a));
      });
      var i = a.nodeType === 9 ? a : a.ownerDocument;
      i === null || i[gs] || (i[gs] = !0, Np("selectionchange", !1, i));
    }
  }
  function Q_(a, i, u, s) {
    switch (EO(i)) {
      case 2:
        var p = m3;
        break;
      case 8:
        p = g3;
        break;
      default:
        p = Fp;
    }
    u = p.bind(
      null,
      i,
      u,
      a
    ), p = void 0, !eh || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (p = !0), s ? p !== void 0 ? a.addEventListener(i, u, {
      capture: !0,
      passive: p
    }) : a.addEventListener(i, u, !0) : p !== void 0 ? a.addEventListener(i, u, {
      passive: p
    }) : a.addEventListener(i, u, !1);
  }
  function $p(a, i, u, s, p) {
    var m = s;
    if ((i & 1) === 0 && (i & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var O = s.tag;
        if (O === 3 || O === 4) {
          var D = s.stateNode.containerInfo;
          if (D === p) break;
          if (O === 4)
            for (O = s.return; O !== null; ) {
              var q = O.tag;
              if ((q === 3 || q === 4) && O.stateNode.containerInfo === p)
                return;
              O = O.return;
            }
          for (; D !== null; ) {
            if (O = Ci(D), O === null) return;
            if (q = O.tag, q === 5 || q === 6 || q === 26 || q === 27) {
              s = m = O;
              continue e;
            }
            D = D.parentNode;
          }
        }
        s = s.return;
      }
    rx(function() {
      var Z = m, ae = Qd(u), ue = [];
      e: {
        var Q = Dx.get(a);
        if (Q !== void 0) {
          var te = Mc, ye = a;
          switch (a) {
            case "keypress":
              if (Ec(u) === 0) break e;
            case "keydown":
            case "keyup":
              te = zN;
              break;
            case "focusin":
              ye = "focus", te = ah;
              break;
            case "focusout":
              ye = "blur", te = ah;
              break;
            case "beforeblur":
            case "afterblur":
              te = ah;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = ox;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = wN;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = kN;
              break;
            case Ex:
            case jx:
            case Mx:
              te = EN;
              break;
            case Cx:
              te = UN;
              break;
            case "scroll":
            case "scrollend":
              te = _N;
              break;
            case "wheel":
              te = HN;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = MN;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = lx;
              break;
            case "toggle":
            case "beforetoggle":
              te = YN;
          }
          var xe = (i & 4) !== 0, We = !xe && (a === "scroll" || a === "scrollend"), X = xe ? Q !== null ? Q + "Capture" : null : Q;
          xe = [];
          for (var I = Z, W; I !== null; ) {
            var oe = I;
            if (W = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || W === null || X === null || (oe = vu(I, X), oe != null && xe.push(
              Vu(I, oe, W)
            )), We) break;
            I = I.return;
          }
          0 < xe.length && (Q = new te(
            Q,
            ye,
            null,
            u,
            ae
          ), ue.push({ event: Q, listeners: xe }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (Q = a === "mouseover" || a === "pointerover", te = a === "mouseout" || a === "pointerout", Q && u !== Zd && (ye = u.relatedTarget || u.fromElement) && (Ci(ye) || ye[Mi]))
            break e;
          if ((te || Q) && (Q = ae.window === ae ? ae : (Q = ae.ownerDocument) ? Q.defaultView || Q.parentWindow : window, te ? (ye = u.relatedTarget || u.toElement, te = Z, ye = ye ? Ci(ye) : null, ye !== null && (We = l(ye), xe = ye.tag, ye !== We || xe !== 5 && xe !== 27 && xe !== 6) && (ye = null)) : (te = null, ye = Z), te !== ye)) {
            if (xe = ox, oe = "onMouseLeave", X = "onMouseEnter", I = "mouse", (a === "pointerout" || a === "pointerover") && (xe = lx, oe = "onPointerLeave", X = "onPointerEnter", I = "pointer"), We = te == null ? Q : pu(te), W = ye == null ? Q : pu(ye), Q = new xe(
              oe,
              I + "leave",
              te,
              u,
              ae
            ), Q.target = We, Q.relatedTarget = W, oe = null, Ci(ae) === Z && (xe = new xe(
              X,
              I + "enter",
              ye,
              u,
              ae
            ), xe.target = W, xe.relatedTarget = We, oe = xe), We = oe, te && ye)
              t: {
                for (xe = GR, X = te, I = ye, W = 0, oe = X; oe; oe = xe(oe))
                  W++;
                oe = 0;
                for (var be = I; be; be = xe(be))
                  oe++;
                for (; 0 < W - oe; )
                  X = xe(X), W--;
                for (; 0 < oe - W; )
                  I = xe(I), oe--;
                for (; W--; ) {
                  if (X === I || I !== null && X === I.alternate) {
                    xe = X;
                    break t;
                  }
                  X = xe(X), I = xe(I);
                }
                xe = null;
              }
            else xe = null;
            te !== null && J_(
              ue,
              Q,
              te,
              xe,
              !1
            ), ye !== null && We !== null && J_(
              ue,
              We,
              ye,
              xe,
              !0
            );
          }
        }
        e: {
          if (Q = Z ? pu(Z) : window, te = Q.nodeName && Q.nodeName.toLowerCase(), te === "select" || te === "input" && Q.type === "file")
            var Be = yx;
          else if (px(Q))
            if (mx)
              Be = tR;
            else {
              Be = JN;
              var me = QN;
            }
          else
            te = Q.nodeName, !te || te.toLowerCase() !== "input" || Q.type !== "checkbox" && Q.type !== "radio" ? Z && Wd(Z.elementType) && (Be = yx) : Be = eR;
          if (Be && (Be = Be(a, Z))) {
            vx(
              ue,
              Be,
              u,
              ae
            );
            break e;
          }
          me && me(a, Q, Z), a === "focusout" && Z && Q.type === "number" && Z.memoizedProps.value != null && Fd(Q, "number", Q.value);
        }
        switch (me = Z ? pu(Z) : window, a) {
          case "focusin":
            (px(me) || me.contentEditable === "true") && (ki = me, sh = Z, Ou = null);
            break;
          case "focusout":
            Ou = sh = ki = null;
            break;
          case "mousedown":
            fh = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fh = !1, Ax(ue, u, ae);
            break;
          case "selectionchange":
            if (rR) break;
          case "keydown":
          case "keyup":
            Ax(ue, u, ae);
        }
        var Me;
        if (oh)
          e: {
            switch (a) {
              case "compositionstart":
                var Re = "onCompositionStart";
                break e;
              case "compositionend":
                Re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Re = "onCompositionUpdate";
                break e;
            }
            Re = void 0;
          }
        else
          Bi ? dx(a, u) && (Re = "onCompositionEnd") : a === "keydown" && u.keyCode === 229 && (Re = "onCompositionStart");
        Re && (cx && u.locale !== "ko" && (Bi || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Bi && (Me = ax()) : (Jr = ae, th = "value" in Jr ? Jr.value : Jr.textContent, Bi = !0)), me = bs(Z, Re), 0 < me.length && (Re = new ux(
          Re,
          a,
          null,
          u,
          ae
        ), ue.push({ event: Re, listeners: me }), Me ? Re.data = Me : (Me = hx(u), Me !== null && (Re.data = Me)))), (Me = XN ? VN(a, u) : FN(a, u)) && (Re = bs(Z, "onBeforeInput"), 0 < Re.length && (me = new ux(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          ae
        ), ue.push({
          event: me,
          listeners: Re
        }), me.data = Me)), LR(
          ue,
          a,
          Z,
          u,
          ae
        );
      }
      Z_(ue, i);
    });
  }
  function Vu(a, i, u) {
    return {
      instance: a,
      listener: i,
      currentTarget: u
    };
  }
  function bs(a, i) {
    for (var u = i + "Capture", s = []; a !== null; ) {
      var p = a, m = p.stateNode;
      if (p = p.tag, p !== 5 && p !== 26 && p !== 27 || m === null || (p = vu(a, u), p != null && s.unshift(
        Vu(a, p, m)
      ), p = vu(a, i), p != null && s.push(
        Vu(a, p, m)
      )), a.tag === 3) return s;
      a = a.return;
    }
    return [];
  }
  function GR(a) {
    if (a === null) return null;
    do
      a = a.return;
    while (a && a.tag !== 5 && a.tag !== 27);
    return a || null;
  }
  function J_(a, i, u, s, p) {
    for (var m = i._reactName, O = []; u !== null && u !== s; ) {
      var D = u, q = D.alternate, Z = D.stateNode;
      if (D = D.tag, q !== null && q === s) break;
      D !== 5 && D !== 26 && D !== 27 || Z === null || (q = Z, p ? (Z = vu(u, m), Z != null && O.unshift(
        Vu(u, Z, q)
      )) : p || (Z = vu(u, m), Z != null && O.push(
        Vu(u, Z, q)
      ))), u = u.return;
    }
    O.length !== 0 && a.push({ event: i, listeners: O });
  }
  var YR = /\r\n?/g, KR = /\u0000|\uFFFD/g;
  function eO(a) {
    return (typeof a == "string" ? a : "" + a).replace(YR, `
`).replace(KR, "");
  }
  function tO(a, i) {
    return i = eO(i), eO(a) === i;
  }
  function Fe(a, i, u, s, p, m) {
    switch (u) {
      case "children":
        typeof s == "string" ? i === "body" || i === "textarea" && s === "" || $i(a, s) : (typeof s == "number" || typeof s == "bigint") && i !== "body" && $i(a, "" + s);
        break;
      case "className":
        Oc(a, "class", s);
        break;
      case "tabIndex":
        Oc(a, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oc(a, u, s);
        break;
      case "style":
        tx(a, s, m);
        break;
      case "data":
        if (i !== "object") {
          Oc(a, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (i !== "a" || u !== "href")) {
          a.removeAttribute(u);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          a.removeAttribute(u);
          break;
        }
        s = Ac("" + s), a.setAttribute(u, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          a.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (u === "formAction" ? (i !== "input" && Fe(a, i, "name", p.name, p, null), Fe(
            a,
            i,
            "formEncType",
            p.formEncType,
            p,
            null
          ), Fe(
            a,
            i,
            "formMethod",
            p.formMethod,
            p,
            null
          ), Fe(
            a,
            i,
            "formTarget",
            p.formTarget,
            p,
            null
          )) : (Fe(a, i, "encType", p.encType, p, null), Fe(a, i, "method", p.method, p, null), Fe(a, i, "target", p.target, p, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          a.removeAttribute(u);
          break;
        }
        s = Ac("" + s), a.setAttribute(u, s);
        break;
      case "onClick":
        s != null && (a.onclick = yr);
        break;
      case "onScroll":
        s != null && Pe("scroll", a);
        break;
      case "onScrollEnd":
        s != null && Pe("scrollend", a);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (u = s.__html, u != null) {
            if (p.children != null) throw Error(r(60));
            a.innerHTML = u;
          }
        }
        break;
      case "multiple":
        a.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        a.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          a.removeAttribute("xlink:href");
          break;
        }
        u = Ac("" + s), a.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol" ? a.setAttribute(u, "" + s) : a.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol" ? a.setAttribute(u, "") : a.removeAttribute(u);
        break;
      case "capture":
      case "download":
        s === !0 ? a.setAttribute(u, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? a.setAttribute(u, s) : a.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? a.setAttribute(u, s) : a.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? a.removeAttribute(u) : a.setAttribute(u, s);
        break;
      case "popover":
        Pe("beforetoggle", a), Pe("toggle", a), _c(a, "popover", s);
        break;
      case "xlinkActuate":
        vr(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        vr(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        vr(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        vr(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        vr(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        vr(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        vr(
          a,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        vr(
          a,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        vr(
          a,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        _c(a, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = xN.get(u) || u, _c(a, u, s));
    }
  }
  function zp(a, i, u, s, p, m) {
    switch (u) {
      case "style":
        tx(a, s, m);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (u = s.__html, u != null) {
            if (p.children != null) throw Error(r(60));
            a.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof s == "string" ? $i(a, s) : (typeof s == "number" || typeof s == "bigint") && $i(a, "" + s);
        break;
      case "onScroll":
        s != null && Pe("scroll", a);
        break;
      case "onScrollEnd":
        s != null && Pe("scrollend", a);
        break;
      case "onClick":
        s != null && (a.onclick = yr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!K1.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (p = u.endsWith("Capture"), i = u.slice(2, p ? u.length - 7 : void 0), m = a[Zt] || null, m = m != null ? m[u] : null, typeof m == "function" && a.removeEventListener(i, m, p), typeof s == "function")) {
              typeof m != "function" && m !== null && (u in a ? a[u] = null : a.hasAttribute(u) && a.removeAttribute(u)), a.addEventListener(i, s, p);
              break e;
            }
            u in a ? a[u] = s : s === !0 ? a.setAttribute(u, "") : _c(a, u, s);
          }
    }
  }
  function qt(a, i, u) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Pe("error", a), Pe("load", a);
        var s = !1, p = !1, m;
        for (m in u)
          if (u.hasOwnProperty(m)) {
            var O = u[m];
            if (O != null)
              switch (m) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  p = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, i));
                default:
                  Fe(a, i, m, O, u, null);
              }
          }
        p && Fe(a, i, "srcSet", u.srcSet, u, null), s && Fe(a, i, "src", u.src, u, null);
        return;
      case "input":
        Pe("invalid", a);
        var D = m = O = p = null, q = null, Z = null;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var ae = u[s];
            if (ae != null)
              switch (s) {
                case "name":
                  p = ae;
                  break;
                case "type":
                  O = ae;
                  break;
                case "checked":
                  q = ae;
                  break;
                case "defaultChecked":
                  Z = ae;
                  break;
                case "value":
                  m = ae;
                  break;
                case "defaultValue":
                  D = ae;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ae != null)
                    throw Error(r(137, i));
                  break;
                default:
                  Fe(a, i, s, ae, u, null);
              }
          }
        Z1(
          a,
          m,
          D,
          q,
          Z,
          O,
          p,
          !1
        );
        return;
      case "select":
        Pe("invalid", a), s = O = m = null;
        for (p in u)
          if (u.hasOwnProperty(p) && (D = u[p], D != null))
            switch (p) {
              case "value":
                m = D;
                break;
              case "defaultValue":
                O = D;
                break;
              case "multiple":
                s = D;
              default:
                Fe(a, i, p, D, u, null);
            }
        i = m, u = O, a.multiple = !!s, i != null ? Ri(a, !!s, i, !1) : u != null && Ri(a, !!s, u, !0);
        return;
      case "textarea":
        Pe("invalid", a), m = p = s = null;
        for (O in u)
          if (u.hasOwnProperty(O) && (D = u[O], D != null))
            switch (O) {
              case "value":
                s = D;
                break;
              case "defaultValue":
                p = D;
                break;
              case "children":
                m = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(r(91));
                break;
              default:
                Fe(a, i, O, D, u, null);
            }
        J1(a, s, p, m);
        return;
      case "option":
        for (q in u)
          if (u.hasOwnProperty(q) && (s = u[q], s != null))
            switch (q) {
              case "selected":
                a.selected = s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                Fe(a, i, q, s, u, null);
            }
        return;
      case "dialog":
        Pe("beforetoggle", a), Pe("toggle", a), Pe("cancel", a), Pe("close", a);
        break;
      case "iframe":
      case "object":
        Pe("load", a);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Xu.length; s++)
          Pe(Xu[s], a);
        break;
      case "image":
        Pe("error", a), Pe("load", a);
        break;
      case "details":
        Pe("toggle", a);
        break;
      case "embed":
      case "source":
      case "link":
        Pe("error", a), Pe("load", a);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Z in u)
          if (u.hasOwnProperty(Z) && (s = u[Z], s != null))
            switch (Z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, i));
              default:
                Fe(a, i, Z, s, u, null);
            }
        return;
      default:
        if (Wd(i)) {
          for (ae in u)
            u.hasOwnProperty(ae) && (s = u[ae], s !== void 0 && zp(
              a,
              i,
              ae,
              s,
              u,
              void 0
            ));
          return;
        }
    }
    for (D in u)
      u.hasOwnProperty(D) && (s = u[D], s != null && Fe(a, i, D, s, u, null));
  }
  function XR(a, i, u, s) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var p = null, m = null, O = null, D = null, q = null, Z = null, ae = null;
        for (te in u) {
          var ue = u[te];
          if (u.hasOwnProperty(te) && ue != null)
            switch (te) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                q = ue;
              default:
                s.hasOwnProperty(te) || Fe(a, i, te, null, s, ue);
            }
        }
        for (var Q in s) {
          var te = s[Q];
          if (ue = u[Q], s.hasOwnProperty(Q) && (te != null || ue != null))
            switch (Q) {
              case "type":
                m = te;
                break;
              case "name":
                p = te;
                break;
              case "checked":
                Z = te;
                break;
              case "defaultChecked":
                ae = te;
                break;
              case "value":
                O = te;
                break;
              case "defaultValue":
                D = te;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (te != null)
                  throw Error(r(137, i));
                break;
              default:
                te !== ue && Fe(
                  a,
                  i,
                  Q,
                  te,
                  s,
                  ue
                );
            }
        }
        Vd(
          a,
          O,
          D,
          q,
          Z,
          ae,
          m,
          p
        );
        return;
      case "select":
        te = O = D = Q = null;
        for (m in u)
          if (q = u[m], u.hasOwnProperty(m) && q != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                te = q;
              default:
                s.hasOwnProperty(m) || Fe(
                  a,
                  i,
                  m,
                  null,
                  s,
                  q
                );
            }
        for (p in s)
          if (m = s[p], q = u[p], s.hasOwnProperty(p) && (m != null || q != null))
            switch (p) {
              case "value":
                Q = m;
                break;
              case "defaultValue":
                D = m;
                break;
              case "multiple":
                O = m;
              default:
                m !== q && Fe(
                  a,
                  i,
                  p,
                  m,
                  s,
                  q
                );
            }
        i = D, u = O, s = te, Q != null ? Ri(a, !!u, Q, !1) : !!s != !!u && (i != null ? Ri(a, !!u, i, !0) : Ri(a, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        te = Q = null;
        for (D in u)
          if (p = u[D], u.hasOwnProperty(D) && p != null && !s.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Fe(a, i, D, null, s, p);
            }
        for (O in s)
          if (p = s[O], m = u[O], s.hasOwnProperty(O) && (p != null || m != null))
            switch (O) {
              case "value":
                Q = p;
                break;
              case "defaultValue":
                te = p;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                p !== m && Fe(a, i, O, p, s, m);
            }
        Q1(a, Q, te);
        return;
      case "option":
        for (var ye in u)
          if (Q = u[ye], u.hasOwnProperty(ye) && Q != null && !s.hasOwnProperty(ye))
            switch (ye) {
              case "selected":
                a.selected = !1;
                break;
              default:
                Fe(
                  a,
                  i,
                  ye,
                  null,
                  s,
                  Q
                );
            }
        for (q in s)
          if (Q = s[q], te = u[q], s.hasOwnProperty(q) && Q !== te && (Q != null || te != null))
            switch (q) {
              case "selected":
                a.selected = Q && typeof Q != "function" && typeof Q != "symbol";
                break;
              default:
                Fe(
                  a,
                  i,
                  q,
                  Q,
                  s,
                  te
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var xe in u)
          Q = u[xe], u.hasOwnProperty(xe) && Q != null && !s.hasOwnProperty(xe) && Fe(a, i, xe, null, s, Q);
        for (Z in s)
          if (Q = s[Z], te = u[Z], s.hasOwnProperty(Z) && Q !== te && (Q != null || te != null))
            switch (Z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(r(137, i));
                break;
              default:
                Fe(
                  a,
                  i,
                  Z,
                  Q,
                  s,
                  te
                );
            }
        return;
      default:
        if (Wd(i)) {
          for (var We in u)
            Q = u[We], u.hasOwnProperty(We) && Q !== void 0 && !s.hasOwnProperty(We) && zp(
              a,
              i,
              We,
              void 0,
              s,
              Q
            );
          for (ae in s)
            Q = s[ae], te = u[ae], !s.hasOwnProperty(ae) || Q === te || Q === void 0 && te === void 0 || zp(
              a,
              i,
              ae,
              Q,
              s,
              te
            );
          return;
        }
    }
    for (var X in u)
      Q = u[X], u.hasOwnProperty(X) && Q != null && !s.hasOwnProperty(X) && Fe(a, i, X, null, s, Q);
    for (ue in s)
      Q = s[ue], te = u[ue], !s.hasOwnProperty(ue) || Q === te || Q == null && te == null || Fe(a, i, ue, Q, s, te);
  }
  function nO(a) {
    switch (a) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function VR() {
    if (typeof performance.getEntriesByType == "function") {
      for (var a = 0, i = 0, u = performance.getEntriesByType("resource"), s = 0; s < u.length; s++) {
        var p = u[s], m = p.transferSize, O = p.initiatorType, D = p.duration;
        if (m && D && nO(O)) {
          for (O = 0, D = p.responseEnd, s += 1; s < u.length; s++) {
            var q = u[s], Z = q.startTime;
            if (Z > D) break;
            var ae = q.transferSize, ue = q.initiatorType;
            ae && nO(ue) && (q = q.responseEnd, O += ae * (q < D ? 1 : (D - Z) / (q - Z)));
          }
          if (--s, i += 8 * (m + O) / (p.duration / 1e3), a++, 10 < a) break;
        }
      }
      if (0 < a) return i / a / 1e6;
    }
    return navigator.connection && (a = navigator.connection.downlink, typeof a == "number") ? a : 5;
  }
  var qp = null, Bp = null;
  function xs(a) {
    return a.nodeType === 9 ? a : a.ownerDocument;
  }
  function rO(a) {
    switch (a) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function aO(a, i) {
    if (a === 0)
      switch (i) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return a === 1 && i === "foreignObject" ? 0 : a;
  }
  function kp(a, i) {
    return a === "textarea" || a === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Lp = null;
  function FR() {
    var a = window.event;
    return a && a.type === "popstate" ? a === Lp ? !1 : (Lp = a, !0) : (Lp = null, !1);
  }
  var iO = typeof setTimeout == "function" ? setTimeout : void 0, WR = typeof clearTimeout == "function" ? clearTimeout : void 0, oO = typeof Promise == "function" ? Promise : void 0, ZR = typeof queueMicrotask == "function" ? queueMicrotask : typeof oO < "u" ? function(a) {
    return oO.resolve(null).then(a).catch(QR);
  } : iO;
  function QR(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function ya(a) {
    return a === "head";
  }
  function uO(a, i) {
    var u = i, s = 0;
    do {
      var p = u.nextSibling;
      if (a.removeChild(u), p && p.nodeType === 8)
        if (u = p.data, u === "/$" || u === "/&") {
          if (s === 0) {
            a.removeChild(p), ho(i);
            return;
          }
          s--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          s++;
        else if (u === "html")
          Fu(a.ownerDocument.documentElement);
        else if (u === "head") {
          u = a.ownerDocument.head, Fu(u);
          for (var m = u.firstChild; m; ) {
            var O = m.nextSibling, D = m.nodeName;
            m[hu] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = O;
          }
        } else
          u === "body" && Fu(a.ownerDocument.body);
      u = p;
    } while (u);
    ho(i);
  }
  function lO(a, i) {
    var u = a;
    a = 0;
    do {
      var s = u.nextSibling;
      if (u.nodeType === 1 ? i ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (i ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (a === 0) break;
          a--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || a++;
      u = s;
    } while (u);
  }
  function Up(a) {
    var i = a.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var u = i;
      switch (i = i.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Up(u), Kd(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      a.removeChild(u);
    }
  }
  function JR(a, i, u, s) {
    for (; a.nodeType === 1; ) {
      var p = u;
      if (a.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!s && (a.nodeName !== "INPUT" || a.type !== "hidden"))
          break;
      } else if (s) {
        if (!a[hu])
          switch (i) {
            case "meta":
              if (!a.hasAttribute("itemprop")) break;
              return a;
            case "link":
              if (m = a.getAttribute("rel"), m === "stylesheet" && a.hasAttribute("data-precedence"))
                break;
              if (m !== p.rel || a.getAttribute("href") !== (p.href == null || p.href === "" ? null : p.href) || a.getAttribute("crossorigin") !== (p.crossOrigin == null ? null : p.crossOrigin) || a.getAttribute("title") !== (p.title == null ? null : p.title))
                break;
              return a;
            case "style":
              if (a.hasAttribute("data-precedence")) break;
              return a;
            case "script":
              if (m = a.getAttribute("src"), (m !== (p.src == null ? null : p.src) || a.getAttribute("type") !== (p.type == null ? null : p.type) || a.getAttribute("crossorigin") !== (p.crossOrigin == null ? null : p.crossOrigin)) && m && a.hasAttribute("async") && !a.hasAttribute("itemprop"))
                break;
              return a;
            default:
              return a;
          }
      } else if (i === "input" && a.type === "hidden") {
        var m = p.name == null ? null : "" + p.name;
        if (p.type === "hidden" && a.getAttribute("name") === m)
          return a;
      } else return a;
      if (a = Pn(a.nextSibling), a === null) break;
    }
    return null;
  }
  function e3(a, i, u) {
    if (i === "") return null;
    for (; a.nodeType !== 3; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !u || (a = Pn(a.nextSibling), a === null)) return null;
    return a;
  }
  function cO(a, i) {
    for (; a.nodeType !== 8; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !i || (a = Pn(a.nextSibling), a === null)) return null;
    return a;
  }
  function Ip(a) {
    return a.data === "$?" || a.data === "$~";
  }
  function Hp(a) {
    return a.data === "$!" || a.data === "$?" && a.ownerDocument.readyState !== "loading";
  }
  function t3(a, i) {
    var u = a.ownerDocument;
    if (a.data === "$~") a._reactRetry = i;
    else if (a.data !== "$?" || u.readyState !== "loading")
      i();
    else {
      var s = function() {
        i(), u.removeEventListener("DOMContentLoaded", s);
      };
      u.addEventListener("DOMContentLoaded", s), a._reactRetry = s;
    }
  }
  function Pn(a) {
    for (; a != null; a = a.nextSibling) {
      var i = a.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = a.data, i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&" || i === "F!" || i === "F")
          break;
        if (i === "/$" || i === "/&") return null;
      }
    }
    return a;
  }
  var Gp = null;
  function sO(a) {
    a = a.nextSibling;
    for (var i = 0; a; ) {
      if (a.nodeType === 8) {
        var u = a.data;
        if (u === "/$" || u === "/&") {
          if (i === 0)
            return Pn(a.nextSibling);
          i--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || i++;
      }
      a = a.nextSibling;
    }
    return null;
  }
  function fO(a) {
    a = a.previousSibling;
    for (var i = 0; a; ) {
      if (a.nodeType === 8) {
        var u = a.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (i === 0) return a;
          i--;
        } else u !== "/$" && u !== "/&" || i++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  function dO(a, i, u) {
    switch (i = xs(u), a) {
      case "html":
        if (a = i.documentElement, !a) throw Error(r(452));
        return a;
      case "head":
        if (a = i.head, !a) throw Error(r(453));
        return a;
      case "body":
        if (a = i.body, !a) throw Error(r(454));
        return a;
      default:
        throw Error(r(451));
    }
  }
  function Fu(a) {
    for (var i = a.attributes; i.length; )
      a.removeAttributeNode(i[0]);
    Kd(a);
  }
  var Nn = /* @__PURE__ */ new Map(), hO = /* @__PURE__ */ new Set();
  function Ss(a) {
    return typeof a.getRootNode == "function" ? a.getRootNode() : a.nodeType === 9 ? a : a.ownerDocument;
  }
  var Pr = Y.d;
  Y.d = {
    f: n3,
    r: r3,
    D: a3,
    C: i3,
    L: o3,
    m: u3,
    X: c3,
    S: l3,
    M: s3
  };
  function n3() {
    var a = Pr.f(), i = ds();
    return a || i;
  }
  function r3(a) {
    var i = Di(a);
    i !== null && i.tag === 5 && i.type === "form" ? CS(i) : Pr.r(a);
  }
  var co = typeof document > "u" ? null : document;
  function pO(a, i, u) {
    var s = co;
    if (s && typeof i == "string" && i) {
      var p = An(i);
      p = 'link[rel="' + a + '"][href="' + p + '"]', typeof u == "string" && (p += '[crossorigin="' + u + '"]'), hO.has(p) || (hO.add(p), a = { rel: a, crossOrigin: u, href: i }, s.querySelector(p) === null && (i = s.createElement("link"), qt(i, "link", a), jt(i), s.head.appendChild(i)));
    }
  }
  function a3(a) {
    Pr.D(a), pO("dns-prefetch", a, null);
  }
  function i3(a, i) {
    Pr.C(a, i), pO("preconnect", a, i);
  }
  function o3(a, i, u) {
    Pr.L(a, i, u);
    var s = co;
    if (s && a && i) {
      var p = 'link[rel="preload"][as="' + An(i) + '"]';
      i === "image" && u && u.imageSrcSet ? (p += '[imagesrcset="' + An(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (p += '[imagesizes="' + An(
        u.imageSizes
      ) + '"]')) : p += '[href="' + An(a) + '"]';
      var m = p;
      switch (i) {
        case "style":
          m = so(a);
          break;
        case "script":
          m = fo(a);
      }
      Nn.has(m) || (a = v(
        {
          rel: "preload",
          href: i === "image" && u && u.imageSrcSet ? void 0 : a,
          as: i
        },
        u
      ), Nn.set(m, a), s.querySelector(p) !== null || i === "style" && s.querySelector(Wu(m)) || i === "script" && s.querySelector(Zu(m)) || (i = s.createElement("link"), qt(i, "link", a), jt(i), s.head.appendChild(i)));
    }
  }
  function u3(a, i) {
    Pr.m(a, i);
    var u = co;
    if (u && a) {
      var s = i && typeof i.as == "string" ? i.as : "script", p = 'link[rel="modulepreload"][as="' + An(s) + '"][href="' + An(a) + '"]', m = p;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = fo(a);
      }
      if (!Nn.has(m) && (a = v({ rel: "modulepreload", href: a }, i), Nn.set(m, a), u.querySelector(p) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Zu(m)))
              return;
        }
        s = u.createElement("link"), qt(s, "link", a), jt(s), u.head.appendChild(s);
      }
    }
  }
  function l3(a, i, u) {
    Pr.S(a, i, u);
    var s = co;
    if (s && a) {
      var p = Pi(s).hoistableStyles, m = so(a);
      i = i || "default";
      var O = p.get(m);
      if (!O) {
        var D = { loading: 0, preload: null };
        if (O = s.querySelector(
          Wu(m)
        ))
          D.loading = 5;
        else {
          a = v(
            { rel: "stylesheet", href: a, "data-precedence": i },
            u
          ), (u = Nn.get(m)) && Yp(a, u);
          var q = O = s.createElement("link");
          jt(q), qt(q, "link", a), q._p = new Promise(function(Z, ae) {
            q.onload = Z, q.onerror = ae;
          }), q.addEventListener("load", function() {
            D.loading |= 1;
          }), q.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, _s(O, i, s);
        }
        O = {
          type: "stylesheet",
          instance: O,
          count: 1,
          state: D
        }, p.set(m, O);
      }
    }
  }
  function c3(a, i) {
    Pr.X(a, i);
    var u = co;
    if (u && a) {
      var s = Pi(u).hoistableScripts, p = fo(a), m = s.get(p);
      m || (m = u.querySelector(Zu(p)), m || (a = v({ src: a, async: !0 }, i), (i = Nn.get(p)) && Kp(a, i), m = u.createElement("script"), jt(m), qt(m, "link", a), u.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, s.set(p, m));
    }
  }
  function s3(a, i) {
    Pr.M(a, i);
    var u = co;
    if (u && a) {
      var s = Pi(u).hoistableScripts, p = fo(a), m = s.get(p);
      m || (m = u.querySelector(Zu(p)), m || (a = v({ src: a, async: !0, type: "module" }, i), (i = Nn.get(p)) && Kp(a, i), m = u.createElement("script"), jt(m), qt(m, "link", a), u.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, s.set(p, m));
    }
  }
  function vO(a, i, u, s) {
    var p = (p = fe.current) ? Ss(p) : null;
    if (!p) throw Error(r(446));
    switch (a) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (i = so(u.href), u = Pi(
          p
        ).hoistableStyles, s = u.get(i), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(i, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          a = so(u.href);
          var m = Pi(
            p
          ).hoistableStyles, O = m.get(a);
          if (O || (p = p.ownerDocument || p, O = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(a, O), (m = p.querySelector(
            Wu(a)
          )) && !m._p && (O.instance = m, O.state.loading = 5), Nn.has(a) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Nn.set(a, u), m || f3(
            p,
            a,
            u,
            O.state
          ))), i && s === null)
            throw Error(r(528, ""));
          return O;
        }
        if (i && s !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return i = u.async, u = u.src, typeof u == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = fo(u), u = Pi(
          p
        ).hoistableScripts, s = u.get(i), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(i, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, a));
    }
  }
  function so(a) {
    return 'href="' + An(a) + '"';
  }
  function Wu(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function yO(a) {
    return v({}, a, {
      "data-precedence": a.precedence,
      precedence: null
    });
  }
  function f3(a, i, u, s) {
    a.querySelector('link[rel="preload"][as="style"][' + i + "]") ? s.loading = 1 : (i = a.createElement("link"), s.preload = i, i.addEventListener("load", function() {
      return s.loading |= 1;
    }), i.addEventListener("error", function() {
      return s.loading |= 2;
    }), qt(i, "link", u), jt(i), a.head.appendChild(i));
  }
  function fo(a) {
    return '[src="' + An(a) + '"]';
  }
  function Zu(a) {
    return "script[async]" + a;
  }
  function mO(a, i, u) {
    if (i.count++, i.instance === null)
      switch (i.type) {
        case "style":
          var s = a.querySelector(
            'style[data-href~="' + An(u.href) + '"]'
          );
          if (s)
            return i.instance = s, jt(s), s;
          var p = v({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return s = (a.ownerDocument || a).createElement(
            "style"
          ), jt(s), qt(s, "style", p), _s(s, u.precedence, a), i.instance = s;
        case "stylesheet":
          p = so(u.href);
          var m = a.querySelector(
            Wu(p)
          );
          if (m)
            return i.state.loading |= 4, i.instance = m, jt(m), m;
          s = yO(u), (p = Nn.get(p)) && Yp(s, p), m = (a.ownerDocument || a).createElement("link"), jt(m);
          var O = m;
          return O._p = new Promise(function(D, q) {
            O.onload = D, O.onerror = q;
          }), qt(m, "link", s), i.state.loading |= 4, _s(m, u.precedence, a), i.instance = m;
        case "script":
          return m = fo(u.src), (p = a.querySelector(
            Zu(m)
          )) ? (i.instance = p, jt(p), p) : (s = u, (p = Nn.get(m)) && (s = v({}, u), Kp(s, p)), a = a.ownerDocument || a, p = a.createElement("script"), jt(p), qt(p, "link", s), a.head.appendChild(p), i.instance = p);
        case "void":
          return null;
        default:
          throw Error(r(443, i.type));
      }
    else
      i.type === "stylesheet" && (i.state.loading & 4) === 0 && (s = i.instance, i.state.loading |= 4, _s(s, u.precedence, a));
    return i.instance;
  }
  function _s(a, i, u) {
    for (var s = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), p = s.length ? s[s.length - 1] : null, m = p, O = 0; O < s.length; O++) {
      var D = s[O];
      if (D.dataset.precedence === i) m = D;
      else if (m !== p) break;
    }
    m ? m.parentNode.insertBefore(a, m.nextSibling) : (i = u.nodeType === 9 ? u.head : u, i.insertBefore(a, i.firstChild));
  }
  function Yp(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.title == null && (a.title = i.title);
  }
  function Kp(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.integrity == null && (a.integrity = i.integrity);
  }
  var Os = null;
  function gO(a, i, u) {
    if (Os === null) {
      var s = /* @__PURE__ */ new Map(), p = Os = /* @__PURE__ */ new Map();
      p.set(u, s);
    } else
      p = Os, s = p.get(u), s || (s = /* @__PURE__ */ new Map(), p.set(u, s));
    if (s.has(a)) return s;
    for (s.set(a, null), u = u.getElementsByTagName(a), p = 0; p < u.length; p++) {
      var m = u[p];
      if (!(m[hu] || m[Nt] || a === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var O = m.getAttribute(i) || "";
        O = a + O;
        var D = s.get(O);
        D ? D.push(m) : s.set(O, [m]);
      }
    }
    return s;
  }
  function bO(a, i, u) {
    a = a.ownerDocument || a, a.head.insertBefore(
      u,
      i === "title" ? a.querySelector("head > title") : null
    );
  }
  function d3(a, i, u) {
    if (u === 1 || i.itemProp != null) return !1;
    switch (a) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof i.precedence != "string" || typeof i.href != "string" || i.href === "")
          break;
        return !0;
      case "link":
        if (typeof i.rel != "string" || typeof i.href != "string" || i.href === "" || i.onLoad || i.onError)
          break;
        switch (i.rel) {
          case "stylesheet":
            return a = i.disabled, typeof i.precedence == "string" && a == null;
          default:
            return !0;
        }
      case "script":
        if (i.async && typeof i.async != "function" && typeof i.async != "symbol" && !i.onLoad && !i.onError && i.src && typeof i.src == "string")
          return !0;
    }
    return !1;
  }
  function xO(a) {
    return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
  }
  function h3(a, i, u, s) {
    if (u.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var p = so(s.href), m = i.querySelector(
          Wu(p)
        );
        if (m) {
          i = m._p, i !== null && typeof i == "object" && typeof i.then == "function" && (a.count++, a = ws.bind(a), i.then(a, a)), u.state.loading |= 4, u.instance = m, jt(m);
          return;
        }
        m = i.ownerDocument || i, s = yO(s), (p = Nn.get(p)) && Yp(s, p), m = m.createElement("link"), jt(m);
        var O = m;
        O._p = new Promise(function(D, q) {
          O.onload = D, O.onerror = q;
        }), qt(m, "link", s), u.instance = m;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(u, i), (i = u.state.preload) && (u.state.loading & 3) === 0 && (a.count++, u = ws.bind(a), i.addEventListener("load", u), i.addEventListener("error", u));
    }
  }
  var Xp = 0;
  function p3(a, i) {
    return a.stylesheets && a.count === 0 && Ts(a, a.stylesheets), 0 < a.count || 0 < a.imgCount ? function(u) {
      var s = setTimeout(function() {
        if (a.stylesheets && Ts(a, a.stylesheets), a.unsuspend) {
          var m = a.unsuspend;
          a.unsuspend = null, m();
        }
      }, 6e4 + i);
      0 < a.imgBytes && Xp === 0 && (Xp = 62500 * VR());
      var p = setTimeout(
        function() {
          if (a.waitingForImages = !1, a.count === 0 && (a.stylesheets && Ts(a, a.stylesheets), a.unsuspend)) {
            var m = a.unsuspend;
            a.unsuspend = null, m();
          }
        },
        (a.imgBytes > Xp ? 50 : 800) + i
      );
      return a.unsuspend = u, function() {
        a.unsuspend = null, clearTimeout(s), clearTimeout(p);
      };
    } : null;
  }
  function ws() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ts(this, this.stylesheets);
      else if (this.unsuspend) {
        var a = this.unsuspend;
        this.unsuspend = null, a();
      }
    }
  }
  var As = null;
  function Ts(a, i) {
    a.stylesheets = null, a.unsuspend !== null && (a.count++, As = /* @__PURE__ */ new Map(), i.forEach(v3, a), As = null, ws.call(a));
  }
  function v3(a, i) {
    if (!(i.state.loading & 4)) {
      var u = As.get(a);
      if (u) var s = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), As.set(a, u);
        for (var p = a.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < p.length; m++) {
          var O = p[m];
          (O.nodeName === "LINK" || O.getAttribute("media") !== "not all") && (u.set(O.dataset.precedence, O), s = O);
        }
        s && u.set(null, s);
      }
      p = i.instance, O = p.getAttribute("data-precedence"), m = u.get(O) || s, m === s && u.set(null, p), u.set(O, p), this.count++, s = ws.bind(this), p.addEventListener("load", s), p.addEventListener("error", s), m ? m.parentNode.insertBefore(p, m.nextSibling) : (a = a.nodeType === 9 ? a.head : a, a.insertBefore(p, a.firstChild)), i.state.loading |= 4;
    }
  }
  var Qu = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0
  };
  function y3(a, i, u, s, p, m, O, D, q) {
    this.tag = 1, this.containerInfo = a, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Id(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Id(0), this.hiddenUpdates = Id(null), this.identifierPrefix = s, this.onUncaughtError = p, this.onCaughtError = m, this.onRecoverableError = O, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = q, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function SO(a, i, u, s, p, m, O, D, q, Z, ae, ue) {
    return a = new y3(
      a,
      i,
      u,
      O,
      q,
      Z,
      ae,
      ue,
      D
    ), i = 1, m === !0 && (i |= 24), m = fn(3, null, null, i), a.current = m, m.stateNode = a, i = Th(), i.refCount++, a.pooledCache = i, i.refCount++, m.memoizedState = {
      element: s,
      isDehydrated: u,
      cache: i
    }, Ch(m), a;
  }
  function _O(a) {
    return a ? (a = Ii, a) : Ii;
  }
  function OO(a, i, u, s, p, m) {
    p = _O(p), s.context === null ? s.context = p : s.pendingContext = p, s = ia(i), s.payload = { element: u }, m = m === void 0 ? null : m, m !== null && (s.callback = m), u = oa(a, s, i), u !== null && (rn(u, a, i), Cu(u, a, i));
  }
  function wO(a, i) {
    if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
      var u = a.retryLane;
      a.retryLane = u !== 0 && u < i ? u : i;
    }
  }
  function Vp(a, i) {
    wO(a, i), (a = a.alternate) && wO(a, i);
  }
  function AO(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = Ua(a, 67108864);
      i !== null && rn(i, a, 67108864), Vp(a, 67108864);
    }
  }
  function TO(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = yn();
      i = Hd(i);
      var u = Ua(a, i);
      u !== null && rn(u, a, i), Vp(a, i);
    }
  }
  var Es = !0;
  function m3(a, i, u, s) {
    var p = $.T;
    $.T = null;
    var m = Y.p;
    try {
      Y.p = 2, Fp(a, i, u, s);
    } finally {
      Y.p = m, $.T = p;
    }
  }
  function g3(a, i, u, s) {
    var p = $.T;
    $.T = null;
    var m = Y.p;
    try {
      Y.p = 8, Fp(a, i, u, s);
    } finally {
      Y.p = m, $.T = p;
    }
  }
  function Fp(a, i, u, s) {
    if (Es) {
      var p = Wp(s);
      if (p === null)
        $p(
          a,
          i,
          s,
          js,
          u
        ), jO(a, s);
      else if (x3(
        p,
        a,
        i,
        u,
        s
      ))
        s.stopPropagation();
      else if (jO(a, s), i & 4 && -1 < b3.indexOf(a)) {
        for (; p !== null; ) {
          var m = Di(p);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var O = za(m.pendingLanes);
                  if (O !== 0) {
                    var D = m;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; O; ) {
                      var q = 1 << 31 - cn(O);
                      D.entanglements[1] |= q, O &= ~q;
                    }
                    tr(m), (Ue & 6) === 0 && (ss = Ut() + 500, Ku(0));
                  }
                }
                break;
              case 31:
              case 13:
                D = Ua(m, 2), D !== null && rn(D, m, 2), ds(), Vp(m, 2);
            }
          if (m = Wp(s), m === null && $p(
            a,
            i,
            s,
            js,
            u
          ), m === p) break;
          p = m;
        }
        p !== null && s.stopPropagation();
      } else
        $p(
          a,
          i,
          s,
          null,
          u
        );
    }
  }
  function Wp(a) {
    return a = Qd(a), Zp(a);
  }
  var js = null;
  function Zp(a) {
    if (js = null, a = Ci(a), a !== null) {
      var i = l(a);
      if (i === null) a = null;
      else {
        var u = i.tag;
        if (u === 13) {
          if (a = c(i), a !== null) return a;
          a = null;
        } else if (u === 31) {
          if (a = f(i), a !== null) return a;
          a = null;
        } else if (u === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          a = null;
        } else i !== a && (a = null);
      }
    }
    return js = a, null;
  }
  function EO(a) {
    switch (a) {
      case "beforetoggle":
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
      case "toggle":
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
      case "selectstart":
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yc()) {
          case $1:
            return 2;
          case z1:
            return 8;
          case mc:
          case iN:
            return 32;
          case q1:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qp = !1, ma = null, ga = null, ba = null, Ju = /* @__PURE__ */ new Map(), el = /* @__PURE__ */ new Map(), xa = [], b3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jO(a, i) {
    switch (a) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ba = null;
        break;
      case "pointerover":
      case "pointerout":
        Ju.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        el.delete(i.pointerId);
    }
  }
  function tl(a, i, u, s, p, m) {
    return a === null || a.nativeEvent !== m ? (a = {
      blockedOn: i,
      domEventName: u,
      eventSystemFlags: s,
      nativeEvent: m,
      targetContainers: [p]
    }, i !== null && (i = Di(i), i !== null && AO(i)), a) : (a.eventSystemFlags |= s, i = a.targetContainers, p !== null && i.indexOf(p) === -1 && i.push(p), a);
  }
  function x3(a, i, u, s, p) {
    switch (i) {
      case "focusin":
        return ma = tl(
          ma,
          a,
          i,
          u,
          s,
          p
        ), !0;
      case "dragenter":
        return ga = tl(
          ga,
          a,
          i,
          u,
          s,
          p
        ), !0;
      case "mouseover":
        return ba = tl(
          ba,
          a,
          i,
          u,
          s,
          p
        ), !0;
      case "pointerover":
        var m = p.pointerId;
        return Ju.set(
          m,
          tl(
            Ju.get(m) || null,
            a,
            i,
            u,
            s,
            p
          )
        ), !0;
      case "gotpointercapture":
        return m = p.pointerId, el.set(
          m,
          tl(
            el.get(m) || null,
            a,
            i,
            u,
            s,
            p
          )
        ), !0;
    }
    return !1;
  }
  function MO(a) {
    var i = Ci(a.target);
    if (i !== null) {
      var u = l(i);
      if (u !== null) {
        if (i = u.tag, i === 13) {
          if (i = c(u), i !== null) {
            a.blockedOn = i, H1(a.priority, function() {
              TO(u);
            });
            return;
          }
        } else if (i === 31) {
          if (i = f(u), i !== null) {
            a.blockedOn = i, H1(a.priority, function() {
              TO(u);
            });
            return;
          }
        } else if (i === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Ms(a) {
    if (a.blockedOn !== null) return !1;
    for (var i = a.targetContainers; 0 < i.length; ) {
      var u = Wp(a.nativeEvent);
      if (u === null) {
        u = a.nativeEvent;
        var s = new u.constructor(
          u.type,
          u
        );
        Zd = s, u.target.dispatchEvent(s), Zd = null;
      } else
        return i = Di(u), i !== null && AO(i), a.blockedOn = u, !1;
      i.shift();
    }
    return !0;
  }
  function CO(a, i, u) {
    Ms(a) && u.delete(i);
  }
  function S3() {
    Qp = !1, ma !== null && Ms(ma) && (ma = null), ga !== null && Ms(ga) && (ga = null), ba !== null && Ms(ba) && (ba = null), Ju.forEach(CO), el.forEach(CO);
  }
  function Cs(a, i) {
    a.blockedOn === i && (a.blockedOn = null, Qp || (Qp = !0, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      S3
    )));
  }
  var Ds = null;
  function DO(a) {
    Ds !== a && (Ds = a, e.unstable_scheduleCallback(
      e.unstable_NormalPriority,
      function() {
        Ds === a && (Ds = null);
        for (var i = 0; i < a.length; i += 3) {
          var u = a[i], s = a[i + 1], p = a[i + 2];
          if (typeof s != "function") {
            if (Zp(s || u) === null)
              continue;
            break;
          }
          var m = Di(u);
          m !== null && (a.splice(i, 3), i -= 3, Wh(
            m,
            {
              pending: !0,
              data: p,
              method: u.method,
              action: s
            },
            s,
            p
          ));
        }
      }
    ));
  }
  function ho(a) {
    function i(q) {
      return Cs(q, a);
    }
    ma !== null && Cs(ma, a), ga !== null && Cs(ga, a), ba !== null && Cs(ba, a), Ju.forEach(i), el.forEach(i);
    for (var u = 0; u < xa.length; u++) {
      var s = xa[u];
      s.blockedOn === a && (s.blockedOn = null);
    }
    for (; 0 < xa.length && (u = xa[0], u.blockedOn === null); )
      MO(u), u.blockedOn === null && xa.shift();
    if (u = (a.ownerDocument || a).$$reactFormReplay, u != null)
      for (s = 0; s < u.length; s += 3) {
        var p = u[s], m = u[s + 1], O = p[Zt] || null;
        if (typeof m == "function")
          O || DO(u);
        else if (O) {
          var D = null;
          if (m && m.hasAttribute("formAction")) {
            if (p = m, O = m[Zt] || null)
              D = O.formAction;
            else if (Zp(p) !== null) continue;
          } else D = O.action;
          typeof D == "function" ? u[s + 1] = D : (u.splice(s, 3), s -= 3), DO(u);
        }
      }
  }
  function PO() {
    function a(m) {
      m.canIntercept && m.info === "react-transition" && m.intercept({
        handler: function() {
          return new Promise(function(O) {
            return p = O;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function i() {
      p !== null && (p(), p = null), s || setTimeout(u, 20);
    }
    function u() {
      if (!s && !navigation.transition) {
        var m = navigation.currentEntry;
        m && m.url != null && navigation.navigate(m.url, {
          state: m.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var s = !1, p = null;
      return navigation.addEventListener("navigate", a), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(u, 100), function() {
        s = !0, navigation.removeEventListener("navigate", a), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), p !== null && (p(), p = null);
      };
    }
  }
  function Jp(a) {
    this._internalRoot = a;
  }
  Ps.prototype.render = Jp.prototype.render = function(a) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    var u = i.current, s = yn();
    OO(u, s, a, i, null, null);
  }, Ps.prototype.unmount = Jp.prototype.unmount = function() {
    var a = this._internalRoot;
    if (a !== null) {
      this._internalRoot = null;
      var i = a.containerInfo;
      OO(a.current, 2, null, a, null, null), ds(), i[Mi] = null;
    }
  };
  function Ps(a) {
    this._internalRoot = a;
  }
  Ps.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var i = I1();
      a = { blockedOn: null, target: a, priority: i };
      for (var u = 0; u < xa.length && i !== 0 && i < xa[u].priority; u++) ;
      xa.splice(u, 0, a), u === 0 && MO(a);
    }
  };
  var NO = t.version;
  if (NO !== "19.2.8")
    throw Error(
      r(
        527,
        NO,
        "19.2.8"
      )
    );
  Y.findDOMNode = function(a) {
    var i = a._reactInternals;
    if (i === void 0)
      throw typeof a.render == "function" ? Error(r(188)) : (a = Object.keys(a).join(","), Error(r(268, a)));
    return a = h(i), a = a !== null ? y(a) : null, a = a === null ? null : a.stateNode, a;
  };
  var _3 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: $,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ns.isDisabled && Ns.supportsFiber)
      try {
        su = Ns.inject(
          _3
        ), ln = Ns;
      } catch {
      }
  }
  return hl.createRoot = function(a, i) {
    if (!o(a)) throw Error(r(299));
    var u = !1, s = "", p = LS, m = US, O = IS;
    return i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (s = i.identifierPrefix), i.onUncaughtError !== void 0 && (p = i.onUncaughtError), i.onCaughtError !== void 0 && (m = i.onCaughtError), i.onRecoverableError !== void 0 && (O = i.onRecoverableError)), i = SO(
      a,
      1,
      !1,
      null,
      null,
      u,
      s,
      null,
      p,
      m,
      O,
      PO
    ), a[Mi] = i.current, Rp(a), new Jp(i);
  }, hl.hydrateRoot = function(a, i, u) {
    if (!o(a)) throw Error(r(299));
    var s = !1, p = "", m = LS, O = US, D = IS, q = null;
    return u != null && (u.unstable_strictMode === !0 && (s = !0), u.identifierPrefix !== void 0 && (p = u.identifierPrefix), u.onUncaughtError !== void 0 && (m = u.onUncaughtError), u.onCaughtError !== void 0 && (O = u.onCaughtError), u.onRecoverableError !== void 0 && (D = u.onRecoverableError), u.formState !== void 0 && (q = u.formState)), i = SO(
      a,
      1,
      !0,
      i,
      u ?? null,
      s,
      p,
      q,
      m,
      O,
      D,
      PO
    ), i.context = _O(null), u = i.current, s = yn(), s = Hd(s), p = ia(s), p.callback = null, oa(u, p, s), u = s, i.current.lanes = u, du(i, u), tr(i), a[Mi] = i.current, Rp(a), new Ps(i);
  }, hl.version = "19.2.8", hl;
}
var RM;
function kK() {
  if (RM) return ab.exports;
  RM = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), ab.exports = BK(), ab.exports;
}
var LK = kK();
const UK = `
  --nb-bg: #121a27;
  --nb-panel-2: #17202f;
  --nb-border: #223047;
  --nb-text: #e6edf7;
  --nb-muted: #8b9bb4;
  --nb-green: #34d399;
  --nb-red: #f87171;
  --nb-accent: #60a5fa;
  --nb-ink: #7ea8dc;
  --nb-warn: #fbbf24;
  --nb-radius: 12px;
`, IK = `
  --nb-bg: var(--ha-card-background, var(--card-background-color, #fff));
  --nb-panel-2: var(--secondary-background-color, #f0f0f0);
  --nb-border: var(--divider-color, #e0e0e0);
  --nb-text: var(--primary-text-color, #212121);
  --nb-muted: var(--secondary-text-color, #727272);
  --nb-green: var(--success-color, #34d399);
  --nb-red: var(--error-color, #f87171);
  --nb-accent: var(--primary-color, #60a5fa);
  --nb-ink: #4a7cc0;
  --nb-warn: var(--warning-color, #b45309);
  --nb-radius: var(--ha-card-border-radius, 12px);
`;
function HK(e) {
  return `
  :host { display: block; }
  * { box-sizing: border-box; }
  .card {
    ${e === "ha" ? IK : UK}
    position: relative;
    background: var(--nb-bg);
    border: 1px solid var(--nb-border);
    border-radius: var(--nb-radius);
    padding: 14px 16px;
    color: var(--nb-text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
  }
  .head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin-bottom: 10px;
  }
  .head h2 {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--nb-muted);
    flex: 1;
    /* Never wrap the title; the toggle group wraps below it instead. */
    white-space: nowrap;
  }
  .muted { color: var(--nb-muted); }
  /* Toggles + lock live in one right-aligned group; margin-left auto keeps it
     pinned to the right edge even when a narrow card wraps it onto its own
     line under the title. */
  .head-right {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-left: auto;
  }
  .controls { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  .seg {
    display: inline-flex;
    border: 1px solid var(--nb-border);
    border-radius: 8px;
    overflow: hidden;
  }
  .seg button {
    background: transparent;
    border: none;
    color: var(--nb-muted);
    padding: 4px 9px;
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
  }
  .seg button.active { background: var(--nb-panel-2); color: var(--nb-text); }
  .lock {
    background: transparent;
    border: 1px solid var(--nb-border);
    border-radius: 8px;
    color: var(--nb-muted);
    width: 34px;
    height: 30px;
    cursor: pointer;
    font-size: 13px;
    line-height: 1;
  }
  .lock:hover { color: var(--nb-text); border-color: var(--nb-muted); }
  .status { text-align: center; padding: 40px 0; color: var(--nb-muted); }
  .error-box {
    background: rgba(248, 113, 113, 0.12);
    border: 1px solid var(--nb-red);
    color: var(--nb-red);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 13px;
  }
  .reveal-note { font-size: 11px; color: var(--nb-muted); }

  /* stat card */
  .stat-value { font-size: 28px; font-weight: 700; letter-spacing: -0.01em; }
  .stat-delta { font-size: 13px; margin-top: 2px; }
  .up { color: var(--nb-green); }
  .down { color: var(--nb-red); }

  /* accounts card */
  table { width: 100%; border-collapse: collapse; }
  td, th { padding: 6px 4px; text-align: left; font-size: 13px; }
  td.num { text-align: right; font-variant-numeric: tabular-nums; }
  tr + tr td { border-top: 1px solid var(--nb-border); }
  td.row-delta { font-size: 12px; width: 1%; white-space: nowrap; padding-left: 10px; }
  .kind-row td {
    color: var(--nb-muted);
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.05em;
    padding-top: 12px;
  }
  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 7px;
    background: var(--nb-green);
  }
  .dot.stale { background: #fbbf24; }

  /* pin pad overlay */
  .pin-wrap {
    position: absolute;
    top: 48px;
    right: 12px;
    z-index: 20;
  }
  .pinpad {
    background: var(--nb-bg);
    border: 1px solid color-mix(in srgb, var(--nb-green) 45%, var(--nb-border));
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45),
      0 0 0 1px color-mix(in srgb, var(--nb-green) 18%, transparent),
      0 0 16px color-mix(in srgb, var(--nb-green) 25%, transparent);
  }
  .pin-label {
    text-align: center;
    color: var(--nb-muted);
    font-size: 12px;
    margin-bottom: 10px;
    white-space: nowrap;
  }
  .pin-dots { display: flex; justify-content: center; gap: 10px; margin-bottom: 12px; }
  .pin-dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--nb-muted); }
  .pin-dot.filled { background: var(--nb-text); border-color: var(--nb-text); }
  .pin-grid { display: grid; grid-template-columns: repeat(3, 48px); gap: 8px; }
  .pin-grid button {
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--nb-border);
    background: var(--nb-panel-2);
    color: var(--nb-text);
    font-size: 17px;
    cursor: pointer;
    font-family: inherit;
  }
  .pin-grid button:hover { border-color: var(--nb-muted); }
  .pin-grid button:disabled { opacity: 0.5; cursor: default; }
  .pw-err { display: block; margin: 10px 0 0; text-align: center; font-size: 12px; color: var(--nb-red); }
  .pin-footer {
    display: block;
    width: 100%;
    margin-top: 10px;
    background: transparent;
    border: none;
    color: var(--nb-muted);
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    font-family: inherit;
  }
  .pin-footer:hover { color: var(--nb-text); }

  /* ---- spending cards (styles mirror the app's globals.css spend-* set,
     retargeted onto the --nb tokens) ---- */
  .spend-month-label { min-width: 120px; cursor: default; }
  /* Stat strip (mirrors the web's spend-headstrip merge): inline
     label/value pairs instead of tiles. */
  .spend-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 28px;
    margin-bottom: 14px;
  }
  .spend-stat { display: flex; align-items: baseline; gap: 9px; }
  .spend-stat-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--nb-muted);
  }
  .spend-stat-value { font-size: 20px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .spend-stat-delta { font-size: 11px; }

  .spend-themes-split { display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap; }
  .spend-donut { width: 170px; flex: none; margin-top: 6px; }
  .spend-themes-bars { flex: 1; min-width: 0; }
  .spend-theme-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 7px;
    vertical-align: 1px;
  }
  /* Theme breakdown: one full-width row per theme, thin bar, direct labels. */
  .spend-row {
    display: grid;
    grid-template-columns: 100px 1fr 84px 36px;
    gap: 10px;
    align-items: center;
    width: 100%;
    padding: 7px 8px;
    background: none;
    border: none;
    border-radius: 8px;
    color: var(--nb-text);
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
    text-align: left;
  }
  .spend-row:hover, .spend-row.open { background: var(--nb-panel-2); }
  .spend-row-label { text-transform: capitalize; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .spend-row-bar { height: 10px; border-radius: 4px; overflow: hidden; }
  .spend-row-fill {
    display: block;
    height: 100%;
    border-radius: 4px;
    background: color-mix(in srgb, var(--bar-color, var(--nb-accent)) 30%, transparent);
    border-right: 5px solid var(--bar-color, var(--nb-accent));
    min-width: 7px;
  }
  .spend-row-amount { text-align: right; font-variant-numeric: tabular-nums; }
  .spend-row-count { text-align: right; font-size: 11px; }
  .spend-txns { padding: 4px 8px 10px 24px; }
  .spend-txn {
    display: grid;
    grid-template-columns: 52px 18px 1fr 84px;
    gap: 10px;
    align-items: center;
    padding: 4px 0;
    font-size: 12px;
    border-bottom: 1px solid color-mix(in srgb, var(--nb-border) 50%, transparent);
  }
  .spend-txn:last-child { border-bottom: none; }
  .spend-txn-desc { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .spend-txn-amount { text-align: right; font-variant-numeric: tabular-nums; }
  .spend-txn-logo {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex: none;
    object-fit: cover;
    background: var(--nb-panel-2);
  }
  /* Neutral chip; the thin theme-colored ring carries the color system. */
  .spend-txn-initial {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--nb-panel-2);
    border: 2px solid var(--nb-border);
    color: var(--nb-text);
    font-size: 10px;
    font-weight: 600;
  }

  /* bills calendar + card cycle */
  .spend-cal-svg { width: 100%; height: auto; display: block; }
  .spend-cal-mark { transition: opacity 120ms ease; }
  .spend-strip { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .spend-strip-item {
    background: var(--nb-panel-2);
    border: 1px solid var(--nb-border);
    border-radius: 999px;
    padding: 4px 12px;
    font-size: 12px;
  }
  .spend-strip-item.lapsed { opacity: 0.55; }
  .spend-card-row { margin-bottom: 12px; }
  .spend-card-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;
    font-size: 13px;
    margin-bottom: 4px;
  }
  .spend-card-chips { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
  .spend-card-chip {
    background: none;
    border: 1px solid var(--nb-border);
    border-radius: 999px;
    color: var(--nb-muted);
    font-size: 12px;
    padding: 2px 10px;
    cursor: pointer;
    font-family: inherit;
    opacity: 0.55;
  }
  .spend-card-chip.on {
    color: inherit;
    border-color: color-mix(in srgb, var(--nb-accent) 50%, transparent);
    opacity: 1;
  }
  /* Hover bubble: passive readout that follows the cursor. */
  .spend-hoverbubble {
    position: fixed;
    z-index: 60;
    width: 220px;
    background: var(--nb-panel-2);
    border: 1px solid var(--nb-border);
    border-radius: 10px;
    padding: 10px 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
    font-size: 13px;
    pointer-events: none;
  }
  .spend-bubble-title { font-weight: 600; font-size: 14px; }
  .spend-bubble-rows { margin: 8px 0 2px; }
  .spend-bubble-row { display: flex; justify-content: space-between; gap: 12px; padding: 2px 0; }
  .spend-hoverbubble-note { margin-top: 6px; font-size: 11px; line-height: 1.35; }
  `;
}
function wi(e) {
  class t extends HTMLElement {
    constructor() {
      super(...arguments);
      Nr(this, "_root");
      Nr(this, "_mount");
      Nr(this, "_style");
      Nr(this, "_hass");
      Nr(this, "_config");
    }
    setConfig(c) {
      this._config = { ...e.defaults, ...c }, this._render();
    }
    set hass(c) {
      const f = !this._hass;
      this._hass = c, f && this._render();
    }
    connectedCallback() {
      this._render();
    }
    disconnectedCallback() {
      setTimeout(() => {
        !this.isConnected && this._root && (this._root.unmount(), this._root = void 0, this._mount = void 0);
      }, 100);
    }
    getCardSize() {
      return e.size;
    }
    static getConfigElement() {
      return document.createElement(`${e.tag}-editor`);
    }
    static getStubConfig() {
      return { ...e.stub };
    }
    _render() {
      if (!this._config || !this._hass || !this.isConnected) return;
      this.shadowRoot || this.attachShadow({ mode: "open" });
      const c = this.shadowRoot;
      this._style || (this._style = document.createElement("style"), c.appendChild(this._style)), this._style.textContent = HK(this._config.theme ?? "netwrth"), this._mount || (this._mount = document.createElement("div"), c.appendChild(this._mount), this._root = LK.createRoot(this._mount));
      const f = e.component;
      this._root.render(
        /* @__PURE__ */ z.jsx(f, { hass: this._hass, config: this._config }, JSON.stringify(this._config))
      );
    }
  }
  class n extends HTMLElement {
    constructor() {
      super(...arguments);
      Nr(this, "_hass");
      Nr(this, "_config");
      Nr(this, "_entries");
    }
    set hass(c) {
      this._hass = c, this._entries || $3(c).then((f) => {
        this._entries = f.map((d) => ({ value: d.entry_id, label: d.title })), this._render();
      }).catch(() => {
        this._entries = [], this._render();
      }), this._render();
    }
    setConfig(c) {
      this._config = c, this._render();
    }
    _schema() {
      return e.schema.map(
        (c) => c.name === "entry" ? {
          ...c,
          selector: {
            select: { options: this._entries ?? [], mode: "dropdown" }
          }
        } : c
      );
    }
    _render() {
      if (!this._hass || !this._config) return;
      let c = this.querySelector("ha-form");
      c || (c = document.createElement("ha-form"), c.addEventListener("value-changed", (f) => {
        const d = { ...f.detail.value };
        this.dispatchEvent(
          new CustomEvent("config-changed", {
            detail: { config: d },
            bubbles: !0,
            composed: !0
          })
        );
      }), this.appendChild(c)), c.hass = this._hass, c.data = this._config, c.schema = this._schema(), c.computeLabel = (f) => f.label ?? f.name;
    }
  }
  customElements.define(e.tag, t), customElements.define(`${e.tag}-editor`, n);
  const r = window;
  r.customCards = r.customCards || [], r.customCards.push({
    type: e.tag,
    name: e.name,
    description: e.description,
    preview: !1,
    documentationURL: "https://github.com/eduser25/netwrth-hacs"
  });
}
const Ai = {
  name: "theme",
  label: "Theme",
  selector: {
    select: {
      mode: "dropdown",
      options: [
        { value: "netwrth", label: "netwrth (dark)" },
        { value: "ha", label: "Follow Home Assistant theme" }
      ]
    }
  }
}, Ti = { name: "entry", label: "netwrth connection", selector: {} }, Ei = { name: "title", label: "Title", selector: { text: {} } }, R1 = {
  name: "view",
  label: "View",
  selector: {
    select: {
      mode: "dropdown",
      options: [
        { value: "daily", label: "Day-to-day (cash + credit)" },
        { value: "invest", label: "Investments" },
        { value: "all", label: "Everything" }
      ]
    }
  }
}, Ld = {
  name: "range",
  label: "Default range",
  selector: {
    select: {
      mode: "dropdown",
      options: ["1d", "1w", "1m", "3m", "6m", "1y", "all"].map((e) => ({ value: e, label: e }))
    }
  }
}, rN = {
  name: "show_mode_selector",
  label: "Show mode selector",
  selector: { boolean: {} }
}, Ud = {
  name: "show_range_selector",
  label: "Show range selector",
  selector: { boolean: {} }
}, ji = {
  name: "auto_conceal_minutes",
  label: "Auto-conceal after reveal (minutes, 0 = stay revealed)",
  selector: { number: { min: 0, max: 43200, mode: "box" } }
}, aN = {
  name: "compact",
  label: "Short axis amounts ($1.2M instead of $1,200,000)",
  selector: { boolean: {} }
};
wi({
  tag: "netwrth-worth-card",
  name: "netwrth worth chart",
  description: "Your total over time — the netwrth dashboard chart.",
  component: nN,
  schema: [
    Ei,
    Ti,
    R1,
    {
      name: "mode",
      label: "Chart mode",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: "total", label: "Total" },
            { value: "stacked", label: "What moved (stacked account changes)" },
            { value: "category", label: "Retirement vs taxable vs debt" },
            { value: "flow", label: "Net flow bars" }
          ]
        }
      }
    },
    Ld,
    rN,
    Ud,
    aN,
    ji,
    Ai
  ],
  stub: { view: "all", range: "6m" },
  size: 6
});
wi({
  tag: "netwrth-flow-card",
  name: "netwrth net flow",
  description: "Money kept vs burned per day/week/month (day-to-day accounts).",
  component: nN,
  defaults: { view: "daily", mode: "flow" },
  schema: [
    Ei,
    Ti,
    Ld,
    rN,
    Ud,
    aN,
    ji,
    Ai
  ],
  stub: { range: "3m" },
  size: 6
});
wi({
  tag: "netwrth-stat-card",
  name: "netwrth stat",
  description: "One big number with its change over a window.",
  component: i$,
  schema: [Ei, Ti, R1, Ld, Ud, ji, Ai],
  stub: { view: "all", range: "1m" },
  size: 2
});
wi({
  tag: "netwrth-accounts-card",
  name: "netwrth accounts",
  description: "Accounts grouped by kind with balances and sync freshness.",
  component: G3,
  schema: [
    Ei,
    Ti,
    R1,
    Ld,
    Ud,
    {
      name: "accounts",
      label: "Only these accounts (name match, empty = all)",
      selector: { text: { multiple: !0 } }
    },
    ji,
    Ai
  ],
  stub: { view: "all", range: "1m" },
  size: 4
});
wi({
  tag: "netwrth-spending-card",
  name: "netwrth spending",
  description: "Where the month's money went: totals, share donut, and theme breakdown.",
  component: n$,
  schema: [
    Ei,
    Ti,
    {
      name: "show_stats",
      label: "Show Spent / Income / Recurring tiles",
      selector: { boolean: {} }
    },
    {
      name: "show_donut",
      label: "Show share-of-spending donut",
      selector: { boolean: {} }
    },
    ji,
    Ai
  ],
  stub: {},
  size: 6
});
wi({
  tag: "netwrth-bills-card",
  name: "netwrth recurring bills",
  description: "Calendar of the month's bills and income — charged, expected, and overdue.",
  component: Z3,
  schema: [Ei, Ti, ji, Ai],
  stub: {},
  size: 5
});
wi({
  tag: "netwrth-cardcycle-card",
  name: "netwrth card credit",
  description: "Per credit card: balance through the month with payment markers.",
  component: J3,
  schema: [Ei, Ti, ji, Ai],
  stub: {},
  size: 4
});
console.info("%c netwrth cards %c loaded", "background:#60a5fa;color:#0b0f17;border-radius:3px 0 0 3px;padding:1px 4px", "background:#17202f;color:#e6edf7;border-radius:0 3px 3px 0;padding:1px 4px");
