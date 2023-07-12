function _extends() {
    return (_extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n, i = arguments[t];
            for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    }).apply(this, arguments)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        n = Object.getPrototypeOf,
        a = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        l = t.push,
        o = t.indexOf,
        i = {},
        r = i.toString,
        y = i.hasOwnProperty,
        s = y.toString,
        c = s.call(Object),
        v = {},
        w = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        T = C.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var i, o, r = (n = n || T).createElement("script");
        if (r.text = e, t)
            for (i in u)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }
    var d = "3.6.0",
        E = function(e, t) {
            return new E.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = f(e);
        return !w(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: d,
        constructor: E,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {},
            s = 1,
            a = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || w(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (E.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t], o = i && !Array.isArray(o) ? [] : i || E.isPlainObject(o) ? o : {}, i = !1, r[t] = E.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }, E.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof(e = y.call(e, "constructor") && e.constructor) || s.call(e) !== c))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (p(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                s = [];
            if (p(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return g(s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        function d(e, t) {
            return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }

        function i() {
            _()
        }
        var e, h, b, r, o, f, p, m, x, l, c, _, C, s, T, g, a, u, y, E = "sizzle" + +new Date,
            v = n.document,
            S = 0,
            w = 0,
            A = le(),
            k = le(),
            I = le(),
            $ = le(),
            j = function(e, t) {
                return e === t && (c = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            P = t.pop,
            L = t.push,
            O = t.push,
            N = t.slice,
            M = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            q = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            B = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            V = new RegExp("^" + H + "*," + H + "*"),
            Q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            U = new RegExp(H + "|>"),
            Y = new RegExp(W),
            X = new RegExp("^" + R + "$"),
            G = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
            oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = ve(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = N.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    L.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, i) {
            var o, r, s, a, l, c, u, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && (_(t), t = t || C, T)) {
                if (11 !== p && (l = te.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (d && (s = d.getElementById(o)) && y(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(o)), n
                    } if (h.qsa && !$[e + " "] && (!g || !g.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e, d = t, 1 === p && (U.test(e) || Q.test(e))) {
                        for ((d = ne.test(e) && me(t.parentNode) || t) === t && h.scope || ((a = t.getAttribute("id")) ? a = a.replace(oe, re) : t.setAttribute("id", a = E)), r = (c = f(e)).length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + ye(c[r]);
                        u = c.join(",")
                    }
                    try {
                        return O.apply(n, d.querySelectorAll(u)), n
                    } catch (t) {
                        $(e, !0)
                    } finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(F, "$1"), t, n, i)
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ce(e) {
            return e[E] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function pe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function fe(s) {
            return ce(function(r) {
                return r = +r, ce(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ae.support = {}, o = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                return !Z.test(t || e && e.nodeName || "HTML")
            }, _ = ae.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : v;
                return e != C && 9 === e.nodeType && e.documentElement && (s = (C = e).documentElement, T = !o(C), v != C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), h.scope = ue(function(e) {
                    return s.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), h.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = ue(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = ee.test(C.getElementsByClassName), h.getById = ue(function(e) {
                    return s.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), h.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(ie, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var t = e.replace(ie, d);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
                }, a = [], g = [], (h.qsa = ee.test(C.querySelectorAll)) && (ue(function(e) {
                    var t;
                    s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (h.matchesSelector = ee.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function(e) {
                    h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", W)
                }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = ee.test(s.compareDocumentPosition), y = t || ee.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == v && y(v, e) ? -1 : t == C || t.ownerDocument == v && y(v, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e == C ? -1 : t == C ? 1 : o ? -1 : r ? 1 : l ? M(l, e) - M(l, t) : 0;
                    if (o === r) return pe(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? pe(s[i], a[i]) : s[i] == v ? -1 : a[i] == v ? 1 : 0
                }), C
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (_(e), h.matchesSelector && T && !$[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
                    var n = u.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    $(t, !0)
                }
                return 0 < ae(t, C, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != C && _(e), y(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != C && _(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== n ? n : h.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(oe, re)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(j), c) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, r = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (b = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ie, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ie, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = A[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && A(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(e) {
                            e = ae.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, g) {
                        var y = "nth" !== f.slice(0, 3),
                            v = "last" !== f.slice(-4),
                            w = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, l, c = y != v ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = w && e.nodeName.toLowerCase(),
                                p = !n && !w,
                                h = !1;
                            if (u) {
                                if (y) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (w ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? u.firstChild : u.lastChild], v && p) {
                                    for (h = (a = (i = (o = (r = (s = u)[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === S && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (h = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) {
                                            o[f] = [S, a, h];
                                            break
                                        }
                                } else if (p && (h = a = (i = (o = (r = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === S && i[1]), !1 === h)
                                    for (;
                                        (s = ++a && s && s[c] || (h = a = 0) || l.pop()) && ((w ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++h || (p && ((o = (r = s[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] = [S, h]), s !== e)););
                                return (h -= g) === m || h % m == 0 && 0 <= h / m
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[E] ? s(r) : 1 < s.length ? (t = [e, e, "", r], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = M(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var i = [],
                            o = [],
                            a = p(e.replace(F, "$1"));
                        return a[E] ? ce(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: ce(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: ce(function(t) {
                        return t = t.replace(ie, d),
                            function(e) {
                                return -1 < (e.textContent || r(e)).indexOf(t)
                            }
                    }),
                    lang: ce(function(n) {
                        return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function ge() {}

        function ye(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ve(s, e, t) {
            var a = e.dir,
                l = e.next,
                c = l || a,
                u = t && "parentNode" === c,
                d = w++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || u) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, o, r = [S, d];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || u)
                            if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
                            else {
                                if ((o = i[c]) && o[0] === S && o[1] === d) return r[2] = o[2];
                                if ((i[c] = r)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function be(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function xe(e) {
            for (var i, t, n, o = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = ve(function(e) {
                    return e === i
                }, s, !0), c = ve(function(e) {
                    return -1 < M(i, e)
                }, s, !0), u = [function(e, t, n) {
                    n = !r && (n || t !== x) || ((i = t).nodeType ? l : c)(e, t, n);
                    return i = null, n
                }]; a < o; a++)
                if (t = b.relative[e[a].type]) u = [ve(we(u), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (n = ++a; n < o && !b.relative[e[n].type]; n++);
                        return function e(h, f, m, g, y, t) {
                            return g && !g[E] && (g = e(g)), y && !y[E] && (y = e(y, t)), ce(function(e, t, n, i) {
                                var o, r, s, a = [],
                                    l = [],
                                    c = t.length,
                                    u = e || function(e, t, n) {
                                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                        return n
                                    }(f || "*", n.nodeType ? [n] : n, []),
                                    d = !h || !e && f ? u : be(u, a, h, n, i),
                                    p = m ? y || (e ? h : c || g) ? [] : t : d;
                                if (m && m(d, p, n, i), g)
                                    for (o = be(p, l), g(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                                if (e) {
                                    if (y || h) {
                                        if (y) {
                                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(d[r] = s);
                                            y(null, p = [], o, i)
                                        }
                                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = y ? M(e, s) : a[r]) && (e[o] = !(t[o] = s))
                                    }
                                } else p = be(p === t ? p.splice(c, p.length) : p), y ? y(null, t, p, i) : O.apply(t, p)
                            })
                        }(1 < a && we(u), 1 < a && ye(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, a < n && xe(e.slice(a, n)), n < o && xe(e = e.slice(n)), n < o && ye(e))
                    }
                    u.push(t)
                } return we(u)
        }
        return ge.prototype = b.filters = b.pseudos, b.setFilters = new ge, f = ae.tokenize = function(e, t) {
            var n, i, o, r, s, a, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = b.preFilter; s;) {
                for (r in n && !(i = V.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = Q.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(F, " ")
                    }), s = s.slice(n.length)), b.filter) !(i = G[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : k(e, a).slice(0)
        }, p = ae.compile = function(e, t) {
            var n, g, y, v, w, i, o = [],
                r = [],
                s = I[e + " "];
            if (!s) {
                for (n = (t = t || f(e)).length; n--;)((s = xe(t[n]))[E] ? o : r).push(s);
                (s = I(e, (g = r, v = 0 < (y = o).length, w = 0 < g.length, i = function(e, t, n, i, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        p = x,
                        h = e || w && b.find.TAG("*", o),
                        f = S += null == p ? 1 : Math.random() || .1,
                        m = h.length;
                    for (o && (x = t == C || t || o); c !== m && null != (r = h[c]); c++) {
                        if (w && r) {
                            for (s = 0, t || r.ownerDocument == C || (_(r), n = !T); a = g[s++];)
                                if (a(r, t || C, n)) {
                                    i.push(r);
                                    break
                                } o && (S = f)
                        }
                        v && ((r = !a && r) && l--, e && u.push(r))
                    }
                    if (l += c, v && c !== l) {
                        for (s = 0; a = y[s++];) a(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = P.call(i));
                            d = be(d)
                        }
                        O.apply(i, d), o && !e && 0 < d.length && 1 < l + y.length && ae.uniqueSort(i)
                    }
                    return o && (S = f, x = p), u
                }, v ? ce(i) : i))).selector = e
            }
            return s
        }, m = ae.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                u = !i && f(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && T && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ie, d), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(ie, d), ne.test(r[0].type) && me(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && ye(r))) return O.apply(n, i), n;
                        break
                    }
            }
            return (c || p(e, u))(i, t, !T, n, !t || ne.test(e) && me(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(j).join("") === E, h.detectDuplicates = !!c, _(), h.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(z, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), ae
    }(C);
    E.find = h, E.expr = h.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = h.uniqueSort, E.text = h.getText, E.isXMLDoc = h.isXML, E.contains = h.contains, E.escapeSelector = h.escape;

    function x(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && E(e).is(n)) break;
                i.push(e)
            } return i
    }

    function _(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var S = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, n, i) {
        return w(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : E.filter(n, e, i)
    }
    E.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (E.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
            return 1 < i ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && S.test(e) ? E(e) : e || [], !1).length
        }
    });
    var $, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || $, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : w(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), k.test(i[1]) && E.isPlainObject(t))
                for (var i in t) w(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = T.getElementById(i[2])) && (this[0] = e, this.length = 1), this
    }).prototype = E.fn, $ = E(T);
    var D = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && E(e);
            if (!S.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? E.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(E(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(i, o) {
        E.fn[i] = function(e, t) {
            var n = E.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (P[i] || E.uniqueSort(n), D.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function z(e, t, n, i) {
        var o;
        try {
            e && w(o = e.promise) ? o.call(e).done(t).fail(n) : e && w(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(i) {
        var n;
        i = "string" == typeof i ? (n = {}, E.each(i.match(O) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, i);

        function o() {
            for (s = s || i.once, t = r = !0; l.length; c = -1)
                for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && i.stopOnFalse && (c = a.length, e = !1);
            i.memory || (e = !1), r = !1, s && (a = e ? [] : "")
        }
        var r, e, t, s, a = [],
            l = [],
            c = -1,
            u = {
                add: function() {
                    return a && (e && !r && (c = a.length - 1, l.push(e)), function n(e) {
                        E.each(e, function(e, t) {
                            w(t) ? i.unique && u.has(t) || a.push(t) : t && t.length && "string" !== f(t) && n(t)
                        })
                    }(arguments), e && !r && o()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a = a && [], this
                },
                disable: function() {
                    return s = l = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], e || r || (a = e = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || o()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, E.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return E.Deferred(function(i) {
                            E.each(r, function(e, t) {
                                var n = w(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && w(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(o, r, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, w(t) ? a ? t.call(e, c(l, r, N, a), c(l, r, M, a)) : (l++, t.call(e, c(l, r, N, a), c(l, r, M, a), c(l, r, N, r.notifyWith))) : (s !== N && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== M && (n = void 0, i = [e]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return E.Deferred(function(e) {
                            r[0][3].add(c(0, e, w(i) ? i : N, e.notifyWith)), r[1][3].add(c(0, e, w(t) ? t : N)), r[2][3].add(c(0, e, w(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, s) : s
                    }
                },
                a = {};
            return E.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = a.call(arguments),
                s = E.Deferred();
            if (n <= 1 && (z(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || w(r[i] && r[i].then))) return s.then();
            for (; i--;) z(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && H.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var R = E.Deferred();

    function q() {
        T.removeEventListener("DOMContentLoaded", q), C.removeEventListener("load", q), E.ready()
    }
    E.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || R.resolveWith(T, [E])
        }
    }), E.ready.then = R.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(E.ready) : (T.addEventListener("DOMContentLoaded", q), C.addEventListener("load", q));
    var W = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === f(n))
                for (a in o = !0, n) W(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, w(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                    return c.call(E(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        B = /^-ms-/,
        F = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function Q(e) {
        return e.replace(B, "ms-").replace(F, V)
    }

    function U(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
        this.expando = E.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[Q(t)] = n;
            else
                for (i in t) o[Q(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(O) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var X = new Y,
        G = new Y,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function J(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : W(this, function(e) {
                var t;
                return r && void 0 === e ? void 0 !== (t = G.get(r, n)) || void 0 !== (t = J(r, n)) ? t : void 0 : void this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = G.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Q(i.slice(5)), J(r, i, o[i]));
                X.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, E.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = E._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                E.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1,
                r = E.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = X.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = T.documentElement,
        oe = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });

    function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display")
    }

    function ae(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return E.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && te.exec(E.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) E.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, E.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var le = {};

    function ce(e, t) {
        for (var n, i, o, r, s, a, l = [], c = 0, u = e.length; c < u; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (l[c] = X.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && se(i) && (l[c] = (a = r = o = void 0, r = i.ownerDocument, s = i.nodeName, (a = le[s]) || (o = r.body.appendChild(r.createElement(s)), a = E.css(o, "display"), o.parentNode.removeChild(o), "none" === a && (a = "block"), le[s] = a)))) : "none" !== n && (l[c] = "none", X.set(i, "display", n)));
        for (c = 0; c < u; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        d = T.createDocumentFragment().appendChild(T.createElement("div"));
    (h = T.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), d.appendChild(h), v.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, d.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue, d.innerHTML = "<option></option>", v.option = !!d.lastChild;
    var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function fe(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }

    function me(e, t) {
        for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, v.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;

    function ye(e, t, n, i, o) {
        for (var r, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === f(r)) E.merge(d, r.nodeType ? [r] : r);
                else if (ge.test(r)) {
            for (s = s || u.appendChild(t.createElement("div")), a = (de.exec(r) || ["", ""])[1].toLowerCase(), a = he[a] || he._default, s.innerHTML = a[1] + E.htmlPrefilter(r) + a[2], c = a[0]; c--;) s = s.lastChild;
            E.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
        } else d.push(t.createTextNode(r));
        for (u.textContent = "", p = 0; r = d[p++];)
            if (i && -1 < E.inArray(r, i)) o && o.push(r);
            else if (l = oe(r), s = fe(u.appendChild(r), "script"), l && me(s), n)
            for (c = 0; r = s[c++];) pe.test(r.type || "") && n.push(r);
        return u
    }
    var ve = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function be() {
        return !1
    }

    function xe(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function _e(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) _e(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = be;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return E().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, o, i, n)
        })
    }

    function Ce(e, o, r) {
        r ? (X.set(e, o, !1), E.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = X.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (i.length)(E.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments), X.set(this, o, i), t = r(this, o), this[o](), i !== (n = X.get(this, o)) || t ? X.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else i.length && (X.set(this, o, {
                    value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, o) && E.event.add(e, o, we)
    }
    E.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, p, h, f = X.get(t);
            if (U(t))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && E.find.matchesSelector(ie, o), n.guid || (n.guid = E.guid++), (a = f.events) || (a = f.events = Object.create(null)), (s = f.handle) || (s = f.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(O) || [""]).length; l--;) d = h = (c = ve.exec(e[l]) || [])[1], p = (c[2] || "").split(".").sort(), d && (u = E.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && E.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = a[d]) || ((h = a[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), E.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, h, f, m, g = X.hasData(e) && X.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--;)
                    if (h = m = (a = ve.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = E.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || E.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) E.event.remove(e, h + t[c], n, i, !0);
                E.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s = new Array(arguments.length),
                a = E.event.fix(e),
                l = (X.get(this, "events") || Object.create(null))[a.type] || [],
                e = E.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (r = E.event.handlers.call(this, a, l), t = 0;
                    (i = r[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < E(o, this).index(c) : E.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: w(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return ue.test(e.type) && e.click && A(e, "input") && Ce(e, "click", we), !1
                },
                trigger: function(e) {
                    e = this || e;
                    return ue.test(e.type) && e.click && A(e, "input") && Ce(e, "click"), !0
                },
                _default: function(e) {
                    e = e.target;
                    return ue.test(e.type) && e.click && A(e, "input") && X.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Ce(this, e, xe), !1
            },
            trigger: function() {
                return Ce(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        E.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, i) {
            return _e(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function() {
                E.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Te = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function ke(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function $e(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (r = X.get(e).events))
                for (o in X.remove(t, "handle events"), r)
                    for (n = 0, i = r[o].length; n < i; n++) E.event.add(t, o, r[o][n]);
            G.hasData(e) && (e = G.access(e), e = E.extend({}, e), G.set(t, e))
        }
    }

    function je(n, i, o, r) {
        i = g(i);
        var e, t, s, a, l, c, u = 0,
            d = n.length,
            p = d - 1,
            h = i[0],
            f = w(h);
        if (f || 1 < d && "string" == typeof h && !v.checkClone && Ee.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = h.call(this, e, t.html())), je(t, i, o, r)
        });
        if (d && (t = (e = ye(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = E.map(fe(e, "script"), ke)).length; u < d; u++) l = e, u !== p && (l = E.clone(l, !0, !0), a && E.merge(s, fe(l, "script"))), o.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, E.map(s, Ie), u = 0; u < a; u++) l = s[u], pe.test(l.type || "") && !X.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : b(l.textContent.replace(Se, ""), l, c))
        }
        return n
    }

    function De(e, t, n) {
        for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || E.cleanData(fe(i)), i.parentNode && (n && oe(i) && me(fe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                d = oe(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = fe(u), i = 0, o = (r = fe(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && ue.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || fe(e), s = s || fe(u), i = 0, o = r.length; i < o; i++) $e(r[i], s[i]);
                else $e(e, u);
            return 0 < (s = fe(u, "script")).length && me(s, !d && fe(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (U(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return je(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ae(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return je(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(fe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        E.fn[e] = function(e) {
            for (var t, n = [], i = E(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), E(i[r])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });

    function Pe(e, t, n) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in n = n.call(e), t) e.style[i] = o[i];
        return n
    }
    var Le, Oe, Ne, Me, ze, He, Re, qe, We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Be = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Ve(e, t, n) {
        var i, o, r = e.style;
        return (n = n || Be(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = E.style(e, t)), !v.pixelBoxStyles() && We.test(o) && Fe.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
    }

    function Qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Ue() {
        var e;
        qe && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", qe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Re).appendChild(qe), e = C.getComputedStyle(qe), Le = "1%" !== e.top, He = 12 === Ye(e.marginLeft), qe.style.right = "60%", Me = 36 === Ye(e.right), Oe = 36 === Ye(e.width), qe.style.position = "absolute", Ne = 12 === Ye(qe.offsetWidth / 3), ie.removeChild(Re), qe = null)
    }

    function Ye(e) {
        return Math.round(parseFloat(e))
    }
    Re = T.createElement("div"), (qe = T.createElement("div")).style && (qe.style.backgroundClip = "content-box", qe.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === qe.style.backgroundClip, E.extend(v, {
        boxSizingReliable: function() {
            return Ue(), Oe
        },
        pixelBoxStyles: function() {
            return Ue(), Me
        },
        pixelPosition: function() {
            return Ue(), Le
        },
        reliableMarginLeft: function() {
            return Ue(), He
        },
        scrollboxSize: function() {
            return Ue(), Ne
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == ze && (e = T.createElement("table"), t = T.createElement("tr"), n = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ie.appendChild(e).appendChild(t).appendChild(n), n = C.getComputedStyle(t), ze = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ie.removeChild(e)), ze
        }
    }));
    var Xe = ["Webkit", "Moz", "ms"],
        Ge = T.createElement("div").style,
        Ze = {};

    function Ke(e) {
        return E.cssProps[e] || Ze[e] || (e in Ge ? e : Ze[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ge) return e
        }(e) || e)
    }
    var Je = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function it(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ot(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= E.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= E.css(e, "border" + ne[s] + "Width", !0, o))) : (l += E.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += E.css(e, "border" + ne[s] + "Width", !0, o) : a += E.css(e, "border" + ne[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function rt(e, t, n) {
        var i = Be(e),
            o = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            r = o,
            s = Ve(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ot(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function st(e, t, n, i, o) {
        return new st.prototype.init(e, t, n, i, o)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ve(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = Q(t),
                    l = et.test(t),
                    c = e.style;
                if (l || (t = Ke(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = Q(t);
            return et.test(t) || (t = Ke(r)), (r = E.cssHooks[t] || E.cssHooks[r]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = Ve(e, t, i)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }), E.each(["height", "width"], function(e, a) {
        E.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !Je.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, a, n) : Pe(e, tt, function() {
                    return rt(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, o = Be(e),
                    r = !v.scrollboxSize() && "absolute" === o.position,
                    s = (r || n) && "border-box" === E.css(e, "boxSizing", !1, o),
                    n = n ? ot(e, a, n, s, o) : 0;
                return s && r && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - ot(e, a, "border", !1, o) - .5)), n && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = E.css(e, a)), it(0, t, n)
            }
        }
    }), E.cssHooks.marginLeft = Qe(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Pe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        E.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== o && (E.cssHooks[o + r].set = it)
    }), E.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Be(e), o = t.length; s < o; s++) r[t[s]] = E.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return (e && e.get ? e : st.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : st.propHooks._default).set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = st.prototype.init, E.fx.step = {};
    var at, lt, ct = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function dt() {
        lt && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(dt) : C.setTimeout(dt, E.fx.interval), E.fx.tick())
    }

    function pt() {
        return C.setTimeout(function() {
            at = void 0
        }), at = Date.now()
    }

    function ht(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ft(e, t, n) {
        for (var i, o = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function mt(o, e, t) {
        var n, r, i = 0,
            s = mt.prefilters.length,
            a = E.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = at || pt(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
                return a.notifyWith(o, [c, t, e]), t < 1 && i ? e : (i || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: at || pt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = E.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = Q(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = E.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); i < s; i++)
            if (n = mt.prefilters[i].call(c, o, u, c.opts)) return w(n.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(u, ft, c), w(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    E.Animation = E.extend(mt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = w(e) ? (t = e, ["*"]) : e.match(O)).length; i < o; i++) n = e[i], mt.tweeners[n] = mt.tweeners[n] || [], mt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, u = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                f = e.nodeType && se(e),
                m = X.get(e, "fxshow");
            for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[i], ct.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    p[i] = m && m[i] || E.style(e, i)
                } if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = X.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = E.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done(function() {
                        h.display = c
                    }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, p) l || (m ? "hidden" in m && (f = m.hidden) : m = X.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !f), f && ce([e], !0), d.done(function() {
                    for (i in f || ce([e]), X.remove(e, "fxshow"), p) E.style(e, i, p[i])
                })), l = ft(f ? m[i] : 0, i, d), i in m || (m[i] = l.start, f && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || w(e) && e,
            duration: e,
            easing: n && t || t && !w(t) && t
        };
        return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            w(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
        }, i
    }, E.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = E.isEmptyObject(t),
                r = E.speed(e, n, i),
                i = function() {
                    var e = mt(this, E.extend({}, t), r);
                    (o || X.get(this, "finish")) && e.stop(!0)
                };
            return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = E.timers,
                    i = X.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && ut.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || E.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = E.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, i) {
        var o = E.fn[i];
        E.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ht(i, !0), e, t, n)
        }
    }), E.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        E.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0,
            n = E.timers;
        for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), at = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function() {
        lt || (lt = !0, dt())
    }, E.fx.stop = function() {
        lt = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(i, e) {
        return i = E.fx && E.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, d = T.createElement("input"), ee = T.createElement("select").appendChild(T.createElement("option")), d.type = "checkbox", v.checkOn = "" !== d.value, v.optSelected = ee.selected, (d = T.createElement("input")).value = "t", d.type = "radio", v.radioValue = "t" === d.value;
    var gt, yt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return W(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = E.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(O);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), gt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = yt[t] || E.find.attr;
        yt[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = yt[r], yt[r] = i, i = null != s(e, t, n) ? r : null, yt[r] = o), i
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function bt(e) {
        return (e.match(O) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function _t(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return W(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t, o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (w(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = _t(t)).length)
                for (; n = this[a++];)
                    if (s = xt(n), i = 1 === n.nodeType && " " + bt(s) + " ") {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (s = bt(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (w(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = _t(t)).length)
                for (; n = this[a++];)
                    if (s = xt(n), i = 1 === n.nodeType && " " + bt(s) + " ") {
                        for (r = 0; o = e[r++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s !== (s = bt(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                s = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : w(o) ? this.each(function(e) {
                E(this).toggleClass(o.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = E(this), i = _t(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != r || ((e = xt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + bt(xt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    E.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = w(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : bt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                            if (t = E(t).val(), o) return t;
                            r.push(t)
                        } return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = E.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < E.inArray(E.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;

    function Tt(e) {
        e.stopPropagation()
    }
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, c, u, d = [n || T],
                p = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [],
                f = u = r = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Et.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !m(n)) {
                    for (s = c.delegateType || p, Et.test(s + p) || (f = f.parentNode); f; f = f.parentNode) d.push(f), r = f;
                    r === (n.ownerDocument || T) && d.push(r.defaultView || r.parentWindow || C)
                }
                for (o = 0;
                    (f = d[o++]) && !e.isPropagationStopped();) u = f, e.type = 1 < o ? s : c.bindType || p, (l = (X.get(f, "events") || Object.create(null))[e.type] && X.get(f, "handle")) && l.apply(f, t), (l = a && f[a]) && l.apply && U(f) && (e.result = l.apply(f, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !U(n) || a && w(n[p]) && !m(n) && ((r = n[a]) && (n[a] = null), E.event.triggered = p, e.isPropagationStopped() && u.addEventListener(p, Tt), n[p](), e.isPropagationStopped() && u.removeEventListener(p, Tt), E.event.triggered = void 0, r && (n[a] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(e, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            E.event.simulate(i, e.target, E.event.fix(e))
        }
        E.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = X.access(e, i);
                t || e.addEventListener(n, o, !0), X.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = X.access(e, i) - 1;
                t ? X.access(e, i, t) : (e.removeEventListener(n, o, !0), X.remove(e, i))
            }
        }
    });
    var St = C.location,
        At = {
            guid: Date.now()
        },
        kt = /\?/;
    E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var It = /\[\]$/,
        $t = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            t = w(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, o = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) ! function n(i, e, o, r) {
                if (Array.isArray(e)) E.each(e, function(e, t) {
                    o || It.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
                });
                else if (o || "object" !== f(e)) r(i, e);
                else
                    for (var t in e) n(i + "[" + t + "]", e[t], o, r)
            }(i, e[i], t, n);
        return o.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !jt.test(e) && (this.checked || !ue.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace($t, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        Lt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Ht = {},
        Rt = {},
        qt = "*/".concat("*"),
        Wt = T.createElement("a");

    function Bt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(O) || [];
            if (w(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function Ft(t, i, o, r) {
        var s = {},
            a = t === Rt;

        function l(e) {
            var n;
            return s[e] = !0, E.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
            }), n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Vt(e, t) {
        var n, i, o = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && E.extend(!0, e, i), e
    }
    Wt.href = St.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Ht),
        ajaxTransport: Bt(Rt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var l, c, u, n, d, i, p, h, o, r, f = E.ajaxSetup({}, t),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                y = E.Deferred(),
                v = E.Callbacks("once memory"),
                w = f.statusCode || {},
                s = {},
                a = {},
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Nt.exec(u);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p) x.always(e[x.status]);
                            else
                                for (var t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || b;
                        return l && l.abort(e), _(0, e), this
                    }
                };
            if (y.promise(x), f.url = ((e || f.url || St.href) + "").replace(zt, St.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""], null == f.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = f.url, i.href = i.href, f.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Ft(Ht, f, t, x), p) return x;
            for (o in (h = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), c = f.url.replace(Lt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pt, "+")) : (r = f.url.slice(c.length), f.data && (f.processData || "string" == typeof f.data) && (c += (kt.test(c) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (c = c.replace(Ot, "$1"), r = (kt.test(c) ? "&" : "?") + "_=" + At.guid++ + r), f.url = c + r), f.ifModified && (E.lastModified[c] && x.setRequestHeader("If-Modified-Since", E.lastModified[c]), E.etag[c] && x.setRequestHeader("If-None-Match", E.etag[c])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]), f.headers) x.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, x, f) || p)) return x.abort();
            if (b = "abort", v.add(f.complete), x.done(f.success), x.fail(f.error), l = Ft(Rt, f, t, x)) {
                if (x.readyState = 1, h && g.trigger("ajaxSend", [x, f]), p) return x;
                f.async && 0 < f.timeout && (d = C.setTimeout(function() {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    p = !1, l.send(s, _)
                } catch (e) {
                    if (p) throw e;
                    _(-1, e)
                }
            } else _(-1, "No Transport");

            function _(e, t, n, i) {
                var o, r, s, a = t;
                p || (p = !0, d && C.clearTimeout(d), l = void 0, u = i || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(f, x, n)), !i && -1 < E.inArray("script", f.dataTypes) && E.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), s = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, s, x, i), i ? (f.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (E.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (E.etag[c] = n)), 204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", i ? y.resolveWith(m, [o, a, x]) : y.rejectWith(m, [x, a, r]), x.statusCode(w), w = void 0, h && g.trigger(i ? "ajaxSuccess" : "ajaxError", [x, f, i ? o : r]), v.fireWith(m, [x, a]), h && (g.trigger("ajaxComplete", [x, f]), --E.active || E.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, o) {
        E[o] = function(e, t, n, i) {
            return w(t) && (i = i || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E.ajaxPrefilter(function(e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }, E.fn.extend({
        wrapAll: function(e) {
            return this[0] && (w(e) && (e = e.call(this[0])), e = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return w(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = w(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Qt = {
            0: 200,
            1223: 204
        },
        Ut = E.ajaxSettings.xhr();
    v.cors = !!Ut && "withCredentials" in Ut, v.ajax = Ut = !!Ut, E.ajaxTransport(function(o) {
        var r, s;
        if (v.cors || Ut && !o.crossDomain) return {
            send: function(e, t) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                r = function(e) {
                    return function() {
                        r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Qt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    i.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (r) throw e
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Yt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || E.expando + "_" + At.guid++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = w(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || E.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = C[i], C[i] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === o ? E(C).removeProp(i) : C[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)), r && w(o) && o(r[0]), r = o = void 0
        }), "script"
    }), v.createHTMLDocument = ((d = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === d.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), i = !n && [], (n = k.exec(e)) ? [t.createElement(n[1])] : (n = ye([e], t, i), i && i.length && E(i).remove(), E.merge([], n.childNodes)));
        var i
    }, E.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = bt(e.slice(a)), e = e.slice(0, a)), w(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && E.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a = E.css(e, "position"),
                l = E(e),
                c = {};
            "static" === a && (e.style.position = "relative"), r = l.offset(), i = E.css(e, "top"), s = E.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), w(t) && (t = t.call(e, n, E.extend({}, r))), null != t.top && (c.top = t.top - r.top + o), null != t.left && (c.left = t.left - r.left + s), "using" in t ? t.using.call(e, c) : l.css(c)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), o.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - E.css(i, "marginTop", !0),
                    left: t.left - o.left - E.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        E.fn[t] = function(e) {
            return W(this, function(e, t, n) {
                var i;
                return m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Qe(v.pixelPosition, function(e, t) {
            if (t) return t = Ve(e, n), We.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        E.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            E.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t], t = e, e = i), w(e)) return n = a.call(arguments, 2), (i = function() {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = w, E.isWindow = m, E.camelCase = Q, E.type = f, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Zt = C.jQuery,
        Kt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Kt), e && C.jQuery === E && (C.jQuery = Zt), E
    }, void 0 === e && (C.jQuery = C.$ = E), E
}),
function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function() {
    "use strict";

    function o(e, t) {
        var n, i = "LazyLoad::Initialized",
            o = new e(t);
        try {
            n = new CustomEvent(i, {
                detail: {
                    instance: o
                }
            })
        } catch (e) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                instance: o
            })
        }
        window.dispatchEvent(n)
    }
    var e = "undefined" != typeof window,
        r = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        t = e && "IntersectionObserver" in window,
        s = e && "classList" in document.createElement("p"),
        n = {
            elements_selector: "img",
            container: r || e ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_reveal: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1
        };

    function a(e, t) {
        return e.getAttribute("data-" + t)
    }

    function l(e, t, n) {
        t = "data-" + t, null !== n ? e.setAttribute(t, n) : e.removeAttribute(t)
    }

    function c(e) {
        return "true" === a(e, S)
    }

    function u(e, t) {
        return l(e, A, t), 0
    }

    function d(e) {
        return a(e, A)
    }

    function p(e, t) {
        e && e(t)
    }

    function h(e, t) {
        e._loadingCount += t, 0 === e._elements.length && 0 === e._loadingCount && p(e._settings.callback_finish)
    }

    function i(e) {
        for (var t, n = [], i = 0; t = e.children[i]; i += 1) "SOURCE" === t.tagName && n.push(t);
        return n
    }

    function f(e, t, n) {
        n && e.setAttribute(t, n)
    }

    function m(e, t) {
        f(e, "sizes", a(e, t.data_sizes)), f(e, "srcset", a(e, t.data_srcset)), f(e, "src", a(e, t.data_src))
    }

    function g(e, t) {
        var n, i, o = t._settings,
            r = e.tagName;
        if (r = k[r]) return r(e, o), h(t, 1), t._elements = (i = t._elements, n = e, i.filter(function(e) {
            return e !== n
        })), 0;
        o = a(i = e, (e = o).data_src), e = a(i, e.data_bg), o && (i.style.backgroundImage = 'url("'.concat(o, '")')), e && (i.style.backgroundImage = e)
    }

    function y(e, t) {
        s ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
    }

    function v(e, t, n) {
        e.addEventListener(t, n)
    }

    function w(e, t, n) {
        e.removeEventListener(t, n)
    }

    function b(e, t, n) {
        w(e, "load", t), w(e, I, t), w(e, "error", n)
    }

    function x(e, t, n) {
        var i = n._settings,
            o = t ? i.class_loaded : i.class_error,
            r = t ? i.callback_loaded : i.callback_error,
            t = e.target;
        e = t, i = i.class_loading, s ? e.classList.remove(i) : e.className = e.className.replace(new RegExp("(^|\\s+)" + i + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""), y(t, o), p(r, t), h(n, -1)
    }

    function _(n, i) {
        function o(e) {
            x(e, !0, i), b(n, o, s)
        }
        var e, t, r, s = function e(t) {
            x(t, !1, i), b(n, o, e)
        };
        r = s, v(e = n, "load", t = o), v(e, I, t), v(e, "error", r)
    }

    function C(o) {
        return t && (o._observer = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                return (i = e).isIntersecting || 0 < i.intersectionRatio ? (t = e.target, i = (n = o)._settings, p(i.callback_enter, t), void(i.load_delay ? P : j)(t, n)) : function(e, t) {
                    t = t._settings;
                    p(t.callback_exit, e), t.load_delay && D(e)
                }(e.target, o);
                var t, n, i
            })
        }, {
            root: (e = o._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px"
        }), !0);
        var e
    }

    function T(e, t) {
        return n = e || (n = t).container.querySelectorAll(n.elements_selector), Array.prototype.slice.call(n).filter(function(e) {
            return !c(e)
        });
        var n
    }

    function E(e, t) {
        this._settings = _extends({}, n, e), this._loadingCount = 0, C(this), this.update(t)
    }
    var S = "was-processed",
        A = "ll-timeout",
        k = {
            IMG: function(e, t) {
                var n = e.parentNode;
                n && "PICTURE" === n.tagName && i(n).forEach(function(e) {
                    m(e, t)
                }), m(e, t)
            },
            IFRAME: function(e, t) {
                f(e, "src", a(e, t.data_src))
            },
            VIDEO: function(e, t) {
                i(e).forEach(function(e) {
                    f(e, "src", a(e, t.data_src))
                }), f(e, "src", a(e, t.data_src)), e.load()
            }
        },
        I = "loadeddata",
        $ = ["IMG", "IFRAME", "VIDEO"],
        j = function(e, t) {
            var n = t._observer;
            L(e, t), n && t._settings.auto_unobserve && n.unobserve(e)
        },
        D = function(e) {
            var t = d(e);
            t && (clearTimeout(t), u(e, null))
        },
        P = function(e, t) {
            var n = t._settings.load_delay,
                i = d(e);
            i || (i = setTimeout(function() {
                j(e, t), D(e)
            }, n), u(e, i))
        },
        L = function(e, t, n) {
            var i = t._settings;
            !n && c(e) || (-1 < $.indexOf(e.tagName) && (_(e, t), y(e, i.class_loading)), g(e, t), l(e, S, "true"), p(i.callback_reveal, e), p(i.callback_set, e))
        },
        O = ["IMG", "IFRAME"];
    return E.prototype = {
        update: function(e) {
            var t, n = this,
                i = this._settings;
            this._elements = T(e, i), !r && this._observer ? (i.use_native && "loading" in HTMLImageElement.prototype && ((t = this)._elements.forEach(function(e) {
                -1 !== O.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), L(e, t))
            }), this._elements = T(e, i)), this._elements.forEach(function(e) {
                n._observer.observe(e)
            })) : this.loadAll()
        },
        destroy: function() {
            var t = this;
            this._observer && (this._elements.forEach(function(e) {
                t._observer.unobserve(e)
            }), this._observer = null), this._elements = null, this._settings = null
        },
        load: function(e, t) {
            L(e, this, t)
        },
        loadAll: function() {
            var t = this;
            this._elements.forEach(function(e) {
                j(e, t)
            })
        }
    }, e && function(e, t) {
        if (t)
            if (t.length)
                for (var n, i = 0; n = t[i]; i += 1) o(e, n);
            else o(e, t)
    }(E, window.lazyLoadOptions), E
}),
function() {
    var n = {
            2: function(e, t, n) {
                n = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
                e.exports = n
            },
            1: function(e) {
                e.exports = function(e) {
                    "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                        "interactive" === document.readyState && e.call()
                    }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
                }
            },
            8: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n(1),
                    i = n.n(i),
                    f = n(2);

                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null == n) return;
                        var i, o, r = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); s = !0);
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return r
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i
                }

                function c(e) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var s, m, u = f.window.navigator,
                    d = -1 < u.userAgent.indexOf("MSIE ") || -1 < u.userAgent.indexOf("Trident/") || -1 < u.userAgent.indexOf("Edge/"),
                    a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),
                    p = function() {
                        for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1)
                            if (t && void 0 !== t.style[e[n]]) return e[n];
                        return !1
                    }();

                function h() {
                    m = a ? (!s && document.body && ((s = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(s)), (s ? s.clientHeight : 0) || f.window.innerHeight || document.documentElement.clientHeight) : f.window.innerHeight || document.documentElement.clientHeight
                }
                h(), f.window.addEventListener("resize", h), f.window.addEventListener("orientationchange", h), f.window.addEventListener("load", h), i()(function() {
                    h()
                });
                var g = [];

                function y() {
                    g.length && (g.forEach(function(e, t) {
                        var n = e.instance,
                            i = e.oldData,
                            o = n.$item.getBoundingClientRect(),
                            e = {
                                width: o.width,
                                height: o.height,
                                top: o.top,
                                bottom: o.bottom,
                                wndW: f.window.innerWidth,
                                wndH: m
                            },
                            o = !i || i.wndW !== e.wndW || i.wndH !== e.wndH || i.width !== e.width || i.height !== e.height,
                            i = o || !i || i.top !== e.top || i.bottom !== e.bottom;
                        g[t].oldData = e, o && n.onResize(), i && n.onScroll()
                    }), f.window.requestAnimationFrame(y))
                }
                var v = 0,
                    w = function() {
                        function a(e, t) {
                            ! function(e) {
                                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                            }(this);
                            var n = this;
                            n.instanceID = v, v += 1, n.$item = e, n.defaults = {
                                type: "scroll",
                                speed: .5,
                                imgSrc: null,
                                imgElement: ".jarallax-img",
                                imgSize: "cover",
                                imgPosition: "50% 50%",
                                imgRepeat: "no-repeat",
                                keepImg: !1,
                                elementInViewport: null,
                                zIndex: -100,
                                disableParallax: !1,
                                disableVideo: !1,
                                videoSrc: null,
                                videoStartTime: 0,
                                videoEndTime: 0,
                                videoVolume: 0,
                                videoLoop: !0,
                                videoPlayOnlyVisible: !0,
                                videoLazyLoading: !0,
                                onScroll: null,
                                onInit: null,
                                onDestroy: null,
                                onCoverImage: null
                            };
                            var i, o, r = n.$item.dataset || {},
                                s = {};
                            Object.keys(r).forEach(function(e) {
                                var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                                t && void 0 !== n.defaults[t] && (s[t] = r[e])
                            }), n.options = n.extend({}, n.defaults, s, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                                "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                            }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp && (i = n.options.disableParallax, n.options.disableParallax = function() {
                                return i.test(u.userAgent)
                            }), "function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                                return !1
                            }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp && (o = n.options.disableVideo, n.options.disableVideo = function() {
                                return o.test(u.userAgent)
                            }), "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                                return !1
                            });
                            t = n.options.elementInViewport;
                            t && "object" === c(t) && void 0 !== t.length && (t = l(t, 1)[0]), t instanceof Element || (t = null), n.options.elementInViewport = t, n.image = {
                                src: n.options.imgSrc || null,
                                $container: null,
                                useImgTag: !1,
                                position: "fixed"
                            }, n.initImg() && n.canInitParallax() && n.init()
                        }
                        var e, t, n;
                        return e = a, (t = [{
                            key: "css",
                            value: function(t, n) {
                                return "string" == typeof n ? f.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && p && (n[p] = n.transform), Object.keys(n).forEach(function(e) {
                                    t.style[e] = n[e]
                                }), t)
                            }
                        }, {
                            key: "extend",
                            value: function(n) {
                                for (var e = arguments.length, i = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) i[t - 1] = arguments[t];
                                return n = n || {}, Object.keys(i).forEach(function(t) {
                                    i[t] && Object.keys(i[t]).forEach(function(e) {
                                        n[e] = i[t][e]
                                    })
                                }), n
                            }
                        }, {
                            key: "getWindowData",
                            value: function() {
                                return {
                                    width: f.window.innerWidth || document.documentElement.clientWidth,
                                    height: m,
                                    y: document.documentElement.scrollTop
                                }
                            }
                        }, {
                            key: "initImg",
                            value: function() {
                                var e = this,
                                    t = e.options.imgElement;
                                return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
                            }
                        }, {
                            key: "canInitParallax",
                            value: function() {
                                return p && !this.options.disableParallax()
                            }
                        }, {
                            key: "init",
                            value: function() {
                                var e, t = this,
                                    n = {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden"
                                    },
                                    i = {
                                        pointerEvents: "none",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        willChange: "transform,opacity"
                                    };
                                t.options.keepImg || ((e = t.$item.getAttribute("style")) && t.$item.setAttribute("data-jarallax-original-styles", e), !t.image.useImgTag || (e = t.image.$item.getAttribute("style")) && t.image.$item.setAttribute("data-jarallax-original-styles", e)), "static" === t.css(t.$item, "position") && t.css(t.$item, {
                                    position: "relative"
                                }), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {
                                    zIndex: 0
                                }), t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
                                    "z-index": t.options.zIndex
                                }), d && t.css(t.image.$container, {
                                    opacity: .9999
                                }), t.image.$container.setAttribute("id", "jarallax-container-".concat(t.instanceID)), t.$item.appendChild(t.image.$container), t.image.useImgTag ? i = t.extend({
                                    "object-fit": t.options.imgSize,
                                    "object-position": t.options.imgPosition,
                                    "font-family": "object-fit: ".concat(t.options.imgSize, "; object-position: ").concat(t.options.imgPosition, ";"),
                                    "max-width": "none"
                                }, n, i) : (t.image.$item = document.createElement("div"), t.image.src && (i = t.extend({
                                    "background-position": t.options.imgPosition,
                                    "background-size": t.options.imgSize,
                                    "background-repeat": t.options.imgRepeat,
                                    "background-image": t.image.bgImage || 'url("'.concat(t.image.src, '")')
                                }, n, i))), "opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed || (t.image.position = "absolute"), "fixed" === t.image.position && (n = function(e) {
                                    for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                                    return t
                                }(t.$item).filter(function(e) {
                                    var t = f.window.getComputedStyle(e),
                                        e = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                                    return e && "none" !== e || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                                }), t.image.position = n.length ? "absolute" : "fixed"), i.position = t.image.position, t.css(t.image.$item, i), t.image.$container.appendChild(t.image.$item), t.onResize(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), "none" !== t.css(t.$item, "background-image") && t.css(t.$item, {
                                    "background-image": "none"
                                }), t.addToParallaxList()
                            }
                        }, {
                            key: "addToParallaxList",
                            value: function() {
                                g.push({
                                    instance: this
                                }), 1 === g.length && f.window.requestAnimationFrame(y)
                            }
                        }, {
                            key: "removeFromParallaxList",
                            value: function() {
                                var n = this;
                                g.forEach(function(e, t) {
                                    e.instance.instanceID === n.instanceID && g.splice(t, 1)
                                })
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                var e = this;
                                e.removeFromParallaxList();
                                var t, n = e.$item.getAttribute("data-jarallax-original-styles");
                                e.$item.removeAttribute("data-jarallax-original-styles"), n ? e.$item.setAttribute("style", n) : e.$item.removeAttribute("style"), e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"), e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", n) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                            }
                        }, {
                            key: "clipContainer",
                            value: function() {
                                var e, t, n;
                                "fixed" === this.image.position && (t = (n = (e = this).image.$container.getBoundingClientRect()).width, n = n.height, e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)), n = "#jarallax-container-".concat(e.instanceID, " {\n            clip: rect(0 ").concat(t, "px ").concat(n, "px 0);\n            clip: rect(0, ").concat(t, "px, ").concat(n, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"), e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = n : e.$clipStyles.innerHTML = n)
                            }
                        }, {
                            key: "coverImage",
                            value: function() {
                                var e = this,
                                    t = e.image.$container.getBoundingClientRect(),
                                    n = t.height,
                                    i = e.options.speed,
                                    o = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                                    r = 0,
                                    s = n,
                                    a = 0;
                                return o && (i < 0 ? (r = i * Math.max(n, m), m < n && (r -= i * (n - m))) : r = i * (n + m), 1 < i ? s = Math.abs(r - m) : i < 0 ? s = r / i + Math.abs(r) : s += (m - n) * (1 - i), r /= 2), e.parallaxScrollDistance = r, a = o ? (m - s) / 2 : (n - s) / 2, e.css(e.image.$item, {
                                    height: "".concat(s, "px"),
                                    marginTop: "".concat(a, "px"),
                                    left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                                    width: "".concat(t.width, "px")
                                }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                                    image: {
                                        height: s,
                                        marginTop: a
                                    },
                                    container: t
                                }
                            }
                        }, {
                            key: "isVisible",
                            value: function() {
                                return this.isElementInViewport || !1
                            }
                        }, {
                            key: "onScroll",
                            value: function(e) {
                                var t, n, i, o, r, s, a, l = this,
                                    c = l.$item.getBoundingClientRect(),
                                    u = c.top,
                                    d = c.height,
                                    p = {},
                                    h = c;
                                l.options.elementInViewport && (h = l.options.elementInViewport.getBoundingClientRect()), l.isElementInViewport = 0 <= h.bottom && 0 <= h.right && h.top <= m && h.left <= f.window.innerWidth, (e || l.isElementInViewport) && (t = Math.max(0, u), n = Math.max(0, d + u), i = Math.max(0, -u), o = Math.max(0, u + d - m), r = Math.max(0, d - (u + d - m)), s = Math.max(0, -u + m - d), h = 1 - (m - u) / (m + d) * 2, e = 1, d < m ? e = 1 - (i || o) / d : n <= m ? e = n / m : r <= m && (e = r / m), "opacity" !== l.options.type && "scale-opacity" !== l.options.type && "scroll-opacity" !== l.options.type || (p.transform = "translate3d(0,0,0)", p.opacity = e), "scale" !== l.options.type && "scale-opacity" !== l.options.type || (a = 1, l.options.speed < 0 ? a -= l.options.speed * e : a += l.options.speed * (1 - e), p.transform = "scale(".concat(a, ") translate3d(0,0,0)")), "scroll" !== l.options.type && "scroll-opacity" !== l.options.type || (a = l.parallaxScrollDistance * h, "absolute" === l.image.position && (a -= u), p.transform = "translate3d(0,".concat(a, "px,0)")), l.css(l.image.$item, p), l.options.onScroll && l.options.onScroll.call(l, {
                                    section: c,
                                    beforeTop: t,
                                    beforeTopEnd: n,
                                    afterTop: i,
                                    beforeBottom: o,
                                    beforeBottomEnd: r,
                                    afterBottom: s,
                                    visiblePercent: e,
                                    fromViewportCenter: h
                                }))
                            }
                        }, {
                            key: "onResize",
                            value: function() {
                                this.coverImage(), this.clipContainer()
                            }
                        }]) && r(e.prototype, t), n && r(e, n), a
                    }(),
                    i = function(e, t) {
                        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement)) ? e instanceof HTMLElement : e && "object" === c(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
                        for (var n, i = e.length, o = 0, r = arguments.length, s = new Array(2 < r ? r - 2 : 0), a = 2; a < r; a++) s[a - 2] = arguments[a];
                        for (; o < i; o += 1)
                            if ("object" === c(t) || void 0 === t ? e[o].jarallax || (e[o].jarallax = new w(e[o], t)) : e[o].jarallax && (n = e[o].jarallax[t].apply(e[o].jarallax, s)), void 0 !== n) return n;
                        return e
                    };
                i.constructor = w, t.default = i
            }
        },
        i = {};

    function a(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        t = i[e] = {
            exports: {}
        };
        return n[e](t, t.exports, a), t.exports
    }
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, {
            a: t
        }), t
    }, a.d = function(e, t) {
        for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var l = {};
    ! function() {
        "use strict";
        a.r(l);
        var e = a(1),
            t = a.n(e),
            o = a(2),
            r = a(8);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var n, i = o.window.jarallax;
        o.window.jarallax = r.default, o.window.jarallax.noConflict = function() {
            return o.window.jarallax = i, this
        }, void 0 !== o.jQuery && ((e = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            Array.prototype.unshift.call(t, this);
            var i = r.default.apply(o.window, t);
            return "object" !== s(i) ? i : this
        }).constructor = r.default.constructor, n = o.jQuery.fn.jarallax, o.jQuery.fn.jarallax = e, o.jQuery.fn.jarallax.noConflict = function() {
            return o.jQuery.fn.jarallax = n, this
        }), t()(function() {
            (0, r.default)(document.querySelectorAll("[data-jarallax]"))
        })
    }()
}(),
function() {
    var n = [, function(e) {
            e.exports = function(e) {
                "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                    "interactive" === document.readyState && e.call()
                }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
            }
        }, function(e, t, n) {
            n = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
            e.exports = n
        }, , , function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var t = n(2),
                u = n.n(t);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function i() {
                this.doneCallbacks = [], this.failCallbacks = []
            }
            i.prototype = {
                execute: function(e, t) {
                    var n = e.length;
                    for (t = Array.prototype.slice.call(t); n;) e[--n].apply(null, t)
                },
                resolve: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.execute(this.doneCallbacks, t)
                },
                reject: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.execute(this.failCallbacks, t)
                },
                done: function(e) {
                    this.doneCallbacks.push(e)
                },
                fail: function(e) {
                    this.failCallbacks.push(e)
                }
            };
            var s = 0,
                a = 0,
                l = 0,
                c = 0,
                d = 0,
                p = new i,
                h = new i,
                f = function() {
                    function i(e, t) {
                        ! function(e) {
                            if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
                        }(this);
                        var n = this;
                        n.url = e, n.options_default = {
                            autoplay: !1,
                            loop: !1,
                            mute: !1,
                            volume: 100,
                            showControls: !0,
                            accessibilityHidden: !1,
                            startTime: 0,
                            endTime: 0
                        }, n.options = n.extend({}, n.options_default, t), void 0 !== n.options.showContols && (n.options.showControls = n.options.showContols, delete n.options.showContols), n.videoID = n.parseURL(e), n.videoID && (n.ID = s, s += 1, n.loadAPI(), n.init())
                    }
                    var e, t, n;
                    return e = i, (t = [{
                        key: "extend",
                        value: function() {
                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                            var i = n[0] || {};
                            return Object.keys(n).forEach(function(t) {
                                n[t] && Object.keys(n[t]).forEach(function(e) {
                                    i[e] = n[t][e]
                                })
                            }), i
                        }
                    }, {
                        key: "parseURL",
                        value: function(e) {
                            var t, n, i, o, r, s = !(!(t = (t = e).match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                                a = !(!(n = (n = e).match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !n[3]) && n[3],
                                l = (i = (i = e).split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), o = {}, r = 0, i.forEach(function(e) {
                                    e = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                                    e && e[1] && e[2] && (o["ogv" === e[1] ? "ogg" : e[1]] = e[2], r = 1)
                                }), !!r && o);
                            return s ? (this.type = "youtube", s) : a ? (this.type = "vimeo", a) : !!l && (this.type = "local", l)
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            return !!this.videoID
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
                        }
                    }, {
                        key: "off",
                        value: function(n, i) {
                            var o = this;
                            this.userEventsList && this.userEventsList[n] && (i ? this.userEventsList[n].forEach(function(e, t) {
                                e === i && (o.userEventsList[n][t] = !1)
                            }) : delete this.userEventsList[n])
                        }
                    }, {
                        key: "fire",
                        value: function(e) {
                            for (var t = this, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function(e) {
                                e && e.apply(t, i)
                            })
                        }
                    }, {
                        key: "play",
                        value: function(e) {
                            var t = this;
                            t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), u().YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function(e) {
                                e && t.player.play()
                            })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var t = this;
                            t.player && ("youtube" === t.type && t.player.pauseVideo && u().YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(function(e) {
                                e || t.player.pause()
                            }), "local" === t.type && (t.player.paused || t.player.pause()))
                        }
                    }, {
                        key: "mute",
                        value: function() {
                            var e = this;
                            e.player && ("youtube" === e.type && e.player.mute && e.player.mute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0), "local" === e.type && (e.$video.muted = !0))
                        }
                    }, {
                        key: "unmute",
                        value: function() {
                            var e = this;
                            e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(e.options.volume), "local" === e.type && (e.$video.muted = !1))
                        }
                    }, {
                        key: "setVolume",
                        value: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                                t = this;
                            t.player && e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e), "local" === t.type && (t.$video.volume = e / 100))
                        }
                    }, {
                        key: "getVolume",
                        value: function(t) {
                            var e = this;
                            e.player ? ("youtube" === e.type && e.player.getVolume && t(e.player.getVolume()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function(e) {
                                t(e)
                            }), "local" === e.type && t(100 * e.$video.volume)) : t(!1)
                        }
                    }, {
                        key: "getMuted",
                        value: function(t) {
                            var e = this;
                            e.player ? ("youtube" === e.type && e.player.isMuted && t(e.player.isMuted()), "vimeo" === e.type && e.player.getVolume && e.player.getVolume().then(function(e) {
                                t(!!e)
                            }), "local" === e.type && t(e.$video.muted)) : t(null)
                        }
                    }, {
                        key: "getImageURL",
                        value: function(t) {
                            var e, n, i, o = this;
                            o.videoImage ? t(o.videoImage) : ("youtube" === o.type && (e = ["maxresdefault", "sddefault", "hqdefault", "0"], n = 0, (i = new Image).onload = function() {
                                120 !== (this.naturalWidth || this.width) || n === e.length - 1 ? (o.videoImage = "https://img.youtube.com/vi/".concat(o.videoID, "/").concat(e[n], ".jpg"), t(o.videoImage)) : (n += 1, this.src = "https://img.youtube.com/vi/".concat(o.videoID, "/").concat(e[n], ".jpg"))
                            }, i.src = "https://img.youtube.com/vi/".concat(o.videoID, "/").concat(e[n], ".jpg")), "vimeo" === o.type && ((i = new XMLHttpRequest).open("GET", "https://vimeo.com/api/v2/video/".concat(o.videoID, ".json"), !0), i.onreadystatechange = function() {
                                var e;
                                4 === this.readyState && 200 <= this.status && this.status < 400 && (e = JSON.parse(this.responseText), o.videoImage = e[0].thumbnail_large, t(o.videoImage))
                            }, i.send(), i = null))
                        }
                    }, {
                        key: "getIframe",
                        value: function(e) {
                            this.getVideo(e)
                        }
                    }, {
                        key: "getVideo",
                        value: function(l) {
                            var c = this;
                            c.$video ? l(c.$video) : c.onAPIready(function() {
                                var e, t, n, i, o, r, s, a;
                                c.$video || ((e = document.createElement("div")).style.display = "none"), "youtube" === c.type && (c.playerOptions = {
                                    host: "https://www.youtube-nocookie.com",
                                    videoId: c.videoID,
                                    playerVars: {
                                        autohide: 1,
                                        rel: 0,
                                        autoplay: 0,
                                        playsinline: 1
                                    }
                                }, c.options.showControls || (c.playerOptions.playerVars.iv_load_policy = 3, c.playerOptions.playerVars.modestbranding = 1, c.playerOptions.playerVars.controls = 0, c.playerOptions.playerVars.showinfo = 0, c.playerOptions.playerVars.disablekb = 1), c.playerOptions.events = {
                                    onReady: function(t) {
                                        c.options.mute ? t.target.mute() : c.options.volume && t.target.setVolume(c.options.volume), c.options.autoplay && c.play(c.options.startTime), c.fire("ready", t), c.options.loop && !c.options.endTime && (c.options.endTime = c.player.getDuration() - .1), setInterval(function() {
                                            c.getVolume(function(e) {
                                                c.options.volume !== e && (c.options.volume = e, c.fire("volumechange", t))
                                            })
                                        }, 150)
                                    },
                                    onStateChange: function(e) {
                                        c.options.loop && e.data === u().YT.PlayerState.ENDED && c.play(c.options.startTime), t || e.data !== u().YT.PlayerState.PLAYING || (t = 1, c.fire("started", e)), e.data === u().YT.PlayerState.PLAYING && c.fire("play", e), e.data === u().YT.PlayerState.PAUSED && c.fire("pause", e), e.data === u().YT.PlayerState.ENDED && c.fire("ended", e), e.data === u().YT.PlayerState.PLAYING ? n = setInterval(function() {
                                            c.fire("timeupdate", e), c.options.endTime && c.player.getCurrentTime() >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                                        }, 150) : clearInterval(n)
                                    },
                                    onError: function(e) {
                                        c.fire("error", e)
                                    }
                                }, (i = !c.$video) && ((o = document.createElement("div")).setAttribute("id", c.playerID), e.appendChild(o), document.body.appendChild(e)), c.player = c.player || new(u().YT.Player)(c.playerID, c.playerOptions), i && (c.$video = document.getElementById(c.playerID), c.options.accessibilityHidden && (c.$video.setAttribute("tabindex", "-1"), c.$video.setAttribute("aria-hidden", "true")), c.videoWidth = parseInt(c.$video.getAttribute("width"), 10) || 1280, c.videoHeight = parseInt(c.$video.getAttribute("height"), 10) || 720)), "vimeo" === c.type && (c.playerOptions = {
                                    dnt: 1,
                                    id: c.videoID,
                                    autopause: 0,
                                    transparent: 0,
                                    autoplay: c.options.autoplay ? 1 : 0,
                                    loop: c.options.loop ? 1 : 0,
                                    muted: c.options.mute ? 1 : 0
                                }, c.options.volume && (c.playerOptions.volume = c.options.volume), c.options.showControls || (c.playerOptions.badge = 0, c.playerOptions.byline = 0, c.playerOptions.portrait = 0, c.playerOptions.title = 0, c.playerOptions.background = 1), c.$video || (r = "", Object.keys(c.playerOptions).forEach(function(e) {
                                    "" !== r && (r += "&"), r += "".concat(e, "=").concat(encodeURIComponent(c.playerOptions[e]))
                                }), c.$video = document.createElement("iframe"), c.$video.setAttribute("id", c.playerID), c.$video.setAttribute("src", "https://player.vimeo.com/video/".concat(c.videoID, "?").concat(r)), c.$video.setAttribute("frameborder", "0"), c.$video.setAttribute("mozallowfullscreen", ""), c.$video.setAttribute("allowfullscreen", ""), c.$video.setAttribute("title", "Vimeo video player"), c.options.accessibilityHidden && (c.$video.setAttribute("tabindex", "-1"), c.$video.setAttribute("aria-hidden", "true")), e.appendChild(c.$video), document.body.appendChild(e)), c.player = c.player || new(u().Vimeo.Player)(c.$video, c.playerOptions), c.options.startTime && c.options.autoplay && c.player.setCurrentTime(c.options.startTime), c.player.getVideoWidth().then(function(e) {
                                    c.videoWidth = e || 1280
                                }), c.player.getVideoHeight().then(function(e) {
                                    c.videoHeight = e || 720
                                }), c.player.on("timeupdate", function(e) {
                                    s || (c.fire("started", e), s = 1), c.fire("timeupdate", e), c.options.endTime && c.options.endTime && e.seconds >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                                }), c.player.on("play", function(e) {
                                    c.fire("play", e), c.options.startTime && 0 === e.seconds && c.play(c.options.startTime)
                                }), c.player.on("pause", function(e) {
                                    c.fire("pause", e)
                                }), c.player.on("ended", function(e) {
                                    c.fire("ended", e)
                                }), c.player.on("loaded", function(e) {
                                    c.fire("ready", e)
                                }), c.player.on("volumechange", function(e) {
                                    c.fire("volumechange", e)
                                }), c.player.on("error", function(e) {
                                    c.fire("error", e)
                                })), "local" === c.type && (c.$video || (c.$video = document.createElement("video"), c.options.showControls && (c.$video.controls = !0), c.options.mute ? c.$video.muted = !0 : c.$video.volume && (c.$video.volume = c.options.volume / 100), c.options.loop && (c.$video.loop = !0), c.$video.setAttribute("playsinline", ""), c.$video.setAttribute("webkit-playsinline", ""), c.options.accessibilityHidden && (c.$video.setAttribute("tabindex", "-1"), c.$video.setAttribute("aria-hidden", "true")), c.$video.setAttribute("id", c.playerID), e.appendChild(c.$video), document.body.appendChild(e), Object.keys(c.videoID).forEach(function(e) {
                                    var t, n, i;
                                    t = c.$video, n = c.videoID[e], i = "video/".concat(e), (e = document.createElement("source")).src = n, e.type = i, t.appendChild(e)
                                })), c.player = c.player || c.$video, c.player.addEventListener("playing", function(e) {
                                    a || c.fire("started", e), a = 1
                                }), c.player.addEventListener("timeupdate", function(e) {
                                    c.fire("timeupdate", e), c.options.endTime && c.options.endTime && this.currentTime >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                                }), c.player.addEventListener("play", function(e) {
                                    c.fire("play", e)
                                }), c.player.addEventListener("pause", function(e) {
                                    c.fire("pause", e)
                                }), c.player.addEventListener("ended", function(e) {
                                    c.fire("ended", e)
                                }), c.player.addEventListener("loadedmetadata", function() {
                                    c.videoWidth = this.videoWidth || 1280, c.videoHeight = this.videoHeight || 720, c.fire("ready"), c.options.autoplay && c.play(c.options.startTime)
                                }), c.player.addEventListener("volumechange", function(e) {
                                    c.getVolume(function(e) {
                                        c.options.volume = e
                                    }), c.fire("volumechange", e)
                                }), c.player.addEventListener("error", function(e) {
                                    c.fire("error", e)
                                })), l(c.$video)
                            })
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.playerID = "VideoWorker-".concat(this.ID)
                        }
                    }, {
                        key: "loadAPI",
                        value: function() {
                            if (!a || !l) {
                                var e, t, n = "";
                                if ("youtube" !== this.type || a || (a = 1, n = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !l) {
                                    if (l = 1, void 0 !== u().Vimeo) return;
                                    n = "https://player.vimeo.com/api/player.js"
                                }
                                n && (e = document.createElement("script"), t = document.getElementsByTagName("head")[0], e.src = n, t.appendChild(e), e = t = null)
                            }
                        }
                    }, {
                        key: "onAPIready",
                        value: function(e) {
                            var t;
                            "youtube" === this.type && (void 0 !== u().YT && 0 !== u().YT.loaded || c ? "object" === o(u().YT) && 1 === u().YT.loaded ? e() : p.done(function() {
                                e()
                            }) : (c = 1, window.onYouTubeIframeAPIReady = function() {
                                window.onYouTubeIframeAPIReady = null, p.resolve("done"), e()
                            })), "vimeo" === this.type && (void 0 !== u().Vimeo || d ? void 0 !== u().Vimeo ? e() : h.done(function() {
                                e()
                            }) : (d = 1, t = setInterval(function() {
                                void 0 !== u().Vimeo && (clearInterval(t), h.resolve("done"), e())
                            }, 20))), "local" === this.type && e()
                        }
                    }]) && r(e.prototype, t), n && r(e, n), i
                }()
        }, function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n(5),
                t = n(2),
                s = n.n(t);

            function i() {
                var e, a, n, o, t, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : s().jarallax;
                void 0 !== i && (i = i.constructor, e = i.prototype.onScroll, i.prototype.onScroll = function() {
                    var n = this;
                    e.apply(n), n.isVideoInserted || !n.video || n.options.videoLazyLoading && !n.isElementInViewport || n.options.disableVideo() || (n.isVideoInserted = !0, n.video.getVideo(function(e) {
                        var t = e.parentNode;
                        n.css(e, {
                            position: n.image.position,
                            top: "0px",
                            left: "0px",
                            right: "0px",
                            bottom: "0px",
                            width: "100%",
                            height: "100%",
                            maxWidth: "none",
                            maxHeight: "none",
                            pointerEvents: "none",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            willChange: "transform,opacity",
                            margin: 0,
                            zIndex: -1
                        }), n.$video = e, "local" === n.video.type && (n.image.src ? n.$video.setAttribute("poster", n.image.src) : n.image.$item && "IMG" === n.image.$item.tagName && n.image.$item.src && n.$video.setAttribute("poster", n.image.$item.src)), n.image.$container.appendChild(e), t.parentNode.removeChild(t)
                    }))
                }, a = i.prototype.coverImage, i.prototype.coverImage = function() {
                    var e, t, n, i, o = this,
                        r = a.apply(o),
                        s = !!o.image.$item && o.image.$item.nodeName;
                    return r && o.video && s && ("IFRAME" === s || "VIDEO" === s) && (t = (e = r.image.height) * o.image.width / o.image.height, n = (r.container.width - t) / 2, i = r.image.marginTop, r.container.width > t && (e = (t = r.container.width) * o.image.height / o.image.width, n = 0, i += (r.image.height - e) / 2), "IFRAME" === s && (e += 400, i -= 200), o.css(o.$video, {
                        width: "".concat(t, "px"),
                        marginLeft: "".concat(n, "px"),
                        height: "".concat(e, "px"),
                        marginTop: "".concat(i, "px")
                    })), r
                }, n = i.prototype.initImg, i.prototype.initImg = function() {
                    var e = this,
                        t = n.apply(e);
                    return e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc ? (e.defaultInitImgResult = t, !0) : t
                }, o = i.prototype.canInitParallax, i.prototype.canInitParallax = function() {
                    var n = this,
                        e = o.apply(n);
                    if (!n.options.videoSrc) return e;
                    var t = new r.default(n.options.videoSrc, {
                        autoplay: !0,
                        loop: n.options.videoLoop,
                        showControls: !1,
                        accessibilityHidden: !0,
                        startTime: n.options.videoStartTime || 0,
                        endTime: n.options.videoEndTime || 0,
                        mute: n.options.videoVolume ? 0 : 1,
                        volume: n.options.videoVolume || 0
                    });

                    function i() {
                        n.image.$default_item && (n.image.$item = n.image.$default_item, n.image.$item.style.display = "block", n.coverImage(), n.clipContainer(), n.onScroll())
                    }
                    if (t.isValid())
                        if (this.options.disableParallax() && (e = !0, n.image.position = "absolute", n.options.type = "scroll", n.options.speed = 1), e) {
                            if (t.on("ready", function() {
                                    var e;
                                    n.options.videoPlayOnlyVisible ? (e = n.onScroll, n.onScroll = function() {
                                        e.apply(n), n.videoError || !n.options.videoLoop && (n.options.videoLoop || n.videoEnded) || (n.isVisible() ? t.play() : t.pause())
                                    }) : t.play()
                                }), t.on("started", function() {
                                    n.image.$default_item = n.image.$item, n.image.$item = n.$video, n.image.width = n.video.videoWidth || 1280, n.image.height = n.video.videoHeight || 720, n.coverImage(), n.clipContainer(), n.onScroll(), n.image.$default_item && (n.image.$default_item.style.display = "none")
                                }), t.on("ended", function() {
                                    n.videoEnded = !0, n.options.videoLoop || i()
                                }), t.on("error", function() {
                                    n.videoError = !0, i()
                                }), n.video = t, !n.defaultInitImgResult && (n.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== t.type)) return t.getImageURL(function(e) {
                                n.image.bgImage = 'url("'.concat(e, '")'), n.init()
                            }), !1
                        } else n.defaultInitImgResult || t.getImageURL(function(e) {
                            var t = n.$item.getAttribute("style");
                            t && n.$item.setAttribute("data-jarallax-original-styles", t), n.css(n.$item, {
                                "background-image": 'url("'.concat(e, '")'),
                                "background-position": "center",
                                "background-size": "cover"
                            })
                        });
                    return e
                }, t = i.prototype.destroy, i.prototype.destroy = function() {
                    var e = this;
                    e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), t.apply(e)
                })
            }
        }],
        i = {};

    function o(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        t = i[e] = {
            exports: {}
        };
        return n[e](t, t.exports, o), t.exports
    }
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, {
            a: t
        }), t
    }, o.d = function(e, t) {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var r = {};
    ! function() {
        "use strict";
        o.r(r);
        var e = o(5),
            t = o(2),
            n = o.n(t),
            i = o(1),
            t = o.n(i),
            i = o(6);
        n().VideoWorker = n().VideoWorker || e.default, (0, i.default)(), t()(function() {
            void 0 !== n().jarallax && n().jarallax(document.querySelectorAll("[data-jarallax-video]"))
        })
    }()
}(),
function(l, n, i, a) {
    function c(e, t) {
        this.settings = null, this.options = l.extend({}, c.Defaults, t), this.$element = l(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, l.each(["onResize", "onThrottledResize"], l.proxy(function(e, t) {
            this._handlers[t] = l.proxy(this[t], this)
        }, this)), l.each(c.Plugins, l.proxy(function(e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), l.each(c.Workers, l.proxy(function(e, t) {
            this._pipe.push({
                filter: t.filter,
                run: l.proxy(t.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    c.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: n,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, c.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, c.Type = {
        Event: "event",
        State: "state"
    }, c.Plugins = {}, c.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                t = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            n || this.$stage.children().css(t), e.css = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                o = !this.settings.autoWidth,
                r = [];
            for (e.items = {
                    merge: !1,
                    width: t
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = 1 < n || e.items.merge, r[i] = o ? t * n : this._items[i].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                t = this._items,
                n = this.settings,
                i = Math.max(2 * n.items, 4),
                o = 2 * Math.ceil(t.length / 2),
                r = n.loop && t.length ? n.rewind ? i : Math.max(i, o) : 0,
                s = "",
                a = "";
            for (r /= 2; 0 < r;) e.push(this.normalize(e.length / 2, !0)), s += t[e[e.length - 1]][0].outerHTML, e.push(this.normalize(t.length - 1 - (e.length - 1) / 2, !0)), a = t[e[e.length - 1]][0].outerHTML + a, --r;
            this._clones = e, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e, t, n = this.settings.rtl ? 1 : -1, i = this._clones.length + this._items.length, o = -1, r = []; ++o < i;) e = r[o - 1] || 0, t = this._widths[this.relative(o)] + this.settings.margin, r.push(e + t * n);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                e = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, i.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var e, t, n = this.settings.rtl ? 1 : -1, i = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + i, r = o + this.width() * n, s = [], a = 0, l = this._coordinates.length; a < l; a++) e = this._coordinates[a - 1] || 0, t = Math.abs(this._coordinates[a]) + i * n, (this.op(e, "<=", o) && this.op(e, ">", r) || this.op(t, "<", o) && this.op(t, ">", r)) && s.push(a);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], c.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(l("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, c.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function(e) {
            return l(e)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, c.prototype.initialize = function() {
        var e, t;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, t = this.$element.children(t).width(), e.length && t <= 0 && this.preloadAutoWidthImages(e)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, c.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, c.prototype.setup = function() {
        var t = this.viewport(),
            e = this.options.responsive,
            n = -1,
            i = null;
        e ? (l.each(e, function(e) {
            e <= t && n < e && (n = Number(e))
        }), "function" == typeof(i = l.extend({}, this.options, e[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: i
            }
        }), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, c.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, c.prototype.prepare = function(e) {
        var t = this.trigger("prepare", {
            content: e
        });
        return t.data || (t.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: t.data
        }), t.data
    }, c.prototype.update = function() {
        for (var e = 0, t = this._pipe.length, n = l.proxy(function(e) {
                return this[e]
            }, this._invalidated), i = {}; e < t;)(this._invalidated.all || 0 < l.grep(this._pipe[e].filter, n).length) && this._pipe[e].run(i), e++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, c.prototype.width = function(e) {
        switch (e = e || c.Width.Default) {
            case c.Width.Inner:
            case c.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, c.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, c.prototype.onThrottledResize = function() {
        n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, c.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, c.prototype.registerEventHandlers = function() {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }, c.prototype.onDragStart = function(e) {
        var t = null;
        3 !== e.which && (t = l.support.transform ? {
            x: (t = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === t.length ? 12 : 4],
            y: t[16 === t.length ? 13 : 5]
        } : (t = this.$stage.position(), {
            x: this.settings.rtl ? t.left + this.$stage.width() - this.width() + this.settings.margin : t.left,
            y: t.top
        }), this.is("animating") && (l.support.transform ? this.animate(t.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(e.target), this._drag.stage.start = t, this._drag.stage.current = t, this._drag.pointer = this.pointer(e), l(i).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(i).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(e) {
            var t = this.difference(this._drag.pointer, this.pointer(e));
            l(i).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(t.x) < Math.abs(t.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, c.prototype.onDragMove = function(e) {
        var t, n = null,
            i = null,
            o = this.difference(this._drag.pointer, this.pointer(e)),
            r = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (n = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - n, r.x = ((r.x - n) % i + i) % i + n) : (n = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), t = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, n + t), i + t)), this._drag.stage.current = r, this.animate(r.x))
    }, c.prototype.onDragEnd = function(e) {
        var t = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            e = 0 < t.x ^ this.settings.rtl ? "left" : "right";
        l(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== t.x ? e : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = e, (3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, c.prototype.closest = function(n, i) {
        var o = -1,
            r = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || l.each(s, l.proxy(function(e, t) {
            return "left" === i && t - 30 < n && n < t + 30 ? o = e : "right" === i && t - r - 30 < n && n < t - r + 30 ? o = e + 1 : this.op(n, "<", t) && this.op(n, ">", s[e + 1] !== a ? s[e + 1] : t - r) && (o = "left" === i ? e + 1 : e), -1 === o
        }, this)), this.settings.loop || (this.op(n, ">", s[this.minimum()]) ? o = n = this.minimum() : this.op(n, "<", s[this.maximum()]) && (o = n = this.maximum())), o
    }, c.prototype.animate = function(e) {
        var t = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : t ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, c.prototype.is = function(e) {
        return this._states.current[e] && 0 < this._states.current[e]
    }, c.prototype.current = function(e) {
        return e === a ? this._current : 0 === this._items.length ? a : (e = this.normalize(e), this._current !== e && ((t = this.trigger("change", {
            property: {
                name: "position",
                value: e
            }
        })).data !== a && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
            property: {
                name: "position",
                value: this._current
            }
        })), this._current);
        var t
    }, c.prototype.invalidate = function(e) {
        return "string" === l.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(e, t) {
            return t
        })
    }, c.prototype.reset = function(e) {
        (e = this.normalize(e)) !== a && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, c.prototype.normalize = function(e, t) {
        var n = this._items.length,
            t = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || n < 1 ? e = a : (e < 0 || n + t <= e) && (e = ((e - t / 2) % n + n) % n + t / 2), e
    }, c.prototype.relative = function(e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, c.prototype.maximum = function(e) {
        var t, n, i, o = this.settings,
            r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            if (t = this._items.length)
                for (n = this._items[--t].width(), i = this.$element.width(); t-- && !(i < (n += this._items[t].width() + this.settings.margin)););
            r = t + 1
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return e && (r -= this._clones.length / 2), Math.max(r, 0)
    }, c.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, c.prototype.items = function(e) {
        return e === a ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, c.prototype.mergers = function(e) {
        return e === a ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, c.prototype.clones = function(n) {
        function i(e) {
            return e % 2 == 0 ? o + e / 2 : t - (e + 1) / 2
        }
        var t = this._clones.length / 2,
            o = t + this._items.length;
        return n === a ? l.map(this._clones, function(e, t) {
            return i(t)
        }) : l.map(this._clones, function(e, t) {
            return e === n ? i(t) : null
        })
    }, c.prototype.speed = function(e) {
        return e !== a && (this._speed = e), this._speed
    }, c.prototype.coordinates = function(e) {
        var t, n = 1,
            i = e - 1;
        return e === a ? l.map(this._coordinates, l.proxy(function(e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = e + 1), t = this._coordinates[e], t += (this.width() - t + (this._coordinates[i] || 0)) / 2 * n) : t = this._coordinates[i] || 0, t = Math.ceil(t))
    }, c.prototype.duration = function(e, t, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, c.prototype.to = function(e, t) {
        var n, i = this.current(),
            o = e - this.relative(i),
            r = (0 < o) - (o < 0),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (n = (((e = i + o) - a) % s + s) % s + a) !== e && n - o <= l && 0 < n - o && (i = n - o, e = n, this.reset(i))) : e = this.settings.rewind ? (e % (l += 1) + l) % l : Math.max(a, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.isVisible() && this.update()
    }, c.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, c.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, c.prototype.onTransitionEnd = function(e) {
        if (e !== a && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, c.prototype.viewport = function() {
        var e;
        return this.options.responsiveBaseElement !== n ? e = l(this.options.responsiveBaseElement).width() : n.innerWidth ? e = n.innerWidth : i.documentElement && i.documentElement.clientWidth ? e = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
    }, c.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e = e && (e instanceof jQuery ? e : l(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(l.proxy(function(e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, c.prototype.add = function(e, t) {
        var n = this.relative(this._current);
        t = t === a ? this._items.length : this.normalize(t, !0), e = e instanceof jQuery ? e : l(e), this.trigger("add", {
            content: e,
            position: t
        }), e = this.prepare(e), 0 === this._items.length || t === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[t - 1].after(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, +e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: t
        })
    }, c.prototype.remove = function(e) {
        (e = this.normalize(e, !0)) !== a && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, c.prototype.preloadAutoWidthImages = function(e) {
        e.each(l.proxy(function(e, t) {
            this.enter("pre-loading"), t = l(t), l(new Image).one("load", l.proxy(function(e) {
                t.attr("src", e.target.src), t.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", t.attr("src") || t.attr("data-src") || t.attr("data-src-retina"))
        }, this))
    }, c.prototype.destroy = function() {
        for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(i).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, c.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? n < e : e < n;
            case ">":
                return i ? e < n : n < e;
            case ">=":
                return i ? e <= n : n <= e;
            case "<=":
                return i ? n <= e : e <= n
        }
    }, c.prototype.on = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, c.prototype.off = function(e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, c.prototype.trigger = function(e, t, n, i, o) {
        var r = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            s = l.camelCase(l.grep(["on", e, n], function(e) {
                return e
            }).join("-").toLowerCase()),
            a = l.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
                relatedTarget: this
            }, r, t));
        return this._supress[e] || (l.each(this._plugins, function(e, t) {
            t.onTrigger && t.onTrigger(a)
        }), this.register({
            type: c.Type.Event,
            name: e
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
    }, c.prototype.enter = function(e) {
        l.each([e].concat(this._states.tags[e] || []), l.proxy(function(e, t) {
            this._states.current[t] === a && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, c.prototype.leave = function(e) {
        l.each([e].concat(this._states.tags[e] || []), l.proxy(function(e, t) {
            this._states.current[t]--
        }, this))
    }, c.prototype.register = function(n) {
        var t;
        n.type === c.Type.Event ? (l.event.special[n.name] || (l.event.special[n.name] = {}), l.event.special[n.name].owl || (t = l.event.special[n.name]._default, l.event.special[n.name]._default = function(e) {
            return !t || !t.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && -1 < e.namespace.indexOf("owl") : t.apply(this, arguments)
        }, l.event.special[n.name].owl = !0)) : n.type === c.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function(e, t) {
            return l.inArray(e, this._states.tags[n.name]) === t
        }, this)))
    }, c.prototype.suppress = function(e) {
        l.each(e, l.proxy(function(e, t) {
            this._supress[t] = !0
        }, this))
    }, c.prototype.release = function(e) {
        l.each(e, l.proxy(function(e, t) {
            delete this._supress[t]
        }, this))
    }, c.prototype.pointer = function(e) {
        var t = {
            x: null,
            y: null
        };
        return (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
    }, c.prototype.isNumeric = function(e) {
        return !isNaN(parseFloat(e))
    }, c.prototype.difference = function(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, l.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var e = l(this),
                n = e.data("owl.carousel");
            n || (n = new c(this, "object" == typeof t && t), e.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, t) {
                n.register({
                    type: c.Type.Event,
                    name: t
                }), n.$element.on(t + ".owl.carousel.core", l.proxy(function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([t]), n[t].apply(this, [].slice.call(arguments, 1)), this.release([t]))
                }, n))
            })), "string" == typeof t && "_" !== t.charAt(0) && n[t].apply(n, i)
        })
    }, l.fn.owlCarousel.Constructor = c
}(window.Zepto || window.jQuery, window, document),
function(t, n) {
    var i = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, i.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = n.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, i.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, i.prototype.destroy = function() {
        var e, t;
        for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(a, o) {
    var t = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var t = this._core.settings,
                        n = t.center && Math.ceil(t.items / 2) || t.items,
                        i = t.center && -1 * n || 0,
                        o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + i,
                        r = this._core.clones().length,
                        s = a.proxy(function(e, t) {
                            this.load(t)
                        }, this);
                    for (0 < t.lazyLoadEager && (n += t.lazyLoadEager, t.loop && (o -= t.lazyLoadEager, n++)); i++ < n;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
                }
            }, this)
        }, this._core.options = a.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, t.prototype.load = function(e) {
        var t = this._core.$stage.children().eq(e),
            e = t && t.find(".owl-lazy");
        !e || -1 < a.inArray(t.get(0), this._loaded) || (e.each(a.proxy(function(e, t) {
            var n = a(t),
                i = 1 < o.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
            this._core.trigger("load", {
                element: n,
                url: i
            }, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function() {
                n.css("opacity", 1), this._core.trigger("loaded", {
                    element: n,
                    url: i
                }, "lazy")
            }, this)).attr("src", i) : n.is("source") ? n.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: n,
                    url: i
                }, "lazy")
            }, this)).attr("srcset", i) : ((t = new Image).onload = a.proxy(function() {
                n.css({
                    "background-image": 'url("' + i + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: n,
                    url: i
                }, "lazy")
            }, this), t.src = i)
        }, this)), this._loaded.push(t.get(0)))
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = t
}(window.Zepto || window.jQuery, window, document),
function(o, n) {
    var i = function(e) {
        this._core = e, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": o.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": o.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = o.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var t = this;
        o(n).on("load", function() {
            t._core.settings.autoHeight && t.update()
        }), o(n).resize(function() {
            t._core.settings.autoHeight && (null != t._intervalId && clearTimeout(t._intervalId), t._intervalId = setTimeout(function() {
                t.update()
            }, 250))
        })
    };
    i.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, i.prototype.update = function() {
        var e = this._core._current,
            t = e + this._core.settings.items,
            n = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(e, t),
            i = [],
            t = 0;
        o.each(e, function(e, t) {
            i.push(o(t).height())
        }), (t = Math.max.apply(null, i)) <= 1 && n && this._previousHeight && (t = this._previousHeight), this._previousHeight = t, this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
    }, i.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
}(window.Zepto || window.jQuery, window, document),
function(u, t) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": u.proxy(function(e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": u.proxy(function(e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": u.proxy(function(e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": u.proxy(function(e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": u.proxy(function(e) {
                var t;
                !e.namespace || (t = u(e.content).find(".owl-video")).length && (t.css("display", "none"), this.fetch(t, u(e.content)))
            }, this)
        }, this._core.options = u.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function(e) {
            this.play(e)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(e, t) {
        var n = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            o = e.attr("data-width") || this._core.settings.videoWidth,
            r = e.attr("data-height") || this._core.settings.videoHeight,
            s = e.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (-1 < (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
        else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
        else {
            if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: o,
            height: r
        }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
    }, n.prototype.thumbnail = function(t, e) {
        function n(e) {
            i = c.lazyLoad ? u("<div/>", {
                class: "owl-video-tn " + l,
                srcType: e
            }) : u("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + e + ")"
            }), t.after(i), t.after('<div class="owl-video-play-icon"></div>')
        }
        var i, o, r = e.width && e.height ? "width:" + e.width + "px;height:" + e.height + "px;" : "",
            s = t.find("img"),
            a = "src",
            l = "",
            c = this._core.settings;
        if (t.wrap(u("<div/>", {
                class: "owl-video-wrapper",
                style: r
            })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return n(s.attr(a)), s.remove(), !1;
        "youtube" === e.type ? (o = "//img.youtube.com/vi/" + e.id + "/hqdefault.jpg", n(o)) : "vimeo" === e.type ? u.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + e.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                o = e[0].thumbnail_large, n(o)
            }
        }) : "vzaar" === e.type && u.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + e.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                o = e.framegrab_url, n(o)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var t = u(e.target).closest("." + this._core.settings.itemClass),
            n = this._videos[t.attr("data-video")],
            i = n.width || "100%",
            o = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), t = this._core.items(this._core.relative(t.index())), this._core.reset(t.index()), (e = u('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), e.attr("width", i), "youtube" === n.type ? e.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? e.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && e.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), u(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")), this._playing = t.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement;
        return e && u(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var e, t;
        for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, u.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, (window, document)),
function(s) {
    var t = function(e) {
        this.core = e, this.core.options = s.extend({}, t.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": s.proxy(function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": s.proxy(function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    t.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, t.prototype.swap = function() {
        var e, t, n, i, o, r;
        1 === this.core.settings.items && s.support.animation && s.support.transition && (this.core.speed(0), t = s.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous), i = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(s.support.animation.end, t).css({
            left: e + "px"
        }).addClass("animated owl-animated-out").addClass(r)), o && i.one(s.support.animation.end, t).addClass("animated owl-animated-in").addClass(o)))
    }, t.prototype.clear = function(e) {
        s(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.Animate = t
}(window.Zepto || window.jQuery, (window, document)),
function(i, o, t) {
    var n = function(e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": i.proxy(function(e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": i.proxy(function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": i.proxy(function(e, t, n) {
                e.namespace && this.play(t, n)
            }, this),
            "stop.owl.autoplay": i.proxy(function(e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = i.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype._next = function(e) {
        this._call = o.setTimeout(i.proxy(this._next, this, e), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || t.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, n.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, n.prototype.play = function(e, t) {
        var n;
        this._core.is("rotating") || this._core.enter("rotating"), e = e || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || e), e), this._paused ? (this._time = this.read(), this._paused = !1) : o.clearTimeout(this._call), this._time += this.read() % e - n, this._timeout = e, this._call = o.setTimeout(i.proxy(this._next, this, t), e - n)
    }, n.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, o.clearTimeout(this._call), this._core.leave("rotating"))
    }, n.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, o.clearTimeout(this._call))
    }, n.prototype.destroy = function() {
        var e, t;
        for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(o) {
    "use strict";
    var t = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": o.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": o.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": o.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": o.proxy(function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": o.proxy(function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": o.proxy(function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = o.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, t.prototype.initialize = function() {
        var e, n = this._core.settings;
        for (e in this._controls.$relative = (n.navContainer ? o(n.navContainer) : o("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(e) {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next = o("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(e) {
                this.next(n.navSpeed)
            }, this)), n.dotsData || (this._templates = [o('<button role="button">').addClass(n.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? o(n.dotsContainer) : o("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", o.proxy(function(e) {
                var t = (o(e.target).parent().is(this._controls.$absolute) ? o(e.target) : o(e.target).parent()).index();
                e.preventDefault(), this.to(t, n.dotsSpeed)
            }, this)), this._overrides) this._core[e] = o.proxy(this[e], this)
    }, t.prototype.destroy = function() {
        var e, t, n, i, o = this._core.settings;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) "$relative" === t && o.navContainer ? this._controls[t].html("") : this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.prototype.update = function() {
        var e, t, n = this._core.clones().length / 2,
            i = n + this._core.items().length,
            o = this._core.maximum(!0),
            r = this._core.settings,
            s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
            for (this._pages = [], e = n, t = 0; e < i; e++) {
                if (s <= t || 0 === t) {
                    if (this._pages.push({
                            start: Math.min(o, e - n),
                            end: e - n + s - 1
                        }), Math.min(o, e - n) === o) break;
                    t = 0, 0
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, t.prototype.draw = function() {
        var e = this._core.settings,
            t = this._core.items().length <= e.items,
            n = this._core.relative(this._core.current()),
            i = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || t), e.nav && (this._controls.$previous.toggleClass("disabled", !i && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !i && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || t), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, t.prototype.onTrigger = function(e) {
        var t = this._core.settings;
        e.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: t && (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items)
        }
    }, t.prototype.current = function() {
        var n = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function(e, t) {
            return e.start <= n && e.end >= n
        }, this)).pop()
    }, t.prototype.getPosition = function(e) {
        var t, n, i = this._core.settings;
        return "page" == i.slideBy ? (t = o.inArray(this.current(), this._pages), n = this._pages.length, e ? ++t : --t, t = this._pages[(t % n + n) % n].start) : (t = this._core.relative(this._core.current()), n = this._core.items().length, e ? t += i.slideBy : t -= i.slideBy), t
    }, t.prototype.next = function(e) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, t.prototype.prev = function(e) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, t.prototype.to = function(e, t, n) {
        !n && this._pages.length ? (n = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, t)) : o.proxy(this._overrides.to, this._core)(e, t)
    }, o.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, (window, document)),
function(i, o) {
    "use strict";
    var t = function(e) {
        this._core = e, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": i.proxy(function(e) {
                e.namespace && "URLHash" === this._core.settings.startPosition && i(o).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": i.proxy(function(e) {
                var t;
                !e.namespace || (t = i(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[t] = e.content)
            }, this),
            "changed.owl.carousel": i.proxy(function(e) {
                var n;
                e.namespace && "position" === e.property.name && (n = this._core.items(this._core.relative(this._core.current())), (e = i.map(this._hashes, function(e, t) {
                    return e === n ? t : null
                }).join()) && o.location.hash.slice(1) !== e && (o.location.hash = e))
            }, this)
        }, this._core.options = i.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers), i(o).on("hashchange.owl.navigation", i.proxy(function(e) {
            var t = o.location.hash.substring(1),
                n = this._core.$stage.children(),
                t = this._hashes[t] && n.index(this._hashes[t]);
            void 0 !== t && t !== this._core.current() && this._core.to(this._core.relative(t), !1, !0)
        }, this))
    };
    t.Defaults = {
        URLhashListener: !1
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in i(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.Hash = t
}(window.Zepto || window.jQuery, window, document),
function(o, r) {
    var s = o("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        e = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        t = function() {
            return !!l("transform")
        },
        n = function() {
            return !!l("perspective")
        },
        i = function() {
            return !!l("animation")
        };

    function l(e, n) {
        var i = !1,
            t = e.charAt(0).toUpperCase() + e.slice(1);
        return o.each((e + " " + a.join(t + " ") + t).split(" "), function(e, t) {
            if (s[t] !== r) return i = !n || t, !1
        }), i
    }

    function c(e) {
        return l(e, !0)
    }! function() {
        return !!l("transition")
    }() || (o.support.transition = new String(c("transition")), o.support.transition.end = e.transition.end[o.support.transition]), i() && (o.support.animation = new String(c("animation")), o.support.animation.end = e.animation.end[o.support.animation]), t() && (o.support.transform = new String(c("transform")), o.support.transform3d = n())
}(window.Zepto || window.jQuery, (window, void document));
const scrollCue = function() {
    let r = {},
        s, a, t = 0,
        o = !0,
        l = !0,
        c = !1,
        n = !1,
        u, i = {
            duration: 600,
            interval: -.7,
            percentage: .75,
            enable: !0,
            docSlider: !1,
            pageChangeReset: !1
        };
    return r = {
        setEvents: function(e) {
            function n() {
                o && (requestAnimationFrame(function() {
                    o = !0, l && (r.setQuery(), r.runQuery())
                }), o = !1)
            }
            if (l && !e && window.addEventListener("load", r.runQuery), window.addEventListener("scroll", n), c) {
                var i = docSlider.getElements().pages;
                for (let t = 0; t < i.length; t++) {
                    let e = i[t];
                    e.addEventListener("scroll", function(e) {
                        return docSlider.getCurrentIndex() + "" === e.target.getAttribute("data-ds-index") && void(docSlider._getWheelEnable() && n())
                    })
                }
            }
            window.addEventListener("resize", function() {
                0 < t && clearTimeout(t), t = setTimeout(function() {
                    l && (r.searchElements(), r.setQuery(), r.runQuery())
                }, 200)
            })
        },
        setOptions: function(t, n) {
            let i = {};
            if (void 0 !== t) return Object.keys(t).forEach(function(e) {
                "[object Object]" === Object.prototype.toString.call(t[e]) ? i[e] = r.setOptions(t[e], n[e]) : (i[e] = t[e], void 0 !== n && void 0 !== n[e] && (i[e] = n[e]))
            }), i
        },
        searchElements: function() {
            let n, t;
            s = [], n = document.querySelectorAll("[data-cues]:not([data-disabled])");
            for (let e = 0; e < n.length; e++) {
                let t = n[e];
                for (let e = 0; e < t.children.length; e++) {
                    var i = t.children[e];
                    r.setAttrPtoC(i, "data-cue", t, "data-cues", ""), r.setAttrPtoC(i, "data-duration", t, "data-duration", !1), r.setAttrPtoC(i, "data-interval", t, "data-interval", !1), r.setAttrPtoC(i, "data-sort", t, "data-sort", !1), r.setAttrPtoC(i, "data-addClass", t, "data-addClass", !1), r.setAttrPtoC(i, "data-group", t, "data-group", !1), r.setAttrPtoC(i, "data-delay", t, "data-delay", !1)
                }
                t.setAttribute("data-disabled", "true")
            }
            t = document.querySelectorAll('[data-cue]:not([data-show="true"])');
            for (let e = 0; e < t.length; e++) {
                var o = t[e];
                s.push({
                    elm: o,
                    cue: r.getAttr(o, "data-cue", "fadeIn"),
                    duration: Number(r.getAttr(o, "data-duration", u.duration)),
                    interval: Number(r.getAttr(o, "data-interval", u.interval)),
                    order: r.getOrderNumber(o),
                    sort: r.getAttr(o, "data-sort", null),
                    addClass: r.getAttr(o, "data-addClass", null),
                    group: r.getAttr(o, "data-group", null),
                    delay: Number(r.getAttr(o, "data-delay", 0))
                })
            }
            if (c) {
                var e = docSlider.getElements().pages.length;
                for (let n = 0; n < e; n++) {
                    let t = document.querySelectorAll('[data-ds-index="' + n + '"] [data-cue]:not([data-scpage])');
                    for (let e = 0; e < t.length; e++) t[e].setAttribute("data-scpage", n)
                }
            }
        },
        sortElements: function() {
            let e = arguments[0];
            var r = [].slice.call(arguments).slice(1);
            for (let o = 0; o < r.length; o++) e.sort(function(e, t) {
                var n = void 0 === r[o][1] || r[o][1],
                    i = r[o][0];
                return e[i] > t[i] ? n ? 1 : -1 : e[i] < t[i] ? n ? -1 : 1 : 0
            })
        },
        randElements: function(t) {
            for (let e = t.length - 1; 0 < e; e--) {
                var n = Math.floor(Math.random() * (e + 1)),
                    i = t[e];
                t[e] = t[n], t[n] = i
            }
            return t
        },
        setDurationValue: function(e, t, n) {
            if (void 0 === t) return e;
            let i = e;
            t = t.duration;
            return i = -1 === (n + "").indexOf(".") ? i + t + n : i + t + t * n, i = i < 0 ? 0 : i, i
        },
        getOrderNumber: function(e) {
            if (e.hasAttribute("data-order")) {
                e = Number(e.getAttribute("data-order"));
                return 0 <= e ? e : Math.pow(2, 53) - 1 + e
            }
            return Math.pow(2, 52) - 1
        },
        setAttrPtoC: function(e, t, n, i, o) {
            n.hasAttribute(i) ? e.hasAttribute(t) || e.setAttribute(t, n.getAttribute(i)) : !1 !== o && e.setAttribute(t, o)
        },
        getAttr: function(e, t, n) {
            return e.hasAttribute(t) ? e.getAttribute(t) : n
        },
        getOffsetTop: function(e) {
            var t = e.getBoundingClientRect(),
                e = window.pageYOffset || document.documentElement.scrollTop;
            return t.top + e
        },
        setClassNames: function(t, e) {
            if (e) {
                var n = e.split(" ");
                for (let e = 0; e < n.length; e++) t.classList.add(n[e])
            }
        },
        setQuery: function() {
            a = {};
            for (let t = 0; t < s.length; t++) {
                let e = s[t];
                var n = e.group || "$" + r.getOffsetTop(e.elm);
                if (!e.elm.hasAttribute("data-show")) {
                    if (c) {
                        var i = e.elm.getAttribute("data-scpage");
                        if (i !== docSlider.getCurrentIndex() + "" && null !== i) continue
                    }
                    void 0 === a[n] && (a[n] = []), a[n].push(e)
                }
            }
        },
        runQuery: function() {
            var i, o = Object.keys(a);
            for (let e = 0; e < o.length; e++) {
                let n = a[o[e]];
                if (r.isElementIn(n[0].elm)) {
                    "reverse" === n[0].sort ? n.reverse() : "random" === n[0].sort && r.randElements(n), r.sortElements(n, ["order"]);
                    let t = 0;
                    for (let e = 0; e < n.length; e++) i = e, n[i].elm.setAttribute("data-show", "true"), r.setClassNames(n[i].elm, n[i].addClass), t = r.setDurationValue(t, n[i - 1], n[i].interval), n[i].elm.style.animationName = n[i].cue, n[i].elm.style.animationDuration = n[i].duration + "ms", n[i].elm.style.animationTimingFunction = "ease", n[i].elm.style.animationDelay = t + n[i].delay + "ms", n[i].elm.style.animationDirection = "normal", n[i].elm.style.animationFillMode = "both";
                    delete a[o[e]]
                }
            }
        },
        isElementIn: function(e) {
            let t = e.hasAttribute("data-scpage") ? r.isScrollEndWithDocSlider : r.isScrollEnd;
            return window.pageYOffset > r.getOffsetTop(e) - window.innerHeight * u.percentage || t()
        },
        isScrollEnd: function() {
            var e = window.document.body,
                t = window.document.documentElement;
            return (e.scrollTop || t.scrollTop) >= t.scrollHeight - t.clientHeight
        },
        isScrollEndWithDocSlider: function() {
            var e = docSlider.getCurrentPage();
            return e.scrollTop >= e.scrollHeight - e.clientHeight
        }
    }, {
        init: function(e) {
            u = r.setOptions(i, e), l = u.enable, c = u.docSlider, n = u.pageChangeReset, c || (r.setEvents(), r.searchElements(), r.setQuery())
        },
        update: function() {
            l && (r.searchElements(), r.setQuery(), r.runQuery())
        },
        enable: function(e) {
            l = void 0 === e ? !l : e, scrollCue.update()
        },
        _hasDocSlider: function() {
            return c
        },
        _hasPageChangeReset: function() {
            return n
        },
        _initWithDocSlider: function(e) {
            r.setEvents(e), r.searchElements(), r.setQuery()
        },
        _updateWithDocSlider: function() {
            l && (r.setQuery(), r.runQuery())
        },
        _searchElements: function() {
            r.searchElements()
        }
    }
}();
! function(o) {
    o.fn.niceSelect = function(e) {
        if ("string" == typeof e) return "update" == e ? this.each(function() {
            var e = o(this),
                t = o(this).next(".nice-select"),
                n = t.hasClass("open");
            t.length && (t.remove(), i(e), n && e.next().trigger("click"))
        }) : "destroy" == e ? (this.each(function() {
            var e = o(this),
                t = o(this).next(".nice-select");
            t.length && (t.remove(), e.css("display", ""))
        }), 0 == o(".nice-select").length && o(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;

        function i(e) {
            e.after(o("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var i = e.next(),
                t = e.find("option"),
                e = e.find("option:selected");
            i.find(".current").html(e.data("display") || e.text()), t.each(function(e) {
                var t = o(this),
                    n = t.data("display");
                i.find("ul").append(o("<li></li>").attr("data-value", t.val()).attr("data-display", n || null).addClass("option" + (t.is(":selected") ? " selected" : "") + (t.is(":disabled") ? " disabled" : "")).html(t.text()))
            })
        }
        this.hide(), this.each(function() {
            var e = o(this);
            e.next().hasClass("nice-select") || i(e)
        }), o(document).off(".nice_select"), o(document).on("click.nice_select", ".nice-select", function(e) {
            var t = o(this);
            o(".nice-select").not(t).removeClass("open"), t.toggleClass("open"), t.hasClass("open") ? (t.find(".option"), t.find(".focus").removeClass("focus"), t.find(".selected").addClass("focus")) : t.focus()
        }), o(document).on("click.nice_select", function(e) {
            0 === o(e.target).closest(".nice-select").length && o(".nice-select").removeClass("open").find(".option")
        }), o(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(e) {
            var t = o(this),
                n = t.closest(".nice-select");
            n.find(".selected").removeClass("selected"), t.addClass("selected");
            var i = t.data("display") || t.text();
            n.find(".current").text(i), n.prev("select").val(t.data("value")).trigger("change")
        }), o(document).on("keydown.nice_select", ".nice-select", function(e) {
            var t, n = o(this),
                i = o(n.find(".focus") || n.find(".list .option.selected"));
            if (32 == e.keyCode || 13 == e.keyCode) return (n.hasClass("open") ? i : n).trigger("click"), !1;
            if (40 == e.keyCode) return n.hasClass("open") ? 0 < (t = i.nextAll(".option:not(.disabled)").first()).length && (n.find(".focus").removeClass("focus"), t.addClass("focus")) : n.trigger("click"), !1;
            if (38 == e.keyCode) return n.hasClass("open") ? 0 < (i = i.prevAll(".option:not(.disabled)").first()).length && (n.find(".focus").removeClass("focus"), i.addClass("focus")) : n.trigger("click"), !1;
            if (27 == e.keyCode) n.hasClass("open") && n.trigger("click");
            else if (9 == e.keyCode && n.hasClass("open")) return !1
        });
        e = document.createElement("a").style;
        return e.cssText = "pointer-events:auto", "auto" !== e.pointerEvents && o("html").addClass("no-csspointerevents"), this
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}(function(c) {
    function e() {}

    function u(e, t) {
        f.ev.on("mfp" + e + b, t)
    }

    function d(e, t, n, i) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e, n && (o.innerHTML = n), i ? t && t.appendChild(o) : (o = c(o), t && o.appendTo(t)), o
    }

    function p(e, t) {
        f.ev.triggerHandler("mfp" + e, t), f.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), f.st.callbacks[e] && f.st.callbacks[e].apply(f, c.isArray(t) ? t : [t]))
    }

    function h(e) {
        return e === t && f.currTemplate.closeBtn || (f.currTemplate.closeBtn = c(f.st.closeMarkup.replace("%title%", f.st.tClose)), t = e), f.currTemplate.closeBtn
    }

    function r() {
        c.magnificPopup.instance || ((f = new e).init(), c.magnificPopup.instance = f)
    }
    var f, i, m, o, g, t, l = "Close",
        y = "BeforeClose",
        v = "MarkupParse",
        w = "Open",
        b = ".mfp",
        x = "mfp-ready",
        n = "mfp-removing",
        s = "mfp-prevent-close",
        a = !!window.jQuery,
        _ = c(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            f.isLowIE = f.isIE8 = document.all && !document.addEventListener, f.isAndroid = /android/gi.test(e), f.isIOS = /iphone|ipad|ipod/gi.test(e), f.supportsTransition = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), f.probablyMobile = f.isAndroid || f.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), m = c(document), f.popupsCache = {}
        },
        open: function(e) {
            if (!1 === e.isObj) {
                f.items = e.items.toArray(), f.index = 0;
                for (var t, n = e.items, i = 0; i < n.length; i++)
                    if ((t = n[i]).parsed && (t = t.el[0]), t === e.el[0]) {
                        f.index = i;
                        break
                    }
            } else f.items = c.isArray(e.items) ? e.items : [e.items], f.index = e.index || 0;
            if (!f.isOpen) {
                f.types = [], g = "", e.mainEl && e.mainEl.length ? f.ev = e.mainEl.eq(0) : f.ev = m, e.key ? (f.popupsCache[e.key] || (f.popupsCache[e.key] = {}), f.currTemplate = f.popupsCache[e.key]) : f.currTemplate = {}, f.st = c.extend(!0, {}, c.magnificPopup.defaults, e), f.fixedContentPos = "auto" === f.st.fixedContentPos ? !f.probablyMobile : f.st.fixedContentPos, f.st.modal && (f.st.closeOnContentClick = !1, f.st.closeOnBgClick = !1, f.st.showCloseBtn = !1, f.st.enableEscapeKey = !1), f.bgOverlay || (f.bgOverlay = d("bg").on("click" + b, function() {
                    f.close()
                }), f.wrap = d("wrap").attr("tabindex", -1).on("click" + b, function(e) {
                    f._checkIfClose(e.target) && f.close()
                }), f.container = d("container", f.wrap)), f.contentContainer = d("content"), f.st.preloader && (f.preloader = d("preloader", f.container, f.st.tLoading));
                var o = c.magnificPopup.modules;
                for (i = 0; i < o.length; i++) {
                    var r = (r = o[i]).charAt(0).toUpperCase() + r.slice(1);
                    f["init" + r].call(f)
                }
                p("BeforeOpen"), f.st.showCloseBtn && (f.st.closeBtnInside ? (u(v, function(e, t, n, i) {
                    n.close_replaceWith = h(i.type)
                }), g += " mfp-close-btn-in") : f.wrap.append(h())), f.st.alignTop && (g += " mfp-align-top"), f.fixedContentPos ? f.wrap.css({
                    overflow: f.st.overflowY,
                    overflowX: "hidden",
                    overflowY: f.st.overflowY
                }) : f.wrap.css({
                    top: _.scrollTop(),
                    position: "absolute"
                }), !1 !== f.st.fixedBgPos && ("auto" !== f.st.fixedBgPos || f.fixedContentPos) || f.bgOverlay.css({
                    height: m.height(),
                    position: "absolute"
                }), f.st.enableEscapeKey && m.on("keyup" + b, function(e) {
                    27 === e.keyCode && f.close()
                }), _.on("resize" + b, function() {
                    f.updateSize()
                }), f.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && f.wrap.addClass(g);
                var s = f.wH = _.height(),
                    a = {};
                f.fixedContentPos && (!f._hasScrollBar(s) || (l = f._getScrollbarSize()) && (a.marginRight = l)), f.fixedContentPos && (f.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");
                var l = f.st.mainClass;
                return f.isIE7 && (l += " mfp-ie7"), l && f._addClassToMFP(l), f.updateItemHTML(), p("BuildControls"), c("html").css(a), f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo || c(document.body)), f._lastFocusedEl = document.activeElement, setTimeout(function() {
                    f.content ? (f._addClassToMFP(x), f._setFocus()) : f.bgOverlay.addClass(x), m.on("focusin" + b, f._onFocusIn)
                }, 16), f.isOpen = !0, f.updateSize(s), p(w), e
            }
            f.updateItemHTML()
        },
        close: function() {
            f.isOpen && (p(y), f.isOpen = !1, f.st.removalDelay && !f.isLowIE && f.supportsTransition ? (f._addClassToMFP(n), setTimeout(function() {
                f._close()
            }, f.st.removalDelay)) : f._close())
        },
        _close: function() {
            p(l);
            var e = n + " " + x + " ";
            f.bgOverlay.detach(), f.wrap.detach(), f.container.empty(), f.st.mainClass && (e += f.st.mainClass + " "), f._removeClassFromMFP(e), f.fixedContentPos && (e = {
                marginRight: ""
            }, f.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e)), m.off("keyup.mfp focusin" + b), f.ev.off(b), f.wrap.attr("class", "mfp-wrap").removeAttr("style"), f.bgOverlay.attr("class", "mfp-bg"), f.container.attr("class", "mfp-container"), !f.st.showCloseBtn || f.st.closeBtnInside && !0 !== f.currTemplate[f.currItem.type] || f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach(), f.st.autoFocusLast && f._lastFocusedEl && c(f._lastFocusedEl).focus(), f.currItem = null, f.content = null, f.currTemplate = null, f.prevHeight = 0, p("AfterClose")
        },
        updateSize: function(e) {
            var t;
            f.isIOS ? (t = document.documentElement.clientWidth / window.innerWidth, t = window.innerHeight * t, f.wrap.css("height", t), f.wH = t) : f.wH = e || _.height(), f.fixedContentPos || f.wrap.css("height", f.wH), p("Resize")
        },
        updateItemHTML: function() {
            var e = f.items[f.index];
            f.contentContainer.detach(), f.content && f.content.detach(), e.parsed || (e = f.parseEl(f.index));
            var t = e.type;
            p("BeforeChange", [f.currItem ? f.currItem.type : "", t]), f.currItem = e, f.currTemplate[t] || (n = !!f.st[t] && f.st[t].markup, p("FirstMarkupParse", n), f.currTemplate[t] = !n || c(n)), o && o !== e.type && f.container.removeClass("mfp-" + o + "-holder");
            var n = f["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, f.currTemplate[t]);
            f.appendContent(n, t), e.preloaded = !0, p("Change", e), o = e.type, f.container.prepend(f.contentContainer), p("AfterChange")
        },
        appendContent: function(e, t) {
            (f.content = e) ? f.st.showCloseBtn && f.st.closeBtnInside && !0 === f.currTemplate[t] ? f.content.find(".mfp-close").length || f.content.append(h()) : f.content = e: f.content = "", p("BeforeAppend"), f.container.addClass("mfp-" + t + "-holder"), f.contentContainer.append(f.content)
        },
        parseEl: function(e) {
            var t, n = f.items[e];
            if ((n = n.tagName ? {
                    el: c(n)
                } : (t = n.type, {
                    data: n,
                    src: n.src
                })).el) {
                for (var i = f.types, o = 0; o < i.length; o++)
                    if (n.el.hasClass("mfp-" + i[o])) {
                        t = i[o];
                        break
                    } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || f.st.type || "inline", n.index = e, n.parsed = !0, f.items[e] = n, p("ElementParse", n), f.items[e]
        },
        addGroup: function(t, n) {
            function e(e) {
                e.mfpEl = this, f._openClick(e, t, n)
            }
            var i = "click.magnificPopup";
            (n = n || {}).mainEl = t, n.items ? (n.isObj = !0, t.off(i).on(i, e)) : (n.isObj = !1, n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n : c.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var i = (void 0 !== n.disableOn ? n : c.magnificPopup.defaults).disableOn;
                if (i)
                    if (c.isFunction(i)) {
                        if (!i.call(f)) return !0
                    } else if (_.width() < i) return !0;
                e.type && (e.preventDefault(), f.isOpen && e.stopPropagation()), n.el = c(e.mfpEl), n.delegate && (n.items = t.find(n.delegate)), f.open(n)
            }
        },
        updateStatus: function(e, t) {
            var n;
            f.preloader && (i !== e && f.container.removeClass("mfp-s-" + i), t || "loading" !== e || (t = f.st.tLoading), p("UpdateStatus", n = {
                status: e,
                text: t
            }), e = n.status, t = n.text, f.preloader.html(t), f.preloader.find("a").on("click", function(e) {
                e.stopImmediatePropagation()
            }), f.container.addClass("mfp-s-" + e), i = e)
        },
        _checkIfClose: function(e) {
            if (!c(e).hasClass(s)) {
                var t = f.st.closeOnContentClick,
                    n = f.st.closeOnBgClick;
                if (t && n) return !0;
                if (!f.content || c(e).hasClass("mfp-close") || f.preloader && e === f.preloader[0]) return !0;
                if (e === f.content[0] || c.contains(f.content[0], e)) {
                    if (t) return !0
                } else if (n && c.contains(document, e)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            f.bgOverlay.addClass(e), f.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), f.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (f.isIE7 ? m.height() : document.body.scrollHeight) > (e || _.height())
        },
        _setFocus: function() {
            (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus()
        },
        _onFocusIn: function(e) {
            if (e.target !== f.wrap[0] && !c.contains(f.wrap[0], e.target)) return f._setFocus(), !1
        },
        _parseMarkup: function(o, e, t) {
            var r;
            t.data && (e = c.extend(t.data, e)), p(v, [o, e, t]), c.each(e, function(e, t) {
                return void 0 === t || !1 === t || void(1 < (r = e.split("_")).length ? 0 < (n = o.find(b + "-" + r[0])).length && ("replaceWith" === (i = r[1]) ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(c("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(r[1], t)) : o.find(b + "-" + e).html(t));
                var n, i
            })
        },
        _getScrollbarSize: function() {
            var e;
            return void 0 === f.scrollbarSize && ((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), f.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), f.scrollbarSize
        }
    }, c.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return r(), (e = e ? c.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e)
        },
        close: function() {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (c.magnificPopup.defaults[e] = t.options), c.extend(this.proto, t.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, c.fn.magnificPopup = function(e) {
        r();
        var t, n, i, o = c(this);
        return "string" == typeof e ? "open" === e ? (t = a ? o.data("magnificPopup") : o[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, i = t.items ? t.items[n] : (i = o, t.delegate && (i = i.find(t.delegate)), i.eq(n)), f._openClick({
            mfpEl: i
        }, o, t)) : f.isOpen && f[e].apply(f, Array.prototype.slice.call(arguments, 1)) : (e = c.extend(!0, {}, e), a ? o.data("magnificPopup", e) : o[0].magnificPopup = e, f.addGroup(o, e)), o
    };

    function C() {
        S && (E.after(S.addClass(T)).detach(), S = null)
    }
    var T, E, S, A = "inline";
    c.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                f.types.push(A), u(l + "." + A, function() {
                    C()
                })
            },
            getInline: function(e, t) {
                if (C(), e.src) {
                    var n, i = f.st.inline,
                        o = c(e.src);
                    return o.length ? ((n = o[0].parentNode) && n.tagName && (E || (T = i.hiddenClass, E = d(T), T = "mfp-" + T), S = o.after(E).detach().removeClass(T)), f.updateStatus("ready")) : (f.updateStatus("error", i.tNotFound), o = c("<div>")), e.inlineElement = o
                }
                return f.updateStatus("ready"), f._parseMarkup(t, {}, e), t
            }
        }
    });

    function k() {
        $ && c(document.body).removeClass($)
    }

    function I() {
        k(), f.req && f.req.abort()
    }
    var $, j = "ajax";
    c.magnificPopup.registerModule(j, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                f.types.push(j), $ = f.st.ajax.cursor, u(l + "." + j, I), u("BeforeChange." + j, I)
            },
            getAjax: function(i) {
                $ && c(document.body).addClass($), f.updateStatus("loading");
                var e = c.extend({
                    url: i.src,
                    success: function(e, t, n) {
                        n = {
                            data: e,
                            xhr: n
                        };
                        p("ParseAjax", n), f.appendContent(c(n.data), j), i.finished = !0, k(), f._setFocus(), setTimeout(function() {
                            f.wrap.addClass(x)
                        }, 16), f.updateStatus("ready"), p("AjaxContentAdded")
                    },
                    error: function() {
                        k(), i.finished = i.loadError = !0, f.updateStatus("error", f.st.ajax.tError.replace("%url%", i.src))
                    }
                }, f.st.ajax.settings);
                return f.req = c.ajax(e), ""
            }
        }
    });
    var D;
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = f.st.image,
                    t = ".image";
                f.types.push("image"), u(w + t, function() {
                    "image" === f.currItem.type && e.cursor && c(document.body).addClass(e.cursor)
                }), u(l + t, function() {
                    e.cursor && c(document.body).removeClass(e.cursor), _.off("resize" + b)
                }), u("Resize" + t, f.resizeImage), f.isLowIE && u("AfterChange", f.resizeImage)
            },
            resizeImage: function() {
                var e, t = f.currItem;
                t && t.img && f.st.image.verticalFit && (e = 0, f.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", f.wH - e))
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, D && clearInterval(D), e.isCheckingImgSize = !1, p("ImageHasSize", e), e.imgHidden && (f.content && f.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0,
                    i = t.img[0],
                    o = function(e) {
                        D && clearInterval(D), D = setInterval(function() {
                            0 < i.naturalWidth ? f._onImageHasSize(t) : (200 < n && clearInterval(D), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))
                        }, e)
                    };
                o(1)
            },
            getImage: function(e, t) {
                var n, i = 0,
                    o = function() {
                        e && (e.img[0].complete ? (e.img.off(".mfploader"), e === f.currItem && (f._onImageHasSize(e), f.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, p("ImageLoadComplete")) : ++i < 200 ? setTimeout(o, 100) : r())
                    },
                    r = function() {
                        e && (e.img.off(".mfploader"), e === f.currItem && (f._onImageHasSize(e), f.updateStatus("error", s.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
                    },
                    s = f.st.image,
                    a = t.find(".mfp-img");
                return a.length && ((n = document.createElement("img")).className = "mfp-img", e.el && e.el.find("img").length && (n.alt = e.el.find("img").attr("alt")), e.img = c(n).on("load.mfploader", o).on("error.mfploader", r), n.src = e.src, a.is("img") && (e.img = e.img.clone()), 0 < (n = e.img[0]).naturalWidth ? e.hasSize = !0 : n.width || (e.hasSize = !1)), f._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title) return e.data.title;
                        var t = f.st.image.titleSrc;
                        if (t) {
                            if (c.isFunction(t)) return t.call(f, e);
                            if (e.el) return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e), f.resizeImage(), e.hasSize ? (D && clearInterval(D), e.loadError ? (t.addClass("mfp-loading"), f.updateStatus("error", s.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), f.updateStatus("ready"))) : (f.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), f.findImageSize(e))), t
            }
        }
    });
    var P;
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, t, n, i, o, r, s = f.st.zoom,
                    a = ".zoom";
                s.enabled && f.supportsTransition && (t = s.duration, n = function(e) {
                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                        n = "all " + s.duration / 1e3 + "s " + s.easing,
                        i = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        },
                        e = "transition";
                    return i["-webkit-" + e] = i["-moz-" + e] = i["-o-" + e] = i[e] = n, t.css(i), t
                }, i = function() {
                    f.content.css("visibility", "visible")
                }, u("BuildControls" + a, function() {
                    f._allowZoom() && (clearTimeout(o), f.content.css("visibility", "hidden"), (e = f._getItemToZoom()) ? ((r = n(e)).css(f._getOffset()), f.wrap.append(r), o = setTimeout(function() {
                        r.css(f._getOffset(!0)), o = setTimeout(function() {
                            i(), setTimeout(function() {
                                r.remove(), e = r = null, p("ZoomAnimationEnded")
                            }, 16)
                        }, t)
                    }, 16)) : i())
                }), u(y + a, function() {
                    if (f._allowZoom()) {
                        if (clearTimeout(o), f.st.removalDelay = t, !e) {
                            if (!(e = f._getItemToZoom())) return;
                            r = n(e)
                        }
                        r.css(f._getOffset(!0)), f.wrap.append(r), f.content.css("visibility", "hidden"), setTimeout(function() {
                            r.css(f._getOffset())
                        }, 16)
                    }
                }), u(l + a, function() {
                    f._allowZoom() && (i(), r && r.remove(), e = null)
                }))
            },
            _allowZoom: function() {
                return "image" === f.currItem.type
            },
            _getItemToZoom: function() {
                return !!f.currItem.hasSize && f.currItem.img
            },
            _getOffset: function(e) {
                var t = e ? f.currItem.img : f.st.zoom.opener(f.currItem.el || f.currItem),
                    n = t.offset(),
                    i = parseInt(t.css("padding-top"), 10),
                    e = parseInt(t.css("padding-bottom"), 10);
                n.top -= c(window).scrollTop() - i;
                i = {
                    width: t.width(),
                    height: (a ? t.innerHeight() : t[0].offsetHeight) - e - i
                };
                return void 0 === P && (P = void 0 !== document.createElement("p").style.MozTransform), P ? i["-moz-transform"] = i.transform = "translate(" + n.left + "px," + n.top + "px)" : (i.left = n.left, i.top = n.top), i
            }
        }
    });

    function L(e) {
        var t;
        !f.currTemplate[O] || (t = f.currTemplate[O].find("iframe")).length && (e || (t[0].src = "//about:blank"), f.isIE8 && t.css("display", e ? "block" : "none"))
    }
    var O = "iframe";
    c.magnificPopup.registerModule(O, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                f.types.push(O), u("BeforeChange", function(e, t, n) {
                    t !== n && (t === O ? L() : n === O && L(!0))
                }), u(l + "." + O, function() {
                    L()
                })
            },
            getIframe: function(e, t) {
                var n = e.src,
                    i = f.st.iframe;
                c.each(i.patterns, function() {
                    if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1
                });
                var o = {};
                return i.srcAction && (o[i.srcAction] = n), f._parseMarkup(t, o, e), f.updateStatus("ready"), t
            }
        }
    });

    function N(e) {
        var t = f.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }

    function M(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var r = f.st.gallery,
                    e = ".mfp-gallery";
                if (f.direction = !0, !r || !r.enabled) return !1;
                g += " mfp-gallery", u(w + e, function() {
                    r.navigateByImgClick && f.wrap.on("click" + e, ".mfp-img", function() {
                        if (1 < f.items.length) return f.next(), !1
                    }), m.on("keydown" + e, function(e) {
                        37 === e.keyCode ? f.prev() : 39 === e.keyCode && f.next()
                    })
                }), u("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = M(t.text, f.currItem.index, f.items.length))
                }), u(v + e, function(e, t, n, i) {
                    var o = f.items.length;
                    n.counter = 1 < o ? M(r.tCounter, i.index, o) : ""
                }), u("BuildControls" + e, function() {
                    var e, t;
                    1 < f.items.length && r.arrows && !f.arrowLeft && (t = r.arrowMarkup, e = f.arrowLeft = c(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(s), t = f.arrowRight = c(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(s), e.click(function() {
                        f.prev()
                    }), t.click(function() {
                        f.next()
                    }), f.container.append(e.add(t)))
                }), u("Change" + e, function() {
                    f._preloadTimeout && clearTimeout(f._preloadTimeout), f._preloadTimeout = setTimeout(function() {
                        f.preloadNearbyImages(), f._preloadTimeout = null
                    }, 16)
                }), u(l + e, function() {
                    m.off(e), f.wrap.off("click" + e), f.arrowRight = f.arrowLeft = null
                })
            },
            next: function() {
                f.direction = !0, f.index = N(f.index + 1), f.updateItemHTML()
            },
            prev: function() {
                f.direction = !1, f.index = N(f.index - 1), f.updateItemHTML()
            },
            goTo: function(e) {
                f.direction = e >= f.index, f.index = e, f.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var e = f.st.gallery.preload, t = Math.min(e[0], f.items.length), n = Math.min(e[1], f.items.length), i = 1; i <= (f.direction ? n : t); i++) f._preloadItem(f.index + i);
                for (i = 1; i <= (f.direction ? t : n); i++) f._preloadItem(f.index - i)
            },
            _preloadItem: function(e) {
                var t;
                e = N(e), f.items[e].preloaded || ((t = f.items[e]).parsed || (t = f.parseEl(e)), p("LazyLoad", t), "image" === t.type && (t.img = c('<img class="mfp-img" />').on("load.mfploader", function() {
                    t.hasSize = !0
                }).on("error.mfploader", function() {
                    t.hasSize = !0, t.loadError = !0, p("LazyLoadError", t)
                }).attr("src", t.src)), t.preloaded = !0)
            }
        }
    });
    var z = "retina";
    c.magnificPopup.registerModule(z, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                var n, i;
                1 < window.devicePixelRatio && (n = f.st.retina, i = n.ratio, 1 < (i = isNaN(i) ? i() : i) && (u("ImageHasSize." + z, function(e, t) {
                    t.img.css({
                        "max-width": t.img[0].naturalWidth / i,
                        width: "100%"
                    })
                }), u("ElementParse." + z, function(e, t) {
                    t.src = n.replaceSrc(t, i)
                })))
            }
        }
    }), r()
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(r, i) {
    var n = "plugin_hideShowPassword",
        o = ["show", "innerToggle"],
        t = {
            show: "infer",
            innerToggle: !1,
            enable: function() {
                var e = document.body,
                    t = document.createElement("input"),
                    n = !0,
                    t = (e = e || document.createElement("body")).appendChild(t);
                try {
                    t.setAttribute("type", "text")
                } catch (e) {
                    n = !1
                }
                return e.removeChild(t), n
            }(),
            triggerOnToggle: !1,
            className: "hideShowPassword-field",
            initEvent: "hideShowPasswordInit",
            changeEvent: "passwordVisibilityChange",
            props: {
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                spellcheck: "false"
            },
            toggle: {
                element: '<button type="button">',
                className: "hideShowPassword-toggle",
                touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
                attachToEvent: "click.hideShowPassword",
                attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
                attachToKeyEvent: "keyup",
                attachToKeyCodes: !0,
                styles: {
                    position: "absolute"
                },
                touchStyles: {
                    pointerEvents: "none"
                },
                position: "infer",
                verticalAlign: "middle",
                offset: 0,
                attr: {
                    role: "button",
                    "aria-label": "Show Password",
                    title: "Show Password",
                    tabIndex: 0
                }
            },
            wrapper: {
                element: "<div>",
                className: "hideShowPassword-wrapper",
                enforceWidth: !1,
                styles: {
                    position: "relative"
                },
                inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
                innerElementStyles: {
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0
                }
            },
            states: {
                shown: {
                    className: "hideShowPassword-shown",
                    changeEvent: "passwordShown",
                    props: {
                        type: "text"
                    },
                    toggle: {
                        className: "hideShowPassword-toggle-hide",
                        content: '<i class="bi bi-eye-slash"></i>',
                        attr: {
                            "aria-pressed": "true",
                            title: "Hide Password"
                        }
                    }
                },
                hidden: {
                    className: "hideShowPassword-hidden",
                    changeEvent: "passwordHidden",
                    props: {
                        type: "password"
                    },
                    toggle: {
                        className: "hideShowPassword-toggle-show",
                        content: '<i class="bi bi-eye"></i>',
                        attr: {
                            "aria-pressed": "false",
                            title: "Show Password"
                        }
                    }
                }
            }
        };

    function s(e, t) {
        this.element = r(e), this.wrapperElement = r(), this.toggleElement = r(), this.init(t)
    }
    s.prototype = {
        init: function(e) {
            this.update(e, t) && (this.element.addClass(this.options.className), this.options.innerToggle && (this.wrapElement(this.options.wrapper), this.initToggle(this.options.toggle), "string" == typeof this.options.innerToggle && (this.toggleElement.hide(), this.element.one(this.options.innerToggle, r.proxy(function() {
                this.toggleElement.show()
            }, this)))), this.element.trigger(this.options.initEvent, [this]))
        },
        update: function(e, t) {
            return this.options = this.prepareOptions(e, t), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable
        },
        toggle: function(e) {
            return e = e || "toggle", this.update({
                show: e
            })
        },
        prepareOptions: function(e, t) {
            var n, i = e || {},
                o = [];
            if (t = t || this.options, e = r.extend(!0, {}, t, e), i.hasOwnProperty("wrapper") && i.wrapper.hasOwnProperty("inheritStyles") && (e.wrapper.inheritStyles = i.wrapper.inheritStyles), e.enable && ("toggle" === e.show ? e.show = this.isType("hidden", e.states) : "infer" === e.show && (e.show = this.isType("shown", e.states)), "infer" === e.toggle.position && (e.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"), !r.isArray(e.toggle.attachToKeyCodes))) {
                if (!0 === e.toggle.attachToKeyCodes) switch ((n = r(e.toggle.element)).prop("tagName").toLowerCase()) {
                    case "button":
                    case "input":
                        break;
                    case "a":
                        if (n.filter("[href]").length) {
                            o.push(32);
                            break
                        }
                    default:
                        o.push(32, 13)
                }
                e.toggle.attachToKeyCodes = o
            }
            return e
        },
        updateElement: function() {
            return !(!this.options.enable || this.isType()) && (this.element.prop(r.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className), this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]), this.updateToggle(), !0)
        },
        isType: function(e, t) {
            return (t = t || this.options.states)[e = e || this.state(i, i, t).props.type] && (e = t[e].props.type), this.element.prop("type") === e
        },
        state: function(e, t, n) {
            return n = n || this.options.states, e === i && (e = this.options.show), "boolean" == typeof e && (e = e ? "shown" : "hidden"), t && (e = "shown" === e ? "hidden" : "shown"), n[e]
        },
        otherState: function(e) {
            return this.state(e, !0)
        },
        wrapElement: function(n) {
            var e, t = n.enforceWidth;
            return this.wrapperElement.length || (e = this.element.outerWidth(), r.each(n.inheritStyles, r.proxy(function(e, t) {
                n.styles[t] = this.element.css(t)
            }, this)), this.element.css(n.innerElementStyles).wrap(r(n.element).addClass(n.className).css(n.styles)), this.wrapperElement = this.element.parent(), !0 === t && (t = this.wrapperElement.outerWidth() !== e && e), !1 !== t && this.wrapperElement.css("width", t)), this.wrapperElement
        },
        initToggle: function(e) {
            return this.toggleElement.length || (this.toggleElement = r(e.element).attr(e.attr).addClass(e.className).css(e.styles).appendTo(this.wrapperElement), this.updateToggle(), this.positionToggle(e.position, e.verticalAlign, e.offset), e.touchSupport ? (this.toggleElement.css(e.touchStyles), this.element.on(e.attachToTouchEvent, r.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(e.attachToEvent, r.proxy(this.toggleEvent, this)), e.attachToKeyCodes.length && this.toggleElement.on(e.attachToKeyEvent, r.proxy(this.toggleKeyEvent, this))), this.toggleElement
        },
        positionToggle: function(e, t, n) {
            var i = {};
            switch (i[e] = n, t) {
                case "top":
                case "bottom":
                    i[t] = n;
                    break;
                case "middle":
                    i.top = "50%", i.marginTop = this.toggleElement.outerHeight() / -2
            }
            return this.toggleElement.css(i)
        },
        updateToggle: function(e, t) {
            var n;
            return this.toggleElement.length && (n = "padding-" + this.options.toggle.position, e = e || this.state().toggle, t = t || this.otherState().toggle, this.toggleElement.attr(e.attr).addClass(e.className).removeClass(t.className).html(e.content), e = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset, this.element.css(n) !== e && this.element.css(n, e)), this.toggleElement
        },
        toggleEvent: function(e) {
            e.preventDefault(), this.toggle()
        },
        toggleKeyEvent: function(n) {
            r.each(this.options.toggle.attachToKeyCodes, r.proxy(function(e, t) {
                if (n.which === t) return this.toggleEvent(n), !1
            }, this))
        },
        toggleTouchEvent: function(e) {
            var t, n, i = this.toggleElement.offset().left;
            i && (n = e.pageX || e.originalEvent.pageX, n = "left" === this.options.toggle.position ? (t = n, i += this.toggleElement.outerWidth()) : (t = i, n), t <= n && this.toggleEvent(e))
        }
    }, r.fn.hideShowPassword = function() {
        var i = {};
        return r.each(arguments, function(e, t) {
            var n = {};
            if ("object" == typeof t) n = t;
            else {
                if (!o[e]) return !1;
                n[o[e]] = t
            }
            r.extend(!0, i, n)
        }), this.each(function() {
            var e = r(this),
                t = e.data(n);
            t ? t.update(i) : e.data(n, new s(this, i))
        })
    }, r.each({
        show: !0,
        hide: !1,
        toggle: "toggle"
    }, function(e, n) {
        r.fn[e + "Password"] = function(e, t) {
            return this.hideShowPassword(n, e, t)
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(i) {
    "use strict";
    var o = [],
        t = [],
        r = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    t.push(/^[0-9]*$/.source), t.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), t.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), t = new RegExp(t.join("|"));
    var u = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    };

    function n(c) {
        return function(e) {
            var t = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (t)
                for (var n = 0, i = t.length; n < i; ++n) {
                    var o = t[n].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        r = (l = (l = o[0]).toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(l)),
                        s = o[1] || "",
                        a = o[3] || "",
                        l = null,
                        o = o[2];
                    u.hasOwnProperty(o) && (l = u[o], l = Number(c[l])), null !== l && ("!" === s && (l = function(e, t) {
                        var n = "s",
                            i = "";
                        e && (e = e.replace(/(:|;|\s)/gi, "").split(/\,/), n = 1 === e.length ? e[0] : (i = e[0], e[1]));
                        return 1 < Math.abs(t) ? n : i
                    }(a, l)), "" === s && l < 10 && (l = "0" + l.toString()), e = e.replace(r, l.toString()))
                }
            return e = e.replace(/%%/, "%")
        }
    }

    function s(e, t, n) {
        this.el = e, this.$el = i(e), this.interval = null, this.offset = {}, this.options = i.extend({}, r), this.firstTick = !0, this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = i.extend({}, r, n)), this.setFinalDate(t), !1 === this.options.defer && this.start()
    }
    i.extend(s.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var e = this;
            this.update(), this.interval = setInterval(function() {
                e.update.call(e)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(e) {
            this.finalDate = function(e) {
                if (e instanceof Date) return e;
                if (String(e).match(t)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
                throw new Error("Couldn't cast `" + e + "` to a date object.")
            }(e)
        },
        update: function() {
            var e, t;
            0 !== this.$el.closest("html").length ? (e = new Date, t = this.finalDate.getTime() - e.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft === t || this.firstTick ? this.firstTick = !1 : (this.totalSecsLeft = t, this.elapsed = e >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))) : this.remove()
        },
        dispatchEvent: function(e) {
            e = i.Event(e + ".countdown");
            e.finalDate = this.finalDate, e.elapsed = this.elapsed, e.offset = i.extend({}, this.offset), e.strftime = n(this.offset), this.$el.trigger(e)
        }
    }), i.fn.countdown = function() {
        var n = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var e, t = i(this).data("countdown-instance");
            void 0 !== t ? (e = o[t], t = n[0], s.prototype.hasOwnProperty(t) ? e[t].apply(e, n.slice(1)) : null === String(t).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (e.setFinalDate.call(e, t), e.start()) : i.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, t))) : new s(this, n[0], n[1])
        })
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(d) {
    var n = /\+/g;

    function p(e) {
        return f.raw ? e : encodeURIComponent(e)
    }

    function h(e, t) {
        e = f.raw ? e : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(n, " ")), f.json ? JSON.parse(e) : e
            } catch (e) {}
        }(e);
        return d.isFunction(t) ? t(e) : e
    }
    var f = d.cookie = function(e, t, n) {
        var i, o;
        if (1 < arguments.length && !d.isFunction(t)) return "number" == typeof(n = d.extend({}, f.defaults, n)).expires && (o = n.expires, (i = n.expires = new Date).setMilliseconds(i.getMilliseconds() + 864e5 * o)), document.cookie = [p(e), "=", (o = t, p(f.json ? JSON.stringify(o) : String(o))), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("");
        for (var r = e ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], a = 0, l = s.length; a < l; a++) {
            var c = s[a].split("="),
                u = (u = c.shift(), f.raw ? u : decodeURIComponent(u)),
                c = c.join("=");
            if (e === u) {
                r = h(c, t);
                break
            }
            e || void 0 === (c = h(c)) || (r[u] = c)
        }
        return r
    };
    f.defaults = {}, d.removeCookie = function(e, t) {
        return d.cookie(e, "", d.extend({}, t, {
            expires: -1
        })), !d.cookie(e)
    }
}), setTimeout(function() {
    $(".popup_wrapper").css("opacity", "1")
}, 2e3), $(".popup_wrapper"), $(".popup_close").on("click", function() {
    $(".popup_wrapper").fadeOut(300), $.cookie("cookie_popup", "monster", {
        expires: 7,
        path: "/"
    })
}), void 0 === $.cookie("cookie_popup") ? $(".popup_wrapper").removeClass("cookie_popup") : $(".popup_wrapper").addClass("cookie_popup");