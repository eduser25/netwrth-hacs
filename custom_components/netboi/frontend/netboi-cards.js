var PR = Object.defineProperty;
var NR = (t, e, n) => e in t ? PR(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Or = (t, e, n) => NR(t, typeof e != "symbol" ? e + "" : e, n);
var cf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var bv = { exports: {} }, zo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aO;
function RR() {
  if (aO) return zo;
  aO = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, u, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), u.key !== void 0 && (c = "" + u.key), "key" in u) {
      l = {};
      for (var s in u)
        s !== "key" && (l[s] = u[s]);
    } else l = u;
    return u = l.ref, {
      $$typeof: t,
      type: r,
      key: c,
      ref: u !== void 0 ? u : null,
      props: l
    };
  }
  return zo.Fragment = e, zo.jsx = n, zo.jsxs = n, zo;
}
var iO;
function qR() {
  return iO || (iO = 1, bv.exports = RR()), bv.exports;
}
var it = qR(), xv = { exports: {} }, _t = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uO;
function zR() {
  if (uO) return _t;
  uO = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), g = Symbol.iterator;
  function x(P) {
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
  }, S = Object.assign, b = {};
  function A(P, U, et) {
    this.props = P, this.context = U, this.refs = b, this.updater = et || O;
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
  function T() {
  }
  T.prototype = A.prototype;
  function M(P, U, et) {
    this.props = P, this.context = U, this.refs = b, this.updater = et || O;
  }
  var C = M.prototype = new T();
  C.constructor = M, S(C, A.prototype), C.isPureReactComponent = !0;
  var w = Array.isArray;
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
      return vt = vt(P), jt = ft === "" ? "." + Z(P, 0) : ft, w(vt) ? (et = "", jt != null && (et = jt.replace(K, "$&/") + "/"), N(vt, U, et, "", function(xt) {
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
    if (w(P))
      for (var ct = 0; ct < P.length; ct++)
        ft = P[ct], mt = kt + Z(ft, ct), jt += N(
          ft,
          U,
          et,
          mt,
          vt
        );
    else if (ct = x(P), typeof ct == "function")
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
  var ut = typeof reportError == "function" ? reportError : function(P) {
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
  return _t.Activity = p, _t.Children = lt, _t.Component = A, _t.Fragment = n, _t.Profiler = u, _t.PureComponent = M, _t.StrictMode = r, _t.Suspense = h, _t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, _t.__COMPILER_RUNTIME = {
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
      vt !== null && vt(et, ft), typeof ft == "object" && ft !== null && typeof ft.then == "function" && ft.then(E, ut);
    } catch (mt) {
      ut(mt);
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
var oO;
function Xb() {
  return oO || (oO = 1, xv.exports = zR()), xv.exports;
}
var at = Xb();
const B = /* @__PURE__ */ Qt(at), JM = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
}), $R = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), BR = "•••••";
function Ya(t, e = !1) {
  return (e ? $R : JM).format(t);
}
function LR(t) {
  return `${t >= 0 ? "+" : ""}${JM.format(t)}`;
}
function Tg(t) {
  return isFinite(t) ? `${t >= 0 ? "+" : ""}${(t * 100).toFixed(1)}%` : "–";
}
function Fi(t, e = !1) {
  return new Date(t).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...e ? { hour: "numeric", minute: "2-digit" } : {}
  });
}
const lu = [
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
];
function kR(t, e) {
  return t.connection.sendMessagePromise({
    type: "netboi/overview",
    ...e ? { entry_id: e } : {}
  });
}
function UR(t, e, n) {
  return t.connection.sendMessagePromise({
    type: "netboi/series",
    range: n,
    ...e ? { entry_id: e } : {}
  });
}
function HR(t) {
  return t.connection.sendMessagePromise({ type: "netboi/entries" });
}
function IR(t, e, n, r) {
  return t.connection.sendMessagePromise({
    type: "netboi/reveal",
    code: n,
    ...r !== void 0 ? { ttl_minutes: r } : {},
    ...e ? { entry_id: e } : {}
  });
}
function GR(t, e) {
  return t.connection.sendMessagePromise({
    type: "netboi/conceal",
    ...e ? { entry_id: e } : {}
  });
}
function YR({
  onSubmit: t,
  error: e,
  label: n,
  footer: r
}) {
  const [u, l] = at.useState(""), [c, s] = at.useState(!1), h = async (d) => {
    if (c || u.length >= 4) return;
    const y = u + d;
    if (l(y), y.length === 4) {
      s(!0);
      const p = await t(y);
      s(!1), p || l("");
    }
  };
  return /* @__PURE__ */ it.jsxs("div", { className: "pinpad", children: [
    n && /* @__PURE__ */ it.jsx("div", { className: "pin-label", children: n }),
    /* @__PURE__ */ it.jsx("div", { className: "pin-dots", children: [0, 1, 2, 3].map((d) => /* @__PURE__ */ it.jsx("span", { className: `pin-dot ${d < u.length ? "filled" : ""}` }, d)) }),
    /* @__PURE__ */ it.jsxs("div", { className: "pin-grid", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => /* @__PURE__ */ it.jsx("button", { onClick: () => h(d), disabled: c, children: d }, d)),
      /* @__PURE__ */ it.jsx("button", { onClick: () => l(""), disabled: c, children: "C" }),
      /* @__PURE__ */ it.jsx("button", { onClick: () => h("0"), disabled: c, children: "0" }),
      /* @__PURE__ */ it.jsx("button", { onClick: () => l(u.slice(0, -1)), disabled: c, children: "⌫" })
    ] }),
    e && /* @__PURE__ */ it.jsx("div", { className: "pw-err", children: e }),
    r
  ] });
}
const XR = 6e4;
function Kb(t, e, n) {
  const [r, u] = at.useState(null), [l, c] = at.useState(null), [s, h] = at.useState(!0), [d, y] = at.useState(null), [p, g] = at.useState(0), x = at.useCallback(() => g((b) => b + 1), []), O = at.useCallback(() => {
    c(null), u(
      (b) => b && { ...b, me: { ...b.me, censored: !0, revealed: !1, reveal_expires: null } }
    ), h(!0), x();
  }, [x]), S = r && !r.me.censored && r.me.reveal_expires ? new Date(r.me.reveal_expires).getTime() : null;
  return at.useEffect(() => {
    let b = !0;
    Promise.all([kR(t, e), UR(t, e, n)]).then(([T, M]) => {
      b && (u(T), c(M.series), h(M.censored), y(null));
    }).catch((T) => {
      b && y((T == null ? void 0 : T.message) ?? String(T));
    });
    const A = setInterval(x, XR);
    return () => {
      b = !1, clearInterval(A);
    };
  }, [t, e, n, p, x]), at.useEffect(() => {
    if (S == null) return;
    const b = S - Date.now() + 1e3;
    if (b <= 0) {
      O();
      return;
    }
    const A = setTimeout(O, b);
    return () => clearTimeout(A);
  }, [S, O]), at.useEffect(() => {
    const b = () => {
      document.visibilityState === "visible" && (S != null && Date.now() >= S ? O() : x());
    };
    return document.addEventListener("visibilitychange", b), window.addEventListener("pageshow", b), () => {
      document.removeEventListener("visibilitychange", b), window.removeEventListener("pageshow", b);
    };
  }, [S, O, x]), { overview: r, series: l, masked: s, error: d, refresh: x };
}
const KR = ({ open: t }) => /* @__PURE__ */ it.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", children: [
  /* @__PURE__ */ it.jsx("rect", { x: "4", y: "11", width: "16", height: "10", rx: "2" }),
  t ? /* @__PURE__ */ it.jsx("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" }) : /* @__PURE__ */ it.jsx("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] });
function Vb({
  hass: t,
  entry: e,
  overview: n,
  autoConcealMinutes: r,
  onChanged: u
}) {
  const [l, c] = at.useState(!1), [s, h] = at.useState(null), d = n.me;
  if (!d.can_reveal) return null;
  const y = r ?? n.default_reveal_ttl_minutes, p = async (x) => {
    const O = await IR(t, e, x, y).catch((S) => ({
      ok: !1,
      error: (S == null ? void 0 : S.message) ?? String(S)
    }));
    return O.ok ? (h(null), c(!1), u(), !0) : (h(O.error ?? "rejected"), !1);
  }, g = async () => {
    if (!d.censored) {
      await GR(t, e).catch(() => {
      }), u();
      return;
    }
    if (!d.code_required) {
      await p("");
      return;
    }
    h(null), c((x) => !x);
  };
  return /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
    /* @__PURE__ */ it.jsx(
      "button",
      {
        className: "lock",
        title: d.censored ? "Reveal amounts" : "Conceal amounts",
        onClick: g,
        children: /* @__PURE__ */ it.jsx(KR, { open: !d.censored })
      }
    ),
    l && d.censored && /* @__PURE__ */ it.jsx("div", { className: "pin-wrap", children: /* @__PURE__ */ it.jsx(
      YR,
      {
        onSubmit: p,
        error: s,
        label: y > 0 ? `Reveal for ${y} min` : "Reveal until concealed",
        footer: /* @__PURE__ */ it.jsx("button", { className: "pin-footer", onClick: () => c(!1), children: "Cancel" })
      }
    ) })
  ] });
}
function Eg({
  options: t,
  value: e,
  onChange: n
}) {
  return /* @__PURE__ */ it.jsx("span", { className: "seg", children: t.map((r) => /* @__PURE__ */ it.jsx("button", { className: r === e ? "active" : "", onClick: () => n(r), children: r }, r)) });
}
function VR(t) {
  return t ? Date.now() - new Date(t).getTime() > 48 * 3600 * 1e3 : !0;
}
function Fb(t) {
  return at.useMemo(
    () => t ? t.accounts.filter((e) => !e.hidden) : [],
    [t]
  );
}
const FR = ["cash", "investment", "credit", "loan", "other"];
function ZR(t, e) {
  if (t.balance == null) return "–";
  const n = parseFloat(t.balance);
  return e ? `${n.toFixed(1)}%` : Ya(n, !0);
}
function QR({
  hass: t,
  config: e
}) {
  const n = lu.find((y) => y.key === (e.view ?? "all")) ?? lu[2], { overview: r, masked: u, error: l, refresh: c } = Kb(t, e.entry, "1m"), s = Fb(r), h = at.useMemo(() => s.filter(n.pick), [s, n]), d = at.useMemo(
    () => FR.map((y) => ({
      kind: y,
      accounts: h.filter((p) => p.kind === y)
    })).filter((y) => y.accounts.length > 0),
    [h]
  );
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? "Accounts" }),
      r && /* @__PURE__ */ it.jsx(
        Vb,
        {
          hass: t,
          entry: e.entry,
          overview: r,
          autoConcealMinutes: e.auto_conceal_minutes,
          onChanged: c
        }
      )
    ] }),
    l && /* @__PURE__ */ it.jsx("div", { className: "error-box", children: l }),
    !l && !r && /* @__PURE__ */ it.jsx("div", { className: "status", children: "Loading…" }),
    !l && r && d.length === 0 && /* @__PURE__ */ it.jsx("div", { className: "status", children: "No accounts." }),
    !l && r && d.length > 0 && /* @__PURE__ */ it.jsx("table", { children: /* @__PURE__ */ it.jsx("tbody", { children: d.map((y) => /* @__PURE__ */ it.jsx(WR, { kind: y.kind, accounts: y.accounts, masked: u }, y.kind)) }) })
  ] });
}
function WR({
  kind: t,
  accounts: e,
  masked: n
}) {
  return /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
    /* @__PURE__ */ it.jsx("tr", { className: "kind-row", children: /* @__PURE__ */ it.jsx("td", { colSpan: 2, children: t }) }),
    e.map((r) => /* @__PURE__ */ it.jsxs("tr", { children: [
      /* @__PURE__ */ it.jsxs("td", { children: [
        /* @__PURE__ */ it.jsx("span", { className: `dot ${VR(r.balance_at) ? "stale" : ""}` }),
        r.nickname || r.name,
        /* @__PURE__ */ it.jsxs("span", { className: "muted", children: [
          " · ",
          r.org_name || r.org_domain
        ] })
      ] }),
      /* @__PURE__ */ it.jsx("td", { className: "num", children: ZR(r, n) })
    ] }, r.id))
  ] });
}
function tj(t) {
  const e = /* @__PURE__ */ new Set();
  for (const u of t)
    for (const l of u.points) e.add(new Date(l.ts).getTime());
  const r = [...e].sort((u, l) => u - l).map((u) => ({ ts: u, values: {} }));
  for (const u of t) {
    const l = u.points.map((h) => ({ ts: new Date(h.ts).getTime(), v: parseFloat(h.balance) })).sort((h, d) => h.ts - d.ts);
    let c = 0, s = l.length > 0 ? l[0].v : 0;
    for (const h of r) {
      for (; c < l.length && l[c].ts <= h.ts; )
        s = l[c].v, c++;
      h.values[u.account_id] = s;
    }
  }
  return r;
}
function Fn(t, e, n = () => !0) {
  let r = 0;
  for (const u of e)
    n(u) && (r += t.values[u.id] ?? 0);
  return r;
}
function JR(t, e, n) {
  if (t.length === 0) return [];
  const r = n === "1d" || n === "1w" ? "day" : n === "1m" || n === "3m" ? "week" : "month", u = (h) => {
    const d = new Date(h);
    if (r === "day") return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    if (r === "week") {
      const y = (d.getDay() + 6) % 7;
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() - y).getTime();
    }
    return new Date(d.getFullYear(), d.getMonth(), 1).getTime();
  }, l = /* @__PURE__ */ new Map();
  for (const h of t) l.set(u(h.ts), Fn(h, e));
  const c = [...l.keys()].sort((h, d) => h - d);
  let s = Fn(t[0], e);
  return c.map((h) => {
    const d = l.get(h), y = d - s;
    return s = d, { ts: h, flow: y };
  });
}
function Sv(t, e) {
  let n = 0;
  for (const r of e) {
    const u = t.values[r.id] ?? 0;
    u < 0 && (n += u);
  }
  return n;
}
const ej = ["1d", "1w", "1m", "3m", "6m", "1y", "all"];
function t3({
  hass: t,
  config: e
}) {
  const n = lu.find((x) => x.key === (e.view ?? "all")) ?? lu[2], [r, u] = at.useState(e.range ?? "1m"), { overview: l, series: c, masked: s, error: h, refresh: d } = Kb(t, e.entry, r), y = Fb(l), p = at.useMemo(() => y.filter(n.pick), [y, n]), g = at.useMemo(() => {
    if (!c) return null;
    const x = new Set(p.map((A) => A.id)), O = tj(c.filter((A) => x.has(A.account_id)));
    if (O.length === 0) return null;
    const S = Fn(O[0], p), b = Fn(O[O.length - 1], p);
    return { last: b, delta: S !== 0 ? (b - S) / Math.abs(S) : null };
  }, [c, p]);
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? n.label }),
      e.show_controls !== !1 && /* @__PURE__ */ it.jsx("span", { className: "controls", children: /* @__PURE__ */ it.jsx(Eg, { options: ej, value: r, onChange: u }) }),
      l && /* @__PURE__ */ it.jsx(
        Vb,
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
    !h && g && /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
      /* @__PURE__ */ it.jsx("div", { className: "stat-value", children: s ? BR : Ya(g.last) }),
      g.delta != null && !n.flow && /* @__PURE__ */ it.jsxs("div", { className: `stat-delta ${g.delta >= 0 ? "up" : "down"}`, children: [
        Tg(g.delta),
        " over ",
        r
      ] })
    ] })
  ] });
}
function nj(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (e = 0; e < u; e++) t[e] && (n = nj(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function qt() {
  for (var t, e, n = 0, r = "", u = arguments.length; n < u; n++) (t = arguments[n]) && (e = nj(t)) && (r && (r += " "), r += e);
  return r;
}
var _v, lO;
function Je() {
  if (lO) return _v;
  lO = 1;
  var t = Array.isArray;
  return _v = t, _v;
}
var Ov, cO;
function rj() {
  if (cO) return Ov;
  cO = 1;
  var t = typeof cf == "object" && cf && cf.Object === Object && cf;
  return Ov = t, Ov;
}
var Av, fO;
function rr() {
  if (fO) return Av;
  fO = 1;
  var t = rj(), e = typeof self == "object" && self && self.Object === Object && self, n = t || e || Function("return this")();
  return Av = n, Av;
}
var wv, sO;
function $l() {
  if (sO) return wv;
  sO = 1;
  var t = rr(), e = t.Symbol;
  return wv = e, wv;
}
var Tv, hO;
function e3() {
  if (hO) return Tv;
  hO = 1;
  var t = $l(), e = Object.prototype, n = e.hasOwnProperty, r = e.toString, u = t ? t.toStringTag : void 0;
  function l(c) {
    var s = n.call(c, u), h = c[u];
    try {
      c[u] = void 0;
      var d = !0;
    } catch {
    }
    var y = r.call(c);
    return d && (s ? c[u] = h : delete c[u]), y;
  }
  return Tv = l, Tv;
}
var Ev, dO;
function n3() {
  if (dO) return Ev;
  dO = 1;
  var t = Object.prototype, e = t.toString;
  function n(r) {
    return e.call(r);
  }
  return Ev = n, Ev;
}
var Mv, vO;
function $r() {
  if (vO) return Mv;
  vO = 1;
  var t = $l(), e = e3(), n = n3(), r = "[object Null]", u = "[object Undefined]", l = t ? t.toStringTag : void 0;
  function c(s) {
    return s == null ? s === void 0 ? u : r : l && l in Object(s) ? e(s) : n(s);
  }
  return Mv = c, Mv;
}
var jv, pO;
function Br() {
  if (pO) return jv;
  pO = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return jv = t, jv;
}
var Cv, yO;
function Nu() {
  if (yO) return Cv;
  yO = 1;
  var t = $r(), e = Br(), n = "[object Symbol]";
  function r(u) {
    return typeof u == "symbol" || e(u) && t(u) == n;
  }
  return Cv = r, Cv;
}
var Dv, mO;
function Zb() {
  if (mO) return Dv;
  mO = 1;
  var t = Je(), e = Nu(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function u(l, c) {
    if (t(l))
      return !1;
    var s = typeof l;
    return s == "number" || s == "symbol" || s == "boolean" || l == null || e(l) ? !0 : r.test(l) || !n.test(l) || c != null && l in Object(c);
  }
  return Dv = u, Dv;
}
var Pv, gO;
function ba() {
  if (gO) return Pv;
  gO = 1;
  function t(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  return Pv = t, Pv;
}
var Nv, bO;
function Qb() {
  if (bO) return Nv;
  bO = 1;
  var t = $r(), e = ba(), n = "[object AsyncFunction]", r = "[object Function]", u = "[object GeneratorFunction]", l = "[object Proxy]";
  function c(s) {
    if (!e(s))
      return !1;
    var h = t(s);
    return h == r || h == u || h == n || h == l;
  }
  return Nv = c, Nv;
}
var Rv, xO;
function r3() {
  if (xO) return Rv;
  xO = 1;
  var t = rr(), e = t["__core-js_shared__"];
  return Rv = e, Rv;
}
var qv, SO;
function a3() {
  if (SO) return qv;
  SO = 1;
  var t = r3(), e = (function() {
    var r = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!e && e in r;
  }
  return qv = n, qv;
}
var zv, _O;
function aj() {
  if (_O) return zv;
  _O = 1;
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
  return zv = n, zv;
}
var $v, OO;
function i3() {
  if (OO) return $v;
  OO = 1;
  var t = Qb(), e = a3(), n = ba(), r = aj(), u = /[\\^$.*+?()[\]{}|]/g, l = /^\[object .+?Constructor\]$/, c = Function.prototype, s = Object.prototype, h = c.toString, d = s.hasOwnProperty, y = RegExp(
    "^" + h.call(d).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(g) {
    if (!n(g) || e(g))
      return !1;
    var x = t(g) ? y : l;
    return x.test(r(g));
  }
  return $v = p, $v;
}
var Bv, AO;
function u3() {
  if (AO) return Bv;
  AO = 1;
  function t(e, n) {
    return e == null ? void 0 : e[n];
  }
  return Bv = t, Bv;
}
var Lv, wO;
function ii() {
  if (wO) return Lv;
  wO = 1;
  var t = i3(), e = u3();
  function n(r, u) {
    var l = e(r, u);
    return t(l) ? l : void 0;
  }
  return Lv = n, Lv;
}
var kv, TO;
function Ts() {
  if (TO) return kv;
  TO = 1;
  var t = ii(), e = t(Object, "create");
  return kv = e, kv;
}
var Uv, EO;
function o3() {
  if (EO) return Uv;
  EO = 1;
  var t = Ts();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Uv = e, Uv;
}
var Hv, MO;
function l3() {
  if (MO) return Hv;
  MO = 1;
  function t(e) {
    var n = this.has(e) && delete this.__data__[e];
    return this.size -= n ? 1 : 0, n;
  }
  return Hv = t, Hv;
}
var Iv, jO;
function c3() {
  if (jO) return Iv;
  jO = 1;
  var t = Ts(), e = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function u(l) {
    var c = this.__data__;
    if (t) {
      var s = c[l];
      return s === e ? void 0 : s;
    }
    return r.call(c, l) ? c[l] : void 0;
  }
  return Iv = u, Iv;
}
var Gv, CO;
function f3() {
  if (CO) return Gv;
  CO = 1;
  var t = Ts(), e = Object.prototype, n = e.hasOwnProperty;
  function r(u) {
    var l = this.__data__;
    return t ? l[u] !== void 0 : n.call(l, u);
  }
  return Gv = r, Gv;
}
var Yv, DO;
function s3() {
  if (DO) return Yv;
  DO = 1;
  var t = Ts(), e = "__lodash_hash_undefined__";
  function n(r, u) {
    var l = this.__data__;
    return this.size += this.has(r) ? 0 : 1, l[r] = t && u === void 0 ? e : u, this;
  }
  return Yv = n, Yv;
}
var Xv, PO;
function h3() {
  if (PO) return Xv;
  PO = 1;
  var t = o3(), e = l3(), n = c3(), r = f3(), u = s3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = u, Xv = l, Xv;
}
var Kv, NO;
function d3() {
  if (NO) return Kv;
  NO = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Kv = t, Kv;
}
var Vv, RO;
function Wb() {
  if (RO) return Vv;
  RO = 1;
  function t(e, n) {
    return e === n || e !== e && n !== n;
  }
  return Vv = t, Vv;
}
var Fv, qO;
function Es() {
  if (qO) return Fv;
  qO = 1;
  var t = Wb();
  function e(n, r) {
    for (var u = n.length; u--; )
      if (t(n[u][0], r))
        return u;
    return -1;
  }
  return Fv = e, Fv;
}
var Zv, zO;
function v3() {
  if (zO) return Zv;
  zO = 1;
  var t = Es(), e = Array.prototype, n = e.splice;
  function r(u) {
    var l = this.__data__, c = t(l, u);
    if (c < 0)
      return !1;
    var s = l.length - 1;
    return c == s ? l.pop() : n.call(l, c, 1), --this.size, !0;
  }
  return Zv = r, Zv;
}
var Qv, $O;
function p3() {
  if ($O) return Qv;
  $O = 1;
  var t = Es();
  function e(n) {
    var r = this.__data__, u = t(r, n);
    return u < 0 ? void 0 : r[u][1];
  }
  return Qv = e, Qv;
}
var Wv, BO;
function y3() {
  if (BO) return Wv;
  BO = 1;
  var t = Es();
  function e(n) {
    return t(this.__data__, n) > -1;
  }
  return Wv = e, Wv;
}
var Jv, LO;
function m3() {
  if (LO) return Jv;
  LO = 1;
  var t = Es();
  function e(n, r) {
    var u = this.__data__, l = t(u, n);
    return l < 0 ? (++this.size, u.push([n, r])) : u[l][1] = r, this;
  }
  return Jv = e, Jv;
}
var tp, kO;
function Ms() {
  if (kO) return tp;
  kO = 1;
  var t = d3(), e = v3(), n = p3(), r = y3(), u = m3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = u, tp = l, tp;
}
var ep, UO;
function Jb() {
  if (UO) return ep;
  UO = 1;
  var t = ii(), e = rr(), n = t(e, "Map");
  return ep = n, ep;
}
var np, HO;
function g3() {
  if (HO) return np;
  HO = 1;
  var t = h3(), e = Ms(), n = Jb();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (n || e)(),
      string: new t()
    };
  }
  return np = r, np;
}
var rp, IO;
function b3() {
  if (IO) return rp;
  IO = 1;
  function t(e) {
    var n = typeof e;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
  }
  return rp = t, rp;
}
var ap, GO;
function js() {
  if (GO) return ap;
  GO = 1;
  var t = b3();
  function e(n, r) {
    var u = n.__data__;
    return t(r) ? u[typeof r == "string" ? "string" : "hash"] : u.map;
  }
  return ap = e, ap;
}
var ip, YO;
function x3() {
  if (YO) return ip;
  YO = 1;
  var t = js();
  function e(n) {
    var r = t(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return ip = e, ip;
}
var up, XO;
function S3() {
  if (XO) return up;
  XO = 1;
  var t = js();
  function e(n) {
    return t(this, n).get(n);
  }
  return up = e, up;
}
var op, KO;
function _3() {
  if (KO) return op;
  KO = 1;
  var t = js();
  function e(n) {
    return t(this, n).has(n);
  }
  return op = e, op;
}
var lp, VO;
function O3() {
  if (VO) return lp;
  VO = 1;
  var t = js();
  function e(n, r) {
    var u = t(this, n), l = u.size;
    return u.set(n, r), this.size += u.size == l ? 0 : 1, this;
  }
  return lp = e, lp;
}
var cp, FO;
function t0() {
  if (FO) return cp;
  FO = 1;
  var t = g3(), e = x3(), n = S3(), r = _3(), u = O3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = u, cp = l, cp;
}
var fp, ZO;
function ij() {
  if (ZO) return fp;
  ZO = 1;
  var t = t0(), e = "Expected a function";
  function n(r, u) {
    if (typeof r != "function" || u != null && typeof u != "function")
      throw new TypeError(e);
    var l = function() {
      var c = arguments, s = u ? u.apply(this, c) : c[0], h = l.cache;
      if (h.has(s))
        return h.get(s);
      var d = r.apply(this, c);
      return l.cache = h.set(s, d) || h, d;
    };
    return l.cache = new (n.Cache || t)(), l;
  }
  return n.Cache = t, fp = n, fp;
}
var sp, QO;
function A3() {
  if (QO) return sp;
  QO = 1;
  var t = ij(), e = 500;
  function n(r) {
    var u = t(r, function(c) {
      return l.size === e && l.clear(), c;
    }), l = u.cache;
    return u;
  }
  return sp = n, sp;
}
var hp, WO;
function w3() {
  if (WO) return hp;
  WO = 1;
  var t = A3(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = t(function(u) {
    var l = [];
    return u.charCodeAt(0) === 46 && l.push(""), u.replace(e, function(c, s, h, d) {
      l.push(h ? d.replace(n, "$1") : s || c);
    }), l;
  });
  return hp = r, hp;
}
var dp, JO;
function e0() {
  if (JO) return dp;
  JO = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length, l = Array(u); ++r < u; )
      l[r] = n(e[r], r, e);
    return l;
  }
  return dp = t, dp;
}
var vp, tA;
function T3() {
  if (tA) return vp;
  tA = 1;
  var t = $l(), e = e0(), n = Je(), r = Nu(), u = t ? t.prototype : void 0, l = u ? u.toString : void 0;
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
  return vp = c, vp;
}
var pp, eA;
function uj() {
  if (eA) return pp;
  eA = 1;
  var t = T3();
  function e(n) {
    return n == null ? "" : t(n);
  }
  return pp = e, pp;
}
var yp, nA;
function oj() {
  if (nA) return yp;
  nA = 1;
  var t = Je(), e = Zb(), n = w3(), r = uj();
  function u(l, c) {
    return t(l) ? l : e(l, c) ? [l] : n(r(l));
  }
  return yp = u, yp;
}
var mp, rA;
function Cs() {
  if (rA) return mp;
  rA = 1;
  var t = Nu();
  function e(n) {
    if (typeof n == "string" || t(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return mp = e, mp;
}
var gp, aA;
function n0() {
  if (aA) return gp;
  aA = 1;
  var t = oj(), e = Cs();
  function n(r, u) {
    u = t(u, r);
    for (var l = 0, c = u.length; r != null && l < c; )
      r = r[e(u[l++])];
    return l && l == c ? r : void 0;
  }
  return gp = n, gp;
}
var bp, iA;
function lj() {
  if (iA) return bp;
  iA = 1;
  var t = n0();
  function e(n, r, u) {
    var l = n == null ? void 0 : t(n, r);
    return l === void 0 ? u : l;
  }
  return bp = e, bp;
}
var E3 = lj();
const jn = /* @__PURE__ */ Qt(E3);
var xp, uA;
function M3() {
  if (uA) return xp;
  uA = 1;
  function t(e) {
    return e == null;
  }
  return xp = t, xp;
}
var j3 = M3();
const Mt = /* @__PURE__ */ Qt(j3);
var Sp, oA;
function C3() {
  if (oA) return Sp;
  oA = 1;
  var t = $r(), e = Je(), n = Br(), r = "[object String]";
  function u(l) {
    return typeof l == "string" || !e(l) && n(l) && t(l) == r;
  }
  return Sp = u, Sp;
}
var D3 = C3();
const ti = /* @__PURE__ */ Qt(D3);
var P3 = Qb();
const At = /* @__PURE__ */ Qt(P3);
var N3 = ba();
const Ru = /* @__PURE__ */ Qt(N3);
var _p = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lA;
function R3() {
  if (lA) return Ut;
  lA = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var A = b.$$typeof;
      switch (A) {
        case t:
          switch (b = b.type, b) {
            case n:
            case u:
            case r:
            case d:
            case y:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case c:
                case h:
                case g:
                case p:
                case l:
                  return b;
                default:
                  return A;
              }
          }
        case e:
          return A;
      }
    }
  }
  return Ut.ContextConsumer = c, Ut.ContextProvider = l, Ut.Element = t, Ut.ForwardRef = h, Ut.Fragment = n, Ut.Lazy = g, Ut.Memo = p, Ut.Portal = e, Ut.Profiler = u, Ut.StrictMode = r, Ut.Suspense = d, Ut.SuspenseList = y, Ut.isAsyncMode = function() {
    return !1;
  }, Ut.isConcurrentMode = function() {
    return !1;
  }, Ut.isContextConsumer = function(b) {
    return S(b) === c;
  }, Ut.isContextProvider = function(b) {
    return S(b) === l;
  }, Ut.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Ut.isForwardRef = function(b) {
    return S(b) === h;
  }, Ut.isFragment = function(b) {
    return S(b) === n;
  }, Ut.isLazy = function(b) {
    return S(b) === g;
  }, Ut.isMemo = function(b) {
    return S(b) === p;
  }, Ut.isPortal = function(b) {
    return S(b) === e;
  }, Ut.isProfiler = function(b) {
    return S(b) === u;
  }, Ut.isStrictMode = function(b) {
    return S(b) === r;
  }, Ut.isSuspense = function(b) {
    return S(b) === d;
  }, Ut.isSuspenseList = function(b) {
    return S(b) === y;
  }, Ut.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === r || b === d || b === y || b === x || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === p || b.$$typeof === l || b.$$typeof === c || b.$$typeof === h || b.$$typeof === O || b.getModuleId !== void 0);
  }, Ut.typeOf = S, Ut;
}
var cA;
function q3() {
  return cA || (cA = 1, _p.exports = R3()), _p.exports;
}
var z3 = q3(), Op, fA;
function cj() {
  if (fA) return Op;
  fA = 1;
  var t = $r(), e = Br(), n = "[object Number]";
  function r(u) {
    return typeof u == "number" || e(u) && t(u) == n;
  }
  return Op = r, Op;
}
var Ap, sA;
function $3() {
  if (sA) return Ap;
  sA = 1;
  var t = cj();
  function e(n) {
    return t(n) && n != +n;
  }
  return Ap = e, Ap;
}
var B3 = $3();
const qu = /* @__PURE__ */ Qt(B3);
var L3 = cj();
const k3 = /* @__PURE__ */ Qt(L3);
var Hn = function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}, Xa = function(e) {
  return ti(e) && e.indexOf("%") === e.length - 1;
}, st = function(e) {
  return k3(e) && !qu(e);
}, U3 = function(e) {
  return Mt(e);
}, _e = function(e) {
  return st(e) || ti(e);
}, H3 = 0, zu = function(e) {
  var n = ++H3;
  return "".concat(e || "").concat(n);
}, ei = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!st(e) && !ti(e))
    return r;
  var l;
  if (Xa(e)) {
    var c = e.indexOf("%");
    l = n * parseFloat(e.slice(0, c)) / 100;
  } else
    l = +e;
  return qu(l) && (l = r), u && l > n && (l = n), l;
}, pa = function(e) {
  if (!e)
    return null;
  var n = Object.keys(e);
  return n && n.length ? e[n[0]] : null;
}, I3 = function(e) {
  if (!Array.isArray(e))
    return !1;
  for (var n = e.length, r = {}, u = 0; u < n; u++)
    if (!r[e[u]])
      r[e[u]] = !0;
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
function Tf(t, e, n) {
  return !t || !t.length ? null : t.find(function(r) {
    return r && (typeof e == "function" ? e(r) : jn(r, e)) === n;
  });
}
var G3 = function(e, n) {
  return st(e) && st(n) ? e - n : ti(e) && ti(n) ? e.localeCompare(n) : e instanceof Date && n instanceof Date ? e.getTime() - n.getTime() : String(e).localeCompare(String(n));
};
function ru(t, e) {
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n]))
      return !1;
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
      return !1;
  return !0;
}
function Mg(t) {
  "@babel/helpers - typeof";
  return Mg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mg(t);
}
var Y3 = ["viewBox", "children"], X3 = [
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
], hA = ["points", "pathLength"], wp = {
  svg: Y3,
  polygon: hA,
  polyline: hA
}, r0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ef = function(e, n) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ at.isValidElement(e) && (r = e.props), !Ru(r))
    return null;
  var u = {};
  return Object.keys(r).forEach(function(l) {
    r0.includes(l) && (u[l] = n || function(c) {
      return r[l](r, c);
    });
  }), u;
}, K3 = function(e, n, r) {
  return function(u) {
    return e(n, r, u), null;
  };
}, Mf = function(e, n, r) {
  if (!Ru(e) || Mg(e) !== "object")
    return null;
  var u = null;
  return Object.keys(e).forEach(function(l) {
    var c = e[l];
    r0.includes(l) && typeof c == "function" && (u || (u = {}), u[l] = K3(c, n, r));
  }), u;
}, V3 = ["children"], F3 = ["children"];
function dA(t, e) {
  if (t == null) return {};
  var n = Z3(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Z3(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function jg(t) {
  "@babel/helpers - typeof";
  return jg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jg(t);
}
var vA = {
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
}, pA = null, Tp = null, a0 = function t(e) {
  if (e === pA && Array.isArray(Tp))
    return Tp;
  var n = [];
  return at.Children.forEach(e, function(r) {
    Mt(r) || (z3.isFragment(r) ? n = n.concat(t(r.props.children)) : n.push(r));
  }), Tp = n, pA = e, n;
};
function Cn(t, e) {
  var n = [], r = [];
  return Array.isArray(e) ? r = e.map(function(u) {
    return Cr(u);
  }) : r = [Cr(e)], a0(t).forEach(function(u) {
    var l = jn(u, "type.displayName") || jn(u, "type.name");
    r.indexOf(l) !== -1 && n.push(u);
  }), n;
}
function hn(t, e) {
  var n = Cn(t, e);
  return n && n[0];
}
var yA = function(e) {
  if (!e || !e.props)
    return !1;
  var n = e.props, r = n.width, u = n.height;
  return !(!st(r) || r <= 0 || !st(u) || u <= 0);
}, Q3 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], W3 = function(e) {
  return e && e.type && ti(e.type) && Q3.indexOf(e.type) >= 0;
}, fj = function(e) {
  return e && jg(e) === "object" && "clipDot" in e;
}, J3 = function(e, n, r, u) {
  var l, c = (l = wp == null ? void 0 : wp[u]) !== null && l !== void 0 ? l : [];
  return n.startsWith("data-") || !At(e) && (u && c.includes(n) || X3.includes(n)) || r && r0.includes(n);
}, Et = function(e, n, r) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var u = e;
  if (/* @__PURE__ */ at.isValidElement(e) && (u = e.props), !Ru(u))
    return null;
  var l = {};
  return Object.keys(u).forEach(function(c) {
    var s;
    J3((s = u) === null || s === void 0 ? void 0 : s[c], c, n, r) && (l[c] = u[c]);
  }), l;
}, Cg = function t(e, n) {
  if (e === n)
    return !0;
  var r = at.Children.count(e);
  if (r !== at.Children.count(n))
    return !1;
  if (r === 0)
    return !0;
  if (r === 1)
    return mA(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
  for (var u = 0; u < r; u++) {
    var l = e[u], c = n[u];
    if (Array.isArray(l) || Array.isArray(c)) {
      if (!t(l, c))
        return !1;
    } else if (!mA(l, c))
      return !1;
  }
  return !0;
}, mA = function(e, n) {
  if (Mt(e) && Mt(n))
    return !0;
  if (!Mt(e) && !Mt(n)) {
    var r = e.props || {}, u = r.children, l = dA(r, V3), c = n.props || {}, s = c.children, h = dA(c, F3);
    return u && s ? ru(l, h) && Cg(u, s) : !u && !s ? ru(l, h) : !1;
  }
  return !1;
}, gA = function(e, n) {
  var r = [], u = {};
  return a0(e).forEach(function(l, c) {
    if (W3(l))
      r.push(l);
    else if (l) {
      var s = Cr(l.type), h = n[s] || {}, d = h.handler, y = h.once;
      if (d && (!y || !u[s])) {
        var p = d(l, s, c);
        r.push(p), u[s] = !0;
      }
    }
  }), r;
}, tq = function(e) {
  var n = e && e.type;
  return n && vA[n] ? vA[n] : null;
}, eq = function(e, n) {
  return a0(n).indexOf(e);
}, nq = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Dg() {
  return Dg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Dg.apply(this, arguments);
}
function rq(t, e) {
  if (t == null) return {};
  var n = aq(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function aq(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Pg(t) {
  var e = t.children, n = t.width, r = t.height, u = t.viewBox, l = t.className, c = t.style, s = t.title, h = t.desc, d = rq(t, nq), y = u || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, p = qt("recharts-surface", l);
  return /* @__PURE__ */ B.createElement("svg", Dg({}, Et(d, !0, "svg"), {
    className: p,
    width: n,
    height: r,
    style: c,
    viewBox: "".concat(y.x, " ").concat(y.y, " ").concat(y.width, " ").concat(y.height)
  }), /* @__PURE__ */ B.createElement("title", null, s), /* @__PURE__ */ B.createElement("desc", null, h), e);
}
var iq = ["children", "className"];
function Ng() {
  return Ng = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ng.apply(this, arguments);
}
function uq(t, e) {
  if (t == null) return {};
  var n = oq(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function oq(t, e) {
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
  var n = t.children, r = t.className, u = uq(t, iq), l = qt("recharts-layer", r);
  return /* @__PURE__ */ B.createElement("g", Ng({
    className: l
  }, Et(u, !0), {
    ref: e
  }), n);
}), Dr = function(e, n) {
  for (var r = arguments.length, u = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++)
    u[l - 2] = arguments[l];
}, Ep, bA;
function lq() {
  if (bA) return Ep;
  bA = 1;
  function t(e, n, r) {
    var u = -1, l = e.length;
    n < 0 && (n = -n > l ? 0 : l + n), r = r > l ? l : r, r < 0 && (r += l), l = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var c = Array(l); ++u < l; )
      c[u] = e[u + n];
    return c;
  }
  return Ep = t, Ep;
}
var Mp, xA;
function cq() {
  if (xA) return Mp;
  xA = 1;
  var t = lq();
  function e(n, r, u) {
    var l = n.length;
    return u = u === void 0 ? l : u, !r && u >= l ? n : t(n, r, u);
  }
  return Mp = e, Mp;
}
var jp, SA;
function sj() {
  if (SA) return jp;
  SA = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", u = e + n + r, l = "\\ufe0e\\ufe0f", c = "\\u200d", s = RegExp("[" + c + t + u + l + "]");
  function h(d) {
    return s.test(d);
  }
  return jp = h, jp;
}
var Cp, _A;
function fq() {
  if (_A) return Cp;
  _A = 1;
  function t(e) {
    return e.split("");
  }
  return Cp = t, Cp;
}
var Dp, OA;
function sq() {
  if (OA) return Dp;
  OA = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", u = e + n + r, l = "\\ufe0e\\ufe0f", c = "[" + t + "]", s = "[" + u + "]", h = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + s + "|" + h + ")", y = "[^" + t + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", x = "\\u200d", O = d + "?", S = "[" + l + "]?", b = "(?:" + x + "(?:" + [y, p, g].join("|") + ")" + S + O + ")*", A = S + O + b, T = "(?:" + [y + s + "?", s, p, g, c].join("|") + ")", M = RegExp(h + "(?=" + h + ")|" + T + A, "g");
  function C(w) {
    return w.match(M) || [];
  }
  return Dp = C, Dp;
}
var Pp, AA;
function hq() {
  if (AA) return Pp;
  AA = 1;
  var t = fq(), e = sj(), n = sq();
  function r(u) {
    return e(u) ? n(u) : t(u);
  }
  return Pp = r, Pp;
}
var Np, wA;
function dq() {
  if (wA) return Np;
  wA = 1;
  var t = cq(), e = sj(), n = hq(), r = uj();
  function u(l) {
    return function(c) {
      c = r(c);
      var s = e(c) ? n(c) : void 0, h = s ? s[0] : c.charAt(0), d = s ? t(s, 1).join("") : c.slice(1);
      return h[l]() + d;
    };
  }
  return Np = u, Np;
}
var Rp, TA;
function vq() {
  if (TA) return Rp;
  TA = 1;
  var t = dq(), e = t("toUpperCase");
  return Rp = e, Rp;
}
var pq = vq();
const Ds = /* @__PURE__ */ Qt(pq);
function Wt(t) {
  return function() {
    return t;
  };
}
const hj = Math.cos, jf = Math.sin, In = Math.sqrt, Cf = Math.PI, Ps = 2 * Cf, Rg = Math.PI, qg = 2 * Rg, Ia = 1e-6, yq = qg - Ia;
function dj(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function mq(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return dj;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let u = 1, l = r.length; u < l; ++u)
      this._ += Math.round(arguments[u] * n) / n + r[u];
  };
}
class gq {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? dj : mq(e);
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
  quadraticCurveTo(e, n, r, u) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +u}`;
  }
  bezierCurveTo(e, n, r, u, l, c) {
    this._append`C${+e},${+n},${+r},${+u},${this._x1 = +l},${this._y1 = +c}`;
  }
  arcTo(e, n, r, u, l) {
    if (e = +e, n = +n, r = +r, u = +u, l = +l, l < 0) throw new Error(`negative radius: ${l}`);
    let c = this._x1, s = this._y1, h = r - e, d = u - n, y = c - e, p = s - n, g = y * y + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (g > Ia) if (!(Math.abs(p * h - d * y) > Ia) || !l)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let x = r - c, O = u - s, S = h * h + d * d, b = x * x + O * O, A = Math.sqrt(S), T = Math.sqrt(g), M = l * Math.tan((Rg - Math.acos((S + g - b) / (2 * A * T))) / 2), C = M / T, w = M / A;
      Math.abs(C - 1) > Ia && this._append`L${e + C * y},${n + C * p}`, this._append`A${l},${l},0,0,${+(p * x > y * O)},${this._x1 = e + w * h},${this._y1 = n + w * d}`;
    }
  }
  arc(e, n, r, u, l, c) {
    if (e = +e, n = +n, r = +r, c = !!c, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(u), h = r * Math.sin(u), d = e + s, y = n + h, p = 1 ^ c, g = c ? u - l : l - u;
    this._x1 === null ? this._append`M${d},${y}` : (Math.abs(this._x1 - d) > Ia || Math.abs(this._y1 - y) > Ia) && this._append`L${d},${y}`, r && (g < 0 && (g = g % qg + qg), g > yq ? this._append`A${r},${r},0,1,${p},${e - s},${n - h}A${r},${r},0,1,${p},${this._x1 = d},${this._y1 = y}` : g > Ia && this._append`A${r},${r},0,${+(g >= Rg)},${p},${this._x1 = e + r * Math.cos(l)},${this._y1 = n + r * Math.sin(l)}`);
  }
  rect(e, n, r, u) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+u}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function i0(t) {
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
  }, () => new gq(e);
}
function u0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vj(t) {
  this._context = t;
}
vj.prototype = {
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
function Ns(t) {
  return new vj(t);
}
function pj(t) {
  return t[0];
}
function yj(t) {
  return t[1];
}
function mj(t, e) {
  var n = Wt(!0), r = null, u = Ns, l = null, c = i0(s);
  t = typeof t == "function" ? t : t === void 0 ? pj : Wt(t), e = typeof e == "function" ? e : e === void 0 ? yj : Wt(e);
  function s(h) {
    var d, y = (h = u0(h)).length, p, g = !1, x;
    for (r == null && (l = u(x = c())), d = 0; d <= y; ++d)
      !(d < y && n(p = h[d], d, h)) === g && ((g = !g) ? l.lineStart() : l.lineEnd()), g && l.point(+t(p, d, h), +e(p, d, h));
    if (x) return l = null, x + "" || null;
  }
  return s.x = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Wt(+h), s) : t;
  }, s.y = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Wt(+h), s) : e;
  }, s.defined = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Wt(!!h), s) : n;
  }, s.curve = function(h) {
    return arguments.length ? (u = h, r != null && (l = u(r)), s) : u;
  }, s.context = function(h) {
    return arguments.length ? (h == null ? r = l = null : l = u(r = h), s) : r;
  }, s;
}
function ff(t, e, n) {
  var r = null, u = Wt(!0), l = null, c = Ns, s = null, h = i0(d);
  t = typeof t == "function" ? t : t === void 0 ? pj : Wt(+t), e = typeof e == "function" ? e : Wt(e === void 0 ? 0 : +e), n = typeof n == "function" ? n : n === void 0 ? yj : Wt(+n);
  function d(p) {
    var g, x, O, S = (p = u0(p)).length, b, A = !1, T, M = new Array(S), C = new Array(S);
    for (l == null && (s = c(T = h())), g = 0; g <= S; ++g) {
      if (!(g < S && u(b = p[g], g, p)) === A)
        if (A = !A)
          x = g, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), O = g - 1; O >= x; --O)
            s.point(M[O], C[O]);
          s.lineEnd(), s.areaEnd();
        }
      A && (M[g] = +t(b, g, p), C[g] = +e(b, g, p), s.point(r ? +r(b, g, p) : M[g], n ? +n(b, g, p) : C[g]));
    }
    if (T) return s = null, T + "" || null;
  }
  function y() {
    return mj().defined(u).curve(c).context(l);
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
    return arguments.length ? (u = typeof p == "function" ? p : Wt(!!p), d) : u;
  }, d.curve = function(p) {
    return arguments.length ? (c = p, l != null && (s = c(l)), d) : c;
  }, d.context = function(p) {
    return arguments.length ? (p == null ? l = s = null : s = c(l = p), d) : l;
  }, d;
}
class gj {
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
function bq(t) {
  return new gj(t, !0);
}
function xq(t) {
  return new gj(t, !1);
}
const o0 = {
  draw(t, e) {
    const n = In(e / Cf);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, Ps);
  }
}, Sq = {
  draw(t, e) {
    const n = In(e / 5) / 2;
    t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath();
  }
}, bj = In(1 / 3), _q = bj * 2, Oq = {
  draw(t, e) {
    const n = In(e / _q), r = n * bj;
    t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath();
  }
}, Aq = {
  draw(t, e) {
    const n = In(e), r = -n / 2;
    t.rect(r, r, n, n);
  }
}, wq = 0.8908130915292852, xj = jf(Cf / 10) / jf(7 * Cf / 10), Tq = jf(Ps / 10) * xj, Eq = -hj(Ps / 10) * xj, Mq = {
  draw(t, e) {
    const n = In(e * wq), r = Tq * n, u = Eq * n;
    t.moveTo(0, -n), t.lineTo(r, u);
    for (let l = 1; l < 5; ++l) {
      const c = Ps * l / 5, s = hj(c), h = jf(c);
      t.lineTo(h * n, -s * n), t.lineTo(s * r - h * u, h * r + s * u);
    }
    t.closePath();
  }
}, qp = In(3), jq = {
  draw(t, e) {
    const n = -In(e / (qp * 3));
    t.moveTo(0, n * 2), t.lineTo(-qp * n, -n), t.lineTo(qp * n, -n), t.closePath();
  }
}, wn = -0.5, Tn = In(3) / 2, zg = 1 / In(12), Cq = (zg / 2 + 1) * 3, Dq = {
  draw(t, e) {
    const n = In(e / Cq), r = n / 2, u = n * zg, l = r, c = n * zg + n, s = -l, h = c;
    t.moveTo(r, u), t.lineTo(l, c), t.lineTo(s, h), t.lineTo(wn * r - Tn * u, Tn * r + wn * u), t.lineTo(wn * l - Tn * c, Tn * l + wn * c), t.lineTo(wn * s - Tn * h, Tn * s + wn * h), t.lineTo(wn * r + Tn * u, wn * u - Tn * r), t.lineTo(wn * l + Tn * c, wn * c - Tn * l), t.lineTo(wn * s + Tn * h, wn * h - Tn * s), t.closePath();
  }
};
function Pq(t, e) {
  let n = null, r = i0(u);
  t = typeof t == "function" ? t : Wt(t || o0), e = typeof e == "function" ? e : Wt(e === void 0 ? 64 : +e);
  function u() {
    let l;
    if (n || (n = l = r()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), l) return n = null, l + "" || null;
  }
  return u.type = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(l), u) : t;
  }, u.size = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Wt(+l), u) : e;
  }, u.context = function(l) {
    return arguments.length ? (n = l ?? null, u) : n;
  }, u;
}
function Df() {
}
function Pf(t, e, n) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + n) / 6
  );
}
function Sj(t) {
  this._context = t;
}
Sj.prototype = {
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
        Pf(this, this._x1, this._y1);
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
        Pf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Nq(t) {
  return new Sj(t);
}
function _j(t) {
  this._context = t;
}
_j.prototype = {
  areaStart: Df,
  areaEnd: Df,
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
        Pf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Rq(t) {
  return new _j(t);
}
function Oj(t) {
  this._context = t;
}
Oj.prototype = {
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
        Pf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function qq(t) {
  return new Oj(t);
}
function Aj(t) {
  this._context = t;
}
Aj.prototype = {
  areaStart: Df,
  areaEnd: Df,
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
function zq(t) {
  return new Aj(t);
}
function EA(t) {
  return t < 0 ? -1 : 1;
}
function MA(t, e, n) {
  var r = t._x1 - t._x0, u = e - t._x1, l = (t._y1 - t._y0) / (r || u < 0 && -0), c = (n - t._y1) / (u || r < 0 && -0), s = (l * u + c * r) / (r + u);
  return (EA(l) + EA(c)) * Math.min(Math.abs(l), Math.abs(c), 0.5 * Math.abs(s)) || 0;
}
function jA(t, e) {
  var n = t._x1 - t._x0;
  return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
}
function zp(t, e, n) {
  var r = t._x0, u = t._y0, l = t._x1, c = t._y1, s = (l - r) / 3;
  t._context.bezierCurveTo(r + s, u + s * e, l - s, c - s * n, l, c);
}
function Nf(t) {
  this._context = t;
}
Nf.prototype = {
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
        zp(this, this._t0, jA(this, this._t0));
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
          this._point = 3, zp(this, jA(this, n = MA(this, t, e)), n);
          break;
        default:
          zp(this, this._t0, n = MA(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
    }
  }
};
function wj(t) {
  this._context = new Tj(t);
}
(wj.prototype = Object.create(Nf.prototype)).point = function(t, e) {
  Nf.prototype.point.call(this, e, t);
};
function Tj(t) {
  this._context = t;
}
Tj.prototype = {
  moveTo: function(t, e) {
    this._context.moveTo(e, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, e) {
    this._context.lineTo(e, t);
  },
  bezierCurveTo: function(t, e, n, r, u, l) {
    this._context.bezierCurveTo(e, t, r, n, l, u);
  }
};
function $q(t) {
  return new Nf(t);
}
function Bq(t) {
  return new wj(t);
}
function Ej(t) {
  this._context = t;
}
Ej.prototype = {
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
        for (var r = CA(t), u = CA(e), l = 0, c = 1; c < n; ++l, ++c)
          this._context.bezierCurveTo(r[0][l], u[0][l], r[1][l], u[1][l], t[c], e[c]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function CA(t) {
  var e, n = t.length - 1, r, u = new Array(n), l = new Array(n), c = new Array(n);
  for (u[0] = 0, l[0] = 2, c[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) u[e] = 1, l[e] = 4, c[e] = 4 * t[e] + 2 * t[e + 1];
  for (u[n - 1] = 2, l[n - 1] = 7, c[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = u[e] / l[e - 1], l[e] -= r, c[e] -= r * c[e - 1];
  for (u[n - 1] = c[n - 1] / l[n - 1], e = n - 2; e >= 0; --e) u[e] = (c[e] - u[e + 1]) / l[e];
  for (l[n - 1] = (t[n] + u[n - 1]) / 2, e = 0; e < n - 1; ++e) l[e] = 2 * t[e + 1] - u[e + 1];
  return [u, l];
}
function Lq(t) {
  return new Ej(t);
}
function Rs(t, e) {
  this._context = t, this._t = e;
}
Rs.prototype = {
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
function kq(t) {
  return new Rs(t, 0.5);
}
function Uq(t) {
  return new Rs(t, 0);
}
function Hq(t) {
  return new Rs(t, 1);
}
function cu(t, e) {
  if ((c = t.length) > 1)
    for (var n = 1, r, u, l = t[e[0]], c, s = l.length; n < c; ++n)
      for (u = l, l = t[e[n]], r = 0; r < s; ++r)
        l[r][1] += l[r][0] = isNaN(u[r][1]) ? u[r][0] : u[r][1];
}
function $g(t) {
  for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
  return n;
}
function Iq(t, e) {
  return t[e];
}
function Gq(t) {
  const e = [];
  return e.key = t, e;
}
function Yq() {
  var t = Wt([]), e = $g, n = cu, r = Iq;
  function u(l) {
    var c = Array.from(t.apply(this, arguments), Gq), s, h = c.length, d = -1, y;
    for (const p of l)
      for (s = 0, ++d; s < h; ++s)
        (c[s][d] = [0, +r(p, c[s].key, d, l)]).data = p;
    for (s = 0, y = u0(e(c)); s < h; ++s)
      c[y[s]].index = s;
    return n(c, y), c;
  }
  return u.keys = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(Array.from(l)), u) : t;
  }, u.value = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Wt(+l), u) : r;
  }, u.order = function(l) {
    return arguments.length ? (e = l == null ? $g : typeof l == "function" ? l : Wt(Array.from(l)), u) : e;
  }, u.offset = function(l) {
    return arguments.length ? (n = l ?? cu, u) : n;
  }, u;
}
function Xq(t, e) {
  if ((r = t.length) > 0) {
    for (var n, r, u = 0, l = t[0].length, c; u < l; ++u) {
      for (c = n = 0; n < r; ++n) c += t[n][u][1] || 0;
      if (c) for (n = 0; n < r; ++n) t[n][u][1] /= c;
    }
    cu(t, e);
  }
}
function Kq(t, e) {
  if ((u = t.length) > 0) {
    for (var n = 0, r = t[e[0]], u, l = r.length; n < l; ++n) {
      for (var c = 0, s = 0; c < u; ++c) s += t[c][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    cu(t, e);
  }
}
function Vq(t, e) {
  if (!(!((c = t.length) > 0) || !((l = (u = t[e[0]]).length) > 0))) {
    for (var n = 0, r = 1, u, l, c; r < l; ++r) {
      for (var s = 0, h = 0, d = 0; s < c; ++s) {
        for (var y = t[e[s]], p = y[r][1] || 0, g = y[r - 1][1] || 0, x = (p - g) / 2, O = 0; O < s; ++O) {
          var S = t[e[O]], b = S[r][1] || 0, A = S[r - 1][1] || 0;
          x += b - A;
        }
        h += p, d += x * p;
      }
      u[r - 1][1] += u[r - 1][0] = n, h && (n -= d / h);
    }
    u[r - 1][1] += u[r - 1][0] = n, cu(t, e);
  }
}
function nl(t) {
  "@babel/helpers - typeof";
  return nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, nl(t);
}
var Fq = ["type", "size", "sizeType"];
function Bg() {
  return Bg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Bg.apply(this, arguments);
}
function DA(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function PA(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? DA(Object(n), !0).forEach(function(r) {
      Zq(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : DA(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Zq(t, e, n) {
  return e = Qq(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Qq(t) {
  var e = Wq(t, "string");
  return nl(e) == "symbol" ? e : e + "";
}
function Wq(t, e) {
  if (nl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (nl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Jq(t, e) {
  if (t == null) return {};
  var n = tz(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function tz(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Mj = {
  symbolCircle: o0,
  symbolCross: Sq,
  symbolDiamond: Oq,
  symbolSquare: Aq,
  symbolStar: Mq,
  symbolTriangle: jq,
  symbolWye: Dq
}, ez = Math.PI / 180, nz = function(e) {
  var n = "symbol".concat(Ds(e));
  return Mj[n] || o0;
}, rz = function(e, n, r) {
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
      var u = 18 * ez;
      return 1.25 * e * e * (Math.tan(u) - Math.tan(u * 2) * Math.pow(Math.tan(u), 2));
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, az = function(e, n) {
  Mj["symbol".concat(Ds(e))] = n;
}, l0 = function(e) {
  var n = e.type, r = n === void 0 ? "circle" : n, u = e.size, l = u === void 0 ? 64 : u, c = e.sizeType, s = c === void 0 ? "area" : c, h = Jq(e, Fq), d = PA(PA({}, h), {}, {
    type: r,
    size: l,
    sizeType: s
  }), y = function() {
    var b = nz(r), A = Pq().type(b).size(rz(l, s, r));
    return A();
  }, p = d.className, g = d.cx, x = d.cy, O = Et(d, !0);
  return g === +g && x === +x && l === +l ? /* @__PURE__ */ B.createElement("path", Bg({}, O, {
    className: qt("recharts-symbols", p),
    transform: "translate(".concat(g, ", ").concat(x, ")"),
    d: y()
  })) : null;
};
l0.registerSymbol = az;
function fu(t) {
  "@babel/helpers - typeof";
  return fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fu(t);
}
function Lg() {
  return Lg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Lg.apply(this, arguments);
}
function NA(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function iz(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? NA(Object(n), !0).forEach(function(r) {
      rl(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : NA(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function uz(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function oz(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Cj(r.key), r);
  }
}
function lz(t, e, n) {
  return e && oz(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function cz(t, e, n) {
  return e = Rf(e), fz(t, jj() ? Reflect.construct(e, n || [], Rf(t).constructor) : e.apply(t, n));
}
function fz(t, e) {
  if (e && (fu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sz(t);
}
function sz(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function jj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jj = function() {
    return !!t;
  })();
}
function Rf(t) {
  return Rf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rf(t);
}
function hz(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && kg(t, e);
}
function kg(t, e) {
  return kg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, kg(t, e);
}
function rl(t, e, n) {
  return e = Cj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Cj(t) {
  var e = dz(t, "string");
  return fu(e) == "symbol" ? e : e + "";
}
function dz(t, e) {
  if (fu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (fu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var En = 32, c0 = /* @__PURE__ */ (function(t) {
  function e() {
    return uz(this, e), cz(this, e, arguments);
  }
  return hz(e, t), lz(e, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var u = this.props.inactiveColor, l = En / 2, c = En / 6, s = En / 3, h = r.inactive ? u : r.color;
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
          var d = iz({}, r);
          return delete d.legendIcon, /* @__PURE__ */ B.cloneElement(r.legendIcon, d);
        }
        return /* @__PURE__ */ B.createElement(l0, {
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
      var r = this, u = this.props, l = u.payload, c = u.iconSize, s = u.layout, h = u.formatter, d = u.inactiveColor, y = {
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
      return l.map(function(x, O) {
        var S = x.formatter || h, b = qt(rl(rl({
          "recharts-legend-item": !0
        }, "legend-item-".concat(O), !0), "inactive", x.inactive));
        if (x.type === "none")
          return null;
        var A = At(x.value) ? null : x.value;
        Dr(
          !At(x.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var T = x.inactive ? d : x.color;
        return /* @__PURE__ */ B.createElement("li", Lg({
          className: b,
          style: p,
          key: "legend-item-".concat(O)
        }, Mf(r.props, x, O)), /* @__PURE__ */ B.createElement(Pg, {
          width: c,
          height: c,
          viewBox: y,
          style: g
        }, r.renderIcon(x)), /* @__PURE__ */ B.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: T
          }
        }, S ? S(A, x, O) : A));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, u = r.payload, l = r.layout, c = r.align;
      if (!u || !u.length)
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
})(at.PureComponent);
rl(c0, "displayName", "Legend");
rl(c0, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var $p, RA;
function vz() {
  if (RA) return $p;
  RA = 1;
  var t = Ms();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return $p = e, $p;
}
var Bp, qA;
function pz() {
  if (qA) return Bp;
  qA = 1;
  function t(e) {
    var n = this.__data__, r = n.delete(e);
    return this.size = n.size, r;
  }
  return Bp = t, Bp;
}
var Lp, zA;
function yz() {
  if (zA) return Lp;
  zA = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return Lp = t, Lp;
}
var kp, $A;
function mz() {
  if ($A) return kp;
  $A = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return kp = t, kp;
}
var Up, BA;
function gz() {
  if (BA) return Up;
  BA = 1;
  var t = Ms(), e = Jb(), n = t0(), r = 200;
  function u(l, c) {
    var s = this.__data__;
    if (s instanceof t) {
      var h = s.__data__;
      if (!e || h.length < r - 1)
        return h.push([l, c]), this.size = ++s.size, this;
      s = this.__data__ = new n(h);
    }
    return s.set(l, c), this.size = s.size, this;
  }
  return Up = u, Up;
}
var Hp, LA;
function Dj() {
  if (LA) return Hp;
  LA = 1;
  var t = Ms(), e = vz(), n = pz(), r = yz(), u = mz(), l = gz();
  function c(s) {
    var h = this.__data__ = new t(s);
    this.size = h.size;
  }
  return c.prototype.clear = e, c.prototype.delete = n, c.prototype.get = r, c.prototype.has = u, c.prototype.set = l, Hp = c, Hp;
}
var Ip, kA;
function bz() {
  if (kA) return Ip;
  kA = 1;
  var t = "__lodash_hash_undefined__";
  function e(n) {
    return this.__data__.set(n, t), this;
  }
  return Ip = e, Ip;
}
var Gp, UA;
function xz() {
  if (UA) return Gp;
  UA = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Gp = t, Gp;
}
var Yp, HA;
function Pj() {
  if (HA) return Yp;
  HA = 1;
  var t = t0(), e = bz(), n = xz();
  function r(u) {
    var l = -1, c = u == null ? 0 : u.length;
    for (this.__data__ = new t(); ++l < c; )
      this.add(u[l]);
  }
  return r.prototype.add = r.prototype.push = e, r.prototype.has = n, Yp = r, Yp;
}
var Xp, IA;
function Nj() {
  if (IA) return Xp;
  IA = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length; ++r < u; )
      if (n(e[r], r, e))
        return !0;
    return !1;
  }
  return Xp = t, Xp;
}
var Kp, GA;
function Rj() {
  if (GA) return Kp;
  GA = 1;
  function t(e, n) {
    return e.has(n);
  }
  return Kp = t, Kp;
}
var Vp, YA;
function qj() {
  if (YA) return Vp;
  YA = 1;
  var t = Pj(), e = Nj(), n = Rj(), r = 1, u = 2;
  function l(c, s, h, d, y, p) {
    var g = h & r, x = c.length, O = s.length;
    if (x != O && !(g && O > x))
      return !1;
    var S = p.get(c), b = p.get(s);
    if (S && b)
      return S == s && b == c;
    var A = -1, T = !0, M = h & u ? new t() : void 0;
    for (p.set(c, s), p.set(s, c); ++A < x; ) {
      var C = c[A], w = s[A];
      if (d)
        var E = g ? d(w, C, A, s, c, p) : d(C, w, A, c, s, p);
      if (E !== void 0) {
        if (E)
          continue;
        T = !1;
        break;
      }
      if (M) {
        if (!e(s, function(D, R) {
          if (!n(M, R) && (C === D || y(C, D, h, d, p)))
            return M.push(R);
        })) {
          T = !1;
          break;
        }
      } else if (!(C === w || y(C, w, h, d, p))) {
        T = !1;
        break;
      }
    }
    return p.delete(c), p.delete(s), T;
  }
  return Vp = l, Vp;
}
var Fp, XA;
function Sz() {
  if (XA) return Fp;
  XA = 1;
  var t = rr(), e = t.Uint8Array;
  return Fp = e, Fp;
}
var Zp, KA;
function _z() {
  if (KA) return Zp;
  KA = 1;
  function t(e) {
    var n = -1, r = Array(e.size);
    return e.forEach(function(u, l) {
      r[++n] = [l, u];
    }), r;
  }
  return Zp = t, Zp;
}
var Qp, VA;
function f0() {
  if (VA) return Qp;
  VA = 1;
  function t(e) {
    var n = -1, r = Array(e.size);
    return e.forEach(function(u) {
      r[++n] = u;
    }), r;
  }
  return Qp = t, Qp;
}
var Wp, FA;
function Oz() {
  if (FA) return Wp;
  FA = 1;
  var t = $l(), e = Sz(), n = Wb(), r = qj(), u = _z(), l = f0(), c = 1, s = 2, h = "[object Boolean]", d = "[object Date]", y = "[object Error]", p = "[object Map]", g = "[object Number]", x = "[object RegExp]", O = "[object Set]", S = "[object String]", b = "[object Symbol]", A = "[object ArrayBuffer]", T = "[object DataView]", M = t ? t.prototype : void 0, C = M ? M.valueOf : void 0;
  function w(E, D, R, z, F, k, $) {
    switch (R) {
      case T:
        if (E.byteLength != D.byteLength || E.byteOffset != D.byteOffset)
          return !1;
        E = E.buffer, D = D.buffer;
      case A:
        return !(E.byteLength != D.byteLength || !k(new e(E), new e(D)));
      case h:
      case d:
      case g:
        return n(+E, +D);
      case y:
        return E.name == D.name && E.message == D.message;
      case x:
      case S:
        return E == D + "";
      case p:
        var K = u;
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
      case b:
        if (C)
          return C.call(E) == C.call(D);
    }
    return !1;
  }
  return Wp = w, Wp;
}
var Jp, ZA;
function zj() {
  if (ZA) return Jp;
  ZA = 1;
  function t(e, n) {
    for (var r = -1, u = n.length, l = e.length; ++r < u; )
      e[l + r] = n[r];
    return e;
  }
  return Jp = t, Jp;
}
var ty, QA;
function Az() {
  if (QA) return ty;
  QA = 1;
  var t = zj(), e = Je();
  function n(r, u, l) {
    var c = u(r);
    return e(r) ? c : t(c, l(r));
  }
  return ty = n, ty;
}
var ey, WA;
function wz() {
  if (WA) return ey;
  WA = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length, l = 0, c = []; ++r < u; ) {
      var s = e[r];
      n(s, r, e) && (c[l++] = s);
    }
    return c;
  }
  return ey = t, ey;
}
var ny, JA;
function Tz() {
  if (JA) return ny;
  JA = 1;
  function t() {
    return [];
  }
  return ny = t, ny;
}
var ry, tw;
function Ez() {
  if (tw) return ry;
  tw = 1;
  var t = wz(), e = Tz(), n = Object.prototype, r = n.propertyIsEnumerable, u = Object.getOwnPropertySymbols, l = u ? function(c) {
    return c == null ? [] : (c = Object(c), t(u(c), function(s) {
      return r.call(c, s);
    }));
  } : e;
  return ry = l, ry;
}
var ay, ew;
function Mz() {
  if (ew) return ay;
  ew = 1;
  function t(e, n) {
    for (var r = -1, u = Array(e); ++r < e; )
      u[r] = n(r);
    return u;
  }
  return ay = t, ay;
}
var iy, nw;
function jz() {
  if (nw) return iy;
  nw = 1;
  var t = $r(), e = Br(), n = "[object Arguments]";
  function r(u) {
    return e(u) && t(u) == n;
  }
  return iy = r, iy;
}
var uy, rw;
function s0() {
  if (rw) return uy;
  rw = 1;
  var t = jz(), e = Br(), n = Object.prototype, r = n.hasOwnProperty, u = n.propertyIsEnumerable, l = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(c) {
    return e(c) && r.call(c, "callee") && !u.call(c, "callee");
  };
  return uy = l, uy;
}
var Ko = { exports: {} }, oy, aw;
function Cz() {
  if (aw) return oy;
  aw = 1;
  function t() {
    return !1;
  }
  return oy = t, oy;
}
Ko.exports;
var iw;
function $j() {
  return iw || (iw = 1, (function(t, e) {
    var n = rr(), r = Cz(), u = e && !e.nodeType && e, l = u && !0 && t && !t.nodeType && t, c = l && l.exports === u, s = c ? n.Buffer : void 0, h = s ? s.isBuffer : void 0, d = h || r;
    t.exports = d;
  })(Ko, Ko.exports)), Ko.exports;
}
var ly, uw;
function h0() {
  if (uw) return ly;
  uw = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function n(r, u) {
    var l = typeof r;
    return u = u ?? t, !!u && (l == "number" || l != "symbol" && e.test(r)) && r > -1 && r % 1 == 0 && r < u;
  }
  return ly = n, ly;
}
var cy, ow;
function d0() {
  if (ow) return cy;
  ow = 1;
  var t = 9007199254740991;
  function e(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= t;
  }
  return cy = e, cy;
}
var fy, lw;
function Dz() {
  if (lw) return fy;
  lw = 1;
  var t = $r(), e = d0(), n = Br(), r = "[object Arguments]", u = "[object Array]", l = "[object Boolean]", c = "[object Date]", s = "[object Error]", h = "[object Function]", d = "[object Map]", y = "[object Number]", p = "[object Object]", g = "[object RegExp]", x = "[object Set]", O = "[object String]", S = "[object WeakMap]", b = "[object ArrayBuffer]", A = "[object DataView]", T = "[object Float32Array]", M = "[object Float64Array]", C = "[object Int8Array]", w = "[object Int16Array]", E = "[object Int32Array]", D = "[object Uint8Array]", R = "[object Uint8ClampedArray]", z = "[object Uint16Array]", F = "[object Uint32Array]", k = {};
  k[T] = k[M] = k[C] = k[w] = k[E] = k[D] = k[R] = k[z] = k[F] = !0, k[r] = k[u] = k[b] = k[l] = k[A] = k[c] = k[s] = k[h] = k[d] = k[y] = k[p] = k[g] = k[x] = k[O] = k[S] = !1;
  function $(K) {
    return n(K) && e(K.length) && !!k[t(K)];
  }
  return fy = $, fy;
}
var sy, cw;
function Bj() {
  if (cw) return sy;
  cw = 1;
  function t(e) {
    return function(n) {
      return e(n);
    };
  }
  return sy = t, sy;
}
var Vo = { exports: {} };
Vo.exports;
var fw;
function Pz() {
  return fw || (fw = 1, (function(t, e) {
    var n = rj(), r = e && !e.nodeType && e, u = r && !0 && t && !t.nodeType && t, l = u && u.exports === r, c = l && n.process, s = (function() {
      try {
        var h = u && u.require && u.require("util").types;
        return h || c && c.binding && c.binding("util");
      } catch {
      }
    })();
    t.exports = s;
  })(Vo, Vo.exports)), Vo.exports;
}
var hy, sw;
function Lj() {
  if (sw) return hy;
  sw = 1;
  var t = Dz(), e = Bj(), n = Pz(), r = n && n.isTypedArray, u = r ? e(r) : t;
  return hy = u, hy;
}
var dy, hw;
function Nz() {
  if (hw) return dy;
  hw = 1;
  var t = Mz(), e = s0(), n = Je(), r = $j(), u = h0(), l = Lj(), c = Object.prototype, s = c.hasOwnProperty;
  function h(d, y) {
    var p = n(d), g = !p && e(d), x = !p && !g && r(d), O = !p && !g && !x && l(d), S = p || g || x || O, b = S ? t(d.length, String) : [], A = b.length;
    for (var T in d)
      (y || s.call(d, T)) && !(S && // Safari 9 has enumerable `arguments.length` in strict mode.
      (T == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      x && (T == "offset" || T == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      O && (T == "buffer" || T == "byteLength" || T == "byteOffset") || // Skip index properties.
      u(T, A))) && b.push(T);
    return b;
  }
  return dy = h, dy;
}
var vy, dw;
function Rz() {
  if (dw) return vy;
  dw = 1;
  var t = Object.prototype;
  function e(n) {
    var r = n && n.constructor, u = typeof r == "function" && r.prototype || t;
    return n === u;
  }
  return vy = e, vy;
}
var py, vw;
function kj() {
  if (vw) return py;
  vw = 1;
  function t(e, n) {
    return function(r) {
      return e(n(r));
    };
  }
  return py = t, py;
}
var yy, pw;
function qz() {
  if (pw) return yy;
  pw = 1;
  var t = kj(), e = t(Object.keys, Object);
  return yy = e, yy;
}
var my, yw;
function zz() {
  if (yw) return my;
  yw = 1;
  var t = Rz(), e = qz(), n = Object.prototype, r = n.hasOwnProperty;
  function u(l) {
    if (!t(l))
      return e(l);
    var c = [];
    for (var s in Object(l))
      r.call(l, s) && s != "constructor" && c.push(s);
    return c;
  }
  return my = u, my;
}
var gy, mw;
function Bl() {
  if (mw) return gy;
  mw = 1;
  var t = Qb(), e = d0();
  function n(r) {
    return r != null && e(r.length) && !t(r);
  }
  return gy = n, gy;
}
var by, gw;
function qs() {
  if (gw) return by;
  gw = 1;
  var t = Nz(), e = zz(), n = Bl();
  function r(u) {
    return n(u) ? t(u) : e(u);
  }
  return by = r, by;
}
var xy, bw;
function $z() {
  if (bw) return xy;
  bw = 1;
  var t = Az(), e = Ez(), n = qs();
  function r(u) {
    return t(u, n, e);
  }
  return xy = r, xy;
}
var Sy, xw;
function Bz() {
  if (xw) return Sy;
  xw = 1;
  var t = $z(), e = 1, n = Object.prototype, r = n.hasOwnProperty;
  function u(l, c, s, h, d, y) {
    var p = s & e, g = t(l), x = g.length, O = t(c), S = O.length;
    if (x != S && !p)
      return !1;
    for (var b = x; b--; ) {
      var A = g[b];
      if (!(p ? A in c : r.call(c, A)))
        return !1;
    }
    var T = y.get(l), M = y.get(c);
    if (T && M)
      return T == c && M == l;
    var C = !0;
    y.set(l, c), y.set(c, l);
    for (var w = p; ++b < x; ) {
      A = g[b];
      var E = l[A], D = c[A];
      if (h)
        var R = p ? h(D, E, A, c, l, y) : h(E, D, A, l, c, y);
      if (!(R === void 0 ? E === D || d(E, D, s, h, y) : R)) {
        C = !1;
        break;
      }
      w || (w = A == "constructor");
    }
    if (C && !w) {
      var z = l.constructor, F = c.constructor;
      z != F && "constructor" in l && "constructor" in c && !(typeof z == "function" && z instanceof z && typeof F == "function" && F instanceof F) && (C = !1);
    }
    return y.delete(l), y.delete(c), C;
  }
  return Sy = u, Sy;
}
var _y, Sw;
function Lz() {
  if (Sw) return _y;
  Sw = 1;
  var t = ii(), e = rr(), n = t(e, "DataView");
  return _y = n, _y;
}
var Oy, _w;
function kz() {
  if (_w) return Oy;
  _w = 1;
  var t = ii(), e = rr(), n = t(e, "Promise");
  return Oy = n, Oy;
}
var Ay, Ow;
function Uj() {
  if (Ow) return Ay;
  Ow = 1;
  var t = ii(), e = rr(), n = t(e, "Set");
  return Ay = n, Ay;
}
var wy, Aw;
function Uz() {
  if (Aw) return wy;
  Aw = 1;
  var t = ii(), e = rr(), n = t(e, "WeakMap");
  return wy = n, wy;
}
var Ty, ww;
function Hz() {
  if (ww) return Ty;
  ww = 1;
  var t = Lz(), e = Jb(), n = kz(), r = Uj(), u = Uz(), l = $r(), c = aj(), s = "[object Map]", h = "[object Object]", d = "[object Promise]", y = "[object Set]", p = "[object WeakMap]", g = "[object DataView]", x = c(t), O = c(e), S = c(n), b = c(r), A = c(u), T = l;
  return (t && T(new t(new ArrayBuffer(1))) != g || e && T(new e()) != s || n && T(n.resolve()) != d || r && T(new r()) != y || u && T(new u()) != p) && (T = function(M) {
    var C = l(M), w = C == h ? M.constructor : void 0, E = w ? c(w) : "";
    if (E)
      switch (E) {
        case x:
          return g;
        case O:
          return s;
        case S:
          return d;
        case b:
          return y;
        case A:
          return p;
      }
    return C;
  }), Ty = T, Ty;
}
var Ey, Tw;
function Iz() {
  if (Tw) return Ey;
  Tw = 1;
  var t = Dj(), e = qj(), n = Oz(), r = Bz(), u = Hz(), l = Je(), c = $j(), s = Lj(), h = 1, d = "[object Arguments]", y = "[object Array]", p = "[object Object]", g = Object.prototype, x = g.hasOwnProperty;
  function O(S, b, A, T, M, C) {
    var w = l(S), E = l(b), D = w ? y : u(S), R = E ? y : u(b);
    D = D == d ? p : D, R = R == d ? p : R;
    var z = D == p, F = R == p, k = D == R;
    if (k && c(S)) {
      if (!c(b))
        return !1;
      w = !0, z = !1;
    }
    if (k && !z)
      return C || (C = new t()), w || s(S) ? e(S, b, A, T, M, C) : n(S, b, D, A, T, M, C);
    if (!(A & h)) {
      var $ = z && x.call(S, "__wrapped__"), K = F && x.call(b, "__wrapped__");
      if ($ || K) {
        var Z = $ ? S.value() : S, V = K ? b.value() : b;
        return C || (C = new t()), M(Z, V, A, T, C);
      }
    }
    return k ? (C || (C = new t()), r(S, b, A, T, M, C)) : !1;
  }
  return Ey = O, Ey;
}
var My, Ew;
function v0() {
  if (Ew) return My;
  Ew = 1;
  var t = Iz(), e = Br();
  function n(r, u, l, c, s) {
    return r === u ? !0 : r == null || u == null || !e(r) && !e(u) ? r !== r && u !== u : t(r, u, l, c, n, s);
  }
  return My = n, My;
}
var jy, Mw;
function Gz() {
  if (Mw) return jy;
  Mw = 1;
  var t = Dj(), e = v0(), n = 1, r = 2;
  function u(l, c, s, h) {
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
      var x = g[0], O = l[x], S = g[1];
      if (p && g[2]) {
        if (O === void 0 && !(x in l))
          return !1;
      } else {
        var b = new t();
        if (h)
          var A = h(O, S, x, l, c, b);
        if (!(A === void 0 ? e(S, O, n | r, h, b) : A))
          return !1;
      }
    }
    return !0;
  }
  return jy = u, jy;
}
var Cy, jw;
function Hj() {
  if (jw) return Cy;
  jw = 1;
  var t = ba();
  function e(n) {
    return n === n && !t(n);
  }
  return Cy = e, Cy;
}
var Dy, Cw;
function Yz() {
  if (Cw) return Dy;
  Cw = 1;
  var t = Hj(), e = qs();
  function n(r) {
    for (var u = e(r), l = u.length; l--; ) {
      var c = u[l], s = r[c];
      u[l] = [c, s, t(s)];
    }
    return u;
  }
  return Dy = n, Dy;
}
var Py, Dw;
function Ij() {
  if (Dw) return Py;
  Dw = 1;
  function t(e, n) {
    return function(r) {
      return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
    };
  }
  return Py = t, Py;
}
var Ny, Pw;
function Xz() {
  if (Pw) return Ny;
  Pw = 1;
  var t = Gz(), e = Yz(), n = Ij();
  function r(u) {
    var l = e(u);
    return l.length == 1 && l[0][2] ? n(l[0][0], l[0][1]) : function(c) {
      return c === u || t(c, u, l);
    };
  }
  return Ny = r, Ny;
}
var Ry, Nw;
function Kz() {
  if (Nw) return Ry;
  Nw = 1;
  function t(e, n) {
    return e != null && n in Object(e);
  }
  return Ry = t, Ry;
}
var qy, Rw;
function Vz() {
  if (Rw) return qy;
  Rw = 1;
  var t = oj(), e = s0(), n = Je(), r = h0(), u = d0(), l = Cs();
  function c(s, h, d) {
    h = t(h, s);
    for (var y = -1, p = h.length, g = !1; ++y < p; ) {
      var x = l(h[y]);
      if (!(g = s != null && d(s, x)))
        break;
      s = s[x];
    }
    return g || ++y != p ? g : (p = s == null ? 0 : s.length, !!p && u(p) && r(x, p) && (n(s) || e(s)));
  }
  return qy = c, qy;
}
var zy, qw;
function Fz() {
  if (qw) return zy;
  qw = 1;
  var t = Kz(), e = Vz();
  function n(r, u) {
    return r != null && e(r, u, t);
  }
  return zy = n, zy;
}
var $y, zw;
function Zz() {
  if (zw) return $y;
  zw = 1;
  var t = v0(), e = lj(), n = Fz(), r = Zb(), u = Hj(), l = Ij(), c = Cs(), s = 1, h = 2;
  function d(y, p) {
    return r(y) && u(p) ? l(c(y), p) : function(g) {
      var x = e(g, y);
      return x === void 0 && x === p ? n(g, y) : t(p, x, s | h);
    };
  }
  return $y = d, $y;
}
var By, $w;
function $u() {
  if ($w) return By;
  $w = 1;
  function t(e) {
    return e;
  }
  return By = t, By;
}
var Ly, Bw;
function Qz() {
  if (Bw) return Ly;
  Bw = 1;
  function t(e) {
    return function(n) {
      return n == null ? void 0 : n[e];
    };
  }
  return Ly = t, Ly;
}
var ky, Lw;
function Wz() {
  if (Lw) return ky;
  Lw = 1;
  var t = n0();
  function e(n) {
    return function(r) {
      return t(r, n);
    };
  }
  return ky = e, ky;
}
var Uy, kw;
function Jz() {
  if (kw) return Uy;
  kw = 1;
  var t = Qz(), e = Wz(), n = Zb(), r = Cs();
  function u(l) {
    return n(l) ? t(r(l)) : e(l);
  }
  return Uy = u, Uy;
}
var Hy, Uw;
function xa() {
  if (Uw) return Hy;
  Uw = 1;
  var t = Xz(), e = Zz(), n = $u(), r = Je(), u = Jz();
  function l(c) {
    return typeof c == "function" ? c : c == null ? n : typeof c == "object" ? r(c) ? e(c[0], c[1]) : t(c) : u(c);
  }
  return Hy = l, Hy;
}
var Iy, Hw;
function Gj() {
  if (Hw) return Iy;
  Hw = 1;
  function t(e, n, r, u) {
    for (var l = e.length, c = r + (u ? 1 : -1); u ? c-- : ++c < l; )
      if (n(e[c], c, e))
        return c;
    return -1;
  }
  return Iy = t, Iy;
}
var Gy, Iw;
function t$() {
  if (Iw) return Gy;
  Iw = 1;
  function t(e) {
    return e !== e;
  }
  return Gy = t, Gy;
}
var Yy, Gw;
function e$() {
  if (Gw) return Yy;
  Gw = 1;
  function t(e, n, r) {
    for (var u = r - 1, l = e.length; ++u < l; )
      if (e[u] === n)
        return u;
    return -1;
  }
  return Yy = t, Yy;
}
var Xy, Yw;
function n$() {
  if (Yw) return Xy;
  Yw = 1;
  var t = Gj(), e = t$(), n = e$();
  function r(u, l, c) {
    return l === l ? n(u, l, c) : t(u, e, c);
  }
  return Xy = r, Xy;
}
var Ky, Xw;
function r$() {
  if (Xw) return Ky;
  Xw = 1;
  var t = n$();
  function e(n, r) {
    var u = n == null ? 0 : n.length;
    return !!u && t(n, r, 0) > -1;
  }
  return Ky = e, Ky;
}
var Vy, Kw;
function a$() {
  if (Kw) return Vy;
  Kw = 1;
  function t(e, n, r) {
    for (var u = -1, l = e == null ? 0 : e.length; ++u < l; )
      if (r(n, e[u]))
        return !0;
    return !1;
  }
  return Vy = t, Vy;
}
var Fy, Vw;
function i$() {
  if (Vw) return Fy;
  Vw = 1;
  function t() {
  }
  return Fy = t, Fy;
}
var Zy, Fw;
function u$() {
  if (Fw) return Zy;
  Fw = 1;
  var t = Uj(), e = i$(), n = f0(), r = 1 / 0, u = t && 1 / n(new t([, -0]))[1] == r ? function(l) {
    return new t(l);
  } : e;
  return Zy = u, Zy;
}
var Qy, Zw;
function o$() {
  if (Zw) return Qy;
  Zw = 1;
  var t = Pj(), e = r$(), n = a$(), r = Rj(), u = u$(), l = f0(), c = 200;
  function s(h, d, y) {
    var p = -1, g = e, x = h.length, O = !0, S = [], b = S;
    if (y)
      O = !1, g = n;
    else if (x >= c) {
      var A = d ? null : u(h);
      if (A)
        return l(A);
      O = !1, g = r, b = new t();
    } else
      b = d ? [] : S;
    t:
      for (; ++p < x; ) {
        var T = h[p], M = d ? d(T) : T;
        if (T = y || T !== 0 ? T : 0, O && M === M) {
          for (var C = b.length; C--; )
            if (b[C] === M)
              continue t;
          d && b.push(M), S.push(T);
        } else g(b, M, y) || (b !== S && b.push(M), S.push(T));
      }
    return S;
  }
  return Qy = s, Qy;
}
var Wy, Qw;
function l$() {
  if (Qw) return Wy;
  Qw = 1;
  var t = xa(), e = o$();
  function n(r, u) {
    return r && r.length ? e(r, t(u, 2)) : [];
  }
  return Wy = n, Wy;
}
var c$ = l$();
const Ww = /* @__PURE__ */ Qt(c$);
function Yj(t, e, n) {
  return e === !0 ? Ww(t, n) : At(e) ? Ww(t, e) : t;
}
function su(t) {
  "@babel/helpers - typeof";
  return su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, su(t);
}
var f$ = ["ref"];
function Jw(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ar(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Jw(Object(n), !0).forEach(function(r) {
      zs(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jw(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function s$(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tT(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Kj(r.key), r);
  }
}
function h$(t, e, n) {
  return e && tT(t.prototype, e), n && tT(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function d$(t, e, n) {
  return e = qf(e), v$(t, Xj() ? Reflect.construct(e, n || [], qf(t).constructor) : e.apply(t, n));
}
function v$(t, e) {
  if (e && (su(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return p$(t);
}
function p$(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Xj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xj = function() {
    return !!t;
  })();
}
function qf(t) {
  return qf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qf(t);
}
function y$(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ug(t, e);
}
function Ug(t, e) {
  return Ug = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Ug(t, e);
}
function zs(t, e, n) {
  return e = Kj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Kj(t) {
  var e = m$(t, "string");
  return su(e) == "symbol" ? e : e + "";
}
function m$(t, e) {
  if (su(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (su(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function g$(t, e) {
  if (t == null) return {};
  var n = b$(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function b$(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function x$(t) {
  return t.value;
}
function S$(t, e) {
  if (/* @__PURE__ */ B.isValidElement(t))
    return /* @__PURE__ */ B.cloneElement(t, e);
  if (typeof t == "function")
    return /* @__PURE__ */ B.createElement(t, e);
  e.ref;
  var n = g$(e, f$);
  return /* @__PURE__ */ B.createElement(c0, n);
}
var eT = 1, au = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    s$(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = d$(this, e, [].concat(u)), zs(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return y$(e, t), h$(e, [{
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
      var r = this.props.onBBoxUpdate, u = this.getBBox();
      u ? (Math.abs(u.width - this.lastBoundingBox.width) > eT || Math.abs(u.height - this.lastBoundingBox.height) > eT) && (this.lastBoundingBox.width = u.width, this.lastBoundingBox.height = u.height, r && r(u)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
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
      var u = this.props, l = u.layout, c = u.align, s = u.verticalAlign, h = u.margin, d = u.chartWidth, y = u.chartHeight, p, g;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (c === "center" && l === "vertical") {
          var x = this.getBBoxSnapshot();
          p = {
            left: ((d || 0) - x.width) / 2
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
      var r = this, u = this.props, l = u.content, c = u.width, s = u.height, h = u.wrapperStyle, d = u.payloadUniqBy, y = u.payload, p = Ar(Ar({
        position: "absolute",
        width: c || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(h)), h);
      return /* @__PURE__ */ B.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(x) {
          r.wrapperNode = x;
        }
      }, S$(l, Ar(Ar({}, this.props), {}, {
        payload: Yj(y, d, x$)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, u) {
      var l = Ar(Ar({}, this.defaultProps), r.props), c = l.layout;
      return c === "vertical" && st(r.props.height) ? {
        height: r.props.height
      } : c === "horizontal" ? {
        width: r.props.width || u
      } : null;
    }
  }]);
})(at.PureComponent);
zs(au, "displayName", "Legend");
zs(au, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Jy, nT;
function _$() {
  if (nT) return Jy;
  nT = 1;
  var t = $l(), e = s0(), n = Je(), r = t ? t.isConcatSpreadable : void 0;
  function u(l) {
    return n(l) || e(l) || !!(r && l && l[r]);
  }
  return Jy = u, Jy;
}
var tm, rT;
function Vj() {
  if (rT) return tm;
  rT = 1;
  var t = zj(), e = _$();
  function n(r, u, l, c, s) {
    var h = -1, d = r.length;
    for (l || (l = e), s || (s = []); ++h < d; ) {
      var y = r[h];
      u > 0 && l(y) ? u > 1 ? n(y, u - 1, l, c, s) : t(s, y) : c || (s[s.length] = y);
    }
    return s;
  }
  return tm = n, tm;
}
var em, aT;
function O$() {
  if (aT) return em;
  aT = 1;
  function t(e) {
    return function(n, r, u) {
      for (var l = -1, c = Object(n), s = u(n), h = s.length; h--; ) {
        var d = s[e ? h : ++l];
        if (r(c[d], d, c) === !1)
          break;
      }
      return n;
    };
  }
  return em = t, em;
}
var nm, iT;
function A$() {
  if (iT) return nm;
  iT = 1;
  var t = O$(), e = t();
  return nm = e, nm;
}
var rm, uT;
function Fj() {
  if (uT) return rm;
  uT = 1;
  var t = A$(), e = qs();
  function n(r, u) {
    return r && t(r, u, e);
  }
  return rm = n, rm;
}
var am, oT;
function w$() {
  if (oT) return am;
  oT = 1;
  var t = Bl();
  function e(n, r) {
    return function(u, l) {
      if (u == null)
        return u;
      if (!t(u))
        return n(u, l);
      for (var c = u.length, s = r ? c : -1, h = Object(u); (r ? s-- : ++s < c) && l(h[s], s, h) !== !1; )
        ;
      return u;
    };
  }
  return am = e, am;
}
var im, lT;
function p0() {
  if (lT) return im;
  lT = 1;
  var t = Fj(), e = w$(), n = e(t);
  return im = n, im;
}
var um, cT;
function Zj() {
  if (cT) return um;
  cT = 1;
  var t = p0(), e = Bl();
  function n(r, u) {
    var l = -1, c = e(r) ? Array(r.length) : [];
    return t(r, function(s, h, d) {
      c[++l] = u(s, h, d);
    }), c;
  }
  return um = n, um;
}
var om, fT;
function T$() {
  if (fT) return om;
  fT = 1;
  function t(e, n) {
    var r = e.length;
    for (e.sort(n); r--; )
      e[r] = e[r].value;
    return e;
  }
  return om = t, om;
}
var lm, sT;
function E$() {
  if (sT) return lm;
  sT = 1;
  var t = Nu();
  function e(n, r) {
    if (n !== r) {
      var u = n !== void 0, l = n === null, c = n === n, s = t(n), h = r !== void 0, d = r === null, y = r === r, p = t(r);
      if (!d && !p && !s && n > r || s && h && y && !d && !p || l && h && y || !u && y || !c)
        return 1;
      if (!l && !s && !p && n < r || p && u && c && !l && !s || d && u && c || !h && c || !y)
        return -1;
    }
    return 0;
  }
  return lm = e, lm;
}
var cm, hT;
function M$() {
  if (hT) return cm;
  hT = 1;
  var t = E$();
  function e(n, r, u) {
    for (var l = -1, c = n.criteria, s = r.criteria, h = c.length, d = u.length; ++l < h; ) {
      var y = t(c[l], s[l]);
      if (y) {
        if (l >= d)
          return y;
        var p = u[l];
        return y * (p == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return cm = e, cm;
}
var fm, dT;
function j$() {
  if (dT) return fm;
  dT = 1;
  var t = e0(), e = n0(), n = xa(), r = Zj(), u = T$(), l = Bj(), c = M$(), s = $u(), h = Je();
  function d(y, p, g) {
    p.length ? p = t(p, function(S) {
      return h(S) ? function(b) {
        return e(b, S.length === 1 ? S[0] : S);
      } : S;
    }) : p = [s];
    var x = -1;
    p = t(p, l(n));
    var O = r(y, function(S, b, A) {
      var T = t(p, function(M) {
        return M(S);
      });
      return { criteria: T, index: ++x, value: S };
    });
    return u(O, function(S, b) {
      return c(S, b, g);
    });
  }
  return fm = d, fm;
}
var sm, vT;
function C$() {
  if (vT) return sm;
  vT = 1;
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
  return sm = t, sm;
}
var hm, pT;
function D$() {
  if (pT) return hm;
  pT = 1;
  var t = C$(), e = Math.max;
  function n(r, u, l) {
    return u = e(u === void 0 ? r.length - 1 : u, 0), function() {
      for (var c = arguments, s = -1, h = e(c.length - u, 0), d = Array(h); ++s < h; )
        d[s] = c[u + s];
      s = -1;
      for (var y = Array(u + 1); ++s < u; )
        y[s] = c[s];
      return y[u] = l(d), t(r, this, y);
    };
  }
  return hm = n, hm;
}
var dm, yT;
function P$() {
  if (yT) return dm;
  yT = 1;
  function t(e) {
    return function() {
      return e;
    };
  }
  return dm = t, dm;
}
var vm, mT;
function Qj() {
  if (mT) return vm;
  mT = 1;
  var t = ii(), e = (function() {
    try {
      var n = t(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return vm = e, vm;
}
var pm, gT;
function N$() {
  if (gT) return pm;
  gT = 1;
  var t = P$(), e = Qj(), n = $u(), r = e ? function(u, l) {
    return e(u, "toString", {
      configurable: !0,
      enumerable: !1,
      value: t(l),
      writable: !0
    });
  } : n;
  return pm = r, pm;
}
var ym, bT;
function R$() {
  if (bT) return ym;
  bT = 1;
  var t = 800, e = 16, n = Date.now;
  function r(u) {
    var l = 0, c = 0;
    return function() {
      var s = n(), h = e - (s - c);
      if (c = s, h > 0) {
        if (++l >= t)
          return arguments[0];
      } else
        l = 0;
      return u.apply(void 0, arguments);
    };
  }
  return ym = r, ym;
}
var mm, xT;
function q$() {
  if (xT) return mm;
  xT = 1;
  var t = N$(), e = R$(), n = e(t);
  return mm = n, mm;
}
var gm, ST;
function z$() {
  if (ST) return gm;
  ST = 1;
  var t = $u(), e = D$(), n = q$();
  function r(u, l) {
    return n(e(u, l, t), u + "");
  }
  return gm = r, gm;
}
var bm, _T;
function $s() {
  if (_T) return bm;
  _T = 1;
  var t = Wb(), e = Bl(), n = h0(), r = ba();
  function u(l, c, s) {
    if (!r(s))
      return !1;
    var h = typeof c;
    return (h == "number" ? e(s) && n(c, s.length) : h == "string" && c in s) ? t(s[c], l) : !1;
  }
  return bm = u, bm;
}
var xm, OT;
function $$() {
  if (OT) return xm;
  OT = 1;
  var t = Vj(), e = j$(), n = z$(), r = $s(), u = n(function(l, c) {
    if (l == null)
      return [];
    var s = c.length;
    return s > 1 && r(l, c[0], c[1]) ? c = [] : s > 2 && r(c[0], c[1], c[2]) && (c = [c[0]]), e(l, t(c, 1), []);
  });
  return xm = u, xm;
}
var B$ = $$();
const y0 = /* @__PURE__ */ Qt(B$);
function al(t) {
  "@babel/helpers - typeof";
  return al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, al(t);
}
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
function L$(t, e) {
  return I$(t) || H$(t, e) || U$(t, e) || k$();
}
function k$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U$(t, e) {
  if (t) {
    if (typeof t == "string") return AT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AT(t, e);
  }
}
function AT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function H$(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function I$(t) {
  if (Array.isArray(t)) return t;
}
function wT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wT(Object(n), !0).forEach(function(r) {
      G$(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function G$(t, e, n) {
  return e = Y$(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Y$(t) {
  var e = X$(t, "string");
  return al(e) == "symbol" ? e : e + "";
}
function X$(t, e) {
  if (al(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (al(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function K$(t) {
  return Array.isArray(t) && _e(t[0]) && _e(t[1]) ? t.join(" ~ ") : t;
}
var V$ = function(e) {
  var n = e.separator, r = n === void 0 ? " : " : n, u = e.contentStyle, l = u === void 0 ? {} : u, c = e.itemStyle, s = c === void 0 ? {} : c, h = e.labelStyle, d = h === void 0 ? {} : h, y = e.payload, p = e.formatter, g = e.itemSorter, x = e.wrapperClassName, O = e.labelClassName, S = e.label, b = e.labelFormatter, A = e.accessibilityLayer, T = A === void 0 ? !1 : A, M = function() {
    if (y && y.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, K = (g ? y0(y, g) : y).map(function(Z, V) {
        if (Z.type === "none")
          return null;
        var N = Sm({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: Z.color || "#000"
        }, s), I = Z.formatter || p || K$, W = Z.value, ut = Z.name, lt = W, P = ut;
        if (I && lt != null && P != null) {
          var U = I(W, ut, Z, V, y);
          if (Array.isArray(U)) {
            var et = L$(U, 2);
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
  }, C = Sm({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, l), w = Sm({
    margin: 0
  }, d), E = !Mt(S), D = E ? S : "", R = qt("recharts-default-tooltip", x), z = qt("recharts-tooltip-label", O);
  E && b && y !== void 0 && y !== null && (D = b(S, y));
  var F = T ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ B.createElement("div", Hg({
    className: R,
    style: C
  }, F), /* @__PURE__ */ B.createElement("p", {
    className: z,
    style: w
  }, /* @__PURE__ */ B.isValidElement(D) ? D : "".concat(D)), M());
};
function il(t) {
  "@babel/helpers - typeof";
  return il = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, il(t);
}
function sf(t, e, n) {
  return e = F$(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function F$(t) {
  var e = Z$(t, "string");
  return il(e) == "symbol" ? e : e + "";
}
function Z$(t, e) {
  if (il(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (il(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var $o = "recharts-tooltip-wrapper", Q$ = {
  visibility: "hidden"
};
function W$(t) {
  var e = t.coordinate, n = t.translateX, r = t.translateY;
  return qt($o, sf(sf(sf(sf({}, "".concat($o, "-right"), st(n) && e && st(e.x) && n >= e.x), "".concat($o, "-left"), st(n) && e && st(e.x) && n < e.x), "".concat($o, "-bottom"), st(r) && e && st(e.y) && r >= e.y), "".concat($o, "-top"), st(r) && e && st(e.y) && r < e.y));
}
function TT(t) {
  var e = t.allowEscapeViewBox, n = t.coordinate, r = t.key, u = t.offsetTopLeft, l = t.position, c = t.reverseDirection, s = t.tooltipDimension, h = t.viewBox, d = t.viewBoxDimension;
  if (l && st(l[r]))
    return l[r];
  var y = n[r] - s - u, p = n[r] + u;
  if (e[r])
    return c[r] ? y : p;
  if (c[r]) {
    var g = y, x = h[r];
    return g < x ? Math.max(p, h[r]) : Math.max(y, h[r]);
  }
  var O = p + s, S = h[r] + d;
  return O > S ? Math.max(y, h[r]) : Math.max(p, h[r]);
}
function J$(t) {
  var e = t.translateX, n = t.translateY, r = t.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(e, "px, ").concat(n, "px, 0)") : "translate(".concat(e, "px, ").concat(n, "px)")
  };
}
function tB(t) {
  var e = t.allowEscapeViewBox, n = t.coordinate, r = t.offsetTopLeft, u = t.position, l = t.reverseDirection, c = t.tooltipBox, s = t.useTranslate3d, h = t.viewBox, d, y, p;
  return c.height > 0 && c.width > 0 && n ? (y = TT({
    allowEscapeViewBox: e,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: u,
    reverseDirection: l,
    tooltipDimension: c.width,
    viewBox: h,
    viewBoxDimension: h.width
  }), p = TT({
    allowEscapeViewBox: e,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: u,
    reverseDirection: l,
    tooltipDimension: c.height,
    viewBox: h,
    viewBoxDimension: h.height
  }), d = J$({
    translateX: y,
    translateY: p,
    useTranslate3d: s
  })) : d = Q$, {
    cssProperties: d,
    cssClasses: W$({
      translateX: y,
      translateY: p,
      coordinate: n
    })
  };
}
function hu(t) {
  "@babel/helpers - typeof";
  return hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hu(t);
}
function ET(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function MT(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ET(Object(n), !0).forEach(function(r) {
      Gg(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ET(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function eB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nB(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Jj(r.key), r);
  }
}
function rB(t, e, n) {
  return e && nB(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function aB(t, e, n) {
  return e = zf(e), iB(t, Wj() ? Reflect.construct(e, n || [], zf(t).constructor) : e.apply(t, n));
}
function iB(t, e) {
  if (e && (hu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return uB(t);
}
function uB(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Wj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wj = function() {
    return !!t;
  })();
}
function zf(t) {
  return zf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zf(t);
}
function oB(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ig(t, e);
}
function Ig(t, e) {
  return Ig = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Ig(t, e);
}
function Gg(t, e, n) {
  return e = Jj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Jj(t) {
  var e = lB(t, "string");
  return hu(e) == "symbol" ? e : e + "";
}
function lB(t, e) {
  if (hu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (hu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var jT = 1, cB = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    eB(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = aB(this, e, [].concat(u)), Gg(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Gg(n, "handleKeyDown", function(c) {
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
  return oB(e, t), rB(e, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > jT || Math.abs(r.height - this.state.lastBoundingBox.height) > jT) && this.setState({
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
      var r, u;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((u = this.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, u = this.props, l = u.active, c = u.allowEscapeViewBox, s = u.animationDuration, h = u.animationEasing, d = u.children, y = u.coordinate, p = u.hasPayload, g = u.isAnimationActive, x = u.offset, O = u.position, S = u.reverseDirection, b = u.useTranslate3d, A = u.viewBox, T = u.wrapperStyle, M = tB({
        allowEscapeViewBox: c,
        coordinate: y,
        offsetTopLeft: x,
        position: O,
        reverseDirection: S,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: A
      }), C = M.cssClasses, w = M.cssProperties, E = MT(MT({
        transition: g && l ? "transform ".concat(s, "ms ").concat(h) : void 0
      }, w), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && l && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, T);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ B.createElement("div", {
          tabIndex: -1,
          className: C,
          style: E,
          ref: function(R) {
            r.wrapperNode = R;
          }
        }, d)
      );
    }
  }]);
})(at.PureComponent), fB = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, ui = {
  isSsr: fB()
};
function du(t) {
  "@babel/helpers - typeof";
  return du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, du(t);
}
function CT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function DT(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? CT(Object(n), !0).forEach(function(r) {
      m0(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : CT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function sB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hB(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, eC(r.key), r);
  }
}
function dB(t, e, n) {
  return e && hB(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function vB(t, e, n) {
  return e = $f(e), pB(t, tC() ? Reflect.construct(e, n || [], $f(t).constructor) : e.apply(t, n));
}
function pB(t, e) {
  if (e && (du(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yB(t);
}
function yB(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tC() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tC = function() {
    return !!t;
  })();
}
function $f(t) {
  return $f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $f(t);
}
function mB(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Yg(t, e);
}
function Yg(t, e) {
  return Yg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Yg(t, e);
}
function m0(t, e, n) {
  return e = eC(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eC(t) {
  var e = gB(t, "string");
  return du(e) == "symbol" ? e : e + "";
}
function gB(t, e) {
  if (du(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (du(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function bB(t) {
  return t.dataKey;
}
function xB(t, e) {
  return /* @__PURE__ */ B.isValidElement(t) ? /* @__PURE__ */ B.cloneElement(t, e) : typeof t == "function" ? /* @__PURE__ */ B.createElement(t, e) : /* @__PURE__ */ B.createElement(V$, e);
}
var dn = /* @__PURE__ */ (function(t) {
  function e() {
    return sB(this, e), vB(this, e, arguments);
  }
  return mB(e, t), dB(e, [{
    key: "render",
    value: function() {
      var r = this, u = this.props, l = u.active, c = u.allowEscapeViewBox, s = u.animationDuration, h = u.animationEasing, d = u.content, y = u.coordinate, p = u.filterNull, g = u.isAnimationActive, x = u.offset, O = u.payload, S = u.payloadUniqBy, b = u.position, A = u.reverseDirection, T = u.useTranslate3d, M = u.viewBox, C = u.wrapperStyle, w = O ?? [];
      p && w.length && (w = Yj(O.filter(function(D) {
        return D.value != null && (D.hide !== !0 || r.props.includeHidden);
      }), S, bB));
      var E = w.length > 0;
      return /* @__PURE__ */ B.createElement(cB, {
        allowEscapeViewBox: c,
        animationDuration: s,
        animationEasing: h,
        isAnimationActive: g,
        active: l,
        coordinate: y,
        hasPayload: E,
        offset: x,
        position: b,
        reverseDirection: A,
        useTranslate3d: T,
        viewBox: M,
        wrapperStyle: C
      }, xB(d, DT(DT({}, this.props), {}, {
        payload: w
      })));
    }
  }]);
})(at.PureComponent);
m0(dn, "displayName", "Tooltip");
m0(dn, "defaultProps", {
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
  isAnimationActive: !ui.isSsr,
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
var _m, PT;
function SB() {
  if (PT) return _m;
  PT = 1;
  var t = rr(), e = function() {
    return t.Date.now();
  };
  return _m = e, _m;
}
var Om, NT;
function _B() {
  if (NT) return Om;
  NT = 1;
  var t = /\s/;
  function e(n) {
    for (var r = n.length; r-- && t.test(n.charAt(r)); )
      ;
    return r;
  }
  return Om = e, Om;
}
var Am, RT;
function OB() {
  if (RT) return Am;
  RT = 1;
  var t = _B(), e = /^\s+/;
  function n(r) {
    return r && r.slice(0, t(r) + 1).replace(e, "");
  }
  return Am = n, Am;
}
var wm, qT;
function nC() {
  if (qT) return wm;
  qT = 1;
  var t = OB(), e = ba(), n = Nu(), r = NaN, u = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt;
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
    return p || c.test(d) ? s(d.slice(2), p ? 2 : 8) : u.test(d) ? r : +d;
  }
  return wm = h, wm;
}
var Tm, zT;
function AB() {
  if (zT) return Tm;
  zT = 1;
  var t = ba(), e = SB(), n = nC(), r = "Expected a function", u = Math.max, l = Math.min;
  function c(s, h, d) {
    var y, p, g, x, O, S, b = 0, A = !1, T = !1, M = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    h = n(h) || 0, t(d) && (A = !!d.leading, T = "maxWait" in d, g = T ? u(n(d.maxWait) || 0, h) : g, M = "trailing" in d ? !!d.trailing : M);
    function C(K) {
      var Z = y, V = p;
      return y = p = void 0, b = K, x = s.apply(V, Z), x;
    }
    function w(K) {
      return b = K, O = setTimeout(R, h), A ? C(K) : x;
    }
    function E(K) {
      var Z = K - S, V = K - b, N = h - Z;
      return T ? l(N, g - V) : N;
    }
    function D(K) {
      var Z = K - S, V = K - b;
      return S === void 0 || Z >= h || Z < 0 || T && V >= g;
    }
    function R() {
      var K = e();
      if (D(K))
        return z(K);
      O = setTimeout(R, E(K));
    }
    function z(K) {
      return O = void 0, M && y ? C(K) : (y = p = void 0, x);
    }
    function F() {
      O !== void 0 && clearTimeout(O), b = 0, y = S = p = O = void 0;
    }
    function k() {
      return O === void 0 ? x : z(e());
    }
    function $() {
      var K = e(), Z = D(K);
      if (y = arguments, p = this, S = K, Z) {
        if (O === void 0)
          return w(S);
        if (T)
          return clearTimeout(O), O = setTimeout(R, h), C(S);
      }
      return O === void 0 && (O = setTimeout(R, h)), x;
    }
    return $.cancel = F, $.flush = k, $;
  }
  return Tm = c, Tm;
}
var Em, $T;
function wB() {
  if ($T) return Em;
  $T = 1;
  var t = AB(), e = ba(), n = "Expected a function";
  function r(u, l, c) {
    var s = !0, h = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    return e(c) && (s = "leading" in c ? !!c.leading : s, h = "trailing" in c ? !!c.trailing : h), t(u, l, {
      leading: s,
      maxWait: l,
      trailing: h
    });
  }
  return Em = r, Em;
}
var TB = wB();
const rC = /* @__PURE__ */ Qt(TB);
function ul(t) {
  "@babel/helpers - typeof";
  return ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ul(t);
}
function BT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? BT(Object(n), !0).forEach(function(r) {
      EB(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : BT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function EB(t, e, n) {
  return e = MB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function MB(t) {
  var e = jB(t, "string");
  return ul(e) == "symbol" ? e : e + "";
}
function jB(t, e) {
  if (ul(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ul(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function CB(t, e) {
  return RB(t) || NB(t, e) || PB(t, e) || DB();
}
function DB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PB(t, e) {
  if (t) {
    if (typeof t == "string") return LT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LT(t, e);
  }
}
function LT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function NB(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function RB(t) {
  if (Array.isArray(t)) return t;
}
var df = /* @__PURE__ */ at.forwardRef(function(t, e) {
  var n = t.aspect, r = t.initialDimension, u = r === void 0 ? {
    width: -1,
    height: -1
  } : r, l = t.width, c = l === void 0 ? "100%" : l, s = t.height, h = s === void 0 ? "100%" : s, d = t.minWidth, y = d === void 0 ? 0 : d, p = t.minHeight, g = t.maxHeight, x = t.children, O = t.debounce, S = O === void 0 ? 0 : O, b = t.id, A = t.className, T = t.onResize, M = t.style, C = M === void 0 ? {} : M, w = at.useRef(null), E = at.useRef();
  E.current = T, at.useImperativeHandle(e, function() {
    return Object.defineProperty(w.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), w.current;
      },
      configurable: !0
    });
  });
  var D = at.useState({
    containerWidth: u.width,
    containerHeight: u.height
  }), R = CB(D, 2), z = R[0], F = R[1], k = at.useCallback(function(K, Z) {
    F(function(V) {
      var N = Math.round(K), I = Math.round(Z);
      return V.containerWidth === N && V.containerHeight === I ? V : {
        containerWidth: N,
        containerHeight: I
      };
    });
  }, []);
  at.useEffect(function() {
    var K = function(ut) {
      var lt, P = ut[0].contentRect, U = P.width, et = P.height;
      k(U, et), (lt = E.current) === null || lt === void 0 || lt.call(E, U, et);
    };
    S > 0 && (K = rC(K, S, {
      trailing: !0,
      leading: !1
    }));
    var Z = new ResizeObserver(K), V = w.current.getBoundingClientRect(), N = V.width, I = V.height;
    return k(N, I), Z.observe(w.current), function() {
      Z.disconnect();
    };
  }, [k, S]);
  var $ = at.useMemo(function() {
    var K = z.containerWidth, Z = z.containerHeight;
    if (K < 0 || Z < 0)
      return null;
    Dr(Xa(c) || Xa(h), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, c, h), Dr(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var V = Xa(c) ? K : c, N = Xa(h) ? Z : h;
    n && n > 0 && (V ? N = V / n : N && (V = N * n), g && N > g && (N = g)), Dr(V > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, V, N, c, h, y, p, n);
    var I = !Array.isArray(x) && Cr(x.type).endsWith("Chart");
    return B.Children.map(x, function(W) {
      return /* @__PURE__ */ B.isValidElement(W) ? /* @__PURE__ */ at.cloneElement(W, hf({
        width: V,
        height: N
      }, I ? {
        style: hf({
          height: "100%",
          width: "100%",
          maxHeight: N,
          maxWidth: V
        }, W.props.style)
      } : {})) : W;
    });
  }, [n, x, h, g, p, y, z, c]);
  return /* @__PURE__ */ B.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: qt("recharts-responsive-container", A),
    style: hf(hf({}, C), {}, {
      width: c,
      height: h,
      minWidth: y,
      minHeight: p,
      maxHeight: g
    }),
    ref: w
  }, $);
}), g0 = function(e) {
  return null;
};
g0.displayName = "Cell";
function ol(t) {
  "@babel/helpers - typeof";
  return ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ol(t);
}
function kT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kT(Object(n), !0).forEach(function(r) {
      qB(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function qB(t, e, n) {
  return e = zB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function zB(t) {
  var e = $B(t, "string");
  return ol(e) == "symbol" ? e : e + "";
}
function $B(t, e) {
  if (ol(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ol(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Zi = {
  widthCache: {},
  cacheCount: 0
}, BB = 2e3, LB = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, UT = "recharts_measurement_span";
function kB(t) {
  var e = Xg({}, t);
  return Object.keys(e).forEach(function(n) {
    e[n] || delete e[n];
  }), e;
}
var Qo = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (e == null || ui.isSsr)
    return {
      width: 0,
      height: 0
    };
  var r = kB(n), u = JSON.stringify({
    text: e,
    copyStyle: r
  });
  if (Zi.widthCache[u])
    return Zi.widthCache[u];
  try {
    var l = document.getElementById(UT);
    l || (l = document.createElement("span"), l.setAttribute("id", UT), l.setAttribute("aria-hidden", "true"), document.body.appendChild(l));
    var c = Xg(Xg({}, LB), r);
    Object.assign(l.style, c), l.textContent = "".concat(e);
    var s = l.getBoundingClientRect(), h = {
      width: s.width,
      height: s.height
    };
    return Zi.widthCache[u] = h, ++Zi.cacheCount > BB && (Zi.cacheCount = 0, Zi.widthCache = {}), h;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, UB = function(e) {
  return {
    top: e.top + window.scrollY - document.documentElement.clientTop,
    left: e.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ll(t) {
  "@babel/helpers - typeof";
  return ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ll(t);
}
function Bf(t, e) {
  return YB(t) || GB(t, e) || IB(t, e) || HB();
}
function HB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IB(t, e) {
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
function GB(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        h = !1;
      } else for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function YB(t) {
  if (Array.isArray(t)) return t;
}
function XB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function IT(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, VB(r.key), r);
  }
}
function KB(t, e, n) {
  return e && IT(t.prototype, e), n && IT(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function VB(t) {
  var e = FB(t, "string");
  return ll(e) == "symbol" ? e : e + "";
}
function FB(t, e) {
  if (ll(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ll(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var GT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, YT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, ZB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, QB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, aC = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, WB = Object.keys(aC), tu = "NaN";
function JB(t, e) {
  return t * aC[e];
}
var vf = /* @__PURE__ */ (function() {
  function t(e, n) {
    XB(this, t), this.num = e, this.unit = n, this.num = e, this.unit = n, Number.isNaN(e) && (this.unit = ""), n !== "" && !ZB.test(n) && (this.num = NaN, this.unit = ""), WB.includes(n) && (this.num = JB(e, n), this.unit = "px");
  }
  return KB(t, [{
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
      var r, u = (r = QB.exec(n)) !== null && r !== void 0 ? r : [], l = Bf(u, 3), c = l[1], s = l[2];
      return new t(parseFloat(c), s ?? "");
    }
  }]);
})();
function iC(t) {
  if (t.includes(tu))
    return tu;
  for (var e = t; e.includes("*") || e.includes("/"); ) {
    var n, r = (n = GT.exec(e)) !== null && n !== void 0 ? n : [], u = Bf(r, 4), l = u[1], c = u[2], s = u[3], h = vf.parse(l ?? ""), d = vf.parse(s ?? ""), y = c === "*" ? h.multiply(d) : h.divide(d);
    if (y.isNaN())
      return tu;
    e = e.replace(GT, y.toString());
  }
  for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
    var p, g = (p = YT.exec(e)) !== null && p !== void 0 ? p : [], x = Bf(g, 4), O = x[1], S = x[2], b = x[3], A = vf.parse(O ?? ""), T = vf.parse(b ?? ""), M = S === "+" ? A.add(T) : A.subtract(T);
    if (M.isNaN())
      return tu;
    e = e.replace(YT, M.toString());
  }
  return e;
}
var XT = /\(([^()]*)\)/;
function t8(t) {
  for (var e = t; e.includes("("); ) {
    var n = XT.exec(e), r = Bf(n, 2), u = r[1];
    e = e.replace(XT, iC(u));
  }
  return e;
}
function e8(t) {
  var e = t.replace(/\s+/g, "");
  return e = t8(e), e = iC(e), e;
}
function n8(t) {
  try {
    return e8(t);
  } catch {
    return tu;
  }
}
function Mm(t) {
  var e = n8(t.slice(5, -1));
  return e === tu ? "" : e;
}
var r8 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], a8 = ["dx", "dy", "angle", "className", "breakAll"];
function Kg() {
  return Kg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Kg.apply(this, arguments);
}
function KT(t, e) {
  if (t == null) return {};
  var n = i8(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function i8(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function VT(t, e) {
  return c8(t) || l8(t, e) || o8(t, e) || u8();
}
function u8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o8(t, e) {
  if (t) {
    if (typeof t == "string") return FT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FT(t, e);
  }
}
function FT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function l8(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        h = !1;
      } else for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function c8(t) {
  if (Array.isArray(t)) return t;
}
var uC = /[ \f\n\r\t\v\u2028\u2029]+/, oC = function(e) {
  var n = e.children, r = e.breakAll, u = e.style;
  try {
    var l = [];
    Mt(n) || (r ? l = n.toString().split("") : l = n.toString().split(uC));
    var c = l.map(function(h) {
      return {
        word: h,
        width: Qo(h, u).width
      };
    }), s = r ? 0 : Qo(" ", u).width;
    return {
      wordsWithComputedWidth: c,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, f8 = function(e, n, r, u, l) {
  var c = e.maxLines, s = e.children, h = e.style, d = e.breakAll, y = st(c), p = s, g = function() {
    var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return V.reduce(function(N, I) {
      var W = I.word, ut = I.width, lt = N[N.length - 1];
      if (lt && (u == null || l || lt.width + ut + r < Number(u)))
        lt.words.push(W), lt.width += ut + r;
      else {
        var P = {
          words: [W],
          width: ut
        };
        N.push(P);
      }
      return N;
    }, []);
  }, x = g(n), O = function(V) {
    return V.reduce(function(N, I) {
      return N.width > I.width ? N : I;
    });
  };
  if (!y)
    return x;
  for (var S = "…", b = function(V) {
    var N = p.slice(0, V), I = oC({
      breakAll: d,
      style: h,
      children: N + S
    }).wordsWithComputedWidth, W = g(I), ut = W.length > c || O(W).width > Number(u);
    return [ut, W];
  }, A = 0, T = p.length - 1, M = 0, C; A <= T && M <= p.length - 1; ) {
    var w = Math.floor((A + T) / 2), E = w - 1, D = b(E), R = VT(D, 2), z = R[0], F = R[1], k = b(w), $ = VT(k, 1), K = $[0];
    if (!z && !K && (A = w + 1), z && K && (T = w - 1), !z && K) {
      C = F;
      break;
    }
    M++;
  }
  return C || x;
}, ZT = function(e) {
  var n = Mt(e) ? [] : e.toString().split(uC);
  return [{
    words: n
  }];
}, s8 = function(e) {
  var n = e.width, r = e.scaleToFit, u = e.children, l = e.style, c = e.breakAll, s = e.maxLines;
  if ((n || r) && !ui.isSsr) {
    var h, d, y = oC({
      breakAll: c,
      children: u,
      style: l
    });
    if (y) {
      var p = y.wordsWithComputedWidth, g = y.spaceWidth;
      h = p, d = g;
    } else
      return ZT(u);
    return f8({
      breakAll: c,
      children: u,
      maxLines: s,
      style: l
    }, h, d, n, r);
  }
  return ZT(u);
}, QT = "#808080", Lf = function(e) {
  var n = e.x, r = n === void 0 ? 0 : n, u = e.y, l = u === void 0 ? 0 : u, c = e.lineHeight, s = c === void 0 ? "1em" : c, h = e.capHeight, d = h === void 0 ? "0.71em" : h, y = e.scaleToFit, p = y === void 0 ? !1 : y, g = e.textAnchor, x = g === void 0 ? "start" : g, O = e.verticalAnchor, S = O === void 0 ? "end" : O, b = e.fill, A = b === void 0 ? QT : b, T = KT(e, r8), M = at.useMemo(function() {
    return s8({
      breakAll: T.breakAll,
      children: T.children,
      maxLines: T.maxLines,
      scaleToFit: p,
      style: T.style,
      width: T.width
    });
  }, [T.breakAll, T.children, T.maxLines, p, T.style, T.width]), C = T.dx, w = T.dy, E = T.angle, D = T.className, R = T.breakAll, z = KT(T, a8);
  if (!_e(r) || !_e(l))
    return null;
  var F = r + (st(C) ? C : 0), k = l + (st(w) ? w : 0), $;
  switch (S) {
    case "start":
      $ = Mm("calc(".concat(d, ")"));
      break;
    case "middle":
      $ = Mm("calc(".concat((M.length - 1) / 2, " * -").concat(s, " + (").concat(d, " / 2))"));
      break;
    default:
      $ = Mm("calc(".concat(M.length - 1, " * -").concat(s, ")"));
      break;
  }
  var K = [];
  if (p) {
    var Z = M[0].width, V = T.width;
    K.push("scale(".concat((st(V) ? V / Z : 1) / Z, ")"));
  }
  return E && K.push("rotate(".concat(E, ", ").concat(F, ", ").concat(k, ")")), K.length && (z.transform = K.join(" ")), /* @__PURE__ */ B.createElement("text", Kg({}, Et(z, !0), {
    x: F,
    y: k,
    className: qt("recharts-text", D),
    textAnchor: x,
    fill: A.includes("url") ? QT : A
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
function h8(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function b0(t) {
  let e, n, r;
  t.length !== 2 ? (e = ga, n = (s, h) => ga(t(s), h), r = (s, h) => t(s) - h) : (e = t === ga || t === h8 ? t : d8, n = t, r = t);
  function u(s, h, d = 0, y = s.length) {
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
    const p = u(s, h, d, y - 1);
    return p > d && r(s[p - 1], h) > -r(s[p], h) ? p - 1 : p;
  }
  return { left: u, center: c, right: l };
}
function d8() {
  return 0;
}
function lC(t) {
  return t === null ? NaN : +t;
}
function* v8(t, e) {
  for (let n of t)
    n != null && (n = +n) >= n && (yield n);
}
const p8 = b0(ga), Ll = p8.right;
b0(lC).center;
class WT extends Map {
  constructor(e, n = g8) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, u] of e) this.set(r, u);
  }
  get(e) {
    return super.get(JT(this, e));
  }
  has(e) {
    return super.has(JT(this, e));
  }
  set(e, n) {
    return super.set(y8(this, e), n);
  }
  delete(e) {
    return super.delete(m8(this, e));
  }
}
function JT({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function y8({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function m8({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function g8(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
function b8(t = ga) {
  if (t === ga) return cC;
  if (typeof t != "function") throw new TypeError("compare is not a function");
  return (e, n) => {
    const r = t(e, n);
    return r || r === 0 ? r : (t(n, n) === 0) - (t(e, e) === 0);
  };
}
function cC(t, e) {
  return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0);
}
const x8 = Math.sqrt(50), S8 = Math.sqrt(10), _8 = Math.sqrt(2);
function kf(t, e, n) {
  const r = (e - t) / Math.max(0, n), u = Math.floor(Math.log10(r)), l = r / Math.pow(10, u), c = l >= x8 ? 10 : l >= S8 ? 5 : l >= _8 ? 2 : 1;
  let s, h, d;
  return u < 0 ? (d = Math.pow(10, -u) / c, s = Math.round(t * d), h = Math.round(e * d), s / d < t && ++s, h / d > e && --h, d = -d) : (d = Math.pow(10, u) * c, s = Math.round(t / d), h = Math.round(e / d), s * d < t && ++s, h * d > e && --h), h < s && 0.5 <= n && n < 2 ? kf(t, e, n * 2) : [s, h, d];
}
function Vg(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [u, l, c] = r ? kf(e, t, n) : kf(t, e, n);
  if (!(l >= u)) return [];
  const s = l - u + 1, h = new Array(s);
  if (r)
    if (c < 0) for (let d = 0; d < s; ++d) h[d] = (l - d) / -c;
    else for (let d = 0; d < s; ++d) h[d] = (l - d) * c;
  else if (c < 0) for (let d = 0; d < s; ++d) h[d] = (u + d) / -c;
  else for (let d = 0; d < s; ++d) h[d] = (u + d) * c;
  return h;
}
function Fg(t, e, n) {
  return e = +e, t = +t, n = +n, kf(t, e, n)[2];
}
function Zg(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, u = r ? Fg(e, t, n) : Fg(t, e, n);
  return (r ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function tE(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function eE(t, e) {
  let n;
  for (const r of t)
    r != null && (n > r || n === void 0 && r >= r) && (n = r);
  return n;
}
function fC(t, e, n = 0, r = 1 / 0, u) {
  if (e = Math.floor(e), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(t.length - 1, r)), !(n <= e && e <= r)) return t;
  for (u = u === void 0 ? cC : b8(u); r > n; ) {
    if (r - n > 600) {
      const h = r - n + 1, d = e - n + 1, y = Math.log(h), p = 0.5 * Math.exp(2 * y / 3), g = 0.5 * Math.sqrt(y * p * (h - p) / h) * (d - h / 2 < 0 ? -1 : 1), x = Math.max(n, Math.floor(e - d * p / h + g)), O = Math.min(r, Math.floor(e + (h - d) * p / h + g));
      fC(t, e, x, O, u);
    }
    const l = t[e];
    let c = n, s = r;
    for (Bo(t, n, e), u(t[r], l) > 0 && Bo(t, n, r); c < s; ) {
      for (Bo(t, c, s), ++c, --s; u(t[c], l) < 0; ) ++c;
      for (; u(t[s], l) > 0; ) --s;
    }
    u(t[n], l) === 0 ? Bo(t, n, s) : (++s, Bo(t, s, r)), s <= e && (n = s + 1), e <= s && (r = s - 1);
  }
  return t;
}
function Bo(t, e, n) {
  const r = t[e];
  t[e] = t[n], t[n] = r;
}
function O8(t, e, n) {
  if (t = Float64Array.from(v8(t)), !(!(r = t.length) || isNaN(e = +e))) {
    if (e <= 0 || r < 2) return eE(t);
    if (e >= 1) return tE(t);
    var r, u = (r - 1) * e, l = Math.floor(u), c = tE(fC(t, l).subarray(0, l + 1)), s = eE(t.subarray(l + 1));
    return c + (s - c) * (u - l);
  }
}
function A8(t, e, n = lC) {
  if (!(!(r = t.length) || isNaN(e = +e))) {
    if (e <= 0 || r < 2) return +n(t[0], 0, t);
    if (e >= 1) return +n(t[r - 1], r - 1, t);
    var r, u = (r - 1) * e, l = Math.floor(u), c = +n(t[l], l, t), s = +n(t[l + 1], l + 1, t);
    return c + (s - c) * (u - l);
  }
}
function w8(t, e, n) {
  t = +t, e = +e, n = (u = arguments.length) < 2 ? (e = t, t = 0, 1) : u < 3 ? 1 : +n;
  for (var r = -1, u = Math.max(0, Math.ceil((e - t) / n)) | 0, l = new Array(u); ++r < u; )
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
const Qg = Symbol("implicit");
function x0() {
  var t = new WT(), e = [], n = [], r = Qg;
  function u(l) {
    let c = t.get(l);
    if (c === void 0) {
      if (r !== Qg) return r;
      t.set(l, c = e.push(l) - 1);
    }
    return n[c % n.length];
  }
  return u.domain = function(l) {
    if (!arguments.length) return e.slice();
    e = [], t = new WT();
    for (const c of l)
      t.has(c) || t.set(c, e.push(c) - 1);
    return u;
  }, u.range = function(l) {
    return arguments.length ? (n = Array.from(l), u) : n.slice();
  }, u.unknown = function(l) {
    return arguments.length ? (r = l, u) : r;
  }, u.copy = function() {
    return x0(e, n).unknown(r);
  }, Pn.apply(u, arguments), u;
}
function cl() {
  var t = x0().unknown(void 0), e = t.domain, n = t.range, r = 0, u = 1, l, c, s = !1, h = 0, d = 0, y = 0.5;
  delete t.unknown;
  function p() {
    var g = e().length, x = u < r, O = x ? u : r, S = x ? r : u;
    l = (S - O) / Math.max(1, g - h + d * 2), s && (l = Math.floor(l)), O += (S - O - l * (g - h)) * y, c = l * (1 - h), s && (O = Math.round(O), c = Math.round(c));
    var b = w8(g).map(function(A) {
      return O + l * A;
    });
    return n(x ? b.reverse() : b);
  }
  return t.domain = function(g) {
    return arguments.length ? (e(g), p()) : e();
  }, t.range = function(g) {
    return arguments.length ? ([r, u] = g, r = +r, u = +u, p()) : [r, u];
  }, t.rangeRound = function(g) {
    return [r, u] = g, r = +r, u = +u, s = !0, p();
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
    return cl(e(), [r, u]).round(s).paddingInner(h).paddingOuter(d).align(y);
  }, Pn.apply(p(), arguments);
}
function sC(t) {
  var e = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
    return sC(e());
  }, t;
}
function Wo() {
  return sC(cl.apply(null, arguments).paddingInner(1));
}
function S0(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function hC(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function kl() {
}
var fl = 0.7, Uf = 1 / fl, iu = "\\s*([+-]?\\d+)\\s*", sl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", T8 = /^#([0-9a-f]{3,8})$/, E8 = new RegExp(`^rgb\\(${iu},${iu},${iu}\\)$`), M8 = new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`), j8 = new RegExp(`^rgba\\(${iu},${iu},${iu},${sl}\\)$`), C8 = new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${sl}\\)$`), D8 = new RegExp(`^hsl\\(${sl},${Wn},${Wn}\\)$`), P8 = new RegExp(`^hsla\\(${sl},${Wn},${Wn},${sl}\\)$`), nE = {
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
S0(kl, hl, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: rE,
  // Deprecated! Use color.formatHex.
  formatHex: rE,
  formatHex8: N8,
  formatHsl: R8,
  formatRgb: aE,
  toString: aE
});
function rE() {
  return this.rgb().formatHex();
}
function N8() {
  return this.rgb().formatHex8();
}
function R8() {
  return dC(this).formatHsl();
}
function aE() {
  return this.rgb().formatRgb();
}
function hl(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = T8.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? iE(e) : n === 3 ? new We(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? pf(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? pf(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = E8.exec(t)) ? new We(e[1], e[2], e[3], 1) : (e = M8.exec(t)) ? new We(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = j8.exec(t)) ? pf(e[1], e[2], e[3], e[4]) : (e = C8.exec(t)) ? pf(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = D8.exec(t)) ? lE(e[1], e[2] / 100, e[3] / 100, 1) : (e = P8.exec(t)) ? lE(e[1], e[2] / 100, e[3] / 100, e[4]) : nE.hasOwnProperty(t) ? iE(nE[t]) : t === "transparent" ? new We(NaN, NaN, NaN, 0) : null;
}
function iE(t) {
  return new We(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function pf(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new We(t, e, n, r);
}
function q8(t) {
  return t instanceof kl || (t = hl(t)), t ? (t = t.rgb(), new We(t.r, t.g, t.b, t.opacity)) : new We();
}
function Wg(t, e, n, r) {
  return arguments.length === 1 ? q8(t) : new We(t, e, n, r ?? 1);
}
function We(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
S0(We, Wg, hC(kl, {
  brighter(t) {
    return t = t == null ? Uf : Math.pow(Uf, t), new We(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fl : Math.pow(fl, t), new We(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new We(Qa(this.r), Qa(this.g), Qa(this.b), Hf(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: uE,
  // Deprecated! Use color.formatHex.
  formatHex: uE,
  formatHex8: z8,
  formatRgb: oE,
  toString: oE
}));
function uE() {
  return `#${Ka(this.r)}${Ka(this.g)}${Ka(this.b)}`;
}
function z8() {
  return `#${Ka(this.r)}${Ka(this.g)}${Ka(this.b)}${Ka((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function oE() {
  const t = Hf(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Qa(this.r)}, ${Qa(this.g)}, ${Qa(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Hf(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Qa(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ka(t) {
  return t = Qa(t), (t < 16 ? "0" : "") + t.toString(16);
}
function lE(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Un(t, e, n, r);
}
function dC(t) {
  if (t instanceof Un) return new Un(t.h, t.s, t.l, t.opacity);
  if (t instanceof kl || (t = hl(t)), !t) return new Un();
  if (t instanceof Un) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, u = Math.min(e, n, r), l = Math.max(e, n, r), c = NaN, s = l - u, h = (l + u) / 2;
  return s ? (e === l ? c = (n - r) / s + (n < r) * 6 : n === l ? c = (r - e) / s + 2 : c = (e - n) / s + 4, s /= h < 0.5 ? l + u : 2 - l - u, c *= 60) : s = h > 0 && h < 1 ? 0 : c, new Un(c, s, h, t.opacity);
}
function $8(t, e, n, r) {
  return arguments.length === 1 ? dC(t) : new Un(t, e, n, r ?? 1);
}
function Un(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
S0(Un, $8, hC(kl, {
  brighter(t) {
    return t = t == null ? Uf : Math.pow(Uf, t), new Un(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fl : Math.pow(fl, t), new Un(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, u = 2 * n - r;
    return new We(
      jm(t >= 240 ? t - 240 : t + 120, u, r),
      jm(t, u, r),
      jm(t < 120 ? t + 240 : t - 120, u, r),
      this.opacity
    );
  },
  clamp() {
    return new Un(cE(this.h), yf(this.s), yf(this.l), Hf(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Hf(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${cE(this.h)}, ${yf(this.s) * 100}%, ${yf(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function cE(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function yf(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function jm(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const _0 = (t) => () => t;
function B8(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function L8(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function k8(t) {
  return (t = +t) == 1 ? vC : function(e, n) {
    return n - e ? L8(e, n, t) : _0(isNaN(e) ? n : e);
  };
}
function vC(t, e) {
  var n = e - t;
  return n ? B8(t, n) : _0(isNaN(t) ? e : t);
}
const fE = (function t(e) {
  var n = k8(e);
  function r(u, l) {
    var c = n((u = Wg(u)).r, (l = Wg(l)).r), s = n(u.g, l.g), h = n(u.b, l.b), d = vC(u.opacity, l.opacity);
    return function(y) {
      return u.r = c(y), u.g = s(y), u.b = h(y), u.opacity = d(y), u + "";
    };
  }
  return r.gamma = t, r;
})(1);
function U8(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), u;
  return function(l) {
    for (u = 0; u < n; ++u) r[u] = t[u] * (1 - l) + e[u] * l;
    return r;
  };
}
function H8(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function I8(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, u = new Array(r), l = new Array(n), c;
  for (c = 0; c < r; ++c) u[c] = Bu(t[c], e[c]);
  for (; c < n; ++c) l[c] = e[c];
  return function(s) {
    for (c = 0; c < r; ++c) l[c] = u[c](s);
    return l;
  };
}
function G8(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function If(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Y8(t, e) {
  var n = {}, r = {}, u;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (u in e)
    u in t ? n[u] = Bu(t[u], e[u]) : r[u] = e[u];
  return function(l) {
    for (u in n) r[u] = n[u](l);
    return r;
  };
}
var Jg = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cm = new RegExp(Jg.source, "g");
function X8(t) {
  return function() {
    return t;
  };
}
function K8(t) {
  return function(e) {
    return t(e) + "";
  };
}
function V8(t, e) {
  var n = Jg.lastIndex = Cm.lastIndex = 0, r, u, l, c = -1, s = [], h = [];
  for (t = t + "", e = e + ""; (r = Jg.exec(t)) && (u = Cm.exec(e)); )
    (l = u.index) > n && (l = e.slice(n, l), s[c] ? s[c] += l : s[++c] = l), (r = r[0]) === (u = u[0]) ? s[c] ? s[c] += u : s[++c] = u : (s[++c] = null, h.push({ i: c, x: If(r, u) })), n = Cm.lastIndex;
  return n < e.length && (l = e.slice(n), s[c] ? s[c] += l : s[++c] = l), s.length < 2 ? h[0] ? K8(h[0].x) : X8(e) : (e = h.length, function(d) {
    for (var y = 0, p; y < e; ++y) s[(p = h[y]).i] = p.x(d);
    return s.join("");
  });
}
function Bu(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? _0(e) : (n === "number" ? If : n === "string" ? (r = hl(e)) ? (e = r, fE) : V8 : e instanceof hl ? fE : e instanceof Date ? G8 : H8(e) ? U8 : Array.isArray(e) ? I8 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Y8 : If)(t, e);
}
function O0(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function F8(t, e) {
  e === void 0 && (e = t, t = Bu);
  for (var n = 0, r = e.length - 1, u = e[0], l = new Array(r < 0 ? 0 : r); n < r; ) l[n] = t(u, u = e[++n]);
  return function(c) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(c *= r)));
    return l[s](c - s);
  };
}
function Z8(t) {
  return function() {
    return t;
  };
}
function Gf(t) {
  return +t;
}
var sE = [0, 1];
function Ie(t) {
  return t;
}
function tb(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Z8(isNaN(e) ? NaN : 0.5);
}
function Q8(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function W8(t, e, n) {
  var r = t[0], u = t[1], l = e[0], c = e[1];
  return u < r ? (r = tb(u, r), l = n(c, l)) : (r = tb(r, u), l = n(l, c)), function(s) {
    return l(r(s));
  };
}
function J8(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, u = new Array(r), l = new Array(r), c = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < r; )
    u[c] = tb(t[c], t[c + 1]), l[c] = n(e[c], e[c + 1]);
  return function(s) {
    var h = Ll(t, s, 1, r) - 1;
    return l[h](u[h](s));
  };
}
function Ul(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Bs() {
  var t = sE, e = sE, n = Bu, r, u, l, c = Ie, s, h, d;
  function y() {
    var g = Math.min(t.length, e.length);
    return c !== Ie && (c = Q8(t[0], t[g - 1])), s = g > 2 ? J8 : W8, h = d = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? l : (h || (h = s(t.map(r), e, n)))(r(c(g)));
  }
  return p.invert = function(g) {
    return c(u((d || (d = s(e, t.map(r), If)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (t = Array.from(g, Gf), y()) : t.slice();
  }, p.range = function(g) {
    return arguments.length ? (e = Array.from(g), y()) : e.slice();
  }, p.rangeRound = function(g) {
    return e = Array.from(g), n = O0, y();
  }, p.clamp = function(g) {
    return arguments.length ? (c = g ? !0 : Ie, y()) : c !== Ie;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, y()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (l = g, p) : l;
  }, function(g, x) {
    return r = g, u = x, y();
  };
}
function A0() {
  return Bs()(Ie, Ie);
}
function t4(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Yf(t, e) {
  if (!isFinite(t) || t === 0) return null;
  var n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"), r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function vu(t) {
  return t = Yf(Math.abs(t)), t ? t[1] : NaN;
}
function e4(t, e) {
  return function(n, r) {
    for (var u = n.length, l = [], c = 0, s = t[0], h = 0; u > 0 && s > 0 && (h + s + 1 > r && (s = Math.max(1, r - h)), l.push(n.substring(u -= s, u + s)), !((h += s + 1) > r)); )
      s = t[c = (c + 1) % t.length];
    return l.reverse().join(e);
  };
}
function n4(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var r4 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function dl(t) {
  if (!(e = r4.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new w0({
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
dl.prototype = w0.prototype;
function w0(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
w0.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function a4(t) {
  t: for (var e = t.length, n = 1, r = -1, u; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = u = n;
        break;
      case "0":
        r === 0 && (r = n), u = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(u + 1) : t;
}
var Xf;
function i4(t, e) {
  var n = Yf(t, e);
  if (!n) return Xf = void 0, t.toPrecision(e);
  var r = n[0], u = n[1], l = u - (Xf = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1, c = r.length;
  return l === c ? r : l > c ? r + new Array(l - c + 1).join("0") : l > 0 ? r.slice(0, l) + "." + r.slice(l) : "0." + new Array(1 - l).join("0") + Yf(t, Math.max(0, e + l - 1))[0];
}
function hE(t, e) {
  var n = Yf(t, e);
  if (!n) return t + "";
  var r = n[0], u = n[1];
  return u < 0 ? "0." + new Array(-u).join("0") + r : r.length > u + 1 ? r.slice(0, u + 1) + "." + r.slice(u + 1) : r + new Array(u - r.length + 2).join("0");
}
const dE = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: t4,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => hE(t * 100, e),
  r: hE,
  s: i4,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function vE(t) {
  return t;
}
var pE = Array.prototype.map, yE = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function u4(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? vE : e4(pE.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", u = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? vE : n4(pE.call(t.numerals, String)), c = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", h = t.nan === void 0 ? "NaN" : t.nan + "";
  function d(p, g) {
    p = dl(p);
    var x = p.fill, O = p.align, S = p.sign, b = p.symbol, A = p.zero, T = p.width, M = p.comma, C = p.precision, w = p.trim, E = p.type;
    E === "n" ? (M = !0, E = "g") : dE[E] || (C === void 0 && (C = 12), w = !0, E = "g"), (A || x === "0" && O === "=") && (A = !0, x = "0", O = "=");
    var D = (g && g.prefix !== void 0 ? g.prefix : "") + (b === "$" ? n : b === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : ""), R = (b === "$" ? r : /[%p]/.test(E) ? c : "") + (g && g.suffix !== void 0 ? g.suffix : ""), z = dE[E], F = /[defgprs%]/.test(E);
    C = C === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function k($) {
      var K = D, Z = R, V, N, I;
      if (E === "c")
        Z = z($) + Z, $ = "";
      else {
        $ = +$;
        var W = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? h : z(Math.abs($), C), w && ($ = a4($)), W && +$ == 0 && S !== "+" && (W = !1), K = (W ? S === "(" ? S : s : S === "-" || S === "(" ? "" : S) + K, Z = (E === "s" && !isNaN($) && Xf !== void 0 ? yE[8 + Xf / 3] : "") + Z + (W && S === "(" ? ")" : ""), F) {
          for (V = -1, N = $.length; ++V < N; )
            if (I = $.charCodeAt(V), 48 > I || I > 57) {
              Z = (I === 46 ? u + $.slice(V + 1) : $.slice(V)) + Z, $ = $.slice(0, V);
              break;
            }
        }
      }
      M && !A && ($ = e($, 1 / 0));
      var ut = K.length + $.length + Z.length, lt = ut < T ? new Array(T - ut + 1).join(x) : "";
      switch (M && A && ($ = e(lt + $, lt.length ? T - Z.length : 1 / 0), lt = ""), O) {
        case "<":
          $ = K + $ + Z + lt;
          break;
        case "=":
          $ = K + lt + $ + Z;
          break;
        case "^":
          $ = lt.slice(0, ut = lt.length >> 1) + K + $ + Z + lt.slice(ut);
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
    var x = Math.max(-8, Math.min(8, Math.floor(vu(g) / 3))) * 3, O = Math.pow(10, -x), S = d((p = dl(p), p.type = "f", p), { suffix: yE[8 + x / 3] });
    return function(b) {
      return S(O * b);
    };
  }
  return {
    format: d,
    formatPrefix: y
  };
}
var mf, T0, pC;
o4({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function o4(t) {
  return mf = u4(t), T0 = mf.format, pC = mf.formatPrefix, mf;
}
function l4(t) {
  return Math.max(0, -vu(Math.abs(t)));
}
function c4(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vu(e) / 3))) * 3 - vu(Math.abs(t)));
}
function f4(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, vu(e) - vu(t)) + 1;
}
function yC(t, e, n, r) {
  var u = Zg(t, e, n), l;
  switch (r = dl(r ?? ",f"), r.type) {
    case "s": {
      var c = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(l = c4(u, c)) && (r.precision = l), pC(r, c);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(l = f4(u, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = l - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(l = l4(u)) && (r.precision = l - (r.type === "%") * 2);
      break;
    }
  }
  return T0(r);
}
function Sa(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Vg(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var u = e();
    return yC(u[0], u[u.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), u = 0, l = r.length - 1, c = r[u], s = r[l], h, d, y = 10;
    for (s < c && (d = c, c = s, s = d, d = u, u = l, l = d); y-- > 0; ) {
      if (d = Fg(c, s, n), d === h)
        return r[u] = c, r[l] = s, e(r);
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
function Kf() {
  var t = A0();
  return t.copy = function() {
    return Ul(t, Kf());
  }, Pn.apply(t, arguments), Sa(t);
}
function mC(t) {
  var e;
  function n(r) {
    return r == null || isNaN(r = +r) ? e : r;
  }
  return n.invert = n, n.domain = n.range = function(r) {
    return arguments.length ? (t = Array.from(r, Gf), n) : t.slice();
  }, n.unknown = function(r) {
    return arguments.length ? (e = r, n) : e;
  }, n.copy = function() {
    return mC(t).unknown(e);
  }, t = arguments.length ? Array.from(t, Gf) : [0, 1], Sa(n);
}
function gC(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, u = t[n], l = t[r], c;
  return l < u && (c = n, n = r, r = c, c = u, u = l, l = c), t[n] = e.floor(u), t[r] = e.ceil(l), t;
}
function mE(t) {
  return Math.log(t);
}
function gE(t) {
  return Math.exp(t);
}
function s4(t) {
  return -Math.log(-t);
}
function h4(t) {
  return -Math.exp(-t);
}
function d4(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function v4(t) {
  return t === 10 ? d4 : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function p4(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), (e) => Math.log(e) / t);
}
function bE(t) {
  return (e, n) => -t(-e, n);
}
function E0(t) {
  const e = t(mE, gE), n = e.domain;
  let r = 10, u, l;
  function c() {
    return u = p4(r), l = v4(r), n()[0] < 0 ? (u = bE(u), l = bE(l), t(s4, h4)) : t(mE, gE), e;
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
    let g = u(d), x = u(y), O, S;
    const b = s == null ? 10 : +s;
    let A = [];
    if (!(r % 1) && x - g < b) {
      if (g = Math.floor(g), x = Math.ceil(x), d > 0) {
        for (; g <= x; ++g)
          for (O = 1; O < r; ++O)
            if (S = g < 0 ? O / l(-g) : O * l(g), !(S < d)) {
              if (S > y) break;
              A.push(S);
            }
      } else for (; g <= x; ++g)
        for (O = r - 1; O >= 1; --O)
          if (S = g > 0 ? O / l(-g) : O * l(g), !(S < d)) {
            if (S > y) break;
            A.push(S);
          }
      A.length * 2 < b && (A = Vg(d, y, b));
    } else
      A = Vg(g, x, Math.min(x - g, b)).map(l);
    return p ? A.reverse() : A;
  }, e.tickFormat = (s, h) => {
    if (s == null && (s = 10), h == null && (h = r === 10 ? "s" : ","), typeof h != "function" && (!(r % 1) && (h = dl(h)).precision == null && (h.trim = !0), h = T0(h)), s === 1 / 0) return h;
    const d = Math.max(1, r * s / e.ticks().length);
    return (y) => {
      let p = y / l(Math.round(u(y)));
      return p * r < r - 0.5 && (p *= r), p <= d ? h(y) : "";
    };
  }, e.nice = () => n(gC(n(), {
    floor: (s) => l(Math.floor(u(s))),
    ceil: (s) => l(Math.ceil(u(s)))
  })), e;
}
function bC() {
  const t = E0(Bs()).domain([1, 10]);
  return t.copy = () => Ul(t, bC()).base(t.base()), Pn.apply(t, arguments), t;
}
function xE(t) {
  return function(e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t));
  };
}
function SE(t) {
  return function(e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
  };
}
function M0(t) {
  var e = 1, n = t(xE(e), SE(e));
  return n.constant = function(r) {
    return arguments.length ? t(xE(e = +r), SE(e)) : e;
  }, Sa(n);
}
function xC() {
  var t = M0(Bs());
  return t.copy = function() {
    return Ul(t, xC()).constant(t.constant());
  }, Pn.apply(t, arguments);
}
function _E(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function y4(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function m4(t) {
  return t < 0 ? -t * t : t * t;
}
function j0(t) {
  var e = t(Ie, Ie), n = 1;
  function r() {
    return n === 1 ? t(Ie, Ie) : n === 0.5 ? t(y4, m4) : t(_E(n), _E(1 / n));
  }
  return e.exponent = function(u) {
    return arguments.length ? (n = +u, r()) : n;
  }, Sa(e);
}
function C0() {
  var t = j0(Bs());
  return t.copy = function() {
    return Ul(t, C0()).exponent(t.exponent());
  }, Pn.apply(t, arguments), t;
}
function g4() {
  return C0.apply(null, arguments).exponent(0.5);
}
function OE(t) {
  return Math.sign(t) * t * t;
}
function b4(t) {
  return Math.sign(t) * Math.sqrt(Math.abs(t));
}
function SC() {
  var t = A0(), e = [0, 1], n = !1, r;
  function u(l) {
    var c = b4(t(l));
    return isNaN(c) ? r : n ? Math.round(c) : c;
  }
  return u.invert = function(l) {
    return t.invert(OE(l));
  }, u.domain = function(l) {
    return arguments.length ? (t.domain(l), u) : t.domain();
  }, u.range = function(l) {
    return arguments.length ? (t.range((e = Array.from(l, Gf)).map(OE)), u) : e.slice();
  }, u.rangeRound = function(l) {
    return u.range(l).round(!0);
  }, u.round = function(l) {
    return arguments.length ? (n = !!l, u) : n;
  }, u.clamp = function(l) {
    return arguments.length ? (t.clamp(l), u) : t.clamp();
  }, u.unknown = function(l) {
    return arguments.length ? (r = l, u) : r;
  }, u.copy = function() {
    return SC(t.domain(), e).round(n).clamp(t.clamp()).unknown(r);
  }, Pn.apply(u, arguments), Sa(u);
}
function _C() {
  var t = [], e = [], n = [], r;
  function u() {
    var c = 0, s = Math.max(1, e.length);
    for (n = new Array(s - 1); ++c < s; ) n[c - 1] = A8(t, c / s);
    return l;
  }
  function l(c) {
    return c == null || isNaN(c = +c) ? r : e[Ll(n, c)];
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
    return t.sort(ga), u();
  }, l.range = function(c) {
    return arguments.length ? (e = Array.from(c), u()) : e.slice();
  }, l.unknown = function(c) {
    return arguments.length ? (r = c, l) : r;
  }, l.quantiles = function() {
    return n.slice();
  }, l.copy = function() {
    return _C().domain(t).range(e).unknown(r);
  }, Pn.apply(l, arguments);
}
function OC() {
  var t = 0, e = 1, n = 1, r = [0.5], u = [0, 1], l;
  function c(h) {
    return h != null && h <= h ? u[Ll(r, h, 0, n)] : l;
  }
  function s() {
    var h = -1;
    for (r = new Array(n); ++h < n; ) r[h] = ((h + 1) * e - (h - n) * t) / (n + 1);
    return c;
  }
  return c.domain = function(h) {
    return arguments.length ? ([t, e] = h, t = +t, e = +e, s()) : [t, e];
  }, c.range = function(h) {
    return arguments.length ? (n = (u = Array.from(h)).length - 1, s()) : u.slice();
  }, c.invertExtent = function(h) {
    var d = u.indexOf(h);
    return d < 0 ? [NaN, NaN] : d < 1 ? [t, r[0]] : d >= n ? [r[n - 1], e] : [r[d - 1], r[d]];
  }, c.unknown = function(h) {
    return arguments.length && (l = h), c;
  }, c.thresholds = function() {
    return r.slice();
  }, c.copy = function() {
    return OC().domain([t, e]).range(u).unknown(l);
  }, Pn.apply(Sa(c), arguments);
}
function AC() {
  var t = [0.5], e = [0, 1], n, r = 1;
  function u(l) {
    return l != null && l <= l ? e[Ll(t, l, 0, r)] : n;
  }
  return u.domain = function(l) {
    return arguments.length ? (t = Array.from(l), r = Math.min(t.length, e.length - 1), u) : t.slice();
  }, u.range = function(l) {
    return arguments.length ? (e = Array.from(l), r = Math.min(t.length, e.length - 1), u) : e.slice();
  }, u.invertExtent = function(l) {
    var c = e.indexOf(l);
    return [t[c - 1], t[c]];
  }, u.unknown = function(l) {
    return arguments.length ? (n = l, u) : n;
  }, u.copy = function() {
    return AC().domain(t).range(e).unknown(n);
  }, Pn.apply(u, arguments);
}
const Dm = /* @__PURE__ */ new Date(), Pm = /* @__PURE__ */ new Date();
function Oe(t, e, n, r) {
  function u(l) {
    return t(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return u.floor = (l) => (t(l = /* @__PURE__ */ new Date(+l)), l), u.ceil = (l) => (t(l = new Date(l - 1)), e(l, 1), t(l), l), u.round = (l) => {
    const c = u(l), s = u.ceil(l);
    return l - c < s - l ? c : s;
  }, u.offset = (l, c) => (e(l = /* @__PURE__ */ new Date(+l), c == null ? 1 : Math.floor(c)), l), u.range = (l, c, s) => {
    const h = [];
    if (l = u.ceil(l), s = s == null ? 1 : Math.floor(s), !(l < c) || !(s > 0)) return h;
    let d;
    do
      h.push(d = /* @__PURE__ */ new Date(+l)), e(l, s), t(l);
    while (d < l && l < c);
    return h;
  }, u.filter = (l) => Oe((c) => {
    if (c >= c) for (; t(c), !l(c); ) c.setTime(c - 1);
  }, (c, s) => {
    if (c >= c)
      if (s < 0) for (; ++s <= 0; )
        for (; e(c, -1), !l(c); )
          ;
      else for (; --s >= 0; )
        for (; e(c, 1), !l(c); )
          ;
  }), n && (u.count = (l, c) => (Dm.setTime(+l), Pm.setTime(+c), t(Dm), t(Pm), Math.floor(n(Dm, Pm))), u.every = (l) => (l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? u.filter(r ? (c) => r(c) % l === 0 : (c) => u.count(0, c) % l === 0) : u)), u;
}
const Vf = Oe(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
Vf.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? Oe((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : Vf);
Vf.range;
const wr = 1e3, Mn = wr * 60, Tr = Mn * 60, Rr = Tr * 24, D0 = Rr * 7, AE = Rr * 30, Nm = Rr * 365, Va = Oe((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * wr);
}, (t, e) => (e - t) / wr, (t) => t.getUTCSeconds());
Va.range;
const P0 = Oe((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * wr);
}, (t, e) => {
  t.setTime(+t + e * Mn);
}, (t, e) => (e - t) / Mn, (t) => t.getMinutes());
P0.range;
const N0 = Oe((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * Mn);
}, (t, e) => (e - t) / Mn, (t) => t.getUTCMinutes());
N0.range;
const R0 = Oe((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * wr - t.getMinutes() * Mn);
}, (t, e) => {
  t.setTime(+t + e * Tr);
}, (t, e) => (e - t) / Tr, (t) => t.getHours());
R0.range;
const q0 = Oe((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * Tr);
}, (t, e) => (e - t) / Tr, (t) => t.getUTCHours());
q0.range;
const Hl = Oe(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Mn) / Rr,
  (t) => t.getDate() - 1
);
Hl.range;
const Ls = Oe((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Rr, (t) => t.getUTCDate() - 1);
Ls.range;
const wC = Oe((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Rr, (t) => Math.floor(t / Rr));
wC.range;
function oi(t) {
  return Oe((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * Mn) / D0);
}
const ks = oi(0), Ff = oi(1), x4 = oi(2), S4 = oi(3), pu = oi(4), _4 = oi(5), O4 = oi(6);
ks.range;
Ff.range;
x4.range;
S4.range;
pu.range;
_4.range;
O4.range;
function li(t) {
  return Oe((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / D0);
}
const Us = li(0), Zf = li(1), A4 = li(2), w4 = li(3), yu = li(4), T4 = li(5), E4 = li(6);
Us.range;
Zf.range;
A4.range;
w4.range;
yu.range;
T4.range;
E4.range;
const z0 = Oe((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
z0.range;
const $0 = Oe((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
$0.range;
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
function TC(t, e, n, r, u, l) {
  const c = [
    [Va, 1, wr],
    [Va, 5, 5 * wr],
    [Va, 15, 15 * wr],
    [Va, 30, 30 * wr],
    [l, 1, Mn],
    [l, 5, 5 * Mn],
    [l, 15, 15 * Mn],
    [l, 30, 30 * Mn],
    [u, 1, Tr],
    [u, 3, 3 * Tr],
    [u, 6, 6 * Tr],
    [u, 12, 12 * Tr],
    [r, 1, Rr],
    [r, 2, 2 * Rr],
    [n, 1, D0],
    [e, 1, AE],
    [e, 3, 3 * AE],
    [t, 1, Nm]
  ];
  function s(d, y, p) {
    const g = y < d;
    g && ([d, y] = [y, d]);
    const x = p && typeof p.range == "function" ? p : h(d, y, p), O = x ? x.range(d, +y + 1) : [];
    return g ? O.reverse() : O;
  }
  function h(d, y, p) {
    const g = Math.abs(y - d) / p, x = b0(([, , b]) => b).right(c, g);
    if (x === c.length) return t.every(Zg(d / Nm, y / Nm, p));
    if (x === 0) return Vf.every(Math.max(Zg(d, y, p), 1));
    const [O, S] = c[g / c[x - 1][2] < c[x][2] / g ? x - 1 : x];
    return O.every(S);
  }
  return [s, h];
}
const [M4, j4] = TC(zr, $0, Us, wC, q0, N0), [C4, D4] = TC(qr, z0, ks, Hl, R0, P0);
function Rm(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function qm(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Lo(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function P4(t) {
  var e = t.dateTime, n = t.date, r = t.time, u = t.periods, l = t.days, c = t.shortDays, s = t.months, h = t.shortMonths, d = ko(u), y = Uo(u), p = ko(l), g = Uo(l), x = ko(c), O = Uo(c), S = ko(s), b = Uo(s), A = ko(h), T = Uo(h), M = {
    a: I,
    A: W,
    b: ut,
    B: lt,
    c: null,
    d: CE,
    e: CE,
    f: e6,
    g: s6,
    G: d6,
    H: W4,
    I: J4,
    j: t6,
    L: EC,
    m: n6,
    M: r6,
    p: P,
    q: U,
    Q: NE,
    s: RE,
    S: a6,
    u: i6,
    U: u6,
    V: o6,
    w: l6,
    W: c6,
    x: null,
    X: null,
    y: f6,
    Y: h6,
    Z: v6,
    "%": PE
  }, C = {
    a: et,
    A: ft,
    b: vt,
    B: mt,
    c: null,
    d: DE,
    e: DE,
    f: g6,
    g: M6,
    G: C6,
    H: p6,
    I: y6,
    j: m6,
    L: jC,
    m: b6,
    M: x6,
    p: jt,
    q: kt,
    Q: NE,
    s: RE,
    S: S6,
    u: _6,
    U: O6,
    V: A6,
    w: w6,
    W: T6,
    x: null,
    X: null,
    y: E6,
    Y: j6,
    Z: D6,
    "%": PE
  }, w = {
    a: F,
    A: k,
    b: $,
    B: K,
    c: Z,
    d: ME,
    e: ME,
    f: V4,
    g: EE,
    G: TE,
    H: jE,
    I: jE,
    j: G4,
    L: K4,
    m: I4,
    M: Y4,
    p: z,
    q: H4,
    Q: Z4,
    s: Q4,
    S: X4,
    u: $4,
    U: B4,
    V: L4,
    w: z4,
    W: k4,
    x: V,
    X: N,
    y: EE,
    Y: TE,
    Z: U4,
    "%": F4
  };
  M.x = E(n, M), M.X = E(r, M), M.c = E(e, M), C.x = E(n, C), C.X = E(r, C), C.c = E(e, C);
  function E(ct, xt) {
    return function(St) {
      var ot = [], te = -1, wt = 0, ue = ct.length, oe, ze, Nn;
      for (St instanceof Date || (St = /* @__PURE__ */ new Date(+St)); ++te < ue; )
        ct.charCodeAt(te) === 37 && (ot.push(ct.slice(wt, te)), (ze = wE[oe = ct.charAt(++te)]) != null ? oe = ct.charAt(++te) : ze = oe === "e" ? " " : "0", (Nn = xt[oe]) && (oe = Nn(St, ze)), ot.push(oe), wt = te + 1);
      return ot.push(ct.slice(wt, te)), ot.join("");
    };
  }
  function D(ct, xt) {
    return function(St) {
      var ot = Lo(1900, void 0, 1), te = R(ot, ct, St += "", 0), wt, ue;
      if (te != St.length) return null;
      if ("Q" in ot) return new Date(ot.Q);
      if ("s" in ot) return new Date(ot.s * 1e3 + ("L" in ot ? ot.L : 0));
      if (xt && !("Z" in ot) && (ot.Z = 0), "p" in ot && (ot.H = ot.H % 12 + ot.p * 12), ot.m === void 0 && (ot.m = "q" in ot ? ot.q : 0), "V" in ot) {
        if (ot.V < 1 || ot.V > 53) return null;
        "w" in ot || (ot.w = 1), "Z" in ot ? (wt = qm(Lo(ot.y, 0, 1)), ue = wt.getUTCDay(), wt = ue > 4 || ue === 0 ? Zf.ceil(wt) : Zf(wt), wt = Ls.offset(wt, (ot.V - 1) * 7), ot.y = wt.getUTCFullYear(), ot.m = wt.getUTCMonth(), ot.d = wt.getUTCDate() + (ot.w + 6) % 7) : (wt = Rm(Lo(ot.y, 0, 1)), ue = wt.getDay(), wt = ue > 4 || ue === 0 ? Ff.ceil(wt) : Ff(wt), wt = Hl.offset(wt, (ot.V - 1) * 7), ot.y = wt.getFullYear(), ot.m = wt.getMonth(), ot.d = wt.getDate() + (ot.w + 6) % 7);
      } else ("W" in ot || "U" in ot) && ("w" in ot || (ot.w = "u" in ot ? ot.u % 7 : "W" in ot ? 1 : 0), ue = "Z" in ot ? qm(Lo(ot.y, 0, 1)).getUTCDay() : Rm(Lo(ot.y, 0, 1)).getDay(), ot.m = 0, ot.d = "W" in ot ? (ot.w + 6) % 7 + ot.W * 7 - (ue + 5) % 7 : ot.w + ot.U * 7 - (ue + 6) % 7);
      return "Z" in ot ? (ot.H += ot.Z / 100 | 0, ot.M += ot.Z % 100, qm(ot)) : Rm(ot);
    };
  }
  function R(ct, xt, St, ot) {
    for (var te = 0, wt = xt.length, ue = St.length, oe, ze; te < wt; ) {
      if (ot >= ue) return -1;
      if (oe = xt.charCodeAt(te++), oe === 37) {
        if (oe = xt.charAt(te++), ze = w[oe in wE ? xt.charAt(te++) : oe], !ze || (ot = ze(ct, St, ot)) < 0) return -1;
      } else if (oe != St.charCodeAt(ot++))
        return -1;
    }
    return ot;
  }
  function z(ct, xt, St) {
    var ot = d.exec(xt.slice(St));
    return ot ? (ct.p = y.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function F(ct, xt, St) {
    var ot = x.exec(xt.slice(St));
    return ot ? (ct.w = O.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function k(ct, xt, St) {
    var ot = p.exec(xt.slice(St));
    return ot ? (ct.w = g.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function $(ct, xt, St) {
    var ot = A.exec(xt.slice(St));
    return ot ? (ct.m = T.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function K(ct, xt, St) {
    var ot = S.exec(xt.slice(St));
    return ot ? (ct.m = b.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
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
  function ut(ct) {
    return h[ct.getMonth()];
  }
  function lt(ct) {
    return s[ct.getMonth()];
  }
  function P(ct) {
    return u[+(ct.getHours() >= 12)];
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
    return u[+(ct.getUTCHours() >= 12)];
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
      var xt = E(ct += "", C);
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
var wE = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, N4 = /^%/, R4 = /[\\^$*+?|[\]().{}]/g;
function Bt(t, e, n) {
  var r = t < 0 ? "-" : "", u = (r ? -t : t) + "", l = u.length;
  return r + (l < n ? new Array(n - l + 1).join(e) + u : u);
}
function q4(t) {
  return t.replace(R4, "\\$&");
}
function ko(t) {
  return new RegExp("^(?:" + t.map(q4).join("|") + ")", "i");
}
function Uo(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function z4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function $4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function B4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function L4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function k4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function TE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function EE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function U4(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function H4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function I4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function ME(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function G4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function jE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Y4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function X4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function K4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function V4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function F4(t, e, n) {
  var r = N4.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Z4(t, e, n) {
  var r = Ee.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Q4(t, e, n) {
  var r = Ee.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function CE(t, e) {
  return Bt(t.getDate(), e, 2);
}
function W4(t, e) {
  return Bt(t.getHours(), e, 2);
}
function J4(t, e) {
  return Bt(t.getHours() % 12 || 12, e, 2);
}
function t6(t, e) {
  return Bt(1 + Hl.count(qr(t), t), e, 3);
}
function EC(t, e) {
  return Bt(t.getMilliseconds(), e, 3);
}
function e6(t, e) {
  return EC(t, e) + "000";
}
function n6(t, e) {
  return Bt(t.getMonth() + 1, e, 2);
}
function r6(t, e) {
  return Bt(t.getMinutes(), e, 2);
}
function a6(t, e) {
  return Bt(t.getSeconds(), e, 2);
}
function i6(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function u6(t, e) {
  return Bt(ks.count(qr(t) - 1, t), e, 2);
}
function MC(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? pu(t) : pu.ceil(t);
}
function o6(t, e) {
  return t = MC(t), Bt(pu.count(qr(t), t) + (qr(t).getDay() === 4), e, 2);
}
function l6(t) {
  return t.getDay();
}
function c6(t, e) {
  return Bt(Ff.count(qr(t) - 1, t), e, 2);
}
function f6(t, e) {
  return Bt(t.getFullYear() % 100, e, 2);
}
function s6(t, e) {
  return t = MC(t), Bt(t.getFullYear() % 100, e, 2);
}
function h6(t, e) {
  return Bt(t.getFullYear() % 1e4, e, 4);
}
function d6(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? pu(t) : pu.ceil(t), Bt(t.getFullYear() % 1e4, e, 4);
}
function v6(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + Bt(e / 60 | 0, "0", 2) + Bt(e % 60, "0", 2);
}
function DE(t, e) {
  return Bt(t.getUTCDate(), e, 2);
}
function p6(t, e) {
  return Bt(t.getUTCHours(), e, 2);
}
function y6(t, e) {
  return Bt(t.getUTCHours() % 12 || 12, e, 2);
}
function m6(t, e) {
  return Bt(1 + Ls.count(zr(t), t), e, 3);
}
function jC(t, e) {
  return Bt(t.getUTCMilliseconds(), e, 3);
}
function g6(t, e) {
  return jC(t, e) + "000";
}
function b6(t, e) {
  return Bt(t.getUTCMonth() + 1, e, 2);
}
function x6(t, e) {
  return Bt(t.getUTCMinutes(), e, 2);
}
function S6(t, e) {
  return Bt(t.getUTCSeconds(), e, 2);
}
function _6(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function O6(t, e) {
  return Bt(Us.count(zr(t) - 1, t), e, 2);
}
function CC(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? yu(t) : yu.ceil(t);
}
function A6(t, e) {
  return t = CC(t), Bt(yu.count(zr(t), t) + (zr(t).getUTCDay() === 4), e, 2);
}
function w6(t) {
  return t.getUTCDay();
}
function T6(t, e) {
  return Bt(Zf.count(zr(t) - 1, t), e, 2);
}
function E6(t, e) {
  return Bt(t.getUTCFullYear() % 100, e, 2);
}
function M6(t, e) {
  return t = CC(t), Bt(t.getUTCFullYear() % 100, e, 2);
}
function j6(t, e) {
  return Bt(t.getUTCFullYear() % 1e4, e, 4);
}
function C6(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? yu(t) : yu.ceil(t), Bt(t.getUTCFullYear() % 1e4, e, 4);
}
function D6() {
  return "+0000";
}
function PE() {
  return "%";
}
function NE(t) {
  return +t;
}
function RE(t) {
  return Math.floor(+t / 1e3);
}
var Qi, DC, PC;
P6({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function P6(t) {
  return Qi = P4(t), DC = Qi.format, Qi.parse, PC = Qi.utcFormat, Qi.utcParse, Qi;
}
function N6(t) {
  return new Date(t);
}
function R6(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function B0(t, e, n, r, u, l, c, s, h, d) {
  var y = A0(), p = y.invert, g = y.domain, x = d(".%L"), O = d(":%S"), S = d("%I:%M"), b = d("%I %p"), A = d("%a %d"), T = d("%b %d"), M = d("%B"), C = d("%Y");
  function w(E) {
    return (h(E) < E ? x : s(E) < E ? O : c(E) < E ? S : l(E) < E ? b : r(E) < E ? u(E) < E ? A : T : n(E) < E ? M : C)(E);
  }
  return y.invert = function(E) {
    return new Date(p(E));
  }, y.domain = function(E) {
    return arguments.length ? g(Array.from(E, R6)) : g().map(N6);
  }, y.ticks = function(E) {
    var D = g();
    return t(D[0], D[D.length - 1], E ?? 10);
  }, y.tickFormat = function(E, D) {
    return D == null ? w : d(D);
  }, y.nice = function(E) {
    var D = g();
    return (!E || typeof E.range != "function") && (E = e(D[0], D[D.length - 1], E ?? 10)), E ? g(gC(D, E)) : y;
  }, y.copy = function() {
    return Ul(y, B0(t, e, n, r, u, l, c, s, h, d));
  }, y;
}
function q6() {
  return Pn.apply(B0(C4, D4, qr, z0, ks, Hl, R0, P0, Va, DC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function z6() {
  return Pn.apply(B0(M4, j4, zr, $0, Us, Ls, q0, N0, Va, PC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Hs() {
  var t = 0, e = 1, n, r, u, l, c = Ie, s = !1, h;
  function d(p) {
    return p == null || isNaN(p = +p) ? h : c(u === 0 ? 0.5 : (p = (l(p) - n) * u, s ? Math.max(0, Math.min(1, p)) : p));
  }
  d.domain = function(p) {
    return arguments.length ? ([t, e] = p, n = l(t = +t), r = l(e = +e), u = n === r ? 0 : 1 / (r - n), d) : [t, e];
  }, d.clamp = function(p) {
    return arguments.length ? (s = !!p, d) : s;
  }, d.interpolator = function(p) {
    return arguments.length ? (c = p, d) : c;
  };
  function y(p) {
    return function(g) {
      var x, O;
      return arguments.length ? ([x, O] = g, c = p(x, O), d) : [c(0), c(1)];
    };
  }
  return d.range = y(Bu), d.rangeRound = y(O0), d.unknown = function(p) {
    return arguments.length ? (h = p, d) : h;
  }, function(p) {
    return l = p, n = p(t), r = p(e), u = n === r ? 0 : 1 / (r - n), d;
  };
}
function _a(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function NC() {
  var t = Sa(Hs()(Ie));
  return t.copy = function() {
    return _a(t, NC());
  }, Lr.apply(t, arguments);
}
function RC() {
  var t = E0(Hs()).domain([1, 10]);
  return t.copy = function() {
    return _a(t, RC()).base(t.base());
  }, Lr.apply(t, arguments);
}
function qC() {
  var t = M0(Hs());
  return t.copy = function() {
    return _a(t, qC()).constant(t.constant());
  }, Lr.apply(t, arguments);
}
function L0() {
  var t = j0(Hs());
  return t.copy = function() {
    return _a(t, L0()).exponent(t.exponent());
  }, Lr.apply(t, arguments);
}
function $6() {
  return L0.apply(null, arguments).exponent(0.5);
}
function zC() {
  var t = [], e = Ie;
  function n(r) {
    if (r != null && !isNaN(r = +r)) return e((Ll(t, r, 1) - 1) / (t.length - 1));
  }
  return n.domain = function(r) {
    if (!arguments.length) return t.slice();
    t = [];
    for (let u of r) u != null && !isNaN(u = +u) && t.push(u);
    return t.sort(ga), n;
  }, n.interpolator = function(r) {
    return arguments.length ? (e = r, n) : e;
  }, n.range = function() {
    return t.map((r, u) => e(u / (t.length - 1)));
  }, n.quantiles = function(r) {
    return Array.from({ length: r + 1 }, (u, l) => O8(t, l / r));
  }, n.copy = function() {
    return zC(e).domain(t);
  }, Lr.apply(n, arguments);
}
function Is() {
  var t = 0, e = 0.5, n = 1, r = 1, u, l, c, s, h, d = Ie, y, p = !1, g;
  function x(S) {
    return isNaN(S = +S) ? g : (S = 0.5 + ((S = +y(S)) - l) * (r * S < r * l ? s : h), d(p ? Math.max(0, Math.min(1, S)) : S));
  }
  x.domain = function(S) {
    return arguments.length ? ([t, e, n] = S, u = y(t = +t), l = y(e = +e), c = y(n = +n), s = u === l ? 0 : 0.5 / (l - u), h = l === c ? 0 : 0.5 / (c - l), r = l < u ? -1 : 1, x) : [t, e, n];
  }, x.clamp = function(S) {
    return arguments.length ? (p = !!S, x) : p;
  }, x.interpolator = function(S) {
    return arguments.length ? (d = S, x) : d;
  };
  function O(S) {
    return function(b) {
      var A, T, M;
      return arguments.length ? ([A, T, M] = b, d = F8(S, [A, T, M]), x) : [d(0), d(0.5), d(1)];
    };
  }
  return x.range = O(Bu), x.rangeRound = O(O0), x.unknown = function(S) {
    return arguments.length ? (g = S, x) : g;
  }, function(S) {
    return y = S, u = S(t), l = S(e), c = S(n), s = u === l ? 0 : 0.5 / (l - u), h = l === c ? 0 : 0.5 / (c - l), r = l < u ? -1 : 1, x;
  };
}
function $C() {
  var t = Sa(Is()(Ie));
  return t.copy = function() {
    return _a(t, $C());
  }, Lr.apply(t, arguments);
}
function BC() {
  var t = E0(Is()).domain([0.1, 1, 10]);
  return t.copy = function() {
    return _a(t, BC()).base(t.base());
  }, Lr.apply(t, arguments);
}
function LC() {
  var t = M0(Is());
  return t.copy = function() {
    return _a(t, LC()).constant(t.constant());
  }, Lr.apply(t, arguments);
}
function k0() {
  var t = j0(Is());
  return t.copy = function() {
    return _a(t, k0()).exponent(t.exponent());
  }, Lr.apply(t, arguments);
}
function B6() {
  return k0.apply(null, arguments).exponent(0.5);
}
const qE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: cl,
  scaleDiverging: $C,
  scaleDivergingLog: BC,
  scaleDivergingPow: k0,
  scaleDivergingSqrt: B6,
  scaleDivergingSymlog: LC,
  scaleIdentity: mC,
  scaleImplicit: Qg,
  scaleLinear: Kf,
  scaleLog: bC,
  scaleOrdinal: x0,
  scalePoint: Wo,
  scalePow: C0,
  scaleQuantile: _C,
  scaleQuantize: OC,
  scaleRadial: SC,
  scaleSequential: NC,
  scaleSequentialLog: RC,
  scaleSequentialPow: L0,
  scaleSequentialQuantile: zC,
  scaleSequentialSqrt: $6,
  scaleSequentialSymlog: qC,
  scaleSqrt: g4,
  scaleSymlog: xC,
  scaleThreshold: AC,
  scaleTime: q6,
  scaleUtc: z6,
  tickFormat: yC
}, Symbol.toStringTag, { value: "Module" }));
var zm, zE;
function kC() {
  if (zE) return zm;
  zE = 1;
  var t = Nu();
  function e(n, r, u) {
    for (var l = -1, c = n.length; ++l < c; ) {
      var s = n[l], h = r(s);
      if (h != null && (d === void 0 ? h === h && !t(h) : u(h, d)))
        var d = h, y = s;
    }
    return y;
  }
  return zm = e, zm;
}
var $m, $E;
function L6() {
  if ($E) return $m;
  $E = 1;
  function t(e, n) {
    return e > n;
  }
  return $m = t, $m;
}
var Bm, BE;
function k6() {
  if (BE) return Bm;
  BE = 1;
  var t = kC(), e = L6(), n = $u();
  function r(u) {
    return u && u.length ? t(u, n, e) : void 0;
  }
  return Bm = r, Bm;
}
var U6 = k6();
const ya = /* @__PURE__ */ Qt(U6);
var Lm, LE;
function H6() {
  if (LE) return Lm;
  LE = 1;
  function t(e, n) {
    return e < n;
  }
  return Lm = t, Lm;
}
var km, kE;
function I6() {
  if (kE) return km;
  kE = 1;
  var t = kC(), e = H6(), n = $u();
  function r(u) {
    return u && u.length ? t(u, n, e) : void 0;
  }
  return km = r, km;
}
var G6 = I6();
const Gs = /* @__PURE__ */ Qt(G6);
var Um, UE;
function Y6() {
  if (UE) return Um;
  UE = 1;
  var t = e0(), e = xa(), n = Zj(), r = Je();
  function u(l, c) {
    var s = r(l) ? t : n;
    return s(l, e(c, 3));
  }
  return Um = u, Um;
}
var Hm, HE;
function X6() {
  if (HE) return Hm;
  HE = 1;
  var t = Vj(), e = Y6();
  function n(r, u) {
    return t(e(r, u), 1);
  }
  return Hm = n, Hm;
}
var K6 = X6();
const V6 = /* @__PURE__ */ Qt(K6);
var Im, IE;
function F6() {
  if (IE) return Im;
  IE = 1;
  var t = v0();
  function e(n, r) {
    return t(n, r);
  }
  return Im = e, Im;
}
var Z6 = F6();
const mu = /* @__PURE__ */ Qt(Z6);
var Lu = 1e9, Q6 = {
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
}, H0, ie = !0, Dn = "[DecimalError] ", Wa = Dn + "Invalid argument: ", U0 = Dn + "Exponent out of range: ", ku = Math.floor, Ga = Math.pow, W6 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vn, Te = 1e7, re = 7, UC = 9007199254740991, Qf = ku(UC / re), ht = {};
ht.absoluteValue = ht.abs = function() {
  var t = new this.constructor(this);
  return t.s && (t.s = 1), t;
};
ht.comparedTo = ht.cmp = function(t) {
  var e, n, r, u, l = this;
  if (t = new l.constructor(t), l.s !== t.s) return l.s || -t.s;
  if (l.e !== t.e) return l.e > t.e ^ l.s < 0 ? 1 : -1;
  for (r = l.d.length, u = t.d.length, e = 0, n = r < u ? r : u; e < n; ++e)
    if (l.d[e] !== t.d[e]) return l.d[e] > t.d[e] ^ l.s < 0 ? 1 : -1;
  return r === u ? 0 : r > u ^ l.s < 0 ? 1 : -1;
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
  var e, n = this, r = n.constructor, u = r.precision, l = u + 5;
  if (t === void 0)
    t = new r(10);
  else if (t = new r(t), t.s < 1 || t.eq(vn)) throw Error(Dn + "NaN");
  if (n.s < 1) throw Error(Dn + (n.s ? "NaN" : "-Infinity"));
  return n.eq(vn) ? new r(0) : (ie = !1, e = Pr(vl(n, l), vl(t, l), l), ie = !0, Zt(e, u));
};
ht.minus = ht.sub = function(t) {
  var e = this;
  return t = new e.constructor(t), e.s == t.s ? GC(e, t) : HC(e, (t.s = -t.s, t));
};
ht.modulo = ht.mod = function(t) {
  var e, n = this, r = n.constructor, u = r.precision;
  if (t = new r(t), !t.s) throw Error(Dn + "NaN");
  return n.s ? (ie = !1, e = Pr(n, t, 0, 1).times(t), ie = !0, n.minus(e)) : Zt(new r(n), u);
};
ht.naturalExponential = ht.exp = function() {
  return IC(this);
};
ht.naturalLogarithm = ht.ln = function() {
  return vl(this);
};
ht.negated = ht.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s || 0, t;
};
ht.plus = ht.add = function(t) {
  var e = this;
  return t = new e.constructor(t), e.s == t.s ? HC(e, t) : GC(e, (t.s = -t.s, t));
};
ht.precision = ht.sd = function(t) {
  var e, n, r, u = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(Wa + t);
  if (e = ge(u) + 1, r = u.d.length - 1, n = r * re + 1, r = u.d[r], r) {
    for (; r % 10 == 0; r /= 10) n--;
    for (r = u.d[0]; r >= 10; r /= 10) n++;
  }
  return t && e > n ? e : n;
};
ht.squareRoot = ht.sqrt = function() {
  var t, e, n, r, u, l, c, s = this, h = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new h(0);
    throw Error(Dn + "NaN");
  }
  for (t = ge(s), ie = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (e = Zn(s.d), (e.length + t) % 2 == 0 && (e += "0"), u = Math.sqrt(e), t = ku((t + 1) / 2) - (t < 0 || t % 2), u == 1 / 0 ? e = "5e" + t : (e = u.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + t), r = new h(e)) : r = new h(u.toString()), n = h.precision, u = c = n + 3; ; )
    if (l = r, r = l.plus(Pr(s, l, c + 2)).times(0.5), Zn(l.d).slice(0, c) === (e = Zn(r.d)).slice(0, c)) {
      if (e = e.slice(c - 3, c + 1), u == c && e == "4999") {
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
  var e, n, r, u, l, c, s, h, d, y = this, p = y.constructor, g = y.d, x = (t = new p(t)).d;
  if (!y.s || !t.s) return new p(0);
  for (t.s *= y.s, n = y.e + t.e, h = g.length, d = x.length, h < d && (l = g, g = x, x = l, c = h, h = d, d = c), l = [], c = h + d, r = c; r--; ) l.push(0);
  for (r = d; --r >= 0; ) {
    for (e = 0, u = h + r; u > r; )
      s = l[u] + x[r] * g[u - r - 1] + e, l[u--] = s % Te | 0, e = s / Te | 0;
    l[u] = (l[u] + e) % Te | 0;
  }
  for (; !l[--c]; ) l.pop();
  return e ? ++n : l.shift(), t.d = l, t.e = n, ie ? Zt(t, p.precision) : t;
};
ht.toDecimalPlaces = ht.todp = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (er(t, 0, Lu), e === void 0 ? e = r.rounding : er(e, 0, 8), Zt(n, t + ge(n) + 1, e));
};
ht.toExponential = function(t, e) {
  var n, r = this, u = r.constructor;
  return t === void 0 ? n = ni(r, !0) : (er(t, 0, Lu), e === void 0 ? e = u.rounding : er(e, 0, 8), r = Zt(new u(r), t + 1, e), n = ni(r, !0, t + 1)), n;
};
ht.toFixed = function(t, e) {
  var n, r, u = this, l = u.constructor;
  return t === void 0 ? ni(u) : (er(t, 0, Lu), e === void 0 ? e = l.rounding : er(e, 0, 8), r = Zt(new l(u), t + ge(u) + 1, e), n = ni(r.abs(), !1, t + ge(r) + 1), u.isneg() && !u.isZero() ? "-" + n : n);
};
ht.toInteger = ht.toint = function() {
  var t = this, e = t.constructor;
  return Zt(new e(t), ge(t) + 1, e.rounding);
};
ht.toNumber = function() {
  return +this;
};
ht.toPower = ht.pow = function(t) {
  var e, n, r, u, l, c, s = this, h = s.constructor, d = 12, y = +(t = new h(t));
  if (!t.s) return new h(vn);
  if (s = new h(s), !s.s) {
    if (t.s < 1) throw Error(Dn + "Infinity");
    return s;
  }
  if (s.eq(vn)) return s;
  if (r = h.precision, t.eq(vn)) return Zt(s, r);
  if (e = t.e, n = t.d.length - 1, c = e >= n, l = s.s, c) {
    if ((n = y < 0 ? -y : y) <= UC) {
      for (u = new h(vn), e = Math.ceil(r / re + 4), ie = !1; n % 2 && (u = u.times(s), YE(u.d, e)), n = ku(n / 2), n !== 0; )
        s = s.times(s), YE(s.d, e);
      return ie = !0, t.s < 0 ? new h(vn).div(u) : Zt(u, r);
    }
  } else if (l < 0) throw Error(Dn + "NaN");
  return l = l < 0 && t.d[Math.max(e, n)] & 1 ? -1 : 1, s.s = 1, ie = !1, u = t.times(vl(s, r + d)), ie = !0, u = IC(u), u.s = l, u;
};
ht.toPrecision = function(t, e) {
  var n, r, u = this, l = u.constructor;
  return t === void 0 ? (n = ge(u), r = ni(u, n <= l.toExpNeg || n >= l.toExpPos)) : (er(t, 1, Lu), e === void 0 ? e = l.rounding : er(e, 0, 8), u = Zt(new l(u), t, e), n = ge(u), r = ni(u, t <= n || n <= l.toExpNeg, t)), r;
};
ht.toSignificantDigits = ht.tosd = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (er(t, 1, Lu), e === void 0 ? e = r.rounding : er(e, 0, 8)), Zt(new r(n), t, e);
};
ht.toString = ht.valueOf = ht.val = ht.toJSON = ht[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var t = this, e = ge(t), n = t.constructor;
  return ni(t, e <= n.toExpNeg || e >= n.toExpPos);
};
function HC(t, e) {
  var n, r, u, l, c, s, h, d, y = t.constructor, p = y.precision;
  if (!t.s || !e.s)
    return e.s || (e = new y(t)), ie ? Zt(e, p) : e;
  if (h = t.d, d = e.d, c = t.e, u = e.e, h = h.slice(), l = c - u, l) {
    for (l < 0 ? (r = h, l = -l, s = d.length) : (r = d, u = c, s = h.length), c = Math.ceil(p / re), s = c > s ? c + 1 : s + 1, l > s && (l = s, r.length = 1), r.reverse(); l--; ) r.push(0);
    r.reverse();
  }
  for (s = h.length, l = d.length, s - l < 0 && (l = s, r = d, d = h, h = r), n = 0; l; )
    n = (h[--l] = h[l] + d[l] + n) / Te | 0, h[l] %= Te;
  for (n && (h.unshift(n), ++u), s = h.length; h[--s] == 0; ) h.pop();
  return e.d = h, e.e = u, ie ? Zt(e, p) : e;
}
function er(t, e, n) {
  if (t !== ~~t || t < e || t > n)
    throw Error(Wa + t);
}
function Zn(t) {
  var e, n, r, u = t.length - 1, l = "", c = t[0];
  if (u > 0) {
    for (l += c, e = 1; e < u; e++)
      r = t[e] + "", n = re - r.length, n && (l += va(n)), l += r;
    c = t[e], r = c + "", n = re - r.length, n && (l += va(n));
  } else if (c === 0)
    return "0";
  for (; c % 10 === 0; ) c /= 10;
  return l + c;
}
var Pr = /* @__PURE__ */ (function() {
  function t(r, u) {
    var l, c = 0, s = r.length;
    for (r = r.slice(); s--; )
      l = r[s] * u + c, r[s] = l % Te | 0, c = l / Te | 0;
    return c && r.unshift(c), r;
  }
  function e(r, u, l, c) {
    var s, h;
    if (l != c)
      h = l > c ? 1 : -1;
    else
      for (s = h = 0; s < l; s++)
        if (r[s] != u[s]) {
          h = r[s] > u[s] ? 1 : -1;
          break;
        }
    return h;
  }
  function n(r, u, l) {
    for (var c = 0; l--; )
      r[l] -= c, c = r[l] < u[l] ? 1 : 0, r[l] = c * Te + r[l] - u[l];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, u, l, c) {
    var s, h, d, y, p, g, x, O, S, b, A, T, M, C, w, E, D, R, z = r.constructor, F = r.s == u.s ? 1 : -1, k = r.d, $ = u.d;
    if (!r.s) return new z(r);
    if (!u.s) throw Error(Dn + "Division by zero");
    for (h = r.e - u.e, D = $.length, w = k.length, x = new z(F), O = x.d = [], d = 0; $[d] == (k[d] || 0); ) ++d;
    if ($[d] > (k[d] || 0) && --h, l == null ? T = l = z.precision : c ? T = l + (ge(r) - ge(u)) + 1 : T = l, T < 0) return new z(0);
    if (T = T / re + 2 | 0, d = 0, D == 1)
      for (y = 0, $ = $[0], T++; (d < w || y) && T--; d++)
        M = y * Te + (k[d] || 0), O[d] = M / $ | 0, y = M % $ | 0;
    else {
      for (y = Te / ($[0] + 1) | 0, y > 1 && ($ = t($, y), k = t(k, y), D = $.length, w = k.length), C = D, S = k.slice(0, D), b = S.length; b < D; ) S[b++] = 0;
      R = $.slice(), R.unshift(0), E = $[0], $[1] >= Te / 2 && ++E;
      do
        y = 0, s = e($, S, D, b), s < 0 ? (A = S[0], D != b && (A = A * Te + (S[1] || 0)), y = A / E | 0, y > 1 ? (y >= Te && (y = Te - 1), p = t($, y), g = p.length, b = S.length, s = e(p, S, g, b), s == 1 && (y--, n(p, D < g ? R : $, g))) : (y == 0 && (s = y = 1), p = $.slice()), g = p.length, g < b && p.unshift(0), n(S, p, b), s == -1 && (b = S.length, s = e($, S, D, b), s < 1 && (y++, n(S, D < b ? R : $, b))), b = S.length) : s === 0 && (y++, S = [0]), O[d++] = y, s && S[0] ? S[b++] = k[C] || 0 : (S = [k[C]], b = 1);
      while ((C++ < w || S[0] !== void 0) && T--);
    }
    return O[0] || O.shift(), x.e = h, Zt(x, c ? l + ge(x) + 1 : l);
  };
})();
function IC(t, e) {
  var n, r, u, l, c, s, h = 0, d = 0, y = t.constructor, p = y.precision;
  if (ge(t) > 16) throw Error(U0 + ge(t));
  if (!t.s) return new y(vn);
  for (ie = !1, s = p, c = new y(0.03125); t.abs().gte(0.1); )
    t = t.times(c), d += 5;
  for (r = Math.log(Ga(2, d)) / Math.LN10 * 2 + 5 | 0, s += r, n = u = l = new y(vn), y.precision = s; ; ) {
    if (u = Zt(u.times(t), s), n = n.times(++h), c = l.plus(Pr(u, n, s)), Zn(c.d).slice(0, s) === Zn(l.d).slice(0, s)) {
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
function Gm(t, e, n) {
  if (e > t.LN10.sd())
    throw ie = !0, n && (t.precision = n), Error(Dn + "LN10 precision limit exceeded");
  return Zt(new t(t.LN10), e);
}
function va(t) {
  for (var e = ""; t--; ) e += "0";
  return e;
}
function vl(t, e) {
  var n, r, u, l, c, s, h, d, y, p = 1, g = 10, x = t, O = x.d, S = x.constructor, b = S.precision;
  if (x.s < 1) throw Error(Dn + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(vn)) return new S(0);
  if (e == null ? (ie = !1, d = b) : d = e, x.eq(10))
    return e == null && (ie = !0), Gm(S, d);
  if (d += g, S.precision = d, n = Zn(O), r = n.charAt(0), l = ge(x), Math.abs(l) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      x = x.times(t), n = Zn(x.d), r = n.charAt(0), p++;
    l = ge(x), r > 1 ? (x = new S("0." + n), l++) : x = new S(r + "." + n.slice(1));
  } else
    return h = Gm(S, d + 2, b).times(l + ""), x = vl(new S(r + "." + n.slice(1)), d - g).plus(h), S.precision = b, e == null ? (ie = !0, Zt(x, b)) : x;
  for (s = c = x = Pr(x.minus(vn), x.plus(vn), d), y = Zt(x.times(x), d), u = 3; ; ) {
    if (c = Zt(c.times(y), d), h = s.plus(Pr(c, new S(u), d)), Zn(h.d).slice(0, d) === Zn(s.d).slice(0, d))
      return s = s.times(2), l !== 0 && (s = s.plus(Gm(S, d + 2, b).times(l + ""))), s = Pr(s, new S(p), d), S.precision = b, e == null ? (ie = !0, Zt(s, b)) : s;
    s = h, u += 2;
  }
}
function GE(t, e) {
  var n, r, u;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; ) ++r;
  for (u = e.length; e.charCodeAt(u - 1) === 48; ) --u;
  if (e = e.slice(r, u), e) {
    if (u -= r, n = n - r - 1, t.e = ku(n / re), t.d = [], r = (n + 1) % re, n < 0 && (r += re), r < u) {
      for (r && t.d.push(+e.slice(0, r)), u -= re; r < u; ) t.d.push(+e.slice(r, r += re));
      e = e.slice(r), r = re - e.length;
    } else
      r -= u;
    for (; r--; ) e += "0";
    if (t.d.push(+e), ie && (t.e > Qf || t.e < -Qf)) throw Error(U0 + n);
  } else
    t.s = 0, t.e = 0, t.d = [0];
  return t;
}
function Zt(t, e, n) {
  var r, u, l, c, s, h, d, y, p = t.d;
  for (c = 1, l = p[0]; l >= 10; l /= 10) c++;
  if (r = e - c, r < 0)
    r += re, u = e, d = p[y = 0];
  else {
    if (y = Math.ceil((r + 1) / re), l = p.length, y >= l) return t;
    for (d = l = p[y], c = 1; l >= 10; l /= 10) c++;
    r %= re, u = r - re + c;
  }
  if (n !== void 0 && (l = Ga(10, c - u - 1), s = d / l % 10 | 0, h = e < 0 || p[y + 1] !== void 0 || d % l, h = n < 4 ? (s || h) && (n == 0 || n == (t.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || h || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (r > 0 ? u > 0 ? d / Ga(10, c - u) : 0 : p[y - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7))), e < 1 || !p[0])
    return h ? (l = ge(t), p.length = 1, e = e - l - 1, p[0] = Ga(10, (re - e % re) % re), t.e = ku(-e / re) || 0) : (p.length = 1, p[0] = t.e = t.s = 0), t;
  if (r == 0 ? (p.length = y, l = 1, y--) : (p.length = y + 1, l = Ga(10, re - r), p[y] = u > 0 ? (d / Ga(10, c - u) % Ga(10, u) | 0) * l : 0), h)
    for (; ; )
      if (y == 0) {
        (p[0] += l) == Te && (p[0] = 1, ++t.e);
        break;
      } else {
        if (p[y] += l, p[y] != Te) break;
        p[y--] = 0, l = 1;
      }
  for (r = p.length; p[--r] === 0; ) p.pop();
  if (ie && (t.e > Qf || t.e < -Qf))
    throw Error(U0 + ge(t));
  return t;
}
function GC(t, e) {
  var n, r, u, l, c, s, h, d, y, p, g = t.constructor, x = g.precision;
  if (!t.s || !e.s)
    return e.s ? e.s = -e.s : e = new g(t), ie ? Zt(e, x) : e;
  if (h = t.d, p = e.d, r = e.e, d = t.e, h = h.slice(), c = d - r, c) {
    for (y = c < 0, y ? (n = h, c = -c, s = p.length) : (n = p, r = d, s = h.length), u = Math.max(Math.ceil(x / re), s) + 2, c > u && (c = u, n.length = 1), n.reverse(), u = c; u--; ) n.push(0);
    n.reverse();
  } else {
    for (u = h.length, s = p.length, y = u < s, y && (s = u), u = 0; u < s; u++)
      if (h[u] != p[u]) {
        y = h[u] < p[u];
        break;
      }
    c = 0;
  }
  for (y && (n = h, h = p, p = n, e.s = -e.s), s = h.length, u = p.length - s; u > 0; --u) h[s++] = 0;
  for (u = p.length; u > c; ) {
    if (h[--u] < p[u]) {
      for (l = u; l && h[--l] === 0; ) h[l] = Te - 1;
      --h[l], h[u] += Te;
    }
    h[u] -= p[u];
  }
  for (; h[--s] === 0; ) h.pop();
  for (; h[0] === 0; h.shift()) --r;
  return h[0] ? (e.d = h, e.e = r, ie ? Zt(e, x) : e) : new g(0);
}
function ni(t, e, n) {
  var r, u = ge(t), l = Zn(t.d), c = l.length;
  return e ? (n && (r = n - c) > 0 ? l = l.charAt(0) + "." + l.slice(1) + va(r) : c > 1 && (l = l.charAt(0) + "." + l.slice(1)), l = l + (u < 0 ? "e" : "e+") + u) : u < 0 ? (l = "0." + va(-u - 1) + l, n && (r = n - c) > 0 && (l += va(r))) : u >= c ? (l += va(u + 1 - c), n && (r = n - u - 1) > 0 && (l = l + "." + va(r))) : ((r = u + 1) < c && (l = l.slice(0, r) + "." + l.slice(r)), n && (r = n - c) > 0 && (u + 1 === c && (l += "."), l += va(r))), t.s < 0 ? "-" + l : l;
}
function YE(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function YC(t) {
  var e, n, r;
  function u(l) {
    var c = this;
    if (!(c instanceof u)) return new u(l);
    if (c.constructor = u, l instanceof u) {
      c.s = l.s, c.e = l.e, c.d = (l = l.d) ? l.slice() : l;
      return;
    }
    if (typeof l == "number") {
      if (l * 0 !== 0)
        throw Error(Wa + l);
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
      return GE(c, l.toString());
    } else if (typeof l != "string")
      throw Error(Wa + l);
    if (l.charCodeAt(0) === 45 ? (l = l.slice(1), c.s = -1) : c.s = 1, W6.test(l)) GE(c, l);
    else throw Error(Wa + l);
  }
  if (u.prototype = ht, u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.clone = YC, u.config = u.set = J6, t === void 0 && (t = {}), t)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], e = 0; e < r.length; ) t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return u.config(t), u;
}
function J6(t) {
  if (!t || typeof t != "object")
    throw Error(Dn + "Object expected");
  var e, n, r, u = [
    "precision",
    1,
    Lu,
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
  for (e = 0; e < u.length; e += 3)
    if ((r = t[n = u[e]]) !== void 0)
      if (ku(r) === r && r >= u[e + 1] && r <= u[e + 2]) this[n] = r;
      else throw Error(Wa + n + ": " + r);
  if ((r = t[n = "LN10"]) !== void 0)
    if (r == Math.LN10) this[n] = new this(r);
    else throw Error(Wa + n + ": " + r);
  return this;
}
var H0 = YC(Q6);
vn = new H0(1);
const Vt = H0;
function tL(t) {
  return aL(t) || rL(t) || nL(t) || eL();
}
function eL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nL(t, e) {
  if (t) {
    if (typeof t == "string") return eb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eb(t, e);
  }
}
function rL(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function aL(t) {
  if (Array.isArray(t)) return eb(t);
}
function eb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
var iL = function(e) {
  return e;
}, XC = {}, KC = function(e) {
  return e === XC;
}, XE = function(e) {
  return function n() {
    return arguments.length === 0 || arguments.length === 1 && KC(arguments.length <= 0 ? void 0 : arguments[0]) ? n : e.apply(void 0, arguments);
  };
}, uL = function t(e, n) {
  return e === 1 ? n : XE(function() {
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    var c = u.filter(function(s) {
      return s !== XC;
    }).length;
    return c >= e ? n.apply(void 0, u) : t(e - c, XE(function() {
      for (var s = arguments.length, h = new Array(s), d = 0; d < s; d++)
        h[d] = arguments[d];
      var y = u.map(function(p) {
        return KC(p) ? h.shift() : p;
      });
      return n.apply(void 0, tL(y).concat(h));
    }));
  });
}, Ys = function(e) {
  return uL(e.length, e);
}, nb = function(e, n) {
  for (var r = [], u = e; u < n; ++u)
    r[u - e] = u;
  return r;
}, oL = Ys(function(t, e) {
  return Array.isArray(e) ? e.map(t) : Object.keys(e).map(function(n) {
    return e[n];
  }).map(t);
}), lL = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  if (!n.length)
    return iL;
  var u = n.reverse(), l = u[0], c = u.slice(1);
  return function() {
    return c.reduce(function(s, h) {
      return h(s);
    }, l.apply(void 0, arguments));
  };
}, rb = function(e) {
  return Array.isArray(e) ? e.reverse() : e.split("").reverse.join("");
}, VC = function(e) {
  var n = null, r = null;
  return function() {
    for (var u = arguments.length, l = new Array(u), c = 0; c < u; c++)
      l[c] = arguments[c];
    return n && l.every(function(s, h) {
      return s === n[h];
    }) || (n = l, r = e.apply(void 0, l)), r;
  };
};
function cL(t) {
  var e;
  return t === 0 ? e = 1 : e = Math.floor(new Vt(t).abs().log(10).toNumber()) + 1, e;
}
function fL(t, e, n) {
  for (var r = new Vt(t), u = 0, l = []; r.lt(e) && u < 1e5; )
    l.push(r.toNumber()), r = r.add(n), u++;
  return l;
}
var sL = Ys(function(t, e, n) {
  var r = +t, u = +e;
  return r + n * (u - r);
}), hL = Ys(function(t, e, n) {
  var r = e - +t;
  return r = r || 1 / 0, (n - t) / r;
}), dL = Ys(function(t, e, n) {
  var r = e - +t;
  return r = r || 1 / 0, Math.max(0, Math.min(1, (n - t) / r));
});
const Xs = {
  rangeStep: fL,
  getDigitCount: cL,
  interpolateNumber: sL,
  uninterpolateNumber: hL,
  uninterpolateTruncation: dL
};
function ab(t) {
  return yL(t) || pL(t) || FC(t) || vL();
}
function vL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pL(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function yL(t) {
  if (Array.isArray(t)) return ib(t);
}
function pl(t, e) {
  return bL(t) || gL(t, e) || FC(t, e) || mL();
}
function mL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FC(t, e) {
  if (t) {
    if (typeof t == "string") return ib(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ib(t, e);
  }
}
function ib(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function gL(t, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
    var n = [], r = !0, u = !1, l = void 0;
    try {
      for (var c = t[Symbol.iterator](), s; !(r = (s = c.next()).done) && (n.push(s.value), !(e && n.length === e)); r = !0)
        ;
    } catch (h) {
      u = !0, l = h;
    } finally {
      try {
        !r && c.return != null && c.return();
      } finally {
        if (u) throw l;
      }
    }
    return n;
  }
}
function bL(t) {
  if (Array.isArray(t)) return t;
}
function ZC(t) {
  var e = pl(t, 2), n = e[0], r = e[1], u = n, l = r;
  return n > r && (u = r, l = n), [u, l];
}
function QC(t, e, n) {
  if (t.lte(0))
    return new Vt(0);
  var r = Xs.getDigitCount(t.toNumber()), u = new Vt(10).pow(r), l = t.div(u), c = r !== 1 ? 0.05 : 0.1, s = new Vt(Math.ceil(l.div(c).toNumber())).add(n).mul(c), h = s.mul(u);
  return e ? h : new Vt(Math.ceil(h));
}
function xL(t, e, n) {
  var r = 1, u = new Vt(t);
  if (!u.isint() && n) {
    var l = Math.abs(t);
    l < 1 ? (r = new Vt(10).pow(Xs.getDigitCount(t) - 1), u = new Vt(Math.floor(u.div(r).toNumber())).mul(r)) : l > 1 && (u = new Vt(Math.floor(t)));
  } else t === 0 ? u = new Vt(Math.floor((e - 1) / 2)) : n || (u = new Vt(Math.floor(t)));
  var c = Math.floor((e - 1) / 2), s = lL(oL(function(h) {
    return u.add(new Vt(h - c).mul(r)).toNumber();
  }), nb);
  return s(0, e);
}
function WC(t, e, n, r) {
  var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((e - t) / (n - 1)))
    return {
      step: new Vt(0),
      tickMin: new Vt(0),
      tickMax: new Vt(0)
    };
  var l = QC(new Vt(e).sub(t).div(n - 1), r, u), c;
  t <= 0 && e >= 0 ? c = new Vt(0) : (c = new Vt(t).add(e).div(2), c = c.sub(new Vt(c).mod(l)));
  var s = Math.ceil(c.sub(t).div(l).toNumber()), h = Math.ceil(new Vt(e).sub(c).div(l).toNumber()), d = s + h + 1;
  return d > n ? WC(t, e, n, r, u + 1) : (d < n && (h = e > 0 ? h + (n - d) : h, s = e > 0 ? s : s + (n - d)), {
    step: l,
    tickMin: c.sub(new Vt(s).mul(l)),
    tickMax: c.add(new Vt(h).mul(l))
  });
}
function SL(t) {
  var e = pl(t, 2), n = e[0], r = e[1], u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = Math.max(u, 2), s = ZC([n, r]), h = pl(s, 2), d = h[0], y = h[1];
  if (d === -1 / 0 || y === 1 / 0) {
    var p = y === 1 / 0 ? [d].concat(ab(nb(0, u - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ab(nb(0, u - 1).map(function() {
      return -1 / 0;
    })), [y]);
    return n > r ? rb(p) : p;
  }
  if (d === y)
    return xL(d, u, l);
  var g = WC(d, y, c, l), x = g.step, O = g.tickMin, S = g.tickMax, b = Xs.rangeStep(O, S.add(new Vt(0.1).mul(x)), x);
  return n > r ? rb(b) : b;
}
function _L(t, e) {
  var n = pl(t, 2), r = n[0], u = n[1], l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = ZC([r, u]), s = pl(c, 2), h = s[0], d = s[1];
  if (h === -1 / 0 || d === 1 / 0)
    return [r, u];
  if (h === d)
    return [h];
  var y = Math.max(e, 2), p = QC(new Vt(d).sub(h).div(y - 1), l, 0), g = [].concat(ab(Xs.rangeStep(new Vt(h), new Vt(d).sub(new Vt(0.99).mul(p)), p)), [d]);
  return r > u ? rb(g) : g;
}
var OL = VC(SL), AL = VC(_L), wL = "Invariant failed";
function ri(t, e) {
  throw new Error(wL);
}
var TL = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function gu(t) {
  "@babel/helpers - typeof";
  return gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gu(t);
}
function Wf() {
  return Wf = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Wf.apply(this, arguments);
}
function EL(t, e) {
  return DL(t) || CL(t, e) || jL(t, e) || ML();
}
function ML() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jL(t, e) {
  if (t) {
    if (typeof t == "string") return KE(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return KE(t, e);
  }
}
function KE(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function CL(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function DL(t) {
  if (Array.isArray(t)) return t;
}
function PL(t, e) {
  if (t == null) return {};
  var n = NL(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function NL(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function RL(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qL(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, eD(r.key), r);
  }
}
function zL(t, e, n) {
  return e && qL(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function $L(t, e, n) {
  return e = Jf(e), BL(t, JC() ? Reflect.construct(e, n || [], Jf(t).constructor) : e.apply(t, n));
}
function BL(t, e) {
  if (e && (gu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return LL(t);
}
function LL(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function JC() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (JC = function() {
    return !!t;
  })();
}
function Jf(t) {
  return Jf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Jf(t);
}
function kL(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ub(t, e);
}
function ub(t, e) {
  return ub = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, ub(t, e);
}
function tD(t, e, n) {
  return e = eD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eD(t) {
  var e = UL(t, "string");
  return gu(e) == "symbol" ? e : e + "";
}
function UL(t, e) {
  if (gu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (gu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Il = /* @__PURE__ */ (function(t) {
  function e() {
    return RL(this, e), $L(this, e, arguments);
  }
  return kL(e, t), zL(e, [{
    key: "render",
    value: function() {
      var r = this.props, u = r.offset, l = r.layout, c = r.width, s = r.dataKey, h = r.data, d = r.dataPointFormatter, y = r.xAxis, p = r.yAxis, g = PL(r, TL), x = Et(g, !1);
      this.props.direction === "x" && y.type !== "number" && ri();
      var O = h.map(function(S) {
        var b = d(S, s), A = b.x, T = b.y, M = b.value, C = b.errorVal;
        if (!C)
          return null;
        var w = [], E, D;
        if (Array.isArray(C)) {
          var R = EL(C, 2);
          E = R[0], D = R[1];
        } else
          E = D = C;
        if (l === "vertical") {
          var z = y.scale, F = T + u, k = F + c, $ = F - c, K = z(M - E), Z = z(M + D);
          w.push({
            x1: Z,
            y1: k,
            x2: Z,
            y2: $
          }), w.push({
            x1: K,
            y1: F,
            x2: Z,
            y2: F
          }), w.push({
            x1: K,
            y1: k,
            x2: K,
            y2: $
          });
        } else if (l === "horizontal") {
          var V = p.scale, N = A + u, I = N - c, W = N + c, ut = V(M - E), lt = V(M + D);
          w.push({
            x1: I,
            y1: lt,
            x2: W,
            y2: lt
          }), w.push({
            x1: N,
            y1: ut,
            x2: N,
            y2: lt
          }), w.push({
            x1: I,
            y1: ut,
            x2: W,
            y2: ut
          });
        }
        return /* @__PURE__ */ B.createElement(Jt, Wf({
          className: "recharts-errorBar",
          key: "bar-".concat(w.map(function(P) {
            return "".concat(P.x1, "-").concat(P.x2, "-").concat(P.y1, "-").concat(P.y2);
          }))
        }, x), w.map(function(P) {
          return /* @__PURE__ */ B.createElement("line", Wf({}, P, {
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
tD(Il, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
tD(Il, "displayName", "ErrorBar");
function yl(t) {
  "@babel/helpers - typeof";
  return yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yl(t);
}
function VE(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ha(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? VE(Object(n), !0).forEach(function(r) {
      HL(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : VE(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function HL(t, e, n) {
  return e = IL(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function IL(t) {
  var e = GL(t, "string");
  return yl(e) == "symbol" ? e : e + "";
}
function GL(t, e) {
  if (yl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (yl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var nD = function(e) {
  var n = e.children, r = e.formattedGraphicalItems, u = e.legendWidth, l = e.legendContent, c = hn(n, au);
  if (!c)
    return null;
  var s = au.defaultProps, h = s !== void 0 ? Ha(Ha({}, s), c.props) : {}, d;
  return c.props && c.props.payload ? d = c.props && c.props.payload : l === "children" ? d = (r || []).reduce(function(y, p) {
    var g = p.item, x = p.props, O = x.sectors || x.data || [];
    return y.concat(O.map(function(S) {
      return {
        type: c.props.iconType || g.props.legendType,
        value: S.name,
        color: S.fill,
        payload: S
      };
    }));
  }, []) : d = (r || []).map(function(y) {
    var p = y.item, g = p.type.defaultProps, x = g !== void 0 ? Ha(Ha({}, g), p.props) : {}, O = x.dataKey, S = x.name, b = x.legendType, A = x.hide;
    return {
      inactive: A,
      dataKey: O,
      type: h.iconType || b || "square",
      color: I0(p),
      value: S || O,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: x
    };
  }), Ha(Ha(Ha({}, h), au.getWithHeight(c, u)), {}, {
    payload: d,
    item: c
  });
};
function ml(t) {
  "@babel/helpers - typeof";
  return ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ml(t);
}
function FE(t) {
  return VL(t) || KL(t) || XL(t) || YL();
}
function YL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XL(t, e) {
  if (t) {
    if (typeof t == "string") return ob(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ob(t, e);
  }
}
function KL(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function VL(t) {
  if (Array.isArray(t)) return ob(t);
}
function ob(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ZE(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ZE(Object(n), !0).forEach(function(r) {
      uu(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ZE(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function uu(t, e, n) {
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
function Ge(t, e, n) {
  return Mt(t) || Mt(e) ? n : _e(e) ? jn(t, e, n) : At(e) ? e(t) : n;
}
function Jo(t, e, n, r) {
  var u = V6(t, function(s) {
    return Ge(s, e);
  });
  if (n === "number") {
    var l = u.filter(function(s) {
      return st(s) || parseFloat(s);
    });
    return l.length ? [Gs(l), ya(l)] : [1 / 0, -1 / 0];
  }
  var c = r ? u.filter(function(s) {
    return !Mt(s);
  }) : u;
  return c.map(function(s) {
    return _e(s) || s instanceof Date ? s : "";
  });
}
var QL = function(e) {
  var n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, c = -1, s = (n = r == null ? void 0 : r.length) !== null && n !== void 0 ? n : 0;
  if (s <= 1)
    return 0;
  if (l && l.axisType === "angleAxis" && Math.abs(Math.abs(l.range[1] - l.range[0]) - 360) <= 1e-6)
    for (var h = l.range, d = 0; d < s; d++) {
      var y = d > 0 ? u[d - 1].coordinate : u[s - 1].coordinate, p = u[d].coordinate, g = d >= s - 1 ? u[0].coordinate : u[d + 1].coordinate, x = void 0;
      if (Hn(p - y) !== Hn(g - p)) {
        var O = [];
        if (Hn(g - p) === Hn(h[1] - h[0])) {
          x = g;
          var S = p + h[1] - h[0];
          O[0] = Math.min(S, (S + y) / 2), O[1] = Math.max(S, (S + y) / 2);
        } else {
          x = y;
          var b = g + h[1] - h[0];
          O[0] = Math.min(p, (b + p) / 2), O[1] = Math.max(p, (b + p) / 2);
        }
        var A = [Math.min(p, (x + p) / 2), Math.max(p, (x + p) / 2)];
        if (e > A[0] && e <= A[1] || e >= O[0] && e <= O[1]) {
          c = u[d].index;
          break;
        }
      } else {
        var T = Math.min(y, g), M = Math.max(y, g);
        if (e > (T + p) / 2 && e <= (M + p) / 2) {
          c = u[d].index;
          break;
        }
      }
    }
  else
    for (var C = 0; C < s; C++)
      if (C === 0 && e <= (r[C].coordinate + r[C + 1].coordinate) / 2 || C > 0 && C < s - 1 && e > (r[C].coordinate + r[C - 1].coordinate) / 2 && e <= (r[C].coordinate + r[C + 1].coordinate) / 2 || C === s - 1 && e > (r[C].coordinate + r[C - 1].coordinate) / 2) {
        c = r[C].index;
        break;
      }
  return c;
}, I0 = function(e) {
  var n, r = e, u = r.type.displayName, l = (n = e.type) !== null && n !== void 0 && n.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, c = l.stroke, s = l.fill, h;
  switch (u) {
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
}, WL = function(e) {
  var n = e.barSize, r = e.totalSize, u = e.stackGroups, l = u === void 0 ? {} : u;
  if (!l)
    return {};
  for (var c = {}, s = Object.keys(l), h = 0, d = s.length; h < d; h++)
    for (var y = l[s[h]].stackGroups, p = Object.keys(y), g = 0, x = p.length; g < x; g++) {
      var O = y[p[g]], S = O.items, b = O.cateAxisId, A = S.filter(function(D) {
        return Cr(D.type).indexOf("Bar") >= 0;
      });
      if (A && A.length) {
        var T = A[0].type.defaultProps, M = T !== void 0 ? fe(fe({}, T), A[0].props) : A[0].props, C = M.barSize, w = M[b];
        c[w] || (c[w] = []);
        var E = Mt(C) ? n : C;
        c[w].push({
          item: A[0],
          stackList: A.slice(1),
          barSize: Mt(E) ? void 0 : ei(E, r, 0)
        });
      }
    }
  return c;
}, JL = function(e) {
  var n = e.barGap, r = e.barCategoryGap, u = e.bandSize, l = e.sizeList, c = l === void 0 ? [] : l, s = e.maxBarSize, h = c.length;
  if (h < 1) return null;
  var d = ei(n, u, 0, !0), y, p = [];
  if (c[0].barSize === +c[0].barSize) {
    var g = !1, x = u / h, O = c.reduce(function(C, w) {
      return C + w.barSize || 0;
    }, 0);
    O += (h - 1) * d, O >= u && (O -= (h - 1) * d, d = 0), O >= u && x > 0 && (g = !0, x *= 0.9, O = h * x);
    var S = (u - O) / 2 >> 0, b = {
      offset: S - d,
      size: 0
    };
    y = c.reduce(function(C, w) {
      var E = {
        item: w.item,
        position: {
          offset: b.offset + b.size + d,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: g ? x : w.barSize
        }
      }, D = [].concat(FE(C), [E]);
      return b = D[D.length - 1].position, w.stackList && w.stackList.length && w.stackList.forEach(function(R) {
        D.push({
          item: R,
          position: b
        });
      }), D;
    }, p);
  } else {
    var A = ei(r, u, 0, !0);
    u - 2 * A - (h - 1) * d <= 0 && (d = 0);
    var T = (u - 2 * A - (h - 1) * d) / h;
    T > 1 && (T >>= 0);
    var M = s === +s ? Math.min(T, s) : T;
    y = c.reduce(function(C, w, E) {
      var D = [].concat(FE(C), [{
        item: w.item,
        position: {
          offset: A + (T + d) * E + (T - M) / 2,
          size: M
        }
      }]);
      return w.stackList && w.stackList.length && w.stackList.forEach(function(R) {
        D.push({
          item: R,
          position: D[D.length - 1].position
        });
      }), D;
    }, p);
  }
  return y;
}, t5 = function(e, n, r, u) {
  var l = r.children, c = r.width, s = r.margin, h = c - (s.left || 0) - (s.right || 0), d = nD({
    children: l,
    legendWidth: h
  });
  if (d) {
    var y = u || {}, p = y.width, g = y.height, x = d.align, O = d.verticalAlign, S = d.layout;
    if ((S === "vertical" || S === "horizontal" && O === "middle") && x !== "center" && st(e[x]))
      return fe(fe({}, e), {}, uu({}, x, e[x] + (p || 0)));
    if ((S === "horizontal" || S === "vertical" && x === "center") && O !== "middle" && st(e[O]))
      return fe(fe({}, e), {}, uu({}, O, e[O] + (g || 0)));
  }
  return e;
}, e5 = function(e, n, r) {
  return Mt(n) ? !0 : e === "horizontal" ? n === "yAxis" : e === "vertical" || r === "x" ? n === "xAxis" : r === "y" ? n === "yAxis" : !0;
}, rD = function(e, n, r, u, l) {
  var c = n.props.children, s = Cn(c, Il).filter(function(d) {
    return e5(u, l, d.props.direction);
  });
  if (s && s.length) {
    var h = s.map(function(d) {
      return d.props.dataKey;
    });
    return e.reduce(function(d, y) {
      var p = Ge(y, r);
      if (Mt(p)) return d;
      var g = Array.isArray(p) ? [Gs(p), ya(p)] : [p, p], x = h.reduce(function(O, S) {
        var b = Ge(y, S, 0), A = g[0] - Math.abs(Array.isArray(b) ? b[0] : b), T = g[1] + Math.abs(Array.isArray(b) ? b[1] : b);
        return [Math.min(A, O[0]), Math.max(T, O[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(x[0], d[0]), Math.max(x[1], d[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, n5 = function(e, n, r, u, l) {
  var c = n.map(function(s) {
    return rD(e, s, r, l, u);
  }).filter(function(s) {
    return !Mt(s);
  });
  return c && c.length ? c.reduce(function(s, h) {
    return [Math.min(s[0], h[0]), Math.max(s[1], h[1])];
  }, [1 / 0, -1 / 0]) : null;
}, aD = function(e, n, r, u, l) {
  var c = n.map(function(h) {
    var d = h.props.dataKey;
    return r === "number" && d && rD(e, h, d, u) || Jo(e, d, r, l);
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
}, iD = function(e, n) {
  return e === "horizontal" && n === "xAxis" || e === "vertical" && n === "yAxis" || e === "centric" && n === "angleAxis" || e === "radial" && n === "radiusAxis";
}, uD = function(e, n, r, u) {
  if (u)
    return e.map(function(h) {
      return h.coordinate;
    });
  var l, c, s = e.map(function(h) {
    return h.coordinate === n && (l = !0), h.coordinate === r && (c = !0), h.coordinate;
  });
  return l || s.push(n), c || s.push(r), s;
}, Er = function(e, n, r) {
  if (!e) return null;
  var u = e.scale, l = e.duplicateDomain, c = e.type, s = e.range, h = e.realScaleType === "scaleBand" ? u.bandwidth() / 2 : 2, d = (n || r) && c === "category" && u.bandwidth ? u.bandwidth() / h : 0;
  if (d = e.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? Hn(s[0] - s[1]) * 2 * d : d, n && (e.ticks || e.niceTicks)) {
    var y = (e.ticks || e.niceTicks).map(function(p) {
      var g = l ? l.indexOf(p) : p;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: u(g) + d,
        value: p,
        offset: d
      };
    });
    return y.filter(function(p) {
      return !qu(p.coordinate);
    });
  }
  return e.isCategorical && e.categoricalDomain ? e.categoricalDomain.map(function(p, g) {
    return {
      coordinate: u(p) + d,
      value: p,
      index: g,
      offset: d
    };
  }) : u.ticks && !r ? u.ticks(e.tickCount).map(function(p) {
    return {
      coordinate: u(p) + d,
      value: p,
      offset: d
    };
  }) : u.domain().map(function(p, g) {
    return {
      coordinate: u(p) + d,
      value: l ? l[p] : p,
      index: g,
      offset: d
    };
  });
}, Ym = /* @__PURE__ */ new WeakMap(), gf = function(e, n) {
  if (typeof n != "function")
    return e;
  Ym.has(e) || Ym.set(e, /* @__PURE__ */ new WeakMap());
  var r = Ym.get(e);
  if (r.has(n))
    return r.get(n);
  var u = function() {
    e.apply(void 0, arguments), n.apply(void 0, arguments);
  };
  return r.set(n, u), u;
}, r5 = function(e, n, r) {
  var u = e.scale, l = e.type, c = e.layout, s = e.axisType;
  if (u === "auto")
    return c === "radial" && s === "radiusAxis" ? {
      scale: cl(),
      realScaleType: "band"
    } : c === "radial" && s === "angleAxis" ? {
      scale: Kf(),
      realScaleType: "linear"
    } : l === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? {
      scale: Wo(),
      realScaleType: "point"
    } : l === "category" ? {
      scale: cl(),
      realScaleType: "band"
    } : {
      scale: Kf(),
      realScaleType: "linear"
    };
  if (ti(u)) {
    var h = "scale".concat(Ds(u));
    return {
      scale: (qE[h] || Wo)(),
      realScaleType: qE[h] ? h : "point"
    };
  }
  return At(u) ? {
    scale: u
  } : {
    scale: Wo(),
    realScaleType: "point"
  };
}, QE = 1e-4, a5 = function(e) {
  var n = e.domain();
  if (!(!n || n.length <= 2)) {
    var r = n.length, u = e.range(), l = Math.min(u[0], u[1]) - QE, c = Math.max(u[0], u[1]) + QE, s = e(n[0]), h = e(n[r - 1]);
    (s < l || s > c || h < l || h > c) && e.domain([n[0], n[r - 1]]);
  }
}, i5 = function(e, n) {
  if (!e)
    return null;
  for (var r = 0, u = e.length; r < u; r++)
    if (e[r].item === n)
      return e[r].position;
  return null;
}, u5 = function(e, n) {
  if (!n || n.length !== 2 || !st(n[0]) || !st(n[1]))
    return e;
  var r = Math.min(n[0], n[1]), u = Math.max(n[0], n[1]), l = [e[0], e[1]];
  return (!st(e[0]) || e[0] < r) && (l[0] = r), (!st(e[1]) || e[1] > u) && (l[1] = u), l[0] > u && (l[0] = u), l[1] < r && (l[1] = r), l;
}, o5 = function(e) {
  var n = e.length;
  if (!(n <= 0))
    for (var r = 0, u = e[0].length; r < u; ++r)
      for (var l = 0, c = 0, s = 0; s < n; ++s) {
        var h = qu(e[s][r][1]) ? e[s][r][0] : e[s][r][1];
        h >= 0 ? (e[s][r][0] = l, e[s][r][1] = l + h, l = e[s][r][1]) : (e[s][r][0] = c, e[s][r][1] = c + h, c = e[s][r][1]);
      }
}, l5 = function(e) {
  var n = e.length;
  if (!(n <= 0))
    for (var r = 0, u = e[0].length; r < u; ++r)
      for (var l = 0, c = 0; c < n; ++c) {
        var s = qu(e[c][r][1]) ? e[c][r][0] : e[c][r][1];
        s >= 0 ? (e[c][r][0] = l, e[c][r][1] = l + s, l = e[c][r][1]) : (e[c][r][0] = 0, e[c][r][1] = 0);
      }
}, c5 = {
  sign: o5,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Xq,
  // @ts-expect-error definitelytyped types are incorrect
  none: cu,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Kq,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Vq,
  positive: l5
}, f5 = function(e, n, r) {
  var u = n.map(function(s) {
    return s.props.dataKey;
  }), l = c5[r], c = Yq().keys(u).value(function(s, h) {
    return +Ge(s, h, 0);
  }).order($g).offset(l);
  return c(e);
}, s5 = function(e, n, r, u, l, c) {
  if (!e)
    return null;
  var s = c ? n.reverse() : n, h = {}, d = s.reduce(function(p, g) {
    var x, O = (x = g.type) !== null && x !== void 0 && x.defaultProps ? fe(fe({}, g.type.defaultProps), g.props) : g.props, S = O.stackId, b = O.hide;
    if (b)
      return p;
    var A = O[r], T = p[A] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (_e(S)) {
      var M = T.stackGroups[S] || {
        numericAxisId: r,
        cateAxisId: u,
        items: []
      };
      M.items.push(g), T.hasStack = !0, T.stackGroups[S] = M;
    } else
      T.stackGroups[zu("_stackId_")] = {
        numericAxisId: r,
        cateAxisId: u,
        items: [g]
      };
    return fe(fe({}, p), {}, uu({}, A, T));
  }, h), y = {};
  return Object.keys(d).reduce(function(p, g) {
    var x = d[g];
    if (x.hasStack) {
      var O = {};
      x.stackGroups = Object.keys(x.stackGroups).reduce(function(S, b) {
        var A = x.stackGroups[b];
        return fe(fe({}, S), {}, uu({}, b, {
          numericAxisId: r,
          cateAxisId: u,
          items: A.items,
          stackedData: f5(e, A.items, l)
        }));
      }, O);
    }
    return fe(fe({}, p), {}, uu({}, g, x));
  }, y);
}, h5 = function(e, n) {
  var r = n.realScaleType, u = n.type, l = n.tickCount, c = n.originalDomain, s = n.allowDecimals, h = r || n.scale;
  if (h !== "auto" && h !== "linear")
    return null;
  if (l && u === "number" && c && (c[0] === "auto" || c[1] === "auto")) {
    var d = e.domain();
    if (!d.length)
      return null;
    var y = OL(d, l, s);
    return e.domain([Gs(y), ya(y)]), {
      niceTicks: y
    };
  }
  if (l && u === "number") {
    var p = e.domain(), g = AL(p, l, s);
    return {
      niceTicks: g
    };
  }
  return null;
};
function ts(t) {
  var e = t.axis, n = t.ticks, r = t.bandSize, u = t.entry, l = t.index, c = t.dataKey;
  if (e.type === "category") {
    if (!e.allowDuplicatedCategory && e.dataKey && !Mt(u[e.dataKey])) {
      var s = Tf(n, "value", u[e.dataKey]);
      if (s)
        return s.coordinate + r / 2;
    }
    return n[l] ? n[l].coordinate + r / 2 : null;
  }
  var h = Ge(u, Mt(c) ? e.dataKey : c);
  return Mt(h) ? null : e.scale(h);
}
var WE = function(e) {
  var n = e.axis, r = e.ticks, u = e.offset, l = e.bandSize, c = e.entry, s = e.index;
  if (n.type === "category")
    return r[s] ? r[s].coordinate + u : null;
  var h = Ge(c, n.dataKey, n.domain[s]);
  return Mt(h) ? null : n.scale(h) - l / 2 + u;
}, d5 = function(e) {
  var n = e.numericAxis, r = n.scale.domain();
  if (n.type === "number") {
    var u = Math.min(r[0], r[1]), l = Math.max(r[0], r[1]);
    return u <= 0 && l >= 0 ? 0 : l < 0 ? l : u;
  }
  return r[0];
}, v5 = function(e, n) {
  var r, u = (r = e.type) !== null && r !== void 0 && r.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, l = u.stackId;
  if (_e(l)) {
    var c = n[l];
    if (c) {
      var s = c.items.indexOf(e);
      return s >= 0 ? c.stackedData[s] : null;
    }
  }
  return null;
}, p5 = function(e) {
  return e.reduce(function(n, r) {
    return [Gs(r.concat([n[0]]).filter(st)), ya(r.concat([n[1]]).filter(st))];
  }, [1 / 0, -1 / 0]);
}, oD = function(e, n, r) {
  return Object.keys(e).reduce(function(u, l) {
    var c = e[l], s = c.stackedData, h = s.reduce(function(d, y) {
      var p = p5(y.slice(n, r + 1));
      return [Math.min(d[0], p[0]), Math.max(d[1], p[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(h[0], u[0]), Math.max(h[1], u[1])];
  }, [1 / 0, -1 / 0]).map(function(u) {
    return u === 1 / 0 || u === -1 / 0 ? 0 : u;
  });
}, JE = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, t2 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, lb = function(e, n, r) {
  if (At(e))
    return e(n, r);
  if (!Array.isArray(e))
    return n;
  var u = [];
  if (st(e[0]))
    u[0] = r ? e[0] : Math.min(e[0], n[0]);
  else if (JE.test(e[0])) {
    var l = +JE.exec(e[0])[1];
    u[0] = n[0] - l;
  } else At(e[0]) ? u[0] = e[0](n[0]) : u[0] = n[0];
  if (st(e[1]))
    u[1] = r ? e[1] : Math.max(e[1], n[1]);
  else if (t2.test(e[1])) {
    var c = +t2.exec(e[1])[1];
    u[1] = n[1] + c;
  } else At(e[1]) ? u[1] = e[1](n[1]) : u[1] = n[1];
  return u;
}, es = function(e, n, r) {
  if (e && e.scale && e.scale.bandwidth) {
    var u = e.scale.bandwidth();
    if (!r || u > 0)
      return u;
  }
  if (e && n && n.length >= 2) {
    for (var l = y0(n, function(p) {
      return p.coordinate;
    }), c = 1 / 0, s = 1, h = l.length; s < h; s++) {
      var d = l[s], y = l[s - 1];
      c = Math.min((d.coordinate || 0) - (y.coordinate || 0), c);
    }
    return c === 1 / 0 ? 0 : c;
  }
  return r ? void 0 : 0;
}, e2 = function(e, n, r) {
  return !e || !e.length || mu(e, jn(r, "type.defaultProps.domain")) ? n : e;
}, lD = function(e, n) {
  var r = e.type.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, u = r.dataKey, l = r.name, c = r.unit, s = r.formatter, h = r.tooltipType, d = r.chartType, y = r.hide;
  return fe(fe({}, Et(e, !1)), {}, {
    dataKey: u,
    unit: c,
    formatter: s,
    name: l || u,
    color: I0(e),
    value: Ge(n, u),
    type: h,
    payload: n,
    chartType: d,
    hide: y
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
function n2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function r2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? n2(Object(n), !0).forEach(function(r) {
      y5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : n2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function y5(t, e, n) {
  return e = m5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function m5(t) {
  var e = g5(t, "string");
  return gl(e) == "symbol" ? e : e + "";
}
function g5(t, e) {
  if (gl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (gl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ns = Math.PI / 180, b5 = function(e) {
  return e * 180 / Math.PI;
}, qe = function(e, n, r, u) {
  return {
    x: e + Math.cos(-ns * u) * r,
    y: n + Math.sin(-ns * u) * r
  };
}, x5 = function(e, n) {
  var r = e.x, u = e.y, l = n.x, c = n.y;
  return Math.sqrt(Math.pow(r - l, 2) + Math.pow(u - c, 2));
}, S5 = function(e, n) {
  var r = e.x, u = e.y, l = n.cx, c = n.cy, s = x5({
    x: r,
    y: u
  }, {
    x: l,
    y: c
  });
  if (s <= 0)
    return {
      radius: s
    };
  var h = (r - l) / s, d = Math.acos(h);
  return u > c && (d = 2 * Math.PI - d), {
    radius: s,
    angle: b5(d),
    angleInRadian: d
  };
}, _5 = function(e) {
  var n = e.startAngle, r = e.endAngle, u = Math.floor(n / 360), l = Math.floor(r / 360), c = Math.min(u, l);
  return {
    startAngle: n - c * 360,
    endAngle: r - c * 360
  };
}, O5 = function(e, n) {
  var r = n.startAngle, u = n.endAngle, l = Math.floor(r / 360), c = Math.floor(u / 360), s = Math.min(l, c);
  return e + s * 360;
}, a2 = function(e, n) {
  var r = e.x, u = e.y, l = S5({
    x: r,
    y: u
  }, n), c = l.radius, s = l.angle, h = n.innerRadius, d = n.outerRadius;
  if (c < h || c > d)
    return !1;
  if (c === 0)
    return !0;
  var y = _5(n), p = y.startAngle, g = y.endAngle, x = s, O;
  if (p <= g) {
    for (; x > g; )
      x -= 360;
    for (; x < p; )
      x += 360;
    O = x >= p && x <= g;
  } else {
    for (; x > p; )
      x -= 360;
    for (; x < g; )
      x += 360;
    O = x >= g && x <= p;
  }
  return O ? r2(r2({}, n), {}, {
    radius: c,
    angle: O5(x, n)
  }) : null;
};
function bl(t) {
  "@babel/helpers - typeof";
  return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bl(t);
}
var A5 = ["offset"];
function w5(t) {
  return j5(t) || M5(t) || E5(t) || T5();
}
function T5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E5(t, e) {
  if (t) {
    if (typeof t == "string") return cb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cb(t, e);
  }
}
function M5(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function j5(t) {
  if (Array.isArray(t)) return cb(t);
}
function cb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function C5(t, e) {
  if (t == null) return {};
  var n = D5(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function D5(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function i2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? i2(Object(n), !0).forEach(function(r) {
      P5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function P5(t, e, n) {
  return e = N5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function N5(t) {
  var e = R5(t, "string");
  return bl(e) == "symbol" ? e : e + "";
}
function R5(t, e) {
  if (bl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (bl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function xl() {
  return xl = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, xl.apply(this, arguments);
}
var q5 = function(e) {
  var n = e.value, r = e.formatter, u = Mt(e.children) ? n : e.children;
  return At(r) ? r(u) : u;
}, z5 = function(e, n) {
  var r = Hn(n - e), u = Math.min(Math.abs(n - e), 360);
  return r * u;
}, $5 = function(e, n, r) {
  var u = e.position, l = e.viewBox, c = e.offset, s = e.className, h = l, d = h.cx, y = h.cy, p = h.innerRadius, g = h.outerRadius, x = h.startAngle, O = h.endAngle, S = h.clockWise, b = (p + g) / 2, A = z5(x, O), T = A >= 0 ? 1 : -1, M, C;
  u === "insideStart" ? (M = x + T * c, C = S) : u === "insideEnd" ? (M = O - T * c, C = !S) : u === "end" && (M = O + T * c, C = S), C = A <= 0 ? C : !C;
  var w = qe(d, y, b, M), E = qe(d, y, b, M + (C ? 1 : -1) * 359), D = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(b, ",").concat(b, ",0,1,").concat(C ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), R = Mt(e.id) ? zu("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ B.createElement("text", xl({}, r, {
    dominantBaseline: "central",
    className: qt("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("path", {
    id: R,
    d: D
  })), /* @__PURE__ */ B.createElement("textPath", {
    xlinkHref: "#".concat(R)
  }, n));
}, B5 = function(e) {
  var n = e.viewBox, r = e.offset, u = e.position, l = n, c = l.cx, s = l.cy, h = l.innerRadius, d = l.outerRadius, y = l.startAngle, p = l.endAngle, g = (y + p) / 2;
  if (u === "outside") {
    var x = qe(c, s, d + r, g), O = x.x, S = x.y;
    return {
      x: O,
      y: S,
      textAnchor: O >= c ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (u === "center")
    return {
      x: c,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (u === "centerTop")
    return {
      x: c,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (u === "centerBottom")
    return {
      x: c,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var b = (h + d) / 2, A = qe(c, s, b, g), T = A.x, M = A.y;
  return {
    x: T,
    y: M,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, L5 = function(e) {
  var n = e.viewBox, r = e.parentViewBox, u = e.offset, l = e.position, c = n, s = c.x, h = c.y, d = c.width, y = c.height, p = y >= 0 ? 1 : -1, g = p * u, x = p > 0 ? "end" : "start", O = p > 0 ? "start" : "end", S = d >= 0 ? 1 : -1, b = S * u, A = S > 0 ? "end" : "start", T = S > 0 ? "start" : "end";
  if (l === "top") {
    var M = {
      x: s + d / 2,
      y: h - p * u,
      textAnchor: "middle",
      verticalAnchor: x
    };
    return Se(Se({}, M), r ? {
      height: Math.max(h - r.y, 0),
      width: d
    } : {});
  }
  if (l === "bottom") {
    var C = {
      x: s + d / 2,
      y: h + y + g,
      textAnchor: "middle",
      verticalAnchor: O
    };
    return Se(Se({}, C), r ? {
      height: Math.max(r.y + r.height - (h + y), 0),
      width: d
    } : {});
  }
  if (l === "left") {
    var w = {
      x: s - b,
      y: h + y / 2,
      textAnchor: A,
      verticalAnchor: "middle"
    };
    return Se(Se({}, w), r ? {
      width: Math.max(w.x - r.x, 0),
      height: y
    } : {});
  }
  if (l === "right") {
    var E = {
      x: s + d + b,
      y: h + y / 2,
      textAnchor: T,
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
    x: s + b,
    y: h + y / 2,
    textAnchor: T,
    verticalAnchor: "middle"
  }, D) : l === "insideRight" ? Se({
    x: s + d - b,
    y: h + y / 2,
    textAnchor: A,
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
    verticalAnchor: x
  }, D) : l === "insideTopLeft" ? Se({
    x: s + b,
    y: h + g,
    textAnchor: T,
    verticalAnchor: O
  }, D) : l === "insideTopRight" ? Se({
    x: s + d - b,
    y: h + g,
    textAnchor: A,
    verticalAnchor: O
  }, D) : l === "insideBottomLeft" ? Se({
    x: s + b,
    y: h + y - g,
    textAnchor: T,
    verticalAnchor: x
  }, D) : l === "insideBottomRight" ? Se({
    x: s + d - b,
    y: h + y - g,
    textAnchor: A,
    verticalAnchor: x
  }, D) : Ru(l) && (st(l.x) || Xa(l.x)) && (st(l.y) || Xa(l.y)) ? Se({
    x: s + ei(l.x, d),
    y: h + ei(l.y, y),
    textAnchor: "end",
    verticalAnchor: "end"
  }, D) : Se({
    x: s + d / 2,
    y: h + y / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, D);
}, k5 = function(e) {
  return "cx" in e && st(e.cx);
};
function ke(t) {
  var e = t.offset, n = e === void 0 ? 5 : e, r = C5(t, A5), u = Se({
    offset: n
  }, r), l = u.viewBox, c = u.position, s = u.value, h = u.children, d = u.content, y = u.className, p = y === void 0 ? "" : y, g = u.textBreakAll;
  if (!l || Mt(s) && Mt(h) && !/* @__PURE__ */ at.isValidElement(d) && !At(d))
    return null;
  if (/* @__PURE__ */ at.isValidElement(d))
    return /* @__PURE__ */ at.cloneElement(d, u);
  var x;
  if (At(d)) {
    if (x = /* @__PURE__ */ at.createElement(d, u), /* @__PURE__ */ at.isValidElement(x))
      return x;
  } else
    x = q5(u);
  var O = k5(l), S = Et(u, !0);
  if (O && (c === "insideStart" || c === "insideEnd" || c === "end"))
    return $5(u, x, S);
  var b = O ? B5(u) : L5(u);
  return /* @__PURE__ */ B.createElement(Lf, xl({
    className: qt("recharts-label", p)
  }, S, b, {
    breakAll: g
  }), x);
}
ke.displayName = "Label";
var cD = function(e) {
  var n = e.cx, r = e.cy, u = e.angle, l = e.startAngle, c = e.endAngle, s = e.r, h = e.radius, d = e.innerRadius, y = e.outerRadius, p = e.x, g = e.y, x = e.top, O = e.left, S = e.width, b = e.height, A = e.clockWise, T = e.labelViewBox;
  if (T)
    return T;
  if (st(S) && st(b)) {
    if (st(p) && st(g))
      return {
        x: p,
        y: g,
        width: S,
        height: b
      };
    if (st(x) && st(O))
      return {
        x,
        y: O,
        width: S,
        height: b
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
    startAngle: l || u || 0,
    endAngle: c || u || 0,
    innerRadius: d || 0,
    outerRadius: y || h || s || 0,
    clockWise: A
  } : e.viewBox ? e.viewBox : {};
}, U5 = function(e, n) {
  return e ? e === !0 ? /* @__PURE__ */ B.createElement(ke, {
    key: "label-implicit",
    viewBox: n
  }) : _e(e) ? /* @__PURE__ */ B.createElement(ke, {
    key: "label-implicit",
    viewBox: n,
    value: e
  }) : /* @__PURE__ */ at.isValidElement(e) ? e.type === ke ? /* @__PURE__ */ at.cloneElement(e, {
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
  }) : Ru(e) ? /* @__PURE__ */ B.createElement(ke, xl({
    viewBox: n
  }, e, {
    key: "label-implicit"
  })) : null : null;
}, H5 = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var u = e.children, l = cD(e), c = Cn(u, ke).map(function(h, d) {
    return /* @__PURE__ */ at.cloneElement(h, {
      viewBox: n || l,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(d)
    });
  });
  if (!r)
    return c;
  var s = U5(e.label, n || l);
  return [s].concat(w5(c));
};
ke.parseViewBox = cD;
ke.renderCallByParent = H5;
var Xm, u2;
function I5() {
  if (u2) return Xm;
  u2 = 1;
  function t(e) {
    var n = e == null ? 0 : e.length;
    return n ? e[n - 1] : void 0;
  }
  return Xm = t, Xm;
}
var G5 = I5();
const Y5 = /* @__PURE__ */ Qt(G5);
function Sl(t) {
  "@babel/helpers - typeof";
  return Sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Sl(t);
}
var X5 = ["valueAccessor"], K5 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function V5(t) {
  return W5(t) || Q5(t) || Z5(t) || F5();
}
function F5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z5(t, e) {
  if (t) {
    if (typeof t == "string") return fb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fb(t, e);
  }
}
function Q5(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function W5(t) {
  if (Array.isArray(t)) return fb(t);
}
function fb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function rs() {
  return rs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, rs.apply(this, arguments);
}
function o2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function l2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? o2(Object(n), !0).forEach(function(r) {
      J5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function J5(t, e, n) {
  return e = tk(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function tk(t) {
  var e = ek(t, "string");
  return Sl(e) == "symbol" ? e : e + "";
}
function ek(t, e) {
  if (Sl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Sl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function c2(t, e) {
  if (t == null) return {};
  var n = nk(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function nk(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var rk = function(e) {
  return Array.isArray(e.value) ? Y5(e.value) : e.value;
};
function Nr(t) {
  var e = t.valueAccessor, n = e === void 0 ? rk : e, r = c2(t, X5), u = r.data, l = r.dataKey, c = r.clockWise, s = r.id, h = r.textBreakAll, d = c2(r, K5);
  return !u || !u.length ? null : /* @__PURE__ */ B.createElement(Jt, {
    className: "recharts-label-list"
  }, u.map(function(y, p) {
    var g = Mt(l) ? n(y, p) : Ge(y && y.payload, l), x = Mt(s) ? {} : {
      id: "".concat(s, "-").concat(p)
    };
    return /* @__PURE__ */ B.createElement(ke, rs({}, Et(y, !0), d, x, {
      parentViewBox: y.parentViewBox,
      value: g,
      textBreakAll: h,
      viewBox: ke.parseViewBox(Mt(c) ? y : l2(l2({}, y), {}, {
        clockWise: c
      })),
      key: "label-".concat(p),
      index: p
    }));
  }));
}
Nr.displayName = "LabelList";
function ak(t, e) {
  return t ? t === !0 ? /* @__PURE__ */ B.createElement(Nr, {
    key: "labelList-implicit",
    data: e
  }) : /* @__PURE__ */ B.isValidElement(t) || At(t) ? /* @__PURE__ */ B.createElement(Nr, {
    key: "labelList-implicit",
    data: e,
    content: t
  }) : Ru(t) ? /* @__PURE__ */ B.createElement(Nr, rs({
    data: e
  }, t, {
    key: "labelList-implicit"
  })) : null : null;
}
function ik(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var r = t.children, u = Cn(r, Nr).map(function(c, s) {
    return /* @__PURE__ */ at.cloneElement(c, {
      data: e,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!n)
    return u;
  var l = ak(t.label, e);
  return [l].concat(V5(u));
}
Nr.renderCallByParent = ik;
function _l(t) {
  "@babel/helpers - typeof";
  return _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _l(t);
}
function sb() {
  return sb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, sb.apply(this, arguments);
}
function f2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function s2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? f2(Object(n), !0).forEach(function(r) {
      uk(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function uk(t, e, n) {
  return e = ok(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ok(t) {
  var e = lk(t, "string");
  return _l(e) == "symbol" ? e : e + "";
}
function lk(t, e) {
  if (_l(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (_l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ck = function(e, n) {
  var r = Hn(n - e), u = Math.min(Math.abs(n - e), 359.999);
  return r * u;
}, bf = function(e) {
  var n = e.cx, r = e.cy, u = e.radius, l = e.angle, c = e.sign, s = e.isExternal, h = e.cornerRadius, d = e.cornerIsExternal, y = h * (s ? 1 : -1) + u, p = Math.asin(h / y) / ns, g = d ? l : l + c * p, x = qe(n, r, y, g), O = qe(n, r, u, g), S = d ? l - c * p : l, b = qe(n, r, y * Math.cos(p * ns), S);
  return {
    center: x,
    circleTangency: O,
    lineTangency: b,
    theta: p
  };
}, fD = function(e) {
  var n = e.cx, r = e.cy, u = e.innerRadius, l = e.outerRadius, c = e.startAngle, s = e.endAngle, h = ck(c, s), d = c + h, y = qe(n, r, l, c), p = qe(n, r, l, d), g = "M ".concat(y.x, ",").concat(y.y, `
    A `).concat(l, ",").concat(l, `,0,
    `).concat(+(Math.abs(h) > 180), ",").concat(+(c > d), `,
    `).concat(p.x, ",").concat(p.y, `
  `);
  if (u > 0) {
    var x = qe(n, r, u, c), O = qe(n, r, u, d);
    g += "L ".concat(O.x, ",").concat(O.y, `
            A `).concat(u, ",").concat(u, `,0,
            `).concat(+(Math.abs(h) > 180), ",").concat(+(c <= d), `,
            `).concat(x.x, ",").concat(x.y, " Z");
  } else
    g += "L ".concat(n, ",").concat(r, " Z");
  return g;
}, fk = function(e) {
  var n = e.cx, r = e.cy, u = e.innerRadius, l = e.outerRadius, c = e.cornerRadius, s = e.forceCornerRadius, h = e.cornerIsExternal, d = e.startAngle, y = e.endAngle, p = Hn(y - d), g = bf({
    cx: n,
    cy: r,
    radius: l,
    angle: d,
    sign: p,
    cornerRadius: c,
    cornerIsExternal: h
  }), x = g.circleTangency, O = g.lineTangency, S = g.theta, b = bf({
    cx: n,
    cy: r,
    radius: l,
    angle: y,
    sign: -p,
    cornerRadius: c,
    cornerIsExternal: h
  }), A = b.circleTangency, T = b.lineTangency, M = b.theta, C = h ? Math.abs(d - y) : Math.abs(d - y) - S - M;
  if (C < 0)
    return s ? "M ".concat(O.x, ",").concat(O.y, `
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(c * 2, `,0
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(-c * 2, `,0
      `) : fD({
      cx: n,
      cy: r,
      innerRadius: u,
      outerRadius: l,
      startAngle: d,
      endAngle: y
    });
  var w = "M ".concat(O.x, ",").concat(O.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(x.x, ",").concat(x.y, `
    A`).concat(l, ",").concat(l, ",0,").concat(+(C > 180), ",").concat(+(p < 0), ",").concat(A.x, ",").concat(A.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(T.x, ",").concat(T.y, `
  `);
  if (u > 0) {
    var E = bf({
      cx: n,
      cy: r,
      radius: u,
      angle: d,
      sign: p,
      isExternal: !0,
      cornerRadius: c,
      cornerIsExternal: h
    }), D = E.circleTangency, R = E.lineTangency, z = E.theta, F = bf({
      cx: n,
      cy: r,
      radius: u,
      angle: y,
      sign: -p,
      isExternal: !0,
      cornerRadius: c,
      cornerIsExternal: h
    }), k = F.circleTangency, $ = F.lineTangency, K = F.theta, Z = h ? Math.abs(d - y) : Math.abs(d - y) - z - K;
    if (Z < 0 && c === 0)
      return "".concat(w, "L").concat(n, ",").concat(r, "Z");
    w += "L".concat($.x, ",").concat($.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(k.x, ",").concat(k.y, `
      A`).concat(u, ",").concat(u, ",0,").concat(+(Z > 180), ",").concat(+(p > 0), ",").concat(D.x, ",").concat(D.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(R.x, ",").concat(R.y, "Z");
  } else
    w += "L".concat(n, ",").concat(r, "Z");
  return w;
}, sk = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, sD = function(e) {
  var n = s2(s2({}, sk), e), r = n.cx, u = n.cy, l = n.innerRadius, c = n.outerRadius, s = n.cornerRadius, h = n.forceCornerRadius, d = n.cornerIsExternal, y = n.startAngle, p = n.endAngle, g = n.className;
  if (c < l || y === p)
    return null;
  var x = qt("recharts-sector", g), O = c - l, S = ei(s, O, 0, !0), b;
  return S > 0 && Math.abs(y - p) < 360 ? b = fk({
    cx: r,
    cy: u,
    innerRadius: l,
    outerRadius: c,
    cornerRadius: Math.min(S, O / 2),
    forceCornerRadius: h,
    cornerIsExternal: d,
    startAngle: y,
    endAngle: p
  }) : b = fD({
    cx: r,
    cy: u,
    innerRadius: l,
    outerRadius: c,
    startAngle: y,
    endAngle: p
  }), /* @__PURE__ */ B.createElement("path", sb({}, Et(n, !0), {
    className: x,
    d: b,
    role: "img"
  }));
};
function Ol(t) {
  "@babel/helpers - typeof";
  return Ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ol(t);
}
function hb() {
  return hb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, hb.apply(this, arguments);
}
function h2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function d2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? h2(Object(n), !0).forEach(function(r) {
      hk(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h2(Object(n)).forEach(function(r) {
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
var v2 = {
  curveBasisClosed: Rq,
  curveBasisOpen: qq,
  curveBasis: Nq,
  curveBumpX: bq,
  curveBumpY: xq,
  curveLinearClosed: zq,
  curveLinear: Ns,
  curveMonotoneX: $q,
  curveMonotoneY: Bq,
  curveNatural: Lq,
  curveStep: kq,
  curveStepAfter: Hq,
  curveStepBefore: Uq
}, xf = function(e) {
  return e.x === +e.x && e.y === +e.y;
}, Ho = function(e) {
  return e.x;
}, Io = function(e) {
  return e.y;
}, pk = function(e, n) {
  if (At(e))
    return e;
  var r = "curve".concat(Ds(e));
  return (r === "curveMonotone" || r === "curveBump") && n ? v2["".concat(r).concat(n === "vertical" ? "Y" : "X")] : v2[r] || Ns;
}, yk = function(e) {
  var n = e.type, r = n === void 0 ? "linear" : n, u = e.points, l = u === void 0 ? [] : u, c = e.baseLine, s = e.layout, h = e.connectNulls, d = h === void 0 ? !1 : h, y = pk(r, s), p = d ? l.filter(function(S) {
    return xf(S);
  }) : l, g;
  if (Array.isArray(c)) {
    var x = d ? c.filter(function(S) {
      return xf(S);
    }) : c, O = p.map(function(S, b) {
      return d2(d2({}, S), {}, {
        base: x[b]
      });
    });
    return s === "vertical" ? g = ff().y(Io).x1(Ho).x0(function(S) {
      return S.base.x;
    }) : g = ff().x(Ho).y1(Io).y0(function(S) {
      return S.base.y;
    }), g.defined(xf).curve(y), g(O);
  }
  return s === "vertical" && st(c) ? g = ff().y(Io).x1(Ho).x0(c) : st(c) ? g = ff().x(Ho).y1(Io).y0(c) : g = mj().x(Ho).y(Io), g.defined(xf).curve(y), g(p);
}, ou = function(e) {
  var n = e.className, r = e.points, u = e.path, l = e.pathRef;
  if ((!r || !r.length) && !u)
    return null;
  var c = r && r.length ? yk(e) : u;
  return /* @__PURE__ */ at.createElement("path", hb({}, Et(e, !1), Ef(e), {
    className: qt("recharts-curve", n),
    d: c,
    ref: l
  }));
}, Km = { exports: {} }, Vm, p2;
function mk() {
  if (p2) return Vm;
  p2 = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vm = t, Vm;
}
var Fm, y2;
function gk() {
  if (y2) return Fm;
  y2 = 1;
  var t = /* @__PURE__ */ mk();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, Fm = function() {
    function r(c, s, h, d, y, p) {
      if (p !== t) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function u() {
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
      arrayOf: u,
      element: r,
      elementType: r,
      instanceOf: u,
      node: r,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return l.PropTypes = l, l;
  }, Fm;
}
var m2;
function bk() {
  return m2 || (m2 = 1, Km.exports = /* @__PURE__ */ gk()()), Km.exports;
}
var xk = /* @__PURE__ */ bk();
const Ht = /* @__PURE__ */ Qt(xk), { getOwnPropertyNames: Sk, getOwnPropertySymbols: _k } = Object, { hasOwnProperty: Ok } = Object.prototype;
function Zm(t, e) {
  return function(r, u, l) {
    return t(r, u, l) && e(r, u, l);
  };
}
function Sf(t) {
  return function(n, r, u) {
    if (!n || !r || typeof n != "object" || typeof r != "object")
      return t(n, r, u);
    const { cache: l } = u, c = l.get(n), s = l.get(r);
    if (c && s)
      return c === r && s === n;
    l.set(n, r), l.set(r, n);
    const h = t(n, r, u);
    return l.delete(n), l.delete(r), h;
  };
}
function Ak(t) {
  return t != null ? t[Symbol.toStringTag] : void 0;
}
function g2(t) {
  return Sk(t).concat(_k(t));
}
const wk = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((t, e) => Ok.call(t, e))
);
function ci(t, e) {
  return t === e || !t && !e && t !== t && e !== e;
}
const Tk = "__v", Ek = "__o", Mk = "_owner", { getOwnPropertyDescriptor: b2, keys: x2 } = Object;
function jk(t, e) {
  return t.byteLength === e.byteLength && as(new Uint8Array(t), new Uint8Array(e));
}
function Ck(t, e, n) {
  let r = t.length;
  if (e.length !== r)
    return !1;
  for (; r-- > 0; )
    if (!n.equals(t[r], e[r], r, r, t, e, n))
      return !1;
  return !0;
}
function Dk(t, e) {
  return t.byteLength === e.byteLength && as(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
}
function Pk(t, e) {
  return ci(t.getTime(), e.getTime());
}
function Nk(t, e) {
  return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack;
}
function Rk(t, e) {
  return t === e;
}
function S2(t, e, n) {
  const r = t.size;
  if (r !== e.size)
    return !1;
  if (!r)
    return !0;
  const u = new Array(r), l = t.entries();
  let c, s, h = 0;
  for (; (c = l.next()) && !c.done; ) {
    const d = e.entries();
    let y = !1, p = 0;
    for (; (s = d.next()) && !s.done; ) {
      if (u[p]) {
        p++;
        continue;
      }
      const g = c.value, x = s.value;
      if (n.equals(g[0], x[0], h, p, t, e, n) && n.equals(g[1], x[1], g[0], x[0], t, e, n)) {
        y = u[p] = !0;
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
const qk = ci;
function zk(t, e, n) {
  const r = x2(t);
  let u = r.length;
  if (x2(e).length !== u)
    return !1;
  for (; u-- > 0; )
    if (!hD(t, e, n, r[u]))
      return !1;
  return !0;
}
function Go(t, e, n) {
  const r = g2(t);
  let u = r.length;
  if (g2(e).length !== u)
    return !1;
  let l, c, s;
  for (; u-- > 0; )
    if (l = r[u], !hD(t, e, n, l) || (c = b2(t, l), s = b2(e, l), (c || s) && (!c || !s || c.configurable !== s.configurable || c.enumerable !== s.enumerable || c.writable !== s.writable)))
      return !1;
  return !0;
}
function $k(t, e) {
  return ci(t.valueOf(), e.valueOf());
}
function Bk(t, e) {
  return t.source === e.source && t.flags === e.flags;
}
function _2(t, e, n) {
  const r = t.size;
  if (r !== e.size)
    return !1;
  if (!r)
    return !0;
  const u = new Array(r), l = t.values();
  let c, s;
  for (; (c = l.next()) && !c.done; ) {
    const h = e.values();
    let d = !1, y = 0;
    for (; (s = h.next()) && !s.done; ) {
      if (!u[y] && n.equals(c.value, s.value, c.value, s.value, t, e, n)) {
        d = u[y] = !0;
        break;
      }
      y++;
    }
    if (!d)
      return !1;
  }
  return !0;
}
function as(t, e) {
  let n = t.byteLength;
  if (e.byteLength !== n || t.byteOffset !== e.byteOffset)
    return !1;
  for (; n-- > 0; )
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Lk(t, e) {
  return t.hostname === e.hostname && t.pathname === e.pathname && t.protocol === e.protocol && t.port === e.port && t.hash === e.hash && t.username === e.username && t.password === e.password;
}
function hD(t, e, n, r) {
  return (r === Mk || r === Ek || r === Tk) && (t.$$typeof || e.$$typeof) ? !0 : wk(e, r) && n.equals(t[r], e[r], r, r, t, e, n);
}
const kk = "[object ArrayBuffer]", Uk = "[object Arguments]", Hk = "[object Boolean]", Ik = "[object DataView]", Gk = "[object Date]", Yk = "[object Error]", Xk = "[object Map]", Kk = "[object Number]", Vk = "[object Object]", Fk = "[object RegExp]", Zk = "[object Set]", Qk = "[object String]", Wk = {
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
}, Jk = "[object URL]", tU = Object.prototype.toString;
function eU({ areArrayBuffersEqual: t, areArraysEqual: e, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: u, areFunctionsEqual: l, areMapsEqual: c, areNumbersEqual: s, areObjectsEqual: h, arePrimitiveWrappersEqual: d, areRegExpsEqual: y, areSetsEqual: p, areTypedArraysEqual: g, areUrlsEqual: x, unknownTagComparators: O }) {
  return function(b, A, T) {
    if (b === A)
      return !0;
    if (b == null || A == null)
      return !1;
    const M = typeof b;
    if (M !== typeof A)
      return !1;
    if (M !== "object")
      return M === "number" ? s(b, A, T) : M === "function" ? l(b, A, T) : !1;
    const C = b.constructor;
    if (C !== A.constructor)
      return !1;
    if (C === Object)
      return h(b, A, T);
    if (Array.isArray(b))
      return e(b, A, T);
    if (C === Date)
      return r(b, A, T);
    if (C === RegExp)
      return y(b, A, T);
    if (C === Map)
      return c(b, A, T);
    if (C === Set)
      return p(b, A, T);
    const w = tU.call(b);
    if (w === Gk)
      return r(b, A, T);
    if (w === Fk)
      return y(b, A, T);
    if (w === Xk)
      return c(b, A, T);
    if (w === Zk)
      return p(b, A, T);
    if (w === Vk)
      return typeof b.then != "function" && typeof A.then != "function" && h(b, A, T);
    if (w === Jk)
      return x(b, A, T);
    if (w === Yk)
      return u(b, A, T);
    if (w === Uk)
      return h(b, A, T);
    if (Wk[w])
      return g(b, A, T);
    if (w === kk)
      return t(b, A, T);
    if (w === Ik)
      return n(b, A, T);
    if (w === Hk || w === Kk || w === Qk)
      return d(b, A, T);
    if (O) {
      let E = O[w];
      if (!E) {
        const D = Ak(b);
        D && (E = O[D]);
      }
      if (E)
        return E(b, A, T);
    }
    return !1;
  };
}
function nU({ circular: t, createCustomConfig: e, strict: n }) {
  let r = {
    areArrayBuffersEqual: jk,
    areArraysEqual: n ? Go : Ck,
    areDataViewsEqual: Dk,
    areDatesEqual: Pk,
    areErrorsEqual: Nk,
    areFunctionsEqual: Rk,
    areMapsEqual: n ? Zm(S2, Go) : S2,
    areNumbersEqual: qk,
    areObjectsEqual: n ? Go : zk,
    arePrimitiveWrappersEqual: $k,
    areRegExpsEqual: Bk,
    areSetsEqual: n ? Zm(_2, Go) : _2,
    areTypedArraysEqual: n ? Zm(as, Go) : as,
    areUrlsEqual: Lk,
    unknownTagComparators: void 0
  };
  if (e && (r = Object.assign({}, r, e(r))), t) {
    const u = Sf(r.areArraysEqual), l = Sf(r.areMapsEqual), c = Sf(r.areObjectsEqual), s = Sf(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: u,
      areMapsEqual: l,
      areObjectsEqual: c,
      areSetsEqual: s
    });
  }
  return r;
}
function rU(t) {
  return function(e, n, r, u, l, c, s) {
    return t(e, n, s);
  };
}
function aU({ circular: t, comparator: e, createState: n, equals: r, strict: u }) {
  if (n)
    return function(s, h) {
      const { cache: d = t ? /* @__PURE__ */ new WeakMap() : void 0, meta: y } = n();
      return e(s, h, {
        cache: d,
        equals: r,
        meta: y,
        strict: u
      });
    };
  if (t)
    return function(s, h) {
      return e(s, h, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: r,
        meta: void 0,
        strict: u
      });
    };
  const l = {
    cache: void 0,
    equals: r,
    meta: void 0,
    strict: u
  };
  return function(s, h) {
    return e(s, h, l);
  };
}
const iU = Oa();
Oa({ strict: !0 });
Oa({ circular: !0 });
Oa({
  circular: !0,
  strict: !0
});
Oa({
  createInternalComparator: () => ci
});
Oa({
  strict: !0,
  createInternalComparator: () => ci
});
Oa({
  circular: !0,
  createInternalComparator: () => ci
});
Oa({
  circular: !0,
  createInternalComparator: () => ci,
  strict: !0
});
function Oa(t = {}) {
  const { circular: e = !1, createInternalComparator: n, createState: r, strict: u = !1 } = t, l = nU(t), c = eU(l), s = n ? n(c) : rU(c);
  return aU({ circular: e, comparator: c, createState: r, equals: s, strict: u });
}
function uU(t) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(t);
}
function O2(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = -1, r = function u(l) {
    n < 0 && (n = l), l - n > e ? (t(l), n = -1) : uU(u);
  };
  requestAnimationFrame(r);
}
function db(t) {
  "@babel/helpers - typeof";
  return db = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, db(t);
}
function oU(t) {
  return sU(t) || fU(t) || cU(t) || lU();
}
function lU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cU(t, e) {
  if (t) {
    if (typeof t == "string") return A2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A2(t, e);
  }
}
function A2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function fU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function sU(t) {
  if (Array.isArray(t)) return t;
}
function hU() {
  var t = {}, e = function() {
    return null;
  }, n = !1, r = function u(l) {
    if (!n) {
      if (Array.isArray(l)) {
        if (!l.length)
          return;
        var c = l, s = oU(c), h = s[0], d = s.slice(1);
        if (typeof h == "number") {
          O2(u.bind(null, d), h);
          return;
        }
        u(h), O2(u.bind(null, d));
        return;
      }
      db(l) === "object" && (t = l, e(t)), typeof l == "function" && l();
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
function Al(t) {
  "@babel/helpers - typeof";
  return Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Al(t);
}
function w2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function T2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? w2(Object(n), !0).forEach(function(r) {
      dD(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function dD(t, e, n) {
  return e = dU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function dU(t) {
  var e = vU(t, "string");
  return Al(e) === "symbol" ? e : String(e);
}
function vU(t, e) {
  if (Al(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Al(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var pU = function(e, n) {
  return [Object.keys(e), Object.keys(n)].reduce(function(r, u) {
    return r.filter(function(l) {
      return u.includes(l);
    });
  });
}, yU = function(e) {
  return e;
}, mU = function(e) {
  return e.replace(/([A-Z])/g, function(n) {
    return "-".concat(n.toLowerCase());
  });
}, tl = function(e, n) {
  return Object.keys(n).reduce(function(r, u) {
    return T2(T2({}, r), {}, dD({}, u, e(u, n[u])));
  }, {});
}, E2 = function(e, n, r) {
  return e.map(function(u) {
    return "".concat(mU(u), " ").concat(n, "ms ").concat(r);
  }).join(",");
};
function gU(t, e) {
  return SU(t) || xU(t, e) || vD(t, e) || bU();
}
function bU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xU(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function SU(t) {
  if (Array.isArray(t)) return t;
}
function _U(t) {
  return wU(t) || AU(t) || vD(t) || OU();
}
function OU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vD(t, e) {
  if (t) {
    if (typeof t == "string") return vb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vb(t, e);
  }
}
function AU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function wU(t) {
  if (Array.isArray(t)) return vb(t);
}
function vb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var is = 1e-4, pD = function(e, n) {
  return [0, 3 * e, 3 * n - 6 * e, 3 * e - 3 * n + 1];
}, yD = function(e, n) {
  return e.map(function(r, u) {
    return r * Math.pow(n, u);
  }).reduce(function(r, u) {
    return r + u;
  });
}, M2 = function(e, n) {
  return function(r) {
    var u = pD(e, n);
    return yD(u, r);
  };
}, TU = function(e, n) {
  return function(r) {
    var u = pD(e, n), l = [].concat(_U(u.map(function(c, s) {
      return c * s;
    }).slice(1)), [0]);
    return yD(l, r);
  };
}, j2 = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var u = n[0], l = n[1], c = n[2], s = n[3];
  if (n.length === 1)
    switch (n[0]) {
      case "linear":
        u = 0, l = 0, c = 1, s = 1;
        break;
      case "ease":
        u = 0.25, l = 0.1, c = 0.25, s = 1;
        break;
      case "ease-in":
        u = 0.42, l = 0, c = 1, s = 1;
        break;
      case "ease-out":
        u = 0.42, l = 0, c = 0.58, s = 1;
        break;
      case "ease-in-out":
        u = 0, l = 0, c = 0.58, s = 1;
        break;
      default: {
        var h = n[0].split("(");
        if (h[0] === "cubic-bezier" && h[1].split(")")[0].split(",").length === 4) {
          var d = h[1].split(")")[0].split(",").map(function(b) {
            return parseFloat(b);
          }), y = gU(d, 4);
          u = y[0], l = y[1], c = y[2], s = y[3];
        }
      }
    }
  var p = M2(u, c), g = M2(l, s), x = TU(u, c), O = function(A) {
    return A > 1 ? 1 : A < 0 ? 0 : A;
  }, S = function(A) {
    for (var T = A > 1 ? 1 : A, M = T, C = 0; C < 8; ++C) {
      var w = p(M) - T, E = x(M);
      if (Math.abs(w - T) < is || E < is)
        return g(M);
      M = O(M - w / E);
    }
    return g(M);
  };
  return S.isStepper = !1, S;
}, EU = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.stiff, r = n === void 0 ? 100 : n, u = e.damping, l = u === void 0 ? 8 : u, c = e.dt, s = c === void 0 ? 17 : c, h = function(y, p, g) {
    var x = -(y - p) * r, O = g * l, S = g + (x - O) * s / 1e3, b = g * s / 1e3 + y;
    return Math.abs(b - p) < is && Math.abs(S) < is ? [p, 0] : [b, S];
  };
  return h.isStepper = !0, h.dt = s, h;
}, MU = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var u = n[0];
  if (typeof u == "string")
    switch (u) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return j2(u);
      case "spring":
        return EU();
      default:
        if (u.split("(")[0] === "cubic-bezier")
          return j2(u);
    }
  return typeof u == "function" ? u : null;
};
function wl(t) {
  "@babel/helpers - typeof";
  return wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wl(t);
}
function C2(t) {
  return DU(t) || CU(t) || mD(t) || jU();
}
function jU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function DU(t) {
  if (Array.isArray(t)) return yb(t);
}
function D2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? D2(Object(n), !0).forEach(function(r) {
      pb(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function pb(t, e, n) {
  return e = PU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function PU(t) {
  var e = NU(t, "string");
  return wl(e) === "symbol" ? e : String(e);
}
function NU(t, e) {
  if (wl(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (wl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function RU(t, e) {
  return $U(t) || zU(t, e) || mD(t, e) || qU();
}
function qU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mD(t, e) {
  if (t) {
    if (typeof t == "string") return yb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yb(t, e);
  }
}
function yb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function zU(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function $U(t) {
  if (Array.isArray(t)) return t;
}
var us = function(e, n, r) {
  return e + (n - e) * r;
}, mb = function(e) {
  var n = e.from, r = e.to;
  return n !== r;
}, BU = function t(e, n, r) {
  var u = tl(function(l, c) {
    if (mb(c)) {
      var s = e(c.from, c.to, c.velocity), h = RU(s, 2), d = h[0], y = h[1];
      return Ne(Ne({}, c), {}, {
        from: d,
        velocity: y
      });
    }
    return c;
  }, n);
  return r < 1 ? tl(function(l, c) {
    return mb(c) ? Ne(Ne({}, c), {}, {
      velocity: us(c.velocity, u[l].velocity, r),
      from: us(c.from, u[l].from, r)
    }) : c;
  }, n) : t(e, u, r - 1);
};
const LU = (function(t, e, n, r, u) {
  var l = pU(t, e), c = l.reduce(function(b, A) {
    return Ne(Ne({}, b), {}, pb({}, A, [t[A], e[A]]));
  }, {}), s = l.reduce(function(b, A) {
    return Ne(Ne({}, b), {}, pb({}, A, {
      from: t[A],
      velocity: 0,
      to: e[A]
    }));
  }, {}), h = -1, d, y, p = function() {
    return null;
  }, g = function() {
    return tl(function(A, T) {
      return T.from;
    }, s);
  }, x = function() {
    return !Object.values(s).filter(mb).length;
  }, O = function(A) {
    d || (d = A);
    var T = A - d, M = T / n.dt;
    s = BU(n, s, M), u(Ne(Ne(Ne({}, t), e), g())), d = A, x() || (h = requestAnimationFrame(p));
  }, S = function(A) {
    y || (y = A);
    var T = (A - y) / r, M = tl(function(w, E) {
      return us.apply(void 0, C2(E).concat([n(T)]));
    }, c);
    if (u(Ne(Ne(Ne({}, t), e), M)), T < 1)
      h = requestAnimationFrame(p);
    else {
      var C = tl(function(w, E) {
        return us.apply(void 0, C2(E).concat([n(1)]));
      }, c);
      u(Ne(Ne(Ne({}, t), e), C));
    }
  };
  return p = n.isStepper ? O : S, function() {
    return requestAnimationFrame(p), function() {
      cancelAnimationFrame(h);
    };
  };
});
function bu(t) {
  "@babel/helpers - typeof";
  return bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bu(t);
}
var kU = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function UU(t, e) {
  if (t == null) return {};
  var n = HU(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function HU(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), u, l;
  for (l = 0; l < r.length; l++)
    u = r[l], !(e.indexOf(u) >= 0) && (n[u] = t[u]);
  return n;
}
function Qm(t) {
  return XU(t) || YU(t) || GU(t) || IU();
}
function IU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GU(t, e) {
  if (t) {
    if (typeof t == "string") return gb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gb(t, e);
  }
}
function YU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function XU(t) {
  if (Array.isArray(t)) return gb(t);
}
function gb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function P2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? P2(Object(n), !0).forEach(function(r) {
      Fo(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Fo(t, e, n) {
  return e = gD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function KU(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function VU(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, gD(r.key), r);
  }
}
function FU(t, e, n) {
  return e && VU(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function gD(t) {
  var e = ZU(t, "string");
  return bu(e) === "symbol" ? e : String(e);
}
function ZU(t, e) {
  if (bu(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (bu(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function QU(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && bb(t, e);
}
function bb(t, e) {
  return bb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, bb(t, e);
}
function WU(t) {
  var e = JU();
  return function() {
    var r = os(t), u;
    if (e) {
      var l = os(this).constructor;
      u = Reflect.construct(r, arguments, l);
    } else
      u = r.apply(this, arguments);
    return xb(this, u);
  };
}
function xb(t, e) {
  if (e && (bu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Sb(t);
}
function Sb(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function JU() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function os(t) {
  return os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, os(t);
}
var nr = /* @__PURE__ */ (function(t) {
  QU(n, t);
  var e = WU(n);
  function n(r, u) {
    var l;
    KU(this, n), l = e.call(this, r, u);
    var c = l.props, s = c.isActive, h = c.attributeName, d = c.from, y = c.to, p = c.steps, g = c.children, x = c.duration;
    if (l.handleStyleChange = l.handleStyleChange.bind(Sb(l)), l.changeStyle = l.changeStyle.bind(Sb(l)), !s || x <= 0)
      return l.state = {
        style: {}
      }, typeof g == "function" && (l.state = {
        style: y
      }), xb(l);
    if (p && p.length)
      l.state = {
        style: p[0].style
      };
    else if (d) {
      if (typeof g == "function")
        return l.state = {
          style: d
        }, xb(l);
      l.state = {
        style: h ? Fo({}, h, d) : d
      };
    } else
      l.state = {
        style: {}
      };
    return l;
  }
  return FU(n, [{
    key: "componentDidMount",
    value: function() {
      var u = this.props, l = u.isActive, c = u.canBegin;
      this.mounted = !0, !(!l || !c) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(u) {
      var l = this.props, c = l.isActive, s = l.canBegin, h = l.attributeName, d = l.shouldReAnimate, y = l.to, p = l.from, g = this.state.style;
      if (s) {
        if (!c) {
          var x = {
            style: h ? Fo({}, h, y) : y
          };
          this.state && g && (h && g[h] !== y || !h && g !== y) && this.setState(x);
          return;
        }
        if (!(iU(u.to, y) && u.canBegin && u.isActive)) {
          var O = !u.canBegin || !u.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var S = O || d ? p : u.to;
          if (this.state && g) {
            var b = {
              style: h ? Fo({}, h, S) : S
            };
            (h && g[h] !== S || !h && g !== S) && this.setState(b);
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
      var u = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), u && u();
    }
  }, {
    key: "handleStyleChange",
    value: function(u) {
      this.changeStyle(u);
    }
  }, {
    key: "changeStyle",
    value: function(u) {
      this.mounted && this.setState({
        style: u
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(u) {
      var l = this, c = u.from, s = u.to, h = u.duration, d = u.easing, y = u.begin, p = u.onAnimationEnd, g = u.onAnimationStart, x = LU(c, s, MU(d), h, this.changeStyle), O = function() {
        l.stopJSAnimation = x();
      };
      this.manager.start([g, y, O, h, p]);
    }
  }, {
    key: "runStepAnimation",
    value: function(u) {
      var l = this, c = u.steps, s = u.begin, h = u.onAnimationStart, d = c[0], y = d.style, p = d.duration, g = p === void 0 ? 0 : p, x = function(S, b, A) {
        if (A === 0)
          return S;
        var T = b.duration, M = b.easing, C = M === void 0 ? "ease" : M, w = b.style, E = b.properties, D = b.onAnimationEnd, R = A > 0 ? c[A - 1] : b, z = E || Object.keys(w);
        if (typeof C == "function" || C === "spring")
          return [].concat(Qm(S), [l.runJSAnimation.bind(l, {
            from: R.style,
            to: w,
            duration: T,
            easing: C
          }), T]);
        var F = E2(z, T, C), k = Bn(Bn(Bn({}, R.style), w), {}, {
          transition: F
        });
        return [].concat(Qm(S), [k, T, D]).filter(yU);
      };
      return this.manager.start([h].concat(Qm(c.reduce(x, [y, Math.max(g, s)])), [u.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(u) {
      this.manager || (this.manager = hU());
      var l = u.begin, c = u.duration, s = u.attributeName, h = u.to, d = u.easing, y = u.onAnimationStart, p = u.onAnimationEnd, g = u.steps, x = u.children, O = this.manager;
      if (this.unSubscribe = O.subscribe(this.handleStyleChange), typeof d == "function" || typeof x == "function" || d === "spring") {
        this.runJSAnimation(u);
        return;
      }
      if (g.length > 1) {
        this.runStepAnimation(u);
        return;
      }
      var S = s ? Fo({}, s, h) : h, b = E2(Object.keys(S), c, d);
      O.start([y, l, Bn(Bn({}, S), {}, {
        transition: b
      }), c, p]);
    }
  }, {
    key: "render",
    value: function() {
      var u = this.props, l = u.children;
      u.begin;
      var c = u.duration;
      u.attributeName, u.easing;
      var s = u.isActive;
      u.steps, u.from, u.to, u.canBegin, u.onAnimationEnd, u.shouldReAnimate, u.onAnimationReStart;
      var h = UU(u, kU), d = at.Children.count(l), y = this.state.style;
      if (typeof l == "function")
        return l(y);
      if (!s || d === 0 || c <= 0)
        return l;
      var p = function(x) {
        var O = x.props, S = O.style, b = S === void 0 ? {} : S, A = O.className, T = /* @__PURE__ */ at.cloneElement(x, Bn(Bn({}, h), {}, {
          style: Bn(Bn({}, b), y),
          className: A
        }));
        return T;
      };
      return d === 1 ? p(at.Children.only(l)) : /* @__PURE__ */ B.createElement("div", null, at.Children.map(l, function(g) {
        return p(g);
      }));
    }
  }]), n;
})(at.PureComponent);
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
var Wm = { exports: {} }, Be = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N2;
function tH() {
  if (N2) return Be;
  N2 = 1;
  var t = Xb();
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
  }, u = Symbol.for("react.portal");
  function l(h, d, y) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
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
      var y = d.as, p = s(y, d.crossOrigin), g = typeof d.integrity == "string" ? d.integrity : void 0, x = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      y === "style" ? r.d.S(
        h,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: p,
          integrity: g,
          fetchPriority: x
        }
      ) : y === "script" && r.d.X(h, {
        crossOrigin: p,
        integrity: g,
        fetchPriority: x,
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
var R2;
function eH() {
  if (R2) return Wm.exports;
  R2 = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), Wm.exports = tH(), Wm.exports;
}
function Tl(t) {
  "@babel/helpers - typeof";
  return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tl(t);
}
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ls.apply(this, arguments);
}
function nH(t, e) {
  return uH(t) || iH(t, e) || aH(t, e) || rH();
}
function rH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aH(t, e) {
  if (t) {
    if (typeof t == "string") return q2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return q2(t, e);
  }
}
function q2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function iH(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function uH(t) {
  if (Array.isArray(t)) return t;
}
function z2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? z2(Object(n), !0).forEach(function(r) {
      oH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : z2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function oH(t, e, n) {
  return e = lH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function lH(t) {
  var e = cH(t, "string");
  return Tl(e) == "symbol" ? e : e + "";
}
function cH(t, e) {
  if (Tl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Tl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var B2 = function(e, n, r, u, l) {
  var c = Math.min(Math.abs(r) / 2, Math.abs(u) / 2), s = u >= 0 ? 1 : -1, h = r >= 0 ? 1 : -1, d = u >= 0 && r >= 0 || u < 0 && r < 0 ? 1 : 0, y;
  if (c > 0 && l instanceof Array) {
    for (var p = [0, 0, 0, 0], g = 0, x = 4; g < x; g++)
      p[g] = l[g] > c ? c : l[g];
    y = "M".concat(e, ",").concat(n + s * p[0]), p[0] > 0 && (y += "A ".concat(p[0], ",").concat(p[0], ",0,0,").concat(d, ",").concat(e + h * p[0], ",").concat(n)), y += "L ".concat(e + r - h * p[1], ",").concat(n), p[1] > 0 && (y += "A ".concat(p[1], ",").concat(p[1], ",0,0,").concat(d, `,
        `).concat(e + r, ",").concat(n + s * p[1])), y += "L ".concat(e + r, ",").concat(n + u - s * p[2]), p[2] > 0 && (y += "A ".concat(p[2], ",").concat(p[2], ",0,0,").concat(d, `,
        `).concat(e + r - h * p[2], ",").concat(n + u)), y += "L ".concat(e + h * p[3], ",").concat(n + u), p[3] > 0 && (y += "A ".concat(p[3], ",").concat(p[3], ",0,0,").concat(d, `,
        `).concat(e, ",").concat(n + u - s * p[3])), y += "Z";
  } else if (c > 0 && l === +l && l > 0) {
    var O = Math.min(c, l);
    y = "M ".concat(e, ",").concat(n + s * O, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e + h * O, ",").concat(n, `
            L `).concat(e + r - h * O, ",").concat(n, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e + r, ",").concat(n + s * O, `
            L `).concat(e + r, ",").concat(n + u - s * O, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e + r - h * O, ",").concat(n + u, `
            L `).concat(e + h * O, ",").concat(n + u, `
            A `).concat(O, ",").concat(O, ",0,0,").concat(d, ",").concat(e, ",").concat(n + u - s * O, " Z");
  } else
    y = "M ".concat(e, ",").concat(n, " h ").concat(r, " v ").concat(u, " h ").concat(-r, " Z");
  return y;
}, fH = function(e, n) {
  if (!e || !n)
    return !1;
  var r = e.x, u = e.y, l = n.x, c = n.y, s = n.width, h = n.height;
  if (Math.abs(s) > 0 && Math.abs(h) > 0) {
    var d = Math.min(l, l + s), y = Math.max(l, l + s), p = Math.min(c, c + h), g = Math.max(c, c + h);
    return r >= d && r <= y && u >= p && u <= g;
  }
  return !1;
}, sH = {
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
}, G0 = function(e) {
  var n = $2($2({}, sH), e), r = at.useRef(), u = at.useState(-1), l = nH(u, 2), c = l[0], s = l[1];
  at.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var C = r.current.getTotalLength();
        C && s(C);
      } catch {
      }
  }, []);
  var h = n.x, d = n.y, y = n.width, p = n.height, g = n.radius, x = n.className, O = n.animationEasing, S = n.animationDuration, b = n.animationBegin, A = n.isAnimationActive, T = n.isUpdateAnimationActive;
  if (h !== +h || d !== +d || y !== +y || p !== +p || y === 0 || p === 0)
    return null;
  var M = qt("recharts-rectangle", x);
  return T ? /* @__PURE__ */ B.createElement(nr, {
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
    isActive: T
  }, function(C) {
    var w = C.width, E = C.height, D = C.x, R = C.y;
    return /* @__PURE__ */ B.createElement(nr, {
      canBegin: c > 0,
      from: "0px ".concat(c === -1 ? 1 : c, "px"),
      to: "".concat(c, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: S,
      isActive: A,
      easing: O
    }, /* @__PURE__ */ B.createElement("path", ls({}, Et(n, !0), {
      className: M,
      d: B2(D, R, w, E, g),
      ref: r
    })));
  }) : /* @__PURE__ */ B.createElement("path", ls({}, Et(n, !0), {
    className: M,
    d: B2(h, d, y, p, g)
  }));
};
function _b() {
  return _b = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, _b.apply(this, arguments);
}
var Ks = function(e) {
  var n = e.cx, r = e.cy, u = e.r, l = e.className, c = qt("recharts-dot", l);
  return n === +n && r === +r && u === +u ? /* @__PURE__ */ at.createElement("circle", _b({}, Et(e, !1), Ef(e), {
    className: c,
    cx: n,
    cy: r,
    r: u
  })) : null;
};
function El(t) {
  "@babel/helpers - typeof";
  return El = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, El(t);
}
var hH = ["x", "y", "top", "left", "width", "height", "className"];
function Ob() {
  return Ob = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ob.apply(this, arguments);
}
function L2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dH(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? L2(Object(n), !0).forEach(function(r) {
      vH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function vH(t, e, n) {
  return e = pH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function pH(t) {
  var e = yH(t, "string");
  return El(e) == "symbol" ? e : e + "";
}
function yH(t, e) {
  if (El(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (El(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function mH(t, e) {
  if (t == null) return {};
  var n = gH(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function gH(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var bH = function(e, n, r, u, l, c) {
  return "M".concat(e, ",").concat(l, "v").concat(u, "M").concat(c, ",").concat(n, "h").concat(r);
}, xH = function(e) {
  var n = e.x, r = n === void 0 ? 0 : n, u = e.y, l = u === void 0 ? 0 : u, c = e.top, s = c === void 0 ? 0 : c, h = e.left, d = h === void 0 ? 0 : h, y = e.width, p = y === void 0 ? 0 : y, g = e.height, x = g === void 0 ? 0 : g, O = e.className, S = mH(e, hH), b = dH({
    x: r,
    y: l,
    top: s,
    left: d,
    width: p,
    height: x
  }, S);
  return !st(r) || !st(l) || !st(p) || !st(x) || !st(s) || !st(d) ? null : /* @__PURE__ */ B.createElement("path", Ob({}, Et(b, !0), {
    className: qt("recharts-cross", O),
    d: bH(r, l, p, x, s, d)
  }));
}, Jm, k2;
function SH() {
  if (k2) return Jm;
  k2 = 1;
  var t = kj(), e = t(Object.getPrototypeOf, Object);
  return Jm = e, Jm;
}
var tg, U2;
function _H() {
  if (U2) return tg;
  U2 = 1;
  var t = $r(), e = SH(), n = Br(), r = "[object Object]", u = Function.prototype, l = Object.prototype, c = u.toString, s = l.hasOwnProperty, h = c.call(Object);
  function d(y) {
    if (!n(y) || t(y) != r)
      return !1;
    var p = e(y);
    if (p === null)
      return !0;
    var g = s.call(p, "constructor") && p.constructor;
    return typeof g == "function" && g instanceof g && c.call(g) == h;
  }
  return tg = d, tg;
}
var OH = _H();
const AH = /* @__PURE__ */ Qt(OH);
var eg, H2;
function wH() {
  if (H2) return eg;
  H2 = 1;
  var t = $r(), e = Br(), n = "[object Boolean]";
  function r(u) {
    return u === !0 || u === !1 || e(u) && t(u) == n;
  }
  return eg = r, eg;
}
var TH = wH();
const EH = /* @__PURE__ */ Qt(TH);
function Ml(t) {
  "@babel/helpers - typeof";
  return Ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ml(t);
}
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, cs.apply(this, arguments);
}
function MH(t, e) {
  return PH(t) || DH(t, e) || CH(t, e) || jH();
}
function jH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CH(t, e) {
  if (t) {
    if (typeof t == "string") return I2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I2(t, e);
  }
}
function I2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function DH(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function PH(t) {
  if (Array.isArray(t)) return t;
}
function G2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Y2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? G2(Object(n), !0).forEach(function(r) {
      NH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function NH(t, e, n) {
  return e = RH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function RH(t) {
  var e = qH(t, "string");
  return Ml(e) == "symbol" ? e : e + "";
}
function qH(t, e) {
  if (Ml(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ml(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var X2 = function(e, n, r, u, l) {
  var c = r - u, s;
  return s = "M ".concat(e, ",").concat(n), s += "L ".concat(e + r, ",").concat(n), s += "L ".concat(e + r - c / 2, ",").concat(n + l), s += "L ".concat(e + r - c / 2 - u, ",").concat(n + l), s += "L ".concat(e, ",").concat(n, " Z"), s;
}, zH = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, $H = function(e) {
  var n = Y2(Y2({}, zH), e), r = at.useRef(), u = at.useState(-1), l = MH(u, 2), c = l[0], s = l[1];
  at.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var M = r.current.getTotalLength();
        M && s(M);
      } catch {
      }
  }, []);
  var h = n.x, d = n.y, y = n.upperWidth, p = n.lowerWidth, g = n.height, x = n.className, O = n.animationEasing, S = n.animationDuration, b = n.animationBegin, A = n.isUpdateAnimationActive;
  if (h !== +h || d !== +d || y !== +y || p !== +p || g !== +g || y === 0 && p === 0 || g === 0)
    return null;
  var T = qt("recharts-trapezoid", x);
  return A ? /* @__PURE__ */ B.createElement(nr, {
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
    isActive: A
  }, function(M) {
    var C = M.upperWidth, w = M.lowerWidth, E = M.height, D = M.x, R = M.y;
    return /* @__PURE__ */ B.createElement(nr, {
      canBegin: c > 0,
      from: "0px ".concat(c === -1 ? 1 : c, "px"),
      to: "".concat(c, "px 0px"),
      attributeName: "strokeDasharray",
      begin: b,
      duration: S,
      easing: O
    }, /* @__PURE__ */ B.createElement("path", cs({}, Et(n, !0), {
      className: T,
      d: X2(D, R, C, w, E),
      ref: r
    })));
  }) : /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("path", cs({}, Et(n, !0), {
    className: T,
    d: X2(h, d, y, p, g)
  })));
}, BH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function jl(t) {
  "@babel/helpers - typeof";
  return jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jl(t);
}
function LH(t, e) {
  if (t == null) return {};
  var n = kH(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function kH(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function K2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? K2(Object(n), !0).forEach(function(r) {
      UH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function UH(t, e, n) {
  return e = HH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function HH(t) {
  var e = IH(t, "string");
  return jl(e) == "symbol" ? e : e + "";
}
function IH(t, e) {
  if (jl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function GH(t, e) {
  return fs(fs({}, e), t);
}
function YH(t, e) {
  return t === "symbols";
}
function V2(t) {
  var e = t.shapeType, n = t.elementProps;
  switch (e) {
    case "rectangle":
      return /* @__PURE__ */ B.createElement(G0, n);
    case "trapezoid":
      return /* @__PURE__ */ B.createElement($H, n);
    case "sector":
      return /* @__PURE__ */ B.createElement(sD, n);
    case "symbols":
      if (YH(e))
        return /* @__PURE__ */ B.createElement(l0, n);
      break;
    default:
      return null;
  }
}
function XH(t) {
  return /* @__PURE__ */ at.isValidElement(t) ? t.props : t;
}
function KH(t) {
  var e = t.option, n = t.shapeType, r = t.propTransformer, u = r === void 0 ? GH : r, l = t.activeClassName, c = l === void 0 ? "recharts-active-shape" : l, s = t.isActive, h = LH(t, BH), d;
  if (/* @__PURE__ */ at.isValidElement(e))
    d = /* @__PURE__ */ at.cloneElement(e, fs(fs({}, h), XH(e)));
  else if (At(e))
    d = e(h);
  else if (AH(e) && !EH(e)) {
    var y = u(e, h);
    d = /* @__PURE__ */ B.createElement(V2, {
      shapeType: n,
      elementProps: y
    });
  } else {
    var p = h;
    d = /* @__PURE__ */ B.createElement(V2, {
      shapeType: n,
      elementProps: p
    });
  }
  return s ? /* @__PURE__ */ B.createElement(Jt, {
    className: c
  }, d) : d;
}
function Vs(t, e) {
  return e != null && "trapezoids" in t.props;
}
function Fs(t, e) {
  return e != null && "sectors" in t.props;
}
function Cl(t, e) {
  return e != null && "points" in t.props;
}
function VH(t, e) {
  var n, r, u = t.x === (e == null || (n = e.labelViewBox) === null || n === void 0 ? void 0 : n.x) || t.x === e.x, l = t.y === (e == null || (r = e.labelViewBox) === null || r === void 0 ? void 0 : r.y) || t.y === e.y;
  return u && l;
}
function FH(t, e) {
  var n = t.endAngle === e.endAngle, r = t.startAngle === e.startAngle;
  return n && r;
}
function ZH(t, e) {
  var n = t.x === e.x, r = t.y === e.y, u = t.z === e.z;
  return n && r && u;
}
function QH(t, e) {
  var n;
  return Vs(t, e) ? n = VH : Fs(t, e) ? n = FH : Cl(t, e) && (n = ZH), n;
}
function WH(t, e) {
  var n;
  return Vs(t, e) ? n = "trapezoids" : Fs(t, e) ? n = "sectors" : Cl(t, e) && (n = "points"), n;
}
function JH(t, e) {
  if (Vs(t, e)) {
    var n;
    return (n = e.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  if (Fs(t, e)) {
    var r;
    return (r = e.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  return Cl(t, e) ? e.payload : {};
}
function t9(t) {
  var e = t.activeTooltipItem, n = t.graphicalItem, r = t.itemData, u = WH(n, e), l = JH(n, e), c = r.filter(function(h, d) {
    var y = mu(l, h), p = n.props[u].filter(function(O) {
      var S = QH(n, e);
      return S(O, e);
    }), g = n.props[u].indexOf(p[p.length - 1]), x = d === g;
    return y && x;
  }), s = r.indexOf(c[c.length - 1]);
  return s;
}
var ng, F2;
function e9() {
  if (F2) return ng;
  F2 = 1;
  var t = Math.ceil, e = Math.max;
  function n(r, u, l, c) {
    for (var s = -1, h = e(t((u - r) / (l || 1)), 0), d = Array(h); h--; )
      d[c ? h : ++s] = r, r += l;
    return d;
  }
  return ng = n, ng;
}
var rg, Z2;
function bD() {
  if (Z2) return rg;
  Z2 = 1;
  var t = nC(), e = 1 / 0, n = 17976931348623157e292;
  function r(u) {
    if (!u)
      return u === 0 ? u : 0;
    if (u = t(u), u === e || u === -e) {
      var l = u < 0 ? -1 : 1;
      return l * n;
    }
    return u === u ? u : 0;
  }
  return rg = r, rg;
}
var ag, Q2;
function n9() {
  if (Q2) return ag;
  Q2 = 1;
  var t = e9(), e = $s(), n = bD();
  function r(u) {
    return function(l, c, s) {
      return s && typeof s != "number" && e(l, c, s) && (c = s = void 0), l = n(l), c === void 0 ? (c = l, l = 0) : c = n(c), s = s === void 0 ? l < c ? 1 : -1 : n(s), t(l, c, s, u);
    };
  }
  return ag = r, ag;
}
var ig, W2;
function r9() {
  if (W2) return ig;
  W2 = 1;
  var t = n9(), e = t();
  return ig = e, ig;
}
var a9 = r9();
const ss = /* @__PURE__ */ Qt(a9);
function Dl(t) {
  "@babel/helpers - typeof";
  return Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dl(t);
}
function J2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? J2(Object(n), !0).forEach(function(r) {
      xD(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : J2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xD(t, e, n) {
  return e = i9(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function i9(t) {
  var e = u9(t, "string");
  return Dl(e) == "symbol" ? e : e + "";
}
function u9(t, e) {
  if (Dl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Dl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var o9 = ["Webkit", "Moz", "O", "ms"], l9 = function(e, n) {
  var r = e.replace(/(\w)/, function(l) {
    return l.toUpperCase();
  }), u = o9.reduce(function(l, c) {
    return tM(tM({}, l), {}, xD({}, c + r, n));
  }, {});
  return u[e] = n, u;
};
function xu(t) {
  "@babel/helpers - typeof";
  return xu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xu(t);
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
function eM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ug(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? eM(Object(n), !0).forEach(function(r) {
      sn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : eM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function c9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, _D(r.key), r);
  }
}
function f9(t, e, n) {
  return e && nM(t.prototype, e), n && nM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function s9(t, e, n) {
  return e = ds(e), h9(t, SD() ? Reflect.construct(e, n || [], ds(t).constructor) : e.apply(t, n));
}
function h9(t, e) {
  if (e && (xu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d9(t);
}
function d9(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function SD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (SD = function() {
    return !!t;
  })();
}
function ds(t) {
  return ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ds(t);
}
function v9(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ab(t, e);
}
function Ab(t, e) {
  return Ab = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Ab(t, e);
}
function sn(t, e, n) {
  return e = _D(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function _D(t) {
  var e = p9(t, "string");
  return xu(e) == "symbol" ? e : e + "";
}
function p9(t, e) {
  if (xu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (xu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var y9 = function(e) {
  var n = e.data, r = e.startIndex, u = e.endIndex, l = e.x, c = e.width, s = e.travellerWidth;
  if (!n || !n.length)
    return {};
  var h = n.length, d = Wo().domain(ss(0, h)).range([l, l + c - s]), y = d.domain().map(function(p) {
    return d(p);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: d(r),
    endX: d(u),
    scale: d,
    scaleValues: y
  };
}, rM = function(e) {
  return e.changedTouches && !!e.changedTouches.length;
}, Su = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return c9(this, e), r = s9(this, e, [n]), sn(r, "handleDrag", function(u) {
      r.leaveTimer && (clearTimeout(r.leaveTimer), r.leaveTimer = null), r.state.isTravellerMoving ? r.handleTravellerMove(u) : r.state.isSlideMoving && r.handleSlideDrag(u);
    }), sn(r, "handleTouchMove", function(u) {
      u.changedTouches != null && u.changedTouches.length > 0 && r.handleDrag(u.changedTouches[0]);
    }), sn(r, "handleDragEnd", function() {
      r.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var u = r.props, l = u.endIndex, c = u.onDragEnd, s = u.startIndex;
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
    }), sn(r, "handleSlideDragStart", function(u) {
      var l = rM(u) ? u.changedTouches[0] : u;
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
  return v9(e, t), f9(e, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(r) {
      var u = r.startX, l = r.endX, c = this.state.scaleValues, s = this.props, h = s.gap, d = s.data, y = d.length - 1, p = Math.min(u, l), g = Math.max(u, l), x = e.getIndexInRange(c, p), O = e.getIndexInRange(c, g);
      return {
        startIndex: x - x % h,
        endIndex: O === y ? y : O - O % h
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(r) {
      var u = this.props, l = u.data, c = u.tickFormatter, s = u.dataKey, h = Ge(l[r], s, r);
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
      var u = this.state, l = u.slideMoveStartX, c = u.startX, s = u.endX, h = this.props, d = h.x, y = h.width, p = h.travellerWidth, g = h.startIndex, x = h.endIndex, O = h.onChange, S = r.pageX - l;
      S > 0 ? S = Math.min(S, d + y - p - s, d + y - p - c) : S < 0 && (S = Math.max(S, d - c, d - s));
      var b = this.getIndex({
        startX: c + S,
        endX: s + S
      });
      (b.startIndex !== g || b.endIndex !== x) && O && O(b), this.setState({
        startX: c + S,
        endX: s + S,
        slideMoveStartX: r.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(r, u) {
      var l = rM(u) ? u.changedTouches[0] : u;
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
      var u = this.state, l = u.brushMoveStartX, c = u.movingTravellerId, s = u.endX, h = u.startX, d = this.state[c], y = this.props, p = y.x, g = y.width, x = y.travellerWidth, O = y.onChange, S = y.gap, b = y.data, A = {
        startX: this.state.startX,
        endX: this.state.endX
      }, T = r.pageX - l;
      T > 0 ? T = Math.min(T, p + g - x - d) : T < 0 && (T = Math.max(T, p - d)), A[c] = d + T;
      var M = this.getIndex(A), C = M.startIndex, w = M.endIndex, E = function() {
        var R = b.length - 1;
        return c === "startX" && (s > h ? C % S === 0 : w % S === 0) || s < h && w === R || c === "endX" && (s > h ? w % S === 0 : C % S === 0) || s > h && w === R;
      };
      this.setState(sn(sn({}, c, d + T), "brushMoveStartX", r.pageX), function() {
        O && E() && O(M);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(r, u) {
      var l = this, c = this.state, s = c.scaleValues, h = c.startX, d = c.endX, y = this.state[u], p = s.indexOf(y);
      if (p !== -1) {
        var g = p + r;
        if (!(g === -1 || g >= s.length)) {
          var x = s[g];
          u === "startX" && x >= d || u === "endX" && x <= h || this.setState(sn({}, u, x), function() {
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
      var r = this.props, u = r.x, l = r.y, c = r.width, s = r.height, h = r.fill, d = r.stroke;
      return /* @__PURE__ */ B.createElement("rect", {
        stroke: d,
        fill: h,
        x: u,
        y: l,
        width: c,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var r = this.props, u = r.x, l = r.y, c = r.width, s = r.height, h = r.data, d = r.children, y = r.padding, p = at.Children.only(d);
      return p ? /* @__PURE__ */ B.cloneElement(p, {
        x: u,
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
    value: function(r, u) {
      var l, c, s = this, h = this.props, d = h.y, y = h.travellerWidth, p = h.height, g = h.traveller, x = h.ariaLabel, O = h.data, S = h.startIndex, b = h.endIndex, A = Math.max(r, this.props.x), T = ug(ug({}, Et(this.props, !1)), {}, {
        x: A,
        y: d,
        width: y,
        height: p
      }), M = x || "Min value: ".concat((l = O[S]) === null || l === void 0 ? void 0 : l.name, ", Max value: ").concat((c = O[b]) === null || c === void 0 ? void 0 : c.name);
      return /* @__PURE__ */ B.createElement(Jt, {
        tabIndex: 0,
        role: "slider",
        "aria-label": M,
        "aria-valuenow": r,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[u],
        onTouchStart: this.travellerDragStartHandlers[u],
        onKeyDown: function(w) {
          ["ArrowLeft", "ArrowRight"].includes(w.key) && (w.preventDefault(), w.stopPropagation(), s.handleTravellerMoveKeyboard(w.key === "ArrowRight" ? 1 : -1, u));
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
      }, e.renderTraveller(g, T));
    }
  }, {
    key: "renderSlide",
    value: function(r, u) {
      var l = this.props, c = l.y, s = l.height, h = l.stroke, d = l.travellerWidth, y = Math.min(r, u) + d, p = Math.max(Math.abs(u - r) - d, 0);
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
      var r = this.props, u = r.startIndex, l = r.endIndex, c = r.y, s = r.height, h = r.travellerWidth, d = r.stroke, y = this.state, p = y.startX, g = y.endX, x = 5, O = {
        pointerEvents: "none",
        fill: d
      };
      return /* @__PURE__ */ B.createElement(Jt, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ B.createElement(Lf, hs({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(p, g) - x,
        y: c + s / 2
      }, O), this.getTextOfTick(u)), /* @__PURE__ */ B.createElement(Lf, hs({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(p, g) + h + x,
        y: c + s / 2
      }, O), this.getTextOfTick(l)));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, u = r.data, l = r.className, c = r.children, s = r.x, h = r.y, d = r.width, y = r.height, p = r.alwaysShowText, g = this.state, x = g.startX, O = g.endX, S = g.isTextActive, b = g.isSlideMoving, A = g.isTravellerMoving, T = g.isTravellerFocused;
      if (!u || !u.length || !st(s) || !st(h) || !st(d) || !st(y) || d <= 0 || y <= 0)
        return null;
      var M = qt("recharts-brush", l), C = B.Children.count(c) === 1, w = l9("userSelect", "none");
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: w
      }, this.renderBackground(), C && this.renderPanorama(), this.renderSlide(x, O), this.renderTravellerLayer(x, "startX"), this.renderTravellerLayer(O, "endX"), (S || b || A || T || p) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(r) {
      var u = r.x, l = r.y, c = r.width, s = r.height, h = r.stroke, d = Math.floor(l + s / 2) - 1;
      return /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement("rect", {
        x: u,
        y: l,
        width: c,
        height: s,
        fill: h,
        stroke: "none"
      }), /* @__PURE__ */ B.createElement("line", {
        x1: u + 1,
        y1: d,
        x2: u + c - 1,
        y2: d,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ B.createElement("line", {
        x1: u + 1,
        y1: d + 2,
        x2: u + c - 1,
        y2: d + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(r, u) {
      var l;
      return /* @__PURE__ */ B.isValidElement(r) ? l = /* @__PURE__ */ B.cloneElement(r, u) : At(r) ? l = r(u) : l = e.renderDefaultTraveller(u), l;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(r, u) {
      var l = r.data, c = r.width, s = r.x, h = r.travellerWidth, d = r.updateId, y = r.startIndex, p = r.endIndex;
      if (l !== u.prevData || d !== u.prevUpdateId)
        return ug({
          prevData: l,
          prevTravellerWidth: h,
          prevUpdateId: d,
          prevX: s,
          prevWidth: c
        }, l && l.length ? y9({
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
      if (u.scale && (c !== u.prevWidth || s !== u.prevX || h !== u.prevTravellerWidth)) {
        u.scale.range([s, s + c - h]);
        var g = u.scale.domain().map(function(x) {
          return u.scale(x);
        });
        return {
          prevData: l,
          prevTravellerWidth: h,
          prevUpdateId: d,
          prevX: s,
          prevWidth: c,
          startX: u.scale(r.startIndex),
          endX: u.scale(r.endIndex),
          scaleValues: g
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(r, u) {
      for (var l = r.length, c = 0, s = l - 1; s - c > 1; ) {
        var h = Math.floor((c + s) / 2);
        r[h] > u ? s = h : c = h;
      }
      return u >= r[s] ? s : c;
    }
  }]);
})(at.PureComponent);
sn(Su, "displayName", "Brush");
sn(Su, "defaultProps", {
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
var og, aM;
function m9() {
  if (aM) return og;
  aM = 1;
  var t = p0();
  function e(n, r) {
    var u;
    return t(n, function(l, c, s) {
      return u = r(l, c, s), !u;
    }), !!u;
  }
  return og = e, og;
}
var lg, iM;
function g9() {
  if (iM) return lg;
  iM = 1;
  var t = Nj(), e = xa(), n = m9(), r = Je(), u = $s();
  function l(c, s, h) {
    var d = r(c) ? t : n;
    return h && u(c, s, h) && (s = void 0), d(c, e(s, 3));
  }
  return lg = l, lg;
}
var b9 = g9();
const x9 = /* @__PURE__ */ Qt(b9);
var Jn = function(e, n) {
  var r = e.alwaysShow, u = e.ifOverflow;
  return r && (u = "extendDomain"), u === n;
}, cg, uM;
function S9() {
  if (uM) return cg;
  uM = 1;
  var t = Qj();
  function e(n, r, u) {
    r == "__proto__" && t ? t(n, r, {
      configurable: !0,
      enumerable: !0,
      value: u,
      writable: !0
    }) : n[r] = u;
  }
  return cg = e, cg;
}
var fg, oM;
function _9() {
  if (oM) return fg;
  oM = 1;
  var t = S9(), e = Fj(), n = xa();
  function r(u, l) {
    var c = {};
    return l = n(l, 3), e(u, function(s, h, d) {
      t(c, h, l(s, h, d));
    }), c;
  }
  return fg = r, fg;
}
var O9 = _9();
const A9 = /* @__PURE__ */ Qt(O9);
var sg, lM;
function w9() {
  if (lM) return sg;
  lM = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length; ++r < u; )
      if (!n(e[r], r, e))
        return !1;
    return !0;
  }
  return sg = t, sg;
}
var hg, cM;
function T9() {
  if (cM) return hg;
  cM = 1;
  var t = p0();
  function e(n, r) {
    var u = !0;
    return t(n, function(l, c, s) {
      return u = !!r(l, c, s), u;
    }), u;
  }
  return hg = e, hg;
}
var dg, fM;
function E9() {
  if (fM) return dg;
  fM = 1;
  var t = w9(), e = T9(), n = xa(), r = Je(), u = $s();
  function l(c, s, h) {
    var d = r(c) ? t : e;
    return h && u(c, s, h) && (s = void 0), d(c, n(s, 3));
  }
  return dg = l, dg;
}
var M9 = E9();
const OD = /* @__PURE__ */ Qt(M9);
var j9 = ["x", "y"];
function Pl(t) {
  "@babel/helpers - typeof";
  return Pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pl(t);
}
function wb() {
  return wb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, wb.apply(this, arguments);
}
function sM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sM(Object(n), !0).forEach(function(r) {
      C9(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function C9(t, e, n) {
  return e = D9(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function D9(t) {
  var e = P9(t, "string");
  return Pl(e) == "symbol" ? e : e + "";
}
function P9(t, e) {
  if (Pl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Pl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function N9(t, e) {
  if (t == null) return {};
  var n = R9(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function R9(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function q9(t, e) {
  var n = t.x, r = t.y, u = N9(t, j9), l = "".concat(n), c = parseInt(l, 10), s = "".concat(r), h = parseInt(s, 10), d = "".concat(e.height || u.height), y = parseInt(d, 10), p = "".concat(e.width || u.width), g = parseInt(p, 10);
  return Yo(Yo(Yo(Yo(Yo({}, e), u), c ? {
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
function hM(t) {
  return /* @__PURE__ */ B.createElement(KH, wb({
    shapeType: "rectangle",
    propTransformer: q9,
    activeClassName: "recharts-active-bar"
  }, t));
}
var z9 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(r, u) {
    if (typeof e == "number") return e;
    var l = st(r) || U3(r);
    return l ? e(r, u) : (l || ri(), n);
  };
}, $9 = ["value", "background"], AD;
function _u(t) {
  "@babel/helpers - typeof";
  return _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _u(t);
}
function B9(t, e) {
  if (t == null) return {};
  var n = L9(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function L9(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, vs.apply(this, arguments);
}
function dM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function me(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dM(Object(n), !0).forEach(function(r) {
      ma(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function k9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, TD(r.key), r);
  }
}
function U9(t, e, n) {
  return e && vM(t.prototype, e), n && vM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function H9(t, e, n) {
  return e = ps(e), I9(t, wD() ? Reflect.construct(e, n || [], ps(t).constructor) : e.apply(t, n));
}
function I9(t, e) {
  if (e && (_u(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G9(t);
}
function G9(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function wD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wD = function() {
    return !!t;
  })();
}
function ps(t) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ps(t);
}
function Y9(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Tb(t, e);
}
function Tb(t, e) {
  return Tb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Tb(t, e);
}
function ma(t, e, n) {
  return e = TD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function TD(t) {
  var e = X9(t, "string");
  return _u(e) == "symbol" ? e : e + "";
}
function X9(t, e) {
  if (_u(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (_u(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var fi = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    k9(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = H9(this, e, [].concat(u)), ma(n, "state", {
      isAnimationFinished: !1
    }), ma(n, "id", zu("recharts-bar-")), ma(n, "handleAnimationEnd", function() {
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
  return Y9(e, t), U9(e, [{
    key: "renderRectanglesStatically",
    value: function(r) {
      var u = this, l = this.props, c = l.shape, s = l.dataKey, h = l.activeIndex, d = l.activeBar, y = Et(this.props, !1);
      return r && r.map(function(p, g) {
        var x = g === h, O = x ? d : c, S = me(me(me({}, y), p), {}, {
          isActive: x,
          option: O,
          index: g,
          dataKey: s,
          onAnimationStart: u.handleAnimationStart,
          onAnimationEnd: u.handleAnimationEnd
        });
        return /* @__PURE__ */ B.createElement(Jt, vs({
          className: "recharts-bar-rectangle"
        }, Mf(u.props, p, g), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(p == null ? void 0 : p.x, "-").concat(p == null ? void 0 : p.y, "-").concat(p == null ? void 0 : p.value, "-").concat(g)
        }), /* @__PURE__ */ B.createElement(hM, S));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var r = this, u = this.props, l = u.data, c = u.layout, s = u.isAnimationActive, h = u.animationBegin, d = u.animationDuration, y = u.animationEasing, p = u.animationId, g = this.state.prevData;
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
      }, function(x) {
        var O = x.t, S = l.map(function(b, A) {
          var T = g && g[A];
          if (T) {
            var M = Re(T.x, b.x), C = Re(T.y, b.y), w = Re(T.width, b.width), E = Re(T.height, b.height);
            return me(me({}, b), {}, {
              x: M(O),
              y: C(O),
              width: w(O),
              height: E(O)
            });
          }
          if (c === "horizontal") {
            var D = Re(0, b.height), R = D(O);
            return me(me({}, b), {}, {
              y: b.y + b.height - R,
              height: R
            });
          }
          var z = Re(0, b.width), F = z(O);
          return me(me({}, b), {}, {
            width: F
          });
        });
        return /* @__PURE__ */ B.createElement(Jt, null, r.renderRectanglesStatically(S));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var r = this.props, u = r.data, l = r.isAnimationActive, c = this.state.prevData;
      return l && u && u.length && (!c || !mu(c, u)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(u);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var r = this, u = this.props, l = u.data, c = u.dataKey, s = u.activeIndex, h = Et(this.props.background, !1);
      return l.map(function(d, y) {
        d.value;
        var p = d.background, g = B9(d, $9);
        if (!p)
          return null;
        var x = me(me(me(me(me({}, g), {}, {
          fill: "#eee"
        }, p), h), Mf(r.props, d, y)), {}, {
          onAnimationStart: r.handleAnimationStart,
          onAnimationEnd: r.handleAnimationEnd,
          dataKey: c,
          index: y,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ B.createElement(hM, vs({
          key: "background-bar-".concat(y),
          option: r.props.background,
          isActive: y === s
        }, x));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(r, u) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var l = this.props, c = l.data, s = l.xAxis, h = l.yAxis, d = l.layout, y = l.children, p = Cn(y, Il);
      if (!p)
        return null;
      var g = d === "vertical" ? c[0].height / 2 : c[0].width / 2, x = function(b, A) {
        var T = Array.isArray(b.value) ? b.value[1] : b.value;
        return {
          x: b.x,
          y: b.y,
          value: T,
          errorVal: Ge(b, A)
        };
      }, O = {
        clipPath: r ? "url(#clipPath-".concat(u, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, O, p.map(function(S) {
        return /* @__PURE__ */ B.cloneElement(S, {
          key: "error-bar-".concat(u, "-").concat(S.props.dataKey),
          data: c,
          xAxis: s,
          yAxis: h,
          layout: d,
          offset: g,
          dataPointFormatter: x
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, u = r.hide, l = r.data, c = r.className, s = r.xAxis, h = r.yAxis, d = r.left, y = r.top, p = r.width, g = r.height, x = r.isAnimationActive, O = r.background, S = r.id;
      if (u || !l || !l.length)
        return null;
      var b = this.state.isAnimationFinished, A = qt("recharts-bar", c), T = s && s.allowDataOverflow, M = h && h.allowDataOverflow, C = T || M, w = Mt(S) ? this.id : S;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: A
      }, T || M ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(w)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: T ? d : d - p / 2,
        y: M ? y : y - g / 2,
        width: T ? p : p * 2,
        height: M ? g : g * 2
      }))) : null, /* @__PURE__ */ B.createElement(Jt, {
        className: "recharts-bar-rectangles",
        clipPath: C ? "url(#clipPath-".concat(w, ")") : null
      }, O ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(C, w), (!x || b) && Nr.renderCallByParent(this.props, l));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, u) {
      return r.animationId !== u.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curData: r.data,
        prevData: u.curData
      } : r.data !== u.curData ? {
        curData: r.data
      } : null;
    }
  }]);
})(at.PureComponent);
AD = fi;
ma(fi, "displayName", "Bar");
ma(fi, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !ui.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
ma(fi, "getComposedData", function(t) {
  var e = t.props, n = t.item, r = t.barPosition, u = t.bandSize, l = t.xAxis, c = t.yAxis, s = t.xAxisTicks, h = t.yAxisTicks, d = t.stackedData, y = t.dataStartIndex, p = t.displayedData, g = t.offset, x = i5(r, n);
  if (!x)
    return null;
  var O = e.layout, S = n.type.defaultProps, b = S !== void 0 ? me(me({}, S), n.props) : n.props, A = b.dataKey, T = b.children, M = b.minPointSize, C = O === "horizontal" ? c : l, w = d ? C.scale.domain() : null, E = d5({
    numericAxis: C
  }), D = Cn(T, g0), R = p.map(function(z, F) {
    var k, $, K, Z, V, N;
    d ? k = u5(d[y + F], w) : (k = Ge(z, A), Array.isArray(k) || (k = [E, k]));
    var I = z9(M, AD.defaultProps.minPointSize)(k[1], F);
    if (O === "horizontal") {
      var W, ut = [c.scale(k[0]), c.scale(k[1])], lt = ut[0], P = ut[1];
      $ = WE({
        axis: l,
        ticks: s,
        bandSize: u,
        offset: x.offset,
        entry: z,
        index: F
      }), K = (W = P ?? lt) !== null && W !== void 0 ? W : void 0, Z = x.size;
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
      if ($ = vt, K = WE({
        axis: c,
        ticks: h,
        bandSize: u,
        offset: x.offset,
        entry: z,
        index: F
      }), Z = mt - vt, V = x.size, N = {
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
      tooltipPayload: [lD(n, z)],
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
function Nl(t) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nl(t);
}
function K9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ED(r.key), r);
  }
}
function V9(t, e, n) {
  return e && pM(t.prototype, e), n && pM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function yM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ln(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yM(Object(n), !0).forEach(function(r) {
      Zs(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Zs(t, e, n) {
  return e = ED(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ED(t) {
  var e = F9(t, "string");
  return Nl(e) == "symbol" ? e : e + "";
}
function F9(t, e) {
  if (Nl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Nl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Y0 = function(e, n, r, u, l) {
  var c = e.width, s = e.height, h = e.layout, d = e.children, y = Object.keys(n), p = {
    left: r.left,
    leftMirror: r.left,
    right: c - r.right,
    rightMirror: c - r.right,
    top: r.top,
    topMirror: r.top,
    bottom: s - r.bottom,
    bottomMirror: s - r.bottom
  }, g = !!hn(d, fi);
  return y.reduce(function(x, O) {
    var S = n[O], b = S.orientation, A = S.domain, T = S.padding, M = T === void 0 ? {} : T, C = S.mirror, w = S.reversed, E = "".concat(b).concat(C ? "Mirror" : ""), D, R, z, F, k;
    if (S.type === "number" && (S.padding === "gap" || S.padding === "no-gap")) {
      var $ = A[1] - A[0], K = 1 / 0, Z = S.categoricalDomain.sort(G3);
      if (Z.forEach(function(ft, vt) {
        vt > 0 && (K = Math.min((ft || 0) - (Z[vt - 1] || 0), K));
      }), Number.isFinite(K)) {
        var V = K / $, N = S.layout === "vertical" ? r.height : r.width;
        if (S.padding === "gap" && (D = V * N / 2), S.padding === "no-gap") {
          var I = ei(e.barCategoryGap, V * N), W = V * N / 2;
          D = W - I - (W - I) / N * I;
        }
      }
    }
    u === "xAxis" ? R = [r.left + (M.left || 0) + (D || 0), r.left + r.width - (M.right || 0) - (D || 0)] : u === "yAxis" ? R = h === "horizontal" ? [r.top + r.height - (M.bottom || 0), r.top + (M.top || 0)] : [r.top + (M.top || 0) + (D || 0), r.top + r.height - (M.bottom || 0) - (D || 0)] : R = S.range, w && (R = [R[1], R[0]]);
    var ut = r5(S, l, g), lt = ut.scale, P = ut.realScaleType;
    lt.domain(A).range(R), a5(lt);
    var U = h5(lt, Ln(Ln({}, S), {}, {
      realScaleType: P
    }));
    u === "xAxis" ? (k = b === "top" && !C || b === "bottom" && C, z = r.left, F = p[E] - k * S.height) : u === "yAxis" && (k = b === "left" && !C || b === "right" && C, z = p[E] - k * S.width, F = r.top);
    var et = Ln(Ln(Ln({}, S), U), {}, {
      realScaleType: P,
      x: z,
      y: F,
      scale: lt,
      width: u === "xAxis" ? r.width : S.width,
      height: u === "yAxis" ? r.height : S.height
    });
    return et.bandSize = es(et, U), !S.hide && u === "xAxis" ? p[E] += (k ? -1 : 1) * et.height : S.hide || (p[E] += (k ? -1 : 1) * et.width), Ln(Ln({}, x), {}, Zs({}, O, et));
  }, {});
}, MD = function(e, n) {
  var r = e.x, u = e.y, l = n.x, c = n.y;
  return {
    x: Math.min(r, l),
    y: Math.min(u, c),
    width: Math.abs(l - r),
    height: Math.abs(c - u)
  };
}, Z9 = function(e) {
  var n = e.x1, r = e.y1, u = e.x2, l = e.y2;
  return MD({
    x: n,
    y: r
  }, {
    x: u,
    y: l
  });
}, jD = /* @__PURE__ */ (function() {
  function t(e) {
    K9(this, t), this.scale = e;
  }
  return V9(t, [{
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
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = r.bandAware, l = r.position;
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
        if (u) {
          var h = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(n) + h;
        }
        return this.scale(n);
      }
    }
  }, {
    key: "isInRange",
    value: function(n) {
      var r = this.range(), u = r[0], l = r[r.length - 1];
      return u <= l ? n >= u && n <= l : n >= l && n <= u;
    }
  }], [{
    key: "create",
    value: function(n) {
      return new t(n);
    }
  }]);
})();
Zs(jD, "EPS", 1e-4);
var X0 = function(e) {
  var n = Object.keys(e).reduce(function(r, u) {
    return Ln(Ln({}, r), {}, Zs({}, u, jD.create(e[u])));
  }, {});
  return Ln(Ln({}, n), {}, {
    apply: function(u) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = l.bandAware, s = l.position;
      return A9(u, function(h, d) {
        return n[d].apply(h, {
          bandAware: c,
          position: s
        });
      });
    },
    isInRange: function(u) {
      return OD(u, function(l, c) {
        return n[c].isInRange(l);
      });
    }
  });
};
function Q9(t) {
  return (t % 180 + 180) % 180;
}
var W9 = function(e) {
  var n = e.width, r = e.height, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = Q9(u), c = l * Math.PI / 180, s = Math.atan(r / n), h = c > s && c < Math.PI - s ? r / Math.sin(c) : n / Math.cos(c);
  return Math.abs(h);
}, vg, mM;
function J9() {
  if (mM) return vg;
  mM = 1;
  var t = xa(), e = Bl(), n = qs();
  function r(u) {
    return function(l, c, s) {
      var h = Object(l);
      if (!e(l)) {
        var d = t(c, 3);
        l = n(l), c = function(p) {
          return d(h[p], p, h);
        };
      }
      var y = u(l, c, s);
      return y > -1 ? h[d ? l[y] : y] : void 0;
    };
  }
  return vg = r, vg;
}
var pg, gM;
function t7() {
  if (gM) return pg;
  gM = 1;
  var t = bD();
  function e(n) {
    var r = t(n), u = r % 1;
    return r === r ? u ? r - u : r : 0;
  }
  return pg = e, pg;
}
var yg, bM;
function e7() {
  if (bM) return yg;
  bM = 1;
  var t = Gj(), e = xa(), n = t7(), r = Math.max;
  function u(l, c, s) {
    var h = l == null ? 0 : l.length;
    if (!h)
      return -1;
    var d = s == null ? 0 : n(s);
    return d < 0 && (d = r(h + d, 0)), t(l, e(c, 3), d);
  }
  return yg = u, yg;
}
var mg, xM;
function n7() {
  if (xM) return mg;
  xM = 1;
  var t = J9(), e = e7(), n = t(e);
  return mg = n, mg;
}
var r7 = n7();
const a7 = /* @__PURE__ */ Qt(r7);
var i7 = ij();
const u7 = /* @__PURE__ */ Qt(i7);
var o7 = u7(function(t) {
  return {
    x: t.left,
    y: t.top,
    width: t.width,
    height: t.height
  };
}, function(t) {
  return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join("");
}), K0 = /* @__PURE__ */ at.createContext(void 0), V0 = /* @__PURE__ */ at.createContext(void 0), CD = /* @__PURE__ */ at.createContext(void 0), DD = /* @__PURE__ */ at.createContext({}), PD = /* @__PURE__ */ at.createContext(void 0), ND = /* @__PURE__ */ at.createContext(0), RD = /* @__PURE__ */ at.createContext(0), SM = function(e) {
  var n = e.state, r = n.xAxisMap, u = n.yAxisMap, l = n.offset, c = e.clipPathId, s = e.children, h = e.width, d = e.height, y = o7(l);
  return /* @__PURE__ */ B.createElement(K0.Provider, {
    value: r
  }, /* @__PURE__ */ B.createElement(V0.Provider, {
    value: u
  }, /* @__PURE__ */ B.createElement(DD.Provider, {
    value: l
  }, /* @__PURE__ */ B.createElement(CD.Provider, {
    value: y
  }, /* @__PURE__ */ B.createElement(PD.Provider, {
    value: c
  }, /* @__PURE__ */ B.createElement(ND.Provider, {
    value: d
  }, /* @__PURE__ */ B.createElement(RD.Provider, {
    value: h
  }, s)))))));
}, l7 = function() {
  return at.useContext(PD);
}, qD = function(e) {
  var n = at.useContext(K0);
  n == null && ri();
  var r = n[e];
  return r == null && ri(), r;
}, c7 = function() {
  var e = at.useContext(K0);
  return pa(e);
}, f7 = function() {
  var e = at.useContext(V0), n = a7(e, function(r) {
    return OD(r.domain, Number.isFinite);
  });
  return n || pa(e);
}, zD = function(e) {
  var n = at.useContext(V0);
  n == null && ri();
  var r = n[e];
  return r == null && ri(), r;
}, s7 = function() {
  var e = at.useContext(CD);
  return e;
}, h7 = function() {
  return at.useContext(DD);
}, F0 = function() {
  return at.useContext(RD);
}, Z0 = function() {
  return at.useContext(ND);
};
function Ou(t) {
  "@babel/helpers - typeof";
  return Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ou(t);
}
function d7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function v7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, BD(r.key), r);
  }
}
function p7(t, e, n) {
  return e && v7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function y7(t, e, n) {
  return e = ys(e), m7(t, $D() ? Reflect.construct(e, n || [], ys(t).constructor) : e.apply(t, n));
}
function m7(t, e) {
  if (e && (Ou(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g7(t);
}
function g7(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function $D() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($D = function() {
    return !!t;
  })();
}
function ys(t) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ys(t);
}
function b7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Eb(t, e);
}
function Eb(t, e) {
  return Eb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Eb(t, e);
}
function _M(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function OM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _M(Object(n), !0).forEach(function(r) {
      Q0(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _M(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Q0(t, e, n) {
  return e = BD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function BD(t) {
  var e = x7(t, "string");
  return Ou(e) == "symbol" ? e : e + "";
}
function x7(t, e) {
  if (Ou(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ou(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function S7(t, e) {
  return w7(t) || A7(t, e) || O7(t, e) || _7();
}
function _7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O7(t, e) {
  if (t) {
    if (typeof t == "string") return AM(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AM(t, e);
  }
}
function AM(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function A7(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function w7(t) {
  if (Array.isArray(t)) return t;
}
function Mb() {
  return Mb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Mb.apply(this, arguments);
}
var T7 = function(e, n) {
  var r;
  return /* @__PURE__ */ B.isValidElement(e) ? r = /* @__PURE__ */ B.cloneElement(e, n) : At(e) ? r = e(n) : r = /* @__PURE__ */ B.createElement("line", Mb({}, n, {
    className: "recharts-reference-line-line"
  })), r;
}, E7 = function(e, n, r, u, l, c, s, h, d) {
  var y = l.x, p = l.y, g = l.width, x = l.height;
  if (r) {
    var O = d.y, S = e.y.apply(O, {
      position: c
    });
    if (Jn(d, "discard") && !e.y.isInRange(S))
      return null;
    var b = [{
      x: y + g,
      y: S
    }, {
      x: y,
      y: S
    }];
    return h === "left" ? b.reverse() : b;
  }
  if (n) {
    var A = d.x, T = e.x.apply(A, {
      position: c
    });
    if (Jn(d, "discard") && !e.x.isInRange(T))
      return null;
    var M = [{
      x: T,
      y: p + x
    }, {
      x: T,
      y: p
    }];
    return s === "top" ? M.reverse() : M;
  }
  if (u) {
    var C = d.segment, w = C.map(function(E) {
      return e.apply(E, {
        position: c
      });
    });
    return Jn(d, "discard") && x9(w, function(E) {
      return !e.isInRange(E);
    }) ? null : w;
  }
  return null;
};
function M7(t) {
  var e = t.x, n = t.y, r = t.segment, u = t.xAxisId, l = t.yAxisId, c = t.shape, s = t.className, h = t.alwaysShow, d = l7(), y = qD(u), p = zD(l), g = s7();
  if (!d || !g)
    return null;
  Dr(h === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var x = X0({
    x: y.scale,
    y: p.scale
  }), O = _e(e), S = _e(n), b = r && r.length === 2, A = E7(x, O, S, b, g, t.position, y.orientation, p.orientation, t);
  if (!A)
    return null;
  var T = S7(A, 2), M = T[0], C = M.x, w = M.y, E = T[1], D = E.x, R = E.y, z = Jn(t, "hidden") ? "url(#".concat(d, ")") : void 0, F = OM(OM({
    clipPath: z
  }, Et(t, !0)), {}, {
    x1: C,
    y1: w,
    x2: D,
    y2: R
  });
  return /* @__PURE__ */ B.createElement(Jt, {
    className: qt("recharts-reference-line", s)
  }, T7(c, F), ke.renderCallByParent(t, Z9({
    x1: C,
    y1: w,
    x2: D,
    y2: R
  })));
}
var W0 = /* @__PURE__ */ (function(t) {
  function e() {
    return d7(this, e), y7(this, e, arguments);
  }
  return b7(e, t), p7(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ B.createElement(M7, this.props);
    }
  }]);
})(B.Component);
Q0(W0, "displayName", "ReferenceLine");
Q0(W0, "defaultProps", {
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
function Au(t) {
  "@babel/helpers - typeof";
  return Au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Au(t);
}
function wM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function TM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wM(Object(n), !0).forEach(function(r) {
      Qs(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function j7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function C7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, kD(r.key), r);
  }
}
function D7(t, e, n) {
  return e && C7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function P7(t, e, n) {
  return e = ms(e), N7(t, LD() ? Reflect.construct(e, n || [], ms(t).constructor) : e.apply(t, n));
}
function N7(t, e) {
  if (e && (Au(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return R7(t);
}
function R7(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function LD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LD = function() {
    return !!t;
  })();
}
function ms(t) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ms(t);
}
function q7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Cb(t, e);
}
function Cb(t, e) {
  return Cb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Cb(t, e);
}
function Qs(t, e, n) {
  return e = kD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function kD(t) {
  var e = z7(t, "string");
  return Au(e) == "symbol" ? e : e + "";
}
function z7(t, e) {
  if (Au(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Au(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var $7 = function(e) {
  var n = e.x, r = e.y, u = e.xAxis, l = e.yAxis, c = X0({
    x: u.scale,
    y: l.scale
  }), s = c.apply({
    x: n,
    y: r
  }, {
    bandAware: !0
  });
  return Jn(e, "discard") && !c.isInRange(s) ? null : s;
}, Ws = /* @__PURE__ */ (function(t) {
  function e() {
    return j7(this, e), P7(this, e, arguments);
  }
  return q7(e, t), D7(e, [{
    key: "render",
    value: function() {
      var r = this.props, u = r.x, l = r.y, c = r.r, s = r.alwaysShow, h = r.clipPathId, d = _e(u), y = _e(l);
      if (Dr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !d || !y)
        return null;
      var p = $7(this.props);
      if (!p)
        return null;
      var g = p.x, x = p.y, O = this.props, S = O.shape, b = O.className, A = Jn(this.props, "hidden") ? "url(#".concat(h, ")") : void 0, T = TM(TM({
        clipPath: A
      }, Et(this.props, !0)), {}, {
        cx: g,
        cy: x
      });
      return /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-reference-dot", b)
      }, e.renderDot(S, T), ke.renderCallByParent(this.props, {
        x: g - c,
        y: x - c,
        width: 2 * c,
        height: 2 * c
      }));
    }
  }]);
})(B.Component);
Qs(Ws, "displayName", "ReferenceDot");
Qs(Ws, "defaultProps", {
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
Qs(Ws, "renderDot", function(t, e) {
  var n;
  return /* @__PURE__ */ B.isValidElement(t) ? n = /* @__PURE__ */ B.cloneElement(t, e) : At(t) ? n = t(e) : n = /* @__PURE__ */ B.createElement(Ks, jb({}, e, {
    cx: e.cx,
    cy: e.cy,
    className: "recharts-reference-dot-dot"
  })), n;
});
function Db() {
  return Db = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Db.apply(this, arguments);
}
function wu(t) {
  "@babel/helpers - typeof";
  return wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wu(t);
}
function EM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function MM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? EM(Object(n), !0).forEach(function(r) {
      Js(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : EM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function B7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function L7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, HD(r.key), r);
  }
}
function k7(t, e, n) {
  return e && L7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function U7(t, e, n) {
  return e = gs(e), H7(t, UD() ? Reflect.construct(e, n || [], gs(t).constructor) : e.apply(t, n));
}
function H7(t, e) {
  if (e && (wu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return I7(t);
}
function I7(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function UD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UD = function() {
    return !!t;
  })();
}
function gs(t) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gs(t);
}
function G7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Pb(t, e);
}
function Pb(t, e) {
  return Pb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Pb(t, e);
}
function Js(t, e, n) {
  return e = HD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function HD(t) {
  var e = Y7(t, "string");
  return wu(e) == "symbol" ? e : e + "";
}
function Y7(t, e) {
  if (wu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (wu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var X7 = function(e, n, r, u, l) {
  var c = l.x1, s = l.x2, h = l.y1, d = l.y2, y = l.xAxis, p = l.yAxis;
  if (!y || !p) return null;
  var g = X0({
    x: y.scale,
    y: p.scale
  }), x = {
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
    y: u ? g.y.apply(d, {
      position: "end"
    }) : g.y.rangeMax
  };
  return Jn(l, "discard") && (!g.isInRange(x) || !g.isInRange(O)) ? null : MD(x, O);
}, th = /* @__PURE__ */ (function(t) {
  function e() {
    return B7(this, e), U7(this, e, arguments);
  }
  return G7(e, t), k7(e, [{
    key: "render",
    value: function() {
      var r = this.props, u = r.x1, l = r.x2, c = r.y1, s = r.y2, h = r.className, d = r.alwaysShow, y = r.clipPathId;
      Dr(d === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var p = _e(u), g = _e(l), x = _e(c), O = _e(s), S = this.props.shape;
      if (!p && !g && !x && !O && !S)
        return null;
      var b = X7(p, g, x, O, this.props);
      if (!b && !S)
        return null;
      var A = Jn(this.props, "hidden") ? "url(#".concat(y, ")") : void 0;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-reference-area", h)
      }, e.renderRect(S, MM(MM({
        clipPath: A
      }, Et(this.props, !0)), b)), ke.renderCallByParent(this.props, b));
    }
  }]);
})(B.Component);
Js(th, "displayName", "ReferenceArea");
Js(th, "defaultProps", {
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
Js(th, "renderRect", function(t, e) {
  var n;
  return /* @__PURE__ */ B.isValidElement(t) ? n = /* @__PURE__ */ B.cloneElement(t, e) : At(t) ? n = t(e) : n = /* @__PURE__ */ B.createElement(G0, Db({}, e, {
    className: "recharts-reference-area-rect"
  })), n;
});
function ID(t, e, n) {
  if (e < 1)
    return [];
  if (e === 1 && n === void 0)
    return t;
  for (var r = [], u = 0; u < t.length; u += e)
    r.push(t[u]);
  return r;
}
function K7(t, e, n) {
  var r = {
    width: t.width + e.width,
    height: t.height + e.height
  };
  return W9(r, n);
}
function V7(t, e, n) {
  var r = n === "width", u = t.x, l = t.y, c = t.width, s = t.height;
  return e === 1 ? {
    start: r ? u : l,
    end: r ? u + c : l + s
  } : {
    start: r ? u + c : l + s,
    end: r ? u : l
  };
}
function bs(t, e, n, r, u) {
  if (t * e < t * r || t * e > t * u)
    return !1;
  var l = n();
  return t * (e - t * l / 2 - r) >= 0 && t * (e + t * l / 2 - u) <= 0;
}
function F7(t, e) {
  return ID(t, e + 1);
}
function Z7(t, e, n, r, u) {
  for (var l = (r || []).slice(), c = e.start, s = e.end, h = 0, d = 1, y = c, p = function() {
    var O = r == null ? void 0 : r[h];
    if (O === void 0)
      return {
        v: ID(r, d)
      };
    var S = h, b, A = function() {
      return b === void 0 && (b = n(O, S)), b;
    }, T = O.coordinate, M = h === 0 || bs(t, T, A, y, s);
    M || (h = 0, y = c, d += 1), M && (y = T + t * (A() / 2 + u), h += d);
  }, g; d <= l.length; )
    if (g = p(), g) return g.v;
  return [];
}
function Rl(t) {
  "@babel/helpers - typeof";
  return Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rl(t);
}
function jM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? jM(Object(n), !0).forEach(function(r) {
      Q7(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Q7(t, e, n) {
  return e = W7(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function W7(t) {
  var e = J7(t, "string");
  return Rl(e) == "symbol" ? e : e + "";
}
function J7(t, e) {
  if (Rl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Rl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function tI(t, e, n, r, u) {
  for (var l = (r || []).slice(), c = l.length, s = e.start, h = e.end, d = function(g) {
    var x = l[g], O, S = function() {
      return O === void 0 && (O = n(x, g)), O;
    };
    if (g === c - 1) {
      var b = t * (x.coordinate + t * S() / 2 - h);
      l[g] = x = Le(Le({}, x), {}, {
        tickCoord: b > 0 ? x.coordinate - b * t : x.coordinate
      });
    } else
      l[g] = x = Le(Le({}, x), {}, {
        tickCoord: x.coordinate
      });
    var A = bs(t, x.tickCoord, S, s, h);
    A && (h = x.tickCoord - t * (S() / 2 + u), l[g] = Le(Le({}, x), {}, {
      isShow: !0
    }));
  }, y = c - 1; y >= 0; y--)
    d(y);
  return l;
}
function eI(t, e, n, r, u, l) {
  var c = (r || []).slice(), s = c.length, h = e.start, d = e.end;
  if (l) {
    var y = r[s - 1], p = n(y, s - 1), g = t * (y.coordinate + t * p / 2 - d);
    c[s - 1] = y = Le(Le({}, y), {}, {
      tickCoord: g > 0 ? y.coordinate - g * t : y.coordinate
    });
    var x = bs(t, y.tickCoord, function() {
      return p;
    }, h, d);
    x && (d = y.tickCoord - t * (p / 2 + u), c[s - 1] = Le(Le({}, y), {}, {
      isShow: !0
    }));
  }
  for (var O = l ? s - 1 : s, S = function(T) {
    var M = c[T], C, w = function() {
      return C === void 0 && (C = n(M, T)), C;
    };
    if (T === 0) {
      var E = t * (M.coordinate - t * w() / 2 - h);
      c[T] = M = Le(Le({}, M), {}, {
        tickCoord: E < 0 ? M.coordinate - E * t : M.coordinate
      });
    } else
      c[T] = M = Le(Le({}, M), {}, {
        tickCoord: M.coordinate
      });
    var D = bs(t, M.tickCoord, w, h, d);
    D && (h = M.tickCoord + t * (w() / 2 + u), c[T] = Le(Le({}, M), {}, {
      isShow: !0
    }));
  }, b = 0; b < O; b++)
    S(b);
  return c;
}
function J0(t, e, n) {
  var r = t.tick, u = t.ticks, l = t.viewBox, c = t.minTickGap, s = t.orientation, h = t.interval, d = t.tickFormatter, y = t.unit, p = t.angle;
  if (!u || !u.length || !r)
    return [];
  if (st(h) || ui.isSsr)
    return F7(u, typeof h == "number" && st(h) ? h : 0);
  var g = [], x = s === "top" || s === "bottom" ? "width" : "height", O = y && x === "width" ? Qo(y, {
    fontSize: e,
    letterSpacing: n
  }) : {
    width: 0,
    height: 0
  }, S = function(M, C) {
    var w = At(d) ? d(M.value, C) : M.value;
    return x === "width" ? K7(Qo(w, {
      fontSize: e,
      letterSpacing: n
    }), O, p) : Qo(w, {
      fontSize: e,
      letterSpacing: n
    })[x];
  }, b = u.length >= 2 ? Hn(u[1].coordinate - u[0].coordinate) : 1, A = V7(l, b, x);
  return h === "equidistantPreserveStart" ? Z7(b, A, S, u, c) : (h === "preserveStart" || h === "preserveStartEnd" ? g = eI(b, A, S, u, c, h === "preserveStartEnd") : g = tI(b, A, S, u, c), g.filter(function(T) {
    return T.isShow;
  }));
}
var nI = ["viewBox"], rI = ["viewBox"], aI = ["ticks"];
function Tu(t) {
  "@babel/helpers - typeof";
  return Tu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tu(t);
}
function eu() {
  return eu = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, eu.apply(this, arguments);
}
function CM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? CM(Object(n), !0).forEach(function(r) {
      t1(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : CM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function gg(t, e) {
  if (t == null) return {};
  var n = iI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function iI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function uI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function DM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, YD(r.key), r);
  }
}
function oI(t, e, n) {
  return e && DM(t.prototype, e), n && DM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function lI(t, e, n) {
  return e = xs(e), cI(t, GD() ? Reflect.construct(e, n || [], xs(t).constructor) : e.apply(t, n));
}
function cI(t, e) {
  if (e && (Tu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fI(t);
}
function fI(t) {
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
function xs(t) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xs(t);
}
function sI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Nb(t, e);
}
function Nb(t, e) {
  return Nb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Nb(t, e);
}
function t1(t, e, n) {
  return e = YD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function YD(t) {
  var e = hI(t, "string");
  return Tu(e) == "symbol" ? e : e + "";
}
function hI(t, e) {
  if (Tu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Tu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Uu = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return uI(this, e), r = lI(this, e, [n]), r.state = {
      fontSize: "",
      letterSpacing: ""
    }, r;
  }
  return sI(e, t), oI(e, [{
    key: "shouldComponentUpdate",
    value: function(r, u) {
      var l = r.viewBox, c = gg(r, nI), s = this.props, h = s.viewBox, d = gg(s, rI);
      return !ru(l, h) || !ru(c, d) || !ru(u, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var r = this.layerReference;
      if (r) {
        var u = r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        u && this.setState({
          fontSize: window.getComputedStyle(u).fontSize,
          letterSpacing: window.getComputedStyle(u).letterSpacing
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
      var u = this.props, l = u.x, c = u.y, s = u.width, h = u.height, d = u.orientation, y = u.tickSize, p = u.mirror, g = u.tickMargin, x, O, S, b, A, T, M = p ? -1 : 1, C = r.tickSize || y, w = st(r.tickCoord) ? r.tickCoord : r.coordinate;
      switch (d) {
        case "top":
          x = O = r.coordinate, b = c + +!p * h, S = b - M * C, T = S - M * g, A = w;
          break;
        case "left":
          S = b = r.coordinate, O = l + +!p * s, x = O - M * C, A = x - M * g, T = w;
          break;
        case "right":
          S = b = r.coordinate, O = l + +p * s, x = O + M * C, A = x + M * g, T = w;
          break;
        default:
          x = O = r.coordinate, b = c + +p * h, S = b + M * C, T = S + M * g, A = w;
          break;
      }
      return {
        line: {
          x1: x,
          y1: S,
          x2: O,
          y2: b
        },
        tick: {
          x: A,
          y: T
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var r = this.props, u = r.orientation, l = r.mirror, c;
      switch (u) {
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
      var r = this.props, u = r.orientation, l = r.mirror, c = "end";
      switch (u) {
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
      var r = this.props, u = r.x, l = r.y, c = r.width, s = r.height, h = r.orientation, d = r.mirror, y = r.axisLine, p = xe(xe(xe({}, Et(this.props, !1)), Et(y, !1)), {}, {
        fill: "none"
      });
      if (h === "top" || h === "bottom") {
        var g = +(h === "top" && !d || h === "bottom" && d);
        p = xe(xe({}, p), {}, {
          x1: u,
          y1: l + g * s,
          x2: u + c,
          y2: l + g * s
        });
      } else {
        var x = +(h === "left" && !d || h === "right" && d);
        p = xe(xe({}, p), {}, {
          x1: u + x * c,
          y1: l,
          x2: u + x * c,
          y2: l + s
        });
      }
      return /* @__PURE__ */ B.createElement("line", eu({}, p, {
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
      function(r, u, l) {
        var c = this, s = this.props, h = s.tickLine, d = s.stroke, y = s.tick, p = s.tickFormatter, g = s.unit, x = J0(xe(xe({}, this.props), {}, {
          ticks: r
        }), u, l), O = this.getTickTextAnchor(), S = this.getTickVerticalAnchor(), b = Et(this.props, !1), A = Et(y, !1), T = xe(xe({}, b), {}, {
          fill: "none"
        }, Et(h, !1)), M = x.map(function(C, w) {
          var E = c.getTickLineCoord(C), D = E.line, R = E.tick, z = xe(xe(xe(xe({
            textAnchor: O,
            verticalAnchor: S
          }, b), {}, {
            stroke: "none",
            fill: d
          }, A), R), {}, {
            index: w,
            payload: C,
            visibleTicksCount: x.length,
            tickFormatter: p
          });
          return /* @__PURE__ */ B.createElement(Jt, eu({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(C.value, "-").concat(C.coordinate, "-").concat(C.tickCoord)
          }, Mf(c.props, C, w)), h && /* @__PURE__ */ B.createElement("line", eu({}, T, D, {
            className: qt("recharts-cartesian-axis-tick-line", jn(h, "className"))
          })), y && e.renderTickItem(y, z, "".concat(At(p) ? p(C.value, w) : C.value).concat(g || "")));
        });
        return /* @__PURE__ */ B.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, M);
      }
    )
  }, {
    key: "render",
    value: function() {
      var r = this, u = this.props, l = u.axisLine, c = u.width, s = u.height, h = u.ticksGenerator, d = u.className, y = u.hide;
      if (y)
        return null;
      var p = this.props, g = p.ticks, x = gg(p, aI), O = g;
      return At(h) && (O = g && g.length > 0 ? h(this.props) : h(x)), c <= 0 || s <= 0 || !O || !O.length ? null : /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-cartesian-axis", d),
        ref: function(b) {
          r.layerReference = b;
        }
      }, l && this.renderAxisLine(), this.renderTicks(O, this.state.fontSize, this.state.letterSpacing), ke.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, u, l) {
      var c, s = qt(u.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ B.isValidElement(r) ? c = /* @__PURE__ */ B.cloneElement(r, xe(xe({}, u), {}, {
        className: s
      })) : At(r) ? c = r(xe(xe({}, u), {}, {
        className: s
      })) : c = /* @__PURE__ */ B.createElement(Lf, eu({}, u, {
        className: "recharts-cartesian-axis-tick-value"
      }), l), c;
    }
  }]);
})(at.Component);
t1(Uu, "displayName", "CartesianAxis");
t1(Uu, "defaultProps", {
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
var dI = ["x1", "y1", "x2", "y2", "key"], vI = ["offset"];
function ai(t) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ai(t);
}
function PM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? PM(Object(n), !0).forEach(function(r) {
      pI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : PM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function pI(t, e, n) {
  return e = yI(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function yI(t) {
  var e = mI(t, "string");
  return ai(e) == "symbol" ? e : e + "";
}
function mI(t, e) {
  if (ai(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ai(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
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
function NM(t, e) {
  if (t == null) return {};
  var n = gI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function gI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var bI = function(e) {
  var n = e.fill;
  if (!n || n === "none")
    return null;
  var r = e.fillOpacity, u = e.x, l = e.y, c = e.width, s = e.height, h = e.ry;
  return /* @__PURE__ */ B.createElement("rect", {
    x: u,
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
function XD(t, e) {
  var n;
  if (/* @__PURE__ */ B.isValidElement(t))
    n = /* @__PURE__ */ B.cloneElement(t, e);
  else if (At(t))
    n = t(e);
  else {
    var r = e.x1, u = e.y1, l = e.x2, c = e.y2, s = e.key, h = NM(e, dI), d = Et(h, !1);
    d.offset;
    var y = NM(d, vI);
    n = /* @__PURE__ */ B.createElement("line", Fa({}, y, {
      x1: r,
      y1: u,
      x2: l,
      y2: c,
      fill: "none",
      key: s
    }));
  }
  return n;
}
function xI(t) {
  var e = t.x, n = t.width, r = t.horizontal, u = r === void 0 ? !0 : r, l = t.horizontalPoints;
  if (!u || !l || !l.length)
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
    return XD(u, d);
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function SI(t) {
  var e = t.y, n = t.height, r = t.vertical, u = r === void 0 ? !0 : r, l = t.verticalPoints;
  if (!u || !l || !l.length)
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
    return XD(u, d);
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function _I(t) {
  var e = t.horizontalFill, n = t.fillOpacity, r = t.x, u = t.y, l = t.width, c = t.height, s = t.horizontalPoints, h = t.horizontal, d = h === void 0 ? !0 : h;
  if (!d || !e || !e.length)
    return null;
  var y = s.map(function(g) {
    return Math.round(g + u - u);
  }).sort(function(g, x) {
    return g - x;
  });
  u !== y[0] && y.unshift(0);
  var p = y.map(function(g, x) {
    var O = !y[x + 1], S = O ? u + c - g : y[x + 1] - g;
    if (S <= 0)
      return null;
    var b = x % e.length;
    return /* @__PURE__ */ B.createElement("rect", {
      key: "react-".concat(x),
      y: g,
      x: r,
      height: S,
      width: l,
      stroke: "none",
      fill: e[b],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, p);
}
function OI(t) {
  var e = t.vertical, n = e === void 0 ? !0 : e, r = t.verticalFill, u = t.fillOpacity, l = t.x, c = t.y, s = t.width, h = t.height, d = t.verticalPoints;
  if (!n || !r || !r.length)
    return null;
  var y = d.map(function(g) {
    return Math.round(g + l - l);
  }).sort(function(g, x) {
    return g - x;
  });
  l !== y[0] && y.unshift(0);
  var p = y.map(function(g, x) {
    var O = !y[x + 1], S = O ? l + s - g : y[x + 1] - g;
    if (S <= 0)
      return null;
    var b = x % r.length;
    return /* @__PURE__ */ B.createElement("rect", {
      key: "react-".concat(x),
      x: g,
      y: c,
      width: S,
      height: h,
      stroke: "none",
      fill: r[b],
      fillOpacity: u,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, p);
}
var AI = function(e, n) {
  var r = e.xAxis, u = e.width, l = e.height, c = e.offset;
  return uD(J0(Ue(Ue(Ue({}, Uu.defaultProps), r), {}, {
    ticks: Er(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: u,
      height: l
    }
  })), c.left, c.left + c.width, n);
}, wI = function(e, n) {
  var r = e.yAxis, u = e.width, l = e.height, c = e.offset;
  return uD(J0(Ue(Ue(Ue({}, Uu.defaultProps), r), {}, {
    ticks: Er(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: u,
      height: l
    }
  })), c.top, c.top + c.height, n);
}, Wi = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Zo(t) {
  var e, n, r, u, l, c, s = F0(), h = Z0(), d = h7(), y = Ue(Ue({}, t), {}, {
    stroke: (e = t.stroke) !== null && e !== void 0 ? e : Wi.stroke,
    fill: (n = t.fill) !== null && n !== void 0 ? n : Wi.fill,
    horizontal: (r = t.horizontal) !== null && r !== void 0 ? r : Wi.horizontal,
    horizontalFill: (u = t.horizontalFill) !== null && u !== void 0 ? u : Wi.horizontalFill,
    vertical: (l = t.vertical) !== null && l !== void 0 ? l : Wi.vertical,
    verticalFill: (c = t.verticalFill) !== null && c !== void 0 ? c : Wi.verticalFill,
    x: st(t.x) ? t.x : d.left,
    y: st(t.y) ? t.y : d.top,
    width: st(t.width) ? t.width : d.width,
    height: st(t.height) ? t.height : d.height
  }), p = y.x, g = y.y, x = y.width, O = y.height, S = y.syncWithTicks, b = y.horizontalValues, A = y.verticalValues, T = c7(), M = f7();
  if (!st(x) || x <= 0 || !st(O) || O <= 0 || !st(p) || p !== +p || !st(g) || g !== +g)
    return null;
  var C = y.verticalCoordinatesGenerator || AI, w = y.horizontalCoordinatesGenerator || wI, E = y.horizontalPoints, D = y.verticalPoints;
  if ((!E || !E.length) && At(w)) {
    var R = b && b.length, z = w({
      yAxis: M ? Ue(Ue({}, M), {}, {
        ticks: R ? b : M.ticks
      }) : void 0,
      width: s,
      height: h,
      offset: d
    }, R ? !0 : S);
    Dr(Array.isArray(z), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ai(z), "]")), Array.isArray(z) && (E = z);
  }
  if ((!D || !D.length) && At(C)) {
    var F = A && A.length, k = C({
      xAxis: T ? Ue(Ue({}, T), {}, {
        ticks: F ? A : T.ticks
      }) : void 0,
      width: s,
      height: h,
      offset: d
    }, F ? !0 : S);
    Dr(Array.isArray(k), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ai(k), "]")), Array.isArray(k) && (D = k);
  }
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ B.createElement(bI, {
    fill: y.fill,
    fillOpacity: y.fillOpacity,
    x: y.x,
    y: y.y,
    width: y.width,
    height: y.height,
    ry: y.ry
  }), /* @__PURE__ */ B.createElement(xI, Fa({}, y, {
    offset: d,
    horizontalPoints: E,
    xAxis: T,
    yAxis: M
  })), /* @__PURE__ */ B.createElement(SI, Fa({}, y, {
    offset: d,
    verticalPoints: D,
    xAxis: T,
    yAxis: M
  })), /* @__PURE__ */ B.createElement(_I, Fa({}, y, {
    horizontalPoints: E
  })), /* @__PURE__ */ B.createElement(OI, Fa({}, y, {
    verticalPoints: D
  })));
}
Zo.displayName = "CartesianGrid";
var TI = ["type", "layout", "connectNulls", "ref"], EI = ["key"];
function Eu(t) {
  "@babel/helpers - typeof";
  return Eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Eu(t);
}
function RM(t, e) {
  if (t == null) return {};
  var n = MI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function MI(t, e) {
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
function qM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qM(Object(n), !0).forEach(function(r) {
      kn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ji(t) {
  return PI(t) || DI(t) || CI(t) || jI();
}
function jI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CI(t, e) {
  if (t) {
    if (typeof t == "string") return Rb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rb(t, e);
  }
}
function DI(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function PI(t) {
  if (Array.isArray(t)) return Rb(t);
}
function Rb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function NI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function zM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, VD(r.key), r);
  }
}
function RI(t, e, n) {
  return e && zM(t.prototype, e), n && zM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function qI(t, e, n) {
  return e = Ss(e), zI(t, KD() ? Reflect.construct(e, n || [], Ss(t).constructor) : e.apply(t, n));
}
function zI(t, e) {
  if (e && (Eu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $I(t);
}
function $I(t) {
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
function Ss(t) {
  return Ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ss(t);
}
function BI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && qb(t, e);
}
function qb(t, e) {
  return qb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, qb(t, e);
}
function kn(t, e, n) {
  return e = VD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function VD(t) {
  var e = LI(t, "string");
  return Eu(e) == "symbol" ? e : e + "";
}
function LI(t, e) {
  if (Eu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Eu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Ja = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    NI(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = qI(this, e, [].concat(u)), kn(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), kn(n, "generateSimpleStrokeDasharray", function(c, s) {
      return "".concat(s, "px ").concat(c - s, "px");
    }), kn(n, "getStrokeDasharray", function(c, s, h) {
      var d = h.reduce(function(A, T) {
        return A + T;
      });
      if (!d)
        return n.generateSimpleStrokeDasharray(s, c);
      for (var y = Math.floor(c / d), p = c % d, g = s - c, x = [], O = 0, S = 0; O < h.length; S += h[O], ++O)
        if (S + h[O] > p) {
          x = [].concat(Ji(h.slice(0, O)), [p - S]);
          break;
        }
      var b = x.length % 2 === 0 ? [0, g] : [g];
      return [].concat(Ji(e.repeat(h, y)), Ji(x), b).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), kn(n, "id", zu("recharts-line-")), kn(n, "pathRef", function(c) {
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
  return BI(e, t), RI(e, [{
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
    value: function(r, u) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var l = this.props, c = l.points, s = l.xAxis, h = l.yAxis, d = l.layout, y = l.children, p = Cn(y, Il);
      if (!p)
        return null;
      var g = function(S, b) {
        return {
          x: S.x,
          y: S.y,
          value: S.value,
          errorVal: Ge(S.payload, b)
        };
      }, x = {
        clipPath: r ? "url(#clipPath-".concat(u, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, x, p.map(function(O) {
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
    value: function(r, u, l) {
      var c = this.props.isAnimationActive;
      if (c && !this.state.isAnimationFinished)
        return null;
      var s = this.props, h = s.dot, d = s.points, y = s.dataKey, p = Et(this.props, !1), g = Et(h, !0), x = d.map(function(S, b) {
        var A = fn(fn(fn({
          key: "dot-".concat(b),
          r: 3
        }, p), g), {}, {
          index: b,
          cx: S.x,
          cy: S.y,
          value: S.value,
          dataKey: y,
          payload: S.payload,
          points: d
        });
        return e.renderDotItem(h, A);
      }), O = {
        clipPath: r ? "url(#clipPath-".concat(u ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, el({
        className: "recharts-line-dots",
        key: "dots"
      }, O), x);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, u, l, c) {
      var s = this.props, h = s.type, d = s.layout, y = s.connectNulls;
      s.ref;
      var p = RM(s, TI), g = fn(fn(fn({}, Et(p, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: u ? "url(#clipPath-".concat(l, ")") : null,
        points: r
      }, c), {}, {
        type: h,
        layout: d,
        connectNulls: y
      });
      return /* @__PURE__ */ B.createElement(ou, el({}, g, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, u) {
      var l = this, c = this.props, s = c.points, h = c.strokeDasharray, d = c.isAnimationActive, y = c.animationBegin, p = c.animationDuration, g = c.animationEasing, x = c.animationId, O = c.animateNewValues, S = c.width, b = c.height, A = this.state, T = A.prevPoints, M = A.totalLength;
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
        key: "line-".concat(x),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(C) {
        var w = C.t;
        if (T) {
          var E = T.length / s.length, D = s.map(function($, K) {
            var Z = Math.floor(K * E);
            if (T[Z]) {
              var V = T[Z], N = Re(V.x, $.x), I = Re(V.y, $.y);
              return fn(fn({}, $), {}, {
                x: N(w),
                y: I(w)
              });
            }
            if (O) {
              var W = Re(S * 2, $.x), ut = Re(b / 2, $.y);
              return fn(fn({}, $), {}, {
                x: W(w),
                y: ut(w)
              });
            }
            return fn(fn({}, $), {}, {
              x: $.x,
              y: $.y
            });
          });
          return l.renderCurveStatically(D, r, u);
        }
        var R = Re(0, M), z = R(w), F;
        if (h) {
          var k = "".concat(h).split(/[,\s]+/gim).map(function($) {
            return parseFloat($);
          });
          F = l.getStrokeDasharray(z, M, k);
        } else
          F = l.generateSimpleStrokeDasharray(M, z);
        return l.renderCurveStatically(s, r, u, {
          strokeDasharray: F
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(r, u) {
      var l = this.props, c = l.points, s = l.isAnimationActive, h = this.state, d = h.prevPoints, y = h.totalLength;
      return s && c && c.length && (!d && y > 0 || !mu(d, c)) ? this.renderCurveWithAnimation(r, u) : this.renderCurveStatically(c, r, u);
    }
  }, {
    key: "render",
    value: function() {
      var r, u = this.props, l = u.hide, c = u.dot, s = u.points, h = u.className, d = u.xAxis, y = u.yAxis, p = u.top, g = u.left, x = u.width, O = u.height, S = u.isAnimationActive, b = u.id;
      if (l || !s || !s.length)
        return null;
      var A = this.state.isAnimationFinished, T = s.length === 1, M = qt("recharts-line", h), C = d && d.allowDataOverflow, w = y && y.allowDataOverflow, E = C || w, D = Mt(b) ? this.id : b, R = (r = Et(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, z = R.r, F = z === void 0 ? 3 : z, k = R.strokeWidth, $ = k === void 0 ? 2 : k, K = fj(c) ? c : {}, Z = K.clipDot, V = Z === void 0 ? !0 : Z, N = F * 2 + $;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M
      }, C || w ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: C ? g : g - x / 2,
        y: w ? p : p - O / 2,
        width: C ? x : x * 2,
        height: w ? O : O * 2
      })), !V && /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-dots-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: g - N / 2,
        y: p - N / 2,
        width: x + N,
        height: O + N
      }))) : null, !T && this.renderCurve(E, D), this.renderErrorBar(E, D), (T || c) && this.renderDots(E, V, D), (!S || A) && Nr.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, u) {
      return r.animationId !== u.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: u.curPoints
      } : r.points !== u.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(r, u) {
      for (var l = r.length % 2 !== 0 ? [].concat(Ji(r), [0]) : r, c = [], s = 0; s < u; ++s)
        c = [].concat(Ji(c), Ji(l));
      return c;
    }
  }, {
    key: "renderDotItem",
    value: function(r, u) {
      var l;
      if (/* @__PURE__ */ B.isValidElement(r))
        l = /* @__PURE__ */ B.cloneElement(r, u);
      else if (At(r))
        l = r(u);
      else {
        var c = u.key, s = RM(u, EI), h = qt("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        l = /* @__PURE__ */ B.createElement(Ks, el({
          key: c
        }, s, {
          className: h
        }));
      }
      return l;
    }
  }]);
})(at.PureComponent);
kn(Ja, "displayName", "Line");
kn(Ja, "defaultProps", {
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
  isAnimationActive: !ui.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
kn(Ja, "getComposedData", function(t) {
  var e = t.props, n = t.xAxis, r = t.yAxis, u = t.xAxisTicks, l = t.yAxisTicks, c = t.dataKey, s = t.bandSize, h = t.displayedData, d = t.offset, y = e.layout, p = h.map(function(g, x) {
    var O = Ge(g, c);
    return y === "horizontal" ? {
      x: ts({
        axis: n,
        ticks: u,
        bandSize: s,
        entry: g,
        index: x
      }),
      y: Mt(O) ? null : r.scale(O),
      value: O,
      payload: g
    } : {
      x: Mt(O) ? null : n.scale(O),
      y: ts({
        axis: r,
        ticks: l,
        bandSize: s,
        entry: g,
        index: x
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
var kI = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], UI = ["key"], FD;
function Mu(t) {
  "@babel/helpers - typeof";
  return Mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mu(t);
}
function ZD(t, e) {
  if (t == null) return {};
  var n = HI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function HI(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Za.apply(this, arguments);
}
function $M(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function da(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $M(Object(n), !0).forEach(function(r) {
      Qn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $M(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function II(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function BM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, WD(r.key), r);
  }
}
function GI(t, e, n) {
  return e && BM(t.prototype, e), n && BM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function YI(t, e, n) {
  return e = _s(e), XI(t, QD() ? Reflect.construct(e, n || [], _s(t).constructor) : e.apply(t, n));
}
function XI(t, e) {
  if (e && (Mu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return KI(t);
}
function KI(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function QD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (QD = function() {
    return !!t;
  })();
}
function _s(t) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _s(t);
}
function VI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && zb(t, e);
}
function zb(t, e) {
  return zb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, zb(t, e);
}
function Qn(t, e, n) {
  return e = WD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function WD(t) {
  var e = FI(t, "string");
  return Mu(e) == "symbol" ? e : e + "";
}
function FI(t, e) {
  if (Mu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Mu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var tr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    II(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = YI(this, e, [].concat(u)), Qn(n, "state", {
      isAnimationFinished: !0
    }), Qn(n, "id", zu("recharts-area-")), Qn(n, "handleAnimationEnd", function() {
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
  return VI(e, t), GI(e, [{
    key: "renderDots",
    value: function(r, u, l) {
      var c = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (c && !s)
        return null;
      var h = this.props, d = h.dot, y = h.points, p = h.dataKey, g = Et(this.props, !1), x = Et(d, !0), O = y.map(function(b, A) {
        var T = da(da(da({
          key: "dot-".concat(A),
          r: 3
        }, g), x), {}, {
          index: A,
          cx: b.x,
          cy: b.y,
          dataKey: p,
          value: b.value,
          payload: b.payload,
          points: y
        });
        return e.renderDotItem(d, T);
      }), S = {
        clipPath: r ? "url(#clipPath-".concat(u ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, Za({
        className: "recharts-area-dots"
      }, S), O);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(r) {
      var u = this.props, l = u.baseLine, c = u.points, s = u.strokeWidth, h = c[0].x, d = c[c.length - 1].x, y = r * Math.abs(h - d), p = ya(c.map(function(g) {
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
      var u = this.props, l = u.baseLine, c = u.points, s = u.strokeWidth, h = c[0].y, d = c[c.length - 1].y, y = r * Math.abs(h - d), p = ya(c.map(function(g) {
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
      var u = this.props.layout;
      return u === "vertical" ? this.renderVerticalRect(r) : this.renderHorizontalRect(r);
    }
  }, {
    key: "renderAreaStatically",
    value: function(r, u, l, c) {
      var s = this.props, h = s.layout, d = s.type, y = s.stroke, p = s.connectNulls, g = s.isRange;
      s.ref;
      var x = ZD(s, kI);
      return /* @__PURE__ */ B.createElement(Jt, {
        clipPath: l ? "url(#clipPath-".concat(c, ")") : null
      }, /* @__PURE__ */ B.createElement(ou, Za({}, Et(x, !0), {
        points: r,
        connectNulls: p,
        type: d,
        baseLine: u,
        layout: h,
        stroke: "none",
        className: "recharts-area-area"
      })), y !== "none" && /* @__PURE__ */ B.createElement(ou, Za({}, Et(this.props, !1), {
        className: "recharts-area-curve",
        layout: h,
        type: d,
        connectNulls: p,
        fill: "none",
        points: r
      })), y !== "none" && g && /* @__PURE__ */ B.createElement(ou, Za({}, Et(this.props, !1), {
        className: "recharts-area-curve",
        layout: h,
        type: d,
        connectNulls: p,
        fill: "none",
        points: u
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(r, u) {
      var l = this, c = this.props, s = c.points, h = c.baseLine, d = c.isAnimationActive, y = c.animationBegin, p = c.animationDuration, g = c.animationEasing, x = c.animationId, O = this.state, S = O.prevPoints, b = O.prevBaseLine;
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
        key: "area-".concat(x),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(A) {
        var T = A.t;
        if (S) {
          var M = S.length / s.length, C = s.map(function(R, z) {
            var F = Math.floor(z * M);
            if (S[F]) {
              var k = S[F], $ = Re(k.x, R.x), K = Re(k.y, R.y);
              return da(da({}, R), {}, {
                x: $(T),
                y: K(T)
              });
            }
            return R;
          }), w;
          if (st(h) && typeof h == "number") {
            var E = Re(b, h);
            w = E(T);
          } else if (Mt(h) || qu(h)) {
            var D = Re(b, 0);
            w = D(T);
          } else
            w = h.map(function(R, z) {
              var F = Math.floor(z * M);
              if (b[F]) {
                var k = b[F], $ = Re(k.x, R.x), K = Re(k.y, R.y);
                return da(da({}, R), {}, {
                  x: $(T),
                  y: K(T)
                });
              }
              return R;
            });
          return l.renderAreaStatically(C, w, r, u);
        }
        return /* @__PURE__ */ B.createElement(Jt, null, /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
          id: "animationClipPath-".concat(u)
        }, l.renderClipRect(T))), /* @__PURE__ */ B.createElement(Jt, {
          clipPath: "url(#animationClipPath-".concat(u, ")")
        }, l.renderAreaStatically(s, h, r, u)));
      });
    }
  }, {
    key: "renderArea",
    value: function(r, u) {
      var l = this.props, c = l.points, s = l.baseLine, h = l.isAnimationActive, d = this.state, y = d.prevPoints, p = d.prevBaseLine, g = d.totalLength;
      return h && c && c.length && (!y && g > 0 || !mu(y, c) || !mu(p, s)) ? this.renderAreaWithAnimation(r, u) : this.renderAreaStatically(c, s, r, u);
    }
  }, {
    key: "render",
    value: function() {
      var r, u = this.props, l = u.hide, c = u.dot, s = u.points, h = u.className, d = u.top, y = u.left, p = u.xAxis, g = u.yAxis, x = u.width, O = u.height, S = u.isAnimationActive, b = u.id;
      if (l || !s || !s.length)
        return null;
      var A = this.state.isAnimationFinished, T = s.length === 1, M = qt("recharts-area", h), C = p && p.allowDataOverflow, w = g && g.allowDataOverflow, E = C || w, D = Mt(b) ? this.id : b, R = (r = Et(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, z = R.r, F = z === void 0 ? 3 : z, k = R.strokeWidth, $ = k === void 0 ? 2 : k, K = fj(c) ? c : {}, Z = K.clipDot, V = Z === void 0 ? !0 : Z, N = F * 2 + $;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M
      }, C || w ? /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: C ? y : y - x / 2,
        y: w ? d : d - O / 2,
        width: C ? x : x * 2,
        height: w ? O : O * 2
      })), !V && /* @__PURE__ */ B.createElement("clipPath", {
        id: "clipPath-dots-".concat(D)
      }, /* @__PURE__ */ B.createElement("rect", {
        x: y - N / 2,
        y: d - N / 2,
        width: x + N,
        height: O + N
      }))) : null, T ? null : this.renderArea(E, D), (c || T) && this.renderDots(E, V, D), (!S || A) && Nr.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, u) {
      return r.animationId !== u.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        curBaseLine: r.baseLine,
        prevPoints: u.curPoints,
        prevBaseLine: u.curBaseLine
      } : r.points !== u.curPoints || r.baseLine !== u.curBaseLine ? {
        curPoints: r.points,
        curBaseLine: r.baseLine
      } : null;
    }
  }]);
})(at.PureComponent);
FD = tr;
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
  isAnimationActive: !ui.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Qn(tr, "getBaseValue", function(t, e, n, r) {
  var u = t.layout, l = t.baseValue, c = e.props.baseValue, s = c ?? l;
  if (st(s) && typeof s == "number")
    return s;
  var h = u === "horizontal" ? r : n, d = h.scale.domain();
  if (h.type === "number") {
    var y = Math.max(d[0], d[1]), p = Math.min(d[0], d[1]);
    return s === "dataMin" ? p : s === "dataMax" || y < 0 ? y : Math.max(Math.min(d[0], d[1]), 0);
  }
  return s === "dataMin" ? d[0] : s === "dataMax" ? d[1] : d[0];
});
Qn(tr, "getComposedData", function(t) {
  var e = t.props, n = t.item, r = t.xAxis, u = t.yAxis, l = t.xAxisTicks, c = t.yAxisTicks, s = t.bandSize, h = t.dataKey, d = t.stackedData, y = t.dataStartIndex, p = t.displayedData, g = t.offset, x = e.layout, O = d && d.length, S = FD.getBaseValue(e, n, r, u), b = x === "horizontal", A = !1, T = p.map(function(C, w) {
    var E;
    O ? E = d[y + w] : (E = Ge(C, h), Array.isArray(E) ? A = !0 : E = [S, E]);
    var D = E[1] == null || O && Ge(C, h) == null;
    return b ? {
      x: ts({
        axis: r,
        ticks: l,
        bandSize: s,
        entry: C,
        index: w
      }),
      y: D ? null : u.scale(E[1]),
      value: E,
      payload: C
    } : {
      x: D ? null : r.scale(E[1]),
      y: ts({
        axis: u,
        ticks: c,
        bandSize: s,
        entry: C,
        index: w
      }),
      value: E,
      payload: C
    };
  }), M;
  return O || A ? M = T.map(function(C) {
    var w = Array.isArray(C.value) ? C.value[0] : null;
    return b ? {
      x: C.x,
      y: w != null && C.y != null ? u.scale(w) : null
    } : {
      x: w != null ? r.scale(w) : null,
      y: C.y
    };
  }) : M = b ? u.scale(S) : r.scale(S), da({
    points: T,
    baseLine: M,
    layout: x,
    isRange: A
  }, g);
});
Qn(tr, "renderDotItem", function(t, e) {
  var n;
  if (/* @__PURE__ */ B.isValidElement(t))
    n = /* @__PURE__ */ B.cloneElement(t, e);
  else if (At(t))
    n = t(e);
  else {
    var r = qt("recharts-area-dot", typeof t != "boolean" ? t.className : ""), u = e.key, l = ZD(e, UI);
    n = /* @__PURE__ */ B.createElement(Ks, Za({}, l, {
      key: u,
      className: r
    }));
  }
  return n;
});
function ju(t) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ju(t);
}
function ZI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function QI(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, eP(r.key), r);
  }
}
function WI(t, e, n) {
  return e && QI(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function JI(t, e, n) {
  return e = Os(e), tG(t, JD() ? Reflect.construct(e, n || [], Os(t).constructor) : e.apply(t, n));
}
function tG(t, e) {
  if (e && (ju(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return eG(t);
}
function eG(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function JD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (JD = function() {
    return !!t;
  })();
}
function Os(t) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Os(t);
}
function nG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && $b(t, e);
}
function $b(t, e) {
  return $b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, $b(t, e);
}
function tP(t, e, n) {
  return e = eP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eP(t) {
  var e = rG(t, "string");
  return ju(e) == "symbol" ? e : e + "";
}
function rG(t, e) {
  if (ju(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ju(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Bb() {
  return Bb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Bb.apply(this, arguments);
}
function aG(t) {
  var e = t.xAxisId, n = F0(), r = Z0(), u = qD(e);
  return u == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ at.createElement(Uu, Bb({}, u, {
      className: qt("recharts-".concat(u.axisType, " ").concat(u.axisType), u.className),
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
    return ZI(this, e), JI(this, e, arguments);
  }
  return nG(e, t), WI(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ at.createElement(aG, this.props);
    }
  }]);
})(at.Component);
tP(Mr, "displayName", "XAxis");
tP(Mr, "defaultProps", {
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
function Cu(t) {
  "@babel/helpers - typeof";
  return Cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cu(t);
}
function iG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function uG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, aP(r.key), r);
  }
}
function oG(t, e, n) {
  return e && uG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function lG(t, e, n) {
  return e = As(e), cG(t, nP() ? Reflect.construct(e, n || [], As(t).constructor) : e.apply(t, n));
}
function cG(t, e) {
  if (e && (Cu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fG(t);
}
function fG(t) {
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
function As(t) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, As(t);
}
function sG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Lb(t, e);
}
function Lb(t, e) {
  return Lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Lb(t, e);
}
function rP(t, e, n) {
  return e = aP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function aP(t) {
  var e = hG(t, "string");
  return Cu(e) == "symbol" ? e : e + "";
}
function hG(t, e) {
  if (Cu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Cu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function kb() {
  return kb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, kb.apply(this, arguments);
}
var dG = function(e) {
  var n = e.yAxisId, r = F0(), u = Z0(), l = zD(n);
  return l == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ at.createElement(Uu, kb({}, l, {
      className: qt("recharts-".concat(l.axisType, " ").concat(l.axisType), l.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: u
      },
      ticksGenerator: function(s) {
        return Er(s, !0);
      }
    }))
  );
}, jr = /* @__PURE__ */ (function(t) {
  function e() {
    return iG(this, e), lG(this, e, arguments);
  }
  return sG(e, t), oG(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ at.createElement(dG, this.props);
    }
  }]);
})(at.Component);
rP(jr, "displayName", "YAxis");
rP(jr, "defaultProps", {
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
function LM(t) {
  return mG(t) || yG(t) || pG(t) || vG();
}
function vG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pG(t, e) {
  if (t) {
    if (typeof t == "string") return Ub(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ub(t, e);
  }
}
function yG(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function mG(t) {
  if (Array.isArray(t)) return Ub(t);
}
function Ub(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Hb = function(e, n, r, u, l) {
  var c = Cn(e, W0), s = Cn(e, Ws), h = [].concat(LM(c), LM(s)), d = Cn(e, th), y = "".concat(u, "Id"), p = u[0], g = n;
  if (h.length && (g = h.reduce(function(S, b) {
    if (b.props[y] === r && Jn(b.props, "extendDomain") && st(b.props[p])) {
      var A = b.props[p];
      return [Math.min(S[0], A), Math.max(S[1], A)];
    }
    return S;
  }, g)), d.length) {
    var x = "".concat(p, "1"), O = "".concat(p, "2");
    g = d.reduce(function(S, b) {
      if (b.props[y] === r && Jn(b.props, "extendDomain") && st(b.props[x]) && st(b.props[O])) {
        var A = b.props[x], T = b.props[O];
        return [Math.min(S[0], A, T), Math.max(S[1], A, T)];
      }
      return S;
    }, g);
  }
  return l && l.length && (g = l.reduce(function(S, b) {
    return st(b) ? [Math.min(S[0], b), Math.max(S[1], b)] : S;
  }, g)), g;
}, bg = { exports: {} }, kM;
function gG() {
  return kM || (kM = 1, (function(t) {
    var e = Object.prototype.hasOwnProperty, n = "~";
    function r() {
    }
    Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = !1));
    function u(h, d, y) {
      this.fn = h, this.context = d, this.once = y || !1;
    }
    function l(h, d, y, p, g) {
      if (typeof y != "function")
        throw new TypeError("The listener must be a function");
      var x = new u(y, p || h, g), O = n ? n + d : d;
      return h._events[O] ? h._events[O].fn ? h._events[O] = [h._events[O], x] : h._events[O].push(x) : (h._events[O] = x, h._eventsCount++), h;
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
      for (var g = 0, x = p.length, O = new Array(x); g < x; g++)
        O[g] = p[g].fn;
      return O;
    }, s.prototype.listenerCount = function(d) {
      var y = n ? n + d : d, p = this._events[y];
      return p ? p.fn ? 1 : p.length : 0;
    }, s.prototype.emit = function(d, y, p, g, x, O) {
      var S = n ? n + d : d;
      if (!this._events[S]) return !1;
      var b = this._events[S], A = arguments.length, T, M;
      if (b.fn) {
        switch (b.once && this.removeListener(d, b.fn, void 0, !0), A) {
          case 1:
            return b.fn.call(b.context), !0;
          case 2:
            return b.fn.call(b.context, y), !0;
          case 3:
            return b.fn.call(b.context, y, p), !0;
          case 4:
            return b.fn.call(b.context, y, p, g), !0;
          case 5:
            return b.fn.call(b.context, y, p, g, x), !0;
          case 6:
            return b.fn.call(b.context, y, p, g, x, O), !0;
        }
        for (M = 1, T = new Array(A - 1); M < A; M++)
          T[M - 1] = arguments[M];
        b.fn.apply(b.context, T);
      } else {
        var C = b.length, w;
        for (M = 0; M < C; M++)
          switch (b[M].once && this.removeListener(d, b[M].fn, void 0, !0), A) {
            case 1:
              b[M].fn.call(b[M].context);
              break;
            case 2:
              b[M].fn.call(b[M].context, y);
              break;
            case 3:
              b[M].fn.call(b[M].context, y, p);
              break;
            case 4:
              b[M].fn.call(b[M].context, y, p, g);
              break;
            default:
              if (!T) for (w = 1, T = new Array(A - 1); w < A; w++)
                T[w - 1] = arguments[w];
              b[M].fn.apply(b[M].context, T);
          }
      }
      return !0;
    }, s.prototype.on = function(d, y, p) {
      return l(this, d, y, p, !1);
    }, s.prototype.once = function(d, y, p) {
      return l(this, d, y, p, !0);
    }, s.prototype.removeListener = function(d, y, p, g) {
      var x = n ? n + d : d;
      if (!this._events[x]) return this;
      if (!y)
        return c(this, x), this;
      var O = this._events[x];
      if (O.fn)
        O.fn === y && (!g || O.once) && (!p || O.context === p) && c(this, x);
      else {
        for (var S = 0, b = [], A = O.length; S < A; S++)
          (O[S].fn !== y || g && !O[S].once || p && O[S].context !== p) && b.push(O[S]);
        b.length ? this._events[x] = b.length === 1 ? b[0] : b : c(this, x);
      }
      return this;
    }, s.prototype.removeAllListeners = function(d) {
      var y;
      return d ? (y = n ? n + d : d, this._events[y] && c(this, y)) : (this._events = new r(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, t.exports = s;
  })(bg)), bg.exports;
}
var bG = gG();
const xG = /* @__PURE__ */ Qt(bG);
var xg = new xG(), Sg = "recharts.syncMouseEvents";
function ql(t) {
  "@babel/helpers - typeof";
  return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ql(t);
}
function SG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _G(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, iP(r.key), r);
  }
}
function OG(t, e, n) {
  return e && _G(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _g(t, e, n) {
  return e = iP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function iP(t) {
  var e = AG(t, "string");
  return ql(e) == "symbol" ? e : e + "";
}
function AG(t, e) {
  if (ql(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ql(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var wG = /* @__PURE__ */ (function() {
  function t() {
    SG(this, t), _g(this, "activeIndex", 0), _g(this, "coordinateList", []), _g(this, "layout", "horizontal");
  }
  return OG(t, [{
    key: "setDetails",
    value: function(n) {
      var r, u = n.coordinateList, l = u === void 0 ? null : u, c = n.container, s = c === void 0 ? null : c, h = n.layout, d = h === void 0 ? null : h, y = n.offset, p = y === void 0 ? null : y, g = n.mouseHandlerCallback, x = g === void 0 ? null : g;
      this.coordinateList = (r = l ?? this.coordinateList) !== null && r !== void 0 ? r : [], this.container = s ?? this.container, this.layout = d ?? this.layout, this.offset = p ?? this.offset, this.mouseHandlerCallback = x ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var u = this.container.getBoundingClientRect(), l = u.x, c = u.y, s = u.height, h = this.coordinateList[this.activeIndex].coordinate, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollX) || 0, y = ((r = window) === null || r === void 0 ? void 0 : r.scrollY) || 0, p = l + h + d, g = c + this.offset.top + s / 2 + y;
        this.mouseHandlerCallback({
          pageX: p,
          pageY: g
        });
      }
    }
  }]);
})();
function TG(t, e, n) {
  if (n === "number" && e === !0 && Array.isArray(t)) {
    var r = t == null ? void 0 : t[0], u = t == null ? void 0 : t[1];
    if (r && u && st(r) && st(u))
      return !0;
  }
  return !1;
}
function EG(t, e, n, r) {
  var u = r / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: t === "horizontal" ? e.x - u : n.left + 0.5,
    y: t === "horizontal" ? n.top + 0.5 : e.y - u,
    width: t === "horizontal" ? r : n.width - 1,
    height: t === "horizontal" ? n.height - 1 : r
  };
}
function uP(t) {
  var e = t.cx, n = t.cy, r = t.radius, u = t.startAngle, l = t.endAngle, c = qe(e, n, r, u), s = qe(e, n, r, l);
  return {
    points: [c, s],
    cx: e,
    cy: n,
    radius: r,
    startAngle: u,
    endAngle: l
  };
}
function MG(t, e, n) {
  var r, u, l, c;
  if (t === "horizontal")
    r = e.x, l = r, u = n.top, c = n.top + n.height;
  else if (t === "vertical")
    u = e.y, c = u, r = n.left, l = n.left + n.width;
  else if (e.cx != null && e.cy != null)
    if (t === "centric") {
      var s = e.cx, h = e.cy, d = e.innerRadius, y = e.outerRadius, p = e.angle, g = qe(s, h, d, p), x = qe(s, h, y, p);
      r = g.x, u = g.y, l = x.x, c = x.y;
    } else
      return uP(e);
  return [{
    x: r,
    y: u
  }, {
    x: l,
    y: c
  }];
}
function zl(t) {
  "@babel/helpers - typeof";
  return zl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zl(t);
}
function UM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _f(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? UM(Object(n), !0).forEach(function(r) {
      jG(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : UM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function jG(t, e, n) {
  return e = CG(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function CG(t) {
  var e = DG(t, "string");
  return zl(e) == "symbol" ? e : e + "";
}
function DG(t, e) {
  if (zl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (zl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function PG(t) {
  var e, n, r = t.element, u = t.tooltipEventType, l = t.isActive, c = t.activeCoordinate, s = t.activePayload, h = t.offset, d = t.activeTooltipIndex, y = t.tooltipAxisBandSize, p = t.layout, g = t.chartName, x = (e = r.props.cursor) !== null && e !== void 0 ? e : (n = r.type.defaultProps) === null || n === void 0 ? void 0 : n.cursor;
  if (!r || !x || !l || !c || g !== "ScatterChart" && u !== "axis")
    return null;
  var O, S = ou;
  if (g === "ScatterChart")
    O = c, S = xH;
  else if (g === "BarChart")
    O = EG(p, c, h, y), S = G0;
  else if (p === "radial") {
    var b = uP(c), A = b.cx, T = b.cy, M = b.radius, C = b.startAngle, w = b.endAngle;
    O = {
      cx: A,
      cy: T,
      startAngle: C,
      endAngle: w,
      innerRadius: M,
      outerRadius: M
    }, S = sD;
  } else
    O = {
      points: MG(p, c, h)
    }, S = ou;
  var E = _f(_f(_f(_f({
    stroke: "#ccc",
    pointerEvents: "none"
  }, h), O), Et(x, !1)), {}, {
    payload: s,
    payloadIndex: d,
    className: qt("recharts-tooltip-cursor", x.className)
  });
  return /* @__PURE__ */ at.isValidElement(x) ? /* @__PURE__ */ at.cloneElement(x, E) : /* @__PURE__ */ at.createElement(S, E);
}
var NG = ["item"], RG = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Du(t) {
  "@babel/helpers - typeof";
  return Du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Du(t);
}
function nu() {
  return nu = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, nu.apply(this, arguments);
}
function HM(t, e) {
  return $G(t) || zG(t, e) || lP(t, e) || qG();
}
function qG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zG(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r, u, l, c, s = [], h = !0, d = !1;
    try {
      if (l = (n = n.call(t)).next, e !== 0) for (; !(h = (r = l.call(n)).done) && (s.push(r.value), s.length !== e); h = !0) ;
    } catch (y) {
      d = !0, u = y;
    } finally {
      try {
        if (!h && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw u;
      }
    }
    return s;
  }
}
function $G(t) {
  if (Array.isArray(t)) return t;
}
function IM(t, e) {
  if (t == null) return {};
  var n = BG(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function BG(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function LG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function kG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, cP(r.key), r);
  }
}
function UG(t, e, n) {
  return e && kG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function HG(t, e, n) {
  return e = ws(e), IG(t, oP() ? Reflect.construct(e, n || [], ws(t).constructor) : e.apply(t, n));
}
function IG(t, e) {
  if (e && (Du(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return GG(t);
}
function GG(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function oP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oP = function() {
    return !!t;
  })();
}
function ws(t) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ws(t);
}
function YG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ib(t, e);
}
function Ib(t, e) {
  return Ib = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Ib(t, e);
}
function Pu(t) {
  return VG(t) || KG(t) || lP(t) || XG();
}
function XG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lP(t, e) {
  if (t) {
    if (typeof t == "string") return Gb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gb(t, e);
  }
}
function KG(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function VG(t) {
  if (Array.isArray(t)) return Gb(t);
}
function Gb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function GM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function tt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? GM(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : GM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function bt(t, e, n) {
  return e = cP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function cP(t) {
  var e = FG(t, "string");
  return Du(e) == "symbol" ? e : e + "";
}
function FG(t, e) {
  if (Du(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Du(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ZG = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, QG = {
  width: "100%",
  height: "100%"
}, fP = {
  x: 0,
  y: 0
};
function Of(t) {
  return t;
}
var WG = function(e, n) {
  return n === "horizontal" ? e.x : n === "vertical" ? e.y : n === "centric" ? e.angle : e.radius;
}, JG = function(e, n, r, u) {
  var l = n.find(function(y) {
    return y && y.index === r;
  });
  if (l) {
    if (e === "horizontal")
      return {
        x: l.coordinate,
        y: u.y
      };
    if (e === "vertical")
      return {
        x: u.x,
        y: l.coordinate
      };
    if (e === "centric") {
      var c = l.coordinate, s = u.radius;
      return tt(tt(tt({}, u), qe(u.cx, u.cy, s, c)), {}, {
        angle: c,
        radius: s
      });
    }
    var h = l.coordinate, d = u.angle;
    return tt(tt(tt({}, u), qe(u.cx, u.cy, h, d)), {}, {
      angle: d,
      radius: h
    });
  }
  return fP;
}, eh = function(e, n) {
  var r = n.graphicalItems, u = n.dataStartIndex, l = n.dataEndIndex, c = (r ?? []).reduce(function(s, h) {
    var d = h.props.data;
    return d && d.length ? [].concat(Pu(s), Pu(d)) : s;
  }, []);
  return c.length > 0 ? c : e && e.length && st(u) && st(l) ? e.slice(u, l + 1) : [];
};
function sP(t) {
  return t === "number" ? [0, "auto"] : void 0;
}
var Yb = function(e, n, r, u) {
  var l = e.graphicalItems, c = e.tooltipAxis, s = eh(n, e);
  return r < 0 || !l || !l.length || r >= s.length ? null : l.reduce(function(h, d) {
    var y, p = (y = d.props.data) !== null && y !== void 0 ? y : n;
    p && e.dataStartIndex + e.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    e.dataEndIndex - e.dataStartIndex >= r && (p = p.slice(e.dataStartIndex, e.dataEndIndex + 1));
    var g;
    if (c.dataKey && !c.allowDuplicatedCategory) {
      var x = p === void 0 ? s : p;
      g = Tf(x, c.dataKey, u);
    } else
      g = p && p[r] || s[r];
    return g ? [].concat(Pu(h), [lD(d, g)]) : h;
  }, []);
}, YM = function(e, n, r, u) {
  var l = u || {
    x: e.chartX,
    y: e.chartY
  }, c = WG(l, r), s = e.orderedTooltipTicks, h = e.tooltipAxis, d = e.tooltipTicks, y = QL(c, s, d, h);
  if (y >= 0 && d) {
    var p = d[y] && d[y].value, g = Yb(e, n, y, p), x = JG(r, s, y, l);
    return {
      activeTooltipIndex: y,
      activeLabel: p,
      activePayload: g,
      activeCoordinate: x
    };
  }
  return null;
}, tY = function(e, n) {
  var r = n.axes, u = n.graphicalItems, l = n.axisType, c = n.axisIdKey, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.layout, p = e.children, g = e.stackOffset, x = iD(y, l);
  return r.reduce(function(O, S) {
    var b, A = S.type.defaultProps !== void 0 ? tt(tt({}, S.type.defaultProps), S.props) : S.props, T = A.type, M = A.dataKey, C = A.allowDataOverflow, w = A.allowDuplicatedCategory, E = A.scale, D = A.ticks, R = A.includeHidden, z = A[c];
    if (O[z])
      return O;
    var F = eh(e.data, {
      graphicalItems: u.filter(function(U) {
        var et, ft = c in U.props ? U.props[c] : (et = U.type.defaultProps) === null || et === void 0 ? void 0 : et[c];
        return ft === z;
      }),
      dataStartIndex: h,
      dataEndIndex: d
    }), k = F.length, $, K, Z;
    TG(A.domain, C, T) && ($ = lb(A.domain, null, C), x && (T === "number" || E !== "auto") && (Z = Jo(F, M, "category")));
    var V = sP(T);
    if (!$ || $.length === 0) {
      var N, I = (N = A.domain) !== null && N !== void 0 ? N : V;
      if (M) {
        if ($ = Jo(F, M, T), T === "category" && x) {
          var W = I3($);
          w && W ? (K = $, $ = ss(0, k)) : w || ($ = e2(I, $, S).reduce(function(U, et) {
            return U.indexOf(et) >= 0 ? U : [].concat(Pu(U), [et]);
          }, []));
        } else if (T === "category")
          w ? $ = $.filter(function(U) {
            return U !== "" && !Mt(U);
          }) : $ = e2(I, $, S).reduce(function(U, et) {
            return U.indexOf(et) >= 0 || et === "" || Mt(et) ? U : [].concat(Pu(U), [et]);
          }, []);
        else if (T === "number") {
          var ut = n5(F, u.filter(function(U) {
            var et, ft, vt = c in U.props ? U.props[c] : (et = U.type.defaultProps) === null || et === void 0 ? void 0 : et[c], mt = "hide" in U.props ? U.props.hide : (ft = U.type.defaultProps) === null || ft === void 0 ? void 0 : ft.hide;
            return vt === z && (R || !mt);
          }), M, l, y);
          ut && ($ = ut);
        }
        x && (T === "number" || E !== "auto") && (Z = Jo(F, M, "category"));
      } else x ? $ = ss(0, k) : s && s[z] && s[z].hasStack && T === "number" ? $ = g === "expand" ? [0, 1] : oD(s[z].stackGroups, h, d) : $ = aD(F, u.filter(function(U) {
        var et = c in U.props ? U.props[c] : U.type.defaultProps[c], ft = "hide" in U.props ? U.props.hide : U.type.defaultProps.hide;
        return et === z && (R || !ft);
      }), T, y, !0);
      if (T === "number")
        $ = Hb(p, $, z, l, D), I && ($ = lb(I, $, C));
      else if (T === "category" && I) {
        var lt = I, P = $.every(function(U) {
          return lt.indexOf(U) >= 0;
        });
        P && ($ = lt);
      }
    }
    return tt(tt({}, O), {}, bt({}, z, tt(tt({}, A), {}, {
      axisType: l,
      domain: $,
      categoricalDomain: Z,
      duplicateDomain: K,
      originalDomain: (b = A.domain) !== null && b !== void 0 ? b : V,
      isCategorical: x,
      layout: y
    })));
  }, {});
}, eY = function(e, n) {
  var r = n.graphicalItems, u = n.Axis, l = n.axisType, c = n.axisIdKey, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.layout, p = e.children, g = eh(e.data, {
    graphicalItems: r,
    dataStartIndex: h,
    dataEndIndex: d
  }), x = g.length, O = iD(y, l), S = -1;
  return r.reduce(function(b, A) {
    var T = A.type.defaultProps !== void 0 ? tt(tt({}, A.type.defaultProps), A.props) : A.props, M = T[c], C = sP("number");
    if (!b[M]) {
      S++;
      var w;
      return O ? w = ss(0, x) : s && s[M] && s[M].hasStack ? (w = oD(s[M].stackGroups, h, d), w = Hb(p, w, M, l)) : (w = lb(C, aD(g, r.filter(function(E) {
        var D, R, z = c in E.props ? E.props[c] : (D = E.type.defaultProps) === null || D === void 0 ? void 0 : D[c], F = "hide" in E.props ? E.props.hide : (R = E.type.defaultProps) === null || R === void 0 ? void 0 : R.hide;
        return z === M && !F;
      }), "number", y), u.defaultProps.allowDataOverflow), w = Hb(p, w, M, l)), tt(tt({}, b), {}, bt({}, M, tt(tt({
        axisType: l
      }, u.defaultProps), {}, {
        hide: !0,
        orientation: jn(ZG, "".concat(l, ".").concat(S % 2), null),
        domain: w,
        originalDomain: C,
        isCategorical: O,
        layout: y
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return b;
  }, {});
}, nY = function(e, n) {
  var r = n.axisType, u = r === void 0 ? "xAxis" : r, l = n.AxisComp, c = n.graphicalItems, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.children, p = "".concat(u, "Id"), g = Cn(y, l), x = {};
  return g && g.length ? x = tY(e, {
    axes: g,
    graphicalItems: c,
    axisType: u,
    axisIdKey: p,
    stackGroups: s,
    dataStartIndex: h,
    dataEndIndex: d
  }) : c && c.length && (x = eY(e, {
    Axis: l,
    graphicalItems: c,
    axisType: u,
    axisIdKey: p,
    stackGroups: s,
    dataStartIndex: h,
    dataEndIndex: d
  })), x;
}, rY = function(e) {
  var n = pa(e), r = Er(n, !1, !0);
  return {
    tooltipTicks: r,
    orderedTooltipTicks: y0(r, function(u) {
      return u.coordinate;
    }),
    tooltipAxis: n,
    tooltipAxisBandSize: es(n, r)
  };
}, XM = function(e) {
  var n = e.children, r = e.defaultShowTooltip, u = hn(n, Su), l = 0, c = 0;
  return e.data && e.data.length !== 0 && (c = e.data.length - 1), u && u.props && (u.props.startIndex >= 0 && (l = u.props.startIndex), u.props.endIndex >= 0 && (c = u.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: l,
    dataEndIndex: c,
    activeTooltipIndex: -1,
    isTooltipActive: !!r
  };
}, aY = function(e) {
  return !e || !e.length ? !1 : e.some(function(n) {
    var r = Cr(n && n.type);
    return r && r.indexOf("Bar") >= 0;
  });
}, KM = function(e) {
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
}, iY = function(e, n) {
  var r = e.props, u = e.graphicalItems, l = e.xAxisMap, c = l === void 0 ? {} : l, s = e.yAxisMap, h = s === void 0 ? {} : s, d = r.width, y = r.height, p = r.children, g = r.margin || {}, x = hn(p, Su), O = hn(p, au), S = Object.keys(h).reduce(function(w, E) {
    var D = h[E], R = D.orientation;
    return !D.mirror && !D.hide ? tt(tt({}, w), {}, bt({}, R, w[R] + D.width)) : w;
  }, {
    left: g.left || 0,
    right: g.right || 0
  }), b = Object.keys(c).reduce(function(w, E) {
    var D = c[E], R = D.orientation;
    return !D.mirror && !D.hide ? tt(tt({}, w), {}, bt({}, R, jn(w, "".concat(R)) + D.height)) : w;
  }, {
    top: g.top || 0,
    bottom: g.bottom || 0
  }), A = tt(tt({}, b), S), T = A.bottom;
  x && (A.bottom += x.props.height || Su.defaultProps.height), O && n && (A = t5(A, u, r, n));
  var M = d - A.left - A.right, C = y - A.top - A.bottom;
  return tt(tt({
    brushBottom: T
  }, A), {}, {
    // never return negative values for height and width
    width: Math.max(M, 0),
    height: Math.max(C, 0)
  });
}, uY = function(e, n) {
  if (n === "xAxis")
    return e[n].width;
  if (n === "yAxis")
    return e[n].height;
}, e1 = function(e) {
  var n = e.chartName, r = e.GraphicalChild, u = e.defaultTooltipEventType, l = u === void 0 ? "axis" : u, c = e.validateTooltipEventTypes, s = c === void 0 ? ["axis"] : c, h = e.axisComponents, d = e.legendContent, y = e.formatAxisMap, p = e.defaultProps, g = function(A, T) {
    var M = T.graphicalItems, C = T.stackGroups, w = T.offset, E = T.updateId, D = T.dataStartIndex, R = T.dataEndIndex, z = A.barSize, F = A.layout, k = A.barGap, $ = A.barCategoryGap, K = A.maxBarSize, Z = KM(F), V = Z.numericAxisName, N = Z.cateAxisName, I = aY(M), W = [];
    return M.forEach(function(ut, lt) {
      var P = eh(A.data, {
        graphicalItems: [ut],
        dataStartIndex: D,
        dataEndIndex: R
      }), U = ut.type.defaultProps !== void 0 ? tt(tt({}, ut.type.defaultProps), ut.props) : ut.props, et = U.dataKey, ft = U.maxBarSize, vt = U["".concat(V, "Id")], mt = U["".concat(N, "Id")], jt = {}, kt = h.reduce(function(Rn, ar) {
        var Hu = T["".concat(ar.axisType, "Map")], $e = U["".concat(ar.axisType, "Id")];
        Hu && Hu[$e] || ar.axisType === "zAxis" || ri();
        var Gl = Hu[$e];
        return tt(tt({}, Rn), {}, bt(bt({}, ar.axisType, Gl), "".concat(ar.axisType, "Ticks"), Er(Gl)));
      }, jt), ct = kt[N], xt = kt["".concat(N, "Ticks")], St = C && C[vt] && C[vt].hasStack && v5(ut, C[vt].stackGroups), ot = Cr(ut.type).indexOf("Bar") >= 0, te = es(ct, xt), wt = [], ue = I && WL({
        barSize: z,
        stackGroups: C,
        totalSize: uY(kt, N)
      });
      if (ot) {
        var oe, ze, Nn = Mt(ft) ? K : ft, Gn = (oe = (ze = es(ct, xt, !0)) !== null && ze !== void 0 ? ze : Nn) !== null && oe !== void 0 ? oe : 0;
        wt = JL({
          barGap: k,
          barCategoryGap: $,
          bandSize: Gn !== te ? Gn : te,
          sizeList: ue[mt],
          maxBarSize: Nn
        }), Gn !== te && (wt = wt.map(function(Rn) {
          return tt(tt({}, Rn), {}, {
            position: tt(tt({}, Rn.position), {}, {
              offset: Rn.position.offset - Gn / 2
            })
          });
        }));
      }
      var kr = ut && ut.type && ut.type.getComposedData;
      kr && W.push({
        props: tt(tt({}, kr(tt(tt({}, kt), {}, {
          displayedData: P,
          props: A,
          dataKey: et,
          item: ut,
          bandSize: te,
          barPosition: wt,
          offset: w,
          stackedData: St,
          layout: F,
          dataStartIndex: D,
          dataEndIndex: R
        }))), {}, bt(bt(bt({
          key: ut.key || "item-".concat(lt)
        }, V, kt[V]), N, kt[N]), "animationId", E)),
        childIndex: eq(ut, A.children),
        item: ut
      });
    }), W;
  }, x = function(A, T) {
    var M = A.props, C = A.dataStartIndex, w = A.dataEndIndex, E = A.updateId;
    if (!yA({
      props: M
    }))
      return null;
    var D = M.children, R = M.layout, z = M.stackOffset, F = M.data, k = M.reverseStackOrder, $ = KM(R), K = $.numericAxisName, Z = $.cateAxisName, V = Cn(D, r), N = s5(F, V, "".concat(K, "Id"), "".concat(Z, "Id"), z, k), I = h.reduce(function(U, et) {
      var ft = "".concat(et.axisType, "Map");
      return tt(tt({}, U), {}, bt({}, ft, nY(M, tt(tt({}, et), {}, {
        graphicalItems: V,
        stackGroups: et.axisType === K && N,
        dataStartIndex: C,
        dataEndIndex: w
      }))));
    }, {}), W = iY(tt(tt({}, I), {}, {
      props: M,
      graphicalItems: V
    }), T == null ? void 0 : T.legendBBox);
    Object.keys(I).forEach(function(U) {
      I[U] = y(M, I[U], W, U.replace("Map", ""), n);
    });
    var ut = I["".concat(Z, "Map")], lt = rY(ut), P = g(M, tt(tt({}, I), {}, {
      dataStartIndex: C,
      dataEndIndex: w,
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
  }, O = /* @__PURE__ */ (function(b) {
    function A(T) {
      var M, C, w;
      return LG(this, A), w = HG(this, A, [T]), bt(w, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), bt(w, "accessibilityManager", new wG()), bt(w, "handleLegendBBoxUpdate", function(E) {
        if (E) {
          var D = w.state, R = D.dataStartIndex, z = D.dataEndIndex, F = D.updateId;
          w.setState(tt({
            legendBBox: E
          }, x({
            props: w.props,
            dataStartIndex: R,
            dataEndIndex: z,
            updateId: F
          }, tt(tt({}, w.state), {}, {
            legendBBox: E
          }))));
        }
      }), bt(w, "handleReceiveSyncEvent", function(E, D, R) {
        if (w.props.syncId === E) {
          if (R === w.eventEmitterSymbol && typeof w.props.syncMethod != "function")
            return;
          w.applySyncEvent(D);
        }
      }), bt(w, "handleBrushChange", function(E) {
        var D = E.startIndex, R = E.endIndex;
        if (D !== w.state.dataStartIndex || R !== w.state.dataEndIndex) {
          var z = w.state.updateId;
          w.setState(function() {
            return tt({
              dataStartIndex: D,
              dataEndIndex: R
            }, x({
              props: w.props,
              dataStartIndex: D,
              dataEndIndex: R,
              updateId: z
            }, w.state));
          }), w.triggerSyncEvent({
            dataStartIndex: D,
            dataEndIndex: R
          });
        }
      }), bt(w, "handleMouseEnter", function(E) {
        var D = w.getMouseInfo(E);
        if (D) {
          var R = tt(tt({}, D), {}, {
            isTooltipActive: !0
          });
          w.setState(R), w.triggerSyncEvent(R);
          var z = w.props.onMouseEnter;
          At(z) && z(R, E);
        }
      }), bt(w, "triggeredAfterMouseMove", function(E) {
        var D = w.getMouseInfo(E), R = D ? tt(tt({}, D), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        w.setState(R), w.triggerSyncEvent(R);
        var z = w.props.onMouseMove;
        At(z) && z(R, E);
      }), bt(w, "handleItemMouseEnter", function(E) {
        w.setState(function() {
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
      }), bt(w, "handleItemMouseLeave", function() {
        w.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), bt(w, "handleMouseMove", function(E) {
        E.persist(), w.throttleTriggeredAfterMouseMove(E);
      }), bt(w, "handleMouseLeave", function(E) {
        w.throttleTriggeredAfterMouseMove.cancel();
        var D = {
          isTooltipActive: !1
        };
        w.setState(D), w.triggerSyncEvent(D);
        var R = w.props.onMouseLeave;
        At(R) && R(D, E);
      }), bt(w, "handleOuterEvent", function(E) {
        var D = tq(E), R = jn(w.props, "".concat(D));
        if (D && At(R)) {
          var z, F;
          /.*touch.*/i.test(D) ? F = w.getMouseInfo(E.changedTouches[0]) : F = w.getMouseInfo(E), R((z = F) !== null && z !== void 0 ? z : {}, E);
        }
      }), bt(w, "handleClick", function(E) {
        var D = w.getMouseInfo(E);
        if (D) {
          var R = tt(tt({}, D), {}, {
            isTooltipActive: !0
          });
          w.setState(R), w.triggerSyncEvent(R);
          var z = w.props.onClick;
          At(z) && z(R, E);
        }
      }), bt(w, "handleMouseDown", function(E) {
        var D = w.props.onMouseDown;
        if (At(D)) {
          var R = w.getMouseInfo(E);
          D(R, E);
        }
      }), bt(w, "handleMouseUp", function(E) {
        var D = w.props.onMouseUp;
        if (At(D)) {
          var R = w.getMouseInfo(E);
          D(R, E);
        }
      }), bt(w, "handleTouchMove", function(E) {
        E.changedTouches != null && E.changedTouches.length > 0 && w.throttleTriggeredAfterMouseMove(E.changedTouches[0]);
      }), bt(w, "handleTouchStart", function(E) {
        E.changedTouches != null && E.changedTouches.length > 0 && w.handleMouseDown(E.changedTouches[0]);
      }), bt(w, "handleTouchEnd", function(E) {
        E.changedTouches != null && E.changedTouches.length > 0 && w.handleMouseUp(E.changedTouches[0]);
      }), bt(w, "handleDoubleClick", function(E) {
        var D = w.props.onDoubleClick;
        if (At(D)) {
          var R = w.getMouseInfo(E);
          D(R, E);
        }
      }), bt(w, "handleContextMenu", function(E) {
        var D = w.props.onContextMenu;
        if (At(D)) {
          var R = w.getMouseInfo(E);
          D(R, E);
        }
      }), bt(w, "triggerSyncEvent", function(E) {
        w.props.syncId !== void 0 && xg.emit(Sg, w.props.syncId, E, w.eventEmitterSymbol);
      }), bt(w, "applySyncEvent", function(E) {
        var D = w.props, R = D.layout, z = D.syncMethod, F = w.state.updateId, k = E.dataStartIndex, $ = E.dataEndIndex;
        if (E.dataStartIndex !== void 0 || E.dataEndIndex !== void 0)
          w.setState(tt({
            dataStartIndex: k,
            dataEndIndex: $
          }, x({
            props: w.props,
            dataStartIndex: k,
            dataEndIndex: $,
            updateId: F
          }, w.state)));
        else if (E.activeTooltipIndex !== void 0) {
          var K = E.chartX, Z = E.chartY, V = E.activeTooltipIndex, N = w.state, I = N.offset, W = N.tooltipTicks;
          if (!I)
            return;
          if (typeof z == "function")
            V = z(W, E);
          else if (z === "value") {
            V = -1;
            for (var ut = 0; ut < W.length; ut++)
              if (W[ut].value === E.activeLabel) {
                V = ut;
                break;
              }
          }
          var lt = tt(tt({}, I), {}, {
            x: I.left,
            y: I.top
          }), P = Math.min(K, lt.x + lt.width), U = Math.min(Z, lt.y + lt.height), et = W[V] && W[V].value, ft = Yb(w.state, w.props.data, V), vt = W[V] ? {
            x: R === "horizontal" ? W[V].coordinate : P,
            y: R === "horizontal" ? U : W[V].coordinate
          } : fP;
          w.setState(tt(tt({}, E), {}, {
            activeLabel: et,
            activeCoordinate: vt,
            activePayload: ft,
            activeTooltipIndex: V
          }));
        } else
          w.setState(E);
      }), bt(w, "renderCursor", function(E) {
        var D, R = w.state, z = R.isTooltipActive, F = R.activeCoordinate, k = R.activePayload, $ = R.offset, K = R.activeTooltipIndex, Z = R.tooltipAxisBandSize, V = w.getTooltipEventType(), N = (D = E.props.active) !== null && D !== void 0 ? D : z, I = w.props.layout, W = E.key || "_recharts-cursor";
        return /* @__PURE__ */ B.createElement(PG, {
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
      }), bt(w, "renderPolarAxis", function(E, D, R) {
        var z = jn(E, "type.axisType"), F = jn(w.state, "".concat(z, "Map")), k = E.type.defaultProps, $ = k !== void 0 ? tt(tt({}, k), E.props) : E.props, K = F && F[$["".concat(z, "Id")]];
        return /* @__PURE__ */ at.cloneElement(E, tt(tt({}, K), {}, {
          className: qt(z, K.className),
          key: E.key || "".concat(D, "-").concat(R),
          ticks: Er(K, !0)
        }));
      }), bt(w, "renderPolarGrid", function(E) {
        var D = E.props, R = D.radialLines, z = D.polarAngles, F = D.polarRadius, k = w.state, $ = k.radiusAxisMap, K = k.angleAxisMap, Z = pa($), V = pa(K), N = V.cx, I = V.cy, W = V.innerRadius, ut = V.outerRadius;
        return /* @__PURE__ */ at.cloneElement(E, {
          polarAngles: Array.isArray(z) ? z : Er(V, !0).map(function(lt) {
            return lt.coordinate;
          }),
          polarRadius: Array.isArray(F) ? F : Er(Z, !0).map(function(lt) {
            return lt.coordinate;
          }),
          cx: N,
          cy: I,
          innerRadius: W,
          outerRadius: ut,
          key: E.key || "polar-grid",
          radialLines: R
        });
      }), bt(w, "renderLegend", function() {
        var E = w.state.formattedGraphicalItems, D = w.props, R = D.children, z = D.width, F = D.height, k = w.props.margin || {}, $ = z - (k.left || 0) - (k.right || 0), K = nD({
          children: R,
          formattedGraphicalItems: E,
          legendWidth: $,
          legendContent: d
        });
        if (!K)
          return null;
        var Z = K.item, V = IM(K, NG);
        return /* @__PURE__ */ at.cloneElement(Z, tt(tt({}, V), {}, {
          chartWidth: z,
          chartHeight: F,
          margin: k,
          onBBoxUpdate: w.handleLegendBBoxUpdate
        }));
      }), bt(w, "renderTooltip", function() {
        var E, D = w.props, R = D.children, z = D.accessibilityLayer, F = hn(R, dn);
        if (!F)
          return null;
        var k = w.state, $ = k.isTooltipActive, K = k.activeCoordinate, Z = k.activePayload, V = k.activeLabel, N = k.offset, I = (E = F.props.active) !== null && E !== void 0 ? E : $;
        return /* @__PURE__ */ at.cloneElement(F, {
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
      }), bt(w, "renderBrush", function(E) {
        var D = w.props, R = D.margin, z = D.data, F = w.state, k = F.offset, $ = F.dataStartIndex, K = F.dataEndIndex, Z = F.updateId;
        return /* @__PURE__ */ at.cloneElement(E, {
          key: E.key || "_recharts-brush",
          onChange: gf(w.handleBrushChange, E.props.onChange),
          data: z,
          x: st(E.props.x) ? E.props.x : k.left,
          y: st(E.props.y) ? E.props.y : k.top + k.height + k.brushBottom - (R.bottom || 0),
          width: st(E.props.width) ? E.props.width : k.width,
          startIndex: $,
          endIndex: K,
          updateId: "brush-".concat(Z)
        });
      }), bt(w, "renderReferenceElement", function(E, D, R) {
        if (!E)
          return null;
        var z = w, F = z.clipPathId, k = w.state, $ = k.xAxisMap, K = k.yAxisMap, Z = k.offset, V = E.type.defaultProps || {}, N = E.props, I = N.xAxisId, W = I === void 0 ? V.xAxisId : I, ut = N.yAxisId, lt = ut === void 0 ? V.yAxisId : ut;
        return /* @__PURE__ */ at.cloneElement(E, {
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
      }), bt(w, "renderActivePoints", function(E) {
        var D = E.item, R = E.activePoint, z = E.basePoint, F = E.childIndex, k = E.isRange, $ = [], K = D.props.key, Z = D.item.type.defaultProps !== void 0 ? tt(tt({}, D.item.type.defaultProps), D.item.props) : D.item.props, V = Z.activeDot, N = Z.dataKey, I = tt(tt({
          index: F,
          dataKey: N,
          cx: R.x,
          cy: R.y,
          r: 4,
          fill: I0(D.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: R.payload,
          value: R.value
        }, Et(V, !1)), Ef(V));
        return $.push(A.renderActiveDot(V, I, "".concat(K, "-activePoint-").concat(F))), z ? $.push(A.renderActiveDot(V, tt(tt({}, I), {}, {
          cx: z.x,
          cy: z.y
        }), "".concat(K, "-basePoint-").concat(F))) : k && $.push(null), $;
      }), bt(w, "renderGraphicChild", function(E, D, R) {
        var z = w.filterFormatItem(E, D, R);
        if (!z)
          return null;
        var F = w.getTooltipEventType(), k = w.state, $ = k.isTooltipActive, K = k.tooltipAxis, Z = k.activeTooltipIndex, V = k.activeLabel, N = w.props.children, I = hn(N, dn), W = z.props, ut = W.points, lt = W.isRange, P = W.baseLine, U = z.item.type.defaultProps !== void 0 ? tt(tt({}, z.item.type.defaultProps), z.item.props) : z.item.props, et = U.activeDot, ft = U.hide, vt = U.activeBar, mt = U.activeShape, jt = !!(!ft && $ && I && (et || vt || mt)), kt = {};
        F !== "axis" && I && I.props.trigger === "click" ? kt = {
          onClick: gf(w.handleItemMouseEnter, E.props.onClick)
        } : F !== "axis" && (kt = {
          onMouseLeave: gf(w.handleItemMouseLeave, E.props.onMouseLeave),
          onMouseEnter: gf(w.handleItemMouseEnter, E.props.onMouseEnter)
        });
        var ct = /* @__PURE__ */ at.cloneElement(E, tt(tt({}, z.props), kt));
        function xt(ar) {
          return typeof K.dataKey == "function" ? K.dataKey(ar.payload) : null;
        }
        if (jt)
          if (Z >= 0) {
            var St, ot;
            if (K.dataKey && !K.allowDuplicatedCategory) {
              var te = typeof K.dataKey == "function" ? xt : "payload.".concat(K.dataKey.toString());
              St = Tf(ut, te, V), ot = lt && P && Tf(P, te, V);
            } else
              St = ut == null ? void 0 : ut[Z], ot = lt && P && P[Z];
            if (mt || vt) {
              var wt = E.props.activeIndex !== void 0 ? E.props.activeIndex : Z;
              return [/* @__PURE__ */ at.cloneElement(E, tt(tt(tt({}, z.props), kt), {}, {
                activeIndex: wt
              })), null, null];
            }
            if (!Mt(St))
              return [ct].concat(Pu(w.renderActivePoints({
                item: z,
                activePoint: St,
                basePoint: ot,
                childIndex: Z,
                isRange: lt
              })));
          } else {
            var ue, oe = (ue = w.getItemByXY(w.state.activeCoordinate)) !== null && ue !== void 0 ? ue : {
              graphicalItem: ct
            }, ze = oe.graphicalItem, Nn = ze.item, Gn = Nn === void 0 ? E : Nn, kr = ze.childIndex, Rn = tt(tt(tt({}, z.props), kt), {}, {
              activeIndex: kr
            });
            return [/* @__PURE__ */ at.cloneElement(Gn, Rn), null, null];
          }
        return lt ? [ct, null, null] : [ct, null];
      }), bt(w, "renderCustomized", function(E, D, R) {
        return /* @__PURE__ */ at.cloneElement(E, tt(tt({
          key: "recharts-customized-".concat(R)
        }, w.props), w.state));
      }), bt(w, "renderMap", {
        CartesianGrid: {
          handler: Of,
          once: !0
        },
        ReferenceArea: {
          handler: w.renderReferenceElement
        },
        ReferenceLine: {
          handler: Of
        },
        ReferenceDot: {
          handler: w.renderReferenceElement
        },
        XAxis: {
          handler: Of
        },
        YAxis: {
          handler: Of
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
      }), w.clipPathId = "".concat((M = T.id) !== null && M !== void 0 ? M : zu("recharts"), "-clip"), w.throttleTriggeredAfterMouseMove = rC(w.triggeredAfterMouseMove, (C = T.throttleDelay) !== null && C !== void 0 ? C : 1e3 / 60), w.state = {}, w;
    }
    return YG(A, b), UG(A, [{
      key: "componentDidMount",
      value: function() {
        var M, C;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (M = this.props.margin.left) !== null && M !== void 0 ? M : 0,
            top: (C = this.props.margin.top) !== null && C !== void 0 ? C : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var M = this.props, C = M.children, w = M.data, E = M.height, D = M.layout, R = hn(C, dn);
        if (R) {
          var z = R.props.defaultIndex;
          if (!(typeof z != "number" || z < 0 || z > this.state.tooltipTicks.length - 1)) {
            var F = this.state.tooltipTicks[z] && this.state.tooltipTicks[z].value, k = Yb(this.state, w, z, F), $ = this.state.tooltipTicks[z].coordinate, K = (this.state.offset.top + E) / 2, Z = D === "horizontal", V = Z ? {
              x: $,
              y: K
            } : {
              y: $,
              x: K
            }, N = this.state.formattedGraphicalItems.find(function(W) {
              var ut = W.item;
              return ut.type.name === "Scatter";
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
      value: function(M, C) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== C.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== M.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== M.margin) {
          var w, E;
          this.accessibilityManager.setDetails({
            offset: {
              left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
              top: (E = this.props.margin.top) !== null && E !== void 0 ? E : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(M) {
        Cg([hn(M.children, dn)], [hn(this.props.children, dn)]) || this.displayDefaultTooltip();
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
          var C = M.props.shared ? "axis" : "item";
          return s.indexOf(C) >= 0 ? C : l;
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
        var C = this.container, w = C.getBoundingClientRect(), E = UB(w), D = {
          chartX: Math.round(M.pageX - E.left),
          chartY: Math.round(M.pageY - E.top)
        }, R = w.width / C.offsetWidth || 1, z = this.inRange(D.chartX, D.chartY, R);
        if (!z)
          return null;
        var F = this.state, k = F.xAxisMap, $ = F.yAxisMap, K = this.getTooltipEventType(), Z = YM(this.state, this.props.data, this.props.layout, z);
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
      value: function(M, C) {
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, E = this.props.layout, D = M / w, R = C / w;
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
          return a2({
            x: D,
            y: R
          }, Z);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var M = this.props.children, C = this.getTooltipEventType(), w = hn(M, dn), E = {};
        w && C === "axis" && (w.props.trigger === "click" ? E = {
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
        var D = Ef(this.props, this.handleOuterEvent);
        return tt(tt({}, D), E);
      }
    }, {
      key: "addListener",
      value: function() {
        xg.on(Sg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        xg.removeListener(Sg, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(M, C, w) {
        for (var E = this.state.formattedGraphicalItems, D = 0, R = E.length; D < R; D++) {
          var z = E[D];
          if (z.item === M || z.props.key === M.key || C === Cr(z.item.type) && w === z.childIndex)
            return z;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var M = this.clipPathId, C = this.state.offset, w = C.left, E = C.top, D = C.height, R = C.width;
        return /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
          id: M
        }, /* @__PURE__ */ B.createElement("rect", {
          x: w,
          y: E,
          height: D,
          width: R
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var M = this.state.xAxisMap;
        return M ? Object.entries(M).reduce(function(C, w) {
          var E = HM(w, 2), D = E[0], R = E[1];
          return tt(tt({}, C), {}, bt({}, D, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var M = this.state.yAxisMap;
        return M ? Object.entries(M).reduce(function(C, w) {
          var E = HM(w, 2), D = E[0], R = E[1];
          return tt(tt({}, C), {}, bt({}, D, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(M) {
        var C;
        return (C = this.state.xAxisMap) === null || C === void 0 || (C = C[M]) === null || C === void 0 ? void 0 : C.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(M) {
        var C;
        return (C = this.state.yAxisMap) === null || C === void 0 || (C = C[M]) === null || C === void 0 ? void 0 : C.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(M) {
        var C = this.state, w = C.formattedGraphicalItems, E = C.activeItem;
        if (w && w.length)
          for (var D = 0, R = w.length; D < R; D++) {
            var z = w[D], F = z.props, k = z.item, $ = k.type.defaultProps !== void 0 ? tt(tt({}, k.type.defaultProps), k.props) : k.props, K = Cr(k.type);
            if (K === "Bar") {
              var Z = (F.data || []).find(function(W) {
                return fH(M, W);
              });
              if (Z)
                return {
                  graphicalItem: z,
                  payload: Z
                };
            } else if (K === "RadialBar") {
              var V = (F.data || []).find(function(W) {
                return a2(M, W);
              });
              if (V)
                return {
                  graphicalItem: z,
                  payload: V
                };
            } else if (Vs(z, E) || Fs(z, E) || Cl(z, E)) {
              var N = t9({
                graphicalItem: z,
                activeTooltipItem: E,
                itemData: $.data
              }), I = $.activeIndex === void 0 ? N : $.activeIndex;
              return {
                graphicalItem: tt(tt({}, z), {}, {
                  childIndex: I
                }),
                payload: Cl(z, E) ? $.data[N] : z.props.data[N]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var M = this;
        if (!yA(this))
          return null;
        var C = this.props, w = C.children, E = C.className, D = C.width, R = C.height, z = C.style, F = C.compact, k = C.title, $ = C.desc, K = IM(C, RG), Z = Et(K, !1);
        if (F)
          return /* @__PURE__ */ B.createElement(SM, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ B.createElement(Pg, nu({}, Z, {
            width: D,
            height: R,
            title: k,
            desc: $
          }), this.renderClipPath(), gA(w, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var V, N;
          Z.tabIndex = (V = this.props.tabIndex) !== null && V !== void 0 ? V : 0, Z.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", Z.onKeyDown = function(W) {
            M.accessibilityManager.keyboardEvent(W);
          }, Z.onFocus = function() {
            M.accessibilityManager.focus();
          };
        }
        var I = this.parseEventsOfWrapper();
        return /* @__PURE__ */ B.createElement(SM, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ B.createElement("div", nu({
          className: qt("recharts-wrapper", E),
          style: tt({
            position: "relative",
            cursor: "default",
            width: D,
            height: R
          }, z)
        }, I, {
          ref: function(ut) {
            M.container = ut;
          }
        }), /* @__PURE__ */ B.createElement(Pg, nu({}, Z, {
          width: D,
          height: R,
          title: k,
          desc: $,
          style: QG
        }), this.renderClipPath(), gA(w, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(at.Component);
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
  }, p)), bt(O, "getDerivedStateFromProps", function(b, A) {
    var T = b.dataKey, M = b.data, C = b.children, w = b.width, E = b.height, D = b.layout, R = b.stackOffset, z = b.margin, F = A.dataStartIndex, k = A.dataEndIndex;
    if (A.updateId === void 0) {
      var $ = XM(b);
      return tt(tt(tt({}, $), {}, {
        updateId: 0
      }, x(tt(tt({
        props: b
      }, $), {}, {
        updateId: 0
      }), A)), {}, {
        prevDataKey: T,
        prevData: M,
        prevWidth: w,
        prevHeight: E,
        prevLayout: D,
        prevStackOffset: R,
        prevMargin: z,
        prevChildren: C
      });
    }
    if (T !== A.prevDataKey || M !== A.prevData || w !== A.prevWidth || E !== A.prevHeight || D !== A.prevLayout || R !== A.prevStackOffset || !ru(z, A.prevMargin)) {
      var K = XM(b), Z = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: A.chartX,
        chartY: A.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: A.isTooltipActive
      }, V = tt(tt({}, YM(A, M, D)), {}, {
        updateId: A.updateId + 1
      }), N = tt(tt(tt({}, K), Z), V);
      return tt(tt(tt({}, N), x(tt({
        props: b
      }, N), A)), {}, {
        prevDataKey: T,
        prevData: M,
        prevWidth: w,
        prevHeight: E,
        prevLayout: D,
        prevStackOffset: R,
        prevMargin: z,
        prevChildren: C
      });
    }
    if (!Cg(C, A.prevChildren)) {
      var I, W, ut, lt, P = hn(C, Su), U = P && (I = (W = P.props) === null || W === void 0 ? void 0 : W.startIndex) !== null && I !== void 0 ? I : F, et = P && (ut = (lt = P.props) === null || lt === void 0 ? void 0 : lt.endIndex) !== null && ut !== void 0 ? ut : k, ft = U !== F || et !== k, vt = !Mt(M), mt = vt && !ft ? A.updateId : A.updateId + 1;
      return tt(tt({
        updateId: mt
      }, x(tt(tt({
        props: b
      }, A), {}, {
        updateId: mt,
        dataStartIndex: U,
        dataEndIndex: et
      }), A)), {}, {
        prevChildren: C,
        dataStartIndex: U,
        dataEndIndex: et
      });
    }
    return null;
  }), bt(O, "renderActiveDot", function(b, A, T) {
    var M;
    return /* @__PURE__ */ at.isValidElement(b) ? M = /* @__PURE__ */ at.cloneElement(b, A) : At(b) ? M = b(A) : M = /* @__PURE__ */ B.createElement(Ks, A), /* @__PURE__ */ B.createElement(Jt, {
      className: "recharts-active-dot",
      key: T
    }, M);
  });
  var S = /* @__PURE__ */ at.forwardRef(function(A, T) {
    return /* @__PURE__ */ B.createElement(O, nu({}, A, {
      ref: T
    }));
  });
  return S.displayName = O.displayName, S;
}, oY = e1({
  chartName: "LineChart",
  GraphicalChild: Ja,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: Y0
}), lY = e1({
  chartName: "BarChart",
  GraphicalChild: fi,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: Y0
}), VM = e1({
  chartName: "AreaChart",
  GraphicalChild: tr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: Y0
});
const Af = [
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
], ha = { fill: "#8b9bb4", fontSize: 12 }, wf = {
  backgroundColor: "#17202f",
  border: "1px solid #223047",
  borderRadius: 8,
  color: "#e6edf7",
  fontSize: 13
};
function cY({
  rows: t,
  accounts: e,
  mode: n,
  range: r,
  masked: u = !1
}) {
  const l = r === "1d" || r === "1w", c = (S) => Fi(S, l), s = (S, b) => b !== 0 ? (S - b) / Math.abs(b) : null, h = (S) => u ? Tg(S) : Ya(S), d = (S) => u ? Tg(S) : Ya(S, !0);
  if (n === "flow") {
    const S = JR(t, e, r), b = (A) => u ? A.toFixed(2) : LR(A);
    return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(lY, { data: S, children: [
      /* @__PURE__ */ it.jsx(Zo, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: (A) => Fi(A), tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: (A) => u ? A.toFixed(1) : Ya(A), tick: ha, width: 90 }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: wf,
          labelFormatter: (A) => Fi(A),
          formatter: (A) => [b(A), "Net flow"],
          cursor: { fill: "#223047", fillOpacity: 0.4 }
        }
      ),
      /* @__PURE__ */ it.jsx(fi, { dataKey: "flow", radius: [3, 3, 0, 0], children: S.map((A, T) => /* @__PURE__ */ it.jsx(g0, { fill: A.flow >= 0 ? "#34d399" : "#f87171", fillOpacity: 0.8 }, T)) })
    ] }) });
  }
  if (n === "total") {
    const S = Fn(t[0], e), b = t.map((A) => {
      const T = Fn(A, e);
      return { ts: A.ts, total: u ? s(T, S) : T };
    });
    return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(VM, { data: b, children: [
      /* @__PURE__ */ it.jsx("defs", { children: /* @__PURE__ */ it.jsxs("linearGradient", { id: "nw", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ it.jsx("stop", { offset: "0%", stopColor: "#60a5fa", stopOpacity: 0.35 }),
        /* @__PURE__ */ it.jsx("stop", { offset: "100%", stopColor: "#60a5fa", stopOpacity: 0 })
      ] }) }),
      /* @__PURE__ */ it.jsx(Zo, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: c, tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: h, tick: ha, width: 90, domain: ["auto", "auto"] }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: wf,
          labelFormatter: (A) => Fi(A, !0),
          formatter: (A) => [d(A), "Net worth"]
        }
      ),
      /* @__PURE__ */ it.jsx(tr, { type: "monotone", dataKey: "total", stroke: "#60a5fa", strokeWidth: 2, fill: "url(#nw)" })
    ] }) });
  }
  if (n === "category") {
    const S = (T) => T.category === "retirement", b = {
      retirement: Fn(t[0], e, S),
      other: Fn(t[0], e, (T) => !S(T)),
      debt: Sv(t[0], e)
    }, A = t.map((T) => {
      const M = Fn(T, e, S), C = Fn(T, e, (E) => !S(E)), w = Sv(T, e);
      return u ? {
        ts: T.ts,
        retirement: s(M, b.retirement),
        other: s(C, b.other),
        debt: s(w, b.debt)
      } : { ts: T.ts, retirement: M, other: C, debt: w };
    });
    return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(oY, { data: A, children: [
      /* @__PURE__ */ it.jsx(Zo, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: c, tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: h, tick: ha, width: 90, domain: ["auto", "auto"] }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: wf,
          labelFormatter: (T) => Fi(T, !0),
          formatter: (T, M) => [d(T), M]
        }
      ),
      /* @__PURE__ */ it.jsx(Ja, { type: "monotone", dataKey: "retirement", stroke: "#34d399", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ it.jsx(Ja, { type: "monotone", dataKey: "other", stroke: "#60a5fa", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ it.jsx(Ja, { type: "monotone", dataKey: "debt", stroke: "#f87171", strokeWidth: 2, dot: !1 })
    ] }) });
  }
  const y = (S) => u ? S.toFixed(1) : Ya(S), p = (S) => u ? S.toFixed(2) : Ya(S, !0), g = e.filter((S) => {
    var A;
    return (((A = t[t.length - 1]) == null ? void 0 : A.values[S.id]) ?? 0) >= 0;
  }), x = e.length > g.length, O = t.map((S) => {
    const b = { ts: S.ts };
    for (const A of g) b[`a${A.id}`] = S.values[A.id] ?? 0;
    return x && (b.debt = Sv(S, e)), b;
  });
  return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(VM, { data: O, children: [
    /* @__PURE__ */ it.jsx(Zo, { stroke: "#223047", strokeDasharray: "3 3" }),
    /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: c, tick: ha, minTickGap: 40 }),
    /* @__PURE__ */ it.jsx(jr, { tickFormatter: y, tick: ha, width: 90, domain: ["auto", "auto"] }),
    /* @__PURE__ */ it.jsx(
      dn,
      {
        contentStyle: wf,
        labelFormatter: (S) => Fi(S, !0),
        formatter: (S, b) => {
          const A = g.find((T) => `a${T.id}` === b);
          return [p(S), A ? `${A.org_name || A.org_domain} · ${A.nickname || A.name}` : "Debt"];
        }
      }
    ),
    g.map((S, b) => /* @__PURE__ */ it.jsx(
      tr,
      {
        type: "monotone",
        dataKey: `a${S.id}`,
        stackId: "assets",
        stroke: Af[b % Af.length],
        fill: Af[b % Af.length],
        fillOpacity: 0.35
      },
      S.id
    )),
    x && /* @__PURE__ */ it.jsx(tr, { type: "monotone", dataKey: "debt", stroke: "#f87171", fill: "#f87171", fillOpacity: 0.25 })
  ] }) });
}
function hP({
  hass: t,
  config: e
}) {
  const n = lu.find((b) => b.key === (e.view ?? "all")) ?? lu[2], [r, u] = at.useState(e.range ?? "6m"), [l, c] = at.useState(
    e.mode && n.modes.includes(e.mode) ? e.mode : n.defaultMode
  ), { overview: s, series: h, masked: d, error: y, refresh: p } = Kb(t, e.entry, r), g = Fb(s), x = at.useMemo(() => g.filter(n.pick), [g, n]), O = at.useMemo(() => {
    if (!h) return [];
    const b = new Set(x.map((A) => A.id));
    return tj(h.filter((A) => b.has(A.account_id)));
  }, [h, x]), S = e.show_controls !== !1;
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? n.label }),
      S && /* @__PURE__ */ it.jsxs("span", { className: "controls", children: [
        n.modes.length > 1 && /* @__PURE__ */ it.jsx(Eg, { options: n.modes, value: l, onChange: c }),
        /* @__PURE__ */ it.jsx(Eg, { options: ej, value: r, onChange: u })
      ] }),
      s && /* @__PURE__ */ it.jsx(
        Vb,
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
    !y && s && h && O.length > 0 && /* @__PURE__ */ it.jsx(cY, { rows: O, accounts: x, mode: l, range: r, masked: d })
  ] });
}
var Og = { exports: {} }, Xo = {}, Ag = { exports: {} }, wg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FM;
function fY() {
  return FM || (FM = 1, (function(t) {
    function e(N, I) {
      var W = N.length;
      N.push(I);
      t: for (; 0 < W; ) {
        var ut = W - 1 >>> 1, lt = N[ut];
        if (0 < u(lt, I))
          N[ut] = I, N[W] = lt, W = ut;
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
        t: for (var ut = 0, lt = N.length, P = lt >>> 1; ut < P; ) {
          var U = 2 * (ut + 1) - 1, et = N[U], ft = U + 1, vt = N[ft];
          if (0 > u(et, W))
            ft < lt && 0 > u(vt, et) ? (N[ut] = vt, N[ft] = W, ut = ft) : (N[ut] = et, N[U] = W, ut = U);
          else if (ft < lt && 0 > u(vt, W))
            N[ut] = vt, N[ft] = W, ut = ft;
          else break t;
        }
      }
      return I;
    }
    function u(N, I) {
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
    var h = [], d = [], y = 1, p = null, g = 3, x = !1, O = !1, S = !1, b = !1, A = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function C(N) {
      for (var I = n(d); I !== null; ) {
        if (I.callback === null) r(d);
        else if (I.startTime <= N)
          r(d), I.sortIndex = I.expirationTime, e(h, I);
        else break;
        I = n(d);
      }
    }
    function w(N) {
      if (S = !1, C(N), !O)
        if (n(h) !== null)
          O = !0, E || (E = !0, $());
        else {
          var I = n(d);
          I !== null && V(w, I.startTime - N);
        }
    }
    var E = !1, D = -1, R = 5, z = -1;
    function F() {
      return b ? !0 : !(t.unstable_now() - z < R);
    }
    function k() {
      if (b = !1, E) {
        var N = t.unstable_now();
        z = N;
        var I = !0;
        try {
          t: {
            O = !1, S && (S = !1, T(D), D = -1), x = !0;
            var W = g;
            try {
              e: {
                for (C(N), p = n(h); p !== null && !(p.expirationTime > N && F()); ) {
                  var ut = p.callback;
                  if (typeof ut == "function") {
                    p.callback = null, g = p.priorityLevel;
                    var lt = ut(
                      p.expirationTime <= N
                    );
                    if (N = t.unstable_now(), typeof lt == "function") {
                      p.callback = lt, C(N), I = !0;
                      break e;
                    }
                    p === n(h) && r(h), C(N);
                  } else r(h);
                  p = n(h);
                }
                if (p !== null) I = !0;
                else {
                  var P = n(d);
                  P !== null && V(
                    w,
                    P.startTime - N
                  ), I = !1;
                }
              }
              break t;
            } finally {
              p = null, g = W, x = !1;
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
        A(k, 0);
      };
    function V(N, I) {
      D = A(function() {
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
      b = !0;
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
      var ut = t.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ut + W : ut) : W = ut, N) {
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
      }, W > ut ? (N.sortIndex = W, e(d, N), n(h) === null && N === n(d) && (S ? (T(D), D = -1) : S = !0, V(w, W - ut))) : (N.sortIndex = lt, e(h, N), O || x || (O = !0, E || (E = !0, $()))), N;
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
  })(wg)), wg;
}
var ZM;
function sY() {
  return ZM || (ZM = 1, Ag.exports = fY()), Ag.exports;
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
var QM;
function hY() {
  if (QM) return Xo;
  QM = 1;
  var t = sY(), e = Xb(), n = eH();
  function r(a) {
    var i = "https://react.dev/errors/" + a;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++)
        i += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + a + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
  }
  function l(a) {
    var i = a, o = a;
    if (a.alternate) for (; i.return; ) i = i.return;
    else {
      a = i;
      do
        i = a, (i.flags & 4098) !== 0 && (o = i.return), a = i.return;
      while (a);
    }
    return i.tag === 3 ? o : null;
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
    for (var o = a, f = i; ; ) {
      var v = o.return;
      if (v === null) break;
      var m = v.alternate;
      if (m === null) {
        if (f = v.return, f !== null) {
          o = f;
          continue;
        }
        break;
      }
      if (v.child === m.child) {
        for (m = v.child; m; ) {
          if (m === o) return h(v), a;
          if (m === f) return h(v), i;
          m = m.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== f.return) o = v, f = m;
      else {
        for (var _ = !1, j = v.child; j; ) {
          if (j === o) {
            _ = !0, o = v, f = m;
            break;
          }
          if (j === f) {
            _ = !0, f = v, o = m;
            break;
          }
          j = j.sibling;
        }
        if (!_) {
          for (j = m.child; j; ) {
            if (j === o) {
              _ = !0, o = m, f = v;
              break;
            }
            if (j === f) {
              _ = !0, f = m, o = v;
              break;
            }
            j = j.sibling;
          }
          if (!_) throw Error(r(189));
        }
      }
      if (o.alternate !== f) throw Error(r(190));
    }
    if (o.tag !== 3) throw Error(r(188));
    return o.stateNode.current === o ? a : i;
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
  var p = Object.assign, g = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), M = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), F = Symbol.for("react.memo_cache_sentinel"), k = Symbol.iterator;
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
      case A:
        return "Profiler";
      case b:
        return "StrictMode";
      case w:
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
        case T:
          return (a._context.displayName || "Context") + ".Consumer";
        case C:
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
  }, ut = [], lt = -1;
  function P(a) {
    return { current: a };
  }
  function U(a) {
    0 > lt || (a.current = ut[lt], ut[lt] = null, lt--);
  }
  function et(a, i) {
    lt++, ut[lt] = a.current, a.current = i;
  }
  var ft = P(null), vt = P(null), mt = P(null), jt = P(null);
  function kt(a, i) {
    switch (et(mt, i), et(vt, a), et(ft, null), i.nodeType) {
      case 9:
      case 11:
        a = (a = i.documentElement) && (a = a.namespaceURI) ? E_(a) : 0;
        break;
      default:
        if (a = i.tagName, i = i.namespaceURI)
          i = E_(i), a = M_(i, a);
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
    var i = ft.current, o = M_(i, a.type);
    i !== o && (et(vt, a), et(ft, o));
  }
  function St(a) {
    vt.current === a && (U(ft), U(vt)), jt.current === a && (U(jt), Po._currentValue = W);
  }
  var ot, te;
  function wt(a) {
    if (ot === void 0)
      try {
        throw Error();
      } catch (o) {
        var i = o.stack.trim().match(/\n( *(at )?)/);
        ot = i && i[1] || "", te = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ot + a + te;
  }
  var ue = !1;
  function oe(a, i) {
    if (!a || ue) return "";
    ue = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var f = {
        DetermineComponentFrameRoot: function() {
          try {
            if (i) {
              var rt = function() {
                throw Error();
              };
              if (Object.defineProperty(rt.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(rt, []);
                } catch (Q) {
                  var X = Q;
                }
                Reflect.construct(a, [], rt);
              } else {
                try {
                  rt.call();
                } catch (Q) {
                  X = Q;
                }
                a.call(rt.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                X = Q;
              }
              (rt = a()) && typeof rt.catch == "function" && rt.catch(function() {
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
      var m = f.DetermineComponentFrameRoot(), _ = m[0], j = m[1];
      if (_ && j) {
        var q = _.split(`
`), Y = j.split(`
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
      ue = !1, Error.prepareStackTrace = o;
    }
    return (o = a ? a.displayName || a.name : "") ? wt(o) : "";
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
        return oe(a.type, !1);
      case 11:
        return oe(a.type.render, !1);
      case 1:
        return oe(a.type, !0);
      case 31:
        return wt("Activity");
      default:
        return "";
    }
  }
  function Nn(a) {
    try {
      var i = "", o = null;
      do
        i += ze(a, o), o = a, a = a.return;
      while (a);
      return i;
    } catch (f) {
      return `
Error generating stack: ` + f.message + `
` + f.stack;
    }
  }
  var Gn = Object.prototype.hasOwnProperty, kr = t.unstable_scheduleCallback, Rn = t.unstable_cancelCallback, ar = t.unstable_shouldYield, Hu = t.unstable_requestPaint, $e = t.unstable_now, Gl = t.unstable_getCurrentPriorityLevel, i1 = t.unstable_ImmediatePriority, u1 = t.unstable_UserBlockingPriority, Yl = t.unstable_NormalPriority, dP = t.unstable_LowPriority, o1 = t.unstable_IdlePriority, vP = t.log, pP = t.unstable_setDisableYieldValue, Iu = null, tn = null;
  function Ur(a) {
    if (typeof vP == "function" && pP(a), tn && typeof tn.setStrictMode == "function")
      try {
        tn.setStrictMode(Iu, a);
      } catch {
      }
  }
  var en = Math.clz32 ? Math.clz32 : gP, yP = Math.log, mP = Math.LN2;
  function gP(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (yP(a) / mP | 0) | 0;
  }
  var Xl = 256, Kl = 262144, Vl = 4194304;
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
  function Fl(a, i, o) {
    var f = a.pendingLanes;
    if (f === 0) return 0;
    var v = 0, m = a.suspendedLanes, _ = a.pingedLanes;
    a = a.warmLanes;
    var j = f & 134217727;
    return j !== 0 ? (f = j & ~m, f !== 0 ? v = Aa(f) : (_ &= j, _ !== 0 ? v = Aa(_) : o || (o = j & ~a, o !== 0 && (v = Aa(o))))) : (j = f & ~m, j !== 0 ? v = Aa(j) : _ !== 0 ? v = Aa(_) : o || (o = f & ~a, o !== 0 && (v = Aa(o)))), v === 0 ? 0 : i !== 0 && i !== v && (i & m) === 0 && (m = v & -v, o = i & -i, m >= o || m === 32 && (o & 4194048) !== 0) ? i : v;
  }
  function Gu(a, i) {
    return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & i) === 0;
  }
  function bP(a, i) {
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
  function l1() {
    var a = Vl;
    return Vl <<= 1, (Vl & 62914560) === 0 && (Vl = 4194304), a;
  }
  function oh(a) {
    for (var i = [], o = 0; 31 > o; o++) i.push(a);
    return i;
  }
  function Yu(a, i) {
    a.pendingLanes |= i, i !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
  }
  function xP(a, i, o, f, v, m) {
    var _ = a.pendingLanes;
    a.pendingLanes = o, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= o, a.entangledLanes &= o, a.errorRecoveryDisabledLanes &= o, a.shellSuspendCounter = 0;
    var j = a.entanglements, q = a.expirationTimes, Y = a.hiddenUpdates;
    for (o = _ & ~o; 0 < o; ) {
      var J = 31 - en(o), rt = 1 << J;
      j[J] = 0, q[J] = -1;
      var X = Y[J];
      if (X !== null)
        for (Y[J] = null, J = 0; J < X.length; J++) {
          var Q = X[J];
          Q !== null && (Q.lane &= -536870913);
        }
      o &= ~rt;
    }
    f !== 0 && c1(a, f, 0), m !== 0 && v === 0 && a.tag !== 0 && (a.suspendedLanes |= m & ~(_ & ~i));
  }
  function c1(a, i, o) {
    a.pendingLanes |= i, a.suspendedLanes &= ~i;
    var f = 31 - en(i);
    a.entangledLanes |= i, a.entanglements[f] = a.entanglements[f] | 1073741824 | o & 261930;
  }
  function f1(a, i) {
    var o = a.entangledLanes |= i;
    for (a = a.entanglements; o; ) {
      var f = 31 - en(o), v = 1 << f;
      v & i | a[f] & i && (a[f] |= i), o &= ~v;
    }
  }
  function s1(a, i) {
    var o = i & -i;
    return o = (o & 42) !== 0 ? 1 : lh(o), (o & (a.suspendedLanes | i)) !== 0 ? 0 : o;
  }
  function lh(a) {
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
  function ch(a) {
    return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function h1() {
    var a = I.p;
    return a !== 0 ? a : (a = window.event, a === void 0 ? 32 : Q_(a.type));
  }
  function d1(a, i) {
    var o = I.p;
    try {
      return I.p = a, i();
    } finally {
      I.p = o;
    }
  }
  var Hr = Math.random().toString(36).slice(2), Me = "__reactFiber$" + Hr, Ye = "__reactProps$" + Hr, si = "__reactContainer$" + Hr, fh = "__reactEvents$" + Hr, SP = "__reactListeners$" + Hr, _P = "__reactHandles$" + Hr, v1 = "__reactResources$" + Hr, Xu = "__reactMarker$" + Hr;
  function sh(a) {
    delete a[Me], delete a[Ye], delete a[fh], delete a[SP], delete a[_P];
  }
  function hi(a) {
    var i = a[Me];
    if (i) return i;
    for (var o = a.parentNode; o; ) {
      if (i = o[si] || o[Me]) {
        if (o = i.alternate, i.child !== null || o !== null && o.child !== null)
          for (a = q_(a); a !== null; ) {
            if (o = a[Me]) return o;
            a = q_(a);
          }
        return i;
      }
      a = o, o = a.parentNode;
    }
    return null;
  }
  function di(a) {
    if (a = a[Me] || a[si]) {
      var i = a.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3)
        return a;
    }
    return null;
  }
  function Ku(a) {
    var i = a.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return a.stateNode;
    throw Error(r(33));
  }
  function vi(a) {
    var i = a[v1];
    return i || (i = a[v1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function Ae(a) {
    a[Xu] = !0;
  }
  var p1 = /* @__PURE__ */ new Set(), y1 = {};
  function wa(a, i) {
    pi(a, i), pi(a + "Capture", i);
  }
  function pi(a, i) {
    for (y1[a] = i, a = 0; a < i.length; a++)
      p1.add(i[a]);
  }
  var OP = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), m1 = {}, g1 = {};
  function AP(a) {
    return Gn.call(g1, a) ? !0 : Gn.call(m1, a) ? !1 : OP.test(a) ? g1[a] = !0 : (m1[a] = !0, !1);
  }
  function Zl(a, i, o) {
    if (AP(i))
      if (o === null) a.removeAttribute(i);
      else {
        switch (typeof o) {
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
        a.setAttribute(i, "" + o);
      }
  }
  function Ql(a, i, o) {
    if (o === null) a.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(i);
          return;
      }
      a.setAttribute(i, "" + o);
    }
  }
  function ir(a, i, o, f) {
    if (f === null) a.removeAttribute(o);
    else {
      switch (typeof f) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(o);
          return;
      }
      a.setAttributeNS(i, o, "" + f);
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
  function b1(a) {
    var i = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function wP(a, i, o) {
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
          o = "" + _, m.call(this, _);
        }
      }), Object.defineProperty(a, i, {
        enumerable: f.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(_) {
          o = "" + _;
        },
        stopTracking: function() {
          a._valueTracker = null, delete a[i];
        }
      };
    }
  }
  function hh(a) {
    if (!a._valueTracker) {
      var i = b1(a) ? "checked" : "value";
      a._valueTracker = wP(
        a,
        i,
        "" + a[i]
      );
    }
  }
  function x1(a) {
    if (!a) return !1;
    var i = a._valueTracker;
    if (!i) return !0;
    var o = i.getValue(), f = "";
    return a && (f = b1(a) ? a.checked ? "true" : "false" : a.value), a = f, a !== o ? (i.setValue(a), !0) : !1;
  }
  function Wl(a) {
    if (a = a || (typeof document < "u" ? document : void 0), typeof a > "u") return null;
    try {
      return a.activeElement || a.body;
    } catch {
      return a.body;
    }
  }
  var TP = /[\n"\\]/g;
  function yn(a) {
    return a.replace(
      TP,
      function(i) {
        return "\\" + i.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function dh(a, i, o, f, v, m, _, j) {
    a.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? a.type = _ : a.removeAttribute("type"), i != null ? _ === "number" ? (i === 0 && a.value === "" || a.value != i) && (a.value = "" + pn(i)) : a.value !== "" + pn(i) && (a.value = "" + pn(i)) : _ !== "submit" && _ !== "reset" || a.removeAttribute("value"), i != null ? vh(a, _, pn(i)) : o != null ? vh(a, _, pn(o)) : f != null && a.removeAttribute("value"), v == null && m != null && (a.defaultChecked = !!m), v != null && (a.checked = v && typeof v != "function" && typeof v != "symbol"), j != null && typeof j != "function" && typeof j != "symbol" && typeof j != "boolean" ? a.name = "" + pn(j) : a.removeAttribute("name");
  }
  function S1(a, i, o, f, v, m, _, j) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (a.type = m), i != null || o != null) {
      if (!(m !== "submit" && m !== "reset" || i != null)) {
        hh(a);
        return;
      }
      o = o != null ? "" + pn(o) : "", i = i != null ? "" + pn(i) : o, j || i === a.value || (a.value = i), a.defaultValue = i;
    }
    f = f ?? v, f = typeof f != "function" && typeof f != "symbol" && !!f, a.checked = j ? a.checked : !!f, a.defaultChecked = !!f, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (a.name = _), hh(a);
  }
  function vh(a, i, o) {
    i === "number" && Wl(a.ownerDocument) === a || a.defaultValue === "" + o || (a.defaultValue = "" + o);
  }
  function yi(a, i, o, f) {
    if (a = a.options, i) {
      i = {};
      for (var v = 0; v < o.length; v++)
        i["$" + o[v]] = !0;
      for (o = 0; o < a.length; o++)
        v = i.hasOwnProperty("$" + a[o].value), a[o].selected !== v && (a[o].selected = v), v && f && (a[o].defaultSelected = !0);
    } else {
      for (o = "" + pn(o), i = null, v = 0; v < a.length; v++) {
        if (a[v].value === o) {
          a[v].selected = !0, f && (a[v].defaultSelected = !0);
          return;
        }
        i !== null || a[v].disabled || (i = a[v]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function _1(a, i, o) {
    if (i != null && (i = "" + pn(i), i !== a.value && (a.value = i), o == null)) {
      a.defaultValue !== i && (a.defaultValue = i);
      return;
    }
    a.defaultValue = o != null ? "" + pn(o) : "";
  }
  function O1(a, i, o, f) {
    if (i == null) {
      if (f != null) {
        if (o != null) throw Error(r(92));
        if (V(f)) {
          if (1 < f.length) throw Error(r(93));
          f = f[0];
        }
        o = f;
      }
      o == null && (o = ""), i = o;
    }
    o = pn(i), a.defaultValue = o, f = a.textContent, f === o && f !== "" && f !== null && (a.value = f), hh(a);
  }
  function mi(a, i) {
    if (i) {
      var o = a.firstChild;
      if (o && o === a.lastChild && o.nodeType === 3) {
        o.nodeValue = i;
        return;
      }
    }
    a.textContent = i;
  }
  var EP = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function A1(a, i, o) {
    var f = i.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? f ? a.setProperty(i, "") : i === "float" ? a.cssFloat = "" : a[i] = "" : f ? a.setProperty(i, o) : typeof o != "number" || o === 0 || EP.has(i) ? i === "float" ? a.cssFloat = o : a[i] = ("" + o).trim() : a[i] = o + "px";
  }
  function w1(a, i, o) {
    if (i != null && typeof i != "object")
      throw Error(r(62));
    if (a = a.style, o != null) {
      for (var f in o)
        !o.hasOwnProperty(f) || i != null && i.hasOwnProperty(f) || (f.indexOf("--") === 0 ? a.setProperty(f, "") : f === "float" ? a.cssFloat = "" : a[f] = "");
      for (var v in i)
        f = i[v], i.hasOwnProperty(v) && o[v] !== f && A1(a, v, f);
    } else
      for (var m in i)
        i.hasOwnProperty(m) && A1(a, m, i[m]);
  }
  function ph(a) {
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
  var MP = /* @__PURE__ */ new Map([
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
  ]), jP = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jl(a) {
    return jP.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
  }
  function ur() {
  }
  var yh = null;
  function mh(a) {
    return a = a.target || a.srcElement || window, a.correspondingUseElement && (a = a.correspondingUseElement), a.nodeType === 3 ? a.parentNode : a;
  }
  var gi = null, bi = null;
  function T1(a) {
    var i = di(a);
    if (i && (a = i.stateNode)) {
      var o = a[Ye] || null;
      t: switch (a = i.stateNode, i.type) {
        case "input":
          if (dh(
            a,
            o.value,
            o.defaultValue,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name
          ), i = o.name, o.type === "radio" && i != null) {
            for (o = a; o.parentNode; ) o = o.parentNode;
            for (o = o.querySelectorAll(
              'input[name="' + yn(
                "" + i
              ) + '"][type="radio"]'
            ), i = 0; i < o.length; i++) {
              var f = o[i];
              if (f !== a && f.form === a.form) {
                var v = f[Ye] || null;
                if (!v) throw Error(r(90));
                dh(
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
            for (i = 0; i < o.length; i++)
              f = o[i], f.form === a.form && x1(f);
          }
          break t;
        case "textarea":
          _1(a, o.value, o.defaultValue);
          break t;
        case "select":
          i = o.value, i != null && yi(a, !!o.multiple, i, !1);
      }
    }
  }
  var gh = !1;
  function E1(a, i, o) {
    if (gh) return a(i, o);
    gh = !0;
    try {
      var f = a(i);
      return f;
    } finally {
      if (gh = !1, (gi !== null || bi !== null) && (kc(), gi && (i = gi, a = bi, bi = gi = null, T1(i), a)))
        for (i = 0; i < a.length; i++) T1(a[i]);
    }
  }
  function Vu(a, i) {
    var o = a.stateNode;
    if (o === null) return null;
    var f = o[Ye] || null;
    if (f === null) return null;
    o = f[i];
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
    if (o && typeof o != "function")
      throw Error(
        r(231, i, typeof o)
      );
    return o;
  }
  var or = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bh = !1;
  if (or)
    try {
      var Fu = {};
      Object.defineProperty(Fu, "passive", {
        get: function() {
          bh = !0;
        }
      }), window.addEventListener("test", Fu, Fu), window.removeEventListener("test", Fu, Fu);
    } catch {
      bh = !1;
    }
  var Ir = null, xh = null, tc = null;
  function M1() {
    if (tc) return tc;
    var a, i = xh, o = i.length, f, v = "value" in Ir ? Ir.value : Ir.textContent, m = v.length;
    for (a = 0; a < o && i[a] === v[a]; a++) ;
    var _ = o - a;
    for (f = 1; f <= _ && i[o - f] === v[m - f]; f++) ;
    return tc = v.slice(a, 1 < f ? 1 - f : void 0);
  }
  function ec(a) {
    var i = a.keyCode;
    return "charCode" in a ? (a = a.charCode, a === 0 && i === 13 && (a = 13)) : a = i, a === 10 && (a = 13), 32 <= a || a === 13 ? a : 0;
  }
  function nc() {
    return !0;
  }
  function j1() {
    return !1;
  }
  function Xe(a) {
    function i(o, f, v, m, _) {
      this._reactName = o, this._targetInst = v, this.type = f, this.nativeEvent = m, this.target = _, this.currentTarget = null;
      for (var j in a)
        a.hasOwnProperty(j) && (o = a[j], this[j] = o ? o(m) : m[j]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? nc : j1, this.isPropagationStopped = j1, this;
    }
    return p(i.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var o = this.nativeEvent;
        o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = nc);
      },
      stopPropagation: function() {
        var o = this.nativeEvent;
        o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = nc);
      },
      persist: function() {
      },
      isPersistent: nc
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
  }, rc = Xe(Ta), Zu = p({}, Ta, { view: 0, detail: 0 }), CP = Xe(Zu), Sh, _h, Qu, ac = p({}, Zu, {
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
    getModifierState: Ah,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
      return "movementX" in a ? a.movementX : (a !== Qu && (Qu && a.type === "mousemove" ? (Sh = a.screenX - Qu.screenX, _h = a.screenY - Qu.screenY) : _h = Sh = 0, Qu = a), Sh);
    },
    movementY: function(a) {
      return "movementY" in a ? a.movementY : _h;
    }
  }), C1 = Xe(ac), DP = p({}, ac, { dataTransfer: 0 }), PP = Xe(DP), NP = p({}, Zu, { relatedTarget: 0 }), Oh = Xe(NP), RP = p({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qP = Xe(RP), zP = p({}, Ta, {
    clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }), $P = Xe(zP), BP = p({}, Ta, { data: 0 }), D1 = Xe(BP), LP = {
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
  }, kP = {
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
  }, UP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function HP(a) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(a) : (a = UP[a]) ? !!i[a] : !1;
  }
  function Ah() {
    return HP;
  }
  var IP = p({}, Zu, {
    key: function(a) {
      if (a.key) {
        var i = LP[a.key] || a.key;
        if (i !== "Unidentified") return i;
      }
      return a.type === "keypress" ? (a = ec(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? kP[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ah,
    charCode: function(a) {
      return a.type === "keypress" ? ec(a) : 0;
    },
    keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    },
    which: function(a) {
      return a.type === "keypress" ? ec(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }
  }), GP = Xe(IP), YP = p({}, ac, {
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
  }), P1 = Xe(YP), XP = p({}, Zu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ah
  }), KP = Xe(XP), VP = p({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), FP = Xe(VP), ZP = p({}, ac, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), QP = Xe(ZP), WP = p({}, Ta, {
    newState: 0,
    oldState: 0
  }), JP = Xe(WP), tN = [9, 13, 27, 32], wh = or && "CompositionEvent" in window, Wu = null;
  or && "documentMode" in document && (Wu = document.documentMode);
  var eN = or && "TextEvent" in window && !Wu, N1 = or && (!wh || Wu && 8 < Wu && 11 >= Wu), R1 = " ", q1 = !1;
  function z1(a, i) {
    switch (a) {
      case "keyup":
        return tN.indexOf(i.keyCode) !== -1;
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
  function $1(a) {
    return a = a.detail, typeof a == "object" && "data" in a ? a.data : null;
  }
  var xi = !1;
  function nN(a, i) {
    switch (a) {
      case "compositionend":
        return $1(i);
      case "keypress":
        return i.which !== 32 ? null : (q1 = !0, R1);
      case "textInput":
        return a = i.data, a === R1 && q1 ? null : a;
      default:
        return null;
    }
  }
  function rN(a, i) {
    if (xi)
      return a === "compositionend" || !wh && z1(a, i) ? (a = M1(), tc = xh = Ir = null, xi = !1, a) : null;
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
        return N1 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var aN = {
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
  function B1(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i === "input" ? !!aN[a.type] : i === "textarea";
  }
  function L1(a, i, o, f) {
    gi ? bi ? bi.push(f) : bi = [f] : gi = f, i = Kc(i, "onChange"), 0 < i.length && (o = new rc(
      "onChange",
      "change",
      null,
      o,
      f
    ), a.push({ event: o, listeners: i }));
  }
  var Ju = null, to = null;
  function iN(a) {
    S_(a, 0);
  }
  function ic(a) {
    var i = Ku(a);
    if (x1(i)) return a;
  }
  function k1(a, i) {
    if (a === "change") return i;
  }
  var U1 = !1;
  if (or) {
    var Th;
    if (or) {
      var Eh = "oninput" in document;
      if (!Eh) {
        var H1 = document.createElement("div");
        H1.setAttribute("oninput", "return;"), Eh = typeof H1.oninput == "function";
      }
      Th = Eh;
    } else Th = !1;
    U1 = Th && (!document.documentMode || 9 < document.documentMode);
  }
  function I1() {
    Ju && (Ju.detachEvent("onpropertychange", G1), to = Ju = null);
  }
  function G1(a) {
    if (a.propertyName === "value" && ic(to)) {
      var i = [];
      L1(
        i,
        to,
        a,
        mh(a)
      ), E1(iN, i);
    }
  }
  function uN(a, i, o) {
    a === "focusin" ? (I1(), Ju = i, to = o, Ju.attachEvent("onpropertychange", G1)) : a === "focusout" && I1();
  }
  function oN(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return ic(to);
  }
  function lN(a, i) {
    if (a === "click") return ic(i);
  }
  function cN(a, i) {
    if (a === "input" || a === "change")
      return ic(i);
  }
  function fN(a, i) {
    return a === i && (a !== 0 || 1 / a === 1 / i) || a !== a && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : fN;
  function eo(a, i) {
    if (nn(a, i)) return !0;
    if (typeof a != "object" || a === null || typeof i != "object" || i === null)
      return !1;
    var o = Object.keys(a), f = Object.keys(i);
    if (o.length !== f.length) return !1;
    for (f = 0; f < o.length; f++) {
      var v = o[f];
      if (!Gn.call(i, v) || !nn(a[v], i[v]))
        return !1;
    }
    return !0;
  }
  function Y1(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function X1(a, i) {
    var o = Y1(a);
    a = 0;
    for (var f; o; ) {
      if (o.nodeType === 3) {
        if (f = a + o.textContent.length, a <= i && f >= i)
          return { node: o, offset: i - a };
        a = f;
      }
      t: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break t;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Y1(o);
    }
  }
  function K1(a, i) {
    return a && i ? a === i ? !0 : a && a.nodeType === 3 ? !1 : i && i.nodeType === 3 ? K1(a, i.parentNode) : "contains" in a ? a.contains(i) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function V1(a) {
    a = a != null && a.ownerDocument != null && a.ownerDocument.defaultView != null ? a.ownerDocument.defaultView : window;
    for (var i = Wl(a.document); i instanceof a.HTMLIFrameElement; ) {
      try {
        var o = typeof i.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) a = i.contentWindow;
      else break;
      i = Wl(a.document);
    }
    return i;
  }
  function Mh(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i && (i === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || i === "textarea" || a.contentEditable === "true");
  }
  var sN = or && "documentMode" in document && 11 >= document.documentMode, Si = null, jh = null, no = null, Ch = !1;
  function F1(a, i, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Ch || Si == null || Si !== Wl(f) || (f = Si, "selectionStart" in f && Mh(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = {
      anchorNode: f.anchorNode,
      anchorOffset: f.anchorOffset,
      focusNode: f.focusNode,
      focusOffset: f.focusOffset
    }), no && eo(no, f) || (no = f, f = Kc(jh, "onSelect"), 0 < f.length && (i = new rc(
      "onSelect",
      "select",
      null,
      i,
      o
    ), a.push({ event: i, listeners: f }), i.target = Si)));
  }
  function Ea(a, i) {
    var o = {};
    return o[a.toLowerCase()] = i.toLowerCase(), o["Webkit" + a] = "webkit" + i, o["Moz" + a] = "moz" + i, o;
  }
  var _i = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, Dh = {}, Z1 = {};
  or && (Z1 = document.createElement("div").style, "AnimationEvent" in window || (delete _i.animationend.animation, delete _i.animationiteration.animation, delete _i.animationstart.animation), "TransitionEvent" in window || delete _i.transitionend.transition);
  function Ma(a) {
    if (Dh[a]) return Dh[a];
    if (!_i[a]) return a;
    var i = _i[a], o;
    for (o in i)
      if (i.hasOwnProperty(o) && o in Z1)
        return Dh[a] = i[o];
    return a;
  }
  var Q1 = Ma("animationend"), W1 = Ma("animationiteration"), J1 = Ma("animationstart"), hN = Ma("transitionrun"), dN = Ma("transitionstart"), vN = Ma("transitioncancel"), tx = Ma("transitionend"), ex = /* @__PURE__ */ new Map(), Ph = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ph.push("scrollEnd");
  function qn(a, i) {
    ex.set(a, i), wa(i, [a]);
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
  }, mn = [], Oi = 0, Nh = 0;
  function oc() {
    for (var a = Oi, i = Nh = Oi = 0; i < a; ) {
      var o = mn[i];
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
      m !== 0 && nx(o, v, m);
    }
  }
  function lc(a, i, o, f) {
    mn[Oi++] = a, mn[Oi++] = i, mn[Oi++] = o, mn[Oi++] = f, Nh |= f, a.lanes |= f, a = a.alternate, a !== null && (a.lanes |= f);
  }
  function Rh(a, i, o, f) {
    return lc(a, i, o, f), cc(a);
  }
  function ja(a, i) {
    return lc(a, null, null, i), cc(a);
  }
  function nx(a, i, o) {
    a.lanes |= o;
    var f = a.alternate;
    f !== null && (f.lanes |= o);
    for (var v = !1, m = a.return; m !== null; )
      m.childLanes |= o, f = m.alternate, f !== null && (f.childLanes |= o), m.tag === 22 && (a = m.stateNode, a === null || a._visibility & 1 || (v = !0)), a = m, m = m.return;
    return a.tag === 3 ? (m = a.stateNode, v && i !== null && (v = 31 - en(o), a = m.hiddenUpdates, f = a[v], f === null ? a[v] = [i] : f.push(i), i.lane = o | 536870912), m) : null;
  }
  function cc(a) {
    if (50 < wo)
      throw wo = 0, Id = null, Error(r(185));
    for (var i = a.return; i !== null; )
      a = i, i = a.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var Ai = {};
  function pN(a, i, o, f) {
    this.tag = a, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rn(a, i, o, f) {
    return new pN(a, i, o, f);
  }
  function qh(a) {
    return a = a.prototype, !(!a || !a.isReactComponent);
  }
  function lr(a, i) {
    var o = a.alternate;
    return o === null ? (o = rn(
      a.tag,
      i,
      a.key,
      a.mode
    ), o.elementType = a.elementType, o.type = a.type, o.stateNode = a.stateNode, o.alternate = a, a.alternate = o) : (o.pendingProps = i, o.type = a.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = a.flags & 65011712, o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, i = a.dependencies, o.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, o.sibling = a.sibling, o.index = a.index, o.ref = a.ref, o.refCleanup = a.refCleanup, o;
  }
  function rx(a, i) {
    a.flags &= 65011714;
    var o = a.alternate;
    return o === null ? (a.childLanes = 0, a.lanes = i, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, i = o.dependencies, a.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), a;
  }
  function fc(a, i, o, f, v, m) {
    var _ = 0;
    if (f = a, typeof a == "function") qh(a) && (_ = 1);
    else if (typeof a == "string")
      _ = xR(
        a,
        o,
        ft.current
      ) ? 26 : a === "html" || a === "head" || a === "body" ? 27 : 5;
    else
      t: switch (a) {
        case z:
          return a = rn(31, o, i, v), a.elementType = z, a.lanes = m, a;
        case S:
          return Ca(o.children, v, m, i);
        case b:
          _ = 8, v |= 24;
          break;
        case A:
          return a = rn(12, o, i, v | 2), a.elementType = A, a.lanes = m, a;
        case w:
          return a = rn(13, o, i, v), a.elementType = w, a.lanes = m, a;
        case E:
          return a = rn(19, o, i, v), a.elementType = E, a.lanes = m, a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case M:
                _ = 10;
                break t;
              case T:
                _ = 9;
                break t;
              case C:
                _ = 11;
                break t;
              case D:
                _ = 14;
                break t;
              case R:
                _ = 16, f = null;
                break t;
            }
          _ = 29, o = Error(
            r(130, a === null ? "null" : typeof a, "")
          ), f = null;
      }
    return i = rn(_, o, i, v), i.elementType = a, i.type = f, i.lanes = m, i;
  }
  function Ca(a, i, o, f) {
    return a = rn(7, a, f, i), a.lanes = o, a;
  }
  function zh(a, i, o) {
    return a = rn(6, a, null, i), a.lanes = o, a;
  }
  function ax(a) {
    var i = rn(18, null, null, 0);
    return i.stateNode = a, i;
  }
  function $h(a, i, o) {
    return i = rn(
      4,
      a.children !== null ? a.children : [],
      a.key,
      i
    ), i.lanes = o, i.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    }, i;
  }
  var ix = /* @__PURE__ */ new WeakMap();
  function gn(a, i) {
    if (typeof a == "object" && a !== null) {
      var o = ix.get(a);
      return o !== void 0 ? o : (i = {
        value: a,
        source: i,
        stack: Nn(i)
      }, ix.set(a, i), i);
    }
    return {
      value: a,
      source: i,
      stack: Nn(i)
    };
  }
  var wi = [], Ti = 0, sc = null, ro = 0, bn = [], xn = 0, Gr = null, Yn = 1, Xn = "";
  function cr(a, i) {
    wi[Ti++] = ro, wi[Ti++] = sc, sc = a, ro = i;
  }
  function ux(a, i, o) {
    bn[xn++] = Yn, bn[xn++] = Xn, bn[xn++] = Gr, Gr = a;
    var f = Yn;
    a = Xn;
    var v = 32 - en(f) - 1;
    f &= ~(1 << v), o += 1;
    var m = 32 - en(i) + v;
    if (30 < m) {
      var _ = v - v % 5;
      m = (f & (1 << _) - 1).toString(32), f >>= _, v -= _, Yn = 1 << 32 - en(i) + v | o << v | f, Xn = m + a;
    } else
      Yn = 1 << m | o << v | f, Xn = a;
  }
  function Bh(a) {
    a.return !== null && (cr(a, 1), ux(a, 1, 0));
  }
  function Lh(a) {
    for (; a === sc; )
      sc = wi[--Ti], wi[Ti] = null, ro = wi[--Ti], wi[Ti] = null;
    for (; a === Gr; )
      Gr = bn[--xn], bn[xn] = null, Xn = bn[--xn], bn[xn] = null, Yn = bn[--xn], bn[xn] = null;
  }
  function ox(a, i) {
    bn[xn++] = Yn, bn[xn++] = Xn, bn[xn++] = Gr, Yn = i.id, Xn = i.overflow, Gr = a;
  }
  var je = null, ee = null, Rt = !1, Yr = null, Sn = !1, kh = Error(r(519));
  function Xr(a) {
    var i = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ao(gn(i, a)), kh;
  }
  function lx(a) {
    var i = a.stateNode, o = a.type, f = a.memoizedProps;
    switch (i[Me] = a, i[Ye] = f, o) {
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
        for (o = 0; o < Eo.length; o++)
          Dt(Eo[o], i);
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
        Dt("invalid", i), S1(
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
        Dt("invalid", i), O1(i, f.value, f.defaultValue, f.children);
    }
    o = f.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || i.textContent === "" + o || f.suppressHydrationWarning === !0 || w_(i.textContent, o) ? (f.popover != null && (Dt("beforetoggle", i), Dt("toggle", i)), f.onScroll != null && Dt("scroll", i), f.onScrollEnd != null && Dt("scrollend", i), f.onClick != null && (i.onclick = ur), i = !0) : i = !1, i || Xr(a, !0);
  }
  function cx(a) {
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
  function Ei(a) {
    if (a !== je) return !1;
    if (!Rt) return cx(a), Rt = !0, !1;
    var i = a.tag, o;
    if ((o = i !== 3 && i !== 27) && ((o = i === 5) && (o = a.type, o = !(o !== "form" && o !== "button") || av(a.type, a.memoizedProps)), o = !o), o && ee && Xr(a), cx(a), i === 13) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      ee = R_(a);
    } else if (i === 31) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      ee = R_(a);
    } else
      i === 27 ? (i = ee, ua(a.type) ? (a = cv, cv = null, ee = a) : ee = i) : ee = je ? On(a.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    ee = je = null, Rt = !1;
  }
  function Uh() {
    var a = Yr;
    return a !== null && (Ze === null ? Ze = a : Ze.push.apply(
      Ze,
      a
    ), Yr = null), a;
  }
  function ao(a) {
    Yr === null ? Yr = [a] : Yr.push(a);
  }
  var Hh = P(null), Pa = null, fr = null;
  function Kr(a, i, o) {
    et(Hh, i._currentValue), i._currentValue = o;
  }
  function sr(a) {
    a._currentValue = Hh.current, U(Hh);
  }
  function Ih(a, i, o) {
    for (; a !== null; ) {
      var f = a.alternate;
      if ((a.childLanes & i) !== i ? (a.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), a === o) break;
      a = a.return;
    }
  }
  function Gh(a, i, o, f) {
    var v = a.child;
    for (v !== null && (v.return = a); v !== null; ) {
      var m = v.dependencies;
      if (m !== null) {
        var _ = v.child;
        m = m.firstContext;
        t: for (; m !== null; ) {
          var j = m;
          m = v;
          for (var q = 0; q < i.length; q++)
            if (j.context === i[q]) {
              m.lanes |= o, j = m.alternate, j !== null && (j.lanes |= o), Ih(
                m.return,
                o,
                a
              ), f || (_ = null);
              break t;
            }
          m = j.next;
        }
      } else if (v.tag === 18) {
        if (_ = v.return, _ === null) throw Error(r(341));
        _.lanes |= o, m = _.alternate, m !== null && (m.lanes |= o), Ih(_, o, a), _ = null;
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
  function Mi(a, i, o, f) {
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
          var j = v.type;
          nn(v.pendingProps.value, _.value) || (a !== null ? a.push(j) : a = [j]);
        }
      } else if (v === jt.current) {
        if (_ = v.alternate, _ === null) throw Error(r(387));
        _.memoizedState.memoizedState !== v.memoizedState.memoizedState && (a !== null ? a.push(Po) : a = [Po]);
      }
      v = v.return;
    }
    a !== null && Gh(
      i,
      a,
      o,
      f
    ), i.flags |= 262144;
  }
  function hc(a) {
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
    return fx(Pa, a);
  }
  function dc(a, i) {
    return Pa === null && Na(a), fx(a, i);
  }
  function fx(a, i) {
    var o = i._currentValue;
    if (i = { context: i, memoizedValue: o, next: null }, fr === null) {
      if (a === null) throw Error(r(308));
      fr = i, a.dependencies = { lanes: 0, firstContext: i }, a.flags |= 524288;
    } else fr = fr.next = i;
    return o;
  }
  var yN = typeof AbortController < "u" ? AbortController : function() {
    var a = [], i = this.signal = {
      aborted: !1,
      addEventListener: function(o, f) {
        a.push(f);
      }
    };
    this.abort = function() {
      i.aborted = !0, a.forEach(function(o) {
        return o();
      });
    };
  }, mN = t.unstable_scheduleCallback, gN = t.unstable_NormalPriority, de = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yh() {
    return {
      controller: new yN(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function io(a) {
    a.refCount--, a.refCount === 0 && mN(gN, function() {
      a.controller.abort();
    });
  }
  var uo = null, Xh = 0, ji = 0, Ci = null;
  function bN(a, i) {
    if (uo === null) {
      var o = uo = [];
      Xh = 0, ji = Fd(), Ci = {
        status: "pending",
        value: void 0,
        then: function(f) {
          o.push(f);
        }
      };
    }
    return Xh++, i.then(sx, sx), i;
  }
  function sx() {
    if (--Xh === 0 && uo !== null) {
      Ci !== null && (Ci.status = "fulfilled");
      var a = uo;
      uo = null, ji = 0, Ci = null;
      for (var i = 0; i < a.length; i++) (0, a[i])();
    }
  }
  function xN(a, i) {
    var o = [], f = {
      status: "pending",
      value: null,
      reason: null,
      then: function(v) {
        o.push(v);
      }
    };
    return a.then(
      function() {
        f.status = "fulfilled", f.value = i;
        for (var v = 0; v < o.length; v++) (0, o[v])(i);
      },
      function(v) {
        for (f.status = "rejected", f.reason = v, v = 0; v < o.length; v++)
          (0, o[v])(void 0);
      }
    ), f;
  }
  var hx = N.S;
  N.S = function(a, i) {
    FS = $e(), typeof i == "object" && i !== null && typeof i.then == "function" && bN(a, i), hx !== null && hx(a, i);
  };
  var Ra = P(null);
  function Kh() {
    var a = Ra.current;
    return a !== null ? a : Ft.pooledCache;
  }
  function vc(a, i) {
    i === null ? et(Ra, Ra.current) : et(Ra, i.pool);
  }
  function dx() {
    var a = Kh();
    return a === null ? null : { parent: de._currentValue, pool: a };
  }
  var Di = Error(r(460)), Vh = Error(r(474)), pc = Error(r(542)), yc = { then: function() {
  } };
  function vx(a) {
    return a = a.status, a === "fulfilled" || a === "rejected";
  }
  function px(a, i, o) {
    switch (o = a[o], o === void 0 ? a.push(i) : o !== i && (i.then(ur, ur), i = o), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw a = i.reason, mx(a), a;
      default:
        if (typeof i.status == "string") i.then(ur, ur);
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
            throw a = i.reason, mx(a), a;
        }
        throw za = i, Di;
    }
  }
  function qa(a) {
    try {
      var i = a._init;
      return i(a._payload);
    } catch (o) {
      throw o !== null && typeof o == "object" && typeof o.then == "function" ? (za = o, Di) : o;
    }
  }
  var za = null;
  function yx() {
    if (za === null) throw Error(r(459));
    var a = za;
    return za = null, a;
  }
  function mx(a) {
    if (a === Di || a === pc)
      throw Error(r(483));
  }
  var Pi = null, oo = 0;
  function mc(a) {
    var i = oo;
    return oo += 1, Pi === null && (Pi = []), px(Pi, a, i);
  }
  function lo(a, i) {
    i = i.props.ref, a.ref = i !== void 0 ? i : null;
  }
  function gc(a, i) {
    throw i.$$typeof === g ? Error(r(525)) : (a = Object.prototype.toString.call(i), Error(
      r(
        31,
        a === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : a
      )
    ));
  }
  function gx(a) {
    function i(H, L) {
      if (a) {
        var G = H.deletions;
        G === null ? (H.deletions = [L], H.flags |= 16) : G.push(L);
      }
    }
    function o(H, L) {
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
    function j(H, L, G, nt) {
      return L === null || L.tag !== 6 ? (L = zh(G, H.mode, nt), L.return = H, L) : (L = v(L, G), L.return = H, L);
    }
    function q(H, L, G, nt) {
      var yt = G.type;
      return yt === S ? J(
        H,
        L,
        G.props.children,
        nt,
        G.key
      ) : L !== null && (L.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === R && qa(yt) === L.type) ? (L = v(L, G.props), lo(L, G), L.return = H, L) : (L = fc(
        G.type,
        G.key,
        G.props,
        null,
        H.mode,
        nt
      ), lo(L, G), L.return = H, L);
    }
    function Y(H, L, G, nt) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== G.containerInfo || L.stateNode.implementation !== G.implementation ? (L = $h(G, H.mode, nt), L.return = H, L) : (L = v(L, G.children || []), L.return = H, L);
    }
    function J(H, L, G, nt, yt) {
      return L === null || L.tag !== 7 ? (L = Ca(
        G,
        H.mode,
        nt,
        yt
      ), L.return = H, L) : (L = v(L, G), L.return = H, L);
    }
    function rt(H, L, G) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return L = zh(
          "" + L,
          H.mode,
          G
        ), L.return = H, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case x:
            return G = fc(
              L.type,
              L.key,
              L.props,
              null,
              H.mode,
              G
            ), lo(G, L), G.return = H, G;
          case O:
            return L = $h(
              L,
              H.mode,
              G
            ), L.return = H, L;
          case R:
            return L = qa(L), rt(H, L, G);
        }
        if (V(L) || $(L))
          return L = Ca(
            L,
            H.mode,
            G,
            null
          ), L.return = H, L;
        if (typeof L.then == "function")
          return rt(H, mc(L), G);
        if (L.$$typeof === M)
          return rt(
            H,
            dc(H, L),
            G
          );
        gc(H, L);
      }
      return null;
    }
    function X(H, L, G, nt) {
      var yt = L !== null ? L.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return yt !== null ? null : j(H, L, "" + G, nt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case x:
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
            mc(G),
            nt
          );
        if (G.$$typeof === M)
          return X(
            H,
            L,
            dc(H, G),
            nt
          );
        gc(H, G);
      }
      return null;
    }
    function Q(H, L, G, nt, yt) {
      if (typeof nt == "string" && nt !== "" || typeof nt == "number" || typeof nt == "bigint")
        return H = H.get(G) || null, j(L, H, "" + nt, yt);
      if (typeof nt == "object" && nt !== null) {
        switch (nt.$$typeof) {
          case x:
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
            mc(nt),
            yt
          );
        if (nt.$$typeof === M)
          return Q(
            H,
            L,
            G,
            dc(L, nt),
            yt
          );
        gc(L, nt);
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
        return o(H, pt), Rt && cr(H, Tt), yt;
      if (pt === null) {
        for (; Tt < G.length; Tt++)
          pt = rt(H, G[Tt], nt), pt !== null && (L = m(
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
        return o(H, pt), Rt && cr(H, Tt), yt;
      if (pt === null) {
        for (; !$t.done; Tt++, $t = G.next())
          $t = rt(H, $t.value, nt), $t !== null && (L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t);
        return Rt && cr(H, Tt), yt;
      }
      for (pt = f(pt); !$t.done; Tt++, $t = G.next())
        $t = Q(pt, H, Tt, $t.value, nt), $t !== null && (a && $t.alternate !== null && pt.delete($t.key === null ? Tt : $t.key), L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t);
      return a && pt.forEach(function(DR) {
        return i(H, DR);
      }), Rt && cr(H, Tt), yt;
    }
    function Kt(H, L, G, nt) {
      if (typeof G == "object" && G !== null && G.type === S && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case x:
            t: {
              for (var yt = G.key; L !== null; ) {
                if (L.key === yt) {
                  if (yt = G.type, yt === S) {
                    if (L.tag === 7) {
                      o(
                        H,
                        L.sibling
                      ), nt = v(
                        L,
                        G.props.children
                      ), nt.return = H, H = nt;
                      break t;
                    }
                  } else if (L.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === R && qa(yt) === L.type) {
                    o(
                      H,
                      L.sibling
                    ), nt = v(L, G.props), lo(nt, G), nt.return = H, H = nt;
                    break t;
                  }
                  o(H, L);
                  break;
                } else i(H, L);
                L = L.sibling;
              }
              G.type === S ? (nt = Ca(
                G.props.children,
                H.mode,
                nt,
                G.key
              ), nt.return = H, H = nt) : (nt = fc(
                G.type,
                G.key,
                G.props,
                null,
                H.mode,
                nt
              ), lo(nt, G), nt.return = H, H = nt);
            }
            return _(H);
          case O:
            t: {
              for (yt = G.key; L !== null; ) {
                if (L.key === yt)
                  if (L.tag === 4 && L.stateNode.containerInfo === G.containerInfo && L.stateNode.implementation === G.implementation) {
                    o(
                      H,
                      L.sibling
                    ), nt = v(L, G.children || []), nt.return = H, H = nt;
                    break t;
                  } else {
                    o(H, L);
                    break;
                  }
                else i(H, L);
                L = L.sibling;
              }
              nt = $h(G, H.mode, nt), nt.return = H, H = nt;
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
            mc(G),
            nt
          );
        if (G.$$typeof === M)
          return Kt(
            H,
            L,
            dc(H, G),
            nt
          );
        gc(H, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint" ? (G = "" + G, L !== null && L.tag === 6 ? (o(H, L.sibling), nt = v(L, G), nt.return = H, H = nt) : (o(H, L), nt = zh(G, H.mode, nt), nt.return = H, H = nt), _(H)) : o(H, L);
    }
    return function(H, L, G, nt) {
      try {
        oo = 0;
        var yt = Kt(
          H,
          L,
          G,
          nt
        );
        return Pi = null, yt;
      } catch (pt) {
        if (pt === Di || pt === pc) throw pt;
        var zt = rn(29, pt, null, H.mode);
        return zt.lanes = nt, zt.return = H, zt;
      } finally {
      }
    };
  }
  var $a = gx(!0), bx = gx(!1), Vr = !1;
  function Fh(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Zh(a, i) {
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
  function Zr(a, i, o) {
    var f = a.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (Lt & 2) !== 0) {
      var v = f.pending;
      return v === null ? i.next = i : (i.next = v.next, v.next = i), f.pending = i, i = cc(a), nx(a, null, o), i;
    }
    return lc(a, f, i, o), cc(a);
  }
  function co(a, i, o) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (o & 4194048) !== 0)) {
      var f = i.lanes;
      f &= a.pendingLanes, o |= f, i.lanes = o, f1(a, o);
    }
  }
  function Qh(a, i) {
    var o = a.updateQueue, f = a.alternate;
    if (f !== null && (f = f.updateQueue, o === f)) {
      var v = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var _ = {
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          };
          m === null ? v = m = _ : m = m.next = _, o = o.next;
        } while (o !== null);
        m === null ? v = m = i : m = m.next = i;
      } else v = m = i;
      o = {
        baseState: f.baseState,
        firstBaseUpdate: v,
        lastBaseUpdate: m,
        shared: f.shared,
        callbacks: f.callbacks
      }, a.updateQueue = o;
      return;
    }
    a = o.lastBaseUpdate, a === null ? o.firstBaseUpdate = i : a.next = i, o.lastBaseUpdate = i;
  }
  var Wh = !1;
  function fo() {
    if (Wh) {
      var a = Ci;
      if (a !== null) throw a;
    }
  }
  function so(a, i, o, f) {
    Wh = !1;
    var v = a.updateQueue;
    Vr = !1;
    var m = v.firstBaseUpdate, _ = v.lastBaseUpdate, j = v.shared.pending;
    if (j !== null) {
      v.shared.pending = null;
      var q = j, Y = q.next;
      q.next = null, _ === null ? m = Y : _.next = Y, _ = q;
      var J = a.alternate;
      J !== null && (J = J.updateQueue, j = J.lastBaseUpdate, j !== _ && (j === null ? J.firstBaseUpdate = Y : j.next = Y, J.lastBaseUpdate = q));
    }
    if (m !== null) {
      var rt = v.baseState;
      _ = 0, J = Y = q = null, j = m;
      do {
        var X = j.lane & -536870913, Q = X !== j.lane;
        if (Q ? (Pt & X) === X : (f & X) === X) {
          X !== 0 && X === ji && (Wh = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: j.tag,
            payload: j.payload,
            callback: null,
            next: null
          });
          t: {
            var dt = a, gt = j;
            X = i;
            var Kt = o;
            switch (gt.tag) {
              case 1:
                if (dt = gt.payload, typeof dt == "function") {
                  rt = dt.call(Kt, rt, X);
                  break t;
                }
                rt = dt;
                break t;
              case 3:
                dt.flags = dt.flags & -65537 | 128;
              case 0:
                if (dt = gt.payload, X = typeof dt == "function" ? dt.call(Kt, rt, X) : dt, X == null) break t;
                rt = p({}, rt, X);
                break t;
              case 2:
                Vr = !0;
            }
          }
          X = j.callback, X !== null && (a.flags |= 64, Q && (a.flags |= 8192), Q = v.callbacks, Q === null ? v.callbacks = [X] : Q.push(X));
        } else
          Q = {
            lane: X,
            tag: j.tag,
            payload: j.payload,
            callback: j.callback,
            next: null
          }, J === null ? (Y = J = Q, q = rt) : J = J.next = Q, _ |= X;
        if (j = j.next, j === null) {
          if (j = v.shared.pending, j === null)
            break;
          Q = j, j = Q.next, Q.next = null, v.lastBaseUpdate = Q, v.shared.pending = null;
        }
      } while (!0);
      J === null && (q = rt), v.baseState = q, v.firstBaseUpdate = Y, v.lastBaseUpdate = J, m === null && (v.shared.lanes = 0), ea |= _, a.lanes = _, a.memoizedState = rt;
    }
  }
  function xx(a, i) {
    if (typeof a != "function")
      throw Error(r(191, a));
    a.call(i);
  }
  function Sx(a, i) {
    var o = a.callbacks;
    if (o !== null)
      for (a.callbacks = null, a = 0; a < o.length; a++)
        xx(o[a], i);
  }
  var Ni = P(null), bc = P(0);
  function _x(a, i) {
    a = xr, et(bc, a), et(Ni, i), xr = a | i.baseLanes;
  }
  function Jh() {
    et(bc, xr), et(Ni, Ni.current);
  }
  function td() {
    xr = bc.current, U(Ni), U(bc);
  }
  var an = P(null), _n = null;
  function Qr(a) {
    var i = a.alternate;
    et(se, se.current & 1), et(an, a), _n === null && (i === null || Ni.current !== null || i.memoizedState !== null) && (_n = a);
  }
  function ed(a) {
    et(se, se.current), et(an, a), _n === null && (_n = a);
  }
  function Ox(a) {
    a.tag === 22 ? (et(se, se.current), et(an, a), _n === null && (_n = a)) : Wr();
  }
  function Wr() {
    et(se, se.current), et(an, an.current);
  }
  function un(a) {
    U(an), _n === a && (_n = null), U(se);
  }
  var se = P(0);
  function xc(a) {
    for (var i = a; i !== null; ) {
      if (i.tag === 13) {
        var o = i.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || ov(o) || lv(o)))
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
  var hr = 0, Ot = null, Yt = null, ve = null, Sc = !1, Ri = !1, Ba = !1, _c = 0, ho = 0, qi = null, SN = 0;
  function le() {
    throw Error(r(321));
  }
  function nd(a, i) {
    if (i === null) return !1;
    for (var o = 0; o < i.length && o < a.length; o++)
      if (!nn(a[o], i[o])) return !1;
    return !0;
  }
  function rd(a, i, o, f, v, m) {
    return hr = m, Ot = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, N.H = a === null || a.memoizedState === null ? uS : gd, Ba = !1, m = o(f, v), Ba = !1, Ri && (m = wx(
      i,
      o,
      f,
      v
    )), Ax(a), m;
  }
  function Ax(a) {
    N.H = yo;
    var i = Yt !== null && Yt.next !== null;
    if (hr = 0, ve = Yt = Ot = null, Sc = !1, ho = 0, qi = null, i) throw Error(r(300));
    a === null || pe || (a = a.dependencies, a !== null && hc(a) && (pe = !0));
  }
  function wx(a, i, o, f) {
    Ot = a;
    var v = 0;
    do {
      if (Ri && (qi = null), ho = 0, Ri = !1, 25 <= v) throw Error(r(301));
      if (v += 1, ve = Yt = null, a.updateQueue != null) {
        var m = a.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      N.H = oS, m = i(o, f);
    } while (Ri);
    return m;
  }
  function _N() {
    var a = N.H, i = a.useState()[0];
    return i = typeof i.then == "function" ? vo(i) : i, a = a.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== a && (Ot.flags |= 1024), i;
  }
  function ad() {
    var a = _c !== 0;
    return _c = 0, a;
  }
  function id(a, i, o) {
    i.updateQueue = a.updateQueue, i.flags &= -2053, a.lanes &= ~o;
  }
  function ud(a) {
    if (Sc) {
      for (a = a.memoizedState; a !== null; ) {
        var i = a.queue;
        i !== null && (i.pending = null), a = a.next;
      }
      Sc = !1;
    }
    hr = 0, ve = Yt = Ot = null, Ri = !1, ho = _c = 0, qi = null;
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
  function Oc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function vo(a) {
    var i = ho;
    return ho += 1, qi === null && (qi = []), a = px(qi, a, i), i = Ot, (ve === null ? i.memoizedState : ve.next) === null && (i = i.alternate, N.H = i === null || i.memoizedState === null ? uS : gd), a;
  }
  function Ac(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return vo(a);
      if (a.$$typeof === M) return Ce(a);
    }
    throw Error(r(438, String(a)));
  }
  function od(a) {
    var i = null, o = Ot.updateQueue;
    if (o !== null && (i = o.memoCache), i == null) {
      var f = Ot.alternate;
      f !== null && (f = f.updateQueue, f !== null && (f = f.memoCache, f != null && (i = {
        data: f.data.map(function(v) {
          return v.slice();
        }),
        index: 0
      })));
    }
    if (i == null && (i = { data: [], index: 0 }), o === null && (o = Oc(), Ot.updateQueue = o), o.memoCache = i, o = i.data[i.index], o === void 0)
      for (o = i.data[i.index] = Array(a), f = 0; f < a; f++)
        o[f] = F;
    return i.index++, o;
  }
  function dr(a, i) {
    return typeof i == "function" ? i(a) : i;
  }
  function wc(a) {
    var i = he();
    return ld(i, Yt, a);
  }
  function ld(a, i, o) {
    var f = a.queue;
    if (f === null) throw Error(r(311));
    f.lastRenderedReducer = o;
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
      var j = _ = null, q = null, Y = i, J = !1;
      do {
        var rt = Y.lane & -536870913;
        if (rt !== Y.lane ? (Pt & rt) === rt : (hr & rt) === rt) {
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
            }), rt === ji && (J = !0);
          else if ((hr & X) === X) {
            Y = Y.next, X === ji && (J = !0);
            continue;
          } else
            rt = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, q === null ? (j = q = rt, _ = m) : q = q.next = rt, Ot.lanes |= X, ea |= X;
          rt = Y.action, Ba && o(m, rt), m = Y.hasEagerState ? Y.eagerState : o(m, rt);
        } else
          X = {
            lane: rt,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, q === null ? (j = q = X, _ = m) : q = q.next = X, Ot.lanes |= rt, ea |= rt;
        Y = Y.next;
      } while (Y !== null && Y !== i);
      if (q === null ? _ = m : q.next = j, !nn(m, a.memoizedState) && (pe = !0, J && (o = Ci, o !== null)))
        throw o;
      a.memoizedState = m, a.baseState = _, a.baseQueue = q, f.lastRenderedState = m;
    }
    return v === null && (f.lanes = 0), [a.memoizedState, f.dispatch];
  }
  function cd(a) {
    var i = he(), o = i.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = a;
    var f = o.dispatch, v = o.pending, m = i.memoizedState;
    if (v !== null) {
      o.pending = null;
      var _ = v = v.next;
      do
        m = a(m, _.action), _ = _.next;
      while (_ !== v);
      nn(m, i.memoizedState) || (pe = !0), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
    }
    return [m, f];
  }
  function Tx(a, i, o) {
    var f = Ot, v = he(), m = Rt;
    if (m) {
      if (o === void 0) throw Error(r(407));
      o = o();
    } else o = i();
    var _ = !nn(
      (Yt || v).memoizedState,
      o
    );
    if (_ && (v.memoizedState = o, pe = !0), v = v.queue, hd(jx.bind(null, f, v, a), [
      a
    ]), v.getSnapshot !== i || _ || ve !== null && ve.memoizedState.tag & 1) {
      if (f.flags |= 2048, zi(
        9,
        { destroy: void 0 },
        Mx.bind(
          null,
          f,
          v,
          o,
          i
        ),
        null
      ), Ft === null) throw Error(r(349));
      m || (hr & 127) !== 0 || Ex(f, i, o);
    }
    return o;
  }
  function Ex(a, i, o) {
    a.flags |= 16384, a = { getSnapshot: i, value: o }, i = Ot.updateQueue, i === null ? (i = Oc(), Ot.updateQueue = i, i.stores = [a]) : (o = i.stores, o === null ? i.stores = [a] : o.push(a));
  }
  function Mx(a, i, o, f) {
    i.value = o, i.getSnapshot = f, Cx(i) && Dx(a);
  }
  function jx(a, i, o) {
    return o(function() {
      Cx(i) && Dx(a);
    });
  }
  function Cx(a) {
    var i = a.getSnapshot;
    a = a.value;
    try {
      var o = i();
      return !nn(a, o);
    } catch {
      return !0;
    }
  }
  function Dx(a) {
    var i = ja(a, 2);
    i !== null && Qe(i, a, 2);
  }
  function fd(a) {
    var i = He();
    if (typeof a == "function") {
      var o = a;
      if (a = o(), Ba) {
        Ur(!0);
        try {
          o();
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
  function Px(a, i, o, f) {
    return a.baseState = o, ld(
      a,
      Yt,
      typeof f == "function" ? f : dr
    );
  }
  function ON(a, i, o, f, v) {
    if (Mc(a)) throw Error(r(485));
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
      N.T !== null ? o(!0) : m.isTransition = !1, f(m), o = i.pending, o === null ? (m.next = i.pending = m, Nx(i, m)) : (m.next = o.next, i.pending = o.next = m);
    }
  }
  function Nx(a, i) {
    var o = i.action, f = i.payload, v = a.state;
    if (i.isTransition) {
      var m = N.T, _ = {};
      N.T = _;
      try {
        var j = o(v, f), q = N.S;
        q !== null && q(_, j), Rx(a, i, j);
      } catch (Y) {
        sd(a, i, Y);
      } finally {
        m !== null && _.types !== null && (m.types = _.types), N.T = m;
      }
    } else
      try {
        m = o(v, f), Rx(a, i, m);
      } catch (Y) {
        sd(a, i, Y);
      }
  }
  function Rx(a, i, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(
      function(f) {
        qx(a, i, f);
      },
      function(f) {
        return sd(a, i, f);
      }
    ) : qx(a, i, o);
  }
  function qx(a, i, o) {
    i.status = "fulfilled", i.value = o, zx(i), a.state = o, i = a.pending, i !== null && (o = i.next, o === i ? a.pending = null : (o = o.next, i.next = o, Nx(a, o)));
  }
  function sd(a, i, o) {
    var f = a.pending;
    if (a.pending = null, f !== null) {
      f = f.next;
      do
        i.status = "rejected", i.reason = o, zx(i), i = i.next;
      while (i !== f);
    }
    a.action = null;
  }
  function zx(a) {
    a = a.listeners;
    for (var i = 0; i < a.length; i++) (0, a[i])();
  }
  function $x(a, i) {
    return i;
  }
  function Bx(a, i) {
    if (Rt) {
      var o = Ft.formState;
      if (o !== null) {
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
        f && (i = o[0]);
      }
    }
    return o = He(), o.memoizedState = o.baseState = i, f = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $x,
      lastRenderedState: i
    }, o.queue = f, o = rS.bind(
      null,
      Ot,
      f
    ), f.dispatch = o, f = fd(!1), m = md.bind(
      null,
      Ot,
      !1,
      f.queue
    ), f = He(), v = {
      state: i,
      dispatch: null,
      action: a,
      pending: null
    }, f.queue = v, o = ON.bind(
      null,
      Ot,
      v,
      m,
      o
    ), v.dispatch = o, f.memoizedState = a, [i, o, !1];
  }
  function Lx(a) {
    var i = he();
    return kx(i, Yt, a);
  }
  function kx(a, i, o) {
    if (i = ld(
      a,
      i,
      $x
    )[0], a = wc(dr)[0], typeof i == "object" && i !== null && typeof i.then == "function")
      try {
        var f = vo(i);
      } catch (_) {
        throw _ === Di ? pc : _;
      }
    else f = i;
    i = he();
    var v = i.queue, m = v.dispatch;
    return o !== i.memoizedState && (Ot.flags |= 2048, zi(
      9,
      { destroy: void 0 },
      AN.bind(null, v, o),
      null
    )), [f, m, a];
  }
  function AN(a, i) {
    a.action = i;
  }
  function Ux(a) {
    var i = he(), o = Yt;
    if (o !== null)
      return kx(i, o, a);
    he(), i = i.memoizedState, o = he();
    var f = o.queue.dispatch;
    return o.memoizedState = a, [i, f, !1];
  }
  function zi(a, i, o, f) {
    return a = { tag: a, create: o, deps: f, inst: i, next: null }, i = Ot.updateQueue, i === null && (i = Oc(), Ot.updateQueue = i), o = i.lastEffect, o === null ? i.lastEffect = a.next = a : (f = o.next, o.next = a, a.next = f, i.lastEffect = a), a;
  }
  function Hx() {
    return he().memoizedState;
  }
  function Tc(a, i, o, f) {
    var v = He();
    Ot.flags |= a, v.memoizedState = zi(
      1 | i,
      { destroy: void 0 },
      o,
      f === void 0 ? null : f
    );
  }
  function Ec(a, i, o, f) {
    var v = he();
    f = f === void 0 ? null : f;
    var m = v.memoizedState.inst;
    Yt !== null && f !== null && nd(f, Yt.memoizedState.deps) ? v.memoizedState = zi(i, m, o, f) : (Ot.flags |= a, v.memoizedState = zi(
      1 | i,
      m,
      o,
      f
    ));
  }
  function Ix(a, i) {
    Tc(8390656, 8, a, i);
  }
  function hd(a, i) {
    Ec(2048, 8, a, i);
  }
  function wN(a) {
    Ot.flags |= 4;
    var i = Ot.updateQueue;
    if (i === null)
      i = Oc(), Ot.updateQueue = i, i.events = [a];
    else {
      var o = i.events;
      o === null ? i.events = [a] : o.push(a);
    }
  }
  function Gx(a) {
    var i = he().memoizedState;
    return wN({ ref: i, nextImpl: a }), function() {
      if ((Lt & 2) !== 0) throw Error(r(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function Yx(a, i) {
    return Ec(4, 2, a, i);
  }
  function Xx(a, i) {
    return Ec(4, 4, a, i);
  }
  function Kx(a, i) {
    if (typeof i == "function") {
      a = a();
      var o = i(a);
      return function() {
        typeof o == "function" ? o() : i(null);
      };
    }
    if (i != null)
      return a = a(), i.current = a, function() {
        i.current = null;
      };
  }
  function Vx(a, i, o) {
    o = o != null ? o.concat([a]) : null, Ec(4, 4, Kx.bind(null, i, a), o);
  }
  function dd() {
  }
  function Fx(a, i) {
    var o = he();
    i = i === void 0 ? null : i;
    var f = o.memoizedState;
    return i !== null && nd(i, f[1]) ? f[0] : (o.memoizedState = [a, i], a);
  }
  function Zx(a, i) {
    var o = he();
    i = i === void 0 ? null : i;
    var f = o.memoizedState;
    if (i !== null && nd(i, f[1]))
      return f[0];
    if (f = a(), Ba) {
      Ur(!0);
      try {
        a();
      } finally {
        Ur(!1);
      }
    }
    return o.memoizedState = [f, i], f;
  }
  function vd(a, i, o) {
    return o === void 0 || (hr & 1073741824) !== 0 && (Pt & 261930) === 0 ? a.memoizedState = i : (a.memoizedState = o, a = QS(), Ot.lanes |= a, ea |= a, o);
  }
  function Qx(a, i, o, f) {
    return nn(o, i) ? o : Ni.current !== null ? (a = vd(a, o, f), nn(a, i) || (pe = !0), a) : (hr & 42) === 0 || (hr & 1073741824) !== 0 && (Pt & 261930) === 0 ? (pe = !0, a.memoizedState = o) : (a = QS(), Ot.lanes |= a, ea |= a, i);
  }
  function Wx(a, i, o, f, v) {
    var m = I.p;
    I.p = m !== 0 && 8 > m ? m : 8;
    var _ = N.T, j = {};
    N.T = j, md(a, !1, i, o);
    try {
      var q = v(), Y = N.S;
      if (Y !== null && Y(j, q), q !== null && typeof q == "object" && typeof q.then == "function") {
        var J = xN(
          q,
          f
        );
        po(
          a,
          i,
          J,
          cn(a)
        );
      } else
        po(
          a,
          i,
          f,
          cn(a)
        );
    } catch (rt) {
      po(
        a,
        i,
        { then: function() {
        }, status: "rejected", reason: rt },
        cn()
      );
    } finally {
      I.p = m, _ !== null && j.types !== null && (_.types = j.types), N.T = _;
    }
  }
  function TN() {
  }
  function pd(a, i, o, f) {
    if (a.tag !== 5) throw Error(r(476));
    var v = Jx(a).queue;
    Wx(
      a,
      v,
      i,
      W,
      o === null ? TN : function() {
        return tS(a), o(f);
      }
    );
  }
  function Jx(a) {
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
    var o = {};
    return i.next = {
      memoizedState: o,
      baseState: o,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: o
      },
      next: null
    }, a.memoizedState = i, a = a.alternate, a !== null && (a.memoizedState = i), i;
  }
  function tS(a) {
    var i = Jx(a);
    i.next === null && (i = a.alternate.memoizedState), po(
      a,
      i.next.queue,
      {},
      cn()
    );
  }
  function yd() {
    return Ce(Po);
  }
  function eS() {
    return he().memoizedState;
  }
  function nS() {
    return he().memoizedState;
  }
  function EN(a) {
    for (var i = a.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var o = cn();
          a = Fr(o);
          var f = Zr(i, a, o);
          f !== null && (Qe(f, i, o), co(f, i, o)), i = { cache: Yh() }, a.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function MN(a, i, o) {
    var f = cn();
    o = {
      lane: f,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mc(a) ? aS(i, o) : (o = Rh(a, i, o, f), o !== null && (Qe(o, a, f), iS(o, i, f)));
  }
  function rS(a, i, o) {
    var f = cn();
    po(a, i, o, f);
  }
  function po(a, i, o, f) {
    var v = {
      lane: f,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Mc(a)) aS(i, v);
    else {
      var m = a.alternate;
      if (a.lanes === 0 && (m === null || m.lanes === 0) && (m = i.lastRenderedReducer, m !== null))
        try {
          var _ = i.lastRenderedState, j = m(_, o);
          if (v.hasEagerState = !0, v.eagerState = j, nn(j, _))
            return lc(a, i, v, 0), Ft === null && oc(), !1;
        } catch {
        } finally {
        }
      if (o = Rh(a, i, v, f), o !== null)
        return Qe(o, a, f), iS(o, i, f), !0;
    }
    return !1;
  }
  function md(a, i, o, f) {
    if (f = {
      lane: 2,
      revertLane: Fd(),
      gesture: null,
      action: f,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mc(a)) {
      if (i) throw Error(r(479));
    } else
      i = Rh(
        a,
        o,
        f,
        2
      ), i !== null && Qe(i, a, 2);
  }
  function Mc(a) {
    var i = a.alternate;
    return a === Ot || i !== null && i === Ot;
  }
  function aS(a, i) {
    Ri = Sc = !0;
    var o = a.pending;
    o === null ? i.next = i : (i.next = o.next, o.next = i), a.pending = i;
  }
  function iS(a, i, o) {
    if ((o & 4194048) !== 0) {
      var f = i.lanes;
      f &= a.pendingLanes, o |= f, i.lanes = o, f1(a, o);
    }
  }
  var yo = {
    readContext: Ce,
    use: Ac,
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
  yo.useEffectEvent = le;
  var uS = {
    readContext: Ce,
    use: Ac,
    useCallback: function(a, i) {
      return He().memoizedState = [
        a,
        i === void 0 ? null : i
      ], a;
    },
    useContext: Ce,
    useEffect: Ix,
    useImperativeHandle: function(a, i, o) {
      o = o != null ? o.concat([a]) : null, Tc(
        4194308,
        4,
        Kx.bind(null, i, a),
        o
      );
    },
    useLayoutEffect: function(a, i) {
      return Tc(4194308, 4, a, i);
    },
    useInsertionEffect: function(a, i) {
      Tc(4, 2, a, i);
    },
    useMemo: function(a, i) {
      var o = He();
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
      return o.memoizedState = [f, i], f;
    },
    useReducer: function(a, i, o) {
      var f = He();
      if (o !== void 0) {
        var v = o(i);
        if (Ba) {
          Ur(!0);
          try {
            o(i);
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
      }, f.queue = a, a = a.dispatch = MN.bind(
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
      a = fd(a);
      var i = a.queue, o = rS.bind(null, Ot, i);
      return i.dispatch = o, [a.memoizedState, o];
    },
    useDebugValue: dd,
    useDeferredValue: function(a, i) {
      var o = He();
      return vd(o, a, i);
    },
    useTransition: function() {
      var a = fd(!1);
      return a = Wx.bind(
        null,
        Ot,
        a.queue,
        !0,
        !1
      ), He().memoizedState = a, [!1, a];
    },
    useSyncExternalStore: function(a, i, o) {
      var f = Ot, v = He();
      if (Rt) {
        if (o === void 0)
          throw Error(r(407));
        o = o();
      } else {
        if (o = i(), Ft === null)
          throw Error(r(349));
        (Pt & 127) !== 0 || Ex(f, i, o);
      }
      v.memoizedState = o;
      var m = { value: o, getSnapshot: i };
      return v.queue = m, Ix(jx.bind(null, f, m, a), [
        a
      ]), f.flags |= 2048, zi(
        9,
        { destroy: void 0 },
        Mx.bind(
          null,
          f,
          m,
          o,
          i
        ),
        null
      ), o;
    },
    useId: function() {
      var a = He(), i = Ft.identifierPrefix;
      if (Rt) {
        var o = Xn, f = Yn;
        o = (f & ~(1 << 32 - en(f) - 1)).toString(32) + o, i = "_" + i + "R_" + o, o = _c++, 0 < o && (i += "H" + o.toString(32)), i += "_";
      } else
        o = SN++, i = "_" + i + "r_" + o.toString(32) + "_";
      return a.memoizedState = i;
    },
    useHostTransitionStatus: yd,
    useFormState: Bx,
    useActionState: Bx,
    useOptimistic: function(a) {
      var i = He();
      i.memoizedState = i.baseState = a;
      var o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return i.queue = o, i = md.bind(
        null,
        Ot,
        !0,
        o
      ), o.dispatch = i, [a, i];
    },
    useMemoCache: od,
    useCacheRefresh: function() {
      return He().memoizedState = EN.bind(
        null,
        Ot
      );
    },
    useEffectEvent: function(a) {
      var i = He(), o = { impl: a };
      return i.memoizedState = o, function() {
        if ((Lt & 2) !== 0)
          throw Error(r(440));
        return o.impl.apply(void 0, arguments);
      };
    }
  }, gd = {
    readContext: Ce,
    use: Ac,
    useCallback: Fx,
    useContext: Ce,
    useEffect: hd,
    useImperativeHandle: Vx,
    useInsertionEffect: Yx,
    useLayoutEffect: Xx,
    useMemo: Zx,
    useReducer: wc,
    useRef: Hx,
    useState: function() {
      return wc(dr);
    },
    useDebugValue: dd,
    useDeferredValue: function(a, i) {
      var o = he();
      return Qx(
        o,
        Yt.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = wc(dr)[0], i = he().memoizedState;
      return [
        typeof a == "boolean" ? a : vo(a),
        i
      ];
    },
    useSyncExternalStore: Tx,
    useId: eS,
    useHostTransitionStatus: yd,
    useFormState: Lx,
    useActionState: Lx,
    useOptimistic: function(a, i) {
      var o = he();
      return Px(o, Yt, a, i);
    },
    useMemoCache: od,
    useCacheRefresh: nS
  };
  gd.useEffectEvent = Gx;
  var oS = {
    readContext: Ce,
    use: Ac,
    useCallback: Fx,
    useContext: Ce,
    useEffect: hd,
    useImperativeHandle: Vx,
    useInsertionEffect: Yx,
    useLayoutEffect: Xx,
    useMemo: Zx,
    useReducer: cd,
    useRef: Hx,
    useState: function() {
      return cd(dr);
    },
    useDebugValue: dd,
    useDeferredValue: function(a, i) {
      var o = he();
      return Yt === null ? vd(o, a, i) : Qx(
        o,
        Yt.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = cd(dr)[0], i = he().memoizedState;
      return [
        typeof a == "boolean" ? a : vo(a),
        i
      ];
    },
    useSyncExternalStore: Tx,
    useId: eS,
    useHostTransitionStatus: yd,
    useFormState: Ux,
    useActionState: Ux,
    useOptimistic: function(a, i) {
      var o = he();
      return Yt !== null ? Px(o, Yt, a, i) : (o.baseState = a, [a, o.queue.dispatch]);
    },
    useMemoCache: od,
    useCacheRefresh: nS
  };
  oS.useEffectEvent = Gx;
  function bd(a, i, o, f) {
    i = a.memoizedState, o = o(f, i), o = o == null ? i : p({}, i, o), a.memoizedState = o, a.lanes === 0 && (a.updateQueue.baseState = o);
  }
  var xd = {
    enqueueSetState: function(a, i, o) {
      a = a._reactInternals;
      var f = cn(), v = Fr(f);
      v.payload = i, o != null && (v.callback = o), i = Zr(a, v, f), i !== null && (Qe(i, a, f), co(i, a, f));
    },
    enqueueReplaceState: function(a, i, o) {
      a = a._reactInternals;
      var f = cn(), v = Fr(f);
      v.tag = 1, v.payload = i, o != null && (v.callback = o), i = Zr(a, v, f), i !== null && (Qe(i, a, f), co(i, a, f));
    },
    enqueueForceUpdate: function(a, i) {
      a = a._reactInternals;
      var o = cn(), f = Fr(o);
      f.tag = 2, i != null && (f.callback = i), i = Zr(a, f, o), i !== null && (Qe(i, a, o), co(i, a, o));
    }
  };
  function lS(a, i, o, f, v, m, _) {
    return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(f, m, _) : i.prototype && i.prototype.isPureReactComponent ? !eo(o, f) || !eo(v, m) : !0;
  }
  function cS(a, i, o, f) {
    a = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(o, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(o, f), i.state !== a && xd.enqueueReplaceState(i, i.state, null);
  }
  function La(a, i) {
    var o = i;
    if ("ref" in i) {
      o = {};
      for (var f in i)
        f !== "ref" && (o[f] = i[f]);
    }
    if (a = a.defaultProps) {
      o === i && (o = p({}, o));
      for (var v in a)
        o[v] === void 0 && (o[v] = a[v]);
    }
    return o;
  }
  function fS(a) {
    uc(a);
  }
  function sS(a) {
    console.error(a);
  }
  function hS(a) {
    uc(a);
  }
  function jc(a, i) {
    try {
      var o = a.onUncaughtError;
      o(i.value, { componentStack: i.stack });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function dS(a, i, o) {
    try {
      var f = a.onCaughtError;
      f(o.value, {
        componentStack: o.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null
      });
    } catch (v) {
      setTimeout(function() {
        throw v;
      });
    }
  }
  function Sd(a, i, o) {
    return o = Fr(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      jc(a, i);
    }, o;
  }
  function vS(a) {
    return a = Fr(a), a.tag = 3, a;
  }
  function pS(a, i, o, f) {
    var v = o.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var m = f.value;
      a.payload = function() {
        return v(m);
      }, a.callback = function() {
        dS(i, o, f);
      };
    }
    var _ = o.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (a.callback = function() {
      dS(i, o, f), typeof v != "function" && (na === null ? na = /* @__PURE__ */ new Set([this]) : na.add(this));
      var j = f.stack;
      this.componentDidCatch(f.value, {
        componentStack: j !== null ? j : ""
      });
    });
  }
  function jN(a, i, o, f, v) {
    if (o.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
      if (i = o.alternate, i !== null && Mi(
        i,
        o,
        v,
        !0
      ), o = an.current, o !== null) {
        switch (o.tag) {
          case 31:
          case 13:
            return _n === null ? Uc() : o.alternate === null && ce === 0 && (ce = 3), o.flags &= -257, o.flags |= 65536, o.lanes = v, f === yc ? o.flags |= 16384 : (i = o.updateQueue, i === null ? o.updateQueue = /* @__PURE__ */ new Set([f]) : i.add(f), Xd(a, f, v)), !1;
          case 22:
            return o.flags |= 65536, f === yc ? o.flags |= 16384 : (i = o.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([f])
            }, o.updateQueue = i) : (o = i.retryQueue, o === null ? i.retryQueue = /* @__PURE__ */ new Set([f]) : o.add(f)), Xd(a, f, v)), !1;
        }
        throw Error(r(435, o.tag));
      }
      return Xd(a, f, v), Uc(), !1;
    }
    if (Rt)
      return i = an.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = v, f !== kh && (a = Error(r(422), { cause: f }), ao(gn(a, o)))) : (f !== kh && (i = Error(r(423), {
        cause: f
      }), ao(
        gn(i, o)
      )), a = a.current.alternate, a.flags |= 65536, v &= -v, a.lanes |= v, f = gn(f, o), v = Sd(
        a.stateNode,
        f,
        v
      ), Qh(a, v), ce !== 4 && (ce = 2)), !1;
    var m = Error(r(520), { cause: f });
    if (m = gn(m, o), Ao === null ? Ao = [m] : Ao.push(m), ce !== 4 && (ce = 2), i === null) return !0;
    f = gn(f, o), o = i;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, a = v & -v, o.lanes |= a, a = Sd(o.stateNode, f, a), Qh(o, a), !1;
        case 1:
          if (i = o.type, m = o.stateNode, (o.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (na === null || !na.has(m))))
            return o.flags |= 65536, v &= -v, o.lanes |= v, v = vS(v), pS(
              v,
              a,
              o,
              f
            ), Qh(o, v), !1;
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var _d = Error(r(461)), pe = !1;
  function De(a, i, o, f) {
    i.child = a === null ? bx(i, null, o, f) : $a(
      i,
      a.child,
      o,
      f
    );
  }
  function yS(a, i, o, f, v) {
    o = o.render;
    var m = i.ref;
    if ("ref" in f) {
      var _ = {};
      for (var j in f)
        j !== "ref" && (_[j] = f[j]);
    } else _ = f;
    return Na(i), f = rd(
      a,
      i,
      o,
      _,
      m,
      v
    ), j = ad(), a !== null && !pe ? (id(a, i, v), vr(a, i, v)) : (Rt && j && Bh(i), i.flags |= 1, De(a, i, f, v), i.child);
  }
  function mS(a, i, o, f, v) {
    if (a === null) {
      var m = o.type;
      return typeof m == "function" && !qh(m) && m.defaultProps === void 0 && o.compare === null ? (i.tag = 15, i.type = m, gS(
        a,
        i,
        m,
        f,
        v
      )) : (a = fc(
        o.type,
        null,
        f,
        i,
        i.mode,
        v
      ), a.ref = i.ref, a.return = i, i.child = a);
    }
    if (m = a.child, !Cd(a, v)) {
      var _ = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : eo, o(_, f) && a.ref === i.ref)
        return vr(a, i, v);
    }
    return i.flags |= 1, a = lr(m, f), a.ref = i.ref, a.return = i, i.child = a;
  }
  function gS(a, i, o, f, v) {
    if (a !== null) {
      var m = a.memoizedProps;
      if (eo(m, f) && a.ref === i.ref)
        if (pe = !1, i.pendingProps = f = m, Cd(a, v))
          (a.flags & 131072) !== 0 && (pe = !0);
        else
          return i.lanes = a.lanes, vr(a, i, v);
    }
    return Od(
      a,
      i,
      o,
      f,
      v
    );
  }
  function bS(a, i, o, f) {
    var v = f.children, m = a !== null ? a.memoizedState : null;
    if (a === null && i.stateNode === null && (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), f.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (m = m !== null ? m.baseLanes | o : o, a !== null) {
          for (f = i.child = a.child, v = 0; f !== null; )
            v = v | f.lanes | f.childLanes, f = f.sibling;
          f = v & ~m;
        } else f = 0, i.child = null;
        return xS(
          a,
          i,
          m,
          o,
          f
        );
      }
      if ((o & 536870912) !== 0)
        i.memoizedState = { baseLanes: 0, cachePool: null }, a !== null && vc(
          i,
          m !== null ? m.cachePool : null
        ), m !== null ? _x(i, m) : Jh(), Ox(i);
      else
        return f = i.lanes = 536870912, xS(
          a,
          i,
          m !== null ? m.baseLanes | o : o,
          o,
          f
        );
    } else
      m !== null ? (vc(i, m.cachePool), _x(i, m), Wr(), i.memoizedState = null) : (a !== null && vc(i, null), Jh(), Wr());
    return De(a, i, v, o), i.child;
  }
  function mo(a, i) {
    return a !== null && a.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function xS(a, i, o, f, v) {
    var m = Kh();
    return m = m === null ? null : { parent: de._currentValue, pool: m }, i.memoizedState = {
      baseLanes: o,
      cachePool: m
    }, a !== null && vc(i, null), Jh(), Ox(i), a !== null && Mi(a, i, f, !0), i.childLanes = v, null;
  }
  function Cc(a, i) {
    return i = Pc(
      { mode: i.mode, children: i.children },
      a.mode
    ), i.ref = a.ref, a.child = i, i.return = a, i;
  }
  function SS(a, i, o) {
    return $a(i, a.child, null, o), a = Cc(i, i.pendingProps), a.flags |= 2, un(i), i.memoizedState = null, a;
  }
  function CN(a, i, o) {
    var f = i.pendingProps, v = (i.flags & 128) !== 0;
    if (i.flags &= -129, a === null) {
      if (Rt) {
        if (f.mode === "hidden")
          return a = Cc(i, f), i.lanes = 536870912, mo(null, a);
        if (ed(i), (a = ee) ? (a = N_(
          a,
          Sn
        ), a = a !== null && a.data === "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: Gr !== null ? { id: Yn, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, o = ax(a), o.return = i, i.child = o, je = i, ee = null)) : a = null, a === null) throw Xr(i);
        return i.lanes = 536870912, null;
      }
      return Cc(i, f);
    }
    var m = a.memoizedState;
    if (m !== null) {
      var _ = m.dehydrated;
      if (ed(i), v)
        if (i.flags & 256)
          i.flags &= -257, i = SS(
            a,
            i,
            o
          );
        else if (i.memoizedState !== null)
          i.child = a.child, i.flags |= 128, i = null;
        else throw Error(r(558));
      else if (pe || Mi(a, i, o, !1), v = (o & a.childLanes) !== 0, pe || v) {
        if (f = Ft, f !== null && (_ = s1(f, o), _ !== 0 && _ !== m.retryLane))
          throw m.retryLane = _, ja(a, _), Qe(f, a, _), _d;
        Uc(), i = SS(
          a,
          i,
          o
        );
      } else
        a = m.treeContext, ee = On(_.nextSibling), je = i, Rt = !0, Yr = null, Sn = !1, a !== null && ox(i, a), i = Cc(i, f), i.flags |= 4096;
      return i;
    }
    return a = lr(a.child, {
      mode: f.mode,
      children: f.children
    }), a.ref = i.ref, i.child = a, a.return = i, a;
  }
  function Dc(a, i) {
    var o = i.ref;
    if (o === null)
      a !== null && a.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof o != "function" && typeof o != "object")
        throw Error(r(284));
      (a === null || a.ref !== o) && (i.flags |= 4194816);
    }
  }
  function Od(a, i, o, f, v) {
    return Na(i), o = rd(
      a,
      i,
      o,
      f,
      void 0,
      v
    ), f = ad(), a !== null && !pe ? (id(a, i, v), vr(a, i, v)) : (Rt && f && Bh(i), i.flags |= 1, De(a, i, o, v), i.child);
  }
  function _S(a, i, o, f, v, m) {
    return Na(i), i.updateQueue = null, o = wx(
      i,
      f,
      o,
      v
    ), Ax(a), f = ad(), a !== null && !pe ? (id(a, i, m), vr(a, i, m)) : (Rt && f && Bh(i), i.flags |= 1, De(a, i, o, m), i.child);
  }
  function OS(a, i, o, f, v) {
    if (Na(i), i.stateNode === null) {
      var m = Ai, _ = o.contextType;
      typeof _ == "object" && _ !== null && (m = Ce(_)), m = new o(f, m), i.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = xd, i.stateNode = m, m._reactInternals = i, m = i.stateNode, m.props = f, m.state = i.memoizedState, m.refs = {}, Fh(i), _ = o.contextType, m.context = typeof _ == "object" && _ !== null ? Ce(_) : Ai, m.state = i.memoizedState, _ = o.getDerivedStateFromProps, typeof _ == "function" && (bd(
        i,
        o,
        _,
        f
      ), m.state = i.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (_ = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), _ !== m.state && xd.enqueueReplaceState(m, m.state, null), so(i, f, m, v), fo(), m.state = i.memoizedState), typeof m.componentDidMount == "function" && (i.flags |= 4194308), f = !0;
    } else if (a === null) {
      m = i.stateNode;
      var j = i.memoizedProps, q = La(o, j);
      m.props = q;
      var Y = m.context, J = o.contextType;
      _ = Ai, typeof J == "object" && J !== null && (_ = Ce(J));
      var rt = o.getDerivedStateFromProps;
      J = typeof rt == "function" || typeof m.getSnapshotBeforeUpdate == "function", j = i.pendingProps !== j, J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (j || Y !== _) && cS(
        i,
        m,
        f,
        _
      ), Vr = !1;
      var X = i.memoizedState;
      m.state = X, so(i, f, m, v), fo(), Y = i.memoizedState, j || X !== Y || Vr ? (typeof rt == "function" && (bd(
        i,
        o,
        rt,
        f
      ), Y = i.memoizedState), (q = Vr || lS(
        i,
        o,
        q,
        f,
        X,
        Y,
        _
      )) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = Y), m.props = f, m.state = Y, m.context = _, f = q) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
    } else {
      m = i.stateNode, Zh(a, i), _ = i.memoizedProps, J = La(o, _), m.props = J, rt = i.pendingProps, X = m.context, Y = o.contextType, q = Ai, typeof Y == "object" && Y !== null && (q = Ce(Y)), j = o.getDerivedStateFromProps, (Y = typeof j == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (_ !== rt || X !== q) && cS(
        i,
        m,
        f,
        q
      ), Vr = !1, X = i.memoizedState, m.state = X, so(i, f, m, v), fo();
      var Q = i.memoizedState;
      _ !== rt || X !== Q || Vr || a !== null && a.dependencies !== null && hc(a.dependencies) ? (typeof j == "function" && (bd(
        i,
        o,
        j,
        f
      ), Q = i.memoizedState), (J = Vr || lS(
        i,
        o,
        J,
        f,
        X,
        Q,
        q
      ) || a !== null && a.dependencies !== null && hc(a.dependencies)) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(f, Q, q), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        f,
        Q,
        q
      )), typeof m.componentDidUpdate == "function" && (i.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = Q), m.props = f, m.state = Q, m.context = q, f = J) : (typeof m.componentDidUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || _ === a.memoizedProps && X === a.memoizedState || (i.flags |= 1024), f = !1);
    }
    return m = f, Dc(a, i), f = (i.flags & 128) !== 0, m || f ? (m = i.stateNode, o = f && typeof o.getDerivedStateFromError != "function" ? null : m.render(), i.flags |= 1, a !== null && f ? (i.child = $a(
      i,
      a.child,
      null,
      v
    ), i.child = $a(
      i,
      null,
      o,
      v
    )) : De(a, i, o, v), i.memoizedState = m.state, a = i.child) : a = vr(
      a,
      i,
      v
    ), a;
  }
  function AS(a, i, o, f) {
    return Da(), i.flags |= 256, De(a, i, o, f), i.child;
  }
  var Ad = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function wd(a) {
    return { baseLanes: a, cachePool: dx() };
  }
  function Td(a, i, o) {
    return a = a !== null ? a.childLanes & ~o : 0, i && (a |= ln), a;
  }
  function wS(a, i, o) {
    var f = i.pendingProps, v = !1, m = (i.flags & 128) !== 0, _;
    if ((_ = m) || (_ = a !== null && a.memoizedState === null ? !1 : (se.current & 2) !== 0), _ && (v = !0, i.flags &= -129), _ = (i.flags & 32) !== 0, i.flags &= -33, a === null) {
      if (Rt) {
        if (v ? Qr(i) : Wr(), (a = ee) ? (a = N_(
          a,
          Sn
        ), a = a !== null && a.data !== "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: Gr !== null ? { id: Yn, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, o = ax(a), o.return = i, i.child = o, je = i, ee = null)) : a = null, a === null) throw Xr(i);
        return lv(a) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var j = f.children;
      return f = f.fallback, v ? (Wr(), v = i.mode, j = Pc(
        { mode: "hidden", children: j },
        v
      ), f = Ca(
        f,
        v,
        o,
        null
      ), j.return = i, f.return = i, j.sibling = f, i.child = j, f = i.child, f.memoizedState = wd(o), f.childLanes = Td(
        a,
        _,
        o
      ), i.memoizedState = Ad, mo(null, f)) : (Qr(i), Ed(i, j));
    }
    var q = a.memoizedState;
    if (q !== null && (j = q.dehydrated, j !== null)) {
      if (m)
        i.flags & 256 ? (Qr(i), i.flags &= -257, i = Md(
          a,
          i,
          o
        )) : i.memoizedState !== null ? (Wr(), i.child = a.child, i.flags |= 128, i = null) : (Wr(), j = f.fallback, v = i.mode, f = Pc(
          { mode: "visible", children: f.children },
          v
        ), j = Ca(
          j,
          v,
          o,
          null
        ), j.flags |= 2, f.return = i, j.return = i, f.sibling = j, i.child = f, $a(
          i,
          a.child,
          null,
          o
        ), f = i.child, f.memoizedState = wd(o), f.childLanes = Td(
          a,
          _,
          o
        ), i.memoizedState = Ad, i = mo(null, f));
      else if (Qr(i), lv(j)) {
        if (_ = j.nextSibling && j.nextSibling.dataset, _) var Y = _.dgst;
        _ = Y, f = Error(r(419)), f.stack = "", f.digest = _, ao({ value: f, source: null, stack: null }), i = Md(
          a,
          i,
          o
        );
      } else if (pe || Mi(a, i, o, !1), _ = (o & a.childLanes) !== 0, pe || _) {
        if (_ = Ft, _ !== null && (f = s1(_, o), f !== 0 && f !== q.retryLane))
          throw q.retryLane = f, ja(a, f), Qe(_, a, f), _d;
        ov(j) || Uc(), i = Md(
          a,
          i,
          o
        );
      } else
        ov(j) ? (i.flags |= 192, i.child = a.child, i = null) : (a = q.treeContext, ee = On(
          j.nextSibling
        ), je = i, Rt = !0, Yr = null, Sn = !1, a !== null && ox(i, a), i = Ed(
          i,
          f.children
        ), i.flags |= 4096);
      return i;
    }
    return v ? (Wr(), j = f.fallback, v = i.mode, q = a.child, Y = q.sibling, f = lr(q, {
      mode: "hidden",
      children: f.children
    }), f.subtreeFlags = q.subtreeFlags & 65011712, Y !== null ? j = lr(
      Y,
      j
    ) : (j = Ca(
      j,
      v,
      o,
      null
    ), j.flags |= 2), j.return = i, f.return = i, f.sibling = j, i.child = f, mo(null, f), f = i.child, j = a.child.memoizedState, j === null ? j = wd(o) : (v = j.cachePool, v !== null ? (q = de._currentValue, v = v.parent !== q ? { parent: q, pool: q } : v) : v = dx(), j = {
      baseLanes: j.baseLanes | o,
      cachePool: v
    }), f.memoizedState = j, f.childLanes = Td(
      a,
      _,
      o
    ), i.memoizedState = Ad, mo(a.child, f)) : (Qr(i), o = a.child, a = o.sibling, o = lr(o, {
      mode: "visible",
      children: f.children
    }), o.return = i, o.sibling = null, a !== null && (_ = i.deletions, _ === null ? (i.deletions = [a], i.flags |= 16) : _.push(a)), i.child = o, i.memoizedState = null, o);
  }
  function Ed(a, i) {
    return i = Pc(
      { mode: "visible", children: i },
      a.mode
    ), i.return = a, a.child = i;
  }
  function Pc(a, i) {
    return a = rn(22, a, null, i), a.lanes = 0, a;
  }
  function Md(a, i, o) {
    return $a(i, a.child, null, o), a = Ed(
      i,
      i.pendingProps.children
    ), a.flags |= 2, i.memoizedState = null, a;
  }
  function TS(a, i, o) {
    a.lanes |= i;
    var f = a.alternate;
    f !== null && (f.lanes |= i), Ih(a.return, i, o);
  }
  function jd(a, i, o, f, v, m) {
    var _ = a.memoizedState;
    _ === null ? a.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: f,
      tail: o,
      tailMode: v,
      treeForkCount: m
    } : (_.isBackwards = i, _.rendering = null, _.renderingStartTime = 0, _.last = f, _.tail = o, _.tailMode = v, _.treeForkCount = m);
  }
  function ES(a, i, o) {
    var f = i.pendingProps, v = f.revealOrder, m = f.tail;
    f = f.children;
    var _ = se.current, j = (_ & 2) !== 0;
    if (j ? (_ = _ & 1 | 2, i.flags |= 128) : _ &= 1, et(se, _), De(a, i, f, o), f = Rt ? ro : 0, !j && a !== null && (a.flags & 128) !== 0)
      t: for (a = i.child; a !== null; ) {
        if (a.tag === 13)
          a.memoizedState !== null && TS(a, o, i);
        else if (a.tag === 19)
          TS(a, o, i);
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
        for (o = i.child, v = null; o !== null; )
          a = o.alternate, a !== null && xc(a) === null && (v = o), o = o.sibling;
        o = v, o === null ? (v = i.child, i.child = null) : (v = o.sibling, o.sibling = null), jd(
          i,
          !1,
          v,
          o,
          m,
          f
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (o = null, v = i.child, i.child = null; v !== null; ) {
          if (a = v.alternate, a !== null && xc(a) === null) {
            i.child = v;
            break;
          }
          a = v.sibling, v.sibling = o, o = v, v = a;
        }
        jd(
          i,
          !0,
          o,
          null,
          m,
          f
        );
        break;
      case "together":
        jd(
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
  function vr(a, i, o) {
    if (a !== null && (i.dependencies = a.dependencies), ea |= i.lanes, (o & i.childLanes) === 0)
      if (a !== null) {
        if (Mi(
          a,
          i,
          o,
          !1
        ), (o & i.childLanes) === 0)
          return null;
      } else return null;
    if (a !== null && i.child !== a.child)
      throw Error(r(153));
    if (i.child !== null) {
      for (a = i.child, o = lr(a, a.pendingProps), i.child = o, o.return = i; a.sibling !== null; )
        a = a.sibling, o = o.sibling = lr(a, a.pendingProps), o.return = i;
      o.sibling = null;
    }
    return i.child;
  }
  function Cd(a, i) {
    return (a.lanes & i) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && hc(a)));
  }
  function DN(a, i, o) {
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
          return i.flags |= 128, ed(i), null;
        break;
      case 13:
        var f = i.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (Qr(i), i.flags |= 128, null) : (o & i.child.childLanes) !== 0 ? wS(a, i, o) : (Qr(i), a = vr(
            a,
            i,
            o
          ), a !== null ? a.sibling : null);
        Qr(i);
        break;
      case 19:
        var v = (a.flags & 128) !== 0;
        if (f = (o & i.childLanes) !== 0, f || (Mi(
          a,
          i,
          o,
          !1
        ), f = (o & i.childLanes) !== 0), v) {
          if (f)
            return ES(
              a,
              i,
              o
            );
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), et(se, se.current), f) break;
        return null;
      case 22:
        return i.lanes = 0, bS(
          a,
          i,
          o,
          i.pendingProps
        );
      case 24:
        Kr(i, de, a.memoizedState.cache);
    }
    return vr(a, i, o);
  }
  function MS(a, i, o) {
    if (a !== null)
      if (a.memoizedProps !== i.pendingProps)
        pe = !0;
      else {
        if (!Cd(a, o) && (i.flags & 128) === 0)
          return pe = !1, DN(
            a,
            i,
            o
          );
        pe = (a.flags & 131072) !== 0;
      }
    else
      pe = !1, Rt && (i.flags & 1048576) !== 0 && ux(i, ro, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        t: {
          var f = i.pendingProps;
          if (a = qa(i.elementType), i.type = a, typeof a == "function")
            qh(a) ? (f = La(a, f), i.tag = 1, i = OS(
              null,
              i,
              a,
              f,
              o
            )) : (i.tag = 0, i = Od(
              null,
              i,
              a,
              f,
              o
            ));
          else {
            if (a != null) {
              var v = a.$$typeof;
              if (v === C) {
                i.tag = 11, i = yS(
                  null,
                  i,
                  a,
                  f,
                  o
                );
                break t;
              } else if (v === D) {
                i.tag = 14, i = mS(
                  null,
                  i,
                  a,
                  f,
                  o
                );
                break t;
              }
            }
            throw i = Z(a) || a, Error(r(306, i, ""));
          }
        }
        return i;
      case 0:
        return Od(
          a,
          i,
          i.type,
          i.pendingProps,
          o
        );
      case 1:
        return f = i.type, v = La(
          f,
          i.pendingProps
        ), OS(
          a,
          i,
          f,
          v,
          o
        );
      case 3:
        t: {
          if (kt(
            i,
            i.stateNode.containerInfo
          ), a === null) throw Error(r(387));
          f = i.pendingProps;
          var m = i.memoizedState;
          v = m.element, Zh(a, i), so(i, f, null, o);
          var _ = i.memoizedState;
          if (f = _.cache, Kr(i, de, f), f !== m.cache && Gh(
            i,
            [de],
            o,
            !0
          ), fo(), f = _.element, m.isDehydrated)
            if (m = {
              element: f,
              isDehydrated: !1,
              cache: _.cache
            }, i.updateQueue.baseState = m, i.memoizedState = m, i.flags & 256) {
              i = AS(
                a,
                i,
                f,
                o
              );
              break t;
            } else if (f !== v) {
              v = gn(
                Error(r(424)),
                i
              ), ao(v), i = AS(
                a,
                i,
                f,
                o
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
              for (ee = On(a.firstChild), je = i, Rt = !0, Yr = null, Sn = !0, o = bx(
                i,
                null,
                f,
                o
              ), i.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
            }
          else {
            if (Da(), f === v) {
              i = vr(
                a,
                i,
                o
              );
              break t;
            }
            De(a, i, f, o);
          }
          i = i.child;
        }
        return i;
      case 26:
        return Dc(a, i), a === null ? (o = L_(
          i.type,
          null,
          i.pendingProps,
          null
        )) ? i.memoizedState = o : Rt || (o = i.type, a = i.pendingProps, f = Vc(
          mt.current
        ).createElement(o), f[Me] = i, f[Ye] = a, Pe(f, o, a), Ae(f), i.stateNode = f) : i.memoizedState = L_(
          i.type,
          a.memoizedProps,
          i.pendingProps,
          a.memoizedState
        ), null;
      case 27:
        return xt(i), a === null && Rt && (f = i.stateNode = z_(
          i.type,
          i.pendingProps,
          mt.current
        ), je = i, Sn = !0, v = ee, ua(i.type) ? (cv = v, ee = On(f.firstChild)) : ee = v), De(
          a,
          i,
          i.pendingProps.children,
          o
        ), Dc(a, i), a === null && (i.flags |= 4194304), i.child;
      case 5:
        return a === null && Rt && ((v = f = ee) && (f = oR(
          f,
          i.type,
          i.pendingProps,
          Sn
        ), f !== null ? (i.stateNode = f, je = i, ee = On(f.firstChild), Sn = !1, v = !0) : v = !1), v || Xr(i)), xt(i), v = i.type, m = i.pendingProps, _ = a !== null ? a.memoizedProps : null, f = m.children, av(v, m) ? f = null : _ !== null && av(v, _) && (i.flags |= 32), i.memoizedState !== null && (v = rd(
          a,
          i,
          _N,
          null,
          null,
          o
        ), Po._currentValue = v), Dc(a, i), De(a, i, f, o), i.child;
      case 6:
        return a === null && Rt && ((a = o = ee) && (o = lR(
          o,
          i.pendingProps,
          Sn
        ), o !== null ? (i.stateNode = o, je = i, ee = null, a = !0) : a = !1), a || Xr(i)), null;
      case 13:
        return wS(a, i, o);
      case 4:
        return kt(
          i,
          i.stateNode.containerInfo
        ), f = i.pendingProps, a === null ? i.child = $a(
          i,
          null,
          f,
          o
        ) : De(a, i, f, o), i.child;
      case 11:
        return yS(
          a,
          i,
          i.type,
          i.pendingProps,
          o
        );
      case 7:
        return De(
          a,
          i,
          i.pendingProps,
          o
        ), i.child;
      case 8:
        return De(
          a,
          i,
          i.pendingProps.children,
          o
        ), i.child;
      case 12:
        return De(
          a,
          i,
          i.pendingProps.children,
          o
        ), i.child;
      case 10:
        return f = i.pendingProps, Kr(i, i.type, f.value), De(a, i, f.children, o), i.child;
      case 9:
        return v = i.type._context, f = i.pendingProps.children, Na(i), v = Ce(v), f = f(v), i.flags |= 1, De(a, i, f, o), i.child;
      case 14:
        return mS(
          a,
          i,
          i.type,
          i.pendingProps,
          o
        );
      case 15:
        return gS(
          a,
          i,
          i.type,
          i.pendingProps,
          o
        );
      case 19:
        return ES(a, i, o);
      case 31:
        return CN(a, i, o);
      case 22:
        return bS(
          a,
          i,
          o,
          i.pendingProps
        );
      case 24:
        return Na(i), f = Ce(de), a === null ? (v = Kh(), v === null && (v = Ft, m = Yh(), v.pooledCache = m, m.refCount++, m !== null && (v.pooledCacheLanes |= o), v = m), i.memoizedState = { parent: f, cache: v }, Fh(i), Kr(i, de, v)) : ((a.lanes & o) !== 0 && (Zh(a, i), so(i, null, null, o), fo()), v = a.memoizedState, m = i.memoizedState, v.parent !== f ? (v = { parent: f, cache: f }, i.memoizedState = v, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = v), Kr(i, de, f)) : (f = m.cache, Kr(i, de, f), f !== v.cache && Gh(
          i,
          [de],
          o,
          !0
        ))), De(
          a,
          i,
          i.pendingProps.children,
          o
        ), i.child;
      case 29:
        throw i.pendingProps;
    }
    throw Error(r(156, i.tag));
  }
  function pr(a) {
    a.flags |= 4;
  }
  function Dd(a, i, o, f, v) {
    if ((i = (a.mode & 32) !== 0) && (i = !1), i) {
      if (a.flags |= 16777216, (v & 335544128) === v)
        if (a.stateNode.complete) a.flags |= 8192;
        else if (e_()) a.flags |= 8192;
        else
          throw za = yc, Vh;
    } else a.flags &= -16777217;
  }
  function jS(a, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      a.flags &= -16777217;
    else if (a.flags |= 16777216, !G_(i))
      if (e_()) a.flags |= 8192;
      else
        throw za = yc, Vh;
  }
  function Nc(a, i) {
    i !== null && (a.flags |= 4), a.flags & 16384 && (i = a.tag !== 22 ? l1() : 536870912, a.lanes |= i, ki |= i);
  }
  function go(a, i) {
    if (!Rt)
      switch (a.tailMode) {
        case "hidden":
          i = a.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? a.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = a.tail;
          for (var f = null; o !== null; )
            o.alternate !== null && (f = o), o = o.sibling;
          f === null ? i || a.tail === null ? a.tail = null : a.tail.sibling = null : f.sibling = null;
      }
  }
  function ne(a) {
    var i = a.alternate !== null && a.alternate.child === a.child, o = 0, f = 0;
    if (i)
      for (var v = a.child; v !== null; )
        o |= v.lanes | v.childLanes, f |= v.subtreeFlags & 65011712, f |= v.flags & 65011712, v.return = a, v = v.sibling;
    else
      for (v = a.child; v !== null; )
        o |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = a, v = v.sibling;
    return a.subtreeFlags |= f, a.childLanes = o, i;
  }
  function PN(a, i, o) {
    var f = i.pendingProps;
    switch (Lh(i), i.tag) {
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
        return o = i.stateNode, f = null, a !== null && (f = a.memoizedState.cache), i.memoizedState.cache !== f && (i.flags |= 2048), sr(de), ct(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (a === null || a.child === null) && (Ei(i) ? pr(i) : a === null || a.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Uh())), ne(i), null;
      case 26:
        var v = i.type, m = i.memoizedState;
        return a === null ? (pr(i), m !== null ? (ne(i), jS(i, m)) : (ne(i), Dd(
          i,
          v,
          null,
          f,
          o
        ))) : m ? m !== a.memoizedState ? (pr(i), ne(i), jS(i, m)) : (ne(i), i.flags &= -16777217) : (a = a.memoizedProps, a !== f && pr(i), ne(i), Dd(
          i,
          v,
          a,
          f,
          o
        )), null;
      case 27:
        if (St(i), o = mt.current, v = i.type, a !== null && i.stateNode != null)
          a.memoizedProps !== f && pr(i);
        else {
          if (!f) {
            if (i.stateNode === null)
              throw Error(r(166));
            return ne(i), null;
          }
          a = ft.current, Ei(i) ? lx(i) : (a = z_(v, f, o), i.stateNode = a, pr(i));
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
          if (m = ft.current, Ei(i))
            lx(i);
          else {
            var _ = Vc(
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
        return ne(i), Dd(
          i,
          i.type,
          a === null ? null : a.memoizedProps,
          i.pendingProps,
          o
        ), null;
      case 6:
        if (a && i.stateNode != null)
          a.memoizedProps !== f && pr(i);
        else {
          if (typeof f != "string" && i.stateNode === null)
            throw Error(r(166));
          if (a = mt.current, Ei(i)) {
            if (a = i.stateNode, o = i.memoizedProps, f = null, v = je, v !== null)
              switch (v.tag) {
                case 27:
                case 5:
                  f = v.memoizedProps;
              }
            a[Me] = i, a = !!(a.nodeValue === o || f !== null && f.suppressHydrationWarning === !0 || w_(a.nodeValue, o)), a || Xr(i, !0);
          } else
            a = Vc(a).createTextNode(
              f
            ), a[Me] = i, i.stateNode = a;
        }
        return ne(i), null;
      case 31:
        if (o = i.memoizedState, a === null || a.memoizedState !== null) {
          if (f = Ei(i), o !== null) {
            if (a === null) {
              if (!f) throw Error(r(318));
              if (a = i.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(557));
              a[Me] = i;
            } else
              Da(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            ne(i), a = !1;
          } else
            o = Uh(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = o), a = !0;
          if (!a)
            return i.flags & 256 ? (un(i), i) : (un(i), null);
          if ((i.flags & 128) !== 0)
            throw Error(r(558));
        }
        return ne(i), null;
      case 13:
        if (f = i.memoizedState, a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
          if (v = Ei(i), f !== null && f.dehydrated !== null) {
            if (a === null) {
              if (!v) throw Error(r(318));
              if (v = i.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(r(317));
              v[Me] = i;
            } else
              Da(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            ne(i), v = !1;
          } else
            v = Uh(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = v), v = !0;
          if (!v)
            return i.flags & 256 ? (un(i), i) : (un(i), null);
        }
        return un(i), (i.flags & 128) !== 0 ? (i.lanes = o, i) : (o = f !== null, a = a !== null && a.memoizedState !== null, o && (f = i.child, v = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (v = f.alternate.memoizedState.cachePool.pool), m = null, f.memoizedState !== null && f.memoizedState.cachePool !== null && (m = f.memoizedState.cachePool.pool), m !== v && (f.flags |= 2048)), o !== a && o && (i.child.flags |= 8192), Nc(i, i.updateQueue), ne(i), null);
      case 4:
        return ct(), a === null && Jd(i.stateNode.containerInfo), ne(i), null;
      case 10:
        return sr(i.type), ne(i), null;
      case 19:
        if (U(se), f = i.memoizedState, f === null) return ne(i), null;
        if (v = (i.flags & 128) !== 0, m = f.rendering, m === null)
          if (v) go(f, !1);
          else {
            if (ce !== 0 || a !== null && (a.flags & 128) !== 0)
              for (a = i.child; a !== null; ) {
                if (m = xc(a), m !== null) {
                  for (i.flags |= 128, go(f, !1), a = m.updateQueue, i.updateQueue = a, Nc(i, a), i.subtreeFlags = 0, a = o, o = i.child; o !== null; )
                    rx(o, a), o = o.sibling;
                  return et(
                    se,
                    se.current & 1 | 2
                  ), Rt && cr(i, f.treeForkCount), i.child;
                }
                a = a.sibling;
              }
            f.tail !== null && $e() > Bc && (i.flags |= 128, v = !0, go(f, !1), i.lanes = 4194304);
          }
        else {
          if (!v)
            if (a = xc(m), a !== null) {
              if (i.flags |= 128, v = !0, a = a.updateQueue, i.updateQueue = a, Nc(i, a), go(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !Rt)
                return ne(i), null;
            } else
              2 * $e() - f.renderingStartTime > Bc && o !== 536870912 && (i.flags |= 128, v = !0, go(f, !1), i.lanes = 4194304);
          f.isBackwards ? (m.sibling = i.child, i.child = m) : (a = f.last, a !== null ? a.sibling = m : i.child = m, f.last = m);
        }
        return f.tail !== null ? (a = f.tail, f.rendering = a, f.tail = a.sibling, f.renderingStartTime = $e(), a.sibling = null, o = se.current, et(
          se,
          v ? o & 1 | 2 : o & 1
        ), Rt && cr(i, f.treeForkCount), a) : (ne(i), null);
      case 22:
      case 23:
        return un(i), td(), f = i.memoizedState !== null, a !== null ? a.memoizedState !== null !== f && (i.flags |= 8192) : f && (i.flags |= 8192), f ? (o & 536870912) !== 0 && (i.flags & 128) === 0 && (ne(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : ne(i), o = i.updateQueue, o !== null && Nc(i, o.retryQueue), o = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048), a !== null && U(Ra), null;
      case 24:
        return o = null, a !== null && (o = a.memoizedState.cache), i.memoizedState.cache !== o && (i.flags |= 2048), sr(de), ne(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function NN(a, i) {
    switch (Lh(i), i.tag) {
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
          if (un(i), i.alternate === null)
            throw Error(r(340));
          Da();
        }
        return a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 13:
        if (un(i), a = i.memoizedState, a !== null && a.dehydrated !== null) {
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
        return un(i), td(), a !== null && U(Ra), a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 24:
        return sr(de), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function CS(a, i) {
    switch (Lh(i), i.tag) {
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
        i.memoizedState !== null && un(i);
        break;
      case 13:
        un(i);
        break;
      case 19:
        U(se);
        break;
      case 10:
        sr(i.type);
        break;
      case 22:
      case 23:
        un(i), td(), a !== null && U(Ra);
        break;
      case 24:
        sr(de);
    }
  }
  function bo(a, i) {
    try {
      var o = i.updateQueue, f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var v = f.next;
        o = v;
        do {
          if ((o.tag & a) === a) {
            f = void 0;
            var m = o.create, _ = o.inst;
            f = m(), _.destroy = f;
          }
          o = o.next;
        } while (o !== v);
      }
    } catch (j) {
      Gt(i, i.return, j);
    }
  }
  function Jr(a, i, o) {
    try {
      var f = i.updateQueue, v = f !== null ? f.lastEffect : null;
      if (v !== null) {
        var m = v.next;
        f = m;
        do {
          if ((f.tag & a) === a) {
            var _ = f.inst, j = _.destroy;
            if (j !== void 0) {
              _.destroy = void 0, v = i;
              var q = o, Y = j;
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
  function DS(a) {
    var i = a.updateQueue;
    if (i !== null) {
      var o = a.stateNode;
      try {
        Sx(i, o);
      } catch (f) {
        Gt(a, a.return, f);
      }
    }
  }
  function PS(a, i, o) {
    o.props = La(
      a.type,
      a.memoizedProps
    ), o.state = a.memoizedState;
    try {
      o.componentWillUnmount();
    } catch (f) {
      Gt(a, i, f);
    }
  }
  function xo(a, i) {
    try {
      var o = a.ref;
      if (o !== null) {
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
        typeof o == "function" ? a.refCleanup = o(f) : o.current = f;
      }
    } catch (v) {
      Gt(a, i, v);
    }
  }
  function Kn(a, i) {
    var o = a.ref, f = a.refCleanup;
    if (o !== null)
      if (typeof f == "function")
        try {
          f();
        } catch (v) {
          Gt(a, i, v);
        } finally {
          a.refCleanup = null, a = a.alternate, a != null && (a.refCleanup = null);
        }
      else if (typeof o == "function")
        try {
          o(null);
        } catch (v) {
          Gt(a, i, v);
        }
      else o.current = null;
  }
  function NS(a) {
    var i = a.type, o = a.memoizedProps, f = a.stateNode;
    try {
      t: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          o.autoFocus && f.focus();
          break t;
        case "img":
          o.src ? f.src = o.src : o.srcSet && (f.srcset = o.srcSet);
      }
    } catch (v) {
      Gt(a, a.return, v);
    }
  }
  function Pd(a, i, o) {
    try {
      var f = a.stateNode;
      eR(f, a.type, o, i), f[Ye] = i;
    } catch (v) {
      Gt(a, a.return, v);
    }
  }
  function RS(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 26 || a.tag === 27 && ua(a.type) || a.tag === 4;
  }
  function Nd(a) {
    t: for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || RS(a.return)) return null;
        a = a.return;
      }
      for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.tag === 27 && ua(a.type) || a.flags & 2 || a.child === null || a.tag === 4) continue t;
        a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Rd(a, i, o) {
    var f = a.tag;
    if (f === 5 || f === 6)
      a = a.stateNode, i ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(a, i) : (i = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, i.appendChild(a), o = o._reactRootContainer, o != null || i.onclick !== null || (i.onclick = ur));
    else if (f !== 4 && (f === 27 && ua(a.type) && (o = a.stateNode, i = null), a = a.child, a !== null))
      for (Rd(a, i, o), a = a.sibling; a !== null; )
        Rd(a, i, o), a = a.sibling;
  }
  function Rc(a, i, o) {
    var f = a.tag;
    if (f === 5 || f === 6)
      a = a.stateNode, i ? o.insertBefore(a, i) : o.appendChild(a);
    else if (f !== 4 && (f === 27 && ua(a.type) && (o = a.stateNode), a = a.child, a !== null))
      for (Rc(a, i, o), a = a.sibling; a !== null; )
        Rc(a, i, o), a = a.sibling;
  }
  function qS(a) {
    var i = a.stateNode, o = a.memoizedProps;
    try {
      for (var f = a.type, v = i.attributes; v.length; )
        i.removeAttributeNode(v[0]);
      Pe(i, f, o), i[Me] = a, i[Ye] = o;
    } catch (m) {
      Gt(a, a.return, m);
    }
  }
  var yr = !1, ye = !1, qd = !1, zS = typeof WeakSet == "function" ? WeakSet : Set, we = null;
  function RN(a, i) {
    if (a = a.containerInfo, nv = ef, a = V1(a), Mh(a)) {
      if ("selectionStart" in a)
        var o = {
          start: a.selectionStart,
          end: a.selectionEnd
        };
      else
        t: {
          o = (o = a.ownerDocument) && o.defaultView || window;
          var f = o.getSelection && o.getSelection();
          if (f && f.rangeCount !== 0) {
            o = f.anchorNode;
            var v = f.anchorOffset, m = f.focusNode;
            f = f.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break t;
            }
            var _ = 0, j = -1, q = -1, Y = 0, J = 0, rt = a, X = null;
            e: for (; ; ) {
              for (var Q; rt !== o || v !== 0 && rt.nodeType !== 3 || (j = _ + v), rt !== m || f !== 0 && rt.nodeType !== 3 || (q = _ + f), rt.nodeType === 3 && (_ += rt.nodeValue.length), (Q = rt.firstChild) !== null; )
                X = rt, rt = Q;
              for (; ; ) {
                if (rt === a) break e;
                if (X === o && ++Y === v && (j = _), X === m && ++J === f && (q = _), (Q = rt.nextSibling) !== null) break;
                rt = X, X = rt.parentNode;
              }
              rt = Q;
            }
            o = j === -1 || q === -1 ? null : { start: j, end: q };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (rv = { focusedElem: a, selectionRange: o }, ef = !1, we = i; we !== null; )
      if (i = we, a = i.child, (i.subtreeFlags & 1028) !== 0 && a !== null)
        a.return = i, we = a;
      else
        for (; we !== null; ) {
          switch (i = we, m = i.alternate, a = i.flags, i.tag) {
            case 0:
              if ((a & 4) !== 0 && (a = i.updateQueue, a = a !== null ? a.events : null, a !== null))
                for (o = 0; o < a.length; o++)
                  v = a[o], v.ref.impl = v.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((a & 1024) !== 0 && m !== null) {
                a = void 0, o = i, v = m.memoizedProps, m = m.memoizedState, f = o.stateNode;
                try {
                  var dt = La(
                    o.type,
                    v
                  );
                  a = f.getSnapshotBeforeUpdate(
                    dt,
                    m
                  ), f.__reactInternalSnapshotBeforeUpdate = a;
                } catch (gt) {
                  Gt(
                    o,
                    o.return,
                    gt
                  );
                }
              }
              break;
            case 3:
              if ((a & 1024) !== 0) {
                if (a = i.stateNode.containerInfo, o = a.nodeType, o === 9)
                  uv(a);
                else if (o === 1)
                  switch (a.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      uv(a);
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
  function $S(a, i, o) {
    var f = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        gr(a, o), f & 4 && bo(5, o);
        break;
      case 1:
        if (gr(a, o), f & 4)
          if (a = o.stateNode, i === null)
            try {
              a.componentDidMount();
            } catch (_) {
              Gt(o, o.return, _);
            }
          else {
            var v = La(
              o.type,
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
                o,
                o.return,
                _
              );
            }
          }
        f & 64 && DS(o), f & 512 && xo(o, o.return);
        break;
      case 3:
        if (gr(a, o), f & 64 && (a = o.updateQueue, a !== null)) {
          if (i = null, o.child !== null)
            switch (o.child.tag) {
              case 27:
              case 5:
                i = o.child.stateNode;
                break;
              case 1:
                i = o.child.stateNode;
            }
          try {
            Sx(a, i);
          } catch (_) {
            Gt(o, o.return, _);
          }
        }
        break;
      case 27:
        i === null && f & 4 && qS(o);
      case 26:
      case 5:
        gr(a, o), i === null && f & 4 && NS(o), f & 512 && xo(o, o.return);
        break;
      case 12:
        gr(a, o);
        break;
      case 31:
        gr(a, o), f & 4 && kS(a, o);
        break;
      case 13:
        gr(a, o), f & 4 && US(a, o), f & 64 && (a = o.memoizedState, a !== null && (a = a.dehydrated, a !== null && (o = IN.bind(
          null,
          o
        ), cR(a, o))));
        break;
      case 22:
        if (f = o.memoizedState !== null || yr, !f) {
          i = i !== null && i.memoizedState !== null || ye, v = yr;
          var m = ye;
          yr = f, (ye = i) && !m ? br(
            a,
            o,
            (o.subtreeFlags & 8772) !== 0
          ) : gr(a, o), yr = v, ye = m;
        }
        break;
      case 30:
        break;
      default:
        gr(a, o);
    }
  }
  function BS(a) {
    var i = a.alternate;
    i !== null && (a.alternate = null, BS(i)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (i = a.stateNode, i !== null && sh(i)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
  }
  var ae = null, Ke = !1;
  function mr(a, i, o) {
    for (o = o.child; o !== null; )
      LS(a, i, o), o = o.sibling;
  }
  function LS(a, i, o) {
    if (tn && typeof tn.onCommitFiberUnmount == "function")
      try {
        tn.onCommitFiberUnmount(Iu, o);
      } catch {
      }
    switch (o.tag) {
      case 26:
        ye || Kn(o, i), mr(
          a,
          i,
          o
        ), o.memoizedState ? o.memoizedState.count-- : o.stateNode && (o = o.stateNode, o.parentNode.removeChild(o));
        break;
      case 27:
        ye || Kn(o, i);
        var f = ae, v = Ke;
        ua(o.type) && (ae = o.stateNode, Ke = !1), mr(
          a,
          i,
          o
        ), jo(o.stateNode), ae = f, Ke = v;
        break;
      case 5:
        ye || Kn(o, i);
      case 6:
        if (f = ae, v = Ke, ae = null, mr(
          a,
          i,
          o
        ), ae = f, Ke = v, ae !== null)
          if (Ke)
            try {
              (ae.nodeType === 9 ? ae.body : ae.nodeName === "HTML" ? ae.ownerDocument.body : ae).removeChild(o.stateNode);
            } catch (m) {
              Gt(
                o,
                i,
                m
              );
            }
          else
            try {
              ae.removeChild(o.stateNode);
            } catch (m) {
              Gt(
                o,
                i,
                m
              );
            }
        break;
      case 18:
        ae !== null && (Ke ? (a = ae, D_(
          a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
          o.stateNode
        ), Vi(a)) : D_(ae, o.stateNode));
        break;
      case 4:
        f = ae, v = Ke, ae = o.stateNode.containerInfo, Ke = !0, mr(
          a,
          i,
          o
        ), ae = f, Ke = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Jr(2, o, i), ye || Jr(4, o, i), mr(
          a,
          i,
          o
        );
        break;
      case 1:
        ye || (Kn(o, i), f = o.stateNode, typeof f.componentWillUnmount == "function" && PS(
          o,
          i,
          f
        )), mr(
          a,
          i,
          o
        );
        break;
      case 21:
        mr(
          a,
          i,
          o
        );
        break;
      case 22:
        ye = (f = ye) || o.memoizedState !== null, mr(
          a,
          i,
          o
        ), ye = f;
        break;
      default:
        mr(
          a,
          i,
          o
        );
    }
  }
  function kS(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null))) {
      a = a.dehydrated;
      try {
        Vi(a);
      } catch (o) {
        Gt(i, i.return, o);
      }
    }
  }
  function US(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
      try {
        Vi(a);
      } catch (o) {
        Gt(i, i.return, o);
      }
  }
  function qN(a) {
    switch (a.tag) {
      case 31:
      case 13:
      case 19:
        var i = a.stateNode;
        return i === null && (i = a.stateNode = new zS()), i;
      case 22:
        return a = a.stateNode, i = a._retryCache, i === null && (i = a._retryCache = new zS()), i;
      default:
        throw Error(r(435, a.tag));
    }
  }
  function qc(a, i) {
    var o = qN(a);
    i.forEach(function(f) {
      if (!o.has(f)) {
        o.add(f);
        var v = GN.bind(null, a, f);
        f.then(v, v);
      }
    });
  }
  function Ve(a, i) {
    var o = i.deletions;
    if (o !== null)
      for (var f = 0; f < o.length; f++) {
        var v = o[f], m = a, _ = i, j = _;
        t: for (; j !== null; ) {
          switch (j.tag) {
            case 27:
              if (ua(j.type)) {
                ae = j.stateNode, Ke = !1;
                break t;
              }
              break;
            case 5:
              ae = j.stateNode, Ke = !1;
              break t;
            case 3:
            case 4:
              ae = j.stateNode.containerInfo, Ke = !0;
              break t;
          }
          j = j.return;
        }
        if (ae === null) throw Error(r(160));
        LS(m, _, v), ae = null, Ke = !1, m = v.alternate, m !== null && (m.return = null), v.return = null;
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; )
        HS(i, a), i = i.sibling;
  }
  var zn = null;
  function HS(a, i) {
    var o = a.alternate, f = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ve(i, a), Fe(a), f & 4 && (Jr(3, a, a.return), bo(3, a), Jr(5, a, a.return));
        break;
      case 1:
        Ve(i, a), Fe(a), f & 512 && (ye || o === null || Kn(o, o.return)), f & 64 && yr && (a = a.updateQueue, a !== null && (f = a.callbacks, f !== null && (o = a.shared.hiddenCallbacks, a.shared.hiddenCallbacks = o === null ? f : o.concat(f))));
        break;
      case 26:
        var v = zn;
        if (Ve(i, a), Fe(a), f & 512 && (ye || o === null || Kn(o, o.return)), f & 4) {
          var m = o !== null ? o.memoizedState : null;
          if (f = a.memoizedState, o === null)
            if (f === null)
              if (a.stateNode === null) {
                t: {
                  f = a.type, o = a.memoizedProps, v = v.ownerDocument || v;
                  e: switch (f) {
                    case "title":
                      m = v.getElementsByTagName("title")[0], (!m || m[Xu] || m[Me] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = v.createElement(f), v.head.insertBefore(
                        m,
                        v.querySelector("head > title")
                      )), Pe(m, f, o), m[Me] = a, Ae(m), f = m;
                      break t;
                    case "link":
                      var _ = H_(
                        "link",
                        "href",
                        v
                      ).get(f + (o.href || ""));
                      if (_) {
                        for (var j = 0; j < _.length; j++)
                          if (m = _[j], m.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && m.getAttribute("rel") === (o.rel == null ? null : o.rel) && m.getAttribute("title") === (o.title == null ? null : o.title) && m.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                            _.splice(j, 1);
                            break e;
                          }
                      }
                      m = v.createElement(f), Pe(m, f, o), v.head.appendChild(m);
                      break;
                    case "meta":
                      if (_ = H_(
                        "meta",
                        "content",
                        v
                      ).get(f + (o.content || ""))) {
                        for (j = 0; j < _.length; j++)
                          if (m = _[j], m.getAttribute("content") === (o.content == null ? null : "" + o.content) && m.getAttribute("name") === (o.name == null ? null : o.name) && m.getAttribute("property") === (o.property == null ? null : o.property) && m.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && m.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                            _.splice(j, 1);
                            break e;
                          }
                      }
                      m = v.createElement(f), Pe(m, f, o), v.head.appendChild(m);
                      break;
                    default:
                      throw Error(r(468, f));
                  }
                  m[Me] = a, Ae(m), f = m;
                }
                a.stateNode = f;
              } else
                I_(
                  v,
                  a.type,
                  a.stateNode
                );
            else
              a.stateNode = U_(
                v,
                f,
                a.memoizedProps
              );
          else
            m !== f ? (m === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : m.count--, f === null ? I_(
              v,
              a.type,
              a.stateNode
            ) : U_(
              v,
              f,
              a.memoizedProps
            )) : f === null && a.stateNode !== null && Pd(
              a,
              a.memoizedProps,
              o.memoizedProps
            );
        }
        break;
      case 27:
        Ve(i, a), Fe(a), f & 512 && (ye || o === null || Kn(o, o.return)), o !== null && f & 4 && Pd(
          a,
          a.memoizedProps,
          o.memoizedProps
        );
        break;
      case 5:
        if (Ve(i, a), Fe(a), f & 512 && (ye || o === null || Kn(o, o.return)), a.flags & 32) {
          v = a.stateNode;
          try {
            mi(v, "");
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        }
        f & 4 && a.stateNode != null && (v = a.memoizedProps, Pd(
          a,
          v,
          o !== null ? o.memoizedProps : v
        )), f & 1024 && (qd = !0);
        break;
      case 6:
        if (Ve(i, a), Fe(a), f & 4) {
          if (a.stateNode === null)
            throw Error(r(162));
          f = a.memoizedProps, o = a.stateNode;
          try {
            o.nodeValue = f;
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        }
        break;
      case 3:
        if (Qc = null, v = zn, zn = Fc(i.containerInfo), Ve(i, a), zn = v, Fe(a), f & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Vi(i.containerInfo);
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        qd && (qd = !1, IS(a));
        break;
      case 4:
        f = zn, zn = Fc(
          a.stateNode.containerInfo
        ), Ve(i, a), Fe(a), zn = f;
        break;
      case 12:
        Ve(i, a), Fe(a);
        break;
      case 31:
        Ve(i, a), Fe(a), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, qc(a, f)));
        break;
      case 13:
        Ve(i, a), Fe(a), a.child.flags & 8192 && a.memoizedState !== null != (o !== null && o.memoizedState !== null) && ($c = $e()), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, qc(a, f)));
        break;
      case 22:
        v = a.memoizedState !== null;
        var q = o !== null && o.memoizedState !== null, Y = yr, J = ye;
        if (yr = Y || v, ye = J || q, Ve(i, a), ye = J, yr = Y, Fe(a), f & 8192)
          t: for (i = a.stateNode, i._visibility = v ? i._visibility & -2 : i._visibility | 1, v && (o === null || q || yr || ye || ka(a)), o = null, i = a; ; ) {
            if (i.tag === 5 || i.tag === 26) {
              if (o === null) {
                q = o = i;
                try {
                  if (m = q.stateNode, v)
                    _ = m.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                  else {
                    j = q.stateNode;
                    var rt = q.memoizedProps.style, X = rt != null && rt.hasOwnProperty("display") ? rt.display : null;
                    j.style.display = X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                  }
                } catch (dt) {
                  Gt(q, q.return, dt);
                }
              }
            } else if (i.tag === 6) {
              if (o === null) {
                q = i;
                try {
                  q.stateNode.nodeValue = v ? "" : q.memoizedProps;
                } catch (dt) {
                  Gt(q, q.return, dt);
                }
              }
            } else if (i.tag === 18) {
              if (o === null) {
                q = i;
                try {
                  var Q = q.stateNode;
                  v ? P_(Q, !0) : P_(q.stateNode, !1);
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
              o === i && (o = null), i = i.return;
            }
            o === i && (o = null), i.sibling.return = i.return, i = i.sibling;
          }
        f & 4 && (f = a.updateQueue, f !== null && (o = f.retryQueue, o !== null && (f.retryQueue = null, qc(a, o))));
        break;
      case 19:
        Ve(i, a), Fe(a), f & 4 && (f = a.updateQueue, f !== null && (a.updateQueue = null, qc(a, f)));
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
        for (var o, f = a.return; f !== null; ) {
          if (RS(f)) {
            o = f;
            break;
          }
          f = f.return;
        }
        if (o == null) throw Error(r(160));
        switch (o.tag) {
          case 27:
            var v = o.stateNode, m = Nd(a);
            Rc(a, m, v);
            break;
          case 5:
            var _ = o.stateNode;
            o.flags & 32 && (mi(_, ""), o.flags &= -33);
            var j = Nd(a);
            Rc(a, j, _);
            break;
          case 3:
          case 4:
            var q = o.stateNode.containerInfo, Y = Nd(a);
            Rd(
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
  function IS(a) {
    if (a.subtreeFlags & 1024)
      for (a = a.child; a !== null; ) {
        var i = a;
        IS(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), a = a.sibling;
      }
  }
  function gr(a, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; )
        $S(a, i.alternate, i), i = i.sibling;
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
          var o = i.stateNode;
          typeof o.componentWillUnmount == "function" && PS(
            i,
            i.return,
            o
          ), ka(i);
          break;
        case 27:
          jo(i.stateNode);
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
  function br(a, i, o) {
    for (o = o && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var f = i.alternate, v = a, m = i, _ = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          br(
            v,
            m,
            o
          ), bo(4, m);
          break;
        case 1:
          if (br(
            v,
            m,
            o
          ), f = m, v = f.stateNode, typeof v.componentDidMount == "function")
            try {
              v.componentDidMount();
            } catch (Y) {
              Gt(f, f.return, Y);
            }
          if (f = m, v = f.updateQueue, v !== null) {
            var j = f.stateNode;
            try {
              var q = v.shared.hiddenCallbacks;
              if (q !== null)
                for (v.shared.hiddenCallbacks = null, v = 0; v < q.length; v++)
                  xx(q[v], j);
            } catch (Y) {
              Gt(f, f.return, Y);
            }
          }
          o && _ & 64 && DS(m), xo(m, m.return);
          break;
        case 27:
          qS(m);
        case 26:
        case 5:
          br(
            v,
            m,
            o
          ), o && f === null && _ & 4 && NS(m), xo(m, m.return);
          break;
        case 12:
          br(
            v,
            m,
            o
          );
          break;
        case 31:
          br(
            v,
            m,
            o
          ), o && _ & 4 && kS(v, m);
          break;
        case 13:
          br(
            v,
            m,
            o
          ), o && _ & 4 && US(v, m);
          break;
        case 22:
          m.memoizedState === null && br(
            v,
            m,
            o
          ), xo(m, m.return);
          break;
        case 30:
          break;
        default:
          br(
            v,
            m,
            o
          );
      }
      i = i.sibling;
    }
  }
  function zd(a, i) {
    var o = null;
    a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), a = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (a = i.memoizedState.cachePool.pool), a !== o && (a != null && a.refCount++, o != null && io(o));
  }
  function $d(a, i) {
    a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && io(a));
  }
  function $n(a, i, o, f) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; )
        GS(
          a,
          i,
          o,
          f
        ), i = i.sibling;
  }
  function GS(a, i, o, f) {
    var v = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          a,
          i,
          o,
          f
        ), v & 2048 && bo(9, i);
        break;
      case 1:
        $n(
          a,
          i,
          o,
          f
        );
        break;
      case 3:
        $n(
          a,
          i,
          o,
          f
        ), v & 2048 && (a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && io(a)));
        break;
      case 12:
        if (v & 2048) {
          $n(
            a,
            i,
            o,
            f
          ), a = i.stateNode;
          try {
            var m = i.memoizedProps, _ = m.id, j = m.onPostCommit;
            typeof j == "function" && j(
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
            o,
            f
          );
        break;
      case 31:
        $n(
          a,
          i,
          o,
          f
        );
        break;
      case 13:
        $n(
          a,
          i,
          o,
          f
        );
        break;
      case 23:
        break;
      case 22:
        m = i.stateNode, _ = i.alternate, i.memoizedState !== null ? m._visibility & 2 ? $n(
          a,
          i,
          o,
          f
        ) : So(a, i) : m._visibility & 2 ? $n(
          a,
          i,
          o,
          f
        ) : (m._visibility |= 2, $i(
          a,
          i,
          o,
          f,
          (i.subtreeFlags & 10256) !== 0 || !1
        )), v & 2048 && zd(_, i);
        break;
      case 24:
        $n(
          a,
          i,
          o,
          f
        ), v & 2048 && $d(i.alternate, i);
        break;
      default:
        $n(
          a,
          i,
          o,
          f
        );
    }
  }
  function $i(a, i, o, f, v) {
    for (v = v && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null; ) {
      var m = a, _ = i, j = o, q = f, Y = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          $i(
            m,
            _,
            j,
            q,
            v
          ), bo(8, _);
          break;
        case 23:
          break;
        case 22:
          var J = _.stateNode;
          _.memoizedState !== null ? J._visibility & 2 ? $i(
            m,
            _,
            j,
            q,
            v
          ) : So(
            m,
            _
          ) : (J._visibility |= 2, $i(
            m,
            _,
            j,
            q,
            v
          )), v && Y & 2048 && zd(
            _.alternate,
            _
          );
          break;
        case 24:
          $i(
            m,
            _,
            j,
            q,
            v
          ), v && Y & 2048 && $d(_.alternate, _);
          break;
        default:
          $i(
            m,
            _,
            j,
            q,
            v
          );
      }
      i = i.sibling;
    }
  }
  function So(a, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var o = a, f = i, v = f.flags;
        switch (f.tag) {
          case 22:
            So(o, f), v & 2048 && zd(
              f.alternate,
              f
            );
            break;
          case 24:
            So(o, f), v & 2048 && $d(f.alternate, f);
            break;
          default:
            So(o, f);
        }
        i = i.sibling;
      }
  }
  var _o = 8192;
  function Bi(a, i, o) {
    if (a.subtreeFlags & _o)
      for (a = a.child; a !== null; )
        YS(
          a,
          i,
          o
        ), a = a.sibling;
  }
  function YS(a, i, o) {
    switch (a.tag) {
      case 26:
        Bi(
          a,
          i,
          o
        ), a.flags & _o && a.memoizedState !== null && SR(
          o,
          zn,
          a.memoizedState,
          a.memoizedProps
        );
        break;
      case 5:
        Bi(
          a,
          i,
          o
        );
        break;
      case 3:
      case 4:
        var f = zn;
        zn = Fc(a.stateNode.containerInfo), Bi(
          a,
          i,
          o
        ), zn = f;
        break;
      case 22:
        a.memoizedState === null && (f = a.alternate, f !== null && f.memoizedState !== null ? (f = _o, _o = 16777216, Bi(
          a,
          i,
          o
        ), _o = f) : Bi(
          a,
          i,
          o
        ));
        break;
      default:
        Bi(
          a,
          i,
          o
        );
    }
  }
  function XS(a) {
    var i = a.alternate;
    if (i !== null && (a = i.child, a !== null)) {
      i.child = null;
      do
        i = a.sibling, a.sibling = null, a = i;
      while (a !== null);
    }
  }
  function Oo(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var f = i[o];
          we = f, VS(
            f,
            a
          );
        }
      XS(a);
    }
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        KS(a), a = a.sibling;
  }
  function KS(a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Oo(a), a.flags & 2048 && Jr(9, a, a.return);
        break;
      case 3:
        Oo(a);
        break;
      case 12:
        Oo(a);
        break;
      case 22:
        var i = a.stateNode;
        a.memoizedState !== null && i._visibility & 2 && (a.return === null || a.return.tag !== 13) ? (i._visibility &= -3, zc(a)) : Oo(a);
        break;
      default:
        Oo(a);
    }
  }
  function zc(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var f = i[o];
          we = f, VS(
            f,
            a
          );
        }
      XS(a);
    }
    for (a = a.child; a !== null; ) {
      switch (i = a, i.tag) {
        case 0:
        case 11:
        case 15:
          Jr(8, i, i.return), zc(i);
          break;
        case 22:
          o = i.stateNode, o._visibility & 2 && (o._visibility &= -3, zc(i));
          break;
        default:
          zc(i);
      }
      a = a.sibling;
    }
  }
  function VS(a, i) {
    for (; we !== null; ) {
      var o = we;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Jr(8, o, i);
          break;
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var f = o.memoizedState.cachePool.pool;
            f != null && f.refCount++;
          }
          break;
        case 24:
          io(o.memoizedState.cache);
      }
      if (f = o.child, f !== null) f.return = o, we = f;
      else
        t: for (o = a; we !== null; ) {
          f = we;
          var v = f.sibling, m = f.return;
          if (BS(f), f === o) {
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
  var zN = {
    getCacheForType: function(a) {
      var i = Ce(de), o = i.data.get(a);
      return o === void 0 && (o = a(), i.data.set(a, o)), o;
    },
    cacheSignal: function() {
      return Ce(de).controller.signal;
    }
  }, $N = typeof WeakMap == "function" ? WeakMap : Map, Lt = 0, Ft = null, Ct = null, Pt = 0, It = 0, on = null, ta = !1, Li = !1, Bd = !1, xr = 0, ce = 0, ea = 0, Ua = 0, Ld = 0, ln = 0, ki = 0, Ao = null, Ze = null, kd = !1, $c = 0, FS = 0, Bc = 1 / 0, Lc = null, na = null, be = 0, ra = null, Ui = null, Sr = 0, Ud = 0, Hd = null, ZS = null, wo = 0, Id = null;
  function cn() {
    return (Lt & 2) !== 0 && Pt !== 0 ? Pt & -Pt : N.T !== null ? Fd() : h1();
  }
  function QS() {
    if (ln === 0)
      if ((Pt & 536870912) === 0 || Rt) {
        var a = Kl;
        Kl <<= 1, (Kl & 3932160) === 0 && (Kl = 262144), ln = a;
      } else ln = 536870912;
    return a = an.current, a !== null && (a.flags |= 32), ln;
  }
  function Qe(a, i, o) {
    (a === Ft && (It === 2 || It === 9) || a.cancelPendingCommit !== null) && (Hi(a, 0), aa(
      a,
      Pt,
      ln,
      !1
    )), Yu(a, o), ((Lt & 2) === 0 || a !== Ft) && (a === Ft && ((Lt & 2) === 0 && (Ua |= o), ce === 4 && aa(
      a,
      Pt,
      ln,
      !1
    )), Vn(a));
  }
  function WS(a, i, o) {
    if ((Lt & 6) !== 0) throw Error(r(327));
    var f = !o && (i & 127) === 0 && (i & a.expiredLanes) === 0 || Gu(a, i), v = f ? kN(a, i) : Yd(a, i, !0), m = f;
    do {
      if (v === 0) {
        Li && !f && aa(a, i, 0, !1);
        break;
      } else {
        if (o = a.current.alternate, m && !BN(o)) {
          v = Yd(a, i, !1), m = !1;
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
              var j = a;
              v = Ao;
              var q = j.current.memoizedState.isDehydrated;
              if (q && (Hi(j, _).flags |= 256), _ = Yd(
                j,
                _,
                !1
              ), _ !== 2) {
                if (Bd && !q) {
                  j.errorRecoveryDisabledLanes |= m, Ua |= m, v = 4;
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
          Hi(a, 0), aa(a, i, 0, !0);
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
          if ((i & 62914560) === i && (v = $c + 300 - $e(), 10 < v)) {
            if (aa(
              f,
              i,
              ln,
              !ta
            ), Fl(f, 0, !0) !== 0) break t;
            Sr = i, f.timeoutHandle = j_(
              JS.bind(
                null,
                f,
                o,
                Ze,
                Lc,
                kd,
                i,
                ln,
                Ua,
                ki,
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
          JS(
            f,
            o,
            Ze,
            Lc,
            kd,
            i,
            ln,
            Ua,
            ki,
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
  function JS(a, i, o, f, v, m, _, j, q, Y, J, rt, X, Q) {
    if (a.timeoutHandle = -1, rt = i.subtreeFlags, rt & 8192 || (rt & 16785408) === 16785408) {
      rt = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ur
      }, YS(
        i,
        m,
        rt
      );
      var dt = (m & 62914560) === m ? $c - $e() : (m & 4194048) === m ? FS - $e() : 0;
      if (dt = _R(
        rt,
        dt
      ), dt !== null) {
        Sr = m, a.cancelPendingCommit = dt(
          o_.bind(
            null,
            a,
            i,
            m,
            o,
            f,
            v,
            _,
            j,
            q,
            J,
            rt,
            null,
            X,
            Q
          )
        ), aa(a, m, _, !Y);
        return;
      }
    }
    o_(
      a,
      i,
      m,
      o,
      f,
      v,
      _,
      j,
      q
    );
  }
  function BN(a) {
    for (var i = a; ; ) {
      var o = i.tag;
      if ((o === 0 || o === 11 || o === 15) && i.flags & 16384 && (o = i.updateQueue, o !== null && (o = o.stores, o !== null)))
        for (var f = 0; f < o.length; f++) {
          var v = o[f], m = v.getSnapshot;
          v = v.value;
          try {
            if (!nn(m(), v)) return !1;
          } catch {
            return !1;
          }
        }
      if (o = i.child, i.subtreeFlags & 16384 && o !== null)
        o.return = i, i = o;
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
  function aa(a, i, o, f) {
    i &= ~Ld, i &= ~Ua, a.suspendedLanes |= i, a.pingedLanes &= ~i, f && (a.warmLanes |= i), f = a.expirationTimes;
    for (var v = i; 0 < v; ) {
      var m = 31 - en(v), _ = 1 << m;
      f[m] = -1, v &= ~_;
    }
    o !== 0 && c1(a, o, i);
  }
  function kc() {
    return (Lt & 6) === 0 ? (To(0), !1) : !0;
  }
  function Gd() {
    if (Ct !== null) {
      if (It === 0)
        var a = Ct.return;
      else
        a = Ct, fr = Pa = null, ud(a), Pi = null, oo = 0, a = Ct;
      for (; a !== null; )
        CS(a.alternate, a), a = a.return;
      Ct = null;
    }
  }
  function Hi(a, i) {
    var o = a.timeoutHandle;
    o !== -1 && (a.timeoutHandle = -1, aR(o)), o = a.cancelPendingCommit, o !== null && (a.cancelPendingCommit = null, o()), Sr = 0, Gd(), Ft = a, Ct = o = lr(a.current, null), Pt = i, It = 0, on = null, ta = !1, Li = Gu(a, i), Bd = !1, ki = ln = Ld = Ua = ea = ce = 0, Ze = Ao = null, kd = !1, (i & 8) !== 0 && (i |= i & 32);
    var f = a.entangledLanes;
    if (f !== 0)
      for (a = a.entanglements, f &= i; 0 < f; ) {
        var v = 31 - en(f), m = 1 << v;
        i |= a[v], f &= ~m;
      }
    return xr = i, oc(), o;
  }
  function t_(a, i) {
    Ot = null, N.H = yo, i === Di || i === pc ? (i = yx(), It = 3) : i === Vh ? (i = yx(), It = 4) : It = i === _d ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, on = i, Ct === null && (ce = 1, jc(
      a,
      gn(i, a.current)
    ));
  }
  function e_() {
    var a = an.current;
    return a === null ? !0 : (Pt & 4194048) === Pt ? _n === null : (Pt & 62914560) === Pt || (Pt & 536870912) !== 0 ? a === _n : !1;
  }
  function n_() {
    var a = N.H;
    return N.H = yo, a === null ? yo : a;
  }
  function r_() {
    var a = N.A;
    return N.A = zN, a;
  }
  function Uc() {
    ce = 4, ta || (Pt & 4194048) !== Pt && an.current !== null || (Li = !0), (ea & 134217727) === 0 && (Ua & 134217727) === 0 || Ft === null || aa(
      Ft,
      Pt,
      ln,
      !1
    );
  }
  function Yd(a, i, o) {
    var f = Lt;
    Lt |= 2;
    var v = n_(), m = r_();
    (Ft !== a || Pt !== i) && (Lc = null, Hi(a, i)), i = !1;
    var _ = ce;
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          var j = Ct, q = on;
          switch (It) {
            case 8:
              Gd(), _ = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              an.current === null && (i = !0);
              var Y = It;
              if (It = 0, on = null, Ii(a, j, q, Y), o && Li) {
                _ = 0;
                break t;
              }
              break;
            default:
              Y = It, It = 0, on = null, Ii(a, j, q, Y);
          }
        }
        LN(), _ = ce;
        break;
      } catch (J) {
        t_(a, J);
      }
    while (!0);
    return i && a.shellSuspendCounter++, fr = Pa = null, Lt = f, N.H = v, N.A = m, Ct === null && (Ft = null, Pt = 0, oc()), _;
  }
  function LN() {
    for (; Ct !== null; ) a_(Ct);
  }
  function kN(a, i) {
    var o = Lt;
    Lt |= 2;
    var f = n_(), v = r_();
    Ft !== a || Pt !== i ? (Lc = null, Bc = $e() + 500, Hi(a, i)) : Li = Gu(
      a,
      i
    );
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          i = Ct;
          var m = on;
          e: switch (It) {
            case 1:
              It = 0, on = null, Ii(a, i, m, 1);
              break;
            case 2:
            case 9:
              if (vx(m)) {
                It = 0, on = null, i_(i);
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
              vx(m) ? (It = 0, on = null, i_(i)) : (It = 0, on = null, Ii(a, i, m, 7));
              break;
            case 5:
              var _ = null;
              switch (Ct.tag) {
                case 26:
                  _ = Ct.memoizedState;
                case 5:
                case 27:
                  var j = Ct;
                  if (_ ? G_(_) : j.stateNode.complete) {
                    It = 0, on = null;
                    var q = j.sibling;
                    if (q !== null) Ct = q;
                    else {
                      var Y = j.return;
                      Y !== null ? (Ct = Y, Hc(Y)) : Ct = null;
                    }
                    break e;
                  }
              }
              It = 0, on = null, Ii(a, i, m, 5);
              break;
            case 6:
              It = 0, on = null, Ii(a, i, m, 6);
              break;
            case 8:
              Gd(), ce = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        UN();
        break;
      } catch (J) {
        t_(a, J);
      }
    while (!0);
    return fr = Pa = null, N.H = f, N.A = v, Lt = o, Ct !== null ? 0 : (Ft = null, Pt = 0, oc(), ce);
  }
  function UN() {
    for (; Ct !== null && !ar(); )
      a_(Ct);
  }
  function a_(a) {
    var i = MS(a.alternate, a, xr);
    a.memoizedProps = a.pendingProps, i === null ? Hc(a) : Ct = i;
  }
  function i_(a) {
    var i = a, o = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = _S(
          o,
          i,
          i.pendingProps,
          i.type,
          void 0,
          Pt
        );
        break;
      case 11:
        i = _S(
          o,
          i,
          i.pendingProps,
          i.type.render,
          i.ref,
          Pt
        );
        break;
      case 5:
        ud(i);
      default:
        CS(o, i), i = Ct = rx(i, xr), i = MS(o, i, xr);
    }
    a.memoizedProps = a.pendingProps, i === null ? Hc(a) : Ct = i;
  }
  function Ii(a, i, o, f) {
    fr = Pa = null, ud(i), Pi = null, oo = 0;
    var v = i.return;
    try {
      if (jN(
        a,
        v,
        i,
        o,
        Pt
      )) {
        ce = 1, jc(
          a,
          gn(o, a.current)
        ), Ct = null;
        return;
      }
    } catch (m) {
      if (v !== null) throw Ct = v, m;
      ce = 1, jc(
        a,
        gn(o, a.current)
      ), Ct = null;
      return;
    }
    i.flags & 32768 ? (Rt || f === 1 ? a = !0 : Li || (Pt & 536870912) !== 0 ? a = !1 : (ta = a = !0, (f === 2 || f === 9 || f === 3 || f === 6) && (f = an.current, f !== null && f.tag === 13 && (f.flags |= 16384))), u_(i, a)) : Hc(i);
  }
  function Hc(a) {
    var i = a;
    do {
      if ((i.flags & 32768) !== 0) {
        u_(
          i,
          ta
        );
        return;
      }
      a = i.return;
      var o = PN(
        i.alternate,
        i,
        xr
      );
      if (o !== null) {
        Ct = o;
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
  function u_(a, i) {
    do {
      var o = NN(a.alternate, a);
      if (o !== null) {
        o.flags &= 32767, Ct = o;
        return;
      }
      if (o = a.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !i && (a = a.sibling, a !== null)) {
        Ct = a;
        return;
      }
      Ct = a = o;
    } while (a !== null);
    ce = 6, Ct = null;
  }
  function o_(a, i, o, f, v, m, _, j, q) {
    a.cancelPendingCommit = null;
    do
      Ic();
    while (be !== 0);
    if ((Lt & 6) !== 0) throw Error(r(327));
    if (i !== null) {
      if (i === a.current) throw Error(r(177));
      if (m = i.lanes | i.childLanes, m |= Nh, xP(
        a,
        o,
        m,
        _,
        j,
        q
      ), a === Ft && (Ct = Ft = null, Pt = 0), Ui = i, ra = a, Sr = o, Ud = m, Hd = v, ZS = f, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (a.callbackNode = null, a.callbackPriority = 0, YN(Yl, function() {
        return h_(), null;
      })) : (a.callbackNode = null, a.callbackPriority = 0), f = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || f) {
        f = N.T, N.T = null, v = I.p, I.p = 2, _ = Lt, Lt |= 4;
        try {
          RN(a, i, o);
        } finally {
          Lt = _, I.p = v, N.T = f;
        }
      }
      be = 1, l_(), c_(), f_();
    }
  }
  function l_() {
    if (be === 1) {
      be = 0;
      var a = ra, i = Ui, o = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || o) {
        o = N.T, N.T = null;
        var f = I.p;
        I.p = 2;
        var v = Lt;
        Lt |= 4;
        try {
          HS(i, a);
          var m = rv, _ = V1(a.containerInfo), j = m.focusedElem, q = m.selectionRange;
          if (_ !== j && j && j.ownerDocument && K1(
            j.ownerDocument.documentElement,
            j
          )) {
            if (q !== null && Mh(j)) {
              var Y = q.start, J = q.end;
              if (J === void 0 && (J = Y), "selectionStart" in j)
                j.selectionStart = Y, j.selectionEnd = Math.min(
                  J,
                  j.value.length
                );
              else {
                var rt = j.ownerDocument || document, X = rt && rt.defaultView || window;
                if (X.getSelection) {
                  var Q = X.getSelection(), dt = j.textContent.length, gt = Math.min(q.start, dt), Kt = q.end === void 0 ? gt : Math.min(q.end, dt);
                  !Q.extend && gt > Kt && (_ = Kt, Kt = gt, gt = _);
                  var H = X1(
                    j,
                    gt
                  ), L = X1(
                    j,
                    Kt
                  );
                  if (H && L && (Q.rangeCount !== 1 || Q.anchorNode !== H.node || Q.anchorOffset !== H.offset || Q.focusNode !== L.node || Q.focusOffset !== L.offset)) {
                    var G = rt.createRange();
                    G.setStart(H.node, H.offset), Q.removeAllRanges(), gt > Kt ? (Q.addRange(G), Q.extend(L.node, L.offset)) : (G.setEnd(L.node, L.offset), Q.addRange(G));
                  }
                }
              }
            }
            for (rt = [], Q = j; Q = Q.parentNode; )
              Q.nodeType === 1 && rt.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof j.focus == "function" && j.focus(), j = 0; j < rt.length; j++) {
              var nt = rt[j];
              nt.element.scrollLeft = nt.left, nt.element.scrollTop = nt.top;
            }
          }
          ef = !!nv, rv = nv = null;
        } finally {
          Lt = v, I.p = f, N.T = o;
        }
      }
      a.current = i, be = 2;
    }
  }
  function c_() {
    if (be === 2) {
      be = 0;
      var a = ra, i = Ui, o = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || o) {
        o = N.T, N.T = null;
        var f = I.p;
        I.p = 2;
        var v = Lt;
        Lt |= 4;
        try {
          $S(a, i.alternate, i);
        } finally {
          Lt = v, I.p = f, N.T = o;
        }
      }
      be = 3;
    }
  }
  function f_() {
    if (be === 4 || be === 3) {
      be = 0, Hu();
      var a = ra, i = Ui, o = Sr, f = ZS;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? be = 5 : (be = 0, Ui = ra = null, s_(a, a.pendingLanes));
      var v = a.pendingLanes;
      if (v === 0 && (na = null), ch(o), i = i.stateNode, tn && typeof tn.onCommitFiberRoot == "function")
        try {
          tn.onCommitFiberRoot(
            Iu,
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
            var j = f[_];
            m(j.value, {
              componentStack: j.stack
            });
          }
        } finally {
          N.T = i, I.p = v;
        }
      }
      (Sr & 3) !== 0 && Ic(), Vn(a), v = a.pendingLanes, (o & 261930) !== 0 && (v & 42) !== 0 ? a === Id ? wo++ : (wo = 0, Id = a) : wo = 0, To(0);
    }
  }
  function s_(a, i) {
    (a.pooledCacheLanes &= i) === 0 && (i = a.pooledCache, i != null && (a.pooledCache = null, io(i)));
  }
  function Ic() {
    return l_(), c_(), f_(), h_();
  }
  function h_() {
    if (be !== 5) return !1;
    var a = ra, i = Ud;
    Ud = 0;
    var o = ch(Sr), f = N.T, v = I.p;
    try {
      I.p = 32 > o ? 32 : o, N.T = null, o = Hd, Hd = null;
      var m = ra, _ = Sr;
      if (be = 0, Ui = ra = null, Sr = 0, (Lt & 6) !== 0) throw Error(r(331));
      var j = Lt;
      if (Lt |= 4, KS(m.current), GS(
        m,
        m.current,
        _,
        o
      ), Lt = j, To(0, !1), tn && typeof tn.onPostCommitFiberRoot == "function")
        try {
          tn.onPostCommitFiberRoot(Iu, m);
        } catch {
        }
      return !0;
    } finally {
      I.p = v, N.T = f, s_(a, i);
    }
  }
  function d_(a, i, o) {
    i = gn(o, i), i = Sd(a.stateNode, i, 2), a = Zr(a, i, 2), a !== null && (Yu(a, 2), Vn(a));
  }
  function Gt(a, i, o) {
    if (a.tag === 3)
      d_(a, a, o);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          d_(
            i,
            a,
            o
          );
          break;
        } else if (i.tag === 1) {
          var f = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (na === null || !na.has(f))) {
            a = gn(o, a), o = vS(2), f = Zr(i, o, 2), f !== null && (pS(
              o,
              f,
              i,
              a
            ), Yu(f, 2), Vn(f));
            break;
          }
        }
        i = i.return;
      }
  }
  function Xd(a, i, o) {
    var f = a.pingCache;
    if (f === null) {
      f = a.pingCache = new $N();
      var v = /* @__PURE__ */ new Set();
      f.set(i, v);
    } else
      v = f.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(i, v));
    v.has(o) || (Bd = !0, v.add(o), a = HN.bind(null, a, i, o), i.then(a, a));
  }
  function HN(a, i, o) {
    var f = a.pingCache;
    f !== null && f.delete(i), a.pingedLanes |= a.suspendedLanes & o, a.warmLanes &= ~o, Ft === a && (Pt & o) === o && (ce === 4 || ce === 3 && (Pt & 62914560) === Pt && 300 > $e() - $c ? (Lt & 2) === 0 && Hi(a, 0) : Ld |= o, ki === Pt && (ki = 0)), Vn(a);
  }
  function v_(a, i) {
    i === 0 && (i = l1()), a = ja(a, i), a !== null && (Yu(a, i), Vn(a));
  }
  function IN(a) {
    var i = a.memoizedState, o = 0;
    i !== null && (o = i.retryLane), v_(a, o);
  }
  function GN(a, i) {
    var o = 0;
    switch (a.tag) {
      case 31:
      case 13:
        var f = a.stateNode, v = a.memoizedState;
        v !== null && (o = v.retryLane);
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
    f !== null && f.delete(i), v_(a, o);
  }
  function YN(a, i) {
    return kr(a, i);
  }
  var Gc = null, Gi = null, Kd = !1, Yc = !1, Vd = !1, ia = 0;
  function Vn(a) {
    a !== Gi && a.next === null && (Gi === null ? Gc = Gi = a : Gi = Gi.next = a), Yc = !0, Kd || (Kd = !0, KN());
  }
  function To(a, i) {
    if (!Vd && Yc) {
      Vd = !0;
      do
        for (var o = !1, f = Gc; f !== null; ) {
          if (a !== 0) {
            var v = f.pendingLanes;
            if (v === 0) var m = 0;
            else {
              var _ = f.suspendedLanes, j = f.pingedLanes;
              m = (1 << 31 - en(42 | a) + 1) - 1, m &= v & ~(_ & ~j), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (o = !0, g_(f, m));
          } else
            m = Pt, m = Fl(
              f,
              f === Ft ? m : 0,
              f.cancelPendingCommit !== null || f.timeoutHandle !== -1
            ), (m & 3) === 0 || Gu(f, m) || (o = !0, g_(f, m));
          f = f.next;
        }
      while (o);
      Vd = !1;
    }
  }
  function XN() {
    p_();
  }
  function p_() {
    Yc = Kd = !1;
    var a = 0;
    ia !== 0 && rR() && (a = ia);
    for (var i = $e(), o = null, f = Gc; f !== null; ) {
      var v = f.next, m = y_(f, i);
      m === 0 ? (f.next = null, o === null ? Gc = v : o.next = v, v === null && (Gi = o)) : (o = f, (a !== 0 || (m & 3) !== 0) && (Yc = !0)), f = v;
    }
    be !== 0 && be !== 5 || To(a), ia !== 0 && (ia = 0);
  }
  function y_(a, i) {
    for (var o = a.suspendedLanes, f = a.pingedLanes, v = a.expirationTimes, m = a.pendingLanes & -62914561; 0 < m; ) {
      var _ = 31 - en(m), j = 1 << _, q = v[_];
      q === -1 ? ((j & o) === 0 || (j & f) !== 0) && (v[_] = bP(j, i)) : q <= i && (a.expiredLanes |= j), m &= ~j;
    }
    if (i = Ft, o = Pt, o = Fl(
      a,
      a === i ? o : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), f = a.callbackNode, o === 0 || a === i && (It === 2 || It === 9) || a.cancelPendingCommit !== null)
      return f !== null && f !== null && Rn(f), a.callbackNode = null, a.callbackPriority = 0;
    if ((o & 3) === 0 || Gu(a, o)) {
      if (i = o & -o, i === a.callbackPriority) return i;
      switch (f !== null && Rn(f), ch(o)) {
        case 2:
        case 8:
          o = u1;
          break;
        case 32:
          o = Yl;
          break;
        case 268435456:
          o = o1;
          break;
        default:
          o = Yl;
      }
      return f = m_.bind(null, a), o = kr(o, f), a.callbackPriority = i, a.callbackNode = o, i;
    }
    return f !== null && f !== null && Rn(f), a.callbackPriority = 2, a.callbackNode = null, 2;
  }
  function m_(a, i) {
    if (be !== 0 && be !== 5)
      return a.callbackNode = null, a.callbackPriority = 0, null;
    var o = a.callbackNode;
    if (Ic() && a.callbackNode !== o)
      return null;
    var f = Pt;
    return f = Fl(
      a,
      a === Ft ? f : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), f === 0 ? null : (WS(a, f, i), y_(a, $e()), a.callbackNode != null && a.callbackNode === o ? m_.bind(null, a) : null);
  }
  function g_(a, i) {
    if (Ic()) return null;
    WS(a, i, !0);
  }
  function KN() {
    iR(function() {
      (Lt & 6) !== 0 ? kr(
        i1,
        XN
      ) : p_();
    });
  }
  function Fd() {
    if (ia === 0) {
      var a = ji;
      a === 0 && (a = Xl, Xl <<= 1, (Xl & 261888) === 0 && (Xl = 256)), ia = a;
    }
    return ia;
  }
  function b_(a) {
    return a == null || typeof a == "symbol" || typeof a == "boolean" ? null : typeof a == "function" ? a : Jl("" + a);
  }
  function x_(a, i) {
    var o = i.ownerDocument.createElement("input");
    return o.name = i.name, o.value = i.value, a.id && o.setAttribute("form", a.id), i.parentNode.insertBefore(o, i), a = new FormData(a), o.parentNode.removeChild(o), a;
  }
  function VN(a, i, o, f, v) {
    if (i === "submit" && o && o.stateNode === v) {
      var m = b_(
        (v[Ye] || null).action
      ), _ = f.submitter;
      _ && (i = (i = _[Ye] || null) ? b_(i.formAction) : _.getAttribute("formAction"), i !== null && (m = i, _ = null));
      var j = new rc(
        "action",
        "action",
        null,
        f,
        v
      );
      a.push({
        event: j,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (f.defaultPrevented) {
                if (ia !== 0) {
                  var q = _ ? x_(v, _) : new FormData(v);
                  pd(
                    o,
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
                typeof m == "function" && (j.preventDefault(), q = _ ? x_(v, _) : new FormData(v), pd(
                  o,
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
  for (var Zd = 0; Zd < Ph.length; Zd++) {
    var Qd = Ph[Zd], FN = Qd.toLowerCase(), ZN = Qd[0].toUpperCase() + Qd.slice(1);
    qn(
      FN,
      "on" + ZN
    );
  }
  qn(Q1, "onAnimationEnd"), qn(W1, "onAnimationIteration"), qn(J1, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(hN, "onTransitionRun"), qn(dN, "onTransitionStart"), qn(vN, "onTransitionCancel"), qn(tx, "onTransitionEnd"), pi("onMouseEnter", ["mouseout", "mouseover"]), pi("onMouseLeave", ["mouseout", "mouseover"]), pi("onPointerEnter", ["pointerout", "pointerover"]), pi("onPointerLeave", ["pointerout", "pointerover"]), wa(
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
  var Eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), QN = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo)
  );
  function S_(a, i) {
    i = (i & 4) !== 0;
    for (var o = 0; o < a.length; o++) {
      var f = a[o], v = f.event;
      f = f.listeners;
      t: {
        var m = void 0;
        if (i)
          for (var _ = f.length - 1; 0 <= _; _--) {
            var j = f[_], q = j.instance, Y = j.currentTarget;
            if (j = j.listener, q !== m && v.isPropagationStopped())
              break t;
            m = j, v.currentTarget = Y;
            try {
              m(v);
            } catch (J) {
              uc(J);
            }
            v.currentTarget = null, m = q;
          }
        else
          for (_ = 0; _ < f.length; _++) {
            if (j = f[_], q = j.instance, Y = j.currentTarget, j = j.listener, q !== m && v.isPropagationStopped())
              break t;
            m = j, v.currentTarget = Y;
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
    var o = i[fh];
    o === void 0 && (o = i[fh] = /* @__PURE__ */ new Set());
    var f = a + "__bubble";
    o.has(f) || (__(i, a, 2, !1), o.add(f));
  }
  function Wd(a, i, o) {
    var f = 0;
    i && (f |= 4), __(
      o,
      a,
      f,
      i
    );
  }
  var Xc = "_reactListening" + Math.random().toString(36).slice(2);
  function Jd(a) {
    if (!a[Xc]) {
      a[Xc] = !0, p1.forEach(function(o) {
        o !== "selectionchange" && (QN.has(o) || Wd(o, !1, a), Wd(o, !0, a));
      });
      var i = a.nodeType === 9 ? a : a.ownerDocument;
      i === null || i[Xc] || (i[Xc] = !0, Wd("selectionchange", !1, i));
    }
  }
  function __(a, i, o, f) {
    switch (Q_(i)) {
      case 2:
        var v = wR;
        break;
      case 8:
        v = TR;
        break;
      default:
        v = vv;
    }
    o = v.bind(
      null,
      i,
      o,
      a
    ), v = void 0, !bh || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), f ? v !== void 0 ? a.addEventListener(i, o, {
      capture: !0,
      passive: v
    }) : a.addEventListener(i, o, !0) : v !== void 0 ? a.addEventListener(i, o, {
      passive: v
    }) : a.addEventListener(i, o, !1);
  }
  function tv(a, i, o, f, v) {
    var m = f;
    if ((i & 1) === 0 && (i & 2) === 0 && f !== null)
      t: for (; ; ) {
        if (f === null) return;
        var _ = f.tag;
        if (_ === 3 || _ === 4) {
          var j = f.stateNode.containerInfo;
          if (j === v) break;
          if (_ === 4)
            for (_ = f.return; _ !== null; ) {
              var q = _.tag;
              if ((q === 3 || q === 4) && _.stateNode.containerInfo === v)
                return;
              _ = _.return;
            }
          for (; j !== null; ) {
            if (_ = hi(j), _ === null) return;
            if (q = _.tag, q === 5 || q === 6 || q === 26 || q === 27) {
              f = m = _;
              continue t;
            }
            j = j.parentNode;
          }
        }
        f = f.return;
      }
    E1(function() {
      var Y = m, J = mh(o), rt = [];
      t: {
        var X = ex.get(a);
        if (X !== void 0) {
          var Q = rc, dt = a;
          switch (a) {
            case "keypress":
              if (ec(o) === 0) break t;
            case "keydown":
            case "keyup":
              Q = GP;
              break;
            case "focusin":
              dt = "focus", Q = Oh;
              break;
            case "focusout":
              dt = "blur", Q = Oh;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Oh;
              break;
            case "click":
              if (o.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = C1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = PP;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = KP;
              break;
            case Q1:
            case W1:
            case J1:
              Q = qP;
              break;
            case tx:
              Q = FP;
              break;
            case "scroll":
            case "scrollend":
              Q = CP;
              break;
            case "wheel":
              Q = QP;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = $P;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = P1;
              break;
            case "toggle":
            case "beforetoggle":
              Q = JP;
          }
          var gt = (i & 4) !== 0, Kt = !gt && (a === "scroll" || a === "scrollend"), H = gt ? X !== null ? X + "Capture" : null : X;
          gt = [];
          for (var L = Y, G; L !== null; ) {
            var nt = L;
            if (G = nt.stateNode, nt = nt.tag, nt !== 5 && nt !== 26 && nt !== 27 || G === null || H === null || (nt = Vu(L, H), nt != null && gt.push(
              Mo(L, nt, G)
            )), Kt) break;
            L = L.return;
          }
          0 < gt.length && (X = new Q(
            X,
            dt,
            null,
            o,
            J
          ), rt.push({ event: X, listeners: gt }));
        }
      }
      if ((i & 7) === 0) {
        t: {
          if (X = a === "mouseover" || a === "pointerover", Q = a === "mouseout" || a === "pointerout", X && o !== yh && (dt = o.relatedTarget || o.fromElement) && (hi(dt) || dt[si]))
            break t;
          if ((Q || X) && (X = J.window === J ? J : (X = J.ownerDocument) ? X.defaultView || X.parentWindow : window, Q ? (dt = o.relatedTarget || o.toElement, Q = Y, dt = dt ? hi(dt) : null, dt !== null && (Kt = l(dt), gt = dt.tag, dt !== Kt || gt !== 5 && gt !== 27 && gt !== 6) && (dt = null)) : (Q = null, dt = Y), Q !== dt)) {
            if (gt = C1, nt = "onMouseLeave", H = "onMouseEnter", L = "mouse", (a === "pointerout" || a === "pointerover") && (gt = P1, nt = "onPointerLeave", H = "onPointerEnter", L = "pointer"), Kt = Q == null ? X : Ku(Q), G = dt == null ? X : Ku(dt), X = new gt(
              nt,
              L + "leave",
              Q,
              o,
              J
            ), X.target = Kt, X.relatedTarget = G, nt = null, hi(J) === Y && (gt = new gt(
              H,
              L + "enter",
              dt,
              o,
              J
            ), gt.target = G, gt.relatedTarget = Kt, nt = gt), Kt = nt, Q && dt)
              e: {
                for (gt = WN, H = Q, L = dt, G = 0, nt = H; nt; nt = gt(nt))
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
            Q !== null && O_(
              rt,
              X,
              Q,
              gt,
              !1
            ), dt !== null && Kt !== null && O_(
              rt,
              Kt,
              dt,
              gt,
              !0
            );
          }
        }
        t: {
          if (X = Y ? Ku(Y) : window, Q = X.nodeName && X.nodeName.toLowerCase(), Q === "select" || Q === "input" && X.type === "file")
            var zt = k1;
          else if (B1(X))
            if (U1)
              zt = cN;
            else {
              zt = oN;
              var pt = uN;
            }
          else
            Q = X.nodeName, !Q || Q.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? Y && ph(Y.elementType) && (zt = k1) : zt = lN;
          if (zt && (zt = zt(a, Y))) {
            L1(
              rt,
              zt,
              o,
              J
            );
            break t;
          }
          pt && pt(a, X, Y), a === "focusout" && Y && X.type === "number" && Y.memoizedProps.value != null && vh(X, "number", X.value);
        }
        switch (pt = Y ? Ku(Y) : window, a) {
          case "focusin":
            (B1(pt) || pt.contentEditable === "true") && (Si = pt, jh = Y, no = null);
            break;
          case "focusout":
            no = jh = Si = null;
            break;
          case "mousedown":
            Ch = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ch = !1, F1(rt, o, J);
            break;
          case "selectionchange":
            if (sN) break;
          case "keydown":
          case "keyup":
            F1(rt, o, J);
        }
        var Tt;
        if (wh)
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
          xi ? z1(a, o) && (Nt = "onCompositionEnd") : a === "keydown" && o.keyCode === 229 && (Nt = "onCompositionStart");
        Nt && (N1 && o.locale !== "ko" && (xi || Nt !== "onCompositionStart" ? Nt === "onCompositionEnd" && xi && (Tt = M1()) : (Ir = J, xh = "value" in Ir ? Ir.value : Ir.textContent, xi = !0)), pt = Kc(Y, Nt), 0 < pt.length && (Nt = new D1(
          Nt,
          a,
          null,
          o,
          J
        ), rt.push({ event: Nt, listeners: pt }), Tt ? Nt.data = Tt : (Tt = $1(o), Tt !== null && (Nt.data = Tt)))), (Tt = eN ? nN(a, o) : rN(a, o)) && (Nt = Kc(Y, "onBeforeInput"), 0 < Nt.length && (pt = new D1(
          "onBeforeInput",
          "beforeinput",
          null,
          o,
          J
        ), rt.push({
          event: pt,
          listeners: Nt
        }), pt.data = Tt)), VN(
          rt,
          a,
          Y,
          o,
          J
        );
      }
      S_(rt, i);
    });
  }
  function Mo(a, i, o) {
    return {
      instance: a,
      listener: i,
      currentTarget: o
    };
  }
  function Kc(a, i) {
    for (var o = i + "Capture", f = []; a !== null; ) {
      var v = a, m = v.stateNode;
      if (v = v.tag, v !== 5 && v !== 26 && v !== 27 || m === null || (v = Vu(a, o), v != null && f.unshift(
        Mo(a, v, m)
      ), v = Vu(a, i), v != null && f.push(
        Mo(a, v, m)
      )), a.tag === 3) return f;
      a = a.return;
    }
    return [];
  }
  function WN(a) {
    if (a === null) return null;
    do
      a = a.return;
    while (a && a.tag !== 5 && a.tag !== 27);
    return a || null;
  }
  function O_(a, i, o, f, v) {
    for (var m = i._reactName, _ = []; o !== null && o !== f; ) {
      var j = o, q = j.alternate, Y = j.stateNode;
      if (j = j.tag, q !== null && q === f) break;
      j !== 5 && j !== 26 && j !== 27 || Y === null || (q = Y, v ? (Y = Vu(o, m), Y != null && _.unshift(
        Mo(o, Y, q)
      )) : v || (Y = Vu(o, m), Y != null && _.push(
        Mo(o, Y, q)
      ))), o = o.return;
    }
    _.length !== 0 && a.push({ event: i, listeners: _ });
  }
  var JN = /\r\n?/g, tR = /\u0000|\uFFFD/g;
  function A_(a) {
    return (typeof a == "string" ? a : "" + a).replace(JN, `
`).replace(tR, "");
  }
  function w_(a, i) {
    return i = A_(i), A_(a) === i;
  }
  function Xt(a, i, o, f, v, m) {
    switch (o) {
      case "children":
        typeof f == "string" ? i === "body" || i === "textarea" && f === "" || mi(a, f) : (typeof f == "number" || typeof f == "bigint") && i !== "body" && mi(a, "" + f);
        break;
      case "className":
        Ql(a, "class", f);
        break;
      case "tabIndex":
        Ql(a, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ql(a, o, f);
        break;
      case "style":
        w1(a, f, m);
        break;
      case "data":
        if (i !== "object") {
          Ql(a, "data", f);
          break;
        }
      case "src":
      case "href":
        if (f === "" && (i !== "a" || o !== "href")) {
          a.removeAttribute(o);
          break;
        }
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean") {
          a.removeAttribute(o);
          break;
        }
        f = Jl("" + f), a.setAttribute(o, f);
        break;
      case "action":
      case "formAction":
        if (typeof f == "function") {
          a.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (o === "formAction" ? (i !== "input" && Xt(a, i, "name", v.name, v, null), Xt(
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
          a.removeAttribute(o);
          break;
        }
        f = Jl("" + f), a.setAttribute(o, f);
        break;
      case "onClick":
        f != null && (a.onclick = ur);
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
          if (o = f.__html, o != null) {
            if (v.children != null) throw Error(r(60));
            a.innerHTML = o;
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
        o = Jl("" + f), a.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          o
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
        f != null && typeof f != "function" && typeof f != "symbol" ? a.setAttribute(o, "" + f) : a.removeAttribute(o);
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
        f && typeof f != "function" && typeof f != "symbol" ? a.setAttribute(o, "") : a.removeAttribute(o);
        break;
      case "capture":
      case "download":
        f === !0 ? a.setAttribute(o, "") : f !== !1 && f != null && typeof f != "function" && typeof f != "symbol" ? a.setAttribute(o, f) : a.removeAttribute(o);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        f != null && typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f ? a.setAttribute(o, f) : a.removeAttribute(o);
        break;
      case "rowSpan":
      case "start":
        f == null || typeof f == "function" || typeof f == "symbol" || isNaN(f) ? a.removeAttribute(o) : a.setAttribute(o, f);
        break;
      case "popover":
        Dt("beforetoggle", a), Dt("toggle", a), Zl(a, "popover", f);
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
        Zl(a, "is", f);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = MP.get(o) || o, Zl(a, o, f));
    }
  }
  function ev(a, i, o, f, v, m) {
    switch (o) {
      case "style":
        w1(a, f, m);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f))
            throw Error(r(61));
          if (o = f.__html, o != null) {
            if (v.children != null) throw Error(r(60));
            a.innerHTML = o;
          }
        }
        break;
      case "children":
        typeof f == "string" ? mi(a, f) : (typeof f == "number" || typeof f == "bigint") && mi(a, "" + f);
        break;
      case "onScroll":
        f != null && Dt("scroll", a);
        break;
      case "onScrollEnd":
        f != null && Dt("scrollend", a);
        break;
      case "onClick":
        f != null && (a.onclick = ur);
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
        if (!y1.hasOwnProperty(o))
          t: {
            if (o[0] === "o" && o[1] === "n" && (v = o.endsWith("Capture"), i = o.slice(2, v ? o.length - 7 : void 0), m = a[Ye] || null, m = m != null ? m[o] : null, typeof m == "function" && a.removeEventListener(i, m, v), typeof f == "function")) {
              typeof m != "function" && m !== null && (o in a ? a[o] = null : a.hasAttribute(o) && a.removeAttribute(o)), a.addEventListener(i, f, v);
              break t;
            }
            o in a ? a[o] = f : f === !0 ? a.setAttribute(o, "") : Zl(a, o, f);
          }
    }
  }
  function Pe(a, i, o) {
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
        for (m in o)
          if (o.hasOwnProperty(m)) {
            var _ = o[m];
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
                  Xt(a, i, m, _, o, null);
              }
          }
        v && Xt(a, i, "srcSet", o.srcSet, o, null), f && Xt(a, i, "src", o.src, o, null);
        return;
      case "input":
        Dt("invalid", a);
        var j = m = _ = v = null, q = null, Y = null;
        for (f in o)
          if (o.hasOwnProperty(f)) {
            var J = o[f];
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
                  j = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(r(137, i));
                  break;
                default:
                  Xt(a, i, f, J, o, null);
              }
          }
        S1(
          a,
          m,
          j,
          q,
          Y,
          _,
          v,
          !1
        );
        return;
      case "select":
        Dt("invalid", a), f = _ = m = null;
        for (v in o)
          if (o.hasOwnProperty(v) && (j = o[v], j != null))
            switch (v) {
              case "value":
                m = j;
                break;
              case "defaultValue":
                _ = j;
                break;
              case "multiple":
                f = j;
              default:
                Xt(a, i, v, j, o, null);
            }
        i = m, o = _, a.multiple = !!f, i != null ? yi(a, !!f, i, !1) : o != null && yi(a, !!f, o, !0);
        return;
      case "textarea":
        Dt("invalid", a), m = v = f = null;
        for (_ in o)
          if (o.hasOwnProperty(_) && (j = o[_], j != null))
            switch (_) {
              case "value":
                f = j;
                break;
              case "defaultValue":
                v = j;
                break;
              case "children":
                m = j;
                break;
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(r(91));
                break;
              default:
                Xt(a, i, _, j, o, null);
            }
        O1(a, f, v, m);
        return;
      case "option":
        for (q in o)
          if (o.hasOwnProperty(q) && (f = o[q], f != null))
            switch (q) {
              case "selected":
                a.selected = f && typeof f != "function" && typeof f != "symbol";
                break;
              default:
                Xt(a, i, q, f, o, null);
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
        for (f = 0; f < Eo.length; f++)
          Dt(Eo[f], a);
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
        for (Y in o)
          if (o.hasOwnProperty(Y) && (f = o[Y], f != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, i));
              default:
                Xt(a, i, Y, f, o, null);
            }
        return;
      default:
        if (ph(i)) {
          for (J in o)
            o.hasOwnProperty(J) && (f = o[J], f !== void 0 && ev(
              a,
              i,
              J,
              f,
              o,
              void 0
            ));
          return;
        }
    }
    for (j in o)
      o.hasOwnProperty(j) && (f = o[j], f != null && Xt(a, i, j, f, o, null));
  }
  function eR(a, i, o, f) {
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
        var v = null, m = null, _ = null, j = null, q = null, Y = null, J = null;
        for (Q in o) {
          var rt = o[Q];
          if (o.hasOwnProperty(Q) && rt != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                q = rt;
              default:
                f.hasOwnProperty(Q) || Xt(a, i, Q, null, f, rt);
            }
        }
        for (var X in f) {
          var Q = f[X];
          if (rt = o[X], f.hasOwnProperty(X) && (Q != null || rt != null))
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
                j = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(r(137, i));
                break;
              default:
                Q !== rt && Xt(
                  a,
                  i,
                  X,
                  Q,
                  f,
                  rt
                );
            }
        }
        dh(
          a,
          _,
          j,
          q,
          Y,
          J,
          m,
          v
        );
        return;
      case "select":
        Q = _ = j = X = null;
        for (m in o)
          if (q = o[m], o.hasOwnProperty(m) && q != null)
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
          if (m = f[v], q = o[v], f.hasOwnProperty(v) && (m != null || q != null))
            switch (v) {
              case "value":
                X = m;
                break;
              case "defaultValue":
                j = m;
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
        i = j, o = _, f = Q, X != null ? yi(a, !!o, X, !1) : !!f != !!o && (i != null ? yi(a, !!o, i, !0) : yi(a, !!o, o ? [] : "", !1));
        return;
      case "textarea":
        Q = X = null;
        for (j in o)
          if (v = o[j], o.hasOwnProperty(j) && v != null && !f.hasOwnProperty(j))
            switch (j) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(a, i, j, null, f, v);
            }
        for (_ in f)
          if (v = f[_], m = o[_], f.hasOwnProperty(_) && (v != null || m != null))
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
        _1(a, X, Q);
        return;
      case "option":
        for (var dt in o)
          if (X = o[dt], o.hasOwnProperty(dt) && X != null && !f.hasOwnProperty(dt))
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
          if (X = f[q], Q = o[q], f.hasOwnProperty(q) && X !== Q && (X != null || Q != null))
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
        for (var gt in o)
          X = o[gt], o.hasOwnProperty(gt) && X != null && !f.hasOwnProperty(gt) && Xt(a, i, gt, null, f, X);
        for (Y in f)
          if (X = f[Y], Q = o[Y], f.hasOwnProperty(Y) && X !== Q && (X != null || Q != null))
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
        if (ph(i)) {
          for (var Kt in o)
            X = o[Kt], o.hasOwnProperty(Kt) && X !== void 0 && !f.hasOwnProperty(Kt) && ev(
              a,
              i,
              Kt,
              void 0,
              f,
              X
            );
          for (J in f)
            X = f[J], Q = o[J], !f.hasOwnProperty(J) || X === Q || X === void 0 && Q === void 0 || ev(
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
    for (var H in o)
      X = o[H], o.hasOwnProperty(H) && X != null && !f.hasOwnProperty(H) && Xt(a, i, H, null, f, X);
    for (rt in f)
      X = f[rt], Q = o[rt], !f.hasOwnProperty(rt) || X === Q || X == null && Q == null || Xt(a, i, rt, X, f, Q);
  }
  function T_(a) {
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
  function nR() {
    if (typeof performance.getEntriesByType == "function") {
      for (var a = 0, i = 0, o = performance.getEntriesByType("resource"), f = 0; f < o.length; f++) {
        var v = o[f], m = v.transferSize, _ = v.initiatorType, j = v.duration;
        if (m && j && T_(_)) {
          for (_ = 0, j = v.responseEnd, f += 1; f < o.length; f++) {
            var q = o[f], Y = q.startTime;
            if (Y > j) break;
            var J = q.transferSize, rt = q.initiatorType;
            J && T_(rt) && (q = q.responseEnd, _ += J * (q < j ? 1 : (j - Y) / (q - Y)));
          }
          if (--f, i += 8 * (m + _) / (v.duration / 1e3), a++, 10 < a) break;
        }
      }
      if (0 < a) return i / a / 1e6;
    }
    return navigator.connection && (a = navigator.connection.downlink, typeof a == "number") ? a : 5;
  }
  var nv = null, rv = null;
  function Vc(a) {
    return a.nodeType === 9 ? a : a.ownerDocument;
  }
  function E_(a) {
    switch (a) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function M_(a, i) {
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
  function av(a, i) {
    return a === "textarea" || a === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var iv = null;
  function rR() {
    var a = window.event;
    return a && a.type === "popstate" ? a === iv ? !1 : (iv = a, !0) : (iv = null, !1);
  }
  var j_ = typeof setTimeout == "function" ? setTimeout : void 0, aR = typeof clearTimeout == "function" ? clearTimeout : void 0, C_ = typeof Promise == "function" ? Promise : void 0, iR = typeof queueMicrotask == "function" ? queueMicrotask : typeof C_ < "u" ? function(a) {
    return C_.resolve(null).then(a).catch(uR);
  } : j_;
  function uR(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function ua(a) {
    return a === "head";
  }
  function D_(a, i) {
    var o = i, f = 0;
    do {
      var v = o.nextSibling;
      if (a.removeChild(o), v && v.nodeType === 8)
        if (o = v.data, o === "/$" || o === "/&") {
          if (f === 0) {
            a.removeChild(v), Vi(i);
            return;
          }
          f--;
        } else if (o === "$" || o === "$?" || o === "$~" || o === "$!" || o === "&")
          f++;
        else if (o === "html")
          jo(a.ownerDocument.documentElement);
        else if (o === "head") {
          o = a.ownerDocument.head, jo(o);
          for (var m = o.firstChild; m; ) {
            var _ = m.nextSibling, j = m.nodeName;
            m[Xu] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && m.rel.toLowerCase() === "stylesheet" || o.removeChild(m), m = _;
          }
        } else
          o === "body" && jo(a.ownerDocument.body);
      o = v;
    } while (o);
    Vi(i);
  }
  function P_(a, i) {
    var o = a;
    a = 0;
    do {
      var f = o.nextSibling;
      if (o.nodeType === 1 ? i ? (o._stashedDisplay = o.style.display, o.style.display = "none") : (o.style.display = o._stashedDisplay || "", o.getAttribute("style") === "" && o.removeAttribute("style")) : o.nodeType === 3 && (i ? (o._stashedText = o.nodeValue, o.nodeValue = "") : o.nodeValue = o._stashedText || ""), f && f.nodeType === 8)
        if (o = f.data, o === "/$") {
          if (a === 0) break;
          a--;
        } else
          o !== "$" && o !== "$?" && o !== "$~" && o !== "$!" || a++;
      o = f;
    } while (o);
  }
  function uv(a) {
    var i = a.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var o = i;
      switch (i = i.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          uv(o), sh(o);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (o.rel.toLowerCase() === "stylesheet") continue;
      }
      a.removeChild(o);
    }
  }
  function oR(a, i, o, f) {
    for (; a.nodeType === 1; ) {
      var v = o;
      if (a.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!f && (a.nodeName !== "INPUT" || a.type !== "hidden"))
          break;
      } else if (f) {
        if (!a[Xu])
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
  function lR(a, i, o) {
    if (i === "") return null;
    for (; a.nodeType !== 3; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !o || (a = On(a.nextSibling), a === null)) return null;
    return a;
  }
  function N_(a, i) {
    for (; a.nodeType !== 8; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !i || (a = On(a.nextSibling), a === null)) return null;
    return a;
  }
  function ov(a) {
    return a.data === "$?" || a.data === "$~";
  }
  function lv(a) {
    return a.data === "$!" || a.data === "$?" && a.ownerDocument.readyState !== "loading";
  }
  function cR(a, i) {
    var o = a.ownerDocument;
    if (a.data === "$~") a._reactRetry = i;
    else if (a.data !== "$?" || o.readyState !== "loading")
      i();
    else {
      var f = function() {
        i(), o.removeEventListener("DOMContentLoaded", f);
      };
      o.addEventListener("DOMContentLoaded", f), a._reactRetry = f;
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
  var cv = null;
  function R_(a) {
    a = a.nextSibling;
    for (var i = 0; a; ) {
      if (a.nodeType === 8) {
        var o = a.data;
        if (o === "/$" || o === "/&") {
          if (i === 0)
            return On(a.nextSibling);
          i--;
        } else
          o !== "$" && o !== "$!" && o !== "$?" && o !== "$~" && o !== "&" || i++;
      }
      a = a.nextSibling;
    }
    return null;
  }
  function q_(a) {
    a = a.previousSibling;
    for (var i = 0; a; ) {
      if (a.nodeType === 8) {
        var o = a.data;
        if (o === "$" || o === "$!" || o === "$?" || o === "$~" || o === "&") {
          if (i === 0) return a;
          i--;
        } else o !== "/$" && o !== "/&" || i++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  function z_(a, i, o) {
    switch (i = Vc(o), a) {
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
  function jo(a) {
    for (var i = a.attributes; i.length; )
      a.removeAttributeNode(i[0]);
    sh(a);
  }
  var An = /* @__PURE__ */ new Map(), $_ = /* @__PURE__ */ new Set();
  function Fc(a) {
    return typeof a.getRootNode == "function" ? a.getRootNode() : a.nodeType === 9 ? a : a.ownerDocument;
  }
  var _r = I.d;
  I.d = {
    f: fR,
    r: sR,
    D: hR,
    C: dR,
    L: vR,
    m: pR,
    X: mR,
    S: yR,
    M: gR
  };
  function fR() {
    var a = _r.f(), i = kc();
    return a || i;
  }
  function sR(a) {
    var i = di(a);
    i !== null && i.tag === 5 && i.type === "form" ? tS(i) : _r.r(a);
  }
  var Yi = typeof document > "u" ? null : document;
  function B_(a, i, o) {
    var f = Yi;
    if (f && typeof i == "string" && i) {
      var v = yn(i);
      v = 'link[rel="' + a + '"][href="' + v + '"]', typeof o == "string" && (v += '[crossorigin="' + o + '"]'), $_.has(v) || ($_.add(v), a = { rel: a, crossOrigin: o, href: i }, f.querySelector(v) === null && (i = f.createElement("link"), Pe(i, "link", a), Ae(i), f.head.appendChild(i)));
    }
  }
  function hR(a) {
    _r.D(a), B_("dns-prefetch", a, null);
  }
  function dR(a, i) {
    _r.C(a, i), B_("preconnect", a, i);
  }
  function vR(a, i, o) {
    _r.L(a, i, o);
    var f = Yi;
    if (f && a && i) {
      var v = 'link[rel="preload"][as="' + yn(i) + '"]';
      i === "image" && o && o.imageSrcSet ? (v += '[imagesrcset="' + yn(
        o.imageSrcSet
      ) + '"]', typeof o.imageSizes == "string" && (v += '[imagesizes="' + yn(
        o.imageSizes
      ) + '"]')) : v += '[href="' + yn(a) + '"]';
      var m = v;
      switch (i) {
        case "style":
          m = Xi(a);
          break;
        case "script":
          m = Ki(a);
      }
      An.has(m) || (a = p(
        {
          rel: "preload",
          href: i === "image" && o && o.imageSrcSet ? void 0 : a,
          as: i
        },
        o
      ), An.set(m, a), f.querySelector(v) !== null || i === "style" && f.querySelector(Co(m)) || i === "script" && f.querySelector(Do(m)) || (i = f.createElement("link"), Pe(i, "link", a), Ae(i), f.head.appendChild(i)));
    }
  }
  function pR(a, i) {
    _r.m(a, i);
    var o = Yi;
    if (o && a) {
      var f = i && typeof i.as == "string" ? i.as : "script", v = 'link[rel="modulepreload"][as="' + yn(f) + '"][href="' + yn(a) + '"]', m = v;
      switch (f) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Ki(a);
      }
      if (!An.has(m) && (a = p({ rel: "modulepreload", href: a }, i), An.set(m, a), o.querySelector(v) === null)) {
        switch (f) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Do(m)))
              return;
        }
        f = o.createElement("link"), Pe(f, "link", a), Ae(f), o.head.appendChild(f);
      }
    }
  }
  function yR(a, i, o) {
    _r.S(a, i, o);
    var f = Yi;
    if (f && a) {
      var v = vi(f).hoistableStyles, m = Xi(a);
      i = i || "default";
      var _ = v.get(m);
      if (!_) {
        var j = { loading: 0, preload: null };
        if (_ = f.querySelector(
          Co(m)
        ))
          j.loading = 5;
        else {
          a = p(
            { rel: "stylesheet", href: a, "data-precedence": i },
            o
          ), (o = An.get(m)) && fv(a, o);
          var q = _ = f.createElement("link");
          Ae(q), Pe(q, "link", a), q._p = new Promise(function(Y, J) {
            q.onload = Y, q.onerror = J;
          }), q.addEventListener("load", function() {
            j.loading |= 1;
          }), q.addEventListener("error", function() {
            j.loading |= 2;
          }), j.loading |= 4, Zc(_, i, f);
        }
        _ = {
          type: "stylesheet",
          instance: _,
          count: 1,
          state: j
        }, v.set(m, _);
      }
    }
  }
  function mR(a, i) {
    _r.X(a, i);
    var o = Yi;
    if (o && a) {
      var f = vi(o).hoistableScripts, v = Ki(a), m = f.get(v);
      m || (m = o.querySelector(Do(v)), m || (a = p({ src: a, async: !0 }, i), (i = An.get(v)) && sv(a, i), m = o.createElement("script"), Ae(m), Pe(m, "link", a), o.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, f.set(v, m));
    }
  }
  function gR(a, i) {
    _r.M(a, i);
    var o = Yi;
    if (o && a) {
      var f = vi(o).hoistableScripts, v = Ki(a), m = f.get(v);
      m || (m = o.querySelector(Do(v)), m || (a = p({ src: a, async: !0, type: "module" }, i), (i = An.get(v)) && sv(a, i), m = o.createElement("script"), Ae(m), Pe(m, "link", a), o.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, f.set(v, m));
    }
  }
  function L_(a, i, o, f) {
    var v = (v = mt.current) ? Fc(v) : null;
    if (!v) throw Error(r(446));
    switch (a) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (i = Xi(o.href), o = vi(
          v
        ).hoistableStyles, f = o.get(i), f || (f = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, o.set(i, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          a = Xi(o.href);
          var m = vi(
            v
          ).hoistableStyles, _ = m.get(a);
          if (_ || (v = v.ownerDocument || v, _ = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(a, _), (m = v.querySelector(
            Co(a)
          )) && !m._p && (_.instance = m, _.state.loading = 5), An.has(a) || (o = {
            rel: "preload",
            as: "style",
            href: o.href,
            crossOrigin: o.crossOrigin,
            integrity: o.integrity,
            media: o.media,
            hrefLang: o.hrefLang,
            referrerPolicy: o.referrerPolicy
          }, An.set(a, o), m || bR(
            v,
            a,
            o,
            _.state
          ))), i && f === null)
            throw Error(r(528, ""));
          return _;
        }
        if (i && f !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return i = o.async, o = o.src, typeof o == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = Ki(o), o = vi(
          v
        ).hoistableScripts, f = o.get(i), f || (f = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, o.set(i, f)), f) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, a));
    }
  }
  function Xi(a) {
    return 'href="' + yn(a) + '"';
  }
  function Co(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function k_(a) {
    return p({}, a, {
      "data-precedence": a.precedence,
      precedence: null
    });
  }
  function bR(a, i, o, f) {
    a.querySelector('link[rel="preload"][as="style"][' + i + "]") ? f.loading = 1 : (i = a.createElement("link"), f.preload = i, i.addEventListener("load", function() {
      return f.loading |= 1;
    }), i.addEventListener("error", function() {
      return f.loading |= 2;
    }), Pe(i, "link", o), Ae(i), a.head.appendChild(i));
  }
  function Ki(a) {
    return '[src="' + yn(a) + '"]';
  }
  function Do(a) {
    return "script[async]" + a;
  }
  function U_(a, i, o) {
    if (i.count++, i.instance === null)
      switch (i.type) {
        case "style":
          var f = a.querySelector(
            'style[data-href~="' + yn(o.href) + '"]'
          );
          if (f)
            return i.instance = f, Ae(f), f;
          var v = p({}, o, {
            "data-href": o.href,
            "data-precedence": o.precedence,
            href: null,
            precedence: null
          });
          return f = (a.ownerDocument || a).createElement(
            "style"
          ), Ae(f), Pe(f, "style", v), Zc(f, o.precedence, a), i.instance = f;
        case "stylesheet":
          v = Xi(o.href);
          var m = a.querySelector(
            Co(v)
          );
          if (m)
            return i.state.loading |= 4, i.instance = m, Ae(m), m;
          f = k_(o), (v = An.get(v)) && fv(f, v), m = (a.ownerDocument || a).createElement("link"), Ae(m);
          var _ = m;
          return _._p = new Promise(function(j, q) {
            _.onload = j, _.onerror = q;
          }), Pe(m, "link", f), i.state.loading |= 4, Zc(m, o.precedence, a), i.instance = m;
        case "script":
          return m = Ki(o.src), (v = a.querySelector(
            Do(m)
          )) ? (i.instance = v, Ae(v), v) : (f = o, (v = An.get(m)) && (f = p({}, o), sv(f, v)), a = a.ownerDocument || a, v = a.createElement("script"), Ae(v), Pe(v, "link", f), a.head.appendChild(v), i.instance = v);
        case "void":
          return null;
        default:
          throw Error(r(443, i.type));
      }
    else
      i.type === "stylesheet" && (i.state.loading & 4) === 0 && (f = i.instance, i.state.loading |= 4, Zc(f, o.precedence, a));
    return i.instance;
  }
  function Zc(a, i, o) {
    for (var f = o.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), v = f.length ? f[f.length - 1] : null, m = v, _ = 0; _ < f.length; _++) {
      var j = f[_];
      if (j.dataset.precedence === i) m = j;
      else if (m !== v) break;
    }
    m ? m.parentNode.insertBefore(a, m.nextSibling) : (i = o.nodeType === 9 ? o.head : o, i.insertBefore(a, i.firstChild));
  }
  function fv(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.title == null && (a.title = i.title);
  }
  function sv(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.integrity == null && (a.integrity = i.integrity);
  }
  var Qc = null;
  function H_(a, i, o) {
    if (Qc === null) {
      var f = /* @__PURE__ */ new Map(), v = Qc = /* @__PURE__ */ new Map();
      v.set(o, f);
    } else
      v = Qc, f = v.get(o), f || (f = /* @__PURE__ */ new Map(), v.set(o, f));
    if (f.has(a)) return f;
    for (f.set(a, null), o = o.getElementsByTagName(a), v = 0; v < o.length; v++) {
      var m = o[v];
      if (!(m[Xu] || m[Me] || a === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = m.getAttribute(i) || "";
        _ = a + _;
        var j = f.get(_);
        j ? j.push(m) : f.set(_, [m]);
      }
    }
    return f;
  }
  function I_(a, i, o) {
    a = a.ownerDocument || a, a.head.insertBefore(
      o,
      i === "title" ? a.querySelector("head > title") : null
    );
  }
  function xR(a, i, o) {
    if (o === 1 || i.itemProp != null) return !1;
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
  function G_(a) {
    return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
  }
  function SR(a, i, o, f) {
    if (o.type === "stylesheet" && (typeof f.media != "string" || matchMedia(f.media).matches !== !1) && (o.state.loading & 4) === 0) {
      if (o.instance === null) {
        var v = Xi(f.href), m = i.querySelector(
          Co(v)
        );
        if (m) {
          i = m._p, i !== null && typeof i == "object" && typeof i.then == "function" && (a.count++, a = Wc.bind(a), i.then(a, a)), o.state.loading |= 4, o.instance = m, Ae(m);
          return;
        }
        m = i.ownerDocument || i, f = k_(f), (v = An.get(v)) && fv(f, v), m = m.createElement("link"), Ae(m);
        var _ = m;
        _._p = new Promise(function(j, q) {
          _.onload = j, _.onerror = q;
        }), Pe(m, "link", f), o.instance = m;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(o, i), (i = o.state.preload) && (o.state.loading & 3) === 0 && (a.count++, o = Wc.bind(a), i.addEventListener("load", o), i.addEventListener("error", o));
    }
  }
  var hv = 0;
  function _R(a, i) {
    return a.stylesheets && a.count === 0 && tf(a, a.stylesheets), 0 < a.count || 0 < a.imgCount ? function(o) {
      var f = setTimeout(function() {
        if (a.stylesheets && tf(a, a.stylesheets), a.unsuspend) {
          var m = a.unsuspend;
          a.unsuspend = null, m();
        }
      }, 6e4 + i);
      0 < a.imgBytes && hv === 0 && (hv = 62500 * nR());
      var v = setTimeout(
        function() {
          if (a.waitingForImages = !1, a.count === 0 && (a.stylesheets && tf(a, a.stylesheets), a.unsuspend)) {
            var m = a.unsuspend;
            a.unsuspend = null, m();
          }
        },
        (a.imgBytes > hv ? 50 : 800) + i
      );
      return a.unsuspend = o, function() {
        a.unsuspend = null, clearTimeout(f), clearTimeout(v);
      };
    } : null;
  }
  function Wc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var a = this.unsuspend;
        this.unsuspend = null, a();
      }
    }
  }
  var Jc = null;
  function tf(a, i) {
    a.stylesheets = null, a.unsuspend !== null && (a.count++, Jc = /* @__PURE__ */ new Map(), i.forEach(OR, a), Jc = null, Wc.call(a));
  }
  function OR(a, i) {
    if (!(i.state.loading & 4)) {
      var o = Jc.get(a);
      if (o) var f = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), Jc.set(a, o);
        for (var v = a.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < v.length; m++) {
          var _ = v[m];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (o.set(_.dataset.precedence, _), f = _);
        }
        f && o.set(null, f);
      }
      v = i.instance, _ = v.getAttribute("data-precedence"), m = o.get(_) || f, m === f && o.set(null, v), o.set(_, v), this.count++, f = Wc.bind(this), v.addEventListener("load", f), v.addEventListener("error", f), m ? m.parentNode.insertBefore(v, m.nextSibling) : (a = a.nodeType === 9 ? a.head : a, a.insertBefore(v, a.firstChild)), i.state.loading |= 4;
    }
  }
  var Po = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function AR(a, i, o, f, v, m, _, j, q) {
    this.tag = 1, this.containerInfo = a, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = oh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oh(0), this.hiddenUpdates = oh(null), this.identifierPrefix = f, this.onUncaughtError = v, this.onCaughtError = m, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = q, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Y_(a, i, o, f, v, m, _, j, q, Y, J, rt) {
    return a = new AR(
      a,
      i,
      o,
      _,
      q,
      Y,
      J,
      rt,
      j
    ), i = 1, m === !0 && (i |= 24), m = rn(3, null, null, i), a.current = m, m.stateNode = a, i = Yh(), i.refCount++, a.pooledCache = i, i.refCount++, m.memoizedState = {
      element: f,
      isDehydrated: o,
      cache: i
    }, Fh(m), a;
  }
  function X_(a) {
    return a ? (a = Ai, a) : Ai;
  }
  function K_(a, i, o, f, v, m) {
    v = X_(v), f.context === null ? f.context = v : f.pendingContext = v, f = Fr(i), f.payload = { element: o }, m = m === void 0 ? null : m, m !== null && (f.callback = m), o = Zr(a, f, i), o !== null && (Qe(o, a, i), co(o, a, i));
  }
  function V_(a, i) {
    if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
      var o = a.retryLane;
      a.retryLane = o !== 0 && o < i ? o : i;
    }
  }
  function dv(a, i) {
    V_(a, i), (a = a.alternate) && V_(a, i);
  }
  function F_(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = ja(a, 67108864);
      i !== null && Qe(i, a, 67108864), dv(a, 67108864);
    }
  }
  function Z_(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = cn();
      i = lh(i);
      var o = ja(a, i);
      o !== null && Qe(o, a, i), dv(a, i);
    }
  }
  var ef = !0;
  function wR(a, i, o, f) {
    var v = N.T;
    N.T = null;
    var m = I.p;
    try {
      I.p = 2, vv(a, i, o, f);
    } finally {
      I.p = m, N.T = v;
    }
  }
  function TR(a, i, o, f) {
    var v = N.T;
    N.T = null;
    var m = I.p;
    try {
      I.p = 8, vv(a, i, o, f);
    } finally {
      I.p = m, N.T = v;
    }
  }
  function vv(a, i, o, f) {
    if (ef) {
      var v = pv(f);
      if (v === null)
        tv(
          a,
          i,
          f,
          nf,
          o
        ), W_(a, f);
      else if (MR(
        v,
        a,
        i,
        o,
        f
      ))
        f.stopPropagation();
      else if (W_(a, f), i & 4 && -1 < ER.indexOf(a)) {
        for (; v !== null; ) {
          var m = di(v);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var _ = Aa(m.pendingLanes);
                  if (_ !== 0) {
                    var j = m;
                    for (j.pendingLanes |= 2, j.entangledLanes |= 2; _; ) {
                      var q = 1 << 31 - en(_);
                      j.entanglements[1] |= q, _ &= ~q;
                    }
                    Vn(m), (Lt & 6) === 0 && (Bc = $e() + 500, To(0));
                  }
                }
                break;
              case 31:
              case 13:
                j = ja(m, 2), j !== null && Qe(j, m, 2), kc(), dv(m, 2);
            }
          if (m = pv(f), m === null && tv(
            a,
            i,
            f,
            nf,
            o
          ), m === v) break;
          v = m;
        }
        v !== null && f.stopPropagation();
      } else
        tv(
          a,
          i,
          f,
          null,
          o
        );
    }
  }
  function pv(a) {
    return a = mh(a), yv(a);
  }
  var nf = null;
  function yv(a) {
    if (nf = null, a = hi(a), a !== null) {
      var i = l(a);
      if (i === null) a = null;
      else {
        var o = i.tag;
        if (o === 13) {
          if (a = c(i), a !== null) return a;
          a = null;
        } else if (o === 31) {
          if (a = s(i), a !== null) return a;
          a = null;
        } else if (o === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          a = null;
        } else i !== a && (a = null);
      }
    }
    return nf = a, null;
  }
  function Q_(a) {
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
        switch (Gl()) {
          case i1:
            return 2;
          case u1:
            return 8;
          case Yl:
          case dP:
            return 32;
          case o1:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mv = !1, oa = null, la = null, ca = null, No = /* @__PURE__ */ new Map(), Ro = /* @__PURE__ */ new Map(), fa = [], ER = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function W_(a, i) {
    switch (a) {
      case "focusin":
      case "focusout":
        oa = null;
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
        No.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ro.delete(i.pointerId);
    }
  }
  function qo(a, i, o, f, v, m) {
    return a === null || a.nativeEvent !== m ? (a = {
      blockedOn: i,
      domEventName: o,
      eventSystemFlags: f,
      nativeEvent: m,
      targetContainers: [v]
    }, i !== null && (i = di(i), i !== null && F_(i)), a) : (a.eventSystemFlags |= f, i = a.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), a);
  }
  function MR(a, i, o, f, v) {
    switch (i) {
      case "focusin":
        return oa = qo(
          oa,
          a,
          i,
          o,
          f,
          v
        ), !0;
      case "dragenter":
        return la = qo(
          la,
          a,
          i,
          o,
          f,
          v
        ), !0;
      case "mouseover":
        return ca = qo(
          ca,
          a,
          i,
          o,
          f,
          v
        ), !0;
      case "pointerover":
        var m = v.pointerId;
        return No.set(
          m,
          qo(
            No.get(m) || null,
            a,
            i,
            o,
            f,
            v
          )
        ), !0;
      case "gotpointercapture":
        return m = v.pointerId, Ro.set(
          m,
          qo(
            Ro.get(m) || null,
            a,
            i,
            o,
            f,
            v
          )
        ), !0;
    }
    return !1;
  }
  function J_(a) {
    var i = hi(a.target);
    if (i !== null) {
      var o = l(i);
      if (o !== null) {
        if (i = o.tag, i === 13) {
          if (i = c(o), i !== null) {
            a.blockedOn = i, d1(a.priority, function() {
              Z_(o);
            });
            return;
          }
        } else if (i === 31) {
          if (i = s(o), i !== null) {
            a.blockedOn = i, d1(a.priority, function() {
              Z_(o);
            });
            return;
          }
        } else if (i === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function rf(a) {
    if (a.blockedOn !== null) return !1;
    for (var i = a.targetContainers; 0 < i.length; ) {
      var o = pv(a.nativeEvent);
      if (o === null) {
        o = a.nativeEvent;
        var f = new o.constructor(
          o.type,
          o
        );
        yh = f, o.target.dispatchEvent(f), yh = null;
      } else
        return i = di(o), i !== null && F_(i), a.blockedOn = o, !1;
      i.shift();
    }
    return !0;
  }
  function tO(a, i, o) {
    rf(a) && o.delete(i);
  }
  function jR() {
    mv = !1, oa !== null && rf(oa) && (oa = null), la !== null && rf(la) && (la = null), ca !== null && rf(ca) && (ca = null), No.forEach(tO), Ro.forEach(tO);
  }
  function af(a, i) {
    a.blockedOn === i && (a.blockedOn = null, mv || (mv = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      jR
    )));
  }
  var uf = null;
  function eO(a) {
    uf !== a && (uf = a, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        uf === a && (uf = null);
        for (var i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], v = a[i + 2];
          if (typeof f != "function") {
            if (yv(f || o) === null)
              continue;
            break;
          }
          var m = di(o);
          m !== null && (a.splice(i, 3), i -= 3, pd(
            m,
            {
              pending: !0,
              data: v,
              method: o.method,
              action: f
            },
            f,
            v
          ));
        }
      }
    ));
  }
  function Vi(a) {
    function i(q) {
      return af(q, a);
    }
    oa !== null && af(oa, a), la !== null && af(la, a), ca !== null && af(ca, a), No.forEach(i), Ro.forEach(i);
    for (var o = 0; o < fa.length; o++) {
      var f = fa[o];
      f.blockedOn === a && (f.blockedOn = null);
    }
    for (; 0 < fa.length && (o = fa[0], o.blockedOn === null); )
      J_(o), o.blockedOn === null && fa.shift();
    if (o = (a.ownerDocument || a).$$reactFormReplay, o != null)
      for (f = 0; f < o.length; f += 3) {
        var v = o[f], m = o[f + 1], _ = v[Ye] || null;
        if (typeof m == "function")
          _ || eO(o);
        else if (_) {
          var j = null;
          if (m && m.hasAttribute("formAction")) {
            if (v = m, _ = m[Ye] || null)
              j = _.formAction;
            else if (yv(v) !== null) continue;
          } else j = _.action;
          typeof j == "function" ? o[f + 1] = j : (o.splice(f, 3), f -= 3), eO(o);
        }
      }
  }
  function nO() {
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
      v !== null && (v(), v = null), f || setTimeout(o, 20);
    }
    function o() {
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
      return navigation.addEventListener("navigate", a), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(o, 100), function() {
        f = !0, navigation.removeEventListener("navigate", a), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), v !== null && (v(), v = null);
      };
    }
  }
  function gv(a) {
    this._internalRoot = a;
  }
  of.prototype.render = gv.prototype.render = function(a) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    var o = i.current, f = cn();
    K_(o, f, a, i, null, null);
  }, of.prototype.unmount = gv.prototype.unmount = function() {
    var a = this._internalRoot;
    if (a !== null) {
      this._internalRoot = null;
      var i = a.containerInfo;
      K_(a.current, 2, null, a, null, null), kc(), i[si] = null;
    }
  };
  function of(a) {
    this._internalRoot = a;
  }
  of.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var i = h1();
      a = { blockedOn: null, target: a, priority: i };
      for (var o = 0; o < fa.length && i !== 0 && i < fa[o].priority; o++) ;
      fa.splice(o, 0, a), o === 0 && J_(a);
    }
  };
  var rO = e.version;
  if (rO !== "19.2.8")
    throw Error(
      r(
        527,
        rO,
        "19.2.8"
      )
    );
  I.findDOMNode = function(a) {
    var i = a._reactInternals;
    if (i === void 0)
      throw typeof a.render == "function" ? Error(r(188)) : (a = Object.keys(a).join(","), Error(r(268, a)));
    return a = d(i), a = a !== null ? y(a) : null, a = a === null ? null : a.stateNode, a;
  };
  var CR = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lf.isDisabled && lf.supportsFiber)
      try {
        Iu = lf.inject(
          CR
        ), tn = lf;
      } catch {
      }
  }
  return Xo.createRoot = function(a, i) {
    if (!u(a)) throw Error(r(299));
    var o = !1, f = "", v = fS, m = sS, _ = hS;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (f = i.identifierPrefix), i.onUncaughtError !== void 0 && (v = i.onUncaughtError), i.onCaughtError !== void 0 && (m = i.onCaughtError), i.onRecoverableError !== void 0 && (_ = i.onRecoverableError)), i = Y_(
      a,
      1,
      !1,
      null,
      null,
      o,
      f,
      null,
      v,
      m,
      _,
      nO
    ), a[si] = i.current, Jd(a), new gv(i);
  }, Xo.hydrateRoot = function(a, i, o) {
    if (!u(a)) throw Error(r(299));
    var f = !1, v = "", m = fS, _ = sS, j = hS, q = null;
    return o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (v = o.identifierPrefix), o.onUncaughtError !== void 0 && (m = o.onUncaughtError), o.onCaughtError !== void 0 && (_ = o.onCaughtError), o.onRecoverableError !== void 0 && (j = o.onRecoverableError), o.formState !== void 0 && (q = o.formState)), i = Y_(
      a,
      1,
      !0,
      i,
      o ?? null,
      f,
      v,
      q,
      m,
      _,
      j,
      nO
    ), i.context = X_(null), o = i.current, f = cn(), f = lh(f), v = Fr(f), v.callback = null, Zr(o, v, f), o = f, i.current.lanes = o, Yu(i, o), Vn(i), a[si] = i.current, Jd(a), new of(i);
  }, Xo.version = "19.2.8", Xo;
}
var WM;
function dY() {
  if (WM) return Og.exports;
  WM = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), Og.exports = hY(), Og.exports;
}
var vY = dY();
const pY = `
  --nb-bg: #121a27;
  --nb-panel-2: #17202f;
  --nb-border: #223047;
  --nb-text: #e6edf7;
  --nb-muted: #8b9bb4;
  --nb-green: #34d399;
  --nb-red: #f87171;
  --nb-accent: #60a5fa;
  --nb-radius: 12px;
`, yY = `
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
function mY(t) {
  return `
  :host { display: block; }
  * { box-sizing: border-box; }
  .card {
    ${t === "ha" ? yY : pY}
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
    gap: 10px;
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
  .controls { display: flex; gap: 6px; flex-wrap: wrap; }
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
    width: 30px;
    height: 26px;
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
    top: 44px;
    right: 12px;
    z-index: 20;
  }
  .pinpad {
    background: var(--nb-bg);
    border: 1px solid var(--nb-border);
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
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
function nh(t) {
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
      this._style || (this._style = document.createElement("style"), c.appendChild(this._style)), this._style.textContent = mY(this._config.theme ?? "netboi"), this._mount || (this._mount = document.createElement("div"), c.appendChild(this._mount), this._root = vY.createRoot(this._mount));
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
      this._hass = c, this._entries || HR(c).then((s) => {
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
const rh = {
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
}, ah = { name: "entry", label: "netboi connection", selector: {} }, ih = { name: "title", label: "Title", selector: { text: {} } }, n1 = {
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
}, r1 = {
  name: "range",
  label: "Default range",
  selector: {
    select: {
      mode: "dropdown",
      options: ["1d", "1w", "1m", "3m", "6m", "1y", "all"].map((t) => ({ value: t, label: t }))
    }
  }
}, a1 = {
  name: "show_controls",
  label: "Show range/mode selectors",
  selector: { boolean: {} }
}, uh = {
  name: "auto_conceal_minutes",
  label: "Auto-conceal after reveal (minutes, 0 = stay revealed)",
  selector: { number: { min: 0, max: 43200, mode: "box" } }
};
nh({
  tag: "netboi-worth-card",
  name: "netboi worth chart",
  description: "Net worth over time — the netboi dashboard chart.",
  component: hP,
  schema: [
    ih,
    ah,
    n1,
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
    r1,
    a1,
    uh,
    rh
  ],
  stub: { view: "all", range: "6m" },
  size: 6
});
nh({
  tag: "netboi-flow-card",
  name: "netboi net flow",
  description: "Money kept vs burned per day/week/month (day-to-day accounts).",
  component: hP,
  defaults: { view: "daily", mode: "flow" },
  schema: [ih, ah, r1, a1, uh, rh],
  stub: { range: "3m" },
  size: 6
});
nh({
  tag: "netboi-stat-card",
  name: "netboi stat",
  description: "One big number with its change over a window.",
  component: t3,
  schema: [ih, ah, n1, r1, a1, uh, rh],
  stub: { view: "all", range: "1m" },
  size: 2
});
nh({
  tag: "netboi-accounts-card",
  name: "netboi accounts",
  description: "Accounts grouped by kind with balances and sync freshness.",
  component: QR,
  schema: [ih, ah, n1, uh, rh],
  stub: { view: "all" },
  size: 4
});
console.info("%c netboi cards %c loaded", "background:#60a5fa;color:#0b0f17;border-radius:3px 0 0 3px;padding:1px 4px", "background:#17202f;color:#e6edf7;border-radius:0 3px 3px 0;padding:1px 4px");
