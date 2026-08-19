var qR = Object.defineProperty;
var zR = (t, e, n) => e in t ? qR(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Or = (t, e, n) => zR(t, typeof e != "symbol" ? e + "" : e, n);
var cf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Sv = { exports: {} }, qo = {};
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
function $R() {
  if (uO) return qo;
  uO = 1;
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
  return qo.Fragment = e, qo.jsx = n, qo.jsxs = n, qo;
}
var oO;
function BR() {
  return oO || (oO = 1, Sv.exports = $R()), Sv.exports;
}
var it = BR(), _v = { exports: {} }, _t = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lO;
function LR() {
  if (lO) return _t;
  lO = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), g = Symbol.iterator;
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
  }, _ = Object.assign, x = {};
  function T(P, k, et) {
    this.props = P, this.context = k, this.refs = x, this.updater = et || O;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(P, k) {
    if (typeof P != "object" && typeof P != "function" && P != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, P, k, "setState");
  }, T.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function w() {
  }
  w.prototype = T.prototype;
  function M(P, k, et) {
    this.props = P, this.context = k, this.refs = x, this.updater = et || O;
  }
  var j = M.prototype = new w();
  j.constructor = M, _(j, T.prototype), j.isPureReactComponent = !0;
  var A = Array.isArray;
  function E() {
  }
  var D = { H: null, A: null, T: null, S: null }, R = Object.prototype.hasOwnProperty;
  function z(P, k, et) {
    var ft = et.ref;
    return {
      $$typeof: t,
      type: P,
      key: k,
      ref: ft !== void 0 ? ft : null,
      props: et
    };
  }
  function F(P, k) {
    return z(P.type, k, P.props);
  }
  function U(P) {
    return typeof P == "object" && P !== null && P.$$typeof === t;
  }
  function $(P) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(et) {
      return k[et];
    });
  }
  var K = /\/+/g;
  function Z(P, k) {
    return typeof P == "object" && P !== null && P.key != null ? $("" + P.key) : k.toString(36);
  }
  function V(P) {
    switch (P.status) {
      case "fulfilled":
        return P.value;
      case "rejected":
        throw P.reason;
      default:
        switch (typeof P.status == "string" ? P.then(E, E) : (P.status = "pending", P.then(
          function(k) {
            P.status === "pending" && (P.status = "fulfilled", P.value = k);
          },
          function(k) {
            P.status === "pending" && (P.status = "rejected", P.reason = k);
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
  function N(P, k, et, ft, vt) {
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
                k,
                et,
                ft,
                vt
              );
          }
      }
    if (jt)
      return vt = vt(P), jt = ft === "" ? "." + Z(P, 0) : ft, A(vt) ? (et = "", jt != null && (et = jt.replace(K, "$&/") + "/"), N(vt, k, et, "", function(xt) {
        return xt;
      })) : vt != null && (U(vt) && (vt = F(
        vt,
        et + (vt.key == null || P && P.key === vt.key ? "" : ("" + vt.key).replace(
          K,
          "$&/"
        ) + "/") + jt
      )), k.push(vt)), 1;
    jt = 0;
    var Ut = ft === "" ? "." : ft + ":";
    if (A(P))
      for (var ct = 0; ct < P.length; ct++)
        ft = P[ct], mt = Ut + Z(ft, ct), jt += N(
          ft,
          k,
          et,
          mt,
          vt
        );
    else if (ct = b(P), typeof ct == "function")
      for (P = ct.call(P), ct = 0; !(ft = P.next()).done; )
        ft = ft.value, mt = Ut + Z(ft, ct++), jt += N(
          ft,
          k,
          et,
          mt,
          vt
        );
    else if (mt === "object") {
      if (typeof P.then == "function")
        return N(
          V(P),
          k,
          et,
          ft,
          vt
        );
      throw k = String(P), Error(
        "Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return jt;
  }
  function I(P, k, et) {
    if (P == null) return P;
    var ft = [], vt = 0;
    return N(P, ft, "", "", function(mt) {
      return k.call(et, mt, vt++);
    }), ft;
  }
  function W(P) {
    if (P._status === -1) {
      var k = P._result;
      k = k(), k.then(
        function(et) {
          (P._status === 0 || P._status === -1) && (P._status = 1, P._result = et);
        },
        function(et) {
          (P._status === 0 || P._status === -1) && (P._status = 2, P._result = et);
        }
      ), P._status === -1 && (P._status = 0, P._result = k);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ut = typeof reportError == "function" ? reportError : function(P) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var k = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof P == "object" && P !== null && typeof P.message == "string" ? String(P.message) : String(P),
        error: P
      });
      if (!window.dispatchEvent(k)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", P);
      return;
    }
    console.error(P);
  }, lt = {
    map: I,
    forEach: function(P, k, et) {
      I(
        P,
        function() {
          k.apply(this, arguments);
        },
        et
      );
    },
    count: function(P) {
      var k = 0;
      return I(P, function() {
        k++;
      }), k;
    },
    toArray: function(P) {
      return I(P, function(k) {
        return k;
      }) || [];
    },
    only: function(P) {
      if (!U(P))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return P;
    }
  };
  return _t.Activity = p, _t.Children = lt, _t.Component = T, _t.Fragment = n, _t.Profiler = u, _t.PureComponent = M, _t.StrictMode = r, _t.Suspense = h, _t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, _t.__COMPILER_RUNTIME = {
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
  }, _t.cloneElement = function(P, k, et) {
    if (P == null)
      throw Error(
        "The argument must be a React element, but you passed " + P + "."
      );
    var ft = _({}, P.props), vt = P.key;
    if (k != null)
      for (mt in k.key !== void 0 && (vt = "" + k.key), k)
        !R.call(k, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && k.ref === void 0 || (ft[mt] = k[mt]);
    var mt = arguments.length - 2;
    if (mt === 1) ft.children = et;
    else if (1 < mt) {
      for (var jt = Array(mt), Ut = 0; Ut < mt; Ut++)
        jt[Ut] = arguments[Ut + 2];
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
  }, _t.createElement = function(P, k, et) {
    var ft, vt = {}, mt = null;
    if (k != null)
      for (ft in k.key !== void 0 && (mt = "" + k.key), k)
        R.call(k, ft) && ft !== "key" && ft !== "__self" && ft !== "__source" && (vt[ft] = k[ft]);
    var jt = arguments.length - 2;
    if (jt === 1) vt.children = et;
    else if (1 < jt) {
      for (var Ut = Array(jt), ct = 0; ct < jt; ct++)
        Ut[ct] = arguments[ct + 2];
      vt.children = Ut;
    }
    if (P && P.defaultProps)
      for (ft in jt = P.defaultProps, jt)
        vt[ft] === void 0 && (vt[ft] = jt[ft]);
    return z(P, mt, vt);
  }, _t.createRef = function() {
    return { current: null };
  }, _t.forwardRef = function(P) {
    return { $$typeof: s, render: P };
  }, _t.isValidElement = U, _t.lazy = function(P) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: P },
      _init: W
    };
  }, _t.memo = function(P, k) {
    return {
      $$typeof: d,
      type: P,
      compare: k === void 0 ? null : k
    };
  }, _t.startTransition = function(P) {
    var k = D.T, et = {};
    D.T = et;
    try {
      var ft = P(), vt = D.S;
      vt !== null && vt(et, ft), typeof ft == "object" && ft !== null && typeof ft.then == "function" && ft.then(E, ut);
    } catch (mt) {
      ut(mt);
    } finally {
      k !== null && et.types !== null && (k.types = et.types), D.T = k;
    }
  }, _t.unstable_useCacheRefresh = function() {
    return D.H.useCacheRefresh();
  }, _t.use = function(P) {
    return D.H.use(P);
  }, _t.useActionState = function(P, k, et) {
    return D.H.useActionState(P, k, et);
  }, _t.useCallback = function(P, k) {
    return D.H.useCallback(P, k);
  }, _t.useContext = function(P) {
    return D.H.useContext(P);
  }, _t.useDebugValue = function() {
  }, _t.useDeferredValue = function(P, k) {
    return D.H.useDeferredValue(P, k);
  }, _t.useEffect = function(P, k) {
    return D.H.useEffect(P, k);
  }, _t.useEffectEvent = function(P) {
    return D.H.useEffectEvent(P);
  }, _t.useId = function() {
    return D.H.useId();
  }, _t.useImperativeHandle = function(P, k, et) {
    return D.H.useImperativeHandle(P, k, et);
  }, _t.useInsertionEffect = function(P, k) {
    return D.H.useInsertionEffect(P, k);
  }, _t.useLayoutEffect = function(P, k) {
    return D.H.useLayoutEffect(P, k);
  }, _t.useMemo = function(P, k) {
    return D.H.useMemo(P, k);
  }, _t.useOptimistic = function(P, k) {
    return D.H.useOptimistic(P, k);
  }, _t.useReducer = function(P, k, et) {
    return D.H.useReducer(P, k, et);
  }, _t.useRef = function(P) {
    return D.H.useRef(P);
  }, _t.useState = function(P) {
    return D.H.useState(P);
  }, _t.useSyncExternalStore = function(P, k, et) {
    return D.H.useSyncExternalStore(
      P,
      k,
      et
    );
  }, _t.useTransition = function() {
    return D.H.useTransition();
  }, _t.version = "19.2.8", _t;
}
var cO;
function Vb() {
  return cO || (cO = 1, _v.exports = LR()), _v.exports;
}
var rt = Vb();
const B = /* @__PURE__ */ Qt(rt), ej = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
}), UR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}), kR = "•••••";
function Zo(t, e = !1) {
  return (e ? UR : ej).format(t);
}
const HR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1
});
function IR(t) {
  return HR.format(t);
}
function GR(t) {
  return `${t >= 0 ? "+" : ""}${ej.format(t)}`;
}
function Mg(t) {
  return isFinite(t) ? `${t >= 0 ? "+" : ""}${(t * 100).toFixed(1)}%` : "–";
}
function Vi(t, e = !1) {
  return new Date(t).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...e ? { hour: "numeric", minute: "2-digit" } : {}
  });
}
const ou = [
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
  const [u, l] = rt.useState(""), [c, s] = rt.useState(!1), h = async (d) => {
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
const WR = 6e4;
function Fb(t, e, n) {
  const [r, u] = rt.useState(null), [l, c] = rt.useState(null), [s, h] = rt.useState(!0), [d, y] = rt.useState(null), [p, g] = rt.useState(0), b = rt.useCallback(() => g((T) => T + 1), []), O = rt.useCallback(() => {
    c(null), u(
      (T) => T && { ...T, me: { ...T.me, censored: !0, revealed: !1, reveal_expires: null } }
    ), h(!0), b();
  }, [b]), _ = r && !r.me.censored && r.me.reveal_expires ? new Date(r.me.reveal_expires).getTime() : null;
  rt.useEffect(() => {
    let T = !0;
    Promise.all([XR(t, e), KR(t, e, n)]).then(([M, j]) => {
      T && (u(M), c(j.series), h(j.censored), y(null));
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
    if (_ == null) return;
    const T = _ - Date.now() + 1e3;
    if (T <= 0) {
      O();
      return;
    }
    const w = setTimeout(O, T);
    return () => clearTimeout(w);
  }, [_, O]), rt.useEffect(() => {
    const T = () => {
      document.visibilityState === "visible" && (_ != null && Date.now() >= _ ? O() : b());
    };
    return document.addEventListener("visibilitychange", T), window.addEventListener("pageshow", T), () => {
      document.removeEventListener("visibilitychange", T), window.removeEventListener("pageshow", T);
    };
  }, [_, O, b]), { overview: r, series: l, masked: s, error: d, refresh: b };
}
const JR = ({ open: t }) => /* @__PURE__ */ it.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", children: [
  /* @__PURE__ */ it.jsx("rect", { x: "4", y: "11", width: "16", height: "10", rx: "2" }),
  t ? /* @__PURE__ */ it.jsx("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" }) : /* @__PURE__ */ it.jsx("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] });
function Zb({
  hass: t,
  entry: e,
  overview: n,
  autoConcealMinutes: r,
  onChanged: u
}) {
  const [l, c] = rt.useState(!1), [s, h] = rt.useState(null), d = n.me;
  if (!d.can_reveal) return null;
  const y = r ?? n.default_reveal_ttl_minutes, p = async (b) => {
    const O = await FR(t, e, b, y).catch((_) => ({
      ok: !1,
      error: (_ == null ? void 0 : _.message) ?? String(_)
    }));
    return O.ok ? (h(null), c(!1), u(), !0) : (h(O.error ?? "rejected"), !1);
  }, g = async () => {
    if (!d.censored) {
      await ZR(t, e).catch(() => {
      }), u();
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
function jg({
  options: t,
  value: e,
  onChange: n
}) {
  return /* @__PURE__ */ it.jsx("span", { className: "seg", children: t.map((r) => /* @__PURE__ */ it.jsx("button", { className: r === e ? "active" : "", onClick: () => n(r), children: r }, r)) });
}
function t3(t) {
  return t ? Date.now() - new Date(t).getTime() > 48 * 3600 * 1e3 : !0;
}
function Qb(t) {
  return rt.useMemo(
    () => t ? t.accounts.filter((e) => !e.hidden) : [],
    [t]
  );
}
const e3 = ["cash", "investment", "credit", "loan", "other"];
function n3(t, e) {
  if (t.balance == null) return "–";
  const n = parseFloat(t.balance);
  return e ? `${n.toFixed(1)}%` : Zo(n, !0);
}
function r3({
  hass: t,
  config: e
}) {
  const n = ou.find((y) => y.key === (e.view ?? "all")) ?? ou[2], { overview: r, masked: u, error: l, refresh: c } = Fb(t, e.entry, "1m"), s = Qb(r), h = rt.useMemo(() => s.filter(n.pick), [s, n]), d = rt.useMemo(
    () => e3.map((y) => ({
      kind: y,
      accounts: h.filter((p) => p.kind === y)
    })).filter((y) => y.accounts.length > 0),
    [h]
  );
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? "Accounts" }),
      r && /* @__PURE__ */ it.jsx(
        Zb,
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
    !l && r && d.length > 0 && /* @__PURE__ */ it.jsx("table", { children: /* @__PURE__ */ it.jsx("tbody", { children: d.map((y) => /* @__PURE__ */ it.jsx(a3, { kind: y.kind, accounts: y.accounts, masked: u }, y.kind)) }) })
  ] });
}
function a3({
  kind: t,
  accounts: e,
  masked: n
}) {
  return /* @__PURE__ */ it.jsxs(it.Fragment, { children: [
    /* @__PURE__ */ it.jsx("tr", { className: "kind-row", children: /* @__PURE__ */ it.jsx("td", { colSpan: 2, children: t }) }),
    e.map((r) => /* @__PURE__ */ it.jsxs("tr", { children: [
      /* @__PURE__ */ it.jsxs("td", { children: [
        /* @__PURE__ */ it.jsx("span", { className: `dot ${t3(r.balance_at) ? "stale" : ""}` }),
        r.nickname || r.name,
        /* @__PURE__ */ it.jsxs("span", { className: "muted", children: [
          " · ",
          r.org_name || r.org_domain
        ] })
      ] }),
      /* @__PURE__ */ it.jsx("td", { className: "num", children: n3(r, n) })
    ] }, r.id))
  ] });
}
function nj(t) {
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
function i3(t, e, n) {
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
function Ov(t, e) {
  let n = 0;
  for (const r of e) {
    const u = t.values[r.id] ?? 0;
    u < 0 && (n += u);
  }
  return n;
}
const rj = ["1d", "1w", "1m", "3m", "6m", "1y", "all"];
function u3({
  hass: t,
  config: e
}) {
  const n = ou.find((b) => b.key === (e.view ?? "all")) ?? ou[2], [r, u] = rt.useState(e.range ?? "1m"), { overview: l, series: c, masked: s, error: h, refresh: d } = Fb(t, e.entry, r), y = Qb(l), p = rt.useMemo(() => y.filter(n.pick), [y, n]), g = rt.useMemo(() => {
    if (!c) return null;
    const b = new Set(p.map((T) => T.id)), O = nj(c.filter((T) => b.has(T.account_id)));
    if (O.length === 0) return null;
    const _ = Fn(O[0], p), x = Fn(O[O.length - 1], p);
    return { last: x, delta: _ !== 0 ? (x - _) / Math.abs(_) : null };
  }, [c, p]);
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? n.label }),
      e.show_controls !== !1 && /* @__PURE__ */ it.jsx("span", { className: "controls", children: /* @__PURE__ */ it.jsx(jg, { options: rj, value: r, onChange: u }) }),
      l && /* @__PURE__ */ it.jsx(
        Zb,
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
      /* @__PURE__ */ it.jsx("div", { className: "stat-value", children: s ? kR : Zo(g.last) }),
      g.delta != null && !n.flow && /* @__PURE__ */ it.jsxs("div", { className: `stat-delta ${g.delta >= 0 ? "up" : "down"}`, children: [
        Mg(g.delta),
        " over ",
        r
      ] })
    ] })
  ] });
}
function aj(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (e = 0; e < u; e++) t[e] && (n = aj(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function qt() {
  for (var t, e, n = 0, r = "", u = arguments.length; n < u; n++) (t = arguments[n]) && (e = aj(t)) && (r && (r += " "), r += e);
  return r;
}
var Av, fO;
function Je() {
  if (fO) return Av;
  fO = 1;
  var t = Array.isArray;
  return Av = t, Av;
}
var wv, sO;
function ij() {
  if (sO) return wv;
  sO = 1;
  var t = typeof cf == "object" && cf && cf.Object === Object && cf;
  return wv = t, wv;
}
var Tv, hO;
function rr() {
  if (hO) return Tv;
  hO = 1;
  var t = ij(), e = typeof self == "object" && self && self.Object === Object && self, n = t || e || Function("return this")();
  return Tv = n, Tv;
}
var Ev, dO;
function $l() {
  if (dO) return Ev;
  dO = 1;
  var t = rr(), e = t.Symbol;
  return Ev = e, Ev;
}
var Mv, vO;
function o3() {
  if (vO) return Mv;
  vO = 1;
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
  return Mv = l, Mv;
}
var jv, pO;
function l3() {
  if (pO) return jv;
  pO = 1;
  var t = Object.prototype, e = t.toString;
  function n(r) {
    return e.call(r);
  }
  return jv = n, jv;
}
var Cv, yO;
function $r() {
  if (yO) return Cv;
  yO = 1;
  var t = $l(), e = o3(), n = l3(), r = "[object Null]", u = "[object Undefined]", l = t ? t.toStringTag : void 0;
  function c(s) {
    return s == null ? s === void 0 ? u : r : l && l in Object(s) ? e(s) : n(s);
  }
  return Cv = c, Cv;
}
var Dv, mO;
function Br() {
  if (mO) return Dv;
  mO = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return Dv = t, Dv;
}
var Pv, gO;
function Pu() {
  if (gO) return Pv;
  gO = 1;
  var t = $r(), e = Br(), n = "[object Symbol]";
  function r(u) {
    return typeof u == "symbol" || e(u) && t(u) == n;
  }
  return Pv = r, Pv;
}
var Nv, bO;
function Wb() {
  if (bO) return Nv;
  bO = 1;
  var t = Je(), e = Pu(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function u(l, c) {
    if (t(l))
      return !1;
    var s = typeof l;
    return s == "number" || s == "symbol" || s == "boolean" || l == null || e(l) ? !0 : r.test(l) || !n.test(l) || c != null && l in Object(c);
  }
  return Nv = u, Nv;
}
var Rv, xO;
function ba() {
  if (xO) return Rv;
  xO = 1;
  function t(e) {
    var n = typeof e;
    return e != null && (n == "object" || n == "function");
  }
  return Rv = t, Rv;
}
var qv, SO;
function Jb() {
  if (SO) return qv;
  SO = 1;
  var t = $r(), e = ba(), n = "[object AsyncFunction]", r = "[object Function]", u = "[object GeneratorFunction]", l = "[object Proxy]";
  function c(s) {
    if (!e(s))
      return !1;
    var h = t(s);
    return h == r || h == u || h == n || h == l;
  }
  return qv = c, qv;
}
var zv, _O;
function c3() {
  if (_O) return zv;
  _O = 1;
  var t = rr(), e = t["__core-js_shared__"];
  return zv = e, zv;
}
var $v, OO;
function f3() {
  if (OO) return $v;
  OO = 1;
  var t = c3(), e = (function() {
    var r = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!e && e in r;
  }
  return $v = n, $v;
}
var Bv, AO;
function uj() {
  if (AO) return Bv;
  AO = 1;
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
  return Bv = n, Bv;
}
var Lv, wO;
function s3() {
  if (wO) return Lv;
  wO = 1;
  var t = Jb(), e = f3(), n = ba(), r = uj(), u = /[\\^$.*+?()[\]{}|]/g, l = /^\[object .+?Constructor\]$/, c = Function.prototype, s = Object.prototype, h = c.toString, d = s.hasOwnProperty, y = RegExp(
    "^" + h.call(d).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(g) {
    if (!n(g) || e(g))
      return !1;
    var b = t(g) ? y : l;
    return b.test(r(g));
  }
  return Lv = p, Lv;
}
var Uv, TO;
function h3() {
  if (TO) return Uv;
  TO = 1;
  function t(e, n) {
    return e == null ? void 0 : e[n];
  }
  return Uv = t, Uv;
}
var kv, EO;
function ai() {
  if (EO) return kv;
  EO = 1;
  var t = s3(), e = h3();
  function n(r, u) {
    var l = e(r, u);
    return t(l) ? l : void 0;
  }
  return kv = n, kv;
}
var Hv, MO;
function Ms() {
  if (MO) return Hv;
  MO = 1;
  var t = ai(), e = t(Object, "create");
  return Hv = e, Hv;
}
var Iv, jO;
function d3() {
  if (jO) return Iv;
  jO = 1;
  var t = Ms();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Iv = e, Iv;
}
var Gv, CO;
function v3() {
  if (CO) return Gv;
  CO = 1;
  function t(e) {
    var n = this.has(e) && delete this.__data__[e];
    return this.size -= n ? 1 : 0, n;
  }
  return Gv = t, Gv;
}
var Yv, DO;
function p3() {
  if (DO) return Yv;
  DO = 1;
  var t = Ms(), e = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function u(l) {
    var c = this.__data__;
    if (t) {
      var s = c[l];
      return s === e ? void 0 : s;
    }
    return r.call(c, l) ? c[l] : void 0;
  }
  return Yv = u, Yv;
}
var Xv, PO;
function y3() {
  if (PO) return Xv;
  PO = 1;
  var t = Ms(), e = Object.prototype, n = e.hasOwnProperty;
  function r(u) {
    var l = this.__data__;
    return t ? l[u] !== void 0 : n.call(l, u);
  }
  return Xv = r, Xv;
}
var Kv, NO;
function m3() {
  if (NO) return Kv;
  NO = 1;
  var t = Ms(), e = "__lodash_hash_undefined__";
  function n(r, u) {
    var l = this.__data__;
    return this.size += this.has(r) ? 0 : 1, l[r] = t && u === void 0 ? e : u, this;
  }
  return Kv = n, Kv;
}
var Vv, RO;
function g3() {
  if (RO) return Vv;
  RO = 1;
  var t = d3(), e = v3(), n = p3(), r = y3(), u = m3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = u, Vv = l, Vv;
}
var Fv, qO;
function b3() {
  if (qO) return Fv;
  qO = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return Fv = t, Fv;
}
var Zv, zO;
function t0() {
  if (zO) return Zv;
  zO = 1;
  function t(e, n) {
    return e === n || e !== e && n !== n;
  }
  return Zv = t, Zv;
}
var Qv, $O;
function js() {
  if ($O) return Qv;
  $O = 1;
  var t = t0();
  function e(n, r) {
    for (var u = n.length; u--; )
      if (t(n[u][0], r))
        return u;
    return -1;
  }
  return Qv = e, Qv;
}
var Wv, BO;
function x3() {
  if (BO) return Wv;
  BO = 1;
  var t = js(), e = Array.prototype, n = e.splice;
  function r(u) {
    var l = this.__data__, c = t(l, u);
    if (c < 0)
      return !1;
    var s = l.length - 1;
    return c == s ? l.pop() : n.call(l, c, 1), --this.size, !0;
  }
  return Wv = r, Wv;
}
var Jv, LO;
function S3() {
  if (LO) return Jv;
  LO = 1;
  var t = js();
  function e(n) {
    var r = this.__data__, u = t(r, n);
    return u < 0 ? void 0 : r[u][1];
  }
  return Jv = e, Jv;
}
var tp, UO;
function _3() {
  if (UO) return tp;
  UO = 1;
  var t = js();
  function e(n) {
    return t(this.__data__, n) > -1;
  }
  return tp = e, tp;
}
var ep, kO;
function O3() {
  if (kO) return ep;
  kO = 1;
  var t = js();
  function e(n, r) {
    var u = this.__data__, l = t(u, n);
    return l < 0 ? (++this.size, u.push([n, r])) : u[l][1] = r, this;
  }
  return ep = e, ep;
}
var np, HO;
function Cs() {
  if (HO) return np;
  HO = 1;
  var t = b3(), e = x3(), n = S3(), r = _3(), u = O3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = u, np = l, np;
}
var rp, IO;
function e0() {
  if (IO) return rp;
  IO = 1;
  var t = ai(), e = rr(), n = t(e, "Map");
  return rp = n, rp;
}
var ap, GO;
function A3() {
  if (GO) return ap;
  GO = 1;
  var t = g3(), e = Cs(), n = e0();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (n || e)(),
      string: new t()
    };
  }
  return ap = r, ap;
}
var ip, YO;
function w3() {
  if (YO) return ip;
  YO = 1;
  function t(e) {
    var n = typeof e;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
  }
  return ip = t, ip;
}
var up, XO;
function Ds() {
  if (XO) return up;
  XO = 1;
  var t = w3();
  function e(n, r) {
    var u = n.__data__;
    return t(r) ? u[typeof r == "string" ? "string" : "hash"] : u.map;
  }
  return up = e, up;
}
var op, KO;
function T3() {
  if (KO) return op;
  KO = 1;
  var t = Ds();
  function e(n) {
    var r = t(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return op = e, op;
}
var lp, VO;
function E3() {
  if (VO) return lp;
  VO = 1;
  var t = Ds();
  function e(n) {
    return t(this, n).get(n);
  }
  return lp = e, lp;
}
var cp, FO;
function M3() {
  if (FO) return cp;
  FO = 1;
  var t = Ds();
  function e(n) {
    return t(this, n).has(n);
  }
  return cp = e, cp;
}
var fp, ZO;
function j3() {
  if (ZO) return fp;
  ZO = 1;
  var t = Ds();
  function e(n, r) {
    var u = t(this, n), l = u.size;
    return u.set(n, r), this.size += u.size == l ? 0 : 1, this;
  }
  return fp = e, fp;
}
var sp, QO;
function n0() {
  if (QO) return sp;
  QO = 1;
  var t = A3(), e = T3(), n = E3(), r = M3(), u = j3();
  function l(c) {
    var s = -1, h = c == null ? 0 : c.length;
    for (this.clear(); ++s < h; ) {
      var d = c[s];
      this.set(d[0], d[1]);
    }
  }
  return l.prototype.clear = t, l.prototype.delete = e, l.prototype.get = n, l.prototype.has = r, l.prototype.set = u, sp = l, sp;
}
var hp, WO;
function oj() {
  if (WO) return hp;
  WO = 1;
  var t = n0(), e = "Expected a function";
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
  return n.Cache = t, hp = n, hp;
}
var dp, JO;
function C3() {
  if (JO) return dp;
  JO = 1;
  var t = oj(), e = 500;
  function n(r) {
    var u = t(r, function(c) {
      return l.size === e && l.clear(), c;
    }), l = u.cache;
    return u;
  }
  return dp = n, dp;
}
var vp, tA;
function D3() {
  if (tA) return vp;
  tA = 1;
  var t = C3(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = t(function(u) {
    var l = [];
    return u.charCodeAt(0) === 46 && l.push(""), u.replace(e, function(c, s, h, d) {
      l.push(h ? d.replace(n, "$1") : s || c);
    }), l;
  });
  return vp = r, vp;
}
var pp, eA;
function r0() {
  if (eA) return pp;
  eA = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length, l = Array(u); ++r < u; )
      l[r] = n(e[r], r, e);
    return l;
  }
  return pp = t, pp;
}
var yp, nA;
function P3() {
  if (nA) return yp;
  nA = 1;
  var t = $l(), e = r0(), n = Je(), r = Pu(), u = t ? t.prototype : void 0, l = u ? u.toString : void 0;
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
  return yp = c, yp;
}
var mp, rA;
function lj() {
  if (rA) return mp;
  rA = 1;
  var t = P3();
  function e(n) {
    return n == null ? "" : t(n);
  }
  return mp = e, mp;
}
var gp, aA;
function cj() {
  if (aA) return gp;
  aA = 1;
  var t = Je(), e = Wb(), n = D3(), r = lj();
  function u(l, c) {
    return t(l) ? l : e(l, c) ? [l] : n(r(l));
  }
  return gp = u, gp;
}
var bp, iA;
function Ps() {
  if (iA) return bp;
  iA = 1;
  var t = Pu();
  function e(n) {
    if (typeof n == "string" || t(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return bp = e, bp;
}
var xp, uA;
function a0() {
  if (uA) return xp;
  uA = 1;
  var t = cj(), e = Ps();
  function n(r, u) {
    u = t(u, r);
    for (var l = 0, c = u.length; r != null && l < c; )
      r = r[e(u[l++])];
    return l && l == c ? r : void 0;
  }
  return xp = n, xp;
}
var Sp, oA;
function fj() {
  if (oA) return Sp;
  oA = 1;
  var t = a0();
  function e(n, r, u) {
    var l = n == null ? void 0 : t(n, r);
    return l === void 0 ? u : l;
  }
  return Sp = e, Sp;
}
var N3 = fj();
const jn = /* @__PURE__ */ Qt(N3);
var _p, lA;
function R3() {
  if (lA) return _p;
  lA = 1;
  function t(e) {
    return e == null;
  }
  return _p = t, _p;
}
var q3 = R3();
const Mt = /* @__PURE__ */ Qt(q3);
var Op, cA;
function z3() {
  if (cA) return Op;
  cA = 1;
  var t = $r(), e = Je(), n = Br(), r = "[object String]";
  function u(l) {
    return typeof l == "string" || !e(l) && n(l) && t(l) == r;
  }
  return Op = u, Op;
}
var $3 = z3();
const Ja = /* @__PURE__ */ Qt($3);
var B3 = Jb();
const At = /* @__PURE__ */ Qt(B3);
var L3 = ba();
const Nu = /* @__PURE__ */ Qt(L3);
var Ap = { exports: {} }, kt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fA;
function U3() {
  if (fA) return kt;
  fA = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function _(x) {
    if (typeof x == "object" && x !== null) {
      var T = x.$$typeof;
      switch (T) {
        case t:
          switch (x = x.type, x) {
            case n:
            case u:
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
  return kt.ContextConsumer = c, kt.ContextProvider = l, kt.Element = t, kt.ForwardRef = h, kt.Fragment = n, kt.Lazy = g, kt.Memo = p, kt.Portal = e, kt.Profiler = u, kt.StrictMode = r, kt.Suspense = d, kt.SuspenseList = y, kt.isAsyncMode = function() {
    return !1;
  }, kt.isConcurrentMode = function() {
    return !1;
  }, kt.isContextConsumer = function(x) {
    return _(x) === c;
  }, kt.isContextProvider = function(x) {
    return _(x) === l;
  }, kt.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, kt.isForwardRef = function(x) {
    return _(x) === h;
  }, kt.isFragment = function(x) {
    return _(x) === n;
  }, kt.isLazy = function(x) {
    return _(x) === g;
  }, kt.isMemo = function(x) {
    return _(x) === p;
  }, kt.isPortal = function(x) {
    return _(x) === e;
  }, kt.isProfiler = function(x) {
    return _(x) === u;
  }, kt.isStrictMode = function(x) {
    return _(x) === r;
  }, kt.isSuspense = function(x) {
    return _(x) === d;
  }, kt.isSuspenseList = function(x) {
    return _(x) === y;
  }, kt.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === u || x === r || x === d || x === y || x === b || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === p || x.$$typeof === l || x.$$typeof === c || x.$$typeof === h || x.$$typeof === O || x.getModuleId !== void 0);
  }, kt.typeOf = _, kt;
}
var sA;
function k3() {
  return sA || (sA = 1, Ap.exports = U3()), Ap.exports;
}
var H3 = k3(), wp, hA;
function sj() {
  if (hA) return wp;
  hA = 1;
  var t = $r(), e = Br(), n = "[object Number]";
  function r(u) {
    return typeof u == "number" || e(u) && t(u) == n;
  }
  return wp = r, wp;
}
var Tp, dA;
function I3() {
  if (dA) return Tp;
  dA = 1;
  var t = sj();
  function e(n) {
    return t(n) && n != +n;
  }
  return Tp = e, Tp;
}
var G3 = I3();
const Ru = /* @__PURE__ */ Qt(G3);
var Y3 = sj();
const X3 = /* @__PURE__ */ Qt(Y3);
var Hn = function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}, Ya = function(e) {
  return Ja(e) && e.indexOf("%") === e.length - 1;
}, st = function(e) {
  return X3(e) && !Ru(e);
}, K3 = function(e) {
  return Mt(e);
}, _e = function(e) {
  return st(e) || Ja(e);
}, V3 = 0, qu = function(e) {
  var n = ++V3;
  return "".concat(e || "").concat(n);
}, ti = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!st(e) && !Ja(e))
    return r;
  var l;
  if (Ya(e)) {
    var c = e.indexOf("%");
    l = n * parseFloat(e.slice(0, c)) / 100;
  } else
    l = +e;
  return Ru(l) && (l = r), u && l > n && (l = n), l;
}, pa = function(e) {
  if (!e)
    return null;
  var n = Object.keys(e);
  return n && n.length ? e[n[0]] : null;
}, F3 = function(e) {
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
function Mf(t, e, n) {
  return !t || !t.length ? null : t.find(function(r) {
    return r && (typeof e == "function" ? e(r) : jn(r, e)) === n;
  });
}
var Z3 = function(e, n) {
  return st(e) && st(n) ? e - n : Ja(e) && Ja(n) ? e.localeCompare(n) : e instanceof Date && n instanceof Date ? e.getTime() - n.getTime() : String(e).localeCompare(String(n));
};
function nu(t, e) {
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n]))
      return !1;
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
      return !1;
  return !0;
}
function Cg(t) {
  "@babel/helpers - typeof";
  return Cg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cg(t);
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
], vA = ["points", "pathLength"], Ep = {
  svg: Q3,
  polygon: vA,
  polyline: vA
}, i0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], jf = function(e, n) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ rt.isValidElement(e) && (r = e.props), !Nu(r))
    return null;
  var u = {};
  return Object.keys(r).forEach(function(l) {
    i0.includes(l) && (u[l] = n || function(c) {
      return r[l](r, c);
    });
  }), u;
}, J3 = function(e, n, r) {
  return function(u) {
    return e(n, r, u), null;
  };
}, Cf = function(e, n, r) {
  if (!Nu(e) || Cg(e) !== "object")
    return null;
  var u = null;
  return Object.keys(e).forEach(function(l) {
    var c = e[l];
    i0.includes(l) && typeof c == "function" && (u || (u = {}), u[l] = J3(c, n, r));
  }), u;
}, tq = ["children"], eq = ["children"];
function pA(t, e) {
  if (t == null) return {};
  var n = nq(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function Dg(t) {
  "@babel/helpers - typeof";
  return Dg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dg(t);
}
var yA = {
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
}, mA = null, Mp = null, u0 = function t(e) {
  if (e === mA && Array.isArray(Mp))
    return Mp;
  var n = [];
  return rt.Children.forEach(e, function(r) {
    Mt(r) || (H3.isFragment(r) ? n = n.concat(t(r.props.children)) : n.push(r));
  }), Mp = n, mA = e, n;
};
function Cn(t, e) {
  var n = [], r = [];
  return Array.isArray(e) ? r = e.map(function(u) {
    return Cr(u);
  }) : r = [Cr(e)], u0(t).forEach(function(u) {
    var l = jn(u, "type.displayName") || jn(u, "type.name");
    r.indexOf(l) !== -1 && n.push(u);
  }), n;
}
function hn(t, e) {
  var n = Cn(t, e);
  return n && n[0];
}
var gA = function(e) {
  if (!e || !e.props)
    return !1;
  var n = e.props, r = n.width, u = n.height;
  return !(!st(r) || r <= 0 || !st(u) || u <= 0);
}, rq = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], aq = function(e) {
  return e && e.type && Ja(e.type) && rq.indexOf(e.type) >= 0;
}, hj = function(e) {
  return e && Dg(e) === "object" && "clipDot" in e;
}, iq = function(e, n, r, u) {
  var l, c = (l = Ep == null ? void 0 : Ep[u]) !== null && l !== void 0 ? l : [];
  return n.startsWith("data-") || !At(e) && (u && c.includes(n) || W3.includes(n)) || r && i0.includes(n);
}, Et = function(e, n, r) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var u = e;
  if (/* @__PURE__ */ rt.isValidElement(e) && (u = e.props), !Nu(u))
    return null;
  var l = {};
  return Object.keys(u).forEach(function(c) {
    var s;
    iq((s = u) === null || s === void 0 ? void 0 : s[c], c, n, r) && (l[c] = u[c]);
  }), l;
}, Pg = function t(e, n) {
  if (e === n)
    return !0;
  var r = rt.Children.count(e);
  if (r !== rt.Children.count(n))
    return !1;
  if (r === 0)
    return !0;
  if (r === 1)
    return bA(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
  for (var u = 0; u < r; u++) {
    var l = e[u], c = n[u];
    if (Array.isArray(l) || Array.isArray(c)) {
      if (!t(l, c))
        return !1;
    } else if (!bA(l, c))
      return !1;
  }
  return !0;
}, bA = function(e, n) {
  if (Mt(e) && Mt(n))
    return !0;
  if (!Mt(e) && !Mt(n)) {
    var r = e.props || {}, u = r.children, l = pA(r, tq), c = n.props || {}, s = c.children, h = pA(c, eq);
    return u && s ? nu(l, h) && Pg(u, s) : !u && !s ? nu(l, h) : !1;
  }
  return !1;
}, xA = function(e, n) {
  var r = [], u = {};
  return u0(e).forEach(function(l, c) {
    if (aq(l))
      r.push(l);
    else if (l) {
      var s = Cr(l.type), h = n[s] || {}, d = h.handler, y = h.once;
      if (d && (!y || !u[s])) {
        var p = d(l, s, c);
        r.push(p), u[s] = !0;
      }
    }
  }), r;
}, uq = function(e) {
  var n = e && e.type;
  return n && yA[n] ? yA[n] : null;
}, oq = function(e, n) {
  return u0(n).indexOf(e);
}, lq = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function cq(t, e) {
  if (t == null) return {};
  var n = fq(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function Rg(t) {
  var e = t.children, n = t.width, r = t.height, u = t.viewBox, l = t.className, c = t.style, s = t.title, h = t.desc, d = cq(t, lq), y = u || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, p = qt("recharts-surface", l);
  return /* @__PURE__ */ B.createElement("svg", Ng({}, Et(d, !0, "svg"), {
    className: p,
    width: n,
    height: r,
    style: c,
    viewBox: "".concat(y.x, " ").concat(y.y, " ").concat(y.width, " ").concat(y.height)
  }), /* @__PURE__ */ B.createElement("title", null, s), /* @__PURE__ */ B.createElement("desc", null, h), e);
}
var sq = ["children", "className"];
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
function hq(t, e) {
  if (t == null) return {};
  var n = dq(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
  var n = t.children, r = t.className, u = hq(t, sq), l = qt("recharts-layer", r);
  return /* @__PURE__ */ B.createElement("g", qg({
    className: l
  }, Et(u, !0), {
    ref: e
  }), n);
}), Dr = function(e, n) {
  for (var r = arguments.length, u = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++)
    u[l - 2] = arguments[l];
}, jp, SA;
function vq() {
  if (SA) return jp;
  SA = 1;
  function t(e, n, r) {
    var u = -1, l = e.length;
    n < 0 && (n = -n > l ? 0 : l + n), r = r > l ? l : r, r < 0 && (r += l), l = n > r ? 0 : r - n >>> 0, n >>>= 0;
    for (var c = Array(l); ++u < l; )
      c[u] = e[u + n];
    return c;
  }
  return jp = t, jp;
}
var Cp, _A;
function pq() {
  if (_A) return Cp;
  _A = 1;
  var t = vq();
  function e(n, r, u) {
    var l = n.length;
    return u = u === void 0 ? l : u, !r && u >= l ? n : t(n, r, u);
  }
  return Cp = e, Cp;
}
var Dp, OA;
function dj() {
  if (OA) return Dp;
  OA = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", u = e + n + r, l = "\\ufe0e\\ufe0f", c = "\\u200d", s = RegExp("[" + c + t + u + l + "]");
  function h(d) {
    return s.test(d);
  }
  return Dp = h, Dp;
}
var Pp, AA;
function yq() {
  if (AA) return Pp;
  AA = 1;
  function t(e) {
    return e.split("");
  }
  return Pp = t, Pp;
}
var Np, wA;
function mq() {
  if (wA) return Np;
  wA = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", u = e + n + r, l = "\\ufe0e\\ufe0f", c = "[" + t + "]", s = "[" + u + "]", h = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + s + "|" + h + ")", y = "[^" + t + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", b = "\\u200d", O = d + "?", _ = "[" + l + "]?", x = "(?:" + b + "(?:" + [y, p, g].join("|") + ")" + _ + O + ")*", T = _ + O + x, w = "(?:" + [y + s + "?", s, p, g, c].join("|") + ")", M = RegExp(h + "(?=" + h + ")|" + w + T, "g");
  function j(A) {
    return A.match(M) || [];
  }
  return Np = j, Np;
}
var Rp, TA;
function gq() {
  if (TA) return Rp;
  TA = 1;
  var t = yq(), e = dj(), n = mq();
  function r(u) {
    return e(u) ? n(u) : t(u);
  }
  return Rp = r, Rp;
}
var qp, EA;
function bq() {
  if (EA) return qp;
  EA = 1;
  var t = pq(), e = dj(), n = gq(), r = lj();
  function u(l) {
    return function(c) {
      c = r(c);
      var s = e(c) ? n(c) : void 0, h = s ? s[0] : c.charAt(0), d = s ? t(s, 1).join("") : c.slice(1);
      return h[l]() + d;
    };
  }
  return qp = u, qp;
}
var zp, MA;
function xq() {
  if (MA) return zp;
  MA = 1;
  var t = bq(), e = t("toUpperCase");
  return zp = e, zp;
}
var Sq = xq();
const Ns = /* @__PURE__ */ Qt(Sq);
function Wt(t) {
  return function() {
    return t;
  };
}
const vj = Math.cos, Df = Math.sin, In = Math.sqrt, Pf = Math.PI, Rs = 2 * Pf, zg = Math.PI, $g = 2 * zg, Ia = 1e-6, _q = $g - Ia;
function pj(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Oq(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return pj;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let u = 1, l = r.length; u < l; ++u)
      this._ += Math.round(arguments[u] * n) / n + r[u];
  };
}
class Aq {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? pj : Oq(e);
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
      let b = r - c, O = u - s, _ = h * h + d * d, x = b * b + O * O, T = Math.sqrt(_), w = Math.sqrt(g), M = l * Math.tan((zg - Math.acos((_ + g - x) / (2 * T * w))) / 2), j = M / w, A = M / T;
      Math.abs(j - 1) > Ia && this._append`L${e + j * y},${n + j * p}`, this._append`A${l},${l},0,0,${+(p * b > y * O)},${this._x1 = e + A * h},${this._y1 = n + A * d}`;
    }
  }
  arc(e, n, r, u, l, c) {
    if (e = +e, n = +n, r = +r, c = !!c, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(u), h = r * Math.sin(u), d = e + s, y = n + h, p = 1 ^ c, g = c ? u - l : l - u;
    this._x1 === null ? this._append`M${d},${y}` : (Math.abs(this._x1 - d) > Ia || Math.abs(this._y1 - y) > Ia) && this._append`L${d},${y}`, r && (g < 0 && (g = g % $g + $g), g > _q ? this._append`A${r},${r},0,1,${p},${e - s},${n - h}A${r},${r},0,1,${p},${this._x1 = d},${this._y1 = y}` : g > Ia && this._append`A${r},${r},0,${+(g >= zg)},${p},${this._x1 = e + r * Math.cos(l)},${this._y1 = n + r * Math.sin(l)}`);
  }
  rect(e, n, r, u) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+u}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function o0(t) {
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
function l0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function yj(t) {
  this._context = t;
}
yj.prototype = {
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
function qs(t) {
  return new yj(t);
}
function mj(t) {
  return t[0];
}
function gj(t) {
  return t[1];
}
function bj(t, e) {
  var n = Wt(!0), r = null, u = qs, l = null, c = o0(s);
  t = typeof t == "function" ? t : t === void 0 ? mj : Wt(t), e = typeof e == "function" ? e : e === void 0 ? gj : Wt(e);
  function s(h) {
    var d, y = (h = l0(h)).length, p, g = !1, b;
    for (r == null && (l = u(b = c())), d = 0; d <= y; ++d)
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
    return arguments.length ? (u = h, r != null && (l = u(r)), s) : u;
  }, s.context = function(h) {
    return arguments.length ? (h == null ? r = l = null : l = u(r = h), s) : r;
  }, s;
}
function ff(t, e, n) {
  var r = null, u = Wt(!0), l = null, c = qs, s = null, h = o0(d);
  t = typeof t == "function" ? t : t === void 0 ? mj : Wt(+t), e = typeof e == "function" ? e : Wt(e === void 0 ? 0 : +e), n = typeof n == "function" ? n : n === void 0 ? gj : Wt(+n);
  function d(p) {
    var g, b, O, _ = (p = l0(p)).length, x, T = !1, w, M = new Array(_), j = new Array(_);
    for (l == null && (s = c(w = h())), g = 0; g <= _; ++g) {
      if (!(g < _ && u(x = p[g], g, p)) === T)
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
    return bj().defined(u).curve(c).context(l);
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
class xj {
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
  return new xj(t, !0);
}
function Tq(t) {
  return new xj(t, !1);
}
const c0 = {
  draw(t, e) {
    const n = In(e / Pf);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, Rs);
  }
}, Eq = {
  draw(t, e) {
    const n = In(e / 5) / 2;
    t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath();
  }
}, Sj = In(1 / 3), Mq = Sj * 2, jq = {
  draw(t, e) {
    const n = In(e / Mq), r = n * Sj;
    t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath();
  }
}, Cq = {
  draw(t, e) {
    const n = In(e), r = -n / 2;
    t.rect(r, r, n, n);
  }
}, Dq = 0.8908130915292852, _j = Df(Pf / 10) / Df(7 * Pf / 10), Pq = Df(Rs / 10) * _j, Nq = -vj(Rs / 10) * _j, Rq = {
  draw(t, e) {
    const n = In(e * Dq), r = Pq * n, u = Nq * n;
    t.moveTo(0, -n), t.lineTo(r, u);
    for (let l = 1; l < 5; ++l) {
      const c = Rs * l / 5, s = vj(c), h = Df(c);
      t.lineTo(h * n, -s * n), t.lineTo(s * r - h * u, h * r + s * u);
    }
    t.closePath();
  }
}, $p = In(3), qq = {
  draw(t, e) {
    const n = -In(e / ($p * 3));
    t.moveTo(0, n * 2), t.lineTo(-$p * n, -n), t.lineTo($p * n, -n), t.closePath();
  }
}, wn = -0.5, Tn = In(3) / 2, Bg = 1 / In(12), zq = (Bg / 2 + 1) * 3, $q = {
  draw(t, e) {
    const n = In(e / zq), r = n / 2, u = n * Bg, l = r, c = n * Bg + n, s = -l, h = c;
    t.moveTo(r, u), t.lineTo(l, c), t.lineTo(s, h), t.lineTo(wn * r - Tn * u, Tn * r + wn * u), t.lineTo(wn * l - Tn * c, Tn * l + wn * c), t.lineTo(wn * s - Tn * h, Tn * s + wn * h), t.lineTo(wn * r + Tn * u, wn * u - Tn * r), t.lineTo(wn * l + Tn * c, wn * c - Tn * l), t.lineTo(wn * s + Tn * h, wn * h - Tn * s), t.closePath();
  }
};
function Bq(t, e) {
  let n = null, r = o0(u);
  t = typeof t == "function" ? t : Wt(t || c0), e = typeof e == "function" ? e : Wt(e === void 0 ? 64 : +e);
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
function Nf() {
}
function Rf(t, e, n) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + n) / 6
  );
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
    switch (this._point) {
      case 3:
        Rf(this, this._x1, this._y1);
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
        Rf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Lq(t) {
  return new Oj(t);
}
function Aj(t) {
  this._context = t;
}
Aj.prototype = {
  areaStart: Nf,
  areaEnd: Nf,
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
        Rf(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Uq(t) {
  return new Aj(t);
}
function wj(t) {
  this._context = t;
}
wj.prototype = {
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
        Rf(this, t, e);
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
  areaStart: Nf,
  areaEnd: Nf,
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
  return new Tj(t);
}
function jA(t) {
  return t < 0 ? -1 : 1;
}
function CA(t, e, n) {
  var r = t._x1 - t._x0, u = e - t._x1, l = (t._y1 - t._y0) / (r || u < 0 && -0), c = (n - t._y1) / (u || r < 0 && -0), s = (l * u + c * r) / (r + u);
  return (jA(l) + jA(c)) * Math.min(Math.abs(l), Math.abs(c), 0.5 * Math.abs(s)) || 0;
}
function DA(t, e) {
  var n = t._x1 - t._x0;
  return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
}
function Bp(t, e, n) {
  var r = t._x0, u = t._y0, l = t._x1, c = t._y1, s = (l - r) / 3;
  t._context.bezierCurveTo(r + s, u + s * e, l - s, c - s * n, l, c);
}
function qf(t) {
  this._context = t;
}
qf.prototype = {
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
        Bp(this, this._t0, DA(this, this._t0));
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
          this._point = 3, Bp(this, DA(this, n = CA(this, t, e)), n);
          break;
        default:
          Bp(this, this._t0, n = CA(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
    }
  }
};
function Ej(t) {
  this._context = new Mj(t);
}
(Ej.prototype = Object.create(qf.prototype)).point = function(t, e) {
  qf.prototype.point.call(this, e, t);
};
function Mj(t) {
  this._context = t;
}
Mj.prototype = {
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
function Iq(t) {
  return new qf(t);
}
function Gq(t) {
  return new Ej(t);
}
function jj(t) {
  this._context = t;
}
jj.prototype = {
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
        for (var r = PA(t), u = PA(e), l = 0, c = 1; c < n; ++l, ++c)
          this._context.bezierCurveTo(r[0][l], u[0][l], r[1][l], u[1][l], t[c], e[c]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function PA(t) {
  var e, n = t.length - 1, r, u = new Array(n), l = new Array(n), c = new Array(n);
  for (u[0] = 0, l[0] = 2, c[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) u[e] = 1, l[e] = 4, c[e] = 4 * t[e] + 2 * t[e + 1];
  for (u[n - 1] = 2, l[n - 1] = 7, c[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = u[e] / l[e - 1], l[e] -= r, c[e] -= r * c[e - 1];
  for (u[n - 1] = c[n - 1] / l[n - 1], e = n - 2; e >= 0; --e) u[e] = (c[e] - u[e + 1]) / l[e];
  for (l[n - 1] = (t[n] + u[n - 1]) / 2, e = 0; e < n - 1; ++e) l[e] = 2 * t[e + 1] - u[e + 1];
  return [u, l];
}
function Yq(t) {
  return new jj(t);
}
function zs(t, e) {
  this._context = t, this._t = e;
}
zs.prototype = {
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
  return new zs(t, 0.5);
}
function Kq(t) {
  return new zs(t, 0);
}
function Vq(t) {
  return new zs(t, 1);
}
function lu(t, e) {
  if ((c = t.length) > 1)
    for (var n = 1, r, u, l = t[e[0]], c, s = l.length; n < c; ++n)
      for (u = l, l = t[e[n]], r = 0; r < s; ++r)
        l[r][1] += l[r][0] = isNaN(u[r][1]) ? u[r][0] : u[r][1];
}
function Lg(t) {
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
  var t = Wt([]), e = Lg, n = lu, r = Fq;
  function u(l) {
    var c = Array.from(t.apply(this, arguments), Zq), s, h = c.length, d = -1, y;
    for (const p of l)
      for (s = 0, ++d; s < h; ++s)
        (c[s][d] = [0, +r(p, c[s].key, d, l)]).data = p;
    for (s = 0, y = l0(e(c)); s < h; ++s)
      c[y[s]].index = s;
    return n(c, y), c;
  }
  return u.keys = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(Array.from(l)), u) : t;
  }, u.value = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Wt(+l), u) : r;
  }, u.order = function(l) {
    return arguments.length ? (e = l == null ? Lg : typeof l == "function" ? l : Wt(Array.from(l)), u) : e;
  }, u.offset = function(l) {
    return arguments.length ? (n = l ?? lu, u) : n;
  }, u;
}
function Wq(t, e) {
  if ((r = t.length) > 0) {
    for (var n, r, u = 0, l = t[0].length, c; u < l; ++u) {
      for (c = n = 0; n < r; ++n) c += t[n][u][1] || 0;
      if (c) for (n = 0; n < r; ++n) t[n][u][1] /= c;
    }
    lu(t, e);
  }
}
function Jq(t, e) {
  if ((u = t.length) > 0) {
    for (var n = 0, r = t[e[0]], u, l = r.length; n < l; ++n) {
      for (var c = 0, s = 0; c < u; ++c) s += t[c][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    lu(t, e);
  }
}
function tz(t, e) {
  if (!(!((c = t.length) > 0) || !((l = (u = t[e[0]]).length) > 0))) {
    for (var n = 0, r = 1, u, l, c; r < l; ++r) {
      for (var s = 0, h = 0, d = 0; s < c; ++s) {
        for (var y = t[e[s]], p = y[r][1] || 0, g = y[r - 1][1] || 0, b = (p - g) / 2, O = 0; O < s; ++O) {
          var _ = t[e[O]], x = _[r][1] || 0, T = _[r - 1][1] || 0;
          b += x - T;
        }
        h += p, d += b * p;
      }
      u[r - 1][1] += u[r - 1][0] = n, h && (n -= d / h);
    }
    u[r - 1][1] += u[r - 1][0] = n, lu(t, e);
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
var ez = ["type", "size", "sizeType"];
function Ug() {
  return Ug = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ug.apply(this, arguments);
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
function RA(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? NA(Object(n), !0).forEach(function(r) {
      nz(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : NA(Object(n)).forEach(function(r) {
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
  return nl(e) == "symbol" ? e : e + "";
}
function az(t, e) {
  if (nl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (nl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function iz(t, e) {
  if (t == null) return {};
  var n = uz(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function uz(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var Cj = {
  symbolCircle: c0,
  symbolCross: Eq,
  symbolDiamond: jq,
  symbolSquare: Cq,
  symbolStar: Rq,
  symbolTriangle: qq,
  symbolWye: $q
}, oz = Math.PI / 180, lz = function(e) {
  var n = "symbol".concat(Ns(e));
  return Cj[n] || c0;
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
      var u = 18 * oz;
      return 1.25 * e * e * (Math.tan(u) - Math.tan(u * 2) * Math.pow(Math.tan(u), 2));
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, fz = function(e, n) {
  Cj["symbol".concat(Ns(e))] = n;
}, f0 = function(e) {
  var n = e.type, r = n === void 0 ? "circle" : n, u = e.size, l = u === void 0 ? 64 : u, c = e.sizeType, s = c === void 0 ? "area" : c, h = iz(e, ez), d = RA(RA({}, h), {}, {
    type: r,
    size: l,
    sizeType: s
  }), y = function() {
    var x = lz(r), T = Bq().type(x).size(cz(l, s, r));
    return T();
  }, p = d.className, g = d.cx, b = d.cy, O = Et(d, !0);
  return g === +g && b === +b && l === +l ? /* @__PURE__ */ B.createElement("path", Ug({}, O, {
    className: qt("recharts-symbols", p),
    transform: "translate(".concat(g, ", ").concat(b, ")"),
    d: y()
  })) : null;
};
f0.registerSymbol = fz;
function cu(t) {
  "@babel/helpers - typeof";
  return cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, cu(t);
}
function kg() {
  return kg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, kg.apply(this, arguments);
}
function qA(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sz(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qA(Object(n), !0).forEach(function(r) {
      rl(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qA(Object(n)).forEach(function(r) {
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
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Pj(r.key), r);
  }
}
function vz(t, e, n) {
  return e && dz(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function pz(t, e, n) {
  return e = zf(e), yz(t, Dj() ? Reflect.construct(e, n || [], zf(t).constructor) : e.apply(t, n));
}
function yz(t, e) {
  if (e && (cu(e) === "object" || typeof e == "function"))
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
function Dj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dj = function() {
    return !!t;
  })();
}
function zf(t) {
  return zf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zf(t);
}
function gz(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Hg(t, e);
}
function Hg(t, e) {
  return Hg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Hg(t, e);
}
function rl(t, e, n) {
  return e = Pj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Pj(t) {
  var e = bz(t, "string");
  return cu(e) == "symbol" ? e : e + "";
}
function bz(t, e) {
  if (cu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (cu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var En = 32, s0 = /* @__PURE__ */ (function(t) {
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
          var d = sz({}, r);
          return delete d.legendIcon, /* @__PURE__ */ B.cloneElement(r.legendIcon, d);
        }
        return /* @__PURE__ */ B.createElement(f0, {
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
      return l.map(function(b, O) {
        var _ = b.formatter || h, x = qt(rl(rl({
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
        return /* @__PURE__ */ B.createElement("li", kg({
          className: x,
          style: p,
          key: "legend-item-".concat(O)
        }, Cf(r.props, b, O)), /* @__PURE__ */ B.createElement(Rg, {
          width: c,
          height: c,
          viewBox: y,
          style: g
        }, r.renderIcon(b)), /* @__PURE__ */ B.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, _ ? _(T, b, O) : T));
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
})(rt.PureComponent);
rl(s0, "displayName", "Legend");
rl(s0, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Lp, zA;
function xz() {
  if (zA) return Lp;
  zA = 1;
  var t = Cs();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return Lp = e, Lp;
}
var Up, $A;
function Sz() {
  if ($A) return Up;
  $A = 1;
  function t(e) {
    var n = this.__data__, r = n.delete(e);
    return this.size = n.size, r;
  }
  return Up = t, Up;
}
var kp, BA;
function _z() {
  if (BA) return kp;
  BA = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return kp = t, kp;
}
var Hp, LA;
function Oz() {
  if (LA) return Hp;
  LA = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Hp = t, Hp;
}
var Ip, UA;
function Az() {
  if (UA) return Ip;
  UA = 1;
  var t = Cs(), e = e0(), n = n0(), r = 200;
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
  return Ip = u, Ip;
}
var Gp, kA;
function Nj() {
  if (kA) return Gp;
  kA = 1;
  var t = Cs(), e = xz(), n = Sz(), r = _z(), u = Oz(), l = Az();
  function c(s) {
    var h = this.__data__ = new t(s);
    this.size = h.size;
  }
  return c.prototype.clear = e, c.prototype.delete = n, c.prototype.get = r, c.prototype.has = u, c.prototype.set = l, Gp = c, Gp;
}
var Yp, HA;
function wz() {
  if (HA) return Yp;
  HA = 1;
  var t = "__lodash_hash_undefined__";
  function e(n) {
    return this.__data__.set(n, t), this;
  }
  return Yp = e, Yp;
}
var Xp, IA;
function Tz() {
  if (IA) return Xp;
  IA = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Xp = t, Xp;
}
var Kp, GA;
function Rj() {
  if (GA) return Kp;
  GA = 1;
  var t = n0(), e = wz(), n = Tz();
  function r(u) {
    var l = -1, c = u == null ? 0 : u.length;
    for (this.__data__ = new t(); ++l < c; )
      this.add(u[l]);
  }
  return r.prototype.add = r.prototype.push = e, r.prototype.has = n, Kp = r, Kp;
}
var Vp, YA;
function qj() {
  if (YA) return Vp;
  YA = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length; ++r < u; )
      if (n(e[r], r, e))
        return !0;
    return !1;
  }
  return Vp = t, Vp;
}
var Fp, XA;
function zj() {
  if (XA) return Fp;
  XA = 1;
  function t(e, n) {
    return e.has(n);
  }
  return Fp = t, Fp;
}
var Zp, KA;
function $j() {
  if (KA) return Zp;
  KA = 1;
  var t = Rj(), e = qj(), n = zj(), r = 1, u = 2;
  function l(c, s, h, d, y, p) {
    var g = h & r, b = c.length, O = s.length;
    if (b != O && !(g && O > b))
      return !1;
    var _ = p.get(c), x = p.get(s);
    if (_ && x)
      return _ == s && x == c;
    var T = -1, w = !0, M = h & u ? new t() : void 0;
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
  return Zp = l, Zp;
}
var Qp, VA;
function Ez() {
  if (VA) return Qp;
  VA = 1;
  var t = rr(), e = t.Uint8Array;
  return Qp = e, Qp;
}
var Wp, FA;
function Mz() {
  if (FA) return Wp;
  FA = 1;
  function t(e) {
    var n = -1, r = Array(e.size);
    return e.forEach(function(u, l) {
      r[++n] = [l, u];
    }), r;
  }
  return Wp = t, Wp;
}
var Jp, ZA;
function h0() {
  if (ZA) return Jp;
  ZA = 1;
  function t(e) {
    var n = -1, r = Array(e.size);
    return e.forEach(function(u) {
      r[++n] = u;
    }), r;
  }
  return Jp = t, Jp;
}
var ty, QA;
function jz() {
  if (QA) return ty;
  QA = 1;
  var t = $l(), e = Ez(), n = t0(), r = $j(), u = Mz(), l = h0(), c = 1, s = 2, h = "[object Boolean]", d = "[object Date]", y = "[object Error]", p = "[object Map]", g = "[object Number]", b = "[object RegExp]", O = "[object Set]", _ = "[object String]", x = "[object Symbol]", T = "[object ArrayBuffer]", w = "[object DataView]", M = t ? t.prototype : void 0, j = M ? M.valueOf : void 0;
  function A(E, D, R, z, F, U, $) {
    switch (R) {
      case w:
        if (E.byteLength != D.byteLength || E.byteOffset != D.byteOffset)
          return !1;
        E = E.buffer, D = D.buffer;
      case T:
        return !(E.byteLength != D.byteLength || !U(new e(E), new e(D)));
      case h:
      case d:
      case g:
        return n(+E, +D);
      case y:
        return E.name == D.name && E.message == D.message;
      case b:
      case _:
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
        var N = r(K(E), K(D), z, F, U, $);
        return $.delete(E), N;
      case x:
        if (j)
          return j.call(E) == j.call(D);
    }
    return !1;
  }
  return ty = A, ty;
}
var ey, WA;
function Bj() {
  if (WA) return ey;
  WA = 1;
  function t(e, n) {
    for (var r = -1, u = n.length, l = e.length; ++r < u; )
      e[l + r] = n[r];
    return e;
  }
  return ey = t, ey;
}
var ny, JA;
function Cz() {
  if (JA) return ny;
  JA = 1;
  var t = Bj(), e = Je();
  function n(r, u, l) {
    var c = u(r);
    return e(r) ? c : t(c, l(r));
  }
  return ny = n, ny;
}
var ry, tw;
function Dz() {
  if (tw) return ry;
  tw = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length, l = 0, c = []; ++r < u; ) {
      var s = e[r];
      n(s, r, e) && (c[l++] = s);
    }
    return c;
  }
  return ry = t, ry;
}
var ay, ew;
function Pz() {
  if (ew) return ay;
  ew = 1;
  function t() {
    return [];
  }
  return ay = t, ay;
}
var iy, nw;
function Nz() {
  if (nw) return iy;
  nw = 1;
  var t = Dz(), e = Pz(), n = Object.prototype, r = n.propertyIsEnumerable, u = Object.getOwnPropertySymbols, l = u ? function(c) {
    return c == null ? [] : (c = Object(c), t(u(c), function(s) {
      return r.call(c, s);
    }));
  } : e;
  return iy = l, iy;
}
var uy, rw;
function Rz() {
  if (rw) return uy;
  rw = 1;
  function t(e, n) {
    for (var r = -1, u = Array(e); ++r < e; )
      u[r] = n(r);
    return u;
  }
  return uy = t, uy;
}
var oy, aw;
function qz() {
  if (aw) return oy;
  aw = 1;
  var t = $r(), e = Br(), n = "[object Arguments]";
  function r(u) {
    return e(u) && t(u) == n;
  }
  return oy = r, oy;
}
var ly, iw;
function d0() {
  if (iw) return ly;
  iw = 1;
  var t = qz(), e = Br(), n = Object.prototype, r = n.hasOwnProperty, u = n.propertyIsEnumerable, l = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(c) {
    return e(c) && r.call(c, "callee") && !u.call(c, "callee");
  };
  return ly = l, ly;
}
var Xo = { exports: {} }, cy, uw;
function zz() {
  if (uw) return cy;
  uw = 1;
  function t() {
    return !1;
  }
  return cy = t, cy;
}
Xo.exports;
var ow;
function Lj() {
  return ow || (ow = 1, (function(t, e) {
    var n = rr(), r = zz(), u = e && !e.nodeType && e, l = u && !0 && t && !t.nodeType && t, c = l && l.exports === u, s = c ? n.Buffer : void 0, h = s ? s.isBuffer : void 0, d = h || r;
    t.exports = d;
  })(Xo, Xo.exports)), Xo.exports;
}
var fy, lw;
function v0() {
  if (lw) return fy;
  lw = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function n(r, u) {
    var l = typeof r;
    return u = u ?? t, !!u && (l == "number" || l != "symbol" && e.test(r)) && r > -1 && r % 1 == 0 && r < u;
  }
  return fy = n, fy;
}
var sy, cw;
function p0() {
  if (cw) return sy;
  cw = 1;
  var t = 9007199254740991;
  function e(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= t;
  }
  return sy = e, sy;
}
var hy, fw;
function $z() {
  if (fw) return hy;
  fw = 1;
  var t = $r(), e = p0(), n = Br(), r = "[object Arguments]", u = "[object Array]", l = "[object Boolean]", c = "[object Date]", s = "[object Error]", h = "[object Function]", d = "[object Map]", y = "[object Number]", p = "[object Object]", g = "[object RegExp]", b = "[object Set]", O = "[object String]", _ = "[object WeakMap]", x = "[object ArrayBuffer]", T = "[object DataView]", w = "[object Float32Array]", M = "[object Float64Array]", j = "[object Int8Array]", A = "[object Int16Array]", E = "[object Int32Array]", D = "[object Uint8Array]", R = "[object Uint8ClampedArray]", z = "[object Uint16Array]", F = "[object Uint32Array]", U = {};
  U[w] = U[M] = U[j] = U[A] = U[E] = U[D] = U[R] = U[z] = U[F] = !0, U[r] = U[u] = U[x] = U[l] = U[T] = U[c] = U[s] = U[h] = U[d] = U[y] = U[p] = U[g] = U[b] = U[O] = U[_] = !1;
  function $(K) {
    return n(K) && e(K.length) && !!U[t(K)];
  }
  return hy = $, hy;
}
var dy, sw;
function Uj() {
  if (sw) return dy;
  sw = 1;
  function t(e) {
    return function(n) {
      return e(n);
    };
  }
  return dy = t, dy;
}
var Ko = { exports: {} };
Ko.exports;
var hw;
function Bz() {
  return hw || (hw = 1, (function(t, e) {
    var n = ij(), r = e && !e.nodeType && e, u = r && !0 && t && !t.nodeType && t, l = u && u.exports === r, c = l && n.process, s = (function() {
      try {
        var h = u && u.require && u.require("util").types;
        return h || c && c.binding && c.binding("util");
      } catch {
      }
    })();
    t.exports = s;
  })(Ko, Ko.exports)), Ko.exports;
}
var vy, dw;
function kj() {
  if (dw) return vy;
  dw = 1;
  var t = $z(), e = Uj(), n = Bz(), r = n && n.isTypedArray, u = r ? e(r) : t;
  return vy = u, vy;
}
var py, vw;
function Lz() {
  if (vw) return py;
  vw = 1;
  var t = Rz(), e = d0(), n = Je(), r = Lj(), u = v0(), l = kj(), c = Object.prototype, s = c.hasOwnProperty;
  function h(d, y) {
    var p = n(d), g = !p && e(d), b = !p && !g && r(d), O = !p && !g && !b && l(d), _ = p || g || b || O, x = _ ? t(d.length, String) : [], T = x.length;
    for (var w in d)
      (y || s.call(d, w)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
      (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      b && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      O && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
      u(w, T))) && x.push(w);
    return x;
  }
  return py = h, py;
}
var yy, pw;
function Uz() {
  if (pw) return yy;
  pw = 1;
  var t = Object.prototype;
  function e(n) {
    var r = n && n.constructor, u = typeof r == "function" && r.prototype || t;
    return n === u;
  }
  return yy = e, yy;
}
var my, yw;
function Hj() {
  if (yw) return my;
  yw = 1;
  function t(e, n) {
    return function(r) {
      return e(n(r));
    };
  }
  return my = t, my;
}
var gy, mw;
function kz() {
  if (mw) return gy;
  mw = 1;
  var t = Hj(), e = t(Object.keys, Object);
  return gy = e, gy;
}
var by, gw;
function Hz() {
  if (gw) return by;
  gw = 1;
  var t = Uz(), e = kz(), n = Object.prototype, r = n.hasOwnProperty;
  function u(l) {
    if (!t(l))
      return e(l);
    var c = [];
    for (var s in Object(l))
      r.call(l, s) && s != "constructor" && c.push(s);
    return c;
  }
  return by = u, by;
}
var xy, bw;
function Bl() {
  if (bw) return xy;
  bw = 1;
  var t = Jb(), e = p0();
  function n(r) {
    return r != null && e(r.length) && !t(r);
  }
  return xy = n, xy;
}
var Sy, xw;
function $s() {
  if (xw) return Sy;
  xw = 1;
  var t = Lz(), e = Hz(), n = Bl();
  function r(u) {
    return n(u) ? t(u) : e(u);
  }
  return Sy = r, Sy;
}
var _y, Sw;
function Iz() {
  if (Sw) return _y;
  Sw = 1;
  var t = Cz(), e = Nz(), n = $s();
  function r(u) {
    return t(u, n, e);
  }
  return _y = r, _y;
}
var Oy, _w;
function Gz() {
  if (_w) return Oy;
  _w = 1;
  var t = Iz(), e = 1, n = Object.prototype, r = n.hasOwnProperty;
  function u(l, c, s, h, d, y) {
    var p = s & e, g = t(l), b = g.length, O = t(c), _ = O.length;
    if (b != _ && !p)
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
  return Oy = u, Oy;
}
var Ay, Ow;
function Yz() {
  if (Ow) return Ay;
  Ow = 1;
  var t = ai(), e = rr(), n = t(e, "DataView");
  return Ay = n, Ay;
}
var wy, Aw;
function Xz() {
  if (Aw) return wy;
  Aw = 1;
  var t = ai(), e = rr(), n = t(e, "Promise");
  return wy = n, wy;
}
var Ty, ww;
function Ij() {
  if (ww) return Ty;
  ww = 1;
  var t = ai(), e = rr(), n = t(e, "Set");
  return Ty = n, Ty;
}
var Ey, Tw;
function Kz() {
  if (Tw) return Ey;
  Tw = 1;
  var t = ai(), e = rr(), n = t(e, "WeakMap");
  return Ey = n, Ey;
}
var My, Ew;
function Vz() {
  if (Ew) return My;
  Ew = 1;
  var t = Yz(), e = e0(), n = Xz(), r = Ij(), u = Kz(), l = $r(), c = uj(), s = "[object Map]", h = "[object Object]", d = "[object Promise]", y = "[object Set]", p = "[object WeakMap]", g = "[object DataView]", b = c(t), O = c(e), _ = c(n), x = c(r), T = c(u), w = l;
  return (t && w(new t(new ArrayBuffer(1))) != g || e && w(new e()) != s || n && w(n.resolve()) != d || r && w(new r()) != y || u && w(new u()) != p) && (w = function(M) {
    var j = l(M), A = j == h ? M.constructor : void 0, E = A ? c(A) : "";
    if (E)
      switch (E) {
        case b:
          return g;
        case O:
          return s;
        case _:
          return d;
        case x:
          return y;
        case T:
          return p;
      }
    return j;
  }), My = w, My;
}
var jy, Mw;
function Fz() {
  if (Mw) return jy;
  Mw = 1;
  var t = Nj(), e = $j(), n = jz(), r = Gz(), u = Vz(), l = Je(), c = Lj(), s = kj(), h = 1, d = "[object Arguments]", y = "[object Array]", p = "[object Object]", g = Object.prototype, b = g.hasOwnProperty;
  function O(_, x, T, w, M, j) {
    var A = l(_), E = l(x), D = A ? y : u(_), R = E ? y : u(x);
    D = D == d ? p : D, R = R == d ? p : R;
    var z = D == p, F = R == p, U = D == R;
    if (U && c(_)) {
      if (!c(x))
        return !1;
      A = !0, z = !1;
    }
    if (U && !z)
      return j || (j = new t()), A || s(_) ? e(_, x, T, w, M, j) : n(_, x, D, T, w, M, j);
    if (!(T & h)) {
      var $ = z && b.call(_, "__wrapped__"), K = F && b.call(x, "__wrapped__");
      if ($ || K) {
        var Z = $ ? _.value() : _, V = K ? x.value() : x;
        return j || (j = new t()), M(Z, V, T, w, j);
      }
    }
    return U ? (j || (j = new t()), r(_, x, T, w, M, j)) : !1;
  }
  return jy = O, jy;
}
var Cy, jw;
function y0() {
  if (jw) return Cy;
  jw = 1;
  var t = Fz(), e = Br();
  function n(r, u, l, c, s) {
    return r === u ? !0 : r == null || u == null || !e(r) && !e(u) ? r !== r && u !== u : t(r, u, l, c, n, s);
  }
  return Cy = n, Cy;
}
var Dy, Cw;
function Zz() {
  if (Cw) return Dy;
  Cw = 1;
  var t = Nj(), e = y0(), n = 1, r = 2;
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
      var b = g[0], O = l[b], _ = g[1];
      if (p && g[2]) {
        if (O === void 0 && !(b in l))
          return !1;
      } else {
        var x = new t();
        if (h)
          var T = h(O, _, b, l, c, x);
        if (!(T === void 0 ? e(_, O, n | r, h, x) : T))
          return !1;
      }
    }
    return !0;
  }
  return Dy = u, Dy;
}
var Py, Dw;
function Gj() {
  if (Dw) return Py;
  Dw = 1;
  var t = ba();
  function e(n) {
    return n === n && !t(n);
  }
  return Py = e, Py;
}
var Ny, Pw;
function Qz() {
  if (Pw) return Ny;
  Pw = 1;
  var t = Gj(), e = $s();
  function n(r) {
    for (var u = e(r), l = u.length; l--; ) {
      var c = u[l], s = r[c];
      u[l] = [c, s, t(s)];
    }
    return u;
  }
  return Ny = n, Ny;
}
var Ry, Nw;
function Yj() {
  if (Nw) return Ry;
  Nw = 1;
  function t(e, n) {
    return function(r) {
      return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
    };
  }
  return Ry = t, Ry;
}
var qy, Rw;
function Wz() {
  if (Rw) return qy;
  Rw = 1;
  var t = Zz(), e = Qz(), n = Yj();
  function r(u) {
    var l = e(u);
    return l.length == 1 && l[0][2] ? n(l[0][0], l[0][1]) : function(c) {
      return c === u || t(c, u, l);
    };
  }
  return qy = r, qy;
}
var zy, qw;
function Jz() {
  if (qw) return zy;
  qw = 1;
  function t(e, n) {
    return e != null && n in Object(e);
  }
  return zy = t, zy;
}
var $y, zw;
function t$() {
  if (zw) return $y;
  zw = 1;
  var t = cj(), e = d0(), n = Je(), r = v0(), u = p0(), l = Ps();
  function c(s, h, d) {
    h = t(h, s);
    for (var y = -1, p = h.length, g = !1; ++y < p; ) {
      var b = l(h[y]);
      if (!(g = s != null && d(s, b)))
        break;
      s = s[b];
    }
    return g || ++y != p ? g : (p = s == null ? 0 : s.length, !!p && u(p) && r(b, p) && (n(s) || e(s)));
  }
  return $y = c, $y;
}
var By, $w;
function e$() {
  if ($w) return By;
  $w = 1;
  var t = Jz(), e = t$();
  function n(r, u) {
    return r != null && e(r, u, t);
  }
  return By = n, By;
}
var Ly, Bw;
function n$() {
  if (Bw) return Ly;
  Bw = 1;
  var t = y0(), e = fj(), n = e$(), r = Wb(), u = Gj(), l = Yj(), c = Ps(), s = 1, h = 2;
  function d(y, p) {
    return r(y) && u(p) ? l(c(y), p) : function(g) {
      var b = e(g, y);
      return b === void 0 && b === p ? n(g, y) : t(p, b, s | h);
    };
  }
  return Ly = d, Ly;
}
var Uy, Lw;
function zu() {
  if (Lw) return Uy;
  Lw = 1;
  function t(e) {
    return e;
  }
  return Uy = t, Uy;
}
var ky, Uw;
function r$() {
  if (Uw) return ky;
  Uw = 1;
  function t(e) {
    return function(n) {
      return n == null ? void 0 : n[e];
    };
  }
  return ky = t, ky;
}
var Hy, kw;
function a$() {
  if (kw) return Hy;
  kw = 1;
  var t = a0();
  function e(n) {
    return function(r) {
      return t(r, n);
    };
  }
  return Hy = e, Hy;
}
var Iy, Hw;
function i$() {
  if (Hw) return Iy;
  Hw = 1;
  var t = r$(), e = a$(), n = Wb(), r = Ps();
  function u(l) {
    return n(l) ? t(r(l)) : e(l);
  }
  return Iy = u, Iy;
}
var Gy, Iw;
function xa() {
  if (Iw) return Gy;
  Iw = 1;
  var t = Wz(), e = n$(), n = zu(), r = Je(), u = i$();
  function l(c) {
    return typeof c == "function" ? c : c == null ? n : typeof c == "object" ? r(c) ? e(c[0], c[1]) : t(c) : u(c);
  }
  return Gy = l, Gy;
}
var Yy, Gw;
function Xj() {
  if (Gw) return Yy;
  Gw = 1;
  function t(e, n, r, u) {
    for (var l = e.length, c = r + (u ? 1 : -1); u ? c-- : ++c < l; )
      if (n(e[c], c, e))
        return c;
    return -1;
  }
  return Yy = t, Yy;
}
var Xy, Yw;
function u$() {
  if (Yw) return Xy;
  Yw = 1;
  function t(e) {
    return e !== e;
  }
  return Xy = t, Xy;
}
var Ky, Xw;
function o$() {
  if (Xw) return Ky;
  Xw = 1;
  function t(e, n, r) {
    for (var u = r - 1, l = e.length; ++u < l; )
      if (e[u] === n)
        return u;
    return -1;
  }
  return Ky = t, Ky;
}
var Vy, Kw;
function l$() {
  if (Kw) return Vy;
  Kw = 1;
  var t = Xj(), e = u$(), n = o$();
  function r(u, l, c) {
    return l === l ? n(u, l, c) : t(u, e, c);
  }
  return Vy = r, Vy;
}
var Fy, Vw;
function c$() {
  if (Vw) return Fy;
  Vw = 1;
  var t = l$();
  function e(n, r) {
    var u = n == null ? 0 : n.length;
    return !!u && t(n, r, 0) > -1;
  }
  return Fy = e, Fy;
}
var Zy, Fw;
function f$() {
  if (Fw) return Zy;
  Fw = 1;
  function t(e, n, r) {
    for (var u = -1, l = e == null ? 0 : e.length; ++u < l; )
      if (r(n, e[u]))
        return !0;
    return !1;
  }
  return Zy = t, Zy;
}
var Qy, Zw;
function s$() {
  if (Zw) return Qy;
  Zw = 1;
  function t() {
  }
  return Qy = t, Qy;
}
var Wy, Qw;
function h$() {
  if (Qw) return Wy;
  Qw = 1;
  var t = Ij(), e = s$(), n = h0(), r = 1 / 0, u = t && 1 / n(new t([, -0]))[1] == r ? function(l) {
    return new t(l);
  } : e;
  return Wy = u, Wy;
}
var Jy, Ww;
function d$() {
  if (Ww) return Jy;
  Ww = 1;
  var t = Rj(), e = c$(), n = f$(), r = zj(), u = h$(), l = h0(), c = 200;
  function s(h, d, y) {
    var p = -1, g = e, b = h.length, O = !0, _ = [], x = _;
    if (y)
      O = !1, g = n;
    else if (b >= c) {
      var T = d ? null : u(h);
      if (T)
        return l(T);
      O = !1, g = r, x = new t();
    } else
      x = d ? [] : _;
    t:
      for (; ++p < b; ) {
        var w = h[p], M = d ? d(w) : w;
        if (w = y || w !== 0 ? w : 0, O && M === M) {
          for (var j = x.length; j--; )
            if (x[j] === M)
              continue t;
          d && x.push(M), _.push(w);
        } else g(x, M, y) || (x !== _ && x.push(M), _.push(w));
      }
    return _;
  }
  return Jy = s, Jy;
}
var tm, Jw;
function v$() {
  if (Jw) return tm;
  Jw = 1;
  var t = xa(), e = d$();
  function n(r, u) {
    return r && r.length ? e(r, t(u, 2)) : [];
  }
  return tm = n, tm;
}
var p$ = v$();
const tT = /* @__PURE__ */ Qt(p$);
function Kj(t, e, n) {
  return e === !0 ? tT(t, n) : At(e) ? tT(t, e) : t;
}
function fu(t) {
  "@babel/helpers - typeof";
  return fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fu(t);
}
var y$ = ["ref"];
function eT(t, e) {
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
    e % 2 ? eT(Object(n), !0).forEach(function(r) {
      Bs(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : eT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function m$(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nT(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Fj(r.key), r);
  }
}
function g$(t, e, n) {
  return e && nT(t.prototype, e), n && nT(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function b$(t, e, n) {
  return e = $f(e), x$(t, Vj() ? Reflect.construct(e, n || [], $f(t).constructor) : e.apply(t, n));
}
function x$(t, e) {
  if (e && (fu(e) === "object" || typeof e == "function"))
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
function Vj() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vj = function() {
    return !!t;
  })();
}
function $f(t) {
  return $f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $f(t);
}
function _$(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ig(t, e);
}
function Ig(t, e) {
  return Ig = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Ig(t, e);
}
function Bs(t, e, n) {
  return e = Fj(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Fj(t) {
  var e = O$(t, "string");
  return fu(e) == "symbol" ? e : e + "";
}
function O$(t, e) {
  if (fu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (fu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function A$(t, e) {
  if (t == null) return {};
  var n = w$(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
  return /* @__PURE__ */ B.createElement(s0, n);
}
var rT = 1, ru = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    m$(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = b$(this, e, [].concat(u)), Bs(n, "lastBoundingBox", {
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
      var r = this.props.onBBoxUpdate, u = this.getBBox();
      u ? (Math.abs(u.width - this.lastBoundingBox.width) > rT || Math.abs(u.height - this.lastBoundingBox.height) > rT) && (this.lastBoundingBox.width = u.width, this.lastBoundingBox.height = u.height, r && r(u)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
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
      var r = this, u = this.props, l = u.content, c = u.width, s = u.height, h = u.wrapperStyle, d = u.payloadUniqBy, y = u.payload, p = Ar(Ar({
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
        payload: Kj(y, d, T$)
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
})(rt.PureComponent);
Bs(ru, "displayName", "Legend");
Bs(ru, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var em, aT;
function M$() {
  if (aT) return em;
  aT = 1;
  var t = $l(), e = d0(), n = Je(), r = t ? t.isConcatSpreadable : void 0;
  function u(l) {
    return n(l) || e(l) || !!(r && l && l[r]);
  }
  return em = u, em;
}
var nm, iT;
function Zj() {
  if (iT) return nm;
  iT = 1;
  var t = Bj(), e = M$();
  function n(r, u, l, c, s) {
    var h = -1, d = r.length;
    for (l || (l = e), s || (s = []); ++h < d; ) {
      var y = r[h];
      u > 0 && l(y) ? u > 1 ? n(y, u - 1, l, c, s) : t(s, y) : c || (s[s.length] = y);
    }
    return s;
  }
  return nm = n, nm;
}
var rm, uT;
function j$() {
  if (uT) return rm;
  uT = 1;
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
  return rm = t, rm;
}
var am, oT;
function C$() {
  if (oT) return am;
  oT = 1;
  var t = j$(), e = t();
  return am = e, am;
}
var im, lT;
function Qj() {
  if (lT) return im;
  lT = 1;
  var t = C$(), e = $s();
  function n(r, u) {
    return r && t(r, u, e);
  }
  return im = n, im;
}
var um, cT;
function D$() {
  if (cT) return um;
  cT = 1;
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
  return um = e, um;
}
var om, fT;
function m0() {
  if (fT) return om;
  fT = 1;
  var t = Qj(), e = D$(), n = e(t);
  return om = n, om;
}
var lm, sT;
function Wj() {
  if (sT) return lm;
  sT = 1;
  var t = m0(), e = Bl();
  function n(r, u) {
    var l = -1, c = e(r) ? Array(r.length) : [];
    return t(r, function(s, h, d) {
      c[++l] = u(s, h, d);
    }), c;
  }
  return lm = n, lm;
}
var cm, hT;
function P$() {
  if (hT) return cm;
  hT = 1;
  function t(e, n) {
    var r = e.length;
    for (e.sort(n); r--; )
      e[r] = e[r].value;
    return e;
  }
  return cm = t, cm;
}
var fm, dT;
function N$() {
  if (dT) return fm;
  dT = 1;
  var t = Pu();
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
  return fm = e, fm;
}
var sm, vT;
function R$() {
  if (vT) return sm;
  vT = 1;
  var t = N$();
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
  return sm = e, sm;
}
var hm, pT;
function q$() {
  if (pT) return hm;
  pT = 1;
  var t = r0(), e = a0(), n = xa(), r = Wj(), u = P$(), l = Uj(), c = R$(), s = zu(), h = Je();
  function d(y, p, g) {
    p.length ? p = t(p, function(_) {
      return h(_) ? function(x) {
        return e(x, _.length === 1 ? _[0] : _);
      } : _;
    }) : p = [s];
    var b = -1;
    p = t(p, l(n));
    var O = r(y, function(_, x, T) {
      var w = t(p, function(M) {
        return M(_);
      });
      return { criteria: w, index: ++b, value: _ };
    });
    return u(O, function(_, x) {
      return c(_, x, g);
    });
  }
  return hm = d, hm;
}
var dm, yT;
function z$() {
  if (yT) return dm;
  yT = 1;
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
  return dm = t, dm;
}
var vm, mT;
function $$() {
  if (mT) return vm;
  mT = 1;
  var t = z$(), e = Math.max;
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
  return vm = n, vm;
}
var pm, gT;
function B$() {
  if (gT) return pm;
  gT = 1;
  function t(e) {
    return function() {
      return e;
    };
  }
  return pm = t, pm;
}
var ym, bT;
function Jj() {
  if (bT) return ym;
  bT = 1;
  var t = ai(), e = (function() {
    try {
      var n = t(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return ym = e, ym;
}
var mm, xT;
function L$() {
  if (xT) return mm;
  xT = 1;
  var t = B$(), e = Jj(), n = zu(), r = e ? function(u, l) {
    return e(u, "toString", {
      configurable: !0,
      enumerable: !1,
      value: t(l),
      writable: !0
    });
  } : n;
  return mm = r, mm;
}
var gm, ST;
function U$() {
  if (ST) return gm;
  ST = 1;
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
  return gm = r, gm;
}
var bm, _T;
function k$() {
  if (_T) return bm;
  _T = 1;
  var t = L$(), e = U$(), n = e(t);
  return bm = n, bm;
}
var xm, OT;
function H$() {
  if (OT) return xm;
  OT = 1;
  var t = zu(), e = $$(), n = k$();
  function r(u, l) {
    return n(e(u, l, t), u + "");
  }
  return xm = r, xm;
}
var Sm, AT;
function Ls() {
  if (AT) return Sm;
  AT = 1;
  var t = t0(), e = Bl(), n = v0(), r = ba();
  function u(l, c, s) {
    if (!r(s))
      return !1;
    var h = typeof c;
    return (h == "number" ? e(s) && n(c, s.length) : h == "string" && c in s) ? t(s[c], l) : !1;
  }
  return Sm = u, Sm;
}
var _m, wT;
function I$() {
  if (wT) return _m;
  wT = 1;
  var t = Zj(), e = q$(), n = H$(), r = Ls(), u = n(function(l, c) {
    if (l == null)
      return [];
    var s = c.length;
    return s > 1 && r(l, c[0], c[1]) ? c = [] : s > 2 && r(c[0], c[1], c[2]) && (c = [c[0]]), e(l, t(c, 1), []);
  });
  return _m = u, _m;
}
var G$ = I$();
const g0 = /* @__PURE__ */ Qt(G$);
function al(t) {
  "@babel/helpers - typeof";
  return al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, al(t);
}
function Gg() {
  return Gg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Gg.apply(this, arguments);
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
    if (typeof t == "string") return TT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TT(t, e);
  }
}
function TT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function V$(t, e) {
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
function F$(t) {
  if (Array.isArray(t)) return t;
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
function Om(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ET(Object(n), !0).forEach(function(r) {
      Z$(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ET(Object(n)).forEach(function(r) {
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
  return al(e) == "symbol" ? e : e + "";
}
function W$(t, e) {
  if (al(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (al(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function J$(t) {
  return Array.isArray(t) && _e(t[0]) && _e(t[1]) ? t.join(" ~ ") : t;
}
var tB = function(e) {
  var n = e.separator, r = n === void 0 ? " : " : n, u = e.contentStyle, l = u === void 0 ? {} : u, c = e.itemStyle, s = c === void 0 ? {} : c, h = e.labelStyle, d = h === void 0 ? {} : h, y = e.payload, p = e.formatter, g = e.itemSorter, b = e.wrapperClassName, O = e.labelClassName, _ = e.label, x = e.labelFormatter, T = e.accessibilityLayer, w = T === void 0 ? !1 : T, M = function() {
    if (y && y.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, K = (g ? g0(y, g) : y).map(function(Z, V) {
        if (Z.type === "none")
          return null;
        var N = Om({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: Z.color || "#000"
        }, s), I = Z.formatter || p || J$, W = Z.value, ut = Z.name, lt = W, P = ut;
        if (I && lt != null && P != null) {
          var k = I(W, ut, Z, V, y);
          if (Array.isArray(k)) {
            var et = Y$(k, 2);
            lt = et[0], P = et[1];
          } else
            lt = k;
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
  }, j = Om({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, l), A = Om({
    margin: 0
  }, d), E = !Mt(_), D = E ? _ : "", R = qt("recharts-default-tooltip", b), z = qt("recharts-tooltip-label", O);
  E && x && y !== void 0 && y !== null && (D = x(_, y));
  var F = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ B.createElement("div", Gg({
    className: R,
    style: j
  }, F), /* @__PURE__ */ B.createElement("p", {
    className: z,
    style: A
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
  return e = eB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eB(t) {
  var e = nB(t, "string");
  return il(e) == "symbol" ? e : e + "";
}
function nB(t, e) {
  if (il(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (il(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var zo = "recharts-tooltip-wrapper", rB = {
  visibility: "hidden"
};
function aB(t) {
  var e = t.coordinate, n = t.translateX, r = t.translateY;
  return qt(zo, sf(sf(sf(sf({}, "".concat(zo, "-right"), st(n) && e && st(e.x) && n >= e.x), "".concat(zo, "-left"), st(n) && e && st(e.x) && n < e.x), "".concat(zo, "-bottom"), st(r) && e && st(e.y) && r >= e.y), "".concat(zo, "-top"), st(r) && e && st(e.y) && r < e.y));
}
function MT(t) {
  var e = t.allowEscapeViewBox, n = t.coordinate, r = t.key, u = t.offsetTopLeft, l = t.position, c = t.reverseDirection, s = t.tooltipDimension, h = t.viewBox, d = t.viewBoxDimension;
  if (l && st(l[r]))
    return l[r];
  var y = n[r] - s - u, p = n[r] + u;
  if (e[r])
    return c[r] ? y : p;
  if (c[r]) {
    var g = y, b = h[r];
    return g < b ? Math.max(p, h[r]) : Math.max(y, h[r]);
  }
  var O = p + s, _ = h[r] + d;
  return O > _ ? Math.max(y, h[r]) : Math.max(p, h[r]);
}
function iB(t) {
  var e = t.translateX, n = t.translateY, r = t.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(e, "px, ").concat(n, "px, 0)") : "translate(".concat(e, "px, ").concat(n, "px)")
  };
}
function uB(t) {
  var e = t.allowEscapeViewBox, n = t.coordinate, r = t.offsetTopLeft, u = t.position, l = t.reverseDirection, c = t.tooltipBox, s = t.useTranslate3d, h = t.viewBox, d, y, p;
  return c.height > 0 && c.width > 0 && n ? (y = MT({
    allowEscapeViewBox: e,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: u,
    reverseDirection: l,
    tooltipDimension: c.width,
    viewBox: h,
    viewBoxDimension: h.width
  }), p = MT({
    allowEscapeViewBox: e,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: u,
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
function su(t) {
  "@babel/helpers - typeof";
  return su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, su(t);
}
function jT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function CT(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? jT(Object(n), !0).forEach(function(r) {
      Xg(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function oB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lB(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, eC(r.key), r);
  }
}
function cB(t, e, n) {
  return e && lB(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function fB(t, e, n) {
  return e = Bf(e), sB(t, tC() ? Reflect.construct(e, n || [], Bf(t).constructor) : e.apply(t, n));
}
function sB(t, e) {
  if (e && (su(e) === "object" || typeof e == "function"))
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
function Bf(t) {
  return Bf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Bf(t);
}
function dB(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Yg(t, e);
}
function Yg(t, e) {
  return Yg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Yg(t, e);
}
function Xg(t, e, n) {
  return e = eC(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function eC(t) {
  var e = vB(t, "string");
  return su(e) == "symbol" ? e : e + "";
}
function vB(t, e) {
  if (su(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (su(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var DT = 1, pB = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    oB(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = fB(this, e, [].concat(u)), Xg(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Xg(n, "handleKeyDown", function(c) {
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
        (Math.abs(r.width - this.state.lastBoundingBox.width) > DT || Math.abs(r.height - this.state.lastBoundingBox.height) > DT) && this.setState({
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
      var r = this, u = this.props, l = u.active, c = u.allowEscapeViewBox, s = u.animationDuration, h = u.animationEasing, d = u.children, y = u.coordinate, p = u.hasPayload, g = u.isAnimationActive, b = u.offset, O = u.position, _ = u.reverseDirection, x = u.useTranslate3d, T = u.viewBox, w = u.wrapperStyle, M = uB({
        allowEscapeViewBox: c,
        coordinate: y,
        offsetTopLeft: b,
        position: O,
        reverseDirection: _,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: x,
        viewBox: T
      }), j = M.cssClasses, A = M.cssProperties, E = CT(CT({
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
function hu(t) {
  "@babel/helpers - typeof";
  return hu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hu(t);
}
function PT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function NT(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? PT(Object(n), !0).forEach(function(r) {
      b0(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : PT(Object(n)).forEach(function(r) {
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
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, rC(r.key), r);
  }
}
function bB(t, e, n) {
  return e && gB(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function xB(t, e, n) {
  return e = Lf(e), SB(t, nC() ? Reflect.construct(e, n || [], Lf(t).constructor) : e.apply(t, n));
}
function SB(t, e) {
  if (e && (hu(e) === "object" || typeof e == "function"))
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
function nC() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nC = function() {
    return !!t;
  })();
}
function Lf(t) {
  return Lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lf(t);
}
function OB(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Kg(t, e);
}
function Kg(t, e) {
  return Kg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Kg(t, e);
}
function b0(t, e, n) {
  return e = rC(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function rC(t) {
  var e = AB(t, "string");
  return hu(e) == "symbol" ? e : e + "";
}
function AB(t, e) {
  if (hu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (hu(r) != "object") return r;
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
      var r = this, u = this.props, l = u.active, c = u.allowEscapeViewBox, s = u.animationDuration, h = u.animationEasing, d = u.content, y = u.coordinate, p = u.filterNull, g = u.isAnimationActive, b = u.offset, O = u.payload, _ = u.payloadUniqBy, x = u.position, T = u.reverseDirection, w = u.useTranslate3d, M = u.viewBox, j = u.wrapperStyle, A = O ?? [];
      p && A.length && (A = Kj(O.filter(function(D) {
        return D.value != null && (D.hide !== !0 || r.props.includeHidden);
      }), _, wB));
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
      }, TB(d, NT(NT({}, this.props), {}, {
        payload: A
      })));
    }
  }]);
})(rt.PureComponent);
b0(dn, "displayName", "Tooltip");
b0(dn, "defaultProps", {
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
var Am, RT;
function EB() {
  if (RT) return Am;
  RT = 1;
  var t = rr(), e = function() {
    return t.Date.now();
  };
  return Am = e, Am;
}
var wm, qT;
function MB() {
  if (qT) return wm;
  qT = 1;
  var t = /\s/;
  function e(n) {
    for (var r = n.length; r-- && t.test(n.charAt(r)); )
      ;
    return r;
  }
  return wm = e, wm;
}
var Tm, zT;
function jB() {
  if (zT) return Tm;
  zT = 1;
  var t = MB(), e = /^\s+/;
  function n(r) {
    return r && r.slice(0, t(r) + 1).replace(e, "");
  }
  return Tm = n, Tm;
}
var Em, $T;
function aC() {
  if ($T) return Em;
  $T = 1;
  var t = jB(), e = ba(), n = Pu(), r = NaN, u = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt;
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
  return Em = h, Em;
}
var Mm, BT;
function CB() {
  if (BT) return Mm;
  BT = 1;
  var t = ba(), e = EB(), n = aC(), r = "Expected a function", u = Math.max, l = Math.min;
  function c(s, h, d) {
    var y, p, g, b, O, _, x = 0, T = !1, w = !1, M = !0;
    if (typeof s != "function")
      throw new TypeError(r);
    h = n(h) || 0, t(d) && (T = !!d.leading, w = "maxWait" in d, g = w ? u(n(d.maxWait) || 0, h) : g, M = "trailing" in d ? !!d.trailing : M);
    function j(K) {
      var Z = y, V = p;
      return y = p = void 0, x = K, b = s.apply(V, Z), b;
    }
    function A(K) {
      return x = K, O = setTimeout(R, h), T ? j(K) : b;
    }
    function E(K) {
      var Z = K - _, V = K - x, N = h - Z;
      return w ? l(N, g - V) : N;
    }
    function D(K) {
      var Z = K - _, V = K - x;
      return _ === void 0 || Z >= h || Z < 0 || w && V >= g;
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
      O !== void 0 && clearTimeout(O), x = 0, y = _ = p = O = void 0;
    }
    function U() {
      return O === void 0 ? b : z(e());
    }
    function $() {
      var K = e(), Z = D(K);
      if (y = arguments, p = this, _ = K, Z) {
        if (O === void 0)
          return A(_);
        if (w)
          return clearTimeout(O), O = setTimeout(R, h), j(_);
      }
      return O === void 0 && (O = setTimeout(R, h)), b;
    }
    return $.cancel = F, $.flush = U, $;
  }
  return Mm = c, Mm;
}
var jm, LT;
function DB() {
  if (LT) return jm;
  LT = 1;
  var t = CB(), e = ba(), n = "Expected a function";
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
  return jm = r, jm;
}
var PB = DB();
const iC = /* @__PURE__ */ Qt(PB);
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
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hf(t) {
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
  return UB(t) || LB(t, e) || BB(t, e) || $B();
}
function $B() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BB(t, e) {
  if (t) {
    if (typeof t == "string") return kT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kT(t, e);
  }
}
function kT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function LB(t, e) {
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
function UB(t) {
  if (Array.isArray(t)) return t;
}
var df = /* @__PURE__ */ rt.forwardRef(function(t, e) {
  var n = t.aspect, r = t.initialDimension, u = r === void 0 ? {
    width: -1,
    height: -1
  } : r, l = t.width, c = l === void 0 ? "100%" : l, s = t.height, h = s === void 0 ? "100%" : s, d = t.minWidth, y = d === void 0 ? 0 : d, p = t.minHeight, g = t.maxHeight, b = t.children, O = t.debounce, _ = O === void 0 ? 0 : O, x = t.id, T = t.className, w = t.onResize, M = t.style, j = M === void 0 ? {} : M, A = rt.useRef(null), E = rt.useRef();
  E.current = w, rt.useImperativeHandle(e, function() {
    return Object.defineProperty(A.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), A.current;
      },
      configurable: !0
    });
  });
  var D = rt.useState({
    containerWidth: u.width,
    containerHeight: u.height
  }), R = zB(D, 2), z = R[0], F = R[1], U = rt.useCallback(function(K, Z) {
    F(function(V) {
      var N = Math.round(K), I = Math.round(Z);
      return V.containerWidth === N && V.containerHeight === I ? V : {
        containerWidth: N,
        containerHeight: I
      };
    });
  }, []);
  rt.useEffect(function() {
    var K = function(ut) {
      var lt, P = ut[0].contentRect, k = P.width, et = P.height;
      U(k, et), (lt = E.current) === null || lt === void 0 || lt.call(E, k, et);
    };
    _ > 0 && (K = iC(K, _, {
      trailing: !0,
      leading: !1
    }));
    var Z = new ResizeObserver(K), V = A.current.getBoundingClientRect(), N = V.width, I = V.height;
    return U(N, I), Z.observe(A.current), function() {
      Z.disconnect();
    };
  }, [U, _]);
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
      return /* @__PURE__ */ B.isValidElement(W) ? /* @__PURE__ */ rt.cloneElement(W, hf({
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
  }, [n, b, h, g, p, y, z, c]);
  return /* @__PURE__ */ B.createElement("div", {
    id: x ? "".concat(x) : void 0,
    className: qt("recharts-responsive-container", T),
    style: hf(hf({}, j), {}, {
      width: c,
      height: h,
      minWidth: y,
      minHeight: p,
      maxHeight: g
    }),
    ref: A
  }, $);
}), x0 = function(e) {
  return null;
};
x0.displayName = "Cell";
function ol(t) {
  "@babel/helpers - typeof";
  return ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ol(t);
}
function HT(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? HT(Object(n), !0).forEach(function(r) {
      kB(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : HT(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function kB(t, e, n) {
  return e = HB(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function HB(t) {
  var e = IB(t, "string");
  return ol(e) == "symbol" ? e : e + "";
}
function IB(t, e) {
  if (ol(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ol(r) != "object") return r;
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
}, IT = "recharts_measurement_span";
function XB(t) {
  var e = Vg({}, t);
  return Object.keys(e).forEach(function(n) {
    e[n] || delete e[n];
  }), e;
}
var Qo = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (e == null || ii.isSsr)
    return {
      width: 0,
      height: 0
    };
  var r = XB(n), u = JSON.stringify({
    text: e,
    copyStyle: r
  });
  if (Fi.widthCache[u])
    return Fi.widthCache[u];
  try {
    var l = document.getElementById(IT);
    l || (l = document.createElement("span"), l.setAttribute("id", IT), l.setAttribute("aria-hidden", "true"), document.body.appendChild(l));
    var c = Vg(Vg({}, YB), r);
    Object.assign(l.style, c), l.textContent = "".concat(e);
    var s = l.getBoundingClientRect(), h = {
      width: s.width,
      height: s.height
    };
    return Fi.widthCache[u] = h, ++Fi.cacheCount > GB && (Fi.cacheCount = 0, Fi.widthCache = {}), h;
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
function ll(t) {
  "@babel/helpers - typeof";
  return ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ll(t);
}
function Uf(t, e) {
  return QB(t) || ZB(t, e) || FB(t, e) || VB();
}
function VB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FB(t, e) {
  if (t) {
    if (typeof t == "string") return GT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GT(t, e);
  }
}
function GT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ZB(t, e) {
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
function QB(t) {
  if (Array.isArray(t)) return t;
}
function WB(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function YT(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, t8(r.key), r);
  }
}
function JB(t, e, n) {
  return e && YT(t.prototype, e), n && YT(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function t8(t) {
  var e = e8(t, "string");
  return ll(e) == "symbol" ? e : e + "";
}
function e8(t, e) {
  if (ll(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ll(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var XT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, KT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, n8 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, r8 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, uC = {
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
var vf = /* @__PURE__ */ (function() {
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
      var r, u = (r = r8.exec(n)) !== null && r !== void 0 ? r : [], l = Uf(u, 3), c = l[1], s = l[2];
      return new t(parseFloat(c), s ?? "");
    }
  }]);
})();
function oC(t) {
  if (t.includes(Ji))
    return Ji;
  for (var e = t; e.includes("*") || e.includes("/"); ) {
    var n, r = (n = XT.exec(e)) !== null && n !== void 0 ? n : [], u = Uf(r, 4), l = u[1], c = u[2], s = u[3], h = vf.parse(l ?? ""), d = vf.parse(s ?? ""), y = c === "*" ? h.multiply(d) : h.divide(d);
    if (y.isNaN())
      return Ji;
    e = e.replace(XT, y.toString());
  }
  for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
    var p, g = (p = KT.exec(e)) !== null && p !== void 0 ? p : [], b = Uf(g, 4), O = b[1], _ = b[2], x = b[3], T = vf.parse(O ?? ""), w = vf.parse(x ?? ""), M = _ === "+" ? T.add(w) : T.subtract(w);
    if (M.isNaN())
      return Ji;
    e = e.replace(KT, M.toString());
  }
  return e;
}
var VT = /\(([^()]*)\)/;
function u8(t) {
  for (var e = t; e.includes("("); ) {
    var n = VT.exec(e), r = Uf(n, 2), u = r[1];
    e = e.replace(VT, oC(u));
  }
  return e;
}
function o8(t) {
  var e = t.replace(/\s+/g, "");
  return e = u8(e), e = oC(e), e;
}
function l8(t) {
  try {
    return o8(t);
  } catch {
    return Ji;
  }
}
function Cm(t) {
  var e = l8(t.slice(5, -1));
  return e === Ji ? "" : e;
}
var c8 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], f8 = ["dx", "dy", "angle", "className", "breakAll"];
function Fg() {
  return Fg = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Fg.apply(this, arguments);
}
function FT(t, e) {
  if (t == null) return {};
  var n = s8(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function ZT(t, e) {
  return p8(t) || v8(t, e) || d8(t, e) || h8();
}
function h8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d8(t, e) {
  if (t) {
    if (typeof t == "string") return QT(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return QT(t, e);
  }
}
function QT(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function v8(t, e) {
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
function p8(t) {
  if (Array.isArray(t)) return t;
}
var lC = /[ \f\n\r\t\v\u2028\u2029]+/, cC = function(e) {
  var n = e.children, r = e.breakAll, u = e.style;
  try {
    var l = [];
    Mt(n) || (r ? l = n.toString().split("") : l = n.toString().split(lC));
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
}, y8 = function(e, n, r, u, l) {
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
  }, b = g(n), O = function(V) {
    return V.reduce(function(N, I) {
      return N.width > I.width ? N : I;
    });
  };
  if (!y)
    return b;
  for (var _ = "…", x = function(V) {
    var N = p.slice(0, V), I = cC({
      breakAll: d,
      style: h,
      children: N + _
    }).wordsWithComputedWidth, W = g(I), ut = W.length > c || O(W).width > Number(u);
    return [ut, W];
  }, T = 0, w = p.length - 1, M = 0, j; T <= w && M <= p.length - 1; ) {
    var A = Math.floor((T + w) / 2), E = A - 1, D = x(E), R = ZT(D, 2), z = R[0], F = R[1], U = x(A), $ = ZT(U, 1), K = $[0];
    if (!z && !K && (T = A + 1), z && K && (w = A - 1), !z && K) {
      j = F;
      break;
    }
    M++;
  }
  return j || b;
}, WT = function(e) {
  var n = Mt(e) ? [] : e.toString().split(lC);
  return [{
    words: n
  }];
}, m8 = function(e) {
  var n = e.width, r = e.scaleToFit, u = e.children, l = e.style, c = e.breakAll, s = e.maxLines;
  if ((n || r) && !ii.isSsr) {
    var h, d, y = cC({
      breakAll: c,
      children: u,
      style: l
    });
    if (y) {
      var p = y.wordsWithComputedWidth, g = y.spaceWidth;
      h = p, d = g;
    } else
      return WT(u);
    return y8({
      breakAll: c,
      children: u,
      maxLines: s,
      style: l
    }, h, d, n, r);
  }
  return WT(u);
}, JT = "#808080", kf = function(e) {
  var n = e.x, r = n === void 0 ? 0 : n, u = e.y, l = u === void 0 ? 0 : u, c = e.lineHeight, s = c === void 0 ? "1em" : c, h = e.capHeight, d = h === void 0 ? "0.71em" : h, y = e.scaleToFit, p = y === void 0 ? !1 : y, g = e.textAnchor, b = g === void 0 ? "start" : g, O = e.verticalAnchor, _ = O === void 0 ? "end" : O, x = e.fill, T = x === void 0 ? JT : x, w = FT(e, c8), M = rt.useMemo(function() {
    return m8({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: p,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, p, w.style, w.width]), j = w.dx, A = w.dy, E = w.angle, D = w.className, R = w.breakAll, z = FT(w, f8);
  if (!_e(r) || !_e(l))
    return null;
  var F = r + (st(j) ? j : 0), U = l + (st(A) ? A : 0), $;
  switch (_) {
    case "start":
      $ = Cm("calc(".concat(d, ")"));
      break;
    case "middle":
      $ = Cm("calc(".concat((M.length - 1) / 2, " * -").concat(s, " + (").concat(d, " / 2))"));
      break;
    default:
      $ = Cm("calc(".concat(M.length - 1, " * -").concat(s, ")"));
      break;
  }
  var K = [];
  if (p) {
    var Z = M[0].width, V = w.width;
    K.push("scale(".concat((st(V) ? V / Z : 1) / Z, ")"));
  }
  return E && K.push("rotate(".concat(E, ", ").concat(F, ", ").concat(U, ")")), K.length && (z.transform = K.join(" ")), /* @__PURE__ */ B.createElement("text", Fg({}, Et(z, !0), {
    x: F,
    y: U,
    className: qt("recharts-text", D),
    textAnchor: b,
    fill: T.includes("url") ? JT : T
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
function S0(t) {
  let e, n, r;
  t.length !== 2 ? (e = ga, n = (s, h) => ga(t(s), h), r = (s, h) => t(s) - h) : (e = t === ga || t === g8 ? t : b8, n = t, r = t);
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
function b8() {
  return 0;
}
function fC(t) {
  return t === null ? NaN : +t;
}
function* x8(t, e) {
  for (let n of t)
    n != null && (n = +n) >= n && (yield n);
}
const S8 = S0(ga), Ll = S8.right;
S0(fC).center;
class tE extends Map {
  constructor(e, n = A8) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, u] of e) this.set(r, u);
  }
  get(e) {
    return super.get(eE(this, e));
  }
  has(e) {
    return super.has(eE(this, e));
  }
  set(e, n) {
    return super.set(_8(this, e), n);
  }
  delete(e) {
    return super.delete(O8(this, e));
  }
}
function eE({ _intern: t, _key: e }, n) {
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
  if (t === ga) return sC;
  if (typeof t != "function") throw new TypeError("compare is not a function");
  return (e, n) => {
    const r = t(e, n);
    return r || r === 0 ? r : (t(n, n) === 0) - (t(e, e) === 0);
  };
}
function sC(t, e) {
  return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0);
}
const T8 = Math.sqrt(50), E8 = Math.sqrt(10), M8 = Math.sqrt(2);
function Hf(t, e, n) {
  const r = (e - t) / Math.max(0, n), u = Math.floor(Math.log10(r)), l = r / Math.pow(10, u), c = l >= T8 ? 10 : l >= E8 ? 5 : l >= M8 ? 2 : 1;
  let s, h, d;
  return u < 0 ? (d = Math.pow(10, -u) / c, s = Math.round(t * d), h = Math.round(e * d), s / d < t && ++s, h / d > e && --h, d = -d) : (d = Math.pow(10, u) * c, s = Math.round(t / d), h = Math.round(e / d), s * d < t && ++s, h * d > e && --h), h < s && 0.5 <= n && n < 2 ? Hf(t, e, n * 2) : [s, h, d];
}
function Zg(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [u, l, c] = r ? Hf(e, t, n) : Hf(t, e, n);
  if (!(l >= u)) return [];
  const s = l - u + 1, h = new Array(s);
  if (r)
    if (c < 0) for (let d = 0; d < s; ++d) h[d] = (l - d) / -c;
    else for (let d = 0; d < s; ++d) h[d] = (l - d) * c;
  else if (c < 0) for (let d = 0; d < s; ++d) h[d] = (u + d) / -c;
  else for (let d = 0; d < s; ++d) h[d] = (u + d) * c;
  return h;
}
function Qg(t, e, n) {
  return e = +e, t = +t, n = +n, Hf(t, e, n)[2];
}
function Wg(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, u = r ? Qg(e, t, n) : Qg(t, e, n);
  return (r ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function nE(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function rE(t, e) {
  let n;
  for (const r of t)
    r != null && (n > r || n === void 0 && r >= r) && (n = r);
  return n;
}
function hC(t, e, n = 0, r = 1 / 0, u) {
  if (e = Math.floor(e), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(t.length - 1, r)), !(n <= e && e <= r)) return t;
  for (u = u === void 0 ? sC : w8(u); r > n; ) {
    if (r - n > 600) {
      const h = r - n + 1, d = e - n + 1, y = Math.log(h), p = 0.5 * Math.exp(2 * y / 3), g = 0.5 * Math.sqrt(y * p * (h - p) / h) * (d - h / 2 < 0 ? -1 : 1), b = Math.max(n, Math.floor(e - d * p / h + g)), O = Math.min(r, Math.floor(e + (h - d) * p / h + g));
      hC(t, e, b, O, u);
    }
    const l = t[e];
    let c = n, s = r;
    for ($o(t, n, e), u(t[r], l) > 0 && $o(t, n, r); c < s; ) {
      for ($o(t, c, s), ++c, --s; u(t[c], l) < 0; ) ++c;
      for (; u(t[s], l) > 0; ) --s;
    }
    u(t[n], l) === 0 ? $o(t, n, s) : (++s, $o(t, s, r)), s <= e && (n = s + 1), e <= s && (r = s - 1);
  }
  return t;
}
function $o(t, e, n) {
  const r = t[e];
  t[e] = t[n], t[n] = r;
}
function j8(t, e, n) {
  if (t = Float64Array.from(x8(t)), !(!(r = t.length) || isNaN(e = +e))) {
    if (e <= 0 || r < 2) return rE(t);
    if (e >= 1) return nE(t);
    var r, u = (r - 1) * e, l = Math.floor(u), c = nE(hC(t, l).subarray(0, l + 1)), s = rE(t.subarray(l + 1));
    return c + (s - c) * (u - l);
  }
}
function C8(t, e, n = fC) {
  if (!(!(r = t.length) || isNaN(e = +e))) {
    if (e <= 0 || r < 2) return +n(t[0], 0, t);
    if (e >= 1) return +n(t[r - 1], r - 1, t);
    var r, u = (r - 1) * e, l = Math.floor(u), c = +n(t[l], l, t), s = +n(t[l + 1], l + 1, t);
    return c + (s - c) * (u - l);
  }
}
function D8(t, e, n) {
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
const Jg = Symbol("implicit");
function _0() {
  var t = new tE(), e = [], n = [], r = Jg;
  function u(l) {
    let c = t.get(l);
    if (c === void 0) {
      if (r !== Jg) return r;
      t.set(l, c = e.push(l) - 1);
    }
    return n[c % n.length];
  }
  return u.domain = function(l) {
    if (!arguments.length) return e.slice();
    e = [], t = new tE();
    for (const c of l)
      t.has(c) || t.set(c, e.push(c) - 1);
    return u;
  }, u.range = function(l) {
    return arguments.length ? (n = Array.from(l), u) : n.slice();
  }, u.unknown = function(l) {
    return arguments.length ? (r = l, u) : r;
  }, u.copy = function() {
    return _0(e, n).unknown(r);
  }, Pn.apply(u, arguments), u;
}
function cl() {
  var t = _0().unknown(void 0), e = t.domain, n = t.range, r = 0, u = 1, l, c, s = !1, h = 0, d = 0, y = 0.5;
  delete t.unknown;
  function p() {
    var g = e().length, b = u < r, O = b ? u : r, _ = b ? r : u;
    l = (_ - O) / Math.max(1, g - h + d * 2), s && (l = Math.floor(l)), O += (_ - O - l * (g - h)) * y, c = l * (1 - h), s && (O = Math.round(O), c = Math.round(c));
    var x = D8(g).map(function(T) {
      return O + l * T;
    });
    return n(b ? x.reverse() : x);
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
function dC(t) {
  var e = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
    return dC(e());
  }, t;
}
function Wo() {
  return dC(cl.apply(null, arguments).paddingInner(1));
}
function O0(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function vC(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ul() {
}
var fl = 0.7, If = 1 / fl, au = "\\s*([+-]?\\d+)\\s*", sl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", P8 = /^#([0-9a-f]{3,8})$/, N8 = new RegExp(`^rgb\\(${au},${au},${au}\\)$`), R8 = new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`), q8 = new RegExp(`^rgba\\(${au},${au},${au},${sl}\\)$`), z8 = new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${sl}\\)$`), $8 = new RegExp(`^hsl\\(${sl},${Wn},${Wn}\\)$`), B8 = new RegExp(`^hsla\\(${sl},${Wn},${Wn},${sl}\\)$`), aE = {
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
O0(Ul, hl, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: iE,
  // Deprecated! Use color.formatHex.
  formatHex: iE,
  formatHex8: L8,
  formatHsl: U8,
  formatRgb: uE,
  toString: uE
});
function iE() {
  return this.rgb().formatHex();
}
function L8() {
  return this.rgb().formatHex8();
}
function U8() {
  return pC(this).formatHsl();
}
function uE() {
  return this.rgb().formatRgb();
}
function hl(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = P8.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? oE(e) : n === 3 ? new We(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? pf(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? pf(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = N8.exec(t)) ? new We(e[1], e[2], e[3], 1) : (e = R8.exec(t)) ? new We(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = q8.exec(t)) ? pf(e[1], e[2], e[3], e[4]) : (e = z8.exec(t)) ? pf(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = $8.exec(t)) ? fE(e[1], e[2] / 100, e[3] / 100, 1) : (e = B8.exec(t)) ? fE(e[1], e[2] / 100, e[3] / 100, e[4]) : aE.hasOwnProperty(t) ? oE(aE[t]) : t === "transparent" ? new We(NaN, NaN, NaN, 0) : null;
}
function oE(t) {
  return new We(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function pf(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new We(t, e, n, r);
}
function k8(t) {
  return t instanceof Ul || (t = hl(t)), t ? (t = t.rgb(), new We(t.r, t.g, t.b, t.opacity)) : new We();
}
function tb(t, e, n, r) {
  return arguments.length === 1 ? k8(t) : new We(t, e, n, r ?? 1);
}
function We(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
O0(We, tb, vC(Ul, {
  brighter(t) {
    return t = t == null ? If : Math.pow(If, t), new We(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fl : Math.pow(fl, t), new We(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new We(Za(this.r), Za(this.g), Za(this.b), Gf(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lE,
  // Deprecated! Use color.formatHex.
  formatHex: lE,
  formatHex8: H8,
  formatRgb: cE,
  toString: cE
}));
function lE() {
  return `#${Xa(this.r)}${Xa(this.g)}${Xa(this.b)}`;
}
function H8() {
  return `#${Xa(this.r)}${Xa(this.g)}${Xa(this.b)}${Xa((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cE() {
  const t = Gf(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Za(this.r)}, ${Za(this.g)}, ${Za(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Gf(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Za(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Xa(t) {
  return t = Za(t), (t < 16 ? "0" : "") + t.toString(16);
}
function fE(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new kn(t, e, n, r);
}
function pC(t) {
  if (t instanceof kn) return new kn(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ul || (t = hl(t)), !t) return new kn();
  if (t instanceof kn) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, u = Math.min(e, n, r), l = Math.max(e, n, r), c = NaN, s = l - u, h = (l + u) / 2;
  return s ? (e === l ? c = (n - r) / s + (n < r) * 6 : n === l ? c = (r - e) / s + 2 : c = (e - n) / s + 4, s /= h < 0.5 ? l + u : 2 - l - u, c *= 60) : s = h > 0 && h < 1 ? 0 : c, new kn(c, s, h, t.opacity);
}
function I8(t, e, n, r) {
  return arguments.length === 1 ? pC(t) : new kn(t, e, n, r ?? 1);
}
function kn(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
O0(kn, I8, vC(Ul, {
  brighter(t) {
    return t = t == null ? If : Math.pow(If, t), new kn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fl : Math.pow(fl, t), new kn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, u = 2 * n - r;
    return new We(
      Dm(t >= 240 ? t - 240 : t + 120, u, r),
      Dm(t, u, r),
      Dm(t < 120 ? t + 240 : t - 120, u, r),
      this.opacity
    );
  },
  clamp() {
    return new kn(sE(this.h), yf(this.s), yf(this.l), Gf(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Gf(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${sE(this.h)}, ${yf(this.s) * 100}%, ${yf(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function sE(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function yf(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Dm(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const A0 = (t) => () => t;
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
  return (t = +t) == 1 ? yC : function(e, n) {
    return n - e ? Y8(e, n, t) : A0(isNaN(e) ? n : e);
  };
}
function yC(t, e) {
  var n = e - t;
  return n ? G8(t, n) : A0(isNaN(t) ? e : t);
}
const hE = (function t(e) {
  var n = X8(e);
  function r(u, l) {
    var c = n((u = tb(u)).r, (l = tb(l)).r), s = n(u.g, l.g), h = n(u.b, l.b), d = yC(u.opacity, l.opacity);
    return function(y) {
      return u.r = c(y), u.g = s(y), u.b = h(y), u.opacity = d(y), u + "";
    };
  }
  return r.gamma = t, r;
})(1);
function K8(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), u;
  return function(l) {
    for (u = 0; u < n; ++u) r[u] = t[u] * (1 - l) + e[u] * l;
    return r;
  };
}
function V8(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function F8(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, u = new Array(r), l = new Array(n), c;
  for (c = 0; c < r; ++c) u[c] = $u(t[c], e[c]);
  for (; c < n; ++c) l[c] = e[c];
  return function(s) {
    for (c = 0; c < r; ++c) l[c] = u[c](s);
    return l;
  };
}
function Z8(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Yf(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Q8(t, e) {
  var n = {}, r = {}, u;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (u in e)
    u in t ? n[u] = $u(t[u], e[u]) : r[u] = e[u];
  return function(l) {
    for (u in n) r[u] = n[u](l);
    return r;
  };
}
var eb = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Pm = new RegExp(eb.source, "g");
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
  var n = eb.lastIndex = Pm.lastIndex = 0, r, u, l, c = -1, s = [], h = [];
  for (t = t + "", e = e + ""; (r = eb.exec(t)) && (u = Pm.exec(e)); )
    (l = u.index) > n && (l = e.slice(n, l), s[c] ? s[c] += l : s[++c] = l), (r = r[0]) === (u = u[0]) ? s[c] ? s[c] += u : s[++c] = u : (s[++c] = null, h.push({ i: c, x: Yf(r, u) })), n = Pm.lastIndex;
  return n < e.length && (l = e.slice(n), s[c] ? s[c] += l : s[++c] = l), s.length < 2 ? h[0] ? J8(h[0].x) : W8(e) : (e = h.length, function(d) {
    for (var y = 0, p; y < e; ++y) s[(p = h[y]).i] = p.x(d);
    return s.join("");
  });
}
function $u(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? A0(e) : (n === "number" ? Yf : n === "string" ? (r = hl(e)) ? (e = r, hE) : t4 : e instanceof hl ? hE : e instanceof Date ? Z8 : V8(e) ? K8 : Array.isArray(e) ? F8 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Q8 : Yf)(t, e);
}
function w0(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function e4(t, e) {
  e === void 0 && (e = t, t = $u);
  for (var n = 0, r = e.length - 1, u = e[0], l = new Array(r < 0 ? 0 : r); n < r; ) l[n] = t(u, u = e[++n]);
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
function Xf(t) {
  return +t;
}
var dE = [0, 1];
function Ie(t) {
  return t;
}
function nb(t, e) {
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
  var r = t[0], u = t[1], l = e[0], c = e[1];
  return u < r ? (r = nb(u, r), l = n(c, l)) : (r = nb(r, u), l = n(l, c)), function(s) {
    return l(r(s));
  };
}
function i4(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, u = new Array(r), l = new Array(r), c = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < r; )
    u[c] = nb(t[c], t[c + 1]), l[c] = n(e[c], e[c + 1]);
  return function(s) {
    var h = Ll(t, s, 1, r) - 1;
    return l[h](u[h](s));
  };
}
function kl(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Us() {
  var t = dE, e = dE, n = $u, r, u, l, c = Ie, s, h, d;
  function y() {
    var g = Math.min(t.length, e.length);
    return c !== Ie && (c = r4(t[0], t[g - 1])), s = g > 2 ? i4 : a4, h = d = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? l : (h || (h = s(t.map(r), e, n)))(r(c(g)));
  }
  return p.invert = function(g) {
    return c(u((d || (d = s(e, t.map(r), Yf)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (t = Array.from(g, Xf), y()) : t.slice();
  }, p.range = function(g) {
    return arguments.length ? (e = Array.from(g), y()) : e.slice();
  }, p.rangeRound = function(g) {
    return e = Array.from(g), n = w0, y();
  }, p.clamp = function(g) {
    return arguments.length ? (c = g ? !0 : Ie, y()) : c !== Ie;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, y()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (l = g, p) : l;
  }, function(g, b) {
    return r = g, u = b, y();
  };
}
function T0() {
  return Us()(Ie, Ie);
}
function u4(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Kf(t, e) {
  if (!isFinite(t) || t === 0) return null;
  var n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"), r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function du(t) {
  return t = Kf(Math.abs(t)), t ? t[1] : NaN;
}
function o4(t, e) {
  return function(n, r) {
    for (var u = n.length, l = [], c = 0, s = t[0], h = 0; u > 0 && s > 0 && (h + s + 1 > r && (s = Math.max(1, r - h)), l.push(n.substring(u -= s, u + s)), !((h += s + 1) > r)); )
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
function dl(t) {
  if (!(e = c4.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new E0({
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
dl.prototype = E0.prototype;
function E0(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
E0.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function f4(t) {
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
var Vf;
function s4(t, e) {
  var n = Kf(t, e);
  if (!n) return Vf = void 0, t.toPrecision(e);
  var r = n[0], u = n[1], l = u - (Vf = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1, c = r.length;
  return l === c ? r : l > c ? r + new Array(l - c + 1).join("0") : l > 0 ? r.slice(0, l) + "." + r.slice(l) : "0." + new Array(1 - l).join("0") + Kf(t, Math.max(0, e + l - 1))[0];
}
function vE(t, e) {
  var n = Kf(t, e);
  if (!n) return t + "";
  var r = n[0], u = n[1];
  return u < 0 ? "0." + new Array(-u).join("0") + r : r.length > u + 1 ? r.slice(0, u + 1) + "." + r.slice(u + 1) : r + new Array(u - r.length + 2).join("0");
}
const pE = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: u4,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => vE(t * 100, e),
  r: vE,
  s: s4,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function yE(t) {
  return t;
}
var mE = Array.prototype.map, gE = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function h4(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? yE : o4(mE.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", u = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? yE : l4(mE.call(t.numerals, String)), c = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", h = t.nan === void 0 ? "NaN" : t.nan + "";
  function d(p, g) {
    p = dl(p);
    var b = p.fill, O = p.align, _ = p.sign, x = p.symbol, T = p.zero, w = p.width, M = p.comma, j = p.precision, A = p.trim, E = p.type;
    E === "n" ? (M = !0, E = "g") : pE[E] || (j === void 0 && (j = 12), A = !0, E = "g"), (T || b === "0" && O === "=") && (T = !0, b = "0", O = "=");
    var D = (g && g.prefix !== void 0 ? g.prefix : "") + (x === "$" ? n : x === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : ""), R = (x === "$" ? r : /[%p]/.test(E) ? c : "") + (g && g.suffix !== void 0 ? g.suffix : ""), z = pE[E], F = /[defgprs%]/.test(E);
    j = j === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j));
    function U($) {
      var K = D, Z = R, V, N, I;
      if (E === "c")
        Z = z($) + Z, $ = "";
      else {
        $ = +$;
        var W = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? h : z(Math.abs($), j), A && ($ = f4($)), W && +$ == 0 && _ !== "+" && (W = !1), K = (W ? _ === "(" ? _ : s : _ === "-" || _ === "(" ? "" : _) + K, Z = (E === "s" && !isNaN($) && Vf !== void 0 ? gE[8 + Vf / 3] : "") + Z + (W && _ === "(" ? ")" : ""), F) {
          for (V = -1, N = $.length; ++V < N; )
            if (I = $.charCodeAt(V), 48 > I || I > 57) {
              Z = (I === 46 ? u + $.slice(V + 1) : $.slice(V)) + Z, $ = $.slice(0, V);
              break;
            }
        }
      }
      M && !T && ($ = e($, 1 / 0));
      var ut = K.length + $.length + Z.length, lt = ut < w ? new Array(w - ut + 1).join(b) : "";
      switch (M && T && ($ = e(lt + $, lt.length ? w - Z.length : 1 / 0), lt = ""), O) {
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
    return U.toString = function() {
      return p + "";
    }, U;
  }
  function y(p, g) {
    var b = Math.max(-8, Math.min(8, Math.floor(du(g) / 3))) * 3, O = Math.pow(10, -b), _ = d((p = dl(p), p.type = "f", p), { suffix: gE[8 + b / 3] });
    return function(x) {
      return _(O * x);
    };
  }
  return {
    format: d,
    formatPrefix: y
  };
}
var mf, M0, mC;
d4({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function d4(t) {
  return mf = h4(t), M0 = mf.format, mC = mf.formatPrefix, mf;
}
function v4(t) {
  return Math.max(0, -du(Math.abs(t)));
}
function p4(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(du(e) / 3))) * 3 - du(Math.abs(t)));
}
function y4(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, du(e) - du(t)) + 1;
}
function gC(t, e, n, r) {
  var u = Wg(t, e, n), l;
  switch (r = dl(r ?? ",f"), r.type) {
    case "s": {
      var c = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(l = p4(u, c)) && (r.precision = l), mC(r, c);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(l = y4(u, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = l - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(l = v4(u)) && (r.precision = l - (r.type === "%") * 2);
      break;
    }
  }
  return M0(r);
}
function Sa(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Zg(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var u = e();
    return gC(u[0], u[u.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), u = 0, l = r.length - 1, c = r[u], s = r[l], h, d, y = 10;
    for (s < c && (d = c, c = s, s = d, d = u, u = l, l = d); y-- > 0; ) {
      if (d = Qg(c, s, n), d === h)
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
function Ff() {
  var t = T0();
  return t.copy = function() {
    return kl(t, Ff());
  }, Pn.apply(t, arguments), Sa(t);
}
function bC(t) {
  var e;
  function n(r) {
    return r == null || isNaN(r = +r) ? e : r;
  }
  return n.invert = n, n.domain = n.range = function(r) {
    return arguments.length ? (t = Array.from(r, Xf), n) : t.slice();
  }, n.unknown = function(r) {
    return arguments.length ? (e = r, n) : e;
  }, n.copy = function() {
    return bC(t).unknown(e);
  }, t = arguments.length ? Array.from(t, Xf) : [0, 1], Sa(n);
}
function xC(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, u = t[n], l = t[r], c;
  return l < u && (c = n, n = r, r = c, c = u, u = l, l = c), t[n] = e.floor(u), t[r] = e.ceil(l), t;
}
function bE(t) {
  return Math.log(t);
}
function xE(t) {
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
function SE(t) {
  return (e, n) => -t(-e, n);
}
function j0(t) {
  const e = t(bE, xE), n = e.domain;
  let r = 10, u, l;
  function c() {
    return u = S4(r), l = x4(r), n()[0] < 0 ? (u = SE(u), l = SE(l), t(m4, g4)) : t(bE, xE), e;
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
    let g = u(d), b = u(y), O, _;
    const x = s == null ? 10 : +s;
    let T = [];
    if (!(r % 1) && b - g < x) {
      if (g = Math.floor(g), b = Math.ceil(b), d > 0) {
        for (; g <= b; ++g)
          for (O = 1; O < r; ++O)
            if (_ = g < 0 ? O / l(-g) : O * l(g), !(_ < d)) {
              if (_ > y) break;
              T.push(_);
            }
      } else for (; g <= b; ++g)
        for (O = r - 1; O >= 1; --O)
          if (_ = g > 0 ? O / l(-g) : O * l(g), !(_ < d)) {
            if (_ > y) break;
            T.push(_);
          }
      T.length * 2 < x && (T = Zg(d, y, x));
    } else
      T = Zg(g, b, Math.min(b - g, x)).map(l);
    return p ? T.reverse() : T;
  }, e.tickFormat = (s, h) => {
    if (s == null && (s = 10), h == null && (h = r === 10 ? "s" : ","), typeof h != "function" && (!(r % 1) && (h = dl(h)).precision == null && (h.trim = !0), h = M0(h)), s === 1 / 0) return h;
    const d = Math.max(1, r * s / e.ticks().length);
    return (y) => {
      let p = y / l(Math.round(u(y)));
      return p * r < r - 0.5 && (p *= r), p <= d ? h(y) : "";
    };
  }, e.nice = () => n(xC(n(), {
    floor: (s) => l(Math.floor(u(s))),
    ceil: (s) => l(Math.ceil(u(s)))
  })), e;
}
function SC() {
  const t = j0(Us()).domain([1, 10]);
  return t.copy = () => kl(t, SC()).base(t.base()), Pn.apply(t, arguments), t;
}
function _E(t) {
  return function(e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t));
  };
}
function OE(t) {
  return function(e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
  };
}
function C0(t) {
  var e = 1, n = t(_E(e), OE(e));
  return n.constant = function(r) {
    return arguments.length ? t(_E(e = +r), OE(e)) : e;
  }, Sa(n);
}
function _C() {
  var t = C0(Us());
  return t.copy = function() {
    return kl(t, _C()).constant(t.constant());
  }, Pn.apply(t, arguments);
}
function AE(t) {
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
function D0(t) {
  var e = t(Ie, Ie), n = 1;
  function r() {
    return n === 1 ? t(Ie, Ie) : n === 0.5 ? t(_4, O4) : t(AE(n), AE(1 / n));
  }
  return e.exponent = function(u) {
    return arguments.length ? (n = +u, r()) : n;
  }, Sa(e);
}
function P0() {
  var t = D0(Us());
  return t.copy = function() {
    return kl(t, P0()).exponent(t.exponent());
  }, Pn.apply(t, arguments), t;
}
function A4() {
  return P0.apply(null, arguments).exponent(0.5);
}
function wE(t) {
  return Math.sign(t) * t * t;
}
function w4(t) {
  return Math.sign(t) * Math.sqrt(Math.abs(t));
}
function OC() {
  var t = T0(), e = [0, 1], n = !1, r;
  function u(l) {
    var c = w4(t(l));
    return isNaN(c) ? r : n ? Math.round(c) : c;
  }
  return u.invert = function(l) {
    return t.invert(wE(l));
  }, u.domain = function(l) {
    return arguments.length ? (t.domain(l), u) : t.domain();
  }, u.range = function(l) {
    return arguments.length ? (t.range((e = Array.from(l, Xf)).map(wE)), u) : e.slice();
  }, u.rangeRound = function(l) {
    return u.range(l).round(!0);
  }, u.round = function(l) {
    return arguments.length ? (n = !!l, u) : n;
  }, u.clamp = function(l) {
    return arguments.length ? (t.clamp(l), u) : t.clamp();
  }, u.unknown = function(l) {
    return arguments.length ? (r = l, u) : r;
  }, u.copy = function() {
    return OC(t.domain(), e).round(n).clamp(t.clamp()).unknown(r);
  }, Pn.apply(u, arguments), Sa(u);
}
function AC() {
  var t = [], e = [], n = [], r;
  function u() {
    var c = 0, s = Math.max(1, e.length);
    for (n = new Array(s - 1); ++c < s; ) n[c - 1] = C8(t, c / s);
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
    return AC().domain(t).range(e).unknown(r);
  }, Pn.apply(l, arguments);
}
function wC() {
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
    return wC().domain([t, e]).range(u).unknown(l);
  }, Pn.apply(Sa(c), arguments);
}
function TC() {
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
    return TC().domain(t).range(e).unknown(n);
  }, Pn.apply(u, arguments);
}
const Nm = /* @__PURE__ */ new Date(), Rm = /* @__PURE__ */ new Date();
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
  }), n && (u.count = (l, c) => (Nm.setTime(+l), Rm.setTime(+c), t(Nm), t(Rm), Math.floor(n(Nm, Rm))), u.every = (l) => (l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? u.filter(r ? (c) => r(c) % l === 0 : (c) => u.count(0, c) % l === 0) : u)), u;
}
const Zf = Oe(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
Zf.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? Oe((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : Zf);
Zf.range;
const wr = 1e3, Mn = wr * 60, Tr = Mn * 60, Rr = Tr * 24, N0 = Rr * 7, TE = Rr * 30, qm = Rr * 365, Ka = Oe((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * wr);
}, (t, e) => (e - t) / wr, (t) => t.getUTCSeconds());
Ka.range;
const R0 = Oe((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * wr);
}, (t, e) => {
  t.setTime(+t + e * Mn);
}, (t, e) => (e - t) / Mn, (t) => t.getMinutes());
R0.range;
const q0 = Oe((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * Mn);
}, (t, e) => (e - t) / Mn, (t) => t.getUTCMinutes());
q0.range;
const z0 = Oe((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * wr - t.getMinutes() * Mn);
}, (t, e) => {
  t.setTime(+t + e * Tr);
}, (t, e) => (e - t) / Tr, (t) => t.getHours());
z0.range;
const $0 = Oe((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * Tr);
}, (t, e) => (e - t) / Tr, (t) => t.getUTCHours());
$0.range;
const Hl = Oe(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Mn) / Rr,
  (t) => t.getDate() - 1
);
Hl.range;
const ks = Oe((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Rr, (t) => t.getUTCDate() - 1);
ks.range;
const EC = Oe((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / Rr, (t) => Math.floor(t / Rr));
EC.range;
function ui(t) {
  return Oe((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * Mn) / N0);
}
const Hs = ui(0), Qf = ui(1), T4 = ui(2), E4 = ui(3), vu = ui(4), M4 = ui(5), j4 = ui(6);
Hs.range;
Qf.range;
T4.range;
E4.range;
vu.range;
M4.range;
j4.range;
function oi(t) {
  return Oe((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / N0);
}
const Is = oi(0), Wf = oi(1), C4 = oi(2), D4 = oi(3), pu = oi(4), P4 = oi(5), N4 = oi(6);
Is.range;
Wf.range;
C4.range;
D4.range;
pu.range;
P4.range;
N4.range;
const B0 = Oe((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
B0.range;
const L0 = Oe((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
L0.range;
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
function MC(t, e, n, r, u, l) {
  const c = [
    [Ka, 1, wr],
    [Ka, 5, 5 * wr],
    [Ka, 15, 15 * wr],
    [Ka, 30, 30 * wr],
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
    [n, 1, N0],
    [e, 1, TE],
    [e, 3, 3 * TE],
    [t, 1, qm]
  ];
  function s(d, y, p) {
    const g = y < d;
    g && ([d, y] = [y, d]);
    const b = p && typeof p.range == "function" ? p : h(d, y, p), O = b ? b.range(d, +y + 1) : [];
    return g ? O.reverse() : O;
  }
  function h(d, y, p) {
    const g = Math.abs(y - d) / p, b = S0(([, , x]) => x).right(c, g);
    if (b === c.length) return t.every(Wg(d / qm, y / qm, p));
    if (b === 0) return Zf.every(Math.max(Wg(d, y, p), 1));
    const [O, _] = c[g / c[b - 1][2] < c[b][2] / g ? b - 1 : b];
    return O.every(_);
  }
  return [s, h];
}
const [R4, q4] = MC(zr, L0, Is, EC, $0, q0), [z4, $4] = MC(qr, B0, Hs, Hl, z0, R0);
function zm(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function $m(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Bo(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function B4(t) {
  var e = t.dateTime, n = t.date, r = t.time, u = t.periods, l = t.days, c = t.shortDays, s = t.months, h = t.shortMonths, d = Lo(u), y = Uo(u), p = Lo(l), g = Uo(l), b = Lo(c), O = Uo(c), _ = Lo(s), x = Uo(s), T = Lo(h), w = Uo(h), M = {
    a: I,
    A: W,
    b: ut,
    B: lt,
    c: null,
    d: PE,
    e: PE,
    f: o6,
    g: m6,
    G: b6,
    H: a6,
    I: i6,
    j: u6,
    L: jC,
    m: l6,
    M: c6,
    p: P,
    q: k,
    Q: qE,
    s: zE,
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
    "%": RE
  }, j = {
    a: et,
    A: ft,
    b: vt,
    B: mt,
    c: null,
    d: NE,
    e: NE,
    f: A6,
    g: R6,
    G: z6,
    H: S6,
    I: _6,
    j: O6,
    L: DC,
    m: w6,
    M: T6,
    p: jt,
    q: Ut,
    Q: qE,
    s: zE,
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
    "%": RE
  }, A = {
    a: F,
    A: U,
    b: $,
    B: K,
    c: Z,
    d: CE,
    e: CE,
    f: t6,
    g: jE,
    G: ME,
    H: DE,
    I: DE,
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
    y: jE,
    Y: ME,
    Z: K4,
    "%": e6
  };
  M.x = E(n, M), M.X = E(r, M), M.c = E(e, M), j.x = E(n, j), j.X = E(r, j), j.c = E(e, j);
  function E(ct, xt) {
    return function(St) {
      var ot = [], te = -1, wt = 0, ue = ct.length, oe, ze, Nn;
      for (St instanceof Date || (St = /* @__PURE__ */ new Date(+St)); ++te < ue; )
        ct.charCodeAt(te) === 37 && (ot.push(ct.slice(wt, te)), (ze = EE[oe = ct.charAt(++te)]) != null ? oe = ct.charAt(++te) : ze = oe === "e" ? " " : "0", (Nn = xt[oe]) && (oe = Nn(St, ze)), ot.push(oe), wt = te + 1);
      return ot.push(ct.slice(wt, te)), ot.join("");
    };
  }
  function D(ct, xt) {
    return function(St) {
      var ot = Bo(1900, void 0, 1), te = R(ot, ct, St += "", 0), wt, ue;
      if (te != St.length) return null;
      if ("Q" in ot) return new Date(ot.Q);
      if ("s" in ot) return new Date(ot.s * 1e3 + ("L" in ot ? ot.L : 0));
      if (xt && !("Z" in ot) && (ot.Z = 0), "p" in ot && (ot.H = ot.H % 12 + ot.p * 12), ot.m === void 0 && (ot.m = "q" in ot ? ot.q : 0), "V" in ot) {
        if (ot.V < 1 || ot.V > 53) return null;
        "w" in ot || (ot.w = 1), "Z" in ot ? (wt = $m(Bo(ot.y, 0, 1)), ue = wt.getUTCDay(), wt = ue > 4 || ue === 0 ? Wf.ceil(wt) : Wf(wt), wt = ks.offset(wt, (ot.V - 1) * 7), ot.y = wt.getUTCFullYear(), ot.m = wt.getUTCMonth(), ot.d = wt.getUTCDate() + (ot.w + 6) % 7) : (wt = zm(Bo(ot.y, 0, 1)), ue = wt.getDay(), wt = ue > 4 || ue === 0 ? Qf.ceil(wt) : Qf(wt), wt = Hl.offset(wt, (ot.V - 1) * 7), ot.y = wt.getFullYear(), ot.m = wt.getMonth(), ot.d = wt.getDate() + (ot.w + 6) % 7);
      } else ("W" in ot || "U" in ot) && ("w" in ot || (ot.w = "u" in ot ? ot.u % 7 : "W" in ot ? 1 : 0), ue = "Z" in ot ? $m(Bo(ot.y, 0, 1)).getUTCDay() : zm(Bo(ot.y, 0, 1)).getDay(), ot.m = 0, ot.d = "W" in ot ? (ot.w + 6) % 7 + ot.W * 7 - (ue + 5) % 7 : ot.w + ot.U * 7 - (ue + 6) % 7);
      return "Z" in ot ? (ot.H += ot.Z / 100 | 0, ot.M += ot.Z % 100, $m(ot)) : zm(ot);
    };
  }
  function R(ct, xt, St, ot) {
    for (var te = 0, wt = xt.length, ue = St.length, oe, ze; te < wt; ) {
      if (ot >= ue) return -1;
      if (oe = xt.charCodeAt(te++), oe === 37) {
        if (oe = xt.charAt(te++), ze = A[oe in EE ? xt.charAt(te++) : oe], !ze || (ot = ze(ct, St, ot)) < 0) return -1;
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
    var ot = b.exec(xt.slice(St));
    return ot ? (ct.w = O.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function U(ct, xt, St) {
    var ot = p.exec(xt.slice(St));
    return ot ? (ct.w = g.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function $(ct, xt, St) {
    var ot = T.exec(xt.slice(St));
    return ot ? (ct.m = w.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
  }
  function K(ct, xt, St) {
    var ot = _.exec(xt.slice(St));
    return ot ? (ct.m = x.get(ot[0].toLowerCase()), St + ot[0].length) : -1;
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
  function k(ct) {
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
  function Ut(ct) {
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
var EE = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, L4 = /^%/, U4 = /[\\^$*+?|[\]().{}]/g;
function Bt(t, e, n) {
  var r = t < 0 ? "-" : "", u = (r ? -t : t) + "", l = u.length;
  return r + (l < n ? new Array(n - l + 1).join(e) + u : u);
}
function k4(t) {
  return t.replace(U4, "\\$&");
}
function Lo(t) {
  return new RegExp("^(?:" + t.map(k4).join("|") + ")", "i");
}
function Uo(t) {
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
function ME(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function jE(t, e, n) {
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
function CE(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Z4(t, e, n) {
  var r = Ee.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function DE(t, e, n) {
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
function PE(t, e) {
  return Bt(t.getDate(), e, 2);
}
function a6(t, e) {
  return Bt(t.getHours(), e, 2);
}
function i6(t, e) {
  return Bt(t.getHours() % 12 || 12, e, 2);
}
function u6(t, e) {
  return Bt(1 + Hl.count(qr(t), t), e, 3);
}
function jC(t, e) {
  return Bt(t.getMilliseconds(), e, 3);
}
function o6(t, e) {
  return jC(t, e) + "000";
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
  return Bt(Hs.count(qr(t) - 1, t), e, 2);
}
function CC(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? vu(t) : vu.ceil(t);
}
function d6(t, e) {
  return t = CC(t), Bt(vu.count(qr(t), t) + (qr(t).getDay() === 4), e, 2);
}
function v6(t) {
  return t.getDay();
}
function p6(t, e) {
  return Bt(Qf.count(qr(t) - 1, t), e, 2);
}
function y6(t, e) {
  return Bt(t.getFullYear() % 100, e, 2);
}
function m6(t, e) {
  return t = CC(t), Bt(t.getFullYear() % 100, e, 2);
}
function g6(t, e) {
  return Bt(t.getFullYear() % 1e4, e, 4);
}
function b6(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? vu(t) : vu.ceil(t), Bt(t.getFullYear() % 1e4, e, 4);
}
function x6(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + Bt(e / 60 | 0, "0", 2) + Bt(e % 60, "0", 2);
}
function NE(t, e) {
  return Bt(t.getUTCDate(), e, 2);
}
function S6(t, e) {
  return Bt(t.getUTCHours(), e, 2);
}
function _6(t, e) {
  return Bt(t.getUTCHours() % 12 || 12, e, 2);
}
function O6(t, e) {
  return Bt(1 + ks.count(zr(t), t), e, 3);
}
function DC(t, e) {
  return Bt(t.getUTCMilliseconds(), e, 3);
}
function A6(t, e) {
  return DC(t, e) + "000";
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
  return Bt(Is.count(zr(t) - 1, t), e, 2);
}
function PC(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? pu(t) : pu.ceil(t);
}
function C6(t, e) {
  return t = PC(t), Bt(pu.count(zr(t), t) + (zr(t).getUTCDay() === 4), e, 2);
}
function D6(t) {
  return t.getUTCDay();
}
function P6(t, e) {
  return Bt(Wf.count(zr(t) - 1, t), e, 2);
}
function N6(t, e) {
  return Bt(t.getUTCFullYear() % 100, e, 2);
}
function R6(t, e) {
  return t = PC(t), Bt(t.getUTCFullYear() % 100, e, 2);
}
function q6(t, e) {
  return Bt(t.getUTCFullYear() % 1e4, e, 4);
}
function z6(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? pu(t) : pu.ceil(t), Bt(t.getUTCFullYear() % 1e4, e, 4);
}
function $6() {
  return "+0000";
}
function RE() {
  return "%";
}
function qE(t) {
  return +t;
}
function zE(t) {
  return Math.floor(+t / 1e3);
}
var Zi, NC, RC;
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
  return Zi = B4(t), NC = Zi.format, Zi.parse, RC = Zi.utcFormat, Zi.utcParse, Zi;
}
function L6(t) {
  return new Date(t);
}
function U6(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function U0(t, e, n, r, u, l, c, s, h, d) {
  var y = T0(), p = y.invert, g = y.domain, b = d(".%L"), O = d(":%S"), _ = d("%I:%M"), x = d("%I %p"), T = d("%a %d"), w = d("%b %d"), M = d("%B"), j = d("%Y");
  function A(E) {
    return (h(E) < E ? b : s(E) < E ? O : c(E) < E ? _ : l(E) < E ? x : r(E) < E ? u(E) < E ? T : w : n(E) < E ? M : j)(E);
  }
  return y.invert = function(E) {
    return new Date(p(E));
  }, y.domain = function(E) {
    return arguments.length ? g(Array.from(E, U6)) : g().map(L6);
  }, y.ticks = function(E) {
    var D = g();
    return t(D[0], D[D.length - 1], E ?? 10);
  }, y.tickFormat = function(E, D) {
    return D == null ? A : d(D);
  }, y.nice = function(E) {
    var D = g();
    return (!E || typeof E.range != "function") && (E = e(D[0], D[D.length - 1], E ?? 10)), E ? g(xC(D, E)) : y;
  }, y.copy = function() {
    return kl(y, U0(t, e, n, r, u, l, c, s, h, d));
  }, y;
}
function k6() {
  return Pn.apply(U0(z4, $4, qr, B0, Hs, Hl, z0, R0, Ka, NC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function H6() {
  return Pn.apply(U0(R4, q4, zr, L0, Is, ks, $0, q0, Ka, RC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Gs() {
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
      var b, O;
      return arguments.length ? ([b, O] = g, c = p(b, O), d) : [c(0), c(1)];
    };
  }
  return d.range = y($u), d.rangeRound = y(w0), d.unknown = function(p) {
    return arguments.length ? (h = p, d) : h;
  }, function(p) {
    return l = p, n = p(t), r = p(e), u = n === r ? 0 : 1 / (r - n), d;
  };
}
function _a(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function qC() {
  var t = Sa(Gs()(Ie));
  return t.copy = function() {
    return _a(t, qC());
  }, Lr.apply(t, arguments);
}
function zC() {
  var t = j0(Gs()).domain([1, 10]);
  return t.copy = function() {
    return _a(t, zC()).base(t.base());
  }, Lr.apply(t, arguments);
}
function $C() {
  var t = C0(Gs());
  return t.copy = function() {
    return _a(t, $C()).constant(t.constant());
  }, Lr.apply(t, arguments);
}
function k0() {
  var t = D0(Gs());
  return t.copy = function() {
    return _a(t, k0()).exponent(t.exponent());
  }, Lr.apply(t, arguments);
}
function I6() {
  return k0.apply(null, arguments).exponent(0.5);
}
function BC() {
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
    return Array.from({ length: r + 1 }, (u, l) => j8(t, l / r));
  }, n.copy = function() {
    return BC(e).domain(t);
  }, Lr.apply(n, arguments);
}
function Ys() {
  var t = 0, e = 0.5, n = 1, r = 1, u, l, c, s, h, d = Ie, y, p = !1, g;
  function b(_) {
    return isNaN(_ = +_) ? g : (_ = 0.5 + ((_ = +y(_)) - l) * (r * _ < r * l ? s : h), d(p ? Math.max(0, Math.min(1, _)) : _));
  }
  b.domain = function(_) {
    return arguments.length ? ([t, e, n] = _, u = y(t = +t), l = y(e = +e), c = y(n = +n), s = u === l ? 0 : 0.5 / (l - u), h = l === c ? 0 : 0.5 / (c - l), r = l < u ? -1 : 1, b) : [t, e, n];
  }, b.clamp = function(_) {
    return arguments.length ? (p = !!_, b) : p;
  }, b.interpolator = function(_) {
    return arguments.length ? (d = _, b) : d;
  };
  function O(_) {
    return function(x) {
      var T, w, M;
      return arguments.length ? ([T, w, M] = x, d = e4(_, [T, w, M]), b) : [d(0), d(0.5), d(1)];
    };
  }
  return b.range = O($u), b.rangeRound = O(w0), b.unknown = function(_) {
    return arguments.length ? (g = _, b) : g;
  }, function(_) {
    return y = _, u = _(t), l = _(e), c = _(n), s = u === l ? 0 : 0.5 / (l - u), h = l === c ? 0 : 0.5 / (c - l), r = l < u ? -1 : 1, b;
  };
}
function LC() {
  var t = Sa(Ys()(Ie));
  return t.copy = function() {
    return _a(t, LC());
  }, Lr.apply(t, arguments);
}
function UC() {
  var t = j0(Ys()).domain([0.1, 1, 10]);
  return t.copy = function() {
    return _a(t, UC()).base(t.base());
  }, Lr.apply(t, arguments);
}
function kC() {
  var t = C0(Ys());
  return t.copy = function() {
    return _a(t, kC()).constant(t.constant());
  }, Lr.apply(t, arguments);
}
function H0() {
  var t = D0(Ys());
  return t.copy = function() {
    return _a(t, H0()).exponent(t.exponent());
  }, Lr.apply(t, arguments);
}
function G6() {
  return H0.apply(null, arguments).exponent(0.5);
}
const $E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: cl,
  scaleDiverging: LC,
  scaleDivergingLog: UC,
  scaleDivergingPow: H0,
  scaleDivergingSqrt: G6,
  scaleDivergingSymlog: kC,
  scaleIdentity: bC,
  scaleImplicit: Jg,
  scaleLinear: Ff,
  scaleLog: SC,
  scaleOrdinal: _0,
  scalePoint: Wo,
  scalePow: P0,
  scaleQuantile: AC,
  scaleQuantize: wC,
  scaleRadial: OC,
  scaleSequential: qC,
  scaleSequentialLog: zC,
  scaleSequentialPow: k0,
  scaleSequentialQuantile: BC,
  scaleSequentialSqrt: I6,
  scaleSequentialSymlog: $C,
  scaleSqrt: A4,
  scaleSymlog: _C,
  scaleThreshold: TC,
  scaleTime: k6,
  scaleUtc: H6,
  tickFormat: gC
}, Symbol.toStringTag, { value: "Module" }));
var Bm, BE;
function HC() {
  if (BE) return Bm;
  BE = 1;
  var t = Pu();
  function e(n, r, u) {
    for (var l = -1, c = n.length; ++l < c; ) {
      var s = n[l], h = r(s);
      if (h != null && (d === void 0 ? h === h && !t(h) : u(h, d)))
        var d = h, y = s;
    }
    return y;
  }
  return Bm = e, Bm;
}
var Lm, LE;
function Y6() {
  if (LE) return Lm;
  LE = 1;
  function t(e, n) {
    return e > n;
  }
  return Lm = t, Lm;
}
var Um, UE;
function X6() {
  if (UE) return Um;
  UE = 1;
  var t = HC(), e = Y6(), n = zu();
  function r(u) {
    return u && u.length ? t(u, n, e) : void 0;
  }
  return Um = r, Um;
}
var K6 = X6();
const ya = /* @__PURE__ */ Qt(K6);
var km, kE;
function V6() {
  if (kE) return km;
  kE = 1;
  function t(e, n) {
    return e < n;
  }
  return km = t, km;
}
var Hm, HE;
function F6() {
  if (HE) return Hm;
  HE = 1;
  var t = HC(), e = V6(), n = zu();
  function r(u) {
    return u && u.length ? t(u, n, e) : void 0;
  }
  return Hm = r, Hm;
}
var Z6 = F6();
const Xs = /* @__PURE__ */ Qt(Z6);
var Im, IE;
function Q6() {
  if (IE) return Im;
  IE = 1;
  var t = r0(), e = xa(), n = Wj(), r = Je();
  function u(l, c) {
    var s = r(l) ? t : n;
    return s(l, e(c, 3));
  }
  return Im = u, Im;
}
var Gm, GE;
function W6() {
  if (GE) return Gm;
  GE = 1;
  var t = Zj(), e = Q6();
  function n(r, u) {
    return t(e(r, u), 1);
  }
  return Gm = n, Gm;
}
var J6 = W6();
const tL = /* @__PURE__ */ Qt(J6);
var Ym, YE;
function eL() {
  if (YE) return Ym;
  YE = 1;
  var t = y0();
  function e(n, r) {
    return t(n, r);
  }
  return Ym = e, Ym;
}
var nL = eL();
const yu = /* @__PURE__ */ Qt(nL);
var Bu = 1e9, rL = {
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
}, G0, ie = !0, Dn = "[DecimalError] ", Qa = Dn + "Invalid argument: ", I0 = Dn + "Exponent out of range: ", Lu = Math.floor, Ga = Math.pow, aL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vn, Te = 1e7, re = 7, IC = 9007199254740991, Jf = Lu(IC / re), ht = {};
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
  return t = new e.constructor(t), e.s == t.s ? XC(e, t) : GC(e, (t.s = -t.s, t));
};
ht.modulo = ht.mod = function(t) {
  var e, n = this, r = n.constructor, u = r.precision;
  if (t = new r(t), !t.s) throw Error(Dn + "NaN");
  return n.s ? (ie = !1, e = Pr(n, t, 0, 1).times(t), ie = !0, n.minus(e)) : Zt(new r(n), u);
};
ht.naturalExponential = ht.exp = function() {
  return YC(this);
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
  return t = new e.constructor(t), e.s == t.s ? GC(e, t) : XC(e, (t.s = -t.s, t));
};
ht.precision = ht.sd = function(t) {
  var e, n, r, u = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(Qa + t);
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
  for (t = ge(s), ie = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (e = Zn(s.d), (e.length + t) % 2 == 0 && (e += "0"), u = Math.sqrt(e), t = Lu((t + 1) / 2) - (t < 0 || t % 2), u == 1 / 0 ? e = "5e" + t : (e = u.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + t), r = new h(e)) : r = new h(u.toString()), n = h.precision, u = c = n + 3; ; )
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
  var e, n, r, u, l, c, s, h, d, y = this, p = y.constructor, g = y.d, b = (t = new p(t)).d;
  if (!y.s || !t.s) return new p(0);
  for (t.s *= y.s, n = y.e + t.e, h = g.length, d = b.length, h < d && (l = g, g = b, b = l, c = h, h = d, d = c), l = [], c = h + d, r = c; r--; ) l.push(0);
  for (r = d; --r >= 0; ) {
    for (e = 0, u = h + r; u > r; )
      s = l[u] + b[r] * g[u - r - 1] + e, l[u--] = s % Te | 0, e = s / Te | 0;
    l[u] = (l[u] + e) % Te | 0;
  }
  for (; !l[--c]; ) l.pop();
  return e ? ++n : l.shift(), t.d = l, t.e = n, ie ? Zt(t, p.precision) : t;
};
ht.toDecimalPlaces = ht.todp = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (er(t, 0, Bu), e === void 0 ? e = r.rounding : er(e, 0, 8), Zt(n, t + ge(n) + 1, e));
};
ht.toExponential = function(t, e) {
  var n, r = this, u = r.constructor;
  return t === void 0 ? n = ei(r, !0) : (er(t, 0, Bu), e === void 0 ? e = u.rounding : er(e, 0, 8), r = Zt(new u(r), t + 1, e), n = ei(r, !0, t + 1)), n;
};
ht.toFixed = function(t, e) {
  var n, r, u = this, l = u.constructor;
  return t === void 0 ? ei(u) : (er(t, 0, Bu), e === void 0 ? e = l.rounding : er(e, 0, 8), r = Zt(new l(u), t + ge(u) + 1, e), n = ei(r.abs(), !1, t + ge(r) + 1), u.isneg() && !u.isZero() ? "-" + n : n);
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
    if ((n = y < 0 ? -y : y) <= IC) {
      for (u = new h(vn), e = Math.ceil(r / re + 4), ie = !1; n % 2 && (u = u.times(s), KE(u.d, e)), n = Lu(n / 2), n !== 0; )
        s = s.times(s), KE(s.d, e);
      return ie = !0, t.s < 0 ? new h(vn).div(u) : Zt(u, r);
    }
  } else if (l < 0) throw Error(Dn + "NaN");
  return l = l < 0 && t.d[Math.max(e, n)] & 1 ? -1 : 1, s.s = 1, ie = !1, u = t.times(vl(s, r + d)), ie = !0, u = YC(u), u.s = l, u;
};
ht.toPrecision = function(t, e) {
  var n, r, u = this, l = u.constructor;
  return t === void 0 ? (n = ge(u), r = ei(u, n <= l.toExpNeg || n >= l.toExpPos)) : (er(t, 1, Bu), e === void 0 ? e = l.rounding : er(e, 0, 8), u = Zt(new l(u), t, e), n = ge(u), r = ei(u, t <= n || n <= l.toExpNeg, t)), r;
};
ht.toSignificantDigits = ht.tosd = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (er(t, 1, Bu), e === void 0 ? e = r.rounding : er(e, 0, 8)), Zt(new r(n), t, e);
};
ht.toString = ht.valueOf = ht.val = ht.toJSON = ht[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var t = this, e = ge(t), n = t.constructor;
  return ei(t, e <= n.toExpNeg || e >= n.toExpPos);
};
function GC(t, e) {
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
    throw Error(Qa + t);
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
    var s, h, d, y, p, g, b, O, _, x, T, w, M, j, A, E, D, R, z = r.constructor, F = r.s == u.s ? 1 : -1, U = r.d, $ = u.d;
    if (!r.s) return new z(r);
    if (!u.s) throw Error(Dn + "Division by zero");
    for (h = r.e - u.e, D = $.length, A = U.length, b = new z(F), O = b.d = [], d = 0; $[d] == (U[d] || 0); ) ++d;
    if ($[d] > (U[d] || 0) && --h, l == null ? w = l = z.precision : c ? w = l + (ge(r) - ge(u)) + 1 : w = l, w < 0) return new z(0);
    if (w = w / re + 2 | 0, d = 0, D == 1)
      for (y = 0, $ = $[0], w++; (d < A || y) && w--; d++)
        M = y * Te + (U[d] || 0), O[d] = M / $ | 0, y = M % $ | 0;
    else {
      for (y = Te / ($[0] + 1) | 0, y > 1 && ($ = t($, y), U = t(U, y), D = $.length, A = U.length), j = D, _ = U.slice(0, D), x = _.length; x < D; ) _[x++] = 0;
      R = $.slice(), R.unshift(0), E = $[0], $[1] >= Te / 2 && ++E;
      do
        y = 0, s = e($, _, D, x), s < 0 ? (T = _[0], D != x && (T = T * Te + (_[1] || 0)), y = T / E | 0, y > 1 ? (y >= Te && (y = Te - 1), p = t($, y), g = p.length, x = _.length, s = e(p, _, g, x), s == 1 && (y--, n(p, D < g ? R : $, g))) : (y == 0 && (s = y = 1), p = $.slice()), g = p.length, g < x && p.unshift(0), n(_, p, x), s == -1 && (x = _.length, s = e($, _, D, x), s < 1 && (y++, n(_, D < x ? R : $, x))), x = _.length) : s === 0 && (y++, _ = [0]), O[d++] = y, s && _[0] ? _[x++] = U[j] || 0 : (_ = [U[j]], x = 1);
      while ((j++ < A || _[0] !== void 0) && w--);
    }
    return O[0] || O.shift(), b.e = h, Zt(b, c ? l + ge(b) + 1 : l);
  };
})();
function YC(t, e) {
  var n, r, u, l, c, s, h = 0, d = 0, y = t.constructor, p = y.precision;
  if (ge(t) > 16) throw Error(I0 + ge(t));
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
function Xm(t, e, n) {
  if (e > t.LN10.sd())
    throw ie = !0, n && (t.precision = n), Error(Dn + "LN10 precision limit exceeded");
  return Zt(new t(t.LN10), e);
}
function va(t) {
  for (var e = ""; t--; ) e += "0";
  return e;
}
function vl(t, e) {
  var n, r, u, l, c, s, h, d, y, p = 1, g = 10, b = t, O = b.d, _ = b.constructor, x = _.precision;
  if (b.s < 1) throw Error(Dn + (b.s ? "NaN" : "-Infinity"));
  if (b.eq(vn)) return new _(0);
  if (e == null ? (ie = !1, d = x) : d = e, b.eq(10))
    return e == null && (ie = !0), Xm(_, d);
  if (d += g, _.precision = d, n = Zn(O), r = n.charAt(0), l = ge(b), Math.abs(l) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      b = b.times(t), n = Zn(b.d), r = n.charAt(0), p++;
    l = ge(b), r > 1 ? (b = new _("0." + n), l++) : b = new _(r + "." + n.slice(1));
  } else
    return h = Xm(_, d + 2, x).times(l + ""), b = vl(new _(r + "." + n.slice(1)), d - g).plus(h), _.precision = x, e == null ? (ie = !0, Zt(b, x)) : b;
  for (s = c = b = Pr(b.minus(vn), b.plus(vn), d), y = Zt(b.times(b), d), u = 3; ; ) {
    if (c = Zt(c.times(y), d), h = s.plus(Pr(c, new _(u), d)), Zn(h.d).slice(0, d) === Zn(s.d).slice(0, d))
      return s = s.times(2), l !== 0 && (s = s.plus(Xm(_, d + 2, x).times(l + ""))), s = Pr(s, new _(p), d), _.precision = x, e == null ? (ie = !0, Zt(s, x)) : s;
    s = h, u += 2;
  }
}
function XE(t, e) {
  var n, r, u;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; ) ++r;
  for (u = e.length; e.charCodeAt(u - 1) === 48; ) --u;
  if (e = e.slice(r, u), e) {
    if (u -= r, n = n - r - 1, t.e = Lu(n / re), t.d = [], r = (n + 1) % re, n < 0 && (r += re), r < u) {
      for (r && t.d.push(+e.slice(0, r)), u -= re; r < u; ) t.d.push(+e.slice(r, r += re));
      e = e.slice(r), r = re - e.length;
    } else
      r -= u;
    for (; r--; ) e += "0";
    if (t.d.push(+e), ie && (t.e > Jf || t.e < -Jf)) throw Error(I0 + n);
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
    return h ? (l = ge(t), p.length = 1, e = e - l - 1, p[0] = Ga(10, (re - e % re) % re), t.e = Lu(-e / re) || 0) : (p.length = 1, p[0] = t.e = t.s = 0), t;
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
  if (ie && (t.e > Jf || t.e < -Jf))
    throw Error(I0 + ge(t));
  return t;
}
function XC(t, e) {
  var n, r, u, l, c, s, h, d, y, p, g = t.constructor, b = g.precision;
  if (!t.s || !e.s)
    return e.s ? e.s = -e.s : e = new g(t), ie ? Zt(e, b) : e;
  if (h = t.d, p = e.d, r = e.e, d = t.e, h = h.slice(), c = d - r, c) {
    for (y = c < 0, y ? (n = h, c = -c, s = p.length) : (n = p, r = d, s = h.length), u = Math.max(Math.ceil(b / re), s) + 2, c > u && (c = u, n.length = 1), n.reverse(), u = c; u--; ) n.push(0);
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
  return h[0] ? (e.d = h, e.e = r, ie ? Zt(e, b) : e) : new g(0);
}
function ei(t, e, n) {
  var r, u = ge(t), l = Zn(t.d), c = l.length;
  return e ? (n && (r = n - c) > 0 ? l = l.charAt(0) + "." + l.slice(1) + va(r) : c > 1 && (l = l.charAt(0) + "." + l.slice(1)), l = l + (u < 0 ? "e" : "e+") + u) : u < 0 ? (l = "0." + va(-u - 1) + l, n && (r = n - c) > 0 && (l += va(r))) : u >= c ? (l += va(u + 1 - c), n && (r = n - u - 1) > 0 && (l = l + "." + va(r))) : ((r = u + 1) < c && (l = l.slice(0, r) + "." + l.slice(r)), n && (r = n - c) > 0 && (u + 1 === c && (l += "."), l += va(r))), t.s < 0 ? "-" + l : l;
}
function KE(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function KC(t) {
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
      return XE(c, l.toString());
    } else if (typeof l != "string")
      throw Error(Qa + l);
    if (l.charCodeAt(0) === 45 ? (l = l.slice(1), c.s = -1) : c.s = 1, aL.test(l)) XE(c, l);
    else throw Error(Qa + l);
  }
  if (u.prototype = ht, u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.clone = KC, u.config = u.set = iL, t === void 0 && (t = {}), t)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], e = 0; e < r.length; ) t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return u.config(t), u;
}
function iL(t) {
  if (!t || typeof t != "object")
    throw Error(Dn + "Object expected");
  var e, n, r, u = [
    "precision",
    1,
    Bu,
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
      if (Lu(r) === r && r >= u[e + 1] && r <= u[e + 2]) this[n] = r;
      else throw Error(Qa + n + ": " + r);
  if ((r = t[n = "LN10"]) !== void 0)
    if (r == Math.LN10) this[n] = new this(r);
    else throw Error(Qa + n + ": " + r);
  return this;
}
var G0 = KC(rL);
vn = new G0(1);
const Vt = G0;
function uL(t) {
  return fL(t) || cL(t) || lL(t) || oL();
}
function oL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lL(t, e) {
  if (t) {
    if (typeof t == "string") return rb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rb(t, e);
  }
}
function cL(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function fL(t) {
  if (Array.isArray(t)) return rb(t);
}
function rb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
var sL = function(e) {
  return e;
}, VC = {}, FC = function(e) {
  return e === VC;
}, VE = function(e) {
  return function n() {
    return arguments.length === 0 || arguments.length === 1 && FC(arguments.length <= 0 ? void 0 : arguments[0]) ? n : e.apply(void 0, arguments);
  };
}, hL = function t(e, n) {
  return e === 1 ? n : VE(function() {
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    var c = u.filter(function(s) {
      return s !== VC;
    }).length;
    return c >= e ? n.apply(void 0, u) : t(e - c, VE(function() {
      for (var s = arguments.length, h = new Array(s), d = 0; d < s; d++)
        h[d] = arguments[d];
      var y = u.map(function(p) {
        return FC(p) ? h.shift() : p;
      });
      return n.apply(void 0, uL(y).concat(h));
    }));
  });
}, Ks = function(e) {
  return hL(e.length, e);
}, ab = function(e, n) {
  for (var r = [], u = e; u < n; ++u)
    r[u - e] = u;
  return r;
}, dL = Ks(function(t, e) {
  return Array.isArray(e) ? e.map(t) : Object.keys(e).map(function(n) {
    return e[n];
  }).map(t);
}), vL = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  if (!n.length)
    return sL;
  var u = n.reverse(), l = u[0], c = u.slice(1);
  return function() {
    return c.reduce(function(s, h) {
      return h(s);
    }, l.apply(void 0, arguments));
  };
}, ib = function(e) {
  return Array.isArray(e) ? e.reverse() : e.split("").reverse.join("");
}, ZC = function(e) {
  var n = null, r = null;
  return function() {
    for (var u = arguments.length, l = new Array(u), c = 0; c < u; c++)
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
  for (var r = new Vt(t), u = 0, l = []; r.lt(e) && u < 1e5; )
    l.push(r.toNumber()), r = r.add(n), u++;
  return l;
}
var mL = Ks(function(t, e, n) {
  var r = +t, u = +e;
  return r + n * (u - r);
}), gL = Ks(function(t, e, n) {
  var r = e - +t;
  return r = r || 1 / 0, (n - t) / r;
}), bL = Ks(function(t, e, n) {
  var r = e - +t;
  return r = r || 1 / 0, Math.max(0, Math.min(1, (n - t) / r));
});
const Vs = {
  rangeStep: yL,
  getDigitCount: pL,
  interpolateNumber: mL,
  uninterpolateNumber: gL,
  uninterpolateTruncation: bL
};
function ub(t) {
  return _L(t) || SL(t) || QC(t) || xL();
}
function xL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SL(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function _L(t) {
  if (Array.isArray(t)) return ob(t);
}
function pl(t, e) {
  return wL(t) || AL(t, e) || QC(t, e) || OL();
}
function OL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QC(t, e) {
  if (t) {
    if (typeof t == "string") return ob(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ob(t, e);
  }
}
function ob(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function AL(t, e) {
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
function wL(t) {
  if (Array.isArray(t)) return t;
}
function WC(t) {
  var e = pl(t, 2), n = e[0], r = e[1], u = n, l = r;
  return n > r && (u = r, l = n), [u, l];
}
function JC(t, e, n) {
  if (t.lte(0))
    return new Vt(0);
  var r = Vs.getDigitCount(t.toNumber()), u = new Vt(10).pow(r), l = t.div(u), c = r !== 1 ? 0.05 : 0.1, s = new Vt(Math.ceil(l.div(c).toNumber())).add(n).mul(c), h = s.mul(u);
  return e ? h : new Vt(Math.ceil(h));
}
function TL(t, e, n) {
  var r = 1, u = new Vt(t);
  if (!u.isint() && n) {
    var l = Math.abs(t);
    l < 1 ? (r = new Vt(10).pow(Vs.getDigitCount(t) - 1), u = new Vt(Math.floor(u.div(r).toNumber())).mul(r)) : l > 1 && (u = new Vt(Math.floor(t)));
  } else t === 0 ? u = new Vt(Math.floor((e - 1) / 2)) : n || (u = new Vt(Math.floor(t)));
  var c = Math.floor((e - 1) / 2), s = vL(dL(function(h) {
    return u.add(new Vt(h - c).mul(r)).toNumber();
  }), ab);
  return s(0, e);
}
function tD(t, e, n, r) {
  var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((e - t) / (n - 1)))
    return {
      step: new Vt(0),
      tickMin: new Vt(0),
      tickMax: new Vt(0)
    };
  var l = JC(new Vt(e).sub(t).div(n - 1), r, u), c;
  t <= 0 && e >= 0 ? c = new Vt(0) : (c = new Vt(t).add(e).div(2), c = c.sub(new Vt(c).mod(l)));
  var s = Math.ceil(c.sub(t).div(l).toNumber()), h = Math.ceil(new Vt(e).sub(c).div(l).toNumber()), d = s + h + 1;
  return d > n ? tD(t, e, n, r, u + 1) : (d < n && (h = e > 0 ? h + (n - d) : h, s = e > 0 ? s : s + (n - d)), {
    step: l,
    tickMin: c.sub(new Vt(s).mul(l)),
    tickMax: c.add(new Vt(h).mul(l))
  });
}
function EL(t) {
  var e = pl(t, 2), n = e[0], r = e[1], u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = Math.max(u, 2), s = WC([n, r]), h = pl(s, 2), d = h[0], y = h[1];
  if (d === -1 / 0 || y === 1 / 0) {
    var p = y === 1 / 0 ? [d].concat(ub(ab(0, u - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ub(ab(0, u - 1).map(function() {
      return -1 / 0;
    })), [y]);
    return n > r ? ib(p) : p;
  }
  if (d === y)
    return TL(d, u, l);
  var g = tD(d, y, c, l), b = g.step, O = g.tickMin, _ = g.tickMax, x = Vs.rangeStep(O, _.add(new Vt(0.1).mul(b)), b);
  return n > r ? ib(x) : x;
}
function ML(t, e) {
  var n = pl(t, 2), r = n[0], u = n[1], l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, c = WC([r, u]), s = pl(c, 2), h = s[0], d = s[1];
  if (h === -1 / 0 || d === 1 / 0)
    return [r, u];
  if (h === d)
    return [h];
  var y = Math.max(e, 2), p = JC(new Vt(d).sub(h).div(y - 1), l, 0), g = [].concat(ub(Vs.rangeStep(new Vt(h), new Vt(d).sub(new Vt(0.99).mul(p)), p)), [d]);
  return r > u ? ib(g) : g;
}
var jL = ZC(EL), CL = ZC(ML), DL = "Invariant failed";
function ni(t, e) {
  throw new Error(DL);
}
var PL = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function mu(t) {
  "@babel/helpers - typeof";
  return mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mu(t);
}
function ts() {
  return ts = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ts.apply(this, arguments);
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
    if (typeof t == "string") return FE(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FE(t, e);
  }
}
function FE(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function zL(t, e) {
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
function $L(t) {
  if (Array.isArray(t)) return t;
}
function BL(t, e) {
  if (t == null) return {};
  var n = LL(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function UL(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function kL(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, rD(r.key), r);
  }
}
function HL(t, e, n) {
  return e && kL(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function IL(t, e, n) {
  return e = es(e), GL(t, eD() ? Reflect.construct(e, n || [], es(t).constructor) : e.apply(t, n));
}
function GL(t, e) {
  if (e && (mu(e) === "object" || typeof e == "function"))
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
function eD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eD = function() {
    return !!t;
  })();
}
function es(t) {
  return es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, es(t);
}
function XL(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && lb(t, e);
}
function lb(t, e) {
  return lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, lb(t, e);
}
function nD(t, e, n) {
  return e = rD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function rD(t) {
  var e = KL(t, "string");
  return mu(e) == "symbol" ? e : e + "";
}
function KL(t, e) {
  if (mu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (mu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Il = /* @__PURE__ */ (function(t) {
  function e() {
    return UL(this, e), IL(this, e, arguments);
  }
  return XL(e, t), HL(e, [{
    key: "render",
    value: function() {
      var r = this.props, u = r.offset, l = r.layout, c = r.width, s = r.dataKey, h = r.data, d = r.dataPointFormatter, y = r.xAxis, p = r.yAxis, g = BL(r, PL), b = Et(g, !1);
      this.props.direction === "x" && y.type !== "number" && ni();
      var O = h.map(function(_) {
        var x = d(_, s), T = x.x, w = x.y, M = x.value, j = x.errorVal;
        if (!j)
          return null;
        var A = [], E, D;
        if (Array.isArray(j)) {
          var R = NL(j, 2);
          E = R[0], D = R[1];
        } else
          E = D = j;
        if (l === "vertical") {
          var z = y.scale, F = w + u, U = F + c, $ = F - c, K = z(M - E), Z = z(M + D);
          A.push({
            x1: Z,
            y1: U,
            x2: Z,
            y2: $
          }), A.push({
            x1: K,
            y1: F,
            x2: Z,
            y2: F
          }), A.push({
            x1: K,
            y1: U,
            x2: K,
            y2: $
          });
        } else if (l === "horizontal") {
          var V = p.scale, N = T + u, I = N - c, W = N + c, ut = V(M - E), lt = V(M + D);
          A.push({
            x1: I,
            y1: lt,
            x2: W,
            y2: lt
          }), A.push({
            x1: N,
            y1: ut,
            x2: N,
            y2: lt
          }), A.push({
            x1: I,
            y1: ut,
            x2: W,
            y2: ut
          });
        }
        return /* @__PURE__ */ B.createElement(Jt, ts({
          className: "recharts-errorBar",
          key: "bar-".concat(A.map(function(P) {
            return "".concat(P.x1, "-").concat(P.x2, "-").concat(P.y1, "-").concat(P.y2);
          }))
        }, b), A.map(function(P) {
          return /* @__PURE__ */ B.createElement("line", ts({}, P, {
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
nD(Il, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
nD(Il, "displayName", "ErrorBar");
function yl(t) {
  "@babel/helpers - typeof";
  return yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yl(t);
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
function Ha(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ZE(Object(n), !0).forEach(function(r) {
      VL(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ZE(Object(n)).forEach(function(r) {
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
  return yl(e) == "symbol" ? e : e + "";
}
function ZL(t, e) {
  if (yl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (yl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var aD = function(e) {
  var n = e.children, r = e.formattedGraphicalItems, u = e.legendWidth, l = e.legendContent, c = hn(n, ru);
  if (!c)
    return null;
  var s = ru.defaultProps, h = s !== void 0 ? Ha(Ha({}, s), c.props) : {}, d;
  return c.props && c.props.payload ? d = c.props && c.props.payload : l === "children" ? d = (r || []).reduce(function(y, p) {
    var g = p.item, b = p.props, O = b.sectors || b.data || [];
    return y.concat(O.map(function(_) {
      return {
        type: c.props.iconType || g.props.legendType,
        value: _.name,
        color: _.fill,
        payload: _
      };
    }));
  }, []) : d = (r || []).map(function(y) {
    var p = y.item, g = p.type.defaultProps, b = g !== void 0 ? Ha(Ha({}, g), p.props) : {}, O = b.dataKey, _ = b.name, x = b.legendType, T = b.hide;
    return {
      inactive: T,
      dataKey: O,
      type: h.iconType || x || "square",
      color: Y0(p),
      value: _ || O,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: b
    };
  }), Ha(Ha(Ha({}, h), ru.getWithHeight(c, u)), {}, {
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
function QE(t) {
  return t5(t) || JL(t) || WL(t) || QL();
}
function QL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WL(t, e) {
  if (t) {
    if (typeof t == "string") return cb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cb(t, e);
  }
}
function JL(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function t5(t) {
  if (Array.isArray(t)) return cb(t);
}
function cb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function WE(t, e) {
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
    e % 2 ? WE(Object(n), !0).forEach(function(r) {
      iu(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : WE(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function iu(t, e, n) {
  return e = e5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function e5(t) {
  var e = n5(t, "string");
  return ml(e) == "symbol" ? e : e + "";
}
function n5(t, e) {
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
  var u = tL(t, function(s) {
    return Ge(s, e);
  });
  if (n === "number") {
    var l = u.filter(function(s) {
      return st(s) || parseFloat(s);
    });
    return l.length ? [Xs(l), ya(l)] : [1 / 0, -1 / 0];
  }
  var c = r ? u.filter(function(s) {
    return !Mt(s);
  }) : u;
  return c.map(function(s) {
    return _e(s) || s instanceof Date ? s : "";
  });
}
var r5 = function(e) {
  var n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, c = -1, s = (n = r == null ? void 0 : r.length) !== null && n !== void 0 ? n : 0;
  if (s <= 1)
    return 0;
  if (l && l.axisType === "angleAxis" && Math.abs(Math.abs(l.range[1] - l.range[0]) - 360) <= 1e-6)
    for (var h = l.range, d = 0; d < s; d++) {
      var y = d > 0 ? u[d - 1].coordinate : u[s - 1].coordinate, p = u[d].coordinate, g = d >= s - 1 ? u[0].coordinate : u[d + 1].coordinate, b = void 0;
      if (Hn(p - y) !== Hn(g - p)) {
        var O = [];
        if (Hn(g - p) === Hn(h[1] - h[0])) {
          b = g;
          var _ = p + h[1] - h[0];
          O[0] = Math.min(_, (_ + y) / 2), O[1] = Math.max(_, (_ + y) / 2);
        } else {
          b = y;
          var x = g + h[1] - h[0];
          O[0] = Math.min(p, (x + p) / 2), O[1] = Math.max(p, (x + p) / 2);
        }
        var T = [Math.min(p, (b + p) / 2), Math.max(p, (b + p) / 2)];
        if (e > T[0] && e <= T[1] || e >= O[0] && e <= O[1]) {
          c = u[d].index;
          break;
        }
      } else {
        var w = Math.min(y, g), M = Math.max(y, g);
        if (e > (w + p) / 2 && e <= (M + p) / 2) {
          c = u[d].index;
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
}, Y0 = function(e) {
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
}, a5 = function(e) {
  var n = e.barSize, r = e.totalSize, u = e.stackGroups, l = u === void 0 ? {} : u;
  if (!l)
    return {};
  for (var c = {}, s = Object.keys(l), h = 0, d = s.length; h < d; h++)
    for (var y = l[s[h]].stackGroups, p = Object.keys(y), g = 0, b = p.length; g < b; g++) {
      var O = y[p[g]], _ = O.items, x = O.cateAxisId, T = _.filter(function(D) {
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
  var n = e.barGap, r = e.barCategoryGap, u = e.bandSize, l = e.sizeList, c = l === void 0 ? [] : l, s = e.maxBarSize, h = c.length;
  if (h < 1) return null;
  var d = ti(n, u, 0, !0), y, p = [];
  if (c[0].barSize === +c[0].barSize) {
    var g = !1, b = u / h, O = c.reduce(function(j, A) {
      return j + A.barSize || 0;
    }, 0);
    O += (h - 1) * d, O >= u && (O -= (h - 1) * d, d = 0), O >= u && b > 0 && (g = !0, b *= 0.9, O = h * b);
    var _ = (u - O) / 2 >> 0, x = {
      offset: _ - d,
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
      }, D = [].concat(QE(j), [E]);
      return x = D[D.length - 1].position, A.stackList && A.stackList.length && A.stackList.forEach(function(R) {
        D.push({
          item: R,
          position: x
        });
      }), D;
    }, p);
  } else {
    var T = ti(r, u, 0, !0);
    u - 2 * T - (h - 1) * d <= 0 && (d = 0);
    var w = (u - 2 * T - (h - 1) * d) / h;
    w > 1 && (w >>= 0);
    var M = s === +s ? Math.min(w, s) : w;
    y = c.reduce(function(j, A, E) {
      var D = [].concat(QE(j), [{
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
}, u5 = function(e, n, r, u) {
  var l = r.children, c = r.width, s = r.margin, h = c - (s.left || 0) - (s.right || 0), d = aD({
    children: l,
    legendWidth: h
  });
  if (d) {
    var y = u || {}, p = y.width, g = y.height, b = d.align, O = d.verticalAlign, _ = d.layout;
    if ((_ === "vertical" || _ === "horizontal" && O === "middle") && b !== "center" && st(e[b]))
      return fe(fe({}, e), {}, iu({}, b, e[b] + (p || 0)));
    if ((_ === "horizontal" || _ === "vertical" && b === "center") && O !== "middle" && st(e[O]))
      return fe(fe({}, e), {}, iu({}, O, e[O] + (g || 0)));
  }
  return e;
}, o5 = function(e, n, r) {
  return Mt(n) ? !0 : e === "horizontal" ? n === "yAxis" : e === "vertical" || r === "x" ? n === "xAxis" : r === "y" ? n === "yAxis" : !0;
}, iD = function(e, n, r, u, l) {
  var c = n.props.children, s = Cn(c, Il).filter(function(d) {
    return o5(u, l, d.props.direction);
  });
  if (s && s.length) {
    var h = s.map(function(d) {
      return d.props.dataKey;
    });
    return e.reduce(function(d, y) {
      var p = Ge(y, r);
      if (Mt(p)) return d;
      var g = Array.isArray(p) ? [Xs(p), ya(p)] : [p, p], b = h.reduce(function(O, _) {
        var x = Ge(y, _, 0), T = g[0] - Math.abs(Array.isArray(x) ? x[0] : x), w = g[1] + Math.abs(Array.isArray(x) ? x[1] : x);
        return [Math.min(T, O[0]), Math.max(w, O[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(b[0], d[0]), Math.max(b[1], d[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, l5 = function(e, n, r, u, l) {
  var c = n.map(function(s) {
    return iD(e, s, r, l, u);
  }).filter(function(s) {
    return !Mt(s);
  });
  return c && c.length ? c.reduce(function(s, h) {
    return [Math.min(s[0], h[0]), Math.max(s[1], h[1])];
  }, [1 / 0, -1 / 0]) : null;
}, uD = function(e, n, r, u, l) {
  var c = n.map(function(h) {
    var d = h.props.dataKey;
    return r === "number" && d && iD(e, h, d, u) || Jo(e, d, r, l);
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
}, oD = function(e, n) {
  return e === "horizontal" && n === "xAxis" || e === "vertical" && n === "yAxis" || e === "centric" && n === "angleAxis" || e === "radial" && n === "radiusAxis";
}, lD = function(e, n, r, u) {
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
      return !Ru(p.coordinate);
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
}, Km = /* @__PURE__ */ new WeakMap(), gf = function(e, n) {
  if (typeof n != "function")
    return e;
  Km.has(e) || Km.set(e, /* @__PURE__ */ new WeakMap());
  var r = Km.get(e);
  if (r.has(n))
    return r.get(n);
  var u = function() {
    e.apply(void 0, arguments), n.apply(void 0, arguments);
  };
  return r.set(n, u), u;
}, c5 = function(e, n, r) {
  var u = e.scale, l = e.type, c = e.layout, s = e.axisType;
  if (u === "auto")
    return c === "radial" && s === "radiusAxis" ? {
      scale: cl(),
      realScaleType: "band"
    } : c === "radial" && s === "angleAxis" ? {
      scale: Ff(),
      realScaleType: "linear"
    } : l === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? {
      scale: Wo(),
      realScaleType: "point"
    } : l === "category" ? {
      scale: cl(),
      realScaleType: "band"
    } : {
      scale: Ff(),
      realScaleType: "linear"
    };
  if (Ja(u)) {
    var h = "scale".concat(Ns(u));
    return {
      scale: ($E[h] || Wo)(),
      realScaleType: $E[h] ? h : "point"
    };
  }
  return At(u) ? {
    scale: u
  } : {
    scale: Wo(),
    realScaleType: "point"
  };
}, JE = 1e-4, f5 = function(e) {
  var n = e.domain();
  if (!(!n || n.length <= 2)) {
    var r = n.length, u = e.range(), l = Math.min(u[0], u[1]) - JE, c = Math.max(u[0], u[1]) + JE, s = e(n[0]), h = e(n[r - 1]);
    (s < l || s > c || h < l || h > c) && e.domain([n[0], n[r - 1]]);
  }
}, s5 = function(e, n) {
  if (!e)
    return null;
  for (var r = 0, u = e.length; r < u; r++)
    if (e[r].item === n)
      return e[r].position;
  return null;
}, h5 = function(e, n) {
  if (!n || n.length !== 2 || !st(n[0]) || !st(n[1]))
    return e;
  var r = Math.min(n[0], n[1]), u = Math.max(n[0], n[1]), l = [e[0], e[1]];
  return (!st(e[0]) || e[0] < r) && (l[0] = r), (!st(e[1]) || e[1] > u) && (l[1] = u), l[0] > u && (l[0] = u), l[1] < r && (l[1] = r), l;
}, d5 = function(e) {
  var n = e.length;
  if (!(n <= 0))
    for (var r = 0, u = e[0].length; r < u; ++r)
      for (var l = 0, c = 0, s = 0; s < n; ++s) {
        var h = Ru(e[s][r][1]) ? e[s][r][0] : e[s][r][1];
        h >= 0 ? (e[s][r][0] = l, e[s][r][1] = l + h, l = e[s][r][1]) : (e[s][r][0] = c, e[s][r][1] = c + h, c = e[s][r][1]);
      }
}, v5 = function(e) {
  var n = e.length;
  if (!(n <= 0))
    for (var r = 0, u = e[0].length; r < u; ++r)
      for (var l = 0, c = 0; c < n; ++c) {
        var s = Ru(e[c][r][1]) ? e[c][r][0] : e[c][r][1];
        s >= 0 ? (e[c][r][0] = l, e[c][r][1] = l + s, l = e[c][r][1]) : (e[c][r][0] = 0, e[c][r][1] = 0);
      }
}, p5 = {
  sign: d5,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Wq,
  // @ts-expect-error definitelytyped types are incorrect
  none: lu,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Jq,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: tz,
  positive: v5
}, y5 = function(e, n, r) {
  var u = n.map(function(s) {
    return s.props.dataKey;
  }), l = p5[r], c = Qq().keys(u).value(function(s, h) {
    return +Ge(s, h, 0);
  }).order(Lg).offset(l);
  return c(e);
}, m5 = function(e, n, r, u, l, c) {
  if (!e)
    return null;
  var s = c ? n.reverse() : n, h = {}, d = s.reduce(function(p, g) {
    var b, O = (b = g.type) !== null && b !== void 0 && b.defaultProps ? fe(fe({}, g.type.defaultProps), g.props) : g.props, _ = O.stackId, x = O.hide;
    if (x)
      return p;
    var T = O[r], w = p[T] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (_e(_)) {
      var M = w.stackGroups[_] || {
        numericAxisId: r,
        cateAxisId: u,
        items: []
      };
      M.items.push(g), w.hasStack = !0, w.stackGroups[_] = M;
    } else
      w.stackGroups[qu("_stackId_")] = {
        numericAxisId: r,
        cateAxisId: u,
        items: [g]
      };
    return fe(fe({}, p), {}, iu({}, T, w));
  }, h), y = {};
  return Object.keys(d).reduce(function(p, g) {
    var b = d[g];
    if (b.hasStack) {
      var O = {};
      b.stackGroups = Object.keys(b.stackGroups).reduce(function(_, x) {
        var T = b.stackGroups[x];
        return fe(fe({}, _), {}, iu({}, x, {
          numericAxisId: r,
          cateAxisId: u,
          items: T.items,
          stackedData: y5(e, T.items, l)
        }));
      }, O);
    }
    return fe(fe({}, p), {}, iu({}, g, b));
  }, y);
}, g5 = function(e, n) {
  var r = n.realScaleType, u = n.type, l = n.tickCount, c = n.originalDomain, s = n.allowDecimals, h = r || n.scale;
  if (h !== "auto" && h !== "linear")
    return null;
  if (l && u === "number" && c && (c[0] === "auto" || c[1] === "auto")) {
    var d = e.domain();
    if (!d.length)
      return null;
    var y = jL(d, l, s);
    return e.domain([Xs(y), ya(y)]), {
      niceTicks: y
    };
  }
  if (l && u === "number") {
    var p = e.domain(), g = CL(p, l, s);
    return {
      niceTicks: g
    };
  }
  return null;
};
function ns(t) {
  var e = t.axis, n = t.ticks, r = t.bandSize, u = t.entry, l = t.index, c = t.dataKey;
  if (e.type === "category") {
    if (!e.allowDuplicatedCategory && e.dataKey && !Mt(u[e.dataKey])) {
      var s = Mf(n, "value", u[e.dataKey]);
      if (s)
        return s.coordinate + r / 2;
    }
    return n[l] ? n[l].coordinate + r / 2 : null;
  }
  var h = Ge(u, Mt(c) ? e.dataKey : c);
  return Mt(h) ? null : e.scale(h);
}
var t2 = function(e) {
  var n = e.axis, r = e.ticks, u = e.offset, l = e.bandSize, c = e.entry, s = e.index;
  if (n.type === "category")
    return r[s] ? r[s].coordinate + u : null;
  var h = Ge(c, n.dataKey, n.domain[s]);
  return Mt(h) ? null : n.scale(h) - l / 2 + u;
}, b5 = function(e) {
  var n = e.numericAxis, r = n.scale.domain();
  if (n.type === "number") {
    var u = Math.min(r[0], r[1]), l = Math.max(r[0], r[1]);
    return u <= 0 && l >= 0 ? 0 : l < 0 ? l : u;
  }
  return r[0];
}, x5 = function(e, n) {
  var r, u = (r = e.type) !== null && r !== void 0 && r.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, l = u.stackId;
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
    return [Xs(r.concat([n[0]]).filter(st)), ya(r.concat([n[1]]).filter(st))];
  }, [1 / 0, -1 / 0]);
}, cD = function(e, n, r) {
  return Object.keys(e).reduce(function(u, l) {
    var c = e[l], s = c.stackedData, h = s.reduce(function(d, y) {
      var p = S5(y.slice(n, r + 1));
      return [Math.min(d[0], p[0]), Math.max(d[1], p[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(h[0], u[0]), Math.max(h[1], u[1])];
  }, [1 / 0, -1 / 0]).map(function(u) {
    return u === 1 / 0 || u === -1 / 0 ? 0 : u;
  });
}, e2 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, n2 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, fb = function(e, n, r) {
  if (At(e))
    return e(n, r);
  if (!Array.isArray(e))
    return n;
  var u = [];
  if (st(e[0]))
    u[0] = r ? e[0] : Math.min(e[0], n[0]);
  else if (e2.test(e[0])) {
    var l = +e2.exec(e[0])[1];
    u[0] = n[0] - l;
  } else At(e[0]) ? u[0] = e[0](n[0]) : u[0] = n[0];
  if (st(e[1]))
    u[1] = r ? e[1] : Math.max(e[1], n[1]);
  else if (n2.test(e[1])) {
    var c = +n2.exec(e[1])[1];
    u[1] = n[1] + c;
  } else At(e[1]) ? u[1] = e[1](n[1]) : u[1] = n[1];
  return u;
}, rs = function(e, n, r) {
  if (e && e.scale && e.scale.bandwidth) {
    var u = e.scale.bandwidth();
    if (!r || u > 0)
      return u;
  }
  if (e && n && n.length >= 2) {
    for (var l = g0(n, function(p) {
      return p.coordinate;
    }), c = 1 / 0, s = 1, h = l.length; s < h; s++) {
      var d = l[s], y = l[s - 1];
      c = Math.min((d.coordinate || 0) - (y.coordinate || 0), c);
    }
    return c === 1 / 0 ? 0 : c;
  }
  return r ? void 0 : 0;
}, r2 = function(e, n, r) {
  return !e || !e.length || yu(e, jn(r, "type.defaultProps.domain")) ? n : e;
}, fD = function(e, n) {
  var r = e.type.defaultProps ? fe(fe({}, e.type.defaultProps), e.props) : e.props, u = r.dataKey, l = r.name, c = r.unit, s = r.formatter, h = r.tooltipType, d = r.chartType, y = r.hide;
  return fe(fe({}, Et(e, !1)), {}, {
    dataKey: u,
    unit: c,
    formatter: s,
    name: l || u,
    color: Y0(e),
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
function a2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function i2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? a2(Object(n), !0).forEach(function(r) {
      _5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a2(Object(n)).forEach(function(r) {
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
  return gl(e) == "symbol" ? e : e + "";
}
function A5(t, e) {
  if (gl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (gl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var as = Math.PI / 180, w5 = function(e) {
  return e * 180 / Math.PI;
}, qe = function(e, n, r, u) {
  return {
    x: e + Math.cos(-as * u) * r,
    y: n + Math.sin(-as * u) * r
  };
}, T5 = function(e, n) {
  var r = e.x, u = e.y, l = n.x, c = n.y;
  return Math.sqrt(Math.pow(r - l, 2) + Math.pow(u - c, 2));
}, E5 = function(e, n) {
  var r = e.x, u = e.y, l = n.cx, c = n.cy, s = T5({
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
    angle: w5(d),
    angleInRadian: d
  };
}, M5 = function(e) {
  var n = e.startAngle, r = e.endAngle, u = Math.floor(n / 360), l = Math.floor(r / 360), c = Math.min(u, l);
  return {
    startAngle: n - c * 360,
    endAngle: r - c * 360
  };
}, j5 = function(e, n) {
  var r = n.startAngle, u = n.endAngle, l = Math.floor(r / 360), c = Math.floor(u / 360), s = Math.min(l, c);
  return e + s * 360;
}, u2 = function(e, n) {
  var r = e.x, u = e.y, l = E5({
    x: r,
    y: u
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
  return O ? i2(i2({}, n), {}, {
    radius: c,
    angle: j5(b, n)
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
    if (typeof t == "string") return sb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sb(t, e);
  }
}
function R5(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function q5(t) {
  if (Array.isArray(t)) return sb(t);
}
function sb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function z5(t, e) {
  if (t == null) return {};
  var n = $5(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function Se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? o2(Object(n), !0).forEach(function(r) {
      B5(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function B5(t, e, n) {
  return e = L5(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function L5(t) {
  var e = U5(t, "string");
  return bl(e) == "symbol" ? e : e + "";
}
function U5(t, e) {
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
var k5 = function(e) {
  var n = e.value, r = e.formatter, u = Mt(e.children) ? n : e.children;
  return At(r) ? r(u) : u;
}, H5 = function(e, n) {
  var r = Hn(n - e), u = Math.min(Math.abs(n - e), 360);
  return r * u;
}, I5 = function(e, n, r) {
  var u = e.position, l = e.viewBox, c = e.offset, s = e.className, h = l, d = h.cx, y = h.cy, p = h.innerRadius, g = h.outerRadius, b = h.startAngle, O = h.endAngle, _ = h.clockWise, x = (p + g) / 2, T = H5(b, O), w = T >= 0 ? 1 : -1, M, j;
  u === "insideStart" ? (M = b + w * c, j = _) : u === "insideEnd" ? (M = O - w * c, j = !_) : u === "end" && (M = O + w * c, j = _), j = T <= 0 ? j : !j;
  var A = qe(d, y, x, M), E = qe(d, y, x, M + (j ? 1 : -1) * 359), D = "M".concat(A.x, ",").concat(A.y, `
    A`).concat(x, ",").concat(x, ",0,1,").concat(j ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), R = Mt(e.id) ? qu("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ B.createElement("text", xl({}, r, {
    dominantBaseline: "central",
    className: qt("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("path", {
    id: R,
    d: D
  })), /* @__PURE__ */ B.createElement("textPath", {
    xlinkHref: "#".concat(R)
  }, n));
}, G5 = function(e) {
  var n = e.viewBox, r = e.offset, u = e.position, l = n, c = l.cx, s = l.cy, h = l.innerRadius, d = l.outerRadius, y = l.startAngle, p = l.endAngle, g = (y + p) / 2;
  if (u === "outside") {
    var b = qe(c, s, d + r, g), O = b.x, _ = b.y;
    return {
      x: O,
      y: _,
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
  var x = (h + d) / 2, T = qe(c, s, x, g), w = T.x, M = T.y;
  return {
    x: w,
    y: M,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Y5 = function(e) {
  var n = e.viewBox, r = e.parentViewBox, u = e.offset, l = e.position, c = n, s = c.x, h = c.y, d = c.width, y = c.height, p = y >= 0 ? 1 : -1, g = p * u, b = p > 0 ? "end" : "start", O = p > 0 ? "start" : "end", _ = d >= 0 ? 1 : -1, x = _ * u, T = _ > 0 ? "end" : "start", w = _ > 0 ? "start" : "end";
  if (l === "top") {
    var M = {
      x: s + d / 2,
      y: h - p * u,
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
  }, D) : Nu(l) && (st(l.x) || Ya(l.x)) && (st(l.y) || Ya(l.y)) ? Se({
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
function Ue(t) {
  var e = t.offset, n = e === void 0 ? 5 : e, r = z5(t, C5), u = Se({
    offset: n
  }, r), l = u.viewBox, c = u.position, s = u.value, h = u.children, d = u.content, y = u.className, p = y === void 0 ? "" : y, g = u.textBreakAll;
  if (!l || Mt(s) && Mt(h) && !/* @__PURE__ */ rt.isValidElement(d) && !At(d))
    return null;
  if (/* @__PURE__ */ rt.isValidElement(d))
    return /* @__PURE__ */ rt.cloneElement(d, u);
  var b;
  if (At(d)) {
    if (b = /* @__PURE__ */ rt.createElement(d, u), /* @__PURE__ */ rt.isValidElement(b))
      return b;
  } else
    b = k5(u);
  var O = X5(l), _ = Et(u, !0);
  if (O && (c === "insideStart" || c === "insideEnd" || c === "end"))
    return I5(u, b, _);
  var x = O ? G5(u) : Y5(u);
  return /* @__PURE__ */ B.createElement(kf, xl({
    className: qt("recharts-label", p)
  }, _, x, {
    breakAll: g
  }), b);
}
Ue.displayName = "Label";
var sD = function(e) {
  var n = e.cx, r = e.cy, u = e.angle, l = e.startAngle, c = e.endAngle, s = e.r, h = e.radius, d = e.innerRadius, y = e.outerRadius, p = e.x, g = e.y, b = e.top, O = e.left, _ = e.width, x = e.height, T = e.clockWise, w = e.labelViewBox;
  if (w)
    return w;
  if (st(_) && st(x)) {
    if (st(p) && st(g))
      return {
        x: p,
        y: g,
        width: _,
        height: x
      };
    if (st(b) && st(O))
      return {
        x: b,
        y: O,
        width: _,
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
    startAngle: l || u || 0,
    endAngle: c || u || 0,
    innerRadius: d || 0,
    outerRadius: y || h || s || 0,
    clockWise: T
  } : e.viewBox ? e.viewBox : {};
}, K5 = function(e, n) {
  return e ? e === !0 ? /* @__PURE__ */ B.createElement(Ue, {
    key: "label-implicit",
    viewBox: n
  }) : _e(e) ? /* @__PURE__ */ B.createElement(Ue, {
    key: "label-implicit",
    viewBox: n,
    value: e
  }) : /* @__PURE__ */ rt.isValidElement(e) ? e.type === Ue ? /* @__PURE__ */ rt.cloneElement(e, {
    key: "label-implicit",
    viewBox: n
  }) : /* @__PURE__ */ B.createElement(Ue, {
    key: "label-implicit",
    content: e,
    viewBox: n
  }) : At(e) ? /* @__PURE__ */ B.createElement(Ue, {
    key: "label-implicit",
    content: e,
    viewBox: n
  }) : Nu(e) ? /* @__PURE__ */ B.createElement(Ue, xl({
    viewBox: n
  }, e, {
    key: "label-implicit"
  })) : null : null;
}, V5 = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var u = e.children, l = sD(e), c = Cn(u, Ue).map(function(h, d) {
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
Ue.parseViewBox = sD;
Ue.renderCallByParent = V5;
var Vm, l2;
function F5() {
  if (l2) return Vm;
  l2 = 1;
  function t(e) {
    var n = e == null ? 0 : e.length;
    return n ? e[n - 1] : void 0;
  }
  return Vm = t, Vm;
}
var Z5 = F5();
const Q5 = /* @__PURE__ */ Qt(Z5);
function Sl(t) {
  "@babel/helpers - typeof";
  return Sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Sl(t);
}
var W5 = ["valueAccessor"], J5 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function tU(t) {
  return aU(t) || rU(t) || nU(t) || eU();
}
function eU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nU(t, e) {
  if (t) {
    if (typeof t == "string") return hb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hb(t, e);
  }
}
function rU(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function aU(t) {
  if (Array.isArray(t)) return hb(t);
}
function hb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function is() {
  return is = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, is.apply(this, arguments);
}
function c2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function f2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? c2(Object(n), !0).forEach(function(r) {
      iU(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function iU(t, e, n) {
  return e = uU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function uU(t) {
  var e = oU(t, "string");
  return Sl(e) == "symbol" ? e : e + "";
}
function oU(t, e) {
  if (Sl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Sl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function s2(t, e) {
  if (t == null) return {};
  var n = lU(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function lU(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
var cU = function(e) {
  return Array.isArray(e.value) ? Q5(e.value) : e.value;
};
function Nr(t) {
  var e = t.valueAccessor, n = e === void 0 ? cU : e, r = s2(t, W5), u = r.data, l = r.dataKey, c = r.clockWise, s = r.id, h = r.textBreakAll, d = s2(r, J5);
  return !u || !u.length ? null : /* @__PURE__ */ B.createElement(Jt, {
    className: "recharts-label-list"
  }, u.map(function(y, p) {
    var g = Mt(l) ? n(y, p) : Ge(y && y.payload, l), b = Mt(s) ? {} : {
      id: "".concat(s, "-").concat(p)
    };
    return /* @__PURE__ */ B.createElement(Ue, is({}, Et(y, !0), d, b, {
      parentViewBox: y.parentViewBox,
      value: g,
      textBreakAll: h,
      viewBox: Ue.parseViewBox(Mt(c) ? y : f2(f2({}, y), {}, {
        clockWise: c
      })),
      key: "label-".concat(p),
      index: p
    }));
  }));
}
Nr.displayName = "LabelList";
function fU(t, e) {
  return t ? t === !0 ? /* @__PURE__ */ B.createElement(Nr, {
    key: "labelList-implicit",
    data: e
  }) : /* @__PURE__ */ B.isValidElement(t) || At(t) ? /* @__PURE__ */ B.createElement(Nr, {
    key: "labelList-implicit",
    data: e,
    content: t
  }) : Nu(t) ? /* @__PURE__ */ B.createElement(Nr, is({
    data: e
  }, t, {
    key: "labelList-implicit"
  })) : null : null;
}
function sU(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var r = t.children, u = Cn(r, Nr).map(function(c, s) {
    return /* @__PURE__ */ rt.cloneElement(c, {
      data: e,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!n)
    return u;
  var l = fU(t.label, e);
  return [l].concat(tU(u));
}
Nr.renderCallByParent = sU;
function _l(t) {
  "@babel/helpers - typeof";
  return _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _l(t);
}
function db() {
  return db = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, db.apply(this, arguments);
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
      hU(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function hU(t, e, n) {
  return e = dU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function dU(t) {
  var e = vU(t, "string");
  return _l(e) == "symbol" ? e : e + "";
}
function vU(t, e) {
  if (_l(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (_l(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var pU = function(e, n) {
  var r = Hn(n - e), u = Math.min(Math.abs(n - e), 359.999);
  return r * u;
}, bf = function(e) {
  var n = e.cx, r = e.cy, u = e.radius, l = e.angle, c = e.sign, s = e.isExternal, h = e.cornerRadius, d = e.cornerIsExternal, y = h * (s ? 1 : -1) + u, p = Math.asin(h / y) / as, g = d ? l : l + c * p, b = qe(n, r, y, g), O = qe(n, r, u, g), _ = d ? l - c * p : l, x = qe(n, r, y * Math.cos(p * as), _);
  return {
    center: b,
    circleTangency: O,
    lineTangency: x,
    theta: p
  };
}, hD = function(e) {
  var n = e.cx, r = e.cy, u = e.innerRadius, l = e.outerRadius, c = e.startAngle, s = e.endAngle, h = pU(c, s), d = c + h, y = qe(n, r, l, c), p = qe(n, r, l, d), g = "M ".concat(y.x, ",").concat(y.y, `
    A `).concat(l, ",").concat(l, `,0,
    `).concat(+(Math.abs(h) > 180), ",").concat(+(c > d), `,
    `).concat(p.x, ",").concat(p.y, `
  `);
  if (u > 0) {
    var b = qe(n, r, u, c), O = qe(n, r, u, d);
    g += "L ".concat(O.x, ",").concat(O.y, `
            A `).concat(u, ",").concat(u, `,0,
            `).concat(+(Math.abs(h) > 180), ",").concat(+(c <= d), `,
            `).concat(b.x, ",").concat(b.y, " Z");
  } else
    g += "L ".concat(n, ",").concat(r, " Z");
  return g;
}, yU = function(e) {
  var n = e.cx, r = e.cy, u = e.innerRadius, l = e.outerRadius, c = e.cornerRadius, s = e.forceCornerRadius, h = e.cornerIsExternal, d = e.startAngle, y = e.endAngle, p = Hn(y - d), g = bf({
    cx: n,
    cy: r,
    radius: l,
    angle: d,
    sign: p,
    cornerRadius: c,
    cornerIsExternal: h
  }), b = g.circleTangency, O = g.lineTangency, _ = g.theta, x = bf({
    cx: n,
    cy: r,
    radius: l,
    angle: y,
    sign: -p,
    cornerRadius: c,
    cornerIsExternal: h
  }), T = x.circleTangency, w = x.lineTangency, M = x.theta, j = h ? Math.abs(d - y) : Math.abs(d - y) - _ - M;
  if (j < 0)
    return s ? "M ".concat(O.x, ",").concat(O.y, `
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(c * 2, `,0
        a`).concat(c, ",").concat(c, ",0,0,1,").concat(-c * 2, `,0
      `) : hD({
      cx: n,
      cy: r,
      innerRadius: u,
      outerRadius: l,
      startAngle: d,
      endAngle: y
    });
  var A = "M ".concat(O.x, ",").concat(O.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(l, ",").concat(l, ",0,").concat(+(j > 180), ",").concat(+(p < 0), ",").concat(T.x, ",").concat(T.y, `
    A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(w.x, ",").concat(w.y, `
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
    }), U = F.circleTangency, $ = F.lineTangency, K = F.theta, Z = h ? Math.abs(d - y) : Math.abs(d - y) - z - K;
    if (Z < 0 && c === 0)
      return "".concat(A, "L").concat(n, ",").concat(r, "Z");
    A += "L".concat($.x, ",").concat($.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(U.x, ",").concat(U.y, `
      A`).concat(u, ",").concat(u, ",0,").concat(+(Z > 180), ",").concat(+(p > 0), ",").concat(D.x, ",").concat(D.y, `
      A`).concat(c, ",").concat(c, ",0,0,").concat(+(p < 0), ",").concat(R.x, ",").concat(R.y, "Z");
  } else
    A += "L".concat(n, ",").concat(r, "Z");
  return A;
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
}, dD = function(e) {
  var n = d2(d2({}, mU), e), r = n.cx, u = n.cy, l = n.innerRadius, c = n.outerRadius, s = n.cornerRadius, h = n.forceCornerRadius, d = n.cornerIsExternal, y = n.startAngle, p = n.endAngle, g = n.className;
  if (c < l || y === p)
    return null;
  var b = qt("recharts-sector", g), O = c - l, _ = ti(s, O, 0, !0), x;
  return _ > 0 && Math.abs(y - p) < 360 ? x = yU({
    cx: r,
    cy: u,
    innerRadius: l,
    outerRadius: c,
    cornerRadius: Math.min(_, O / 2),
    forceCornerRadius: h,
    cornerIsExternal: d,
    startAngle: y,
    endAngle: p
  }) : x = hD({
    cx: r,
    cy: u,
    innerRadius: l,
    outerRadius: c,
    startAngle: y,
    endAngle: p
  }), /* @__PURE__ */ B.createElement("path", db({}, Et(n, !0), {
    className: b,
    d: x,
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
function vb() {
  return vb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, vb.apply(this, arguments);
}
function v2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function p2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? v2(Object(n), !0).forEach(function(r) {
      gU(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function gU(t, e, n) {
  return e = bU(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function bU(t) {
  var e = xU(t, "string");
  return Ol(e) == "symbol" ? e : e + "";
}
function xU(t, e) {
  if (Ol(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ol(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var y2 = {
  curveBasisClosed: Uq,
  curveBasisOpen: kq,
  curveBasis: Lq,
  curveBumpX: wq,
  curveBumpY: Tq,
  curveLinearClosed: Hq,
  curveLinear: qs,
  curveMonotoneX: Iq,
  curveMonotoneY: Gq,
  curveNatural: Yq,
  curveStep: Xq,
  curveStepAfter: Vq,
  curveStepBefore: Kq
}, xf = function(e) {
  return e.x === +e.x && e.y === +e.y;
}, ko = function(e) {
  return e.x;
}, Ho = function(e) {
  return e.y;
}, SU = function(e, n) {
  if (At(e))
    return e;
  var r = "curve".concat(Ns(e));
  return (r === "curveMonotone" || r === "curveBump") && n ? y2["".concat(r).concat(n === "vertical" ? "Y" : "X")] : y2[r] || qs;
}, _U = function(e) {
  var n = e.type, r = n === void 0 ? "linear" : n, u = e.points, l = u === void 0 ? [] : u, c = e.baseLine, s = e.layout, h = e.connectNulls, d = h === void 0 ? !1 : h, y = SU(r, s), p = d ? l.filter(function(_) {
    return xf(_);
  }) : l, g;
  if (Array.isArray(c)) {
    var b = d ? c.filter(function(_) {
      return xf(_);
    }) : c, O = p.map(function(_, x) {
      return p2(p2({}, _), {}, {
        base: b[x]
      });
    });
    return s === "vertical" ? g = ff().y(Ho).x1(ko).x0(function(_) {
      return _.base.x;
    }) : g = ff().x(ko).y1(Ho).y0(function(_) {
      return _.base.y;
    }), g.defined(xf).curve(y), g(O);
  }
  return s === "vertical" && st(c) ? g = ff().y(Ho).x1(ko).x0(c) : st(c) ? g = ff().x(ko).y1(Ho).y0(c) : g = bj().x(ko).y(Ho), g.defined(xf).curve(y), g(p);
}, uu = function(e) {
  var n = e.className, r = e.points, u = e.path, l = e.pathRef;
  if ((!r || !r.length) && !u)
    return null;
  var c = r && r.length ? _U(e) : u;
  return /* @__PURE__ */ rt.createElement("path", vb({}, Et(e, !1), jf(e), {
    className: qt("recharts-curve", n),
    d: c,
    ref: l
  }));
}, Fm = { exports: {} }, Zm, m2;
function OU() {
  if (m2) return Zm;
  m2 = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zm = t, Zm;
}
var Qm, g2;
function AU() {
  if (g2) return Qm;
  g2 = 1;
  var t = /* @__PURE__ */ OU();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, Qm = function() {
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
  }, Qm;
}
var b2;
function wU() {
  return b2 || (b2 = 1, Fm.exports = /* @__PURE__ */ AU()()), Fm.exports;
}
var TU = /* @__PURE__ */ wU();
const Ht = /* @__PURE__ */ Qt(TU), { getOwnPropertyNames: EU, getOwnPropertySymbols: MU } = Object, { hasOwnProperty: jU } = Object.prototype;
function Wm(t, e) {
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
function CU(t) {
  return t != null ? t[Symbol.toStringTag] : void 0;
}
function x2(t) {
  return EU(t).concat(MU(t));
}
const DU = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((t, e) => jU.call(t, e))
);
function li(t, e) {
  return t === e || !t && !e && t !== t && e !== e;
}
const PU = "__v", NU = "__o", RU = "_owner", { getOwnPropertyDescriptor: S2, keys: _2 } = Object;
function qU(t, e) {
  return t.byteLength === e.byteLength && us(new Uint8Array(t), new Uint8Array(e));
}
function zU(t, e, n) {
  let r = t.length;
  if (e.length !== r)
    return !1;
  for (; r-- > 0; )
    if (!n.equals(t[r], e[r], r, r, t, e, n))
      return !1;
  return !0;
}
function $U(t, e) {
  return t.byteLength === e.byteLength && us(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
}
function BU(t, e) {
  return li(t.getTime(), e.getTime());
}
function LU(t, e) {
  return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack;
}
function UU(t, e) {
  return t === e;
}
function O2(t, e, n) {
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
      const g = c.value, b = s.value;
      if (n.equals(g[0], b[0], h, p, t, e, n) && n.equals(g[1], b[1], g[0], b[0], t, e, n)) {
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
const kU = li;
function HU(t, e, n) {
  const r = _2(t);
  let u = r.length;
  if (_2(e).length !== u)
    return !1;
  for (; u-- > 0; )
    if (!vD(t, e, n, r[u]))
      return !1;
  return !0;
}
function Io(t, e, n) {
  const r = x2(t);
  let u = r.length;
  if (x2(e).length !== u)
    return !1;
  let l, c, s;
  for (; u-- > 0; )
    if (l = r[u], !vD(t, e, n, l) || (c = S2(t, l), s = S2(e, l), (c || s) && (!c || !s || c.configurable !== s.configurable || c.enumerable !== s.enumerable || c.writable !== s.writable)))
      return !1;
  return !0;
}
function IU(t, e) {
  return li(t.valueOf(), e.valueOf());
}
function GU(t, e) {
  return t.source === e.source && t.flags === e.flags;
}
function A2(t, e, n) {
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
function us(t, e) {
  let n = t.byteLength;
  if (e.byteLength !== n || t.byteOffset !== e.byteOffset)
    return !1;
  for (; n-- > 0; )
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function YU(t, e) {
  return t.hostname === e.hostname && t.pathname === e.pathname && t.protocol === e.protocol && t.port === e.port && t.hash === e.hash && t.username === e.username && t.password === e.password;
}
function vD(t, e, n, r) {
  return (r === RU || r === NU || r === PU) && (t.$$typeof || e.$$typeof) ? !0 : DU(e, r) && n.equals(t[r], e[r], r, r, t, e, n);
}
const XU = "[object ArrayBuffer]", KU = "[object Arguments]", VU = "[object Boolean]", FU = "[object DataView]", ZU = "[object Date]", QU = "[object Error]", WU = "[object Map]", JU = "[object Number]", tk = "[object Object]", ek = "[object RegExp]", nk = "[object Set]", rk = "[object String]", ak = {
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
}, ik = "[object URL]", uk = Object.prototype.toString;
function ok({ areArrayBuffersEqual: t, areArraysEqual: e, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: u, areFunctionsEqual: l, areMapsEqual: c, areNumbersEqual: s, areObjectsEqual: h, arePrimitiveWrappersEqual: d, areRegExpsEqual: y, areSetsEqual: p, areTypedArraysEqual: g, areUrlsEqual: b, unknownTagComparators: O }) {
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
    const A = uk.call(x);
    if (A === ZU)
      return r(x, T, w);
    if (A === ek)
      return y(x, T, w);
    if (A === WU)
      return c(x, T, w);
    if (A === nk)
      return p(x, T, w);
    if (A === tk)
      return typeof x.then != "function" && typeof T.then != "function" && h(x, T, w);
    if (A === ik)
      return b(x, T, w);
    if (A === QU)
      return u(x, T, w);
    if (A === KU)
      return h(x, T, w);
    if (ak[A])
      return g(x, T, w);
    if (A === XU)
      return t(x, T, w);
    if (A === FU)
      return n(x, T, w);
    if (A === VU || A === JU || A === rk)
      return d(x, T, w);
    if (O) {
      let E = O[A];
      if (!E) {
        const D = CU(x);
        D && (E = O[D]);
      }
      if (E)
        return E(x, T, w);
    }
    return !1;
  };
}
function lk({ circular: t, createCustomConfig: e, strict: n }) {
  let r = {
    areArrayBuffersEqual: qU,
    areArraysEqual: n ? Io : zU,
    areDataViewsEqual: $U,
    areDatesEqual: BU,
    areErrorsEqual: LU,
    areFunctionsEqual: UU,
    areMapsEqual: n ? Wm(O2, Io) : O2,
    areNumbersEqual: kU,
    areObjectsEqual: n ? Io : HU,
    arePrimitiveWrappersEqual: IU,
    areRegExpsEqual: GU,
    areSetsEqual: n ? Wm(A2, Io) : A2,
    areTypedArraysEqual: n ? Wm(us, Io) : us,
    areUrlsEqual: YU,
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
function ck(t) {
  return function(e, n, r, u, l, c, s) {
    return t(e, n, s);
  };
}
function fk({ circular: t, comparator: e, createState: n, equals: r, strict: u }) {
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
const sk = Oa();
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
  const { circular: e = !1, createInternalComparator: n, createState: r, strict: u = !1 } = t, l = lk(t), c = ok(l), s = n ? n(c) : ck(c);
  return fk({ circular: e, comparator: c, createState: r, equals: s, strict: u });
}
function hk(t) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(t);
}
function w2(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = -1, r = function u(l) {
    n < 0 && (n = l), l - n > e ? (t(l), n = -1) : hk(u);
  };
  requestAnimationFrame(r);
}
function pb(t) {
  "@babel/helpers - typeof";
  return pb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pb(t);
}
function dk(t) {
  return mk(t) || yk(t) || pk(t) || vk();
}
function vk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pk(t, e) {
  if (t) {
    if (typeof t == "string") return T2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T2(t, e);
  }
}
function T2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function yk(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function mk(t) {
  if (Array.isArray(t)) return t;
}
function gk() {
  var t = {}, e = function() {
    return null;
  }, n = !1, r = function u(l) {
    if (!n) {
      if (Array.isArray(l)) {
        if (!l.length)
          return;
        var c = l, s = dk(c), h = s[0], d = s.slice(1);
        if (typeof h == "number") {
          w2(u.bind(null, d), h);
          return;
        }
        u(h), w2(u.bind(null, d));
        return;
      }
      pb(l) === "object" && (t = l, e(t)), typeof l == "function" && l();
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
function E2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function M2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? E2(Object(n), !0).forEach(function(r) {
      pD(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function pD(t, e, n) {
  return e = bk(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function bk(t) {
  var e = xk(t, "string");
  return Al(e) === "symbol" ? e : String(e);
}
function xk(t, e) {
  if (Al(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Al(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Sk = function(e, n) {
  return [Object.keys(e), Object.keys(n)].reduce(function(r, u) {
    return r.filter(function(l) {
      return u.includes(l);
    });
  });
}, _k = function(e) {
  return e;
}, Ok = function(e) {
  return e.replace(/([A-Z])/g, function(n) {
    return "-".concat(n.toLowerCase());
  });
}, tl = function(e, n) {
  return Object.keys(n).reduce(function(r, u) {
    return M2(M2({}, r), {}, pD({}, u, e(u, n[u])));
  }, {});
}, j2 = function(e, n, r) {
  return e.map(function(u) {
    return "".concat(Ok(u), " ").concat(n, "ms ").concat(r);
  }).join(",");
};
function Ak(t, e) {
  return Ek(t) || Tk(t, e) || yD(t, e) || wk();
}
function wk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tk(t, e) {
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
function Ek(t) {
  if (Array.isArray(t)) return t;
}
function Mk(t) {
  return Dk(t) || Ck(t) || yD(t) || jk();
}
function jk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yD(t, e) {
  if (t) {
    if (typeof t == "string") return yb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yb(t, e);
  }
}
function Ck(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Dk(t) {
  if (Array.isArray(t)) return yb(t);
}
function yb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var os = 1e-4, mD = function(e, n) {
  return [0, 3 * e, 3 * n - 6 * e, 3 * e - 3 * n + 1];
}, gD = function(e, n) {
  return e.map(function(r, u) {
    return r * Math.pow(n, u);
  }).reduce(function(r, u) {
    return r + u;
  });
}, C2 = function(e, n) {
  return function(r) {
    var u = mD(e, n);
    return gD(u, r);
  };
}, Pk = function(e, n) {
  return function(r) {
    var u = mD(e, n), l = [].concat(Mk(u.map(function(c, s) {
      return c * s;
    }).slice(1)), [0]);
    return gD(l, r);
  };
}, D2 = function() {
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
          var d = h[1].split(")")[0].split(",").map(function(x) {
            return parseFloat(x);
          }), y = Ak(d, 4);
          u = y[0], l = y[1], c = y[2], s = y[3];
        }
      }
    }
  var p = C2(u, c), g = C2(l, s), b = Pk(u, c), O = function(T) {
    return T > 1 ? 1 : T < 0 ? 0 : T;
  }, _ = function(T) {
    for (var w = T > 1 ? 1 : T, M = w, j = 0; j < 8; ++j) {
      var A = p(M) - w, E = b(M);
      if (Math.abs(A - w) < os || E < os)
        return g(M);
      M = O(M - A / E);
    }
    return g(M);
  };
  return _.isStepper = !1, _;
}, Nk = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.stiff, r = n === void 0 ? 100 : n, u = e.damping, l = u === void 0 ? 8 : u, c = e.dt, s = c === void 0 ? 17 : c, h = function(y, p, g) {
    var b = -(y - p) * r, O = g * l, _ = g + (b - O) * s / 1e3, x = g * s / 1e3 + y;
    return Math.abs(x - p) < os && Math.abs(_) < os ? [p, 0] : [x, _];
  };
  return h.isStepper = !0, h.dt = s, h;
}, Rk = function() {
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
        return D2(u);
      case "spring":
        return Nk();
      default:
        if (u.split("(")[0] === "cubic-bezier")
          return D2(u);
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
function P2(t) {
  return $k(t) || zk(t) || bD(t) || qk();
}
function qk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zk(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function $k(t) {
  if (Array.isArray(t)) return gb(t);
}
function N2(t, e) {
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
    e % 2 ? N2(Object(n), !0).forEach(function(r) {
      mb(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function mb(t, e, n) {
  return e = Bk(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Bk(t) {
  var e = Lk(t, "string");
  return wl(e) === "symbol" ? e : String(e);
}
function Lk(t, e) {
  if (wl(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (wl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Uk(t, e) {
  return Ik(t) || Hk(t, e) || bD(t, e) || kk();
}
function kk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bD(t, e) {
  if (t) {
    if (typeof t == "string") return gb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gb(t, e);
  }
}
function gb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Hk(t, e) {
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
function Ik(t) {
  if (Array.isArray(t)) return t;
}
var ls = function(e, n, r) {
  return e + (n - e) * r;
}, bb = function(e) {
  var n = e.from, r = e.to;
  return n !== r;
}, Gk = function t(e, n, r) {
  var u = tl(function(l, c) {
    if (bb(c)) {
      var s = e(c.from, c.to, c.velocity), h = Uk(s, 2), d = h[0], y = h[1];
      return Ne(Ne({}, c), {}, {
        from: d,
        velocity: y
      });
    }
    return c;
  }, n);
  return r < 1 ? tl(function(l, c) {
    return bb(c) ? Ne(Ne({}, c), {}, {
      velocity: ls(c.velocity, u[l].velocity, r),
      from: ls(c.from, u[l].from, r)
    }) : c;
  }, n) : t(e, u, r - 1);
};
const Yk = (function(t, e, n, r, u) {
  var l = Sk(t, e), c = l.reduce(function(x, T) {
    return Ne(Ne({}, x), {}, mb({}, T, [t[T], e[T]]));
  }, {}), s = l.reduce(function(x, T) {
    return Ne(Ne({}, x), {}, mb({}, T, {
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
    return !Object.values(s).filter(bb).length;
  }, O = function(T) {
    d || (d = T);
    var w = T - d, M = w / n.dt;
    s = Gk(n, s, M), u(Ne(Ne(Ne({}, t), e), g())), d = T, b() || (h = requestAnimationFrame(p));
  }, _ = function(T) {
    y || (y = T);
    var w = (T - y) / r, M = tl(function(A, E) {
      return ls.apply(void 0, P2(E).concat([n(w)]));
    }, c);
    if (u(Ne(Ne(Ne({}, t), e), M)), w < 1)
      h = requestAnimationFrame(p);
    else {
      var j = tl(function(A, E) {
        return ls.apply(void 0, P2(E).concat([n(1)]));
      }, c);
      u(Ne(Ne(Ne({}, t), e), j));
    }
  };
  return p = n.isStepper ? O : _, function() {
    return requestAnimationFrame(p), function() {
      cancelAnimationFrame(h);
    };
  };
});
function gu(t) {
  "@babel/helpers - typeof";
  return gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gu(t);
}
var Xk = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function Kk(t, e) {
  if (t == null) return {};
  var n = Vk(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Vk(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), u, l;
  for (l = 0; l < r.length; l++)
    u = r[l], !(e.indexOf(u) >= 0) && (n[u] = t[u]);
  return n;
}
function Jm(t) {
  return Wk(t) || Qk(t) || Zk(t) || Fk();
}
function Fk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zk(t, e) {
  if (t) {
    if (typeof t == "string") return xb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xb(t, e);
  }
}
function Qk(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Wk(t) {
  if (Array.isArray(t)) return xb(t);
}
function xb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function R2(t, e) {
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
    e % 2 ? R2(Object(n), !0).forEach(function(r) {
      Vo(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Vo(t, e, n) {
  return e = xD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Jk(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tH(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, xD(r.key), r);
  }
}
function eH(t, e, n) {
  return e && tH(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function xD(t) {
  var e = nH(t, "string");
  return gu(e) === "symbol" ? e : String(e);
}
function nH(t, e) {
  if (gu(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (gu(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function rH(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Sb(t, e);
}
function Sb(t, e) {
  return Sb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Sb(t, e);
}
function aH(t) {
  var e = iH();
  return function() {
    var r = cs(t), u;
    if (e) {
      var l = cs(this).constructor;
      u = Reflect.construct(r, arguments, l);
    } else
      u = r.apply(this, arguments);
    return _b(this, u);
  };
}
function _b(t, e) {
  if (e && (gu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ob(t);
}
function Ob(t) {
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
function cs(t) {
  return cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, cs(t);
}
var nr = /* @__PURE__ */ (function(t) {
  rH(n, t);
  var e = aH(n);
  function n(r, u) {
    var l;
    Jk(this, n), l = e.call(this, r, u);
    var c = l.props, s = c.isActive, h = c.attributeName, d = c.from, y = c.to, p = c.steps, g = c.children, b = c.duration;
    if (l.handleStyleChange = l.handleStyleChange.bind(Ob(l)), l.changeStyle = l.changeStyle.bind(Ob(l)), !s || b <= 0)
      return l.state = {
        style: {}
      }, typeof g == "function" && (l.state = {
        style: y
      }), _b(l);
    if (p && p.length)
      l.state = {
        style: p[0].style
      };
    else if (d) {
      if (typeof g == "function")
        return l.state = {
          style: d
        }, _b(l);
      l.state = {
        style: h ? Vo({}, h, d) : d
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
      var u = this.props, l = u.isActive, c = u.canBegin;
      this.mounted = !0, !(!l || !c) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(u) {
      var l = this.props, c = l.isActive, s = l.canBegin, h = l.attributeName, d = l.shouldReAnimate, y = l.to, p = l.from, g = this.state.style;
      if (s) {
        if (!c) {
          var b = {
            style: h ? Vo({}, h, y) : y
          };
          this.state && g && (h && g[h] !== y || !h && g !== y) && this.setState(b);
          return;
        }
        if (!(sk(u.to, y) && u.canBegin && u.isActive)) {
          var O = !u.canBegin || !u.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var _ = O || d ? p : u.to;
          if (this.state && g) {
            var x = {
              style: h ? Vo({}, h, _) : _
            };
            (h && g[h] !== _ || !h && g !== _) && this.setState(x);
          }
          this.runAnimation(Bn(Bn({}, this.props), {}, {
            from: _,
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
      var l = this, c = u.from, s = u.to, h = u.duration, d = u.easing, y = u.begin, p = u.onAnimationEnd, g = u.onAnimationStart, b = Yk(c, s, Rk(d), h, this.changeStyle), O = function() {
        l.stopJSAnimation = b();
      };
      this.manager.start([g, y, O, h, p]);
    }
  }, {
    key: "runStepAnimation",
    value: function(u) {
      var l = this, c = u.steps, s = u.begin, h = u.onAnimationStart, d = c[0], y = d.style, p = d.duration, g = p === void 0 ? 0 : p, b = function(_, x, T) {
        if (T === 0)
          return _;
        var w = x.duration, M = x.easing, j = M === void 0 ? "ease" : M, A = x.style, E = x.properties, D = x.onAnimationEnd, R = T > 0 ? c[T - 1] : x, z = E || Object.keys(A);
        if (typeof j == "function" || j === "spring")
          return [].concat(Jm(_), [l.runJSAnimation.bind(l, {
            from: R.style,
            to: A,
            duration: w,
            easing: j
          }), w]);
        var F = j2(z, w, j), U = Bn(Bn(Bn({}, R.style), A), {}, {
          transition: F
        });
        return [].concat(Jm(_), [U, w, D]).filter(_k);
      };
      return this.manager.start([h].concat(Jm(c.reduce(b, [y, Math.max(g, s)])), [u.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(u) {
      this.manager || (this.manager = gk());
      var l = u.begin, c = u.duration, s = u.attributeName, h = u.to, d = u.easing, y = u.onAnimationStart, p = u.onAnimationEnd, g = u.steps, b = u.children, O = this.manager;
      if (this.unSubscribe = O.subscribe(this.handleStyleChange), typeof d == "function" || typeof b == "function" || d === "spring") {
        this.runJSAnimation(u);
        return;
      }
      if (g.length > 1) {
        this.runStepAnimation(u);
        return;
      }
      var _ = s ? Vo({}, s, h) : h, x = j2(Object.keys(_), c, d);
      O.start([y, l, Bn(Bn({}, _), {}, {
        transition: x
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
      var h = Kk(u, Xk), d = rt.Children.count(l), y = this.state.style;
      if (typeof l == "function")
        return l(y);
      if (!s || d === 0 || c <= 0)
        return l;
      var p = function(b) {
        var O = b.props, _ = O.style, x = _ === void 0 ? {} : _, T = O.className, w = /* @__PURE__ */ rt.cloneElement(b, Bn(Bn({}, h), {}, {
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
var tg = { exports: {} }, Be = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q2;
function uH() {
  if (q2) return Be;
  q2 = 1;
  var t = Vb();
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
var z2;
function oH() {
  if (z2) return tg.exports;
  z2 = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), tg.exports = uH(), tg.exports;
}
function Tl(t) {
  "@babel/helpers - typeof";
  return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tl(t);
}
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, fs.apply(this, arguments);
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
    if (typeof t == "string") return $2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $2(t, e);
  }
}
function $2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function sH(t, e) {
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
function hH(t) {
  if (Array.isArray(t)) return t;
}
function B2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function L2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? B2(Object(n), !0).forEach(function(r) {
      dH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B2(Object(n)).forEach(function(r) {
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
  return Tl(e) == "symbol" ? e : e + "";
}
function pH(t, e) {
  if (Tl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Tl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var U2 = function(e, n, r, u, l) {
  var c = Math.min(Math.abs(r) / 2, Math.abs(u) / 2), s = u >= 0 ? 1 : -1, h = r >= 0 ? 1 : -1, d = u >= 0 && r >= 0 || u < 0 && r < 0 ? 1 : 0, y;
  if (c > 0 && l instanceof Array) {
    for (var p = [0, 0, 0, 0], g = 0, b = 4; g < b; g++)
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
}, yH = function(e, n) {
  if (!e || !n)
    return !1;
  var r = e.x, u = e.y, l = n.x, c = n.y, s = n.width, h = n.height;
  if (Math.abs(s) > 0 && Math.abs(h) > 0) {
    var d = Math.min(l, l + s), y = Math.max(l, l + s), p = Math.min(c, c + h), g = Math.max(c, c + h);
    return r >= d && r <= y && u >= p && u <= g;
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
}, X0 = function(e) {
  var n = L2(L2({}, mH), e), r = rt.useRef(), u = rt.useState(-1), l = lH(u, 2), c = l[0], s = l[1];
  rt.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var j = r.current.getTotalLength();
        j && s(j);
      } catch {
      }
  }, []);
  var h = n.x, d = n.y, y = n.width, p = n.height, g = n.radius, b = n.className, O = n.animationEasing, _ = n.animationDuration, x = n.animationBegin, T = n.isAnimationActive, w = n.isUpdateAnimationActive;
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
    duration: _,
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
      duration: _,
      isActive: T,
      easing: O
    }, /* @__PURE__ */ B.createElement("path", fs({}, Et(n, !0), {
      className: M,
      d: U2(D, R, A, E, g),
      ref: r
    })));
  }) : /* @__PURE__ */ B.createElement("path", fs({}, Et(n, !0), {
    className: M,
    d: U2(h, d, y, p, g)
  }));
};
function Ab() {
  return Ab = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ab.apply(this, arguments);
}
var Fs = function(e) {
  var n = e.cx, r = e.cy, u = e.r, l = e.className, c = qt("recharts-dot", l);
  return n === +n && r === +r && u === +u ? /* @__PURE__ */ rt.createElement("circle", Ab({}, Et(e, !1), jf(e), {
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
var gH = ["x", "y", "top", "left", "width", "height", "className"];
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
function k2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bH(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? k2(Object(n), !0).forEach(function(r) {
      xH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k2(Object(n)).forEach(function(r) {
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
  return El(e) == "symbol" ? e : e + "";
}
function _H(t, e) {
  if (El(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (El(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function OH(t, e) {
  if (t == null) return {};
  var n = AH(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
var wH = function(e, n, r, u, l, c) {
  return "M".concat(e, ",").concat(l, "v").concat(u, "M").concat(c, ",").concat(n, "h").concat(r);
}, TH = function(e) {
  var n = e.x, r = n === void 0 ? 0 : n, u = e.y, l = u === void 0 ? 0 : u, c = e.top, s = c === void 0 ? 0 : c, h = e.left, d = h === void 0 ? 0 : h, y = e.width, p = y === void 0 ? 0 : y, g = e.height, b = g === void 0 ? 0 : g, O = e.className, _ = OH(e, gH), x = bH({
    x: r,
    y: l,
    top: s,
    left: d,
    width: p,
    height: b
  }, _);
  return !st(r) || !st(l) || !st(p) || !st(b) || !st(s) || !st(d) ? null : /* @__PURE__ */ B.createElement("path", wb({}, Et(x, !0), {
    className: qt("recharts-cross", O),
    d: wH(r, l, p, b, s, d)
  }));
}, eg, H2;
function EH() {
  if (H2) return eg;
  H2 = 1;
  var t = Hj(), e = t(Object.getPrototypeOf, Object);
  return eg = e, eg;
}
var ng, I2;
function MH() {
  if (I2) return ng;
  I2 = 1;
  var t = $r(), e = EH(), n = Br(), r = "[object Object]", u = Function.prototype, l = Object.prototype, c = u.toString, s = l.hasOwnProperty, h = c.call(Object);
  function d(y) {
    if (!n(y) || t(y) != r)
      return !1;
    var p = e(y);
    if (p === null)
      return !0;
    var g = s.call(p, "constructor") && p.constructor;
    return typeof g == "function" && g instanceof g && c.call(g) == h;
  }
  return ng = d, ng;
}
var jH = MH();
const CH = /* @__PURE__ */ Qt(jH);
var rg, G2;
function DH() {
  if (G2) return rg;
  G2 = 1;
  var t = $r(), e = Br(), n = "[object Boolean]";
  function r(u) {
    return u === !0 || u === !1 || e(u) && t(u) == n;
  }
  return rg = r, rg;
}
var PH = DH();
const NH = /* @__PURE__ */ Qt(PH);
function Ml(t) {
  "@babel/helpers - typeof";
  return Ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ml(t);
}
function ss() {
  return ss = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ss.apply(this, arguments);
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
    if (typeof t == "string") return Y2(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y2(t, e);
  }
}
function Y2(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function $H(t, e) {
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
function BH(t) {
  if (Array.isArray(t)) return t;
}
function X2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function K2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? X2(Object(n), !0).forEach(function(r) {
      LH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X2(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function LH(t, e, n) {
  return e = UH(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function UH(t) {
  var e = kH(t, "string");
  return Ml(e) == "symbol" ? e : e + "";
}
function kH(t, e) {
  if (Ml(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ml(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var V2 = function(e, n, r, u, l) {
  var c = r - u, s;
  return s = "M ".concat(e, ",").concat(n), s += "L ".concat(e + r, ",").concat(n), s += "L ".concat(e + r - c / 2, ",").concat(n + l), s += "L ".concat(e + r - c / 2 - u, ",").concat(n + l), s += "L ".concat(e, ",").concat(n, " Z"), s;
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
  var n = K2(K2({}, HH), e), r = rt.useRef(), u = rt.useState(-1), l = RH(u, 2), c = l[0], s = l[1];
  rt.useEffect(function() {
    if (r.current && r.current.getTotalLength)
      try {
        var M = r.current.getTotalLength();
        M && s(M);
      } catch {
      }
  }, []);
  var h = n.x, d = n.y, y = n.upperWidth, p = n.lowerWidth, g = n.height, b = n.className, O = n.animationEasing, _ = n.animationDuration, x = n.animationBegin, T = n.isUpdateAnimationActive;
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
    duration: _,
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
      duration: _,
      easing: O
    }, /* @__PURE__ */ B.createElement("path", ss({}, Et(n, !0), {
      className: w,
      d: V2(D, R, j, A, E),
      ref: r
    })));
  }) : /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("path", ss({}, Et(n, !0), {
    className: w,
    d: V2(h, d, y, p, g)
  })));
}, GH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function jl(t) {
  "@babel/helpers - typeof";
  return jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jl(t);
}
function YH(t, e) {
  if (t == null) return {};
  var n = XH(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function F2(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? F2(Object(n), !0).forEach(function(r) {
      KH(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : F2(Object(n)).forEach(function(r) {
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
  return jl(e) == "symbol" ? e : e + "";
}
function FH(t, e) {
  if (jl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (jl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ZH(t, e) {
  return hs(hs({}, e), t);
}
function QH(t, e) {
  return t === "symbols";
}
function Z2(t) {
  var e = t.shapeType, n = t.elementProps;
  switch (e) {
    case "rectangle":
      return /* @__PURE__ */ B.createElement(X0, n);
    case "trapezoid":
      return /* @__PURE__ */ B.createElement(IH, n);
    case "sector":
      return /* @__PURE__ */ B.createElement(dD, n);
    case "symbols":
      if (QH(e))
        return /* @__PURE__ */ B.createElement(f0, n);
      break;
    default:
      return null;
  }
}
function WH(t) {
  return /* @__PURE__ */ rt.isValidElement(t) ? t.props : t;
}
function JH(t) {
  var e = t.option, n = t.shapeType, r = t.propTransformer, u = r === void 0 ? ZH : r, l = t.activeClassName, c = l === void 0 ? "recharts-active-shape" : l, s = t.isActive, h = YH(t, GH), d;
  if (/* @__PURE__ */ rt.isValidElement(e))
    d = /* @__PURE__ */ rt.cloneElement(e, hs(hs({}, h), WH(e)));
  else if (At(e))
    d = e(h);
  else if (CH(e) && !NH(e)) {
    var y = u(e, h);
    d = /* @__PURE__ */ B.createElement(Z2, {
      shapeType: n,
      elementProps: y
    });
  } else {
    var p = h;
    d = /* @__PURE__ */ B.createElement(Z2, {
      shapeType: n,
      elementProps: p
    });
  }
  return s ? /* @__PURE__ */ B.createElement(Jt, {
    className: c
  }, d) : d;
}
function Zs(t, e) {
  return e != null && "trapezoids" in t.props;
}
function Qs(t, e) {
  return e != null && "sectors" in t.props;
}
function Cl(t, e) {
  return e != null && "points" in t.props;
}
function t9(t, e) {
  var n, r, u = t.x === (e == null || (n = e.labelViewBox) === null || n === void 0 ? void 0 : n.x) || t.x === e.x, l = t.y === (e == null || (r = e.labelViewBox) === null || r === void 0 ? void 0 : r.y) || t.y === e.y;
  return u && l;
}
function e9(t, e) {
  var n = t.endAngle === e.endAngle, r = t.startAngle === e.startAngle;
  return n && r;
}
function n9(t, e) {
  var n = t.x === e.x, r = t.y === e.y, u = t.z === e.z;
  return n && r && u;
}
function r9(t, e) {
  var n;
  return Zs(t, e) ? n = t9 : Qs(t, e) ? n = e9 : Cl(t, e) && (n = n9), n;
}
function a9(t, e) {
  var n;
  return Zs(t, e) ? n = "trapezoids" : Qs(t, e) ? n = "sectors" : Cl(t, e) && (n = "points"), n;
}
function i9(t, e) {
  if (Zs(t, e)) {
    var n;
    return (n = e.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  if (Qs(t, e)) {
    var r;
    return (r = e.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  return Cl(t, e) ? e.payload : {};
}
function u9(t) {
  var e = t.activeTooltipItem, n = t.graphicalItem, r = t.itemData, u = a9(n, e), l = i9(n, e), c = r.filter(function(h, d) {
    var y = yu(l, h), p = n.props[u].filter(function(O) {
      var _ = r9(n, e);
      return _(O, e);
    }), g = n.props[u].indexOf(p[p.length - 1]), b = d === g;
    return y && b;
  }), s = r.indexOf(c[c.length - 1]);
  return s;
}
var ag, Q2;
function o9() {
  if (Q2) return ag;
  Q2 = 1;
  var t = Math.ceil, e = Math.max;
  function n(r, u, l, c) {
    for (var s = -1, h = e(t((u - r) / (l || 1)), 0), d = Array(h); h--; )
      d[c ? h : ++s] = r, r += l;
    return d;
  }
  return ag = n, ag;
}
var ig, W2;
function SD() {
  if (W2) return ig;
  W2 = 1;
  var t = aC(), e = 1 / 0, n = 17976931348623157e292;
  function r(u) {
    if (!u)
      return u === 0 ? u : 0;
    if (u = t(u), u === e || u === -e) {
      var l = u < 0 ? -1 : 1;
      return l * n;
    }
    return u === u ? u : 0;
  }
  return ig = r, ig;
}
var ug, J2;
function l9() {
  if (J2) return ug;
  J2 = 1;
  var t = o9(), e = Ls(), n = SD();
  function r(u) {
    return function(l, c, s) {
      return s && typeof s != "number" && e(l, c, s) && (c = s = void 0), l = n(l), c === void 0 ? (c = l, l = 0) : c = n(c), s = s === void 0 ? l < c ? 1 : -1 : n(s), t(l, c, s, u);
    };
  }
  return ug = r, ug;
}
var og, tM;
function c9() {
  if (tM) return og;
  tM = 1;
  var t = l9(), e = t();
  return og = e, og;
}
var f9 = c9();
const ds = /* @__PURE__ */ Qt(f9);
function Dl(t) {
  "@babel/helpers - typeof";
  return Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dl(t);
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
function nM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? eM(Object(n), !0).forEach(function(r) {
      _D(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : eM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function _D(t, e, n) {
  return e = s9(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function s9(t) {
  var e = h9(t, "string");
  return Dl(e) == "symbol" ? e : e + "";
}
function h9(t, e) {
  if (Dl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Dl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var d9 = ["Webkit", "Moz", "O", "ms"], v9 = function(e, n) {
  var r = e.replace(/(\w)/, function(l) {
    return l.toUpperCase();
  }), u = d9.reduce(function(l, c) {
    return nM(nM({}, l), {}, _D({}, c + r, n));
  }, {});
  return u[e] = n, u;
};
function bu(t) {
  "@babel/helpers - typeof";
  return bu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bu(t);
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
function rM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rM(Object(n), !0).forEach(function(r) {
      sn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function p9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function aM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, AD(r.key), r);
  }
}
function y9(t, e, n) {
  return e && aM(t.prototype, e), n && aM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function m9(t, e, n) {
  return e = ps(e), g9(t, OD() ? Reflect.construct(e, n || [], ps(t).constructor) : e.apply(t, n));
}
function g9(t, e) {
  if (e && (bu(e) === "object" || typeof e == "function"))
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
function OD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (OD = function() {
    return !!t;
  })();
}
function ps(t) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ps(t);
}
function x9(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Tb(t, e);
}
function Tb(t, e) {
  return Tb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Tb(t, e);
}
function sn(t, e, n) {
  return e = AD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function AD(t) {
  var e = S9(t, "string");
  return bu(e) == "symbol" ? e : e + "";
}
function S9(t, e) {
  if (bu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (bu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var _9 = function(e) {
  var n = e.data, r = e.startIndex, u = e.endIndex, l = e.x, c = e.width, s = e.travellerWidth;
  if (!n || !n.length)
    return {};
  var h = n.length, d = Wo().domain(ds(0, h)).range([l, l + c - s]), y = d.domain().map(function(p) {
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
}, iM = function(e) {
  return e.changedTouches && !!e.changedTouches.length;
}, xu = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return p9(this, e), r = m9(this, e, [n]), sn(r, "handleDrag", function(u) {
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
      var l = iM(u) ? u.changedTouches[0] : u;
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
      var u = r.startX, l = r.endX, c = this.state.scaleValues, s = this.props, h = s.gap, d = s.data, y = d.length - 1, p = Math.min(u, l), g = Math.max(u, l), b = e.getIndexInRange(c, p), O = e.getIndexInRange(c, g);
      return {
        startIndex: b - b % h,
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
      var u = this.state, l = u.slideMoveStartX, c = u.startX, s = u.endX, h = this.props, d = h.x, y = h.width, p = h.travellerWidth, g = h.startIndex, b = h.endIndex, O = h.onChange, _ = r.pageX - l;
      _ > 0 ? _ = Math.min(_, d + y - p - s, d + y - p - c) : _ < 0 && (_ = Math.max(_, d - c, d - s));
      var x = this.getIndex({
        startX: c + _,
        endX: s + _
      });
      (x.startIndex !== g || x.endIndex !== b) && O && O(x), this.setState({
        startX: c + _,
        endX: s + _,
        slideMoveStartX: r.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(r, u) {
      var l = iM(u) ? u.changedTouches[0] : u;
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
      var u = this.state, l = u.brushMoveStartX, c = u.movingTravellerId, s = u.endX, h = u.startX, d = this.state[c], y = this.props, p = y.x, g = y.width, b = y.travellerWidth, O = y.onChange, _ = y.gap, x = y.data, T = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = r.pageX - l;
      w > 0 ? w = Math.min(w, p + g - b - d) : w < 0 && (w = Math.max(w, p - d)), T[c] = d + w;
      var M = this.getIndex(T), j = M.startIndex, A = M.endIndex, E = function() {
        var R = x.length - 1;
        return c === "startX" && (s > h ? j % _ === 0 : A % _ === 0) || s < h && A === R || c === "endX" && (s > h ? A % _ === 0 : j % _ === 0) || s > h && A === R;
      };
      this.setState(sn(sn({}, c, d + w), "brushMoveStartX", r.pageX), function() {
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
          var b = s[g];
          u === "startX" && b >= d || u === "endX" && b <= h || this.setState(sn({}, u, b), function() {
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
      var r = this.props, u = r.x, l = r.y, c = r.width, s = r.height, h = r.data, d = r.children, y = r.padding, p = rt.Children.only(d);
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
      var l, c, s = this, h = this.props, d = h.y, y = h.travellerWidth, p = h.height, g = h.traveller, b = h.ariaLabel, O = h.data, _ = h.startIndex, x = h.endIndex, T = Math.max(r, this.props.x), w = lg(lg({}, Et(this.props, !1)), {}, {
        x: T,
        y: d,
        width: y,
        height: p
      }), M = b || "Min value: ".concat((l = O[_]) === null || l === void 0 ? void 0 : l.name, ", Max value: ").concat((c = O[x]) === null || c === void 0 ? void 0 : c.name);
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
        onKeyDown: function(A) {
          ["ArrowLeft", "ArrowRight"].includes(A.key) && (A.preventDefault(), A.stopPropagation(), s.handleTravellerMoveKeyboard(A.key === "ArrowRight" ? 1 : -1, u));
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
      var r = this.props, u = r.startIndex, l = r.endIndex, c = r.y, s = r.height, h = r.travellerWidth, d = r.stroke, y = this.state, p = y.startX, g = y.endX, b = 5, O = {
        pointerEvents: "none",
        fill: d
      };
      return /* @__PURE__ */ B.createElement(Jt, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ B.createElement(kf, vs({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(p, g) - b,
        y: c + s / 2
      }, O), this.getTextOfTick(u)), /* @__PURE__ */ B.createElement(kf, vs({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(p, g) + h + b,
        y: c + s / 2
      }, O), this.getTextOfTick(l)));
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, u = r.data, l = r.className, c = r.children, s = r.x, h = r.y, d = r.width, y = r.height, p = r.alwaysShowText, g = this.state, b = g.startX, O = g.endX, _ = g.isTextActive, x = g.isSlideMoving, T = g.isTravellerMoving, w = g.isTravellerFocused;
      if (!u || !u.length || !st(s) || !st(h) || !st(d) || !st(y) || d <= 0 || y <= 0)
        return null;
      var M = qt("recharts-brush", l), j = B.Children.count(c) === 1, A = v9("userSelect", "none");
      return /* @__PURE__ */ B.createElement(Jt, {
        className: M,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: A
      }, this.renderBackground(), j && this.renderPanorama(), this.renderSlide(b, O), this.renderTravellerLayer(b, "startX"), this.renderTravellerLayer(O, "endX"), (_ || x || T || w || p) && this.renderText());
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
        return lg({
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
      if (u.scale && (c !== u.prevWidth || s !== u.prevX || h !== u.prevTravellerWidth)) {
        u.scale.range([s, s + c - h]);
        var g = u.scale.domain().map(function(b) {
          return u.scale(b);
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
})(rt.PureComponent);
sn(xu, "displayName", "Brush");
sn(xu, "defaultProps", {
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
var cg, uM;
function O9() {
  if (uM) return cg;
  uM = 1;
  var t = m0();
  function e(n, r) {
    var u;
    return t(n, function(l, c, s) {
      return u = r(l, c, s), !u;
    }), !!u;
  }
  return cg = e, cg;
}
var fg, oM;
function A9() {
  if (oM) return fg;
  oM = 1;
  var t = qj(), e = xa(), n = O9(), r = Je(), u = Ls();
  function l(c, s, h) {
    var d = r(c) ? t : n;
    return h && u(c, s, h) && (s = void 0), d(c, e(s, 3));
  }
  return fg = l, fg;
}
var w9 = A9();
const T9 = /* @__PURE__ */ Qt(w9);
var Jn = function(e, n) {
  var r = e.alwaysShow, u = e.ifOverflow;
  return r && (u = "extendDomain"), u === n;
}, sg, lM;
function E9() {
  if (lM) return sg;
  lM = 1;
  var t = Jj();
  function e(n, r, u) {
    r == "__proto__" && t ? t(n, r, {
      configurable: !0,
      enumerable: !0,
      value: u,
      writable: !0
    }) : n[r] = u;
  }
  return sg = e, sg;
}
var hg, cM;
function M9() {
  if (cM) return hg;
  cM = 1;
  var t = E9(), e = Qj(), n = xa();
  function r(u, l) {
    var c = {};
    return l = n(l, 3), e(u, function(s, h, d) {
      t(c, h, l(s, h, d));
    }), c;
  }
  return hg = r, hg;
}
var j9 = M9();
const C9 = /* @__PURE__ */ Qt(j9);
var dg, fM;
function D9() {
  if (fM) return dg;
  fM = 1;
  function t(e, n) {
    for (var r = -1, u = e == null ? 0 : e.length; ++r < u; )
      if (!n(e[r], r, e))
        return !1;
    return !0;
  }
  return dg = t, dg;
}
var vg, sM;
function P9() {
  if (sM) return vg;
  sM = 1;
  var t = m0();
  function e(n, r) {
    var u = !0;
    return t(n, function(l, c, s) {
      return u = !!r(l, c, s), u;
    }), u;
  }
  return vg = e, vg;
}
var pg, hM;
function N9() {
  if (hM) return pg;
  hM = 1;
  var t = D9(), e = P9(), n = xa(), r = Je(), u = Ls();
  function l(c, s, h) {
    var d = r(c) ? t : e;
    return h && u(c, s, h) && (s = void 0), d(c, n(s, 3));
  }
  return pg = l, pg;
}
var R9 = N9();
const wD = /* @__PURE__ */ Qt(R9);
var q9 = ["x", "y"];
function Pl(t) {
  "@babel/helpers - typeof";
  return Pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pl(t);
}
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
function Go(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dM(Object(n), !0).forEach(function(r) {
      z9(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dM(Object(n)).forEach(function(r) {
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
  return Pl(e) == "symbol" ? e : e + "";
}
function B9(t, e) {
  if (Pl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Pl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function L9(t, e) {
  if (t == null) return {};
  var n = U9(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function U9(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function k9(t, e) {
  var n = t.x, r = t.y, u = L9(t, q9), l = "".concat(n), c = parseInt(l, 10), s = "".concat(r), h = parseInt(s, 10), d = "".concat(e.height || u.height), y = parseInt(d, 10), p = "".concat(e.width || u.width), g = parseInt(p, 10);
  return Go(Go(Go(Go(Go({}, e), u), c ? {
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
function vM(t) {
  return /* @__PURE__ */ B.createElement(JH, Eb({
    shapeType: "rectangle",
    propTransformer: k9,
    activeClassName: "recharts-active-bar"
  }, t));
}
var H9 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(r, u) {
    if (typeof e == "number") return e;
    var l = st(r) || K3(r);
    return l ? e(r, u) : (l || ni(), n);
  };
}, I9 = ["value", "background"], TD;
function Su(t) {
  "@babel/helpers - typeof";
  return Su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Su(t);
}
function G9(t, e) {
  if (t == null) return {};
  var n = Y9(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function pM(t, e) {
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
    e % 2 ? pM(Object(n), !0).forEach(function(r) {
      ma(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function X9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, MD(r.key), r);
  }
}
function K9(t, e, n) {
  return e && yM(t.prototype, e), n && yM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function V9(t, e, n) {
  return e = ms(e), F9(t, ED() ? Reflect.construct(e, n || [], ms(t).constructor) : e.apply(t, n));
}
function F9(t, e) {
  if (e && (Su(e) === "object" || typeof e == "function"))
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
function ED() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ED = function() {
    return !!t;
  })();
}
function ms(t) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ms(t);
}
function Q9(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Mb(t, e);
}
function Mb(t, e) {
  return Mb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Mb(t, e);
}
function ma(t, e, n) {
  return e = MD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function MD(t) {
  var e = W9(t, "string");
  return Su(e) == "symbol" ? e : e + "";
}
function W9(t, e) {
  if (Su(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Su(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ci = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    X9(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = V9(this, e, [].concat(u)), ma(n, "state", {
      isAnimationFinished: !1
    }), ma(n, "id", qu("recharts-bar-")), ma(n, "handleAnimationEnd", function() {
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
      var u = this, l = this.props, c = l.shape, s = l.dataKey, h = l.activeIndex, d = l.activeBar, y = Et(this.props, !1);
      return r && r.map(function(p, g) {
        var b = g === h, O = b ? d : c, _ = me(me(me({}, y), p), {}, {
          isActive: b,
          option: O,
          index: g,
          dataKey: s,
          onAnimationStart: u.handleAnimationStart,
          onAnimationEnd: u.handleAnimationEnd
        });
        return /* @__PURE__ */ B.createElement(Jt, ys({
          className: "recharts-bar-rectangle"
        }, Cf(u.props, p, g), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(p == null ? void 0 : p.x, "-").concat(p == null ? void 0 : p.y, "-").concat(p == null ? void 0 : p.value, "-").concat(g)
        }), /* @__PURE__ */ B.createElement(vM, _));
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
      }, function(b) {
        var O = b.t, _ = l.map(function(x, T) {
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
        return /* @__PURE__ */ B.createElement(Jt, null, r.renderRectanglesStatically(_));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var r = this.props, u = r.data, l = r.isAnimationActive, c = this.state.prevData;
      return l && u && u.length && (!c || !yu(c, u)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(u);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var r = this, u = this.props, l = u.data, c = u.dataKey, s = u.activeIndex, h = Et(this.props.background, !1);
      return l.map(function(d, y) {
        d.value;
        var p = d.background, g = G9(d, I9);
        if (!p)
          return null;
        var b = me(me(me(me(me({}, g), {}, {
          fill: "#eee"
        }, p), h), Cf(r.props, d, y)), {}, {
          onAnimationStart: r.handleAnimationStart,
          onAnimationEnd: r.handleAnimationEnd,
          dataKey: c,
          index: y,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ B.createElement(vM, ys({
          key: "background-bar-".concat(y),
          option: r.props.background,
          isActive: y === s
        }, b));
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
      var g = d === "vertical" ? c[0].height / 2 : c[0].width / 2, b = function(x, T) {
        var w = Array.isArray(x.value) ? x.value[1] : x.value;
        return {
          x: x.x,
          y: x.y,
          value: w,
          errorVal: Ge(x, T)
        };
      }, O = {
        clipPath: r ? "url(#clipPath-".concat(u, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, O, p.map(function(_) {
        return /* @__PURE__ */ B.cloneElement(_, {
          key: "error-bar-".concat(u, "-").concat(_.props.dataKey),
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
      var r = this.props, u = r.hide, l = r.data, c = r.className, s = r.xAxis, h = r.yAxis, d = r.left, y = r.top, p = r.width, g = r.height, b = r.isAnimationActive, O = r.background, _ = r.id;
      if (u || !l || !l.length)
        return null;
      var x = this.state.isAnimationFinished, T = qt("recharts-bar", c), w = s && s.allowDataOverflow, M = h && h.allowDataOverflow, j = w || M, A = Mt(_) ? this.id : _;
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
})(rt.PureComponent);
TD = ci;
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
  var e = t.props, n = t.item, r = t.barPosition, u = t.bandSize, l = t.xAxis, c = t.yAxis, s = t.xAxisTicks, h = t.yAxisTicks, d = t.stackedData, y = t.dataStartIndex, p = t.displayedData, g = t.offset, b = s5(r, n);
  if (!b)
    return null;
  var O = e.layout, _ = n.type.defaultProps, x = _ !== void 0 ? me(me({}, _), n.props) : n.props, T = x.dataKey, w = x.children, M = x.minPointSize, j = O === "horizontal" ? c : l, A = d ? j.scale.domain() : null, E = b5({
    numericAxis: j
  }), D = Cn(w, x0), R = p.map(function(z, F) {
    var U, $, K, Z, V, N;
    d ? U = h5(d[y + F], A) : (U = Ge(z, T), Array.isArray(U) || (U = [E, U]));
    var I = H9(M, TD.defaultProps.minPointSize)(U[1], F);
    if (O === "horizontal") {
      var W, ut = [c.scale(U[0]), c.scale(U[1])], lt = ut[0], P = ut[1];
      $ = t2({
        axis: l,
        ticks: s,
        bandSize: u,
        offset: b.offset,
        entry: z,
        index: F
      }), K = (W = P ?? lt) !== null && W !== void 0 ? W : void 0, Z = b.size;
      var k = lt - P;
      if (V = Number.isNaN(k) ? 0 : k, N = {
        x: $,
        y: c.y,
        width: Z,
        height: c.height
      }, Math.abs(I) > 0 && Math.abs(V) < Math.abs(I)) {
        var et = Hn(V || I) * (Math.abs(I) - Math.abs(V));
        K -= et, V += et;
      }
    } else {
      var ft = [l.scale(U[0]), l.scale(U[1])], vt = ft[0], mt = ft[1];
      if ($ = vt, K = t2({
        axis: c,
        ticks: h,
        bandSize: u,
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
      value: d ? U : U[1],
      payload: z,
      background: N
    }, D && D[F] && D[F].props), {}, {
      tooltipPayload: [fD(n, z)],
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
function J9(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, jD(r.key), r);
  }
}
function t7(t, e, n) {
  return e && mM(t.prototype, e), n && mM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function gM(t, e) {
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
    e % 2 ? gM(Object(n), !0).forEach(function(r) {
      Ws(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ws(t, e, n) {
  return e = jD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function jD(t) {
  var e = e7(t, "string");
  return Nl(e) == "symbol" ? e : e + "";
}
function e7(t, e) {
  if (Nl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Nl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var K0 = function(e, n, r, u, l) {
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
    var _ = n[O], x = _.orientation, T = _.domain, w = _.padding, M = w === void 0 ? {} : w, j = _.mirror, A = _.reversed, E = "".concat(x).concat(j ? "Mirror" : ""), D, R, z, F, U;
    if (_.type === "number" && (_.padding === "gap" || _.padding === "no-gap")) {
      var $ = T[1] - T[0], K = 1 / 0, Z = _.categoricalDomain.sort(Z3);
      if (Z.forEach(function(ft, vt) {
        vt > 0 && (K = Math.min((ft || 0) - (Z[vt - 1] || 0), K));
      }), Number.isFinite(K)) {
        var V = K / $, N = _.layout === "vertical" ? r.height : r.width;
        if (_.padding === "gap" && (D = V * N / 2), _.padding === "no-gap") {
          var I = ti(e.barCategoryGap, V * N), W = V * N / 2;
          D = W - I - (W - I) / N * I;
        }
      }
    }
    u === "xAxis" ? R = [r.left + (M.left || 0) + (D || 0), r.left + r.width - (M.right || 0) - (D || 0)] : u === "yAxis" ? R = h === "horizontal" ? [r.top + r.height - (M.bottom || 0), r.top + (M.top || 0)] : [r.top + (M.top || 0) + (D || 0), r.top + r.height - (M.bottom || 0) - (D || 0)] : R = _.range, A && (R = [R[1], R[0]]);
    var ut = c5(_, l, g), lt = ut.scale, P = ut.realScaleType;
    lt.domain(T).range(R), f5(lt);
    var k = g5(lt, Ln(Ln({}, _), {}, {
      realScaleType: P
    }));
    u === "xAxis" ? (U = x === "top" && !j || x === "bottom" && j, z = r.left, F = p[E] - U * _.height) : u === "yAxis" && (U = x === "left" && !j || x === "right" && j, z = p[E] - U * _.width, F = r.top);
    var et = Ln(Ln(Ln({}, _), k), {}, {
      realScaleType: P,
      x: z,
      y: F,
      scale: lt,
      width: u === "xAxis" ? r.width : _.width,
      height: u === "yAxis" ? r.height : _.height
    });
    return et.bandSize = rs(et, k), !_.hide && u === "xAxis" ? p[E] += (U ? -1 : 1) * et.height : _.hide || (p[E] += (U ? -1 : 1) * et.width), Ln(Ln({}, b), {}, Ws({}, O, et));
  }, {});
}, CD = function(e, n) {
  var r = e.x, u = e.y, l = n.x, c = n.y;
  return {
    x: Math.min(r, l),
    y: Math.min(u, c),
    width: Math.abs(l - r),
    height: Math.abs(c - u)
  };
}, n7 = function(e) {
  var n = e.x1, r = e.y1, u = e.x2, l = e.y2;
  return CD({
    x: n,
    y: r
  }, {
    x: u,
    y: l
  });
}, DD = /* @__PURE__ */ (function() {
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
Ws(DD, "EPS", 1e-4);
var V0 = function(e) {
  var n = Object.keys(e).reduce(function(r, u) {
    return Ln(Ln({}, r), {}, Ws({}, u, DD.create(e[u])));
  }, {});
  return Ln(Ln({}, n), {}, {
    apply: function(u) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = l.bandAware, s = l.position;
      return C9(u, function(h, d) {
        return n[d].apply(h, {
          bandAware: c,
          position: s
        });
      });
    },
    isInRange: function(u) {
      return wD(u, function(l, c) {
        return n[c].isInRange(l);
      });
    }
  });
};
function r7(t) {
  return (t % 180 + 180) % 180;
}
var a7 = function(e) {
  var n = e.width, r = e.height, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = r7(u), c = l * Math.PI / 180, s = Math.atan(r / n), h = c > s && c < Math.PI - s ? r / Math.sin(c) : n / Math.cos(c);
  return Math.abs(h);
}, yg, bM;
function i7() {
  if (bM) return yg;
  bM = 1;
  var t = xa(), e = Bl(), n = $s();
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
  return yg = r, yg;
}
var mg, xM;
function u7() {
  if (xM) return mg;
  xM = 1;
  var t = SD();
  function e(n) {
    var r = t(n), u = r % 1;
    return r === r ? u ? r - u : r : 0;
  }
  return mg = e, mg;
}
var gg, SM;
function o7() {
  if (SM) return gg;
  SM = 1;
  var t = Xj(), e = xa(), n = u7(), r = Math.max;
  function u(l, c, s) {
    var h = l == null ? 0 : l.length;
    if (!h)
      return -1;
    var d = s == null ? 0 : n(s);
    return d < 0 && (d = r(h + d, 0)), t(l, e(c, 3), d);
  }
  return gg = u, gg;
}
var bg, _M;
function l7() {
  if (_M) return bg;
  _M = 1;
  var t = i7(), e = o7(), n = t(e);
  return bg = n, bg;
}
var c7 = l7();
const f7 = /* @__PURE__ */ Qt(c7);
var s7 = oj();
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
}), F0 = /* @__PURE__ */ rt.createContext(void 0), Z0 = /* @__PURE__ */ rt.createContext(void 0), PD = /* @__PURE__ */ rt.createContext(void 0), ND = /* @__PURE__ */ rt.createContext({}), RD = /* @__PURE__ */ rt.createContext(void 0), qD = /* @__PURE__ */ rt.createContext(0), zD = /* @__PURE__ */ rt.createContext(0), OM = function(e) {
  var n = e.state, r = n.xAxisMap, u = n.yAxisMap, l = n.offset, c = e.clipPathId, s = e.children, h = e.width, d = e.height, y = d7(l);
  return /* @__PURE__ */ B.createElement(F0.Provider, {
    value: r
  }, /* @__PURE__ */ B.createElement(Z0.Provider, {
    value: u
  }, /* @__PURE__ */ B.createElement(ND.Provider, {
    value: l
  }, /* @__PURE__ */ B.createElement(PD.Provider, {
    value: y
  }, /* @__PURE__ */ B.createElement(RD.Provider, {
    value: c
  }, /* @__PURE__ */ B.createElement(qD.Provider, {
    value: d
  }, /* @__PURE__ */ B.createElement(zD.Provider, {
    value: h
  }, s)))))));
}, v7 = function() {
  return rt.useContext(RD);
}, $D = function(e) {
  var n = rt.useContext(F0);
  n == null && ni();
  var r = n[e];
  return r == null && ni(), r;
}, p7 = function() {
  var e = rt.useContext(F0);
  return pa(e);
}, y7 = function() {
  var e = rt.useContext(Z0), n = f7(e, function(r) {
    return wD(r.domain, Number.isFinite);
  });
  return n || pa(e);
}, BD = function(e) {
  var n = rt.useContext(Z0);
  n == null && ni();
  var r = n[e];
  return r == null && ni(), r;
}, m7 = function() {
  var e = rt.useContext(PD);
  return e;
}, g7 = function() {
  return rt.useContext(ND);
}, Q0 = function() {
  return rt.useContext(zD);
}, W0 = function() {
  return rt.useContext(qD);
};
function _u(t) {
  "@babel/helpers - typeof";
  return _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _u(t);
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
  return e = gs(e), O7(t, LD() ? Reflect.construct(e, n || [], gs(t).constructor) : e.apply(t, n));
}
function O7(t, e) {
  if (e && (_u(e) === "object" || typeof e == "function"))
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
function gs(t) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gs(t);
}
function w7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && jb(t, e);
}
function jb(t, e) {
  return jb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, jb(t, e);
}
function AM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? AM(Object(n), !0).forEach(function(r) {
      J0(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : AM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function J0(t, e, n) {
  return e = UD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function UD(t) {
  var e = T7(t, "string");
  return _u(e) == "symbol" ? e : e + "";
}
function T7(t, e) {
  if (_u(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (_u(r) != "object") return r;
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
    if (typeof t == "string") return TM(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TM(t, e);
  }
}
function TM(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function C7(t, e) {
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
function D7(t) {
  if (Array.isArray(t)) return t;
}
function Cb() {
  return Cb = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Cb.apply(this, arguments);
}
var P7 = function(e, n) {
  var r;
  return /* @__PURE__ */ B.isValidElement(e) ? r = /* @__PURE__ */ B.cloneElement(e, n) : At(e) ? r = e(n) : r = /* @__PURE__ */ B.createElement("line", Cb({}, n, {
    className: "recharts-reference-line-line"
  })), r;
}, N7 = function(e, n, r, u, l, c, s, h, d) {
  var y = l.x, p = l.y, g = l.width, b = l.height;
  if (r) {
    var O = d.y, _ = e.y.apply(O, {
      position: c
    });
    if (Jn(d, "discard") && !e.y.isInRange(_))
      return null;
    var x = [{
      x: y + g,
      y: _
    }, {
      x: y,
      y: _
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
  if (u) {
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
  var e = t.x, n = t.y, r = t.segment, u = t.xAxisId, l = t.yAxisId, c = t.shape, s = t.className, h = t.alwaysShow, d = v7(), y = $D(u), p = BD(l), g = m7();
  if (!d || !g)
    return null;
  Dr(h === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var b = V0({
    x: y.scale,
    y: p.scale
  }), O = _e(e), _ = _e(n), x = r && r.length === 2, T = N7(b, O, _, x, g, t.position, y.orientation, p.orientation, t);
  if (!T)
    return null;
  var w = E7(T, 2), M = w[0], j = M.x, A = M.y, E = w[1], D = E.x, R = E.y, z = Jn(t, "hidden") ? "url(#".concat(d, ")") : void 0, F = wM(wM({
    clipPath: z
  }, Et(t, !0)), {}, {
    x1: j,
    y1: A,
    x2: D,
    y2: R
  });
  return /* @__PURE__ */ B.createElement(Jt, {
    className: qt("recharts-reference-line", s)
  }, P7(c, F), Ue.renderCallByParent(t, n7({
    x1: j,
    y1: A,
    x2: D,
    y2: R
  })));
}
var t1 = /* @__PURE__ */ (function(t) {
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
J0(t1, "displayName", "ReferenceLine");
J0(t1, "defaultProps", {
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
function Ou(t) {
  "@babel/helpers - typeof";
  return Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ou(t);
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
function q7(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function z7(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, HD(r.key), r);
  }
}
function $7(t, e, n) {
  return e && z7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function B7(t, e, n) {
  return e = bs(e), L7(t, kD() ? Reflect.construct(e, n || [], bs(t).constructor) : e.apply(t, n));
}
function L7(t, e) {
  if (e && (Ou(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U7(t);
}
function U7(t) {
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
function bs(t) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, bs(t);
}
function k7(t, e) {
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
  var e = H7(t, "string");
  return Ou(e) == "symbol" ? e : e + "";
}
function H7(t, e) {
  if (Ou(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ou(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var I7 = function(e) {
  var n = e.x, r = e.y, u = e.xAxis, l = e.yAxis, c = V0({
    x: u.scale,
    y: l.scale
  }), s = c.apply({
    x: n,
    y: r
  }, {
    bandAware: !0
  });
  return Jn(e, "discard") && !c.isInRange(s) ? null : s;
}, th = /* @__PURE__ */ (function(t) {
  function e() {
    return q7(this, e), B7(this, e, arguments);
  }
  return k7(e, t), $7(e, [{
    key: "render",
    value: function() {
      var r = this.props, u = r.x, l = r.y, c = r.r, s = r.alwaysShow, h = r.clipPathId, d = _e(u), y = _e(l);
      if (Dr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !d || !y)
        return null;
      var p = I7(this.props);
      if (!p)
        return null;
      var g = p.x, b = p.y, O = this.props, _ = O.shape, x = O.className, T = Jn(this.props, "hidden") ? "url(#".concat(h, ")") : void 0, w = MM(MM({
        clipPath: T
      }, Et(this.props, !0)), {}, {
        cx: g,
        cy: b
      });
      return /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-reference-dot", x)
      }, e.renderDot(_, w), Ue.renderCallByParent(this.props, {
        x: g - c,
        y: b - c,
        width: 2 * c,
        height: 2 * c
      }));
    }
  }]);
})(B.Component);
Js(th, "displayName", "ReferenceDot");
Js(th, "defaultProps", {
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
Js(th, "renderDot", function(t, e) {
  var n;
  return /* @__PURE__ */ B.isValidElement(t) ? n = /* @__PURE__ */ B.cloneElement(t, e) : At(t) ? n = t(e) : n = /* @__PURE__ */ B.createElement(Fs, Db({}, e, {
    cx: e.cx,
    cy: e.cy,
    className: "recharts-reference-dot-dot"
  })), n;
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
function Au(t) {
  "@babel/helpers - typeof";
  return Au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Au(t);
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
function CM(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? jM(Object(n), !0).forEach(function(r) {
      eh(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jM(Object(n)).forEach(function(r) {
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
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, GD(r.key), r);
  }
}
function X7(t, e, n) {
  return e && Y7(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function K7(t, e, n) {
  return e = xs(e), V7(t, ID() ? Reflect.construct(e, n || [], xs(t).constructor) : e.apply(t, n));
}
function V7(t, e) {
  if (e && (Au(e) === "object" || typeof e == "function"))
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
function ID() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ID = function() {
    return !!t;
  })();
}
function xs(t) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xs(t);
}
function Z7(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Rb(t, e);
}
function Rb(t, e) {
  return Rb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Rb(t, e);
}
function eh(t, e, n) {
  return e = GD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function GD(t) {
  var e = Q7(t, "string");
  return Au(e) == "symbol" ? e : e + "";
}
function Q7(t, e) {
  if (Au(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Au(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var W7 = function(e, n, r, u, l) {
  var c = l.x1, s = l.x2, h = l.y1, d = l.y2, y = l.xAxis, p = l.yAxis;
  if (!y || !p) return null;
  var g = V0({
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
    y: u ? g.y.apply(d, {
      position: "end"
    }) : g.y.rangeMax
  };
  return Jn(l, "discard") && (!g.isInRange(b) || !g.isInRange(O)) ? null : CD(b, O);
}, nh = /* @__PURE__ */ (function(t) {
  function e() {
    return G7(this, e), K7(this, e, arguments);
  }
  return Z7(e, t), X7(e, [{
    key: "render",
    value: function() {
      var r = this.props, u = r.x1, l = r.x2, c = r.y1, s = r.y2, h = r.className, d = r.alwaysShow, y = r.clipPathId;
      Dr(d === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var p = _e(u), g = _e(l), b = _e(c), O = _e(s), _ = this.props.shape;
      if (!p && !g && !b && !O && !_)
        return null;
      var x = W7(p, g, b, O, this.props);
      if (!x && !_)
        return null;
      var T = Jn(this.props, "hidden") ? "url(#".concat(y, ")") : void 0;
      return /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-reference-area", h)
      }, e.renderRect(_, CM(CM({
        clipPath: T
      }, Et(this.props, !0)), x)), Ue.renderCallByParent(this.props, x));
    }
  }]);
})(B.Component);
eh(nh, "displayName", "ReferenceArea");
eh(nh, "defaultProps", {
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
eh(nh, "renderRect", function(t, e) {
  var n;
  return /* @__PURE__ */ B.isValidElement(t) ? n = /* @__PURE__ */ B.cloneElement(t, e) : At(t) ? n = t(e) : n = /* @__PURE__ */ B.createElement(X0, Nb({}, e, {
    className: "recharts-reference-area-rect"
  })), n;
});
function YD(t, e, n) {
  if (e < 1)
    return [];
  if (e === 1 && n === void 0)
    return t;
  for (var r = [], u = 0; u < t.length; u += e)
    r.push(t[u]);
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
  var r = n === "width", u = t.x, l = t.y, c = t.width, s = t.height;
  return e === 1 ? {
    start: r ? u : l,
    end: r ? u + c : l + s
  } : {
    start: r ? u + c : l + s,
    end: r ? u : l
  };
}
function Ss(t, e, n, r, u) {
  if (t * e < t * r || t * e > t * u)
    return !1;
  var l = n();
  return t * (e - t * l / 2 - r) >= 0 && t * (e + t * l / 2 - u) <= 0;
}
function eI(t, e) {
  return YD(t, e + 1);
}
function nI(t, e, n, r, u) {
  for (var l = (r || []).slice(), c = e.start, s = e.end, h = 0, d = 1, y = c, p = function() {
    var O = r == null ? void 0 : r[h];
    if (O === void 0)
      return {
        v: YD(r, d)
      };
    var _ = h, x, T = function() {
      return x === void 0 && (x = n(O, _)), x;
    }, w = O.coordinate, M = h === 0 || Ss(t, w, T, y, s);
    M || (h = 0, y = c, d += 1), M && (y = w + t * (T() / 2 + u), h += d);
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
function DM(t, e) {
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
    e % 2 ? DM(Object(n), !0).forEach(function(r) {
      rI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : DM(Object(n)).forEach(function(r) {
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
  return Rl(e) == "symbol" ? e : e + "";
}
function iI(t, e) {
  if (Rl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Rl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function uI(t, e, n, r, u) {
  for (var l = (r || []).slice(), c = l.length, s = e.start, h = e.end, d = function(g) {
    var b = l[g], O, _ = function() {
      return O === void 0 && (O = n(b, g)), O;
    };
    if (g === c - 1) {
      var x = t * (b.coordinate + t * _() / 2 - h);
      l[g] = b = Le(Le({}, b), {}, {
        tickCoord: x > 0 ? b.coordinate - x * t : b.coordinate
      });
    } else
      l[g] = b = Le(Le({}, b), {}, {
        tickCoord: b.coordinate
      });
    var T = Ss(t, b.tickCoord, _, s, h);
    T && (h = b.tickCoord - t * (_() / 2 + u), l[g] = Le(Le({}, b), {}, {
      isShow: !0
    }));
  }, y = c - 1; y >= 0; y--)
    d(y);
  return l;
}
function oI(t, e, n, r, u, l) {
  var c = (r || []).slice(), s = c.length, h = e.start, d = e.end;
  if (l) {
    var y = r[s - 1], p = n(y, s - 1), g = t * (y.coordinate + t * p / 2 - d);
    c[s - 1] = y = Le(Le({}, y), {}, {
      tickCoord: g > 0 ? y.coordinate - g * t : y.coordinate
    });
    var b = Ss(t, y.tickCoord, function() {
      return p;
    }, h, d);
    b && (d = y.tickCoord - t * (p / 2 + u), c[s - 1] = Le(Le({}, y), {}, {
      isShow: !0
    }));
  }
  for (var O = l ? s - 1 : s, _ = function(w) {
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
    var D = Ss(t, M.tickCoord, A, h, d);
    D && (h = M.tickCoord + t * (A() / 2 + u), c[w] = Le(Le({}, M), {}, {
      isShow: !0
    }));
  }, x = 0; x < O; x++)
    _(x);
  return c;
}
function e1(t, e, n) {
  var r = t.tick, u = t.ticks, l = t.viewBox, c = t.minTickGap, s = t.orientation, h = t.interval, d = t.tickFormatter, y = t.unit, p = t.angle;
  if (!u || !u.length || !r)
    return [];
  if (st(h) || ii.isSsr)
    return eI(u, typeof h == "number" && st(h) ? h : 0);
  var g = [], b = s === "top" || s === "bottom" ? "width" : "height", O = y && b === "width" ? Qo(y, {
    fontSize: e,
    letterSpacing: n
  }) : {
    width: 0,
    height: 0
  }, _ = function(M, j) {
    var A = At(d) ? d(M.value, j) : M.value;
    return b === "width" ? J7(Qo(A, {
      fontSize: e,
      letterSpacing: n
    }), O, p) : Qo(A, {
      fontSize: e,
      letterSpacing: n
    })[b];
  }, x = u.length >= 2 ? Hn(u[1].coordinate - u[0].coordinate) : 1, T = tI(l, x, b);
  return h === "equidistantPreserveStart" ? nI(x, T, _, u, c) : (h === "preserveStart" || h === "preserveStartEnd" ? g = oI(x, T, _, u, c, h === "preserveStartEnd") : g = uI(x, T, _, u, c), g.filter(function(w) {
    return w.isShow;
  }));
}
var lI = ["viewBox"], cI = ["viewBox"], fI = ["ticks"];
function wu(t) {
  "@babel/helpers - typeof";
  return wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wu(t);
}
function tu() {
  return tu = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, tu.apply(this, arguments);
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
function xe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? PM(Object(n), !0).forEach(function(r) {
      n1(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : PM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xg(t, e) {
  if (t == null) return {};
  var n = sI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function NM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, KD(r.key), r);
  }
}
function dI(t, e, n) {
  return e && NM(t.prototype, e), n && NM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function vI(t, e, n) {
  return e = _s(e), pI(t, XD() ? Reflect.construct(e, n || [], _s(t).constructor) : e.apply(t, n));
}
function pI(t, e) {
  if (e && (wu(e) === "object" || typeof e == "function"))
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
function XD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XD = function() {
    return !!t;
  })();
}
function _s(t) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _s(t);
}
function mI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && qb(t, e);
}
function qb(t, e) {
  return qb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, qb(t, e);
}
function n1(t, e, n) {
  return e = KD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function KD(t) {
  var e = gI(t, "string");
  return wu(e) == "symbol" ? e : e + "";
}
function gI(t, e) {
  if (wu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (wu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Uu = /* @__PURE__ */ (function(t) {
  function e(n) {
    var r;
    return hI(this, e), r = vI(this, e, [n]), r.state = {
      fontSize: "",
      letterSpacing: ""
    }, r;
  }
  return mI(e, t), dI(e, [{
    key: "shouldComponentUpdate",
    value: function(r, u) {
      var l = r.viewBox, c = xg(r, lI), s = this.props, h = s.viewBox, d = xg(s, cI);
      return !nu(l, h) || !nu(c, d) || !nu(u, this.state);
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
      var u = this.props, l = u.x, c = u.y, s = u.width, h = u.height, d = u.orientation, y = u.tickSize, p = u.mirror, g = u.tickMargin, b, O, _, x, T, w, M = p ? -1 : 1, j = r.tickSize || y, A = st(r.tickCoord) ? r.tickCoord : r.coordinate;
      switch (d) {
        case "top":
          b = O = r.coordinate, x = c + +!p * h, _ = x - M * j, w = _ - M * g, T = A;
          break;
        case "left":
          _ = x = r.coordinate, O = l + +!p * s, b = O - M * j, T = b - M * g, w = A;
          break;
        case "right":
          _ = x = r.coordinate, O = l + +p * s, b = O + M * j, T = b + M * g, w = A;
          break;
        default:
          b = O = r.coordinate, x = c + +p * h, _ = x + M * j, w = _ + M * g, T = A;
          break;
      }
      return {
        line: {
          x1: b,
          y1: _,
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
        var b = +(h === "left" && !d || h === "right" && d);
        p = xe(xe({}, p), {}, {
          x1: u + b * c,
          y1: l,
          x2: u + b * c,
          y2: l + s
        });
      }
      return /* @__PURE__ */ B.createElement("line", tu({}, p, {
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
        var c = this, s = this.props, h = s.tickLine, d = s.stroke, y = s.tick, p = s.tickFormatter, g = s.unit, b = e1(xe(xe({}, this.props), {}, {
          ticks: r
        }), u, l), O = this.getTickTextAnchor(), _ = this.getTickVerticalAnchor(), x = Et(this.props, !1), T = Et(y, !1), w = xe(xe({}, x), {}, {
          fill: "none"
        }, Et(h, !1)), M = b.map(function(j, A) {
          var E = c.getTickLineCoord(j), D = E.line, R = E.tick, z = xe(xe(xe(xe({
            textAnchor: O,
            verticalAnchor: _
          }, x), {}, {
            stroke: "none",
            fill: d
          }, T), R), {}, {
            index: A,
            payload: j,
            visibleTicksCount: b.length,
            tickFormatter: p
          });
          return /* @__PURE__ */ B.createElement(Jt, tu({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(j.value, "-").concat(j.coordinate, "-").concat(j.tickCoord)
          }, Cf(c.props, j, A)), h && /* @__PURE__ */ B.createElement("line", tu({}, w, D, {
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
      var r = this, u = this.props, l = u.axisLine, c = u.width, s = u.height, h = u.ticksGenerator, d = u.className, y = u.hide;
      if (y)
        return null;
      var p = this.props, g = p.ticks, b = xg(p, fI), O = g;
      return At(h) && (O = g && g.length > 0 ? h(this.props) : h(b)), c <= 0 || s <= 0 || !O || !O.length ? null : /* @__PURE__ */ B.createElement(Jt, {
        className: qt("recharts-cartesian-axis", d),
        ref: function(x) {
          r.layerReference = x;
        }
      }, l && this.renderAxisLine(), this.renderTicks(O, this.state.fontSize, this.state.letterSpacing), Ue.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, u, l) {
      var c, s = qt(u.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ B.isValidElement(r) ? c = /* @__PURE__ */ B.cloneElement(r, xe(xe({}, u), {}, {
        className: s
      })) : At(r) ? c = r(xe(xe({}, u), {}, {
        className: s
      })) : c = /* @__PURE__ */ B.createElement(kf, tu({}, u, {
        className: "recharts-cartesian-axis-tick-value"
      }), l), c;
    }
  }]);
})(rt.Component);
n1(Uu, "displayName", "CartesianAxis");
n1(Uu, "defaultProps", {
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
function RM(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? RM(Object(n), !0).forEach(function(r) {
      SI(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : RM(Object(n)).forEach(function(r) {
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
function qM(t, e) {
  if (t == null) return {};
  var n = AI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function VD(t, e) {
  var n;
  if (/* @__PURE__ */ B.isValidElement(t))
    n = /* @__PURE__ */ B.cloneElement(t, e);
  else if (At(t))
    n = t(e);
  else {
    var r = e.x1, u = e.y1, l = e.x2, c = e.y2, s = e.key, h = qM(e, bI), d = Et(h, !1);
    d.offset;
    var y = qM(d, xI);
    n = /* @__PURE__ */ B.createElement("line", Va({}, y, {
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
function TI(t) {
  var e = t.x, n = t.width, r = t.horizontal, u = r === void 0 ? !0 : r, l = t.horizontalPoints;
  if (!u || !l || !l.length)
    return null;
  var c = l.map(function(s, h) {
    var d = ke(ke({}, t), {}, {
      x1: e,
      y1: s,
      x2: e + n,
      y2: s,
      key: "line-".concat(h),
      index: h
    });
    return VD(u, d);
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function EI(t) {
  var e = t.y, n = t.height, r = t.vertical, u = r === void 0 ? !0 : r, l = t.verticalPoints;
  if (!u || !l || !l.length)
    return null;
  var c = l.map(function(s, h) {
    var d = ke(ke({}, t), {}, {
      x1: s,
      y1: e,
      x2: s,
      y2: e + n,
      key: "line-".concat(h),
      index: h
    });
    return VD(u, d);
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function MI(t) {
  var e = t.horizontalFill, n = t.fillOpacity, r = t.x, u = t.y, l = t.width, c = t.height, s = t.horizontalPoints, h = t.horizontal, d = h === void 0 ? !0 : h;
  if (!d || !e || !e.length)
    return null;
  var y = s.map(function(g) {
    return Math.round(g + u - u);
  }).sort(function(g, b) {
    return g - b;
  });
  u !== y[0] && y.unshift(0);
  var p = y.map(function(g, b) {
    var O = !y[b + 1], _ = O ? u + c - g : y[b + 1] - g;
    if (_ <= 0)
      return null;
    var x = b % e.length;
    return /* @__PURE__ */ B.createElement("rect", {
      key: "react-".concat(b),
      y: g,
      x: r,
      height: _,
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
  var e = t.vertical, n = e === void 0 ? !0 : e, r = t.verticalFill, u = t.fillOpacity, l = t.x, c = t.y, s = t.width, h = t.height, d = t.verticalPoints;
  if (!n || !r || !r.length)
    return null;
  var y = d.map(function(g) {
    return Math.round(g + l - l);
  }).sort(function(g, b) {
    return g - b;
  });
  l !== y[0] && y.unshift(0);
  var p = y.map(function(g, b) {
    var O = !y[b + 1], _ = O ? l + s - g : y[b + 1] - g;
    if (_ <= 0)
      return null;
    var x = b % r.length;
    return /* @__PURE__ */ B.createElement("rect", {
      key: "react-".concat(b),
      x: g,
      y: c,
      width: _,
      height: h,
      stroke: "none",
      fill: r[x],
      fillOpacity: u,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ B.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, p);
}
var CI = function(e, n) {
  var r = e.xAxis, u = e.width, l = e.height, c = e.offset;
  return lD(e1(ke(ke(ke({}, Uu.defaultProps), r), {}, {
    ticks: Er(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: u,
      height: l
    }
  })), c.left, c.left + c.width, n);
}, DI = function(e, n) {
  var r = e.yAxis, u = e.width, l = e.height, c = e.offset;
  return lD(e1(ke(ke(ke({}, Uu.defaultProps), r), {}, {
    ticks: Er(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: u,
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
function Fo(t) {
  var e, n, r, u, l, c, s = Q0(), h = W0(), d = g7(), y = ke(ke({}, t), {}, {
    stroke: (e = t.stroke) !== null && e !== void 0 ? e : Qi.stroke,
    fill: (n = t.fill) !== null && n !== void 0 ? n : Qi.fill,
    horizontal: (r = t.horizontal) !== null && r !== void 0 ? r : Qi.horizontal,
    horizontalFill: (u = t.horizontalFill) !== null && u !== void 0 ? u : Qi.horizontalFill,
    vertical: (l = t.vertical) !== null && l !== void 0 ? l : Qi.vertical,
    verticalFill: (c = t.verticalFill) !== null && c !== void 0 ? c : Qi.verticalFill,
    x: st(t.x) ? t.x : d.left,
    y: st(t.y) ? t.y : d.top,
    width: st(t.width) ? t.width : d.width,
    height: st(t.height) ? t.height : d.height
  }), p = y.x, g = y.y, b = y.width, O = y.height, _ = y.syncWithTicks, x = y.horizontalValues, T = y.verticalValues, w = p7(), M = y7();
  if (!st(b) || b <= 0 || !st(O) || O <= 0 || !st(p) || p !== +p || !st(g) || g !== +g)
    return null;
  var j = y.verticalCoordinatesGenerator || CI, A = y.horizontalCoordinatesGenerator || DI, E = y.horizontalPoints, D = y.verticalPoints;
  if ((!E || !E.length) && At(A)) {
    var R = x && x.length, z = A({
      yAxis: M ? ke(ke({}, M), {}, {
        ticks: R ? x : M.ticks
      }) : void 0,
      width: s,
      height: h,
      offset: d
    }, R ? !0 : _);
    Dr(Array.isArray(z), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ri(z), "]")), Array.isArray(z) && (E = z);
  }
  if ((!D || !D.length) && At(j)) {
    var F = T && T.length, U = j({
      xAxis: w ? ke(ke({}, w), {}, {
        ticks: F ? T : w.ticks
      }) : void 0,
      width: s,
      height: h,
      offset: d
    }, F ? !0 : _);
    Dr(Array.isArray(U), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ri(U), "]")), Array.isArray(U) && (D = U);
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
Fo.displayName = "CartesianGrid";
var PI = ["type", "layout", "connectNulls", "ref"], NI = ["key"];
function Tu(t) {
  "@babel/helpers - typeof";
  return Tu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tu(t);
}
function zM(t, e) {
  if (t == null) return {};
  var n = RI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function fn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $M(Object(n), !0).forEach(function(r) {
      Un(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $M(Object(n)).forEach(function(r) {
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
    if (typeof t == "string") return zb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zb(t, e);
  }
}
function $I(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function BI(t) {
  if (Array.isArray(t)) return zb(t);
}
function zb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function LI(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function BM(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ZD(r.key), r);
  }
}
function UI(t, e, n) {
  return e && BM(t.prototype, e), n && BM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function kI(t, e, n) {
  return e = Os(e), HI(t, FD() ? Reflect.construct(e, n || [], Os(t).constructor) : e.apply(t, n));
}
function HI(t, e) {
  if (e && (Tu(e) === "object" || typeof e == "function"))
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
function FD() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (FD = function() {
    return !!t;
  })();
}
function Os(t) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Os(t);
}
function GI(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && $b(t, e);
}
function $b(t, e) {
  return $b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, $b(t, e);
}
function Un(t, e, n) {
  return e = ZD(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ZD(t) {
  var e = YI(t, "string");
  return Tu(e) == "symbol" ? e : e + "";
}
function YI(t, e) {
  if (Tu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Tu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Wa = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    LI(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = kI(this, e, [].concat(u)), Un(n, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Un(n, "generateSimpleStrokeDasharray", function(c, s) {
      return "".concat(s, "px ").concat(c - s, "px");
    }), Un(n, "getStrokeDasharray", function(c, s, h) {
      var d = h.reduce(function(T, w) {
        return T + w;
      });
      if (!d)
        return n.generateSimpleStrokeDasharray(s, c);
      for (var y = Math.floor(c / d), p = c % d, g = s - c, b = [], O = 0, _ = 0; O < h.length; _ += h[O], ++O)
        if (_ + h[O] > p) {
          b = [].concat(Wi(h.slice(0, O)), [p - _]);
          break;
        }
      var x = b.length % 2 === 0 ? [0, g] : [g];
      return [].concat(Wi(e.repeat(h, y)), Wi(b), x).map(function(T) {
        return "".concat(T, "px");
      }).join(", ");
    }), Un(n, "id", qu("recharts-line-")), Un(n, "pathRef", function(c) {
      n.mainCurve = c;
    }), Un(n, "handleAnimationEnd", function() {
      n.setState({
        isAnimationFinished: !0
      }), n.props.onAnimationEnd && n.props.onAnimationEnd();
    }), Un(n, "handleAnimationStart", function() {
      n.setState({
        isAnimationFinished: !1
      }), n.props.onAnimationStart && n.props.onAnimationStart();
    }), n;
  }
  return GI(e, t), UI(e, [{
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
      var g = function(_, x) {
        return {
          x: _.x,
          y: _.y,
          value: _.value,
          errorVal: Ge(_.payload, x)
        };
      }, b = {
        clipPath: r ? "url(#clipPath-".concat(u, ")") : null
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
    value: function(r, u, l) {
      var c = this.props.isAnimationActive;
      if (c && !this.state.isAnimationFinished)
        return null;
      var s = this.props, h = s.dot, d = s.points, y = s.dataKey, p = Et(this.props, !1), g = Et(h, !0), b = d.map(function(_, x) {
        var T = fn(fn(fn({
          key: "dot-".concat(x),
          r: 3
        }, p), g), {}, {
          index: x,
          cx: _.x,
          cy: _.y,
          value: _.value,
          dataKey: y,
          payload: _.payload,
          points: d
        });
        return e.renderDotItem(h, T);
      }), O = {
        clipPath: r ? "url(#clipPath-".concat(u ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, el({
        className: "recharts-line-dots",
        key: "dots"
      }, O), b);
    }
  }, {
    key: "renderCurveStatically",
    value: function(r, u, l, c) {
      var s = this.props, h = s.type, d = s.layout, y = s.connectNulls;
      s.ref;
      var p = zM(s, PI), g = fn(fn(fn({}, Et(p, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: u ? "url(#clipPath-".concat(l, ")") : null,
        points: r
      }, c), {}, {
        type: h,
        layout: d,
        connectNulls: y
      });
      return /* @__PURE__ */ B.createElement(uu, el({}, g, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(r, u) {
      var l = this, c = this.props, s = c.points, h = c.strokeDasharray, d = c.isAnimationActive, y = c.animationBegin, p = c.animationDuration, g = c.animationEasing, b = c.animationId, O = c.animateNewValues, _ = c.width, x = c.height, T = this.state, w = T.prevPoints, M = T.totalLength;
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
              var W = Re(_ * 2, $.x), ut = Re(x / 2, $.y);
              return fn(fn({}, $), {}, {
                x: W(A),
                y: ut(A)
              });
            }
            return fn(fn({}, $), {}, {
              x: $.x,
              y: $.y
            });
          });
          return l.renderCurveStatically(D, r, u);
        }
        var R = Re(0, M), z = R(A), F;
        if (h) {
          var U = "".concat(h).split(/[,\s]+/gim).map(function($) {
            return parseFloat($);
          });
          F = l.getStrokeDasharray(z, M, U);
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
      return s && c && c.length && (!d && y > 0 || !yu(d, c)) ? this.renderCurveWithAnimation(r, u) : this.renderCurveStatically(c, r, u);
    }
  }, {
    key: "render",
    value: function() {
      var r, u = this.props, l = u.hide, c = u.dot, s = u.points, h = u.className, d = u.xAxis, y = u.yAxis, p = u.top, g = u.left, b = u.width, O = u.height, _ = u.isAnimationActive, x = u.id;
      if (l || !s || !s.length)
        return null;
      var T = this.state.isAnimationFinished, w = s.length === 1, M = qt("recharts-line", h), j = d && d.allowDataOverflow, A = y && y.allowDataOverflow, E = j || A, D = Mt(x) ? this.id : x, R = (r = Et(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, z = R.r, F = z === void 0 ? 3 : z, U = R.strokeWidth, $ = U === void 0 ? 2 : U, K = hj(c) ? c : {}, Z = K.clipDot, V = Z === void 0 ? !0 : Z, N = F * 2 + $;
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
      }))) : null, !w && this.renderCurve(E, D), this.renderErrorBar(E, D), (w || c) && this.renderDots(E, V, D), (!_ || T) && Nr.renderCallByParent(this.props, s));
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
      for (var l = r.length % 2 !== 0 ? [].concat(Wi(r), [0]) : r, c = [], s = 0; s < u; ++s)
        c = [].concat(Wi(c), Wi(l));
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
        var c = u.key, s = zM(u, NI), h = qt("recharts-line-dot", typeof r != "boolean" ? r.className : "");
        l = /* @__PURE__ */ B.createElement(Fs, el({
          key: c
        }, s, {
          className: h
        }));
      }
      return l;
    }
  }]);
})(rt.PureComponent);
Un(Wa, "displayName", "Line");
Un(Wa, "defaultProps", {
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
Un(Wa, "getComposedData", function(t) {
  var e = t.props, n = t.xAxis, r = t.yAxis, u = t.xAxisTicks, l = t.yAxisTicks, c = t.dataKey, s = t.bandSize, h = t.displayedData, d = t.offset, y = e.layout, p = h.map(function(g, b) {
    var O = Ge(g, c);
    return y === "horizontal" ? {
      x: ns({
        axis: n,
        ticks: u,
        bandSize: s,
        entry: g,
        index: b
      }),
      y: Mt(O) ? null : r.scale(O),
      value: O,
      payload: g
    } : {
      x: Mt(O) ? null : n.scale(O),
      y: ns({
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
var XI = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], KI = ["key"], QD;
function Eu(t) {
  "@babel/helpers - typeof";
  return Eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Eu(t);
}
function WD(t, e) {
  if (t == null) return {};
  var n = VI(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function LM(t, e) {
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
    e % 2 ? LM(Object(n), !0).forEach(function(r) {
      Qn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : LM(Object(n)).forEach(function(r) {
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
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, tP(r.key), r);
  }
}
function ZI(t, e, n) {
  return e && UM(t.prototype, e), n && UM(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function QI(t, e, n) {
  return e = As(e), WI(t, JD() ? Reflect.construct(e, n || [], As(t).constructor) : e.apply(t, n));
}
function WI(t, e) {
  if (e && (Eu(e) === "object" || typeof e == "function"))
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
function As(t) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, As(t);
}
function tG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Bb(t, e);
}
function Bb(t, e) {
  return Bb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Bb(t, e);
}
function Qn(t, e, n) {
  return e = tP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function tP(t) {
  var e = eG(t, "string");
  return Eu(e) == "symbol" ? e : e + "";
}
function eG(t, e) {
  if (Eu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Eu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var tr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    FI(this, e);
    for (var r = arguments.length, u = new Array(r), l = 0; l < r; l++)
      u[l] = arguments[l];
    return n = QI(this, e, [].concat(u)), Qn(n, "state", {
      isAnimationFinished: !0
    }), Qn(n, "id", qu("recharts-area-")), Qn(n, "handleAnimationEnd", function() {
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
    value: function(r, u, l) {
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
      }), _ = {
        clipPath: r ? "url(#clipPath-".concat(u ? "" : "dots-").concat(l, ")") : null
      };
      return /* @__PURE__ */ B.createElement(Jt, Fa({
        className: "recharts-area-dots"
      }, _), O);
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
      var b = WD(s, XI);
      return /* @__PURE__ */ B.createElement(Jt, {
        clipPath: l ? "url(#clipPath-".concat(c, ")") : null
      }, /* @__PURE__ */ B.createElement(uu, Fa({}, Et(b, !0), {
        points: r,
        connectNulls: p,
        type: d,
        baseLine: u,
        layout: h,
        stroke: "none",
        className: "recharts-area-area"
      })), y !== "none" && /* @__PURE__ */ B.createElement(uu, Fa({}, Et(this.props, !1), {
        className: "recharts-area-curve",
        layout: h,
        type: d,
        connectNulls: p,
        fill: "none",
        points: r
      })), y !== "none" && g && /* @__PURE__ */ B.createElement(uu, Fa({}, Et(this.props, !1), {
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
      var l = this, c = this.props, s = c.points, h = c.baseLine, d = c.isAnimationActive, y = c.animationBegin, p = c.animationDuration, g = c.animationEasing, b = c.animationId, O = this.state, _ = O.prevPoints, x = O.prevBaseLine;
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
        if (_) {
          var M = _.length / s.length, j = s.map(function(R, z) {
            var F = Math.floor(z * M);
            if (_[F]) {
              var U = _[F], $ = Re(U.x, R.x), K = Re(U.y, R.y);
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
          } else if (Mt(h) || Ru(h)) {
            var D = Re(x, 0);
            A = D(w);
          } else
            A = h.map(function(R, z) {
              var F = Math.floor(z * M);
              if (x[F]) {
                var U = x[F], $ = Re(U.x, R.x), K = Re(U.y, R.y);
                return da(da({}, R), {}, {
                  x: $(w),
                  y: K(w)
                });
              }
              return R;
            });
          return l.renderAreaStatically(j, A, r, u);
        }
        return /* @__PURE__ */ B.createElement(Jt, null, /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("clipPath", {
          id: "animationClipPath-".concat(u)
        }, l.renderClipRect(w))), /* @__PURE__ */ B.createElement(Jt, {
          clipPath: "url(#animationClipPath-".concat(u, ")")
        }, l.renderAreaStatically(s, h, r, u)));
      });
    }
  }, {
    key: "renderArea",
    value: function(r, u) {
      var l = this.props, c = l.points, s = l.baseLine, h = l.isAnimationActive, d = this.state, y = d.prevPoints, p = d.prevBaseLine, g = d.totalLength;
      return h && c && c.length && (!y && g > 0 || !yu(y, c) || !yu(p, s)) ? this.renderAreaWithAnimation(r, u) : this.renderAreaStatically(c, s, r, u);
    }
  }, {
    key: "render",
    value: function() {
      var r, u = this.props, l = u.hide, c = u.dot, s = u.points, h = u.className, d = u.top, y = u.left, p = u.xAxis, g = u.yAxis, b = u.width, O = u.height, _ = u.isAnimationActive, x = u.id;
      if (l || !s || !s.length)
        return null;
      var T = this.state.isAnimationFinished, w = s.length === 1, M = qt("recharts-area", h), j = p && p.allowDataOverflow, A = g && g.allowDataOverflow, E = j || A, D = Mt(x) ? this.id : x, R = (r = Et(c, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, z = R.r, F = z === void 0 ? 3 : z, U = R.strokeWidth, $ = U === void 0 ? 2 : U, K = hj(c) ? c : {}, Z = K.clipDot, V = Z === void 0 ? !0 : Z, N = F * 2 + $;
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
      }))) : null, w ? null : this.renderArea(E, D), (c || w) && this.renderDots(E, V, D), (!_ || T) && Nr.renderCallByParent(this.props, s));
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
})(rt.PureComponent);
QD = tr;
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
  var e = t.props, n = t.item, r = t.xAxis, u = t.yAxis, l = t.xAxisTicks, c = t.yAxisTicks, s = t.bandSize, h = t.dataKey, d = t.stackedData, y = t.dataStartIndex, p = t.displayedData, g = t.offset, b = e.layout, O = d && d.length, _ = QD.getBaseValue(e, n, r, u), x = b === "horizontal", T = !1, w = p.map(function(j, A) {
    var E;
    O ? E = d[y + A] : (E = Ge(j, h), Array.isArray(E) ? T = !0 : E = [_, E]);
    var D = E[1] == null || O && Ge(j, h) == null;
    return x ? {
      x: ns({
        axis: r,
        ticks: l,
        bandSize: s,
        entry: j,
        index: A
      }),
      y: D ? null : u.scale(E[1]),
      value: E,
      payload: j
    } : {
      x: D ? null : r.scale(E[1]),
      y: ns({
        axis: u,
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
      y: A != null && j.y != null ? u.scale(A) : null
    } : {
      x: A != null ? r.scale(A) : null,
      y: j.y
    };
  }) : M = x ? u.scale(_) : r.scale(_), da({
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
    var r = qt("recharts-area-dot", typeof t != "boolean" ? t.className : ""), u = e.key, l = WD(e, KI);
    n = /* @__PURE__ */ B.createElement(Fs, Fa({}, l, {
      key: u,
      className: r
    }));
  }
  return n;
});
function Mu(t) {
  "@babel/helpers - typeof";
  return Mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mu(t);
}
function nG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, rP(r.key), r);
  }
}
function aG(t, e, n) {
  return e && rG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function iG(t, e, n) {
  return e = ws(e), uG(t, eP() ? Reflect.construct(e, n || [], ws(t).constructor) : e.apply(t, n));
}
function uG(t, e) {
  if (e && (Mu(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oG(t);
}
function oG(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function eP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eP = function() {
    return !!t;
  })();
}
function ws(t) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ws(t);
}
function lG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Lb(t, e);
}
function Lb(t, e) {
  return Lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Lb(t, e);
}
function nP(t, e, n) {
  return e = rP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function rP(t) {
  var e = cG(t, "string");
  return Mu(e) == "symbol" ? e : e + "";
}
function cG(t, e) {
  if (Mu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Mu(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Ub() {
  return Ub = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ub.apply(this, arguments);
}
function fG(t) {
  var e = t.xAxisId, n = Q0(), r = W0(), u = $D(e);
  return u == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ rt.createElement(Uu, Ub({}, u, {
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
    return nG(this, e), iG(this, e, arguments);
  }
  return lG(e, t), aG(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ rt.createElement(fG, this.props);
    }
  }]);
})(rt.Component);
nP(Mr, "displayName", "XAxis");
nP(Mr, "defaultProps", {
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
function ju(t) {
  "@babel/helpers - typeof";
  return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ju(t);
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
  return e = Ts(e), pG(t, aP() ? Reflect.construct(e, n || [], Ts(t).constructor) : e.apply(t, n));
}
function pG(t, e) {
  if (e && (ju(e) === "object" || typeof e == "function"))
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
function aP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (aP = function() {
    return !!t;
  })();
}
function Ts(t) {
  return Ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ts(t);
}
function mG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && kb(t, e);
}
function kb(t, e) {
  return kb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, kb(t, e);
}
function iP(t, e, n) {
  return e = uP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function uP(t) {
  var e = gG(t, "string");
  return ju(e) == "symbol" ? e : e + "";
}
function gG(t, e) {
  if (ju(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ju(r) != "object") return r;
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
var bG = function(e) {
  var n = e.yAxisId, r = Q0(), u = W0(), l = BD(n);
  return l == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ rt.createElement(Uu, Hb({}, l, {
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
    return sG(this, e), vG(this, e, arguments);
  }
  return mG(e, t), dG(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ rt.createElement(bG, this.props);
    }
  }]);
})(rt.Component);
iP(jr, "displayName", "YAxis");
iP(jr, "defaultProps", {
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
function kM(t) {
  return OG(t) || _G(t) || SG(t) || xG();
}
function xG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SG(t, e) {
  if (t) {
    if (typeof t == "string") return Ib(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ib(t, e);
  }
}
function _G(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function OG(t) {
  if (Array.isArray(t)) return Ib(t);
}
function Ib(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Gb = function(e, n, r, u, l) {
  var c = Cn(e, t1), s = Cn(e, th), h = [].concat(kM(c), kM(s)), d = Cn(e, nh), y = "".concat(u, "Id"), p = u[0], g = n;
  if (h.length && (g = h.reduce(function(_, x) {
    if (x.props[y] === r && Jn(x.props, "extendDomain") && st(x.props[p])) {
      var T = x.props[p];
      return [Math.min(_[0], T), Math.max(_[1], T)];
    }
    return _;
  }, g)), d.length) {
    var b = "".concat(p, "1"), O = "".concat(p, "2");
    g = d.reduce(function(_, x) {
      if (x.props[y] === r && Jn(x.props, "extendDomain") && st(x.props[b]) && st(x.props[O])) {
        var T = x.props[b], w = x.props[O];
        return [Math.min(_[0], T, w), Math.max(_[1], T, w)];
      }
      return _;
    }, g);
  }
  return l && l.length && (g = l.reduce(function(_, x) {
    return st(x) ? [Math.min(_[0], x), Math.max(_[1], x)] : _;
  }, g)), g;
}, Sg = { exports: {} }, HM;
function AG() {
  return HM || (HM = 1, (function(t) {
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
      var b = new u(y, p || h, g), O = n ? n + d : d;
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
      var _ = n ? n + d : d;
      if (!this._events[_]) return !1;
      var x = this._events[_], T = arguments.length, w, M;
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
        for (var _ = 0, x = [], T = O.length; _ < T; _++)
          (O[_].fn !== y || g && !O[_].once || p && O[_].context !== p) && x.push(O[_]);
        x.length ? this._events[b] = x.length === 1 ? x[0] : x : c(this, b);
      }
      return this;
    }, s.prototype.removeAllListeners = function(d) {
      var y;
      return d ? (y = n ? n + d : d, this._events[y] && c(this, y)) : (this._events = new r(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, t.exports = s;
  })(Sg)), Sg.exports;
}
var wG = AG();
const TG = /* @__PURE__ */ Qt(wG);
var _g = new TG(), Og = "recharts.syncMouseEvents";
function ql(t) {
  "@babel/helpers - typeof";
  return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ql(t);
}
function EG(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function MG(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, oP(r.key), r);
  }
}
function jG(t, e, n) {
  return e && MG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ag(t, e, n) {
  return e = oP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function oP(t) {
  var e = CG(t, "string");
  return ql(e) == "symbol" ? e : e + "";
}
function CG(t, e) {
  if (ql(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (ql(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var DG = /* @__PURE__ */ (function() {
  function t() {
    EG(this, t), Ag(this, "activeIndex", 0), Ag(this, "coordinateList", []), Ag(this, "layout", "horizontal");
  }
  return jG(t, [{
    key: "setDetails",
    value: function(n) {
      var r, u = n.coordinateList, l = u === void 0 ? null : u, c = n.container, s = c === void 0 ? null : c, h = n.layout, d = h === void 0 ? null : h, y = n.offset, p = y === void 0 ? null : y, g = n.mouseHandlerCallback, b = g === void 0 ? null : g;
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
        var u = this.container.getBoundingClientRect(), l = u.x, c = u.y, s = u.height, h = this.coordinateList[this.activeIndex].coordinate, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollX) || 0, y = ((r = window) === null || r === void 0 ? void 0 : r.scrollY) || 0, p = l + h + d, g = c + this.offset.top + s / 2 + y;
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
    var r = t == null ? void 0 : t[0], u = t == null ? void 0 : t[1];
    if (r && u && st(r) && st(u))
      return !0;
  }
  return !1;
}
function NG(t, e, n, r) {
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
function lP(t) {
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
function RG(t, e, n) {
  var r, u, l, c;
  if (t === "horizontal")
    r = e.x, l = r, u = n.top, c = n.top + n.height;
  else if (t === "vertical")
    u = e.y, c = u, r = n.left, l = n.left + n.width;
  else if (e.cx != null && e.cy != null)
    if (t === "centric") {
      var s = e.cx, h = e.cy, d = e.innerRadius, y = e.outerRadius, p = e.angle, g = qe(s, h, d, p), b = qe(s, h, y, p);
      r = g.x, u = g.y, l = b.x, c = b.y;
    } else
      return lP(e);
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
function IM(t, e) {
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
    e % 2 ? IM(Object(n), !0).forEach(function(r) {
      qG(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : IM(Object(n)).forEach(function(r) {
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
  return zl(e) == "symbol" ? e : e + "";
}
function $G(t, e) {
  if (zl(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (zl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function BG(t) {
  var e, n, r = t.element, u = t.tooltipEventType, l = t.isActive, c = t.activeCoordinate, s = t.activePayload, h = t.offset, d = t.activeTooltipIndex, y = t.tooltipAxisBandSize, p = t.layout, g = t.chartName, b = (e = r.props.cursor) !== null && e !== void 0 ? e : (n = r.type.defaultProps) === null || n === void 0 ? void 0 : n.cursor;
  if (!r || !b || !l || !c || g !== "ScatterChart" && u !== "axis")
    return null;
  var O, _ = uu;
  if (g === "ScatterChart")
    O = c, _ = TH;
  else if (g === "BarChart")
    O = NG(p, c, h, y), _ = X0;
  else if (p === "radial") {
    var x = lP(c), T = x.cx, w = x.cy, M = x.radius, j = x.startAngle, A = x.endAngle;
    O = {
      cx: T,
      cy: w,
      startAngle: j,
      endAngle: A,
      innerRadius: M,
      outerRadius: M
    }, _ = dD;
  } else
    O = {
      points: RG(p, c, h)
    }, _ = uu;
  var E = _f(_f(_f(_f({
    stroke: "#ccc",
    pointerEvents: "none"
  }, h), O), Et(b, !1)), {}, {
    payload: s,
    payloadIndex: d,
    className: qt("recharts-tooltip-cursor", b.className)
  });
  return /* @__PURE__ */ rt.isValidElement(b) ? /* @__PURE__ */ rt.cloneElement(b, E) : /* @__PURE__ */ rt.createElement(_, E);
}
var LG = ["item"], UG = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Cu(t) {
  "@babel/helpers - typeof";
  return Cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cu(t);
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
function GM(t, e) {
  return IG(t) || HG(t, e) || fP(t, e) || kG();
}
function kG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HG(t, e) {
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
function IG(t) {
  if (Array.isArray(t)) return t;
}
function YM(t, e) {
  if (t == null) return {};
  var n = GG(t, e), r, u;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (u = 0; u < l.length; u++)
      r = l[u], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, sP(r.key), r);
  }
}
function KG(t, e, n) {
  return e && XG(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function VG(t, e, n) {
  return e = Es(e), FG(t, cP() ? Reflect.construct(e, n || [], Es(t).constructor) : e.apply(t, n));
}
function FG(t, e) {
  if (e && (Cu(e) === "object" || typeof e == "function"))
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
function cP() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cP = function() {
    return !!t;
  })();
}
function Es(t) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Es(t);
}
function QG(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Yb(t, e);
}
function Yb(t, e) {
  return Yb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, Yb(t, e);
}
function Du(t) {
  return tY(t) || JG(t) || fP(t) || WG();
}
function WG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fP(t, e) {
  if (t) {
    if (typeof t == "string") return Xb(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xb(t, e);
  }
}
function JG(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function tY(t) {
  if (Array.isArray(t)) return Xb(t);
}
function Xb(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function XM(t, e) {
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
    e % 2 ? XM(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : XM(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function bt(t, e, n) {
  return e = sP(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function sP(t) {
  var e = eY(t, "string");
  return Cu(e) == "symbol" ? e : e + "";
}
function eY(t, e) {
  if (Cu(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Cu(r) != "object") return r;
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
}, hP = {
  x: 0,
  y: 0
};
function Of(t) {
  return t;
}
var aY = function(e, n) {
  return n === "horizontal" ? e.x : n === "vertical" ? e.y : n === "centric" ? e.angle : e.radius;
}, iY = function(e, n, r, u) {
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
  return hP;
}, rh = function(e, n) {
  var r = n.graphicalItems, u = n.dataStartIndex, l = n.dataEndIndex, c = (r ?? []).reduce(function(s, h) {
    var d = h.props.data;
    return d && d.length ? [].concat(Du(s), Du(d)) : s;
  }, []);
  return c.length > 0 ? c : e && e.length && st(u) && st(l) ? e.slice(u, l + 1) : [];
};
function dP(t) {
  return t === "number" ? [0, "auto"] : void 0;
}
var Kb = function(e, n, r, u) {
  var l = e.graphicalItems, c = e.tooltipAxis, s = rh(n, e);
  return r < 0 || !l || !l.length || r >= s.length ? null : l.reduce(function(h, d) {
    var y, p = (y = d.props.data) !== null && y !== void 0 ? y : n;
    p && e.dataStartIndex + e.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    e.dataEndIndex - e.dataStartIndex >= r && (p = p.slice(e.dataStartIndex, e.dataEndIndex + 1));
    var g;
    if (c.dataKey && !c.allowDuplicatedCategory) {
      var b = p === void 0 ? s : p;
      g = Mf(b, c.dataKey, u);
    } else
      g = p && p[r] || s[r];
    return g ? [].concat(Du(h), [fD(d, g)]) : h;
  }, []);
}, KM = function(e, n, r, u) {
  var l = u || {
    x: e.chartX,
    y: e.chartY
  }, c = aY(l, r), s = e.orderedTooltipTicks, h = e.tooltipAxis, d = e.tooltipTicks, y = r5(c, s, d, h);
  if (y >= 0 && d) {
    var p = d[y] && d[y].value, g = Kb(e, n, y, p), b = iY(r, s, y, l);
    return {
      activeTooltipIndex: y,
      activeLabel: p,
      activePayload: g,
      activeCoordinate: b
    };
  }
  return null;
}, uY = function(e, n) {
  var r = n.axes, u = n.graphicalItems, l = n.axisType, c = n.axisIdKey, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.layout, p = e.children, g = e.stackOffset, b = oD(y, l);
  return r.reduce(function(O, _) {
    var x, T = _.type.defaultProps !== void 0 ? tt(tt({}, _.type.defaultProps), _.props) : _.props, w = T.type, M = T.dataKey, j = T.allowDataOverflow, A = T.allowDuplicatedCategory, E = T.scale, D = T.ticks, R = T.includeHidden, z = T[c];
    if (O[z])
      return O;
    var F = rh(e.data, {
      graphicalItems: u.filter(function(k) {
        var et, ft = c in k.props ? k.props[c] : (et = k.type.defaultProps) === null || et === void 0 ? void 0 : et[c];
        return ft === z;
      }),
      dataStartIndex: h,
      dataEndIndex: d
    }), U = F.length, $, K, Z;
    PG(T.domain, j, w) && ($ = fb(T.domain, null, j), b && (w === "number" || E !== "auto") && (Z = Jo(F, M, "category")));
    var V = dP(w);
    if (!$ || $.length === 0) {
      var N, I = (N = T.domain) !== null && N !== void 0 ? N : V;
      if (M) {
        if ($ = Jo(F, M, w), w === "category" && b) {
          var W = F3($);
          A && W ? (K = $, $ = ds(0, U)) : A || ($ = r2(I, $, _).reduce(function(k, et) {
            return k.indexOf(et) >= 0 ? k : [].concat(Du(k), [et]);
          }, []));
        } else if (w === "category")
          A ? $ = $.filter(function(k) {
            return k !== "" && !Mt(k);
          }) : $ = r2(I, $, _).reduce(function(k, et) {
            return k.indexOf(et) >= 0 || et === "" || Mt(et) ? k : [].concat(Du(k), [et]);
          }, []);
        else if (w === "number") {
          var ut = l5(F, u.filter(function(k) {
            var et, ft, vt = c in k.props ? k.props[c] : (et = k.type.defaultProps) === null || et === void 0 ? void 0 : et[c], mt = "hide" in k.props ? k.props.hide : (ft = k.type.defaultProps) === null || ft === void 0 ? void 0 : ft.hide;
            return vt === z && (R || !mt);
          }), M, l, y);
          ut && ($ = ut);
        }
        b && (w === "number" || E !== "auto") && (Z = Jo(F, M, "category"));
      } else b ? $ = ds(0, U) : s && s[z] && s[z].hasStack && w === "number" ? $ = g === "expand" ? [0, 1] : cD(s[z].stackGroups, h, d) : $ = uD(F, u.filter(function(k) {
        var et = c in k.props ? k.props[c] : k.type.defaultProps[c], ft = "hide" in k.props ? k.props.hide : k.type.defaultProps.hide;
        return et === z && (R || !ft);
      }), w, y, !0);
      if (w === "number")
        $ = Gb(p, $, z, l, D), I && ($ = fb(I, $, j));
      else if (w === "category" && I) {
        var lt = I, P = $.every(function(k) {
          return lt.indexOf(k) >= 0;
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
}, oY = function(e, n) {
  var r = n.graphicalItems, u = n.Axis, l = n.axisType, c = n.axisIdKey, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.layout, p = e.children, g = rh(e.data, {
    graphicalItems: r,
    dataStartIndex: h,
    dataEndIndex: d
  }), b = g.length, O = oD(y, l), _ = -1;
  return r.reduce(function(x, T) {
    var w = T.type.defaultProps !== void 0 ? tt(tt({}, T.type.defaultProps), T.props) : T.props, M = w[c], j = dP("number");
    if (!x[M]) {
      _++;
      var A;
      return O ? A = ds(0, b) : s && s[M] && s[M].hasStack ? (A = cD(s[M].stackGroups, h, d), A = Gb(p, A, M, l)) : (A = fb(j, uD(g, r.filter(function(E) {
        var D, R, z = c in E.props ? E.props[c] : (D = E.type.defaultProps) === null || D === void 0 ? void 0 : D[c], F = "hide" in E.props ? E.props.hide : (R = E.type.defaultProps) === null || R === void 0 ? void 0 : R.hide;
        return z === M && !F;
      }), "number", y), u.defaultProps.allowDataOverflow), A = Gb(p, A, M, l)), tt(tt({}, x), {}, bt({}, M, tt(tt({
        axisType: l
      }, u.defaultProps), {}, {
        hide: !0,
        orientation: jn(nY, "".concat(l, ".").concat(_ % 2), null),
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
  var r = n.axisType, u = r === void 0 ? "xAxis" : r, l = n.AxisComp, c = n.graphicalItems, s = n.stackGroups, h = n.dataStartIndex, d = n.dataEndIndex, y = e.children, p = "".concat(u, "Id"), g = Cn(y, l), b = {};
  return g && g.length ? b = uY(e, {
    axes: g,
    graphicalItems: c,
    axisType: u,
    axisIdKey: p,
    stackGroups: s,
    dataStartIndex: h,
    dataEndIndex: d
  }) : c && c.length && (b = oY(e, {
    Axis: l,
    graphicalItems: c,
    axisType: u,
    axisIdKey: p,
    stackGroups: s,
    dataStartIndex: h,
    dataEndIndex: d
  })), b;
}, cY = function(e) {
  var n = pa(e), r = Er(n, !1, !0);
  return {
    tooltipTicks: r,
    orderedTooltipTicks: g0(r, function(u) {
      return u.coordinate;
    }),
    tooltipAxis: n,
    tooltipAxisBandSize: rs(n, r)
  };
}, VM = function(e) {
  var n = e.children, r = e.defaultShowTooltip, u = hn(n, xu), l = 0, c = 0;
  return e.data && e.data.length !== 0 && (c = e.data.length - 1), u && u.props && (u.props.startIndex >= 0 && (l = u.props.startIndex), u.props.endIndex >= 0 && (c = u.props.endIndex)), {
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
}, FM = function(e) {
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
  var r = e.props, u = e.graphicalItems, l = e.xAxisMap, c = l === void 0 ? {} : l, s = e.yAxisMap, h = s === void 0 ? {} : s, d = r.width, y = r.height, p = r.children, g = r.margin || {}, b = hn(p, xu), O = hn(p, ru), _ = Object.keys(h).reduce(function(A, E) {
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
  }), T = tt(tt({}, x), _), w = T.bottom;
  b && (T.bottom += b.props.height || xu.defaultProps.height), O && n && (T = u5(T, u, r, n));
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
}, r1 = function(e) {
  var n = e.chartName, r = e.GraphicalChild, u = e.defaultTooltipEventType, l = u === void 0 ? "axis" : u, c = e.validateTooltipEventTypes, s = c === void 0 ? ["axis"] : c, h = e.axisComponents, d = e.legendContent, y = e.formatAxisMap, p = e.defaultProps, g = function(T, w) {
    var M = w.graphicalItems, j = w.stackGroups, A = w.offset, E = w.updateId, D = w.dataStartIndex, R = w.dataEndIndex, z = T.barSize, F = T.layout, U = T.barGap, $ = T.barCategoryGap, K = T.maxBarSize, Z = FM(F), V = Z.numericAxisName, N = Z.cateAxisName, I = fY(M), W = [];
    return M.forEach(function(ut, lt) {
      var P = rh(T.data, {
        graphicalItems: [ut],
        dataStartIndex: D,
        dataEndIndex: R
      }), k = ut.type.defaultProps !== void 0 ? tt(tt({}, ut.type.defaultProps), ut.props) : ut.props, et = k.dataKey, ft = k.maxBarSize, vt = k["".concat(V, "Id")], mt = k["".concat(N, "Id")], jt = {}, Ut = h.reduce(function(Rn, ar) {
        var ku = w["".concat(ar.axisType, "Map")], $e = k["".concat(ar.axisType, "Id")];
        ku && ku[$e] || ar.axisType === "zAxis" || ni();
        var Gl = ku[$e];
        return tt(tt({}, Rn), {}, bt(bt({}, ar.axisType, Gl), "".concat(ar.axisType, "Ticks"), Er(Gl)));
      }, jt), ct = Ut[N], xt = Ut["".concat(N, "Ticks")], St = j && j[vt] && j[vt].hasStack && x5(ut, j[vt].stackGroups), ot = Cr(ut.type).indexOf("Bar") >= 0, te = rs(ct, xt), wt = [], ue = I && a5({
        barSize: z,
        stackGroups: j,
        totalSize: hY(Ut, N)
      });
      if (ot) {
        var oe, ze, Nn = Mt(ft) ? K : ft, Gn = (oe = (ze = rs(ct, xt, !0)) !== null && ze !== void 0 ? ze : Nn) !== null && oe !== void 0 ? oe : 0;
        wt = i5({
          barGap: U,
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
      var Ur = ut && ut.type && ut.type.getComposedData;
      Ur && W.push({
        props: tt(tt({}, Ur(tt(tt({}, Ut), {}, {
          displayedData: P,
          props: T,
          dataKey: et,
          item: ut,
          bandSize: te,
          barPosition: wt,
          offset: A,
          stackedData: St,
          layout: F,
          dataStartIndex: D,
          dataEndIndex: R
        }))), {}, bt(bt(bt({
          key: ut.key || "item-".concat(lt)
        }, V, Ut[V]), N, Ut[N]), "animationId", E)),
        childIndex: oq(ut, T.children),
        item: ut
      });
    }), W;
  }, b = function(T, w) {
    var M = T.props, j = T.dataStartIndex, A = T.dataEndIndex, E = T.updateId;
    if (!gA({
      props: M
    }))
      return null;
    var D = M.children, R = M.layout, z = M.stackOffset, F = M.data, U = M.reverseStackOrder, $ = FM(R), K = $.numericAxisName, Z = $.cateAxisName, V = Cn(D, r), N = m5(F, V, "".concat(K, "Id"), "".concat(Z, "Id"), z, U), I = h.reduce(function(k, et) {
      var ft = "".concat(et.axisType, "Map");
      return tt(tt({}, k), {}, bt({}, ft, lY(M, tt(tt({}, et), {}, {
        graphicalItems: V,
        stackGroups: et.axisType === K && N,
        dataStartIndex: j,
        dataEndIndex: A
      }))));
    }, {}), W = sY(tt(tt({}, I), {}, {
      props: M,
      graphicalItems: V
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(I).forEach(function(k) {
      I[k] = y(M, I[k], W, k.replace("Map", ""), n);
    });
    var ut = I["".concat(Z, "Map")], lt = cY(ut), P = g(M, tt(tt({}, I), {}, {
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
        var D = uq(E), R = jn(A.props, "".concat(D));
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
        A.props.syncId !== void 0 && _g.emit(Og, A.props.syncId, E, A.eventEmitterSymbol);
      }), bt(A, "applySyncEvent", function(E) {
        var D = A.props, R = D.layout, z = D.syncMethod, F = A.state.updateId, U = E.dataStartIndex, $ = E.dataEndIndex;
        if (E.dataStartIndex !== void 0 || E.dataEndIndex !== void 0)
          A.setState(tt({
            dataStartIndex: U,
            dataEndIndex: $
          }, b({
            props: A.props,
            dataStartIndex: U,
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
            for (var ut = 0; ut < W.length; ut++)
              if (W[ut].value === E.activeLabel) {
                V = ut;
                break;
              }
          }
          var lt = tt(tt({}, I), {}, {
            x: I.left,
            y: I.top
          }), P = Math.min(K, lt.x + lt.width), k = Math.min(Z, lt.y + lt.height), et = W[V] && W[V].value, ft = Kb(A.state, A.props.data, V), vt = W[V] ? {
            x: R === "horizontal" ? W[V].coordinate : P,
            y: R === "horizontal" ? k : W[V].coordinate
          } : hP;
          A.setState(tt(tt({}, E), {}, {
            activeLabel: et,
            activeCoordinate: vt,
            activePayload: ft,
            activeTooltipIndex: V
          }));
        } else
          A.setState(E);
      }), bt(A, "renderCursor", function(E) {
        var D, R = A.state, z = R.isTooltipActive, F = R.activeCoordinate, U = R.activePayload, $ = R.offset, K = R.activeTooltipIndex, Z = R.tooltipAxisBandSize, V = A.getTooltipEventType(), N = (D = E.props.active) !== null && D !== void 0 ? D : z, I = A.props.layout, W = E.key || "_recharts-cursor";
        return /* @__PURE__ */ B.createElement(BG, {
          key: W,
          activeCoordinate: F,
          activePayload: U,
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
        var z = jn(E, "type.axisType"), F = jn(A.state, "".concat(z, "Map")), U = E.type.defaultProps, $ = U !== void 0 ? tt(tt({}, U), E.props) : E.props, K = F && F[$["".concat(z, "Id")]];
        return /* @__PURE__ */ rt.cloneElement(E, tt(tt({}, K), {}, {
          className: qt(z, K.className),
          key: E.key || "".concat(D, "-").concat(R),
          ticks: Er(K, !0)
        }));
      }), bt(A, "renderPolarGrid", function(E) {
        var D = E.props, R = D.radialLines, z = D.polarAngles, F = D.polarRadius, U = A.state, $ = U.radiusAxisMap, K = U.angleAxisMap, Z = pa($), V = pa(K), N = V.cx, I = V.cy, W = V.innerRadius, ut = V.outerRadius;
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
          outerRadius: ut,
          key: E.key || "polar-grid",
          radialLines: R
        });
      }), bt(A, "renderLegend", function() {
        var E = A.state.formattedGraphicalItems, D = A.props, R = D.children, z = D.width, F = D.height, U = A.props.margin || {}, $ = z - (U.left || 0) - (U.right || 0), K = aD({
          children: R,
          formattedGraphicalItems: E,
          legendWidth: $,
          legendContent: d
        });
        if (!K)
          return null;
        var Z = K.item, V = YM(K, LG);
        return /* @__PURE__ */ rt.cloneElement(Z, tt(tt({}, V), {}, {
          chartWidth: z,
          chartHeight: F,
          margin: U,
          onBBoxUpdate: A.handleLegendBBoxUpdate
        }));
      }), bt(A, "renderTooltip", function() {
        var E, D = A.props, R = D.children, z = D.accessibilityLayer, F = hn(R, dn);
        if (!F)
          return null;
        var U = A.state, $ = U.isTooltipActive, K = U.activeCoordinate, Z = U.activePayload, V = U.activeLabel, N = U.offset, I = (E = F.props.active) !== null && E !== void 0 ? E : $;
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
        var D = A.props, R = D.margin, z = D.data, F = A.state, U = F.offset, $ = F.dataStartIndex, K = F.dataEndIndex, Z = F.updateId;
        return /* @__PURE__ */ rt.cloneElement(E, {
          key: E.key || "_recharts-brush",
          onChange: gf(A.handleBrushChange, E.props.onChange),
          data: z,
          x: st(E.props.x) ? E.props.x : U.left,
          y: st(E.props.y) ? E.props.y : U.top + U.height + U.brushBottom - (R.bottom || 0),
          width: st(E.props.width) ? E.props.width : U.width,
          startIndex: $,
          endIndex: K,
          updateId: "brush-".concat(Z)
        });
      }), bt(A, "renderReferenceElement", function(E, D, R) {
        if (!E)
          return null;
        var z = A, F = z.clipPathId, U = A.state, $ = U.xAxisMap, K = U.yAxisMap, Z = U.offset, V = E.type.defaultProps || {}, N = E.props, I = N.xAxisId, W = I === void 0 ? V.xAxisId : I, ut = N.yAxisId, lt = ut === void 0 ? V.yAxisId : ut;
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
        var D = E.item, R = E.activePoint, z = E.basePoint, F = E.childIndex, U = E.isRange, $ = [], K = D.props.key, Z = D.item.type.defaultProps !== void 0 ? tt(tt({}, D.item.type.defaultProps), D.item.props) : D.item.props, V = Z.activeDot, N = Z.dataKey, I = tt(tt({
          index: F,
          dataKey: N,
          cx: R.x,
          cy: R.y,
          r: 4,
          fill: Y0(D.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: R.payload,
          value: R.value
        }, Et(V, !1)), jf(V));
        return $.push(T.renderActiveDot(V, I, "".concat(K, "-activePoint-").concat(F))), z ? $.push(T.renderActiveDot(V, tt(tt({}, I), {}, {
          cx: z.x,
          cy: z.y
        }), "".concat(K, "-basePoint-").concat(F))) : U && $.push(null), $;
      }), bt(A, "renderGraphicChild", function(E, D, R) {
        var z = A.filterFormatItem(E, D, R);
        if (!z)
          return null;
        var F = A.getTooltipEventType(), U = A.state, $ = U.isTooltipActive, K = U.tooltipAxis, Z = U.activeTooltipIndex, V = U.activeLabel, N = A.props.children, I = hn(N, dn), W = z.props, ut = W.points, lt = W.isRange, P = W.baseLine, k = z.item.type.defaultProps !== void 0 ? tt(tt({}, z.item.type.defaultProps), z.item.props) : z.item.props, et = k.activeDot, ft = k.hide, vt = k.activeBar, mt = k.activeShape, jt = !!(!ft && $ && I && (et || vt || mt)), Ut = {};
        F !== "axis" && I && I.props.trigger === "click" ? Ut = {
          onClick: gf(A.handleItemMouseEnter, E.props.onClick)
        } : F !== "axis" && (Ut = {
          onMouseLeave: gf(A.handleItemMouseLeave, E.props.onMouseLeave),
          onMouseEnter: gf(A.handleItemMouseEnter, E.props.onMouseEnter)
        });
        var ct = /* @__PURE__ */ rt.cloneElement(E, tt(tt({}, z.props), Ut));
        function xt(ar) {
          return typeof K.dataKey == "function" ? K.dataKey(ar.payload) : null;
        }
        if (jt)
          if (Z >= 0) {
            var St, ot;
            if (K.dataKey && !K.allowDuplicatedCategory) {
              var te = typeof K.dataKey == "function" ? xt : "payload.".concat(K.dataKey.toString());
              St = Mf(ut, te, V), ot = lt && P && Mf(P, te, V);
            } else
              St = ut == null ? void 0 : ut[Z], ot = lt && P && P[Z];
            if (mt || vt) {
              var wt = E.props.activeIndex !== void 0 ? E.props.activeIndex : Z;
              return [/* @__PURE__ */ rt.cloneElement(E, tt(tt(tt({}, z.props), Ut), {}, {
                activeIndex: wt
              })), null, null];
            }
            if (!Mt(St))
              return [ct].concat(Du(A.renderActivePoints({
                item: z,
                activePoint: St,
                basePoint: ot,
                childIndex: Z,
                isRange: lt
              })));
          } else {
            var ue, oe = (ue = A.getItemByXY(A.state.activeCoordinate)) !== null && ue !== void 0 ? ue : {
              graphicalItem: ct
            }, ze = oe.graphicalItem, Nn = ze.item, Gn = Nn === void 0 ? E : Nn, Ur = ze.childIndex, Rn = tt(tt(tt({}, z.props), Ut), {}, {
              activeIndex: Ur
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
          handler: Of,
          once: !0
        },
        ReferenceArea: {
          handler: A.renderReferenceElement
        },
        ReferenceLine: {
          handler: Of
        },
        ReferenceDot: {
          handler: A.renderReferenceElement
        },
        XAxis: {
          handler: Of
        },
        YAxis: {
          handler: Of
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
      }), A.clipPathId = "".concat((M = w.id) !== null && M !== void 0 ? M : qu("recharts"), "-clip"), A.throttleTriggeredAfterMouseMove = iC(A.triggeredAfterMouseMove, (j = w.throttleDelay) !== null && j !== void 0 ? j : 1e3 / 60), A.state = {}, A;
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
            var F = this.state.tooltipTicks[z] && this.state.tooltipTicks[z].value, U = Kb(this.state, A, z, F), $ = this.state.tooltipTicks[z].coordinate, K = (this.state.offset.top + E) / 2, Z = D === "horizontal", V = Z ? {
              x: $,
              y: K
            } : {
              y: $,
              x: K
            }, N = this.state.formattedGraphicalItems.find(function(W) {
              var ut = W.item;
              return ut.type.name === "Scatter";
            });
            N && (V = tt(tt({}, V), N.props.points[z].tooltipPosition), U = N.props.points[z].tooltipPayload);
            var I = {
              activeTooltipIndex: z,
              isTooltipActive: !0,
              activeLabel: F,
              activePayload: U,
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
        Pg([hn(M.children, dn)], [hn(this.props.children, dn)]) || this.displayDefaultTooltip();
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
        var F = this.state, U = F.xAxisMap, $ = F.yAxisMap, K = this.getTooltipEventType(), Z = KM(this.state, this.props.data, this.props.layout, z);
        if (K !== "axis" && U && $) {
          var V = pa(U).scale, N = pa($).scale, I = V && V.invert ? V.invert(D.chartX) : null, W = N && N.invert ? N.invert(D.chartY) : null;
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
        var U = this.state, $ = U.angleAxisMap, K = U.radiusAxisMap;
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
        var D = jf(this.props, this.handleOuterEvent);
        return tt(tt({}, D), E);
      }
    }, {
      key: "addListener",
      value: function() {
        _g.on(Og, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        _g.removeListener(Og, this.handleReceiveSyncEvent);
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
          var E = GM(A, 2), D = E[0], R = E[1];
          return tt(tt({}, j), {}, bt({}, D, R.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var M = this.state.yAxisMap;
        return M ? Object.entries(M).reduce(function(j, A) {
          var E = GM(A, 2), D = E[0], R = E[1];
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
            var z = A[D], F = z.props, U = z.item, $ = U.type.defaultProps !== void 0 ? tt(tt({}, U.type.defaultProps), U.props) : U.props, K = Cr(U.type);
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
            } else if (Zs(z, E) || Qs(z, E) || Cl(z, E)) {
              var N = u9({
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
        if (!gA(this))
          return null;
        var j = this.props, A = j.children, E = j.className, D = j.width, R = j.height, z = j.style, F = j.compact, U = j.title, $ = j.desc, K = YM(j, UG), Z = Et(K, !1);
        if (F)
          return /* @__PURE__ */ B.createElement(OM, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ B.createElement(Rg, eu({}, Z, {
            width: D,
            height: R,
            title: U,
            desc: $
          }), this.renderClipPath(), xA(A, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var V, N;
          Z.tabIndex = (V = this.props.tabIndex) !== null && V !== void 0 ? V : 0, Z.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", Z.onKeyDown = function(W) {
            M.accessibilityManager.keyboardEvent(W);
          }, Z.onFocus = function() {
            M.accessibilityManager.focus();
          };
        }
        var I = this.parseEventsOfWrapper();
        return /* @__PURE__ */ B.createElement(OM, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ B.createElement("div", eu({
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
        }), /* @__PURE__ */ B.createElement(Rg, eu({}, Z, {
          width: D,
          height: R,
          title: U,
          desc: $,
          style: rY
        }), this.renderClipPath(), xA(A, this.renderMap)), this.renderLegend(), this.renderTooltip()));
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
    var w = x.dataKey, M = x.data, j = x.children, A = x.width, E = x.height, D = x.layout, R = x.stackOffset, z = x.margin, F = T.dataStartIndex, U = T.dataEndIndex;
    if (T.updateId === void 0) {
      var $ = VM(x);
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
    if (w !== T.prevDataKey || M !== T.prevData || A !== T.prevWidth || E !== T.prevHeight || D !== T.prevLayout || R !== T.prevStackOffset || !nu(z, T.prevMargin)) {
      var K = VM(x), Z = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: T.chartX,
        chartY: T.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: T.isTooltipActive
      }, V = tt(tt({}, KM(T, M, D)), {}, {
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
    if (!Pg(j, T.prevChildren)) {
      var I, W, ut, lt, P = hn(j, xu), k = P && (I = (W = P.props) === null || W === void 0 ? void 0 : W.startIndex) !== null && I !== void 0 ? I : F, et = P && (ut = (lt = P.props) === null || lt === void 0 ? void 0 : lt.endIndex) !== null && ut !== void 0 ? ut : U, ft = k !== F || et !== U, vt = !Mt(M), mt = vt && !ft ? T.updateId : T.updateId + 1;
      return tt(tt({
        updateId: mt
      }, b(tt(tt({
        props: x
      }, T), {}, {
        updateId: mt,
        dataStartIndex: k,
        dataEndIndex: et
      }), T)), {}, {
        prevChildren: j,
        dataStartIndex: k,
        dataEndIndex: et
      });
    }
    return null;
  }), bt(O, "renderActiveDot", function(x, T, w) {
    var M;
    return /* @__PURE__ */ rt.isValidElement(x) ? M = /* @__PURE__ */ rt.cloneElement(x, T) : At(x) ? M = x(T) : M = /* @__PURE__ */ B.createElement(Fs, T), /* @__PURE__ */ B.createElement(Jt, {
      className: "recharts-active-dot",
      key: w
    }, M);
  });
  var _ = /* @__PURE__ */ rt.forwardRef(function(T, w) {
    return /* @__PURE__ */ B.createElement(O, eu({}, T, {
      ref: w
    }));
  });
  return _.displayName = O.displayName, _;
}, dY = r1({
  chartName: "LineChart",
  GraphicalChild: Wa,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: K0
}), vY = r1({
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
  formatAxisMap: K0
}), ZM = r1({
  chartName: "AreaChart",
  GraphicalChild: tr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Mr
  }, {
    axisType: "yAxis",
    AxisComp: jr
  }],
  formatAxisMap: K0
});
function Af(t, e) {
  let n = 0, r = 0;
  for (const l of e)
    l == null || !isFinite(l) || (l < n && (n = l), l > r && (r = l));
  let u = 1;
  for (const l of [n, r]) u = Math.max(u, t(l).length);
  return Math.min(90, Math.ceil(u * 7) + 14);
}
const wf = { top: 8, right: 12, bottom: 0, left: 0 }, Tf = [
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
], ha = { fill: "#8b9bb4", fontSize: 12 }, Ef = {
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
  masked: u = !1,
  compact: l = !0
}) {
  const c = r === "1d" || r === "1w", s = (w) => Vi(w, c), h = (w, M) => M !== 0 ? (w - M) / Math.abs(M) : null, d = l ? IR : Zo, y = (w) => u ? Mg(w) : d(w), p = (w) => u ? Mg(w) : Zo(w, !0);
  if (n === "flow") {
    const w = i3(t, e, r), M = (A) => u ? A.toFixed(2) : GR(A), j = (A) => u ? A.toFixed(1) : d(A);
    return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(vY, { data: w, margin: wf, children: [
      /* @__PURE__ */ it.jsx(Fo, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: (A) => Vi(A), tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: (A) => j(A), tick: ha, width: Af(j, w.map((A) => A.flow)) }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: Ef,
          labelFormatter: (A) => Vi(A),
          formatter: (A) => [M(A), "Net flow"],
          cursor: { fill: "#223047", fillOpacity: 0.4 }
        }
      ),
      /* @__PURE__ */ it.jsx(ci, { dataKey: "flow", radius: [3, 3, 0, 0], children: w.map((A, E) => /* @__PURE__ */ it.jsx(x0, { fill: A.flow >= 0 ? "#34d399" : "#f87171", fillOpacity: 0.8 }, E)) })
    ] }) });
  }
  if (n === "total") {
    const w = Fn(t[0], e), M = t.map((j) => {
      const A = Fn(j, e);
      return { ts: j.ts, total: u ? h(A, w) : A };
    });
    return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(ZM, { data: M, margin: wf, children: [
      /* @__PURE__ */ it.jsx("defs", { children: /* @__PURE__ */ it.jsxs("linearGradient", { id: "nw", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ it.jsx("stop", { offset: "0%", stopColor: "#60a5fa", stopOpacity: 0.35 }),
        /* @__PURE__ */ it.jsx("stop", { offset: "100%", stopColor: "#60a5fa", stopOpacity: 0 })
      ] }) }),
      /* @__PURE__ */ it.jsx(Fo, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: s, tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(jr, { tickFormatter: y, tick: ha, width: Af(y, M.map((j) => j.total)), domain: ["auto", "auto"] }),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: Ef,
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
      debt: Ov(t[0], e)
    }, j = t.map((A) => {
      const E = Fn(A, e, w), D = Fn(A, e, (z) => !w(z)), R = Ov(A, e);
      return u ? {
        ts: A.ts,
        retirement: h(E, M.retirement),
        other: h(D, M.other),
        debt: h(R, M.debt)
      } : { ts: A.ts, retirement: E, other: D, debt: R };
    });
    return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(dY, { data: j, margin: wf, children: [
      /* @__PURE__ */ it.jsx(Fo, { stroke: "#223047", strokeDasharray: "3 3" }),
      /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: s, tick: ha, minTickGap: 40 }),
      /* @__PURE__ */ it.jsx(
        jr,
        {
          tickFormatter: y,
          tick: ha,
          width: Af(y, j.flatMap((A) => [A.retirement, A.other, A.debt])),
          domain: ["auto", "auto"]
        }
      ),
      /* @__PURE__ */ it.jsx(
        dn,
        {
          contentStyle: Ef,
          labelFormatter: (A) => Vi(A, !0),
          formatter: (A, E) => [p(A), E]
        }
      ),
      /* @__PURE__ */ it.jsx(Wa, { type: "monotone", dataKey: "retirement", stroke: "#34d399", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ it.jsx(Wa, { type: "monotone", dataKey: "other", stroke: "#60a5fa", strokeWidth: 2, dot: !1 }),
      /* @__PURE__ */ it.jsx(Wa, { type: "monotone", dataKey: "debt", stroke: "#f87171", strokeWidth: 2, dot: !1 })
    ] }) });
  }
  const g = (w) => u ? w.toFixed(1) : d(w), b = (w) => u ? w.toFixed(2) : Zo(w, !0), O = e.filter((w) => {
    var j;
    return (((j = t[t.length - 1]) == null ? void 0 : j.values[w.id]) ?? 0) >= 0;
  }), _ = e.length > O.length, x = t.map((w) => {
    const M = { ts: w.ts };
    for (const j of O) M[`a${j.id}`] = w.values[j.id] ?? 0;
    return _ && (M.debt = Ov(w, e)), M;
  }), T = x.flatMap((w) => [
    O.reduce((M, j) => M + (w[`a${j.id}`] ?? 0), 0),
    w.debt ?? 0
  ]);
  return /* @__PURE__ */ it.jsx(df, { width: "100%", height: 340, children: /* @__PURE__ */ it.jsxs(ZM, { data: x, margin: wf, children: [
    /* @__PURE__ */ it.jsx(Fo, { stroke: "#223047", strokeDasharray: "3 3" }),
    /* @__PURE__ */ it.jsx(Mr, { dataKey: "ts", tickFormatter: s, tick: ha, minTickGap: 40 }),
    /* @__PURE__ */ it.jsx(jr, { tickFormatter: g, tick: ha, width: Af(g, T), domain: ["auto", "auto"] }),
    /* @__PURE__ */ it.jsx(
      dn,
      {
        contentStyle: Ef,
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
        stroke: Tf[M % Tf.length],
        fill: Tf[M % Tf.length],
        fillOpacity: 0.35
      },
      w.id
    )),
    _ && /* @__PURE__ */ it.jsx(tr, { type: "monotone", dataKey: "debt", stroke: "#f87171", fill: "#f87171", fillOpacity: 0.25 })
  ] }) });
}
function vP({
  hass: t,
  config: e
}) {
  const n = ou.find((x) => x.key === (e.view ?? "all")) ?? ou[2], [r, u] = rt.useState(e.range ?? "6m"), [l, c] = rt.useState(
    e.mode && n.modes.includes(e.mode) ? e.mode : n.defaultMode
  ), { overview: s, series: h, masked: d, error: y, refresh: p } = Fb(t, e.entry, r), g = Qb(s), b = rt.useMemo(() => g.filter(n.pick), [g, n]), O = rt.useMemo(() => {
    if (!h) return [];
    const x = new Set(b.map((T) => T.id));
    return nj(h.filter((T) => x.has(T.account_id)));
  }, [h, b]), _ = e.show_controls !== !1;
  return /* @__PURE__ */ it.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ it.jsxs("div", { className: "head", children: [
      /* @__PURE__ */ it.jsx("h2", { children: e.title ?? n.label }),
      _ && /* @__PURE__ */ it.jsxs("span", { className: "controls", children: [
        n.modes.length > 1 && /* @__PURE__ */ it.jsx(jg, { options: n.modes, value: l, onChange: c }),
        /* @__PURE__ */ it.jsx(jg, { options: rj, value: r, onChange: u })
      ] }),
      s && /* @__PURE__ */ it.jsx(
        Zb,
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
var wg = { exports: {} }, Yo = {}, Tg = { exports: {} }, Eg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QM;
function yY() {
  return QM || (QM = 1, (function(t) {
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
          var k = 2 * (ut + 1) - 1, et = N[k], ft = k + 1, vt = N[ft];
          if (0 > u(et, W))
            ft < lt && 0 > u(vt, et) ? (N[ut] = vt, N[ft] = W, ut = ft) : (N[ut] = et, N[k] = W, ut = k);
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
    var h = [], d = [], y = 1, p = null, g = 3, b = !1, O = !1, _ = !1, x = !1, T = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
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
      if (_ = !1, j(N), !O)
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
    function U() {
      if (x = !1, E) {
        var N = t.unstable_now();
        z = N;
        var I = !0;
        try {
          t: {
            O = !1, _ && (_ = !1, w(D), D = -1), b = !0;
            var W = g;
            try {
              e: {
                for (j(N), p = n(h); p !== null && !(p.expirationTime > N && F()); ) {
                  var ut = p.callback;
                  if (typeof ut == "function") {
                    p.callback = null, g = p.priorityLevel;
                    var lt = ut(
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
        M(U);
      };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), Z = K.port2;
      K.port1.onmessage = U, $ = function() {
        Z.postMessage(null);
      };
    } else
      $ = function() {
        T(U, 0);
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
      }, W > ut ? (N.sortIndex = W, e(d, N), n(h) === null && N === n(d) && (_ ? (w(D), D = -1) : _ = !0, V(A, W - ut))) : (N.sortIndex = lt, e(h, N), O || b || (O = !0, E || (E = !0, $()))), N;
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
  })(Eg)), Eg;
}
var WM;
function mY() {
  return WM || (WM = 1, Tg.exports = yY()), Tg.exports;
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
var JM;
function gY() {
  if (JM) return Yo;
  JM = 1;
  var t = mY(), e = Vb(), n = oH();
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
        for (var S = !1, C = v.child; C; ) {
          if (C === o) {
            S = !0, o = v, f = m;
            break;
          }
          if (C === f) {
            S = !0, f = v, o = m;
            break;
          }
          C = C.sibling;
        }
        if (!S) {
          for (C = m.child; C; ) {
            if (C === o) {
              S = !0, o = m, f = v;
              break;
            }
            if (C === f) {
              S = !0, f = m, o = v;
              break;
            }
            C = C.sibling;
          }
          if (!S) throw Error(r(189));
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
  var p = Object.assign, g = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), M = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), F = Symbol.for("react.memo_cache_sentinel"), U = Symbol.iterator;
  function $(a) {
    return a === null || typeof a != "object" ? null : (a = U && a[U] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var K = Symbol.for("react.client.reference");
  function Z(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === K ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case _:
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
  }, ut = [], lt = -1;
  function P(a) {
    return { current: a };
  }
  function k(a) {
    0 > lt || (a.current = ut[lt], ut[lt] = null, lt--);
  }
  function et(a, i) {
    lt++, ut[lt] = a.current, a.current = i;
  }
  var ft = P(null), vt = P(null), mt = P(null), jt = P(null);
  function Ut(a, i) {
    switch (et(mt, i), et(vt, a), et(ft, null), i.nodeType) {
      case 9:
      case 11:
        a = (a = i.documentElement) && (a = a.namespaceURI) ? j_(a) : 0;
        break;
      default:
        if (a = i.tagName, i = i.namespaceURI)
          i = j_(i), a = C_(i, a);
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
    k(ft), et(ft, a);
  }
  function ct() {
    k(ft), k(vt), k(mt);
  }
  function xt(a) {
    a.memoizedState !== null && et(jt, a);
    var i = ft.current, o = C_(i, a.type);
    i !== o && (et(vt, a), et(ft, o));
  }
  function St(a) {
    vt.current === a && (k(ft), k(vt)), jt.current === a && (k(jt), Do._currentValue = W);
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
      var m = f.DetermineComponentFrameRoot(), S = m[0], C = m[1];
      if (S && C) {
        var q = S.split(`
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
  var Gn = Object.prototype.hasOwnProperty, Ur = t.unstable_scheduleCallback, Rn = t.unstable_cancelCallback, ar = t.unstable_shouldYield, ku = t.unstable_requestPaint, $e = t.unstable_now, Gl = t.unstable_getCurrentPriorityLevel, o1 = t.unstable_ImmediatePriority, l1 = t.unstable_UserBlockingPriority, Yl = t.unstable_NormalPriority, yP = t.unstable_LowPriority, c1 = t.unstable_IdlePriority, mP = t.log, gP = t.unstable_setDisableYieldValue, Hu = null, tn = null;
  function kr(a) {
    if (typeof mP == "function" && gP(a), tn && typeof tn.setStrictMode == "function")
      try {
        tn.setStrictMode(Hu, a);
      } catch {
      }
  }
  var en = Math.clz32 ? Math.clz32 : SP, bP = Math.log, xP = Math.LN2;
  function SP(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (bP(a) / xP | 0) | 0;
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
    var v = 0, m = a.suspendedLanes, S = a.pingedLanes;
    a = a.warmLanes;
    var C = f & 134217727;
    return C !== 0 ? (f = C & ~m, f !== 0 ? v = Aa(f) : (S &= C, S !== 0 ? v = Aa(S) : o || (o = C & ~a, o !== 0 && (v = Aa(o))))) : (C = f & ~m, C !== 0 ? v = Aa(C) : S !== 0 ? v = Aa(S) : o || (o = f & ~a, o !== 0 && (v = Aa(o)))), v === 0 ? 0 : i !== 0 && i !== v && (i & m) === 0 && (m = v & -v, o = i & -i, m >= o || m === 32 && (o & 4194048) !== 0) ? i : v;
  }
  function Iu(a, i) {
    return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & i) === 0;
  }
  function _P(a, i) {
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
  function f1() {
    var a = Vl;
    return Vl <<= 1, (Vl & 62914560) === 0 && (Vl = 4194304), a;
  }
  function ch(a) {
    for (var i = [], o = 0; 31 > o; o++) i.push(a);
    return i;
  }
  function Gu(a, i) {
    a.pendingLanes |= i, i !== 268435456 && (a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0);
  }
  function OP(a, i, o, f, v, m) {
    var S = a.pendingLanes;
    a.pendingLanes = o, a.suspendedLanes = 0, a.pingedLanes = 0, a.warmLanes = 0, a.expiredLanes &= o, a.entangledLanes &= o, a.errorRecoveryDisabledLanes &= o, a.shellSuspendCounter = 0;
    var C = a.entanglements, q = a.expirationTimes, Y = a.hiddenUpdates;
    for (o = S & ~o; 0 < o; ) {
      var J = 31 - en(o), at = 1 << J;
      C[J] = 0, q[J] = -1;
      var X = Y[J];
      if (X !== null)
        for (Y[J] = null, J = 0; J < X.length; J++) {
          var Q = X[J];
          Q !== null && (Q.lane &= -536870913);
        }
      o &= ~at;
    }
    f !== 0 && s1(a, f, 0), m !== 0 && v === 0 && a.tag !== 0 && (a.suspendedLanes |= m & ~(S & ~i));
  }
  function s1(a, i, o) {
    a.pendingLanes |= i, a.suspendedLanes &= ~i;
    var f = 31 - en(i);
    a.entangledLanes |= i, a.entanglements[f] = a.entanglements[f] | 1073741824 | o & 261930;
  }
  function h1(a, i) {
    var o = a.entangledLanes |= i;
    for (a = a.entanglements; o; ) {
      var f = 31 - en(o), v = 1 << f;
      v & i | a[f] & i && (a[f] |= i), o &= ~v;
    }
  }
  function d1(a, i) {
    var o = i & -i;
    return o = (o & 42) !== 0 ? 1 : fh(o), (o & (a.suspendedLanes | i)) !== 0 ? 0 : o;
  }
  function fh(a) {
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
  function sh(a) {
    return a &= -a, 2 < a ? 8 < a ? (a & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function v1() {
    var a = I.p;
    return a !== 0 ? a : (a = window.event, a === void 0 ? 32 : J_(a.type));
  }
  function p1(a, i) {
    var o = I.p;
    try {
      return I.p = a, i();
    } finally {
      I.p = o;
    }
  }
  var Hr = Math.random().toString(36).slice(2), Me = "__reactFiber$" + Hr, Ye = "__reactProps$" + Hr, fi = "__reactContainer$" + Hr, hh = "__reactEvents$" + Hr, AP = "__reactListeners$" + Hr, wP = "__reactHandles$" + Hr, y1 = "__reactResources$" + Hr, Yu = "__reactMarker$" + Hr;
  function dh(a) {
    delete a[Me], delete a[Ye], delete a[hh], delete a[AP], delete a[wP];
  }
  function si(a) {
    var i = a[Me];
    if (i) return i;
    for (var o = a.parentNode; o; ) {
      if (i = o[fi] || o[Me]) {
        if (o = i.alternate, i.child !== null || o !== null && o.child !== null)
          for (a = $_(a); a !== null; ) {
            if (o = a[Me]) return o;
            a = $_(a);
          }
        return i;
      }
      a = o, o = a.parentNode;
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
  function Xu(a) {
    var i = a.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return a.stateNode;
    throw Error(r(33));
  }
  function di(a) {
    var i = a[y1];
    return i || (i = a[y1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), i;
  }
  function Ae(a) {
    a[Yu] = !0;
  }
  var m1 = /* @__PURE__ */ new Set(), g1 = {};
  function wa(a, i) {
    vi(a, i), vi(a + "Capture", i);
  }
  function vi(a, i) {
    for (g1[a] = i, a = 0; a < i.length; a++)
      m1.add(i[a]);
  }
  var TP = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), b1 = {}, x1 = {};
  function EP(a) {
    return Gn.call(x1, a) ? !0 : Gn.call(b1, a) ? !1 : TP.test(a) ? x1[a] = !0 : (b1[a] = !0, !1);
  }
  function Zl(a, i, o) {
    if (EP(i))
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
  function S1(a) {
    var i = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function MP(a, i, o) {
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
        set: function(S) {
          o = "" + S, m.call(this, S);
        }
      }), Object.defineProperty(a, i, {
        enumerable: f.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(S) {
          o = "" + S;
        },
        stopTracking: function() {
          a._valueTracker = null, delete a[i];
        }
      };
    }
  }
  function vh(a) {
    if (!a._valueTracker) {
      var i = S1(a) ? "checked" : "value";
      a._valueTracker = MP(
        a,
        i,
        "" + a[i]
      );
    }
  }
  function _1(a) {
    if (!a) return !1;
    var i = a._valueTracker;
    if (!i) return !0;
    var o = i.getValue(), f = "";
    return a && (f = S1(a) ? a.checked ? "true" : "false" : a.value), a = f, a !== o ? (i.setValue(a), !0) : !1;
  }
  function Wl(a) {
    if (a = a || (typeof document < "u" ? document : void 0), typeof a > "u") return null;
    try {
      return a.activeElement || a.body;
    } catch {
      return a.body;
    }
  }
  var jP = /[\n"\\]/g;
  function yn(a) {
    return a.replace(
      jP,
      function(i) {
        return "\\" + i.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ph(a, i, o, f, v, m, S, C) {
    a.name = "", S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? a.type = S : a.removeAttribute("type"), i != null ? S === "number" ? (i === 0 && a.value === "" || a.value != i) && (a.value = "" + pn(i)) : a.value !== "" + pn(i) && (a.value = "" + pn(i)) : S !== "submit" && S !== "reset" || a.removeAttribute("value"), i != null ? yh(a, S, pn(i)) : o != null ? yh(a, S, pn(o)) : f != null && a.removeAttribute("value"), v == null && m != null && (a.defaultChecked = !!m), v != null && (a.checked = v && typeof v != "function" && typeof v != "symbol"), C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? a.name = "" + pn(C) : a.removeAttribute("name");
  }
  function O1(a, i, o, f, v, m, S, C) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (a.type = m), i != null || o != null) {
      if (!(m !== "submit" && m !== "reset" || i != null)) {
        vh(a);
        return;
      }
      o = o != null ? "" + pn(o) : "", i = i != null ? "" + pn(i) : o, C || i === a.value || (a.value = i), a.defaultValue = i;
    }
    f = f ?? v, f = typeof f != "function" && typeof f != "symbol" && !!f, a.checked = C ? a.checked : !!f, a.defaultChecked = !!f, S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" && (a.name = S), vh(a);
  }
  function yh(a, i, o) {
    i === "number" && Wl(a.ownerDocument) === a || a.defaultValue === "" + o || (a.defaultValue = "" + o);
  }
  function pi(a, i, o, f) {
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
  function A1(a, i, o) {
    if (i != null && (i = "" + pn(i), i !== a.value && (a.value = i), o == null)) {
      a.defaultValue !== i && (a.defaultValue = i);
      return;
    }
    a.defaultValue = o != null ? "" + pn(o) : "";
  }
  function w1(a, i, o, f) {
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
    o = pn(i), a.defaultValue = o, f = a.textContent, f === o && f !== "" && f !== null && (a.value = f), vh(a);
  }
  function yi(a, i) {
    if (i) {
      var o = a.firstChild;
      if (o && o === a.lastChild && o.nodeType === 3) {
        o.nodeValue = i;
        return;
      }
    }
    a.textContent = i;
  }
  var CP = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function T1(a, i, o) {
    var f = i.indexOf("--") === 0;
    o == null || typeof o == "boolean" || o === "" ? f ? a.setProperty(i, "") : i === "float" ? a.cssFloat = "" : a[i] = "" : f ? a.setProperty(i, o) : typeof o != "number" || o === 0 || CP.has(i) ? i === "float" ? a.cssFloat = o : a[i] = ("" + o).trim() : a[i] = o + "px";
  }
  function E1(a, i, o) {
    if (i != null && typeof i != "object")
      throw Error(r(62));
    if (a = a.style, o != null) {
      for (var f in o)
        !o.hasOwnProperty(f) || i != null && i.hasOwnProperty(f) || (f.indexOf("--") === 0 ? a.setProperty(f, "") : f === "float" ? a.cssFloat = "" : a[f] = "");
      for (var v in i)
        f = i[v], i.hasOwnProperty(v) && o[v] !== f && T1(a, v, f);
    } else
      for (var m in i)
        i.hasOwnProperty(m) && T1(a, m, i[m]);
  }
  function mh(a) {
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
  var DP = /* @__PURE__ */ new Map([
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
  ]), PP = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jl(a) {
    return PP.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
  }
  function ur() {
  }
  var gh = null;
  function bh(a) {
    return a = a.target || a.srcElement || window, a.correspondingUseElement && (a = a.correspondingUseElement), a.nodeType === 3 ? a.parentNode : a;
  }
  var mi = null, gi = null;
  function M1(a) {
    var i = hi(a);
    if (i && (a = i.stateNode)) {
      var o = a[Ye] || null;
      t: switch (a = i.stateNode, i.type) {
        case "input":
          if (ph(
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
                ph(
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
              f = o[i], f.form === a.form && _1(f);
          }
          break t;
        case "textarea":
          A1(a, o.value, o.defaultValue);
          break t;
        case "select":
          i = o.value, i != null && pi(a, !!o.multiple, i, !1);
      }
    }
  }
  var xh = !1;
  function j1(a, i, o) {
    if (xh) return a(i, o);
    xh = !0;
    try {
      var f = a(i);
      return f;
    } finally {
      if (xh = !1, (mi !== null || gi !== null) && (Uc(), mi && (i = mi, a = gi, gi = mi = null, M1(i), a)))
        for (i = 0; i < a.length; i++) M1(a[i]);
    }
  }
  function Ku(a, i) {
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
  var or = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Sh = !1;
  if (or)
    try {
      var Vu = {};
      Object.defineProperty(Vu, "passive", {
        get: function() {
          Sh = !0;
        }
      }), window.addEventListener("test", Vu, Vu), window.removeEventListener("test", Vu, Vu);
    } catch {
      Sh = !1;
    }
  var Ir = null, _h = null, tc = null;
  function C1() {
    if (tc) return tc;
    var a, i = _h, o = i.length, f, v = "value" in Ir ? Ir.value : Ir.textContent, m = v.length;
    for (a = 0; a < o && i[a] === v[a]; a++) ;
    var S = o - a;
    for (f = 1; f <= S && i[o - f] === v[m - f]; f++) ;
    return tc = v.slice(a, 1 < f ? 1 - f : void 0);
  }
  function ec(a) {
    var i = a.keyCode;
    return "charCode" in a ? (a = a.charCode, a === 0 && i === 13 && (a = 13)) : a = i, a === 10 && (a = 13), 32 <= a || a === 13 ? a : 0;
  }
  function nc() {
    return !0;
  }
  function D1() {
    return !1;
  }
  function Xe(a) {
    function i(o, f, v, m, S) {
      this._reactName = o, this._targetInst = v, this.type = f, this.nativeEvent = m, this.target = S, this.currentTarget = null;
      for (var C in a)
        a.hasOwnProperty(C) && (o = a[C], this[C] = o ? o(m) : m[C]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? nc : D1, this.isPropagationStopped = D1, this;
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
  }, rc = Xe(Ta), Fu = p({}, Ta, { view: 0, detail: 0 }), NP = Xe(Fu), Oh, Ah, Zu, ac = p({}, Fu, {
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
    getModifierState: Th,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
      return "movementX" in a ? a.movementX : (a !== Zu && (Zu && a.type === "mousemove" ? (Oh = a.screenX - Zu.screenX, Ah = a.screenY - Zu.screenY) : Ah = Oh = 0, Zu = a), Oh);
    },
    movementY: function(a) {
      return "movementY" in a ? a.movementY : Ah;
    }
  }), P1 = Xe(ac), RP = p({}, ac, { dataTransfer: 0 }), qP = Xe(RP), zP = p({}, Fu, { relatedTarget: 0 }), wh = Xe(zP), $P = p({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), BP = Xe($P), LP = p({}, Ta, {
    clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }), UP = Xe(LP), kP = p({}, Ta, { data: 0 }), N1 = Xe(kP), HP = {
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
  }, IP = {
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
  }, GP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function YP(a) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(a) : (a = GP[a]) ? !!i[a] : !1;
  }
  function Th() {
    return YP;
  }
  var XP = p({}, Fu, {
    key: function(a) {
      if (a.key) {
        var i = HP[a.key] || a.key;
        if (i !== "Unidentified") return i;
      }
      return a.type === "keypress" ? (a = ec(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? IP[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Th,
    charCode: function(a) {
      return a.type === "keypress" ? ec(a) : 0;
    },
    keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    },
    which: function(a) {
      return a.type === "keypress" ? ec(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }
  }), KP = Xe(XP), VP = p({}, ac, {
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
  }), R1 = Xe(VP), FP = p({}, Fu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Th
  }), ZP = Xe(FP), QP = p({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), WP = Xe(QP), JP = p({}, ac, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tN = Xe(JP), eN = p({}, Ta, {
    newState: 0,
    oldState: 0
  }), nN = Xe(eN), rN = [9, 13, 27, 32], Eh = or && "CompositionEvent" in window, Qu = null;
  or && "documentMode" in document && (Qu = document.documentMode);
  var aN = or && "TextEvent" in window && !Qu, q1 = or && (!Eh || Qu && 8 < Qu && 11 >= Qu), z1 = " ", $1 = !1;
  function B1(a, i) {
    switch (a) {
      case "keyup":
        return rN.indexOf(i.keyCode) !== -1;
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
  function L1(a) {
    return a = a.detail, typeof a == "object" && "data" in a ? a.data : null;
  }
  var bi = !1;
  function iN(a, i) {
    switch (a) {
      case "compositionend":
        return L1(i);
      case "keypress":
        return i.which !== 32 ? null : ($1 = !0, z1);
      case "textInput":
        return a = i.data, a === z1 && $1 ? null : a;
      default:
        return null;
    }
  }
  function uN(a, i) {
    if (bi)
      return a === "compositionend" || !Eh && B1(a, i) ? (a = C1(), tc = _h = Ir = null, bi = !1, a) : null;
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
        return q1 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var oN = {
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
    return i === "input" ? !!oN[a.type] : i === "textarea";
  }
  function k1(a, i, o, f) {
    mi ? gi ? gi.push(f) : gi = [f] : mi = f, i = Kc(i, "onChange"), 0 < i.length && (o = new rc(
      "onChange",
      "change",
      null,
      o,
      f
    ), a.push({ event: o, listeners: i }));
  }
  var Wu = null, Ju = null;
  function lN(a) {
    O_(a, 0);
  }
  function ic(a) {
    var i = Xu(a);
    if (_1(i)) return a;
  }
  function H1(a, i) {
    if (a === "change") return i;
  }
  var I1 = !1;
  if (or) {
    var Mh;
    if (or) {
      var jh = "oninput" in document;
      if (!jh) {
        var G1 = document.createElement("div");
        G1.setAttribute("oninput", "return;"), jh = typeof G1.oninput == "function";
      }
      Mh = jh;
    } else Mh = !1;
    I1 = Mh && (!document.documentMode || 9 < document.documentMode);
  }
  function Y1() {
    Wu && (Wu.detachEvent("onpropertychange", X1), Ju = Wu = null);
  }
  function X1(a) {
    if (a.propertyName === "value" && ic(Ju)) {
      var i = [];
      k1(
        i,
        Ju,
        a,
        bh(a)
      ), j1(lN, i);
    }
  }
  function cN(a, i, o) {
    a === "focusin" ? (Y1(), Wu = i, Ju = o, Wu.attachEvent("onpropertychange", X1)) : a === "focusout" && Y1();
  }
  function fN(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return ic(Ju);
  }
  function sN(a, i) {
    if (a === "click") return ic(i);
  }
  function hN(a, i) {
    if (a === "input" || a === "change")
      return ic(i);
  }
  function dN(a, i) {
    return a === i && (a !== 0 || 1 / a === 1 / i) || a !== a && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : dN;
  function to(a, i) {
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
  function K1(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function V1(a, i) {
    var o = K1(a);
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
      o = K1(o);
    }
  }
  function F1(a, i) {
    return a && i ? a === i ? !0 : a && a.nodeType === 3 ? !1 : i && i.nodeType === 3 ? F1(a, i.parentNode) : "contains" in a ? a.contains(i) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Z1(a) {
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
  function Ch(a) {
    var i = a && a.nodeName && a.nodeName.toLowerCase();
    return i && (i === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || i === "textarea" || a.contentEditable === "true");
  }
  var vN = or && "documentMode" in document && 11 >= document.documentMode, xi = null, Dh = null, eo = null, Ph = !1;
  function Q1(a, i, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Ph || xi == null || xi !== Wl(f) || (f = xi, "selectionStart" in f && Ch(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = {
      anchorNode: f.anchorNode,
      anchorOffset: f.anchorOffset,
      focusNode: f.focusNode,
      focusOffset: f.focusOffset
    }), eo && to(eo, f) || (eo = f, f = Kc(Dh, "onSelect"), 0 < f.length && (i = new rc(
      "onSelect",
      "select",
      null,
      i,
      o
    ), a.push({ event: i, listeners: f }), i.target = xi)));
  }
  function Ea(a, i) {
    var o = {};
    return o[a.toLowerCase()] = i.toLowerCase(), o["Webkit" + a] = "webkit" + i, o["Moz" + a] = "moz" + i, o;
  }
  var Si = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, Nh = {}, W1 = {};
  or && (W1 = document.createElement("div").style, "AnimationEvent" in window || (delete Si.animationend.animation, delete Si.animationiteration.animation, delete Si.animationstart.animation), "TransitionEvent" in window || delete Si.transitionend.transition);
  function Ma(a) {
    if (Nh[a]) return Nh[a];
    if (!Si[a]) return a;
    var i = Si[a], o;
    for (o in i)
      if (i.hasOwnProperty(o) && o in W1)
        return Nh[a] = i[o];
    return a;
  }
  var J1 = Ma("animationend"), tx = Ma("animationiteration"), ex = Ma("animationstart"), pN = Ma("transitionrun"), yN = Ma("transitionstart"), mN = Ma("transitioncancel"), nx = Ma("transitionend"), rx = /* @__PURE__ */ new Map(), Rh = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Rh.push("scrollEnd");
  function qn(a, i) {
    rx.set(a, i), wa(i, [a]);
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
  }, mn = [], _i = 0, qh = 0;
  function oc() {
    for (var a = _i, i = qh = _i = 0; i < a; ) {
      var o = mn[i];
      mn[i++] = null;
      var f = mn[i];
      mn[i++] = null;
      var v = mn[i];
      mn[i++] = null;
      var m = mn[i];
      if (mn[i++] = null, f !== null && v !== null) {
        var S = f.pending;
        S === null ? v.next = v : (v.next = S.next, S.next = v), f.pending = v;
      }
      m !== 0 && ax(o, v, m);
    }
  }
  function lc(a, i, o, f) {
    mn[_i++] = a, mn[_i++] = i, mn[_i++] = o, mn[_i++] = f, qh |= f, a.lanes |= f, a = a.alternate, a !== null && (a.lanes |= f);
  }
  function zh(a, i, o, f) {
    return lc(a, i, o, f), cc(a);
  }
  function ja(a, i) {
    return lc(a, null, null, i), cc(a);
  }
  function ax(a, i, o) {
    a.lanes |= o;
    var f = a.alternate;
    f !== null && (f.lanes |= o);
    for (var v = !1, m = a.return; m !== null; )
      m.childLanes |= o, f = m.alternate, f !== null && (f.childLanes |= o), m.tag === 22 && (a = m.stateNode, a === null || a._visibility & 1 || (v = !0)), a = m, m = m.return;
    return a.tag === 3 ? (m = a.stateNode, v && i !== null && (v = 31 - en(o), a = m.hiddenUpdates, f = a[v], f === null ? a[v] = [i] : f.push(i), i.lane = o | 536870912), m) : null;
  }
  function cc(a) {
    if (50 < Ao)
      throw Ao = 0, Yd = null, Error(r(185));
    for (var i = a.return; i !== null; )
      a = i, i = a.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var Oi = {};
  function gN(a, i, o, f) {
    this.tag = a, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rn(a, i, o, f) {
    return new gN(a, i, o, f);
  }
  function $h(a) {
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
  function ix(a, i) {
    a.flags &= 65011714;
    var o = a.alternate;
    return o === null ? (a.childLanes = 0, a.lanes = i, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, i = o.dependencies, a.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), a;
  }
  function fc(a, i, o, f, v, m) {
    var S = 0;
    if (f = a, typeof a == "function") $h(a) && (S = 1);
    else if (typeof a == "string")
      S = OR(
        a,
        o,
        ft.current
      ) ? 26 : a === "html" || a === "head" || a === "body" ? 27 : 5;
    else
      t: switch (a) {
        case z:
          return a = rn(31, o, i, v), a.elementType = z, a.lanes = m, a;
        case _:
          return Ca(o.children, v, m, i);
        case x:
          S = 8, v |= 24;
          break;
        case T:
          return a = rn(12, o, i, v | 2), a.elementType = T, a.lanes = m, a;
        case A:
          return a = rn(13, o, i, v), a.elementType = A, a.lanes = m, a;
        case E:
          return a = rn(19, o, i, v), a.elementType = E, a.lanes = m, a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case M:
                S = 10;
                break t;
              case w:
                S = 9;
                break t;
              case j:
                S = 11;
                break t;
              case D:
                S = 14;
                break t;
              case R:
                S = 16, f = null;
                break t;
            }
          S = 29, o = Error(
            r(130, a === null ? "null" : typeof a, "")
          ), f = null;
      }
    return i = rn(S, o, i, v), i.elementType = a, i.type = f, i.lanes = m, i;
  }
  function Ca(a, i, o, f) {
    return a = rn(7, a, f, i), a.lanes = o, a;
  }
  function Bh(a, i, o) {
    return a = rn(6, a, null, i), a.lanes = o, a;
  }
  function ux(a) {
    var i = rn(18, null, null, 0);
    return i.stateNode = a, i;
  }
  function Lh(a, i, o) {
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
  var ox = /* @__PURE__ */ new WeakMap();
  function gn(a, i) {
    if (typeof a == "object" && a !== null) {
      var o = ox.get(a);
      return o !== void 0 ? o : (i = {
        value: a,
        source: i,
        stack: Nn(i)
      }, ox.set(a, i), i);
    }
    return {
      value: a,
      source: i,
      stack: Nn(i)
    };
  }
  var Ai = [], wi = 0, sc = null, no = 0, bn = [], xn = 0, Gr = null, Yn = 1, Xn = "";
  function cr(a, i) {
    Ai[wi++] = no, Ai[wi++] = sc, sc = a, no = i;
  }
  function lx(a, i, o) {
    bn[xn++] = Yn, bn[xn++] = Xn, bn[xn++] = Gr, Gr = a;
    var f = Yn;
    a = Xn;
    var v = 32 - en(f) - 1;
    f &= ~(1 << v), o += 1;
    var m = 32 - en(i) + v;
    if (30 < m) {
      var S = v - v % 5;
      m = (f & (1 << S) - 1).toString(32), f >>= S, v -= S, Yn = 1 << 32 - en(i) + v | o << v | f, Xn = m + a;
    } else
      Yn = 1 << m | o << v | f, Xn = a;
  }
  function Uh(a) {
    a.return !== null && (cr(a, 1), lx(a, 1, 0));
  }
  function kh(a) {
    for (; a === sc; )
      sc = Ai[--wi], Ai[wi] = null, no = Ai[--wi], Ai[wi] = null;
    for (; a === Gr; )
      Gr = bn[--xn], bn[xn] = null, Xn = bn[--xn], bn[xn] = null, Yn = bn[--xn], bn[xn] = null;
  }
  function cx(a, i) {
    bn[xn++] = Yn, bn[xn++] = Xn, bn[xn++] = Gr, Yn = i.id, Xn = i.overflow, Gr = a;
  }
  var je = null, ee = null, Rt = !1, Yr = null, Sn = !1, Hh = Error(r(519));
  function Xr(a) {
    var i = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ro(gn(i, a)), Hh;
  }
  function fx(a) {
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
        for (o = 0; o < To.length; o++)
          Dt(To[o], i);
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
        Dt("invalid", i), O1(
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
        Dt("invalid", i), w1(i, f.value, f.defaultValue, f.children);
    }
    o = f.children, typeof o != "string" && typeof o != "number" && typeof o != "bigint" || i.textContent === "" + o || f.suppressHydrationWarning === !0 || E_(i.textContent, o) ? (f.popover != null && (Dt("beforetoggle", i), Dt("toggle", i)), f.onScroll != null && Dt("scroll", i), f.onScrollEnd != null && Dt("scrollend", i), f.onClick != null && (i.onclick = ur), i = !0) : i = !1, i || Xr(a, !0);
  }
  function sx(a) {
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
    if (!Rt) return sx(a), Rt = !0, !1;
    var i = a.tag, o;
    if ((o = i !== 3 && i !== 27) && ((o = i === 5) && (o = a.type, o = !(o !== "form" && o !== "button") || uv(a.type, a.memoizedProps)), o = !o), o && ee && Xr(a), sx(a), i === 13) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      ee = z_(a);
    } else if (i === 31) {
      if (a = a.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
      ee = z_(a);
    } else
      i === 27 ? (i = ee, ua(a.type) ? (a = sv, sv = null, ee = a) : ee = i) : ee = je ? On(a.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    ee = je = null, Rt = !1;
  }
  function Ih() {
    var a = Yr;
    return a !== null && (Ze === null ? Ze = a : Ze.push.apply(
      Ze,
      a
    ), Yr = null), a;
  }
  function ro(a) {
    Yr === null ? Yr = [a] : Yr.push(a);
  }
  var Gh = P(null), Pa = null, fr = null;
  function Kr(a, i, o) {
    et(Gh, i._currentValue), i._currentValue = o;
  }
  function sr(a) {
    a._currentValue = Gh.current, k(Gh);
  }
  function Yh(a, i, o) {
    for (; a !== null; ) {
      var f = a.alternate;
      if ((a.childLanes & i) !== i ? (a.childLanes |= i, f !== null && (f.childLanes |= i)) : f !== null && (f.childLanes & i) !== i && (f.childLanes |= i), a === o) break;
      a = a.return;
    }
  }
  function Xh(a, i, o, f) {
    var v = a.child;
    for (v !== null && (v.return = a); v !== null; ) {
      var m = v.dependencies;
      if (m !== null) {
        var S = v.child;
        m = m.firstContext;
        t: for (; m !== null; ) {
          var C = m;
          m = v;
          for (var q = 0; q < i.length; q++)
            if (C.context === i[q]) {
              m.lanes |= o, C = m.alternate, C !== null && (C.lanes |= o), Yh(
                m.return,
                o,
                a
              ), f || (S = null);
              break t;
            }
          m = C.next;
        }
      } else if (v.tag === 18) {
        if (S = v.return, S === null) throw Error(r(341));
        S.lanes |= o, m = S.alternate, m !== null && (m.lanes |= o), Yh(S, o, a), S = null;
      } else S = v.child;
      if (S !== null) S.return = v;
      else
        for (S = v; S !== null; ) {
          if (S === a) {
            S = null;
            break;
          }
          if (v = S.sibling, v !== null) {
            v.return = S.return, S = v;
            break;
          }
          S = S.return;
        }
      v = S;
    }
  }
  function Ei(a, i, o, f) {
    a = null;
    for (var v = i, m = !1; v !== null; ) {
      if (!m) {
        if ((v.flags & 524288) !== 0) m = !0;
        else if ((v.flags & 262144) !== 0) break;
      }
      if (v.tag === 10) {
        var S = v.alternate;
        if (S === null) throw Error(r(387));
        if (S = S.memoizedProps, S !== null) {
          var C = v.type;
          nn(v.pendingProps.value, S.value) || (a !== null ? a.push(C) : a = [C]);
        }
      } else if (v === jt.current) {
        if (S = v.alternate, S === null) throw Error(r(387));
        S.memoizedState.memoizedState !== v.memoizedState.memoizedState && (a !== null ? a.push(Do) : a = [Do]);
      }
      v = v.return;
    }
    a !== null && Xh(
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
    return hx(Pa, a);
  }
  function dc(a, i) {
    return Pa === null && Na(a), hx(a, i);
  }
  function hx(a, i) {
    var o = i._currentValue;
    if (i = { context: i, memoizedValue: o, next: null }, fr === null) {
      if (a === null) throw Error(r(308));
      fr = i, a.dependencies = { lanes: 0, firstContext: i }, a.flags |= 524288;
    } else fr = fr.next = i;
    return o;
  }
  var bN = typeof AbortController < "u" ? AbortController : function() {
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
  }, xN = t.unstable_scheduleCallback, SN = t.unstable_NormalPriority, de = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Kh() {
    return {
      controller: new bN(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ao(a) {
    a.refCount--, a.refCount === 0 && xN(SN, function() {
      a.controller.abort();
    });
  }
  var io = null, Vh = 0, Mi = 0, ji = null;
  function _N(a, i) {
    if (io === null) {
      var o = io = [];
      Vh = 0, Mi = Qd(), ji = {
        status: "pending",
        value: void 0,
        then: function(f) {
          o.push(f);
        }
      };
    }
    return Vh++, i.then(dx, dx), i;
  }
  function dx() {
    if (--Vh === 0 && io !== null) {
      ji !== null && (ji.status = "fulfilled");
      var a = io;
      io = null, Mi = 0, ji = null;
      for (var i = 0; i < a.length; i++) (0, a[i])();
    }
  }
  function ON(a, i) {
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
  var vx = N.S;
  N.S = function(a, i) {
    QS = $e(), typeof i == "object" && i !== null && typeof i.then == "function" && _N(a, i), vx !== null && vx(a, i);
  };
  var Ra = P(null);
  function Fh() {
    var a = Ra.current;
    return a !== null ? a : Ft.pooledCache;
  }
  function vc(a, i) {
    i === null ? et(Ra, Ra.current) : et(Ra, i.pool);
  }
  function px() {
    var a = Fh();
    return a === null ? null : { parent: de._currentValue, pool: a };
  }
  var Ci = Error(r(460)), Zh = Error(r(474)), pc = Error(r(542)), yc = { then: function() {
  } };
  function yx(a) {
    return a = a.status, a === "fulfilled" || a === "rejected";
  }
  function mx(a, i, o) {
    switch (o = a[o], o === void 0 ? a.push(i) : o !== i && (i.then(ur, ur), i = o), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw a = i.reason, bx(a), a;
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
            throw a = i.reason, bx(a), a;
        }
        throw za = i, Ci;
    }
  }
  function qa(a) {
    try {
      var i = a._init;
      return i(a._payload);
    } catch (o) {
      throw o !== null && typeof o == "object" && typeof o.then == "function" ? (za = o, Ci) : o;
    }
  }
  var za = null;
  function gx() {
    if (za === null) throw Error(r(459));
    var a = za;
    return za = null, a;
  }
  function bx(a) {
    if (a === Ci || a === pc)
      throw Error(r(483));
  }
  var Di = null, uo = 0;
  function mc(a) {
    var i = uo;
    return uo += 1, Di === null && (Di = []), mx(Di, a, i);
  }
  function oo(a, i) {
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
  function xx(a) {
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
    function S(H) {
      return a && H.alternate === null && (H.flags |= 67108866), H;
    }
    function C(H, L, G, nt) {
      return L === null || L.tag !== 6 ? (L = Bh(G, H.mode, nt), L.return = H, L) : (L = v(L, G), L.return = H, L);
    }
    function q(H, L, G, nt) {
      var yt = G.type;
      return yt === _ ? J(
        H,
        L,
        G.props.children,
        nt,
        G.key
      ) : L !== null && (L.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === R && qa(yt) === L.type) ? (L = v(L, G.props), oo(L, G), L.return = H, L) : (L = fc(
        G.type,
        G.key,
        G.props,
        null,
        H.mode,
        nt
      ), oo(L, G), L.return = H, L);
    }
    function Y(H, L, G, nt) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== G.containerInfo || L.stateNode.implementation !== G.implementation ? (L = Lh(G, H.mode, nt), L.return = H, L) : (L = v(L, G.children || []), L.return = H, L);
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
        return L = Bh(
          "" + L,
          H.mode,
          G
        ), L.return = H, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            return G = fc(
              L.type,
              L.key,
              L.props,
              null,
              H.mode,
              G
            ), oo(G, L), G.return = H, G;
          case O:
            return L = Lh(
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
          return at(H, mc(L), G);
        if (L.$$typeof === M)
          return at(
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
        return o(H, pt), Rt && cr(H, Tt), yt;
      if (pt === null) {
        for (; !$t.done; Tt++, $t = G.next())
          $t = at(H, $t.value, nt), $t !== null && (L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t);
        return Rt && cr(H, Tt), yt;
      }
      for (pt = f(pt); !$t.done; Tt++, $t = G.next())
        $t = Q(pt, H, Tt, $t.value, nt), $t !== null && (a && $t.alternate !== null && pt.delete($t.key === null ? Tt : $t.key), L = m($t, L, Tt), zt === null ? yt = $t : zt.sibling = $t, zt = $t);
      return a && pt.forEach(function(RR) {
        return i(H, RR);
      }), Rt && cr(H, Tt), yt;
    }
    function Kt(H, L, G, nt) {
      if (typeof G == "object" && G !== null && G.type === _ && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case b:
            t: {
              for (var yt = G.key; L !== null; ) {
                if (L.key === yt) {
                  if (yt = G.type, yt === _) {
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
                    ), nt = v(L, G.props), oo(nt, G), nt.return = H, H = nt;
                    break t;
                  }
                  o(H, L);
                  break;
                } else i(H, L);
                L = L.sibling;
              }
              G.type === _ ? (nt = Ca(
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
              ), oo(nt, G), nt.return = H, H = nt);
            }
            return S(H);
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
              nt = Lh(G, H.mode, nt), nt.return = H, H = nt;
            }
            return S(H);
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
      return typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint" ? (G = "" + G, L !== null && L.tag === 6 ? (o(H, L.sibling), nt = v(L, G), nt.return = H, H = nt) : (o(H, L), nt = Bh(G, H.mode, nt), nt.return = H, H = nt), S(H)) : o(H, L);
    }
    return function(H, L, G, nt) {
      try {
        uo = 0;
        var yt = Kt(
          H,
          L,
          G,
          nt
        );
        return Di = null, yt;
      } catch (pt) {
        if (pt === Ci || pt === pc) throw pt;
        var zt = rn(29, pt, null, H.mode);
        return zt.lanes = nt, zt.return = H, zt;
      } finally {
      }
    };
  }
  var $a = xx(!0), Sx = xx(!1), Vr = !1;
  function Qh(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wh(a, i) {
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
      return v === null ? i.next = i : (i.next = v.next, v.next = i), f.pending = i, i = cc(a), ax(a, null, o), i;
    }
    return lc(a, f, i, o), cc(a);
  }
  function lo(a, i, o) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (o & 4194048) !== 0)) {
      var f = i.lanes;
      f &= a.pendingLanes, o |= f, i.lanes = o, h1(a, o);
    }
  }
  function Jh(a, i) {
    var o = a.updateQueue, f = a.alternate;
    if (f !== null && (f = f.updateQueue, o === f)) {
      var v = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var S = {
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          };
          m === null ? v = m = S : m = m.next = S, o = o.next;
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
  var td = !1;
  function co() {
    if (td) {
      var a = ji;
      if (a !== null) throw a;
    }
  }
  function fo(a, i, o, f) {
    td = !1;
    var v = a.updateQueue;
    Vr = !1;
    var m = v.firstBaseUpdate, S = v.lastBaseUpdate, C = v.shared.pending;
    if (C !== null) {
      v.shared.pending = null;
      var q = C, Y = q.next;
      q.next = null, S === null ? m = Y : S.next = Y, S = q;
      var J = a.alternate;
      J !== null && (J = J.updateQueue, C = J.lastBaseUpdate, C !== S && (C === null ? J.firstBaseUpdate = Y : C.next = Y, J.lastBaseUpdate = q));
    }
    if (m !== null) {
      var at = v.baseState;
      S = 0, J = Y = q = null, C = m;
      do {
        var X = C.lane & -536870913, Q = X !== C.lane;
        if (Q ? (Pt & X) === X : (f & X) === X) {
          X !== 0 && X === Mi && (td = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: null,
            next: null
          });
          t: {
            var dt = a, gt = C;
            X = i;
            var Kt = o;
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
          }, J === null ? (Y = J = Q, q = at) : J = J.next = Q, S |= X;
        if (C = C.next, C === null) {
          if (C = v.shared.pending, C === null)
            break;
          Q = C, C = Q.next, Q.next = null, v.lastBaseUpdate = Q, v.shared.pending = null;
        }
      } while (!0);
      J === null && (q = at), v.baseState = q, v.firstBaseUpdate = Y, v.lastBaseUpdate = J, m === null && (v.shared.lanes = 0), ea |= S, a.lanes = S, a.memoizedState = at;
    }
  }
  function _x(a, i) {
    if (typeof a != "function")
      throw Error(r(191, a));
    a.call(i);
  }
  function Ox(a, i) {
    var o = a.callbacks;
    if (o !== null)
      for (a.callbacks = null, a = 0; a < o.length; a++)
        _x(o[a], i);
  }
  var Pi = P(null), bc = P(0);
  function Ax(a, i) {
    a = xr, et(bc, a), et(Pi, i), xr = a | i.baseLanes;
  }
  function ed() {
    et(bc, xr), et(Pi, Pi.current);
  }
  function nd() {
    xr = bc.current, k(Pi), k(bc);
  }
  var an = P(null), _n = null;
  function Qr(a) {
    var i = a.alternate;
    et(se, se.current & 1), et(an, a), _n === null && (i === null || Pi.current !== null || i.memoizedState !== null) && (_n = a);
  }
  function rd(a) {
    et(se, se.current), et(an, a), _n === null && (_n = a);
  }
  function wx(a) {
    a.tag === 22 ? (et(se, se.current), et(an, a), _n === null && (_n = a)) : Wr();
  }
  function Wr() {
    et(se, se.current), et(an, an.current);
  }
  function un(a) {
    k(an), _n === a && (_n = null), k(se);
  }
  var se = P(0);
  function xc(a) {
    for (var i = a; i !== null; ) {
      if (i.tag === 13) {
        var o = i.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || cv(o) || fv(o)))
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
  var hr = 0, Ot = null, Yt = null, ve = null, Sc = !1, Ni = !1, Ba = !1, _c = 0, so = 0, Ri = null, AN = 0;
  function le() {
    throw Error(r(321));
  }
  function ad(a, i) {
    if (i === null) return !1;
    for (var o = 0; o < i.length && o < a.length; o++)
      if (!nn(a[o], i[o])) return !1;
    return !0;
  }
  function id(a, i, o, f, v, m) {
    return hr = m, Ot = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, N.H = a === null || a.memoizedState === null ? lS : xd, Ba = !1, m = o(f, v), Ba = !1, Ni && (m = Ex(
      i,
      o,
      f,
      v
    )), Tx(a), m;
  }
  function Tx(a) {
    N.H = po;
    var i = Yt !== null && Yt.next !== null;
    if (hr = 0, ve = Yt = Ot = null, Sc = !1, so = 0, Ri = null, i) throw Error(r(300));
    a === null || pe || (a = a.dependencies, a !== null && hc(a) && (pe = !0));
  }
  function Ex(a, i, o, f) {
    Ot = a;
    var v = 0;
    do {
      if (Ni && (Ri = null), so = 0, Ni = !1, 25 <= v) throw Error(r(301));
      if (v += 1, ve = Yt = null, a.updateQueue != null) {
        var m = a.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      N.H = cS, m = i(o, f);
    } while (Ni);
    return m;
  }
  function wN() {
    var a = N.H, i = a.useState()[0];
    return i = typeof i.then == "function" ? ho(i) : i, a = a.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== a && (Ot.flags |= 1024), i;
  }
  function ud() {
    var a = _c !== 0;
    return _c = 0, a;
  }
  function od(a, i, o) {
    i.updateQueue = a.updateQueue, i.flags &= -2053, a.lanes &= ~o;
  }
  function ld(a) {
    if (Sc) {
      for (a = a.memoizedState; a !== null; ) {
        var i = a.queue;
        i !== null && (i.pending = null), a = a.next;
      }
      Sc = !1;
    }
    hr = 0, ve = Yt = Ot = null, Ni = !1, so = _c = 0, Ri = null;
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
  function ho(a) {
    var i = so;
    return so += 1, Ri === null && (Ri = []), a = mx(Ri, a, i), i = Ot, (ve === null ? i.memoizedState : ve.next) === null && (i = i.alternate, N.H = i === null || i.memoizedState === null ? lS : xd), a;
  }
  function Ac(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return ho(a);
      if (a.$$typeof === M) return Ce(a);
    }
    throw Error(r(438, String(a)));
  }
  function cd(a) {
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
    return fd(i, Yt, a);
  }
  function fd(a, i, o) {
    var f = a.queue;
    if (f === null) throw Error(r(311));
    f.lastRenderedReducer = o;
    var v = a.baseQueue, m = f.pending;
    if (m !== null) {
      if (v !== null) {
        var S = v.next;
        v.next = m.next, m.next = S;
      }
      i.baseQueue = v = m, f.pending = null;
    }
    if (m = a.baseState, v === null) a.memoizedState = m;
    else {
      i = v.next;
      var C = S = null, q = null, Y = i, J = !1;
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
            }, q === null ? (C = q = at, S = m) : q = q.next = at, Ot.lanes |= X, ea |= X;
          at = Y.action, Ba && o(m, at), m = Y.hasEagerState ? Y.eagerState : o(m, at);
        } else
          X = {
            lane: at,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, q === null ? (C = q = X, S = m) : q = q.next = X, Ot.lanes |= at, ea |= at;
        Y = Y.next;
      } while (Y !== null && Y !== i);
      if (q === null ? S = m : q.next = C, !nn(m, a.memoizedState) && (pe = !0, J && (o = ji, o !== null)))
        throw o;
      a.memoizedState = m, a.baseState = S, a.baseQueue = q, f.lastRenderedState = m;
    }
    return v === null && (f.lanes = 0), [a.memoizedState, f.dispatch];
  }
  function sd(a) {
    var i = he(), o = i.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = a;
    var f = o.dispatch, v = o.pending, m = i.memoizedState;
    if (v !== null) {
      o.pending = null;
      var S = v = v.next;
      do
        m = a(m, S.action), S = S.next;
      while (S !== v);
      nn(m, i.memoizedState) || (pe = !0), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
    }
    return [m, f];
  }
  function Mx(a, i, o) {
    var f = Ot, v = he(), m = Rt;
    if (m) {
      if (o === void 0) throw Error(r(407));
      o = o();
    } else o = i();
    var S = !nn(
      (Yt || v).memoizedState,
      o
    );
    if (S && (v.memoizedState = o, pe = !0), v = v.queue, vd(Dx.bind(null, f, v, a), [
      a
    ]), v.getSnapshot !== i || S || ve !== null && ve.memoizedState.tag & 1) {
      if (f.flags |= 2048, qi(
        9,
        { destroy: void 0 },
        Cx.bind(
          null,
          f,
          v,
          o,
          i
        ),
        null
      ), Ft === null) throw Error(r(349));
      m || (hr & 127) !== 0 || jx(f, i, o);
    }
    return o;
  }
  function jx(a, i, o) {
    a.flags |= 16384, a = { getSnapshot: i, value: o }, i = Ot.updateQueue, i === null ? (i = Oc(), Ot.updateQueue = i, i.stores = [a]) : (o = i.stores, o === null ? i.stores = [a] : o.push(a));
  }
  function Cx(a, i, o, f) {
    i.value = o, i.getSnapshot = f, Px(i) && Nx(a);
  }
  function Dx(a, i, o) {
    return o(function() {
      Px(i) && Nx(a);
    });
  }
  function Px(a) {
    var i = a.getSnapshot;
    a = a.value;
    try {
      var o = i();
      return !nn(a, o);
    } catch {
      return !0;
    }
  }
  function Nx(a) {
    var i = ja(a, 2);
    i !== null && Qe(i, a, 2);
  }
  function hd(a) {
    var i = He();
    if (typeof a == "function") {
      var o = a;
      if (a = o(), Ba) {
        kr(!0);
        try {
          o();
        } finally {
          kr(!1);
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
  function Rx(a, i, o, f) {
    return a.baseState = o, fd(
      a,
      Yt,
      typeof f == "function" ? f : dr
    );
  }
  function TN(a, i, o, f, v) {
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
        then: function(S) {
          m.listeners.push(S);
        }
      };
      N.T !== null ? o(!0) : m.isTransition = !1, f(m), o = i.pending, o === null ? (m.next = i.pending = m, qx(i, m)) : (m.next = o.next, i.pending = o.next = m);
    }
  }
  function qx(a, i) {
    var o = i.action, f = i.payload, v = a.state;
    if (i.isTransition) {
      var m = N.T, S = {};
      N.T = S;
      try {
        var C = o(v, f), q = N.S;
        q !== null && q(S, C), zx(a, i, C);
      } catch (Y) {
        dd(a, i, Y);
      } finally {
        m !== null && S.types !== null && (m.types = S.types), N.T = m;
      }
    } else
      try {
        m = o(v, f), zx(a, i, m);
      } catch (Y) {
        dd(a, i, Y);
      }
  }
  function zx(a, i, o) {
    o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(
      function(f) {
        $x(a, i, f);
      },
      function(f) {
        return dd(a, i, f);
      }
    ) : $x(a, i, o);
  }
  function $x(a, i, o) {
    i.status = "fulfilled", i.value = o, Bx(i), a.state = o, i = a.pending, i !== null && (o = i.next, o === i ? a.pending = null : (o = o.next, i.next = o, qx(a, o)));
  }
  function dd(a, i, o) {
    var f = a.pending;
    if (a.pending = null, f !== null) {
      f = f.next;
      do
        i.status = "rejected", i.reason = o, Bx(i), i = i.next;
      while (i !== f);
    }
    a.action = null;
  }
  function Bx(a) {
    a = a.listeners;
    for (var i = 0; i < a.length; i++) (0, a[i])();
  }
  function Lx(a, i) {
    return i;
  }
  function Ux(a, i) {
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
      lastRenderedReducer: Lx,
      lastRenderedState: i
    }, o.queue = f, o = iS.bind(
      null,
      Ot,
      f
    ), f.dispatch = o, f = hd(!1), m = bd.bind(
      null,
      Ot,
      !1,
      f.queue
    ), f = He(), v = {
      state: i,
      dispatch: null,
      action: a,
      pending: null
    }, f.queue = v, o = TN.bind(
      null,
      Ot,
      v,
      m,
      o
    ), v.dispatch = o, f.memoizedState = a, [i, o, !1];
  }
  function kx(a) {
    var i = he();
    return Hx(i, Yt, a);
  }
  function Hx(a, i, o) {
    if (i = fd(
      a,
      i,
      Lx
    )[0], a = wc(dr)[0], typeof i == "object" && i !== null && typeof i.then == "function")
      try {
        var f = ho(i);
      } catch (S) {
        throw S === Ci ? pc : S;
      }
    else f = i;
    i = he();
    var v = i.queue, m = v.dispatch;
    return o !== i.memoizedState && (Ot.flags |= 2048, qi(
      9,
      { destroy: void 0 },
      EN.bind(null, v, o),
      null
    )), [f, m, a];
  }
  function EN(a, i) {
    a.action = i;
  }
  function Ix(a) {
    var i = he(), o = Yt;
    if (o !== null)
      return Hx(i, o, a);
    he(), i = i.memoizedState, o = he();
    var f = o.queue.dispatch;
    return o.memoizedState = a, [i, f, !1];
  }
  function qi(a, i, o, f) {
    return a = { tag: a, create: o, deps: f, inst: i, next: null }, i = Ot.updateQueue, i === null && (i = Oc(), Ot.updateQueue = i), o = i.lastEffect, o === null ? i.lastEffect = a.next = a : (f = o.next, o.next = a, a.next = f, i.lastEffect = a), a;
  }
  function Gx() {
    return he().memoizedState;
  }
  function Tc(a, i, o, f) {
    var v = He();
    Ot.flags |= a, v.memoizedState = qi(
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
    Yt !== null && f !== null && ad(f, Yt.memoizedState.deps) ? v.memoizedState = qi(i, m, o, f) : (Ot.flags |= a, v.memoizedState = qi(
      1 | i,
      m,
      o,
      f
    ));
  }
  function Yx(a, i) {
    Tc(8390656, 8, a, i);
  }
  function vd(a, i) {
    Ec(2048, 8, a, i);
  }
  function MN(a) {
    Ot.flags |= 4;
    var i = Ot.updateQueue;
    if (i === null)
      i = Oc(), Ot.updateQueue = i, i.events = [a];
    else {
      var o = i.events;
      o === null ? i.events = [a] : o.push(a);
    }
  }
  function Xx(a) {
    var i = he().memoizedState;
    return MN({ ref: i, nextImpl: a }), function() {
      if ((Lt & 2) !== 0) throw Error(r(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function Kx(a, i) {
    return Ec(4, 2, a, i);
  }
  function Vx(a, i) {
    return Ec(4, 4, a, i);
  }
  function Fx(a, i) {
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
  function Zx(a, i, o) {
    o = o != null ? o.concat([a]) : null, Ec(4, 4, Fx.bind(null, i, a), o);
  }
  function pd() {
  }
  function Qx(a, i) {
    var o = he();
    i = i === void 0 ? null : i;
    var f = o.memoizedState;
    return i !== null && ad(i, f[1]) ? f[0] : (o.memoizedState = [a, i], a);
  }
  function Wx(a, i) {
    var o = he();
    i = i === void 0 ? null : i;
    var f = o.memoizedState;
    if (i !== null && ad(i, f[1]))
      return f[0];
    if (f = a(), Ba) {
      kr(!0);
      try {
        a();
      } finally {
        kr(!1);
      }
    }
    return o.memoizedState = [f, i], f;
  }
  function yd(a, i, o) {
    return o === void 0 || (hr & 1073741824) !== 0 && (Pt & 261930) === 0 ? a.memoizedState = i : (a.memoizedState = o, a = JS(), Ot.lanes |= a, ea |= a, o);
  }
  function Jx(a, i, o, f) {
    return nn(o, i) ? o : Pi.current !== null ? (a = yd(a, o, f), nn(a, i) || (pe = !0), a) : (hr & 42) === 0 || (hr & 1073741824) !== 0 && (Pt & 261930) === 0 ? (pe = !0, a.memoizedState = o) : (a = JS(), Ot.lanes |= a, ea |= a, i);
  }
  function tS(a, i, o, f, v) {
    var m = I.p;
    I.p = m !== 0 && 8 > m ? m : 8;
    var S = N.T, C = {};
    N.T = C, bd(a, !1, i, o);
    try {
      var q = v(), Y = N.S;
      if (Y !== null && Y(C, q), q !== null && typeof q == "object" && typeof q.then == "function") {
        var J = ON(
          q,
          f
        );
        vo(
          a,
          i,
          J,
          cn(a)
        );
      } else
        vo(
          a,
          i,
          f,
          cn(a)
        );
    } catch (at) {
      vo(
        a,
        i,
        { then: function() {
        }, status: "rejected", reason: at },
        cn()
      );
    } finally {
      I.p = m, S !== null && C.types !== null && (S.types = C.types), N.T = S;
    }
  }
  function jN() {
  }
  function md(a, i, o, f) {
    if (a.tag !== 5) throw Error(r(476));
    var v = eS(a).queue;
    tS(
      a,
      v,
      i,
      W,
      o === null ? jN : function() {
        return nS(a), o(f);
      }
    );
  }
  function eS(a) {
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
  function nS(a) {
    var i = eS(a);
    i.next === null && (i = a.alternate.memoizedState), vo(
      a,
      i.next.queue,
      {},
      cn()
    );
  }
  function gd() {
    return Ce(Do);
  }
  function rS() {
    return he().memoizedState;
  }
  function aS() {
    return he().memoizedState;
  }
  function CN(a) {
    for (var i = a.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var o = cn();
          a = Fr(o);
          var f = Zr(i, a, o);
          f !== null && (Qe(f, i, o), lo(f, i, o)), i = { cache: Kh() }, a.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function DN(a, i, o) {
    var f = cn();
    o = {
      lane: f,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mc(a) ? uS(i, o) : (o = zh(a, i, o, f), o !== null && (Qe(o, a, f), oS(o, i, f)));
  }
  function iS(a, i, o) {
    var f = cn();
    vo(a, i, o, f);
  }
  function vo(a, i, o, f) {
    var v = {
      lane: f,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Mc(a)) uS(i, v);
    else {
      var m = a.alternate;
      if (a.lanes === 0 && (m === null || m.lanes === 0) && (m = i.lastRenderedReducer, m !== null))
        try {
          var S = i.lastRenderedState, C = m(S, o);
          if (v.hasEagerState = !0, v.eagerState = C, nn(C, S))
            return lc(a, i, v, 0), Ft === null && oc(), !1;
        } catch {
        } finally {
        }
      if (o = zh(a, i, v, f), o !== null)
        return Qe(o, a, f), oS(o, i, f), !0;
    }
    return !1;
  }
  function bd(a, i, o, f) {
    if (f = {
      lane: 2,
      revertLane: Qd(),
      gesture: null,
      action: f,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mc(a)) {
      if (i) throw Error(r(479));
    } else
      i = zh(
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
  function uS(a, i) {
    Ni = Sc = !0;
    var o = a.pending;
    o === null ? i.next = i : (i.next = o.next, o.next = i), a.pending = i;
  }
  function oS(a, i, o) {
    if ((o & 4194048) !== 0) {
      var f = i.lanes;
      f &= a.pendingLanes, o |= f, i.lanes = o, h1(a, o);
    }
  }
  var po = {
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
  po.useEffectEvent = le;
  var lS = {
    readContext: Ce,
    use: Ac,
    useCallback: function(a, i) {
      return He().memoizedState = [
        a,
        i === void 0 ? null : i
      ], a;
    },
    useContext: Ce,
    useEffect: Yx,
    useImperativeHandle: function(a, i, o) {
      o = o != null ? o.concat([a]) : null, Tc(
        4194308,
        4,
        Fx.bind(null, i, a),
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
        kr(!0);
        try {
          a();
        } finally {
          kr(!1);
        }
      }
      return o.memoizedState = [f, i], f;
    },
    useReducer: function(a, i, o) {
      var f = He();
      if (o !== void 0) {
        var v = o(i);
        if (Ba) {
          kr(!0);
          try {
            o(i);
          } finally {
            kr(!1);
          }
        }
      } else v = i;
      return f.memoizedState = f.baseState = v, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: v
      }, f.queue = a, a = a.dispatch = DN.bind(
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
      a = hd(a);
      var i = a.queue, o = iS.bind(null, Ot, i);
      return i.dispatch = o, [a.memoizedState, o];
    },
    useDebugValue: pd,
    useDeferredValue: function(a, i) {
      var o = He();
      return yd(o, a, i);
    },
    useTransition: function() {
      var a = hd(!1);
      return a = tS.bind(
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
        (Pt & 127) !== 0 || jx(f, i, o);
      }
      v.memoizedState = o;
      var m = { value: o, getSnapshot: i };
      return v.queue = m, Yx(Dx.bind(null, f, m, a), [
        a
      ]), f.flags |= 2048, qi(
        9,
        { destroy: void 0 },
        Cx.bind(
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
        o = AN++, i = "_" + i + "r_" + o.toString(32) + "_";
      return a.memoizedState = i;
    },
    useHostTransitionStatus: gd,
    useFormState: Ux,
    useActionState: Ux,
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
      return i.queue = o, i = bd.bind(
        null,
        Ot,
        !0,
        o
      ), o.dispatch = i, [a, i];
    },
    useMemoCache: cd,
    useCacheRefresh: function() {
      return He().memoizedState = CN.bind(
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
  }, xd = {
    readContext: Ce,
    use: Ac,
    useCallback: Qx,
    useContext: Ce,
    useEffect: vd,
    useImperativeHandle: Zx,
    useInsertionEffect: Kx,
    useLayoutEffect: Vx,
    useMemo: Wx,
    useReducer: wc,
    useRef: Gx,
    useState: function() {
      return wc(dr);
    },
    useDebugValue: pd,
    useDeferredValue: function(a, i) {
      var o = he();
      return Jx(
        o,
        Yt.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = wc(dr)[0], i = he().memoizedState;
      return [
        typeof a == "boolean" ? a : ho(a),
        i
      ];
    },
    useSyncExternalStore: Mx,
    useId: rS,
    useHostTransitionStatus: gd,
    useFormState: kx,
    useActionState: kx,
    useOptimistic: function(a, i) {
      var o = he();
      return Rx(o, Yt, a, i);
    },
    useMemoCache: cd,
    useCacheRefresh: aS
  };
  xd.useEffectEvent = Xx;
  var cS = {
    readContext: Ce,
    use: Ac,
    useCallback: Qx,
    useContext: Ce,
    useEffect: vd,
    useImperativeHandle: Zx,
    useInsertionEffect: Kx,
    useLayoutEffect: Vx,
    useMemo: Wx,
    useReducer: sd,
    useRef: Gx,
    useState: function() {
      return sd(dr);
    },
    useDebugValue: pd,
    useDeferredValue: function(a, i) {
      var o = he();
      return Yt === null ? yd(o, a, i) : Jx(
        o,
        Yt.memoizedState,
        a,
        i
      );
    },
    useTransition: function() {
      var a = sd(dr)[0], i = he().memoizedState;
      return [
        typeof a == "boolean" ? a : ho(a),
        i
      ];
    },
    useSyncExternalStore: Mx,
    useId: rS,
    useHostTransitionStatus: gd,
    useFormState: Ix,
    useActionState: Ix,
    useOptimistic: function(a, i) {
      var o = he();
      return Yt !== null ? Rx(o, Yt, a, i) : (o.baseState = a, [a, o.queue.dispatch]);
    },
    useMemoCache: cd,
    useCacheRefresh: aS
  };
  cS.useEffectEvent = Xx;
  function Sd(a, i, o, f) {
    i = a.memoizedState, o = o(f, i), o = o == null ? i : p({}, i, o), a.memoizedState = o, a.lanes === 0 && (a.updateQueue.baseState = o);
  }
  var _d = {
    enqueueSetState: function(a, i, o) {
      a = a._reactInternals;
      var f = cn(), v = Fr(f);
      v.payload = i, o != null && (v.callback = o), i = Zr(a, v, f), i !== null && (Qe(i, a, f), lo(i, a, f));
    },
    enqueueReplaceState: function(a, i, o) {
      a = a._reactInternals;
      var f = cn(), v = Fr(f);
      v.tag = 1, v.payload = i, o != null && (v.callback = o), i = Zr(a, v, f), i !== null && (Qe(i, a, f), lo(i, a, f));
    },
    enqueueForceUpdate: function(a, i) {
      a = a._reactInternals;
      var o = cn(), f = Fr(o);
      f.tag = 2, i != null && (f.callback = i), i = Zr(a, f, o), i !== null && (Qe(i, a, o), lo(i, a, o));
    }
  };
  function fS(a, i, o, f, v, m, S) {
    return a = a.stateNode, typeof a.shouldComponentUpdate == "function" ? a.shouldComponentUpdate(f, m, S) : i.prototype && i.prototype.isPureReactComponent ? !to(o, f) || !to(v, m) : !0;
  }
  function sS(a, i, o, f) {
    a = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(o, f), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(o, f), i.state !== a && _d.enqueueReplaceState(i, i.state, null);
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
  function hS(a) {
    uc(a);
  }
  function dS(a) {
    console.error(a);
  }
  function vS(a) {
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
  function pS(a, i, o) {
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
  function Od(a, i, o) {
    return o = Fr(o), o.tag = 3, o.payload = { element: null }, o.callback = function() {
      jc(a, i);
    }, o;
  }
  function yS(a) {
    return a = Fr(a), a.tag = 3, a;
  }
  function mS(a, i, o, f) {
    var v = o.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var m = f.value;
      a.payload = function() {
        return v(m);
      }, a.callback = function() {
        pS(i, o, f);
      };
    }
    var S = o.stateNode;
    S !== null && typeof S.componentDidCatch == "function" && (a.callback = function() {
      pS(i, o, f), typeof v != "function" && (na === null ? na = /* @__PURE__ */ new Set([this]) : na.add(this));
      var C = f.stack;
      this.componentDidCatch(f.value, {
        componentStack: C !== null ? C : ""
      });
    });
  }
  function PN(a, i, o, f, v) {
    if (o.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
      if (i = o.alternate, i !== null && Ei(
        i,
        o,
        v,
        !0
      ), o = an.current, o !== null) {
        switch (o.tag) {
          case 31:
          case 13:
            return _n === null ? kc() : o.alternate === null && ce === 0 && (ce = 3), o.flags &= -257, o.flags |= 65536, o.lanes = v, f === yc ? o.flags |= 16384 : (i = o.updateQueue, i === null ? o.updateQueue = /* @__PURE__ */ new Set([f]) : i.add(f), Vd(a, f, v)), !1;
          case 22:
            return o.flags |= 65536, f === yc ? o.flags |= 16384 : (i = o.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([f])
            }, o.updateQueue = i) : (o = i.retryQueue, o === null ? i.retryQueue = /* @__PURE__ */ new Set([f]) : o.add(f)), Vd(a, f, v)), !1;
        }
        throw Error(r(435, o.tag));
      }
      return Vd(a, f, v), kc(), !1;
    }
    if (Rt)
      return i = an.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = v, f !== Hh && (a = Error(r(422), { cause: f }), ro(gn(a, o)))) : (f !== Hh && (i = Error(r(423), {
        cause: f
      }), ro(
        gn(i, o)
      )), a = a.current.alternate, a.flags |= 65536, v &= -v, a.lanes |= v, f = gn(f, o), v = Od(
        a.stateNode,
        f,
        v
      ), Jh(a, v), ce !== 4 && (ce = 2)), !1;
    var m = Error(r(520), { cause: f });
    if (m = gn(m, o), Oo === null ? Oo = [m] : Oo.push(m), ce !== 4 && (ce = 2), i === null) return !0;
    f = gn(f, o), o = i;
    do {
      switch (o.tag) {
        case 3:
          return o.flags |= 65536, a = v & -v, o.lanes |= a, a = Od(o.stateNode, f, a), Jh(o, a), !1;
        case 1:
          if (i = o.type, m = o.stateNode, (o.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (na === null || !na.has(m))))
            return o.flags |= 65536, v &= -v, o.lanes |= v, v = yS(v), mS(
              v,
              a,
              o,
              f
            ), Jh(o, v), !1;
      }
      o = o.return;
    } while (o !== null);
    return !1;
  }
  var Ad = Error(r(461)), pe = !1;
  function De(a, i, o, f) {
    i.child = a === null ? Sx(i, null, o, f) : $a(
      i,
      a.child,
      o,
      f
    );
  }
  function gS(a, i, o, f, v) {
    o = o.render;
    var m = i.ref;
    if ("ref" in f) {
      var S = {};
      for (var C in f)
        C !== "ref" && (S[C] = f[C]);
    } else S = f;
    return Na(i), f = id(
      a,
      i,
      o,
      S,
      m,
      v
    ), C = ud(), a !== null && !pe ? (od(a, i, v), vr(a, i, v)) : (Rt && C && Uh(i), i.flags |= 1, De(a, i, f, v), i.child);
  }
  function bS(a, i, o, f, v) {
    if (a === null) {
      var m = o.type;
      return typeof m == "function" && !$h(m) && m.defaultProps === void 0 && o.compare === null ? (i.tag = 15, i.type = m, xS(
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
    if (m = a.child, !Pd(a, v)) {
      var S = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : to, o(S, f) && a.ref === i.ref)
        return vr(a, i, v);
    }
    return i.flags |= 1, a = lr(m, f), a.ref = i.ref, a.return = i, i.child = a;
  }
  function xS(a, i, o, f, v) {
    if (a !== null) {
      var m = a.memoizedProps;
      if (to(m, f) && a.ref === i.ref)
        if (pe = !1, i.pendingProps = f = m, Pd(a, v))
          (a.flags & 131072) !== 0 && (pe = !0);
        else
          return i.lanes = a.lanes, vr(a, i, v);
    }
    return wd(
      a,
      i,
      o,
      f,
      v
    );
  }
  function SS(a, i, o, f) {
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
        return _S(
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
        ), m !== null ? Ax(i, m) : ed(), wx(i);
      else
        return f = i.lanes = 536870912, _S(
          a,
          i,
          m !== null ? m.baseLanes | o : o,
          o,
          f
        );
    } else
      m !== null ? (vc(i, m.cachePool), Ax(i, m), Wr(), i.memoizedState = null) : (a !== null && vc(i, null), ed(), Wr());
    return De(a, i, v, o), i.child;
  }
  function yo(a, i) {
    return a !== null && a.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function _S(a, i, o, f, v) {
    var m = Fh();
    return m = m === null ? null : { parent: de._currentValue, pool: m }, i.memoizedState = {
      baseLanes: o,
      cachePool: m
    }, a !== null && vc(i, null), ed(), wx(i), a !== null && Ei(a, i, f, !0), i.childLanes = v, null;
  }
  function Cc(a, i) {
    return i = Pc(
      { mode: i.mode, children: i.children },
      a.mode
    ), i.ref = a.ref, a.child = i, i.return = a, i;
  }
  function OS(a, i, o) {
    return $a(i, a.child, null, o), a = Cc(i, i.pendingProps), a.flags |= 2, un(i), i.memoizedState = null, a;
  }
  function NN(a, i, o) {
    var f = i.pendingProps, v = (i.flags & 128) !== 0;
    if (i.flags &= -129, a === null) {
      if (Rt) {
        if (f.mode === "hidden")
          return a = Cc(i, f), i.lanes = 536870912, yo(null, a);
        if (rd(i), (a = ee) ? (a = q_(
          a,
          Sn
        ), a = a !== null && a.data === "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: Gr !== null ? { id: Yn, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, o = ux(a), o.return = i, i.child = o, je = i, ee = null)) : a = null, a === null) throw Xr(i);
        return i.lanes = 536870912, null;
      }
      return Cc(i, f);
    }
    var m = a.memoizedState;
    if (m !== null) {
      var S = m.dehydrated;
      if (rd(i), v)
        if (i.flags & 256)
          i.flags &= -257, i = OS(
            a,
            i,
            o
          );
        else if (i.memoizedState !== null)
          i.child = a.child, i.flags |= 128, i = null;
        else throw Error(r(558));
      else if (pe || Ei(a, i, o, !1), v = (o & a.childLanes) !== 0, pe || v) {
        if (f = Ft, f !== null && (S = d1(f, o), S !== 0 && S !== m.retryLane))
          throw m.retryLane = S, ja(a, S), Qe(f, a, S), Ad;
        kc(), i = OS(
          a,
          i,
          o
        );
      } else
        a = m.treeContext, ee = On(S.nextSibling), je = i, Rt = !0, Yr = null, Sn = !1, a !== null && cx(i, a), i = Cc(i, f), i.flags |= 4096;
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
  function wd(a, i, o, f, v) {
    return Na(i), o = id(
      a,
      i,
      o,
      f,
      void 0,
      v
    ), f = ud(), a !== null && !pe ? (od(a, i, v), vr(a, i, v)) : (Rt && f && Uh(i), i.flags |= 1, De(a, i, o, v), i.child);
  }
  function AS(a, i, o, f, v, m) {
    return Na(i), i.updateQueue = null, o = Ex(
      i,
      f,
      o,
      v
    ), Tx(a), f = ud(), a !== null && !pe ? (od(a, i, m), vr(a, i, m)) : (Rt && f && Uh(i), i.flags |= 1, De(a, i, o, m), i.child);
  }
  function wS(a, i, o, f, v) {
    if (Na(i), i.stateNode === null) {
      var m = Oi, S = o.contextType;
      typeof S == "object" && S !== null && (m = Ce(S)), m = new o(f, m), i.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = _d, i.stateNode = m, m._reactInternals = i, m = i.stateNode, m.props = f, m.state = i.memoizedState, m.refs = {}, Qh(i), S = o.contextType, m.context = typeof S == "object" && S !== null ? Ce(S) : Oi, m.state = i.memoizedState, S = o.getDerivedStateFromProps, typeof S == "function" && (Sd(
        i,
        o,
        S,
        f
      ), m.state = i.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (S = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), S !== m.state && _d.enqueueReplaceState(m, m.state, null), fo(i, f, m, v), co(), m.state = i.memoizedState), typeof m.componentDidMount == "function" && (i.flags |= 4194308), f = !0;
    } else if (a === null) {
      m = i.stateNode;
      var C = i.memoizedProps, q = La(o, C);
      m.props = q;
      var Y = m.context, J = o.contextType;
      S = Oi, typeof J == "object" && J !== null && (S = Ce(J));
      var at = o.getDerivedStateFromProps;
      J = typeof at == "function" || typeof m.getSnapshotBeforeUpdate == "function", C = i.pendingProps !== C, J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C || Y !== S) && sS(
        i,
        m,
        f,
        S
      ), Vr = !1;
      var X = i.memoizedState;
      m.state = X, fo(i, f, m, v), co(), Y = i.memoizedState, C || X !== Y || Vr ? (typeof at == "function" && (Sd(
        i,
        o,
        at,
        f
      ), Y = i.memoizedState), (q = Vr || fS(
        i,
        o,
        q,
        f,
        X,
        Y,
        S
      )) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = f, i.memoizedState = Y), m.props = f, m.state = Y, m.context = S, f = q) : (typeof m.componentDidMount == "function" && (i.flags |= 4194308), f = !1);
    } else {
      m = i.stateNode, Wh(a, i), S = i.memoizedProps, J = La(o, S), m.props = J, at = i.pendingProps, X = m.context, Y = o.contextType, q = Oi, typeof Y == "object" && Y !== null && (q = Ce(Y)), C = o.getDerivedStateFromProps, (Y = typeof C == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== at || X !== q) && sS(
        i,
        m,
        f,
        q
      ), Vr = !1, X = i.memoizedState, m.state = X, fo(i, f, m, v), co();
      var Q = i.memoizedState;
      S !== at || X !== Q || Vr || a !== null && a.dependencies !== null && hc(a.dependencies) ? (typeof C == "function" && (Sd(
        i,
        o,
        C,
        f
      ), Q = i.memoizedState), (J = Vr || fS(
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
      )), typeof m.componentDidUpdate == "function" && (i.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === a.memoizedProps && X === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === a.memoizedProps && X === a.memoizedState || (i.flags |= 1024), i.memoizedProps = f, i.memoizedState = Q), m.props = f, m.state = Q, m.context = q, f = J) : (typeof m.componentDidUpdate != "function" || S === a.memoizedProps && X === a.memoizedState || (i.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === a.memoizedProps && X === a.memoizedState || (i.flags |= 1024), f = !1);
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
  function TS(a, i, o, f) {
    return Da(), i.flags |= 256, De(a, i, o, f), i.child;
  }
  var Td = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ed(a) {
    return { baseLanes: a, cachePool: px() };
  }
  function Md(a, i, o) {
    return a = a !== null ? a.childLanes & ~o : 0, i && (a |= ln), a;
  }
  function ES(a, i, o) {
    var f = i.pendingProps, v = !1, m = (i.flags & 128) !== 0, S;
    if ((S = m) || (S = a !== null && a.memoizedState === null ? !1 : (se.current & 2) !== 0), S && (v = !0, i.flags &= -129), S = (i.flags & 32) !== 0, i.flags &= -33, a === null) {
      if (Rt) {
        if (v ? Qr(i) : Wr(), (a = ee) ? (a = q_(
          a,
          Sn
        ), a = a !== null && a.data !== "&" ? a : null, a !== null && (i.memoizedState = {
          dehydrated: a,
          treeContext: Gr !== null ? { id: Yn, overflow: Xn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, o = ux(a), o.return = i, i.child = o, je = i, ee = null)) : a = null, a === null) throw Xr(i);
        return fv(a) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var C = f.children;
      return f = f.fallback, v ? (Wr(), v = i.mode, C = Pc(
        { mode: "hidden", children: C },
        v
      ), f = Ca(
        f,
        v,
        o,
        null
      ), C.return = i, f.return = i, C.sibling = f, i.child = C, f = i.child, f.memoizedState = Ed(o), f.childLanes = Md(
        a,
        S,
        o
      ), i.memoizedState = Td, yo(null, f)) : (Qr(i), jd(i, C));
    }
    var q = a.memoizedState;
    if (q !== null && (C = q.dehydrated, C !== null)) {
      if (m)
        i.flags & 256 ? (Qr(i), i.flags &= -257, i = Cd(
          a,
          i,
          o
        )) : i.memoizedState !== null ? (Wr(), i.child = a.child, i.flags |= 128, i = null) : (Wr(), C = f.fallback, v = i.mode, f = Pc(
          { mode: "visible", children: f.children },
          v
        ), C = Ca(
          C,
          v,
          o,
          null
        ), C.flags |= 2, f.return = i, C.return = i, f.sibling = C, i.child = f, $a(
          i,
          a.child,
          null,
          o
        ), f = i.child, f.memoizedState = Ed(o), f.childLanes = Md(
          a,
          S,
          o
        ), i.memoizedState = Td, i = yo(null, f));
      else if (Qr(i), fv(C)) {
        if (S = C.nextSibling && C.nextSibling.dataset, S) var Y = S.dgst;
        S = Y, f = Error(r(419)), f.stack = "", f.digest = S, ro({ value: f, source: null, stack: null }), i = Cd(
          a,
          i,
          o
        );
      } else if (pe || Ei(a, i, o, !1), S = (o & a.childLanes) !== 0, pe || S) {
        if (S = Ft, S !== null && (f = d1(S, o), f !== 0 && f !== q.retryLane))
          throw q.retryLane = f, ja(a, f), Qe(S, a, f), Ad;
        cv(C) || kc(), i = Cd(
          a,
          i,
          o
        );
      } else
        cv(C) ? (i.flags |= 192, i.child = a.child, i = null) : (a = q.treeContext, ee = On(
          C.nextSibling
        ), je = i, Rt = !0, Yr = null, Sn = !1, a !== null && cx(i, a), i = jd(
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
      o,
      null
    ), C.flags |= 2), C.return = i, f.return = i, f.sibling = C, i.child = f, yo(null, f), f = i.child, C = a.child.memoizedState, C === null ? C = Ed(o) : (v = C.cachePool, v !== null ? (q = de._currentValue, v = v.parent !== q ? { parent: q, pool: q } : v) : v = px(), C = {
      baseLanes: C.baseLanes | o,
      cachePool: v
    }), f.memoizedState = C, f.childLanes = Md(
      a,
      S,
      o
    ), i.memoizedState = Td, yo(a.child, f)) : (Qr(i), o = a.child, a = o.sibling, o = lr(o, {
      mode: "visible",
      children: f.children
    }), o.return = i, o.sibling = null, a !== null && (S = i.deletions, S === null ? (i.deletions = [a], i.flags |= 16) : S.push(a)), i.child = o, i.memoizedState = null, o);
  }
  function jd(a, i) {
    return i = Pc(
      { mode: "visible", children: i },
      a.mode
    ), i.return = a, a.child = i;
  }
  function Pc(a, i) {
    return a = rn(22, a, null, i), a.lanes = 0, a;
  }
  function Cd(a, i, o) {
    return $a(i, a.child, null, o), a = jd(
      i,
      i.pendingProps.children
    ), a.flags |= 2, i.memoizedState = null, a;
  }
  function MS(a, i, o) {
    a.lanes |= i;
    var f = a.alternate;
    f !== null && (f.lanes |= i), Yh(a.return, i, o);
  }
  function Dd(a, i, o, f, v, m) {
    var S = a.memoizedState;
    S === null ? a.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: f,
      tail: o,
      tailMode: v,
      treeForkCount: m
    } : (S.isBackwards = i, S.rendering = null, S.renderingStartTime = 0, S.last = f, S.tail = o, S.tailMode = v, S.treeForkCount = m);
  }
  function jS(a, i, o) {
    var f = i.pendingProps, v = f.revealOrder, m = f.tail;
    f = f.children;
    var S = se.current, C = (S & 2) !== 0;
    if (C ? (S = S & 1 | 2, i.flags |= 128) : S &= 1, et(se, S), De(a, i, f, o), f = Rt ? no : 0, !C && a !== null && (a.flags & 128) !== 0)
      t: for (a = i.child; a !== null; ) {
        if (a.tag === 13)
          a.memoizedState !== null && MS(a, o, i);
        else if (a.tag === 19)
          MS(a, o, i);
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
        o = v, o === null ? (v = i.child, i.child = null) : (v = o.sibling, o.sibling = null), Dd(
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
        Dd(
          i,
          !0,
          o,
          null,
          m,
          f
        );
        break;
      case "together":
        Dd(
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
        if (Ei(
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
  function Pd(a, i) {
    return (a.lanes & i) !== 0 ? !0 : (a = a.dependencies, !!(a !== null && hc(a)));
  }
  function RN(a, i, o) {
    switch (i.tag) {
      case 3:
        Ut(i, i.stateNode.containerInfo), Kr(i, de, a.memoizedState.cache), Da();
        break;
      case 27:
      case 5:
        xt(i);
        break;
      case 4:
        Ut(i, i.stateNode.containerInfo);
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
          return i.flags |= 128, rd(i), null;
        break;
      case 13:
        var f = i.memoizedState;
        if (f !== null)
          return f.dehydrated !== null ? (Qr(i), i.flags |= 128, null) : (o & i.child.childLanes) !== 0 ? ES(a, i, o) : (Qr(i), a = vr(
            a,
            i,
            o
          ), a !== null ? a.sibling : null);
        Qr(i);
        break;
      case 19:
        var v = (a.flags & 128) !== 0;
        if (f = (o & i.childLanes) !== 0, f || (Ei(
          a,
          i,
          o,
          !1
        ), f = (o & i.childLanes) !== 0), v) {
          if (f)
            return jS(
              a,
              i,
              o
            );
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), et(se, se.current), f) break;
        return null;
      case 22:
        return i.lanes = 0, SS(
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
  function CS(a, i, o) {
    if (a !== null)
      if (a.memoizedProps !== i.pendingProps)
        pe = !0;
      else {
        if (!Pd(a, o) && (i.flags & 128) === 0)
          return pe = !1, RN(
            a,
            i,
            o
          );
        pe = (a.flags & 131072) !== 0;
      }
    else
      pe = !1, Rt && (i.flags & 1048576) !== 0 && lx(i, no, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        t: {
          var f = i.pendingProps;
          if (a = qa(i.elementType), i.type = a, typeof a == "function")
            $h(a) ? (f = La(a, f), i.tag = 1, i = wS(
              null,
              i,
              a,
              f,
              o
            )) : (i.tag = 0, i = wd(
              null,
              i,
              a,
              f,
              o
            ));
          else {
            if (a != null) {
              var v = a.$$typeof;
              if (v === j) {
                i.tag = 11, i = gS(
                  null,
                  i,
                  a,
                  f,
                  o
                );
                break t;
              } else if (v === D) {
                i.tag = 14, i = bS(
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
        return wd(
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
        ), wS(
          a,
          i,
          f,
          v,
          o
        );
      case 3:
        t: {
          if (Ut(
            i,
            i.stateNode.containerInfo
          ), a === null) throw Error(r(387));
          f = i.pendingProps;
          var m = i.memoizedState;
          v = m.element, Wh(a, i), fo(i, f, null, o);
          var S = i.memoizedState;
          if (f = S.cache, Kr(i, de, f), f !== m.cache && Xh(
            i,
            [de],
            o,
            !0
          ), co(), f = S.element, m.isDehydrated)
            if (m = {
              element: f,
              isDehydrated: !1,
              cache: S.cache
            }, i.updateQueue.baseState = m, i.memoizedState = m, i.flags & 256) {
              i = TS(
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
              ), ro(v), i = TS(
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
              for (ee = On(a.firstChild), je = i, Rt = !0, Yr = null, Sn = !0, o = Sx(
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
        return Dc(a, i), a === null ? (o = k_(
          i.type,
          null,
          i.pendingProps,
          null
        )) ? i.memoizedState = o : Rt || (o = i.type, a = i.pendingProps, f = Vc(
          mt.current
        ).createElement(o), f[Me] = i, f[Ye] = a, Pe(f, o, a), Ae(f), i.stateNode = f) : i.memoizedState = k_(
          i.type,
          a.memoizedProps,
          i.pendingProps,
          a.memoizedState
        ), null;
      case 27:
        return xt(i), a === null && Rt && (f = i.stateNode = B_(
          i.type,
          i.pendingProps,
          mt.current
        ), je = i, Sn = !0, v = ee, ua(i.type) ? (sv = v, ee = On(f.firstChild)) : ee = v), De(
          a,
          i,
          i.pendingProps.children,
          o
        ), Dc(a, i), a === null && (i.flags |= 4194304), i.child;
      case 5:
        return a === null && Rt && ((v = f = ee) && (f = fR(
          f,
          i.type,
          i.pendingProps,
          Sn
        ), f !== null ? (i.stateNode = f, je = i, ee = On(f.firstChild), Sn = !1, v = !0) : v = !1), v || Xr(i)), xt(i), v = i.type, m = i.pendingProps, S = a !== null ? a.memoizedProps : null, f = m.children, uv(v, m) ? f = null : S !== null && uv(v, S) && (i.flags |= 32), i.memoizedState !== null && (v = id(
          a,
          i,
          wN,
          null,
          null,
          o
        ), Do._currentValue = v), Dc(a, i), De(a, i, f, o), i.child;
      case 6:
        return a === null && Rt && ((a = o = ee) && (o = sR(
          o,
          i.pendingProps,
          Sn
        ), o !== null ? (i.stateNode = o, je = i, ee = null, a = !0) : a = !1), a || Xr(i)), null;
      case 13:
        return ES(a, i, o);
      case 4:
        return Ut(
          i,
          i.stateNode.containerInfo
        ), f = i.pendingProps, a === null ? i.child = $a(
          i,
          null,
          f,
          o
        ) : De(a, i, f, o), i.child;
      case 11:
        return gS(
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
        return bS(
          a,
          i,
          i.type,
          i.pendingProps,
          o
        );
      case 15:
        return xS(
          a,
          i,
          i.type,
          i.pendingProps,
          o
        );
      case 19:
        return jS(a, i, o);
      case 31:
        return NN(a, i, o);
      case 22:
        return SS(
          a,
          i,
          o,
          i.pendingProps
        );
      case 24:
        return Na(i), f = Ce(de), a === null ? (v = Fh(), v === null && (v = Ft, m = Kh(), v.pooledCache = m, m.refCount++, m !== null && (v.pooledCacheLanes |= o), v = m), i.memoizedState = { parent: f, cache: v }, Qh(i), Kr(i, de, v)) : ((a.lanes & o) !== 0 && (Wh(a, i), fo(i, null, null, o), co()), v = a.memoizedState, m = i.memoizedState, v.parent !== f ? (v = { parent: f, cache: f }, i.memoizedState = v, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = v), Kr(i, de, f)) : (f = m.cache, Kr(i, de, f), f !== v.cache && Xh(
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
  function Nd(a, i, o, f, v) {
    if ((i = (a.mode & 32) !== 0) && (i = !1), i) {
      if (a.flags |= 16777216, (v & 335544128) === v)
        if (a.stateNode.complete) a.flags |= 8192;
        else if (r_()) a.flags |= 8192;
        else
          throw za = yc, Zh;
    } else a.flags &= -16777217;
  }
  function DS(a, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      a.flags &= -16777217;
    else if (a.flags |= 16777216, !X_(i))
      if (r_()) a.flags |= 8192;
      else
        throw za = yc, Zh;
  }
  function Nc(a, i) {
    i !== null && (a.flags |= 4), a.flags & 16384 && (i = a.tag !== 22 ? f1() : 536870912, a.lanes |= i, Li |= i);
  }
  function mo(a, i) {
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
  function qN(a, i, o) {
    var f = i.pendingProps;
    switch (kh(i), i.tag) {
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
        return o = i.stateNode, f = null, a !== null && (f = a.memoizedState.cache), i.memoizedState.cache !== f && (i.flags |= 2048), sr(de), ct(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (a === null || a.child === null) && (Ti(i) ? pr(i) : a === null || a.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Ih())), ne(i), null;
      case 26:
        var v = i.type, m = i.memoizedState;
        return a === null ? (pr(i), m !== null ? (ne(i), DS(i, m)) : (ne(i), Nd(
          i,
          v,
          null,
          f,
          o
        ))) : m ? m !== a.memoizedState ? (pr(i), ne(i), DS(i, m)) : (ne(i), i.flags &= -16777217) : (a = a.memoizedProps, a !== f && pr(i), ne(i), Nd(
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
          a = ft.current, Ti(i) ? fx(i) : (a = B_(v, f, o), i.stateNode = a, pr(i));
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
            fx(i);
          else {
            var S = Vc(
              mt.current
            );
            switch (m) {
              case 1:
                m = S.createElementNS(
                  "http://www.w3.org/2000/svg",
                  v
                );
                break;
              case 2:
                m = S.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  v
                );
                break;
              default:
                switch (v) {
                  case "svg":
                    m = S.createElementNS(
                      "http://www.w3.org/2000/svg",
                      v
                    );
                    break;
                  case "math":
                    m = S.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      v
                    );
                    break;
                  case "script":
                    m = S.createElement("div"), m.innerHTML = "<script><\/script>", m = m.removeChild(
                      m.firstChild
                    );
                    break;
                  case "select":
                    m = typeof f.is == "string" ? S.createElement("select", {
                      is: f.is
                    }) : S.createElement("select"), f.multiple ? m.multiple = !0 : f.size && (m.size = f.size);
                    break;
                  default:
                    m = typeof f.is == "string" ? S.createElement(v, { is: f.is }) : S.createElement(v);
                }
            }
            m[Me] = i, m[Ye] = f;
            t: for (S = i.child; S !== null; ) {
              if (S.tag === 5 || S.tag === 6)
                m.appendChild(S.stateNode);
              else if (S.tag !== 4 && S.tag !== 27 && S.child !== null) {
                S.child.return = S, S = S.child;
                continue;
              }
              if (S === i) break t;
              for (; S.sibling === null; ) {
                if (S.return === null || S.return === i)
                  break t;
                S = S.return;
              }
              S.sibling.return = S.return, S = S.sibling;
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
        return ne(i), Nd(
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
          if (a = mt.current, Ti(i)) {
            if (a = i.stateNode, o = i.memoizedProps, f = null, v = je, v !== null)
              switch (v.tag) {
                case 27:
                case 5:
                  f = v.memoizedProps;
              }
            a[Me] = i, a = !!(a.nodeValue === o || f !== null && f.suppressHydrationWarning === !0 || E_(a.nodeValue, o)), a || Xr(i, !0);
          } else
            a = Vc(a).createTextNode(
              f
            ), a[Me] = i, i.stateNode = a;
        }
        return ne(i), null;
      case 31:
        if (o = i.memoizedState, a === null || a.memoizedState !== null) {
          if (f = Ti(i), o !== null) {
            if (a === null) {
              if (!f) throw Error(r(318));
              if (a = i.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(557));
              a[Me] = i;
            } else
              Da(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            ne(i), a = !1;
          } else
            o = Ih(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = o), a = !0;
          if (!a)
            return i.flags & 256 ? (un(i), i) : (un(i), null);
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
            v = Ih(), a !== null && a.memoizedState !== null && (a.memoizedState.hydrationErrors = v), v = !0;
          if (!v)
            return i.flags & 256 ? (un(i), i) : (un(i), null);
        }
        return un(i), (i.flags & 128) !== 0 ? (i.lanes = o, i) : (o = f !== null, a = a !== null && a.memoizedState !== null, o && (f = i.child, v = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (v = f.alternate.memoizedState.cachePool.pool), m = null, f.memoizedState !== null && f.memoizedState.cachePool !== null && (m = f.memoizedState.cachePool.pool), m !== v && (f.flags |= 2048)), o !== a && o && (i.child.flags |= 8192), Nc(i, i.updateQueue), ne(i), null);
      case 4:
        return ct(), a === null && ev(i.stateNode.containerInfo), ne(i), null;
      case 10:
        return sr(i.type), ne(i), null;
      case 19:
        if (k(se), f = i.memoizedState, f === null) return ne(i), null;
        if (v = (i.flags & 128) !== 0, m = f.rendering, m === null)
          if (v) mo(f, !1);
          else {
            if (ce !== 0 || a !== null && (a.flags & 128) !== 0)
              for (a = i.child; a !== null; ) {
                if (m = xc(a), m !== null) {
                  for (i.flags |= 128, mo(f, !1), a = m.updateQueue, i.updateQueue = a, Nc(i, a), i.subtreeFlags = 0, a = o, o = i.child; o !== null; )
                    ix(o, a), o = o.sibling;
                  return et(
                    se,
                    se.current & 1 | 2
                  ), Rt && cr(i, f.treeForkCount), i.child;
                }
                a = a.sibling;
              }
            f.tail !== null && $e() > Bc && (i.flags |= 128, v = !0, mo(f, !1), i.lanes = 4194304);
          }
        else {
          if (!v)
            if (a = xc(m), a !== null) {
              if (i.flags |= 128, v = !0, a = a.updateQueue, i.updateQueue = a, Nc(i, a), mo(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !Rt)
                return ne(i), null;
            } else
              2 * $e() - f.renderingStartTime > Bc && o !== 536870912 && (i.flags |= 128, v = !0, mo(f, !1), i.lanes = 4194304);
          f.isBackwards ? (m.sibling = i.child, i.child = m) : (a = f.last, a !== null ? a.sibling = m : i.child = m, f.last = m);
        }
        return f.tail !== null ? (a = f.tail, f.rendering = a, f.tail = a.sibling, f.renderingStartTime = $e(), a.sibling = null, o = se.current, et(
          se,
          v ? o & 1 | 2 : o & 1
        ), Rt && cr(i, f.treeForkCount), a) : (ne(i), null);
      case 22:
      case 23:
        return un(i), nd(), f = i.memoizedState !== null, a !== null ? a.memoizedState !== null !== f && (i.flags |= 8192) : f && (i.flags |= 8192), f ? (o & 536870912) !== 0 && (i.flags & 128) === 0 && (ne(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : ne(i), o = i.updateQueue, o !== null && Nc(i, o.retryQueue), o = null, a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048), a !== null && k(Ra), null;
      case 24:
        return o = null, a !== null && (o = a.memoizedState.cache), i.memoizedState.cache !== o && (i.flags |= 2048), sr(de), ne(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function zN(a, i) {
    switch (kh(i), i.tag) {
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
        return k(se), null;
      case 4:
        return ct(), null;
      case 10:
        return sr(i.type), null;
      case 22:
      case 23:
        return un(i), nd(), a !== null && k(Ra), a = i.flags, a & 65536 ? (i.flags = a & -65537 | 128, i) : null;
      case 24:
        return sr(de), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function PS(a, i) {
    switch (kh(i), i.tag) {
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
        k(se);
        break;
      case 10:
        sr(i.type);
        break;
      case 22:
      case 23:
        un(i), nd(), a !== null && k(Ra);
        break;
      case 24:
        sr(de);
    }
  }
  function go(a, i) {
    try {
      var o = i.updateQueue, f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var v = f.next;
        o = v;
        do {
          if ((o.tag & a) === a) {
            f = void 0;
            var m = o.create, S = o.inst;
            f = m(), S.destroy = f;
          }
          o = o.next;
        } while (o !== v);
      }
    } catch (C) {
      Gt(i, i.return, C);
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
            var S = f.inst, C = S.destroy;
            if (C !== void 0) {
              S.destroy = void 0, v = i;
              var q = o, Y = C;
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
  function NS(a) {
    var i = a.updateQueue;
    if (i !== null) {
      var o = a.stateNode;
      try {
        Ox(i, o);
      } catch (f) {
        Gt(a, a.return, f);
      }
    }
  }
  function RS(a, i, o) {
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
  function bo(a, i) {
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
  function qS(a) {
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
  function Rd(a, i, o) {
    try {
      var f = a.stateNode;
      aR(f, a.type, o, i), f[Ye] = i;
    } catch (v) {
      Gt(a, a.return, v);
    }
  }
  function zS(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 26 || a.tag === 27 && ua(a.type) || a.tag === 4;
  }
  function qd(a) {
    t: for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || zS(a.return)) return null;
        a = a.return;
      }
      for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.tag === 27 && ua(a.type) || a.flags & 2 || a.child === null || a.tag === 4) continue t;
        a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function zd(a, i, o) {
    var f = a.tag;
    if (f === 5 || f === 6)
      a = a.stateNode, i ? (o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o).insertBefore(a, i) : (i = o.nodeType === 9 ? o.body : o.nodeName === "HTML" ? o.ownerDocument.body : o, i.appendChild(a), o = o._reactRootContainer, o != null || i.onclick !== null || (i.onclick = ur));
    else if (f !== 4 && (f === 27 && ua(a.type) && (o = a.stateNode, i = null), a = a.child, a !== null))
      for (zd(a, i, o), a = a.sibling; a !== null; )
        zd(a, i, o), a = a.sibling;
  }
  function Rc(a, i, o) {
    var f = a.tag;
    if (f === 5 || f === 6)
      a = a.stateNode, i ? o.insertBefore(a, i) : o.appendChild(a);
    else if (f !== 4 && (f === 27 && ua(a.type) && (o = a.stateNode), a = a.child, a !== null))
      for (Rc(a, i, o), a = a.sibling; a !== null; )
        Rc(a, i, o), a = a.sibling;
  }
  function $S(a) {
    var i = a.stateNode, o = a.memoizedProps;
    try {
      for (var f = a.type, v = i.attributes; v.length; )
        i.removeAttributeNode(v[0]);
      Pe(i, f, o), i[Me] = a, i[Ye] = o;
    } catch (m) {
      Gt(a, a.return, m);
    }
  }
  var yr = !1, ye = !1, $d = !1, BS = typeof WeakSet == "function" ? WeakSet : Set, we = null;
  function $N(a, i) {
    if (a = a.containerInfo, av = ef, a = Z1(a), Ch(a)) {
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
            var S = 0, C = -1, q = -1, Y = 0, J = 0, at = a, X = null;
            e: for (; ; ) {
              for (var Q; at !== o || v !== 0 && at.nodeType !== 3 || (C = S + v), at !== m || f !== 0 && at.nodeType !== 3 || (q = S + f), at.nodeType === 3 && (S += at.nodeValue.length), (Q = at.firstChild) !== null; )
                X = at, at = Q;
              for (; ; ) {
                if (at === a) break e;
                if (X === o && ++Y === v && (C = S), X === m && ++J === f && (q = S), (Q = at.nextSibling) !== null) break;
                at = X, X = at.parentNode;
              }
              at = Q;
            }
            o = C === -1 || q === -1 ? null : { start: C, end: q };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (iv = { focusedElem: a, selectionRange: o }, ef = !1, we = i; we !== null; )
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
                  lv(a);
                else if (o === 1)
                  switch (a.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lv(a);
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
  function LS(a, i, o) {
    var f = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        gr(a, o), f & 4 && go(5, o);
        break;
      case 1:
        if (gr(a, o), f & 4)
          if (a = o.stateNode, i === null)
            try {
              a.componentDidMount();
            } catch (S) {
              Gt(o, o.return, S);
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
            } catch (S) {
              Gt(
                o,
                o.return,
                S
              );
            }
          }
        f & 64 && NS(o), f & 512 && bo(o, o.return);
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
            Ox(a, i);
          } catch (S) {
            Gt(o, o.return, S);
          }
        }
        break;
      case 27:
        i === null && f & 4 && $S(o);
      case 26:
      case 5:
        gr(a, o), i === null && f & 4 && qS(o), f & 512 && bo(o, o.return);
        break;
      case 12:
        gr(a, o);
        break;
      case 31:
        gr(a, o), f & 4 && HS(a, o);
        break;
      case 13:
        gr(a, o), f & 4 && IS(a, o), f & 64 && (a = o.memoizedState, a !== null && (a = a.dehydrated, a !== null && (o = XN.bind(
          null,
          o
        ), hR(a, o))));
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
  function US(a) {
    var i = a.alternate;
    i !== null && (a.alternate = null, US(i)), a.child = null, a.deletions = null, a.sibling = null, a.tag === 5 && (i = a.stateNode, i !== null && dh(i)), a.stateNode = null, a.return = null, a.dependencies = null, a.memoizedProps = null, a.memoizedState = null, a.pendingProps = null, a.stateNode = null, a.updateQueue = null;
  }
  var ae = null, Ke = !1;
  function mr(a, i, o) {
    for (o = o.child; o !== null; )
      kS(a, i, o), o = o.sibling;
  }
  function kS(a, i, o) {
    if (tn && typeof tn.onCommitFiberUnmount == "function")
      try {
        tn.onCommitFiberUnmount(Hu, o);
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
        ), Mo(o.stateNode), ae = f, Ke = v;
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
        ae !== null && (Ke ? (a = ae, N_(
          a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
          o.stateNode
        ), Ki(a)) : N_(ae, o.stateNode));
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
        ye || (Kn(o, i), f = o.stateNode, typeof f.componentWillUnmount == "function" && RS(
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
  function HS(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null))) {
      a = a.dehydrated;
      try {
        Ki(a);
      } catch (o) {
        Gt(i, i.return, o);
      }
    }
  }
  function IS(a, i) {
    if (i.memoizedState === null && (a = i.alternate, a !== null && (a = a.memoizedState, a !== null && (a = a.dehydrated, a !== null))))
      try {
        Ki(a);
      } catch (o) {
        Gt(i, i.return, o);
      }
  }
  function BN(a) {
    switch (a.tag) {
      case 31:
      case 13:
      case 19:
        var i = a.stateNode;
        return i === null && (i = a.stateNode = new BS()), i;
      case 22:
        return a = a.stateNode, i = a._retryCache, i === null && (i = a._retryCache = new BS()), i;
      default:
        throw Error(r(435, a.tag));
    }
  }
  function qc(a, i) {
    var o = BN(a);
    i.forEach(function(f) {
      if (!o.has(f)) {
        o.add(f);
        var v = KN.bind(null, a, f);
        f.then(v, v);
      }
    });
  }
  function Ve(a, i) {
    var o = i.deletions;
    if (o !== null)
      for (var f = 0; f < o.length; f++) {
        var v = o[f], m = a, S = i, C = S;
        t: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (ua(C.type)) {
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
        kS(m, S, v), ae = null, Ke = !1, m = v.alternate, m !== null && (m.return = null), v.return = null;
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; )
        GS(i, a), i = i.sibling;
  }
  var zn = null;
  function GS(a, i) {
    var o = a.alternate, f = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ve(i, a), Fe(a), f & 4 && (Jr(3, a, a.return), go(3, a), Jr(5, a, a.return));
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
                      m = v.getElementsByTagName("title")[0], (!m || m[Yu] || m[Me] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = v.createElement(f), v.head.insertBefore(
                        m,
                        v.querySelector("head > title")
                      )), Pe(m, f, o), m[Me] = a, Ae(m), f = m;
                      break t;
                    case "link":
                      var S = G_(
                        "link",
                        "href",
                        v
                      ).get(f + (o.href || ""));
                      if (S) {
                        for (var C = 0; C < S.length; C++)
                          if (m = S[C], m.getAttribute("href") === (o.href == null || o.href === "" ? null : o.href) && m.getAttribute("rel") === (o.rel == null ? null : o.rel) && m.getAttribute("title") === (o.title == null ? null : o.title) && m.getAttribute("crossorigin") === (o.crossOrigin == null ? null : o.crossOrigin)) {
                            S.splice(C, 1);
                            break e;
                          }
                      }
                      m = v.createElement(f), Pe(m, f, o), v.head.appendChild(m);
                      break;
                    case "meta":
                      if (S = G_(
                        "meta",
                        "content",
                        v
                      ).get(f + (o.content || ""))) {
                        for (C = 0; C < S.length; C++)
                          if (m = S[C], m.getAttribute("content") === (o.content == null ? null : "" + o.content) && m.getAttribute("name") === (o.name == null ? null : o.name) && m.getAttribute("property") === (o.property == null ? null : o.property) && m.getAttribute("http-equiv") === (o.httpEquiv == null ? null : o.httpEquiv) && m.getAttribute("charset") === (o.charSet == null ? null : o.charSet)) {
                            S.splice(C, 1);
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
                Y_(
                  v,
                  a.type,
                  a.stateNode
                );
            else
              a.stateNode = I_(
                v,
                f,
                a.memoizedProps
              );
          else
            m !== f ? (m === null ? o.stateNode !== null && (o = o.stateNode, o.parentNode.removeChild(o)) : m.count--, f === null ? Y_(
              v,
              a.type,
              a.stateNode
            ) : I_(
              v,
              f,
              a.memoizedProps
            )) : f === null && a.stateNode !== null && Rd(
              a,
              a.memoizedProps,
              o.memoizedProps
            );
        }
        break;
      case 27:
        Ve(i, a), Fe(a), f & 512 && (ye || o === null || Kn(o, o.return)), o !== null && f & 4 && Rd(
          a,
          a.memoizedProps,
          o.memoizedProps
        );
        break;
      case 5:
        if (Ve(i, a), Fe(a), f & 512 && (ye || o === null || Kn(o, o.return)), a.flags & 32) {
          v = a.stateNode;
          try {
            yi(v, "");
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        }
        f & 4 && a.stateNode != null && (v = a.memoizedProps, Rd(
          a,
          v,
          o !== null ? o.memoizedProps : v
        )), f & 1024 && ($d = !0);
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
            Ki(i.containerInfo);
          } catch (dt) {
            Gt(a, a.return, dt);
          }
        $d && ($d = !1, YS(a));
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
          t: for (i = a.stateNode, i._visibility = v ? i._visibility & -2 : i._visibility | 1, v && (o === null || q || yr || ye || Ua(a)), o = null, i = a; ; ) {
            if (i.tag === 5 || i.tag === 26) {
              if (o === null) {
                q = o = i;
                try {
                  if (m = q.stateNode, v)
                    S = m.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none";
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
                  v ? R_(Q, !0) : R_(q.stateNode, !1);
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
          if (zS(f)) {
            o = f;
            break;
          }
          f = f.return;
        }
        if (o == null) throw Error(r(160));
        switch (o.tag) {
          case 27:
            var v = o.stateNode, m = qd(a);
            Rc(a, m, v);
            break;
          case 5:
            var S = o.stateNode;
            o.flags & 32 && (yi(S, ""), o.flags &= -33);
            var C = qd(a);
            Rc(a, C, S);
            break;
          case 3:
          case 4:
            var q = o.stateNode.containerInfo, Y = qd(a);
            zd(
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
  function YS(a) {
    if (a.subtreeFlags & 1024)
      for (a = a.child; a !== null; ) {
        var i = a;
        YS(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), a = a.sibling;
      }
  }
  function gr(a, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; )
        LS(a, i.alternate, i), i = i.sibling;
  }
  function Ua(a) {
    for (a = a.child; a !== null; ) {
      var i = a;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jr(4, i, i.return), Ua(i);
          break;
        case 1:
          Kn(i, i.return);
          var o = i.stateNode;
          typeof o.componentWillUnmount == "function" && RS(
            i,
            i.return,
            o
          ), Ua(i);
          break;
        case 27:
          Mo(i.stateNode);
        case 26:
        case 5:
          Kn(i, i.return), Ua(i);
          break;
        case 22:
          i.memoizedState === null && Ua(i);
          break;
        case 30:
          Ua(i);
          break;
        default:
          Ua(i);
      }
      a = a.sibling;
    }
  }
  function br(a, i, o) {
    for (o = o && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var f = i.alternate, v = a, m = i, S = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          br(
            v,
            m,
            o
          ), go(4, m);
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
            var C = f.stateNode;
            try {
              var q = v.shared.hiddenCallbacks;
              if (q !== null)
                for (v.shared.hiddenCallbacks = null, v = 0; v < q.length; v++)
                  _x(q[v], C);
            } catch (Y) {
              Gt(f, f.return, Y);
            }
          }
          o && S & 64 && NS(m), bo(m, m.return);
          break;
        case 27:
          $S(m);
        case 26:
        case 5:
          br(
            v,
            m,
            o
          ), o && f === null && S & 4 && qS(m), bo(m, m.return);
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
          ), o && S & 4 && HS(v, m);
          break;
        case 13:
          br(
            v,
            m,
            o
          ), o && S & 4 && IS(v, m);
          break;
        case 22:
          m.memoizedState === null && br(
            v,
            m,
            o
          ), bo(m, m.return);
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
  function Bd(a, i) {
    var o = null;
    a !== null && a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), a = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (a = i.memoizedState.cachePool.pool), a !== o && (a != null && a.refCount++, o != null && ao(o));
  }
  function Ld(a, i) {
    a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && ao(a));
  }
  function $n(a, i, o, f) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; )
        XS(
          a,
          i,
          o,
          f
        ), i = i.sibling;
  }
  function XS(a, i, o, f) {
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
        ), v & 2048 && go(9, i);
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
        ), v & 2048 && (a = null, i.alternate !== null && (a = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== a && (i.refCount++, a != null && ao(a)));
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
            var m = i.memoizedProps, S = m.id, C = m.onPostCommit;
            typeof C == "function" && C(
              S,
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
        m = i.stateNode, S = i.alternate, i.memoizedState !== null ? m._visibility & 2 ? $n(
          a,
          i,
          o,
          f
        ) : xo(a, i) : m._visibility & 2 ? $n(
          a,
          i,
          o,
          f
        ) : (m._visibility |= 2, zi(
          a,
          i,
          o,
          f,
          (i.subtreeFlags & 10256) !== 0 || !1
        )), v & 2048 && Bd(S, i);
        break;
      case 24:
        $n(
          a,
          i,
          o,
          f
        ), v & 2048 && Ld(i.alternate, i);
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
  function zi(a, i, o, f, v) {
    for (v = v && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null; ) {
      var m = a, S = i, C = o, q = f, Y = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          zi(
            m,
            S,
            C,
            q,
            v
          ), go(8, S);
          break;
        case 23:
          break;
        case 22:
          var J = S.stateNode;
          S.memoizedState !== null ? J._visibility & 2 ? zi(
            m,
            S,
            C,
            q,
            v
          ) : xo(
            m,
            S
          ) : (J._visibility |= 2, zi(
            m,
            S,
            C,
            q,
            v
          )), v && Y & 2048 && Bd(
            S.alternate,
            S
          );
          break;
        case 24:
          zi(
            m,
            S,
            C,
            q,
            v
          ), v && Y & 2048 && Ld(S.alternate, S);
          break;
        default:
          zi(
            m,
            S,
            C,
            q,
            v
          );
      }
      i = i.sibling;
    }
  }
  function xo(a, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var o = a, f = i, v = f.flags;
        switch (f.tag) {
          case 22:
            xo(o, f), v & 2048 && Bd(
              f.alternate,
              f
            );
            break;
          case 24:
            xo(o, f), v & 2048 && Ld(f.alternate, f);
            break;
          default:
            xo(o, f);
        }
        i = i.sibling;
      }
  }
  var So = 8192;
  function $i(a, i, o) {
    if (a.subtreeFlags & So)
      for (a = a.child; a !== null; )
        KS(
          a,
          i,
          o
        ), a = a.sibling;
  }
  function KS(a, i, o) {
    switch (a.tag) {
      case 26:
        $i(
          a,
          i,
          o
        ), a.flags & So && a.memoizedState !== null && AR(
          o,
          zn,
          a.memoizedState,
          a.memoizedProps
        );
        break;
      case 5:
        $i(
          a,
          i,
          o
        );
        break;
      case 3:
      case 4:
        var f = zn;
        zn = Fc(a.stateNode.containerInfo), $i(
          a,
          i,
          o
        ), zn = f;
        break;
      case 22:
        a.memoizedState === null && (f = a.alternate, f !== null && f.memoizedState !== null ? (f = So, So = 16777216, $i(
          a,
          i,
          o
        ), So = f) : $i(
          a,
          i,
          o
        ));
        break;
      default:
        $i(
          a,
          i,
          o
        );
    }
  }
  function VS(a) {
    var i = a.alternate;
    if (i !== null && (a = i.child, a !== null)) {
      i.child = null;
      do
        i = a.sibling, a.sibling = null, a = i;
      while (a !== null);
    }
  }
  function _o(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var f = i[o];
          we = f, ZS(
            f,
            a
          );
        }
      VS(a);
    }
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        FS(a), a = a.sibling;
  }
  function FS(a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        _o(a), a.flags & 2048 && Jr(9, a, a.return);
        break;
      case 3:
        _o(a);
        break;
      case 12:
        _o(a);
        break;
      case 22:
        var i = a.stateNode;
        a.memoizedState !== null && i._visibility & 2 && (a.return === null || a.return.tag !== 13) ? (i._visibility &= -3, zc(a)) : _o(a);
        break;
      default:
        _o(a);
    }
  }
  function zc(a) {
    var i = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var f = i[o];
          we = f, ZS(
            f,
            a
          );
        }
      VS(a);
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
  function ZS(a, i) {
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
          ao(o.memoizedState.cache);
      }
      if (f = o.child, f !== null) f.return = o, we = f;
      else
        t: for (o = a; we !== null; ) {
          f = we;
          var v = f.sibling, m = f.return;
          if (US(f), f === o) {
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
  var LN = {
    getCacheForType: function(a) {
      var i = Ce(de), o = i.data.get(a);
      return o === void 0 && (o = a(), i.data.set(a, o)), o;
    },
    cacheSignal: function() {
      return Ce(de).controller.signal;
    }
  }, UN = typeof WeakMap == "function" ? WeakMap : Map, Lt = 0, Ft = null, Ct = null, Pt = 0, It = 0, on = null, ta = !1, Bi = !1, Ud = !1, xr = 0, ce = 0, ea = 0, ka = 0, kd = 0, ln = 0, Li = 0, Oo = null, Ze = null, Hd = !1, $c = 0, QS = 0, Bc = 1 / 0, Lc = null, na = null, be = 0, ra = null, Ui = null, Sr = 0, Id = 0, Gd = null, WS = null, Ao = 0, Yd = null;
  function cn() {
    return (Lt & 2) !== 0 && Pt !== 0 ? Pt & -Pt : N.T !== null ? Qd() : v1();
  }
  function JS() {
    if (ln === 0)
      if ((Pt & 536870912) === 0 || Rt) {
        var a = Kl;
        Kl <<= 1, (Kl & 3932160) === 0 && (Kl = 262144), ln = a;
      } else ln = 536870912;
    return a = an.current, a !== null && (a.flags |= 32), ln;
  }
  function Qe(a, i, o) {
    (a === Ft && (It === 2 || It === 9) || a.cancelPendingCommit !== null) && (ki(a, 0), aa(
      a,
      Pt,
      ln,
      !1
    )), Gu(a, o), ((Lt & 2) === 0 || a !== Ft) && (a === Ft && ((Lt & 2) === 0 && (ka |= o), ce === 4 && aa(
      a,
      Pt,
      ln,
      !1
    )), Vn(a));
  }
  function t_(a, i, o) {
    if ((Lt & 6) !== 0) throw Error(r(327));
    var f = !o && (i & 127) === 0 && (i & a.expiredLanes) === 0 || Iu(a, i), v = f ? IN(a, i) : Kd(a, i, !0), m = f;
    do {
      if (v === 0) {
        Bi && !f && aa(a, i, 0, !1);
        break;
      } else {
        if (o = a.current.alternate, m && !kN(o)) {
          v = Kd(a, i, !1), m = !1;
          continue;
        }
        if (v === 2) {
          if (m = i, a.errorRecoveryDisabledLanes & m)
            var S = 0;
          else
            S = a.pendingLanes & -536870913, S = S !== 0 ? S : S & 536870912 ? 536870912 : 0;
          if (S !== 0) {
            i = S;
            t: {
              var C = a;
              v = Oo;
              var q = C.current.memoizedState.isDehydrated;
              if (q && (ki(C, S).flags |= 256), S = Kd(
                C,
                S,
                !1
              ), S !== 2) {
                if (Ud && !q) {
                  C.errorRecoveryDisabledLanes |= m, ka |= m, v = 4;
                  break t;
                }
                m = Ze, Ze = v, m !== null && (Ze === null ? Ze = m : Ze.push.apply(
                  Ze,
                  m
                ));
              }
              v = S;
            }
            if (m = !1, v !== 2) continue;
          }
        }
        if (v === 1) {
          ki(a, 0), aa(a, i, 0, !0);
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
            Sr = i, f.timeoutHandle = D_(
              e_.bind(
                null,
                f,
                o,
                Ze,
                Lc,
                Hd,
                i,
                ln,
                ka,
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
          e_(
            f,
            o,
            Ze,
            Lc,
            Hd,
            i,
            ln,
            ka,
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
  function e_(a, i, o, f, v, m, S, C, q, Y, J, at, X, Q) {
    if (a.timeoutHandle = -1, at = i.subtreeFlags, at & 8192 || (at & 16785408) === 16785408) {
      at = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ur
      }, KS(
        i,
        m,
        at
      );
      var dt = (m & 62914560) === m ? $c - $e() : (m & 4194048) === m ? QS - $e() : 0;
      if (dt = wR(
        at,
        dt
      ), dt !== null) {
        Sr = m, a.cancelPendingCommit = dt(
          c_.bind(
            null,
            a,
            i,
            m,
            o,
            f,
            v,
            S,
            C,
            q,
            J,
            at,
            null,
            X,
            Q
          )
        ), aa(a, m, S, !Y);
        return;
      }
    }
    c_(
      a,
      i,
      m,
      o,
      f,
      v,
      S,
      C,
      q
    );
  }
  function kN(a) {
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
    i &= ~kd, i &= ~ka, a.suspendedLanes |= i, a.pingedLanes &= ~i, f && (a.warmLanes |= i), f = a.expirationTimes;
    for (var v = i; 0 < v; ) {
      var m = 31 - en(v), S = 1 << m;
      f[m] = -1, v &= ~S;
    }
    o !== 0 && s1(a, o, i);
  }
  function Uc() {
    return (Lt & 6) === 0 ? (wo(0), !1) : !0;
  }
  function Xd() {
    if (Ct !== null) {
      if (It === 0)
        var a = Ct.return;
      else
        a = Ct, fr = Pa = null, ld(a), Di = null, uo = 0, a = Ct;
      for (; a !== null; )
        PS(a.alternate, a), a = a.return;
      Ct = null;
    }
  }
  function ki(a, i) {
    var o = a.timeoutHandle;
    o !== -1 && (a.timeoutHandle = -1, oR(o)), o = a.cancelPendingCommit, o !== null && (a.cancelPendingCommit = null, o()), Sr = 0, Xd(), Ft = a, Ct = o = lr(a.current, null), Pt = i, It = 0, on = null, ta = !1, Bi = Iu(a, i), Ud = !1, Li = ln = kd = ka = ea = ce = 0, Ze = Oo = null, Hd = !1, (i & 8) !== 0 && (i |= i & 32);
    var f = a.entangledLanes;
    if (f !== 0)
      for (a = a.entanglements, f &= i; 0 < f; ) {
        var v = 31 - en(f), m = 1 << v;
        i |= a[v], f &= ~m;
      }
    return xr = i, oc(), o;
  }
  function n_(a, i) {
    Ot = null, N.H = po, i === Ci || i === pc ? (i = gx(), It = 3) : i === Zh ? (i = gx(), It = 4) : It = i === Ad ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, on = i, Ct === null && (ce = 1, jc(
      a,
      gn(i, a.current)
    ));
  }
  function r_() {
    var a = an.current;
    return a === null ? !0 : (Pt & 4194048) === Pt ? _n === null : (Pt & 62914560) === Pt || (Pt & 536870912) !== 0 ? a === _n : !1;
  }
  function a_() {
    var a = N.H;
    return N.H = po, a === null ? po : a;
  }
  function i_() {
    var a = N.A;
    return N.A = LN, a;
  }
  function kc() {
    ce = 4, ta || (Pt & 4194048) !== Pt && an.current !== null || (Bi = !0), (ea & 134217727) === 0 && (ka & 134217727) === 0 || Ft === null || aa(
      Ft,
      Pt,
      ln,
      !1
    );
  }
  function Kd(a, i, o) {
    var f = Lt;
    Lt |= 2;
    var v = a_(), m = i_();
    (Ft !== a || Pt !== i) && (Lc = null, ki(a, i)), i = !1;
    var S = ce;
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          var C = Ct, q = on;
          switch (It) {
            case 8:
              Xd(), S = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              an.current === null && (i = !0);
              var Y = It;
              if (It = 0, on = null, Hi(a, C, q, Y), o && Bi) {
                S = 0;
                break t;
              }
              break;
            default:
              Y = It, It = 0, on = null, Hi(a, C, q, Y);
          }
        }
        HN(), S = ce;
        break;
      } catch (J) {
        n_(a, J);
      }
    while (!0);
    return i && a.shellSuspendCounter++, fr = Pa = null, Lt = f, N.H = v, N.A = m, Ct === null && (Ft = null, Pt = 0, oc()), S;
  }
  function HN() {
    for (; Ct !== null; ) u_(Ct);
  }
  function IN(a, i) {
    var o = Lt;
    Lt |= 2;
    var f = a_(), v = i_();
    Ft !== a || Pt !== i ? (Lc = null, Bc = $e() + 500, ki(a, i)) : Bi = Iu(
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
              It = 0, on = null, Hi(a, i, m, 1);
              break;
            case 2:
            case 9:
              if (yx(m)) {
                It = 0, on = null, o_(i);
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
              yx(m) ? (It = 0, on = null, o_(i)) : (It = 0, on = null, Hi(a, i, m, 7));
              break;
            case 5:
              var S = null;
              switch (Ct.tag) {
                case 26:
                  S = Ct.memoizedState;
                case 5:
                case 27:
                  var C = Ct;
                  if (S ? X_(S) : C.stateNode.complete) {
                    It = 0, on = null;
                    var q = C.sibling;
                    if (q !== null) Ct = q;
                    else {
                      var Y = C.return;
                      Y !== null ? (Ct = Y, Hc(Y)) : Ct = null;
                    }
                    break e;
                  }
              }
              It = 0, on = null, Hi(a, i, m, 5);
              break;
            case 6:
              It = 0, on = null, Hi(a, i, m, 6);
              break;
            case 8:
              Xd(), ce = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        GN();
        break;
      } catch (J) {
        n_(a, J);
      }
    while (!0);
    return fr = Pa = null, N.H = f, N.A = v, Lt = o, Ct !== null ? 0 : (Ft = null, Pt = 0, oc(), ce);
  }
  function GN() {
    for (; Ct !== null && !ar(); )
      u_(Ct);
  }
  function u_(a) {
    var i = CS(a.alternate, a, xr);
    a.memoizedProps = a.pendingProps, i === null ? Hc(a) : Ct = i;
  }
  function o_(a) {
    var i = a, o = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = AS(
          o,
          i,
          i.pendingProps,
          i.type,
          void 0,
          Pt
        );
        break;
      case 11:
        i = AS(
          o,
          i,
          i.pendingProps,
          i.type.render,
          i.ref,
          Pt
        );
        break;
      case 5:
        ld(i);
      default:
        PS(o, i), i = Ct = ix(i, xr), i = CS(o, i, xr);
    }
    a.memoizedProps = a.pendingProps, i === null ? Hc(a) : Ct = i;
  }
  function Hi(a, i, o, f) {
    fr = Pa = null, ld(i), Di = null, uo = 0;
    var v = i.return;
    try {
      if (PN(
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
    i.flags & 32768 ? (Rt || f === 1 ? a = !0 : Bi || (Pt & 536870912) !== 0 ? a = !1 : (ta = a = !0, (f === 2 || f === 9 || f === 3 || f === 6) && (f = an.current, f !== null && f.tag === 13 && (f.flags |= 16384))), l_(i, a)) : Hc(i);
  }
  function Hc(a) {
    var i = a;
    do {
      if ((i.flags & 32768) !== 0) {
        l_(
          i,
          ta
        );
        return;
      }
      a = i.return;
      var o = qN(
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
  function l_(a, i) {
    do {
      var o = zN(a.alternate, a);
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
  function c_(a, i, o, f, v, m, S, C, q) {
    a.cancelPendingCommit = null;
    do
      Ic();
    while (be !== 0);
    if ((Lt & 6) !== 0) throw Error(r(327));
    if (i !== null) {
      if (i === a.current) throw Error(r(177));
      if (m = i.lanes | i.childLanes, m |= qh, OP(
        a,
        o,
        m,
        S,
        C,
        q
      ), a === Ft && (Ct = Ft = null, Pt = 0), Ui = i, ra = a, Sr = o, Id = m, Gd = v, WS = f, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (a.callbackNode = null, a.callbackPriority = 0, VN(Yl, function() {
        return v_(), null;
      })) : (a.callbackNode = null, a.callbackPriority = 0), f = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || f) {
        f = N.T, N.T = null, v = I.p, I.p = 2, S = Lt, Lt |= 4;
        try {
          $N(a, i, o);
        } finally {
          Lt = S, I.p = v, N.T = f;
        }
      }
      be = 1, f_(), s_(), h_();
    }
  }
  function f_() {
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
          GS(i, a);
          var m = iv, S = Z1(a.containerInfo), C = m.focusedElem, q = m.selectionRange;
          if (S !== C && C && C.ownerDocument && F1(
            C.ownerDocument.documentElement,
            C
          )) {
            if (q !== null && Ch(C)) {
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
                  !Q.extend && gt > Kt && (S = Kt, Kt = gt, gt = S);
                  var H = V1(
                    C,
                    gt
                  ), L = V1(
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
          ef = !!av, iv = av = null;
        } finally {
          Lt = v, I.p = f, N.T = o;
        }
      }
      a.current = i, be = 2;
    }
  }
  function s_() {
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
          LS(a, i.alternate, i);
        } finally {
          Lt = v, I.p = f, N.T = o;
        }
      }
      be = 3;
    }
  }
  function h_() {
    if (be === 4 || be === 3) {
      be = 0, ku();
      var a = ra, i = Ui, o = Sr, f = WS;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? be = 5 : (be = 0, Ui = ra = null, d_(a, a.pendingLanes));
      var v = a.pendingLanes;
      if (v === 0 && (na = null), sh(o), i = i.stateNode, tn && typeof tn.onCommitFiberRoot == "function")
        try {
          tn.onCommitFiberRoot(
            Hu,
            i,
            void 0,
            (i.current.flags & 128) === 128
          );
        } catch {
        }
      if (f !== null) {
        i = N.T, v = I.p, I.p = 2, N.T = null;
        try {
          for (var m = a.onRecoverableError, S = 0; S < f.length; S++) {
            var C = f[S];
            m(C.value, {
              componentStack: C.stack
            });
          }
        } finally {
          N.T = i, I.p = v;
        }
      }
      (Sr & 3) !== 0 && Ic(), Vn(a), v = a.pendingLanes, (o & 261930) !== 0 && (v & 42) !== 0 ? a === Yd ? Ao++ : (Ao = 0, Yd = a) : Ao = 0, wo(0);
    }
  }
  function d_(a, i) {
    (a.pooledCacheLanes &= i) === 0 && (i = a.pooledCache, i != null && (a.pooledCache = null, ao(i)));
  }
  function Ic() {
    return f_(), s_(), h_(), v_();
  }
  function v_() {
    if (be !== 5) return !1;
    var a = ra, i = Id;
    Id = 0;
    var o = sh(Sr), f = N.T, v = I.p;
    try {
      I.p = 32 > o ? 32 : o, N.T = null, o = Gd, Gd = null;
      var m = ra, S = Sr;
      if (be = 0, Ui = ra = null, Sr = 0, (Lt & 6) !== 0) throw Error(r(331));
      var C = Lt;
      if (Lt |= 4, FS(m.current), XS(
        m,
        m.current,
        S,
        o
      ), Lt = C, wo(0, !1), tn && typeof tn.onPostCommitFiberRoot == "function")
        try {
          tn.onPostCommitFiberRoot(Hu, m);
        } catch {
        }
      return !0;
    } finally {
      I.p = v, N.T = f, d_(a, i);
    }
  }
  function p_(a, i, o) {
    i = gn(o, i), i = Od(a.stateNode, i, 2), a = Zr(a, i, 2), a !== null && (Gu(a, 2), Vn(a));
  }
  function Gt(a, i, o) {
    if (a.tag === 3)
      p_(a, a, o);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          p_(
            i,
            a,
            o
          );
          break;
        } else if (i.tag === 1) {
          var f = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (na === null || !na.has(f))) {
            a = gn(o, a), o = yS(2), f = Zr(i, o, 2), f !== null && (mS(
              o,
              f,
              i,
              a
            ), Gu(f, 2), Vn(f));
            break;
          }
        }
        i = i.return;
      }
  }
  function Vd(a, i, o) {
    var f = a.pingCache;
    if (f === null) {
      f = a.pingCache = new UN();
      var v = /* @__PURE__ */ new Set();
      f.set(i, v);
    } else
      v = f.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(i, v));
    v.has(o) || (Ud = !0, v.add(o), a = YN.bind(null, a, i, o), i.then(a, a));
  }
  function YN(a, i, o) {
    var f = a.pingCache;
    f !== null && f.delete(i), a.pingedLanes |= a.suspendedLanes & o, a.warmLanes &= ~o, Ft === a && (Pt & o) === o && (ce === 4 || ce === 3 && (Pt & 62914560) === Pt && 300 > $e() - $c ? (Lt & 2) === 0 && ki(a, 0) : kd |= o, Li === Pt && (Li = 0)), Vn(a);
  }
  function y_(a, i) {
    i === 0 && (i = f1()), a = ja(a, i), a !== null && (Gu(a, i), Vn(a));
  }
  function XN(a) {
    var i = a.memoizedState, o = 0;
    i !== null && (o = i.retryLane), y_(a, o);
  }
  function KN(a, i) {
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
    f !== null && f.delete(i), y_(a, o);
  }
  function VN(a, i) {
    return Ur(a, i);
  }
  var Gc = null, Ii = null, Fd = !1, Yc = !1, Zd = !1, ia = 0;
  function Vn(a) {
    a !== Ii && a.next === null && (Ii === null ? Gc = Ii = a : Ii = Ii.next = a), Yc = !0, Fd || (Fd = !0, ZN());
  }
  function wo(a, i) {
    if (!Zd && Yc) {
      Zd = !0;
      do
        for (var o = !1, f = Gc; f !== null; ) {
          if (a !== 0) {
            var v = f.pendingLanes;
            if (v === 0) var m = 0;
            else {
              var S = f.suspendedLanes, C = f.pingedLanes;
              m = (1 << 31 - en(42 | a) + 1) - 1, m &= v & ~(S & ~C), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (o = !0, x_(f, m));
          } else
            m = Pt, m = Fl(
              f,
              f === Ft ? m : 0,
              f.cancelPendingCommit !== null || f.timeoutHandle !== -1
            ), (m & 3) === 0 || Iu(f, m) || (o = !0, x_(f, m));
          f = f.next;
        }
      while (o);
      Zd = !1;
    }
  }
  function FN() {
    m_();
  }
  function m_() {
    Yc = Fd = !1;
    var a = 0;
    ia !== 0 && uR() && (a = ia);
    for (var i = $e(), o = null, f = Gc; f !== null; ) {
      var v = f.next, m = g_(f, i);
      m === 0 ? (f.next = null, o === null ? Gc = v : o.next = v, v === null && (Ii = o)) : (o = f, (a !== 0 || (m & 3) !== 0) && (Yc = !0)), f = v;
    }
    be !== 0 && be !== 5 || wo(a), ia !== 0 && (ia = 0);
  }
  function g_(a, i) {
    for (var o = a.suspendedLanes, f = a.pingedLanes, v = a.expirationTimes, m = a.pendingLanes & -62914561; 0 < m; ) {
      var S = 31 - en(m), C = 1 << S, q = v[S];
      q === -1 ? ((C & o) === 0 || (C & f) !== 0) && (v[S] = _P(C, i)) : q <= i && (a.expiredLanes |= C), m &= ~C;
    }
    if (i = Ft, o = Pt, o = Fl(
      a,
      a === i ? o : 0,
      a.cancelPendingCommit !== null || a.timeoutHandle !== -1
    ), f = a.callbackNode, o === 0 || a === i && (It === 2 || It === 9) || a.cancelPendingCommit !== null)
      return f !== null && f !== null && Rn(f), a.callbackNode = null, a.callbackPriority = 0;
    if ((o & 3) === 0 || Iu(a, o)) {
      if (i = o & -o, i === a.callbackPriority) return i;
      switch (f !== null && Rn(f), sh(o)) {
        case 2:
        case 8:
          o = l1;
          break;
        case 32:
          o = Yl;
          break;
        case 268435456:
          o = c1;
          break;
        default:
          o = Yl;
      }
      return f = b_.bind(null, a), o = Ur(o, f), a.callbackPriority = i, a.callbackNode = o, i;
    }
    return f !== null && f !== null && Rn(f), a.callbackPriority = 2, a.callbackNode = null, 2;
  }
  function b_(a, i) {
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
    ), f === 0 ? null : (t_(a, f, i), g_(a, $e()), a.callbackNode != null && a.callbackNode === o ? b_.bind(null, a) : null);
  }
  function x_(a, i) {
    if (Ic()) return null;
    t_(a, i, !0);
  }
  function ZN() {
    lR(function() {
      (Lt & 6) !== 0 ? Ur(
        o1,
        FN
      ) : m_();
    });
  }
  function Qd() {
    if (ia === 0) {
      var a = Mi;
      a === 0 && (a = Xl, Xl <<= 1, (Xl & 261888) === 0 && (Xl = 256)), ia = a;
    }
    return ia;
  }
  function S_(a) {
    return a == null || typeof a == "symbol" || typeof a == "boolean" ? null : typeof a == "function" ? a : Jl("" + a);
  }
  function __(a, i) {
    var o = i.ownerDocument.createElement("input");
    return o.name = i.name, o.value = i.value, a.id && o.setAttribute("form", a.id), i.parentNode.insertBefore(o, i), a = new FormData(a), o.parentNode.removeChild(o), a;
  }
  function QN(a, i, o, f, v) {
    if (i === "submit" && o && o.stateNode === v) {
      var m = S_(
        (v[Ye] || null).action
      ), S = f.submitter;
      S && (i = (i = S[Ye] || null) ? S_(i.formAction) : S.getAttribute("formAction"), i !== null && (m = i, S = null));
      var C = new rc(
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
                  var q = S ? __(v, S) : new FormData(v);
                  md(
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
                typeof m == "function" && (C.preventDefault(), q = S ? __(v, S) : new FormData(v), md(
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
  for (var Wd = 0; Wd < Rh.length; Wd++) {
    var Jd = Rh[Wd], WN = Jd.toLowerCase(), JN = Jd[0].toUpperCase() + Jd.slice(1);
    qn(
      WN,
      "on" + JN
    );
  }
  qn(J1, "onAnimationEnd"), qn(tx, "onAnimationIteration"), qn(ex, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(pN, "onTransitionRun"), qn(yN, "onTransitionStart"), qn(mN, "onTransitionCancel"), qn(nx, "onTransitionEnd"), vi("onMouseEnter", ["mouseout", "mouseover"]), vi("onMouseLeave", ["mouseout", "mouseover"]), vi("onPointerEnter", ["pointerout", "pointerover"]), vi("onPointerLeave", ["pointerout", "pointerover"]), wa(
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
  var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), tR = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To)
  );
  function O_(a, i) {
    i = (i & 4) !== 0;
    for (var o = 0; o < a.length; o++) {
      var f = a[o], v = f.event;
      f = f.listeners;
      t: {
        var m = void 0;
        if (i)
          for (var S = f.length - 1; 0 <= S; S--) {
            var C = f[S], q = C.instance, Y = C.currentTarget;
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
          for (S = 0; S < f.length; S++) {
            if (C = f[S], q = C.instance, Y = C.currentTarget, C = C.listener, q !== m && v.isPropagationStopped())
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
    var o = i[hh];
    o === void 0 && (o = i[hh] = /* @__PURE__ */ new Set());
    var f = a + "__bubble";
    o.has(f) || (A_(i, a, 2, !1), o.add(f));
  }
  function tv(a, i, o) {
    var f = 0;
    i && (f |= 4), A_(
      o,
      a,
      f,
      i
    );
  }
  var Xc = "_reactListening" + Math.random().toString(36).slice(2);
  function ev(a) {
    if (!a[Xc]) {
      a[Xc] = !0, m1.forEach(function(o) {
        o !== "selectionchange" && (tR.has(o) || tv(o, !1, a), tv(o, !0, a));
      });
      var i = a.nodeType === 9 ? a : a.ownerDocument;
      i === null || i[Xc] || (i[Xc] = !0, tv("selectionchange", !1, i));
    }
  }
  function A_(a, i, o, f) {
    switch (J_(i)) {
      case 2:
        var v = MR;
        break;
      case 8:
        v = jR;
        break;
      default:
        v = yv;
    }
    o = v.bind(
      null,
      i,
      o,
      a
    ), v = void 0, !Sh || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), f ? v !== void 0 ? a.addEventListener(i, o, {
      capture: !0,
      passive: v
    }) : a.addEventListener(i, o, !0) : v !== void 0 ? a.addEventListener(i, o, {
      passive: v
    }) : a.addEventListener(i, o, !1);
  }
  function nv(a, i, o, f, v) {
    var m = f;
    if ((i & 1) === 0 && (i & 2) === 0 && f !== null)
      t: for (; ; ) {
        if (f === null) return;
        var S = f.tag;
        if (S === 3 || S === 4) {
          var C = f.stateNode.containerInfo;
          if (C === v) break;
          if (S === 4)
            for (S = f.return; S !== null; ) {
              var q = S.tag;
              if ((q === 3 || q === 4) && S.stateNode.containerInfo === v)
                return;
              S = S.return;
            }
          for (; C !== null; ) {
            if (S = si(C), S === null) return;
            if (q = S.tag, q === 5 || q === 6 || q === 26 || q === 27) {
              f = m = S;
              continue t;
            }
            C = C.parentNode;
          }
        }
        f = f.return;
      }
    j1(function() {
      var Y = m, J = bh(o), at = [];
      t: {
        var X = rx.get(a);
        if (X !== void 0) {
          var Q = rc, dt = a;
          switch (a) {
            case "keypress":
              if (ec(o) === 0) break t;
            case "keydown":
            case "keyup":
              Q = KP;
              break;
            case "focusin":
              dt = "focus", Q = wh;
              break;
            case "focusout":
              dt = "blur", Q = wh;
              break;
            case "beforeblur":
            case "afterblur":
              Q = wh;
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
              Q = P1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = qP;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = ZP;
              break;
            case J1:
            case tx:
            case ex:
              Q = BP;
              break;
            case nx:
              Q = WP;
              break;
            case "scroll":
            case "scrollend":
              Q = NP;
              break;
            case "wheel":
              Q = tN;
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
              Q = R1;
              break;
            case "toggle":
            case "beforetoggle":
              Q = nN;
          }
          var gt = (i & 4) !== 0, Kt = !gt && (a === "scroll" || a === "scrollend"), H = gt ? X !== null ? X + "Capture" : null : X;
          gt = [];
          for (var L = Y, G; L !== null; ) {
            var nt = L;
            if (G = nt.stateNode, nt = nt.tag, nt !== 5 && nt !== 26 && nt !== 27 || G === null || H === null || (nt = Ku(L, H), nt != null && gt.push(
              Eo(L, nt, G)
            )), Kt) break;
            L = L.return;
          }
          0 < gt.length && (X = new Q(
            X,
            dt,
            null,
            o,
            J
          ), at.push({ event: X, listeners: gt }));
        }
      }
      if ((i & 7) === 0) {
        t: {
          if (X = a === "mouseover" || a === "pointerover", Q = a === "mouseout" || a === "pointerout", X && o !== gh && (dt = o.relatedTarget || o.fromElement) && (si(dt) || dt[fi]))
            break t;
          if ((Q || X) && (X = J.window === J ? J : (X = J.ownerDocument) ? X.defaultView || X.parentWindow : window, Q ? (dt = o.relatedTarget || o.toElement, Q = Y, dt = dt ? si(dt) : null, dt !== null && (Kt = l(dt), gt = dt.tag, dt !== Kt || gt !== 5 && gt !== 27 && gt !== 6) && (dt = null)) : (Q = null, dt = Y), Q !== dt)) {
            if (gt = P1, nt = "onMouseLeave", H = "onMouseEnter", L = "mouse", (a === "pointerout" || a === "pointerover") && (gt = R1, nt = "onPointerLeave", H = "onPointerEnter", L = "pointer"), Kt = Q == null ? X : Xu(Q), G = dt == null ? X : Xu(dt), X = new gt(
              nt,
              L + "leave",
              Q,
              o,
              J
            ), X.target = Kt, X.relatedTarget = G, nt = null, si(J) === Y && (gt = new gt(
              H,
              L + "enter",
              dt,
              o,
              J
            ), gt.target = G, gt.relatedTarget = Kt, nt = gt), Kt = nt, Q && dt)
              e: {
                for (gt = eR, H = Q, L = dt, G = 0, nt = H; nt; nt = gt(nt))
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
            Q !== null && w_(
              at,
              X,
              Q,
              gt,
              !1
            ), dt !== null && Kt !== null && w_(
              at,
              Kt,
              dt,
              gt,
              !0
            );
          }
        }
        t: {
          if (X = Y ? Xu(Y) : window, Q = X.nodeName && X.nodeName.toLowerCase(), Q === "select" || Q === "input" && X.type === "file")
            var zt = H1;
          else if (U1(X))
            if (I1)
              zt = hN;
            else {
              zt = fN;
              var pt = cN;
            }
          else
            Q = X.nodeName, !Q || Q.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? Y && mh(Y.elementType) && (zt = H1) : zt = sN;
          if (zt && (zt = zt(a, Y))) {
            k1(
              at,
              zt,
              o,
              J
            );
            break t;
          }
          pt && pt(a, X, Y), a === "focusout" && Y && X.type === "number" && Y.memoizedProps.value != null && yh(X, "number", X.value);
        }
        switch (pt = Y ? Xu(Y) : window, a) {
          case "focusin":
            (U1(pt) || pt.contentEditable === "true") && (xi = pt, Dh = Y, eo = null);
            break;
          case "focusout":
            eo = Dh = xi = null;
            break;
          case "mousedown":
            Ph = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ph = !1, Q1(at, o, J);
            break;
          case "selectionchange":
            if (vN) break;
          case "keydown":
          case "keyup":
            Q1(at, o, J);
        }
        var Tt;
        if (Eh)
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
          bi ? B1(a, o) && (Nt = "onCompositionEnd") : a === "keydown" && o.keyCode === 229 && (Nt = "onCompositionStart");
        Nt && (q1 && o.locale !== "ko" && (bi || Nt !== "onCompositionStart" ? Nt === "onCompositionEnd" && bi && (Tt = C1()) : (Ir = J, _h = "value" in Ir ? Ir.value : Ir.textContent, bi = !0)), pt = Kc(Y, Nt), 0 < pt.length && (Nt = new N1(
          Nt,
          a,
          null,
          o,
          J
        ), at.push({ event: Nt, listeners: pt }), Tt ? Nt.data = Tt : (Tt = L1(o), Tt !== null && (Nt.data = Tt)))), (Tt = aN ? iN(a, o) : uN(a, o)) && (Nt = Kc(Y, "onBeforeInput"), 0 < Nt.length && (pt = new N1(
          "onBeforeInput",
          "beforeinput",
          null,
          o,
          J
        ), at.push({
          event: pt,
          listeners: Nt
        }), pt.data = Tt)), QN(
          at,
          a,
          Y,
          o,
          J
        );
      }
      O_(at, i);
    });
  }
  function Eo(a, i, o) {
    return {
      instance: a,
      listener: i,
      currentTarget: o
    };
  }
  function Kc(a, i) {
    for (var o = i + "Capture", f = []; a !== null; ) {
      var v = a, m = v.stateNode;
      if (v = v.tag, v !== 5 && v !== 26 && v !== 27 || m === null || (v = Ku(a, o), v != null && f.unshift(
        Eo(a, v, m)
      ), v = Ku(a, i), v != null && f.push(
        Eo(a, v, m)
      )), a.tag === 3) return f;
      a = a.return;
    }
    return [];
  }
  function eR(a) {
    if (a === null) return null;
    do
      a = a.return;
    while (a && a.tag !== 5 && a.tag !== 27);
    return a || null;
  }
  function w_(a, i, o, f, v) {
    for (var m = i._reactName, S = []; o !== null && o !== f; ) {
      var C = o, q = C.alternate, Y = C.stateNode;
      if (C = C.tag, q !== null && q === f) break;
      C !== 5 && C !== 26 && C !== 27 || Y === null || (q = Y, v ? (Y = Ku(o, m), Y != null && S.unshift(
        Eo(o, Y, q)
      )) : v || (Y = Ku(o, m), Y != null && S.push(
        Eo(o, Y, q)
      ))), o = o.return;
    }
    S.length !== 0 && a.push({ event: i, listeners: S });
  }
  var nR = /\r\n?/g, rR = /\u0000|\uFFFD/g;
  function T_(a) {
    return (typeof a == "string" ? a : "" + a).replace(nR, `
`).replace(rR, "");
  }
  function E_(a, i) {
    return i = T_(i), T_(a) === i;
  }
  function Xt(a, i, o, f, v, m) {
    switch (o) {
      case "children":
        typeof f == "string" ? i === "body" || i === "textarea" && f === "" || yi(a, f) : (typeof f == "number" || typeof f == "bigint") && i !== "body" && yi(a, "" + f);
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
        E1(a, f, m);
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
        (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = DP.get(o) || o, Zl(a, o, f));
    }
  }
  function rv(a, i, o, f, v, m) {
    switch (o) {
      case "style":
        E1(a, f, m);
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
        typeof f == "string" ? yi(a, f) : (typeof f == "number" || typeof f == "bigint") && yi(a, "" + f);
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
        if (!g1.hasOwnProperty(o))
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
            var S = o[m];
            if (S != null)
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
                  Xt(a, i, m, S, o, null);
              }
          }
        v && Xt(a, i, "srcSet", o.srcSet, o, null), f && Xt(a, i, "src", o.src, o, null);
        return;
      case "input":
        Dt("invalid", a);
        var C = m = S = v = null, q = null, Y = null;
        for (f in o)
          if (o.hasOwnProperty(f)) {
            var J = o[f];
            if (J != null)
              switch (f) {
                case "name":
                  v = J;
                  break;
                case "type":
                  S = J;
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
                  Xt(a, i, f, J, o, null);
              }
          }
        O1(
          a,
          m,
          C,
          q,
          Y,
          S,
          v,
          !1
        );
        return;
      case "select":
        Dt("invalid", a), f = S = m = null;
        for (v in o)
          if (o.hasOwnProperty(v) && (C = o[v], C != null))
            switch (v) {
              case "value":
                m = C;
                break;
              case "defaultValue":
                S = C;
                break;
              case "multiple":
                f = C;
              default:
                Xt(a, i, v, C, o, null);
            }
        i = m, o = S, a.multiple = !!f, i != null ? pi(a, !!f, i, !1) : o != null && pi(a, !!f, o, !0);
        return;
      case "textarea":
        Dt("invalid", a), m = v = f = null;
        for (S in o)
          if (o.hasOwnProperty(S) && (C = o[S], C != null))
            switch (S) {
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
                Xt(a, i, S, C, o, null);
            }
        w1(a, f, v, m);
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
        for (f = 0; f < To.length; f++)
          Dt(To[f], a);
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
        if (mh(i)) {
          for (J in o)
            o.hasOwnProperty(J) && (f = o[J], f !== void 0 && rv(
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
    for (C in o)
      o.hasOwnProperty(C) && (f = o[C], f != null && Xt(a, i, C, f, o, null));
  }
  function aR(a, i, o, f) {
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
        var v = null, m = null, S = null, C = null, q = null, Y = null, J = null;
        for (Q in o) {
          var at = o[Q];
          if (o.hasOwnProperty(Q) && at != null)
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
          if (at = o[X], f.hasOwnProperty(X) && (Q != null || at != null))
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
                S = Q;
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
        ph(
          a,
          S,
          C,
          q,
          Y,
          J,
          m,
          v
        );
        return;
      case "select":
        Q = S = C = X = null;
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
                C = m;
                break;
              case "multiple":
                S = m;
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
        i = C, o = S, f = Q, X != null ? pi(a, !!o, X, !1) : !!f != !!o && (i != null ? pi(a, !!o, i, !0) : pi(a, !!o, o ? [] : "", !1));
        return;
      case "textarea":
        Q = X = null;
        for (C in o)
          if (v = o[C], o.hasOwnProperty(C) && v != null && !f.hasOwnProperty(C))
            switch (C) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(a, i, C, null, f, v);
            }
        for (S in f)
          if (v = f[S], m = o[S], f.hasOwnProperty(S) && (v != null || m != null))
            switch (S) {
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
                v !== m && Xt(a, i, S, v, f, m);
            }
        A1(a, X, Q);
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
        if (mh(i)) {
          for (var Kt in o)
            X = o[Kt], o.hasOwnProperty(Kt) && X !== void 0 && !f.hasOwnProperty(Kt) && rv(
              a,
              i,
              Kt,
              void 0,
              f,
              X
            );
          for (J in f)
            X = f[J], Q = o[J], !f.hasOwnProperty(J) || X === Q || X === void 0 && Q === void 0 || rv(
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
    for (at in f)
      X = f[at], Q = o[at], !f.hasOwnProperty(at) || X === Q || X == null && Q == null || Xt(a, i, at, X, f, Q);
  }
  function M_(a) {
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
  function iR() {
    if (typeof performance.getEntriesByType == "function") {
      for (var a = 0, i = 0, o = performance.getEntriesByType("resource"), f = 0; f < o.length; f++) {
        var v = o[f], m = v.transferSize, S = v.initiatorType, C = v.duration;
        if (m && C && M_(S)) {
          for (S = 0, C = v.responseEnd, f += 1; f < o.length; f++) {
            var q = o[f], Y = q.startTime;
            if (Y > C) break;
            var J = q.transferSize, at = q.initiatorType;
            J && M_(at) && (q = q.responseEnd, S += J * (q < C ? 1 : (C - Y) / (q - Y)));
          }
          if (--f, i += 8 * (m + S) / (v.duration / 1e3), a++, 10 < a) break;
        }
      }
      if (0 < a) return i / a / 1e6;
    }
    return navigator.connection && (a = navigator.connection.downlink, typeof a == "number") ? a : 5;
  }
  var av = null, iv = null;
  function Vc(a) {
    return a.nodeType === 9 ? a : a.ownerDocument;
  }
  function j_(a) {
    switch (a) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function C_(a, i) {
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
  function uv(a, i) {
    return a === "textarea" || a === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var ov = null;
  function uR() {
    var a = window.event;
    return a && a.type === "popstate" ? a === ov ? !1 : (ov = a, !0) : (ov = null, !1);
  }
  var D_ = typeof setTimeout == "function" ? setTimeout : void 0, oR = typeof clearTimeout == "function" ? clearTimeout : void 0, P_ = typeof Promise == "function" ? Promise : void 0, lR = typeof queueMicrotask == "function" ? queueMicrotask : typeof P_ < "u" ? function(a) {
    return P_.resolve(null).then(a).catch(cR);
  } : D_;
  function cR(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function ua(a) {
    return a === "head";
  }
  function N_(a, i) {
    var o = i, f = 0;
    do {
      var v = o.nextSibling;
      if (a.removeChild(o), v && v.nodeType === 8)
        if (o = v.data, o === "/$" || o === "/&") {
          if (f === 0) {
            a.removeChild(v), Ki(i);
            return;
          }
          f--;
        } else if (o === "$" || o === "$?" || o === "$~" || o === "$!" || o === "&")
          f++;
        else if (o === "html")
          Mo(a.ownerDocument.documentElement);
        else if (o === "head") {
          o = a.ownerDocument.head, Mo(o);
          for (var m = o.firstChild; m; ) {
            var S = m.nextSibling, C = m.nodeName;
            m[Yu] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && m.rel.toLowerCase() === "stylesheet" || o.removeChild(m), m = S;
          }
        } else
          o === "body" && Mo(a.ownerDocument.body);
      o = v;
    } while (o);
    Ki(i);
  }
  function R_(a, i) {
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
  function lv(a) {
    var i = a.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var o = i;
      switch (i = i.nextSibling, o.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lv(o), dh(o);
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
  function fR(a, i, o, f) {
    for (; a.nodeType === 1; ) {
      var v = o;
      if (a.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!f && (a.nodeName !== "INPUT" || a.type !== "hidden"))
          break;
      } else if (f) {
        if (!a[Yu])
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
  function sR(a, i, o) {
    if (i === "") return null;
    for (; a.nodeType !== 3; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !o || (a = On(a.nextSibling), a === null)) return null;
    return a;
  }
  function q_(a, i) {
    for (; a.nodeType !== 8; )
      if ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") && !i || (a = On(a.nextSibling), a === null)) return null;
    return a;
  }
  function cv(a) {
    return a.data === "$?" || a.data === "$~";
  }
  function fv(a) {
    return a.data === "$!" || a.data === "$?" && a.ownerDocument.readyState !== "loading";
  }
  function hR(a, i) {
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
  var sv = null;
  function z_(a) {
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
  function $_(a) {
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
  function B_(a, i, o) {
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
  function Mo(a) {
    for (var i = a.attributes; i.length; )
      a.removeAttributeNode(i[0]);
    dh(a);
  }
  var An = /* @__PURE__ */ new Map(), L_ = /* @__PURE__ */ new Set();
  function Fc(a) {
    return typeof a.getRootNode == "function" ? a.getRootNode() : a.nodeType === 9 ? a : a.ownerDocument;
  }
  var _r = I.d;
  I.d = {
    f: dR,
    r: vR,
    D: pR,
    C: yR,
    L: mR,
    m: gR,
    X: xR,
    S: bR,
    M: SR
  };
  function dR() {
    var a = _r.f(), i = Uc();
    return a || i;
  }
  function vR(a) {
    var i = hi(a);
    i !== null && i.tag === 5 && i.type === "form" ? nS(i) : _r.r(a);
  }
  var Gi = typeof document > "u" ? null : document;
  function U_(a, i, o) {
    var f = Gi;
    if (f && typeof i == "string" && i) {
      var v = yn(i);
      v = 'link[rel="' + a + '"][href="' + v + '"]', typeof o == "string" && (v += '[crossorigin="' + o + '"]'), L_.has(v) || (L_.add(v), a = { rel: a, crossOrigin: o, href: i }, f.querySelector(v) === null && (i = f.createElement("link"), Pe(i, "link", a), Ae(i), f.head.appendChild(i)));
    }
  }
  function pR(a) {
    _r.D(a), U_("dns-prefetch", a, null);
  }
  function yR(a, i) {
    _r.C(a, i), U_("preconnect", a, i);
  }
  function mR(a, i, o) {
    _r.L(a, i, o);
    var f = Gi;
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
          m = Yi(a);
          break;
        case "script":
          m = Xi(a);
      }
      An.has(m) || (a = p(
        {
          rel: "preload",
          href: i === "image" && o && o.imageSrcSet ? void 0 : a,
          as: i
        },
        o
      ), An.set(m, a), f.querySelector(v) !== null || i === "style" && f.querySelector(jo(m)) || i === "script" && f.querySelector(Co(m)) || (i = f.createElement("link"), Pe(i, "link", a), Ae(i), f.head.appendChild(i)));
    }
  }
  function gR(a, i) {
    _r.m(a, i);
    var o = Gi;
    if (o && a) {
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
      if (!An.has(m) && (a = p({ rel: "modulepreload", href: a }, i), An.set(m, a), o.querySelector(v) === null)) {
        switch (f) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (o.querySelector(Co(m)))
              return;
        }
        f = o.createElement("link"), Pe(f, "link", a), Ae(f), o.head.appendChild(f);
      }
    }
  }
  function bR(a, i, o) {
    _r.S(a, i, o);
    var f = Gi;
    if (f && a) {
      var v = di(f).hoistableStyles, m = Yi(a);
      i = i || "default";
      var S = v.get(m);
      if (!S) {
        var C = { loading: 0, preload: null };
        if (S = f.querySelector(
          jo(m)
        ))
          C.loading = 5;
        else {
          a = p(
            { rel: "stylesheet", href: a, "data-precedence": i },
            o
          ), (o = An.get(m)) && hv(a, o);
          var q = S = f.createElement("link");
          Ae(q), Pe(q, "link", a), q._p = new Promise(function(Y, J) {
            q.onload = Y, q.onerror = J;
          }), q.addEventListener("load", function() {
            C.loading |= 1;
          }), q.addEventListener("error", function() {
            C.loading |= 2;
          }), C.loading |= 4, Zc(S, i, f);
        }
        S = {
          type: "stylesheet",
          instance: S,
          count: 1,
          state: C
        }, v.set(m, S);
      }
    }
  }
  function xR(a, i) {
    _r.X(a, i);
    var o = Gi;
    if (o && a) {
      var f = di(o).hoistableScripts, v = Xi(a), m = f.get(v);
      m || (m = o.querySelector(Co(v)), m || (a = p({ src: a, async: !0 }, i), (i = An.get(v)) && dv(a, i), m = o.createElement("script"), Ae(m), Pe(m, "link", a), o.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, f.set(v, m));
    }
  }
  function SR(a, i) {
    _r.M(a, i);
    var o = Gi;
    if (o && a) {
      var f = di(o).hoistableScripts, v = Xi(a), m = f.get(v);
      m || (m = o.querySelector(Co(v)), m || (a = p({ src: a, async: !0, type: "module" }, i), (i = An.get(v)) && dv(a, i), m = o.createElement("script"), Ae(m), Pe(m, "link", a), o.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, f.set(v, m));
    }
  }
  function k_(a, i, o, f) {
    var v = (v = mt.current) ? Fc(v) : null;
    if (!v) throw Error(r(446));
    switch (a) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof o.precedence == "string" && typeof o.href == "string" ? (i = Yi(o.href), o = di(
          v
        ).hoistableStyles, f = o.get(i), f || (f = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, o.set(i, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (o.rel === "stylesheet" && typeof o.href == "string" && typeof o.precedence == "string") {
          a = Yi(o.href);
          var m = di(
            v
          ).hoistableStyles, S = m.get(a);
          if (S || (v = v.ownerDocument || v, S = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(a, S), (m = v.querySelector(
            jo(a)
          )) && !m._p && (S.instance = m, S.state.loading = 5), An.has(a) || (o = {
            rel: "preload",
            as: "style",
            href: o.href,
            crossOrigin: o.crossOrigin,
            integrity: o.integrity,
            media: o.media,
            hrefLang: o.hrefLang,
            referrerPolicy: o.referrerPolicy
          }, An.set(a, o), m || _R(
            v,
            a,
            o,
            S.state
          ))), i && f === null)
            throw Error(r(528, ""));
          return S;
        }
        if (i && f !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return i = o.async, o = o.src, typeof o == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = Xi(o), o = di(
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
  function Yi(a) {
    return 'href="' + yn(a) + '"';
  }
  function jo(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function H_(a) {
    return p({}, a, {
      "data-precedence": a.precedence,
      precedence: null
    });
  }
  function _R(a, i, o, f) {
    a.querySelector('link[rel="preload"][as="style"][' + i + "]") ? f.loading = 1 : (i = a.createElement("link"), f.preload = i, i.addEventListener("load", function() {
      return f.loading |= 1;
    }), i.addEventListener("error", function() {
      return f.loading |= 2;
    }), Pe(i, "link", o), Ae(i), a.head.appendChild(i));
  }
  function Xi(a) {
    return '[src="' + yn(a) + '"]';
  }
  function Co(a) {
    return "script[async]" + a;
  }
  function I_(a, i, o) {
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
          v = Yi(o.href);
          var m = a.querySelector(
            jo(v)
          );
          if (m)
            return i.state.loading |= 4, i.instance = m, Ae(m), m;
          f = H_(o), (v = An.get(v)) && hv(f, v), m = (a.ownerDocument || a).createElement("link"), Ae(m);
          var S = m;
          return S._p = new Promise(function(C, q) {
            S.onload = C, S.onerror = q;
          }), Pe(m, "link", f), i.state.loading |= 4, Zc(m, o.precedence, a), i.instance = m;
        case "script":
          return m = Xi(o.src), (v = a.querySelector(
            Co(m)
          )) ? (i.instance = v, Ae(v), v) : (f = o, (v = An.get(m)) && (f = p({}, o), dv(f, v)), a = a.ownerDocument || a, v = a.createElement("script"), Ae(v), Pe(v, "link", f), a.head.appendChild(v), i.instance = v);
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
    ), v = f.length ? f[f.length - 1] : null, m = v, S = 0; S < f.length; S++) {
      var C = f[S];
      if (C.dataset.precedence === i) m = C;
      else if (m !== v) break;
    }
    m ? m.parentNode.insertBefore(a, m.nextSibling) : (i = o.nodeType === 9 ? o.head : o, i.insertBefore(a, i.firstChild));
  }
  function hv(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.title == null && (a.title = i.title);
  }
  function dv(a, i) {
    a.crossOrigin == null && (a.crossOrigin = i.crossOrigin), a.referrerPolicy == null && (a.referrerPolicy = i.referrerPolicy), a.integrity == null && (a.integrity = i.integrity);
  }
  var Qc = null;
  function G_(a, i, o) {
    if (Qc === null) {
      var f = /* @__PURE__ */ new Map(), v = Qc = /* @__PURE__ */ new Map();
      v.set(o, f);
    } else
      v = Qc, f = v.get(o), f || (f = /* @__PURE__ */ new Map(), v.set(o, f));
    if (f.has(a)) return f;
    for (f.set(a, null), o = o.getElementsByTagName(a), v = 0; v < o.length; v++) {
      var m = o[v];
      if (!(m[Yu] || m[Me] || a === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var S = m.getAttribute(i) || "";
        S = a + S;
        var C = f.get(S);
        C ? C.push(m) : f.set(S, [m]);
      }
    }
    return f;
  }
  function Y_(a, i, o) {
    a = a.ownerDocument || a, a.head.insertBefore(
      o,
      i === "title" ? a.querySelector("head > title") : null
    );
  }
  function OR(a, i, o) {
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
  function X_(a) {
    return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
  }
  function AR(a, i, o, f) {
    if (o.type === "stylesheet" && (typeof f.media != "string" || matchMedia(f.media).matches !== !1) && (o.state.loading & 4) === 0) {
      if (o.instance === null) {
        var v = Yi(f.href), m = i.querySelector(
          jo(v)
        );
        if (m) {
          i = m._p, i !== null && typeof i == "object" && typeof i.then == "function" && (a.count++, a = Wc.bind(a), i.then(a, a)), o.state.loading |= 4, o.instance = m, Ae(m);
          return;
        }
        m = i.ownerDocument || i, f = H_(f), (v = An.get(v)) && hv(f, v), m = m.createElement("link"), Ae(m);
        var S = m;
        S._p = new Promise(function(C, q) {
          S.onload = C, S.onerror = q;
        }), Pe(m, "link", f), o.instance = m;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(o, i), (i = o.state.preload) && (o.state.loading & 3) === 0 && (a.count++, o = Wc.bind(a), i.addEventListener("load", o), i.addEventListener("error", o));
    }
  }
  var vv = 0;
  function wR(a, i) {
    return a.stylesheets && a.count === 0 && tf(a, a.stylesheets), 0 < a.count || 0 < a.imgCount ? function(o) {
      var f = setTimeout(function() {
        if (a.stylesheets && tf(a, a.stylesheets), a.unsuspend) {
          var m = a.unsuspend;
          a.unsuspend = null, m();
        }
      }, 6e4 + i);
      0 < a.imgBytes && vv === 0 && (vv = 62500 * iR());
      var v = setTimeout(
        function() {
          if (a.waitingForImages = !1, a.count === 0 && (a.stylesheets && tf(a, a.stylesheets), a.unsuspend)) {
            var m = a.unsuspend;
            a.unsuspend = null, m();
          }
        },
        (a.imgBytes > vv ? 50 : 800) + i
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
    a.stylesheets = null, a.unsuspend !== null && (a.count++, Jc = /* @__PURE__ */ new Map(), i.forEach(TR, a), Jc = null, Wc.call(a));
  }
  function TR(a, i) {
    if (!(i.state.loading & 4)) {
      var o = Jc.get(a);
      if (o) var f = o.get(null);
      else {
        o = /* @__PURE__ */ new Map(), Jc.set(a, o);
        for (var v = a.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < v.length; m++) {
          var S = v[m];
          (S.nodeName === "LINK" || S.getAttribute("media") !== "not all") && (o.set(S.dataset.precedence, S), f = S);
        }
        f && o.set(null, f);
      }
      v = i.instance, S = v.getAttribute("data-precedence"), m = o.get(S) || f, m === f && o.set(null, v), o.set(S, v), this.count++, f = Wc.bind(this), v.addEventListener("load", f), v.addEventListener("error", f), m ? m.parentNode.insertBefore(v, m.nextSibling) : (a = a.nodeType === 9 ? a.head : a, a.insertBefore(v, a.firstChild)), i.state.loading |= 4;
    }
  }
  var Do = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function ER(a, i, o, f, v, m, S, C, q) {
    this.tag = 1, this.containerInfo = a, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ch(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ch(0), this.hiddenUpdates = ch(null), this.identifierPrefix = f, this.onUncaughtError = v, this.onCaughtError = m, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = q, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function K_(a, i, o, f, v, m, S, C, q, Y, J, at) {
    return a = new ER(
      a,
      i,
      o,
      S,
      q,
      Y,
      J,
      at,
      C
    ), i = 1, m === !0 && (i |= 24), m = rn(3, null, null, i), a.current = m, m.stateNode = a, i = Kh(), i.refCount++, a.pooledCache = i, i.refCount++, m.memoizedState = {
      element: f,
      isDehydrated: o,
      cache: i
    }, Qh(m), a;
  }
  function V_(a) {
    return a ? (a = Oi, a) : Oi;
  }
  function F_(a, i, o, f, v, m) {
    v = V_(v), f.context === null ? f.context = v : f.pendingContext = v, f = Fr(i), f.payload = { element: o }, m = m === void 0 ? null : m, m !== null && (f.callback = m), o = Zr(a, f, i), o !== null && (Qe(o, a, i), lo(o, a, i));
  }
  function Z_(a, i) {
    if (a = a.memoizedState, a !== null && a.dehydrated !== null) {
      var o = a.retryLane;
      a.retryLane = o !== 0 && o < i ? o : i;
    }
  }
  function pv(a, i) {
    Z_(a, i), (a = a.alternate) && Z_(a, i);
  }
  function Q_(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = ja(a, 67108864);
      i !== null && Qe(i, a, 67108864), pv(a, 67108864);
    }
  }
  function W_(a) {
    if (a.tag === 13 || a.tag === 31) {
      var i = cn();
      i = fh(i);
      var o = ja(a, i);
      o !== null && Qe(o, a, i), pv(a, i);
    }
  }
  var ef = !0;
  function MR(a, i, o, f) {
    var v = N.T;
    N.T = null;
    var m = I.p;
    try {
      I.p = 2, yv(a, i, o, f);
    } finally {
      I.p = m, N.T = v;
    }
  }
  function jR(a, i, o, f) {
    var v = N.T;
    N.T = null;
    var m = I.p;
    try {
      I.p = 8, yv(a, i, o, f);
    } finally {
      I.p = m, N.T = v;
    }
  }
  function yv(a, i, o, f) {
    if (ef) {
      var v = mv(f);
      if (v === null)
        nv(
          a,
          i,
          f,
          nf,
          o
        ), tO(a, f);
      else if (DR(
        v,
        a,
        i,
        o,
        f
      ))
        f.stopPropagation();
      else if (tO(a, f), i & 4 && -1 < CR.indexOf(a)) {
        for (; v !== null; ) {
          var m = hi(v);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var S = Aa(m.pendingLanes);
                  if (S !== 0) {
                    var C = m;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; S; ) {
                      var q = 1 << 31 - en(S);
                      C.entanglements[1] |= q, S &= ~q;
                    }
                    Vn(m), (Lt & 6) === 0 && (Bc = $e() + 500, wo(0));
                  }
                }
                break;
              case 31:
              case 13:
                C = ja(m, 2), C !== null && Qe(C, m, 2), Uc(), pv(m, 2);
            }
          if (m = mv(f), m === null && nv(
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
        nv(
          a,
          i,
          f,
          null,
          o
        );
    }
  }
  function mv(a) {
    return a = bh(a), gv(a);
  }
  var nf = null;
  function gv(a) {
    if (nf = null, a = si(a), a !== null) {
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
  function J_(a) {
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
          case o1:
            return 2;
          case l1:
            return 8;
          case Yl:
          case yP:
            return 32;
          case c1:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bv = !1, oa = null, la = null, ca = null, Po = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), fa = [], CR = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tO(a, i) {
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
        Po.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        No.delete(i.pointerId);
    }
  }
  function Ro(a, i, o, f, v, m) {
    return a === null || a.nativeEvent !== m ? (a = {
      blockedOn: i,
      domEventName: o,
      eventSystemFlags: f,
      nativeEvent: m,
      targetContainers: [v]
    }, i !== null && (i = hi(i), i !== null && Q_(i)), a) : (a.eventSystemFlags |= f, i = a.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), a);
  }
  function DR(a, i, o, f, v) {
    switch (i) {
      case "focusin":
        return oa = Ro(
          oa,
          a,
          i,
          o,
          f,
          v
        ), !0;
      case "dragenter":
        return la = Ro(
          la,
          a,
          i,
          o,
          f,
          v
        ), !0;
      case "mouseover":
        return ca = Ro(
          ca,
          a,
          i,
          o,
          f,
          v
        ), !0;
      case "pointerover":
        var m = v.pointerId;
        return Po.set(
          m,
          Ro(
            Po.get(m) || null,
            a,
            i,
            o,
            f,
            v
          )
        ), !0;
      case "gotpointercapture":
        return m = v.pointerId, No.set(
          m,
          Ro(
            No.get(m) || null,
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
  function eO(a) {
    var i = si(a.target);
    if (i !== null) {
      var o = l(i);
      if (o !== null) {
        if (i = o.tag, i === 13) {
          if (i = c(o), i !== null) {
            a.blockedOn = i, p1(a.priority, function() {
              W_(o);
            });
            return;
          }
        } else if (i === 31) {
          if (i = s(o), i !== null) {
            a.blockedOn = i, p1(a.priority, function() {
              W_(o);
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
      var o = mv(a.nativeEvent);
      if (o === null) {
        o = a.nativeEvent;
        var f = new o.constructor(
          o.type,
          o
        );
        gh = f, o.target.dispatchEvent(f), gh = null;
      } else
        return i = hi(o), i !== null && Q_(i), a.blockedOn = o, !1;
      i.shift();
    }
    return !0;
  }
  function nO(a, i, o) {
    rf(a) && o.delete(i);
  }
  function PR() {
    bv = !1, oa !== null && rf(oa) && (oa = null), la !== null && rf(la) && (la = null), ca !== null && rf(ca) && (ca = null), Po.forEach(nO), No.forEach(nO);
  }
  function af(a, i) {
    a.blockedOn === i && (a.blockedOn = null, bv || (bv = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      PR
    )));
  }
  var uf = null;
  function rO(a) {
    uf !== a && (uf = a, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        uf === a && (uf = null);
        for (var i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], v = a[i + 2];
          if (typeof f != "function") {
            if (gv(f || o) === null)
              continue;
            break;
          }
          var m = hi(o);
          m !== null && (a.splice(i, 3), i -= 3, md(
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
  function Ki(a) {
    function i(q) {
      return af(q, a);
    }
    oa !== null && af(oa, a), la !== null && af(la, a), ca !== null && af(ca, a), Po.forEach(i), No.forEach(i);
    for (var o = 0; o < fa.length; o++) {
      var f = fa[o];
      f.blockedOn === a && (f.blockedOn = null);
    }
    for (; 0 < fa.length && (o = fa[0], o.blockedOn === null); )
      eO(o), o.blockedOn === null && fa.shift();
    if (o = (a.ownerDocument || a).$$reactFormReplay, o != null)
      for (f = 0; f < o.length; f += 3) {
        var v = o[f], m = o[f + 1], S = v[Ye] || null;
        if (typeof m == "function")
          S || rO(o);
        else if (S) {
          var C = null;
          if (m && m.hasAttribute("formAction")) {
            if (v = m, S = m[Ye] || null)
              C = S.formAction;
            else if (gv(v) !== null) continue;
          } else C = S.action;
          typeof C == "function" ? o[f + 1] = C : (o.splice(f, 3), f -= 3), rO(o);
        }
      }
  }
  function aO() {
    function a(m) {
      m.canIntercept && m.info === "react-transition" && m.intercept({
        handler: function() {
          return new Promise(function(S) {
            return v = S;
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
  function xv(a) {
    this._internalRoot = a;
  }
  of.prototype.render = xv.prototype.render = function(a) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    var o = i.current, f = cn();
    F_(o, f, a, i, null, null);
  }, of.prototype.unmount = xv.prototype.unmount = function() {
    var a = this._internalRoot;
    if (a !== null) {
      this._internalRoot = null;
      var i = a.containerInfo;
      F_(a.current, 2, null, a, null, null), Uc(), i[fi] = null;
    }
  };
  function of(a) {
    this._internalRoot = a;
  }
  of.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var i = v1();
      a = { blockedOn: null, target: a, priority: i };
      for (var o = 0; o < fa.length && i !== 0 && i < fa[o].priority; o++) ;
      fa.splice(o, 0, a), o === 0 && eO(a);
    }
  };
  var iO = e.version;
  if (iO !== "19.2.8")
    throw Error(
      r(
        527,
        iO,
        "19.2.8"
      )
    );
  I.findDOMNode = function(a) {
    var i = a._reactInternals;
    if (i === void 0)
      throw typeof a.render == "function" ? Error(r(188)) : (a = Object.keys(a).join(","), Error(r(268, a)));
    return a = d(i), a = a !== null ? y(a) : null, a = a === null ? null : a.stateNode, a;
  };
  var NR = {
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
        Hu = lf.inject(
          NR
        ), tn = lf;
      } catch {
      }
  }
  return Yo.createRoot = function(a, i) {
    if (!u(a)) throw Error(r(299));
    var o = !1, f = "", v = hS, m = dS, S = vS;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (f = i.identifierPrefix), i.onUncaughtError !== void 0 && (v = i.onUncaughtError), i.onCaughtError !== void 0 && (m = i.onCaughtError), i.onRecoverableError !== void 0 && (S = i.onRecoverableError)), i = K_(
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
      S,
      aO
    ), a[fi] = i.current, ev(a), new xv(i);
  }, Yo.hydrateRoot = function(a, i, o) {
    if (!u(a)) throw Error(r(299));
    var f = !1, v = "", m = hS, S = dS, C = vS, q = null;
    return o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (v = o.identifierPrefix), o.onUncaughtError !== void 0 && (m = o.onUncaughtError), o.onCaughtError !== void 0 && (S = o.onCaughtError), o.onRecoverableError !== void 0 && (C = o.onRecoverableError), o.formState !== void 0 && (q = o.formState)), i = K_(
      a,
      1,
      !0,
      i,
      o ?? null,
      f,
      v,
      q,
      m,
      S,
      C,
      aO
    ), i.context = V_(null), o = i.current, f = cn(), f = fh(f), v = Fr(f), v.callback = null, Zr(o, v, f), o = f, i.current.lanes = o, Gu(i, o), Vn(i), a[fi] = i.current, ev(a), new of(i);
  }, Yo.version = "19.2.8", Yo;
}
var tj;
function bY() {
  if (tj) return wg.exports;
  tj = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), wg.exports = gY(), wg.exports;
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
function ah(t) {
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
const ih = {
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
}, uh = { name: "entry", label: "netboi connection", selector: {} }, oh = { name: "title", label: "Title", selector: { text: {} } }, a1 = {
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
}, i1 = {
  name: "range",
  label: "Default range",
  selector: {
    select: {
      mode: "dropdown",
      options: ["1d", "1w", "1m", "3m", "6m", "1y", "all"].map((t) => ({ value: t, label: t }))
    }
  }
}, u1 = {
  name: "show_controls",
  label: "Show range/mode selectors",
  selector: { boolean: {} }
}, lh = {
  name: "auto_conceal_minutes",
  label: "Auto-conceal after reveal (minutes, 0 = stay revealed)",
  selector: { number: { min: 0, max: 43200, mode: "box" } }
}, pP = {
  name: "compact",
  label: "Short axis amounts ($1.2M instead of $1,200,000)",
  selector: { boolean: {} }
};
ah({
  tag: "netboi-worth-card",
  name: "netboi worth chart",
  description: "Your total over time — the netboi dashboard chart.",
  component: vP,
  schema: [
    oh,
    uh,
    a1,
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
    i1,
    u1,
    pP,
    lh,
    ih
  ],
  stub: { view: "all", range: "6m" },
  size: 6
});
ah({
  tag: "netboi-flow-card",
  name: "netboi net flow",
  description: "Money kept vs burned per day/week/month (day-to-day accounts).",
  component: vP,
  defaults: { view: "daily", mode: "flow" },
  schema: [oh, uh, i1, u1, pP, lh, ih],
  stub: { range: "3m" },
  size: 6
});
ah({
  tag: "netboi-stat-card",
  name: "netboi stat",
  description: "One big number with its change over a window.",
  component: u3,
  schema: [oh, uh, a1, i1, u1, lh, ih],
  stub: { view: "all", range: "1m" },
  size: 2
});
ah({
  tag: "netboi-accounts-card",
  name: "netboi accounts",
  description: "Accounts grouped by kind with balances and sync freshness.",
  component: r3,
  schema: [oh, uh, a1, lh, ih],
  stub: { view: "all" },
  size: 4
});
console.info("%c netboi cards %c loaded", "background:#60a5fa;color:#0b0f17;border-radius:3px 0 0 3px;padding:1px 4px", "background:#17202f;color:#e6edf7;border-radius:0 3px 3px 0;padding:1px 4px");
