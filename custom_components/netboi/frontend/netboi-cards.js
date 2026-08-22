var zR = Object.defineProperty;
var $R = (t, e, n) => e in t ? zR(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Or = (t, e, n) => $R(t, typeof e != "symbol" ? e + "" : e, n);
var ff = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wv = { exports: {} }, qu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uO;
function BR() {
  if (uO) return qu;
  uO = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, o, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      l = {};
      for (var s in o)
        s !== "key" && (l[s] = o[s]);
    } else l = o;
    return o = l.ref, {
      $$typeof: t,
      type: r,
      key: c,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return qu.Fragment = e, qu.jsx = n, qu.jsxs = n, qu;
}
var lO;
function LR() {
  return lO || (lO = 1, wv.exports = BR()), wv.exports;
}
var it = LR(), Tv = { exports: {} }, _t = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cO;
function kR() {
  if (cO) return _t;
  cO = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), g = Symbol.iterator;
  function b(P) {
    return P === null || typeof P != "object" ? null : (P = g && P[g] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var O = {
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
  function T(P, U, et) {
    this.props = P, this.context = U, this.refs = x, this.updater = et || O;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(P, U) {
    if (typeof P != "object" && typeof P != "function" && P != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, P, U, "setState");
  }, T.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function w() {
  }
  w.prototype = T.prototype;
  function M(P, U, et) {
    this.props = P, this.context = U, this.refs = x, this.updater = et || O;
  }
  var j = M.prototype = new w();
  j.constructor = M, S(j, T.prototype), j.isPureReactComponent = !0;
  var A = Array.isArray;
  function E() {
  }
  var D = { H: null, A: null, T: null, S: null }, R = Object.prototype.hasOwnProperty;
  function z(P, U, et) {
    var ft = et.ref;
    return {
      $$typeof: t,
      type: P,
      key: U,
      ref: ft !== void 0 ? ft : null,
      props: et
    };
  }
  function F(P, U) {
    return z(P.type, U, P.props);
  }
  function k(P) {
    return typeof P == "object" && P !== null && P.$$typeof === t;
  }
  function $(P) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(et) {
      return U[et];
    });
  }
  var K = /\/+/g;
  function Z(P, U) {
    return typeof P == "object" && P !== null && P.key != null ? $("" + P.key) : U.toString(36);
  }
  function V(P) {
    switch (P.status) {
      case "fulfilled":
        return P.value;
      case "rejected":
        throw P.reason;
      default:
        switch (typeof P.status == "string" ? P.then(E, E) : (P.status = "pending", P.then(
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
  function N(P, U, et, ft, vt) {
    var mt = typeof P;
    (mt === "undefined" || mt === "boolean") && (P = null);
    var jt = !1;
    if (P === null) jt = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          jt = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case t:
            case e:
              jt = !0;
              break;
            case y:
              return jt = P._init, N(
                jt(P._payload),
                U,
                et,
                ft,
                vt
              );
          }
      }
    if (jt)
      return vt = vt(P), jt = ft === "" ? "." + Z(P, 0) : ft, A(vt) ? (et = "", jt != null && (et = jt.replace(K, "$&/") + "/"), N(vt, U, et, "", function(xt) {
        return xt;
      })) : vt != null && (k(vt) && (vt = F(
        vt,
        et + (vt.key == null || P && P.key === vt.key ? "" : ("" + vt.key).replace(
          K,
          "$&/"
        ) + "/") + jt
      )), U.push(vt)), 1;
    jt = 0;
    var kt = ft === "" ? "." : ft + ":";
    if (A(P))
      for (var ct = 0; ct < P.length; ct++)
        ft = P[ct], mt = kt + Z(ft, ct), jt += N(
          ft,
          U,
          et,
          mt,
          vt
        );
    else if (ct = b(P), typeof ct == "function")
      for (P = ct.call(P), ct = 0; !(ft = P.next()).done; )
        ft = ft.value, mt = kt + Z(ft, ct++), jt += N(
          ft,
          U,
          et,
          mt,
          vt
        );
    else if (mt === "object") {
      if (typeof P.then == "function")
        return N(
          V(P),
          U,
          et,
          ft,
          vt
        );
      throw U = String(P), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return jt;
  }
  function I(P, U, et) {
    if (P == null) return P;
    var ft = [], vt = 0;
    return N(P, ft, "", "", function(mt) {
      return U.call(et, mt, vt++);
    }), ft;
  }
  function W(P) {
    if (P._status === -1) {
      var U = P._result;
      U = U(), U.then(
        function(et) {
          (P._status === 0 || P._status === -1) && (P._status = 1, P._result = et);
        },
        function(et) {
          (P._status === 0 || P._status === -1) && (P._status = 2, P._result = et);
        }
      ), P._status === -1 && (P._status = 0, P._result = U);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ot = typeof reportError == "function" ? reportError : function(P) {
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
  }, lt = {
    map: I,
    forEach: function(P, U, et) {
      I(
        P,
        function() {
          U.apply(this, arguments);
        },
        et
      );
    },
    count: function(P) {
      var U = 0;
      return I(P, function() {
        U++;
      }), U;
    },
    toArray: function(P) {
      return I(P, function(U) {
        return U;
      }) || [];
    },
    only: function(P) {
      if (!k(P))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return P;
    }
  };
  return _t.Activity = p, _t.Children = lt, _t.Component = T, _t.Fragment = n, _t.Profiler = o, _t.PureComponent = M, _t.StrictMode = r, _t.Suspense = h, _t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, _t.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(P) {
      return D.H.useMemoCache(P);
    }
  }, _t.cache = function(P) {
    return function() {
      return P.apply(null, arguments);
    };
  }, _t.cacheSignal = function() {
    return null;
  }, _t.cloneElement = function(P, U, et) {
    if (P == null)
      throw Error(
        "The argument must be a React element, but you passed " + P + "."
      );
    var ft = S({}, P.props), vt = P.key;
    if (U != null)
      for (mt in U.key !== void 0 && (vt = "" + U.key), U)
        !R.call(U, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && U.ref === void 0 || (ft[mt] = U[mt]);
    var mt = arguments.length - 2;
    if (mt === 1) ft.children = et;
    else if (1 < mt) {
      for (var jt = Array(mt), kt = 0; kt < mt; kt++)
        jt[kt] = arguments[kt + 2];
      ft.children = jt;
    }
    return z(P.type, vt, ft);
  }, _t.createContext = function(P) {
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
  }, _t.createElement = function(P, U, et) {
    var ft, vt = {}, mt = null;
    if (U != null)
      for (ft in U.key !== void 0 && (mt = "" + U.key), U)
        R.call(U, ft) && ft !== "key" && ft !== "__self" && ft !== "__source" && (vt[ft] = U[ft]);
    var jt = arguments.length - 2;
    if (jt === 1) vt.children = et;
    else if (1 < jt) {
      for (var kt = Array(jt), ct = 0; ct < jt; ct++)
        kt[ct] = arguments[ct + 2];
      vt.children = kt;
    }
    if (P && P.defaultProps)
      for (ft in jt = P.defaultProps, jt)
        vt[ft] === void 0 && (vt[ft] = jt[ft]);
    return z(P, mt, vt);
  }, _t.createRef = function() {
    return { current: null };
  }, _t.forwardRef = function(P) {
    return { $$typeof: s, render: P };
  }, _t.isValidElement = k, _t.lazy = function(P) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: P },
      _init: W
    };
  }, _t.memo = function(P, U) {
    return {
      $$typeof: d,
      type: P,
      compare: U === void 0 ? null : U
    };
  }, _t.startTransition = function(P) {
    var U = D.T, et = {};
    D.T = et;
    try {
      var ft = P(), vt = D.S;
      vt !== null && vt(et, ft), typeof ft == "object" && ft !== null && typeof ft.then == "function" && ft.then(E, ot);
    } catch (mt) {
      ot(mt);
    } finally {
      U !== null && et.types !== null && (U.types = et.types), D.T = U;
    }
  }, _t.unstable_useCacheRefresh = function() {
    return D.H.useCacheRefresh();
  }, _t.use = function(P) {
    return D.H.use(P);
  }, _t.useActionState = function(P, U, et) {
    return D.H.useActionState(P, U, et);
  }, _t.useCallback = function(P, U) {
    return D.H.useCallback(P, U);
  }, _t.useContext = function(P) {
    return D.H.useContext(P);
  }, _t.useDebugValue = function() {
  }, _t.useDeferredValue = function(P, U) {
    return D.H.useDeferredValue(P, U);
  }, _t.useEffect = function(P, U) {
    return D.H.useEffect(P, U);
  }, _t.useEffectEvent = function(P) {
    return D.H.useEffectEvent(P);
  }, _t.useId = function() {
    return D.H.useId();
  }, _t.useImperativeHandle = function(P, U, et) {
    return D.H.useImperativeHandle(P, U, et);
  }, _t.useInsertionEffect = function(P, U) {
    return D.H.useInsertionEffect(P, U);
  }, _t.useLayoutEffect = function(P, U) {
    return D.H.useLayoutEffect(P, U);
  }, _t.useMemo = function(P, U) {
    return D.H.useMemo(P, U);
  }, _t.useOptimistic = function(P, U) {
    return D.H.useOptimistic(P, U);
  }, _t.useReducer = function(P, U, et) {
    return D.H.useReducer(P, U, et);
  }, _t.useRef = function(P) {
    return D.H.useRef(P);
  }, _t.useState = function(P) {
    return D.H.useState(P);
  }, _t.useSyncExternalStore = function(P, U, et) {
    return D.H.useSyncExternalStore(
      P,
      U,
      et
    );
  }, _t.useTransition = function() {
    return D.H.useTransition();
  }, _t.version = "19.2.8", _t;
}
var fO;
function Zb() {
  return fO || (fO = 1, Tv.exports = kR()), Tv.exports;
}
var rt = Zb();
const B = /* @__PURE__ */ Qt(rt), nj = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
}), UR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), HR = "•••••";
function Zu(t, e = !1) {
  return (e ? UR : nj).format(t);
}
const IR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1
});
function GR(t) {
  return IR.format(t);
}
function rj(t) {
  return `${t >= 0 ? "+" : ""}${nj.format(t)}`;
}
function nl(t) {
  return isFinite(t) ? `${t >= 0 ? "+" : ""}${(t * 100).toFixed(1)}%` : "–";
}
function Vi(t, e = !1) {
  return new Date(t).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...e ? { hour: "numeric", minute: "2-digit" } : {}
  });
}
const Qb = ["1d", "1w", "1m", "3m", "6m", "1y", "all"], uo = [
  {
    key: "daily",
    label: "Day-to-day",
    flow: !0,
    pick: (t) => t.kind === "cash" || t.kind === "credit",
    modes: ["flow", "total", "stacked"],
    defaultMode: "flow"
  },
  {
    key: "invest",
    label: "Investments",
    flow: !1,
    pick: (t) => t.kind === "investment",
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
], YR = "netboi_censor_changed";
function XR(t, e) {
  return t.connection.sendMessagePromise({
    type: "netboi/overview",
    ...e ? { entry_id: e } : {}
  });
}
function KR(t, e, n) {
  return t.connection.sendMessagePromise({
    type: "netboi/series",
    range: n,
    ...e ? { entry_id: e } : {}
  });
}
function VR(t) {
  return t.connection.sendMessagePromise({ type: "netboi/entries" });
}
function FR(t, e, n, r) {
  return t.connection.sendMessagePromise({
    type: "netboi/reveal",
    code: n,
    ...r !== void 0 ? { ttl_minutes: r } : {},
    ...e ? { entry_id: e } : {}
  });
}
function ZR(t, e) {
  return t.connection.sendMessagePromise({
    type: "netboi/conceal",
    ...e ? { entry_id: e } : {}
  });
}
function QR({
  onSubmit: t,
  error: e,
  label: n,
  footer: r
}) {
  const [o, l] = rt.useState(""), [c, s] = rt.useState(!1), h = async (d) => {
    if (c || o.length >= 4) return;
    const y = o + d;
    if (l(y), y.length === 4) {
      s(!0);
      const p = await t(y);
      s(!1), p || l("");
    }
  };
  return /* @__PURE__ */ it.jsxs("div", { className: "pinpad", children: [
    n && /* @__PURE__ */ it.jsx("div", { className: "pin-label", children: n }),
    /* @__PURE__ */ it.jsx("div", { className: "pin-dots", children: [0, 1, 2, 3].map((d) => /* @__PURE__ */ it.jsx("span", { className: `pin-dot ${d < o.length ? "filled" : ""}` }, d)) }),
    /* @__PURE__ */ it.jsxs("div", { className: "pin-grid", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => /* @__PURE__ */ it.jsx("button", { onClick: () => h(d), disabled: c, children: d }, d)),
      /* @__PURE__ */ it.jsx("button", { onClick: () => l(""), disabled: c, children: "C" }),
      /* @__PURE__ */ it.jsx("button", { onClick: () => h("0"), disabled: c, children: "0" }),
      /* @__PURE__ */ it.jsx("button", { onClick: () => l(o.slice(0, -1)), disabled: c, children: "⌫" })
    ] }),
    e && /* @__PURE__ */ it.jsx("div", { className: "pw-err", children: e }),
    r
  ] });
}
const WR = 6e4;
function Wb(t, e, n) {
  const [r, o] = rt.useState(null), [l, c] = rt.useState(null), [s, h] = rt.useState(!0), [d, y] = rt.useState(null), [p, g] = rt.useState(0), b = rt.useCallback(() => g((T) => T + 1), []), O = rt.useCallback(() => {
    c(null), o(
      (T) => T && { ...T, me: { ...T.me, censored: !0, revealed: !1, reveal_expires: null } }
    ), h(!0), b();
  }, [b]), S = r && !r.me.censored && r.me.reveal_expires ? new Date(r.me.reveal_expires).getTime() : null;
  rt.useEffect(() => {
    let T = !0;
    Promise.all([XR(t, e), KR(t, e, n)]).then(([M, j]) => {
      T && (o(M), c(j.series), h(j.censored), y(null));
    }).catch((M) => {
      T && y((M == null ? void 0 : M.message) ?? String(M));
    });
    const w = setInterval(b, WR);
    return () => {
      T = !1, clearInterval(w);
    };
  }, [t, e, n, p, b]);
  const x = rt.useRef(null);
  return x.current = (r == null ? void 0 : r.entry_id) ?? null, rt.useEffect(() => {
    let T = null, w = !0;
    return t.connection.subscribeEvents((M) => {
      const j = x.current;
      (j == null || M.data.entry_id === j) && b();
    }, YR).then((M) => {
      w ? T = M : M();
    }).catch(() => {
    }), () => {
      w = !1, T == null || T();
    };
  }, [t.connection, b]), rt.useEffect(() => {
    if (S == null) return;
    const T = S - Date.now() + 1e3;
    if (T <= 0) {
      O();
      return;
    }
    const w = setTimeout(O, T);
    return () => clearTimeout(w);
  }, [S, O]), rt.useEffect(() => {
    const T = () => {
      document.visibilityState === "visible" && (S != null && Date.now() >= S ? O() : b());
    };
    return document.addEventListener("visibilitychange", T), window.addEventListener("pageshow", T), () => {
      document.removeEventListener("visibilitychange", T), window.removeEventListener("pageshow", T);
    };
  }, [S, O, b]), { overview: r, series: l, masked: s, error: d, refresh: b };
}
const JR = ({ open: t }) => /* @__PURE__ */ it.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", children: [
  /* @__PURE__ */ it.jsx("rect", { x: "4", y: "11", width: "16", height: "10", rx: "2" }),
  t ? /* @__PURE__ */ it.jsx("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" }) : /* @__PURE__ */ it.jsx("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] });
function Jb({
  hass: t,
  entry: e,
  overview: n,
  autoConcealMinutes: r,
  onChanged: o
}) {
  const [l, c] = rt.useState(!1), [s, h] = rt.useState(null), d = n.me;
  if (!d.can_reveal) return null;
  const y = r ?? n.default_reveal_ttl_minutes, p = async (b) => {
    const O = await FR(t, e, b, y).catch((S) => ({
      ok: !1,
      error: (S == null ? void 0 : S.message) ?? String(S)
    }));
    return O.ok ? (h(null), c(!1), o(), !0) : (h(O.error ?? "rejected"), !1);
  }, g = async () => {
    if (!d.censored) {
      await ZR(t, e).catch(() => {
      }), o();
      return;
    }
    if (!d.code_required) {
      await p("");
      return;
    }
    h(null), c((b) => !b);
  };
  return /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
    /* @__PURE__ */ it.jsx(
      "button",
      {
        className: "lock",
        title: d.censored ? "Reveal amounts" : "Conceal amounts",
        onClick: g,
        children: /* @__PURE__ */ it.jsx(JR, { open: !d.censored })
      }
    ),
    l && d.censored && /* @__PURE__ */ it.jsx("div", { className: "pin-wrap", children: /* @__PURE__ */ it.jsx(
      QR,
      {
        onSubmit: p,
        error: s,
        label: y > 0 ? `Reveal for ${y} min` : "Reveal until concealed",
        footer: /* @__PURE__ */ it.jsx("button", { className: "pin-footer", onClick: () => c(!1), children: "Cancel" })
      }
    ) })
  ] });
}
function jf({
  options: t,
  value: e,
  onChange: n
}) {
  return /* @__PURE__ */ it.jsx("span", { className: "seg", children: t.map((r) => /* @__PURE__ */ it.jsx("button", { className: r === e ? "active" : "", onClick: () => n(r), children: r }, r)) });
}
function t3(t) {
  return t ? Date.now() - new Date(t).getTime() > 48 * 3600 * 1e3 : !0;
}
function t0(t) {
  return rt.useMemo(
    () => t ? t.accounts.filter((e) => !e.hidden) : [],
    [t]
  );
}
const e3 = ["cash", "investment", "credit", "loan", "other"];
function n3(t, e) {
  if (t.balance == null) return "–";
  const n = parseFloat(t.balance);
  return e ? `${n.toFixed(1)}%` : Zu(n, !0);
}
function r3({
  hass: t,
  config: e
}) {
  const n = uo.find((O) => O.key === (e.view ?? "all")) ?? uo[2], [r, o] = rt.useState(e.range ?? "1m"), { overview: l, series: c, masked: s, error: h, refresh: d } = Wb(t, e.entry, r), y = t0(l), p = rt.useMemo(() => y.filter(n.pick), [y, n]), g = rt.useMemo(() => {
    const O = /* @__PURE__ */ new Map();
    if (!c) return O;
    for (const S of c) {
      if (S.points.length < 2) continue;
      const x = [...S.points].sort(
        (M, j) => new Date(M.ts).getTime() - new Date(j.ts).getTime()
      ), T = parseFloat(x[0].balance), w = parseFloat(x[x.length - 1].balance);
      T !== 0 && O.set(S.account_id, (w - T) / Math.abs(T));
    }
    return O;
  }, [c]), b = rt.useMemo(
    () => e3.map((O) => ({
      kind: O,
      accounts: p.filter((S) => S.kind === O)
    })).filter((O) => O.accounts.length > 0),
    [p]
  );
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? "Accounts" }),
      e.show_controls !== !1 && /* @__PURE__ */ it.jsx("span", { className: "controls", children: /* @__PURE__ */ it.jsx(jf, { options: Qb, value: r, onChange: o }) }),
      l && /* @__PURE__ */ it.jsx(
        Jb,
        {
          hass: t,
          entry: e.entry,
          overview: l,
          autoConcealMinutes: e.auto_conceal_minutes,
          onChanged: d
        }
      )
    ] }),
    h && /* @__PURE__ */ it.jsx("div", { className: "error-box", children: h }),
    !h && !l && /* @__PURE__ */ it.jsx("div", { className: "status", children: "Loading…" }),
    !h && l && b.length === 0 && /* @__PURE__ */ it.jsx("div", { className: "status", children: "No accounts." }),
    !h && l && b.length > 0 && /* @__PURE__ */ it.jsx("table", { children: /* @__PURE__ */ it.jsx("tbody", { children: b.map((O) => /* @__PURE__ */ it.jsx(
      a3,
      {
        kind: O.kind,
        accounts: O.accounts,
        masked: s,
        deltas: g
      },
      O.kind
    )) }) })
  ] });
}
function a3({
  kind: t,
  accounts: e,
  masked: n,
  deltas: r
}) {
  return /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
    /* @__PURE__ */ it.jsx("tr", { className: "kind-row", children: /* @__PURE__ */ it.jsx("td", { colSpan: 3, children: t }) }),
    e.map((o) => {
      const l = r.get(o.id);
      return /* @__PURE__ */ it.jsxs("tr", { children: [
        /* @__PURE__ */ it.jsxs("td", { children: [
          /* @__PURE__ */ it.jsx("span", { className: `dot ${t3(o.balance_at) ? "stale" : ""}` }),
          o.nickname || o.name,
          /* @__PURE__ */ it.jsxs("span", { className: "muted", children: [
            " · ",
            o.org_name || o.org_domain
          ] })
        ] }),
        /* @__PURE__ */ it.jsx("td", { className: "num", children: n3(o, n) }),
        /* @__PURE__ */ it.jsx("td", { className: `num row-delta ${l == null ? "muted" : l >= 0 ? "up" : "down"}`, children: l == null ? "–" : nl(l) })
      ] }, o.id);
    })
  ] });
}
function aj(t) {
  const e = /* @__PURE__ */ new Set();
  for (const o of t)
    for (const l of o.points) e.add(new Date(l.ts).getTime());
  const r = [...e].sort((o, l) => o - l).map((o) => ({ ts: o, values: {} }));
  for (const o of t) {
    const l = o.points.map((h) => ({ ts: new Date(h.ts).getTime(), v: parseFloat(h.balance) })).sort((h, d) => h.ts - d.ts);
    let c = 0, s = l.length > 0 ? l[0].v : 0;
    for (const h of r) {
      for (; c < l.length && l[c].ts <= h.ts; )
        s = l[c].v, c++;
      h.values[o.account_id] = s;
    }
  }
  return r;
}
function Fn(t, e, n = () => !0) {
  let r = 0;
  for (const o of e)
    n(o) && (r += t.values[o.id] ?? 0);
  return r;
}
function i3(t, e, n) {
  if (t.length === 0) return [];
  const r = n === "1d" || n === "1w" ? "day" : n === "1m" || n === "3m" ? "week" : "month", o = (h) => {
    const d = new Date(h);
    if (r === "day") return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    if (r === "week") {
      const y = (d.getDay() + 6) % 7;
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() - y).getTime();
    }
    return new Date(d.getFullYear(), d.getMonth(), 1).getTime();
  }, l = /* @__PURE__ */ new Map();
  for (const h of t) l.set(o(h.ts), Fn(h, e));
  const c = [...l.keys()].sort((h, d) => h - d);
  let s = Fn(t[0], e);
  return c.map((h) => {
    const d = l.get(h), y = d - s;
    return s = d, { ts: h, flow: y };
  });
}
function Ev(t, e) {
  let n = 0;
  for (const r of e) {
    const o = t.values[r.id] ?? 0;
    o < 0 && (n += o);
  }
  return n;
}
function o3({
  hass: t,
  config: e
}) {
  const n = uo.find((O) => O.key === (e.view ?? "all")) ?? uo[2], [r, o] = rt.useState(e.range ?? "1m"), { overview: l, series: c, masked: s, error: h, refresh: d } = Wb(t, e.entry, r), y = t0(l), p = rt.useMemo(() => y.filter(n.pick), [y, n]), g = rt.useMemo(() => {
    if (!c) return null;
    const O = new Set(p.map((w) => w.id)), S = aj(c.filter((w) => O.has(w.account_id)));
    if (S.length === 0) return null;
    const x = Fn(S[0], p), T = Fn(S[S.length - 1], p);
    return {
      last: T,
      diff: T - x,
      delta: x !== 0 ? (T - x) / Math.abs(x) : null
    };
  }, [c, p]), b = g != null && g.delta != null && !n.flow;
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? n.label }),
      e.show_controls !== !1 && /* @__PURE__ */ it.jsx("span", { className: "controls", children: /* @__PURE__ */ it.jsx(jf, { options: Qb, value: r, onChange: o }) }),
      l && /* @__PURE__ */ it.jsx(
        Jb,
        {
          hass: t,
          entry: e.entry,
          overview: l,
          autoConcealMinutes: e.auto_conceal_minutes,
          onChanged: d
        }
      )
    ] }),
    h && /* @__PURE__ */ it.jsx("div", { className: "error-box", children: h }),
    !h && !g && /* @__PURE__ */ it.jsx("div", { className: "status", children: "Loading…" }),
    !h && g && s && // Censored: the dollar amount is redacted anyway, so promote the real
    // percent change to the big slot and drop the footer line entirely.
    /* @__PURE__ */ it.jsx(
      "div",
      {
        className: `stat-value ${b ? g.delta >= 0 ? "up" : "down" : ""}`,
        children: b ? nl(g.delta) : HR
      }
    ),
    !h && g && !s && /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
      /* @__PURE__ */ it.jsx("div", { className: "stat-value", children: Zu(g.last) }),
      b && /* @__PURE__ */ it.jsxs("div", { className: `stat-delta ${g.delta >= 0 ? "up" : "down"}`, children: [
        rj(g.diff),
        " (",
        nl(g.delta),
        ") over ",
        r
      ] })
    ] })
  ] });
}
function ij(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = ij(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function qt() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = ij(t)) && (r && (r += " "), r += e);
  return r;
}
var Mv, sO;
function Je() {
  if (sO) return Mv;
  sO = 1;
  var t = Array.isArray;
  return Mv = t, Mv;
}
var jv, hO;
function oj() {
  if (hO) return jv;
  hO = 1;
  var t = typeof ff == "object" && ff && ff.Object === Object && ff;
  return jv = t, jv;
}
var Cv, dO;
function rr() {
  if (dO) return Cv;
  dO = 1;
  var t = oj(), e = typeof self == "object" && self && self.Object === Object && self, n = t || e || Function("return this")();
  return Cv = n, Cv;
}
var Dv, vO;
function Bl() {
  if (vO) return Dv;
  vO = 1;
  var t = rr(), e = t.Symbol;
  return Dv = e, Dv;
}
var Pv, pO;
function u3() {
  if (pO) return Pv;
  pO = 1;
  var t = Bl(), e = Object.prototype, n = e.hasOwnProperty, r = e.toString, o = t ? t.toStringTag : void 0;
  function l(c) {
    var s = n.call(c, o), h = c[o];
    try {
      c[o] = void 0;
      var d = !0;
    } catch {
    }
    var y = r.call(c);
    return d && (s ? c[o] = h : delete c[o]), y;
  }
  return Pv = l, Pv;
}
var Nv, yO;
function l3() {
  if (yO) return Nv;
  yO = 1;
  var t = Object.prototype, e = t.toString;
  function n(r) {
    return e.call(r);
  }
  return Nv = n, Nv;
}
var Rv, mO;
function $r() {
  if (mO) return Rv;
  mO = 1;
  var t = Bl(), e = u3(), n = l3(), r = "[object Null]", o = "[object Undefined]", l = t ? t.toStringTag : void 0;
  function c(s) {
    return s == null ? s === void 0 ? o : r : l && l in Object(s) ? e(s) : n(s);
  }
  return Rv = c, Rv;
}
var qv, gO;
function Br() {
  if (gO) return qv;
  gO = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return qv = t, qv;
}
var zv, bO;
function No() {
  if (bO) return zv;
  bO = 1;
  var t = $r(), e = Br(), n = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || e(o) && t(o) == n;
  }
  return zv = r, zv;
}
var $v, xO;
function e0() {
  if (xO) return $v;
  xO = 1;
  var t = Je(), e = No(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function o(l, c) {
    if (t(l))
      return !1;
    var s = typeof l;
    return s == "number" || s == "symbol" || s == "boolean" || l == null || e(l) ? !0 : r.test(l) || !n.test(l) || c != null && l in Object(c);
  }
  return $v = o, $v;
}
var Bv, SO;
function ba() {
  if (SO) return Bv;
  SO = 1;
  function t(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  return Bv = t, Bv;
}
var Lv, _O;
function n0() {
  if (_O) return Lv;
  _O = 1;
  var t = $r(), e = ba(), n = "[object AsyncFunction]", r = "[object Function]", o = "[object GeneratorFunction]", l = "[object Proxy]";
  function c(s) {
    if (!e(s))
      return !1;
    var h = t(s);
    return h == r || h == o || h == n || h == l;
  }
  return Lv = c, Lv;
}
var kv, OO;
function c3() {
  if (OO) return kv;
  OO = 1;
  var t = rr(), e = t["__core-js_shared__"];
  return kv = e, kv;
}
var Uv, AO;
function f3() {
  if (AO) return Uv;
  AO = 1;
  var t = c3(), e = (function() {
    var r = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!e && e in r;
  }
  return Uv = n, Uv;
}
var Hv, wO;
function uj() {
  if (wO) return Hv;
  wO = 1;
  var t = Function.prototype, e = t.toString;
  function n(r) {
    if (r != null) {
      try {
        return e.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return Hv = n, Hv;
}
var Iv, TO;
function s3() {
  if (TO) return Iv;
  TO = 1;
  var t = n0(), e = f3(), n = ba(), r = uj(), o = /[\\^$.*+?()[\]{}|]/g, l = /^\[object .+?Constructor\]$/, c = Function.prototype, s = Object.prototype, h = c.toString, d = s.hasOwnProperty, y = RegExp(
    "^" + h.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(g) {
    if (!n(g) || e(g))
      return !1;
    var b = t(g) ? y : l;
    return b.test(r(g));
  }
  return Iv = p, Iv;
}
var Gv, EO;
function h3() {
  if (EO) return Gv;
  EO = 1;
  function t(e, n) {
    return e == null ? void 0 : e[n];
  }
  return Gv = t, Gv;
}
var Yv, MO;
function ai() {
  if (MO) return Yv;
  MO = 1;
  var t = s3(), e = h3();
  function n(r, o) {
    var l = e(r, o);
    return t(l) ? l : void 0;
  }
  return Yv = n, Yv;
}
var Xv, jO;
function Cs() {
  if (jO) return Xv;
  jO = 1;
  var t = ai(), e = t(Object, "create");
  return Xv = e, Xv;
}
var Kv, CO;
function d3() {
  if (CO) return Kv;
  CO = 1;
  var t = Cs();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Kv = e, Kv;
}
var Vv, DO;
function v3() {
  if (DO) return Vv;
  DO = 1;
  function t(e) {
    var n = this.has(e) && delete this.__data__[e];
    return this.size -= n ? 1 : 0, n;
  }
  return Vv = t, Vv;
}
var Fv, PO;
function p3() {
  if (PO) return Fv;
  PO = 1;
  var t = Cs(), e = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function o(l) {
    var c = this.__data__;
    if (t) {
      var s = c[l];
      return s === e ? void 0 : s;
    }
    return r.call(c, l) ? c[l] : void 0;
  }
  return Fv = o, Fv;
}
var Zv, NO;
function y3() {
  if (NO) return Zv;
  NO = 1;
  var t = Cs(), e = Object.prototype, n = e.hasOwnProperty;
  function r(o) {
    var l = this.__data__;
    return t ? l[o] !== void 0 : n.call(l, o);
  }
  return Zv = r, Zv;
}
var Qv, RO;
function m3() {
  if (RO) return Qv;
  RO = 1;
  var t = Cs(), e = "__lodash_hash_undefined__";
  function n(r, o) {
    var l = this.__data__;
    return this.size += this.has(r) ? 0 : 1, l[r] = t && o === void 0 ? e : o, this;
  }
  return Qv = n, Qv;
}
var Wv, qO;
function g3() {
  if (qO) return Wv;
  qO = 1;
  var t = d3(), e = v3(), n = p3(), r = y3(), o = m3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = o, Wv = l, Wv;
}
var Jv, zO;
function b3() {
  if (zO) return Jv;
  zO = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Jv = t, Jv;
}
var tp, $O;
function r0() {
  if ($O) return tp;
  $O = 1;
  function t(e, n) {
    return e === n || e !== e && n !== n;
  }
  return tp = t, tp;
}
var ep, BO;
function Ds() {
  if (BO) return ep;
  BO = 1;
  var t = r0();
  function e(n, r) {
    for (var o = n.length; o--; )
      if (t(n[o][0], r))
        return o;
    return -1;
  }
  return ep = e, ep;
}
var np, LO;
function x3() {
  if (LO) return np;
  LO = 1;
  var t = Ds(), e = Array.prototype, n = e.splice;
  function r(o) {
    var l = this.__data__, c = t(l, o);
    if (c < 0)
      return !1;
    var s = l.length - 1;
    return c == s ? l.pop() : n.call(l, c, 1), --this.size, !0;
  }
  return np = r, np;
}
var rp, kO;
function S3() {
  if (kO) return rp;
  kO = 1;
  var t = Ds();
  function e(n) {
    var r = this.__data__, o = t(r, n);
    return o < 0 ? void 0 : r[o][1];
  }
  return rp = e, rp;
}
var ap, UO;
function _3() {
  if (UO) return ap;
  UO = 1;
  var t = Ds();
  function e(n) {
    return t(this.__data__, n) > -1;
  }
  return ap = e, ap;
}
var ip, HO;
function O3() {
  if (HO) return ip;
  HO = 1;
  var t = Ds();
  function e(n, r) {
    var o = this.__data__, l = t(o, n);
    return l < 0 ? (++this.size, o.push([n, r])) : o[l][1] = r, this;
  }
  return ip = e, ip;
}
var op, IO;
function Ps() {
  if (IO) return op;
  IO = 1;
  var t = b3(), e = x3(), n = S3(), r = _3(), o = O3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = o, op = l, op;
}
var up, GO;
function a0() {
  if (GO) return up;
  GO = 1;
  var t = ai(), e = rr(), n = t(e, "Map");
  return up = n, up;
}
var lp, YO;
function A3() {
  if (YO) return lp;
  YO = 1;
  var t = g3(), e = Ps(), n = a0();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (n || e)(),
      string: new t()
    };
  }
  return lp = r, lp;
}
var cp, XO;
function w3() {
  if (XO) return cp;
  XO = 1;
  function t(e) {
    var n = typeof e;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
  }
  return cp = t, cp;
}
var fp, KO;
function Ns() {
  if (KO) return fp;
  KO = 1;
  var t = w3();
  function e(n, r) {
    var o = n.__data__;
    return t(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
  }
  return fp = e, fp;
}
var sp, VO;
function T3() {
  if (VO) return sp;
  VO = 1;
  var t = Ns();
  function e(n) {
    var r = t(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return sp = e, sp;
}
var hp, FO;
function E3() {
  if (FO) return hp;
  FO = 1;
  var t = Ns();
  function e(n) {
    return t(this, n).get(n);
  }
  return hp = e, hp;
}
var dp, ZO;
function M3() {
  if (ZO) return dp;
  ZO = 1;
  var t = Ns();
  function e(n) {
    return t(this, n).has(n);
  }
  return dp = e, dp;
}
var vp, QO;
function j3() {
  if (QO) return vp;
  QO = 1;
  var t = Ns();
  function e(n, r) {
    var o = t(this, n), l = o.size;
    return o.set(n, r), this.size += o.size == l ? 0 : 1, this;
  }
  return vp = e, vp;
}
var pp, WO;
function i0() {
  if (WO) return pp;
  WO = 1;
  var t = A3(), e = T3(), n = E3(), r = M3(), o = j3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = o, pp = l, pp;
}
var yp, JO;
function lj() {
  if (JO) return yp;
  JO = 1;
  var t = i0(), e = "Expected a function";
  function n(r, o) {
    if (typeof r != "function" || o != null && typeof o != "function")
      throw new TypeError(e);
    var l = function() {
      var c = arguments, s = o ? o.apply(this, c) : c[0], h = l.cache;
      if (h.has(s))
        return h.get(s);
      var d = r.apply(this, c);
      return l.cache = h.set(s, d) || h, d;
    };
    return l.cache = new (n.Cache || t)(), l;
  }
  return n.Cache = t, yp = n, yp;
}
var mp, tA;
function C3() {
  if (tA) return mp;
  tA = 1;
  var t = lj(), e = 500;
  function n(r) {
    var o = t(r, function(c) {
      return l.size === e && l.clear(), c;
    }), l = o.cache;
    return o;
  }
  return mp = n, mp;
}
var gp, eA;
function D3() {
  if (eA) return gp;
  eA = 1;
  var t = C3(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = t(function(o) {
    var l = [];
    return o.charCodeAt(0) === 46 && l.push(""), o.replace(e, function(c, s, h, d) {
      l.push(h ? d.replace(n, "$1") : s || c);
    }), l;
  });
  return gp = r, gp;
}
var bp, nA;
function o0() {
  if (nA) return bp;
  nA = 1;
  function t(e, n) {
    for (var r = -1, o = e == null ? 0 : e.length, l = Array(o); ++r < o; )
      l[r] = n(e[r], r, e);
    return l;
  }
  return bp = t, bp;
}
var xp, rA;
function P3() {
  if (rA) return xp;
  rA = 1;
  var t = Bl(), e = o0(), n = Je(), r = No(), o = t ? t.prototype : void 0, l = o ? o.toString : void 0;
  function c(s) {
    if (typeof s == "string")
      return s;
    if (n(s))
      return e(s, c) + "";
    if (r(s))
      return l ? l.call(s) : "";
    var h = s + "";
    return h == "0" && 1 / s == -1 / 0 ? "-0" : h;
  }
  return xp = c, xp;
}
var Sp, aA;
function cj() {
  if (aA) return Sp;
  aA = 1;
  var t = P3();
  function e(n) {
    return n == null ? "" : t(n);
  }
  return Sp = e, Sp;
}
var _p, iA;
function fj() {
  if (iA) return _p;
  iA = 1;
  var t = Je(), e = e0(), n = D3(), r = cj();
  function o(l, c) {
    return t(l) ? l : e(l, c) ? [l] : n(r(l));
  }
  return _p = o, _p;
}
var Op, oA;
function Rs() {
  if (oA) return Op;
  oA = 1;
  var t = No();
  function e(n) {
    if (typeof n == "string" || t(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Op = e, Op;
}
var Ap, uA;
function u0() {
  if (uA) return Ap;
  uA = 1;
  var t = fj(), e = Rs();
  function n(r, o) {
    o = t(o, r);
    for (var l = 0, c = o.length; r != null && l < c; )
      r = r[e(o[l++])];
    return l && l == c ? r : void 0;
  }
  return Ap = n, Ap;
}
var wp, lA;
function sj() {
  if (lA) return wp;
  lA = 1;
  var t = u0();
  function e(n, r, o) {
    var l = n == null ? void 0 : t(n, r);
    return l === void 0 ? o : l;
  }
  return wp = e, wp;
}
var N3 = sj();
const jn = /* @__PURE__ */ Qt(N3);
var Tp, cA;
function R3() {
  if (cA) return Tp;
  cA = 1;
  function t(e) {
    return e == null;
  }
  return Tp = t, Tp;
}
var q3 = R3();
const Mt = /* @__PURE__ */ Qt(q3);
var Ep, fA;
function z3() {
  if (fA) return Ep;
  fA = 1;
  var t = $r(), e = Je(), n = Br(), r = "[object String]";
  function o(l) {
    return typeof l == "string" || !e(l) && n(l) && t(l) == r;
  }
  return Ep = o, Ep;
}
var $3 = z3();
const Ja = /* @__PURE__ */ Qt($3);
var B3 = n0();
const At = /* @__PURE__ */ Qt(B3);
var L3 = ba();
const Ro = /* @__PURE__ */ Qt(L3);
var Mp = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sA;
function k3() {
  if (sA) return Ut;
  sA = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var T = x.$$typeof;
      switch (T) {
        case t:
          switch (x = x.type, x) {
            case n:
            case o:
            case r:
            case d:
            case y:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case c:
                case h:
                case g:
                case p:
                case l:
                  return x;
                default:
                  return T;
              }
          }
        case e:
          return T;
      }
    }
  }
  return Ut.ContextConsumer = c, Ut.ContextProvider = l, Ut.Element = t, Ut.ForwardRef = h, Ut.Fragment = n, Ut.Lazy = g, Ut.Memo = p, Ut.Portal = e, Ut.Profiler = o, Ut.StrictMode = r, Ut.Suspense = d, Ut.SuspenseList = y, Ut.isAsyncMode = function() {
    return !1;
  }, Ut.isConcurrentMode = function() {
    return !1;
  }, Ut.isContextConsumer = function(x) {
    return S(x) === c;
  }, Ut.isContextProvider = function(x) {
    return S(x) === l;
  }, Ut.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ut.isForwardRef = function(x) {
    return S(x) === h;
  }, Ut.isFragment = function(x) {
    return S(x) === n;
  }, Ut.isLazy = function(x) {
    return S(x) === g;
  }, Ut.isMemo = function(x) {
    return S(x) === p;
  }, Ut.isPortal = function(x) {
    return S(x) === e;
  }, Ut.isProfiler = function(x) {
    return S(x) === o;
  }, Ut.isStrictMode = function(x) {
    return S(x) === r;
  }, Ut.isSuspense = function(x) {
    return S(x) === d;
  }, Ut.isSuspenseList = function(x) {
    return S(x) === y;
  }, Ut.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === o || x === r || x === d || x === y || x === b || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === p || x.$$typeof === l || x.$$typeof === c || x.$$typeof === h || x.$$typeof === O || x.getModuleId !== void 0);
  }, Ut.typeOf = S, Ut;
}
var hA;
function U3() {
  return hA || (hA = 1, Mp.exports = k3()), Mp.exports;
}
var H3 = U3(), jp, dA;
function hj() {
  if (dA) return jp;
  dA = 1;
  var t = $r(), e = Br(), n = "[object Number]";
  function r(o) {
    return typeof o == "number" || e(o) && t(o) == n;
  }
  return jp = r, jp;
}
var Cp, vA;
function I3() {
  if (vA) return Cp;
  vA = 1;
  var t = hj();
  function e(n) {
    return t(n) && n != +n;
  }
  return Cp = e, Cp;
}
var G3 = I3();
const qo = /* @__PURE__ */ Qt(G3);
var Y3 = hj();
const X3 = /* @__PURE__ */ Qt(Y3);
var Hn = function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}, Ya = function(e) {
  return Ja(e) && e.indexOf("%") === e.length - 1;
}, st = function(e) {
  return X3(e) && !qo(e);
}, K3 = function(e) {
  return Mt(e);
}, _e = function(e) {
  return st(e) || Ja(e);
}, V3 = 0, zo = function(e) {
  var n = ++V3;
  return "".concat(e || "").concat(n);
}, ti = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!st(e) && !Ja(e))
    return r;
  var l;
  if (Ya(e)) {
    var c = e.indexOf("%");
    l = n * parseFloat(e.slice(0, c)) / 100;
  } else
    l = +e;
  return qo(l) && (l = r), o && l > n && (l = n), l;
}, pa = function(e) {
  if (!e)
    return null;
  var n = Object.keys(e);
  return n && n.length ? e[n[0]] : null;
}, F3 = function(e) {
  if (!Array.isArray(e))
    return !1;
  for (var n = e.length, r = {}, o = 0; o < n; o++)
    if (!r[e[o]])
      r[e[o]] = !0;
    else
      return !0;
  return !1;
}, Re = function(e, n) {
  return st(e) && st(n) ? function(r) {
    return e + r * (n - e);
  } : function() {
    return n;
  };
};
function Cf(t, e, n) {
  return !t || !t.length ? null : t.find(function(r) {
    return r && (typeof e == "function" ? e(r) : jn(r, e)) === n;
  });
}
var Z3 = function(e, n) {
  return st(e) && st(n) ? e - n : Ja(e) && Ja(n) ? e.localeCompare(n) : e instanceof Date && n instanceof Date ? e.getTime() - n.getTime() : String(e).localeCompare(String(n));
};
function no(t, e) {
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n]))
      return !1;
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
      return !1;
  return !0;
}
function Pg(t) {
  "@babel/helpers - typeof";
  return Pg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pg(t);
}
var Q3 = ["viewBox", "children"], W3 = [
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
], pA = ["points", "pathLength"], Dp = {
  svg: Q3,
  polygon: pA,
  polyline: pA
}, l0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Df = function(e, n) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ rt.isValidElement(e) && (r = e.props), !Ro(r))
    return null;
  var o = {};
  return Object.keys(r).forEach(function(l) {
    l0.includes(l) && (o[l] = n || function(c) {
      return r[l](r, c);
    });
  }), o;
}, J3 = function(e, n, r) {
  return function(o) {
    return e(n, r, o), null;
  };
}, Pf = function(e, n, r) {
  if (!Ro(e) || Pg(e) !== "object")
    return null;
  var o = null;
  return Object.keys(e).forEach(function(l) {
    var c = e[l];
    l0.includes(l) && typeof c == "function" && (o || (o = {}), o[l] = J3(c, n, r));
  }), o;
}, tq = ["children"], eq = ["children"];
function yA(t, e) {
  if (t == null) return {};
  var n = nq(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function nq(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Ng(t) {
  "@babel/helpers - typeof";
  return Ng = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ng(t);
}
var mA = {
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
}, Cr = function(e) {
  return typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "";
}, gA = null, Pp = null, c0 = function t(e) {
  if (e === gA && Array.isArray(Pp))
    return Pp;
  var n = [];
  return rt.Children.forEach(e, function(r) {
    Mt(r) || (H3.isFragment(r) ? n = n.concat(t(r.props.children)) : n.push(r));
  }), Pp = n, gA = e, n;
};
function Cn(t, e) {
  var n = [], r = [];
  return Array.isArray(e) ? r = e.map(function(o) {
    return Cr(o);
  }) : r = [Cr(e)], c0(t).forEach(function(o) {
    var l = jn(o, "type.displayName") || jn(o, "type.name");
    r.indexOf(l) !== -1 && n.push(o);
  }), n;
}
function hn(t, e) {
  var n = Cn(t, e);
  return n && n[0];
}
var bA = function(e) {
  if (!e || !e.props)
    return !1;
  var n = e.props, r = n.width, o = n.height;
  return !(!st(r) || r <= 0 || !st(o) || o <= 0);
}, rq = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], aq = function(e) {
  return e && e.type && Ja(e.type) && rq.indexOf(e.type) >= 0;
}, dj = function(e) {
  return e && Ng(e) === "object" && "clipDot" in e;
}, iq = function(e, n, r, o) {
  var l, c = (l = Dp == null ? void 0 : Dp[o]) !== null && l !== void 0 ? l : [];
  return n.startsWith("data-") || !At(e) && (o && c.includes(n) || W3.includes(n)) || r && l0.includes(n);
}, Et = function(e, n, r) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var o = e;
  if (/* @__PURE__ */ rt.isValidElement(e) && (o = e.props), !Ro(o))
    return null;
  var l = {};
  return Object.keys(o).forEach(function(c) {
    var s;
    iq((s = o) === null || s === void 0 ? void 0 : s[c], c, n, r) && (l[c] = o[c]);
  }), l;
}, Rg = function t(e, n) {
  if (e === n)
    return !0;
  var r = rt.Children.count(e);
  if (r !== rt.Children.count(n))
    return !1;
  if (r === 0)
    return !0;
  if (r === 1)
    return xA(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
  for (var o = 0; o < r; o++) {
    var l = e[o], c = n[o];
    if (Array.isArray(l) || Array.isArray(c)) {
      if (!t(l, c))
        return !1;
    } else if (!xA(l, c))
      return !1;
  }
  return !0;
}, xA = function(e, n) {
  if (Mt(e) && Mt(n))
    return !0;
  if (!Mt(e) && !Mt(n)) {
    var r = e.props || {}, o = r.children, l = yA(r, tq), c = n.props || {}, s = c.children, h = yA(c, eq);
    return o && s ? no(l, h) && Rg(o, s) : !o && !s ? no(l, h) : !1;
  }
  return !1;
}, SA = function(e, n) {
  var r = [], o = {};
  return c0(e).forEach(function(l, c) {
    if (aq(l))
      r.push(l);
    else if (l) {
      var s = Cr(l.type), h = n[s] || {}, d = h.handler, y = h.once;
      if (d && (!y || !o[s])) {
        var p = d(l, s, c);
        r.push(p), o[s] = !0;
      }
    }
  }), r;
}, oq = function(e) {
  var n = e && e.type;
  return n && mA[n] ? mA[n] : null;
}, uq = function(e, n) {
  return c0(n).indexOf(e);
}, lq = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function qg() {
  return qg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, qg.apply(this, arguments);
}
function cq(t, e) {
  if (t == null) return {};
  var n = fq(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function fq(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function zg(t) {
  var e = t.children, n = t.width, r = t.height, o = t.viewBox, l = t.className, c = t.style, s = t.title, h = t.desc, d = cq(t, lq), y = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, p = qt("recharts-surface", l);
  return /* @__PURE__ */ B.createElement("svg", qg({}, Et(d, !0, "svg"), {
    className: p,
    width: n,
    height: r,
    style: c,
    viewBox: "".concat(y.x, " ").concat(y.y, " ").concat(y.width, " ").concat(y.height)
  }), /* @__PURE__ */ B.createElement("title", null, s), /* @__PURE__ */ B.createElement("desc", null, h), e);
}
var sq = ["children", "className"];
function $g() {
  return $g = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, $g.apply(this, arguments);
}
function hq(t, e) {
  if (t == null) return {};
  var n = dq(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function dq(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Jt = /* @__PURE__ */ B.forwardRef(function(t, e) {
  var n = t.children, r = t.className, o = hq(t, sq), l = qt("recharts-layer", r);
  return /* @__PURE__ */ B.createElement("g", $g({
    className: l
  }, Et(o, !0), {
    ref: e
  }), n);
}), Dr = function(e, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++)
    o[l - 2] = arguments[l];
}, Np, _A;
function vq() {
  if (_A) return Np;
  _A = 1;
  function t(e, n, r) {
    var o = -1, l = e.length;
    n < 0 && (n = -n > l ? 0 : l + n), r = r > l ? l : r, r < 0 && (r += l), l = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var c = Array(l); ++o < l; )
      c[o] = e[o + n];
    return c;
  }
  return Np = t, Np;
}
var Rp, OA;
function pq() {
  if (OA) return Rp;
  OA = 1;
  var t = vq();
  function e(n, r, o) {
    var l = n.length;
    return o = o === void 0 ? l : o, !r && o >= l ? n : t(n, r, o);
  }
  return Rp = e, Rp;
}
var qp, AA;
function vj() {
  if (AA) return qp;
  AA = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = e + n + r, l = "\\ufe0e\\ufe0f", c = "\\u200d", s = RegExp("[" + c + t + o + l + "]");
  function h(d) {
    return s.test(d);
  }
  return qp = h, qp;
}
var zp, wA;
function yq() {
  if (wA) return zp;
  wA = 1;
  function t(e) {
    return e.split("");
  }
  return zp = t, zp;
}
var $p, TA;
function mq() {
  if (TA) return $p;
  TA = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", o = e + n + r, l = "\\ufe0e\\ufe0f", c = "[" + t + "]", s = "[" + o + "]", h = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + s + "|" + h + ")", y = "[^" + t + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", b = "\\u200d", O = d + "?", S = "[" + l + "]?", x = "(?:" + b + "(?:" + [y, p, g].join("|") + ")" + S + O + ")*", T = S + O + x, w = "(?:" + [y + s + "?", s, p, g, c].join("|") + ")", M = RegExp(h + "(?=" + h + ")|" + w + T, "g");
  function j(A) {
    return A.match(M) || [];
  }
  return $p = j, $p;
}
var Bp, EA;
function gq() {
  if (EA) return Bp;
  EA = 1;
  var t = yq(), e = vj(), n = mq();
  function r(o) {
    return e(o) ? n(o) : t(o);
  }
  return Bp = r, Bp;
}
var Lp, MA;
function bq() {
  if (MA) return Lp;
  MA = 1;
  var t = pq(), e = vj(), n = gq(), r = cj();
  function o(l) {
    return function(c) {
      c = r(c);
      var s = e(c) ? n(c) : void 0, h = s ? s[0] : c.charAt(0), d = s ? t(s, 1).join("") : c.slice(1);
      return h[l]() + d;
    };
  }
  return Lp = o, Lp;
}
var kp, jA;
function xq() {
  if (jA) return kp;
  jA = 1;
  var t = bq(), e = t("toUpperCase");
  return kp = e, kp;
}
var Sq = xq();
const qs = /* @__PURE__ */ Qt(Sq);
function Wt(t) {
  return function() {
    return t;
  };
}
const pj = Math.cos, Nf = Math.sin, In = Math.sqrt, Rf = Math.PI, zs = 2 * Rf, Bg = Math.PI, Lg = 2 * Bg, Ia = 1e-6, _q = Lg - Ia;
function yj(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Oq(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return yj;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let o = 1, l = r.length; o < l; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class Aq {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? yj : Oq(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, o) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(e, n, r, o, l, c) {
    this._append`C${+e},${+n},${+r},${+o},${this._x1 = +l},${this._y1 = +c}`;
  }
  arcTo(e, n, r, o, l) {
    if (e = +e, n = +n, r = +r, o = +o, l = +l, l < 0) throw new Error(`negative radius: ${l}`);
    let c = this._x1, s = this._y1, h = r - e, d = o - n, y = c - e, p = s - n, g = y * y + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (g > Ia) if (!(Math.abs(p * h - d * y) > Ia) || !l)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let b = r - c, O = o - s, S = h * h + d * d, x = b * b + O * O, T = Math.sqrt(S), w = Math.sqrt(g), M = l * Math.tan((Bg - Math.acos((S + g - x) / (2 * T * w))) / 2), j = M / w, A = M / T;
      Math.abs(j - 1) > Ia && this._append`L${e + j * y},${n + j * p}`, this._append`A${l},${l},0,0,${+(p * b > y * O)},${this._x1 = e + A * h},${this._y1 = n + A * d}`;
    }
  }
  arc(e, n, r, o, l, c) {
    if (e = +e, n = +n, r = +r, c = !!c, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), h = r * Math.sin(o), d = e + s, y = n + h, p = 1 ^ c, g = c ? o - l : l - o;
    this._x1 === null ? this._append`M${d},${y}` : (Math.abs(this._x1 - d) > Ia || Math.abs(this._y1 - y) > Ia) && this._append`L${d},${y}`, r && (g < 0 && (g = g % Lg + Lg), g > _q ? this._append`A${r},${r},0,1,${p},${e - s},${n - h}A${r},${r},0,1,${p},${this._x1 = d},${this._y1 = y}` : g > Ia && this._append`A${r},${r},0,${+(g >= Bg)},${p},${this._x1 = e + r * Math.cos(l)},${this._y1 = n + r * Math.sin(l)}`);
  }
  rect(e, n, r, o) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function f0(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length) return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new Aq(e);
}
function s0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function mj(t) {
  this._context = t;
}
mj.prototype = {
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
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function $s(t) {
  return new mj(t);
}
function gj(t) {
  return t[0];
}
function bj(t) {
  return t[1];
}
function xj(t, e) {
  var n = Wt(!0), r = null, o = $s, l = null, c = f0(s);
  t = typeof t == "function" ? t : t === void 0 ? gj : Wt(t), e = typeof e == "function" ? e : e === void 0 ? bj : Wt(e);
  function s(h) {
    var d, y = (h = s0(h)).length, p, g = !1, b;
    for (r == null && (l = o(b = c())), d = 0; d <= y; ++d)
      !(d < y && n(p = h[d], d, h)) === g && ((g = !g) ? l.lineStart() : l.lineEnd()), g && l.point(+t(p, d, h), +e(p, d, h));
    if (b) return l = null, b + "" || null;
  }
  return s.x = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Wt(+h), s) : t;
  }, s.y = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Wt(+h), s) : e;
  }, s.defined = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Wt(!!h), s) : n;
  }, s.curve = function(h) {
    return arguments.length ? (o = h, r != null && (l = o(r)), s) : o;
  }, s.context = function(h) {
    return arguments.length ? (h == null ? r = l = null : l = o(r = h), s) : r;
  }, s;
}
function sf(t, e, n) {
  var r = null, o = Wt(!0), l = null, c = $s, s = null, h = f0(d);
  t = typeof t == "function" ? t : t === void 0 ? gj : Wt(+t), e = typeof e == "function" ? e : Wt(e === void 0 ? 0 : +e), n = typeof n == "function" ? n : n === void 0 ? bj : Wt(+n);
  function d(p) {
    var g, b, O, S = (p = s0(p)).length, x, T = !1, w, M = new Array(S), j = new Array(S);
    for (l == null && (s = c(w = h())), g = 0; g <= S; ++g) {
      if (!(g < S && o(x = p[g], g, p)) === T)
        if (T = !T)
          b = g, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), O = g - 1; O >= b; --O)
            s.point(M[O], j[O]);
          s.lineEnd(), s.areaEnd();
        }
      T && (M[g] = +t(x, g, p), j[g] = +e(x, g, p), s.point(r ? +r(x, g, p) : M[g], n ? +n(x, g, p) : j[g]));
    }
    if (w) return s = null, w + "" || null;
  }
  function y() {
    return xj().defined(o).curve(c).context(l);
  }
  return d.x = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Wt(+p), r = null, d) : t;
  }, d.x0 = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Wt(+p), d) : t;
  }, d.x1 = function(p) {
    return arguments.length ? (r = p == null ? null : typeof p == "function" ? p : Wt(+p), d) : r;
  }, d.y = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Wt(+p), n = null, d) : e;
  }, d.y0 = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Wt(+p), d) : e;
  }, d.y1 = function(p) {
    return arguments.length ? (n = p == null ? null : typeof p == "function" ? p : Wt(+p), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return y().x(t).y(e);
  }, d.lineY1 = function() {
    return y().x(t).y(n);
  }, d.lineX1 = function() {
    return y().x(r).y(e);
  }, d.defined = function(p) {
    return arguments.length ? (o = typeof p == "function" ? p : Wt(!!p), d) : o;
  }, d.curve = function(p) {
    return arguments.length ? (c = p, l != null && (s = c(l)), d) : c;
  }, d.context = function(p) {
    return arguments.length ? (p == null ? l = s = null : s = c(l = p), d) : l;
  }, d;
}
class Sj {
  constructor(e, n) {
    this._context = e, this._x = n;
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
  point(e, n) {
    switch (e = +e, n = +n, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, n, e, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, e, this._y0, e, n);
        break;
      }
    }
    this._x0 = e, this._y0 = n;
  }
}
function wq(t) {
  return new Sj(t, !0);
}
function Tq(t) {
  return new Sj(t, !1);
}
const h0 = {
  draw(t, e) {
    const n = In(e / Rf);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, zs);
  }
}, Eq = {
  draw(t, e) {
    const n = In(e / 5) / 2;
    t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath();
  }
}, _j = In(1 / 3), Mq = _j * 2, jq = {
  draw(t, e) {
    const n = In(e / Mq), r = n * _j;
    t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath();
  }
}, Cq = {
  draw(t, e) {
    const n = In(e), r = -n / 2;
    t.rect(r, r, n, n);
  }
}, Dq = 0.8908130915292852, Oj = Nf(Rf / 10) / Nf(7 * Rf / 10), Pq = Nf(zs / 10) * Oj, Nq = -pj(zs / 10) * Oj, Rq = {
  draw(t, e) {
    const n = In(e * Dq), r = Pq * n, o = Nq * n;
    t.moveTo(0, -n), t.lineTo(r, o);
    for (let l = 1; l < 5; ++l) {
      const c = zs * l / 5, s = pj(c), h = Nf(c);
      t.lineTo(h * n, -s * n), t.lineTo(s * r - h * o, h * r + s * o);
    }
    t.closePath();
  }
}, Up = In(3), qq = {
  draw(t, e) {
    const n = -In(e / (Up * 3));
    t.moveTo(0, n * 2), t.lineTo(-Up * n, -n), t.lineTo(Up * n, -n), t.closePath();
  }
}, wn = -0.5, Tn = In(3) / 2, kg = 1 / In(12), zq = (kg / 2 + 1) * 3, $q = {
  draw(t, e) {
    const n = In(e / zq), r = n / 2, o = n * kg, l = r, c = n * kg + n, s = -l, h = c;
    t.moveTo(r, o), t.lineTo(l, c), t.lineTo(s, h), t.lineTo(wn * r - Tn * o, Tn * r + wn * o), t.lineTo(wn * l - Tn * c, Tn * l + wn * c), t.lineTo(wn * s - Tn * h, Tn * s + wn * h), t.lineTo(wn * r + Tn * o, wn * o - Tn * r), t.lineTo(wn * l + Tn * c, wn * c - Tn * l), t.lineTo(wn * s + Tn * h, wn * h - Tn * s), t.closePath();
  }
};
function Bq(t, e) {
  let n = null, r = f0(o);
  t = typeof t == "function" ? t : Wt(t || h0), e = typeof e == "function" ? e : Wt(e === void 0 ? 64 : +e);
  function o() {
    let l;
    if (n || (n = l = r()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), l) return n = null, l + "" || null;
  }
  return o.type = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(l), o) : t;
  }, o.size = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Wt(+l), o) : e;
  }, o.context = function(l) {
    return arguments.length ? (n = l ?? null, o) : n;
  }, o;
}
function qf() {
}
function zf(t, e, n) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + n) / 6
  );
}
function Aj(t) {
  this._context = t;
}
Aj.prototype = {
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
        zf(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        zf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Lq(t) {
  return new Aj(t);
}
function wj(t) {
  this._context = t;
}
wj.prototype = {
  areaStart: qf,
  areaEnd: qf,
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
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        zf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function kq(t) {
  return new wj(t);
}
function Tj(t) {
  this._context = t;
}
Tj.prototype = {
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
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        zf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Uq(t) {
  return new Tj(t);
}
function Ej(t) {
  this._context = t;
}
Ej.prototype = {
  areaStart: qf,
  areaEnd: qf,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t, e) {
    t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
  }
};
function Hq(t) {
  return new Ej(t);
}
function CA(t) {
  return t < 0 ? -1 : 1;
}
function DA(t, e, n) {
  var r = t._x1 - t._x0, o = e - t._x1, l = (t._y1 - t._y0) / (r || o < 0 && -0), c = (n - t._y1) / (o || r < 0 && -0), s = (l * o + c * r) / (r + o);
  return (CA(l) + CA(c)) * Math.min(Math.abs(l), Math.abs(c), 0.5 * Math.abs(s)) || 0;
}
function PA(t, e) {
  var n = t._x1 - t._x0;
  return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
}
function Hp(t, e, n) {
  var r = t._x0, o = t._y0, l = t._x1, c = t._y1, s = (l - r) / 3;
  t._context.bezierCurveTo(r + s, o + s * e, l - s, c - s * n, l, c);
}
function $f(t) {
  this._context = t;
}
$f.prototype = {
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
        Hp(this, this._t0, PA(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    var n = NaN;
    if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Hp(this, PA(this, n = DA(this, t, e)), n);
          break;
        default:
          Hp(this, this._t0, n = DA(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
    }
  }
};
function Mj(t) {
  this._context = new jj(t);
}
(Mj.prototype = Object.create($f.prototype)).point = function(t, e) {
  $f.prototype.point.call(this, e, t);
};
function jj(t) {
  this._context = t;
}
jj.prototype = {
  moveTo: function(t, e) {
    this._context.moveTo(e, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, e) {
    this._context.lineTo(e, t);
  },
  bezierCurveTo: function(t, e, n, r, o, l) {
    this._context.bezierCurveTo(e, t, r, n, l, o);
  }
};
function Iq(t) {
  return new $f(t);
}
function Gq(t) {
  return new Mj(t);
}
function Cj(t) {
  this._context = t;
}
Cj.prototype = {
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
    var t = this._x, e = this._y, n = t.length;
    if (n)
      if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), n === 2)
        this._context.lineTo(t[1], e[1]);
      else
        for (var r = NA(t), o = NA(e), l = 0, c = 1; c < n; ++l, ++c)
          this._context.bezierCurveTo(r[0][l], o[0][l], r[1][l], o[1][l], t[c], e[c]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function NA(t) {
  var e, n = t.length - 1, r, o = new Array(n), l = new Array(n), c = new Array(n);
  for (o[0] = 0, l[0] = 2, c[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) o[e] = 1, l[e] = 4, c[e] = 4 * t[e] + 2 * t[e + 1];
  for (o[n - 1] = 2, l[n - 1] = 7, c[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = o[e] / l[e - 1], l[e] -= r, c[e] -= r * c[e - 1];
  for (o[n - 1] = c[n - 1] / l[n - 1], e = n - 2; e >= 0; --e) o[e] = (c[e] - o[e + 1]) / l[e];
  for (l[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) l[e] = 2 * t[e + 1] - o[e + 1];
  return [o, l];
}
function Yq(t) {
  return new Cj(t);
}
function Bs(t, e) {
  this._context = t, this._t = e;
}
Bs.prototype = {
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
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t, e);
        else {
          var n = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function Xq(t) {
  return new Bs(t, 0.5);
}
function Kq(t) {
  return new Bs(t, 0);
}
function Vq(t) {
  return new Bs(t, 1);
}
function lo(t, e) {
  if ((c = t.length) > 1)
    for (var n = 1, r, o, l = t[e[0]], c, s = l.length; n < c; ++n)
      for (o = l, l = t[e[n]], r = 0; r < s; ++r)
        l[r][1] += l[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
}
function Ug(t) {
  for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
  return n;
}
function Fq(t, e) {
  return t[e];
}
function Zq(t) {
  const e = [];
  return e.key = t, e;
}
function Qq() {
  var t = Wt([]), e = Ug, n = lo, r = Fq;
  function o(l) {
    var c = Array.from(t.apply(this, arguments), Zq), s, h = c.length, d = -1, y;
    for (const p of l)
      for (s = 0, ++d; s < h; ++s)
        (c[s][d] = [0, +r(p, c[s].key, d, l)]).data = p;
    for (s = 0, y = s0(e(c)); s < h; ++s)
      c[y[s]].index = s;
    return n(c, y), c;
  }
  return o.keys = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(Array.from(l)), o) : t;
  }, o.value = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Wt(+l), o) : r;
  }, o.order = function(l) {
    return arguments.length ? (e = l == null ? Ug : typeof l == "function" ? l : Wt(Array.from(l)), o) : e;
  }, o.offset = function(l) {
    return arguments.length ? (n = l ?? lo, o) : n;
  }, o;
}
function Wq(t, e) {
  if ((r = t.length) > 0) {
    for (var n, r, o = 0, l = t[0].length, c; o < l; ++o) {
      for (c = n = 0; n < r; ++n) c += t[n][o][1] || 0;
      if (c) for (n = 0; n < r; ++n) t[n][o][1] /= c;
    }
    lo(t, e);
  }
}
function Jq(t, e) {
  if ((o = t.length) > 0) {
    for (var n = 0, r = t[e[0]], o, l = r.length; n < l; ++n) {
      for (var c = 0, s = 0; c < o; ++c) s += t[c][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    lo(t, e);
  }
}
function tz(t, e) {
  if (!(!((c = t.length) > 0) || !((l = (o = t[e[0]]).length) > 0))) {
    for (var n = 0, r = 1, o, l, c; r < l; ++r) {
      for (var s = 0, h = 0, d = 0; s < c; ++s) {
        for (var y = t[e[s]], p = y[r][1] || 0, g = y[r - 1][1] || 0, b = (p - g) / 2, O = 0; O < s; ++O) {
          var S = t[e[O]], x = S[r][1] || 0, T = S[r - 1][1] || 0;
          b += x - T;
        }
        h += p, d += b * p;
      }
      o[r - 1][1] += o[r - 1][0] = n, h && (n -= d / h);
    }
    o[r - 1][1] += o[r - 1][0] = n, lo(t, e);
  }
}
function rl(t) {
  "@babel/helpers - typeof";
  return rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rl(t);
}
var ez = ["type", "size", "sizeType"];
function Hg() {
  return Hg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Hg.apply(this, arguments);
}
function RA(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qA(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? RA(Object(n), !0).forEach(function(r) {
      nz(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : RA(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function nz(t, e, n) {
  return e = rz(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function rz(t) {
  var e = az(t, "string");
  return rl(e) == "symbol" ? e : e + "";
}
function az(t, e) {
  if (rl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (rl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function iz(t, e) {
  if (t == null) return {};
  var n = oz(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function oz(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Dj = {
  symbolCircle: h0,
  symbolCross: Eq,
  symbolDiamond: jq,
  symbolSquare: Cq,
  symbolStar: Rq,
  symbolTriangle: qq,
  symbolWye: $q
}, uz = Math.PI / 180, lz = function(e) {
  var n = "symbol".concat(qs(e));
  return Dj[n] || h0;
}, cz = function(e, n, r) {
  if (n === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var o = 18 * uz;
      return 1.25 * e * e * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, fz = function(e, n) {
  Dj["symbol".concat(qs(e))] = n;
}, d0 = function(e) {
  var n = e.type, r = n === void 0 ? "circle" : n, o = e.size, l = o === void 0 ? 64 : o, c = e.sizeType, s = c === void 0 ? "area" : c, h = iz(e, ez), d = qA(qA({}, h), {}, {
    type: r,
    size: l,
    sizeType: s
  }), y = function() {
    var x = lz(r), T = Bq().type(x).size(cz(l, s, r));
    return T();
  }, p = d.className, g = d.cx, b = d.cy, O = Et(d, !0);
  return g === +g && b === +b && l === +l ? /* @__PURE__ */ B.createElement("path", Hg({}, O, {
    className: qt("recharts-symbols", p),
    transform: "translate(".concat(g, ", ").concat(b, ")"),
    d: y()
  })) : null;
};
d0.registerSymbol = fz;
function co(t) {
  "@babel/helpers - typeof";
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, co(t);
}
function Ig() {
  return Ig = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ig.apply(this, arguments);
}
function zA(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sz(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zA(Object(n), !0).forEach(function(r) {
      al(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zA(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function hz(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dz(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Nj(r.key), r);
  }
}
function vz(t, e, n) {
  return e && dz(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function pz(t, e, n) {
  return e = Bf(e), yz(t, Pj() ? Reflect.construct(e, n || [], Bf(t).constructor) : e.apply(t, n));
}
function yz(t, e) {
  if (e && (co(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mz(t);
}
function mz(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Pj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pj = function() {
    return !!t;
  })();
}
function Bf(t) {
  return Bf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Bf(t);
}
function gz(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Gg(t, e);
}
function Gg(t, e) {
  return Gg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Gg(t, e);
}
function al(t, e, n) {
  return e = Nj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Nj(t) {
  var e = bz(t, "string");
  return co(e) == "symbol" ? e : e + "";
}
function bz(t, e) {
  if (co(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (co(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var En = 32, v0 = /* @__PURE__ */ (function(t) {
  function e() {
    return hz(this, e), pz(this, e, arguments);
  }
  return gz(e, t), vz(e, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, l = En / 2, c = En / 6, s = En / 3, h = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ B.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: h,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: l,
            x2: En,
            y2: l,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ B.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: h,
            d: "M0,".concat(l, "h").concat(s, `
            A`).concat(c, ",").concat(c, ",0,1,1,").concat(2 * s, ",").concat(l, `
            H`).concat(En, "M").concat(2 * s, ",").concat(l, `
            A`).concat(c, ",").concat(c, ",0,1,1,").concat(s, ",").concat(l),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ B.createElement("path", {
            stroke: "none",
            fill: h,
            d: "M0,".concat(En / 8, "h").concat(En, "v").concat(En * 3 / 4, "h").concat(-En, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ B.isValidElement(r.legendIcon)) {
          var d = sz({}, r);
          return delete d.legendIcon, /* @__PURE__ */ B.cloneElement(r.legendIcon, d);
        }
        return /* @__PURE__ */ B.createElement(d0, {
          fill: h,
          cx: l,
          cy: l,
          size: En,
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
      var r = this, o = this.props, l = o.payload, c = o.iconSize, s = o.layout, h = o.formatter, d = o.inactiveColor, y = {
        x: 0,
        y: 0,
        width: En,
        height: En
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, g = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return l.map(function(b, O) {
        var S = b.formatter || h, x = qt(al(al({
          "recharts-legend-item": !0
        }, "legend-item-".concat(O), !0), "inactive", b.inactive));
        if (b.type === "none")
          return null;
        var T = At(b.value) ? null : b.value;
        Dr(
          !At(b.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = b.inactive ? d : b.color;
        return /* @__PURE__ */ B.createElement("li", Ig({
          className: x,
          style: p,
          key: "legend-item-".concat(O)
        }, Pf(r.props, b, O)), /* @__PURE__ */ B.createElement(zg, {
          width: c,
          height: c,
          viewBox: y,
          style: g
        }, r.renderIcon(b)), /* @__PURE__ */ B.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, S ? S(T, b, O) : T));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, l = r.layout, c = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: l === "horizontal" ? c : "left"
      };
      return /* @__PURE__ */ B.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(rt.PureComponent);
al(v0, "displayName", "Legend");
al(v0, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Ip, $A;
function xz() {
  if ($A) return Ip;
  $A = 1;
  var t = Ps();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return Ip = e, Ip;
}
var Gp, BA;
function Sz() {
  if (BA) return Gp;
  BA = 1;
  function t(e) {
    var n = this.__data__, r = n.delete(e);
    return this.size = n.size, r;
  }
  return Gp = t, Gp;
}
var Yp, LA;
function _z() {
  if (LA) return Yp;
  LA = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return Yp = t, Yp;
}
var Xp, kA;
function Oz() {
  if (kA) return Xp;
  kA = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Xp = t, Xp;
}
var Kp, UA;
function Az() {
  if (UA) return Kp;
  UA = 1;
  var t = Ps(), e = a0(), n = i0(), r = 200;
  function o(l, c) {
    var s = this.__data__;
    if (s instanceof t) {
      var h = s.__data__;
      if (!e || h.length < r - 1)
        return h.push([l, c]), this.size = ++s.size, this;
      s = this.__data__ = new n(h);
    }
    return s.set(l, c), this.size = s.size, this;
  }
  return Kp = o, Kp;
}
var Vp, HA;
function Rj() {
  if (HA) return Vp;
  HA = 1;
  var t = Ps(), e = xz(), n = Sz(), r = _z(), o = Oz(), l = Az();
  function c(s) {
    var h = this.__data__ = new t(s);
    this.size = h.size;
  }
  return c.prototype.clear = e, c.prototype.delete = n, c.prototype.get = r, c.prototype.has = o, c.prototype.set = l, Vp = c, Vp;
}
var Fp, IA;
function wz() {
  if (IA) return Fp;
  IA = 1;
  var t = "__lodash_hash_undefined__";
  function e(n) {
    return this.__data__.set(n, t), this;
  }
  return Fp = e, Fp;
}
var Zp, GA;
function Tz() {
  if (GA) return Zp;
  GA = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Zp = t, Zp;
}
var Qp, YA;
function qj() {
  if (YA) return Qp;
  YA = 1;
  var t = i0(), e = wz(), n = Tz();
  function r(o) {
    var l = -1, c = o == null ? 0 : o.length;
    for (this.__data__ = new t(); ++l < c; )
      this.add(o[l]);
  }
  return r.prototype.add = r.prototype.push = e, r.prototype.has = n, Qp = r, Qp;
}
var Wp, XA;
function zj() {
  if (XA) return Wp;
  XA = 1;
  function t(e, n) {
    for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
      if (n(e[r], r, e))
        return !0;
    return !1;
  }
  return Wp = t, Wp;
}
var Jp, KA;
function $j() {
  if (KA) return Jp;
  KA = 1;
  function t(e, n) {
    return e.has(n);
  }
  return Jp = t, Jp;
}
var ty, VA;
function Bj() {
  if (VA) return ty;
  VA = 1;
  var t = qj(), e = zj(), n = $j(), r = 1, o = 2;
  function l(c, s, h, d, y, p) {
    var g = h & r, b = c.length, O = s.length;
    if (b != O && !(g && O > b))
      return !1;
    var S = p.get(c), x = p.get(s);
    if (S && x)
      return S == s && x == c;
    var T = -1, w = !0, M = h & o ? new t() : void 0;
    for (p.set(c, s), p.set(s, c); ++T < b; ) {
      var j = c[T], A = s[T];
      if (d)
        var E = g ? d(A, j, T, s, c, p) : d(j, A, T, c, s, p);
      if (E !== void 0) {
        if (E)
          continue;
        w = !1;
        break;
      }
      if (M) {
        if (!e(s, function(D, R) {
          if (!n(M, R) && (j === D || y(j, D, h, d, p)))
            return M.push(R);
        })) {
          w = !1;
          break;
        }
      } else if (!(j === A || y(j, A, h, d, p))) {
        w = !1;
        break;
      }
    }
    return p.delete(c), p.delete(s), w;
  }
  return ty = l, ty;
}
var ey, FA;
function Ez() {
  if (FA) return ey;
  FA = 1;
  var t = rr(), e = t.Uint8Array;
  return ey = e, ey;
}
var ny, ZA;
function Mz() {
  if (ZA) return ny;
  ZA = 1;
  function t(e) {
    var n = -1, r = Array(e.size);
    return e.forEach(function(o, l) {
      r[++n] = [l, o];
    }), r;
  }
  return ny = t, ny;
}
var ry, QA;
function p0() {
  if (QA) return ry;
  QA = 1;
  function t(e) {
    var n = -1, r = Array(e.size);
    return e.forEach(function(o) {
      r[++n] = o;
    }), r;
  }
  return ry = t, ry;
}
var ay, WA;
function jz() {
  if (WA) return ay;
  WA = 1;
  var t = Bl(), e = Ez(), n = r0(), r = Bj(), o = Mz(), l = p0(), c = 1, s = 2, h = "[object Boolean]", d = "[object Date]", y = "[object Error]", p = "[object Map]", g = "[object Number]", b = "[object RegExp]", O = "[object Set]", S = "[object String]", x = "[object Symbol]", T = "[object ArrayBuffer]", w = "[object DataView]", M = t ? t.prototype : void 0, j = M ? M.valueOf : void 0;
  function A(E, D, R, z, F, k, $) {
    switch (R) {
      case w:
        if (E.byteLength != D.byteLength || E.byteOffset != D.byteOffset)
          return !1;
        E = E.buffer, D = D.buffer;
      case T:
        return !(E.byteLength != D.byteLength || !k(new e(E), new e(D)));
      case h:
      case d:
      case g:
        return n(+E, +D);
      case y:
        return E.name == D.name && E.message == D.message;
      case b:
      case S:
        return E == D + "";
      case p:
        var K = o;
      case O:
        var Z = z & c;
        if (K || (K = l), E.size != D.size && !Z)
          return !1;
        var V = $.get(E);
        if (V)
          return V == D;
        z |= s, $.set(E, D);
        var N = r(K(E), K(D), z, F, k, $);
        return $.delete(E), N;
      case x:
        if (j)
          return j.call(E) == j.call(D);
    }
    return !1;
  }
  return ay = A, ay;
}
var iy, JA;
function Lj() {
  if (JA) return iy;
  JA = 1;
  function t(e, n) {
    for (var r = -1, o = n.length, l = e.length; ++r < o; )
      e[l + r] = n[r];
    return e;
  }
  return iy = t, iy;
}
var oy, tw;
function Cz() {
  if (tw) return oy;
  tw = 1;
  var t = Lj(), e = Je();
  function n(r, o, l) {
    var c = o(r);
    return e(r) ? c : t(c, l(r));
  }
  return oy = n, oy;
}
var uy, ew;
function Dz() {
  if (ew) return uy;
  ew = 1;
  function t(e, n) {
    for (var r = -1, o = e == null ? 0 : e.length, l = 0, c = []; ++r < o; ) {
      var s = e[r];
      n(s, r, e) && (c[l++] = s);
    }
    return c;
  }
  return uy = t, uy;
}
var ly, nw;
function Pz() {
  if (nw) return ly;
  nw = 1;
  function t() {
    return [];
  }
  return ly = t, ly;
}
var cy, rw;
function Nz() {
  if (rw) return cy;
  rw = 1;
  var t = Dz(), e = Pz(), n = Object.prototype, r = n.propertyIsEnumerable, o = Object.getOwnPropertySymbols, l = o ? function(c) {
    return c == null ? [] : (c = Object(c), t(o(c), function(s) {
      return r.call(c, s);
    }));
  } : e;
  return cy = l, cy;
}
var fy, aw;
function Rz() {
  if (aw) return fy;
  aw = 1;
  function t(e, n) {
    for (var r = -1, o = Array(e); ++r < e; )
      o[r] = n(r);
    return o;
  }
  return fy = t, fy;
}
var sy, iw;
function qz() {
  if (iw) return sy;
  iw = 1;
  var t = $r(), e = Br(), n = "[object Arguments]";
  function r(o) {
    return e(o) && t(o) == n;
  }
  return sy = r, sy;
}
var hy, ow;
function y0() {
  if (ow) return hy;
  ow = 1;
  var t = qz(), e = Br(), n = Object.prototype, r = n.hasOwnProperty, o = n.propertyIsEnumerable, l = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(c) {
    return e(c) && r.call(c, "callee") && !o.call(c, "callee");
  };
  return hy = l, hy;
}
var Xu = { exports: {} }, dy, uw;
function zz() {
  if (uw) return dy;
  uw = 1;
  function t() {
    return !1;
  }
  return dy = t, dy;
}
Xu.exports;
var lw;
function kj() {
  return lw || (lw = 1, (function(t, e) {
    var n = rr(), r = zz(), o = e && !e.nodeType && e, l = o && !0 && t && !t.nodeType && t, c = l && l.exports === o, s = c ? n.Buffer : void 0, h = s ? s.isBuffer : void 0, d = h || r;
    t.exports = d;
  })(Xu, Xu.exports)), Xu.exports;
}
var vy, cw;
function m0() {
  if (cw) return vy;
  cw = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function n(r, o) {
    var l = typeof r;
    return o = o ?? t, !!o && (l == "number" || l != "symbol" && e.test(r)) && r > -1 && r % 1 == 0 && r < o;
  }
  return vy = n, vy;
}
var py, fw;
function g0() {
  if (fw) return py;
  fw = 1;
  var t = 9007199254740991;
  function e(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= t;
  }
  return py = e, py;
}
var yy, sw;
function $z() {
  if (sw) return yy;
  sw = 1;
  var t = $r(), e = g0(), n = Br(), r = "[object Arguments]", o = "[object Array]", l = "[object Boolean]", c = "[object Date]", s = "[object Error]", h = "[object Function]", d = "[object Map]", y = "[object Number]", p = "[object Object]", g = "[object RegExp]", b = "[object Set]", O = "[object String]", S = "[object WeakMap]", x = "[object ArrayBuffer]", T = "[object DataView]", w = "[object Float32Array]", M = "[object Float64Array]", j = "[object Int8Array]", A = "[object Int16Array]", E = "[object Int32Array]", D = "[object Uint8Array]", R = "[object Uint8ClampedArray]", z = "[object Uint16Array]", F = "[object Uint32Array]", k = {};
  k[w] = k[M] = k[j] = k[A] = k[E] = k[D] = k[R] = k[z] = k[F] = !0, k[r] = k[o] = k[x] = k[l] = k[T] = k[c] = k[s] = k[h] = k[d] = k[y] = k[p] = k[g] = k[b] = k[O] = k[S] = !1;
  function $(K) {
    return n(K) && e(K.length) && !!k[t(K)];
  }
  return yy = $, yy;
}
var my, hw;
function Uj() {
  if (hw) return my;
  hw = 1;
  function t(e) {
    return function(n) {
      return e(n);
    };
  }
  return my = t, my;
}
var Ku = { exports: {} };
Ku.exports;
var dw;
function Bz() {
  return dw || (dw = 1, (function(t, e) {
    var n = oj(), r = e && !e.nodeType && e, o = r && !0 && t && !t.nodeType && t, l = o && o.exports === r, c = l && n.process, s = (function() {
      try {
        var h = o && o.require && o.require("util").types;
        return h || c && c.binding && c.binding("util");
      } catch {
      }
    })();
    t.exports = s;
  })(Ku, Ku.exports)), Ku.exports;
}
var gy, vw;
function Hj() {
  if (vw) return gy;
  vw = 1;
  var t = $z(), e = Uj(), n = Bz(), r = n && n.isTypedArray, o = r ? e(r) : t;
  return gy = o, gy;
}
var by, pw;
function Lz() {
  if (pw) return by;
  pw = 1;
  var t = Rz(), e = y0(), n = Je(), r = kj(), o = m0(), l = Hj(), c = Object.prototype, s = c.hasOwnProperty;
  function h(d, y) {
    var p = n(d), g = !p && e(d), b = !p && !g && r(d), O = !p && !g && !b && l(d), S = p || g || b || O, x = S ? t(d.length, String) : [], T = x.length;
    for (var w in d)
      (y || s.call(d, w)) && !(S && // Safari 9 has enumerable `arguments.length` in strict mode.
      (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      b && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      O && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
      o(w, T))) && x.push(w);
    return x;
  }
  return by = h, by;
}
var xy, yw;
function kz() {
  if (yw) return xy;
  yw = 1;
  var t = Object.prototype;
  function e(n) {
    var r = n && n.constructor, o = typeof r == "function" && r.prototype || t;
    return n === o;
  }
  return xy = e, xy;
}
var Sy, mw;
function Ij() {
  if (mw) return Sy;
  mw = 1;
  function t(e, n) {
    return function(r) {
      return e(n(r));
    };
  }
  return Sy = t, Sy;
}
var _y, gw;
function Uz() {
  if (gw) return _y;
  gw = 1;
  var t = Ij(), e = t(Object.keys, Object);
  return _y = e, _y;
}
var Oy, bw;
function Hz() {
  if (bw) return Oy;
  bw = 1;
  var t = kz(), e = Uz(), n = Object.prototype, r = n.hasOwnProperty;
  function o(l) {
    if (!t(l))
      return e(l);
    var c = [];
    for (var s in Object(l))
      r.call(l, s) && s != "constructor" && c.push(s);
    return c;
  }
  return Oy = o, Oy;
}
var Ay, xw;
function Ll() {
  if (xw) return Ay;
  xw = 1;
  var t = n0(), e = g0();
  function n(r) {
    return r != null && e(r.length) && !t(r);
  }
  return Ay = n, Ay;
}
var wy, Sw;
function Ls() {
  if (Sw) return wy;
  Sw = 1;
  var t = Lz(), e = Hz(), n = Ll();
  function r(o) {
    return n(o) ? t(o) : e(o);
  }
  return wy = r, wy;
}
var Ty, _w;
function Iz() {
  if (_w) return Ty;
  _w = 1;
  var t = Cz(), e = Nz(), n = Ls();
  function r(o) {
    return t(o, n, e);
  }
  return Ty = r, Ty;
}
var Ey, Ow;
function Gz() {
  if (Ow) return Ey;
  Ow = 1;
  var t = Iz(), e = 1, n = Object.prototype, r = n.hasOwnProperty;
  function o(l, c, s, h, d, y) {
    var p = s & e, g = t(l), b = g.length, O = t(c), S = O.length;
    if (b != S && !p)
      return !1;
    for (var x = b; x--; ) {
      var T = g[x];
      if (!(p ? T in c : r.call(c, T)))
        return !1;
    }
    var w = y.get(l), M = y.get(c);
    if (w && M)
      return w == c && M == l;
    var j = !0;
    y.set(l, c), y.set(c, l);
    for (var A = p; ++x < b; ) {
      T = g[x];
      var E = l[T], D = c[T];
      if (h)
        var R = p ? h(D, E, T, c, l, y) : h(E, D, T, l, c, y);
      if (!(R === void 0 ? E === D || d(E, D, s, h, y) : R)) {
        j = !1;
        break;
      }
      A || (A = T == "constructor");
    }
    if (j && !A) {
      var z = l.constructor, F = c.constructor;
      z != F && "constructor" in l && "constructor" in c && !(typeof z == "function" && z instanceof z && typeof F == "function" && F instanceof F) && (j = !1);
    }
    return y.delete(l), y.delete(c), j;
  }
  return Ey = o, Ey;
}
var My, Aw;
function Yz() {
  if (Aw) return My;
  Aw = 1;
  var t = ai(), e = rr(), n = t(e, "DataView");
  return My = n, My;
}
var jy, ww;
function Xz() {
  if (ww) return jy;
  ww = 1;
  var t = ai(), e = rr(), n = t(e, "Promise");
  return jy = n, jy;
}
var Cy, Tw;
function Gj() {
  if (Tw) return Cy;
  Tw = 1;
  var t = ai(), e = rr(), n = t(e, "Set");
  return Cy = n, Cy;
}
var Dy, Ew;
function Kz() {
  if (Ew) return Dy;
  Ew = 1;
  var t = ai(), e = rr(), n = t(e, "WeakMap");
  return Dy = n, Dy;
}
var Py, Mw;
function Vz() {
  if (Mw) return Py;
  Mw = 1;
  var t = Yz(), e = a0(), n = Xz(), r = Gj(), o = Kz(), l = $r(), c = uj(), s = "[object Map]", h = "[object Object]", d = "[object Promise]", y = "[object Set]", p = "[object WeakMap]", g = "[object DataView]", b = c(t), O = c(e), S = c(n), x = c(r), T = c(o), w = l;
  return (t && w(new t(new ArrayBuffer(1))) != g || e && w(new e()) != s || n && w(n.resolve()) != d || r && w(new r()) != y || o && w(new o()) != p) && (w = function(M) {
    var j = l(M), A = j == h ? M.constructor : void 0, E = A ? c(A) : "";
    if (E)
      switch (E) {
        case b:
          return g;
        case O:
          return s;
        case S:
          return d;
        case x:
          return y;
        case T:
          return p;
      }
    return j;
  }), Py = w, Py;
}
var Ny, jw;
function Fz() {
  if (jw) return Ny;
  jw = 1;
  var t = Rj(), e = Bj(), n = jz(), r = Gz(), o = Vz(), l = Je(), c = kj(), s = Hj(), h = 1, d = "[object Arguments]", y = "[object Array]", p = "[object Object]", g = Object.prototype, b = g.hasOwnProperty;
  function O(S, x, T, w, M, j) {
    var A = l(S), E = l(x), D = A ? y : o(S), R = E ? y : o(x);
    D = D == d ? p : D, R = R == d ? p : R;
    var z = D == p, F = R == p, k = D == R;
    if (k && c(S)) {
      if (!c(x))
        return !1;
      A = !0, z = !1;
    }
    if (k && !z)
      return j || (j = new t()), A || s(S) ? e(S, x, T, w, M, j) : n(S, x, D, T, w, M, j);
    if (!(T & h)) {
      var $ = z && b.call(S, "__wrapped__"), K = F && b.call(x, "__wrapped__");
      if ($ || K) {
        var Z = $ ? S.value() : S, V = K ? x.value() : x;
        return j || (j = new t()), M(Z, V, T, w, j);
      }
    }
    return k ? (j || (j = new t()), r(S, x, T, w, M, j)) : !1;
  }
  return Ny = O, Ny;
}
var Ry, Cw;
function b0() {
  if (Cw) return Ry;
  Cw = 1;
  var t = Fz(), e = Br();
  function n(r, o, l, c, s) {
    return r === o ? !0 : r == null || o == null || !e(r) && !e(o) ? r !== r && o !== o : t(r, o, l, c, n, s);
  }
  return Ry = n, Ry;
}
var qy, Dw;
function Zz() {
  if (Dw) return qy;
  Dw = 1;
  var t = Rj(), e = b0(), n = 1, r = 2;
  function o(l, c, s, h) {
    var d = s.length, y = d, p = !h;
    if (l == null)
      return !y;
    for (l = Object(l); d--; ) {
      var g = s[d];
      if (p && g[2] ? g[1] !== l[g[0]] : !(g[0] in l))
        return !1;
    }
    for (; ++d < y; ) {
      g = s[d];
      var b = g[0], O = l[b], S = g[1];
      if (p && g[2]) {
        if (O === void 0 && !(b in l))
          return !1;
      } else {
        var x = new t();
        if (h)
          var T = h(O, S, b, l, c, x);
        if (!(T === void 0 ? e(S, O, n | r, h, x) : T))
          return !1;
      }
    }
    return !0;
  }
  return qy = o, qy;
}
var zy, Pw;
function Yj() {
  if (Pw) return zy;
  Pw = 1;
  var t = ba();
  function e(n) {
    return n === n && !t(n);
  }
  return zy = e, zy;
}
var $y, Nw;
function Qz() {
  if (Nw) return $y;
  Nw = 1;
  var t = Yj(), e = Ls();
  function n(r) {
    for (var o = e(r), l = o.length; l--; ) {
      var c = o[l], s = r[c];
      o[l] = [c, s, t(s)];
    }
    return o;
  }
  return $y = n, $y;
}
var By, Rw;
function Xj() {
  if (Rw) return By;
  Rw = 1;
  function t(e, n) {
    return function(r) {
      return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
    };
  }
  return By = t, By;
}
var Ly, qw;
function Wz() {
  if (qw) return Ly;
  qw = 1;
  var t = Zz(), e = Qz(), n = Xj();
  function r(o) {
    var l = e(o);
    return l.length == 1 && l[0][2] ? n(l[0][0], l[0][1]) : function(c) {
      return c === o || t(c, o, l);
    };
  }
  return Ly = r, Ly;
}
var ky, zw;
function Jz() {
  if (zw) return ky;
  zw = 1;
  function t(e, n) {
    return e != null && n in Object(e);
  }
  return ky = t, ky;
}
var Uy, $w;
function t$() {
  if ($w) return Uy;
  $w = 1;
  var t = fj(), e = y0(), n = Je(), r = m0(), o = g0(), l = Rs();
  function c(s, h, d) {
    h = t(h, s);
    for (var y = -1, p = h.length, g = !1; ++y < p; ) {
      var b = l(h[y]);
      if (!(g = s != null && d(s, b)))
        break;
      s = s[b];
    }
    return g || ++y != p ? g : (p = s == null ? 0 : s.length, !!p && o(p) && r(b, p) && (n(s) || e(s)));
  }
  return Uy = c, Uy;
}
var Hy, Bw;
function e$() {
  if (Bw) return Hy;
  Bw = 1;
  var t = Jz(), e = t$();
  function n(r, o) {
    return r != null && e(r, o, t);
  }
  return Hy = n, Hy;
}
var Iy, Lw;
function n$() {
  if (Lw) return Iy;
  Lw = 1;
  var t = b0(), e = sj(), n = e$(), r = e0(), o = Yj(), l = Xj(), c = Rs(), s = 1, h = 2;
  function d(y, p) {
    return r(y) && o(p) ? l(c(y), p) : function(g) {
      var b = e(g, y);
      return b === void 0 && b === p ? n(g, y) : t(p, b, s | h);
    };
  }
  return Iy = d, Iy;
}
var Gy, kw;
function $o() {
  if (kw) return Gy;
  kw = 1;
  function t(e) {
    return e;
  }
  return Gy = t, Gy;
}
var Yy, Uw;
function r$() {
  if (Uw) return Yy;
  Uw = 1;
  function t(e) {
    return function(n) {
      return n == null ? void 0 : n[e];
    };
  }
  return Yy = t, Yy;
}
var Xy, Hw;
function a$() {
  if (Hw) return Xy;
  Hw = 1;
  var t = u0();
  function e(n) {
    return function(r) {
      return t(r, n);
    };
  }
  return Xy = e, Xy;
}
var Ky, Iw;
function i$() {
  if (Iw) return Ky;
  Iw = 1;
  var t = r$(), e = a$(), n = e0(), r = Rs();
  function o(l) {
    return n(l) ? t(r(l)) : e(l);
  }
  return Ky = o, Ky;
}
var Vy, Gw;
function xa() {
  if (Gw) return Vy;
  Gw = 1;
  var t = Wz(), e = n$(), n = $o(), r = Je(), o = i$();
  function l(c) {
    return typeof c == "function" ? c : c == null ? n : typeof c == "object" ? r(c) ? e(c[0], c[1]) : t(c) : o(c);
  }
  return Vy = l, Vy;
}
var Fy, Yw;
function Kj() {
  if (Yw) return Fy;
  Yw = 1;
  function t(e, n, r, o) {
    for (var l = e.length, c = r + (o ? 1 : -1); o ? c-- : ++c < l; )
      if (n(e[c], c, e))
        return c;
    return -1;
  }
  return Fy = t, Fy;
}
var Zy, Xw;
function o$() {
  if (Xw) return Zy;
  Xw = 1;
  function t(e) {
    return e !== e;
  }
  return Zy = t, Zy;
}
var Qy, Kw;
function u$() {
  if (Kw) return Qy;
  Kw = 1;
  function t(e, n, r) {
    for (var o = r - 1, l = e.length; ++o < l; )
      if (e[o] === n)
        return o;
    return -1;
  }
  return Qy = t, Qy;
}
var Wy, Vw;
function l$() {
  if (Vw) return Wy;
  Vw = 1;
  var t = Kj(), e = o$(), n = u$();
  function r(o, l, c) {
    return l === l ? n(o, l, c) : t(o, e, c);
  }
  return Wy = r, Wy;
}
var Jy, Fw;
function c$() {
  if (Fw) return Jy;
  Fw = 1;
  var t = l$();
  function e(n, r) {
    var o = n == null ? 0 : n.length;
    return !!o && t(n, r, 0) > -1;
  }
  return Jy = e, Jy;
}
var tm, Zw;
function f$() {
  if (Zw) return tm;
  Zw = 1;
  function t(e, n, r) {
    for (var o = -1, l = e == null ? 0 : e.length; ++o < l; )
      if (r(n, e[o]))
        return !0;
    return !1;
  }
  return tm = t, tm;
}
var em, Qw;
function s$() {
  if (Qw) return em;
  Qw = 1;
  function t() {
  }
  return em = t, em;
}
var nm, Ww;
function h$() {
  if (Ww) return nm;
  Ww = 1;
  var t = Gj(), e = s$(), n = p0(), r = 1 / 0, o = t && 1 / n(new t([, -0]))[1] == r ? function(l) {
    return new t(l);
  } : e;
  return nm = o, nm;
}
var rm, Jw;
function d$() {
  if (Jw) return rm;
  Jw = 1;
  var t = qj(), e = c$(), n = f$(), r = $j(), o = h$(), l = p0(), c = 200;
  function s(h, d, y) {
    var p = -1, g = e, b = h.length, O = !0, S = [], x = S;
    if (y)
      O = !1, g = n;
    else if (b >= c) {
      var T = d ? null : o(h);
      if (T)
        return l(T);
      O = !1, g = r, x = new t();
    } else
      x = d ? [] : S;
    t:
      for (; ++p < b; ) {
        var w = h[p], M = d ? d(w) : w;
        if (w = y || w !== 0 ? w : 0, O && M === M) {
          for (var j = x.length; j--; )
            if (x[j] === M)
              continue t;
          d && x.push(M), S.push(w);
        } else g(x, M, y) || (x !== S && x.push(M), S.push(w));
      }
    return S;
  }
  return rm = s, rm;
}
var am, tT;
function v$() {
  if (tT) return am;
  tT = 1;
  var t = xa(), e = d$();
  function n(r, o) {
    return r && r.length ? e(r, t(o, 2)) : [];
  }
  return am = n, am;
}
var p$ = v$();
const eT = /* @__PURE__ */ Qt(p$);
function Vj(t, e, n) {
  return e === !0 ? eT(t, n) : At(e) ? eT(t, e) : t;
}
function fo(t) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fo(t);
}
var y$ = ["ref"];
function nT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ar(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nT(Object(n), !0).forEach(function(r) {
      ks(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function m$(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rT(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Zj(r.key), r);
  }
}
function g$(t, e, n) {
  return e && rT(t.prototype, e), n && rT(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function b$(t, e, n) {
  return e = Lf(e), x$(t, Fj() ? Reflect.construct(e, n || [], Lf(t).constructor) : e.apply(t, n));
}
function x$(t, e) {
  if (e && (fo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return S$(t);
}
function S$(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Fj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fj = function() {
    return !!t;
  })();
}
function Lf(t) {
  return Lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lf(t);
}
function _$(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Yg(t, e);
}
function Yg(t, e) {
  return Yg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Yg(t, e);
}
function ks(t, e, n) {
  return e = Zj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Zj(t) {
  var e = O$(t, "string");
  return fo(e) == "symbol" ? e : e + "";
}
function O$(t, e) {
  if (fo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (fo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function A$(t, e) {
  if (t == null) return {};
  var n = w$(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function w$(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function T$(t) {
  return t.value;
}
function E$(t, e) {
  if (/* @__PURE__ */ B.isValidElement(t))
    return /* @__PURE__ */ B.cloneElement(t, e);
  if (typeof t == "function")
    return /* @__PURE__ */ B.createElement(t, e);
  e.ref;
  var n = A$(e, y$);
  return /* @__PURE__ */ B.createElement(v0, n);
}
var aT = 1, ro = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    m$(this, e);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = b$(this, e, [].concat(o)), ks(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return _$(e, t), g$(e, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > aT || Math.abs(o.height - this.lastBoundingBox.height) > aT) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Ar({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, l = o.layout, c = o.align, s = o.verticalAlign, h = o.margin, d = o.chartWidth, y = o.chartHeight, p, g;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (c === "center" && l === "vertical") {
          var b = this.getBBoxSnapshot();
          p = {
            left: ((d || 0) - b.width) / 2
          };
        } else
          p = c === "right" ? {
            right: h && h.right || 0
          } : {
            left: h && h.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var O = this.getBBoxSnapshot();
          g = {
            top: ((y || 0) - O.height) / 2
          };
        } else
          g = s === "bottom" ? {
            bottom: h && h.bottom || 0
          } : {
            top: h && h.top || 0
          };
      return Ar(Ar({}, p), g);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.content, c = o.width, s = o.height, h = o.wrapperStyle, d = o.payloadUniqBy, y = o.payload, p = Ar(Ar({
        position: "absolute",
        width: c || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(h)), h);
      return /* @__PURE__ */ B.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(b) {
          r.wrapperNode = b;
        }
      }, E$(l, Ar(Ar({}, this.props), {}, {
        payload: Vj(y, d, T$)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var l = Ar(Ar({}, this.defaultProps), r.props), c = l.layout;
      return c === "vertical" && st(r.props.height) ? {
        height: r.props.height
      } : c === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
})(rt.PureComponent);
ks(ro, "displayName", "Legend");
ks(ro, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var im, iT;
function M$() {
  if (iT) return im;
  iT = 1;
  var t = Bl(), e = y0(), n = Je(), r = t ? t.isConcatSpreadable : void 0;
  function o(l) {
    return n(l) || e(l) || !!(r && l && l[r]);
  }
  return im = o, im;
}
var om, oT;
function Qj() {
  if (oT) return om;
  oT = 1;
  var t = Lj(), e = M$();
  function n(r, o, l, c, s) {
    var h = -1, d = r.length;
    for (l || (l = e), s || (s = []); ++h < d; ) {
      var y = r[h];
      o > 0 && l(y) ? o > 1 ? n(y, o - 1, l, c, s) : t(s, y) : c || (s[s.length] = y);
    }
    return s;
  }
  return om = n, om;
}
var um, uT;
function j$() {
  if (uT) return um;
  uT = 1;
  function t(e) {
    return function(n, r, o) {
      for (var l = -1, c = Object(n), s = o(n), h = s.length; h--; ) {
        var d = s[e ? h : ++l];
        if (r(c[d], d, c) === !1)
          break;
      }
      return n;
    };
  }
  return um = t, um;
}
var lm, lT;
function C$() {
  if (lT) return lm;
  lT = 1;
  var t = j$(), e = t();
  return lm = e, lm;
}
var cm, cT;
function Wj() {
  if (cT) return cm;
  cT = 1;
  var t = C$(), e = Ls();
  function n(r, o) {
    return r && t(r, o, e);
  }
  return cm = n, cm;
}
var fm, fT;
function D$() {
  if (fT) return fm;
  fT = 1;
  var t = Ll();
  function e(n, r) {
    return function(o, l) {
      if (o == null)
        return o;
      if (!t(o))
        return n(o, l);
      for (var c = o.length, s = r ? c : -1, h = Object(o); (r ? s-- : ++s < c) && l(h[s], s, h) !== !1; )
        ;
      return o;
    };
  }
  return fm = e, fm;
}
var sm, sT;
function x0() {
  if (sT) return sm;
  sT = 1;
  var t = Wj(), e = D$(), n = e(t);
  return sm = n, sm;
}
var hm, hT;
function Jj() {
  if (hT) return hm;
  hT = 1;
  var t = x0(), e = Ll();
  function n(r, o) {
    var l = -1, c = e(r) ? Array(r.length) : [];
    return t(r, function(s, h, d) {
      c[++l] = o(s, h, d);
    }), c;
  }
  return hm = n, hm;
}
var dm, dT;
function P$() {
  if (dT) return dm;
  dT = 1;
  function t(e, n) {
    var r = e.length;
    for (e.sort(n); r--; )
      e[r] = e[r].value;
    return e;
  }
  return dm = t, dm;
}
var vm, vT;
function N$() {
  if (vT) return vm;
  vT = 1;
  var t = No();
  function e(n, r) {
    if (n !== r) {
      var o = n !== void 0, l = n === null, c = n === n, s = t(n), h = r !== void 0, d = r === null, y = r === r, p = t(r);
      if (!d && !p && !s && n > r || s && h && y && !d && !p || l && h && y || !o && y || !c)
        return 1;
      if (!l && !s && !p && n < r || p && o && c && !l && !s || d && o && c || !h && c || !y)
        return -1;
    }
    return 0;
  }
  return vm = e, vm;
}
var pm, pT;
function R$() {
  if (pT) return pm;
  pT = 1;
  var t = N$();
  function e(n, r, o) {
    for (var l = -1, c = n.criteria, s = r.criteria, h = c.length, d = o.length; ++l < h; ) {
      var y = t(c[l], s[l]);
      if (y) {
        if (l >= d)
          return y;
        var p = o[l];
        return y * (p == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return pm = e, pm;
}
var ym, yT;
function q$() {
  if (yT) return ym;
  yT = 1;
  var t = o0(), e = u0(), n = xa(), r = Jj(), o = P$(), l = Uj(), c = R$(), s = $o(), h = Je();
  function d(y, p, g) {
    p.length ? p = t(p, function(S) {
      return h(S) ? function(x) {
        return e(x, S.length === 1 ? S[0] : S);
      } : S;
    }) : p = [s];
    var b = -1;
    p = t(p, l(n));
    var O = r(y, function(S, x, T) {
      var w = t(p, function(M) {
        return M(S);
      });
      return { criteria: w, index: ++b, value: S };
    });
    return o(O, function(S, x) {
      return c(S, x, g);
    });
  }
  return ym = d, ym;
}
var mm, mT;
function z$() {
  if (mT) return mm;
  mT = 1;
  function t(e, n, r) {
    switch (r.length) {
      case 0:
        return e.call(n);
      case 1:
        return e.call(n, r[0]);
      case 2:
        return e.call(n, r[0], r[1]);
      case 3:
        return e.call(n, r[0], r[1], r[2]);
    }
    return e.apply(n, r);
  }
  return mm = t, mm;
}
var gm, gT;
function $$() {
  if (gT) return gm;
  gT = 1;
  var t = z$(), e = Math.max;
  function n(r, o, l) {
    return o = e(o === void 0 ? r.length - 1 : o, 0), function() {
      for (var c = arguments, s = -1, h = e(c.length - o, 0), d = Array(h); ++s < h; )
        d[s] = c[o + s];
      s = -1;
      for (var y = Array(o + 1); ++s < o; )
        y[s] = c[s];
      return y[o] = l(d), t(r, this, y);
    };
  }
  return gm = n, gm;
}
var bm, bT;
function B$() {
  if (bT) return bm;
  bT = 1;
  function t(e) {
    return function() {
      return e;
    };
  }
  return bm = t, bm;
}
var xm, xT;
function tC() {
  if (xT) return xm;
  xT = 1;
  var t = ai(), e = (function() {
    try {
      var n = t(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return xm = e, xm;
}
var Sm, ST;
function L$() {
  if (ST) return Sm;
  ST = 1;
  var t = B$(), e = tC(), n = $o(), r = e ? function(o, l) {
    return e(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: t(l),
      writable: !0
    });
  } : n;
  return Sm = r, Sm;
}
var _m, _T;
function k$() {
  if (_T) return _m;
  _T = 1;
  var t = 800, e = 16, n = Date.now;
  function r(o) {
    var l = 0, c = 0;
    return function() {
      var s = n(), h = e - (s - c);
      if (c = s, h > 0) {
        if (++l >= t)
          return arguments[0];
      } else
        l = 0;
      return o.apply(void 0, arguments);
    };
  }
  return _m = r, _m;
}
var Om, OT;
function U$() {
  if (OT) return Om;
  OT = 1;
  var t = L$(), e = k$(), n = e(t);
  return Om = n, Om;
}
var Am, AT;
function H$() {
  if (AT) return Am;
  AT = 1;
  var t = $o(), e = $$(), n = U$();
  function r(o, l) {
    return n(e(o, l, t), o + "");
  }
  return Am = r, Am;
}
var wm, wT;
function Us() {
  if (wT) return wm;
  wT = 1;
  var t = r0(), e = Ll(), n = m0(), r = ba();
  function o(l, c, s) {
    if (!r(s))
      return !1;
    var h = typeof c;
    return (h == "number" ? e(s) && n(c, s.length) : h == "string" && c in s) ? t(s[c], l) : !1;
  }
  return wm = o, wm;
}
var Tm, TT;
function I$() {
  if (TT) return Tm;
  TT = 1;
  var t = Qj(), e = q$(), n = H$(), r = Us(), o = n(function(l, c) {
    if (l == null)
      return [];
    var s = c.length;
    return s > 1 && r(l, c[0], c[1]) ? c = [] : s > 2 && r(c[0], c[1], c[2]) && (c = [c[0]]), e(l, t(c, 1), []);
  });
  return Tm = o, Tm;
}
var G$ = I$();
const S0 = /* @__PURE__ */ Qt(G$);
function il(t) {
  "@babel/helpers - typeof";
  return il = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, il(t);
}
function Xg() {
  return Xg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Xg.apply(this, arguments);
}
function Y$(t, e) {
  return F$(t) || V$(t, e) || K$(t, e) || X$();
}
function X$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K$(t, e) {
  if (t) {
    if (typeof t == "string") return ET(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ET(t, e);
  }
}
function ET(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function V$(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function F$(t) {
  if (Array.isArray(t)) return t;
}
function MT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Em(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? MT(Object(n), !0).forEach(function(r) {
      Z$(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : MT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Z$(t, e, n) {
  return e = Q$(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Q$(t) {
  var e = W$(t, "string");
  return il(e) == "symbol" ? e : e + "";
}
function W$(t, e) {
  if (il(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (il(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function J$(t) {
  return Array.isArray(t) && _e(t[0]) && _e(t[1]) ? t.join(" ~ ") : t;
}
var tB = function(e) {
  var n = e.separator, r = n === void 0 ? " : " : n, o = e.contentStyle, l = o === void 0 ? {} : o, c = e.itemStyle, s = c === void 0 ? {} : c, h = e.labelStyle, d = h === void 0 ? {} : h, y = e.payload, p = e.formatter, g = e.itemSorter, b = e.wrapperClassName, O = e.labelClassName, S = e.label, x = e.labelFormatter, T = e.accessibilityLayer, w = T === void 0 ? !1 : T, M = function() {
    if (y && y.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, K = (g ? S0(y, g) : y).map(function(Z, V) {
        if (Z.type === "none")
          return null;
        var N = Em({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: Z.color || "#000"
        }, s), I = Z.formatter || p || J$, W = Z.value, ot = Z.name, lt = W, P = ot;
        if (I && lt != null && P != null) {
          var U = I(W, ot, Z, V, y);
          if (Array.isArray(U)) {
            var et = Y$(U, 2);
            lt = et[0], P = et[1];
          } else
            lt = U;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ B.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(V),
            style: N
          }, _e(P) ? /* @__PURE__ */ B.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, P) : null, _e(P) ? /* @__PURE__ */ B.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ B.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, lt), /* @__PURE__ */ B.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, Z.unit || ""))
        );
      });
      return /* @__PURE__ */ B.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: $
      }, K);
    }
    return null;
  }, j = Em({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, l), A = Em({
    margin: 0
  }, d), E = !Mt(S), D = E ? S : "", R = qt("recharts-default-tooltip", b), z = qt("recharts-tooltip-label", O);
  E && x && y !== void 0 && y !== null && (D = x(S, y));
  var F = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ B.createElement("div", Xg({
    className: R,
    style: j
  }, F), /* @__PURE__ */ B.createElement("p", {
    className: z,
    style: A
  }, /* @__PURE__ */ B.isValidElement(D) ? D : "".concat(D)), M());
};
function ol(t) {
  "@babel/helpers - typeof";
  return ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ol(t);
}
function hf(t, e, n) {
  return e = eB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eB(t) {
  var e = nB(t, "string");
  return ol(e) == "symbol" ? e : e + "";
}
function nB(t, e) {
  if (ol(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ol(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var zu = "recharts-tooltip-wrapper", rB = {
  visibility: "hidden"
};
function aB(t) {
  var e = t.coordinate, n = t.translateX, r = t.translateY;
  return qt(zu, hf(hf(hf(hf({}, "".concat(zu, "-right"), st(n) && e && st(e.x) && n >= e.x), "".concat(zu, "-left"), st(n) && e && st(e.x) && n < e.x), "".concat(zu, "-bottom"), st(r) && e && st(e.y) && r >= e.y), "".concat(zu, "-top"), st(r) && e && st(e.y) && r < e.y));
}
function jT(t) {
  var e = t.allowEscapeViewBox, n = t.coordinate, r = t.key, o = t.offsetTopLeft, l = t.position, c = t.reverseDirection, s = t.tooltipDimension, h = t.viewBox, d = t.viewBoxDimension;
  if (l && st(l[r]))
    return l[r];
  var y = n[r] - s - o, p = n[r] + o;
  if (e[r])
    return c[r] ? y : p;
  if (c[r]) {
    var g = y, b = h[r];
    return g < b ? Math.max(p, h[r]) : Math.max(y, h[r]);
  }
  var O = p + s, S = h[r] + d;
  return O > S ? Math.max(y, h[r]) : Math.max(p, h[r]);
}
function iB(t) {
  var e = t.translateX, n = t.translateY, r = t.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(e, "px, ").concat(n, "px, 0)") : "translate(".concat(e, "px, ").concat(n, "px)")
  };
}
function oB(t) {
  var e = t.allowEscapeViewBox, n = t.coordinate, r = t.offsetTopLeft, o = t.position, l = t.reverseDirection, c = t.tooltipBox, s = t.useTranslate3d, h = t.viewBox, d, y, p;
  return c.height > 0 && c.width > 0 && n ? (y = jT({
    allowEscapeViewBox: e,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: l,
    tooltipDimension: c.width,
    viewBox: h,
    viewBoxDimension: h.width
  }), p = jT({
    allowEscapeViewBox: e,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: l,
    tooltipDimension: c.height,
    viewBox: h,
    viewBoxDimension: h.height
  }), d = iB({
    translateX: y,
    translateY: p,
    useTranslate3d: s
  })) : d = rB, {
    cssProperties: d,
    cssClasses: aB({
      translateX: y,
      translateY: p,
      coordinate: n
    })
  };
}
function so(t) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, so(t);
}
function CT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function DT(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? CT(Object(n), !0).forEach(function(r) {
      Vg(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : CT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function uB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lB(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, nC(r.key), r);
  }
}
function cB(t, e, n) {
  return e && lB(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function fB(t, e, n) {
  return e = kf(e), sB(t, eC() ? Reflect.construct(e, n || [], kf(t).constructor) : e.apply(t, n));
}
function sB(t, e) {
  if (e && (so(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hB(t);
}
function hB(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function eC() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eC = function() {
    return !!t;
  })();
}
function kf(t) {
  return kf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kf(t);
}
function dB(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Kg(t, e);
}
function Kg(t, e) {
  return Kg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Kg(t, e);
}
function Vg(t, e, n) {
  return e = nC(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function nC(t) {
  var e = vB(t, "string");
  return so(e) == "symbol" ? e : e + "";
}
function vB(t, e) {
  if (so(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (so(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var PT = 1, pB = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    uB(this, e);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = fB(this, e, [].concat(o)), Vg(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Vg(n, "handleKeyDown", function(c) {
      if (c.key === "Escape") {
        var s, h, d, y;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (h = n.props.coordinate) === null || h === void 0 ? void 0 : h.x) !== null && s !== void 0 ? s : 0,
            y: (d = (y = n.props.coordinate) === null || y === void 0 ? void 0 : y.y) !== null && d !== void 0 ? d : 0
          }
        });
      }
    }), n;
  }
  return dB(e, t), cB(e, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > PT || Math.abs(r.height - this.state.lastBoundingBox.height) > PT) && this.setState({
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
      var r = this, o = this.props, l = o.active, c = o.allowEscapeViewBox, s = o.animationDuration, h = o.animationEasing, d = o.children, y = o.coordinate, p = o.hasPayload, g = o.isAnimationActive, b = o.offset, O = o.position, S = o.reverseDirection, x = o.useTranslate3d, T = o.viewBox, w = o.wrapperStyle, M = oB({
        allowEscapeViewBox: c,
        coordinate: y,
        offsetTopLeft: b,
        position: O,
        reverseDirection: S,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: x,
        viewBox: T
      }), j = M.cssClasses, A = M.cssProperties, E = DT(DT({
        transition: g && l ? "transform ".concat(s, "ms ").concat(h) : void 0
      }, A), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && l && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ B.createElement("div", {
          tabIndex: -1,
          className: j,
          style: E,
          ref: function(R) {
            r.wrapperNode = R;
          }
        }, d)
      );
    }
  }]);
})(rt.PureComponent), yB = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, ii = {
  isSsr: yB()
};
function ho(t) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ho(t);
}
function NT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function RT(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? NT(Object(n), !0).forEach(function(r) {
      _0(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : NT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function mB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gB(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, aC(r.key), r);
  }
}
function bB(t, e, n) {
  return e && gB(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function xB(t, e, n) {
  return e = Uf(e), SB(t, rC() ? Reflect.construct(e, n || [], Uf(t).constructor) : e.apply(t, n));
}
function SB(t, e) {
  if (e && (ho(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _B(t);
}
function _B(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function rC() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rC = function() {
    return !!t;
  })();
}
function Uf(t) {
  return Uf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Uf(t);
}
function OB(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Fg(t, e);
}
function Fg(t, e) {
  return Fg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Fg(t, e);
}
function _0(t, e, n) {
  return e = aC(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function aC(t) {
  var e = AB(t, "string");
  return ho(e) == "symbol" ? e : e + "";
}
function AB(t, e) {
  if (ho(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ho(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function wB(t) {
  return t.dataKey;
}
function TB(t, e) {
  return /* @__PURE__ */ B.isValidElement(t) ? /* @__PURE__ */ B.cloneElement(t, e) : typeof t == "function" ? /* @__PURE__ */ B.createElement(t, e) : /* @__PURE__ */ B.createElement(tB, e);
}
var dn = /* @__PURE__ */ (function(t) {
  function e() {
    return mB(this, e), xB(this, e, arguments);
  }
  return OB(e, t), bB(e, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.active, c = o.allowEscapeViewBox, s = o.animationDuration, h = o.animationEasing, d = o.content, y = o.coordinate, p = o.filterNull, g = o.isAnimationActive, b = o.offset, O = o.payload, S = o.payloadUniqBy, x = o.position, T = o.reverseDirection, w = o.useTranslate3d, M = o.viewBox, j = o.wrapperStyle, A = O ?? [];
      p && A.length && (A = Vj(O.filter(function(D) {
        return D.value != null && (D.hide !== !0 || r.props.includeHidden);
      }), S, wB));
      var E = A.length > 0;
      return /* @__PURE__ */ B.createElement(pB, {
        allowEscapeViewBox: c,
        animationDuration: s,
        animationEasing: h,
        isAnimationActive: g,
        active: l,
        coordinate: y,
        hasPayload: E,
        offset: b,
        position: x,
        reverseDirection: T,
        useTranslate3d: w,
        viewBox: M,
        wrapperStyle: j
      }, TB(d, RT(RT({}, this.props), {}, {
        payload: A
      })));
    }
  }]);
})(rt.PureComponent);
_0(dn, "displayName", "Tooltip");
_0(dn, "defaultProps", {
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
  isAnimationActive: !ii.isSsr,
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
var Mm, qT;
function EB() {
  if (qT) return Mm;
  qT = 1;
  var t = rr(), e = function() {
    return t.Date.now();
  };
  return Mm = e, Mm;
}
var jm, zT;
function MB() {
  if (zT) return jm;
  zT = 1;
  var t = /\s/;
  function e(n) {
    for (var r = n.length; r-- && t.test(n.charAt(r)); )
      ;
    return r;
  }
  return jm = e, jm;
}
var Cm, $T;
function jB() {
  if ($T) return Cm;
  $T = 1;
  var t = MB(), e = /^\s+/;
  function n(r) {
    return r && r.slice(0, t(r) + 1).replace(e, "");
  }
  return Cm = n, Cm;
}
var Dm, BT;
function iC() {
  if (BT) return Dm;
  BT = 1;
  var t = jB(), e = ba(), n = No(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt;
  function h(d) {
    if (typeof d == "number")
      return d;
    if (n(d))
      return r;
    if (e(d)) {
      var y = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = e(y) ? y + "" : y;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = t(d);
    var p = l.test(d);
    return p || c.test(d) ? s(d.slice(2), p ? 2 : 8) : o.test(d) ? r : +d;
  }
  return Dm = h, Dm;
}
var Pm, LT;
function CB() {
  if (LT) return Pm;
  LT = 1;
  var t = ba(), e = EB(), n = iC(), r = "Expected a function", o = Math.max, l = Math.min;
  function c(s, h, d) {
    var y, p, g, b, O, S, x = 0, T = !1, w = !1, M = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    h = n(h) || 0, t(d) && (T = !!d.leading, w = "maxWait" in d, g = w ? o(n(d.maxWait) || 0, h) : g, M = "trailing" in d ? !!d.trailing : M);
    function j(K) {
      var Z = y, V = p;
      return y = p = void 0, x = K, b = s.apply(V, Z), b;
    }
    function A(K) {
      return x = K, O = setTimeout(R, h), T ? j(K) : b;
    }
    function E(K) {
      var Z = K - S, V = K - x, N = h - Z;
      return w ? l(N, g - V) : N;
    }
    function D(K) {
      var Z = K - S, V = K - x;
      return S === void 0 || Z >= h || Z < 0 || w && V >= g;
    }
    function R() {
      var K = e();
      if (D(K))
        return z(K);
      O = setTimeout(R, E(K));
    }
    function z(K) {
      return O = void 0, M && y ? j(K) : (y = p = void 0, b);
    }
    function F() {
      O !== void 0 && clearTimeout(O), x = 0, y = S = p = O = void 0;
    }
    function k() {
      return O === void 0 ? b : z(e());
    }
    function $() {
      var K = e(), Z = D(K);
      if (y = arguments, p = this, S = K, Z) {
        if (O === void 0)
          return A(S);
        if (w)
          return clearTimeout(O), O = setTimeout(R, h), j(S);
      }
      return O === void 0 && (O = setTimeout(R, h)), b;
    }
    return $.cancel = F, $.flush = k, $;
  }
  return Pm = c, Pm;
}
var Nm, kT;
function DB() {
  if (kT) return Nm;
  kT = 1;
  var t = CB(), e = ba(), n = "Expected a function";
  function r(o, l, c) {
    var s = !0, h = !0;
    if (typeof o != "function")
      throw new TypeError(n);
    return e(c) && (s = "leading" in c ? !!c.leading : s, h = "trailing" in c ? !!c.trailing : h), t(o, l, {
      leading: s,
      maxWait: l,
      trailing: h
    });
  }
  return Nm = r, Nm;
}
var PB = DB();
const oC = /* @__PURE__ */ Qt(PB);
function ul(t) {
  "@babel/helpers - typeof";
  return ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ul(t);
}
function UT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function df(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? UT(Object(n), !0).forEach(function(r) {
      NB(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : UT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function NB(t, e, n) {
  return e = RB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function RB(t) {
  var e = qB(t, "string");
  return ul(e) == "symbol" ? e : e + "";
}
function qB(t, e) {
  if (ul(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ul(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function zB(t, e) {
  return kB(t) || LB(t, e) || BB(t, e) || $B();
}
function $B() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BB(t, e) {
  if (t) {
    if (typeof t == "string") return HT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return HT(t, e);
  }
}
function HT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function LB(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function kB(t) {
  if (Array.isArray(t)) return t;
}
var vf = /* @__PURE__ */ rt.forwardRef(function(t, e) {
  var n = t.aspect, r = t.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, l = t.width, c = l === void 0 ? "100%" : l, s = t.height, h = s === void 0 ? "100%" : s, d = t.minWidth, y = d === void 0 ? 0 : d, p = t.minHeight, g = t.maxHeight, b = t.children, O = t.debounce, S = O === void 0 ? 0 : O, x = t.id, T = t.className, w = t.onResize, M = t.style, j = M === void 0 ? {} : M, A = rt.useRef(null), E = rt.useRef();
  E.current = w, rt.useImperativeHandle(e, function() {
    return Object.defineProperty(A.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), A.current;
      },
      configurable: !0
    });
  });
  var D = rt.useState({
    containerWidth: o.width,
    containerHeight: o.height
  }), R = zB(D, 2), z = R[0], F = R[1], k = rt.useCallback(function(K, Z) {
    F(function(V) {
      var N = Math.round(K), I = Math.round(Z);
      return V.containerWidth === N && V.containerHeight === I ? V : {
        containerWidth: N,
        containerHeight: I
      };
    });
  }, []);
  rt.useEffect(function() {
    var K = function(ot) {
      var lt, P = ot[0].contentRect, U = P.width, et = P.height;
      k(U, et), (lt = E.current) === null || lt === void 0 || lt.call(E, U, et);
    };
    S > 0 && (K = oC(K, S, {
      trailing: !0,
      leading: !1
    }));
    var Z = new ResizeObserver(K), V = A.current.getBoundingClientRect(), N = V.width, I = V.height;
    return k(N, I), Z.observe(A.current), function() {
      Z.disconnect();
    };
  }, [k, S]);
  var $ = rt.useMemo(function() {
    var K = z.containerWidth, Z = z.containerHeight;
    if (K < 0 || Z < 0)
      return null;
    Dr(Ya(c) || Ya(h), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, c, h), Dr(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var V = Ya(c) ? K : c, N = Ya(h) ? Z : h;
    n && n > 0 && (V ? N = V / n : N && (V = N * n), g && N > g && (N = g)), Dr(V > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, V, N, c, h, y, p, n);
    var I = !Array.isArray(b) && Cr(b.type).endsWith("Chart");
    return B.Children.map(b, function(W) {
      return /* @__PURE__ */ B.isValidElement(W) ? /* @__PURE__ */ rt.cloneElement(W, df({
        width: V,
        height: N
      }, I ? {
        style: df({
          height: "100%",
          width: "100%",
          maxHeight: N,
          maxWidth: V
        }, W.props.style)
      } : {})) : W;
    });
  }, [n, b, h, g, p, y, z, c]);
  return /* @__PURE__ */ B.createElement("div", {
    id: x ? "".concat(x) : void 0,
    className: qt("recharts-responsive-container", T),
    style: df(df({}, j), {}, {
      width: c,
      height: h,
      minWidth: y,
      minHeight: p,
      maxHeight: g
    }),
    ref: A
  }, $);
}), O0 = function(e) {
  return null;
};
O0.displayName = "Cell";
function ll(t) {
  "@babel/helpers - typeof";
  return ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ll(t);
}
function IT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? IT(Object(n), !0).forEach(function(r) {
      UB(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : IT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function UB(t, e, n) {
  return e = HB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function HB(t) {
  var e = IB(t, "string");
  return ll(e) == "symbol" ? e : e + "";
}
function IB(t, e) {
  if (ll(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ll(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Fi = {
  widthCache: {},
  cacheCount: 0
}, GB = 2e3, YB = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, GT = "recharts_measurement_span";
function XB(t) {
  var e = Zg({}, t);
  return Object.keys(e).forEach(function(n) {
    e[n] || delete e[n];
  }), e;
}
var Qu = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (e == null || ii.isSsr)
    return {
      width: 0,
      height: 0
    };
  var r = XB(n), o = JSON.stringify({
    text: e,
    copyStyle: r
  });
  if (Fi.widthCache[o])
    return Fi.widthCache[o];
  try {
    var l = document.getElementById(GT);
    l || (l = document.createElement("span"), l.setAttribute("id", GT), l.setAttribute("aria-hidden", "true"), document.body.appendChild(l));
    var c = Zg(Zg({}, YB), r);
    Object.assign(l.style, c), l.textContent = "".concat(e);
    var s = l.getBoundingClientRect(), h = {
      width: s.width,
      height: s.height
    };
    return Fi.widthCache[o] = h, ++Fi.cacheCount > GB && (Fi.cacheCount = 0, Fi.widthCache = {}), h;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, KB = function(e) {
  return {
    top: e.top + window.scrollY - document.documentElement.clientTop,
    left: e.left + window.scrollX - document.documentElement.clientLeft
  };
};
function cl(t) {
  "@babel/helpers - typeof";
  return cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, cl(t);
}
function Hf(t, e) {
  return QB(t) || ZB(t, e) || FB(t, e) || VB();
}
function VB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FB(t, e) {
  if (t) {
    if (typeof t == "string") return YT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return YT(t, e);
  }
}
function YT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ZB(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        h = !1;
      } else for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function QB(t) {
  if (Array.isArray(t)) return t;
}
function WB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function XT(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, t8(r.key), r);
  }
}
function JB(t, e, n) {
  return e && XT(t.prototype, e), n && XT(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function t8(t) {
  var e = e8(t, "string");
  return cl(e) == "symbol" ? e : e + "";
}
function e8(t, e) {
  if (cl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (cl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var KT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, VT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, n8 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, r8 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, uC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, a8 = Object.keys(uC), Ji = "NaN";
function i8(t, e) {
  return t * uC[e];
}
var pf = /* @__PURE__ */ (function() {
  function t(e, n) {
    WB(this, t), this.num = e, this.unit = n, this.num = e, this.unit = n, Number.isNaN(e) && (this.unit = ""), n !== "" && !n8.test(n) && (this.num = NaN, this.unit = ""), a8.includes(n) && (this.num = i8(e, n), this.unit = "px");
  }
  return JB(t, [{
    key: "add",
    value: function(n) {
      return this.unit !== n.unit ? new t(NaN, "") : new t(this.num + n.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(n) {
      return this.unit !== n.unit ? new t(NaN, "") : new t(this.num - n.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(n) {
      return this.unit !== "" && n.unit !== "" && this.unit !== n.unit ? new t(NaN, "") : new t(this.num * n.num, this.unit || n.unit);
    }
  }, {
    key: "divide",
    value: function(n) {
      return this.unit !== "" && n.unit !== "" && this.unit !== n.unit ? new t(NaN, "") : new t(this.num / n.num, this.unit || n.unit);
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
      var r, o = (r = r8.exec(n)) !== null && r !== void 0 ? r : [], l = Hf(o, 3), c = l[1], s = l[2];
      return new t(parseFloat(c), s ?? "");
    }
  }]);
})();
function lC(t) {
  if (t.includes(Ji))
    return Ji;
  for (var e = t; e.includes("*") || e.includes("/"); ) {
    var n, r = (n = KT.exec(e)) !== null && n !== void 0 ? n : [], o = Hf(r, 4), l = o[1], c = o[2], s = o[3], h = pf.parse(l ?? ""), d = pf.parse(s ?? ""), y = c === "*" ? h.multiply(d) : h.divide(d);
    if (y.isNaN())
      return Ji;
    e = e.replace(KT, y.toString());
  }
  for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
    var p, g = (p = VT.exec(e)) !== null && p !== void 0 ? p : [], b = Hf(g, 4), O = b[1], S = b[2], x = b[3], T = pf.parse(O ?? ""), w = pf.parse(x ?? ""), M = S === "+" ? T.add(w) : T.subtract(w);
    if (M.isNaN())
      return Ji;
    e = e.replace(VT, M.toString());
  }
  return e;
}
var FT = /\(([^()]*)\)/;
function o8(t) {
  for (var e = t; e.includes("("); ) {
    var n = FT.exec(e), r = Hf(n, 2), o = r[1];
    e = e.replace(FT, lC(o));
  }
  return e;
}
function u8(t) {
  var e = t.replace(/\s+/g, "");
  return e = o8(e), e = lC(e), e;
}
function l8(t) {
  try {
    return u8(t);
  } catch {
    return Ji;
  }
}
function Rm(t) {
  var e = l8(t.slice(5, -1));
  return e === Ji ? "" : e;
}
var c8 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], f8 = ["dx", "dy", "angle", "className", "breakAll"];
function Qg() {
  return Qg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Qg.apply(this, arguments);
}
function ZT(t, e) {
  if (t == null) return {};
  var n = s8(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function s8(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function QT(t, e) {
  return p8(t) || v8(t, e) || d8(t, e) || h8();
}
function h8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d8(t, e) {
  if (t) {
    if (typeof t == "string") return WT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WT(t, e);
  }
}
function WT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function v8(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        h = !1;
      } else for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function p8(t) {
  if (Array.isArray(t)) return t;
}
var cC = /[ \f\n\r\t\v\u2028\u2029]+/, fC = function(e) {
  var n = e.children, r = e.breakAll, o = e.style;
  try {
    var l = [];
    Mt(n) || (r ? l = n.toString().split("") : l = n.toString().split(cC));
    var c = l.map(function(h) {
      return {
        word: h,
        width: Qu(h, o).width
      };
    }), s = r ? 0 : Qu(" ", o).width;
    return {
      wordsWithComputedWidth: c,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, y8 = function(e, n, r, o, l) {
  var c = e.maxLines, s = e.children, h = e.style, d = e.breakAll, y = st(c), p = s, g = function() {
    var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return V.reduce(function(N, I) {
      var W = I.word, ot = I.width, lt = N[N.length - 1];
      if (lt && (o == null || l || lt.width + ot + r < Number(o)))
        lt.words.push(W), lt.width += ot + r;
      else {
        var P = {
          words: [W],
          width: ot
        };
        N.push(P);
      }
      return N;
    }, []);
  }, b = g(n), O = function(V) {
    return V.reduce(function(N, I) {
      return N.width > I.width ? N : I;
    });
  };
  if (!y)
    return b;
  for (var S = "…", x = function(V) {
    var N = p.slice(0, V), I = fC({
      breakAll: d,
      style: h,
      children: N + S
    }).wordsWithComputedWidth, W = g(I), ot = W.length > c || O(W).width > Number(o);
    return [ot, W];
  }, T = 0, w = p.length - 1, M = 0, j; T <= w && M <= p.length - 1; ) {
    var A = Math.floor((T + w) / 2), E = A - 1, D = x(E), R = QT(D, 2), z = R[0], F = R[1], k = x(A), $ = QT(k, 1), K = $[0];
    if (!z && !K && (T = A + 1), z && K && (w = A - 1), !z && K) {
      j = F;
      break;
    }
    M++;
  }
  return j || b;
}, JT = function(e) {
  var n = Mt(e) ? [] : e.toString().split(cC);
  return [{
    words: n
  }];
}, m8 = function(e) {
  var n = e.width, r = e.scaleToFit, o = e.children, l = e.style, c = e.breakAll, s = e.maxLines;
  if ((n || r) && !ii.isSsr) {
    var h, d, y = fC({
      breakAll: c,
      children: o,
      style: l
    });
    if (y) {
      var p = y.wordsWithComputedWidth, g = y.spaceWidth;
      h = p, d = g;
    } else
      return JT(o);
    return y8({
      breakAll: c,
      children: o,
      maxLines: s,
      style: l
    }, h, d, n, r);
  }
  return JT(o);
}, tE = "#808080", If = function(e) {
  var n = e.x, r = n === void 0 ? 0 : n, o = e.y, l = o === void 0 ? 0 : o, c = e.lineHeight, s = c === void 0 ? "1em" : c, h = e.capHeight, d = h === void 0 ? "0.71em" : h, y = e.scaleToFit, p = y === void 0 ? !1 : y, g = e.textAnchor, b = g === void 0 ? "start" : g, O = e.verticalAnchor, S = O === void 0 ? "end" : O, x = e.fill, T = x === void 0 ? tE : x, w = ZT(e, c8), M = rt.useMemo(function() {
    return m8({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: p,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, p, w.style, w.width]), j = w.dx, A = w.dy, E = w.angle, D = w.className, R = w.breakAll, z = ZT(w, f8);
  if (!_e(r) || !_e(l))
    return null;
  var F = r + (st(j) ? j : 0), k = l + (st(A) ? A : 0), $;
  switch (S) {
    case "start":
      $ = Rm("calc(".concat(d, ")"));
      break;
    case "middle":
      $ = Rm("calc(".concat((M.length - 1) / 2, " * -").concat(s, " + (").concat(d, " / 2))"));
      break;
    default:
      $ = Rm("calc(".concat(M.length - 1, " * -").concat(s, ")"));
      break;
  }
  var K = [];
  if (p) {
    var Z = M[0].width, V = w.width;
    K.push("scale(".concat((st(V) ? V / Z : 1) / Z, ")"));
  }
  return E && K.push("rotate(".concat(E, ", ").concat(F, ", ").concat(k, ")")), K.length && (z.transform = K.join(" ")), /* @__PURE__ */ B.createElement("text", Qg({}, Et(z, !0), {
    x: F,
    y: k,
    className: qt("recharts-text", D),
    textAnchor: b,
    fill: T.includes("url") ? tE : T
  }), M.map(function(N, I) {
    var W = N.words.join(R ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ B.createElement("tspan", {
        x: F,
        dy: I === 0 ? $ : s,
        key: "".concat(W, "-").concat(I)
      }, W)
    );
  }));
};
function ga(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function g8(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function A0(t) {
  let e, n, r;
  t.length !== 2 ? (e = ga, n = (s, h) => ga(t(s), h), r = (s, h) => t(s) - h) : (e = t === ga || t === g8 ? t : b8, n = t, r = t);
  function o(s, h, d = 0, y = s.length) {
    if (d < y) {
      if (e(h, h) !== 0) return y;
      do {
        const p = d + y >>> 1;
        n(s[p], h) < 0 ? d = p + 1 : y = p;
      } while (d < y);
    }
    return d;
  }
  function l(s, h, d = 0, y = s.length) {
    if (d < y) {
      if (e(h, h) !== 0) return y;
      do {
        const p = d + y >>> 1;
        n(s[p], h) <= 0 ? d = p + 1 : y = p;
      } while (d < y);
    }
    return d;
  }
  function c(s, h, d = 0, y = s.length) {
    const p = o(s, h, d, y - 1);
    return p > d && r(s[p - 1], h) > -r(s[p], h) ? p - 1 : p;
  }
  return { left: o, center: c, right: l };
}
function b8() {
  return 0;
}
function sC(t) {
  return t === null ? NaN : +t;
}
function* x8(t, e) {
  for (let n of t)
    n != null && (n = +n) >= n && (yield n);
}
const S8 = A0(ga), kl = S8.right;
A0(sC).center;
class eE extends Map {
  constructor(e, n = A8) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, o] of e) this.set(r, o);
  }
  get(e) {
    return super.get(nE(this, e));
  }
  has(e) {
    return super.has(nE(this, e));
  }
  set(e, n) {
    return super.set(_8(this, e), n);
  }
  delete(e) {
    return super.delete(O8(this, e));
  }
}
function nE({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function _8({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function O8({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function A8(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
function w8(t = ga) {
  if (t === ga) return hC;
  if (typeof t != "function") throw new TypeError("compare is not a function");
  return (e, n) => {
    const r = t(e, n);
    return r || r === 0 ? r : (t(n, n) === 0) - (t(e, e) === 0);
  };
}
function hC(t, e) {
  return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0);
}
const T8 = Math.sqrt(50), E8 = Math.sqrt(10), M8 = Math.sqrt(2);
function Gf(t, e, n) {
  const r = (e - t) / Math.max(0, n), o = Math.floor(Math.log10(r)), l = r / Math.pow(10, o), c = l >= T8 ? 10 : l >= E8 ? 5 : l >= M8 ? 2 : 1;
  let s, h, d;
  return o < 0 ? (d = Math.pow(10, -o) / c, s = Math.round(t * d), h = Math.round(e * d), s / d < t && ++s, h / d > e && --h, d = -d) : (d = Math.pow(10, o) * c, s = Math.round(t / d), h = Math.round(e / d), s * d < t && ++s, h * d > e && --h), h < s && 0.5 <= n && n < 2 ? Gf(t, e, n * 2) : [s, h, d];
}
function Wg(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [o, l, c] = r ? Gf(e, t, n) : Gf(t, e, n);
  if (!(l >= o)) return [];
  const s = l - o + 1, h = new Array(s);
  if (r)
    if (c < 0) for (let d = 0; d < s; ++d) h[d] = (l - d) / -c;
    else for (let d = 0; d < s; ++d) h[d] = (l - d) * c;
  else if (c < 0) for (let d = 0; d < s; ++d) h[d] = (o + d) / -c;
  else for (let d = 0; d < s; ++d) h[d] = (o + d) * c;
  return h;
}
function Jg(t, e, n) {
  return e = +e, t = +t, n = +n, Gf(t, e, n)[2];
}
function tb(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, o = r ? Jg(e, t, n) : Jg(t, e, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function rE(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function aE(t, e) {
  let n;
  for (const r of t)
    r != null && (n > r || n === void 0 && r >= r) && (n = r);
  return n;
}
function dC(t, e, n = 0, r = 1 / 0, o) {
  if (e = Math.floor(e), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(t.length - 1, r)), !(n <= e && e <= r)) return t;
  for (o = o === void 0 ? hC : w8(o); r > n; ) {
    if (r - n > 600) {
      const h = r - n + 1, d = e - n + 1, y = Math.log(h), p = 0.5 * Math.exp(2 * y / 3), g = 0.5 * Math.sqrt(y * p * (h - p) / h) * (d - h / 2 < 0 ? -1 : 1), b = Math.max(n, Math.floor(e - d * p / h + g)), O = Math.min(r, Math.floor(e + (h - d) * p / h + g));
      dC(t, e, b, O, o);
    }
    const l = t[e];
    let c = n, s = r;
    for ($u(t, n, e), o(t[r], l) > 0 && $u(t, n, r); c < s; ) {
      for ($u(t, c, s), ++c, --s; o(t[c], l) < 0; ) ++c;
      for (; o(t[s], l) > 0; ) --s;
    }
    o(t[n], l) === 0 ? $u(t, n, s) : (++s, $u(t, s, r)), s <= e && (n = s + 1), e <= s && (r = s - 1);
  }
  return t;
}
function $u(t, e, n) {
  const r = t[e];
  t[e] = t[n], t[n] = r;
}
function j8(t, e, n) {
  if (t = Float64Array.from(x8(t)), !(!(r = t.length) || isNaN(e = +e))) {
    if (e <= 0 || r < 2) return aE(t);
    if (e >= 1) return rE(t);
    var r, o = (r - 1) * e, l = Math.floor(o), c = rE(dC(t, l).subarray(0, l + 1)), s = aE(t.subarray(l + 1));
    return c + (s - c) * (o - l);
  }
}
function C8(t, e, n = sC) {
  if (!(!(r = t.length) || isNaN(e = +e))) {
    if (e <= 0 || r < 2) return +n(t[0], 0, t);
    if (e >= 1) return +n(t[r - 1], r - 1, t);
    var r, o = (r - 1) * e, l = Math.floor(o), c = +n(t[l], l, t), s = +n(t[l + 1], l + 1, t);
    return c + (s - c) * (o - l);
  }
}
function D8(t, e, n) {
  t = +t, e = +e, n = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +n;
  for (var r = -1, o = Math.max(0, Math.ceil((e - t) / n)) | 0, l = new Array(o); ++r < o; )
    l[r] = t + r * n;
  return l;
}
function Pn(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Lr(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t), typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
const eb = Symbol("implicit");
function w0() {
  var t = new eE(), e = [], n = [], r = eb;
  function o(l) {
    let c = t.get(l);
    if (c === void 0) {
      if (r !== eb) return r;
      t.set(l, c = e.push(l) - 1);
    }
    return n[c % n.length];
  }
  return o.domain = function(l) {
    if (!arguments.length) return e.slice();
    e = [], t = new eE();
    for (const c of l)
      t.has(c) || t.set(c, e.push(c) - 1);
    return o;
  }, o.range = function(l) {
    return arguments.length ? (n = Array.from(l), o) : n.slice();
  }, o.unknown = function(l) {
    return arguments.length ? (r = l, o) : r;
  }, o.copy = function() {
    return w0(e, n).unknown(r);
  }, Pn.apply(o, arguments), o;
}
function fl() {
  var t = w0().unknown(void 0), e = t.domain, n = t.range, r = 0, o = 1, l, c, s = !1, h = 0, d = 0, y = 0.5;
  delete t.unknown;
  function p() {
    var g = e().length, b = o < r, O = b ? o : r, S = b ? r : o;
    l = (S - O) / Math.max(1, g - h + d * 2), s && (l = Math.floor(l)), O += (S - O - l * (g - h)) * y, c = l * (1 - h), s && (O = Math.round(O), c = Math.round(c));
    var x = D8(g).map(function(T) {
      return O + l * T;
    });
    return n(b ? x.reverse() : x);
  }
  return t.domain = function(g) {
    return arguments.length ? (e(g), p()) : e();
  }, t.range = function(g) {
    return arguments.length ? ([r, o] = g, r = +r, o = +o, p()) : [r, o];
  }, t.rangeRound = function(g) {
    return [r, o] = g, r = +r, o = +o, s = !0, p();
  }, t.bandwidth = function() {
    return c;
  }, t.step = function() {
    return l;
  }, t.round = function(g) {
    return arguments.length ? (s = !!g, p()) : s;
  }, t.padding = function(g) {
    return arguments.length ? (h = Math.min(1, d = +g), p()) : h;
  }, t.paddingInner = function(g) {
    return arguments.length ? (h = Math.min(1, g), p()) : h;
  }, t.paddingOuter = function(g) {
    return arguments.length ? (d = +g, p()) : d;
  }, t.align = function(g) {
    return arguments.length ? (y = Math.max(0, Math.min(1, g)), p()) : y;
  }, t.copy = function() {
    return fl(e(), [r, o]).round(s).paddingInner(h).paddingOuter(d).align(y);
  }, Pn.apply(p(), arguments);
}
function vC(t) {
  var e = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
    return vC(e());
  }, t;
}
function Wu() {
  return vC(fl.apply(null, arguments).paddingInner(1));
}
function T0(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function pC(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ul() {
}
var sl = 0.7, Yf = 1 / sl, ao = "\\s*([+-]?\\d+)\\s*", hl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", P8 = /^#([0-9a-f]{3,8})$/, N8 = new RegExp(`^rgb\\(${ao},${ao},${ao}\\)$`), R8 = new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`), q8 = new RegExp(`^rgba\\(${ao},${ao},${ao},${hl}\\)$`), z8 = new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${hl}\\)$`), $8 = new RegExp(`^hsl\\(${hl},${Wn},${Wn}\\)$`), B8 = new RegExp(`^hsla\\(${hl},${Wn},${Wn},${hl}\\)$`), iE = {
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
T0(Ul, dl, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: oE,
  // Deprecated! Use color.formatHex.
  formatHex: oE,
  formatHex8: L8,
  formatHsl: k8,
  formatRgb: uE,
  toString: uE
});
function oE() {
  return this.rgb().formatHex();
}
function L8() {
  return this.rgb().formatHex8();
}
function k8() {
  return yC(this).formatHsl();
}
function uE() {
  return this.rgb().formatRgb();
}
function dl(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = P8.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? lE(e) : n === 3 ? new We(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? yf(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? yf(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = N8.exec(t)) ? new We(e[1], e[2], e[3], 1) : (e = R8.exec(t)) ? new We(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = q8.exec(t)) ? yf(e[1], e[2], e[3], e[4]) : (e = z8.exec(t)) ? yf(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = $8.exec(t)) ? sE(e[1], e[2] / 100, e[3] / 100, 1) : (e = B8.exec(t)) ? sE(e[1], e[2] / 100, e[3] / 100, e[4]) : iE.hasOwnProperty(t) ? lE(iE[t]) : t === "transparent" ? new We(NaN, NaN, NaN, 0) : null;
}
function lE(t) {
  return new We(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function yf(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new We(t, e, n, r);
}
function U8(t) {
  return t instanceof Ul || (t = dl(t)), t ? (t = t.rgb(), new We(t.r, t.g, t.b, t.opacity)) : new We();
}
function nb(t, e, n, r) {
  return arguments.length === 1 ? U8(t) : new We(t, e, n, r ?? 1);
}
function We(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
T0(We, nb, pC(Ul, {
  brighter(t) {
    return t = t == null ? Yf : Math.pow(Yf, t), new We(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? sl : Math.pow(sl, t), new We(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new We(Za(this.r), Za(this.g), Za(this.b), Xf(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cE,
  // Deprecated! Use color.formatHex.
  formatHex: cE,
  formatHex8: H8,
  formatRgb: fE,
  toString: fE
}));
function cE() {
  return `#${Xa(this.r)}${Xa(this.g)}${Xa(this.b)}`;
}
function H8() {
  return `#${Xa(this.r)}${Xa(this.g)}${Xa(this.b)}${Xa((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fE() {
  const t = Xf(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Za(this.r)}, ${Za(this.g)}, ${Za(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Xf(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Za(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Xa(t) {
  return t = Za(t), (t < 16 ? "0" : "") + t.toString(16);
}
function sE(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Un(t, e, n, r);
}
function yC(t) {
  if (t instanceof Un) return new Un(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ul || (t = dl(t)), !t) return new Un();
  if (t instanceof Un) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), l = Math.max(e, n, r), c = NaN, s = l - o, h = (l + o) / 2;
  return s ? (e === l ? c = (n - r) / s + (n < r) * 6 : n === l ? c = (r - e) / s + 2 : c = (e - n) / s + 4, s /= h < 0.5 ? l + o : 2 - l - o, c *= 60) : s = h > 0 && h < 1 ? 0 : c, new Un(c, s, h, t.opacity);
}
function I8(t, e, n, r) {
  return arguments.length === 1 ? yC(t) : new Un(t, e, n, r ?? 1);
}
function Un(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
T0(Un, I8, pC(Ul, {
  brighter(t) {
    return t = t == null ? Yf : Math.pow(Yf, t), new Un(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? sl : Math.pow(sl, t), new Un(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new We(
      qm(t >= 240 ? t - 240 : t + 120, o, r),
      qm(t, o, r),
      qm(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Un(hE(this.h), mf(this.s), mf(this.l), Xf(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Xf(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${hE(this.h)}, ${mf(this.s) * 100}%, ${mf(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function hE(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function mf(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function qm(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const E0 = (t) => () => t;
function G8(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Y8(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function X8(t) {
  return (t = +t) == 1 ? mC : function(e, n) {
    return n - e ? Y8(e, n, t) : E0(isNaN(e) ? n : e);
  };
}
function mC(t, e) {
  var n = e - t;
  return n ? G8(t, n) : E0(isNaN(t) ? e : t);
}
const dE = (function t(e) {
  var n = X8(e);
  function r(o, l) {
    var c = n((o = nb(o)).r, (l = nb(l)).r), s = n(o.g, l.g), h = n(o.b, l.b), d = mC(o.opacity, l.opacity);
    return function(y) {
      return o.r = c(y), o.g = s(y), o.b = h(y), o.opacity = d(y), o + "";
    };
  }
  return r.gamma = t, r;
})(1);
function K8(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(l) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - l) + e[o] * l;
    return r;
  };
}
function V8(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function F8(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), l = new Array(n), c;
  for (c = 0; c < r; ++c) o[c] = Bo(t[c], e[c]);
  for (; c < n; ++c) l[c] = e[c];
  return function(s) {
    for (c = 0; c < r; ++c) l[c] = o[c](s);
    return l;
  };
}
function Z8(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Kf(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Q8(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = Bo(t[o], e[o]) : r[o] = e[o];
  return function(l) {
    for (o in n) r[o] = n[o](l);
    return r;
  };
}
var rb = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, zm = new RegExp(rb.source, "g");
function W8(t) {
  return function() {
    return t;
  };
}
function J8(t) {
  return function(e) {
    return t(e) + "";
  };
}
function t4(t, e) {
  var n = rb.lastIndex = zm.lastIndex = 0, r, o, l, c = -1, s = [], h = [];
  for (t = t + "", e = e + ""; (r = rb.exec(t)) && (o = zm.exec(e)); )
    (l = o.index) > n && (l = e.slice(n, l), s[c] ? s[c] += l : s[++c] = l), (r = r[0]) === (o = o[0]) ? s[c] ? s[c] += o : s[++c] = o : (s[++c] = null, h.push({ i: c, x: Kf(r, o) })), n = zm.lastIndex;
  return n < e.length && (l = e.slice(n), s[c] ? s[c] += l : s[++c] = l), s.length < 2 ? h[0] ? J8(h[0].x) : W8(e) : (e = h.length, function(d) {
    for (var y = 0, p; y < e; ++y) s[(p = h[y]).i] = p.x(d);
    return s.join("");
  });
}
function Bo(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? E0(e) : (n === "number" ? Kf : n === "string" ? (r = dl(e)) ? (e = r, dE) : t4 : e instanceof dl ? dE : e instanceof Date ? Z8 : V8(e) ? K8 : Array.isArray(e) ? F8 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Q8 : Kf)(t, e);
}
function M0(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function e4(t, e) {
  e === void 0 && (e = t, t = Bo);
  for (var n = 0, r = e.length - 1, o = e[0], l = new Array(r < 0 ? 0 : r); n < r; ) l[n] = t(o, o = e[++n]);
  return function(c) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(c *= r)));
    return l[s](c - s);
  };
}
function n4(t) {
  return function() {
    return t;
  };
}
function Vf(t) {
  return +t;
}
var vE = [0, 1];
function Ie(t) {
  return t;
}
function ab(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : n4(isNaN(e) ? NaN : 0.5);
}
function r4(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function a4(t, e, n) {
  var r = t[0], o = t[1], l = e[0], c = e[1];
  return o < r ? (r = ab(o, r), l = n(c, l)) : (r = ab(r, o), l = n(l, c)), function(s) {
    return l(r(s));
  };
}
function i4(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, o = new Array(r), l = new Array(r), c = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < r; )
    o[c] = ab(t[c], t[c + 1]), l[c] = n(e[c], e[c + 1]);
  return function(s) {
    var h = kl(t, s, 1, r) - 1;
    return l[h](o[h](s));
  };
}
function Hl(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Hs() {
  var t = vE, e = vE, n = Bo, r, o, l, c = Ie, s, h, d;
  function y() {
    var g = Math.min(t.length, e.length);
    return c !== Ie && (c = r4(t[0], t[g - 1])), s = g > 2 ? i4 : a4, h = d = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? l : (h || (h = s(t.map(r), e, n)))(r(c(g)));
  }
  return p.invert = function(g) {
    return c(o((d || (d = s(e, t.map(r), Kf)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (t = Array.from(g, Vf), y()) : t.slice();
  }, p.range = function(g) {
    return arguments.length ? (e = Array.from(g), y()) : e.slice();
  }, p.rangeRound = function(g) {
    return e = Array.from(g), n = M0, y();
  }, p.clamp = function(g) {
    return arguments.length ? (c = g ? !0 : Ie, y()) : c !== Ie;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, y()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (l = g, p) : l;
  }, function(g, b) {
    return r = g, o = b, y();
  };
}
function j0() {
  return Hs()(Ie, Ie);
}
function o4(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ff(t, e) {
  if (!isFinite(t) || t === 0) return null;
  var n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"), r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function vo(t) {
  return t = Ff(Math.abs(t)), t ? t[1] : NaN;
}
function u4(t, e) {
  return function(n, r) {
    for (var o = n.length, l = [], c = 0, s = t[0], h = 0; o > 0 && s > 0 && (h + s + 1 > r && (s = Math.max(1, r - h)), l.push(n.substring(o -= s, o + s)), !((h += s + 1) > r)); )
      s = t[c = (c + 1) % t.length];
    return l.reverse().join(e);
  };
}
function l4(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var c4 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vl(t) {
  if (!(e = c4.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new C0({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
vl.prototype = C0.prototype;
function C0(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
C0.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function f4(t) {
  t: for (var e = t.length, n = 1, r = -1, o; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        r === 0 && (r = n), o = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(o + 1) : t;
}
var Zf;
function s4(t, e) {
  var n = Ff(t, e);
  if (!n) return Zf = void 0, t.toPrecision(e);
  var r = n[0], o = n[1], l = o - (Zf = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, c = r.length;
  return l === c ? r : l > c ? r + new Array(l - c + 1).join("0") : l > 0 ? r.slice(0, l) + "." + r.slice(l) : "0." + new Array(1 - l).join("0") + Ff(t, Math.max(0, e + l - 1))[0];
}
function pE(t, e) {
  var n = Ff(t, e);
  if (!n) return t + "";
  var r = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
}
const yE = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: o4,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => pE(t * 100, e),
  r: pE,
  s: s4,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function mE(t) {
  return t;
}
var gE = Array.prototype.map, bE = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function h4(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? mE : u4(gE.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? mE : l4(gE.call(t.numerals, String)), c = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", h = t.nan === void 0 ? "NaN" : t.nan + "";
  function d(p, g) {
    p = vl(p);
    var b = p.fill, O = p.align, S = p.sign, x = p.symbol, T = p.zero, w = p.width, M = p.comma, j = p.precision, A = p.trim, E = p.type;
    E === "n" ? (M = !0, E = "g") : yE[E] || (j === void 0 && (j = 12), A = !0, E = "g"), (T || b === "0" && O === "=") && (T = !0, b = "0", O = "=");
    var D = (g && g.prefix !== void 0 ? g.prefix : "") + (x === "$" ? n : x === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : ""), R = (x === "$" ? r : /[%p]/.test(E) ? c : "") + (g && g.suffix !== void 0 ? g.suffix : ""), z = yE[E], F = /[defgprs%]/.test(E);
    j = j === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j));
    function k($) {
      var K = D, Z = R, V, N, I;
      if (E === "c")
        Z = z($) + Z, $ = "";
      else {
        $ = +$;
        var W = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? h : z(Math.abs($), j), A && ($ = f4($)), W && +$ == 0 && S !== "+" && (W = !1), K = (W ? S === "(" ? S : s : S === "-" || S === "(" ? "" : S) + K, Z = (E === "s" && !isNaN($) && Zf !== void 0 ? bE[8 + Zf / 3] : "") + Z + (W && S === "(" ? ")" : ""), F) {
          for (V = -1, N = $.length; ++V < N; )
            if (I = $.charCodeAt(V), 48 > I || I > 57) {
              Z = (I === 46 ? o + $.slice(V + 1) : $.slice(V)) + Z, $ = $.slice(0, V);
              break;
            }
        }
      }
      M && !T && ($ = e($, 1 / 0));
      var ot = K.length + $.length + Z.length, lt = ot < w ? new Array(w - ot + 1).join(b) : "";
      switch (M && T && ($ = e(lt + $, lt.length ? w - Z.length : 1 / 0), lt = ""), O) {
        case "<":
          $ = K + $ + Z + lt;
          break;
        case "=":
          $ = K + lt + $ + Z;
          break;
        case "^":
          $ = lt.slice(0, ot = lt.length >> 1) + K + $ + Z + lt.slice(ot);
          break;
        default:
          $ = lt + K + $ + Z;
          break;
      }
      return l($);
    }
    return k.toString = function() {
      return p + "";
    }, k;
  }
  function y(p, g) {
    var b = Math.max(-8, Math.min(8, Math.floor(vo(g) / 3))) * 3, O = Math.pow(10, -b), S = d((p = vl(p), p.type = "f", p), { suffix: bE[8 + b / 3] });
    return function(x) {
      return S(O * x);
    };
  }
  return {
    format: d,
    formatPrefix: y
  };
}
var gf, D0, gC;
d4({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function d4(t) {
  return gf = h4(t), D0 = gf.format, gC = gf.formatPrefix, gf;
}
function v4(t) {
  return Math.max(0, -vo(Math.abs(t)));
}
function p4(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vo(e) / 3))) * 3 - vo(Math.abs(t)));
}
function y4(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, vo(e) - vo(t)) + 1;
}
function bC(t, e, n, r) {
  var o = tb(t, e, n), l;
  switch (r = vl(r ?? ",f"), r.type) {
    case "s": {
      var c = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(l = p4(o, c)) && (r.precision = l), gC(r, c);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(l = y4(o, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = l - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(l = v4(o)) && (r.precision = l - (r.type === "%") * 2);
      break;
    }
  }
  return D0(r);
}
function Sa(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Wg(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var o = e();
    return bC(o[0], o[o.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), o = 0, l = r.length - 1, c = r[o], s = r[l], h, d, y = 10;
    for (s < c && (d = c, c = s, s = d, d = o, o = l, l = d); y-- > 0; ) {
      if (d = Jg(c, s, n), d === h)
        return r[o] = c, r[l] = s, e(r);
      if (d > 0)
        c = Math.floor(c / d) * d, s = Math.ceil(s / d) * d;
      else if (d < 0)
        c = Math.ceil(c * d) / d, s = Math.floor(s * d) / d;
      else
        break;
      h = d;
    }
    return t;
  }, t;
}
function Qf() {
  var t = j0();
  return t.copy = function() {
    return Hl(t, Qf());
  }, Pn.apply(t, arguments), Sa(t);
}
function xC(t) {
  var e;
  function n(r) {
    return r == null || isNaN(r = +r) ? e : r;
  }
  return n.invert = n, n.domain = n.range = function(r) {
    return arguments.length ? (t = Array.from(r, Vf), n) : t.slice();
  }, n.unknown = function(r) {
    return arguments.length ? (e = r, n) : e;
  }, n.copy = function() {
    return xC(t).unknown(e);
  }, t = arguments.length ? Array.from(t, Vf) : [0, 1], Sa(n);
}
function SC(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, o = t[n], l = t[r], c;
  return l < o && (c = n, n = r, r = c, c = o, o = l, l = c), t[n] = e.floor(o), t[r] = e.ceil(l), t;
}
function xE(t) {
  return Math.log(t);
}
function SE(t) {
  return Math.exp(t);
}
function m4(t) {
  return -Math.log(-t);
}
function g4(t) {
  return -Math.exp(-t);
}
function b4(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function x4(t) {
  return t === 10 ? b4 : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function S4(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), (e) => Math.log(e) / t);
}
function _E(t) {
  return (e, n) => -t(-e, n);
}
function P0(t) {
  const e = t(xE, SE), n = e.domain;
  let r = 10, o, l;
  function c() {
    return o = S4(r), l = x4(r), n()[0] < 0 ? (o = _E(o), l = _E(l), t(m4, g4)) : t(xE, SE), e;
  }
  return e.base = function(s) {
    return arguments.length ? (r = +s, c()) : r;
  }, e.domain = function(s) {
    return arguments.length ? (n(s), c()) : n();
  }, e.ticks = (s) => {
    const h = n();
    let d = h[0], y = h[h.length - 1];
    const p = y < d;
    p && ([d, y] = [y, d]);
    let g = o(d), b = o(y), O, S;
    const x = s == null ? 10 : +s;
    let T = [];
    if (!(r % 1) && b - g < x) {
      if (g = Math.floor(g), b = Math.ceil(b), d > 0) {
        for (; g <= b; ++g)
          for (O = 1; O < r; ++O)
            if (S = g < 0 ? O / l(-g) : O * l(g), !(S < d)) {
              if (S > y) break;
              T.push(S);
            }
      } else for (; g <= b; ++g)
        for (O = r - 1; O >= 1; --O)
          if (S = g > 0 ? O / l(-g) : O * l(g), !(S < d)) {
            if (S > y) break;
            T.push(S);
          }
      T.length * 2 < x && (T = Wg(d, y, x));
    } else
      T = Wg(g, b, Math.min(b - g, x)).map(l);
    return p ? T.reverse() : T;
  }, e.tickFormat = (s, h) => {
    if (s == null && (s = 10), h == null && (h = r === 10 ? "s" : ","), typeof h != "function" && (!(r % 1) && (h = vl(h)).precision == null && (h.trim = !0), h = D0(h)), s === 1 / 0) return h;
    const d = Math.max(1, r * s / e.ticks().length);
    return (y) => {
      let p = y / l(Math.round(o(y)));
      return p * r < r - 0.5 && (p *= r), p <= d ? h(y) : "";
    };
  }, e.nice = () => n(SC(n(), {
    floor: (s) => l(Math.floor(o(s))),
    ceil: (s) => l(Math.ceil(o(s)))
  })), e;
}
function _C() {
  const t = P0(Hs()).domain([1, 10]);
  return t.copy = () => Hl(t, _C()).base(t.base()), Pn.apply(t, arguments), t;
}
function OE(t) {
  return function(e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t));
  };
}
function AE(t) {
  return function(e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
  };
}
function N0(t) {
  var e = 1, n = t(OE(e), AE(e));
  return n.constant = function(r) {
    return arguments.length ? t(OE(e = +r), AE(e)) : e;
  }, Sa(n);
}
function OC() {
  var t = N0(Hs());
  return t.copy = function() {
    return Hl(t, OC()).constant(t.constant());
  }, Pn.apply(t, arguments);
}
function wE(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function _4(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function O4(t) {
  return t < 0 ? -t * t : t * t;
}
function R0(t) {
  var e = t(Ie, Ie), n = 1;
  function r() {
    return n === 1 ? t(Ie, Ie) : n === 0.5 ? t(_4, O4) : t(wE(n), wE(1 / n));
  }
  return e.exponent = function(o) {
    return arguments.length ? (n = +o, r()) : n;
  }, Sa(e);
}
function q0() {
  var t = R0(Hs());
  return t.copy = function() {
    return Hl(t, q0()).exponent(t.exponent());
  }, Pn.apply(t, arguments), t;
}
function A4() {
  return q0.apply(null, arguments).exponent(0.5);
}
function TE(t) {
  return Math.sign(t) * t * t;
}
function w4(t) {
  return Math.sign(t) * Math.sqrt(Math.abs(t));
}
function AC() {
  var t = j0(), e = [0, 1], n = !1, r;
  function o(l) {
    var c = w4(t(l));
    return isNaN(c) ? r : n ? Math.round(c) : c;
  }
  return o.invert = function(l) {
    return t.invert(TE(l));
  }, o.domain = function(l) {
    return arguments.length ? (t.domain(l), o) : t.domain();
  }, o.range = function(l) {
    return arguments.length ? (t.range((e = Array.from(l, Vf)).map(TE)), o) : e.slice();
  }, o.rangeRound = function(l) {
    return o.range(l).round(!0);
  }, o.round = function(l) {
    return arguments.length ? (n = !!l, o) : n;
  }, o.clamp = function(l) {
    return arguments.length ? (t.clamp(l), o) : t.clamp();
  }, o.unknown = function(l) {
    return arguments.length ? (r = l, o) : r;
  }, o.copy = function() {
    return AC(t.domain(), e).round(n).clamp(t.clamp()).unknown(r);
  }, Pn.apply(o, arguments), Sa(o);
}
function wC() {
  var t = [], e = [], n = [], r;
  function o() {
    var c = 0, s = Math.max(1, e.length);
    for (n = new Array(s - 1); ++c < s; ) n[c - 1] = C8(t, c / s);
    return l;
  }
  function l(c) {
    return c == null || isNaN(c = +c) ? r : e[kl(n, c)];
  }
  return l.invertExtent = function(c) {
    var s = e.indexOf(c);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? n[s - 1] : t[0],
      s < n.length ? n[s] : t[t.length - 1]
    ];
  }, l.domain = function(c) {
    if (!arguments.length) return t.slice();
    t = [];
    for (let s of c) s != null && !isNaN(s = +s) && t.push(s);
    return t.sort(ga), o();
  }, l.range = function(c) {
    return arguments.length ? (e = Array.from(c), o()) : e.slice();
  }, l.unknown = function(c) {
    return arguments.length ? (r = c, l) : r;
  }, l.quantiles = function() {
    return n.slice();
  }, l.copy = function() {
    return wC().domain(t).range(e).unknown(r);
  }, Pn.apply(l, arguments);
}
function TC() {
  var t = 0, e = 1, n = 1, r = [0.5], o = [0, 1], l;
  function c(h) {
    return h != null && h <= h ? o[kl(r, h, 0, n)] : l;
  }
  function s() {
    var h = -1;
    for (r = new Array(n); ++h < n; ) r[h] = ((h + 1) * e - (h - n) * t) / (n + 1);
    return c;
  }
  return c.domain = function(h) {
    return arguments.length ? ([t, e] = h, t = +t, e = +e, s()) : [t, e];
  }, c.range = function(h) {
    return arguments.length ? (n = (o = Array.from(h)).length - 1, s()) : o.slice();
  }, c.invertExtent = function(h) {
    var d = o.indexOf(h);
    return d < 0 ? [NaN, NaN] : d < 1 ? [t, r[0]] : d >= n ? [r[n - 1], e] : [r[d - 1], r[d]];
  }, c.unknown = function(h) {
    return arguments.length && (l = h), c;
  }, c.thresholds = function() {
    return r.slice();
  }, c.copy = function() {
    return TC().domain([t, e]).range(o).unknown(l);
  }, Pn.apply(Sa(c), arguments);
}
function EC() {
  var t = [0.5], e = [0, 1], n, r = 1;
  function o(l) {
    return l != null && l <= l ? e[kl(t, l, 0, r)] : n;
  }
  return o.domain = function(l) {
    return arguments.length ? (t = Array.from(l), r = Math.min(t.length, e.length - 1), o) : t.slice();
  }, o.range = function(l) {
    return arguments.length ? (e = Array.from(l), r = Math.min(t.length, e.length - 1), o) : e.slice();
  }, o.invertExtent = function(l) {
    var c = e.indexOf(l);
    return [t[c - 1], t[c]];
  }, o.unknown = function(l) {
    return arguments.length ? (n = l, o) : n;
  }, o.copy = function() {
    return EC().domain(t).range(e).unknown(n);
  }, Pn.apply(o, arguments);
}
const $m = /* @__PURE__ */ new Date(), Bm = /* @__PURE__ */ new Date();
function Oe(t, e, n, r) {
  function o(l) {
    return t(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return o.floor = (l) => (t(l = /* @__PURE__ */ new Date(+l)), l), o.ceil = (l) => (t(l = new Date(l - 1)), e(l, 1), t(l), l), o.round = (l) => {
    const c = o(l), s = o.ceil(l);
    return l - c < s - l ? c : s;
  }, o.offset = (l, c) => (e(l = /* @__PURE__ */ new Date(+l), c == null ? 1 : Math.floor(c)), l), o.range = (l, c, s) => {
    const h = [];
    if (l = o.ceil(l), s = s == null ? 1 : Math.floor(s), !(l < c) || !(s > 0)) return h;
    let d;
    do
      h.push(d = /* @__PURE__ */ new Date(+l)), e(l, s), t(l);
    while (d < l && l < c);
    return h;
  }, o.filter = (l) => Oe((c) => {
    if (c >= c) for (; t(c), !l(c); ) c.setTime(c - 1);
  }, (c, s) => {
    if (c >= c)
      if (s < 0) for (; ++s <= 0; )
        for (; e(c, -1), !l(c); )
          ;
      else for (; --s >= 0; )
        for (; e(c, 1), !l(c); )
          ;
  }), n && (o.count = (l, c) => ($m.setTime(+l), Bm.setTime(+c), t($m), t(Bm), Math.floor(n($m, Bm))), o.every = (l) => (l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? o.filter(r ? (c) => r(c) % l === 0 : (c) => o.count(0, c) % l === 0) : o)), o;
}
const Wf = Oe(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
Wf.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? Oe((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : Wf);
Wf.range;
const wr = 1e3, Mn = wr * 60, Tr = Mn * 60, Rr = Tr * 24, z0 = Rr * 7, EE = Rr * 30, Lm = Rr * 365, Ka = Oe((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * wr);
}, (t, e) => (e - t) / wr, (t) => t.getUTCSeconds());
Ka.range;
const $0 = Oe((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * wr);
}, (t, e) => {
  t.setTime(+t + e * Mn);
}, (t, e) => (e - t) / Mn, (t) => t.getMinutes());
$0.range;
const B0 = Oe((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * Mn);
}, (t, e) => (e - t) / Mn, (t) => t.getUTCMinutes());
B0.range;
const L0 = Oe((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * wr - t.getMinutes() * Mn);
}, (t, e) => {
  t.setTime(+t + e * Tr);
}, (t, e) => (e - t) / Tr, (t) => t.getHours());
L0.range;
const k0 = Oe((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * Tr);
}, (t, e) => (e - t) / Tr, (t) => t.getUTCHours());
k0.range;
const Il = Oe(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Mn) / Rr,
  (t) => t.getDate() - 1
);
Il.range;
const Is = Oe((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Rr, (t) => t.getUTCDate() - 1);
Is.range;
const MC = Oe((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Rr, (t) => Math.floor(t / Rr));
MC.range;
function oi(t) {
  return Oe((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * Mn) / z0);
}
const Gs = oi(0), Jf = oi(1), T4 = oi(2), E4 = oi(3), po = oi(4), M4 = oi(5), j4 = oi(6);
Gs.range;
Jf.range;
T4.range;
E4.range;
po.range;
M4.range;
j4.range;
function ui(t) {
  return Oe((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / z0);
}
const Ys = ui(0), ts = ui(1), C4 = ui(2), D4 = ui(3), yo = ui(4), P4 = ui(5), N4 = ui(6);
Ys.range;
ts.range;
C4.range;
D4.range;
yo.range;
P4.range;
N4.range;
const U0 = Oe((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
U0.range;
const H0 = Oe((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
H0.range;
const qr = Oe((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
qr.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Oe((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
qr.range;
const zr = Oe((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
zr.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : Oe((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
zr.range;
function jC(t, e, n, r, o, l) {
  const c = [
    [Ka, 1, wr],
    [Ka, 5, 5 * wr],
    [Ka, 15, 15 * wr],
    [Ka, 30, 30 * wr],
    [l, 1, Mn],
    [l, 5, 5 * Mn],
    [l, 15, 15 * Mn],
    [l, 30, 30 * Mn],
    [o, 1, Tr],
    [o, 3, 3 * Tr],
    [o, 6, 6 * Tr],
    [o, 12, 12 * Tr],
    [r, 1, Rr],
    [r, 2, 2 * Rr],
    [n, 1, z0],
    [e, 1, EE],
    [e, 3, 3 * EE],
    [t, 1, Lm]
  ];
  function s(d, y, p) {
    const g = y < d;
    g && ([d, y] = [y, d]);
    const b = p && typeof p.range == "function" ? p : h(d, y, p), O = b ? b.range(d, +y + 1) : [];
    return g ? O.reverse() : O;
  }
  function h(d, y, p) {
    const g = Math.abs(y - d) / p, b = A0(([, , x]) => x).right(c, g);
    if (b === c.length) return t.every(tb(d / Lm, y / Lm, p));
    if (b === 0) return Wf.every(Math.max(tb(d, y, p), 1));
    const [O, S] = c[g / c[b - 1][2] < c[b][2] / g ? b - 1 : b];
    return O.every(S);
  }
  return [s, h];
}
const [R4, q4] = jC(zr, H0, Ys, MC, k0, B0), [z4, $4] = jC(qr, U0, Gs, Il, L0, $0);
function km(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Um(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Bu(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function B4(t) {
  var e = t.dateTime, n = t.date, r = t.time, o = t.periods, l = t.days, c = t.shortDays, s = t.months, h = t.shortMonths, d = Lu(o), y = ku(o), p = Lu(l), g = ku(l), b = Lu(c), O = ku(c), S = Lu(s), x = ku(s), T = Lu(h), w = ku(h), M = {
    a: I,
    A: W,
    b: ot,
    B: lt,
    c: null,
    d: NE,
    e: NE,
    f: u6,
    g: m6,
    G: b6,
    H: a6,
    I: i6,
    j: o6,
    L: CC,
    m: l6,
    M: c6,
    p: P,
    q: U,
    Q: zE,
    s: $E,
    S: f6,
    u: s6,
    U: h6,
    V: d6,
    w: v6,
    W: p6,
    x: null,
    X: null,
    y: y6,
    Y: g6,
    Z: x6,
    "%": qE
  }, j = {
    a: et,
    A: ft,
    b: vt,
    B: mt,
    c: null,
    d: RE,
    e: RE,
    f: A6,
    g: R6,
    G: z6,
    H: S6,
    I: _6,
    j: O6,
    L: PC,
    m: w6,
    M: T6,
    p: jt,
    q: kt,
    Q: zE,
    s: $E,
    S: E6,
    u: M6,
    U: j6,
    V: C6,
    w: D6,
    W: P6,
    x: null,
    X: null,
    y: N6,
    Y: q6,
    Z: $6,
    "%": qE
  }, A = {
    a: F,
    A: k,
    b: $,
    B: K,
    c: Z,
    d: DE,
    e: DE,
    f: t6,
    g: CE,
    G: jE,
    H: PE,
    I: PE,
    j: Z4,
    L: J4,
    m: F4,
    M: Q4,
    p: z,
    q: V4,
    Q: n6,
    s: r6,
    S: W4,
    u: I4,
    U: G4,
    V: Y4,
    w: H4,
    W: X4,
    x: V,
    X: N,
    y: CE,
    Y: jE,
    Z: K4,
    "%": e6
  };
  M.x = E(n, M), M.X = E(r, M), M.c = E(e, M), j.x = E(n, j), j.X = E(r, j), j.c = E(e, j);
  function E(ct, xt) {
    return function(St) {
      var ut = [], te = -1, wt = 0, oe = ct.length, ue, ze, Nn;
      for (St instanceof Date || (St = /* @__PURE__ */ new Date(+St)); ++te < oe; )
        ct.charCodeAt(te) === 37 && (ut.push(ct.slice(wt, te)), (ze = ME[ue = ct.charAt(++te)]) != null ? ue = ct.charAt(++te) : ze = ue === "e" ? " " : "0", (Nn = xt[ue]) && (ue = Nn(St, ze)), ut.push(ue), wt = te + 1);
      return ut.push(ct.slice(wt, te)), ut.join("");
    };
  }
  function D(ct, xt) {
    return function(St) {
      var ut = Bu(1900, void 0, 1), te = R(ut, ct, St += "", 0), wt, oe;
      if (te != St.length) return null;
      if ("Q" in ut) return new Date(ut.Q);
      if ("s" in ut) return new Date(ut.s * 1e3 + ("L" in ut ? ut.L : 0));
      if (xt && !("Z" in ut) && (ut.Z = 0), "p" in ut && (ut.H = ut.H % 12 + ut.p * 12), ut.m === void 0 && (ut.m = "q" in ut ? ut.q : 0), "V" in ut) {
        if (ut.V < 1 || ut.V > 53) return null;
        "w" in ut || (ut.w = 1), "Z" in ut ? (wt = Um(Bu(ut.y, 0, 1)), oe = wt.getUTCDay(), wt = oe > 4 || oe === 0 ? ts.ceil(wt) : ts(wt), wt = Is.offset(wt, (ut.V - 1) * 7), ut.y = wt.getUTCFullYear(), ut.m = wt.getUTCMonth(), ut.d = wt.getUTCDate() + (ut.w + 6) % 7) : (wt = km(Bu(ut.y, 0, 1)), oe = wt.getDay(), wt = oe > 4 || oe === 0 ? Jf.ceil(wt) : Jf(wt), wt = Il.offset(wt, (ut.V - 1) * 7), ut.y = wt.getFullYear(), ut.m = wt.getMonth(), ut.d = wt.getDate() + (ut.w + 6) % 7);
      } else ("W" in ut || "U" in ut) && ("w" in ut || (ut.w = "u" in ut ? ut.u % 7 : "W" in ut ? 1 : 0), oe = "Z" in ut ? Um(Bu(ut.y, 0, 1)).getUTCDay() : km(Bu(ut.y, 0, 1)).getDay(), ut.m = 0, ut.d = "W" in ut ? (ut.w + 6) % 7 + ut.W * 7 - (oe + 5) % 7 : ut.w + ut.U * 7 - (oe + 6) % 7);
      return "Z" in ut ? (ut.H += ut.Z / 100 | 0, ut.M += ut.Z % 100, Um(ut)) : km(ut);
    };
  }
  function R(ct, xt, St, ut) {
    for (var te = 0, wt = xt.length, oe = St.length, ue, ze; te < wt; ) {
      if (ut >= oe) return -1;
      if (ue = xt.charCodeAt(te++), ue === 37) {
        if (ue = xt.charAt(te++), ze = A[ue in ME ? xt.charAt(te++) : ue], !ze || (ut = ze(ct, St, ut)) < 0) return -1;
      } else if (ue != St.charCodeAt(ut++))
        return -1;
    }
    return ut;
  }
  function z(ct, xt, St) {
    var ut = d.exec(xt.slice(St));
    return ut ? (ct.p = y.get(ut[0].toLowerCase()), St + ut[0].length) : -1;
  }
  function F(ct, xt, St) {
    var ut = b.exec(xt.slice(St));
    return ut ? (ct.w = O.get(ut[0].toLowerCase()), St + ut[0].length) : -1;
  }
  function k(ct, xt, St) {
    var ut = p.exec(xt.slice(St));
    return ut ? (ct.w = g.get(ut[0].toLowerCase()), St + ut[0].length) : -1;
  }
  function $(ct, xt, St) {
    var ut = T.exec(xt.slice(St));
    return ut ? (ct.m = w.get(ut[0].toLowerCase()), St + ut[0].length) : -1;
  }
  function K(ct, xt, St) {
    var ut = S.exec(xt.slice(St));
    return ut ? (ct.m = x.get(ut[0].toLowerCase()), St + ut[0].length) : -1;
  }
  function Z(ct, xt, St) {
    return R(ct, e, xt, St);
  }
  function V(ct, xt, St) {
    return R(ct, n, xt, St);
  }
  function N(ct, xt, St) {
    return R(ct, r, xt, St);
  }
  function I(ct) {
    return c[ct.getDay()];
  }
  function W(ct) {
    return l[ct.getDay()];
  }
  function ot(ct) {
    return h[ct.getMonth()];
  }
  function lt(ct) {
    return s[ct.getMonth()];
  }
  function P(ct) {
    return o[+(ct.getHours() >= 12)];
  }
  function U(ct) {
    return 1 + ~~(ct.getMonth() / 3);
  }
  function et(ct) {
    return c[ct.getUTCDay()];
  }
  function ft(ct) {
    return l[ct.getUTCDay()];
  }
  function vt(ct) {
    return h[ct.getUTCMonth()];
  }
  function mt(ct) {
    return s[ct.getUTCMonth()];
  }
  function jt(ct) {
    return o[+(ct.getUTCHours() >= 12)];
  }
  function kt(ct) {
    return 1 + ~~(ct.getUTCMonth() / 3);
  }
  return {
    format: function(ct) {
      var xt = E(ct += "", M);
      return xt.toString = function() {
        return ct;
      }, xt;
    },
    parse: function(ct) {
      var xt = D(ct += "", !1);
      return xt.toString = function() {
        return ct;
      }, xt;
    },
    utcFormat: function(ct) {
      var xt = E(ct += "", j);
      return xt.toString = function() {
        return ct;
      }, xt;
    },
    utcParse: function(ct) {
      var xt = D(ct += "", !0);
      return xt.toString = function() {
        return ct;
      }, xt;
    }
  };
}
var ME = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, L4 = /^%/, k4 = /[\\^$*+?|[\]().{}]/g;
function Bt(t, e, n) {
  var r = t < 0 ? "-" : "", o = (r ? -t : t) + "", l = o.length;
  return r + (l < n ? new Array(n - l + 1).join(e) + o : o);
}
function U4(t) {
  return t.replace(k4, "\\$&");
}
function Lu(t) {
  return new RegExp("^(?:" + t.map(U4).join("|") + ")", "i");
}
function ku(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function H4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function I4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function G4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Y4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function X4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function jE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function CE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function K4(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function V4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function F4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function DE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Z4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function PE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Q4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function W4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function J4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function t6(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function e6(t, e, n) {
  var r = L4.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function n6(t, e, n) {
  var r = Ee.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function r6(t, e, n) {
  var r = Ee.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function NE(t, e) {
  return Bt(t.getDate(), e, 2);
}
function a6(t, e) {
  return Bt(t.getHours(), e, 2);
}
function i6(t, e) {
  return Bt(t.getHours() % 12 || 12, e, 2);
}
function o6(t, e) {
  return Bt(1 + Il.count(qr(t), t), e, 3);
}
function CC(t, e) {
  return Bt(t.getMilliseconds(), e, 3);
}
function u6(t, e) {
  return CC(t, e) + "000";
}
function l6(t, e) {
  return Bt(t.getMonth() + 1, e, 2);
}
function c6(t, e) {
  return Bt(t.getMinutes(), e, 2);
}
function f6(t, e) {
  return Bt(t.getSeconds(), e, 2);
}
function s6(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function h6(t, e) {
  return Bt(Gs.count(qr(t) - 1, t), e, 2);
}
function DC(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? po(t) : po.ceil(t);
}
function d6(t, e) {
  return t = DC(t), Bt(po.count(qr(t), t) + (qr(t).getDay() === 4), e, 2);
}
function v6(t) {
  return t.getDay();
}
function p6(t, e) {
  return Bt(Jf.count(qr(t) - 1, t), e, 2);
}
function y6(t, e) {
  return Bt(t.getFullYear() % 100, e, 2);
}
function m6(t, e) {
  return t = DC(t), Bt(t.getFullYear() % 100, e, 2);
}
function g6(t, e) {
  return Bt(t.getFullYear() % 1e4, e, 4);
}
function b6(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? po(t) : po.ceil(t), Bt(t.getFullYear() % 1e4, e, 4);
}
function x6(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + Bt(e / 60 | 0, "0", 2) + Bt(e % 60, "0", 2);
}
function RE(t, e) {
  return Bt(t.getUTCDate(), e, 2);
}
function S6(t, e) {
  return Bt(t.getUTCHours(), e, 2);
}
function _6(t, e) {
  return Bt(t.getUTCHours() % 12 || 12, e, 2);
}
function O6(t, e) {
  return Bt(1 + Is.count(zr(t), t), e, 3);
}
function PC(t, e) {
  return Bt(t.getUTCMilliseconds(), e, 3);
}
function A6(t, e) {
  return PC(t, e) + "000";
}
function w6(t, e) {
  return Bt(t.getUTCMonth() + 1, e, 2);
}
function T6(t, e) {
  return Bt(t.getUTCMinutes(), e, 2);
}
function E6(t, e) {
  return Bt(t.getUTCSeconds(), e, 2);
}
function M6(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function j6(t, e) {
  return Bt(Ys.count(zr(t) - 1, t), e, 2);
}
function NC(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? yo(t) : yo.ceil(t);
}
function C6(t, e) {
  return t = NC(t), Bt(yo.count(zr(t), t) + (zr(t).getUTCDay() === 4), e, 2);
}
function D6(t) {
  return t.getUTCDay();
}
function P6(t, e) {
  return Bt(ts.count(zr(t) - 1, t), e, 2);
}
function N6(t, e) {
  return Bt(t.getUTCFullYear() % 100, e, 2);
}
function R6(t, e) {
  return t = NC(t), Bt(t.getUTCFullYear() % 100, e, 2);
}
function q6(t, e) {
  return Bt(t.getUTCFullYear() % 1e4, e, 4);
}
function z6(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? yo(t) : yo.ceil(t), Bt(t.getUTCFullYear() % 1e4, e, 4);
}
function $6() {
  return "+0000";
}
function qE() {
  return "%";
}
function zE(t) {
  return +t;
}
function $E(t) {
  return Math.floor(+t / 1e3);
}
var Zi, RC, qC;
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
function B6(t) {
  return Zi = B4(t), RC = Zi.format, Zi.parse, qC = Zi.utcFormat, Zi.utcParse, Zi;
}
function L6(t) {
  return new Date(t);
}
function k6(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function I0(t, e, n, r, o, l, c, s, h, d) {
  var y = j0(), p = y.invert, g = y.domain, b = d(".%L"), O = d(":%S"), S = d("%I:%M"), x = d("%I %p"), T = d("%a %d"), w = d("%b %d"), M = d("%B"), j = d("%Y");
  function A(E) {
    return (h(E) < E ? b : s(E) < E ? O : c(E) < E ? S : l(E) < E ? x : r(E) < E ? o(E) < E ? T : w : n(E) < E ? M : j)(E);
  }
  return y.invert = function(E) {
    return new Date(p(E));
  }, y.domain = function(E) {
    return arguments.length ? g(Array.from(E, k6)) : g().map(L6);
  }, y.ticks = function(E) {
    var D = g();
    return t(D[0], D[D.length - 1], E ?? 10);
  }, y.tickFormat = function(E, D) {
    return D == null ? A : d(D);
  }, y.nice = function(E) {
    var D = g();
    return (!E || typeof E.range != "function") && (E = e(D[0], D[D.length - 1], E ?? 10)), E ? g(SC(D, E)) : y;
  }, y.copy = function() {
    return Hl(y, I0(t, e, n, r, o, l, c, s, h, d));
  }, y;
}
function U6() {
  return Pn.apply(I0(z4, $4, qr, U0, Gs, Il, L0, $0, Ka, RC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function H6() {
  return Pn.apply(I0(R4, q4, zr, H0, Ys, Is, k0, B0, Ka, qC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Xs() {
  var t = 0, e = 1, n, r, o, l, c = Ie, s = !1, h;
  function d(p) {
    return p == null || isNaN(p = +p) ? h : c(o === 0 ? 0.5 : (p = (l(p) - n) * o, s ? Math.max(0, Math.min(1, p)) : p));
  }
  d.domain = function(p) {
    return arguments.length ? ([t, e] = p, n = l(t = +t), r = l(e = +e), o = n === r ? 0 : 1 / (r - n), d) : [t, e];
  }, d.clamp = function(p) {
    return arguments.length ? (s = !!p, d) : s;
  }, d.interpolator = function(p) {
    return arguments.length ? (c = p, d) : c;
  };
  function y(p) {
    return function(g) {
      var b, O;
      return arguments.length ? ([b, O] = g, c = p(b, O), d) : [c(0), c(1)];
    };
  }
  return d.range = y(Bo), d.rangeRound = y(M0), d.unknown = function(p) {
    return arguments.length ? (h = p, d) : h;
  }, function(p) {
    return l = p, n = p(t), r = p(e), o = n === r ? 0 : 1 / (r - n), d;
  };
}
function _a(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function zC() {
  var t = Sa(Xs()(Ie));
  return t.copy = function() {
    return _a(t, zC());
  }, Lr.apply(t, arguments);
}
function $C() {
  var t = P0(Xs()).domain([1, 10]);
  return t.copy = function() {
    return _a(t, $C()).base(t.base());
  }, Lr.apply(t, arguments);
}
function BC() {
  var t = N0(Xs());
  return t.copy = function() {
    return _a(t, BC()).constant(t.constant());
  }, Lr.apply(t, arguments);
}
function G0() {
  var t = R0(Xs());
  return t.copy = function() {
    return _a(t, G0()).exponent(t.exponent());
  }, Lr.apply(t, arguments);
}
function I6() {
  return G0.apply(null, arguments).exponent(0.5);
}
function LC() {
  var t = [], e = Ie;
  function n(r) {
    if (r != null && !isNaN(r = +r)) return e((kl(t, r, 1) - 1) / (t.length - 1));
  }
  return n.domain = function(r) {
    if (!arguments.length) return t.slice();
    t = [];
    for (let o of r) o != null && !isNaN(o = +o) && t.push(o);
    return t.sort(ga), n;
  }, n.interpolator = function(r) {
    return arguments.length ? (e = r, n) : e;
  }, n.range = function() {
    return t.map((r, o) => e(o / (t.length - 1)));
  }, n.quantiles = function(r) {
    return Array.from({ length: r + 1 }, (o, l) => j8(t, l / r));
  }, n.copy = function() {
    return LC(e).domain(t);
  }, Lr.apply(n, arguments);
}
function Ks() {
  var t = 0, e = 0.5, n = 1, r = 1, o, l, c, s, h, d = Ie, y, p = !1, g;
  function b(S) {
    return isNaN(S = +S) ? g : (S = 0.5 + ((S = +y(S)) - l) * (r * S < r * l ? s : h), d(p ? Math.max(0, Math.min(1, S)) : S));
  }
  b.domain = function(S) {
    return arguments.length ? ([t, e, n] = S, o = y(t = +t), l = y(e = +e), c = y(n = +n), s = o === l ? 0 : 0.5 / (l - o), h = l === c ? 0 : 0.5 / (c - l), r = l < o ? -1 : 1, b) : [t, e, n];
  }, b.clamp = function(S) {
    return arguments.length ? (p = !!S, b) : p;
  }, b.interpolator = function(S) {
    return arguments.length ? (d = S, b) : d;
  };
  function O(S) {
    return function(x) {
      var T, w, M;
      return arguments.length ? ([T, w, M] = x, d = e4(S, [T, w, M]), b) : [d(0), d(0.5), d(1)];
    };
  }
  return b.range = O(Bo), b.rangeRound = O(M0), b.unknown = function(S) {
    return arguments.length ? (g = S, b) : g;
  }, function(S) {
    return y = S, o = S(t), l = S(e), c = S(n), s = o === l ? 0 : 0.5 / (l - o), h = l === c ? 0 : 0.5 / (c - l), r = l < o ? -1 : 1, b;
  };
}
function kC() {
  var t = Sa(Ks()(Ie));
  return t.copy = function() {
    return _a(t, kC());
  }, Lr.apply(t, arguments);
}
function UC() {
  var t = P0(Ks()).domain([0.1, 1, 10]);
  return t.copy = function() {
    return _a(t, UC()).base(t.base());
  }, Lr.apply(t, arguments);
}
function HC() {
  var t = N0(Ks());
  return t.copy = function() {
    return _a(t, HC()).constant(t.constant());
  }, Lr.apply(t, arguments);
}
function Y0() {
  var t = R0(Ks());
  return t.copy = function() {
    return _a(t, Y0()).exponent(t.exponent());
  }, Lr.apply(t, arguments);
}
function G6() {
  return Y0.apply(null, arguments).exponent(0.5);
}
const BE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: fl,
  scaleDiverging: kC,
  scaleDivergingLog: UC,
  scaleDivergingPow: Y0,
  scaleDivergingSqrt: G6,
  scaleDivergingSymlog: HC,
  scaleIdentity: xC,
  scaleImplicit: eb,
  scaleLinear: Qf,
  scaleLog: _C,
  scaleOrdinal: w0,
  scalePoint: Wu,
  scalePow: q0,
  scaleQuantile: wC,
  scaleQuantize: TC,
  scaleRadial: AC,
  scaleSequential: zC,
  scaleSequentialLog: $C,
  scaleSequentialPow: G0,
  scaleSequentialQuantile: LC,
  scaleSequentialSqrt: I6,
  scaleSequentialSymlog: BC,
  scaleSqrt: A4,
  scaleSymlog: OC,
  scaleThreshold: EC,
  scaleTime: U6,
  scaleUtc: H6,
  tickFormat: bC
}, Symbol.toStringTag, { value: "Module" }));
var Hm, LE;
function IC() {
  if (LE) return Hm;
  LE = 1;
  var t = No();
  function e(n, r, o) {
    for (var l = -1, c = n.length; ++l < c; ) {
      var s = n[l], h = r(s);
      if (h != null && (d === void 0 ? h === h && !t(h) : o(h, d)))
        var d = h, y = s;
    }
    return y;
  }
  return Hm = e, Hm;
}
var Im, kE;
function Y6() {
  if (kE) return Im;
  kE = 1;
  function t(e, n) {
    return e > n;
  }
  return Im = t, Im;
}
var Gm, UE;
function X6() {
  if (UE) return Gm;
  UE = 1;
  var t = IC(), e = Y6(), n = $o();
  function r(o) {
    return o && o.length ? t(o, n, e) : void 0;
  }
  return Gm = r, Gm;
}
var K6 = X6();
const ya = /* @__PURE__ */ Qt(K6);
var Ym, HE;
function V6() {
  if (HE) return Ym;
  HE = 1;
  function t(e, n) {
    return e < n;
  }
  return Ym = t, Ym;
}
var Xm, IE;
function F6() {
  if (IE) return Xm;
  IE = 1;
  var t = IC(), e = V6(), n = $o();
  function r(o) {
    return o && o.length ? t(o, n, e) : void 0;
  }
  return Xm = r, Xm;
}
var Z6 = F6();
const Vs = /* @__PURE__ */ Qt(Z6);
var Km, GE;
function Q6() {
  if (GE) return Km;
  GE = 1;
  var t = o0(), e = xa(), n = Jj(), r = Je();
  function o(l, c) {
    var s = r(l) ? t : n;
    return s(l, e(c, 3));
  }
  return Km = o, Km;
}
var Vm, YE;
function W6() {
  if (YE) return Vm;
  YE = 1;
  var t = Qj(), e = Q6();
  function n(r, o) {
    return t(e(r, o), 1);
  }
  return Vm = n, Vm;
}
var J6 = W6();
const tL = /* @__PURE__ */ Qt(J6);
var Fm, XE;
function eL() {
  if (XE) return Fm;
  XE = 1;
  var t = b0();
  function e(n, r) {
    return t(n, r);
  }
  return Fm = e, Fm;
}
var nL = eL();
const mo = /* @__PURE__ */ Qt(nL);
var Lo = 1e9, rL = {
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
}, K0, ie = !0, Dn = "[DecimalError] ", Qa = Dn + "Invalid argument: ", X0 = Dn + "Exponent out of range: ", ko = Math.floor, Ga = Math.pow, aL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vn, Te = 1e7, re = 7, GC = 9007199254740991, es = ko(GC / re), ht = {};
ht.absoluteValue = ht.abs = function() {
  var t = new this.constructor(this);
  return t.s && (t.s = 1), t;
};
ht.comparedTo = ht.cmp = function(t) {
  var e, n, r, o, l = this;
  if (t = new l.constructor(t), l.s !== t.s) return l.s || -t.s;
  if (l.e !== t.e) return l.e > t.e ^ l.s < 0 ? 1 : -1;
  for (r = l.d.length, o = t.d.length, e = 0, n = r < o ? r : o; e < n; ++e)
    if (l.d[e] !== t.d[e]) return l.d[e] > t.d[e] ^ l.s < 0 ? 1 : -1;
  return r === o ? 0 : r > o ^ l.s < 0 ? 1 : -1;
};
ht.decimalPlaces = ht.dp = function() {
  var t = this, e = t.d.length - 1, n = (e - t.e) * re;
  if (e = t.d[e], e) for (; e % 10 == 0; e /= 10) n--;
  return n < 0 ? 0 : n;
};
ht.dividedBy = ht.div = function(t) {
  return Pr(this, new this.constructor(t));
};
ht.dividedToIntegerBy = ht.idiv = function(t) {
  var e = this, n = e.constructor;
  return Zt(Pr(e, new n(t), 0, 1), n.precision);
};
ht.equals = ht.eq = function(t) {
  return !this.cmp(t);
};
ht.exponent = function() {
  return ge(this);
};
ht.greaterThan = ht.gt = function(t) {
  return this.cmp(t) > 0;
};
ht.greaterThanOrEqualTo = ht.gte = function(t) {
  return this.cmp(t) >= 0;
};
ht.isInteger = ht.isint = function() {
  return this.e > this.d.length - 2;
};
ht.isNegative = ht.isneg = function() {
  return this.s < 0;
};
ht.isPositive = ht.ispos = function() {
  return this.s > 0;
};
ht.isZero = function() {
  return this.s === 0;
};
ht.lessThan = ht.lt = function(t) {
  return this.cmp(t) < 0;
};
ht.lessThanOrEqualTo = ht.lte = function(t) {
  return this.cmp(t) < 1;
};
ht.logarithm = ht.log = function(t) {
  var e, n = this, r = n.constructor, o = r.precision, l = o + 5;
  if (t === void 0)
    t = new r(10);
  else if (t = new r(t), t.s < 1 || t.eq(vn)) throw Error(Dn + "NaN");
  if (n.s < 1) throw Error(Dn + (n.s ? "NaN" : "-Infinity"));
  return n.eq(vn) ? new r(0) : (ie = !1, e = Pr(pl(n, l), pl(t, l), l), ie = !0, Zt(e, o));
};
ht.minus = ht.sub = function(t) {
  var e = this;
  return t = new e.constructor(t), e.s == t.s ? KC(e, t) : YC(e, (t.s = -t.s, t));
};
ht.modulo = ht.mod = function(t) {
  var e, n = this, r = n.constructor, o = r.precision;
  if (t = new r(t), !t.s) throw Error(Dn + "NaN");
  return n.s ? (ie = !1, e = Pr(n, t, 0, 1).times(t), ie = !0, n.minus(e)) : Zt(new r(n), o);
};
ht.naturalExponential = ht.exp = function() {
  return XC(this);
};
ht.naturalLogarithm = ht.ln = function() {
  return pl(this);
};
ht.negated = ht.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s || 0, t;
};
ht.plus = ht.add = function(t) {
  var e = this;
  return t = new e.constructor(t), e.s == t.s ? YC(e, t) : KC(e, (t.s = -t.s, t));
};
ht.precision = ht.sd = function(t) {
  var e, n, r, o = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(Qa + t);
  if (e = ge(o) + 1, r = o.d.length - 1, n = r * re + 1, r = o.d[r], r) {
    for (; r % 10 == 0; r /= 10) n--;
    for (r = o.d[0]; r >= 10; r /= 10) n++;
  }
  return t && e > n ? e : n;
};
ht.squareRoot = ht.sqrt = function() {
  var t, e, n, r, o, l, c, s = this, h = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new h(0);
    throw Error(Dn + "NaN");
  }
  for (t = ge(s), ie = !1, o = Math.sqrt(+s), o == 0 || o == 1 / 0 ? (e = Zn(s.d), (e.length + t) % 2 == 0 && (e += "0"), o = Math.sqrt(e), t = ko((t + 1) / 2) - (t < 0 || t % 2), o == 1 / 0 ? e = "5e" + t : (e = o.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + t), r = new h(e)) : r = new h(o.toString()), n = h.precision, o = c = n + 3; ; )
    if (l = r, r = l.plus(Pr(s, l, c + 2)).times(0.5), Zn(l.d).slice(0, c) === (e = Zn(r.d)).slice(0, c)) {
      if (e = e.slice(c - 3, c + 1), o == c && e == "4999") {
        if (Zt(l, n + 1, 0), l.times(l).eq(s)) {
          r = l;
          break;
        }
      } else if (e != "9999")
        break;
      c += 4;
    }
  return ie = !0, Zt(r, n);
};
ht.times = ht.mul = function(t) {
  var e, n, r, o, l, c, s, h, d, y = this, p = y.constructor, g = y.d, b = (t = new p(t)).d;
  if (!y.s || !t.s) return new p(0);
  for (t.s *= y.s, n = y.e + t.e, h = g.length, d = b.length, h < d && (l = g, g = b, b = l, c = h, h = d, d = c), l = [], c = h + d, r = c; r--; ) l.push(0);
  for (r = d; --r >= 0; ) {
    for (e = 0, o = h + r; o > r; )
      s = l[o] + b[r] * g[o - r - 1] + e, l[o--] = s % Te | 0, e = s / Te | 0;
    l[o] = (l[o] + e) % Te | 0;
  }
  for (; !l[--c]; ) l.pop();
  return e ? ++n : l.shift(), t.d = l, t.e = n, ie ? Zt(t, p.precision) : t;
};
ht.toDecimalPlaces = ht.todp = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (er(t, 0, Lo), e === void 0 ? e = r.rounding : er(e, 0, 8), Zt(n, t + ge(n) + 1, e));
};
ht.toExponential = function(t, e) {
  var n, r = this, o = r.constructor;
  return t === void 0 ? n = ei(r, !0) : (er(t, 0, Lo), e === void 0 ? e = o.rounding : er(e, 0, 8), r = Zt(new o(r), t + 1, e), n = ei(r, !0, t + 1)), n;
};
ht.toFixed = function(t, e) {
  var n, r, o = this, l = o.constructor;
  return t === void 0 ? ei(o) : (er(t, 0, Lo), e === void 0 ? e = l.rounding : er(e, 0, 8), r = Zt(new l(o), t + ge(o) + 1, e), n = ei(r.abs(), !1, t + ge(r) + 1), o.isneg() && !o.isZero() ? "-" + n : n);
};
ht.toInteger = ht.toint = function() {
  var t = this, e = t.constructor;
  return Zt(new e(t), ge(t) + 1, e.rounding);
};
ht.toNumber = function() {
  return +this;
};
ht.toPower = ht.pow = function(t) {
  var e, n, r, o, l, c, s = this, h = s.constructor, d = 12, y = +(t = new h(t));
  if (!t.s) return new h(vn);
  if (s = new h(s), !s.s) {
    if (t.s < 1) throw Error(Dn + "Infinity");
    return s;
  }
  if (s.eq(vn)) return s;
  if (r = h.precision, t.eq(vn)) return Zt(s, r);
  if (e = t.e, n = t.d.length - 1, c = e >= n, l = s.s, c) {
    if ((n = y < 0 ? -y : y) <= GC) {
      for (o = new h(vn), e = Math.ceil(r / re + 4), ie = !1; n % 2 && (o = o.times(s), VE(o.d, e)), n = ko(n / 2), n !== 0; )
        s = s.times(s), VE(s.d, e);
      return ie = !0, t.s < 0 ? new h(vn).div(o) : Zt(o, r);
    }
  } else if (l < 0) throw Error(Dn + "NaN");
  return l = l < 0 && t.d[Math.max(e, n)] & 1 ? -1 : 1, s.s = 1, ie = !1, o = t.times(pl(s, r + d)), ie = !0, o = XC(o), o.s = l, o;
};
ht.toPrecision = function(t, e) {
  var n, r, o = this, l = o.constructor;
  return t === void 0 ? (n = ge(o), r = ei(o, n <= l.toExpNeg || n >= l.toExpPos)) : (er(t, 1, Lo), e === void 0 ? e = l.rounding : er(e, 0, 8), o = Zt(new l(o), t, e), n = ge(o), r = ei(o, t <= n || n <= l.toExpNeg, t)), r;
};
ht.toSignificantDigits = ht.tosd = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (er(t, 1, Lo), e === void 0 ? e = r.rounding : er(e, 0, 8)), Zt(new r(n), t, e);
};
ht.toString = ht.valueOf = ht.val = ht.toJSON = ht[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var t = this, e = ge(t), n = t.constructor;
  return ei(t, e <= n.toExpNeg || e >= n.toExpPos);
};
function YC(t, e) {
  var n, r, o, l, c, s, h, d, y = t.constructor, p = y.precision;
  if (!t.s || !e.s)
    return e.s || (e = new y(t)), ie ? Zt(e, p) : e;
  if (h = t.d, d = e.d, c = t.e, o = e.e, h = h.slice(), l = c - o, l) {
    for (l < 0 ? (r = h, l = -l, s = d.length) : (r = d, o = c, s = h.length), c = Math.ceil(p / re), s = c > s ? c + 1 : s + 1, l > s && (l = s, r.length = 1), r.reverse(); l--; ) r.push(0);
    r.reverse();
  }
  for (s = h.length, l = d.length, s - l < 0 && (l = s, r = d, d = h, h = r), n = 0; l; )
    n = (h[--l] = h[l] + d[l] + n) / Te | 0, h[l] %= Te;
  for (n && (h.unshift(n), ++o), s = h.length; h[--s] == 0; ) h.pop();
  return e.d = h, e.e = o, ie ? Zt(e, p) : e;
}
function er(t, e, n) {
  if (t !== ~~t || t < e || t > n)
    throw Error(Qa + t);
}
function Zn(t) {
  var e, n, r, o = t.length - 1, l = "", c = t[0];
  if (o > 0) {
    for (l += c, e = 1; e < o; e++)
      r = t[e] + "", n = re - r.length, n && (l += va(n)), l += r;
    c = t[e], r = c + "", n = re - r.length, n && (l += va(n));
  } else if (c === 0)
    return "0";
  for (; c % 10 === 0; ) c /= 10;
  return l + c;
}
var Pr = /* @__PURE__ */ (function() {
  function t(r, o) {
    var l, c = 0, s = r.length;
    for (r = r.slice(); s--; )
      l = r[s] * o + c, r[s] = l % Te | 0, c = l / Te | 0;
    return c && r.unshift(c), r;
  }
  function e(r, o, l, c) {
    var s, h;
    if (l != c)
      h = l > c ? 1 : -1;
    else
      for (s = h = 0; s < l; s++)
        if (r[s] != o[s]) {
          h = r[s] > o[s] ? 1 : -1;
          break;
        }
    return h;
  }
  function n(r, o, l) {
    for (var c = 0; l--; )
      r[l] -= c, c = r[l] < o[l] ? 1 : 0, r[l] = c * Te + r[l] - o[l];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, o, l, c) {
    var s, h, d, y, p, g, b, O, S, x, T, w, M, j, A, E, D, R, z = r.constructor, F = r.s == o.s ? 1 : -1, k = r.d, $ = o.d;
    if (!r.s) return new z(r);
    if (!o.s) throw Error(Dn + "Division by zero");
    for (h = r.e - o.e, D = $.length, A = k.length, b = new z(F), O = b.d = [], d = 0; $[d] == (k[d] || 0); ) ++d;
    if ($[d] > (k[d] || 0) && --h, l == null ? w = l = z.precision : c ? w = l + (ge(r) - ge(o)) + 1 : w = l, w < 0) return new z(0);
    if (w = w / re + 2 | 0, d = 0, D == 1)
      for (y = 0, $ = $[0], w++; (d < A || y) && w--; d++)
        M = y * Te + (k[d] || 0), O[d] = M / $ | 0, y = M % $ | 0;
    else {
      for (y = Te / ($[0] + 1) | 0, y > 1 && ($ = t($, y), k = t(k, y), D = $.length, A = k.length), j = D, S = k.slice(0, D), x = S.length; x < D; ) S[x++] = 0;
      R = $.slice(), R.unshift(0), E = $[0], $[1] >= Te / 2 && ++E;
      do
        y = 0, s = e($, S, D, x), s < 0 ? (T = S[0], D != x && (T = T * Te + (S[1] || 0)), y = T / E | 0, y > 1 ? (y >= Te && (y = Te - 1), p = t($, y), g = p.length, x = S.length, s = e(p, S, g, x), s == 1 && (y--, n(p, D < g ? R : $, g))) : (y == 0 && (s = y = 1), p = $.slice()), g = p.length, g < x && p.unshift(0), n(S, p, x), s == -1 && (x = S.length, s = e($, S, D, x), s < 1 && (y++, n(S, D < x ? R : $, x))), x = S.length) : s === 0 && (y++, S = [0]), O[d++] = y, s && S[0] ? S[x++] = k[j] || 0 : (S = [k[j]], x = 1);
      while ((j++ < A || S[0] !== void 0) && w--);
    }
    return O[0] || O.shift(), b.e = h, Zt(b, c ? l + ge(b) + 1 : l);
  };
})();
function XC(t, e) {
  var n, r, o, l, c, s, h = 0, d = 0, y = t.constructor, p = y.precision;
  if (ge(t) > 16) throw Error(X0 + ge(t));
  if (!t.s) return new y(vn);
  for (ie = !1, s = p, c = new y(0.03125); t.abs().gte(0.1); )
    t = t.times(c), d += 5;
  for (r = Math.log(Ga(2, d)) / Math.LN10 * 2 + 5 | 0, s += r, n = o = l = new y(vn), y.precision = s; ; ) {
    if (o = Zt(o.times(t), s), n = n.times(++h), c = l.plus(Pr(o, n, s)), Zn(c.d).slice(0, s) === Zn(l.d).slice(0, s)) {
      for (; d--; ) l = Zt(l.times(l), s);
      return y.precision = p, e == null ? (ie = !0, Zt(l, p)) : l;
    }
    l = c;
  }
}
function ge(t) {
  for (var e = t.e * re, n = t.d[0]; n >= 10; n /= 10) e++;
  return e;
}
function Zm(t, e, n) {
  if (e > t.LN10.sd())
    throw ie = !0, n && (t.precision = n), Error(Dn + "LN10 precision limit exceeded");
  return Zt(new t(t.LN10), e);
}
function va(t) {
  for (var e = ""; t--; ) e += "0";
  return e;
}
function pl(t, e) {
  var n, r, o, l, c, s, h, d, y, p = 1, g = 10, b = t, O = b.d, S = b.constructor, x = S.precision;
  if (b.s < 1) throw Error(Dn + (b.s ? "NaN" : "-Infinity"));
  if (b.eq(vn)) return new S(0);
  if (e == null ? (ie = !1, d = x) : d = e, b.eq(10))
    return e == null && (ie = !0), Zm(S, d);
  if (d += g, S.precision = d, n = Zn(O), r = n.charAt(0), l = ge(b), Math.abs(l) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      b = b.times(t), n = Zn(b.d), r = n.charAt(0), p++;
    l = ge(b), r > 1 ? (b = new S("0." + n), l++) : b = new S(r + "." + n.slice(1));
  } else
    return h = Zm(S, d + 2, x).times(l + ""), b = pl(new S(r + "." + n.slice(1)), d - g).plus(h), S.precision = x, e == null ? (ie = !0, Zt(b, x)) : b;
  for (s = c = b = Pr(b.minus(vn), b.plus(vn), d), y = Zt(b.times(b), d), o = 3; ; ) {
    if (c = Zt(c.times(y), d), h = s.plus(Pr(c, new S(o), d)), Zn(h.d).slice(0, d) === Zn(s.d).slice(0, d))
      return s = s.times(2), l !== 0 && (s = s.plus(Zm(S, d + 2, x).times(l + ""))), s = Pr(s, new S(p), d), S.precision = x, e == null ? (ie = !0, Zt(s, x)) : s;
    s = h, o += 2;
  }
}
function KE(t, e) {
  var n, r, o;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; ) ++r;
  for (o = e.length; e.charCodeAt(o - 1) === 48; ) --o;
  if (e = e.slice(r, o), e) {
    if (o -= r, n = n - r - 1, t.e = ko(n / re), t.d = [], r = (n + 1) % re, n < 0 && (r += re), r < o) {
      for (r && t.d.push(+e.slice(0, r)), o -= re; r < o; ) t.d.push(+e.slice(r, r += re));
      e = e.slice(r), r = re - e.length;
    } else
      r -= o;
    for (; r--; ) e += "0";
    if (t.d.push(+e), ie && (t.e > es || t.e < -es)) throw Error(X0 + n);
  } else
    t.s = 0, t.e = 0, t.d = [0];
  return t;
}
function Zt(t, e, n) {
  var r, o, l, c, s, h, d, y, p = t.d;
  for (c = 1, l = p[0]; l >= 10; l /= 10) c++;
  if (r = e - c, r < 0)
    r += re, o = e, d = p[y = 0];
  else {
    if (y = Math.ceil((r + 1) / re), l = p.length, y >= l) return t;
    for (d = l = p[y], c = 1; l >= 10; l /= 10) c++;
    r %= re, o = r - re + c;
  }
  if (n !== void 0 && (l = Ga(10, c - o - 1), s = d / l % 10 | 0, h = e < 0 || p[y + 1] !== void 0 || d % l, h = n < 4 ? (s || h) && (n == 0 || n == (t.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || h || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (r > 0 ? o > 0 ? d / Ga(10, c - o) : 0 : p[y - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7))), e < 1 || !p[0])
    return h ? (l = ge(t), p.length = 1, e = e - l - 1, p[0] = Ga(10, (re - e % re) % re), t.e = ko(-e / re) || 0) : (p.length = 1, p[0] = t.e = t.s = 0), t;
  if (r == 0 ? (p.length = y, l = 1, y--) : (p.length = y + 1, l = Ga(10, re - r), p[y] = o > 0 ? (d / Ga(10, c - o) % Ga(10, o) | 0) * l : 0), h)
    for (; ; )
      if (y == 0) {
        (p[0] += l) == Te && (p[0] = 1, ++t.e);
        break;
      } else {
        if (p[y] += l, p[y] != Te) break;
        p[y--] = 0, l = 1;
      }
  for (r = p.length; p[--r] === 0; ) p.pop();
  if (ie && (t.e > es || t.e < -es))
    throw Error(X0 + ge(t));
  return t;
}
function KC(t, e) {
  var n, r, o, l, c, s, h, d, y, p, g = t.constructor, b = g.precision;
  if (!t.s || !e.s)
    return e.s ? e.s = -e.s : e = new g(t), ie ? Zt(e, b) : e;
  if (h = t.d, p = e.d, r = e.e, d = t.e, h = h.slice(), c = d - r, c) {
    for (y = c < 0, y ? (n = h, c = -c, s = p.length) : (n = p, r = d, s = h.length), o = Math.max(Math.ceil(b / re), s) + 2, c > o && (c = o, n.length = 1), n.reverse(), o = c; o--; ) n.push(0);
    n.reverse();
  } else {
    for (o = h.length, s = p.length, y = o < s, y && (s = o), o = 0; o < s; o++)
      if (h[o] != p[o]) {
        y = h[o] < p[o];
        break;
      }
    c = 0;
  }
  for (y && (n = h, h = p, p = n, e.s = -e.s), s = h.length, o = p.length - s; o > 0; --o) h[s++] = 0;
  for (o = p.length; o > c; ) {
    if (h[--o] < p[o]) {
      for (l = o; l && h[--l] === 0; ) h[l] = Te - 1;
      --h[l], h[o] += Te;
    }
    h[o] -= p[o];
  }
  for (; h[--s] === 0; ) h.pop();
  for (; h[0] === 0; h.shift()) --r;
  return h[0] ? (e.d = h, e.e = r, ie ? Zt(e, b) : e) : new g(0);
}
function ei(t, e, n) {
  var r, o = ge(t), l = Zn(t.d), c = l.length;
  return e ? (n && (r = n - c) > 0 ? l = l.charAt(0) + "." + l.slice(1) + va(r) : c > 1 && (l = l.charAt(0) + "." + l.slice(1)), l = l + (o < 0 ? "e" : "e+") + o) : o < 0 ? (l = "0." + va(-o - 1) + l, n && (r = n - c) > 0 && (l += va(r))) : o >= c ? (l += va(o + 1 - c), n && (r = n - o - 1) > 0 && (l = l + "." + va(r))) : ((r = o + 1) < c && (l = l.slice(0, r) + "." + l.slice(r)), n && (r = n - c) > 0 && (o + 1 === c && (l += "."), l += va(r))), t.s < 0 ? "-" + l : l;
}
function VE(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function VC(t) {
  var e, n, r;
  function o(l) {
    var c = this;
    if (!(c instanceof o)) return new o(l);
    if (c.constructor = o, l instanceof o) {
      c.s = l.s, c.e = l.e, c.d = (l = l.d) ? l.slice() : l;
      return;
    }
    if (typeof l == "number") {
      if (l * 0 !== 0)
        throw Error(Qa + l);
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
      return KE(c, l.toString());
    } else if (typeof l != "string")
      throw Error(Qa + l);
    if (l.charCodeAt(0) === 45 ? (l = l.slice(1), c.s = -1) : c.s = 1, aL.test(l)) KE(c, l);
    else throw Error(Qa + l);
  }
  if (o.prototype = ht, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = VC, o.config = o.set = iL, t === void 0 && (t = {}), t)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], e = 0; e < r.length; ) t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return o.config(t), o;
}
function iL(t) {
  if (!t || typeof t != "object")
    throw Error(Dn + "Object expected");
  var e, n, r, o = [
    "precision",
    1,
    Lo,
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
  for (e = 0; e < o.length; e += 3)
    if ((r = t[n = o[e]]) !== void 0)
      if (ko(r) === r && r >= o[e + 1] && r <= o[e + 2]) this[n] = r;
      else throw Error(Qa + n + ": " + r);
  if ((r = t[n = "LN10"]) !== void 0)
    if (r == Math.LN10) this[n] = new this(r);
    else throw Error(Qa + n + ": " + r);
  return this;
}
var K0 = VC(rL);
vn = new K0(1);
const Vt = K0;
function oL(t) {
  return fL(t) || cL(t) || lL(t) || uL();
}
function uL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lL(t, e) {
  if (t) {
    if (typeof t == "string") return ib(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ib(t, e);
  }
}
function cL(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function fL(t) {
  if (Array.isArray(t)) return ib(t);
}
function ib(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
var sL = function(e) {
  return e;
}, FC = {}, ZC = function(e) {
  return e === FC;
}, FE = function(e) {
  return function n() {
    return arguments.length === 0 || arguments.length === 1 && ZC(arguments.length <= 0 ? void 0 : arguments[0]) ? n : e.apply(void 0, arguments);
  };
}, hL = function t(e, n) {
  return e === 1 ? n : FE(function() {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    var c = o.filter(function(s) {
      return s !== FC;
    }).length;
    return c >= e ? n.apply(void 0, o) : t(e - c, FE(function() {
      for (var s = arguments.length, h = new Array(s), d = 0; d < s; d++)
        h[d] = arguments[d];
      var y = o.map(function(p) {
        return ZC(p) ? h.shift() : p;
      });
      return n.apply(void 0, oL(y).concat(h));
    }));
  });
}, Fs = function(e) {
  return hL(e.length, e);
}, ob = function(e, n) {
  for (var r = [], o = e; o < n; ++o)
    r[o - e] = o;
  return r;
}, dL = Fs(function(t, e) {
  return Array.isArray(e) ? e.map(t) : Object.keys(e).map(function(n) {
    return e[n];
  }).map(t);
}), vL = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  if (!n.length)
    return sL;
  var o = n.reverse(), l = o[0], c = o.slice(1);
  return function() {
    return c.reduce(function(s, h) {
      return h(s);
    }, l.apply(void 0, arguments));
  };
}, ub = function(e) {
  return Array.isArray(e) ? e.reverse() : e.split("").reverse.join("");
}, QC = function(e) {
  var n = null, r = null;
  return function() {
    for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
      l[c] = arguments[c];
    return n && l.every(function(s, h) {
      return s === n[h];
    }) || (n = l, r = e.apply(void 0, l)), r;
  };
};
function pL(t) {
  var e;
  return t === 0 ? e = 1 : e = Math.floor(new Vt(t).abs().log(10).toNumber()) + 1, e;
}
function yL(t, e, n) {
  for (var r = new Vt(t), o = 0, l = []; r.lt(e) && o < 1e5; )
    l.push(r.toNumber()), r = r.add(n), o++;
  return l;
}
var mL = Fs(function(t, e, n) {
  var r = +t, o = +e;
  return r + n * (o - r);
}), gL = Fs(function(t, e, n) {
  var r = e - +t;
  return r = r || 1 / 0, (n - t) / r;
}), bL = Fs(function(t, e, n) {
  var r = e - +t;
  return r = r || 1 / 0, Math.max(0, Math.min(1, (n - t) / r));
});
const Zs = {
  rangeStep: yL,
  getDigitCount: pL,
  interpolateNumber: mL,
  uninterpolateNumber: gL,
  uninterpolateTruncation: bL
};
function lb(t) {
  return _L(t) || SL(t) || WC(t) || xL();
}
function xL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SL(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function _L(t) {
  if (Array.isArray(t)) return cb(t);
}
function yl(t, e) {
  return wL(t) || AL(t, e) || WC(t, e) || OL();
}
function OL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WC(t, e) {
  if (t) {
    if (typeof t == "string") return cb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cb(t, e);
  }
}
function cb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function AL(t, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
    var n = [], r = !0, o = !1, l = void 0;
    try {
      for (var c = t[Symbol.iterator](), s; !(r = (s = c.next()).done) && (n.push(s.value), !(e && n.length === e)); r = !0)
        ;
    } catch (h) {
      o = !0, l = h;
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
function wL(t) {
  if (Array.isArray(t)) return t;
}
function JC(t) {
  var e = yl(t, 2), n = e[0], r = e[1], o = n, l = r;
  return n > r && (o = r, l = n), [o, l];
}
function tD(t, e, n) {
  if (t.lte(0))
    return new Vt(0);
  var r = Zs.getDigitCount(t.toNumber()), o = new Vt(10).pow(r), l = t.div(o), c = r !== 1 ? 0.05 : 0.1, s = new Vt(Math.ceil(l.div(c).toNumber())).add(n).mul(c), h = s.mul(o);
  return e ? h : new Vt(Math.ceil(h));
}
function TL(t, e, n) {
  var r = 1, o = new Vt(t);
  if (!o.isint() && n) {
    var l = Math.abs(t);
    l < 1 ? (r = new Vt(10).pow(Zs.getDigitCount(t) - 1), o = new Vt(Math.floor(o.div(r).toNumber())).mul(r)) : l > 1 && (o = new Vt(Math.floor(t)));
  } else t === 0 ? o = new Vt(Math.floor((e - 1) / 2)) : n || (o = new Vt(Math.floor(t)));
  var c = Math.floor((e - 1) / 2), s = vL(dL(function(h) {
    return o.add(new Vt(h - c).mul(r)).toNumber();
  }), ob);
  return s(0, e);
}
function eD(t, e, n, r) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((e - t) / (n - 1)))
    return {
      step: new Vt(0),
      tickMin: new Vt(0),
      tickMax: new Vt(0)
    };
  var l = tD(new Vt(e).sub(t).div(n - 1), r, o), c;
  t <= 0 && e >= 0 ? c = new Vt(0) : (c = new Vt(t).add(e).div(2), c = c.sub(new Vt(c).mod(l)));
  var s = Math.ceil(c.sub(t).div(l).toNumber()), h = Math.ceil(new Vt(e).sub(c).div(l).toNumber()), d = s + h + 1;
  return d > n ? eD(t, e, n, r, o + 1) : (d < n && (h = e > 0 ? h + (n - d) : h, s = e > 0 ? s : s + (n - d)), {
    step: l,
    tickMin: c.sub(new Vt(s).mul(l)),
    tickMax: c.add(new Vt(h).mul(l))
  });
}
function EL(t) {
  var e = yl(t, 2), n = e[0], r = e[1], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = Math.max(o, 2), s = JC([n, r]), h = yl(s, 2), d = h[0], y = h[1];
  if (d === -1 / 0 || y === 1 / 0) {
    var p = y === 1 / 0 ? [d].concat(lb(ob(0, o - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(lb(ob(0, o - 1).map(function() {
      return -1 / 0;
    })), [y]);
    return n > r ? ub(p) : p;
  }
  if (d === y)
    return TL(d, o, l);
  var g = eD(d, y, c, l), b = g.step, O = g.tickMin, S = g.tickMax, x = Zs.rangeStep(O, S.add(new Vt(0.1).mul(b)), b);
  return n > r ? ub(x) : x;
}
function ML(t, e) {
  var n = yl(t, 2), r = n[0], o = n[1], l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = JC([r, o]), s = yl(c, 2), h = s[0], d = s[1];
  if (h === -1 / 0 || d === 1 / 0)
    return [r, o];
  if (h === d)
    return [h];
  var y = Math.max(e, 2), p = tD(new Vt(d).sub(h).div(y - 1), l, 0), g = [].concat(lb(Zs.rangeStep(new Vt(h), new Vt(d).sub(new Vt(0.99).mul(p)), p)), [d]);
  return r > o ? ub(g) : g;
}
var jL = QC(EL), CL = QC(ML), DL = "Invariant failed";
function ni(t, e) {
  throw new Error(DL);
}
var PL = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function go(t) {
  "@babel/helpers - typeof";
  return go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, go(t);
}
function ns() {
  return ns = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ns.apply(this, arguments);
}
function NL(t, e) {
  return $L(t) || zL(t, e) || qL(t, e) || RL();
}
function RL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qL(t, e) {
  if (t) {
    if (typeof t == "string") return ZE(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ZE(t, e);
  }
}
function ZE(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function zL(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function $L(t) {
  if (Array.isArray(t)) return t;
}
function BL(t, e) {
  if (t == null) return {};
  var n = LL(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function LL(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function kL(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function UL(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, aD(r.key), r);
  }
}
function HL(t, e, n) {
  return e && UL(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function IL(t, e, n) {
  return e = rs(e), GL(t, nD() ? Reflect.construct(e, n || [], rs(t).constructor) : e.apply(t, n));
}
function GL(t, e) {
  if (e && (go(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YL(t);
}
function YL(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function nD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nD = function() {
    return !!t;
  })();
}
function rs(t) {
  return rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, rs(t);
}
function XL(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && fb(t, e);
}
function fb(t, e) {
  return fb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, fb(t, e);
}
function rD(t, e, n) {
  return e = aD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function aD(t) {
  var e = KL(t, "string");
  return go(e) == "symbol" ? e : e + "";
}
function KL(t, e) {
  if (go(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Gl = /* @__PURE__ */ (function(t) {
  function e() {
    return kL(this, e), IL(this, e, arguments);
  }
  return XL(e, t), HL(e, [{
    key: "render",
    value: function() {
      var r = this.props, o = r.offset, l = r.layout, c = r.width, s = r.dataKey, h = r.data, d = r.dataPointFormatter, y = r.xAxis, p = r.yAxis, g = BL(r, PL), b = Et(g, !1);
      this.props.direction === "x" && y.type !== "number" && ni();
      var O = h.map(function(S) {
        var x = d(S, s), T = x.x, w = x.y, M = x.value, j = x.errorVal;
        if (!j)
          return null;
        var A = [], E, D;
        if (Array.isArray(j)) {
          var R = NL(j, 2);
          E = R[0], D = R[1];
        } else
          E = D = j;
        if (l === "vertical") {
          var z = y.scale, F = w + o, k = F + c, $ = F - c, K = z(M - E), Z = z(M + D);
          A.push({
            x1: Z,
            y1: k,
            x2: Z,
            y2: $
          }), A.push({
            x1: K,
            y1: F,
            x2: Z,
            y2: F
          }), A.push({
            x1: K,
            y1: k,
            x2: K,
            y2: $
          });
        } else if (l === "horizontal") {
          var V = p.scale, N = T + o, I = N - c, W = N + c, ot = V(M - E), lt = V(M + D);
          A.push({
            x1: I,
            y1: lt,
            x2: W,
            y2: lt
          }), A.push({
            x1: N,
            y1: ot,
            x2: N,
            y2: lt
          }), A.push({
            x1: I,
            y1: ot,
            x2: W,
            y2: ot
          });
        }
        return /* @__PURE__ */ B.createElement(Jt, ns({
          className: "recharts-errorBar",
          key: "bar-".concat(A.map(function(P) {
            return "".concat(P.x1, "-").concat(P.x2, "-").concat(P.y1, "-").concat(P.y2);
          }))
        }, b), A.map(function(P) {
          return /* @__PURE__ */ B.createElement("line", ns({}, P, {
            key: "line-".concat(P.x1, "-").concat(P.x2, "-").concat(P.y1, "-").concat(P.y2)
          }));
        }));
      });
      return /* @__PURE__ */ B.createElement(Jt, {
        className: "recharts-errorBars"
      }, O);
    }
  }]);
})(B.Component);
rD(Gl, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
rD(Gl, "displayName", "ErrorBar");
function ml(t) {
  "@babel/helpers - typeof";
  return ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ml(t);
}
function QE(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ha(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? QE(Object(n), !0).forEach(function(r) {
      VL(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : QE(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function VL(t, e, n) {
  return e = FL(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function FL(t) {
  var e = ZL(t, "string");
  return ml(e) == "symbol" ? e : e + "";
}
function ZL(t, e) {
  if (ml(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ml(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var iD = function(e) {
  var n = e.children, r = e.formattedGraphicalItems, o = e.legendWidth, l = e.legendContent, c = hn(n, ro);
  if (!c)
    return null;
  var s = ro.defaultProps, h = s !== void 0 ? Ha(Ha({}, s), c.props) : {}, d;
  return c.props && c.props.payload ? d = c.props && c.props.payload : l === "children" ? d = (r || []).reduce(function(y, p) {
    var g = p.item, b = p.props, O = b.sectors || b.data || [];
    return y.concat(O.map(function(S) {
      return {
        type: c.props.iconType || g.props.legendType,
        value: S.name,
        color: S.fill,
        payload: S
      };
    }));
  }, []) : d = (r || []).map(function(y) {
    var p = y.item, g = p.type.defaultProps, b = g !== void 0 ? Ha(Ha({}, g), p.props) : {}, O = b.dataKey, S = b.name, x = b.legendType, T = b.hide;
    return {
      inactive: T,
      dataKey: O,
      type: h.iconType || x || "square",
      color: V0(p),
      value: S || O,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: b
    };
  }), Ha(Ha(Ha({}, h), ro.getWithHeight(c, o)), {}, {
    payload: d,
    item: c
  });
};
function gl(t) {
  "@babel/helpers - typeof";
  return gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gl(t);
}
function WE(t) {
  return t5(t) || JL(t) || WL(t) || QL();
}
function QL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WL(t, e) {
  if (t) {
    if (typeof t == "string") return sb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sb(t, e);
  }
}
function JL(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function t5(t) {
  if (Array.isArray(t)) return sb(t);
}
function sb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function JE(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? JE(Object(n), !0).forEach(function(r) {
      io(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : JE(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function io(t, e, n) {
  return e = e5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function e5(t) {
  var e = n5(t, "string");
  return gl(e) == "symbol" ? e : e + "";
}
function n5(t, e) {
  if (gl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (gl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ge(t, e, n) {
  return Mt(t) || Mt(e) ? n : _e(e) ? jn(t, e, n) : At(e) ? e(t) : n;
}
function Ju(t, e, n, r) {
  var o = tL(t, function(s) {
    return Ge(s, e);
  });
  if (n === "number") {
    var l = o.filter(function(s) {
      return st(s) || parseFloat(s);
    });
    return l.length ? [Vs(l), ya(l)] : [1 / 0, -1 / 0];
  }
  var c = r ? o.filter(function(s) {
    return !Mt(s);
  }) : o;
  return c.map(function(s) {
    return _e(s) || s instanceof Date ? s : "";
  });
}
var r5 = function(e) {
  var n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], o = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, c = -1, s = (n = r == null ? void 0 : r.length) !== null && n !== void 0 ? n : 0;
  if (s <= 1)
    return 0;
  if (l && l.axisType === "angleAxis" && Math.abs(Math.abs(l.range[1] - l.range[0]) - 360) <= 1e-6)
    for (var h = l.range, d = 0; d < s; d++) {
      var y = d > 0 ? o[d - 1].coordinate : o[s - 1].coordinate, p = o[d].coordinate, g = d >= s - 1 ? o[0].coordinate : o[d + 1].coordinate, b = void 0;
      if (Hn(p - y) !== Hn(g - p)) {
        var O = [];
        if (Hn(g - p) === Hn(h[1] - h[0])) {
          b = g;
          var S = p + h[1] - h[0];
          O[0] = Math.min(S, (S + y) / 2), O[1] = Math.max(S, (S + y) / 2);
        } else {
          b = y;
          var x = g + h[1] - h[0];
          O[0] = Math.min(p, (x + p) / 2), O[1] = Math.max(p, (x + p) / 2);
        }
        var T = [Math.min(p, (b + p) / 2), Math.max(p, (b + p) / 2)];
        if (e > T[0] && e <= T[1] || e >= O[0] && e <= O[1]) {
          c = o[d].index;
          break;
        }
      } else {
        var w = Math.min(y, g), M = Math.max(y, g);
        if (e > (w + p) / 2 && e <= (M + p) / 2) {
          c = o[d].index;
          break;
        }
      }
    }
  else
    for (var j = 0; j < s; j++)
      if (j === 0 && e <= (r[j].coordinate + r[j + 1].coordinate) / 2 || j > 0 && j < s - 1 && e > (r[j].coordinate + r[j - 1].coordinate) / 2 && e <= (r[j].coordinate + r[j + 1].coordinate) / 2 || j === s - 1 && e > (r[j].coordinate + r[j - 1].coordinate) / 2) {
        c = r[j].index;
        break;
      }
  return c;
}, V0 = function(e) {
  var n, r = e, o = r.type.displayName, l = (n = e.type) !== null && n !== void 0 && n.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, c = l.stroke, s = l.fill, h;
  switch (o) {
    case "Line":
      h = c;
      break;
    case "Area":
    case "Radar":
      h = c && c !== "none" ? c : s;
      break;
    default:
      h = s;
      break;
  }
  return h;
}, a5 = function(e) {
  var n = e.barSize, r = e.totalSize, o = e.stackGroups, l = o === void 0 ? {} : o;
  if (!l)
    return {};
  for (var c = {}, s = Object.keys(l), h = 0, d = s.length; h < d; h++)
    for (var y = l[s[h]].stackGroups, p = Object.keys(y), g = 0, b = p.length; g < b; g++) {
      var O = y[p[g]], S = O.items, x = O.cateAxisId, T = S.filter(function(D) {
        return Cr(D.type).indexOf("Bar") >= 0;
      });
      if (T && T.length) {
        var w = T[0].type.defaultProps, M = w !== void 0 ? fe(fe({}, w), T[0].props) : T[0].props, j = M.barSize, A = M[x];
        c[A] || (c[A] = []);
        var E = Mt(j) ? n : j;
        c[A].push({
          item: T[0],
          stackList: T.slice(1),
          barSize: Mt(E) ? void 0 : ti(E, r, 0)
        });
      }
    }
  return c;
}, i5 = function(e) {
  var n = e.barGap, r = e.barCategoryGap, o = e.bandSize, l = e.sizeList, c = l === void 0 ? [] : l, s = e.maxBarSize, h = c.length;
  if (h < 1) return null;
  var d = ti(n, o, 0, !0), y, p = [];
  if (c[0].barSize === +c[0].barSize) {
    var g = !1, b = o / h, O = c.reduce(function(j, A) {
      return j + A.barSize || 0;
    }, 0);
    O += (h - 1) * d, O >= o && (O -= (h - 1) * d, d = 0), O >= o && b > 0 && (g = !0, b *= 0.9, O = h * b);
    var S = (o - O) / 2 >> 0, x = {
      offset: S - d,
      size: 0
    };
    y = c.reduce(function(j, A) {
      var E = {
        item: A.item,
        position: {
          offset: x.offset + x.size + d,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: g ? b : A.barSize
        }
      }, D = [].concat(WE(j), [E]);
      return x = D[D.length - 1].position, A.stackList && A.stackList.length && A.stackList.forEach(function(R) {
        D.push({
          item: R,
          position: x
        });
      }), D;
    }, p);
  } else {
    var T = ti(r, o, 0, !0);
    o - 2 * T - (h - 1) * d <= 0 && (d = 0);
    var w = (o - 2 * T - (h - 1) * d) / h;
    w > 1 && (w >>= 0);
    var M = s === +s ? Math.min(w, s) : w;
    y = c.reduce(function(j, A, E) {
      var D = [].concat(WE(j), [{
        item: A.item,
        position: {
          offset: T + (w + d) * E + (w - M) / 2,
          size: M
        }
      }]);
      return A.stackList && A.stackList.length && A.stackList.forEach(function(R) {
        D.push({
          item: R,
          position: D[D.length - 1].position
        });
      }), D;
    }, p);
  }
  return y;
}, o5 = function(e, n, r, o) {
  var l = r.children, c = r.width, s = r.margin, h = c - (s.left || 0) - (s.right || 0), d = iD({
    children: l,
    legendWidth: h
  });
  if (d) {
    var y = o || {}, p = y.width, g = y.height, b = d.align, O = d.verticalAlign, S = d.layout;
    if ((S === "vertical" || S === "horizontal" && O === "middle") && b !== "center" && st(e[b]))
      return fe(fe({}, e), {}, io({}, b, e[b] + (p || 0)));
    if ((S === "horizontal" || S === "vertical" && b === "center") && O !== "middle" && st(e[O]))
      return fe(fe({}, e), {}, io({}, O, e[O] + (g || 0)));
  }
  return e;
}, u5 = function(e, n, r) {
  return Mt(n) ? !0 : e === "horizontal" ? n === "yAxis" : e === "vertical" || r === "x" ? n === "xAxis" : r === "y" ? n === "yAxis" : !0;
}, oD = function(e, n, r, o, l) {
  var c = n.props.children, s = Cn(c, Gl).filter(function(d) {
    return u5(o, l, d.props.direction);
  });
  if (s && s.length) {
    var h = s.map(function(d) {
      return d.props.dataKey;
    });
    return e.reduce(function(d, y) {
      var p = Ge(y, r);
      if (Mt(p)) return d;
      var g = Array.isArray(p) ? [Vs(p), ya(p)] : [p, p], b = h.reduce(function(O, S) {
        var x = Ge(y, S, 0), T = g[0] - Math.abs(Array.isArray(x) ? x[0] : x), w = g[1] + Math.abs(Array.isArray(x) ? x[1] : x);
        return [Math.min(T, O[0]), Math.max(w, O[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(b[0], d[0]), Math.max(b[1], d[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, l5 = function(e, n, r, o, l) {
  var c = n.map(function(s) {
    return oD(e, s, r, l, o);
  }).filter(function(s) {
    return !Mt(s);
  });
  return c && c.length ? c.reduce(function(s, h) {
    return [Math.min(s[0], h[0]), Math.max(s[1], h[1])];
  }, [1 / 0, -1 / 0]) : null;
}, uD = function(e, n, r, o, l) {
  var c = n.map(function(h) {
    var d = h.props.dataKey;
    return r === "number" && d && oD(e, h, d, o) || Ju(e, d, r, l);
  });
  if (r === "number")
    return c.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(h, d) {
        return [Math.min(h[0], d[0]), Math.max(h[1], d[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return c.reduce(function(h, d) {
    for (var y = 0, p = d.length; y < p; y++)
      s[d[y]] || (s[d[y]] = !0, h.push(d[y]));
    return h;
  }, []);
}, lD = function(e, n) {
  return e === "horizontal" && n === "xAxis" || e === "vertical" && n === "yAxis" || e === "centric" && n === "angleAxis" || e === "radial" && n === "radiusAxis";
}, cD = function(e, n, r, o) {
  if (o)
    return e.map(function(h) {
      return h.coordinate;
    });
  var l, c, s = e.map(function(h) {
    return h.coordinate === n && (l = !0), h.coordinate === r && (c = !0), h.coordinate;
  });
  return l || s.push(n), c || s.push(r), s;
}, Er = function(e, n, r) {
  if (!e) return null;
  var o = e.scale, l = e.duplicateDomain, c = e.type, s = e.range, h = e.realScaleType === "scaleBand" ? o.bandwidth() / 2 : 2, d = (n || r) && c === "category" && o.bandwidth ? o.bandwidth() / h : 0;
  if (d = e.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? Hn(s[0] - s[1]) * 2 * d : d, n && (e.ticks || e.niceTicks)) {
    var y = (e.ticks || e.niceTicks).map(function(p) {
      var g = l ? l.indexOf(p) : p;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: o(g) + d,
        value: p,
        offset: d
      };
    });
    return y.filter(function(p) {
      return !qo(p.coordinate);
    });
  }
  return e.isCategorical && e.categoricalDomain ? e.categoricalDomain.map(function(p, g) {
    return {
      coordinate: o(p) + d,
      value: p,
      index: g,
      offset: d
    };
  }) : o.ticks && !r ? o.ticks(e.tickCount).map(function(p) {
    return {
      coordinate: o(p) + d,
      value: p,
      offset: d
    };
  }) : o.domain().map(function(p, g) {
    return {
      coordinate: o(p) + d,
      value: l ? l[p] : p,
      index: g,
      offset: d
    };
  });
}, Qm = /* @__PURE__ */ new WeakMap(), bf = function(e, n) {
  if (typeof n != "function")
    return e;
  Qm.has(e) || Qm.set(e, /* @__PURE__ */ new WeakMap());
  var r = Qm.get(e);
  if (r.has(n))
    return r.get(n);
  var o = function() {
    e.apply(void 0, arguments), n.apply(void 0, arguments);
  };
  return r.set(n, o), o;
}, c5 = function(e, n, r) {
  var o = e.scale, l = e.type, c = e.layout, s = e.axisType;
  if (o === "auto")
    return c === "radial" && s === "radiusAxis" ? {
      scale: fl(),
      realScaleType: "band"
    } : c === "radial" && s === "angleAxis" ? {
      scale: Qf(),
      realScaleType: "linear"
    } : l === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? {
      scale: Wu(),
      realScaleType: "point"
    } : l === "category" ? {
      scale: fl(),
      realScaleType: "band"
    } : {
      scale: Qf(),
      realScaleType: "linear"
    };
  if (Ja(o)) {
    var h = "scale".concat(qs(o));
    return {
      scale: (BE[h] || Wu)(),
      realScaleType: BE[h] ? h : "point"
    };
  }
  return At(o) ? {
    scale: o
  } : {
    scale: Wu(),
    realScaleType: "point"
  };
}, t2 = 1e-4, f5 = function(e) {
  var n = e.domain();
  if (!(!n || n.length <= 2)) {
    var r = n.length, o = e.range(), l = Math.min(o[0], o[1]) - t2, c = Math.max(o[0], o[1]) + t2, s = e(n[0]), h = e(n[r - 1]);
    (s < l || s > c || h < l || h > c) && e.domain([n[0], n[r - 1]]);
  }
}, s5 = function(e, n) {
  if (!e)
    return null;
  for (var r = 0, o = e.length; r < o; r++)
    if (e[r].item === n)
      return e[r].position;
  return null;
}, h5 = function(e, n) {
  if (!n || n.length !== 2 || !st(n[0]) || !st(n[1]))
    return e;
  var r = Math.min(n[0], n[1]), o = Math.max(n[0], n[1]), l = [e[0], e[1]];
  return (!st(e[0]) || e[0] < r) && (l[0] = r), (!st(e[1]) || e[1] > o) && (l[1] = o), l[0] > o && (l[0] = o), l[1] < r && (l[1] = r), l;
}, d5 = function(e) {
  var n = e.length;
  if (!(n <= 0))
    for (var r = 0, o = e[0].length; r < o; ++r)
      for (var l = 0, c = 0, s = 0; s < n; ++s) {
        var h = qo(e[s][r][1]) ? e[s][r][0] : e[s][r][1];
        h >= 0 ? (e[s][r][0] = l, e[s][r][1] = l + h, l = e[s][r][1]) : (e[s][r][0] = c, e[s][r][1] = c + h, c = e[s][r][1]);
      }
}, v5 = function(e) {
  var n = e.length;
  if (!(n <= 0))
    for (var r = 0, o = e[0].length; r < o; ++r)
      for (var l = 0, c = 0; c < n; ++c) {
        var s = qo(e[c][r][1]) ? e[c][r][0] : e[c][r][1];
        s >= 0 ? (e[c][r][0] = l, e[c][r][1] = l + s, l = e[c][r][1]) : (e[c][r][0] = 0, e[c][r][1] = 0);
      }
}, p5 = {
  sign: d5,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Wq,
  // @ts-expect-error definitelytyped types are incorrect
  none: lo,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Jq,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: tz,
  positive: v5
}, y5 = function(e, n, r) {
  var o = n.map(function(s) {
    return s.props.dataKey;
  }), l = p5[r], c = Qq().keys(o).value(function(s, h) {
    return +Ge(s, h, 0);
  }).order(Ug).offset(l);
  return c(e);
}, m5 = function(e, n, r, o, l, c) {
  if (!e)
    return null;
  var s = c ? n.reverse() : n, h = {}, d = s.reduce(function(p, g) {
    var b, O = (b = g.type) !== null && b !== void 0 && b.defaultProps ? fe(fe({}, g.type.defaultProps), g.props) : g.props, S = O.stackId, x = O.hide;
    if (x)
      return p;
    var T = O[r], w = p[T] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (_e(S)) {
      var M = w.stackGroups[S] || {
        numericAxisId: r,
        cateAxisId: o,
        items: []
      };
      M.items.push(g), w.hasStack = !0, w.stackGroups[S] = M;
    } else
      w.stackGroups[zo("_stackId_")] = {
        numericAxisId: r,
        cateAxisId: o,
        items: [g]
      };
    return fe(fe({}, p), {}, io({}, T, w));
  }, h), y = {};
  return Object.keys(d).reduce(function(p, g) {
    var b = d[g];
    if (b.hasStack) {
      var O = {};
      b.stackGroups = Object.keys(b.stackGroups).reduce(function(S, x) {
        var T = b.stackGroups[x];
        return fe(fe({}, S), {}, io({}, x, {
          numericAxisId: r,
          cateAxisId: o,
          items: T.items,
          stackedData: y5(e, T.items, l)
        }));
      }, O);
    }
    return fe(fe({}, p), {}, io({}, g, b));
  }, y);
}, g5 = function(e, n) {
  var r = n.realScaleType, o = n.type, l = n.tickCount, c = n.originalDomain, s = n.allowDecimals, h = r || n.scale;
  if (h !== "auto" && h !== "linear")
    return null;
  if (l && o === "number" && c && (c[0] === "auto" || c[1] === "auto")) {
    var d = e.domain();
    if (!d.length)
      return null;
    var y = jL(d, l, s);
    return e.domain([Vs(y), ya(y)]), {
      niceTicks: y
    };
  }
  if (l && o === "number") {
    var p = e.domain(), g = CL(p, l, s);
    return {
      niceTicks: g
    };
  }
  return null;
};
function as(t) {
  var e = t.axis, n = t.ticks, r = t.bandSize, o = t.entry, l = t.index, c = t.dataKey;
  if (e.type === "category") {
    if (!e.allowDuplicatedCategory && e.dataKey && !Mt(o[e.dataKey])) {
      var s = Cf(n, "value", o[e.dataKey]);
      if (s)
        return s.coordinate + r / 2;
    }
    return n[l] ? n[l].coordinate + r / 2 : null;
  }
  var h = Ge(o, Mt(c) ? e.dataKey : c);
  return Mt(h) ? null : e.scale(h);
}
var e2 = function(e) {
  var n = e.axis, r = e.ticks, o = e.offset, l = e.bandSize, c = e.entry, s = e.index;
  if (n.type === "category")
    return r[s] ? r[s].coordinate + o : null;
  var h = Ge(c, n.dataKey, n.domain[s]);
  return Mt(h) ? null : n.scale(h) - l / 2 + o;
}, b5 = function(e) {
  var n = e.numericAxis, r = n.scale.domain();
  if (n.type === "number") {
    var o = Math.min(r[0], r[1]), l = Math.max(r[0], r[1]);
    return o <= 0 && l >= 0 ? 0 : l < 0 ? l : o;
  }
  return r[0];
}, x5 = function(e, n) {
  var r, o = (r = e.type) !== null && r !== void 0 && r.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, l = o.stackId;
  if (_e(l)) {
    var c = n[l];
    if (c) {
      var s = c.items.indexOf(e);
      return s >= 0 ? c.stackedData[s] : null;
    }
  }
  return null;
}, S5 = function(e) {
  return e.reduce(function(n, r) {
    return [Vs(r.concat([n[0]]).filter(st)), ya(r.concat([n[1]]).filter(st))];
  }, [1 / 0, -1 / 0]);
}, fD = function(e, n, r) {
  return Object.keys(e).reduce(function(o, l) {
    var c = e[l], s = c.stackedData, h = s.reduce(function(d, y) {
      var p = S5(y.slice(n, r + 1));
      return [Math.min(d[0], p[0]), Math.max(d[1], p[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(h[0], o[0]), Math.max(h[1], o[1])];
  }, [1 / 0, -1 / 0]).map(function(o) {
    return o === 1 / 0 || o === -1 / 0 ? 0 : o;
  });
}, n2 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, r2 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, hb = function(e, n, r) {
  if (At(e))
    return e(n, r);
  if (!Array.isArray(e))
    return n;
  var o = [];
  if (st(e[0]))
    o[0] = r ? e[0] : Math.min(e[0], n[0]);
  else if (n2.test(e[0])) {
    var l = +n2.exec(e[0])[1];
    o[0] = n[0] - l;
  } else At(e[0]) ? o[0] = e[0](n[0]) : o[0] = n[0];
  if (st(e[1]))
    o[1] = r ? e[1] : Math.max(e[1], n[1]);
  else if (r2.test(e[1])) {
    var c = +r2.exec(e[1])[1];
    o[1] = n[1] + c;
  } else At(e[1]) ? o[1] = e[1](n[1]) : o[1] = n[1];
  return o;
}, is = function(e, n, r) {
  if (e && e.scale && e.scale.bandwidth) {
    var o = e.scale.bandwidth();
    if (!r || o > 0)
      return o;
  }
  if (e && n && n.length >= 2) {
    for (var l = S0(n, function(p) {
      return p.coordinate;
    }), c = 1 / 0, s = 1, h = l.length; s < h; s++) {
      var d = l[s], y = l[s - 1];
      c = Math.min((d.coordinate || 0) - (y.coordinate || 0), c);
    }
    return c === 1 / 0 ? 0 : c;
  }
  return r ? void 0 : 0;
}, a2 = function(e, n, r) {
  return !e || !e.length || mo(e, jn(r, "type.defaultProps.domain")) ? n : e;
}, sD = function(e, n) {
  var r = e.type.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, o = r.dataKey, l = r.name, c = r.unit, s = r.formatter, h = r.tooltipType, d = r.chartType, y = r.hide;
  return fe(fe({}, Et(e, !1)), {}, {
    dataKey: o,
    unit: c,
    formatter: s,
    name: l || o,
    color: V0(e),
    value: Ge(n, o),
    type: h,
    payload: n,
    chartType: d,
    hide: y
  });
};
function bl(t) {
  "@babel/helpers - typeof";
  return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bl(t);
}
function i2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function o2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? i2(Object(n), !0).forEach(function(r) {
      _5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function _5(t, e, n) {
  return e = O5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function O5(t) {
  var e = A5(t, "string");
  return bl(e) == "symbol" ? e : e + "";
}
function A5(t, e) {
  if (bl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (bl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var os = Math.PI / 180, w5 = function(e) {
  return e * 180 / Math.PI;
}, qe = function(e, n, r, o) {
  return {
    x: e + Math.cos(-os * o) * r,
    y: n + Math.sin(-os * o) * r
  };
}, T5 = function(e, n) {
  var r = e.x, o = e.y, l = n.x, c = n.y;
  return Math.sqrt(Math.pow(r - l, 2) + Math.pow(o - c, 2));
}, E5 = function(e, n) {
  var r = e.x, o = e.y, l = n.cx, c = n.cy, s = T5({
    x: r,
    y: o
  }, {
    x: l,
    y: c
  });
  if (s <= 0)
    return {
      radius: s
    };
  var h = (r - l) / s, d = Math.acos(h);
  return o > c && (d = 2 * Math.PI - d), {
    radius: s,
    angle: w5(d),
    angleInRadian: d
  };
}, M5 = function(e) {
  var n = e.startAngle, r = e.endAngle, o = Math.floor(n / 360), l = Math.floor(r / 360), c = Math.min(o, l);
  return {
    startAngle: n - c * 360,
    endAngle: r - c * 360
  };
}, j5 = function(e, n) {
  var r = n.startAngle, o = n.endAngle, l = Math.floor(r / 360), c = Math.floor(o / 360), s = Math.min(l, c);
  return e + s * 360;
}, u2 = function(e, n) {
  var r = e.x, o = e.y, l = E5({
    x: r,
    y: o
  }, n), c = l.radius, s = l.angle, h = n.innerRadius, d = n.outerRadius;
  if (c < h || c > d)
    return !1;
  if (c === 0)
    return !0;
  var y = M5(n), p = y.startAngle, g = y.endAngle, b = s, O;
  if (p <= g) {
    for (; b > g; )
      b -= 360;
    for (; b < p; )
      b += 360;
    O = b >= p && b <= g;
  } else {
    for (; b > p; )
      b -= 360;
    for (; b < g; )
      b += 360;
    O = b >= g && b <= p;
  }
  return O ? o2(o2({}, n), {}, {
    radius: c,
    angle: j5(b, n)
  }) : null;
};
function xl(t) {
  "@babel/helpers - typeof";
  return xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xl(t);
}
var C5 = ["offset"];
function D5(t) {
  return q5(t) || R5(t) || N5(t) || P5();
}
function P5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N5(t, e) {
  if (t) {
    if (typeof t == "string") return db(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return db(t, e);
  }
}
function R5(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function q5(t) {
  if (Array.isArray(t)) return db(t);
}
function db(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function z5(t, e) {
  if (t == null) return {};
  var n = $5(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function $5(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function l2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? l2(Object(n), !0).forEach(function(r) {
      B5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function B5(t, e, n) {
  return e = L5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function L5(t) {
  var e = k5(t, "string");
  return xl(e) == "symbol" ? e : e + "";
}
function k5(t, e) {
  if (xl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (xl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Sl() {
  return Sl = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Sl.apply(this, arguments);
}
var U5 = function(e) {
  var n = e.value, r = e.formatter, o = Mt(e.children) ? n : e.children;
  return At(r) ? r(o) : o;
}, H5 = function(e, n) {
  var r = Hn(n - e), o = Math.min(Math.abs(n - e), 360);
  return r * o;
}, I5 = function(e, n, r) {
  var o = e.position, l = e.viewBox, c = e.offset, s = e.className, h = l, d = h.cx, y = h.cy, p = h.innerRadius, g = h.outerRadius, b = h.startAngle, O = h.endAngle, S = h.clockWise, x = (p + g) / 2, T = H5(b, O), w = T >= 0 ? 1 : -1, M, j;
  o === "insideStart" ? (M = b + w * c, j = S) : o === "insideEnd" ? (M = O - w * c, j = !S) : o === "end" && (M = O + w * c, j = S), j = T <= 0 ? j : !j;
  var A = qe(d, y, x, M), E = qe(d, y, x, M + (j ? 1 : -1) * 359), D = "M".concat(A.x, ",").concat(A.y, `
    A`).concat(x, ",").concat(x, ",0,1,").concat(j ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), R = Mt(e.id) ? zo("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ B.createElement("text", Sl({}, r, {
    dominantBaseline: "central",
    className: qt("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("path", {
    id: R,
    d: D
  })), /* @__PURE__ */ B.createElement("textPath", {
    xlinkHref: "#".concat(R)
  }, n));
}, G5 = function(e) {
  var n = e.viewBox, r = e.offset, o = e.position, l = n, c = l.cx, s = l.cy, h = l.innerRadius, d = l.outerRadius, y = l.startAngle, p = l.endAngle, g = (y + p) / 2;
  if (o === "outside") {
    var b = qe(c, s, d + r, g), O = b.x, S = b.y;
    return {
      x: O,
      y: S,
      textAnchor: O >= c ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (o === "center")
    return {
      x: c,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (o === "centerTop")
    return {
      x: c,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (o === "centerBottom")
    return {
      x: c,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var x = (h + d) / 2, T = qe(c, s, x, g), w = T.x, M = T.y;
  return {
    x: w,
    y: M,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Y5 = function(e) {
  var n = e.viewBox, r = e.parentViewBox, o = e.offset, l = e.position, c = n, s = c.x, h = c.y, d = c.width, y = c.height, p = y >= 0 ? 1 : -1, g = p * o, b = p > 0 ? "end" : "start", O = p > 0 ? "start" : "end", S = d >= 0 ? 1 : -1, x = S * o, T = S > 0 ? "end" : "start", w = S > 0 ? "start" : "end";
  if (l === "top") {
    var M = {
      x: s + d / 2,
      y: h - p * o,
      textAnchor: "middle",
      verticalAnchor: b
    };
    return Se(Se({}, M), r ? {
      height: Math.max(h - r.y, 0),
      width: d
    } : {});
  }
  if (l === "bottom") {
    var j = {
      x: s + d / 2,
      y: h + y + g,
      textAnchor: "middle",
      verticalAnchor: O
    };
    return Se(Se({}, j), r ? {
      height: Math.max(r.y + r.height - (h + y), 0),
      width: d
    } : {});
  }
  if (l === "left") {
    var A = {
      x: s - x,
      y: h + y / 2,
      textAnchor: T,
      verticalAnchor: "middle"
    };
    return Se(Se({}, A), r ? {
      width: Math.max(A.x - r.x, 0),
      height: y
    } : {});
  }
  if (l === "right") {
    var E = {
      x: s + d + x,
      y: h + y / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return Se(Se({}, E), r ? {
      width: Math.max(r.x + r.width - E.x, 0),
      height: y
    } : {});
  }
  var D = r ? {
    width: d,
    height: y
  } : {};
  return l === "insideLeft" ? Se({
    x: s + x,
    y: h + y / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, D) : l === "insideRight" ? Se({
    x: s + d - x,
    y: h + y / 2,
    textAnchor: T,
    verticalAnchor: "middle"
  }, D) : l === "insideTop" ? Se({
    x: s + d / 2,
    y: h + g,
    textAnchor: "middle",
    verticalAnchor: O
  }, D) : l === "insideBottom" ? Se({
    x: s + d / 2,
    y: h + y - g,
    textAnchor: "middle",
    verticalAnchor: b
  }, D) : l === "insideTopLeft" ? Se({
    x: s + x,
    y: h + g,
    textAnchor: w,
    verticalAnchor: O
  }, D) : l === "insideTopRight" ? Se({
    x: s + d - x,
    y: h + g,
    textAnchor: T,
    verticalAnchor: O
  }, D) : l === "insideBottomLeft" ? Se({
    x: s + x,
    y: h + y - g,
    textAnchor: w,
    verticalAnchor: b
  }, D) : l === "insideBottomRight" ? Se({
    x: s + d - x,
    y: h + y - g,
    textAnchor: T,
    verticalAnchor: b
  }, D) : Ro(l) && (st(l.x) || Ya(l.x)) && (st(l.y) || Ya(l.y)) ? Se({
    x: s + ti(l.x, d),
    y: h + ti(l.y, y),
    textAnchor: "end",
    verticalAnchor: "end"
  }, D) : Se({
    x: s + d / 2,
    y: h + y / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, D);
}, X5 = function(e) {
  return "cx" in e && st(e.cx);
};
function ke(t) {
  var e = t.offset, n = e === void 0 ? 5 : e, r = z5(t, C5), o = Se({
    offset: n
  }, r), l = o.viewBox, c = o.position, s = o.value, h = o.children, d = o.content, y = o.className, p = y === void 0 ? "" : y, g = o.textBreakAll;
  if (!l || Mt(s) && Mt(h) && !/* @__PURE__ */ rt.isValidElement(d) && !At(d))
    return null;
  if (/* @__PURE__ */ rt.isValidElement(d))
    return /* @__PURE__ */ rt.cloneElement(d, o);
  var b;
  if (At(d)) {
    if (b = /* @__PURE__ */ rt.createElement(d, o), /* @__PURE__ */ rt.isValidElement(b))
      return b;
  } else
    b = U5(o);
  var O = X5(l), S = Et(o, !0);
  if (O && (c === "insideStart" || c === "insideEnd" || c === "end"))
    return I5(o, b, S);
  var x = O ? G5(o) : Y5(o);
  return /* @__PURE__ */ B.createElement(If, Sl({
    className: qt("recharts-label", p)
  }, S, x, {
    breakAll: g
  }), b);
}
ke.displayName = "Label";
var hD = function(e) {
  var n = e.cx, r = e.cy, o = e.angle, l = e.startAngle, c = e.endAngle, s = e.r, h = e.radius, d = e.innerRadius, y = e.outerRadius, p = e.x, g = e.y, b = e.top, O = e.left, S = e.width, x = e.height, T = e.clockWise, w = e.labelViewBox;
  if (w)
    return w;
  if (st(S) && st(x)) {
    if (st(p) && st(g))
      return {
        x: p,
        y: g,
        width: S,
        height: x
      };
    if (st(b) && st(O))
      return {
        x: b,
        y: O,
        width: S,
        height: x
      };
  }
  return st(p) && st(g) ? {
    x: p,
    y: g,
    width: 0,
    height: 0
  } : st(n) && st(r) ? {
    cx: n,
    cy: r,
    startAngle: l || o || 0,
    endAngle: c || o || 0,
    innerRadius: d || 0,
    outerRadius: y || h || s || 0,
    clockWise: T
  } : e.viewBox ? e.viewBox : {};
}, K5 = function(e, n) {
  return e ? e === !0 ? /* @__PURE__ */ B.createElement(ke, {
    key: "label-implicit",
    viewBox: n
  }) : _e(e) ? /* @__PURE__ */ B.createElement(ke, {
    key: "label-implicit",
    viewBox: n,
    value: e
  }) : /* @__PURE__ */ rt.isValidElement(e) ? e.type === ke ? /* @__PURE__ */ rt.cloneElement(e, {
    key: "label-implicit",
    viewBox: n
  }) : /* @__PURE__ */ B.createElement(ke, {
    key: "label-implicit",
    content: e,
    viewBox: n
  }) : At(e) ? /* @__PURE__ */ B.createElement(ke, {
    key: "label-implicit",
    content: e,
    viewBox: n
  }) : Ro(e) ? /* @__PURE__ */ B.createElement(ke, Sl({
    viewBox: n
  }, e, {
    key: "label-implicit"
  })) : null : null;
}, V5 = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var o = e.children, l = hD(e), c = Cn(o, ke).map(function(h, d) {
    return /* @__PURE__ */ rt.cloneElement(h, {
      viewBox: n || l,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(d)
    });
  });
  if (!r)
    return c;
  var s = K5(e.label, n || l);
  return [s].concat(D5(c));
};
ke.parseViewBox = hD;
ke.renderCallByParent = V5;
var Wm, c2;
function F5() {
  if (c2) return Wm;
  c2 = 1;
  function t(e) {
    var n = e == null ? 0 : e.length;
    return n ? e[n - 1] : void 0;
  }
  return Wm = t, Wm;
}
var Z5 = F5();
const Q5 = /* @__PURE__ */ Qt(Z5);
function _l(t) {
  "@babel/helpers - typeof";
  return _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _l(t);
}
var W5 = ["valueAccessor"], J5 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function tk(t) {
  return ak(t) || rk(t) || nk(t) || ek();
}
function ek() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nk(t, e) {
  if (t) {
    if (typeof t == "string") return vb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vb(t, e);
  }
}
function rk(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ak(t) {
  if (Array.isArray(t)) return vb(t);
}
function vb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function us() {
  return us = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, us.apply(this, arguments);
}
function f2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function s2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? f2(Object(n), !0).forEach(function(r) {
      ik(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ik(t, e, n) {
  return e = ok(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ok(t) {
  var e = uk(t, "string");
  return _l(e) == "symbol" ? e : e + "";
}
function uk(t, e) {
  if (_l(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (_l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function h2(t, e) {
  if (t == null) return {};
  var n = lk(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function lk(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var ck = function(e) {
  return Array.isArray(e.value) ? Q5(e.value) : e.value;
};
function Nr(t) {
  var e = t.valueAccessor, n = e === void 0 ? ck : e, r = h2(t, W5), o = r.data, l = r.dataKey, c = r.clockWise, s = r.id, h = r.textBreakAll, d = h2(r, J5);
  return !o || !o.length ? null : /* @__PURE__ */ B.createElement(Jt, {
    className: "recharts-label-list"
  }, o.map(function(y, p) {
    var g = Mt(l) ? n(y, p) : Ge(y && y.payload, l), b = Mt(s) ? {} : {
      id: "".concat(s, "-").concat(p)
    };
    return /* @__PURE__ */ B.createElement(ke, us({}, Et(y, !0), d, b, {
      parentViewBox: y.parentViewBox,
      value: g,
      textBreakAll: h,
      viewBox: ke.parseViewBox(Mt(c) ? y : s2(s2({}, y), {}, {
        clockWise: c
      })),
      key: "label-".concat(p),
      index: p
    }));
  }));
}
Nr.displayName = "LabelList";
function fk(t, e) {
  return t ? t === !0 ? /* @__PURE__ */ B.createElement(Nr, {
    key: "labelList-implicit",
    data: e
  }) : /* @__PURE__ */ B.isValidElement(t) || At(t) ? /* @__PURE__ */ B.createElement(Nr, {
    key: "labelList-implicit",
    data: e,
    content: t
  }) : Ro(t) ? /* @__PURE__ */ B.createElement(Nr, us({
    data: e
  }, t, {
    key: "labelList-implicit"
  })) : null : null;
}
function sk(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var r = t.children, o = Cn(r, Nr).map(function(c, s) {
    return /* @__PURE__ */ rt.cloneElement(c, {
      data: e,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!n)
    return o;
  var l = fk(t.label, e);
  return [l].concat(tk(o));
}
Nr.renderCallByParent = sk;
function Ol(t) {
  "@babel/helpers - typeof";
  return Ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ol(t);
}
function pb() {
  return pb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, pb.apply(this, arguments);
}
function d2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function v2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? d2(Object(n), !0).forEach(function(r) {
      hk(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function hk(t, e, n) {
  return e = dk(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function dk(t) {
  var e = vk(t, "string");
  return Ol(e) == "symbol" ? e : e + "";
}
function vk(t, e) {
  if (Ol(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ol(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var pk = function(e, n) {
  var r = Hn(n - e), o = Math.min(Math.abs(n - e), 359.999);
  return r * o;
}, xf = function(e) {
  var n = e.cx, r = e.cy, o = e.radius, l = e.angle, c = e.sign, s = e.isExternal, h = e.cornerRadius, d = e.cornerIsExternal, y = h * (s ? 1 : -1) + o, p = Math.asin(h / y) / os, g = d ? l : l + c * p, b = qe(n, r, y, g), O = qe(n, r, o, g), S = d ? l - c * p : l, x = qe(n, r, y * Math.cos(p * os), S);
  return {
    center: b,
    circleTangency: O,
    lineTangency: x,
    theta: p
  };
}, dD = function(e) {
  var n = e.cx, r = e.cy, o = e.innerRadius, l = e.outerRadius, c = e.startAngle, s = e.endAngle, h = pk(c, s), d = c + h, y = qe(n, r, l, c), p = qe(n, r, l, d), g = "M ".concat(y.x, ",").concat(y.y, `
    A `).concat(l, ",").concat(l, `,0,
    `).concat(+(Math.abs(h) > 180), ",").concat(+(c > d), `,
    `).concat(p.x, ",").concat(p.y, `
  `);
  if (o > 0) {
    var b = qe(n, r, o, c), O = qe(n, r, o, d);
    g += "L ".concat(O.x, ",").concat(O.y, `
            A `).concat(o, ",").concat(o, `,0,
            `).concat(+(Math.abs(h) > 180), ",").concat(+(c <= d), `,
            `).concat(b.x, ",").concat(b.y, " Z");
  } else
    g += "L ".concat(n, ",").concat(r, " Z");
  return g;
}, yk = function(e) {
  var n = e.cx, r = e.cy, o = e.innerRadius, l = e.outerRadius, c = e.cornerRadius, s = e.forceCornerRadius, h = e.cornerIsExternal, d = e.startAngle, y = e.endAngle, p = Hn(y - d), g = xf({
    cx: n,
    cy: r,
    radius: l,
    angle: d,
    sign: p,
    cornerRadius: c,
    cornerIsExternal: h
  }), b = g.circleTangency, O = g.lineTangency, S = g.theta, x = xf({
    cx: n,
    cy: r,
    radius: l,
    angle: y,
    sign: -p,
    cornerRadius: c,
    cornerIsExternal: h
  }), T = x.circleTangency, w = x.lineTangency, M = x.theta, j = h ? Math.abs(d - y) : Math.abs(d - y) - S - M;
  if (j < 0)
    return s ? "M ".concat(O.x, ",").concat(O.y, `
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(c * 2, `,0
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(-c * 2, `,0
      `) : dD({
      cx: n,
      cy: r,
      innerRadius: o,
      outerRadius: l,
      startAngle: d,
      endAngle: y
    });
  var A = "M ".concat(O.x, ",").concat(O.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(l, ",").concat(l, ",0,").concat(+(j > 180), ",").concat(+(p < 0), ",").concat(T.x, ",").concat(T.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (o > 0) {
    var E = xf({
      cx: n,
      cy: r,
      radius: o,
      angle: d,
      sign: p,
      isExternal: !0,
      cornerRadius: c,
      cornerIsExternal: h
    }), D = E.circleTangency, R = E.lineTangency, z = E.theta, F = xf({
      cx: n,
      cy: r,
      radius: o,
      angle: y,
      sign: -p,
      isExternal: !0,
      cornerRadius: c,
      cornerIsExternal: h
    }), k = F.circleTangency, $ = F.lineTangency, K = F.theta, Z = h ? Math.abs(d - y) : Math.abs(d - y) - z - K;
    if (Z < 0 && c === 0)
      return "".concat(A, "L").concat(n, ",").concat(r, "Z");
    A += "L".concat($.x, ",").concat($.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(k.x, ",").concat(k.y, `
      A`).concat(o, ",").concat(o, ",0,").concat(+(Z > 180), ",").concat(+(p > 0), ",").concat(D.x, ",").concat(D.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(R.x, ",").concat(R.y, "Z");
  } else
    A += "L".concat(n, ",").concat(r, "Z");
  return A;
}, mk = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, vD = function(e) {
  var n = v2(v2({}, mk), e), r = n.cx, o = n.cy, l = n.innerRadius, c = n.outerRadius, s = n.cornerRadius, h = n.forceCornerRadius, d = n.cornerIsExternal, y = n.startAngle, p = n.endAngle, g = n.className;
  if (c < l || y === p)
    return null;
  var b = qt("recharts-sector", g), O = c - l, S = ti(s, O, 0, !0), x;
  return S > 0 && Math.abs(y - p) < 360 ? x = yk({
    cx: r,
    cy: o,
    innerRadius: l,
    outerRadius: c,
    cornerRadius: Math.min(S, O / 2),
    forceCornerRadius: h,
    cornerIsExternal: d,
    startAngle: y,
    endAngle: p
  }) : x = dD({
    cx: r,
    cy: o,
    innerRadius: l,
    outerRadius: c,
    startAngle: y,
    endAngle: p
  }), /* @__PURE__ */ B.createElement("path", pb({}, Et(n, !0), {
    className: b,
    d: x,
    role: "img"
  }));
};
function Al(t) {
  "@babel/helpers - typeof";
  return Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Al(t);
}
function yb() {
  return yb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, yb.apply(this, arguments);
}
function p2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function y2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? p2(Object(n), !0).forEach(function(r) {
      gk(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function gk(t, e, n) {
  return e = bk(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function bk(t) {
  var e = xk(t, "string");
  return Al(e) == "symbol" ? e : e + "";
}
function xk(t, e) {
  if (Al(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Al(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var m2 = {
  curveBasisClosed: kq,
  curveBasisOpen: Uq,
  curveBasis: Lq,
  curveBumpX: wq,
  curveBumpY: Tq,
  curveLinearClosed: Hq,
  curveLinear: $s,
  curveMonotoneX: Iq,
  curveMonotoneY: Gq,
  curveNatural: Yq,
  curveStep: Xq,
  curveStepAfter: Vq,
  curveStepBefore: Kq
}, Sf = function(e) {
  return e.x === +e.x && e.y === +e.y;
}, Uu = function(e) {
  return e.x;
}, Hu = function(e) {
  return e.y;
}, Sk = function(e, n) {
  if (At(e))
    return e;
  var r = "curve".concat(qs(e));
  return (r === "curveMonotone" || r === "curveBump") && n ? m2["".concat(r).concat(n === "vertical" ? "Y" : "X")] : m2[r] || $s;
}, _k = function(e) {
  var n = e.type, r = n === void 0 ? "linear" : n, o = e.points, l = o === void 0 ? [] : o, c = e.baseLine, s = e.layout, h = e.connectNulls, d = h === void 0 ? !1 : h, y = Sk(r, s), p = d ? l.filter(function(S) {
    return Sf(S);
  }) : l, g;
  if (Array.isArray(c)) {
    var b = d ? c.filter(function(S) {
      return Sf(S);
    }) : c, O = p.map(function(S, x) {
      return y2(y2({}, S), {}, {
        base: b[x]
      });
    });
    return s === "vertical" ? g = sf().y(Hu).x1(Uu).x0(function(S) {
      return S.base.x;
    }) : g = sf().x(Uu).y1(Hu).y0(function(S) {
      return S.base.y;
    }), g.defined(Sf).curve(y), g(O);
  }
  return s === "vertical" && st(c) ? g = sf().y(Hu).x1(Uu).x0(c) : st(c) ? g = sf().x(Uu).y1(Hu).y0(c) : g = xj().x(Uu).y(Hu), g.defined(Sf).curve(y), g(p);
}, oo = function(e) {
  var n = e.className, r = e.points, o = e.path, l = e.pathRef;
  if ((!r || !r.length) && !o)
    return null;
  var c = r && r.length ? _k(e) : o;
  return /* @__PURE__ */ rt.createElement("path", yb({}, Et(e, !1), Df(e), {
    className: qt("recharts-curve", n),
    d: c,
    ref: l
  }));
}, Jm = { exports: {} }, tg, g2;
function Ok() {
  if (g2) return tg;
  g2 = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tg = t, tg;
}
var eg, b2;
function Ak() {
  if (b2) return eg;
  b2 = 1;
  var t = /* @__PURE__ */ Ok();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, eg = function() {
    function r(c, s, h, d, y, p) {
      if (p !== t) {
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
      resetWarningCache: e
    };
    return l.PropTypes = l, l;
  }, eg;
}
var x2;
function wk() {
  return x2 || (x2 = 1, Jm.exports = /* @__PURE__ */ Ak()()), Jm.exports;
}
var Tk = /* @__PURE__ */ wk();
const Ht = /* @__PURE__ */ Qt(Tk), { getOwnPropertyNames: Ek, getOwnPropertySymbols: Mk } = Object, { hasOwnProperty: jk } = Object.prototype;
function ng(t, e) {
  return function(r, o, l) {
    return t(r, o, l) && e(r, o, l);
  };
}
function _f(t) {
  return function(n, r, o) {
    if (!n || !r || typeof n != "object" || typeof r != "object")
      return t(n, r, o);
    const { cache: l } = o, c = l.get(n), s = l.get(r);
    if (c && s)
      return c === r && s === n;
    l.set(n, r), l.set(r, n);
    const h = t(n, r, o);
    return l.delete(n), l.delete(r), h;
  };
}
function Ck(t) {
  return t != null ? t[Symbol.toStringTag] : void 0;
}
function S2(t) {
  return Ek(t).concat(Mk(t));
}
const Dk = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((t, e) => jk.call(t, e))
);
function li(t, e) {
  return t === e || !t && !e && t !== t && e !== e;
}
const Pk = "__v", Nk = "__o", Rk = "_owner", { getOwnPropertyDescriptor: _2, keys: O2 } = Object;
function qk(t, e) {
  return t.byteLength === e.byteLength && ls(new Uint8Array(t), new Uint8Array(e));
}
function zk(t, e, n) {
  let r = t.length;
  if (e.length !== r)
    return !1;
  for (; r-- > 0; )
    if (!n.equals(t[r], e[r], r, r, t, e, n))
      return !1;
  return !0;
}
function $k(t, e) {
  return t.byteLength === e.byteLength && ls(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
}
function Bk(t, e) {
  return li(t.getTime(), e.getTime());
}
function Lk(t, e) {
  return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack;
}
function kk(t, e) {
  return t === e;
}
function A2(t, e, n) {
  const r = t.size;
  if (r !== e.size)
    return !1;
  if (!r)
    return !0;
  const o = new Array(r), l = t.entries();
  let c, s, h = 0;
  for (; (c = l.next()) && !c.done; ) {
    const d = e.entries();
    let y = !1, p = 0;
    for (; (s = d.next()) && !s.done; ) {
      if (o[p]) {
        p++;
        continue;
      }
      const g = c.value, b = s.value;
      if (n.equals(g[0], b[0], h, p, t, e, n) && n.equals(g[1], b[1], g[0], b[0], t, e, n)) {
        y = o[p] = !0;
        break;
      }
      p++;
    }
    if (!y)
      return !1;
    h++;
  }
  return !0;
}
const Uk = li;
function Hk(t, e, n) {
  const r = O2(t);
  let o = r.length;
  if (O2(e).length !== o)
    return !1;
  for (; o-- > 0; )
    if (!pD(t, e, n, r[o]))
      return !1;
  return !0;
}
function Iu(t, e, n) {
  const r = S2(t);
  let o = r.length;
  if (S2(e).length !== o)
    return !1;
  let l, c, s;
  for (; o-- > 0; )
    if (l = r[o], !pD(t, e, n, l) || (c = _2(t, l), s = _2(e, l), (c || s) && (!c || !s || c.configurable !== s.configurable || c.enumerable !== s.enumerable || c.writable !== s.writable)))
      return !1;
  return !0;
}
function Ik(t, e) {
  return li(t.valueOf(), e.valueOf());
}
function Gk(t, e) {
  return t.source === e.source && t.flags === e.flags;
}
function w2(t, e, n) {
  const r = t.size;
  if (r !== e.size)
    return !1;
  if (!r)
    return !0;
  const o = new Array(r), l = t.values();
  let c, s;
  for (; (c = l.next()) && !c.done; ) {
    const h = e.values();
    let d = !1, y = 0;
    for (; (s = h.next()) && !s.done; ) {
      if (!o[y] && n.equals(c.value, s.value, c.value, s.value, t, e, n)) {
        d = o[y] = !0;
        break;
      }
      y++;
    }
    if (!d)
      return !1;
  }
  return !0;
}
function ls(t, e) {
  let n = t.byteLength;
  if (e.byteLength !== n || t.byteOffset !== e.byteOffset)
    return !1;
  for (; n-- > 0; )
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Yk(t, e) {
  return t.hostname === e.hostname && t.pathname === e.pathname && t.protocol === e.protocol && t.port === e.port && t.hash === e.hash && t.username === e.username && t.password === e.password;
}
function pD(t, e, n, r) {
  return (r === Rk || r === Nk || r === Pk) && (t.$$typeof || e.$$typeof) ? !0 : Dk(e, r) && n.equals(t[r], e[r], r, r, t, e, n);
}
const Xk = "[object ArrayBuffer]", Kk = "[object Arguments]", Vk = "[object Boolean]", Fk = "[object DataView]", Zk = "[object Date]", Qk = "[object Error]", Wk = "[object Map]", Jk = "[object Number]", tU = "[object Object]", eU = "[object RegExp]", nU = "[object Set]", rU = "[object String]", aU = {
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
}, iU = "[object URL]", oU = Object.prototype.toString;
function uU({ areArrayBuffersEqual: t, areArraysEqual: e, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: o, areFunctionsEqual: l, areMapsEqual: c, areNumbersEqual: s, areObjectsEqual: h, arePrimitiveWrappersEqual: d, areRegExpsEqual: y, areSetsEqual: p, areTypedArraysEqual: g, areUrlsEqual: b, unknownTagComparators: O }) {
  return function(x, T, w) {
    if (x === T)
      return !0;
    if (x == null || T == null)
      return !1;
    const M = typeof x;
    if (M !== typeof T)
      return !1;
    if (M !== "object")
      return M === "number" ? s(x, T, w) : M === "function" ? l(x, T, w) : !1;
    const j = x.constructor;
    if (j !== T.constructor)
      return !1;
    if (j === Object)
      return h(x, T, w);
    if (Array.isArray(x))
      return e(x, T, w);
    if (j === Date)
      return r(x, T, w);
    if (j === RegExp)
      return y(x, T, w);
    if (j === Map)
      return c(x, T, w);
    if (j === Set)
      return p(x, T, w);
    const A = oU.call(x);
    if (A === Zk)
      return r(x, T, w);
    if (A === eU)
      return y(x, T, w);
    if (A === Wk)
      return c(x, T, w);
    if (A === nU)
      return p(x, T, w);
    if (A === tU)
      return typeof x.then != "function" && typeof T.then != "function" && h(x, T, w);
    if (A === iU)
      return b(x, T, w);
    if (A === Qk)
      return o(x, T, w);
    if (A === Kk)
      return h(x, T, w);
    if (aU[A])
      return g(x, T, w);
    if (A === Xk)
      return t(x, T, w);
    if (A === Fk)
      return n(x, T, w);
    if (A === Vk || A === Jk || A === rU)
      return d(x, T, w);
    if (O) {
      let E = O[A];
      if (!E) {
        const D = Ck(x);
        D && (E = O[D]);
      }
      if (E)
        return E(x, T, w);
    }
    return !1;
  };
}
function lU({ circular: t, createCustomConfig: e, strict: n }) {
  let r = {
    areArrayBuffersEqual: qk,
    areArraysEqual: n ? Iu : zk,
    areDataViewsEqual: $k,
    areDatesEqual: Bk,
    areErrorsEqual: Lk,
    areFunctionsEqual: kk,
    areMapsEqual: n ? ng(A2, Iu) : A2,
    areNumbersEqual: Uk,
    areObjectsEqual: n ? Iu : Hk,
    arePrimitiveWrappersEqual: Ik,
    areRegExpsEqual: Gk,
    areSetsEqual: n ? ng(w2, Iu) : w2,
    areTypedArraysEqual: n ? ng(ls, Iu) : ls,
    areUrlsEqual: Yk,
    unknownTagComparators: void 0
  };
  if (e && (r = Object.assign({}, r, e(r))), t) {
    const o = _f(r.areArraysEqual), l = _f(r.areMapsEqual), c = _f(r.areObjectsEqual), s = _f(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: o,
      areMapsEqual: l,
      areObjectsEqual: c,
      areSetsEqual: s
    });
  }
  return r;
}
function cU(t) {
  return function(e, n, r, o, l, c, s) {
    return t(e, n, s);
  };
}
function fU({ circular: t, comparator: e, createState: n, equals: r, strict: o }) {
  if (n)
    return function(s, h) {
      const { cache: d = t ? /* @__PURE__ */ new WeakMap() : void 0, meta: y } = n();
      return e(s, h, {
        cache: d,
        equals: r,
        meta: y,
        strict: o
      });
    };
  if (t)
    return function(s, h) {
      return e(s, h, {
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
  return function(s, h) {
    return e(s, h, l);
  };
}
const sU = Oa();
Oa({ strict: !0 });
Oa({ circular: !0 });
Oa({
  circular: !0,
  strict: !0
});
Oa({
  createInternalComparator: () => li
});
Oa({
  strict: !0,
  createInternalComparator: () => li
});
Oa({
  circular: !0,
  createInternalComparator: () => li
});
Oa({
  circular: !0,
  createInternalComparator: () => li,
  strict: !0
});
function Oa(t = {}) {
  const { circular: e = !1, createInternalComparator: n, createState: r, strict: o = !1 } = t, l = lU(t), c = uU(l), s = n ? n(c) : cU(c);
  return fU({ circular: e, comparator: c, createState: r, equals: s, strict: o });
}
function hU(t) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(t);
}
function T2(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = -1, r = function o(l) {
    n < 0 && (n = l), l - n > e ? (t(l), n = -1) : hU(o);
  };
  requestAnimationFrame(r);
}
function mb(t) {
  "@babel/helpers - typeof";
  return mb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mb(t);
}
function dU(t) {
  return mU(t) || yU(t) || pU(t) || vU();
}
function vU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pU(t, e) {
  if (t) {
    if (typeof t == "string") return E2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E2(t, e);
  }
}
function E2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function yU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function mU(t) {
  if (Array.isArray(t)) return t;
}
function gU() {
  var t = {}, e = function() {
    return null;
  }, n = !1, r = function o(l) {
    if (!n) {
      if (Array.isArray(l)) {
        if (!l.length)
          return;
        var c = l, s = dU(c), h = s[0], d = s.slice(1);
        if (typeof h == "number") {
          T2(o.bind(null, d), h);
          return;
        }
        o(h), T2(o.bind(null, d));
        return;
      }
      mb(l) === "object" && (t = l, e(t)), typeof l == "function" && l();
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
      return e = l, function() {
        e = function() {
          return null;
        };
      };
    }
  };
}
function wl(t) {
  "@babel/helpers - typeof";
  return wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wl(t);
}
function M2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function j2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? M2(Object(n), !0).forEach(function(r) {
      yD(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : M2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function yD(t, e, n) {
  return e = bU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function bU(t) {
  var e = xU(t, "string");
  return wl(e) === "symbol" ? e : String(e);
}
function xU(t, e) {
  if (wl(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (wl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var SU = function(e, n) {
  return [Object.keys(e), Object.keys(n)].reduce(function(r, o) {
    return r.filter(function(l) {
      return o.includes(l);
    });
  });
}, _U = function(e) {
  return e;
}, OU = function(e) {
  return e.replace(/([A-Z])/g, function(n) {
    return "-".concat(n.toLowerCase());
  });
}, tl = function(e, n) {
  return Object.keys(n).reduce(function(r, o) {
    return j2(j2({}, r), {}, yD({}, o, e(o, n[o])));
  }, {});
}, C2 = function(e, n, r) {
  return e.map(function(o) {
    return "".concat(OU(o), " ").concat(n, "ms ").concat(r);
  }).join(",");
};
function AU(t, e) {
  return EU(t) || TU(t, e) || mD(t, e) || wU();
}
function wU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TU(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function EU(t) {
  if (Array.isArray(t)) return t;
}
function MU(t) {
  return DU(t) || CU(t) || mD(t) || jU();
}
function jU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mD(t, e) {
  if (t) {
    if (typeof t == "string") return gb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gb(t, e);
  }
}
function CU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function DU(t) {
  if (Array.isArray(t)) return gb(t);
}
function gb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var cs = 1e-4, gD = function(e, n) {
  return [0, 3 * e, 3 * n - 6 * e, 3 * e - 3 * n + 1];
}, bD = function(e, n) {
  return e.map(function(r, o) {
    return r * Math.pow(n, o);
  }).reduce(function(r, o) {
    return r + o;
  });
}, D2 = function(e, n) {
  return function(r) {
    var o = gD(e, n);
    return bD(o, r);
  };
}, PU = function(e, n) {
  return function(r) {
    var o = gD(e, n), l = [].concat(MU(o.map(function(c, s) {
      return c * s;
    }).slice(1)), [0]);
    return bD(l, r);
  };
}, P2 = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var o = n[0], l = n[1], c = n[2], s = n[3];
  if (n.length === 1)
    switch (n[0]) {
      case "linear":
        o = 0, l = 0, c = 1, s = 1;
        break;
      case "ease":
        o = 0.25, l = 0.1, c = 0.25, s = 1;
        break;
      case "ease-in":
        o = 0.42, l = 0, c = 1, s = 1;
        break;
      case "ease-out":
        o = 0.42, l = 0, c = 0.58, s = 1;
        break;
      case "ease-in-out":
        o = 0, l = 0, c = 0.58, s = 1;
        break;
      default: {
        var h = n[0].split("(");
        if (h[0] === "cubic-bezier" && h[1].split(")")[0].split(",").length === 4) {
          var d = h[1].split(")")[0].split(",").map(function(x) {
            return parseFloat(x);
          }), y = AU(d, 4);
          o = y[0], l = y[1], c = y[2], s = y[3];
        }
      }
    }
  var p = D2(o, c), g = D2(l, s), b = PU(o, c), O = function(T) {
    return T > 1 ? 1 : T < 0 ? 0 : T;
  }, S = function(T) {
    for (var w = T > 1 ? 1 : T, M = w, j = 0; j < 8; ++j) {
      var A = p(M) - w, E = b(M);
      if (Math.abs(A - w) < cs || E < cs)
        return g(M);
      M = O(M - A / E);
    }
    return g(M);
  };
  return S.isStepper = !1, S;
}, NU = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.stiff, r = n === void 0 ? 100 : n, o = e.damping, l = o === void 0 ? 8 : o, c = e.dt, s = c === void 0 ? 17 : c, h = function(y, p, g) {
    var b = -(y - p) * r, O = g * l, S = g + (b - O) * s / 1e3, x = g * s / 1e3 + y;
    return Math.abs(x - p) < cs && Math.abs(S) < cs ? [p, 0] : [x, S];
  };
  return h.isStepper = !0, h.dt = s, h;
}, RU = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var o = n[0];
  if (typeof o == "string")
    switch (o) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return P2(o);
      case "spring":
        return NU();
      default:
        if (o.split("(")[0] === "cubic-bezier")
          return P2(o);
    }
  return typeof o == "function" ? o : null;
};
function Tl(t) {
  "@babel/helpers - typeof";
  return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tl(t);
}
function N2(t) {
  return $U(t) || zU(t) || xD(t) || qU();
}
function qU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function $U(t) {
  if (Array.isArray(t)) return xb(t);
}
function R2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? R2(Object(n), !0).forEach(function(r) {
      bb(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function bb(t, e, n) {
  return e = BU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function BU(t) {
  var e = LU(t, "string");
  return Tl(e) === "symbol" ? e : String(e);
}
function LU(t, e) {
  if (Tl(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Tl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function kU(t, e) {
  return IU(t) || HU(t, e) || xD(t, e) || UU();
}
function UU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xD(t, e) {
  if (t) {
    if (typeof t == "string") return xb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xb(t, e);
  }
}
function xb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function HU(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function IU(t) {
  if (Array.isArray(t)) return t;
}
var fs = function(e, n, r) {
  return e + (n - e) * r;
}, Sb = function(e) {
  var n = e.from, r = e.to;
  return n !== r;
}, GU = function t(e, n, r) {
  var o = tl(function(l, c) {
    if (Sb(c)) {
      var s = e(c.from, c.to, c.velocity), h = kU(s, 2), d = h[0], y = h[1];
      return Ne(Ne({}, c), {}, {
        from: d,
        velocity: y
      });
    }
    return c;
  }, n);
  return r < 1 ? tl(function(l, c) {
    return Sb(c) ? Ne(Ne({}, c), {}, {
      velocity: fs(c.velocity, o[l].velocity, r),
      from: fs(c.from, o[l].from, r)
    }) : c;
  }, n) : t(e, o, r - 1);
};
const YU = (function(t, e, n, r, o) {
  var l = SU(t, e), c = l.reduce(function(x, T) {
    return Ne(Ne({}, x), {}, bb({}, T, [t[T], e[T]]));
  }, {}), s = l.reduce(function(x, T) {
    return Ne(Ne({}, x), {}, bb({}, T, {
      from: t[T],
      velocity: 0,
      to: e[T]
    }));
  }, {}), h = -1, d, y, p = function() {
    return null;
  }, g = function() {
    return tl(function(T, w) {
      return w.from;
    }, s);
  }, b = function() {
    return !Object.values(s).filter(Sb).length;
  }, O = function(T) {
    d || (d = T);
    var w = T - d, M = w / n.dt;
    s = GU(n, s, M), o(Ne(Ne(Ne({}, t), e), g())), d = T, b() || (h = requestAnimationFrame(p));
  }, S = function(T) {
    y || (y = T);
    var w = (T - y) / r, M = tl(function(A, E) {
      return fs.apply(void 0, N2(E).concat([n(w)]));
    }, c);
    if (o(Ne(Ne(Ne({}, t), e), M)), w < 1)
      h = requestAnimationFrame(p);
    else {
      var j = tl(function(A, E) {
        return fs.apply(void 0, N2(E).concat([n(1)]));
      }, c);
      o(Ne(Ne(Ne({}, t), e), j));
    }
  };
  return p = n.isStepper ? O : S, function() {
    return requestAnimationFrame(p), function() {
      cancelAnimationFrame(h);
    };
  };
});
function bo(t) {
  "@babel/helpers - typeof";
  return bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bo(t);
}
var XU = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function KU(t, e) {
  if (t == null) return {};
  var n = VU(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function VU(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), o, l;
  for (l = 0; l < r.length; l++)
    o = r[l], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
  return n;
}
function rg(t) {
  return WU(t) || QU(t) || ZU(t) || FU();
}
function FU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZU(t, e) {
  if (t) {
    if (typeof t == "string") return _b(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _b(t, e);
  }
}
function QU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function WU(t) {
  if (Array.isArray(t)) return _b(t);
}
function _b(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function q2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? q2(Object(n), !0).forEach(function(r) {
      Vu(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Vu(t, e, n) {
  return e = SD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function JU(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tH(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, SD(r.key), r);
  }
}
function eH(t, e, n) {
  return e && tH(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function SD(t) {
  var e = nH(t, "string");
  return bo(e) === "symbol" ? e : String(e);
}
function nH(t, e) {
  if (bo(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (bo(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function rH(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ob(t, e);
}
function Ob(t, e) {
  return Ob = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ob(t, e);
}
function aH(t) {
  var e = iH();
  return function() {
    var r = ss(t), o;
    if (e) {
      var l = ss(this).constructor;
      o = Reflect.construct(r, arguments, l);
    } else
      o = r.apply(this, arguments);
    return Ab(this, o);
  };
}
function Ab(t, e) {
  if (e && (bo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wb(t);
}
function wb(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function iH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ss(t) {
  return ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ss(t);
}
var nr = /* @__PURE__ */ (function(t) {
  rH(n, t);
  var e = aH(n);
  function n(r, o) {
    var l;
    JU(this, n), l = e.call(this, r, o);
    var c = l.props, s = c.isActive, h = c.attributeName, d = c.from, y = c.to, p = c.steps, g = c.children, b = c.duration;
    if (l.handleStyleChange = l.handleStyleChange.bind(wb(l)), l.changeStyle = l.changeStyle.bind(wb(l)), !s || b <= 0)
      return l.state = {
        style: {}
      }, typeof g == "function" && (l.state = {
        style: y
      }), Ab(l);
    if (p && p.length)
      l.state = {
        style: p[0].style
      };
    else if (d) {
      if (typeof g == "function")
        return l.state = {
          style: d
        }, Ab(l);
      l.state = {
        style: h ? Vu({}, h, d) : d
      };
    } else
      l.state = {
        style: {}
      };
    return l;
  }
  return eH(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, l = o.isActive, c = o.canBegin;
      this.mounted = !0, !(!l || !c) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var l = this.props, c = l.isActive, s = l.canBegin, h = l.attributeName, d = l.shouldReAnimate, y = l.to, p = l.from, g = this.state.style;
      if (s) {
        if (!c) {
          var b = {
            style: h ? Vu({}, h, y) : y
          };
          this.state && g && (h && g[h] !== y || !h && g !== y) && this.setState(b);
          return;
        }
        if (!(sU(o.to, y) && o.canBegin && o.isActive)) {
          var O = !o.canBegin || !o.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var S = O || d ? p : o.to;
          if (this.state && g) {
            var x = {
              style: h ? Vu({}, h, S) : S
            };
            (h && g[h] !== S || !h && g !== S) && this.setState(x);
          }
          this.runAnimation(Bn(Bn({}, this.props), {}, {
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
      var l = this, c = o.from, s = o.to, h = o.duration, d = o.easing, y = o.begin, p = o.onAnimationEnd, g = o.onAnimationStart, b = YU(c, s, RU(d), h, this.changeStyle), O = function() {
        l.stopJSAnimation = b();
      };
      this.manager.start([g, y, O, h, p]);
    }
  }, {
    key: "runStepAnimation",
    value: function(o) {
      var l = this, c = o.steps, s = o.begin, h = o.onAnimationStart, d = c[0], y = d.style, p = d.duration, g = p === void 0 ? 0 : p, b = function(S, x, T) {
        if (T === 0)
          return S;
        var w = x.duration, M = x.easing, j = M === void 0 ? "ease" : M, A = x.style, E = x.properties, D = x.onAnimationEnd, R = T > 0 ? c[T - 1] : x, z = E || Object.keys(A);
        if (typeof j == "function" || j === "spring")
          return [].concat(rg(S), [l.runJSAnimation.bind(l, {
            from: R.style,
            to: A,
            duration: w,
            easing: j
          }), w]);
        var F = C2(z, w, j), k = Bn(Bn(Bn({}, R.style), A), {}, {
          transition: F
        });
        return [].concat(rg(S), [k, w, D]).filter(_U);
      };
      return this.manager.start([h].concat(rg(c.reduce(b, [y, Math.max(g, s)])), [o.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(o) {
      this.manager || (this.manager = gU());
      var l = o.begin, c = o.duration, s = o.attributeName, h = o.to, d = o.easing, y = o.onAnimationStart, p = o.onAnimationEnd, g = o.steps, b = o.children, O = this.manager;
      if (this.unSubscribe = O.subscribe(this.handleStyleChange), typeof d == "function" || typeof b == "function" || d === "spring") {
        this.runJSAnimation(o);
        return;
      }
      if (g.length > 1) {
        this.runStepAnimation(o);
        return;
      }
      var S = s ? Vu({}, s, h) : h, x = C2(Object.keys(S), c, d);
      O.start([y, l, Bn(Bn({}, S), {}, {
        transition: x
      }), c, p]);
    }
  }, {
    key: "render",
    value: function() {
      var o = this.props, l = o.children;
      o.begin;
      var c = o.duration;
      o.attributeName, o.easing;
      var s = o.isActive;
      o.steps, o.from, o.to, o.canBegin, o.onAnimationEnd, o.shouldReAnimate, o.onAnimationReStart;
      var h = KU(o, XU), d = rt.Children.count(l), y = this.state.style;
      if (typeof l == "function")
        return l(y);
      if (!s || d === 0 || c <= 0)
        return l;
      var p = function(b) {
        var O = b.props, S = O.style, x = S === void 0 ? {} : S, T = O.className, w = /* @__PURE__ */ rt.cloneElement(b, Bn(Bn({}, h), {}, {
          style: Bn(Bn({}, x), y),
          className: T
        }));
        return w;
      };
      return d === 1 ? p(rt.Children.only(l)) : /* @__PURE__ */ B.createElement("div", null, rt.Children.map(l, function(g) {
        return p(g);
      }));
    }
  }]), n;
})(rt.PureComponent);
nr.displayName = "Animate";
nr.defaultProps = {
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
nr.propTypes = {
  from: Ht.oneOfType([Ht.object, Ht.string]),
  to: Ht.oneOfType([Ht.object, Ht.string]),
  attributeName: Ht.string,
  // animation duration
  duration: Ht.number,
  begin: Ht.number,
  easing: Ht.oneOfType([Ht.string, Ht.func]),
  steps: Ht.arrayOf(Ht.shape({
    duration: Ht.number.isRequired,
    style: Ht.object.isRequired,
    easing: Ht.oneOfType([Ht.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ht.func]),
    // transition css properties(dash case), optional
    properties: Ht.arrayOf("string"),
    onAnimationEnd: Ht.func
  })),
  children: Ht.oneOfType([Ht.node, Ht.func]),
  isActive: Ht.bool,
  canBegin: Ht.bool,
  onAnimationEnd: Ht.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Ht.bool,
  onAnimationStart: Ht.func,
  onAnimationReStart: Ht.func
};
var ag = { exports: {} }, Be = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z2;
function oH() {
  if (z2) return Be;
  z2 = 1;
  var t = Zb();
  function e(h) {
    var d = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        d += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + h + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var r = {
    d: {
      f: n,
      r: function() {
        throw Error(e(522));
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
  function l(h, d, y) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: p == null ? null : "" + p,
      children: h,
      containerInfo: d,
      implementation: y
    };
  }
  var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(h, d) {
    if (h === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Be.createPortal = function(h, d) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(e(299));
    return l(h, d, null, y);
  }, Be.flushSync = function(h) {
    var d = c.T, y = r.p;
    try {
      if (c.T = null, r.p = 2, h) return h();
    } finally {
      c.T = d, r.p = y, r.d.f();
    }
  }, Be.preconnect = function(h, d) {
    typeof h == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, r.d.C(h, d));
  }, Be.prefetchDNS = function(h) {
    typeof h == "string" && r.d.D(h);
  }, Be.preinit = function(h, d) {
    if (typeof h == "string" && d && typeof d.as == "string") {
      var y = d.as, p = s(y, d.crossOrigin), g = typeof d.integrity == "string" ? d.integrity : void 0, b = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      y === "style" ? r.d.S(
        h,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: p,
          integrity: g,
          fetchPriority: b
        }
      ) : y === "script" && r.d.X(h, {
        crossOrigin: p,
        integrity: g,
        fetchPriority: b,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, Be.preinitModule = function(h, d) {
    if (typeof h == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var y = s(
            d.as,
            d.crossOrigin
          );
          r.d.M(h, {
            crossOrigin: y,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0
          });
        }
      } else d == null && r.d.M(h);
  }, Be.preload = function(h, d) {
    if (typeof h == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var y = d.as, p = s(y, d.crossOrigin);
      r.d.L(h, y, {
        crossOrigin: p,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, Be.preloadModule = function(h, d) {
    if (typeof h == "string")
      if (d) {
        var y = s(d.as, d.crossOrigin);
        r.d.m(h, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: y,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else r.d.m(h);
  }, Be.requestFormReset = function(h) {
    r.d.r(h);
  }, Be.unstable_batchedUpdates = function(h, d) {
    return h(d);
  }, Be.useFormState = function(h, d, y) {
    return c.H.useFormState(h, d, y);
  }, Be.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, Be.version = "19.2.8", Be;
}
var $2;
function uH() {
  if ($2) return ag.exports;
  $2 = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), ag.exports = oH(), ag.exports;
}
function El(t) {
  "@babel/helpers - typeof";
  return El = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, El(t);
}
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, hs.apply(this, arguments);
}
function lH(t, e) {
  return hH(t) || sH(t, e) || fH(t, e) || cH();
}
function cH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fH(t, e) {
  if (t) {
    if (typeof t == "string") return B2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B2(t, e);
  }
}
function B2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function sH(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function hH(t) {
  if (Array.isArray(t)) return t;
}
function L2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function k2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? L2(Object(n), !0).forEach(function(r) {
      dH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function dH(t, e, n) {
  return e = vH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function vH(t) {
  var e = pH(t, "string");
  return El(e) == "symbol" ? e : e + "";
}
function pH(t, e) {
  if (El(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (El(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var U2 = function(e, n, r, o, l) {
  var c = Math.min(Math.abs(r) / 2, Math.abs(o) / 2), s = o >= 0 ? 1 : -1, h = r >= 0 ? 1 : -1, d = o >= 0 && r >= 0 || o < 0 && r < 0 ? 1 : 0, y;
  if (c > 0 && l instanceof Array) {
    for (var p = [0, 0, 0, 0], g = 0, b = 4; g < b; g++)
      p[g] = l[g] > c ? c : l[g];
    y = "M".concat(e, ",").concat(n + s * p[0]), p[0] > 0 && (y += "A ".concat(p[0], ",").concat(p[0], ",0,0,").concat(d, ",").concat(e + h * p[0], ",").concat(n)), y += "L ".concat(e + r - h * p[1], ",").concat(n), p[1] > 0 && (y += "A ".concat(p[1], ",").concat(p[1], ",0,0,").concat(d, `,
        `).concat(e + r, ",").concat(n + s * p[1])), y += "L ".concat(e + r, ",").concat(n + o - s * p[2]), p[2] > 0 && (y += "A ".concat(p[2], ",").concat(p[2], ",0,0,").concat(d, `,
        `).concat(e + r - h * p[2], ",").concat(n + o)), y += "L ".concat(e + h * p[3], ",").concat(n + o), p[3] > 0 && (y += "A ".concat(p[3], ",").concat(p[3], ",0,0,").concat(d, `,
        `).concat(e, ",").concat(n + o - s * p[3])), y += "Z";
  } else if (c > 0 && l === +l && l > 0) {
    var O = Math.min(c, l);
    y = "M ".concat(e, ",").concat(n + s * O, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e + h * O, ",").concat(n, `
            L `).concat(e + r - h * O, ",").concat(n, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e + r, ",").concat(n + s * O, `
            L `).concat(e + r, ",").concat(n + o - s * O, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e + r - h * O, ",").concat(n + o, `
            L `).concat(e + h * O, ",").concat(n + o, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e, ",").concat(n + o - s * O, " Z");
  } else
    y = "M ".concat(e, ",").concat(n, " h ").concat(r, " v ").concat(o, " h ").concat(-r, " Z");
  return y;
}, yH = function(e, n) {
  if (!e || !n)
    return !1;
  var r = e.x, o = e.y, l = n.x, c = n.y, s = n.width, h = n.height;
  if (Math.abs(s) > 0 && Math.abs(h) > 0) {
    var d = Math.min(l, l + s), y = Math.max(l, l + s), p = Math.min(c, c + h), g = Math.max(c, c + h);
    return r >= d && r <= y && o >= p && o <= g;
  }
  return !1;
}, mH = {
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
}, F0 = function(e) {
  var n = k2(k2({}, mH), e), r = rt.useRef(), o = rt.useState(-1), l = lH(o, 2), c = l[0], s = l[1];
  rt.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var j = r.current.getTotalLength();
        j && s(j);
      } catch {
      }
  }, []);
  var h = n.x, d = n.y, y = n.width, p = n.height, g = n.radius, b = n.className, O = n.animationEasing, S = n.animationDuration, x = n.animationBegin, T = n.isAnimationActive, w = n.isUpdateAnimationActive;
  if (h !== +h || d !== +d || y !== +y || p !== +p || y === 0 || p === 0)
    return null;
  var M = qt("recharts-rectangle", b);
  return w ? /* @__PURE__ */ B.createElement(nr, {
    canBegin: c > 0,
    from: {
      width: y,
      height: p,
      x: h,
      y: d
    },
    to: {
      width: y,
      height: p,
      x: h,
      y: d
    },
    duration: S,
    animationEasing: O,
    isActive: w
  }, function(j) {
    var A = j.width, E = j.height, D = j.x, R = j.y;
    return /* @__PURE__ */ B.createElement(nr, {
      canBegin: c > 0,
      from: "0px ".concat(c === -1 ? 1 : c, "px"),
      to: "".concat(c, "px 0px"),
      attributeName: "strokeDasharray",
      begin: x,
      duration: S,
      isActive: T,
      easing: O
    }, /* @__PURE__ */ B.createElement("path", hs({}, Et(n, !0), {
      className: M,
      d: U2(D, R, A, E, g),
      ref: r
    })));
  }) : /* @__PURE__ */ B.createElement("path", hs({}, Et(n, !0), {
    className: M,
    d: U2(h, d, y, p, g)
  }));
};
function Tb() {
  return Tb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Tb.apply(this, arguments);
}
var Qs = function(e) {
  var n = e.cx, r = e.cy, o = e.r, l = e.className, c = qt("recharts-dot", l);
  return n === +n && r === +r && o === +o ? /* @__PURE__ */ rt.createElement("circle", Tb({}, Et(e, !1), Df(e), {
    className: c,
    cx: n,
    cy: r,
    r: o
  })) : null;
};
function Ml(t) {
  "@babel/helpers - typeof";
  return Ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ml(t);
}
var gH = ["x", "y", "top", "left", "width", "height", "className"];
function Eb() {
  return Eb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Eb.apply(this, arguments);
}
function H2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bH(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? H2(Object(n), !0).forEach(function(r) {
      xH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : H2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xH(t, e, n) {
  return e = SH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function SH(t) {
  var e = _H(t, "string");
  return Ml(e) == "symbol" ? e : e + "";
}
function _H(t, e) {
  if (Ml(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ml(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function OH(t, e) {
  if (t == null) return {};
  var n = AH(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function AH(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var wH = function(e, n, r, o, l, c) {
  return "M".concat(e, ",").concat(l, "v").concat(o, "M").concat(c, ",").concat(n, "h").concat(r);
}, TH = function(e) {
  var n = e.x, r = n === void 0 ? 0 : n, o = e.y, l = o === void 0 ? 0 : o, c = e.top, s = c === void 0 ? 0 : c, h = e.left, d = h === void 0 ? 0 : h, y = e.width, p = y === void 0 ? 0 : y, g = e.height, b = g === void 0 ? 0 : g, O = e.className, S = OH(e, gH), x = bH({
    x: r,
    y: l,
    top: s,
    left: d,
    width: p,
    height: b
  }, S);
  return !st(r) || !st(l) || !st(p) || !st(b) || !st(s) || !st(d) ? null : /* @__PURE__ */ B.createElement("path", Eb({}, Et(x, !0), {
    className: qt("recharts-cross", O),
    d: wH(r, l, p, b, s, d)
  }));
}, ig, I2;
function EH() {
  if (I2) return ig;
  I2 = 1;
  var t = Ij(), e = t(Object.getPrototypeOf, Object);
  return ig = e, ig;
}
var og, G2;
function MH() {
  if (G2) return og;
  G2 = 1;
  var t = $r(), e = EH(), n = Br(), r = "[object Object]", o = Function.prototype, l = Object.prototype, c = o.toString, s = l.hasOwnProperty, h = c.call(Object);
  function d(y) {
    if (!n(y) || t(y) != r)
      return !1;
    var p = e(y);
    if (p === null)
      return !0;
    var g = s.call(p, "constructor") && p.constructor;
    return typeof g == "function" && g instanceof g && c.call(g) == h;
  }
  return og = d, og;
}
var jH = MH();
const CH = /* @__PURE__ */ Qt(jH);
var ug, Y2;
function DH() {
  if (Y2) return ug;
  Y2 = 1;
  var t = $r(), e = Br(), n = "[object Boolean]";
  function r(o) {
    return o === !0 || o === !1 || e(o) && t(o) == n;
  }
  return ug = r, ug;
}
var PH = DH();
const NH = /* @__PURE__ */ Qt(PH);
function jl(t) {
  "@babel/helpers - typeof";
  return jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jl(t);
}
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ds.apply(this, arguments);
}
function RH(t, e) {
  return BH(t) || $H(t, e) || zH(t, e) || qH();
}
function qH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zH(t, e) {
  if (t) {
    if (typeof t == "string") return X2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X2(t, e);
  }
}
function X2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function $H(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function BH(t) {
  if (Array.isArray(t)) return t;
}
function K2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function V2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? K2(Object(n), !0).forEach(function(r) {
      LH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function LH(t, e, n) {
  return e = kH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function kH(t) {
  var e = UH(t, "string");
  return jl(e) == "symbol" ? e : e + "";
}
function UH(t, e) {
  if (jl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var F2 = function(e, n, r, o, l) {
  var c = r - o, s;
  return s = "M ".concat(e, ",").concat(n), s += "L ".concat(e + r, ",").concat(n), s += "L ".concat(e + r - c / 2, ",").concat(n + l), s += "L ".concat(e + r - c / 2 - o, ",").concat(n + l), s += "L ".concat(e, ",").concat(n, " Z"), s;
}, HH = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, IH = function(e) {
  var n = V2(V2({}, HH), e), r = rt.useRef(), o = rt.useState(-1), l = RH(o, 2), c = l[0], s = l[1];
  rt.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var M = r.current.getTotalLength();
        M && s(M);
      } catch {
      }
  }, []);
  var h = n.x, d = n.y, y = n.upperWidth, p = n.lowerWidth, g = n.height, b = n.className, O = n.animationEasing, S = n.animationDuration, x = n.animationBegin, T = n.isUpdateAnimationActive;
  if (h !== +h || d !== +d || y !== +y || p !== +p || g !== +g || y === 0 && p === 0 || g === 0)
    return null;
  var w = qt("recharts-trapezoid", b);
  return T ? /* @__PURE__ */ B.createElement(nr, {
    canBegin: c > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: g,
      x: h,
      y: d
    },
    to: {
      upperWidth: y,
      lowerWidth: p,
      height: g,
      x: h,
      y: d
    },
    duration: S,
    animationEasing: O,
    isActive: T
  }, function(M) {
    var j = M.upperWidth, A = M.lowerWidth, E = M.height, D = M.x, R = M.y;
    return /* @__PURE__ */ B.createElement(nr, {
      canBegin: c > 0,
      from: "0px ".concat(c === -1 ? 1 : c, "px"),
      to: "".concat(c, "px 0px"),
      attributeName: "strokeDasharray",
      begin: x,
      duration: S,
      easing: O
    }, /* @__PURE__ */ B.createElement("path", ds({}, Et(n, !0), {
      className: w,
      d: F2(D, R, j, A, E),
      ref: r
    })));
  }) : /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("path", ds({}, Et(n, !0), {
    className: w,
    d: F2(h, d, y, p, g)
  })));
}, GH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Cl(t) {
  "@babel/helpers - typeof";
  return Cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cl(t);
}
function YH(t, e) {
  if (t == null) return {};
  var n = XH(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function XH(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Z2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function vs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Z2(Object(n), !0).forEach(function(r) {
      KH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Z2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function KH(t, e, n) {
  return e = VH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function VH(t) {
  var e = FH(t, "string");
  return Cl(e) == "symbol" ? e : e + "";
}
function FH(t, e) {
  if (Cl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Cl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ZH(t, e) {
  return vs(vs({}, e), t);
}
function QH(t, e) {
  return t === "symbols";
}
function Q2(t) {
  var e = t.shapeType, n = t.elementProps;
  switch (e) {
    case "rectangle":
      return /* @__PURE__ */ B.createElement(F0, n);
    case "trapezoid":
      return /* @__PURE__ */ B.createElement(IH, n);
    case "sector":
      return /* @__PURE__ */ B.createElement(vD, n);
    case "symbols":
      if (QH(e))
        return /* @__PURE__ */ B.createElement(d0, n);
      break;
    default:
      return null;
  }
}
function WH(t) {
  return /* @__PURE__ */ rt.isValidElement(t) ? t.props : t;
}
function JH(t) {
  var e = t.option, n = t.shapeType, r = t.propTransformer, o = r === void 0 ? ZH : r, l = t.activeClassName, c = l === void 0 ? "recharts-active-shape" : l, s = t.isActive, h = YH(t, GH), d;
  if (/* @__PURE__ */ rt.isValidElement(e))
    d = /* @__PURE__ */ rt.cloneElement(e, vs(vs({}, h), WH(e)));
  else if (At(e))
    d = e(h);
  else if (CH(e) && !NH(e)) {
    var y = o(e, h);
    d = /* @__PURE__ */ B.createElement(Q2, {
      shapeType: n,
      elementProps: y
    });
  } else {
    var p = h;
    d = /* @__PURE__ */ B.createElement(Q2, {
      shapeType: n,
      elementProps: p
    });
  }
  return s ? /* @__PURE__ */ B.createElement(Jt, {
    className: c
  }, d) : d;
}
function Ws(t, e) {
  return e != null && "trapezoids" in t.props;
}
function Js(t, e) {
  return e != null && "sectors" in t.props;
}
function Dl(t, e) {
  return e != null && "points" in t.props;
}
function t9(t, e) {
  var n, r, o = t.x === (e == null || (n = e.labelViewBox) === null || n === void 0 ? void 0 : n.x) || t.x === e.x, l = t.y === (e == null || (r = e.labelViewBox) === null || r === void 0 ? void 0 : r.y) || t.y === e.y;
  return o && l;
}
function e9(t, e) {
  var n = t.endAngle === e.endAngle, r = t.startAngle === e.startAngle;
  return n && r;
}
function n9(t, e) {
  var n = t.x === e.x, r = t.y === e.y, o = t.z === e.z;
  return n && r && o;
}
function r9(t, e) {
  var n;
  return Ws(t, e) ? n = t9 : Js(t, e) ? n = e9 : Dl(t, e) && (n = n9), n;
}
function a9(t, e) {
  var n;
  return Ws(t, e) ? n = "trapezoids" : Js(t, e) ? n = "sectors" : Dl(t, e) && (n = "points"), n;
}
function i9(t, e) {
  if (Ws(t, e)) {
    var n;
    return (n = e.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  if (Js(t, e)) {
    var r;
    return (r = e.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  return Dl(t, e) ? e.payload : {};
}
function o9(t) {
  var e = t.activeTooltipItem, n = t.graphicalItem, r = t.itemData, o = a9(n, e), l = i9(n, e), c = r.filter(function(h, d) {
    var y = mo(l, h), p = n.props[o].filter(function(O) {
      var S = r9(n, e);
      return S(O, e);
    }), g = n.props[o].indexOf(p[p.length - 1]), b = d === g;
    return y && b;
  }), s = r.indexOf(c[c.length - 1]);
  return s;
}
var lg, W2;
function u9() {
  if (W2) return lg;
  W2 = 1;
  var t = Math.ceil, e = Math.max;
  function n(r, o, l, c) {
    for (var s = -1, h = e(t((o - r) / (l || 1)), 0), d = Array(h); h--; )
      d[c ? h : ++s] = r, r += l;
    return d;
  }
  return lg = n, lg;
}
var cg, J2;
function _D() {
  if (J2) return cg;
  J2 = 1;
  var t = iC(), e = 1 / 0, n = 17976931348623157e292;
  function r(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = t(o), o === e || o === -e) {
      var l = o < 0 ? -1 : 1;
      return l * n;
    }
    return o === o ? o : 0;
  }
  return cg = r, cg;
}
var fg, tM;
function l9() {
  if (tM) return fg;
  tM = 1;
  var t = u9(), e = Us(), n = _D();
  function r(o) {
    return function(l, c, s) {
      return s && typeof s != "number" && e(l, c, s) && (c = s = void 0), l = n(l), c === void 0 ? (c = l, l = 0) : c = n(c), s = s === void 0 ? l < c ? 1 : -1 : n(s), t(l, c, s, o);
    };
  }
  return fg = r, fg;
}
var sg, eM;
function c9() {
  if (eM) return sg;
  eM = 1;
  var t = l9(), e = t();
  return sg = e, sg;
}
var f9 = c9();
const ps = /* @__PURE__ */ Qt(f9);
function Pl(t) {
  "@babel/helpers - typeof";
  return Pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pl(t);
}
function nM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nM(Object(n), !0).forEach(function(r) {
      OD(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function OD(t, e, n) {
  return e = s9(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function s9(t) {
  var e = h9(t, "string");
  return Pl(e) == "symbol" ? e : e + "";
}
function h9(t, e) {
  if (Pl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Pl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var d9 = ["Webkit", "Moz", "O", "ms"], v9 = function(e, n) {
  var r = e.replace(/(\w)/, function(l) {
    return l.toUpperCase();
  }), o = d9.reduce(function(l, c) {
    return rM(rM({}, l), {}, OD({}, c + r, n));
  }, {});
  return o[e] = n, o;
};
function xo(t) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xo(t);
}
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ys.apply(this, arguments);
}
function aM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? aM(Object(n), !0).forEach(function(r) {
      sn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : aM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function p9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function iM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, wD(r.key), r);
  }
}
function y9(t, e, n) {
  return e && iM(t.prototype, e), n && iM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function m9(t, e, n) {
  return e = ms(e), g9(t, AD() ? Reflect.construct(e, n || [], ms(t).constructor) : e.apply(t, n));
}
function g9(t, e) {
  if (e && (xo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b9(t);
}
function b9(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function AD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (AD = function() {
    return !!t;
  })();
}
function ms(t) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ms(t);
}
function x9(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Mb(t, e);
}
function Mb(t, e) {
  return Mb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Mb(t, e);
}
function sn(t, e, n) {
  return e = wD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function wD(t) {
  var e = S9(t, "string");
  return xo(e) == "symbol" ? e : e + "";
}
function S9(t, e) {
  if (xo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (xo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var _9 = function(e) {
  var n = e.data, r = e.startIndex, o = e.endIndex, l = e.x, c = e.width, s = e.travellerWidth;
  if (!n || !n.length)
    return {};
  var h = n.length, d = Wu().domain(ps(0, h)).range([l, l + c - s]), y = d.domain().map(function(p) {
    return d(p);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: d(r),
    endX: d(o),
    scale: d,
    scaleValues: y
  };
}, oM = function(e) {
  return e.changedTouches && !!e.changedTouches.length;
}, So = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return p9(this, e), r = m9(this, e, [n]), sn(r, "handleDrag", function(o) {
      r.leaveTimer && (clearTimeout(r.leaveTimer), r.leaveTimer = null), r.state.isTravellerMoving ? r.handleTravellerMove(o) : r.state.isSlideMoving && r.handleSlideDrag(o);
    }), sn(r, "handleTouchMove", function(o) {
      o.changedTouches != null && o.changedTouches.length > 0 && r.handleDrag(o.changedTouches[0]);
    }), sn(r, "handleDragEnd", function() {
      r.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var o = r.props, l = o.endIndex, c = o.onDragEnd, s = o.startIndex;
        c == null || c({
          endIndex: l,
          startIndex: s
        });
      }), r.detachDragEndListener();
    }), sn(r, "handleLeaveWrapper", function() {
      (r.state.isTravellerMoving || r.state.isSlideMoving) && (r.leaveTimer = window.setTimeout(r.handleDragEnd, r.props.leaveTimeOut));
    }), sn(r, "handleEnterSlideOrTraveller", function() {
      r.setState({
        isTextActive: !0
      });
    }), sn(r, "handleLeaveSlideOrTraveller", function() {
      r.setState({
        isTextActive: !1
      });
    }), sn(r, "handleSlideDragStart", function(o) {
      var l = oM(o) ? o.changedTouches[0] : o;
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
  return x9(e, t), y9(e, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(r) {
      var o = r.startX, l = r.endX, c = this.state.scaleValues, s = this.props, h = s.gap, d = s.data, y = d.length - 1, p = Math.min(o, l), g = Math.max(o, l), b = e.getIndexInRange(c, p), O = e.getIndexInRange(c, g);
      return {
        startIndex: b - b % h,
        endIndex: O === y ? y : O - O % h
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(r) {
      var o = this.props, l = o.data, c = o.tickFormatter, s = o.dataKey, h = Ge(l[r], s, r);
      return At(c) ? c(h, r) : h;
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
      var o = this.state, l = o.slideMoveStartX, c = o.startX, s = o.endX, h = this.props, d = h.x, y = h.width, p = h.travellerWidth, g = h.startIndex, b = h.endIndex, O = h.onChange, S = r.pageX - l;
      S > 0 ? S = Math.min(S, d + y - p - s, d + y - p - c) : S < 0 && (S = Math.max(S, d - c, d - s));
      var x = this.getIndex({
        startX: c + S,
        endX: s + S
      });
      (x.startIndex !== g || x.endIndex !== b) && O && O(x), this.setState({
        startX: c + S,
        endX: s + S,
        slideMoveStartX: r.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(r, o) {
      var l = oM(o) ? o.changedTouches[0] : o;
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
      var o = this.state, l = o.brushMoveStartX, c = o.movingTravellerId, s = o.endX, h = o.startX, d = this.state[c], y = this.props, p = y.x, g = y.width, b = y.travellerWidth, O = y.onChange, S = y.gap, x = y.data, T = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = r.pageX - l;
      w > 0 ? w = Math.min(w, p + g - b - d) : w < 0 && (w = Math.max(w, p - d)), T[c] = d + w;
      var M = this.getIndex(T), j = M.startIndex, A = M.endIndex, E = function() {
        var R = x.length - 1;
        return c === "startX" && (s > h ? j % S === 0 : A % S === 0) || s < h && A === R || c === "endX" && (s > h ? A % S === 0 : j % S === 0) || s > h && A === R;
      };
      this.setState(sn(sn({}, c, d + w), "brushMoveStartX", r.pageX), function() {
        O && E() && O(M);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(r, o) {
      var l = this, c = this.state, s = c.scaleValues, h = c.startX, d = c.endX, y = this.state[o], p = s.indexOf(y);
      if (p !== -1) {
        var g = p + r;
        if (!(g === -1 || g >= s.length)) {
          var b = s[g];
          o === "startX" && b >= d || o === "endX" && b <= h || this.setState(sn({}, o, b), function() {
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
      var r = this.props, o = r.x, l = r.y, c = r.width, s = r.height, h = r.fill, d = r.stroke;
      return /* @__PURE__ */ B.createElement("rect", {
        stroke: d,
        fill: h,
        x: o,
        y: l,
        width: c,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var r = this.props, o = r.x, l = r.y, c = r.width, s = r.height, h = r.data, d = r.children, y = r.padding, p = rt.Children.only(d);
      return p ? /* @__PURE__ */ B.cloneElement(p, {
        x: o,
        y: l,
        width: c,
        height: s,
        margin: y,
        compact: !0,
        data: h
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(r, o) {
      var l, c, s = this, h = this.props, d = h.y, y = h.travellerWidth, p = h.height, g = h.traveller, b = h.ariaLabel, O = h.data, S = h.startIndex, x = h.endIndex, T = Math.max(r, this.props.x), w = hg(hg({}, Et(this.props, !1)), {}, {
        x: T,
        y: d,
        width: y,
        height: p
      }), M = b || "Min value: ".concat((l = O[S]) === null || l === void 0 ? void 0 : l.name, ", Max value: ").concat((c = O[x]) === null || c === void 0 ? void 0 : c.name);
      return /* @__PURE__ */ B.createElement(Jt, {
        tabIndex: 0,
        role: "slider",
        "aria-label": M,
        "aria-valuenow": r,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[o],
        onTouchStart: this.travellerDragStartHandlers[o],
        onKeyDown: function(A) {
          ["ArrowLeft", "ArrowRight"].includes(A.key) && (A.preventDefault(), A.stopPropagation(), s.handleTravellerMoveKeyboard(A.key === "ArrowRight" ? 1 : -1, o));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, e.renderTraveller(g, w));
    }
  }, {
    key: "renderSlide",
    value: function(r, o) {
      var l = this.props, c = l.y, s = l.height, h = l.stroke, d = l.travellerWidth, y = Math.min(r, o) + d, p = Math.max(Math.abs(o - r) - d, 0);
      return /* @__PURE__ */ B.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: h,
        fillOpacity: 0.2,
        x: y,
        y: c,
        width: p,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var r = this.props, o = r.startIndex, l = r.endIndex, c = r.y, s = r.height, h = r.travellerWidth, d = r.stroke, y = this.state, p = y.startX, g = y.endX, b = 5, O = {
        pointerEvents: "none",
        fill: d
      };
      return /* @__PURE__ */ B.createElement(Jt, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ B.createElement(If, ys({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(p, g) - b,
        y: c + s / 2
      }, O), this.getTextOfTick(o)), /* @__PURE__ */ B.createElement(If, ys({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(p, g) + h + b,
        y: c + s / 2
      }, O), this.getTextOfTick(l)));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.data, l = r.className, c = r.children, s = r.x, h = r.y, d = r.width, y = r.height, p = r.alwaysShowText, g = this.state, b = g.startX, O = g.endX, S = g.isTextActive, x = g.isSlideMoving, T = g.isTravellerMoving, w = g.isTravellerFocused;
      if (!o || !o.length || !st(s) || !st(h) || !st(d) || !st(y) || d <= 0 || y <= 0)
        return null;
      var M = qt("recharts-brush", l), j = B.Children.count(c) === 1, A = v9("userSelect", "none");
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: A
      }, this.renderBackground(), j && this.renderPanorama(), this.renderSlide(b, O), this.renderTravellerLayer(b, "startX"), this.renderTravellerLayer(O, "endX"), (S || x || T || w || p) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(r) {
      var o = r.x, l = r.y, c = r.width, s = r.height, h = r.stroke, d = Math.floor(l + s / 2) - 1;
      return /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement("rect", {
        x: o,
        y: l,
        width: c,
        height: s,
        fill: h,
        stroke: "none"
      }), /* @__PURE__ */ B.createElement("line", {
        x1: o + 1,
        y1: d,
        x2: o + c - 1,
        y2: d,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ B.createElement("line", {
        x1: o + 1,
        y1: d + 2,
        x2: o + c - 1,
        y2: d + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(r, o) {
      var l;
      return /* @__PURE__ */ B.isValidElement(r) ? l = /* @__PURE__ */ B.cloneElement(r, o) : At(r) ? l = r(o) : l = e.renderDefaultTraveller(o), l;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(r, o) {
      var l = r.data, c = r.width, s = r.x, h = r.travellerWidth, d = r.updateId, y = r.startIndex, p = r.endIndex;
      if (l !== o.prevData || d !== o.prevUpdateId)
        return hg({
          prevData: l,
          prevTravellerWidth: h,
          prevUpdateId: d,
          prevX: s,
          prevWidth: c
        }, l && l.length ? _9({
          data: l,
          width: c,
          x: s,
          travellerWidth: h,
          startIndex: y,
          endIndex: p
        }) : {
          scale: null,
          scaleValues: null
        });
      if (o.scale && (c !== o.prevWidth || s !== o.prevX || h !== o.prevTravellerWidth)) {
        o.scale.range([s, s + c - h]);
        var g = o.scale.domain().map(function(b) {
          return o.scale(b);
        });
        return {
          prevData: l,
          prevTravellerWidth: h,
          prevUpdateId: d,
          prevX: s,
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
      for (var l = r.length, c = 0, s = l - 1; s - c > 1; ) {
        var h = Math.floor((c + s) / 2);
        r[h] > o ? s = h : c = h;
      }
      return o >= r[s] ? s : c;
    }
  }]);
})(rt.PureComponent);
sn(So, "displayName", "Brush");
sn(So, "defaultProps", {
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
var dg, uM;
function O9() {
  if (uM) return dg;
  uM = 1;
  var t = x0();
  function e(n, r) {
    var o;
    return t(n, function(l, c, s) {
      return o = r(l, c, s), !o;
    }), !!o;
  }
  return dg = e, dg;
}
var vg, lM;
function A9() {
  if (lM) return vg;
  lM = 1;
  var t = zj(), e = xa(), n = O9(), r = Je(), o = Us();
  function l(c, s, h) {
    var d = r(c) ? t : n;
    return h && o(c, s, h) && (s = void 0), d(c, e(s, 3));
  }
  return vg = l, vg;
}
var w9 = A9();
const T9 = /* @__PURE__ */ Qt(w9);
var Jn = function(e, n) {
  var r = e.alwaysShow, o = e.ifOverflow;
  return r && (o = "extendDomain"), o === n;
}, pg, cM;
function E9() {
  if (cM) return pg;
  cM = 1;
  var t = tC();
  function e(n, r, o) {
    r == "__proto__" && t ? t(n, r, {
      configurable: !0,
      enumerable: !0,
      value: o,
      writable: !0
    }) : n[r] = o;
  }
  return pg = e, pg;
}
var yg, fM;
function M9() {
  if (fM) return yg;
  fM = 1;
  var t = E9(), e = Wj(), n = xa();
  function r(o, l) {
    var c = {};
    return l = n(l, 3), e(o, function(s, h, d) {
      t(c, h, l(s, h, d));
    }), c;
  }
  return yg = r, yg;
}
var j9 = M9();
const C9 = /* @__PURE__ */ Qt(j9);
var mg, sM;
function D9() {
  if (sM) return mg;
  sM = 1;
  function t(e, n) {
    for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
      if (!n(e[r], r, e))
        return !1;
    return !0;
  }
  return mg = t, mg;
}
var gg, hM;
function P9() {
  if (hM) return gg;
  hM = 1;
  var t = x0();
  function e(n, r) {
    var o = !0;
    return t(n, function(l, c, s) {
      return o = !!r(l, c, s), o;
    }), o;
  }
  return gg = e, gg;
}
var bg, dM;
function N9() {
  if (dM) return bg;
  dM = 1;
  var t = D9(), e = P9(), n = xa(), r = Je(), o = Us();
  function l(c, s, h) {
    var d = r(c) ? t : e;
    return h && o(c, s, h) && (s = void 0), d(c, n(s, 3));
  }
  return bg = l, bg;
}
var R9 = N9();
const TD = /* @__PURE__ */ Qt(R9);
var q9 = ["x", "y"];
function Nl(t) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nl(t);
}
function jb() {
  return jb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, jb.apply(this, arguments);
}
function vM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Gu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vM(Object(n), !0).forEach(function(r) {
      z9(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function z9(t, e, n) {
  return e = $9(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function $9(t) {
  var e = B9(t, "string");
  return Nl(e) == "symbol" ? e : e + "";
}
function B9(t, e) {
  if (Nl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Nl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function L9(t, e) {
  if (t == null) return {};
  var n = k9(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function k9(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function U9(t, e) {
  var n = t.x, r = t.y, o = L9(t, q9), l = "".concat(n), c = parseInt(l, 10), s = "".concat(r), h = parseInt(s, 10), d = "".concat(e.height || o.height), y = parseInt(d, 10), p = "".concat(e.width || o.width), g = parseInt(p, 10);
  return Gu(Gu(Gu(Gu(Gu({}, e), o), c ? {
    x: c
  } : {}), h ? {
    y: h
  } : {}), {}, {
    height: y,
    width: g,
    name: e.name,
    radius: e.radius
  });
}
function pM(t) {
  return /* @__PURE__ */ B.createElement(JH, jb({
    shapeType: "rectangle",
    propTransformer: U9,
    activeClassName: "recharts-active-bar"
  }, t));
}
var H9 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(r, o) {
    if (typeof e == "number") return e;
    var l = st(r) || K3(r);
    return l ? e(r, o) : (l || ni(), n);
  };
}, I9 = ["value", "background"], ED;
function _o(t) {
  "@babel/helpers - typeof";
  return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _o(t);
}
function G9(t, e) {
  if (t == null) return {};
  var n = Y9(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Y9(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, gs.apply(this, arguments);
}
function yM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function me(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yM(Object(n), !0).forEach(function(r) {
      ma(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function X9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, jD(r.key), r);
  }
}
function K9(t, e, n) {
  return e && mM(t.prototype, e), n && mM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function V9(t, e, n) {
  return e = bs(e), F9(t, MD() ? Reflect.construct(e, n || [], bs(t).constructor) : e.apply(t, n));
}
function F9(t, e) {
  if (e && (_o(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z9(t);
}
function Z9(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function MD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (MD = function() {
    return !!t;
  })();
}
function bs(t) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, bs(t);
}
function Q9(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Cb(t, e);
}
function Cb(t, e) {
  return Cb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Cb(t, e);
}
function ma(t, e, n) {
  return e = jD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function jD(t) {
  var e = W9(t, "string");
  return _o(e) == "symbol" ? e : e + "";
}
function W9(t, e) {
  if (_o(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (_o(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ci = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    X9(this, e);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = V9(this, e, [].concat(o)), ma(n, "state", {
      isAnimationFinished: !1
    }), ma(n, "id", zo("recharts-bar-")), ma(n, "handleAnimationEnd", function() {
      var c = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), c && c();
    }), ma(n, "handleAnimationStart", function() {
      var c = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), c && c();
    }), n;
  }
  return Q9(e, t), K9(e, [{
    key: "renderRectanglesStatically",
    value: function(r) {
      var o = this, l = this.props, c = l.shape, s = l.dataKey, h = l.activeIndex, d = l.activeBar, y = Et(this.props, !1);
      return r && r.map(function(p, g) {
        var b = g === h, O = b ? d : c, S = me(me(me({}, y), p), {}, {
          isActive: b,
          option: O,
          index: g,
          dataKey: s,
          onAnimationStart: o.handleAnimationStart,
          onAnimationEnd: o.handleAnimationEnd
        });
        return /* @__PURE__ */ B.createElement(Jt, gs({
          className: "recharts-bar-rectangle"
        }, Pf(o.props, p, g), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(p == null ? void 0 : p.x, "-").concat(p == null ? void 0 : p.y, "-").concat(p == null ? void 0 : p.value, "-").concat(g)
        }), /* @__PURE__ */ B.createElement(pM, S));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var r = this, o = this.props, l = o.data, c = o.layout, s = o.isAnimationActive, h = o.animationBegin, d = o.animationDuration, y = o.animationEasing, p = o.animationId, g = this.state.prevData;
      return /* @__PURE__ */ B.createElement(nr, {
        begin: h,
        duration: d,
        isActive: s,
        easing: y,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(b) {
        var O = b.t, S = l.map(function(x, T) {
          var w = g && g[T];
          if (w) {
            var M = Re(w.x, x.x), j = Re(w.y, x.y), A = Re(w.width, x.width), E = Re(w.height, x.height);
            return me(me({}, x), {}, {
              x: M(O),
              y: j(O),
              width: A(O),
              height: E(O)
            });
          }
          if (c === "horizontal") {
            var D = Re(0, x.height), R = D(O);
            return me(me({}, x), {}, {
              y: x.y + x.height - R,
              height: R
            });
          }
          var z = Re(0, x.width), F = z(O);
          return me(me({}, x), {}, {
            width: F
          });
        });
        return /* @__PURE__ */ B.createElement(Jt, null, r.renderRectanglesStatically(S));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var r = this.props, o = r.data, l = r.isAnimationActive, c = this.state.prevData;
      return l && o && o.length && (!c || !mo(c, o)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(o);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var r = this, o = this.props, l = o.data, c = o.dataKey, s = o.activeIndex, h = Et(this.props.background, !1);
      return l.map(function(d, y) {
        d.value;
        var p = d.background, g = G9(d, I9);
        if (!p)
          return null;
        var b = me(me(me(me(me({}, g), {}, {
          fill: "#eee"
        }, p), h), Pf(r.props, d, y)), {}, {
          onAnimationStart: r.handleAnimationStart,
          onAnimationEnd: r.handleAnimationEnd,
          dataKey: c,
          index: y,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ B.createElement(pM, gs({
          key: "background-bar-".concat(y),
          option: r.props.background,
          isActive: y === s
        }, b));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(r, o) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var l = this.props, c = l.data, s = l.xAxis, h = l.yAxis, d = l.layout, y = l.children, p = Cn(y, Gl);
      if (!p)
        return null;
      var g = d === "vertical" ? c[0].height / 2 : c[0].width / 2, b = function(x, T) {
        var w = Array.isArray(x.value) ? x.value[1] : x.value;
        return {
          x: x.x,
          y: x.y,
          value: w,
          errorVal: Ge(x, T)
        };
      }, O = {
        clipPath: r ? "url(#clipPath-".concat(o, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, O, p.map(function(S) {
        return /* @__PURE__ */ B.cloneElement(S, {
          key: "error-bar-".concat(o, "-").concat(S.props.dataKey),
          data: c,
          xAxis: s,
          yAxis: h,
          layout: d,
          offset: g,
          dataPointFormatter: b
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.hide, l = r.data, c = r.className, s = r.xAxis, h = r.yAxis, d = r.left, y = r.top, p = r.width, g = r.height, b = r.isAnimationActive, O = r.background, S = r.id;
      if (o || !l || !l.length)
        return null;
      var x = this.state.isAnimationFinished, T = qt("recharts-bar", c), w = s && s.allowDataOverflow, M = h && h.allowDataOverflow, j = w || M, A = Mt(S) ? this.id : S;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: T
      }, w || M ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: w ? d : d - p / 2,
        y: M ? y : y - g / 2,
        width: w ? p : p * 2,
        height: M ? g : g * 2
      }))) : null, /* @__PURE__ */ B.createElement(Jt, {
        className: "recharts-bar-rectangles",
        clipPath: j ? "url(#clipPath-".concat(A, ")") : null
      }, O ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(j, A), (!b || x) && Nr.renderCallByParent(this.props, l));
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
})(rt.PureComponent);
ED = ci;
ma(ci, "displayName", "Bar");
ma(ci, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !ii.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
ma(ci, "getComposedData", function(t) {
  var e = t.props, n = t.item, r = t.barPosition, o = t.bandSize, l = t.xAxis, c = t.yAxis, s = t.xAxisTicks, h = t.yAxisTicks, d = t.stackedData, y = t.dataStartIndex, p = t.displayedData, g = t.offset, b = s5(r, n);
  if (!b)
    return null;
  var O = e.layout, S = n.type.defaultProps, x = S !== void 0 ? me(me({}, S), n.props) : n.props, T = x.dataKey, w = x.children, M = x.minPointSize, j = O === "horizontal" ? c : l, A = d ? j.scale.domain() : null, E = b5({
    numericAxis: j
  }), D = Cn(w, O0), R = p.map(function(z, F) {
    var k, $, K, Z, V, N;
    d ? k = h5(d[y + F], A) : (k = Ge(z, T), Array.isArray(k) || (k = [E, k]));
    var I = H9(M, ED.defaultProps.minPointSize)(k[1], F);
    if (O === "horizontal") {
      var W, ot = [c.scale(k[0]), c.scale(k[1])], lt = ot[0], P = ot[1];
      $ = e2({
        axis: l,
        ticks: s,
        bandSize: o,
        offset: b.offset,
        entry: z,
        index: F
      }), K = (W = P ?? lt) !== null && W !== void 0 ? W : void 0, Z = b.size;
      var U = lt - P;
      if (V = Number.isNaN(U) ? 0 : U, N = {
        x: $,
        y: c.y,
        width: Z,
        height: c.height
      }, Math.abs(I) > 0 && Math.abs(V) < Math.abs(I)) {
        var et = Hn(V || I) * (Math.abs(I) - Math.abs(V));
        K -= et, V += et;
      }
    } else {
      var ft = [l.scale(k[0]), l.scale(k[1])], vt = ft[0], mt = ft[1];
      if ($ = vt, K = e2({
        axis: c,
        ticks: h,
        bandSize: o,
        offset: b.offset,
        entry: z,
        index: F
      }), Z = mt - vt, V = b.size, N = {
        x: l.x,
        y: K,
        width: l.width,
        height: V
      }, Math.abs(I) > 0 && Math.abs(Z) < Math.abs(I)) {
        var jt = Hn(Z || I) * (Math.abs(I) - Math.abs(Z));
        Z += jt;
      }
    }
    return me(me(me({}, z), {}, {
      x: $,
      y: K,
      width: Z,
      height: V,
      value: d ? k : k[1],
      payload: z,
      background: N
    }, D && D[F] && D[F].props), {}, {
      tooltipPayload: [sD(n, z)],
      tooltipPosition: {
        x: $ + Z / 2,
        y: K + V / 2
      }
    });
  });
  return me({
    data: R,
    layout: O
  }, g);
});
function Rl(t) {
  "@babel/helpers - typeof";
  return Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rl(t);
}
function J9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, CD(r.key), r);
  }
}
function t7(t, e, n) {
  return e && gM(t.prototype, e), n && gM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function bM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ln(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bM(Object(n), !0).forEach(function(r) {
      th(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function th(t, e, n) {
  return e = CD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function CD(t) {
  var e = e7(t, "string");
  return Rl(e) == "symbol" ? e : e + "";
}
function e7(t, e) {
  if (Rl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Rl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Z0 = function(e, n, r, o, l) {
  var c = e.width, s = e.height, h = e.layout, d = e.children, y = Object.keys(n), p = {
    left: r.left,
    leftMirror: r.left,
    right: c - r.right,
    rightMirror: c - r.right,
    top: r.top,
    topMirror: r.top,
    bottom: s - r.bottom,
    bottomMirror: s - r.bottom
  }, g = !!hn(d, ci);
  return y.reduce(function(b, O) {
    var S = n[O], x = S.orientation, T = S.domain, w = S.padding, M = w === void 0 ? {} : w, j = S.mirror, A = S.reversed, E = "".concat(x).concat(j ? "Mirror" : ""), D, R, z, F, k;
    if (S.type === "number" && (S.padding === "gap" || S.padding === "no-gap")) {
      var $ = T[1] - T[0], K = 1 / 0, Z = S.categoricalDomain.sort(Z3);
      if (Z.forEach(function(ft, vt) {
        vt > 0 && (K = Math.min((ft || 0) - (Z[vt - 1] || 0), K));
      }), Number.isFinite(K)) {
        var V = K / $, N = S.layout === "vertical" ? r.height : r.width;
        if (S.padding === "gap" && (D = V * N / 2), S.padding === "no-gap") {
          var I = ti(e.barCategoryGap, V * N), W = V * N / 2;
          D = W - I - (W - I) / N * I;
        }
      }
    }
    o === "xAxis" ? R = [r.left + (M.left || 0) + (D || 0), r.left + r.width - (M.right || 0) - (D || 0)] : o === "yAxis" ? R = h === "horizontal" ? [r.top + r.height - (M.bottom || 0), r.top + (M.top || 0)] : [r.top + (M.top || 0) + (D || 0), r.top + r.height - (M.bottom || 0) - (D || 0)] : R = S.range, A && (R = [R[1], R[0]]);
    var ot = c5(S, l, g), lt = ot.scale, P = ot.realScaleType;
    lt.domain(T).range(R), f5(lt);
    var U = g5(lt, Ln(Ln({}, S), {}, {
      realScaleType: P
    }));
    o === "xAxis" ? (k = x === "top" && !j || x === "bottom" && j, z = r.left, F = p[E] - k * S.height) : o === "yAxis" && (k = x === "left" && !j || x === "right" && j, z = p[E] - k * S.width, F = r.top);
    var et = Ln(Ln(Ln({}, S), U), {}, {
      realScaleType: P,
      x: z,
      y: F,
      scale: lt,
      width: o === "xAxis" ? r.width : S.width,
      height: o === "yAxis" ? r.height : S.height
    });
    return et.bandSize = is(et, U), !S.hide && o === "xAxis" ? p[E] += (k ? -1 : 1) * et.height : S.hide || (p[E] += (k ? -1 : 1) * et.width), Ln(Ln({}, b), {}, th({}, O, et));
  }, {});
}, DD = function(e, n) {
  var r = e.x, o = e.y, l = n.x, c = n.y;
  return {
    x: Math.min(r, l),
    y: Math.min(o, c),
    width: Math.abs(l - r),
    height: Math.abs(c - o)
  };
}, n7 = function(e) {
  var n = e.x1, r = e.y1, o = e.x2, l = e.y2;
  return DD({
    x: n,
    y: r
  }, {
    x: o,
    y: l
  });
}, PD = /* @__PURE__ */ (function() {
  function t(e) {
    J9(this, t), this.scale = e;
  }
  return t7(t, [{
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
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(n) + s;
            }
            default:
              return this.scale(n);
          }
        if (o) {
          var h = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(n) + h;
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
      return new t(n);
    }
  }]);
})();
th(PD, "EPS", 1e-4);
var Q0 = function(e) {
  var n = Object.keys(e).reduce(function(r, o) {
    return Ln(Ln({}, r), {}, th({}, o, PD.create(e[o])));
  }, {});
  return Ln(Ln({}, n), {}, {
    apply: function(o) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = l.bandAware, s = l.position;
      return C9(o, function(h, d) {
        return n[d].apply(h, {
          bandAware: c,
          position: s
        });
      });
    },
    isInRange: function(o) {
      return TD(o, function(l, c) {
        return n[c].isInRange(l);
      });
    }
  });
};
function r7(t) {
  return (t % 180 + 180) % 180;
}
var a7 = function(e) {
  var n = e.width, r = e.height, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = r7(o), c = l * Math.PI / 180, s = Math.atan(r / n), h = c > s && c < Math.PI - s ? r / Math.sin(c) : n / Math.cos(c);
  return Math.abs(h);
}, xg, xM;
function i7() {
  if (xM) return xg;
  xM = 1;
  var t = xa(), e = Ll(), n = Ls();
  function r(o) {
    return function(l, c, s) {
      var h = Object(l);
      if (!e(l)) {
        var d = t(c, 3);
        l = n(l), c = function(p) {
          return d(h[p], p, h);
        };
      }
      var y = o(l, c, s);
      return y > -1 ? h[d ? l[y] : y] : void 0;
    };
  }
  return xg = r, xg;
}
var Sg, SM;
function o7() {
  if (SM) return Sg;
  SM = 1;
  var t = _D();
  function e(n) {
    var r = t(n), o = r % 1;
    return r === r ? o ? r - o : r : 0;
  }
  return Sg = e, Sg;
}
var _g, _M;
function u7() {
  if (_M) return _g;
  _M = 1;
  var t = Kj(), e = xa(), n = o7(), r = Math.max;
  function o(l, c, s) {
    var h = l == null ? 0 : l.length;
    if (!h)
      return -1;
    var d = s == null ? 0 : n(s);
    return d < 0 && (d = r(h + d, 0)), t(l, e(c, 3), d);
  }
  return _g = o, _g;
}
var Og, OM;
function l7() {
  if (OM) return Og;
  OM = 1;
  var t = i7(), e = u7(), n = t(e);
  return Og = n, Og;
}
var c7 = l7();
const f7 = /* @__PURE__ */ Qt(c7);
var s7 = lj();
const h7 = /* @__PURE__ */ Qt(s7);
var d7 = h7(function(t) {
  return {
    x: t.left,
    y: t.top,
    width: t.width,
    height: t.height
  };
}, function(t) {
  return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join("");
}), W0 = /* @__PURE__ */ rt.createContext(void 0), J0 = /* @__PURE__ */ rt.createContext(void 0), ND = /* @__PURE__ */ rt.createContext(void 0), RD = /* @__PURE__ */ rt.createContext({}), qD = /* @__PURE__ */ rt.createContext(void 0), zD = /* @__PURE__ */ rt.createContext(0), $D = /* @__PURE__ */ rt.createContext(0), AM = function(e) {
  var n = e.state, r = n.xAxisMap, o = n.yAxisMap, l = n.offset, c = e.clipPathId, s = e.children, h = e.width, d = e.height, y = d7(l);
  return /* @__PURE__ */ B.createElement(W0.Provider, {
    value: r
  }, /* @__PURE__ */ B.createElement(J0.Provider, {
    value: o
  }, /* @__PURE__ */ B.createElement(RD.Provider, {
    value: l
  }, /* @__PURE__ */ B.createElement(ND.Provider, {
    value: y
  }, /* @__PURE__ */ B.createElement(qD.Provider, {
    value: c
  }, /* @__PURE__ */ B.createElement(zD.Provider, {
    value: d
  }, /* @__PURE__ */ B.createElement($D.Provider, {
    value: h
  }, s)))))));
}, v7 = function() {
  return rt.useContext(qD);
}, BD = function(e) {
  var n = rt.useContext(W0);
  n == null && ni();
  var r = n[e];
  return r == null && ni(), r;
}, p7 = function() {
  var e = rt.useContext(W0);
  return pa(e);
}, y7 = function() {
  var e = rt.useContext(J0), n = f7(e, function(r) {
    return TD(r.domain, Number.isFinite);
  });
  return n || pa(e);
}, LD = function(e) {
  var n = rt.useContext(J0);
  n == null && ni();
  var r = n[e];
  return r == null && ni(), r;
}, m7 = function() {
  var e = rt.useContext(ND);
  return e;
}, g7 = function() {
  return rt.useContext(RD);
}, t1 = function() {
  return rt.useContext($D);
}, e1 = function() {
  return rt.useContext(zD);
};
function Oo(t) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oo(t);
}
function b7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function x7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, UD(r.key), r);
  }
}
function S7(t, e, n) {
  return e && x7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _7(t, e, n) {
  return e = xs(e), O7(t, kD() ? Reflect.construct(e, n || [], xs(t).constructor) : e.apply(t, n));
}
function O7(t, e) {
  if (e && (Oo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A7(t);
}
function A7(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function kD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kD = function() {
    return !!t;
  })();
}
function xs(t) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xs(t);
}
function w7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Db(t, e);
}
function Db(t, e) {
  return Db = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Db(t, e);
}
function wM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function TM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wM(Object(n), !0).forEach(function(r) {
      n1(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function n1(t, e, n) {
  return e = UD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function UD(t) {
  var e = T7(t, "string");
  return Oo(e) == "symbol" ? e : e + "";
}
function T7(t, e) {
  if (Oo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Oo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function E7(t, e) {
  return D7(t) || C7(t, e) || j7(t, e) || M7();
}
function M7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j7(t, e) {
  if (t) {
    if (typeof t == "string") return EM(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return EM(t, e);
  }
}
function EM(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function C7(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function D7(t) {
  if (Array.isArray(t)) return t;
}
function Pb() {
  return Pb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Pb.apply(this, arguments);
}
var P7 = function(e, n) {
  var r;
  return /* @__PURE__ */ B.isValidElement(e) ? r = /* @__PURE__ */ B.cloneElement(e, n) : At(e) ? r = e(n) : r = /* @__PURE__ */ B.createElement("line", Pb({}, n, {
    className: "recharts-reference-line-line"
  })), r;
}, N7 = function(e, n, r, o, l, c, s, h, d) {
  var y = l.x, p = l.y, g = l.width, b = l.height;
  if (r) {
    var O = d.y, S = e.y.apply(O, {
      position: c
    });
    if (Jn(d, "discard") && !e.y.isInRange(S))
      return null;
    var x = [{
      x: y + g,
      y: S
    }, {
      x: y,
      y: S
    }];
    return h === "left" ? x.reverse() : x;
  }
  if (n) {
    var T = d.x, w = e.x.apply(T, {
      position: c
    });
    if (Jn(d, "discard") && !e.x.isInRange(w))
      return null;
    var M = [{
      x: w,
      y: p + b
    }, {
      x: w,
      y: p
    }];
    return s === "top" ? M.reverse() : M;
  }
  if (o) {
    var j = d.segment, A = j.map(function(E) {
      return e.apply(E, {
        position: c
      });
    });
    return Jn(d, "discard") && T9(A, function(E) {
      return !e.isInRange(E);
    }) ? null : A;
  }
  return null;
};
function R7(t) {
  var e = t.x, n = t.y, r = t.segment, o = t.xAxisId, l = t.yAxisId, c = t.shape, s = t.className, h = t.alwaysShow, d = v7(), y = BD(o), p = LD(l), g = m7();
  if (!d || !g)
    return null;
  Dr(h === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var b = Q0({
    x: y.scale,
    y: p.scale
  }), O = _e(e), S = _e(n), x = r && r.length === 2, T = N7(b, O, S, x, g, t.position, y.orientation, p.orientation, t);
  if (!T)
    return null;
  var w = E7(T, 2), M = w[0], j = M.x, A = M.y, E = w[1], D = E.x, R = E.y, z = Jn(t, "hidden") ? "url(#".concat(d, ")") : void 0, F = TM(TM({
    clipPath: z
  }, Et(t, !0)), {}, {
    x1: j,
    y1: A,
    x2: D,
    y2: R
  });
  return /* @__PURE__ */ B.createElement(Jt, {
    className: qt("recharts-reference-line", s)
  }, P7(c, F), ke.renderCallByParent(t, n7({
    x1: j,
    y1: A,
    x2: D,
    y2: R
  })));
}
var r1 = /* @__PURE__ */ (function(t) {
  function e() {
    return b7(this, e), _7(this, e, arguments);
  }
  return w7(e, t), S7(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ B.createElement(R7, this.props);
    }
  }]);
})(B.Component);
n1(r1, "displayName", "ReferenceLine");
n1(r1, "defaultProps", {
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
function Nb() {
  return Nb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Nb.apply(this, arguments);
}
function Ao(t) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ao(t);
}
function MM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? MM(Object(n), !0).forEach(function(r) {
      eh(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : MM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function q7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function z7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ID(r.key), r);
  }
}
function $7(t, e, n) {
  return e && z7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function B7(t, e, n) {
  return e = Ss(e), L7(t, HD() ? Reflect.construct(e, n || [], Ss(t).constructor) : e.apply(t, n));
}
function L7(t, e) {
  if (e && (Ao(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k7(t);
}
function k7(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function HD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (HD = function() {
    return !!t;
  })();
}
function Ss(t) {
  return Ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ss(t);
}
function U7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Rb(t, e);
}
function Rb(t, e) {
  return Rb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Rb(t, e);
}
function eh(t, e, n) {
  return e = ID(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ID(t) {
  var e = H7(t, "string");
  return Ao(e) == "symbol" ? e : e + "";
}
function H7(t, e) {
  if (Ao(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ao(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var I7 = function(e) {
  var n = e.x, r = e.y, o = e.xAxis, l = e.yAxis, c = Q0({
    x: o.scale,
    y: l.scale
  }), s = c.apply({
    x: n,
    y: r
  }, {
    bandAware: !0
  });
  return Jn(e, "discard") && !c.isInRange(s) ? null : s;
}, nh = /* @__PURE__ */ (function(t) {
  function e() {
    return q7(this, e), B7(this, e, arguments);
  }
  return U7(e, t), $7(e, [{
    key: "render",
    value: function() {
      var r = this.props, o = r.x, l = r.y, c = r.r, s = r.alwaysShow, h = r.clipPathId, d = _e(o), y = _e(l);
      if (Dr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !d || !y)
        return null;
      var p = I7(this.props);
      if (!p)
        return null;
      var g = p.x, b = p.y, O = this.props, S = O.shape, x = O.className, T = Jn(this.props, "hidden") ? "url(#".concat(h, ")") : void 0, w = jM(jM({
        clipPath: T
      }, Et(this.props, !0)), {}, {
        cx: g,
        cy: b
      });
      return /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-reference-dot", x)
      }, e.renderDot(S, w), ke.renderCallByParent(this.props, {
        x: g - c,
        y: b - c,
        width: 2 * c,
        height: 2 * c
      }));
    }
  }]);
})(B.Component);
eh(nh, "displayName", "ReferenceDot");
eh(nh, "defaultProps", {
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
eh(nh, "renderDot", function(t, e) {
  var n;
  return /* @__PURE__ */ B.isValidElement(t) ? n = /* @__PURE__ */ B.cloneElement(t, e) : At(t) ? n = t(e) : n = /* @__PURE__ */ B.createElement(Qs, Nb({}, e, {
    cx: e.cx,
    cy: e.cy,
    className: "recharts-reference-dot-dot"
  })), n;
});
function qb() {
  return qb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, qb.apply(this, arguments);
}
function wo(t) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wo(t);
}
function CM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function DM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? CM(Object(n), !0).forEach(function(r) {
      rh(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : CM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function G7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Y7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, YD(r.key), r);
  }
}
function X7(t, e, n) {
  return e && Y7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function K7(t, e, n) {
  return e = _s(e), V7(t, GD() ? Reflect.construct(e, n || [], _s(t).constructor) : e.apply(t, n));
}
function V7(t, e) {
  if (e && (wo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return F7(t);
}
function F7(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function GD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (GD = function() {
    return !!t;
  })();
}
function _s(t) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _s(t);
}
function Z7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && zb(t, e);
}
function zb(t, e) {
  return zb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, zb(t, e);
}
function rh(t, e, n) {
  return e = YD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function YD(t) {
  var e = Q7(t, "string");
  return wo(e) == "symbol" ? e : e + "";
}
function Q7(t, e) {
  if (wo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (wo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var W7 = function(e, n, r, o, l) {
  var c = l.x1, s = l.x2, h = l.y1, d = l.y2, y = l.xAxis, p = l.yAxis;
  if (!y || !p) return null;
  var g = Q0({
    x: y.scale,
    y: p.scale
  }), b = {
    x: e ? g.x.apply(c, {
      position: "start"
    }) : g.x.rangeMin,
    y: r ? g.y.apply(h, {
      position: "start"
    }) : g.y.rangeMin
  }, O = {
    x: n ? g.x.apply(s, {
      position: "end"
    }) : g.x.rangeMax,
    y: o ? g.y.apply(d, {
      position: "end"
    }) : g.y.rangeMax
  };
  return Jn(l, "discard") && (!g.isInRange(b) || !g.isInRange(O)) ? null : DD(b, O);
}, ah = /* @__PURE__ */ (function(t) {
  function e() {
    return G7(this, e), K7(this, e, arguments);
  }
  return Z7(e, t), X7(e, [{
    key: "render",
    value: function() {
      var r = this.props, o = r.x1, l = r.x2, c = r.y1, s = r.y2, h = r.className, d = r.alwaysShow, y = r.clipPathId;
      Dr(d === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var p = _e(o), g = _e(l), b = _e(c), O = _e(s), S = this.props.shape;
      if (!p && !g && !b && !O && !S)
        return null;
      var x = W7(p, g, b, O, this.props);
      if (!x && !S)
        return null;
      var T = Jn(this.props, "hidden") ? "url(#".concat(y, ")") : void 0;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-reference-area", h)
      }, e.renderRect(S, DM(DM({
        clipPath: T
      }, Et(this.props, !0)), x)), ke.renderCallByParent(this.props, x));
    }
  }]);
})(B.Component);
rh(ah, "displayName", "ReferenceArea");
rh(ah, "defaultProps", {
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
rh(ah, "renderRect", function(t, e) {
  var n;
  return /* @__PURE__ */ B.isValidElement(t) ? n = /* @__PURE__ */ B.cloneElement(t, e) : At(t) ? n = t(e) : n = /* @__PURE__ */ B.createElement(F0, qb({}, e, {
    className: "recharts-reference-area-rect"
  })), n;
});
function XD(t, e, n) {
  if (e < 1)
    return [];
  if (e === 1 && n === void 0)
    return t;
  for (var r = [], o = 0; o < t.length; o += e)
    r.push(t[o]);
  return r;
}
function J7(t, e, n) {
  var r = {
    width: t.width + e.width,
    height: t.height + e.height
  };
  return a7(r, n);
}
function tI(t, e, n) {
  var r = n === "width", o = t.x, l = t.y, c = t.width, s = t.height;
  return e === 1 ? {
    start: r ? o : l,
    end: r ? o + c : l + s
  } : {
    start: r ? o + c : l + s,
    end: r ? o : l
  };
}
function Os(t, e, n, r, o) {
  if (t * e < t * r || t * e > t * o)
    return !1;
  var l = n();
  return t * (e - t * l / 2 - r) >= 0 && t * (e + t * l / 2 - o) <= 0;
}
function eI(t, e) {
  return XD(t, e + 1);
}
function nI(t, e, n, r, o) {
  for (var l = (r || []).slice(), c = e.start, s = e.end, h = 0, d = 1, y = c, p = function() {
    var O = r == null ? void 0 : r[h];
    if (O === void 0)
      return {
        v: XD(r, d)
      };
    var S = h, x, T = function() {
      return x === void 0 && (x = n(O, S)), x;
    }, w = O.coordinate, M = h === 0 || Os(t, w, T, y, s);
    M || (h = 0, y = c, d += 1), M && (y = w + t * (T() / 2 + o), h += d);
  }, g; d <= l.length; )
    if (g = p(), g) return g.v;
  return [];
}
function ql(t) {
  "@babel/helpers - typeof";
  return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ql(t);
}
function PM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? PM(Object(n), !0).forEach(function(r) {
      rI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : PM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function rI(t, e, n) {
  return e = aI(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function aI(t) {
  var e = iI(t, "string");
  return ql(e) == "symbol" ? e : e + "";
}
function iI(t, e) {
  if (ql(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ql(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function oI(t, e, n, r, o) {
  for (var l = (r || []).slice(), c = l.length, s = e.start, h = e.end, d = function(g) {
    var b = l[g], O, S = function() {
      return O === void 0 && (O = n(b, g)), O;
    };
    if (g === c - 1) {
      var x = t * (b.coordinate + t * S() / 2 - h);
      l[g] = b = Le(Le({}, b), {}, {
        tickCoord: x > 0 ? b.coordinate - x * t : b.coordinate
      });
    } else
      l[g] = b = Le(Le({}, b), {}, {
        tickCoord: b.coordinate
      });
    var T = Os(t, b.tickCoord, S, s, h);
    T && (h = b.tickCoord - t * (S() / 2 + o), l[g] = Le(Le({}, b), {}, {
      isShow: !0
    }));
  }, y = c - 1; y >= 0; y--)
    d(y);
  return l;
}
function uI(t, e, n, r, o, l) {
  var c = (r || []).slice(), s = c.length, h = e.start, d = e.end;
  if (l) {
    var y = r[s - 1], p = n(y, s - 1), g = t * (y.coordinate + t * p / 2 - d);
    c[s - 1] = y = Le(Le({}, y), {}, {
      tickCoord: g > 0 ? y.coordinate - g * t : y.coordinate
    });
    var b = Os(t, y.tickCoord, function() {
      return p;
    }, h, d);
    b && (d = y.tickCoord - t * (p / 2 + o), c[s - 1] = Le(Le({}, y), {}, {
      isShow: !0
    }));
  }
  for (var O = l ? s - 1 : s, S = function(w) {
    var M = c[w], j, A = function() {
      return j === void 0 && (j = n(M, w)), j;
    };
    if (w === 0) {
      var E = t * (M.coordinate - t * A() / 2 - h);
      c[w] = M = Le(Le({}, M), {}, {
        tickCoord: E < 0 ? M.coordinate - E * t : M.coordinate
      });
    } else
      c[w] = M = Le(Le({}, M), {}, {
        tickCoord: M.coordinate
      });
    var D = Os(t, M.tickCoord, A, h, d);
    D && (h = M.tickCoord + t * (A() / 2 + o), c[w] = Le(Le({}, M), {}, {
      isShow: !0
    }));
  }, x = 0; x < O; x++)
    S(x);
  return c;
}
function a1(t, e, n) {
  var r = t.tick, o = t.ticks, l = t.viewBox, c = t.minTickGap, s = t.orientation, h = t.interval, d = t.tickFormatter, y = t.unit, p = t.angle;
  if (!o || !o.length || !r)
    return [];
  if (st(h) || ii.isSsr)
    return eI(o, typeof h == "number" && st(h) ? h : 0);
  var g = [], b = s === "top" || s === "bottom" ? "width" : "height", O = y && b === "width" ? Qu(y, {
    fontSize: e,
    letterSpacing: n
  }) : {
    width: 0,
    height: 0
  }, S = function(M, j) {
    var A = At(d) ? d(M.value, j) : M.value;
    return b === "width" ? J7(Qu(A, {
      fontSize: e,
      letterSpacing: n
    }), O, p) : Qu(A, {
      fontSize: e,
      letterSpacing: n
    })[b];
  }, x = o.length >= 2 ? Hn(o[1].coordinate - o[0].coordinate) : 1, T = tI(l, x, b);
  return h === "equidistantPreserveStart" ? nI(x, T, S, o, c) : (h === "preserveStart" || h === "preserveStartEnd" ? g = uI(x, T, S, o, c, h === "preserveStartEnd") : g = oI(x, T, S, o, c), g.filter(function(w) {
    return w.isShow;
  }));
}
var lI = ["viewBox"], cI = ["viewBox"], fI = ["ticks"];
function To(t) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, To(t);
}
function to() {
  return to = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, to.apply(this, arguments);
}
function NM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? NM(Object(n), !0).forEach(function(r) {
      i1(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : NM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ag(t, e) {
  if (t == null) return {};
  var n = sI(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function sI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function hI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function RM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, VD(r.key), r);
  }
}
function dI(t, e, n) {
  return e && RM(t.prototype, e), n && RM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function vI(t, e, n) {
  return e = As(e), pI(t, KD() ? Reflect.construct(e, n || [], As(t).constructor) : e.apply(t, n));
}
function pI(t, e) {
  if (e && (To(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yI(t);
}
function yI(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function KD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KD = function() {
    return !!t;
  })();
}
function As(t) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, As(t);
}
function mI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && $b(t, e);
}
function $b(t, e) {
  return $b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, $b(t, e);
}
function i1(t, e, n) {
  return e = VD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function VD(t) {
  var e = gI(t, "string");
  return To(e) == "symbol" ? e : e + "";
}
function gI(t, e) {
  if (To(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (To(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Uo = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return hI(this, e), r = vI(this, e, [n]), r.state = {
      fontSize: "",
      letterSpacing: ""
    }, r;
  }
  return mI(e, t), dI(e, [{
    key: "shouldComponentUpdate",
    value: function(r, o) {
      var l = r.viewBox, c = Ag(r, lI), s = this.props, h = s.viewBox, d = Ag(s, cI);
      return !no(l, h) || !no(c, d) || !no(o, this.state);
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
      var o = this.props, l = o.x, c = o.y, s = o.width, h = o.height, d = o.orientation, y = o.tickSize, p = o.mirror, g = o.tickMargin, b, O, S, x, T, w, M = p ? -1 : 1, j = r.tickSize || y, A = st(r.tickCoord) ? r.tickCoord : r.coordinate;
      switch (d) {
        case "top":
          b = O = r.coordinate, x = c + +!p * h, S = x - M * j, w = S - M * g, T = A;
          break;
        case "left":
          S = x = r.coordinate, O = l + +!p * s, b = O - M * j, T = b - M * g, w = A;
          break;
        case "right":
          S = x = r.coordinate, O = l + +p * s, b = O + M * j, T = b + M * g, w = A;
          break;
        default:
          b = O = r.coordinate, x = c + +p * h, S = x + M * j, w = S + M * g, T = A;
          break;
      }
      return {
        line: {
          x1: b,
          y1: S,
          x2: O,
          y2: x
        },
        tick: {
          x: T,
          y: w
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
      var r = this.props, o = r.x, l = r.y, c = r.width, s = r.height, h = r.orientation, d = r.mirror, y = r.axisLine, p = xe(xe(xe({}, Et(this.props, !1)), Et(y, !1)), {}, {
        fill: "none"
      });
      if (h === "top" || h === "bottom") {
        var g = +(h === "top" && !d || h === "bottom" && d);
        p = xe(xe({}, p), {}, {
          x1: o,
          y1: l + g * s,
          x2: o + c,
          y2: l + g * s
        });
      } else {
        var b = +(h === "left" && !d || h === "right" && d);
        p = xe(xe({}, p), {}, {
          x1: o + b * c,
          y1: l,
          x2: o + b * c,
          y2: l + s
        });
      }
      return /* @__PURE__ */ B.createElement("line", to({}, p, {
        className: qt("recharts-cartesian-axis-line", jn(y, "className"))
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
        var c = this, s = this.props, h = s.tickLine, d = s.stroke, y = s.tick, p = s.tickFormatter, g = s.unit, b = a1(xe(xe({}, this.props), {}, {
          ticks: r
        }), o, l), O = this.getTickTextAnchor(), S = this.getTickVerticalAnchor(), x = Et(this.props, !1), T = Et(y, !1), w = xe(xe({}, x), {}, {
          fill: "none"
        }, Et(h, !1)), M = b.map(function(j, A) {
          var E = c.getTickLineCoord(j), D = E.line, R = E.tick, z = xe(xe(xe(xe({
            textAnchor: O,
            verticalAnchor: S
          }, x), {}, {
            stroke: "none",
            fill: d
          }, T), R), {}, {
            index: A,
            payload: j,
            visibleTicksCount: b.length,
            tickFormatter: p
          });
          return /* @__PURE__ */ B.createElement(Jt, to({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(j.value, "-").concat(j.coordinate, "-").concat(j.tickCoord)
          }, Pf(c.props, j, A)), h && /* @__PURE__ */ B.createElement("line", to({}, w, D, {
            className: qt("recharts-cartesian-axis-tick-line", jn(h, "className"))
          })), y && e.renderTickItem(y, z, "".concat(At(p) ? p(j.value, A) : j.value).concat(g || "")));
        });
        return /* @__PURE__ */ B.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, M);
      }
    )
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, l = o.axisLine, c = o.width, s = o.height, h = o.ticksGenerator, d = o.className, y = o.hide;
      if (y)
        return null;
      var p = this.props, g = p.ticks, b = Ag(p, fI), O = g;
      return At(h) && (O = g && g.length > 0 ? h(this.props) : h(b)), c <= 0 || s <= 0 || !O || !O.length ? null : /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-cartesian-axis", d),
        ref: function(x) {
          r.layerReference = x;
        }
      }, l && this.renderAxisLine(), this.renderTicks(O, this.state.fontSize, this.state.letterSpacing), ke.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, o, l) {
      var c, s = qt(o.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ B.isValidElement(r) ? c = /* @__PURE__ */ B.cloneElement(r, xe(xe({}, o), {}, {
        className: s
      })) : At(r) ? c = r(xe(xe({}, o), {}, {
        className: s
      })) : c = /* @__PURE__ */ B.createElement(If, to({}, o, {
        className: "recharts-cartesian-axis-tick-value"
      }), l), c;
    }
  }]);
})(rt.Component);
i1(Uo, "displayName", "CartesianAxis");
i1(Uo, "defaultProps", {
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
var bI = ["x1", "y1", "x2", "y2", "key"], xI = ["offset"];
function ri(t) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ri(t);
}
function qM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qM(Object(n), !0).forEach(function(r) {
      SI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function SI(t, e, n) {
  return e = _I(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function _I(t) {
  var e = OI(t, "string");
  return ri(e) == "symbol" ? e : e + "";
}
function OI(t, e) {
  if (ri(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ri(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Va.apply(this, arguments);
}
function zM(t, e) {
  if (t == null) return {};
  var n = AI(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function AI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var wI = function(e) {
  var n = e.fill;
  if (!n || n === "none")
    return null;
  var r = e.fillOpacity, o = e.x, l = e.y, c = e.width, s = e.height, h = e.ry;
  return /* @__PURE__ */ B.createElement("rect", {
    x: o,
    y: l,
    ry: h,
    width: c,
    height: s,
    stroke: "none",
    fill: n,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function FD(t, e) {
  var n;
  if (/* @__PURE__ */ B.isValidElement(t))
    n = /* @__PURE__ */ B.cloneElement(t, e);
  else if (At(t))
    n = t(e);
  else {
    var r = e.x1, o = e.y1, l = e.x2, c = e.y2, s = e.key, h = zM(e, bI), d = Et(h, !1);
    d.offset;
    var y = zM(d, xI);
    n = /* @__PURE__ */ B.createElement("line", Va({}, y, {
      x1: r,
      y1: o,
      x2: l,
      y2: c,
      fill: "none",
      key: s
    }));
  }
  return n;
}
function TI(t) {
  var e = t.x, n = t.width, r = t.horizontal, o = r === void 0 ? !0 : r, l = t.horizontalPoints;
  if (!o || !l || !l.length)
    return null;
  var c = l.map(function(s, h) {
    var d = Ue(Ue({}, t), {}, {
      x1: e,
      y1: s,
      x2: e + n,
      y2: s,
      key: "line-".concat(h),
      index: h
    });
    return FD(o, d);
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function EI(t) {
  var e = t.y, n = t.height, r = t.vertical, o = r === void 0 ? !0 : r, l = t.verticalPoints;
  if (!o || !l || !l.length)
    return null;
  var c = l.map(function(s, h) {
    var d = Ue(Ue({}, t), {}, {
      x1: s,
      y1: e,
      x2: s,
      y2: e + n,
      key: "line-".concat(h),
      index: h
    });
    return FD(o, d);
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function MI(t) {
  var e = t.horizontalFill, n = t.fillOpacity, r = t.x, o = t.y, l = t.width, c = t.height, s = t.horizontalPoints, h = t.horizontal, d = h === void 0 ? !0 : h;
  if (!d || !e || !e.length)
    return null;
  var y = s.map(function(g) {
    return Math.round(g + o - o);
  }).sort(function(g, b) {
    return g - b;
  });
  o !== y[0] && y.unshift(0);
  var p = y.map(function(g, b) {
    var O = !y[b + 1], S = O ? o + c - g : y[b + 1] - g;
    if (S <= 0)
      return null;
    var x = b % e.length;
    return /* @__PURE__ */ B.createElement("rect", {
      key: "react-".concat(b),
      y: g,
      x: r,
      height: S,
      width: l,
      stroke: "none",
      fill: e[x],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, p);
}
function jI(t) {
  var e = t.vertical, n = e === void 0 ? !0 : e, r = t.verticalFill, o = t.fillOpacity, l = t.x, c = t.y, s = t.width, h = t.height, d = t.verticalPoints;
  if (!n || !r || !r.length)
    return null;
  var y = d.map(function(g) {
    return Math.round(g + l - l);
  }).sort(function(g, b) {
    return g - b;
  });
  l !== y[0] && y.unshift(0);
  var p = y.map(function(g, b) {
    var O = !y[b + 1], S = O ? l + s - g : y[b + 1] - g;
    if (S <= 0)
      return null;
    var x = b % r.length;
    return /* @__PURE__ */ B.createElement("rect", {
      key: "react-".concat(b),
      x: g,
      y: c,
      width: S,
      height: h,
      stroke: "none",
      fill: r[x],
      fillOpacity: o,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, p);
}
var CI = function(e, n) {
  var r = e.xAxis, o = e.width, l = e.height, c = e.offset;
  return cD(a1(Ue(Ue(Ue({}, Uo.defaultProps), r), {}, {
    ticks: Er(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: o,
      height: l
    }
  })), c.left, c.left + c.width, n);
}, DI = function(e, n) {
  var r = e.yAxis, o = e.width, l = e.height, c = e.offset;
  return cD(a1(Ue(Ue(Ue({}, Uo.defaultProps), r), {}, {
    ticks: Er(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: o,
      height: l
    }
  })), c.top, c.top + c.height, n);
}, Qi = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Fu(t) {
  var e, n, r, o, l, c, s = t1(), h = e1(), d = g7(), y = Ue(Ue({}, t), {}, {
    stroke: (e = t.stroke) !== null && e !== void 0 ? e : Qi.stroke,
    fill: (n = t.fill) !== null && n !== void 0 ? n : Qi.fill,
    horizontal: (r = t.horizontal) !== null && r !== void 0 ? r : Qi.horizontal,
    horizontalFill: (o = t.horizontalFill) !== null && o !== void 0 ? o : Qi.horizontalFill,
    vertical: (l = t.vertical) !== null && l !== void 0 ? l : Qi.vertical,
    verticalFill: (c = t.verticalFill) !== null && c !== void 0 ? c : Qi.verticalFill,
    x: st(t.x) ? t.x : d.left,
    y: st(t.y) ? t.y : d.top,
    width: st(t.width) ? t.width : d.width,
    height: st(t.height) ? t.height : d.height
  }), p = y.x, g = y.y, b = y.width, O = y.height, S = y.syncWithTicks, x = y.horizontalValues, T = y.verticalValues, w = p7(), M = y7();
  if (!st(b) || b <= 0 || !st(O) || O <= 0 || !st(p) || p !== +p || !st(g) || g !== +g)
    return null;
  var j = y.verticalCoordinatesGenerator || CI, A = y.horizontalCoordinatesGenerator || DI, E = y.horizontalPoints, D = y.verticalPoints;
  if ((!E || !E.length) && At(A)) {
    var R = x && x.length, z = A({
      yAxis: M ? Ue(Ue({}, M), {}, {
        ticks: R ? x : M.ticks
      }) : void 0,
      width: s,
      height: h,
      offset: d
    }, R ? !0 : S);
    Dr(Array.isArray(z), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ri(z), "]")), Array.isArray(z) && (E = z);
  }
  if ((!D || !D.length) && At(j)) {
    var F = T && T.length, k = j({
      xAxis: w ? Ue(Ue({}, w), {}, {
        ticks: F ? T : w.ticks
      }) : void 0,
      width: s,
      height: h,
      offset: d
    }, F ? !0 : S);
    Dr(Array.isArray(k), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ri(k), "]")), Array.isArray(k) && (D = k);
  }
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ B.createElement(wI, {
    fill: y.fill,
    fillOpacity: y.fillOpacity,
    x: y.x,
    y: y.y,
    width: y.width,
    height: y.height,
    ry: y.ry
  }), /* @__PURE__ */ B.createElement(TI, Va({}, y, {
    offset: d,
    horizontalPoints: E,
    xAxis: w,
    yAxis: M
  })), /* @__PURE__ */ B.createElement(EI, Va({}, y, {
    offset: d,
    verticalPoints: D,
    xAxis: w,
    yAxis: M
  })), /* @__PURE__ */ B.createElement(MI, Va({}, y, {
    horizontalPoints: E
  })), /* @__PURE__ */ B.createElement(jI, Va({}, y, {
    verticalPoints: D
  })));
}
Fu.displayName = "CartesianGrid";
var PI = ["type", "layout", "connectNulls", "ref"], NI = ["key"];
function Eo(t) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Eo(t);
}
function $M(t, e) {
  if (t == null) return {};
  var n = RI(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function RI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function el() {
  return el = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, el.apply(this, arguments);
}
function BM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? BM(Object(n), !0).forEach(function(r) {
      kn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : BM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Wi(t) {
  return BI(t) || $I(t) || zI(t) || qI();
}
function qI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zI(t, e) {
  if (t) {
    if (typeof t == "string") return Bb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bb(t, e);
  }
}
function $I(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function BI(t) {
  if (Array.isArray(t)) return Bb(t);
}
function Bb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function LI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function LM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, QD(r.key), r);
  }
}
function kI(t, e, n) {
  return e && LM(t.prototype, e), n && LM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function UI(t, e, n) {
  return e = ws(e), HI(t, ZD() ? Reflect.construct(e, n || [], ws(t).constructor) : e.apply(t, n));
}
function HI(t, e) {
  if (e && (Eo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return II(t);
}
function II(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ZD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZD = function() {
    return !!t;
  })();
}
function ws(t) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ws(t);
}
function GI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Lb(t, e);
}
function Lb(t, e) {
  return Lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Lb(t, e);
}
function kn(t, e, n) {
  return e = QD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function QD(t) {
  var e = YI(t, "string");
  return Eo(e) == "symbol" ? e : e + "";
}
function YI(t, e) {
  if (Eo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Eo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Wa = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    LI(this, e);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = UI(this, e, [].concat(o)), kn(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), kn(n, "generateSimpleStrokeDasharray", function(c, s) {
      return "".concat(s, "px ").concat(c - s, "px");
    }), kn(n, "getStrokeDasharray", function(c, s, h) {
      var d = h.reduce(function(T, w) {
        return T + w;
      });
      if (!d)
        return n.generateSimpleStrokeDasharray(s, c);
      for (var y = Math.floor(c / d), p = c % d, g = s - c, b = [], O = 0, S = 0; O < h.length; S += h[O], ++O)
        if (S + h[O] > p) {
          b = [].concat(Wi(h.slice(0, O)), [p - S]);
          break;
        }
      var x = b.length % 2 === 0 ? [0, g] : [g];
      return [].concat(Wi(e.repeat(h, y)), Wi(b), x).map(function(T) {
        return "".concat(T, "px");
      }).join(", ");
    }), kn(n, "id", zo("recharts-line-")), kn(n, "pathRef", function(c) {
      n.mainCurve = c;
    }), kn(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      }), n.props.onAnimationEnd && n.props.onAnimationEnd();
    }), kn(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      }), n.props.onAnimationStart && n.props.onAnimationStart();
    }), n;
  }
  return GI(e, t), kI(e, [{
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
      var l = this.props, c = l.points, s = l.xAxis, h = l.yAxis, d = l.layout, y = l.children, p = Cn(y, Gl);
      if (!p)
        return null;
      var g = function(S, x) {
        return {
          x: S.x,
          y: S.y,
          value: S.value,
          errorVal: Ge(S.payload, x)
        };
      }, b = {
        clipPath: r ? "url(#clipPath-".concat(o, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, b, p.map(function(O) {
        return /* @__PURE__ */ B.cloneElement(O, {
          key: "bar-".concat(O.props.dataKey),
          data: c,
          xAxis: s,
          yAxis: h,
          layout: d,
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
      var s = this.props, h = s.dot, d = s.points, y = s.dataKey, p = Et(this.props, !1), g = Et(h, !0), b = d.map(function(S, x) {
        var T = fn(fn(fn({
          key: "dot-".concat(x),
          r: 3
        }, p), g), {}, {
          index: x,
          cx: S.x,
          cy: S.y,
          value: S.value,
          dataKey: y,
          payload: S.payload,
          points: d
        });
        return e.renderDotItem(h, T);
      }), O = {
        clipPath: r ? "url(#clipPath-".concat(o ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, el({
        className: "recharts-line-dots",
        key: "dots"
      }, O), b);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, o, l, c) {
      var s = this.props, h = s.type, d = s.layout, y = s.connectNulls;
      s.ref;
      var p = $M(s, PI), g = fn(fn(fn({}, Et(p, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: o ? "url(#clipPath-".concat(l, ")") : null,
        points: r
      }, c), {}, {
        type: h,
        layout: d,
        connectNulls: y
      });
      return /* @__PURE__ */ B.createElement(oo, el({}, g, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, o) {
      var l = this, c = this.props, s = c.points, h = c.strokeDasharray, d = c.isAnimationActive, y = c.animationBegin, p = c.animationDuration, g = c.animationEasing, b = c.animationId, O = c.animateNewValues, S = c.width, x = c.height, T = this.state, w = T.prevPoints, M = T.totalLength;
      return /* @__PURE__ */ B.createElement(nr, {
        begin: y,
        duration: p,
        isActive: d,
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
        var A = j.t;
        if (w) {
          var E = w.length / s.length, D = s.map(function($, K) {
            var Z = Math.floor(K * E);
            if (w[Z]) {
              var V = w[Z], N = Re(V.x, $.x), I = Re(V.y, $.y);
              return fn(fn({}, $), {}, {
                x: N(A),
                y: I(A)
              });
            }
            if (O) {
              var W = Re(S * 2, $.x), ot = Re(x / 2, $.y);
              return fn(fn({}, $), {}, {
                x: W(A),
                y: ot(A)
              });
            }
            return fn(fn({}, $), {}, {
              x: $.x,
              y: $.y
            });
          });
          return l.renderCurveStatically(D, r, o);
        }
        var R = Re(0, M), z = R(A), F;
        if (h) {
          var k = "".concat(h).split(/[,\s]+/gim).map(function($) {
            return parseFloat($);
          });
          F = l.getStrokeDasharray(z, M, k);
        } else
          F = l.generateSimpleStrokeDasharray(M, z);
        return l.renderCurveStatically(s, r, o, {
          strokeDasharray: F
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(r, o) {
      var l = this.props, c = l.points, s = l.isAnimationActive, h = this.state, d = h.prevPoints, y = h.totalLength;
      return s && c && c.length && (!d && y > 0 || !mo(d, c)) ? this.renderCurveWithAnimation(r, o) : this.renderCurveStatically(c, r, o);
    }
  }, {
    key: "render",
    value: function() {
      var r, o = this.props, l = o.hide, c = o.dot, s = o.points, h = o.className, d = o.xAxis, y = o.yAxis, p = o.top, g = o.left, b = o.width, O = o.height, S = o.isAnimationActive, x = o.id;
      if (l || !s || !s.length)
        return null;
      var T = this.state.isAnimationFinished, w = s.length === 1, M = qt("recharts-line", h), j = d && d.allowDataOverflow, A = y && y.allowDataOverflow, E = j || A, D = Mt(x) ? this.id : x, R = (r = Et(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, z = R.r, F = z === void 0 ? 3 : z, k = R.strokeWidth, $ = k === void 0 ? 2 : k, K = dj(c) ? c : {}, Z = K.clipDot, V = Z === void 0 ? !0 : Z, N = F * 2 + $;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M
      }, j || A ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: j ? g : g - b / 2,
        y: A ? p : p - O / 2,
        width: j ? b : b * 2,
        height: A ? O : O * 2
      })), !V && /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-dots-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: g - N / 2,
        y: p - N / 2,
        width: b + N,
        height: O + N
      }))) : null, !w && this.renderCurve(E, D), this.renderErrorBar(E, D), (w || c) && this.renderDots(E, V, D), (!S || T) && Nr.renderCallByParent(this.props, s));
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
      for (var l = r.length % 2 !== 0 ? [].concat(Wi(r), [0]) : r, c = [], s = 0; s < o; ++s)
        c = [].concat(Wi(c), Wi(l));
      return c;
    }
  }, {
    key: "renderDotItem",
    value: function(r, o) {
      var l;
      if (/* @__PURE__ */ B.isValidElement(r))
        l = /* @__PURE__ */ B.cloneElement(r, o);
      else if (At(r))
        l = r(o);
      else {
        var c = o.key, s = $M(o, NI), h = qt("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        l = /* @__PURE__ */ B.createElement(Qs, el({
          key: c
        }, s, {
          className: h
        }));
      }
      return l;
    }
  }]);
})(rt.PureComponent);
kn(Wa, "displayName", "Line");
kn(Wa, "defaultProps", {
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
  isAnimationActive: !ii.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
kn(Wa, "getComposedData", function(t) {
  var e = t.props, n = t.xAxis, r = t.yAxis, o = t.xAxisTicks, l = t.yAxisTicks, c = t.dataKey, s = t.bandSize, h = t.displayedData, d = t.offset, y = e.layout, p = h.map(function(g, b) {
    var O = Ge(g, c);
    return y === "horizontal" ? {
      x: as({
        axis: n,
        ticks: o,
        bandSize: s,
        entry: g,
        index: b
      }),
      y: Mt(O) ? null : r.scale(O),
      value: O,
      payload: g
    } : {
      x: Mt(O) ? null : n.scale(O),
      y: as({
        axis: r,
        ticks: l,
        bandSize: s,
        entry: g,
        index: b
      }),
      value: O,
      payload: g
    };
  });
  return fn({
    points: p,
    layout: y
  }, d);
});
var XI = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], KI = ["key"], WD;
function Mo(t) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mo(t);
}
function JD(t, e) {
  if (t == null) return {};
  var n = VI(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function VI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Fa.apply(this, arguments);
}
function kM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function da(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kM(Object(n), !0).forEach(function(r) {
      Qn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function FI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function UM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, eP(r.key), r);
  }
}
function ZI(t, e, n) {
  return e && UM(t.prototype, e), n && UM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function QI(t, e, n) {
  return e = Ts(e), WI(t, tP() ? Reflect.construct(e, n || [], Ts(t).constructor) : e.apply(t, n));
}
function WI(t, e) {
  if (e && (Mo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JI(t);
}
function JI(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tP = function() {
    return !!t;
  })();
}
function Ts(t) {
  return Ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ts(t);
}
function tG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && kb(t, e);
}
function kb(t, e) {
  return kb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, kb(t, e);
}
function Qn(t, e, n) {
  return e = eP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eP(t) {
  var e = eG(t, "string");
  return Mo(e) == "symbol" ? e : e + "";
}
function eG(t, e) {
  if (Mo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Mo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var tr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    FI(this, e);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return n = QI(this, e, [].concat(o)), Qn(n, "state", {
      isAnimationFinished: !0
    }), Qn(n, "id", zo("recharts-area-")), Qn(n, "handleAnimationEnd", function() {
      var c = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), At(c) && c();
    }), Qn(n, "handleAnimationStart", function() {
      var c = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), At(c) && c();
    }), n;
  }
  return tG(e, t), ZI(e, [{
    key: "renderDots",
    value: function(r, o, l) {
      var c = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (c && !s)
        return null;
      var h = this.props, d = h.dot, y = h.points, p = h.dataKey, g = Et(this.props, !1), b = Et(d, !0), O = y.map(function(x, T) {
        var w = da(da(da({
          key: "dot-".concat(T),
          r: 3
        }, g), b), {}, {
          index: T,
          cx: x.x,
          cy: x.y,
          dataKey: p,
          value: x.value,
          payload: x.payload,
          points: y
        });
        return e.renderDotItem(d, w);
      }), S = {
        clipPath: r ? "url(#clipPath-".concat(o ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, Fa({
        className: "recharts-area-dots"
      }, S), O);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(r) {
      var o = this.props, l = o.baseLine, c = o.points, s = o.strokeWidth, h = c[0].x, d = c[c.length - 1].x, y = r * Math.abs(h - d), p = ya(c.map(function(g) {
        return g.y || 0;
      }));
      return st(l) && typeof l == "number" ? p = Math.max(l, p) : l && Array.isArray(l) && l.length && (p = Math.max(ya(l.map(function(g) {
        return g.y || 0;
      })), p)), st(p) ? /* @__PURE__ */ B.createElement("rect", {
        x: h < d ? h : h - y,
        y: 0,
        width: y,
        height: Math.floor(p + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(r) {
      var o = this.props, l = o.baseLine, c = o.points, s = o.strokeWidth, h = c[0].y, d = c[c.length - 1].y, y = r * Math.abs(h - d), p = ya(c.map(function(g) {
        return g.x || 0;
      }));
      return st(l) && typeof l == "number" ? p = Math.max(l, p) : l && Array.isArray(l) && l.length && (p = Math.max(ya(l.map(function(g) {
        return g.x || 0;
      })), p)), st(p) ? /* @__PURE__ */ B.createElement("rect", {
        x: 0,
        y: h < d ? h : h - y,
        width: p + (s ? parseInt("".concat(s), 10) : 1),
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
      var s = this.props, h = s.layout, d = s.type, y = s.stroke, p = s.connectNulls, g = s.isRange;
      s.ref;
      var b = JD(s, XI);
      return /* @__PURE__ */ B.createElement(Jt, {
        clipPath: l ? "url(#clipPath-".concat(c, ")") : null
      }, /* @__PURE__ */ B.createElement(oo, Fa({}, Et(b, !0), {
        points: r,
        connectNulls: p,
        type: d,
        baseLine: o,
        layout: h,
        stroke: "none",
        className: "recharts-area-area"
      })), y !== "none" && /* @__PURE__ */ B.createElement(oo, Fa({}, Et(this.props, !1), {
        className: "recharts-area-curve",
        layout: h,
        type: d,
        connectNulls: p,
        fill: "none",
        points: r
      })), y !== "none" && g && /* @__PURE__ */ B.createElement(oo, Fa({}, Et(this.props, !1), {
        className: "recharts-area-curve",
        layout: h,
        type: d,
        connectNulls: p,
        fill: "none",
        points: o
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(r, o) {
      var l = this, c = this.props, s = c.points, h = c.baseLine, d = c.isAnimationActive, y = c.animationBegin, p = c.animationDuration, g = c.animationEasing, b = c.animationId, O = this.state, S = O.prevPoints, x = O.prevBaseLine;
      return /* @__PURE__ */ B.createElement(nr, {
        begin: y,
        duration: p,
        isActive: d,
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
      }, function(T) {
        var w = T.t;
        if (S) {
          var M = S.length / s.length, j = s.map(function(R, z) {
            var F = Math.floor(z * M);
            if (S[F]) {
              var k = S[F], $ = Re(k.x, R.x), K = Re(k.y, R.y);
              return da(da({}, R), {}, {
                x: $(w),
                y: K(w)
              });
            }
            return R;
          }), A;
          if (st(h) && typeof h == "number") {
            var E = Re(x, h);
            A = E(w);
          } else if (Mt(h) || qo(h)) {
            var D = Re(x, 0);
            A = D(w);
          } else
            A = h.map(function(R, z) {
              var F = Math.floor(z * M);
              if (x[F]) {
                var k = x[F], $ = Re(k.x, R.x), K = Re(k.y, R.y);
                return da(da({}, R), {}, {
                  x: $(w),
                  y: K(w)
                });
              }
              return R;
            });
          return l.renderAreaStatically(j, A, r, o);
        }
        return /* @__PURE__ */ B.createElement(Jt, null, /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
          id: "animationClipPath-".concat(o)
        }, l.renderClipRect(w))), /* @__PURE__ */ B.createElement(Jt, {
          clipPath: "url(#animationClipPath-".concat(o, ")")
        }, l.renderAreaStatically(s, h, r, o)));
      });
    }
  }, {
    key: "renderArea",
    value: function(r, o) {
      var l = this.props, c = l.points, s = l.baseLine, h = l.isAnimationActive, d = this.state, y = d.prevPoints, p = d.prevBaseLine, g = d.totalLength;
      return h && c && c.length && (!y && g > 0 || !mo(y, c) || !mo(p, s)) ? this.renderAreaWithAnimation(r, o) : this.renderAreaStatically(c, s, r, o);
    }
  }, {
    key: "render",
    value: function() {
      var r, o = this.props, l = o.hide, c = o.dot, s = o.points, h = o.className, d = o.top, y = o.left, p = o.xAxis, g = o.yAxis, b = o.width, O = o.height, S = o.isAnimationActive, x = o.id;
      if (l || !s || !s.length)
        return null;
      var T = this.state.isAnimationFinished, w = s.length === 1, M = qt("recharts-area", h), j = p && p.allowDataOverflow, A = g && g.allowDataOverflow, E = j || A, D = Mt(x) ? this.id : x, R = (r = Et(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, z = R.r, F = z === void 0 ? 3 : z, k = R.strokeWidth, $ = k === void 0 ? 2 : k, K = dj(c) ? c : {}, Z = K.clipDot, V = Z === void 0 ? !0 : Z, N = F * 2 + $;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M
      }, j || A ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: j ? y : y - b / 2,
        y: A ? d : d - O / 2,
        width: j ? b : b * 2,
        height: A ? O : O * 2
      })), !V && /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-dots-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: y - N / 2,
        y: d - N / 2,
        width: b + N,
        height: O + N
      }))) : null, w ? null : this.renderArea(E, D), (c || w) && this.renderDots(E, V, D), (!S || T) && Nr.renderCallByParent(this.props, s));
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
})(rt.PureComponent);
WD = tr;
Qn(tr, "displayName", "Area");
Qn(tr, "defaultProps", {
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
  isAnimationActive: !ii.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Qn(tr, "getBaseValue", function(t, e, n, r) {
  var o = t.layout, l = t.baseValue, c = e.props.baseValue, s = c ?? l;
  if (st(s) && typeof s == "number")
    return s;
  var h = o === "horizontal" ? r : n, d = h.scale.domain();
  if (h.type === "number") {
    var y = Math.max(d[0], d[1]), p = Math.min(d[0], d[1]);
    return s === "dataMin" ? p : s === "dataMax" || y < 0 ? y : Math.max(Math.min(d[0], d[1]), 0);
  }
  return s === "dataMin" ? d[0] : s === "dataMax" ? d[1] : d[0];
});
Qn(tr, "getComposedData", function(t) {
  var e = t.props, n = t.item, r = t.xAxis, o = t.yAxis, l = t.xAxisTicks, c = t.yAxisTicks, s = t.bandSize, h = t.dataKey, d = t.stackedData, y = t.dataStartIndex, p = t.displayedData, g = t.offset, b = e.layout, O = d && d.length, S = WD.getBaseValue(e, n, r, o), x = b === "horizontal", T = !1, w = p.map(function(j, A) {
    var E;
    O ? E = d[y + A] : (E = Ge(j, h), Array.isArray(E) ? T = !0 : E = [S, E]);
    var D = E[1] == null || O && Ge(j, h) == null;
    return x ? {
      x: as({
        axis: r,
        ticks: l,
        bandSize: s,
        entry: j,
        index: A
      }),
      y: D ? null : o.scale(E[1]),
      value: E,
      payload: j
    } : {
      x: D ? null : r.scale(E[1]),
      y: as({
        axis: o,
        ticks: c,
        bandSize: s,
        entry: j,
        index: A
      }),
      value: E,
      payload: j
    };
  }), M;
  return O || T ? M = w.map(function(j) {
    var A = Array.isArray(j.value) ? j.value[0] : null;
    return x ? {
      x: j.x,
      y: A != null && j.y != null ? o.scale(A) : null
    } : {
      x: A != null ? r.scale(A) : null,
      y: j.y
    };
  }) : M = x ? o.scale(S) : r.scale(S), da({
    points: w,
    baseLine: M,
    layout: b,
    isRange: T
  }, g);
});
Qn(tr, "renderDotItem", function(t, e) {
  var n;
  if (/* @__PURE__ */ B.isValidElement(t))
    n = /* @__PURE__ */ B.cloneElement(t, e);
  else if (At(t))
    n = t(e);
  else {
    var r = qt("recharts-area-dot", typeof t != "boolean" ? t.className : ""), o = e.key, l = JD(e, KI);
    n = /* @__PURE__ */ B.createElement(Qs, Fa({}, l, {
      key: o,
      className: r
    }));
  }
  return n;
});
function jo(t) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jo(t);
}
function nG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, aP(r.key), r);
  }
}
function aG(t, e, n) {
  return e && rG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function iG(t, e, n) {
  return e = Es(e), oG(t, nP() ? Reflect.construct(e, n || [], Es(t).constructor) : e.apply(t, n));
}
function oG(t, e) {
  if (e && (jo(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return uG(t);
}
function uG(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function nP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nP = function() {
    return !!t;
  })();
}
function Es(t) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Es(t);
}
function lG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ub(t, e);
}
function Ub(t, e) {
  return Ub = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ub(t, e);
}
function rP(t, e, n) {
  return e = aP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function aP(t) {
  var e = cG(t, "string");
  return jo(e) == "symbol" ? e : e + "";
}
function cG(t, e) {
  if (jo(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Hb() {
  return Hb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Hb.apply(this, arguments);
}
function fG(t) {
  var e = t.xAxisId, n = t1(), r = e1(), o = BD(e);
  return o == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ rt.createElement(Uo, Hb({}, o, {
      className: qt("recharts-".concat(o.axisType, " ").concat(o.axisType), o.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: r
      },
      ticksGenerator: function(c) {
        return Er(c, !0);
      }
    }))
  );
}
var Mr = /* @__PURE__ */ (function(t) {
  function e() {
    return nG(this, e), iG(this, e, arguments);
  }
  return lG(e, t), aG(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ rt.createElement(fG, this.props);
    }
  }]);
})(rt.Component);
rP(Mr, "displayName", "XAxis");
rP(Mr, "defaultProps", {
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
function Co(t) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Co(t);
}
function sG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, uP(r.key), r);
  }
}
function dG(t, e, n) {
  return e && hG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function vG(t, e, n) {
  return e = Ms(e), pG(t, iP() ? Reflect.construct(e, n || [], Ms(t).constructor) : e.apply(t, n));
}
function pG(t, e) {
  if (e && (Co(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yG(t);
}
function yG(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function iP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iP = function() {
    return !!t;
  })();
}
function Ms(t) {
  return Ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ms(t);
}
function mG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ib(t, e);
}
function Ib(t, e) {
  return Ib = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ib(t, e);
}
function oP(t, e, n) {
  return e = uP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function uP(t) {
  var e = gG(t, "string");
  return Co(e) == "symbol" ? e : e + "";
}
function gG(t, e) {
  if (Co(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Co(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Gb() {
  return Gb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Gb.apply(this, arguments);
}
var bG = function(e) {
  var n = e.yAxisId, r = t1(), o = e1(), l = LD(n);
  return l == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ rt.createElement(Uo, Gb({}, l, {
      className: qt("recharts-".concat(l.axisType, " ").concat(l.axisType), l.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: o
      },
      ticksGenerator: function(s) {
        return Er(s, !0);
      }
    }))
  );
}, jr = /* @__PURE__ */ (function(t) {
  function e() {
    return sG(this, e), vG(this, e, arguments);
  }
  return mG(e, t), dG(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ rt.createElement(bG, this.props);
    }
  }]);
})(rt.Component);
oP(jr, "displayName", "YAxis");
oP(jr, "defaultProps", {
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
function HM(t) {
  return OG(t) || _G(t) || SG(t) || xG();
}
function xG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SG(t, e) {
  if (t) {
    if (typeof t == "string") return Yb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yb(t, e);
  }
}
function _G(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function OG(t) {
  if (Array.isArray(t)) return Yb(t);
}
function Yb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Xb = function(e, n, r, o, l) {
  var c = Cn(e, r1), s = Cn(e, nh), h = [].concat(HM(c), HM(s)), d = Cn(e, ah), y = "".concat(o, "Id"), p = o[0], g = n;
  if (h.length && (g = h.reduce(function(S, x) {
    if (x.props[y] === r && Jn(x.props, "extendDomain") && st(x.props[p])) {
      var T = x.props[p];
      return [Math.min(S[0], T), Math.max(S[1], T)];
    }
    return S;
  }, g)), d.length) {
    var b = "".concat(p, "1"), O = "".concat(p, "2");
    g = d.reduce(function(S, x) {
      if (x.props[y] === r && Jn(x.props, "extendDomain") && st(x.props[b]) && st(x.props[O])) {
        var T = x.props[b], w = x.props[O];
        return [Math.min(S[0], T, w), Math.max(S[1], T, w)];
      }
      return S;
    }, g);
  }
  return l && l.length && (g = l.reduce(function(S, x) {
    return st(x) ? [Math.min(S[0], x), Math.max(S[1], x)] : S;
  }, g)), g;
}, wg = { exports: {} }, IM;
function AG() {
  return IM || (IM = 1, (function(t) {
    var e = Object.prototype.hasOwnProperty, n = "~";
    function r() {
    }
    Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
    function o(h, d, y) {
      this.fn = h, this.context = d, this.once = y || !1;
    }
    function l(h, d, y, p, g) {
      if (typeof y != "function")
        throw new TypeError("The listener must be a function");
      var b = new o(y, p || h, g), O = n ? n + d : d;
      return h._events[O] ? h._events[O].fn ? h._events[O] = [h._events[O], b] : h._events[O].push(b) : (h._events[O] = b, h._eventsCount++), h;
    }
    function c(h, d) {
      --h._eventsCount === 0 ? h._events = new r() : delete h._events[d];
    }
    function s() {
      this._events = new r(), this._eventsCount = 0;
    }
    s.prototype.eventNames = function() {
      var d = [], y, p;
      if (this._eventsCount === 0) return d;
      for (p in y = this._events)
        e.call(y, p) && d.push(n ? p.slice(1) : p);
      return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(y)) : d;
    }, s.prototype.listeners = function(d) {
      var y = n ? n + d : d, p = this._events[y];
      if (!p) return [];
      if (p.fn) return [p.fn];
      for (var g = 0, b = p.length, O = new Array(b); g < b; g++)
        O[g] = p[g].fn;
      return O;
    }, s.prototype.listenerCount = function(d) {
      var y = n ? n + d : d, p = this._events[y];
      return p ? p.fn ? 1 : p.length : 0;
    }, s.prototype.emit = function(d, y, p, g, b, O) {
      var S = n ? n + d : d;
      if (!this._events[S]) return !1;
      var x = this._events[S], T = arguments.length, w, M;
      if (x.fn) {
        switch (x.once && this.removeListener(d, x.fn, void 0, !0), T) {
          case 1:
            return x.fn.call(x.context), !0;
          case 2:
            return x.fn.call(x.context, y), !0;
          case 3:
            return x.fn.call(x.context, y, p), !0;
          case 4:
            return x.fn.call(x.context, y, p, g), !0;
          case 5:
            return x.fn.call(x.context, y, p, g, b), !0;
          case 6:
            return x.fn.call(x.context, y, p, g, b, O), !0;
        }
        for (M = 1, w = new Array(T - 1); M < T; M++)
          w[M - 1] = arguments[M];
        x.fn.apply(x.context, w);
      } else {
        var j = x.length, A;
        for (M = 0; M < j; M++)
          switch (x[M].once && this.removeListener(d, x[M].fn, void 0, !0), T) {
            case 1:
              x[M].fn.call(x[M].context);
              break;
            case 2:
              x[M].fn.call(x[M].context, y);
              break;
            case 3:
              x[M].fn.call(x[M].context, y, p);
              break;
            case 4:
              x[M].fn.call(x[M].context, y, p, g);
              break;
            default:
              if (!w) for (A = 1, w = new Array(T - 1); A < T; A++)
                w[A - 1] = arguments[A];
              x[M].fn.apply(x[M].context, w);
          }
      }
      return !0;
    }, s.prototype.on = function(d, y, p) {
      return l(this, d, y, p, !1);
    }, s.prototype.once = function(d, y, p) {
      return l(this, d, y, p, !0);
    }, s.prototype.removeListener = function(d, y, p, g) {
      var b = n ? n + d : d;
      if (!this._events[b]) return this;
      if (!y)
        return c(this, b), this;
      var O = this._events[b];
      if (O.fn)
        O.fn === y && (!g || O.once) && (!p || O.context === p) && c(this, b);
      else {
        for (var S = 0, x = [], T = O.length; S < T; S++)
          (O[S].fn !== y || g && !O[S].once || p && O[S].context !== p) && x.push(O[S]);
        x.length ? this._events[b] = x.length === 1 ? x[0] : x : c(this, b);
      }
      return this;
    }, s.prototype.removeAllListeners = function(d) {
      var y;
      return d ? (y = n ? n + d : d, this._events[y] && c(this, y)) : (this._events = new r(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, t.exports = s;
  })(wg)), wg.exports;
}
var wG = AG();
const TG = /* @__PURE__ */ Qt(wG);
var Tg = new TG(), Eg = "recharts.syncMouseEvents";
function zl(t) {
  "@babel/helpers - typeof";
  return zl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zl(t);
}
function EG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function MG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, lP(r.key), r);
  }
}
function jG(t, e, n) {
  return e && MG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Mg(t, e, n) {
  return e = lP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function lP(t) {
  var e = CG(t, "string");
  return zl(e) == "symbol" ? e : e + "";
}
function CG(t, e) {
  if (zl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (zl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var DG = /* @__PURE__ */ (function() {
  function t() {
    EG(this, t), Mg(this, "activeIndex", 0), Mg(this, "coordinateList", []), Mg(this, "layout", "horizontal");
  }
  return jG(t, [{
    key: "setDetails",
    value: function(n) {
      var r, o = n.coordinateList, l = o === void 0 ? null : o, c = n.container, s = c === void 0 ? null : c, h = n.layout, d = h === void 0 ? null : h, y = n.offset, p = y === void 0 ? null : y, g = n.mouseHandlerCallback, b = g === void 0 ? null : g;
      this.coordinateList = (r = l ?? this.coordinateList) !== null && r !== void 0 ? r : [], this.container = s ?? this.container, this.layout = d ?? this.layout, this.offset = p ?? this.offset, this.mouseHandlerCallback = b ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var o = this.container.getBoundingClientRect(), l = o.x, c = o.y, s = o.height, h = this.coordinateList[this.activeIndex].coordinate, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollX) || 0, y = ((r = window) === null || r === void 0 ? void 0 : r.scrollY) || 0, p = l + h + d, g = c + this.offset.top + s / 2 + y;
        this.mouseHandlerCallback({
          pageX: p,
          pageY: g
        });
      }
    }
  }]);
})();
function PG(t, e, n) {
  if (n === "number" && e === !0 && Array.isArray(t)) {
    var r = t == null ? void 0 : t[0], o = t == null ? void 0 : t[1];
    if (r && o && st(r) && st(o))
      return !0;
  }
  return !1;
}
function NG(t, e, n, r) {
  var o = r / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: t === "horizontal" ? e.x - o : n.left + 0.5,
    y: t === "horizontal" ? n.top + 0.5 : e.y - o,
    width: t === "horizontal" ? r : n.width - 1,
    height: t === "horizontal" ? n.height - 1 : r
  };
}
function cP(t) {
  var e = t.cx, n = t.cy, r = t.radius, o = t.startAngle, l = t.endAngle, c = qe(e, n, r, o), s = qe(e, n, r, l);
  return {
    points: [c, s],
    cx: e,
    cy: n,
    radius: r,
    startAngle: o,
    endAngle: l
  };
}
function RG(t, e, n) {
  var r, o, l, c;
  if (t === "horizontal")
    r = e.x, l = r, o = n.top, c = n.top + n.height;
  else if (t === "vertical")
    o = e.y, c = o, r = n.left, l = n.left + n.width;
  else if (e.cx != null && e.cy != null)
    if (t === "centric") {
      var s = e.cx, h = e.cy, d = e.innerRadius, y = e.outerRadius, p = e.angle, g = qe(s, h, d, p), b = qe(s, h, y, p);
      r = g.x, o = g.y, l = b.x, c = b.y;
    } else
      return cP(e);
  return [{
    x: r,
    y: o
  }, {
    x: l,
    y: c
  }];
}
function $l(t) {
  "@babel/helpers - typeof";
  return $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $l(t);
}
function GM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Of(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? GM(Object(n), !0).forEach(function(r) {
      qG(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : GM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function qG(t, e, n) {
  return e = zG(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function zG(t) {
  var e = $G(t, "string");
  return $l(e) == "symbol" ? e : e + "";
}
function $G(t, e) {
  if ($l(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if ($l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function BG(t) {
  var e, n, r = t.element, o = t.tooltipEventType, l = t.isActive, c = t.activeCoordinate, s = t.activePayload, h = t.offset, d = t.activeTooltipIndex, y = t.tooltipAxisBandSize, p = t.layout, g = t.chartName, b = (e = r.props.cursor) !== null && e !== void 0 ? e : (n = r.type.defaultProps) === null || n === void 0 ? void 0 : n.cursor;
  if (!r || !b || !l || !c || g !== "ScatterChart" && o !== "axis")
    return null;
  var O, S = oo;
  if (g === "ScatterChart")
    O = c, S = TH;
  else if (g === "BarChart")
    O = NG(p, c, h, y), S = F0;
  else if (p === "radial") {
    var x = cP(c), T = x.cx, w = x.cy, M = x.radius, j = x.startAngle, A = x.endAngle;
    O = {
      cx: T,
      cy: w,
      startAngle: j,
      endAngle: A,
      innerRadius: M,
      outerRadius: M
    }, S = vD;
  } else
    O = {
      points: RG(p, c, h)
    }, S = oo;
  var E = Of(Of(Of(Of({
    stroke: "#ccc",
    pointerEvents: "none"
  }, h), O), Et(b, !1)), {}, {
    payload: s,
    payloadIndex: d,
    className: qt("recharts-tooltip-cursor", b.className)
  });
  return /* @__PURE__ */ rt.isValidElement(b) ? /* @__PURE__ */ rt.cloneElement(b, E) : /* @__PURE__ */ rt.createElement(S, E);
}
var LG = ["item"], kG = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Do(t) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Do(t);
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, eo.apply(this, arguments);
}
function YM(t, e) {
  return IG(t) || HG(t, e) || sP(t, e) || UG();
}
function UG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HG(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, o, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, o = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function IG(t) {
  if (Array.isArray(t)) return t;
}
function XM(t, e) {
  if (t == null) return {};
  var n = GG(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (o = 0; o < l.length; o++)
      r = l[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function GG(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function YG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function XG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, hP(r.key), r);
  }
}
function KG(t, e, n) {
  return e && XG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function VG(t, e, n) {
  return e = js(e), FG(t, fP() ? Reflect.construct(e, n || [], js(t).constructor) : e.apply(t, n));
}
function FG(t, e) {
  if (e && (Do(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ZG(t);
}
function ZG(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function fP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fP = function() {
    return !!t;
  })();
}
function js(t) {
  return js = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, js(t);
}
function QG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Kb(t, e);
}
function Kb(t, e) {
  return Kb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Kb(t, e);
}
function Po(t) {
  return tY(t) || JG(t) || sP(t) || WG();
}
function WG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sP(t, e) {
  if (t) {
    if (typeof t == "string") return Vb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vb(t, e);
  }
}
function JG(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function tY(t) {
  if (Array.isArray(t)) return Vb(t);
}
function Vb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function KM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? KM(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : KM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function bt(t, e, n) {
  return e = hP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function hP(t) {
  var e = eY(t, "string");
  return Do(e) == "symbol" ? e : e + "";
}
function eY(t, e) {
  if (Do(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Do(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var nY = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, rY = {
  width: "100%",
  height: "100%"
}, dP = {
  x: 0,
  y: 0
};
function Af(t) {
  return t;
}
var aY = function(e, n) {
  return n === "horizontal" ? e.x : n === "vertical" ? e.y : n === "centric" ? e.angle : e.radius;
}, iY = function(e, n, r, o) {
  var l = n.find(function(y) {
    return y && y.index === r;
  });
  if (l) {
    if (e === "horizontal")
      return {
        x: l.coordinate,
        y: o.y
      };
    if (e === "vertical")
      return {
        x: o.x,
        y: l.coordinate
      };
    if (e === "centric") {
      var c = l.coordinate, s = o.radius;
      return tt(tt(tt({}, o), qe(o.cx, o.cy, s, c)), {}, {
        angle: c,
        radius: s
      });
    }
    var h = l.coordinate, d = o.angle;
    return tt(tt(tt({}, o), qe(o.cx, o.cy, h, d)), {}, {
      angle: d,
      radius: h
    });
  }
  return dP;
}, ih = function(e, n) {
  var r = n.graphicalItems, o = n.dataStartIndex, l = n.dataEndIndex, c = (r ?? []).reduce(function(s, h) {
    var d = h.props.data;
    return d && d.length ? [].concat(Po(s), Po(d)) : s;
  }, []);
  return c.length > 0 ? c : e && e.length && st(o) && st(l) ? e.slice(o, l + 1) : [];
};
function vP(t) {
  return t === "number" ? [0, "auto"] : void 0;
}
var Fb = function(e, n, r, o) {
  var l = e.graphicalItems, c = e.tooltipAxis, s = ih(n, e);
  return r < 0 || !l || !l.length || r >= s.length ? null : l.reduce(function(h, d) {
    var y, p = (y = d.props.data) !== null && y !== void 0 ? y : n;
    p && e.dataStartIndex + e.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    e.dataEndIndex - e.dataStartIndex >= r && (p = p.slice(e.dataStartIndex, e.dataEndIndex + 1));
    var g;
    if (c.dataKey && !c.allowDuplicatedCategory) {
      var b = p === void 0 ? s : p;
      g = Cf(b, c.dataKey, o);
    } else
      g = p && p[r] || s[r];
    return g ? [].concat(Po(h), [sD(d, g)]) : h;
  }, []);
}, VM = function(e, n, r, o) {
  var l = o || {
    x: e.chartX,
    y: e.chartY
  }, c = aY(l, r), s = e.orderedTooltipTicks, h = e.tooltipAxis, d = e.tooltipTicks, y = r5(c, s, d, h);
  if (y >= 0 && d) {
    var p = d[y] && d[y].value, g = Fb(e, n, y, p), b = iY(r, s, y, l);
    return {
      activeTooltipIndex: y,
      activeLabel: p,
      activePayload: g,
      activeCoordinate: b
    };
  }
  return null;
}, oY = function(e, n) {
  var r = n.axes, o = n.graphicalItems, l = n.axisType, c = n.axisIdKey, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.layout, p = e.children, g = e.stackOffset, b = lD(y, l);
  return r.reduce(function(O, S) {
    var x, T = S.type.defaultProps !== void 0 ? tt(tt({}, S.type.defaultProps), S.props) : S.props, w = T.type, M = T.dataKey, j = T.allowDataOverflow, A = T.allowDuplicatedCategory, E = T.scale, D = T.ticks, R = T.includeHidden, z = T[c];
    if (O[z])
      return O;
    var F = ih(e.data, {
      graphicalItems: o.filter(function(U) {
        var et, ft = c in U.props ? U.props[c] : (et = U.type.defaultProps) === null || et === void 0 ? void 0 : et[c];
        return ft === z;
      }),
      dataStartIndex: h,
      dataEndIndex: d
    }), k = F.length, $, K, Z;
    PG(T.domain, j, w) && ($ = hb(T.domain, null, j), b && (w === "number" || E !== "auto") && (Z = Ju(F, M, "category")));
    var V = vP(w);
    if (!$ || $.length === 0) {
      var N, I = (N = T.domain) !== null && N !== void 0 ? N : V;
      if (M) {
        if ($ = Ju(F, M, w), w === "category" && b) {
          var W = F3($);
          A && W ? (K = $, $ = ps(0, k)) : A || ($ = a2(I, $, S).reduce(function(U, et) {
            return U.indexOf(et) >= 0 ? U : [].concat(Po(U), [et]);
          }, []));
        } else if (w === "category")
          A ? $ = $.filter(function(U) {
            return U !== "" && !Mt(U);
          }) : $ = a2(I, $, S).reduce(function(U, et) {
            return U.indexOf(et) >= 0 || et === "" || Mt(et) ? U : [].concat(Po(U), [et]);
          }, []);
        else if (w === "number") {
          var ot = l5(F, o.filter(function(U) {
            var et, ft, vt = c in U.props ? U.props[c] : (et = U.type.defaultProps) === null || et === void 0 ? void 0 : et[c], mt = "hide" in U.props ? U.props.hide : (ft = U.type.defaultProps) === null || ft === void 0 ? void 0 : ft.hide;
            return vt === z && (R || !mt);
          }), M, l, y);
          ot && ($ = ot);
        }
        b && (w === "number" || E !== "auto") && (Z = Ju(F, M, "category"));
      } else b ? $ = ps(0, k) : s && s[z] && s[z].hasStack && w === "number" ? $ = g === "expand" ? [0, 1] : fD(s[z].stackGroups, h, d) : $ = uD(F, o.filter(function(U) {
        var et = c in U.props ? U.props[c] : U.type.defaultProps[c], ft = "hide" in U.props ? U.props.hide : U.type.defaultProps.hide;
        return et === z && (R || !ft);
      }), w, y, !0);
      if (w === "number")
        $ = Xb(p, $, z, l, D), I && ($ = hb(I, $, j));
      else if (w === "category" && I) {
        var lt = I, P = $.every(function(U) {
          return lt.indexOf(U) >= 0;
        });
        P && ($ = lt);
      }
    }
    return tt(tt({}, O), {}, bt({}, z, tt(tt({}, T), {}, {
      axisType: l,
      domain: $,
      categoricalDomain: Z,
      duplicateDomain: K,
      originalDomain: (x = T.domain) !== null && x !== void 0 ? x : V,
      isCategorical: b,
      layout: y
    })));
  }, {});
}, uY = function(e, n) {
  var r = n.graphicalItems, o = n.Axis, l = n.axisType, c = n.axisIdKey, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.layout, p = e.children, g = ih(e.data, {
    graphicalItems: r,
    dataStartIndex: h,
    dataEndIndex: d
  }), b = g.length, O = lD(y, l), S = -1;
  return r.reduce(function(x, T) {
    var w = T.type.defaultProps !== void 0 ? tt(tt({}, T.type.defaultProps), T.props) : T.props, M = w[c], j = vP("number");
    if (!x[M]) {
      S++;
      var A;
      return O ? A = ps(0, b) : s && s[M] && s[M].hasStack ? (A = fD(s[M].stackGroups, h, d), A = Xb(p, A, M, l)) : (A = hb(j, uD(g, r.filter(function(E) {
        var D, R, z = c in E.props ? E.props[c] : (D = E.type.defaultProps) === null || D === void 0 ? void 0 : D[c], F = "hide" in E.props ? E.props.hide : (R = E.type.defaultProps) === null || R === void 0 ? void 0 : R.hide;
        return z === M && !F;
      }), "number", y), o.defaultProps.allowDataOverflow), A = Xb(p, A, M, l)), tt(tt({}, x), {}, bt({}, M, tt(tt({
        axisType: l
      }, o.defaultProps), {}, {
        hide: !0,
        orientation: jn(nY, "".concat(l, ".").concat(S % 2), null),
        domain: A,
        originalDomain: j,
        isCategorical: O,
        layout: y
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return x;
  }, {});
}, lY = function(e, n) {
  var r = n.axisType, o = r === void 0 ? "xAxis" : r, l = n.AxisComp, c = n.graphicalItems, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.children, p = "".concat(o, "Id"), g = Cn(y, l), b = {};
  return g && g.length ? b = oY(e, {
    axes: g,
    graphicalItems: c,
    axisType: o,
    axisIdKey: p,
    stackGroups: s,
    dataStartIndex: h,
    dataEndIndex: d
  }) : c && c.length && (b = uY(e, {
    Axis: l,
    graphicalItems: c,
    axisType: o,
    axisIdKey: p,
    stackGroups: s,
    dataStartIndex: h,
    dataEndIndex: d
  })), b;
}, cY = function(e) {
  var n = pa(e), r = Er(n, !1, !0);
  return {
    tooltipTicks: r,
    orderedTooltipTicks: S0(r, function(o) {
      return o.coordinate;
    }),
    tooltipAxis: n,
    tooltipAxisBandSize: is(n, r)
  };
}, FM = function(e) {
  var n = e.children, r = e.defaultShowTooltip, o = hn(n, So), l = 0, c = 0;
  return e.data && e.data.length !== 0 && (c = e.data.length - 1), o && o.props && (o.props.startIndex >= 0 && (l = o.props.startIndex), o.props.endIndex >= 0 && (c = o.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: l,
    dataEndIndex: c,
    activeTooltipIndex: -1,
    isTooltipActive: !!r
  };
}, fY = function(e) {
  return !e || !e.length ? !1 : e.some(function(n) {
    var r = Cr(n && n.type);
    return r && r.indexOf("Bar") >= 0;
  });
}, ZM = function(e) {
  return e === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : e === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : e === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, sY = function(e, n) {
  var r = e.props, o = e.graphicalItems, l = e.xAxisMap, c = l === void 0 ? {} : l, s = e.yAxisMap, h = s === void 0 ? {} : s, d = r.width, y = r.height, p = r.children, g = r.margin || {}, b = hn(p, So), O = hn(p, ro), S = Object.keys(h).reduce(function(A, E) {
    var D = h[E], R = D.orientation;
    return !D.mirror && !D.hide ? tt(tt({}, A), {}, bt({}, R, A[R] + D.width)) : A;
  }, {
    left: g.left || 0,
    right: g.right || 0
  }), x = Object.keys(c).reduce(function(A, E) {
    var D = c[E], R = D.orientation;
    return !D.mirror && !D.hide ? tt(tt({}, A), {}, bt({}, R, jn(A, "".concat(R)) + D.height)) : A;
  }, {
    top: g.top || 0,
    bottom: g.bottom || 0
  }), T = tt(tt({}, x), S), w = T.bottom;
  b && (T.bottom += b.props.height || So.defaultProps.height), O && n && (T = o5(T, o, r, n));
  var M = d - T.left - T.right, j = y - T.top - T.bottom;
  return tt(tt({
    brushBottom: w
  }, T), {}, {
    // never return negative values for height and width
    width: Math.max(M, 0),
    height: Math.max(j, 0)
  });
}, hY = function(e, n) {
  if (n === "xAxis")
    return e[n].width;
  if (n === "yAxis")
    return e[n].height;
}, o1 = function(e) {
  var n = e.chartName, r = e.GraphicalChild, o = e.defaultTooltipEventType, l = o === void 0 ? "axis" : o, c = e.validateTooltipEventTypes, s = c === void 0 ? ["axis"] : c, h = e.axisComponents, d = e.legendContent, y = e.formatAxisMap, p = e.defaultProps, g = function(T, w) {
    var M = w.graphicalItems, j = w.stackGroups, A = w.offset, E = w.updateId, D = w.dataStartIndex, R = w.dataEndIndex, z = T.barSize, F = T.layout, k = T.barGap, $ = T.barCategoryGap, K = T.maxBarSize, Z = ZM(F), V = Z.numericAxisName, N = Z.cateAxisName, I = fY(M), W = [];
    return M.forEach(function(ot, lt) {
      var P = ih(T.data, {
        graphicalItems: [ot],
        dataStartIndex: D,
        dataEndIndex: R
      }), U = ot.type.defaultProps !== void 0 ? tt(tt({}, ot.type.defaultProps), ot.props) : ot.props, et = U.dataKey, ft = U.maxBarSize, vt = U["".concat(V, "Id")], mt = U["".concat(N, "Id")], jt = {}, kt = h.reduce(function(Rn, ar) {
        var Ho = w["".concat(ar.axisType, "Map")], $e = U["".concat(ar.axisType, "Id")];
        Ho && Ho[$e] || ar.axisType === "zAxis" || ni();
        var Yl = Ho[$e];
        return tt(tt({}, Rn), {}, bt(bt({}, ar.axisType, Yl), "".concat(ar.axisType, "Ticks"), Er(Yl)));
      }, jt), ct = kt[N], xt = kt["".concat(N, "Ticks")], St = j && j[vt] && j[vt].hasStack && x5(ot, j[vt].stackGroups), ut = Cr(ot.type).indexOf("Bar") >= 0, te = is(ct, xt), wt = [], oe = I && a5({
        barSize: z,
        stackGroups: j,
        totalSize: hY(kt, N)
      });
      if (ut) {
        var ue, ze, Nn = Mt(ft) ? K : ft, Gn = (ue = (ze = is(ct, xt, !0)) !== null && ze !== void 0 ? ze : Nn) !== null && ue !== void 0 ? ue : 0;
        wt = i5({
          barGap: k,
          barCategoryGap: $,
          bandSize: Gn !== te ? Gn : te,
          sizeList: oe[mt],
          maxBarSize: Nn
        }), Gn !== te && (wt = wt.map(function(Rn) {
          return tt(tt({}, Rn), {}, {
            position: tt(tt({}, Rn.position), {}, {
              offset: Rn.position.offset - Gn / 2
            })
          });
        }));
      }
      var kr = ot && ot.type && ot.type.getComposedData;
      kr && W.push({
        props: tt(tt({}, kr(tt(tt({}, kt), {}, {
          displayedData: P,
          props: T,
          dataKey: et,
          item: ot,
          bandSize: te,
          barPosition: wt,
          offset: A,
          stackedData: St,
          layout: F,
          dataStartIndex: D,
          dataEndIndex: R
        }))), {}, bt(bt(bt({
          key: ot.key || "item-".concat(lt)
        }, V, kt[V]), N, kt[N]), "animationId", E)),
        childIndex: uq(ot, T.children),
        item: ot
      });
    }), W;
  }, b = function(T, w) {
    var M = T.props, j = T.dataStartIndex, A = T.dataEndIndex, E = T.updateId;
    if (!bA({
      props: M
    }))
      return null;
    var D = M.children, R = M.layout, z = M.stackOffset, F = M.data, k = M.reverseStackOrder, $ = ZM(R), K = $.numericAxisName, Z = $.cateAxisName, V = Cn(D, r), N = m5(F, V, "".concat(K, "Id"), "".concat(Z, "Id"), z, k), I = h.reduce(function(U, et) {
      var ft = "".concat(et.axisType, "Map");
      return tt(tt({}, U), {}, bt({}, ft, lY(M, tt(tt({}, et), {}, {
        graphicalItems: V,
        stackGroups: et.axisType === K && N,
        dataStartIndex: j,
        dataEndIndex: A
      }))));
    }, {}), W = sY(tt(tt({}, I), {}, {
      props: M,
      graphicalItems: V
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(I).forEach(function(U) {
      I[U] = y(M, I[U], W, U.replace("Map", ""), n);
    });
    var ot = I["".concat(Z, "Map")], lt = cY(ot), P = g(M, tt(tt({}, I), {}, {
      dataStartIndex: j,
      dataEndIndex: A,
      updateId: E,
      graphicalItems: V,
      stackGroups: N,
      offset: W
    }));
    return tt(tt({
      formattedGraphicalItems: P,
      graphicalItems: V,
      offset: W,
      stackGroups: N
    }, lt), I);
  }, O = /* @__PURE__ */ (function(x) {
    function T(w) {
      var M, j, A;
      return YG(this, T), A = VG(this, T, [w]), bt(A, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), bt(A, "accessibilityManager", new DG()), bt(A, "handleLegendBBoxUpdate", function(E) {
        if (E) {
          var D = A.state, R = D.dataStartIndex, z = D.dataEndIndex, F = D.updateId;
          A.setState(tt({
            legendBBox: E
          }, b({
            props: A.props,
            dataStartIndex: R,
            dataEndIndex: z,
            updateId: F
          }, tt(tt({}, A.state), {}, {
            legendBBox: E
          }))));
        }
      }), bt(A, "handleReceiveSyncEvent", function(E, D, R) {
        if (A.props.syncId === E) {
          if (R === A.eventEmitterSymbol && typeof A.props.syncMethod != "function")
            return;
          A.applySyncEvent(D);
        }
      }), bt(A, "handleBrushChange", function(E) {
        var D = E.startIndex, R = E.endIndex;
        if (D !== A.state.dataStartIndex || R !== A.state.dataEndIndex) {
          var z = A.state.updateId;
          A.setState(function() {
            return tt({
              dataStartIndex: D,
              dataEndIndex: R
            }, b({
              props: A.props,
              dataStartIndex: D,
              dataEndIndex: R,
              updateId: z
            }, A.state));
          }), A.triggerSyncEvent({
            dataStartIndex: D,
            dataEndIndex: R
          });
        }
      }), bt(A, "handleMouseEnter", function(E) {
        var D = A.getMouseInfo(E);
        if (D) {
          var R = tt(tt({}, D), {}, {
            isTooltipActive: !0
          });
          A.setState(R), A.triggerSyncEvent(R);
          var z = A.props.onMouseEnter;
          At(z) && z(R, E);
        }
      }), bt(A, "triggeredAfterMouseMove", function(E) {
        var D = A.getMouseInfo(E), R = D ? tt(tt({}, D), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        A.setState(R), A.triggerSyncEvent(R);
        var z = A.props.onMouseMove;
        At(z) && z(R, E);
      }), bt(A, "handleItemMouseEnter", function(E) {
        A.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: E,
            activePayload: E.tooltipPayload,
            activeCoordinate: E.tooltipPosition || {
              x: E.cx,
              y: E.cy
            }
          };
        });
      }), bt(A, "handleItemMouseLeave", function() {
        A.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), bt(A, "handleMouseMove", function(E) {
        E.persist(), A.throttleTriggeredAfterMouseMove(E);
      }), bt(A, "handleMouseLeave", function(E) {
        A.throttleTriggeredAfterMouseMove.cancel();
        var D = {
          isTooltipActive: !1
        };
        A.setState(D), A.triggerSyncEvent(D);
        var R = A.props.onMouseLeave;
        At(R) && R(D, E);
      }), bt(A, "handleOuterEvent", function(E) {
        var D = oq(E), R = jn(A.props, "".concat(D));
        if (D && At(R)) {
          var z, F;
          /.*touch.*/i.test(D) ? F = A.getMouseInfo(E.changedTouches[0]) : F = A.getMouseInfo(E), R((z = F) !== null && z !== void 0 ? z : {}, E);
        }
      }), bt(A, "handleClick", function(E) {
        var D = A.getMouseInfo(E);
        if (D) {
          var R = tt(tt({}, D), {}, {
            isTooltipActive: !0
          });
          A.setState(R), A.triggerSyncEvent(R);
          var z = A.props.onClick;
          At(z) && z(R, E);
        }
      }), bt(A, "handleMouseDown", function(E) {
        var D = A.props.onMouseDown;
        if (At(D)) {
          var R = A.getMouseInfo(E);
          D(R, E);
        }
      }), bt(A, "handleMouseUp", function(E) {
        var D = A.props.onMouseUp;
        if (At(D)) {
          var R = A.getMouseInfo(E);
          D(R, E);
        }
      }), bt(A, "handleTouchMove", function(E) {
        E.changedTouches != null && E.changedTouches.length > 0 && A.throttleTriggeredAfterMouseMove(E.changedTouches[0]);
      }), bt(A, "handleTouchStart", function(E) {
        E.changedTouches != null && E.changedTouches.length > 0 && A.handleMouseDown(E.changedTouches[0]);
      }), bt(A, "handleTouchEnd", function(E) {
        E.changedTouches != null && E.changedTouches.length > 0 && A.handleMouseUp(E.changedTouches[0]);
      }), bt(A, "handleDoubleClick", function(E) {
        var D = A.props.onDoubleClick;
        if (At(D)) {
          var R = A.getMouseInfo(E);
          D(R, E);
        }
      }), bt(A, "handleContextMenu", function(E) {
        var D = A.props.onContextMenu;
        if (At(D)) {
          var R = A.getMouseInfo(E);
          D(R, E);
        }
      }), bt(A, "triggerSyncEvent", function(E) {
        A.props.syncId !== void 0 && Tg.emit(Eg, A.props.syncId, E, A.eventEmitterSymbol);
      }), bt(A, "applySyncEvent", function(E) {
        var D = A.props, R = D.layout, z = D.syncMethod, F = A.state.updateId, k = E.dataStartIndex, $ = E.dataEndIndex;
        if (E.dataStartIndex !== void 0 || E.dataEndIndex !== void 0)
          A.setState(tt({
            dataStartIndex: k,
            dataEndIndex: $
          }, b({
            props: A.props,
            dataStartIndex: k,
            dataEndIndex: $,
            updateId: F
          }, A.state)));
        else if (E.activeTooltipIndex !== void 0) {
          var K = E.chartX, Z = E.chartY, V = E.activeTooltipIndex, N = A.state, I = N.offset, W = N.tooltipTicks;
          if (!I)
            return;
          if (typeof z == "function")
            V = z(W, E);
          else if (z === "value") {
            V = -1;
            for (var ot = 0; ot < W.length; ot++)
              if (W[ot].value === E.activeLabel) {
                V = ot;
                break;
              }
          }
          var lt = tt(tt({}, I), {}, {
            x: I.left,
            y: I.top
          }), P = Math.min(K, lt.x + lt.width), U = Math.min(Z, lt.y + lt.height), et = W[V] && W[V].value, ft = Fb(A.state, A.props.data, V), vt = W[V] ? {
            x: R === "horizontal" ? W[V].coordinate : P,
            y: R === "horizontal" ? U : W[V].coordinate
          } : dP;
          A.setState(tt(tt({}, E), {}, {
            activeLabel: et,
            activeCoordinate: vt,
            activePayload: ft,
            activeTooltipIndex: V
          }));
        } else
          A.setState(E);
      }), bt(A, "renderCursor", function(E) {
        var D, R = A.state, z = R.isTooltipActive, F = R.activeCoordinate, k = R.activePayload, $ = R.offset, K = R.activeTooltipIndex, Z = R.tooltipAxisBandSize, V = A.getTooltipEventType(), N = (D = E.props.active) !== null && D !== void 0 ? D : z, I = A.props.layout, W = E.key || "_recharts-cursor";
        return /* @__PURE__ */ B.createElement(BG, {
          key: W,
          activeCoordinate: F,
          activePayload: k,
          activeTooltipIndex: K,
          chartName: n,
          element: E,
          isActive: N,
          layout: I,
          offset: $,
          tooltipAxisBandSize: Z,
          tooltipEventType: V
        });
      }), bt(A, "renderPolarAxis", function(E, D, R) {
        var z = jn(E, "type.axisType"), F = jn(A.state, "".concat(z, "Map")), k = E.type.defaultProps, $ = k !== void 0 ? tt(tt({}, k), E.props) : E.props, K = F && F[$["".concat(z, "Id")]];
        return /* @__PURE__ */ rt.cloneElement(E, tt(tt({}, K), {}, {
          className: qt(z, K.className),
          key: E.key || "".concat(D, "-").concat(R),
          ticks: Er(K, !0)
        }));
      }), bt(A, "renderPolarGrid", function(E) {
        var D = E.props, R = D.radialLines, z = D.polarAngles, F = D.polarRadius, k = A.state, $ = k.radiusAxisMap, K = k.angleAxisMap, Z = pa($), V = pa(K), N = V.cx, I = V.cy, W = V.innerRadius, ot = V.outerRadius;
        return /* @__PURE__ */ rt.cloneElement(E, {
          polarAngles: Array.isArray(z) ? z : Er(V, !0).map(function(lt) {
            return lt.coordinate;
          }),
          polarRadius: Array.isArray(F) ? F : Er(Z, !0).map(function(lt) {
            return lt.coordinate;
          }),
          cx: N,
          cy: I,
          innerRadius: W,
          outerRadius: ot,
          key: E.key || "polar-grid",
          radialLines: R
        });
      }), bt(A, "renderLegend", function() {
        var E = A.state.formattedGraphicalItems, D = A.props, R = D.children, z = D.width, F = D.height, k = A.props.margin || {}, $ = z - (k.left || 0) - (k.right || 0), K = iD({
          children: R,
          formattedGraphicalItems: E,
          legendWidth: $,
          legendContent: d
        });
        if (!K)
          return null;
        var Z = K.item, V = XM(K, LG);
        return /* @__PURE__ */ rt.cloneElement(Z, tt(tt({}, V), {}, {
          chartWidth: z,
          chartHeight: F,
          margin: k,
          onBBoxUpdate: A.handleLegendBBoxUpdate
        }));
      }), bt(A, "renderTooltip", function() {
        var E, D = A.props, R = D.children, z = D.accessibilityLayer, F = hn(R, dn);
        if (!F)
          return null;
        var k = A.state, $ = k.isTooltipActive, K = k.activeCoordinate, Z = k.activePayload, V = k.activeLabel, N = k.offset, I = (E = F.props.active) !== null && E !== void 0 ? E : $;
        return /* @__PURE__ */ rt.cloneElement(F, {
          viewBox: tt(tt({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: I,
          label: V,
          payload: I ? Z : [],
          coordinate: K,
          accessibilityLayer: z
        });
      }), bt(A, "renderBrush", function(E) {
        var D = A.props, R = D.margin, z = D.data, F = A.state, k = F.offset, $ = F.dataStartIndex, K = F.dataEndIndex, Z = F.updateId;
        return /* @__PURE__ */ rt.cloneElement(E, {
          key: E.key || "_recharts-brush",
          onChange: bf(A.handleBrushChange, E.props.onChange),
          data: z,
          x: st(E.props.x) ? E.props.x : k.left,
          y: st(E.props.y) ? E.props.y : k.top + k.height + k.brushBottom - (R.bottom || 0),
          width: st(E.props.width) ? E.props.width : k.width,
          startIndex: $,
          endIndex: K,
          updateId: "brush-".concat(Z)
        });
      }), bt(A, "renderReferenceElement", function(E, D, R) {
        if (!E)
          return null;
        var z = A, F = z.clipPathId, k = A.state, $ = k.xAxisMap, K = k.yAxisMap, Z = k.offset, V = E.type.defaultProps || {}, N = E.props, I = N.xAxisId, W = I === void 0 ? V.xAxisId : I, ot = N.yAxisId, lt = ot === void 0 ? V.yAxisId : ot;
        return /* @__PURE__ */ rt.cloneElement(E, {
          key: E.key || "".concat(D, "-").concat(R),
          xAxis: $[W],
          yAxis: K[lt],
          viewBox: {
            x: Z.left,
            y: Z.top,
            width: Z.width,
            height: Z.height
          },
          clipPathId: F
        });
      }), bt(A, "renderActivePoints", function(E) {
        var D = E.item, R = E.activePoint, z = E.basePoint, F = E.childIndex, k = E.isRange, $ = [], K = D.props.key, Z = D.item.type.defaultProps !== void 0 ? tt(tt({}, D.item.type.defaultProps), D.item.props) : D.item.props, V = Z.activeDot, N = Z.dataKey, I = tt(tt({
          index: F,
          dataKey: N,
          cx: R.x,
          cy: R.y,
          r: 4,
          fill: V0(D.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: R.payload,
          value: R.value
        }, Et(V, !1)), Df(V));
        return $.push(T.renderActiveDot(V, I, "".concat(K, "-activePoint-").concat(F))), z ? $.push(T.renderActiveDot(V, tt(tt({}, I), {}, {
          cx: z.x,
          cy: z.y
        }), "".concat(K, "-basePoint-").concat(F))) : k && $.push(null), $;
      }), bt(A, "renderGraphicChild", function(E, D, R) {
        var z = A.filterFormatItem(E, D, R);
        if (!z)
          return null;
        var F = A.getTooltipEventType(), k = A.state, $ = k.isTooltipActive, K = k.tooltipAxis, Z = k.activeTooltipIndex, V = k.activeLabel, N = A.props.children, I = hn(N, dn), W = z.props, ot = W.points, lt = W.isRange, P = W.baseLine, U = z.item.type.defaultProps !== void 0 ? tt(tt({}, z.item.type.defaultProps), z.item.props) : z.item.props, et = U.activeDot, ft = U.hide, vt = U.activeBar, mt = U.activeShape, jt = !!(!ft && $ && I && (et || vt || mt)), kt = {};
        F !== "axis" && I && I.props.trigger === "click" ? kt = {
          onClick: bf(A.handleItemMouseEnter, E.props.onClick)
        } : F !== "axis" && (kt = {
          onMouseLeave: bf(A.handleItemMouseLeave, E.props.onMouseLeave),
          onMouseEnter: bf(A.handleItemMouseEnter, E.props.onMouseEnter)
        });
        var ct = /* @__PURE__ */ rt.cloneElement(E, tt(tt({}, z.props), kt));
        function xt(ar) {
          return typeof K.dataKey == "function" ? K.dataKey(ar.payload) : null;
        }
        if (jt)
          if (Z >= 0) {
            var St, ut;
            if (K.dataKey && !K.allowDuplicatedCategory) {
              var te = typeof K.dataKey == "function" ? xt : "payload.".concat(K.dataKey.toString());
              St = Cf(ot, te, V), ut = lt && P && Cf(P, te, V);
            } else
              St = ot == null ? void 0 : ot[Z], ut = lt && P && P[Z];
            if (mt || vt) {
              var wt = E.props.activeIndex !== void 0 ? E.props.activeIndex : Z;
              return [/* @__PURE__ */ rt.cloneElement(E, tt(tt(tt({}, z.props), kt), {}, {
                activeIndex: wt
              })), null, null];
            }
            if (!Mt(St))
              return [ct].concat(Po(A.renderActivePoints({
                item: z,
                activePoint: St,
                basePoint: ut,
                childIndex: Z,
                isRange: lt
              })));
          } else {
            var oe, ue = (oe = A.getItemByXY(A.state.activeCoordinate)) !== null && oe !== void 0 ? oe : {
              graphicalItem: ct
            }, ze = ue.graphicalItem, Nn = ze.item, Gn = Nn === void 0 ? E : Nn, kr = ze.childIndex, Rn = tt(tt(tt({}, z.props), kt), {}, {
              activeIndex: kr
            });
            return [/* @__PURE__ */ rt.cloneElement(Gn, Rn), null, null];
          }
        return lt ? [ct, null, null] : [ct, null];
      }), bt(A, "renderCustomized", function(E, D, R) {
        return /* @__PURE__ */ rt.cloneElement(E, tt(tt({
          key: "recharts-customized-".concat(R)
        }, A.props), A.state));
      }), bt(A, "renderMap", {
        CartesianGrid: {
          handler: Af,
          once: !0
        },
        ReferenceArea: {
          handler: A.renderReferenceElement
        },
        ReferenceLine: {
          handler: Af
        },
        ReferenceDot: {
          handler: A.renderReferenceElement
        },
        XAxis: {
          handler: Af
        },
        YAxis: {
          handler: Af
        },
        Brush: {
          handler: A.renderBrush,
          once: !0
        },
        Bar: {
          handler: A.renderGraphicChild
        },
        Line: {
          handler: A.renderGraphicChild
        },
        Area: {
          handler: A.renderGraphicChild
        },
        Radar: {
          handler: A.renderGraphicChild
        },
        RadialBar: {
          handler: A.renderGraphicChild
        },
        Scatter: {
          handler: A.renderGraphicChild
        },
        Pie: {
          handler: A.renderGraphicChild
        },
        Funnel: {
          handler: A.renderGraphicChild
        },
        Tooltip: {
          handler: A.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: A.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: A.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: A.renderPolarAxis
        },
        Customized: {
          handler: A.renderCustomized
        }
      }), A.clipPathId = "".concat((M = w.id) !== null && M !== void 0 ? M : zo("recharts"), "-clip"), A.throttleTriggeredAfterMouseMove = oC(A.triggeredAfterMouseMove, (j = w.throttleDelay) !== null && j !== void 0 ? j : 1e3 / 60), A.state = {}, A;
    }
    return QG(T, x), KG(T, [{
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
        var M = this.props, j = M.children, A = M.data, E = M.height, D = M.layout, R = hn(j, dn);
        if (R) {
          var z = R.props.defaultIndex;
          if (!(typeof z != "number" || z < 0 || z > this.state.tooltipTicks.length - 1)) {
            var F = this.state.tooltipTicks[z] && this.state.tooltipTicks[z].value, k = Fb(this.state, A, z, F), $ = this.state.tooltipTicks[z].coordinate, K = (this.state.offset.top + E) / 2, Z = D === "horizontal", V = Z ? {
              x: $,
              y: K
            } : {
              y: $,
              x: K
            }, N = this.state.formattedGraphicalItems.find(function(W) {
              var ot = W.item;
              return ot.type.name === "Scatter";
            });
            N && (V = tt(tt({}, V), N.props.points[z].tooltipPosition), k = N.props.points[z].tooltipPayload);
            var I = {
              activeTooltipIndex: z,
              isTooltipActive: !0,
              activeLabel: F,
              activePayload: k,
              activeCoordinate: V
            };
            this.setState(I), this.renderCursor(R), this.accessibilityManager.setIndex(z);
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
          var A, E;
          this.accessibilityManager.setDetails({
            offset: {
              left: (A = this.props.margin.left) !== null && A !== void 0 ? A : 0,
              top: (E = this.props.margin.top) !== null && E !== void 0 ? E : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(M) {
        Rg([hn(M.children, dn)], [hn(this.props.children, dn)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var M = hn(this.props.children, dn);
        if (M && typeof M.props.shared == "boolean") {
          var j = M.props.shared ? "axis" : "item";
          return s.indexOf(j) >= 0 ? j : l;
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
        var j = this.container, A = j.getBoundingClientRect(), E = KB(A), D = {
          chartX: Math.round(M.pageX - E.left),
          chartY: Math.round(M.pageY - E.top)
        }, R = A.width / j.offsetWidth || 1, z = this.inRange(D.chartX, D.chartY, R);
        if (!z)
          return null;
        var F = this.state, k = F.xAxisMap, $ = F.yAxisMap, K = this.getTooltipEventType(), Z = VM(this.state, this.props.data, this.props.layout, z);
        if (K !== "axis" && k && $) {
          var V = pa(k).scale, N = pa($).scale, I = V && V.invert ? V.invert(D.chartX) : null, W = N && N.invert ? N.invert(D.chartY) : null;
          return tt(tt({}, D), {}, {
            xValue: I,
            yValue: W
          }, Z);
        }
        return Z ? tt(tt({}, D), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(M, j) {
        var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, E = this.props.layout, D = M / A, R = j / A;
        if (E === "horizontal" || E === "vertical") {
          var z = this.state.offset, F = D >= z.left && D <= z.left + z.width && R >= z.top && R <= z.top + z.height;
          return F ? {
            x: D,
            y: R
          } : null;
        }
        var k = this.state, $ = k.angleAxisMap, K = k.radiusAxisMap;
        if ($ && K) {
          var Z = pa($);
          return u2({
            x: D,
            y: R
          }, Z);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var M = this.props.children, j = this.getTooltipEventType(), A = hn(M, dn), E = {};
        A && j === "axis" && (A.props.trigger === "click" ? E = {
          onClick: this.handleClick
        } : E = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var D = Df(this.props, this.handleOuterEvent);
        return tt(tt({}, D), E);
      }
    }, {
      key: "addListener",
      value: function() {
        Tg.on(Eg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Tg.removeListener(Eg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(M, j, A) {
        for (var E = this.state.formattedGraphicalItems, D = 0, R = E.length; D < R; D++) {
          var z = E[D];
          if (z.item === M || z.props.key === M.key || j === Cr(z.item.type) && A === z.childIndex)
            return z;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var M = this.clipPathId, j = this.state.offset, A = j.left, E = j.top, D = j.height, R = j.width;
        return /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
          id: M
        }, /* @__PURE__ */ B.createElement("rect", {
          x: A,
          y: E,
          height: D,
          width: R
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var M = this.state.xAxisMap;
        return M ? Object.entries(M).reduce(function(j, A) {
          var E = YM(A, 2), D = E[0], R = E[1];
          return tt(tt({}, j), {}, bt({}, D, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var M = this.state.yAxisMap;
        return M ? Object.entries(M).reduce(function(j, A) {
          var E = YM(A, 2), D = E[0], R = E[1];
          return tt(tt({}, j), {}, bt({}, D, R.scale));
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
        var j = this.state, A = j.formattedGraphicalItems, E = j.activeItem;
        if (A && A.length)
          for (var D = 0, R = A.length; D < R; D++) {
            var z = A[D], F = z.props, k = z.item, $ = k.type.defaultProps !== void 0 ? tt(tt({}, k.type.defaultProps), k.props) : k.props, K = Cr(k.type);
            if (K === "Bar") {
              var Z = (F.data || []).find(function(W) {
                return yH(M, W);
              });
              if (Z)
                return {
                  graphicalItem: z,
                  payload: Z
                };
            } else if (K === "RadialBar") {
              var V = (F.data || []).find(function(W) {
                return u2(M, W);
              });
              if (V)
                return {
                  graphicalItem: z,
                  payload: V
                };
            } else if (Ws(z, E) || Js(z, E) || Dl(z, E)) {
              var N = o9({
                graphicalItem: z,
                activeTooltipItem: E,
                itemData: $.data
              }), I = $.activeIndex === void 0 ? N : $.activeIndex;
              return {
                graphicalItem: tt(tt({}, z), {}, {
                  childIndex: I
                }),
                payload: Dl(z, E) ? $.data[N] : z.props.data[N]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var M = this;
        if (!bA(this))
          return null;
        var j = this.props, A = j.children, E = j.className, D = j.width, R = j.height, z = j.style, F = j.compact, k = j.title, $ = j.desc, K = XM(j, kG), Z = Et(K, !1);
        if (F)
          return /* @__PURE__ */ B.createElement(AM, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ B.createElement(zg, eo({}, Z, {
            width: D,
            height: R,
            title: k,
            desc: $
          }), this.renderClipPath(), SA(A, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var V, N;
          Z.tabIndex = (V = this.props.tabIndex) !== null && V !== void 0 ? V : 0, Z.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", Z.onKeyDown = function(W) {
            M.accessibilityManager.keyboardEvent(W);
          }, Z.onFocus = function() {
            M.accessibilityManager.focus();
          };
        }
        var I = this.parseEventsOfWrapper();
        return /* @__PURE__ */ B.createElement(AM, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ B.createElement("div", eo({
          className: qt("recharts-wrapper", E),
          style: tt({
            position: "relative",
            cursor: "default",
            width: D,
            height: R
          }, z)
        }, I, {
          ref: function(ot) {
            M.container = ot;
          }
        }), /* @__PURE__ */ B.createElement(zg, eo({}, Z, {
          width: D,
          height: R,
          title: k,
          desc: $,
          style: rY
        }), this.renderClipPath(), SA(A, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(rt.Component);
  bt(O, "displayName", n), bt(O, "defaultProps", tt({
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
  }, p)), bt(O, "getDerivedStateFromProps", function(x, T) {
    var w = x.dataKey, M = x.data, j = x.children, A = x.width, E = x.height, D = x.layout, R = x.stackOffset, z = x.margin, F = T.dataStartIndex, k = T.dataEndIndex;
    if (T.updateId === void 0) {
      var $ = FM(x);
      return tt(tt(tt({}, $), {}, {
        updateId: 0
      }, b(tt(tt({
        props: x
      }, $), {}, {
        updateId: 0
      }), T)), {}, {
        prevDataKey: w,
        prevData: M,
        prevWidth: A,
        prevHeight: E,
        prevLayout: D,
        prevStackOffset: R,
        prevMargin: z,
        prevChildren: j
      });
    }
    if (w !== T.prevDataKey || M !== T.prevData || A !== T.prevWidth || E !== T.prevHeight || D !== T.prevLayout || R !== T.prevStackOffset || !no(z, T.prevMargin)) {
      var K = FM(x), Z = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: T.chartX,
        chartY: T.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: T.isTooltipActive
      }, V = tt(tt({}, VM(T, M, D)), {}, {
        updateId: T.updateId + 1
      }), N = tt(tt(tt({}, K), Z), V);
      return tt(tt(tt({}, N), b(tt({
        props: x
      }, N), T)), {}, {
        prevDataKey: w,
        prevData: M,
        prevWidth: A,
        prevHeight: E,
        prevLayout: D,
        prevStackOffset: R,
        prevMargin: z,
        prevChildren: j
      });
    }
    if (!Rg(j, T.prevChildren)) {
      var I, W, ot, lt, P = hn(j, So), U = P && (I = (W = P.props) === null || W === void 0 ? void 0 : W.startIndex) !== null && I !== void 0 ? I : F, et = P && (ot = (lt = P.props) === null || lt === void 0 ? void 0 : lt.endIndex) !== null && ot !== void 0 ? ot : k, ft = U !== F || et !== k, vt = !Mt(M), mt = vt && !ft ? T.updateId : T.updateId + 1;
      return tt(tt({
        updateId: mt
      }, b(tt(tt({
        props: x
      }, T), {}, {
        updateId: mt,
        dataStartIndex: U,
        dataEndIndex: et
      }), T)), {}, {
        prevChildren: j,
        dataStartIndex: U,
        dataEndIndex: et
      });
    }
    return null;
  }), bt(O, "renderActiveDot", function(x, T, w) {
    var M;
    return /* @__PURE__ */ rt.isValidElement(x) ? M = /* @__PURE__ */ rt.cloneElement(x, T) : At(x) ? M = x(T) : M = /* @__PURE__ */ B.createElement(Qs, T), /* @__PURE__ */ B.createElement(Jt, {
      className: "recharts-active-dot",
      key: w
    }, M);
  });
  var S = /* @__PURE__ */ rt.forwardRef(function(T, w) {
    return /* @__PURE__ */ B.createElement(O, eo({}, T, {
      ref: w
    }));
  });
  return S.displayName = O.displayName, S;
}, dY = o1({
  chartName: "LineChart",
  GraphicalChild: Wa,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: Z0
}), vY = o1({
  chartName: "BarChart",
  GraphicalChild: ci,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: Z0
}), QM = o1({
  chartName: "AreaChart",
  GraphicalChild: tr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: Z0
});
function wf(t, e) {
  let n = 0, r = 0;
  for (const l of e)
    l == null || !isFinite(l) || (l < n && (n = l), l > r && (r = l));
  let o = 1;
  for (const l of [n, r]) o = Math.max(o, t(l).length);
  return Math.min(90, Math.ceil(o * 7) + 14);
}
const Tf = { top: 8, right: 12, bottom: 0, left: 0 }, Ef = [
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
], ha = { fill: "#8b9bb4", fontSize: 12 }, Mf = {
  backgroundColor: "#17202f",
  border: "1px solid #223047",
  borderRadius: 8,
  color: "#e6edf7",
  fontSize: 13
};
function pY({
  rows: t,
  accounts: e,
  mode: n,
  range: r,
  masked: o = !1,
  compact: l = !0
}) {
  const c = r === "1d" || r === "1w", s = (w) => Vi(w, c), h = (w, M) => M !== 0 ? (w - M) / Math.abs(M) : null, d = l ? GR : Zu, y = (w) => o ? nl(w) : d(w), p = (w) => o ? nl(w) : Zu(w, !0);
  if (n === "flow") {
    const w = i3(t, e, r), M = (A) => o ? A.toFixed(2) : rj(A), j = (A) => o ? A.toFixed(1) : d(A);
    return /* @__PURE__ */ it.jsx(vf, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(vY, { data: w, margin: Tf, children: [
      /* @__PURE__ */ it.jsx(Fu, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: (A) => Vi(A), tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: (A) => j(A), tick: ha, width: wf(j, w.map((A) => A.flow)) }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: Mf,
          labelFormatter: (A) => Vi(A),
          formatter: (A) => [M(A), "Net flow"],
          cursor: { fill: "#223047", fillOpacity: 0.4 }
        }
      ),
      /* @__PURE__ */ it.jsx(ci, { dataKey: "flow", radius: [3, 3, 0, 0], children: w.map((A, E) => /* @__PURE__ */ it.jsx(O0, { fill: A.flow >= 0 ? "#34d399" : "#f87171", fillOpacity: 0.8 }, E)) })
    ] }) });
  }
  if (n === "total") {
    const w = Fn(t[0], e), M = t.map((j) => {
      const A = Fn(j, e);
      return { ts: j.ts, total: o ? h(A, w) : A };
    });
    return /* @__PURE__ */ it.jsx(vf, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(QM, { data: M, margin: Tf, children: [
      /* @__PURE__ */ it.jsx("defs", { children: /* @__PURE__ */ it.jsxs("linearGradient", { id: "nw", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ it.jsx("stop", { offset: "0%", stopColor: "#60a5fa", stopOpacity: 0.35 }),
        /* @__PURE__ */ it.jsx("stop", { offset: "100%", stopColor: "#60a5fa", stopOpacity: 0 })
      ] }) }),
      /* @__PURE__ */ it.jsx(Fu, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: s, tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: y, tick: ha, width: wf(y, M.map((j) => j.total)), domain: ["auto", "auto"] }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: Mf,
          labelFormatter: (j) => Vi(j, !0),
          formatter: (j) => [p(j), "Total"]
        }
      ),
      /* @__PURE__ */ it.jsx(tr, { type: "monotone", dataKey: "total", stroke: "#60a5fa", strokeWidth: 2, fill: "url(#nw)" })
    ] }) });
  }
  if (n === "category") {
    const w = (A) => A.category === "retirement", M = {
      retirement: Fn(t[0], e, w),
      other: Fn(t[0], e, (A) => !w(A)),
      debt: Ev(t[0], e)
    }, j = t.map((A) => {
      const E = Fn(A, e, w), D = Fn(A, e, (z) => !w(z)), R = Ev(A, e);
      return o ? {
        ts: A.ts,
        retirement: h(E, M.retirement),
        other: h(D, M.other),
        debt: h(R, M.debt)
      } : { ts: A.ts, retirement: E, other: D, debt: R };
    });
    return /* @__PURE__ */ it.jsx(vf, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(dY, { data: j, margin: Tf, children: [
      /* @__PURE__ */ it.jsx(Fu, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: s, tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(
        jr,
        {
          tickFormatter: y,
          tick: ha,
          width: wf(y, j.flatMap((A) => [A.retirement, A.other, A.debt])),
          domain: ["auto", "auto"]
        }
      ),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: Mf,
          labelFormatter: (A) => Vi(A, !0),
          formatter: (A, E) => [p(A), E]
        }
      ),
      /* @__PURE__ */ it.jsx(Wa, { type: "monotone", dataKey: "retirement", stroke: "#34d399", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ it.jsx(Wa, { type: "monotone", dataKey: "other", stroke: "#60a5fa", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ it.jsx(Wa, { type: "monotone", dataKey: "debt", stroke: "#f87171", strokeWidth: 2, dot: !1 })
    ] }) });
  }
  const g = (w) => o ? w.toFixed(1) : d(w), b = (w) => o ? w.toFixed(2) : Zu(w, !0), O = e.filter((w) => {
    var j;
    return (((j = t[t.length - 1]) == null ? void 0 : j.values[w.id]) ?? 0) >= 0;
  }), S = e.length > O.length, x = t.map((w) => {
    const M = { ts: w.ts };
    for (const j of O) M[`a${j.id}`] = w.values[j.id] ?? 0;
    return S && (M.debt = Ev(w, e)), M;
  }), T = x.flatMap((w) => [
    O.reduce((M, j) => M + (w[`a${j.id}`] ?? 0), 0),
    w.debt ?? 0
  ]);
  return /* @__PURE__ */ it.jsx(vf, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(QM, { data: x, margin: Tf, children: [
    /* @__PURE__ */ it.jsx(Fu, { stroke: "#223047", strokeDasharray: "3 3" }),
    /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: s, tick: ha, minTickGap: 40 }),
    /* @__PURE__ */ it.jsx(jr, { tickFormatter: g, tick: ha, width: wf(g, T), domain: ["auto", "auto"] }),
    /* @__PURE__ */ it.jsx(
      dn,
      {
        contentStyle: Mf,
        labelFormatter: (w) => Vi(w, !0),
        formatter: (w, M) => {
          const j = O.find((A) => `a${A.id}` === M);
          return [b(w), j ? `${j.org_name || j.org_domain} · ${j.nickname || j.name}` : "Debt"];
        }
      }
    ),
    O.map((w, M) => /* @__PURE__ */ it.jsx(
      tr,
      {
        type: "monotone",
        dataKey: `a${w.id}`,
        stackId: "assets",
        stroke: Ef[M % Ef.length],
        fill: Ef[M % Ef.length],
        fillOpacity: 0.35
      },
      w.id
    )),
    S && /* @__PURE__ */ it.jsx(tr, { type: "monotone", dataKey: "debt", stroke: "#f87171", fill: "#f87171", fillOpacity: 0.25 })
  ] }) });
}
function pP({
  hass: t,
  config: e
}) {
  const n = uo.find((x) => x.key === (e.view ?? "all")) ?? uo[2], [r, o] = rt.useState(e.range ?? "6m"), [l, c] = rt.useState(
    e.mode && n.modes.includes(e.mode) ? e.mode : n.defaultMode
  ), { overview: s, series: h, masked: d, error: y, refresh: p } = Wb(t, e.entry, r), g = t0(s), b = rt.useMemo(() => g.filter(n.pick), [g, n]), O = rt.useMemo(() => {
    if (!h) return [];
    const x = new Set(b.map((T) => T.id));
    return aj(h.filter((T) => x.has(T.account_id)));
  }, [h, b]), S = e.show_controls !== !1;
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? n.label }),
      S && /* @__PURE__ */ it.jsxs("span", { className: "controls", children: [
        n.modes.length > 1 && /* @__PURE__ */ it.jsx(jf, { options: n.modes, value: l, onChange: c }),
        /* @__PURE__ */ it.jsx(jf, { options: Qb, value: r, onChange: o })
      ] }),
      s && /* @__PURE__ */ it.jsx(
        Jb,
        {
          hass: t,
          entry: e.entry,
          overview: s,
          autoConcealMinutes: e.auto_conceal_minutes,
          onChanged: p
        }
      )
    ] }),
    y && /* @__PURE__ */ it.jsx("div", { className: "error-box", children: y }),
    !y && (!s || !h) && /* @__PURE__ */ it.jsx("div", { className: "status", children: "Loading…" }),
    !y && s && h && O.length === 0 && /* @__PURE__ */ it.jsx("div", { className: "status", children: "No data for this view yet." }),
    !y && s && h && O.length > 0 && /* @__PURE__ */ it.jsx(
      pY,
      {
        rows: O,
        accounts: b,
        mode: l,
        range: r,
        masked: d,
        compact: e.compact !== !1
      }
    )
  ] });
}
var jg = { exports: {} }, Yu = {}, Cg = { exports: {} }, Dg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WM;
function yY() {
  return WM || (WM = 1, (function(t) {
    function e(N, I) {
      var W = N.length;
      N.push(I);
      t: for (; 0 < W; ) {
        var ot = W - 1 >>> 1, lt = N[ot];
        if (0 < o(lt, I))
          N[ot] = I, N[W] = lt, W = ot;
        else break t;
      }
    }
    function n(N) {
      return N.length === 0 ? null : N[0];
    }
    function r(N) {
      if (N.length === 0) return null;
      var I = N[0], W = N.pop();
      if (W !== I) {
        N[0] = W;
        t: for (var ot = 0, lt = N.length, P = lt >>> 1; ot < P; ) {
          var U = 2 * (ot + 1) - 1, et = N[U], ft = U + 1, vt = N[ft];
          if (0 > o(et, W))
            ft < lt && 0 > o(vt, et) ? (N[ot] = vt, N[ft] = W, ot = ft) : (N[ot] = et, N[U] = W, ot = U);
          else if (ft < lt && 0 > o(vt, W))
            N[ot] = vt, N[ft] = W, ot = ft;
          else break t;
        }
      }
      return I;
    }
    function o(N, I) {
      var W = N.sortIndex - I.sortIndex;
      return W !== 0 ? W : N.id - I.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      t.unstable_now = function() {
        return l.now();
      };
    } else {
      var c = Date, s = c.now();
      t.unstable_now = function() {
        return c.now() - s;
      };
    }
    var h = [], d = [], y = 1, p = null, g = 3, b = !1, O = !1, S = !1, x = !1, T = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function j(N) {
      for (var I = n(d); I !== null; ) {
        if (I.callback === null) r(d);
        else if (I.startTime <= N)
          r(d), I.sortIndex = I.expirationTime, e(h, I);
        else break;
        I = n(d);
      }
    }
    function A(N) {
      if (S = !1, j(N), !O)
        if (n(h) !== null)
          O = !0, E || (E = !0, $());
        else {
          var I = n(d);
          I !== null && V(A, I.startTime - N);
        }
    }
    var E = !1, D = -1, R = 5, z = -1;
    function F() {
      return x ? !0 : !(t.unstable_now() - z < R);
    }
    function k() {
      if (x = !1, E) {
        var N = t.unstable_now();
        z = N;
        var I = !0;
        try {
          t: {
            O = !1, S && (S = !1, w(D), D = -1), b = !0;
            var W = g;
            try {
              e: {
                for (j(N), p = n(h); p !== null && !(p.expirationTime > N && F()); ) {
                  var ot = p.callback;
                  if (typeof ot == "function") {
                    p.callback = null, g = p.priorityLevel;
                    var lt = ot(
                      p.expirationTime <= N
                    );
                    if (N = t.unstable_now(), typeof lt == "function") {
                      p.callback = lt, j(N), I = !0;
                      break e;
                    }
                    p === n(h) && r(h), j(N);
                  } else r(h);
                  p = n(h);
                }
                if (p !== null) I = !0;
                else {
                  var P = n(d);
                  P !== null && V(
                    A,
                    P.startTime - N
                  ), I = !1;
                }
              }
              break t;
            } finally {
              p = null, g = W, b = !1;
            }
            I = void 0;
          }
        } finally {
          I ? $() : E = !1;
        }
      }
    }
    var $;
    if (typeof M == "function")
      $ = function() {
        M(k);
      };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), Z = K.port2;
      K.port1.onmessage = k, $ = function() {
        Z.postMessage(null);
      };
    } else
      $ = function() {
        T(k, 0);
      };
    function V(N, I) {
      D = T(function() {
        N(t.unstable_now());
      }, I);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, t.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : R = 0 < N ? Math.floor(1e3 / N) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, t.unstable_next = function(N) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = g;
      }
      var W = g;
      g = I;
      try {
        return N();
      } finally {
        g = W;
      }
    }, t.unstable_requestPaint = function() {
      x = !0;
    }, t.unstable_runWithPriority = function(N, I) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var W = g;
      g = N;
      try {
        return I();
      } finally {
        g = W;
      }
    }, t.unstable_scheduleCallback = function(N, I, W) {
      var ot = t.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ot + W : ot) : W = ot, N) {
        case 1:
          var lt = -1;
          break;
        case 2:
          lt = 250;
          break;
        case 5:
          lt = 1073741823;
          break;
        case 4:
          lt = 1e4;
          break;
        default:
          lt = 5e3;
      }
      return lt = W + lt, N = {
        id: y++,
        callback: I,
        priorityLevel: N,
        startTime: W,
        expirationTime: lt,
        sortIndex: -1
      }, W > ot ? (N.sortIndex = W, e(d, N), n(h) === null && N === n(d) && (S ? (w(D), D = -1) : S = !0, V(A, W - ot))) : (N.sortIndex = lt, e(h, N), O || b || (O = !0, E || (E = !0, $()))), N;
    }, t.unstable_shouldYield = F, t.unstable_wrapCallback = function(N) {
      var I = g;
      return function() {
        var W = g;
        g = I;
        try {
          return N.apply(this, arguments);
        } finally {
          g = W;
        }
      };
    };
  })(Dg)), Dg;
}
var JM;
function mY() {
  return JM || (JM = 1, Cg.exports = yY()), Cg.exports;
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
var tj;
function gY() {
  if (tj) return Yu;
  tj = 1;
  var t = mY(), e = Zb(), n = uH();
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
  function s(a) {
    if (a.tag === 31) {
      var i = a.memoizedState;
      if (i === null && (a = a.alternate, a !== null && (i = a.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function h(a) {
    if (l(a) !== a)
      throw Error(r(188));
  }
  function d(a) {
    var i = a.alternate;
    if (!i) {
      if (i = l(a), i === null) throw Error(r(188));
      return i !== a ? null : a;
    }
    for (var u = a, f = i; ; ) {
      var v = u.return;
      if (v === null) break;
      var m = v.alternate;
      if (m === null) {
        if (f = v.return, f !== null) {
          u = f;
          continue;
        }
        break;
      }
      if (v.child === m.child) {
        for (m = v.child; m; ) {
          if (m === u) return h(v), a;
          if (m === f) return h(v), i;
          m = m.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== f.return) u = v, f = m;
      else {
        for (var _ = !1, C = v.child; C; ) {
          if (C === u) {
            _ = !0, u = v, f = m;
            break;
          }
          if (C === f) {
            _ = !0, f = v, u = m;
            break;
          }
          C = C.sibling;
        }
        if (!_) {
          for (C = m.child; C; ) {
            if (C === u) {
              _ = !0, u = m, f = v;
              break;
            }
            if (C === f) {
              _ = !0, f = m, u = v;
              break;
            }
            C = C.sibling;
          }
          if (!_) throw Error(r(189));
        }
      }
      if (u.alternate !== f) throw Error(r(190));
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
  var p = Object.assign, g = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), M = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), F = Symbol.for("react.memo_cache_sentinel"), k = Symbol.iterator;
  function $(a) {
    return a === null || typeof a != "object" ? null : (a = k && a[k] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var K = Symbol.for("react.client.reference");
  function Z(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === K ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case S:
        return "Fragment";
      case T:
        return "Profiler";
      case x:
        return "StrictMode";
      case A:
        return "Suspense";
      case E:
        return "SuspenseList";
      case z:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case O:
          return "Portal";
        case M:
          return a.displayName || "Context";
        case w:
          return (a._context.displayName || "Context") + ".Consumer";
        case j:
          var i = a.render;
          return a = a.displayName, a || (a = i.displayName || i.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case D:
          return i = a.displayName || null, i !== null ? i : Z(a.type) || "Memo";
        case R:
          i = a._payload, a = a._init;
          try {
            return Z(a(i));
          } catch {
          }
      }
    return null;
  }
  var V = Array.isArray, N = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ot = [], lt = -1;
  function P(a) {
    return { current: a };
  }
  function U(a) {
    0 > lt || (a.current = ot[lt], ot[lt] = null, lt--);
  }
  function et(a, i) {
    lt++, ot[lt] = a.current, a.current = i;
  }
  var ft = P(null), vt = P(null), mt = P(null), jt = P(null);
  function kt(a, i) {
    switch (et(mt, i), et(vt, a), et(ft, null), i.nodeType) {
      case 9:
      case 11:
        a = (a = i.documentElement) && (a = a.namespaceURI) ? C_(a) : 0;
        break;
      default:
        if (a = i.tagName, i = i.namespaceURI)
          i = C_(i), a = D_(i, a);
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
    U(ft), et(ft, a);
  }
  function ct() {
    U(ft), U(vt), U(mt);
  }
  function xt(a) {
    a.memoizedState !== null && et(jt, a);
    var i = ft.current, u = D_(i, a.type);
    i !== u && (et(vt, a), et(ft, u));
  }
  function St(a) {
    vt.current === a && (U(ft), U(vt)), jt.current === a && (U(jt), Du._currentValue = W);
  }
  var ut, te;
  function wt(a) {
    if (ut === void 0)
      try {
        throw Error();
      } catch (u) {
        var i = u.stack.trim().match(/\n( *(at )?)/);
        ut = i && i[1] || "", te = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ut + a + te;
  }
  var oe = !1;
  function ue(a, i) {
    if (!a || oe) return "";
    oe = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var f = {
        DetermineComponentFrameRoot: function() {
          try {
            if (i) {
              var at = function() {
                throw Error();
              };
              if (Object.defineProperty(at.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(at, []);
                } catch (Q) {
                  var X = Q;
                }
                Reflect.construct(a, [], at);
              } else {
                try {
                  at.call();
                } catch (Q) {
                  X = Q;
                }
                a.call(at.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                X = Q;
              }
              (at = a()) && typeof at.catch == "function" && at.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && X && typeof Q.stack == "string")
              return [Q.stack, X.stack];
          }
          return [null, null];
        }
      };
      f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var v = Object.getOwnPropertyDescriptor(
        f.DetermineComponentFrameRoot,
        "name"
      );
      v && v.configurable && Object.defineProperty(
        f.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var m = f.DetermineComponentFrameRoot(), _ = m[0], C = m[1];
      if (_ && C) {
        var q = _.split(`
`), Y = C.split(`
`);
        for (v = f = 0; f < q.length && !q[f].includes("DetermineComponentFrameRoot"); )
          f++;
        for (; v < Y.length && !Y[v].includes(
          "DetermineComponentFrameRoot"
        ); )
          v++;
        if (f === q.length || v === Y.length)
          for (f = q.length - 1, v = Y.length - 1; 1 <= f && 0 <= v && q[f] !== Y[v]; )
            v--;
        for (; 1 <= f && 0 <= v; f--, v--)
          if (q[f] !== Y[v]) {
            if (f !== 1 || v !== 1)
              do
                if (f--, v--, 0 > v || q[f] !== Y[v]) {
                  var J = `
` + q[f].replace(" at new ", " at ");
                  return a.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", a.displayName)), J;
                }
              while (1 <= f && 0 <= v);
            break;
          }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = u;
    }
    return (u = a ? a.displayName || a.name : "") ? wt(u) : "";
  }
  function ze(a, i) {
    switch (a.tag) {
      case 26:
      case 27:
      case 5:
        return wt(a.type);
      case 16:
        return wt("Lazy");
      case 13:
        return a.child !== i && i !== null ? wt("Suspense Fallback") : wt("Suspense");
      case 19:
        return wt("SuspenseList");
      case 0:
      case 15:
        return ue(a.type, !1);
      case 11:
        return ue(a.type.render, !1);
      case 1:
        return ue(a.type, !0);
      case 31:
        return wt("Activity");
      default:
        return "";
    }
  }
  function Nn(a) {
    try {
      var i = "", u = null;
      do
        i += ze(a, u), u = a, a = a.return;
      while (a);
      return i;
    } catch (f) {
      return `
Error generating stack: ` + f.message + `
` + f.stack;
    }
  }
  var Gn = Object.prototype.hasOwnProperty, kr = t.unstable_scheduleCallback, Rn = t.unstable_cancelCallback, ar = t.unstable_shouldYield, Ho = t.unstable_requestPaint, $e = t.unstable_now, Yl = t.unstable_getCurrentPriorityLevel, l1 = t.unstable_ImmediatePriority, c1 = t.unstable_UserBlockingPriority, Xl = t.unstable_NormalPriority, mP = t.unstable_LowPriority, f1 = t.unstable_IdlePriority, gP = t.log, bP = t.unstable_setDisableYieldValue, Io = null, tn = null;
  function Ur(a) {
    if (typeof gP == "function" && bP(a), tn && typeof tn.setStrictMode == "function")
      try {
        tn.setStrictMode(Io, a);
      } catch {
      }
  }
  var en = Math.clz32 ? Math.clz32 : _P, xP = Math.log, SP = Math.LN2;
  function _P(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (xP(a) / SP | 0) | 0;
  }
  var Kl = 256, Vl = 262144, Fl = 4194304;
  function Aa(a) {
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
  function Zl(a, i, u) {
    var f = a.pendingLanes;
    if (f === 0) return 0;
    var v = 0, m = a.suspendedLanes, _ = a.pingedLanes;
    a = a.warmLanes;
    var C = f & 134217727;
    return C !== 0 ? (f = C & ~m, f !== 0 ? v = Aa(f) : (_ &= C, _ !== 0 ? v = Aa(_) : u || (u = C & ~a, u !== 0 && (v = Aa(u))))) : (C = f & ~m, C !== 0 ? v = Aa(C) : _ !== 0 ? v = Aa(_) : u || (u = f & ~a, u !== 0 && (v = Aa(u)))), v === 0 ? 0 : i !== 0 && i !== v && (i & m) === 0 && (m = v & -v, u = i & -i, m >= u || m === 32 && (u & 4194048) !== 0) ? i : v;
  }
  function Go(a, i) {
    return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & i) === 0;
  }
  function OP(a, i) {
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
  function s1() {
    var a = Fl;
    return Fl <<= 1, (Fl & 62914560) === 0 && (Fl = 4194304), a;
  }
  function dh(a) {
    for (var i = [], u = 0; 31 > u; u++) i.push(a);
    return i;
  }
  function Yo(a, i) {
    a.pendingLanes |= i, i !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
  }
  function AP(a, i, u, f, v, m) {
    var _ = a.pendingLanes;
    a.pendingLanes = u, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= u, a.entangledLanes &= u, a.errorRecoveryDisabledLanes &= u, a.shellSuspendCounter = 0;
    var C = a.entanglements, q = a.expirationTimes, Y = a.hiddenUpdates;
    for (u = _ & ~u; 0 < u; ) {
      var J = 31 - en(u), at = 1 << J;
      C[J] = 0, q[J] = -1;
      var X = Y[J];
      if (X !== null)
        for (Y[J] = null, J = 0; J < X.length; J++) {
          var Q = X[J];
          Q !== null && (Q.lane &= -536870913);
        }
      u &= ~at;
    }
    f !== 0 && h1(a, f, 0), m !== 0 && v === 0 && a.tag !== 0 && (a.suspendedLanes |= m & ~(_ & ~i));
  }
  function h1(a, i, u) {
    a.pendingLanes |= i, a.suspendedLanes &= ~i;
    var f = 31 - en(i);
    a.entangledLanes |= i, a.entanglements[f] = a.entanglements[f] | 1073741824 | u & 261930;
  }
  function d1(a, i) {
    var u = a.entangledLanes |= i;
    for (a = a.entanglements; u; ) {
      var f = 31 - en(u), v = 1 << f;
      v & i | a[f] & i && (a[f] |= i), u &= ~v;
    }
  }
  function v1(a, i) {
    var u = i & -i;
    return u = (u & 42) !== 0 ? 1 : vh(u), (u & (a.suspendedLanes | i)) !== 0 ? 0 : u;
  }
  function vh(a) {
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
  function ph(a) {
    return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function p1() {
    var a = I.p;
    return a !== 0 ? a : (a = window.event, a === void 0 ? 32 : tO(a.type));
  }
  function y1(a, i) {
    var u = I.p;
    try {
      return I.p = a, i();
    } finally {
      I.p = u;
    }
  }
  var Hr = Math.random().toString(36).slice(2), Me = "__reactFiber$" + Hr, Ye = "__reactProps$" + Hr, fi = "__reactContainer$" + Hr, yh = "__reactEvents$" + Hr, wP = "__reactListeners$" + Hr, TP = "__reactHandles$" + Hr, m1 = "__reactResources$" + Hr, Xo = "__reactMarker$" + Hr;
  function mh(a) {
    delete a[Me], delete a[Ye], delete a[yh], delete a[wP], delete a[TP];
  }
  function si(a) {
    var i = a[Me];
    if (i) return i;
    for (var u = a.parentNode; u; ) {
      if (i = u[fi] || u[Me]) {
        if (u = i.alternate, i.child !== null || u !== null && u.child !== null)
          for (a = B_(a); a !== null; ) {
            if (u = a[Me]) return u;
            a = B_(a);
          }
        return i;
      }
      a = u, u = a.parentNode;
    }
    return null;
  }
  function hi(a) {
    if (a = a[Me] || a[fi]) {
      var i = a.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3)
        return a;
    }
    return null;
  }
  function Ko(a) {
    var i = a.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return a.stateNode;
    throw Error(r(33));
  }
  function di(a) {
    var i = a[m1];
    return i || (i = a[m1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function Ae(a) {
    a[Xo] = !0;
  }
  var g1 = /* @__PURE__ */ new Set(), b1 = {};
  function wa(a, i) {
    vi(a, i), vi(a + "Capture", i);
  }
  function vi(a, i) {
    for (b1[a] = i, a = 0; a < i.length; a++)
      g1.add(i[a]);
  }
  var EP = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), x1 = {}, S1 = {};
  function MP(a) {
    return Gn.call(S1, a) ? !0 : Gn.call(x1, a) ? !1 : EP.test(a) ? S1[a] = !0 : (x1[a] = !0, !1);
  }
  function Ql(a, i, u) {
    if (MP(i))
      if (u === null) a.removeAttribute(i);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            a.removeAttribute(i);
            return;
          case "boolean":
            var f = i.toLowerCase().slice(0, 5);
            if (f !== "data-" && f !== "aria-") {
              a.removeAttribute(i);
              return;
            }
        }
        a.setAttribute(i, "" + u);
      }
  }
  function Wl(a, i, u) {
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
  function ir(a, i, u, f) {
    if (f === null) a.removeAttribute(u);
    else {
      switch (typeof f) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(u);
          return;
      }
      a.setAttributeNS(i, u, "" + f);
    }
  }
  function pn(a) {
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
  function _1(a) {
    var i = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function jP(a, i, u) {
    var f = Object.getOwnPropertyDescriptor(
      a.constructor.prototype,
      i
    );
    if (!a.hasOwnProperty(i) && typeof f < "u" && typeof f.get == "function" && typeof f.set == "function") {
      var v = f.get, m = f.set;
      return Object.defineProperty(a, i, {
        configurable: !0,
        get: function() {
          return v.call(this);
        },
        set: function(_) {
          u = "" + _, m.call(this, _);
        }
      }), Object.defineProperty(a, i, {
        enumerable: f.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(_) {
          u = "" + _;
        },
        stopTracking: function() {
          a._valueTracker = null, delete a[i];
        }
      };
    }
  }
  function gh(a) {
    if (!a._valueTracker) {
      var i = _1(a) ? "checked" : "value";
      a._valueTracker = jP(
        a,
        i,
        "" + a[i]
      );
    }
  }
  function O1(a) {
    if (!a) return !1;
    var i = a._valueTracker;
    if (!i) return !0;
    var u = i.getValue(), f = "";
    return a && (f = _1(a) ? a.checked ? "true" : "false" : a.value), a = f, a !== u ? (i.setValue(a), !0) : !1;
  }
  function Jl(a) {
    if (a = a || (typeof document < "u" ? document : void 0), typeof a > "u") return null;
    try {
      return a.activeElement || a.body;
    } catch {
      return a.body;
    }
  }
  var CP = /[\n"\\]/g;
  function yn(a) {
    return a.replace(
      CP,
      function(i) {
        return "\\" + i.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function bh(a, i, u, f, v, m, _, C) {
    a.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? a.type = _ : a.removeAttribute("type"), i != null ? _ === "number" ? (i === 0 && a.value === "" || a.value != i) && (a.value = "" + pn(i)) : a.value !== "" + pn(i) && (a.value = "" + pn(i)) : _ !== "submit" && _ !== "reset" || a.removeAttribute("value"), i != null ? xh(a, _, pn(i)) : u != null ? xh(a, _, pn(u)) : f != null && a.removeAttribute("value"), v == null && m != null && (a.defaultChecked = !!m), v != null && (a.checked = v && typeof v != "function" && typeof v != "symbol"), C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? a.name = "" + pn(C) : a.removeAttribute("name");
  }
  function A1(a, i, u, f, v, m, _, C) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (a.type = m), i != null || u != null) {
      if (!(m !== "submit" && m !== "reset" || i != null)) {
        gh(a);
        return;
      }
      u = u != null ? "" + pn(u) : "", i = i != null ? "" + pn(i) : u, C || i === a.value || (a.value = i), a.defaultValue = i;
    }
    f = f ?? v, f = typeof f != "function" && typeof f != "symbol" && !!f, a.checked = C ? a.checked : !!f, a.defaultChecked = !!f, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (a.name = _), gh(a);
  }
  function xh(a, i, u) {
    i === "number" && Jl(a.ownerDocument) === a || a.defaultValue === "" + u || (a.defaultValue = "" + u);
  }
  function pi(a, i, u, f) {
    if (a = a.options, i) {
      i = {};
      for (var v = 0; v < u.length; v++)
        i["$" + u[v]] = !0;
      for (u = 0; u < a.length; u++)
        v = i.hasOwnProperty("$" + a[u].value), a[u].selected !== v && (a[u].selected = v), v && f && (a[u].defaultSelected = !0);
    } else {
      for (u = "" + pn(u), i = null, v = 0; v < a.length; v++) {
        if (a[v].value === u) {
          a[v].selected = !0, f && (a[v].defaultSelected = !0);
          return;
        }
        i !== null || a[v].disabled || (i = a[v]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function w1(a, i, u) {
    if (i != null && (i = "" + pn(i), i !== a.value && (a.value = i), u == null)) {
      a.defaultValue !== i && (a.defaultValue = i);
      return;
    }
    a.defaultValue = u != null ? "" + pn(u) : "";
  }
  function T1(a, i, u, f) {
    if (i == null) {
      if (f != null) {
        if (u != null) throw Error(r(92));
        if (V(f)) {
          if (1 < f.length) throw Error(r(93));
          f = f[0];
        }
        u = f;
      }
      u == null && (u = ""), i = u;
    }
    u = pn(i), a.defaultValue = u, f = a.textContent, f === u && f !== "" && f !== null && (a.value = f), gh(a);
  }
  function yi(a, i) {
    if (i) {
      var u = a.firstChild;
      if (u && u === a.lastChild && u.nodeType === 3) {
        u.nodeValue = i;
        return;
      }
    }
    a.textContent = i;
  }
  var DP = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function E1(a, i, u) {
    var f = i.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? f ? a.setProperty(i, "") : i === "float" ? a.cssFloat = "" : a[i] = "" : f ? a.setProperty(i, u) : typeof u != "number" || u === 0 || DP.has(i) ? i === "float" ? a.cssFloat = u : a[i] = ("" + u).trim() : a[i] = u + "px";
  }
  function M1(a, i, u) {
    if (i != null && typeof i != "object")
      throw Error(r(62));
    if (a = a.style, u != null) {
      for (var f in u)
        !u.hasOwnProperty(f) || i != null && i.hasOwnProperty(f) || (f.indexOf("--") === 0 ? a.setProperty(f, "") : f === "float" ? a.cssFloat = "" : a[f] = "");
      for (var v in i)
        f = i[v], i.hasOwnProperty(v) && u[v] !== f && E1(a, v, f);
    } else
      for (var m in i)
        i.hasOwnProperty(m) && E1(a, m, i[m]);
  }
  function Sh(a) {
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
  var PP = /* @__PURE__ */ new Map([
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
  ]), NP = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function tc(a) {
    return NP.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
  }
  function or() {
  }
  var _h = null;
  function Oh(a) {
    return a = a.target || a.srcElement || window, a.correspondingUseElement && (a = a.correspondingUseElement), a.nodeType === 3 ? a.parentNode : a;
  }
  var mi = null, gi = null;
  function j1(a) {
    var i = hi(a);
    if (i && (a = i.stateNode)) {
      var u = a[Ye] || null;
      t: switch (a = i.stateNode, i.type) {
        case "input":
          if (bh(
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
              'input[name="' + yn(
                "" + i
              ) + '"][type="radio"]'
            ), i = 0; i < u.length; i++) {
              var f = u[i];
              if (f !== a && f.form === a.form) {
                var v = f[Ye] || null;
                if (!v) throw Error(r(90));
                bh(
                  f,
                  v.value,
                  v.defaultValue,
                  v.defaultValue,
                  v.checked,
                  v.defaultChecked,
                  v.type,
                  v.name
                );
              }
            }
            for (i = 0; i < u.length; i++)
              f = u[i], f.form === a.form && O1(f);
          }
          break t;
        case "textarea":
          w1(a, u.value, u.defaultValue);
          break t;
        case "select":
          i = u.value, i != null && pi(a, !!u.multiple, i, !1);
      }
    }
  }
  var Ah = !1;
  function C1(a, i, u) {
    if (Ah) return a(i, u);
    Ah = !0;
    try {
      var f = a(i);
      return f;
    } finally {
      if (Ah = !1, (mi !== null || gi !== null) && (Uc(), mi && (i = mi, a = gi, gi = mi = null, j1(i), a)))
        for (i = 0; i < a.length; i++) j1(a[i]);
    }
  }
  function Vo(a, i) {
    var u = a.stateNode;
    if (u === null) return null;
    var f = u[Ye] || null;
    if (f === null) return null;
    u = f[i];
    t: switch (i) {
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
        (f = !f.disabled) || (a = a.type, f = !(a === "button" || a === "input" || a === "select" || a === "textarea")), a = !f;
        break t;
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
  var ur = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wh = !1;
  if (ur)
    try {
      var Fo = {};
      Object.defineProperty(Fo, "passive", {
        get: function() {
          wh = !0;
        }
      }), window.addEventListener("test", Fo, Fo), window.removeEventListener("test", Fo, Fo);
    } catch {
      wh = !1;
    }
  var Ir = null, Th = null, ec = null;
  function D1() {
    if (ec) return ec;
    var a, i = Th, u = i.length, f, v = "value" in Ir ? Ir.value : Ir.textContent, m = v.length;
    for (a = 0; a < u && i[a] === v[a]; a++) ;
    var _ = u - a;
    for (f = 1; f <= _ && i[u - f] === v[m - f]; f++) ;
    return ec = v.slice(a, 1 < f ? 1 - f : void 0);
  }
  function nc(a) {
    var i = a.keyCode;
    return "charCode" in a ? (a = a.charCode, a === 0 && i === 13 && (a = 13)) : a = i, a === 10 && (a = 13), 32 <= a || a === 13 ? a : 0;
  }
  function rc() {
    return !0;
  }
  function P1() {
    return !1;
  }
  function Xe(a) {
    function i(u, f, v, m, _) {
      this._reactName = u, this._targetInst = v, this.type = f, this.nativeEvent = m, this.target = _, this.currentTarget = null;
      for (var C in a)
        a.hasOwnProperty(C) && (u = a[C], this[C] = u ? u(m) : m[C]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? rc : P1, this.isPropagationStopped = P1, this;
    }
    return p(i.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = rc);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = rc);
      },
      persist: function() {
      },
      isPersistent: rc
    }), i;
  }
  var Ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ac = Xe(Ta), Zo = p({}, Ta, { view: 0, detail: 0 }), RP = Xe(Zo), Eh, Mh, Qo, ic = p({}, Zo, {
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
    getModifierState: Ch,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
      return "movementX" in a ? a.movementX : (a !== Qo && (Qo && a.type === "mousemove" ? (Eh = a.screenX - Qo.screenX, Mh = a.screenY - Qo.screenY) : Mh = Eh = 0, Qo = a), Eh);
    },
    movementY: function(a) {
      return "movementY" in a ? a.movementY : Mh;
    }
  }), N1 = Xe(ic), qP = p({}, ic, { dataTransfer: 0 }), zP = Xe(qP), $P = p({}, Zo, { relatedTarget: 0 }), jh = Xe($P), BP = p({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), LP = Xe(BP), kP = p({}, Ta, {
    clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }), UP = Xe(kP), HP = p({}, Ta, { data: 0 }), R1 = Xe(HP), IP = {
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
  }, GP = {
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
  }, YP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function XP(a) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(a) : (a = YP[a]) ? !!i[a] : !1;
  }
  function Ch() {
    return XP;
  }
  var KP = p({}, Zo, {
    key: function(a) {
      if (a.key) {
        var i = IP[a.key] || a.key;
        if (i !== "Unidentified") return i;
      }
      return a.type === "keypress" ? (a = nc(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? GP[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ch,
    charCode: function(a) {
      return a.type === "keypress" ? nc(a) : 0;
    },
    keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    },
    which: function(a) {
      return a.type === "keypress" ? nc(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }
  }), VP = Xe(KP), FP = p({}, ic, {
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
  }), q1 = Xe(FP), ZP = p({}, Zo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ch
  }), QP = Xe(ZP), WP = p({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), JP = Xe(WP), tN = p({}, ic, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), eN = Xe(tN), nN = p({}, Ta, {
    newState: 0,
    oldState: 0
  }), rN = Xe(nN), aN = [9, 13, 27, 32], Dh = ur && "CompositionEvent" in window, Wo = null;
  ur && "documentMode" in document && (Wo = document.documentMode);
  var iN = ur && "TextEvent" in window && !Wo, z1 = ur && (!Dh || Wo && 8 < Wo && 11 >= Wo), $1 = " ", B1 = !1;
  function L1(a, i) {
    switch (a) {
      case "keyup":
        return aN.indexOf(i.keyCode) !== -1;
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
  function k1(a) {
    return a = a.detail, typeof a == "object" && "data" in a ? a.data : null;
  }
  var bi = !1;
  function oN(a, i) {
    switch (a) {
      case "compositionend":
        return k1(i);
      case "keypress":
        return i.which !== 32 ? null : (B1 = !0, $1);
      case "textInput":
        return a = i.data, a === $1 && B1 ? null : a;
      default:
        return null;
    }
  }
  function uN(a, i) {
    if (bi)
      return a === "compositionend" || !Dh && L1(a, i) ? (a = D1(), ec = Th = Ir = null, bi = !1, a) : null;
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
        return z1 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var lN = {
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
  function U1(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i === "input" ? !!lN[a.type] : i === "textarea";
  }
  function H1(a, i, u, f) {
    mi ? gi ? gi.push(f) : gi = [f] : mi = f, i = Vc(i, "onChange"), 0 < i.length && (u = new ac(
      "onChange",
      "change",
      null,
      u,
      f
    ), a.push({ event: u, listeners: i }));
  }
  var Jo = null, tu = null;
  function cN(a) {
    A_(a, 0);
  }
  function oc(a) {
    var i = Ko(a);
    if (O1(i)) return a;
  }
  function I1(a, i) {
    if (a === "change") return i;
  }
  var G1 = !1;
  if (ur) {
    var Ph;
    if (ur) {
      var Nh = "oninput" in document;
      if (!Nh) {
        var Y1 = document.createElement("div");
        Y1.setAttribute("oninput", "return;"), Nh = typeof Y1.oninput == "function";
      }
      Ph = Nh;
    } else Ph = !1;
    G1 = Ph && (!document.documentMode || 9 < document.documentMode);
  }
  function X1() {
    Jo && (Jo.detachEvent("onpropertychange", K1), tu = Jo = null);
  }
  function K1(a) {
    if (a.propertyName === "value" && oc(tu)) {
      var i = [];
      H1(
        i,
        tu,
        a,
        Oh(a)
      ), C1(cN, i);
    }
  }
  function fN(a, i, u) {
    a === "focusin" ? (X1(), Jo = i, tu = u, Jo.attachEvent("onpropertychange", K1)) : a === "focusout" && X1();
  }
  function sN(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return oc(tu);
  }
  function hN(a, i) {
    if (a === "click") return oc(i);
  }
  function dN(a, i) {
    if (a === "input" || a === "change")
      return oc(i);
  }
  function vN(a, i) {
    return a === i && (a !== 0 || 1 / a === 1 / i) || a !== a && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : vN;
  function eu(a, i) {
    if (nn(a, i)) return !0;
    if (typeof a != "object" || a === null || typeof i != "object" || i === null)
      return !1;
    var u = Object.keys(a), f = Object.keys(i);
    if (u.length !== f.length) return !1;
    for (f = 0; f < u.length; f++) {
      var v = u[f];
      if (!Gn.call(i, v) || !nn(a[v], i[v]))
        return !1;
    }
    return !0;
  }
  function V1(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function F1(a, i) {
    var u = V1(a);
    a = 0;
    for (var f; u; ) {
      if (u.nodeType === 3) {
        if (f = a + u.textContent.length, a <= i && f >= i)
          return { node: u, offset: i - a };
        a = f;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = V1(u);
    }
  }
  function Z1(a, i) {
    return a && i ? a === i ? !0 : a && a.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Z1(a, i.parentNode) : "contains" in a ? a.contains(i) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Q1(a) {
    a = a != null && a.ownerDocument != null && a.ownerDocument.defaultView != null ? a.ownerDocument.defaultView : window;
    for (var i = Jl(a.document); i instanceof a.HTMLIFrameElement; ) {
      try {
        var u = typeof i.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) a = i.contentWindow;
      else break;
      i = Jl(a.document);
    }
    return i;
  }
  function Rh(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i && (i === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || i === "textarea" || a.contentEditable === "true");
  }
  var pN = ur && "documentMode" in document && 11 >= document.documentMode, xi = null, qh = null, nu = null, zh = !1;
  function W1(a, i, u) {
    var f = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    zh || xi == null || xi !== Jl(f) || (f = xi, "selectionStart" in f && Rh(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = {
      anchorNode: f.anchorNode,
      anchorOffset: f.anchorOffset,
      focusNode: f.focusNode,
      focusOffset: f.focusOffset
    }), nu && eu(nu, f) || (nu = f, f = Vc(qh, "onSelect"), 0 < f.length && (i = new ac(
      "onSelect",
      "select",
      null,
      i,
      u
    ), a.push({ event: i, listeners: f }), i.target = xi)));
  }
  function Ea(a, i) {
    var u = {};
    return u[a.toLowerCase()] = i.toLowerCase(), u["Webkit" + a] = "webkit" + i, u["Moz" + a] = "moz" + i, u;
  }
  var Si = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, $h = {}, J1 = {};
  ur && (J1 = document.createElement("div").style, "AnimationEvent" in window || (delete Si.animationend.animation, delete Si.animationiteration.animation, delete Si.animationstart.animation), "TransitionEvent" in window || delete Si.transitionend.transition);
  function Ma(a) {
    if ($h[a]) return $h[a];
    if (!Si[a]) return a;
    var i = Si[a], u;
    for (u in i)
      if (i.hasOwnProperty(u) && u in J1)
        return $h[a] = i[u];
    return a;
  }
  var tx = Ma("animationend"), ex = Ma("animationiteration"), nx = Ma("animationstart"), yN = Ma("transitionrun"), mN = Ma("transitionstart"), gN = Ma("transitioncancel"), rx = Ma("transitionend"), ax = /* @__PURE__ */ new Map(), Bh = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Bh.push("scrollEnd");
  function qn(a, i) {
    ax.set(a, i), wa(i, [a]);
  }
  var uc = typeof reportError == "function" ? reportError : function(a) {
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
  }, mn = [], _i = 0, Lh = 0;
  function lc() {
    for (var a = _i, i = Lh = _i = 0; i < a; ) {
      var u = mn[i];
      mn[i++] = null;
      var f = mn[i];
      mn[i++] = null;
      var v = mn[i];
      mn[i++] = null;
      var m = mn[i];
      if (mn[i++] = null, f !== null && v !== null) {
        var _ = f.pending;
        _ === null ? v.next = v : (v.next = _.next, _.next = v), f.pending = v;
      }
      m !== 0 && ix(u, v, m);
    }
  }
  function cc(a, i, u, f) {
    mn[_i++] = a, mn[_i++] = i, mn[_i++] = u, mn[_i++] = f, Lh |= f, a.lanes |= f, a = a.alternate, a !== null && (a.lanes |= f);
  }
  function kh(a, i, u, f) {
    return cc(a, i, u, f), fc(a);
  }
  function ja(a, i) {
    return cc(a, null, null, i), fc(a);
  }
  function ix(a, i, u) {
    a.lanes |= u;
    var f = a.alternate;
    f !== null && (f.lanes |= u);
    for (var v = !1, m = a.return; m !== null; )
      m.childLanes |= u, f = m.alternate, f !== null && (f.childLanes |= u), m.tag === 22 && (a = m.stateNode, a === null || a._visibility & 1 || (v = !0)), a = m, m = m.return;
    return a.tag === 3 ? (m = a.stateNode, v && i !== null && (v = 31 - en(u), a = m.hiddenUpdates, f = a[v], f === null ? a[v] = [i] : f.push(i), i.lane = u | 536870912), m) : null;
  }
  function fc(a) {
    if (50 < Au)
      throw Au = 0, Fd = null, Error(r(185));
    for (var i = a.return; i !== null; )
      a = i, i = a.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var Oi = {};
  function bN(a, i, u, f) {
    this.tag = a, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rn(a, i, u, f) {
    return new bN(a, i, u, f);
  }
  function Uh(a) {
    return a = a.prototype, !(!a || !a.isReactComponent);
  }
  function lr(a, i) {
    var u = a.alternate;
    return u === null ? (u = rn(
      a.tag,
      i,
      a.key,
      a.mode
    ), u.elementType = a.elementType, u.type = a.type, u.stateNode = a.stateNode, u.alternate = a, a.alternate = u) : (u.pendingProps = i, u.type = a.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = a.flags & 65011712, u.childLanes = a.childLanes, u.lanes = a.lanes, u.child = a.child, u.memoizedProps = a.memoizedProps, u.memoizedState = a.memoizedState, u.updateQueue = a.updateQueue, i = a.dependencies, u.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, u.sibling = a.sibling, u.index = a.index, u.ref = a.ref, u.refCleanup = a.refCleanup, u;
  }
  function ox(a, i) {
    a.flags &= 65011714;
    var u = a.alternate;
    return u === null ? (a.childLanes = 0, a.lanes = i, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = u.childLanes, a.lanes = u.lanes, a.child = u.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = u.memoizedProps, a.memoizedState = u.memoizedState, a.updateQueue = u.updateQueue, a.type = u.type, i = u.dependencies, a.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), a;
  }
  function sc(a, i, u, f, v, m) {
    var _ = 0;
    if (f = a, typeof a == "function") Uh(a) && (_ = 1);
    else if (typeof a == "string")
      _ = AR(
        a,
        u,
        ft.current
      ) ? 26 : a === "html" || a === "head" || a === "body" ? 27 : 5;
    else
      t: switch (a) {
        case z:
          return a = rn(31, u, i, v), a.elementType = z, a.lanes = m, a;
        case S:
          return Ca(u.children, v, m, i);
        case x:
          _ = 8, v |= 24;
          break;
        case T:
          return a = rn(12, u, i, v | 2), a.elementType = T, a.lanes = m, a;
        case A:
          return a = rn(13, u, i, v), a.elementType = A, a.lanes = m, a;
        case E:
          return a = rn(19, u, i, v), a.elementType = E, a.lanes = m, a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case M:
                _ = 10;
                break t;
              case w:
                _ = 9;
                break t;
              case j:
                _ = 11;
                break t;
              case D:
                _ = 14;
                break t;
              case R:
                _ = 16, f = null;
                break t;
            }
          _ = 29, u = Error(
            r(130, a === null ? "null" : typeof a, "")
          ), f = null;
      }
    return i = rn(_, u, i, v), i.elementType = a, i.type = f, i.lanes = m, i;
  }
  function Ca(a, i, u, f) {
    return a = rn(7, a, f, i), a.lanes = u, a;
  }
  function Hh(a, i, u) {
    return a = rn(6, a, null, i), a.lanes = u, a;
  }
  function ux(a) {
    var i = rn(18, null, null, 0);
    return i.stateNode = a, i;
  }
  function Ih(a, i, u) {
    return i = rn(
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
  var lx = /* @__PURE__ */ new WeakMap();
  function gn(a, i) {
    if (typeof a == "object" && a !== null) {
      var u = lx.get(a);
      return u !== void 0 ? u : (i = {
        value: a,
        source: i,
        stack: Nn(i)
      }, lx.set(a, i), i);
    }
    return {
      value: a,
      source: i,
      stack: Nn(i)
    };
  }
  var Ai = [], wi = 0, hc = null, ru = 0, bn = [], xn = 0, Gr = null, Yn = 1, Xn = "";
  function cr(a, i) {
    Ai[wi++] = ru, Ai[wi++] = hc, hc = a, ru = i;
  }
  function cx(a, i, u) {
    bn[xn++] = Yn, bn[xn++] = Xn, bn[xn++] = Gr, Gr = a;
    var f = Yn;
    a = Xn;
    var v = 32 - en(f) - 1;
    f &= ~(1 << v), u += 1;
    var m = 32 - en(i) + v;
    if (30 < m) {
      var _ = v - v % 5;
      m = (f & (1 << _) - 1).toString(32), f >>= _, v -= _, Yn = 1 << 32 - en(i) + v | u << v | f, Xn = m + a;
    } else
      Yn = 1 << m | u << v | f, Xn = a;
  }
  function Gh(a) {
    a.return !== null && (cr(a, 1), cx(a, 1, 0));
  }
  function Yh(a) {
    for (; a === hc; )
      hc = Ai[--wi], Ai[wi] = null, ru = Ai[--wi], Ai[wi] = null;
    for (; a === Gr; )
      Gr = bn[--xn], bn[xn] = null, Xn = bn[--xn], bn[xn] = null, Yn = bn[--xn], bn[xn] = null;
  }
  function fx(a, i) {
    bn[xn++] = Yn, bn[xn++] = Xn, bn[xn++] = Gr, Yn = i.id, Xn = i.overflow, Gr = a;
  }
  var je = null, ee = null, Rt = !1, Yr = null, Sn = !1, Xh = Error(r(519));
  function Xr(a) {
    var i = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw au(gn(i, a)), Xh;
  }
  function sx(a) {
    var i = a.stateNode, u = a.type, f = a.memoizedProps;
    switch (i[Me] = a, i[Ye] = f, u) {
      case "dialog":
        Dt("cancel", i), Dt("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        Dt("load", i);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Tu.length; u++)
          Dt(Tu[u], i);
        break;
      case "source":
        Dt("error", i);
        break;
      case "img":
      case "image":
      case "link":
        Dt("error", i), Dt("load", i);
        break;
      case "details":
        Dt("toggle", i);
        break;
      case "input":
        Dt("invalid", i), A1(
          i,
          f.value,
          f.defaultValue,
          f.checked,
          f.defaultChecked,
          f.type,
          f.name,
          !0
        );
        break;
      case "select":
        Dt("invalid", i);
        break;
      case "textarea":
        Dt("invalid", i), T1(i, f.value, f.defaultValue, f.children);
    }
    u = f.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || i.textContent === "" + u || f.suppressHydrationWarning === !0 || M_(i.textContent, u) ? (f.popover != null && (Dt("beforetoggle", i), Dt("toggle", i)), f.onScroll != null && Dt("scroll", i), f.onScrollEnd != null && Dt("scrollend", i), f.onClick != null && (i.onclick = or), i = !0) : i = !1, i || Xr(a, !0);
  }
  function hx(a) {
    for (je = a.return; je; )
      switch (je.tag) {
        case 5:
        case 31:
        case 13:
          Sn = !1;
          return;
        case 27:
        case 3:
          Sn = !0;
          return;
        default:
          je = je.return;
      }
  }
  function Ti(a) {
    if (a !== je) return !1;
    if (!Rt) return hx(a), Rt = !0, !1;
    var i = a.tag, u;
    if ((u = i !== 3 && i !== 27) && ((u = i === 5) && (u = a.type, u = !(u !== "form" && u !== "button") || fv(a.type, a.memoizedProps)), u = !u), u && ee && Xr(a), hx(a), i === 13) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      ee = $_(a);
    } else if (i === 31) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      ee = $_(a);
    } else
      i === 27 ? (i = ee, oa(a.type) ? (a = pv, pv = null, ee = a) : ee = i) : ee = je ? On(a.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    ee = je = null, Rt = !1;
  }
  function Kh() {
    var a = Yr;
    return a !== null && (Ze === null ? Ze = a : Ze.push.apply(
      Ze,
      a
    ), Yr = null), a;
  }
  function au(a) {
    Yr === null ? Yr = [a] : Yr.push(a);
  }
  var Vh = P(null), Pa = null, fr = null;
  function Kr(a, i, u) {
    et(Vh, i._currentValue), i._currentValue = u;
  }
  function sr(a) {
    a._currentValue = Vh.current, U(Vh);
  }
  function Fh(a, i, u) {
    for (; a !== null; ) {
      var f = a.alternate;
      if ((a.childLanes & i) !== i ? (a.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), a === u) break;
      a = a.return;
    }
  }
  function Zh(a, i, u, f) {
    var v = a.child;
    for (v !== null && (v.return = a); v !== null; ) {
      var m = v.dependencies;
      if (m !== null) {
        var _ = v.child;
        m = m.firstContext;
        t: for (; m !== null; ) {
          var C = m;
          m = v;
          for (var q = 0; q < i.length; q++)
            if (C.context === i[q]) {
              m.lanes |= u, C = m.alternate, C !== null && (C.lanes |= u), Fh(
                m.return,
                u,
                a
              ), f || (_ = null);
              break t;
            }
          m = C.next;
        }
      } else if (v.tag === 18) {
        if (_ = v.return, _ === null) throw Error(r(341));
        _.lanes |= u, m = _.alternate, m !== null && (m.lanes |= u), Fh(_, u, a), _ = null;
      } else _ = v.child;
      if (_ !== null) _.return = v;
      else
        for (_ = v; _ !== null; ) {
          if (_ === a) {
            _ = null;
            break;
          }
          if (v = _.sibling, v !== null) {
            v.return = _.return, _ = v;
            break;
          }
          _ = _.return;
        }
      v = _;
    }
  }
  function Ei(a, i, u, f) {
    a = null;
    for (var v = i, m = !1; v !== null; ) {
      if (!m) {
        if ((v.flags & 524288) !== 0) m = !0;
        else if ((v.flags & 262144) !== 0) break;
      }
      if (v.tag === 10) {
        var _ = v.alternate;
        if (_ === null) throw Error(r(387));
        if (_ = _.memoizedProps, _ !== null) {
          var C = v.type;
          nn(v.pendingProps.value, _.value) || (a !== null ? a.push(C) : a = [C]);
        }
      } else if (v === jt.current) {
        if (_ = v.alternate, _ === null) throw Error(r(387));
        _.memoizedState.memoizedState !== v.memoizedState.memoizedState && (a !== null ? a.push(Du) : a = [Du]);
      }
      v = v.return;
    }
    a !== null && Zh(
      i,
      a,
      u,
      f
    ), i.flags |= 262144;
  }
  function dc(a) {
    for (a = a.firstContext; a !== null; ) {
      if (!nn(
        a.context._currentValue,
        a.memoizedValue
      ))
        return !0;
      a = a.next;
    }
    return !1;
  }
  function Na(a) {
    Pa = a, fr = null, a = a.dependencies, a !== null && (a.firstContext = null);
  }
  function Ce(a) {
    return dx(Pa, a);
  }
  function vc(a, i) {
    return Pa === null && Na(a), dx(a, i);
  }
  function dx(a, i) {
    var u = i._currentValue;
    if (i = { context: i, memoizedValue: u, next: null }, fr === null) {
      if (a === null) throw Error(r(308));
      fr = i, a.dependencies = { lanes: 0, firstContext: i }, a.flags |= 524288;
    } else fr = fr.next = i;
    return u;
  }
  var xN = typeof AbortController < "u" ? AbortController : function() {
    var a = [], i = this.signal = {
      aborted: !1,
      addEventListener: function(u, f) {
        a.push(f);
      }
    };
    this.abort = function() {
      i.aborted = !0, a.forEach(function(u) {
        return u();
      });
    };
  }, SN = t.unstable_scheduleCallback, _N = t.unstable_NormalPriority, de = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Qh() {
    return {
      controller: new xN(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function iu(a) {
    a.refCount--, a.refCount === 0 && SN(_N, function() {
      a.controller.abort();
    });
  }
  var ou = null, Wh = 0, Mi = 0, ji = null;
  function ON(a, i) {
    if (ou === null) {
      var u = ou = [];
      Wh = 0, Mi = ev(), ji = {
        status: "pending",
        value: void 0,
        then: function(f) {
          u.push(f);
        }
      };
    }
    return Wh++, i.then(vx, vx), i;
  }
  function vx() {
    if (--Wh === 0 && ou !== null) {
      ji !== null && (ji.status = "fulfilled");
      var a = ou;
      ou = null, Mi = 0, ji = null;
      for (var i = 0; i < a.length; i++) (0, a[i])();
    }
  }
  function AN(a, i) {
    var u = [], f = {
      status: "pending",
      value: null,
      reason: null,
      then: function(v) {
        u.push(v);
      }
    };
    return a.then(
      function() {
        f.status = "fulfilled", f.value = i;
        for (var v = 0; v < u.length; v++) (0, u[v])(i);
      },
      function(v) {
        for (f.status = "rejected", f.reason = v, v = 0; v < u.length; v++)
          (0, u[v])(void 0);
      }
    ), f;
  }
  var px = N.S;
  N.S = function(a, i) {
    WS = $e(), typeof i == "object" && i !== null && typeof i.then == "function" && ON(a, i), px !== null && px(a, i);
  };
  var Ra = P(null);
  function Jh() {
    var a = Ra.current;
    return a !== null ? a : Ft.pooledCache;
  }
  function pc(a, i) {
    i === null ? et(Ra, Ra.current) : et(Ra, i.pool);
  }
  function yx() {
    var a = Jh();
    return a === null ? null : { parent: de._currentValue, pool: a };
  }
  var Ci = Error(r(460)), td = Error(r(474)), yc = Error(r(542)), mc = { then: function() {
  } };
  function mx(a) {
    return a = a.status, a === "fulfilled" || a === "rejected";
  }
  function gx(a, i, u) {
    switch (u = a[u], u === void 0 ? a.push(i) : u !== i && (i.then(or, or), i = u), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw a = i.reason, xx(a), a;
      default:
        if (typeof i.status == "string") i.then(or, or);
        else {
          if (a = Ft, a !== null && 100 < a.shellSuspendCounter)
            throw Error(r(482));
          a = i, a.status = "pending", a.then(
            function(f) {
              if (i.status === "pending") {
                var v = i;
                v.status = "fulfilled", v.value = f;
              }
            },
            function(f) {
              if (i.status === "pending") {
                var v = i;
                v.status = "rejected", v.reason = f;
              }
            }
          );
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw a = i.reason, xx(a), a;
        }
        throw za = i, Ci;
    }
  }
  function qa(a) {
    try {
      var i = a._init;
      return i(a._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (za = u, Ci) : u;
    }
  }
  var za = null;
  function bx() {
    if (za === null) throw Error(r(459));
    var a = za;
    return za = null, a;
  }
  function xx(a) {
    if (a === Ci || a === yc)
      throw Error(r(483));
  }
  var Di = null, uu = 0;
  function gc(a) {
    var i = uu;
    return uu += 1, Di === null && (Di = []), gx(Di, a, i);
  }
  function lu(a, i) {
    i = i.props.ref, a.ref = i !== void 0 ? i : null;
  }
  function bc(a, i) {
    throw i.$$typeof === g ? Error(r(525)) : (a = Object.prototype.toString.call(i), Error(
      r(
        31,
        a === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : a
      )
    ));
  }
  function Sx(a) {
    function i(H, L) {
      if (a) {
        var G = H.deletions;
        G === null ? (H.deletions = [L], H.flags |= 16) : G.push(L);
      }
    }
    function u(H, L) {
      if (!a) return null;
      for (; L !== null; )
        i(H, L), L = L.sibling;
      return null;
    }
    function f(H) {
      for (var L = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? L.set(H.key, H) : L.set(H.index, H), H = H.sibling;
      return L;
    }
    function v(H, L) {
      return H = lr(H, L), H.index = 0, H.sibling = null, H;
    }
    function m(H, L, G) {
      return H.index = G, a ? (G = H.alternate, G !== null ? (G = G.index, G < L ? (H.flags |= 67108866, L) : G) : (H.flags |= 67108866, L)) : (H.flags |= 1048576, L);
    }
    function _(H) {
      return a && H.alternate === null && (H.flags |= 67108866), H;
    }
    function C(H, L, G, nt) {
      return L === null || L.tag !== 6 ? (L = Hh(G, H.mode, nt), L.return = H, L) : (L = v(L, G), L.return = H, L);
    }
    function q(H, L, G, nt) {
      var yt = G.type;
      return yt === S ? J(
        H,
        L,
        G.props.children,
        nt,
        G.key
      ) : L !== null && (L.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === R && qa(yt) === L.type) ? (L = v(L, G.props), lu(L, G), L.return = H, L) : (L = sc(
        G.type,
        G.key,
        G.props,
        null,
        H.mode,
        nt
      ), lu(L, G), L.return = H, L);
    }
    function Y(H, L, G, nt) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== G.containerInfo || L.stateNode.implementation !== G.implementation ? (L = Ih(G, H.mode, nt), L.return = H, L) : (L = v(L, G.children || []), L.return = H, L);
    }
    function J(H, L, G, nt, yt) {
      return L === null || L.tag !== 7 ? (L = Ca(
        G,
        H.mode,
        nt,
        yt
      ), L.return = H, L) : (L = v(L, G), L.return = H, L);
    }
    function at(H, L, G) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return L = Hh(
          "" + L,
          H.mode,
          G
        ), L.return = H, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            return G = sc(
              L.type,
              L.key,
              L.props,
              null,
              H.mode,
              G
            ), lu(G, L), G.return = H, G;
          case O:
            return L = Ih(
              L,
              H.mode,
              G
            ), L.return = H, L;
          case R:
            return L = qa(L), at(H, L, G);
        }
        if (V(L) || $(L))
          return L = Ca(
            L,
            H.mode,
            G,
            null
          ), L.return = H, L;
        if (typeof L.then == "function")
          return at(H, gc(L), G);
        if (L.$$typeof === M)
          return at(
            H,
            vc(H, L),
            G
          );
        bc(H, L);
      }
      return null;
    }
    function X(H, L, G, nt) {
      var yt = L !== null ? L.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return yt !== null ? null : C(H, L, "" + G, nt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case b:
            return G.key === yt ? q(H, L, G, nt) : null;
          case O:
            return G.key === yt ? Y(H, L, G, nt) : null;
          case R:
            return G = qa(G), X(H, L, G, nt);
        }
        if (V(G) || $(G))
          return yt !== null ? null : J(H, L, G, nt, null);
        if (typeof G.then == "function")
          return X(
            H,
            L,
            gc(G),
            nt
          );
        if (G.$$typeof === M)
          return X(
            H,
            L,
            vc(H, G),
            nt
          );
        bc(H, G);
      }
      return null;
    }
    function Q(H, L, G, nt, yt) {
      if (typeof nt == "string" && nt !== "" || typeof nt == "number" || typeof nt == "bigint")
        return H = H.get(G) || null, C(L, H, "" + nt, yt);
      if (typeof nt == "object" && nt !== null) {
        switch (nt.$$typeof) {
          case b:
            return H = H.get(
              nt.key === null ? G : nt.key
            ) || null, q(L, H, nt, yt);
          case O:
            return H = H.get(
              nt.key === null ? G : nt.key
            ) || null, Y(L, H, nt, yt);
          case R:
            return nt = qa(nt), Q(
              H,
              L,
              G,
              nt,
              yt
            );
        }
        if (V(nt) || $(nt))
          return H = H.get(G) || null, J(L, H, nt, yt, null);
        if (typeof nt.then == "function")
          return Q(
            H,
            L,
            G,
            gc(nt),
            yt
          );
        if (nt.$$typeof === M)
          return Q(
            H,
            L,
            G,
            vc(L, nt),
            yt
          );
        bc(L, nt);
      }
      return null;
    }
    function dt(H, L, G, nt) {
      for (var yt = null, zt = null, pt = L, Tt = L = 0, Nt = null; pt !== null && Tt < G.length; Tt++) {
        pt.index > Tt ? (Nt = pt, pt = null) : Nt = pt.sibling;
        var $t = X(
          H,
          pt,
          G[Tt],
          nt
        );
        if ($t === null) {
          pt === null && (pt = Nt);
          break;
        }
        a && pt && $t.alternate === null && i(H, pt), L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t, pt = Nt;
      }
      if (Tt === G.length)
        return u(H, pt), Rt && cr(H, Tt), yt;
      if (pt === null) {
        for (; Tt < G.length; Tt++)
          pt = at(H, G[Tt], nt), pt !== null && (L = m(
            pt,
            L,
            Tt
          ), zt === null ? yt = pt : zt.sibling = pt, zt = pt);
        return Rt && cr(H, Tt), yt;
      }
      for (pt = f(pt); Tt < G.length; Tt++)
        Nt = Q(
          pt,
          H,
          Tt,
          G[Tt],
          nt
        ), Nt !== null && (a && Nt.alternate !== null && pt.delete(
          Nt.key === null ? Tt : Nt.key
        ), L = m(
          Nt,
          L,
          Tt
        ), zt === null ? yt = Nt : zt.sibling = Nt, zt = Nt);
      return a && pt.forEach(function(sa) {
        return i(H, sa);
      }), Rt && cr(H, Tt), yt;
    }
    function gt(H, L, G, nt) {
      if (G == null) throw Error(r(151));
      for (var yt = null, zt = null, pt = L, Tt = L = 0, Nt = null, $t = G.next(); pt !== null && !$t.done; Tt++, $t = G.next()) {
        pt.index > Tt ? (Nt = pt, pt = null) : Nt = pt.sibling;
        var sa = X(H, pt, $t.value, nt);
        if (sa === null) {
          pt === null && (pt = Nt);
          break;
        }
        a && pt && sa.alternate === null && i(H, pt), L = m(sa, L, Tt), zt === null ? yt = sa : zt.sibling = sa, zt = sa, pt = Nt;
      }
      if ($t.done)
        return u(H, pt), Rt && cr(H, Tt), yt;
      if (pt === null) {
        for (; !$t.done; Tt++, $t = G.next())
          $t = at(H, $t.value, nt), $t !== null && (L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t);
        return Rt && cr(H, Tt), yt;
      }
      for (pt = f(pt); !$t.done; Tt++, $t = G.next())
        $t = Q(pt, H, Tt, $t.value, nt), $t !== null && (a && $t.alternate !== null && pt.delete($t.key === null ? Tt : $t.key), L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t);
      return a && pt.forEach(function(qR) {
        return i(H, qR);
      }), Rt && cr(H, Tt), yt;
    }
    function Kt(H, L, G, nt) {
      if (typeof G == "object" && G !== null && G.type === S && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case b:
            t: {
              for (var yt = G.key; L !== null; ) {
                if (L.key === yt) {
                  if (yt = G.type, yt === S) {
                    if (L.tag === 7) {
                      u(
                        H,
                        L.sibling
                      ), nt = v(
                        L,
                        G.props.children
                      ), nt.return = H, H = nt;
                      break t;
                    }
                  } else if (L.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === R && qa(yt) === L.type) {
                    u(
                      H,
                      L.sibling
                    ), nt = v(L, G.props), lu(nt, G), nt.return = H, H = nt;
                    break t;
                  }
                  u(H, L);
                  break;
                } else i(H, L);
                L = L.sibling;
              }
              G.type === S ? (nt = Ca(
                G.props.children,
                H.mode,
                nt,
                G.key
              ), nt.return = H, H = nt) : (nt = sc(
                G.type,
                G.key,
                G.props,
                null,
                H.mode,
                nt
              ), lu(nt, G), nt.return = H, H = nt);
            }
            return _(H);
          case O:
            t: {
              for (yt = G.key; L !== null; ) {
                if (L.key === yt)
                  if (L.tag === 4 && L.stateNode.containerInfo === G.containerInfo && L.stateNode.implementation === G.implementation) {
                    u(
                      H,
                      L.sibling
                    ), nt = v(L, G.children || []), nt.return = H, H = nt;
                    break t;
                  } else {
                    u(H, L);
                    break;
                  }
                else i(H, L);
                L = L.sibling;
              }
              nt = Ih(G, H.mode, nt), nt.return = H, H = nt;
            }
            return _(H);
          case R:
            return G = qa(G), Kt(
              H,
              L,
              G,
              nt
            );
        }
        if (V(G))
          return dt(
            H,
            L,
            G,
            nt
          );
        if ($(G)) {
          if (yt = $(G), typeof yt != "function") throw Error(r(150));
          return G = yt.call(G), gt(
            H,
            L,
            G,
            nt
          );
        }
        if (typeof G.then == "function")
          return Kt(
            H,
            L,
            gc(G),
            nt
          );
        if (G.$$typeof === M)
          return Kt(
            H,
            L,
            vc(H, G),
            nt
          );
        bc(H, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint" ? (G = "" + G, L !== null && L.tag === 6 ? (u(H, L.sibling), nt = v(L, G), nt.return = H, H = nt) : (u(H, L), nt = Hh(G, H.mode, nt), nt.return = H, H = nt), _(H)) : u(H, L);
    }
    return function(H, L, G, nt) {
      try {
        uu = 0;
        var yt = Kt(
          H,
          L,
          G,
          nt
        );
        return Di = null, yt;
      } catch (pt) {
        if (pt === Ci || pt === yc) throw pt;
        var zt = rn(29, pt, null, H.mode);
        return zt.lanes = nt, zt.return = H, zt;
      } finally {
      }
    };
  }
  var $a = Sx(!0), _x = Sx(!1), Vr = !1;
  function ed(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function nd(a, i) {
    a = a.updateQueue, i.updateQueue === a && (i.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      callbacks: null
    });
  }
  function Fr(a) {
    return { lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function Zr(a, i, u) {
    var f = a.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (Lt & 2) !== 0) {
      var v = f.pending;
      return v === null ? i.next = i : (i.next = v.next, v.next = i), f.pending = i, i = fc(a), ix(a, null, u), i;
    }
    return cc(a, f, i, u), fc(a);
  }
  function cu(a, i, u) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (u & 4194048) !== 0)) {
      var f = i.lanes;
      f &= a.pendingLanes, u |= f, i.lanes = u, d1(a, u);
    }
  }
  function rd(a, i) {
    var u = a.updateQueue, f = a.alternate;
    if (f !== null && (f = f.updateQueue, u === f)) {
      var v = null, m = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var _ = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          m === null ? v = m = _ : m = m.next = _, u = u.next;
        } while (u !== null);
        m === null ? v = m = i : m = m.next = i;
      } else v = m = i;
      u = {
        baseState: f.baseState,
        firstBaseUpdate: v,
        lastBaseUpdate: m,
        shared: f.shared,
        callbacks: f.callbacks
      }, a.updateQueue = u;
      return;
    }
    a = u.lastBaseUpdate, a === null ? u.firstBaseUpdate = i : a.next = i, u.lastBaseUpdate = i;
  }
  var ad = !1;
  function fu() {
    if (ad) {
      var a = ji;
      if (a !== null) throw a;
    }
  }
  function su(a, i, u, f) {
    ad = !1;
    var v = a.updateQueue;
    Vr = !1;
    var m = v.firstBaseUpdate, _ = v.lastBaseUpdate, C = v.shared.pending;
    if (C !== null) {
      v.shared.pending = null;
      var q = C, Y = q.next;
      q.next = null, _ === null ? m = Y : _.next = Y, _ = q;
      var J = a.alternate;
      J !== null && (J = J.updateQueue, C = J.lastBaseUpdate, C !== _ && (C === null ? J.firstBaseUpdate = Y : C.next = Y, J.lastBaseUpdate = q));
    }
    if (m !== null) {
      var at = v.baseState;
      _ = 0, J = Y = q = null, C = m;
      do {
        var X = C.lane & -536870913, Q = X !== C.lane;
        if (Q ? (Pt & X) === X : (f & X) === X) {
          X !== 0 && X === Mi && (ad = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: null,
            next: null
          });
          t: {
            var dt = a, gt = C;
            X = i;
            var Kt = u;
            switch (gt.tag) {
              case 1:
                if (dt = gt.payload, typeof dt == "function") {
                  at = dt.call(Kt, at, X);
                  break t;
                }
                at = dt;
                break t;
              case 3:
                dt.flags = dt.flags & -65537 | 128;
              case 0:
                if (dt = gt.payload, X = typeof dt == "function" ? dt.call(Kt, at, X) : dt, X == null) break t;
                at = p({}, at, X);
                break t;
              case 2:
                Vr = !0;
            }
          }
          X = C.callback, X !== null && (a.flags |= 64, Q && (a.flags |= 8192), Q = v.callbacks, Q === null ? v.callbacks = [X] : Q.push(X));
        } else
          Q = {
            lane: X,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          }, J === null ? (Y = J = Q, q = at) : J = J.next = Q, _ |= X;
        if (C = C.next, C === null) {
          if (C = v.shared.pending, C === null)
            break;
          Q = C, C = Q.next, Q.next = null, v.lastBaseUpdate = Q, v.shared.pending = null;
        }
      } while (!0);
      J === null && (q = at), v.baseState = q, v.firstBaseUpdate = Y, v.lastBaseUpdate = J, m === null && (v.shared.lanes = 0), ea |= _, a.lanes = _, a.memoizedState = at;
    }
  }
  function Ox(a, i) {
    if (typeof a != "function")
      throw Error(r(191, a));
    a.call(i);
  }
  function Ax(a, i) {
    var u = a.callbacks;
    if (u !== null)
      for (a.callbacks = null, a = 0; a < u.length; a++)
        Ox(u[a], i);
  }
  var Pi = P(null), xc = P(0);
  function wx(a, i) {
    a = xr, et(xc, a), et(Pi, i), xr = a | i.baseLanes;
  }
  function id() {
    et(xc, xr), et(Pi, Pi.current);
  }
  function od() {
    xr = xc.current, U(Pi), U(xc);
  }
  var an = P(null), _n = null;
  function Qr(a) {
    var i = a.alternate;
    et(se, se.current & 1), et(an, a), _n === null && (i === null || Pi.current !== null || i.memoizedState !== null) && (_n = a);
  }
  function ud(a) {
    et(se, se.current), et(an, a), _n === null && (_n = a);
  }
  function Tx(a) {
    a.tag === 22 ? (et(se, se.current), et(an, a), _n === null && (_n = a)) : Wr();
  }
  function Wr() {
    et(se, se.current), et(an, an.current);
  }
  function on(a) {
    U(an), _n === a && (_n = null), U(se);
  }
  var se = P(0);
  function Sc(a) {
    for (var i = a; i !== null; ) {
      if (i.tag === 13) {
        var u = i.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || dv(u) || vv(u)))
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
  var hr = 0, Ot = null, Yt = null, ve = null, _c = !1, Ni = !1, Ba = !1, Oc = 0, hu = 0, Ri = null, wN = 0;
  function le() {
    throw Error(r(321));
  }
  function ld(a, i) {
    if (i === null) return !1;
    for (var u = 0; u < i.length && u < a.length; u++)
      if (!nn(a[u], i[u])) return !1;
    return !0;
  }
  function cd(a, i, u, f, v, m) {
    return hr = m, Ot = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, N.H = a === null || a.memoizedState === null ? cS : Ad, Ba = !1, m = u(f, v), Ba = !1, Ni && (m = Mx(
      i,
      u,
      f,
      v
    )), Ex(a), m;
  }
  function Ex(a) {
    N.H = pu;
    var i = Yt !== null && Yt.next !== null;
    if (hr = 0, ve = Yt = Ot = null, _c = !1, hu = 0, Ri = null, i) throw Error(r(300));
    a === null || pe || (a = a.dependencies, a !== null && dc(a) && (pe = !0));
  }
  function Mx(a, i, u, f) {
    Ot = a;
    var v = 0;
    do {
      if (Ni && (Ri = null), hu = 0, Ni = !1, 25 <= v) throw Error(r(301));
      if (v += 1, ve = Yt = null, a.updateQueue != null) {
        var m = a.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      N.H = fS, m = i(u, f);
    } while (Ni);
    return m;
  }
  function TN() {
    var a = N.H, i = a.useState()[0];
    return i = typeof i.then == "function" ? du(i) : i, a = a.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== a && (Ot.flags |= 1024), i;
  }
  function fd() {
    var a = Oc !== 0;
    return Oc = 0, a;
  }
  function sd(a, i, u) {
    i.updateQueue = a.updateQueue, i.flags &= -2053, a.lanes &= ~u;
  }
  function hd(a) {
    if (_c) {
      for (a = a.memoizedState; a !== null; ) {
        var i = a.queue;
        i !== null && (i.pending = null), a = a.next;
      }
      _c = !1;
    }
    hr = 0, ve = Yt = Ot = null, Ni = !1, hu = Oc = 0, Ri = null;
  }
  function He() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ve === null ? Ot.memoizedState = ve = a : ve = ve.next = a, ve;
  }
  function he() {
    if (Yt === null) {
      var a = Ot.alternate;
      a = a !== null ? a.memoizedState : null;
    } else a = Yt.next;
    var i = ve === null ? Ot.memoizedState : ve.next;
    if (i !== null)
      ve = i, Yt = a;
    else {
      if (a === null)
        throw Ot.alternate === null ? Error(r(467)) : Error(r(310));
      Yt = a, a = {
        memoizedState: Yt.memoizedState,
        baseState: Yt.baseState,
        baseQueue: Yt.baseQueue,
        queue: Yt.queue,
        next: null
      }, ve === null ? Ot.memoizedState = ve = a : ve = ve.next = a;
    }
    return ve;
  }
  function Ac() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function du(a) {
    var i = hu;
    return hu += 1, Ri === null && (Ri = []), a = gx(Ri, a, i), i = Ot, (ve === null ? i.memoizedState : ve.next) === null && (i = i.alternate, N.H = i === null || i.memoizedState === null ? cS : Ad), a;
  }
  function wc(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return du(a);
      if (a.$$typeof === M) return Ce(a);
    }
    throw Error(r(438, String(a)));
  }
  function dd(a) {
    var i = null, u = Ot.updateQueue;
    if (u !== null && (i = u.memoCache), i == null) {
      var f = Ot.alternate;
      f !== null && (f = f.updateQueue, f !== null && (f = f.memoCache, f != null && (i = {
        data: f.data.map(function(v) {
          return v.slice();
        }),
        index: 0
      })));
    }
    if (i == null && (i = { data: [], index: 0 }), u === null && (u = Ac(), Ot.updateQueue = u), u.memoCache = i, u = i.data[i.index], u === void 0)
      for (u = i.data[i.index] = Array(a), f = 0; f < a; f++)
        u[f] = F;
    return i.index++, u;
  }
  function dr(a, i) {
    return typeof i == "function" ? i(a) : i;
  }
  function Tc(a) {
    var i = he();
    return vd(i, Yt, a);
  }
  function vd(a, i, u) {
    var f = a.queue;
    if (f === null) throw Error(r(311));
    f.lastRenderedReducer = u;
    var v = a.baseQueue, m = f.pending;
    if (m !== null) {
      if (v !== null) {
        var _ = v.next;
        v.next = m.next, m.next = _;
      }
      i.baseQueue = v = m, f.pending = null;
    }
    if (m = a.baseState, v === null) a.memoizedState = m;
    else {
      i = v.next;
      var C = _ = null, q = null, Y = i, J = !1;
      do {
        var at = Y.lane & -536870913;
        if (at !== Y.lane ? (Pt & at) === at : (hr & at) === at) {
          var X = Y.revertLane;
          if (X === 0)
            q !== null && (q = q.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), at === Mi && (J = !0);
          else if ((hr & X) === X) {
            Y = Y.next, X === Mi && (J = !0);
            continue;
          } else
            at = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, q === null ? (C = q = at, _ = m) : q = q.next = at, Ot.lanes |= X, ea |= X;
          at = Y.action, Ba && u(m, at), m = Y.hasEagerState ? Y.eagerState : u(m, at);
        } else
          X = {
            lane: at,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, q === null ? (C = q = X, _ = m) : q = q.next = X, Ot.lanes |= at, ea |= at;
        Y = Y.next;
      } while (Y !== null && Y !== i);
      if (q === null ? _ = m : q.next = C, !nn(m, a.memoizedState) && (pe = !0, J && (u = ji, u !== null)))
        throw u;
      a.memoizedState = m, a.baseState = _, a.baseQueue = q, f.lastRenderedState = m;
    }
    return v === null && (f.lanes = 0), [a.memoizedState, f.dispatch];
  }
  function pd(a) {
    var i = he(), u = i.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = a;
    var f = u.dispatch, v = u.pending, m = i.memoizedState;
    if (v !== null) {
      u.pending = null;
      var _ = v = v.next;
      do
        m = a(m, _.action), _ = _.next;
      while (_ !== v);
      nn(m, i.memoizedState) || (pe = !0), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), u.lastRenderedState = m;
    }
    return [m, f];
  }
  function jx(a, i, u) {
    var f = Ot, v = he(), m = Rt;
    if (m) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = i();
    var _ = !nn(
      (Yt || v).memoizedState,
      u
    );
    if (_ && (v.memoizedState = u, pe = !0), v = v.queue, gd(Px.bind(null, f, v, a), [
      a
    ]), v.getSnapshot !== i || _ || ve !== null && ve.memoizedState.tag & 1) {
      if (f.flags |= 2048, qi(
        9,
        { destroy: void 0 },
        Dx.bind(
          null,
          f,
          v,
          u,
          i
        ),
        null
      ), Ft === null) throw Error(r(349));
      m || (hr & 127) !== 0 || Cx(f, i, u);
    }
    return u;
  }
  function Cx(a, i, u) {
    a.flags |= 16384, a = { getSnapshot: i, value: u }, i = Ot.updateQueue, i === null ? (i = Ac(), Ot.updateQueue = i, i.stores = [a]) : (u = i.stores, u === null ? i.stores = [a] : u.push(a));
  }
  function Dx(a, i, u, f) {
    i.value = u, i.getSnapshot = f, Nx(i) && Rx(a);
  }
  function Px(a, i, u) {
    return u(function() {
      Nx(i) && Rx(a);
    });
  }
  function Nx(a) {
    var i = a.getSnapshot;
    a = a.value;
    try {
      var u = i();
      return !nn(a, u);
    } catch {
      return !0;
    }
  }
  function Rx(a) {
    var i = ja(a, 2);
    i !== null && Qe(i, a, 2);
  }
  function yd(a) {
    var i = He();
    if (typeof a == "function") {
      var u = a;
      if (a = u(), Ba) {
        Ur(!0);
        try {
          u();
        } finally {
          Ur(!1);
        }
      }
    }
    return i.memoizedState = i.baseState = a, i.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: a
    }, i;
  }
  function qx(a, i, u, f) {
    return a.baseState = u, vd(
      a,
      Yt,
      typeof f == "function" ? f : dr
    );
  }
  function EN(a, i, u, f, v) {
    if (jc(a)) throw Error(r(485));
    if (a = i.action, a !== null) {
      var m = {
        payload: v,
        action: a,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(_) {
          m.listeners.push(_);
        }
      };
      N.T !== null ? u(!0) : m.isTransition = !1, f(m), u = i.pending, u === null ? (m.next = i.pending = m, zx(i, m)) : (m.next = u.next, i.pending = u.next = m);
    }
  }
  function zx(a, i) {
    var u = i.action, f = i.payload, v = a.state;
    if (i.isTransition) {
      var m = N.T, _ = {};
      N.T = _;
      try {
        var C = u(v, f), q = N.S;
        q !== null && q(_, C), $x(a, i, C);
      } catch (Y) {
        md(a, i, Y);
      } finally {
        m !== null && _.types !== null && (m.types = _.types), N.T = m;
      }
    } else
      try {
        m = u(v, f), $x(a, i, m);
      } catch (Y) {
        md(a, i, Y);
      }
  }
  function $x(a, i, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(f) {
        Bx(a, i, f);
      },
      function(f) {
        return md(a, i, f);
      }
    ) : Bx(a, i, u);
  }
  function Bx(a, i, u) {
    i.status = "fulfilled", i.value = u, Lx(i), a.state = u, i = a.pending, i !== null && (u = i.next, u === i ? a.pending = null : (u = u.next, i.next = u, zx(a, u)));
  }
  function md(a, i, u) {
    var f = a.pending;
    if (a.pending = null, f !== null) {
      f = f.next;
      do
        i.status = "rejected", i.reason = u, Lx(i), i = i.next;
      while (i !== f);
    }
    a.action = null;
  }
  function Lx(a) {
    a = a.listeners;
    for (var i = 0; i < a.length; i++) (0, a[i])();
  }
  function kx(a, i) {
    return i;
  }
  function Ux(a, i) {
    if (Rt) {
      var u = Ft.formState;
      if (u !== null) {
        t: {
          var f = Ot;
          if (Rt) {
            if (ee) {
              e: {
                for (var v = ee, m = Sn; v.nodeType !== 8; ) {
                  if (!m) {
                    v = null;
                    break e;
                  }
                  if (v = On(
                    v.nextSibling
                  ), v === null) {
                    v = null;
                    break e;
                  }
                }
                m = v.data, v = m === "F!" || m === "F" ? v : null;
              }
              if (v) {
                ee = On(
                  v.nextSibling
                ), f = v.data === "F!";
                break t;
              }
            }
            Xr(f);
          }
          f = !1;
        }
        f && (i = u[0]);
      }
    }
    return u = He(), u.memoizedState = u.baseState = i, f = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kx,
      lastRenderedState: i
    }, u.queue = f, u = oS.bind(
      null,
      Ot,
      f
    ), f.dispatch = u, f = yd(!1), m = Od.bind(
      null,
      Ot,
      !1,
      f.queue
    ), f = He(), v = {
      state: i,
      dispatch: null,
      action: a,
      pending: null
    }, f.queue = v, u = EN.bind(
      null,
      Ot,
      v,
      m,
      u
    ), v.dispatch = u, f.memoizedState = a, [i, u, !1];
  }
  function Hx(a) {
    var i = he();
    return Ix(i, Yt, a);
  }
  function Ix(a, i, u) {
    if (i = vd(
      a,
      i,
      kx
    )[0], a = Tc(dr)[0], typeof i == "object" && i !== null && typeof i.then == "function")
      try {
        var f = du(i);
      } catch (_) {
        throw _ === Ci ? yc : _;
      }
    else f = i;
    i = he();
    var v = i.queue, m = v.dispatch;
    return u !== i.memoizedState && (Ot.flags |= 2048, qi(
      9,
      { destroy: void 0 },
      MN.bind(null, v, u),
      null
    )), [f, m, a];
  }
  function MN(a, i) {
    a.action = i;
  }
  function Gx(a) {
    var i = he(), u = Yt;
    if (u !== null)
      return Ix(i, u, a);
    he(), i = i.memoizedState, u = he();
    var f = u.queue.dispatch;
    return u.memoizedState = a, [i, f, !1];
  }
  function qi(a, i, u, f) {
    return a = { tag: a, create: u, deps: f, inst: i, next: null }, i = Ot.updateQueue, i === null && (i = Ac(), Ot.updateQueue = i), u = i.lastEffect, u === null ? i.lastEffect = a.next = a : (f = u.next, u.next = a, a.next = f, i.lastEffect = a), a;
  }
  function Yx() {
    return he().memoizedState;
  }
  function Ec(a, i, u, f) {
    var v = He();
    Ot.flags |= a, v.memoizedState = qi(
      1 | i,
      { destroy: void 0 },
      u,
      f === void 0 ? null : f
    );
  }
  function Mc(a, i, u, f) {
    var v = he();
    f = f === void 0 ? null : f;
    var m = v.memoizedState.inst;
    Yt !== null && f !== null && ld(f, Yt.memoizedState.deps) ? v.memoizedState = qi(i, m, u, f) : (Ot.flags |= a, v.memoizedState = qi(
      1 | i,
      m,
      u,
      f
    ));
  }
  function Xx(a, i) {
    Ec(8390656, 8, a, i);
  }
  function gd(a, i) {
    Mc(2048, 8, a, i);
  }
  function jN(a) {
    Ot.flags |= 4;
    var i = Ot.updateQueue;
    if (i === null)
      i = Ac(), Ot.updateQueue = i, i.events = [a];
    else {
      var u = i.events;
      u === null ? i.events = [a] : u.push(a);
    }
  }
  function Kx(a) {
    var i = he().memoizedState;
    return jN({ ref: i, nextImpl: a }), function() {
      if ((Lt & 2) !== 0) throw Error(r(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function Vx(a, i) {
    return Mc(4, 2, a, i);
  }
  function Fx(a, i) {
    return Mc(4, 4, a, i);
  }
  function Zx(a, i) {
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
  function Qx(a, i, u) {
    u = u != null ? u.concat([a]) : null, Mc(4, 4, Zx.bind(null, i, a), u);
  }
  function bd() {
  }
  function Wx(a, i) {
    var u = he();
    i = i === void 0 ? null : i;
    var f = u.memoizedState;
    return i !== null && ld(i, f[1]) ? f[0] : (u.memoizedState = [a, i], a);
  }
  function Jx(a, i) {
    var u = he();
    i = i === void 0 ? null : i;
    var f = u.memoizedState;
    if (i !== null && ld(i, f[1]))
      return f[0];
    if (f = a(), Ba) {
      Ur(!0);
      try {
        a();
      } finally {
        Ur(!1);
      }
    }
    return u.memoizedState = [f, i], f;
  }
  function xd(a, i, u) {
    return u === void 0 || (hr & 1073741824) !== 0 && (Pt & 261930) === 0 ? a.memoizedState = i : (a.memoizedState = u, a = t_(), Ot.lanes |= a, ea |= a, u);
  }
  function tS(a, i, u, f) {
    return nn(u, i) ? u : Pi.current !== null ? (a = xd(a, u, f), nn(a, i) || (pe = !0), a) : (hr & 42) === 0 || (hr & 1073741824) !== 0 && (Pt & 261930) === 0 ? (pe = !0, a.memoizedState = u) : (a = t_(), Ot.lanes |= a, ea |= a, i);
  }
  function eS(a, i, u, f, v) {
    var m = I.p;
    I.p = m !== 0 && 8 > m ? m : 8;
    var _ = N.T, C = {};
    N.T = C, Od(a, !1, i, u);
    try {
      var q = v(), Y = N.S;
      if (Y !== null && Y(C, q), q !== null && typeof q == "object" && typeof q.then == "function") {
        var J = AN(
          q,
          f
        );
        vu(
          a,
          i,
          J,
          cn(a)
        );
      } else
        vu(
          a,
          i,
          f,
          cn(a)
        );
    } catch (at) {
      vu(
        a,
        i,
        { then: function() {
        }, status: "rejected", reason: at },
        cn()
      );
    } finally {
      I.p = m, _ !== null && C.types !== null && (_.types = C.types), N.T = _;
    }
  }
  function CN() {
  }
  function Sd(a, i, u, f) {
    if (a.tag !== 5) throw Error(r(476));
    var v = nS(a).queue;
    eS(
      a,
      v,
      i,
      W,
      u === null ? CN : function() {
        return rS(a), u(f);
      }
    );
  }
  function nS(a) {
    var i = a.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: W
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
        lastRenderedReducer: dr,
        lastRenderedState: u
      },
      next: null
    }, a.memoizedState = i, a = a.alternate, a !== null && (a.memoizedState = i), i;
  }
  function rS(a) {
    var i = nS(a);
    i.next === null && (i = a.alternate.memoizedState), vu(
      a,
      i.next.queue,
      {},
      cn()
    );
  }
  function _d() {
    return Ce(Du);
  }
  function aS() {
    return he().memoizedState;
  }
  function iS() {
    return he().memoizedState;
  }
  function DN(a) {
    for (var i = a.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var u = cn();
          a = Fr(u);
          var f = Zr(i, a, u);
          f !== null && (Qe(f, i, u), cu(f, i, u)), i = { cache: Qh() }, a.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function PN(a, i, u) {
    var f = cn();
    u = {
      lane: f,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, jc(a) ? uS(i, u) : (u = kh(a, i, u, f), u !== null && (Qe(u, a, f), lS(u, i, f)));
  }
  function oS(a, i, u) {
    var f = cn();
    vu(a, i, u, f);
  }
  function vu(a, i, u, f) {
    var v = {
      lane: f,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (jc(a)) uS(i, v);
    else {
      var m = a.alternate;
      if (a.lanes === 0 && (m === null || m.lanes === 0) && (m = i.lastRenderedReducer, m !== null))
        try {
          var _ = i.lastRenderedState, C = m(_, u);
          if (v.hasEagerState = !0, v.eagerState = C, nn(C, _))
            return cc(a, i, v, 0), Ft === null && lc(), !1;
        } catch {
        } finally {
        }
      if (u = kh(a, i, v, f), u !== null)
        return Qe(u, a, f), lS(u, i, f), !0;
    }
    return !1;
  }
  function Od(a, i, u, f) {
    if (f = {
      lane: 2,
      revertLane: ev(),
      gesture: null,
      action: f,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, jc(a)) {
      if (i) throw Error(r(479));
    } else
      i = kh(
        a,
        u,
        f,
        2
      ), i !== null && Qe(i, a, 2);
  }
  function jc(a) {
    var i = a.alternate;
    return a === Ot || i !== null && i === Ot;
  }
  function uS(a, i) {
    Ni = _c = !0;
    var u = a.pending;
    u === null ? i.next = i : (i.next = u.next, u.next = i), a.pending = i;
  }
  function lS(a, i, u) {
    if ((u & 4194048) !== 0) {
      var f = i.lanes;
      f &= a.pendingLanes, u |= f, i.lanes = u, d1(a, u);
    }
  }
  var pu = {
    readContext: Ce,
    use: wc,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useLayoutEffect: le,
    useInsertionEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useSyncExternalStore: le,
    useId: le,
    useHostTransitionStatus: le,
    useFormState: le,
    useActionState: le,
    useOptimistic: le,
    useMemoCache: le,
    useCacheRefresh: le
  };
  pu.useEffectEvent = le;
  var cS = {
    readContext: Ce,
    use: wc,
    useCallback: function(a, i) {
      return He().memoizedState = [
        a,
        i === void 0 ? null : i
      ], a;
    },
    useContext: Ce,
    useEffect: Xx,
    useImperativeHandle: function(a, i, u) {
      u = u != null ? u.concat([a]) : null, Ec(
        4194308,
        4,
        Zx.bind(null, i, a),
        u
      );
    },
    useLayoutEffect: function(a, i) {
      return Ec(4194308, 4, a, i);
    },
    useInsertionEffect: function(a, i) {
      Ec(4, 2, a, i);
    },
    useMemo: function(a, i) {
      var u = He();
      i = i === void 0 ? null : i;
      var f = a();
      if (Ba) {
        Ur(!0);
        try {
          a();
        } finally {
          Ur(!1);
        }
      }
      return u.memoizedState = [f, i], f;
    },
    useReducer: function(a, i, u) {
      var f = He();
      if (u !== void 0) {
        var v = u(i);
        if (Ba) {
          Ur(!0);
          try {
            u(i);
          } finally {
            Ur(!1);
          }
        }
      } else v = i;
      return f.memoizedState = f.baseState = v, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: v
      }, f.queue = a, a = a.dispatch = PN.bind(
        null,
        Ot,
        a
      ), [f.memoizedState, a];
    },
    useRef: function(a) {
      var i = He();
      return a = { current: a }, i.memoizedState = a;
    },
    useState: function(a) {
      a = yd(a);
      var i = a.queue, u = oS.bind(null, Ot, i);
      return i.dispatch = u, [a.memoizedState, u];
    },
    useDebugValue: bd,
    useDeferredValue: function(a, i) {
      var u = He();
      return xd(u, a, i);
    },
    useTransition: function() {
      var a = yd(!1);
      return a = eS.bind(
        null,
        Ot,
        a.queue,
        !0,
        !1
      ), He().memoizedState = a, [!1, a];
    },
    useSyncExternalStore: function(a, i, u) {
      var f = Ot, v = He();
      if (Rt) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = i(), Ft === null)
          throw Error(r(349));
        (Pt & 127) !== 0 || Cx(f, i, u);
      }
      v.memoizedState = u;
      var m = { value: u, getSnapshot: i };
      return v.queue = m, Xx(Px.bind(null, f, m, a), [
        a
      ]), f.flags |= 2048, qi(
        9,
        { destroy: void 0 },
        Dx.bind(
          null,
          f,
          m,
          u,
          i
        ),
        null
      ), u;
    },
    useId: function() {
      var a = He(), i = Ft.identifierPrefix;
      if (Rt) {
        var u = Xn, f = Yn;
        u = (f & ~(1 << 32 - en(f) - 1)).toString(32) + u, i = "_" + i + "R_" + u, u = Oc++, 0 < u && (i += "H" + u.toString(32)), i += "_";
      } else
        u = wN++, i = "_" + i + "r_" + u.toString(32) + "_";
      return a.memoizedState = i;
    },
    useHostTransitionStatus: _d,
    useFormState: Ux,
    useActionState: Ux,
    useOptimistic: function(a) {
      var i = He();
      i.memoizedState = i.baseState = a;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return i.queue = u, i = Od.bind(
        null,
        Ot,
        !0,
        u
      ), u.dispatch = i, [a, i];
    },
    useMemoCache: dd,
    useCacheRefresh: function() {
      return He().memoizedState = DN.bind(
        null,
        Ot
      );
    },
    useEffectEvent: function(a) {
      var i = He(), u = { impl: a };
      return i.memoizedState = u, function() {
        if ((Lt & 2) !== 0)
          throw Error(r(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Ad = {
    readContext: Ce,
    use: wc,
    useCallback: Wx,
    useContext: Ce,
    useEffect: gd,
    useImperativeHandle: Qx,
    useInsertionEffect: Vx,
    useLayoutEffect: Fx,
    useMemo: Jx,
    useReducer: Tc,
    useRef: Yx,
    useState: function() {
      return Tc(dr);
    },
    useDebugValue: bd,
    useDeferredValue: function(a, i) {
      var u = he();
      return tS(
        u,
        Yt.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = Tc(dr)[0], i = he().memoizedState;
      return [
        typeof a == "boolean" ? a : du(a),
        i
      ];
    },
    useSyncExternalStore: jx,
    useId: aS,
    useHostTransitionStatus: _d,
    useFormState: Hx,
    useActionState: Hx,
    useOptimistic: function(a, i) {
      var u = he();
      return qx(u, Yt, a, i);
    },
    useMemoCache: dd,
    useCacheRefresh: iS
  };
  Ad.useEffectEvent = Kx;
  var fS = {
    readContext: Ce,
    use: wc,
    useCallback: Wx,
    useContext: Ce,
    useEffect: gd,
    useImperativeHandle: Qx,
    useInsertionEffect: Vx,
    useLayoutEffect: Fx,
    useMemo: Jx,
    useReducer: pd,
    useRef: Yx,
    useState: function() {
      return pd(dr);
    },
    useDebugValue: bd,
    useDeferredValue: function(a, i) {
      var u = he();
      return Yt === null ? xd(u, a, i) : tS(
        u,
        Yt.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = pd(dr)[0], i = he().memoizedState;
      return [
        typeof a == "boolean" ? a : du(a),
        i
      ];
    },
    useSyncExternalStore: jx,
    useId: aS,
    useHostTransitionStatus: _d,
    useFormState: Gx,
    useActionState: Gx,
    useOptimistic: function(a, i) {
      var u = he();
      return Yt !== null ? qx(u, Yt, a, i) : (u.baseState = a, [a, u.queue.dispatch]);
    },
    useMemoCache: dd,
    useCacheRefresh: iS
  };
  fS.useEffectEvent = Kx;
  function wd(a, i, u, f) {
    i = a.memoizedState, u = u(f, i), u = u == null ? i : p({}, i, u), a.memoizedState = u, a.lanes === 0 && (a.updateQueue.baseState = u);
  }
  var Td = {
    enqueueSetState: function(a, i, u) {
      a = a._reactInternals;
      var f = cn(), v = Fr(f);
      v.payload = i, u != null && (v.callback = u), i = Zr(a, v, f), i !== null && (Qe(i, a, f), cu(i, a, f));
    },
    enqueueReplaceState: function(a, i, u) {
      a = a._reactInternals;
      var f = cn(), v = Fr(f);
      v.tag = 1, v.payload = i, u != null && (v.callback = u), i = Zr(a, v, f), i !== null && (Qe(i, a, f), cu(i, a, f));
    },
    enqueueForceUpdate: function(a, i) {
      a = a._reactInternals;
      var u = cn(), f = Fr(u);
      f.tag = 2, i != null && (f.callback = i), i = Zr(a, f, u), i !== null && (Qe(i, a, u), cu(i, a, u));
    }
  };
  function sS(a, i, u, f, v, m, _) {
    return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(f, m, _) : i.prototype && i.prototype.isPureReactComponent ? !eu(u, f) || !eu(v, m) : !0;
  }
  function hS(a, i, u, f) {
    a = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(u, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(u, f), i.state !== a && Td.enqueueReplaceState(i, i.state, null);
  }
  function La(a, i) {
    var u = i;
    if ("ref" in i) {
      u = {};
      for (var f in i)
        f !== "ref" && (u[f] = i[f]);
    }
    if (a = a.defaultProps) {
      u === i && (u = p({}, u));
      for (var v in a)
        u[v] === void 0 && (u[v] = a[v]);
    }
    return u;
  }
  function dS(a) {
    uc(a);
  }
  function vS(a) {
    console.error(a);
  }
  function pS(a) {
    uc(a);
  }
  function Cc(a, i) {
    try {
      var u = a.onUncaughtError;
      u(i.value, { componentStack: i.stack });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function yS(a, i, u) {
    try {
      var f = a.onCaughtError;
      f(u.value, {
        componentStack: u.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null
      });
    } catch (v) {
      setTimeout(function() {
        throw v;
      });
    }
  }
  function Ed(a, i, u) {
    return u = Fr(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Cc(a, i);
    }, u;
  }
  function mS(a) {
    return a = Fr(a), a.tag = 3, a;
  }
  function gS(a, i, u, f) {
    var v = u.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var m = f.value;
      a.payload = function() {
        return v(m);
      }, a.callback = function() {
        yS(i, u, f);
      };
    }
    var _ = u.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (a.callback = function() {
      yS(i, u, f), typeof v != "function" && (na === null ? na = /* @__PURE__ */ new Set([this]) : na.add(this));
      var C = f.stack;
      this.componentDidCatch(f.value, {
        componentStack: C !== null ? C : ""
      });
    });
  }
  function NN(a, i, u, f, v) {
    if (u.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
      if (i = u.alternate, i !== null && Ei(
        i,
        u,
        v,
        !0
      ), u = an.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return _n === null ? Hc() : u.alternate === null && ce === 0 && (ce = 3), u.flags &= -257, u.flags |= 65536, u.lanes = v, f === mc ? u.flags |= 16384 : (i = u.updateQueue, i === null ? u.updateQueue = /* @__PURE__ */ new Set([f]) : i.add(f), Wd(a, f, v)), !1;
          case 22:
            return u.flags |= 65536, f === mc ? u.flags |= 16384 : (i = u.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([f])
            }, u.updateQueue = i) : (u = i.retryQueue, u === null ? i.retryQueue = /* @__PURE__ */ new Set([f]) : u.add(f)), Wd(a, f, v)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Wd(a, f, v), Hc(), !1;
    }
    if (Rt)
      return i = an.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = v, f !== Xh && (a = Error(r(422), { cause: f }), au(gn(a, u)))) : (f !== Xh && (i = Error(r(423), {
        cause: f
      }), au(
        gn(i, u)
      )), a = a.current.alternate, a.flags |= 65536, v &= -v, a.lanes |= v, f = gn(f, u), v = Ed(
        a.stateNode,
        f,
        v
      ), rd(a, v), ce !== 4 && (ce = 2)), !1;
    var m = Error(r(520), { cause: f });
    if (m = gn(m, u), Ou === null ? Ou = [m] : Ou.push(m), ce !== 4 && (ce = 2), i === null) return !0;
    f = gn(f, u), u = i;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, a = v & -v, u.lanes |= a, a = Ed(u.stateNode, f, a), rd(u, a), !1;
        case 1:
          if (i = u.type, m = u.stateNode, (u.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (na === null || !na.has(m))))
            return u.flags |= 65536, v &= -v, u.lanes |= v, v = mS(v), gS(
              v,
              a,
              u,
              f
            ), rd(u, v), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Md = Error(r(461)), pe = !1;
  function De(a, i, u, f) {
    i.child = a === null ? _x(i, null, u, f) : $a(
      i,
      a.child,
      u,
      f
    );
  }
  function bS(a, i, u, f, v) {
    u = u.render;
    var m = i.ref;
    if ("ref" in f) {
      var _ = {};
      for (var C in f)
        C !== "ref" && (_[C] = f[C]);
    } else _ = f;
    return Na(i), f = cd(
      a,
      i,
      u,
      _,
      m,
      v
    ), C = fd(), a !== null && !pe ? (sd(a, i, v), vr(a, i, v)) : (Rt && C && Gh(i), i.flags |= 1, De(a, i, f, v), i.child);
  }
  function xS(a, i, u, f, v) {
    if (a === null) {
      var m = u.type;
      return typeof m == "function" && !Uh(m) && m.defaultProps === void 0 && u.compare === null ? (i.tag = 15, i.type = m, SS(
        a,
        i,
        m,
        f,
        v
      )) : (a = sc(
        u.type,
        null,
        f,
        i,
        i.mode,
        v
      ), a.ref = i.ref, a.return = i, i.child = a);
    }
    if (m = a.child, !zd(a, v)) {
      var _ = m.memoizedProps;
      if (u = u.compare, u = u !== null ? u : eu, u(_, f) && a.ref === i.ref)
        return vr(a, i, v);
    }
    return i.flags |= 1, a = lr(m, f), a.ref = i.ref, a.return = i, i.child = a;
  }
  function SS(a, i, u, f, v) {
    if (a !== null) {
      var m = a.memoizedProps;
      if (eu(m, f) && a.ref === i.ref)
        if (pe = !1, i.pendingProps = f = m, zd(a, v))
          (a.flags & 131072) !== 0 && (pe = !0);
        else
          return i.lanes = a.lanes, vr(a, i, v);
    }
    return jd(
      a,
      i,
      u,
      f,
      v
    );
  }
  function _S(a, i, u, f) {
    var v = f.children, m = a !== null ? a.memoizedState : null;
    if (a === null && i.stateNode === null && (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), f.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (m = m !== null ? m.baseLanes | u : u, a !== null) {
          for (f = i.child = a.child, v = 0; f !== null; )
            v = v | f.lanes | f.childLanes, f = f.sibling;
          f = v & ~m;
        } else f = 0, i.child = null;
        return OS(
          a,
          i,
          m,
          u,
          f
        );
      }
      if ((u & 536870912) !== 0)
        i.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && pc(
          i,
          m !== null ? m.cachePool : null
        ), m !== null ? wx(i, m) : id(), Tx(i);
      else
        return f = i.lanes = 536870912, OS(
          a,
          i,
          m !== null ? m.baseLanes | u : u,
          u,
          f
        );
    } else
      m !== null ? (pc(i, m.cachePool), wx(i, m), Wr(), i.memoizedState = null) : (a !== null && pc(i, null), id(), Wr());
    return De(a, i, v, u), i.child;
  }
  function yu(a, i) {
    return a !== null && a.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function OS(a, i, u, f, v) {
    var m = Jh();
    return m = m === null ? null : { parent: de._currentValue, pool: m }, i.memoizedState = {
      baseLanes: u,
      cachePool: m
    }, a !== null && pc(i, null), id(), Tx(i), a !== null && Ei(a, i, f, !0), i.childLanes = v, null;
  }
  function Dc(a, i) {
    return i = Nc(
      { mode: i.mode, children: i.children },
      a.mode
    ), i.ref = a.ref, a.child = i, i.return = a, i;
  }
  function AS(a, i, u) {
    return $a(i, a.child, null, u), a = Dc(i, i.pendingProps), a.flags |= 2, on(i), i.memoizedState = null, a;
  }
  function RN(a, i, u) {
    var f = i.pendingProps, v = (i.flags & 128) !== 0;
    if (i.flags &= -129, a === null) {
      if (Rt) {
        if (f.mode === "hidden")
          return a = Dc(i, f), i.lanes = 536870912, yu(null, a);
        if (ud(i), (a = ee) ? (a = z_(
          a,
          Sn
        ), a = a !== null && a.data === "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: Gr !== null ? { id: Yn, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ux(a), u.return = i, i.child = u, je = i, ee = null)) : a = null, a === null) throw Xr(i);
        return i.lanes = 536870912, null;
      }
      return Dc(i, f);
    }
    var m = a.memoizedState;
    if (m !== null) {
      var _ = m.dehydrated;
      if (ud(i), v)
        if (i.flags & 256)
          i.flags &= -257, i = AS(
            a,
            i,
            u
          );
        else if (i.memoizedState !== null)
          i.child = a.child, i.flags |= 128, i = null;
        else throw Error(r(558));
      else if (pe || Ei(a, i, u, !1), v = (u & a.childLanes) !== 0, pe || v) {
        if (f = Ft, f !== null && (_ = v1(f, u), _ !== 0 && _ !== m.retryLane))
          throw m.retryLane = _, ja(a, _), Qe(f, a, _), Md;
        Hc(), i = AS(
          a,
          i,
          u
        );
      } else
        a = m.treeContext, ee = On(_.nextSibling), je = i, Rt = !0, Yr = null, Sn = !1, a !== null && fx(i, a), i = Dc(i, f), i.flags |= 4096;
      return i;
    }
    return a = lr(a.child, {
      mode: f.mode,
      children: f.children
    }), a.ref = i.ref, i.child = a, a.return = i, a;
  }
  function Pc(a, i) {
    var u = i.ref;
    if (u === null)
      a !== null && a.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (a === null || a.ref !== u) && (i.flags |= 4194816);
    }
  }
  function jd(a, i, u, f, v) {
    return Na(i), u = cd(
      a,
      i,
      u,
      f,
      void 0,
      v
    ), f = fd(), a !== null && !pe ? (sd(a, i, v), vr(a, i, v)) : (Rt && f && Gh(i), i.flags |= 1, De(a, i, u, v), i.child);
  }
  function wS(a, i, u, f, v, m) {
    return Na(i), i.updateQueue = null, u = Mx(
      i,
      f,
      u,
      v
    ), Ex(a), f = fd(), a !== null && !pe ? (sd(a, i, m), vr(a, i, m)) : (Rt && f && Gh(i), i.flags |= 1, De(a, i, u, m), i.child);
  }
  function TS(a, i, u, f, v) {
    if (Na(i), i.stateNode === null) {
      var m = Oi, _ = u.contextType;
      typeof _ == "object" && _ !== null && (m = Ce(_)), m = new u(f, m), i.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Td, i.stateNode = m, m._reactInternals = i, m = i.stateNode, m.props = f, m.state = i.memoizedState, m.refs = {}, ed(i), _ = u.contextType, m.context = typeof _ == "object" && _ !== null ? Ce(_) : Oi, m.state = i.memoizedState, _ = u.getDerivedStateFromProps, typeof _ == "function" && (wd(
        i,
        u,
        _,
        f
      ), m.state = i.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (_ = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), _ !== m.state && Td.enqueueReplaceState(m, m.state, null), su(i, f, m, v), fu(), m.state = i.memoizedState), typeof m.componentDidMount == "function" && (i.flags |= 4194308), f = !0;
    } else if (a === null) {
      m = i.stateNode;
      var C = i.memoizedProps, q = La(u, C);
      m.props = q;
      var Y = m.context, J = u.contextType;
      _ = Oi, typeof J == "object" && J !== null && (_ = Ce(J));
      var at = u.getDerivedStateFromProps;
      J = typeof at == "function" || typeof m.getSnapshotBeforeUpdate == "function", C = i.pendingProps !== C, J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C || Y !== _) && hS(
        i,
        m,
        f,
        _
      ), Vr = !1;
      var X = i.memoizedState;
      m.state = X, su(i, f, m, v), fu(), Y = i.memoizedState, C || X !== Y || Vr ? (typeof at == "function" && (wd(
        i,
        u,
        at,
        f
      ), Y = i.memoizedState), (q = Vr || sS(
        i,
        u,
        q,
        f,
        X,
        Y,
        _
      )) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = Y), m.props = f, m.state = Y, m.context = _, f = q) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
    } else {
      m = i.stateNode, nd(a, i), _ = i.memoizedProps, J = La(u, _), m.props = J, at = i.pendingProps, X = m.context, Y = u.contextType, q = Oi, typeof Y == "object" && Y !== null && (q = Ce(Y)), C = u.getDerivedStateFromProps, (Y = typeof C == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (_ !== at || X !== q) && hS(
        i,
        m,
        f,
        q
      ), Vr = !1, X = i.memoizedState, m.state = X, su(i, f, m, v), fu();
      var Q = i.memoizedState;
      _ !== at || X !== Q || Vr || a !== null && a.dependencies !== null && dc(a.dependencies) ? (typeof C == "function" && (wd(
        i,
        u,
        C,
        f
      ), Q = i.memoizedState), (J = Vr || sS(
        i,
        u,
        J,
        f,
        X,
        Q,
        q
      ) || a !== null && a.dependencies !== null && dc(a.dependencies)) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(f, Q, q), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        f,
        Q,
        q
      )), typeof m.componentDidUpdate == "function" && (i.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = Q), m.props = f, m.state = Q, m.context = q, f = J) : (typeof m.componentDidUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 1024), f = !1);
    }
    return m = f, Pc(a, i), f = (i.flags & 128) !== 0, m || f ? (m = i.stateNode, u = f && typeof u.getDerivedStateFromError != "function" ? null : m.render(), i.flags |= 1, a !== null && f ? (i.child = $a(
      i,
      a.child,
      null,
      v
    ), i.child = $a(
      i,
      null,
      u,
      v
    )) : De(a, i, u, v), i.memoizedState = m.state, a = i.child) : a = vr(
      a,
      i,
      v
    ), a;
  }
  function ES(a, i, u, f) {
    return Da(), i.flags |= 256, De(a, i, u, f), i.child;
  }
  var Cd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Dd(a) {
    return { baseLanes: a, cachePool: yx() };
  }
  function Pd(a, i, u) {
    return a = a !== null ? a.childLanes & ~u : 0, i && (a |= ln), a;
  }
  function MS(a, i, u) {
    var f = i.pendingProps, v = !1, m = (i.flags & 128) !== 0, _;
    if ((_ = m) || (_ = a !== null && a.memoizedState === null ? !1 : (se.current & 2) !== 0), _ && (v = !0, i.flags &= -129), _ = (i.flags & 32) !== 0, i.flags &= -33, a === null) {
      if (Rt) {
        if (v ? Qr(i) : Wr(), (a = ee) ? (a = z_(
          a,
          Sn
        ), a = a !== null && a.data !== "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: Gr !== null ? { id: Yn, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ux(a), u.return = i, i.child = u, je = i, ee = null)) : a = null, a === null) throw Xr(i);
        return vv(a) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var C = f.children;
      return f = f.fallback, v ? (Wr(), v = i.mode, C = Nc(
        { mode: "hidden", children: C },
        v
      ), f = Ca(
        f,
        v,
        u,
        null
      ), C.return = i, f.return = i, C.sibling = f, i.child = C, f = i.child, f.memoizedState = Dd(u), f.childLanes = Pd(
        a,
        _,
        u
      ), i.memoizedState = Cd, yu(null, f)) : (Qr(i), Nd(i, C));
    }
    var q = a.memoizedState;
    if (q !== null && (C = q.dehydrated, C !== null)) {
      if (m)
        i.flags & 256 ? (Qr(i), i.flags &= -257, i = Rd(
          a,
          i,
          u
        )) : i.memoizedState !== null ? (Wr(), i.child = a.child, i.flags |= 128, i = null) : (Wr(), C = f.fallback, v = i.mode, f = Nc(
          { mode: "visible", children: f.children },
          v
        ), C = Ca(
          C,
          v,
          u,
          null
        ), C.flags |= 2, f.return = i, C.return = i, f.sibling = C, i.child = f, $a(
          i,
          a.child,
          null,
          u
        ), f = i.child, f.memoizedState = Dd(u), f.childLanes = Pd(
          a,
          _,
          u
        ), i.memoizedState = Cd, i = yu(null, f));
      else if (Qr(i), vv(C)) {
        if (_ = C.nextSibling && C.nextSibling.dataset, _) var Y = _.dgst;
        _ = Y, f = Error(r(419)), f.stack = "", f.digest = _, au({ value: f, source: null, stack: null }), i = Rd(
          a,
          i,
          u
        );
      } else if (pe || Ei(a, i, u, !1), _ = (u & a.childLanes) !== 0, pe || _) {
        if (_ = Ft, _ !== null && (f = v1(_, u), f !== 0 && f !== q.retryLane))
          throw q.retryLane = f, ja(a, f), Qe(_, a, f), Md;
        dv(C) || Hc(), i = Rd(
          a,
          i,
          u
        );
      } else
        dv(C) ? (i.flags |= 192, i.child = a.child, i = null) : (a = q.treeContext, ee = On(
          C.nextSibling
        ), je = i, Rt = !0, Yr = null, Sn = !1, a !== null && fx(i, a), i = Nd(
          i,
          f.children
        ), i.flags |= 4096);
      return i;
    }
    return v ? (Wr(), C = f.fallback, v = i.mode, q = a.child, Y = q.sibling, f = lr(q, {
      mode: "hidden",
      children: f.children
    }), f.subtreeFlags = q.subtreeFlags & 65011712, Y !== null ? C = lr(
      Y,
      C
    ) : (C = Ca(
      C,
      v,
      u,
      null
    ), C.flags |= 2), C.return = i, f.return = i, f.sibling = C, i.child = f, yu(null, f), f = i.child, C = a.child.memoizedState, C === null ? C = Dd(u) : (v = C.cachePool, v !== null ? (q = de._currentValue, v = v.parent !== q ? { parent: q, pool: q } : v) : v = yx(), C = {
      baseLanes: C.baseLanes | u,
      cachePool: v
    }), f.memoizedState = C, f.childLanes = Pd(
      a,
      _,
      u
    ), i.memoizedState = Cd, yu(a.child, f)) : (Qr(i), u = a.child, a = u.sibling, u = lr(u, {
      mode: "visible",
      children: f.children
    }), u.return = i, u.sibling = null, a !== null && (_ = i.deletions, _ === null ? (i.deletions = [a], i.flags |= 16) : _.push(a)), i.child = u, i.memoizedState = null, u);
  }
  function Nd(a, i) {
    return i = Nc(
      { mode: "visible", children: i },
      a.mode
    ), i.return = a, a.child = i;
  }
  function Nc(a, i) {
    return a = rn(22, a, null, i), a.lanes = 0, a;
  }
  function Rd(a, i, u) {
    return $a(i, a.child, null, u), a = Nd(
      i,
      i.pendingProps.children
    ), a.flags |= 2, i.memoizedState = null, a;
  }
  function jS(a, i, u) {
    a.lanes |= i;
    var f = a.alternate;
    f !== null && (f.lanes |= i), Fh(a.return, i, u);
  }
  function qd(a, i, u, f, v, m) {
    var _ = a.memoizedState;
    _ === null ? a.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: f,
      tail: u,
      tailMode: v,
      treeForkCount: m
    } : (_.isBackwards = i, _.rendering = null, _.renderingStartTime = 0, _.last = f, _.tail = u, _.tailMode = v, _.treeForkCount = m);
  }
  function CS(a, i, u) {
    var f = i.pendingProps, v = f.revealOrder, m = f.tail;
    f = f.children;
    var _ = se.current, C = (_ & 2) !== 0;
    if (C ? (_ = _ & 1 | 2, i.flags |= 128) : _ &= 1, et(se, _), De(a, i, f, u), f = Rt ? ru : 0, !C && a !== null && (a.flags & 128) !== 0)
      t: for (a = i.child; a !== null; ) {
        if (a.tag === 13)
          a.memoizedState !== null && jS(a, u, i);
        else if (a.tag === 19)
          jS(a, u, i);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === i) break t;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === i)
            break t;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    switch (v) {
      case "forwards":
        for (u = i.child, v = null; u !== null; )
          a = u.alternate, a !== null && Sc(a) === null && (v = u), u = u.sibling;
        u = v, u === null ? (v = i.child, i.child = null) : (v = u.sibling, u.sibling = null), qd(
          i,
          !1,
          v,
          u,
          m,
          f
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, v = i.child, i.child = null; v !== null; ) {
          if (a = v.alternate, a !== null && Sc(a) === null) {
            i.child = v;
            break;
          }
          a = v.sibling, v.sibling = u, u = v, v = a;
        }
        qd(
          i,
          !0,
          u,
          null,
          m,
          f
        );
        break;
      case "together":
        qd(
          i,
          !1,
          null,
          null,
          void 0,
          f
        );
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function vr(a, i, u) {
    if (a !== null && (i.dependencies = a.dependencies), ea |= i.lanes, (u & i.childLanes) === 0)
      if (a !== null) {
        if (Ei(
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
      for (a = i.child, u = lr(a, a.pendingProps), i.child = u, u.return = i; a.sibling !== null; )
        a = a.sibling, u = u.sibling = lr(a, a.pendingProps), u.return = i;
      u.sibling = null;
    }
    return i.child;
  }
  function zd(a, i) {
    return (a.lanes & i) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && dc(a)));
  }
  function qN(a, i, u) {
    switch (i.tag) {
      case 3:
        kt(i, i.stateNode.containerInfo), Kr(i, de, a.memoizedState.cache), Da();
        break;
      case 27:
      case 5:
        xt(i);
        break;
      case 4:
        kt(i, i.stateNode.containerInfo);
        break;
      case 10:
        Kr(
          i,
          i.type,
          i.memoizedProps.value
        );
        break;
      case 31:
        if (i.memoizedState !== null)
          return i.flags |= 128, ud(i), null;
        break;
      case 13:
        var f = i.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (Qr(i), i.flags |= 128, null) : (u & i.child.childLanes) !== 0 ? MS(a, i, u) : (Qr(i), a = vr(
            a,
            i,
            u
          ), a !== null ? a.sibling : null);
        Qr(i);
        break;
      case 19:
        var v = (a.flags & 128) !== 0;
        if (f = (u & i.childLanes) !== 0, f || (Ei(
          a,
          i,
          u,
          !1
        ), f = (u & i.childLanes) !== 0), v) {
          if (f)
            return CS(
              a,
              i,
              u
            );
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), et(se, se.current), f) break;
        return null;
      case 22:
        return i.lanes = 0, _S(
          a,
          i,
          u,
          i.pendingProps
        );
      case 24:
        Kr(i, de, a.memoizedState.cache);
    }
    return vr(a, i, u);
  }
  function DS(a, i, u) {
    if (a !== null)
      if (a.memoizedProps !== i.pendingProps)
        pe = !0;
      else {
        if (!zd(a, u) && (i.flags & 128) === 0)
          return pe = !1, qN(
            a,
            i,
            u
          );
        pe = (a.flags & 131072) !== 0;
      }
    else
      pe = !1, Rt && (i.flags & 1048576) !== 0 && cx(i, ru, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        t: {
          var f = i.pendingProps;
          if (a = qa(i.elementType), i.type = a, typeof a == "function")
            Uh(a) ? (f = La(a, f), i.tag = 1, i = TS(
              null,
              i,
              a,
              f,
              u
            )) : (i.tag = 0, i = jd(
              null,
              i,
              a,
              f,
              u
            ));
          else {
            if (a != null) {
              var v = a.$$typeof;
              if (v === j) {
                i.tag = 11, i = bS(
                  null,
                  i,
                  a,
                  f,
                  u
                );
                break t;
              } else if (v === D) {
                i.tag = 14, i = xS(
                  null,
                  i,
                  a,
                  f,
                  u
                );
                break t;
              }
            }
            throw i = Z(a) || a, Error(r(306, i, ""));
          }
        }
        return i;
      case 0:
        return jd(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 1:
        return f = i.type, v = La(
          f,
          i.pendingProps
        ), TS(
          a,
          i,
          f,
          v,
          u
        );
      case 3:
        t: {
          if (kt(
            i,
            i.stateNode.containerInfo
          ), a === null) throw Error(r(387));
          f = i.pendingProps;
          var m = i.memoizedState;
          v = m.element, nd(a, i), su(i, f, null, u);
          var _ = i.memoizedState;
          if (f = _.cache, Kr(i, de, f), f !== m.cache && Zh(
            i,
            [de],
            u,
            !0
          ), fu(), f = _.element, m.isDehydrated)
            if (m = {
              element: f,
              isDehydrated: !1,
              cache: _.cache
            }, i.updateQueue.baseState = m, i.memoizedState = m, i.flags & 256) {
              i = ES(
                a,
                i,
                f,
                u
              );
              break t;
            } else if (f !== v) {
              v = gn(
                Error(r(424)),
                i
              ), au(v), i = ES(
                a,
                i,
                f,
                u
              );
              break t;
            } else {
              switch (a = i.stateNode.containerInfo, a.nodeType) {
                case 9:
                  a = a.body;
                  break;
                default:
                  a = a.nodeName === "HTML" ? a.ownerDocument.body : a;
              }
              for (ee = On(a.firstChild), je = i, Rt = !0, Yr = null, Sn = !0, u = _x(
                i,
                null,
                f,
                u
              ), i.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Da(), f === v) {
              i = vr(
                a,
                i,
                u
              );
              break t;
            }
            De(a, i, f, u);
          }
          i = i.child;
        }
        return i;
      case 26:
        return Pc(a, i), a === null ? (u = H_(
          i.type,
          null,
          i.pendingProps,
          null
        )) ? i.memoizedState = u : Rt || (u = i.type, a = i.pendingProps, f = Fc(
          mt.current
        ).createElement(u), f[Me] = i, f[Ye] = a, Pe(f, u, a), Ae(f), i.stateNode = f) : i.memoizedState = H_(
          i.type,
          a.memoizedProps,
          i.pendingProps,
          a.memoizedState
        ), null;
      case 27:
        return xt(i), a === null && Rt && (f = i.stateNode = L_(
          i.type,
          i.pendingProps,
          mt.current
        ), je = i, Sn = !0, v = ee, oa(i.type) ? (pv = v, ee = On(f.firstChild)) : ee = v), De(
          a,
          i,
          i.pendingProps.children,
          u
        ), Pc(a, i), a === null && (i.flags |= 4194304), i.child;
      case 5:
        return a === null && Rt && ((v = f = ee) && (f = sR(
          f,
          i.type,
          i.pendingProps,
          Sn
        ), f !== null ? (i.stateNode = f, je = i, ee = On(f.firstChild), Sn = !1, v = !0) : v = !1), v || Xr(i)), xt(i), v = i.type, m = i.pendingProps, _ = a !== null ? a.memoizedProps : null, f = m.children, fv(v, m) ? f = null : _ !== null && fv(v, _) && (i.flags |= 32), i.memoizedState !== null && (v = cd(
          a,
          i,
          TN,
          null,
          null,
          u
        ), Du._currentValue = v), Pc(a, i), De(a, i, f, u), i.child;
      case 6:
        return a === null && Rt && ((a = u = ee) && (u = hR(
          u,
          i.pendingProps,
          Sn
        ), u !== null ? (i.stateNode = u, je = i, ee = null, a = !0) : a = !1), a || Xr(i)), null;
      case 13:
        return MS(a, i, u);
      case 4:
        return kt(
          i,
          i.stateNode.containerInfo
        ), f = i.pendingProps, a === null ? i.child = $a(
          i,
          null,
          f,
          u
        ) : De(a, i, f, u), i.child;
      case 11:
        return bS(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 7:
        return De(
          a,
          i,
          i.pendingProps,
          u
        ), i.child;
      case 8:
        return De(
          a,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 12:
        return De(
          a,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 10:
        return f = i.pendingProps, Kr(i, i.type, f.value), De(a, i, f.children, u), i.child;
      case 9:
        return v = i.type._context, f = i.pendingProps.children, Na(i), v = Ce(v), f = f(v), i.flags |= 1, De(a, i, f, u), i.child;
      case 14:
        return xS(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 15:
        return SS(
          a,
          i,
          i.type,
          i.pendingProps,
          u
        );
      case 19:
        return CS(a, i, u);
      case 31:
        return RN(a, i, u);
      case 22:
        return _S(
          a,
          i,
          u,
          i.pendingProps
        );
      case 24:
        return Na(i), f = Ce(de), a === null ? (v = Jh(), v === null && (v = Ft, m = Qh(), v.pooledCache = m, m.refCount++, m !== null && (v.pooledCacheLanes |= u), v = m), i.memoizedState = { parent: f, cache: v }, ed(i), Kr(i, de, v)) : ((a.lanes & u) !== 0 && (nd(a, i), su(i, null, null, u), fu()), v = a.memoizedState, m = i.memoizedState, v.parent !== f ? (v = { parent: f, cache: f }, i.memoizedState = v, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = v), Kr(i, de, f)) : (f = m.cache, Kr(i, de, f), f !== v.cache && Zh(
          i,
          [de],
          u,
          !0
        ))), De(
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
  function pr(a) {
    a.flags |= 4;
  }
  function $d(a, i, u, f, v) {
    if ((i = (a.mode & 32) !== 0) && (i = !1), i) {
      if (a.flags |= 16777216, (v & 335544128) === v)
        if (a.stateNode.complete) a.flags |= 8192;
        else if (a_()) a.flags |= 8192;
        else
          throw za = mc, td;
    } else a.flags &= -16777217;
  }
  function PS(a, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      a.flags &= -16777217;
    else if (a.flags |= 16777216, !K_(i))
      if (a_()) a.flags |= 8192;
      else
        throw za = mc, td;
  }
  function Rc(a, i) {
    i !== null && (a.flags |= 4), a.flags & 16384 && (i = a.tag !== 22 ? s1() : 536870912, a.lanes |= i, Li |= i);
  }
  function mu(a, i) {
    if (!Rt)
      switch (a.tailMode) {
        case "hidden":
          i = a.tail;
          for (var u = null; i !== null; )
            i.alternate !== null && (u = i), i = i.sibling;
          u === null ? a.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = a.tail;
          for (var f = null; u !== null; )
            u.alternate !== null && (f = u), u = u.sibling;
          f === null ? i || a.tail === null ? a.tail = null : a.tail.sibling = null : f.sibling = null;
      }
  }
  function ne(a) {
    var i = a.alternate !== null && a.alternate.child === a.child, u = 0, f = 0;
    if (i)
      for (var v = a.child; v !== null; )
        u |= v.lanes | v.childLanes, f |= v.subtreeFlags & 65011712, f |= v.flags & 65011712, v.return = a, v = v.sibling;
    else
      for (v = a.child; v !== null; )
        u |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = a, v = v.sibling;
    return a.subtreeFlags |= f, a.childLanes = u, i;
  }
  function zN(a, i, u) {
    var f = i.pendingProps;
    switch (Yh(i), i.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ne(i), null;
      case 1:
        return ne(i), null;
      case 3:
        return u = i.stateNode, f = null, a !== null && (f = a.memoizedState.cache), i.memoizedState.cache !== f && (i.flags |= 2048), sr(de), ct(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (a === null || a.child === null) && (Ti(i) ? pr(i) : a === null || a.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Kh())), ne(i), null;
      case 26:
        var v = i.type, m = i.memoizedState;
        return a === null ? (pr(i), m !== null ? (ne(i), PS(i, m)) : (ne(i), $d(
          i,
          v,
          null,
          f,
          u
        ))) : m ? m !== a.memoizedState ? (pr(i), ne(i), PS(i, m)) : (ne(i), i.flags &= -16777217) : (a = a.memoizedProps, a !== f && pr(i), ne(i), $d(
          i,
          v,
          a,
          f,
          u
        )), null;
      case 27:
        if (St(i), u = mt.current, v = i.type, a !== null && i.stateNode != null)
          a.memoizedProps !== f && pr(i);
        else {
          if (!f) {
            if (i.stateNode === null)
              throw Error(r(166));
            return ne(i), null;
          }
          a = ft.current, Ti(i) ? sx(i) : (a = L_(v, f, u), i.stateNode = a, pr(i));
        }
        return ne(i), null;
      case 5:
        if (St(i), v = i.type, a !== null && i.stateNode != null)
          a.memoizedProps !== f && pr(i);
        else {
          if (!f) {
            if (i.stateNode === null)
              throw Error(r(166));
            return ne(i), null;
          }
          if (m = ft.current, Ti(i))
            sx(i);
          else {
            var _ = Fc(
              mt.current
            );
            switch (m) {
              case 1:
                m = _.createElementNS(
                  "http://www.w3.org/2000/svg",
                  v
                );
                break;
              case 2:
                m = _.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  v
                );
                break;
              default:
                switch (v) {
                  case "svg":
                    m = _.createElementNS(
                      "http://www.w3.org/2000/svg",
                      v
                    );
                    break;
                  case "math":
                    m = _.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      v
                    );
                    break;
                  case "script":
                    m = _.createElement("div"), m.innerHTML = "<script><\/script>", m = m.removeChild(
                      m.firstChild
                    );
                    break;
                  case "select":
                    m = typeof f.is == "string" ? _.createElement("select", {
                      is: f.is
                    }) : _.createElement("select"), f.multiple ? m.multiple = !0 : f.size && (m.size = f.size);
                    break;
                  default:
                    m = typeof f.is == "string" ? _.createElement(v, { is: f.is }) : _.createElement(v);
                }
            }
            m[Me] = i, m[Ye] = f;
            t: for (_ = i.child; _ !== null; ) {
              if (_.tag === 5 || _.tag === 6)
                m.appendChild(_.stateNode);
              else if (_.tag !== 4 && _.tag !== 27 && _.child !== null) {
                _.child.return = _, _ = _.child;
                continue;
              }
              if (_ === i) break t;
              for (; _.sibling === null; ) {
                if (_.return === null || _.return === i)
                  break t;
                _ = _.return;
              }
              _.sibling.return = _.return, _ = _.sibling;
            }
            i.stateNode = m;
            t: switch (Pe(m, v, f), v) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                f = !!f.autoFocus;
                break t;
              case "img":
                f = !0;
                break t;
              default:
                f = !1;
            }
            f && pr(i);
          }
        }
        return ne(i), $d(
          i,
          i.type,
          a === null ? null : a.memoizedProps,
          i.pendingProps,
          u
        ), null;
      case 6:
        if (a && i.stateNode != null)
          a.memoizedProps !== f && pr(i);
        else {
          if (typeof f != "string" && i.stateNode === null)
            throw Error(r(166));
          if (a = mt.current, Ti(i)) {
            if (a = i.stateNode, u = i.memoizedProps, f = null, v = je, v !== null)
              switch (v.tag) {
                case 27:
                case 5:
                  f = v.memoizedProps;
              }
            a[Me] = i, a = !!(a.nodeValue === u || f !== null && f.suppressHydrationWarning === !0 || M_(a.nodeValue, u)), a || Xr(i, !0);
          } else
            a = Fc(a).createTextNode(
              f
            ), a[Me] = i, i.stateNode = a;
        }
        return ne(i), null;
      case 31:
        if (u = i.memoizedState, a === null || a.memoizedState !== null) {
          if (f = Ti(i), u !== null) {
            if (a === null) {
              if (!f) throw Error(r(318));
              if (a = i.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(557));
              a[Me] = i;
            } else
              Da(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            ne(i), a = !1;
          } else
            u = Kh(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = u), a = !0;
          if (!a)
            return i.flags & 256 ? (on(i), i) : (on(i), null);
          if ((i.flags & 128) !== 0)
            throw Error(r(558));
        }
        return ne(i), null;
      case 13:
        if (f = i.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
          if (v = Ti(i), f !== null && f.dehydrated !== null) {
            if (a === null) {
              if (!v) throw Error(r(318));
              if (v = i.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(r(317));
              v[Me] = i;
            } else
              Da(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            ne(i), v = !1;
          } else
            v = Kh(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = v), v = !0;
          if (!v)
            return i.flags & 256 ? (on(i), i) : (on(i), null);
        }
        return on(i), (i.flags & 128) !== 0 ? (i.lanes = u, i) : (u = f !== null, a = a !== null && a.memoizedState !== null, u && (f = i.child, v = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (v = f.alternate.memoizedState.cachePool.pool), m = null, f.memoizedState !== null && f.memoizedState.cachePool !== null && (m = f.memoizedState.cachePool.pool), m !== v && (f.flags |= 2048)), u !== a && u && (i.child.flags |= 8192), Rc(i, i.updateQueue), ne(i), null);
      case 4:
        return ct(), a === null && iv(i.stateNode.containerInfo), ne(i), null;
      case 10:
        return sr(i.type), ne(i), null;
      case 19:
        if (U(se), f = i.memoizedState, f === null) return ne(i), null;
        if (v = (i.flags & 128) !== 0, m = f.rendering, m === null)
          if (v) mu(f, !1);
          else {
            if (ce !== 0 || a !== null && (a.flags & 128) !== 0)
              for (a = i.child; a !== null; ) {
                if (m = Sc(a), m !== null) {
                  for (i.flags |= 128, mu(f, !1), a = m.updateQueue, i.updateQueue = a, Rc(i, a), i.subtreeFlags = 0, a = u, u = i.child; u !== null; )
                    ox(u, a), u = u.sibling;
                  return et(
                    se,
                    se.current & 1 | 2
                  ), Rt && cr(i, f.treeForkCount), i.child;
                }
                a = a.sibling;
              }
            f.tail !== null && $e() > Lc && (i.flags |= 128, v = !0, mu(f, !1), i.lanes = 4194304);
          }
        else {
          if (!v)
            if (a = Sc(m), a !== null) {
              if (i.flags |= 128, v = !0, a = a.updateQueue, i.updateQueue = a, Rc(i, a), mu(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !Rt)
                return ne(i), null;
            } else
              2 * $e() - f.renderingStartTime > Lc && u !== 536870912 && (i.flags |= 128, v = !0, mu(f, !1), i.lanes = 4194304);
          f.isBackwards ? (m.sibling = i.child, i.child = m) : (a = f.last, a !== null ? a.sibling = m : i.child = m, f.last = m);
        }
        return f.tail !== null ? (a = f.tail, f.rendering = a, f.tail = a.sibling, f.renderingStartTime = $e(), a.sibling = null, u = se.current, et(
          se,
          v ? u & 1 | 2 : u & 1
        ), Rt && cr(i, f.treeForkCount), a) : (ne(i), null);
      case 22:
      case 23:
        return on(i), od(), f = i.memoizedState !== null, a !== null ? a.memoizedState !== null !== f && (i.flags |= 8192) : f && (i.flags |= 8192), f ? (u & 536870912) !== 0 && (i.flags & 128) === 0 && (ne(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : ne(i), u = i.updateQueue, u !== null && Rc(i, u.retryQueue), u = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== u && (i.flags |= 2048), a !== null && U(Ra), null;
      case 24:
        return u = null, a !== null && (u = a.memoizedState.cache), i.memoizedState.cache !== u && (i.flags |= 2048), sr(de), ne(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function $N(a, i) {
    switch (Yh(i), i.tag) {
      case 1:
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 3:
        return sr(de), ct(), a = i.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (i.flags = a & -65537 | 128, i) : null;
      case 26:
      case 27:
      case 5:
        return St(i), null;
      case 31:
        if (i.memoizedState !== null) {
          if (on(i), i.alternate === null)
            throw Error(r(340));
          Da();
        }
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 13:
        if (on(i), a = i.memoizedState, a !== null && a.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(r(340));
          Da();
        }
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 19:
        return U(se), null;
      case 4:
        return ct(), null;
      case 10:
        return sr(i.type), null;
      case 22:
      case 23:
        return on(i), od(), a !== null && U(Ra), a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 24:
        return sr(de), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function NS(a, i) {
    switch (Yh(i), i.tag) {
      case 3:
        sr(de), ct();
        break;
      case 26:
      case 27:
      case 5:
        St(i);
        break;
      case 4:
        ct();
        break;
      case 31:
        i.memoizedState !== null && on(i);
        break;
      case 13:
        on(i);
        break;
      case 19:
        U(se);
        break;
      case 10:
        sr(i.type);
        break;
      case 22:
      case 23:
        on(i), od(), a !== null && U(Ra);
        break;
      case 24:
        sr(de);
    }
  }
  function gu(a, i) {
    try {
      var u = i.updateQueue, f = u !== null ? u.lastEffect : null;
      if (f !== null) {
        var v = f.next;
        u = v;
        do {
          if ((u.tag & a) === a) {
            f = void 0;
            var m = u.create, _ = u.inst;
            f = m(), _.destroy = f;
          }
          u = u.next;
        } while (u !== v);
      }
    } catch (C) {
      Gt(i, i.return, C);
    }
  }
  function Jr(a, i, u) {
    try {
      var f = i.updateQueue, v = f !== null ? f.lastEffect : null;
      if (v !== null) {
        var m = v.next;
        f = m;
        do {
          if ((f.tag & a) === a) {
            var _ = f.inst, C = _.destroy;
            if (C !== void 0) {
              _.destroy = void 0, v = i;
              var q = u, Y = C;
              try {
                Y();
              } catch (J) {
                Gt(
                  v,
                  q,
                  J
                );
              }
            }
          }
          f = f.next;
        } while (f !== m);
      }
    } catch (J) {
      Gt(i, i.return, J);
    }
  }
  function RS(a) {
    var i = a.updateQueue;
    if (i !== null) {
      var u = a.stateNode;
      try {
        Ax(i, u);
      } catch (f) {
        Gt(a, a.return, f);
      }
    }
  }
  function qS(a, i, u) {
    u.props = La(
      a.type,
      a.memoizedProps
    ), u.state = a.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (f) {
      Gt(a, i, f);
    }
  }
  function bu(a, i) {
    try {
      var u = a.ref;
      if (u !== null) {
        switch (a.tag) {
          case 26:
          case 27:
          case 5:
            var f = a.stateNode;
            break;
          case 30:
            f = a.stateNode;
            break;
          default:
            f = a.stateNode;
        }
        typeof u == "function" ? a.refCleanup = u(f) : u.current = f;
      }
    } catch (v) {
      Gt(a, i, v);
    }
  }
  function Kn(a, i) {
    var u = a.ref, f = a.refCleanup;
    if (u !== null)
      if (typeof f == "function")
        try {
          f();
        } catch (v) {
          Gt(a, i, v);
        } finally {
          a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (v) {
          Gt(a, i, v);
        }
      else u.current = null;
  }
  function zS(a) {
    var i = a.type, u = a.memoizedProps, f = a.stateNode;
    try {
      t: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && f.focus();
          break t;
        case "img":
          u.src ? f.src = u.src : u.srcSet && (f.srcset = u.srcSet);
      }
    } catch (v) {
      Gt(a, a.return, v);
    }
  }
  function Bd(a, i, u) {
    try {
      var f = a.stateNode;
      iR(f, a.type, u, i), f[Ye] = i;
    } catch (v) {
      Gt(a, a.return, v);
    }
  }
  function $S(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 26 || a.tag === 27 && oa(a.type) || a.tag === 4;
  }
  function Ld(a) {
    t: for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || $S(a.return)) return null;
        a = a.return;
      }
      for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.tag === 27 && oa(a.type) || a.flags & 2 || a.child === null || a.tag === 4) continue t;
        a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function kd(a, i, u) {
    var f = a.tag;
    if (f === 5 || f === 6)
      a = a.stateNode, i ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(a, i) : (i = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, i.appendChild(a), u = u._reactRootContainer, u != null || i.onclick !== null || (i.onclick = or));
    else if (f !== 4 && (f === 27 && oa(a.type) && (u = a.stateNode, i = null), a = a.child, a !== null))
      for (kd(a, i, u), a = a.sibling; a !== null; )
        kd(a, i, u), a = a.sibling;
  }
  function qc(a, i, u) {
    var f = a.tag;
    if (f === 5 || f === 6)
      a = a.stateNode, i ? u.insertBefore(a, i) : u.appendChild(a);
    else if (f !== 4 && (f === 27 && oa(a.type) && (u = a.stateNode), a = a.child, a !== null))
      for (qc(a, i, u), a = a.sibling; a !== null; )
        qc(a, i, u), a = a.sibling;
  }
  function BS(a) {
    var i = a.stateNode, u = a.memoizedProps;
    try {
      for (var f = a.type, v = i.attributes; v.length; )
        i.removeAttributeNode(v[0]);
      Pe(i, f, u), i[Me] = a, i[Ye] = u;
    } catch (m) {
      Gt(a, a.return, m);
    }
  }
  var yr = !1, ye = !1, Ud = !1, LS = typeof WeakSet == "function" ? WeakSet : Set, we = null;
  function BN(a, i) {
    if (a = a.containerInfo, lv = nf, a = Q1(a), Rh(a)) {
      if ("selectionStart" in a)
        var u = {
          start: a.selectionStart,
          end: a.selectionEnd
        };
      else
        t: {
          u = (u = a.ownerDocument) && u.defaultView || window;
          var f = u.getSelection && u.getSelection();
          if (f && f.rangeCount !== 0) {
            u = f.anchorNode;
            var v = f.anchorOffset, m = f.focusNode;
            f = f.focusOffset;
            try {
              u.nodeType, m.nodeType;
            } catch {
              u = null;
              break t;
            }
            var _ = 0, C = -1, q = -1, Y = 0, J = 0, at = a, X = null;
            e: for (; ; ) {
              for (var Q; at !== u || v !== 0 && at.nodeType !== 3 || (C = _ + v), at !== m || f !== 0 && at.nodeType !== 3 || (q = _ + f), at.nodeType === 3 && (_ += at.nodeValue.length), (Q = at.firstChild) !== null; )
                X = at, at = Q;
              for (; ; ) {
                if (at === a) break e;
                if (X === u && ++Y === v && (C = _), X === m && ++J === f && (q = _), (Q = at.nextSibling) !== null) break;
                at = X, X = at.parentNode;
              }
              at = Q;
            }
            u = C === -1 || q === -1 ? null : { start: C, end: q };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (cv = { focusedElem: a, selectionRange: u }, nf = !1, we = i; we !== null; )
      if (i = we, a = i.child, (i.subtreeFlags & 1028) !== 0 && a !== null)
        a.return = i, we = a;
      else
        for (; we !== null; ) {
          switch (i = we, m = i.alternate, a = i.flags, i.tag) {
            case 0:
              if ((a & 4) !== 0 && (a = i.updateQueue, a = a !== null ? a.events : null, a !== null))
                for (u = 0; u < a.length; u++)
                  v = a[u], v.ref.impl = v.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((a & 1024) !== 0 && m !== null) {
                a = void 0, u = i, v = m.memoizedProps, m = m.memoizedState, f = u.stateNode;
                try {
                  var dt = La(
                    u.type,
                    v
                  );
                  a = f.getSnapshotBeforeUpdate(
                    dt,
                    m
                  ), f.__reactInternalSnapshotBeforeUpdate = a;
                } catch (gt) {
                  Gt(
                    u,
                    u.return,
                    gt
                  );
                }
              }
              break;
            case 3:
              if ((a & 1024) !== 0) {
                if (a = i.stateNode.containerInfo, u = a.nodeType, u === 9)
                  hv(a);
                else if (u === 1)
                  switch (a.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hv(a);
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
            a.return = i.return, we = a;
            break;
          }
          we = i.return;
        }
  }
  function kS(a, i, u) {
    var f = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        gr(a, u), f & 4 && gu(5, u);
        break;
      case 1:
        if (gr(a, u), f & 4)
          if (a = u.stateNode, i === null)
            try {
              a.componentDidMount();
            } catch (_) {
              Gt(u, u.return, _);
            }
          else {
            var v = La(
              u.type,
              i.memoizedProps
            );
            i = i.memoizedState;
            try {
              a.componentDidUpdate(
                v,
                i,
                a.__reactInternalSnapshotBeforeUpdate
              );
            } catch (_) {
              Gt(
                u,
                u.return,
                _
              );
            }
          }
        f & 64 && RS(u), f & 512 && bu(u, u.return);
        break;
      case 3:
        if (gr(a, u), f & 64 && (a = u.updateQueue, a !== null)) {
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
            Ax(a, i);
          } catch (_) {
            Gt(u, u.return, _);
          }
        }
        break;
      case 27:
        i === null && f & 4 && BS(u);
      case 26:
      case 5:
        gr(a, u), i === null && f & 4 && zS(u), f & 512 && bu(u, u.return);
        break;
      case 12:
        gr(a, u);
        break;
      case 31:
        gr(a, u), f & 4 && IS(a, u);
        break;
      case 13:
        gr(a, u), f & 4 && GS(a, u), f & 64 && (a = u.memoizedState, a !== null && (a = a.dehydrated, a !== null && (u = KN.bind(
          null,
          u
        ), dR(a, u))));
        break;
      case 22:
        if (f = u.memoizedState !== null || yr, !f) {
          i = i !== null && i.memoizedState !== null || ye, v = yr;
          var m = ye;
          yr = f, (ye = i) && !m ? br(
            a,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : gr(a, u), yr = v, ye = m;
        }
        break;
      case 30:
        break;
      default:
        gr(a, u);
    }
  }
  function US(a) {
    var i = a.alternate;
    i !== null && (a.alternate = null, US(i)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (i = a.stateNode, i !== null && mh(i)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
  }
  var ae = null, Ke = !1;
  function mr(a, i, u) {
    for (u = u.child; u !== null; )
      HS(a, i, u), u = u.sibling;
  }
  function HS(a, i, u) {
    if (tn && typeof tn.onCommitFiberUnmount == "function")
      try {
        tn.onCommitFiberUnmount(Io, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        ye || Kn(u, i), mr(
          a,
          i,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        ye || Kn(u, i);
        var f = ae, v = Ke;
        oa(u.type) && (ae = u.stateNode, Ke = !1), mr(
          a,
          i,
          u
        ), Mu(u.stateNode), ae = f, Ke = v;
        break;
      case 5:
        ye || Kn(u, i);
      case 6:
        if (f = ae, v = Ke, ae = null, mr(
          a,
          i,
          u
        ), ae = f, Ke = v, ae !== null)
          if (Ke)
            try {
              (ae.nodeType === 9 ? ae.body : ae.nodeName === "HTML" ? ae.ownerDocument.body : ae).removeChild(u.stateNode);
            } catch (m) {
              Gt(
                u,
                i,
                m
              );
            }
          else
            try {
              ae.removeChild(u.stateNode);
            } catch (m) {
              Gt(
                u,
                i,
                m
              );
            }
        break;
      case 18:
        ae !== null && (Ke ? (a = ae, R_(
          a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
          u.stateNode
        ), Ki(a)) : R_(ae, u.stateNode));
        break;
      case 4:
        f = ae, v = Ke, ae = u.stateNode.containerInfo, Ke = !0, mr(
          a,
          i,
          u
        ), ae = f, Ke = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Jr(2, u, i), ye || Jr(4, u, i), mr(
          a,
          i,
          u
        );
        break;
      case 1:
        ye || (Kn(u, i), f = u.stateNode, typeof f.componentWillUnmount == "function" && qS(
          u,
          i,
          f
        )), mr(
          a,
          i,
          u
        );
        break;
      case 21:
        mr(
          a,
          i,
          u
        );
        break;
      case 22:
        ye = (f = ye) || u.memoizedState !== null, mr(
          a,
          i,
          u
        ), ye = f;
        break;
      default:
        mr(
          a,
          i,
          u
        );
    }
  }
  function IS(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null))) {
      a = a.dehydrated;
      try {
        Ki(a);
      } catch (u) {
        Gt(i, i.return, u);
      }
    }
  }
  function GS(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
      try {
        Ki(a);
      } catch (u) {
        Gt(i, i.return, u);
      }
  }
  function LN(a) {
    switch (a.tag) {
      case 31:
      case 13:
      case 19:
        var i = a.stateNode;
        return i === null && (i = a.stateNode = new LS()), i;
      case 22:
        return a = a.stateNode, i = a._retryCache, i === null && (i = a._retryCache = new LS()), i;
      default:
        throw Error(r(435, a.tag));
    }
  }
  function zc(a, i) {
    var u = LN(a);
    i.forEach(function(f) {
      if (!u.has(f)) {
        u.add(f);
        var v = VN.bind(null, a, f);
        f.then(v, v);
      }
    });
  }
  function Ve(a, i) {
    var u = i.deletions;
    if (u !== null)
      for (var f = 0; f < u.length; f++) {
        var v = u[f], m = a, _ = i, C = _;
        t: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (oa(C.type)) {
                ae = C.stateNode, Ke = !1;
                break t;
              }
              break;
            case 5:
              ae = C.stateNode, Ke = !1;
              break t;
            case 3:
            case 4:
              ae = C.stateNode.containerInfo, Ke = !0;
              break t;
          }
          C = C.return;
        }
        if (ae === null) throw Error(r(160));
        HS(m, _, v), ae = null, Ke = !1, m = v.alternate, m !== null && (m.return = null), v.return = null;
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; )
        YS(i, a), i = i.sibling;
  }
  var zn = null;
  function YS(a, i) {
    var u = a.alternate, f = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ve(i, a), Fe(a), f & 4 && (Jr(3, a, a.return), gu(3, a), Jr(5, a, a.return));
        break;
      case 1:
        Ve(i, a), Fe(a), f & 512 && (ye || u === null || Kn(u, u.return)), f & 64 && yr && (a = a.updateQueue, a !== null && (f = a.callbacks, f !== null && (u = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = u === null ? f : u.concat(f))));
        break;
      case 26:
        var v = zn;
        if (Ve(i, a), Fe(a), f & 512 && (ye || u === null || Kn(u, u.return)), f & 4) {
          var m = u !== null ? u.memoizedState : null;
          if (f = a.memoizedState, u === null)
            if (f === null)
              if (a.stateNode === null) {
                t: {
                  f = a.type, u = a.memoizedProps, v = v.ownerDocument || v;
                  e: switch (f) {
                    case "title":
                      m = v.getElementsByTagName("title")[0], (!m || m[Xo] || m[Me] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = v.createElement(f), v.head.insertBefore(
                        m,
                        v.querySelector("head > title")
                      )), Pe(m, f, u), m[Me] = a, Ae(m), f = m;
                      break t;
                    case "link":
                      var _ = Y_(
                        "link",
                        "href",
                        v
                      ).get(f + (u.href || ""));
                      if (_) {
                        for (var C = 0; C < _.length; C++)
                          if (m = _[C], m.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && m.getAttribute("rel") === (u.rel == null ? null : u.rel) && m.getAttribute("title") === (u.title == null ? null : u.title) && m.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            _.splice(C, 1);
                            break e;
                          }
                      }
                      m = v.createElement(f), Pe(m, f, u), v.head.appendChild(m);
                      break;
                    case "meta":
                      if (_ = Y_(
                        "meta",
                        "content",
                        v
                      ).get(f + (u.content || ""))) {
                        for (C = 0; C < _.length; C++)
                          if (m = _[C], m.getAttribute("content") === (u.content == null ? null : "" + u.content) && m.getAttribute("name") === (u.name == null ? null : u.name) && m.getAttribute("property") === (u.property == null ? null : u.property) && m.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && m.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            _.splice(C, 1);
                            break e;
                          }
                      }
                      m = v.createElement(f), Pe(m, f, u), v.head.appendChild(m);
                      break;
                    default:
                      throw Error(r(468, f));
                  }
                  m[Me] = a, Ae(m), f = m;
                }
                a.stateNode = f;
              } else
                X_(
                  v,
                  a.type,
                  a.stateNode
                );
            else
              a.stateNode = G_(
                v,
                f,
                a.memoizedProps
              );
          else
            m !== f ? (m === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : m.count--, f === null ? X_(
              v,
              a.type,
              a.stateNode
            ) : G_(
              v,
              f,
              a.memoizedProps
            )) : f === null && a.stateNode !== null && Bd(
              a,
              a.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ve(i, a), Fe(a), f & 512 && (ye || u === null || Kn(u, u.return)), u !== null && f & 4 && Bd(
          a,
          a.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ve(i, a), Fe(a), f & 512 && (ye || u === null || Kn(u, u.return)), a.flags & 32) {
          v = a.stateNode;
          try {
            yi(v, "");
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        }
        f & 4 && a.stateNode != null && (v = a.memoizedProps, Bd(
          a,
          v,
          u !== null ? u.memoizedProps : v
        )), f & 1024 && (Ud = !0);
        break;
      case 6:
        if (Ve(i, a), Fe(a), f & 4) {
          if (a.stateNode === null)
            throw Error(r(162));
          f = a.memoizedProps, u = a.stateNode;
          try {
            u.nodeValue = f;
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        }
        break;
      case 3:
        if (Wc = null, v = zn, zn = Zc(i.containerInfo), Ve(i, a), zn = v, Fe(a), f & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ki(i.containerInfo);
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        Ud && (Ud = !1, XS(a));
        break;
      case 4:
        f = zn, zn = Zc(
          a.stateNode.containerInfo
        ), Ve(i, a), Fe(a), zn = f;
        break;
      case 12:
        Ve(i, a), Fe(a);
        break;
      case 31:
        Ve(i, a), Fe(a), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, zc(a, f)));
        break;
      case 13:
        Ve(i, a), Fe(a), a.child.flags & 8192 && a.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Bc = $e()), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, zc(a, f)));
        break;
      case 22:
        v = a.memoizedState !== null;
        var q = u !== null && u.memoizedState !== null, Y = yr, J = ye;
        if (yr = Y || v, ye = J || q, Ve(i, a), ye = J, yr = Y, Fe(a), f & 8192)
          t: for (i = a.stateNode, i._visibility = v ? i._visibility & -2 : i._visibility | 1, v && (u === null || q || yr || ye || ka(a)), u = null, i = a; ; ) {
            if (i.tag === 5 || i.tag === 26) {
              if (u === null) {
                q = u = i;
                try {
                  if (m = q.stateNode, v)
                    _ = m.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                  else {
                    C = q.stateNode;
                    var at = q.memoizedProps.style, X = at != null && at.hasOwnProperty("display") ? at.display : null;
                    C.style.display = X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                  }
                } catch (dt) {
                  Gt(q, q.return, dt);
                }
              }
            } else if (i.tag === 6) {
              if (u === null) {
                q = i;
                try {
                  q.stateNode.nodeValue = v ? "" : q.memoizedProps;
                } catch (dt) {
                  Gt(q, q.return, dt);
                }
              }
            } else if (i.tag === 18) {
              if (u === null) {
                q = i;
                try {
                  var Q = q.stateNode;
                  v ? q_(Q, !0) : q_(q.stateNode, !1);
                } catch (dt) {
                  Gt(q, q.return, dt);
                }
              }
            } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === a) && i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === a) break t;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === a) break t;
              u === i && (u = null), i = i.return;
            }
            u === i && (u = null), i.sibling.return = i.return, i = i.sibling;
          }
        f & 4 && (f = a.updateQueue, f !== null && (u = f.retryQueue, u !== null && (f.retryQueue = null, zc(a, u))));
        break;
      case 19:
        Ve(i, a), Fe(a), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, zc(a, f)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ve(i, a), Fe(a);
    }
  }
  function Fe(a) {
    var i = a.flags;
    if (i & 2) {
      try {
        for (var u, f = a.return; f !== null; ) {
          if ($S(f)) {
            u = f;
            break;
          }
          f = f.return;
        }
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var v = u.stateNode, m = Ld(a);
            qc(a, m, v);
            break;
          case 5:
            var _ = u.stateNode;
            u.flags & 32 && (yi(_, ""), u.flags &= -33);
            var C = Ld(a);
            qc(a, C, _);
            break;
          case 3:
          case 4:
            var q = u.stateNode.containerInfo, Y = Ld(a);
            kd(
              a,
              Y,
              q
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (J) {
        Gt(a, a.return, J);
      }
      a.flags &= -3;
    }
    i & 4096 && (a.flags &= -4097);
  }
  function XS(a) {
    if (a.subtreeFlags & 1024)
      for (a = a.child; a !== null; ) {
        var i = a;
        XS(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), a = a.sibling;
      }
  }
  function gr(a, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; )
        kS(a, i.alternate, i), i = i.sibling;
  }
  function ka(a) {
    for (a = a.child; a !== null; ) {
      var i = a;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jr(4, i, i.return), ka(i);
          break;
        case 1:
          Kn(i, i.return);
          var u = i.stateNode;
          typeof u.componentWillUnmount == "function" && qS(
            i,
            i.return,
            u
          ), ka(i);
          break;
        case 27:
          Mu(i.stateNode);
        case 26:
        case 5:
          Kn(i, i.return), ka(i);
          break;
        case 22:
          i.memoizedState === null && ka(i);
          break;
        case 30:
          ka(i);
          break;
        default:
          ka(i);
      }
      a = a.sibling;
    }
  }
  function br(a, i, u) {
    for (u = u && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var f = i.alternate, v = a, m = i, _ = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          br(
            v,
            m,
            u
          ), gu(4, m);
          break;
        case 1:
          if (br(
            v,
            m,
            u
          ), f = m, v = f.stateNode, typeof v.componentDidMount == "function")
            try {
              v.componentDidMount();
            } catch (Y) {
              Gt(f, f.return, Y);
            }
          if (f = m, v = f.updateQueue, v !== null) {
            var C = f.stateNode;
            try {
              var q = v.shared.hiddenCallbacks;
              if (q !== null)
                for (v.shared.hiddenCallbacks = null, v = 0; v < q.length; v++)
                  Ox(q[v], C);
            } catch (Y) {
              Gt(f, f.return, Y);
            }
          }
          u && _ & 64 && RS(m), bu(m, m.return);
          break;
        case 27:
          BS(m);
        case 26:
        case 5:
          br(
            v,
            m,
            u
          ), u && f === null && _ & 4 && zS(m), bu(m, m.return);
          break;
        case 12:
          br(
            v,
            m,
            u
          );
          break;
        case 31:
          br(
            v,
            m,
            u
          ), u && _ & 4 && IS(v, m);
          break;
        case 13:
          br(
            v,
            m,
            u
          ), u && _ & 4 && GS(v, m);
          break;
        case 22:
          m.memoizedState === null && br(
            v,
            m,
            u
          ), bu(m, m.return);
          break;
        case 30:
          break;
        default:
          br(
            v,
            m,
            u
          );
      }
      i = i.sibling;
    }
  }
  function Hd(a, i) {
    var u = null;
    a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), a = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (a = i.memoizedState.cachePool.pool), a !== u && (a != null && a.refCount++, u != null && iu(u));
  }
  function Id(a, i) {
    a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && iu(a));
  }
  function $n(a, i, u, f) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; )
        KS(
          a,
          i,
          u,
          f
        ), i = i.sibling;
  }
  function KS(a, i, u, f) {
    var v = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          a,
          i,
          u,
          f
        ), v & 2048 && gu(9, i);
        break;
      case 1:
        $n(
          a,
          i,
          u,
          f
        );
        break;
      case 3:
        $n(
          a,
          i,
          u,
          f
        ), v & 2048 && (a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && iu(a)));
        break;
      case 12:
        if (v & 2048) {
          $n(
            a,
            i,
            u,
            f
          ), a = i.stateNode;
          try {
            var m = i.memoizedProps, _ = m.id, C = m.onPostCommit;
            typeof C == "function" && C(
              _,
              i.alternate === null ? "mount" : "update",
              a.passiveEffectDuration,
              -0
            );
          } catch (q) {
            Gt(i, i.return, q);
          }
        } else
          $n(
            a,
            i,
            u,
            f
          );
        break;
      case 31:
        $n(
          a,
          i,
          u,
          f
        );
        break;
      case 13:
        $n(
          a,
          i,
          u,
          f
        );
        break;
      case 23:
        break;
      case 22:
        m = i.stateNode, _ = i.alternate, i.memoizedState !== null ? m._visibility & 2 ? $n(
          a,
          i,
          u,
          f
        ) : xu(a, i) : m._visibility & 2 ? $n(
          a,
          i,
          u,
          f
        ) : (m._visibility |= 2, zi(
          a,
          i,
          u,
          f,
          (i.subtreeFlags & 10256) !== 0 || !1
        )), v & 2048 && Hd(_, i);
        break;
      case 24:
        $n(
          a,
          i,
          u,
          f
        ), v & 2048 && Id(i.alternate, i);
        break;
      default:
        $n(
          a,
          i,
          u,
          f
        );
    }
  }
  function zi(a, i, u, f, v) {
    for (v = v && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null; ) {
      var m = a, _ = i, C = u, q = f, Y = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          zi(
            m,
            _,
            C,
            q,
            v
          ), gu(8, _);
          break;
        case 23:
          break;
        case 22:
          var J = _.stateNode;
          _.memoizedState !== null ? J._visibility & 2 ? zi(
            m,
            _,
            C,
            q,
            v
          ) : xu(
            m,
            _
          ) : (J._visibility |= 2, zi(
            m,
            _,
            C,
            q,
            v
          )), v && Y & 2048 && Hd(
            _.alternate,
            _
          );
          break;
        case 24:
          zi(
            m,
            _,
            C,
            q,
            v
          ), v && Y & 2048 && Id(_.alternate, _);
          break;
        default:
          zi(
            m,
            _,
            C,
            q,
            v
          );
      }
      i = i.sibling;
    }
  }
  function xu(a, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var u = a, f = i, v = f.flags;
        switch (f.tag) {
          case 22:
            xu(u, f), v & 2048 && Hd(
              f.alternate,
              f
            );
            break;
          case 24:
            xu(u, f), v & 2048 && Id(f.alternate, f);
            break;
          default:
            xu(u, f);
        }
        i = i.sibling;
      }
  }
  var Su = 8192;
  function $i(a, i, u) {
    if (a.subtreeFlags & Su)
      for (a = a.child; a !== null; )
        VS(
          a,
          i,
          u
        ), a = a.sibling;
  }
  function VS(a, i, u) {
    switch (a.tag) {
      case 26:
        $i(
          a,
          i,
          u
        ), a.flags & Su && a.memoizedState !== null && wR(
          u,
          zn,
          a.memoizedState,
          a.memoizedProps
        );
        break;
      case 5:
        $i(
          a,
          i,
          u
        );
        break;
      case 3:
      case 4:
        var f = zn;
        zn = Zc(a.stateNode.containerInfo), $i(
          a,
          i,
          u
        ), zn = f;
        break;
      case 22:
        a.memoizedState === null && (f = a.alternate, f !== null && f.memoizedState !== null ? (f = Su, Su = 16777216, $i(
          a,
          i,
          u
        ), Su = f) : $i(
          a,
          i,
          u
        ));
        break;
      default:
        $i(
          a,
          i,
          u
        );
    }
  }
  function FS(a) {
    var i = a.alternate;
    if (i !== null && (a = i.child, a !== null)) {
      i.child = null;
      do
        i = a.sibling, a.sibling = null, a = i;
      while (a !== null);
    }
  }
  function _u(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u];
          we = f, QS(
            f,
            a
          );
        }
      FS(a);
    }
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        ZS(a), a = a.sibling;
  }
  function ZS(a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        _u(a), a.flags & 2048 && Jr(9, a, a.return);
        break;
      case 3:
        _u(a);
        break;
      case 12:
        _u(a);
        break;
      case 22:
        var i = a.stateNode;
        a.memoizedState !== null && i._visibility & 2 && (a.return === null || a.return.tag !== 13) ? (i._visibility &= -3, $c(a)) : _u(a);
        break;
      default:
        _u(a);
    }
  }
  function $c(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u];
          we = f, QS(
            f,
            a
          );
        }
      FS(a);
    }
    for (a = a.child; a !== null; ) {
      switch (i = a, i.tag) {
        case 0:
        case 11:
        case 15:
          Jr(8, i, i.return), $c(i);
          break;
        case 22:
          u = i.stateNode, u._visibility & 2 && (u._visibility &= -3, $c(i));
          break;
        default:
          $c(i);
      }
      a = a.sibling;
    }
  }
  function QS(a, i) {
    for (; we !== null; ) {
      var u = we;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Jr(8, u, i);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var f = u.memoizedState.cachePool.pool;
            f != null && f.refCount++;
          }
          break;
        case 24:
          iu(u.memoizedState.cache);
      }
      if (f = u.child, f !== null) f.return = u, we = f;
      else
        t: for (u = a; we !== null; ) {
          f = we;
          var v = f.sibling, m = f.return;
          if (US(f), f === u) {
            we = null;
            break t;
          }
          if (v !== null) {
            v.return = m, we = v;
            break t;
          }
          we = m;
        }
    }
  }
  var kN = {
    getCacheForType: function(a) {
      var i = Ce(de), u = i.data.get(a);
      return u === void 0 && (u = a(), i.data.set(a, u)), u;
    },
    cacheSignal: function() {
      return Ce(de).controller.signal;
    }
  }, UN = typeof WeakMap == "function" ? WeakMap : Map, Lt = 0, Ft = null, Ct = null, Pt = 0, It = 0, un = null, ta = !1, Bi = !1, Gd = !1, xr = 0, ce = 0, ea = 0, Ua = 0, Yd = 0, ln = 0, Li = 0, Ou = null, Ze = null, Xd = !1, Bc = 0, WS = 0, Lc = 1 / 0, kc = null, na = null, be = 0, ra = null, ki = null, Sr = 0, Kd = 0, Vd = null, JS = null, Au = 0, Fd = null;
  function cn() {
    return (Lt & 2) !== 0 && Pt !== 0 ? Pt & -Pt : N.T !== null ? ev() : p1();
  }
  function t_() {
    if (ln === 0)
      if ((Pt & 536870912) === 0 || Rt) {
        var a = Vl;
        Vl <<= 1, (Vl & 3932160) === 0 && (Vl = 262144), ln = a;
      } else ln = 536870912;
    return a = an.current, a !== null && (a.flags |= 32), ln;
  }
  function Qe(a, i, u) {
    (a === Ft && (It === 2 || It === 9) || a.cancelPendingCommit !== null) && (Ui(a, 0), aa(
      a,
      Pt,
      ln,
      !1
    )), Yo(a, u), ((Lt & 2) === 0 || a !== Ft) && (a === Ft && ((Lt & 2) === 0 && (Ua |= u), ce === 4 && aa(
      a,
      Pt,
      ln,
      !1
    )), Vn(a));
  }
  function e_(a, i, u) {
    if ((Lt & 6) !== 0) throw Error(r(327));
    var f = !u && (i & 127) === 0 && (i & a.expiredLanes) === 0 || Go(a, i), v = f ? GN(a, i) : Qd(a, i, !0), m = f;
    do {
      if (v === 0) {
        Bi && !f && aa(a, i, 0, !1);
        break;
      } else {
        if (u = a.current.alternate, m && !HN(u)) {
          v = Qd(a, i, !1), m = !1;
          continue;
        }
        if (v === 2) {
          if (m = i, a.errorRecoveryDisabledLanes & m)
            var _ = 0;
          else
            _ = a.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
          if (_ !== 0) {
            i = _;
            t: {
              var C = a;
              v = Ou;
              var q = C.current.memoizedState.isDehydrated;
              if (q && (Ui(C, _).flags |= 256), _ = Qd(
                C,
                _,
                !1
              ), _ !== 2) {
                if (Gd && !q) {
                  C.errorRecoveryDisabledLanes |= m, Ua |= m, v = 4;
                  break t;
                }
                m = Ze, Ze = v, m !== null && (Ze === null ? Ze = m : Ze.push.apply(
                  Ze,
                  m
                ));
              }
              v = _;
            }
            if (m = !1, v !== 2) continue;
          }
        }
        if (v === 1) {
          Ui(a, 0), aa(a, i, 0, !0);
          break;
        }
        t: {
          switch (f = a, m = v, m) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              aa(
                f,
                i,
                ln,
                !ta
              );
              break t;
            case 2:
              Ze = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((i & 62914560) === i && (v = Bc + 300 - $e(), 10 < v)) {
            if (aa(
              f,
              i,
              ln,
              !ta
            ), Zl(f, 0, !0) !== 0) break t;
            Sr = i, f.timeoutHandle = P_(
              n_.bind(
                null,
                f,
                u,
                Ze,
                kc,
                Xd,
                i,
                ln,
                Ua,
                Li,
                ta,
                m,
                "Throttled",
                -0,
                0
              ),
              v
            );
            break t;
          }
          n_(
            f,
            u,
            Ze,
            kc,
            Xd,
            i,
            ln,
            Ua,
            Li,
            ta,
            m,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vn(a);
  }
  function n_(a, i, u, f, v, m, _, C, q, Y, J, at, X, Q) {
    if (a.timeoutHandle = -1, at = i.subtreeFlags, at & 8192 || (at & 16785408) === 16785408) {
      at = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: or
      }, VS(
        i,
        m,
        at
      );
      var dt = (m & 62914560) === m ? Bc - $e() : (m & 4194048) === m ? WS - $e() : 0;
      if (dt = TR(
        at,
        dt
      ), dt !== null) {
        Sr = m, a.cancelPendingCommit = dt(
          f_.bind(
            null,
            a,
            i,
            m,
            u,
            f,
            v,
            _,
            C,
            q,
            J,
            at,
            null,
            X,
            Q
          )
        ), aa(a, m, _, !Y);
        return;
      }
    }
    f_(
      a,
      i,
      m,
      u,
      f,
      v,
      _,
      C,
      q
    );
  }
  function HN(a) {
    for (var i = a; ; ) {
      var u = i.tag;
      if ((u === 0 || u === 11 || u === 15) && i.flags & 16384 && (u = i.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var f = 0; f < u.length; f++) {
          var v = u[f], m = v.getSnapshot;
          v = v.value;
          try {
            if (!nn(m(), v)) return !1;
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
  function aa(a, i, u, f) {
    i &= ~Yd, i &= ~Ua, a.suspendedLanes |= i, a.pingedLanes &= ~i, f && (a.warmLanes |= i), f = a.expirationTimes;
    for (var v = i; 0 < v; ) {
      var m = 31 - en(v), _ = 1 << m;
      f[m] = -1, v &= ~_;
    }
    u !== 0 && h1(a, u, i);
  }
  function Uc() {
    return (Lt & 6) === 0 ? (wu(0), !1) : !0;
  }
  function Zd() {
    if (Ct !== null) {
      if (It === 0)
        var a = Ct.return;
      else
        a = Ct, fr = Pa = null, hd(a), Di = null, uu = 0, a = Ct;
      for (; a !== null; )
        NS(a.alternate, a), a = a.return;
      Ct = null;
    }
  }
  function Ui(a, i) {
    var u = a.timeoutHandle;
    u !== -1 && (a.timeoutHandle = -1, lR(u)), u = a.cancelPendingCommit, u !== null && (a.cancelPendingCommit = null, u()), Sr = 0, Zd(), Ft = a, Ct = u = lr(a.current, null), Pt = i, It = 0, un = null, ta = !1, Bi = Go(a, i), Gd = !1, Li = ln = Yd = Ua = ea = ce = 0, Ze = Ou = null, Xd = !1, (i & 8) !== 0 && (i |= i & 32);
    var f = a.entangledLanes;
    if (f !== 0)
      for (a = a.entanglements, f &= i; 0 < f; ) {
        var v = 31 - en(f), m = 1 << v;
        i |= a[v], f &= ~m;
      }
    return xr = i, lc(), u;
  }
  function r_(a, i) {
    Ot = null, N.H = pu, i === Ci || i === yc ? (i = bx(), It = 3) : i === td ? (i = bx(), It = 4) : It = i === Md ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, un = i, Ct === null && (ce = 1, Cc(
      a,
      gn(i, a.current)
    ));
  }
  function a_() {
    var a = an.current;
    return a === null ? !0 : (Pt & 4194048) === Pt ? _n === null : (Pt & 62914560) === Pt || (Pt & 536870912) !== 0 ? a === _n : !1;
  }
  function i_() {
    var a = N.H;
    return N.H = pu, a === null ? pu : a;
  }
  function o_() {
    var a = N.A;
    return N.A = kN, a;
  }
  function Hc() {
    ce = 4, ta || (Pt & 4194048) !== Pt && an.current !== null || (Bi = !0), (ea & 134217727) === 0 && (Ua & 134217727) === 0 || Ft === null || aa(
      Ft,
      Pt,
      ln,
      !1
    );
  }
  function Qd(a, i, u) {
    var f = Lt;
    Lt |= 2;
    var v = i_(), m = o_();
    (Ft !== a || Pt !== i) && (kc = null, Ui(a, i)), i = !1;
    var _ = ce;
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          var C = Ct, q = un;
          switch (It) {
            case 8:
              Zd(), _ = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              an.current === null && (i = !0);
              var Y = It;
              if (It = 0, un = null, Hi(a, C, q, Y), u && Bi) {
                _ = 0;
                break t;
              }
              break;
            default:
              Y = It, It = 0, un = null, Hi(a, C, q, Y);
          }
        }
        IN(), _ = ce;
        break;
      } catch (J) {
        r_(a, J);
      }
    while (!0);
    return i && a.shellSuspendCounter++, fr = Pa = null, Lt = f, N.H = v, N.A = m, Ct === null && (Ft = null, Pt = 0, lc()), _;
  }
  function IN() {
    for (; Ct !== null; ) u_(Ct);
  }
  function GN(a, i) {
    var u = Lt;
    Lt |= 2;
    var f = i_(), v = o_();
    Ft !== a || Pt !== i ? (kc = null, Lc = $e() + 500, Ui(a, i)) : Bi = Go(
      a,
      i
    );
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          i = Ct;
          var m = un;
          e: switch (It) {
            case 1:
              It = 0, un = null, Hi(a, i, m, 1);
              break;
            case 2:
            case 9:
              if (mx(m)) {
                It = 0, un = null, l_(i);
                break;
              }
              i = function() {
                It !== 2 && It !== 9 || Ft !== a || (It = 7), Vn(a);
              }, m.then(i, i);
              break t;
            case 3:
              It = 7;
              break t;
            case 4:
              It = 5;
              break t;
            case 7:
              mx(m) ? (It = 0, un = null, l_(i)) : (It = 0, un = null, Hi(a, i, m, 7));
              break;
            case 5:
              var _ = null;
              switch (Ct.tag) {
                case 26:
                  _ = Ct.memoizedState;
                case 5:
                case 27:
                  var C = Ct;
                  if (_ ? K_(_) : C.stateNode.complete) {
                    It = 0, un = null;
                    var q = C.sibling;
                    if (q !== null) Ct = q;
                    else {
                      var Y = C.return;
                      Y !== null ? (Ct = Y, Ic(Y)) : Ct = null;
                    }
                    break e;
                  }
              }
              It = 0, un = null, Hi(a, i, m, 5);
              break;
            case 6:
              It = 0, un = null, Hi(a, i, m, 6);
              break;
            case 8:
              Zd(), ce = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        YN();
        break;
      } catch (J) {
        r_(a, J);
      }
    while (!0);
    return fr = Pa = null, N.H = f, N.A = v, Lt = u, Ct !== null ? 0 : (Ft = null, Pt = 0, lc(), ce);
  }
  function YN() {
    for (; Ct !== null && !ar(); )
      u_(Ct);
  }
  function u_(a) {
    var i = DS(a.alternate, a, xr);
    a.memoizedProps = a.pendingProps, i === null ? Ic(a) : Ct = i;
  }
  function l_(a) {
    var i = a, u = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = wS(
          u,
          i,
          i.pendingProps,
          i.type,
          void 0,
          Pt
        );
        break;
      case 11:
        i = wS(
          u,
          i,
          i.pendingProps,
          i.type.render,
          i.ref,
          Pt
        );
        break;
      case 5:
        hd(i);
      default:
        NS(u, i), i = Ct = ox(i, xr), i = DS(u, i, xr);
    }
    a.memoizedProps = a.pendingProps, i === null ? Ic(a) : Ct = i;
  }
  function Hi(a, i, u, f) {
    fr = Pa = null, hd(i), Di = null, uu = 0;
    var v = i.return;
    try {
      if (NN(
        a,
        v,
        i,
        u,
        Pt
      )) {
        ce = 1, Cc(
          a,
          gn(u, a.current)
        ), Ct = null;
        return;
      }
    } catch (m) {
      if (v !== null) throw Ct = v, m;
      ce = 1, Cc(
        a,
        gn(u, a.current)
      ), Ct = null;
      return;
    }
    i.flags & 32768 ? (Rt || f === 1 ? a = !0 : Bi || (Pt & 536870912) !== 0 ? a = !1 : (ta = a = !0, (f === 2 || f === 9 || f === 3 || f === 6) && (f = an.current, f !== null && f.tag === 13 && (f.flags |= 16384))), c_(i, a)) : Ic(i);
  }
  function Ic(a) {
    var i = a;
    do {
      if ((i.flags & 32768) !== 0) {
        c_(
          i,
          ta
        );
        return;
      }
      a = i.return;
      var u = zN(
        i.alternate,
        i,
        xr
      );
      if (u !== null) {
        Ct = u;
        return;
      }
      if (i = i.sibling, i !== null) {
        Ct = i;
        return;
      }
      Ct = i = a;
    } while (i !== null);
    ce === 0 && (ce = 5);
  }
  function c_(a, i) {
    do {
      var u = $N(a.alternate, a);
      if (u !== null) {
        u.flags &= 32767, Ct = u;
        return;
      }
      if (u = a.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !i && (a = a.sibling, a !== null)) {
        Ct = a;
        return;
      }
      Ct = a = u;
    } while (a !== null);
    ce = 6, Ct = null;
  }
  function f_(a, i, u, f, v, m, _, C, q) {
    a.cancelPendingCommit = null;
    do
      Gc();
    while (be !== 0);
    if ((Lt & 6) !== 0) throw Error(r(327));
    if (i !== null) {
      if (i === a.current) throw Error(r(177));
      if (m = i.lanes | i.childLanes, m |= Lh, AP(
        a,
        u,
        m,
        _,
        C,
        q
      ), a === Ft && (Ct = Ft = null, Pt = 0), ki = i, ra = a, Sr = u, Kd = m, Vd = v, JS = f, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (a.callbackNode = null, a.callbackPriority = 0, FN(Xl, function() {
        return p_(), null;
      })) : (a.callbackNode = null, a.callbackPriority = 0), f = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || f) {
        f = N.T, N.T = null, v = I.p, I.p = 2, _ = Lt, Lt |= 4;
        try {
          BN(a, i, u);
        } finally {
          Lt = _, I.p = v, N.T = f;
        }
      }
      be = 1, s_(), h_(), d_();
    }
  }
  function s_() {
    if (be === 1) {
      be = 0;
      var a = ra, i = ki, u = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || u) {
        u = N.T, N.T = null;
        var f = I.p;
        I.p = 2;
        var v = Lt;
        Lt |= 4;
        try {
          YS(i, a);
          var m = cv, _ = Q1(a.containerInfo), C = m.focusedElem, q = m.selectionRange;
          if (_ !== C && C && C.ownerDocument && Z1(
            C.ownerDocument.documentElement,
            C
          )) {
            if (q !== null && Rh(C)) {
              var Y = q.start, J = q.end;
              if (J === void 0 && (J = Y), "selectionStart" in C)
                C.selectionStart = Y, C.selectionEnd = Math.min(
                  J,
                  C.value.length
                );
              else {
                var at = C.ownerDocument || document, X = at && at.defaultView || window;
                if (X.getSelection) {
                  var Q = X.getSelection(), dt = C.textContent.length, gt = Math.min(q.start, dt), Kt = q.end === void 0 ? gt : Math.min(q.end, dt);
                  !Q.extend && gt > Kt && (_ = Kt, Kt = gt, gt = _);
                  var H = F1(
                    C,
                    gt
                  ), L = F1(
                    C,
                    Kt
                  );
                  if (H && L && (Q.rangeCount !== 1 || Q.anchorNode !== H.node || Q.anchorOffset !== H.offset || Q.focusNode !== L.node || Q.focusOffset !== L.offset)) {
                    var G = at.createRange();
                    G.setStart(H.node, H.offset), Q.removeAllRanges(), gt > Kt ? (Q.addRange(G), Q.extend(L.node, L.offset)) : (G.setEnd(L.node, L.offset), Q.addRange(G));
                  }
                }
              }
            }
            for (at = [], Q = C; Q = Q.parentNode; )
              Q.nodeType === 1 && at.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof C.focus == "function" && C.focus(), C = 0; C < at.length; C++) {
              var nt = at[C];
              nt.element.scrollLeft = nt.left, nt.element.scrollTop = nt.top;
            }
          }
          nf = !!lv, cv = lv = null;
        } finally {
          Lt = v, I.p = f, N.T = u;
        }
      }
      a.current = i, be = 2;
    }
  }
  function h_() {
    if (be === 2) {
      be = 0;
      var a = ra, i = ki, u = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || u) {
        u = N.T, N.T = null;
        var f = I.p;
        I.p = 2;
        var v = Lt;
        Lt |= 4;
        try {
          kS(a, i.alternate, i);
        } finally {
          Lt = v, I.p = f, N.T = u;
        }
      }
      be = 3;
    }
  }
  function d_() {
    if (be === 4 || be === 3) {
      be = 0, Ho();
      var a = ra, i = ki, u = Sr, f = JS;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? be = 5 : (be = 0, ki = ra = null, v_(a, a.pendingLanes));
      var v = a.pendingLanes;
      if (v === 0 && (na = null), ph(u), i = i.stateNode, tn && typeof tn.onCommitFiberRoot == "function")
        try {
          tn.onCommitFiberRoot(
            Io,
            i,
            void 0,
            (i.current.flags & 128) === 128
          );
        } catch {
        }
      if (f !== null) {
        i = N.T, v = I.p, I.p = 2, N.T = null;
        try {
          for (var m = a.onRecoverableError, _ = 0; _ < f.length; _++) {
            var C = f[_];
            m(C.value, {
              componentStack: C.stack
            });
          }
        } finally {
          N.T = i, I.p = v;
        }
      }
      (Sr & 3) !== 0 && Gc(), Vn(a), v = a.pendingLanes, (u & 261930) !== 0 && (v & 42) !== 0 ? a === Fd ? Au++ : (Au = 0, Fd = a) : Au = 0, wu(0);
    }
  }
  function v_(a, i) {
    (a.pooledCacheLanes &= i) === 0 && (i = a.pooledCache, i != null && (a.pooledCache = null, iu(i)));
  }
  function Gc() {
    return s_(), h_(), d_(), p_();
  }
  function p_() {
    if (be !== 5) return !1;
    var a = ra, i = Kd;
    Kd = 0;
    var u = ph(Sr), f = N.T, v = I.p;
    try {
      I.p = 32 > u ? 32 : u, N.T = null, u = Vd, Vd = null;
      var m = ra, _ = Sr;
      if (be = 0, ki = ra = null, Sr = 0, (Lt & 6) !== 0) throw Error(r(331));
      var C = Lt;
      if (Lt |= 4, ZS(m.current), KS(
        m,
        m.current,
        _,
        u
      ), Lt = C, wu(0, !1), tn && typeof tn.onPostCommitFiberRoot == "function")
        try {
          tn.onPostCommitFiberRoot(Io, m);
        } catch {
        }
      return !0;
    } finally {
      I.p = v, N.T = f, v_(a, i);
    }
  }
  function y_(a, i, u) {
    i = gn(u, i), i = Ed(a.stateNode, i, 2), a = Zr(a, i, 2), a !== null && (Yo(a, 2), Vn(a));
  }
  function Gt(a, i, u) {
    if (a.tag === 3)
      y_(a, a, u);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          y_(
            i,
            a,
            u
          );
          break;
        } else if (i.tag === 1) {
          var f = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (na === null || !na.has(f))) {
            a = gn(u, a), u = mS(2), f = Zr(i, u, 2), f !== null && (gS(
              u,
              f,
              i,
              a
            ), Yo(f, 2), Vn(f));
            break;
          }
        }
        i = i.return;
      }
  }
  function Wd(a, i, u) {
    var f = a.pingCache;
    if (f === null) {
      f = a.pingCache = new UN();
      var v = /* @__PURE__ */ new Set();
      f.set(i, v);
    } else
      v = f.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(i, v));
    v.has(u) || (Gd = !0, v.add(u), a = XN.bind(null, a, i, u), i.then(a, a));
  }
  function XN(a, i, u) {
    var f = a.pingCache;
    f !== null && f.delete(i), a.pingedLanes |= a.suspendedLanes & u, a.warmLanes &= ~u, Ft === a && (Pt & u) === u && (ce === 4 || ce === 3 && (Pt & 62914560) === Pt && 300 > $e() - Bc ? (Lt & 2) === 0 && Ui(a, 0) : Yd |= u, Li === Pt && (Li = 0)), Vn(a);
  }
  function m_(a, i) {
    i === 0 && (i = s1()), a = ja(a, i), a !== null && (Yo(a, i), Vn(a));
  }
  function KN(a) {
    var i = a.memoizedState, u = 0;
    i !== null && (u = i.retryLane), m_(a, u);
  }
  function VN(a, i) {
    var u = 0;
    switch (a.tag) {
      case 31:
      case 13:
        var f = a.stateNode, v = a.memoizedState;
        v !== null && (u = v.retryLane);
        break;
      case 19:
        f = a.stateNode;
        break;
      case 22:
        f = a.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    f !== null && f.delete(i), m_(a, u);
  }
  function FN(a, i) {
    return kr(a, i);
  }
  var Yc = null, Ii = null, Jd = !1, Xc = !1, tv = !1, ia = 0;
  function Vn(a) {
    a !== Ii && a.next === null && (Ii === null ? Yc = Ii = a : Ii = Ii.next = a), Xc = !0, Jd || (Jd = !0, QN());
  }
  function wu(a, i) {
    if (!tv && Xc) {
      tv = !0;
      do
        for (var u = !1, f = Yc; f !== null; ) {
          if (a !== 0) {
            var v = f.pendingLanes;
            if (v === 0) var m = 0;
            else {
              var _ = f.suspendedLanes, C = f.pingedLanes;
              m = (1 << 31 - en(42 | a) + 1) - 1, m &= v & ~(_ & ~C), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (u = !0, S_(f, m));
          } else
            m = Pt, m = Zl(
              f,
              f === Ft ? m : 0,
              f.cancelPendingCommit !== null || f.timeoutHandle !== -1
            ), (m & 3) === 0 || Go(f, m) || (u = !0, S_(f, m));
          f = f.next;
        }
      while (u);
      tv = !1;
    }
  }
  function ZN() {
    g_();
  }
  function g_() {
    Xc = Jd = !1;
    var a = 0;
    ia !== 0 && uR() && (a = ia);
    for (var i = $e(), u = null, f = Yc; f !== null; ) {
      var v = f.next, m = b_(f, i);
      m === 0 ? (f.next = null, u === null ? Yc = v : u.next = v, v === null && (Ii = u)) : (u = f, (a !== 0 || (m & 3) !== 0) && (Xc = !0)), f = v;
    }
    be !== 0 && be !== 5 || wu(a), ia !== 0 && (ia = 0);
  }
  function b_(a, i) {
    for (var u = a.suspendedLanes, f = a.pingedLanes, v = a.expirationTimes, m = a.pendingLanes & -62914561; 0 < m; ) {
      var _ = 31 - en(m), C = 1 << _, q = v[_];
      q === -1 ? ((C & u) === 0 || (C & f) !== 0) && (v[_] = OP(C, i)) : q <= i && (a.expiredLanes |= C), m &= ~C;
    }
    if (i = Ft, u = Pt, u = Zl(
      a,
      a === i ? u : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), f = a.callbackNode, u === 0 || a === i && (It === 2 || It === 9) || a.cancelPendingCommit !== null)
      return f !== null && f !== null && Rn(f), a.callbackNode = null, a.callbackPriority = 0;
    if ((u & 3) === 0 || Go(a, u)) {
      if (i = u & -u, i === a.callbackPriority) return i;
      switch (f !== null && Rn(f), ph(u)) {
        case 2:
        case 8:
          u = c1;
          break;
        case 32:
          u = Xl;
          break;
        case 268435456:
          u = f1;
          break;
        default:
          u = Xl;
      }
      return f = x_.bind(null, a), u = kr(u, f), a.callbackPriority = i, a.callbackNode = u, i;
    }
    return f !== null && f !== null && Rn(f), a.callbackPriority = 2, a.callbackNode = null, 2;
  }
  function x_(a, i) {
    if (be !== 0 && be !== 5)
      return a.callbackNode = null, a.callbackPriority = 0, null;
    var u = a.callbackNode;
    if (Gc() && a.callbackNode !== u)
      return null;
    var f = Pt;
    return f = Zl(
      a,
      a === Ft ? f : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), f === 0 ? null : (e_(a, f, i), b_(a, $e()), a.callbackNode != null && a.callbackNode === u ? x_.bind(null, a) : null);
  }
  function S_(a, i) {
    if (Gc()) return null;
    e_(a, i, !0);
  }
  function QN() {
    cR(function() {
      (Lt & 6) !== 0 ? kr(
        l1,
        ZN
      ) : g_();
    });
  }
  function ev() {
    if (ia === 0) {
      var a = Mi;
      a === 0 && (a = Kl, Kl <<= 1, (Kl & 261888) === 0 && (Kl = 256)), ia = a;
    }
    return ia;
  }
  function __(a) {
    return a == null || typeof a == "symbol" || typeof a == "boolean" ? null : typeof a == "function" ? a : tc("" + a);
  }
  function O_(a, i) {
    var u = i.ownerDocument.createElement("input");
    return u.name = i.name, u.value = i.value, a.id && u.setAttribute("form", a.id), i.parentNode.insertBefore(u, i), a = new FormData(a), u.parentNode.removeChild(u), a;
  }
  function WN(a, i, u, f, v) {
    if (i === "submit" && u && u.stateNode === v) {
      var m = __(
        (v[Ye] || null).action
      ), _ = f.submitter;
      _ && (i = (i = _[Ye] || null) ? __(i.formAction) : _.getAttribute("formAction"), i !== null && (m = i, _ = null));
      var C = new ac(
        "action",
        "action",
        null,
        f,
        v
      );
      a.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (f.defaultPrevented) {
                if (ia !== 0) {
                  var q = _ ? O_(v, _) : new FormData(v);
                  Sd(
                    u,
                    {
                      pending: !0,
                      data: q,
                      method: v.method,
                      action: m
                    },
                    null,
                    q
                  );
                }
              } else
                typeof m == "function" && (C.preventDefault(), q = _ ? O_(v, _) : new FormData(v), Sd(
                  u,
                  {
                    pending: !0,
                    data: q,
                    method: v.method,
                    action: m
                  },
                  m,
                  q
                ));
            },
            currentTarget: v
          }
        ]
      });
    }
  }
  for (var nv = 0; nv < Bh.length; nv++) {
    var rv = Bh[nv], JN = rv.toLowerCase(), tR = rv[0].toUpperCase() + rv.slice(1);
    qn(
      JN,
      "on" + tR
    );
  }
  qn(tx, "onAnimationEnd"), qn(ex, "onAnimationIteration"), qn(nx, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(yN, "onTransitionRun"), qn(mN, "onTransitionStart"), qn(gN, "onTransitionCancel"), qn(rx, "onTransitionEnd"), vi("onMouseEnter", ["mouseout", "mouseover"]), vi("onMouseLeave", ["mouseout", "mouseover"]), vi("onPointerEnter", ["pointerout", "pointerover"]), vi("onPointerLeave", ["pointerout", "pointerover"]), wa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), wa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), wa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), wa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), wa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), eR = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tu)
  );
  function A_(a, i) {
    i = (i & 4) !== 0;
    for (var u = 0; u < a.length; u++) {
      var f = a[u], v = f.event;
      f = f.listeners;
      t: {
        var m = void 0;
        if (i)
          for (var _ = f.length - 1; 0 <= _; _--) {
            var C = f[_], q = C.instance, Y = C.currentTarget;
            if (C = C.listener, q !== m && v.isPropagationStopped())
              break t;
            m = C, v.currentTarget = Y;
            try {
              m(v);
            } catch (J) {
              uc(J);
            }
            v.currentTarget = null, m = q;
          }
        else
          for (_ = 0; _ < f.length; _++) {
            if (C = f[_], q = C.instance, Y = C.currentTarget, C = C.listener, q !== m && v.isPropagationStopped())
              break t;
            m = C, v.currentTarget = Y;
            try {
              m(v);
            } catch (J) {
              uc(J);
            }
            v.currentTarget = null, m = q;
          }
      }
    }
  }
  function Dt(a, i) {
    var u = i[yh];
    u === void 0 && (u = i[yh] = /* @__PURE__ */ new Set());
    var f = a + "__bubble";
    u.has(f) || (w_(i, a, 2, !1), u.add(f));
  }
  function av(a, i, u) {
    var f = 0;
    i && (f |= 4), w_(
      u,
      a,
      f,
      i
    );
  }
  var Kc = "_reactListening" + Math.random().toString(36).slice(2);
  function iv(a) {
    if (!a[Kc]) {
      a[Kc] = !0, g1.forEach(function(u) {
        u !== "selectionchange" && (eR.has(u) || av(u, !1, a), av(u, !0, a));
      });
      var i = a.nodeType === 9 ? a : a.ownerDocument;
      i === null || i[Kc] || (i[Kc] = !0, av("selectionchange", !1, i));
    }
  }
  function w_(a, i, u, f) {
    switch (tO(i)) {
      case 2:
        var v = jR;
        break;
      case 8:
        v = CR;
        break;
      default:
        v = xv;
    }
    u = v.bind(
      null,
      i,
      u,
      a
    ), v = void 0, !wh || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), f ? v !== void 0 ? a.addEventListener(i, u, {
      capture: !0,
      passive: v
    }) : a.addEventListener(i, u, !0) : v !== void 0 ? a.addEventListener(i, u, {
      passive: v
    }) : a.addEventListener(i, u, !1);
  }
  function ov(a, i, u, f, v) {
    var m = f;
    if ((i & 1) === 0 && (i & 2) === 0 && f !== null)
      t: for (; ; ) {
        if (f === null) return;
        var _ = f.tag;
        if (_ === 3 || _ === 4) {
          var C = f.stateNode.containerInfo;
          if (C === v) break;
          if (_ === 4)
            for (_ = f.return; _ !== null; ) {
              var q = _.tag;
              if ((q === 3 || q === 4) && _.stateNode.containerInfo === v)
                return;
              _ = _.return;
            }
          for (; C !== null; ) {
            if (_ = si(C), _ === null) return;
            if (q = _.tag, q === 5 || q === 6 || q === 26 || q === 27) {
              f = m = _;
              continue t;
            }
            C = C.parentNode;
          }
        }
        f = f.return;
      }
    C1(function() {
      var Y = m, J = Oh(u), at = [];
      t: {
        var X = ax.get(a);
        if (X !== void 0) {
          var Q = ac, dt = a;
          switch (a) {
            case "keypress":
              if (nc(u) === 0) break t;
            case "keydown":
            case "keyup":
              Q = VP;
              break;
            case "focusin":
              dt = "focus", Q = jh;
              break;
            case "focusout":
              dt = "blur", Q = jh;
              break;
            case "beforeblur":
            case "afterblur":
              Q = jh;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = N1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = zP;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = QP;
              break;
            case tx:
            case ex:
            case nx:
              Q = LP;
              break;
            case rx:
              Q = JP;
              break;
            case "scroll":
            case "scrollend":
              Q = RP;
              break;
            case "wheel":
              Q = eN;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = UP;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = q1;
              break;
            case "toggle":
            case "beforetoggle":
              Q = rN;
          }
          var gt = (i & 4) !== 0, Kt = !gt && (a === "scroll" || a === "scrollend"), H = gt ? X !== null ? X + "Capture" : null : X;
          gt = [];
          for (var L = Y, G; L !== null; ) {
            var nt = L;
            if (G = nt.stateNode, nt = nt.tag, nt !== 5 && nt !== 26 && nt !== 27 || G === null || H === null || (nt = Vo(L, H), nt != null && gt.push(
              Eu(L, nt, G)
            )), Kt) break;
            L = L.return;
          }
          0 < gt.length && (X = new Q(
            X,
            dt,
            null,
            u,
            J
          ), at.push({ event: X, listeners: gt }));
        }
      }
      if ((i & 7) === 0) {
        t: {
          if (X = a === "mouseover" || a === "pointerover", Q = a === "mouseout" || a === "pointerout", X && u !== _h && (dt = u.relatedTarget || u.fromElement) && (si(dt) || dt[fi]))
            break t;
          if ((Q || X) && (X = J.window === J ? J : (X = J.ownerDocument) ? X.defaultView || X.parentWindow : window, Q ? (dt = u.relatedTarget || u.toElement, Q = Y, dt = dt ? si(dt) : null, dt !== null && (Kt = l(dt), gt = dt.tag, dt !== Kt || gt !== 5 && gt !== 27 && gt !== 6) && (dt = null)) : (Q = null, dt = Y), Q !== dt)) {
            if (gt = N1, nt = "onMouseLeave", H = "onMouseEnter", L = "mouse", (a === "pointerout" || a === "pointerover") && (gt = q1, nt = "onPointerLeave", H = "onPointerEnter", L = "pointer"), Kt = Q == null ? X : Ko(Q), G = dt == null ? X : Ko(dt), X = new gt(
              nt,
              L + "leave",
              Q,
              u,
              J
            ), X.target = Kt, X.relatedTarget = G, nt = null, si(J) === Y && (gt = new gt(
              H,
              L + "enter",
              dt,
              u,
              J
            ), gt.target = G, gt.relatedTarget = Kt, nt = gt), Kt = nt, Q && dt)
              e: {
                for (gt = nR, H = Q, L = dt, G = 0, nt = H; nt; nt = gt(nt))
                  G++;
                nt = 0;
                for (var yt = L; yt; yt = gt(yt))
                  nt++;
                for (; 0 < G - nt; )
                  H = gt(H), G--;
                for (; 0 < nt - G; )
                  L = gt(L), nt--;
                for (; G--; ) {
                  if (H === L || L !== null && H === L.alternate) {
                    gt = H;
                    break e;
                  }
                  H = gt(H), L = gt(L);
                }
                gt = null;
              }
            else gt = null;
            Q !== null && T_(
              at,
              X,
              Q,
              gt,
              !1
            ), dt !== null && Kt !== null && T_(
              at,
              Kt,
              dt,
              gt,
              !0
            );
          }
        }
        t: {
          if (X = Y ? Ko(Y) : window, Q = X.nodeName && X.nodeName.toLowerCase(), Q === "select" || Q === "input" && X.type === "file")
            var zt = I1;
          else if (U1(X))
            if (G1)
              zt = dN;
            else {
              zt = sN;
              var pt = fN;
            }
          else
            Q = X.nodeName, !Q || Q.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? Y && Sh(Y.elementType) && (zt = I1) : zt = hN;
          if (zt && (zt = zt(a, Y))) {
            H1(
              at,
              zt,
              u,
              J
            );
            break t;
          }
          pt && pt(a, X, Y), a === "focusout" && Y && X.type === "number" && Y.memoizedProps.value != null && xh(X, "number", X.value);
        }
        switch (pt = Y ? Ko(Y) : window, a) {
          case "focusin":
            (U1(pt) || pt.contentEditable === "true") && (xi = pt, qh = Y, nu = null);
            break;
          case "focusout":
            nu = qh = xi = null;
            break;
          case "mousedown":
            zh = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zh = !1, W1(at, u, J);
            break;
          case "selectionchange":
            if (pN) break;
          case "keydown":
          case "keyup":
            W1(at, u, J);
        }
        var Tt;
        if (Dh)
          t: {
            switch (a) {
              case "compositionstart":
                var Nt = "onCompositionStart";
                break t;
              case "compositionend":
                Nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Nt = "onCompositionUpdate";
                break t;
            }
            Nt = void 0;
          }
        else
          bi ? L1(a, u) && (Nt = "onCompositionEnd") : a === "keydown" && u.keyCode === 229 && (Nt = "onCompositionStart");
        Nt && (z1 && u.locale !== "ko" && (bi || Nt !== "onCompositionStart" ? Nt === "onCompositionEnd" && bi && (Tt = D1()) : (Ir = J, Th = "value" in Ir ? Ir.value : Ir.textContent, bi = !0)), pt = Vc(Y, Nt), 0 < pt.length && (Nt = new R1(
          Nt,
          a,
          null,
          u,
          J
        ), at.push({ event: Nt, listeners: pt }), Tt ? Nt.data = Tt : (Tt = k1(u), Tt !== null && (Nt.data = Tt)))), (Tt = iN ? oN(a, u) : uN(a, u)) && (Nt = Vc(Y, "onBeforeInput"), 0 < Nt.length && (pt = new R1(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          J
        ), at.push({
          event: pt,
          listeners: Nt
        }), pt.data = Tt)), WN(
          at,
          a,
          Y,
          u,
          J
        );
      }
      A_(at, i);
    });
  }
  function Eu(a, i, u) {
    return {
      instance: a,
      listener: i,
      currentTarget: u
    };
  }
  function Vc(a, i) {
    for (var u = i + "Capture", f = []; a !== null; ) {
      var v = a, m = v.stateNode;
      if (v = v.tag, v !== 5 && v !== 26 && v !== 27 || m === null || (v = Vo(a, u), v != null && f.unshift(
        Eu(a, v, m)
      ), v = Vo(a, i), v != null && f.push(
        Eu(a, v, m)
      )), a.tag === 3) return f;
      a = a.return;
    }
    return [];
  }
  function nR(a) {
    if (a === null) return null;
    do
      a = a.return;
    while (a && a.tag !== 5 && a.tag !== 27);
    return a || null;
  }
  function T_(a, i, u, f, v) {
    for (var m = i._reactName, _ = []; u !== null && u !== f; ) {
      var C = u, q = C.alternate, Y = C.stateNode;
      if (C = C.tag, q !== null && q === f) break;
      C !== 5 && C !== 26 && C !== 27 || Y === null || (q = Y, v ? (Y = Vo(u, m), Y != null && _.unshift(
        Eu(u, Y, q)
      )) : v || (Y = Vo(u, m), Y != null && _.push(
        Eu(u, Y, q)
      ))), u = u.return;
    }
    _.length !== 0 && a.push({ event: i, listeners: _ });
  }
  var rR = /\r\n?/g, aR = /\u0000|\uFFFD/g;
  function E_(a) {
    return (typeof a == "string" ? a : "" + a).replace(rR, `
`).replace(aR, "");
  }
  function M_(a, i) {
    return i = E_(i), E_(a) === i;
  }
  function Xt(a, i, u, f, v, m) {
    switch (u) {
      case "children":
        typeof f == "string" ? i === "body" || i === "textarea" && f === "" || yi(a, f) : (typeof f == "number" || typeof f == "bigint") && i !== "body" && yi(a, "" + f);
        break;
      case "className":
        Wl(a, "class", f);
        break;
      case "tabIndex":
        Wl(a, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wl(a, u, f);
        break;
      case "style":
        M1(a, f, m);
        break;
      case "data":
        if (i !== "object") {
          Wl(a, "data", f);
          break;
        }
      case "src":
      case "href":
        if (f === "" && (i !== "a" || u !== "href")) {
          a.removeAttribute(u);
          break;
        }
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean") {
          a.removeAttribute(u);
          break;
        }
        f = tc("" + f), a.setAttribute(u, f);
        break;
      case "action":
      case "formAction":
        if (typeof f == "function") {
          a.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (u === "formAction" ? (i !== "input" && Xt(a, i, "name", v.name, v, null), Xt(
            a,
            i,
            "formEncType",
            v.formEncType,
            v,
            null
          ), Xt(
            a,
            i,
            "formMethod",
            v.formMethod,
            v,
            null
          ), Xt(
            a,
            i,
            "formTarget",
            v.formTarget,
            v,
            null
          )) : (Xt(a, i, "encType", v.encType, v, null), Xt(a, i, "method", v.method, v, null), Xt(a, i, "target", v.target, v, null)));
        if (f == null || typeof f == "symbol" || typeof f == "boolean") {
          a.removeAttribute(u);
          break;
        }
        f = tc("" + f), a.setAttribute(u, f);
        break;
      case "onClick":
        f != null && (a.onclick = or);
        break;
      case "onScroll":
        f != null && Dt("scroll", a);
        break;
      case "onScrollEnd":
        f != null && Dt("scrollend", a);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f))
            throw Error(r(61));
          if (u = f.__html, u != null) {
            if (v.children != null) throw Error(r(60));
            a.innerHTML = u;
          }
        }
        break;
      case "multiple":
        a.multiple = f && typeof f != "function" && typeof f != "symbol";
        break;
      case "muted":
        a.muted = f && typeof f != "function" && typeof f != "symbol";
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
        if (f == null || typeof f == "function" || typeof f == "boolean" || typeof f == "symbol") {
          a.removeAttribute("xlink:href");
          break;
        }
        u = tc("" + f), a.setAttributeNS(
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
        f != null && typeof f != "function" && typeof f != "symbol" ? a.setAttribute(u, "" + f) : a.removeAttribute(u);
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
        f && typeof f != "function" && typeof f != "symbol" ? a.setAttribute(u, "") : a.removeAttribute(u);
        break;
      case "capture":
      case "download":
        f === !0 ? a.setAttribute(u, "") : f !== !1 && f != null && typeof f != "function" && typeof f != "symbol" ? a.setAttribute(u, f) : a.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        f != null && typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f ? a.setAttribute(u, f) : a.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        f == null || typeof f == "function" || typeof f == "symbol" || isNaN(f) ? a.removeAttribute(u) : a.setAttribute(u, f);
        break;
      case "popover":
        Dt("beforetoggle", a), Dt("toggle", a), Ql(a, "popover", f);
        break;
      case "xlinkActuate":
        ir(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          f
        );
        break;
      case "xlinkArcrole":
        ir(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          f
        );
        break;
      case "xlinkRole":
        ir(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          f
        );
        break;
      case "xlinkShow":
        ir(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          f
        );
        break;
      case "xlinkTitle":
        ir(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          f
        );
        break;
      case "xlinkType":
        ir(
          a,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          f
        );
        break;
      case "xmlBase":
        ir(
          a,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          f
        );
        break;
      case "xmlLang":
        ir(
          a,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          f
        );
        break;
      case "xmlSpace":
        ir(
          a,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          f
        );
        break;
      case "is":
        Ql(a, "is", f);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = PP.get(u) || u, Ql(a, u, f));
    }
  }
  function uv(a, i, u, f, v, m) {
    switch (u) {
      case "style":
        M1(a, f, m);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f))
            throw Error(r(61));
          if (u = f.__html, u != null) {
            if (v.children != null) throw Error(r(60));
            a.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof f == "string" ? yi(a, f) : (typeof f == "number" || typeof f == "bigint") && yi(a, "" + f);
        break;
      case "onScroll":
        f != null && Dt("scroll", a);
        break;
      case "onScrollEnd":
        f != null && Dt("scrollend", a);
        break;
      case "onClick":
        f != null && (a.onclick = or);
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
        if (!b1.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (v = u.endsWith("Capture"), i = u.slice(2, v ? u.length - 7 : void 0), m = a[Ye] || null, m = m != null ? m[u] : null, typeof m == "function" && a.removeEventListener(i, m, v), typeof f == "function")) {
              typeof m != "function" && m !== null && (u in a ? a[u] = null : a.hasAttribute(u) && a.removeAttribute(u)), a.addEventListener(i, f, v);
              break t;
            }
            u in a ? a[u] = f : f === !0 ? a.setAttribute(u, "") : Ql(a, u, f);
          }
    }
  }
  function Pe(a, i, u) {
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
        Dt("error", a), Dt("load", a);
        var f = !1, v = !1, m;
        for (m in u)
          if (u.hasOwnProperty(m)) {
            var _ = u[m];
            if (_ != null)
              switch (m) {
                case "src":
                  f = !0;
                  break;
                case "srcSet":
                  v = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, i));
                default:
                  Xt(a, i, m, _, u, null);
              }
          }
        v && Xt(a, i, "srcSet", u.srcSet, u, null), f && Xt(a, i, "src", u.src, u, null);
        return;
      case "input":
        Dt("invalid", a);
        var C = m = _ = v = null, q = null, Y = null;
        for (f in u)
          if (u.hasOwnProperty(f)) {
            var J = u[f];
            if (J != null)
              switch (f) {
                case "name":
                  v = J;
                  break;
                case "type":
                  _ = J;
                  break;
                case "checked":
                  q = J;
                  break;
                case "defaultChecked":
                  Y = J;
                  break;
                case "value":
                  m = J;
                  break;
                case "defaultValue":
                  C = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(r(137, i));
                  break;
                default:
                  Xt(a, i, f, J, u, null);
              }
          }
        A1(
          a,
          m,
          C,
          q,
          Y,
          _,
          v,
          !1
        );
        return;
      case "select":
        Dt("invalid", a), f = _ = m = null;
        for (v in u)
          if (u.hasOwnProperty(v) && (C = u[v], C != null))
            switch (v) {
              case "value":
                m = C;
                break;
              case "defaultValue":
                _ = C;
                break;
              case "multiple":
                f = C;
              default:
                Xt(a, i, v, C, u, null);
            }
        i = m, u = _, a.multiple = !!f, i != null ? pi(a, !!f, i, !1) : u != null && pi(a, !!f, u, !0);
        return;
      case "textarea":
        Dt("invalid", a), m = v = f = null;
        for (_ in u)
          if (u.hasOwnProperty(_) && (C = u[_], C != null))
            switch (_) {
              case "value":
                f = C;
                break;
              case "defaultValue":
                v = C;
                break;
              case "children":
                m = C;
                break;
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(r(91));
                break;
              default:
                Xt(a, i, _, C, u, null);
            }
        T1(a, f, v, m);
        return;
      case "option":
        for (q in u)
          if (u.hasOwnProperty(q) && (f = u[q], f != null))
            switch (q) {
              case "selected":
                a.selected = f && typeof f != "function" && typeof f != "symbol";
                break;
              default:
                Xt(a, i, q, f, u, null);
            }
        return;
      case "dialog":
        Dt("beforetoggle", a), Dt("toggle", a), Dt("cancel", a), Dt("close", a);
        break;
      case "iframe":
      case "object":
        Dt("load", a);
        break;
      case "video":
      case "audio":
        for (f = 0; f < Tu.length; f++)
          Dt(Tu[f], a);
        break;
      case "image":
        Dt("error", a), Dt("load", a);
        break;
      case "details":
        Dt("toggle", a);
        break;
      case "embed":
      case "source":
      case "link":
        Dt("error", a), Dt("load", a);
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
        for (Y in u)
          if (u.hasOwnProperty(Y) && (f = u[Y], f != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, i));
              default:
                Xt(a, i, Y, f, u, null);
            }
        return;
      default:
        if (Sh(i)) {
          for (J in u)
            u.hasOwnProperty(J) && (f = u[J], f !== void 0 && uv(
              a,
              i,
              J,
              f,
              u,
              void 0
            ));
          return;
        }
    }
    for (C in u)
      u.hasOwnProperty(C) && (f = u[C], f != null && Xt(a, i, C, f, u, null));
  }
  function iR(a, i, u, f) {
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
        var v = null, m = null, _ = null, C = null, q = null, Y = null, J = null;
        for (Q in u) {
          var at = u[Q];
          if (u.hasOwnProperty(Q) && at != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                q = at;
              default:
                f.hasOwnProperty(Q) || Xt(a, i, Q, null, f, at);
            }
        }
        for (var X in f) {
          var Q = f[X];
          if (at = u[X], f.hasOwnProperty(X) && (Q != null || at != null))
            switch (X) {
              case "type":
                m = Q;
                break;
              case "name":
                v = Q;
                break;
              case "checked":
                Y = Q;
                break;
              case "defaultChecked":
                J = Q;
                break;
              case "value":
                _ = Q;
                break;
              case "defaultValue":
                C = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(r(137, i));
                break;
              default:
                Q !== at && Xt(
                  a,
                  i,
                  X,
                  Q,
                  f,
                  at
                );
            }
        }
        bh(
          a,
          _,
          C,
          q,
          Y,
          J,
          m,
          v
        );
        return;
      case "select":
        Q = _ = C = X = null;
        for (m in u)
          if (q = u[m], u.hasOwnProperty(m) && q != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                Q = q;
              default:
                f.hasOwnProperty(m) || Xt(
                  a,
                  i,
                  m,
                  null,
                  f,
                  q
                );
            }
        for (v in f)
          if (m = f[v], q = u[v], f.hasOwnProperty(v) && (m != null || q != null))
            switch (v) {
              case "value":
                X = m;
                break;
              case "defaultValue":
                C = m;
                break;
              case "multiple":
                _ = m;
              default:
                m !== q && Xt(
                  a,
                  i,
                  v,
                  m,
                  f,
                  q
                );
            }
        i = C, u = _, f = Q, X != null ? pi(a, !!u, X, !1) : !!f != !!u && (i != null ? pi(a, !!u, i, !0) : pi(a, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Q = X = null;
        for (C in u)
          if (v = u[C], u.hasOwnProperty(C) && v != null && !f.hasOwnProperty(C))
            switch (C) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(a, i, C, null, f, v);
            }
        for (_ in f)
          if (v = f[_], m = u[_], f.hasOwnProperty(_) && (v != null || m != null))
            switch (_) {
              case "value":
                X = v;
                break;
              case "defaultValue":
                Q = v;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                v !== m && Xt(a, i, _, v, f, m);
            }
        w1(a, X, Q);
        return;
      case "option":
        for (var dt in u)
          if (X = u[dt], u.hasOwnProperty(dt) && X != null && !f.hasOwnProperty(dt))
            switch (dt) {
              case "selected":
                a.selected = !1;
                break;
              default:
                Xt(
                  a,
                  i,
                  dt,
                  null,
                  f,
                  X
                );
            }
        for (q in f)
          if (X = f[q], Q = u[q], f.hasOwnProperty(q) && X !== Q && (X != null || Q != null))
            switch (q) {
              case "selected":
                a.selected = X && typeof X != "function" && typeof X != "symbol";
                break;
              default:
                Xt(
                  a,
                  i,
                  q,
                  X,
                  f,
                  Q
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
        for (var gt in u)
          X = u[gt], u.hasOwnProperty(gt) && X != null && !f.hasOwnProperty(gt) && Xt(a, i, gt, null, f, X);
        for (Y in f)
          if (X = f[Y], Q = u[Y], f.hasOwnProperty(Y) && X !== Q && (X != null || Q != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null)
                  throw Error(r(137, i));
                break;
              default:
                Xt(
                  a,
                  i,
                  Y,
                  X,
                  f,
                  Q
                );
            }
        return;
      default:
        if (Sh(i)) {
          for (var Kt in u)
            X = u[Kt], u.hasOwnProperty(Kt) && X !== void 0 && !f.hasOwnProperty(Kt) && uv(
              a,
              i,
              Kt,
              void 0,
              f,
              X
            );
          for (J in f)
            X = f[J], Q = u[J], !f.hasOwnProperty(J) || X === Q || X === void 0 && Q === void 0 || uv(
              a,
              i,
              J,
              X,
              f,
              Q
            );
          return;
        }
    }
    for (var H in u)
      X = u[H], u.hasOwnProperty(H) && X != null && !f.hasOwnProperty(H) && Xt(a, i, H, null, f, X);
    for (at in f)
      X = f[at], Q = u[at], !f.hasOwnProperty(at) || X === Q || X == null && Q == null || Xt(a, i, at, X, f, Q);
  }
  function j_(a) {
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
  function oR() {
    if (typeof performance.getEntriesByType == "function") {
      for (var a = 0, i = 0, u = performance.getEntriesByType("resource"), f = 0; f < u.length; f++) {
        var v = u[f], m = v.transferSize, _ = v.initiatorType, C = v.duration;
        if (m && C && j_(_)) {
          for (_ = 0, C = v.responseEnd, f += 1; f < u.length; f++) {
            var q = u[f], Y = q.startTime;
            if (Y > C) break;
            var J = q.transferSize, at = q.initiatorType;
            J && j_(at) && (q = q.responseEnd, _ += J * (q < C ? 1 : (C - Y) / (q - Y)));
          }
          if (--f, i += 8 * (m + _) / (v.duration / 1e3), a++, 10 < a) break;
        }
      }
      if (0 < a) return i / a / 1e6;
    }
    return navigator.connection && (a = navigator.connection.downlink, typeof a == "number") ? a : 5;
  }
  var lv = null, cv = null;
  function Fc(a) {
    return a.nodeType === 9 ? a : a.ownerDocument;
  }
  function C_(a) {
    switch (a) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function D_(a, i) {
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
  function fv(a, i) {
    return a === "textarea" || a === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var sv = null;
  function uR() {
    var a = window.event;
    return a && a.type === "popstate" ? a === sv ? !1 : (sv = a, !0) : (sv = null, !1);
  }
  var P_ = typeof setTimeout == "function" ? setTimeout : void 0, lR = typeof clearTimeout == "function" ? clearTimeout : void 0, N_ = typeof Promise == "function" ? Promise : void 0, cR = typeof queueMicrotask == "function" ? queueMicrotask : typeof N_ < "u" ? function(a) {
    return N_.resolve(null).then(a).catch(fR);
  } : P_;
  function fR(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function oa(a) {
    return a === "head";
  }
  function R_(a, i) {
    var u = i, f = 0;
    do {
      var v = u.nextSibling;
      if (a.removeChild(u), v && v.nodeType === 8)
        if (u = v.data, u === "/$" || u === "/&") {
          if (f === 0) {
            a.removeChild(v), Ki(i);
            return;
          }
          f--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          f++;
        else if (u === "html")
          Mu(a.ownerDocument.documentElement);
        else if (u === "head") {
          u = a.ownerDocument.head, Mu(u);
          for (var m = u.firstChild; m; ) {
            var _ = m.nextSibling, C = m.nodeName;
            m[Xo] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && m.rel.toLowerCase() === "stylesheet" || u.removeChild(m), m = _;
          }
        } else
          u === "body" && Mu(a.ownerDocument.body);
      u = v;
    } while (u);
    Ki(i);
  }
  function q_(a, i) {
    var u = a;
    a = 0;
    do {
      var f = u.nextSibling;
      if (u.nodeType === 1 ? i ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (i ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), f && f.nodeType === 8)
        if (u = f.data, u === "/$") {
          if (a === 0) break;
          a--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || a++;
      u = f;
    } while (u);
  }
  function hv(a) {
    var i = a.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var u = i;
      switch (i = i.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hv(u), mh(u);
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
  function sR(a, i, u, f) {
    for (; a.nodeType === 1; ) {
      var v = u;
      if (a.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!f && (a.nodeName !== "INPUT" || a.type !== "hidden"))
          break;
      } else if (f) {
        if (!a[Xo])
          switch (i) {
            case "meta":
              if (!a.hasAttribute("itemprop")) break;
              return a;
            case "link":
              if (m = a.getAttribute("rel"), m === "stylesheet" && a.hasAttribute("data-precedence"))
                break;
              if (m !== v.rel || a.getAttribute("href") !== (v.href == null || v.href === "" ? null : v.href) || a.getAttribute("crossorigin") !== (v.crossOrigin == null ? null : v.crossOrigin) || a.getAttribute("title") !== (v.title == null ? null : v.title))
                break;
              return a;
            case "style":
              if (a.hasAttribute("data-precedence")) break;
              return a;
            case "script":
              if (m = a.getAttribute("src"), (m !== (v.src == null ? null : v.src) || a.getAttribute("type") !== (v.type == null ? null : v.type) || a.getAttribute("crossorigin") !== (v.crossOrigin == null ? null : v.crossOrigin)) && m && a.hasAttribute("async") && !a.hasAttribute("itemprop"))
                break;
              return a;
            default:
              return a;
          }
      } else if (i === "input" && a.type === "hidden") {
        var m = v.name == null ? null : "" + v.name;
        if (v.type === "hidden" && a.getAttribute("name") === m)
          return a;
      } else return a;
      if (a = On(a.nextSibling), a === null) break;
    }
    return null;
  }
  function hR(a, i, u) {
    if (i === "") return null;
    for (; a.nodeType !== 3; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !u || (a = On(a.nextSibling), a === null)) return null;
    return a;
  }
  function z_(a, i) {
    for (; a.nodeType !== 8; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !i || (a = On(a.nextSibling), a === null)) return null;
    return a;
  }
  function dv(a) {
    return a.data === "$?" || a.data === "$~";
  }
  function vv(a) {
    return a.data === "$!" || a.data === "$?" && a.ownerDocument.readyState !== "loading";
  }
  function dR(a, i) {
    var u = a.ownerDocument;
    if (a.data === "$~") a._reactRetry = i;
    else if (a.data !== "$?" || u.readyState !== "loading")
      i();
    else {
      var f = function() {
        i(), u.removeEventListener("DOMContentLoaded", f);
      };
      u.addEventListener("DOMContentLoaded", f), a._reactRetry = f;
    }
  }
  function On(a) {
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
  var pv = null;
  function $_(a) {
    a = a.nextSibling;
    for (var i = 0; a; ) {
      if (a.nodeType === 8) {
        var u = a.data;
        if (u === "/$" || u === "/&") {
          if (i === 0)
            return On(a.nextSibling);
          i--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || i++;
      }
      a = a.nextSibling;
    }
    return null;
  }
  function B_(a) {
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
  function L_(a, i, u) {
    switch (i = Fc(u), a) {
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
  function Mu(a) {
    for (var i = a.attributes; i.length; )
      a.removeAttributeNode(i[0]);
    mh(a);
  }
  var An = /* @__PURE__ */ new Map(), k_ = /* @__PURE__ */ new Set();
  function Zc(a) {
    return typeof a.getRootNode == "function" ? a.getRootNode() : a.nodeType === 9 ? a : a.ownerDocument;
  }
  var _r = I.d;
  I.d = {
    f: vR,
    r: pR,
    D: yR,
    C: mR,
    L: gR,
    m: bR,
    X: SR,
    S: xR,
    M: _R
  };
  function vR() {
    var a = _r.f(), i = Uc();
    return a || i;
  }
  function pR(a) {
    var i = hi(a);
    i !== null && i.tag === 5 && i.type === "form" ? rS(i) : _r.r(a);
  }
  var Gi = typeof document > "u" ? null : document;
  function U_(a, i, u) {
    var f = Gi;
    if (f && typeof i == "string" && i) {
      var v = yn(i);
      v = 'link[rel="' + a + '"][href="' + v + '"]', typeof u == "string" && (v += '[crossorigin="' + u + '"]'), k_.has(v) || (k_.add(v), a = { rel: a, crossOrigin: u, href: i }, f.querySelector(v) === null && (i = f.createElement("link"), Pe(i, "link", a), Ae(i), f.head.appendChild(i)));
    }
  }
  function yR(a) {
    _r.D(a), U_("dns-prefetch", a, null);
  }
  function mR(a, i) {
    _r.C(a, i), U_("preconnect", a, i);
  }
  function gR(a, i, u) {
    _r.L(a, i, u);
    var f = Gi;
    if (f && a && i) {
      var v = 'link[rel="preload"][as="' + yn(i) + '"]';
      i === "image" && u && u.imageSrcSet ? (v += '[imagesrcset="' + yn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (v += '[imagesizes="' + yn(
        u.imageSizes
      ) + '"]')) : v += '[href="' + yn(a) + '"]';
      var m = v;
      switch (i) {
        case "style":
          m = Yi(a);
          break;
        case "script":
          m = Xi(a);
      }
      An.has(m) || (a = p(
        {
          rel: "preload",
          href: i === "image" && u && u.imageSrcSet ? void 0 : a,
          as: i
        },
        u
      ), An.set(m, a), f.querySelector(v) !== null || i === "style" && f.querySelector(ju(m)) || i === "script" && f.querySelector(Cu(m)) || (i = f.createElement("link"), Pe(i, "link", a), Ae(i), f.head.appendChild(i)));
    }
  }
  function bR(a, i) {
    _r.m(a, i);
    var u = Gi;
    if (u && a) {
      var f = i && typeof i.as == "string" ? i.as : "script", v = 'link[rel="modulepreload"][as="' + yn(f) + '"][href="' + yn(a) + '"]', m = v;
      switch (f) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Xi(a);
      }
      if (!An.has(m) && (a = p({ rel: "modulepreload", href: a }, i), An.set(m, a), u.querySelector(v) === null)) {
        switch (f) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Cu(m)))
              return;
        }
        f = u.createElement("link"), Pe(f, "link", a), Ae(f), u.head.appendChild(f);
      }
    }
  }
  function xR(a, i, u) {
    _r.S(a, i, u);
    var f = Gi;
    if (f && a) {
      var v = di(f).hoistableStyles, m = Yi(a);
      i = i || "default";
      var _ = v.get(m);
      if (!_) {
        var C = { loading: 0, preload: null };
        if (_ = f.querySelector(
          ju(m)
        ))
          C.loading = 5;
        else {
          a = p(
            { rel: "stylesheet", href: a, "data-precedence": i },
            u
          ), (u = An.get(m)) && yv(a, u);
          var q = _ = f.createElement("link");
          Ae(q), Pe(q, "link", a), q._p = new Promise(function(Y, J) {
            q.onload = Y, q.onerror = J;
          }), q.addEventListener("load", function() {
            C.loading |= 1;
          }), q.addEventListener("error", function() {
            C.loading |= 2;
          }), C.loading |= 4, Qc(_, i, f);
        }
        _ = {
          type: "stylesheet",
          instance: _,
          count: 1,
          state: C
        }, v.set(m, _);
      }
    }
  }
  function SR(a, i) {
    _r.X(a, i);
    var u = Gi;
    if (u && a) {
      var f = di(u).hoistableScripts, v = Xi(a), m = f.get(v);
      m || (m = u.querySelector(Cu(v)), m || (a = p({ src: a, async: !0 }, i), (i = An.get(v)) && mv(a, i), m = u.createElement("script"), Ae(m), Pe(m, "link", a), u.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, f.set(v, m));
    }
  }
  function _R(a, i) {
    _r.M(a, i);
    var u = Gi;
    if (u && a) {
      var f = di(u).hoistableScripts, v = Xi(a), m = f.get(v);
      m || (m = u.querySelector(Cu(v)), m || (a = p({ src: a, async: !0, type: "module" }, i), (i = An.get(v)) && mv(a, i), m = u.createElement("script"), Ae(m), Pe(m, "link", a), u.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, f.set(v, m));
    }
  }
  function H_(a, i, u, f) {
    var v = (v = mt.current) ? Zc(v) : null;
    if (!v) throw Error(r(446));
    switch (a) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (i = Yi(u.href), u = di(
          v
        ).hoistableStyles, f = u.get(i), f || (f = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(i, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          a = Yi(u.href);
          var m = di(
            v
          ).hoistableStyles, _ = m.get(a);
          if (_ || (v = v.ownerDocument || v, _ = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(a, _), (m = v.querySelector(
            ju(a)
          )) && !m._p && (_.instance = m, _.state.loading = 5), An.has(a) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, An.set(a, u), m || OR(
            v,
            a,
            u,
            _.state
          ))), i && f === null)
            throw Error(r(528, ""));
          return _;
        }
        if (i && f !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return i = u.async, u = u.src, typeof u == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = Xi(u), u = di(
          v
        ).hoistableScripts, f = u.get(i), f || (f = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(i, f)), f) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, a));
    }
  }
  function Yi(a) {
    return 'href="' + yn(a) + '"';
  }
  function ju(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function I_(a) {
    return p({}, a, {
      "data-precedence": a.precedence,
      precedence: null
    });
  }
  function OR(a, i, u, f) {
    a.querySelector('link[rel="preload"][as="style"][' + i + "]") ? f.loading = 1 : (i = a.createElement("link"), f.preload = i, i.addEventListener("load", function() {
      return f.loading |= 1;
    }), i.addEventListener("error", function() {
      return f.loading |= 2;
    }), Pe(i, "link", u), Ae(i), a.head.appendChild(i));
  }
  function Xi(a) {
    return '[src="' + yn(a) + '"]';
  }
  function Cu(a) {
    return "script[async]" + a;
  }
  function G_(a, i, u) {
    if (i.count++, i.instance === null)
      switch (i.type) {
        case "style":
          var f = a.querySelector(
            'style[data-href~="' + yn(u.href) + '"]'
          );
          if (f)
            return i.instance = f, Ae(f), f;
          var v = p({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return f = (a.ownerDocument || a).createElement(
            "style"
          ), Ae(f), Pe(f, "style", v), Qc(f, u.precedence, a), i.instance = f;
        case "stylesheet":
          v = Yi(u.href);
          var m = a.querySelector(
            ju(v)
          );
          if (m)
            return i.state.loading |= 4, i.instance = m, Ae(m), m;
          f = I_(u), (v = An.get(v)) && yv(f, v), m = (a.ownerDocument || a).createElement("link"), Ae(m);
          var _ = m;
          return _._p = new Promise(function(C, q) {
            _.onload = C, _.onerror = q;
          }), Pe(m, "link", f), i.state.loading |= 4, Qc(m, u.precedence, a), i.instance = m;
        case "script":
          return m = Xi(u.src), (v = a.querySelector(
            Cu(m)
          )) ? (i.instance = v, Ae(v), v) : (f = u, (v = An.get(m)) && (f = p({}, u), mv(f, v)), a = a.ownerDocument || a, v = a.createElement("script"), Ae(v), Pe(v, "link", f), a.head.appendChild(v), i.instance = v);
        case "void":
          return null;
        default:
          throw Error(r(443, i.type));
      }
    else
      i.type === "stylesheet" && (i.state.loading & 4) === 0 && (f = i.instance, i.state.loading |= 4, Qc(f, u.precedence, a));
    return i.instance;
  }
  function Qc(a, i, u) {
    for (var f = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), v = f.length ? f[f.length - 1] : null, m = v, _ = 0; _ < f.length; _++) {
      var C = f[_];
      if (C.dataset.precedence === i) m = C;
      else if (m !== v) break;
    }
    m ? m.parentNode.insertBefore(a, m.nextSibling) : (i = u.nodeType === 9 ? u.head : u, i.insertBefore(a, i.firstChild));
  }
  function yv(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.title == null && (a.title = i.title);
  }
  function mv(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.integrity == null && (a.integrity = i.integrity);
  }
  var Wc = null;
  function Y_(a, i, u) {
    if (Wc === null) {
      var f = /* @__PURE__ */ new Map(), v = Wc = /* @__PURE__ */ new Map();
      v.set(u, f);
    } else
      v = Wc, f = v.get(u), f || (f = /* @__PURE__ */ new Map(), v.set(u, f));
    if (f.has(a)) return f;
    for (f.set(a, null), u = u.getElementsByTagName(a), v = 0; v < u.length; v++) {
      var m = u[v];
      if (!(m[Xo] || m[Me] || a === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = m.getAttribute(i) || "";
        _ = a + _;
        var C = f.get(_);
        C ? C.push(m) : f.set(_, [m]);
      }
    }
    return f;
  }
  function X_(a, i, u) {
    a = a.ownerDocument || a, a.head.insertBefore(
      u,
      i === "title" ? a.querySelector("head > title") : null
    );
  }
  function AR(a, i, u) {
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
  function K_(a) {
    return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
  }
  function wR(a, i, u, f) {
    if (u.type === "stylesheet" && (typeof f.media != "string" || matchMedia(f.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var v = Yi(f.href), m = i.querySelector(
          ju(v)
        );
        if (m) {
          i = m._p, i !== null && typeof i == "object" && typeof i.then == "function" && (a.count++, a = Jc.bind(a), i.then(a, a)), u.state.loading |= 4, u.instance = m, Ae(m);
          return;
        }
        m = i.ownerDocument || i, f = I_(f), (v = An.get(v)) && yv(f, v), m = m.createElement("link"), Ae(m);
        var _ = m;
        _._p = new Promise(function(C, q) {
          _.onload = C, _.onerror = q;
        }), Pe(m, "link", f), u.instance = m;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(u, i), (i = u.state.preload) && (u.state.loading & 3) === 0 && (a.count++, u = Jc.bind(a), i.addEventListener("load", u), i.addEventListener("error", u));
    }
  }
  var gv = 0;
  function TR(a, i) {
    return a.stylesheets && a.count === 0 && ef(a, a.stylesheets), 0 < a.count || 0 < a.imgCount ? function(u) {
      var f = setTimeout(function() {
        if (a.stylesheets && ef(a, a.stylesheets), a.unsuspend) {
          var m = a.unsuspend;
          a.unsuspend = null, m();
        }
      }, 6e4 + i);
      0 < a.imgBytes && gv === 0 && (gv = 62500 * oR());
      var v = setTimeout(
        function() {
          if (a.waitingForImages = !1, a.count === 0 && (a.stylesheets && ef(a, a.stylesheets), a.unsuspend)) {
            var m = a.unsuspend;
            a.unsuspend = null, m();
          }
        },
        (a.imgBytes > gv ? 50 : 800) + i
      );
      return a.unsuspend = u, function() {
        a.unsuspend = null, clearTimeout(f), clearTimeout(v);
      };
    } : null;
  }
  function Jc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ef(this, this.stylesheets);
      else if (this.unsuspend) {
        var a = this.unsuspend;
        this.unsuspend = null, a();
      }
    }
  }
  var tf = null;
  function ef(a, i) {
    a.stylesheets = null, a.unsuspend !== null && (a.count++, tf = /* @__PURE__ */ new Map(), i.forEach(ER, a), tf = null, Jc.call(a));
  }
  function ER(a, i) {
    if (!(i.state.loading & 4)) {
      var u = tf.get(a);
      if (u) var f = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), tf.set(a, u);
        for (var v = a.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < v.length; m++) {
          var _ = v[m];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (u.set(_.dataset.precedence, _), f = _);
        }
        f && u.set(null, f);
      }
      v = i.instance, _ = v.getAttribute("data-precedence"), m = u.get(_) || f, m === f && u.set(null, v), u.set(_, v), this.count++, f = Jc.bind(this), v.addEventListener("load", f), v.addEventListener("error", f), m ? m.parentNode.insertBefore(v, m.nextSibling) : (a = a.nodeType === 9 ? a.head : a, a.insertBefore(v, a.firstChild)), i.state.loading |= 4;
    }
  }
  var Du = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function MR(a, i, u, f, v, m, _, C, q) {
    this.tag = 1, this.containerInfo = a, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dh(0), this.hiddenUpdates = dh(null), this.identifierPrefix = f, this.onUncaughtError = v, this.onCaughtError = m, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = q, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function V_(a, i, u, f, v, m, _, C, q, Y, J, at) {
    return a = new MR(
      a,
      i,
      u,
      _,
      q,
      Y,
      J,
      at,
      C
    ), i = 1, m === !0 && (i |= 24), m = rn(3, null, null, i), a.current = m, m.stateNode = a, i = Qh(), i.refCount++, a.pooledCache = i, i.refCount++, m.memoizedState = {
      element: f,
      isDehydrated: u,
      cache: i
    }, ed(m), a;
  }
  function F_(a) {
    return a ? (a = Oi, a) : Oi;
  }
  function Z_(a, i, u, f, v, m) {
    v = F_(v), f.context === null ? f.context = v : f.pendingContext = v, f = Fr(i), f.payload = { element: u }, m = m === void 0 ? null : m, m !== null && (f.callback = m), u = Zr(a, f, i), u !== null && (Qe(u, a, i), cu(u, a, i));
  }
  function Q_(a, i) {
    if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
      var u = a.retryLane;
      a.retryLane = u !== 0 && u < i ? u : i;
    }
  }
  function bv(a, i) {
    Q_(a, i), (a = a.alternate) && Q_(a, i);
  }
  function W_(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = ja(a, 67108864);
      i !== null && Qe(i, a, 67108864), bv(a, 67108864);
    }
  }
  function J_(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = cn();
      i = vh(i);
      var u = ja(a, i);
      u !== null && Qe(u, a, i), bv(a, i);
    }
  }
  var nf = !0;
  function jR(a, i, u, f) {
    var v = N.T;
    N.T = null;
    var m = I.p;
    try {
      I.p = 2, xv(a, i, u, f);
    } finally {
      I.p = m, N.T = v;
    }
  }
  function CR(a, i, u, f) {
    var v = N.T;
    N.T = null;
    var m = I.p;
    try {
      I.p = 8, xv(a, i, u, f);
    } finally {
      I.p = m, N.T = v;
    }
  }
  function xv(a, i, u, f) {
    if (nf) {
      var v = Sv(f);
      if (v === null)
        ov(
          a,
          i,
          f,
          rf,
          u
        ), eO(a, f);
      else if (PR(
        v,
        a,
        i,
        u,
        f
      ))
        f.stopPropagation();
      else if (eO(a, f), i & 4 && -1 < DR.indexOf(a)) {
        for (; v !== null; ) {
          var m = hi(v);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var _ = Aa(m.pendingLanes);
                  if (_ !== 0) {
                    var C = m;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; _; ) {
                      var q = 1 << 31 - en(_);
                      C.entanglements[1] |= q, _ &= ~q;
                    }
                    Vn(m), (Lt & 6) === 0 && (Lc = $e() + 500, wu(0));
                  }
                }
                break;
              case 31:
              case 13:
                C = ja(m, 2), C !== null && Qe(C, m, 2), Uc(), bv(m, 2);
            }
          if (m = Sv(f), m === null && ov(
            a,
            i,
            f,
            rf,
            u
          ), m === v) break;
          v = m;
        }
        v !== null && f.stopPropagation();
      } else
        ov(
          a,
          i,
          f,
          null,
          u
        );
    }
  }
  function Sv(a) {
    return a = Oh(a), _v(a);
  }
  var rf = null;
  function _v(a) {
    if (rf = null, a = si(a), a !== null) {
      var i = l(a);
      if (i === null) a = null;
      else {
        var u = i.tag;
        if (u === 13) {
          if (a = c(i), a !== null) return a;
          a = null;
        } else if (u === 31) {
          if (a = s(i), a !== null) return a;
          a = null;
        } else if (u === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          a = null;
        } else i !== a && (a = null);
      }
    }
    return rf = a, null;
  }
  function tO(a) {
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
        switch (Yl()) {
          case l1:
            return 2;
          case c1:
            return 8;
          case Xl:
          case mP:
            return 32;
          case f1:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ov = !1, ua = null, la = null, ca = null, Pu = /* @__PURE__ */ new Map(), Nu = /* @__PURE__ */ new Map(), fa = [], DR = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function eO(a, i) {
    switch (a) {
      case "focusin":
      case "focusout":
        ua = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        ca = null;
        break;
      case "pointerover":
      case "pointerout":
        Pu.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nu.delete(i.pointerId);
    }
  }
  function Ru(a, i, u, f, v, m) {
    return a === null || a.nativeEvent !== m ? (a = {
      blockedOn: i,
      domEventName: u,
      eventSystemFlags: f,
      nativeEvent: m,
      targetContainers: [v]
    }, i !== null && (i = hi(i), i !== null && W_(i)), a) : (a.eventSystemFlags |= f, i = a.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), a);
  }
  function PR(a, i, u, f, v) {
    switch (i) {
      case "focusin":
        return ua = Ru(
          ua,
          a,
          i,
          u,
          f,
          v
        ), !0;
      case "dragenter":
        return la = Ru(
          la,
          a,
          i,
          u,
          f,
          v
        ), !0;
      case "mouseover":
        return ca = Ru(
          ca,
          a,
          i,
          u,
          f,
          v
        ), !0;
      case "pointerover":
        var m = v.pointerId;
        return Pu.set(
          m,
          Ru(
            Pu.get(m) || null,
            a,
            i,
            u,
            f,
            v
          )
        ), !0;
      case "gotpointercapture":
        return m = v.pointerId, Nu.set(
          m,
          Ru(
            Nu.get(m) || null,
            a,
            i,
            u,
            f,
            v
          )
        ), !0;
    }
    return !1;
  }
  function nO(a) {
    var i = si(a.target);
    if (i !== null) {
      var u = l(i);
      if (u !== null) {
        if (i = u.tag, i === 13) {
          if (i = c(u), i !== null) {
            a.blockedOn = i, y1(a.priority, function() {
              J_(u);
            });
            return;
          }
        } else if (i === 31) {
          if (i = s(u), i !== null) {
            a.blockedOn = i, y1(a.priority, function() {
              J_(u);
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
  function af(a) {
    if (a.blockedOn !== null) return !1;
    for (var i = a.targetContainers; 0 < i.length; ) {
      var u = Sv(a.nativeEvent);
      if (u === null) {
        u = a.nativeEvent;
        var f = new u.constructor(
          u.type,
          u
        );
        _h = f, u.target.dispatchEvent(f), _h = null;
      } else
        return i = hi(u), i !== null && W_(i), a.blockedOn = u, !1;
      i.shift();
    }
    return !0;
  }
  function rO(a, i, u) {
    af(a) && u.delete(i);
  }
  function NR() {
    Ov = !1, ua !== null && af(ua) && (ua = null), la !== null && af(la) && (la = null), ca !== null && af(ca) && (ca = null), Pu.forEach(rO), Nu.forEach(rO);
  }
  function of(a, i) {
    a.blockedOn === i && (a.blockedOn = null, Ov || (Ov = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      NR
    )));
  }
  var uf = null;
  function aO(a) {
    uf !== a && (uf = a, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        uf === a && (uf = null);
        for (var i = 0; i < a.length; i += 3) {
          var u = a[i], f = a[i + 1], v = a[i + 2];
          if (typeof f != "function") {
            if (_v(f || u) === null)
              continue;
            break;
          }
          var m = hi(u);
          m !== null && (a.splice(i, 3), i -= 3, Sd(
            m,
            {
              pending: !0,
              data: v,
              method: u.method,
              action: f
            },
            f,
            v
          ));
        }
      }
    ));
  }
  function Ki(a) {
    function i(q) {
      return of(q, a);
    }
    ua !== null && of(ua, a), la !== null && of(la, a), ca !== null && of(ca, a), Pu.forEach(i), Nu.forEach(i);
    for (var u = 0; u < fa.length; u++) {
      var f = fa[u];
      f.blockedOn === a && (f.blockedOn = null);
    }
    for (; 0 < fa.length && (u = fa[0], u.blockedOn === null); )
      nO(u), u.blockedOn === null && fa.shift();
    if (u = (a.ownerDocument || a).$$reactFormReplay, u != null)
      for (f = 0; f < u.length; f += 3) {
        var v = u[f], m = u[f + 1], _ = v[Ye] || null;
        if (typeof m == "function")
          _ || aO(u);
        else if (_) {
          var C = null;
          if (m && m.hasAttribute("formAction")) {
            if (v = m, _ = m[Ye] || null)
              C = _.formAction;
            else if (_v(v) !== null) continue;
          } else C = _.action;
          typeof C == "function" ? u[f + 1] = C : (u.splice(f, 3), f -= 3), aO(u);
        }
      }
  }
  function iO() {
    function a(m) {
      m.canIntercept && m.info === "react-transition" && m.intercept({
        handler: function() {
          return new Promise(function(_) {
            return v = _;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function i() {
      v !== null && (v(), v = null), f || setTimeout(u, 20);
    }
    function u() {
      if (!f && !navigation.transition) {
        var m = navigation.currentEntry;
        m && m.url != null && navigation.navigate(m.url, {
          state: m.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var f = !1, v = null;
      return navigation.addEventListener("navigate", a), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(u, 100), function() {
        f = !0, navigation.removeEventListener("navigate", a), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), v !== null && (v(), v = null);
      };
    }
  }
  function Av(a) {
    this._internalRoot = a;
  }
  lf.prototype.render = Av.prototype.render = function(a) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    var u = i.current, f = cn();
    Z_(u, f, a, i, null, null);
  }, lf.prototype.unmount = Av.prototype.unmount = function() {
    var a = this._internalRoot;
    if (a !== null) {
      this._internalRoot = null;
      var i = a.containerInfo;
      Z_(a.current, 2, null, a, null, null), Uc(), i[fi] = null;
    }
  };
  function lf(a) {
    this._internalRoot = a;
  }
  lf.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var i = p1();
      a = { blockedOn: null, target: a, priority: i };
      for (var u = 0; u < fa.length && i !== 0 && i < fa[u].priority; u++) ;
      fa.splice(u, 0, a), u === 0 && nO(a);
    }
  };
  var oO = e.version;
  if (oO !== "19.2.8")
    throw Error(
      r(
        527,
        oO,
        "19.2.8"
      )
    );
  I.findDOMNode = function(a) {
    var i = a._reactInternals;
    if (i === void 0)
      throw typeof a.render == "function" ? Error(r(188)) : (a = Object.keys(a).join(","), Error(r(268, a)));
    return a = d(i), a = a !== null ? y(a) : null, a = a === null ? null : a.stateNode, a;
  };
  var RR = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cf.isDisabled && cf.supportsFiber)
      try {
        Io = cf.inject(
          RR
        ), tn = cf;
      } catch {
      }
  }
  return Yu.createRoot = function(a, i) {
    if (!o(a)) throw Error(r(299));
    var u = !1, f = "", v = dS, m = vS, _ = pS;
    return i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (f = i.identifierPrefix), i.onUncaughtError !== void 0 && (v = i.onUncaughtError), i.onCaughtError !== void 0 && (m = i.onCaughtError), i.onRecoverableError !== void 0 && (_ = i.onRecoverableError)), i = V_(
      a,
      1,
      !1,
      null,
      null,
      u,
      f,
      null,
      v,
      m,
      _,
      iO
    ), a[fi] = i.current, iv(a), new Av(i);
  }, Yu.hydrateRoot = function(a, i, u) {
    if (!o(a)) throw Error(r(299));
    var f = !1, v = "", m = dS, _ = vS, C = pS, q = null;
    return u != null && (u.unstable_strictMode === !0 && (f = !0), u.identifierPrefix !== void 0 && (v = u.identifierPrefix), u.onUncaughtError !== void 0 && (m = u.onUncaughtError), u.onCaughtError !== void 0 && (_ = u.onCaughtError), u.onRecoverableError !== void 0 && (C = u.onRecoverableError), u.formState !== void 0 && (q = u.formState)), i = V_(
      a,
      1,
      !0,
      i,
      u ?? null,
      f,
      v,
      q,
      m,
      _,
      C,
      iO
    ), i.context = F_(null), u = i.current, f = cn(), f = vh(f), v = Fr(f), v.callback = null, Zr(u, v, f), u = f, i.current.lanes = u, Yo(i, u), Vn(i), a[fi] = i.current, iv(a), new lf(i);
  }, Yu.version = "19.2.8", Yu;
}
var ej;
function bY() {
  if (ej) return jg.exports;
  ej = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), jg.exports = gY(), jg.exports;
}
var xY = bY();
const SY = `
  --nb-bg: #121a27;
  --nb-panel-2: #17202f;
  --nb-border: #223047;
  --nb-text: #e6edf7;
  --nb-muted: #8b9bb4;
  --nb-green: #34d399;
  --nb-red: #f87171;
  --nb-accent: #60a5fa;
  --nb-radius: 12px;
`, _Y = `
  --nb-bg: var(--ha-card-background, var(--card-background-color, #fff));
  --nb-panel-2: var(--secondary-background-color, #f0f0f0);
  --nb-border: var(--divider-color, #e0e0e0);
  --nb-text: var(--primary-text-color, #212121);
  --nb-muted: var(--secondary-text-color, #727272);
  --nb-green: var(--success-color, #34d399);
  --nb-red: var(--error-color, #f87171);
  --nb-accent: var(--primary-color, #60a5fa);
  --nb-radius: var(--ha-card-border-radius, 12px);
`;
function OY(t) {
  return `
  :host { display: block; }
  * { box-sizing: border-box; }
  .card {
    ${t === "ha" ? _Y : SY}
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
  }
  .muted { color: var(--nb-muted); }
  /* margin-left auto keeps the toggles pinned to the right edge even when a
     narrow card wraps them onto their own line under the title. */
  .controls { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; margin-left: auto; }
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
  `;
}
function oh(t) {
  class e extends HTMLElement {
    constructor() {
      super(...arguments);
      Or(this, "_root");
      Or(this, "_mount");
      Or(this, "_style");
      Or(this, "_hass");
      Or(this, "_config");
    }
    setConfig(c) {
      this._config = { ...t.defaults, ...c }, this._render();
    }
    set hass(c) {
      const s = !this._hass;
      this._hass = c, s && this._render();
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
      return t.size;
    }
    static getConfigElement() {
      return document.createElement(`${t.tag}-editor`);
    }
    static getStubConfig() {
      return { ...t.stub };
    }
    _render() {
      if (!this._config || !this._hass || !this.isConnected) return;
      this.shadowRoot || this.attachShadow({ mode: "open" });
      const c = this.shadowRoot;
      this._style || (this._style = document.createElement("style"), c.appendChild(this._style)), this._style.textContent = OY(this._config.theme ?? "netboi"), this._mount || (this._mount = document.createElement("div"), c.appendChild(this._mount), this._root = xY.createRoot(this._mount));
      const s = t.component;
      this._root.render(
        /* @__PURE__ */ it.jsx(s, { hass: this._hass, config: this._config }, JSON.stringify(this._config))
      );
    }
  }
  class n extends HTMLElement {
    constructor() {
      super(...arguments);
      Or(this, "_hass");
      Or(this, "_config");
      Or(this, "_entries");
    }
    set hass(c) {
      this._hass = c, this._entries || VR(c).then((s) => {
        this._entries = s.map((h) => ({ value: h.entry_id, label: h.title })), this._render();
      }).catch(() => {
        this._entries = [], this._render();
      }), this._render();
    }
    setConfig(c) {
      this._config = c, this._render();
    }
    _schema() {
      return t.schema.map(
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
      c || (c = document.createElement("ha-form"), c.addEventListener("value-changed", (s) => {
        const h = { ...s.detail.value };
        this.dispatchEvent(
          new CustomEvent("config-changed", {
            detail: { config: h },
            bubbles: !0,
            composed: !0
          })
        );
      }), this.appendChild(c)), c.hass = this._hass, c.data = this._config, c.schema = this._schema(), c.computeLabel = (s) => s.label ?? s.name;
    }
  }
  customElements.define(t.tag, e), customElements.define(`${t.tag}-editor`, n);
  const r = window;
  r.customCards = r.customCards || [], r.customCards.push({
    type: t.tag,
    name: t.name,
    description: t.description,
    preview: !1,
    documentationURL: "https://github.com/eduser25/netboi-hacs"
  });
}
const uh = {
  name: "theme",
  label: "Theme",
  selector: {
    select: {
      mode: "dropdown",
      options: [
        { value: "netboi", label: "netboi (dark)" },
        { value: "ha", label: "Follow Home Assistant theme" }
      ]
    }
  }
}, lh = { name: "entry", label: "netboi connection", selector: {} }, ch = { name: "title", label: "Title", selector: { text: {} } }, u1 = {
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
}, fh = {
  name: "range",
  label: "Default range",
  selector: {
    select: {
      mode: "dropdown",
      options: ["1d", "1w", "1m", "3m", "6m", "1y", "all"].map((t) => ({ value: t, label: t }))
    }
  }
}, sh = {
  name: "show_controls",
  label: "Show range/mode selectors",
  selector: { boolean: {} }
}, hh = {
  name: "auto_conceal_minutes",
  label: "Auto-conceal after reveal (minutes, 0 = stay revealed)",
  selector: { number: { min: 0, max: 43200, mode: "box" } }
}, yP = {
  name: "compact",
  label: "Short axis amounts ($1.2M instead of $1,200,000)",
  selector: { boolean: {} }
};
oh({
  tag: "netboi-worth-card",
  name: "netboi worth chart",
  description: "Your total over time — the netboi dashboard chart.",
  component: pP,
  schema: [
    ch,
    lh,
    u1,
    {
      name: "mode",
      label: "Chart mode",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: "total", label: "Total" },
            { value: "stacked", label: "Stacked by account" },
            { value: "category", label: "Retirement vs taxable vs debt" },
            { value: "flow", label: "Net flow bars" }
          ]
        }
      }
    },
    fh,
    sh,
    yP,
    hh,
    uh
  ],
  stub: { view: "all", range: "6m" },
  size: 6
});
oh({
  tag: "netboi-flow-card",
  name: "netboi net flow",
  description: "Money kept vs burned per day/week/month (day-to-day accounts).",
  component: pP,
  defaults: { view: "daily", mode: "flow" },
  schema: [ch, lh, fh, sh, yP, hh, uh],
  stub: { range: "3m" },
  size: 6
});
oh({
  tag: "netboi-stat-card",
  name: "netboi stat",
  description: "One big number with its change over a window.",
  component: o3,
  schema: [ch, lh, u1, fh, sh, hh, uh],
  stub: { view: "all", range: "1m" },
  size: 2
});
oh({
  tag: "netboi-accounts-card",
  name: "netboi accounts",
  description: "Accounts grouped by kind with balances and sync freshness.",
  component: r3,
  schema: [ch, lh, u1, fh, sh, hh, uh],
  stub: { view: "all", range: "1m" },
  size: 4
});
console.info("%c netboi cards %c loaded", "background:#60a5fa;color:#0b0f17;border-radius:3px 0 0 3px;padding:1px 4px", "background:#17202f;color:#e6edf7;border-radius:0 3px 3px 0;padding:1px 4px");
