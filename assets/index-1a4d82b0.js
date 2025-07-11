(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const h of d)
      if (h.type === "childList")
        for (const g of h.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && c(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(d) {
    const h = {};
    return (
      d.integrity && (h.integrity = d.integrity),
      d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = a(d);
    fetch(d.href, h);
  }
})();
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jsxRuntime = { exports: {} },
  reactJsxRuntime_production_min = {},
  react = { exports: {} },
  react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$1 = Symbol.for("react.element"),
  n$2 = Symbol.for("react.portal"),
  p$2 = Symbol.for("react.fragment"),
  q$1 = Symbol.for("react.strict_mode"),
  r$1 = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v$2 = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z$1 = Symbol.iterator;
function A$1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (z$1 && e[z$1]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B$1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  C$1 = Object.assign,
  D$1 = {};
function E$1(e, o, a) {
  ((this.props = e),
    (this.context = o),
    (this.refs = D$1),
    (this.updater = a || B$1));
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function (e, o) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, o, "setState");
};
E$1.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function F() {}
F.prototype = E$1.prototype;
function G$1(e, o, a) {
  ((this.props = e),
    (this.context = o),
    (this.refs = D$1),
    (this.updater = a || B$1));
}
var H$1 = (G$1.prototype = new F());
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = !0;
var I$2 = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K$1 = { current: null },
  L$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$2(e, o, a) {
  var c,
    d = {},
    h = null,
    g = null;
  if (o != null)
    for (c in (o.ref !== void 0 && (g = o.ref),
    o.key !== void 0 && (h = "" + o.key),
    o))
      J.call(o, c) && !L$1.hasOwnProperty(c) && (d[c] = o[c]);
  var b = arguments.length - 2;
  if (b === 1) d.children = a;
  else if (1 < b) {
    for (var j = Array(b), $ = 0; $ < b; $++) j[$] = arguments[$ + 2];
    d.children = j;
  }
  if (e && e.defaultProps)
    for (c in ((b = e.defaultProps), b)) d[c] === void 0 && (d[c] = b[c]);
  return {
    $$typeof: l$1,
    type: e,
    key: h,
    ref: g,
    props: d,
    _owner: K$1.current,
  };
}
function N$1(e, o) {
  return {
    $$typeof: l$1,
    type: e.type,
    key: o,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function O$1(e) {
  return typeof e == "object" && e !== null && e.$$typeof === l$1;
}
function escape(e) {
  var o = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (a) {
      return o[a];
    })
  );
}
var P$1 = /\/+/g;
function Q$2(e, o) {
  return typeof e == "object" && e !== null && e.key != null
    ? escape("" + e.key)
    : o.toString(36);
}
function R$2(e, o, a, c, d) {
  var h = typeof e;
  (h === "undefined" || h === "boolean") && (e = null);
  var g = !1;
  if (e === null) g = !0;
  else
    switch (h) {
      case "string":
      case "number":
        g = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case l$1:
          case n$2:
            g = !0;
        }
    }
  if (g)
    return (
      (g = e),
      (d = d(g)),
      (e = c === "" ? "." + Q$2(g, 0) : c),
      I$2(d)
        ? ((a = ""),
          e != null && (a = e.replace(P$1, "$&/") + "/"),
          R$2(d, o, a, "", function ($) {
            return $;
          }))
        : d != null &&
          (O$1(d) &&
            (d = N$1(
              d,
              a +
                (!d.key || (g && g.key === d.key)
                  ? ""
                  : ("" + d.key).replace(P$1, "$&/") + "/") +
                e,
            )),
          o.push(d)),
      1
    );
  if (((g = 0), (c = c === "" ? "." : c + ":"), I$2(e)))
    for (var b = 0; b < e.length; b++) {
      h = e[b];
      var j = c + Q$2(h, b);
      g += R$2(h, o, a, j, d);
    }
  else if (((j = A$1(e)), typeof j == "function"))
    for (e = j.call(e), b = 0; !(h = e.next()).done; )
      ((h = h.value), (j = c + Q$2(h, b++)), (g += R$2(h, o, a, j, d)));
  else if (h === "object")
    throw (
      (o = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (o === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : o) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return g;
}
function S$1(e, o, a) {
  if (e == null) return e;
  var c = [],
    d = 0;
  return (
    R$2(e, c, "", "", function (h) {
      return o.call(a, h, d++);
    }),
    c
  );
}
function T$1(e) {
  if (e._status === -1) {
    var o = e._result;
    ((o = o()),
      o.then(
        function (a) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = a));
        },
        function (a) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = a));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = o)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var U$2 = { current: null },
  V$2 = { transition: null },
  W$2 = {
    ReactCurrentDispatcher: U$2,
    ReactCurrentBatchConfig: V$2,
    ReactCurrentOwner: K$1,
  };
function X$2() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = {
  map: S$1,
  forEach: function (e, o, a) {
    S$1(
      e,
      function () {
        o.apply(this, arguments);
      },
      a,
    );
  },
  count: function (e) {
    var o = 0;
    return (
      S$1(e, function () {
        o++;
      }),
      o
    );
  },
  toArray: function (e) {
    return (
      S$1(e, function (o) {
        return o;
      }) || []
    );
  },
  only: function (e) {
    if (!O$1(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.act = X$2;
react_production_min.cloneElement = function (e, o, a) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var c = C$1({}, e.props),
    d = e.key,
    h = e.ref,
    g = e._owner;
  if (o != null) {
    if (
      (o.ref !== void 0 && ((h = o.ref), (g = K$1.current)),
      o.key !== void 0 && (d = "" + o.key),
      e.type && e.type.defaultProps)
    )
      var b = e.type.defaultProps;
    for (j in o)
      J.call(o, j) &&
        !L$1.hasOwnProperty(j) &&
        (c[j] = o[j] === void 0 && b !== void 0 ? b[j] : o[j]);
  }
  var j = arguments.length - 2;
  if (j === 1) c.children = a;
  else if (1 < j) {
    b = Array(j);
    for (var $ = 0; $ < j; $++) b[$] = arguments[$ + 2];
    c.children = b;
  }
  return { $$typeof: l$1, type: e.type, key: d, ref: h, props: c, _owner: g };
};
react_production_min.createContext = function (e) {
  return (
    (e = {
      $$typeof: u,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: t, _context: e }),
    (e.Consumer = e)
  );
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function (e) {
  var o = M$2.bind(null, e);
  return ((o.type = e), o);
};
react_production_min.createRef = function () {
  return { current: null };
};
react_production_min.forwardRef = function (e) {
  return { $$typeof: v$2, render: e };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function (e) {
  return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: T$1 };
};
react_production_min.memo = function (e, o) {
  return { $$typeof: x, type: e, compare: o === void 0 ? null : o };
};
react_production_min.startTransition = function (e) {
  var o = V$2.transition;
  V$2.transition = {};
  try {
    e();
  } finally {
    V$2.transition = o;
  }
};
react_production_min.unstable_act = X$2;
react_production_min.useCallback = function (e, o) {
  return U$2.current.useCallback(e, o);
};
react_production_min.useContext = function (e) {
  return U$2.current.useContext(e);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function (e) {
  return U$2.current.useDeferredValue(e);
};
react_production_min.useEffect = function (e, o) {
  return U$2.current.useEffect(e, o);
};
react_production_min.useId = function () {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function (e, o, a) {
  return U$2.current.useImperativeHandle(e, o, a);
};
react_production_min.useInsertionEffect = function (e, o) {
  return U$2.current.useInsertionEffect(e, o);
};
react_production_min.useLayoutEffect = function (e, o) {
  return U$2.current.useLayoutEffect(e, o);
};
react_production_min.useMemo = function (e, o) {
  return U$2.current.useMemo(e, o);
};
react_production_min.useReducer = function (e, o, a) {
  return U$2.current.useReducer(e, o, a);
};
react_production_min.useRef = function (e) {
  return U$2.current.useRef(e);
};
react_production_min.useState = function (e) {
  return U$2.current.useState(e);
};
react_production_min.useSyncExternalStore = function (e, o, a) {
  return U$2.current.useSyncExternalStore(e, o, a);
};
react_production_min.useTransition = function () {
  return U$2.current.useTransition();
};
react_production_min.version = "18.3.1";
react.exports = react_production_min;
var reactExports = react.exports;
const React = getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f = reactExports,
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m$1 = Object.prototype.hasOwnProperty,
  n$1 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, o, a) {
  var c,
    d = {},
    h = null,
    g = null;
  (a !== void 0 && (h = "" + a),
    o.key !== void 0 && (h = "" + o.key),
    o.ref !== void 0 && (g = o.ref));
  for (c in o) m$1.call(o, c) && !p$1.hasOwnProperty(c) && (d[c] = o[c]);
  if (e && e.defaultProps)
    for (c in ((o = e.defaultProps), o)) d[c] === void 0 && (d[c] = o[c]);
  return {
    $$typeof: k,
    type: e,
    key: h,
    ref: g,
    props: d,
    _owner: n$1.current,
  };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
jsxRuntime.exports = reactJsxRuntime_production_min;
var jsxRuntimeExports = jsxRuntime.exports,
  client = {},
  reactDom = { exports: {} },
  reactDom_production_min = {},
  scheduler = { exports: {} },
  scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function o(at, vt) {
    var xt = at.length;
    at.push(vt);
    e: for (; 0 < xt; ) {
      var St = (xt - 1) >>> 1,
        kt = at[St];
      if (0 < d(kt, vt)) ((at[St] = vt), (at[xt] = kt), (xt = St));
      else break e;
    }
  }
  function a(at) {
    return at.length === 0 ? null : at[0];
  }
  function c(at) {
    if (at.length === 0) return null;
    var vt = at[0],
      xt = at.pop();
    if (xt !== vt) {
      at[0] = xt;
      e: for (var St = 0, kt = at.length, Et = kt >>> 1; St < Et; ) {
        var Tt = 2 * (St + 1) - 1,
          Rt = at[Tt],
          At = Tt + 1,
          jt = at[At];
        if (0 > d(Rt, xt))
          At < kt && 0 > d(jt, Rt)
            ? ((at[St] = jt), (at[At] = xt), (St = At))
            : ((at[St] = Rt), (at[Tt] = xt), (St = Tt));
        else if (At < kt && 0 > d(jt, xt))
          ((at[St] = jt), (at[At] = xt), (St = At));
        else break e;
      }
    }
    return vt;
  }
  function d(at, vt) {
    var xt = at.sortIndex - vt.sortIndex;
    return xt !== 0 ? xt : at.id - vt.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var h = performance;
    e.unstable_now = function () {
      return h.now();
    };
  } else {
    var g = Date,
      b = g.now();
    e.unstable_now = function () {
      return g.now() - b;
    };
  }
  var j = [],
    $ = [],
    _e = 1,
    et = null,
    nt = 3,
    ot = !1,
    lt = !1,
    ut = !1,
    gt = typeof setTimeout == "function" ? setTimeout : null,
    it = typeof clearTimeout == "function" ? clearTimeout : null,
    rt = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function st(at) {
    for (var vt = a($); vt !== null; ) {
      if (vt.callback === null) c($);
      else if (vt.startTime <= at)
        (c($), (vt.sortIndex = vt.expirationTime), o(j, vt));
      else break;
      vt = a($);
    }
  }
  function ct(at) {
    if (((ut = !1), st(at), !lt))
      if (a(j) !== null) ((lt = !0), yt(ft));
      else {
        var vt = a($);
        vt !== null && ht(ct, vt.startTime - at);
      }
  }
  function ft(at, vt) {
    ((lt = !1), ut && ((ut = !1), it(dt), (dt = -1)), (ot = !0));
    var xt = nt;
    try {
      for (
        st(vt), et = a(j);
        et !== null && (!(et.expirationTime > vt) || (at && !Ct()));

      ) {
        var St = et.callback;
        if (typeof St == "function") {
          ((et.callback = null), (nt = et.priorityLevel));
          var kt = St(et.expirationTime <= vt);
          ((vt = e.unstable_now()),
            typeof kt == "function" ? (et.callback = kt) : et === a(j) && c(j),
            st(vt));
        } else c(j);
        et = a(j);
      }
      if (et !== null) var Et = !0;
      else {
        var Tt = a($);
        (Tt !== null && ht(ct, Tt.startTime - vt), (Et = !1));
      }
      return Et;
    } finally {
      ((et = null), (nt = xt), (ot = !1));
    }
  }
  var pt = !1,
    mt = null,
    dt = -1,
    wt = 5,
    bt = -1;
  function Ct() {
    return !(e.unstable_now() - bt < wt);
  }
  function Pt() {
    if (mt !== null) {
      var at = e.unstable_now();
      bt = at;
      var vt = !0;
      try {
        vt = mt(!0, at);
      } finally {
        vt ? Vt() : ((pt = !1), (mt = null));
      }
    } else pt = !1;
  }
  var Vt;
  if (typeof rt == "function")
    Vt = function () {
      rt(Pt);
    };
  else if (typeof MessageChannel < "u") {
    var Dt = new MessageChannel(),
      Mt = Dt.port2;
    ((Dt.port1.onmessage = Pt),
      (Vt = function () {
        Mt.postMessage(null);
      }));
  } else
    Vt = function () {
      gt(Pt, 0);
    };
  function yt(at) {
    ((mt = at), pt || ((pt = !0), Vt()));
  }
  function ht(at, vt) {
    dt = gt(function () {
      at(e.unstable_now());
    }, vt);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (at) {
      at.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      lt || ot || ((lt = !0), yt(ft));
    }),
    (e.unstable_forceFrameRate = function (at) {
      0 > at || 125 < at
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (wt = 0 < at ? Math.floor(1e3 / at) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return nt;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return a(j);
    }),
    (e.unstable_next = function (at) {
      switch (nt) {
        case 1:
        case 2:
        case 3:
          var vt = 3;
          break;
        default:
          vt = nt;
      }
      var xt = nt;
      nt = vt;
      try {
        return at();
      } finally {
        nt = xt;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (at, vt) {
      switch (at) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          at = 3;
      }
      var xt = nt;
      nt = at;
      try {
        return vt();
      } finally {
        nt = xt;
      }
    }),
    (e.unstable_scheduleCallback = function (at, vt, xt) {
      var St = e.unstable_now();
      switch (
        (typeof xt == "object" && xt !== null
          ? ((xt = xt.delay),
            (xt = typeof xt == "number" && 0 < xt ? St + xt : St))
          : (xt = St),
        at)
      ) {
        case 1:
          var kt = -1;
          break;
        case 2:
          kt = 250;
          break;
        case 5:
          kt = 1073741823;
          break;
        case 4:
          kt = 1e4;
          break;
        default:
          kt = 5e3;
      }
      return (
        (kt = xt + kt),
        (at = {
          id: _e++,
          callback: vt,
          priorityLevel: at,
          startTime: xt,
          expirationTime: kt,
          sortIndex: -1,
        }),
        xt > St
          ? ((at.sortIndex = xt),
            o($, at),
            a(j) === null &&
              at === a($) &&
              (ut ? (it(dt), (dt = -1)) : (ut = !0), ht(ct, xt - St)))
          : ((at.sortIndex = kt), o(j, at), lt || ot || ((lt = !0), yt(ft))),
        at
      );
    }),
    (e.unstable_shouldYield = Ct),
    (e.unstable_wrapCallback = function (at) {
      var vt = nt;
      return function () {
        var xt = nt;
        nt = vt;
        try {
          return at.apply(this, arguments);
        } finally {
          nt = xt;
        }
      };
    }));
})(scheduler_production_min);
scheduler.exports = scheduler_production_min;
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports;
function p(e) {
  for (
    var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1;
    a < arguments.length;
    a++
  )
    o += "&args[]=" + encodeURIComponent(arguments[a]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    o +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var da = new Set(),
  ea = {};
function fa(e, o) {
  (ha(e, o), ha(e + "Capture", o));
}
function ha(e, o) {
  for (ea[e] = o, e = 0; e < o.length; e++) da.add(o[e]);
}
var ia = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(e) {
  return ja.call(ma, e)
    ? !0
    : ja.call(la, e)
      ? !1
      : ka.test(e)
        ? (ma[e] = !0)
        : ((la[e] = !0), !1);
}
function pa(e, o, a, c) {
  if (a !== null && a.type === 0) return !1;
  switch (typeof o) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return c
        ? !1
        : a !== null
          ? !a.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qa(e, o, a, c) {
  if (o === null || typeof o > "u" || pa(e, o, a, c)) return !0;
  if (c) return !1;
  if (a !== null)
    switch (a.type) {
      case 3:
        return !o;
      case 4:
        return o === !1;
      case 5:
        return isNaN(o);
      case 6:
        return isNaN(o) || 1 > o;
    }
  return !1;
}
function v$1(e, o, a, c, d, h, g) {
  ((this.acceptsBooleans = o === 2 || o === 3 || o === 4),
    (this.attributeName = c),
    (this.attributeNamespace = d),
    (this.mustUseProperty = a),
    (this.propertyName = e),
    (this.type = o),
    (this.sanitizeURL = h),
    (this.removeEmptyString = g));
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    z[e] = new v$1(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var o = e[0];
  z[o] = new v$1(o, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  z[e] = new v$1(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  z[e] = new v$1(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    z[e] = new v$1(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  z[e] = new v$1(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  z[e] = new v$1(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  z[e] = new v$1(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  z[e] = new v$1(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var o = e.replace(ra, sa);
    z[o] = new v$1(o, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var o = e.replace(ra, sa);
    z[o] = new v$1(o, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var o = e.replace(ra, sa);
  z[o] = new v$1(o, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  z[e] = new v$1(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v$1(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  z[e] = new v$1(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ta(e, o, a, c) {
  var d = z.hasOwnProperty(o) ? z[o] : null;
  (d !== null
    ? d.type !== 0
    : c ||
      !(2 < o.length) ||
      (o[0] !== "o" && o[0] !== "O") ||
      (o[1] !== "n" && o[1] !== "N")) &&
    (qa(o, a, d, c) && (a = null),
    c || d === null
      ? oa(o) && (a === null ? e.removeAttribute(o) : e.setAttribute(o, "" + a))
      : d.mustUseProperty
        ? (e[d.propertyName] = a === null ? (d.type === 3 ? !1 : "") : a)
        : ((o = d.attributeName),
          (c = d.attributeNamespace),
          a === null
            ? e.removeAttribute(o)
            : ((d = d.type),
              (a = d === 3 || (d === 4 && a === !0) ? "" : "" + a),
              c ? e.setAttributeNS(c, o, a) : e.setAttribute(o, a))));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for("react.element"),
  wa = Symbol.for("react.portal"),
  ya = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  Ha = Symbol.for("react.lazy"),
  Ia = Symbol.for("react.offscreen"),
  Ja = Symbol.iterator;
function Ka(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ja && e[Ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  La;
function Ma(e) {
  if (La === void 0)
    try {
      throw Error();
    } catch (a) {
      var o = a.stack.trim().match(/\n( *(at )?)/);
      La = (o && o[1]) || "";
    }
  return (
    `
` +
    La +
    e
  );
}
var Na = !1;
function Oa(e, o) {
  if (!e || Na) return "";
  Na = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (o)
      if (
        ((o = function () {
          throw Error();
        }),
        Object.defineProperty(o.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(o, []);
        } catch ($) {
          var c = $;
        }
        Reflect.construct(e, [], o);
      } else {
        try {
          o.call();
        } catch ($) {
          c = $;
        }
        e.call(o.prototype);
      }
    else {
      try {
        throw Error();
      } catch ($) {
        c = $;
      }
      e();
    }
  } catch ($) {
    if ($ && c && typeof $.stack == "string") {
      for (
        var d = $.stack.split(`
`),
          h = c.stack.split(`
`),
          g = d.length - 1,
          b = h.length - 1;
        1 <= g && 0 <= b && d[g] !== h[b];

      )
        b--;
      for (; 1 <= g && 0 <= b; g--, b--)
        if (d[g] !== h[b]) {
          if (g !== 1 || b !== 1)
            do
              if ((g--, b--, 0 > b || d[g] !== h[b])) {
                var j =
                  `
` + d[g].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    j.includes("<anonymous>") &&
                    (j = j.replace("<anonymous>", e.displayName)),
                  j
                );
              }
            while (1 <= g && 0 <= b);
          break;
        }
    }
  } finally {
    ((Na = !1), (Error.prepareStackTrace = a));
  }
  return (e = e ? e.displayName || e.name : "") ? Ma(e) : "";
}
function Pa(e) {
  switch (e.tag) {
    case 5:
      return Ma(e.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Oa(e.type, !1)), e);
    case 11:
      return ((e = Oa(e.type.render, !1)), e);
    case 1:
      return ((e = Oa(e.type, !0)), e);
    default:
      return "";
  }
}
function Qa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || "Context") + ".Consumer";
      case Ba:
        return (e._context.displayName || "Context") + ".Provider";
      case Da:
        var o = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = o.displayName || o.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ga:
        return (
          (o = e.displayName || null),
          o !== null ? o : Qa(e.type) || "Memo"
        );
      case Ha:
        ((o = e._payload), (e = e._init));
        try {
          return Qa(e(o));
        } catch {}
    }
  return null;
}
function Ra(e) {
  var o = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (o.displayName || "Context") + ".Consumer";
    case 10:
      return (o._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = o.render),
        (e = e.displayName || e.name || ""),
        o.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return o;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(o);
    case 8:
      return o === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof o == "function") return o.displayName || o.name || null;
      if (typeof o == "string") return o;
  }
  return null;
}
function Sa(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ta(e) {
  var o = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (o === "checkbox" || o === "radio")
  );
}
function Ua(e) {
  var o = Ta(e) ? "checked" : "value",
    a = Object.getOwnPropertyDescriptor(e.constructor.prototype, o),
    c = "" + e[o];
  if (
    !e.hasOwnProperty(o) &&
    typeof a < "u" &&
    typeof a.get == "function" &&
    typeof a.set == "function"
  ) {
    var d = a.get,
      h = a.set;
    return (
      Object.defineProperty(e, o, {
        configurable: !0,
        get: function () {
          return d.call(this);
        },
        set: function (g) {
          ((c = "" + g), h.call(this, g));
        },
      }),
      Object.defineProperty(e, o, { enumerable: a.enumerable }),
      {
        getValue: function () {
          return c;
        },
        setValue: function (g) {
          c = "" + g;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[o]);
        },
      }
    );
  }
}
function Va(e) {
  e._valueTracker || (e._valueTracker = Ua(e));
}
function Wa(e) {
  if (!e) return !1;
  var o = e._valueTracker;
  if (!o) return !0;
  var a = o.getValue(),
    c = "";
  return (
    e && (c = Ta(e) ? (e.checked ? "true" : "false") : e.value),
    (e = c),
    e !== a ? (o.setValue(e), !0) : !1
  );
}
function Xa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ya(e, o) {
  var a = o.checked;
  return A({}, o, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: a ?? e._wrapperState.initialChecked,
  });
}
function Za(e, o) {
  var a = o.defaultValue == null ? "" : o.defaultValue,
    c = o.checked != null ? o.checked : o.defaultChecked;
  ((a = Sa(o.value != null ? o.value : a)),
    (e._wrapperState = {
      initialChecked: c,
      initialValue: a,
      controlled:
        o.type === "checkbox" || o.type === "radio"
          ? o.checked != null
          : o.value != null,
    }));
}
function ab(e, o) {
  ((o = o.checked), o != null && ta(e, "checked", o, !1));
}
function bb(e, o) {
  ab(e, o);
  var a = Sa(o.value),
    c = o.type;
  if (a != null)
    c === "number"
      ? ((a === 0 && e.value === "") || e.value != a) && (e.value = "" + a)
      : e.value !== "" + a && (e.value = "" + a);
  else if (c === "submit" || c === "reset") {
    e.removeAttribute("value");
    return;
  }
  (o.hasOwnProperty("value")
    ? cb(e, o.type, a)
    : o.hasOwnProperty("defaultValue") && cb(e, o.type, Sa(o.defaultValue)),
    o.checked == null &&
      o.defaultChecked != null &&
      (e.defaultChecked = !!o.defaultChecked));
}
function db(e, o, a) {
  if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
    var c = o.type;
    if (
      !(
        (c !== "submit" && c !== "reset") ||
        (o.value !== void 0 && o.value !== null)
      )
    )
      return;
    ((o = "" + e._wrapperState.initialValue),
      a || o === e.value || (e.value = o),
      (e.defaultValue = o));
  }
  ((a = e.name),
    a !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    a !== "" && (e.name = a));
}
function cb(e, o, a) {
  (o !== "number" || Xa(e.ownerDocument) !== e) &&
    (a == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + a && (e.defaultValue = "" + a));
}
var eb = Array.isArray;
function fb(e, o, a, c) {
  if (((e = e.options), o)) {
    o = {};
    for (var d = 0; d < a.length; d++) o["$" + a[d]] = !0;
    for (a = 0; a < e.length; a++)
      ((d = o.hasOwnProperty("$" + e[a].value)),
        e[a].selected !== d && (e[a].selected = d),
        d && c && (e[a].defaultSelected = !0));
  } else {
    for (a = "" + Sa(a), o = null, d = 0; d < e.length; d++) {
      if (e[d].value === a) {
        ((e[d].selected = !0), c && (e[d].defaultSelected = !0));
        return;
      }
      o !== null || e[d].disabled || (o = e[d]);
    }
    o !== null && (o.selected = !0);
  }
}
function gb(e, o) {
  if (o.dangerouslySetInnerHTML != null) throw Error(p(91));
  return A({}, o, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hb(e, o) {
  var a = o.value;
  if (a == null) {
    if (((a = o.children), (o = o.defaultValue), a != null)) {
      if (o != null) throw Error(p(92));
      if (eb(a)) {
        if (1 < a.length) throw Error(p(93));
        a = a[0];
      }
      o = a;
    }
    (o == null && (o = ""), (a = o));
  }
  e._wrapperState = { initialValue: Sa(a) };
}
function ib(e, o) {
  var a = Sa(o.value),
    c = Sa(o.defaultValue);
  (a != null &&
    ((a = "" + a),
    a !== e.value && (e.value = a),
    o.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)),
    c != null && (e.defaultValue = "" + c));
}
function jb(e) {
  var o = e.textContent;
  o === e._wrapperState.initialValue && o !== "" && o !== null && (e.value = o);
}
function kb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(e, o) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kb(o)
    : e === "http://www.w3.org/2000/svg" && o === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var mb,
  nb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (o, a, c, d) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(o, a, c, d);
          });
        }
      : e;
  })(function (e, o) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = o;
    else {
      for (
        mb = mb || document.createElement("div"),
          mb.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>",
          o = mb.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; o.firstChild; ) e.appendChild(o.firstChild);
    }
  });
function ob(e, o) {
  if (o) {
    var a = e.firstChild;
    if (a && a === e.lastChild && a.nodeType === 3) {
      a.nodeValue = o;
      return;
    }
  }
  e.textContent = o;
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
    strokeWidth: !0,
  },
  qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function (e) {
  qb.forEach(function (o) {
    ((o = o + e.charAt(0).toUpperCase() + e.substring(1)), (pb[o] = pb[e]));
  });
});
function rb(e, o, a) {
  return o == null || typeof o == "boolean" || o === ""
    ? ""
    : a || typeof o != "number" || o === 0 || (pb.hasOwnProperty(e) && pb[e])
      ? ("" + o).trim()
      : o + "px";
}
function sb(e, o) {
  e = e.style;
  for (var a in o)
    if (o.hasOwnProperty(a)) {
      var c = a.indexOf("--") === 0,
        d = rb(a, o[a], c);
      (a === "float" && (a = "cssFloat"), c ? e.setProperty(a, d) : (e[a] = d));
    }
}
var tb = A(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function ub(e, o) {
  if (o) {
    if (tb[e] && (o.children != null || o.dangerouslySetInnerHTML != null))
      throw Error(p(137, e));
    if (o.dangerouslySetInnerHTML != null) {
      if (o.children != null) throw Error(p(60));
      if (
        typeof o.dangerouslySetInnerHTML != "object" ||
        !("__html" in o.dangerouslySetInnerHTML)
      )
        throw Error(p(61));
    }
    if (o.style != null && typeof o.style != "object") throw Error(p(62));
  }
}
function vb(e, o) {
  if (e.indexOf("-") === -1) return typeof o.is == "string";
  switch (e) {
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
var wb = null;
function xb(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(e) {
  if ((e = Cb(e))) {
    if (typeof yb != "function") throw Error(p(280));
    var o = e.stateNode;
    o && ((o = Db(o)), yb(e.stateNode, e.type, o));
  }
}
function Eb(e) {
  zb ? (Ab ? Ab.push(e) : (Ab = [e])) : (zb = e);
}
function Fb() {
  if (zb) {
    var e = zb,
      o = Ab;
    if (((Ab = zb = null), Bb(e), o)) for (e = 0; e < o.length; e++) Bb(o[e]);
  }
}
function Gb(e, o) {
  return e(o);
}
function Hb() {}
var Ib = !1;
function Jb(e, o, a) {
  if (Ib) return e(o, a);
  Ib = !0;
  try {
    return Gb(e, o, a);
  } finally {
    ((Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb()));
  }
}
function Kb(e, o) {
  var a = e.stateNode;
  if (a === null) return null;
  var c = Db(a);
  if (c === null) return null;
  a = c[o];
  e: switch (o) {
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
      ((c = !c.disabled) ||
        ((e = e.type),
        (c = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !c));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (a && typeof a != "function") throw Error(p(231, o, typeof a));
  return a;
}
var Lb = !1;
if (ia)
  try {
    var Mb = {};
    (Object.defineProperty(Mb, "passive", {
      get: function () {
        Lb = !0;
      },
    }),
      window.addEventListener("test", Mb, Mb),
      window.removeEventListener("test", Mb, Mb));
  } catch {
    Lb = !1;
  }
function Nb(e, o, a, c, d, h, g, b, j) {
  var $ = Array.prototype.slice.call(arguments, 3);
  try {
    o.apply(a, $);
  } catch (_e) {
    this.onError(_e);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (e) {
      ((Ob = !0), (Pb = e));
    },
  };
function Tb(e, o, a, c, d, h, g, b, j) {
  ((Ob = !1), (Pb = null), Nb.apply(Sb, arguments));
}
function Ub(e, o, a, c, d, h, g, b, j) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var $ = Pb;
      ((Ob = !1), (Pb = null));
    } else throw Error(p(198));
    Qb || ((Qb = !0), (Rb = $));
  }
}
function Vb(e) {
  var o = e,
    a = e;
  if (e.alternate) for (; o.return; ) o = o.return;
  else {
    e = o;
    do ((o = e), o.flags & 4098 && (a = o.return), (e = o.return));
    while (e);
  }
  return o.tag === 3 ? a : null;
}
function Wb(e) {
  if (e.tag === 13) {
    var o = e.memoizedState;
    if (
      (o === null && ((e = e.alternate), e !== null && (o = e.memoizedState)),
      o !== null)
    )
      return o.dehydrated;
  }
  return null;
}
function Xb(e) {
  if (Vb(e) !== e) throw Error(p(188));
}
function Yb(e) {
  var o = e.alternate;
  if (!o) {
    if (((o = Vb(e)), o === null)) throw Error(p(188));
    return o !== e ? null : e;
  }
  for (var a = e, c = o; ; ) {
    var d = a.return;
    if (d === null) break;
    var h = d.alternate;
    if (h === null) {
      if (((c = d.return), c !== null)) {
        a = c;
        continue;
      }
      break;
    }
    if (d.child === h.child) {
      for (h = d.child; h; ) {
        if (h === a) return (Xb(d), e);
        if (h === c) return (Xb(d), o);
        h = h.sibling;
      }
      throw Error(p(188));
    }
    if (a.return !== c.return) ((a = d), (c = h));
    else {
      for (var g = !1, b = d.child; b; ) {
        if (b === a) {
          ((g = !0), (a = d), (c = h));
          break;
        }
        if (b === c) {
          ((g = !0), (c = d), (a = h));
          break;
        }
        b = b.sibling;
      }
      if (!g) {
        for (b = h.child; b; ) {
          if (b === a) {
            ((g = !0), (a = h), (c = d));
            break;
          }
          if (b === c) {
            ((g = !0), (c = h), (a = d));
            break;
          }
          b = b.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (a.alternate !== c) throw Error(p(190));
  }
  if (a.tag !== 3) throw Error(p(188));
  return a.stateNode.current === a ? e : o;
}
function Zb(e) {
  return ((e = Yb(e)), e !== null ? $b(e) : null);
}
function $b(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var o = $b(e);
    if (o !== null) return o;
    e = e.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(e) {
  if (lc && typeof lc.onCommitFiberRoot == "function")
    try {
      lc.onCommitFiberRoot(kc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((pc(e) / qc) | 0)) | 0);
}
var rc = 64,
  sc = 4194304;
function tc(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uc(e, o) {
  var a = e.pendingLanes;
  if (a === 0) return 0;
  var c = 0,
    d = e.suspendedLanes,
    h = e.pingedLanes,
    g = a & 268435455;
  if (g !== 0) {
    var b = g & ~d;
    b !== 0 ? (c = tc(b)) : ((h &= g), h !== 0 && (c = tc(h)));
  } else ((g = a & ~d), g !== 0 ? (c = tc(g)) : h !== 0 && (c = tc(h)));
  if (c === 0) return 0;
  if (
    o !== 0 &&
    o !== c &&
    !(o & d) &&
    ((d = c & -c), (h = o & -o), d >= h || (d === 16 && (h & 4194240) !== 0))
  )
    return o;
  if ((c & 4 && (c |= a & 16), (o = e.entangledLanes), o !== 0))
    for (e = e.entanglements, o &= c; 0 < o; )
      ((a = 31 - oc(o)), (d = 1 << a), (c |= e[a]), (o &= ~d));
  return c;
}
function vc(e, o) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return o + 250;
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
    case 2097152:
      return o + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(e, o) {
  for (
    var a = e.suspendedLanes,
      c = e.pingedLanes,
      d = e.expirationTimes,
      h = e.pendingLanes;
    0 < h;

  ) {
    var g = 31 - oc(h),
      b = 1 << g,
      j = d[g];
    (j === -1
      ? (!(b & a) || b & c) && (d[g] = vc(b, o))
      : j <= o && (e.expiredLanes |= b),
      (h &= ~b));
  }
}
function xc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = rc;
  return ((rc <<= 1), !(rc & 4194240) && (rc = 64), e);
}
function zc(e) {
  for (var o = [], a = 0; 31 > a; a++) o.push(e);
  return o;
}
function Ac(e, o, a) {
  ((e.pendingLanes |= o),
    o !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (o = 31 - oc(o)),
    (e[o] = a));
}
function Bc(e, o) {
  var a = e.pendingLanes & ~o;
  ((e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements));
  var c = e.eventTimes;
  for (e = e.expirationTimes; 0 < a; ) {
    var d = 31 - oc(a),
      h = 1 << d;
    ((o[d] = 0), (c[d] = -1), (e[d] = -1), (a &= ~h));
  }
}
function Cc(e, o) {
  var a = (e.entangledLanes |= o);
  for (e = e.entanglements; a; ) {
    var c = 31 - oc(a),
      d = 1 << c;
    ((d & o) | (e[c] & o) && (e[c] |= o), (a &= ~d));
  }
}
var C = 0;
function Dc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Sc(e, o) {
  switch (e) {
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
      Oc.delete(o.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(o.pointerId);
  }
}
function Tc(e, o, a, c, d, h) {
  return e === null || e.nativeEvent !== h
    ? ((e = {
        blockedOn: o,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: h,
        targetContainers: [d],
      }),
      o !== null && ((o = Cb(o)), o !== null && Fc(o)),
      e)
    : ((e.eventSystemFlags |= c),
      (o = e.targetContainers),
      d !== null && o.indexOf(d) === -1 && o.push(d),
      e);
}
function Uc(e, o, a, c, d) {
  switch (o) {
    case "focusin":
      return ((Lc = Tc(Lc, e, o, a, c, d)), !0);
    case "dragenter":
      return ((Mc = Tc(Mc, e, o, a, c, d)), !0);
    case "mouseover":
      return ((Nc = Tc(Nc, e, o, a, c, d)), !0);
    case "pointerover":
      var h = d.pointerId;
      return (Oc.set(h, Tc(Oc.get(h) || null, e, o, a, c, d)), !0);
    case "gotpointercapture":
      return (
        (h = d.pointerId),
        Pc.set(h, Tc(Pc.get(h) || null, e, o, a, c, d)),
        !0
      );
  }
  return !1;
}
function Vc(e) {
  var o = Wc(e.target);
  if (o !== null) {
    var a = Vb(o);
    if (a !== null) {
      if (((o = a.tag), o === 13)) {
        if (((o = Wb(a)), o !== null)) {
          ((e.blockedOn = o),
            Ic(e.priority, function () {
              Gc(a);
            }));
          return;
        }
      } else if (o === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xc(e) {
  if (e.blockedOn !== null) return !1;
  for (var o = e.targetContainers; 0 < o.length; ) {
    var a = Yc(e.domEventName, e.eventSystemFlags, o[0], e.nativeEvent);
    if (a === null) {
      a = e.nativeEvent;
      var c = new a.constructor(a.type, a);
      ((wb = c), a.target.dispatchEvent(c), (wb = null));
    } else return ((o = Cb(a)), o !== null && Fc(o), (e.blockedOn = a), !1);
    o.shift();
  }
  return !0;
}
function Zc(e, o, a) {
  Xc(e) && a.delete(o);
}
function $c() {
  ((Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc));
}
function ad(e, o) {
  e.blockedOn === o &&
    ((e.blockedOn = null),
    Jc ||
      ((Jc = !0),
      ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(e) {
  function o(d) {
    return ad(d, e);
  }
  if (0 < Kc.length) {
    ad(Kc[0], e);
    for (var a = 1; a < Kc.length; a++) {
      var c = Kc[a];
      c.blockedOn === e && (c.blockedOn = null);
    }
  }
  for (
    Lc !== null && ad(Lc, e),
      Mc !== null && ad(Mc, e),
      Nc !== null && ad(Nc, e),
      Oc.forEach(o),
      Pc.forEach(o),
      a = 0;
    a < Qc.length;
    a++
  )
    ((c = Qc[a]), c.blockedOn === e && (c.blockedOn = null));
  for (; 0 < Qc.length && ((a = Qc[0]), a.blockedOn === null); )
    (Vc(a), a.blockedOn === null && Qc.shift());
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(e, o, a, c) {
  var d = C,
    h = cd.transition;
  cd.transition = null;
  try {
    ((C = 1), fd(e, o, a, c));
  } finally {
    ((C = d), (cd.transition = h));
  }
}
function gd(e, o, a, c) {
  var d = C,
    h = cd.transition;
  cd.transition = null;
  try {
    ((C = 4), fd(e, o, a, c));
  } finally {
    ((C = d), (cd.transition = h));
  }
}
function fd(e, o, a, c) {
  if (dd) {
    var d = Yc(e, o, a, c);
    if (d === null) (hd(e, o, c, id$2, a), Sc(e, c));
    else if (Uc(d, e, o, a, c)) c.stopPropagation();
    else if ((Sc(e, c), o & 4 && -1 < Rc.indexOf(e))) {
      for (; d !== null; ) {
        var h = Cb(d);
        if (
          (h !== null && Ec(h),
          (h = Yc(e, o, a, c)),
          h === null && hd(e, o, c, id$2, a),
          h === d)
        )
          break;
        d = h;
      }
      d !== null && c.stopPropagation();
    } else hd(e, o, c, null, a);
  }
}
var id$2 = null;
function Yc(e, o, a, c) {
  if (((id$2 = null), (e = xb(c)), (e = Wc(e)), e !== null))
    if (((o = Vb(e)), o === null)) e = null;
    else if (((a = o.tag), a === 13)) {
      if (((e = Wb(o)), e !== null)) return e;
      e = null;
    } else if (a === 3) {
      if (o.stateNode.current.memoizedState.isDehydrated)
        return o.tag === 3 ? o.stateNode.containerInfo : null;
      e = null;
    } else o !== e && (e = null);
  return ((id$2 = e), null);
}
function jd(e) {
  switch (e) {
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
    case "selectstart":
      return 1;
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
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var e,
    o = ld,
    a = o.length,
    c,
    d = "value" in kd ? kd.value : kd.textContent,
    h = d.length;
  for (e = 0; e < a && o[e] === d[e]; e++);
  var g = a - e;
  for (c = 1; c <= g && o[a - c] === d[h - c]; c++);
  return (md = d.slice(e, 1 < c ? 1 - c : void 0));
}
function od(e) {
  var o = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && o === 13 && (e = 13))
      : (e = o),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(e) {
  function o(a, c, d, h, g) {
    ((this._reactName = a),
      (this._targetInst = d),
      (this.type = c),
      (this.nativeEvent = h),
      (this.target = g),
      (this.currentTarget = null));
    for (var b in e)
      e.hasOwnProperty(b) && ((a = e[b]), (this[b] = a ? a(h) : h[b]));
    return (
      (this.isDefaultPrevented = (
        h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    );
  }
  return (
    A(o.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault
            ? a.preventDefault()
            : typeof a.returnValue != "unknown" && (a.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation
            ? a.stopPropagation()
            : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    }),
    o
  );
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = rd(sd),
  ud = A({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
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
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yd &&
            (yd && e.type === "mousemove"
              ? ((wd = e.screenX - yd.screenX), (xd = e.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = e)),
          wd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xd;
    },
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jd = rd(Id),
  Kd = A({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
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
    MozPrintableKey: "Unidentified",
  },
  Nd = {
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
    224: "Meta",
  },
  Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pd(e) {
  var o = this.nativeEvent;
  return o.getModifierState ? o.getModifierState(e) : (e = Od[e]) ? !!o[e] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function (e) {
      if (e.key) {
        var o = Md[e.key] || e.key;
        if (o !== "Unidentified") return o;
      }
      return e.type === "keypress"
        ? ((e = od(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Nd[e.keyCode] || "Unidentified"
          : "";
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
    charCode: function (e) {
      return e.type === "keypress" ? od(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? od(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && "CompositionEvent" in window,
  be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be,
  de = ia && (!ae || (be && 8 < be && 11 >= be)),
  ee = String.fromCharCode(32),
  fe = !1;
function ge(e, o) {
  switch (e) {
    case "keyup":
      return $d.indexOf(o.keyCode) !== -1;
    case "keydown":
      return o.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ie = !1;
function je(e, o) {
  switch (e) {
    case "compositionend":
      return he(o);
    case "keypress":
      return o.which !== 32 ? null : ((fe = !0), ee);
    case "textInput":
      return ((e = o.data), e === ee && fe ? null : e);
    default:
      return null;
  }
}
function ke(e, o) {
  if (ie)
    return e === "compositionend" || (!ae && ge(e, o))
      ? ((e = nd()), (md = ld = kd = null), (ie = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
        if (o.char && 1 < o.char.length) return o.char;
        if (o.which) return String.fromCharCode(o.which);
      }
      return null;
    case "compositionend":
      return de && o.locale !== "ko" ? null : o.data;
    default:
      return null;
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
  week: !0,
};
function me(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase();
  return o === "input" ? !!le[e.type] : o === "textarea";
}
function ne(e, o, a, c) {
  (Eb(c),
    (o = oe(o, "onChange")),
    0 < o.length &&
      ((a = new td("onChange", "change", null, a, c)),
      e.push({ event: a, listeners: o })));
}
var pe = null,
  qe = null;
function re(e) {
  se(e, 0);
}
function te(e) {
  var o = ue(e);
  if (Wa(o)) return e;
}
function ve(e, o) {
  if (e === "change") return o;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      (ze.setAttribute("oninput", "return;"),
        (ye = typeof ze.oninput == "function"));
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), (qe = pe = null));
}
function Be(e) {
  if (e.propertyName === "value" && te(qe)) {
    var o = [];
    (ne(o, qe, e, xb(e)), Jb(re, o));
  }
}
function Ce(e, o, a) {
  e === "focusin"
    ? (Ae(), (pe = o), (qe = a), pe.attachEvent("onpropertychange", Be))
    : e === "focusout" && Ae();
}
function De(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return te(qe);
}
function Ee(e, o) {
  if (e === "click") return te(o);
}
function Fe(e, o) {
  if (e === "input" || e === "change") return te(o);
}
function Ge(e, o) {
  return (e === o && (e !== 0 || 1 / e === 1 / o)) || (e !== e && o !== o);
}
var He = typeof Object.is == "function" ? Object.is : Ge;
function Ie(e, o) {
  if (He(e, o)) return !0;
  if (typeof e != "object" || e === null || typeof o != "object" || o === null)
    return !1;
  var a = Object.keys(e),
    c = Object.keys(o);
  if (a.length !== c.length) return !1;
  for (c = 0; c < a.length; c++) {
    var d = a[c];
    if (!ja.call(o, d) || !He(e[d], o[d])) return !1;
  }
  return !0;
}
function Je(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ke(e, o) {
  var a = Je(e);
  e = 0;
  for (var c; a; ) {
    if (a.nodeType === 3) {
      if (((c = e + a.textContent.length), e <= o && c >= o))
        return { node: a, offset: o - e };
      e = c;
    }
    e: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break e;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = Je(a);
  }
}
function Le(e, o) {
  return e && o
    ? e === o
      ? !0
      : e && e.nodeType === 3
        ? !1
        : o && o.nodeType === 3
          ? Le(e, o.parentNode)
          : "contains" in e
            ? e.contains(o)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(o) & 16)
              : !1
    : !1;
}
function Me() {
  for (var e = window, o = Xa(); o instanceof e.HTMLIFrameElement; ) {
    try {
      var a = typeof o.contentWindow.location.href == "string";
    } catch {
      a = !1;
    }
    if (a) e = o.contentWindow;
    else break;
    o = Xa(e.document);
  }
  return o;
}
function Ne(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    o &&
    ((o === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      o === "textarea" ||
      e.contentEditable === "true")
  );
}
function Oe(e) {
  var o = Me(),
    a = e.focusedElem,
    c = e.selectionRange;
  if (
    o !== a &&
    a &&
    a.ownerDocument &&
    Le(a.ownerDocument.documentElement, a)
  ) {
    if (c !== null && Ne(a)) {
      if (
        ((o = c.start),
        (e = c.end),
        e === void 0 && (e = o),
        "selectionStart" in a)
      )
        ((a.selectionStart = o),
          (a.selectionEnd = Math.min(e, a.value.length)));
      else if (
        ((e = ((o = a.ownerDocument || document) && o.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var d = a.textContent.length,
          h = Math.min(c.start, d);
        ((c = c.end === void 0 ? h : Math.min(c.end, d)),
          !e.extend && h > c && ((d = c), (c = h), (h = d)),
          (d = Ke(a, h)));
        var g = Ke(a, c);
        d &&
          g &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== d.node ||
            e.anchorOffset !== d.offset ||
            e.focusNode !== g.node ||
            e.focusOffset !== g.offset) &&
          ((o = o.createRange()),
          o.setStart(d.node, d.offset),
          e.removeAllRanges(),
          h > c
            ? (e.addRange(o), e.extend(g.node, g.offset))
            : (o.setEnd(g.node, g.offset), e.addRange(o)));
      }
    }
    for (o = [], e = a; (e = e.parentNode); )
      e.nodeType === 1 &&
        o.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof a.focus == "function" && a.focus(), a = 0; a < o.length; a++)
      ((e = o[a]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(e, o, a) {
  var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  Te ||
    Qe == null ||
    Qe !== Xa(c) ||
    ((c = Qe),
    "selectionStart" in c && Ne(c)
      ? (c = { start: c.selectionStart, end: c.selectionEnd })
      : ((c = (
          (c.ownerDocument && c.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (c = {
          anchorNode: c.anchorNode,
          anchorOffset: c.anchorOffset,
          focusNode: c.focusNode,
          focusOffset: c.focusOffset,
        })),
    (Se && Ie(Se, c)) ||
      ((Se = c),
      (c = oe(Re, "onSelect")),
      0 < c.length &&
        ((o = new td("onSelect", "select", null, o, a)),
        e.push({ event: o, listeners: c }),
        (o.target = Qe))));
}
function Ve(e, o) {
  var a = {};
  return (
    (a[e.toLowerCase()] = o.toLowerCase()),
    (a["Webkit" + e] = "webkit" + o),
    (a["Moz" + e] = "moz" + o),
    a
  );
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd"),
  },
  Xe = {},
  Ye = {};
ia &&
  ((Ye = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete We.animationend.animation,
    delete We.animationiteration.animation,
    delete We.animationstart.animation),
  "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(e) {
  if (Xe[e]) return Xe[e];
  if (!We[e]) return e;
  var o = We[e],
    a;
  for (a in o) if (o.hasOwnProperty(a) && a in Ye) return (Xe[e] = o[a]);
  return e;
}
var $e = Ze("animationend"),
  af = Ze("animationiteration"),
  bf = Ze("animationstart"),
  cf = Ze("transitionend"),
  df = new Map(),
  ef =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ff(e, o) {
  (df.set(e, o), fa(o, [e]));
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
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
fa(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
fa(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
fa(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
fa(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var lf =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(e, o, a) {
  var c = e.type || "unknown-event";
  ((e.currentTarget = a), Ub(c, o, void 0, e), (e.currentTarget = null));
}
function se(e, o) {
  o = (o & 4) !== 0;
  for (var a = 0; a < e.length; a++) {
    var c = e[a],
      d = c.event;
    c = c.listeners;
    e: {
      var h = void 0;
      if (o)
        for (var g = c.length - 1; 0 <= g; g--) {
          var b = c[g],
            j = b.instance,
            $ = b.currentTarget;
          if (((b = b.listener), j !== h && d.isPropagationStopped())) break e;
          (nf(d, b, $), (h = j));
        }
      else
        for (g = 0; g < c.length; g++) {
          if (
            ((b = c[g]),
            (j = b.instance),
            ($ = b.currentTarget),
            (b = b.listener),
            j !== h && d.isPropagationStopped())
          )
            break e;
          (nf(d, b, $), (h = j));
        }
    }
  }
  if (Qb) throw ((e = Rb), (Qb = !1), (Rb = null), e);
}
function D(e, o) {
  var a = o[of];
  a === void 0 && (a = o[of] = new Set());
  var c = e + "__bubble";
  a.has(c) || (pf(o, e, 2, !1), a.add(c));
}
function qf(e, o, a) {
  var c = 0;
  (o && (c |= 4), pf(a, e, c, o));
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(e) {
  if (!e[rf]) {
    ((e[rf] = !0),
      da.forEach(function (a) {
        a !== "selectionchange" && (mf.has(a) || qf(a, !1, e), qf(a, !0, e));
      }));
    var o = e.nodeType === 9 ? e : e.ownerDocument;
    o === null || o[rf] || ((o[rf] = !0), qf("selectionchange", !1, o));
  }
}
function pf(e, o, a, c) {
  switch (jd(o)) {
    case 1:
      var d = ed;
      break;
    case 4:
      d = gd;
      break;
    default:
      d = fd;
  }
  ((a = d.bind(null, o, a, e)),
    (d = void 0),
    !Lb ||
      (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
      (d = !0),
    c
      ? d !== void 0
        ? e.addEventListener(o, a, { capture: !0, passive: d })
        : e.addEventListener(o, a, !0)
      : d !== void 0
        ? e.addEventListener(o, a, { passive: d })
        : e.addEventListener(o, a, !1));
}
function hd(e, o, a, c, d) {
  var h = c;
  if (!(o & 1) && !(o & 2) && c !== null)
    e: for (;;) {
      if (c === null) return;
      var g = c.tag;
      if (g === 3 || g === 4) {
        var b = c.stateNode.containerInfo;
        if (b === d || (b.nodeType === 8 && b.parentNode === d)) break;
        if (g === 4)
          for (g = c.return; g !== null; ) {
            var j = g.tag;
            if (
              (j === 3 || j === 4) &&
              ((j = g.stateNode.containerInfo),
              j === d || (j.nodeType === 8 && j.parentNode === d))
            )
              return;
            g = g.return;
          }
        for (; b !== null; ) {
          if (((g = Wc(b)), g === null)) return;
          if (((j = g.tag), j === 5 || j === 6)) {
            c = h = g;
            continue e;
          }
          b = b.parentNode;
        }
      }
      c = c.return;
    }
  Jb(function () {
    var $ = h,
      _e = xb(a),
      et = [];
    e: {
      var nt = df.get(e);
      if (nt !== void 0) {
        var ot = td,
          lt = e;
        switch (e) {
          case "keypress":
            if (od(a) === 0) break e;
          case "keydown":
          case "keyup":
            ot = Rd;
            break;
          case "focusin":
            ((lt = "focus"), (ot = Fd));
            break;
          case "focusout":
            ((lt = "blur"), (ot = Fd));
            break;
          case "beforeblur":
          case "afterblur":
            ot = Fd;
            break;
          case "click":
            if (a.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            ot = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            ot = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            ot = Vd;
            break;
          case $e:
          case af:
          case bf:
            ot = Hd;
            break;
          case cf:
            ot = Xd;
            break;
          case "scroll":
            ot = vd;
            break;
          case "wheel":
            ot = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            ot = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            ot = Td;
        }
        var ut = (o & 4) !== 0,
          gt = !ut && e === "scroll",
          it = ut ? (nt !== null ? nt + "Capture" : null) : nt;
        ut = [];
        for (var rt = $, st; rt !== null; ) {
          st = rt;
          var ct = st.stateNode;
          if (
            (st.tag === 5 &&
              ct !== null &&
              ((st = ct),
              it !== null &&
                ((ct = Kb(rt, it)), ct != null && ut.push(tf(rt, ct, st)))),
            gt)
          )
            break;
          rt = rt.return;
        }
        0 < ut.length &&
          ((nt = new ot(nt, lt, null, a, _e)),
          et.push({ event: nt, listeners: ut }));
      }
    }
    if (!(o & 7)) {
      e: {
        if (
          ((nt = e === "mouseover" || e === "pointerover"),
          (ot = e === "mouseout" || e === "pointerout"),
          nt &&
            a !== wb &&
            (lt = a.relatedTarget || a.fromElement) &&
            (Wc(lt) || lt[uf]))
        )
          break e;
        if (
          (ot || nt) &&
          ((nt =
            _e.window === _e
              ? _e
              : (nt = _e.ownerDocument)
                ? nt.defaultView || nt.parentWindow
                : window),
          ot
            ? ((lt = a.relatedTarget || a.toElement),
              (ot = $),
              (lt = lt ? Wc(lt) : null),
              lt !== null &&
                ((gt = Vb(lt)), lt !== gt || (lt.tag !== 5 && lt.tag !== 6)) &&
                (lt = null))
            : ((ot = null), (lt = $)),
          ot !== lt)
        ) {
          if (
            ((ut = Bd),
            (ct = "onMouseLeave"),
            (it = "onMouseEnter"),
            (rt = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((ut = Td),
              (ct = "onPointerLeave"),
              (it = "onPointerEnter"),
              (rt = "pointer")),
            (gt = ot == null ? nt : ue(ot)),
            (st = lt == null ? nt : ue(lt)),
            (nt = new ut(ct, rt + "leave", ot, a, _e)),
            (nt.target = gt),
            (nt.relatedTarget = st),
            (ct = null),
            Wc(_e) === $ &&
              ((ut = new ut(it, rt + "enter", lt, a, _e)),
              (ut.target = st),
              (ut.relatedTarget = gt),
              (ct = ut)),
            (gt = ct),
            ot && lt)
          )
            t: {
              for (ut = ot, it = lt, rt = 0, st = ut; st; st = vf(st)) rt++;
              for (st = 0, ct = it; ct; ct = vf(ct)) st++;
              for (; 0 < rt - st; ) ((ut = vf(ut)), rt--);
              for (; 0 < st - rt; ) ((it = vf(it)), st--);
              for (; rt--; ) {
                if (ut === it || (it !== null && ut === it.alternate)) break t;
                ((ut = vf(ut)), (it = vf(it)));
              }
              ut = null;
            }
          else ut = null;
          (ot !== null && wf(et, nt, ot, ut, !1),
            lt !== null && gt !== null && wf(et, gt, lt, ut, !0));
        }
      }
      e: {
        if (
          ((nt = $ ? ue($) : window),
          (ot = nt.nodeName && nt.nodeName.toLowerCase()),
          ot === "select" || (ot === "input" && nt.type === "file"))
        )
          var ft = ve;
        else if (me(nt))
          if (we) ft = Fe;
          else {
            ft = De;
            var pt = Ce;
          }
        else
          (ot = nt.nodeName) &&
            ot.toLowerCase() === "input" &&
            (nt.type === "checkbox" || nt.type === "radio") &&
            (ft = Ee);
        if (ft && (ft = ft(e, $))) {
          ne(et, ft, a, _e);
          break e;
        }
        (pt && pt(e, nt, $),
          e === "focusout" &&
            (pt = nt._wrapperState) &&
            pt.controlled &&
            nt.type === "number" &&
            cb(nt, "number", nt.value));
      }
      switch (((pt = $ ? ue($) : window), e)) {
        case "focusin":
          (me(pt) || pt.contentEditable === "true") &&
            ((Qe = pt), (Re = $), (Se = null));
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
          ((Te = !1), Ue(et, a, _e));
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(et, a, _e);
      }
      var mt;
      if (ae)
        e: {
          switch (e) {
            case "compositionstart":
              var dt = "onCompositionStart";
              break e;
            case "compositionend":
              dt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              dt = "onCompositionUpdate";
              break e;
          }
          dt = void 0;
        }
      else
        ie
          ? ge(e, a) && (dt = "onCompositionEnd")
          : e === "keydown" && a.keyCode === 229 && (dt = "onCompositionStart");
      (dt &&
        (de &&
          a.locale !== "ko" &&
          (ie || dt !== "onCompositionStart"
            ? dt === "onCompositionEnd" && ie && (mt = nd())
            : ((kd = _e),
              (ld = "value" in kd ? kd.value : kd.textContent),
              (ie = !0))),
        (pt = oe($, dt)),
        0 < pt.length &&
          ((dt = new Ld(dt, e, null, a, _e)),
          et.push({ event: dt, listeners: pt }),
          mt ? (dt.data = mt) : ((mt = he(a)), mt !== null && (dt.data = mt)))),
        (mt = ce ? je(e, a) : ke(e, a)) &&
          (($ = oe($, "onBeforeInput")),
          0 < $.length &&
            ((_e = new Ld("onBeforeInput", "beforeinput", null, a, _e)),
            et.push({ event: _e, listeners: $ }),
            (_e.data = mt))));
    }
    se(et, o);
  });
}
function tf(e, o, a) {
  return { instance: e, listener: o, currentTarget: a };
}
function oe(e, o) {
  for (var a = o + "Capture", c = []; e !== null; ) {
    var d = e,
      h = d.stateNode;
    (d.tag === 5 &&
      h !== null &&
      ((d = h),
      (h = Kb(e, a)),
      h != null && c.unshift(tf(e, h, d)),
      (h = Kb(e, o)),
      h != null && c.push(tf(e, h, d))),
      (e = e.return));
  }
  return c;
}
function vf(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, o, a, c, d) {
  for (var h = o._reactName, g = []; a !== null && a !== c; ) {
    var b = a,
      j = b.alternate,
      $ = b.stateNode;
    if (j !== null && j === c) break;
    (b.tag === 5 &&
      $ !== null &&
      ((b = $),
      d
        ? ((j = Kb(a, h)), j != null && g.unshift(tf(a, j, b)))
        : d || ((j = Kb(a, h)), j != null && g.push(tf(a, j, b)))),
      (a = a.return));
  }
  g.length !== 0 && e.push({ event: o, listeners: g });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xf,
      `
`,
    )
    .replace(yf, "");
}
function Af(e, o, a) {
  if (((o = zf(o)), zf(e) !== o && a)) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(e, o) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof o.children == "string" ||
    typeof o.children == "number" ||
    (typeof o.dangerouslySetInnerHTML == "object" &&
      o.dangerouslySetInnerHTML !== null &&
      o.dangerouslySetInnerHTML.__html != null)
  );
}
var Ff = typeof setTimeout == "function" ? setTimeout : void 0,
  Gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hf = typeof Promise == "function" ? Promise : void 0,
  Jf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hf < "u"
        ? function (e) {
            return Hf.resolve(null).then(e).catch(If);
          }
        : Ff;
function If(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kf(e, o) {
  var a = o,
    c = 0;
  do {
    var d = a.nextSibling;
    if ((e.removeChild(a), d && d.nodeType === 8))
      if (((a = d.data), a === "/$")) {
        if (c === 0) {
          (e.removeChild(d), bd(o));
          return;
        }
        c--;
      } else (a !== "$" && a !== "$?" && a !== "$!") || c++;
    a = d;
  } while (a);
  bd(o);
}
function Lf(e) {
  for (; e != null; e = e.nextSibling) {
    var o = e.nodeType;
    if (o === 1 || o === 3) break;
    if (o === 8) {
      if (((o = e.data), o === "$" || o === "$!" || o === "$?")) break;
      if (o === "/$") return null;
    }
  }
  return e;
}
function Mf(e) {
  e = e.previousSibling;
  for (var o = 0; e; ) {
    if (e.nodeType === 8) {
      var a = e.data;
      if (a === "$" || a === "$!" || a === "$?") {
        if (o === 0) return e;
        o--;
      } else a === "/$" && o++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = "__reactFiber$" + Nf,
  Pf = "__reactProps$" + Nf,
  uf = "__reactContainer$" + Nf,
  of = "__reactEvents$" + Nf,
  Qf = "__reactListeners$" + Nf,
  Rf = "__reactHandles$" + Nf;
function Wc(e) {
  var o = e[Of];
  if (o) return o;
  for (var a = e.parentNode; a; ) {
    if ((o = a[uf] || a[Of])) {
      if (
        ((a = o.alternate),
        o.child !== null || (a !== null && a.child !== null))
      )
        for (e = Mf(e); e !== null; ) {
          if ((a = e[Of])) return a;
          e = Mf(e);
        }
      return o;
    }
    ((e = a), (a = e.parentNode));
  }
  return null;
}
function Cb(e) {
  return (
    (e = e[Of] || e[uf]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ue(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(p(33));
}
function Db(e) {
  return e[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(e) {
  return { current: e };
}
function E(e) {
  0 > Tf || ((e.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
}
function G(e, o) {
  (Tf++, (Sf[Tf] = e.current), (e.current = o));
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(e, o) {
  var a = e.type.contextTypes;
  if (!a) return Vf;
  var c = e.stateNode;
  if (c && c.__reactInternalMemoizedUnmaskedChildContext === o)
    return c.__reactInternalMemoizedMaskedChildContext;
  var d = {},
    h;
  for (h in a) d[h] = o[h];
  return (
    c &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = d)),
    d
  );
}
function Zf(e) {
  return ((e = e.childContextTypes), e != null);
}
function $f() {
  (E(Wf), E(H));
}
function ag(e, o, a) {
  if (H.current !== Vf) throw Error(p(168));
  (G(H, o), G(Wf, a));
}
function bg(e, o, a) {
  var c = e.stateNode;
  if (((o = o.childContextTypes), typeof c.getChildContext != "function"))
    return a;
  c = c.getChildContext();
  for (var d in c) if (!(d in o)) throw Error(p(108, Ra(e) || "Unknown", d));
  return A({}, a, c);
}
function cg(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H.current),
    G(H, e),
    G(Wf, Wf.current),
    !0
  );
}
function dg(e, o, a) {
  var c = e.stateNode;
  if (!c) throw Error(p(169));
  (a
    ? ((e = bg(e, o, Xf)),
      (c.__reactInternalMemoizedMergedChildContext = e),
      E(Wf),
      E(H),
      G(H, e))
    : E(Wf),
    G(Wf, a));
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(e) {
  eg === null ? (eg = [e]) : eg.push(e);
}
function ig(e) {
  ((fg = !0), hg(e));
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var e = 0,
      o = C;
    try {
      var a = eg;
      for (C = 1; e < a.length; e++) {
        var c = a[e];
        do c = c(!0);
        while (c !== null);
      }
      ((eg = null), (fg = !1));
    } catch (d) {
      throw (eg !== null && (eg = eg.slice(e + 1)), ac(fc, jg), d);
    } finally {
      ((C = o), (gg = !1));
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = "";
function tg(e, o) {
  ((kg[lg++] = ng), (kg[lg++] = mg), (mg = e), (ng = o));
}
function ug(e, o, a) {
  ((og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = e));
  var c = rg;
  e = sg;
  var d = 32 - oc(c) - 1;
  ((c &= ~(1 << d)), (a += 1));
  var h = 32 - oc(o) + d;
  if (30 < h) {
    var g = d - (d % 5);
    ((h = (c & ((1 << g) - 1)).toString(32)),
      (c >>= g),
      (d -= g),
      (rg = (1 << (32 - oc(o) + d)) | (a << d) | c),
      (sg = h + e));
  } else ((rg = (1 << h) | (a << d) | c), (sg = e));
}
function vg(e) {
  e.return !== null && (tg(e, 1), ug(e, 1, 0));
}
function wg(e) {
  for (; e === mg; )
    ((mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null));
  for (; e === qg; )
    ((qg = og[--pg]),
      (og[pg] = null),
      (sg = og[--pg]),
      (og[pg] = null),
      (rg = og[--pg]),
      (og[pg] = null));
}
var xg = null,
  yg = null,
  I$1 = !1,
  zg = null;
function Ag(e, o) {
  var a = Bg(5, null, null, 0);
  ((a.elementType = "DELETED"),
    (a.stateNode = o),
    (a.return = e),
    (o = e.deletions),
    o === null ? ((e.deletions = [a]), (e.flags |= 16)) : o.push(a));
}
function Cg(e, o) {
  switch (e.tag) {
    case 5:
      var a = e.type;
      return (
        (o =
          o.nodeType !== 1 || a.toLowerCase() !== o.nodeName.toLowerCase()
            ? null
            : o),
        o !== null
          ? ((e.stateNode = o), (xg = e), (yg = Lf(o.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (o = e.pendingProps === "" || o.nodeType !== 3 ? null : o),
        o !== null ? ((e.stateNode = o), (xg = e), (yg = null), !0) : !1
      );
    case 13:
      return (
        (o = o.nodeType !== 8 ? null : o),
        o !== null
          ? ((a = qg !== null ? { id: rg, overflow: sg } : null),
            (e.memoizedState = {
              dehydrated: o,
              treeContext: a,
              retryLane: 1073741824,
            }),
            (a = Bg(18, null, null, 0)),
            (a.stateNode = o),
            (a.return = e),
            (e.child = a),
            (xg = e),
            (yg = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dg(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eg(e) {
  if (I$1) {
    var o = yg;
    if (o) {
      var a = o;
      if (!Cg(e, o)) {
        if (Dg(e)) throw Error(p(418));
        o = Lf(a.nextSibling);
        var c = xg;
        o && Cg(e, o)
          ? Ag(c, a)
          : ((e.flags = (e.flags & -4097) | 2), (I$1 = !1), (xg = e));
      }
    } else {
      if (Dg(e)) throw Error(p(418));
      ((e.flags = (e.flags & -4097) | 2), (I$1 = !1), (xg = e));
    }
  }
}
function Fg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xg = e;
}
function Gg(e) {
  if (e !== xg) return !1;
  if (!I$1) return (Fg(e), (I$1 = !0), !1);
  var o;
  if (
    ((o = e.tag !== 3) &&
      !(o = e.tag !== 5) &&
      ((o = e.type),
      (o = o !== "head" && o !== "body" && !Ef(e.type, e.memoizedProps))),
    o && (o = yg))
  ) {
    if (Dg(e)) throw (Hg(), Error(p(418)));
    for (; o; ) (Ag(e, o), (o = Lf(o.nextSibling)));
  }
  if ((Fg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(p(317));
    e: {
      for (e = e.nextSibling, o = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === "/$") {
            if (o === 0) {
              yg = Lf(e.nextSibling);
              break e;
            }
            o--;
          } else (a !== "$" && a !== "$!" && a !== "$?") || o++;
        }
        e = e.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(e.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var e = yg; e; ) e = Lf(e.nextSibling);
}
function Ig() {
  ((yg = xg = null), (I$1 = !1));
}
function Jg(e) {
  zg === null ? (zg = [e]) : zg.push(e);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(e, o, a) {
  if (
    ((e = a.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (a._owner) {
      if (((a = a._owner), a)) {
        if (a.tag !== 1) throw Error(p(309));
        var c = a.stateNode;
      }
      if (!c) throw Error(p(147, e));
      var d = c,
        h = "" + e;
      return o !== null &&
        o.ref !== null &&
        typeof o.ref == "function" &&
        o.ref._stringRef === h
        ? o.ref
        : ((o = function (g) {
            var b = d.refs;
            g === null ? delete b[h] : (b[h] = g);
          }),
          (o._stringRef = h),
          o);
    }
    if (typeof e != "string") throw Error(p(284));
    if (!a._owner) throw Error(p(290, e));
  }
  return e;
}
function Mg(e, o) {
  throw (
    (e = Object.prototype.toString.call(o)),
    Error(
      p(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(o).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ng(e) {
  var o = e._init;
  return o(e._payload);
}
function Og(e) {
  function o(it, rt) {
    if (e) {
      var st = it.deletions;
      st === null ? ((it.deletions = [rt]), (it.flags |= 16)) : st.push(rt);
    }
  }
  function a(it, rt) {
    if (!e) return null;
    for (; rt !== null; ) (o(it, rt), (rt = rt.sibling));
    return null;
  }
  function c(it, rt) {
    for (it = new Map(); rt !== null; )
      (rt.key !== null ? it.set(rt.key, rt) : it.set(rt.index, rt),
        (rt = rt.sibling));
    return it;
  }
  function d(it, rt) {
    return ((it = Pg(it, rt)), (it.index = 0), (it.sibling = null), it);
  }
  function h(it, rt, st) {
    return (
      (it.index = st),
      e
        ? ((st = it.alternate),
          st !== null
            ? ((st = st.index), st < rt ? ((it.flags |= 2), rt) : st)
            : ((it.flags |= 2), rt))
        : ((it.flags |= 1048576), rt)
    );
  }
  function g(it) {
    return (e && it.alternate === null && (it.flags |= 2), it);
  }
  function b(it, rt, st, ct) {
    return rt === null || rt.tag !== 6
      ? ((rt = Qg(st, it.mode, ct)), (rt.return = it), rt)
      : ((rt = d(rt, st)), (rt.return = it), rt);
  }
  function j(it, rt, st, ct) {
    var ft = st.type;
    return ft === ya
      ? _e(it, rt, st.props.children, ct, st.key)
      : rt !== null &&
          (rt.elementType === ft ||
            (typeof ft == "object" &&
              ft !== null &&
              ft.$$typeof === Ha &&
              Ng(ft) === rt.type))
        ? ((ct = d(rt, st.props)),
          (ct.ref = Lg(it, rt, st)),
          (ct.return = it),
          ct)
        : ((ct = Rg(st.type, st.key, st.props, null, it.mode, ct)),
          (ct.ref = Lg(it, rt, st)),
          (ct.return = it),
          ct);
  }
  function $(it, rt, st, ct) {
    return rt === null ||
      rt.tag !== 4 ||
      rt.stateNode.containerInfo !== st.containerInfo ||
      rt.stateNode.implementation !== st.implementation
      ? ((rt = Sg(st, it.mode, ct)), (rt.return = it), rt)
      : ((rt = d(rt, st.children || [])), (rt.return = it), rt);
  }
  function _e(it, rt, st, ct, ft) {
    return rt === null || rt.tag !== 7
      ? ((rt = Tg(st, it.mode, ct, ft)), (rt.return = it), rt)
      : ((rt = d(rt, st)), (rt.return = it), rt);
  }
  function et(it, rt, st) {
    if ((typeof rt == "string" && rt !== "") || typeof rt == "number")
      return ((rt = Qg("" + rt, it.mode, st)), (rt.return = it), rt);
    if (typeof rt == "object" && rt !== null) {
      switch (rt.$$typeof) {
        case va:
          return (
            (st = Rg(rt.type, rt.key, rt.props, null, it.mode, st)),
            (st.ref = Lg(it, null, rt)),
            (st.return = it),
            st
          );
        case wa:
          return ((rt = Sg(rt, it.mode, st)), (rt.return = it), rt);
        case Ha:
          var ct = rt._init;
          return et(it, ct(rt._payload), st);
      }
      if (eb(rt) || Ka(rt))
        return ((rt = Tg(rt, it.mode, st, null)), (rt.return = it), rt);
      Mg(it, rt);
    }
    return null;
  }
  function nt(it, rt, st, ct) {
    var ft = rt !== null ? rt.key : null;
    if ((typeof st == "string" && st !== "") || typeof st == "number")
      return ft !== null ? null : b(it, rt, "" + st, ct);
    if (typeof st == "object" && st !== null) {
      switch (st.$$typeof) {
        case va:
          return st.key === ft ? j(it, rt, st, ct) : null;
        case wa:
          return st.key === ft ? $(it, rt, st, ct) : null;
        case Ha:
          return ((ft = st._init), nt(it, rt, ft(st._payload), ct));
      }
      if (eb(st) || Ka(st))
        return ft !== null ? null : _e(it, rt, st, ct, null);
      Mg(it, st);
    }
    return null;
  }
  function ot(it, rt, st, ct, ft) {
    if ((typeof ct == "string" && ct !== "") || typeof ct == "number")
      return ((it = it.get(st) || null), b(rt, it, "" + ct, ft));
    if (typeof ct == "object" && ct !== null) {
      switch (ct.$$typeof) {
        case va:
          return (
            (it = it.get(ct.key === null ? st : ct.key) || null),
            j(rt, it, ct, ft)
          );
        case wa:
          return (
            (it = it.get(ct.key === null ? st : ct.key) || null),
            $(rt, it, ct, ft)
          );
        case Ha:
          var pt = ct._init;
          return ot(it, rt, st, pt(ct._payload), ft);
      }
      if (eb(ct) || Ka(ct))
        return ((it = it.get(st) || null), _e(rt, it, ct, ft, null));
      Mg(rt, ct);
    }
    return null;
  }
  function lt(it, rt, st, ct) {
    for (
      var ft = null, pt = null, mt = rt, dt = (rt = 0), wt = null;
      mt !== null && dt < st.length;
      dt++
    ) {
      mt.index > dt ? ((wt = mt), (mt = null)) : (wt = mt.sibling);
      var bt = nt(it, mt, st[dt], ct);
      if (bt === null) {
        mt === null && (mt = wt);
        break;
      }
      (e && mt && bt.alternate === null && o(it, mt),
        (rt = h(bt, rt, dt)),
        pt === null ? (ft = bt) : (pt.sibling = bt),
        (pt = bt),
        (mt = wt));
    }
    if (dt === st.length) return (a(it, mt), I$1 && tg(it, dt), ft);
    if (mt === null) {
      for (; dt < st.length; dt++)
        ((mt = et(it, st[dt], ct)),
          mt !== null &&
            ((rt = h(mt, rt, dt)),
            pt === null ? (ft = mt) : (pt.sibling = mt),
            (pt = mt)));
      return (I$1 && tg(it, dt), ft);
    }
    for (mt = c(it, mt); dt < st.length; dt++)
      ((wt = ot(mt, it, dt, st[dt], ct)),
        wt !== null &&
          (e &&
            wt.alternate !== null &&
            mt.delete(wt.key === null ? dt : wt.key),
          (rt = h(wt, rt, dt)),
          pt === null ? (ft = wt) : (pt.sibling = wt),
          (pt = wt)));
    return (
      e &&
        mt.forEach(function (Ct) {
          return o(it, Ct);
        }),
      I$1 && tg(it, dt),
      ft
    );
  }
  function ut(it, rt, st, ct) {
    var ft = Ka(st);
    if (typeof ft != "function") throw Error(p(150));
    if (((st = ft.call(st)), st == null)) throw Error(p(151));
    for (
      var pt = (ft = null), mt = rt, dt = (rt = 0), wt = null, bt = st.next();
      mt !== null && !bt.done;
      dt++, bt = st.next()
    ) {
      mt.index > dt ? ((wt = mt), (mt = null)) : (wt = mt.sibling);
      var Ct = nt(it, mt, bt.value, ct);
      if (Ct === null) {
        mt === null && (mt = wt);
        break;
      }
      (e && mt && Ct.alternate === null && o(it, mt),
        (rt = h(Ct, rt, dt)),
        pt === null ? (ft = Ct) : (pt.sibling = Ct),
        (pt = Ct),
        (mt = wt));
    }
    if (bt.done) return (a(it, mt), I$1 && tg(it, dt), ft);
    if (mt === null) {
      for (; !bt.done; dt++, bt = st.next())
        ((bt = et(it, bt.value, ct)),
          bt !== null &&
            ((rt = h(bt, rt, dt)),
            pt === null ? (ft = bt) : (pt.sibling = bt),
            (pt = bt)));
      return (I$1 && tg(it, dt), ft);
    }
    for (mt = c(it, mt); !bt.done; dt++, bt = st.next())
      ((bt = ot(mt, it, dt, bt.value, ct)),
        bt !== null &&
          (e &&
            bt.alternate !== null &&
            mt.delete(bt.key === null ? dt : bt.key),
          (rt = h(bt, rt, dt)),
          pt === null ? (ft = bt) : (pt.sibling = bt),
          (pt = bt)));
    return (
      e &&
        mt.forEach(function (Pt) {
          return o(it, Pt);
        }),
      I$1 && tg(it, dt),
      ft
    );
  }
  function gt(it, rt, st, ct) {
    if (
      (typeof st == "object" &&
        st !== null &&
        st.type === ya &&
        st.key === null &&
        (st = st.props.children),
      typeof st == "object" && st !== null)
    ) {
      switch (st.$$typeof) {
        case va:
          e: {
            for (var ft = st.key, pt = rt; pt !== null; ) {
              if (pt.key === ft) {
                if (((ft = st.type), ft === ya)) {
                  if (pt.tag === 7) {
                    (a(it, pt.sibling),
                      (rt = d(pt, st.props.children)),
                      (rt.return = it),
                      (it = rt));
                    break e;
                  }
                } else if (
                  pt.elementType === ft ||
                  (typeof ft == "object" &&
                    ft !== null &&
                    ft.$$typeof === Ha &&
                    Ng(ft) === pt.type)
                ) {
                  (a(it, pt.sibling),
                    (rt = d(pt, st.props)),
                    (rt.ref = Lg(it, pt, st)),
                    (rt.return = it),
                    (it = rt));
                  break e;
                }
                a(it, pt);
                break;
              } else o(it, pt);
              pt = pt.sibling;
            }
            st.type === ya
              ? ((rt = Tg(st.props.children, it.mode, ct, st.key)),
                (rt.return = it),
                (it = rt))
              : ((ct = Rg(st.type, st.key, st.props, null, it.mode, ct)),
                (ct.ref = Lg(it, rt, st)),
                (ct.return = it),
                (it = ct));
          }
          return g(it);
        case wa:
          e: {
            for (pt = st.key; rt !== null; ) {
              if (rt.key === pt)
                if (
                  rt.tag === 4 &&
                  rt.stateNode.containerInfo === st.containerInfo &&
                  rt.stateNode.implementation === st.implementation
                ) {
                  (a(it, rt.sibling),
                    (rt = d(rt, st.children || [])),
                    (rt.return = it),
                    (it = rt));
                  break e;
                } else {
                  a(it, rt);
                  break;
                }
              else o(it, rt);
              rt = rt.sibling;
            }
            ((rt = Sg(st, it.mode, ct)), (rt.return = it), (it = rt));
          }
          return g(it);
        case Ha:
          return ((pt = st._init), gt(it, rt, pt(st._payload), ct));
      }
      if (eb(st)) return lt(it, rt, st, ct);
      if (Ka(st)) return ut(it, rt, st, ct);
      Mg(it, st);
    }
    return (typeof st == "string" && st !== "") || typeof st == "number"
      ? ((st = "" + st),
        rt !== null && rt.tag === 6
          ? (a(it, rt.sibling), (rt = d(rt, st)), (rt.return = it), (it = rt))
          : (a(it, rt),
            (rt = Qg(st, it.mode, ct)),
            (rt.return = it),
            (it = rt)),
        g(it))
      : a(it, rt);
  }
  return gt;
}
var Ug = Og(!0),
  Vg = Og(!1),
  Wg = Uf(null),
  Xg = null,
  Yg = null,
  Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(e) {
  var o = Wg.current;
  (E(Wg), (e._currentValue = o));
}
function bh(e, o, a) {
  for (; e !== null; ) {
    var c = e.alternate;
    if (
      ((e.childLanes & o) !== o
        ? ((e.childLanes |= o), c !== null && (c.childLanes |= o))
        : c !== null && (c.childLanes & o) !== o && (c.childLanes |= o),
      e === a)
    )
      break;
    e = e.return;
  }
}
function ch(e, o) {
  ((Xg = e),
    (Zg = Yg = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & o && (dh = !0), (e.firstContext = null)));
}
function eh(e) {
  var o = e._currentValue;
  if (Zg !== e)
    if (((e = { context: e, memoizedValue: o, next: null }), Yg === null)) {
      if (Xg === null) throw Error(p(308));
      ((Yg = e), (Xg.dependencies = { lanes: 0, firstContext: e }));
    } else Yg = Yg.next = e;
  return o;
}
var fh = null;
function gh(e) {
  fh === null ? (fh = [e]) : fh.push(e);
}
function hh(e, o, a, c) {
  var d = o.interleaved;
  return (
    d === null ? ((a.next = a), gh(o)) : ((a.next = d.next), (d.next = a)),
    (o.interleaved = a),
    ih(e, c)
  );
}
function ih(e, o) {
  e.lanes |= o;
  var a = e.alternate;
  for (a !== null && (a.lanes |= o), a = e, e = e.return; e !== null; )
    ((e.childLanes |= o),
      (a = e.alternate),
      a !== null && (a.childLanes |= o),
      (a = e),
      (e = e.return));
  return a.tag === 3 ? a.stateNode : null;
}
var jh = !1;
function kh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lh(e, o) {
  ((e = e.updateQueue),
    o.updateQueue === e &&
      (o.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function mh(e, o) {
  return {
    eventTime: e,
    lane: o,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nh(e, o, a) {
  var c = e.updateQueue;
  if (c === null) return null;
  if (((c = c.shared), K & 2)) {
    var d = c.pending;
    return (
      d === null ? (o.next = o) : ((o.next = d.next), (d.next = o)),
      (c.pending = o),
      ih(e, a)
    );
  }
  return (
    (d = c.interleaved),
    d === null ? ((o.next = o), gh(c)) : ((o.next = d.next), (d.next = o)),
    (c.interleaved = o),
    ih(e, a)
  );
}
function oh(e, o, a) {
  if (
    ((o = o.updateQueue), o !== null && ((o = o.shared), (a & 4194240) !== 0))
  ) {
    var c = o.lanes;
    ((c &= e.pendingLanes), (a |= c), (o.lanes = a), Cc(e, a));
  }
}
function ph(e, o) {
  var a = e.updateQueue,
    c = e.alternate;
  if (c !== null && ((c = c.updateQueue), a === c)) {
    var d = null,
      h = null;
    if (((a = a.firstBaseUpdate), a !== null)) {
      do {
        var g = {
          eventTime: a.eventTime,
          lane: a.lane,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        };
        (h === null ? (d = h = g) : (h = h.next = g), (a = a.next));
      } while (a !== null);
      h === null ? (d = h = o) : (h = h.next = o);
    } else d = h = o;
    ((a = {
      baseState: c.baseState,
      firstBaseUpdate: d,
      lastBaseUpdate: h,
      shared: c.shared,
      effects: c.effects,
    }),
      (e.updateQueue = a));
    return;
  }
  ((e = a.lastBaseUpdate),
    e === null ? (a.firstBaseUpdate = o) : (e.next = o),
    (a.lastBaseUpdate = o));
}
function qh(e, o, a, c) {
  var d = e.updateQueue;
  jh = !1;
  var h = d.firstBaseUpdate,
    g = d.lastBaseUpdate,
    b = d.shared.pending;
  if (b !== null) {
    d.shared.pending = null;
    var j = b,
      $ = j.next;
    ((j.next = null), g === null ? (h = $) : (g.next = $), (g = j));
    var _e = e.alternate;
    _e !== null &&
      ((_e = _e.updateQueue),
      (b = _e.lastBaseUpdate),
      b !== g &&
        (b === null ? (_e.firstBaseUpdate = $) : (b.next = $),
        (_e.lastBaseUpdate = j)));
  }
  if (h !== null) {
    var et = d.baseState;
    ((g = 0), (_e = $ = j = null), (b = h));
    do {
      var nt = b.lane,
        ot = b.eventTime;
      if ((c & nt) === nt) {
        _e !== null &&
          (_e = _e.next =
            {
              eventTime: ot,
              lane: 0,
              tag: b.tag,
              payload: b.payload,
              callback: b.callback,
              next: null,
            });
        e: {
          var lt = e,
            ut = b;
          switch (((nt = o), (ot = a), ut.tag)) {
            case 1:
              if (((lt = ut.payload), typeof lt == "function")) {
                et = lt.call(ot, et, nt);
                break e;
              }
              et = lt;
              break e;
            case 3:
              lt.flags = (lt.flags & -65537) | 128;
            case 0:
              if (
                ((lt = ut.payload),
                (nt = typeof lt == "function" ? lt.call(ot, et, nt) : lt),
                nt == null)
              )
                break e;
              et = A({}, et, nt);
              break e;
            case 2:
              jh = !0;
          }
        }
        b.callback !== null &&
          b.lane !== 0 &&
          ((e.flags |= 64),
          (nt = d.effects),
          nt === null ? (d.effects = [b]) : nt.push(b));
      } else
        ((ot = {
          eventTime: ot,
          lane: nt,
          tag: b.tag,
          payload: b.payload,
          callback: b.callback,
          next: null,
        }),
          _e === null ? (($ = _e = ot), (j = et)) : (_e = _e.next = ot),
          (g |= nt));
      if (((b = b.next), b === null)) {
        if (((b = d.shared.pending), b === null)) break;
        ((nt = b),
          (b = nt.next),
          (nt.next = null),
          (d.lastBaseUpdate = nt),
          (d.shared.pending = null));
      }
    } while (1);
    if (
      (_e === null && (j = et),
      (d.baseState = j),
      (d.firstBaseUpdate = $),
      (d.lastBaseUpdate = _e),
      (o = d.shared.interleaved),
      o !== null)
    ) {
      d = o;
      do ((g |= d.lane), (d = d.next));
      while (d !== o);
    } else h === null && (d.shared.lanes = 0);
    ((rh |= g), (e.lanes = g), (e.memoizedState = et));
  }
}
function sh(e, o, a) {
  if (((e = o.effects), (o.effects = null), e !== null))
    for (o = 0; o < e.length; o++) {
      var c = e[o],
        d = c.callback;
      if (d !== null) {
        if (((c.callback = null), (c = a), typeof d != "function"))
          throw Error(p(191, d));
        d.call(c);
      }
    }
}
var th = {},
  uh = Uf(th),
  vh$1 = Uf(th),
  wh = Uf(th);
function xh(e) {
  if (e === th) throw Error(p(174));
  return e;
}
function yh(e, o) {
  switch ((G(wh, o), G(vh$1, e), G(uh, th), (e = o.nodeType), e)) {
    case 9:
    case 11:
      o = (o = o.documentElement) ? o.namespaceURI : lb(null, "");
      break;
    default:
      ((e = e === 8 ? o.parentNode : o),
        (o = e.namespaceURI || null),
        (e = e.tagName),
        (o = lb(o, e)));
  }
  (E(uh), G(uh, o));
}
function zh() {
  (E(uh), E(vh$1), E(wh));
}
function Ah(e) {
  xh(wh.current);
  var o = xh(uh.current),
    a = lb(o, e.type);
  o !== a && (G(vh$1, e), G(uh, a));
}
function Bh(e) {
  vh$1.current === e && (E(uh), E(vh$1));
}
var L = Uf(0);
function Ch(e) {
  for (var o = e; o !== null; ) {
    if (o.tag === 13) {
      var a = o.memoizedState;
      if (
        a !== null &&
        ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
      )
        return o;
    } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
      if (o.flags & 128) return o;
    } else if (o.child !== null) {
      ((o.child.return = o), (o = o.child));
      continue;
    }
    if (o === e) break;
    for (; o.sibling === null; ) {
      if (o.return === null || o.return === e) return null;
      o = o.return;
    }
    ((o.sibling.return = o.return), (o = o.sibling));
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var e = 0; e < Dh.length; e++)
    Dh[e]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher,
  Gh = ua.ReactCurrentBatchConfig,
  Hh = 0,
  M$1 = null,
  N = null,
  O = null,
  Ih = !1,
  Jh = !1,
  Kh = 0,
  Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(e, o) {
  if (o === null) return !1;
  for (var a = 0; a < o.length && a < e.length; a++)
    if (!He(e[a], o[a])) return !1;
  return !0;
}
function Nh(e, o, a, c, d, h) {
  if (
    ((Hh = h),
    (M$1 = o),
    (o.memoizedState = null),
    (o.updateQueue = null),
    (o.lanes = 0),
    (Fh.current = e === null || e.memoizedState === null ? Oh : Ph),
    (e = a(c, d)),
    Jh)
  ) {
    h = 0;
    do {
      if (((Jh = !1), (Kh = 0), 25 <= h)) throw Error(p(301));
      ((h += 1),
        (O = N = null),
        (o.updateQueue = null),
        (Fh.current = Qh),
        (e = a(c, d)));
    } while (Jh);
  }
  if (
    ((Fh.current = Rh),
    (o = N !== null && N.next !== null),
    (Hh = 0),
    (O = N = M$1 = null),
    (Ih = !1),
    o)
  )
    throw Error(p(300));
  return e;
}
function Sh() {
  var e = Kh !== 0;
  return ((Kh = 0), e);
}
function Th() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (O === null ? (M$1.memoizedState = O = e) : (O = O.next = e), O);
}
function Uh() {
  if (N === null) {
    var e = M$1.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = N.next;
  var o = O === null ? M$1.memoizedState : O.next;
  if (o !== null) ((O = o), (N = e));
  else {
    if (e === null) throw Error(p(310));
    ((N = e),
      (e = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        baseQueue: N.baseQueue,
        queue: N.queue,
        next: null,
      }),
      O === null ? (M$1.memoizedState = O = e) : (O = O.next = e));
  }
  return O;
}
function Vh(e, o) {
  return typeof o == "function" ? o(e) : o;
}
function Wh(e) {
  var o = Uh(),
    a = o.queue;
  if (a === null) throw Error(p(311));
  a.lastRenderedReducer = e;
  var c = N,
    d = c.baseQueue,
    h = a.pending;
  if (h !== null) {
    if (d !== null) {
      var g = d.next;
      ((d.next = h.next), (h.next = g));
    }
    ((c.baseQueue = d = h), (a.pending = null));
  }
  if (d !== null) {
    ((h = d.next), (c = c.baseState));
    var b = (g = null),
      j = null,
      $ = h;
    do {
      var _e = $.lane;
      if ((Hh & _e) === _e)
        (j !== null &&
          (j = j.next =
            {
              lane: 0,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null,
            }),
          (c = $.hasEagerState ? $.eagerState : e(c, $.action)));
      else {
        var et = {
          lane: _e,
          action: $.action,
          hasEagerState: $.hasEagerState,
          eagerState: $.eagerState,
          next: null,
        };
        (j === null ? ((b = j = et), (g = c)) : (j = j.next = et),
          (M$1.lanes |= _e),
          (rh |= _e));
      }
      $ = $.next;
    } while ($ !== null && $ !== h);
    (j === null ? (g = c) : (j.next = b),
      He(c, o.memoizedState) || (dh = !0),
      (o.memoizedState = c),
      (o.baseState = g),
      (o.baseQueue = j),
      (a.lastRenderedState = c));
  }
  if (((e = a.interleaved), e !== null)) {
    d = e;
    do ((h = d.lane), (M$1.lanes |= h), (rh |= h), (d = d.next));
    while (d !== e);
  } else d === null && (a.lanes = 0);
  return [o.memoizedState, a.dispatch];
}
function Xh(e) {
  var o = Uh(),
    a = o.queue;
  if (a === null) throw Error(p(311));
  a.lastRenderedReducer = e;
  var c = a.dispatch,
    d = a.pending,
    h = o.memoizedState;
  if (d !== null) {
    a.pending = null;
    var g = (d = d.next);
    do ((h = e(h, g.action)), (g = g.next));
    while (g !== d);
    (He(h, o.memoizedState) || (dh = !0),
      (o.memoizedState = h),
      o.baseQueue === null && (o.baseState = h),
      (a.lastRenderedState = h));
  }
  return [h, c];
}
function Yh() {}
function Zh(e, o) {
  var a = M$1,
    c = Uh(),
    d = o(),
    h = !He(c.memoizedState, d);
  if (
    (h && ((c.memoizedState = d), (dh = !0)),
    (c = c.queue),
    $h(ai.bind(null, a, c, e), [e]),
    c.getSnapshot !== o || h || (O !== null && O.memoizedState.tag & 1))
  ) {
    if (
      ((a.flags |= 2048),
      bi(9, ci.bind(null, a, c, d, o), void 0, null),
      Q$1 === null)
    )
      throw Error(p(349));
    Hh & 30 || di(a, o, d);
  }
  return d;
}
function di(e, o, a) {
  ((e.flags |= 16384),
    (e = { getSnapshot: o, value: a }),
    (o = M$1.updateQueue),
    o === null
      ? ((o = { lastEffect: null, stores: null }),
        (M$1.updateQueue = o),
        (o.stores = [e]))
      : ((a = o.stores), a === null ? (o.stores = [e]) : a.push(e)));
}
function ci(e, o, a, c) {
  ((o.value = a), (o.getSnapshot = c), ei(o) && fi(e));
}
function ai(e, o, a) {
  return a(function () {
    ei(o) && fi(e);
  });
}
function ei(e) {
  var o = e.getSnapshot;
  e = e.value;
  try {
    var a = o();
    return !He(e, a);
  } catch {
    return !0;
  }
}
function fi(e) {
  var o = ih(e, 1);
  o !== null && gi(o, e, 1, -1);
}
function hi(e) {
  var o = Th();
  return (
    typeof e == "function" && (e = e()),
    (o.memoizedState = o.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vh,
      lastRenderedState: e,
    }),
    (o.queue = e),
    (e = e.dispatch = ii.bind(null, M$1, e)),
    [o.memoizedState, e]
  );
}
function bi(e, o, a, c) {
  return (
    (e = { tag: e, create: o, destroy: a, deps: c, next: null }),
    (o = M$1.updateQueue),
    o === null
      ? ((o = { lastEffect: null, stores: null }),
        (M$1.updateQueue = o),
        (o.lastEffect = e.next = e))
      : ((a = o.lastEffect),
        a === null
          ? (o.lastEffect = e.next = e)
          : ((c = a.next), (a.next = e), (e.next = c), (o.lastEffect = e))),
    e
  );
}
function ji() {
  return Uh().memoizedState;
}
function ki(e, o, a, c) {
  var d = Th();
  ((M$1.flags |= e),
    (d.memoizedState = bi(1 | o, a, void 0, c === void 0 ? null : c)));
}
function li(e, o, a, c) {
  var d = Uh();
  c = c === void 0 ? null : c;
  var h = void 0;
  if (N !== null) {
    var g = N.memoizedState;
    if (((h = g.destroy), c !== null && Mh(c, g.deps))) {
      d.memoizedState = bi(o, a, h, c);
      return;
    }
  }
  ((M$1.flags |= e), (d.memoizedState = bi(1 | o, a, h, c)));
}
function mi(e, o) {
  return ki(8390656, 8, e, o);
}
function $h(e, o) {
  return li(2048, 8, e, o);
}
function ni(e, o) {
  return li(4, 2, e, o);
}
function oi(e, o) {
  return li(4, 4, e, o);
}
function pi(e, o) {
  if (typeof o == "function")
    return (
      (e = e()),
      o(e),
      function () {
        o(null);
      }
    );
  if (o != null)
    return (
      (e = e()),
      (o.current = e),
      function () {
        o.current = null;
      }
    );
}
function qi(e, o, a) {
  return (
    (a = a != null ? a.concat([e]) : null),
    li(4, 4, pi.bind(null, o, e), a)
  );
}
function ri() {}
function si(e, o) {
  var a = Uh();
  o = o === void 0 ? null : o;
  var c = a.memoizedState;
  return c !== null && o !== null && Mh(o, c[1])
    ? c[0]
    : ((a.memoizedState = [e, o]), e);
}
function ti(e, o) {
  var a = Uh();
  o = o === void 0 ? null : o;
  var c = a.memoizedState;
  return c !== null && o !== null && Mh(o, c[1])
    ? c[0]
    : ((e = e()), (a.memoizedState = [e, o]), e);
}
function ui(e, o, a) {
  return Hh & 21
    ? (He(a, o) ||
        ((a = yc()), (M$1.lanes |= a), (rh |= a), (e.baseState = !0)),
      o)
    : (e.baseState && ((e.baseState = !1), (dh = !0)), (e.memoizedState = a));
}
function vi(e, o) {
  var a = C;
  ((C = a !== 0 && 4 > a ? a : 4), e(!0));
  var c = Gh.transition;
  Gh.transition = {};
  try {
    (e(!1), o());
  } finally {
    ((C = a), (Gh.transition = c));
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(e, o, a) {
  var c = yi(e);
  if (
    ((a = {
      lane: c,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zi(e))
  )
    Ai(o, a);
  else if (((a = hh(e, o, a, c)), a !== null)) {
    var d = R$1();
    (gi(a, e, c, d), Bi(a, o, c));
  }
}
function ii(e, o, a) {
  var c = yi(e),
    d = { lane: c, action: a, hasEagerState: !1, eagerState: null, next: null };
  if (zi(e)) Ai(o, d);
  else {
    var h = e.alternate;
    if (
      e.lanes === 0 &&
      (h === null || h.lanes === 0) &&
      ((h = o.lastRenderedReducer), h !== null)
    )
      try {
        var g = o.lastRenderedState,
          b = h(g, a);
        if (((d.hasEagerState = !0), (d.eagerState = b), He(b, g))) {
          var j = o.interleaved;
          (j === null
            ? ((d.next = d), gh(o))
            : ((d.next = j.next), (j.next = d)),
            (o.interleaved = d));
          return;
        }
      } catch {
      } finally {
      }
    ((a = hh(e, o, d, c)),
      a !== null && ((d = R$1()), gi(a, e, c, d), Bi(a, o, c)));
  }
}
function zi(e) {
  var o = e.alternate;
  return e === M$1 || (o !== null && o === M$1);
}
function Ai(e, o) {
  Jh = Ih = !0;
  var a = e.pending;
  (a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
    (e.pending = o));
}
function Bi(e, o, a) {
  if (a & 4194240) {
    var c = o.lanes;
    ((c &= e.pendingLanes), (a |= c), (o.lanes = a), Cc(e, a));
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
    unstable_isNewReconciler: !1,
  },
  Oh = {
    readContext: eh,
    useCallback: function (e, o) {
      return ((Th().memoizedState = [e, o === void 0 ? null : o]), e);
    },
    useContext: eh,
    useEffect: mi,
    useImperativeHandle: function (e, o, a) {
      return (
        (a = a != null ? a.concat([e]) : null),
        ki(4194308, 4, pi.bind(null, o, e), a)
      );
    },
    useLayoutEffect: function (e, o) {
      return ki(4194308, 4, e, o);
    },
    useInsertionEffect: function (e, o) {
      return ki(4, 2, e, o);
    },
    useMemo: function (e, o) {
      var a = Th();
      return (
        (o = o === void 0 ? null : o),
        (e = e()),
        (a.memoizedState = [e, o]),
        e
      );
    },
    useReducer: function (e, o, a) {
      var c = Th();
      return (
        (o = a !== void 0 ? a(o) : o),
        (c.memoizedState = c.baseState = o),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o,
        }),
        (c.queue = e),
        (e = e.dispatch = xi.bind(null, M$1, e)),
        [c.memoizedState, e]
      );
    },
    useRef: function (e) {
      var o = Th();
      return ((e = { current: e }), (o.memoizedState = e));
    },
    useState: hi,
    useDebugValue: ri,
    useDeferredValue: function (e) {
      return (Th().memoizedState = e);
    },
    useTransition: function () {
      var e = hi(!1),
        o = e[0];
      return ((e = vi.bind(null, e[1])), (Th().memoizedState = e), [o, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, o, a) {
      var c = M$1,
        d = Th();
      if (I$1) {
        if (a === void 0) throw Error(p(407));
        a = a();
      } else {
        if (((a = o()), Q$1 === null)) throw Error(p(349));
        Hh & 30 || di(c, o, a);
      }
      d.memoizedState = a;
      var h = { value: a, getSnapshot: o };
      return (
        (d.queue = h),
        mi(ai.bind(null, c, h, e), [e]),
        (c.flags |= 2048),
        bi(9, ci.bind(null, c, h, a, o), void 0, null),
        a
      );
    },
    useId: function () {
      var e = Th(),
        o = Q$1.identifierPrefix;
      if (I$1) {
        var a = sg,
          c = rg;
        ((a = (c & ~(1 << (32 - oc(c) - 1))).toString(32) + a),
          (o = ":" + o + "R" + a),
          (a = Kh++),
          0 < a && (o += "H" + a.toString(32)),
          (o += ":"));
      } else ((a = Lh++), (o = ":" + o + "r" + a.toString(32) + ":"));
      return (e.memoizedState = o);
    },
    unstable_isNewReconciler: !1,
  },
  Ph = {
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
    useState: function () {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var o = Uh();
      return ui(o, N.memoizedState, e);
    },
    useTransition: function () {
      var e = Wh(Vh)[0],
        o = Uh().memoizedState;
      return [e, o];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1,
  },
  Qh = {
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
    useState: function () {
      return Xh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var o = Uh();
      return N === null ? (o.memoizedState = e) : ui(o, N.memoizedState, e);
    },
    useTransition: function () {
      var e = Xh(Vh)[0],
        o = Uh().memoizedState;
      return [e, o];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1,
  };
function Ci(e, o) {
  if (e && e.defaultProps) {
    ((o = A({}, o)), (e = e.defaultProps));
    for (var a in e) o[a] === void 0 && (o[a] = e[a]);
    return o;
  }
  return o;
}
function Di(e, o, a, c) {
  ((o = e.memoizedState),
    (a = a(c, o)),
    (a = a == null ? o : A({}, o, a)),
    (e.memoizedState = a),
    e.lanes === 0 && (e.updateQueue.baseState = a));
}
var Ei = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vb(e) === e : !1;
  },
  enqueueSetState: function (e, o, a) {
    e = e._reactInternals;
    var c = R$1(),
      d = yi(e),
      h = mh(c, d);
    ((h.payload = o),
      a != null && (h.callback = a),
      (o = nh(e, h, d)),
      o !== null && (gi(o, e, d, c), oh(o, e, d)));
  },
  enqueueReplaceState: function (e, o, a) {
    e = e._reactInternals;
    var c = R$1(),
      d = yi(e),
      h = mh(c, d);
    ((h.tag = 1),
      (h.payload = o),
      a != null && (h.callback = a),
      (o = nh(e, h, d)),
      o !== null && (gi(o, e, d, c), oh(o, e, d)));
  },
  enqueueForceUpdate: function (e, o) {
    e = e._reactInternals;
    var a = R$1(),
      c = yi(e),
      d = mh(a, c);
    ((d.tag = 2),
      o != null && (d.callback = o),
      (o = nh(e, d, c)),
      o !== null && (gi(o, e, c, a), oh(o, e, c)));
  },
};
function Fi(e, o, a, c, d, h, g) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(c, h, g)
      : o.prototype && o.prototype.isPureReactComponent
        ? !Ie(a, c) || !Ie(d, h)
        : !0
  );
}
function Gi(e, o, a) {
  var c = !1,
    d = Vf,
    h = o.contextType;
  return (
    typeof h == "object" && h !== null
      ? (h = eh(h))
      : ((d = Zf(o) ? Xf : H.current),
        (c = o.contextTypes),
        (h = (c = c != null) ? Yf(e, d) : Vf)),
    (o = new o(a, h)),
    (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
    (o.updater = Ei),
    (e.stateNode = o),
    (o._reactInternals = e),
    c &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = d),
      (e.__reactInternalMemoizedMaskedChildContext = h)),
    o
  );
}
function Hi(e, o, a, c) {
  ((e = o.state),
    typeof o.componentWillReceiveProps == "function" &&
      o.componentWillReceiveProps(a, c),
    typeof o.UNSAFE_componentWillReceiveProps == "function" &&
      o.UNSAFE_componentWillReceiveProps(a, c),
    o.state !== e && Ei.enqueueReplaceState(o, o.state, null));
}
function Ii(e, o, a, c) {
  var d = e.stateNode;
  ((d.props = a), (d.state = e.memoizedState), (d.refs = {}), kh(e));
  var h = o.contextType;
  (typeof h == "object" && h !== null
    ? (d.context = eh(h))
    : ((h = Zf(o) ? Xf : H.current), (d.context = Yf(e, h))),
    (d.state = e.memoizedState),
    (h = o.getDerivedStateFromProps),
    typeof h == "function" && (Di(e, o, h, a), (d.state = e.memoizedState)),
    typeof o.getDerivedStateFromProps == "function" ||
      typeof d.getSnapshotBeforeUpdate == "function" ||
      (typeof d.UNSAFE_componentWillMount != "function" &&
        typeof d.componentWillMount != "function") ||
      ((o = d.state),
      typeof d.componentWillMount == "function" && d.componentWillMount(),
      typeof d.UNSAFE_componentWillMount == "function" &&
        d.UNSAFE_componentWillMount(),
      o !== d.state && Ei.enqueueReplaceState(d, d.state, null),
      qh(e, a, d, c),
      (d.state = e.memoizedState)),
    typeof d.componentDidMount == "function" && (e.flags |= 4194308));
}
function Ji(e, o) {
  try {
    var a = "",
      c = o;
    do ((a += Pa(c)), (c = c.return));
    while (c);
    var d = a;
  } catch (h) {
    d =
      `
Error generating stack: ` +
      h.message +
      `
` +
      h.stack;
  }
  return { value: e, source: o, stack: d, digest: null };
}
function Ki(e, o, a) {
  return { value: e, source: null, stack: a ?? null, digest: o ?? null };
}
function Li(e, o) {
  try {
    console.error(o.value);
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
var Mi = typeof WeakMap == "function" ? WeakMap : Map;
function Ni(e, o, a) {
  ((a = mh(-1, a)), (a.tag = 3), (a.payload = { element: null }));
  var c = o.value;
  return (
    (a.callback = function () {
      (Oi || ((Oi = !0), (Pi = c)), Li(e, o));
    }),
    a
  );
}
function Qi(e, o, a) {
  ((a = mh(-1, a)), (a.tag = 3));
  var c = e.type.getDerivedStateFromError;
  if (typeof c == "function") {
    var d = o.value;
    ((a.payload = function () {
      return c(d);
    }),
      (a.callback = function () {
        Li(e, o);
      }));
  }
  var h = e.stateNode;
  return (
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (a.callback = function () {
        (Li(e, o),
          typeof c != "function" &&
            (Ri === null ? (Ri = new Set([this])) : Ri.add(this)));
        var g = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: g !== null ? g : "",
        });
      }),
    a
  );
}
function Si(e, o, a) {
  var c = e.pingCache;
  if (c === null) {
    c = e.pingCache = new Mi();
    var d = new Set();
    c.set(o, d);
  } else ((d = c.get(o)), d === void 0 && ((d = new Set()), c.set(o, d)));
  d.has(a) || (d.add(a), (e = Ti.bind(null, e, o, a)), o.then(e, e));
}
function Ui(e) {
  do {
    var o;
    if (
      ((o = e.tag === 13) &&
        ((o = e.memoizedState), (o = o !== null ? o.dehydrated !== null : !0)),
      o)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vi(e, o, a, c, d) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = d), e)
    : (e === o
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (a.flags |= 131072),
          (a.flags &= -52805),
          a.tag === 1 &&
            (a.alternate === null
              ? (a.tag = 17)
              : ((o = mh(-1, 1)), (o.tag = 2), nh(a, o, 1))),
          (a.lanes |= 1)),
      e);
}
var Wi = ua.ReactCurrentOwner,
  dh = !1;
function Xi(e, o, a, c) {
  o.child = e === null ? Vg(o, null, a, c) : Ug(o, e.child, a, c);
}
function Yi(e, o, a, c, d) {
  a = a.render;
  var h = o.ref;
  return (
    ch(o, d),
    (c = Nh(e, o, a, c, h, d)),
    (a = Sh()),
    e !== null && !dh
      ? ((o.updateQueue = e.updateQueue),
        (o.flags &= -2053),
        (e.lanes &= ~d),
        Zi(e, o, d))
      : (I$1 && a && vg(o), (o.flags |= 1), Xi(e, o, c, d), o.child)
  );
}
function $i(e, o, a, c, d) {
  if (e === null) {
    var h = a.type;
    return typeof h == "function" &&
      !aj(h) &&
      h.defaultProps === void 0 &&
      a.compare === null &&
      a.defaultProps === void 0
      ? ((o.tag = 15), (o.type = h), bj(e, o, h, c, d))
      : ((e = Rg(a.type, null, c, o, o.mode, d)),
        (e.ref = o.ref),
        (e.return = o),
        (o.child = e));
  }
  if (((h = e.child), !(e.lanes & d))) {
    var g = h.memoizedProps;
    if (
      ((a = a.compare), (a = a !== null ? a : Ie), a(g, c) && e.ref === o.ref)
    )
      return Zi(e, o, d);
  }
  return (
    (o.flags |= 1),
    (e = Pg(h, c)),
    (e.ref = o.ref),
    (e.return = o),
    (o.child = e)
  );
}
function bj(e, o, a, c, d) {
  if (e !== null) {
    var h = e.memoizedProps;
    if (Ie(h, c) && e.ref === o.ref)
      if (((dh = !1), (o.pendingProps = c = h), (e.lanes & d) !== 0))
        e.flags & 131072 && (dh = !0);
      else return ((o.lanes = e.lanes), Zi(e, o, d));
  }
  return cj(e, o, a, c, d);
}
function dj(e, o, a) {
  var c = o.pendingProps,
    d = c.children,
    h = e !== null ? e.memoizedState : null;
  if (c.mode === "hidden")
    if (!(o.mode & 1))
      ((o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(ej, fj),
        (fj |= a));
    else {
      if (!(a & 1073741824))
        return (
          (e = h !== null ? h.baseLanes | a : a),
          (o.lanes = o.childLanes = 1073741824),
          (o.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (o.updateQueue = null),
          G(ej, fj),
          (fj |= e),
          null
        );
      ((o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (c = h !== null ? h.baseLanes : a),
        G(ej, fj),
        (fj |= c));
    }
  else
    (h !== null ? ((c = h.baseLanes | a), (o.memoizedState = null)) : (c = a),
      G(ej, fj),
      (fj |= c));
  return (Xi(e, o, d, a), o.child);
}
function gj(e, o) {
  var a = o.ref;
  ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
    ((o.flags |= 512), (o.flags |= 2097152));
}
function cj(e, o, a, c, d) {
  var h = Zf(a) ? Xf : H.current;
  return (
    (h = Yf(o, h)),
    ch(o, d),
    (a = Nh(e, o, a, c, h, d)),
    (c = Sh()),
    e !== null && !dh
      ? ((o.updateQueue = e.updateQueue),
        (o.flags &= -2053),
        (e.lanes &= ~d),
        Zi(e, o, d))
      : (I$1 && c && vg(o), (o.flags |= 1), Xi(e, o, a, d), o.child)
  );
}
function hj(e, o, a, c, d) {
  if (Zf(a)) {
    var h = !0;
    cg(o);
  } else h = !1;
  if ((ch(o, d), o.stateNode === null))
    (ij(e, o), Gi(o, a, c), Ii(o, a, c, d), (c = !0));
  else if (e === null) {
    var g = o.stateNode,
      b = o.memoizedProps;
    g.props = b;
    var j = g.context,
      $ = a.contextType;
    typeof $ == "object" && $ !== null
      ? ($ = eh($))
      : (($ = Zf(a) ? Xf : H.current), ($ = Yf(o, $)));
    var _e = a.getDerivedStateFromProps,
      et =
        typeof _e == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function";
    (et ||
      (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
        typeof g.componentWillReceiveProps != "function") ||
      ((b !== c || j !== $) && Hi(o, g, c, $)),
      (jh = !1));
    var nt = o.memoizedState;
    ((g.state = nt),
      qh(o, c, g, d),
      (j = o.memoizedState),
      b !== c || nt !== j || Wf.current || jh
        ? (typeof _e == "function" && (Di(o, a, _e, c), (j = o.memoizedState)),
          (b = jh || Fi(o, a, b, c, nt, j, $))
            ? (et ||
                (typeof g.UNSAFE_componentWillMount != "function" &&
                  typeof g.componentWillMount != "function") ||
                (typeof g.componentWillMount == "function" &&
                  g.componentWillMount(),
                typeof g.UNSAFE_componentWillMount == "function" &&
                  g.UNSAFE_componentWillMount()),
              typeof g.componentDidMount == "function" && (o.flags |= 4194308))
            : (typeof g.componentDidMount == "function" && (o.flags |= 4194308),
              (o.memoizedProps = c),
              (o.memoizedState = j)),
          (g.props = c),
          (g.state = j),
          (g.context = $),
          (c = b))
        : (typeof g.componentDidMount == "function" && (o.flags |= 4194308),
          (c = !1)));
  } else {
    ((g = o.stateNode),
      lh(e, o),
      (b = o.memoizedProps),
      ($ = o.type === o.elementType ? b : Ci(o.type, b)),
      (g.props = $),
      (et = o.pendingProps),
      (nt = g.context),
      (j = a.contextType),
      typeof j == "object" && j !== null
        ? (j = eh(j))
        : ((j = Zf(a) ? Xf : H.current), (j = Yf(o, j))));
    var ot = a.getDerivedStateFromProps;
    ((_e =
      typeof ot == "function" ||
      typeof g.getSnapshotBeforeUpdate == "function") ||
      (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
        typeof g.componentWillReceiveProps != "function") ||
      ((b !== et || nt !== j) && Hi(o, g, c, j)),
      (jh = !1),
      (nt = o.memoizedState),
      (g.state = nt),
      qh(o, c, g, d));
    var lt = o.memoizedState;
    b !== et || nt !== lt || Wf.current || jh
      ? (typeof ot == "function" && (Di(o, a, ot, c), (lt = o.memoizedState)),
        ($ = jh || Fi(o, a, $, c, nt, lt, j) || !1)
          ? (_e ||
              (typeof g.UNSAFE_componentWillUpdate != "function" &&
                typeof g.componentWillUpdate != "function") ||
              (typeof g.componentWillUpdate == "function" &&
                g.componentWillUpdate(c, lt, j),
              typeof g.UNSAFE_componentWillUpdate == "function" &&
                g.UNSAFE_componentWillUpdate(c, lt, j)),
            typeof g.componentDidUpdate == "function" && (o.flags |= 4),
            typeof g.getSnapshotBeforeUpdate == "function" && (o.flags |= 1024))
          : (typeof g.componentDidUpdate != "function" ||
              (b === e.memoizedProps && nt === e.memoizedState) ||
              (o.flags |= 4),
            typeof g.getSnapshotBeforeUpdate != "function" ||
              (b === e.memoizedProps && nt === e.memoizedState) ||
              (o.flags |= 1024),
            (o.memoizedProps = c),
            (o.memoizedState = lt)),
        (g.props = c),
        (g.state = lt),
        (g.context = j),
        (c = $))
      : (typeof g.componentDidUpdate != "function" ||
          (b === e.memoizedProps && nt === e.memoizedState) ||
          (o.flags |= 4),
        typeof g.getSnapshotBeforeUpdate != "function" ||
          (b === e.memoizedProps && nt === e.memoizedState) ||
          (o.flags |= 1024),
        (c = !1));
  }
  return jj(e, o, a, c, h, d);
}
function jj(e, o, a, c, d, h) {
  gj(e, o);
  var g = (o.flags & 128) !== 0;
  if (!c && !g) return (d && dg(o, a, !1), Zi(e, o, h));
  ((c = o.stateNode), (Wi.current = o));
  var b =
    g && typeof a.getDerivedStateFromError != "function" ? null : c.render();
  return (
    (o.flags |= 1),
    e !== null && g
      ? ((o.child = Ug(o, e.child, null, h)), (o.child = Ug(o, null, b, h)))
      : Xi(e, o, b, h),
    (o.memoizedState = c.state),
    d && dg(o, a, !0),
    o.child
  );
}
function kj(e) {
  var o = e.stateNode;
  (o.pendingContext
    ? ag(e, o.pendingContext, o.pendingContext !== o.context)
    : o.context && ag(e, o.context, !1),
    yh(e, o.containerInfo));
}
function lj(e, o, a, c, d) {
  return (Ig(), Jg(d), (o.flags |= 256), Xi(e, o, a, c), o.child);
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oj(e, o, a) {
  var c = o.pendingProps,
    d = L.current,
    h = !1,
    g = (o.flags & 128) !== 0,
    b;
  if (
    ((b = g) ||
      (b = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
    b
      ? ((h = !0), (o.flags &= -129))
      : (e === null || e.memoizedState !== null) && (d |= 1),
    G(L, d & 1),
    e === null)
  )
    return (
      Eg(o),
      (e = o.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (o.mode & 1
            ? e.data === "$!"
              ? (o.lanes = 8)
              : (o.lanes = 1073741824)
            : (o.lanes = 1),
          null)
        : ((g = c.children),
          (e = c.fallback),
          h
            ? ((c = o.mode),
              (h = o.child),
              (g = { mode: "hidden", children: g }),
              !(c & 1) && h !== null
                ? ((h.childLanes = 0), (h.pendingProps = g))
                : (h = pj(g, c, 0, null)),
              (e = Tg(e, c, a, null)),
              (h.return = o),
              (e.return = o),
              (h.sibling = e),
              (o.child = h),
              (o.child.memoizedState = nj(a)),
              (o.memoizedState = mj),
              e)
            : qj(o, g))
    );
  if (((d = e.memoizedState), d !== null && ((b = d.dehydrated), b !== null)))
    return rj(e, o, g, c, b, d, a);
  if (h) {
    ((h = c.fallback), (g = o.mode), (d = e.child), (b = d.sibling));
    var j = { mode: "hidden", children: c.children };
    return (
      !(g & 1) && o.child !== d
        ? ((c = o.child),
          (c.childLanes = 0),
          (c.pendingProps = j),
          (o.deletions = null))
        : ((c = Pg(d, j)), (c.subtreeFlags = d.subtreeFlags & 14680064)),
      b !== null ? (h = Pg(b, h)) : ((h = Tg(h, g, a, null)), (h.flags |= 2)),
      (h.return = o),
      (c.return = o),
      (c.sibling = h),
      (o.child = c),
      (c = h),
      (h = o.child),
      (g = e.child.memoizedState),
      (g =
        g === null
          ? nj(a)
          : {
              baseLanes: g.baseLanes | a,
              cachePool: null,
              transitions: g.transitions,
            }),
      (h.memoizedState = g),
      (h.childLanes = e.childLanes & ~a),
      (o.memoizedState = mj),
      c
    );
  }
  return (
    (h = e.child),
    (e = h.sibling),
    (c = Pg(h, { mode: "visible", children: c.children })),
    !(o.mode & 1) && (c.lanes = a),
    (c.return = o),
    (c.sibling = null),
    e !== null &&
      ((a = o.deletions),
      a === null ? ((o.deletions = [e]), (o.flags |= 16)) : a.push(e)),
    (o.child = c),
    (o.memoizedState = null),
    c
  );
}
function qj(e, o) {
  return (
    (o = pj({ mode: "visible", children: o }, e.mode, 0, null)),
    (o.return = e),
    (e.child = o)
  );
}
function sj(e, o, a, c) {
  return (
    c !== null && Jg(c),
    Ug(o, e.child, null, a),
    (e = qj(o, o.pendingProps.children)),
    (e.flags |= 2),
    (o.memoizedState = null),
    e
  );
}
function rj(e, o, a, c, d, h, g) {
  if (a)
    return o.flags & 256
      ? ((o.flags &= -257), (c = Ki(Error(p(422)))), sj(e, o, g, c))
      : o.memoizedState !== null
        ? ((o.child = e.child), (o.flags |= 128), null)
        : ((h = c.fallback),
          (d = o.mode),
          (c = pj({ mode: "visible", children: c.children }, d, 0, null)),
          (h = Tg(h, d, g, null)),
          (h.flags |= 2),
          (c.return = o),
          (h.return = o),
          (c.sibling = h),
          (o.child = c),
          o.mode & 1 && Ug(o, e.child, null, g),
          (o.child.memoizedState = nj(g)),
          (o.memoizedState = mj),
          h);
  if (!(o.mode & 1)) return sj(e, o, g, null);
  if (d.data === "$!") {
    if (((c = d.nextSibling && d.nextSibling.dataset), c)) var b = c.dgst;
    return (
      (c = b),
      (h = Error(p(419))),
      (c = Ki(h, c, void 0)),
      sj(e, o, g, c)
    );
  }
  if (((b = (g & e.childLanes) !== 0), dh || b)) {
    if (((c = Q$1), c !== null)) {
      switch (g & -g) {
        case 4:
          d = 2;
          break;
        case 16:
          d = 8;
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
          d = 32;
          break;
        case 536870912:
          d = 268435456;
          break;
        default:
          d = 0;
      }
      ((d = d & (c.suspendedLanes | g) ? 0 : d),
        d !== 0 &&
          d !== h.retryLane &&
          ((h.retryLane = d), ih(e, d), gi(c, e, d, -1)));
    }
    return (tj(), (c = Ki(Error(p(421)))), sj(e, o, g, c));
  }
  return d.data === "$?"
    ? ((o.flags |= 128),
      (o.child = e.child),
      (o = uj.bind(null, e)),
      (d._reactRetry = o),
      null)
    : ((e = h.treeContext),
      (yg = Lf(d.nextSibling)),
      (xg = o),
      (I$1 = !0),
      (zg = null),
      e !== null &&
        ((og[pg++] = rg),
        (og[pg++] = sg),
        (og[pg++] = qg),
        (rg = e.id),
        (sg = e.overflow),
        (qg = o)),
      (o = qj(o, c.children)),
      (o.flags |= 4096),
      o);
}
function vj(e, o, a) {
  e.lanes |= o;
  var c = e.alternate;
  (c !== null && (c.lanes |= o), bh(e.return, o, a));
}
function wj(e, o, a, c, d) {
  var h = e.memoizedState;
  h === null
    ? (e.memoizedState = {
        isBackwards: o,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: d,
      })
    : ((h.isBackwards = o),
      (h.rendering = null),
      (h.renderingStartTime = 0),
      (h.last = c),
      (h.tail = a),
      (h.tailMode = d));
}
function xj(e, o, a) {
  var c = o.pendingProps,
    d = c.revealOrder,
    h = c.tail;
  if ((Xi(e, o, c.children, a), (c = L.current), c & 2))
    ((c = (c & 1) | 2), (o.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = o.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vj(e, a, o);
        else if (e.tag === 19) vj(e, a, o);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === o) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === o) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    c &= 1;
  }
  if ((G(L, c), !(o.mode & 1))) o.memoizedState = null;
  else
    switch (d) {
      case "forwards":
        for (a = o.child, d = null; a !== null; )
          ((e = a.alternate),
            e !== null && Ch(e) === null && (d = a),
            (a = a.sibling));
        ((a = d),
          a === null
            ? ((d = o.child), (o.child = null))
            : ((d = a.sibling), (a.sibling = null)),
          wj(o, !1, d, a, h));
        break;
      case "backwards":
        for (a = null, d = o.child, o.child = null; d !== null; ) {
          if (((e = d.alternate), e !== null && Ch(e) === null)) {
            o.child = d;
            break;
          }
          ((e = d.sibling), (d.sibling = a), (a = d), (d = e));
        }
        wj(o, !0, a, null, h);
        break;
      case "together":
        wj(o, !1, null, null, void 0);
        break;
      default:
        o.memoizedState = null;
    }
  return o.child;
}
function ij(e, o) {
  !(o.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (o.alternate = null), (o.flags |= 2));
}
function Zi(e, o, a) {
  if (
    (e !== null && (o.dependencies = e.dependencies),
    (rh |= o.lanes),
    !(a & o.childLanes))
  )
    return null;
  if (e !== null && o.child !== e.child) throw Error(p(153));
  if (o.child !== null) {
    for (
      e = o.child, a = Pg(e, e.pendingProps), o.child = a, a.return = o;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (a = a.sibling = Pg(e, e.pendingProps)),
        (a.return = o));
    a.sibling = null;
  }
  return o.child;
}
function yj(e, o, a) {
  switch (o.tag) {
    case 3:
      (kj(o), Ig());
      break;
    case 5:
      Ah(o);
      break;
    case 1:
      Zf(o.type) && cg(o);
      break;
    case 4:
      yh(o, o.stateNode.containerInfo);
      break;
    case 10:
      var c = o.type._context,
        d = o.memoizedProps.value;
      (G(Wg, c._currentValue), (c._currentValue = d));
      break;
    case 13:
      if (((c = o.memoizedState), c !== null))
        return c.dehydrated !== null
          ? (G(L, L.current & 1), (o.flags |= 128), null)
          : a & o.child.childLanes
            ? oj(e, o, a)
            : (G(L, L.current & 1),
              (e = Zi(e, o, a)),
              e !== null ? e.sibling : null);
      G(L, L.current & 1);
      break;
    case 19:
      if (((c = (a & o.childLanes) !== 0), e.flags & 128)) {
        if (c) return xj(e, o, a);
        o.flags |= 128;
      }
      if (
        ((d = o.memoizedState),
        d !== null &&
          ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
        G(L, L.current),
        c)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((o.lanes = 0), dj(e, o, a));
  }
  return Zi(e, o, a);
}
var zj, Aj, Bj, Cj;
zj = function (e, o) {
  for (var a = o.child; a !== null; ) {
    if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
    else if (a.tag !== 4 && a.child !== null) {
      ((a.child.return = a), (a = a.child));
      continue;
    }
    if (a === o) break;
    for (; a.sibling === null; ) {
      if (a.return === null || a.return === o) return;
      a = a.return;
    }
    ((a.sibling.return = a.return), (a = a.sibling));
  }
};
Aj = function () {};
Bj = function (e, o, a, c) {
  var d = e.memoizedProps;
  if (d !== c) {
    ((e = o.stateNode), xh(uh.current));
    var h = null;
    switch (a) {
      case "input":
        ((d = Ya(e, d)), (c = Ya(e, c)), (h = []));
        break;
      case "select":
        ((d = A({}, d, { value: void 0 })),
          (c = A({}, c, { value: void 0 })),
          (h = []));
        break;
      case "textarea":
        ((d = gb(e, d)), (c = gb(e, c)), (h = []));
        break;
      default:
        typeof d.onClick != "function" &&
          typeof c.onClick == "function" &&
          (e.onclick = Bf);
    }
    ub(a, c);
    var g;
    a = null;
    for ($ in d)
      if (!c.hasOwnProperty($) && d.hasOwnProperty($) && d[$] != null)
        if ($ === "style") {
          var b = d[$];
          for (g in b) b.hasOwnProperty(g) && (a || (a = {}), (a[g] = ""));
        } else
          $ !== "dangerouslySetInnerHTML" &&
            $ !== "children" &&
            $ !== "suppressContentEditableWarning" &&
            $ !== "suppressHydrationWarning" &&
            $ !== "autoFocus" &&
            (ea.hasOwnProperty($)
              ? h || (h = [])
              : (h = h || []).push($, null));
    for ($ in c) {
      var j = c[$];
      if (
        ((b = d != null ? d[$] : void 0),
        c.hasOwnProperty($) && j !== b && (j != null || b != null))
      )
        if ($ === "style")
          if (b) {
            for (g in b)
              !b.hasOwnProperty(g) ||
                (j && j.hasOwnProperty(g)) ||
                (a || (a = {}), (a[g] = ""));
            for (g in j)
              j.hasOwnProperty(g) &&
                b[g] !== j[g] &&
                (a || (a = {}), (a[g] = j[g]));
          } else (a || (h || (h = []), h.push($, a)), (a = j));
        else
          $ === "dangerouslySetInnerHTML"
            ? ((j = j ? j.__html : void 0),
              (b = b ? b.__html : void 0),
              j != null && b !== j && (h = h || []).push($, j))
            : $ === "children"
              ? (typeof j != "string" && typeof j != "number") ||
                (h = h || []).push($, "" + j)
              : $ !== "suppressContentEditableWarning" &&
                $ !== "suppressHydrationWarning" &&
                (ea.hasOwnProperty($)
                  ? (j != null && $ === "onScroll" && D("scroll", e),
                    h || b === j || (h = []))
                  : (h = h || []).push($, j));
    }
    a && (h = h || []).push("style", a);
    var $ = h;
    (o.updateQueue = $) && (o.flags |= 4);
  }
};
Cj = function (e, o, a, c) {
  a !== c && (o.flags |= 4);
};
function Dj(e, o) {
  if (!I$1)
    switch (e.tailMode) {
      case "hidden":
        o = e.tail;
        for (var a = null; o !== null; )
          (o.alternate !== null && (a = o), (o = o.sibling));
        a === null ? (e.tail = null) : (a.sibling = null);
        break;
      case "collapsed":
        a = e.tail;
        for (var c = null; a !== null; )
          (a.alternate !== null && (c = a), (a = a.sibling));
        c === null
          ? o || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (c.sibling = null);
    }
}
function S(e) {
  var o = e.alternate !== null && e.alternate.child === e.child,
    a = 0,
    c = 0;
  if (o)
    for (var d = e.child; d !== null; )
      ((a |= d.lanes | d.childLanes),
        (c |= d.subtreeFlags & 14680064),
        (c |= d.flags & 14680064),
        (d.return = e),
        (d = d.sibling));
  else
    for (d = e.child; d !== null; )
      ((a |= d.lanes | d.childLanes),
        (c |= d.subtreeFlags),
        (c |= d.flags),
        (d.return = e),
        (d = d.sibling));
  return ((e.subtreeFlags |= c), (e.childLanes = a), o);
}
function Ej(e, o, a) {
  var c = o.pendingProps;
  switch ((wg(o), o.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (S(o), null);
    case 1:
      return (Zf(o.type) && $f(), S(o), null);
    case 3:
      return (
        (c = o.stateNode),
        zh(),
        E(Wf),
        E(H),
        Eh(),
        c.pendingContext &&
          ((c.context = c.pendingContext), (c.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gg(o)
            ? (o.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(o.flags & 256)) ||
              ((o.flags |= 1024), zg !== null && (Fj(zg), (zg = null)))),
        Aj(e, o),
        S(o),
        null
      );
    case 5:
      Bh(o);
      var d = xh(wh.current);
      if (((a = o.type), e !== null && o.stateNode != null))
        (Bj(e, o, a, c, d),
          e.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152)));
      else {
        if (!c) {
          if (o.stateNode === null) throw Error(p(166));
          return (S(o), null);
        }
        if (((e = xh(uh.current)), Gg(o))) {
          ((c = o.stateNode), (a = o.type));
          var h = o.memoizedProps;
          switch (((c[Of] = o), (c[Pf] = h), (e = (o.mode & 1) !== 0), a)) {
            case "dialog":
              (D("cancel", c), D("close", c));
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", c);
              break;
            case "video":
            case "audio":
              for (d = 0; d < lf.length; d++) D(lf[d], c);
              break;
            case "source":
              D("error", c);
              break;
            case "img":
            case "image":
            case "link":
              (D("error", c), D("load", c));
              break;
            case "details":
              D("toggle", c);
              break;
            case "input":
              (Za(c, h), D("invalid", c));
              break;
            case "select":
              ((c._wrapperState = { wasMultiple: !!h.multiple }),
                D("invalid", c));
              break;
            case "textarea":
              (hb(c, h), D("invalid", c));
          }
          (ub(a, h), (d = null));
          for (var g in h)
            if (h.hasOwnProperty(g)) {
              var b = h[g];
              g === "children"
                ? typeof b == "string"
                  ? c.textContent !== b &&
                    (h.suppressHydrationWarning !== !0 &&
                      Af(c.textContent, b, e),
                    (d = ["children", b]))
                  : typeof b == "number" &&
                    c.textContent !== "" + b &&
                    (h.suppressHydrationWarning !== !0 &&
                      Af(c.textContent, b, e),
                    (d = ["children", "" + b]))
                : ea.hasOwnProperty(g) &&
                  b != null &&
                  g === "onScroll" &&
                  D("scroll", c);
            }
          switch (a) {
            case "input":
              (Va(c), db(c, h, !0));
              break;
            case "textarea":
              (Va(c), jb(c));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof h.onClick == "function" && (c.onclick = Bf);
          }
          ((c = d), (o.updateQueue = c), c !== null && (o.flags |= 4));
        } else {
          ((g = d.nodeType === 9 ? d : d.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kb(a)),
            e === "http://www.w3.org/1999/xhtml"
              ? a === "script"
                ? ((e = g.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof c.is == "string"
                  ? (e = g.createElement(a, { is: c.is }))
                  : ((e = g.createElement(a)),
                    a === "select" &&
                      ((g = e),
                      c.multiple
                        ? (g.multiple = !0)
                        : c.size && (g.size = c.size)))
              : (e = g.createElementNS(e, a)),
            (e[Of] = o),
            (e[Pf] = c),
            zj(e, o, !1, !1),
            (o.stateNode = e));
          e: {
            switch (((g = vb(a, c)), a)) {
              case "dialog":
                (D("cancel", e), D("close", e), (d = c));
                break;
              case "iframe":
              case "object":
              case "embed":
                (D("load", e), (d = c));
                break;
              case "video":
              case "audio":
                for (d = 0; d < lf.length; d++) D(lf[d], e);
                d = c;
                break;
              case "source":
                (D("error", e), (d = c));
                break;
              case "img":
              case "image":
              case "link":
                (D("error", e), D("load", e), (d = c));
                break;
              case "details":
                (D("toggle", e), (d = c));
                break;
              case "input":
                (Za(e, c), (d = Ya(e, c)), D("invalid", e));
                break;
              case "option":
                d = c;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!c.multiple }),
                  (d = A({}, c, { value: void 0 })),
                  D("invalid", e));
                break;
              case "textarea":
                (hb(e, c), (d = gb(e, c)), D("invalid", e));
                break;
              default:
                d = c;
            }
            (ub(a, d), (b = d));
            for (h in b)
              if (b.hasOwnProperty(h)) {
                var j = b[h];
                h === "style"
                  ? sb(e, j)
                  : h === "dangerouslySetInnerHTML"
                    ? ((j = j ? j.__html : void 0), j != null && nb(e, j))
                    : h === "children"
                      ? typeof j == "string"
                        ? (a !== "textarea" || j !== "") && ob(e, j)
                        : typeof j == "number" && ob(e, "" + j)
                      : h !== "suppressContentEditableWarning" &&
                        h !== "suppressHydrationWarning" &&
                        h !== "autoFocus" &&
                        (ea.hasOwnProperty(h)
                          ? j != null && h === "onScroll" && D("scroll", e)
                          : j != null && ta(e, h, j, g));
              }
            switch (a) {
              case "input":
                (Va(e), db(e, c, !1));
                break;
              case "textarea":
                (Va(e), jb(e));
                break;
              case "option":
                c.value != null && e.setAttribute("value", "" + Sa(c.value));
                break;
              case "select":
                ((e.multiple = !!c.multiple),
                  (h = c.value),
                  h != null
                    ? fb(e, !!c.multiple, h, !1)
                    : c.defaultValue != null &&
                      fb(e, !!c.multiple, c.defaultValue, !0));
                break;
              default:
                typeof d.onClick == "function" && (e.onclick = Bf);
            }
            switch (a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
          }
          c && (o.flags |= 4);
        }
        o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
      }
      return (S(o), null);
    case 6:
      if (e && o.stateNode != null) Cj(e, o, e.memoizedProps, c);
      else {
        if (typeof c != "string" && o.stateNode === null) throw Error(p(166));
        if (((a = xh(wh.current)), xh(uh.current), Gg(o))) {
          if (
            ((c = o.stateNode),
            (a = o.memoizedProps),
            (c[Of] = o),
            (h = c.nodeValue !== a) && ((e = xg), e !== null))
          )
            switch (e.tag) {
              case 3:
                Af(c.nodeValue, a, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Af(c.nodeValue, a, (e.mode & 1) !== 0);
            }
          h && (o.flags |= 4);
        } else
          ((c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c)),
            (c[Of] = o),
            (o.stateNode = c));
      }
      return (S(o), null);
    case 13:
      if (
        (E(L),
        (c = o.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I$1 && yg !== null && o.mode & 1 && !(o.flags & 128))
          (Hg(), Ig(), (o.flags |= 98560), (h = !1));
        else if (((h = Gg(o)), c !== null && c.dehydrated !== null)) {
          if (e === null) {
            if (!h) throw Error(p(318));
            if (
              ((h = o.memoizedState),
              (h = h !== null ? h.dehydrated : null),
              !h)
            )
              throw Error(p(317));
            h[Of] = o;
          } else
            (Ig(),
              !(o.flags & 128) && (o.memoizedState = null),
              (o.flags |= 4));
          (S(o), (h = !1));
        } else (zg !== null && (Fj(zg), (zg = null)), (h = !0));
        if (!h) return o.flags & 65536 ? o : null;
      }
      return o.flags & 128
        ? ((o.lanes = a), o)
        : ((c = c !== null),
          c !== (e !== null && e.memoizedState !== null) &&
            c &&
            ((o.child.flags |= 8192),
            o.mode & 1 &&
              (e === null || L.current & 1 ? T === 0 && (T = 3) : tj())),
          o.updateQueue !== null && (o.flags |= 4),
          S(o),
          null);
    case 4:
      return (
        zh(),
        Aj(e, o),
        e === null && sf(o.stateNode.containerInfo),
        S(o),
        null
      );
    case 10:
      return (ah(o.type._context), S(o), null);
    case 17:
      return (Zf(o.type) && $f(), S(o), null);
    case 19:
      if ((E(L), (h = o.memoizedState), h === null)) return (S(o), null);
      if (((c = (o.flags & 128) !== 0), (g = h.rendering), g === null))
        if (c) Dj(h, !1);
        else {
          if (T !== 0 || (e !== null && e.flags & 128))
            for (e = o.child; e !== null; ) {
              if (((g = Ch(e)), g !== null)) {
                for (
                  o.flags |= 128,
                    Dj(h, !1),
                    c = g.updateQueue,
                    c !== null && ((o.updateQueue = c), (o.flags |= 4)),
                    o.subtreeFlags = 0,
                    c = a,
                    a = o.child;
                  a !== null;

                )
                  ((h = a),
                    (e = c),
                    (h.flags &= 14680066),
                    (g = h.alternate),
                    g === null
                      ? ((h.childLanes = 0),
                        (h.lanes = e),
                        (h.child = null),
                        (h.subtreeFlags = 0),
                        (h.memoizedProps = null),
                        (h.memoizedState = null),
                        (h.updateQueue = null),
                        (h.dependencies = null),
                        (h.stateNode = null))
                      : ((h.childLanes = g.childLanes),
                        (h.lanes = g.lanes),
                        (h.child = g.child),
                        (h.subtreeFlags = 0),
                        (h.deletions = null),
                        (h.memoizedProps = g.memoizedProps),
                        (h.memoizedState = g.memoizedState),
                        (h.updateQueue = g.updateQueue),
                        (h.type = g.type),
                        (e = g.dependencies),
                        (h.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (a = a.sibling));
                return (G(L, (L.current & 1) | 2), o.child);
              }
              e = e.sibling;
            }
          h.tail !== null &&
            B() > Gj &&
            ((o.flags |= 128), (c = !0), Dj(h, !1), (o.lanes = 4194304));
        }
      else {
        if (!c)
          if (((e = Ch(g)), e !== null)) {
            if (
              ((o.flags |= 128),
              (c = !0),
              (a = e.updateQueue),
              a !== null && ((o.updateQueue = a), (o.flags |= 4)),
              Dj(h, !0),
              h.tail === null &&
                h.tailMode === "hidden" &&
                !g.alternate &&
                !I$1)
            )
              return (S(o), null);
          } else
            2 * B() - h.renderingStartTime > Gj &&
              a !== 1073741824 &&
              ((o.flags |= 128), (c = !0), Dj(h, !1), (o.lanes = 4194304));
        h.isBackwards
          ? ((g.sibling = o.child), (o.child = g))
          : ((a = h.last),
            a !== null ? (a.sibling = g) : (o.child = g),
            (h.last = g));
      }
      return h.tail !== null
        ? ((o = h.tail),
          (h.rendering = o),
          (h.tail = o.sibling),
          (h.renderingStartTime = B()),
          (o.sibling = null),
          (a = L.current),
          G(L, c ? (a & 1) | 2 : a & 1),
          o)
        : (S(o), null);
    case 22:
    case 23:
      return (
        Hj(),
        (c = o.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== c && (o.flags |= 8192),
        c && o.mode & 1
          ? fj & 1073741824 && (S(o), o.subtreeFlags & 6 && (o.flags |= 8192))
          : S(o),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, o.tag));
}
function Ij(e, o) {
  switch ((wg(o), o.tag)) {
    case 1:
      return (
        Zf(o.type) && $f(),
        (e = o.flags),
        e & 65536 ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 3:
      return (
        zh(),
        E(Wf),
        E(H),
        Eh(),
        (e = o.flags),
        e & 65536 && !(e & 128) ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 5:
      return (Bh(o), null);
    case 13:
      if ((E(L), (e = o.memoizedState), e !== null && e.dehydrated !== null)) {
        if (o.alternate === null) throw Error(p(340));
        Ig();
      }
      return (
        (e = o.flags),
        e & 65536 ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 19:
      return (E(L), null);
    case 4:
      return (zh(), null);
    case 10:
      return (ah(o.type._context), null);
    case 22:
    case 23:
      return (Hj(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = !1,
  U$1 = !1,
  Kj = typeof WeakSet == "function" ? WeakSet : Set,
  V$1 = null;
function Lj(e, o) {
  var a = e.ref;
  if (a !== null)
    if (typeof a == "function")
      try {
        a(null);
      } catch (c) {
        W$1(e, o, c);
      }
    else a.current = null;
}
function Mj(e, o, a) {
  try {
    a();
  } catch (c) {
    W$1(e, o, c);
  }
}
var Nj = !1;
function Oj(e, o) {
  if (((Cf = dd), (e = Me()), Ne(e))) {
    if ("selectionStart" in e)
      var a = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        a = ((a = e.ownerDocument) && a.defaultView) || window;
        var c = a.getSelection && a.getSelection();
        if (c && c.rangeCount !== 0) {
          a = c.anchorNode;
          var d = c.anchorOffset,
            h = c.focusNode;
          c = c.focusOffset;
          try {
            (a.nodeType, h.nodeType);
          } catch {
            a = null;
            break e;
          }
          var g = 0,
            b = -1,
            j = -1,
            $ = 0,
            _e = 0,
            et = e,
            nt = null;
          t: for (;;) {
            for (
              var ot;
              et !== a || (d !== 0 && et.nodeType !== 3) || (b = g + d),
                et !== h || (c !== 0 && et.nodeType !== 3) || (j = g + c),
                et.nodeType === 3 && (g += et.nodeValue.length),
                (ot = et.firstChild) !== null;

            )
              ((nt = et), (et = ot));
            for (;;) {
              if (et === e) break t;
              if (
                (nt === a && ++$ === d && (b = g),
                nt === h && ++_e === c && (j = g),
                (ot = et.nextSibling) !== null)
              )
                break;
              ((et = nt), (nt = et.parentNode));
            }
            et = ot;
          }
          a = b === -1 || j === -1 ? null : { start: b, end: j };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (
    Df = { focusedElem: e, selectionRange: a }, dd = !1, V$1 = o;
    V$1 !== null;

  )
    if (((o = V$1), (e = o.child), (o.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = o), (V$1 = e));
    else
      for (; V$1 !== null; ) {
        o = V$1;
        try {
          var lt = o.alternate;
          if (o.flags & 1024)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (lt !== null) {
                  var ut = lt.memoizedProps,
                    gt = lt.memoizedState,
                    it = o.stateNode,
                    rt = it.getSnapshotBeforeUpdate(
                      o.elementType === o.type ? ut : Ci(o.type, ut),
                      gt,
                    );
                  it.__reactInternalSnapshotBeforeUpdate = rt;
                }
                break;
              case 3:
                var st = o.stateNode.containerInfo;
                st.nodeType === 1
                  ? (st.textContent = "")
                  : st.nodeType === 9 &&
                    st.documentElement &&
                    st.removeChild(st.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (ct) {
          W$1(o, o.return, ct);
        }
        if (((e = o.sibling), e !== null)) {
          ((e.return = o.return), (V$1 = e));
          break;
        }
        V$1 = o.return;
      }
  return ((lt = Nj), (Nj = !1), lt);
}
function Pj(e, o, a) {
  var c = o.updateQueue;
  if (((c = c !== null ? c.lastEffect : null), c !== null)) {
    var d = (c = c.next);
    do {
      if ((d.tag & e) === e) {
        var h = d.destroy;
        ((d.destroy = void 0), h !== void 0 && Mj(o, a, h));
      }
      d = d.next;
    } while (d !== c);
  }
}
function Qj(e, o) {
  if (
    ((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)
  ) {
    var a = (o = o.next);
    do {
      if ((a.tag & e) === e) {
        var c = a.create;
        a.destroy = c();
      }
      a = a.next;
    } while (a !== o);
  }
}
function Rj(e) {
  var o = e.ref;
  if (o !== null) {
    var a = e.stateNode;
    switch (e.tag) {
      case 5:
        e = a;
        break;
      default:
        e = a;
    }
    typeof o == "function" ? o(e) : (o.current = e);
  }
}
function Sj(e) {
  var o = e.alternate;
  (o !== null && ((e.alternate = null), Sj(o)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((o = e.stateNode),
      o !== null &&
        (delete o[Of], delete o[Pf], delete o[of], delete o[Qf], delete o[Rf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Tj(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uj(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tj(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vj(e, o, a) {
  var c = e.tag;
  if (c === 5 || c === 6)
    ((e = e.stateNode),
      o
        ? a.nodeType === 8
          ? a.parentNode.insertBefore(e, o)
          : a.insertBefore(e, o)
        : (a.nodeType === 8
            ? ((o = a.parentNode), o.insertBefore(e, a))
            : ((o = a), o.appendChild(e)),
          (a = a._reactRootContainer),
          a != null || o.onclick !== null || (o.onclick = Bf)));
  else if (c !== 4 && ((e = e.child), e !== null))
    for (Vj(e, o, a), e = e.sibling; e !== null; )
      (Vj(e, o, a), (e = e.sibling));
}
function Wj(e, o, a) {
  var c = e.tag;
  if (c === 5 || c === 6)
    ((e = e.stateNode), o ? a.insertBefore(e, o) : a.appendChild(e));
  else if (c !== 4 && ((e = e.child), e !== null))
    for (Wj(e, o, a), e = e.sibling; e !== null; )
      (Wj(e, o, a), (e = e.sibling));
}
var X$1 = null,
  Xj = !1;
function Yj(e, o, a) {
  for (a = a.child; a !== null; ) (Zj(e, o, a), (a = a.sibling));
}
function Zj(e, o, a) {
  if (lc && typeof lc.onCommitFiberUnmount == "function")
    try {
      lc.onCommitFiberUnmount(kc, a);
    } catch {}
  switch (a.tag) {
    case 5:
      U$1 || Lj(a, o);
    case 6:
      var c = X$1,
        d = Xj;
      ((X$1 = null),
        Yj(e, o, a),
        (X$1 = c),
        (Xj = d),
        X$1 !== null &&
          (Xj
            ? ((e = X$1),
              (a = a.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a))
            : X$1.removeChild(a.stateNode)));
      break;
    case 18:
      X$1 !== null &&
        (Xj
          ? ((e = X$1),
            (a = a.stateNode),
            e.nodeType === 8
              ? Kf(e.parentNode, a)
              : e.nodeType === 1 && Kf(e, a),
            bd(e))
          : Kf(X$1, a.stateNode));
      break;
    case 4:
      ((c = X$1),
        (d = Xj),
        (X$1 = a.stateNode.containerInfo),
        (Xj = !0),
        Yj(e, o, a),
        (X$1 = c),
        (Xj = d));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !U$1 &&
        ((c = a.updateQueue), c !== null && ((c = c.lastEffect), c !== null))
      ) {
        d = c = c.next;
        do {
          var h = d,
            g = h.destroy;
          ((h = h.tag),
            g !== void 0 && (h & 2 || h & 4) && Mj(a, o, g),
            (d = d.next));
        } while (d !== c);
      }
      Yj(e, o, a);
      break;
    case 1:
      if (
        !U$1 &&
        (Lj(a, o),
        (c = a.stateNode),
        typeof c.componentWillUnmount == "function")
      )
        try {
          ((c.props = a.memoizedProps),
            (c.state = a.memoizedState),
            c.componentWillUnmount());
        } catch (b) {
          W$1(a, o, b);
        }
      Yj(e, o, a);
      break;
    case 21:
      Yj(e, o, a);
      break;
    case 22:
      a.mode & 1
        ? ((U$1 = (c = U$1) || a.memoizedState !== null),
          Yj(e, o, a),
          (U$1 = c))
        : Yj(e, o, a);
      break;
    default:
      Yj(e, o, a);
  }
}
function ak(e) {
  var o = e.updateQueue;
  if (o !== null) {
    e.updateQueue = null;
    var a = e.stateNode;
    (a === null && (a = e.stateNode = new Kj()),
      o.forEach(function (c) {
        var d = bk.bind(null, e, c);
        a.has(c) || (a.add(c), c.then(d, d));
      }));
  }
}
function ck(e, o) {
  var a = o.deletions;
  if (a !== null)
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      try {
        var h = e,
          g = o,
          b = g;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              ((X$1 = b.stateNode), (Xj = !1));
              break e;
            case 3:
              ((X$1 = b.stateNode.containerInfo), (Xj = !0));
              break e;
            case 4:
              ((X$1 = b.stateNode.containerInfo), (Xj = !0));
              break e;
          }
          b = b.return;
        }
        if (X$1 === null) throw Error(p(160));
        (Zj(h, g, d), (X$1 = null), (Xj = !1));
        var j = d.alternate;
        (j !== null && (j.return = null), (d.return = null));
      } catch ($) {
        W$1(d, o, $);
      }
    }
  if (o.subtreeFlags & 12854)
    for (o = o.child; o !== null; ) (dk(o, e), (o = o.sibling));
}
function dk(e, o) {
  var a = e.alternate,
    c = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ck(o, e), ek(e), c & 4)) {
        try {
          (Pj(3, e, e.return), Qj(3, e));
        } catch (ut) {
          W$1(e, e.return, ut);
        }
        try {
          Pj(5, e, e.return);
        } catch (ut) {
          W$1(e, e.return, ut);
        }
      }
      break;
    case 1:
      (ck(o, e), ek(e), c & 512 && a !== null && Lj(a, a.return));
      break;
    case 5:
      if (
        (ck(o, e),
        ek(e),
        c & 512 && a !== null && Lj(a, a.return),
        e.flags & 32)
      ) {
        var d = e.stateNode;
        try {
          ob(d, "");
        } catch (ut) {
          W$1(e, e.return, ut);
        }
      }
      if (c & 4 && ((d = e.stateNode), d != null)) {
        var h = e.memoizedProps,
          g = a !== null ? a.memoizedProps : h,
          b = e.type,
          j = e.updateQueue;
        if (((e.updateQueue = null), j !== null))
          try {
            (b === "input" && h.type === "radio" && h.name != null && ab(d, h),
              vb(b, g));
            var $ = vb(b, h);
            for (g = 0; g < j.length; g += 2) {
              var _e = j[g],
                et = j[g + 1];
              _e === "style"
                ? sb(d, et)
                : _e === "dangerouslySetInnerHTML"
                  ? nb(d, et)
                  : _e === "children"
                    ? ob(d, et)
                    : ta(d, _e, et, $);
            }
            switch (b) {
              case "input":
                bb(d, h);
                break;
              case "textarea":
                ib(d, h);
                break;
              case "select":
                var nt = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!h.multiple;
                var ot = h.value;
                ot != null
                  ? fb(d, !!h.multiple, ot, !1)
                  : nt !== !!h.multiple &&
                    (h.defaultValue != null
                      ? fb(d, !!h.multiple, h.defaultValue, !0)
                      : fb(d, !!h.multiple, h.multiple ? [] : "", !1));
            }
            d[Pf] = h;
          } catch (ut) {
            W$1(e, e.return, ut);
          }
      }
      break;
    case 6:
      if ((ck(o, e), ek(e), c & 4)) {
        if (e.stateNode === null) throw Error(p(162));
        ((d = e.stateNode), (h = e.memoizedProps));
        try {
          d.nodeValue = h;
        } catch (ut) {
          W$1(e, e.return, ut);
        }
      }
      break;
    case 3:
      if (
        (ck(o, e), ek(e), c & 4 && a !== null && a.memoizedState.isDehydrated)
      )
        try {
          bd(o.containerInfo);
        } catch (ut) {
          W$1(e, e.return, ut);
        }
      break;
    case 4:
      (ck(o, e), ek(e));
      break;
    case 13:
      (ck(o, e),
        ek(e),
        (d = e.child),
        d.flags & 8192 &&
          ((h = d.memoizedState !== null),
          (d.stateNode.isHidden = h),
          !h ||
            (d.alternate !== null && d.alternate.memoizedState !== null) ||
            (fk = B())),
        c & 4 && ak(e));
      break;
    case 22:
      if (
        ((_e = a !== null && a.memoizedState !== null),
        e.mode & 1 ? ((U$1 = ($ = U$1) || _e), ck(o, e), (U$1 = $)) : ck(o, e),
        ek(e),
        c & 8192)
      ) {
        if (
          (($ = e.memoizedState !== null),
          (e.stateNode.isHidden = $) && !_e && e.mode & 1)
        )
          for (V$1 = e, _e = e.child; _e !== null; ) {
            for (et = V$1 = _e; V$1 !== null; ) {
              switch (((nt = V$1), (ot = nt.child), nt.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, nt, nt.return);
                  break;
                case 1:
                  Lj(nt, nt.return);
                  var lt = nt.stateNode;
                  if (typeof lt.componentWillUnmount == "function") {
                    ((c = nt), (a = nt.return));
                    try {
                      ((o = c),
                        (lt.props = o.memoizedProps),
                        (lt.state = o.memoizedState),
                        lt.componentWillUnmount());
                    } catch (ut) {
                      W$1(c, a, ut);
                    }
                  }
                  break;
                case 5:
                  Lj(nt, nt.return);
                  break;
                case 22:
                  if (nt.memoizedState !== null) {
                    gk(et);
                    continue;
                  }
              }
              ot !== null ? ((ot.return = nt), (V$1 = ot)) : gk(et);
            }
            _e = _e.sibling;
          }
        e: for (_e = null, et = e; ; ) {
          if (et.tag === 5) {
            if (_e === null) {
              _e = et;
              try {
                ((d = et.stateNode),
                  $
                    ? ((h = d.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none"))
                    : ((b = et.stateNode),
                      (j = et.memoizedProps.style),
                      (g =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null),
                      (b.style.display = rb("display", g))));
              } catch (ut) {
                W$1(e, e.return, ut);
              }
            }
          } else if (et.tag === 6) {
            if (_e === null)
              try {
                et.stateNode.nodeValue = $ ? "" : et.memoizedProps;
              } catch (ut) {
                W$1(e, e.return, ut);
              }
          } else if (
            ((et.tag !== 22 && et.tag !== 23) ||
              et.memoizedState === null ||
              et === e) &&
            et.child !== null
          ) {
            ((et.child.return = et), (et = et.child));
            continue;
          }
          if (et === e) break e;
          for (; et.sibling === null; ) {
            if (et.return === null || et.return === e) break e;
            (_e === et && (_e = null), (et = et.return));
          }
          (_e === et && (_e = null),
            (et.sibling.return = et.return),
            (et = et.sibling));
        }
      }
      break;
    case 19:
      (ck(o, e), ek(e), c & 4 && ak(e));
      break;
    case 21:
      break;
    default:
      (ck(o, e), ek(e));
  }
}
function ek(e) {
  var o = e.flags;
  if (o & 2) {
    try {
      e: {
        for (var a = e.return; a !== null; ) {
          if (Tj(a)) {
            var c = a;
            break e;
          }
          a = a.return;
        }
        throw Error(p(160));
      }
      switch (c.tag) {
        case 5:
          var d = c.stateNode;
          c.flags & 32 && (ob(d, ""), (c.flags &= -33));
          var h = Uj(e);
          Wj(e, h, d);
          break;
        case 3:
        case 4:
          var g = c.stateNode.containerInfo,
            b = Uj(e);
          Vj(e, b, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (j) {
      W$1(e, e.return, j);
    }
    e.flags &= -3;
  }
  o & 4096 && (e.flags &= -4097);
}
function hk(e, o, a) {
  ((V$1 = e), ik(e));
}
function ik(e, o, a) {
  for (var c = (e.mode & 1) !== 0; V$1 !== null; ) {
    var d = V$1,
      h = d.child;
    if (d.tag === 22 && c) {
      var g = d.memoizedState !== null || Jj;
      if (!g) {
        var b = d.alternate,
          j = (b !== null && b.memoizedState !== null) || U$1;
        b = Jj;
        var $ = U$1;
        if (((Jj = g), (U$1 = j) && !$))
          for (V$1 = d; V$1 !== null; )
            ((g = V$1),
              (j = g.child),
              g.tag === 22 && g.memoizedState !== null
                ? jk(d)
                : j !== null
                  ? ((j.return = g), (V$1 = j))
                  : jk(d));
        for (; h !== null; ) ((V$1 = h), ik(h), (h = h.sibling));
        ((V$1 = d), (Jj = b), (U$1 = $));
      }
      kk(e);
    } else
      d.subtreeFlags & 8772 && h !== null ? ((h.return = d), (V$1 = h)) : kk(e);
  }
}
function kk(e) {
  for (; V$1 !== null; ) {
    var o = V$1;
    if (o.flags & 8772) {
      var a = o.alternate;
      try {
        if (o.flags & 8772)
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              U$1 || Qj(5, o);
              break;
            case 1:
              var c = o.stateNode;
              if (o.flags & 4 && !U$1)
                if (a === null) c.componentDidMount();
                else {
                  var d =
                    o.elementType === o.type
                      ? a.memoizedProps
                      : Ci(o.type, a.memoizedProps);
                  c.componentDidUpdate(
                    d,
                    a.memoizedState,
                    c.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var h = o.updateQueue;
              h !== null && sh(o, h, c);
              break;
            case 3:
              var g = o.updateQueue;
              if (g !== null) {
                if (((a = null), o.child !== null))
                  switch (o.child.tag) {
                    case 5:
                      a = o.child.stateNode;
                      break;
                    case 1:
                      a = o.child.stateNode;
                  }
                sh(o, g, a);
              }
              break;
            case 5:
              var b = o.stateNode;
              if (a === null && o.flags & 4) {
                a = b;
                var j = o.memoizedProps;
                switch (o.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && a.focus();
                    break;
                  case "img":
                    j.src && (a.src = j.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (o.memoizedState === null) {
                var $ = o.alternate;
                if ($ !== null) {
                  var _e = $.memoizedState;
                  if (_e !== null) {
                    var et = _e.dehydrated;
                    et !== null && bd(et);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U$1 || (o.flags & 512 && Rj(o));
      } catch (nt) {
        W$1(o, o.return, nt);
      }
    }
    if (o === e) {
      V$1 = null;
      break;
    }
    if (((a = o.sibling), a !== null)) {
      ((a.return = o.return), (V$1 = a));
      break;
    }
    V$1 = o.return;
  }
}
function gk(e) {
  for (; V$1 !== null; ) {
    var o = V$1;
    if (o === e) {
      V$1 = null;
      break;
    }
    var a = o.sibling;
    if (a !== null) {
      ((a.return = o.return), (V$1 = a));
      break;
    }
    V$1 = o.return;
  }
}
function jk(e) {
  for (; V$1 !== null; ) {
    var o = V$1;
    try {
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          var a = o.return;
          try {
            Qj(4, o);
          } catch (j) {
            W$1(o, a, j);
          }
          break;
        case 1:
          var c = o.stateNode;
          if (typeof c.componentDidMount == "function") {
            var d = o.return;
            try {
              c.componentDidMount();
            } catch (j) {
              W$1(o, d, j);
            }
          }
          var h = o.return;
          try {
            Rj(o);
          } catch (j) {
            W$1(o, h, j);
          }
          break;
        case 5:
          var g = o.return;
          try {
            Rj(o);
          } catch (j) {
            W$1(o, g, j);
          }
      }
    } catch (j) {
      W$1(o, o.return, j);
    }
    if (o === e) {
      V$1 = null;
      break;
    }
    var b = o.sibling;
    if (b !== null) {
      ((b.return = o.return), (V$1 = b));
      break;
    }
    V$1 = o.return;
  }
}
var lk = Math.ceil,
  mk = ua.ReactCurrentDispatcher,
  nk = ua.ReactCurrentOwner,
  ok = ua.ReactCurrentBatchConfig,
  K = 0,
  Q$1 = null,
  Y$1 = null,
  Z$1 = 0,
  fj = 0,
  ej = Uf(0),
  T = 0,
  pk = null,
  rh = 0,
  qk = 0,
  rk = 0,
  sk = null,
  tk = null,
  fk = 0,
  Gj = 1 / 0,
  uk = null,
  Oi = !1,
  Pi = null,
  Ri = null,
  vk = !1,
  wk = null,
  xk = 0,
  yk = 0,
  zk = null,
  Ak = -1,
  Bk = 0;
function R$1() {
  return K & 6 ? B() : Ak !== -1 ? Ak : (Ak = B());
}
function yi(e) {
  return e.mode & 1
    ? K & 2 && Z$1 !== 0
      ? Z$1 & -Z$1
      : Kg.transition !== null
        ? (Bk === 0 && (Bk = yc()), Bk)
        : ((e = C),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
          e)
    : 1;
}
function gi(e, o, a, c) {
  if (50 < yk) throw ((yk = 0), (zk = null), Error(p(185)));
  (Ac(e, a, c),
    (!(K & 2) || e !== Q$1) &&
      (e === Q$1 && (!(K & 2) && (qk |= a), T === 4 && Ck(e, Z$1)),
      Dk(e, c),
      a === 1 && K === 0 && !(o.mode & 1) && ((Gj = B() + 500), fg && jg())));
}
function Dk(e, o) {
  var a = e.callbackNode;
  wc(e, o);
  var c = uc(e, e === Q$1 ? Z$1 : 0);
  if (c === 0)
    (a !== null && bc(a), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((o = c & -c), e.callbackPriority !== o)) {
    if ((a != null && bc(a), o === 1))
      (e.tag === 0 ? ig(Ek.bind(null, e)) : hg(Ek.bind(null, e)),
        Jf(function () {
          !(K & 6) && jg();
        }),
        (a = null));
    else {
      switch (Dc(c)) {
        case 1:
          a = fc;
          break;
        case 4:
          a = gc;
          break;
        case 16:
          a = hc;
          break;
        case 536870912:
          a = jc;
          break;
        default:
          a = hc;
      }
      a = Fk(a, Gk.bind(null, e));
    }
    ((e.callbackPriority = o), (e.callbackNode = a));
  }
}
function Gk(e, o) {
  if (((Ak = -1), (Bk = 0), K & 6)) throw Error(p(327));
  var a = e.callbackNode;
  if (Hk() && e.callbackNode !== a) return null;
  var c = uc(e, e === Q$1 ? Z$1 : 0);
  if (c === 0) return null;
  if (c & 30 || c & e.expiredLanes || o) o = Ik(e, c);
  else {
    o = c;
    var d = K;
    K |= 2;
    var h = Jk();
    (Q$1 !== e || Z$1 !== o) && ((uk = null), (Gj = B() + 500), Kk(e, o));
    do
      try {
        Lk();
        break;
      } catch (b) {
        Mk(e, b);
      }
    while (1);
    ($g(),
      (mk.current = h),
      (K = d),
      Y$1 !== null ? (o = 0) : ((Q$1 = null), (Z$1 = 0), (o = T)));
  }
  if (o !== 0) {
    if (
      (o === 2 && ((d = xc(e)), d !== 0 && ((c = d), (o = Nk(e, d)))), o === 1)
    )
      throw ((a = pk), Kk(e, 0), Ck(e, c), Dk(e, B()), a);
    if (o === 6) Ck(e, c);
    else {
      if (
        ((d = e.current.alternate),
        !(c & 30) &&
          !Ok(d) &&
          ((o = Ik(e, c)),
          o === 2 && ((h = xc(e)), h !== 0 && ((c = h), (o = Nk(e, h)))),
          o === 1))
      )
        throw ((a = pk), Kk(e, 0), Ck(e, c), Dk(e, B()), a);
      switch (((e.finishedWork = d), (e.finishedLanes = c), o)) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(e, tk, uk);
          break;
        case 3:
          if (
            (Ck(e, c), (c & 130023424) === c && ((o = fk + 500 - B()), 10 < o))
          ) {
            if (uc(e, 0) !== 0) break;
            if (((d = e.suspendedLanes), (d & c) !== c)) {
              (R$1(), (e.pingedLanes |= e.suspendedLanes & d));
              break;
            }
            e.timeoutHandle = Ff(Pk.bind(null, e, tk, uk), o);
            break;
          }
          Pk(e, tk, uk);
          break;
        case 4:
          if ((Ck(e, c), (c & 4194240) === c)) break;
          for (o = e.eventTimes, d = -1; 0 < c; ) {
            var g = 31 - oc(c);
            ((h = 1 << g), (g = o[g]), g > d && (d = g), (c &= ~h));
          }
          if (
            ((c = d),
            (c = B() - c),
            (c =
              (120 > c
                ? 120
                : 480 > c
                  ? 480
                  : 1080 > c
                    ? 1080
                    : 1920 > c
                      ? 1920
                      : 3e3 > c
                        ? 3e3
                        : 4320 > c
                          ? 4320
                          : 1960 * lk(c / 1960)) - c),
            10 < c)
          ) {
            e.timeoutHandle = Ff(Pk.bind(null, e, tk, uk), c);
            break;
          }
          Pk(e, tk, uk);
          break;
        case 5:
          Pk(e, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  return (Dk(e, B()), e.callbackNode === a ? Gk.bind(null, e) : null);
}
function Nk(e, o) {
  var a = sk;
  return (
    e.current.memoizedState.isDehydrated && (Kk(e, o).flags |= 256),
    (e = Ik(e, o)),
    e !== 2 && ((o = tk), (tk = a), o !== null && Fj(o)),
    e
  );
}
function Fj(e) {
  tk === null ? (tk = e) : tk.push.apply(tk, e);
}
function Ok(e) {
  for (var o = e; ; ) {
    if (o.flags & 16384) {
      var a = o.updateQueue;
      if (a !== null && ((a = a.stores), a !== null))
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            h = d.getSnapshot;
          d = d.value;
          try {
            if (!He(h(), d)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((a = o.child), o.subtreeFlags & 16384 && a !== null))
      ((a.return = o), (o = a));
    else {
      if (o === e) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === e) return !0;
        o = o.return;
      }
      ((o.sibling.return = o.return), (o = o.sibling));
    }
  }
  return !0;
}
function Ck(e, o) {
  for (
    o &= ~rk,
      o &= ~qk,
      e.suspendedLanes |= o,
      e.pingedLanes &= ~o,
      e = e.expirationTimes;
    0 < o;

  ) {
    var a = 31 - oc(o),
      c = 1 << a;
    ((e[a] = -1), (o &= ~c));
  }
}
function Ek(e) {
  if (K & 6) throw Error(p(327));
  Hk();
  var o = uc(e, 0);
  if (!(o & 1)) return (Dk(e, B()), null);
  var a = Ik(e, o);
  if (e.tag !== 0 && a === 2) {
    var c = xc(e);
    c !== 0 && ((o = c), (a = Nk(e, c)));
  }
  if (a === 1) throw ((a = pk), Kk(e, 0), Ck(e, o), Dk(e, B()), a);
  if (a === 6) throw Error(p(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = o),
    Pk(e, tk, uk),
    Dk(e, B()),
    null
  );
}
function Qk(e, o) {
  var a = K;
  K |= 1;
  try {
    return e(o);
  } finally {
    ((K = a), K === 0 && ((Gj = B() + 500), fg && jg()));
  }
}
function Rk(e) {
  wk !== null && wk.tag === 0 && !(K & 6) && Hk();
  var o = K;
  K |= 1;
  var a = ok.transition,
    c = C;
  try {
    if (((ok.transition = null), (C = 1), e)) return e();
  } finally {
    ((C = c), (ok.transition = a), (K = o), !(K & 6) && jg());
  }
}
function Hj() {
  ((fj = ej.current), E(ej));
}
function Kk(e, o) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var a = e.timeoutHandle;
  if ((a !== -1 && ((e.timeoutHandle = -1), Gf(a)), Y$1 !== null))
    for (a = Y$1.return; a !== null; ) {
      var c = a;
      switch ((wg(c), c.tag)) {
        case 1:
          ((c = c.type.childContextTypes), c != null && $f());
          break;
        case 3:
          (zh(), E(Wf), E(H), Eh());
          break;
        case 5:
          Bh(c);
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
          ah(c.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      a = a.return;
    }
  if (
    ((Q$1 = e),
    (Y$1 = e = Pg(e.current, null)),
    (Z$1 = fj = o),
    (T = 0),
    (pk = null),
    (rk = qk = rh = 0),
    (tk = sk = null),
    fh !== null)
  ) {
    for (o = 0; o < fh.length; o++)
      if (((a = fh[o]), (c = a.interleaved), c !== null)) {
        a.interleaved = null;
        var d = c.next,
          h = a.pending;
        if (h !== null) {
          var g = h.next;
          ((h.next = d), (c.next = g));
        }
        a.pending = c;
      }
    fh = null;
  }
  return e;
}
function Mk(e, o) {
  do {
    var a = Y$1;
    try {
      if (($g(), (Fh.current = Rh), Ih)) {
        for (var c = M$1.memoizedState; c !== null; ) {
          var d = c.queue;
          (d !== null && (d.pending = null), (c = c.next));
        }
        Ih = !1;
      }
      if (
        ((Hh = 0),
        (O = N = M$1 = null),
        (Jh = !1),
        (Kh = 0),
        (nk.current = null),
        a === null || a.return === null)
      ) {
        ((T = 1), (pk = o), (Y$1 = null));
        break;
      }
      e: {
        var h = e,
          g = a.return,
          b = a,
          j = o;
        if (
          ((o = Z$1),
          (b.flags |= 32768),
          j !== null && typeof j == "object" && typeof j.then == "function")
        ) {
          var $ = j,
            _e = b,
            et = _e.tag;
          if (!(_e.mode & 1) && (et === 0 || et === 11 || et === 15)) {
            var nt = _e.alternate;
            nt
              ? ((_e.updateQueue = nt.updateQueue),
                (_e.memoizedState = nt.memoizedState),
                (_e.lanes = nt.lanes))
              : ((_e.updateQueue = null), (_e.memoizedState = null));
          }
          var ot = Ui(g);
          if (ot !== null) {
            ((ot.flags &= -257),
              Vi(ot, g, b, h, o),
              ot.mode & 1 && Si(h, $, o),
              (o = ot),
              (j = $));
            var lt = o.updateQueue;
            if (lt === null) {
              var ut = new Set();
              (ut.add(j), (o.updateQueue = ut));
            } else lt.add(j);
            break e;
          } else {
            if (!(o & 1)) {
              (Si(h, $, o), tj());
              break e;
            }
            j = Error(p(426));
          }
        } else if (I$1 && b.mode & 1) {
          var gt = Ui(g);
          if (gt !== null) {
            (!(gt.flags & 65536) && (gt.flags |= 256),
              Vi(gt, g, b, h, o),
              Jg(Ji(j, b)));
            break e;
          }
        }
        ((h = j = Ji(j, b)),
          T !== 4 && (T = 2),
          sk === null ? (sk = [h]) : sk.push(h),
          (h = g));
        do {
          switch (h.tag) {
            case 3:
              ((h.flags |= 65536), (o &= -o), (h.lanes |= o));
              var it = Ni(h, j, o);
              ph(h, it);
              break e;
            case 1:
              b = j;
              var rt = h.type,
                st = h.stateNode;
              if (
                !(h.flags & 128) &&
                (typeof rt.getDerivedStateFromError == "function" ||
                  (st !== null &&
                    typeof st.componentDidCatch == "function" &&
                    (Ri === null || !Ri.has(st))))
              ) {
                ((h.flags |= 65536), (o &= -o), (h.lanes |= o));
                var ct = Qi(h, b, o);
                ph(h, ct);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      Sk(a);
    } catch (ft) {
      ((o = ft), Y$1 === a && a !== null && (Y$1 = a = a.return));
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var e = mk.current;
  return ((mk.current = Rh), e === null ? Rh : e);
}
function tj() {
  ((T === 0 || T === 3 || T === 2) && (T = 4),
    Q$1 === null || (!(rh & 268435455) && !(qk & 268435455)) || Ck(Q$1, Z$1));
}
function Ik(e, o) {
  var a = K;
  K |= 2;
  var c = Jk();
  (Q$1 !== e || Z$1 !== o) && ((uk = null), Kk(e, o));
  do
    try {
      Tk();
      break;
    } catch (d) {
      Mk(e, d);
    }
  while (1);
  if (($g(), (K = a), (mk.current = c), Y$1 !== null)) throw Error(p(261));
  return ((Q$1 = null), (Z$1 = 0), T);
}
function Tk() {
  for (; Y$1 !== null; ) Uk(Y$1);
}
function Lk() {
  for (; Y$1 !== null && !cc(); ) Uk(Y$1);
}
function Uk(e) {
  var o = Vk(e.alternate, e, fj);
  ((e.memoizedProps = e.pendingProps),
    o === null ? Sk(e) : (Y$1 = o),
    (nk.current = null));
}
function Sk(e) {
  var o = e;
  do {
    var a = o.alternate;
    if (((e = o.return), o.flags & 32768)) {
      if (((a = Ij(a, o)), a !== null)) {
        ((a.flags &= 32767), (Y$1 = a));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((T = 6), (Y$1 = null));
        return;
      }
    } else if (((a = Ej(a, o, fj)), a !== null)) {
      Y$1 = a;
      return;
    }
    if (((o = o.sibling), o !== null)) {
      Y$1 = o;
      return;
    }
    Y$1 = o = e;
  } while (o !== null);
  T === 0 && (T = 5);
}
function Pk(e, o, a) {
  var c = C,
    d = ok.transition;
  try {
    ((ok.transition = null), (C = 1), Wk(e, o, a, c));
  } finally {
    ((ok.transition = d), (C = c));
  }
  return null;
}
function Wk(e, o, a, c) {
  do Hk();
  while (wk !== null);
  if (K & 6) throw Error(p(327));
  a = e.finishedWork;
  var d = e.finishedLanes;
  if (a === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), a === e.current))
    throw Error(p(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var h = a.lanes | a.childLanes;
  if (
    (Bc(e, h),
    e === Q$1 && ((Y$1 = Q$1 = null), (Z$1 = 0)),
    (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
      vk ||
      ((vk = !0),
      Fk(hc, function () {
        return (Hk(), null);
      })),
    (h = (a.flags & 15990) !== 0),
    a.subtreeFlags & 15990 || h)
  ) {
    ((h = ok.transition), (ok.transition = null));
    var g = C;
    C = 1;
    var b = K;
    ((K |= 4),
      (nk.current = null),
      Oj(e, a),
      dk(a, e),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      (e.current = a),
      hk(a),
      dc(),
      (K = b),
      (C = g),
      (ok.transition = h));
  } else e.current = a;
  if (
    (vk && ((vk = !1), (wk = e), (xk = d)),
    (h = e.pendingLanes),
    h === 0 && (Ri = null),
    mc(a.stateNode),
    Dk(e, B()),
    o !== null)
  )
    for (c = e.onRecoverableError, a = 0; a < o.length; a++)
      ((d = o[a]), c(d.value, { componentStack: d.stack, digest: d.digest }));
  if (Oi) throw ((Oi = !1), (e = Pi), (Pi = null), e);
  return (
    xk & 1 && e.tag !== 0 && Hk(),
    (h = e.pendingLanes),
    h & 1 ? (e === zk ? yk++ : ((yk = 0), (zk = e))) : (yk = 0),
    jg(),
    null
  );
}
function Hk() {
  if (wk !== null) {
    var e = Dc(xk),
      o = ok.transition,
      a = C;
    try {
      if (((ok.transition = null), (C = 16 > e ? 16 : e), wk === null))
        var c = !1;
      else {
        if (((e = wk), (wk = null), (xk = 0), K & 6)) throw Error(p(331));
        var d = K;
        for (K |= 4, V$1 = e.current; V$1 !== null; ) {
          var h = V$1,
            g = h.child;
          if (V$1.flags & 16) {
            var b = h.deletions;
            if (b !== null) {
              for (var j = 0; j < b.length; j++) {
                var $ = b[j];
                for (V$1 = $; V$1 !== null; ) {
                  var _e = V$1;
                  switch (_e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, _e, h);
                  }
                  var et = _e.child;
                  if (et !== null) ((et.return = _e), (V$1 = et));
                  else
                    for (; V$1 !== null; ) {
                      _e = V$1;
                      var nt = _e.sibling,
                        ot = _e.return;
                      if ((Sj(_e), _e === $)) {
                        V$1 = null;
                        break;
                      }
                      if (nt !== null) {
                        ((nt.return = ot), (V$1 = nt));
                        break;
                      }
                      V$1 = ot;
                    }
                }
              }
              var lt = h.alternate;
              if (lt !== null) {
                var ut = lt.child;
                if (ut !== null) {
                  lt.child = null;
                  do {
                    var gt = ut.sibling;
                    ((ut.sibling = null), (ut = gt));
                  } while (ut !== null);
                }
              }
              V$1 = h;
            }
          }
          if (h.subtreeFlags & 2064 && g !== null) ((g.return = h), (V$1 = g));
          else
            e: for (; V$1 !== null; ) {
              if (((h = V$1), h.flags & 2048))
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, h, h.return);
                }
              var it = h.sibling;
              if (it !== null) {
                ((it.return = h.return), (V$1 = it));
                break e;
              }
              V$1 = h.return;
            }
        }
        var rt = e.current;
        for (V$1 = rt; V$1 !== null; ) {
          g = V$1;
          var st = g.child;
          if (g.subtreeFlags & 2064 && st !== null)
            ((st.return = g), (V$1 = st));
          else
            e: for (g = rt; V$1 !== null; ) {
              if (((b = V$1), b.flags & 2048))
                try {
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, b);
                  }
                } catch (ft) {
                  W$1(b, b.return, ft);
                }
              if (b === g) {
                V$1 = null;
                break e;
              }
              var ct = b.sibling;
              if (ct !== null) {
                ((ct.return = b.return), (V$1 = ct));
                break e;
              }
              V$1 = b.return;
            }
        }
        if (
          ((K = d), jg(), lc && typeof lc.onPostCommitFiberRoot == "function")
        )
          try {
            lc.onPostCommitFiberRoot(kc, e);
          } catch {}
        c = !0;
      }
      return c;
    } finally {
      ((C = a), (ok.transition = o));
    }
  }
  return !1;
}
function Xk(e, o, a) {
  ((o = Ji(a, o)),
    (o = Ni(e, o, 1)),
    (e = nh(e, o, 1)),
    (o = R$1()),
    e !== null && (Ac(e, 1, o), Dk(e, o)));
}
function W$1(e, o, a) {
  if (e.tag === 3) Xk(e, e, a);
  else
    for (; o !== null; ) {
      if (o.tag === 3) {
        Xk(o, e, a);
        break;
      } else if (o.tag === 1) {
        var c = o.stateNode;
        if (
          typeof o.type.getDerivedStateFromError == "function" ||
          (typeof c.componentDidCatch == "function" &&
            (Ri === null || !Ri.has(c)))
        ) {
          ((e = Ji(a, e)),
            (e = Qi(o, e, 1)),
            (o = nh(o, e, 1)),
            (e = R$1()),
            o !== null && (Ac(o, 1, e), Dk(o, e)));
          break;
        }
      }
      o = o.return;
    }
}
function Ti(e, o, a) {
  var c = e.pingCache;
  (c !== null && c.delete(o),
    (o = R$1()),
    (e.pingedLanes |= e.suspendedLanes & a),
    Q$1 === e &&
      (Z$1 & a) === a &&
      (T === 4 || (T === 3 && (Z$1 & 130023424) === Z$1 && 500 > B() - fk)
        ? Kk(e, 0)
        : (rk |= a)),
    Dk(e, o));
}
function Yk(e, o) {
  o === 0 &&
    (e.mode & 1
      ? ((o = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304))
      : (o = 1));
  var a = R$1();
  ((e = ih(e, o)), e !== null && (Ac(e, o, a), Dk(e, a)));
}
function uj(e) {
  var o = e.memoizedState,
    a = 0;
  (o !== null && (a = o.retryLane), Yk(e, a));
}
function bk(e, o) {
  var a = 0;
  switch (e.tag) {
    case 13:
      var c = e.stateNode,
        d = e.memoizedState;
      d !== null && (a = d.retryLane);
      break;
    case 19:
      c = e.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  (c !== null && c.delete(o), Yk(e, a));
}
var Vk;
Vk = function (e, o, a) {
  if (e !== null)
    if (e.memoizedProps !== o.pendingProps || Wf.current) dh = !0;
    else {
      if (!(e.lanes & a) && !(o.flags & 128)) return ((dh = !1), yj(e, o, a));
      dh = !!(e.flags & 131072);
    }
  else ((dh = !1), I$1 && o.flags & 1048576 && ug(o, ng, o.index));
  switch (((o.lanes = 0), o.tag)) {
    case 2:
      var c = o.type;
      (ij(e, o), (e = o.pendingProps));
      var d = Yf(o, H.current);
      (ch(o, a), (d = Nh(null, o, c, e, d, a)));
      var h = Sh();
      return (
        (o.flags |= 1),
        typeof d == "object" &&
        d !== null &&
        typeof d.render == "function" &&
        d.$$typeof === void 0
          ? ((o.tag = 1),
            (o.memoizedState = null),
            (o.updateQueue = null),
            Zf(c) ? ((h = !0), cg(o)) : (h = !1),
            (o.memoizedState =
              d.state !== null && d.state !== void 0 ? d.state : null),
            kh(o),
            (d.updater = Ei),
            (o.stateNode = d),
            (d._reactInternals = o),
            Ii(o, c, e, a),
            (o = jj(null, o, c, !0, h, a)))
          : ((o.tag = 0), I$1 && h && vg(o), Xi(null, o, d, a), (o = o.child)),
        o
      );
    case 16:
      c = o.elementType;
      e: {
        switch (
          (ij(e, o),
          (e = o.pendingProps),
          (d = c._init),
          (c = d(c._payload)),
          (o.type = c),
          (d = o.tag = Zk(c)),
          (e = Ci(c, e)),
          d)
        ) {
          case 0:
            o = cj(null, o, c, e, a);
            break e;
          case 1:
            o = hj(null, o, c, e, a);
            break e;
          case 11:
            o = Yi(null, o, c, e, a);
            break e;
          case 14:
            o = $i(null, o, c, Ci(c.type, e), a);
            break e;
        }
        throw Error(p(306, c, ""));
      }
      return o;
    case 0:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Ci(c, d)),
        cj(e, o, c, d, a)
      );
    case 1:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Ci(c, d)),
        hj(e, o, c, d, a)
      );
    case 3:
      e: {
        if ((kj(o), e === null)) throw Error(p(387));
        ((c = o.pendingProps),
          (h = o.memoizedState),
          (d = h.element),
          lh(e, o),
          qh(o, c, null, a));
        var g = o.memoizedState;
        if (((c = g.element), h.isDehydrated))
          if (
            ((h = {
              element: c,
              isDehydrated: !1,
              cache: g.cache,
              pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
              transitions: g.transitions,
            }),
            (o.updateQueue.baseState = h),
            (o.memoizedState = h),
            o.flags & 256)
          ) {
            ((d = Ji(Error(p(423)), o)), (o = lj(e, o, c, a, d)));
            break e;
          } else if (c !== d) {
            ((d = Ji(Error(p(424)), o)), (o = lj(e, o, c, a, d)));
            break e;
          } else
            for (
              yg = Lf(o.stateNode.containerInfo.firstChild),
                xg = o,
                I$1 = !0,
                zg = null,
                a = Vg(o, null, c, a),
                o.child = a;
              a;

            )
              ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
        else {
          if ((Ig(), c === d)) {
            o = Zi(e, o, a);
            break e;
          }
          Xi(e, o, c, a);
        }
        o = o.child;
      }
      return o;
    case 5:
      return (
        Ah(o),
        e === null && Eg(o),
        (c = o.type),
        (d = o.pendingProps),
        (h = e !== null ? e.memoizedProps : null),
        (g = d.children),
        Ef(c, d) ? (g = null) : h !== null && Ef(c, h) && (o.flags |= 32),
        gj(e, o),
        Xi(e, o, g, a),
        o.child
      );
    case 6:
      return (e === null && Eg(o), null);
    case 13:
      return oj(e, o, a);
    case 4:
      return (
        yh(o, o.stateNode.containerInfo),
        (c = o.pendingProps),
        e === null ? (o.child = Ug(o, null, c, a)) : Xi(e, o, c, a),
        o.child
      );
    case 11:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Ci(c, d)),
        Yi(e, o, c, d, a)
      );
    case 7:
      return (Xi(e, o, o.pendingProps, a), o.child);
    case 8:
      return (Xi(e, o, o.pendingProps.children, a), o.child);
    case 12:
      return (Xi(e, o, o.pendingProps.children, a), o.child);
    case 10:
      e: {
        if (
          ((c = o.type._context),
          (d = o.pendingProps),
          (h = o.memoizedProps),
          (g = d.value),
          G(Wg, c._currentValue),
          (c._currentValue = g),
          h !== null)
        )
          if (He(h.value, g)) {
            if (h.children === d.children && !Wf.current) {
              o = Zi(e, o, a);
              break e;
            }
          } else
            for (h = o.child, h !== null && (h.return = o); h !== null; ) {
              var b = h.dependencies;
              if (b !== null) {
                g = h.child;
                for (var j = b.firstContext; j !== null; ) {
                  if (j.context === c) {
                    if (h.tag === 1) {
                      ((j = mh(-1, a & -a)), (j.tag = 2));
                      var $ = h.updateQueue;
                      if ($ !== null) {
                        $ = $.shared;
                        var _e = $.pending;
                        (_e === null
                          ? (j.next = j)
                          : ((j.next = _e.next), (_e.next = j)),
                          ($.pending = j));
                      }
                    }
                    ((h.lanes |= a),
                      (j = h.alternate),
                      j !== null && (j.lanes |= a),
                      bh(h.return, a, o),
                      (b.lanes |= a));
                    break;
                  }
                  j = j.next;
                }
              } else if (h.tag === 10) g = h.type === o.type ? null : h.child;
              else if (h.tag === 18) {
                if (((g = h.return), g === null)) throw Error(p(341));
                ((g.lanes |= a),
                  (b = g.alternate),
                  b !== null && (b.lanes |= a),
                  bh(g, a, o),
                  (g = h.sibling));
              } else g = h.child;
              if (g !== null) g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === o) {
                    g = null;
                    break;
                  }
                  if (((h = g.sibling), h !== null)) {
                    ((h.return = g.return), (g = h));
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        (Xi(e, o, d.children, a), (o = o.child));
      }
      return o;
    case 9:
      return (
        (d = o.type),
        (c = o.pendingProps.children),
        ch(o, a),
        (d = eh(d)),
        (c = c(d)),
        (o.flags |= 1),
        Xi(e, o, c, a),
        o.child
      );
    case 14:
      return (
        (c = o.type),
        (d = Ci(c, o.pendingProps)),
        (d = Ci(c.type, d)),
        $i(e, o, c, d, a)
      );
    case 15:
      return bj(e, o, o.type, o.pendingProps, a);
    case 17:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Ci(c, d)),
        ij(e, o),
        (o.tag = 1),
        Zf(c) ? ((e = !0), cg(o)) : (e = !1),
        ch(o, a),
        Gi(o, c, d),
        Ii(o, c, d, a),
        jj(null, o, c, !0, e, a)
      );
    case 19:
      return xj(e, o, a);
    case 22:
      return dj(e, o, a);
  }
  throw Error(p(156, o.tag));
};
function Fk(e, o) {
  return ac(e, o);
}
function $k(e, o, a, c) {
  ((this.tag = e),
    (this.key = a),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = o),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = c),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Bg(e, o, a, c) {
  return new $k(e, o, a, c);
}
function aj(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Zk(e) {
  if (typeof e == "function") return aj(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Da)) return 11;
    if (e === Ga) return 14;
  }
  return 2;
}
function Pg(e, o) {
  var a = e.alternate;
  return (
    a === null
      ? ((a = Bg(e.tag, o, e.key, e.mode)),
        (a.elementType = e.elementType),
        (a.type = e.type),
        (a.stateNode = e.stateNode),
        (a.alternate = e),
        (e.alternate = a))
      : ((a.pendingProps = o),
        (a.type = e.type),
        (a.flags = 0),
        (a.subtreeFlags = 0),
        (a.deletions = null)),
    (a.flags = e.flags & 14680064),
    (a.childLanes = e.childLanes),
    (a.lanes = e.lanes),
    (a.child = e.child),
    (a.memoizedProps = e.memoizedProps),
    (a.memoizedState = e.memoizedState),
    (a.updateQueue = e.updateQueue),
    (o = e.dependencies),
    (a.dependencies =
      o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
    (a.sibling = e.sibling),
    (a.index = e.index),
    (a.ref = e.ref),
    a
  );
}
function Rg(e, o, a, c, d, h) {
  var g = 2;
  if (((c = e), typeof e == "function")) aj(e) && (g = 1);
  else if (typeof e == "string") g = 5;
  else
    e: switch (e) {
      case ya:
        return Tg(a.children, d, h, o);
      case za:
        ((g = 8), (d |= 8));
        break;
      case Aa:
        return (
          (e = Bg(12, a, o, d | 2)),
          (e.elementType = Aa),
          (e.lanes = h),
          e
        );
      case Ea:
        return ((e = Bg(13, a, o, d)), (e.elementType = Ea), (e.lanes = h), e);
      case Fa:
        return ((e = Bg(19, a, o, d)), (e.elementType = Fa), (e.lanes = h), e);
      case Ia:
        return pj(a, d, h, o);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ba:
              g = 10;
              break e;
            case Ca:
              g = 9;
              break e;
            case Da:
              g = 11;
              break e;
            case Ga:
              g = 14;
              break e;
            case Ha:
              ((g = 16), (c = null));
              break e;
          }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
  return (
    (o = Bg(g, a, o, d)),
    (o.elementType = e),
    (o.type = c),
    (o.lanes = h),
    o
  );
}
function Tg(e, o, a, c) {
  return ((e = Bg(7, e, c, o)), (e.lanes = a), e);
}
function pj(e, o, a, c) {
  return (
    (e = Bg(22, e, c, o)),
    (e.elementType = Ia),
    (e.lanes = a),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qg(e, o, a) {
  return ((e = Bg(6, e, null, o)), (e.lanes = a), e);
}
function Sg(e, o, a) {
  return (
    (o = Bg(4, e.children !== null ? e.children : [], e.key, o)),
    (o.lanes = a),
    (o.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    o
  );
}
function al(e, o, a, c, d) {
  ((this.tag = o),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = c),
    (this.onRecoverableError = d),
    (this.mutableSourceEagerHydrationData = null));
}
function bl(e, o, a, c, d, h, g, b, j) {
  return (
    (e = new al(e, o, a, b, j)),
    o === 1 ? ((o = 1), h === !0 && (o |= 8)) : (o = 0),
    (h = Bg(3, null, null, o)),
    (e.current = h),
    (h.stateNode = e),
    (h.memoizedState = {
      element: c,
      isDehydrated: a,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kh(h),
    e
  );
}
function cl(e, o, a) {
  var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: c == null ? null : "" + c,
    children: e,
    containerInfo: o,
    implementation: a,
  };
}
function dl(e) {
  if (!e) return Vf;
  e = e._reactInternals;
  e: {
    if (Vb(e) !== e || e.tag !== 1) throw Error(p(170));
    var o = e;
    do {
      switch (o.tag) {
        case 3:
          o = o.stateNode.context;
          break e;
        case 1:
          if (Zf(o.type)) {
            o = o.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      o = o.return;
    } while (o !== null);
    throw Error(p(171));
  }
  if (e.tag === 1) {
    var a = e.type;
    if (Zf(a)) return bg(e, a, o);
  }
  return o;
}
function el(e, o, a, c, d, h, g, b, j) {
  return (
    (e = bl(a, c, !0, e, d, h, g, b, j)),
    (e.context = dl(null)),
    (a = e.current),
    (c = R$1()),
    (d = yi(a)),
    (h = mh(c, d)),
    (h.callback = o ?? null),
    nh(a, h, d),
    (e.current.lanes = d),
    Ac(e, d, c),
    Dk(e, c),
    e
  );
}
function fl(e, o, a, c) {
  var d = o.current,
    h = R$1(),
    g = yi(d);
  return (
    (a = dl(a)),
    o.context === null ? (o.context = a) : (o.pendingContext = a),
    (o = mh(h, g)),
    (o.payload = { element: e }),
    (c = c === void 0 ? null : c),
    c !== null && (o.callback = c),
    (e = nh(d, o, g)),
    e !== null && (gi(e, d, g, h), oh(e, d, g)),
    g
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hl(e, o) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var a = e.retryLane;
    e.retryLane = a !== 0 && a < o ? a : o;
  }
}
function il(e, o) {
  (hl(e, o), (e = e.alternate) && hl(e, o));
}
function jl() {
  return null;
}
var kl =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ll(e) {
  this._internalRoot = e;
}
ml.prototype.render = ll.prototype.render = function (e) {
  var o = this._internalRoot;
  if (o === null) throw Error(p(409));
  fl(e, o, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var o = e.containerInfo;
    (Rk(function () {
      fl(null, e, null, null);
    }),
      (o[uf] = null));
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var o = Hc();
    e = { blockedOn: null, target: e, priority: o };
    for (var a = 0; a < Qc.length && o !== 0 && o < Qc[a].priority; a++);
    (Qc.splice(a, 0, e), a === 0 && Vc(e));
  }
};
function nl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pl() {}
function ql(e, o, a, c, d) {
  if (d) {
    if (typeof c == "function") {
      var h = c;
      c = function () {
        var $ = gl(g);
        h.call($);
      };
    }
    var g = el(o, c, e, 0, null, !1, !1, "", pl);
    return (
      (e._reactRootContainer = g),
      (e[uf] = g.current),
      sf(e.nodeType === 8 ? e.parentNode : e),
      Rk(),
      g
    );
  }
  for (; (d = e.lastChild); ) e.removeChild(d);
  if (typeof c == "function") {
    var b = c;
    c = function () {
      var $ = gl(j);
      b.call($);
    };
  }
  var j = bl(e, 0, !1, null, null, !1, !1, "", pl);
  return (
    (e._reactRootContainer = j),
    (e[uf] = j.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    Rk(function () {
      fl(o, j, a, c);
    }),
    j
  );
}
function rl(e, o, a, c, d) {
  var h = a._reactRootContainer;
  if (h) {
    var g = h;
    if (typeof d == "function") {
      var b = d;
      d = function () {
        var j = gl(g);
        b.call(j);
      };
    }
    fl(o, g, e, d);
  } else g = ql(a, o, e, d, c);
  return gl(g);
}
Ec = function (e) {
  switch (e.tag) {
    case 3:
      var o = e.stateNode;
      if (o.current.memoizedState.isDehydrated) {
        var a = tc(o.pendingLanes);
        a !== 0 &&
          (Cc(o, a | 1), Dk(o, B()), !(K & 6) && ((Gj = B() + 500), jg()));
      }
      break;
    case 13:
      (Rk(function () {
        var c = ih(e, 1);
        if (c !== null) {
          var d = R$1();
          gi(c, e, 1, d);
        }
      }),
        il(e, 1));
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var o = ih(e, 134217728);
    if (o !== null) {
      var a = R$1();
      gi(o, e, 134217728, a);
    }
    il(e, 134217728);
  }
};
Gc = function (e) {
  if (e.tag === 13) {
    var o = yi(e),
      a = ih(e, o);
    if (a !== null) {
      var c = R$1();
      gi(a, e, o, c);
    }
    il(e, o);
  }
};
Hc = function () {
  return C;
};
Ic = function (e, o) {
  var a = C;
  try {
    return ((C = e), o());
  } finally {
    C = a;
  }
};
yb = function (e, o, a) {
  switch (o) {
    case "input":
      if ((bb(e, a), (o = a.name), a.type === "radio" && o != null)) {
        for (a = e; a.parentNode; ) a = a.parentNode;
        for (
          a = a.querySelectorAll(
            "input[name=" + JSON.stringify("" + o) + '][type="radio"]',
          ),
            o = 0;
          o < a.length;
          o++
        ) {
          var c = a[o];
          if (c !== e && c.form === e.form) {
            var d = Db(c);
            if (!d) throw Error(p(90));
            (Wa(c), bb(c, d));
          }
        }
      }
      break;
    case "textarea":
      ib(e, a);
      break;
    case "select":
      ((o = a.value), o != null && fb(e, !!a.multiple, o, !1));
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Qk] },
  tl = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ul = {
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
    findHostInstanceByFiber: function (e) {
      return ((e = Zb(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: tl.findFiberByHostInstance || jl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      ((kc = vl.inject(ul)), (lc = vl));
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function (e, o) {
  var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nl(o)) throw Error(p(200));
  return cl(e, o, null, a);
};
reactDom_production_min.createRoot = function (e, o) {
  if (!nl(e)) throw Error(p(299));
  var a = !1,
    c = "",
    d = kl;
  return (
    o != null &&
      (o.unstable_strictMode === !0 && (a = !0),
      o.identifierPrefix !== void 0 && (c = o.identifierPrefix),
      o.onRecoverableError !== void 0 && (d = o.onRecoverableError)),
    (o = bl(e, 1, !1, null, null, a, !1, c, d)),
    (e[uf] = o.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    new ll(o)
  );
};
reactDom_production_min.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var o = e._reactInternals;
  if (o === void 0)
    throw typeof e.render == "function"
      ? Error(p(188))
      : ((e = Object.keys(e).join(",")), Error(p(268, e)));
  return ((e = Zb(o)), (e = e === null ? null : e.stateNode), e);
};
reactDom_production_min.flushSync = function (e) {
  return Rk(e);
};
reactDom_production_min.hydrate = function (e, o, a) {
  if (!ol(o)) throw Error(p(200));
  return rl(null, e, o, !0, a);
};
reactDom_production_min.hydrateRoot = function (e, o, a) {
  if (!nl(e)) throw Error(p(405));
  var c = (a != null && a.hydratedSources) || null,
    d = !1,
    h = "",
    g = kl;
  if (
    (a != null &&
      (a.unstable_strictMode === !0 && (d = !0),
      a.identifierPrefix !== void 0 && (h = a.identifierPrefix),
      a.onRecoverableError !== void 0 && (g = a.onRecoverableError)),
    (o = el(o, null, e, 1, a ?? null, d, !1, h, g)),
    (e[uf] = o.current),
    sf(e),
    c)
  )
    for (e = 0; e < c.length; e++)
      ((a = c[e]),
        (d = a._getVersion),
        (d = d(a._source)),
        o.mutableSourceEagerHydrationData == null
          ? (o.mutableSourceEagerHydrationData = [a, d])
          : o.mutableSourceEagerHydrationData.push(a, d));
  return new ml(o);
};
reactDom_production_min.render = function (e, o, a) {
  if (!ol(o)) throw Error(p(200));
  return rl(null, e, o, !1, a);
};
reactDom_production_min.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(p(40));
  return e._reactRootContainer
    ? (Rk(function () {
        rl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[uf] = null));
        });
      }),
      !0)
    : !1;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
  e,
  o,
  a,
  c,
) {
  if (!ol(a)) throw Error(p(200));
  if (e == null || e._reactInternals === void 0) throw Error(p(38));
  return rl(e, o, a, !1, c);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (e) {
      console.error(e);
    }
}
(checkDCE(), (reactDom.exports = reactDom_production_min));
var reactDomExports = reactDom.exports,
  m = reactDomExports;
((client.createRoot = m.createRoot), (client.hydrateRoot = m.hydrateRoot));
function Header() {
  const [e, o] = reactExports.useState(!1),
    a = [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ];
  return jsxRuntimeExports.jsx("header", {
    className:
      "fixed top-4 left-4 right-4 rounded-full bg-white/10 backdrop-blur-lg z-50 border-b border-white/20",
    children: jsxRuntimeExports.jsxs("nav", {
      className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        jsxRuntimeExports.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            jsxRuntimeExports.jsx("div", {
              className: "flex-shrink-0",
              children: jsxRuntimeExports.jsx("span", {
                className:
                  "text-xl font-bold text-white glow bg-white/15 rounded-full",
                children: "✨ Yon Samphorslita",
              }),
            }),
            jsxRuntimeExports.jsx("div", {
              className: "hidden md:block",
              children: jsxRuntimeExports.jsx("div", {
                className: "ml-10 flex items-baseline space-x-8",
                children: a.map((c) =>
                  jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: c.href,
                      className:
                        "text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 hover:glow",
                      children: c.name,
                    },
                    c.name,
                  ),
                ),
              }),
            }),
            jsxRuntimeExports.jsx("div", {
              className: "md:hidden",
              children: jsxRuntimeExports.jsx("button", {
                onClick: () => o(!e),
                className:
                  "inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white",
                children: jsxRuntimeExports.jsx("div", {
                  className: `icon-${e ? "x" : "menu"} text-xl`,
                }),
              }),
            }),
          ],
        }),
        e &&
          jsxRuntimeExports.jsx("div", {
            className: "md:hidden",
            children: jsxRuntimeExports.jsx("div", {
              className:
                "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-lg border-t border-white/20",
              children: a.map((c) =>
                jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: c.href,
                    className:
                      "text-white/80 hover:text-white block px-3 py-2 text-base font-medium",
                    onClick: () => o(!1),
                    children: c.name,
                  },
                  c.name,
                ),
              ),
            }),
          }),
      ],
    }),
  });
}
const LayoutGroupContext = reactExports.createContext({});
function useConstant(e) {
  const o = reactExports.useRef(null);
  return (o.current === null && (o.current = e()), o.current);
}
const isBrowser = typeof window < "u",
  useIsomorphicLayoutEffect = isBrowser
    ? reactExports.useLayoutEffect
    : reactExports.useEffect,
  PresenceContext = reactExports.createContext(null);
function addUniqueItem(e, o) {
  e.indexOf(o) === -1 && e.push(o);
}
function removeItem(e, o) {
  const a = e.indexOf(o);
  a > -1 && e.splice(a, 1);
}
const clamp = (e, o, a) => (a > o ? o : a < e ? e : a);
let invariant = () => {};
const MotionGlobalConfig = {},
  isNumericalString = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function isObject(e) {
  return typeof e == "object" && e !== null;
}
const isZeroValueString = (e) => /^0[^.\s]+$/u.test(e);
function memo(e) {
  let o;
  return () => (o === void 0 && (o = e()), o);
}
const noop = (e) => e,
  combineFunctions = (e, o) => (a) => o(e(a)),
  pipe = (...e) => e.reduce(combineFunctions),
  progress = (e, o, a) => {
    const c = o - e;
    return c === 0 ? 1 : (a - e) / c;
  };
class SubscriptionManager {
  constructor() {
    this.subscriptions = [];
  }
  add(o) {
    return (
      addUniqueItem(this.subscriptions, o),
      () => removeItem(this.subscriptions, o)
    );
  }
  notify(o, a, c) {
    const d = this.subscriptions.length;
    if (d)
      if (d === 1) this.subscriptions[0](o, a, c);
      else
        for (let h = 0; h < d; h++) {
          const g = this.subscriptions[h];
          g && g(o, a, c);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const secondsToMilliseconds = (e) => e * 1e3,
  millisecondsToSeconds = (e) => e / 1e3;
function velocityPerSecond(e, o) {
  return o ? e * (1e3 / o) : 0;
}
const calcBezier = (e, o, a) =>
    (((1 - 3 * a + 3 * o) * e + (3 * a - 6 * o)) * e + 3 * o) * e,
  subdivisionPrecision = 1e-7,
  subdivisionMaxIterations = 12;
function binarySubdivide(e, o, a, c, d) {
  let h,
    g,
    b = 0;
  do
    ((g = o + (a - o) / 2),
      (h = calcBezier(g, c, d) - e),
      h > 0 ? (a = g) : (o = g));
  while (Math.abs(h) > subdivisionPrecision && ++b < subdivisionMaxIterations);
  return g;
}
function cubicBezier(e, o, a, c) {
  if (e === o && a === c) return noop;
  const d = (h) => binarySubdivide(h, 0, 1, e, a);
  return (h) => (h === 0 || h === 1 ? h : calcBezier(d(h), o, c));
}
const mirrorEasing = (e) => (o) =>
    o <= 0.5 ? e(2 * o) / 2 : (2 - e(2 * (1 - o))) / 2,
  reverseEasing = (e) => (o) => 1 - e(1 - o),
  backOut = cubicBezier(0.33, 1.53, 0.69, 0.99),
  backIn = reverseEasing(backOut),
  backInOut = mirrorEasing(backIn),
  anticipate = (e) =>
    (e *= 2) < 1 ? 0.5 * backIn(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  circIn = (e) => 1 - Math.sin(Math.acos(e)),
  circOut = reverseEasing(circIn),
  circInOut = mirrorEasing(circIn),
  easeIn = cubicBezier(0.42, 0, 1, 1),
  easeOut = cubicBezier(0, 0, 0.58, 1),
  easeInOut = cubicBezier(0.42, 0, 0.58, 1),
  isEasingArray = (e) => Array.isArray(e) && typeof e[0] != "number",
  isBezierDefinition = (e) => Array.isArray(e) && typeof e[0] == "number",
  easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate,
  },
  isValidEasing = (e) => typeof e == "string",
  easingDefinitionToFunction = (e) => {
    if (isBezierDefinition(e)) {
      invariant(e.length === 4);
      const [o, a, c, d] = e;
      return cubicBezier(o, a, c, d);
    } else if (isValidEasing(e)) return easingLookup[e];
    return e;
  },
  stepsOrder = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  statsBuffer = { value: null, addProjectionMetrics: null };
function createRenderStep(e, o) {
  let a = new Set(),
    c = new Set(),
    d = !1,
    h = !1;
  const g = new WeakSet();
  let b = { delta: 0, timestamp: 0, isProcessing: !1 },
    j = 0;
  function $(et) {
    (g.has(et) && (_e.schedule(et), e()), j++, et(b));
  }
  const _e = {
    schedule: (et, nt = !1, ot = !1) => {
      const ut = ot && d ? a : c;
      return (nt && g.add(et), ut.has(et) || ut.add(et), et);
    },
    cancel: (et) => {
      (c.delete(et), g.delete(et));
    },
    process: (et) => {
      if (((b = et), d)) {
        h = !0;
        return;
      }
      ((d = !0),
        ([a, c] = [c, a]),
        a.forEach($),
        o && statsBuffer.value && statsBuffer.value.frameloop[o].push(j),
        (j = 0),
        a.clear(),
        (d = !1),
        h && ((h = !1), _e.process(et)));
    },
  };
  return _e;
}
const maxElapsed = 40;
function createRenderBatcher(e, o) {
  let a = !1,
    c = !0;
  const d = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (a = !0),
    g = stepsOrder.reduce(
      (st, ct) => ((st[ct] = createRenderStep(h, o ? ct : void 0)), st),
      {},
    ),
    {
      setup: b,
      read: j,
      resolveKeyframes: $,
      preUpdate: _e,
      update: et,
      preRender: nt,
      render: ot,
      postRender: lt,
    } = g,
    ut = () => {
      const st = MotionGlobalConfig.useManualTiming
        ? d.timestamp
        : performance.now();
      ((a = !1),
        MotionGlobalConfig.useManualTiming ||
          (d.delta = c
            ? 1e3 / 60
            : Math.max(Math.min(st - d.timestamp, maxElapsed), 1)),
        (d.timestamp = st),
        (d.isProcessing = !0),
        b.process(d),
        j.process(d),
        $.process(d),
        _e.process(d),
        et.process(d),
        nt.process(d),
        ot.process(d),
        lt.process(d),
        (d.isProcessing = !1),
        a && o && ((c = !1), e(ut)));
    },
    gt = () => {
      ((a = !0), (c = !0), d.isProcessing || e(ut));
    };
  return {
    schedule: stepsOrder.reduce((st, ct) => {
      const ft = g[ct];
      return (
        (st[ct] = (pt, mt = !1, dt = !1) => (
          a || gt(),
          ft.schedule(pt, mt, dt)
        )),
        st
      );
    }, {}),
    cancel: (st) => {
      for (let ct = 0; ct < stepsOrder.length; ct++)
        g[stepsOrder[ct]].cancel(st);
    },
    state: d,
    steps: g,
  };
}
const {
  schedule: frame,
  cancel: cancelFrame,
  state: frameData,
  steps: frameSteps,
} = createRenderBatcher(
  typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop,
  !0,
);
let now;
function clearTime() {
  now = void 0;
}
const time = {
    now: () => (
      now === void 0 &&
        time.set(
          frameData.isProcessing || MotionGlobalConfig.useManualTiming
            ? frameData.timestamp
            : performance.now(),
        ),
      now
    ),
    set: (e) => {
      ((now = e), queueMicrotask(clearTime));
    },
  },
  checkStringStartsWith = (e) => (o) => typeof o == "string" && o.startsWith(e),
  isCSSVariableName = checkStringStartsWith("--"),
  startsAsVariableToken = checkStringStartsWith("var(--"),
  isCSSVariableToken = (e) =>
    startsAsVariableToken(e)
      ? singleCssVariableRegex.test(e.split("/*")[0].trim())
      : !1,
  singleCssVariableRegex =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  number = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  alpha = { ...number, transform: (e) => clamp(0, 1, e) },
  scale = { ...number, default: 1 },
  sanitize = (e) => Math.round(e * 1e5) / 1e5,
  floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(e) {
  return e == null;
}
const singleColorRegex =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  isColorString = (e, o) => (a) =>
    !!(
      (typeof a == "string" && singleColorRegex.test(a) && a.startsWith(e)) ||
      (o && !isNullish(a) && Object.prototype.hasOwnProperty.call(a, o))
    ),
  splitColor = (e, o, a) => (c) => {
    if (typeof c != "string") return c;
    const [d, h, g, b] = c.match(floatRegex);
    return {
      [e]: parseFloat(d),
      [o]: parseFloat(h),
      [a]: parseFloat(g),
      alpha: b !== void 0 ? parseFloat(b) : 1,
    };
  },
  clampRgbUnit = (e) => clamp(0, 255, e),
  rgbUnit = { ...number, transform: (e) => Math.round(clampRgbUnit(e)) },
  rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: ({ red: e, green: o, blue: a, alpha: c = 1 }) =>
      "rgba(" +
      rgbUnit.transform(e) +
      ", " +
      rgbUnit.transform(o) +
      ", " +
      rgbUnit.transform(a) +
      ", " +
      sanitize(alpha.transform(c)) +
      ")",
  };
function parseHex(e) {
  let o = "",
    a = "",
    c = "",
    d = "";
  return (
    e.length > 5
      ? ((o = e.substring(1, 3)),
        (a = e.substring(3, 5)),
        (c = e.substring(5, 7)),
        (d = e.substring(7, 9)))
      : ((o = e.substring(1, 2)),
        (a = e.substring(2, 3)),
        (c = e.substring(3, 4)),
        (d = e.substring(4, 5)),
        (o += o),
        (a += a),
        (c += c),
        (d += d)),
    {
      red: parseInt(o, 16),
      green: parseInt(a, 16),
      blue: parseInt(c, 16),
      alpha: d ? parseInt(d, 16) / 255 : 1,
    }
  );
}
const hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform,
  },
  createUnitType = (e) => ({
    test: (o) =>
      typeof o == "string" && o.endsWith(e) && o.split(" ").length === 1,
    parse: parseFloat,
    transform: (o) => `${o}${e}`,
  }),
  degrees = createUnitType("deg"),
  percent = createUnitType("%"),
  px = createUnitType("px"),
  vh = createUnitType("vh"),
  vw = createUnitType("vw"),
  progressPercentage = (() => ({
    ...percent,
    parse: (e) => percent.parse(e) / 100,
    transform: (e) => percent.transform(e * 100),
  }))(),
  hsla = {
    test: isColorString("hsl", "hue"),
    parse: splitColor("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: o, lightness: a, alpha: c = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      percent.transform(sanitize(o)) +
      ", " +
      percent.transform(sanitize(a)) +
      ", " +
      sanitize(alpha.transform(c)) +
      ")",
  },
  color = {
    test: (e) => rgba.test(e) || hex.test(e) || hsla.test(e),
    parse: (e) =>
      rgba.test(e)
        ? rgba.parse(e)
        : hsla.test(e)
          ? hsla.parse(e)
          : hex.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? rgba.transform(e)
          : hsla.transform(e),
    getAnimatableNone: (e) => {
      const o = color.parse(e);
      return ((o.alpha = 0), color.transform(o));
    },
  },
  colorRegex =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(e) {
  var o, a;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((o = e.match(floatRegex)) == null ? void 0 : o.length) || 0) +
      (((a = e.match(colorRegex)) == null ? void 0 : a.length) || 0) >
      0
  );
}
const NUMBER_TOKEN = "number",
  COLOR_TOKEN = "color",
  VAR_TOKEN = "var",
  VAR_FUNCTION_TOKEN = "var(",
  SPLIT_TOKEN = "${}",
  complexRegex =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(e) {
  const o = e.toString(),
    a = [],
    c = { color: [], number: [], var: [] },
    d = [];
  let h = 0;
  const b = o
    .replace(
      complexRegex,
      (j) => (
        color.test(j)
          ? (c.color.push(h), d.push(COLOR_TOKEN), a.push(color.parse(j)))
          : j.startsWith(VAR_FUNCTION_TOKEN)
            ? (c.var.push(h), d.push(VAR_TOKEN), a.push(j))
            : (c.number.push(h), d.push(NUMBER_TOKEN), a.push(parseFloat(j))),
        ++h,
        SPLIT_TOKEN
      ),
    )
    .split(SPLIT_TOKEN);
  return { values: a, split: b, indexes: c, types: d };
}
function parseComplexValue(e) {
  return analyseComplexValue(e).values;
}
function createTransformer(e) {
  const { split: o, types: a } = analyseComplexValue(e),
    c = o.length;
  return (d) => {
    let h = "";
    for (let g = 0; g < c; g++)
      if (((h += o[g]), d[g] !== void 0)) {
        const b = a[g];
        b === NUMBER_TOKEN
          ? (h += sanitize(d[g]))
          : b === COLOR_TOKEN
            ? (h += color.transform(d[g]))
            : (h += d[g]);
      }
    return h;
  };
}
const convertNumbersToZero = (e) =>
  typeof e == "number" ? 0 : color.test(e) ? color.getAnimatableNone(e) : e;
function getAnimatableNone$1(e) {
  const o = parseComplexValue(e);
  return createTransformer(e)(o.map(convertNumbersToZero));
}
const complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone: getAnimatableNone$1,
};
function hueToRgb(e, o, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? e + (o - e) * 6 * a
      : a < 1 / 2
        ? o
        : a < 2 / 3
          ? e + (o - e) * (2 / 3 - a) * 6
          : e
  );
}
function hslaToRgba({ hue: e, saturation: o, lightness: a, alpha: c }) {
  ((e /= 360), (o /= 100), (a /= 100));
  let d = 0,
    h = 0,
    g = 0;
  if (!o) d = h = g = a;
  else {
    const b = a < 0.5 ? a * (1 + o) : a + o - a * o,
      j = 2 * a - b;
    ((d = hueToRgb(j, b, e + 1 / 3)),
      (h = hueToRgb(j, b, e)),
      (g = hueToRgb(j, b, e - 1 / 3)));
  }
  return {
    red: Math.round(d * 255),
    green: Math.round(h * 255),
    blue: Math.round(g * 255),
    alpha: c,
  };
}
function mixImmediate(e, o) {
  return (a) => (a > 0 ? o : e);
}
const mixNumber$1 = (e, o, a) => e + (o - e) * a,
  mixLinearColor = (e, o, a) => {
    const c = e * e,
      d = a * (o * o - c) + c;
    return d < 0 ? 0 : Math.sqrt(d);
  },
  colorTypes = [hex, rgba, hsla],
  getColorType = (e) => colorTypes.find((o) => o.test(e));
function asRGBA(e) {
  const o = getColorType(e);
  if (!o) return !1;
  let a = o.parse(e);
  return (o === hsla && (a = hslaToRgba(a)), a);
}
const mixColor = (e, o) => {
    const a = asRGBA(e),
      c = asRGBA(o);
    if (!a || !c) return mixImmediate(e, o);
    const d = { ...a };
    return (h) => (
      (d.red = mixLinearColor(a.red, c.red, h)),
      (d.green = mixLinearColor(a.green, c.green, h)),
      (d.blue = mixLinearColor(a.blue, c.blue, h)),
      (d.alpha = mixNumber$1(a.alpha, c.alpha, h)),
      rgba.transform(d)
    );
  },
  invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(e, o) {
  return invisibleValues.has(e)
    ? (a) => (a <= 0 ? e : o)
    : (a) => (a >= 1 ? o : e);
}
function mixNumber(e, o) {
  return (a) => mixNumber$1(e, o, a);
}
function getMixer(e) {
  return typeof e == "number"
    ? mixNumber
    : typeof e == "string"
      ? isCSSVariableToken(e)
        ? mixImmediate
        : color.test(e)
          ? mixColor
          : mixComplex
      : Array.isArray(e)
        ? mixArray
        : typeof e == "object"
          ? color.test(e)
            ? mixColor
            : mixObject
          : mixImmediate;
}
function mixArray(e, o) {
  const a = [...e],
    c = a.length,
    d = e.map((h, g) => getMixer(h)(h, o[g]));
  return (h) => {
    for (let g = 0; g < c; g++) a[g] = d[g](h);
    return a;
  };
}
function mixObject(e, o) {
  const a = { ...e, ...o },
    c = {};
  for (const d in a)
    e[d] !== void 0 && o[d] !== void 0 && (c[d] = getMixer(e[d])(e[d], o[d]));
  return (d) => {
    for (const h in c) a[h] = c[h](d);
    return a;
  };
}
function matchOrder(e, o) {
  const a = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < o.values.length; d++) {
    const h = o.types[d],
      g = e.indexes[h][c[h]],
      b = e.values[g] ?? 0;
    ((a[d] = b), c[h]++);
  }
  return a;
}
const mixComplex = (e, o) => {
  const a = complex.createTransformer(o),
    c = analyseComplexValue(e),
    d = analyseComplexValue(o);
  return c.indexes.var.length === d.indexes.var.length &&
    c.indexes.color.length === d.indexes.color.length &&
    c.indexes.number.length >= d.indexes.number.length
    ? (invisibleValues.has(e) && !d.values.length) ||
      (invisibleValues.has(o) && !c.values.length)
      ? mixVisibility(e, o)
      : pipe(mixArray(matchOrder(c, d), d.values), a)
    : mixImmediate(e, o);
};
function mix(e, o, a) {
  return typeof e == "number" && typeof o == "number" && typeof a == "number"
    ? mixNumber$1(e, o, a)
    : getMixer(e)(e, o);
}
const frameloopDriver = (e) => {
    const o = ({ timestamp: a }) => e(a);
    return {
      start: (a = !0) => frame.update(o, a),
      stop: () => cancelFrame(o),
      now: () => (frameData.isProcessing ? frameData.timestamp : time.now()),
    };
  },
  generateLinearEasing = (e, o, a = 10) => {
    let c = "";
    const d = Math.max(Math.round(o / a), 2);
    for (let h = 0; h < d; h++)
      c += Math.round(e(h / (d - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${c.substring(0, c.length - 2)})`;
  },
  maxGeneratorDuration = 2e4;
function calcGeneratorDuration(e) {
  let o = 0;
  const a = 50;
  let c = e.next(o);
  for (; !c.done && o < maxGeneratorDuration; ) ((o += a), (c = e.next(o)));
  return o >= maxGeneratorDuration ? 1 / 0 : o;
}
function createGeneratorEasing(e, o = 100, a) {
  const c = a({ ...e, keyframes: [0, o] }),
    d = Math.min(calcGeneratorDuration(c), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (h) => c.next(d * h).value / o,
    duration: millisecondsToSeconds(d),
  };
}
const velocitySampleDuration = 5;
function calcGeneratorVelocity(e, o, a) {
  const c = Math.max(o - velocitySampleDuration, 0);
  return velocityPerSecond(a - e(c), o - c);
}
const springDefaults = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  safeMin = 0.001;
function findSpring({
  duration: e = springDefaults.duration,
  bounce: o = springDefaults.bounce,
  velocity: a = springDefaults.velocity,
  mass: c = springDefaults.mass,
}) {
  let d,
    h,
    g = 1 - o;
  ((g = clamp(springDefaults.minDamping, springDefaults.maxDamping, g)),
    (e = clamp(
      springDefaults.minDuration,
      springDefaults.maxDuration,
      millisecondsToSeconds(e),
    )),
    g < 1
      ? ((d = ($) => {
          const _e = $ * g,
            et = _e * e,
            nt = _e - a,
            ot = calcAngularFreq($, g),
            lt = Math.exp(-et);
          return safeMin - (nt / ot) * lt;
        }),
        (h = ($) => {
          const et = $ * g * e,
            nt = et * a + a,
            ot = Math.pow(g, 2) * Math.pow($, 2) * e,
            lt = Math.exp(-et),
            ut = calcAngularFreq(Math.pow($, 2), g);
          return ((-d($) + safeMin > 0 ? -1 : 1) * ((nt - ot) * lt)) / ut;
        }))
      : ((d = ($) => {
          const _e = Math.exp(-$ * e),
            et = ($ - a) * e + 1;
          return -safeMin + _e * et;
        }),
        (h = ($) => {
          const _e = Math.exp(-$ * e),
            et = (a - $) * (e * e);
          return _e * et;
        })));
  const b = 5 / e,
    j = approximateRoot(d, h, b);
  if (((e = secondsToMilliseconds(e)), isNaN(j)))
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration: e,
    };
  {
    const $ = Math.pow(j, 2) * c;
    return { stiffness: $, damping: g * 2 * Math.sqrt(c * $), duration: e };
  }
}
const rootIterations = 12;
function approximateRoot(e, o, a) {
  let c = a;
  for (let d = 1; d < rootIterations; d++) c = c - e(c) / o(c);
  return c;
}
function calcAngularFreq(e, o) {
  return e * Math.sqrt(1 - o * o);
}
const durationKeys = ["duration", "bounce"],
  physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(e, o) {
  return o.some((a) => e[a] !== void 0);
}
function getSpringOptions(e) {
  let o = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!isSpringType(e, physicsKeys) && isSpringType(e, durationKeys))
    if (e.visualDuration) {
      const a = e.visualDuration,
        c = (2 * Math.PI) / (a * 1.2),
        d = c * c,
        h = 2 * clamp(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(d);
      o = { ...o, mass: springDefaults.mass, stiffness: d, damping: h };
    } else {
      const a = findSpring(e);
      ((o = { ...o, ...a, mass: springDefaults.mass }),
        (o.isResolvedFromDuration = !0));
    }
  return o;
}
function spring(e = springDefaults.visualDuration, o = springDefaults.bounce) {
  const a =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: o }
      : e;
  let { restSpeed: c, restDelta: d } = a;
  const h = a.keyframes[0],
    g = a.keyframes[a.keyframes.length - 1],
    b = { done: !1, value: h },
    {
      stiffness: j,
      damping: $,
      mass: _e,
      duration: et,
      velocity: nt,
      isResolvedFromDuration: ot,
    } = getSpringOptions({
      ...a,
      velocity: -millisecondsToSeconds(a.velocity || 0),
    }),
    lt = nt || 0,
    ut = $ / (2 * Math.sqrt(j * _e)),
    gt = g - h,
    it = millisecondsToSeconds(Math.sqrt(j / _e)),
    rt = Math.abs(gt) < 5;
  (c ||
    (c = rt
      ? springDefaults.restSpeed.granular
      : springDefaults.restSpeed.default),
    d ||
      (d = rt
        ? springDefaults.restDelta.granular
        : springDefaults.restDelta.default));
  let st;
  if (ut < 1) {
    const ft = calcAngularFreq(it, ut);
    st = (pt) => {
      const mt = Math.exp(-ut * it * pt);
      return (
        g -
        mt *
          (((lt + ut * it * gt) / ft) * Math.sin(ft * pt) +
            gt * Math.cos(ft * pt))
      );
    };
  } else if (ut === 1)
    st = (ft) => g - Math.exp(-it * ft) * (gt + (lt + it * gt) * ft);
  else {
    const ft = it * Math.sqrt(ut * ut - 1);
    st = (pt) => {
      const mt = Math.exp(-ut * it * pt),
        dt = Math.min(ft * pt, 300);
      return (
        g -
        (mt * ((lt + ut * it * gt) * Math.sinh(dt) + ft * gt * Math.cosh(dt))) /
          ft
      );
    };
  }
  const ct = {
    calculatedDuration: (ot && et) || null,
    next: (ft) => {
      const pt = st(ft);
      if (ot) b.done = ft >= et;
      else {
        let mt = ft === 0 ? lt : 0;
        ut < 1 &&
          (mt =
            ft === 0
              ? secondsToMilliseconds(lt)
              : calcGeneratorVelocity(st, ft, pt));
        const dt = Math.abs(mt) <= c,
          wt = Math.abs(g - pt) <= d;
        b.done = dt && wt;
      }
      return ((b.value = b.done ? g : pt), b);
    },
    toString: () => {
      const ft = Math.min(calcGeneratorDuration(ct), maxGeneratorDuration),
        pt = generateLinearEasing((mt) => ct.next(ft * mt).value, ft, 30);
      return ft + "ms " + pt;
    },
    toTransition: () => {},
  };
  return ct;
}
spring.applyToOptions = (e) => {
  const o = createGeneratorEasing(e, 100, spring);
  return (
    (e.ease = o.ease),
    (e.duration = secondsToMilliseconds(o.duration)),
    (e.type = "keyframes"),
    e
  );
};
function inertia({
  keyframes: e,
  velocity: o = 0,
  power: a = 0.8,
  timeConstant: c = 325,
  bounceDamping: d = 10,
  bounceStiffness: h = 500,
  modifyTarget: g,
  min: b,
  max: j,
  restDelta: $ = 0.5,
  restSpeed: _e,
}) {
  const et = e[0],
    nt = { done: !1, value: et },
    ot = (dt) => (b !== void 0 && dt < b) || (j !== void 0 && dt > j),
    lt = (dt) =>
      b === void 0
        ? j
        : j === void 0 || Math.abs(b - dt) < Math.abs(j - dt)
          ? b
          : j;
  let ut = a * o;
  const gt = et + ut,
    it = g === void 0 ? gt : g(gt);
  it !== gt && (ut = it - et);
  const rt = (dt) => -ut * Math.exp(-dt / c),
    st = (dt) => it + rt(dt),
    ct = (dt) => {
      const wt = rt(dt),
        bt = st(dt);
      ((nt.done = Math.abs(wt) <= $), (nt.value = nt.done ? it : bt));
    };
  let ft, pt;
  const mt = (dt) => {
    ot(nt.value) &&
      ((ft = dt),
      (pt = spring({
        keyframes: [nt.value, lt(nt.value)],
        velocity: calcGeneratorVelocity(st, dt, nt.value),
        damping: d,
        stiffness: h,
        restDelta: $,
        restSpeed: _e,
      })));
  };
  return (
    mt(0),
    {
      calculatedDuration: null,
      next: (dt) => {
        let wt = !1;
        return (
          !pt && ft === void 0 && ((wt = !0), ct(dt), mt(dt)),
          ft !== void 0 && dt >= ft ? pt.next(dt - ft) : (!wt && ct(dt), nt)
        );
      },
    }
  );
}
function createMixers(e, o, a) {
  const c = [],
    d = a || MotionGlobalConfig.mix || mix,
    h = e.length - 1;
  for (let g = 0; g < h; g++) {
    let b = d(e[g], e[g + 1]);
    if (o) {
      const j = Array.isArray(o) ? o[g] || noop : o;
      b = pipe(j, b);
    }
    c.push(b);
  }
  return c;
}
function interpolate(e, o, { clamp: a = !0, ease: c, mixer: d } = {}) {
  const h = e.length;
  if ((invariant(h === o.length), h === 1)) return () => o[0];
  if (h === 2 && o[0] === o[1]) return () => o[1];
  const g = e[0] === e[1];
  e[0] > e[h - 1] && ((e = [...e].reverse()), (o = [...o].reverse()));
  const b = createMixers(o, c, d),
    j = b.length,
    $ = (_e) => {
      if (g && _e < e[0]) return o[0];
      let et = 0;
      if (j > 1) for (; et < e.length - 2 && !(_e < e[et + 1]); et++);
      const nt = progress(e[et], e[et + 1], _e);
      return b[et](nt);
    };
  return a ? (_e) => $(clamp(e[0], e[h - 1], _e)) : $;
}
function fillOffset(e, o) {
  const a = e[e.length - 1];
  for (let c = 1; c <= o; c++) {
    const d = progress(0, o, c);
    e.push(mixNumber$1(a, 1, d));
  }
}
function defaultOffset(e) {
  const o = [0];
  return (fillOffset(o, e.length - 1), o);
}
function convertOffsetToTimes(e, o) {
  return e.map((a) => a * o);
}
function defaultEasing(e, o) {
  return e.map(() => o || easeInOut).splice(0, e.length - 1);
}
function keyframes({
  duration: e = 300,
  keyframes: o,
  times: a,
  ease: c = "easeInOut",
}) {
  const d = isEasingArray(c)
      ? c.map(easingDefinitionToFunction)
      : easingDefinitionToFunction(c),
    h = { done: !1, value: o[0] },
    g = convertOffsetToTimes(
      a && a.length === o.length ? a : defaultOffset(o),
      e,
    ),
    b = interpolate(g, o, { ease: Array.isArray(d) ? d : defaultEasing(o, d) });
  return {
    calculatedDuration: e,
    next: (j) => ((h.value = b(j)), (h.done = j >= e), h),
  };
}
const isNotNull$1 = (e) => e !== null;
function getFinalKeyframe$1(
  e,
  { repeat: o, repeatType: a = "loop" },
  c,
  d = 1,
) {
  const h = e.filter(isNotNull$1),
    b = d < 0 || (o && a !== "loop" && o % 2 === 1) ? 0 : h.length - 1;
  return !b || c === void 0 ? h[b] : c;
}
const transitionTypeMap = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring,
};
function replaceTransitionType(e) {
  typeof e.type == "string" && (e.type = transitionTypeMap[e.type]);
}
class WithPromise {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((o) => {
      this.resolve = o;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(o, a) {
    return this.finished.then(o, a);
  }
}
const percentToProgress = (e) => e / 100;
class JSAnimation extends WithPromise {
  constructor(o) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var c, d;
        const { motionValue: a } = this.options;
        (a && a.updatedAt !== time.now() && this.tick(time.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (d = (c = this.options).onStop) == null || d.call(c)));
      }),
      (this.options = o),
      this.initAnimation(),
      this.play(),
      o.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: o } = this;
    replaceTransitionType(o);
    const {
      type: a = keyframes,
      repeat: c = 0,
      repeatDelay: d = 0,
      repeatType: h,
      velocity: g = 0,
    } = o;
    let { keyframes: b } = o;
    const j = a || keyframes;
    j !== keyframes &&
      typeof b[0] != "number" &&
      ((this.mixKeyframes = pipe(percentToProgress, mix(b[0], b[1]))),
      (b = [0, 100]));
    const $ = j({ ...o, keyframes: b });
    (h === "mirror" &&
      (this.mirroredGenerator = j({
        ...o,
        keyframes: [...b].reverse(),
        velocity: -g,
      })),
      $.calculatedDuration === null &&
        ($.calculatedDuration = calcGeneratorDuration($)));
    const { calculatedDuration: _e } = $;
    ((this.calculatedDuration = _e),
      (this.resolvedDuration = _e + d),
      (this.totalDuration = this.resolvedDuration * (c + 1) - d),
      (this.generator = $));
  }
  updateTime(o) {
    const a = Math.round(o - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = a);
  }
  tick(o, a = !1) {
    const {
      generator: c,
      totalDuration: d,
      mixKeyframes: h,
      mirroredGenerator: g,
      resolvedDuration: b,
      calculatedDuration: j,
    } = this;
    if (this.startTime === null) return c.next(0);
    const {
      delay: $ = 0,
      keyframes: _e,
      repeat: et,
      repeatType: nt,
      repeatDelay: ot,
      type: lt,
      onUpdate: ut,
      finalKeyframe: gt,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, o))
      : this.speed < 0 &&
        (this.startTime = Math.min(o - d / this.speed, this.startTime)),
      a ? (this.currentTime = o) : this.updateTime(o));
    const it = this.currentTime - $ * (this.playbackSpeed >= 0 ? 1 : -1),
      rt = this.playbackSpeed >= 0 ? it < 0 : it > d;
    ((this.currentTime = Math.max(it, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let st = this.currentTime,
      ct = c;
    if (et) {
      const dt = Math.min(this.currentTime, d) / b;
      let wt = Math.floor(dt),
        bt = dt % 1;
      (!bt && dt >= 1 && (bt = 1),
        bt === 1 && wt--,
        (wt = Math.min(wt, et + 1)),
        !!(wt % 2) &&
          (nt === "reverse"
            ? ((bt = 1 - bt), ot && (bt -= ot / b))
            : nt === "mirror" && (ct = g)),
        (st = clamp(0, 1, bt) * b));
    }
    const ft = rt ? { done: !1, value: _e[0] } : ct.next(st);
    h && (ft.value = h(ft.value));
    let { done: pt } = ft;
    !rt &&
      j !== null &&
      (pt =
        this.playbackSpeed >= 0
          ? this.currentTime >= d
          : this.currentTime <= 0);
    const mt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && pt));
    return (
      mt &&
        lt !== inertia &&
        (ft.value = getFinalKeyframe$1(_e, this.options, gt, this.speed)),
      ut && ut(ft.value),
      mt && this.finish(),
      ft
    );
  }
  then(o, a) {
    return this.finished.then(o, a);
  }
  get duration() {
    return millisecondsToSeconds(this.calculatedDuration);
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(o) {
    var a;
    ((o = secondsToMilliseconds(o)),
      (this.currentTime = o),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = o)
        : this.driver &&
          (this.startTime = this.driver.now() - o / this.playbackSpeed),
      (a = this.driver) == null || a.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(o) {
    this.updateTime(time.now());
    const a = this.playbackSpeed !== o;
    ((this.playbackSpeed = o),
      a && (this.time = millisecondsToSeconds(this.currentTime)));
  }
  play() {
    var d, h;
    if (this.isStopped) return;
    const { driver: o = frameloopDriver, startTime: a } = this.options;
    (this.driver || (this.driver = o((g) => this.tick(g))),
      (h = (d = this.options).onPlay) == null || h.call(d));
    const c = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = c))
      : this.holdTime !== null
        ? (this.startTime = c - this.holdTime)
        : this.startTime || (this.startTime = a ?? c),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(time.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var o, a;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (a = (o = this.options).onComplete) == null || a.call(o));
  }
  cancel() {
    var o, a;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (a = (o = this.options).onCancel) == null || a.call(o));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(o) {
    return ((this.startTime = 0), this.tick(o, !0));
  }
  attachTimeline(o) {
    var a;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (a = this.driver) == null || a.stop(),
      o.observe(this)
    );
  }
}
function fillWildcards(e) {
  for (let o = 1; o < e.length; o++) e[o] ?? (e[o] = e[o - 1]);
}
const radToDeg = (e) => (e * 180) / Math.PI,
  rotate = (e) => {
    const o = radToDeg(Math.atan2(e[1], e[0]));
    return rebaseAngle(o);
  },
  matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (e) => radToDeg(Math.atan(e[1])),
    skewY: (e) => radToDeg(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  rebaseAngle = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  rotateZ = rotate,
  scaleX = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  scaleY = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (e) => (scaleX(e) + scaleY(e)) / 2,
    rotateX: (e) => rebaseAngle(radToDeg(Math.atan2(e[6], e[5]))),
    rotateY: (e) => rebaseAngle(radToDeg(Math.atan2(-e[2], e[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (e) => radToDeg(Math.atan(e[4])),
    skewY: (e) => radToDeg(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function defaultTransformValue(e) {
  return e.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(e, o) {
  if (!e || e === "none") return defaultTransformValue(o);
  const a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let c, d;
  if (a) ((c = matrix3dParsers), (d = a));
  else {
    const b = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((c = matrix2dParsers), (d = b));
  }
  if (!d) return defaultTransformValue(o);
  const h = c[o],
    g = d[1].split(",").map(convertTransformToNumber);
  return typeof h == "function" ? h(g) : g[h];
}
const readTransformValue = (e, o) => {
  const { transform: a = "none" } = getComputedStyle(e);
  return parseValueFromTransform(a, o);
};
function convertTransformToNumber(e) {
  return parseFloat(e.trim());
}
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  transformProps = (() => new Set(transformPropOrder))(),
  isNumOrPxType = (e) => e === number || e === px,
  transformKeys = new Set(["x", "y", "z"]),
  nonTranslationalTransformKeys = transformPropOrder.filter(
    (e) => !transformKeys.has(e),
  );
function removeNonTranslationalTransform(e) {
  const o = [];
  return (
    nonTranslationalTransformKeys.forEach((a) => {
      const c = e.getValue(a);
      c !== void 0 &&
        (o.push([a, c.get()]), c.set(a.startsWith("scale") ? 1 : 0));
    }),
    o
  );
}
const positionalValues = {
  width: ({ x: e }, { paddingLeft: o = "0", paddingRight: a = "0" }) =>
    e.max - e.min - parseFloat(o) - parseFloat(a),
  height: ({ y: e }, { paddingTop: o = "0", paddingBottom: a = "0" }) =>
    e.max - e.min - parseFloat(o) - parseFloat(a),
  top: (e, { top: o }) => parseFloat(o),
  left: (e, { left: o }) => parseFloat(o),
  bottom: ({ y: e }, { top: o }) => parseFloat(o) + (e.max - e.min),
  right: ({ x: e }, { left: o }) => parseFloat(o) + (e.max - e.min),
  x: (e, { transform: o }) => parseValueFromTransform(o, "x"),
  y: (e, { transform: o }) => parseValueFromTransform(o, "y"),
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
const toResolve = new Set();
let isScheduled = !1,
  anyNeedsMeasurement = !1,
  isForced = !1;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const e = Array.from(toResolve).filter((c) => c.needsMeasurement),
      o = new Set(e.map((c) => c.element)),
      a = new Map();
    (o.forEach((c) => {
      const d = removeNonTranslationalTransform(c);
      d.length && (a.set(c, d), c.render());
    }),
      e.forEach((c) => c.measureInitialState()),
      o.forEach((c) => {
        c.render();
        const d = a.get(c);
        d &&
          d.forEach(([h, g]) => {
            var b;
            (b = c.getValue(h)) == null || b.set(g);
          });
      }),
      e.forEach((c) => c.measureEndState()),
      e.forEach((c) => {
        c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
      }));
  }
  ((anyNeedsMeasurement = !1),
    (isScheduled = !1),
    toResolve.forEach((e) => e.complete(isForced)),
    toResolve.clear());
}
function readAllKeyframes() {
  toResolve.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (anyNeedsMeasurement = !0));
  });
}
function flushKeyframeResolvers() {
  ((isForced = !0), readAllKeyframes(), measureAllKeyframes(), (isForced = !1));
}
class KeyframeResolver {
  constructor(o, a, c, d, h, g = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...o]),
      (this.onComplete = a),
      (this.name = c),
      (this.motionValue = d),
      (this.element = h),
      (this.isAsync = g));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (toResolve.add(this),
          isScheduled ||
            ((isScheduled = !0),
            frame.read(readAllKeyframes),
            frame.resolveKeyframes(measureAllKeyframes)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: o,
      name: a,
      element: c,
      motionValue: d,
    } = this;
    if (o[0] === null) {
      const h = d == null ? void 0 : d.get(),
        g = o[o.length - 1];
      if (h !== void 0) o[0] = h;
      else if (c && a) {
        const b = c.readValue(a, g);
        b != null && (o[0] = b);
      }
      (o[0] === void 0 && (o[0] = g), d && h === void 0 && d.set(o[0]));
    }
    fillWildcards(o);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(o = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, o),
      toResolve.delete(this));
  }
  cancel() {
    this.state === "scheduled" &&
      (toResolve.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const isCSSVar = (e) => e.startsWith("--");
function setStyle(e, o, a) {
  isCSSVar(o) ? e.style.setProperty(o, a) : (e.style[o] = a);
}
const supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0),
  supportsFlags = {};
function memoSupports(e, o) {
  const a = memo(e);
  return () => supportsFlags[o] ?? a();
}
const supportsLinearEasing = memoSupports(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  cubicBezierAsString = ([e, o, a, c]) =>
    `cubic-bezier(${e}, ${o}, ${a}, ${c})`,
  supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
  };
function mapEasingToNativeEasing(e, o) {
  if (e)
    return typeof e == "function"
      ? supportsLinearEasing()
        ? generateLinearEasing(e, o)
        : "ease-out"
      : isBezierDefinition(e)
        ? cubicBezierAsString(e)
        : Array.isArray(e)
          ? e.map(
              (a) =>
                mapEasingToNativeEasing(a, o) || supportedWaapiEasing.easeOut,
            )
          : supportedWaapiEasing[e];
}
function startWaapiAnimation(
  e,
  o,
  a,
  {
    delay: c = 0,
    duration: d = 300,
    repeat: h = 0,
    repeatType: g = "loop",
    ease: b = "easeOut",
    times: j,
  } = {},
  $ = void 0,
) {
  const _e = { [o]: a };
  j && (_e.offset = j);
  const et = mapEasingToNativeEasing(b, d);
  Array.isArray(et) && (_e.easing = et);
  const nt = {
    delay: c,
    duration: d,
    easing: Array.isArray(et) ? "linear" : et,
    fill: "both",
    iterations: h + 1,
    direction: g === "reverse" ? "alternate" : "normal",
  };
  return ($ && (nt.pseudoElement = $), e.animate(_e, nt));
}
function isGenerator(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function applyGeneratorOptions({ type: e, ...o }) {
  return isGenerator(e) && supportsLinearEasing()
    ? e.applyToOptions(o)
    : (o.duration ?? (o.duration = 300), o.ease ?? (o.ease = "easeOut"), o);
}
class NativeAnimation extends WithPromise {
  constructor(o) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !o))
      return;
    const {
      element: a,
      name: c,
      keyframes: d,
      pseudoElement: h,
      allowFlatten: g = !1,
      finalKeyframe: b,
      onComplete: j,
    } = o;
    ((this.isPseudoElement = !!h),
      (this.allowFlatten = g),
      (this.options = o),
      invariant(typeof o.type != "string"));
    const $ = applyGeneratorOptions(o);
    ((this.animation = startWaapiAnimation(a, c, d, $, h)),
      $.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const _e = getFinalKeyframe$1(d, this.options, b, this.speed);
          (this.updateMotionValue
            ? this.updateMotionValue(_e)
            : setStyle(a, c, _e),
            this.animation.cancel());
        }
        (j == null || j(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var o, a;
    (a = (o = this.animation).finish) == null || a.call(o);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: o } = this;
    o === "idle" ||
      o === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var o, a;
    this.isPseudoElement ||
      (a = (o = this.animation).commitStyles) == null ||
      a.call(o);
  }
  get duration() {
    var a, c;
    const o =
      ((c =
        (a = this.animation.effect) == null ? void 0 : a.getComputedTiming) ==
      null
        ? void 0
        : c.call(a).duration) || 0;
    return millisecondsToSeconds(Number(o));
  }
  get time() {
    return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
  }
  set time(o) {
    ((this.finishedTime = null),
      (this.animation.currentTime = secondsToMilliseconds(o)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(o) {
    (o < 0 && (this.finishedTime = null), (this.animation.playbackRate = o));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(o) {
    this.animation.startTime = o;
  }
  attachTimeline({ timeline: o, observe: a }) {
    var c;
    return (
      this.allowFlatten &&
        ((c = this.animation.effect) == null ||
          c.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      o && supportsScrollTimeline()
        ? ((this.animation.timeline = o), noop)
        : a(this)
    );
  }
}
const unsupportedEasingFunctions = { anticipate, backInOut, circInOut };
function isUnsupportedEase(e) {
  return e in unsupportedEasingFunctions;
}
function replaceStringEasing(e) {
  typeof e.ease == "string" &&
    isUnsupportedEase(e.ease) &&
    (e.ease = unsupportedEasingFunctions[e.ease]);
}
const sampleDelta = 10;
class NativeAnimationExtended extends NativeAnimation {
  constructor(o) {
    (replaceStringEasing(o),
      replaceTransitionType(o),
      super(o),
      o.startTime && (this.startTime = o.startTime),
      (this.options = o));
  }
  updateMotionValue(o) {
    const {
      motionValue: a,
      onUpdate: c,
      onComplete: d,
      element: h,
      ...g
    } = this.options;
    if (!a) return;
    if (o !== void 0) {
      a.set(o);
      return;
    }
    const b = new JSAnimation({ ...g, autoplay: !1 }),
      j = secondsToMilliseconds(this.finishedTime ?? this.time);
    (a.setWithVelocity(
      b.sample(j - sampleDelta).value,
      b.sample(j).value,
      sampleDelta,
    ),
      b.stop());
  }
}
const isAnimatable = (e, o) =>
  o === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (complex.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function hasKeyframesChanged(e) {
  const o = e[0];
  if (e.length === 1) return !0;
  for (let a = 0; a < e.length; a++) if (e[a] !== o) return !0;
}
function canAnimate(e, o, a, c) {
  const d = e[0];
  if (d === null) return !1;
  if (o === "display" || o === "visibility") return !0;
  const h = e[e.length - 1],
    g = isAnimatable(d, o),
    b = isAnimatable(h, o);
  return !g || !b
    ? !1
    : hasKeyframesChanged(e) || ((a === "spring" || isGenerator(a)) && c);
}
function isHTMLElement(e) {
  return isObject(e) && "offsetHeight" in e;
}
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
  ]),
  supportsWaapi = memo(() =>
    Object.hasOwnProperty.call(Element.prototype, "animate"),
  );
function supportsBrowserAnimation(e) {
  var $;
  const {
    motionValue: o,
    name: a,
    repeatDelay: c,
    repeatType: d,
    damping: h,
    type: g,
  } = e;
  if (
    !isHTMLElement(
      ($ = o == null ? void 0 : o.owner) == null ? void 0 : $.current,
    )
  )
    return !1;
  const { onUpdate: b, transformTemplate: j } = o.owner.getProps();
  return (
    supportsWaapi() &&
    a &&
    acceleratedValues.has(a) &&
    (a !== "transform" || !j) &&
    !b &&
    !c &&
    d !== "mirror" &&
    h !== 0 &&
    g !== "inertia"
  );
}
const MAX_RESOLVE_DELAY = 40;
class AsyncMotionValueAnimation extends WithPromise {
  constructor({
    autoplay: o = !0,
    delay: a = 0,
    type: c = "keyframes",
    repeat: d = 0,
    repeatDelay: h = 0,
    repeatType: g = "loop",
    keyframes: b,
    name: j,
    motionValue: $,
    element: _e,
    ...et
  }) {
    var lt;
    (super(),
      (this.stop = () => {
        var ut, gt;
        (this._animation &&
          (this._animation.stop(),
          (ut = this.stopTimeline) == null || ut.call(this)),
          (gt = this.keyframeResolver) == null || gt.cancel());
      }),
      (this.createdAt = time.now()));
    const nt = {
        autoplay: o,
        delay: a,
        type: c,
        repeat: d,
        repeatDelay: h,
        repeatType: g,
        name: j,
        motionValue: $,
        element: _e,
        ...et,
      },
      ot = (_e == null ? void 0 : _e.KeyframeResolver) || KeyframeResolver;
    ((this.keyframeResolver = new ot(
      b,
      (ut, gt, it) => this.onKeyframesResolved(ut, gt, nt, !it),
      j,
      $,
      _e,
    )),
      (lt = this.keyframeResolver) == null || lt.scheduleResolve());
  }
  onKeyframesResolved(o, a, c, d) {
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: g,
      velocity: b,
      delay: j,
      isHandoff: $,
      onUpdate: _e,
    } = c;
    ((this.resolvedAt = time.now()),
      canAnimate(o, h, g, b) ||
        ((MotionGlobalConfig.instantAnimations || !j) &&
          (_e == null || _e(getFinalKeyframe$1(o, c, a))),
        (o[0] = o[o.length - 1]),
        (c.duration = 0),
        (c.repeat = 0)));
    const nt = {
        startTime: d
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: a,
        ...c,
        keyframes: o,
      },
      ot =
        !$ && supportsBrowserAnimation(nt)
          ? new NativeAnimationExtended({
              ...nt,
              element: nt.motionValue.owner.current,
            })
          : new JSAnimation(nt);
    (ot.finished.then(() => this.notifyFinished()).catch(noop),
      this.pendingTimeline &&
        ((this.stopTimeline = ot.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = ot));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(o, a) {
    return this.finished.finally(o).then(() => {});
  }
  get animation() {
    var o;
    return (
      this._animation ||
        ((o = this.keyframeResolver) == null || o.resume(),
        flushKeyframeResolvers()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(o) {
    this.animation.time = o;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(o) {
    this.animation.speed = o;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(o) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(o))
        : (this.pendingTimeline = o),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var o;
    (this._animation && this.animation.cancel(),
      (o = this.keyframeResolver) == null || o.cancel());
  }
}
const splitCSSVariableRegex =
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(e) {
  const o = splitCSSVariableRegex.exec(e);
  if (!o) return [,];
  const [, a, c, d] = o;
  return [`--${a ?? c}`, d];
}
function getVariableValue(e, o, a = 1) {
  const [c, d] = parseCSSVariable(e);
  if (!c) return;
  const h = window.getComputedStyle(o).getPropertyValue(c);
  if (h) {
    const g = h.trim();
    return isNumericalString(g) ? parseFloat(g) : g;
  }
  return isCSSVariableToken(d) ? getVariableValue(d, o, a + 1) : d;
}
function getValueTransition(e, o) {
  return (e == null ? void 0 : e[o]) ?? (e == null ? void 0 : e.default) ?? e;
}
const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder,
  ]),
  auto = { test: (e) => e === "auto", parse: (e) => e },
  testValueType = (e) => (o) => o.test(e),
  dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto],
  findDimensionValueType = (e) => dimensionValueTypes.find(testValueType(e));
function isNone(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || isZeroValueString(e)
      : !0;
}
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(e) {
  const [o, a] = e.slice(0, -1).split("(");
  if (o === "drop-shadow") return e;
  const [c] = a.match(floatRegex) || [];
  if (!c) return e;
  const d = a.replace(c, "");
  let h = maxDefaults.has(o) ? 1 : 0;
  return (c !== a && (h *= 100), o + "(" + h + d + ")");
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu,
  filter = {
    ...complex,
    getAnimatableNone: (e) => {
      const o = e.match(functionRegex);
      return o ? o.map(applyDefaultFilter).join(" ") : e;
    },
  },
  int = { ...number, transform: Math.round },
  transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
  },
  numberValueTypes = {
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    backgroundPositionX: px,
    backgroundPositionY: px,
    ...transformValueTypes,
    zIndex: int,
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int,
  },
  defaultValueTypes = {
    ...numberValueTypes,
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter,
  },
  getDefaultValueType = (e) => defaultValueTypes[e];
function getAnimatableNone(e, o) {
  let a = getDefaultValueType(e);
  return (
    a !== filter && (a = complex),
    a.getAnimatableNone ? a.getAnimatableNone(o) : void 0
  );
}
const invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(e, o, a) {
  let c = 0,
    d;
  for (; c < e.length && !d; ) {
    const h = e[c];
    (typeof h == "string" &&
      !invalidTemplates.has(h) &&
      analyseComplexValue(h).values.length &&
      (d = e[c]),
      c++);
  }
  if (d && a) for (const h of o) e[h] = getAnimatableNone(a, d);
}
class DOMKeyframesResolver extends KeyframeResolver {
  constructor(o, a, c, d, h) {
    super(o, a, c, d, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: o, element: a, name: c } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let j = 0; j < o.length; j++) {
      let $ = o[j];
      if (typeof $ == "string" && (($ = $.trim()), isCSSVariableToken($))) {
        const _e = getVariableValue($, a.current);
        (_e !== void 0 && (o[j] = _e),
          j === o.length - 1 && (this.finalKeyframe = $));
      }
    }
    if ((this.resolveNoneKeyframes(), !positionalKeys.has(c) || o.length !== 2))
      return;
    const [d, h] = o,
      g = findDimensionValueType(d),
      b = findDimensionValueType(h);
    if (g !== b)
      if (isNumOrPxType(g) && isNumOrPxType(b))
        for (let j = 0; j < o.length; j++) {
          const $ = o[j];
          typeof $ == "string" && (o[j] = parseFloat($));
        }
      else positionalValues[c] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: o, name: a } = this,
      c = [];
    for (let d = 0; d < o.length; d++)
      (o[d] === null || isNone(o[d])) && c.push(d);
    c.length && makeNoneKeyframesAnimatable(o, c, a);
  }
  measureInitialState() {
    const { element: o, unresolvedKeyframes: a, name: c } = this;
    if (!o || !o.current) return;
    (c === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = positionalValues[c](
        o.measureViewportBox(),
        window.getComputedStyle(o.current),
      )),
      (a[0] = this.measuredOrigin));
    const d = a[a.length - 1];
    d !== void 0 && o.getValue(c, d).jump(d, !1);
  }
  measureEndState() {
    var b;
    const { element: o, name: a, unresolvedKeyframes: c } = this;
    if (!o || !o.current) return;
    const d = o.getValue(a);
    d && d.jump(this.measuredOrigin, !1);
    const h = c.length - 1,
      g = c[h];
    ((c[h] = positionalValues[a](
      o.measureViewportBox(),
      window.getComputedStyle(o.current),
    )),
      g !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = g),
      (b = this.removedTransforms) != null &&
        b.length &&
        this.removedTransforms.forEach(([j, $]) => {
          o.getValue(j).set($);
        }),
      this.resolveNoneKeyframes());
  }
}
function resolveElements(e, o, a) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let c = document;
    o && (c = o.current);
    const d = (a == null ? void 0 : a[e]) ?? c.querySelectorAll(e);
    return d ? Array.from(d) : [];
  }
  return Array.from(e);
}
const getValueAsType = (e, o) =>
    o && typeof e == "number" ? o.transform(e) : e,
  MAX_VELOCITY_DELTA = 30,
  isFloat = (e) => !isNaN(parseFloat(e));
class MotionValue {
  constructor(o, a = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (c, d = !0) => {
        var g, b;
        const h = time.now();
        if (
          (this.updatedAt !== h && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(c),
          this.current !== this.prev &&
            ((g = this.events.change) == null || g.notify(this.current),
            this.dependents))
        )
          for (const j of this.dependents) j.dirty();
        d &&
          ((b = this.events.renderRequest) == null || b.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(o),
      (this.owner = a.owner));
  }
  setCurrent(o) {
    ((this.current = o),
      (this.updatedAt = time.now()),
      this.canTrackVelocity === null &&
        o !== void 0 &&
        (this.canTrackVelocity = isFloat(this.current)));
  }
  setPrevFrameValue(o = this.current) {
    ((this.prevFrameValue = o), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(o) {
    return this.on("change", o);
  }
  on(o, a) {
    this.events[o] || (this.events[o] = new SubscriptionManager());
    const c = this.events[o].add(a);
    return o === "change"
      ? () => {
          (c(),
            frame.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : c;
  }
  clearListeners() {
    for (const o in this.events) this.events[o].clear();
  }
  attach(o, a) {
    ((this.passiveEffect = o), (this.stopPassiveEffect = a));
  }
  set(o, a = !0) {
    !a || !this.passiveEffect
      ? this.updateAndNotify(o, a)
      : this.passiveEffect(o, this.updateAndNotify);
  }
  setWithVelocity(o, a, c) {
    (this.set(a),
      (this.prev = void 0),
      (this.prevFrameValue = o),
      (this.prevUpdatedAt = this.updatedAt - c));
  }
  jump(o, a = !0) {
    (this.updateAndNotify(o),
      (this.prev = o),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var o;
    (o = this.events.change) == null || o.notify(this.current);
  }
  addDependent(o) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(o));
  }
  removeDependent(o) {
    this.dependents && this.dependents.delete(o);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const o = time.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      o - this.updatedAt > MAX_VELOCITY_DELTA
    )
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(
      parseFloat(this.current) - parseFloat(this.prevFrameValue),
      a,
    );
  }
  start(o) {
    return (
      this.stop(),
      new Promise((a) => {
        ((this.hasAnimated = !0),
          (this.animation = o(a)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var o, a;
    ((o = this.dependents) == null || o.clear(),
      (a = this.events.destroy) == null || a.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function motionValue(e, o) {
  return new MotionValue(e, o);
}
const { schedule: microtask, cancel: cancelMicrotask } = createRenderBatcher(
    queueMicrotask,
    !1,
  ),
  isDragging = { x: !1, y: !1 };
function isDragActive() {
  return isDragging.x || isDragging.y;
}
function setDragLock(e) {
  return e === "x" || e === "y"
    ? isDragging[e]
      ? null
      : ((isDragging[e] = !0),
        () => {
          isDragging[e] = !1;
        })
    : isDragging.x || isDragging.y
      ? null
      : ((isDragging.x = isDragging.y = !0),
        () => {
          isDragging.x = isDragging.y = !1;
        });
}
function setupGesture(e, o) {
  const a = resolveElements(e),
    c = new AbortController(),
    d = { passive: !0, ...o, signal: c.signal };
  return [a, d, () => c.abort()];
}
function isValidHover(e) {
  return !(e.pointerType === "touch" || isDragActive());
}
function hover(e, o, a = {}) {
  const [c, d, h] = setupGesture(e, a),
    g = (b) => {
      if (!isValidHover(b)) return;
      const { target: j } = b,
        $ = o(j, b);
      if (typeof $ != "function" || !j) return;
      const _e = (et) => {
        isValidHover(et) && ($(et), j.removeEventListener("pointerleave", _e));
      };
      j.addEventListener("pointerleave", _e, d);
    };
  return (
    c.forEach((b) => {
      b.addEventListener("pointerenter", g, d);
    }),
    h
  );
}
const isNodeOrChild = (e, o) =>
    o ? (e === o ? !0 : isNodeOrChild(e, o.parentElement)) : !1,
  isPrimaryPointer = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  focusableElements = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function isElementKeyboardAccessible(e) {
  return focusableElements.has(e.tagName) || e.tabIndex !== -1;
}
const isPressing = new WeakSet();
function filterEvents(e) {
  return (o) => {
    o.key === "Enter" && e(o);
  };
}
function firePointerEvent(e, o) {
  e.dispatchEvent(
    new PointerEvent("pointer" + o, { isPrimary: !0, bubbles: !0 }),
  );
}
const enableKeyboardPress = (e, o) => {
  const a = e.currentTarget;
  if (!a) return;
  const c = filterEvents(() => {
    if (isPressing.has(a)) return;
    firePointerEvent(a, "down");
    const d = filterEvents(() => {
        firePointerEvent(a, "up");
      }),
      h = () => firePointerEvent(a, "cancel");
    (a.addEventListener("keyup", d, o), a.addEventListener("blur", h, o));
  });
  (a.addEventListener("keydown", c, o),
    a.addEventListener("blur", () => a.removeEventListener("keydown", c), o));
};
function isValidPressEvent(e) {
  return isPrimaryPointer(e) && !isDragActive();
}
function press(e, o, a = {}) {
  const [c, d, h] = setupGesture(e, a),
    g = (b) => {
      const j = b.currentTarget;
      if (!isValidPressEvent(b)) return;
      isPressing.add(j);
      const $ = o(j, b),
        _e = (ot, lt) => {
          (window.removeEventListener("pointerup", et),
            window.removeEventListener("pointercancel", nt),
            isPressing.has(j) && isPressing.delete(j),
            isValidPressEvent(ot) &&
              typeof $ == "function" &&
              $(ot, { success: lt }));
        },
        et = (ot) => {
          _e(
            ot,
            j === window ||
              j === document ||
              a.useGlobalTarget ||
              isNodeOrChild(j, ot.target),
          );
        },
        nt = (ot) => {
          _e(ot, !1);
        };
      (window.addEventListener("pointerup", et, d),
        window.addEventListener("pointercancel", nt, d));
    };
  return (
    c.forEach((b) => {
      ((a.useGlobalTarget ? window : b).addEventListener("pointerdown", g, d),
        isHTMLElement(b) &&
          (b.addEventListener("focus", ($) => enableKeyboardPress($, d)),
          !isElementKeyboardAccessible(b) &&
            !b.hasAttribute("tabindex") &&
            (b.tabIndex = 0)));
    }),
    h
  );
}
function isSVGElement(e) {
  return isObject(e) && "ownerSVGElement" in e;
}
function isSVGSVGElement(e) {
  return isSVGElement(e) && e.tagName === "svg";
}
const isMotionValue = (e) => !!(e && e.getVelocity),
  valueTypes = [...dimensionValueTypes, color, complex],
  findValueType = (e) => valueTypes.find(testValueType(e)),
  MotionConfigContext = reactExports.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(o) {
    const a = this.props.childRef.current;
    if (a && o.isPresent && !this.props.isPresent) {
      const c = a.offsetParent,
        d = (isHTMLElement(c) && c.offsetWidth) || 0,
        h = this.props.sizeRef.current;
      ((h.height = a.offsetHeight || 0),
        (h.width = a.offsetWidth || 0),
        (h.top = a.offsetTop),
        (h.left = a.offsetLeft),
        (h.right = d - h.width - h.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function PopChild({ children: e, isPresent: o, anchorX: a, root: c }) {
  const d = reactExports.useId(),
    h = reactExports.useRef(null),
    g = reactExports.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: b } = reactExports.useContext(MotionConfigContext);
  return (
    reactExports.useInsertionEffect(() => {
      const { width: j, height: $, top: _e, left: et, right: nt } = g.current;
      if (o || !h.current || !j || !$) return;
      const ot = a === "left" ? `left: ${et}` : `right: ${nt}`;
      h.current.dataset.motionPopId = d;
      const lt = document.createElement("style");
      b && (lt.nonce = b);
      const ut = c ?? document.head;
      return (
        ut.appendChild(lt),
        lt.sheet &&
          lt.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${j}px !important;
            height: ${$}px !important;
            ${ot}px !important;
            top: ${_e}px !important;
          }
        `),
        () => {
          (ut.removeChild(lt), ut.contains(lt) && ut.removeChild(lt));
        }
      );
    }, [o]),
    jsxRuntimeExports.jsx(PopChildMeasure, {
      isPresent: o,
      childRef: h,
      sizeRef: g,
      children: reactExports.cloneElement(e, { ref: h }),
    })
  );
}
const PresenceChild = ({
  children: e,
  initial: o,
  isPresent: a,
  onExitComplete: c,
  custom: d,
  presenceAffectsLayout: h,
  mode: g,
  anchorX: b,
  root: j,
}) => {
  const $ = useConstant(newChildrenMap),
    _e = reactExports.useId();
  let et = !0,
    nt = reactExports.useMemo(
      () => (
        (et = !1),
        {
          id: _e,
          initial: o,
          isPresent: a,
          custom: d,
          onExitComplete: (ot) => {
            $.set(ot, !0);
            for (const lt of $.values()) if (!lt) return;
            c && c();
          },
          register: (ot) => ($.set(ot, !1), () => $.delete(ot)),
        }
      ),
      [a, $, c],
    );
  return (
    h && et && (nt = { ...nt }),
    reactExports.useMemo(() => {
      $.forEach((ot, lt) => $.set(lt, !1));
    }, [a]),
    reactExports.useEffect(() => {
      !a && !$.size && c && c();
    }, [a]),
    g === "popLayout" &&
      (e = jsxRuntimeExports.jsx(PopChild, {
        isPresent: a,
        anchorX: b,
        root: j,
        children: e,
      })),
    jsxRuntimeExports.jsx(PresenceContext.Provider, { value: nt, children: e })
  );
};
function newChildrenMap() {
  return new Map();
}
function usePresence(e = !0) {
  const o = reactExports.useContext(PresenceContext);
  if (o === null) return [!0, null];
  const { isPresent: a, onExitComplete: c, register: d } = o,
    h = reactExports.useId();
  reactExports.useEffect(() => {
    if (e) return d(h);
  }, [e]);
  const g = reactExports.useCallback(() => e && c && c(h), [h, c, e]);
  return !a && c ? [!1, g] : [!0];
}
const getChildKey = (e) => e.key || "";
function onlyElements(e) {
  const o = [];
  return (
    reactExports.Children.forEach(e, (a) => {
      reactExports.isValidElement(a) && o.push(a);
    }),
    o
  );
}
const AnimatePresence = ({
    children: e,
    custom: o,
    initial: a = !0,
    onExitComplete: c,
    presenceAffectsLayout: d = !0,
    mode: h = "sync",
    propagate: g = !1,
    anchorX: b = "left",
    root: j,
  }) => {
    const [$, _e] = usePresence(g),
      et = reactExports.useMemo(() => onlyElements(e), [e]),
      nt = g && !$ ? [] : et.map(getChildKey),
      ot = reactExports.useRef(!0),
      lt = reactExports.useRef(et),
      ut = useConstant(() => new Map()),
      [gt, it] = reactExports.useState(et),
      [rt, st] = reactExports.useState(et);
    useIsomorphicLayoutEffect(() => {
      ((ot.current = !1), (lt.current = et));
      for (let pt = 0; pt < rt.length; pt++) {
        const mt = getChildKey(rt[pt]);
        nt.includes(mt) ? ut.delete(mt) : ut.get(mt) !== !0 && ut.set(mt, !1);
      }
    }, [rt, nt.length, nt.join("-")]);
    const ct = [];
    if (et !== gt) {
      let pt = [...et];
      for (let mt = 0; mt < rt.length; mt++) {
        const dt = rt[mt],
          wt = getChildKey(dt);
        nt.includes(wt) || (pt.splice(mt, 0, dt), ct.push(dt));
      }
      return (
        h === "wait" && ct.length && (pt = ct),
        st(onlyElements(pt)),
        it(et),
        null
      );
    }
    const { forceRender: ft } = reactExports.useContext(LayoutGroupContext);
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: rt.map((pt) => {
        const mt = getChildKey(pt),
          dt = g && !$ ? !1 : et === rt || nt.includes(mt),
          wt = () => {
            if (ut.has(mt)) ut.set(mt, !0);
            else return;
            let bt = !0;
            (ut.forEach((Ct) => {
              Ct || (bt = !1);
            }),
              bt &&
                (ft == null || ft(),
                st(lt.current),
                g && (_e == null || _e()),
                c && c()));
          };
        return jsxRuntimeExports.jsx(
          PresenceChild,
          {
            isPresent: dt,
            initial: !ot.current || a ? void 0 : !1,
            custom: o,
            presenceAffectsLayout: d,
            mode: h,
            root: j,
            onExitComplete: dt ? void 0 : wt,
            anchorX: b,
            children: pt,
          },
          mt,
        );
      }),
    });
  },
  LazyContext = reactExports.createContext({ strict: !1 }),
  featureProps = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  featureDefinitions = {};
for (const e in featureProps)
  featureDefinitions[e] = {
    isEnabled: (o) => featureProps[e].some((a) => !!o[a]),
  };
function loadFeatures(e) {
  for (const o in e)
    featureDefinitions[o] = { ...featureDefinitions[o], ...e[o] };
}
const validMotionProps = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function isValidMotionProp(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    validMotionProps.has(e)
  );
}
let shouldForward = (e) => !isValidMotionProp(e);
function loadExternalIsValidProp(e) {
  typeof e == "function" &&
    (shouldForward = (o) =>
      o.startsWith("on") ? !isValidMotionProp(o) : e(o));
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch {}
function filterProps(e, o, a) {
  const c = {};
  for (const d in e)
    (d === "values" && typeof e.values == "object") ||
      ((shouldForward(d) ||
        (a === !0 && isValidMotionProp(d)) ||
        (!o && !isValidMotionProp(d)) ||
        (e.draggable && d.startsWith("onDrag"))) &&
        (c[d] = e[d]));
  return c;
}
function createDOMMotionComponentProxy(e) {
  if (typeof Proxy > "u") return e;
  const o = new Map(),
    a = (...c) => e(...c);
  return new Proxy(a, {
    get: (c, d) =>
      d === "create" ? e : (o.has(d) || o.set(d, e(d)), o.get(d)),
  });
}
const MotionContext = reactExports.createContext({});
function isAnimationControls(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function isVariantLabel(e) {
  return typeof e == "string" || Array.isArray(e);
}
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(e) {
  return (
    isAnimationControls(e.animate) ||
    variantProps.some((o) => isVariantLabel(e[o]))
  );
}
function isVariantNode(e) {
  return !!(isControllingVariants(e) || e.variants);
}
function getCurrentTreeVariants(e, o) {
  if (isControllingVariants(e)) {
    const { initial: a, animate: c } = e;
    return {
      initial: a === !1 || isVariantLabel(a) ? a : void 0,
      animate: isVariantLabel(c) ? c : void 0,
    };
  }
  return e.inherit !== !1 ? o : {};
}
function useCreateMotionContext(e) {
  const { initial: o, animate: a } = getCurrentTreeVariants(
    e,
    reactExports.useContext(MotionContext),
  );
  return reactExports.useMemo(
    () => ({ initial: o, animate: a }),
    [variantLabelsAsDependency(o), variantLabelsAsDependency(a)],
  );
}
function variantLabelsAsDependency(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const motionComponentSymbol = Symbol.for("motionComponentSymbol");
function isRefObject(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function useMotionRef(e, o, a) {
  return reactExports.useCallback(
    (c) => {
      (c && e.onMount && e.onMount(c),
        o && (c ? o.mount(c) : o.unmount()),
        a &&
          (typeof a == "function" ? a(c) : isRefObject(a) && (a.current = c)));
    },
    [o],
  );
}
const camelToDash = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  optimizedAppearDataId = "framerAppearId",
  optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId),
  SwitchLayoutGroupContext = reactExports.createContext({});
function useVisualElement(e, o, a, c, d) {
  var ut, gt;
  const { visualElement: h } = reactExports.useContext(MotionContext),
    g = reactExports.useContext(LazyContext),
    b = reactExports.useContext(PresenceContext),
    j = reactExports.useContext(MotionConfigContext).reducedMotion,
    $ = reactExports.useRef(null);
  ((c = c || g.renderer),
    !$.current &&
      c &&
      ($.current = c(e, {
        visualState: o,
        parent: h,
        props: a,
        presenceContext: b,
        blockInitialAnimation: b ? b.initial === !1 : !1,
        reducedMotionConfig: j,
      })));
  const _e = $.current,
    et = reactExports.useContext(SwitchLayoutGroupContext);
  _e &&
    !_e.projection &&
    d &&
    (_e.type === "html" || _e.type === "svg") &&
    createProjectionNode$1($.current, a, d, et);
  const nt = reactExports.useRef(!1);
  reactExports.useInsertionEffect(() => {
    _e && nt.current && _e.update(a, b);
  });
  const ot = a[optimizedAppearDataAttribute],
    lt = reactExports.useRef(
      !!ot &&
        !(
          (ut = window.MotionHandoffIsComplete) != null && ut.call(window, ot)
        ) &&
        ((gt = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : gt.call(window, ot)),
    );
  return (
    useIsomorphicLayoutEffect(() => {
      _e &&
        ((nt.current = !0),
        (window.MotionIsMounted = !0),
        _e.updateFeatures(),
        microtask.render(_e.render),
        lt.current && _e.animationState && _e.animationState.animateChanges());
    }),
    reactExports.useEffect(() => {
      _e &&
        (!lt.current && _e.animationState && _e.animationState.animateChanges(),
        lt.current &&
          (queueMicrotask(() => {
            var it;
            (it = window.MotionHandoffMarkAsComplete) == null ||
              it.call(window, ot);
          }),
          (lt.current = !1)));
    }),
    _e
  );
}
function createProjectionNode$1(e, o, a, c) {
  const {
    layoutId: d,
    layout: h,
    drag: g,
    dragConstraints: b,
    layoutScroll: j,
    layoutRoot: $,
    layoutCrossfade: _e,
  } = o;
  ((e.projection = new a(
    e.latestValues,
    o["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(e.parent),
  )),
    e.projection.setOptions({
      layoutId: d,
      layout: h,
      alwaysMeasureLayout: !!g || (b && isRefObject(b)),
      visualElement: e,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: c,
      crossfade: _e,
      layoutScroll: j,
      layoutRoot: $,
    }));
}
function getClosestProjectingNode(e) {
  if (e)
    return e.options.allowProjection !== !1
      ? e.projection
      : getClosestProjectingNode(e.parent);
}
function createRendererMotionComponent({
  preloadedFeatures: e,
  createVisualElement: o,
  useRender: a,
  useVisualState: c,
  Component: d,
}) {
  e && loadFeatures(e);
  function h(b, j) {
    let $;
    const _e = {
        ...reactExports.useContext(MotionConfigContext),
        ...b,
        layoutId: useLayoutId(b),
      },
      { isStatic: et } = _e,
      nt = useCreateMotionContext(b),
      ot = c(b, et);
    if (!et && isBrowser) {
      useStrictMode();
      const lt = getProjectionFunctionality(_e);
      (($ = lt.MeasureLayout),
        (nt.visualElement = useVisualElement(d, ot, _e, o, lt.ProjectionNode)));
    }
    return jsxRuntimeExports.jsxs(MotionContext.Provider, {
      value: nt,
      children: [
        $ && nt.visualElement
          ? jsxRuntimeExports.jsx($, { visualElement: nt.visualElement, ..._e })
          : null,
        a(
          d,
          b,
          useMotionRef(ot, nt.visualElement, j),
          ot,
          et,
          nt.visualElement,
        ),
      ],
    });
  }
  h.displayName = `motion.${typeof d == "string" ? d : `create(${d.displayName ?? d.name ?? ""})`}`;
  const g = reactExports.forwardRef(h);
  return ((g[motionComponentSymbol] = d), g);
}
function useLayoutId({ layoutId: e }) {
  const o = reactExports.useContext(LayoutGroupContext).id;
  return o && e !== void 0 ? o + "-" + e : e;
}
function useStrictMode(e, o) {
  reactExports.useContext(LazyContext).strict;
}
function getProjectionFunctionality(e) {
  const { drag: o, layout: a } = featureDefinitions;
  if (!o && !a) return {};
  const c = { ...o, ...a };
  return {
    MeasureLayout:
      (o != null && o.isEnabled(e)) || (a != null && a.isEnabled(e))
        ? c.MeasureLayout
        : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
const scaleCorrectors = {};
function addScaleCorrector(e) {
  for (const o in e)
    ((scaleCorrectors[o] = e[o]),
      isCSSVariableName(o) && (scaleCorrectors[o].isCSSVariable = !0));
}
function isForcedMotionValue(e, { layout: o, layoutId: a }) {
  return (
    transformProps.has(e) ||
    e.startsWith("origin") ||
    ((o || a !== void 0) && (!!scaleCorrectors[e] || e === "opacity"))
  );
}
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  numTransforms = transformPropOrder.length;
function buildTransform(e, o, a) {
  let c = "",
    d = !0;
  for (let h = 0; h < numTransforms; h++) {
    const g = transformPropOrder[h],
      b = e[g];
    if (b === void 0) continue;
    let j = !0;
    if (
      (typeof b == "number"
        ? (j = b === (g.startsWith("scale") ? 1 : 0))
        : (j = parseFloat(b) === 0),
      !j || a)
    ) {
      const $ = getValueAsType(b, numberValueTypes[g]);
      if (!j) {
        d = !1;
        const _e = translateAlias[g] || g;
        c += `${_e}(${$}) `;
      }
      a && (o[g] = $);
    }
  }
  return ((c = c.trim()), a ? (c = a(o, d ? "" : c)) : d && (c = "none"), c);
}
function buildHTMLStyles(e, o, a) {
  const { style: c, vars: d, transformOrigin: h } = e;
  let g = !1,
    b = !1;
  for (const j in o) {
    const $ = o[j];
    if (transformProps.has(j)) {
      g = !0;
      continue;
    } else if (isCSSVariableName(j)) {
      d[j] = $;
      continue;
    } else {
      const _e = getValueAsType($, numberValueTypes[j]);
      j.startsWith("origin") ? ((b = !0), (h[j] = _e)) : (c[j] = _e);
    }
  }
  if (
    (o.transform ||
      (g || a
        ? (c.transform = buildTransform(o, e.transform, a))
        : c.transform && (c.transform = "none")),
    b)
  ) {
    const { originX: j = "50%", originY: $ = "50%", originZ: _e = 0 } = h;
    c.transformOrigin = `${j} ${$} ${_e}`;
  }
}
const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {},
});
function copyRawValuesOnly(e, o, a) {
  for (const c in o)
    !isMotionValue(o[c]) && !isForcedMotionValue(c, a) && (e[c] = o[c]);
}
function useInitialMotionValues({ transformTemplate: e }, o) {
  return reactExports.useMemo(() => {
    const a = createHtmlRenderState();
    return (buildHTMLStyles(a, o, e), Object.assign({}, a.vars, a.style));
  }, [o]);
}
function useStyle(e, o) {
  const a = e.style || {},
    c = {};
  return (
    copyRawValuesOnly(c, a, e),
    Object.assign(c, useInitialMotionValues(e, o)),
    c
  );
}
function useHTMLProps(e, o) {
  const a = {},
    c = useStyle(e, o);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((a.draggable = !1),
      (c.userSelect = c.WebkitUserSelect = c.WebkitTouchCallout = "none"),
      (c.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (a.tabIndex = 0),
    (a.style = c),
    a
  );
}
const dashKeys = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  camelKeys = { offset: "strokeDashoffset", array: "strokeDasharray" };
function buildSVGPath(e, o, a = 1, c = 0, d = !0) {
  e.pathLength = 1;
  const h = d ? dashKeys : camelKeys;
  e[h.offset] = px.transform(-c);
  const g = px.transform(o),
    b = px.transform(a);
  e[h.array] = `${g} ${b}`;
}
function buildSVGAttrs(
  e,
  {
    attrX: o,
    attrY: a,
    attrScale: c,
    pathLength: d,
    pathSpacing: h = 1,
    pathOffset: g = 0,
    ...b
  },
  j,
  $,
  _e,
) {
  if ((buildHTMLStyles(e, b, $), j)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: et, style: nt } = e;
  (et.transform && ((nt.transform = et.transform), delete et.transform),
    (nt.transform || et.transformOrigin) &&
      ((nt.transformOrigin = et.transformOrigin ?? "50% 50%"),
      delete et.transformOrigin),
    nt.transform &&
      ((nt.transformBox =
        (_e == null ? void 0 : _e.transformBox) ?? "fill-box"),
      delete et.transformBox),
    o !== void 0 && (et.x = o),
    a !== void 0 && (et.y = a),
    c !== void 0 && (et.scale = c),
    d !== void 0 && buildSVGPath(et, d, h, g, !1));
}
const createSvgRenderState = () => ({ ...createHtmlRenderState(), attrs: {} }),
  isSVGTag = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function useSVGProps(e, o, a, c) {
  const d = reactExports.useMemo(() => {
    const h = createSvgRenderState();
    return (
      buildSVGAttrs(h, o, isSVGTag(c), e.transformTemplate, e.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [o]);
  if (e.style) {
    const h = {};
    (copyRawValuesOnly(h, e.style, e), (d.style = { ...h, ...d.style }));
  }
  return d;
}
const lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function isSVGComponent(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(lowercaseSVGElements.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function createUseRender(e = !1) {
  return (a, c, d, { latestValues: h }, g) => {
    const j = (isSVGComponent(a) ? useSVGProps : useHTMLProps)(c, h, g, a),
      $ = filterProps(c, typeof a == "string", e),
      _e = a !== reactExports.Fragment ? { ...$, ...j, ref: d } : {},
      { children: et } = c,
      nt = reactExports.useMemo(
        () => (isMotionValue(et) ? et.get() : et),
        [et],
      );
    return reactExports.createElement(a, { ..._e, children: nt });
  };
}
function getValueState(e) {
  const o = [{}, {}];
  return (
    e == null ||
      e.values.forEach((a, c) => {
        ((o[0][c] = a.get()), (o[1][c] = a.getVelocity()));
      }),
    o
  );
}
function resolveVariantFromProps(e, o, a, c) {
  if (typeof o == "function") {
    const [d, h] = getValueState(c);
    o = o(a !== void 0 ? a : e.custom, d, h);
  }
  if (
    (typeof o == "string" && (o = e.variants && e.variants[o]),
    typeof o == "function")
  ) {
    const [d, h] = getValueState(c);
    o = o(a !== void 0 ? a : e.custom, d, h);
  }
  return o;
}
function resolveMotionValue(e) {
  return isMotionValue(e) ? e.get() : e;
}
function makeState(
  { scrapeMotionValuesFromProps: e, createRenderState: o },
  a,
  c,
  d,
) {
  return { latestValues: makeLatestValues(a, c, d, e), renderState: o() };
}
const makeUseVisualState = (e) => (o, a) => {
  const c = reactExports.useContext(MotionContext),
    d = reactExports.useContext(PresenceContext),
    h = () => makeState(e, o, c, d);
  return a ? h() : useConstant(h);
};
function makeLatestValues(e, o, a, c) {
  const d = {},
    h = c(e, {});
  for (const nt in h) d[nt] = resolveMotionValue(h[nt]);
  let { initial: g, animate: b } = e;
  const j = isControllingVariants(e),
    $ = isVariantNode(e);
  o &&
    $ &&
    !j &&
    e.inherit !== !1 &&
    (g === void 0 && (g = o.initial), b === void 0 && (b = o.animate));
  let _e = a ? a.initial === !1 : !1;
  _e = _e || g === !1;
  const et = _e ? b : g;
  if (et && typeof et != "boolean" && !isAnimationControls(et)) {
    const nt = Array.isArray(et) ? et : [et];
    for (let ot = 0; ot < nt.length; ot++) {
      const lt = resolveVariantFromProps(e, nt[ot]);
      if (lt) {
        const { transitionEnd: ut, transition: gt, ...it } = lt;
        for (const rt in it) {
          let st = it[rt];
          if (Array.isArray(st)) {
            const ct = _e ? st.length - 1 : 0;
            st = st[ct];
          }
          st !== null && (d[rt] = st);
        }
        for (const rt in ut) d[rt] = ut[rt];
      }
    }
  }
  return d;
}
function scrapeMotionValuesFromProps$1(e, o, a) {
  var h;
  const { style: c } = e,
    d = {};
  for (const g in c)
    (isMotionValue(c[g]) ||
      (o.style && isMotionValue(o.style[g])) ||
      isForcedMotionValue(g, e) ||
      ((h = a == null ? void 0 : a.getValue(g)) == null
        ? void 0
        : h.liveStyle) !== void 0) &&
      (d[g] = c[g]);
  return d;
}
const htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState,
  }),
};
function scrapeMotionValuesFromProps(e, o, a) {
  const c = scrapeMotionValuesFromProps$1(e, o, a);
  for (const d in e)
    if (isMotionValue(e[d]) || isMotionValue(o[d])) {
      const h =
        transformPropOrder.indexOf(d) !== -1
          ? "attr" + d.charAt(0).toUpperCase() + d.substring(1)
          : d;
      c[h] = e[d];
    }
  return c;
}
const svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
  }),
};
function createMotionComponentFactory(e, o) {
  return function (c, { forwardMotionProps: d } = { forwardMotionProps: !1 }) {
    const g = {
      ...(isSVGComponent(c) ? svgMotionConfig : htmlMotionConfig),
      preloadedFeatures: e,
      useRender: createUseRender(d),
      createVisualElement: o,
      Component: c,
    };
    return createRendererMotionComponent(g);
  };
}
function resolveVariant(e, o, a) {
  const c = e.getProps();
  return resolveVariantFromProps(c, o, a !== void 0 ? a : c.custom, e);
}
const isKeyframesTarget = (e) => Array.isArray(e);
function setMotionValue(e, o, a) {
  e.hasValue(o) ? e.getValue(o).set(a) : e.addValue(o, motionValue(a));
}
function resolveFinalValueInKeyframes(e) {
  return isKeyframesTarget(e) ? e[e.length - 1] || 0 : e;
}
function setTarget(e, o) {
  const a = resolveVariant(e, o);
  let { transitionEnd: c = {}, transition: d = {}, ...h } = a || {};
  h = { ...h, ...c };
  for (const g in h) {
    const b = resolveFinalValueInKeyframes(h[g]);
    setMotionValue(e, g, b);
  }
}
function isWillChangeMotionValue(e) {
  return !!(isMotionValue(e) && e.add);
}
function addValueToWillChange(e, o) {
  const a = e.getValue("willChange");
  if (isWillChangeMotionValue(a)) return a.add(o);
  if (!a && MotionGlobalConfig.WillChange) {
    const c = new MotionGlobalConfig.WillChange("auto");
    (e.addValue("willChange", c), c.add(o));
  }
}
function getOptimisedAppearId(e) {
  return e.props[optimizedAppearDataAttribute];
}
const isNotNull = (e) => e !== null;
function getFinalKeyframe(e, { repeat: o, repeatType: a = "loop" }, c) {
  const d = e.filter(isNotNull),
    h = o && a !== "loop" && o % 2 === 1 ? 0 : d.length - 1;
  return !h || c === void 0 ? d[h] : c;
}
const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
  },
  criticallyDampedSpring = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  keyframesTransition = { type: "keyframes", duration: 0.8 },
  ease = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  getDefaultTransition = (e, { keyframes: o }) =>
    o.length > 2
      ? keyframesTransition
      : transformProps.has(e)
        ? e.startsWith("scale")
          ? criticallyDampedSpring(o[1])
          : underDampedSpring
        : ease;
function isTransitionDefined({
  when: e,
  delay: o,
  delayChildren: a,
  staggerChildren: c,
  staggerDirection: d,
  repeat: h,
  repeatType: g,
  repeatDelay: b,
  from: j,
  elapsed: $,
  ..._e
}) {
  return !!Object.keys(_e).length;
}
const animateMotionValue =
  (e, o, a, c = {}, d, h) =>
  (g) => {
    const b = getValueTransition(c, e) || {},
      j = b.delay || c.delay || 0;
    let { elapsed: $ = 0 } = c;
    $ = $ - secondsToMilliseconds(j);
    const _e = {
      keyframes: Array.isArray(a) ? a : [null, a],
      ease: "easeOut",
      velocity: o.getVelocity(),
      ...b,
      delay: -$,
      onUpdate: (nt) => {
        (o.set(nt), b.onUpdate && b.onUpdate(nt));
      },
      onComplete: () => {
        (g(), b.onComplete && b.onComplete());
      },
      name: e,
      motionValue: o,
      element: h ? void 0 : d,
    };
    (isTransitionDefined(b) || Object.assign(_e, getDefaultTransition(e, _e)),
      _e.duration && (_e.duration = secondsToMilliseconds(_e.duration)),
      _e.repeatDelay &&
        (_e.repeatDelay = secondsToMilliseconds(_e.repeatDelay)),
      _e.from !== void 0 && (_e.keyframes[0] = _e.from));
    let et = !1;
    if (
      ((_e.type === !1 || (_e.duration === 0 && !_e.repeatDelay)) &&
        ((_e.duration = 0), _e.delay === 0 && (et = !0)),
      (MotionGlobalConfig.instantAnimations ||
        MotionGlobalConfig.skipAnimations) &&
        ((et = !0), (_e.duration = 0), (_e.delay = 0)),
      (_e.allowFlatten = !b.type && !b.ease),
      et && !h && o.get() !== void 0)
    ) {
      const nt = getFinalKeyframe(_e.keyframes, b);
      if (nt !== void 0) {
        frame.update(() => {
          (_e.onUpdate(nt), _e.onComplete());
        });
        return;
      }
    }
    return b.isSync ? new JSAnimation(_e) : new AsyncMotionValueAnimation(_e);
  };
function shouldBlockAnimation({ protectedKeys: e, needsAnimating: o }, a) {
  const c = e.hasOwnProperty(a) && o[a] !== !0;
  return ((o[a] = !1), c);
}
function animateTarget(
  e,
  o,
  { delay: a = 0, transitionOverride: c, type: d } = {},
) {
  let { transition: h = e.getDefaultTransition(), transitionEnd: g, ...b } = o;
  c && (h = c);
  const j = [],
    $ = d && e.animationState && e.animationState.getState()[d];
  for (const _e in b) {
    const et = e.getValue(_e, e.latestValues[_e] ?? null),
      nt = b[_e];
    if (nt === void 0 || ($ && shouldBlockAnimation($, _e))) continue;
    const ot = { delay: a, ...getValueTransition(h || {}, _e) },
      lt = et.get();
    if (
      lt !== void 0 &&
      !et.isAnimating &&
      !Array.isArray(nt) &&
      nt === lt &&
      !ot.velocity
    )
      continue;
    let ut = !1;
    if (window.MotionHandoffAnimation) {
      const it = getOptimisedAppearId(e);
      if (it) {
        const rt = window.MotionHandoffAnimation(it, _e, frame);
        rt !== null && ((ot.startTime = rt), (ut = !0));
      }
    }
    (addValueToWillChange(e, _e),
      et.start(
        animateMotionValue(
          _e,
          et,
          nt,
          e.shouldReduceMotion && positionalKeys.has(_e) ? { type: !1 } : ot,
          e,
          ut,
        ),
      ));
    const gt = et.animation;
    gt && j.push(gt);
  }
  return (
    g &&
      Promise.all(j).then(() => {
        frame.update(() => {
          g && setTarget(e, g);
        });
      }),
    j
  );
}
function animateVariant(e, o, a = {}) {
  var j;
  const c = resolveVariant(
    e,
    o,
    a.type === "exit"
      ? (j = e.presenceContext) == null
        ? void 0
        : j.custom
      : void 0,
  );
  let { transition: d = e.getDefaultTransition() || {} } = c || {};
  a.transitionOverride && (d = a.transitionOverride);
  const h = c
      ? () => Promise.all(animateTarget(e, c, a))
      : () => Promise.resolve(),
    g =
      e.variantChildren && e.variantChildren.size
        ? ($ = 0) => {
            const {
              delayChildren: _e = 0,
              staggerChildren: et,
              staggerDirection: nt,
            } = d;
            return animateChildren(e, o, $, _e, et, nt, a);
          }
        : () => Promise.resolve(),
    { when: b } = d;
  if (b) {
    const [$, _e] = b === "beforeChildren" ? [h, g] : [g, h];
    return $().then(() => _e());
  } else return Promise.all([h(), g(a.delay)]);
}
function animateChildren(e, o, a = 0, c = 0, d = 0, h = 1, g) {
  const b = [],
    j = e.variantChildren.size,
    $ = (j - 1) * d,
    _e = typeof c == "function",
    et = _e
      ? (nt) => c(nt, j)
      : h === 1
        ? (nt = 0) => nt * d
        : (nt = 0) => $ - nt * d;
  return (
    Array.from(e.variantChildren)
      .sort(sortByTreeOrder)
      .forEach((nt, ot) => {
        (nt.notify("AnimationStart", o),
          b.push(
            animateVariant(nt, o, {
              ...g,
              delay: a + (_e ? 0 : c) + et(ot),
            }).then(() => nt.notify("AnimationComplete", o)),
          ));
      }),
    Promise.all(b)
  );
}
function sortByTreeOrder(e, o) {
  return e.sortNodePosition(o);
}
function animateVisualElement(e, o, a = {}) {
  e.notify("AnimationStart", o);
  let c;
  if (Array.isArray(o)) {
    const d = o.map((h) => animateVariant(e, h, a));
    c = Promise.all(d);
  } else if (typeof o == "string") c = animateVariant(e, o, a);
  else {
    const d = typeof o == "function" ? resolveVariant(e, o, a.custom) : o;
    c = Promise.all(animateTarget(e, d, a));
  }
  return c.then(() => {
    e.notify("AnimationComplete", o);
  });
}
function shallowCompare(e, o) {
  if (!Array.isArray(o)) return !1;
  const a = o.length;
  if (a !== e.length) return !1;
  for (let c = 0; c < a; c++) if (o[c] !== e[c]) return !1;
  return !0;
}
const numVariantProps = variantProps.length;
function getVariantContext(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const a = e.parent ? getVariantContext(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (a.initial = e.props.initial), a);
  }
  const o = {};
  for (let a = 0; a < numVariantProps; a++) {
    const c = variantProps[a],
      d = e.props[c];
    (isVariantLabel(d) || d === !1) && (o[c] = d);
  }
  return o;
}
const reversePriorityOrder = [...variantPriorityOrder].reverse(),
  numAnimationTypes = variantPriorityOrder.length;
function animateList(e) {
  return (o) =>
    Promise.all(
      o.map(({ animation: a, options: c }) => animateVisualElement(e, a, c)),
    );
}
function createAnimationState(e) {
  let o = animateList(e),
    a = createState(),
    c = !0;
  const d = (j) => ($, _e) => {
    var nt;
    const et = resolveVariant(
      e,
      _e,
      j === "exit"
        ? (nt = e.presenceContext) == null
          ? void 0
          : nt.custom
        : void 0,
    );
    if (et) {
      const { transition: ot, transitionEnd: lt, ...ut } = et;
      $ = { ...$, ...ut, ...lt };
    }
    return $;
  };
  function h(j) {
    o = j(e);
  }
  function g(j) {
    const { props: $ } = e,
      _e = getVariantContext(e.parent) || {},
      et = [],
      nt = new Set();
    let ot = {},
      lt = 1 / 0;
    for (let gt = 0; gt < numAnimationTypes; gt++) {
      const it = reversePriorityOrder[gt],
        rt = a[it],
        st = $[it] !== void 0 ? $[it] : _e[it],
        ct = isVariantLabel(st),
        ft = it === j ? rt.isActive : null;
      ft === !1 && (lt = gt);
      let pt = st === _e[it] && st !== $[it] && ct;
      if (
        (pt && c && e.manuallyAnimateOnMount && (pt = !1),
        (rt.protectedKeys = { ...ot }),
        (!rt.isActive && ft === null) ||
          (!st && !rt.prevProp) ||
          isAnimationControls(st) ||
          typeof st == "boolean")
      )
        continue;
      const mt = checkVariantsDidChange(rt.prevProp, st);
      let dt = mt || (it === j && rt.isActive && !pt && ct) || (gt > lt && ct),
        wt = !1;
      const bt = Array.isArray(st) ? st : [st];
      let Ct = bt.reduce(d(it), {});
      ft === !1 && (Ct = {});
      const { prevResolvedValues: Pt = {} } = rt,
        Vt = { ...Pt, ...Ct },
        Dt = (ht) => {
          ((dt = !0),
            nt.has(ht) && ((wt = !0), nt.delete(ht)),
            (rt.needsAnimating[ht] = !0));
          const at = e.getValue(ht);
          at && (at.liveStyle = !1);
        };
      for (const ht in Vt) {
        const at = Ct[ht],
          vt = Pt[ht];
        if (ot.hasOwnProperty(ht)) continue;
        let xt = !1;
        (isKeyframesTarget(at) && isKeyframesTarget(vt)
          ? (xt = !shallowCompare(at, vt))
          : (xt = at !== vt),
          xt
            ? at != null
              ? Dt(ht)
              : nt.add(ht)
            : at !== void 0 && nt.has(ht)
              ? Dt(ht)
              : (rt.protectedKeys[ht] = !0));
      }
      ((rt.prevProp = st),
        (rt.prevResolvedValues = Ct),
        rt.isActive && (ot = { ...ot, ...Ct }),
        c && e.blockInitialAnimation && (dt = !1),
        dt &&
          (!(pt && mt) || wt) &&
          et.push(
            ...bt.map((ht) => ({ animation: ht, options: { type: it } })),
          ));
    }
    if (nt.size) {
      const gt = {};
      if (typeof $.initial != "boolean") {
        const it = resolveVariant(
          e,
          Array.isArray($.initial) ? $.initial[0] : $.initial,
        );
        it && it.transition && (gt.transition = it.transition);
      }
      (nt.forEach((it) => {
        const rt = e.getBaseTarget(it),
          st = e.getValue(it);
        (st && (st.liveStyle = !0), (gt[it] = rt ?? null));
      }),
        et.push({ animation: gt }));
    }
    let ut = !!et.length;
    return (
      c &&
        ($.initial === !1 || $.initial === $.animate) &&
        !e.manuallyAnimateOnMount &&
        (ut = !1),
      (c = !1),
      ut ? o(et) : Promise.resolve()
    );
  }
  function b(j, $) {
    var et;
    if (a[j].isActive === $) return Promise.resolve();
    ((et = e.variantChildren) == null ||
      et.forEach((nt) => {
        var ot;
        return (ot = nt.animationState) == null ? void 0 : ot.setActive(j, $);
      }),
      (a[j].isActive = $));
    const _e = g(j);
    for (const nt in a) a[nt].protectedKeys = {};
    return _e;
  }
  return {
    animateChanges: g,
    setActive: b,
    setAnimateFunction: h,
    getState: () => a,
    reset: () => {
      ((a = createState()), (c = !0));
    },
  };
}
function checkVariantsDidChange(e, o) {
  return typeof o == "string"
    ? o !== e
    : Array.isArray(o)
      ? !shallowCompare(o, e)
      : !1;
}
function createTypeState(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function createState() {
  return {
    animate: createTypeState(!0),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState(),
  };
}
class Feature {
  constructor(o) {
    ((this.isMounted = !1), (this.node = o));
  }
  update() {}
}
class AnimationFeature extends Feature {
  constructor(o) {
    (super(o),
      o.animationState || (o.animationState = createAnimationState(o)));
  }
  updateAnimationControlsSubscription() {
    const { animate: o } = this.node.getProps();
    isAnimationControls(o) && (this.unmountControls = o.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: o } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    o !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var o;
    (this.node.animationState.reset(),
      (o = this.unmountControls) == null || o.call(this));
  }
}
let id$1 = 0;
class ExitAnimationFeature extends Feature {
  constructor() {
    (super(...arguments), (this.id = id$1++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: o, onExitComplete: a } = this.node.presenceContext,
      { isPresent: c } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || o === c) return;
    const d = this.node.animationState.setActive("exit", !o);
    a &&
      !o &&
      d.then(() => {
        a(this.id);
      });
  }
  mount() {
    const { register: o, onExitComplete: a } = this.node.presenceContext || {};
    (a && a(this.id), o && (this.unmount = o(this.id)));
  }
  unmount() {}
}
const animations = {
  animation: { Feature: AnimationFeature },
  exit: { Feature: ExitAnimationFeature },
};
function addDomEvent(e, o, a, c = { passive: !0 }) {
  return (e.addEventListener(o, a, c), () => e.removeEventListener(o, a));
}
function extractEventInfo(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const addPointerInfo = (e) => (o) =>
  isPrimaryPointer(o) && e(o, extractEventInfo(o));
function addPointerEvent(e, o, a, c) {
  return addDomEvent(e, o, addPointerInfo(a), c);
}
function convertBoundingBoxToBox({ top: e, left: o, right: a, bottom: c }) {
  return { x: { min: o, max: a }, y: { min: e, max: c } };
}
function convertBoxToBoundingBox({ x: e, y: o }) {
  return { top: o.min, right: e.max, bottom: o.max, left: e.min };
}
function transformBoxPoints(e, o) {
  if (!o) return e;
  const a = o({ x: e.left, y: e.top }),
    c = o({ x: e.right, y: e.bottom });
  return { top: a.y, left: a.x, bottom: c.y, right: c.x };
}
const SCALE_PRECISION = 1e-4,
  SCALE_MIN = 1 - SCALE_PRECISION,
  SCALE_MAX = 1 + SCALE_PRECISION,
  TRANSLATE_PRECISION = 0.01,
  TRANSLATE_MIN = 0 - TRANSLATE_PRECISION,
  TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(e) {
  return e.max - e.min;
}
function isNear(e, o, a) {
  return Math.abs(e - o) <= a;
}
function calcAxisDelta(e, o, a, c = 0.5) {
  ((e.origin = c),
    (e.originPoint = mixNumber$1(o.min, o.max, e.origin)),
    (e.scale = calcLength(a) / calcLength(o)),
    (e.translate = mixNumber$1(a.min, a.max, e.origin) - e.originPoint),
    ((e.scale >= SCALE_MIN && e.scale <= SCALE_MAX) || isNaN(e.scale)) &&
      (e.scale = 1),
    ((e.translate >= TRANSLATE_MIN && e.translate <= TRANSLATE_MAX) ||
      isNaN(e.translate)) &&
      (e.translate = 0));
}
function calcBoxDelta(e, o, a, c) {
  (calcAxisDelta(e.x, o.x, a.x, c ? c.originX : void 0),
    calcAxisDelta(e.y, o.y, a.y, c ? c.originY : void 0));
}
function calcRelativeAxis(e, o, a) {
  ((e.min = a.min + o.min), (e.max = e.min + calcLength(o)));
}
function calcRelativeBox(e, o, a) {
  (calcRelativeAxis(e.x, o.x, a.x), calcRelativeAxis(e.y, o.y, a.y));
}
function calcRelativeAxisPosition(e, o, a) {
  ((e.min = o.min - a.min), (e.max = e.min + calcLength(o)));
}
function calcRelativePosition(e, o, a) {
  (calcRelativeAxisPosition(e.x, o.x, a.x),
    calcRelativeAxisPosition(e.y, o.y, a.y));
}
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
  }),
  createDelta = () => ({ x: createAxisDelta(), y: createAxisDelta() }),
  createAxis = () => ({ min: 0, max: 0 }),
  createBox = () => ({ x: createAxis(), y: createAxis() });
function eachAxis(e) {
  return [e("x"), e("y")];
}
function isIdentityScale(e) {
  return e === void 0 || e === 1;
}
function hasScale({ scale: e, scaleX: o, scaleY: a }) {
  return !isIdentityScale(e) || !isIdentityScale(o) || !isIdentityScale(a);
}
function hasTransform(e) {
  return (
    hasScale(e) ||
    has2DTranslate(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function has2DTranslate(e) {
  return is2DTranslate(e.x) || is2DTranslate(e.y);
}
function is2DTranslate(e) {
  return e && e !== "0%";
}
function scalePoint(e, o, a) {
  const c = e - a,
    d = o * c;
  return a + d;
}
function applyPointDelta(e, o, a, c, d) {
  return (d !== void 0 && (e = scalePoint(e, d, c)), scalePoint(e, a, c) + o);
}
function applyAxisDelta(e, o = 0, a = 1, c, d) {
  ((e.min = applyPointDelta(e.min, o, a, c, d)),
    (e.max = applyPointDelta(e.max, o, a, c, d)));
}
function applyBoxDelta(e, { x: o, y: a }) {
  (applyAxisDelta(e.x, o.translate, o.scale, o.originPoint),
    applyAxisDelta(e.y, a.translate, a.scale, a.originPoint));
}
const TREE_SCALE_SNAP_MIN = 0.999999999999,
  TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(e, o, a, c = !1) {
  const d = a.length;
  if (!d) return;
  o.x = o.y = 1;
  let h, g;
  for (let b = 0; b < d; b++) {
    ((h = a[b]), (g = h.projectionDelta));
    const { visualElement: j } = h.options;
    (j && j.props.style && j.props.style.display === "contents") ||
      (c &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        transformBox(e, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      g && ((o.x *= g.x.scale), (o.y *= g.y.scale), applyBoxDelta(e, g)),
      c && hasTransform(h.latestValues) && transformBox(e, h.latestValues));
  }
  (o.x < TREE_SCALE_SNAP_MAX && o.x > TREE_SCALE_SNAP_MIN && (o.x = 1),
    o.y < TREE_SCALE_SNAP_MAX && o.y > TREE_SCALE_SNAP_MIN && (o.y = 1));
}
function translateAxis(e, o) {
  ((e.min = e.min + o), (e.max = e.max + o));
}
function transformAxis(e, o, a, c, d = 0.5) {
  const h = mixNumber$1(e.min, e.max, d);
  applyAxisDelta(e, o, a, h, c);
}
function transformBox(e, o) {
  (transformAxis(e.x, o.x, o.scaleX, o.scale, o.originX),
    transformAxis(e.y, o.y, o.scaleY, o.scale, o.originY));
}
function measureViewportBox(e, o) {
  return convertBoundingBoxToBox(
    transformBoxPoints(e.getBoundingClientRect(), o),
  );
}
function measurePageBox(e, o, a) {
  const c = measureViewportBox(e, a),
    { scroll: d } = o;
  return (
    d && (translateAxis(c.x, d.offset.x), translateAxis(c.y, d.offset.y)),
    c
  );
}
const getContextWindow = ({ current: e }) =>
    e ? e.ownerDocument.defaultView : null,
  distance = (e, o) => Math.abs(e - o);
function distance2D(e, o) {
  const a = distance(e.x, o.x),
    c = distance(e.y, o.y);
  return Math.sqrt(a ** 2 + c ** 2);
}
class PanSession {
  constructor(
    o,
    a,
    {
      transformPagePoint: c,
      contextWindow: d = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: g = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const nt = getPanInfo(this.lastMoveEventInfo, this.history),
          ot = this.startEvent !== null,
          lt = distance2D(nt.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!ot && !lt) return;
        const { point: ut } = nt,
          { timestamp: gt } = frameData;
        this.history.push({ ...ut, timestamp: gt });
        const { onStart: it, onMove: rt } = this.handlers;
        (ot ||
          (it && it(this.lastMoveEvent, nt),
          (this.startEvent = this.lastMoveEvent)),
          rt && rt(this.lastMoveEvent, nt));
      }),
      (this.handlePointerMove = (nt, ot) => {
        ((this.lastMoveEvent = nt),
          (this.lastMoveEventInfo = transformPoint(
            ot,
            this.transformPagePoint,
          )),
          frame.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (nt, ot) => {
        this.end();
        const {
          onEnd: lt,
          onSessionEnd: ut,
          resumeAnimation: gt,
        } = this.handlers;
        if (
          (this.dragSnapToOrigin && gt && gt(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const it = getPanInfo(
          nt.type === "pointercancel"
            ? this.lastMoveEventInfo
            : transformPoint(ot, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && lt && lt(nt, it), ut && ut(nt, it));
      }),
      !isPrimaryPointer(o))
    )
      return;
    ((this.dragSnapToOrigin = h),
      (this.handlers = a),
      (this.transformPagePoint = c),
      (this.distanceThreshold = g),
      (this.contextWindow = d || window));
    const b = extractEventInfo(o),
      j = transformPoint(b, this.transformPagePoint),
      { point: $ } = j,
      { timestamp: _e } = frameData;
    this.history = [{ ...$, timestamp: _e }];
    const { onSessionStart: et } = a;
    (et && et(o, getPanInfo(j, this.history)),
      (this.removeListeners = pipe(
        addPointerEvent(
          this.contextWindow,
          "pointermove",
          this.handlePointerMove,
        ),
        addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp),
        addPointerEvent(
          this.contextWindow,
          "pointercancel",
          this.handlePointerUp,
        ),
      )));
  }
  updateHandlers(o) {
    this.handlers = o;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      cancelFrame(this.updatePoint));
  }
}
function transformPoint(e, o) {
  return o ? { point: o(e.point) } : e;
}
function subtractPoint(e, o) {
  return { x: e.x - o.x, y: e.y - o.y };
}
function getPanInfo({ point: e }, o) {
  return {
    point: e,
    delta: subtractPoint(e, lastDevicePoint(o)),
    offset: subtractPoint(e, startDevicePoint(o)),
    velocity: getVelocity(o, 0.1),
  };
}
function startDevicePoint(e) {
  return e[0];
}
function lastDevicePoint(e) {
  return e[e.length - 1];
}
function getVelocity(e, o) {
  if (e.length < 2) return { x: 0, y: 0 };
  let a = e.length - 1,
    c = null;
  const d = lastDevicePoint(e);
  for (
    ;
    a >= 0 &&
    ((c = e[a]), !(d.timestamp - c.timestamp > secondsToMilliseconds(o)));

  )
    a--;
  if (!c) return { x: 0, y: 0 };
  const h = millisecondsToSeconds(d.timestamp - c.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const g = { x: (d.x - c.x) / h, y: (d.y - c.y) / h };
  return (g.x === 1 / 0 && (g.x = 0), g.y === 1 / 0 && (g.y = 0), g);
}
function applyConstraints(e, { min: o, max: a }, c) {
  return (
    o !== void 0 && e < o
      ? (e = c ? mixNumber$1(o, e, c.min) : Math.max(e, o))
      : a !== void 0 &&
        e > a &&
        (e = c ? mixNumber$1(a, e, c.max) : Math.min(e, a)),
    e
  );
}
function calcRelativeAxisConstraints(e, o, a) {
  return {
    min: o !== void 0 ? e.min + o : void 0,
    max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0,
  };
}
function calcRelativeConstraints(e, { top: o, left: a, bottom: c, right: d }) {
  return {
    x: calcRelativeAxisConstraints(e.x, a, d),
    y: calcRelativeAxisConstraints(e.y, o, c),
  };
}
function calcViewportAxisConstraints(e, o) {
  let a = o.min - e.min,
    c = o.max - e.max;
  return (
    o.max - o.min < e.max - e.min && ([a, c] = [c, a]),
    { min: a, max: c }
  );
}
function calcViewportConstraints(e, o) {
  return {
    x: calcViewportAxisConstraints(e.x, o.x),
    y: calcViewportAxisConstraints(e.y, o.y),
  };
}
function calcOrigin(e, o) {
  let a = 0.5;
  const c = calcLength(e),
    d = calcLength(o);
  return (
    d > c
      ? (a = progress(o.min, o.max - c, e.min))
      : c > d && (a = progress(e.min, e.max - d, o.min)),
    clamp(0, 1, a)
  );
}
function rebaseAxisConstraints(e, o) {
  const a = {};
  return (
    o.min !== void 0 && (a.min = o.min - e.min),
    o.max !== void 0 && (a.max = o.max - e.min),
    a
  );
}
const defaultElastic = 0.35;
function resolveDragElastic(e = defaultElastic) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = defaultElastic),
    {
      x: resolveAxisElastic(e, "left", "right"),
      y: resolveAxisElastic(e, "top", "bottom"),
    }
  );
}
function resolveAxisElastic(e, o, a) {
  return { min: resolvePointElastic(e, o), max: resolvePointElastic(e, a) };
}
function resolvePointElastic(e, o) {
  return typeof e == "number" ? e : e[o] || 0;
}
const elementDragControls = new WeakMap();
class VisualElementDragControls {
  constructor(o) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = createBox()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = o));
  }
  start(o, { snapToCursor: a = !1, distanceThreshold: c } = {}) {
    const { presenceContext: d } = this.visualElement;
    if (d && d.isPresent === !1) return;
    const h = (et) => {
        const { dragSnapToOrigin: nt } = this.getProps();
        (nt ? this.pauseAnimation() : this.stopAnimation(),
          a && this.snapToCursor(extractEventInfo(et).point));
      },
      g = (et, nt) => {
        const {
          drag: ot,
          dragPropagation: lt,
          onDragStart: ut,
        } = this.getProps();
        if (
          ot &&
          !lt &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = setDragLock(ot)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = et),
          (this.latestPanInfo = nt),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          eachAxis((it) => {
            let rt = this.getAxisMotionValue(it).get() || 0;
            if (percent.test(rt)) {
              const { projection: st } = this.visualElement;
              if (st && st.layout) {
                const ct = st.layout.layoutBox[it];
                ct && (rt = calcLength(ct) * (parseFloat(rt) / 100));
              }
            }
            this.originPoint[it] = rt;
          }),
          ut && frame.postRender(() => ut(et, nt)),
          addValueToWillChange(this.visualElement, "transform"));
        const { animationState: gt } = this.visualElement;
        gt && gt.setActive("whileDrag", !0);
      },
      b = (et, nt) => {
        ((this.latestPointerEvent = et), (this.latestPanInfo = nt));
        const {
          dragPropagation: ot,
          dragDirectionLock: lt,
          onDirectionLock: ut,
          onDrag: gt,
        } = this.getProps();
        if (!ot && !this.openDragLock) return;
        const { offset: it } = nt;
        if (lt && this.currentDirection === null) {
          ((this.currentDirection = getCurrentDirection(it)),
            this.currentDirection !== null && ut && ut(this.currentDirection));
          return;
        }
        (this.updateAxis("x", nt.point, it),
          this.updateAxis("y", nt.point, it),
          this.visualElement.render(),
          gt && gt(et, nt));
      },
      j = (et, nt) => {
        ((this.latestPointerEvent = et),
          (this.latestPanInfo = nt),
          this.stop(et, nt),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      $ = () =>
        eachAxis((et) => {
          var nt;
          return (
            this.getAnimationState(et) === "paused" &&
            ((nt = this.getAxisMotionValue(et).animation) == null
              ? void 0
              : nt.play())
          );
        }),
      { dragSnapToOrigin: _e } = this.getProps();
    this.panSession = new PanSession(
      o,
      {
        onSessionStart: h,
        onStart: g,
        onMove: b,
        onSessionEnd: j,
        resumeAnimation: $,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: _e,
        distanceThreshold: c,
        contextWindow: getContextWindow(this.visualElement),
      },
    );
  }
  stop(o, a) {
    const c = o || this.latestPointerEvent,
      d = a || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !d || !c)) return;
    const { velocity: g } = d;
    this.startAnimation(g);
    const { onDragEnd: b } = this.getProps();
    b && frame.postRender(() => b(c, d));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: o, animationState: a } = this.visualElement;
    (o && (o.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: c } = this.getProps();
    (!c &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      a && a.setActive("whileDrag", !1));
  }
  updateAxis(o, a, c) {
    const { drag: d } = this.getProps();
    if (!c || !shouldDrag(o, d, this.currentDirection)) return;
    const h = this.getAxisMotionValue(o);
    let g = this.originPoint[o] + c[o];
    (this.constraints &&
      this.constraints[o] &&
      (g = applyConstraints(g, this.constraints[o], this.elastic[o])),
      h.set(g));
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: o, dragElastic: a } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
            ? void 0
            : h.layout,
      d = this.constraints;
    (o && isRefObject(o)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : o && c
        ? (this.constraints = calcRelativeConstraints(c.layoutBox, o))
        : (this.constraints = !1),
      (this.elastic = resolveDragElastic(a)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        eachAxis((g) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(g) &&
            (this.constraints[g] = rebaseAxisConstraints(
              c.layoutBox[g],
              this.constraints[g],
            ));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: o, onMeasureDragConstraints: a } = this.getProps();
    if (!o || !isRefObject(o)) return !1;
    const c = o.current,
      { projection: d } = this.visualElement;
    if (!d || !d.layout) return !1;
    const h = measurePageBox(
      c,
      d.root,
      this.visualElement.getTransformPagePoint(),
    );
    let g = calcViewportConstraints(d.layout.layoutBox, h);
    if (a) {
      const b = a(convertBoxToBoundingBox(g));
      ((this.hasMutatedConstraints = !!b),
        b && (g = convertBoundingBoxToBox(b)));
    }
    return g;
  }
  startAnimation(o) {
    const {
        drag: a,
        dragMomentum: c,
        dragElastic: d,
        dragTransition: h,
        dragSnapToOrigin: g,
        onDragTransitionEnd: b,
      } = this.getProps(),
      j = this.constraints || {},
      $ = eachAxis((_e) => {
        if (!shouldDrag(_e, a, this.currentDirection)) return;
        let et = (j && j[_e]) || {};
        g && (et = { min: 0, max: 0 });
        const nt = d ? 200 : 1e6,
          ot = d ? 40 : 1e7,
          lt = {
            type: "inertia",
            velocity: c ? o[_e] : 0,
            bounceStiffness: nt,
            bounceDamping: ot,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...et,
          };
        return this.startAxisValueAnimation(_e, lt);
      });
    return Promise.all($).then(b);
  }
  startAxisValueAnimation(o, a) {
    const c = this.getAxisMotionValue(o);
    return (
      addValueToWillChange(this.visualElement, o),
      c.start(animateMotionValue(o, c, 0, a, this.visualElement, !1))
    );
  }
  stopAnimation() {
    eachAxis((o) => this.getAxisMotionValue(o).stop());
  }
  pauseAnimation() {
    eachAxis((o) => {
      var a;
      return (a = this.getAxisMotionValue(o).animation) == null
        ? void 0
        : a.pause();
    });
  }
  getAnimationState(o) {
    var a;
    return (a = this.getAxisMotionValue(o).animation) == null
      ? void 0
      : a.state;
  }
  getAxisMotionValue(o) {
    const a = `_drag${o.toUpperCase()}`,
      c = this.visualElement.getProps(),
      d = c[a];
    return (
      d ||
      this.visualElement.getValue(o, (c.initial ? c.initial[o] : void 0) || 0)
    );
  }
  snapToCursor(o) {
    eachAxis((a) => {
      const { drag: c } = this.getProps();
      if (!shouldDrag(a, c, this.currentDirection)) return;
      const { projection: d } = this.visualElement,
        h = this.getAxisMotionValue(a);
      if (d && d.layout) {
        const { min: g, max: b } = d.layout.layoutBox[a];
        h.set(o[a] - mixNumber$1(g, b, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: o, dragConstraints: a } = this.getProps(),
      { projection: c } = this.visualElement;
    if (!isRefObject(a) || !c || !this.constraints) return;
    this.stopAnimation();
    const d = { x: 0, y: 0 };
    eachAxis((g) => {
      const b = this.getAxisMotionValue(g);
      if (b && this.constraints !== !1) {
        const j = b.get();
        d[g] = calcOrigin({ min: j, max: j }, this.constraints[g]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      c.root && c.root.updateScroll(),
      c.updateLayout(),
      this.resolveConstraints(),
      eachAxis((g) => {
        if (!shouldDrag(g, o, null)) return;
        const b = this.getAxisMotionValue(g),
          { min: j, max: $ } = this.constraints[g];
        b.set(mixNumber$1(j, $, d[g]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const o = this.visualElement.current,
      a = addPointerEvent(o, "pointerdown", (j) => {
        const { drag: $, dragListener: _e = !0 } = this.getProps();
        $ && _e && this.start(j);
      }),
      c = () => {
        const { dragConstraints: j } = this.getProps();
        isRefObject(j) &&
          j.current &&
          (this.constraints = this.resolveRefConstraints());
      },
      { projection: d } = this.visualElement,
      h = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
      frame.read(c));
    const g = addDomEvent(window, "resize", () =>
        this.scalePositionWithinConstraints(),
      ),
      b = d.addEventListener(
        "didUpdate",
        ({ delta: j, hasLayoutChanged: $ }) => {
          this.isDragging &&
            $ &&
            (eachAxis((_e) => {
              const et = this.getAxisMotionValue(_e);
              et &&
                ((this.originPoint[_e] += j[_e].translate),
                et.set(et.get() + j[_e].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (g(), a(), h(), b && b());
    };
  }
  getProps() {
    const o = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: c = !1,
        dragPropagation: d = !1,
        dragConstraints: h = !1,
        dragElastic: g = defaultElastic,
        dragMomentum: b = !0,
      } = o;
    return {
      ...o,
      drag: a,
      dragDirectionLock: c,
      dragPropagation: d,
      dragConstraints: h,
      dragElastic: g,
      dragMomentum: b,
    };
  }
}
function shouldDrag(e, o, a) {
  return (o === !0 || o === e) && (a === null || a === e);
}
function getCurrentDirection(e, o = 10) {
  let a = null;
  return (Math.abs(e.y) > o ? (a = "y") : Math.abs(e.x) > o && (a = "x"), a);
}
class DragGesture extends Feature {
  constructor(o) {
    (super(o),
      (this.removeGroupControls = noop),
      (this.removeListeners = noop),
      (this.controls = new VisualElementDragControls(o)));
  }
  mount() {
    const { dragControls: o } = this.node.getProps();
    (o && (this.removeGroupControls = o.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || noop));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const asyncHandler = (e) => (o, a) => {
  e && frame.postRender(() => e(o, a));
};
class PanGesture extends Feature {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = noop));
  }
  onPointerDown(o) {
    this.session = new PanSession(o, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: o,
      onPanStart: a,
      onPan: c,
      onPanEnd: d,
    } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(o),
      onStart: asyncHandler(a),
      onMove: c,
      onEnd: (h, g) => {
        (delete this.session, d && frame.postRender(() => d(h, g)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(
      this.node.current,
      "pointerdown",
      (o) => this.onPointerDown(o),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const globalProjectionState = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1,
};
function pixelsToPercent(e, o) {
  return o.max === o.min ? 0 : (e / (o.max - o.min)) * 100;
}
const correctBorderRadius = {
    correct: (e, o) => {
      if (!o.target) return e;
      if (typeof e == "string")
        if (px.test(e)) e = parseFloat(e);
        else return e;
      const a = pixelsToPercent(e, o.target.x),
        c = pixelsToPercent(e, o.target.y);
      return `${a}% ${c}%`;
    },
  },
  correctBoxShadow = {
    correct: (e, { treeScale: o, projectionDelta: a }) => {
      const c = e,
        d = complex.parse(e);
      if (d.length > 5) return c;
      const h = complex.createTransformer(e),
        g = typeof d[0] != "number" ? 1 : 0,
        b = a.x.scale * o.x,
        j = a.y.scale * o.y;
      ((d[0 + g] /= b), (d[1 + g] /= j));
      const $ = mixNumber$1(b, j, 0.5);
      return (
        typeof d[2 + g] == "number" && (d[2 + g] /= $),
        typeof d[3 + g] == "number" && (d[3 + g] /= $),
        h(d)
      );
    },
  };
let hasTakenAnySnapshot = !1;
class MeasureLayoutWithContext extends reactExports.Component {
  componentDidMount() {
    const {
        visualElement: o,
        layoutGroup: a,
        switchLayoutGroup: c,
        layoutId: d,
      } = this.props,
      { projection: h } = o;
    (addScaleCorrector(defaultScaleCorrectors),
      h &&
        (a.group && a.group.add(h),
        c && c.register && d && c.register(h),
        hasTakenAnySnapshot && h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        h.setOptions({
          ...h.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (globalProjectionState.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(o) {
    const {
        layoutDependency: a,
        visualElement: c,
        drag: d,
        isPresent: h,
      } = this.props,
      { projection: g } = c;
    return (
      g &&
        ((g.isPresent = h),
        (hasTakenAnySnapshot = !0),
        d || o.layoutDependency !== a || a === void 0 || o.isPresent !== h
          ? g.willUpdate()
          : this.safeToRemove(),
        o.isPresent !== h &&
          (h
            ? g.promote()
            : g.relegate() ||
              frame.postRender(() => {
                const b = g.getStack();
                (!b || !b.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: o } = this.props.visualElement;
    o &&
      (o.root.didUpdate(),
      microtask.postRender(() => {
        !o.currentAnimation && o.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: o,
        layoutGroup: a,
        switchLayoutGroup: c,
      } = this.props,
      { projection: d } = o;
    d &&
      (d.scheduleCheckAfterUnmount(),
      a && a.group && a.group.remove(d),
      c && c.deregister && c.deregister(d));
  }
  safeToRemove() {
    const { safeToRemove: o } = this.props;
    o && o();
  }
  render() {
    return null;
  }
}
function MeasureLayout(e) {
  const [o, a] = usePresence(),
    c = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(MeasureLayoutWithContext, {
    ...e,
    layoutGroup: c,
    switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext),
    isPresent: o,
    safeToRemove: a,
  });
}
const defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow,
};
function animateSingleValue(e, o, a) {
  const c = isMotionValue(e) ? e : motionValue(e);
  return (c.start(animateMotionValue("", c, o, a)), c.animation);
}
const compareByDepth = (e, o) => e.depth - o.depth;
class FlatTree {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(o) {
    (addUniqueItem(this.children, o), (this.isDirty = !0));
  }
  remove(o) {
    (removeItem(this.children, o), (this.isDirty = !0));
  }
  forEach(o) {
    (this.isDirty && this.children.sort(compareByDepth),
      (this.isDirty = !1),
      this.children.forEach(o));
  }
}
function delay(e, o) {
  const a = time.now(),
    c = ({ timestamp: d }) => {
      const h = d - a;
      h >= o && (cancelFrame(c), e(h - o));
    };
  return (frame.setup(c, !0), () => cancelFrame(c));
}
const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  numBorders = borders.length,
  asNumber = (e) => (typeof e == "string" ? parseFloat(e) : e),
  isPx = (e) => typeof e == "number" || px.test(e);
function mixValues(e, o, a, c, d, h) {
  d
    ? ((e.opacity = mixNumber$1(0, a.opacity ?? 1, easeCrossfadeIn(c))),
      (e.opacityExit = mixNumber$1(o.opacity ?? 1, 0, easeCrossfadeOut(c))))
    : h && (e.opacity = mixNumber$1(o.opacity ?? 1, a.opacity ?? 1, c));
  for (let g = 0; g < numBorders; g++) {
    const b = `border${borders[g]}Radius`;
    let j = getRadius(o, b),
      $ = getRadius(a, b);
    if (j === void 0 && $ === void 0) continue;
    (j || (j = 0),
      $ || ($ = 0),
      j === 0 || $ === 0 || isPx(j) === isPx($)
        ? ((e[b] = Math.max(mixNumber$1(asNumber(j), asNumber($), c), 0)),
          (percent.test($) || percent.test(j)) && (e[b] += "%"))
        : (e[b] = $));
  }
  (o.rotate || a.rotate) &&
    (e.rotate = mixNumber$1(o.rotate || 0, a.rotate || 0, c));
}
function getRadius(e, o) {
  return e[o] !== void 0 ? e[o] : e.borderRadius;
}
const easeCrossfadeIn = compress(0, 0.5, circOut),
  easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(e, o, a) {
  return (c) => (c < e ? 0 : c > o ? 1 : a(progress(e, o, c)));
}
function copyAxisInto(e, o) {
  ((e.min = o.min), (e.max = o.max));
}
function copyBoxInto(e, o) {
  (copyAxisInto(e.x, o.x), copyAxisInto(e.y, o.y));
}
function copyAxisDeltaInto(e, o) {
  ((e.translate = o.translate),
    (e.scale = o.scale),
    (e.originPoint = o.originPoint),
    (e.origin = o.origin));
}
function removePointDelta(e, o, a, c, d) {
  return (
    (e -= o),
    (e = scalePoint(e, 1 / a, c)),
    d !== void 0 && (e = scalePoint(e, 1 / d, c)),
    e
  );
}
function removeAxisDelta(e, o = 0, a = 1, c = 0.5, d, h = e, g = e) {
  if (
    (percent.test(o) &&
      ((o = parseFloat(o)), (o = mixNumber$1(g.min, g.max, o / 100) - g.min)),
    typeof o != "number")
  )
    return;
  let b = mixNumber$1(h.min, h.max, c);
  (e === h && (b -= o),
    (e.min = removePointDelta(e.min, o, a, b, d)),
    (e.max = removePointDelta(e.max, o, a, b, d)));
}
function removeAxisTransforms(e, o, [a, c, d], h, g) {
  removeAxisDelta(e, o[a], o[c], o[d], o.scale, h, g);
}
const xKeys = ["x", "scaleX", "originX"],
  yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(e, o, a, c) {
  (removeAxisTransforms(e.x, o, xKeys, a ? a.x : void 0, c ? c.x : void 0),
    removeAxisTransforms(e.y, o, yKeys, a ? a.y : void 0, c ? c.y : void 0));
}
function isAxisDeltaZero(e) {
  return e.translate === 0 && e.scale === 1;
}
function isDeltaZero(e) {
  return isAxisDeltaZero(e.x) && isAxisDeltaZero(e.y);
}
function axisEquals(e, o) {
  return e.min === o.min && e.max === o.max;
}
function boxEquals(e, o) {
  return axisEquals(e.x, o.x) && axisEquals(e.y, o.y);
}
function axisEqualsRounded(e, o) {
  return (
    Math.round(e.min) === Math.round(o.min) &&
    Math.round(e.max) === Math.round(o.max)
  );
}
function boxEqualsRounded(e, o) {
  return axisEqualsRounded(e.x, o.x) && axisEqualsRounded(e.y, o.y);
}
function aspectRatio(e) {
  return calcLength(e.x) / calcLength(e.y);
}
function axisDeltaEquals(e, o) {
  return (
    e.translate === o.translate &&
    e.scale === o.scale &&
    e.originPoint === o.originPoint
  );
}
class NodeStack {
  constructor() {
    this.members = [];
  }
  add(o) {
    (addUniqueItem(this.members, o), o.scheduleRender());
  }
  remove(o) {
    if (
      (removeItem(this.members, o),
      o === this.prevLead && (this.prevLead = void 0),
      o === this.lead)
    ) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(o) {
    const a = this.members.findIndex((d) => o === d);
    if (a === 0) return !1;
    let c;
    for (let d = a; d >= 0; d--) {
      const h = this.members[d];
      if (h.isPresent !== !1) {
        c = h;
        break;
      }
    }
    return c ? (this.promote(c), !0) : !1;
  }
  promote(o, a) {
    const c = this.lead;
    if (o !== c && ((this.prevLead = c), (this.lead = o), o.show(), c)) {
      (c.instance && c.scheduleRender(),
        o.scheduleRender(),
        (o.resumeFrom = c),
        a && (o.resumeFrom.preserveOpacity = !0),
        c.snapshot &&
          ((o.snapshot = c.snapshot),
          (o.snapshot.latestValues = c.animationValues || c.latestValues)),
        o.root && o.root.isUpdating && (o.isLayoutDirty = !0));
      const { crossfade: d } = o.options;
      d === !1 && c.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((o) => {
      const { options: a, resumingFrom: c } = o;
      (a.onExitComplete && a.onExitComplete(),
        c && c.options.onExitComplete && c.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((o) => {
      o.instance && o.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function buildProjectionTransform(e, o, a) {
  let c = "";
  const d = e.x.translate / o.x,
    h = e.y.translate / o.y,
    g = (a == null ? void 0 : a.z) || 0;
  if (
    ((d || h || g) && (c = `translate3d(${d}px, ${h}px, ${g}px) `),
    (o.x !== 1 || o.y !== 1) && (c += `scale(${1 / o.x}, ${1 / o.y}) `),
    a)
  ) {
    const {
      transformPerspective: $,
      rotate: _e,
      rotateX: et,
      rotateY: nt,
      skewX: ot,
      skewY: lt,
    } = a;
    ($ && (c = `perspective(${$}px) ${c}`),
      _e && (c += `rotate(${_e}deg) `),
      et && (c += `rotateX(${et}deg) `),
      nt && (c += `rotateY(${nt}deg) `),
      ot && (c += `skewX(${ot}deg) `),
      lt && (c += `skewY(${lt}deg) `));
  }
  const b = e.x.scale * o.x,
    j = e.y.scale * o.y;
  return ((b !== 1 || j !== 1) && (c += `scale(${b}, ${j})`), c || "none");
}
const transformAxes = ["", "X", "Y", "Z"],
  animationTarget = 1e3;
let id = 0;
function resetDistortingTransform(e, o, a, c) {
  const { latestValues: d } = o;
  d[e] && ((a[e] = d[e]), o.setStaticValue(e, 0), c && (c[e] = 0));
}
function cancelTreeOptimisedTransformAnimations(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: o } = e.options;
  if (!o) return;
  const a = getOptimisedAppearId(o);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: d, layoutId: h } = e.options;
    window.MotionCancelOptimisedAnimation(a, "transform", frame, !(d || h));
  }
  const { parent: c } = e;
  c &&
    !c.hasCheckedOptimisedAppear &&
    cancelTreeOptimisedTransformAnimations(c);
}
function createProjectionNode({
  attachResizeListener: e,
  defaultParent: o,
  measureScroll: a,
  checkIsScrollRoot: c,
  resetTransform: d,
}) {
  return class {
    constructor(g = {}, b = o == null ? void 0 : o()) {
      ((this.id = id++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(propagateDirtyNodes),
            this.nodes.forEach(resolveTargetDelta),
            this.nodes.forEach(calcProjection),
            this.nodes.forEach(cleanDirtyNodes));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = g),
        (this.root = b ? b.root || b : this),
        (this.path = b ? [...b.path, b] : []),
        (this.parent = b),
        (this.depth = b ? b.depth + 1 : 0));
      for (let j = 0; j < this.path.length; j++)
        this.path[j].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FlatTree());
    }
    addEventListener(g, b) {
      return (
        this.eventHandlers.has(g) ||
          this.eventHandlers.set(g, new SubscriptionManager()),
        this.eventHandlers.get(g).add(b)
      );
    }
    notifyListeners(g, ...b) {
      const j = this.eventHandlers.get(g);
      j && j.notify(...b);
    }
    hasListeners(g) {
      return this.eventHandlers.has(g);
    }
    mount(g) {
      if (this.instance) return;
      ((this.isSVG = isSVGElement(g) && !isSVGSVGElement(g)),
        (this.instance = g));
      const { layoutId: b, layout: j, visualElement: $ } = this.options;
      if (
        ($ && !$.current && $.mount(g),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (j || b) && (this.isLayoutDirty = !0),
        e)
      ) {
        let _e,
          et = 0;
        const nt = () => (this.root.updateBlockedByResize = !1);
        (frame.read(() => {
          et = window.innerWidth;
        }),
          e(g, () => {
            const ot = window.innerWidth;
            ot !== et &&
              ((et = ot),
              (this.root.updateBlockedByResize = !0),
              _e && _e(),
              (_e = delay(nt, 250)),
              globalProjectionState.hasAnimatedSinceResize &&
                ((globalProjectionState.hasAnimatedSinceResize = !1),
                this.nodes.forEach(finishAnimation)));
          }));
      }
      (b && this.root.registerSharedNode(b, this),
        this.options.animate !== !1 &&
          $ &&
          (b || j) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: _e,
              hasLayoutChanged: et,
              hasRelativeLayoutChanged: nt,
              layout: ot,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const lt =
                  this.options.transition ||
                  $.getDefaultTransition() ||
                  defaultLayoutTransition,
                { onLayoutAnimationStart: ut, onLayoutAnimationComplete: gt } =
                  $.getProps(),
                it =
                  !this.targetLayout ||
                  !boxEqualsRounded(this.targetLayout, ot),
                rt = !et && nt;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                rt ||
                (et && (it || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const st = {
                  ...getValueTransition(lt, "layout"),
                  onPlay: ut,
                  onComplete: gt,
                };
                (($.shouldReduceMotion || this.options.layoutRoot) &&
                  ((st.delay = 0), (st.type = !1)),
                  this.startAnimation(st),
                  this.setAnimationOrigin(_e, rt));
              } else
                (et || finishAnimation(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = ot;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const g = this.getStack();
      (g && g.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        cancelFrame(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(resetSkewAndRotation),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: g } = this.options;
      return g && g.getProps().transformTemplate;
    }
    willUpdate(g = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          cancelTreeOptimisedTransformAnimations(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let _e = 0; _e < this.path.length; _e++) {
        const et = this.path[_e];
        ((et.shouldResetTransform = !0),
          et.updateScroll("snapshot"),
          et.options.layoutRoot && et.willUpdate(!1));
      }
      const { layoutId: b, layout: j } = this.options;
      if (b === void 0 && !j) return;
      const $ = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = $
        ? $(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        g && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(clearMeasurements));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(resetTransformStyle),
            this.nodes.forEach(updateLayout),
            this.nodes.forEach(notifyLayoutUpdate))
          : this.nodes.forEach(clearIsLayoutDirty),
        this.clearAllSnapshots());
      const b = time.now();
      ((frameData.delta = clamp(0, 1e3 / 60, b - frameData.timestamp)),
        (frameData.timestamp = b),
        (frameData.isProcessing = !0),
        frameSteps.update.process(frameData),
        frameSteps.preRender.process(frameData),
        frameSteps.render.process(frameData),
        (frameData.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), microtask.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(clearSnapshot),
        this.sharedNodes.forEach(removeLeadSnapshots));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        frame.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !calcLength(this.snapshot.measuredBox.x) &&
          !calcLength(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let j = 0; j < this.path.length; j++) this.path[j].updateScroll();
      const g = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = createBox()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: b } = this.options;
      b &&
        b.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          g ? g.layoutBox : void 0,
        );
    }
    updateScroll(g = "measure") {
      let b = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === g &&
          (b = !1),
        b && this.instance)
      ) {
        const j = c(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: g,
          isRoot: j,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : j,
        };
      }
    }
    resetTransform() {
      if (!d) return;
      const g =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        b = this.projectionDelta && !isDeltaZero(this.projectionDelta),
        j = this.getTransformTemplate(),
        $ = j ? j(this.latestValues, "") : void 0,
        _e = $ !== this.prevTransformTemplateValue;
      g &&
        this.instance &&
        (b || hasTransform(this.latestValues) || _e) &&
        (d(this.instance, $),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(g = !0) {
      const b = this.measurePageBox();
      let j = this.removeElementScroll(b);
      return (
        g && (j = this.removeTransform(j)),
        roundBox(j),
        {
          animationId: this.root.animationId,
          measuredBox: b,
          layoutBox: j,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var $;
      const { visualElement: g } = this.options;
      if (!g) return createBox();
      const b = g.measureViewportBox();
      if (
        !(
          (($ = this.scroll) == null ? void 0 : $.wasRoot) ||
          this.path.some(checkNodeWasScrollRoot)
        )
      ) {
        const { scroll: _e } = this.root;
        _e &&
          (translateAxis(b.x, _e.offset.x), translateAxis(b.y, _e.offset.y));
      }
      return b;
    }
    removeElementScroll(g) {
      var j;
      const b = createBox();
      if ((copyBoxInto(b, g), (j = this.scroll) != null && j.wasRoot)) return b;
      for (let $ = 0; $ < this.path.length; $++) {
        const _e = this.path[$],
          { scroll: et, options: nt } = _e;
        _e !== this.root &&
          et &&
          nt.layoutScroll &&
          (et.wasRoot && copyBoxInto(b, g),
          translateAxis(b.x, et.offset.x),
          translateAxis(b.y, et.offset.y));
      }
      return b;
    }
    applyTransform(g, b = !1) {
      const j = createBox();
      copyBoxInto(j, g);
      for (let $ = 0; $ < this.path.length; $++) {
        const _e = this.path[$];
        (!b &&
          _e.options.layoutScroll &&
          _e.scroll &&
          _e !== _e.root &&
          transformBox(j, { x: -_e.scroll.offset.x, y: -_e.scroll.offset.y }),
          hasTransform(_e.latestValues) && transformBox(j, _e.latestValues));
      }
      return (
        hasTransform(this.latestValues) && transformBox(j, this.latestValues),
        j
      );
    }
    removeTransform(g) {
      const b = createBox();
      copyBoxInto(b, g);
      for (let j = 0; j < this.path.length; j++) {
        const $ = this.path[j];
        if (!$.instance || !hasTransform($.latestValues)) continue;
        hasScale($.latestValues) && $.updateSnapshot();
        const _e = createBox(),
          et = $.measurePageBox();
        (copyBoxInto(_e, et),
          removeBoxTransforms(
            b,
            $.latestValues,
            $.snapshot ? $.snapshot.layoutBox : void 0,
            _e,
          ));
      }
      return (
        hasTransform(this.latestValues) &&
          removeBoxTransforms(b, this.latestValues),
        b
      );
    }
    setTargetDelta(g) {
      ((this.targetDelta = g),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(g) {
      this.options = {
        ...this.options,
        ...g,
        crossfade: g.crossfade !== void 0 ? g.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(g = !1) {
      var nt;
      const b = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = b.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = b.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = b.isSharedProjectionDirty));
      const j = !!this.resumingFrom || this !== b;
      if (
        !(
          g ||
          (j && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((nt = this.parent) != null && nt.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: _e, layoutId: et } = this.options;
      if (!(!this.layout || !(_e || et))) {
        if (
          ((this.resolvedRelativeTargetAt = frameData.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const ot = this.getClosestProjectingParent();
          ot && ot.layout && this.animationProgress !== 1
            ? ((this.relativeParent = ot),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = createBox()),
              (this.relativeTargetOrigin = createBox()),
              calcRelativePosition(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                ot.layout.layoutBox,
              ),
              copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = createBox()),
            (this.targetWithTransforms = createBox())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              calcRelativeBox(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : copyBoxInto(this.target, this.layout.layoutBox),
                applyBoxDelta(this.target, this.targetDelta))
              : copyBoxInto(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const ot = this.getClosestProjectingParent();
          ot &&
          !!ot.resumingFrom == !!this.resumingFrom &&
          !ot.options.layoutScroll &&
          ot.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = ot),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = createBox()),
              (this.relativeTargetOrigin = createBox()),
              calcRelativePosition(
                this.relativeTargetOrigin,
                this.target,
                ot.target,
              ),
              copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          hasScale(this.parent.latestValues) ||
          has2DTranslate(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var lt;
      const g = this.getLead(),
        b = !!this.resumingFrom || this !== g;
      let j = !0;
      if (
        ((this.isProjectionDirty ||
          ((lt = this.parent) != null && lt.isProjectionDirty)) &&
          (j = !1),
        b &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (j = !1),
        this.resolvedRelativeTargetAt === frameData.timestamp && (j = !1),
        j)
      )
        return;
      const { layout: $, layoutId: _e } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !($ || _e))
      )
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const et = this.treeScale.x,
        nt = this.treeScale.y;
      (applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, b),
        g.layout &&
          !g.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((g.target = g.layout.layoutBox),
          (g.targetWithTransforms = createBox())));
      const { target: ot } = g;
      if (!ot) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (copyAxisDeltaInto(
            this.prevProjectionDelta.x,
            this.projectionDelta.x,
          ),
          copyAxisDeltaInto(
            this.prevProjectionDelta.y,
            this.projectionDelta.y,
          )),
        calcBoxDelta(
          this.projectionDelta,
          this.layoutCorrected,
          ot,
          this.latestValues,
        ),
        (this.treeScale.x !== et ||
          this.treeScale.y !== nt ||
          !axisDeltaEquals(
            this.projectionDelta.x,
            this.prevProjectionDelta.x,
          ) ||
          !axisDeltaEquals(
            this.projectionDelta.y,
            this.prevProjectionDelta.y,
          )) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", ot)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(g = !0) {
      var b;
      if (((b = this.options.visualElement) == null || b.scheduleRender(), g)) {
        const j = this.getStack();
        j && j.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = createDelta()),
        (this.projectionDelta = createDelta()),
        (this.projectionDeltaWithTransform = createDelta()));
    }
    setAnimationOrigin(g, b = !1) {
      const j = this.snapshot,
        $ = j ? j.latestValues : {},
        _e = { ...this.latestValues },
        et = createDelta();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !b));
      const nt = createBox(),
        ot = j ? j.source : void 0,
        lt = this.layout ? this.layout.source : void 0,
        ut = ot !== lt,
        gt = this.getStack(),
        it = !gt || gt.members.length <= 1,
        rt = !!(
          ut &&
          !it &&
          this.options.crossfade === !0 &&
          !this.path.some(hasOpacityCrossfade)
        );
      this.animationProgress = 0;
      let st;
      ((this.mixTargetDelta = (ct) => {
        const ft = ct / 1e3;
        (mixAxisDelta(et.x, g.x, ft),
          mixAxisDelta(et.y, g.y, ft),
          this.setTargetDelta(et),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (calcRelativePosition(
              nt,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
            ),
            mixBox(this.relativeTarget, this.relativeTargetOrigin, nt, ft),
            st &&
              boxEquals(this.relativeTarget, st) &&
              (this.isProjectionDirty = !1),
            st || (st = createBox()),
            copyBoxInto(st, this.relativeTarget)),
          ut &&
            ((this.animationValues = _e),
            mixValues(_e, $, this.latestValues, ft, rt, it)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = ft));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(g) {
      var b, j, $;
      (this.notifyListeners("animationStart"),
        (b = this.currentAnimation) == null || b.stop(),
        ($ = (j = this.resumingFrom) == null ? void 0 : j.currentAnimation) ==
          null || $.stop(),
        this.pendingAnimation &&
          (cancelFrame(this.pendingAnimation),
          (this.pendingAnimation = void 0)),
        (this.pendingAnimation = frame.update(() => {
          ((globalProjectionState.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = motionValue(0)),
            (this.currentAnimation = animateSingleValue(
              this.motionValue,
              [0, 1e3],
              {
                ...g,
                velocity: 0,
                isSync: !0,
                onUpdate: (_e) => {
                  (this.mixTargetDelta(_e), g.onUpdate && g.onUpdate(_e));
                },
                onStop: () => {},
                onComplete: () => {
                  (g.onComplete && g.onComplete(), this.completeAnimation());
                },
              },
            )),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const g = this.getStack();
      (g && g.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(animationTarget),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const g = this.getLead();
      let {
        targetWithTransforms: b,
        target: j,
        layout: $,
        latestValues: _e,
      } = g;
      if (!(!b || !j || !$)) {
        if (
          this !== g &&
          this.layout &&
          $ &&
          shouldAnimatePositionOnly(
            this.options.animationType,
            this.layout.layoutBox,
            $.layoutBox,
          )
        ) {
          j = this.target || createBox();
          const et = calcLength(this.layout.layoutBox.x);
          ((j.x.min = g.target.x.min), (j.x.max = j.x.min + et));
          const nt = calcLength(this.layout.layoutBox.y);
          ((j.y.min = g.target.y.min), (j.y.max = j.y.min + nt));
        }
        (copyBoxInto(b, j),
          transformBox(b, _e),
          calcBoxDelta(
            this.projectionDeltaWithTransform,
            this.layoutCorrected,
            b,
            _e,
          ));
      }
    }
    registerSharedNode(g, b) {
      (this.sharedNodes.has(g) || this.sharedNodes.set(g, new NodeStack()),
        this.sharedNodes.get(g).add(b));
      const $ = b.options.initialPromotionConfig;
      b.promote({
        transition: $ ? $.transition : void 0,
        preserveFollowOpacity:
          $ && $.shouldPreserveFollowOpacity
            ? $.shouldPreserveFollowOpacity(b)
            : void 0,
      });
    }
    isLead() {
      const g = this.getStack();
      return g ? g.lead === this : !0;
    }
    getLead() {
      var b;
      const { layoutId: g } = this.options;
      return g
        ? ((b = this.getStack()) == null ? void 0 : b.lead) || this
        : this;
    }
    getPrevLead() {
      var b;
      const { layoutId: g } = this.options;
      return g ? ((b = this.getStack()) == null ? void 0 : b.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: g } = this.options;
      if (g) return this.root.sharedNodes.get(g);
    }
    promote({ needsReset: g, transition: b, preserveFollowOpacity: j } = {}) {
      const $ = this.getStack();
      ($ && $.promote(this, j),
        g && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        b && this.setOptions({ transition: b }));
    }
    relegate() {
      const g = this.getStack();
      return g ? g.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: g } = this.options;
      if (!g) return;
      let b = !1;
      const { latestValues: j } = g;
      if (
        ((j.z ||
          j.rotate ||
          j.rotateX ||
          j.rotateY ||
          j.rotateZ ||
          j.skewX ||
          j.skewY) &&
          (b = !0),
        !b)
      )
        return;
      const $ = {};
      j.z && resetDistortingTransform("z", g, $, this.animationValues);
      for (let _e = 0; _e < transformAxes.length; _e++)
        (resetDistortingTransform(
          `rotate${transformAxes[_e]}`,
          g,
          $,
          this.animationValues,
        ),
          resetDistortingTransform(
            `skew${transformAxes[_e]}`,
            g,
            $,
            this.animationValues,
          ));
      g.render();
      for (const _e in $)
        (g.setStaticValue(_e, $[_e]),
          this.animationValues && (this.animationValues[_e] = $[_e]));
      g.scheduleRender();
    }
    applyProjectionStyles(g, b) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        g.visibility = "hidden";
        return;
      }
      const j = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (g.visibility = ""),
          (g.opacity = ""),
          (g.pointerEvents =
            resolveMotionValue(b == null ? void 0 : b.pointerEvents) || ""),
          (g.transform = j ? j(this.latestValues, "") : "none"));
        return;
      }
      const $ = this.getLead();
      if (!this.projectionDelta || !this.layout || !$.target) {
        (this.options.layoutId &&
          ((g.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (g.pointerEvents =
            resolveMotionValue(b == null ? void 0 : b.pointerEvents) || "")),
          this.hasProjected &&
            !hasTransform(this.latestValues) &&
            ((g.transform = j ? j({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      g.visibility = "";
      const _e = $.animationValues || $.latestValues;
      this.applyTransformsToTarget();
      let et = buildProjectionTransform(
        this.projectionDeltaWithTransform,
        this.treeScale,
        _e,
      );
      (j && (et = j(_e, et)), (g.transform = et));
      const { x: nt, y: ot } = this.projectionDelta;
      ((g.transformOrigin = `${nt.origin * 100}% ${ot.origin * 100}% 0`),
        $.animationValues
          ? (g.opacity =
              $ === this
                ? (_e.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : _e.opacityExit)
          : (g.opacity =
              $ === this
                ? _e.opacity !== void 0
                  ? _e.opacity
                  : ""
                : _e.opacityExit !== void 0
                  ? _e.opacityExit
                  : 0));
      for (const lt in scaleCorrectors) {
        if (_e[lt] === void 0) continue;
        const {
            correct: ut,
            applyTo: gt,
            isCSSVariable: it,
          } = scaleCorrectors[lt],
          rt = et === "none" ? _e[lt] : ut(_e[lt], $);
        if (gt) {
          const st = gt.length;
          for (let ct = 0; ct < st; ct++) g[gt[ct]] = rt;
        } else
          it
            ? (this.options.visualElement.renderState.vars[lt] = rt)
            : (g[lt] = rt);
      }
      this.options.layoutId &&
        (g.pointerEvents =
          $ === this
            ? resolveMotionValue(b == null ? void 0 : b.pointerEvents) || ""
            : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((g) => {
        var b;
        return (b = g.currentAnimation) == null ? void 0 : b.stop();
      }),
        this.root.nodes.forEach(clearMeasurements),
        this.root.sharedNodes.clear());
    }
  };
}
function updateLayout(e) {
  e.updateLayout();
}
function notifyLayoutUpdate(e) {
  var a;
  const o = ((a = e.resumeFrom) == null ? void 0 : a.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    const { layoutBox: c, measuredBox: d } = e.layout,
      { animationType: h } = e.options,
      g = o.source !== e.layout.source;
    h === "size"
      ? eachAxis((et) => {
          const nt = g ? o.measuredBox[et] : o.layoutBox[et],
            ot = calcLength(nt);
          ((nt.min = c[et].min), (nt.max = nt.min + ot));
        })
      : shouldAnimatePositionOnly(h, o.layoutBox, c) &&
        eachAxis((et) => {
          const nt = g ? o.measuredBox[et] : o.layoutBox[et],
            ot = calcLength(c[et]);
          ((nt.max = nt.min + ot),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[et].max = e.relativeTarget[et].min + ot)));
        });
    const b = createDelta();
    calcBoxDelta(b, c, o.layoutBox);
    const j = createDelta();
    g
      ? calcBoxDelta(j, e.applyTransform(d, !0), o.measuredBox)
      : calcBoxDelta(j, c, o.layoutBox);
    const $ = !isDeltaZero(b);
    let _e = !1;
    if (!e.resumeFrom) {
      const et = e.getClosestProjectingParent();
      if (et && !et.resumeFrom) {
        const { snapshot: nt, layout: ot } = et;
        if (nt && ot) {
          const lt = createBox();
          calcRelativePosition(lt, o.layoutBox, nt.layoutBox);
          const ut = createBox();
          (calcRelativePosition(ut, c, ot.layoutBox),
            boxEqualsRounded(lt, ut) || (_e = !0),
            et.options.layoutRoot &&
              ((e.relativeTarget = ut),
              (e.relativeTargetOrigin = lt),
              (e.relativeParent = et)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: c,
      snapshot: o,
      delta: j,
      layoutDelta: b,
      hasLayoutChanged: $,
      hasRelativeLayoutChanged: _e,
    });
  } else if (e.isLead()) {
    const { onExitComplete: c } = e.options;
    c && c();
  }
  e.options.transition = void 0;
}
function propagateDirtyNodes(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function cleanDirtyNodes(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function clearSnapshot(e) {
  e.clearSnapshot();
}
function clearMeasurements(e) {
  e.clearMeasurements();
}
function clearIsLayoutDirty(e) {
  e.isLayoutDirty = !1;
}
function resetTransformStyle(e) {
  const { visualElement: o } = e.options;
  (o && o.getProps().onBeforeLayoutMeasure && o.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function finishAnimation(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function resolveTargetDelta(e) {
  e.resolveTargetDelta();
}
function calcProjection(e) {
  e.calcProjection();
}
function resetSkewAndRotation(e) {
  e.resetSkewAndRotation();
}
function removeLeadSnapshots(e) {
  e.removeLeadSnapshot();
}
function mixAxisDelta(e, o, a) {
  ((e.translate = mixNumber$1(o.translate, 0, a)),
    (e.scale = mixNumber$1(o.scale, 1, a)),
    (e.origin = o.origin),
    (e.originPoint = o.originPoint));
}
function mixAxis(e, o, a, c) {
  ((e.min = mixNumber$1(o.min, a.min, c)),
    (e.max = mixNumber$1(o.max, a.max, c)));
}
function mixBox(e, o, a, c) {
  (mixAxis(e.x, o.x, a.x, c), mixAxis(e.y, o.y, a.y, c));
}
function hasOpacityCrossfade(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const defaultLayoutTransition = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  userAgentContains = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  roundPoint =
    userAgentContains("applewebkit/") && !userAgentContains("chrome/")
      ? Math.round
      : noop;
function roundAxis(e) {
  ((e.min = roundPoint(e.min)), (e.max = roundPoint(e.max)));
}
function roundBox(e) {
  (roundAxis(e.x), roundAxis(e.y));
}
function shouldAnimatePositionOnly(e, o, a) {
  return (
    e === "position" ||
    (e === "preserve-aspect" && !isNear(aspectRatio(o), aspectRatio(a), 0.2))
  );
}
function checkNodeWasScrollRoot(e) {
  var o;
  return e !== e.root && ((o = e.scroll) == null ? void 0 : o.wasRoot);
}
const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (e, o) => addDomEvent(e, "resize", o),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  rootProjectionNode = { current: void 0 },
  HTMLProjectionNode = createProjectionNode({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!rootProjectionNode.current) {
        const e = new DocumentProjectionNode({});
        (e.mount(window),
          e.setOptions({ layoutScroll: !0 }),
          (rootProjectionNode.current = e));
      }
      return rootProjectionNode.current;
    },
    resetTransform: (e, o) => {
      e.style.transform = o !== void 0 ? o : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  drag = {
    pan: { Feature: PanGesture },
    drag: {
      Feature: DragGesture,
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout,
    },
  };
function handleHoverEvent(e, o, a) {
  const { props: c } = e;
  e.animationState &&
    c.whileHover &&
    e.animationState.setActive("whileHover", a === "Start");
  const d = "onHover" + a,
    h = c[d];
  h && frame.postRender(() => h(o, extractEventInfo(o)));
}
class HoverGesture extends Feature {
  mount() {
    const { current: o } = this.node;
    o &&
      (this.unmount = hover(
        o,
        (a, c) => (
          handleHoverEvent(this.node, c, "Start"),
          (d) => handleHoverEvent(this.node, d, "End")
        ),
      ));
  }
  unmount() {}
}
class FocusGesture extends Feature {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let o = !1;
    try {
      o = this.node.current.matches(":focus-visible");
    } catch {
      o = !0;
    }
    !o ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = pipe(
      addDomEvent(this.node.current, "focus", () => this.onFocus()),
      addDomEvent(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function handlePressEvent(e, o, a) {
  const { props: c } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    c.whileTap &&
    e.animationState.setActive("whileTap", a === "Start");
  const d = "onTap" + (a === "End" ? "" : a),
    h = c[d];
  h && frame.postRender(() => h(o, extractEventInfo(o)));
}
class PressGesture extends Feature {
  mount() {
    const { current: o } = this.node;
    o &&
      (this.unmount = press(
        o,
        (a, c) => (
          handlePressEvent(this.node, c, "Start"),
          (d, { success: h }) =>
            handlePressEvent(this.node, d, h ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const observerCallbacks = new WeakMap(),
  observers = new WeakMap(),
  fireObserverCallback = (e) => {
    const o = observerCallbacks.get(e.target);
    o && o(e);
  },
  fireAllObserverCallbacks = (e) => {
    e.forEach(fireObserverCallback);
  };
function initIntersectionObserver({ root: e, ...o }) {
  const a = e || document;
  observers.has(a) || observers.set(a, {});
  const c = observers.get(a),
    d = JSON.stringify(o);
  return (
    c[d] ||
      (c[d] = new IntersectionObserver(fireAllObserverCallbacks, {
        root: e,
        ...o,
      })),
    c[d]
  );
}
function observeIntersection(e, o, a) {
  const c = initIntersectionObserver(o);
  return (
    observerCallbacks.set(e, a),
    c.observe(e),
    () => {
      (observerCallbacks.delete(e), c.unobserve(e));
    }
  );
}
const thresholdNames = { some: 0, all: 1 };
class InViewFeature extends Feature {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: o = {} } = this.node.getProps(),
      { root: a, margin: c, amount: d = "some", once: h } = o,
      g = {
        root: a ? a.current : void 0,
        rootMargin: c,
        threshold: typeof d == "number" ? d : thresholdNames[d],
      },
      b = (j) => {
        const { isIntersecting: $ } = j;
        if (
          this.isInView === $ ||
          ((this.isInView = $), h && !$ && this.hasEnteredView)
        )
          return;
        ($ && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", $));
        const { onViewportEnter: _e, onViewportLeave: et } =
            this.node.getProps(),
          nt = $ ? _e : et;
        nt && nt(j);
      };
    return observeIntersection(this.node.current, g, b);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: o, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(hasViewportOptionChanged(o, a)) &&
      this.startObserver();
  }
  unmount() {}
}
function hasViewportOptionChanged(
  { viewport: e = {} },
  { viewport: o = {} } = {},
) {
  return (a) => e[a] !== o[a];
}
const gestureAnimations = {
    inView: { Feature: InViewFeature },
    tap: { Feature: PressGesture },
    focus: { Feature: FocusGesture },
    hover: { Feature: HoverGesture },
  },
  layout = { layout: { ProjectionNode: HTMLProjectionNode, MeasureLayout } },
  prefersReducedMotion = { current: null },
  hasReducedMotionListener = { current: !1 };
function initPrefersReducedMotion() {
  if (((hasReducedMotionListener.current = !0), !!isBrowser))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        o = () => (prefersReducedMotion.current = e.matches);
      (e.addEventListener("change", o), o());
    } else prefersReducedMotion.current = !1;
}
const visualElementStore = new WeakMap();
function updateMotionValuesFromProps(e, o, a) {
  for (const c in o) {
    const d = o[c],
      h = a[c];
    if (isMotionValue(d)) e.addValue(c, d);
    else if (isMotionValue(h)) e.addValue(c, motionValue(d, { owner: e }));
    else if (h !== d)
      if (e.hasValue(c)) {
        const g = e.getValue(c);
        g.liveStyle === !0 ? g.jump(d) : g.hasAnimated || g.set(d);
      } else {
        const g = e.getStaticValue(c);
        e.addValue(c, motionValue(g !== void 0 ? g : d, { owner: e }));
      }
  }
  for (const c in a) o[c] === void 0 && e.removeValue(c);
  return o;
}
const propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class VisualElement {
  scrapeMotionValuesFromProps(o, a, c) {
    return {};
  }
  constructor(
    {
      parent: o,
      props: a,
      presenceContext: c,
      reducedMotionConfig: d,
      blockInitialAnimation: h,
      visualState: g,
    },
    b = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = KeyframeResolver),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const nt = time.now();
        this.renderScheduledAt < nt &&
          ((this.renderScheduledAt = nt), frame.render(this.render, !1, !0));
      }));
    const { latestValues: j, renderState: $ } = g;
    ((this.latestValues = j),
      (this.baseTarget = { ...j }),
      (this.initialValues = a.initial ? { ...j } : {}),
      (this.renderState = $),
      (this.parent = o),
      (this.props = a),
      (this.presenceContext = c),
      (this.depth = o ? o.depth + 1 : 0),
      (this.reducedMotionConfig = d),
      (this.options = b),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = isControllingVariants(a)),
      (this.isVariantNode = isVariantNode(a)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(o && o.current)));
    const { willChange: _e, ...et } = this.scrapeMotionValuesFromProps(
      a,
      {},
      this,
    );
    for (const nt in et) {
      const ot = et[nt];
      j[nt] !== void 0 && isMotionValue(ot) && ot.set(j[nt], !1);
    }
  }
  mount(o) {
    ((this.current = o),
      visualElementStore.set(o, this),
      this.projection && !this.projection.instance && this.projection.mount(o),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((a, c) => this.bindToMotionValue(c, a)),
      hasReducedMotionListener.current || initPrefersReducedMotion(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : prefersReducedMotion.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      cancelFrame(this.notifyUpdate),
      cancelFrame(this.render),
      this.valueSubscriptions.forEach((o) => o()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const o in this.events) this.events[o].clear();
    for (const o in this.features) {
      const a = this.features[o];
      a && (a.unmount(), (a.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(o, a) {
    this.valueSubscriptions.has(o) && this.valueSubscriptions.get(o)();
    const c = transformProps.has(o);
    c && this.onBindTransform && this.onBindTransform();
    const d = a.on("change", (b) => {
        ((this.latestValues[o] = b),
          this.props.onUpdate && frame.preRender(this.notifyUpdate),
          c && this.projection && (this.projection.isTransformDirty = !0));
      }),
      h = a.on("renderRequest", this.scheduleRender);
    let g;
    (window.MotionCheckAppearSync &&
      (g = window.MotionCheckAppearSync(this, o, a)),
      this.valueSubscriptions.set(o, () => {
        (d(), h(), g && g(), a.owner && a.stop());
      }));
  }
  sortNodePosition(o) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== o.type
      ? 0
      : this.sortInstanceNodePosition(this.current, o.current);
  }
  updateFeatures() {
    let o = "animation";
    for (o in featureDefinitions) {
      const a = featureDefinitions[o];
      if (!a) continue;
      const { isEnabled: c, Feature: d } = a;
      if (
        (!this.features[o] &&
          d &&
          c(this.props) &&
          (this.features[o] = new d(this)),
        this.features[o])
      ) {
        const h = this.features[o];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : createBox();
  }
  getStaticValue(o) {
    return this.latestValues[o];
  }
  setStaticValue(o, a) {
    this.latestValues[o] = a;
  }
  update(o, a) {
    ((o.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = o),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = a));
    for (let c = 0; c < propEventHandlers.length; c++) {
      const d = propEventHandlers[c];
      this.propEventSubscriptions[d] &&
        (this.propEventSubscriptions[d](),
        delete this.propEventSubscriptions[d]);
      const h = "on" + d,
        g = o[h];
      g && (this.propEventSubscriptions[d] = this.on(d, g));
    }
    ((this.prevMotionValues = updateMotionValuesFromProps(
      this,
      this.scrapeMotionValuesFromProps(o, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(o) {
    return this.props.variants ? this.props.variants[o] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(o) {
    const a = this.getClosestVariantNode();
    if (a)
      return (
        a.variantChildren && a.variantChildren.add(o),
        () => a.variantChildren.delete(o)
      );
  }
  addValue(o, a) {
    const c = this.values.get(o);
    a !== c &&
      (c && this.removeValue(o),
      this.bindToMotionValue(o, a),
      this.values.set(o, a),
      (this.latestValues[o] = a.get()));
  }
  removeValue(o) {
    this.values.delete(o);
    const a = this.valueSubscriptions.get(o);
    (a && (a(), this.valueSubscriptions.delete(o)),
      delete this.latestValues[o],
      this.removeValueFromRenderState(o, this.renderState));
  }
  hasValue(o) {
    return this.values.has(o);
  }
  getValue(o, a) {
    if (this.props.values && this.props.values[o]) return this.props.values[o];
    let c = this.values.get(o);
    return (
      c === void 0 &&
        a !== void 0 &&
        ((c = motionValue(a === null ? void 0 : a, { owner: this })),
        this.addValue(o, c)),
      c
    );
  }
  readValue(o, a) {
    let c =
      this.latestValues[o] !== void 0 || !this.current
        ? this.latestValues[o]
        : (this.getBaseTargetFromProps(this.props, o) ??
          this.readValueFromInstance(this.current, o, this.options));
    return (
      c != null &&
        (typeof c == "string" && (isNumericalString(c) || isZeroValueString(c))
          ? (c = parseFloat(c))
          : !findValueType(c) &&
            complex.test(a) &&
            (c = getAnimatableNone(o, a)),
        this.setBaseTarget(o, isMotionValue(c) ? c.get() : c)),
      isMotionValue(c) ? c.get() : c
    );
  }
  setBaseTarget(o, a) {
    this.baseTarget[o] = a;
  }
  getBaseTarget(o) {
    var h;
    const { initial: a } = this.props;
    let c;
    if (typeof a == "string" || typeof a == "object") {
      const g = resolveVariantFromProps(
        this.props,
        a,
        (h = this.presenceContext) == null ? void 0 : h.custom,
      );
      g && (c = g[o]);
    }
    if (a && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, o);
    return d !== void 0 && !isMotionValue(d)
      ? d
      : this.initialValues[o] !== void 0 && c === void 0
        ? void 0
        : this.baseTarget[o];
  }
  on(o, a) {
    return (
      this.events[o] || (this.events[o] = new SubscriptionManager()),
      this.events[o].add(a)
    );
  }
  notify(o, ...a) {
    this.events[o] && this.events[o].notify(...a);
  }
}
class DOMVisualElement extends VisualElement {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = DOMKeyframesResolver));
  }
  sortInstanceNodePosition(o, a) {
    return o.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(o, a) {
    return o.style ? o.style[a] : void 0;
  }
  removeValueFromRenderState(o, { vars: a, style: c }) {
    (delete a[o], delete c[o]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: o } = this.props;
    isMotionValue(o) &&
      (this.childSubscription = o.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
}
function renderHTML(e, { style: o, vars: a }, c, d) {
  const h = e.style;
  let g;
  for (g in o) h[g] = o[g];
  d == null || d.applyProjectionStyles(h, c);
  for (g in a) h.setProperty(g, a[g]);
}
function getComputedStyle$1(e) {
  return window.getComputedStyle(e);
}
class HTMLVisualElement extends DOMVisualElement {
  constructor() {
    (super(...arguments),
      (this.type = "html"),
      (this.renderInstance = renderHTML));
  }
  readValueFromInstance(o, a) {
    var c;
    if (transformProps.has(a))
      return (c = this.projection) != null && c.isProjecting
        ? defaultTransformValue(a)
        : readTransformValue(o, a);
    {
      const d = getComputedStyle$1(o),
        h = (isCSSVariableName(a) ? d.getPropertyValue(a) : d[a]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(o, { transformPagePoint: a }) {
    return measureViewportBox(o, a);
  }
  build(o, a, c) {
    buildHTMLStyles(o, a, c.transformTemplate);
  }
  scrapeMotionValuesFromProps(o, a, c) {
    return scrapeMotionValuesFromProps$1(o, a, c);
  }
}
const camelCaseAttributes = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function renderSVG(e, o, a, c) {
  renderHTML(e, o, void 0, c);
  for (const d in o.attrs)
    e.setAttribute(camelCaseAttributes.has(d) ? d : camelToDash(d), o.attrs[d]);
}
class SVGVisualElement extends DOMVisualElement {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = createBox));
  }
  getBaseTargetFromProps(o, a) {
    return o[a];
  }
  readValueFromInstance(o, a) {
    if (transformProps.has(a)) {
      const c = getDefaultValueType(a);
      return (c && c.default) || 0;
    }
    return (
      (a = camelCaseAttributes.has(a) ? a : camelToDash(a)),
      o.getAttribute(a)
    );
  }
  scrapeMotionValuesFromProps(o, a, c) {
    return scrapeMotionValuesFromProps(o, a, c);
  }
  build(o, a, c) {
    buildSVGAttrs(o, a, this.isSVGTag, c.transformTemplate, c.style);
  }
  renderInstance(o, a, c, d) {
    renderSVG(o, a, c, d);
  }
  mount(o) {
    ((this.isSVGTag = isSVGTag(o.tagName)), super.mount(o));
  }
}
const createDomVisualElement = (e, o) =>
    isSVGComponent(e)
      ? new SVGVisualElement(o)
      : new HTMLVisualElement(o, {
          allowProjection: e !== reactExports.Fragment,
        }),
  createMotionComponent = createMotionComponentFactory(
    { ...animations, ...gestureAnimations, ...drag, ...layout },
    createDomVisualElement,
  ),
  motion = createDOMMotionComponentProxy(createMotionComponent);
function r(e) {
  var o,
    a,
    c = "";
  if (typeof e == "string" || typeof e == "number") c += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var d = e.length;
      for (o = 0; o < d; o++)
        e[o] && (a = r(e[o])) && (c && (c += " "), (c += a));
    } else for (a in e) e[a] && (c && (c += " "), (c += a));
  return c;
}
function clsx() {
  for (var e, o, a = 0, c = "", d = arguments.length; a < d; a++)
    (e = arguments[a]) && (o = r(e)) && (c && (c += " "), (c += o));
  return c;
}
const CLASS_PART_SEPARATOR = "-",
  createClassGroupUtils = (e) => {
    const o = createClassMap(e),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: c } = e;
    return {
      getClassGroupId: (g) => {
        const b = g.split(CLASS_PART_SEPARATOR);
        return (
          b[0] === "" && b.length !== 1 && b.shift(),
          getGroupRecursive(b, o) || getGroupIdForArbitraryProperty(g)
        );
      },
      getConflictingClassGroupIds: (g, b) => {
        const j = a[g] || [];
        return b && c[g] ? [...j, ...c[g]] : j;
      },
    };
  },
  getGroupRecursive = (e, o) => {
    var g;
    if (e.length === 0) return o.classGroupId;
    const a = e[0],
      c = o.nextPart.get(a),
      d = c ? getGroupRecursive(e.slice(1), c) : void 0;
    if (d) return d;
    if (o.validators.length === 0) return;
    const h = e.join(CLASS_PART_SEPARATOR);
    return (g = o.validators.find(({ validator: b }) => b(h))) == null
      ? void 0
      : g.classGroupId;
  },
  arbitraryPropertyRegex = /^\[(.+)\]$/,
  getGroupIdForArbitraryProperty = (e) => {
    if (arbitraryPropertyRegex.test(e)) {
      const o = arbitraryPropertyRegex.exec(e)[1],
        a = o == null ? void 0 : o.substring(0, o.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  createClassMap = (e) => {
    const { theme: o, classGroups: a } = e,
      c = { nextPart: new Map(), validators: [] };
    for (const d in a) processClassesRecursively(a[d], c, d, o);
    return c;
  },
  processClassesRecursively = (e, o, a, c) => {
    e.forEach((d) => {
      if (typeof d == "string") {
        const h = d === "" ? o : getPart(o, d);
        h.classGroupId = a;
        return;
      }
      if (typeof d == "function") {
        if (isThemeGetter(d)) {
          processClassesRecursively(d(c), o, a, c);
          return;
        }
        o.validators.push({ validator: d, classGroupId: a });
        return;
      }
      Object.entries(d).forEach(([h, g]) => {
        processClassesRecursively(g, getPart(o, h), a, c);
      });
    });
  },
  getPart = (e, o) => {
    let a = e;
    return (
      o.split(CLASS_PART_SEPARATOR).forEach((c) => {
        (a.nextPart.has(c) ||
          a.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(c)));
      }),
      a
    );
  },
  isThemeGetter = (e) => e.isThemeGetter,
  createLruCache = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      a = new Map(),
      c = new Map();
    const d = (h, g) => {
      (a.set(h, g), o++, o > e && ((o = 0), (c = a), (a = new Map())));
    };
    return {
      get(h) {
        let g = a.get(h);
        if (g !== void 0) return g;
        if ((g = c.get(h)) !== void 0) return (d(h, g), g);
      },
      set(h, g) {
        a.has(h) ? a.set(h, g) : d(h, g);
      },
    };
  },
  IMPORTANT_MODIFIER = "!",
  MODIFIER_SEPARATOR = ":",
  MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length,
  createParseClassName = (e) => {
    const { prefix: o, experimentalParseClassName: a } = e;
    let c = (d) => {
      const h = [];
      let g = 0,
        b = 0,
        j = 0,
        $;
      for (let lt = 0; lt < d.length; lt++) {
        let ut = d[lt];
        if (g === 0 && b === 0) {
          if (ut === MODIFIER_SEPARATOR) {
            (h.push(d.slice(j, lt)), (j = lt + MODIFIER_SEPARATOR_LENGTH));
            continue;
          }
          if (ut === "/") {
            $ = lt;
            continue;
          }
        }
        ut === "["
          ? g++
          : ut === "]"
            ? g--
            : ut === "("
              ? b++
              : ut === ")" && b--;
      }
      const _e = h.length === 0 ? d : d.substring(j),
        et = stripImportantModifier(_e),
        nt = et !== _e,
        ot = $ && $ > j ? $ - j : void 0;
      return {
        modifiers: h,
        hasImportantModifier: nt,
        baseClassName: et,
        maybePostfixModifierPosition: ot,
      };
    };
    if (o) {
      const d = o + MODIFIER_SEPARATOR,
        h = c;
      c = (g) =>
        g.startsWith(d)
          ? h(g.substring(d.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: g,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (a) {
      const d = c;
      c = (h) => a({ className: h, parseClassName: d });
    }
    return c;
  },
  stripImportantModifier = (e) =>
    e.endsWith(IMPORTANT_MODIFIER)
      ? e.substring(0, e.length - 1)
      : e.startsWith(IMPORTANT_MODIFIER)
        ? e.substring(1)
        : e,
  createSortModifiers = (e) => {
    const o = Object.fromEntries(e.orderSensitiveModifiers.map((c) => [c, !0]));
    return (c) => {
      if (c.length <= 1) return c;
      const d = [];
      let h = [];
      return (
        c.forEach((g) => {
          g[0] === "[" || o[g] ? (d.push(...h.sort(), g), (h = [])) : h.push(g);
        }),
        d.push(...h.sort()),
        d
      );
    };
  },
  createConfigUtils = (e) => ({
    cache: createLruCache(e.cacheSize),
    parseClassName: createParseClassName(e),
    sortModifiers: createSortModifiers(e),
    ...createClassGroupUtils(e),
  }),
  SPLIT_CLASSES_REGEX = /\s+/,
  mergeClassList = (e, o) => {
    const {
        parseClassName: a,
        getClassGroupId: c,
        getConflictingClassGroupIds: d,
        sortModifiers: h,
      } = o,
      g = [],
      b = e.trim().split(SPLIT_CLASSES_REGEX);
    let j = "";
    for (let $ = b.length - 1; $ >= 0; $ -= 1) {
      const _e = b[$],
        {
          isExternal: et,
          modifiers: nt,
          hasImportantModifier: ot,
          baseClassName: lt,
          maybePostfixModifierPosition: ut,
        } = a(_e);
      if (et) {
        j = _e + (j.length > 0 ? " " + j : j);
        continue;
      }
      let gt = !!ut,
        it = c(gt ? lt.substring(0, ut) : lt);
      if (!it) {
        if (!gt) {
          j = _e + (j.length > 0 ? " " + j : j);
          continue;
        }
        if (((it = c(lt)), !it)) {
          j = _e + (j.length > 0 ? " " + j : j);
          continue;
        }
        gt = !1;
      }
      const rt = h(nt).join(":"),
        st = ot ? rt + IMPORTANT_MODIFIER : rt,
        ct = st + it;
      if (g.includes(ct)) continue;
      g.push(ct);
      const ft = d(it, gt);
      for (let pt = 0; pt < ft.length; ++pt) {
        const mt = ft[pt];
        g.push(st + mt);
      }
      j = _e + (j.length > 0 ? " " + j : j);
    }
    return j;
  };
function twJoin() {
  let e = 0,
    o,
    a,
    c = "";
  for (; e < arguments.length; )
    (o = arguments[e++]) && (a = toValue(o)) && (c && (c += " "), (c += a));
  return c;
}
const toValue = (e) => {
  if (typeof e == "string") return e;
  let o,
    a = "";
  for (let c = 0; c < e.length; c++)
    e[c] && (o = toValue(e[c])) && (a && (a += " "), (a += o));
  return a;
};
function createTailwindMerge(e, ...o) {
  let a,
    c,
    d,
    h = g;
  function g(j) {
    const $ = o.reduce((_e, et) => et(_e), e());
    return (
      (a = createConfigUtils($)),
      (c = a.cache.get),
      (d = a.cache.set),
      (h = b),
      b(j)
    );
  }
  function b(j) {
    const $ = c(j);
    if ($) return $;
    const _e = mergeClassList(j, a);
    return (d(j, _e), _e);
  }
  return function () {
    return h(twJoin.apply(null, arguments));
  };
}
const fromTheme = (e) => {
    const o = (a) => a[e] || [];
    return ((o.isThemeGetter = !0), o);
  },
  arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  fractionRegex = /^\d+\/\d+$/,
  tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  lengthUnitRegex =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  shadowRegex =
    /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  imageRegex =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  isFraction = (e) => fractionRegex.test(e),
  isNumber = (e) => !!e && !Number.isNaN(Number(e)),
  isInteger = (e) => !!e && Number.isInteger(Number(e)),
  isPercent = (e) => e.endsWith("%") && isNumber(e.slice(0, -1)),
  isTshirtSize = (e) => tshirtUnitRegex.test(e),
  isAny = () => !0,
  isLengthOnly = (e) => lengthUnitRegex.test(e) && !colorFunctionRegex.test(e),
  isNever = () => !1,
  isShadow = (e) => shadowRegex.test(e),
  isImage = (e) => imageRegex.test(e),
  isAnyNonArbitrary = (e) => !isArbitraryValue(e) && !isArbitraryVariable(e),
  isArbitrarySize = (e) => getIsArbitraryValue(e, isLabelSize, isNever),
  isArbitraryValue = (e) => arbitraryValueRegex.test(e),
  isArbitraryLength = (e) =>
    getIsArbitraryValue(e, isLabelLength, isLengthOnly),
  isArbitraryNumber = (e) => getIsArbitraryValue(e, isLabelNumber, isNumber),
  isArbitraryPosition = (e) => getIsArbitraryValue(e, isLabelPosition, isNever),
  isArbitraryImage = (e) => getIsArbitraryValue(e, isLabelImage, isImage),
  isArbitraryShadow = (e) => getIsArbitraryValue(e, isLabelShadow, isShadow),
  isArbitraryVariable = (e) => arbitraryVariableRegex.test(e),
  isArbitraryVariableLength = (e) => getIsArbitraryVariable(e, isLabelLength),
  isArbitraryVariableFamilyName = (e) =>
    getIsArbitraryVariable(e, isLabelFamilyName),
  isArbitraryVariablePosition = (e) =>
    getIsArbitraryVariable(e, isLabelPosition),
  isArbitraryVariableSize = (e) => getIsArbitraryVariable(e, isLabelSize),
  isArbitraryVariableImage = (e) => getIsArbitraryVariable(e, isLabelImage),
  isArbitraryVariableShadow = (e) =>
    getIsArbitraryVariable(e, isLabelShadow, !0),
  getIsArbitraryValue = (e, o, a) => {
    const c = arbitraryValueRegex.exec(e);
    return c ? (c[1] ? o(c[1]) : a(c[2])) : !1;
  },
  getIsArbitraryVariable = (e, o, a = !1) => {
    const c = arbitraryVariableRegex.exec(e);
    return c ? (c[1] ? o(c[1]) : a) : !1;
  },
  isLabelPosition = (e) => e === "position" || e === "percentage",
  isLabelImage = (e) => e === "image" || e === "url",
  isLabelSize = (e) => e === "length" || e === "size" || e === "bg-size",
  isLabelLength = (e) => e === "length",
  isLabelNumber = (e) => e === "number",
  isLabelFamilyName = (e) => e === "family-name",
  isLabelShadow = (e) => e === "shadow",
  getDefaultConfig = () => {
    const e = fromTheme("color"),
      o = fromTheme("font"),
      a = fromTheme("text"),
      c = fromTheme("font-weight"),
      d = fromTheme("tracking"),
      h = fromTheme("leading"),
      g = fromTheme("breakpoint"),
      b = fromTheme("container"),
      j = fromTheme("spacing"),
      $ = fromTheme("radius"),
      _e = fromTheme("shadow"),
      et = fromTheme("inset-shadow"),
      nt = fromTheme("text-shadow"),
      ot = fromTheme("drop-shadow"),
      lt = fromTheme("blur"),
      ut = fromTheme("perspective"),
      gt = fromTheme("aspect"),
      it = fromTheme("ease"),
      rt = fromTheme("animate"),
      st = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ct = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      ft = () => [...ct(), isArbitraryVariable, isArbitraryValue],
      pt = () => ["auto", "hidden", "clip", "visible", "scroll"],
      mt = () => ["auto", "contain", "none"],
      dt = () => [isArbitraryVariable, isArbitraryValue, j],
      wt = () => [isFraction, "full", "auto", ...dt()],
      bt = () => [
        isInteger,
        "none",
        "subgrid",
        isArbitraryVariable,
        isArbitraryValue,
      ],
      Ct = () => [
        "auto",
        { span: ["full", isInteger, isArbitraryVariable, isArbitraryValue] },
        isInteger,
        isArbitraryVariable,
        isArbitraryValue,
      ],
      Pt = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue],
      Vt = () => [
        "auto",
        "min",
        "max",
        "fr",
        isArbitraryVariable,
        isArbitraryValue,
      ],
      Dt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Mt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      yt = () => ["auto", ...dt()],
      ht = () => [
        isFraction,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...dt(),
      ],
      at = () => [e, isArbitraryVariable, isArbitraryValue],
      vt = () => [
        ...ct(),
        isArbitraryVariablePosition,
        isArbitraryPosition,
        { position: [isArbitraryVariable, isArbitraryValue] },
      ],
      xt = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      St = () => [
        "auto",
        "cover",
        "contain",
        isArbitraryVariableSize,
        isArbitrarySize,
        { size: [isArbitraryVariable, isArbitraryValue] },
      ],
      kt = () => [isPercent, isArbitraryVariableLength, isArbitraryLength],
      Et = () => ["", "none", "full", $, isArbitraryVariable, isArbitraryValue],
      Tt = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength],
      Rt = () => ["solid", "dashed", "dotted", "double"],
      At = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      jt = () => [
        isNumber,
        isPercent,
        isArbitraryVariablePosition,
        isArbitraryPosition,
      ],
      $t = () => ["", "none", lt, isArbitraryVariable, isArbitraryValue],
      Nt = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue],
      Lt = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue],
      _t = () => [isNumber, isArbitraryVariable, isArbitraryValue],
      It = () => [isFraction, "full", ...dt()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [isTshirtSize],
        breakpoint: [isTshirtSize],
        color: [isAny],
        container: [isTshirtSize],
        "drop-shadow": [isTshirtSize],
        ease: ["in", "out", "in-out"],
        font: [isAnyNonArbitrary],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [isTshirtSize],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [isTshirtSize],
        shadow: [isTshirtSize],
        spacing: ["px", isNumber],
        text: [isTshirtSize],
        "text-shadow": [isTshirtSize],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              isFraction,
              isArbitraryValue,
              isArbitraryVariable,
              gt,
            ],
          },
        ],
        container: ["container"],
        columns: [
          { columns: [isNumber, isArbitraryValue, isArbitraryVariable, b] },
        ],
        "break-after": [{ "break-after": st() }],
        "break-before": [{ "break-before": st() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: ft() }],
        overflow: [{ overflow: pt() }],
        "overflow-x": [{ "overflow-x": pt() }],
        "overflow-y": [{ "overflow-y": pt() }],
        overscroll: [{ overscroll: mt() }],
        "overscroll-x": [{ "overscroll-x": mt() }],
        "overscroll-y": [{ "overscroll-y": mt() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: wt() }],
        "inset-x": [{ "inset-x": wt() }],
        "inset-y": [{ "inset-y": wt() }],
        start: [{ start: wt() }],
        end: [{ end: wt() }],
        top: [{ top: wt() }],
        right: [{ right: wt() }],
        bottom: [{ bottom: wt() }],
        left: [{ left: wt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue] }],
        basis: [{ basis: [isFraction, "full", "auto", b, ...dt()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [
          {
            flex: [
              isNumber,
              isFraction,
              "auto",
              "initial",
              "none",
              isArbitraryValue,
            ],
          },
        ],
        grow: [{ grow: ["", isNumber, isArbitraryVariable, isArbitraryValue] }],
        shrink: [
          { shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        order: [
          {
            order: [
              isInteger,
              "first",
              "last",
              "none",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "grid-cols": [{ "grid-cols": bt() }],
        "col-start-end": [{ col: Ct() }],
        "col-start": [{ "col-start": Pt() }],
        "col-end": [{ "col-end": Pt() }],
        "grid-rows": [{ "grid-rows": bt() }],
        "row-start-end": [{ row: Ct() }],
        "row-start": [{ "row-start": Pt() }],
        "row-end": [{ "row-end": Pt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Vt() }],
        "auto-rows": [{ "auto-rows": Vt() }],
        gap: [{ gap: dt() }],
        "gap-x": [{ "gap-x": dt() }],
        "gap-y": [{ "gap-y": dt() }],
        "justify-content": [{ justify: [...Dt(), "normal"] }],
        "justify-items": [{ "justify-items": [...Mt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Mt()] }],
        "align-content": [{ content: ["normal", ...Dt()] }],
        "align-items": [{ items: [...Mt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Mt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Dt() }],
        "place-items": [{ "place-items": [...Mt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Mt()] }],
        p: [{ p: dt() }],
        px: [{ px: dt() }],
        py: [{ py: dt() }],
        ps: [{ ps: dt() }],
        pe: [{ pe: dt() }],
        pt: [{ pt: dt() }],
        pr: [{ pr: dt() }],
        pb: [{ pb: dt() }],
        pl: [{ pl: dt() }],
        m: [{ m: yt() }],
        mx: [{ mx: yt() }],
        my: [{ my: yt() }],
        ms: [{ ms: yt() }],
        me: [{ me: yt() }],
        mt: [{ mt: yt() }],
        mr: [{ mr: yt() }],
        mb: [{ mb: yt() }],
        ml: [{ ml: yt() }],
        "space-x": [{ "space-x": dt() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": dt() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: ht() }],
        w: [{ w: [b, "screen", ...ht()] }],
        "min-w": [{ "min-w": [b, "screen", "none", ...ht()] }],
        "max-w": [
          { "max-w": [b, "screen", "none", "prose", { screen: [g] }, ...ht()] },
        ],
        h: [{ h: ["screen", "lh", ...ht()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...ht()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...ht()] }],
        "font-size": [
          { text: ["base", a, isArbitraryVariableLength, isArbitraryLength] },
        ],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [c, isArbitraryVariable, isArbitraryNumber] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              isPercent,
              isArbitraryValue,
            ],
          },
        ],
        "font-family": [
          { font: [isArbitraryVariableFamilyName, isArbitraryValue, o] },
        ],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [d, isArbitraryVariable, isArbitraryValue] }],
        "line-clamp": [
          {
            "line-clamp": [
              isNumber,
              "none",
              isArbitraryVariable,
              isArbitraryNumber,
            ],
          },
        ],
        leading: [{ leading: [h, ...dt()] }],
        "list-image": [
          { "list-image": ["none", isArbitraryVariable, isArbitraryValue] },
        ],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: at() }],
        "text-color": [{ text: at() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Rt(), "wavy"] }],
        "text-decoration-thickness": [
          {
            decoration: [
              isNumber,
              "from-font",
              "auto",
              isArbitraryVariable,
              isArbitraryLength,
            ],
          },
        ],
        "text-decoration-color": [{ decoration: at() }],
        "underline-offset": [
          {
            "underline-offset": [
              isNumber,
              "auto",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: dt() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", isArbitraryVariable, isArbitraryValue] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: vt() }],
        "bg-repeat": [{ bg: xt() }],
        "bg-size": [{ bg: St() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  isInteger,
                  isArbitraryVariable,
                  isArbitraryValue,
                ],
                radial: ["", isArbitraryVariable, isArbitraryValue],
                conic: [isInteger, isArbitraryVariable, isArbitraryValue],
              },
              isArbitraryVariableImage,
              isArbitraryImage,
            ],
          },
        ],
        "bg-color": [{ bg: at() }],
        "gradient-from-pos": [{ from: kt() }],
        "gradient-via-pos": [{ via: kt() }],
        "gradient-to-pos": [{ to: kt() }],
        "gradient-from": [{ from: at() }],
        "gradient-via": [{ via: at() }],
        "gradient-to": [{ to: at() }],
        rounded: [{ rounded: Et() }],
        "rounded-s": [{ "rounded-s": Et() }],
        "rounded-e": [{ "rounded-e": Et() }],
        "rounded-t": [{ "rounded-t": Et() }],
        "rounded-r": [{ "rounded-r": Et() }],
        "rounded-b": [{ "rounded-b": Et() }],
        "rounded-l": [{ "rounded-l": Et() }],
        "rounded-ss": [{ "rounded-ss": Et() }],
        "rounded-se": [{ "rounded-se": Et() }],
        "rounded-ee": [{ "rounded-ee": Et() }],
        "rounded-es": [{ "rounded-es": Et() }],
        "rounded-tl": [{ "rounded-tl": Et() }],
        "rounded-tr": [{ "rounded-tr": Et() }],
        "rounded-br": [{ "rounded-br": Et() }],
        "rounded-bl": [{ "rounded-bl": Et() }],
        "border-w": [{ border: Tt() }],
        "border-w-x": [{ "border-x": Tt() }],
        "border-w-y": [{ "border-y": Tt() }],
        "border-w-s": [{ "border-s": Tt() }],
        "border-w-e": [{ "border-e": Tt() }],
        "border-w-t": [{ "border-t": Tt() }],
        "border-w-r": [{ "border-r": Tt() }],
        "border-w-b": [{ "border-b": Tt() }],
        "border-w-l": [{ "border-l": Tt() }],
        "divide-x": [{ "divide-x": Tt() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Tt() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Rt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Rt(), "hidden", "none"] }],
        "border-color": [{ border: at() }],
        "border-color-x": [{ "border-x": at() }],
        "border-color-y": [{ "border-y": at() }],
        "border-color-s": [{ "border-s": at() }],
        "border-color-e": [{ "border-e": at() }],
        "border-color-t": [{ "border-t": at() }],
        "border-color-r": [{ "border-r": at() }],
        "border-color-b": [{ "border-b": at() }],
        "border-color-l": [{ "border-l": at() }],
        "divide-color": [{ divide: at() }],
        "outline-style": [{ outline: [...Rt(), "none", "hidden"] }],
        "outline-offset": [
          {
            "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue],
          },
        ],
        "outline-w": [
          {
            outline: [
              "",
              isNumber,
              isArbitraryVariableLength,
              isArbitraryLength,
            ],
          },
        ],
        "outline-color": [{ outline: at() }],
        shadow: [
          {
            shadow: [
              "",
              "none",
              _e,
              isArbitraryVariableShadow,
              isArbitraryShadow,
            ],
          },
        ],
        "shadow-color": [{ shadow: at() }],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              et,
              isArbitraryVariableShadow,
              isArbitraryShadow,
            ],
          },
        ],
        "inset-shadow-color": [{ "inset-shadow": at() }],
        "ring-w": [{ ring: Tt() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: at() }],
        "ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
        "ring-offset-color": [{ "ring-offset": at() }],
        "inset-ring-w": [{ "inset-ring": Tt() }],
        "inset-ring-color": [{ "inset-ring": at() }],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              nt,
              isArbitraryVariableShadow,
              isArbitraryShadow,
            ],
          },
        ],
        "text-shadow-color": [{ "text-shadow": at() }],
        opacity: [
          { opacity: [isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        "mix-blend": [
          { "mix-blend": [...At(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": At() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": jt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": jt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": at() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": at() }],
        "mask-image-t-from-pos": [{ "mask-t-from": jt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": jt() }],
        "mask-image-t-from-color": [{ "mask-t-from": at() }],
        "mask-image-t-to-color": [{ "mask-t-to": at() }],
        "mask-image-r-from-pos": [{ "mask-r-from": jt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": jt() }],
        "mask-image-r-from-color": [{ "mask-r-from": at() }],
        "mask-image-r-to-color": [{ "mask-r-to": at() }],
        "mask-image-b-from-pos": [{ "mask-b-from": jt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": jt() }],
        "mask-image-b-from-color": [{ "mask-b-from": at() }],
        "mask-image-b-to-color": [{ "mask-b-to": at() }],
        "mask-image-l-from-pos": [{ "mask-l-from": jt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": jt() }],
        "mask-image-l-from-color": [{ "mask-l-from": at() }],
        "mask-image-l-to-color": [{ "mask-l-to": at() }],
        "mask-image-x-from-pos": [{ "mask-x-from": jt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": jt() }],
        "mask-image-x-from-color": [{ "mask-x-from": at() }],
        "mask-image-x-to-color": [{ "mask-x-to": at() }],
        "mask-image-y-from-pos": [{ "mask-y-from": jt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": jt() }],
        "mask-image-y-from-color": [{ "mask-y-from": at() }],
        "mask-image-y-to-color": [{ "mask-y-to": at() }],
        "mask-image-radial": [
          { "mask-radial": [isArbitraryVariable, isArbitraryValue] },
        ],
        "mask-image-radial-from-pos": [{ "mask-radial-from": jt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": jt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": at() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": at() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": ct() }],
        "mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": jt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": jt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": at() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": at() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: vt() }],
        "mask-repeat": [{ mask: xt() }],
        "mask-size": [{ mask: St() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [
          { mask: ["none", isArbitraryVariable, isArbitraryValue] },
        ],
        filter: [
          { filter: ["", "none", isArbitraryVariable, isArbitraryValue] },
        ],
        blur: [{ blur: $t() }],
        brightness: [
          { brightness: [isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        contrast: [
          { contrast: [isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              ot,
              isArbitraryVariableShadow,
              isArbitraryShadow,
            ],
          },
        ],
        "drop-shadow-color": [{ "drop-shadow": at() }],
        grayscale: [
          { grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        "hue-rotate": [
          { "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        invert: [
          { invert: ["", isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        saturate: [
          { saturate: [isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        sepia: [
          { sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue] },
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-blur": [{ "backdrop-blur": $t() }],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": dt() }],
        "border-spacing-x": [{ "border-spacing-x": dt() }],
        "border-spacing-y": [{ "border-spacing-y": dt() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [
          {
            duration: [
              isNumber,
              "initial",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              it,
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        delay: [{ delay: [isNumber, isArbitraryVariable, isArbitraryValue] }],
        animate: [
          { animate: ["none", rt, isArbitraryVariable, isArbitraryValue] },
        ],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [
          { perspective: [ut, isArbitraryVariable, isArbitraryValue] },
        ],
        "perspective-origin": [{ "perspective-origin": ft() }],
        rotate: [{ rotate: Nt() }],
        "rotate-x": [{ "rotate-x": Nt() }],
        "rotate-y": [{ "rotate-y": Nt() }],
        "rotate-z": [{ "rotate-z": Nt() }],
        scale: [{ scale: Lt() }],
        "scale-x": [{ "scale-x": Lt() }],
        "scale-y": [{ "scale-y": Lt() }],
        "scale-z": [{ "scale-z": Lt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: _t() }],
        "skew-x": [{ "skew-x": _t() }],
        "skew-y": [{ "skew-y": _t() }],
        transform: [
          {
            transform: [
              isArbitraryVariable,
              isArbitraryValue,
              "",
              "none",
              "gpu",
              "cpu",
            ],
          },
        ],
        "transform-origin": [{ origin: ft() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: It() }],
        "translate-x": [{ "translate-x": It() }],
        "translate-y": [{ "translate-y": It() }],
        "translate-z": [{ "translate-z": It() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: at() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: at() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": dt() }],
        "scroll-mx": [{ "scroll-mx": dt() }],
        "scroll-my": [{ "scroll-my": dt() }],
        "scroll-ms": [{ "scroll-ms": dt() }],
        "scroll-me": [{ "scroll-me": dt() }],
        "scroll-mt": [{ "scroll-mt": dt() }],
        "scroll-mr": [{ "scroll-mr": dt() }],
        "scroll-mb": [{ "scroll-mb": dt() }],
        "scroll-ml": [{ "scroll-ml": dt() }],
        "scroll-p": [{ "scroll-p": dt() }],
        "scroll-px": [{ "scroll-px": dt() }],
        "scroll-py": [{ "scroll-py": dt() }],
        "scroll-ps": [{ "scroll-ps": dt() }],
        "scroll-pe": [{ "scroll-pe": dt() }],
        "scroll-pt": [{ "scroll-pt": dt() }],
        "scroll-pr": [{ "scroll-pr": dt() }],
        "scroll-pb": [{ "scroll-pb": dt() }],
        "scroll-pl": [{ "scroll-pl": dt() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              isArbitraryVariable,
              isArbitraryValue,
            ],
          },
        ],
        fill: [{ fill: ["none", ...at()] }],
        "stroke-w": [
          {
            stroke: [
              isNumber,
              isArbitraryVariableLength,
              isArbitraryLength,
              isArbitraryNumber,
            ],
          },
        ],
        stroke: [{ stroke: ["none", ...at()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  twMerge = createTailwindMerge(getDefaultConfig);
function cn(...e) {
  return twMerge(clsx(e));
}
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  getRandomInt = (e) => Math.floor(Math.random() * e);
function HyperText({
  text: e,
  duration: o = 800,
  framerProps: a = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className: c,
  animateOnLoad: d = !0,
}) {
  const [h, g] = reactExports.useState(e.split("")),
    [b, j] = reactExports.useState(!1),
    $ = reactExports.useRef(0),
    _e = reactExports.useRef(!0),
    et = () => {
      (($.current = 0), j(!0));
    };
  return (
    reactExports.useEffect(() => {
      const nt = setInterval(
        () => {
          if (!d && _e.current) {
            (clearInterval(nt), (_e.current = !1));
            return;
          }
          $.current < e.length
            ? (g((ot) =>
                ot.map((lt, ut) =>
                  lt === " "
                    ? lt
                    : ut <= $.current
                      ? e[ut]
                      : alphabets[getRandomInt(26)],
                ),
              ),
              ($.current = $.current + 0.1))
            : (j(!1), clearInterval(nt));
        },
        o / (e.length * 10),
      );
      return () => clearInterval(nt);
    }, [e, o, b, d]),
    jsxRuntimeExports.jsx("div", {
      className:
        "flex justify-center scale-100 cursor-default overflow-hidden py-2",
      onMouseEnter: et,
      children: jsxRuntimeExports.jsx(AnimatePresence, {
        mode: "wait",
        children: h.map((nt, ot) =>
          jsxRuntimeExports.jsx(
            motion.span,
            {
              className: cn("font-amoria", nt === " " ? "w-3" : "", c),
              ...a,
              children: nt.toUpperCase(),
            },
            ot,
          ),
        ),
      }),
    })
  );
}
function n(e, o) {
  return (
    (function (a) {
      if (Array.isArray(a)) return a;
    })(e) ||
    (function (a, c) {
      var d = [],
        h = !0,
        g = !1,
        b = void 0;
      try {
        for (
          var j, $ = a[Symbol.iterator]();
          !(h = (j = $.next()).done) && (d.push(j.value), !c || d.length !== c);
          h = !0
        );
      } catch (_e) {
        ((g = !0), (b = _e));
      } finally {
        try {
          h || $.return == null || $.return();
        } finally {
          if (g) throw b;
        }
      }
      return d;
    })(e, o) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance",
      );
    })()
  );
}
const i = 1e8,
  v = Math.max,
  M = Math.min,
  I = Math.pow;
function Q(e, o) {
  return (function (a, c) {
    const d = v(a, c),
      h = M(a, c);
    return (d * i + 0.05 * i) / (h * i + 0.05 * i);
  })(R(...e), R(...o));
}
function R(e, o, a) {
  return (U(e) * X + U(o) * Y + U(a) * Z) / i;
}
const U = (e) => (e <= 3.928 ? e / W : V(e)),
  V = (e) => I((e + 5.5) / 105.5, 2.4),
  W = 1292,
  X = 0.2126 * i,
  Y = 0.7152 * i,
  Z = 0.0722 * i;
function _(e) {
  const o = n(e.match(tn) || [], 9),
    a = o[1],
    c = o[2],
    d = o[3],
    h = o[4],
    g = o[5],
    b = o[6],
    j = o[7],
    $ = o[8];
  if (g !== void 0 || a !== void 0)
    return [
      parseInt(g !== void 0 ? g : a + a, 16),
      parseInt(b !== void 0 ? b : c + c, 16),
      parseInt(j !== void 0 ? j : d + d, 16),
      $ !== void 0 ? parseInt($, 16) : h !== void 0 ? parseInt(h + h, 16) : 255,
    ].map((_e) => (100 * _e) / 255);
}
const tn =
  /^#?(?:([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?|([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?)$/i;
function tt(e, o) {
  return Q(_(e), _(o));
}
function asyncGeneratorStep(e, o, a, c, d, h, g) {
  try {
    var b = e[h](g),
      j = b.value;
  } catch ($) {
    return void a($);
  }
  b.done ? o(j) : Promise.resolve(j).then(c, d);
}
function _asyncToGenerator(e) {
  return function () {
    var o = this,
      a = arguments;
    return new Promise(function (c, d) {
      var h = e.apply(o, a);
      function g(j) {
        asyncGeneratorStep(h, c, d, g, b, "next", j);
      }
      function b(j) {
        asyncGeneratorStep(h, c, d, g, b, "throw", j);
      }
      g(void 0);
    });
  };
}
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var a = arguments[o];
            for (var c in a) ({}).hasOwnProperty.call(a, c) && (e[c] = a[c]);
          }
          return e;
        }),
    _extends.apply(null, arguments)
  );
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return o;
  };
  var e,
    o = {},
    a = Object.prototype,
    c = a.hasOwnProperty,
    d =
      Object.defineProperty ||
      function (yt, ht, at) {
        yt[ht] = at.value;
      },
    h = typeof Symbol == "function" ? Symbol : {},
    g = h.iterator || "@@iterator",
    b = h.asyncIterator || "@@asyncIterator",
    j = h.toStringTag || "@@toStringTag";
  function $(yt, ht, at) {
    return (
      Object.defineProperty(yt, ht, {
        value: at,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      yt[ht]
    );
  }
  try {
    $({}, "");
  } catch {
    $ = function (ht, at, vt) {
      return (ht[at] = vt);
    };
  }
  function _e(yt, ht, at, vt) {
    var xt = ht && ht.prototype instanceof it ? ht : it,
      St = Object.create(xt.prototype),
      kt = new Dt(vt || []);
    return (d(St, "_invoke", { value: bt(yt, at, kt) }), St);
  }
  function et(yt, ht, at) {
    try {
      return { type: "normal", arg: yt.call(ht, at) };
    } catch (vt) {
      return { type: "throw", arg: vt };
    }
  }
  o.wrap = _e;
  var nt = "suspendedStart",
    ot = "suspendedYield",
    lt = "executing",
    ut = "completed",
    gt = {};
  function it() {}
  function rt() {}
  function st() {}
  var ct = {};
  $(ct, g, function () {
    return this;
  });
  var ft = Object.getPrototypeOf,
    pt = ft && ft(ft(Mt([])));
  pt && pt !== a && c.call(pt, g) && (ct = pt);
  var mt = (st.prototype = it.prototype = Object.create(ct));
  function dt(yt) {
    ["next", "throw", "return"].forEach(function (ht) {
      $(yt, ht, function (at) {
        return this._invoke(ht, at);
      });
    });
  }
  function wt(yt, ht) {
    function at(xt, St, kt, Et) {
      var Tt = et(yt[xt], yt, St);
      if (Tt.type !== "throw") {
        var Rt = Tt.arg,
          At = Rt.value;
        return At && typeof At == "object" && c.call(At, "__await")
          ? ht.resolve(At.__await).then(
              function (jt) {
                at("next", jt, kt, Et);
              },
              function (jt) {
                at("throw", jt, kt, Et);
              },
            )
          : ht.resolve(At).then(
              function (jt) {
                ((Rt.value = jt), kt(Rt));
              },
              function (jt) {
                return at("throw", jt, kt, Et);
              },
            );
      }
      Et(Tt.arg);
    }
    var vt;
    d(this, "_invoke", {
      value: function (xt, St) {
        function kt() {
          return new ht(function (Et, Tt) {
            at(xt, St, Et, Tt);
          });
        }
        return (vt = vt ? vt.then(kt, kt) : kt());
      },
    });
  }
  function bt(yt, ht, at) {
    var vt = nt;
    return function (xt, St) {
      if (vt === lt) throw Error("Generator is already running");
      if (vt === ut) {
        if (xt === "throw") throw St;
        return { value: e, done: !0 };
      }
      for (at.method = xt, at.arg = St; ; ) {
        var kt = at.delegate;
        if (kt) {
          var Et = Ct(kt, at);
          if (Et) {
            if (Et === gt) continue;
            return Et;
          }
        }
        if (at.method === "next") at.sent = at._sent = at.arg;
        else if (at.method === "throw") {
          if (vt === nt) throw ((vt = ut), at.arg);
          at.dispatchException(at.arg);
        } else at.method === "return" && at.abrupt("return", at.arg);
        vt = lt;
        var Tt = et(yt, ht, at);
        if (Tt.type === "normal") {
          if (((vt = at.done ? ut : ot), Tt.arg === gt)) continue;
          return { value: Tt.arg, done: at.done };
        }
        Tt.type === "throw" &&
          ((vt = ut), (at.method = "throw"), (at.arg = Tt.arg));
      }
    };
  }
  function Ct(yt, ht) {
    var at = ht.method,
      vt = yt.iterator[at];
    if (vt === e)
      return (
        (ht.delegate = null),
        (at === "throw" &&
          yt.iterator.return &&
          ((ht.method = "return"),
          (ht.arg = e),
          Ct(yt, ht),
          ht.method === "throw")) ||
          (at !== "return" &&
            ((ht.method = "throw"),
            (ht.arg = new TypeError(
              "The iterator does not provide a '" + at + "' method",
            )))),
        gt
      );
    var xt = et(vt, yt.iterator, ht.arg);
    if (xt.type === "throw")
      return (
        (ht.method = "throw"),
        (ht.arg = xt.arg),
        (ht.delegate = null),
        gt
      );
    var St = xt.arg;
    return St
      ? St.done
        ? ((ht[yt.resultName] = St.value),
          (ht.next = yt.nextLoc),
          ht.method !== "return" && ((ht.method = "next"), (ht.arg = e)),
          (ht.delegate = null),
          gt)
        : St
      : ((ht.method = "throw"),
        (ht.arg = new TypeError("iterator result is not an object")),
        (ht.delegate = null),
        gt);
  }
  function Pt(yt) {
    var ht = { tryLoc: yt[0] };
    (1 in yt && (ht.catchLoc = yt[1]),
      2 in yt && ((ht.finallyLoc = yt[2]), (ht.afterLoc = yt[3])),
      this.tryEntries.push(ht));
  }
  function Vt(yt) {
    var ht = yt.completion || {};
    ((ht.type = "normal"), delete ht.arg, (yt.completion = ht));
  }
  function Dt(yt) {
    ((this.tryEntries = [{ tryLoc: "root" }]),
      yt.forEach(Pt, this),
      this.reset(!0));
  }
  function Mt(yt) {
    if (yt || yt === "") {
      var ht = yt[g];
      if (ht) return ht.call(yt);
      if (typeof yt.next == "function") return yt;
      if (!isNaN(yt.length)) {
        var at = -1,
          vt = function xt() {
            for (; ++at < yt.length; )
              if (c.call(yt, at))
                return ((xt.value = yt[at]), (xt.done = !1), xt);
            return ((xt.value = e), (xt.done = !0), xt);
          };
        return (vt.next = vt);
      }
    }
    throw new TypeError(typeof yt + " is not iterable");
  }
  return (
    (rt.prototype = st),
    d(mt, "constructor", { value: st, configurable: !0 }),
    d(st, "constructor", { value: rt, configurable: !0 }),
    (rt.displayName = $(st, j, "GeneratorFunction")),
    (o.isGeneratorFunction = function (yt) {
      var ht = typeof yt == "function" && yt.constructor;
      return (
        !!ht &&
        (ht === rt || (ht.displayName || ht.name) === "GeneratorFunction")
      );
    }),
    (o.mark = function (yt) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(yt, st)
          : ((yt.__proto__ = st), $(yt, j, "GeneratorFunction")),
        (yt.prototype = Object.create(mt)),
        yt
      );
    }),
    (o.awrap = function (yt) {
      return { __await: yt };
    }),
    dt(wt.prototype),
    $(wt.prototype, b, function () {
      return this;
    }),
    (o.AsyncIterator = wt),
    (o.async = function (yt, ht, at, vt, xt) {
      xt === void 0 && (xt = Promise);
      var St = new wt(_e(yt, ht, at, vt), xt);
      return o.isGeneratorFunction(ht)
        ? St
        : St.next().then(function (kt) {
            return kt.done ? kt.value : St.next();
          });
    }),
    dt(mt),
    $(mt, j, "Generator"),
    $(mt, g, function () {
      return this;
    }),
    $(mt, "toString", function () {
      return "[object Generator]";
    }),
    (o.keys = function (yt) {
      var ht = Object(yt),
        at = [];
      for (var vt in ht) at.push(vt);
      return (
        at.reverse(),
        function xt() {
          for (; at.length; ) {
            var St = at.pop();
            if (St in ht) return ((xt.value = St), (xt.done = !1), xt);
          }
          return ((xt.done = !0), xt);
        }
      );
    }),
    (o.values = Mt),
    (Dt.prototype = {
      constructor: Dt,
      reset: function (yt) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = e),
          this.tryEntries.forEach(Vt),
          !yt)
        )
          for (var ht in this)
            ht.charAt(0) === "t" &&
              c.call(this, ht) &&
              !isNaN(+ht.slice(1)) &&
              (this[ht] = e);
      },
      stop: function () {
        this.done = !0;
        var yt = this.tryEntries[0].completion;
        if (yt.type === "throw") throw yt.arg;
        return this.rval;
      },
      dispatchException: function (yt) {
        if (this.done) throw yt;
        var ht = this;
        function at(Tt, Rt) {
          return (
            (St.type = "throw"),
            (St.arg = yt),
            (ht.next = Tt),
            Rt && ((ht.method = "next"), (ht.arg = e)),
            !!Rt
          );
        }
        for (var vt = this.tryEntries.length - 1; vt >= 0; --vt) {
          var xt = this.tryEntries[vt],
            St = xt.completion;
          if (xt.tryLoc === "root") return at("end");
          if (xt.tryLoc <= this.prev) {
            var kt = c.call(xt, "catchLoc"),
              Et = c.call(xt, "finallyLoc");
            if (kt && Et) {
              if (this.prev < xt.catchLoc) return at(xt.catchLoc, !0);
              if (this.prev < xt.finallyLoc) return at(xt.finallyLoc);
            } else if (kt) {
              if (this.prev < xt.catchLoc) return at(xt.catchLoc, !0);
            } else {
              if (!Et) throw Error("try statement without catch or finally");
              if (this.prev < xt.finallyLoc) return at(xt.finallyLoc);
            }
          }
        }
      },
      abrupt: function (yt, ht) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var vt = this.tryEntries[at];
          if (
            vt.tryLoc <= this.prev &&
            c.call(vt, "finallyLoc") &&
            this.prev < vt.finallyLoc
          ) {
            var xt = vt;
            break;
          }
        }
        xt &&
          (yt === "break" || yt === "continue") &&
          xt.tryLoc <= ht &&
          ht <= xt.finallyLoc &&
          (xt = null);
        var St = xt ? xt.completion : {};
        return (
          (St.type = yt),
          (St.arg = ht),
          xt
            ? ((this.method = "next"), (this.next = xt.finallyLoc), gt)
            : this.complete(St)
        );
      },
      complete: function (yt, ht) {
        if (yt.type === "throw") throw yt.arg;
        return (
          yt.type === "break" || yt.type === "continue"
            ? (this.next = yt.arg)
            : yt.type === "return"
              ? ((this.rval = this.arg = yt.arg),
                (this.method = "return"),
                (this.next = "end"))
              : yt.type === "normal" && ht && (this.next = ht),
          gt
        );
      },
      finish: function (yt) {
        for (var ht = this.tryEntries.length - 1; ht >= 0; --ht) {
          var at = this.tryEntries[ht];
          if (at.finallyLoc === yt)
            return (this.complete(at.completion, at.afterLoc), Vt(at), gt);
        }
      },
      catch: function (yt) {
        for (var ht = this.tryEntries.length - 1; ht >= 0; --ht) {
          var at = this.tryEntries[ht];
          if (at.tryLoc === yt) {
            var vt = at.completion;
            if (vt.type === "throw") {
              var xt = vt.arg;
              Vt(at);
            }
            return xt;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (yt, ht, at) {
        return (
          (this.delegate = { iterator: Mt(yt), resultName: ht, nextLoc: at }),
          this.method === "next" && (this.arg = e),
          gt
        );
      },
    }),
    o
  );
}
var tagCanvasString = `(function(){"use strict"; var r,C,p=Math.abs,o=Math.sin,l=Math.cos,g=Math.max,h=Math.min,af=Math.ceil,E=Math.sqrt,w=Math.pow,I={},D={},R={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},f,d,b,T,z,F,M,c=document,v,e,P,j={};for(r=0;r<256;++r)C=r.toString(16),r<16&&(C='0'+C),D[C]=D[C.toUpperCase()]=r.toString()+',';function n(a){return typeof a!='undefined'}function B(a){return typeof a=='object'&&a!=null}function G(a,c,b){return isNaN(a)?b:h(b,g(c,a))}function x(){return!1}function q(){return(new Date).valueOf()}function ak(c,d){var b=[],e=c.length,a;for(a=0;a<e;++a)b.push(c[a]);return b.sort(d),b}function ai(a){for(var b=a.length-1,d,c;b;)c=~~(Math.random()*b),d=a[b],a[b]=a[c],a[c]=d,--b}function ag(){var a=window.AudioContext||window.webkitAudioContext;if(e=new a,!e){e='off';return}return e}function $(u,a,t,s,r,q,p){var j=s,h=r,i=t*.01,n=80*i,m=100*i,o=40*i,l=30*i,c=l/2,b=j+n,f=b-o,k=h+m,d=k-l,g=h+l,e=h+m/2;if(a.setTransform(1,0,0,1,0,0),a.setLineDash([]),a.globalAlpha=1,a.strokeStyle=p,a.lineWidth=q,a.lineJoin='round',a.beginPath(),a.moveTo(f,g),a.lineTo(f,d),a.moveTo(b,k),a.lineTo(f,d),a.lineTo(j,d),a.lineTo(j,g),a.lineTo(f,g),a.lineTo(b,h),u){a.lineTo(b,g),a.moveTo(b,d),a.lineTo(b,k),a.moveTo(b-c,e-c),a.lineTo(b+c,e+c),a.moveTo(b+c,e-c),a.lineTo(b-c,e+c),a.stroke();return}a.closePath(),a.stroke()}function s(a,b,c){this.x=a,this.y=b,this.z=c}z=s.prototype,z.length=function(){return E(this.x*this.x+this.y*this.y+this.z*this.z)},z.dot=function(a){return this.x*a.x+this.y*a.y+this.z*a.z},z.cross=function(a){var b=this.y*a.z-this.z*a.y,c=this.z*a.x-this.x*a.z,d=this.x*a.y-this.y*a.x;return new s(b,c,d)},z.angle=function(b){var c=this.dot(b),a;return c==0?Math.PI/2:(a=c/(this.length()*b.length()),a>=1)?0:a<=-1?Math.PI:Math.acos(a)},z.unit=function(){var a=this.length();return new s(this.x/a,this.y/a,this.z/a)};function ay(b,a){a=a*Math.PI/180,b=b*Math.PI/180;var c=o(b)*l(a),d=-o(a),e=-l(b)*l(a);return new s(c,d,e)}function m(a){this[1]={1:a[0],2:a[1],3:a[2]},this[2]={1:a[3],2:a[4],3:a[5]},this[3]={1:a[6],2:a[7],3:a[8]}}T=m.prototype,m.Identity=function(){return new m([1,0,0,0,1,0,0,0,1])},m.Rotation=function(e,a){var c=o(e),d=l(e),b=1-d;return new m([d+w(a.x,2)*b,a.x*a.y*b-a.z*c,a.x*a.z*b+a.y*c,a.y*a.x*b+a.z*c,d+w(a.y,2)*b,a.y*a.z*b-a.x*c,a.z*a.x*b-a.y*c,a.z*a.y*b+a.x*c,d+w(a.z,2)*b])},T.mul=function(c){var d=[],a,b,e=c.xform?1:0;for(a=1;a<=3;++a)for(b=1;b<=3;++b)e?d.push(this[a][1]*c[1][b]+this[a][2]*c[2][b]+this[a][3]*c[3][b]):d.push(this[a][b]*c);return new m(d)},T.xform=function(b){var a={},c=b.x,d=b.y,e=b.z;return a.x=c*this[1][1]+d*this[2][1]+e*this[3][1],a.y=c*this[1][2]+d*this[2][2]+e*this[3][2],a.z=c*this[1][3]+d*this[2][3]+e*this[3][3],a};function aB(g,j,k,m,f){var a,b,c,d,e=[],h=2/g,i;i=Math.PI*(3-E(5)+(parseFloat(f)?parseFloat(f):0));for(a=0;a<g;++a)b=a*h-1+h/2,c=E(1-b*b),d=a*i,e.push([l(d)*c*j,b*k,o(d)*c*m]);return e}function U(n,p,m,k,h,g){var b,f=[],i=2/n,j,a,d,c,e;j=Math.PI*(3-E(5)+(parseFloat(g)?parseFloat(g):0));for(a=0;a<n;++a)d=a*i-1+i/2,b=a*j,c=l(b),e=o(b),f.push(p?[d*m,c*k,e*h]:[c*m,d*k,e*h]);return f}function aa(k,e,f,h,i,j){var b,g=[],m=Math.PI*2/e,a,c,d;for(a=0;a<e;++a)b=a*m,c=l(b),d=o(b),g.push(k?[j*f,c*h,d*i]:[c*f,j*h,d*i]);return g}function ax(a,b,c,d,e){return U(a,0,b,c,d,e)}function aH(a,b,c,d,e){return U(a,1,b,c,d,e)}function aG(b,c,d,e,a){return a=isNaN(a)?0:a*1,aa(0,b,c,d,e,a)}function aF(b,c,d,e,a){return a=isNaN(a)?0:a*1,aa(1,b,c,d,e,a)}function av(b){var a=new Image;a.onload=function(){var c=a.width/2,d=a.height/2;b.centreFunc=function(b,g,h,e,f){b.setTransform(1,0,0,1,0,0),b.globalAlpha=1,b.drawImage(a,e-c,f-d)}},a.src=b.centreImage}function aE(a,c){var b=a,d,e,f=(c*1).toPrecision(3)+')';return a[0]==='#'?(I[a]||(a.length===4?I[a]='rgba('+R[a[1]]+R[a[2]]+R[a[3]]:I[a]='rgba('+D[a.substr(1,2)]+D[a.substr(3,2)]+D[a.substr(5,2)]),b=I[a]+f):a.substr(0,4)==='rgb('||a.substr(0,4)==='hsl('?b=a.replace('(','a(').replace(')',','+f):(a.substr(0,5)==='rgba('||a.substr(0,5)==='hsla(')&&(d=a.lastIndexOf(',')+1,e=a.indexOf(')'),c*=parseFloat(a.substring(d,e)),b=a.substr(0,d)+c.toPrecision(3)+')'),b}function k(b,d){if(window.G_vmlCanvasManager)return null;var a=c.createElement('canvas');return a.width=b,a.height=d,a}function aD(){var b=k(3,3),a,c;return!!b&&(a=b.getContext('2d'),a.strokeStyle='#000',a.shadowColor='#fff',a.shadowBlur=3,a.globalAlpha=0,a.strokeRect(2,2,2,2),a.globalAlpha=1,c=a.getImageData(2,2,1,1),b=null,c.data[0]>0)}function aC(a,c,f,d){var e=a.createLinearGradient(0,0,c,0),b;for(b in d)e.addColorStop(1-b,d[b]);a.fillStyle=e,a.fillRect(0,f,c,1)}function L(a,m,j){var l=1024,d=1,e=a.weightGradient,i,f,b,c;if(a.gCanvas)f=a.gCanvas.getContext('2d'),d=a.gCanvas.height;else{if(B(e[0])?d=e.length:e=[e],a.gCanvas=i=k(l,d),!i)return null;f=i.getContext('2d');for(b=0;b<d;++b)aC(f,l,b,e[b])}return j=g(h(j||0,d-1),0),c=f.getImageData(~~((l-1)*m),j,1,1).data,'rgba('+c[0]+','+c[1]+','+c[2]+','+c[3]/255+')'}function Y(b,i,q,k,o,n,h,d,a,g,f,l){var m=o+(d||0)+(a.length&&a[0]<0?p(a[0]):0),j=n+(d||0)+(a.length&&a[1]<0?p(a[1]):0),c,e;b.font=i,b.textBaseline='top',b.fillStyle=q,h&&(b.shadowColor=h),d&&(b.shadowBlur=d),a.length&&(b.shadowOffsetX=a[0],b.shadowOffsetY=a[1]);for(c=0;c<k.length;++c)e=0,f&&('right'==l?e=g-f[c]:'centre'==l&&(e=(g-f[c])/2)),b.fillText(k[c],m+e,j),j+=parseInt(i)}function y(d,a,b,f,e,c,g){c?(d.beginPath(),d.moveTo(a,b+e-c),d.arcTo(a,b,a+c,b,c),d.arcTo(a+f,b,a+f,b+c,c),d.arcTo(a+f,b+e,a+f-c,b+e,c),d.arcTo(a,b+e,a,b+e-c,c),d.closePath(),d[g?'stroke':'fill']()):d[g?'strokeRect':'fillRect'](a,b,f,e)}function O(a,b,c,d,e,f,g,h,i){this.strings=a,this.font=b,this.width=c,this.height=d,this.maxWidth=e,this.stringWidths=f,this.align=g,this.valign=h,this.scale=i}M=O.prototype,M.SetImage=function(a,b,c,d,e,f,g,h){this.image=a,this.iwidth=b*this.scale,this.iheight=c*this.scale,this.ipos=d,this.ipad=e*this.scale,this.iscale=h,this.ialign=f,this.ivalign=g},M.Align=function(c,d,a){var b=0;return a=='right'||a=='bottom'?b=d-c:a!='left'&&a!='top'&&(b=(d-c)/2),b},M.Create=function(G,D,F,b,A,m,q,j,E){var o,e,f,a,l,s,i,u,v,r,w,n,c,d,x,B=p(q[0]),C=p(q[1]),t,z;return j=g(j,B+m,C+m),l=2*(j+b),i=2*(j+b),e=this.width+l,f=this.height+i,v=r=j+b,this.image&&(w=n=j+b,c=this.iwidth,d=this.iheight,this.ipos=='top'||this.ipos=='bottom'?(c<this.width?w+=this.Align(c,this.width,this.ialign):v+=this.Align(this.width,c,this.align),this.ipos=='top'?r+=d+this.ipad:n+=this.height+this.ipad,e=g(e,c+l),f+=d+this.ipad):(d<this.height?n+=this.Align(d,this.height,this.ivalign):r+=this.Align(this.height,d,this.valign),this.ipos=='right'?w+=this.width+this.ipad:v+=c+this.ipad,e+=c+this.ipad,f=g(f,d+i))),o=k(e,f),!o?null:(l=i=b/2,s=e-b,u=f-b,x=h(E,s/2,u/2),a=o.getContext('2d'),D&&(a.fillStyle=D,y(a,l,i,s,u,x)),b&&(a.strokeStyle=F,a.lineWidth=b,y(a,l,i,s,u,x,!0)),(m||B||C)&&(t=k(e,f),t&&(z=a,a=t.getContext('2d'))),Y(a,this.font,G,this.strings,v,r,0,0,[],this.maxWidth,this.stringWidths,this.align),this.image&&a.drawImage(this.image,w,n,c,d),z&&(a=z,A&&(a.shadowColor=A),m&&(a.shadowBlur=m),a.shadowOffsetX=q[0],a.shadowOffsetY=q[1],a.drawImage(t,0,0)),o)};function H(a,c,d){var b=k(c,d),e;return b?(e=b.getContext('2d'),e.drawImage(a,(c-a.width)/2,(d-a.height)/2),b):null}function S(e,b,c){var a=k(b,c),d;return a?(d=a.getContext('2d'),d.drawImage(e,0,0,b,c),a):null}function W(n,u,t,e,s,c,v,d,r,w){var g=u+(2*d+c)*e,f=t+(2*d+c)*e,l=k(g,f),b,i,q,m,j,o,a,p;return l?(c*=e,r*=e,i=q=c/2,m=g-c,j=f-c,d=d*e+i,b=l.getContext('2d'),p=h(r,m/2,j/2),s&&(b.fillStyle=s,y(b,i,q,m,j,p)),c&&(b.strokeStyle=v,b.lineWidth=c,y(b,i,q,m,j,p,!0)),w?(o=k(g,f),a=o.getContext('2d'),a.drawImage(n,d,d,u,t),a.globalCompositeOperation='source-in',a.fillStyle=v,a.fillRect(0,0,g,f),a.globalCompositeOperation='destination-over',a.drawImage(l,0,0),a.globalCompositeOperation='source-over',b.drawImage(o,0,0)):b.drawImage(n,d,d,n.width,n.height),{image:l,width:g/e,height:f/e}):null}function at(l,f,c,d,j){var e,a,b=parseFloat(f),i=g(c,d);return e=k(c,d),!e?null:(f.indexOf('%')>0?b=i*b/100:b=b*j,a=e.getContext('2d'),a.globalCompositeOperation='source-over',a.fillStyle='#fff',b>=i/2?(b=h(c,d)/2,a.beginPath(),a.moveTo(c/2,d/2),a.arc(c/2,d/2,b,0,2*Math.PI,!1),a.fill(),a.closePath()):(b=h(c/2,d/2,b),y(a,0,0,c,d,b,!0),a.fill()),a.globalCompositeOperation='source-in',a.drawImage(l,0,0,c,d),e)}function ao(q,m,i,b,h,a,c){var g=p(c[0]),f=p(c[1]),j=m+(g>a?g+a:a*2)*b,l=i+(f>a?f+a:a*2)*b,n=b*((a||0)+(c[0]<0?g:0)),o=b*((a||0)+(c[1]<0?f:0)),e,d;return e=k(j,l),!e?null:(d=e.getContext('2d'),h&&(d.shadowColor=h),a&&(d.shadowBlur=a*b),c&&(d.shadowOffsetX=c[0]*b,d.shadowOffsetY=c[1]*b),d.drawImage(q,n,o,m,i),{image:e,width:j/b,height:l/b})}function ae(m,o,l){var c=parseInt(m.toString().length*l),h=parseInt(l*2*m.length),j=k(c,h),g,i,e,f,b,d,n,a;if(!j)return null;g=j.getContext('2d'),g.fillStyle='#000',g.fillRect(0,0,c,h),Y(g,l+'px '+o,'#fff',m,0,0,0,0,[],'centre'),i=g.getImageData(0,0,c,h),e=i.width,f=i.height,a={min:{x:e,y:f},max:{x:-1,y:-1}};for(d=0;d<f;++d)for(b=0;b<e;++b)n=(d*e+b)*4,i.data[n+1]>0&&(b<a.min.x&&(a.min.x=b),b>a.max.x&&(a.max.x=b),d<a.min.y&&(a.min.y=d),d>a.max.y&&(a.max.y=d));return e!=c&&(a.min.x*=c/e,a.max.x*=c/e),f!=h&&(a.min.y*=c/f,a.max.y*=c/f),j=null,a}function Q(a){return"'"+a.replace(/('|")/g,'').replace(/s*,s*/g,"', '")+"'"}function t(b,d,a){a=a||c,a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent('on'+b,d)}function am(b,d,a){a=a||c,a.removeEventListener?a.removeEventListener(b,d):a.detachEvent('on'+b,d)}function A(g,e,j,a,b){var l=b.imageScale,h,c,k,m,f,d;if(!e.complete)return t('load',function(){A(g,e,j,a,b)},e);if(!g.complete)return t('load',function(){A(g,e,j,a,b)},g);if(j&&!j.complete)return t('load',function(){A(g,e,j,a,b)},j);e.width=e.width,e.height=e.height,l&&(g.width=e.width*l,g.height=e.height*l),a.iw=g.width,a.ih=g.height,b.txtOpt&&(c=g,h=b.zoomMax*b.txtScale,f=a.iw*h,d=a.ih*h,f<e.naturalWidth||d<e.naturalHeight?(c=S(g,f,d),c&&(a.fimage=c)):(f=a.iw,d=a.ih,h=1),parseFloat(b.imageRadius)&&(a.image=a.fimage=g=at(a.image,b.imageRadius,f,d,h)),a.HasText()||(b.shadow&&(c=ao(a.image,f,d,h,b.shadow,b.shadowBlur,b.shadowOffset),c&&(a.fimage=c.image,a.w=c.width,a.h=c.height)),(b.bgColour||b.bgOutlineThickness)&&(k=b.bgColour=='tag'?i(a.a,'background-color'):b.bgColour,m=b.bgOutline=='tag'?i(a.a,'color'):b.bgOutline||b.textColour,f=a.fimage.width,d=a.fimage.height,b.outlineMethod=='colour'&&(c=W(a.fimage,f,d,h,k,b.bgOutlineThickness,a.outline.colour,b.padding,b.bgRadius,1),c&&(a.oimage=c.image)),c=W(a.fimage,f,d,h,k,b.bgOutlineThickness,m,b.padding,b.bgRadius),c&&(a.fimage=c.image,a.w=c.width,a.h=c.height)),b.outlineMethod=='size'&&(b.outlineIncrease>0?(a.iw+=2*b.outlineIncrease,a.ih+=2*b.outlineIncrease,f=h*a.iw,d=h*a.ih,c=S(a.fimage,f,d),a.oimage=c,a.fimage=H(a.fimage,a.oimage.width,a.oimage.height)):(f=h*(a.iw+2*b.outlineIncrease),d=h*(a.ih+2*b.outlineIncrease),c=S(a.fimage,f,d),a.oimage=H(c,a.fimage.width,a.fimage.height))))),a.alt=j,a.Init()}function i(a,d){var b=c.defaultView,e=d.replace(/-([a-z])/g,function(a){return a.charAt(1).toUpperCase()});return b&&b.getComputedStyle&&b.getComputedStyle(a,null).getPropertyValue(d)||a.currentStyle&&a.currentStyle[e]}function aj(c,d,e){var b=1,a;return d?b=1*(c.getAttribute(d)||e):(a=i(c,'font-size'))&&(b=a.indexOf('px')>-1&&a.replace('px','')*1||a.indexOf('pt')>-1&&a.replace('pt','')*1.25||a*3.3),b}function u(a){return a.target&&n(a.target.id)?a.target.id:a.srcElement.parentNode.id}function K(a,c){var b,d,e=parseInt(i(c,'width'))/c.width,f=parseInt(i(c,'height'))/c.height;return n(a.offsetX)?b={x:a.offsetX,y:a.offsetY}:(d=X(c.id),n(a.changedTouches)&&(a=a.changedTouches[0]),a.pageX&&(b={x:a.pageX-d.x,y:a.pageY-d.y})),b&&e&&f&&(b.x/=e,b.y/=f),b}function an(c){var d=c.target||c.fromElement.parentNode,b=a.tc[d.id];b&&(b.mx=b.my=-1,b.UnFreeze(),b.EndDrag())}function ad(e){var g,c=a,b,d,f=u(e);for(g in c.tc)b=c.tc[g],b.tttimer&&(clearTimeout(b.tttimer),b.tttimer=null);f&&c.tc[f]&&(b=c.tc[f],(d=K(e,b.canvas))&&(b.mx=d.x,b.my=d.y,b.Drag(e,d)),b.drawn=0)}function ap(b){var e=a,f=c.addEventListener?0:1,d=u(b);d&&b.button==f&&e.tc[d]&&e.tc[d].BeginDrag(b)}function aq(b){var f=a,g=c.addEventListener?0:1,e=u(b),d;e&&b.button==g&&f.tc[e]&&(d=f.tc[e],ad(b),!d.EndDrag()&&!d.touchState&&d.Clicked(b))}function ar(c){var e=u(c),b=e&&a.tc[e],d;b&&c.changedTouches&&(c.touches.length==1&&b.touchState==0?(b.touchState=1,b.BeginDrag(c),(d=K(c,b.canvas))&&(b.mx=d.x,b.my=d.y,b.drawn=0)):c.targetTouches.length==2&&b.pinchZoom?(b.touchState=3,b.EndDrag(),b.BeginPinch(c)):(b.EndDrag(),b.EndPinch(),b.touchState=0))}function ac(c){var d=u(c),b=d&&a.tc[d];if(b&&c.changedTouches){switch(b.touchState){case 1:b.Draw(),b.Clicked();break;break;case 2:b.EndDrag();break;case 3:b.EndPinch()}b.touchState=0}}function au(c){var f,e=a,b,d,g=u(c);for(f in e.tc)b=e.tc[f],b.tttimer&&(clearTimeout(b.tttimer),b.tttimer=null);if(b=g&&e.tc[g],b&&c.changedTouches&&b.touchState){switch(b.touchState){case 1:case 2:(d=K(c,b.canvas))&&(b.mx=d.x,b.my=d.y,b.Drag(c,d)&&(b.touchState=2));break;case 3:b.Pinch(c)}b.drawn=0}}function ab(b){var d=a,c=u(b);c&&d.tc[c]&&(b.cancelBubble=!0,b.returnValue=!1,b.preventDefault&&b.preventDefault(),d.tc[c].Wheel((b.wheelDelta||b.detail)>0))}function aw(d){var c,b=a;clearTimeout(b.scrollTimer);for(c in b.tc)b.tc[c].Pause();b.scrollTimer=setTimeout(function(){var b,c=a;for(b in c.tc)c.tc[b].Resume()},b.scrollPause)}function al(){Z(q())}function Z(b){var c=a.tc,d;a.NextFrame(a.interval),b=b||q();for(d in c)c[d].Draw(b)}function az(){requestAnimationFrame(Z)}function aA(a){setTimeout(al,a)}function X(f){var g=c.getElementById(f),b=g.getBoundingClientRect(),a=c.documentElement,d=c.body,e=window,h=e.pageXOffset||a.scrollLeft,i=e.pageYOffset||a.scrollTop,j=a.clientLeft||d.clientLeft,k=a.clientTop||d.clientTop;return{x:b.left+h-j,y:b.top+i-k}}function aI(a,b,d,e){var c=a.radius*a.z1/(a.z1+a.z2+b.z);return{x:b.x*c*d,y:b.y*c*e,z:b.z,w:(a.z1-b.z)/a.z2}}function V(a){this.e=a,this.br=0,this.line=[],this.text=[],this.original=a.innerText||a.textContent}F=V.prototype,F.Empty=function(){for(var a=0;a<this.text.length;++a)if(this.text[a].length)return!1;return!0},F.Lines=function(c){var e=c?1:0,b,d,a;c=c||this.e,b=c.childNodes,d=b.length;for(a=0;a<d;++a)b[a].nodeName=='BR'?(this.text.push(this.line.join(' ')),this.br=1):b[a].nodeType==3?this.br?(this.line=[b[a].nodeValue],this.br=0):this.line.push(b[a].nodeValue):this.Lines(b[a]);return e||this.br||this.text.push(this.line.join(' ')),this.text},F.SplitWidth=function(h,e,f,g){var c,b,a,d=[];e.font=g+'px '+f;for(c=0;c<this.text.length;++c){a=this.text[c].split(/s+/),this.line=[a[0]];for(b=1;b<a.length;++b)e.measureText(this.line.join(' ')+' '+a[b]).width>h?(d.push(this.line.join(' ')),this.line=[a[b]]):this.line.push(a[b]);d.push(this.line.join(' '))}return this.text=d};function _(a,b){this.ts=null,this.tc=a,this.tag=b,this.x=this.y=this.w=this.h=this.sc=1,this.z=0,this.pulse=1,this.pulsate=a.pulsateTo<1,this.colour=a.outlineColour,this.adash=~~a.outlineDash,this.agap=~~a.outlineDashSpace||this.adash,this.aspeed=a.outlineDashSpeed*1,this.colour=='tag'?this.colour=i(b.a,'color'):this.colour=='tagbg'&&(this.colour=i(b.a,'background-color')),this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple,this.radius=a.outlineRadius|0,this.SetMethod(a.outlineMethod,a.altImage)}f=_.prototype,f.SetMethod=function(a,d){var b={block:['PreDraw','DrawBlock'],colour:['PreDraw','DrawColour'],outline:['PostDraw','DrawOutline'],classic:['LastDraw','DrawOutline'],size:['PreDraw','DrawSize'],none:['LastDraw']},c=b[a]||b.outline;a=='none'?this.Draw=function(){return 1}:this.drawFunc=this[c[1]],this[c[0]]=this.Draw,d&&(this.RealPreDraw=this.PreDraw,this.PreDraw=this.DrawAlt)},f.Update=function(d,e,i,j,a,f,g,h){var b=this.tc.outlineOffset,c=2*b;this.x=a*d+g-b,this.y=a*e+h-b,this.w=a*i+c,this.h=a*j+c,this.sc=a,this.z=f},f.Ants=function(k){if(!this.adash)return;var b=this.adash,c=this.agap,a=this.aspeed,j=b+c,h=0,g=b,f=c,i=0,d=0,e;a&&(d=p(a)*(q()-this.ts)/50,a<0&&(d=864e4-d),a=~~d%j),a?(b>=a?(h=b-a,g=a):(f=j-a,i=c-f),e=[h,f,g,i]):e=[b,c],k.setLineDash(e)},f.DrawOutline=function(a,d,e,b,c,f){var g=h(this.radius,c/2,b/2);a.strokeStyle=f,this.Ants(a),y(a,d,e,b,c,g,!0)},f.DrawSize=function(i,n,m,l,k,j,a,h,g){var f=a.w,e=a.h,c,b,d;return this.pulsate?(a.image?d=(a.image.height+this.tc.outlineIncrease)/a.image.height:d=a.oscale,b=a.fimage||a.image,c=1+(d-1)*(1-this.pulse),a.h*=c,a.w*=c):b=a.oimage,a.alpha=1,a.Draw(i,h,g,b),a.h=e,a.w=f,1},f.DrawColour=function(d,h,i,e,f,g,a,b,c){return a.oimage?(this.pulse<1?(a.alpha=1-w(this.pulse,2),a.Draw(d,b,c,a.fimage),a.alpha=this.pulse):a.alpha=1,a.Draw(d,b,c,a.oimage),1):this[a.image?'DrawColourImage':'DrawColourText'](d,h,i,e,f,g,a,b,c)},f.DrawColourText=function(f,h,i,j,g,e,a,b,c){var d=a.colour;return a.colour=e,a.alpha=1,a.Draw(f,b,c),a.colour=d,1},f.DrawColourImage=function(a,q,p,o,n,m,i,r,l){var f=a.canvas,e=~~g(q,0),d=~~g(p,0),c=h(f.width-e,o)+.5|0,b=h(f.height-d,n)+.5|0,j;return v?(v.width=c,v.height=b):v=k(c,b),!v?this.SetMethod('outline'):(j=v.getContext('2d'),j.drawImage(f,e,d,c,b,0,0,c,b),a.clearRect(e,d,c,b),this.pulsate?i.alpha=1-w(this.pulse,2):i.alpha=1,i.Draw(a,r,l),a.setTransform(1,0,0,1,0,0),a.save(),a.beginPath(),a.rect(e,d,c,b),a.clip(),a.globalCompositeOperation='source-in',a.fillStyle=m,a.fillRect(e,d,c,b),a.restore(),a.globalAlpha=1,a.globalCompositeOperation='destination-over',a.drawImage(v,0,0,c,b,e,d,c,b),a.globalCompositeOperation='source-over',1)},f.DrawAlt=function(b,a,c,d,f,g){var e=this.RealPreDraw(b,a,c,d,f,g);return a.alt&&(a.DrawImage(b,c,d,a.alt),e=1),e},f.DrawBlock=function(a,d,e,b,c,f){var g=h(this.radius,c/2,b/2);a.fillStyle=f,y(a,d,e,b,c,g)},f.DrawSimple=function(a,b,c,d,e,f){var g=this.tc;return a.setTransform(1,0,0,1,0,0),a.strokeStyle=this.colour,a.lineWidth=g.outlineThickness,a.shadowBlur=a.shadowOffsetX=a.shadowOffsetY=0,a.globalAlpha=f?e:1,this.drawFunc(a,this.x,this.y,this.w,this.h,this.colour,b,c,d)},f.DrawPulsate=function(h,d,e,f){var g=q()-this.ts,c=this.tc,b=c.pulsateTo+(1-c.pulsateTo)*(.5+l(2*Math.PI*g/(1e3*c.pulsateTime))/2);return this.pulse=b=a.Smooth(1,b),this.DrawSimple(h,d,e,f,b,1)},f.Active=function(d,a,b){var c=a>=this.x&&b>=this.y&&a<=this.x+this.w&&b<=this.y+this.h;return c?this.ts=this.ts||q():this.ts=null,c},f.PreDraw=f.PostDraw=f.LastDraw=x;function J(a,h,c,b,e,f,g,d,i,j,k,l,m,n){this.tc=a,this.image=null,this.text=h,this.text_original=n,this.line_widths=[],this.title=c.title||null,this.a=c,this.position=new s(b[0],b[1],b[2]),this.x=this.y=this.z=0,this.w=e,this.h=f,this.colour=g||a.textColour,this.bgColour=d||a.bgColour,this.bgRadius=i|0,this.bgOutline=j||this.colour,this.bgOutlineThickness=k|0,this.textFont=l||a.textFont,this.padding=m|0,this.sc=this.alpha=1,this.weighted=!a.weight,this.outline=new _(a,this),this.audio=null}d=J.prototype,d.Init=function(b){var a=this.tc;this.textHeight=a.textHeight,this.HasText()?this.Measure(a.ctxt,a):(this.w=this.iw,this.h=this.ih),this.SetShadowColour=a.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed,this.SetDraw(a)},d.Draw=x,d.HasText=function(){return this.text&&this.text[0].length>0},d.EqualTo=function(a){var b=a.getElementsByTagName('img');return this.a.href!=a.href?0:b.length?this.image.src==b[0].src:(a.innerText||a.textContent)==this.text_original},d.SetImage=function(a){this.image=this.fimage=a},d.SetAudio=function(a){this.audio=a,this.audio.load()},d.SetDraw=function(a){this.Draw=this.fimage?a.ie>7?this.DrawImageIE:this.DrawImage:this.DrawText,a.noSelect&&(this.CheckActive=x)},d.MeasureText=function(d){var a,e=this.text.length,b=0,c;for(a=0;a<e;++a)this.line_widths[a]=c=d.measureText(this.text[a]).width,b=g(b,c);return b},d.Measure=function(e,a){var f=ae(this.text,this.textFont,this.textHeight),b,k,h,i,g,l,j,c,d;j=f?f.max.y+f.min.y:this.textHeight,e.font=this.font=this.textHeight+'px '+this.textFont,l=this.MeasureText(e),a.txtOpt&&(b=a.txtScale,k=b*this.textHeight,h=k+'px '+this.textFont,i=[b*a.shadowOffset[0],b*a.shadowOffset[1]],e.font=h,g=this.MeasureText(e),d=new O(this.text,h,g+b,b*j+b,g,this.line_widths,a.textAlign,a.textVAlign,b),this.image&&d.SetImage(this.image,this.iw,this.ih,a.imagePosition,a.imagePadding,a.imageAlign,a.imageVAlign,a.imageScale),c=d.Create(this.colour,this.bgColour,this.bgOutline,b*this.bgOutlineThickness,a.shadow,b*a.shadowBlur,i,b*this.padding,b*this.bgRadius),a.outlineMethod=='colour'?this.oimage=d.Create(this.outline.colour,this.bgColour,this.outline.colour,b*this.bgOutlineThickness,a.shadow,b*a.shadowBlur,i,b*this.padding,b*this.bgRadius):a.outlineMethod=='size'&&(f=ae(this.text,this.textFont,this.textHeight+a.outlineIncrease),k=f.max.y+f.min.y,h=b*(this.textHeight+a.outlineIncrease)+'px '+this.textFont,e.font=h,g=this.MeasureText(e),d=new O(this.text,h,g+b,b*k+b,g,this.line_widths,a.textAlign,a.textVAlign,b),this.image&&d.SetImage(this.image,this.iw+a.outlineIncrease,this.ih+a.outlineIncrease,a.imagePosition,a.imagePadding,a.imageAlign,a.imageVAlign,a.imageScale),this.oimage=d.Create(this.colour,this.bgColour,this.bgOutline,b*this.bgOutlineThickness,a.shadow,b*a.shadowBlur,i,b*this.padding,b*this.bgRadius),this.oscale=this.oimage.width/c.width,a.outlineIncrease>0?c=H(c,this.oimage.width,this.oimage.height):this.oimage=H(this.oimage,c.width,c.height)),c&&(this.fimage=c,l=this.fimage.width/b,j=this.fimage.height/b),this.SetDraw(a),a.txtOpt=!!this.fimage),this.h=j,this.w=l},d.SetFont=function(a,b,c,d){this.textFont=a,this.colour=b,this.bgColour=c,this.bgOutline=d,this.Measure(this.tc.ctxt,this.tc)},d.SetWeight=function(c){var b=this.tc,e=b.weightMode.split(/[, ]/),d,a,f=c.length;if(!this.HasText())return;this.weighted=!0;for(a=0;a<f;++a)d=e[a]||'size','both'==d?(this.Weight(c[a],b.ctxt,b,'size',b.min_weight[a],b.max_weight[a],a),this.Weight(c[a],b.ctxt,b,'colour',b.min_weight[a],b.max_weight[a],a)):this.Weight(c[a],b.ctxt,b,d,b.min_weight[a],b.max_weight[a],a);this.Measure(b.ctxt,b)},d.Weight=function(b,i,a,d,f,h,e){b=isNaN(b)?1:b;var c=(b-f)/(h-f);'colour'==d?this.colour=L(a,c,e):'bgcolour'==d?this.bgColour=L(a,c,e):'bgoutline'==d?this.bgOutline=L(a,c,e):'outline'==d?this.outline.colour=L(a,c,e):'size'==d&&(a.weightSizeMin>0&&a.weightSizeMax>a.weightSizeMin?this.textHeight=a.weightSize*(a.weightSizeMin+(a.weightSizeMax-a.weightSizeMin)*c):this.textHeight=g(1,b*a.weightSize))},d.SetShadowColourFixed=function(a,b,c){a.shadowColor=b},d.SetShadowColourAlpha=function(a,b,c){a.shadowColor=aE(b,c)},d.DrawText=function(a,h,i){var e=this.tc,g=this.x,f=this.y,c=this.sc,b,d;a.globalAlpha=this.alpha,a.fillStyle=this.colour,e.shadow&&this.SetShadowColour(a,e.shadow,this.alpha),a.font=this.font,g+=h/c,f+=i/c-this.h/2;for(b=0;b<this.text.length;++b)d=g,'right'==e.textAlign?d+=this.w/2-this.line_widths[b]:'centre'==e.textAlign?d-=this.line_widths[b]/2:d-=this.w/2,a.setTransform(c,0,0,c,c*d,c*f),a.fillText(this.text[b],0,0),f+=this.textHeight},d.DrawImage=function(b,i,k,l){var e=this.x,f=this.y,a=this.sc,j=l||this.fimage,c=this.w,d=this.h,g=this.alpha,h=this.shadow;b.globalAlpha=g,h&&this.SetShadowColour(b,h,g),e+=i/a-c/2,f+=k/a-d/2,b.setTransform(a,0,0,a,a*e,a*f),b.drawImage(j,0,0,c,d)},d.DrawImageIE=function(b,d,e){var c=this.fimage,a=this.sc,f=c.width=this.w*a,g=c.height=this.h*a,h=this.x*a+d-f/2,i=this.y*a+e-g/2;b.setTransform(1,0,0,1,0,0),b.globalAlpha=this.alpha,b.drawImage(c,h,i)},d.Calc=function(g,e){var a,b=this.tc,d=b.minBrightness,f=b.maxBrightness,c=b.max_radius;return a=g.xform(this.position),this.xformed=a,a=aI(b,a,b.stretchX,b.stretchY),this.x=a.x,this.y=a.y,this.z=a.z,this.sc=a.w,this.alpha=e*G(d+(f-d)*(c-this.z)/(2*c),0,1),this.xformed},d.UpdateActive=function(h,e,f){var a=this.outline,b=this.w,c=this.h,d=this.x-b/2,g=this.y-c/2;return a.Update(d,g,b,c,this.sc,this.z,e,f),a},d.CheckActive=function(a,d,e){var b=this.tc,c=this.UpdateActive(a,d,e);return c.Active(a,b.mx,b.my)?c:null},d.Clicked=function(f){var b=this.a,a=b.target,d=b.href,e;if(a!=''&&a!='_self'){if(self.frames[a])self.frames[a].document.location=d;else{try{if(top.frames[a]){top.frames[a].document.location=d;return}}catch(a){}window.open(d,a)}return}if(c.createEvent){if(e=c.createEvent('MouseEvents'),e.initMouseEvent('click',1,1,window,0,0,0,0,0,0,0,0,0,0,null),!b.dispatchEvent(e))return}else if(b.fireEvent)if(!b.fireEvent('onclick'))return;c.location=d},d.StopAudio=function(){this.audio&&this.playing&&this.audio.pause(),this.stopped=1,this.playing=0},d.PlayAudio=function(){if(e==='off'||this.tc.audioOff)return;if(!e&&!ag())return;var a=this.tc.audio,c=this.tc.gain,d='suspended',b;if(this.audio)if(this.track||(this.track=e.createMediaElementSource(this.audio),this.gain=e.createGain(),this.track.connect(this.gain),this.gain.connect(e.destination)),a=this.audio,c=this.gain,!a.paused)return 1;if(a){if(e.state==d&&e.resume(),e.state==d)return;return c.gain.value=h(2,g(0,this.tc.audioVolume*1)),a.currentTime=0,this.stopped=0,b=a.play(),b!==void 0&&b.then(a=>{this.stopped?this.audio.pause():this.playing=1}),1}};function a(f,o,k){var d,i,b=c.getElementById(f),l=['id','class','innerHTML'];if(!b)throw 0;if(n(window.G_vmlCanvasManager)&&(b=window.G_vmlCanvasManager.initElement(b),this.ie=parseFloat(navigator.appVersion.split('MSIE')[1])),b&&(!b.getContext||!b.getContext('2d').fillText)){i=c.createElement('DIV');for(d=0;d<l.length;++d)i[l[d]]=b[l[d]];throw b.parentNode.insertBefore(i,b),b.parentNode.removeChild(b),0}for(d in a.options)this[d]=k&&n(k[d])?k[d]:n(a[d])?a[d]:a.options[d];if(this.canvas=b,this.ctxt=b.getContext('2d'),this.z1=250/g(this.depth,.001),this.z2=this.z1/this.zoom,this.radius=h(b.height,b.width)*.0075,this.max_radius=100,this.max_weight=[],this.min_weight=[],this.textFont=this.textFont&&Q(this.textFont),this.textHeight*=1,this.imageRadius=this.imageRadius.toString(),this.pulsateTo=G(this.pulsateTo,0,1),this.minBrightness=G(this.minBrightness,0,1),this.maxBrightness=G(this.maxBrightness,this.minBrightness,1),this.ctxt.textBaseline='top',this.lx=(this.lock+'').indexOf('x')+1,this.ly=(this.lock+'').indexOf('y')+1,this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0,this.fixedAlpha=1,this.source=o||f,this.repeatTags=h(64,~~this.repeatTags),this.minTags=h(200,~~this.minTags),~~this.scrollPause>0?a.scrollPause=~~this.scrollPause:this.scrollPause=0,this.minTags>0&&this.repeatTags<1&&(d=this.GetTags().length)&&(this.repeatTags=af(this.minTags/d)-1),this.transform=m.Identity(),this.startTime=this.time=q(),this.mx=this.my=-1,this.centreImage&&av(this),this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition,this.animTiming=typeof a[this.animTiming]=='function'?a[this.animTiming]:a.Smooth,this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]?(this.ctxt.shadowColor=this.shadow,this.shadow=this.ctxt.shadowColor,this.shadowAlpha=aD()):delete this.shadow,this.activeAudio===!1?e='off':this.activeAudio&&this.LoadAudio(),this.Load(),o&&this.hideTags&&function(b){a.loaded?b.HideTags():t('load',function(){b.HideTags()},window)}(this),this.yaw=this.initial?this.initial[0]*this.maxSpeed:0,this.pitch=this.initial?this.initial[1]*this.maxSpeed:0,this.tooltip?(this.ctitle=b.title,b.title='',this.tooltip=='native'?this.Tooltip=this.TooltipNative:(this.Tooltip=this.TooltipDiv,this.ttdiv||(this.ttdiv=c.createElement('div'),this.ttdiv.className=this.tooltipClass,this.ttdiv.style.position='absolute',this.ttdiv.style.zIndex=b.style.zIndex+1,t('mouseover',function(a){a.target.style.display='none'},this.ttdiv),c.body.appendChild(this.ttdiv)))):this.Tooltip=this.TooltipNone,!this.noMouse&&!j[f]){j[f]=[['mousemove',ad],['mouseout',an],['mouseup',aq],['touchstart',ar],['touchend',ac],['touchcancel',ac],['touchmove',au]],this.dragControl&&(j[f].push(['mousedown',ap]),j[f].push(['selectstart',x])),this.wheelZoom&&(j[f].push(['mousewheel',ab]),j[f].push(['DOMMouseScroll',ab])),this.scrollPause&&j[f].push(['scroll',aw,window]);for(d=0;d<j[f].length;++d)i=j[f][d],t(i[0],i[1],i[2]?i[2]:b)}a.started||(a.NextFrame=window.requestAnimationFrame?az:aA,a.interval=this.interval,a.NextFrame(this.interval),a.started=1)}b=a.prototype,b.SourceElements=function(){return c.querySelectorAll?c.querySelectorAll('#'+this.source):[c.getElementById(this.source)]},b.HideTags=function(){var b=this.SourceElements(),a;for(a=0;a<b.length;++a)b[a].style.display='none'},b.GetTags=function(){var e=this.SourceElements(),c,f=[],a,b,d;for(d=0;d<=this.repeatTags;++d)for(a=0;a<e.length;++a){c=e[a].getElementsByTagName('a');for(b=0;b<c.length;++b)f.push(c[b])}return f},b.Message=function(j){var g=[],a,f,b=j.split(''),d,e,h,i;for(a=0;a<b.length;++a)b[a]!=' '&&(f=a-b.length/2,d=c.createElement('A'),d.href='#',d.innerText=b[a],h=100*o(f/9),i=-100*l(f/9),e=new J(this,b[a],d,[h,0,i],2,18,'#000','#fff',0,0,0,'monospace',2,b[a]),e.Init(),g.push(e));return g},b.AddAudio=function(b,c){if(e==='off')return;var a=b.getElementsByTagName('audio');a.length&&(c.SetAudio(a[0]),this.hasAudio=1)},b.CreateTag=function(b){var e,c,a,f,d,g,h,j,k=[0,0,0],l;if('text'!=this.imageMode)if(e=b.getElementsByTagName('img'),e.length)if(c=new Image,c.src=e[0].src,!this.imageMode)return a=new J(this,"",b,k,0,0),a.SetImage(c),A(c,e[0],e[1],a,this),this.AddAudio(b,a),a;if('image'!=this.imageMode&&(d=new V(b),f=d.Lines(),d.Empty()?d=null:(g=this.textFont||Q(i(b,'font-family')),this.splitWidth&&(f=d.SplitWidth(this.splitWidth,this.ctxt,g,this.textHeight)),h=this.bgColour=='tag'?i(b,'background-color'):this.bgColour,j=this.bgOutline=='tag'?i(b,'color'):this.bgOutline)),d||c)return a=new J(this,f,b,k,2,this.textHeight+2,this.textColour||i(b,'color'),h,this.bgRadius,j,this.bgOutlineThickness,g,this.padding,d&&d.original),c?(a.SetImage(c),A(c,e[0],e[1],a,this)):a.Init(),this.AddAudio(b,a),a},b.UpdateTag=function(a,b){var c=this.textColour||i(b,'color'),d=this.textFont||Q(i(b,'font-family')),e=this.bgColour=='tag'?i(b,'background-color'):this.bgColour,f=this.bgOutline=='tag'?i(b,'color'):this.bgOutline;a.a=b,a.title=b.title,(a.colour!=c||a.textFont!=d||a.bgColour!=e||a.bgOutline!=f)&&a.SetFont(d,c,e,f)},b.Weight=function(d){var f=d.length,c,b,a,e=[],g,h=this.weightFrom?this.weightFrom.split(/[, ]/):[null],i=h.length;for(b=0;b<f;++b){e[b]=[];for(a=0;a<i;++a)c=aj(d[b].a,h[a],this.textHeight),(!this.max_weight[a]||c>this.max_weight[a])&&(this.max_weight[a]=c),(!this.min_weight[a]||c<this.min_weight[a])&&(this.min_weight[a]=c),e[b][a]=c}for(a=0;a<i;++a)this.max_weight[a]>this.min_weight[a]&&(g=1);if(g)for(b=0;b<f;++b)d[b].SetWeight(e[b])},b.Load=function(){var c=this.GetTags(),b=[],d,k,l,h,i,j,f,a,e=[],m={sphere:aB,vcylinder:ax,hcylinder:aH,vring:aG,hring:aF};if(c.length){e.length=c.length;for(a=0;a<c.length;++a)e[a]=a;this.shuffleTags&&ai(e),h=100*this.radiusX,i=100*this.radiusY,j=100*this.radiusZ,this.max_radius=g(h,g(i,j));for(a=0;a<c.length;++a)k=this.CreateTag(c[e[a]]),k&&b.push(k);this.weight&&this.Weight(b,!0),this.shapeArgs?this.shapeArgs[0]=b.length:(l=this.shape.toString().split(/[(),]/),d=l.shift(),typeof window[d]=='function'?this.shape=window[d]:this.shape=m[d]||m.sphere,this.shapeArgs=[b.length,h,i,j].concat(l)),f=this.shape.apply(this,this.shapeArgs),this.listLength=b.length;for(a=0;a<b.length;++a)b[a].position=new s(f[a][0],f[a][1],f[a][2])}this.noTagsMessage&&!b.length&&(a=this.imageMode&&this.imageMode!='both'?this.imageMode+' ':'',b=this.Message('No '+a+'tags')),this.taglist=b},b.Update=function(){var e=this.GetTags(),d=[],j=this.taglist,k,f=[],c=[],h,i,g,a,b;if(!this.shapeArgs)return this.Load();if(e.length){g=this.listLength=e.length,i=j.length;for(a=0;a<i;++a)d.push(j[a]),c.push(a);for(a=0;a<g;++a){for(b=0,k=0;b<i;++b)j[b].EqualTo(e[a])&&(this.UpdateTag(d[b],e[a]),k=c[b]=-1);k||f.push(a)}for(a=0,b=0;a<i;++a)c[b]==-1?c.splice(b,1):++b;if(c.length){for(ai(c);c.length&&f.length;)a=c.shift(),b=f.shift(),d[a]=this.CreateTag(e[b]);for(c.sort(function(a,b){return a-b});c.length;)d.splice(c.pop(),1)}for(b=d.length/(f.length+1),a=0;f.length;)d.splice(af(++a*b),0,this.CreateTag(e[f.shift()]));this.shapeArgs[0]=g=d.length,h=this.shape.apply(this,this.shapeArgs);for(a=0;a<g;++a)d[a].position=new s(h[a][0],h[a][1],h[a][2]);this.weight&&this.Weight(d)}this.taglist=d},b.SetShadow=function(a){a.shadowBlur=this.shadowBlur,a.shadowOffsetX=this.shadowOffset[0],a.shadowOffsetY=this.shadowOffset[1]},b.LoadAudio=function(){if(!e&&!ag())return;this.audio=c.createElement('audio'),this.audio.src=this.activeAudio,this.track=e.createMediaElementSource(this.audio),this.gain=e.createGain(),this.track.connect(this.gain),this.gain.connect(e.destination),this.hasAudio=1,P=function(a){e.resume(),c.removeEventListener('click',P)},c.addEventListener('click',P)},b.ShowAudioIcon=function(){var a=this.audioIconSize,c=this.canvas,d=this.ctxt,k=c.width-a-3,f=c.height-a-3,g=this.audioIconThickness,h='#000',i='#fff',j=this.audioIconDark,b=this.audioOff,l='suspended';if(!e)return;b||(b=e.state===l),this.audioIcon&&this.hasAudio&&($(b,d,a,k,f,g+1,j?i:h),$(b,d,a,k,f,g,j?h:i))},b.CheckAudioIcon=function(){var a=this.audioIconSize,b=this.canvas,c=this.audioIconThickness/2,d=b.width-a-3-c,e=b.height-a-3-c;if(this.audioIcon&&this.mx>=d&&this.my>=e)return!0},b.ToggleAudio=function(){var a=this.audioOff||e&&e.state==='suspended';a||this.currentAudio&&this.currentAudio.StopAudio(),this.audioOff=!a},b.Draw=function(s){if(this.paused)return;var l=this.canvas,i=l.width,j=l.height,q=0,p=(s-this.time)*a.interval/1e3,h=i/2+this.offsetX,g=j/2+this.offsetY,d=this.ctxt,b,f,c,o=-1,e=this.taglist,k=e.length,t=this.active&&this.active.tag,m='',u=this.frontSelect,r=this.centreFunc==x,n;if(this.time=s,this.frozen&&this.drawn)return this.Animate(i,j,p);n=this.AnimateFixed(),d.setTransform(1,0,0,1,0,0);for(c=0;c<k;++c)e[c].Calc(this.transform,this.fixedAlpha);if(e=ak(e,function(a,b){return b.z-a.z}),n&&this.fixedAnim.active)b=this.fixedAnim.tag.UpdateActive(d,h,g);else if(this.active=null,this.CheckAudioIcon())m='pointer';else{for(c=0;c<k;++c)f=this.mx>=0&&this.my>=0&&this.taglist[c].CheckActive(d,h,g),f&&f.sc>q&&(!u||f.z<=0)&&(b=f,o=c,b.tag=this.taglist[c],q=f.sc);this.active=b}this.txtOpt||this.shadow&&this.SetShadow(d),d.clearRect(0,0,i,j);for(c=0;c<k;++c){if(!r&&e[c].z<=0){try{this.centreFunc(d,i,j,h,g)}catch(a){alert(a),this.centreFunc=x}r=!0}b&&b.tag==e[c]&&b.PreDraw(d,e[c],h,g)||e[c].Draw(d,h,g),b&&b.tag==e[c]&&b.PostDraw(d)}this.freezeActive&&b?this.Freeze():(this.UnFreeze(),this.drawn=k==this.listLength),this.fixedCallback&&(this.fixedCallback(this,this.fixedCallbackTag),this.fixedCallback=null),n||this.Animate(i,j,p),b&&(b.LastDraw(d),b.tag!=t&&(this.currentAudio&&this.currentAudio!=b.tag&&this.currentAudio.StopAudio(),b.tag.PlayAudio()&&(this.currentAudio=b.tag)),m=this.activeCursor),l.style.cursor=m,this.Tooltip(b,this.taglist[o]),this.audioIcon&&this.ShowAudioIcon()},b.TooltipNone=function(){},b.TooltipNative=function(b,a){b?this.canvas.title=a&&a.title?a.title:'':this.canvas.title=this.ctitle},b.SetTTDiv=function(c,d){var a=this,b=a.ttdiv.style;c!=a.ttdiv.innerHTML&&(b.display='none'),a.ttdiv.innerHTML=c,d&&(d.title=a.ttdiv.innerHTML),b.display=='none'&&!a.tttimer&&(a.tttimer=setTimeout(function(){var c=X(a.canvas.id);b.display='block',b.left=c.x+a.mx+'px',b.top=c.y+a.my+24+'px',a.tttimer=null},a.tooltipDelay))},b.TooltipDiv=function(b,a){b&&a&&a.title?this.SetTTDiv(a.title,a):!b&&this.mx!=-1&&this.my!=-1&&this.ctitle.length?this.SetTTDiv(this.ctitle):this.ttdiv.style.display='none'},b.Transform=function(c,a,b){if(a||b){var d=o(a),e=l(a),f=o(b),g=l(b),h=new m([g,0,f,0,1,0,-f,0,g]),i=new m([1,0,0,0,e,-d,0,d,e]);c.transform=c.transform.mul(h.mul(i))}},b.AnimateFixed=function(){var a,b,c,d,e;return!!(this.fadeIn&&(b=q()-this.startTime,b>=this.fadeIn?(this.fadeIn=0,this.fixedAlpha=1):this.fixedAlpha=b/this.fadeIn),this.fixedAnim)&&(this.fixedAnim.transform||(this.fixedAnim.transform=this.transform),a=this.fixedAnim,b=q()-a.t0,c=a.angle,d,e=this.animTiming(a.t,b),this.transform=a.transform,b>=a.t?(this.fixedCallbackTag=a.tag,this.fixedCallback=a.cb,this.fixedAnim=this.yaw=this.pitch=0):c*=e,d=m.Rotation(c,a.axis),this.transform=this.transform.mul(d),this.fixedAnim!=0)},b.AnimatePosition=function(g,h,f){var a=this,d=a.mx,e=a.my,b,c;!a.frozen&&d>=0&&e>=0&&d<g&&e<h?(b=a.maxSpeed,c=a.reverse?-1:1,a.lx||(a.yaw=(d*2*b/g-b)*c*f),a.ly||(a.pitch=(e*2*b/h-b)*-c*f),a.initial=null):a.initial||(a.frozen&&!a.freezeDecel?a.yaw=a.pitch=0:a.Decel(a)),this.Transform(a,a.pitch,a.yaw)},b.AnimateDrag=function(d,e,c){var a=this,b=100*c*a.maxSpeed/a.max_radius/a.zoom;a.dx||a.dy?(a.lx||(a.yaw=a.dx*b/a.stretchX),a.ly||(a.pitch=a.dy*-b/a.stretchY),a.dx=a.dy=0,a.initial=null):a.initial||a.Decel(a),this.Transform(a,a.pitch,a.yaw)},b.Freeze=function(){this.frozen||(this.preFreeze=[this.yaw,this.pitch],this.frozen=1,this.drawn=0)},b.UnFreeze=function(){this.frozen&&(this.yaw=this.preFreeze[0],this.pitch=this.preFreeze[1],this.frozen=0)},b.Decel=function(a){var b=a.minSpeed,c=p(a.yaw),d=p(a.pitch);!a.lx&&c>b&&(a.yaw=c>a.z0?a.yaw*a.decel:0),!a.ly&&d>b&&(a.pitch=d>a.z0?a.pitch*a.decel:0)},b.Zoom=function(a){this.z2=this.z1*(1/a),this.drawn=0},b.Clicked=function(b){if(this.CheckAudioIcon()){this.ToggleAudio();return}var a=this.active;try{a&&a.tag&&(this.clickToFront===!1||this.clickToFront===null?a.tag.Clicked(b):this.TagToFront(a.tag,this.clickToFront,function(){a.tag.Clicked(b)},!0))}catch(a){}},b.Wheel=function(a){var b=this.zoom+this.zoomStep*(a?1:-1);this.zoom=h(this.zoomMax,g(this.zoomMin,b)),this.Zoom(this.zoom)},b.BeginDrag=function(a){this.down=K(a,this.canvas),a.cancelBubble=!0,a.returnValue=!1,a.preventDefault&&a.preventDefault()},b.Drag=function(e,a){if(this.dragControl&&this.down){var d=this.dragThreshold*this.dragThreshold,b=a.x-this.down.x,c=a.y-this.down.y;(this.dragging||b*b+c*c>d)&&(this.dx=b,this.dy=c,this.dragging=1,this.down=a)}return this.dragging},b.EndDrag=function(){var a=this.dragging;return this.dragging=this.down=null,a};function ah(a){var b=a.targetTouches[0],c=a.targetTouches[1];return E(w(c.pageX-b.pageX,2)+w(c.pageY-b.pageY,2))}b.BeginPinch=function(a){this.pinched=[ah(a),this.zoom],a.preventDefault&&a.preventDefault()},b.Pinch=function(d){var b,c,a=this.pinched;if(!a)return;c=ah(d),b=a[1]*c/a[0],this.zoom=h(this.zoomMax,g(this.zoomMin,b)),this.Zoom(this.zoom)},b.EndPinch=function(a){this.pinched=null},b.Pause=function(){this.paused=!0},b.Resume=function(){this.paused=!1},b.SetSpeed=function(a){this.initial=a,this.yaw=a[0]*this.maxSpeed,this.pitch=a[1]*this.maxSpeed},b.FindTag=function(a){if(!n(a))return null;if(n(a.index)&&(a=a.index),!B(a))return this.taglist[a];var c,d,b;n(a.id)?(c='id',d=a.id):n(a.text)&&(c='innerText',d=a.text);for(b=0;b<this.taglist.length;++b)if(this.taglist[b].a[c]==d)return this.taglist[b]},b.RotateTag=function(a,h,i,j,f,g){var b=a.Calc(this.transform,1),c=new s(b.x,b.y,b.z),d=ay(i,h),e=c.angle(d),k=c.cross(d).unit();e==0?(this.fixedCallbackTag=a,this.fixedCallback=f):this.fixedAnim={angle:-e,axis:k,t:j,t0:q(),cb:f,tag:a,active:g}},b.TagToFront=function(a,b,c,d){this.RotateTag(a,0,0,b,c,d)},b.Volume=function(a){this.audioVolume=a*1},a.Start=function(b,c,d){a.Delete(b),a.tc[b]=new a(b,c,d)};function N(c,b){a.tc[b]&&a.tc[b][c]()}a.Linear=function(a,b){return b/a},a.Smooth=function(a,b){return.5-l(b*Math.PI/a)/2},a.Pause=function(a){N('Pause',a)},a.Resume=function(a){N('Resume',a)},a.Reload=function(a){N('Load',a)},a.Update=function(a){N('Update',a)},a.SetSpeed=function(c,b){return!!(B(b)&&a.tc[c]&&!isNaN(b[0])&&!isNaN(b[1]))&&(a.tc[c].SetSpeed(b),!0)},a.TagToFront=function(c,b){return!!B(b)&&(b.lat=b.lng=0,a.RotateTag(c,b))},a.RotateTag=function(c,b){if(B(b)&&a.tc[c]){isNaN(b.time)&&(b.time=500);var d=a.tc[c].FindTag(b);if(d)return a.tc[c].RotateTag(d,b.lat,b.lng,b.time,b.callback,b.active),!0}return!1},a.Delete=function(b){var d,e;if(j[b])if(e=c.getElementById(b),e)for(d=0;d<j[b].length;++d)am(j[b][d][0],j[b][d][1],e);delete j[b],delete a.tc[b]},a.tc={},a.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:!1,freezeDecel:!1,activeCursor:'pointer',pulsateTo:1,pulsateTime:3,reverse:!1,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:'#ffff99',outlineThickness:2,outlineOffset:5,outlineMethod:'outline',outlineRadius:0,textColour:'#ff99ff',textHeight:15,textFont:'Helvetica, Arial, sans-serif',shadow:'#000',shadowBlur:0,shadowOffset:[0,0],initial:null,hideTags:!0,zoom:1,weight:!1,weightMode:'size',weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:'#f00',0.33:'#ff0',0.66:'#0f0',1:'#00f'},txtOpt:!0,txtScale:2,frontSelect:!1,wheelZoom:!0,zoomMin:.3,zoomMax:3,zoomStep:.05,shape:'sphere',lock:null,tooltip:null,tooltipDelay:300,tooltipClass:'tctooltip',radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:!1,noSelect:!1,noMouse:!1,imageScale:1,paused:!1,dragControl:!1,dragThreshold:4,centreFunc:x,splitWidth:0,animTiming:'Smooth',clickToFront:!1,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:'centre',textVAlign:'middle',imageMode:null,imagePosition:null,imagePadding:2,imageAlign:'centre',imageVAlign:'middle',noTagsMessage:!0,centreImage:null,pinchZoom:!1,repeatTags:0,minTags:0,imageRadius:0,scrollPause:!1,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1,activeAudio:'',audioVolume:1,audioIcon:1,audioIconSize:20,audioIconThickness:2,audioIconDark:0,altImage:0};for(r in a.options)a[r]=a.options[r];window.TagCanvas=a,t('load',function(){a.loaded=1},window)})()`,
  s = function () {
    return Math.floor((1 + Math.random()) * 65536)
      .toString(16)
      .substring(1);
  },
  guid = function () {
    return (
      "" + s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s()
    );
  },
  UseInViewport = function (o) {
    var a = o.cb,
      c = o.children,
      d = React.useRef(null);
    return (
      React.useEffect(
        function () {
          var h = { root: null, rootMargin: "0px", threshold: 0.1 },
            g = function ($) {
              a(
                $.some(function (_e) {
                  return _e.isIntersecting;
                }),
              );
            },
            b = new IntersectionObserver(g, h);
          return (
            d != null && d.current && b.observe(d.current),
            function () {
              b.disconnect();
            }
          );
        },
        [a],
      ),
      React.createElement("div", { ref: d }, c)
    );
  },
  isScriptLoaded = !1,
  tr = function (o) {
    try {
      o();
    } catch {
      try {
        o();
      } catch {}
    }
  },
  CloudWrapped = function CloudWrapped(_ref) {
    var _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$containerProps = _ref.containerProps,
      containerProps =
        _ref$containerProps === void 0 ? {} : _ref$containerProps,
      _ref$canvasProps = _ref.canvasProps,
      canvasProps = _ref$canvasProps === void 0 ? {} : _ref$canvasProps,
      children = _ref.children,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? guid() : _ref$id,
      state = React.useRef({
        canvasContainerId: "canvas-container-" + id,
        canvasId: "canvas-" + id,
        hasStarted: !1,
      }).current,
      _React$useState = React.useState(!1),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];
    React.useEffect(function () {
      return (
        setMounted(!0),
        function () {
          return tr(function () {
            eval("TagCanvas.Delete('" + state.canvasId + "')");
          });
        }
      );
    }, []);
    var supportsTouch =
        typeof window < "u"
          ? "ontouchstart" in window || navigator.maxTouchPoints
          : !1,
      ops = JSON.stringify(
        _extends(
          {
            dragControl: !!supportsTouch,
            maxSpeed: supportsTouch ? 0.01 : 0.05,
            textFont: null,
            textColour: null,
          },
          options,
        ),
      ),
      onVisibilityChange = function onVisibilityChange(isVisible) {
        return tr(function () {
          if (isVisible && mounted)
            if (
              (isScriptLoaded || (eval(tagCanvasString), (isScriptLoaded = !0)),
              state.hasStarted)
            )
              eval("TagCanvas.Resume('" + state.canvasId + "')");
            else
              try {
                (eval(
                  "TagCanvas.Start('" +
                    state.canvasId +
                    "', null, " +
                    ops +
                    ")",
                ),
                  (state.hasStarted = !0));
              } catch (e) {
                var el = document.getElementById(state.canvasContainerId);
                throw (el && (el.style.display = "none"), e);
              }
          else
            state.hasStarted &&
              eval("TagCanvas.Pause('" + state.canvasId + "')");
        });
      };
    return React.createElement(
      UseInViewport,
      { cb: onVisibilityChange },
      React.createElement(
        "div",
        Object.assign({ id: state.canvasContainerId }, containerProps),
        React.createElement(
          "canvas",
          Object.assign(
            {
              id: state.canvasId,
              style: { width: "100%", maxWidth: "70vh" },
              width: 1e3,
              height: 1e3,
            },
            canvasProps,
          ),
          children,
        ),
      ),
    );
  },
  Cloud = function e(o) {
    return React.createElement(
      CloudWrapped,
      Object.assign({}, o, { key: guid() }),
    );
  },
  addHash = function e(o) {
    return o[0] === "#" ? o : "#" + o;
  },
  renderSimpleIcon = function e(o) {
    var a = o.aProps,
      c = a === void 0 ? {} : a,
      d = o.bgHex,
      h = d === void 0 ? "#fff" : d,
      g = o.fallbackHex,
      b = g === void 0 ? "#000" : g,
      j = o.icon,
      $ = o.imgProps,
      _e = $ === void 0 ? {} : $,
      et = o.minContrastRatio,
      nt = et === void 0 ? 1 : et,
      ot = o.size,
      lt = ot === void 0 ? 42 : ot,
      ut = addHash(j.hex),
      gt = addHash(h),
      it = addHash(b),
      rt = tt(gt, ut) > nt,
      st = _(rt ? ut : it),
      ct = st.map(function (Ct) {
        return Math.round((Ct / 100) * 255);
      }),
      ft = ct[0],
      pt = ct[1],
      mt = ct[2],
      dt =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(' +
        ft +
        ", " +
        pt +
        ", " +
        mt +
        ');" viewBox="0 0 24 24" height="' +
        lt +
        'px" width="' +
        lt +
        'px"> <title>' +
        j.title +
        '</title> <path d="' +
        j.path +
        '"></path> </svg>',
      wt = _extends(
        { key: guid(), title: j.title, style: { cursor: "pointer" } },
        c,
      ),
      bt = _extends({ height: lt, width: lt, alt: j.title, src: dt }, _e);
    return React.createElement(
      "a",
      Object.assign({}, wt),
      React.createElement("img", Object.assign({}, bt)),
    );
  },
  svgToPath = function e(o) {
    var a = o.indexOf('d="'),
      c = o.indexOf('"', a + 3);
    return o.substring(a + 3, c);
  },
  url = "https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/",
  cache = {},
  fallback = "",
  getSlugPath = (function () {
    var e = _asyncToGenerator(
      _regeneratorRuntime().mark(function o(a) {
        var c, d, h, g;
        return _regeneratorRuntime().wrap(
          function (j) {
            for (;;)
              switch ((j.prev = j.next)) {
                case 0:
                  if (cache[a]) {
                    j.next = 15;
                    break;
                  }
                  return (
                    (j.prev = 1),
                    (c = "" + url + a + ".svg"),
                    (j.next = 5),
                    fetch(c, { cache: "force-cache" })
                  );
                case 5:
                  return ((d = j.sent), (j.next = 8), d.text());
                case 8:
                  ((h = j.sent),
                    (g = svgToPath(h)),
                    (cache[a] = g),
                    (j.next = 15));
                  break;
                case 13:
                  ((j.prev = 13), (j.t0 = j.catch(1)));
                case 15:
                  if (!cache[a]) {
                    j.next = 17;
                    break;
                  }
                  return j.abrupt("return", cache[a]);
                case 17:
                  return j.abrupt("return", fallback);
                case 18:
                case "end":
                  return j.stop();
              }
          },
          o,
          null,
          [[1, 13]],
        );
      }),
    );
    return function (a) {
      return e.apply(this, arguments);
    };
  })(),
  getSlugsPath = (function () {
    var e = _asyncToGenerator(
      _regeneratorRuntime().mark(function o(a) {
        var c;
        return _regeneratorRuntime().wrap(function (h) {
          for (;;)
            switch ((h.prev = h.next)) {
              case 0:
                return (
                  (c = {}),
                  a.forEach(function (g) {
                    c[g] = g;
                  }),
                  (h.next = 4),
                  Promise.all(Object.keys(c).map(getSlugPath))
                );
              case 4:
                return h.abrupt(
                  "return",
                  a.map(function (g) {
                    var b;
                    return {
                      slug: g,
                      path: (b = cache[g]) != null ? b : fallback,
                    };
                  }),
                );
              case 5:
              case "end":
                return h.stop();
            }
        }, o);
      }),
    );
    return function (a) {
      return e.apply(this, arguments);
    };
  })(),
  TITLE_TO_SLUG_REPLACEMENTS = {
    "+": "plus",
    ".": "dot",
    "&": "and",
    đ: "d",
    ħ: "h",
    ı: "i",
    ĸ: "k",
    ŀ: "l",
    ł: "l",
    ß: "ss",
    ŧ: "t",
  },
  TITLE_TO_SLUG_CHARS_REGEX = RegExp(
    "[" + Object.keys(TITLE_TO_SLUG_REPLACEMENTS).join("") + "]",
    "g",
  ),
  TITLE_TO_SLUG_RANGE_REGEX = /[^a-z0-9]/g,
  getSlug = function e(o) {
    var a = o.title;
    return a
      .toLowerCase()
      .replace(TITLE_TO_SLUG_CHARS_REGEX, function (c) {
        return TITLE_TO_SLUG_REPLACEMENTS[c];
      })
      .normalize("NFD")
      .replace(TITLE_TO_SLUG_RANGE_REGEX, "");
  },
  url$1 =
    "https://raw.githubusercontent.com/simple-icons/simple-icons/14.0.0/_data/simple-icons.json",
  cache$1,
  fallback$1 = "#000",
  primeCache = (function () {
    var e = _asyncToGenerator(
      _regeneratorRuntime().mark(function o() {
        var a, c;
        return _regeneratorRuntime().wrap(
          function (h) {
            for (;;)
              switch ((h.prev = h.next)) {
                case 0:
                  if (cache$1) {
                    h.next = 14;
                    break;
                  }
                  return (
                    (h.prev = 1),
                    (h.next = 4),
                    fetch(url$1, { cache: "force-cache" })
                  );
                case 4:
                  return ((a = h.sent), (h.next = 7), a.json());
                case 7:
                  ((c = h.sent),
                    (cache$1 = {}),
                    c.forEach(function (g) {
                      var b,
                        j = getSlug({ title: g.title });
                      cache$1[j] = {
                        hex: addHash((b = g.hex) != null ? b : fallback$1),
                        title: g.title,
                        slug: j,
                      };
                    }),
                    (h.next = 14));
                  break;
                case 12:
                  ((h.prev = 12), (h.t0 = h.catch(1)));
                case 14:
                case "end":
                  return h.stop();
              }
          },
          o,
          null,
          [[1, 12]],
        );
      }),
    );
    return function () {
      return e.apply(this, arguments);
    };
  })(),
  getSlugHexs = (function () {
    var e = _asyncToGenerator(
      _regeneratorRuntime().mark(function o(a) {
        return _regeneratorRuntime().wrap(function (d) {
          for (;;)
            switch ((d.prev = d.next)) {
              case 0:
                return ((d.next = 2), primeCache());
              case 2:
                return d.abrupt("return", {
                  hexs: a.map(function (h) {
                    var g, b, j, $;
                    return {
                      slug: h,
                      hex:
                        cache$1 &&
                        (g = (b = cache$1[h]) == null ? void 0 : b.hex) != null
                          ? g
                          : fallback$1,
                      title:
                        cache$1 &&
                        (j = ($ = cache$1[h]) == null ? void 0 : $.title) !=
                          null
                          ? j
                          : "icon",
                    };
                  }),
                  cache: cache$1,
                });
              case 3:
              case "end":
                return d.stop();
            }
        }, o);
      }),
    );
    return function (a) {
      return e.apply(this, arguments);
    };
  })(),
  fetchSimpleIcons = (function () {
    var e = _asyncToGenerator(
      _regeneratorRuntime().mark(function o(a) {
        var c, d, h, g, b, j, $;
        return _regeneratorRuntime().wrap(function (et) {
          for (;;)
            switch ((et.prev = et.next)) {
              case 0:
                return (
                  (c = a.slugs),
                  (et.next = 3),
                  Promise.all([getSlugsPath(c), getSlugHexs(c)])
                );
              case 3:
                return (
                  (d = et.sent),
                  (h = d[0]),
                  (g = d[1]),
                  (b = g.hexs),
                  (j = g.cache),
                  ($ = {}),
                  b.forEach(function (nt) {
                    $[nt.slug] = nt;
                  }),
                  h.forEach(function (nt) {
                    $[nt.slug].path = nt.path;
                  }),
                  c.forEach(function (nt) {
                    var ot = $[nt];
                    (!ot.hex || !ot.path) && delete $[nt];
                  }),
                  et.abrupt("return", { simpleIcons: $, allIcon: j })
                );
              case 13:
              case "end":
                return et.stop();
            }
        }, o);
      }),
    );
    return function (a) {
      return e.apply(this, arguments);
    };
  })();
const iconSlugs = [
    "react",
    "javascript",
    "html5",
    "css3",
    "github",
    "figma",
    "vite",
    "tailwindcss",
    "visualstudiocode",
    "flutter",
    "mysql",
    "python",
    "java",
    "typescript",
    "vitejs",
    "vuejs",
    "firebase",
    "flutter",
    "docker",
    "dart",
    "postgresql",
    "graphql",
    "googlecloud",
    "php",
    "c",
    "cplusplus",
    "bash",
    "kubernetes",
    "jenkins",
    "ansible",
    "apache",
    "nginx",
    "mysql",
    "sqlite",
    "matplotlib",
    "numpy",
    "babel",
    "eslint",
    "prettier",
    "vuex",
    "express",
    "spring",
    "laravel",
    "springboot",
    "nextjs",
    "axios",
    "fetch",
  ],
  cloudProps = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
      },
    },
    options: {
      reverse: !0,
      depth: 1,
      wheelZoom: !1,
      imageScale: 3,
      activeCursor: "default",
      tooltip: "native",
      initial: [0.1, -0.1],
      clickToFront: 500,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: 0.04,
      minSpeed: 0.02,
    },
  };
function renderCustomIcon(e, o = "light") {
  return renderSimpleIcon({
    icon: e,
    bgHex: o === "light" ? "#f3f2ef" : "#080510",
    fallbackHex: o === "light" ? "#6e6e73" : "#ffffff",
    minContrastRatio: o === "dark" ? 2 : 1.2,
    size: 42,
    aProps: {
      href: void 0,
      target: void 0,
      rel: void 0,
      onClick: (h) => h.preventDefault(),
    },
  });
}
function InteractiveIconCloud() {
  const [e, o] = reactExports.useState(null);
  reactExports.useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(o);
  }, []);
  const a = reactExports.useMemo(
    () =>
      e
        ? Object.values(e.simpleIcons).map((c) => renderCustomIcon(c, "light"))
        : null,
    [e],
  );
  return jsxRuntimeExports.jsx(Cloud, { ...cloudProps, children: a });
}
function Hero() {
  return jsxRuntimeExports.jsxs("section", {
    className:
      "pt-32 pb-16 magical-bg min-h-screen flex items-center relative overflow-hidden",
    children: [
      jsxRuntimeExports.jsxs("div", {
        className: "absolute inset-0",
        children: [
          jsxRuntimeExports.jsx("div", {
            className:
              "absolute top-20 left-10 w-20 h-20 bg-purple-400/30 rounded-full animate-bubble",
          }),
          jsxRuntimeExports.jsx("div", {
            className:
              "absolute top-40 right-20 w-16 h-16 bg-pink-400/30 rounded-full animate-floating",
          }),
          jsxRuntimeExports.jsx("div", {
            className:
              "absolute bottom-40 left-20 w-12 h-12 bg-blue-400/30 rounded-full animate-bubble",
          }),
          jsxRuntimeExports.jsx("div", {
            className:
              "absolute bottom-20 right-40 w-24 h-24 bg-yellow-400/30 rounded-full animate-floating",
          }),
          jsxRuntimeExports.jsx("div", {
            className:
              "absolute top-60 left-1/2 w-8 h-8 bg-green-400/30 rounded-full animate-bubble",
          }),
        ],
      }),
      jsxRuntimeExports.jsx("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: jsxRuntimeExports.jsxs("div", {
          className: "flex gap-10",
          children: [
            jsxRuntimeExports.jsxs("div", {
              className: "mb-8 animate-floating",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "relative",
                  children: [
                    jsxRuntimeExports.jsx("img", {
                      src: "../src/assets/profile.jpg",
                      alt: "Yon Samphorslita",
                      className:
                        "w-60 h-60 mx-auto mb-6 border-4 border-white/50 shadow-2xl glow rounded-2xl",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "absolute -top-2 -right-2 text-3xl animate-bounce",
                      children: "✨",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "absolute -bottom-2 -left-2 text-2xl animate-pulse",
                      children: "🌟",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("div", {
                  className: "mt-4 w-60 h-60 mx-auto",
                  children: jsxRuntimeExports.jsx(InteractiveIconCloud, {}),
                }),
              ],
            }),
            jsxRuntimeExports.jsxs("div", {
              className: "text-center",
              children: [
                jsxRuntimeExports.jsx(HyperText, {
                  className:
                    "text-5xl md:text-7xl font-bold text-white mb-6 ml-3 bg-transparent",
                  text: "Yon Samphorslita",
                }),
                jsxRuntimeExports.jsx(HyperText, {
                  className:
                    "text-2xl md:text-3xl text-white/90 mb-8 font-medium ",
                  text: "Full-Stack Developer",
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "flex justify-center space-x-4 mb-8",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-floating",
                      children: "💻",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-bubble",
                      children: "📱",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-floating",
                      children: "🚀",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-white text-2xl animate-bubble",
                      children: "✨",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    jsxRuntimeExports.jsx("a", {
                      href: "#contact",
                      className: "btn-primary",
                      children: "Get In Touch",
                    }),
                    jsxRuntimeExports.jsx("a", {
                      href: "#projects",
                      className: "btn-secondary",
                      children: "View My Work",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "flex justify-center space-x-8 mt-8",
                  children: [
                    jsxRuntimeExports.jsx("a", {
                      href: "mailto:yon.samphorslita@gmail.com",
                      className:
                        "w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 glow",
                      children: jsxRuntimeExports.jsx("div", {
                        className: "icon-mail text-2xl",
                      }),
                    }),
                    jsxRuntimeExports.jsx("a", {
                      href: "https://linkedin.com/in/samphorslita-yon",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 glow",
                      children: jsxRuntimeExports.jsx("div", {
                        className: "icon-linkedin text-2xl",
                      }),
                    }),
                    jsxRuntimeExports.jsx("a", {
                      href: "https://github.com/yon-samphorslita",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 glow",
                      children: jsxRuntimeExports.jsx("div", {
                        className: "icon-github text-2xl",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function About() {
  return jsxRuntimeExports.jsxs("section", {
    id: "about",
    className: "py-16 magical-bg-alt relative section-blend",
    children: [
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute top-10 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-floating",
      }),
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute bottom-10 left-10 w-12 h-12 bg-pink-400/20 rounded-full animate-bubble",
      }),
      jsxRuntimeExports.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          jsxRuntimeExports.jsx("h2", {
            className: "section-title",
            children: "🌟 About Me 🌟",
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid md:grid-cols-3 gap-8 mb-12",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "card text-center group",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300",
                    children: "🎓",
                  }),
                  jsxRuntimeExports.jsx("h3", {
                    className: "text-xl font-bold text-white mb-2",
                    children: "Education",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-white/80 text-sm",
                    children: "ICT Student at ITC",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-white/60 text-xs",
                    children: "Year 4 • July 2026",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "card text-center group",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300",
                    children: "📍",
                  }),
                  jsxRuntimeExports.jsx("h3", {
                    className: "text-xl font-bold text-white mb-2",
                    children: "Location",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-white/80 text-sm",
                    children: "Phnom Penh",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-white/60 text-xs",
                    children: "Cambodia",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "card text-center group",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300",
                    children: "💼",
                  }),
                  jsxRuntimeExports.jsx("h3", {
                    className: "text-xl font-bold text-white mb-2",
                    children: "Status",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-white/80 text-sm",
                    children: "Available",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-white/60 text-xs",
                    children: "Full-time & Freelance",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsx("div", {
            className: "card",
            children: jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-6",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "text-center",
                  children: [
                    jsxRuntimeExports.jsx("img", {
                      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop",
                      alt: "Web Development",
                      className:
                        "w-16 h-16 rounded-2xl mx-auto mb-3 object-cover",
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-white/90 text-sm font-medium",
                      children: "Web Dev",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "text-center",
                  children: [
                    jsxRuntimeExports.jsx("img", {
                      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop",
                      alt: "Mobile Development",
                      className:
                        "w-16 h-16 rounded-2xl mx-auto mb-3 object-cover",
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-white/90 text-sm font-medium",
                      children: "Mobile Dev",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "text-center",
                  children: [
                    jsxRuntimeExports.jsx("img", {
                      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
                      alt: "UI/UX Design",
                      className:
                        "w-16 h-16 rounded-2xl mx-auto mb-3 object-cover",
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-white/90 text-sm font-medium",
                      children: "UI/UX",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "text-center",
                  children: [
                    jsxRuntimeExports.jsx("img", {
                      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=100&h=100&fit=crop",
                      alt: "Database",
                      className:
                        "w-16 h-16 rounded-2xl mx-auto mb-3 object-cover",
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-white/90 text-sm font-medium",
                      children: "Database",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Skills() {
  const e = [
      { name: "HTML", icon: "🌐", color: "from-orange-400 to-red-400" },
      {
        name: "JavaScript",
        icon: "⚡",
        color: "from-yellow-400 to-orange-400",
      },
      { name: "Vue.js", icon: "💚", color: "from-green-400 to-emerald-400" },
      { name: "Laravel", icon: "🔥", color: "from-red-400 to-pink-400" },
      { name: "Flutter", icon: "🦋", color: "from-blue-400 to-cyan-400" },
      { name: "Firebase", icon: "🚀", color: "from-purple-400 to-pink-400" },
      { name: "MySQL", icon: "🗄️", color: "from-blue-400 to-indigo-400" },
      { name: "Git", icon: "📝", color: "from-gray-400 to-gray-600" },
      { name: "Figma", icon: "🎨", color: "from-pink-400 to-purple-400" },
      { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-400" },
      { name: "Java", icon: "☕", color: "from-orange-400 to-red-400" },
      { name: "PHP", icon: "🐘", color: "from-purple-400 to-indigo-400" },
    ],
    o = [
      { skill: "Leadership", icon: "👑" },
      { skill: "Teamwork", icon: "🤝" },
      { skill: "Problem Solving", icon: "🧩" },
      { skill: "Communication", icon: "💬" },
      { skill: "Creativity", icon: "🎨" },
    ];
  return jsxRuntimeExports.jsxs("section", {
    id: "skills",
    className: "py-16 magical-bg relative section-blend",
    children: [
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute top-20 right-20 w-12 h-12 bg-blue-400/20 rounded-full animate-floating",
      }),
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute bottom-20 left-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bubble",
      }),
      jsxRuntimeExports.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          jsxRuntimeExports.jsx("h2", {
            className: "section-title",
            children: "🛠️ Tech Stack 🛠️",
          }),
          jsxRuntimeExports.jsx("div", {
            className:
              "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12",
            children: e.map((a, c) =>
              jsxRuntimeExports.jsxs(
                "div",
                {
                  className:
                    "card text-center group hover:scale-110 transition-all duration-300",
                  style: { animationDelay: `${c * 0.1}s` },
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className: `w-16 h-16 bg-gradient-to-br ${a.color} rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300`,
                      children: a.icon,
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-white font-medium text-sm",
                      children: a.name,
                    }),
                  ],
                },
                a.name,
              ),
            ),
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "card text-center",
            children: [
              jsxRuntimeExports.jsx("h3", {
                className: "text-2xl font-bold text-white mb-6",
                children: "💪 Soft Skills",
              }),
              jsxRuntimeExports.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                children: o.map((a) =>
                  jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className:
                        "bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className: "text-3xl mb-2",
                          children: a.icon,
                        }),
                        jsxRuntimeExports.jsx("p", {
                          className: "text-white/90 text-sm font-medium",
                          children: a.skill,
                        }),
                      ],
                    },
                    a.skill,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Projects() {
  const e = [
    {
      title: "NhamEii",
      description:
        "Interactive food recommendation app with Flutter & Firebase",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      tech: ["Flutter", "Firebase", "Dart"],
      colors: ["blue-500/20", "orange-500/20", "green-500/20"],
      github: "https://github.com/yungNita/NhamEii-App.git",
      type: "📱 Mobile App",
      emoji: "🍽️",
    },
    {
      title: "AhaGo",
      description: "Full-stack food delivery platform with multi-panel system",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Laravel", "MySQL"],
      colors: ["green-500/20", "red-500/20", "blue-500/20"],
      github: "https://github.com/Caffeine26/AhaGo.git",
      type: "🌐 Web App",
      emoji: "🚚",
    },
    {
      title: "Web Textboard",
      description:
        "Interactive text styling with visual effects and animations",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      colors: ["orange-500/20", "blue-500/20", "yellow-500/20"],
      github: "https://github.com/darororo/web-textboard.git",
      type: "✨ Frontend",
      emoji: "📝",
    },
    {
      title: "Dinosauraw",
      description: "Java-based mini-game with OOP and immersive audio",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tech: ["Java", "OOP", "Figma"],
      colors: ["orange-500/20", "purple-500/20", "pink-500/20"],
      github: "#",
      type: "🎮 Game",
      emoji: "🦕",
    },
  ];
  return jsxRuntimeExports.jsxs("section", {
    id: "projects",
    className: "py-16 magical-bg-variant relative section-blend",
    children: [
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-bubble",
      }),
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute bottom-10 right-10 w-14 h-14 bg-yellow-400/20 rounded-full animate-floating",
      }),
      jsxRuntimeExports.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          jsxRuntimeExports.jsx("h2", {
            className: "section-title",
            children: "🚀 Featured Projects 🚀",
          }),
          jsxRuntimeExports.jsx("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: e.map((o, a) =>
              jsxRuntimeExports.jsxs(
                "div",
                {
                  className:
                    "card group hover:scale-105 transition-all duration-500",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "relative overflow-hidden rounded-2xl mb-6",
                      children: [
                        jsxRuntimeExports.jsx("img", {
                          src: o.image,
                          alt: o.title,
                          className:
                            "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500",
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent",
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className: "absolute bottom-4 left-4",
                          children: jsxRuntimeExports.jsx("span", {
                            className:
                              "px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full",
                            children: o.type,
                          }),
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("h3", {
                      className: "text-2xl font-bold text-white mb-3",
                      children: [o.emoji, " ", o.title],
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-white/80 text-sm mb-4",
                      children: o.description,
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "flex flex-wrap gap-2 mb-4",
                      children: o.tech.map((c, d) =>
                        jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `px-3 py-1 bg-${o.colors[d]} text-${c === "Flutter" ? "blue" : c === "Firebase" ? "orange" : c === "Vue.js" ? "green" : c === "Laravel" ? "red" : c === "HTML" ? "orange" : c === "CSS" ? "blue" : c === "JavaScript" ? "yellow" : c === "Java" ? "orange" : c === "OOP" ? "purple" : c === "Figma" ? "pink" : "blue"}-200 text-xs rounded-full`,
                            children: c,
                          },
                          c,
                        ),
                      ),
                    }),
                    o.github !== "#"
                      ? jsxRuntimeExports.jsxs("a", {
                          href: o.github,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center text-purple-300 hover:text-white transition-colors",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: "icon-github text-lg mr-2",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className: "text-sm",
                              children: "View Code",
                            }),
                          ],
                        })
                      : jsxRuntimeExports.jsx("div", {
                          className: "text-green-300 text-sm",
                          children: "🔒 Private Repository",
                        }),
                  ],
                },
                a,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Experience() {
  const e = [
    {
      project: "NhamEii Mobile Application",
      period: "June 2025",
      role: "Mobile Developer & Firebase Integration Specialist",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "Dart"],
      emoji: "📱",
    },
    {
      project: "AhaGo Website",
      period: "June 2025",
      role: "Full-Stack Developer",
      technologies: ["Vue.js", "Laravel", "Google Maps API", "Laravel Sanctum"],
      emoji: "🌐",
    },
    {
      project: "Web Textboard",
      period: "May 2024",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      emoji: "✨",
    },
    {
      project: "Dinosauraw",
      period: "January 2024",
      role: "UI Designer & Game Developer",
      technologies: ["Java", "Figma", "OOP", "Game Development"],
      emoji: "🎮",
    },
  ];
  return jsxRuntimeExports.jsxs("section", {
    id: "experience",
    className: "py-16 magical-bg relative section-blend",
    children: [
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute top-16 right-16 w-10 h-10 bg-purple-400/20 rounded-full animate-floating",
      }),
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute bottom-16 left-16 w-18 h-18 bg-cyan-400/20 rounded-full animate-bubble",
      }),
      jsxRuntimeExports.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          jsxRuntimeExports.jsx("h2", {
            className: "section-title",
            children: "💼 Experience Timeline 💼",
          }),
          jsxRuntimeExports.jsx("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: e.map((o, a) =>
              jsxRuntimeExports.jsxs(
                "div",
                {
                  className:
                    "card group hover:scale-105 transition-all duration-300",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-4 mb-4",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl",
                          children: o.emoji,
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          children: [
                            jsxRuntimeExports.jsx("h3", {
                              className: "text-lg font-bold text-white",
                              children: o.project,
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className: "text-white/70 text-sm",
                              children: o.period,
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className: "text-purple-300 font-medium mb-3 text-sm",
                      children: o.role,
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: o.technologies
                        .slice(0, 4)
                        .map((c) =>
                          jsxRuntimeExports.jsx(
                            "span",
                            {
                              className:
                                "px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full backdrop-blur-sm",
                              children: c,
                            },
                            c,
                          ),
                        ),
                    }),
                  ],
                },
                a,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Contact() {
  return jsxRuntimeExports.jsxs("section", {
    id: "contact",
    className: "py-16 magical-bg-alt relative section-blend",
    children: [
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute top-20 left-20 w-16 h-16 bg-purple-400/20 rounded-full animate-floating",
      }),
      jsxRuntimeExports.jsx("div", {
        className:
          "absolute bottom-20 right-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bubble",
      }),
      jsxRuntimeExports.jsxs("div", {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          jsxRuntimeExports.jsx("h2", {
            className: "section-title",
            children: "✨ Get In Touch ✨",
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12",
            children: [
              jsxRuntimeExports.jsxs("div", {
                children: [
                  jsxRuntimeExports.jsx("h3", {
                    className: "text-2xl font-bold text-white mb-6",
                    children: "🌟 Let's Connect",
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-4xl mb-3",
                            children: "💼",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm font-medium",
                            children: "Full-time",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-4xl mb-3",
                            children: "🚀",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm font-medium",
                            children: "Freelance",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-4xl mb-3",
                            children: "🤝",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm font-medium",
                            children: "Collaboration",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4",
                            children: jsxRuntimeExports.jsx("div", {
                              className: "icon-mail text-white text-xl",
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsx("h4", {
                                className: "font-medium text-white",
                                children: "✉️ Email",
                              }),
                              jsxRuntimeExports.jsx("a", {
                                href: "mailto:yon.samphorslita@gmail.com",
                                className:
                                  "text-purple-300 hover:text-white text-sm",
                                children: "yon.samphorslita@gmail.com",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-4",
                            children: jsxRuntimeExports.jsx("div", {
                              className: "icon-phone text-white text-xl",
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsx("h4", {
                                className: "font-medium text-white",
                                children: "📞 Phone",
                              }),
                              jsxRuntimeExports.jsx("a", {
                                href: "tel:+85512953037",
                                className:
                                  "text-blue-300 hover:text-white text-sm",
                                children: "(+855) 12 953 037",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4",
                            children: jsxRuntimeExports.jsx("div", {
                              className: "icon-map-pin text-white text-xl",
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsx("h4", {
                                className: "font-medium text-white",
                                children: "📍 Location",
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className: "text-green-300 text-sm",
                                children: "Phnom Penh, Cambodia",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex justify-center space-x-6 mt-8",
                    children: [
                      jsxRuntimeExports.jsx("a", {
                        href: "https://linkedin.com/in/samphorslita-yon",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow",
                        children: jsxRuntimeExports.jsx("div", {
                          className: "icon-linkedin text-2xl",
                        }),
                      }),
                      jsxRuntimeExports.jsx("a", {
                        href: "https://github.com/yon-samphorslita",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow",
                        children: jsxRuntimeExports.jsx("div", {
                          className: "icon-github text-2xl",
                        }),
                      }),
                      jsxRuntimeExports.jsx("a", {
                        href: "mailto:yon.samphorslita@gmail.com",
                        className:
                          "w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 glow",
                        children: jsxRuntimeExports.jsx("div", {
                          className: "icon-mail text-2xl",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "card text-center",
                children: [
                  jsxRuntimeExports.jsx("h3", {
                    className: "text-xl font-semibold text-white mb-6",
                    children: "🎯 Ready to work on",
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-3xl mb-2",
                            children: "🌐",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm",
                            children: "Web Apps",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-3xl mb-2",
                            children: "📱",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm",
                            children: "Mobile Apps",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-3xl mb-2",
                            children: "🎨",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm",
                            children: "UI/UX Design",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "text-3xl mb-2",
                            children: "🔧",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className: "text-white/90 text-sm",
                            children: "Full Stack",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function App() {
  return jsxRuntimeExports.jsxs("div", {
    className: "min-h-screen",
    "data-name": "app",
    children: [
      jsxRuntimeExports.jsx(Header, {}),
      jsxRuntimeExports.jsx(Hero, {}),
      jsxRuntimeExports.jsx(About, {}),
      jsxRuntimeExports.jsx(Skills, {}),
      jsxRuntimeExports.jsx(Projects, {}),
      jsxRuntimeExports.jsx(Experience, {}),
      jsxRuntimeExports.jsx(Contact, {}),
    ],
  });
}
const index = "";
client
  .createRoot(document.getElementById("root"))
  .render(
    jsxRuntimeExports.jsx(React.StrictMode, {
      children: jsxRuntimeExports.jsx(App, {}),
    }),
  );
