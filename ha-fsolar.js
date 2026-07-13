var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i7 = decorators.length - 1, decorator; i7 >= 0; i7--)
    if (decorator = decorators[i7])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// node_modules/apexcharts/dist/apexcharts.common.js
var require_apexcharts_common = __commonJS({
  "node_modules/apexcharts/dist/apexcharts.common.js"(exports, module) {
    "use strict";
    function t4(t5, e8) {
      (null == e8 || e8 > t5.length) && (e8 = t5.length);
      for (var i8 = 0, a4 = Array(e8); i8 < e8; i8++) a4[i8] = t5[i8];
      return a4;
    }
    function e7(t5) {
      if (void 0 === t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t5;
    }
    function i7(t5, e8) {
      if (!(t5 instanceof e8)) throw new TypeError("Cannot call a class as a function");
    }
    function a3(t5, e8) {
      for (var i8 = 0; i8 < e8.length; i8++) {
        var a4 = e8[i8];
        a4.enumerable = a4.enumerable || false, a4.configurable = true, "value" in a4 && (a4.writable = true), Object.defineProperty(t5, x2(a4.key), a4);
      }
    }
    function s4(t5, e8, i8) {
      return e8 && a3(t5.prototype, e8), i8 && a3(t5, i8), Object.defineProperty(t5, "prototype", { writable: false }), t5;
    }
    function r6(t5, e8) {
      var i8 = "undefined" != typeof Symbol && t5[Symbol.iterator] || t5["@@iterator"];
      if (!i8) {
        if (Array.isArray(t5) || (i8 = v2(t5)) || e8 && t5 && "number" == typeof t5.length) {
          i8 && (t5 = i8);
          var a4 = 0, s5 = function() {
          };
          return { s: s5, n: function() {
            return a4 >= t5.length ? { done: true } : { done: false, value: t5[a4++] };
          }, e: function(t6) {
            throw t6;
          }, f: s5 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var r7, o8 = true, n7 = false;
      return { s: function() {
        i8 = i8.call(t5);
      }, n: function() {
        var t6 = i8.next();
        return o8 = t6.done, t6;
      }, e: function(t6) {
        n7 = true, r7 = t6;
      }, f: function() {
        try {
          o8 || null == i8.return || i8.return();
        } finally {
          if (n7) throw r7;
        }
      } };
    }
    function o7(t5) {
      var i8 = c4();
      return function() {
        var a4, s5 = l3(t5);
        if (i8) {
          var r7 = l3(this).constructor;
          a4 = Reflect.construct(s5, arguments, r7);
        } else a4 = s5.apply(this, arguments);
        return function(t6, i9) {
          if (i9 && ("object" == typeof i9 || "function" == typeof i9)) return i9;
          if (void 0 !== i9) throw new TypeError("Derived constructors may only return object or undefined");
          return e7(t6);
        }(this, a4);
      };
    }
    function n6(t5, e8, i8) {
      return (e8 = x2(e8)) in t5 ? Object.defineProperty(t5, e8, { value: i8, enumerable: true, configurable: true, writable: true }) : t5[e8] = i8, t5;
    }
    function l3(t5) {
      return l3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t6) {
        return t6.__proto__ || Object.getPrototypeOf(t6);
      }, l3(t5);
    }
    function h3(t5, e8) {
      if ("function" != typeof e8 && null !== e8) throw new TypeError("Super expression must either be null or a function");
      t5.prototype = Object.create(e8 && e8.prototype, { constructor: { value: t5, writable: true, configurable: true } }), Object.defineProperty(t5, "prototype", { writable: false }), e8 && u3(t5, e8);
    }
    function c4() {
      try {
        var t5 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t6) {
      }
      return (c4 = function() {
        return !!t5;
      })();
    }
    function d3(t5, e8) {
      var i8 = Object.keys(t5);
      if (Object.getOwnPropertySymbols) {
        var a4 = Object.getOwnPropertySymbols(t5);
        e8 && (a4 = a4.filter(function(e9) {
          return Object.getOwnPropertyDescriptor(t5, e9).enumerable;
        })), i8.push.apply(i8, a4);
      }
      return i8;
    }
    function g2(t5) {
      for (var e8 = 1; e8 < arguments.length; e8++) {
        var i8 = null != arguments[e8] ? arguments[e8] : {};
        e8 % 2 ? d3(Object(i8), true).forEach(function(e9) {
          n6(t5, e9, i8[e9]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t5, Object.getOwnPropertyDescriptors(i8)) : d3(Object(i8)).forEach(function(e9) {
          Object.defineProperty(t5, e9, Object.getOwnPropertyDescriptor(i8, e9));
        });
      }
      return t5;
    }
    function u3(t5, e8) {
      return u3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t6, e9) {
        return t6.__proto__ = e9, t6;
      }, u3(t5, e8);
    }
    function f3(t5, e8) {
      return function(t6) {
        if (Array.isArray(t6)) return t6;
      }(t5) || function(t6, e9) {
        var i8 = null == t6 ? null : "undefined" != typeof Symbol && t6[Symbol.iterator] || t6["@@iterator"];
        if (null != i8) {
          var a4, s5, r7, o8, n7 = [], l4 = true, h4 = false;
          try {
            if (r7 = (i8 = i8.call(t6)).next, 0 === e9) {
              if (Object(i8) !== i8) return;
              l4 = false;
            } else for (; !(l4 = (a4 = r7.call(i8)).done) && (n7.push(a4.value), n7.length !== e9); l4 = true) ;
          } catch (t7) {
            h4 = true, s5 = t7;
          } finally {
            try {
              if (!l4 && null != i8.return && (o8 = i8.return(), Object(o8) !== o8)) return;
            } finally {
              if (h4) throw s5;
            }
          }
          return n7;
        }
      }(t5, e8) || v2(t5, e8) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function p3(e8) {
      return function(e9) {
        if (Array.isArray(e9)) return t4(e9);
      }(e8) || function(t5) {
        if ("undefined" != typeof Symbol && null != t5[Symbol.iterator] || null != t5["@@iterator"]) return Array.from(t5);
      }(e8) || v2(e8) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function x2(t5) {
      var e8 = function(t6, e9) {
        if ("object" != typeof t6 || !t6) return t6;
        var i8 = t6[Symbol.toPrimitive];
        if (void 0 !== i8) {
          var a4 = i8.call(t6, e9 || "default");
          if ("object" != typeof a4) return a4;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e9 ? String : Number)(t6);
      }(t5, "string");
      return "symbol" == typeof e8 ? e8 : e8 + "";
    }
    function b3(t5) {
      return b3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t6) {
        return typeof t6;
      } : function(t6) {
        return t6 && "function" == typeof Symbol && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
      }, b3(t5);
    }
    function v2(e8, i8) {
      if (e8) {
        if ("string" == typeof e8) return t4(e8, i8);
        var a4 = {}.toString.call(e8).slice(8, -1);
        return "Object" === a4 && e8.constructor && (a4 = e8.constructor.name), "Map" === a4 || "Set" === a4 ? Array.from(e8) : "Arguments" === a4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a4) ? t4(e8, i8) : void 0;
      }
    }
    var m2 = function() {
      function t5() {
        i7(this, t5);
      }
      return s4(t5, [{ key: "shadeRGBColor", value: function(t6, e8) {
        var i8 = e8.split(","), a4 = t6 < 0 ? 0 : 255, s5 = t6 < 0 ? -1 * t6 : t6, r7 = parseInt(i8[0].slice(4), 10), o8 = parseInt(i8[1], 10), n7 = parseInt(i8[2], 10);
        return "rgb(" + (Math.round((a4 - r7) * s5) + r7) + "," + (Math.round((a4 - o8) * s5) + o8) + "," + (Math.round((a4 - n7) * s5) + n7) + ")";
      } }, { key: "shadeHexColor", value: function(t6, e8) {
        var i8 = parseInt(e8.slice(1), 16), a4 = t6 < 0 ? 0 : 255, s5 = t6 < 0 ? -1 * t6 : t6, r7 = i8 >> 16, o8 = i8 >> 8 & 255, n7 = 255 & i8;
        return "#" + (16777216 + 65536 * (Math.round((a4 - r7) * s5) + r7) + 256 * (Math.round((a4 - o8) * s5) + o8) + (Math.round((a4 - n7) * s5) + n7)).toString(16).slice(1);
      } }, { key: "shadeColor", value: function(e8, i8) {
        return t5.isColorHex(i8) ? this.shadeHexColor(e8, i8) : this.shadeRGBColor(e8, i8);
      } }], [{ key: "bind", value: function(t6, e8) {
        return function() {
          return t6.apply(e8, arguments);
        };
      } }, { key: "isObject", value: function(t6) {
        return t6 && "object" === b3(t6) && !Array.isArray(t6) && null != t6;
      } }, { key: "is", value: function(t6, e8) {
        return Object.prototype.toString.call(e8) === "[object " + t6 + "]";
      } }, { key: "listToArray", value: function(t6) {
        var e8, i8 = [];
        for (e8 = 0; e8 < t6.length; e8++) i8[e8] = t6[e8];
        return i8;
      } }, { key: "extend", value: function(t6, e8) {
        var i8 = this;
        "function" != typeof Object.assign && (Object.assign = function(t7) {
          if (null == t7) throw new TypeError("Cannot convert undefined or null to object");
          for (var e9 = Object(t7), i9 = 1; i9 < arguments.length; i9++) {
            var a5 = arguments[i9];
            if (null != a5) for (var s5 in a5) a5.hasOwnProperty(s5) && (e9[s5] = a5[s5]);
          }
          return e9;
        });
        var a4 = Object.assign({}, t6);
        return this.isObject(t6) && this.isObject(e8) && Object.keys(e8).forEach(function(s5) {
          i8.isObject(e8[s5]) && s5 in t6 ? a4[s5] = i8.extend(t6[s5], e8[s5]) : Object.assign(a4, n6({}, s5, e8[s5]));
        }), a4;
      } }, { key: "extendArray", value: function(e8, i8) {
        var a4 = [];
        return e8.map(function(e9) {
          a4.push(t5.extend(i8, e9));
        }), e8 = a4;
      } }, { key: "monthMod", value: function(t6) {
        return t6 % 12;
      } }, { key: "clone", value: function(e8) {
        if (t5.is("Array", e8)) {
          for (var i8 = [], a4 = 0; a4 < e8.length; a4++) i8[a4] = this.clone(e8[a4]);
          return i8;
        }
        if (t5.is("Null", e8)) return null;
        if (t5.is("Date", e8)) return e8;
        if ("object" === b3(e8)) {
          var s5 = {};
          for (var r7 in e8) e8.hasOwnProperty(r7) && (s5[r7] = this.clone(e8[r7]));
          return s5;
        }
        return e8;
      } }, { key: "log10", value: function(t6) {
        return Math.log(t6) / Math.LN10;
      } }, { key: "roundToBase10", value: function(t6) {
        return Math.pow(10, Math.floor(Math.log10(t6)));
      } }, { key: "roundToBase", value: function(t6, e8) {
        return Math.pow(e8, Math.floor(Math.log(t6) / Math.log(e8)));
      } }, { key: "parseNumber", value: function(t6) {
        return null === t6 ? t6 : parseFloat(t6);
      } }, { key: "stripNumber", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return Number.isInteger(t6) ? t6 : parseFloat(t6.toPrecision(e8));
      } }, { key: "randomId", value: function() {
        return (Math.random() + 1).toString(36).substring(4);
      } }, { key: "noExponents", value: function(t6) {
        var e8 = String(t6).split(/[eE]/);
        if (1 === e8.length) return e8[0];
        var i8 = "", a4 = t6 < 0 ? "-" : "", s5 = e8[0].replace(".", ""), r7 = Number(e8[1]) + 1;
        if (r7 < 0) {
          for (i8 = a4 + "0."; r7++; ) i8 += "0";
          return i8 + s5.replace(/^-/, "");
        }
        for (r7 -= s5.length; r7--; ) i8 += "0";
        return s5 + i8;
      } }, { key: "getDimensions", value: function(t6) {
        var e8 = getComputedStyle(t6, null), i8 = t6.clientHeight, a4 = t6.clientWidth;
        return i8 -= parseFloat(e8.paddingTop) + parseFloat(e8.paddingBottom), [a4 -= parseFloat(e8.paddingLeft) + parseFloat(e8.paddingRight), i8];
      } }, { key: "getBoundingClientRect", value: function(t6) {
        var e8 = t6.getBoundingClientRect();
        return { top: e8.top, right: e8.right, bottom: e8.bottom, left: e8.left, width: t6.clientWidth, height: t6.clientHeight, x: e8.left, y: e8.top };
      } }, { key: "getLargestStringFromArr", value: function(t6) {
        return t6.reduce(function(t7, e8) {
          return Array.isArray(e8) && (e8 = e8.reduce(function(t8, e9) {
            return t8.length > e9.length ? t8 : e9;
          })), t7.length > e8.length ? t7 : e8;
        }, 0);
      } }, { key: "hexToRgba", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999", e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
        "#" !== t6.substring(0, 1) && (t6 = "#999999");
        var i8 = t6.replace("#", "");
        i8 = i8.match(new RegExp("(.{" + i8.length / 3 + "})", "g"));
        for (var a4 = 0; a4 < i8.length; a4++) i8[a4] = parseInt(1 === i8[a4].length ? i8[a4] + i8[a4] : i8[a4], 16);
        return void 0 !== e8 && i8.push(e8), "rgba(" + i8.join(",") + ")";
      } }, { key: "getOpacityFromRGBA", value: function(t6) {
        return parseFloat(t6.replace(/^.*,(.+)\)/, "$1"));
      } }, { key: "rgb2hex", value: function(t6) {
        return (t6 = t6.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t6.length ? "#" + ("0" + parseInt(t6[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t6[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t6[3], 10).toString(16)).slice(-2) : "";
      } }, { key: "isColorHex", value: function(t6) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t6);
      } }, { key: "getPolygonPos", value: function(t6, e8) {
        for (var i8 = [], a4 = 2 * Math.PI / e8, s5 = 0; s5 < e8; s5++) {
          var r7 = {};
          r7.x = t6 * Math.sin(s5 * a4), r7.y = -t6 * Math.cos(s5 * a4), i8.push(r7);
        }
        return i8;
      } }, { key: "polarToCartesian", value: function(t6, e8, i8, a4) {
        var s5 = (a4 - 90) * Math.PI / 180;
        return { x: t6 + i8 * Math.cos(s5), y: e8 + i8 * Math.sin(s5) };
      } }, { key: "escapeString", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", i8 = t6.toString().slice();
        return i8 = i8.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e8);
      } }, { key: "negToZero", value: function(t6) {
        return t6 < 0 ? 0 : t6;
      } }, { key: "moveIndexInArray", value: function(t6, e8, i8) {
        if (i8 >= t6.length) for (var a4 = i8 - t6.length + 1; a4--; ) t6.push(void 0);
        return t6.splice(i8, 0, t6.splice(e8, 1)[0]), t6;
      } }, { key: "extractNumber", value: function(t6) {
        return parseFloat(t6.replace(/[^\d.]*/g, ""));
      } }, { key: "findAncestor", value: function(t6, e8) {
        for (; (t6 = t6.parentElement) && !t6.classList.contains(e8); ) ;
        return t6;
      } }, { key: "setELstyles", value: function(t6, e8) {
        for (var i8 in e8) e8.hasOwnProperty(i8) && (t6.style.key = e8[i8]);
      } }, { key: "preciseAddition", value: function(t6, e8) {
        var i8 = (String(t6).split(".")[1] || "").length, a4 = (String(e8).split(".")[1] || "").length, s5 = Math.pow(10, Math.max(i8, a4));
        return (Math.round(t6 * s5) + Math.round(e8 * s5)) / s5;
      } }, { key: "isNumber", value: function(t6) {
        return !isNaN(t6) && parseFloat(Number(t6)) === t6 && !isNaN(parseInt(t6, 10));
      } }, { key: "isFloat", value: function(t6) {
        return Number(t6) === t6 && t6 % 1 != 0;
      } }, { key: "isSafari", value: function() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      } }, { key: "isFirefox", value: function() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
      } }, { key: "isMsEdge", value: function() {
        var t6 = window.navigator.userAgent, e8 = t6.indexOf("Edge/");
        return e8 > 0 && parseInt(t6.substring(e8 + 5, t6.indexOf(".", e8)), 10);
      } }, { key: "getGCD", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a4 = Math.pow(10, i8 - Math.floor(Math.log10(Math.max(t6, e8))));
        for (t6 = Math.round(Math.abs(t6) * a4), e8 = Math.round(Math.abs(e8) * a4); e8; ) {
          var s5 = e8;
          e8 = t6 % e8, t6 = s5;
        }
        return t6 / a4;
      } }, { key: "getPrimeFactors", value: function(t6) {
        for (var e8 = [], i8 = 2; t6 >= 2; ) t6 % i8 == 0 ? (e8.push(i8), t6 /= i8) : i8++;
        return e8;
      } }, { key: "mod", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a4 = Math.pow(10, i8 - Math.floor(Math.log10(Math.max(t6, e8))));
        return (t6 = Math.round(Math.abs(t6) * a4)) % (e8 = Math.round(Math.abs(e8) * a4)) / a4;
      } }]), t5;
    }();
    var y3 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.setEasingFunctions();
      }
      return s4(t5, [{ key: "setEasingFunctions", value: function() {
        var t6;
        if (!this.w.globals.easing) {
          switch (this.w.config.chart.animations.easing) {
            case "linear":
              t6 = "-";
              break;
            case "easein":
              t6 = "<";
              break;
            case "easeout":
              t6 = ">";
              break;
            case "easeinout":
            default:
              t6 = "<>";
              break;
            case "swing":
              t6 = function(t7) {
                var e8 = 1.70158;
                return (t7 -= 1) * t7 * ((e8 + 1) * t7 + e8) + 1;
              };
              break;
            case "bounce":
              t6 = function(t7) {
                return t7 < 1 / 2.75 ? 7.5625 * t7 * t7 : t7 < 2 / 2.75 ? 7.5625 * (t7 -= 1.5 / 2.75) * t7 + 0.75 : t7 < 2.5 / 2.75 ? 7.5625 * (t7 -= 2.25 / 2.75) * t7 + 0.9375 : 7.5625 * (t7 -= 2.625 / 2.75) * t7 + 0.984375;
              };
              break;
            case "elastic":
              t6 = function(t7) {
                return t7 === !!t7 ? t7 : Math.pow(2, -10 * t7) * Math.sin((t7 - 0.075) * (2 * Math.PI) / 0.3) + 1;
              };
          }
          this.w.globals.easing = t6;
        }
      } }, { key: "animateLine", value: function(t6, e8, i8, a4) {
        t6.attr(e8).animate(a4).attr(i8);
      } }, { key: "animateMarker", value: function(t6, e8, i8, a4) {
        t6.attr({ opacity: 0 }).animate(e8, i8).attr({ opacity: 1 }).afterAll(function() {
          a4();
        });
      } }, { key: "animateRect", value: function(t6, e8, i8, a4, s5) {
        t6.attr(e8).animate(a4).attr(i8).afterAll(function() {
          return s5();
        });
      } }, { key: "animatePathsGradually", value: function(t6) {
        var e8 = t6.el, i8 = t6.realIndex, a4 = t6.j, s5 = t6.fill, r7 = t6.pathFrom, o8 = t6.pathTo, n7 = t6.speed, l4 = t6.delay, h4 = this.w, c5 = 0;
        h4.config.chart.animations.animateGradually.enabled && (c5 = h4.config.chart.animations.animateGradually.delay), h4.config.chart.animations.dynamicAnimation.enabled && h4.globals.dataChanged && "bar" !== h4.config.chart.type && (c5 = 0), this.morphSVG(e8, i8, a4, "line" !== h4.config.chart.type || h4.globals.comboCharts ? s5 : "stroke", r7, o8, n7, l4 * c5);
      } }, { key: "showDelayedElements", value: function() {
        this.w.globals.delayedElements.forEach(function(t6) {
          var e8 = t6.el;
          e8.classList.remove("apexcharts-element-hidden"), e8.classList.add("apexcharts-hidden-element-shown");
        });
      } }, { key: "animationCompleted", value: function(t6) {
        var e8 = this.w;
        e8.globals.animationEnded || (e8.globals.animationEnded = true, this.showDelayedElements(), "function" == typeof e8.config.chart.events.animationEnd && e8.config.chart.events.animationEnd(this.ctx, { el: t6, w: e8 }));
      } }, { key: "morphSVG", value: function(t6, e8, i8, a4, s5, r7, o8, n7) {
        var l4 = this, h4 = this.w;
        s5 || (s5 = t6.attr("pathFrom")), r7 || (r7 = t6.attr("pathTo"));
        var c5 = function(t7) {
          return "radar" === h4.config.chart.type && (o8 = 1), "M 0 ".concat(h4.globals.gridHeight);
        };
        (!s5 || s5.indexOf("undefined") > -1 || s5.indexOf("NaN") > -1) && (s5 = c5()), (!r7 || r7.indexOf("undefined") > -1 || r7.indexOf("NaN") > -1) && (r7 = c5()), h4.globals.shouldAnimate || (o8 = 1), t6.plot(s5).animate(1, h4.globals.easing, n7).plot(s5).animate(o8, h4.globals.easing, n7).plot(r7).afterAll(function() {
          m2.isNumber(i8) ? i8 === h4.globals.series[h4.globals.maxValsInArrayIndex].length - 2 && h4.globals.shouldAnimate && l4.animationCompleted(t6) : "none" !== a4 && h4.globals.shouldAnimate && (!h4.globals.comboCharts && e8 === h4.globals.series.length - 1 || h4.globals.comboCharts) && l4.animationCompleted(t6), l4.showDelayedElements();
        });
      } }]), t5;
    }();
    var w2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "getDefaultFilter", value: function(t6, e8) {
        var i8 = this.w;
        t6.unfilter(true), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), "none" !== i8.config.states.normal.filter ? this.applyFilter(t6, e8, i8.config.states.normal.filter.type, i8.config.states.normal.filter.value) : i8.config.chart.dropShadow.enabled && this.dropShadow(t6, i8.config.chart.dropShadow, e8);
      } }, { key: "addNormalFilter", value: function(t6, e8) {
        var i8 = this.w;
        i8.config.chart.dropShadow.enabled && !t6.node.classList.contains("apexcharts-marker") && this.dropShadow(t6, i8.config.chart.dropShadow, e8);
      } }, { key: "addLightenFilter", value: function(t6, e8, i8) {
        var a4 = this, s5 = this.w, r7 = i8.intensity;
        t6.unfilter(true);
        new window.SVG.Filter();
        t6.filter(function(t7) {
          var i9 = s5.config.chart.dropShadow;
          (i9.enabled ? a4.addShadow(t7, e8, i9) : t7).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: r7 } });
        }), t6.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t6.filterer.node);
      } }, { key: "addDarkenFilter", value: function(t6, e8, i8) {
        var a4 = this, s5 = this.w, r7 = i8.intensity;
        t6.unfilter(true);
        new window.SVG.Filter();
        t6.filter(function(t7) {
          var i9 = s5.config.chart.dropShadow;
          (i9.enabled ? a4.addShadow(t7, e8, i9) : t7).componentTransfer({ rgb: { type: "linear", slope: r7 } });
        }), t6.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t6.filterer.node);
      } }, { key: "applyFilter", value: function(t6, e8, i8) {
        var a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        switch (i8) {
          case "none":
            this.addNormalFilter(t6, e8);
            break;
          case "lighten":
            this.addLightenFilter(t6, e8, { intensity: a4 });
            break;
          case "darken":
            this.addDarkenFilter(t6, e8, { intensity: a4 });
        }
      } }, { key: "addShadow", value: function(t6, e8, i8) {
        var a4, s5 = this.w, r7 = i8.blur, o8 = i8.top, n7 = i8.left, l4 = i8.color, h4 = i8.opacity;
        if ((null === (a4 = s5.config.chart.dropShadow.enabledOnSeries) || void 0 === a4 ? void 0 : a4.length) > 0 && -1 === s5.config.chart.dropShadow.enabledOnSeries.indexOf(e8)) return t6;
        var c5 = t6.flood(Array.isArray(l4) ? l4[e8] : l4, h4).composite(t6.sourceAlpha, "in").offset(n7, o8).gaussianBlur(r7).merge(t6.source);
        return t6.blend(t6.source, c5);
      } }, { key: "dropShadow", value: function(t6, e8) {
        var i8, a4, s5 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r7 = e8.top, o8 = e8.left, n7 = e8.blur, l4 = e8.color, h4 = e8.opacity, c5 = e8.noUserSpaceOnUse, d4 = this.w;
        if (t6.unfilter(true), m2.isMsEdge() && "radialBar" === d4.config.chart.type) return t6;
        if ((null === (i8 = d4.config.chart.dropShadow.enabledOnSeries) || void 0 === i8 ? void 0 : i8.length) > 0 && -1 === (null === (a4 = d4.config.chart.dropShadow.enabledOnSeries) || void 0 === a4 ? void 0 : a4.indexOf(s5))) return t6;
        return l4 = Array.isArray(l4) ? l4[s5] : l4, t6.filter(function(t7) {
          var e9 = null;
          e9 = m2.isSafari() || m2.isFirefox() || m2.isMsEdge() ? t7.flood(l4, h4).composite(t7.sourceAlpha, "in").offset(o8, r7).gaussianBlur(n7) : t7.flood(l4, h4).composite(t7.sourceAlpha, "in").offset(o8, r7).gaussianBlur(n7).merge(t7.source), t7.blend(t7.source, e9);
        }), c5 || t6.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t6.filterer.node), t6;
      } }, { key: "setSelectionFilter", value: function(t6, e8, i8) {
        var a4 = this.w;
        if (void 0 !== a4.globals.selectedDataPoints[e8] && a4.globals.selectedDataPoints[e8].indexOf(i8) > -1) {
          t6.node.setAttribute("selected", true);
          var s5 = a4.config.states.active.filter;
          "none" !== s5 && this.applyFilter(t6, e8, s5.type, s5.value);
        }
      } }, { key: "_scaleFilterSize", value: function(t6) {
        !function(e8) {
          for (var i8 in e8) e8.hasOwnProperty(i8) && t6.setAttribute(i8, e8[i8]);
        }({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
      } }]), t5;
    }();
    var k2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "roundPathCorners", value: function(t6, e8) {
        function i8(t7, e9, i9) {
          var s6 = e9.x - t7.x, r8 = e9.y - t7.y, o9 = Math.sqrt(s6 * s6 + r8 * r8);
          return a4(t7, e9, Math.min(1, i9 / o9));
        }
        function a4(t7, e9, i9) {
          return { x: t7.x + (e9.x - t7.x) * i9, y: t7.y + (e9.y - t7.y) * i9 };
        }
        function s5(t7, e9) {
          t7.length > 2 && (t7[t7.length - 2] = e9.x, t7[t7.length - 1] = e9.y);
        }
        function r7(t7) {
          return { x: parseFloat(t7[t7.length - 2]), y: parseFloat(t7[t7.length - 1]) };
        }
        t6.indexOf("NaN") > -1 && (t6 = "");
        var o8 = t6.split(/[,\s]/).reduce(function(t7, e9) {
          var i9 = e9.match("([a-zA-Z])(.+)");
          return i9 ? (t7.push(i9[1]), t7.push(i9[2])) : t7.push(e9), t7;
        }, []).reduce(function(t7, e9) {
          return parseFloat(e9) == e9 && t7.length ? t7[t7.length - 1].push(e9) : t7.push([e9]), t7;
        }, []), n7 = [];
        if (o8.length > 1) {
          var l4 = r7(o8[0]), h4 = null;
          "Z" == o8[o8.length - 1][0] && o8[0].length > 2 && (h4 = ["L", l4.x, l4.y], o8[o8.length - 1] = h4), n7.push(o8[0]);
          for (var c5 = 1; c5 < o8.length; c5++) {
            var d4 = n7[n7.length - 1], g3 = o8[c5], u4 = g3 == h4 ? o8[1] : o8[c5 + 1];
            if (u4 && d4 && d4.length > 2 && "L" == g3[0] && u4.length > 2 && "L" == u4[0]) {
              var f4, p4, x3 = r7(d4), b4 = r7(g3), v3 = r7(u4);
              f4 = i8(b4, x3, e8), p4 = i8(b4, v3, e8), s5(g3, f4), g3.origPoint = b4, n7.push(g3);
              var m3 = a4(f4, b4, 0.5), y4 = a4(b4, p4, 0.5), w3 = ["C", m3.x, m3.y, y4.x, y4.y, p4.x, p4.y];
              w3.origPoint = b4, n7.push(w3);
            } else n7.push(g3);
          }
          if (h4) {
            var k3 = r7(n7[n7.length - 1]);
            n7.push(["Z"]), s5(n7[0], k3);
          }
        } else n7 = o8;
        return n7.reduce(function(t7, e9) {
          return t7 + e9.join(" ") + " ";
        }, "");
      } }, { key: "drawLine", value: function(t6, e8, i8, a4) {
        var s5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8", r7 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o8 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, n7 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt";
        return this.w.globals.dom.Paper.line().attr({ x1: t6, y1: e8, x2: i8, y2: a4, stroke: s5, "stroke-dasharray": r7, "stroke-width": o8, "stroke-linecap": n7 });
      } }, { key: "drawRect", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r7 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe", o8 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, n7 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, l4 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, h4 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c5 = this.w.globals.dom.Paper.rect();
        return c5.attr({ x: t6, y: e8, width: i8 > 0 ? i8 : 0, height: a4 > 0 ? a4 : 0, rx: s5, ry: s5, opacity: o8, "stroke-width": null !== n7 ? n7 : 0, stroke: null !== l4 ? l4 : "none", "stroke-dasharray": h4 }), c5.node.setAttribute("fill", r7), c5;
      } }, { key: "drawPolygon", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1", i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
        return this.w.globals.dom.Paper.polygon(t6).attr({ fill: a4, stroke: e8, "stroke-width": i8 });
      } }, { key: "drawCircle", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        t6 < 0 && (t6 = 0);
        var i8 = this.w.globals.dom.Paper.circle(2 * t6);
        return null !== e8 && i8.attr(e8), i8;
      } }, { key: "drawPath", value: function(t6) {
        var e8 = t6.d, i8 = void 0 === e8 ? "" : e8, a4 = t6.stroke, s5 = void 0 === a4 ? "#a8a8a8" : a4, r7 = t6.strokeWidth, o8 = void 0 === r7 ? 1 : r7, n7 = t6.fill, l4 = t6.fillOpacity, h4 = void 0 === l4 ? 1 : l4, c5 = t6.strokeOpacity, d4 = void 0 === c5 ? 1 : c5, g3 = t6.classes, u4 = t6.strokeLinecap, f4 = void 0 === u4 ? null : u4, p4 = t6.strokeDashArray, x3 = void 0 === p4 ? 0 : p4, b4 = this.w;
        return null === f4 && (f4 = b4.config.stroke.lineCap), (i8.indexOf("undefined") > -1 || i8.indexOf("NaN") > -1) && (i8 = "M 0 ".concat(b4.globals.gridHeight)), b4.globals.dom.Paper.path(i8).attr({ fill: n7, "fill-opacity": h4, stroke: s5, "stroke-opacity": d4, "stroke-linecap": f4, "stroke-width": o8, "stroke-dasharray": x3, class: g3 });
      } }, { key: "group", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e8 = this.w.globals.dom.Paper.group();
        return null !== t6 && e8.attr(t6), e8;
      } }, { key: "move", value: function(t6, e8) {
        var i8 = ["M", t6, e8].join(" ");
        return i8;
      } }, { key: "line", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a4 = null;
        return null === i8 ? a4 = [" L", t6, e8].join(" ") : "H" === i8 ? a4 = [" H", t6].join(" ") : "V" === i8 && (a4 = [" V", e8].join(" ")), a4;
      } }, { key: "curve", value: function(t6, e8, i8, a4, s5, r7) {
        var o8 = ["C", t6, e8, i8, a4, s5, r7].join(" ");
        return o8;
      } }, { key: "quadraticCurve", value: function(t6, e8, i8, a4) {
        return ["Q", t6, e8, i8, a4].join(" ");
      } }, { key: "arc", value: function(t6, e8, i8, a4, s5, r7, o8) {
        var n7 = "A";
        arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (n7 = "a");
        var l4 = [n7, t6, e8, i8, a4, s5, r7, o8].join(" ");
        return l4;
      } }, { key: "renderPaths", value: function(t6) {
        var e8, i8 = t6.j, a4 = t6.realIndex, s5 = t6.pathFrom, r7 = t6.pathTo, o8 = t6.stroke, n7 = t6.strokeWidth, l4 = t6.strokeLinecap, h4 = t6.fill, c5 = t6.animationDelay, d4 = t6.initialSpeed, u4 = t6.dataChangeSpeed, f4 = t6.className, p4 = t6.chartType, x3 = t6.shouldClipToGrid, b4 = void 0 === x3 || x3, v3 = t6.bindEventsOnPaths, m3 = void 0 === v3 || v3, k3 = t6.drawShadow, A3 = void 0 === k3 || k3, S4 = this.w, C4 = new w2(this.ctx), L3 = new y3(this.ctx), P3 = this.w.config.chart.animations.enabled, M3 = P3 && this.w.config.chart.animations.dynamicAnimation.enabled, I3 = !!(P3 && !S4.globals.resized || M3 && S4.globals.dataChanged && S4.globals.shouldAnimate);
        I3 ? e8 = s5 : (e8 = r7, S4.globals.animationEnded = true);
        var T3 = S4.config.stroke.dashArray, z3 = 0;
        z3 = Array.isArray(T3) ? T3[a4] : S4.config.stroke.dashArray;
        var X2 = this.drawPath({ d: e8, stroke: o8, strokeWidth: n7, fill: h4, fillOpacity: 1, classes: f4, strokeLinecap: l4, strokeDashArray: z3 });
        if (X2.attr("index", a4), b4 && ("bar" === p4 && !S4.globals.isHorizontal || S4.globals.comboCharts ? X2.attr({ "clip-path": "url(#gridRectBarMask".concat(S4.globals.cuid, ")") }) : X2.attr({ "clip-path": "url(#gridRectMask".concat(S4.globals.cuid, ")") })), "none" !== S4.config.states.normal.filter.type) C4.getDefaultFilter(X2, a4);
        else if (S4.config.chart.dropShadow.enabled && A3) {
          var E3 = S4.config.chart.dropShadow;
          C4.dropShadow(X2, E3, a4);
        }
        m3 && (X2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, X2)), X2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, X2)), X2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, X2))), X2.attr({ pathTo: r7, pathFrom: s5 });
        var Y2 = { el: X2, j: i8, realIndex: a4, pathFrom: s5, pathTo: r7, fill: h4, strokeWidth: n7, delay: c5 };
        return !P3 || S4.globals.resized || S4.globals.dataChanged ? !S4.globals.resized && S4.globals.dataChanged || L3.showDelayedElements() : L3.animatePathsGradually(g2(g2({}, Y2), {}, { speed: d4 })), S4.globals.dataChanged && M3 && I3 && L3.animatePathsGradually(g2(g2({}, Y2), {}, { speed: u4 })), X2;
      } }, { key: "drawPattern", value: function(t6, e8, i8) {
        var a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8", s5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        return this.w.globals.dom.Paper.pattern(e8, i8, function(r7) {
          "horizontalLines" === t6 ? r7.line(0, 0, i8, 0).stroke({ color: a4, width: s5 + 1 }) : "verticalLines" === t6 ? r7.line(0, 0, 0, e8).stroke({ color: a4, width: s5 + 1 }) : "slantedLines" === t6 ? r7.line(0, 0, e8, i8).stroke({ color: a4, width: s5 }) : "squares" === t6 ? r7.rect(e8, i8).fill("none").stroke({ color: a4, width: s5 }) : "circles" === t6 && r7.circle(e8).fill("none").stroke({ color: a4, width: s5 });
        });
      } }, { key: "drawGradient", value: function(t6, e8, i8, a4, s5) {
        var r7, o8 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, n7 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, l4 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, h4 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, c5 = this.w;
        e8.length < 9 && 0 === e8.indexOf("#") && (e8 = m2.hexToRgba(e8, a4)), i8.length < 9 && 0 === i8.indexOf("#") && (i8 = m2.hexToRgba(i8, s5));
        var d4 = 0, g3 = 1, u4 = 1, f4 = null;
        null !== n7 && (d4 = void 0 !== n7[0] ? n7[0] / 100 : 0, g3 = void 0 !== n7[1] ? n7[1] / 100 : 1, u4 = void 0 !== n7[2] ? n7[2] / 100 : 1, f4 = void 0 !== n7[3] ? n7[3] / 100 : null);
        var p4 = !("donut" !== c5.config.chart.type && "pie" !== c5.config.chart.type && "polarArea" !== c5.config.chart.type && "bubble" !== c5.config.chart.type);
        if (r7 = null === l4 || 0 === l4.length ? c5.globals.dom.Paper.gradient(p4 ? "radial" : "linear", function(t7) {
          t7.at(d4, e8, a4), t7.at(g3, i8, s5), t7.at(u4, i8, s5), null !== f4 && t7.at(f4, e8, a4);
        }) : c5.globals.dom.Paper.gradient(p4 ? "radial" : "linear", function(t7) {
          (Array.isArray(l4[h4]) ? l4[h4] : l4).forEach(function(e9) {
            t7.at(e9.offset / 100, e9.color, e9.opacity);
          });
        }), p4) {
          var x3 = c5.globals.gridWidth / 2, b4 = c5.globals.gridHeight / 2;
          "bubble" !== c5.config.chart.type ? r7.attr({ gradientUnits: "userSpaceOnUse", cx: x3, cy: b4, r: o8 }) : r7.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
        } else "vertical" === t6 ? r7.from(0, 0).to(0, 1) : "diagonal" === t6 ? r7.from(0, 0).to(1, 1) : "horizontal" === t6 ? r7.from(0, 1).to(1, 1) : "diagonal2" === t6 && r7.from(1, 0).to(0, 1);
        return r7;
      } }, { key: "getTextBasedOnMaxWidth", value: function(t6) {
        var e8 = t6.text, i8 = t6.maxWidth, a4 = t6.fontSize, s5 = t6.fontFamily, r7 = this.getTextRects(e8, a4, s5), o8 = r7.width / e8.length, n7 = Math.floor(i8 / o8);
        return i8 < r7.width ? e8.slice(0, n7 - 3) + "..." : e8;
      } }, { key: "drawText", value: function(t6) {
        var e8 = this, i8 = t6.x, a4 = t6.y, s5 = t6.text, r7 = t6.textAnchor, o8 = t6.fontSize, n7 = t6.fontFamily, l4 = t6.fontWeight, h4 = t6.foreColor, c5 = t6.opacity, d4 = t6.maxWidth, u4 = t6.cssClass, f4 = void 0 === u4 ? "" : u4, p4 = t6.isPlainText, x3 = void 0 === p4 || p4, b4 = t6.dominantBaseline, v3 = void 0 === b4 ? "auto" : b4, m3 = this.w;
        void 0 === s5 && (s5 = "");
        var y4 = s5;
        r7 || (r7 = "start"), h4 && h4.length || (h4 = m3.config.chart.foreColor), n7 = n7 || m3.config.chart.fontFamily, l4 = l4 || "regular";
        var w3, k3 = { maxWidth: d4, fontSize: o8 = o8 || "11px", fontFamily: n7 };
        return Array.isArray(s5) ? w3 = m3.globals.dom.Paper.text(function(t7) {
          for (var i9 = 0; i9 < s5.length; i9++) y4 = s5[i9], d4 && (y4 = e8.getTextBasedOnMaxWidth(g2({ text: s5[i9] }, k3))), 0 === i9 ? t7.tspan(y4) : t7.tspan(y4).newLine();
        }) : (d4 && (y4 = this.getTextBasedOnMaxWidth(g2({ text: s5 }, k3))), w3 = x3 ? m3.globals.dom.Paper.plain(s5) : m3.globals.dom.Paper.text(function(t7) {
          return t7.tspan(y4);
        })), w3.attr({ x: i8, y: a4, "text-anchor": r7, "dominant-baseline": v3, "font-size": o8, "font-family": n7, "font-weight": l4, fill: h4, class: "apexcharts-text " + f4 }), w3.node.style.fontFamily = n7, w3.node.style.opacity = c5, w3;
      } }, { key: "getMarkerPath", value: function(t6, e8, i8, a4) {
        var s5 = "";
        switch (i8) {
          case "cross":
            s5 = "M ".concat(t6 - (a4 /= 1.4), " ").concat(e8 - a4, " L ").concat(t6 + a4, " ").concat(e8 + a4, "  M ").concat(t6 - a4, " ").concat(e8 + a4, " L ").concat(t6 + a4, " ").concat(e8 - a4);
            break;
          case "plus":
            s5 = "M ".concat(t6 - (a4 /= 1.12), " ").concat(e8, " L ").concat(t6 + a4, " ").concat(e8, "  M ").concat(t6, " ").concat(e8 - a4, " L ").concat(t6, " ").concat(e8 + a4);
            break;
          case "star":
          case "sparkle":
            var r7 = 5;
            a4 *= 1.15, "sparkle" === i8 && (a4 /= 1.1, r7 = 4);
            for (var o8 = Math.PI / r7, n7 = 0; n7 <= 2 * r7; n7++) {
              var l4 = n7 * o8, h4 = n7 % 2 == 0 ? a4 : a4 / 2;
              s5 += (0 === n7 ? "M" : "L") + (t6 + h4 * Math.sin(l4)) + "," + (e8 - h4 * Math.cos(l4));
            }
            s5 += "Z";
            break;
          case "triangle":
            s5 = "M ".concat(t6, " ").concat(e8 - a4, " \n             L ").concat(t6 + a4, " ").concat(e8 + a4, " \n             L ").concat(t6 - a4, " ").concat(e8 + a4, " \n             Z");
            break;
          case "square":
          case "rect":
            s5 = "M ".concat(t6 - (a4 /= 1.125), " ").concat(e8 - a4, " \n           L ").concat(t6 + a4, " ").concat(e8 - a4, " \n           L ").concat(t6 + a4, " ").concat(e8 + a4, " \n           L ").concat(t6 - a4, " ").concat(e8 + a4, " \n           Z");
            break;
          case "diamond":
            a4 *= 1.05, s5 = "M ".concat(t6, " ").concat(e8 - a4, " \n             L ").concat(t6 + a4, " ").concat(e8, " \n             L ").concat(t6, " ").concat(e8 + a4, " \n             L ").concat(t6 - a4, " ").concat(e8, " \n            Z");
            break;
          case "line":
            s5 = "M ".concat(t6 - (a4 /= 1.1), " ").concat(e8, " \n           L ").concat(t6 + a4, " ").concat(e8);
            break;
          default:
            a4 *= 2, s5 = "M ".concat(t6, ", ").concat(e8, " \n           m -").concat(a4 / 2, ", 0 \n           a ").concat(a4 / 2, ",").concat(a4 / 2, " 0 1,0 ").concat(a4, ",0 \n           a ").concat(a4 / 2, ",").concat(a4 / 2, " 0 1,0 -").concat(a4, ",0");
        }
        return s5;
      } }, { key: "drawMarkerShape", value: function(t6, e8, i8, a4, s5) {
        var r7 = this.drawPath({ d: this.getMarkerPath(t6, e8, i8, a4, s5), stroke: s5.pointStrokeColor, strokeDashArray: s5.pointStrokeDashArray, strokeWidth: s5.pointStrokeWidth, fill: s5.pointFillColor, fillOpacity: s5.pointFillOpacity, strokeOpacity: s5.pointStrokeOpacity });
        return r7.attr({ cx: t6, cy: e8, shape: s5.shape, class: s5.class ? s5.class : "" }), r7;
      } }, { key: "drawMarker", value: function(t6, e8, i8) {
        t6 = t6 || 0;
        var a4 = i8.pSize || 0;
        return m2.isNumber(e8) || (a4 = 0, e8 = 0), this.drawMarkerShape(t6, e8, null == i8 ? void 0 : i8.shape, a4, g2(g2({}, i8), "line" === i8.shape || "plus" === i8.shape || "cross" === i8.shape ? { pointStrokeColor: i8.pointFillColor, pointStrokeOpacity: i8.pointFillOpacity } : {}));
      } }, { key: "pathMouseEnter", value: function(t6, e8) {
        var i8 = this.w, a4 = new w2(this.ctx), s5 = parseInt(t6.node.getAttribute("index"), 10), r7 = parseInt(t6.node.getAttribute("j"), 10);
        if ("function" == typeof i8.config.chart.events.dataPointMouseEnter && i8.config.chart.events.dataPointMouseEnter(e8, this.ctx, { seriesIndex: s5, dataPointIndex: r7, w: i8 }), this.ctx.events.fireEvent("dataPointMouseEnter", [e8, this.ctx, { seriesIndex: s5, dataPointIndex: r7, w: i8 }]), ("none" === i8.config.states.active.filter.type || "true" !== t6.node.getAttribute("selected")) && "none" !== i8.config.states.hover.filter.type && !i8.globals.isTouchDevice) {
          var o8 = i8.config.states.hover.filter;
          a4.applyFilter(t6, s5, o8.type, o8.value);
        }
      } }, { key: "pathMouseLeave", value: function(t6, e8) {
        var i8 = this.w, a4 = new w2(this.ctx), s5 = parseInt(t6.node.getAttribute("index"), 10), r7 = parseInt(t6.node.getAttribute("j"), 10);
        "function" == typeof i8.config.chart.events.dataPointMouseLeave && i8.config.chart.events.dataPointMouseLeave(e8, this.ctx, { seriesIndex: s5, dataPointIndex: r7, w: i8 }), this.ctx.events.fireEvent("dataPointMouseLeave", [e8, this.ctx, { seriesIndex: s5, dataPointIndex: r7, w: i8 }]), "none" !== i8.config.states.active.filter.type && "true" === t6.node.getAttribute("selected") || "none" !== i8.config.states.hover.filter.type && a4.getDefaultFilter(t6, s5);
      } }, { key: "pathMouseDown", value: function(t6, e8) {
        var i8 = this.w, a4 = new w2(this.ctx), s5 = parseInt(t6.node.getAttribute("index"), 10), r7 = parseInt(t6.node.getAttribute("j"), 10), o8 = "false";
        if ("true" === t6.node.getAttribute("selected")) {
          if (t6.node.setAttribute("selected", "false"), i8.globals.selectedDataPoints[s5].indexOf(r7) > -1) {
            var n7 = i8.globals.selectedDataPoints[s5].indexOf(r7);
            i8.globals.selectedDataPoints[s5].splice(n7, 1);
          }
        } else {
          if (!i8.config.states.active.allowMultipleDataPointsSelection && i8.globals.selectedDataPoints.length > 0) {
            i8.globals.selectedDataPoints = [];
            var l4 = i8.globals.dom.Paper.select(".apexcharts-series path").members, h4 = i8.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, c5 = function(t7) {
              Array.prototype.forEach.call(t7, function(t8) {
                t8.node.setAttribute("selected", "false"), a4.getDefaultFilter(t8, s5);
              });
            };
            c5(l4), c5(h4);
          }
          t6.node.setAttribute("selected", "true"), o8 = "true", void 0 === i8.globals.selectedDataPoints[s5] && (i8.globals.selectedDataPoints[s5] = []), i8.globals.selectedDataPoints[s5].push(r7);
        }
        if ("true" === o8) {
          var d4 = i8.config.states.active.filter;
          if ("none" !== d4) a4.applyFilter(t6, s5, d4.type, d4.value);
          else if ("none" !== i8.config.states.hover.filter && !i8.globals.isTouchDevice) {
            var g3 = i8.config.states.hover.filter;
            a4.applyFilter(t6, s5, g3.type, g3.value);
          }
        } else if ("none" !== i8.config.states.active.filter.type) if ("none" === i8.config.states.hover.filter.type || i8.globals.isTouchDevice) a4.getDefaultFilter(t6, s5);
        else {
          g3 = i8.config.states.hover.filter;
          a4.applyFilter(t6, s5, g3.type, g3.value);
        }
        "function" == typeof i8.config.chart.events.dataPointSelection && i8.config.chart.events.dataPointSelection(e8, this.ctx, { selectedDataPoints: i8.globals.selectedDataPoints, seriesIndex: s5, dataPointIndex: r7, w: i8 }), e8 && this.ctx.events.fireEvent("dataPointSelection", [e8, this.ctx, { selectedDataPoints: i8.globals.selectedDataPoints, seriesIndex: s5, dataPointIndex: r7, w: i8 }]);
      } }, { key: "rotateAroundCenter", value: function(t6) {
        var e8 = {};
        return t6 && "function" == typeof t6.getBBox && (e8 = t6.getBBox()), { x: e8.x + e8.width / 2, y: e8.y + e8.height / 2 };
      } }, { key: "getTextRects", value: function(t6, e8, i8, a4) {
        var s5 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r7 = this.w, o8 = this.drawText({ x: -200, y: -200, text: t6, textAnchor: "start", fontSize: e8, fontFamily: i8, foreColor: "#fff", opacity: 0 });
        a4 && o8.attr("transform", a4), r7.globals.dom.Paper.add(o8);
        var n7 = o8.bbox();
        return s5 || (n7 = o8.node.getBoundingClientRect()), o8.remove(), { width: n7.width, height: n7.height };
      } }, { key: "placeTextWithEllipsis", value: function(t6, e8, i8) {
        if ("function" == typeof t6.getComputedTextLength && (t6.textContent = e8, e8.length > 0 && t6.getComputedTextLength() >= i8 / 1.1)) {
          for (var a4 = e8.length - 3; a4 > 0; a4 -= 3) if (t6.getSubStringLength(0, a4) <= i8 / 1.1) return void (t6.textContent = e8.substring(0, a4) + "...");
          t6.textContent = ".";
        }
      } }], [{ key: "setAttrs", value: function(t6, e8) {
        for (var i8 in e8) e8.hasOwnProperty(i8) && t6.setAttribute(i8, e8[i8]);
      } }]), t5;
    }();
    var A2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "getStackedSeriesTotals", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e8 = this.w, i8 = [];
        if (0 === e8.globals.series.length) return i8;
        for (var a4 = 0; a4 < e8.globals.series[e8.globals.maxValsInArrayIndex].length; a4++) {
          for (var s5 = 0, r7 = 0; r7 < e8.globals.series.length; r7++) void 0 !== e8.globals.series[r7][a4] && -1 === t6.indexOf(r7) && (s5 += e8.globals.series[r7][a4]);
          i8.push(s5);
        }
        return i8;
      } }, { key: "getSeriesTotalByIndex", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null === t6 ? this.w.config.series.reduce(function(t7, e8) {
          return t7 + e8;
        }, 0) : this.w.globals.series[t6].reduce(function(t7, e8) {
          return t7 + e8;
        }, 0);
      } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
        var t6 = this, e8 = this.w, i8 = [];
        return e8.globals.seriesGroups.forEach(function(a4) {
          var s5 = [];
          e8.config.series.forEach(function(t7, i9) {
            a4.indexOf(e8.globals.seriesNames[i9]) > -1 && s5.push(i9);
          });
          var r7 = e8.globals.series.map(function(t7, e9) {
            return -1 === s5.indexOf(e9) ? e9 : -1;
          }).filter(function(t7) {
            return -1 !== t7;
          });
          i8.push(t6.getStackedSeriesTotals(r7));
        }), i8;
      } }, { key: "setSeriesYAxisMappings", value: function() {
        var t6 = this.w.globals, e8 = this.w.config, i8 = [], a4 = [], s5 = [], r7 = t6.series.length > e8.yaxis.length || e8.yaxis.some(function(t7) {
          return Array.isArray(t7.seriesName);
        });
        e8.series.forEach(function(t7, e9) {
          s5.push(e9), a4.push(null);
        }), e8.yaxis.forEach(function(t7, e9) {
          i8[e9] = [];
        });
        var o8 = [];
        e8.yaxis.forEach(function(t7, a5) {
          var n8 = false;
          if (t7.seriesName) {
            var l5 = [];
            Array.isArray(t7.seriesName) ? l5 = t7.seriesName : l5.push(t7.seriesName), l5.forEach(function(t8) {
              e8.series.forEach(function(e9, o9) {
                if (e9.name === t8) {
                  var l6 = o9;
                  a5 === o9 || r7 ? !r7 || s5.indexOf(o9) > -1 ? i8[a5].push([a5, o9]) : console.warn("Series '" + e9.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i8[o9].push([o9, a5]), l6 = a5), n8 = true, -1 !== (l6 = s5.indexOf(l6)) && s5.splice(l6, 1);
                }
              });
            });
          }
          n8 || o8.push(a5);
        }), i8 = i8.map(function(t7, e9) {
          var i9 = [];
          return t7.forEach(function(t8) {
            a4[t8[1]] = t8[0], i9.push(t8[1]);
          }), i9;
        });
        for (var n7 = e8.yaxis.length - 1, l4 = 0; l4 < o8.length && (n7 = o8[l4], i8[n7] = [], s5); l4++) {
          var h4 = s5[0];
          s5.shift(), i8[n7].push(h4), a4[h4] = n7;
        }
        s5.forEach(function(t7) {
          i8[n7].push(t7), a4[t7] = n7;
        }), t6.seriesYAxisMap = i8.map(function(t7) {
          return t7;
        }), t6.seriesYAxisReverseMap = a4.map(function(t7) {
          return t7;
        }), t6.seriesYAxisMap.forEach(function(t7, i9) {
          t7.forEach(function(t8) {
            e8.series[t8] && void 0 === e8.series[t8].group && (e8.series[t8].group = "apexcharts-axis-".concat(i9.toString()));
          });
        });
      } }, { key: "isSeriesNull", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return 0 === (null === t6 ? this.w.config.series.filter(function(t7) {
          return null !== t7;
        }) : this.w.config.series[t6].data.filter(function(t7) {
          return null !== t7;
        })).length;
      } }, { key: "seriesHaveSameValues", value: function(t6) {
        return this.w.globals.series[t6].every(function(t7, e8, i8) {
          return t7 === i8[0];
        });
      } }, { key: "getCategoryLabels", value: function(t6) {
        var e8 = this.w, i8 = t6.slice();
        return e8.config.xaxis.convertedCatToNumeric && (i8 = t6.map(function(t7, i9) {
          return e8.config.xaxis.labels.formatter(t7 - e8.globals.minX + 1);
        })), i8;
      } }, { key: "getLargestSeries", value: function() {
        var t6 = this.w;
        t6.globals.maxValsInArrayIndex = t6.globals.series.map(function(t7) {
          return t7.length;
        }).indexOf(Math.max.apply(Math, t6.globals.series.map(function(t7) {
          return t7.length;
        })));
      } }, { key: "getLargestMarkerSize", value: function() {
        var t6 = this.w, e8 = 0;
        return t6.globals.markers.size.forEach(function(t7) {
          e8 = Math.max(e8, t7);
        }), t6.config.markers.discrete && t6.config.markers.discrete.length && t6.config.markers.discrete.forEach(function(t7) {
          e8 = Math.max(e8, t7.size);
        }), e8 > 0 && (t6.config.markers.hover.size > 0 ? e8 = t6.config.markers.hover.size : e8 += t6.config.markers.hover.sizeOffset), t6.globals.markers.largestSize = e8, e8;
      } }, { key: "getSeriesTotals", value: function() {
        var t6 = this.w;
        t6.globals.seriesTotals = t6.globals.series.map(function(t7, e8) {
          var i8 = 0;
          if (Array.isArray(t7)) for (var a4 = 0; a4 < t7.length; a4++) i8 += t7[a4];
          else i8 += t7;
          return i8;
        });
      } }, { key: "getSeriesTotalsXRange", value: function(t6, e8) {
        var i8 = this.w;
        return i8.globals.series.map(function(a4, s5) {
          for (var r7 = 0, o8 = 0; o8 < a4.length; o8++) i8.globals.seriesX[s5][o8] > t6 && i8.globals.seriesX[s5][o8] < e8 && (r7 += a4[o8]);
          return r7;
        });
      } }, { key: "getPercentSeries", value: function() {
        var t6 = this.w;
        t6.globals.seriesPercent = t6.globals.series.map(function(e8, i8) {
          var a4 = [];
          if (Array.isArray(e8)) for (var s5 = 0; s5 < e8.length; s5++) {
            var r7 = t6.globals.stackedSeriesTotals[s5], o8 = 0;
            r7 && (o8 = 100 * e8[s5] / r7), a4.push(o8);
          }
          else {
            var n7 = 100 * e8 / t6.globals.seriesTotals.reduce(function(t7, e9) {
              return t7 + e9;
            }, 0);
            a4.push(n7);
          }
          return a4;
        });
      } }, { key: "getCalculatedRatios", value: function() {
        var t6, e8, i8, a4 = this, s5 = this.w, r7 = s5.globals, o8 = [], n7 = 0, l4 = [], h4 = 0.1, c5 = 0;
        if (r7.yRange = [], r7.isMultipleYAxis) for (var d4 = 0; d4 < r7.minYArr.length; d4++) r7.yRange.push(Math.abs(r7.minYArr[d4] - r7.maxYArr[d4])), l4.push(0);
        else r7.yRange.push(Math.abs(r7.minY - r7.maxY));
        r7.xRange = Math.abs(r7.maxX - r7.minX), r7.zRange = Math.abs(r7.maxZ - r7.minZ);
        for (var g3 = 0; g3 < r7.yRange.length; g3++) o8.push(r7.yRange[g3] / r7.gridHeight);
        if (e8 = r7.xRange / r7.gridWidth, t6 = r7.yRange / r7.gridWidth, i8 = r7.xRange / r7.gridHeight, (n7 = r7.zRange / r7.gridHeight * 16) || (n7 = 1), r7.minY !== Number.MIN_VALUE && 0 !== Math.abs(r7.minY) && (r7.hasNegs = true), s5.globals.seriesYAxisReverseMap.length > 0) {
          var u4 = function(t7, e9) {
            var i9 = s5.config.yaxis[s5.globals.seriesYAxisReverseMap[e9]], r8 = t7 < 0 ? -1 : 1;
            return t7 = Math.abs(t7), i9.logarithmic && (t7 = a4.getBaseLog(i9.logBase, t7)), -r8 * t7 / o8[e9];
          };
          if (r7.isMultipleYAxis) {
            l4 = [];
            for (var f4 = 0; f4 < o8.length; f4++) l4.push(u4(r7.minYArr[f4], f4));
          } else (l4 = []).push(u4(r7.minY, 0)), r7.minY !== Number.MIN_VALUE && 0 !== Math.abs(r7.minY) && (h4 = -r7.minY / t6, c5 = r7.minX / e8);
        } else (l4 = []).push(0), h4 = 0, c5 = 0;
        return { yRatio: o8, invertedYRatio: t6, zRatio: n7, xRatio: e8, invertedXRatio: i8, baseLineInvertedY: h4, baseLineY: l4, baseLineX: c5 };
      } }, { key: "getLogSeries", value: function(t6) {
        var e8 = this, i8 = this.w;
        return i8.globals.seriesLog = t6.map(function(t7, a4) {
          var s5 = i8.globals.seriesYAxisReverseMap[a4];
          return i8.config.yaxis[s5] && i8.config.yaxis[s5].logarithmic ? t7.map(function(t8) {
            return null === t8 ? null : e8.getLogVal(i8.config.yaxis[s5].logBase, t8, a4);
          }) : t7;
        }), i8.globals.invalidLogScale ? t6 : i8.globals.seriesLog;
      } }, { key: "getBaseLog", value: function(t6, e8) {
        return Math.log(e8) / Math.log(t6);
      } }, { key: "getLogVal", value: function(t6, e8, i8) {
        if (e8 <= 0) return 0;
        var a4 = this.w, s5 = 0 === a4.globals.minYArr[i8] ? -1 : this.getBaseLog(t6, a4.globals.minYArr[i8]), r7 = (0 === a4.globals.maxYArr[i8] ? 0 : this.getBaseLog(t6, a4.globals.maxYArr[i8])) - s5;
        return e8 < 1 ? e8 / r7 : (this.getBaseLog(t6, e8) - s5) / r7;
      } }, { key: "getLogYRatios", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = this.w.globals;
        return a4.yLogRatio = t6.slice(), a4.logYRange = a4.yRange.map(function(t7, s5) {
          var r7 = i8.globals.seriesYAxisReverseMap[s5];
          if (i8.config.yaxis[r7] && e8.w.config.yaxis[r7].logarithmic) {
            var o8, n7 = -Number.MAX_VALUE, l4 = Number.MIN_VALUE;
            return a4.seriesLog.forEach(function(t8, e9) {
              t8.forEach(function(t9) {
                i8.config.yaxis[e9] && i8.config.yaxis[e9].logarithmic && (n7 = Math.max(t9, n7), l4 = Math.min(t9, l4));
              });
            }), o8 = Math.pow(a4.yRange[s5], Math.abs(l4 - n7) / a4.yRange[s5]), a4.yLogRatio[s5] = o8 / a4.gridHeight, o8;
          }
        }), a4.invalidLogScale ? t6.slice() : a4.yLogRatio;
      } }, { key: "drawSeriesByGroup", value: function(t6, e8, i8, a4) {
        var s5 = this.w, r7 = [];
        return t6.series.length > 0 && e8.forEach(function(e9) {
          var o8 = [], n7 = [];
          t6.i.forEach(function(i9, a5) {
            s5.config.series[i9].group === e9 && (o8.push(t6.series[a5]), n7.push(i9));
          }), o8.length > 0 && r7.push(a4.draw(o8, i8, n7));
        }), r7;
      } }], [{ key: "checkComboSeries", value: function(t6, e8) {
        var i8 = false, a4 = 0, s5 = 0;
        return void 0 === e8 && (e8 = "line"), t6.length && void 0 !== t6[0].type && t6.forEach(function(t7) {
          "bar" !== t7.type && "column" !== t7.type && "candlestick" !== t7.type && "boxPlot" !== t7.type || a4++, void 0 !== t7.type && t7.type !== e8 && s5++;
        }), s5 > 0 && (i8 = true), { comboBarCount: a4, comboCharts: i8 };
      } }, { key: "extendArrayProps", value: function(t6, e8, i8) {
        var a4, s5, r7, o8, n7, l4;
        (null !== (a4 = e8) && void 0 !== a4 && a4.yaxis && (e8 = t6.extendYAxis(e8, i8)), null !== (s5 = e8) && void 0 !== s5 && s5.annotations) && (e8.annotations.yaxis && (e8 = t6.extendYAxisAnnotations(e8)), null !== (r7 = e8) && void 0 !== r7 && null !== (o8 = r7.annotations) && void 0 !== o8 && o8.xaxis && (e8 = t6.extendXAxisAnnotations(e8)), null !== (n7 = e8) && void 0 !== n7 && null !== (l4 = n7.annotations) && void 0 !== l4 && l4.points && (e8 = t6.extendPointAnnotations(e8)));
        return e8;
      } }]), t5;
    }();
    var S3 = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.annoCtx = e8;
      }
      return s4(t5, [{ key: "setOrientations", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i8 = this.w;
        if ("vertical" === t6.label.orientation) {
          var a4 = null !== e8 ? e8 : 0, s5 = i8.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a4, "']"));
          if (null !== s5) {
            var r7 = s5.getBoundingClientRect();
            s5.setAttribute("x", parseFloat(s5.getAttribute("x")) - r7.height + 4);
            var o8 = "top" === t6.label.position ? r7.width : -r7.width;
            s5.setAttribute("y", parseFloat(s5.getAttribute("y")) + o8);
            var n7 = this.annoCtx.graphics.rotateAroundCenter(s5), l4 = n7.x, h4 = n7.y;
            s5.setAttribute("transform", "rotate(-90 ".concat(l4, " ").concat(h4, ")"));
          }
        }
      } }, { key: "addBackgroundToAnno", value: function(t6, e8) {
        var i8 = this.w;
        if (!t6 || !e8.label.text || !String(e8.label.text).trim()) return null;
        var a4 = i8.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s5 = t6.getBoundingClientRect(), r7 = e8.label.style.padding, o8 = r7.left, n7 = r7.right, l4 = r7.top, h4 = r7.bottom;
        if ("vertical" === e8.label.orientation) {
          var c5 = [o8, n7, l4, h4];
          l4 = c5[0], h4 = c5[1], o8 = c5[2], n7 = c5[3];
        }
        var d4 = s5.left - a4.left - o8, g3 = s5.top - a4.top - l4, u4 = this.annoCtx.graphics.drawRect(d4 - i8.globals.barPadForNumericAxis, g3, s5.width + o8 + n7, s5.height + l4 + h4, e8.label.borderRadius, e8.label.style.background, 1, e8.label.borderWidth, e8.label.borderColor, 0);
        return e8.id && u4.node.classList.add(e8.id), u4;
      } }, { key: "annotationsBackground", value: function() {
        var t6 = this, e8 = this.w, i8 = function(i9, a4, s5) {
          var r7 = e8.globals.dom.baseEl.querySelector(".apexcharts-".concat(s5, "-annotations .apexcharts-").concat(s5, "-annotation-label[rel='").concat(a4, "']"));
          if (r7) {
            var o8 = r7.parentNode, n7 = t6.addBackgroundToAnno(r7, i9);
            n7 && (o8.insertBefore(n7.node, r7), i9.label.mouseEnter && n7.node.addEventListener("mouseenter", i9.label.mouseEnter.bind(t6, i9)), i9.label.mouseLeave && n7.node.addEventListener("mouseleave", i9.label.mouseLeave.bind(t6, i9)), i9.label.click && n7.node.addEventListener("click", i9.label.click.bind(t6, i9)));
          }
        };
        e8.config.annotations.xaxis.forEach(function(t7, e9) {
          return i8(t7, e9, "xaxis");
        }), e8.config.annotations.yaxis.forEach(function(t7, e9) {
          return i8(t7, e9, "yaxis");
        }), e8.config.annotations.points.forEach(function(t7, e9) {
          return i8(t7, e9, "point");
        });
      } }, { key: "getY1Y2", value: function(t6, e8) {
        var i8, a4 = this.w, s5 = "y1" === t6 ? e8.y : e8.y2, r7 = false;
        if (this.annoCtx.invertAxis) {
          var o8 = a4.config.xaxis.convertedCatToNumeric ? a4.globals.categoryLabels : a4.globals.labels, n7 = o8.indexOf(s5), l4 = a4.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(n7 + 1, ")"));
          i8 = l4 ? parseFloat(l4.getAttribute("y")) : (a4.globals.gridHeight / o8.length - 1) * (n7 + 1) - a4.globals.barHeight, void 0 !== e8.seriesIndex && a4.globals.barHeight && (i8 -= a4.globals.barHeight / 2 * (a4.globals.series.length - 1) - a4.globals.barHeight * e8.seriesIndex);
        } else {
          var h4, c5 = a4.globals.seriesYAxisMap[e8.yAxisIndex][0], d4 = a4.config.yaxis[e8.yAxisIndex].logarithmic ? new A2(this.annoCtx.ctx).getLogVal(a4.config.yaxis[e8.yAxisIndex].logBase, s5, c5) / a4.globals.yLogRatio[c5] : (s5 - a4.globals.minYArr[c5]) / (a4.globals.yRange[c5] / a4.globals.gridHeight);
          i8 = a4.globals.gridHeight - Math.min(Math.max(d4, 0), a4.globals.gridHeight), r7 = d4 > a4.globals.gridHeight || d4 < 0, !e8.marker || void 0 !== e8.y && null !== e8.y || (i8 = 0), null !== (h4 = a4.config.yaxis[e8.yAxisIndex]) && void 0 !== h4 && h4.reversed && (i8 = d4);
        }
        return "string" == typeof s5 && s5.includes("px") && (i8 = parseFloat(s5)), { yP: i8, clipped: r7 };
      } }, { key: "getX1X2", value: function(t6, e8) {
        var i8 = this.w, a4 = "x1" === t6 ? e8.x : e8.x2, s5 = this.annoCtx.invertAxis ? i8.globals.minY : i8.globals.minX, r7 = this.annoCtx.invertAxis ? i8.globals.maxY : i8.globals.maxX, o8 = this.annoCtx.invertAxis ? i8.globals.yRange[0] : i8.globals.xRange, n7 = false, l4 = this.annoCtx.inversedReversedAxis ? (r7 - a4) / (o8 / i8.globals.gridWidth) : (a4 - s5) / (o8 / i8.globals.gridWidth);
        return "category" !== i8.config.xaxis.type && !i8.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i8.globals.dataFormatXNumeric || i8.config.chart.sparkline.enabled || (l4 = this.getStringX(a4)), "string" == typeof a4 && a4.includes("px") && (l4 = parseFloat(a4)), null == a4 && e8.marker && (l4 = i8.globals.gridWidth), void 0 !== e8.seriesIndex && i8.globals.barWidth && !this.annoCtx.invertAxis && (l4 -= i8.globals.barWidth / 2 * (i8.globals.series.length - 1) - i8.globals.barWidth * e8.seriesIndex), l4 > i8.globals.gridWidth ? (l4 = i8.globals.gridWidth, n7 = true) : l4 < 0 && (l4 = 0, n7 = true), { x: l4, clipped: n7 };
      } }, { key: "getStringX", value: function(t6) {
        var e8 = this.w, i8 = t6;
        e8.config.xaxis.convertedCatToNumeric && e8.globals.categoryLabels.length && (t6 = e8.globals.categoryLabels.indexOf(t6) + 1);
        var a4 = e8.globals.labels.map(function(t7) {
          return Array.isArray(t7) ? t7.join(" ") : t7;
        }).indexOf(t6), s5 = e8.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a4 + 1, ")"));
        return s5 && (i8 = parseFloat(s5.getAttribute("x"))), i8;
      } }]), t5;
    }();
    var C3 = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.annoCtx = e8, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new S3(this.annoCtx);
      }
      return s4(t5, [{ key: "addXaxisAnnotation", value: function(t6, e8, i8) {
        var a4, s5 = this.w, r7 = this.helpers.getX1X2("x1", t6), o8 = r7.x, n7 = r7.clipped, l4 = true, h4 = t6.label.text, c5 = t6.strokeDashArray;
        if (m2.isNumber(o8)) {
          if (null === t6.x2 || void 0 === t6.x2) {
            if (!n7) {
              var d4 = this.annoCtx.graphics.drawLine(o8 + t6.offsetX, 0 + t6.offsetY, o8 + t6.offsetX, s5.globals.gridHeight + t6.offsetY, t6.borderColor, c5, t6.borderWidth);
              e8.appendChild(d4.node), t6.id && d4.node.classList.add(t6.id);
            }
          } else {
            var g3 = this.helpers.getX1X2("x2", t6);
            if (a4 = g3.x, l4 = g3.clipped, !n7 || !l4) {
              if (a4 < o8) {
                var u4 = o8;
                o8 = a4, a4 = u4;
              }
              var f4 = this.annoCtx.graphics.drawRect(o8 + t6.offsetX, 0 + t6.offsetY, a4 - o8, s5.globals.gridHeight + t6.offsetY, 0, t6.fillColor, t6.opacity, 1, t6.borderColor, c5);
              f4.node.classList.add("apexcharts-annotation-rect"), f4.attr("clip-path", "url(#gridRectMask".concat(s5.globals.cuid, ")")), e8.appendChild(f4.node), t6.id && f4.node.classList.add(t6.id);
            }
          }
          if (!n7 || !l4) {
            var p4 = this.annoCtx.graphics.getTextRects(h4, parseFloat(t6.label.style.fontSize)), x3 = "top" === t6.label.position ? 4 : "center" === t6.label.position ? s5.globals.gridHeight / 2 + ("vertical" === t6.label.orientation ? p4.width / 2 : 0) : s5.globals.gridHeight, b4 = this.annoCtx.graphics.drawText({ x: o8 + t6.label.offsetX, y: x3 + t6.label.offsetY - ("vertical" === t6.label.orientation ? "top" === t6.label.position ? p4.width / 2 - 12 : -p4.width / 2 : 0), text: h4, textAnchor: t6.label.textAnchor, fontSize: t6.label.style.fontSize, fontFamily: t6.label.style.fontFamily, fontWeight: t6.label.style.fontWeight, foreColor: t6.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t6.label.style.cssClass, " ").concat(t6.id ? t6.id : "") });
            b4.attr({ rel: i8 }), e8.appendChild(b4.node), this.annoCtx.helpers.setOrientations(t6, i8);
          }
        }
      } }, { key: "drawXAxisAnnotations", value: function() {
        var t6 = this, e8 = this.w, i8 = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
        return e8.config.annotations.xaxis.map(function(e9, a4) {
          t6.addXaxisAnnotation(e9, i8.node, a4);
        }), i8;
      } }]), t5;
    }();
    var L2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      }
      return s4(t5, [{ key: "isValidDate", value: function(t6) {
        return "number" != typeof t6 && !isNaN(this.parseDate(t6));
      } }, { key: "getTimeStamp", value: function(t6) {
        return Date.parse(t6) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t6).toISOString().substr(0, 25)).getTime() : new Date(t6).getTime() : t6;
      } }, { key: "getDate", value: function(t6) {
        return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t6).toUTCString()) : new Date(t6);
      } }, { key: "parseDate", value: function(t6) {
        var e8 = Date.parse(t6);
        if (!isNaN(e8)) return this.getTimeStamp(t6);
        var i8 = Date.parse(t6.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
        return i8 = this.getTimeStamp(i8);
      } }, { key: "parseDateWithTimezone", value: function(t6) {
        return Date.parse(t6.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      } }, { key: "formatDate", value: function(t6, e8) {
        var i8 = this.w.globals.locale, a4 = this.w.config.xaxis.labels.datetimeUTC, s5 = ["\0"].concat(p3(i8.months)), r7 = [""].concat(p3(i8.shortMonths)), o8 = [""].concat(p3(i8.days)), n7 = [""].concat(p3(i8.shortDays));
        function l4(t7, e9) {
          var i9 = t7 + "";
          for (e9 = e9 || 2; i9.length < e9; ) i9 = "0" + i9;
          return i9;
        }
        var h4 = a4 ? t6.getUTCFullYear() : t6.getFullYear();
        e8 = (e8 = (e8 = e8.replace(/(^|[^\\])yyyy+/g, "$1" + h4)).replace(/(^|[^\\])yy/g, "$1" + h4.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h4);
        var c5 = (a4 ? t6.getUTCMonth() : t6.getMonth()) + 1;
        e8 = (e8 = (e8 = (e8 = e8.replace(/(^|[^\\])MMMM+/g, "$1" + s5[0])).replace(/(^|[^\\])MMM/g, "$1" + r7[0])).replace(/(^|[^\\])MM/g, "$1" + l4(c5))).replace(/(^|[^\\])M/g, "$1" + c5);
        var d4 = a4 ? t6.getUTCDate() : t6.getDate();
        e8 = (e8 = (e8 = (e8 = e8.replace(/(^|[^\\])dddd+/g, "$1" + o8[0])).replace(/(^|[^\\])ddd/g, "$1" + n7[0])).replace(/(^|[^\\])dd/g, "$1" + l4(d4))).replace(/(^|[^\\])d/g, "$1" + d4);
        var g3 = a4 ? t6.getUTCHours() : t6.getHours(), u4 = g3 > 12 ? g3 - 12 : 0 === g3 ? 12 : g3;
        e8 = (e8 = (e8 = (e8 = e8.replace(/(^|[^\\])HH+/g, "$1" + l4(g3))).replace(/(^|[^\\])H/g, "$1" + g3)).replace(/(^|[^\\])hh+/g, "$1" + l4(u4))).replace(/(^|[^\\])h/g, "$1" + u4);
        var f4 = a4 ? t6.getUTCMinutes() : t6.getMinutes();
        e8 = (e8 = e8.replace(/(^|[^\\])mm+/g, "$1" + l4(f4))).replace(/(^|[^\\])m/g, "$1" + f4);
        var x3 = a4 ? t6.getUTCSeconds() : t6.getSeconds();
        e8 = (e8 = e8.replace(/(^|[^\\])ss+/g, "$1" + l4(x3))).replace(/(^|[^\\])s/g, "$1" + x3);
        var b4 = a4 ? t6.getUTCMilliseconds() : t6.getMilliseconds();
        e8 = e8.replace(/(^|[^\\])fff+/g, "$1" + l4(b4, 3)), b4 = Math.round(b4 / 10), e8 = e8.replace(/(^|[^\\])ff/g, "$1" + l4(b4)), b4 = Math.round(b4 / 10);
        var v3 = g3 < 12 ? "AM" : "PM";
        e8 = (e8 = (e8 = e8.replace(/(^|[^\\])f/g, "$1" + b4)).replace(/(^|[^\\])TT+/g, "$1" + v3)).replace(/(^|[^\\])T/g, "$1" + v3.charAt(0));
        var m3 = v3.toLowerCase();
        e8 = (e8 = e8.replace(/(^|[^\\])tt+/g, "$1" + m3)).replace(/(^|[^\\])t/g, "$1" + m3.charAt(0));
        var y4 = -t6.getTimezoneOffset(), w3 = a4 || !y4 ? "Z" : y4 > 0 ? "+" : "-";
        if (!a4) {
          var k3 = (y4 = Math.abs(y4)) % 60;
          w3 += l4(Math.floor(y4 / 60)) + ":" + l4(k3);
        }
        e8 = e8.replace(/(^|[^\\])K/g, "$1" + w3);
        var A3 = (a4 ? t6.getUTCDay() : t6.getDay()) + 1;
        return e8 = (e8 = (e8 = (e8 = (e8 = e8.replace(new RegExp(o8[0], "g"), o8[A3])).replace(new RegExp(n7[0], "g"), n7[A3])).replace(new RegExp(s5[0], "g"), s5[c5])).replace(new RegExp(r7[0], "g"), r7[c5])).replace(/\\(.)/g, "$1");
      } }, { key: "getTimeUnitsfromTimestamp", value: function(t6, e8, i8) {
        var a4 = this.w;
        void 0 !== a4.config.xaxis.min && (t6 = a4.config.xaxis.min), void 0 !== a4.config.xaxis.max && (e8 = a4.config.xaxis.max);
        var s5 = this.getDate(t6), r7 = this.getDate(e8), o8 = this.formatDate(s5, "yyyy MM dd HH mm ss fff").split(" "), n7 = this.formatDate(r7, "yyyy MM dd HH mm ss fff").split(" ");
        return { minMillisecond: parseInt(o8[6], 10), maxMillisecond: parseInt(n7[6], 10), minSecond: parseInt(o8[5], 10), maxSecond: parseInt(n7[5], 10), minMinute: parseInt(o8[4], 10), maxMinute: parseInt(n7[4], 10), minHour: parseInt(o8[3], 10), maxHour: parseInt(n7[3], 10), minDate: parseInt(o8[2], 10), maxDate: parseInt(n7[2], 10), minMonth: parseInt(o8[1], 10) - 1, maxMonth: parseInt(n7[1], 10) - 1, minYear: parseInt(o8[0], 10), maxYear: parseInt(n7[0], 10) };
      } }, { key: "isLeapYear", value: function(t6) {
        return t6 % 4 == 0 && t6 % 100 != 0 || t6 % 400 == 0;
      } }, { key: "calculcateLastDaysOfMonth", value: function(t6, e8, i8) {
        return this.determineDaysOfMonths(t6, e8) - i8;
      } }, { key: "determineDaysOfYear", value: function(t6) {
        var e8 = 365;
        return this.isLeapYear(t6) && (e8 = 366), e8;
      } }, { key: "determineRemainingDaysOfYear", value: function(t6, e8, i8) {
        var a4 = this.daysCntOfYear[e8] + i8;
        return e8 > 1 && this.isLeapYear() && a4++, a4;
      } }, { key: "determineDaysOfMonths", value: function(t6, e8) {
        var i8 = 30;
        switch (t6 = m2.monthMod(t6), true) {
          case this.months30.indexOf(t6) > -1:
            2 === t6 && (i8 = this.isLeapYear(e8) ? 29 : 28);
            break;
          case this.months31.indexOf(t6) > -1:
          default:
            i8 = 31;
        }
        return i8;
      } }]), t5;
    }();
    var P2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.tooltipKeyFormat = "dd MMM";
      }
      return s4(t5, [{ key: "xLabelFormat", value: function(t6, e8, i8, a4) {
        var s5 = this.w;
        if ("datetime" === s5.config.xaxis.type && void 0 === s5.config.xaxis.labels.formatter && void 0 === s5.config.tooltip.x.formatter) {
          var r7 = new L2(this.ctx);
          return r7.formatDate(r7.getDate(e8), s5.config.tooltip.x.format);
        }
        return t6(e8, i8, a4);
      } }, { key: "defaultGeneralFormatter", value: function(t6) {
        return Array.isArray(t6) ? t6.map(function(t7) {
          return t7;
        }) : t6;
      } }, { key: "defaultYFormatter", value: function(t6, e8, i8) {
        var a4 = this.w;
        if (m2.isNumber(t6)) if (0 !== a4.globals.yValueDecimal) t6 = t6.toFixed(void 0 !== e8.decimalsInFloat ? e8.decimalsInFloat : a4.globals.yValueDecimal);
        else {
          var s5 = t6.toFixed(0);
          t6 = t6 == s5 ? s5 : t6.toFixed(1);
        }
        return t6;
      } }, { key: "setLabelFormatters", value: function() {
        var t6 = this, e8 = this.w;
        return e8.globals.xaxisTooltipFormatter = function(e9) {
          return t6.defaultGeneralFormatter(e9);
        }, e8.globals.ttKeyFormatter = function(e9) {
          return t6.defaultGeneralFormatter(e9);
        }, e8.globals.ttZFormatter = function(t7) {
          return t7;
        }, e8.globals.legendFormatter = function(e9) {
          return t6.defaultGeneralFormatter(e9);
        }, void 0 !== e8.config.xaxis.labels.formatter ? e8.globals.xLabelFormatter = e8.config.xaxis.labels.formatter : e8.globals.xLabelFormatter = function(t7) {
          if (m2.isNumber(t7)) {
            if (!e8.config.xaxis.convertedCatToNumeric && "numeric" === e8.config.xaxis.type) {
              if (m2.isNumber(e8.config.xaxis.decimalsInFloat)) return t7.toFixed(e8.config.xaxis.decimalsInFloat);
              var i8 = e8.globals.maxX - e8.globals.minX;
              return i8 > 0 && i8 < 100 ? t7.toFixed(1) : t7.toFixed(0);
            }
            if (e8.globals.isBarHorizontal) {
              if (e8.globals.maxY - e8.globals.minYArr < 4) return t7.toFixed(1);
            }
            return t7.toFixed(0);
          }
          return t7;
        }, "function" == typeof e8.config.tooltip.x.formatter ? e8.globals.ttKeyFormatter = e8.config.tooltip.x.formatter : e8.globals.ttKeyFormatter = e8.globals.xLabelFormatter, "function" == typeof e8.config.xaxis.tooltip.formatter && (e8.globals.xaxisTooltipFormatter = e8.config.xaxis.tooltip.formatter), (Array.isArray(e8.config.tooltip.y) || void 0 !== e8.config.tooltip.y.formatter) && (e8.globals.ttVal = e8.config.tooltip.y), void 0 !== e8.config.tooltip.z.formatter && (e8.globals.ttZFormatter = e8.config.tooltip.z.formatter), void 0 !== e8.config.legend.formatter && (e8.globals.legendFormatter = e8.config.legend.formatter), e8.config.yaxis.forEach(function(i8, a4) {
          void 0 !== i8.labels.formatter ? e8.globals.yLabelFormatters[a4] = i8.labels.formatter : e8.globals.yLabelFormatters[a4] = function(s5) {
            return e8.globals.xyCharts ? Array.isArray(s5) ? s5.map(function(e9) {
              return t6.defaultYFormatter(e9, i8, a4);
            }) : t6.defaultYFormatter(s5, i8, a4) : s5;
          };
        }), e8.globals;
      } }, { key: "heatmapLabelFormatters", value: function() {
        var t6 = this.w;
        if ("heatmap" === t6.config.chart.type) {
          t6.globals.yAxisScale[0].result = t6.globals.seriesNames.slice();
          var e8 = t6.globals.seriesNames.reduce(function(t7, e9) {
            return t7.length > e9.length ? t7 : e9;
          }, 0);
          t6.globals.yAxisScale[0].niceMax = e8, t6.globals.yAxisScale[0].niceMin = e8;
        }
      } }]), t5;
    }();
    var M2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "getLabel", value: function(t6, e8, i8, a4) {
        var s5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], r7 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px", o8 = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], n7 = this.w, l4 = void 0 === t6[a4] ? "" : t6[a4], h4 = l4, c5 = n7.globals.xLabelFormatter, d4 = n7.config.xaxis.labels.formatter, g3 = false, u4 = new P2(this.ctx), f4 = l4;
        o8 && (h4 = u4.xLabelFormat(c5, l4, f4, { i: a4, dateFormatter: new L2(this.ctx).formatDate, w: n7 }), void 0 !== d4 && (h4 = d4(l4, t6[a4], { i: a4, dateFormatter: new L2(this.ctx).formatDate, w: n7 })));
        var p4, x3;
        e8.length > 0 ? (p4 = e8[a4].unit, x3 = null, e8.forEach(function(t7) {
          "month" === t7.unit ? x3 = "year" : "day" === t7.unit ? x3 = "month" : "hour" === t7.unit ? x3 = "day" : "minute" === t7.unit && (x3 = "hour");
        }), g3 = x3 === p4, i8 = e8[a4].position, h4 = e8[a4].value) : "datetime" === n7.config.xaxis.type && void 0 === d4 && (h4 = ""), void 0 === h4 && (h4 = ""), h4 = Array.isArray(h4) ? h4 : h4.toString();
        var b4 = new k2(this.ctx), v3 = {};
        v3 = n7.globals.rotateXLabels && o8 ? b4.getTextRects(h4, parseInt(r7, 10), null, "rotate(".concat(n7.config.xaxis.labels.rotate, " 0 0)"), false) : b4.getTextRects(h4, parseInt(r7, 10));
        var m3 = !n7.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
        return !Array.isArray(h4) && ("NaN" === String(h4) || s5.indexOf(h4) >= 0 && m3) && (h4 = ""), { x: i8, text: h4, textRect: v3, isBold: g3 };
      } }, { key: "checkLabelBasedOnTickamount", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = a4.config.xaxis.tickAmount;
        return "dataPoints" === s5 && (s5 = Math.round(a4.globals.gridWidth / 120)), s5 > i8 || t6 % Math.round(i8 / (s5 + 1)) == 0 || (e8.text = ""), e8;
      } }, { key: "checkForOverflowingLabels", value: function(t6, e8, i8, a4, s5) {
        var r7 = this.w;
        if (0 === t6 && r7.globals.skipFirstTimelinelabel && (e8.text = ""), t6 === i8 - 1 && r7.globals.skipLastTimelinelabel && (e8.text = ""), r7.config.xaxis.labels.hideOverlappingLabels && a4.length > 0) {
          var o8 = s5[s5.length - 1];
          e8.x < o8.textRect.width / (r7.globals.rotateXLabels ? Math.abs(r7.config.xaxis.labels.rotate) / 12 : 1.01) + o8.x && (e8.text = "");
        }
        return e8;
      } }, { key: "checkForReversedLabels", value: function(t6, e8) {
        var i8 = this.w;
        return i8.config.yaxis[t6] && i8.config.yaxis[t6].reversed && e8.reverse(), e8;
      } }, { key: "yAxisAllSeriesCollapsed", value: function(t6) {
        var e8 = this.w.globals;
        return !e8.seriesYAxisMap[t6].some(function(t7) {
          return -1 === e8.collapsedSeriesIndices.indexOf(t7);
        });
      } }, { key: "translateYAxisIndex", value: function(t6) {
        var e8 = this.w, i8 = e8.globals, a4 = e8.config.yaxis;
        return i8.series.length > a4.length || a4.some(function(t7) {
          return Array.isArray(t7.seriesName);
        }) ? t6 : i8.seriesYAxisReverseMap[t6];
      } }, { key: "isYAxisHidden", value: function(t6) {
        var e8 = this.w, i8 = e8.config.yaxis[t6];
        if (!i8.show || this.yAxisAllSeriesCollapsed(t6)) return true;
        if (!i8.showForNullSeries) {
          var a4 = e8.globals.seriesYAxisMap[t6], s5 = new A2(this.ctx);
          return a4.every(function(t7) {
            return s5.isSeriesNull(t7);
          });
        }
        return false;
      } }, { key: "getYAxisForeColor", value: function(t6, e8) {
        var i8 = this.w;
        return Array.isArray(t6) && i8.globals.yAxisScale[e8] && this.ctx.theme.pushExtraColors(t6, i8.globals.yAxisScale[e8].result.length, false), t6;
      } }, { key: "drawYAxisTicks", value: function(t6, e8, i8, a4, s5, r7, o8) {
        var n7 = this.w, l4 = new k2(this.ctx), h4 = n7.globals.translateY + n7.config.yaxis[s5].labels.offsetY;
        if (n7.globals.isBarHorizontal ? h4 = 0 : "heatmap" === n7.config.chart.type && (h4 += r7 / 2), a4.show && e8 > 0) {
          true === n7.config.yaxis[s5].opposite && (t6 += a4.width);
          for (var c5 = e8; c5 >= 0; c5--) {
            var d4 = l4.drawLine(t6 + i8.offsetX - a4.width + a4.offsetX, h4 + a4.offsetY, t6 + i8.offsetX + a4.offsetX, h4 + a4.offsetY, a4.color);
            o8.add(d4), h4 += r7;
          }
        }
      } }]), t5;
    }();
    var I2 = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.annoCtx = e8, this.helpers = new S3(this.annoCtx), this.axesUtils = new M2(this.annoCtx);
      }
      return s4(t5, [{ key: "addYaxisAnnotation", value: function(t6, e8, i8) {
        var a4, s5 = this.w, r7 = t6.strokeDashArray, o8 = this.helpers.getY1Y2("y1", t6), n7 = o8.yP, l4 = o8.clipped, h4 = true, c5 = false, d4 = t6.label.text;
        if (null === t6.y2 || void 0 === t6.y2) {
          if (!l4) {
            c5 = true;
            var g3 = this.annoCtx.graphics.drawLine(0 + t6.offsetX, n7 + t6.offsetY, this._getYAxisAnnotationWidth(t6), n7 + t6.offsetY, t6.borderColor, r7, t6.borderWidth);
            e8.appendChild(g3.node), t6.id && g3.node.classList.add(t6.id);
          }
        } else {
          if (a4 = (o8 = this.helpers.getY1Y2("y2", t6)).yP, h4 = o8.clipped, a4 > n7) {
            var u4 = n7;
            n7 = a4, a4 = u4;
          }
          if (!l4 || !h4) {
            c5 = true;
            var f4 = this.annoCtx.graphics.drawRect(0 + t6.offsetX, a4 + t6.offsetY, this._getYAxisAnnotationWidth(t6), n7 - a4, 0, t6.fillColor, t6.opacity, 1, t6.borderColor, r7);
            f4.node.classList.add("apexcharts-annotation-rect"), f4.attr("clip-path", "url(#gridRectMask".concat(s5.globals.cuid, ")")), e8.appendChild(f4.node), t6.id && f4.node.classList.add(t6.id);
          }
        }
        if (c5) {
          var p4 = "right" === t6.label.position ? s5.globals.gridWidth : "center" === t6.label.position ? s5.globals.gridWidth / 2 : 0, x3 = this.annoCtx.graphics.drawText({ x: p4 + t6.label.offsetX, y: (null != a4 ? a4 : n7) + t6.label.offsetY - 3, text: d4, textAnchor: t6.label.textAnchor, fontSize: t6.label.style.fontSize, fontFamily: t6.label.style.fontFamily, fontWeight: t6.label.style.fontWeight, foreColor: t6.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t6.label.style.cssClass, " ").concat(t6.id ? t6.id : "") });
          x3.attr({ rel: i8 }), e8.appendChild(x3.node);
        }
      } }, { key: "_getYAxisAnnotationWidth", value: function(t6) {
        var e8 = this.w;
        e8.globals.gridWidth;
        return (t6.width.indexOf("%") > -1 ? e8.globals.gridWidth * parseInt(t6.width, 10) / 100 : parseInt(t6.width, 10)) + t6.offsetX;
      } }, { key: "drawYAxisAnnotations", value: function() {
        var t6 = this, e8 = this.w, i8 = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
        return e8.config.annotations.yaxis.forEach(function(e9, a4) {
          e9.yAxisIndex = t6.axesUtils.translateYAxisIndex(e9.yAxisIndex), t6.axesUtils.isYAxisHidden(e9.yAxisIndex) && t6.axesUtils.yAxisAllSeriesCollapsed(e9.yAxisIndex) || t6.addYaxisAnnotation(e9, i8.node, a4);
        }), i8;
      } }]), t5;
    }();
    var T2 = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.annoCtx = e8, this.helpers = new S3(this.annoCtx);
      }
      return s4(t5, [{ key: "addPointAnnotation", value: function(t6, e8, i8) {
        if (!(this.w.globals.collapsedSeriesIndices.indexOf(t6.seriesIndex) > -1)) {
          var a4 = this.helpers.getX1X2("x1", t6), s5 = a4.x, r7 = a4.clipped, o8 = (a4 = this.helpers.getY1Y2("y1", t6)).yP, n7 = a4.clipped;
          if (m2.isNumber(s5) && !n7 && !r7) {
            var l4 = { pSize: t6.marker.size, pointStrokeWidth: t6.marker.strokeWidth, pointFillColor: t6.marker.fillColor, pointStrokeColor: t6.marker.strokeColor, shape: t6.marker.shape, pRadius: t6.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t6.marker.cssClass, " ").concat(t6.id ? t6.id : "") }, h4 = this.annoCtx.graphics.drawMarker(s5 + t6.marker.offsetX, o8 + t6.marker.offsetY, l4);
            e8.appendChild(h4.node);
            var c5 = t6.label.text ? t6.label.text : "", d4 = this.annoCtx.graphics.drawText({ x: s5 + t6.label.offsetX, y: o8 + t6.label.offsetY - t6.marker.size - parseFloat(t6.label.style.fontSize) / 1.6, text: c5, textAnchor: t6.label.textAnchor, fontSize: t6.label.style.fontSize, fontFamily: t6.label.style.fontFamily, fontWeight: t6.label.style.fontWeight, foreColor: t6.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t6.label.style.cssClass, " ").concat(t6.id ? t6.id : "") });
            if (d4.attr({ rel: i8 }), e8.appendChild(d4.node), t6.customSVG.SVG) {
              var g3 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t6.customSVG.cssClass });
              g3.attr({ transform: "translate(".concat(s5 + t6.customSVG.offsetX, ", ").concat(o8 + t6.customSVG.offsetY, ")") }), g3.node.innerHTML = t6.customSVG.SVG, e8.appendChild(g3.node);
            }
            if (t6.image.path) {
              var u4 = t6.image.width ? t6.image.width : 20, f4 = t6.image.height ? t6.image.height : 20;
              h4 = this.annoCtx.addImage({ x: s5 + t6.image.offsetX - u4 / 2, y: o8 + t6.image.offsetY - f4 / 2, width: u4, height: f4, path: t6.image.path, appendTo: ".apexcharts-point-annotations" });
            }
            t6.mouseEnter && h4.node.addEventListener("mouseenter", t6.mouseEnter.bind(this, t6)), t6.mouseLeave && h4.node.addEventListener("mouseleave", t6.mouseLeave.bind(this, t6)), t6.click && h4.node.addEventListener("click", t6.click.bind(this, t6));
          }
        }
      } }, { key: "drawPointAnnotations", value: function() {
        var t6 = this, e8 = this.w, i8 = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
        return e8.config.annotations.points.map(function(e9, a4) {
          t6.addPointAnnotation(e9, i8.node, a4);
        }), i8;
      } }]), t5;
    }();
    var z2 = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } };
    var X = function() {
      function t5() {
        i7(this, t5), this.yAxis = { show: true, showAlways: false, showForNullSeries: true, seriesName: void 0, opposite: false, reversed: false, logarithmic: false, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: false, max: void 0, min: void 0, floating: false, decimalsInFloat: void 0, labels: { show: true, showDuplicates: false, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: false, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: false, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: false, offsetX: 0 }, crosshairs: { show: true, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
      }
      return s4(t5, [{ key: "init", value: function() {
        return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: true, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: true }, dynamicAnimation: { enabled: true, speed: 350 } }, background: "", locales: [z2], defaultLocale: "en", dropShadow: { enabled: false, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: true, redrawOnWindowResize: true, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: false, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: false }, brush: { enabled: false, autoScaleYaxis: true, target: void 0, targets: void 0 }, stacked: false, stackOnlyBar: true, stackType: "normal", toolbar: { show: true, offsetX: 0, offsetY: 0, tools: { download: true, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: true, type: "x", autoScaleYaxis: false, allowMouseWheelZoom: true, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { line: { isSlopeChart: false }, area: { fillTo: "origin" }, bar: { horizontal: false, columnWidth: "70%", barHeight: "70%", distributed: false, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: true, rangeBarGroupRows: false, hideZeroBarsWhenGrouped: false, isDumbbell: false, dumbbellColors: void 0, isFunnel: false, isFunnel3d: true, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: true, orientation: "horizontal", total: { enabled: false, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: true, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: true } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: true, shadeIntensity: 0.5, reverseNegativeShade: false, distributed: false, useFillColorAsStroke: false, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: true, shadeIntensity: 0.5, distributed: false, reverseNegativeShade: false, useFillColorAsStroke: false, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: false, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: false, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: true, position: "front", dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: true, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: false, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: true, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(t6) {
          return t6;
        } }, value: { show: true, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(t6) {
          return t6 + "%";
        } }, total: { show: false, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(t6) {
          return t6.globals.seriesTotals.reduce(function(t7, e8) {
            return t7 + e8;
          }, 0) / t6.globals.series.length + "%";
        } } }, barLabels: { enabled: false, offsetX: 0, offsetY: 0, useSeriesColors: true, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(t6) {
          return t6;
        }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: true, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: false, name: { show: true, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(t6) {
          return t6;
        } }, value: { show: true, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(t6) {
          return t6;
        } }, total: { show: false, showAlways: false, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(t6) {
          return t6.globals.seriesTotals.reduce(function(t7, e8) {
            return t7 + e8;
          }, 0);
        } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: true, enabledOnSeries: void 0, formatter: function(t6) {
          return null !== t6 ? t6 : "";
        }, textAnchor: "middle", distributed: false, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: true, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, dropShadow: { enabled: false, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: true, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: true, showForSingleSeries: false, showForNullSeries: true, showForZeroSeries: true, floating: false, position: "bottom", horizontalAlign: "center", inverseOrder: false, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: false }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: true }, onItemHover: { highlightDataSeries: true } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: true, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.1 } }, active: { allowMultipleDataPointsSelection: false, filter: { type: "darken", value: 0.5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: false, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: false, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: true, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: true, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: true, enabledOnSeries: void 0, shared: true, hideEmptySeries: false, followCursor: false, intersect: false, inverseOrder: false, custom: void 0, fillSeriesColor: false, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: false }, x: { show: true, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(t6) {
          return t6 ? t6 + ": " : "";
        } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: true, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: false, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: false, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, trim: false, minHeight: void 0, maxHeight: 120, showDuplicates: true, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: true, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: true, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: true, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: false, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: true, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: false, left: 0, top: 0, blur: 1, opacity: 0.4 } }, tooltip: { enabled: true, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: false, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
      } }]), t5;
    }();
    var E2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.graphics = new k2(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = true), this.helpers = new S3(this), this.xAxisAnnotations = new C3(this), this.yAxisAnnotations = new I2(this), this.pointsAnnotations = new T2(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = true), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
      }
      return s4(t5, [{ key: "drawAxesAnnotations", value: function() {
        var t6 = this.w;
        if (t6.globals.axisCharts && t6.globals.dataPoints) {
          for (var e8 = this.yAxisAnnotations.drawYAxisAnnotations(), i8 = this.xAxisAnnotations.drawXAxisAnnotations(), a4 = this.pointsAnnotations.drawPointAnnotations(), s5 = t6.config.chart.animations.enabled, r7 = [e8, i8, a4], o8 = [i8.node, e8.node, a4.node], n7 = 0; n7 < 3; n7++) t6.globals.dom.elGraphical.add(r7[n7]), !s5 || t6.globals.resized || t6.globals.dataChanged || "scatter" !== t6.config.chart.type && "bubble" !== t6.config.chart.type && t6.globals.dataPoints > 1 && o8[n7].classList.add("apexcharts-element-hidden"), t6.globals.delayedElements.push({ el: o8[n7], index: 0 });
          this.helpers.annotationsBackground();
        }
      } }, { key: "drawImageAnnos", value: function() {
        var t6 = this;
        this.w.config.annotations.images.map(function(e8, i8) {
          t6.addImage(e8, i8);
        });
      } }, { key: "drawTextAnnos", value: function() {
        var t6 = this;
        this.w.config.annotations.texts.map(function(e8, i8) {
          t6.addText(e8, i8);
        });
      } }, { key: "addXaxisAnnotation", value: function(t6, e8, i8) {
        this.xAxisAnnotations.addXaxisAnnotation(t6, e8, i8);
      } }, { key: "addYaxisAnnotation", value: function(t6, e8, i8) {
        this.yAxisAnnotations.addYaxisAnnotation(t6, e8, i8);
      } }, { key: "addPointAnnotation", value: function(t6, e8, i8) {
        this.pointsAnnotations.addPointAnnotation(t6, e8, i8);
      } }, { key: "addText", value: function(t6, e8) {
        var i8 = t6.x, a4 = t6.y, s5 = t6.text, r7 = t6.textAnchor, o8 = t6.foreColor, n7 = t6.fontSize, l4 = t6.fontFamily, h4 = t6.fontWeight, c5 = t6.cssClass, d4 = t6.backgroundColor, g3 = t6.borderWidth, u4 = t6.strokeDashArray, f4 = t6.borderRadius, p4 = t6.borderColor, x3 = t6.appendTo, b4 = void 0 === x3 ? ".apexcharts-svg" : x3, v3 = t6.paddingLeft, m3 = void 0 === v3 ? 4 : v3, y4 = t6.paddingRight, w3 = void 0 === y4 ? 4 : y4, k3 = t6.paddingBottom, A3 = void 0 === k3 ? 2 : k3, S4 = t6.paddingTop, C4 = void 0 === S4 ? 2 : S4, L3 = this.w, P3 = this.graphics.drawText({ x: i8, y: a4, text: s5, textAnchor: r7 || "start", fontSize: n7 || "12px", fontWeight: h4 || "regular", fontFamily: l4 || L3.config.chart.fontFamily, foreColor: o8 || L3.config.chart.foreColor, cssClass: c5 }), M3 = L3.globals.dom.baseEl.querySelector(b4);
        M3 && M3.appendChild(P3.node);
        var I3 = P3.bbox();
        if (s5) {
          var T3 = this.graphics.drawRect(I3.x - m3, I3.y - C4, I3.width + m3 + w3, I3.height + A3 + C4, f4, d4 || "transparent", 1, g3, p4, u4);
          M3.insertBefore(T3.node, P3.node);
        }
      } }, { key: "addImage", value: function(t6, e8) {
        var i8 = this.w, a4 = t6.path, s5 = t6.x, r7 = void 0 === s5 ? 0 : s5, o8 = t6.y, n7 = void 0 === o8 ? 0 : o8, l4 = t6.width, h4 = void 0 === l4 ? 20 : l4, c5 = t6.height, d4 = void 0 === c5 ? 20 : c5, g3 = t6.appendTo, u4 = void 0 === g3 ? ".apexcharts-svg" : g3, f4 = i8.globals.dom.Paper.image(a4);
        f4.size(h4, d4).move(r7, n7);
        var p4 = i8.globals.dom.baseEl.querySelector(u4);
        return p4 && p4.appendChild(f4.node), f4;
      } }, { key: "addXaxisAnnotationExternal", value: function(t6, e8, i8) {
        return this.addAnnotationExternal({ params: t6, pushToMemory: e8, context: i8, type: "xaxis", contextMethod: i8.addXaxisAnnotation }), i8;
      } }, { key: "addYaxisAnnotationExternal", value: function(t6, e8, i8) {
        return this.addAnnotationExternal({ params: t6, pushToMemory: e8, context: i8, type: "yaxis", contextMethod: i8.addYaxisAnnotation }), i8;
      } }, { key: "addPointAnnotationExternal", value: function(t6, e8, i8) {
        return void 0 === this.invertAxis && (this.invertAxis = i8.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t6, pushToMemory: e8, context: i8, type: "point", contextMethod: i8.addPointAnnotation }), i8;
      } }, { key: "addAnnotationExternal", value: function(t6) {
        var e8 = t6.params, i8 = t6.pushToMemory, a4 = t6.context, s5 = t6.type, r7 = t6.contextMethod, o8 = a4, n7 = o8.w, l4 = n7.globals.dom.baseEl.querySelector(".apexcharts-".concat(s5, "-annotations")), h4 = l4.childNodes.length + 1, c5 = new X(), d4 = Object.assign({}, "xaxis" === s5 ? c5.xAxisAnnotation : "yaxis" === s5 ? c5.yAxisAnnotation : c5.pointAnnotation), g3 = m2.extend(d4, e8);
        switch (s5) {
          case "xaxis":
            this.addXaxisAnnotation(g3, l4, h4);
            break;
          case "yaxis":
            this.addYaxisAnnotation(g3, l4, h4);
            break;
          case "point":
            this.addPointAnnotation(g3, l4, h4);
        }
        var u4 = n7.globals.dom.baseEl.querySelector(".apexcharts-".concat(s5, "-annotations .apexcharts-").concat(s5, "-annotation-label[rel='").concat(h4, "']")), f4 = this.helpers.addBackgroundToAnno(u4, g3);
        return f4 && l4.insertBefore(f4.node, u4), i8 && n7.globals.memory.methodsToExec.push({ context: o8, id: g3.id ? g3.id : m2.randomId(), method: r7, label: "addAnnotation", params: e8 }), a4;
      } }, { key: "clearAnnotations", value: function(t6) {
        for (var e8 = t6.w, i8 = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), a4 = e8.globals.memory.methodsToExec.length - 1; a4 >= 0; a4--) "addText" !== e8.globals.memory.methodsToExec[a4].label && "addAnnotation" !== e8.globals.memory.methodsToExec[a4].label || e8.globals.memory.methodsToExec.splice(a4, 1);
        i8 = m2.listToArray(i8), Array.prototype.forEach.call(i8, function(t7) {
          for (; t7.firstChild; ) t7.removeChild(t7.firstChild);
        });
      } }, { key: "removeAnnotation", value: function(t6, e8) {
        var i8 = t6.w, a4 = i8.globals.dom.baseEl.querySelectorAll(".".concat(e8));
        a4 && (i8.globals.memory.methodsToExec.map(function(t7, a5) {
          t7.id === e8 && i8.globals.memory.methodsToExec.splice(a5, 1);
        }), Array.prototype.forEach.call(a4, function(t7) {
          t7.parentElement.removeChild(t7);
        }));
      } }]), t5;
    }();
    var Y = function(t5) {
      var e8, i8 = t5.isTimeline, a4 = t5.ctx, s5 = t5.seriesIndex, r7 = t5.dataPointIndex, o8 = t5.y1, n7 = t5.y2, l4 = t5.w, h4 = l4.globals.seriesRangeStart[s5][r7], c5 = l4.globals.seriesRangeEnd[s5][r7], d4 = l4.globals.labels[r7], g3 = l4.config.series[s5].name ? l4.config.series[s5].name : "", u4 = l4.globals.ttKeyFormatter, f4 = l4.config.tooltip.y.title.formatter, p4 = { w: l4, seriesIndex: s5, dataPointIndex: r7, start: h4, end: c5 };
      ("function" == typeof f4 && (g3 = f4(g3, p4)), null !== (e8 = l4.config.series[s5].data[r7]) && void 0 !== e8 && e8.x && (d4 = l4.config.series[s5].data[r7].x), i8) || "datetime" === l4.config.xaxis.type && (d4 = new P2(a4).xLabelFormat(l4.globals.ttKeyFormatter, d4, d4, { i: void 0, dateFormatter: new L2(a4).formatDate, w: l4 }));
      "function" == typeof u4 && (d4 = u4(d4, p4)), Number.isFinite(o8) && Number.isFinite(n7) && (h4 = o8, c5 = n7);
      var x3 = "", b4 = "", v3 = l4.globals.colors[s5];
      if (void 0 === l4.config.tooltip.x.formatter) if ("datetime" === l4.config.xaxis.type) {
        var m3 = new L2(a4);
        x3 = m3.formatDate(m3.getDate(h4), l4.config.tooltip.x.format), b4 = m3.formatDate(m3.getDate(c5), l4.config.tooltip.x.format);
      } else x3 = h4, b4 = c5;
      else x3 = l4.config.tooltip.x.formatter(h4), b4 = l4.config.tooltip.x.formatter(c5);
      return { start: h4, end: c5, startVal: x3, endVal: b4, ylabel: d4, color: v3, seriesName: g3 };
    };
    var R2 = function(t5) {
      var e8 = t5.color, i8 = t5.seriesName, a4 = t5.ylabel, s5 = t5.start, r7 = t5.end, o8 = t5.seriesIndex, n7 = t5.dataPointIndex, l4 = t5.ctx.tooltip.tooltipLabels.getFormatters(o8);
      s5 = l4.yLbFormatter(s5), r7 = l4.yLbFormatter(r7);
      var h4 = l4.yLbFormatter(t5.w.globals.series[o8][n7]), c5 = '<span class="value start-value">\n  '.concat(s5, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r7, "\n  </span>");
      return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e8 + '">' + (i8 || "") + '</span></div><div> <span class="category">' + a4 + ": </span> " + (t5.w.globals.comboCharts ? "rangeArea" === t5.w.config.series[o8].type || "rangeBar" === t5.w.config.series[o8].type ? c5 : "<span>".concat(h4, "</span>") : c5) + " </div></div>";
    };
    var F = function() {
      function t5(e8) {
        i7(this, t5), this.opts = e8;
      }
      return s4(t5, [{ key: "hideYAxis", value: function() {
        this.opts.yaxis[0].show = false, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = false, this.opts.yaxis[0].axisTicks.show = false, this.opts.yaxis[0].floating = true;
      } }, { key: "line", value: function() {
        return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: false }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
      } }, { key: "sparkline", value: function(t6) {
        this.hideYAxis();
        return m2.extend(t6, { grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: false }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } }, chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false } });
      } }, { key: "slope", value: function() {
        return this.hideYAxis(), { chart: { toolbar: { show: false }, zoom: { enabled: false } }, dataLabels: { enabled: true, formatter: function(t6, e8) {
          var i8 = e8.w.config.series[e8.seriesIndex].name;
          return null !== t6 ? i8 + ": " + t6 : "";
        }, background: { enabled: false }, offsetX: -5 }, grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: false }, crosshairs: { show: false } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: false }, tooltip: { shared: false, intersect: true, followCursor: true }, stroke: { width: 5, curve: "straight" } };
      } }, { key: "bar", value: function() {
        return { chart: { stacked: false, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: false } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: false, intersect: true }, xaxis: { tooltip: { enabled: false }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: false }, stroke: { width: 0 } } } };
      } }, { key: "funnel", value: function() {
        return this.hideYAxis(), g2(g2({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: false } } }, plotOptions: { bar: { horizontal: true, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: false, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: false }, tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } } });
      } }, { key: "candlestick", value: function() {
        var t6 = this;
        return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: function(e8) {
          var i8 = e8.seriesIndex, a4 = e8.dataPointIndex, s5 = e8.w;
          return t6._getBoxTooltip(s5, i8, a4, ["Open", "High", "", "Low", "Close"], "candlestick");
        } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
      } }, { key: "boxPlot", value: function() {
        var t6 = this;
        return { chart: { animations: { dynamicAnimation: { enabled: false } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: false }, tooltip: { shared: true, custom: function(e8) {
          var i8 = e8.seriesIndex, a4 = e8.dataPointIndex, s5 = e8.w;
          return t6._getBoxTooltip(s5, i8, a4, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
        } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
      } }, { key: "rangeBar", value: function() {
        return { chart: { animations: { animateGradually: false } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: false, formatter: function(t6, e8) {
          e8.ctx;
          var i8 = e8.seriesIndex, a4 = e8.dataPointIndex, s5 = e8.w, r7 = function() {
            var t7 = s5.globals.seriesRangeStart[i8][a4];
            return s5.globals.seriesRangeEnd[i8][a4] - t7;
          };
          return s5.globals.comboCharts ? "rangeBar" === s5.config.series[i8].type || "rangeArea" === s5.config.series[i8].type ? r7() : t6 : r7();
        }, background: { enabled: false }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: false, followCursor: true, custom: function(t6) {
          return t6.w.config.plotOptions && t6.w.config.plotOptions.bar && t6.w.config.plotOptions.bar.horizontal ? function(t7) {
            var e8 = Y(g2(g2({}, t7), {}, { isTimeline: true })), i8 = e8.color, a4 = e8.seriesName, s5 = e8.ylabel, r7 = e8.startVal, o8 = e8.endVal;
            return R2(g2(g2({}, t7), {}, { color: i8, seriesName: a4, ylabel: s5, start: r7, end: o8 }));
          }(t6) : function(t7) {
            var e8 = Y(t7), i8 = e8.color, a4 = e8.seriesName, s5 = e8.ylabel, r7 = e8.start, o8 = e8.end;
            return R2(g2(g2({}, t7), {}, { color: i8, seriesName: a4, ylabel: s5, start: r7, end: o8 }));
          }(t6);
        } }, xaxis: { tickPlacement: "between", tooltip: { enabled: false }, crosshairs: { stroke: { width: 0 } } } };
      } }, { key: "dumbbell", value: function(t6) {
        var e8, i8;
        return null !== (e8 = t6.plotOptions.bar) && void 0 !== e8 && e8.barHeight || (t6.plotOptions.bar.barHeight = 2), null !== (i8 = t6.plotOptions.bar) && void 0 !== i8 && i8.columnWidth || (t6.plotOptions.bar.columnWidth = 2), t6;
      } }, { key: "area", value: function() {
        return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: false, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: false } };
      } }, { key: "rangeArea", value: function() {
        return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: false, shared: true, followCursor: true, custom: function(t6) {
          return function(t7) {
            var e8 = Y(t7), i8 = e8.color, a4 = e8.seriesName, s5 = e8.ylabel, r7 = e8.start, o8 = e8.end;
            return R2(g2(g2({}, t7), {}, { color: i8, seriesName: a4, ylabel: s5, start: r7, end: o8 }));
          }(t6);
        } } };
      } }, { key: "brush", value: function(t6) {
        return m2.extend(t6, { chart: { toolbar: { autoSelected: "selection", show: false }, zoom: { enabled: false } }, dataLabels: { enabled: false }, stroke: { width: 1 }, tooltip: { enabled: false }, xaxis: { tooltip: { enabled: false } } });
      } }, { key: "stacked100", value: function(t6) {
        t6.dataLabels = t6.dataLabels || {}, t6.dataLabels.formatter = t6.dataLabels.formatter || void 0;
        var e8 = t6.dataLabels.formatter;
        return t6.yaxis.forEach(function(e9, i8) {
          t6.yaxis[i8].min = 0, t6.yaxis[i8].max = 100;
        }), "bar" === t6.chart.type && (t6.dataLabels.formatter = e8 || function(t7) {
          return "number" == typeof t7 && t7 ? t7.toFixed(0) + "%" : t7;
        }), t6;
      } }, { key: "stackedBars", value: function() {
        var t6 = this.bar();
        return g2(g2({}, t6), {}, { plotOptions: g2(g2({}, t6.plotOptions), {}, { bar: g2(g2({}, t6.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
      } }, { key: "convertCatToNumeric", value: function(t6) {
        return t6.xaxis.convertedCatToNumeric = true, t6;
      } }, { key: "convertCatToNumericXaxis", value: function(t6, e8, i8) {
        t6.xaxis.type = "numeric", t6.xaxis.labels = t6.xaxis.labels || {}, t6.xaxis.labels.formatter = t6.xaxis.labels.formatter || function(t7) {
          return m2.isNumber(t7) ? Math.floor(t7) : t7;
        };
        var a4 = t6.xaxis.labels.formatter, s5 = t6.xaxis.categories && t6.xaxis.categories.length ? t6.xaxis.categories : t6.labels;
        return i8 && i8.length && (s5 = i8.map(function(t7) {
          return Array.isArray(t7) ? t7 : String(t7);
        })), s5 && s5.length && (t6.xaxis.labels.formatter = function(t7) {
          return m2.isNumber(t7) ? a4(s5[Math.floor(t7) - 1]) : a4(t7);
        }), t6.xaxis.categories = [], t6.labels = [], t6.xaxis.tickAmount = t6.xaxis.tickAmount || "dataPoints", t6;
      } }, { key: "bubble", value: function() {
        return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: false, intersect: true }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: true, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
      } }, { key: "scatter", value: function() {
        return { dataLabels: { enabled: false }, tooltip: { shared: false, intersect: true }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
      } }, { key: "heatmap", value: function() {
        return { chart: { stacked: false }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: true, marker: { show: false }, x: { show: false } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
      } }, { key: "treemap", value: function() {
        return { chart: { zoom: { enabled: false } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: true, width: 2, colors: ["#fff"] }, legend: { show: false }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: true, x: { show: false } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: false }, tooltip: { enabled: false } } };
      } }, { key: "pie", value: function() {
        return { chart: { toolbar: { show: false } }, plotOptions: { pie: { donut: { labels: { show: false } } } }, dataLabels: { formatter: function(t6) {
          return t6.toFixed(1) + "%";
        }, style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
      } }, { key: "donut", value: function() {
        return { chart: { toolbar: { show: false } }, dataLabels: { formatter: function(t6) {
          return t6.toFixed(1) + "%";
        }, style: { colors: ["#fff"] }, background: { enabled: false }, dropShadow: { enabled: true } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
      } }, { key: "polarArea", value: function() {
        return { chart: { toolbar: { show: false } }, dataLabels: { formatter: function(t6) {
          return t6.toFixed(1) + "%";
        }, enabled: false }, stroke: { show: true, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: true }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
      } }, { key: "radar", value: function() {
        return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: false, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: false, intersect: true, followCursor: true }, grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: function(t6) {
          return t6;
        }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: false }, crosshairs: { show: false } } };
      } }, { key: "radialBar", value: function() {
        return { chart: { animations: { dynamicAnimation: { enabled: true, speed: 800 } }, toolbar: { show: false } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: false, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: false, position: "right" }, tooltip: { enabled: false, fillSeriesColor: true }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
      } }, { key: "_getBoxTooltip", value: function(t6, e8, i8, a4, s5) {
        var r7 = t6.globals.seriesCandleO[e8][i8], o8 = t6.globals.seriesCandleH[e8][i8], n7 = t6.globals.seriesCandleM[e8][i8], l4 = t6.globals.seriesCandleL[e8][i8], h4 = t6.globals.seriesCandleC[e8][i8];
        return t6.config.series[e8].type && t6.config.series[e8].type !== s5 ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t6.config.series[e8].name ? t6.config.series[e8].name : "series-" + (e8 + 1), ": <strong>").concat(t6.globals.series[e8][i8], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t6.config.chart.type, '">') + "<div>".concat(a4[0], ': <span class="value">') + r7 + "</span></div>" + "<div>".concat(a4[1], ': <span class="value">') + o8 + "</span></div>" + (n7 ? "<div>".concat(a4[2], ': <span class="value">') + n7 + "</span></div>" : "") + "<div>".concat(a4[3], ': <span class="value">') + l4 + "</span></div>" + "<div>".concat(a4[4], ': <span class="value">') + h4 + "</span></div></div>";
      } }]), t5;
    }();
    var D2 = function() {
      function t5(e8) {
        i7(this, t5), this.opts = e8;
      }
      return s4(t5, [{ key: "init", value: function(t6) {
        var e8 = t6.responsiveOverride, i8 = this.opts, a4 = new X(), s5 = new F(i8);
        this.chartType = i8.chart.type, i8 = this.extendYAxis(i8), i8 = this.extendAnnotations(i8);
        var r7 = a4.init(), o8 = {};
        if (i8 && "object" === b3(i8)) {
          var n7, l4, h4, c5, d4, g3, u4, f4, p4, x3, v3 = {};
          v3 = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i8.chart.type) ? s5[i8.chart.type]() : s5.line(), null !== (n7 = i8.plotOptions) && void 0 !== n7 && null !== (l4 = n7.bar) && void 0 !== l4 && l4.isFunnel && (v3 = s5.funnel()), i8.chart.stacked && "bar" === i8.chart.type && (v3 = s5.stackedBars()), null !== (h4 = i8.chart.brush) && void 0 !== h4 && h4.enabled && (v3 = s5.brush(v3)), null !== (c5 = i8.plotOptions) && void 0 !== c5 && null !== (d4 = c5.line) && void 0 !== d4 && d4.isSlopeChart && (v3 = s5.slope()), i8.chart.stacked && "100%" === i8.chart.stackType && (i8 = s5.stacked100(i8)), null !== (g3 = i8.plotOptions) && void 0 !== g3 && null !== (u4 = g3.bar) && void 0 !== u4 && u4.isDumbbell && (i8 = s5.dumbbell(i8)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i8), i8.xaxis = i8.xaxis || window.Apex.xaxis || {}, e8 || (i8.xaxis.convertedCatToNumeric = false), (null !== (f4 = (i8 = this.checkForCatToNumericXAxis(this.chartType, v3, i8)).chart.sparkline) && void 0 !== f4 && f4.enabled || null !== (p4 = window.Apex.chart) && void 0 !== p4 && null !== (x3 = p4.sparkline) && void 0 !== x3 && x3.enabled) && (v3 = s5.sparkline(v3)), o8 = m2.extend(r7, v3);
        }
        var y4 = m2.extend(o8, window.Apex);
        return r7 = m2.extend(y4, i8), r7 = this.handleUserInputErrors(r7);
      } }, { key: "checkForCatToNumericXAxis", value: function(t6, e8, i8) {
        var a4, s5, r7 = new F(i8), o8 = ("bar" === t6 || "boxPlot" === t6) && (null === (a4 = i8.plotOptions) || void 0 === a4 || null === (s5 = a4.bar) || void 0 === s5 ? void 0 : s5.horizontal), n7 = "pie" === t6 || "polarArea" === t6 || "donut" === t6 || "radar" === t6 || "radialBar" === t6 || "heatmap" === t6, l4 = "datetime" !== i8.xaxis.type && "numeric" !== i8.xaxis.type, h4 = i8.xaxis.tickPlacement ? i8.xaxis.tickPlacement : e8.xaxis && e8.xaxis.tickPlacement;
        return o8 || n7 || !l4 || "between" === h4 || (i8 = r7.convertCatToNumeric(i8)), i8;
      } }, { key: "extendYAxis", value: function(t6, e8) {
        var i8 = new X();
        (void 0 === t6.yaxis || !t6.yaxis || Array.isArray(t6.yaxis) && 0 === t6.yaxis.length) && (t6.yaxis = {}), t6.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t6.yaxis = m2.extend(t6.yaxis, window.Apex.yaxis)), t6.yaxis.constructor !== Array ? t6.yaxis = [m2.extend(i8.yAxis, t6.yaxis)] : t6.yaxis = m2.extendArray(t6.yaxis, i8.yAxis);
        var a4 = false;
        t6.yaxis.forEach(function(t7) {
          t7.logarithmic && (a4 = true);
        });
        var s5 = t6.series;
        return e8 && !s5 && (s5 = e8.config.series), a4 && s5.length !== t6.yaxis.length && s5.length && (t6.yaxis = s5.map(function(e9, a5) {
          if (e9.name || (s5[a5].name = "series-".concat(a5 + 1)), t6.yaxis[a5]) return t6.yaxis[a5].seriesName = s5[a5].name, t6.yaxis[a5];
          var r7 = m2.extend(i8.yAxis, t6.yaxis[0]);
          return r7.show = false, r7;
        })), a4 && s5.length > 1 && s5.length !== t6.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t6;
      } }, { key: "extendAnnotations", value: function(t6) {
        return void 0 === t6.annotations && (t6.annotations = {}, t6.annotations.yaxis = [], t6.annotations.xaxis = [], t6.annotations.points = []), t6 = this.extendYAxisAnnotations(t6), t6 = this.extendXAxisAnnotations(t6), t6 = this.extendPointAnnotations(t6);
      } }, { key: "extendYAxisAnnotations", value: function(t6) {
        var e8 = new X();
        return t6.annotations.yaxis = m2.extendArray(void 0 !== t6.annotations.yaxis ? t6.annotations.yaxis : [], e8.yAxisAnnotation), t6;
      } }, { key: "extendXAxisAnnotations", value: function(t6) {
        var e8 = new X();
        return t6.annotations.xaxis = m2.extendArray(void 0 !== t6.annotations.xaxis ? t6.annotations.xaxis : [], e8.xAxisAnnotation), t6;
      } }, { key: "extendPointAnnotations", value: function(t6) {
        var e8 = new X();
        return t6.annotations.points = m2.extendArray(void 0 !== t6.annotations.points ? t6.annotations.points : [], e8.pointAnnotation), t6;
      } }, { key: "checkForDarkTheme", value: function(t6) {
        t6.theme && "dark" === t6.theme.mode && (t6.tooltip || (t6.tooltip = {}), "light" !== t6.tooltip.theme && (t6.tooltip.theme = "dark"), t6.chart.foreColor || (t6.chart.foreColor = "#f6f7f8"), t6.theme.palette || (t6.theme.palette = "palette4"));
      } }, { key: "handleUserInputErrors", value: function(t6) {
        var e8 = t6;
        if (e8.tooltip.shared && e8.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
        if ("bar" === e8.chart.type && e8.plotOptions.bar.horizontal) {
          if (e8.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
          e8.yaxis[0].reversed && (e8.yaxis[0].opposite = true), e8.xaxis.tooltip.enabled = false, e8.yaxis[0].tooltip.enabled = false, e8.chart.zoom.enabled = false;
        }
        return "bar" !== e8.chart.type && "rangeBar" !== e8.chart.type || e8.tooltip.shared && "barWidth" === e8.xaxis.crosshairs.width && e8.series.length > 1 && (e8.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e8.chart.type && "boxPlot" !== e8.chart.type || e8.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e8.chart.type, " chart is not supported.")), e8.yaxis[0].reversed = false), e8;
      } }]), t5;
    }();
    var H2 = function() {
      function t5() {
        i7(this, t5);
      }
      return s4(t5, [{ key: "initGlobalVars", value: function(t6) {
        t6.series = [], t6.seriesCandleO = [], t6.seriesCandleH = [], t6.seriesCandleM = [], t6.seriesCandleL = [], t6.seriesCandleC = [], t6.seriesRangeStart = [], t6.seriesRangeEnd = [], t6.seriesRange = [], t6.seriesPercent = [], t6.seriesGoals = [], t6.seriesX = [], t6.seriesZ = [], t6.seriesNames = [], t6.seriesTotals = [], t6.seriesLog = [], t6.seriesColors = [], t6.stackedSeriesTotals = [], t6.seriesXvalues = [], t6.seriesYvalues = [], t6.labels = [], t6.hasXaxisGroups = false, t6.groups = [], t6.barGroups = [], t6.lineGroups = [], t6.areaGroups = [], t6.hasSeriesGroups = false, t6.seriesGroups = [], t6.categoryLabels = [], t6.timescaleLabels = [], t6.noLabelsProvided = false, t6.resizeTimer = null, t6.selectionResizeTimer = null, t6.lastWheelExecution = 0, t6.delayedElements = [], t6.pointsArray = [], t6.dataLabelsRects = [], t6.isXNumeric = false, t6.skipLastTimelinelabel = false, t6.skipFirstTimelinelabel = false, t6.isDataXYZ = false, t6.isMultiLineX = false, t6.isMultipleYAxis = false, t6.maxY = -Number.MAX_VALUE, t6.minY = Number.MIN_VALUE, t6.minYArr = [], t6.maxYArr = [], t6.maxX = -Number.MAX_VALUE, t6.minX = Number.MAX_VALUE, t6.initialMaxX = -Number.MAX_VALUE, t6.initialMinX = Number.MAX_VALUE, t6.maxDate = 0, t6.minDate = Number.MAX_VALUE, t6.minZ = Number.MAX_VALUE, t6.maxZ = -Number.MAX_VALUE, t6.minXDiff = Number.MAX_VALUE, t6.yAxisScale = [], t6.xAxisScale = null, t6.xAxisTicksPositions = [], t6.yLabelsCoords = [], t6.yTitleCoords = [], t6.barPadForNumericAxis = 0, t6.padHorizontal = 0, t6.xRange = 0, t6.yRange = [], t6.zRange = 0, t6.dataPoints = 0, t6.xTickAmount = 0, t6.multiAxisTickAmount = 0;
      } }, { key: "globalVars", value: function(t6) {
        return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t6.markers.size, largestSize: 0 }, animationEnded: false, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: false, isExecCalled: false, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: false, allSeriesCollapsed: false, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: false, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], invalidLogScale: false, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: "zoom" === t6.chart.toolbar.autoSelected && t6.chart.toolbar.tools.zoom && t6.chart.zoom.enabled, panEnabled: "pan" === t6.chart.toolbar.autoSelected && t6.chart.toolbar.tools.pan, selectionEnabled: "selection" === t6.chart.toolbar.autoSelected && t6.chart.toolbar.tools.selection, yaxis: null, mousedown: false, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: false, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: true, skipLastTimelinelabel: false, skipFirstTimelinelabel: false, delayedElements: [], axisCharts: true, isDataXYZ: false, isSlopeChart: t6.plotOptions.line.isSlopeChart, resized: false, resizeTimer: null, comboCharts: false, dataChanged: false, previousPaths: [], allSeriesHasEqualX: true, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: false, easing: null, zoomed: false, gridWidth: 0, gridHeight: 0, rotateXLabels: false, defaultLabels: false, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
      } }, { key: "init", value: function(t6) {
        var e8 = this.globalVars(t6);
        return this.initGlobalVars(e8), e8.initialConfig = m2.extend({}, t6), e8.initialSeries = m2.clone(t6.series), e8.lastXAxis = m2.clone(e8.initialConfig.xaxis), e8.lastYAxis = m2.clone(e8.initialConfig.yaxis), e8;
      } }]), t5;
    }();
    var O = function() {
      function t5(e8) {
        i7(this, t5), this.opts = e8;
      }
      return s4(t5, [{ key: "init", value: function() {
        var t6 = new D2(this.opts).init({ responsiveOverride: false });
        return { config: t6, globals: new H2().init(t6) };
      } }]), t5;
    }();
    var N2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
      }
      return s4(t5, [{ key: "clippedImgArea", value: function(t6) {
        var e8 = this.w, i8 = e8.config, a4 = parseInt(e8.globals.gridWidth, 10), s5 = parseInt(e8.globals.gridHeight, 10), r7 = a4 > s5 ? a4 : s5, o8 = t6.image, n7 = 0, l4 = 0;
        void 0 === t6.width && void 0 === t6.height ? void 0 !== i8.fill.image.width && void 0 !== i8.fill.image.height ? (n7 = i8.fill.image.width + 1, l4 = i8.fill.image.height) : (n7 = r7 + 1, l4 = r7) : (n7 = t6.width, l4 = t6.height);
        var h4 = document.createElementNS(e8.globals.SVGNS, "pattern");
        k2.setAttrs(h4, { id: t6.patternID, patternUnits: t6.patternUnits ? t6.patternUnits : "userSpaceOnUse", width: n7 + "px", height: l4 + "px" });
        var c5 = document.createElementNS(e8.globals.SVGNS, "image");
        h4.appendChild(c5), c5.setAttributeNS(window.SVG.xlink, "href", o8), k2.setAttrs(c5, { x: 0, y: 0, preserveAspectRatio: "none", width: n7 + "px", height: l4 + "px" }), c5.style.opacity = t6.opacity, e8.globals.dom.elDefs.node.appendChild(h4);
      } }, { key: "getSeriesIndex", value: function(t6) {
        var e8 = this.w, i8 = e8.config.chart.type;
        return ("bar" === i8 || "rangeBar" === i8) && e8.config.plotOptions.bar.distributed || "heatmap" === i8 || "treemap" === i8 ? this.seriesIndex = t6.seriesNumber : this.seriesIndex = t6.seriesNumber % e8.globals.series.length, this.seriesIndex;
      } }, { key: "fillPath", value: function(t6) {
        var e8 = this.w;
        this.opts = t6;
        var i8, a4, s5, r7 = this.w.config;
        this.seriesIndex = this.getSeriesIndex(t6);
        var o8 = this.getFillColors()[this.seriesIndex];
        void 0 !== e8.globals.seriesColors[this.seriesIndex] && (o8 = e8.globals.seriesColors[this.seriesIndex]), "function" == typeof o8 && (o8 = o8({ seriesIndex: this.seriesIndex, dataPointIndex: t6.dataPointIndex, value: t6.value, w: e8 }));
        var n7 = t6.fillType ? t6.fillType : this.getFillType(this.seriesIndex), l4 = Array.isArray(r7.fill.opacity) ? r7.fill.opacity[this.seriesIndex] : r7.fill.opacity;
        t6.color && (o8 = t6.color), o8 || (o8 = "#fff", console.warn("undefined color - ApexCharts"));
        var h4 = o8;
        if (-1 === o8.indexOf("rgb") ? o8.length < 9 && (h4 = m2.hexToRgba(o8, l4)) : o8.indexOf("rgba") > -1 && (l4 = m2.getOpacityFromRGBA(o8)), t6.opacity && (l4 = t6.opacity), "pattern" === n7 && (a4 = this.handlePatternFill({ fillConfig: t6.fillConfig, patternFill: a4, fillColor: o8, fillOpacity: l4, defaultColor: h4 })), "gradient" === n7 && (s5 = this.handleGradientFill({ fillConfig: t6.fillConfig, fillColor: o8, fillOpacity: l4, i: this.seriesIndex })), "image" === n7) {
          var c5 = r7.fill.image.src, d4 = t6.patternID ? t6.patternID : "", g3 = "pattern".concat(e8.globals.cuid).concat(t6.seriesNumber + 1).concat(d4);
          -1 === this.patternIDs.indexOf(g3) && (this.clippedImgArea({ opacity: l4, image: Array.isArray(c5) ? t6.seriesNumber < c5.length ? c5[t6.seriesNumber] : c5[0] : c5, width: t6.width ? t6.width : void 0, height: t6.height ? t6.height : void 0, patternUnits: t6.patternUnits, patternID: g3 }), this.patternIDs.push(g3)), i8 = "url(#".concat(g3, ")");
        } else i8 = "gradient" === n7 ? s5 : "pattern" === n7 ? a4 : h4;
        return t6.solid && (i8 = h4), i8;
      } }, { key: "getFillType", value: function(t6) {
        var e8 = this.w;
        return Array.isArray(e8.config.fill.type) ? e8.config.fill.type[t6] : e8.config.fill.type;
      } }, { key: "getFillColors", value: function() {
        var t6 = this.w, e8 = t6.config, i8 = this.opts, a4 = [];
        return t6.globals.comboCharts ? "line" === t6.config.series[this.seriesIndex].type ? Array.isArray(t6.globals.stroke.colors) ? a4 = t6.globals.stroke.colors : a4.push(t6.globals.stroke.colors) : Array.isArray(t6.globals.fill.colors) ? a4 = t6.globals.fill.colors : a4.push(t6.globals.fill.colors) : "line" === e8.chart.type ? Array.isArray(t6.globals.stroke.colors) ? a4 = t6.globals.stroke.colors : a4.push(t6.globals.stroke.colors) : Array.isArray(t6.globals.fill.colors) ? a4 = t6.globals.fill.colors : a4.push(t6.globals.fill.colors), void 0 !== i8.fillColors && (a4 = [], Array.isArray(i8.fillColors) ? a4 = i8.fillColors.slice() : a4.push(i8.fillColors)), a4;
      } }, { key: "handlePatternFill", value: function(t6) {
        var e8 = t6.fillConfig, i8 = t6.patternFill, a4 = t6.fillColor, s5 = t6.fillOpacity, r7 = t6.defaultColor, o8 = this.w.config.fill;
        e8 && (o8 = e8);
        var n7 = this.opts, l4 = new k2(this.ctx), h4 = Array.isArray(o8.pattern.strokeWidth) ? o8.pattern.strokeWidth[this.seriesIndex] : o8.pattern.strokeWidth, c5 = a4;
        Array.isArray(o8.pattern.style) ? i8 = void 0 !== o8.pattern.style[n7.seriesNumber] ? l4.drawPattern(o8.pattern.style[n7.seriesNumber], o8.pattern.width, o8.pattern.height, c5, h4, s5) : r7 : i8 = l4.drawPattern(o8.pattern.style, o8.pattern.width, o8.pattern.height, c5, h4, s5);
        return i8;
      } }, { key: "handleGradientFill", value: function(t6) {
        var e8 = t6.fillColor, i8 = t6.fillOpacity, a4 = t6.fillConfig, s5 = t6.i, r7 = this.w.config.fill;
        a4 && (r7 = g2(g2({}, r7), a4));
        var o8, n7 = this.opts, l4 = new k2(this.ctx), h4 = new m2(), c5 = r7.gradient.type, d4 = e8, u4 = void 0 === r7.gradient.opacityFrom ? i8 : Array.isArray(r7.gradient.opacityFrom) ? r7.gradient.opacityFrom[s5] : r7.gradient.opacityFrom;
        d4.indexOf("rgba") > -1 && (u4 = m2.getOpacityFromRGBA(d4));
        var f4 = void 0 === r7.gradient.opacityTo ? i8 : Array.isArray(r7.gradient.opacityTo) ? r7.gradient.opacityTo[s5] : r7.gradient.opacityTo;
        if (void 0 === r7.gradient.gradientToColors || 0 === r7.gradient.gradientToColors.length) o8 = "dark" === r7.gradient.shade ? h4.shadeColor(-1 * parseFloat(r7.gradient.shadeIntensity), e8.indexOf("rgb") > -1 ? m2.rgb2hex(e8) : e8) : h4.shadeColor(parseFloat(r7.gradient.shadeIntensity), e8.indexOf("rgb") > -1 ? m2.rgb2hex(e8) : e8);
        else if (r7.gradient.gradientToColors[n7.seriesNumber]) {
          var p4 = r7.gradient.gradientToColors[n7.seriesNumber];
          o8 = p4, p4.indexOf("rgba") > -1 && (f4 = m2.getOpacityFromRGBA(p4));
        } else o8 = e8;
        if (r7.gradient.gradientFrom && (d4 = r7.gradient.gradientFrom), r7.gradient.gradientTo && (o8 = r7.gradient.gradientTo), r7.gradient.inverseColors) {
          var x3 = d4;
          d4 = o8, o8 = x3;
        }
        return d4.indexOf("rgb") > -1 && (d4 = m2.rgb2hex(d4)), o8.indexOf("rgb") > -1 && (o8 = m2.rgb2hex(o8)), l4.drawGradient(c5, d4, o8, u4, f4, n7.size, r7.gradient.stops, r7.gradient.colorStops, s5);
      } }]), t5;
    }();
    var W = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "setGlobalMarkerSize", value: function() {
        var t6 = this.w;
        if (t6.globals.markers.size = Array.isArray(t6.config.markers.size) ? t6.config.markers.size : [t6.config.markers.size], t6.globals.markers.size.length > 0) {
          if (t6.globals.markers.size.length < t6.globals.series.length + 1) for (var e8 = 0; e8 <= t6.globals.series.length; e8++) void 0 === t6.globals.markers.size[e8] && t6.globals.markers.size.push(t6.globals.markers.size[0]);
        } else t6.globals.markers.size = t6.config.series.map(function(e9) {
          return t6.config.markers.size;
        });
      } }, { key: "plotChartMarkers", value: function(t6, e8, i8, a4) {
        var s5, r7 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o8 = this.w, n7 = e8, l4 = t6, h4 = null, c5 = new k2(this.ctx), d4 = o8.config.markers.discrete && o8.config.markers.discrete.length;
        if ((o8.globals.markers.size[e8] > 0 || r7 || d4) && (h4 = c5.group({ class: r7 || d4 ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(o8.globals.cuid, ")")), Array.isArray(l4.x)) for (var g3 = 0; g3 < l4.x.length; g3++) {
          var u4 = i8;
          1 === i8 && 0 === g3 && (u4 = 0), 1 === i8 && 1 === g3 && (u4 = 1);
          var f4 = "apexcharts-marker";
          if ("line" !== o8.config.chart.type && "area" !== o8.config.chart.type || o8.globals.comboCharts || o8.config.tooltip.intersect || (f4 += " no-pointer-events"), (Array.isArray(o8.config.markers.size) ? o8.globals.markers.size[e8] > 0 : o8.config.markers.size > 0) || r7 || d4) {
            m2.isNumber(l4.y[g3]) ? f4 += " w".concat(m2.randomId()) : f4 = "apexcharts-nullpoint";
            var p4 = this.getMarkerConfig({ cssClass: f4, seriesIndex: e8, dataPointIndex: u4 });
            o8.config.series[n7].data[u4] && (o8.config.series[n7].data[u4].fillColor && (p4.pointFillColor = o8.config.series[n7].data[u4].fillColor), o8.config.series[n7].data[u4].strokeColor && (p4.pointStrokeColor = o8.config.series[n7].data[u4].strokeColor)), void 0 !== a4 && (p4.pSize = a4), (l4.x[g3] < -o8.globals.markers.largestSize || l4.x[g3] > o8.globals.gridWidth + o8.globals.markers.largestSize || l4.y[g3] < -o8.globals.markers.largestSize || l4.y[g3] > o8.globals.gridHeight + o8.globals.markers.largestSize) && (p4.pSize = 0), (s5 = c5.drawMarker(l4.x[g3], l4.y[g3], p4)).attr("rel", u4), s5.attr("j", u4), s5.attr("index", e8), s5.node.setAttribute("default-marker-size", p4.pSize), new w2(this.ctx).setSelectionFilter(s5, e8, u4), this.addEvents(s5), h4 && h4.add(s5);
          } else void 0 === o8.globals.pointsArray[e8] && (o8.globals.pointsArray[e8] = []), o8.globals.pointsArray[e8].push([l4.x[g3], l4.y[g3]]);
        }
        return h4;
      } }, { key: "getMarkerConfig", value: function(t6) {
        var e8 = t6.cssClass, i8 = t6.seriesIndex, a4 = t6.dataPointIndex, s5 = void 0 === a4 ? null : a4, r7 = t6.radius, o8 = void 0 === r7 ? null : r7, n7 = t6.size, l4 = void 0 === n7 ? null : n7, h4 = t6.strokeWidth, c5 = void 0 === h4 ? null : h4, d4 = this.w, g3 = this.getMarkerStyle(i8), u4 = null === l4 ? d4.globals.markers.size[i8] : l4, f4 = d4.config.markers;
        return null !== s5 && f4.discrete.length && f4.discrete.map(function(t7) {
          t7.seriesIndex === i8 && t7.dataPointIndex === s5 && (g3.pointStrokeColor = t7.strokeColor, g3.pointFillColor = t7.fillColor, u4 = t7.size, g3.pointShape = t7.shape);
        }), { pSize: null === o8 ? u4 : o8, pRadius: null !== o8 ? o8 : f4.radius, pointStrokeWidth: null !== c5 ? c5 : Array.isArray(f4.strokeWidth) ? f4.strokeWidth[i8] : f4.strokeWidth, pointStrokeColor: g3.pointStrokeColor, pointFillColor: g3.pointFillColor, shape: g3.pointShape || (Array.isArray(f4.shape) ? f4.shape[i8] : f4.shape), class: e8, pointStrokeOpacity: Array.isArray(f4.strokeOpacity) ? f4.strokeOpacity[i8] : f4.strokeOpacity, pointStrokeDashArray: Array.isArray(f4.strokeDashArray) ? f4.strokeDashArray[i8] : f4.strokeDashArray, pointFillOpacity: Array.isArray(f4.fillOpacity) ? f4.fillOpacity[i8] : f4.fillOpacity, seriesIndex: i8 };
      } }, { key: "addEvents", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx);
        t6.node.addEventListener("mouseenter", i8.pathMouseEnter.bind(this.ctx, t6)), t6.node.addEventListener("mouseleave", i8.pathMouseLeave.bind(this.ctx, t6)), t6.node.addEventListener("mousedown", i8.pathMouseDown.bind(this.ctx, t6)), t6.node.addEventListener("click", e8.config.markers.onClick), t6.node.addEventListener("dblclick", e8.config.markers.onDblClick), t6.node.addEventListener("touchstart", i8.pathMouseDown.bind(this.ctx, t6), { passive: true });
      } }, { key: "getMarkerStyle", value: function(t6) {
        var e8 = this.w, i8 = e8.globals.markers.colors, a4 = e8.config.markers.strokeColor || e8.config.markers.strokeColors;
        return { pointStrokeColor: Array.isArray(a4) ? a4[t6] : a4, pointFillColor: Array.isArray(i8) ? i8[t6] : i8 };
      } }]), t5;
    }();
    var B2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.initialAnim = this.w.config.chart.animations.enabled;
      }
      return s4(t5, [{ key: "draw", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = new k2(this.ctx), r7 = i8.realIndex, o8 = i8.pointsPos, n7 = i8.zRatio, l4 = i8.elParent, h4 = s5.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a4.config.chart.type) });
        if (h4.attr("clip-path", "url(#gridRectMarkerMask".concat(a4.globals.cuid, ")")), Array.isArray(o8.x)) for (var c5 = 0; c5 < o8.x.length; c5++) {
          var d4 = e8 + 1, g3 = true;
          0 === e8 && 0 === c5 && (d4 = 0), 0 === e8 && 1 === c5 && (d4 = 1);
          var u4 = a4.globals.markers.size[r7];
          if (n7 !== 1 / 0) {
            var f4 = a4.config.plotOptions.bubble;
            u4 = a4.globals.seriesZ[r7][d4], f4.zScaling && (u4 /= n7), f4.minBubbleRadius && u4 < f4.minBubbleRadius && (u4 = f4.minBubbleRadius), f4.maxBubbleRadius && u4 > f4.maxBubbleRadius && (u4 = f4.maxBubbleRadius);
          }
          var p4 = o8.x[c5], x3 = o8.y[c5];
          if (u4 = u4 || 0, null !== x3 && void 0 !== a4.globals.series[r7][d4] || (g3 = false), g3) {
            var b4 = this.drawPoint(p4, x3, u4, r7, d4, e8);
            h4.add(b4);
          }
          l4.add(h4);
        }
      } }, { key: "drawPoint", value: function(t6, e8, i8, a4, s5, r7) {
        var o8 = this.w, n7 = a4, l4 = new y3(this.ctx), h4 = new w2(this.ctx), c5 = new N2(this.ctx), d4 = new W(this.ctx), g3 = new k2(this.ctx), u4 = d4.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n7, dataPointIndex: s5, radius: "bubble" === o8.config.chart.type || o8.globals.comboCharts && o8.config.series[a4] && "bubble" === o8.config.series[a4].type ? i8 : null }), f4 = c5.fillPath({ seriesNumber: a4, dataPointIndex: s5, color: u4.pointFillColor, patternUnits: "objectBoundingBox", value: o8.globals.series[a4][r7] }), p4 = g3.drawMarker(t6, e8, u4);
        if (o8.config.series[n7].data[s5] && o8.config.series[n7].data[s5].fillColor && (f4 = o8.config.series[n7].data[s5].fillColor), p4.attr({ fill: f4 }), o8.config.chart.dropShadow.enabled) {
          var x3 = o8.config.chart.dropShadow;
          h4.dropShadow(p4, x3, a4);
        }
        if (!this.initialAnim || o8.globals.dataChanged || o8.globals.resized) o8.globals.animationEnded = true;
        else {
          var b4 = o8.config.chart.animations.speed;
          l4.animateMarker(p4, b4, o8.globals.easing, function() {
            window.setTimeout(function() {
              l4.animationCompleted(p4);
            }, 100);
          });
        }
        return p4.attr({ rel: s5, j: s5, index: a4, "default-marker-size": u4.pSize }), h4.setSelectionFilter(p4, a4, s5), d4.addEvents(p4), p4.node.classList.add("apexcharts-marker"), p4;
      } }, { key: "centerTextInBubble", value: function(t6) {
        var e8 = this.w;
        return { y: t6 += parseInt(e8.config.dataLabels.style.fontSize, 10) / 4 };
      } }]), t5;
    }();
    var G = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "dataLabelsCorrection", value: function(t6, e8, i8, a4, s5, r7, o8) {
        var n7 = this.w, l4 = false, h4 = new k2(this.ctx).getTextRects(i8, o8), c5 = h4.width, d4 = h4.height;
        e8 < 0 && (e8 = 0), e8 > n7.globals.gridHeight + d4 && (e8 = n7.globals.gridHeight + d4 / 2), void 0 === n7.globals.dataLabelsRects[a4] && (n7.globals.dataLabelsRects[a4] = []), n7.globals.dataLabelsRects[a4].push({ x: t6, y: e8, width: c5, height: d4 });
        var g3 = n7.globals.dataLabelsRects[a4].length - 2, u4 = void 0 !== n7.globals.lastDrawnDataLabelsIndexes[a4] ? n7.globals.lastDrawnDataLabelsIndexes[a4][n7.globals.lastDrawnDataLabelsIndexes[a4].length - 1] : 0;
        if (void 0 !== n7.globals.dataLabelsRects[a4][g3]) {
          var f4 = n7.globals.dataLabelsRects[a4][u4];
          (t6 > f4.x + f4.width || e8 > f4.y + f4.height || e8 + d4 < f4.y || t6 + c5 < f4.x) && (l4 = true);
        }
        return (0 === s5 || r7) && (l4 = true), { x: t6, y: e8, textRects: h4, drawnextLabel: l4 };
      } }, { key: "drawDataLabel", value: function(t6) {
        var e8 = this, i8 = t6.type, a4 = t6.pos, s5 = t6.i, r7 = t6.j, o8 = t6.isRangeStart, n7 = t6.strokeWidth, l4 = void 0 === n7 ? 2 : n7, h4 = this.w, c5 = new k2(this.ctx), d4 = h4.config.dataLabels, g3 = 0, u4 = 0, f4 = r7, p4 = null;
        if (-1 !== h4.globals.collapsedSeriesIndices.indexOf(s5) || !d4.enabled || !Array.isArray(a4.x)) return p4;
        p4 = c5.group({ class: "apexcharts-data-labels" });
        for (var x3 = 0; x3 < a4.x.length; x3++) if (g3 = a4.x[x3] + d4.offsetX, u4 = a4.y[x3] + d4.offsetY + l4, !isNaN(g3)) {
          1 === r7 && 0 === x3 && (f4 = 0), 1 === r7 && 1 === x3 && (f4 = 1);
          var b4 = h4.globals.series[s5][f4];
          "rangeArea" === i8 && (b4 = o8 ? h4.globals.seriesRangeStart[s5][f4] : h4.globals.seriesRangeEnd[s5][f4]);
          var v3 = "", m3 = function(t7) {
            return h4.config.dataLabels.formatter(t7, { ctx: e8.ctx, seriesIndex: s5, dataPointIndex: f4, w: h4 });
          };
          if ("bubble" === h4.config.chart.type) v3 = m3(b4 = h4.globals.seriesZ[s5][f4]), u4 = a4.y[x3], u4 = new B2(this.ctx).centerTextInBubble(u4, s5, f4).y;
          else void 0 !== b4 && (v3 = m3(b4));
          var y4 = h4.config.dataLabels.textAnchor;
          h4.globals.isSlopeChart && (y4 = 0 === f4 ? "end" : f4 === h4.config.series[s5].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: g3, y: u4, text: v3, i: s5, j: f4, parent: p4, offsetCorrection: true, dataLabelsConfig: h4.config.dataLabels, textAnchor: y4 });
        }
        return p4;
      } }, { key: "plotDataLabelsText", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a4 = t6.x, s5 = t6.y, r7 = t6.i, o8 = t6.j, n7 = t6.text, l4 = t6.textAnchor, h4 = t6.fontSize, c5 = t6.parent, d4 = t6.dataLabelsConfig, g3 = t6.color, u4 = t6.alwaysDrawDataLabel, f4 = t6.offsetCorrection, p4 = t6.className, x3 = null;
        if (Array.isArray(e8.config.dataLabels.enabledOnSeries) && e8.config.dataLabels.enabledOnSeries.indexOf(r7) < 0) return x3;
        var b4 = { x: a4, y: s5, drawnextLabel: true, textRects: null };
        f4 && (b4 = this.dataLabelsCorrection(a4, s5, n7, r7, o8, u4, parseInt(d4.style.fontSize, 10))), e8.globals.zoomed || (a4 = b4.x, s5 = b4.y), b4.textRects && (a4 < -20 - b4.textRects.width || a4 > e8.globals.gridWidth + b4.textRects.width + 30) && (n7 = "");
        var v3 = e8.globals.dataLabels.style.colors[r7];
        (("bar" === e8.config.chart.type || "rangeBar" === e8.config.chart.type) && e8.config.plotOptions.bar.distributed || e8.config.dataLabels.distributed) && (v3 = e8.globals.dataLabels.style.colors[o8]), "function" == typeof v3 && (v3 = v3({ series: e8.globals.series, seriesIndex: r7, dataPointIndex: o8, w: e8 })), g3 && (v3 = g3);
        var m3 = d4.offsetX, y4 = d4.offsetY;
        if ("bar" !== e8.config.chart.type && "rangeBar" !== e8.config.chart.type || (m3 = 0, y4 = 0), e8.globals.isSlopeChart && (0 !== o8 && (m3 = -2 * d4.offsetX + 5), 0 !== o8 && o8 !== e8.config.series[r7].data.length - 1 && (m3 = 0)), b4.drawnextLabel) {
          if ((x3 = i8.drawText({ width: 100, height: parseInt(d4.style.fontSize, 10), x: a4 + m3, y: s5 + y4, foreColor: v3, textAnchor: l4 || d4.textAnchor, text: n7, fontSize: h4 || d4.style.fontSize, fontFamily: d4.style.fontFamily, fontWeight: d4.style.fontWeight || "normal" })).attr({ class: p4 || "apexcharts-datalabel", cx: a4, cy: s5 }), d4.dropShadow.enabled) {
            var A3 = d4.dropShadow;
            new w2(this.ctx).dropShadow(x3, A3);
          }
          c5.add(x3), void 0 === e8.globals.lastDrawnDataLabelsIndexes[r7] && (e8.globals.lastDrawnDataLabelsIndexes[r7] = []), e8.globals.lastDrawnDataLabelsIndexes[r7].push(o8);
        }
        return x3;
      } }, { key: "addBackgroundToDataLabel", value: function(t6, e8) {
        var i8 = this.w, a4 = i8.config.dataLabels.background, s5 = a4.padding, r7 = a4.padding / 2, o8 = e8.width, n7 = e8.height, l4 = new k2(this.ctx).drawRect(e8.x - s5, e8.y - r7 / 2, o8 + 2 * s5, n7 + r7, a4.borderRadius, "transparent" !== i8.config.chart.background && i8.config.chart.background ? i8.config.chart.background : "#fff", a4.opacity, a4.borderWidth, a4.borderColor);
        a4.dropShadow.enabled && new w2(this.ctx).dropShadow(l4, a4.dropShadow);
        return l4;
      } }, { key: "dataLabelsBackground", value: function() {
        var t6 = this.w;
        if ("bubble" !== t6.config.chart.type) for (var e8 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i8 = 0; i8 < e8.length; i8++) {
          var a4 = e8[i8], s5 = a4.getBBox(), r7 = null;
          if (s5.width && s5.height && (r7 = this.addBackgroundToDataLabel(a4, s5)), r7) {
            a4.parentNode.insertBefore(r7.node, a4);
            var o8 = a4.getAttribute("fill");
            t6.config.chart.animations.enabled && !t6.globals.resized && !t6.globals.dataChanged ? r7.animate().attr({ fill: o8 }) : r7.attr({ fill: o8 }), a4.setAttribute("fill", t6.config.dataLabels.background.foreColor);
          }
        }
      } }, { key: "bringForward", value: function() {
        for (var t6 = this.w, e8 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i8 = t6.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a4 = 0; a4 < e8.length; a4++) i8 && i8.insertBefore(e8[a4], i8.nextSibling);
      } }]), t5;
    }();
    var V2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.legendInactiveClass = "legend-mouseover-inactive";
      }
      return s4(t5, [{ key: "getAllSeriesEls", value: function() {
        return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
      } }, { key: "getSeriesByName", value: function(t6) {
        return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(m2.escapeString(t6), "']"));
      } }, { key: "isSeriesHidden", value: function(t6) {
        var e8 = this.getSeriesByName(t6), i8 = parseInt(e8.getAttribute("data:realIndex"), 10);
        return { isHidden: e8.classList.contains("apexcharts-series-collapsed"), realIndex: i8 };
      } }, { key: "addCollapsedClassToSeries", value: function(t6, e8) {
        var i8 = this.w;
        function a4(i9) {
          for (var a5 = 0; a5 < i9.length; a5++) i9[a5].index === e8 && t6.node.classList.add("apexcharts-series-collapsed");
        }
        a4(i8.globals.collapsedSeries), a4(i8.globals.ancillaryCollapsedSeries);
      } }, { key: "toggleSeries", value: function(t6) {
        var e8 = this.isSeriesHidden(t6);
        return this.ctx.legend.legendHelpers.toggleDataSeries(e8.realIndex, e8.isHidden), e8.isHidden;
      } }, { key: "showSeries", value: function(t6) {
        var e8 = this.isSeriesHidden(t6);
        e8.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e8.realIndex, true);
      } }, { key: "hideSeries", value: function(t6) {
        var e8 = this.isSeriesHidden(t6);
        e8.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e8.realIndex, false);
      } }, { key: "resetSeries", value: function() {
        var t6 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a4 = this.w, s5 = m2.clone(a4.globals.initialSeries);
        a4.globals.previousPaths = [], i8 ? (a4.globals.collapsedSeries = [], a4.globals.ancillaryCollapsedSeries = [], a4.globals.collapsedSeriesIndices = [], a4.globals.ancillaryCollapsedSeriesIndices = []) : s5 = this.emptyCollapsedSeries(s5), a4.config.series = s5, t6 && (e8 && (a4.globals.zoomed = false, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s5, a4.config.chart.animations.dynamicAnimation.enabled));
      } }, { key: "emptyCollapsedSeries", value: function(t6) {
        for (var e8 = this.w, i8 = 0; i8 < t6.length; i8++) e8.globals.collapsedSeriesIndices.indexOf(i8) > -1 && (t6[i8].data = []);
        return t6;
      } }, { key: "highlightSeries", value: function(t6) {
        var e8 = this.w, i8 = this.getSeriesByName(t6), a4 = parseInt(null == i8 ? void 0 : i8.getAttribute("data:realIndex"), 10), s5 = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), r7 = null, o8 = null, n7 = null;
        if (e8.globals.axisCharts || "radialBar" === e8.config.chart.type) if (e8.globals.axisCharts) {
          r7 = e8.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a4, "']")), o8 = e8.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a4, "']"));
          var l4 = e8.globals.seriesYAxisReverseMap[a4];
          n7 = e8.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l4, "']"));
        } else r7 = e8.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a4 + 1, "']"));
        else r7 = e8.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a4 + 1, "'] path"));
        for (var h4 = 0; h4 < s5.length; h4++) s5[h4].classList.add(this.legendInactiveClass);
        if (r7) e8.globals.axisCharts || r7.parentNode.classList.remove(this.legendInactiveClass), r7.classList.remove(this.legendInactiveClass), null !== o8 && o8.classList.remove(this.legendInactiveClass), null !== n7 && n7.classList.remove(this.legendInactiveClass);
        else for (var c5 = 0; c5 < s5.length; c5++) s5[c5].classList.remove(this.legendInactiveClass);
      } }, { key: "toggleSeriesOnHover", value: function(t6, e8) {
        var i8 = this.w;
        e8 || (e8 = t6.target);
        var a4 = i8.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
        if ("mousemove" === t6.type) {
          var s5 = parseInt(e8.getAttribute("rel"), 10) - 1;
          this.highlightSeries(i8.globals.seriesNames[s5]);
        } else if ("mouseout" === t6.type) for (var r7 = 0; r7 < a4.length; r7++) a4[r7].classList.remove(this.legendInactiveClass);
      } }, { key: "highlightRangeInSeries", value: function(t6, e8) {
        var i8 = this, a4 = this.w, s5 = a4.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r7 = function(t7) {
          for (var e9 = 0; e9 < s5.length; e9++) s5[e9].classList[t7](i8.legendInactiveClass);
        };
        if ("mousemove" === t6.type) {
          var o8 = parseInt(e8.getAttribute("rel"), 10) - 1;
          r7("add");
          var n7 = a4.config.plotOptions.heatmap.colorScale.ranges;
          !function(t7, e9) {
            for (var a5 = 0; a5 < s5.length; a5++) {
              var r8 = Number(s5[a5].getAttribute("val"));
              r8 >= t7.from && (r8 < t7.to || t7.to === e9 && r8 === e9) && s5[a5].classList.remove(i8.legendInactiveClass);
            }
          }(n7[o8], n7.reduce(function(t7, e9) {
            return Math.max(t7, e9.to);
          }, 0));
        } else "mouseout" === t6.type && r7("remove");
      } }, { key: "getActiveConfigSeriesIndex", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "asc", e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i8 = this.w, a4 = 0;
        if (i8.config.series.length > 1) {
          for (var s5 = i8.config.series.map(function(t7, a5) {
            return t7.data && t7.data.length > 0 && -1 === i8.globals.collapsedSeriesIndices.indexOf(a5) && (!i8.globals.comboCharts || 0 === e8.length || e8.length && e8.indexOf(i8.config.series[a5].type) > -1) ? a5 : -1;
          }), r7 = "asc" === t6 ? 0 : s5.length - 1; "asc" === t6 ? r7 < s5.length : r7 >= 0; "asc" === t6 ? r7++ : r7--) if (-1 !== s5[r7]) {
            a4 = s5[r7];
            break;
          }
        }
        return a4;
      } }, { key: "getBarSeriesIndices", value: function() {
        return this.w.globals.comboCharts ? this.w.config.series.map(function(t6, e8) {
          return "bar" === t6.type || "column" === t6.type ? e8 : -1;
        }).filter(function(t6) {
          return -1 !== t6;
        }) : this.w.config.series.map(function(t6, e8) {
          return e8;
        });
      } }, { key: "getPreviousPaths", value: function() {
        var t6 = this.w;
        function e8(e9, i9, a5) {
          for (var s6 = e9[i9].childNodes, r7 = { type: a5, paths: [], realIndex: e9[i9].getAttribute("data:realIndex") }, o8 = 0; o8 < s6.length; o8++) if (s6[o8].hasAttribute("pathTo")) {
            var n7 = s6[o8].getAttribute("pathTo");
            r7.paths.push({ d: n7 });
          }
          t6.globals.previousPaths.push(r7);
        }
        t6.globals.previousPaths = [];
        ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(i9) {
          for (var a5, s6 = (a5 = i9, t6.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a5, "-series .apexcharts-series"))), r7 = 0; r7 < s6.length; r7++) e8(s6, r7, i9);
        }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
        var i8 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t6.config.chart.type, " .apexcharts-series"));
        if (i8.length > 0) for (var a4 = function(e9) {
          for (var i9 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t6.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e9, "'] rect")), a5 = [], s6 = function(t7) {
            var e10 = function(e11) {
              return i9[t7].getAttribute(e11);
            }, s7 = { x: parseFloat(e10("x")), y: parseFloat(e10("y")), width: parseFloat(e10("width")), height: parseFloat(e10("height")) };
            a5.push({ rect: s7, color: i9[t7].getAttribute("color") });
          }, r7 = 0; r7 < i9.length; r7++) s6(r7);
          t6.globals.previousPaths.push(a5);
        }, s5 = 0; s5 < i8.length; s5++) a4(s5);
        t6.globals.axisCharts || (t6.globals.previousPaths = t6.globals.series);
      } }, { key: "handlePrevBubbleScatterPaths", value: function(t6) {
        var e8 = this.w, i8 = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t6, "-series .apexcharts-series"));
        if (i8.length > 0) for (var a4 = 0; a4 < i8.length; a4++) {
          for (var s5 = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t6, "-series .apexcharts-series[data\\:realIndex='").concat(a4, "'] circle")), r7 = [], o8 = 0; o8 < s5.length; o8++) r7.push({ x: s5[o8].getAttribute("cx"), y: s5[o8].getAttribute("cy"), r: s5[o8].getAttribute("r") });
          e8.globals.previousPaths.push(r7);
        }
      } }, { key: "clearPreviousPaths", value: function() {
        var t6 = this.w;
        t6.globals.previousPaths = [], t6.globals.allSeriesCollapsed = false;
      } }, { key: "handleNoData", value: function() {
        var t6 = this.w, e8 = t6.config.noData, i8 = new k2(this.ctx), a4 = t6.globals.svgWidth / 2, s5 = t6.globals.svgHeight / 2, r7 = "middle";
        if (t6.globals.noData = true, t6.globals.animationEnded = true, "left" === e8.align ? (a4 = 10, r7 = "start") : "right" === e8.align && (a4 = t6.globals.svgWidth - 10, r7 = "end"), "top" === e8.verticalAlign ? s5 = 50 : "bottom" === e8.verticalAlign && (s5 = t6.globals.svgHeight - 50), a4 += e8.offsetX, s5 = s5 + parseInt(e8.style.fontSize, 10) + 2 + e8.offsetY, void 0 !== e8.text && "" !== e8.text) {
          var o8 = i8.drawText({ x: a4, y: s5, text: e8.text, textAnchor: r7, fontSize: e8.style.fontSize, fontFamily: e8.style.fontFamily, foreColor: e8.style.color, opacity: 1, class: "apexcharts-text-nodata" });
          t6.globals.dom.Paper.add(o8);
        }
      } }, { key: "setNullSeriesToZeroValues", value: function(t6) {
        for (var e8 = this.w, i8 = 0; i8 < t6.length; i8++) if (0 === t6[i8].length) for (var a4 = 0; a4 < t6[e8.globals.maxValsInArrayIndex].length; a4++) t6[i8].push(0);
        return t6;
      } }, { key: "hasAllSeriesEqualX", value: function() {
        for (var t6 = true, e8 = this.w, i8 = this.filteredSeriesX(), a4 = 0; a4 < i8.length - 1; a4++) if (i8[a4][0] !== i8[a4 + 1][0]) {
          t6 = false;
          break;
        }
        return e8.globals.allSeriesHasEqualX = t6, t6;
      } }, { key: "filteredSeriesX", value: function() {
        var t6 = this.w.globals.seriesX.map(function(t7) {
          return t7.length > 0 ? t7 : [];
        });
        return t6;
      } }]), t5;
    }();
    var _2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new A2(this.ctx);
      }
      return s4(t5, [{ key: "isMultiFormat", value: function() {
        return this.isFormatXY() || this.isFormat2DArray();
      } }, { key: "isFormatXY", value: function() {
        var t6 = this.w.config.series.slice(), e8 = new V2(this.ctx);
        if (this.activeSeriesIndex = e8.getActiveConfigSeriesIndex(), void 0 !== t6[this.activeSeriesIndex].data && t6[this.activeSeriesIndex].data.length > 0 && null !== t6[this.activeSeriesIndex].data[0] && void 0 !== t6[this.activeSeriesIndex].data[0].x && null !== t6[this.activeSeriesIndex].data[0]) return true;
      } }, { key: "isFormat2DArray", value: function() {
        var t6 = this.w.config.series.slice(), e8 = new V2(this.ctx);
        if (this.activeSeriesIndex = e8.getActiveConfigSeriesIndex(), void 0 !== t6[this.activeSeriesIndex].data && t6[this.activeSeriesIndex].data.length > 0 && void 0 !== t6[this.activeSeriesIndex].data[0] && null !== t6[this.activeSeriesIndex].data[0] && t6[this.activeSeriesIndex].data[0].constructor === Array) return true;
      } }, { key: "handleFormat2DArray", value: function(t6, e8) {
        for (var i8 = this.w.config, a4 = this.w.globals, s5 = "boxPlot" === i8.chart.type || "boxPlot" === i8.series[e8].type, r7 = 0; r7 < t6[e8].data.length; r7++) if (void 0 !== t6[e8].data[r7][1] && (Array.isArray(t6[e8].data[r7][1]) && 4 === t6[e8].data[r7][1].length && !s5 ? this.twoDSeries.push(m2.parseNumber(t6[e8].data[r7][1][3])) : t6[e8].data[r7].length >= 5 ? this.twoDSeries.push(m2.parseNumber(t6[e8].data[r7][4])) : this.twoDSeries.push(m2.parseNumber(t6[e8].data[r7][1])), a4.dataFormatXNumeric = true), "datetime" === i8.xaxis.type) {
          var o8 = new Date(t6[e8].data[r7][0]);
          o8 = new Date(o8).getTime(), this.twoDSeriesX.push(o8);
        } else this.twoDSeriesX.push(t6[e8].data[r7][0]);
        for (var n7 = 0; n7 < t6[e8].data.length; n7++) void 0 !== t6[e8].data[n7][2] && (this.threeDSeries.push(t6[e8].data[n7][2]), a4.isDataXYZ = true);
      } }, { key: "handleFormatXY", value: function(t6, e8) {
        var i8 = this.w.config, a4 = this.w.globals, s5 = new L2(this.ctx), r7 = e8;
        a4.collapsedSeriesIndices.indexOf(e8) > -1 && (r7 = this.activeSeriesIndex);
        for (var o8 = 0; o8 < t6[e8].data.length; o8++) void 0 !== t6[e8].data[o8].y && (Array.isArray(t6[e8].data[o8].y) ? this.twoDSeries.push(m2.parseNumber(t6[e8].data[o8].y[t6[e8].data[o8].y.length - 1])) : this.twoDSeries.push(m2.parseNumber(t6[e8].data[o8].y))), void 0 !== t6[e8].data[o8].goals && Array.isArray(t6[e8].data[o8].goals) ? (void 0 === this.seriesGoals[e8] && (this.seriesGoals[e8] = []), this.seriesGoals[e8].push(t6[e8].data[o8].goals)) : (void 0 === this.seriesGoals[e8] && (this.seriesGoals[e8] = []), this.seriesGoals[e8].push(null));
        for (var n7 = 0; n7 < t6[r7].data.length; n7++) {
          var l4 = "string" == typeof t6[r7].data[n7].x, h4 = Array.isArray(t6[r7].data[n7].x), c5 = !h4 && !!s5.isValidDate(t6[r7].data[n7].x);
          if (l4 || c5) if (l4 || i8.xaxis.convertedCatToNumeric) {
            var d4 = a4.isBarHorizontal && a4.isRangeData;
            "datetime" !== i8.xaxis.type || d4 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t6[r7].data[n7].x), isNaN(t6[r7].data[n7].x) || "category" === this.w.config.xaxis.type || "string" == typeof t6[r7].data[n7].x || (a4.isXNumeric = true)) : this.twoDSeriesX.push(s5.parseDate(t6[r7].data[n7].x));
          } else "datetime" === i8.xaxis.type ? this.twoDSeriesX.push(s5.parseDate(t6[r7].data[n7].x.toString())) : (a4.dataFormatXNumeric = true, a4.isXNumeric = true, this.twoDSeriesX.push(parseFloat(t6[r7].data[n7].x)));
          else h4 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t6[r7].data[n7].x)) : (a4.isXNumeric = true, a4.dataFormatXNumeric = true, this.twoDSeriesX.push(t6[r7].data[n7].x));
        }
        if (t6[e8].data[0] && void 0 !== t6[e8].data[0].z) {
          for (var g3 = 0; g3 < t6[e8].data.length; g3++) this.threeDSeries.push(t6[e8].data[g3].z);
          a4.isDataXYZ = true;
        }
      } }, { key: "handleRangeData", value: function(t6, e8) {
        var i8 = this.w.globals, a4 = {};
        return this.isFormat2DArray() ? a4 = this.handleRangeDataFormat("array", t6, e8) : this.isFormatXY() && (a4 = this.handleRangeDataFormat("xy", t6, e8)), i8.seriesRangeStart.push(void 0 === a4.start ? [] : a4.start), i8.seriesRangeEnd.push(void 0 === a4.end ? [] : a4.end), i8.seriesRange.push(a4.rangeUniques), i8.seriesRange.forEach(function(t7, e9) {
          t7 && t7.forEach(function(t8, e10) {
            t8.y.forEach(function(e11, i9) {
              for (var a5 = 0; a5 < t8.y.length; a5++) if (i9 !== a5) {
                var s5 = e11.y1, r7 = e11.y2, o8 = t8.y[a5].y1;
                s5 <= t8.y[a5].y2 && o8 <= r7 && (t8.overlaps.indexOf(e11.rangeName) < 0 && t8.overlaps.push(e11.rangeName), t8.overlaps.indexOf(t8.y[a5].rangeName) < 0 && t8.overlaps.push(t8.y[a5].rangeName));
              }
            });
          });
        }), a4;
      } }, { key: "handleCandleStickBoxData", value: function(t6, e8) {
        var i8 = this.w.globals, a4 = {};
        return this.isFormat2DArray() ? a4 = this.handleCandleStickBoxDataFormat("array", t6, e8) : this.isFormatXY() && (a4 = this.handleCandleStickBoxDataFormat("xy", t6, e8)), i8.seriesCandleO[e8] = a4.o, i8.seriesCandleH[e8] = a4.h, i8.seriesCandleM[e8] = a4.m, i8.seriesCandleL[e8] = a4.l, i8.seriesCandleC[e8] = a4.c, a4;
      } }, { key: "handleRangeDataFormat", value: function(t6, e8, i8) {
        var a4 = [], s5 = [], r7 = e8[i8].data.filter(function(t7, e9, i9) {
          return e9 === i9.findIndex(function(e10) {
            return e10.x === t7.x;
          });
        }).map(function(t7, e9) {
          return { x: t7.x, overlaps: [], y: [] };
        });
        if ("array" === t6) for (var o8 = 0; o8 < e8[i8].data.length; o8++) Array.isArray(e8[i8].data[o8]) ? (a4.push(e8[i8].data[o8][1][0]), s5.push(e8[i8].data[o8][1][1])) : (a4.push(e8[i8].data[o8]), s5.push(e8[i8].data[o8]));
        else if ("xy" === t6) for (var n7 = function(t7) {
          var o9 = Array.isArray(e8[i8].data[t7].y), n8 = m2.randomId(), l5 = e8[i8].data[t7].x, h4 = { y1: o9 ? e8[i8].data[t7].y[0] : e8[i8].data[t7].y, y2: o9 ? e8[i8].data[t7].y[1] : e8[i8].data[t7].y, rangeName: n8 };
          e8[i8].data[t7].rangeName = n8;
          var c5 = r7.findIndex(function(t8) {
            return t8.x === l5;
          });
          r7[c5].y.push(h4), a4.push(h4.y1), s5.push(h4.y2);
        }, l4 = 0; l4 < e8[i8].data.length; l4++) n7(l4);
        return { start: a4, end: s5, rangeUniques: r7 };
      } }, { key: "handleCandleStickBoxDataFormat", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = "boxPlot" === a4.config.chart.type || "boxPlot" === a4.config.series[i8].type, r7 = [], o8 = [], n7 = [], l4 = [], h4 = [];
        if ("array" === t6) if (s5 && 6 === e8[i8].data[0].length || !s5 && 5 === e8[i8].data[0].length) for (var c5 = 0; c5 < e8[i8].data.length; c5++) r7.push(e8[i8].data[c5][1]), o8.push(e8[i8].data[c5][2]), s5 ? (n7.push(e8[i8].data[c5][3]), l4.push(e8[i8].data[c5][4]), h4.push(e8[i8].data[c5][5])) : (l4.push(e8[i8].data[c5][3]), h4.push(e8[i8].data[c5][4]));
        else for (var d4 = 0; d4 < e8[i8].data.length; d4++) Array.isArray(e8[i8].data[d4][1]) && (r7.push(e8[i8].data[d4][1][0]), o8.push(e8[i8].data[d4][1][1]), s5 ? (n7.push(e8[i8].data[d4][1][2]), l4.push(e8[i8].data[d4][1][3]), h4.push(e8[i8].data[d4][1][4])) : (l4.push(e8[i8].data[d4][1][2]), h4.push(e8[i8].data[d4][1][3])));
        else if ("xy" === t6) for (var g3 = 0; g3 < e8[i8].data.length; g3++) Array.isArray(e8[i8].data[g3].y) && (r7.push(e8[i8].data[g3].y[0]), o8.push(e8[i8].data[g3].y[1]), s5 ? (n7.push(e8[i8].data[g3].y[2]), l4.push(e8[i8].data[g3].y[3]), h4.push(e8[i8].data[g3].y[4])) : (l4.push(e8[i8].data[g3].y[2]), h4.push(e8[i8].data[g3].y[3])));
        return { o: r7, h: o8, m: n7, l: l4, c: h4 };
      } }, { key: "parseDataAxisCharts", value: function(t6) {
        var e8 = this, i8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a4 = this.w.config, s5 = this.w.globals, r7 = new L2(i8), o8 = a4.labels.length > 0 ? a4.labels.slice() : a4.xaxis.categories.slice();
        s5.isRangeBar = "rangeBar" === a4.chart.type && s5.isBarHorizontal, s5.hasXaxisGroups = "category" === a4.xaxis.type && a4.xaxis.group.groups.length > 0, s5.hasXaxisGroups && (s5.groups = a4.xaxis.group.groups), t6.forEach(function(t7, e9) {
          void 0 !== t7.name ? s5.seriesNames.push(t7.name) : s5.seriesNames.push("series-" + parseInt(e9 + 1, 10));
        }), this.coreUtils.setSeriesYAxisMappings();
        var n7 = [], l4 = p3(new Set(a4.series.map(function(t7) {
          return t7.group;
        })));
        a4.series.forEach(function(t7, e9) {
          var i9 = l4.indexOf(t7.group);
          n7[i9] || (n7[i9] = []), n7[i9].push(s5.seriesNames[e9]);
        }), s5.seriesGroups = n7;
        for (var h4 = function() {
          for (var t7 = 0; t7 < o8.length; t7++) if ("string" == typeof o8[t7]) {
            if (!r7.isValidDate(o8[t7])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
            e8.twoDSeriesX.push(r7.parseDate(o8[t7]));
          } else e8.twoDSeriesX.push(o8[t7]);
        }, c5 = 0; c5 < t6.length; c5++) {
          if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t6[c5].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
          if ("rangeBar" !== a4.chart.type && "rangeArea" !== a4.chart.type && "rangeBar" !== t6[c5].type && "rangeArea" !== t6[c5].type || (s5.isRangeData = true, "rangeBar" !== a4.chart.type && "rangeArea" !== a4.chart.type || this.handleRangeData(t6, c5)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t6, c5) : this.isFormatXY() && this.handleFormatXY(t6, c5), "candlestick" !== a4.chart.type && "candlestick" !== t6[c5].type && "boxPlot" !== a4.chart.type && "boxPlot" !== t6[c5].type || this.handleCandleStickBoxData(t6, c5), s5.series.push(this.twoDSeries), s5.labels.push(this.twoDSeriesX), s5.seriesX.push(this.twoDSeriesX), s5.seriesGoals = this.seriesGoals, c5 !== this.activeSeriesIndex || this.fallbackToCategory || (s5.isXNumeric = true);
          else {
            "datetime" === a4.xaxis.type ? (s5.isXNumeric = true, h4(), s5.seriesX.push(this.twoDSeriesX)) : "numeric" === a4.xaxis.type && (s5.isXNumeric = true, o8.length > 0 && (this.twoDSeriesX = o8, s5.seriesX.push(this.twoDSeriesX))), s5.labels.push(this.twoDSeriesX);
            var d4 = t6[c5].data.map(function(t7) {
              return m2.parseNumber(t7);
            });
            s5.series.push(d4);
          }
          s5.seriesZ.push(this.threeDSeries), void 0 !== t6[c5].color ? s5.seriesColors.push(t6[c5].color) : s5.seriesColors.push(void 0);
        }
        return this.w;
      } }, { key: "parseDataNonAxisCharts", value: function(t6) {
        var e8 = this.w.globals, i8 = this.w.config;
        e8.series = t6.slice(), e8.seriesNames = i8.labels.slice();
        for (var a4 = 0; a4 < e8.series.length; a4++) void 0 === e8.seriesNames[a4] && e8.seriesNames.push("series-" + (a4 + 1));
        return this.w;
      } }, { key: "handleExternalLabelsData", value: function(t6) {
        var e8 = this.w.config, i8 = this.w.globals;
        if (e8.xaxis.categories.length > 0) i8.labels = e8.xaxis.categories;
        else if (e8.labels.length > 0) i8.labels = e8.labels.slice();
        else if (this.fallbackToCategory) {
          if (i8.labels = i8.labels[0], i8.seriesRange.length && (i8.seriesRange.map(function(t7) {
            t7.forEach(function(t8) {
              i8.labels.indexOf(t8.x) < 0 && t8.x && i8.labels.push(t8.x);
            });
          }), i8.labels = Array.from(new Set(i8.labels.map(JSON.stringify)), JSON.parse)), e8.xaxis.convertedCatToNumeric) new F(e8).convertCatToNumericXaxis(e8, this.ctx, i8.seriesX[0]), this._generateExternalLabels(t6);
        } else this._generateExternalLabels(t6);
      } }, { key: "_generateExternalLabels", value: function(t6) {
        var e8 = this.w.globals, i8 = this.w.config, a4 = [];
        if (e8.axisCharts) {
          if (e8.series.length > 0) if (this.isFormatXY()) for (var s5 = i8.series.map(function(t7, e9) {
            return t7.data.filter(function(t8, e10, i9) {
              return i9.findIndex(function(e11) {
                return e11.x === t8.x;
              }) === e10;
            });
          }), r7 = s5.reduce(function(t7, e9, i9, a5) {
            return a5[t7].length > e9.length ? t7 : i9;
          }, 0), o8 = 0; o8 < s5[r7].length; o8++) a4.push(o8 + 1);
          else for (var n7 = 0; n7 < e8.series[e8.maxValsInArrayIndex].length; n7++) a4.push(n7 + 1);
          e8.seriesX = [];
          for (var l4 = 0; l4 < t6.length; l4++) e8.seriesX.push(a4);
          this.w.globals.isBarHorizontal || (e8.isXNumeric = true);
        }
        if (0 === a4.length) {
          a4 = e8.axisCharts ? [] : e8.series.map(function(t7, e9) {
            return e9 + 1;
          });
          for (var h4 = 0; h4 < t6.length; h4++) e8.seriesX.push(a4);
        }
        e8.labels = a4, i8.xaxis.convertedCatToNumeric && (e8.categoryLabels = a4.map(function(t7) {
          return i8.xaxis.labels.formatter(t7);
        })), e8.noLabelsProvided = true;
      } }, { key: "parseData", value: function(t6) {
        var e8 = this.w, i8 = e8.config, a4 = e8.globals;
        if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = false, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a4.axisCharts ? (this.parseDataAxisCharts(t6), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t6), i8.chart.stacked) {
          var s5 = new V2(this.ctx);
          a4.series = s5.setNullSeriesToZeroValues(a4.series);
        }
        this.coreUtils.getSeriesTotals(), a4.axisCharts && (a4.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a4.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a4.dataFormatXNumeric || a4.isXNumeric && ("numeric" !== i8.xaxis.type || 0 !== i8.labels.length || 0 !== i8.xaxis.categories.length) || this.handleExternalLabelsData(t6);
        for (var r7 = this.coreUtils.getCategoryLabels(a4.labels), o8 = 0; o8 < r7.length; o8++) if (Array.isArray(r7[o8])) {
          a4.isMultiLineX = true;
          break;
        }
      } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
        var t6 = this.w, e8 = [];
        t6.globals.seriesYAxisMap.forEach(function(i8, a4) {
          var s5 = 0;
          i8.forEach(function(e9) {
            -1 !== t6.globals.collapsedSeriesIndices.indexOf(e9) && s5++;
          }), s5 > 0 && s5 == i8.length && e8.push(a4);
        }), t6.globals.ignoreYAxisIndexes = e8.map(function(t7) {
          return t7;
        });
      } }]), t5;
    }();
    var U = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "scaleSvgNode", value: function(t6, e8) {
        var i8 = parseFloat(t6.getAttributeNS(null, "width")), a4 = parseFloat(t6.getAttributeNS(null, "height"));
        t6.setAttributeNS(null, "width", i8 * e8), t6.setAttributeNS(null, "height", a4 * e8), t6.setAttributeNS(null, "viewBox", "0 0 " + i8 + " " + a4);
      } }, { key: "getSvgString", value: function() {
        var t6 = this;
        return new Promise(function(e8) {
          var i8 = t6.w, a4 = i8.config.chart.toolbar.export.width, s5 = i8.config.chart.toolbar.export.scale || a4 / i8.globals.svgWidth;
          s5 || (s5 = 1);
          var r7 = t6.w.globals.dom.Paper.svg(), o8 = t6.w.globals.dom.Paper.node.cloneNode(true);
          1 !== s5 && t6.scaleSvgNode(o8, s5), t6.convertImagesToBase64(o8).then(function() {
            r7 = new XMLSerializer().serializeToString(o8), e8(r7.replace(/&nbsp;/g, "&#160;"));
          });
        });
      } }, { key: "convertImagesToBase64", value: function(t6) {
        var e8 = this, i8 = t6.getElementsByTagName("image"), a4 = Array.from(i8).map(function(t7) {
          var i9 = t7.getAttributeNS("http://www.w3.org/1999/xlink", "href");
          return i9 && !i9.startsWith("data:") ? e8.getBase64FromUrl(i9).then(function(e9) {
            t7.setAttributeNS("http://www.w3.org/1999/xlink", "href", e9);
          }).catch(function(t8) {
            console.error("Error converting image to base64:", t8);
          }) : Promise.resolve();
        });
        return Promise.all(a4);
      } }, { key: "getBase64FromUrl", value: function(t6) {
        return new Promise(function(e8, i8) {
          var a4 = new Image();
          a4.crossOrigin = "Anonymous", a4.onload = function() {
            var t7 = document.createElement("canvas");
            t7.width = a4.width, t7.height = a4.height, t7.getContext("2d").drawImage(a4, 0, 0), e8(t7.toDataURL());
          }, a4.onerror = i8, a4.src = t6;
        });
      } }, { key: "cleanup", value: function() {
        var t6 = this.w, e8 = t6.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i8 = t6.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a4 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
        Array.prototype.forEach.call(a4, function(t7) {
          t7.setAttribute("width", 0);
        }), e8 && e8[0] && (e8[0].setAttribute("x", -500), e8[0].setAttribute("x1", -500), e8[0].setAttribute("x2", -500)), i8 && i8[0] && (i8[0].setAttribute("y", -100), i8[0].setAttribute("y1", -100), i8[0].setAttribute("y2", -100));
      } }, { key: "svgUrl", value: function() {
        var t6 = this;
        return new Promise(function(e8) {
          t6.cleanup(), t6.getSvgString().then(function(t7) {
            var i8 = new Blob([t7], { type: "image/svg+xml;charset=utf-8" });
            e8(URL.createObjectURL(i8));
          });
        });
      } }, { key: "dataURI", value: function(t6) {
        var e8 = this;
        return new Promise(function(i8) {
          var a4 = e8.w, s5 = t6 ? t6.scale || t6.width / a4.globals.svgWidth : 1;
          e8.cleanup();
          var r7 = document.createElement("canvas");
          r7.width = a4.globals.svgWidth * s5, r7.height = parseInt(a4.globals.dom.elWrap.style.height, 10) * s5;
          var o8 = "transparent" !== a4.config.chart.background && a4.config.chart.background ? a4.config.chart.background : "#fff", n7 = r7.getContext("2d");
          n7.fillStyle = o8, n7.fillRect(0, 0, r7.width * s5, r7.height * s5), e8.getSvgString().then(function(t7) {
            var e9 = "data:image/svg+xml," + encodeURIComponent(t7), a5 = new Image();
            a5.crossOrigin = "anonymous", a5.onload = function() {
              if (n7.drawImage(a5, 0, 0), r7.msToBlob) {
                var t8 = r7.msToBlob();
                i8({ blob: t8 });
              } else {
                var e10 = r7.toDataURL("image/png");
                i8({ imgURI: e10 });
              }
            }, a5.src = e9;
          });
        });
      } }, { key: "exportToSVG", value: function() {
        var t6 = this;
        this.svgUrl().then(function(e8) {
          t6.triggerDownload(e8, t6.w.config.chart.toolbar.export.svg.filename, ".svg");
        });
      } }, { key: "exportToPng", value: function() {
        var t6 = this, e8 = this.w.config.chart.toolbar.export.scale, i8 = this.w.config.chart.toolbar.export.width, a4 = e8 ? { scale: e8 } : i8 ? { width: i8 } : void 0;
        this.dataURI(a4).then(function(e9) {
          var i9 = e9.imgURI, a5 = e9.blob;
          a5 ? navigator.msSaveOrOpenBlob(a5, t6.w.globals.chartID + ".png") : t6.triggerDownload(i9, t6.w.config.chart.toolbar.export.png.filename, ".png");
        });
      } }, { key: "exportToCSV", value: function(t6) {
        var e8 = this, i8 = t6.series, a4 = t6.fileName, s5 = t6.columnDelimiter, r7 = void 0 === s5 ? "," : s5, o8 = t6.lineDelimiter, n7 = void 0 === o8 ? "\n" : o8, l4 = this.w;
        i8 || (i8 = l4.config.series);
        var h4, c5, d4 = [], g3 = [], u4 = "", f4 = l4.globals.series.map(function(t7, e9) {
          return -1 === l4.globals.collapsedSeriesIndices.indexOf(e9) ? t7 : [];
        }), x3 = function(t7) {
          return "function" == typeof l4.config.chart.toolbar.export.csv.categoryFormatter ? l4.config.chart.toolbar.export.csv.categoryFormatter(t7) : "datetime" === l4.config.xaxis.type && String(t7).length >= 10 ? new Date(t7).toDateString() : m2.isNumber(t7) ? t7 : t7.split(r7).join("");
        }, b4 = function(t7) {
          return "function" == typeof l4.config.chart.toolbar.export.csv.valueFormatter ? l4.config.chart.toolbar.export.csv.valueFormatter(t7) : t7;
        }, v3 = Math.max.apply(Math, p3(i8.map(function(t7) {
          return t7.data ? t7.data.length : 0;
        }))), y4 = new _2(this.ctx), w3 = new M2(this.ctx), k3 = function(t7) {
          var i9 = "";
          if (l4.globals.axisCharts) {
            if ("category" === l4.config.xaxis.type || l4.config.xaxis.convertedCatToNumeric) if (l4.globals.isBarHorizontal) {
              var a5 = l4.globals.yLabelFormatters[0], s6 = new V2(e8.ctx).getActiveConfigSeriesIndex();
              i9 = a5(l4.globals.labels[t7], { seriesIndex: s6, dataPointIndex: t7, w: l4 });
            } else i9 = w3.getLabel(l4.globals.labels, l4.globals.timescaleLabels, 0, t7).text;
            "datetime" === l4.config.xaxis.type && (l4.config.xaxis.categories.length ? i9 = l4.config.xaxis.categories[t7] : l4.config.labels.length && (i9 = l4.config.labels[t7]));
          } else i9 = l4.config.labels[t7];
          return null === i9 ? "nullvalue" : (Array.isArray(i9) && (i9 = i9.join(" ")), m2.isNumber(i9) ? i9 : i9.split(r7).join(""));
        }, A3 = function(t7, e9) {
          if (d4.length && 0 === e9 && g3.push(d4.join(r7)), t7.data) {
            t7.data = t7.data.length && t7.data || p3(Array(v3)).map(function() {
              return "";
            });
            for (var a5 = 0; a5 < t7.data.length; a5++) {
              d4 = [];
              var s6 = k3(a5);
              if ("nullvalue" !== s6) {
                if (s6 || (y4.isFormatXY() ? s6 = i8[e9].data[a5].x : y4.isFormat2DArray() && (s6 = i8[e9].data[a5] ? i8[e9].data[a5][0] : "")), 0 === e9) {
                  d4.push(x3(s6));
                  for (var o9 = 0; o9 < l4.globals.series.length; o9++) {
                    var n8, h5 = y4.isFormatXY() ? null === (n8 = i8[o9].data[a5]) || void 0 === n8 ? void 0 : n8.y : f4[o9][a5];
                    d4.push(b4(h5));
                  }
                }
                ("candlestick" === l4.config.chart.type || t7.type && "candlestick" === t7.type) && (d4.pop(), d4.push(l4.globals.seriesCandleO[e9][a5]), d4.push(l4.globals.seriesCandleH[e9][a5]), d4.push(l4.globals.seriesCandleL[e9][a5]), d4.push(l4.globals.seriesCandleC[e9][a5])), ("boxPlot" === l4.config.chart.type || t7.type && "boxPlot" === t7.type) && (d4.pop(), d4.push(l4.globals.seriesCandleO[e9][a5]), d4.push(l4.globals.seriesCandleH[e9][a5]), d4.push(l4.globals.seriesCandleM[e9][a5]), d4.push(l4.globals.seriesCandleL[e9][a5]), d4.push(l4.globals.seriesCandleC[e9][a5])), "rangeBar" === l4.config.chart.type && (d4.pop(), d4.push(l4.globals.seriesRangeStart[e9][a5]), d4.push(l4.globals.seriesRangeEnd[e9][a5])), d4.length && g3.push(d4.join(r7));
              }
            }
          }
        };
        d4.push(l4.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === l4.config.chart.type ? (d4.push("minimum"), d4.push("q1"), d4.push("median"), d4.push("q3"), d4.push("maximum")) : "candlestick" === l4.config.chart.type ? (d4.push("open"), d4.push("high"), d4.push("low"), d4.push("close")) : "rangeBar" === l4.config.chart.type ? (d4.push("minimum"), d4.push("maximum")) : i8.map(function(t7, e9) {
          var i9 = (t7.name ? t7.name : "series-".concat(e9)) + "";
          l4.globals.axisCharts && d4.push(i9.split(r7).join("") ? i9.split(r7).join("") : "series-".concat(e9));
        }), l4.globals.axisCharts || (d4.push(l4.config.chart.toolbar.export.csv.headerValue), g3.push(d4.join(r7))), l4.globals.allSeriesHasEqualX || !l4.globals.axisCharts || l4.config.xaxis.categories.length || l4.config.labels.length ? i8.map(function(t7, e9) {
          l4.globals.axisCharts ? A3(t7, e9) : ((d4 = []).push(x3(l4.globals.labels[e9])), d4.push(b4(f4[e9])), g3.push(d4.join(r7)));
        }) : (h4 = /* @__PURE__ */ new Set(), c5 = {}, i8.forEach(function(t7, e9) {
          null == t7 || t7.data.forEach(function(t8) {
            var a5, s6;
            if (y4.isFormatXY()) a5 = t8.x, s6 = t8.y;
            else {
              if (!y4.isFormat2DArray()) return;
              a5 = t8[0], s6 = t8[1];
            }
            c5[a5] || (c5[a5] = Array(i8.length).fill("")), c5[a5][e9] = b4(s6), h4.add(a5);
          });
        }), d4.length && g3.push(d4.join(r7)), Array.from(h4).sort().forEach(function(t7) {
          g3.push([x3(t7), c5[t7].join(r7)]);
        })), u4 += g3.join(n7), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + u4), a4 || l4.config.chart.toolbar.export.csv.filename, ".csv");
      } }, { key: "triggerDownload", value: function(t6, e8, i8) {
        var a4 = document.createElement("a");
        a4.href = t6, a4.download = (e8 || this.w.globals.chartID) + i8, document.body.appendChild(a4), a4.click(), document.body.removeChild(a4);
      } }]), t5;
    }();
    var q = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = e8, this.elgrid = a4, this.w = e8.w;
        var s5 = this.w;
        this.axesUtils = new M2(e8), this.xaxisLabels = s5.globals.labels.slice(), s5.globals.timescaleLabels.length > 0 && !s5.globals.isBarHorizontal && (this.xaxisLabels = s5.globals.timescaleLabels.slice()), s5.config.xaxis.overwriteCategories && (this.xaxisLabels = s5.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === s5.config.xaxis.position ? this.offY = 0 : this.offY = s5.globals.gridHeight, this.offY = this.offY + s5.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === s5.config.chart.type && s5.config.plotOptions.bar.horizontal, this.xaxisFontSize = s5.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = s5.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s5.config.xaxis.labels.style.colors, this.xaxisBorderWidth = s5.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = s5.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = s5.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = s5.config.xaxis.axisBorder.height, this.yaxis = s5.config.yaxis[0];
      }
      return s4(t5, [{ key: "drawXaxis", value: function() {
        var t6 = this.w, e8 = new k2(this.ctx), i8 = e8.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t6.config.xaxis.offsetX, ", ").concat(t6.config.xaxis.offsetY, ")") }), a4 = e8.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t6.globals.translateXAxisX, ", ").concat(t6.globals.translateXAxisY, ")") });
        i8.add(a4);
        for (var s5 = [], r7 = 0; r7 < this.xaxisLabels.length; r7++) s5.push(this.xaxisLabels[r7]);
        if (this.drawXAxisLabelAndGroup(true, e8, a4, s5, t6.globals.isXNumeric, function(t7, e9) {
          return e9;
        }), t6.globals.hasXaxisGroups) {
          var o8 = t6.globals.groups;
          s5 = [];
          for (var n7 = 0; n7 < o8.length; n7++) s5.push(o8[n7].title);
          var l4 = {};
          t6.config.xaxis.group.style && (l4.xaxisFontSize = t6.config.xaxis.group.style.fontSize, l4.xaxisFontFamily = t6.config.xaxis.group.style.fontFamily, l4.xaxisForeColors = t6.config.xaxis.group.style.colors, l4.fontWeight = t6.config.xaxis.group.style.fontWeight, l4.cssClass = t6.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(false, e8, a4, s5, false, function(t7, e9) {
            return o8[t7].cols * e9;
          }, l4);
        }
        if (void 0 !== t6.config.xaxis.title.text) {
          var h4 = e8.group({ class: "apexcharts-xaxis-title" }), c5 = e8.drawText({ x: t6.globals.gridWidth / 2 + t6.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t6.config.xaxis.position ? t6.globals.xAxisLabelsHeight : -t6.globals.xAxisLabelsHeight - 10) + t6.config.xaxis.title.offsetY, text: t6.config.xaxis.title.text, textAnchor: "middle", fontSize: t6.config.xaxis.title.style.fontSize, fontFamily: t6.config.xaxis.title.style.fontFamily, fontWeight: t6.config.xaxis.title.style.fontWeight, foreColor: t6.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t6.config.xaxis.title.style.cssClass });
          h4.add(c5), i8.add(h4);
        }
        if (t6.config.xaxis.axisBorder.show) {
          var d4 = t6.globals.barPadForNumericAxis, g3 = e8.drawLine(t6.globals.padHorizontal + t6.config.xaxis.axisBorder.offsetX - d4, this.offY, this.xaxisBorderWidth + d4, this.offY, t6.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
          this.elgrid && this.elgrid.elGridBorders && t6.config.grid.show ? this.elgrid.elGridBorders.add(g3) : i8.add(g3);
        }
        return i8;
      } }, { key: "drawXAxisLabelAndGroup", value: function(t6, e8, i8, a4, s5, r7) {
        var o8, n7 = this, l4 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, h4 = [], c5 = [], d4 = this.w, g3 = l4.xaxisFontSize || this.xaxisFontSize, u4 = l4.xaxisFontFamily || this.xaxisFontFamily, f4 = l4.xaxisForeColors || this.xaxisForeColors, p4 = l4.fontWeight || d4.config.xaxis.labels.style.fontWeight, x3 = l4.cssClass || d4.config.xaxis.labels.style.cssClass, b4 = d4.globals.padHorizontal, v3 = a4.length, m3 = "category" === d4.config.xaxis.type ? d4.globals.dataPoints : v3;
        if (0 === m3 && v3 > m3 && (m3 = v3), s5) {
          var y4 = m3 > 1 ? m3 - 1 : m3;
          o8 = d4.globals.gridWidth / Math.min(y4, v3 - 1), b4 = b4 + r7(0, o8) / 2 + d4.config.xaxis.labels.offsetX;
        } else o8 = d4.globals.gridWidth / m3, b4 = b4 + r7(0, o8) + d4.config.xaxis.labels.offsetX;
        for (var w3 = function(s6) {
          var l5 = b4 - r7(s6, o8) / 2 + d4.config.xaxis.labels.offsetX;
          0 === s6 && 1 === v3 && o8 / 2 === b4 && 1 === m3 && (l5 = d4.globals.gridWidth / 2);
          var y5 = n7.axesUtils.getLabel(a4, d4.globals.timescaleLabels, l5, s6, h4, g3, t6), w4 = 28;
          d4.globals.rotateXLabels && t6 && (w4 = 22), d4.config.xaxis.title.text && "top" === d4.config.xaxis.position && (w4 += parseFloat(d4.config.xaxis.title.style.fontSize) + 2), t6 || (w4 = w4 + parseFloat(g3) + (d4.globals.xAxisLabelsHeight - d4.globals.xAxisGroupLabelsHeight) + (d4.globals.rotateXLabels ? 10 : 0)), y5 = void 0 !== d4.config.xaxis.tickAmount && "dataPoints" !== d4.config.xaxis.tickAmount && "datetime" !== d4.config.xaxis.type ? n7.axesUtils.checkLabelBasedOnTickamount(s6, y5, v3) : n7.axesUtils.checkForOverflowingLabels(s6, y5, v3, h4, c5);
          if (d4.config.xaxis.labels.show) {
            var k4 = e8.drawText({ x: y5.x, y: n7.offY + d4.config.xaxis.labels.offsetY + w4 - ("top" === d4.config.xaxis.position ? d4.globals.xAxisHeight + d4.config.xaxis.axisTicks.height - 2 : 0), text: y5.text, textAnchor: "middle", fontWeight: y5.isBold ? 600 : p4, fontSize: g3, fontFamily: u4, foreColor: Array.isArray(f4) ? t6 && d4.config.xaxis.convertedCatToNumeric ? f4[d4.globals.minX + s6 - 1] : f4[s6] : f4, isPlainText: false, cssClass: (t6 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x3 });
            if (i8.add(k4), k4.on("click", function(t7) {
              if ("function" == typeof d4.config.chart.events.xAxisLabelClick) {
                var e9 = Object.assign({}, d4, { labelIndex: s6 });
                d4.config.chart.events.xAxisLabelClick(t7, n7.ctx, e9);
              }
            }), t6) {
              var A3 = document.createElementNS(d4.globals.SVGNS, "title");
              A3.textContent = Array.isArray(y5.text) ? y5.text.join(" ") : y5.text, k4.node.appendChild(A3), "" !== y5.text && (h4.push(y5.text), c5.push(y5));
            }
          }
          s6 < v3 - 1 && (b4 += r7(s6 + 1, o8));
        }, k3 = 0; k3 <= v3 - 1; k3++) w3(k3);
      } }, { key: "drawXaxisInversed", value: function(t6) {
        var e8, i8, a4 = this, s5 = this.w, r7 = new k2(this.ctx), o8 = s5.config.yaxis[0].opposite ? s5.globals.translateYAxisX[t6] : 0, n7 = r7.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t6 }), l4 = r7.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o8 + ", 0)" });
        n7.add(l4);
        var h4 = [];
        if (s5.config.yaxis[t6].show) for (var c5 = 0; c5 < this.xaxisLabels.length; c5++) h4.push(this.xaxisLabels[c5]);
        e8 = s5.globals.gridHeight / h4.length, i8 = -e8 / 2.2;
        var d4 = s5.globals.yLabelFormatters[0], g3 = s5.config.yaxis[0].labels;
        if (g3.show) for (var u4 = function(o9) {
          var n8 = void 0 === h4[o9] ? "" : h4[o9];
          n8 = d4(n8, { seriesIndex: t6, dataPointIndex: o9, w: s5 });
          var c6 = a4.axesUtils.getYAxisForeColor(g3.style.colors, t6), u5 = 0;
          Array.isArray(n8) && (u5 = n8.length / 2 * parseInt(g3.style.fontSize, 10));
          var f5 = g3.offsetX - 15, p5 = "end";
          a4.yaxis.opposite && (p5 = "start"), "left" === s5.config.yaxis[0].labels.align ? (f5 = g3.offsetX, p5 = "start") : "center" === s5.config.yaxis[0].labels.align ? (f5 = g3.offsetX, p5 = "middle") : "right" === s5.config.yaxis[0].labels.align && (p5 = "end");
          var x4 = r7.drawText({ x: f5, y: i8 + e8 + g3.offsetY - u5, text: n8, textAnchor: p5, foreColor: Array.isArray(c6) ? c6[o9] : c6, fontSize: g3.style.fontSize, fontFamily: g3.style.fontFamily, fontWeight: g3.style.fontWeight, isPlainText: false, cssClass: "apexcharts-yaxis-label " + g3.style.cssClass, maxWidth: g3.maxWidth });
          l4.add(x4), x4.on("click", function(t7) {
            if ("function" == typeof s5.config.chart.events.xAxisLabelClick) {
              var e9 = Object.assign({}, s5, { labelIndex: o9 });
              s5.config.chart.events.xAxisLabelClick(t7, a4.ctx, e9);
            }
          });
          var b5 = document.createElementNS(s5.globals.SVGNS, "title");
          if (b5.textContent = Array.isArray(n8) ? n8.join(" ") : n8, x4.node.appendChild(b5), 0 !== s5.config.yaxis[t6].labels.rotate) {
            var v4 = r7.rotateAroundCenter(x4.node);
            x4.node.setAttribute("transform", "rotate(".concat(s5.config.yaxis[t6].labels.rotate, " 0 ").concat(v4.y, ")"));
          }
          i8 += e8;
        }, f4 = 0; f4 <= h4.length - 1; f4++) u4(f4);
        if (void 0 !== s5.config.yaxis[0].title.text) {
          var p4 = r7.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o8 + ", 0)" }), x3 = r7.drawText({ x: s5.config.yaxis[0].title.offsetX, y: s5.globals.gridHeight / 2 + s5.config.yaxis[0].title.offsetY, text: s5.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s5.config.yaxis[0].title.style.color, fontSize: s5.config.yaxis[0].title.style.fontSize, fontWeight: s5.config.yaxis[0].title.style.fontWeight, fontFamily: s5.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s5.config.yaxis[0].title.style.cssClass });
          p4.add(x3), n7.add(p4);
        }
        var b4 = 0;
        this.isCategoryBarHorizontal && s5.config.yaxis[0].opposite && (b4 = s5.globals.gridWidth);
        var v3 = s5.config.xaxis.axisBorder;
        if (v3.show) {
          var m3 = r7.drawLine(s5.globals.padHorizontal + v3.offsetX + b4, 1 + v3.offsetY, s5.globals.padHorizontal + v3.offsetX + b4, s5.globals.gridHeight + v3.offsetY, v3.color, 0);
          this.elgrid && this.elgrid.elGridBorders && s5.config.grid.show ? this.elgrid.elGridBorders.add(m3) : n7.add(m3);
        }
        return s5.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b4, h4.length, s5.config.yaxis[0].axisBorder, s5.config.yaxis[0].axisTicks, 0, e8, n7), n7;
      } }, { key: "drawXaxisTicks", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = t6;
        if (!(t6 < 0 || t6 - 2 > a4.globals.gridWidth)) {
          var r7 = this.offY + a4.config.xaxis.axisTicks.offsetY;
          if (e8 = e8 + r7 + a4.config.xaxis.axisTicks.height, "top" === a4.config.xaxis.position && (e8 = r7 - a4.config.xaxis.axisTicks.height), a4.config.xaxis.axisTicks.show) {
            var o8 = new k2(this.ctx).drawLine(t6 + a4.config.xaxis.axisTicks.offsetX, r7 + a4.config.xaxis.offsetY, s5 + a4.config.xaxis.axisTicks.offsetX, e8 + a4.config.xaxis.offsetY, a4.config.xaxis.axisTicks.color);
            i8.add(o8), o8.node.classList.add("apexcharts-xaxis-tick");
          }
        }
      } }, { key: "getXAxisTicksPositions", value: function() {
        var t6 = this.w, e8 = [], i8 = this.xaxisLabels.length, a4 = t6.globals.padHorizontal;
        if (t6.globals.timescaleLabels.length > 0) for (var s5 = 0; s5 < i8; s5++) a4 = this.xaxisLabels[s5].position, e8.push(a4);
        else for (var r7 = i8, o8 = 0; o8 < r7; o8++) {
          var n7 = r7;
          t6.globals.isXNumeric && "bar" !== t6.config.chart.type && (n7 -= 1), a4 += t6.globals.gridWidth / n7, e8.push(a4);
        }
        return e8;
      } }, { key: "xAxisLabelCorrections", value: function() {
        var t6 = this.w, e8 = new k2(this.ctx), i8 = t6.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a4 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s5 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r7 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
        if (t6.globals.rotateXLabels || t6.config.xaxis.labels.rotateAlways) for (var o8 = 0; o8 < a4.length; o8++) {
          var n7 = e8.rotateAroundCenter(a4[o8]);
          n7.y = n7.y - 1, n7.x = n7.x + 1, a4[o8].setAttribute("transform", "rotate(".concat(t6.config.xaxis.labels.rotate, " ").concat(n7.x, " ").concat(n7.y, ")")), a4[o8].setAttribute("text-anchor", "end");
          i8.setAttribute("transform", "translate(0, ".concat(-10, ")"));
          var l4 = a4[o8].childNodes;
          t6.config.xaxis.labels.trim && Array.prototype.forEach.call(l4, function(i9) {
            e8.placeTextWithEllipsis(i9, i9.textContent, t6.globals.xAxisLabelsHeight - ("bottom" === t6.config.legend.position ? 20 : 10));
          });
        }
        else !function() {
          for (var i9 = t6.globals.gridWidth / (t6.globals.labels.length + 1), s6 = 0; s6 < a4.length; s6++) {
            var r8 = a4[s6].childNodes;
            t6.config.xaxis.labels.trim && "datetime" !== t6.config.xaxis.type && Array.prototype.forEach.call(r8, function(t7) {
              e8.placeTextWithEllipsis(t7, t7.textContent, i9);
            });
          }
        }();
        if (s5.length > 0) {
          var h4 = s5[s5.length - 1].getBBox(), c5 = s5[0].getBBox();
          h4.x < -20 && s5[s5.length - 1].parentNode.removeChild(s5[s5.length - 1]), c5.x + c5.width > t6.globals.gridWidth && !t6.globals.isBarHorizontal && s5[0].parentNode.removeChild(s5[0]);
          for (var d4 = 0; d4 < r7.length; d4++) e8.placeTextWithEllipsis(r7[d4], r7[d4].textContent, t6.config.yaxis[0].labels.maxWidth - (t6.config.yaxis[0].title.text ? 2 * parseFloat(t6.config.yaxis[0].title.style.fontSize) : 0) - 15);
        }
      } }]), t5;
    }();
    var Z2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
        var a4 = this.w;
        this.xaxisLabels = a4.globals.labels.slice(), this.axesUtils = new M2(e8), this.isRangeBar = a4.globals.seriesRange.length && a4.globals.isBarHorizontal, a4.globals.timescaleLabels.length > 0 && (this.xaxisLabels = a4.globals.timescaleLabels.slice());
      }
      return s4(t5, [{ key: "drawGridArea", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e8 = this.w, i8 = new k2(this.ctx);
        t6 || (t6 = i8.group({ class: "apexcharts-grid" }));
        var a4 = i8.drawLine(e8.globals.padHorizontal, 1, e8.globals.padHorizontal, e8.globals.gridHeight, "transparent"), s5 = i8.drawLine(e8.globals.padHorizontal, e8.globals.gridHeight, e8.globals.gridWidth, e8.globals.gridHeight, "transparent");
        return t6.add(s5), t6.add(a4), t6;
      } }, { key: "drawGrid", value: function() {
        if (this.w.globals.axisCharts) {
          var t6 = this.renderGrid();
          return this.drawGridArea(t6.el), t6;
        }
        return null;
      } }, { key: "createGridMask", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = new k2(this.ctx), a4 = Array.isArray(t6.config.stroke.width) ? Math.max.apply(Math, p3(t6.config.stroke.width)) : t6.config.stroke.width, s5 = function(t7) {
          var i9 = document.createElementNS(e8.SVGNS, "clipPath");
          return i9.setAttribute("id", t7), i9;
        };
        e8.dom.elGridRectMask = s5("gridRectMask".concat(e8.cuid)), e8.dom.elGridRectBarMask = s5("gridRectBarMask".concat(e8.cuid)), e8.dom.elGridRectMarkerMask = s5("gridRectMarkerMask".concat(e8.cuid)), e8.dom.elForecastMask = s5("forecastMask".concat(e8.cuid)), e8.dom.elNonForecastMask = s5("nonForecastMask".concat(e8.cuid));
        var r7 = 0, o8 = 0;
        (["bar", "rangeBar", "candlestick", "boxPlot"].includes(t6.config.chart.type) || t6.globals.comboBarCount > 0) && t6.globals.isXNumeric && !t6.globals.isBarHorizontal && (r7 = Math.max(t6.config.grid.padding.left, e8.barPadForNumericAxis), o8 = Math.max(t6.config.grid.padding.right, e8.barPadForNumericAxis)), e8.dom.elGridRect = i8.drawRect(0, 0, e8.gridWidth, e8.gridHeight, 0, "#fff"), e8.dom.elGridRectBar = i8.drawRect(-a4 / 2 - r7 - 2, -a4 / 2 - 2, e8.gridWidth + a4 + o8 + r7 + 4, e8.gridHeight + a4 + 4, 0, "#fff");
        var n7 = t6.globals.markers.largestSize;
        e8.dom.elGridRectMarker = i8.drawRect(-n7, -n7, e8.gridWidth + 2 * n7, e8.gridHeight + 2 * n7, 0, "#fff"), e8.dom.elGridRectMask.appendChild(e8.dom.elGridRect.node), e8.dom.elGridRectBarMask.appendChild(e8.dom.elGridRectBar.node), e8.dom.elGridRectMarkerMask.appendChild(e8.dom.elGridRectMarker.node);
        var l4 = e8.dom.baseEl.querySelector("defs");
        l4.appendChild(e8.dom.elGridRectMask), l4.appendChild(e8.dom.elGridRectBarMask), l4.appendChild(e8.dom.elGridRectMarkerMask), l4.appendChild(e8.dom.elForecastMask), l4.appendChild(e8.dom.elNonForecastMask);
      } }, { key: "_drawGridLines", value: function(t6) {
        var e8 = t6.i, i8 = t6.x1, a4 = t6.y1, s5 = t6.x2, r7 = t6.y2, o8 = t6.xCount, n7 = t6.parent, l4 = this.w;
        if (!(0 === e8 && l4.globals.skipFirstTimelinelabel || e8 === o8 - 1 && l4.globals.skipLastTimelinelabel && !l4.config.xaxis.labels.formatter || "radar" === l4.config.chart.type)) {
          l4.config.grid.xaxis.lines.show && this._drawGridLine({ i: e8, x1: i8, y1: a4, x2: s5, y2: r7, xCount: o8, parent: n7 });
          var h4 = 0;
          if (l4.globals.hasXaxisGroups && "between" === l4.config.xaxis.tickPlacement) {
            var c5 = l4.globals.groups;
            if (c5) {
              for (var d4 = 0, g3 = 0; d4 < e8 && g3 < c5.length; g3++) d4 += c5[g3].cols;
              d4 === e8 && (h4 = 0.6 * l4.globals.xAxisLabelsHeight);
            }
          }
          new q(this.ctx).drawXaxisTicks(i8, h4, l4.globals.dom.elGraphical);
        }
      } }, { key: "_drawGridLine", value: function(t6) {
        var e8 = t6.i, i8 = t6.x1, a4 = t6.y1, s5 = t6.x2, r7 = t6.y2, o8 = t6.xCount, n7 = t6.parent, l4 = this.w, h4 = n7.node.classList.contains("apexcharts-gridlines-horizontal"), c5 = l4.globals.barPadForNumericAxis, d4 = 0 === a4 && 0 === r7 || 0 === i8 && 0 === s5 || a4 === l4.globals.gridHeight && r7 === l4.globals.gridHeight || l4.globals.isBarHorizontal && (0 === e8 || e8 === o8 - 1), g3 = new k2(this).drawLine(i8 - (h4 ? c5 : 0), a4, s5 + (h4 ? c5 : 0), r7, l4.config.grid.borderColor, l4.config.grid.strokeDashArray);
        g3.node.classList.add("apexcharts-gridline"), d4 && l4.config.grid.show ? this.elGridBorders.add(g3) : n7.add(g3);
      } }, { key: "_drawGridBandRect", value: function(t6) {
        var e8 = t6.c, i8 = t6.x1, a4 = t6.y1, s5 = t6.x2, r7 = t6.y2, o8 = t6.type, n7 = this.w, l4 = new k2(this.ctx), h4 = n7.globals.barPadForNumericAxis, c5 = n7.config.grid[o8].colors[e8], d4 = l4.drawRect(i8 - ("row" === o8 ? h4 : 0), a4, s5 + ("row" === o8 ? 2 * h4 : 0), r7, 0, c5, n7.config.grid[o8].opacity);
        this.elg.add(d4), d4.attr("clip-path", "url(#gridRectMask".concat(n7.globals.cuid, ")")), d4.node.classList.add("apexcharts-grid-".concat(o8));
      } }, { key: "_drawXYLines", value: function(t6) {
        var e8 = this, i8 = t6.xCount, a4 = t6.tickAmount, s5 = this.w;
        if (s5.config.grid.xaxis.lines.show || s5.config.xaxis.axisTicks.show) {
          var r7, o8 = s5.globals.padHorizontal, n7 = s5.globals.gridHeight;
          s5.globals.timescaleLabels.length ? function(t7) {
            for (var a5 = t7.xC, s6 = t7.x1, r8 = t7.y1, o9 = t7.x2, n8 = t7.y2, l5 = 0; l5 < a5; l5++) s6 = e8.xaxisLabels[l5].position, o9 = e8.xaxisLabels[l5].position, e8._drawGridLines({ i: l5, x1: s6, y1: r8, x2: o9, y2: n8, xCount: i8, parent: e8.elgridLinesV });
          }({ xC: i8, x1: o8, y1: 0, x2: r7, y2: n7 }) : (s5.globals.isXNumeric && (i8 = s5.globals.xAxisScale.result.length), function(t7) {
            for (var a5 = t7.xC, r8 = t7.x1, o9 = t7.y1, n8 = t7.x2, l5 = t7.y2, h5 = 0; h5 < a5 + (s5.globals.isXNumeric ? 0 : 1); h5++) 0 === h5 && 1 === a5 && 1 === s5.globals.dataPoints && (n8 = r8 = s5.globals.gridWidth / 2), e8._drawGridLines({ i: h5, x1: r8, y1: o9, x2: n8, y2: l5, xCount: i8, parent: e8.elgridLinesV }), n8 = r8 += s5.globals.gridWidth / (s5.globals.isXNumeric ? a5 - 1 : a5);
          }({ xC: i8, x1: o8, y1: 0, x2: r7, y2: n7 }));
        }
        if (s5.config.grid.yaxis.lines.show) {
          var l4 = 0, h4 = 0, c5 = s5.globals.gridWidth, d4 = a4 + 1;
          this.isRangeBar && (d4 = s5.globals.labels.length);
          for (var g3 = 0; g3 < d4 + (this.isRangeBar ? 1 : 0); g3++) this._drawGridLine({ i: g3, xCount: d4 + (this.isRangeBar ? 1 : 0), x1: 0, y1: l4, x2: c5, y2: h4, parent: this.elgridLinesH }), h4 = l4 += s5.globals.gridHeight / (this.isRangeBar ? d4 : a4);
        }
      } }, { key: "_drawInvertedXYLines", value: function(t6) {
        var e8 = t6.xCount, i8 = this.w;
        if (i8.config.grid.xaxis.lines.show || i8.config.xaxis.axisTicks.show) for (var a4, s5 = i8.globals.padHorizontal, r7 = i8.globals.gridHeight, o8 = 0; o8 < e8 + 1; o8++) {
          i8.config.grid.xaxis.lines.show && this._drawGridLine({ i: o8, xCount: e8 + 1, x1: s5, y1: 0, x2: a4, y2: r7, parent: this.elgridLinesV }), new q(this.ctx).drawXaxisTicks(s5, 0, i8.globals.dom.elGraphical), a4 = s5 += i8.globals.gridWidth / e8;
        }
        if (i8.config.grid.yaxis.lines.show) for (var n7 = 0, l4 = 0, h4 = i8.globals.gridWidth, c5 = 0; c5 < i8.globals.dataPoints + 1; c5++) this._drawGridLine({ i: c5, xCount: i8.globals.dataPoints + 1, x1: 0, y1: n7, x2: h4, y2: l4, parent: this.elgridLinesH }), l4 = n7 += i8.globals.gridHeight / i8.globals.dataPoints;
      } }, { key: "renderGrid", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = new k2(this.ctx);
        this.elg = i8.group({ class: "apexcharts-grid" }), this.elgridLinesH = i8.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = i8.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = i8.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t6.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
        for (var a4 = 0; a4 < e8.seriesYAxisMap.length && e8.ignoreYAxisIndexes.includes(a4); ) a4++;
        a4 === e8.seriesYAxisMap.length && (a4 = 0);
        var s5, r7 = e8.yAxisScale[a4].result.length - 1;
        if (!e8.isBarHorizontal || this.isRangeBar) {
          var o8, n7, l4;
          if (s5 = this.xaxisLabels.length, this.isRangeBar) r7 = e8.labels.length, t6.config.xaxis.tickAmount && t6.config.xaxis.labels.formatter && (s5 = t6.config.xaxis.tickAmount), (null === (o8 = e8.yAxisScale) || void 0 === o8 || null === (n7 = o8[a4]) || void 0 === n7 || null === (l4 = n7.result) || void 0 === l4 ? void 0 : l4.length) > 0 && "datetime" !== t6.config.xaxis.type && (s5 = e8.yAxisScale[a4].result.length - 1);
          this._drawXYLines({ xCount: s5, tickAmount: r7 });
        } else s5 = r7, r7 = e8.xTickAmount, this._drawInvertedXYLines({ xCount: s5, tickAmount: r7 });
        return this.drawGridBands(s5, r7), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: e8.gridWidth / s5 };
      } }, { key: "drawGridBands", value: function(t6, e8) {
        var i8, a4, s5 = this, r7 = this.w;
        if ((null === (i8 = r7.config.grid.row.colors) || void 0 === i8 ? void 0 : i8.length) > 0 && function(t7, i9, a5, o9, n8, l5) {
          for (var h5 = 0, c6 = 0; h5 < i9; h5++, c6++) c6 >= r7.config.grid[t7].colors.length && (c6 = 0), s5._drawGridBandRect({ c: c6, x1: a5, y1: o9, x2: n8, y2: l5, type: t7 }), o9 += r7.globals.gridHeight / e8;
        }("row", e8, 0, 0, r7.globals.gridWidth, r7.globals.gridHeight / e8), (null === (a4 = r7.config.grid.column.colors) || void 0 === a4 ? void 0 : a4.length) > 0) {
          var o8 = r7.globals.isBarHorizontal || "on" !== r7.config.xaxis.tickPlacement || "category" !== r7.config.xaxis.type && !r7.config.xaxis.convertedCatToNumeric ? t6 : t6 - 1;
          r7.globals.isXNumeric && (o8 = r7.globals.xAxisScale.result.length - 1);
          for (var n7 = r7.globals.padHorizontal, l4 = r7.globals.padHorizontal + r7.globals.gridWidth / o8, h4 = r7.globals.gridHeight, c5 = 0, d4 = 0; c5 < t6; c5++, d4++) {
            var g3;
            if (d4 >= r7.config.grid.column.colors.length && (d4 = 0), "datetime" === r7.config.xaxis.type) n7 = this.xaxisLabels[c5].position, l4 = ((null === (g3 = this.xaxisLabels[c5 + 1]) || void 0 === g3 ? void 0 : g3.position) || r7.globals.gridWidth) - this.xaxisLabels[c5].position;
            this._drawGridBandRect({ c: d4, x1: n7, y1: 0, x2: l4, y2: h4, type: "column" }), n7 += r7.globals.gridWidth / o8;
          }
        }
      } }]), t5;
    }();
    var $2 = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.coreUtils = new A2(this.ctx);
      }
      return s4(t5, [{ key: "niceScale", value: function(t6, e8) {
        var i8, a4, s5, r7, o8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n7 = 1e-11, l4 = this.w, h4 = l4.globals;
        h4.isBarHorizontal ? (i8 = l4.config.xaxis, a4 = Math.max((h4.svgWidth - 100) / 25, 2)) : (i8 = l4.config.yaxis[o8], a4 = Math.max((h4.svgHeight - 100) / 15, 2)), m2.isNumber(a4) || (a4 = 10), s5 = void 0 !== i8.min && null !== i8.min, r7 = void 0 !== i8.max && null !== i8.min;
        var c5 = void 0 !== i8.stepSize && null !== i8.stepSize, d4 = void 0 !== i8.tickAmount && null !== i8.tickAmount, g3 = d4 ? i8.tickAmount : h4.niceScaleDefaultTicks[Math.min(Math.round(a4 / 2), h4.niceScaleDefaultTicks.length - 1)];
        if (h4.isMultipleYAxis && !d4 && h4.multiAxisTickAmount > 0 && (g3 = h4.multiAxisTickAmount, d4 = true), g3 = "dataPoints" === g3 ? h4.dataPoints - 1 : Math.abs(Math.round(g3)), (t6 === Number.MIN_VALUE && 0 === e8 || !m2.isNumber(t6) && !m2.isNumber(e8) || t6 === Number.MIN_VALUE && e8 === -Number.MAX_VALUE) && (t6 = m2.isNumber(i8.min) ? i8.min : 0, e8 = m2.isNumber(i8.max) ? i8.max : t6 + g3, h4.allSeriesCollapsed = false), t6 > e8) {
          console.warn("axis.min cannot be greater than axis.max: swapping min and max");
          var u4 = e8;
          e8 = t6, t6 = u4;
        } else t6 === e8 && (t6 = 0 === t6 ? 0 : t6 - 1, e8 = 0 === e8 ? 2 : e8 + 1);
        var f4 = [];
        g3 < 1 && (g3 = 1);
        var p4 = g3, x3 = Math.abs(e8 - t6);
        !s5 && t6 > 0 && t6 / x3 < 0.15 && (t6 = 0, s5 = true), !r7 && e8 < 0 && -e8 / x3 < 0.15 && (e8 = 0, r7 = true);
        var b4 = (x3 = Math.abs(e8 - t6)) / p4, v3 = b4, y4 = Math.floor(Math.log10(v3)), w3 = Math.pow(10, y4), k3 = Math.ceil(v3 / w3);
        if (b4 = v3 = (k3 = h4.niceScaleAllowedMagMsd[0 === h4.yValueDecimal ? 0 : 1][k3]) * w3, h4.isBarHorizontal && i8.stepSize && "datetime" !== i8.type ? (b4 = i8.stepSize, c5 = true) : c5 && (b4 = i8.stepSize), c5 && i8.forceNiceScale) {
          var A3 = Math.floor(Math.log10(b4));
          b4 *= Math.pow(10, y4 - A3);
        }
        if (s5 && r7) {
          var S4 = x3 / p4;
          if (d4) if (c5) if (0 != m2.mod(x3, b4)) {
            var C4 = m2.getGCD(b4, S4);
            b4 = S4 / C4 < 10 ? C4 : S4;
          } else 0 == m2.mod(b4, S4) ? b4 = S4 : (S4 = b4, d4 = false);
          else b4 = S4;
          else if (c5) 0 == m2.mod(x3, b4) ? S4 = b4 : b4 = S4;
          else if (0 == m2.mod(x3, b4)) S4 = b4;
          else {
            S4 = x3 / (p4 = Math.ceil(x3 / b4));
            var L3 = m2.getGCD(x3, b4);
            x3 / L3 < a4 && (S4 = L3), b4 = S4;
          }
          p4 = Math.round(x3 / b4);
        } else {
          if (s5 || r7) {
            if (r7) if (d4) t6 = e8 - b4 * p4;
            else {
              var P3 = t6;
              t6 = b4 * Math.floor(t6 / b4), Math.abs(e8 - t6) / m2.getGCD(x3, b4) > a4 && (t6 = e8 - b4 * g3, t6 += b4 * Math.floor((P3 - t6) / b4));
            }
            else if (s5) if (d4) e8 = t6 + b4 * p4;
            else {
              var M3 = e8;
              e8 = b4 * Math.ceil(e8 / b4), Math.abs(e8 - t6) / m2.getGCD(x3, b4) > a4 && (e8 = t6 + b4 * g3, e8 += b4 * Math.ceil((M3 - e8) / b4));
            }
          } else if (h4.isMultipleYAxis && d4) {
            var I3 = b4 * Math.floor(t6 / b4), T3 = I3 + b4 * p4;
            T3 < e8 && (b4 *= 2), T3 = e8, e8 = (t6 = I3) + b4 * p4, x3 = Math.abs(e8 - t6), t6 > 0 && t6 < Math.abs(T3 - e8) && (t6 = 0, e8 = b4 * p4), e8 < 0 && -e8 < Math.abs(I3 - t6) && (e8 = 0, t6 = -b4 * p4);
          } else t6 = b4 * Math.floor(t6 / b4), e8 = b4 * Math.ceil(e8 / b4);
          x3 = Math.abs(e8 - t6), b4 = m2.getGCD(x3, b4), p4 = Math.round(x3 / b4);
        }
        if (d4 || s5 || r7 || (p4 = Math.ceil((x3 - n7) / (b4 + n7))) > 16 && m2.getPrimeFactors(p4).length < 2 && p4++, !d4 && i8.forceNiceScale && 0 === h4.yValueDecimal && p4 > x3 && (p4 = x3, b4 = Math.round(x3 / p4)), p4 > a4 && (!d4 && !c5 || i8.forceNiceScale)) {
          var z3 = m2.getPrimeFactors(p4), X2 = z3.length - 1, E3 = p4;
          t: for (var Y2 = 0; Y2 < X2; Y2++) for (var R3 = 0; R3 <= X2 - Y2; R3++) {
            for (var F2 = Math.min(R3 + Y2, X2), D3 = E3, H3 = 1, O2 = R3; O2 <= F2; O2++) H3 *= z3[O2];
            if ((D3 /= H3) < a4) {
              E3 = D3;
              break t;
            }
          }
          b4 = E3 === p4 ? x3 : x3 / E3, p4 = Math.round(x3 / b4);
        }
        h4.isMultipleYAxis && 0 == h4.multiAxisTickAmount && h4.ignoreYAxisIndexes.indexOf(o8) < 0 && (h4.multiAxisTickAmount = p4);
        var N3 = t6 - b4, W2 = b4 * n7;
        do {
          N3 += b4, f4.push(m2.stripNumber(N3, 7));
        } while (e8 - N3 > W2);
        return { result: f4, niceMin: f4[0], niceMax: f4[f4.length - 1] };
      } }, { key: "linearScale", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s5 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, r7 = Math.abs(e8 - t6), o8 = [];
        if (t6 === e8) return { result: o8 = [t6], niceMin: o8[0], niceMax: o8[o8.length - 1] };
        "dataPoints" === (i8 = this._adjustTicksForSmallRange(i8, a4, r7)) && (i8 = this.w.globals.dataPoints - 1), s5 || (s5 = r7 / i8), s5 = Math.round(10 * (s5 + Number.EPSILON)) / 10, i8 === Number.MAX_VALUE && (i8 = 5, s5 = 1);
        for (var n7 = t6; i8 >= 0; ) o8.push(n7), n7 = m2.preciseAddition(n7, s5), i8 -= 1;
        return { result: o8, niceMin: o8[0], niceMax: o8[o8.length - 1] };
      } }, { key: "logarithmicScaleNice", value: function(t6, e8, i8) {
        e8 <= 0 && (e8 = Math.max(t6, i8)), t6 <= 0 && (t6 = Math.min(e8, i8));
        for (var a4 = [], s5 = Math.ceil(Math.log(e8) / Math.log(i8) + 1), r7 = Math.floor(Math.log(t6) / Math.log(i8)); r7 < s5; r7++) a4.push(Math.pow(i8, r7));
        return { result: a4, niceMin: a4[0], niceMax: a4[a4.length - 1] };
      } }, { key: "logarithmicScale", value: function(t6, e8, i8) {
        e8 <= 0 && (e8 = Math.max(t6, i8)), t6 <= 0 && (t6 = Math.min(e8, i8));
        for (var a4 = [], s5 = Math.log(e8) / Math.log(i8), r7 = Math.log(t6) / Math.log(i8), o8 = s5 - r7, n7 = Math.round(o8), l4 = o8 / n7, h4 = 0, c5 = r7; h4 < n7; h4++, c5 += l4) a4.push(Math.pow(i8, c5));
        return a4.push(Math.pow(i8, s5)), { result: a4, niceMin: t6, niceMax: e8 };
      } }, { key: "_adjustTicksForSmallRange", value: function(t6, e8, i8) {
        var a4 = t6;
        if (void 0 !== e8 && this.w.config.yaxis[e8].labels.formatter && void 0 === this.w.config.yaxis[e8].tickAmount) {
          var s5 = Number(this.w.config.yaxis[e8].labels.formatter(1));
          m2.isNumber(s5) && 0 === this.w.globals.yValueDecimal && (a4 = Math.ceil(i8));
        }
        return a4 < t6 ? a4 : t6;
      } }, { key: "setYScaleForIndex", value: function(t6, e8, i8) {
        var a4 = this.w.globals, s5 = this.w.config, r7 = a4.isBarHorizontal ? s5.xaxis : s5.yaxis[t6];
        void 0 === a4.yAxisScale[t6] && (a4.yAxisScale[t6] = []);
        var o8 = Math.abs(i8 - e8);
        r7.logarithmic && o8 <= 5 && (a4.invalidLogScale = true), r7.logarithmic && o8 > 5 ? (a4.allSeriesCollapsed = false, a4.yAxisScale[t6] = r7.forceNiceScale ? this.logarithmicScaleNice(e8, i8, r7.logBase) : this.logarithmicScale(e8, i8, r7.logBase)) : i8 !== -Number.MAX_VALUE && m2.isNumber(i8) && e8 !== Number.MAX_VALUE && m2.isNumber(e8) ? (a4.allSeriesCollapsed = false, a4.yAxisScale[t6] = this.niceScale(e8, i8, t6)) : a4.yAxisScale[t6] = this.niceScale(Number.MIN_VALUE, 0, t6);
      } }, { key: "setXScale", value: function(t6, e8) {
        var i8 = this.w, a4 = i8.globals, s5 = Math.abs(e8 - t6);
        if (e8 !== -Number.MAX_VALUE && m2.isNumber(e8)) {
          var r7 = a4.xTickAmount + 1;
          s5 < 10 && s5 > 1 && (r7 = s5), a4.xAxisScale = this.linearScale(t6, e8, r7, 0, i8.config.xaxis.stepSize);
        } else a4.xAxisScale = this.linearScale(0, 10, 10);
        return a4.xAxisScale;
      } }, { key: "scaleMultipleYAxes", value: function() {
        var t6 = this, e8 = this.w.config, i8 = this.w.globals;
        this.coreUtils.setSeriesYAxisMappings();
        var a4 = i8.seriesYAxisMap, s5 = i8.minYArr, r7 = i8.maxYArr;
        i8.allSeriesCollapsed = true, i8.barGroups = [], a4.forEach(function(a5, o8) {
          var n7 = [];
          a5.forEach(function(t7) {
            var i9 = e8.series[t7].group;
            n7.indexOf(i9) < 0 && n7.push(i9);
          }), a5.length > 0 ? function() {
            var l4, h4, c5 = Number.MAX_VALUE, d4 = -Number.MAX_VALUE, g3 = c5, u4 = d4;
            if (e8.chart.stacked) !function() {
              var t7 = new Array(i8.dataPoints).fill(0), s6 = [], r8 = [], f5 = [];
              n7.forEach(function() {
                s6.push(t7.map(function() {
                  return Number.MIN_VALUE;
                })), r8.push(t7.map(function() {
                  return Number.MIN_VALUE;
                })), f5.push(t7.map(function() {
                  return Number.MIN_VALUE;
                }));
              });
              for (var p5 = function(t8) {
                !l4 && e8.series[a5[t8]].type && (l4 = e8.series[a5[t8]].type);
                var c6 = a5[t8];
                h4 = e8.series[c6].group ? e8.series[c6].group : "axis-".concat(o8), !(i8.collapsedSeriesIndices.indexOf(c6) < 0 && i8.ancillaryCollapsedSeriesIndices.indexOf(c6) < 0) || (i8.allSeriesCollapsed = false, n7.forEach(function(t9, a6) {
                  if (e8.series[c6].group === t9) for (var o9 = 0; o9 < i8.series[c6].length; o9++) {
                    var n8 = i8.series[c6][o9];
                    n8 >= 0 ? r8[a6][o9] += n8 : f5[a6][o9] += n8, s6[a6][o9] += n8, g3 = Math.min(g3, n8), u4 = Math.max(u4, n8);
                  }
                })), "bar" !== l4 && "column" !== l4 || i8.barGroups.push(h4);
              }, x3 = 0; x3 < a5.length; x3++) p5(x3);
              l4 || (l4 = e8.chart.type), "bar" === l4 || "column" === l4 ? n7.forEach(function(t8, e9) {
                c5 = Math.min(c5, Math.min.apply(null, f5[e9])), d4 = Math.max(d4, Math.max.apply(null, r8[e9]));
              }) : (n7.forEach(function(t8, e9) {
                g3 = Math.min(g3, Math.min.apply(null, s6[e9])), u4 = Math.max(u4, Math.max.apply(null, s6[e9]));
              }), c5 = g3, d4 = u4), c5 === Number.MIN_VALUE && d4 === Number.MIN_VALUE && (d4 = -Number.MAX_VALUE);
            }();
            else for (var f4 = 0; f4 < a5.length; f4++) {
              var p4 = a5[f4];
              c5 = Math.min(c5, s5[p4]), d4 = Math.max(d4, r7[p4]), !(i8.collapsedSeriesIndices.indexOf(p4) < 0 && i8.ancillaryCollapsedSeriesIndices.indexOf(p4) < 0) || (i8.allSeriesCollapsed = false);
            }
            void 0 !== e8.yaxis[o8].min && (c5 = "function" == typeof e8.yaxis[o8].min ? e8.yaxis[o8].min(c5) : e8.yaxis[o8].min), void 0 !== e8.yaxis[o8].max && (d4 = "function" == typeof e8.yaxis[o8].max ? e8.yaxis[o8].max(d4) : e8.yaxis[o8].max), i8.barGroups = i8.barGroups.filter(function(t7, e9, i9) {
              return i9.indexOf(t7) === e9;
            }), t6.setYScaleForIndex(o8, c5, d4), a5.forEach(function(t7) {
              s5[t7] = i8.yAxisScale[o8].niceMin, r7[t7] = i8.yAxisScale[o8].niceMax;
            });
          }() : t6.setYScaleForIndex(o8, 0, -Number.MAX_VALUE);
        });
      } }]), t5;
    }();
    var J = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.scales = new $2(e8);
      }
      return s4(t5, [{ key: "init", value: function() {
        this.setYRange(), this.setXRange(), this.setZRange();
      } }, { key: "getMinYMaxY", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE, a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s5 = this.w.config, r7 = this.w.globals, o8 = -Number.MAX_VALUE, n7 = Number.MIN_VALUE;
        null === a4 && (a4 = t6 + 1);
        var l4 = r7.series, h4 = l4, c5 = l4;
        "candlestick" === s5.chart.type ? (h4 = r7.seriesCandleL, c5 = r7.seriesCandleH) : "boxPlot" === s5.chart.type ? (h4 = r7.seriesCandleO, c5 = r7.seriesCandleC) : r7.isRangeData && (h4 = r7.seriesRangeStart, c5 = r7.seriesRangeEnd);
        var d4 = false;
        if (r7.seriesX.length >= a4) {
          var g3, u4 = null === (g3 = r7.brushSource) || void 0 === g3 ? void 0 : g3.w.config.chart.brush;
          (s5.chart.zoom.enabled && s5.chart.zoom.autoScaleYaxis || null != u4 && u4.enabled && null != u4 && u4.autoScaleYaxis) && (d4 = true);
        }
        for (var f4 = t6; f4 < a4; f4++) {
          r7.dataPoints = Math.max(r7.dataPoints, l4[f4].length);
          var p4 = s5.series[f4].type;
          r7.categoryLabels.length && (r7.dataPoints = r7.categoryLabels.filter(function(t7) {
            return void 0 !== t7;
          }).length), r7.labels.length && "datetime" !== s5.xaxis.type && 0 !== r7.series.reduce(function(t7, e9) {
            return t7 + e9.length;
          }, 0) && (r7.dataPoints = Math.max(r7.dataPoints, r7.labels.length));
          var x3 = 0, b4 = l4[f4].length - 1;
          if (d4) {
            if (s5.xaxis.min) for (; x3 < b4 && r7.seriesX[f4][x3] < s5.xaxis.min; x3++) ;
            if (s5.xaxis.max) for (; b4 > x3 && r7.seriesX[f4][b4] > s5.xaxis.max; b4--) ;
          }
          for (var v3 = x3; v3 <= b4 && v3 < r7.series[f4].length; v3++) {
            var y4 = l4[f4][v3];
            if (null !== y4 && m2.isNumber(y4)) {
              switch (void 0 !== c5[f4][v3] && (o8 = Math.max(o8, c5[f4][v3]), e8 = Math.min(e8, c5[f4][v3])), void 0 !== h4[f4][v3] && (e8 = Math.min(e8, h4[f4][v3]), i8 = Math.max(i8, h4[f4][v3])), p4) {
                case "candlestick":
                  void 0 !== r7.seriesCandleC[f4][v3] && (o8 = Math.max(o8, r7.seriesCandleH[f4][v3]), e8 = Math.min(e8, r7.seriesCandleL[f4][v3]));
                  break;
                case "boxPlot":
                  void 0 !== r7.seriesCandleC[f4][v3] && (o8 = Math.max(o8, r7.seriesCandleC[f4][v3]), e8 = Math.min(e8, r7.seriesCandleO[f4][v3]));
              }
              p4 && "candlestick" !== p4 && "boxPlot" !== p4 && "rangeArea" !== p4 && "rangeBar" !== p4 && (o8 = Math.max(o8, r7.series[f4][v3]), e8 = Math.min(e8, r7.series[f4][v3])), i8 = o8, r7.seriesGoals[f4] && r7.seriesGoals[f4][v3] && Array.isArray(r7.seriesGoals[f4][v3]) && r7.seriesGoals[f4][v3].forEach(function(t7) {
                n7 !== Number.MIN_VALUE && (n7 = Math.min(n7, t7.value), e8 = n7), o8 = Math.max(o8, t7.value), i8 = o8;
              }), m2.isFloat(y4) && (y4 = m2.noExponents(y4), r7.yValueDecimal = Math.max(r7.yValueDecimal, y4.toString().split(".")[1].length)), n7 > h4[f4][v3] && h4[f4][v3] < 0 && (n7 = h4[f4][v3]);
            } else r7.hasNullValues = true;
          }
          "bar" !== p4 && "column" !== p4 || (n7 < 0 && o8 < 0 && (o8 = 0, i8 = Math.max(i8, 0)), n7 === Number.MIN_VALUE && (n7 = 0, e8 = Math.min(e8, 0)));
        }
        return "rangeBar" === s5.chart.type && r7.seriesRangeStart.length && r7.isBarHorizontal && (n7 = e8), "bar" === s5.chart.type && (n7 < 0 && o8 < 0 && (o8 = 0), n7 === Number.MIN_VALUE && (n7 = 0)), { minY: n7, maxY: o8, lowestY: e8, highestY: i8 };
      } }, { key: "setYRange", value: function() {
        var t6 = this.w.globals, e8 = this.w.config;
        t6.maxY = -Number.MAX_VALUE, t6.minY = Number.MIN_VALUE;
        var i8, a4 = Number.MAX_VALUE;
        if (t6.isMultipleYAxis) {
          a4 = Number.MAX_VALUE;
          for (var s5 = 0; s5 < t6.series.length; s5++) i8 = this.getMinYMaxY(s5), t6.minYArr[s5] = i8.lowestY, t6.maxYArr[s5] = i8.highestY, a4 = Math.min(a4, i8.lowestY);
        }
        if (i8 = this.getMinYMaxY(0, a4, null, t6.series.length), "bar" === e8.chart.type ? (t6.minY = i8.minY, t6.maxY = i8.maxY) : (t6.minY = i8.lowestY, t6.maxY = i8.highestY), a4 = i8.lowestY, e8.chart.stacked && this._setStackedMinMax(), "line" === e8.chart.type || "area" === e8.chart.type || "scatter" === e8.chart.type || "candlestick" === e8.chart.type || "boxPlot" === e8.chart.type || "rangeBar" === e8.chart.type && !t6.isBarHorizontal ? t6.minY === Number.MIN_VALUE && a4 !== -Number.MAX_VALUE && a4 !== t6.maxY && (t6.minY = a4) : t6.minY = t6.minY !== Number.MIN_VALUE ? Math.min(i8.minY, t6.minY) : i8.minY, e8.yaxis.forEach(function(e9, i9) {
          void 0 !== e9.max && ("number" == typeof e9.max ? t6.maxYArr[i9] = e9.max : "function" == typeof e9.max && (t6.maxYArr[i9] = e9.max(t6.isMultipleYAxis ? t6.maxYArr[i9] : t6.maxY)), t6.maxY = t6.maxYArr[i9]), void 0 !== e9.min && ("number" == typeof e9.min ? t6.minYArr[i9] = e9.min : "function" == typeof e9.min && (t6.minYArr[i9] = e9.min(t6.isMultipleYAxis ? t6.minYArr[i9] === Number.MIN_VALUE ? 0 : t6.minYArr[i9] : t6.minY)), t6.minY = t6.minYArr[i9]);
        }), t6.isBarHorizontal) {
          ["min", "max"].forEach(function(i9) {
            void 0 !== e8.xaxis[i9] && "number" == typeof e8.xaxis[i9] && ("min" === i9 ? t6.minY = e8.xaxis[i9] : t6.maxY = e8.xaxis[i9]);
          });
        }
        return t6.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t6.minY = a4) : (this.scales.setYScaleForIndex(0, t6.minY, t6.maxY), t6.minY = t6.yAxisScale[0].niceMin, t6.maxY = t6.yAxisScale[0].niceMax, t6.minYArr[0] = t6.minY, t6.maxYArr[0] = t6.maxY), t6.barGroups = [], t6.lineGroups = [], t6.areaGroups = [], e8.series.forEach(function(i9) {
          switch (i9.type || e8.chart.type) {
            case "bar":
            case "column":
              t6.barGroups.push(i9.group);
              break;
            case "line":
              t6.lineGroups.push(i9.group);
              break;
            case "area":
              t6.areaGroups.push(i9.group);
          }
        }), t6.barGroups = t6.barGroups.filter(function(t7, e9, i9) {
          return i9.indexOf(t7) === e9;
        }), t6.lineGroups = t6.lineGroups.filter(function(t7, e9, i9) {
          return i9.indexOf(t7) === e9;
        }), t6.areaGroups = t6.areaGroups.filter(function(t7, e9, i9) {
          return i9.indexOf(t7) === e9;
        }), { minY: t6.minY, maxY: t6.maxY, minYArr: t6.minYArr, maxYArr: t6.maxYArr, yAxisScale: t6.yAxisScale };
      } }, { key: "setXRange", value: function() {
        var t6 = this.w.globals, e8 = this.w.config, i8 = "numeric" === e8.xaxis.type || "datetime" === e8.xaxis.type || "category" === e8.xaxis.type && !t6.noLabelsProvided || t6.noLabelsProvided || t6.isXNumeric;
        if (t6.isXNumeric && function() {
          for (var e9 = 0; e9 < t6.series.length; e9++) if (t6.labels[e9]) for (var i9 = 0; i9 < t6.labels[e9].length; i9++) null !== t6.labels[e9][i9] && m2.isNumber(t6.labels[e9][i9]) && (t6.maxX = Math.max(t6.maxX, t6.labels[e9][i9]), t6.initialMaxX = Math.max(t6.maxX, t6.labels[e9][i9]), t6.minX = Math.min(t6.minX, t6.labels[e9][i9]), t6.initialMinX = Math.min(t6.minX, t6.labels[e9][i9]));
        }(), t6.noLabelsProvided && 0 === e8.xaxis.categories.length && (t6.maxX = t6.labels[t6.labels.length - 1], t6.initialMaxX = t6.labels[t6.labels.length - 1], t6.minX = 1, t6.initialMinX = 1), t6.isXNumeric || t6.noLabelsProvided || t6.dataFormatXNumeric) {
          var a4 = 10;
          if (void 0 === e8.xaxis.tickAmount) a4 = Math.round(t6.svgWidth / 150), "numeric" === e8.xaxis.type && t6.dataPoints < 30 && (a4 = t6.dataPoints - 1), a4 > t6.dataPoints && 0 !== t6.dataPoints && (a4 = t6.dataPoints - 1);
          else if ("dataPoints" === e8.xaxis.tickAmount) {
            if (t6.series.length > 1 && (a4 = t6.series[t6.maxValsInArrayIndex].length - 1), t6.isXNumeric) {
              var s5 = t6.maxX - t6.minX;
              s5 < 30 && (a4 = s5 - 1);
            }
          } else a4 = e8.xaxis.tickAmount;
          if (t6.xTickAmount = a4, void 0 !== e8.xaxis.max && "number" == typeof e8.xaxis.max && (t6.maxX = e8.xaxis.max), void 0 !== e8.xaxis.min && "number" == typeof e8.xaxis.min && (t6.minX = e8.xaxis.min), void 0 !== e8.xaxis.range && (t6.minX = t6.maxX - e8.xaxis.range), t6.minX !== Number.MAX_VALUE && t6.maxX !== -Number.MAX_VALUE) if (e8.xaxis.convertedCatToNumeric && !t6.dataFormatXNumeric) {
            for (var r7 = [], o8 = t6.minX - 1; o8 < t6.maxX; o8++) r7.push(o8 + 1);
            t6.xAxisScale = { result: r7, niceMin: r7[0], niceMax: r7[r7.length - 1] };
          } else t6.xAxisScale = this.scales.setXScale(t6.minX, t6.maxX);
          else t6.xAxisScale = this.scales.linearScale(0, a4, a4, 0, e8.xaxis.stepSize), t6.noLabelsProvided && t6.labels.length > 0 && (t6.xAxisScale = this.scales.linearScale(1, t6.labels.length, a4 - 1, 0, e8.xaxis.stepSize), t6.seriesX = t6.labels.slice());
          i8 && (t6.labels = t6.xAxisScale.result.slice());
        }
        return t6.isBarHorizontal && t6.labels.length && (t6.xTickAmount = t6.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t6.minX, maxX: t6.maxX };
      } }, { key: "setZRange", value: function() {
        var t6 = this.w.globals;
        if (t6.isDataXYZ) {
          for (var e8 = 0; e8 < t6.series.length; e8++) if (void 0 !== t6.seriesZ[e8]) for (var i8 = 0; i8 < t6.seriesZ[e8].length; i8++) null !== t6.seriesZ[e8][i8] && m2.isNumber(t6.seriesZ[e8][i8]) && (t6.maxZ = Math.max(t6.maxZ, t6.seriesZ[e8][i8]), t6.minZ = Math.min(t6.minZ, t6.seriesZ[e8][i8]));
        }
      } }, { key: "_handleSingleDataPoint", value: function() {
        var t6 = this.w.globals, e8 = this.w.config;
        if (t6.minX === t6.maxX) {
          var i8 = new L2(this.ctx);
          if ("datetime" === e8.xaxis.type) {
            var a4 = i8.getDate(t6.minX);
            e8.xaxis.labels.datetimeUTC ? a4.setUTCDate(a4.getUTCDate() - 2) : a4.setDate(a4.getDate() - 2), t6.minX = new Date(a4).getTime();
            var s5 = i8.getDate(t6.maxX);
            e8.xaxis.labels.datetimeUTC ? s5.setUTCDate(s5.getUTCDate() + 2) : s5.setDate(s5.getDate() + 2), t6.maxX = new Date(s5).getTime();
          } else ("numeric" === e8.xaxis.type || "category" === e8.xaxis.type && !t6.noLabelsProvided) && (t6.minX = t6.minX - 2, t6.initialMinX = t6.minX, t6.maxX = t6.maxX + 2, t6.initialMaxX = t6.maxX);
        }
      } }, { key: "_getMinXDiff", value: function() {
        var t6 = this.w.globals;
        t6.isXNumeric && t6.seriesX.forEach(function(e8, i8) {
          1 === e8.length && e8.push(t6.seriesX[t6.maxValsInArrayIndex][t6.seriesX[t6.maxValsInArrayIndex].length - 1]);
          var a4 = e8.slice();
          a4.sort(function(t7, e9) {
            return t7 - e9;
          }), a4.forEach(function(e9, i9) {
            if (i9 > 0) {
              var s5 = e9 - a4[i9 - 1];
              s5 > 0 && (t6.minXDiff = Math.min(s5, t6.minXDiff));
            }
          }), 1 !== t6.dataPoints && t6.minXDiff !== Number.MAX_VALUE || (t6.minXDiff = 0.5);
        });
      } }, { key: "_setStackedMinMax", value: function() {
        var t6 = this, e8 = this.w.globals;
        if (e8.series.length) {
          var i8 = e8.seriesGroups;
          i8.length || (i8 = [this.w.globals.seriesNames.map(function(t7) {
            return t7;
          })]);
          var a4 = {}, s5 = {};
          i8.forEach(function(i9) {
            a4[i9] = [], s5[i9] = [], t6.w.config.series.map(function(t7, a5) {
              return i9.indexOf(e8.seriesNames[a5]) > -1 ? a5 : null;
            }).filter(function(t7) {
              return null !== t7;
            }).forEach(function(r7) {
              for (var o8 = 0; o8 < e8.series[e8.maxValsInArrayIndex].length; o8++) {
                var n7, l4, h4, c5;
                void 0 === a4[i9][o8] && (a4[i9][o8] = 0, s5[i9][o8] = 0), (t6.w.config.chart.stacked && !e8.comboCharts || t6.w.config.chart.stacked && e8.comboCharts && (!t6.w.config.chart.stackOnlyBar || "bar" === (null === (n7 = t6.w.config.series) || void 0 === n7 || null === (l4 = n7[r7]) || void 0 === l4 ? void 0 : l4.type) || "column" === (null === (h4 = t6.w.config.series) || void 0 === h4 || null === (c5 = h4[r7]) || void 0 === c5 ? void 0 : c5.type))) && null !== e8.series[r7][o8] && m2.isNumber(e8.series[r7][o8]) && (e8.series[r7][o8] > 0 ? a4[i9][o8] += parseFloat(e8.series[r7][o8]) + 1e-4 : s5[i9][o8] += parseFloat(e8.series[r7][o8]));
              }
            });
          }), Object.entries(a4).forEach(function(t7) {
            var i9 = f3(t7, 1)[0];
            a4[i9].forEach(function(t8, r7) {
              e8.maxY = Math.max(e8.maxY, a4[i9][r7]), e8.minY = Math.min(e8.minY, s5[i9][r7]);
            });
          });
        }
      } }]), t5;
    }();
    var Q = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = e8, this.elgrid = a4, this.w = e8.w;
        var s5 = this.w;
        this.xaxisFontSize = s5.config.xaxis.labels.style.fontSize, this.axisFontFamily = s5.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s5.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === s5.config.chart.type && s5.config.plotOptions.bar.horizontal, this.xAxisoffX = "bottom" === s5.config.xaxis.position ? s5.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new M2(e8);
      }
      return s4(t5, [{ key: "drawYaxis", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a4 = e8.config.yaxis[t6].labels.style, s5 = a4.fontSize, r7 = a4.fontFamily, o8 = a4.fontWeight, n7 = i8.group({ class: "apexcharts-yaxis", rel: t6, transform: "translate(".concat(e8.globals.translateYAxisX[t6], ", 0)") });
        if (this.axesUtils.isYAxisHidden(t6)) return n7;
        var l4 = i8.group({ class: "apexcharts-yaxis-texts-g" });
        n7.add(l4);
        var h4 = e8.globals.yAxisScale[t6].result.length - 1, c5 = e8.globals.gridHeight / h4, d4 = e8.globals.yLabelFormatters[t6], g3 = this.axesUtils.checkForReversedLabels(t6, e8.globals.yAxisScale[t6].result.slice());
        if (e8.config.yaxis[t6].labels.show) {
          var u4 = e8.globals.translateY + e8.config.yaxis[t6].labels.offsetY;
          e8.globals.isBarHorizontal ? u4 = 0 : "heatmap" === e8.config.chart.type && (u4 -= c5 / 2), u4 += parseInt(s5, 10) / 3;
          for (var f4 = h4; f4 >= 0; f4--) {
            var p4 = d4(g3[f4], f4, e8), x3 = e8.config.yaxis[t6].labels.padding;
            e8.config.yaxis[t6].opposite && 0 !== e8.config.yaxis.length && (x3 *= -1);
            var b4 = this.getTextAnchor(e8.config.yaxis[t6].labels.align, e8.config.yaxis[t6].opposite), v3 = this.axesUtils.getYAxisForeColor(a4.colors, t6), y4 = Array.isArray(v3) ? v3[f4] : v3, w3 = m2.listToArray(e8.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t6, "'] .apexcharts-yaxis-label tspan"))).map(function(t7) {
              return t7.textContent;
            }), A3 = i8.drawText({ x: x3, y: u4, text: w3.includes(p4) && !e8.config.yaxis[t6].labels.showDuplicates ? "" : p4, textAnchor: b4, fontSize: s5, fontFamily: r7, fontWeight: o8, maxWidth: e8.config.yaxis[t6].labels.maxWidth, foreColor: y4, isPlainText: false, cssClass: "apexcharts-yaxis-label ".concat(a4.cssClass) });
            l4.add(A3), this.addTooltip(A3, p4), 0 !== e8.config.yaxis[t6].labels.rotate && this.rotateLabel(i8, A3, firstLabel, e8.config.yaxis[t6].labels.rotate), u4 += c5;
          }
        }
        return this.addYAxisTitle(i8, n7, t6), this.addAxisBorder(i8, n7, t6, h4, c5), n7;
      } }, { key: "getTextAnchor", value: function(t6, e8) {
        return "left" === t6 ? "start" : "center" === t6 ? "middle" : "right" === t6 ? "end" : e8 ? "start" : "end";
      } }, { key: "addTooltip", value: function(t6, e8) {
        var i8 = document.createElementNS(this.w.globals.SVGNS, "title");
        i8.textContent = Array.isArray(e8) ? e8.join(" ") : e8, t6.node.appendChild(i8);
      } }, { key: "rotateLabel", value: function(t6, e8, i8, a4) {
        var s5 = t6.rotateAroundCenter(i8.node), r7 = t6.rotateAroundCenter(e8.node);
        e8.node.setAttribute("transform", "rotate(".concat(a4, " ").concat(s5.x, " ").concat(r7.y, ")"));
      } }, { key: "addYAxisTitle", value: function(t6, e8, i8) {
        var a4 = this.w;
        if (void 0 !== a4.config.yaxis[i8].title.text) {
          var s5 = t6.group({ class: "apexcharts-yaxis-title" }), r7 = a4.config.yaxis[i8].opposite ? a4.globals.translateYAxisX[i8] : 0, o8 = t6.drawText({ x: r7, y: a4.globals.gridHeight / 2 + a4.globals.translateY + a4.config.yaxis[i8].title.offsetY, text: a4.config.yaxis[i8].title.text, textAnchor: "end", foreColor: a4.config.yaxis[i8].title.style.color, fontSize: a4.config.yaxis[i8].title.style.fontSize, fontWeight: a4.config.yaxis[i8].title.style.fontWeight, fontFamily: a4.config.yaxis[i8].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text ".concat(a4.config.yaxis[i8].title.style.cssClass) });
          s5.add(o8), e8.add(s5);
        }
      } }, { key: "addAxisBorder", value: function(t6, e8, i8, a4, s5) {
        var r7 = this.w, o8 = r7.config.yaxis[i8].axisBorder, n7 = 31 + o8.offsetX;
        if (r7.config.yaxis[i8].opposite && (n7 = -31 - o8.offsetX), o8.show) {
          var l4 = t6.drawLine(n7, r7.globals.translateY + o8.offsetY - 2, n7, r7.globals.gridHeight + r7.globals.translateY + o8.offsetY + 2, o8.color, 0, o8.width);
          e8.add(l4);
        }
        r7.config.yaxis[i8].axisTicks.show && this.axesUtils.drawYAxisTicks(n7, a4, o8, r7.config.yaxis[i8].axisTicks, i8, s5, e8);
      } }, { key: "drawYaxisInversed", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a4 = i8.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s5 = i8.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e8.globals.translateXAxisX, ", ").concat(e8.globals.translateXAxisY, ")") });
        a4.add(s5);
        var r7 = e8.globals.yAxisScale[t6].result.length - 1, o8 = e8.globals.gridWidth / r7 + 0.1, n7 = o8 + e8.config.xaxis.labels.offsetX, l4 = e8.globals.xLabelFormatter, h4 = this.axesUtils.checkForReversedLabels(t6, e8.globals.yAxisScale[t6].result.slice()), c5 = e8.globals.timescaleLabels;
        if (c5.length > 0 && (this.xaxisLabels = c5.slice(), r7 = (h4 = c5.slice()).length), e8.config.xaxis.labels.show) for (var d4 = c5.length ? 0 : r7; c5.length ? d4 < c5.length : d4 >= 0; c5.length ? d4++ : d4--) {
          var g3 = l4(h4[d4], d4, e8), u4 = e8.globals.gridWidth + e8.globals.padHorizontal - (n7 - o8 + e8.config.xaxis.labels.offsetX);
          if (c5.length) {
            var f4 = this.axesUtils.getLabel(h4, c5, u4, d4, this.drawnLabels, this.xaxisFontSize);
            u4 = f4.x, g3 = f4.text, this.drawnLabels.push(f4.text), 0 === d4 && e8.globals.skipFirstTimelinelabel && (g3 = ""), d4 === h4.length - 1 && e8.globals.skipLastTimelinelabel && (g3 = "");
          }
          var p4 = i8.drawText({ x: u4, y: this.xAxisoffX + e8.config.xaxis.labels.offsetY + 30 - ("top" === e8.config.xaxis.position ? e8.globals.xAxisHeight + e8.config.xaxis.axisTicks.height - 2 : 0), text: g3, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t6] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e8.config.xaxis.labels.style.fontWeight, isPlainText: false, cssClass: "apexcharts-xaxis-label ".concat(e8.config.xaxis.labels.style.cssClass) });
          s5.add(p4), p4.tspan(g3), this.addTooltip(p4, g3), n7 += o8;
        }
        return this.inversedYAxisTitleText(a4), this.inversedYAxisBorder(a4), a4;
      } }, { key: "inversedYAxisBorder", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a4 = e8.config.xaxis.axisBorder;
        if (a4.show) {
          var s5 = 0;
          "bar" === e8.config.chart.type && e8.globals.isXNumeric && (s5 -= 15);
          var r7 = i8.drawLine(e8.globals.padHorizontal + s5 + a4.offsetX, this.xAxisoffX, e8.globals.gridWidth, this.xAxisoffX, a4.color, 0, a4.height);
          this.elgrid && this.elgrid.elGridBorders && e8.config.grid.show ? this.elgrid.elGridBorders.add(r7) : t6.add(r7);
        }
      } }, { key: "inversedYAxisTitleText", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx);
        if (void 0 !== e8.config.xaxis.title.text) {
          var a4 = i8.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s5 = i8.drawText({ x: e8.globals.gridWidth / 2 + e8.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e8.config.xaxis.title.style.fontSize) + e8.config.xaxis.title.offsetY + 20, text: e8.config.xaxis.title.text, textAnchor: "middle", fontSize: e8.config.xaxis.title.style.fontSize, fontFamily: e8.config.xaxis.title.style.fontFamily, fontWeight: e8.config.xaxis.title.style.fontWeight, foreColor: e8.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text ".concat(e8.config.xaxis.title.style.cssClass) });
          a4.add(s5), t6.add(a4);
        }
      } }, { key: "yAxisTitleRotate", value: function(t6, e8) {
        var i8 = this.w, a4 = new k2(this.ctx), s5 = i8.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t6, "'] .apexcharts-yaxis-texts-g")), r7 = s5 ? s5.getBoundingClientRect() : { width: 0, height: 0 }, o8 = i8.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t6, "'] .apexcharts-yaxis-title text")), n7 = o8 ? o8.getBoundingClientRect() : { width: 0, height: 0 };
        if (o8) {
          var l4 = this.xPaddingForYAxisTitle(t6, r7, n7, e8);
          o8.setAttribute("x", l4.xPos - (e8 ? 10 : 0));
          var h4 = a4.rotateAroundCenter(o8);
          o8.setAttribute("transform", "rotate(".concat(e8 ? -1 * i8.config.yaxis[t6].title.rotate : i8.config.yaxis[t6].title.rotate, " ").concat(h4.x, " ").concat(h4.y, ")"));
        }
      } }, { key: "xPaddingForYAxisTitle", value: function(t6, e8, i8, a4) {
        var s5 = this.w, r7 = 0, o8 = 10;
        return void 0 === s5.config.yaxis[t6].title.text || t6 < 0 ? { xPos: r7, padd: 0 } : (a4 ? r7 = e8.width + s5.config.yaxis[t6].title.offsetX + i8.width / 2 + o8 / 2 : (r7 = -1 * e8.width + s5.config.yaxis[t6].title.offsetX + o8 / 2 + i8.width / 2, s5.globals.isBarHorizontal && (o8 = 25, r7 = -1 * e8.width - s5.config.yaxis[t6].title.offsetX - o8)), { xPos: r7, padd: o8 });
      } }, { key: "setYAxisXPosition", value: function(t6, e8) {
        var i8 = this.w, a4 = 0, s5 = 0, r7 = 18, o8 = 1;
        i8.config.yaxis.length > 1 && (this.multipleYs = true), i8.config.yaxis.forEach(function(n7, l4) {
          var h4 = i8.globals.ignoreYAxisIndexes.includes(l4) || !n7.show || n7.floating || 0 === t6[l4].width, c5 = t6[l4].width + e8[l4].width;
          n7.opposite ? i8.globals.isBarHorizontal ? (s5 = i8.globals.gridWidth + i8.globals.translateX - 1, i8.globals.translateYAxisX[l4] = s5 - n7.labels.offsetX) : (s5 = i8.globals.gridWidth + i8.globals.translateX + o8, h4 || (o8 += c5 + 20), i8.globals.translateYAxisX[l4] = s5 - n7.labels.offsetX + 20) : (a4 = i8.globals.translateX - r7, h4 || (r7 += c5 + 20), i8.globals.translateYAxisX[l4] = a4 + n7.labels.offsetX);
        });
      } }, { key: "setYAxisTextAlignments", value: function() {
        var t6 = this.w;
        m2.listToArray(t6.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach(function(e8, i8) {
          var a4 = t6.config.yaxis[i8];
          if (a4 && !a4.floating && void 0 !== a4.labels.align) {
            var s5 = t6.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i8, "'] .apexcharts-yaxis-texts-g")), r7 = m2.listToArray(t6.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i8, "'] .apexcharts-yaxis-label"))), o8 = s5.getBoundingClientRect();
            r7.forEach(function(t7) {
              t7.setAttribute("text-anchor", a4.labels.align);
            }), "left" !== a4.labels.align || a4.opposite ? "center" === a4.labels.align ? s5.setAttribute("transform", "translate(".concat(o8.width / 2 * (a4.opposite ? 1 : -1), ", 0)")) : "right" === a4.labels.align && a4.opposite && s5.setAttribute("transform", "translate(".concat(o8.width, ", 0)")) : s5.setAttribute("transform", "translate(-".concat(o8.width, ", 0)"));
          }
        });
      } }]), t5;
    }();
    var K = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.documentEvent = m2.bind(this.documentEvent, this);
      }
      return s4(t5, [{ key: "addEventListener", value: function(t6, e8) {
        var i8 = this.w;
        i8.globals.events.hasOwnProperty(t6) ? i8.globals.events[t6].push(e8) : i8.globals.events[t6] = [e8];
      } }, { key: "removeEventListener", value: function(t6, e8) {
        var i8 = this.w;
        if (i8.globals.events.hasOwnProperty(t6)) {
          var a4 = i8.globals.events[t6].indexOf(e8);
          -1 !== a4 && i8.globals.events[t6].splice(a4, 1);
        }
      } }, { key: "fireEvent", value: function(t6, e8) {
        var i8 = this.w;
        if (i8.globals.events.hasOwnProperty(t6)) {
          e8 && e8.length || (e8 = []);
          for (var a4 = i8.globals.events[t6], s5 = a4.length, r7 = 0; r7 < s5; r7++) a4[r7].apply(null, e8);
        }
      } }, { key: "setupEventHandlers", value: function() {
        var t6 = this, e8 = this.w, i8 = this.ctx, a4 = e8.globals.dom.baseEl.querySelector(e8.globals.chartClass);
        this.ctx.eventList.forEach(function(t7) {
          a4.addEventListener(t7, function(t8) {
            var a5 = Object.assign({}, e8, { seriesIndex: e8.globals.axisCharts ? e8.globals.capturedSeriesIndex : 0, dataPointIndex: e8.globals.capturedDataPointIndex });
            "mousemove" === t8.type || "touchmove" === t8.type ? "function" == typeof e8.config.chart.events.mouseMove && e8.config.chart.events.mouseMove(t8, i8, a5) : "mouseleave" === t8.type || "touchleave" === t8.type ? "function" == typeof e8.config.chart.events.mouseLeave && e8.config.chart.events.mouseLeave(t8, i8, a5) : ("mouseup" === t8.type && 1 === t8.which || "touchend" === t8.type) && ("function" == typeof e8.config.chart.events.click && e8.config.chart.events.click(t8, i8, a5), i8.ctx.events.fireEvent("click", [t8, i8, a5]));
          }, { capture: false, passive: true });
        }), this.ctx.eventList.forEach(function(i9) {
          e8.globals.dom.baseEl.addEventListener(i9, t6.documentEvent, { passive: true });
        }), this.ctx.core.setupBrushHandler();
      } }, { key: "documentEvent", value: function(t6) {
        var e8 = this.w, i8 = t6.target.className;
        if ("click" === t6.type) {
          var a4 = e8.globals.dom.baseEl.querySelector(".apexcharts-menu");
          a4 && a4.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i8 && a4.classList.remove("apexcharts-menu-open");
        }
        e8.globals.clientX = "touchmove" === t6.type ? t6.touches[0].clientX : t6.clientX, e8.globals.clientY = "touchmove" === t6.type ? t6.touches[0].clientY : t6.clientY;
      } }]), t5;
    }();
    var tt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "setCurrentLocaleValues", value: function(t6) {
        var e8 = this.w.config.chart.locales;
        window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e8 = this.w.config.chart.locales.concat(window.Apex.chart.locales));
        var i8 = e8.filter(function(e9) {
          return e9.name === t6;
        })[0];
        if (!i8) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
        var a4 = m2.extend(z2, i8);
        this.w.globals.locale = a4.options;
      } }]), t5;
    }();
    var et = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "drawAxis", value: function(t6, e8) {
        var i8, a4, s5 = this, r7 = this.w.globals, o8 = this.w.config, n7 = new q(this.ctx, e8), l4 = new Q(this.ctx, e8);
        r7.axisCharts && "radar" !== t6 && (r7.isBarHorizontal ? (a4 = l4.drawYaxisInversed(0), i8 = n7.drawXaxisInversed(0), r7.dom.elGraphical.add(i8), r7.dom.elGraphical.add(a4)) : (i8 = n7.drawXaxis(), r7.dom.elGraphical.add(i8), o8.yaxis.map(function(t7, e9) {
          if (-1 === r7.ignoreYAxisIndexes.indexOf(e9) && (a4 = l4.drawYaxis(e9), r7.dom.Paper.add(a4), "back" === s5.w.config.grid.position)) {
            var i9 = r7.dom.Paper.children()[1];
            i9.remove(), r7.dom.Paper.add(i9);
          }
        })));
      } }]), t5;
    }();
    var it = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "drawXCrosshairs", value: function() {
        var t6 = this.w, e8 = new k2(this.ctx), i8 = new w2(this.ctx), a4 = t6.config.xaxis.crosshairs.fill.gradient, s5 = t6.config.xaxis.crosshairs.dropShadow, r7 = t6.config.xaxis.crosshairs.fill.type, o8 = a4.colorFrom, n7 = a4.colorTo, l4 = a4.opacityFrom, h4 = a4.opacityTo, c5 = a4.stops, d4 = s5.enabled, g3 = s5.left, u4 = s5.top, f4 = s5.blur, p4 = s5.color, x3 = s5.opacity, b4 = t6.config.xaxis.crosshairs.fill.color;
        if (t6.config.xaxis.crosshairs.show) {
          "gradient" === r7 && (b4 = e8.drawGradient("vertical", o8, n7, l4, h4, null, c5, null));
          var v3 = e8.drawRect();
          1 === t6.config.xaxis.crosshairs.width && (v3 = e8.drawLine());
          var y4 = t6.globals.gridHeight;
          (!m2.isNumber(y4) || y4 < 0) && (y4 = 0);
          var A3 = t6.config.xaxis.crosshairs.width;
          (!m2.isNumber(A3) || A3 < 0) && (A3 = 0), v3.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: y4, width: A3, height: y4, fill: b4, filter: "none", "fill-opacity": t6.config.xaxis.crosshairs.opacity, stroke: t6.config.xaxis.crosshairs.stroke.color, "stroke-width": t6.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t6.config.xaxis.crosshairs.stroke.dashArray }), d4 && (v3 = i8.dropShadow(v3, { left: g3, top: u4, blur: f4, color: p4, opacity: x3 })), t6.globals.dom.elGraphical.add(v3);
        }
      } }, { key: "drawYCrosshairs", value: function() {
        var t6 = this.w, e8 = new k2(this.ctx), i8 = t6.config.yaxis[0].crosshairs, a4 = t6.globals.barPadForNumericAxis;
        if (t6.config.yaxis[0].crosshairs.show) {
          var s5 = e8.drawLine(-a4, 0, t6.globals.gridWidth + a4, 0, i8.stroke.color, i8.stroke.dashArray, i8.stroke.width);
          s5.attr({ class: "apexcharts-ycrosshairs" }), t6.globals.dom.elGraphical.add(s5);
        }
        var r7 = e8.drawLine(-a4, 0, t6.globals.gridWidth + a4, 0, i8.stroke.color, 0, 0);
        r7.attr({ class: "apexcharts-ycrosshairs-hidden" }), t6.globals.dom.elGraphical.add(r7);
      } }]), t5;
    }();
    var at = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "checkResponsiveConfig", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = i8.config;
        if (0 !== a4.responsive.length) {
          var s5 = a4.responsive.slice();
          s5.sort(function(t7, e9) {
            return t7.breakpoint > e9.breakpoint ? 1 : e9.breakpoint > t7.breakpoint ? -1 : 0;
          }).reverse();
          var r7 = new D2({}), o8 = function() {
            var t7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a5 = s5[0].breakpoint, o9 = window.innerWidth > 0 ? window.innerWidth : screen.width;
            if (o9 > a5) {
              var n8 = m2.clone(i8.globals.initialConfig);
              n8.series = m2.clone(i8.config.series);
              var l4 = A2.extendArrayProps(r7, n8, i8);
              t7 = m2.extend(l4, t7), t7 = m2.extend(i8.config, t7), e8.overrideResponsiveOptions(t7);
            } else for (var h4 = 0; h4 < s5.length; h4++) o9 < s5[h4].breakpoint && (t7 = A2.extendArrayProps(r7, s5[h4].options, i8), t7 = m2.extend(i8.config, t7), e8.overrideResponsiveOptions(t7));
          };
          if (t6) {
            var n7 = A2.extendArrayProps(r7, t6, i8);
            n7 = m2.extend(i8.config, n7), o8(n7 = m2.extend(n7, t6));
          } else o8({});
        }
      } }, { key: "overrideResponsiveOptions", value: function(t6) {
        var e8 = new D2(t6).init({ responsiveOverride: true });
        this.w.config = e8;
      } }]), t5;
    }();
    var st = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.colors = [], this.isColorFn = false, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
      }
      return s4(t5, [{ key: "checkHeatmapDistributed", value: function() {
        var t6 = this.w.config, e8 = t6.chart, i8 = t6.plotOptions;
        return "treemap" === e8.type && i8.treemap && i8.treemap.distributed || "heatmap" === e8.type && i8.heatmap && i8.heatmap.distributed;
      } }, { key: "checkBarDistributed", value: function() {
        var t6 = this.w.config, e8 = t6.chart, i8 = t6.plotOptions;
        return i8.bar && i8.bar.distributed && ("bar" === e8.type || "rangeBar" === e8.type);
      } }, { key: "init", value: function() {
        this.setDefaultColors();
      } }, { key: "setDefaultColors", value: function() {
        var t6 = this.w, e8 = new m2();
        t6.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t6.config.theme.mode));
        var i8 = p3(t6.config.colors || t6.config.fill.colors || []);
        t6.globals.colors = this.getColors(i8), this.applySeriesColors(t6.globals.seriesColors, t6.globals.colors), t6.config.theme.monochrome.enabled && (t6.globals.colors = this.getMonochromeColors(t6.config.theme.monochrome, t6.globals.series, e8));
        var a4 = t6.globals.colors.slice();
        this.pushExtraColors(t6.globals.colors), this.applyColorTypes(["fill", "stroke"], a4), this.applyDataLabelsColors(a4), this.applyRadarPolygonsColors(), this.applyMarkersColors(a4);
      } }, { key: "getColors", value: function(t6) {
        var e8 = this, i8 = this.w;
        return t6 && 0 !== t6.length ? Array.isArray(t6) && t6.length > 0 && "function" == typeof t6[0] ? (this.isColorFn = true, i8.config.series.map(function(a4, s5) {
          var r7 = t6[s5] || t6[0];
          return "function" == typeof r7 ? r7({ value: i8.globals.axisCharts ? i8.globals.series[s5][0] || 0 : i8.globals.series[s5], seriesIndex: s5, dataPointIndex: s5, w: e8.w }) : r7;
        })) : t6 : this.predefined();
      } }, { key: "applySeriesColors", value: function(t6, e8) {
        t6.forEach(function(t7, i8) {
          t7 && (e8[i8] = t7);
        });
      } }, { key: "getMonochromeColors", value: function(t6, e8, i8) {
        var a4 = t6.color, s5 = t6.shadeIntensity, r7 = t6.shadeTo, o8 = this.isBarDistributed || this.isHeatmapDistributed ? e8[0].length * e8.length : e8.length, n7 = 1 / (o8 / s5), l4 = 0;
        return Array.from({ length: o8 }, function() {
          var t7 = "dark" === r7 ? i8.shadeColor(-1 * l4, a4) : i8.shadeColor(l4, a4);
          return l4 += n7, t7;
        });
      } }, { key: "applyColorTypes", value: function(t6, e8) {
        var i8 = this, a4 = this.w;
        t6.forEach(function(t7) {
          a4.globals[t7].colors = void 0 === a4.config[t7].colors ? i8.isColorFn ? a4.config.colors : e8 : a4.config[t7].colors.slice(), i8.pushExtraColors(a4.globals[t7].colors);
        });
      } }, { key: "applyDataLabelsColors", value: function(t6) {
        var e8 = this.w;
        e8.globals.dataLabels.style.colors = void 0 === e8.config.dataLabels.style.colors ? t6 : e8.config.dataLabels.style.colors.slice(), this.pushExtraColors(e8.globals.dataLabels.style.colors, 50);
      } }, { key: "applyRadarPolygonsColors", value: function() {
        var t6 = this.w;
        t6.globals.radarPolygons.fill.colors = void 0 === t6.config.plotOptions.radar.polygons.fill.colors ? ["dark" === t6.config.theme.mode ? "#424242" : "none"] : t6.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(t6.globals.radarPolygons.fill.colors, 20);
      } }, { key: "applyMarkersColors", value: function(t6) {
        var e8 = this.w;
        e8.globals.markers.colors = void 0 === e8.config.markers.colors ? t6 : e8.config.markers.colors.slice(), this.pushExtraColors(e8.globals.markers.colors);
      } }, { key: "pushExtraColors", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a4 = this.w, s5 = e8 || a4.globals.series.length;
        if (null === i8 && (i8 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a4.config.chart.type && a4.config.plotOptions.heatmap && a4.config.plotOptions.heatmap.colorScale.inverse), i8 && a4.globals.series.length && (s5 = a4.globals.series[a4.globals.maxValsInArrayIndex].length * a4.globals.series.length), t6.length < s5) for (var r7 = s5 - t6.length, o8 = 0; o8 < r7; o8++) t6.push(t6[o8]);
      } }, { key: "updateThemeOptions", value: function(t6) {
        t6.chart = t6.chart || {}, t6.tooltip = t6.tooltip || {};
        var e8 = t6.theme.mode, i8 = "dark" === e8 ? "palette4" : "light" === e8 ? "palette1" : t6.theme.palette || "palette1", a4 = "dark" === e8 ? "#f6f7f8" : "light" === e8 ? "#373d3f" : t6.chart.foreColor || "#373d3f";
        return t6.tooltip.theme = e8 || "light", t6.chart.foreColor = a4, t6.theme.palette = i8, t6;
      } }, { key: "predefined", value: function() {
        var t6 = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"], palette3: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"], palette4: ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"], palette5: ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], default: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"] };
        return t6[this.w.config.theme.palette] || t6.default;
      } }]), t5;
    }();
    var rt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "draw", value: function() {
        this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
      } }, { key: "drawTitleSubtitle", value: function(t6) {
        var e8 = this.w, i8 = "title" === t6 ? e8.config.title : e8.config.subtitle, a4 = e8.globals.svgWidth / 2, s5 = i8.offsetY, r7 = "middle";
        if ("left" === i8.align ? (a4 = 10, r7 = "start") : "right" === i8.align && (a4 = e8.globals.svgWidth - 10, r7 = "end"), a4 += i8.offsetX, s5 = s5 + parseInt(i8.style.fontSize, 10) + i8.margin / 2, void 0 !== i8.text) {
          var o8 = new k2(this.ctx).drawText({ x: a4, y: s5, text: i8.text, textAnchor: r7, fontSize: i8.style.fontSize, fontFamily: i8.style.fontFamily, fontWeight: i8.style.fontWeight, foreColor: i8.style.color, opacity: 1 });
          o8.node.setAttribute("class", "apexcharts-".concat(t6, "-text")), e8.globals.dom.Paper.add(o8);
        }
      } }]), t5;
    }();
    var ot = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.dCtx = e8;
      }
      return s4(t5, [{ key: "getTitleSubtitleCoords", value: function(t6) {
        var e8 = this.w, i8 = 0, a4 = 0, s5 = "title" === t6 ? e8.config.title.floating : e8.config.subtitle.floating, r7 = e8.globals.dom.baseEl.querySelector(".apexcharts-".concat(t6, "-text"));
        if (null !== r7 && !s5) {
          var o8 = r7.getBoundingClientRect();
          i8 = o8.width, a4 = e8.globals.axisCharts ? o8.height + 5 : o8.height;
        }
        return { width: i8, height: a4 };
      } }, { key: "getLegendsRect", value: function() {
        var t6 = this.w, e8 = t6.globals.dom.elLegendWrap;
        t6.config.legend.height || "top" !== t6.config.legend.position && "bottom" !== t6.config.legend.position || (e8.style.maxHeight = t6.globals.svgHeight / 2 + "px");
        var i8 = Object.assign({}, m2.getBoundingClientRect(e8));
        return null !== e8 && !t6.config.legend.floating && t6.config.legend.show ? this.dCtx.lgRect = { x: i8.x, y: i8.y, height: i8.height, width: 0 === i8.height ? 0 : i8.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, "left" !== t6.config.legend.position && "right" !== t6.config.legend.position || 1.5 * this.dCtx.lgRect.width > t6.globals.svgWidth && (this.dCtx.lgRect.width = t6.globals.svgWidth / 1.5), this.dCtx.lgRect;
      } }, { key: "getDatalabelsRect", value: function() {
        var t6 = this, e8 = this.w, i8 = [];
        e8.config.series.forEach(function(s6, r8) {
          s6.data.forEach(function(s7, o9) {
            var n7;
            n7 = e8.globals.series[r8][o9], a4 = e8.config.dataLabels.formatter(n7, { ctx: t6.dCtx.ctx, seriesIndex: r8, dataPointIndex: o9, w: e8 }), i8.push(a4);
          });
        });
        var a4 = m2.getLargestStringFromArr(i8), s5 = new k2(this.dCtx.ctx), r7 = e8.config.dataLabels.style, o8 = s5.getTextRects(a4, parseInt(r7.fontSize), r7.fontFamily);
        return { width: 1.05 * o8.width, height: o8.height };
      } }, { key: "getLargestStringFromMultiArr", value: function(t6, e8) {
        var i8 = t6;
        if (this.w.globals.isMultiLineX) {
          var a4 = e8.map(function(t7, e9) {
            return Array.isArray(t7) ? t7.length : 1;
          }), s5 = Math.max.apply(Math, p3(a4));
          i8 = e8[a4.indexOf(s5)];
        }
        return i8;
      } }]), t5;
    }();
    var nt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.dCtx = e8;
      }
      return s4(t5, [{ key: "getxAxisLabelsCoords", value: function() {
        var t6, e8 = this.w, i8 = e8.globals.labels.slice();
        if (e8.config.xaxis.convertedCatToNumeric && 0 === i8.length && (i8 = e8.globals.categoryLabels), e8.globals.timescaleLabels.length > 0) {
          var a4 = this.getxAxisTimeScaleLabelsCoords();
          t6 = { width: a4.width, height: a4.height }, e8.globals.rotateXLabels = false;
        } else {
          this.dCtx.lgWidthForSideLegends = "left" !== e8.config.legend.position && "right" !== e8.config.legend.position || e8.config.legend.floating ? 0 : this.dCtx.lgRect.width;
          var s5 = e8.globals.xLabelFormatter, r7 = m2.getLargestStringFromArr(i8), o8 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r7, i8);
          e8.globals.isBarHorizontal && (o8 = r7 = e8.globals.yAxisScale[0].result.reduce(function(t7, e9) {
            return t7.length > e9.length ? t7 : e9;
          }, 0));
          var n7 = new P2(this.dCtx.ctx), l4 = r7;
          r7 = n7.xLabelFormat(s5, r7, l4, { i: void 0, dateFormatter: new L2(this.dCtx.ctx).formatDate, w: e8 }), o8 = n7.xLabelFormat(s5, o8, l4, { i: void 0, dateFormatter: new L2(this.dCtx.ctx).formatDate, w: e8 }), (e8.config.xaxis.convertedCatToNumeric && void 0 === r7 || "" === String(r7).trim()) && (o8 = r7 = "1");
          var h4 = new k2(this.dCtx.ctx), c5 = h4.getTextRects(r7, e8.config.xaxis.labels.style.fontSize), d4 = c5;
          if (r7 !== o8 && (d4 = h4.getTextRects(o8, e8.config.xaxis.labels.style.fontSize)), (t6 = { width: c5.width >= d4.width ? c5.width : d4.width, height: c5.height >= d4.height ? c5.height : d4.height }).width * i8.length > e8.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e8.config.xaxis.labels.rotate || e8.config.xaxis.labels.rotateAlways) {
            if (!e8.globals.isBarHorizontal) {
              e8.globals.rotateXLabels = true;
              var g3 = function(t7) {
                return h4.getTextRects(t7, e8.config.xaxis.labels.style.fontSize, e8.config.xaxis.labels.style.fontFamily, "rotate(".concat(e8.config.xaxis.labels.rotate, " 0 0)"), false);
              };
              c5 = g3(r7), r7 !== o8 && (d4 = g3(o8)), t6.height = (c5.height > d4.height ? c5.height : d4.height) / 1.5, t6.width = c5.width > d4.width ? c5.width : d4.width;
            }
          } else e8.globals.rotateXLabels = false;
        }
        return e8.config.xaxis.labels.show || (t6 = { width: 0, height: 0 }), { width: t6.width, height: t6.height };
      } }, { key: "getxAxisGroupLabelsCoords", value: function() {
        var t6, e8 = this.w;
        if (!e8.globals.hasXaxisGroups) return { width: 0, height: 0 };
        var i8, a4 = (null === (t6 = e8.config.xaxis.group.style) || void 0 === t6 ? void 0 : t6.fontSize) || e8.config.xaxis.labels.style.fontSize, s5 = e8.globals.groups.map(function(t7) {
          return t7.title;
        }), r7 = m2.getLargestStringFromArr(s5), o8 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r7, s5), n7 = new k2(this.dCtx.ctx), l4 = n7.getTextRects(r7, a4), h4 = l4;
        return r7 !== o8 && (h4 = n7.getTextRects(o8, a4)), i8 = { width: l4.width >= h4.width ? l4.width : h4.width, height: l4.height >= h4.height ? l4.height : h4.height }, e8.config.xaxis.labels.show || (i8 = { width: 0, height: 0 }), { width: i8.width, height: i8.height };
      } }, { key: "getxAxisTitleCoords", value: function() {
        var t6 = this.w, e8 = 0, i8 = 0;
        if (void 0 !== t6.config.xaxis.title.text) {
          var a4 = new k2(this.dCtx.ctx).getTextRects(t6.config.xaxis.title.text, t6.config.xaxis.title.style.fontSize);
          e8 = a4.width, i8 = a4.height;
        }
        return { width: e8, height: i8 };
      } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
        var t6, e8 = this.w;
        this.dCtx.timescaleLabels = e8.globals.timescaleLabels.slice();
        var i8 = this.dCtx.timescaleLabels.map(function(t7) {
          return t7.value;
        }), a4 = i8.reduce(function(t7, e9) {
          return void 0 === t7 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t7.length > e9.length ? t7 : e9;
        }, 0);
        return 1.05 * (t6 = new k2(this.dCtx.ctx).getTextRects(a4, e8.config.xaxis.labels.style.fontSize)).width * i8.length > e8.globals.gridWidth && 0 !== e8.config.xaxis.labels.rotate && (e8.globals.overlappingXLabels = true), t6;
      } }, { key: "additionalPaddingXLabels", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = i8.globals, s5 = i8.config, r7 = s5.xaxis.type, o8 = t6.width;
        a4.skipLastTimelinelabel = false, a4.skipFirstTimelinelabel = false;
        var n7 = i8.config.yaxis[0].opposite && i8.globals.isBarHorizontal, l4 = function(t7, n8) {
          s5.yaxis.length > 1 && function(t8) {
            return -1 !== a4.collapsedSeriesIndices.indexOf(t8);
          }(n8) || function(t8) {
            if (e8.dCtx.timescaleLabels && e8.dCtx.timescaleLabels.length) {
              var n9 = e8.dCtx.timescaleLabels[0], l5 = e8.dCtx.timescaleLabels[e8.dCtx.timescaleLabels.length - 1].position + o8 / 1.75 - e8.dCtx.yAxisWidthRight, h4 = n9.position - o8 / 1.75 + e8.dCtx.yAxisWidthLeft, c5 = "right" === i8.config.legend.position && e8.dCtx.lgRect.width > 0 ? e8.dCtx.lgRect.width : 0;
              l5 > a4.svgWidth - a4.translateX - c5 && (a4.skipLastTimelinelabel = true), h4 < -(t8.show && !t8.floating || "bar" !== s5.chart.type && "candlestick" !== s5.chart.type && "rangeBar" !== s5.chart.type && "boxPlot" !== s5.chart.type ? 10 : o8 / 1.75) && (a4.skipFirstTimelinelabel = true);
            } else "datetime" === r7 ? e8.dCtx.gridPad.right < o8 && !a4.rotateXLabels && (a4.skipLastTimelinelabel = true) : "datetime" !== r7 && e8.dCtx.gridPad.right < o8 / 2 - e8.dCtx.yAxisWidthRight && !a4.rotateXLabels && !i8.config.xaxis.labels.trim && (e8.dCtx.xPadRight = o8 / 2 + 1);
          }(t7);
        };
        s5.yaxis.forEach(function(t7, i9) {
          n7 ? (e8.dCtx.gridPad.left < o8 && (e8.dCtx.xPadLeft = o8 / 2 + 1), e8.dCtx.xPadRight = o8 / 2 + 1) : l4(t7, i9);
        });
      } }]), t5;
    }();
    var lt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.dCtx = e8;
      }
      return s4(t5, [{ key: "getyAxisLabelsCoords", value: function() {
        var t6 = this, e8 = this.w, i8 = [], a4 = 10, s5 = new M2(this.dCtx.ctx);
        return e8.config.yaxis.map(function(r7, o8) {
          var n7 = { seriesIndex: o8, dataPointIndex: -1, w: e8 }, l4 = e8.globals.yAxisScale[o8], h4 = 0;
          if (!s5.isYAxisHidden(o8) && r7.labels.show && void 0 !== r7.labels.minWidth && (h4 = r7.labels.minWidth), !s5.isYAxisHidden(o8) && r7.labels.show && l4.result.length) {
            var c5 = e8.globals.yLabelFormatters[o8], d4 = l4.niceMin === Number.MIN_VALUE ? 0 : l4.niceMin, g3 = l4.result.reduce(function(t7, e9) {
              var i9, a5;
              return (null === (i9 = String(c5(t7, n7))) || void 0 === i9 ? void 0 : i9.length) > (null === (a5 = String(c5(e9, n7))) || void 0 === a5 ? void 0 : a5.length) ? t7 : e9;
            }, d4), u4 = g3 = c5(g3, n7);
            if (void 0 !== g3 && 0 !== g3.length || (g3 = l4.niceMax), e8.globals.isBarHorizontal) {
              a4 = 0;
              var f4 = e8.globals.labels.slice();
              g3 = m2.getLargestStringFromArr(f4), g3 = c5(g3, { seriesIndex: o8, dataPointIndex: -1, w: e8 }), u4 = t6.dCtx.dimHelpers.getLargestStringFromMultiArr(g3, f4);
            }
            var p4 = new k2(t6.dCtx.ctx), x3 = "rotate(".concat(r7.labels.rotate, " 0 0)"), b4 = p4.getTextRects(g3, r7.labels.style.fontSize, r7.labels.style.fontFamily, x3, false), v3 = b4;
            g3 !== u4 && (v3 = p4.getTextRects(u4, r7.labels.style.fontSize, r7.labels.style.fontFamily, x3, false)), i8.push({ width: (h4 > v3.width || h4 > b4.width ? h4 : v3.width > b4.width ? v3.width : b4.width) + a4, height: v3.height > b4.height ? v3.height : b4.height });
          } else i8.push({ width: 0, height: 0 });
        }), i8;
      } }, { key: "getyAxisTitleCoords", value: function() {
        var t6 = this, e8 = this.w, i8 = [];
        return e8.config.yaxis.map(function(e9, a4) {
          if (e9.show && void 0 !== e9.title.text) {
            var s5 = new k2(t6.dCtx.ctx), r7 = "rotate(".concat(e9.title.rotate, " 0 0)"), o8 = s5.getTextRects(e9.title.text, e9.title.style.fontSize, e9.title.style.fontFamily, r7, false);
            i8.push({ width: o8.width, height: o8.height });
          } else i8.push({ width: 0, height: 0 });
        }), i8;
      } }, { key: "getTotalYAxisWidth", value: function() {
        var t6 = this.w, e8 = 0, i8 = 0, a4 = 0, s5 = t6.globals.yAxisScale.length > 1 ? 10 : 0, r7 = new M2(this.dCtx.ctx), o8 = function(o9, n7) {
          var l4 = t6.config.yaxis[n7].floating, h4 = 0;
          o9.width > 0 && !l4 ? (h4 = o9.width + s5, function(e9) {
            return t6.globals.ignoreYAxisIndexes.indexOf(e9) > -1;
          }(n7) && (h4 = h4 - o9.width - s5)) : h4 = l4 || r7.isYAxisHidden(n7) ? 0 : 5, t6.config.yaxis[n7].opposite ? a4 += h4 : i8 += h4, e8 += h4;
        };
        return t6.globals.yLabelsCoords.map(function(t7, e9) {
          o8(t7, e9);
        }), t6.globals.yTitleCoords.map(function(t7, e9) {
          o8(t7, e9);
        }), t6.globals.isBarHorizontal && !t6.config.yaxis[0].floating && (e8 = t6.globals.yLabelsCoords[0].width + t6.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i8, this.dCtx.yAxisWidthRight = a4, e8;
      } }]), t5;
    }();
    var ht = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.dCtx = e8;
      }
      return s4(t5, [{ key: "gridPadForColumnsInNumericAxis", value: function(t6) {
        var e8 = this.w, i8 = e8.config, a4 = e8.globals;
        if (a4.noData || a4.collapsedSeries.length + a4.ancillaryCollapsedSeries.length === i8.series.length) return 0;
        var s5 = function(t7) {
          return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(t7);
        }, r7 = i8.chart.type, o8 = 0, n7 = s5(r7) ? i8.series.length : 1;
        a4.comboBarCount > 0 && (n7 = a4.comboBarCount), a4.collapsedSeries.forEach(function(t7) {
          s5(t7.type) && (n7 -= 1);
        }), i8.chart.stacked && (n7 = 1);
        var l4 = s5(r7) || a4.comboBarCount > 0, h4 = Math.abs(a4.initialMaxX - a4.initialMinX);
        if (l4 && a4.isXNumeric && !a4.isBarHorizontal && n7 > 0 && 0 !== h4) {
          h4 <= 3 && (h4 = a4.dataPoints);
          var c5 = h4 / t6, d4 = a4.minXDiff && a4.minXDiff / c5 > 0 ? a4.minXDiff / c5 : 0;
          d4 > t6 / 2 && (d4 /= 2), (o8 = d4 * parseInt(i8.plotOptions.bar.columnWidth, 10) / 100) < 1 && (o8 = 1), a4.barPadForNumericAxis = o8;
        }
        return o8;
      } }, { key: "gridPadFortitleSubtitle", value: function() {
        var t6 = this, e8 = this.w, i8 = e8.globals, a4 = this.dCtx.isSparkline || !i8.axisCharts ? 0 : 10;
        ["title", "subtitle"].forEach(function(s6) {
          void 0 !== e8.config[s6].text ? a4 += e8.config[s6].margin : a4 += t6.dCtx.isSparkline || !i8.axisCharts ? 0 : 5;
        }), !e8.config.legend.show || "bottom" !== e8.config.legend.position || e8.config.legend.floating || i8.axisCharts || (a4 += 10);
        var s5 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r7 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
        i8.gridHeight -= s5.height + r7.height + a4, i8.translateY += s5.height + r7.height + a4;
      } }, { key: "setGridXPosForDualYAxis", value: function(t6, e8) {
        var i8 = this.w, a4 = new M2(this.dCtx.ctx);
        i8.config.yaxis.forEach(function(s5, r7) {
          -1 !== i8.globals.ignoreYAxisIndexes.indexOf(r7) || s5.floating || a4.isYAxisHidden(r7) || (s5.opposite && (i8.globals.translateX -= e8[r7].width + t6[r7].width + parseInt(s5.labels.style.fontSize, 10) / 1.2 + 12), i8.globals.translateX < 2 && (i8.globals.translateX = 2));
        });
      } }]), t5;
    }();
    var ct = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new ot(this), this.dimYAxis = new lt(this), this.dimXAxis = new nt(this), this.dimGrid = new ht(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
      }
      return s4(t5, [{ key: "plotCoords", value: function() {
        var t6 = this, e8 = this.w, i8 = e8.globals;
        this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
        var a4 = Array.isArray(e8.config.stroke.width) ? Math.max.apply(Math, p3(e8.config.stroke.width)) : e8.config.stroke.width;
        this.isSparkline && ((e8.config.markers.discrete.length > 0 || e8.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(e9) {
          var i9 = f3(e9, 2), a5 = i9[0], s6 = i9[1];
          t6.gridPad[a5] = Math.max(s6, t6.w.globals.markers.largestSize / 1.5);
        }), this.gridPad.top = Math.max(a4 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(a4 / 2, this.gridPad.bottom)), i8.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i8.gridHeight = i8.gridHeight - this.gridPad.top - this.gridPad.bottom, i8.gridWidth = i8.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
        var s5 = this.dimGrid.gridPadForColumnsInNumericAxis(i8.gridWidth);
        i8.gridWidth = i8.gridWidth - 2 * s5, i8.translateX = i8.translateX + this.gridPad.left + this.xPadLeft + (s5 > 0 ? s5 : 0), i8.translateY = i8.translateY + this.gridPad.top;
      } }, { key: "setDimensionsForAxisCharts", value: function() {
        var t6 = this, e8 = this.w, i8 = e8.globals, a4 = this.dimYAxis.getyAxisLabelsCoords(), s5 = this.dimYAxis.getyAxisTitleCoords();
        i8.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), e8.globals.yLabelsCoords = [], e8.globals.yTitleCoords = [], e8.config.yaxis.map(function(t7, i9) {
          e8.globals.yLabelsCoords.push({ width: a4[i9].width, index: i9 }), e8.globals.yTitleCoords.push({ width: s5[i9].width, index: i9 });
        }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
        var r7 = this.dimXAxis.getxAxisLabelsCoords(), o8 = this.dimXAxis.getxAxisGroupLabelsCoords(), n7 = this.dimXAxis.getxAxisTitleCoords();
        this.conditionalChecksForAxisCoords(r7, n7, o8), i8.translateXAxisY = e8.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i8.translateXAxisX = e8.globals.rotateXLabels && e8.globals.isXNumeric && e8.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e8.globals.isBarHorizontal && (i8.rotateXLabels = false, i8.translateXAxisY = parseInt(e8.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i8.translateXAxisY = i8.translateXAxisY + e8.config.xaxis.labels.offsetY, i8.translateXAxisX = i8.translateXAxisX + e8.config.xaxis.labels.offsetX;
        var l4 = this.yAxisWidth, h4 = this.xAxisHeight;
        i8.xAxisLabelsHeight = this.xAxisHeight - n7.height, i8.xAxisGroupLabelsHeight = i8.xAxisLabelsHeight - r7.height, i8.xAxisLabelsWidth = this.xAxisWidth, i8.xAxisHeight = this.xAxisHeight;
        var c5 = 10;
        ("radar" === e8.config.chart.type || this.isSparkline) && (l4 = 0, h4 = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || "treemap" === e8.config.chart.type) && (l4 = 0, h4 = 0, c5 = 0), this.isSparkline || "treemap" === e8.config.chart.type || this.dimXAxis.additionalPaddingXLabels(r7);
        var d4 = function() {
          i8.translateX = l4 + t6.datalabelsCoords.width, i8.gridHeight = i8.svgHeight - t6.lgRect.height - h4 - (t6.isSparkline || "treemap" === e8.config.chart.type ? 0 : e8.globals.rotateXLabels ? 10 : 15), i8.gridWidth = i8.svgWidth - l4 - 2 * t6.datalabelsCoords.width;
        };
        switch ("top" === e8.config.xaxis.position && (c5 = i8.xAxisHeight - e8.config.xaxis.axisTicks.height - 5), e8.config.legend.position) {
          case "bottom":
            i8.translateY = c5, d4();
            break;
          case "top":
            i8.translateY = this.lgRect.height + c5, d4();
            break;
          case "left":
            i8.translateY = c5, i8.translateX = this.lgRect.width + l4 + this.datalabelsCoords.width, i8.gridHeight = i8.svgHeight - h4 - 12, i8.gridWidth = i8.svgWidth - this.lgRect.width - l4 - 2 * this.datalabelsCoords.width;
            break;
          case "right":
            i8.translateY = c5, i8.translateX = l4 + this.datalabelsCoords.width, i8.gridHeight = i8.svgHeight - h4 - 12, i8.gridWidth = i8.svgWidth - this.lgRect.width - l4 - 2 * this.datalabelsCoords.width - 5;
            break;
          default:
            throw new Error("Legend position not supported");
        }
        this.dimGrid.setGridXPosForDualYAxis(s5, a4), new Q(this.ctx).setYAxisXPosition(a4, s5);
      } }, { key: "setDimensionsForNonAxisCharts", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = t6.config, a4 = 0;
        t6.config.legend.show && !t6.config.legend.floating && (a4 = 20);
        var s5 = "pie" === i8.chart.type || "polarArea" === i8.chart.type || "donut" === i8.chart.type ? "pie" : "radialBar", r7 = i8.plotOptions[s5].offsetY, o8 = i8.plotOptions[s5].offsetX;
        if (!i8.legend.show || i8.legend.floating) {
          e8.gridHeight = e8.svgHeight;
          var n7 = e8.dom.elWrap.getBoundingClientRect().width;
          return e8.gridWidth = Math.min(n7, e8.gridHeight), e8.translateY = r7, void (e8.translateX = o8 + (e8.svgWidth - e8.gridWidth) / 2);
        }
        switch (i8.legend.position) {
          case "bottom":
            e8.gridHeight = e8.svgHeight - this.lgRect.height, e8.gridWidth = e8.svgWidth, e8.translateY = r7 - 10, e8.translateX = o8 + (e8.svgWidth - e8.gridWidth) / 2;
            break;
          case "top":
            e8.gridHeight = e8.svgHeight - this.lgRect.height, e8.gridWidth = e8.svgWidth, e8.translateY = this.lgRect.height + r7 + 10, e8.translateX = o8 + (e8.svgWidth - e8.gridWidth) / 2;
            break;
          case "left":
            e8.gridWidth = e8.svgWidth - this.lgRect.width - a4, e8.gridHeight = "auto" !== i8.chart.height ? e8.svgHeight : e8.gridWidth, e8.translateY = r7, e8.translateX = o8 + this.lgRect.width + a4;
            break;
          case "right":
            e8.gridWidth = e8.svgWidth - this.lgRect.width - a4 - 5, e8.gridHeight = "auto" !== i8.chart.height ? e8.svgHeight : e8.gridWidth, e8.translateY = r7, e8.translateX = o8 + 10;
            break;
          default:
            throw new Error("Legend position not supported");
        }
      } }, { key: "conditionalChecksForAxisCoords", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = a4.globals.hasXaxisGroups ? 2 : 1, r7 = i8.height + t6.height + e8.height, o8 = a4.globals.isMultiLineX ? 1.2 : a4.globals.LINE_HEIGHT_RATIO, n7 = a4.globals.rotateXLabels ? 22 : 10, l4 = a4.globals.rotateXLabels && "bottom" === a4.config.legend.position ? 10 : 0;
        this.xAxisHeight = r7 * o8 + s5 * n7 + l4, this.xAxisWidth = t6.width, this.xAxisHeight - e8.height > a4.config.xaxis.labels.maxHeight && (this.xAxisHeight = a4.config.xaxis.labels.maxHeight), a4.config.xaxis.labels.minHeight && this.xAxisHeight < a4.config.xaxis.labels.minHeight && (this.xAxisHeight = a4.config.xaxis.labels.minHeight), a4.config.xaxis.floating && (this.xAxisHeight = 0);
        var h4 = 0, c5 = 0;
        a4.config.yaxis.forEach(function(t7) {
          h4 += t7.labels.minWidth, c5 += t7.labels.maxWidth;
        }), this.yAxisWidth < h4 && (this.yAxisWidth = h4), this.yAxisWidth > c5 && (this.yAxisWidth = c5);
      } }]), t5;
    }();
    var dt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.lgCtx = e8;
      }
      return s4(t5, [{ key: "getLegendStyles", value: function() {
        var t6, e8, i8, a4 = document.createElement("style");
        a4.setAttribute("type", "text/css");
        var s5 = (null === (t6 = this.lgCtx.ctx) || void 0 === t6 || null === (e8 = t6.opts) || void 0 === e8 || null === (i8 = e8.chart) || void 0 === i8 ? void 0 : i8.nonce) || this.w.config.chart.nonce;
        s5 && a4.setAttribute("nonce", s5);
        var r7 = document.createTextNode("\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }");
        return a4.appendChild(r7), a4;
      } }, { key: "getLegendDimensions", value: function() {
        var t6 = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e8 = t6.width;
        return { clwh: t6.height, clww: e8 };
      } }, { key: "appendToForeignObject", value: function() {
        this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
      } }, { key: "toggleDataSeries", value: function(t6, e8) {
        var i8 = this, a4 = this.w;
        if (a4.globals.axisCharts || "radialBar" === a4.config.chart.type) {
          a4.globals.resized = true;
          var s5 = null, r7 = null;
          if (a4.globals.risingSeries = [], a4.globals.axisCharts ? (s5 = a4.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t6, "']")), r7 = parseInt(s5.getAttribute("data:realIndex"), 10)) : (s5 = a4.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t6 + 1, "']")), r7 = parseInt(s5.getAttribute("rel"), 10) - 1), e8) [{ cs: a4.globals.collapsedSeries, csi: a4.globals.collapsedSeriesIndices }, { cs: a4.globals.ancillaryCollapsedSeries, csi: a4.globals.ancillaryCollapsedSeriesIndices }].forEach(function(t7) {
            i8.riseCollapsedSeries(t7.cs, t7.csi, r7);
          });
          else this.hideSeries({ seriesEl: s5, realIndex: r7 });
        } else {
          var o8 = a4.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t6 + 1, "'] path")), n7 = a4.config.chart.type;
          if ("pie" === n7 || "polarArea" === n7 || "donut" === n7) {
            var l4 = a4.config.plotOptions.pie.donut.labels;
            new k2(this.lgCtx.ctx).pathMouseDown(o8.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o8.members[0].node, l4);
          }
          o8.fire("click");
        }
      } }, { key: "getSeriesAfterCollapsing", value: function(t6) {
        var e8 = t6.realIndex, i8 = this.w, a4 = i8.globals, s5 = m2.clone(i8.config.series);
        if (a4.axisCharts) {
          var r7 = i8.config.yaxis[a4.seriesYAxisReverseMap[e8]], o8 = { index: e8, data: s5[e8].data.slice(), type: s5[e8].type || i8.config.chart.type };
          if (r7 && r7.show && r7.showAlways) a4.ancillaryCollapsedSeriesIndices.indexOf(e8) < 0 && (a4.ancillaryCollapsedSeries.push(o8), a4.ancillaryCollapsedSeriesIndices.push(e8));
          else if (a4.collapsedSeriesIndices.indexOf(e8) < 0) {
            a4.collapsedSeries.push(o8), a4.collapsedSeriesIndices.push(e8);
            var n7 = a4.risingSeries.indexOf(e8);
            a4.risingSeries.splice(n7, 1);
          }
        } else a4.collapsedSeries.push({ index: e8, data: s5[e8] }), a4.collapsedSeriesIndices.push(e8);
        return a4.allSeriesCollapsed = a4.collapsedSeries.length + a4.ancillaryCollapsedSeries.length === i8.config.series.length, this._getSeriesBasedOnCollapsedState(s5);
      } }, { key: "hideSeries", value: function(t6) {
        for (var e8 = t6.seriesEl, i8 = t6.realIndex, a4 = this.w, s5 = this.getSeriesAfterCollapsing({ realIndex: i8 }), r7 = e8.childNodes, o8 = 0; o8 < r7.length; o8++) r7[o8].classList.contains("apexcharts-series-markers-wrap") && (r7[o8].classList.contains("apexcharts-hide") ? r7[o8].classList.remove("apexcharts-hide") : r7[o8].classList.add("apexcharts-hide"));
        this.lgCtx.ctx.updateHelpers._updateSeries(s5, a4.config.chart.animations.dynamicAnimation.enabled);
      } }, { key: "riseCollapsedSeries", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = m2.clone(a4.config.series);
        if (t6.length > 0) {
          for (var r7 = 0; r7 < t6.length; r7++) t6[r7].index === i8 && (a4.globals.axisCharts ? s5[i8].data = t6[r7].data.slice() : s5[i8] = t6[r7].data, s5[i8].hidden = false, t6.splice(r7, 1), e8.splice(r7, 1), a4.globals.risingSeries.push(i8));
          s5 = this._getSeriesBasedOnCollapsedState(s5), this.lgCtx.ctx.updateHelpers._updateSeries(s5, a4.config.chart.animations.dynamicAnimation.enabled);
        }
      } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t6) {
        var e8 = this.w, i8 = 0;
        return e8.globals.axisCharts ? t6.forEach(function(a4, s5) {
          e8.globals.collapsedSeriesIndices.indexOf(s5) < 0 && e8.globals.ancillaryCollapsedSeriesIndices.indexOf(s5) < 0 || (t6[s5].data = [], i8++);
        }) : t6.forEach(function(a4, s5) {
          !e8.globals.collapsedSeriesIndices.indexOf(s5) < 0 && (t6[s5] = 0, i8++);
        }), e8.globals.allSeriesCollapsed = i8 === t6.length, t6;
      } }]), t5;
    }();
    var gt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new dt(this);
      }
      return s4(t5, [{ key: "init", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = t6.config, a4 = i8.legend.showForSingleSeries && 1 === e8.series.length || this.isBarsDistributed || e8.series.length > 1;
        if (this.legendHelpers.appendToForeignObject(), (a4 || !e8.axisCharts) && i8.legend.show) {
          for (; e8.dom.elLegendWrap.firstChild; ) e8.dom.elLegendWrap.removeChild(e8.dom.elLegendWrap.firstChild);
          this.drawLegends(), "bottom" === i8.legend.position || "top" === i8.legend.position ? this.legendAlignHorizontal() : "right" !== i8.legend.position && "left" !== i8.legend.position || this.legendAlignVertical();
        }
      } }, { key: "createLegendMarker", value: function(t6) {
        var e8 = t6.i, i8 = t6.fillcolor, a4 = this.w, s5 = document.createElement("span");
        s5.classList.add("apexcharts-legend-marker");
        var r7 = a4.config.legend.markers.shape || a4.config.markers.shape, o8 = r7;
        Array.isArray(r7) && (o8 = r7[e8]);
        var n7 = Array.isArray(a4.config.legend.markers.size) ? parseFloat(a4.config.legend.markers.size[e8]) : parseFloat(a4.config.legend.markers.size), l4 = Array.isArray(a4.config.legend.markers.offsetX) ? parseFloat(a4.config.legend.markers.offsetX[e8]) : parseFloat(a4.config.legend.markers.offsetX), h4 = Array.isArray(a4.config.legend.markers.offsetY) ? parseFloat(a4.config.legend.markers.offsetY[e8]) : parseFloat(a4.config.legend.markers.offsetY), c5 = Array.isArray(a4.config.legend.markers.strokeWidth) ? parseFloat(a4.config.legend.markers.strokeWidth[e8]) : parseFloat(a4.config.legend.markers.strokeWidth), d4 = s5.style;
        if (d4.height = 2 * (n7 + c5) + "px", d4.width = 2 * (n7 + c5) + "px", d4.left = l4 + "px", d4.top = h4 + "px", a4.config.legend.markers.customHTML) d4.background = "transparent", d4.color = i8[e8], Array.isArray(a4.config.legend.markers.customHTML) ? a4.config.legend.markers.customHTML[e8] && (s5.innerHTML = a4.config.legend.markers.customHTML[e8]()) : s5.innerHTML = a4.config.legend.markers.customHTML();
        else {
          var u4 = new W(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(o8), seriesIndex: e8, strokeWidth: c5, size: n7 }), f4 = SVG(s5).size("100%", "100%"), p4 = new k2(this.ctx).drawMarker(0, 0, g2(g2({}, u4), {}, { pointFillColor: Array.isArray(i8) ? i8[e8] : u4.pointFillColor, shape: o8 }));
          SVG.select(".apexcharts-legend-marker.apexcharts-marker").members.forEach(function(t7) {
            t7.node.classList.contains("apexcharts-marker-triangle") ? t7.node.style.transform = "translate(50%, 45%)" : t7.node.style.transform = "translate(50%, 50%)";
          }), f4.add(p4);
        }
        return s5;
      } }, { key: "drawLegends", value: function() {
        var t6 = this, e8 = this.w, i8 = e8.config.legend.fontFamily, a4 = e8.globals.seriesNames, s5 = e8.config.legend.markers.fillColors ? e8.config.legend.markers.fillColors.slice() : e8.globals.colors.slice();
        if ("heatmap" === e8.config.chart.type) {
          var r7 = e8.config.plotOptions.heatmap.colorScale.ranges;
          a4 = r7.map(function(t7) {
            return t7.name ? t7.name : t7.from + " - " + t7.to;
          }), s5 = r7.map(function(t7) {
            return t7.color;
          });
        } else this.isBarsDistributed && (a4 = e8.globals.labels.slice());
        e8.config.legend.customLegendItems.length && (a4 = e8.config.legend.customLegendItems);
        for (var o8 = e8.globals.legendFormatter, n7 = e8.config.legend.inverseOrder, l4 = n7 ? a4.length - 1 : 0; n7 ? l4 >= 0 : l4 <= a4.length - 1; n7 ? l4-- : l4++) {
          var h4, c5 = o8(a4[l4], { seriesIndex: l4, w: e8 }), d4 = false, g3 = false;
          if (e8.globals.collapsedSeries.length > 0) for (var u4 = 0; u4 < e8.globals.collapsedSeries.length; u4++) e8.globals.collapsedSeries[u4].index === l4 && (d4 = true);
          if (e8.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var f4 = 0; f4 < e8.globals.ancillaryCollapsedSeriesIndices.length; f4++) e8.globals.ancillaryCollapsedSeriesIndices[f4] === l4 && (g3 = true);
          var p4 = this.createLegendMarker({ i: l4, fillcolor: s5 });
          k2.setAttrs(p4, { rel: l4 + 1, "data:collapsed": d4 || g3 }), (d4 || g3) && p4.classList.add("apexcharts-inactive-legend");
          var x3 = document.createElement("div"), b4 = document.createElement("span");
          b4.classList.add("apexcharts-legend-text"), b4.innerHTML = Array.isArray(c5) ? c5.join(" ") : c5;
          var v3 = e8.config.legend.labels.useSeriesColors ? e8.globals.colors[l4] : Array.isArray(e8.config.legend.labels.colors) ? null === (h4 = e8.config.legend.labels.colors) || void 0 === h4 ? void 0 : h4[l4] : e8.config.legend.labels.colors;
          v3 || (v3 = e8.config.chart.foreColor), b4.style.color = v3, b4.style.fontSize = parseFloat(e8.config.legend.fontSize) + "px", b4.style.fontWeight = e8.config.legend.fontWeight, b4.style.fontFamily = i8 || e8.config.chart.fontFamily, k2.setAttrs(b4, { rel: l4 + 1, i: l4, "data:default-text": encodeURIComponent(c5), "data:collapsed": d4 || g3 }), x3.appendChild(p4), x3.appendChild(b4);
          var y4 = new A2(this.ctx);
          if (!e8.config.legend.showForZeroSeries) 0 === y4.getSeriesTotalByIndex(l4) && y4.seriesHaveSameValues(l4) && !y4.isSeriesNull(l4) && -1 === e8.globals.collapsedSeriesIndices.indexOf(l4) && -1 === e8.globals.ancillaryCollapsedSeriesIndices.indexOf(l4) && x3.classList.add("apexcharts-hidden-zero-series");
          e8.config.legend.showForNullSeries || y4.isSeriesNull(l4) && -1 === e8.globals.collapsedSeriesIndices.indexOf(l4) && -1 === e8.globals.ancillaryCollapsedSeriesIndices.indexOf(l4) && x3.classList.add("apexcharts-hidden-null-series"), e8.globals.dom.elLegendWrap.appendChild(x3), e8.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e8.config.legend.horizontalAlign)), e8.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e8.config.legend.position), x3.classList.add("apexcharts-legend-series"), x3.style.margin = "".concat(e8.config.legend.itemMargin.vertical, "px ").concat(e8.config.legend.itemMargin.horizontal, "px"), e8.globals.dom.elLegendWrap.style.width = e8.config.legend.width ? e8.config.legend.width + "px" : "", e8.globals.dom.elLegendWrap.style.height = e8.config.legend.height ? e8.config.legend.height + "px" : "", k2.setAttrs(x3, { rel: l4 + 1, seriesName: m2.escapeString(a4[l4]), "data:collapsed": d4 || g3 }), (d4 || g3) && x3.classList.add("apexcharts-inactive-legend"), e8.config.legend.onItemClick.toggleDataSeries || x3.classList.add("apexcharts-no-click");
        }
        e8.globals.dom.elWrap.addEventListener("click", t6.onLegendClick, true), e8.config.legend.onItemHover.highlightDataSeries && 0 === e8.config.legend.customLegendItems.length && (e8.globals.dom.elWrap.addEventListener("mousemove", t6.onLegendHovered, true), e8.globals.dom.elWrap.addEventListener("mouseout", t6.onLegendHovered, true));
      } }, { key: "setLegendWrapXY", value: function(t6, e8) {
        var i8 = this.w, a4 = i8.globals.dom.elLegendWrap, s5 = a4.clientHeight, r7 = 0, o8 = 0;
        if ("bottom" === i8.config.legend.position) o8 = i8.globals.svgHeight - Math.min(s5, i8.globals.svgHeight / 2) - 5;
        else if ("top" === i8.config.legend.position) {
          var n7 = new ct(this.ctx), l4 = n7.dimHelpers.getTitleSubtitleCoords("title").height, h4 = n7.dimHelpers.getTitleSubtitleCoords("subtitle").height;
          o8 = (l4 > 0 ? l4 - 10 : 0) + (h4 > 0 ? h4 - 10 : 0);
        }
        a4.style.position = "absolute", r7 = r7 + t6 + i8.config.legend.offsetX, o8 = o8 + e8 + i8.config.legend.offsetY, a4.style.left = r7 + "px", a4.style.top = o8 + "px", "right" === i8.config.legend.position && (a4.style.left = "auto", a4.style.right = 25 + i8.config.legend.offsetX + "px");
        ["width", "height"].forEach(function(t7) {
          a4.style[t7] && (a4.style[t7] = parseInt(i8.config.legend[t7], 10) + "px");
        });
      } }, { key: "legendAlignHorizontal", value: function() {
        var t6 = this.w;
        t6.globals.dom.elLegendWrap.style.right = 0;
        var e8 = new ct(this.ctx), i8 = e8.dimHelpers.getTitleSubtitleCoords("title"), a4 = e8.dimHelpers.getTitleSubtitleCoords("subtitle"), s5 = 0;
        "top" === t6.config.legend.position && (s5 = i8.height + a4.height + t6.config.title.margin + t6.config.subtitle.margin - 10), this.setLegendWrapXY(20, s5);
      } }, { key: "legendAlignVertical", value: function() {
        var t6 = this.w, e8 = this.legendHelpers.getLegendDimensions(), i8 = 0;
        "left" === t6.config.legend.position && (i8 = 20), "right" === t6.config.legend.position && (i8 = t6.globals.svgWidth - e8.clww - 10), this.setLegendWrapXY(i8, 20);
      } }, { key: "onLegendHovered", value: function(t6) {
        var e8 = this.w, i8 = t6.target.classList.contains("apexcharts-legend-series") || t6.target.classList.contains("apexcharts-legend-text") || t6.target.classList.contains("apexcharts-legend-marker");
        if ("heatmap" === e8.config.chart.type || this.isBarsDistributed) {
          if (i8) {
            var a4 = parseInt(t6.target.getAttribute("rel"), 10) - 1;
            this.ctx.events.fireEvent("legendHover", [this.ctx, a4, this.w]), new V2(this.ctx).highlightRangeInSeries(t6, t6.target);
          }
        } else !t6.target.classList.contains("apexcharts-inactive-legend") && i8 && new V2(this.ctx).toggleSeriesOnHover(t6, t6.target);
      } }, { key: "onLegendClick", value: function(t6) {
        var e8 = this.w;
        if (!e8.config.legend.customLegendItems.length && (t6.target.classList.contains("apexcharts-legend-series") || t6.target.classList.contains("apexcharts-legend-text") || t6.target.classList.contains("apexcharts-legend-marker"))) {
          var i8 = parseInt(t6.target.getAttribute("rel"), 10) - 1, a4 = "true" === t6.target.getAttribute("data:collapsed"), s5 = this.w.config.chart.events.legendClick;
          "function" == typeof s5 && s5(this.ctx, i8, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i8, this.w]);
          var r7 = this.w.config.legend.markers.onClick;
          "function" == typeof r7 && t6.target.classList.contains("apexcharts-legend-marker") && (r7(this.ctx, i8, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i8, this.w])), "treemap" !== e8.config.chart.type && "heatmap" !== e8.config.chart.type && !this.isBarsDistributed && e8.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i8, a4);
        }
      } }]), t5;
    }();
    var ut = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
        var a4 = this.w;
        this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = a4.globals.minX, this.maxX = a4.globals.maxX;
      }
      return s4(t5, [{ key: "createToolbar", value: function() {
        var t6 = this, e8 = this.w, i8 = function() {
          return document.createElement("div");
        }, a4 = i8();
        if (a4.setAttribute("class", "apexcharts-toolbar"), a4.style.top = e8.config.chart.toolbar.offsetY + "px", a4.style.right = 3 - e8.config.chart.toolbar.offsetX + "px", e8.globals.dom.elWrap.appendChild(a4), this.elZoom = i8(), this.elZoomIn = i8(), this.elZoomOut = i8(), this.elPan = i8(), this.elSelection = i8(), this.elZoomReset = i8(), this.elMenuIcon = i8(), this.elMenu = i8(), this.elCustomIcons = [], this.t = e8.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s5 = 0; s5 < this.t.customIcons.length; s5++) this.elCustomIcons.push(i8());
        var r7 = [], o8 = function(i9, a5, s6) {
          var o9 = i9.toLowerCase();
          t6.t[o9] && e8.config.chart.zoom.enabled && r7.push({ el: a5, icon: "string" == typeof t6.t[o9] ? t6.t[o9] : s6, title: t6.localeValues[i9], class: "apexcharts-".concat(o9, "-icon") });
        };
        o8("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), o8("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
        var n7 = function(i9) {
          t6.t[i9] && e8.config.chart[i9].enabled && r7.push({ el: "zoom" === i9 ? t6.elZoom : t6.elSelection, icon: "string" == typeof t6.t[i9] ? t6.t[i9] : "zoom" === i9 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title: t6.localeValues["zoom" === i9 ? "selectionZoom" : "selection"], class: e8.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i9, "-icon") });
        };
        n7("zoom"), n7("selection"), this.t.pan && e8.config.chart.zoom.enabled && r7.push({ el: this.elPan, icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title: this.localeValues.pan, class: e8.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o8("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r7.push({ el: this.elMenuIcon, icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
        for (var l4 = 0; l4 < this.elCustomIcons.length; l4++) r7.push({ el: this.elCustomIcons[l4], icon: this.t.customIcons[l4].icon, title: this.t.customIcons[l4].title, index: this.t.customIcons[l4].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l4].class });
        r7.forEach(function(t7, e9) {
          t7.index && m2.moveIndexInArray(r7, e9, t7.index);
        });
        for (var h4 = 0; h4 < r7.length; h4++) k2.setAttrs(r7[h4].el, { class: r7[h4].class, title: r7[h4].title }), r7[h4].el.innerHTML = r7[h4].icon, a4.appendChild(r7[h4].el);
        this._createHamburgerMenu(a4), e8.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e8.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e8.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
      } }, { key: "_createHamburgerMenu", value: function(t6) {
        this.elMenuItems = [], t6.appendChild(this.elMenu), k2.setAttrs(this.elMenu, { class: "apexcharts-menu" });
        for (var e8 = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i8 = 0; i8 < e8.length; i8++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i8].innerHTML = e8[i8].title, k2.setAttrs(this.elMenuItems[i8], { class: "apexcharts-menu-item ".concat(e8[i8].name), title: e8[i8].title }), this.elMenu.appendChild(this.elMenuItems[i8]);
      } }, { key: "addToolbarEventListeners", value: function() {
        var t6 = this;
        this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(e9) {
          e9.classList.contains("exportSVG") ? e9.addEventListener("click", t6.handleDownload.bind(t6, "svg")) : e9.classList.contains("exportPNG") ? e9.addEventListener("click", t6.handleDownload.bind(t6, "png")) : e9.classList.contains("exportCSV") && e9.addEventListener("click", t6.handleDownload.bind(t6, "csv"));
        });
        for (var e8 = 0; e8 < this.t.customIcons.length; e8++) this.elCustomIcons[e8].addEventListener("click", this.t.customIcons[e8].click.bind(this, this.ctx, this.ctx.w));
      } }, { key: "toggleZoomSelection", value: function(t6) {
        this.ctx.getSyncedCharts().forEach(function(e8) {
          e8.ctx.toolbar.toggleOtherControls();
          var i8 = "selection" === t6 ? e8.ctx.toolbar.elSelection : e8.ctx.toolbar.elZoom, a4 = "selection" === t6 ? "selectionEnabled" : "zoomEnabled";
          e8.w.globals[a4] = !e8.w.globals[a4], i8.classList.contains(e8.ctx.toolbar.selectedClass) ? i8.classList.remove(e8.ctx.toolbar.selectedClass) : i8.classList.add(e8.ctx.toolbar.selectedClass);
        });
      } }, { key: "getToolbarIconsReference", value: function() {
        var t6 = this.w;
        this.elZoom || (this.elZoom = t6.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t6.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t6.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
      } }, { key: "enableZoomPanFromToolbar", value: function(t6) {
        this.toggleOtherControls(), "pan" === t6 ? this.w.globals.panEnabled = true : this.w.globals.zoomEnabled = true;
        var e8 = "pan" === t6 ? this.elPan : this.elZoom, i8 = "pan" === t6 ? this.elZoom : this.elPan;
        e8 && e8.classList.add(this.selectedClass), i8 && i8.classList.remove(this.selectedClass);
      } }, { key: "togglePanning", value: function() {
        this.ctx.getSyncedCharts().forEach(function(t6) {
          t6.ctx.toolbar.toggleOtherControls(), t6.w.globals.panEnabled = !t6.w.globals.panEnabled, t6.ctx.toolbar.elPan.classList.contains(t6.ctx.toolbar.selectedClass) ? t6.ctx.toolbar.elPan.classList.remove(t6.ctx.toolbar.selectedClass) : t6.ctx.toolbar.elPan.classList.add(t6.ctx.toolbar.selectedClass);
        });
      } }, { key: "toggleOtherControls", value: function() {
        var t6 = this, e8 = this.w;
        e8.globals.panEnabled = false, e8.globals.zoomEnabled = false, e8.globals.selectionEnabled = false, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(e9) {
          e9 && e9.classList.remove(t6.selectedClass);
        });
      } }, { key: "handleZoomIn", value: function() {
        var t6 = this.w;
        t6.globals.isRangeBar && (this.minX = t6.globals.minY, this.maxX = t6.globals.maxY);
        var e8 = (this.minX + this.maxX) / 2, i8 = (this.minX + e8) / 2, a4 = (this.maxX + e8) / 2, s5 = this._getNewMinXMaxX(i8, a4);
        t6.globals.disableZoomIn || this.zoomUpdateOptions(s5.minX, s5.maxX);
      } }, { key: "handleZoomOut", value: function() {
        var t6 = this.w;
        if (t6.globals.isRangeBar && (this.minX = t6.globals.minY, this.maxX = t6.globals.maxY), !("datetime" === t6.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) {
          var e8 = (this.minX + this.maxX) / 2, i8 = this.minX - (e8 - this.minX), a4 = this.maxX - (e8 - this.maxX), s5 = this._getNewMinXMaxX(i8, a4);
          t6.globals.disableZoomOut || this.zoomUpdateOptions(s5.minX, s5.maxX);
        }
      } }, { key: "_getNewMinXMaxX", value: function(t6, e8) {
        var i8 = this.w.config.xaxis.convertedCatToNumeric;
        return { minX: i8 ? Math.floor(t6) : t6, maxX: i8 ? Math.floor(e8) : e8 };
      } }, { key: "zoomUpdateOptions", value: function(t6, e8) {
        var i8 = this.w;
        if (void 0 !== t6 || void 0 !== e8) {
          if (!(i8.config.xaxis.convertedCatToNumeric && (t6 < 1 && (t6 = 1, e8 = i8.globals.dataPoints), e8 - t6 < 2))) {
            var a4 = { min: t6, max: e8 }, s5 = this.getBeforeZoomRange(a4);
            s5 && (a4 = s5.xaxis);
            var r7 = { xaxis: a4 }, o8 = m2.clone(i8.globals.initialConfig.yaxis);
            i8.config.chart.group || (r7.yaxis = o8), this.w.globals.zoomed = true, this.ctx.updateHelpers._updateOptions(r7, false, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a4, o8);
          }
        } else this.handleZoomReset();
      } }, { key: "zoomCallback", value: function(t6, e8) {
        "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, { xaxis: t6, yaxis: e8 });
      } }, { key: "getBeforeZoomRange", value: function(t6, e8) {
        var i8 = null;
        return "function" == typeof this.ev.beforeZoom && (i8 = this.ev.beforeZoom(this, { xaxis: t6, yaxis: e8 })), i8;
      } }, { key: "toggleMenu", value: function() {
        var t6 = this;
        window.setTimeout(function() {
          t6.elMenu.classList.contains("apexcharts-menu-open") ? t6.elMenu.classList.remove("apexcharts-menu-open") : t6.elMenu.classList.add("apexcharts-menu-open");
        }, 0);
      } }, { key: "handleDownload", value: function(t6) {
        var e8 = this.w, i8 = new U(this.ctx);
        switch (t6) {
          case "svg":
            i8.exportToSVG(this.ctx);
            break;
          case "png":
            i8.exportToPng(this.ctx);
            break;
          case "csv":
            i8.exportToCSV({ series: e8.config.series, columnDelimiter: e8.config.chart.toolbar.export.csv.columnDelimiter });
        }
      } }, { key: "handleZoomReset", value: function(t6) {
        this.ctx.getSyncedCharts().forEach(function(t7) {
          var e8 = t7.w;
          if (e8.globals.lastXAxis.min = e8.globals.initialConfig.xaxis.min, e8.globals.lastXAxis.max = e8.globals.initialConfig.xaxis.max, t7.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e8.config.chart.events.beforeResetZoom) {
            var i8 = e8.config.chart.events.beforeResetZoom(t7, e8);
            i8 && t7.updateHelpers.revertDefaultAxisMinMax(i8);
          }
          "function" == typeof e8.config.chart.events.zoomed && t7.ctx.toolbar.zoomCallback({ min: e8.config.xaxis.min, max: e8.config.xaxis.max }), e8.globals.zoomed = false;
          var a4 = t7.ctx.series.emptyCollapsedSeries(m2.clone(e8.globals.initialSeries));
          t7.updateHelpers._updateSeries(a4, e8.config.chart.animations.dynamicAnimation.enabled);
        });
      } }, { key: "destroy", value: function() {
        this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
      } }]), t5;
    }();
    var ft = function(t5) {
      h3(a4, ut);
      var e8 = o7(a4);
      function a4(t6) {
        var s5;
        return i7(this, a4), (s5 = e8.call(this, t6)).ctx = t6, s5.w = t6.w, s5.dragged = false, s5.graphics = new k2(s5.ctx), s5.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], s5.clientX = 0, s5.clientY = 0, s5.startX = 0, s5.endX = 0, s5.dragX = 0, s5.startY = 0, s5.endY = 0, s5.dragY = 0, s5.moveDirection = "none", s5.debounceTimer = null, s5.debounceDelay = 100, s5.wheelDelay = 400, s5;
      }
      return s4(a4, [{ key: "init", value: function(t6) {
        var e9 = this, i8 = t6.xyRatios, a5 = this.w, s5 = this;
        this.xyRatios = i8, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a5.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a5.globals.dom.elGraphical.add(this.zoomRect), a5.globals.dom.elGraphical.add(this.selectionRect), "x" === a5.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: a5.globals.gridWidth, maxY: a5.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a5.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: a5.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a5.globals.dom.baseEl.querySelector("".concat(a5.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(t7) {
          e9.hoverArea.addEventListener(t7, s5.svgMouseEvents.bind(s5, i8), { capture: false, passive: true });
        }), a5.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", s5.mouseWheelEvent.bind(s5), { capture: false, passive: false });
      } }, { key: "destroy", value: function() {
        this.slDraggableRect && (this.slDraggableRect.draggable(false), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
      } }, { key: "svgMouseEvents", value: function(t6, e9) {
        var i8 = this.w, a5 = this, s5 = this.ctx.toolbar, r7 = i8.globals.zoomEnabled ? i8.config.chart.zoom.type : i8.config.chart.selection.type, o8 = i8.config.chart.toolbar.autoSelected;
        if (e9.shiftKey ? (this.shiftWasPressed = true, s5.enableZoomPanFromToolbar("pan" === o8 ? "zoom" : "pan")) : this.shiftWasPressed && (s5.enableZoomPanFromToolbar(o8), this.shiftWasPressed = false), e9.target) {
          var n7, l4 = e9.target.classList;
          if (e9.target.parentNode && null !== e9.target.parentNode && (n7 = e9.target.parentNode.classList), !(l4.contains("apexcharts-selection-rect") || l4.contains("apexcharts-legend-marker") || l4.contains("apexcharts-legend-text") || n7 && n7.contains("apexcharts-toolbar"))) {
            if (a5.clientX = "touchmove" === e9.type || "touchstart" === e9.type ? e9.touches[0].clientX : "touchend" === e9.type ? e9.changedTouches[0].clientX : e9.clientX, a5.clientY = "touchmove" === e9.type || "touchstart" === e9.type ? e9.touches[0].clientY : "touchend" === e9.type ? e9.changedTouches[0].clientY : e9.clientY, "mousedown" === e9.type && 1 === e9.which) {
              var h4 = a5.gridRect.getBoundingClientRect();
              a5.startX = a5.clientX - h4.left, a5.startY = a5.clientY - h4.top, a5.dragged = false, a5.w.globals.mousedown = true;
            }
            if (("mousemove" === e9.type && 1 === e9.which || "touchmove" === e9.type) && (a5.dragged = true, i8.globals.panEnabled ? (i8.globals.selection = null, a5.w.globals.mousedown && a5.panDragging({ context: a5, zoomtype: r7, xyRatios: t6 })) : (a5.w.globals.mousedown && i8.globals.zoomEnabled || a5.w.globals.mousedown && i8.globals.selectionEnabled) && (a5.selection = a5.selectionDrawing({ context: a5, zoomtype: r7 }))), "mouseup" === e9.type || "touchend" === e9.type || "mouseleave" === e9.type) {
              var c5, d4 = null === (c5 = a5.gridRect) || void 0 === c5 ? void 0 : c5.getBoundingClientRect();
              d4 && a5.w.globals.mousedown && (a5.endX = a5.clientX - d4.left, a5.endY = a5.clientY - d4.top, a5.dragX = Math.abs(a5.endX - a5.startX), a5.dragY = Math.abs(a5.endY - a5.startY), (i8.globals.zoomEnabled || i8.globals.selectionEnabled) && a5.selectionDrawn({ context: a5, zoomtype: r7 }), i8.globals.panEnabled && i8.config.xaxis.convertedCatToNumeric && a5.delayedPanScrolled()), i8.globals.zoomEnabled && a5.hideSelectionRect(this.selectionRect), a5.dragged = false, a5.w.globals.mousedown = false;
            }
            this.makeSelectionRectDraggable();
          }
        }
      } }, { key: "mouseWheelEvent", value: function(t6) {
        var e9 = this, i8 = this.w;
        t6.preventDefault();
        var a5 = Date.now();
        a5 - i8.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t6), i8.globals.lastWheelExecution = a5), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(function() {
          a5 - i8.globals.lastWheelExecution > e9.wheelDelay && (e9.executeMouseWheelZoom(t6), i8.globals.lastWheelExecution = a5);
        }, this.debounceDelay);
      } }, { key: "executeMouseWheelZoom", value: function(t6) {
        var e9, i8 = this.w;
        this.minX = i8.globals.isRangeBar ? i8.globals.minY : i8.globals.minX, this.maxX = i8.globals.isRangeBar ? i8.globals.maxY : i8.globals.maxX;
        var a5 = null === (e9 = this.gridRect) || void 0 === e9 ? void 0 : e9.getBoundingClientRect();
        if (a5) {
          var s5, r7, o8, n7 = (t6.clientX - a5.left) / a5.width, l4 = this.minX, h4 = this.maxX, c5 = h4 - l4;
          if (t6.deltaY < 0) {
            var d4 = l4 + n7 * c5;
            r7 = d4 - (s5 = 0.5 * c5) / 2, o8 = d4 + s5 / 2;
          } else r7 = l4 - (s5 = 1.5 * c5) / 2, o8 = h4 + s5 / 2;
          if (!i8.globals.isRangeBar) {
            r7 = Math.max(r7, i8.globals.initialMinX), o8 = Math.min(o8, i8.globals.initialMaxX);
            var g3 = 0.01 * (i8.globals.initialMaxX - i8.globals.initialMinX);
            if (o8 - r7 < g3) {
              var u4 = (r7 + o8) / 2;
              r7 = u4 - g3 / 2, o8 = u4 + g3 / 2;
            }
          }
          var f4 = this._getNewMinXMaxX(r7, o8);
          isNaN(f4.minX) || isNaN(f4.maxX) || this.zoomUpdateOptions(f4.minX, f4.maxX);
        }
      } }, { key: "makeSelectionRectDraggable", value: function() {
        var t6 = this.w;
        if (this.selectionRect) {
          var e9 = this.selectionRect.node.getBoundingClientRect();
          e9.width > 0 && e9.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: t6.globals.gridWidth, maxY: t6.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
        }
      } }, { key: "preselectedSelection", value: function() {
        var t6 = this.w, e9 = this.xyRatios;
        if (!t6.globals.zoomEnabled) {
          if (void 0 !== t6.globals.selection && null !== t6.globals.selection) this.drawSelectionRect(t6.globals.selection);
          else if (void 0 !== t6.config.chart.selection.xaxis.min && void 0 !== t6.config.chart.selection.xaxis.max) {
            var i8 = (t6.config.chart.selection.xaxis.min - t6.globals.minX) / e9.xRatio, a5 = t6.globals.gridWidth - (t6.globals.maxX - t6.config.chart.selection.xaxis.max) / e9.xRatio - i8;
            t6.globals.isRangeBar && (i8 = (t6.config.chart.selection.xaxis.min - t6.globals.yAxisScale[0].niceMin) / e9.invertedYRatio, a5 = (t6.config.chart.selection.xaxis.max - t6.config.chart.selection.xaxis.min) / e9.invertedYRatio);
            var s5 = { x: i8, y: 0, width: a5, height: t6.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: true };
            this.drawSelectionRect(s5), this.makeSelectionRectDraggable(), "function" == typeof t6.config.chart.events.selection && t6.config.chart.events.selection(this.ctx, { xaxis: { min: t6.config.chart.selection.xaxis.min, max: t6.config.chart.selection.xaxis.max }, yaxis: {} });
          }
        }
      } }, { key: "drawSelectionRect", value: function(t6) {
        var e9 = t6.x, i8 = t6.y, a5 = t6.width, s5 = t6.height, r7 = t6.translateX, o8 = void 0 === r7 ? 0 : r7, n7 = t6.translateY, l4 = void 0 === n7 ? 0 : n7, h4 = this.w, c5 = this.zoomRect, d4 = this.selectionRect;
        if (this.dragged || null !== h4.globals.selection) {
          var g3 = { transform: "translate(" + o8 + ", " + l4 + ")" };
          h4.globals.zoomEnabled && this.dragged && (a5 < 0 && (a5 = 1), c5.attr({ x: e9, y: i8, width: a5, height: s5, fill: h4.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": h4.config.chart.zoom.zoomedArea.fill.opacity, stroke: h4.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": h4.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": h4.config.chart.zoom.zoomedArea.stroke.opacity }), k2.setAttrs(c5.node, g3)), h4.globals.selectionEnabled && (d4.attr({ x: e9, y: i8, width: a5 > 0 ? a5 : 0, height: s5 > 0 ? s5 : 0, fill: h4.config.chart.selection.fill.color, "fill-opacity": h4.config.chart.selection.fill.opacity, stroke: h4.config.chart.selection.stroke.color, "stroke-width": h4.config.chart.selection.stroke.width, "stroke-dasharray": h4.config.chart.selection.stroke.dashArray, "stroke-opacity": h4.config.chart.selection.stroke.opacity }), k2.setAttrs(d4.node, g3));
        }
      } }, { key: "hideSelectionRect", value: function(t6) {
        t6 && t6.attr({ x: 0, y: 0, width: 0, height: 0 });
      } }, { key: "selectionDrawing", value: function(t6) {
        var e9 = t6.context, i8 = t6.zoomtype, a5 = this.w, s5 = e9, r7 = this.gridRect.getBoundingClientRect(), o8 = s5.startX - 1, n7 = s5.startY, l4 = false, h4 = false, c5 = s5.clientX - r7.left - o8, d4 = s5.clientY - r7.top - n7, g3 = {};
        return Math.abs(c5 + o8) > a5.globals.gridWidth ? c5 = a5.globals.gridWidth - o8 : s5.clientX - r7.left < 0 && (c5 = o8), o8 > s5.clientX - r7.left && (l4 = true, c5 = Math.abs(c5)), n7 > s5.clientY - r7.top && (h4 = true, d4 = Math.abs(d4)), g3 = "x" === i8 ? { x: l4 ? o8 - c5 : o8, y: 0, width: c5, height: a5.globals.gridHeight } : "y" === i8 ? { x: 0, y: h4 ? n7 - d4 : n7, width: a5.globals.gridWidth, height: d4 } : { x: l4 ? o8 - c5 : o8, y: h4 ? n7 - d4 : n7, width: c5, height: d4 }, s5.drawSelectionRect(g3), s5.selectionDragging("resizing"), g3;
      } }, { key: "selectionDragging", value: function(t6, e9) {
        var i8 = this, a5 = this.w, s5 = this.xyRatios, r7 = this.selectionRect, o8 = 0;
        "resizing" === t6 && (o8 = 30);
        var n7 = function(t7) {
          return parseFloat(r7.node.getAttribute(t7));
        }, l4 = { x: n7("x"), y: n7("y"), width: n7("width"), height: n7("height") };
        a5.globals.selection = l4, "function" == typeof a5.config.chart.events.selection && a5.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
          var t7, e10, o9, n8, l5 = i8.gridRect.getBoundingClientRect(), h4 = r7.node.getBoundingClientRect();
          a5.globals.isRangeBar ? (t7 = a5.globals.yAxisScale[0].niceMin + (h4.left - l5.left) * s5.invertedYRatio, e10 = a5.globals.yAxisScale[0].niceMin + (h4.right - l5.left) * s5.invertedYRatio, o9 = 0, n8 = 1) : (t7 = a5.globals.xAxisScale.niceMin + (h4.left - l5.left) * s5.xRatio, e10 = a5.globals.xAxisScale.niceMin + (h4.right - l5.left) * s5.xRatio, o9 = a5.globals.yAxisScale[0].niceMin + (l5.bottom - h4.bottom) * s5.yRatio[0], n8 = a5.globals.yAxisScale[0].niceMax - (h4.top - l5.top) * s5.yRatio[0]);
          var c5 = { xaxis: { min: t7, max: e10 }, yaxis: { min: o9, max: n8 } };
          a5.config.chart.events.selection(i8.ctx, c5), a5.config.chart.brush.enabled && void 0 !== a5.config.chart.events.brushScrolled && a5.config.chart.events.brushScrolled(i8.ctx, c5);
        }, o8));
      } }, { key: "selectionDrawn", value: function(t6) {
        var e9 = t6.context, i8 = t6.zoomtype, a5 = this.w, s5 = e9, r7 = this.xyRatios, o8 = this.ctx.toolbar;
        if (s5.startX > s5.endX) {
          var n7 = s5.startX;
          s5.startX = s5.endX, s5.endX = n7;
        }
        if (s5.startY > s5.endY) {
          var l4 = s5.startY;
          s5.startY = s5.endY, s5.endY = l4;
        }
        var h4 = void 0, c5 = void 0;
        a5.globals.isRangeBar ? (h4 = a5.globals.yAxisScale[0].niceMin + s5.startX * r7.invertedYRatio, c5 = a5.globals.yAxisScale[0].niceMin + s5.endX * r7.invertedYRatio) : (h4 = a5.globals.xAxisScale.niceMin + s5.startX * r7.xRatio, c5 = a5.globals.xAxisScale.niceMin + s5.endX * r7.xRatio);
        var d4 = [], g3 = [];
        if (a5.config.yaxis.forEach(function(t7, e10) {
          var i9 = a5.globals.seriesYAxisMap[e10][0];
          d4.push(a5.globals.yAxisScale[e10].niceMax - r7.yRatio[i9] * s5.startY), g3.push(a5.globals.yAxisScale[e10].niceMax - r7.yRatio[i9] * s5.endY);
        }), s5.dragged && (s5.dragX > 10 || s5.dragY > 10) && h4 !== c5) {
          if (a5.globals.zoomEnabled) {
            var u4 = m2.clone(a5.globals.initialConfig.yaxis), f4 = m2.clone(a5.globals.initialConfig.xaxis);
            if (a5.globals.zoomed = true, a5.config.xaxis.convertedCatToNumeric && (h4 = Math.floor(h4), c5 = Math.floor(c5), h4 < 1 && (h4 = 1, c5 = a5.globals.dataPoints), c5 - h4 < 2 && (c5 = h4 + 1)), "xy" !== i8 && "x" !== i8 || (f4 = { min: h4, max: c5 }), "xy" !== i8 && "y" !== i8 || u4.forEach(function(t7, e10) {
              u4[e10].min = g3[e10], u4[e10].max = d4[e10];
            }), o8) {
              var p4 = o8.getBeforeZoomRange(f4, u4);
              p4 && (f4 = p4.xaxis ? p4.xaxis : f4, u4 = p4.yaxis ? p4.yaxis : u4);
            }
            var x3 = { xaxis: f4 };
            a5.config.chart.group || (x3.yaxis = u4), s5.ctx.updateHelpers._updateOptions(x3, false, s5.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a5.config.chart.events.zoomed && o8.zoomCallback(f4, u4);
          } else if (a5.globals.selectionEnabled) {
            var b4, v3 = null;
            b4 = { min: h4, max: c5 }, "xy" !== i8 && "y" !== i8 || (v3 = m2.clone(a5.config.yaxis)).forEach(function(t7, e10) {
              v3[e10].min = g3[e10], v3[e10].max = d4[e10];
            }), a5.globals.selection = s5.selection, "function" == typeof a5.config.chart.events.selection && a5.config.chart.events.selection(s5.ctx, { xaxis: b4, yaxis: v3 });
          }
        }
      } }, { key: "panDragging", value: function(t6) {
        var e9 = t6.context, i8 = this.w, a5 = e9;
        if (void 0 !== i8.globals.lastClientPosition.x) {
          var s5 = i8.globals.lastClientPosition.x - a5.clientX, r7 = i8.globals.lastClientPosition.y - a5.clientY;
          Math.abs(s5) > Math.abs(r7) && s5 > 0 ? this.moveDirection = "left" : Math.abs(s5) > Math.abs(r7) && s5 < 0 ? this.moveDirection = "right" : Math.abs(r7) > Math.abs(s5) && r7 > 0 ? this.moveDirection = "up" : Math.abs(r7) > Math.abs(s5) && r7 < 0 && (this.moveDirection = "down");
        }
        i8.globals.lastClientPosition = { x: a5.clientX, y: a5.clientY };
        var o8 = i8.globals.isRangeBar ? i8.globals.minY : i8.globals.minX, n7 = i8.globals.isRangeBar ? i8.globals.maxY : i8.globals.maxX;
        i8.config.xaxis.convertedCatToNumeric || a5.panScrolled(o8, n7);
      } }, { key: "delayedPanScrolled", value: function() {
        var t6 = this.w, e9 = t6.globals.minX, i8 = t6.globals.maxX, a5 = (t6.globals.maxX - t6.globals.minX) / 2;
        "left" === this.moveDirection ? (e9 = t6.globals.minX + a5, i8 = t6.globals.maxX + a5) : "right" === this.moveDirection && (e9 = t6.globals.minX - a5, i8 = t6.globals.maxX - a5), e9 = Math.floor(e9), i8 = Math.floor(i8), this.updateScrolledChart({ xaxis: { min: e9, max: i8 } }, e9, i8);
      } }, { key: "panScrolled", value: function(t6, e9) {
        var i8 = this.w, a5 = this.xyRatios, s5 = m2.clone(i8.globals.initialConfig.yaxis), r7 = a5.xRatio, o8 = i8.globals.minX, n7 = i8.globals.maxX;
        i8.globals.isRangeBar && (r7 = a5.invertedYRatio, o8 = i8.globals.minY, n7 = i8.globals.maxY), "left" === this.moveDirection ? (t6 = o8 + i8.globals.gridWidth / 15 * r7, e9 = n7 + i8.globals.gridWidth / 15 * r7) : "right" === this.moveDirection && (t6 = o8 - i8.globals.gridWidth / 15 * r7, e9 = n7 - i8.globals.gridWidth / 15 * r7), i8.globals.isRangeBar || (t6 < i8.globals.initialMinX || e9 > i8.globals.initialMaxX) && (t6 = o8, e9 = n7);
        var l4 = { xaxis: { min: t6, max: e9 } };
        i8.config.chart.group || (l4.yaxis = s5), this.updateScrolledChart(l4, t6, e9);
      } }, { key: "updateScrolledChart", value: function(t6, e9, i8) {
        var a5 = this.w;
        this.ctx.updateHelpers._updateOptions(t6, false, false), "function" == typeof a5.config.chart.events.scrolled && a5.config.chart.events.scrolled(this.ctx, { xaxis: { min: e9, max: i8 } });
      } }]), a4;
    }();
    var pt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.ttCtx = e8, this.ctx = e8.ctx;
      }
      return s4(t5, [{ key: "getNearestValues", value: function(t6) {
        var e8 = t6.hoverArea, i8 = t6.elGrid, a4 = t6.clientX, s5 = t6.clientY, r7 = this.w, o8 = i8.getBoundingClientRect(), n7 = o8.width, l4 = o8.height, h4 = n7 / (r7.globals.dataPoints - 1), c5 = l4 / r7.globals.dataPoints, d4 = this.hasBars();
        !r7.globals.comboCharts && !d4 || r7.config.xaxis.convertedCatToNumeric || (h4 = n7 / r7.globals.dataPoints);
        var g3 = a4 - o8.left - r7.globals.barPadForNumericAxis, u4 = s5 - o8.top;
        g3 < 0 || u4 < 0 || g3 > n7 || u4 > l4 ? (e8.classList.remove("hovering-zoom"), e8.classList.remove("hovering-pan")) : r7.globals.zoomEnabled ? (e8.classList.remove("hovering-pan"), e8.classList.add("hovering-zoom")) : r7.globals.panEnabled && (e8.classList.remove("hovering-zoom"), e8.classList.add("hovering-pan"));
        var f4 = Math.round(g3 / h4), p4 = Math.floor(u4 / c5);
        d4 && !r7.config.xaxis.convertedCatToNumeric && (f4 = Math.ceil(g3 / h4), f4 -= 1);
        var x3 = null, b4 = null, v3 = r7.globals.seriesXvalues.map(function(t7) {
          return t7.filter(function(t8) {
            return m2.isNumber(t8);
          });
        }), y4 = r7.globals.seriesYvalues.map(function(t7) {
          return t7.filter(function(t8) {
            return m2.isNumber(t8);
          });
        });
        if (r7.globals.isXNumeric) {
          var w3 = this.ttCtx.getElGrid().getBoundingClientRect(), k3 = g3 * (w3.width / n7), A3 = u4 * (w3.height / l4);
          x3 = (b4 = this.closestInMultiArray(k3, A3, v3, y4)).index, f4 = b4.j, null !== x3 && (v3 = r7.globals.seriesXvalues[x3], f4 = (b4 = this.closestInArray(k3, v3)).index);
        }
        return r7.globals.capturedSeriesIndex = null === x3 ? -1 : x3, (!f4 || f4 < 1) && (f4 = 0), r7.globals.isBarHorizontal ? r7.globals.capturedDataPointIndex = p4 : r7.globals.capturedDataPointIndex = f4, { capturedSeries: x3, j: r7.globals.isBarHorizontal ? p4 : f4, hoverX: g3, hoverY: u4 };
      } }, { key: "closestInMultiArray", value: function(t6, e8, i8, a4) {
        var s5 = this.w, r7 = 0, o8 = null, n7 = -1;
        s5.globals.series.length > 1 ? r7 = this.getFirstActiveXArray(i8) : o8 = 0;
        var l4 = i8[r7][0], h4 = Math.abs(t6 - l4);
        if (i8.forEach(function(e9) {
          e9.forEach(function(e10, i9) {
            var a5 = Math.abs(t6 - e10);
            a5 <= h4 && (h4 = a5, n7 = i9);
          });
        }), -1 !== n7) {
          var c5 = a4[r7][n7], d4 = Math.abs(e8 - c5);
          o8 = r7, a4.forEach(function(t7, i9) {
            var a5 = Math.abs(e8 - t7[n7]);
            a5 <= d4 && (d4 = a5, o8 = i9);
          });
        }
        return { index: o8, j: n7 };
      } }, { key: "getFirstActiveXArray", value: function(t6) {
        for (var e8 = this.w, i8 = 0, a4 = t6.map(function(t7, e9) {
          return t7.length > 0 ? e9 : -1;
        }), s5 = 0; s5 < a4.length; s5++) if (-1 !== a4[s5] && -1 === e8.globals.collapsedSeriesIndices.indexOf(s5) && -1 === e8.globals.ancillaryCollapsedSeriesIndices.indexOf(s5)) {
          i8 = a4[s5];
          break;
        }
        return i8;
      } }, { key: "closestInArray", value: function(t6, e8) {
        for (var i8 = e8[0], a4 = null, s5 = Math.abs(t6 - i8), r7 = 0; r7 < e8.length; r7++) {
          var o8 = Math.abs(t6 - e8[r7]);
          o8 < s5 && (s5 = o8, a4 = r7);
        }
        return { index: a4 };
      } }, { key: "isXoverlap", value: function(t6) {
        var e8 = [], i8 = this.w.globals.seriesX.filter(function(t7) {
          return void 0 !== t7[0];
        });
        if (i8.length > 0) for (var a4 = 0; a4 < i8.length - 1; a4++) void 0 !== i8[a4][t6] && void 0 !== i8[a4 + 1][t6] && i8[a4][t6] !== i8[a4 + 1][t6] && e8.push("unEqual");
        return 0 === e8.length;
      } }, { key: "isInitialSeriesSameLen", value: function() {
        for (var t6 = true, e8 = this.w.globals.initialSeries, i8 = 0; i8 < e8.length - 1; i8++) if (e8[i8].data.length !== e8[i8 + 1].data.length) {
          t6 = false;
          break;
        }
        return t6;
      } }, { key: "getBarsHeight", value: function(t6) {
        return p3(t6).reduce(function(t7, e8) {
          return t7 + e8.getBBox().height;
        }, 0);
      } }, { key: "getElMarkers", value: function(t6) {
        return "number" == typeof t6 ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t6, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
      } }, { key: "getAllMarkers", value: function() {
        var t6 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
        (t6 = p3(t6)).sort(function(t7, e9) {
          var i8 = Number(t7.getAttribute("data:realIndex")), a4 = Number(e9.getAttribute("data:realIndex"));
          return a4 < i8 ? 1 : a4 > i8 ? -1 : 0;
        });
        var e8 = [];
        return t6.forEach(function(t7) {
          e8.push(t7.querySelector(".apexcharts-marker"));
        }), e8;
      } }, { key: "hasMarkers", value: function(t6) {
        return this.getElMarkers(t6).length > 0;
      } }, { key: "getPathFromPoint", value: function(t6, e8) {
        var i8 = Number(t6.getAttribute("cx")), a4 = Number(t6.getAttribute("cy")), s5 = t6.getAttribute("shape");
        return new k2(this.ctx).getMarkerPath(i8, a4, s5, e8);
      } }, { key: "getElBars", value: function() {
        return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
      } }, { key: "hasBars", value: function() {
        return this.getElBars().length > 0;
      } }, { key: "getHoverMarkerSize", value: function(t6) {
        var e8 = this.w, i8 = e8.config.markers.hover.size;
        return void 0 === i8 && (i8 = e8.globals.markers.size[t6] + e8.config.markers.hover.sizeOffset), i8;
      } }, { key: "toggleAllTooltipSeriesGroups", value: function(t6) {
        var e8 = this.w, i8 = this.ttCtx;
        0 === i8.allTooltipSeriesGroups.length && (i8.allTooltipSeriesGroups = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
        for (var a4 = i8.allTooltipSeriesGroups, s5 = 0; s5 < a4.length; s5++) "enable" === t6 ? (a4[s5].classList.add("apexcharts-active"), a4[s5].style.display = e8.config.tooltip.items.display) : (a4[s5].classList.remove("apexcharts-active"), a4[s5].style.display = "none");
      } }]), t5;
    }();
    var xt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.ctx = e8.ctx, this.ttCtx = e8, this.tooltipUtil = new pt(e8);
      }
      return s4(t5, [{ key: "drawSeriesTexts", value: function(t6) {
        var e8 = t6.shared, i8 = void 0 === e8 || e8, a4 = t6.ttItems, s5 = t6.i, r7 = void 0 === s5 ? 0 : s5, o8 = t6.j, n7 = void 0 === o8 ? null : o8, l4 = t6.y1, h4 = t6.y2, c5 = t6.e, d4 = this.w;
        void 0 !== d4.config.tooltip.custom ? this.handleCustomTooltip({ i: r7, j: n7, y1: l4, y2: h4, w: d4 }) : this.toggleActiveInactiveSeries(i8, r7);
        var g3 = this.getValuesToPrint({ i: r7, j: n7 });
        this.printLabels({ i: r7, j: n7, values: g3, ttItems: a4, shared: i8, e: c5 });
        var u4 = this.ttCtx.getElTooltip();
        this.ttCtx.tooltipRect.ttWidth = u4.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = u4.getBoundingClientRect().height;
      } }, { key: "printLabels", value: function(t6) {
        var e8, i8 = this, a4 = t6.i, s5 = t6.j, r7 = t6.values, o8 = t6.ttItems, n7 = t6.shared, l4 = t6.e, h4 = this.w, c5 = [], d4 = function(t7) {
          return h4.globals.seriesGoals[t7] && h4.globals.seriesGoals[t7][s5] && Array.isArray(h4.globals.seriesGoals[t7][s5]);
        }, u4 = r7.xVal, f4 = r7.zVal, p4 = r7.xAxisTTVal, x3 = "", b4 = h4.globals.colors[a4];
        null !== s5 && h4.config.plotOptions.bar.distributed && (b4 = h4.globals.colors[s5]);
        for (var v3 = function(t7, r8) {
          var v4 = i8.getFormatters(a4);
          x3 = i8.getSeriesName({ fn: v4.yLbTitleFormatter, index: a4, seriesIndex: a4, j: s5 }), "treemap" === h4.config.chart.type && (x3 = v4.yLbTitleFormatter(String(h4.config.series[a4].data[s5].x), { series: h4.globals.series, seriesIndex: a4, dataPointIndex: s5, w: h4 }));
          var m4 = h4.config.tooltip.inverseOrder ? r8 : t7;
          if (h4.globals.axisCharts) {
            var y5 = function(t8) {
              var e9, i9, a5, r9;
              return h4.globals.isRangeData ? v4.yLbFormatter(null === (e9 = h4.globals.seriesRangeStart) || void 0 === e9 || null === (i9 = e9[t8]) || void 0 === i9 ? void 0 : i9[s5], { series: h4.globals.seriesRangeStart, seriesIndex: t8, dataPointIndex: s5, w: h4 }) + " - " + v4.yLbFormatter(null === (a5 = h4.globals.seriesRangeEnd) || void 0 === a5 || null === (r9 = a5[t8]) || void 0 === r9 ? void 0 : r9[s5], { series: h4.globals.seriesRangeEnd, seriesIndex: t8, dataPointIndex: s5, w: h4 }) : v4.yLbFormatter(h4.globals.series[t8][s5], { series: h4.globals.series, seriesIndex: t8, dataPointIndex: s5, w: h4 });
            };
            if (n7) v4 = i8.getFormatters(m4), x3 = i8.getSeriesName({ fn: v4.yLbTitleFormatter, index: m4, seriesIndex: a4, j: s5 }), b4 = h4.globals.colors[m4], e8 = y5(m4), d4(m4) && (c5 = h4.globals.seriesGoals[m4][s5].map(function(t8) {
              return { attrs: t8, val: v4.yLbFormatter(t8.value, { seriesIndex: m4, dataPointIndex: s5, w: h4 }) };
            }));
            else {
              var w3, k3 = null == l4 || null === (w3 = l4.target) || void 0 === w3 ? void 0 : w3.getAttribute("fill");
              k3 && (-1 !== k3.indexOf("url") ? -1 !== k3.indexOf("Pattern") && (b4 = h4.globals.dom.baseEl.querySelector(k3.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : b4 = k3), e8 = y5(a4), d4(a4) && Array.isArray(h4.globals.seriesGoals[a4][s5]) && (c5 = h4.globals.seriesGoals[a4][s5].map(function(t8) {
                return { attrs: t8, val: v4.yLbFormatter(t8.value, { seriesIndex: a4, dataPointIndex: s5, w: h4 }) };
              }));
            }
          }
          null === s5 && (e8 = v4.yLbFormatter(h4.globals.series[a4], g2(g2({}, h4), {}, { seriesIndex: a4, dataPointIndex: a4 }))), i8.DOMHandling({ i: a4, t: m4, j: s5, ttItems: o8, values: { val: e8, goalVals: c5, xVal: u4, xAxisTTVal: p4, zVal: f4 }, seriesName: x3, shared: n7, pColor: b4 });
        }, m3 = 0, y4 = h4.globals.series.length - 1; m3 < h4.globals.series.length; m3++, y4--) v3(m3, y4);
      } }, { key: "getFormatters", value: function(t6) {
        var e8, i8 = this.w, a4 = i8.globals.yLabelFormatters[t6];
        return void 0 !== i8.globals.ttVal ? Array.isArray(i8.globals.ttVal) ? (a4 = i8.globals.ttVal[t6] && i8.globals.ttVal[t6].formatter, e8 = i8.globals.ttVal[t6] && i8.globals.ttVal[t6].title && i8.globals.ttVal[t6].title.formatter) : (a4 = i8.globals.ttVal.formatter, "function" == typeof i8.globals.ttVal.title.formatter && (e8 = i8.globals.ttVal.title.formatter)) : e8 = i8.config.tooltip.y.title.formatter, "function" != typeof a4 && (a4 = i8.globals.yLabelFormatters[0] ? i8.globals.yLabelFormatters[0] : function(t7) {
          return t7;
        }), "function" != typeof e8 && (e8 = function(t7) {
          return t7;
        }), { yLbFormatter: a4, yLbTitleFormatter: e8 };
      } }, { key: "getSeriesName", value: function(t6) {
        var e8 = t6.fn, i8 = t6.index, a4 = t6.seriesIndex, s5 = t6.j, r7 = this.w;
        return e8(String(r7.globals.seriesNames[i8]), { series: r7.globals.series, seriesIndex: a4, dataPointIndex: s5, w: r7 });
      } }, { key: "DOMHandling", value: function(t6) {
        t6.i;
        var e8 = t6.t, i8 = t6.j, a4 = t6.ttItems, s5 = t6.values, r7 = t6.seriesName, o8 = t6.shared, n7 = t6.pColor, l4 = this.w, h4 = this.ttCtx, c5 = s5.val, d4 = s5.goalVals, g3 = s5.xVal, u4 = s5.xAxisTTVal, f4 = s5.zVal, p4 = null;
        p4 = a4[e8].children, l4.config.tooltip.fillSeriesColor && (a4[e8].style.backgroundColor = n7, p4[0].style.display = "none"), h4.showTooltipTitle && (null === h4.tooltipTitle && (h4.tooltipTitle = l4.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h4.tooltipTitle.innerHTML = g3), h4.isXAxisTooltipEnabled && (h4.xaxisTooltipText.innerHTML = "" !== u4 ? u4 : g3);
        var x3 = a4[e8].querySelector(".apexcharts-tooltip-text-y-label");
        x3 && (x3.innerHTML = r7 || "");
        var b4 = a4[e8].querySelector(".apexcharts-tooltip-text-y-value");
        b4 && (b4.innerHTML = void 0 !== c5 ? c5 : ""), p4[0] && p4[0].classList.contains("apexcharts-tooltip-marker") && (l4.config.tooltip.marker.fillColors && Array.isArray(l4.config.tooltip.marker.fillColors) && (n7 = l4.config.tooltip.marker.fillColors[e8]), p4[0].style.backgroundColor = n7), l4.config.tooltip.marker.show || (p4[0].style.display = "none");
        var v3 = a4[e8].querySelector(".apexcharts-tooltip-text-goals-label"), m3 = a4[e8].querySelector(".apexcharts-tooltip-text-goals-value");
        if (d4.length && l4.globals.seriesGoals[e8]) {
          var y4 = function() {
            var t7 = "<div >", e9 = "<div>";
            d4.forEach(function(i9, a5) {
              t7 += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i9.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i9.attrs.name, "</div>"), e9 += "<div>".concat(i9.val, "</div>");
            }), v3.innerHTML = t7 + "</div>", m3.innerHTML = e9 + "</div>";
          };
          o8 ? l4.globals.seriesGoals[e8][i8] && Array.isArray(l4.globals.seriesGoals[e8][i8]) ? y4() : (v3.innerHTML = "", m3.innerHTML = "") : y4();
        } else v3.innerHTML = "", m3.innerHTML = "";
        null !== f4 && (a4[e8].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l4.config.tooltip.z.title, a4[e8].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== f4 ? f4 : "");
        if (o8 && p4[0]) {
          if (l4.config.tooltip.hideEmptySeries) {
            var w3 = a4[e8].querySelector(".apexcharts-tooltip-marker"), k3 = a4[e8].querySelector(".apexcharts-tooltip-text");
            0 == parseFloat(c5) ? (w3.style.display = "none", k3.style.display = "none") : (w3.style.display = "block", k3.style.display = "block");
          }
          null == c5 || l4.globals.ancillaryCollapsedSeriesIndices.indexOf(e8) > -1 || l4.globals.collapsedSeriesIndices.indexOf(e8) > -1 || Array.isArray(h4.tConfig.enabledOnSeries) && -1 === h4.tConfig.enabledOnSeries.indexOf(e8) ? p4[0].parentNode.style.display = "none" : p4[0].parentNode.style.display = l4.config.tooltip.items.display;
        } else Array.isArray(h4.tConfig.enabledOnSeries) && -1 === h4.tConfig.enabledOnSeries.indexOf(e8) && (p4[0].parentNode.style.display = "none");
      } }, { key: "toggleActiveInactiveSeries", value: function(t6, e8) {
        var i8 = this.w;
        if (t6) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
        else {
          this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
          var a4 = i8.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e8));
          a4 && (a4.classList.add("apexcharts-active"), a4.style.display = i8.config.tooltip.items.display);
        }
      } }, { key: "getValuesToPrint", value: function(t6) {
        var e8 = t6.i, i8 = t6.j, a4 = this.w, s5 = this.ctx.series.filteredSeriesX(), r7 = "", o8 = "", n7 = null, l4 = null, h4 = { series: a4.globals.series, seriesIndex: e8, dataPointIndex: i8, w: a4 }, c5 = a4.globals.ttZFormatter;
        null === i8 ? l4 = a4.globals.series[e8] : a4.globals.isXNumeric && "treemap" !== a4.config.chart.type ? (r7 = s5[e8][i8], 0 === s5[e8].length && (r7 = s5[this.tooltipUtil.getFirstActiveXArray(s5)][i8])) : r7 = new _2(this.ctx).isFormatXY() ? void 0 !== a4.config.series[e8].data[i8] ? a4.config.series[e8].data[i8].x : "" : void 0 !== a4.globals.labels[i8] ? a4.globals.labels[i8] : "";
        var d4 = r7;
        a4.globals.isXNumeric && "datetime" === a4.config.xaxis.type ? r7 = new P2(this.ctx).xLabelFormat(a4.globals.ttKeyFormatter, d4, d4, { i: void 0, dateFormatter: new L2(this.ctx).formatDate, w: this.w }) : r7 = a4.globals.isBarHorizontal ? a4.globals.yLabelFormatters[0](d4, h4) : a4.globals.xLabelFormatter(d4, h4);
        return void 0 !== a4.config.tooltip.x.formatter && (r7 = a4.globals.ttKeyFormatter(d4, h4)), a4.globals.seriesZ.length > 0 && a4.globals.seriesZ[e8].length > 0 && (n7 = c5(a4.globals.seriesZ[e8][i8], a4)), o8 = "function" == typeof a4.config.xaxis.tooltip.formatter ? a4.globals.xaxisTooltipFormatter(d4, h4) : r7, { val: Array.isArray(l4) ? l4.join(" ") : l4, xVal: Array.isArray(r7) ? r7.join(" ") : r7, xAxisTTVal: Array.isArray(o8) ? o8.join(" ") : o8, zVal: n7 };
      } }, { key: "handleCustomTooltip", value: function(t6) {
        var e8 = t6.i, i8 = t6.j, a4 = t6.y1, s5 = t6.y2, r7 = t6.w, o8 = this.ttCtx.getElTooltip(), n7 = r7.config.tooltip.custom;
        Array.isArray(n7) && n7[e8] && (n7 = n7[e8]), o8.innerHTML = n7({ ctx: this.ctx, series: r7.globals.series, seriesIndex: e8, dataPointIndex: i8, y1: a4, y2: s5, w: r7 });
      } }]), t5;
    }();
    var bt = function() {
      function t5(e8) {
        i7(this, t5), this.ttCtx = e8, this.ctx = e8.ctx, this.w = e8.w;
      }
      return s4(t5, [{ key: "moveXCrosshairs", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i8 = this.ttCtx, a4 = this.w, s5 = i8.getElXCrosshairs(), r7 = t6 - i8.xcrosshairsWidth / 2, o8 = a4.globals.labels.slice().length;
        if (null !== e8 && (r7 = a4.globals.gridWidth / o8 * e8), null === s5 || a4.globals.isBarHorizontal || (s5.setAttribute("x", r7), s5.setAttribute("x1", r7), s5.setAttribute("x2", r7), s5.setAttribute("y2", a4.globals.gridHeight), s5.classList.add("apexcharts-active")), r7 < 0 && (r7 = 0), r7 > a4.globals.gridWidth && (r7 = a4.globals.gridWidth), i8.isXAxisTooltipEnabled) {
          var n7 = r7;
          "tickWidth" !== a4.config.xaxis.crosshairs.width && "barWidth" !== a4.config.xaxis.crosshairs.width || (n7 = r7 + i8.xcrosshairsWidth / 2), this.moveXAxisTooltip(n7);
        }
      } }, { key: "moveYCrosshairs", value: function(t6) {
        var e8 = this.ttCtx;
        null !== e8.ycrosshairs && k2.setAttrs(e8.ycrosshairs, { y1: t6, y2: t6 }), null !== e8.ycrosshairsHidden && k2.setAttrs(e8.ycrosshairsHidden, { y1: t6, y2: t6 });
      } }, { key: "moveXAxisTooltip", value: function(t6) {
        var e8 = this.w, i8 = this.ttCtx;
        if (null !== i8.xaxisTooltip && 0 !== i8.xcrosshairsWidth) {
          i8.xaxisTooltip.classList.add("apexcharts-active");
          var a4 = i8.xaxisOffY + e8.config.xaxis.tooltip.offsetY + e8.globals.translateY + 1 + e8.config.xaxis.offsetY;
          if (t6 -= i8.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t6)) {
            t6 += e8.globals.translateX;
            var s5;
            s5 = new k2(this.ctx).getTextRects(i8.xaxisTooltipText.innerHTML), i8.xaxisTooltipText.style.minWidth = s5.width + "px", i8.xaxisTooltip.style.left = t6 + "px", i8.xaxisTooltip.style.top = a4 + "px";
          }
        }
      } }, { key: "moveYAxisTooltip", value: function(t6) {
        var e8 = this.w, i8 = this.ttCtx;
        null === i8.yaxisTTEls && (i8.yaxisTTEls = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        var a4 = parseInt(i8.ycrosshairsHidden.getAttribute("y1"), 10), s5 = e8.globals.translateY + a4, r7 = i8.yaxisTTEls[t6].getBoundingClientRect().height, o8 = e8.globals.translateYAxisX[t6] - 2;
        e8.config.yaxis[t6].opposite && (o8 -= 26), s5 -= r7 / 2, -1 === e8.globals.ignoreYAxisIndexes.indexOf(t6) ? (i8.yaxisTTEls[t6].classList.add("apexcharts-active"), i8.yaxisTTEls[t6].style.top = s5 + "px", i8.yaxisTTEls[t6].style.left = o8 + e8.config.yaxis[t6].tooltip.offsetX + "px") : i8.yaxisTTEls[t6].classList.remove("apexcharts-active");
      } }, { key: "moveTooltip", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a4 = this.w, s5 = this.ttCtx, r7 = s5.getElTooltip(), o8 = s5.tooltipRect, n7 = null !== i8 ? parseFloat(i8) : 1, l4 = parseFloat(t6) + n7 + 5, h4 = parseFloat(e8) + n7 / 2;
        if (l4 > a4.globals.gridWidth / 2 && (l4 = l4 - o8.ttWidth - n7 - 10), l4 > a4.globals.gridWidth - o8.ttWidth - 10 && (l4 = a4.globals.gridWidth - o8.ttWidth), l4 < -20 && (l4 = -20), a4.config.tooltip.followCursor) {
          var c5 = s5.getElGrid().getBoundingClientRect();
          (l4 = s5.e.clientX - c5.left) > a4.globals.gridWidth / 2 && (l4 -= s5.tooltipRect.ttWidth), (h4 = s5.e.clientY + a4.globals.translateY - c5.top) > a4.globals.gridHeight / 2 && (h4 -= s5.tooltipRect.ttHeight);
        } else a4.globals.isBarHorizontal || o8.ttHeight / 2 + h4 > a4.globals.gridHeight && (h4 = a4.globals.gridHeight - o8.ttHeight + a4.globals.translateY);
        isNaN(l4) || (l4 += a4.globals.translateX, r7.style.left = l4 + "px", r7.style.top = h4 + "px");
      } }, { key: "moveMarkers", value: function(t6, e8) {
        var i8 = this.w, a4 = this.ttCtx;
        if (i8.globals.markers.size[t6] > 0) for (var s5 = i8.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t6, "'] .apexcharts-marker")), r7 = 0; r7 < s5.length; r7++) parseInt(s5[r7].getAttribute("rel"), 10) === e8 && (a4.marker.resetPointsSize(), a4.marker.enlargeCurrentPoint(e8, s5[r7]));
        else a4.marker.resetPointsSize(), this.moveDynamicPointOnHover(e8, t6);
      } }, { key: "moveDynamicPointOnHover", value: function(t6, e8) {
        var i8, a4, s5, r7, o8 = this.w, n7 = this.ttCtx, l4 = new k2(this.ctx), h4 = o8.globals.pointsArray, c5 = n7.tooltipUtil.getHoverMarkerSize(e8), d4 = o8.config.series[e8].type;
        if (!d4 || "column" !== d4 && "candlestick" !== d4 && "boxPlot" !== d4) {
          s5 = null === (i8 = h4[e8][t6]) || void 0 === i8 ? void 0 : i8[0], r7 = (null === (a4 = h4[e8][t6]) || void 0 === a4 ? void 0 : a4[1]) || 0;
          var g3 = o8.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e8, "'] .apexcharts-series-markers path"));
          if (g3 && r7 < o8.globals.gridHeight && r7 > 0) {
            var u4 = g3.getAttribute("shape"), f4 = l4.getMarkerPath(s5, r7, u4, 1.5 * c5);
            g3.setAttribute("d", f4);
          }
          this.moveXCrosshairs(s5), n7.fixedTooltip || this.moveTooltip(s5, r7, c5);
        }
      } }, { key: "moveDynamicPointsOnHover", value: function(t6) {
        var e8, i8 = this.ttCtx, a4 = i8.w, s5 = 0, r7 = 0, o8 = a4.globals.pointsArray, n7 = new V2(this.ctx), l4 = new k2(this.ctx);
        e8 = n7.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
        var h4 = i8.tooltipUtil.getHoverMarkerSize(e8);
        o8[e8] && (s5 = o8[e8][t6][0], r7 = o8[e8][t6][1]);
        var c5 = i8.tooltipUtil.getAllMarkers();
        if (null !== c5) for (var d4 = 0; d4 < a4.globals.series.length; d4++) {
          var g3 = o8[d4];
          if (a4.globals.comboCharts && void 0 === g3 && c5.splice(d4, 0, null), g3 && g3.length) {
            var u4 = o8[d4][t6][1], f4 = void 0;
            c5[d4].setAttribute("cx", s5);
            var p4 = c5[d4].getAttribute("shape");
            if ("rangeArea" === a4.config.chart.type && !a4.globals.comboCharts) {
              var x3 = t6 + a4.globals.series[d4].length;
              f4 = o8[d4][x3][1], u4 -= Math.abs(u4 - f4) / 2;
            }
            if (null !== u4 && !isNaN(u4) && u4 < a4.globals.gridHeight + h4 && u4 + h4 > 0) {
              var b4 = l4.getMarkerPath(s5, u4, p4, h4);
              c5[d4].setAttribute("d", b4);
            } else c5[d4].setAttribute("d", "");
          }
        }
        this.moveXCrosshairs(s5), i8.fixedTooltip || this.moveTooltip(s5, r7 || a4.globals.gridHeight, h4);
      } }, { key: "moveStickyTooltipOverBars", value: function(t6, e8) {
        var i8 = this.w, a4 = this.ttCtx, s5 = i8.globals.columnSeries ? i8.globals.columnSeries.length : i8.globals.series.length, r7 = s5 >= 2 && s5 % 2 == 0 ? Math.floor(s5 / 2) : Math.floor(s5 / 2) + 1;
        i8.globals.isBarHorizontal && (r7 = new V2(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
        var o8 = i8.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r7, "'] path[j='").concat(t6, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r7, "'] path[j='").concat(t6, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r7, "'] path[j='").concat(t6, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r7, "'] path[j='").concat(t6, "']"));
        o8 || "number" != typeof e8 || (o8 = i8.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e8, "'] path[j='").concat(t6, "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e8, "'] path[j='").concat(t6, "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e8, "'] path[j='").concat(t6, "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e8, "'] path[j='").concat(t6, "']")));
        var n7 = o8 ? parseFloat(o8.getAttribute("cx")) : 0, l4 = o8 ? parseFloat(o8.getAttribute("cy")) : 0, h4 = o8 ? parseFloat(o8.getAttribute("barWidth")) : 0, c5 = a4.getElGrid().getBoundingClientRect(), d4 = o8 && (o8.classList.contains("apexcharts-candlestick-area") || o8.classList.contains("apexcharts-boxPlot-area"));
        i8.globals.isXNumeric ? (o8 && !d4 && (n7 -= s5 % 2 != 0 ? h4 / 2 : 0), o8 && d4 && i8.globals.comboCharts && (n7 -= h4 / 2)) : i8.globals.isBarHorizontal || (n7 = a4.xAxisTicksPositions[t6 - 1] + a4.dataPointsDividedWidth / 2, isNaN(n7) && (n7 = a4.xAxisTicksPositions[t6] - a4.dataPointsDividedWidth / 2)), i8.globals.isBarHorizontal ? l4 -= a4.tooltipRect.ttHeight : i8.config.tooltip.followCursor ? l4 = a4.e.clientY - c5.top - a4.tooltipRect.ttHeight / 2 : l4 + a4.tooltipRect.ttHeight + 15 > i8.globals.gridHeight && (l4 = i8.globals.gridHeight), i8.globals.isBarHorizontal || this.moveXCrosshairs(n7), a4.fixedTooltip || this.moveTooltip(n7, l4 || i8.globals.gridHeight);
      } }]), t5;
    }();
    var vt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.ttCtx = e8, this.ctx = e8.ctx, this.tooltipPosition = new bt(e8);
      }
      return s4(t5, [{ key: "drawDynamicPoints", value: function() {
        var t6 = this.w, e8 = new k2(this.ctx), i8 = new W(this.ctx), a4 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        a4 = p3(a4), t6.config.chart.stacked && a4.sort(function(t7, e9) {
          return parseFloat(t7.getAttribute("data:realIndex")) - parseFloat(e9.getAttribute("data:realIndex"));
        });
        for (var s5 = 0; s5 < a4.length; s5++) {
          var r7 = a4[s5].querySelector(".apexcharts-series-markers-wrap");
          if (null !== r7) {
            var o8 = void 0, n7 = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
            "line" !== t6.config.chart.type && "area" !== t6.config.chart.type || t6.globals.comboCharts || t6.config.tooltip.intersect || (n7 += " no-pointer-events");
            var l4 = i8.getMarkerConfig({ cssClass: n7, seriesIndex: Number(r7.getAttribute("data:realIndex")) });
            (o8 = e8.drawMarker(0, 0, l4)).node.setAttribute("default-marker-size", 0);
            var h4 = document.createElementNS(t6.globals.SVGNS, "g");
            h4.classList.add("apexcharts-series-markers"), h4.appendChild(o8.node), r7.appendChild(h4);
          }
        }
      } }, { key: "enlargeCurrentPoint", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s5 = this.w;
        "bubble" !== s5.config.chart.type && this.newPointSize(t6, e8);
        var r7 = e8.getAttribute("cx"), o8 = e8.getAttribute("cy");
        if (null !== i8 && null !== a4 && (r7 = i8, o8 = a4), this.tooltipPosition.moveXCrosshairs(r7), !this.fixedTooltip) {
          if ("radar" === s5.config.chart.type) {
            var n7 = this.ttCtx.getElGrid().getBoundingClientRect();
            r7 = this.ttCtx.e.clientX - n7.left;
          }
          this.tooltipPosition.moveTooltip(r7, o8, s5.config.markers.hover.size);
        }
      } }, { key: "enlargePoints", value: function(t6) {
        for (var e8 = this.w, i8 = this, a4 = this.ttCtx, s5 = t6, r7 = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o8 = e8.config.markers.hover.size, n7 = 0; n7 < r7.length; n7++) {
          var l4 = r7[n7].getAttribute("rel"), h4 = r7[n7].getAttribute("index");
          if (void 0 === o8 && (o8 = e8.globals.markers.size[h4] + e8.config.markers.hover.sizeOffset), s5 === parseInt(l4, 10)) {
            i8.newPointSize(s5, r7[n7]);
            var c5 = r7[n7].getAttribute("cx"), d4 = r7[n7].getAttribute("cy");
            i8.tooltipPosition.moveXCrosshairs(c5), a4.fixedTooltip || i8.tooltipPosition.moveTooltip(c5, d4, o8);
          } else i8.oldPointSize(r7[n7]);
        }
      } }, { key: "newPointSize", value: function(t6, e8) {
        var i8 = this.w, a4 = i8.config.markers.hover.size, s5 = 0 === t6 ? e8.parentNode.firstChild : e8.parentNode.lastChild;
        if ("0" !== s5.getAttribute("default-marker-size")) {
          var r7 = parseInt(s5.getAttribute("index"), 10);
          void 0 === a4 && (a4 = i8.globals.markers.size[r7] + i8.config.markers.hover.sizeOffset), a4 < 0 && (a4 = 0);
          var o8 = this.ttCtx.tooltipUtil.getPathFromPoint(e8, a4);
          e8.setAttribute("d", o8);
        }
      } }, { key: "oldPointSize", value: function(t6) {
        var e8 = parseFloat(t6.getAttribute("default-marker-size")), i8 = this.ttCtx.tooltipUtil.getPathFromPoint(t6, e8);
        t6.setAttribute("d", i8);
      } }, { key: "resetPointsSize", value: function() {
        for (var t6 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e8 = 0; e8 < t6.length; e8++) {
          var i8 = parseFloat(t6[e8].getAttribute("default-marker-size"));
          if (m2.isNumber(i8) && i8 >= 0) {
            var a4 = this.ttCtx.tooltipUtil.getPathFromPoint(t6[e8], i8);
            t6[e8].setAttribute("d", a4);
          } else t6[e8].setAttribute("d", "M0,0");
        }
      } }]), t5;
    }();
    var mt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w;
        var a4 = this.w;
        this.ttCtx = e8, this.isVerticalGroupedRangeBar = !a4.globals.isBarHorizontal && "rangeBar" === a4.config.chart.type && a4.config.plotOptions.bar.rangeBarGroupRows;
      }
      return s4(t5, [{ key: "getAttr", value: function(t6, e8) {
        return parseFloat(t6.target.getAttribute(e8));
      } }, { key: "handleHeatTreeTooltip", value: function(t6) {
        var e8 = t6.e, i8 = t6.opt, a4 = t6.x, s5 = t6.y, r7 = t6.type, o8 = this.ttCtx, n7 = this.w;
        if (e8.target.classList.contains("apexcharts-".concat(r7, "-rect"))) {
          var l4 = this.getAttr(e8, "i"), h4 = this.getAttr(e8, "j"), c5 = this.getAttr(e8, "cx"), d4 = this.getAttr(e8, "cy"), g3 = this.getAttr(e8, "width"), u4 = this.getAttr(e8, "height");
          if (o8.tooltipLabels.drawSeriesTexts({ ttItems: i8.ttItems, i: l4, j: h4, shared: false, e: e8 }), n7.globals.capturedSeriesIndex = l4, n7.globals.capturedDataPointIndex = h4, a4 = c5 + o8.tooltipRect.ttWidth / 2 + g3, s5 = d4 + o8.tooltipRect.ttHeight / 2 - u4 / 2, o8.tooltipPosition.moveXCrosshairs(c5 + g3 / 2), a4 > n7.globals.gridWidth / 2 && (a4 = c5 - o8.tooltipRect.ttWidth / 2 + g3), o8.w.config.tooltip.followCursor) {
            var f4 = n7.globals.dom.elWrap.getBoundingClientRect();
            a4 = n7.globals.clientX - f4.left - (a4 > n7.globals.gridWidth / 2 ? o8.tooltipRect.ttWidth : 0), s5 = n7.globals.clientY - f4.top - (s5 > n7.globals.gridHeight / 2 ? o8.tooltipRect.ttHeight : 0);
          }
        }
        return { x: a4, y: s5 };
      } }, { key: "handleMarkerTooltip", value: function(t6) {
        var e8, i8, a4 = t6.e, s5 = t6.opt, r7 = t6.x, o8 = t6.y, n7 = this.w, l4 = this.ttCtx;
        if (a4.target.classList.contains("apexcharts-marker")) {
          var h4 = parseInt(s5.paths.getAttribute("cx"), 10), c5 = parseInt(s5.paths.getAttribute("cy"), 10), d4 = parseFloat(s5.paths.getAttribute("val"));
          if (i8 = parseInt(s5.paths.getAttribute("rel"), 10), e8 = parseInt(s5.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l4.intersect) {
            var g3 = m2.findAncestor(s5.paths, "apexcharts-series");
            g3 && (e8 = parseInt(g3.getAttribute("data:realIndex"), 10));
          }
          if (l4.tooltipLabels.drawSeriesTexts({ ttItems: s5.ttItems, i: e8, j: i8, shared: !l4.showOnIntersect && n7.config.tooltip.shared, e: a4 }), "mouseup" === a4.type && l4.markerClick(a4, e8, i8), n7.globals.capturedSeriesIndex = e8, n7.globals.capturedDataPointIndex = i8, r7 = h4, o8 = c5 + n7.globals.translateY - 1.4 * l4.tooltipRect.ttHeight, l4.w.config.tooltip.followCursor) {
            var u4 = l4.getElGrid().getBoundingClientRect();
            o8 = l4.e.clientY + n7.globals.translateY - u4.top;
          }
          d4 < 0 && (o8 = c5), l4.marker.enlargeCurrentPoint(i8, s5.paths, r7, o8);
        }
        return { x: r7, y: o8 };
      } }, { key: "handleBarTooltip", value: function(t6) {
        var e8, i8, a4 = t6.e, s5 = t6.opt, r7 = this.w, o8 = this.ttCtx, n7 = o8.getElTooltip(), l4 = 0, h4 = 0, c5 = 0, d4 = this.getBarTooltipXY({ e: a4, opt: s5 });
        e8 = d4.i;
        var g3 = d4.j;
        r7.globals.capturedSeriesIndex = e8, r7.globals.capturedDataPointIndex = g3, r7.globals.isBarHorizontal && o8.tooltipUtil.hasBars() || !r7.config.tooltip.shared ? (h4 = d4.x, c5 = d4.y, i8 = Array.isArray(r7.config.stroke.width) ? r7.config.stroke.width[e8] : r7.config.stroke.width, l4 = h4) : r7.globals.comboCharts || r7.config.tooltip.shared || (l4 /= 2), isNaN(c5) && (c5 = r7.globals.svgHeight - o8.tooltipRect.ttHeight);
        var u4 = parseInt(s5.paths.parentNode.getAttribute("data:realIndex"), 10);
        if (r7.globals.isMultipleYAxis ? r7.config.yaxis[u4] && r7.config.yaxis[u4].reversed : r7.config.yaxis[0].reversed, h4 + o8.tooltipRect.ttWidth > r7.globals.gridWidth ? h4 -= o8.tooltipRect.ttWidth : h4 < 0 && (h4 = 0), o8.w.config.tooltip.followCursor) {
          var f4 = o8.getElGrid().getBoundingClientRect();
          c5 = o8.e.clientY - f4.top;
        }
        null === o8.tooltip && (o8.tooltip = r7.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r7.config.tooltip.shared || (r7.globals.comboBarCount > 0 ? o8.tooltipPosition.moveXCrosshairs(l4 + i8 / 2) : o8.tooltipPosition.moveXCrosshairs(l4)), !o8.fixedTooltip && (!r7.config.tooltip.shared || r7.globals.isBarHorizontal && o8.tooltipUtil.hasBars()) && (c5 = c5 + r7.globals.translateY - o8.tooltipRect.ttHeight / 2, n7.style.left = h4 + r7.globals.translateX + "px", n7.style.top = c5 + "px");
      } }, { key: "getBarTooltipXY", value: function(t6) {
        var e8 = this, i8 = t6.e, a4 = t6.opt, s5 = this.w, r7 = null, o8 = this.ttCtx, n7 = 0, l4 = 0, h4 = 0, c5 = 0, d4 = 0, g3 = i8.target.classList;
        if (g3.contains("apexcharts-bar-area") || g3.contains("apexcharts-candlestick-area") || g3.contains("apexcharts-boxPlot-area") || g3.contains("apexcharts-rangebar-area")) {
          var u4 = i8.target, f4 = u4.getBoundingClientRect(), p4 = a4.elGrid.getBoundingClientRect(), x3 = f4.height;
          d4 = f4.height;
          var b4 = f4.width, v3 = parseInt(u4.getAttribute("cx"), 10), m3 = parseInt(u4.getAttribute("cy"), 10);
          c5 = parseFloat(u4.getAttribute("barWidth"));
          var y4 = "touchmove" === i8.type ? i8.touches[0].clientX : i8.clientX;
          r7 = parseInt(u4.getAttribute("j"), 10), n7 = parseInt(u4.parentNode.getAttribute("rel"), 10) - 1;
          var w3 = u4.getAttribute("data-range-y1"), k3 = u4.getAttribute("data-range-y2");
          s5.globals.comboCharts && (n7 = parseInt(u4.parentNode.getAttribute("data:realIndex"), 10));
          var A3 = function(t7) {
            return s5.globals.isXNumeric ? v3 - b4 / 2 : e8.isVerticalGroupedRangeBar ? v3 + b4 / 2 : v3 - o8.dataPointsDividedWidth + b4 / 2;
          }, S4 = function() {
            return m3 - o8.dataPointsDividedHeight + x3 / 2 - o8.tooltipRect.ttHeight / 2;
          };
          o8.tooltipLabels.drawSeriesTexts({ ttItems: a4.ttItems, i: n7, j: r7, y1: w3 ? parseInt(w3, 10) : null, y2: k3 ? parseInt(k3, 10) : null, shared: !o8.showOnIntersect && s5.config.tooltip.shared, e: i8 }), s5.config.tooltip.followCursor ? s5.globals.isBarHorizontal ? (l4 = y4 - p4.left + 15, h4 = S4()) : (l4 = A3(), h4 = i8.clientY - p4.top - o8.tooltipRect.ttHeight / 2 - 15) : s5.globals.isBarHorizontal ? ((l4 = v3) < o8.xyRatios.baseLineInvertedY && (l4 = v3 - o8.tooltipRect.ttWidth), h4 = S4()) : (l4 = A3(), h4 = m3);
        }
        return { x: l4, y: h4, barHeight: d4, barWidth: c5, i: n7, j: r7 };
      } }]), t5;
    }();
    var yt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.ttCtx = e8;
      }
      return s4(t5, [{ key: "drawXaxisTooltip", value: function() {
        var t6 = this.w, e8 = this.ttCtx, i8 = "bottom" === t6.config.xaxis.position;
        e8.xaxisOffY = i8 ? t6.globals.gridHeight + 1 : -t6.globals.xAxisHeight - t6.config.xaxis.axisTicks.height + 3;
        var a4 = i8 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s5 = t6.globals.dom.elWrap;
        e8.isXAxisTooltipEnabled && (null === t6.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e8.xaxisTooltip = document.createElement("div"), e8.xaxisTooltip.setAttribute("class", a4 + " apexcharts-theme-" + t6.config.tooltip.theme), s5.appendChild(e8.xaxisTooltip), e8.xaxisTooltipText = document.createElement("div"), e8.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e8.xaxisTooltipText.style.fontFamily = t6.config.xaxis.tooltip.style.fontFamily || t6.config.chart.fontFamily, e8.xaxisTooltipText.style.fontSize = t6.config.xaxis.tooltip.style.fontSize, e8.xaxisTooltip.appendChild(e8.xaxisTooltipText)));
      } }, { key: "drawYaxisTooltip", value: function() {
        for (var t6 = this.w, e8 = this.ttCtx, i8 = 0; i8 < t6.config.yaxis.length; i8++) {
          var a4 = t6.config.yaxis[i8].opposite || t6.config.yaxis[i8].crosshairs.opposite;
          e8.yaxisOffX = a4 ? t6.globals.gridWidth + 1 : 1;
          var s5 = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i8, a4 ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r7 = t6.globals.dom.elWrap;
          null === t6.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i8)) && (e8.yaxisTooltip = document.createElement("div"), e8.yaxisTooltip.setAttribute("class", s5 + " apexcharts-theme-" + t6.config.tooltip.theme), r7.appendChild(e8.yaxisTooltip), 0 === i8 && (e8.yaxisTooltipText = []), e8.yaxisTooltipText[i8] = document.createElement("div"), e8.yaxisTooltipText[i8].classList.add("apexcharts-yaxistooltip-text"), e8.yaxisTooltip.appendChild(e8.yaxisTooltipText[i8]));
        }
      } }, { key: "setXCrosshairWidth", value: function() {
        var t6 = this.w, e8 = this.ttCtx, i8 = e8.getElXCrosshairs();
        if (e8.xcrosshairsWidth = parseInt(t6.config.xaxis.crosshairs.width, 10), t6.globals.comboCharts) {
          var a4 = t6.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
          if (null !== a4 && "barWidth" === t6.config.xaxis.crosshairs.width) {
            var s5 = parseFloat(a4.getAttribute("barWidth"));
            e8.xcrosshairsWidth = s5;
          } else if ("tickWidth" === t6.config.xaxis.crosshairs.width) {
            var r7 = t6.globals.labels.length;
            e8.xcrosshairsWidth = t6.globals.gridWidth / r7;
          }
        } else if ("tickWidth" === t6.config.xaxis.crosshairs.width) {
          var o8 = t6.globals.labels.length;
          e8.xcrosshairsWidth = t6.globals.gridWidth / o8;
        } else if ("barWidth" === t6.config.xaxis.crosshairs.width) {
          var n7 = t6.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
          if (null !== n7) {
            var l4 = parseFloat(n7.getAttribute("barWidth"));
            e8.xcrosshairsWidth = l4;
          } else e8.xcrosshairsWidth = 1;
        }
        t6.globals.isBarHorizontal && (e8.xcrosshairsWidth = 0), null !== i8 && e8.xcrosshairsWidth > 0 && i8.setAttribute("width", e8.xcrosshairsWidth);
      } }, { key: "handleYCrosshair", value: function() {
        var t6 = this.w, e8 = this.ttCtx;
        e8.ycrosshairs = t6.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e8.ycrosshairsHidden = t6.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
      } }, { key: "drawYaxisTooltipText", value: function(t6, e8, i8) {
        var a4 = this.ttCtx, s5 = this.w, r7 = s5.globals, o8 = r7.seriesYAxisMap[t6];
        if (a4.yaxisTooltips[t6] && o8.length > 0) {
          var n7 = r7.yLabelFormatters[t6], l4 = a4.getElGrid().getBoundingClientRect(), h4 = o8[0], c5 = 0;
          i8.yRatio.length > 1 && (c5 = h4);
          var d4 = (e8 - l4.top) * i8.yRatio[c5], g3 = r7.maxYArr[h4] - r7.minYArr[h4], u4 = r7.minYArr[h4] + (g3 - d4);
          s5.config.yaxis[t6].reversed && (u4 = r7.maxYArr[h4] - (g3 - d4)), a4.tooltipPosition.moveYCrosshairs(e8 - l4.top), a4.yaxisTooltipText[t6].innerHTML = n7(u4), a4.tooltipPosition.moveYAxisTooltip(t6);
        }
      } }]), t5;
    }();
    var wt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
        var a4 = this.w;
        this.tConfig = a4.config.tooltip, this.tooltipUtil = new pt(this), this.tooltipLabels = new xt(this), this.tooltipPosition = new bt(this), this.marker = new vt(this), this.intersect = new mt(this), this.axesTooltip = new yt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !a4.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
      }
      return s4(t5, [{ key: "getElTooltip", value: function(t6) {
        return t6 || (t6 = this), t6.w.globals.dom.baseEl ? t6.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
      } }, { key: "getElXCrosshairs", value: function() {
        return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
      } }, { key: "getElGrid", value: function() {
        return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
      } }, { key: "drawTooltip", value: function(t6) {
        var e8 = this.w;
        this.xyRatios = t6, this.isXAxisTooltipEnabled = e8.config.xaxis.tooltip.enabled && e8.globals.axisCharts, this.yaxisTooltips = e8.config.yaxis.map(function(t7, i9) {
          return !!(t7.show && t7.tooltip.enabled && e8.globals.axisCharts);
        }), this.allTooltipSeriesGroups = [], e8.globals.axisCharts || (this.showTooltipTitle = false);
        var i8 = document.createElement("div");
        if (i8.classList.add("apexcharts-tooltip"), e8.config.tooltip.cssClass && i8.classList.add(e8.config.tooltip.cssClass), i8.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e8.globals.dom.elWrap.appendChild(i8), e8.globals.axisCharts) {
          this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
          var a4 = new q(this.ctx);
          this.xAxisTicksPositions = a4.getXAxisTicksPositions();
        }
        if (!e8.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e8.config.chart.type || this.tConfig.shared || (this.showOnIntersect = true), 0 !== e8.config.markers.size && 0 !== e8.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e8.globals.collapsedSeries.length !== e8.globals.series.length) {
          this.dataPointsDividedHeight = e8.globals.gridHeight / e8.globals.dataPoints, this.dataPointsDividedWidth = e8.globals.gridWidth / e8.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e8.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i8.appendChild(this.tooltipTitle));
          var s5 = e8.globals.series.length;
          (e8.globals.xyCharts || e8.globals.comboCharts) && this.tConfig.shared && (s5 = this.showOnIntersect ? 1 : e8.globals.series.length), this.legendLabels = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s5), this.addSVGEvents();
        }
      } }, { key: "createTTElements", value: function(t6) {
        for (var e8 = this, i8 = this.w, a4 = [], s5 = this.getElTooltip(), r7 = function(r8) {
          var o9 = document.createElement("div");
          o9.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(r8)), o9.style.order = i8.config.tooltip.inverseOrder ? t6 - r8 : r8 + 1;
          var n7 = document.createElement("span");
          n7.classList.add("apexcharts-tooltip-marker"), n7.style.backgroundColor = i8.globals.colors[r8], o9.appendChild(n7);
          var l4 = document.createElement("div");
          l4.classList.add("apexcharts-tooltip-text"), l4.style.fontFamily = e8.tConfig.style.fontFamily || i8.config.chart.fontFamily, l4.style.fontSize = e8.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(t7) {
            var e9 = document.createElement("div");
            e9.classList.add("apexcharts-tooltip-".concat(t7, "-group"));
            var i9 = document.createElement("span");
            i9.classList.add("apexcharts-tooltip-text-".concat(t7, "-label")), e9.appendChild(i9);
            var a5 = document.createElement("span");
            a5.classList.add("apexcharts-tooltip-text-".concat(t7, "-value")), e9.appendChild(a5), l4.appendChild(e9);
          }), o9.appendChild(l4), s5.appendChild(o9), a4.push(o9);
        }, o8 = 0; o8 < t6; o8++) r7(o8);
        return a4;
      } }, { key: "addSVGEvents", value: function() {
        var t6 = this.w, e8 = t6.config.chart.type, i8 = this.getElTooltip(), a4 = !("bar" !== e8 && "candlestick" !== e8 && "boxPlot" !== e8 && "rangeBar" !== e8), s5 = "area" === e8 || "line" === e8 || "scatter" === e8 || "bubble" === e8 || "radar" === e8, r7 = t6.globals.dom.Paper.node, o8 = this.getElGrid();
        o8 && (this.seriesBound = o8.getBoundingClientRect());
        var n7, l4 = [], h4 = [], c5 = { hoverArea: r7, elGrid: o8, tooltipEl: i8, tooltipY: l4, tooltipX: h4, ttItems: this.ttItems };
        if (t6.globals.axisCharts && (s5 ? n7 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a4 ? n7 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e8 && "treemap" !== e8 || (n7 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n7 && n7.length)) for (var d4 = 0; d4 < n7.length; d4++) l4.push(n7[d4].getAttribute("cy")), h4.push(n7[d4].getAttribute("cx"));
        if (t6.globals.xyCharts && !this.showOnIntersect || t6.globals.comboCharts && !this.showOnIntersect || a4 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r7], c5);
        else if (a4 && !t6.globals.comboCharts || s5 && this.showOnIntersect) this.addDatapointEventsListeners(c5);
        else if (!t6.globals.axisCharts || "heatmap" === e8 || "treemap" === e8) {
          var g3 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
          this.addPathsEventListeners(g3, c5);
        }
        if (this.showOnIntersect) {
          var u4 = t6.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
          u4.length > 0 && this.addPathsEventListeners(u4, c5), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c5);
        }
      } }, { key: "drawFixedTooltipRect", value: function() {
        var t6 = this.w, e8 = this.getElTooltip(), i8 = e8.getBoundingClientRect(), a4 = i8.width + 10, s5 = i8.height + 10, r7 = this.tConfig.fixed.offsetX, o8 = this.tConfig.fixed.offsetY, n7 = this.tConfig.fixed.position.toLowerCase();
        return n7.indexOf("right") > -1 && (r7 = r7 + t6.globals.svgWidth - a4 + 10), n7.indexOf("bottom") > -1 && (o8 = o8 + t6.globals.svgHeight - s5 - 10), e8.style.left = r7 + "px", e8.style.top = o8 + "px", { x: r7, y: o8, ttWidth: a4, ttHeight: s5 };
      } }, { key: "addDatapointEventsListeners", value: function(t6) {
        var e8 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
        this.addPathsEventListeners(e8, t6);
      } }, { key: "addPathsEventListeners", value: function(t6, e8) {
        for (var i8 = this, a4 = function(a5) {
          var s6 = { paths: t6[a5], tooltipEl: e8.tooltipEl, tooltipY: e8.tooltipY, tooltipX: e8.tooltipX, elGrid: e8.elGrid, hoverArea: e8.hoverArea, ttItems: e8.ttItems };
          ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(e9) {
            return t6[a5].addEventListener(e9, i8.onSeriesHover.bind(i8, s6), { capture: false, passive: true });
          });
        }, s5 = 0; s5 < t6.length; s5++) a4(s5);
      } }, { key: "onSeriesHover", value: function(t6, e8) {
        var i8 = this, a4 = Date.now() - this.lastHoverTime;
        a4 >= 100 ? this.seriesHover(t6, e8) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
          i8.seriesHover(t6, e8);
        }, 100 - a4));
      } }, { key: "seriesHover", value: function(t6, e8) {
        var i8 = this;
        this.lastHoverTime = Date.now();
        var a4 = [], s5 = this.w;
        s5.config.chart.group && (a4 = this.ctx.getGroupedCharts()), s5.globals.axisCharts && (s5.globals.minX === -1 / 0 && s5.globals.maxX === 1 / 0 || 0 === s5.globals.dataPoints) || (a4.length ? a4.forEach(function(a5) {
          var s6 = i8.getElTooltip(a5), r7 = { paths: t6.paths, tooltipEl: s6, tooltipY: t6.tooltipY, tooltipX: t6.tooltipX, elGrid: t6.elGrid, hoverArea: t6.hoverArea, ttItems: a5.w.globals.tooltip.ttItems };
          a5.w.globals.minX === i8.w.globals.minX && a5.w.globals.maxX === i8.w.globals.maxX && a5.w.globals.tooltip.seriesHoverByContext({ chartCtx: a5, ttCtx: a5.w.globals.tooltip, opt: r7, e: e8 });
        }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t6, e: e8 }));
      } }, { key: "seriesHoverByContext", value: function(t6) {
        var e8 = t6.chartCtx, i8 = t6.ttCtx, a4 = t6.opt, s5 = t6.e, r7 = e8.w, o8 = this.getElTooltip(e8);
        if (o8) {
          if (i8.tooltipRect = { x: 0, y: 0, ttWidth: o8.getBoundingClientRect().width, ttHeight: o8.getBoundingClientRect().height }, i8.e = s5, i8.tooltipUtil.hasBars() && !r7.globals.comboCharts && !i8.isBarShared) {
            if (this.tConfig.onDatasetHover.highlightDataSeries) new V2(e8).toggleSeriesOnHover(s5, s5.target.parentNode);
          }
          i8.fixedTooltip && i8.drawFixedTooltipRect(), r7.globals.axisCharts ? i8.axisChartsTooltips({ e: s5, opt: a4, tooltipRect: i8.tooltipRect }) : i8.nonAxisChartsTooltips({ e: s5, opt: a4, tooltipRect: i8.tooltipRect });
        }
      } }, { key: "axisChartsTooltips", value: function(t6) {
        var e8, i8, a4 = t6.e, s5 = t6.opt, r7 = this.w, o8 = s5.elGrid.getBoundingClientRect(), n7 = "touchmove" === a4.type ? a4.touches[0].clientX : a4.clientX, l4 = "touchmove" === a4.type ? a4.touches[0].clientY : a4.clientY;
        if (this.clientY = l4, this.clientX = n7, r7.globals.capturedSeriesIndex = -1, r7.globals.capturedDataPointIndex = -1, l4 < o8.top || l4 > o8.top + o8.height) this.handleMouseOut(s5);
        else {
          if (Array.isArray(this.tConfig.enabledOnSeries) && !r7.config.tooltip.shared) {
            var h4 = parseInt(s5.paths.getAttribute("index"), 10);
            if (this.tConfig.enabledOnSeries.indexOf(h4) < 0) return void this.handleMouseOut(s5);
          }
          var c5 = this.getElTooltip(), d4 = this.getElXCrosshairs(), g3 = [];
          r7.config.chart.group && (g3 = this.ctx.getSyncedCharts());
          var u4 = r7.globals.xyCharts || "bar" === r7.config.chart.type && !r7.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r7.globals.comboCharts && this.tooltipUtil.hasBars();
          if ("mousemove" === a4.type || "touchmove" === a4.type || "mouseup" === a4.type) {
            if (r7.globals.collapsedSeries.length + r7.globals.ancillaryCollapsedSeries.length === r7.globals.series.length) return;
            null !== d4 && d4.classList.add("apexcharts-active");
            var f4 = this.yaxisTooltips.filter(function(t7) {
              return true === t7;
            });
            if (null !== this.ycrosshairs && f4.length && this.ycrosshairs.classList.add("apexcharts-active"), u4 && !this.showOnIntersect || g3.length > 1) this.handleStickyTooltip(a4, n7, l4, s5);
            else if ("heatmap" === r7.config.chart.type || "treemap" === r7.config.chart.type) {
              var p4 = this.intersect.handleHeatTreeTooltip({ e: a4, opt: s5, x: e8, y: i8, type: r7.config.chart.type });
              e8 = p4.x, i8 = p4.y, c5.style.left = e8 + "px", c5.style.top = i8 + "px";
            } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a4, opt: s5 }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a4, opt: s5, x: e8, y: i8 });
            if (this.yaxisTooltips.length) for (var x3 = 0; x3 < r7.config.yaxis.length; x3++) this.axesTooltip.drawYaxisTooltipText(x3, l4, this.xyRatios);
            r7.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), s5.tooltipEl.classList.add("apexcharts-active");
          } else "mouseout" !== a4.type && "touchend" !== a4.type || this.handleMouseOut(s5);
        }
      } }, { key: "nonAxisChartsTooltips", value: function(t6) {
        var e8 = t6.e, i8 = t6.opt, a4 = t6.tooltipRect, s5 = this.w, r7 = i8.paths.getAttribute("rel"), o8 = this.getElTooltip(), n7 = s5.globals.dom.elWrap.getBoundingClientRect();
        if ("mousemove" === e8.type || "touchmove" === e8.type) {
          s5.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), o8.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i8.ttItems, i: parseInt(r7, 10) - 1, shared: false });
          var l4 = s5.globals.clientX - n7.left - a4.ttWidth / 2, h4 = s5.globals.clientY - n7.top - a4.ttHeight - 10;
          if (o8.style.left = l4 + "px", o8.style.top = h4 + "px", s5.config.legend.tooltipHoverFormatter) {
            var c5 = r7 - 1, d4 = (0, s5.config.legend.tooltipHoverFormatter)(this.legendLabels[c5].getAttribute("data:default-text"), { seriesIndex: c5, dataPointIndex: c5, w: s5 });
            this.legendLabels[c5].innerHTML = d4;
          }
        } else "mouseout" !== e8.type && "touchend" !== e8.type || (o8.classList.remove("apexcharts-active"), s5.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), s5.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t7) {
          var e9 = t7.getAttribute("data:default-text");
          t7.innerHTML = decodeURIComponent(e9);
        }));
      } }, { key: "handleStickyTooltip", value: function(t6, e8, i8, a4) {
        var s5 = this.w, r7 = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a4.hoverArea, elGrid: a4.elGrid, clientX: e8, clientY: i8 }), o8 = r7.j, n7 = r7.capturedSeries;
        s5.globals.collapsedSeriesIndices.includes(n7) && (n7 = null);
        var l4 = a4.elGrid.getBoundingClientRect();
        if (r7.hoverX < 0 || r7.hoverX > l4.width) this.handleMouseOut(a4);
        else if (null !== n7) this.handleStickyCapturedSeries(t6, n7, a4, o8);
        else if (this.tooltipUtil.isXoverlap(o8) || s5.globals.isBarHorizontal) {
          var h4 = s5.globals.series.findIndex(function(t7, e9) {
            return !s5.globals.collapsedSeriesIndices.includes(e9);
          });
          this.create(t6, this, h4, o8, a4.ttItems);
        }
      } }, { key: "handleStickyCapturedSeries", value: function(t6, e8, i8, a4) {
        var s5 = this.w;
        if (!this.tConfig.shared && null === s5.globals.series[e8][a4]) return void this.handleMouseOut(i8);
        if (void 0 !== s5.globals.series[e8][a4]) this.tConfig.shared && this.tooltipUtil.isXoverlap(a4) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t6, this, e8, a4, i8.ttItems) : this.create(t6, this, e8, a4, i8.ttItems, false);
        else if (this.tooltipUtil.isXoverlap(a4)) {
          var r7 = s5.globals.series.findIndex(function(t7, e9) {
            return !s5.globals.collapsedSeriesIndices.includes(e9);
          });
          this.create(t6, this, r7, a4, i8.ttItems);
        }
      } }, { key: "deactivateHoverFilter", value: function() {
        for (var t6 = this.w, e8 = new k2(this.ctx), i8 = t6.globals.dom.Paper.select(".apexcharts-bar-area"), a4 = 0; a4 < i8.length; a4++) e8.pathMouseLeave(i8[a4]);
      } }, { key: "handleMouseOut", value: function(t6) {
        var e8 = this.w, i8 = this.getElXCrosshairs();
        if (e8.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t6.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e8.config.chart.type && this.marker.resetPointsSize(), null !== i8 && i8.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
          null === this.yaxisTTEls && (this.yaxisTTEls = e8.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
          for (var a4 = 0; a4 < this.yaxisTTEls.length; a4++) this.yaxisTTEls[a4].classList.remove("apexcharts-active");
        }
        e8.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t7) {
          var e9 = t7.getAttribute("data:default-text");
          t7.innerHTML = decodeURIComponent(e9);
        });
      } }, { key: "markerClick", value: function(t6, e8, i8) {
        var a4 = this.w;
        "function" == typeof a4.config.chart.events.markerClick && a4.config.chart.events.markerClick(t6, this.ctx, { seriesIndex: e8, dataPointIndex: i8, w: a4 }), this.ctx.events.fireEvent("markerClick", [t6, this.ctx, { seriesIndex: e8, dataPointIndex: i8, w: a4 }]);
      } }, { key: "create", value: function(t6, e8, i8, a4, s5) {
        var r7, o8, n7, l4, h4, c5, d4, u4, f4, p4, x3, b4, v3, m3, y4, w3, A3 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, S4 = this.w, C4 = e8;
        "mouseup" === t6.type && this.markerClick(t6, i8, a4), null === A3 && (A3 = this.tConfig.shared);
        var L3 = this.tooltipUtil.hasMarkers(i8), P3 = this.tooltipUtil.getElBars();
        if (S4.config.legend.tooltipHoverFormatter) {
          var M3 = S4.config.legend.tooltipHoverFormatter, I3 = Array.from(this.legendLabels);
          I3.forEach(function(t7) {
            var e9 = t7.getAttribute("data:default-text");
            t7.innerHTML = decodeURIComponent(e9);
          });
          for (var T3 = 0; T3 < I3.length; T3++) {
            var z3 = I3[T3], X2 = parseInt(z3.getAttribute("i"), 10), E3 = decodeURIComponent(z3.getAttribute("data:default-text")), Y2 = M3(E3, { seriesIndex: A3 ? X2 : i8, dataPointIndex: a4, w: S4 });
            if (A3) z3.innerHTML = S4.globals.collapsedSeriesIndices.indexOf(X2) < 0 ? Y2 : E3;
            else if (z3.innerHTML = X2 === i8 ? Y2 : E3, i8 === X2) break;
          }
        }
        var R3 = g2(g2({ ttItems: s5, i: i8, j: a4 }, void 0 !== (null === (r7 = S4.globals.seriesRange) || void 0 === r7 || null === (o8 = r7[i8]) || void 0 === o8 || null === (n7 = o8[a4]) || void 0 === n7 || null === (l4 = n7.y[0]) || void 0 === l4 ? void 0 : l4.y1) && { y1: null === (h4 = S4.globals.seriesRange) || void 0 === h4 || null === (c5 = h4[i8]) || void 0 === c5 || null === (d4 = c5[a4]) || void 0 === d4 || null === (u4 = d4.y[0]) || void 0 === u4 ? void 0 : u4.y1 }), void 0 !== (null === (f4 = S4.globals.seriesRange) || void 0 === f4 || null === (p4 = f4[i8]) || void 0 === p4 || null === (x3 = p4[a4]) || void 0 === x3 || null === (b4 = x3.y[0]) || void 0 === b4 ? void 0 : b4.y2) && { y2: null === (v3 = S4.globals.seriesRange) || void 0 === v3 || null === (m3 = v3[i8]) || void 0 === m3 || null === (y4 = m3[a4]) || void 0 === y4 || null === (w3 = y4.y[0]) || void 0 === w3 ? void 0 : w3.y2 });
        if (A3) {
          if (C4.tooltipLabels.drawSeriesTexts(g2(g2({}, R3), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), L3) S4.globals.markers.largestSize > 0 ? C4.marker.enlargePoints(a4) : C4.tooltipPosition.moveDynamicPointsOnHover(a4);
          else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(P3), this.barSeriesHeight > 0)) {
            var F2 = new k2(this.ctx), D3 = S4.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a4, "']"));
            this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a4, i8);
            for (var H3 = 0; H3 < D3.length; H3++) F2.pathMouseEnter(D3[H3]);
          }
        } else C4.tooltipLabels.drawSeriesTexts(g2({ shared: false }, R3)), this.tooltipUtil.hasBars() && C4.tooltipPosition.moveStickyTooltipOverBars(a4, i8), L3 && C4.tooltipPosition.moveMarkers(i8, a4);
      } }]), t5;
    }();
    var kt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.barCtx = e8, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
      }
      return s4(t5, [{ key: "handleBarDataLabels", value: function(t6) {
        var e8, i8, a4 = t6.x, s5 = t6.y, r7 = t6.y1, o8 = t6.y2, n7 = t6.i, l4 = t6.j, h4 = t6.realIndex, c5 = t6.columnGroupIndex, d4 = t6.series, u4 = t6.barHeight, f4 = t6.barWidth, p4 = t6.barXPosition, x3 = t6.barYPosition, b4 = t6.visibleSeries, v3 = t6.renderedPath, m3 = this.w, y4 = new k2(this.barCtx.ctx), w3 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h4] : this.barCtx.strokeWidth;
        m3.globals.isXNumeric && !m3.globals.isBarHorizontal ? (e8 = a4 + parseFloat(f4 * (b4 + 1)), i8 = s5 + parseFloat(u4 * (b4 + 1)) - w3) : (e8 = a4 + parseFloat(f4 * b4), i8 = s5 + parseFloat(u4 * b4));
        var A3, S4 = null, C4 = a4, L3 = s5, P3 = {}, M3 = m3.config.dataLabels, I3 = this.barCtx.barOptions.dataLabels, T3 = this.barCtx.barOptions.dataLabels.total;
        void 0 !== x3 && this.barCtx.isRangeBar && (i8 = x3, L3 = x3), void 0 !== p4 && this.barCtx.isVerticalGroupedRangeBar && (e8 = p4, C4 = p4);
        var z3 = M3.offsetX, X2 = M3.offsetY, E3 = { width: 0, height: 0 };
        if (m3.config.dataLabels.enabled) {
          var Y2 = m3.globals.series[n7][l4];
          E3 = y4.getTextRects(m3.config.dataLabels.formatter ? m3.config.dataLabels.formatter(Y2, g2(g2({}, m3), {}, { seriesIndex: n7, dataPointIndex: l4, w: m3 })) : m3.globals.yLabelFormatters[0](Y2), parseFloat(M3.style.fontSize));
        }
        var R3 = { x: a4, y: s5, i: n7, j: l4, realIndex: h4, columnGroupIndex: c5, renderedPath: v3, bcx: e8, bcy: i8, barHeight: u4, barWidth: f4, textRects: E3, strokeWidth: w3, dataLabelsX: C4, dataLabelsY: L3, dataLabelsConfig: M3, barDataLabelsConfig: I3, barTotalDataLabelsConfig: T3, offX: z3, offY: X2 };
        return P3 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(R3) : this.calculateColumnsDataLabelsPosition(R3), v3.attr({ cy: P3.bcy, cx: P3.bcx, j: l4, val: m3.globals.series[n7][l4], barHeight: u4, barWidth: f4 }), A3 = this.drawCalculatedDataLabels({ x: P3.dataLabelsX, y: P3.dataLabelsY, val: this.barCtx.isRangeBar ? [r7, o8] : "100%" === m3.config.chart.stackType ? d4[h4][l4] : m3.globals.series[h4][l4], i: h4, j: l4, barWidth: f4, barHeight: u4, textRects: E3, dataLabelsConfig: M3 }), m3.config.chart.stacked && T3.enabled && (S4 = this.drawTotalDataLabels({ x: P3.totalDataLabelsX, y: P3.totalDataLabelsY, barWidth: f4, barHeight: u4, realIndex: h4, textAnchor: P3.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: h4, j: l4 }), dataLabelsConfig: M3, barTotalDataLabelsConfig: T3 })), { dataLabels: A3, totalDataLabels: S4 };
      } }, { key: "getStackedTotalDataLabel", value: function(t6) {
        var e8 = t6.realIndex, i8 = t6.j, a4 = this.w, s5 = this.barCtx.stackedSeriesTotals[i8];
        return this.totalFormatter && (s5 = this.totalFormatter(s5, g2(g2({}, a4), {}, { seriesIndex: e8, dataPointIndex: i8, w: a4 }))), s5;
      } }, { key: "calculateColumnsDataLabelsPosition", value: function(t6) {
        var e8 = this.w, i8 = t6.i, a4 = t6.j, s5 = t6.realIndex;
        t6.columnGroupIndex;
        var r7, o8, n7 = t6.y, l4 = t6.bcx, h4 = t6.barWidth, c5 = t6.barHeight, d4 = t6.textRects, g3 = t6.dataLabelsX, u4 = t6.dataLabelsY, f4 = t6.dataLabelsConfig, p4 = t6.barDataLabelsConfig, x3 = t6.barTotalDataLabelsConfig, b4 = t6.strokeWidth, v3 = t6.offX, m3 = t6.offY, y4 = l4;
        c5 = Math.abs(c5);
        var w3 = "vertical" === e8.config.plotOptions.bar.dataLabels.orientation, A3 = this.barCtx.barHelpers.getZeroValueEncounters({ i: i8, j: a4 }).zeroEncounters;
        l4 -= b4 / 2;
        var S4 = e8.globals.gridWidth / e8.globals.dataPoints;
        if (this.barCtx.isVerticalGroupedRangeBar ? g3 += h4 / 2 : (g3 = e8.globals.isXNumeric ? l4 - h4 / 2 + v3 : l4 - S4 + h4 / 2 + v3, A3 > 0 && e8.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g3 -= h4 * A3)), w3) {
          g3 = g3 + d4.height / 2 - b4 / 2 - 2;
        }
        var C4 = e8.globals.series[i8][a4] < 0, L3 = n7;
        switch (this.barCtx.isReversed && (L3 = n7 + (C4 ? c5 : -c5)), p4.position) {
          case "center":
            u4 = w3 ? C4 ? L3 - c5 / 2 + m3 : L3 + c5 / 2 - m3 : C4 ? L3 - c5 / 2 + d4.height / 2 + m3 : L3 + c5 / 2 + d4.height / 2 - m3;
            break;
          case "bottom":
            u4 = w3 ? C4 ? L3 - c5 + m3 : L3 + c5 - m3 : C4 ? L3 - c5 + d4.height + b4 + m3 : L3 + c5 - d4.height / 2 + b4 - m3;
            break;
          case "top":
            u4 = w3 ? C4 ? L3 + m3 : L3 - m3 : C4 ? L3 - d4.height / 2 - m3 : L3 + d4.height + m3;
        }
        if (this.barCtx.lastActiveBarSerieIndex === s5 && x3.enabled) {
          var P3 = new k2(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: s5, j: a4 }), f4.fontSize);
          r7 = C4 ? L3 - P3.height / 2 - m3 - x3.offsetY + 18 : L3 + P3.height + m3 + x3.offsetY - 18;
          var M3 = S4;
          o8 = y4 + (e8.globals.isXNumeric ? -h4 * e8.globals.barGroups.length / 2 : e8.globals.barGroups.length * h4 / 2 - (e8.globals.barGroups.length - 1) * h4 - M3) + x3.offsetX;
        }
        return e8.config.chart.stacked || (u4 < 0 ? u4 = 0 + b4 : u4 + d4.height / 3 > e8.globals.gridHeight && (u4 = e8.globals.gridHeight - b4)), { bcx: l4, bcy: n7, dataLabelsX: g3, dataLabelsY: u4, totalDataLabelsX: o8, totalDataLabelsY: r7, totalDataLabelsAnchor: "middle" };
      } }, { key: "calculateBarsDataLabelsPosition", value: function(t6) {
        var e8 = this.w, i8 = t6.x, a4 = t6.i, s5 = t6.j, r7 = t6.realIndex, o8 = t6.bcy, n7 = t6.barHeight, l4 = t6.barWidth, h4 = t6.textRects, c5 = t6.dataLabelsX, d4 = t6.strokeWidth, g3 = t6.dataLabelsConfig, u4 = t6.barDataLabelsConfig, f4 = t6.barTotalDataLabelsConfig, p4 = t6.offX, x3 = t6.offY, b4 = e8.globals.gridHeight / e8.globals.dataPoints;
        l4 = Math.abs(l4);
        var v3, m3, y4 = o8 - (this.barCtx.isRangeBar ? 0 : b4) + n7 / 2 + h4.height / 2 + x3 - 3, w3 = "start", A3 = e8.globals.series[a4][s5] < 0, S4 = i8;
        switch (this.barCtx.isReversed && (S4 = i8 + (A3 ? -l4 : l4), w3 = A3 ? "start" : "end"), u4.position) {
          case "center":
            c5 = A3 ? S4 + l4 / 2 - p4 : Math.max(h4.width / 2, S4 - l4 / 2) + p4;
            break;
          case "bottom":
            c5 = A3 ? S4 + l4 - d4 - p4 : S4 - l4 + d4 + p4;
            break;
          case "top":
            c5 = A3 ? S4 - d4 - p4 : S4 - d4 + p4;
        }
        if (this.barCtx.lastActiveBarSerieIndex === r7 && f4.enabled) {
          var C4 = new k2(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r7, j: s5 }), g3.fontSize);
          A3 ? (v3 = S4 - d4 - p4 - f4.offsetX, w3 = "end") : v3 = S4 + p4 + f4.offsetX + (this.barCtx.isReversed ? -(l4 + d4) : d4), m3 = y4 - h4.height / 2 + C4.height / 2 + f4.offsetY + d4;
        }
        return e8.config.chart.stacked || ("start" === g3.textAnchor ? c5 - h4.width < 0 ? c5 = A3 ? h4.width + d4 : d4 : c5 + h4.width > e8.globals.gridWidth && (c5 = A3 ? e8.globals.gridWidth - d4 : e8.globals.gridWidth - h4.width - d4) : "middle" === g3.textAnchor ? c5 - h4.width / 2 < 0 ? c5 = h4.width / 2 + d4 : c5 + h4.width / 2 > e8.globals.gridWidth && (c5 = e8.globals.gridWidth - h4.width / 2 - d4) : "end" === g3.textAnchor && (c5 < 1 ? c5 = h4.width + d4 : c5 + 1 > e8.globals.gridWidth && (c5 = e8.globals.gridWidth - h4.width - d4))), { bcx: i8, bcy: o8, dataLabelsX: c5, dataLabelsY: y4, totalDataLabelsX: v3, totalDataLabelsY: m3, totalDataLabelsAnchor: w3 };
      } }, { key: "drawCalculatedDataLabels", value: function(t6) {
        var e8 = t6.x, i8 = t6.y, a4 = t6.val, s5 = t6.i, r7 = t6.j, o8 = t6.textRects, n7 = t6.barHeight, l4 = t6.barWidth, h4 = t6.dataLabelsConfig, c5 = this.w, d4 = "rotate(0)";
        "vertical" === c5.config.plotOptions.bar.dataLabels.orientation && (d4 = "rotate(-90, ".concat(e8, ", ").concat(i8, ")"));
        var u4 = new G(this.barCtx.ctx), f4 = new k2(this.barCtx.ctx), p4 = h4.formatter, x3 = null, b4 = c5.globals.collapsedSeriesIndices.indexOf(s5) > -1;
        if (h4.enabled && !b4) {
          x3 = f4.group({ class: "apexcharts-data-labels", transform: d4 });
          var v3 = "";
          void 0 !== a4 && (v3 = p4(a4, g2(g2({}, c5), {}, { seriesIndex: s5, dataPointIndex: r7, w: c5 }))), !a4 && c5.config.plotOptions.bar.hideZeroBarsWhenGrouped && (v3 = "");
          var m3 = c5.globals.series[s5][r7] < 0, y4 = c5.config.plotOptions.bar.dataLabels.position;
          if ("vertical" === c5.config.plotOptions.bar.dataLabels.orientation && ("top" === y4 && (h4.textAnchor = m3 ? "end" : "start"), "center" === y4 && (h4.textAnchor = "middle"), "bottom" === y4 && (h4.textAnchor = m3 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) l4 < f4.getTextRects(v3, parseFloat(h4.style.fontSize)).width && (v3 = "");
          c5.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o8.width / 1.6 > Math.abs(l4) && (v3 = "") : o8.height / 1.6 > Math.abs(n7) && (v3 = ""));
          var w3 = g2({}, h4);
          this.barCtx.isHorizontal && a4 < 0 && ("start" === h4.textAnchor ? w3.textAnchor = "end" : "end" === h4.textAnchor && (w3.textAnchor = "start")), u4.plotDataLabelsText({ x: e8, y: i8, text: v3, i: s5, j: r7, parent: x3, dataLabelsConfig: w3, alwaysDrawDataLabel: true, offsetCorrection: true });
        }
        return x3;
      } }, { key: "drawTotalDataLabels", value: function(t6) {
        var e8 = t6.x, i8 = t6.y, a4 = t6.val, s5 = t6.realIndex, r7 = t6.textAnchor, o8 = t6.barTotalDataLabelsConfig;
        this.w;
        var n7, l4 = new k2(this.barCtx.ctx);
        return o8.enabled && void 0 !== e8 && void 0 !== i8 && this.barCtx.lastActiveBarSerieIndex === s5 && (n7 = l4.drawText({ x: e8, y: i8, foreColor: o8.style.color, text: a4, textAnchor: r7, fontFamily: o8.style.fontFamily, fontSize: o8.style.fontSize, fontWeight: o8.style.fontWeight })), n7;
      } }]), t5;
    }();
    var At = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.barCtx = e8;
      }
      return s4(t5, [{ key: "initVariables", value: function(t6) {
        var e8 = this.w;
        this.barCtx.series = t6, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
        for (var i8 = 0; i8 < t6.length; i8++) if (t6[i8].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t6[i8].length), e8.globals.isXNumeric) for (var a4 = 0; a4 < t6[i8].length; a4++) e8.globals.seriesX[i8][a4] > e8.globals.minX && e8.globals.seriesX[i8][a4] < e8.globals.maxX && this.barCtx.visibleItems++;
        else this.barCtx.visibleItems = e8.globals.dataPoints;
        this.arrBorderRadius = this.createBorderRadiusArr(e8.globals.series), 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e8.globals.comboCharts || this.checkZeroSeries({ series: t6 });
      } }, { key: "initialPositions", value: function() {
        var t6, e8, i8, a4, s5, r7, o8, n7, l4 = this.w, h4 = l4.globals.dataPoints;
        this.barCtx.isRangeBar && (h4 = l4.globals.labels.length);
        var c5 = this.barCtx.seriesLen;
        if (l4.config.plotOptions.bar.rangeBarGroupRows && (c5 = 1), this.barCtx.isHorizontal) s5 = (i8 = l4.globals.gridHeight / h4) / c5, l4.globals.isXNumeric && (s5 = (i8 = l4.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s5 = s5 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (s5 = parseInt(this.barCtx.barOptions.barHeight, 10)), n7 = this.barCtx.baseLineInvertedY + l4.globals.padHorizontal + (this.barCtx.isReversed ? l4.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (n7 = l4.globals.gridWidth / 2), e8 = (i8 - s5 * this.barCtx.seriesLen) / 2;
        else {
          if (a4 = l4.globals.gridWidth / this.barCtx.visibleItems, l4.config.xaxis.convertedCatToNumeric && (a4 = l4.globals.gridWidth / l4.globals.dataPoints), r7 = a4 / c5 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l4.globals.isXNumeric) {
            var d4 = this.barCtx.xRatio;
            l4.globals.minXDiff && 0.5 !== l4.globals.minXDiff && l4.globals.minXDiff / d4 > 0 && (a4 = l4.globals.minXDiff / d4), (r7 = a4 / c5 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r7 = 1);
          }
          -1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (r7 = parseInt(this.barCtx.barOptions.columnWidth, 10)), o8 = l4.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? l4.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), t6 = l4.globals.padHorizontal + (a4 - r7 * this.barCtx.seriesLen) / 2;
        }
        return l4.globals.barHeight = s5, l4.globals.barWidth = r7, { x: t6, y: e8, yDivision: i8, xDivision: a4, barHeight: s5, barWidth: r7, zeroH: o8, zeroW: n7 };
      } }, { key: "initializeStackedPrevVars", value: function(t6) {
        t6.w.globals.seriesGroups.forEach(function(e8) {
          t6[e8] || (t6[e8] = {}), t6[e8].prevY = [], t6[e8].prevX = [], t6[e8].prevYF = [], t6[e8].prevXF = [], t6[e8].prevYVal = [], t6[e8].prevXVal = [];
        });
      } }, { key: "initializeStackedXYVars", value: function(t6) {
        t6.w.globals.seriesGroups.forEach(function(e8) {
          t6[e8] || (t6[e8] = {}), t6[e8].xArrj = [], t6[e8].xArrjF = [], t6[e8].xArrjVal = [], t6[e8].yArrj = [], t6[e8].yArrjF = [], t6[e8].yArrjVal = [];
        });
      } }, { key: "getPathFillColor", value: function(t6, e8, i8, a4) {
        var s5, r7, o8, n7, l4, h4 = this.w, c5 = this.barCtx.ctx.fill, d4 = null, g3 = this.barCtx.barOptions.distributed ? i8 : e8;
        this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(a5) {
          t6[e8][i8] >= a5.from && t6[e8][i8] <= a5.to && (d4 = a5.color);
        });
        return null !== (s5 = h4.config.series[e8].data[i8]) && void 0 !== s5 && s5.fillColor && (d4 = h4.config.series[e8].data[i8].fillColor), c5.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? g3 : a4, dataPointIndex: i8, color: d4, value: t6[e8][i8], fillConfig: null === (r7 = h4.config.series[e8].data[i8]) || void 0 === r7 ? void 0 : r7.fill, fillType: null !== (o8 = h4.config.series[e8].data[i8]) && void 0 !== o8 && null !== (n7 = o8.fill) && void 0 !== n7 && n7.type ? null === (l4 = h4.config.series[e8].data[i8]) || void 0 === l4 ? void 0 : l4.fill.type : Array.isArray(h4.config.fill.type) ? h4.config.fill.type[a4] : h4.config.fill.type });
      } }, { key: "getStrokeWidth", value: function(t6, e8, i8) {
        var a4 = 0, s5 = this.w;
        return this.barCtx.series[t6][e8] ? this.barCtx.isNullValue = false : this.barCtx.isNullValue = true, s5.config.stroke.show && (this.barCtx.isNullValue || (a4 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i8] : this.barCtx.strokeWidth)), a4;
      } }, { key: "createBorderRadiusArr", value: function(t6) {
        var e8 = this.w, i8 = !this.w.config.chart.stacked || "last" !== e8.config.plotOptions.bar.borderRadiusWhenStacked || e8.config.plotOptions.bar.borderRadius <= 0, a4 = t6.length, s5 = t6[0].length, o8 = Array.from({ length: a4 }, function() {
          return Array(s5).fill(i8 ? "top" : "none");
        });
        if (i8) return o8;
        for (var n7 = 0; n7 < s5; n7++) {
          for (var l4 = [], h4 = [], c5 = 0, d4 = 0; d4 < a4; d4++) {
            var g3 = t6[d4][n7];
            g3 > 0 ? (l4.push(d4), c5++) : g3 < 0 && (h4.push(d4), c5++);
          }
          if (l4.length > 0 && 0 === h4.length) if (1 === l4.length) o8[l4[0]][n7] = "both";
          else {
            var u4, f4 = l4[0], p4 = l4[l4.length - 1], x3 = r6(l4);
            try {
              for (x3.s(); !(u4 = x3.n()).done; ) {
                var b4 = u4.value;
                o8[b4][n7] = b4 === f4 ? "bottom" : b4 === p4 ? "top" : "none";
              }
            } catch (t7) {
              x3.e(t7);
            } finally {
              x3.f();
            }
          }
          else if (h4.length > 0 && 0 === l4.length) if (1 === h4.length) o8[h4[0]][n7] = "both";
          else {
            var v3, m3 = h4[0], y4 = h4[h4.length - 1], w3 = r6(h4);
            try {
              for (w3.s(); !(v3 = w3.n()).done; ) {
                var k3 = v3.value;
                o8[k3][n7] = k3 === m3 ? "bottom" : k3 === y4 ? "top" : "none";
              }
            } catch (t7) {
              w3.e(t7);
            } finally {
              w3.f();
            }
          }
          else if (l4.length > 0 && h4.length > 0) {
            var A3, S4 = l4[l4.length - 1], C4 = r6(l4);
            try {
              for (C4.s(); !(A3 = C4.n()).done; ) {
                var L3 = A3.value;
                o8[L3][n7] = L3 === S4 ? "top" : "none";
              }
            } catch (t7) {
              C4.e(t7);
            } finally {
              C4.f();
            }
            var P3, M3 = h4[h4.length - 1], I3 = r6(h4);
            try {
              for (I3.s(); !(P3 = I3.n()).done; ) {
                var T3 = P3.value;
                o8[T3][n7] = T3 === M3 ? "bottom" : "none";
              }
            } catch (t7) {
              I3.e(t7);
            } finally {
              I3.f();
            }
          } else if (1 === c5) {
            o8[l4[0] || h4[0]][n7] = "both";
          }
        }
        return o8;
      } }, { key: "barBackground", value: function(t6) {
        var e8 = t6.j, i8 = t6.i, a4 = t6.x1, s5 = t6.x2, r7 = t6.y1, o8 = t6.y2, n7 = t6.elSeries, l4 = this.w, h4 = new k2(this.barCtx.ctx), c5 = new V2(this.barCtx.ctx).getActiveConfigSeriesIndex();
        if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c5 === i8) {
          e8 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e8 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
          var d4 = this.barCtx.barOptions.colors.backgroundBarColors[e8], g3 = h4.drawRect(void 0 !== a4 ? a4 : 0, void 0 !== r7 ? r7 : 0, void 0 !== s5 ? s5 : l4.globals.gridWidth, void 0 !== o8 ? o8 : l4.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d4, this.barCtx.barOptions.colors.backgroundBarOpacity);
          n7.add(g3), g3.node.classList.add("apexcharts-backgroundBar");
        }
      } }, { key: "getColumnPaths", value: function(t6) {
        var e8, i8 = t6.barWidth, a4 = t6.barXPosition, s5 = t6.y1, r7 = t6.y2, o8 = t6.strokeWidth, n7 = t6.isReversed, l4 = t6.series, h4 = t6.seriesGroup, c5 = t6.realIndex, d4 = t6.i, g3 = t6.j, u4 = t6.w, f4 = new k2(this.barCtx.ctx);
        (o8 = Array.isArray(o8) ? o8[c5] : o8) || (o8 = 0);
        var p4 = i8, x3 = a4;
        null !== (e8 = u4.config.series[c5].data[g3]) && void 0 !== e8 && e8.columnWidthOffset && (x3 = a4 - u4.config.series[c5].data[g3].columnWidthOffset / 2, p4 = i8 + u4.config.series[c5].data[g3].columnWidthOffset);
        var b4 = o8 / 2, v3 = x3 + b4, m3 = x3 + p4 - b4, y4 = (l4[d4][g3] >= 0 ? 1 : -1) * (n7 ? -1 : 1);
        s5 += 1e-3 - b4 * y4, r7 += 1e-3 + b4 * y4;
        var w3 = f4.move(v3, s5), A3 = f4.move(v3, s5), S4 = f4.line(m3, s5);
        if (u4.globals.previousPaths.length > 0 && (A3 = this.barCtx.getPreviousPath(c5, g3, false)), w3 = w3 + f4.line(v3, r7) + f4.line(m3, r7) + S4 + ("around" === u4.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c5][g3] ? " Z" : " z"), A3 = A3 + f4.line(v3, s5) + S4 + S4 + S4 + S4 + S4 + f4.line(v3, s5) + ("around" === u4.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c5][g3] ? " Z" : " z"), "none" !== this.arrBorderRadius[c5][g3] && (w3 = f4.roundPathCorners(w3, u4.config.plotOptions.bar.borderRadius)), u4.config.chart.stacked) {
          var C4 = this.barCtx;
          (C4 = this.barCtx[h4]).yArrj.push(r7 - b4 * y4), C4.yArrjF.push(Math.abs(s5 - r7 + o8 * y4)), C4.yArrjVal.push(this.barCtx.series[d4][g3]);
        }
        return { pathTo: w3, pathFrom: A3 };
      } }, { key: "getBarpaths", value: function(t6) {
        var e8, i8 = t6.barYPosition, a4 = t6.barHeight, s5 = t6.x1, r7 = t6.x2, o8 = t6.strokeWidth, n7 = t6.isReversed, l4 = t6.series, h4 = t6.seriesGroup, c5 = t6.realIndex, d4 = t6.i, g3 = t6.j, u4 = t6.w, f4 = new k2(this.barCtx.ctx);
        (o8 = Array.isArray(o8) ? o8[c5] : o8) || (o8 = 0);
        var p4 = i8, x3 = a4;
        null !== (e8 = u4.config.series[c5].data[g3]) && void 0 !== e8 && e8.barHeightOffset && (p4 = i8 - u4.config.series[c5].data[g3].barHeightOffset / 2, x3 = a4 + u4.config.series[c5].data[g3].barHeightOffset);
        var b4 = o8 / 2, v3 = p4 + b4, m3 = p4 + x3 - b4, y4 = (l4[d4][g3] >= 0 ? 1 : -1) * (n7 ? -1 : 1);
        s5 += 1e-3 + b4 * y4, r7 += 1e-3 - b4 * y4;
        var w3 = f4.move(s5, v3), A3 = f4.move(s5, v3);
        u4.globals.previousPaths.length > 0 && (A3 = this.barCtx.getPreviousPath(c5, g3, false));
        var S4 = f4.line(s5, m3);
        if (w3 = w3 + f4.line(r7, v3) + f4.line(r7, m3) + S4 + ("around" === u4.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c5][g3] ? " Z" : " z"), A3 = A3 + f4.line(s5, v3) + S4 + S4 + S4 + S4 + S4 + f4.line(s5, v3) + ("around" === u4.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c5][g3] ? " Z" : " z"), "none" !== this.arrBorderRadius[c5][g3] && (w3 = f4.roundPathCorners(w3, u4.config.plotOptions.bar.borderRadius)), u4.config.chart.stacked) {
          var C4 = this.barCtx;
          (C4 = this.barCtx[h4]).xArrj.push(r7 + b4 * y4), C4.xArrjF.push(Math.abs(s5 - r7 - o8 * y4)), C4.xArrjVal.push(this.barCtx.series[d4][g3]);
        }
        return { pathTo: w3, pathFrom: A3 };
      } }, { key: "checkZeroSeries", value: function(t6) {
        for (var e8 = t6.series, i8 = this.w, a4 = 0; a4 < e8.length; a4++) {
          for (var s5 = 0, r7 = 0; r7 < e8[i8.globals.maxValsInArrayIndex].length; r7++) s5 += e8[a4][r7];
          0 === s5 && this.barCtx.zeroSerieses.push(a4);
        }
      } }, { key: "getXForValue", value: function(t6, e8) {
        var i8 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? e8 : null;
        return null != t6 && (i8 = e8 + t6 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t6 / this.barCtx.invertedYRatio : 0)), i8;
      } }, { key: "getYForValue", value: function(t6, e8, i8) {
        var a4 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3] ? e8 : null;
        return null != t6 && (a4 = e8 - t6 / this.barCtx.yRatio[i8] + 2 * (this.barCtx.isReversed ? t6 / this.barCtx.yRatio[i8] : 0)), a4;
      } }, { key: "getGoalValues", value: function(t6, e8, i8, a4, s5, r7) {
        var o8 = this, l4 = this.w, h4 = [], c5 = function(a5, s6) {
          var l5;
          h4.push((n6(l5 = {}, t6, "x" === t6 ? o8.getXForValue(a5, e8, false) : o8.getYForValue(a5, i8, r7, false)), n6(l5, "attrs", s6), l5));
        };
        if (l4.globals.seriesGoals[a4] && l4.globals.seriesGoals[a4][s5] && Array.isArray(l4.globals.seriesGoals[a4][s5]) && l4.globals.seriesGoals[a4][s5].forEach(function(t7) {
          c5(t7.value, t7);
        }), this.barCtx.barOptions.isDumbbell && l4.globals.seriesRange.length) {
          var d4 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : l4.globals.colors, u4 = { strokeHeight: "x" === t6 ? 0 : l4.globals.markers.size[a4], strokeWidth: "x" === t6 ? l4.globals.markers.size[a4] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(d4[a4]) ? d4[a4][0] : d4[a4] };
          c5(l4.globals.seriesRangeStart[a4][s5], u4), c5(l4.globals.seriesRangeEnd[a4][s5], g2(g2({}, u4), {}, { strokeColor: Array.isArray(d4[a4]) ? d4[a4][1] : d4[a4] }));
        }
        return h4;
      } }, { key: "drawGoalLine", value: function(t6) {
        var e8 = t6.barXPosition, i8 = t6.barYPosition, a4 = t6.goalX, s5 = t6.goalY, r7 = t6.barWidth, o8 = t6.barHeight, n7 = new k2(this.barCtx.ctx), l4 = n7.group({ className: "apexcharts-bar-goals-groups" });
        l4.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: l4.node }), l4.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
        var h4 = null;
        return this.barCtx.isHorizontal ? Array.isArray(a4) && a4.forEach(function(t7) {
          if (t7.x >= -1 && t7.x <= n7.w.globals.gridWidth + 1) {
            var e9 = void 0 !== t7.attrs.strokeHeight ? t7.attrs.strokeHeight : o8 / 2, a5 = i8 + e9 + o8 / 2;
            h4 = n7.drawLine(t7.x, a5 - 2 * e9, t7.x, a5, t7.attrs.strokeColor ? t7.attrs.strokeColor : void 0, t7.attrs.strokeDashArray, t7.attrs.strokeWidth ? t7.attrs.strokeWidth : 2, t7.attrs.strokeLineCap), l4.add(h4);
          }
        }) : Array.isArray(s5) && s5.forEach(function(t7) {
          if (t7.y >= -1 && t7.y <= n7.w.globals.gridHeight + 1) {
            var i9 = void 0 !== t7.attrs.strokeWidth ? t7.attrs.strokeWidth : r7 / 2, a5 = e8 + i9 + r7 / 2;
            h4 = n7.drawLine(a5 - 2 * i9, t7.y, a5, t7.y, t7.attrs.strokeColor ? t7.attrs.strokeColor : void 0, t7.attrs.strokeDashArray, t7.attrs.strokeHeight ? t7.attrs.strokeHeight : 2, t7.attrs.strokeLineCap), l4.add(h4);
          }
        }), l4;
      } }, { key: "drawBarShadow", value: function(t6) {
        var e8 = t6.prevPaths, i8 = t6.currPaths, a4 = t6.color, s5 = this.w, r7 = e8.x, o8 = e8.x1, n7 = e8.barYPosition, l4 = i8.x, h4 = i8.x1, c5 = i8.barYPosition, d4 = n7 + i8.barHeight, g3 = new k2(this.barCtx.ctx), u4 = new m2(), f4 = g3.move(o8, d4) + g3.line(r7, d4) + g3.line(l4, c5) + g3.line(h4, c5) + g3.line(o8, d4) + ("around" === s5.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[realIndex][j] ? " Z" : " z");
        return g3.drawPath({ d: f4, fill: u4.shadeColor(0.5, m2.rgb2hex(a4)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
      } }, { key: "getZeroValueEncounters", value: function(t6) {
        var e8, i8 = t6.i, a4 = t6.j, s5 = this.w, r7 = 0, o8 = 0;
        return (s5.config.plotOptions.bar.horizontal ? s5.globals.series.map(function(t7, e9) {
          return e9;
        }) : (null === (e8 = s5.globals.columnSeries) || void 0 === e8 ? void 0 : e8.i.map(function(t7) {
          return t7;
        })) || []).forEach(function(t7) {
          var e9 = s5.globals.seriesPercent[t7][a4];
          e9 && r7++, t7 < i8 && 0 === e9 && o8++;
        }), { nonZeroColumns: r7, zeroEncounters: o8 };
      } }, { key: "getGroupIndex", value: function(t6) {
        var e8 = this.w, i8 = e8.globals.seriesGroups.findIndex(function(i9) {
          return i9.indexOf(e8.globals.seriesNames[t6]) > -1;
        }), a4 = this.barCtx.columnGroupIndices, s5 = a4.indexOf(i8);
        return s5 < 0 && (a4.push(i8), s5 = a4.length - 1), { groupIndex: i8, columnGroupIndex: s5 };
      } }]), t5;
    }();
    var St = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
        var s5 = this.w;
        this.barOptions = s5.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s5.config.stroke.width, this.isNullValue = false, this.isRangeBar = s5.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !s5.globals.isBarHorizontal && s5.globals.seriesRange.length && s5.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = a4, null !== this.xyRatios && (this.xRatio = a4.xRatio, this.yRatio = a4.yRatio, this.invertedXRatio = a4.invertedXRatio, this.invertedYRatio = a4.invertedYRatio, this.baseLineY = a4.baseLineY, this.baseLineInvertedY = a4.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
        var r7 = new V2(this.ctx);
        this.lastActiveBarSerieIndex = r7.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
        var o8 = r7.getBarSeriesIndices(), n7 = new A2(this.ctx);
        this.stackedSeriesTotals = n7.getStackedSeriesTotals(this.w.config.series.map(function(t6, e9) {
          return -1 === o8.indexOf(e9) ? e9 : -1;
        }).filter(function(t6) {
          return -1 !== t6;
        })), this.barHelpers = new At(this);
      }
      return s4(t5, [{ key: "draw", value: function(t6, e8) {
        var i8 = this.w, a4 = new k2(this.ctx), s5 = new A2(this.ctx, i8);
        t6 = s5.getLogSeries(t6), this.series = t6, this.yRatio = s5.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t6);
        var r7 = a4.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
        i8.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
        for (var o8 = 0, n7 = 0; o8 < t6.length; o8++, n7++) {
          var l4, h4, c5, d4, u4 = void 0, f4 = void 0, p4 = [], x3 = [], b4 = i8.globals.comboCharts ? e8[o8] : o8, v3 = this.barHelpers.getGroupIndex(b4).columnGroupIndex, y4 = a4.group({ class: "apexcharts-series", rel: o8 + 1, seriesName: m2.escapeString(i8.globals.seriesNames[b4]), "data:realIndex": b4 });
          this.ctx.series.addCollapsedClassToSeries(y4, b4), t6[o8].length > 0 && (this.visibleI = this.visibleI + 1);
          var w3 = 0, S4 = 0;
          this.yRatio.length > 1 && (this.yaxisIndex = i8.globals.seriesYAxisReverseMap[b4], this.translationsIndex = b4);
          var C4 = this.translationsIndex;
          this.isReversed = i8.config.yaxis[this.yaxisIndex] && i8.config.yaxis[this.yaxisIndex].reversed;
          var L3 = this.barHelpers.initialPositions();
          f4 = L3.y, w3 = L3.barHeight, h4 = L3.yDivision, d4 = L3.zeroW, u4 = L3.x, S4 = L3.barWidth, l4 = L3.xDivision, c5 = L3.zeroH, this.horizontal || x3.push(u4 + S4 / 2);
          var P3 = a4.group({ class: "apexcharts-datalabels", "data:realIndex": b4 });
          i8.globals.delayedElements.push({ el: P3.node }), P3.node.classList.add("apexcharts-element-hidden");
          var M3 = a4.group({ class: "apexcharts-bar-goals-markers" }), I3 = a4.group({ class: "apexcharts-bar-shadows" });
          i8.globals.delayedElements.push({ el: I3.node }), I3.node.classList.add("apexcharts-element-hidden");
          for (var T3 = 0; T3 < t6[o8].length; T3++) {
            var z3 = this.barHelpers.getStrokeWidth(o8, T3, b4), X2 = null, E3 = { indexes: { i: o8, j: T3, realIndex: b4, translationsIndex: C4, bc: n7 }, x: u4, y: f4, strokeWidth: z3, elSeries: y4 };
            this.isHorizontal ? (X2 = this.drawBarPaths(g2(g2({}, E3), {}, { barHeight: w3, zeroW: d4, yDivision: h4 })), S4 = this.series[o8][T3] / this.invertedYRatio) : (X2 = this.drawColumnPaths(g2(g2({}, E3), {}, { xDivision: l4, barWidth: S4, zeroH: c5 })), w3 = this.series[o8][T3] / this.yRatio[C4]);
            var Y2 = this.barHelpers.getPathFillColor(t6, o8, T3, b4);
            if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && T3 > 0) {
              var R3 = this.barHelpers.drawBarShadow({ color: "string" == typeof Y2 && -1 === (null == Y2 ? void 0 : Y2.indexOf("url")) ? Y2 : m2.hexToRgba(i8.globals.colors[o8]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: X2 });
              R3 && I3.add(R3);
            }
            this.pathArr.push(X2);
            var F2 = this.barHelpers.drawGoalLine({ barXPosition: X2.barXPosition, barYPosition: X2.barYPosition, goalX: X2.goalX, goalY: X2.goalY, barHeight: w3, barWidth: S4 });
            F2 && M3.add(F2), f4 = X2.y, u4 = X2.x, T3 > 0 && x3.push(u4 + S4 / 2), p4.push(f4), this.renderSeries({ realIndex: b4, pathFill: Y2, j: T3, i: o8, columnGroupIndex: v3, pathFrom: X2.pathFrom, pathTo: X2.pathTo, strokeWidth: z3, elSeries: y4, x: u4, y: f4, series: t6, barHeight: Math.abs(X2.barHeight ? X2.barHeight : w3), barWidth: Math.abs(X2.barWidth ? X2.barWidth : S4), elDataLabelsWrap: P3, elGoalsMarkers: M3, elBarShadows: I3, visibleSeries: this.visibleI, type: "bar" });
          }
          i8.globals.seriesXvalues[b4] = x3, i8.globals.seriesYvalues[b4] = p4, r7.add(y4);
        }
        return r7;
      } }, { key: "renderSeries", value: function(t6) {
        var e8 = t6.realIndex, i8 = t6.pathFill, a4 = t6.lineFill, s5 = t6.j, r7 = t6.i, o8 = t6.columnGroupIndex, n7 = t6.pathFrom, l4 = t6.pathTo, h4 = t6.strokeWidth, c5 = t6.elSeries, d4 = t6.x, g3 = t6.y, u4 = t6.y1, f4 = t6.y2, p4 = t6.series, x3 = t6.barHeight, b4 = t6.barWidth, v3 = t6.barXPosition, m3 = t6.barYPosition, y4 = t6.elDataLabelsWrap, A3 = t6.elGoalsMarkers, S4 = t6.elBarShadows, C4 = t6.visibleSeries, L3 = t6.type, P3 = t6.classes, M3 = this.w, I3 = new k2(this.ctx);
        if (!a4) {
          var T3 = "function" == typeof M3.globals.stroke.colors[e8] ? function(t7) {
            var e9, i9 = M3.config.stroke.colors;
            return Array.isArray(i9) && i9.length > 0 && ((e9 = i9[t7]) || (e9 = ""), "function" == typeof e9) ? e9({ value: M3.globals.series[t7][s5], dataPointIndex: s5, w: M3 }) : e9;
          }(e8) : M3.globals.stroke.colors[e8];
          a4 = this.barOptions.distributed ? M3.globals.stroke.colors[s5] : T3;
        }
        M3.config.series[r7].data[s5] && M3.config.series[r7].data[s5].strokeColor && (a4 = M3.config.series[r7].data[s5].strokeColor), this.isNullValue && (i8 = "none");
        var z3 = s5 / M3.config.chart.animations.animateGradually.delay * (M3.config.chart.animations.speed / M3.globals.dataPoints) / 2.4, X2 = I3.renderPaths({ i: r7, j: s5, realIndex: e8, pathFrom: n7, pathTo: l4, stroke: a4, strokeWidth: h4, strokeLineCap: M3.config.stroke.lineCap, fill: i8, animationDelay: z3, initialSpeed: M3.config.chart.animations.speed, dataChangeSpeed: M3.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(L3, "-area ").concat(P3), chartType: L3 });
        X2.attr("clip-path", "url(#gridRectBarMask".concat(M3.globals.cuid, ")"));
        var E3 = M3.config.forecastDataPoints;
        E3.count > 0 && s5 >= M3.globals.dataPoints - E3.count && (X2.node.setAttribute("stroke-dasharray", E3.dashArray), X2.node.setAttribute("stroke-width", E3.strokeWidth), X2.node.setAttribute("fill-opacity", E3.fillOpacity)), void 0 !== u4 && void 0 !== f4 && (X2.attr("data-range-y1", u4), X2.attr("data-range-y2", f4)), new w2(this.ctx).setSelectionFilter(X2, e8, s5), c5.add(X2);
        var Y2 = new kt(this).handleBarDataLabels({ x: d4, y: g3, y1: u4, y2: f4, i: r7, j: s5, series: p4, realIndex: e8, columnGroupIndex: o8, barHeight: x3, barWidth: b4, barXPosition: v3, barYPosition: m3, renderedPath: X2, visibleSeries: C4 });
        return null !== Y2.dataLabels && y4.add(Y2.dataLabels), Y2.totalDataLabels && y4.add(Y2.totalDataLabels), c5.add(y4), A3 && c5.add(A3), S4 && c5.add(S4), c5;
      } }, { key: "drawBarPaths", value: function(t6) {
        var e8, i8 = t6.indexes, a4 = t6.barHeight, s5 = t6.strokeWidth, r7 = t6.zeroW, o8 = t6.x, n7 = t6.y, l4 = t6.yDivision, h4 = t6.elSeries, c5 = this.w, d4 = i8.i, g3 = i8.j;
        if (c5.globals.isXNumeric) e8 = (n7 = (c5.globals.seriesX[d4][g3] - c5.globals.minX) / this.invertedXRatio - a4) + a4 * this.visibleI;
        else if (c5.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
          var u4 = 0, f4 = 0;
          c5.globals.seriesPercent.forEach(function(t7, e9) {
            t7[g3] && u4++, e9 < d4 && 0 === t7[g3] && f4++;
          }), u4 > 0 && (a4 = this.seriesLen * a4 / u4), e8 = n7 + a4 * this.visibleI, e8 -= a4 * f4;
        } else e8 = n7 + a4 * this.visibleI;
        this.isFunnel && (r7 -= (this.barHelpers.getXForValue(this.series[d4][g3], r7) - r7) / 2), o8 = this.barHelpers.getXForValue(this.series[d4][g3], r7);
        var p4 = this.barHelpers.getBarpaths({ barYPosition: e8, barHeight: a4, x1: r7, x2: o8, strokeWidth: s5, isReversed: this.isReversed, series: this.series, realIndex: i8.realIndex, i: d4, j: g3, w: c5 });
        return c5.globals.isXNumeric || (n7 += l4), this.barHelpers.barBackground({ j: g3, i: d4, y1: e8 - a4 * this.visibleI, y2: a4 * this.seriesLen, elSeries: h4 }), { pathTo: p4.pathTo, pathFrom: p4.pathFrom, x1: r7, x: o8, y: n7, goalX: this.barHelpers.getGoalValues("x", r7, null, d4, g3), barYPosition: e8, barHeight: a4 };
      } }, { key: "drawColumnPaths", value: function(t6) {
        var e8, i8 = t6.indexes, a4 = t6.x, s5 = t6.y, r7 = t6.xDivision, o8 = t6.barWidth, n7 = t6.zeroH, l4 = t6.strokeWidth, h4 = t6.elSeries, c5 = this.w, d4 = i8.realIndex, g3 = i8.translationsIndex, u4 = i8.i, f4 = i8.j, p4 = i8.bc;
        if (c5.globals.isXNumeric) {
          var x3 = this.getBarXForNumericXAxis({ x: a4, j: f4, realIndex: d4, barWidth: o8 });
          a4 = x3.x, e8 = x3.barXPosition;
        } else if (c5.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
          var b4 = this.barHelpers.getZeroValueEncounters({ i: u4, j: f4 }), v3 = b4.nonZeroColumns, m3 = b4.zeroEncounters;
          v3 > 0 && (o8 = this.seriesLen * o8 / v3), e8 = a4 + o8 * this.visibleI, e8 -= o8 * m3;
        } else e8 = a4 + o8 * this.visibleI;
        s5 = this.barHelpers.getYForValue(this.series[u4][f4], n7, g3);
        var y4 = this.barHelpers.getColumnPaths({ barXPosition: e8, barWidth: o8, y1: n7, y2: s5, strokeWidth: l4, isReversed: this.isReversed, series: this.series, realIndex: d4, i: u4, j: f4, w: c5 });
        return c5.globals.isXNumeric || (a4 += r7), this.barHelpers.barBackground({ bc: p4, j: f4, i: u4, x1: e8 - l4 / 2 - o8 * this.visibleI, x2: o8 * this.seriesLen + l4 / 2, elSeries: h4 }), { pathTo: y4.pathTo, pathFrom: y4.pathFrom, x: a4, y: s5, goalY: this.barHelpers.getGoalValues("y", null, n7, u4, f4, g3), barXPosition: e8, barWidth: o8 };
      } }, { key: "getBarXForNumericXAxis", value: function(t6) {
        var e8 = t6.x, i8 = t6.barWidth, a4 = t6.realIndex, s5 = t6.j, r7 = this.w, o8 = a4;
        return r7.globals.seriesX[a4].length || (o8 = r7.globals.maxValsInArrayIndex), r7.globals.seriesX[o8][s5] && (e8 = (r7.globals.seriesX[o8][s5] - r7.globals.minX) / this.xRatio - i8 * this.seriesLen / 2), { barXPosition: e8 + i8 * this.visibleI, x: e8 };
      } }, { key: "getPreviousPath", value: function(t6, e8) {
        for (var i8, a4 = this.w, s5 = 0; s5 < a4.globals.previousPaths.length; s5++) {
          var r7 = a4.globals.previousPaths[s5];
          r7.paths && r7.paths.length > 0 && parseInt(r7.realIndex, 10) === parseInt(t6, 10) && void 0 !== a4.globals.previousPaths[s5].paths[e8] && (i8 = a4.globals.previousPaths[s5].paths[e8].d);
        }
        return i8;
      } }]), t5;
    }();
    var Ct = function(t5) {
      h3(a4, St);
      var e8 = o7(a4);
      function a4() {
        return i7(this, a4), e8.apply(this, arguments);
      }
      return s4(a4, [{ key: "draw", value: function(t6, e9) {
        var i8 = this, a5 = this.w;
        this.graphics = new k2(this.ctx), this.bar = new St(this.ctx, this.xyRatios);
        var s5 = new A2(this.ctx, a5);
        t6 = s5.getLogSeries(t6), this.yRatio = s5.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t6), "100%" === a5.config.chart.stackType && (t6 = a5.globals.comboCharts ? e9.map(function(t7) {
          return a5.globals.seriesPercent[t7];
        }) : a5.globals.seriesPercent.slice()), this.series = t6, this.barHelpers.initializeStackedPrevVars(this);
        for (var r7 = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), o8 = 0, n7 = 0, l4 = function(s6, l5) {
          var h5 = void 0, c6 = void 0, d4 = void 0, u4 = void 0, f4 = a5.globals.comboCharts ? e9[s6] : s6, p4 = i8.barHelpers.getGroupIndex(f4), x3 = p4.groupIndex, b4 = p4.columnGroupIndex;
          i8.groupCtx = i8[a5.globals.seriesGroups[x3]];
          var v3 = [], y4 = [], w3 = 0;
          i8.yRatio.length > 1 && (i8.yaxisIndex = a5.globals.seriesYAxisReverseMap[f4][0], w3 = f4), i8.isReversed = a5.config.yaxis[i8.yaxisIndex] && a5.config.yaxis[i8.yaxisIndex].reversed;
          var k3 = i8.graphics.group({ class: "apexcharts-series", seriesName: m2.escapeString(a5.globals.seriesNames[f4]), rel: s6 + 1, "data:realIndex": f4 });
          i8.ctx.series.addCollapsedClassToSeries(k3, f4);
          var A3 = i8.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": f4 }), S4 = i8.graphics.group({ class: "apexcharts-bar-goals-markers" }), C4 = 0, L3 = 0, P3 = i8.initialPositions(o8, n7, h5, c6, d4, u4, w3);
          n7 = P3.y, C4 = P3.barHeight, c6 = P3.yDivision, u4 = P3.zeroW, o8 = P3.x, L3 = P3.barWidth, h5 = P3.xDivision, d4 = P3.zeroH, a5.globals.barHeight = C4, a5.globals.barWidth = L3, i8.barHelpers.initializeStackedXYVars(i8), 1 === i8.groupCtx.prevY.length && i8.groupCtx.prevY[0].every(function(t7) {
            return isNaN(t7);
          }) && (i8.groupCtx.prevY[0] = i8.groupCtx.prevY[0].map(function() {
            return d4;
          }), i8.groupCtx.prevYF[0] = i8.groupCtx.prevYF[0].map(function() {
            return 0;
          }));
          for (var M3 = 0; M3 < a5.globals.dataPoints; M3++) {
            var I3 = i8.barHelpers.getStrokeWidth(s6, M3, f4), T3 = { indexes: { i: s6, j: M3, realIndex: f4, translationsIndex: w3, bc: l5 }, strokeWidth: I3, x: o8, y: n7, elSeries: k3, columnGroupIndex: b4, seriesGroup: a5.globals.seriesGroups[x3] }, z3 = null;
            i8.isHorizontal ? (z3 = i8.drawStackedBarPaths(g2(g2({}, T3), {}, { zeroW: u4, barHeight: C4, yDivision: c6 })), L3 = i8.series[s6][M3] / i8.invertedYRatio) : (z3 = i8.drawStackedColumnPaths(g2(g2({}, T3), {}, { xDivision: h5, barWidth: L3, zeroH: d4 })), C4 = i8.series[s6][M3] / i8.yRatio[w3]);
            var X2 = i8.barHelpers.drawGoalLine({ barXPosition: z3.barXPosition, barYPosition: z3.barYPosition, goalX: z3.goalX, goalY: z3.goalY, barHeight: C4, barWidth: L3 });
            X2 && S4.add(X2), n7 = z3.y, o8 = z3.x, v3.push(o8), y4.push(n7);
            var E3 = i8.barHelpers.getPathFillColor(t6, s6, M3, f4), Y2 = "";
            a5.globals.isBarHorizontal ? "bottom" === i8.barHelpers.arrBorderRadius[f4][M3] && a5.globals.series[f4][M3] > 0 && (Y2 = "apexcharts-flip-x") : "bottom" === i8.barHelpers.arrBorderRadius[f4][M3] && a5.globals.series[f4][M3] > 0 && (Y2 = "apexcharts-flip-y"), k3 = i8.renderSeries({ realIndex: f4, pathFill: E3, j: M3, i: s6, columnGroupIndex: b4, pathFrom: z3.pathFrom, pathTo: z3.pathTo, strokeWidth: I3, elSeries: k3, x: o8, y: n7, series: t6, barHeight: C4, barWidth: L3, elDataLabelsWrap: A3, elGoalsMarkers: S4, type: "bar", visibleSeries: b4, classes: Y2 });
          }
          a5.globals.seriesXvalues[f4] = v3, a5.globals.seriesYvalues[f4] = y4, i8.groupCtx.prevY.push(i8.groupCtx.yArrj), i8.groupCtx.prevYF.push(i8.groupCtx.yArrjF), i8.groupCtx.prevYVal.push(i8.groupCtx.yArrjVal), i8.groupCtx.prevX.push(i8.groupCtx.xArrj), i8.groupCtx.prevXF.push(i8.groupCtx.xArrjF), i8.groupCtx.prevXVal.push(i8.groupCtx.xArrjVal), r7.add(k3);
        }, h4 = 0, c5 = 0; h4 < t6.length; h4++, c5++) l4(h4, c5);
        return r7;
      } }, { key: "initialPositions", value: function(t6, e9, i8, a5, s5, r7, o8) {
        var n7, l4, h4 = this.w;
        if (this.isHorizontal) {
          a5 = h4.globals.gridHeight / h4.globals.dataPoints;
          var c5 = h4.config.plotOptions.bar.barHeight;
          n7 = -1 === String(c5).indexOf("%") ? parseInt(c5, 10) : a5 * parseInt(c5, 10) / 100, r7 = h4.globals.padHorizontal + (this.isReversed ? h4.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e9 = (a5 - n7) / 2;
        } else {
          l4 = i8 = h4.globals.gridWidth / h4.globals.dataPoints;
          var d4 = h4.config.plotOptions.bar.columnWidth;
          h4.globals.isXNumeric && h4.globals.dataPoints > 1 ? l4 = (i8 = h4.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : -1 === String(d4).indexOf("%") ? l4 = parseInt(d4, 10) : l4 *= parseInt(d4, 10) / 100, s5 = this.isReversed ? this.baseLineY[o8] : h4.globals.gridHeight - this.baseLineY[o8], t6 = h4.globals.padHorizontal + (i8 - l4) / 2;
        }
        var g3 = h4.globals.barGroups.length || 1;
        return { x: t6, y: e9, yDivision: a5, xDivision: i8, barHeight: n7 / g3, barWidth: l4 / g3, zeroH: s5, zeroW: r7 };
      } }, { key: "drawStackedBarPaths", value: function(t6) {
        for (var e9, i8 = t6.indexes, a5 = t6.barHeight, s5 = t6.strokeWidth, r7 = t6.zeroW, o8 = t6.x, n7 = t6.y, l4 = t6.columnGroupIndex, h4 = t6.seriesGroup, c5 = t6.yDivision, d4 = t6.elSeries, g3 = this.w, u4 = n7 + l4 * a5, f4 = i8.i, p4 = i8.j, x3 = i8.realIndex, b4 = i8.translationsIndex, v3 = 0, m3 = 0; m3 < this.groupCtx.prevXF.length; m3++) v3 += this.groupCtx.prevXF[m3][p4];
        var y4;
        if ((y4 = h4.indexOf(g3.config.series[x3].name)) > 0) {
          var w3 = r7;
          this.groupCtx.prevXVal[y4 - 1][p4] < 0 ? w3 = this.series[f4][p4] >= 0 ? this.groupCtx.prevX[y4 - 1][p4] + v3 - 2 * (this.isReversed ? v3 : 0) : this.groupCtx.prevX[y4 - 1][p4] : this.groupCtx.prevXVal[y4 - 1][p4] >= 0 && (w3 = this.series[f4][p4] >= 0 ? this.groupCtx.prevX[y4 - 1][p4] : this.groupCtx.prevX[y4 - 1][p4] - v3 + 2 * (this.isReversed ? v3 : 0)), e9 = w3;
        } else e9 = r7;
        o8 = null === this.series[f4][p4] ? e9 : e9 + this.series[f4][p4] / this.invertedYRatio - 2 * (this.isReversed ? this.series[f4][p4] / this.invertedYRatio : 0);
        var k3 = this.barHelpers.getBarpaths({ barYPosition: u4, barHeight: a5, x1: e9, x2: o8, strokeWidth: s5, isReversed: this.isReversed, series: this.series, realIndex: i8.realIndex, seriesGroup: h4, i: f4, j: p4, w: g3 });
        return this.barHelpers.barBackground({ j: p4, i: f4, y1: u4, y2: a5, elSeries: d4 }), n7 += c5, { pathTo: k3.pathTo, pathFrom: k3.pathFrom, goalX: this.barHelpers.getGoalValues("x", r7, null, f4, p4, b4), barXPosition: e9, barYPosition: u4, x: o8, y: n7 };
      } }, { key: "drawStackedColumnPaths", value: function(t6) {
        var e9 = t6.indexes, i8 = t6.x, a5 = t6.y, s5 = t6.xDivision, r7 = t6.barWidth, o8 = t6.zeroH, n7 = t6.columnGroupIndex, l4 = t6.seriesGroup, h4 = t6.elSeries, c5 = this.w, d4 = e9.i, g3 = e9.j, u4 = e9.bc, f4 = e9.realIndex, p4 = e9.translationsIndex;
        if (c5.globals.isXNumeric) {
          var x3 = c5.globals.seriesX[f4][g3];
          x3 || (x3 = 0), i8 = (x3 - c5.globals.minX) / this.xRatio - r7 / 2 * c5.globals.barGroups.length;
        }
        for (var b4, v3 = i8 + n7 * r7, m3 = 0, y4 = 0; y4 < this.groupCtx.prevYF.length; y4++) m3 += isNaN(this.groupCtx.prevYF[y4][g3]) ? 0 : this.groupCtx.prevYF[y4][g3];
        var w3 = d4;
        if (l4 && (w3 = l4.indexOf(c5.globals.seriesNames[f4])), w3 > 0 && !c5.globals.isXNumeric || w3 > 0 && c5.globals.isXNumeric && c5.globals.seriesX[f4 - 1][g3] === c5.globals.seriesX[f4][g3]) {
          var k3, A3, S4, C4 = Math.min(this.yRatio.length + 1, f4 + 1);
          if (void 0 !== this.groupCtx.prevY[w3 - 1] && this.groupCtx.prevY[w3 - 1].length) for (var L3 = 1; L3 < C4; L3++) {
            var P3;
            if (!isNaN(null === (P3 = this.groupCtx.prevY[w3 - L3]) || void 0 === P3 ? void 0 : P3[g3])) {
              S4 = this.groupCtx.prevY[w3 - L3][g3];
              break;
            }
          }
          for (var M3 = 1; M3 < C4; M3++) {
            var I3, T3;
            if ((null === (I3 = this.groupCtx.prevYVal[w3 - M3]) || void 0 === I3 ? void 0 : I3[g3]) < 0) {
              A3 = this.series[d4][g3] >= 0 ? S4 - m3 + 2 * (this.isReversed ? m3 : 0) : S4;
              break;
            }
            if ((null === (T3 = this.groupCtx.prevYVal[w3 - M3]) || void 0 === T3 ? void 0 : T3[g3]) >= 0) {
              A3 = this.series[d4][g3] >= 0 ? S4 : S4 + m3 - 2 * (this.isReversed ? m3 : 0);
              break;
            }
          }
          void 0 === A3 && (A3 = c5.globals.gridHeight), b4 = null !== (k3 = this.groupCtx.prevYF[0]) && void 0 !== k3 && k3.every(function(t7) {
            return 0 === t7;
          }) && this.groupCtx.prevYF.slice(1, w3).every(function(t7) {
            return t7.every(function(t8) {
              return isNaN(t8);
            });
          }) ? o8 : A3;
        } else b4 = o8;
        a5 = this.series[d4][g3] ? b4 - this.series[d4][g3] / this.yRatio[p4] + 2 * (this.isReversed ? this.series[d4][g3] / this.yRatio[p4] : 0) : b4;
        var z3 = this.barHelpers.getColumnPaths({ barXPosition: v3, barWidth: r7, y1: b4, y2: a5, yRatio: this.yRatio[p4], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: l4, realIndex: e9.realIndex, i: d4, j: g3, w: c5 });
        return this.barHelpers.barBackground({ bc: u4, j: g3, i: d4, x1: v3, x2: r7, elSeries: h4 }), { pathTo: z3.pathTo, pathFrom: z3.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, o8, d4, g3), barXPosition: v3, x: c5.globals.isXNumeric ? i8 : i8 + s5, y: a5 };
      } }]), a4;
    }();
    var Lt = function(t5) {
      h3(a4, St);
      var e8 = o7(a4);
      function a4() {
        return i7(this, a4), e8.apply(this, arguments);
      }
      return s4(a4, [{ key: "draw", value: function(t6, e9, i8) {
        var a5 = this, s5 = this.w, r7 = new k2(this.ctx), o8 = s5.globals.comboCharts ? e9 : s5.config.chart.type, n7 = new N2(this.ctx);
        this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = s5.config.plotOptions.bar.horizontal;
        var l4 = new A2(this.ctx, s5);
        t6 = l4.getLogSeries(t6), this.series = t6, this.yRatio = l4.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t6);
        for (var h4 = r7.group({ class: "apexcharts-".concat(o8, "-series apexcharts-plot-series") }), c5 = function(e10) {
          a5.isBoxPlot = "boxPlot" === s5.config.chart.type || "boxPlot" === s5.config.series[e10].type;
          var o9, l5, c6, d5, u4 = void 0, f4 = void 0, p4 = [], x3 = [], b4 = s5.globals.comboCharts ? i8[e10] : e10, v3 = a5.barHelpers.getGroupIndex(b4).columnGroupIndex, y4 = r7.group({ class: "apexcharts-series", seriesName: m2.escapeString(s5.globals.seriesNames[b4]), rel: e10 + 1, "data:realIndex": b4 });
          a5.ctx.series.addCollapsedClassToSeries(y4, b4), t6[e10].length > 0 && (a5.visibleI = a5.visibleI + 1);
          var w3, k3, A3 = 0;
          a5.yRatio.length > 1 && (a5.yaxisIndex = s5.globals.seriesYAxisReverseMap[b4][0], A3 = b4);
          var S4 = a5.barHelpers.initialPositions();
          f4 = S4.y, w3 = S4.barHeight, l5 = S4.yDivision, d5 = S4.zeroW, u4 = S4.x, k3 = S4.barWidth, o9 = S4.xDivision, c6 = S4.zeroH, x3.push(u4 + k3 / 2);
          for (var C4 = r7.group({ class: "apexcharts-datalabels", "data:realIndex": b4 }), L3 = function(i9) {
            var r8 = a5.barHelpers.getStrokeWidth(e10, i9, b4), h5 = null, m3 = { indexes: { i: e10, j: i9, realIndex: b4, translationsIndex: A3 }, x: u4, y: f4, strokeWidth: r8, elSeries: y4 };
            h5 = a5.isHorizontal ? a5.drawHorizontalBoxPaths(g2(g2({}, m3), {}, { yDivision: l5, barHeight: w3, zeroW: d5 })) : a5.drawVerticalBoxPaths(g2(g2({}, m3), {}, { xDivision: o9, barWidth: k3, zeroH: c6 })), f4 = h5.y, u4 = h5.x, i9 > 0 && x3.push(u4 + k3 / 2), p4.push(f4), h5.pathTo.forEach(function(o10, l6) {
              var c7 = !a5.isBoxPlot && a5.candlestickOptions.wick.useFillColor ? h5.color[l6] : s5.globals.stroke.colors[e10], d6 = n7.fillPath({ seriesNumber: b4, dataPointIndex: i9, color: h5.color[l6], value: t6[e10][i9] });
              a5.renderSeries({ realIndex: b4, pathFill: d6, lineFill: c7, j: i9, i: e10, pathFrom: h5.pathFrom, pathTo: o10, strokeWidth: r8, elSeries: y4, x: u4, y: f4, series: t6, columnGroupIndex: v3, barHeight: w3, barWidth: k3, elDataLabelsWrap: C4, visibleSeries: a5.visibleI, type: s5.config.chart.type });
            });
          }, P3 = 0; P3 < s5.globals.dataPoints; P3++) L3(P3);
          s5.globals.seriesXvalues[b4] = x3, s5.globals.seriesYvalues[b4] = p4, h4.add(y4);
        }, d4 = 0; d4 < t6.length; d4++) c5(d4);
        return h4;
      } }, { key: "drawVerticalBoxPaths", value: function(t6) {
        var e9 = t6.indexes, i8 = t6.x;
        t6.y;
        var a5 = t6.xDivision, s5 = t6.barWidth, r7 = t6.zeroH, o8 = t6.strokeWidth, n7 = this.w, l4 = new k2(this.ctx), h4 = e9.i, c5 = e9.j, d4 = true, g3 = n7.config.plotOptions.candlestick.colors.upward, u4 = n7.config.plotOptions.candlestick.colors.downward, f4 = "";
        this.isBoxPlot && (f4 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
        var p4 = this.yRatio[e9.translationsIndex], x3 = e9.realIndex, b4 = this.getOHLCValue(x3, c5), v3 = r7, m3 = r7;
        b4.o > b4.c && (d4 = false);
        var y4 = Math.min(b4.o, b4.c), w3 = Math.max(b4.o, b4.c), A3 = b4.m;
        n7.globals.isXNumeric && (i8 = (n7.globals.seriesX[x3][c5] - n7.globals.minX) / this.xRatio - s5 / 2);
        var S4 = i8 + s5 * this.visibleI;
        void 0 === this.series[h4][c5] || null === this.series[h4][c5] ? (y4 = r7, w3 = r7) : (y4 = r7 - y4 / p4, w3 = r7 - w3 / p4, v3 = r7 - b4.h / p4, m3 = r7 - b4.l / p4, A3 = r7 - b4.m / p4);
        var C4 = l4.move(S4, r7), L3 = l4.move(S4 + s5 / 2, y4);
        return n7.globals.previousPaths.length > 0 && (L3 = this.getPreviousPath(x3, c5, true)), C4 = this.isBoxPlot ? [l4.move(S4, y4) + l4.line(S4 + s5 / 2, y4) + l4.line(S4 + s5 / 2, v3) + l4.line(S4 + s5 / 4, v3) + l4.line(S4 + s5 - s5 / 4, v3) + l4.line(S4 + s5 / 2, v3) + l4.line(S4 + s5 / 2, y4) + l4.line(S4 + s5, y4) + l4.line(S4 + s5, A3) + l4.line(S4, A3) + l4.line(S4, y4 + o8 / 2), l4.move(S4, A3) + l4.line(S4 + s5, A3) + l4.line(S4 + s5, w3) + l4.line(S4 + s5 / 2, w3) + l4.line(S4 + s5 / 2, m3) + l4.line(S4 + s5 - s5 / 4, m3) + l4.line(S4 + s5 / 4, m3) + l4.line(S4 + s5 / 2, m3) + l4.line(S4 + s5 / 2, w3) + l4.line(S4, w3) + l4.line(S4, A3) + "z"] : [l4.move(S4, w3) + l4.line(S4 + s5 / 2, w3) + l4.line(S4 + s5 / 2, v3) + l4.line(S4 + s5 / 2, w3) + l4.line(S4 + s5, w3) + l4.line(S4 + s5, y4) + l4.line(S4 + s5 / 2, y4) + l4.line(S4 + s5 / 2, m3) + l4.line(S4 + s5 / 2, y4) + l4.line(S4, y4) + l4.line(S4, w3 - o8 / 2)], L3 += l4.move(S4, y4), n7.globals.isXNumeric || (i8 += a5), { pathTo: C4, pathFrom: L3, x: i8, y: w3, barXPosition: S4, color: this.isBoxPlot ? f4 : d4 ? [g3] : [u4] };
      } }, { key: "drawHorizontalBoxPaths", value: function(t6) {
        var e9 = t6.indexes;
        t6.x;
        var i8 = t6.y, a5 = t6.yDivision, s5 = t6.barHeight, r7 = t6.zeroW, o8 = t6.strokeWidth, n7 = this.w, l4 = new k2(this.ctx), h4 = e9.i, c5 = e9.j, d4 = this.boxOptions.colors.lower;
        this.isBoxPlot && (d4 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
        var g3 = this.invertedYRatio, u4 = e9.realIndex, f4 = this.getOHLCValue(u4, c5), p4 = r7, x3 = r7, b4 = Math.min(f4.o, f4.c), v3 = Math.max(f4.o, f4.c), m3 = f4.m;
        n7.globals.isXNumeric && (i8 = (n7.globals.seriesX[u4][c5] - n7.globals.minX) / this.invertedXRatio - s5 / 2);
        var y4 = i8 + s5 * this.visibleI;
        void 0 === this.series[h4][c5] || null === this.series[h4][c5] ? (b4 = r7, v3 = r7) : (b4 = r7 + b4 / g3, v3 = r7 + v3 / g3, p4 = r7 + f4.h / g3, x3 = r7 + f4.l / g3, m3 = r7 + f4.m / g3);
        var w3 = l4.move(r7, y4), A3 = l4.move(b4, y4 + s5 / 2);
        return n7.globals.previousPaths.length > 0 && (A3 = this.getPreviousPath(u4, c5, true)), w3 = [l4.move(b4, y4) + l4.line(b4, y4 + s5 / 2) + l4.line(p4, y4 + s5 / 2) + l4.line(p4, y4 + s5 / 2 - s5 / 4) + l4.line(p4, y4 + s5 / 2 + s5 / 4) + l4.line(p4, y4 + s5 / 2) + l4.line(b4, y4 + s5 / 2) + l4.line(b4, y4 + s5) + l4.line(m3, y4 + s5) + l4.line(m3, y4) + l4.line(b4 + o8 / 2, y4), l4.move(m3, y4) + l4.line(m3, y4 + s5) + l4.line(v3, y4 + s5) + l4.line(v3, y4 + s5 / 2) + l4.line(x3, y4 + s5 / 2) + l4.line(x3, y4 + s5 - s5 / 4) + l4.line(x3, y4 + s5 / 4) + l4.line(x3, y4 + s5 / 2) + l4.line(v3, y4 + s5 / 2) + l4.line(v3, y4) + l4.line(m3, y4) + "z"], A3 += l4.move(b4, y4), n7.globals.isXNumeric || (i8 += a5), { pathTo: w3, pathFrom: A3, x: v3, y: i8, barYPosition: y4, color: d4 };
      } }, { key: "getOHLCValue", value: function(t6, e9) {
        var i8 = this.w;
        return { o: this.isBoxPlot ? i8.globals.seriesCandleH[t6][e9] : i8.globals.seriesCandleO[t6][e9], h: this.isBoxPlot ? i8.globals.seriesCandleO[t6][e9] : i8.globals.seriesCandleH[t6][e9], m: i8.globals.seriesCandleM[t6][e9], l: this.isBoxPlot ? i8.globals.seriesCandleC[t6][e9] : i8.globals.seriesCandleL[t6][e9], c: this.isBoxPlot ? i8.globals.seriesCandleL[t6][e9] : i8.globals.seriesCandleC[t6][e9] };
      } }]), a4;
    }();
    var Pt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "checkColorRange", value: function() {
        var t6 = this.w, e8 = false, i8 = t6.config.plotOptions[t6.config.chart.type];
        return i8.colorScale.ranges.length > 0 && i8.colorScale.ranges.map(function(t7, i9) {
          t7.from <= 0 && (e8 = true);
        }), e8;
      } }, { key: "getShadeColor", value: function(t6, e8, i8, a4) {
        var s5 = this.w, r7 = 1, o8 = s5.config.plotOptions[t6].shadeIntensity, n7 = this.determineColor(t6, e8, i8);
        s5.globals.hasNegs || a4 ? r7 = s5.config.plotOptions[t6].reverseNegativeShade ? n7.percent < 0 ? n7.percent / 100 * (1.25 * o8) : (1 - n7.percent / 100) * (1.25 * o8) : n7.percent <= 0 ? 1 - (1 + n7.percent / 100) * o8 : (1 - n7.percent / 100) * o8 : (r7 = 1 - n7.percent / 100, "treemap" === t6 && (r7 = (1 - n7.percent / 100) * (1.25 * o8)));
        var l4 = n7.color, h4 = new m2();
        if (s5.config.plotOptions[t6].enableShades) if ("dark" === this.w.config.theme.mode) {
          var c5 = h4.shadeColor(-1 * r7, n7.color);
          l4 = m2.hexToRgba(m2.isColorHex(c5) ? c5 : m2.rgb2hex(c5), s5.config.fill.opacity);
        } else {
          var d4 = h4.shadeColor(r7, n7.color);
          l4 = m2.hexToRgba(m2.isColorHex(d4) ? d4 : m2.rgb2hex(d4), s5.config.fill.opacity);
        }
        return { color: l4, colorProps: n7 };
      } }, { key: "determineColor", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = a4.globals.series[e8][i8], r7 = a4.config.plotOptions[t6], o8 = r7.colorScale.inverse ? i8 : e8;
        r7.distributed && "treemap" === a4.config.chart.type && (o8 = i8);
        var n7 = a4.globals.colors[o8], l4 = null, h4 = Math.min.apply(Math, p3(a4.globals.series[e8])), c5 = Math.max.apply(Math, p3(a4.globals.series[e8]));
        r7.distributed || "heatmap" !== t6 || (h4 = a4.globals.minY, c5 = a4.globals.maxY), void 0 !== r7.colorScale.min && (h4 = r7.colorScale.min < a4.globals.minY ? r7.colorScale.min : a4.globals.minY, c5 = r7.colorScale.max > a4.globals.maxY ? r7.colorScale.max : a4.globals.maxY);
        var d4 = Math.abs(c5) + Math.abs(h4), g3 = 100 * s5 / (0 === d4 ? d4 - 1e-6 : d4);
        r7.colorScale.ranges.length > 0 && r7.colorScale.ranges.map(function(t7, e9) {
          if (s5 >= t7.from && s5 <= t7.to) {
            n7 = t7.color, l4 = t7.foreColor ? t7.foreColor : null, h4 = t7.from, c5 = t7.to;
            var i9 = Math.abs(c5) + Math.abs(h4);
            g3 = 100 * s5 / (0 === i9 ? i9 - 1e-6 : i9);
          }
        });
        return { color: n7, foreColor: l4, percent: g3 };
      } }, { key: "calculateDataLabels", value: function(t6) {
        var e8 = t6.text, i8 = t6.x, a4 = t6.y, s5 = t6.i, r7 = t6.j, o8 = t6.colorProps, n7 = t6.fontSize, l4 = this.w.config.dataLabels, h4 = new k2(this.ctx), c5 = new G(this.ctx), d4 = null;
        if (l4.enabled) {
          d4 = h4.group({ class: "apexcharts-data-labels" });
          var g3 = l4.offsetX, u4 = l4.offsetY, f4 = i8 + g3, p4 = a4 + parseFloat(l4.style.fontSize) / 3 + u4;
          c5.plotDataLabelsText({ x: f4, y: p4, text: e8, i: s5, j: r7, color: o8.foreColor, parent: d4, fontSize: n7, dataLabelsConfig: l4 });
        }
        return d4;
      } }, { key: "addListeners", value: function(t6) {
        var e8 = new k2(this.ctx);
        t6.node.addEventListener("mouseenter", e8.pathMouseEnter.bind(this, t6)), t6.node.addEventListener("mouseleave", e8.pathMouseLeave.bind(this, t6)), t6.node.addEventListener("mousedown", e8.pathMouseDown.bind(this, t6));
      } }]), t5;
    }();
    var Mt = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.xRatio = a4.xRatio, this.yRatio = a4.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Pt(e8), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
      }
      return s4(t5, [{ key: "draw", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a4 = i8.group({ class: "apexcharts-heatmap" });
        a4.attr("clip-path", "url(#gridRectMask".concat(e8.globals.cuid, ")"));
        var s5 = e8.globals.gridWidth / e8.globals.dataPoints, r7 = e8.globals.gridHeight / e8.globals.series.length, o8 = 0, n7 = false;
        this.negRange = this.helpers.checkColorRange();
        var l4 = t6.slice();
        e8.config.yaxis[0].reversed && (n7 = true, l4.reverse());
        for (var h4 = n7 ? 0 : l4.length - 1; n7 ? h4 < l4.length : h4 >= 0; n7 ? h4++ : h4--) {
          var c5 = i8.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: m2.escapeString(e8.globals.seriesNames[h4]), rel: h4 + 1, "data:realIndex": h4 });
          if (this.ctx.series.addCollapsedClassToSeries(c5, h4), e8.config.chart.dropShadow.enabled) {
            var d4 = e8.config.chart.dropShadow;
            new w2(this.ctx).dropShadow(c5, d4, h4);
          }
          for (var g3 = 0, u4 = e8.config.plotOptions.heatmap.shadeIntensity, f4 = 0; f4 < l4[h4].length; f4++) {
            var p4 = this.helpers.getShadeColor(e8.config.chart.type, h4, f4, this.negRange), x3 = p4.color, b4 = p4.colorProps;
            if ("image" === e8.config.fill.type) x3 = new N2(this.ctx).fillPath({ seriesNumber: h4, dataPointIndex: f4, opacity: e8.globals.hasNegs ? b4.percent < 0 ? 1 - (1 + b4.percent / 100) : u4 + b4.percent / 100 : b4.percent / 100, patternID: m2.randomId(), width: e8.config.fill.image.width ? e8.config.fill.image.width : s5, height: e8.config.fill.image.height ? e8.config.fill.image.height : r7 });
            var v3 = this.rectRadius, y4 = i8.drawRect(g3, o8, s5, r7, v3);
            if (y4.attr({ cx: g3, cy: o8 }), y4.node.classList.add("apexcharts-heatmap-rect"), c5.add(y4), y4.attr({ fill: x3, i: h4, index: h4, j: f4, val: t6[h4][f4], "stroke-width": this.strokeWidth, stroke: e8.config.plotOptions.heatmap.useFillColorAsStroke ? x3 : e8.globals.stroke.colors[0], color: x3 }), this.helpers.addListeners(y4), e8.config.chart.animations.enabled && !e8.globals.dataChanged) {
              var A3 = 1;
              e8.globals.resized || (A3 = e8.config.chart.animations.speed), this.animateHeatMap(y4, g3, o8, s5, r7, A3);
            }
            if (e8.globals.dataChanged) {
              var S4 = 1;
              if (this.dynamicAnim.enabled && e8.globals.shouldAnimate) {
                S4 = this.dynamicAnim.speed;
                var C4 = e8.globals.previousPaths[h4] && e8.globals.previousPaths[h4][f4] && e8.globals.previousPaths[h4][f4].color;
                C4 || (C4 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(y4, m2.isColorHex(C4) ? C4 : m2.rgb2hex(C4), m2.isColorHex(x3) ? x3 : m2.rgb2hex(x3), S4);
              }
            }
            var L3 = (0, e8.config.dataLabels.formatter)(e8.globals.series[h4][f4], { value: e8.globals.series[h4][f4], seriesIndex: h4, dataPointIndex: f4, w: e8 }), P3 = this.helpers.calculateDataLabels({ text: L3, x: g3 + s5 / 2, y: o8 + r7 / 2, i: h4, j: f4, colorProps: b4, series: l4 });
            null !== P3 && c5.add(P3), g3 += s5;
          }
          o8 += r7, a4.add(c5);
        }
        var M3 = e8.globals.yAxisScale[0].result.slice();
        return e8.config.yaxis[0].reversed ? M3.unshift("") : M3.push(""), e8.globals.yAxisScale[0].result = M3, a4;
      } }, { key: "animateHeatMap", value: function(t6, e8, i8, a4, s5, r7) {
        var o8 = new y3(this.ctx);
        o8.animateRect(t6, { x: e8 + a4 / 2, y: i8 + s5 / 2, width: 0, height: 0 }, { x: e8, y: i8, width: a4, height: s5 }, r7, function() {
          o8.animationCompleted(t6);
        });
      } }, { key: "animateHeatColor", value: function(t6, e8, i8, a4) {
        t6.attr({ fill: e8 }).animate(a4).attr({ fill: i8 });
      } }]), t5;
    }();
    var It = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "drawYAxisTexts", value: function(t6, e8, i8, a4) {
        var s5 = this.w, r7 = s5.config.yaxis[0], o8 = s5.globals.yLabelFormatters[0];
        return new k2(this.ctx).drawText({ x: t6 + r7.labels.offsetX, y: e8 + r7.labels.offsetY, text: o8(a4, i8), textAnchor: "middle", fontSize: r7.labels.style.fontSize, fontFamily: r7.labels.style.fontFamily, foreColor: Array.isArray(r7.labels.style.colors) ? r7.labels.style.colors[i8] : r7.labels.style.colors });
      } }]), t5;
    }();
    var Tt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
        var a4 = this.w;
        this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== a4.globals.stroke.colors ? a4.globals.stroke.colors : a4.globals.colors, this.defaultSize = Math.min(a4.globals.gridWidth, a4.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = a4.globals.gridWidth / 2, "radialBar" === a4.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(a4.config.plotOptions.pie.endAngle - a4.config.plotOptions.pie.startAngle), this.initialAngle = a4.config.plotOptions.pie.startAngle % this.fullAngle, a4.globals.radialSize = this.defaultSize / 2.05 - a4.config.stroke.width - (a4.config.chart.sparkline.enabled ? 0 : a4.config.chart.dropShadow.blur), this.donutSize = a4.globals.radialSize * parseInt(a4.config.plotOptions.pie.donut.size, 10) / 100;
        var s5 = a4.config.plotOptions.pie.customScale, r7 = a4.globals.gridWidth / 2, o8 = a4.globals.gridHeight / 2;
        this.translateX = r7 - r7 * s5, this.translateY = o8 - o8 * s5, this.dataLabelsGroup = new k2(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(s5, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
      }
      return s4(t5, [{ key: "draw", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = new k2(this.ctx), s5 = a4.group({ class: "apexcharts-pie" });
        if (i8.globals.noData) return s5;
        for (var r7 = 0, o8 = 0; o8 < t6.length; o8++) r7 += m2.negToZero(t6[o8]);
        var n7 = [], l4 = a4.group();
        0 === r7 && (r7 = 1e-5), t6.forEach(function(t7) {
          e8.maxY = Math.max(e8.maxY, t7);
        }), i8.config.yaxis[0].max && (this.maxY = i8.config.yaxis[0].max), "back" === i8.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s5);
        for (var h4 = 0; h4 < t6.length; h4++) {
          var c5 = this.fullAngle * m2.negToZero(t6[h4]) / r7;
          n7.push(c5), "polarArea" === this.chartType ? (n7[h4] = this.fullAngle / t6.length, this.sliceSizes.push(i8.globals.radialSize * t6[h4] / this.maxY)) : this.sliceSizes.push(i8.globals.radialSize);
        }
        if (i8.globals.dataChanged) {
          for (var d4, g3 = 0, u4 = 0; u4 < i8.globals.previousPaths.length; u4++) g3 += m2.negToZero(i8.globals.previousPaths[u4]);
          for (var f4 = 0; f4 < i8.globals.previousPaths.length; f4++) d4 = this.fullAngle * m2.negToZero(i8.globals.previousPaths[f4]) / g3, this.prevSectorAngleArr.push(d4);
        }
        if (this.donutSize < 0 && (this.donutSize = 0), "donut" === this.chartType) {
          var p4 = a4.drawCircle(this.donutSize);
          p4.attr({ cx: this.centerX, cy: this.centerY, fill: i8.config.plotOptions.pie.donut.background ? i8.config.plotOptions.pie.donut.background : "transparent" }), l4.add(p4);
        }
        var x3 = this.drawArcs(n7, t6);
        if (this.sliceLabels.forEach(function(t7) {
          x3.add(t7);
        }), l4.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i8.config.plotOptions.pie.customScale, ")") }), l4.add(x3), s5.add(l4), this.donutDataLabels.show) {
          var b4 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
          s5.add(b4);
        }
        return "front" === i8.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s5), s5;
      } }, { key: "drawArcs", value: function(t6, e8) {
        var i8 = this.w, a4 = new w2(this.ctx), s5 = new k2(this.ctx), r7 = new N2(this.ctx), o8 = s5.group({ class: "apexcharts-slices" }), n7 = this.initialAngle, l4 = this.initialAngle, h4 = this.initialAngle, c5 = this.initialAngle;
        this.strokeWidth = i8.config.stroke.show ? i8.config.stroke.width : 0;
        for (var d4 = 0; d4 < t6.length; d4++) {
          var g3 = s5.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: m2.escapeString(i8.globals.seriesNames[d4]), rel: d4 + 1, "data:realIndex": d4 });
          o8.add(g3), l4 = c5, h4 = (n7 = h4) + t6[d4], c5 = l4 + this.prevSectorAngleArr[d4];
          var u4 = h4 < n7 ? this.fullAngle + h4 - n7 : h4 - n7, f4 = r7.fillPath({ seriesNumber: d4, size: this.sliceSizes[d4], value: e8[d4] }), p4 = this.getChangedPath(l4, c5), x3 = s5.drawPath({ d: p4, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d4] : this.lineColorArr, strokeWidth: 0, fill: f4, fillOpacity: i8.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d4) });
          if (x3.attr({ index: 0, j: d4 }), a4.setSelectionFilter(x3, 0, d4), i8.config.chart.dropShadow.enabled) {
            var b4 = i8.config.chart.dropShadow;
            a4.dropShadow(x3, b4, d4);
          }
          this.addListeners(x3, this.donutDataLabels), k2.setAttrs(x3.node, { "data:angle": u4, "data:startAngle": n7, "data:strokeWidth": this.strokeWidth, "data:value": e8[d4] });
          var v3 = { x: 0, y: 0 };
          "pie" === this.chartType || "polarArea" === this.chartType ? v3 = m2.polarToCartesian(this.centerX, this.centerY, i8.globals.radialSize / 1.25 + i8.config.plotOptions.pie.dataLabels.offset, (n7 + u4 / 2) % this.fullAngle) : "donut" === this.chartType && (v3 = m2.polarToCartesian(this.centerX, this.centerY, (i8.globals.radialSize + this.donutSize) / 2 + i8.config.plotOptions.pie.dataLabels.offset, (n7 + u4 / 2) % this.fullAngle)), g3.add(x3);
          var y4 = 0;
          if (!this.initialAnim || i8.globals.resized || i8.globals.dataChanged ? this.animBeginArr.push(0) : (0 === (y4 = u4 / this.fullAngle * i8.config.chart.animations.speed) && (y4 = 1), this.animDur = y4 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i8.globals.dataChanged ? this.animatePaths(x3, { size: this.sliceSizes[d4], endAngle: h4, startAngle: n7, prevStartAngle: l4, prevEndAngle: c5, animateStartingPos: true, i: d4, animBeginArr: this.animBeginArr, shouldSetPrevPaths: true, dur: i8.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(x3, { size: this.sliceSizes[d4], endAngle: h4, startAngle: n7, i: d4, totalItems: t6.length - 1, animBeginArr: this.animBeginArr, dur: y4 }), i8.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && x3.node.addEventListener("mouseup", this.pieClicked.bind(this, d4)), void 0 !== i8.globals.selectedDataPoints[0] && i8.globals.selectedDataPoints[0].indexOf(d4) > -1 && this.pieClicked(d4), i8.config.dataLabels.enabled) {
            var A3 = v3.x, S4 = v3.y, C4 = 100 * u4 / this.fullAngle + "%";
            if (0 !== u4 && i8.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t6[d4]) {
              var L3 = i8.config.dataLabels.formatter;
              void 0 !== L3 && (C4 = L3(i8.globals.seriesPercent[d4][0], { seriesIndex: d4, w: i8 }));
              var P3 = i8.globals.dataLabels.style.colors[d4], M3 = s5.group({ class: "apexcharts-datalabels" }), I3 = s5.drawText({ x: A3, y: S4, text: C4, textAnchor: "middle", fontSize: i8.config.dataLabels.style.fontSize, fontFamily: i8.config.dataLabels.style.fontFamily, fontWeight: i8.config.dataLabels.style.fontWeight, foreColor: P3 });
              if (M3.add(I3), i8.config.dataLabels.dropShadow.enabled) {
                var T3 = i8.config.dataLabels.dropShadow;
                a4.dropShadow(I3, T3);
              }
              I3.node.classList.add("apexcharts-pie-label"), i8.config.chart.animations.animate && false === i8.globals.resized && (I3.node.classList.add("apexcharts-pie-label-delay"), I3.node.style.animationDelay = i8.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(M3);
            }
          }
        }
        return o8;
      } }, { key: "addListeners", value: function(t6, e8) {
        var i8 = new k2(this.ctx);
        t6.node.addEventListener("mouseenter", i8.pathMouseEnter.bind(this, t6)), t6.node.addEventListener("mouseleave", i8.pathMouseLeave.bind(this, t6)), t6.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t6.node, e8)), t6.node.addEventListener("mousedown", i8.pathMouseDown.bind(this, t6)), this.donutDataLabels.total.showAlways || (t6.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t6.node, e8)), t6.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t6.node, e8)));
      } }, { key: "animatePaths", value: function(t6, e8) {
        var i8 = this.w, a4 = e8.endAngle < e8.startAngle ? this.fullAngle + e8.endAngle - e8.startAngle : e8.endAngle - e8.startAngle, s5 = a4, r7 = e8.startAngle, o8 = e8.startAngle;
        void 0 !== e8.prevStartAngle && void 0 !== e8.prevEndAngle && (r7 = e8.prevEndAngle, s5 = e8.prevEndAngle < e8.prevStartAngle ? this.fullAngle + e8.prevEndAngle - e8.prevStartAngle : e8.prevEndAngle - e8.prevStartAngle), e8.i === i8.config.series.length - 1 && (a4 + o8 > this.fullAngle ? e8.endAngle = e8.endAngle - (a4 + o8) : a4 + o8 < this.fullAngle && (e8.endAngle = e8.endAngle + (this.fullAngle - (a4 + o8)))), a4 === this.fullAngle && (a4 = this.fullAngle - 0.01), this.animateArc(t6, r7, o8, a4, s5, e8);
      } }, { key: "animateArc", value: function(t6, e8, i8, a4, s5, r7) {
        var o8, n7 = this, l4 = this.w, h4 = new y3(this.ctx), c5 = r7.size;
        (isNaN(e8) || isNaN(s5)) && (e8 = i8, s5 = a4, r7.dur = 0);
        var d4 = a4, g3 = i8, u4 = e8 < i8 ? this.fullAngle + e8 - i8 : e8 - i8;
        l4.globals.dataChanged && r7.shouldSetPrevPaths && r7.prevEndAngle && (o8 = n7.getPiePath({ me: n7, startAngle: r7.prevStartAngle, angle: r7.prevEndAngle < r7.prevStartAngle ? this.fullAngle + r7.prevEndAngle - r7.prevStartAngle : r7.prevEndAngle - r7.prevStartAngle, size: c5 }), t6.attr({ d: o8 })), 0 !== r7.dur ? t6.animate(r7.dur, l4.globals.easing, r7.animBeginArr[r7.i]).afterAll(function() {
          "pie" !== n7.chartType && "donut" !== n7.chartType && "polarArea" !== n7.chartType || this.animate(l4.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": n7.strokeWidth }), r7.i === l4.config.series.length - 1 && h4.animationCompleted(t6);
        }).during(function(l5) {
          d4 = u4 + (a4 - u4) * l5, r7.animateStartingPos && (d4 = s5 + (a4 - s5) * l5, g3 = e8 - s5 + (i8 - (e8 - s5)) * l5), o8 = n7.getPiePath({ me: n7, startAngle: g3, angle: d4, size: c5 }), t6.node.setAttribute("data:pathOrig", o8), t6.attr({ d: o8 });
        }) : (o8 = n7.getPiePath({ me: n7, startAngle: g3, angle: a4, size: c5 }), r7.isTrack || (l4.globals.animationEnded = true), t6.node.setAttribute("data:pathOrig", o8), t6.attr({ d: o8, "stroke-width": n7.strokeWidth }));
      } }, { key: "pieClicked", value: function(t6) {
        var e8, i8 = this.w, a4 = this, s5 = a4.sliceSizes[t6] + (i8.config.plotOptions.pie.expandOnClick ? 4 : 0), r7 = i8.globals.dom.Paper.select(".apexcharts-".concat(a4.chartType.toLowerCase(), "-slice-").concat(t6)).members[0];
        if ("true" !== r7.attr("data:pieClicked")) {
          var o8 = i8.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
          Array.prototype.forEach.call(o8, function(t7) {
            t7.setAttribute("data:pieClicked", "false");
            var e9 = t7.getAttribute("data:pathOrig");
            e9 && t7.setAttribute("d", e9);
          }), i8.globals.capturedDataPointIndex = t6, r7.attr("data:pieClicked", "true");
          var n7 = parseInt(r7.attr("data:startAngle"), 10), l4 = parseInt(r7.attr("data:angle"), 10);
          e8 = a4.getPiePath({ me: a4, startAngle: n7, angle: l4, size: s5 }), 360 !== l4 && r7.plot(e8);
        } else {
          r7.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r7.node, this.donutDataLabels);
          var h4 = r7.attr("data:pathOrig");
          r7.attr({ d: h4 });
        }
      } }, { key: "getChangedPath", value: function(t6, e8) {
        var i8 = "";
        return this.dynamicAnim && this.w.globals.dataChanged && (i8 = this.getPiePath({ me: this, startAngle: t6, angle: e8 - t6, size: this.size })), i8;
      } }, { key: "getPiePath", value: function(t6) {
        var e8, i8 = t6.me, a4 = t6.startAngle, s5 = t6.angle, r7 = t6.size, o8 = new k2(this.ctx), n7 = a4, l4 = Math.PI * (n7 - 90) / 180, h4 = s5 + a4;
        Math.ceil(h4) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h4 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(h4) > this.fullAngle && (h4 -= this.fullAngle);
        var c5 = Math.PI * (h4 - 90) / 180, d4 = i8.centerX + r7 * Math.cos(l4), g3 = i8.centerY + r7 * Math.sin(l4), u4 = i8.centerX + r7 * Math.cos(c5), f4 = i8.centerY + r7 * Math.sin(c5), p4 = m2.polarToCartesian(i8.centerX, i8.centerY, i8.donutSize, h4), x3 = m2.polarToCartesian(i8.centerX, i8.centerY, i8.donutSize, n7), b4 = s5 > 180 ? 1 : 0, v3 = ["M", d4, g3, "A", r7, r7, 0, b4, 1, u4, f4];
        return e8 = "donut" === i8.chartType ? [].concat(v3, ["L", p4.x, p4.y, "A", i8.donutSize, i8.donutSize, 0, b4, 0, x3.x, x3.y, "L", d4, g3, "z"]).join(" ") : "pie" === i8.chartType || "polarArea" === i8.chartType ? [].concat(v3, ["L", i8.centerX, i8.centerY, "L", d4, g3]).join(" ") : [].concat(v3).join(" "), o8.roundPathCorners(e8, 2 * this.strokeWidth);
      } }, { key: "drawPolarElements", value: function(t6) {
        var e8 = this.w, i8 = new $2(this.ctx), a4 = new k2(this.ctx), s5 = new It(this.ctx), r7 = a4.group(), o8 = a4.group(), n7 = i8.niceScale(0, Math.ceil(this.maxY), 0), l4 = n7.result.reverse(), h4 = n7.result.length;
        this.maxY = n7.niceMax;
        for (var c5 = e8.globals.radialSize, d4 = c5 / (h4 - 1), g3 = 0; g3 < h4 - 1; g3++) {
          var u4 = a4.drawCircle(c5);
          if (u4.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e8.config.plotOptions.polarArea.rings.strokeWidth, stroke: e8.config.plotOptions.polarArea.rings.strokeColor }), e8.config.yaxis[0].show) {
            var f4 = s5.drawYAxisTexts(this.centerX, this.centerY - c5 + parseInt(e8.config.yaxis[0].labels.style.fontSize, 10) / 2, g3, l4[g3]);
            o8.add(f4);
          }
          r7.add(u4), c5 -= d4;
        }
        this.drawSpokes(t6), t6.add(r7), t6.add(o8);
      } }, { key: "renderInnerDataLabels", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = new k2(this.ctx), r7 = e8.total.show;
        t6.node.innerHTML = "", t6.node.style.opacity = i8.opacity;
        var o8, n7, l4 = i8.centerX, h4 = this.donutDataLabels.total.label ? i8.centerY : i8.centerY - i8.centerY / 6;
        o8 = void 0 === e8.name.color ? a4.globals.colors[0] : e8.name.color;
        var c5 = e8.name.fontSize, d4 = e8.name.fontFamily, g3 = e8.name.fontWeight;
        n7 = void 0 === e8.value.color ? a4.config.chart.foreColor : e8.value.color;
        var u4 = e8.value.formatter, f4 = "", p4 = "";
        if (r7 ? (o8 = e8.total.color, c5 = e8.total.fontSize, d4 = e8.total.fontFamily, g3 = e8.total.fontWeight, p4 = this.donutDataLabels.total.label ? e8.total.label : "", f4 = e8.total.formatter(a4)) : 1 === a4.globals.series.length && (f4 = u4(a4.globals.series[0], a4), p4 = a4.globals.seriesNames[0]), p4 && (p4 = e8.name.formatter(p4, e8.total.show, a4)), e8.name.show) {
          var x3 = s5.drawText({ x: l4, y: h4 + parseFloat(e8.name.offsetY), text: p4, textAnchor: "middle", foreColor: o8, fontSize: c5, fontWeight: g3, fontFamily: d4 });
          x3.node.classList.add("apexcharts-datalabel-label"), t6.add(x3);
        }
        if (e8.value.show) {
          var b4 = e8.name.show ? parseFloat(e8.value.offsetY) + 16 : e8.value.offsetY, v3 = s5.drawText({ x: l4, y: h4 + b4, text: f4, textAnchor: "middle", foreColor: n7, fontWeight: e8.value.fontWeight, fontSize: e8.value.fontSize, fontFamily: e8.value.fontFamily });
          v3.node.classList.add("apexcharts-datalabel-value"), t6.add(v3);
        }
        return t6;
      } }, { key: "printInnerLabels", value: function(t6, e8, i8, a4) {
        var s5, r7 = this.w;
        a4 ? s5 = void 0 === t6.name.color ? r7.globals.colors[parseInt(a4.parentNode.getAttribute("rel"), 10) - 1] : t6.name.color : r7.globals.series.length > 1 && t6.total.show && (s5 = t6.total.color);
        var o8 = r7.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n7 = r7.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
        i8 = (0, t6.value.formatter)(i8, r7), a4 || "function" != typeof t6.total.formatter || (i8 = t6.total.formatter(r7));
        var l4 = e8 === t6.total.label;
        e8 = this.donutDataLabels.total.label ? t6.name.formatter(e8, l4, r7) : "", null !== o8 && (o8.textContent = e8), null !== n7 && (n7.textContent = i8), null !== o8 && (o8.style.fill = s5);
      } }, { key: "printDataLabelsInner", value: function(t6, e8) {
        var i8 = this.w, a4 = t6.getAttribute("data:value"), s5 = i8.globals.seriesNames[parseInt(t6.parentNode.getAttribute("rel"), 10) - 1];
        i8.globals.series.length > 1 && this.printInnerLabels(e8, s5, a4, t6);
        var r7 = i8.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
        null !== r7 && (r7.style.opacity = 1);
      } }, { key: "drawSpokes", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = new k2(this.ctx), s5 = i8.config.plotOptions.polarArea.spokes;
        if (0 !== s5.strokeWidth) {
          for (var r7 = [], o8 = 360 / i8.globals.series.length, n7 = 0; n7 < i8.globals.series.length; n7++) r7.push(m2.polarToCartesian(this.centerX, this.centerY, i8.globals.radialSize, i8.config.plotOptions.pie.startAngle + o8 * n7));
          r7.forEach(function(i9, r8) {
            var o9 = a4.drawLine(i9.x, i9.y, e8.centerX, e8.centerY, Array.isArray(s5.connectorColors) ? s5.connectorColors[r8] : s5.connectorColors);
            t6.add(o9);
          });
        }
      } }, { key: "revertDataLabelsInner", value: function() {
        var t6 = this.w;
        if (this.donutDataLabels.show) {
          var e8 = t6.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0], i8 = this.renderInnerDataLabels(e8, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
          t6.globals.dom.Paper.select(".apexcharts-radialbar, .apexcharts-pie").members[0].add(i8);
        }
      } }]), t5;
    }();
    var zt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
        var a4 = this.w;
        this.graphics = new k2(this.ctx), this.lineColorArr = void 0 !== a4.globals.stroke.colors ? a4.globals.stroke.colors : a4.globals.colors, this.defaultSize = a4.globals.svgHeight < a4.globals.svgWidth ? a4.globals.gridHeight : a4.globals.gridWidth, this.isLog = a4.config.yaxis[0].logarithmic, this.logBase = a4.config.yaxis[0].logBase, this.coreUtils = new A2(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, a4.globals.maxY, 0) : a4.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : a4.globals.minY, this.polygons = a4.config.plotOptions.radar.polygons, this.strokeWidth = a4.config.stroke.show ? a4.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - a4.config.chart.dropShadow.blur, a4.config.xaxis.labels.show && (this.size = this.size - a4.globals.xAxisLabelsWidth / 1.75), void 0 !== a4.config.plotOptions.radar.size && (this.size = a4.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
      }
      return s4(t5, [{ key: "draw", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = new N2(this.ctx), s5 = [], r7 = new G(this.ctx);
        t6.length && (this.dataPointsLen = t6[i8.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
        var o8 = i8.globals.gridWidth / 2, n7 = i8.globals.gridHeight / 2, l4 = o8 + i8.config.plotOptions.radar.offsetX, h4 = n7 + i8.config.plotOptions.radar.offsetY, c5 = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(l4 || 0, ", ").concat(h4 || 0, ")") }), d4 = [], u4 = null, f4 = null;
        if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t6.forEach(function(t7, o9) {
          var n8 = t7.length === i8.globals.dataPoints, l5 = e8.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": n8, seriesName: m2.escapeString(i8.globals.seriesNames[o9]), rel: o9 + 1, "data:realIndex": o9 });
          e8.dataRadiusOfPercent[o9] = [], e8.dataRadius[o9] = [], e8.angleArr[o9] = [], t7.forEach(function(t8, i9) {
            var a5 = Math.abs(e8.maxValue - e8.minValue);
            t8 -= e8.minValue, e8.isLog && (t8 = e8.coreUtils.getLogVal(e8.logBase, t8, 0)), e8.dataRadiusOfPercent[o9][i9] = t8 / a5, e8.dataRadius[o9][i9] = e8.dataRadiusOfPercent[o9][i9] * e8.size, e8.angleArr[o9][i9] = i9 * e8.disAngle;
          }), d4 = e8.getDataPointsPos(e8.dataRadius[o9], e8.angleArr[o9]);
          var h5 = e8.createPaths(d4, { x: 0, y: 0 });
          u4 = e8.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), f4 = e8.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": o9 }), i8.globals.delayedElements.push({ el: u4.node, index: o9 });
          var c6 = { i: o9, realIndex: o9, animationDelay: o9, initialSpeed: i8.config.chart.animations.speed, dataChangeSpeed: i8.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: false, bindEventsOnPaths: false, stroke: i8.globals.stroke.colors[o9], strokeLineCap: i8.config.stroke.lineCap }, p5 = null;
          i8.globals.previousPaths.length > 0 && (p5 = e8.getPreviousPath(o9));
          for (var x3 = 0; x3 < h5.linePathsTo.length; x3++) {
            var b4 = e8.graphics.renderPaths(g2(g2({}, c6), {}, { pathFrom: null === p5 ? h5.linePathsFrom[x3] : p5, pathTo: h5.linePathsTo[x3], strokeWidth: Array.isArray(e8.strokeWidth) ? e8.strokeWidth[o9] : e8.strokeWidth, fill: "none", drawShadow: false }));
            l5.add(b4);
            var v3 = a4.fillPath({ seriesNumber: o9 }), y4 = e8.graphics.renderPaths(g2(g2({}, c6), {}, { pathFrom: null === p5 ? h5.areaPathsFrom[x3] : p5, pathTo: h5.areaPathsTo[x3], strokeWidth: 0, fill: v3, drawShadow: false }));
            if (i8.config.chart.dropShadow.enabled) {
              var k3 = new w2(e8.ctx), A3 = i8.config.chart.dropShadow;
              k3.dropShadow(y4, Object.assign({}, A3, { noUserSpaceOnUse: true }), o9);
            }
            l5.add(y4);
          }
          t7.forEach(function(t8, a5) {
            var s6 = new W(e8.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: o9, dataPointIndex: a5 }), n9 = e8.graphics.drawMarker(d4[a5].x, d4[a5].y, s6);
            n9.attr("rel", a5), n9.attr("j", a5), n9.attr("index", o9), n9.node.setAttribute("default-marker-size", s6.pSize);
            var h6 = e8.graphics.group({ class: "apexcharts-series-markers" });
            h6 && h6.add(n9), u4.add(h6), l5.add(u4);
            var c7 = i8.config.dataLabels;
            if (c7.enabled) {
              var p6 = c7.formatter(i8.globals.series[o9][a5], { seriesIndex: o9, dataPointIndex: a5, w: i8 });
              r7.plotDataLabelsText({ x: d4[a5].x, y: d4[a5].y, text: p6, textAnchor: "middle", i: o9, j: o9, parent: f4, offsetCorrection: false, dataLabelsConfig: g2({}, c7) });
            }
            l5.add(f4);
          }), s5.push(l5);
        }), this.drawPolygons({ parent: c5 }), i8.config.xaxis.labels.show) {
          var p4 = this.drawXAxisTexts();
          c5.add(p4);
        }
        return s5.forEach(function(t7) {
          c5.add(t7);
        }), c5.add(this.yaxisLabels), c5;
      } }, { key: "drawPolygons", value: function(t6) {
        for (var e8 = this, i8 = this.w, a4 = t6.parent, s5 = new It(this.ctx), r7 = i8.globals.yAxisScale[0].result.reverse(), o8 = r7.length, n7 = [], l4 = this.size / (o8 - 1), h4 = 0; h4 < o8; h4++) n7[h4] = l4 * h4;
        n7.reverse();
        var c5 = [], d4 = [];
        n7.forEach(function(t7, i9) {
          var a5 = m2.getPolygonPos(t7, e8.dataPointsLen), s6 = "";
          a5.forEach(function(t8, a6) {
            if (0 === i9) {
              var r8 = e8.graphics.drawLine(t8.x, t8.y, 0, 0, Array.isArray(e8.polygons.connectorColors) ? e8.polygons.connectorColors[a6] : e8.polygons.connectorColors);
              d4.push(r8);
            }
            0 === a6 && e8.yaxisLabelsTextsPos.push({ x: t8.x, y: t8.y }), s6 += t8.x + "," + t8.y + " ";
          }), c5.push(s6);
        }), c5.forEach(function(t7, s6) {
          var r8 = e8.polygons.strokeColors, o9 = e8.polygons.strokeWidth, n8 = e8.graphics.drawPolygon(t7, Array.isArray(r8) ? r8[s6] : r8, Array.isArray(o9) ? o9[s6] : o9, i8.globals.radarPolygons.fill.colors[s6]);
          a4.add(n8);
        }), d4.forEach(function(t7) {
          a4.add(t7);
        }), i8.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(t7, i9) {
          var a5 = s5.drawYAxisTexts(t7.x, t7.y, i9, r7[i9]);
          e8.yaxisLabels.add(a5);
        });
      } }, { key: "drawXAxisTexts", value: function() {
        var t6 = this, e8 = this.w, i8 = e8.config.xaxis.labels, a4 = this.graphics.group({ class: "apexcharts-xaxis" }), s5 = m2.getPolygonPos(this.size, this.dataPointsLen);
        return e8.globals.labels.forEach(function(r7, o8) {
          var n7 = e8.config.xaxis.labels.formatter, l4 = new G(t6.ctx);
          if (s5[o8]) {
            var h4 = t6.getTextPos(s5[o8], t6.size), c5 = n7(r7, { seriesIndex: -1, dataPointIndex: o8, w: e8 });
            l4.plotDataLabelsText({ x: h4.newX, y: h4.newY, text: c5, textAnchor: h4.textAnchor, i: o8, j: o8, parent: a4, className: "apexcharts-xaxis-label", color: Array.isArray(i8.style.colors) && i8.style.colors[o8] ? i8.style.colors[o8] : "#a8a8a8", dataLabelsConfig: g2({ textAnchor: h4.textAnchor, dropShadow: { enabled: false } }, i8), offsetCorrection: false }).on("click", function(i9) {
              if ("function" == typeof e8.config.chart.events.xAxisLabelClick) {
                var a5 = Object.assign({}, e8, { labelIndex: o8 });
                e8.config.chart.events.xAxisLabelClick(i9, t6.ctx, a5);
              }
            });
          }
        }), a4;
      } }, { key: "createPaths", value: function(t6, e8) {
        var i8 = this, a4 = [], s5 = [], r7 = [], o8 = [];
        if (t6.length) {
          s5 = [this.graphics.move(e8.x, e8.y)], o8 = [this.graphics.move(e8.x, e8.y)];
          var n7 = this.graphics.move(t6[0].x, t6[0].y), l4 = this.graphics.move(t6[0].x, t6[0].y);
          t6.forEach(function(e9, a5) {
            n7 += i8.graphics.line(e9.x, e9.y), l4 += i8.graphics.line(e9.x, e9.y), a5 === t6.length - 1 && (n7 += "Z", l4 += "Z");
          }), a4.push(n7), r7.push(l4);
        }
        return { linePathsFrom: s5, linePathsTo: a4, areaPathsFrom: o8, areaPathsTo: r7 };
      } }, { key: "getTextPos", value: function(t6, e8) {
        var i8 = "middle", a4 = t6.x, s5 = t6.y;
        return Math.abs(t6.x) >= 10 ? t6.x > 0 ? (i8 = "start", a4 += 10) : t6.x < 0 && (i8 = "end", a4 -= 10) : i8 = "middle", Math.abs(t6.y) >= e8 - 10 && (t6.y < 0 ? s5 -= 10 : t6.y > 0 && (s5 += 10)), { textAnchor: i8, newX: a4, newY: s5 };
      } }, { key: "getPreviousPath", value: function(t6) {
        for (var e8 = this.w, i8 = null, a4 = 0; a4 < e8.globals.previousPaths.length; a4++) {
          var s5 = e8.globals.previousPaths[a4];
          s5.paths.length > 0 && parseInt(s5.realIndex, 10) === parseInt(t6, 10) && void 0 !== e8.globals.previousPaths[a4].paths[0] && (i8 = e8.globals.previousPaths[a4].paths[0].d);
        }
        return i8;
      } }, { key: "getDataPointsPos", value: function(t6, e8) {
        var i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
        t6 = t6 || [], e8 = e8 || [];
        for (var a4 = [], s5 = 0; s5 < i8; s5++) {
          var r7 = {};
          r7.x = t6[s5] * Math.sin(e8[s5]), r7.y = -t6[s5] * Math.cos(e8[s5]), a4.push(r7);
        }
        return a4;
      } }]), t5;
    }();
    var Xt = function(t5) {
      h3(r7, Tt);
      var a4 = o7(r7);
      function r7(t6) {
        var s5;
        i7(this, r7), (s5 = a4.call(this, t6)).ctx = t6, s5.w = t6.w, s5.animBeginArr = [0], s5.animDur = 0;
        var o8 = s5.w;
        return s5.startAngle = o8.config.plotOptions.radialBar.startAngle, s5.endAngle = o8.config.plotOptions.radialBar.endAngle, s5.totalAngle = Math.abs(o8.config.plotOptions.radialBar.endAngle - o8.config.plotOptions.radialBar.startAngle), s5.trackStartAngle = o8.config.plotOptions.radialBar.track.startAngle, s5.trackEndAngle = o8.config.plotOptions.radialBar.track.endAngle, s5.barLabels = s5.w.config.plotOptions.radialBar.barLabels, s5.donutDataLabels = s5.w.config.plotOptions.radialBar.dataLabels, s5.radialDataLabels = s5.donutDataLabels, s5.trackStartAngle || (s5.trackStartAngle = s5.startAngle), s5.trackEndAngle || (s5.trackEndAngle = s5.endAngle), 360 === s5.endAngle && (s5.endAngle = 359.99), s5.margin = parseInt(o8.config.plotOptions.radialBar.track.margin, 10), s5.onBarLabelClick = s5.onBarLabelClick.bind(e7(s5)), s5;
      }
      return s4(r7, [{ key: "draw", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a5 = i8.group({ class: "apexcharts-radialbar" });
        if (e8.globals.noData) return a5;
        var s5 = i8.group(), r8 = this.defaultSize / 2, o8 = e8.globals.gridWidth / 2, n7 = this.defaultSize / 2.05;
        e8.config.chart.sparkline.enabled || (n7 = n7 - e8.config.stroke.width - e8.config.chart.dropShadow.blur);
        var l4 = e8.globals.fill.colors;
        if (e8.config.plotOptions.radialBar.track.show) {
          var h4 = this.drawTracks({ size: n7, centerX: o8, centerY: r8, colorArr: l4, series: t6 });
          s5.add(h4);
        }
        var c5 = this.drawArcs({ size: n7, centerX: o8, centerY: r8, colorArr: l4, series: t6 }), d4 = 360;
        e8.config.plotOptions.radialBar.startAngle < 0 && (d4 = this.totalAngle);
        var g3 = (360 - d4) / 360;
        if (e8.globals.radialSize = n7 - n7 * g3, this.radialDataLabels.value.show) {
          var u4 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
          e8.globals.radialSize += u4 * g3;
        }
        return s5.add(c5.g), "front" === e8.config.plotOptions.radialBar.hollow.position && (c5.g.add(c5.elHollow), c5.dataLabels && c5.g.add(c5.dataLabels)), a5.add(s5), a5;
      } }, { key: "drawTracks", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a5 = i8.group({ class: "apexcharts-tracks" }), s5 = new w2(this.ctx), r8 = new N2(this.ctx), o8 = this.getStrokeWidth(t6);
        t6.size = t6.size - o8 / 2;
        for (var n7 = 0; n7 < t6.series.length; n7++) {
          var l4 = i8.group({ class: "apexcharts-radialbar-track apexcharts-track" });
          a5.add(l4), l4.attr({ rel: n7 + 1 }), t6.size = t6.size - o8 - this.margin;
          var h4 = e8.config.plotOptions.radialBar.track, c5 = r8.fillPath({ seriesNumber: 0, size: t6.size, fillColors: Array.isArray(h4.background) ? h4.background[n7] : h4.background, solid: true }), d4 = this.trackStartAngle, g3 = this.trackEndAngle;
          Math.abs(g3) + Math.abs(d4) >= 360 && (g3 = 360 - Math.abs(this.startAngle) - 0.1);
          var u4 = i8.drawPath({ d: "", stroke: c5, strokeWidth: o8 * parseInt(h4.strokeWidth, 10) / 100, fill: "none", strokeOpacity: h4.opacity, classes: "apexcharts-radialbar-area" });
          if (h4.dropShadow.enabled) {
            var f4 = h4.dropShadow;
            s5.dropShadow(u4, f4);
          }
          l4.add(u4), u4.attr("id", "apexcharts-radialbarTrack-" + n7), this.animatePaths(u4, { centerX: t6.centerX, centerY: t6.centerY, endAngle: g3, startAngle: d4, size: t6.size, i: n7, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: true, easing: e8.globals.easing });
        }
        return a5;
      } }, { key: "drawArcs", value: function(t6) {
        var e8 = this.w, i8 = new k2(this.ctx), a5 = new N2(this.ctx), s5 = new w2(this.ctx), r8 = i8.group(), o8 = this.getStrokeWidth(t6);
        t6.size = t6.size - o8 / 2;
        var n7 = e8.config.plotOptions.radialBar.hollow.background, l4 = t6.size - o8 * t6.series.length - this.margin * t6.series.length - o8 * parseInt(e8.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h4 = l4 - e8.config.plotOptions.radialBar.hollow.margin;
        void 0 !== e8.config.plotOptions.radialBar.hollow.image && (n7 = this.drawHollowImage(t6, r8, l4, n7));
        var c5 = this.drawHollow({ size: h4, centerX: t6.centerX, centerY: t6.centerY, fill: n7 || "transparent" });
        if (e8.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
          var d4 = e8.config.plotOptions.radialBar.hollow.dropShadow;
          s5.dropShadow(c5, d4);
        }
        var g3 = 1;
        !this.radialDataLabels.total.show && e8.globals.series.length > 1 && (g3 = 0);
        var u4 = null;
        if (this.radialDataLabels.show) {
          var f4 = e8.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0];
          u4 = this.renderInnerDataLabels(f4, this.radialDataLabels, { hollowSize: l4, centerX: t6.centerX, centerY: t6.centerY, opacity: g3 });
        }
        "back" === e8.config.plotOptions.radialBar.hollow.position && (r8.add(c5), u4 && r8.add(u4));
        var p4 = false;
        e8.config.plotOptions.radialBar.inverseOrder && (p4 = true);
        for (var x3 = p4 ? t6.series.length - 1 : 0; p4 ? x3 >= 0 : x3 < t6.series.length; p4 ? x3-- : x3++) {
          var b4 = i8.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: m2.escapeString(e8.globals.seriesNames[x3]) });
          r8.add(b4), b4.attr({ rel: x3 + 1, "data:realIndex": x3 }), this.ctx.series.addCollapsedClassToSeries(b4, x3), t6.size = t6.size - o8 - this.margin;
          var v3 = a5.fillPath({ seriesNumber: x3, size: t6.size, value: t6.series[x3] }), y4 = this.startAngle, A3 = void 0, S4 = m2.negToZero(t6.series[x3] > 100 ? 100 : t6.series[x3]) / 100, C4 = Math.round(this.totalAngle * S4) + this.startAngle, L3 = void 0;
          e8.globals.dataChanged && (A3 = this.startAngle, L3 = Math.round(this.totalAngle * m2.negToZero(e8.globals.previousPaths[x3]) / 100) + A3), Math.abs(C4) + Math.abs(y4) > 360 && (C4 -= 0.01), Math.abs(L3) + Math.abs(A3) > 360 && (L3 -= 0.01);
          var P3 = C4 - y4, M3 = Array.isArray(e8.config.stroke.dashArray) ? e8.config.stroke.dashArray[x3] : e8.config.stroke.dashArray, I3 = i8.drawPath({ d: "", stroke: v3, strokeWidth: o8, fill: "none", fillOpacity: e8.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + x3, strokeDashArray: M3 });
          if (k2.setAttrs(I3.node, { "data:angle": P3, "data:value": t6.series[x3] }), e8.config.chart.dropShadow.enabled) {
            var T3 = e8.config.chart.dropShadow;
            s5.dropShadow(I3, T3, x3);
          }
          if (s5.setSelectionFilter(I3, 0, x3), this.addListeners(I3, this.radialDataLabels), b4.add(I3), I3.attr({ index: 0, j: x3 }), this.barLabels.enabled) {
            var z3 = m2.polarToCartesian(t6.centerX, t6.centerY, t6.size, y4), X2 = this.barLabels.formatter(e8.globals.seriesNames[x3], { seriesIndex: x3, w: e8 }), E3 = ["apexcharts-radialbar-label"];
            this.barLabels.onClick || E3.push("apexcharts-no-click");
            var Y2 = this.barLabels.useSeriesColors ? e8.globals.colors[x3] : e8.config.chart.foreColor;
            Y2 || (Y2 = e8.config.chart.foreColor);
            var R3 = z3.x + this.barLabels.offsetX, F2 = z3.y + this.barLabels.offsetY, D3 = i8.drawText({ x: R3, y: F2, text: X2, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: Y2, cssClass: E3.join(" ") });
            D3.on("click", this.onBarLabelClick), D3.attr({ rel: x3 + 1 }), 0 !== y4 && D3.attr({ "transform-origin": "".concat(R3, " ").concat(F2), transform: "rotate(".concat(y4, " 0 0)") }), b4.add(D3);
          }
          var H3 = 0;
          !this.initialAnim || e8.globals.resized || e8.globals.dataChanged || (H3 = e8.config.chart.animations.speed), e8.globals.dataChanged && (H3 = e8.config.chart.animations.dynamicAnimation.speed), this.animDur = H3 / (1.2 * t6.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(I3, { centerX: t6.centerX, centerY: t6.centerY, endAngle: C4, startAngle: y4, prevEndAngle: L3, prevStartAngle: A3, size: t6.size, i: x3, totalItems: 2, animBeginArr: this.animBeginArr, dur: H3, shouldSetPrevPaths: true, easing: e8.globals.easing });
        }
        return { g: r8, elHollow: c5, dataLabels: u4 };
      } }, { key: "drawHollow", value: function(t6) {
        var e8 = new k2(this.ctx).drawCircle(2 * t6.size);
        return e8.attr({ class: "apexcharts-radialbar-hollow", cx: t6.centerX, cy: t6.centerY, r: t6.size, fill: t6.fill }), e8;
      } }, { key: "drawHollowImage", value: function(t6, e8, i8, a5) {
        var s5 = this.w, r8 = new N2(this.ctx), o8 = m2.randomId(), n7 = s5.config.plotOptions.radialBar.hollow.image;
        if (s5.config.plotOptions.radialBar.hollow.imageClipped) r8.clippedImgArea({ width: i8, height: i8, image: n7, patternID: "pattern".concat(s5.globals.cuid).concat(o8) }), a5 = "url(#pattern".concat(s5.globals.cuid).concat(o8, ")");
        else {
          var l4 = s5.config.plotOptions.radialBar.hollow.imageWidth, h4 = s5.config.plotOptions.radialBar.hollow.imageHeight;
          if (void 0 === l4 && void 0 === h4) {
            var c5 = s5.globals.dom.Paper.image(n7).loaded(function(e9) {
              this.move(t6.centerX - e9.width / 2 + s5.config.plotOptions.radialBar.hollow.imageOffsetX, t6.centerY - e9.height / 2 + s5.config.plotOptions.radialBar.hollow.imageOffsetY);
            });
            e8.add(c5);
          } else {
            var d4 = s5.globals.dom.Paper.image(n7).loaded(function(e9) {
              this.move(t6.centerX - l4 / 2 + s5.config.plotOptions.radialBar.hollow.imageOffsetX, t6.centerY - h4 / 2 + s5.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l4, h4);
            });
            e8.add(d4);
          }
        }
        return a5;
      } }, { key: "getStrokeWidth", value: function(t6) {
        var e8 = this.w;
        return t6.size * (100 - parseInt(e8.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t6.series.length + 1) - this.margin;
      } }, { key: "onBarLabelClick", value: function(t6) {
        var e8 = parseInt(t6.target.getAttribute("rel"), 10) - 1, i8 = this.barLabels.onClick, a5 = this.w;
        i8 && i8(a5.globals.seriesNames[e8], { w: a5, seriesIndex: e8 });
      } }]), r7;
    }();
    var Et = function(t5) {
      h3(a4, St);
      var e8 = o7(a4);
      function a4() {
        return i7(this, a4), e8.apply(this, arguments);
      }
      return s4(a4, [{ key: "draw", value: function(t6, e9) {
        var i8 = this.w, a5 = new k2(this.ctx);
        this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t6, this.seriesRangeStart = i8.globals.seriesRangeStart, this.seriesRangeEnd = i8.globals.seriesRangeEnd, this.barHelpers.initVariables(t6);
        for (var s5 = a5.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), r7 = 0; r7 < t6.length; r7++) {
          var o8, n7, l4, h4, c5 = void 0, d4 = void 0, u4 = i8.globals.comboCharts ? e9[r7] : r7, f4 = this.barHelpers.getGroupIndex(u4).columnGroupIndex, p4 = a5.group({ class: "apexcharts-series", seriesName: m2.escapeString(i8.globals.seriesNames[u4]), rel: r7 + 1, "data:realIndex": u4 });
          this.ctx.series.addCollapsedClassToSeries(p4, u4), t6[r7].length > 0 && (this.visibleI = this.visibleI + 1);
          var x3 = 0, b4 = 0, v3 = 0;
          this.yRatio.length > 1 && (this.yaxisIndex = i8.globals.seriesYAxisReverseMap[u4][0], v3 = u4);
          var y4 = this.barHelpers.initialPositions();
          d4 = y4.y, h4 = y4.zeroW, c5 = y4.x, b4 = y4.barWidth, x3 = y4.barHeight, o8 = y4.xDivision, n7 = y4.yDivision, l4 = y4.zeroH;
          for (var w3 = a5.group({ class: "apexcharts-datalabels", "data:realIndex": u4 }), A3 = a5.group({ class: "apexcharts-rangebar-goals-markers" }), S4 = 0; S4 < i8.globals.dataPoints; S4++) {
            var C4 = this.barHelpers.getStrokeWidth(r7, S4, u4), L3 = this.seriesRangeStart[r7][S4], P3 = this.seriesRangeEnd[r7][S4], M3 = null, I3 = null, T3 = null, z3 = { x: c5, y: d4, strokeWidth: C4, elSeries: p4 }, X2 = this.seriesLen;
            if (i8.config.plotOptions.bar.rangeBarGroupRows && (X2 = 1), void 0 === i8.config.series[r7].data[S4]) break;
            if (this.isHorizontal) {
              T3 = d4 + x3 * this.visibleI;
              var E3 = (n7 - x3 * X2) / 2;
              if (i8.config.series[r7].data[S4].x) {
                var Y2 = this.detectOverlappingBars({ i: r7, j: S4, barYPosition: T3, srty: E3, barHeight: x3, yDivision: n7, initPositions: y4 });
                x3 = Y2.barHeight, T3 = Y2.barYPosition;
              }
              b4 = (M3 = this.drawRangeBarPaths(g2({ indexes: { i: r7, j: S4, realIndex: u4 }, barHeight: x3, barYPosition: T3, zeroW: h4, yDivision: n7, y1: L3, y2: P3 }, z3))).barWidth;
            } else {
              i8.globals.isXNumeric && (c5 = (i8.globals.seriesX[r7][S4] - i8.globals.minX) / this.xRatio - b4 / 2), I3 = c5 + b4 * this.visibleI;
              var R3 = (o8 - b4 * X2) / 2;
              if (i8.config.series[r7].data[S4].x) {
                var F2 = this.detectOverlappingBars({ i: r7, j: S4, barXPosition: I3, srtx: R3, barWidth: b4, xDivision: o8, initPositions: y4 });
                b4 = F2.barWidth, I3 = F2.barXPosition;
              }
              x3 = (M3 = this.drawRangeColumnPaths(g2({ indexes: { i: r7, j: S4, realIndex: u4, translationsIndex: v3 }, barWidth: b4, barXPosition: I3, zeroH: l4, xDivision: o8 }, z3))).barHeight;
            }
            var D3 = this.barHelpers.drawGoalLine({ barXPosition: M3.barXPosition, barYPosition: T3, goalX: M3.goalX, goalY: M3.goalY, barHeight: x3, barWidth: b4 });
            D3 && A3.add(D3), d4 = M3.y, c5 = M3.x;
            var H3 = this.barHelpers.getPathFillColor(t6, r7, S4, u4), O2 = i8.globals.stroke.colors[u4];
            this.renderSeries({ realIndex: u4, pathFill: H3, lineFill: O2, j: S4, i: r7, x: c5, y: d4, y1: L3, y2: P3, pathFrom: M3.pathFrom, pathTo: M3.pathTo, strokeWidth: C4, elSeries: p4, series: t6, barHeight: x3, barWidth: b4, barXPosition: I3, barYPosition: T3, columnGroupIndex: f4, elDataLabelsWrap: w3, elGoalsMarkers: A3, visibleSeries: this.visibleI, type: "rangebar" });
          }
          s5.add(p4);
        }
        return s5;
      } }, { key: "detectOverlappingBars", value: function(t6) {
        var e9 = t6.i, i8 = t6.j, a5 = t6.barYPosition, s5 = t6.barXPosition, r7 = t6.srty, o8 = t6.srtx, n7 = t6.barHeight, l4 = t6.barWidth, h4 = t6.yDivision, c5 = t6.xDivision, d4 = t6.initPositions, g3 = this.w, u4 = [], f4 = g3.config.series[e9].data[i8].rangeName, p4 = g3.config.series[e9].data[i8].x, x3 = Array.isArray(p4) ? p4.join(" ") : p4, b4 = g3.globals.labels.map(function(t7) {
          return Array.isArray(t7) ? t7.join(" ") : t7;
        }).indexOf(x3), v3 = g3.globals.seriesRange[e9].findIndex(function(t7) {
          return t7.x === x3 && t7.overlaps.length > 0;
        });
        return this.isHorizontal ? (a5 = g3.config.plotOptions.bar.rangeBarGroupRows ? r7 + h4 * b4 : r7 + n7 * this.visibleI + h4 * b4, v3 > -1 && !g3.config.plotOptions.bar.rangeBarOverlap && (u4 = g3.globals.seriesRange[e9][v3].overlaps).indexOf(f4) > -1 && (a5 = (n7 = d4.barHeight / u4.length) * this.visibleI + h4 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + n7 * (this.visibleI + u4.indexOf(f4)) + h4 * b4)) : (b4 > -1 && !g3.globals.timescaleLabels.length && (s5 = g3.config.plotOptions.bar.rangeBarGroupRows ? o8 + c5 * b4 : o8 + l4 * this.visibleI + c5 * b4), v3 > -1 && !g3.config.plotOptions.bar.rangeBarOverlap && (u4 = g3.globals.seriesRange[e9][v3].overlaps).indexOf(f4) > -1 && (s5 = (l4 = d4.barWidth / u4.length) * this.visibleI + c5 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l4 * (this.visibleI + u4.indexOf(f4)) + c5 * b4)), { barYPosition: a5, barXPosition: s5, barHeight: n7, barWidth: l4 };
      } }, { key: "drawRangeColumnPaths", value: function(t6) {
        var e9 = t6.indexes, i8 = t6.x, a5 = t6.xDivision, s5 = t6.barWidth, r7 = t6.barXPosition, o8 = t6.zeroH, n7 = this.w, l4 = e9.i, h4 = e9.j, c5 = e9.realIndex, d4 = e9.translationsIndex, g3 = this.yRatio[d4], u4 = this.getRangeValue(c5, h4), f4 = Math.min(u4.start, u4.end), p4 = Math.max(u4.start, u4.end);
        void 0 === this.series[l4][h4] || null === this.series[l4][h4] ? f4 = o8 : (f4 = o8 - f4 / g3, p4 = o8 - p4 / g3);
        var x3 = Math.abs(p4 - f4), b4 = this.barHelpers.getColumnPaths({ barXPosition: r7, barWidth: s5, y1: f4, y2: p4, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: c5, i: c5, j: h4, w: n7 });
        if (n7.globals.isXNumeric) {
          var v3 = this.getBarXForNumericXAxis({ x: i8, j: h4, realIndex: c5, barWidth: s5 });
          i8 = v3.x, r7 = v3.barXPosition;
        } else i8 += a5;
        return { pathTo: b4.pathTo, pathFrom: b4.pathFrom, barHeight: x3, x: i8, y: u4.start < 0 && u4.end < 0 ? f4 : p4, goalY: this.barHelpers.getGoalValues("y", null, o8, l4, h4, d4), barXPosition: r7 };
      } }, { key: "preventBarOverflow", value: function(t6) {
        var e9 = this.w;
        return t6 < 0 && (t6 = 0), t6 > e9.globals.gridWidth && (t6 = e9.globals.gridWidth), t6;
      } }, { key: "drawRangeBarPaths", value: function(t6) {
        var e9 = t6.indexes, i8 = t6.y, a5 = t6.y1, s5 = t6.y2, r7 = t6.yDivision, o8 = t6.barHeight, n7 = t6.barYPosition, l4 = t6.zeroW, h4 = this.w, c5 = e9.realIndex, d4 = e9.j, g3 = this.preventBarOverflow(l4 + a5 / this.invertedYRatio), u4 = this.preventBarOverflow(l4 + s5 / this.invertedYRatio), f4 = this.getRangeValue(c5, d4), p4 = Math.abs(u4 - g3), x3 = this.barHelpers.getBarpaths({ barYPosition: n7, barHeight: o8, x1: g3, x2: u4, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: c5, realIndex: c5, j: d4, w: h4 });
        return h4.globals.isXNumeric || (i8 += r7), { pathTo: x3.pathTo, pathFrom: x3.pathFrom, barWidth: p4, x: f4.start < 0 && f4.end < 0 ? g3 : u4, goalX: this.barHelpers.getGoalValues("x", l4, null, c5, d4), y: i8 };
      } }, { key: "getRangeValue", value: function(t6, e9) {
        var i8 = this.w;
        return { start: i8.globals.seriesRangeStart[t6][e9], end: i8.globals.seriesRangeEnd[t6][e9] };
      } }]), a4;
    }();
    var Yt = function() {
      function t5(e8) {
        i7(this, t5), this.w = e8.w, this.lineCtx = e8;
      }
      return s4(t5, [{ key: "sameValueSeriesFix", value: function(t6, e8) {
        var i8 = this.w;
        if (("gradient" === i8.config.fill.type || "gradient" === i8.config.fill.type[t6]) && new A2(this.lineCtx.ctx, i8).seriesHaveSameValues(t6)) {
          var a4 = e8[t6].slice();
          a4[a4.length - 1] = a4[a4.length - 1] + 1e-6, e8[t6] = a4;
        }
        return e8;
      } }, { key: "calculatePoints", value: function(t6) {
        var e8 = t6.series, i8 = t6.realIndex, a4 = t6.x, s5 = t6.y, r7 = t6.i, o8 = t6.j, n7 = t6.prevY, l4 = this.w, h4 = [], c5 = [];
        if (0 === o8) {
          var d4 = this.lineCtx.categoryAxisCorrection + l4.config.markers.offsetX;
          l4.globals.isXNumeric && (d4 = (l4.globals.seriesX[i8][0] - l4.globals.minX) / this.lineCtx.xRatio + l4.config.markers.offsetX), h4.push(d4), c5.push(m2.isNumber(e8[r7][0]) ? n7 + l4.config.markers.offsetY : null), h4.push(a4 + l4.config.markers.offsetX), c5.push(m2.isNumber(e8[r7][o8 + 1]) ? s5 + l4.config.markers.offsetY : null);
        } else h4.push(a4 + l4.config.markers.offsetX), c5.push(m2.isNumber(e8[r7][o8 + 1]) ? s5 + l4.config.markers.offsetY : null);
        return { x: h4, y: c5 };
      } }, { key: "checkPreviousPaths", value: function(t6) {
        for (var e8 = t6.pathFromLine, i8 = t6.pathFromArea, a4 = t6.realIndex, s5 = this.w, r7 = 0; r7 < s5.globals.previousPaths.length; r7++) {
          var o8 = s5.globals.previousPaths[r7];
          ("line" === o8.type || "area" === o8.type) && o8.paths.length > 0 && parseInt(o8.realIndex, 10) === parseInt(a4, 10) && ("line" === o8.type ? (this.lineCtx.appendPathFrom = false, e8 = s5.globals.previousPaths[r7].paths[0].d) : "area" === o8.type && (this.lineCtx.appendPathFrom = false, i8 = s5.globals.previousPaths[r7].paths[0].d, s5.config.stroke.show && s5.globals.previousPaths[r7].paths[1] && (e8 = s5.globals.previousPaths[r7].paths[1].d)));
        }
        return { pathFromLine: e8, pathFromArea: i8 };
      } }, { key: "determineFirstPrevY", value: function(t6) {
        var e8, i8, a4, s5 = t6.i, r7 = t6.realIndex, o8 = t6.series, n7 = t6.prevY, l4 = t6.lineYPosition, h4 = t6.translationsIndex, c5 = this.w, d4 = c5.config.chart.stacked && !c5.globals.comboCharts || c5.config.chart.stacked && c5.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e8 = this.w.config.series[r7]) || void 0 === e8 ? void 0 : e8.type) || "column" === (null === (i8 = this.w.config.series[r7]) || void 0 === i8 ? void 0 : i8.type));
        if (void 0 !== (null === (a4 = o8[s5]) || void 0 === a4 ? void 0 : a4[0])) n7 = (l4 = d4 && s5 > 0 ? this.lineCtx.prevSeriesY[s5 - 1][0] : this.lineCtx.zeroY) - o8[s5][0] / this.lineCtx.yRatio[h4] + 2 * (this.lineCtx.isReversed ? o8[s5][0] / this.lineCtx.yRatio[h4] : 0);
        else if (d4 && s5 > 0 && void 0 === o8[s5][0]) {
          for (var g3 = s5 - 1; g3 >= 0; g3--) if (null !== o8[g3][0] && void 0 !== o8[g3][0]) {
            n7 = l4 = this.lineCtx.prevSeriesY[g3][0];
            break;
          }
        }
        return { prevY: n7, lineYPosition: l4 };
      } }]), t5;
    }();
    var Rt = function(t5) {
      for (var e8, i8, a4, s5, r7 = function(t6) {
        for (var e9 = [], i9 = t6[0], a5 = t6[1], s6 = e9[0] = Ht(i9, a5), r8 = 1, o9 = t6.length - 1; r8 < o9; r8++) i9 = a5, a5 = t6[r8 + 1], e9[r8] = 0.5 * (s6 + (s6 = Ht(i9, a5)));
        return e9[r8] = s6, e9;
      }(t5), o8 = t5.length - 1, n7 = [], l4 = 0; l4 < o8; l4++) a4 = Ht(t5[l4], t5[l4 + 1]), Math.abs(a4) < 1e-6 ? r7[l4] = r7[l4 + 1] = 0 : (s5 = (e8 = r7[l4] / a4) * e8 + (i8 = r7[l4 + 1] / a4) * i8) > 9 && (s5 = 3 * a4 / Math.sqrt(s5), r7[l4] = s5 * e8, r7[l4 + 1] = s5 * i8);
      for (var h4 = 0; h4 <= o8; h4++) s5 = (t5[Math.min(o8, h4 + 1)][0] - t5[Math.max(0, h4 - 1)][0]) / (6 * (1 + r7[h4] * r7[h4])), n7.push([s5 || 0, r7[h4] * s5 || 0]);
      return n7;
    };
    var Ft = function(t5) {
      var e8 = Rt(t5), i8 = t5[1], a4 = t5[0], s5 = [], r7 = e8[1], o8 = e8[0];
      s5.push(a4, [a4[0] + o8[0], a4[1] + o8[1], i8[0] - r7[0], i8[1] - r7[1], i8[0], i8[1]]);
      for (var n7 = 2, l4 = e8.length; n7 < l4; n7++) {
        var h4 = t5[n7], c5 = e8[n7];
        s5.push([h4[0] - c5[0], h4[1] - c5[1], h4[0], h4[1]]);
      }
      return s5;
    };
    var Dt = function(t5, e8, i8) {
      var a4 = t5.slice(e8, i8);
      if (e8) {
        if (i8 - e8 > 1 && a4[1].length < 6) {
          var s5 = a4[0].length;
          a4[1] = [2 * a4[0][s5 - 2] - a4[0][s5 - 4], 2 * a4[0][s5 - 1] - a4[0][s5 - 3]].concat(a4[1]);
        }
        a4[0] = a4[0].slice(-2);
      }
      return a4;
    };
    function Ht(t5, e8) {
      return (e8[1] - t5[1]) / (e8[0] - t5[0]);
    }
    var Ot = function() {
      function t5(e8, a4, s5) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.xyRatios = a4, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || s5, this.scatter = new B2(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Yt(this), this.markers = new W(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
      }
      return s4(t5, [{ key: "draw", value: function(t6, e8, i8, a4) {
        var s5, r7 = this.w, o8 = new k2(this.ctx), n7 = r7.globals.comboCharts ? e8 : r7.config.chart.type, l4 = o8.group({ class: "apexcharts-".concat(n7, "-series apexcharts-plot-series") }), h4 = new A2(this.ctx, r7);
        this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t6 = h4.getLogSeries(t6), this.yRatio = h4.getLogYRatios(this.yRatio), this.prevSeriesY = [];
        for (var c5 = [], d4 = 0; d4 < t6.length; d4++) {
          t6 = this.lineHelpers.sameValueSeriesFix(d4, t6);
          var u4 = r7.globals.comboCharts ? i8[d4] : d4, f4 = this.yRatio.length > 1 ? u4 : 0;
          this._initSerieVariables(t6, d4, u4);
          var p4 = [], x3 = [], b4 = [], v3 = r7.globals.padHorizontal + this.categoryAxisCorrection;
          this.ctx.series.addCollapsedClassToSeries(this.elSeries, u4), r7.globals.isXNumeric && r7.globals.seriesX.length > 0 && (v3 = (r7.globals.seriesX[u4][0] - r7.globals.minX) / this.xRatio), b4.push(v3);
          var m3, y4 = v3, w3 = void 0, S4 = y4, C4 = this.zeroY, L3 = this.zeroY;
          C4 = this.lineHelpers.determineFirstPrevY({ i: d4, realIndex: u4, series: t6, prevY: C4, lineYPosition: 0, translationsIndex: f4 }).prevY, "monotoneCubic" === r7.config.stroke.curve && null === t6[d4][0] ? p4.push(null) : p4.push(C4), m3 = C4;
          "rangeArea" === n7 && (w3 = L3 = this.lineHelpers.determineFirstPrevY({ i: d4, realIndex: u4, series: a4, prevY: L3, lineYPosition: 0, translationsIndex: f4 }).prevY, x3.push(null !== p4[0] ? L3 : null));
          var P3 = this._calculatePathsFrom({ type: n7, series: t6, i: d4, realIndex: u4, translationsIndex: f4, prevX: S4, prevY: C4, prevY2: L3 }), M3 = [p4[0]], I3 = [x3[0]], T3 = { type: n7, series: t6, realIndex: u4, translationsIndex: f4, i: d4, x: v3, y: 1, pX: y4, pY: m3, pathsFrom: P3, linePaths: [], areaPaths: [], seriesIndex: i8, lineYPosition: 0, xArrj: b4, yArrj: p4, y2Arrj: x3, seriesRangeEnd: a4 }, z3 = this._iterateOverDataPoints(g2(g2({}, T3), {}, { iterations: "rangeArea" === n7 ? t6[d4].length - 1 : void 0, isRangeStart: true }));
          if ("rangeArea" === n7) {
            for (var X2 = this._calculatePathsFrom({ series: a4, i: d4, realIndex: u4, prevX: S4, prevY: L3 }), E3 = this._iterateOverDataPoints(g2(g2({}, T3), {}, { series: a4, xArrj: [v3], yArrj: M3, y2Arrj: I3, pY: w3, areaPaths: z3.areaPaths, pathsFrom: X2, iterations: a4[d4].length - 1, isRangeStart: false })), Y2 = z3.linePaths.length / 2, R3 = 0; R3 < Y2; R3++) z3.linePaths[R3] = E3.linePaths[R3 + Y2] + z3.linePaths[R3];
            z3.linePaths.splice(Y2), z3.pathFromLine = E3.pathFromLine + z3.pathFromLine;
          } else z3.pathFromArea += "z";
          this._handlePaths({ type: n7, realIndex: u4, i: d4, paths: z3 }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), c5.push(this.elSeries);
        }
        if (void 0 !== (null === (s5 = r7.config.series[0]) || void 0 === s5 ? void 0 : s5.zIndex) && c5.sort(function(t7, e9) {
          return Number(t7.node.getAttribute("zIndex")) - Number(e9.node.getAttribute("zIndex"));
        }), r7.config.chart.stacked) for (var F2 = c5.length - 1; F2 >= 0; F2--) l4.add(c5[F2]);
        else for (var D3 = 0; D3 < c5.length; D3++) l4.add(c5[D3]);
        return l4;
      } }, { key: "_initSerieVariables", value: function(t6, e8, i8) {
        var a4 = this.w, s5 = new k2(this.ctx);
        this.xDivision = a4.globals.gridWidth / (a4.globals.dataPoints - ("on" === a4.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a4.config.stroke.width) ? a4.config.stroke.width[i8] : a4.config.stroke.width;
        var r7 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = a4.globals.seriesYAxisReverseMap[i8], r7 = i8), this.isReversed = a4.config.yaxis[this.yaxisIndex] && a4.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a4.globals.gridHeight - this.baseLineY[r7] - (this.isReversed ? a4.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r7] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a4.globals.gridHeight || "end" === a4.config.plotOptions.area.fillTo) && (this.areaBottomY = a4.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s5.group({ class: "apexcharts-series", zIndex: void 0 !== a4.config.series[i8].zIndex ? a4.config.series[i8].zIndex : i8, seriesName: m2.escapeString(a4.globals.seriesNames[i8]) }), this.elPointsMain = s5.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i8 }), this.elDataLabelsWrap = s5.group({ class: "apexcharts-datalabels", "data:realIndex": i8 });
        var o8 = t6[e8].length === a4.globals.dataPoints;
        this.elSeries.attr({ "data:longestSeries": o8, rel: e8 + 1, "data:realIndex": i8 }), this.appendPathFrom = true;
      } }, { key: "_calculatePathsFrom", value: function(t6) {
        var e8, i8, a4, s5, r7 = t6.type, o8 = t6.series, n7 = t6.i, l4 = t6.realIndex, h4 = t6.translationsIndex, c5 = t6.prevX, d4 = t6.prevY, g3 = t6.prevY2, u4 = this.w, f4 = new k2(this.ctx);
        if (null === o8[n7][0]) {
          for (var p4 = 0; p4 < o8[n7].length; p4++) if (null !== o8[n7][p4]) {
            c5 = this.xDivision * p4, d4 = this.zeroY - o8[n7][p4] / this.yRatio[h4], e8 = f4.move(c5, d4), i8 = f4.move(c5, this.areaBottomY);
            break;
          }
        } else e8 = f4.move(c5, d4), "rangeArea" === r7 && (e8 = f4.move(c5, g3) + f4.line(c5, d4)), i8 = f4.move(c5, this.areaBottomY) + f4.line(c5, d4);
        if (a4 = f4.move(0, this.zeroY) + f4.line(0, this.zeroY), s5 = f4.move(0, this.zeroY) + f4.line(0, this.zeroY), u4.globals.previousPaths.length > 0) {
          var x3 = this.lineHelpers.checkPreviousPaths({ pathFromLine: a4, pathFromArea: s5, realIndex: l4 });
          a4 = x3.pathFromLine, s5 = x3.pathFromArea;
        }
        return { prevX: c5, prevY: d4, linePath: e8, areaPath: i8, pathFromLine: a4, pathFromArea: s5 };
      } }, { key: "_handlePaths", value: function(t6) {
        var e8 = t6.type, i8 = t6.realIndex, a4 = t6.i, s5 = t6.paths, r7 = this.w, o8 = new k2(this.ctx), n7 = new N2(this.ctx);
        this.prevSeriesY.push(s5.yArrj), r7.globals.seriesXvalues[i8] = s5.xArrj, r7.globals.seriesYvalues[i8] = s5.yArrj;
        var l4 = r7.config.forecastDataPoints;
        if (l4.count > 0 && "rangeArea" !== e8) {
          var h4 = r7.globals.seriesXvalues[i8][r7.globals.seriesXvalues[i8].length - l4.count - 1], c5 = o8.drawRect(h4, 0, r7.globals.gridWidth, r7.globals.gridHeight, 0);
          r7.globals.dom.elForecastMask.appendChild(c5.node);
          var d4 = o8.drawRect(0, 0, h4, r7.globals.gridHeight, 0);
          r7.globals.dom.elNonForecastMask.appendChild(d4.node);
        }
        this.pointsChart || r7.globals.delayedElements.push({ el: this.elPointsMain.node, index: i8 });
        var u4 = { i: a4, realIndex: i8, animationDelay: a4, initialSpeed: r7.config.chart.animations.speed, dataChangeSpeed: r7.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(e8) };
        if ("area" === e8) for (var f4 = n7.fillPath({ seriesNumber: i8 }), p4 = 0; p4 < s5.areaPaths.length; p4++) {
          var x3 = o8.renderPaths(g2(g2({}, u4), {}, { pathFrom: s5.pathFromArea, pathTo: s5.areaPaths[p4], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: f4 }));
          this.elSeries.add(x3);
        }
        if (r7.config.stroke.show && !this.pointsChart) {
          var b4 = null;
          if ("line" === e8) b4 = n7.fillPath({ seriesNumber: i8, i: a4 });
          else if ("solid" === r7.config.stroke.fill.type) b4 = r7.globals.stroke.colors[i8];
          else {
            var v3 = r7.config.fill;
            r7.config.fill = r7.config.stroke.fill, b4 = n7.fillPath({ seriesNumber: i8, i: a4 }), r7.config.fill = v3;
          }
          for (var m3 = 0; m3 < s5.linePaths.length; m3++) {
            var y4 = b4;
            "rangeArea" === e8 && (y4 = n7.fillPath({ seriesNumber: i8 }));
            var w3 = g2(g2({}, u4), {}, { pathFrom: s5.pathFromLine, pathTo: s5.linePaths[m3], stroke: b4, strokeWidth: this.strokeWidth, strokeLineCap: r7.config.stroke.lineCap, fill: "rangeArea" === e8 ? y4 : "none" }), A3 = o8.renderPaths(w3);
            if (this.elSeries.add(A3), A3.attr("fill-rule", "evenodd"), l4.count > 0 && "rangeArea" !== e8) {
              var S4 = o8.renderPaths(w3);
              S4.node.setAttribute("stroke-dasharray", l4.dashArray), l4.strokeWidth && S4.node.setAttribute("stroke-width", l4.strokeWidth), this.elSeries.add(S4), S4.attr("clip-path", "url(#forecastMask".concat(r7.globals.cuid, ")")), A3.attr("clip-path", "url(#nonForecastMask".concat(r7.globals.cuid, ")"));
            }
          }
        }
      } }, { key: "_iterateOverDataPoints", value: function(t6) {
        var e8, i8, a4 = this, s5 = t6.type, r7 = t6.series, o8 = t6.iterations, n7 = t6.realIndex, l4 = t6.translationsIndex, h4 = t6.i, c5 = t6.x, d4 = t6.y, g3 = t6.pX, u4 = t6.pY, f4 = t6.pathsFrom, p4 = t6.linePaths, x3 = t6.areaPaths, b4 = t6.seriesIndex, v3 = t6.lineYPosition, y4 = t6.xArrj, w3 = t6.yArrj, A3 = t6.y2Arrj, S4 = t6.isRangeStart, C4 = t6.seriesRangeEnd, L3 = this.w, P3 = new k2(this.ctx), M3 = this.yRatio, I3 = f4.prevY, T3 = f4.linePath, z3 = f4.areaPath, X2 = f4.pathFromLine, E3 = f4.pathFromArea, Y2 = m2.isNumber(L3.globals.minYArr[n7]) ? L3.globals.minYArr[n7] : L3.globals.minY;
        o8 || (o8 = L3.globals.dataPoints > 1 ? L3.globals.dataPoints - 1 : L3.globals.dataPoints);
        var R3 = function(t7, e9) {
          return e9 - t7 / M3[l4] + 2 * (a4.isReversed ? t7 / M3[l4] : 0);
        }, F2 = d4, D3 = L3.config.chart.stacked && !L3.globals.comboCharts || L3.config.chart.stacked && L3.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e8 = this.w.config.series[n7]) || void 0 === e8 ? void 0 : e8.type) || "column" === (null === (i8 = this.w.config.series[n7]) || void 0 === i8 ? void 0 : i8.type)), H3 = L3.config.stroke.curve;
        Array.isArray(H3) && (H3 = Array.isArray(b4) ? H3[b4[h4]] : H3[h4]);
        for (var O2, N3 = 0, W2 = 0; W2 < o8; W2++) {
          var B3 = void 0 === r7[h4][W2 + 1] || null === r7[h4][W2 + 1];
          if (L3.globals.isXNumeric) {
            var G2 = L3.globals.seriesX[n7][W2 + 1];
            void 0 === L3.globals.seriesX[n7][W2 + 1] && (G2 = L3.globals.seriesX[n7][o8 - 1]), c5 = (G2 - L3.globals.minX) / this.xRatio;
          } else c5 += this.xDivision;
          if (D3) if (h4 > 0 && L3.globals.collapsedSeries.length < L3.config.series.length - 1) {
            v3 = this.prevSeriesY[function(t7) {
              for (var e9 = t7; e9 > 0; e9--) {
                if (!(L3.globals.collapsedSeriesIndices.indexOf((null == b4 ? void 0 : b4[e9]) || e9) > -1)) return e9;
                e9--;
              }
              return 0;
            }(h4 - 1)][W2 + 1];
          } else v3 = this.zeroY;
          else v3 = this.zeroY;
          B3 ? d4 = R3(Y2, v3) : (d4 = R3(r7[h4][W2 + 1], v3), "rangeArea" === s5 && (F2 = R3(C4[h4][W2 + 1], v3))), y4.push(c5), !B3 || "smooth" !== L3.config.stroke.curve && "monotoneCubic" !== L3.config.stroke.curve ? (w3.push(d4), A3.push(F2)) : (w3.push(null), A3.push(null));
          var V3 = this.lineHelpers.calculatePoints({ series: r7, x: c5, y: d4, realIndex: n7, i: h4, j: W2, prevY: I3 }), j2 = this._createPaths({ type: s5, series: r7, i: h4, realIndex: n7, j: W2, x: c5, y: d4, y2: F2, xArrj: y4, yArrj: w3, y2Arrj: A3, pX: g3, pY: u4, pathState: N3, segmentStartX: O2, linePath: T3, areaPath: z3, linePaths: p4, areaPaths: x3, curve: H3, isRangeStart: S4 });
          x3 = j2.areaPaths, p4 = j2.linePaths, g3 = j2.pX, u4 = j2.pY, N3 = j2.pathState, O2 = j2.segmentStartX, z3 = j2.areaPath, T3 = j2.linePath, !this.appendPathFrom || "monotoneCubic" === H3 && "rangeArea" === s5 || (X2 += P3.line(c5, this.zeroY), E3 += P3.line(c5, this.zeroY)), this.handleNullDataPoints(r7, V3, h4, W2, n7), this._handleMarkersAndLabels({ type: s5, pointsPos: V3, i: h4, j: W2, realIndex: n7, isRangeStart: S4 });
        }
        return { yArrj: w3, xArrj: y4, pathFromArea: E3, areaPaths: x3, pathFromLine: X2, linePaths: p4, linePath: T3, areaPath: z3 };
      } }, { key: "_handleMarkersAndLabels", value: function(t6) {
        var e8 = t6.type, i8 = t6.pointsPos, a4 = t6.isRangeStart, s5 = t6.i, r7 = t6.j, o8 = t6.realIndex, n7 = this.w, l4 = new G(this.ctx);
        if (this.pointsChart) this.scatter.draw(this.elSeries, r7, { realIndex: o8, pointsPos: i8, zRatio: this.zRatio, elParent: this.elPointsMain });
        else {
          n7.globals.series[s5].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
          var h4 = this.markers.plotChartMarkers(i8, o8, r7 + 1);
          null !== h4 && this.elPointsMain.add(h4);
        }
        var c5 = l4.drawDataLabel({ type: e8, isRangeStart: a4, pos: i8, i: o8, j: r7 + 1 });
        null !== c5 && this.elDataLabelsWrap.add(c5);
      } }, { key: "_createPaths", value: function(t6) {
        var e8 = t6.type, i8 = t6.series, a4 = t6.i;
        t6.realIndex;
        var s5, r7 = t6.j, o8 = t6.x, n7 = t6.y, l4 = t6.xArrj, h4 = t6.yArrj, c5 = t6.y2, d4 = t6.y2Arrj, g3 = t6.pX, u4 = t6.pY, f4 = t6.pathState, p4 = t6.segmentStartX, x3 = t6.linePath, b4 = t6.areaPath, v3 = t6.linePaths, m3 = t6.areaPaths, y4 = t6.curve, w3 = t6.isRangeStart, A3 = new k2(this.ctx), S4 = this.areaBottomY, C4 = "rangeArea" === e8, L3 = "rangeArea" === e8 && w3;
        switch (y4) {
          case "monotoneCubic":
            var P3 = w3 ? h4 : d4;
            switch (f4) {
              case 0:
                if (null === P3[r7 + 1]) break;
                f4 = 1;
              case 1:
                if (!(C4 ? l4.length === i8[a4].length : r7 === i8[a4].length - 2)) break;
              case 2:
                var M3 = w3 ? l4 : l4.slice().reverse(), I3 = w3 ? P3 : P3.slice().reverse(), T3 = (s5 = I3, M3.map(function(t7, e9) {
                  return [t7, s5[e9]];
                }).filter(function(t7) {
                  return null !== t7[1];
                })), z3 = T3.length > 1 ? Ft(T3) : T3, X2 = [];
                C4 && (L3 ? m3 = T3 : X2 = m3.reverse());
                var E3 = 0, Y2 = 0;
                if (function(t7, e9) {
                  for (var i9 = function(t8) {
                    var e10 = [], i10 = 0;
                    return t8.forEach(function(t9) {
                      null !== t9 ? i10++ : i10 > 0 && (e10.push(i10), i10 = 0);
                    }), i10 > 0 && e10.push(i10), e10;
                  }(t7), a5 = [], s6 = 0, r8 = 0; s6 < i9.length; r8 += i9[s6++]) a5[s6] = Dt(e9, r8, r8 + i9[s6]);
                  return a5;
                }(I3, z3).forEach(function(t7) {
                  E3++;
                  var e9 = function(t8) {
                    for (var e10 = "", i10 = 0; i10 < t8.length; i10++) {
                      var a6 = t8[i10], s6 = a6.length;
                      s6 > 4 ? (e10 += "C".concat(a6[0], ", ").concat(a6[1]), e10 += ", ".concat(a6[2], ", ").concat(a6[3]), e10 += ", ".concat(a6[4], ", ").concat(a6[5])) : s6 > 2 && (e10 += "S".concat(a6[0], ", ").concat(a6[1]), e10 += ", ".concat(a6[2], ", ").concat(a6[3]));
                    }
                    return e10;
                  }(t7), i9 = Y2, a5 = (Y2 += t7.length) - 1;
                  L3 ? x3 = A3.move(T3[i9][0], T3[i9][1]) + e9 : C4 ? x3 = A3.move(X2[i9][0], X2[i9][1]) + A3.line(T3[i9][0], T3[i9][1]) + e9 + A3.line(X2[a5][0], X2[a5][1]) : (x3 = A3.move(T3[i9][0], T3[i9][1]) + e9, b4 = x3 + A3.line(T3[a5][0], S4) + A3.line(T3[i9][0], S4) + "z", m3.push(b4)), v3.push(x3);
                }), C4 && E3 > 1 && !L3) {
                  var R3 = v3.slice(E3).reverse();
                  v3.splice(E3), R3.forEach(function(t7) {
                    return v3.push(t7);
                  });
                }
                f4 = 0;
            }
            break;
          case "smooth":
            var F2 = 0.35 * (o8 - g3);
            if (null === i8[a4][r7]) f4 = 0;
            else switch (f4) {
              case 0:
                if (p4 = g3, x3 = L3 ? A3.move(g3, d4[r7]) + A3.line(g3, u4) : A3.move(g3, u4), b4 = A3.move(g3, u4), null === i8[a4][r7 + 1]) {
                  v3.push(x3), m3.push(b4);
                  break;
                }
                if (f4 = 1, r7 < i8[a4].length - 2) {
                  var D3 = A3.curve(g3 + F2, u4, o8 - F2, n7, o8, n7);
                  x3 += D3, b4 += D3;
                  break;
                }
              case 1:
                if (null === i8[a4][r7 + 1]) x3 += L3 ? A3.line(g3, c5) : A3.move(g3, u4), b4 += A3.line(g3, S4) + A3.line(p4, S4) + "z", v3.push(x3), m3.push(b4), f4 = -1;
                else {
                  var H3 = A3.curve(g3 + F2, u4, o8 - F2, n7, o8, n7);
                  x3 += H3, b4 += H3, r7 >= i8[a4].length - 2 && (L3 && (x3 += A3.curve(o8, n7, o8, n7, o8, c5) + A3.move(o8, c5)), b4 += A3.curve(o8, n7, o8, n7, o8, S4) + A3.line(p4, S4) + "z", v3.push(x3), m3.push(b4), f4 = -1);
                }
            }
            g3 = o8, u4 = n7;
            break;
          default:
            var O2 = function(t7, e9, i9) {
              var a5 = [];
              switch (t7) {
                case "stepline":
                  a5 = A3.line(e9, null, "H") + A3.line(null, i9, "V");
                  break;
                case "linestep":
                  a5 = A3.line(null, i9, "V") + A3.line(e9, null, "H");
                  break;
                case "straight":
                  a5 = A3.line(e9, i9);
              }
              return a5;
            };
            if (null === i8[a4][r7]) f4 = 0;
            else switch (f4) {
              case 0:
                if (p4 = g3, x3 = L3 ? A3.move(g3, d4[r7]) + A3.line(g3, u4) : A3.move(g3, u4), b4 = A3.move(g3, u4), null === i8[a4][r7 + 1]) {
                  v3.push(x3), m3.push(b4);
                  break;
                }
                if (f4 = 1, r7 < i8[a4].length - 2) {
                  var N3 = O2(y4, o8, n7);
                  x3 += N3, b4 += N3;
                  break;
                }
              case 1:
                if (null === i8[a4][r7 + 1]) x3 += L3 ? A3.line(g3, c5) : A3.move(g3, u4), b4 += A3.line(g3, S4) + A3.line(p4, S4) + "z", v3.push(x3), m3.push(b4), f4 = -1;
                else {
                  var W2 = O2(y4, o8, n7);
                  x3 += W2, b4 += W2, r7 >= i8[a4].length - 2 && (L3 && (x3 += A3.line(o8, c5)), b4 += A3.line(o8, S4) + A3.line(p4, S4) + "z", v3.push(x3), m3.push(b4), f4 = -1);
                }
            }
            g3 = o8, u4 = n7;
        }
        return { linePaths: v3, areaPaths: m3, pX: g3, pY: u4, pathState: f4, segmentStartX: p4, linePath: x3, areaPath: b4 };
      } }, { key: "handleNullDataPoints", value: function(t6, e8, i8, a4, s5) {
        var r7 = this.w;
        if (null === t6[i8][a4] && r7.config.markers.showNullDataPoints || 1 === t6[i8].length) {
          var o8 = this.strokeWidth - r7.config.markers.strokeWidth / 2;
          o8 > 0 || (o8 = 0);
          var n7 = this.markers.plotChartMarkers(e8, s5, a4 + 1, o8, true);
          null !== n7 && this.elPointsMain.add(n7);
        }
      } }]), t5;
    }();
    window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
      function t5(e9, i9, a5, s6) {
        this.xoffset = e9, this.yoffset = i9, this.height = s6, this.width = a5, this.shortestEdge = function() {
          return Math.min(this.height, this.width);
        }, this.getCoordinates = function(t6) {
          var e10, i10 = [], a6 = this.xoffset, s7 = this.yoffset, o9 = r7(t6) / this.height, n7 = r7(t6) / this.width;
          if (this.width >= this.height) for (e10 = 0; e10 < t6.length; e10++) i10.push([a6, s7, a6 + o9, s7 + t6[e10] / o9]), s7 += t6[e10] / o9;
          else for (e10 = 0; e10 < t6.length; e10++) i10.push([a6, s7, a6 + t6[e10] / n7, s7 + n7]), a6 += t6[e10] / n7;
          return i10;
        }, this.cutArea = function(e10) {
          var i10;
          if (this.width >= this.height) {
            var a6 = e10 / this.height, s7 = this.width - a6;
            i10 = new t5(this.xoffset + a6, this.yoffset, s7, this.height);
          } else {
            var r8 = e10 / this.width, o9 = this.height - r8;
            i10 = new t5(this.xoffset, this.yoffset + r8, this.width, o9);
          }
          return i10;
        };
      }
      function e8(e9, a5, s6, o9, n7) {
        o9 = void 0 === o9 ? 0 : o9, n7 = void 0 === n7 ? 0 : n7;
        var l4 = i8(function(t6, e10) {
          var i9, a6 = [], s7 = e10 / r7(t6);
          for (i9 = 0; i9 < t6.length; i9++) a6[i9] = t6[i9] * s7;
          return a6;
        }(e9, a5 * s6), [], new t5(o9, n7, a5, s6), []);
        return function(t6) {
          var e10, i9, a6 = [];
          for (e10 = 0; e10 < t6.length; e10++) for (i9 = 0; i9 < t6[e10].length; i9++) a6.push(t6[e10][i9]);
          return a6;
        }(l4);
      }
      function i8(t6, e9, s6, o9) {
        var n7, l4, h4;
        if (0 !== t6.length) return n7 = s6.shortestEdge(), function(t7, e10, i9) {
          var s7;
          if (0 === t7.length) return true;
          (s7 = t7.slice()).push(e10);
          var r8 = a4(t7, i9), o10 = a4(s7, i9);
          return r8 >= o10;
        }(e9, l4 = t6[0], n7) ? (e9.push(l4), i8(t6.slice(1), e9, s6, o9)) : (h4 = s6.cutArea(r7(e9), o9), o9.push(s6.getCoordinates(e9)), i8(t6, [], h4, o9)), o9;
        o9.push(s6.getCoordinates(e9));
      }
      function a4(t6, e9) {
        var i9 = Math.min.apply(Math, t6), a5 = Math.max.apply(Math, t6), s6 = r7(t6);
        return Math.max(Math.pow(e9, 2) * a5 / Math.pow(s6, 2), Math.pow(s6, 2) / (Math.pow(e9, 2) * i9));
      }
      function s5(t6) {
        return t6 && t6.constructor === Array;
      }
      function r7(t6) {
        var e9, i9 = 0;
        for (e9 = 0; e9 < t6.length; e9++) i9 += t6[e9];
        return i9;
      }
      function o8(t6) {
        var e9, i9 = 0;
        if (s5(t6[0])) for (e9 = 0; e9 < t6.length; e9++) i9 += o8(t6[e9]);
        else i9 = r7(t6);
        return i9;
      }
      return function t6(i9, a5, r8, n7, l4) {
        n7 = void 0 === n7 ? 0 : n7, l4 = void 0 === l4 ? 0 : l4;
        var h4, c5, d4 = [], g3 = [];
        if (s5(i9[0])) {
          for (c5 = 0; c5 < i9.length; c5++) d4[c5] = o8(i9[c5]);
          for (h4 = e8(d4, a5, r8, n7, l4), c5 = 0; c5 < i9.length; c5++) g3.push(t6(i9[c5], h4[c5][2] - h4[c5][0], h4[c5][3] - h4[c5][1], h4[c5][0], h4[c5][1]));
        } else g3 = e8(i9, a5, r8, n7, l4);
        return g3;
      };
    }();
    var Nt;
    var Wt;
    var Bt = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Pt(e8), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
      }
      return s4(t5, [{ key: "draw", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = new k2(this.ctx), s5 = new N2(this.ctx), r7 = a4.group({ class: "apexcharts-treemap" });
        if (i8.globals.noData) return r7;
        var o8 = [];
        return t6.forEach(function(t7) {
          var e9 = t7.map(function(t8) {
            return Math.abs(t8);
          });
          o8.push(e9);
        }), this.negRange = this.helpers.checkColorRange(), i8.config.series.forEach(function(t7, i9) {
          t7.data.forEach(function(t8) {
            Array.isArray(e8.labels[i9]) || (e8.labels[i9] = []), e8.labels[i9].push(t8.x);
          });
        }), window.TreemapSquared.generate(o8, i8.globals.gridWidth, i8.globals.gridHeight).forEach(function(o9, n7) {
          var l4 = a4.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: m2.escapeString(i8.globals.seriesNames[n7]), rel: n7 + 1, "data:realIndex": n7 });
          if (i8.config.chart.dropShadow.enabled) {
            var h4 = i8.config.chart.dropShadow;
            new w2(e8.ctx).dropShadow(r7, h4, n7);
          }
          var c5 = a4.group({ class: "apexcharts-data-labels" });
          o9.forEach(function(r8, o10) {
            var h5 = r8[0], c6 = r8[1], d4 = r8[2], g3 = r8[3], u4 = a4.drawRect(h5, c6, d4 - h5, g3 - c6, i8.config.plotOptions.treemap.borderRadius, "#fff", 1, e8.strokeWidth, i8.config.plotOptions.treemap.useFillColorAsStroke ? p4 : i8.globals.stroke.colors[n7]);
            u4.attr({ cx: h5, cy: c6, index: n7, i: n7, j: o10, width: d4 - h5, height: g3 - c6 });
            var f4 = e8.helpers.getShadeColor(i8.config.chart.type, n7, o10, e8.negRange), p4 = f4.color;
            void 0 !== i8.config.series[n7].data[o10] && i8.config.series[n7].data[o10].fillColor && (p4 = i8.config.series[n7].data[o10].fillColor);
            var x3 = s5.fillPath({ color: p4, seriesNumber: n7, dataPointIndex: o10 });
            u4.node.classList.add("apexcharts-treemap-rect"), u4.attr({ fill: x3 }), e8.helpers.addListeners(u4);
            var b4 = { x: h5 + (d4 - h5) / 2, y: c6 + (g3 - c6) / 2, width: 0, height: 0 }, v3 = { x: h5, y: c6, width: d4 - h5, height: g3 - c6 };
            if (i8.config.chart.animations.enabled && !i8.globals.dataChanged) {
              var m3 = 1;
              i8.globals.resized || (m3 = i8.config.chart.animations.speed), e8.animateTreemap(u4, b4, v3, m3);
            }
            if (i8.globals.dataChanged) {
              var y4 = 1;
              e8.dynamicAnim.enabled && i8.globals.shouldAnimate && (y4 = e8.dynamicAnim.speed, i8.globals.previousPaths[n7] && i8.globals.previousPaths[n7][o10] && i8.globals.previousPaths[n7][o10].rect && (b4 = i8.globals.previousPaths[n7][o10].rect), e8.animateTreemap(u4, b4, v3, y4));
            }
            var w3 = e8.getFontSize(r8), k3 = i8.config.dataLabels.formatter(e8.labels[n7][o10], { value: i8.globals.series[n7][o10], seriesIndex: n7, dataPointIndex: o10, w: i8 });
            "truncate" === i8.config.plotOptions.treemap.dataLabels.format && (w3 = parseInt(i8.config.dataLabels.style.fontSize, 10), k3 = e8.truncateLabels(k3, w3, h5, c6, d4, g3));
            var A3 = null;
            i8.globals.series[n7][o10] && (A3 = e8.helpers.calculateDataLabels({ text: k3, x: (h5 + d4) / 2, y: (c6 + g3) / 2 + e8.strokeWidth / 2 + w3 / 3, i: n7, j: o10, colorProps: f4, fontSize: w3, series: t6 })), i8.config.dataLabels.enabled && A3 && e8.rotateToFitLabel(A3, w3, k3, h5, c6, d4, g3), l4.add(u4), null !== A3 && l4.add(A3);
          }), l4.add(c5), r7.add(l4);
        }), r7;
      } }, { key: "getFontSize", value: function(t6) {
        var e8 = this.w;
        var i8, a4, s5, r7, o8 = function t7(e9) {
          var i9, a5 = 0;
          if (Array.isArray(e9[0])) for (i9 = 0; i9 < e9.length; i9++) a5 += t7(e9[i9]);
          else for (i9 = 0; i9 < e9.length; i9++) a5 += e9[i9].length;
          return a5;
        }(this.labels) / function t7(e9) {
          var i9, a5 = 0;
          if (Array.isArray(e9[0])) for (i9 = 0; i9 < e9.length; i9++) a5 += t7(e9[i9]);
          else for (i9 = 0; i9 < e9.length; i9++) a5 += 1;
          return a5;
        }(this.labels);
        return i8 = t6[2] - t6[0], a4 = t6[3] - t6[1], s5 = i8 * a4, r7 = Math.pow(s5, 0.5), Math.min(r7 / o8, parseInt(e8.config.dataLabels.style.fontSize, 10));
      } }, { key: "rotateToFitLabel", value: function(t6, e8, i8, a4, s5, r7, o8) {
        var n7 = new k2(this.ctx), l4 = n7.getTextRects(i8, e8);
        if (l4.width + this.w.config.stroke.width + 5 > r7 - a4 && l4.width <= o8 - s5) {
          var h4 = n7.rotateAroundCenter(t6.node);
          t6.node.setAttribute("transform", "rotate(-90 ".concat(h4.x, " ").concat(h4.y, ") translate(").concat(l4.height / 3, ")"));
        }
      } }, { key: "truncateLabels", value: function(t6, e8, i8, a4, s5, r7) {
        var o8 = new k2(this.ctx), n7 = o8.getTextRects(t6, e8).width + this.w.config.stroke.width + 5 > s5 - i8 && r7 - a4 > s5 - i8 ? r7 - a4 : s5 - i8, l4 = o8.getTextBasedOnMaxWidth({ text: t6, maxWidth: n7, fontSize: e8 });
        return t6.length !== l4.length && n7 / e8 < 5 ? "" : l4;
      } }, { key: "animateTreemap", value: function(t6, e8, i8, a4) {
        var s5 = new y3(this.ctx);
        s5.animateRect(t6, { x: e8.x, y: e8.y, width: e8.width, height: e8.height }, { x: i8.x, y: i8.y, width: i8.width, height: i8.height }, a4, function() {
          s5.animationCompleted(t6);
        });
      } }]), t5;
    }();
    var Gt = 86400;
    var Vt = 10 / Gt;
    var jt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
      }
      return s4(t5, [{ key: "calculateTimeScaleTicks", value: function(t6, e8) {
        var i8 = this, a4 = this.w;
        if (a4.globals.allSeriesCollapsed) return a4.globals.labels = [], a4.globals.timescaleLabels = [], [];
        var s5 = new L2(this.ctx), r7 = (e8 - t6) / 864e5;
        this.determineInterval(r7), a4.globals.disableZoomIn = false, a4.globals.disableZoomOut = false, r7 < Vt ? a4.globals.disableZoomIn = true : r7 > 5e4 && (a4.globals.disableZoomOut = true);
        var o8 = s5.getTimeUnitsfromTimestamp(t6, e8, this.utc), n7 = a4.globals.gridWidth / r7, l4 = n7 / 24, h4 = l4 / 60, c5 = h4 / 60, d4 = Math.floor(24 * r7), u4 = Math.floor(1440 * r7), f4 = Math.floor(r7 * Gt), p4 = Math.floor(r7), x3 = Math.floor(r7 / 30), b4 = Math.floor(r7 / 365), v3 = { minMillisecond: o8.minMillisecond, minSecond: o8.minSecond, minMinute: o8.minMinute, minHour: o8.minHour, minDate: o8.minDate, minMonth: o8.minMonth, minYear: o8.minYear }, m3 = { firstVal: v3, currentMillisecond: v3.minMillisecond, currentSecond: v3.minSecond, currentMinute: v3.minMinute, currentHour: v3.minHour, currentMonthDate: v3.minDate, currentDate: v3.minDate, currentMonth: v3.minMonth, currentYear: v3.minYear, daysWidthOnXAxis: n7, hoursWidthOnXAxis: l4, minutesWidthOnXAxis: h4, secondsWidthOnXAxis: c5, numberOfSeconds: f4, numberOfMinutes: u4, numberOfHours: d4, numberOfDays: p4, numberOfMonths: x3, numberOfYears: b4 };
        switch (this.tickInterval) {
          case "years":
            this.generateYearScale(m3);
            break;
          case "months":
          case "half_year":
            this.generateMonthScale(m3);
            break;
          case "months_days":
          case "months_fortnight":
          case "days":
          case "week_days":
            this.generateDayScale(m3);
            break;
          case "hours":
            this.generateHourScale(m3);
            break;
          case "minutes_fives":
          case "minutes":
            this.generateMinuteScale(m3);
            break;
          case "seconds_tens":
          case "seconds_fives":
          case "seconds":
            this.generateSecondScale(m3);
        }
        var y4 = this.timeScaleArray.map(function(t7) {
          var e9 = { position: t7.position, unit: t7.unit, year: t7.year, day: t7.day ? t7.day : 1, hour: t7.hour ? t7.hour : 0, month: t7.month + 1 };
          return "month" === t7.unit ? g2(g2({}, e9), {}, { day: 1, value: t7.value + 1 }) : "day" === t7.unit || "hour" === t7.unit ? g2(g2({}, e9), {}, { value: t7.value }) : "minute" === t7.unit ? g2(g2({}, e9), {}, { value: t7.value, minute: t7.value }) : "second" === t7.unit ? g2(g2({}, e9), {}, { value: t7.value, minute: t7.minute, second: t7.second }) : t7;
        });
        return y4.filter(function(t7) {
          var e9 = 1, s6 = Math.ceil(a4.globals.gridWidth / 120), r8 = t7.value;
          void 0 !== a4.config.xaxis.tickAmount && (s6 = a4.config.xaxis.tickAmount), y4.length > s6 && (e9 = Math.floor(y4.length / s6));
          var o9 = false, n8 = false;
          switch (i8.tickInterval) {
            case "years":
              "year" === t7.unit && (o9 = true);
              break;
            case "half_year":
              e9 = 7, "year" === t7.unit && (o9 = true);
              break;
            case "months":
              e9 = 1, "year" === t7.unit && (o9 = true);
              break;
            case "months_fortnight":
              e9 = 15, "year" !== t7.unit && "month" !== t7.unit || (o9 = true), 30 === r8 && (n8 = true);
              break;
            case "months_days":
              e9 = 10, "month" === t7.unit && (o9 = true), 30 === r8 && (n8 = true);
              break;
            case "week_days":
              e9 = 8, "month" === t7.unit && (o9 = true);
              break;
            case "days":
              e9 = 1, "month" === t7.unit && (o9 = true);
              break;
            case "hours":
              "day" === t7.unit && (o9 = true);
              break;
            case "minutes_fives":
            case "seconds_fives":
              r8 % 5 != 0 && (n8 = true);
              break;
            case "seconds_tens":
              r8 % 10 != 0 && (n8 = true);
          }
          if ("hours" === i8.tickInterval || "minutes_fives" === i8.tickInterval || "seconds_tens" === i8.tickInterval || "seconds_fives" === i8.tickInterval) {
            if (!n8) return true;
          } else if ((r8 % e9 == 0 || o9) && !n8) return true;
        });
      } }, { key: "recalcDimensionsBasedOnFormat", value: function(t6, e8) {
        var i8 = this.w, a4 = this.formatDates(t6), s5 = this.removeOverlappingTS(a4);
        i8.globals.timescaleLabels = s5.slice(), new ct(this.ctx).plotCoords();
      } }, { key: "determineInterval", value: function(t6) {
        var e8 = 24 * t6, i8 = 60 * e8;
        switch (true) {
          case t6 / 365 > 5:
            this.tickInterval = "years";
            break;
          case t6 > 800:
            this.tickInterval = "half_year";
            break;
          case t6 > 180:
            this.tickInterval = "months";
            break;
          case t6 > 90:
            this.tickInterval = "months_fortnight";
            break;
          case t6 > 60:
            this.tickInterval = "months_days";
            break;
          case t6 > 30:
            this.tickInterval = "week_days";
            break;
          case t6 > 2:
            this.tickInterval = "days";
            break;
          case e8 > 2.4:
            this.tickInterval = "hours";
            break;
          case i8 > 15:
            this.tickInterval = "minutes_fives";
            break;
          case i8 > 5:
            this.tickInterval = "minutes";
            break;
          case i8 > 1:
            this.tickInterval = "seconds_tens";
            break;
          case 60 * i8 > 20:
            this.tickInterval = "seconds_fives";
            break;
          default:
            this.tickInterval = "seconds";
        }
      } }, { key: "generateYearScale", value: function(t6) {
        var e8 = t6.firstVal, i8 = t6.currentMonth, a4 = t6.currentYear, s5 = t6.daysWidthOnXAxis, r7 = t6.numberOfYears, o8 = e8.minYear, n7 = 0, l4 = new L2(this.ctx), h4 = "year";
        if (e8.minDate > 1 || e8.minMonth > 0) {
          var c5 = l4.determineRemainingDaysOfYear(e8.minYear, e8.minMonth, e8.minDate);
          n7 = (l4.determineDaysOfYear(e8.minYear) - c5 + 1) * s5, o8 = e8.minYear + 1, this.timeScaleArray.push({ position: n7, value: o8, unit: h4, year: o8, month: m2.monthMod(i8 + 1) });
        } else 1 === e8.minDate && 0 === e8.minMonth && this.timeScaleArray.push({ position: n7, value: o8, unit: h4, year: a4, month: m2.monthMod(i8 + 1) });
        for (var d4 = o8, g3 = n7, u4 = 0; u4 < r7; u4++) d4++, g3 = l4.determineDaysOfYear(d4 - 1) * s5 + g3, this.timeScaleArray.push({ position: g3, value: d4, unit: h4, year: d4, month: 1 });
      } }, { key: "generateMonthScale", value: function(t6) {
        var e8 = t6.firstVal, i8 = t6.currentMonthDate, a4 = t6.currentMonth, s5 = t6.currentYear, r7 = t6.daysWidthOnXAxis, o8 = t6.numberOfMonths, n7 = a4, l4 = 0, h4 = new L2(this.ctx), c5 = "month", d4 = 0;
        if (e8.minDate > 1) {
          l4 = (h4.determineDaysOfMonths(a4 + 1, e8.minYear) - i8 + 1) * r7, n7 = m2.monthMod(a4 + 1);
          var g3 = s5 + d4, u4 = m2.monthMod(n7), f4 = n7;
          0 === n7 && (c5 = "year", f4 = g3, u4 = 1, g3 += d4 += 1), this.timeScaleArray.push({ position: l4, value: f4, unit: c5, year: g3, month: u4 });
        } else this.timeScaleArray.push({ position: l4, value: n7, unit: c5, year: s5, month: m2.monthMod(a4) });
        for (var p4 = n7 + 1, x3 = l4, b4 = 0, v3 = 1; b4 < o8; b4++, v3++) {
          0 === (p4 = m2.monthMod(p4)) ? (c5 = "year", d4 += 1) : c5 = "month";
          var y4 = this._getYear(s5, p4, d4);
          x3 = h4.determineDaysOfMonths(p4, y4) * r7 + x3;
          var w3 = 0 === p4 ? y4 : p4;
          this.timeScaleArray.push({ position: x3, value: w3, unit: c5, year: y4, month: 0 === p4 ? 1 : p4 }), p4++;
        }
      } }, { key: "generateDayScale", value: function(t6) {
        var e8 = t6.firstVal, i8 = t6.currentMonth, a4 = t6.currentYear, s5 = t6.hoursWidthOnXAxis, r7 = t6.numberOfDays, o8 = new L2(this.ctx), n7 = "day", l4 = e8.minDate + 1, h4 = l4, c5 = function(t7, e9, i9) {
          return t7 > o8.determineDaysOfMonths(e9 + 1, i9) ? (h4 = 1, n7 = "month", g3 = e9 += 1, e9) : e9;
        }, d4 = (24 - e8.minHour) * s5, g3 = l4, u4 = c5(h4, i8, a4);
        0 === e8.minHour && 1 === e8.minDate ? (d4 = 0, g3 = m2.monthMod(e8.minMonth), n7 = "month", h4 = e8.minDate) : 1 !== e8.minDate && 0 === e8.minHour && 0 === e8.minMinute && (d4 = 0, l4 = e8.minDate, g3 = l4, u4 = c5(h4 = l4, i8, a4)), this.timeScaleArray.push({ position: d4, value: g3, unit: n7, year: this._getYear(a4, u4, 0), month: m2.monthMod(u4), day: h4 });
        for (var f4 = d4, p4 = 0; p4 < r7; p4++) {
          n7 = "day", u4 = c5(h4 += 1, u4, this._getYear(a4, u4, 0));
          var x3 = this._getYear(a4, u4, 0);
          f4 = 24 * s5 + f4;
          var b4 = 1 === h4 ? m2.monthMod(u4) : h4;
          this.timeScaleArray.push({ position: f4, value: b4, unit: n7, year: x3, month: m2.monthMod(u4), day: b4 });
        }
      } }, { key: "generateHourScale", value: function(t6) {
        var e8 = t6.firstVal, i8 = t6.currentDate, a4 = t6.currentMonth, s5 = t6.currentYear, r7 = t6.minutesWidthOnXAxis, o8 = t6.numberOfHours, n7 = new L2(this.ctx), l4 = "hour", h4 = function(t7, e9) {
          return t7 > n7.determineDaysOfMonths(e9 + 1, s5) && (p4 = 1, e9 += 1), { month: e9, date: p4 };
        }, c5 = function(t7, e9) {
          return t7 > n7.determineDaysOfMonths(e9 + 1, s5) ? e9 += 1 : e9;
        }, d4 = 60 - (e8.minMinute + e8.minSecond / 60), g3 = d4 * r7, u4 = e8.minHour + 1, f4 = u4;
        60 === d4 && (g3 = 0, f4 = u4 = e8.minHour);
        var p4 = i8;
        f4 >= 24 && (f4 = 0, p4 += 1, l4 = "day");
        var x3 = h4(p4, a4).month;
        x3 = c5(p4, x3), this.timeScaleArray.push({ position: g3, value: u4, unit: l4, day: p4, hour: f4, year: s5, month: m2.monthMod(x3) }), f4++;
        for (var b4 = g3, v3 = 0; v3 < o8; v3++) {
          if (l4 = "hour", f4 >= 24) f4 = 0, l4 = "day", x3 = h4(p4 += 1, x3).month, x3 = c5(p4, x3);
          var y4 = this._getYear(s5, x3, 0);
          b4 = 60 * r7 + b4;
          var w3 = 0 === f4 ? p4 : f4;
          this.timeScaleArray.push({ position: b4, value: w3, unit: l4, hour: f4, day: p4, year: y4, month: m2.monthMod(x3) }), f4++;
        }
      } }, { key: "generateMinuteScale", value: function(t6) {
        for (var e8 = t6.currentMillisecond, i8 = t6.currentSecond, a4 = t6.currentMinute, s5 = t6.currentHour, r7 = t6.currentDate, o8 = t6.currentMonth, n7 = t6.currentYear, l4 = t6.minutesWidthOnXAxis, h4 = t6.secondsWidthOnXAxis, c5 = t6.numberOfMinutes, d4 = a4 + 1, g3 = r7, u4 = o8, f4 = n7, p4 = s5, x3 = (60 - i8 - e8 / 1e3) * h4, b4 = 0; b4 < c5; b4++) d4 >= 60 && (d4 = 0, 24 === (p4 += 1) && (p4 = 0)), this.timeScaleArray.push({ position: x3, value: d4, unit: "minute", hour: p4, minute: d4, day: g3, year: this._getYear(f4, u4, 0), month: m2.monthMod(u4) }), x3 += l4, d4++;
      } }, { key: "generateSecondScale", value: function(t6) {
        for (var e8 = t6.currentMillisecond, i8 = t6.currentSecond, a4 = t6.currentMinute, s5 = t6.currentHour, r7 = t6.currentDate, o8 = t6.currentMonth, n7 = t6.currentYear, l4 = t6.secondsWidthOnXAxis, h4 = t6.numberOfSeconds, c5 = i8 + 1, d4 = a4, g3 = r7, u4 = o8, f4 = n7, p4 = s5, x3 = (1e3 - e8) / 1e3 * l4, b4 = 0; b4 < h4; b4++) c5 >= 60 && (c5 = 0, ++d4 >= 60 && (d4 = 0, 24 === ++p4 && (p4 = 0))), this.timeScaleArray.push({ position: x3, value: c5, unit: "second", hour: p4, minute: d4, second: c5, day: g3, year: this._getYear(f4, u4, 0), month: m2.monthMod(u4) }), x3 += l4, c5++;
      } }, { key: "createRawDateString", value: function(t6, e8) {
        var i8 = t6.year;
        return 0 === t6.month && (t6.month = 1), i8 += "-" + ("0" + t6.month.toString()).slice(-2), "day" === t6.unit ? i8 += "day" === t6.unit ? "-" + ("0" + e8).slice(-2) : "-01" : i8 += "-" + ("0" + (t6.day ? t6.day : "1")).slice(-2), "hour" === t6.unit ? i8 += "hour" === t6.unit ? "T" + ("0" + e8).slice(-2) : "T00" : i8 += "T" + ("0" + (t6.hour ? t6.hour : "0")).slice(-2), "minute" === t6.unit ? i8 += ":" + ("0" + e8).slice(-2) : i8 += ":" + (t6.minute ? ("0" + t6.minute).slice(-2) : "00"), "second" === t6.unit ? i8 += ":" + ("0" + e8).slice(-2) : i8 += ":00", this.utc && (i8 += ".000Z"), i8;
      } }, { key: "formatDates", value: function(t6) {
        var e8 = this, i8 = this.w;
        return t6.map(function(t7) {
          var a4 = t7.value.toString(), s5 = new L2(e8.ctx), r7 = e8.createRawDateString(t7, a4), o8 = s5.getDate(s5.parseDate(r7));
          if (e8.utc || (o8 = s5.getDate(s5.parseDateWithTimezone(r7))), void 0 === i8.config.xaxis.labels.format) {
            var n7 = "dd MMM", l4 = i8.config.xaxis.labels.datetimeFormatter;
            "year" === t7.unit && (n7 = l4.year), "month" === t7.unit && (n7 = l4.month), "day" === t7.unit && (n7 = l4.day), "hour" === t7.unit && (n7 = l4.hour), "minute" === t7.unit && (n7 = l4.minute), "second" === t7.unit && (n7 = l4.second), a4 = s5.formatDate(o8, n7);
          } else a4 = s5.formatDate(o8, i8.config.xaxis.labels.format);
          return { dateString: r7, position: t7.position, value: a4, unit: t7.unit, year: t7.year, month: t7.month };
        });
      } }, { key: "removeOverlappingTS", value: function(t6) {
        var e8, i8 = this, a4 = new k2(this.ctx), s5 = false;
        t6.length > 0 && t6[0].value && t6.every(function(e9) {
          return e9.value.length === t6[0].value.length;
        }) && (s5 = true, e8 = a4.getTextRects(t6[0].value).width);
        var r7 = 0, o8 = t6.map(function(o9, n7) {
          if (n7 > 0 && i8.w.config.xaxis.labels.hideOverlappingLabels) {
            var l4 = s5 ? e8 : a4.getTextRects(t6[r7].value).width, h4 = t6[r7].position;
            return o9.position > h4 + l4 + 10 ? (r7 = n7, o9) : null;
          }
          return o9;
        });
        return o8 = o8.filter(function(t7) {
          return null !== t7;
        });
      } }, { key: "_getYear", value: function(t6, e8, i8) {
        return t6 + Math.floor(e8 / 12) + i8;
      } }]), t5;
    }();
    var _t = function() {
      function t5(e8, a4) {
        i7(this, t5), this.ctx = a4, this.w = a4.w, this.el = e8;
      }
      return s4(t5, [{ key: "setupElements", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = t6.config, a4 = i8.chart.type;
        e8.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(a4), e8.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(a4), e8.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(a4) && i8.plotOptions.bar.horizontal, e8.chartClass = ".apexcharts".concat(e8.chartID), e8.dom.baseEl = this.el, e8.dom.elWrap = document.createElement("div"), k2.setAttrs(e8.dom.elWrap, { id: e8.chartClass.substring(1), class: "apexcharts-canvas ".concat(e8.chartClass.substring(1)) }), this.el.appendChild(e8.dom.elWrap), e8.dom.Paper = new window.SVG.Doc(e8.dom.elWrap), e8.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(i8.chart.offsetX, ", ").concat(i8.chart.offsetY, ")") }), e8.dom.Paper.node.style.background = "dark" !== i8.theme.mode || i8.chart.background ? "light" !== i8.theme.mode || i8.chart.background ? i8.chart.background : "#fff" : "#424242", this.setSVGDimensions(), e8.dom.elLegendForeign = document.createElementNS(e8.SVGNS, "foreignObject"), k2.setAttrs(e8.dom.elLegendForeign, { x: 0, y: 0, width: e8.svgWidth, height: e8.svgHeight }), e8.dom.elLegendWrap = document.createElement("div"), e8.dom.elLegendWrap.classList.add("apexcharts-legend"), e8.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e8.dom.elLegendForeign.appendChild(e8.dom.elLegendWrap), e8.dom.Paper.node.appendChild(e8.dom.elLegendForeign), e8.dom.elGraphical = e8.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), e8.dom.elDefs = e8.dom.Paper.defs(), e8.dom.Paper.add(e8.dom.elGraphical), e8.dom.elGraphical.add(e8.dom.elDefs);
      } }, { key: "plotChartType", value: function(t6, e8) {
        var i8 = this.w, a4 = this.ctx, s5 = i8.config, r7 = i8.globals, o8 = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, column: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, n7 = s5.chart.type || "line", l4 = null, h4 = 0;
        r7.series.forEach(function(e9, a5) {
          var s6 = t6[a5].type || n7;
          o8[s6] ? ("rangeArea" === s6 ? (o8[s6].series.push(r7.seriesRangeStart[a5]), o8[s6].seriesRangeEnd.push(r7.seriesRangeEnd[a5])) : o8[s6].series.push(e9), o8[s6].i.push(a5), "column" !== s6 && "bar" !== s6 || (i8.globals.columnSeries = o8.column)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(s6) ? l4 = s6 : "bar" === s6 ? (o8.column.series.push(e9), o8.column.i.push(a5)) : console.warn("You have specified an unrecognized series type (".concat(s6, ").")), n7 !== s6 && "scatter" !== s6 && h4++;
        }), h4 > 0 && (l4 && console.warn("Chart or series type ".concat(l4, " cannot appear with other chart or series types.")), o8.column.series.length > 0 && s5.plotOptions.bar.horizontal && (h4 -= o8.column.series.length, o8.column = { series: [], i: [] }, i8.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), r7.comboCharts || (r7.comboCharts = h4 > 0);
        var c5 = new Ot(a4, e8), d4 = new Lt(a4, e8);
        a4.pie = new Tt(a4);
        var g3 = new Xt(a4);
        a4.rangeBar = new Et(a4, e8);
        var u4 = new zt(a4), f4 = [];
        if (r7.comboCharts) {
          var x3, b4, v3 = new A2(a4);
          if (o8.area.series.length > 0) (x3 = f4).push.apply(x3, p3(v3.drawSeriesByGroup(o8.area, r7.areaGroups, "area", c5)));
          if (o8.column.series.length > 0) if (s5.chart.stacked) {
            var m3 = new Ct(a4, e8);
            f4.push(m3.draw(o8.column.series, o8.column.i));
          } else a4.bar = new St(a4, e8), f4.push(a4.bar.draw(o8.column.series, o8.column.i));
          if (o8.rangeArea.series.length > 0 && f4.push(c5.draw(o8.rangeArea.series, "rangeArea", o8.rangeArea.i, o8.rangeArea.seriesRangeEnd)), o8.line.series.length > 0) (b4 = f4).push.apply(b4, p3(v3.drawSeriesByGroup(o8.line, r7.lineGroups, "line", c5)));
          if (o8.candlestick.series.length > 0 && f4.push(d4.draw(o8.candlestick.series, "candlestick", o8.candlestick.i)), o8.boxPlot.series.length > 0 && f4.push(d4.draw(o8.boxPlot.series, "boxPlot", o8.boxPlot.i)), o8.rangeBar.series.length > 0 && f4.push(a4.rangeBar.draw(o8.rangeBar.series, o8.rangeBar.i)), o8.scatter.series.length > 0) {
            var y4 = new Ot(a4, e8, true);
            f4.push(y4.draw(o8.scatter.series, "scatter", o8.scatter.i));
          }
          if (o8.bubble.series.length > 0) {
            var w3 = new Ot(a4, e8, true);
            f4.push(w3.draw(o8.bubble.series, "bubble", o8.bubble.i));
          }
        } else switch (s5.chart.type) {
          case "line":
            f4 = c5.draw(r7.series, "line");
            break;
          case "area":
            f4 = c5.draw(r7.series, "area");
            break;
          case "bar":
            if (s5.chart.stacked) f4 = new Ct(a4, e8).draw(r7.series);
            else a4.bar = new St(a4, e8), f4 = a4.bar.draw(r7.series);
            break;
          case "candlestick":
            f4 = new Lt(a4, e8).draw(r7.series, "candlestick");
            break;
          case "boxPlot":
            f4 = new Lt(a4, e8).draw(r7.series, s5.chart.type);
            break;
          case "rangeBar":
            f4 = a4.rangeBar.draw(r7.series);
            break;
          case "rangeArea":
            f4 = c5.draw(r7.seriesRangeStart, "rangeArea", void 0, r7.seriesRangeEnd);
            break;
          case "heatmap":
            f4 = new Mt(a4, e8).draw(r7.series);
            break;
          case "treemap":
            f4 = new Bt(a4, e8).draw(r7.series);
            break;
          case "pie":
          case "donut":
          case "polarArea":
            f4 = a4.pie.draw(r7.series);
            break;
          case "radialBar":
            f4 = g3.draw(r7.series);
            break;
          case "radar":
            f4 = u4.draw(r7.series);
            break;
          default:
            f4 = c5.draw(r7.series);
        }
        return f4;
      } }, { key: "setSVGDimensions", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = t6.config;
        i8.chart.width = i8.chart.width || "100%", i8.chart.height = i8.chart.height || "auto", e8.svgWidth = i8.chart.width, e8.svgHeight = i8.chart.height;
        var a4 = m2.getDimensions(this.el), s5 = i8.chart.width.toString().split(/[0-9]+/g).pop();
        "%" === s5 ? m2.isNumber(a4[0]) && (0 === a4[0].width && (a4 = m2.getDimensions(this.el.parentNode)), e8.svgWidth = a4[0] * parseInt(i8.chart.width, 10) / 100) : "px" !== s5 && "" !== s5 || (e8.svgWidth = parseInt(i8.chart.width, 10));
        var r7 = String(i8.chart.height).toString().split(/[0-9]+/g).pop();
        if ("auto" !== e8.svgHeight && "" !== e8.svgHeight) if ("%" === r7) {
          var o8 = m2.getDimensions(this.el.parentNode);
          e8.svgHeight = o8[1] * parseInt(i8.chart.height, 10) / 100;
        } else e8.svgHeight = parseInt(i8.chart.height, 10);
        else e8.svgHeight = e8.axisCharts ? e8.svgWidth / 1.61 : e8.svgWidth / 1.2;
        if (e8.svgWidth = Math.max(e8.svgWidth, 0), e8.svgHeight = Math.max(e8.svgHeight, 0), k2.setAttrs(e8.dom.Paper.node, { width: e8.svgWidth, height: e8.svgHeight }), "%" !== r7) {
          var n7 = i8.chart.sparkline.enabled ? 0 : e8.axisCharts ? i8.chart.parentHeightOffset : 0;
          e8.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(e8.svgHeight + n7, "px");
        }
        e8.dom.elWrap.style.width = "".concat(e8.svgWidth, "px"), e8.dom.elWrap.style.height = "".concat(e8.svgHeight, "px");
      } }, { key: "shiftGraphPosition", value: function() {
        var t6 = this.w.globals, e8 = t6.translateY, i8 = t6.translateX;
        k2.setAttrs(t6.dom.elGraphical.node, { transform: "translate(".concat(i8, ", ").concat(e8, ")") });
      } }, { key: "resizeNonAxisCharts", value: function() {
        var t6 = this.w, e8 = t6.globals, i8 = 0, a4 = t6.config.chart.sparkline.enabled ? 1 : 15;
        a4 += t6.config.grid.padding.bottom, ["top", "bottom"].includes(t6.config.legend.position) && t6.config.legend.show && !t6.config.legend.floating && (i8 = new gt(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
        var s5 = t6.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r7 = 2.05 * t6.globals.radialSize;
        if (s5 && !t6.config.chart.sparkline.enabled && 0 !== t6.config.plotOptions.radialBar.startAngle) {
          var o8 = m2.getBoundingClientRect(s5);
          r7 = o8.bottom;
          var n7 = o8.bottom - o8.top;
          r7 = Math.max(2.05 * t6.globals.radialSize, n7);
        }
        var l4 = Math.ceil(r7 + e8.translateY + i8 + a4);
        e8.dom.elLegendForeign && e8.dom.elLegendForeign.setAttribute("height", l4), t6.config.chart.height && String(t6.config.chart.height).includes("%") || (e8.dom.elWrap.style.height = "".concat(l4, "px"), k2.setAttrs(e8.dom.Paper.node, { height: l4 }), e8.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(l4, "px"));
      } }, { key: "coreCalculations", value: function() {
        new J(this.ctx).init();
      } }, { key: "resetGlobals", value: function() {
        var t6 = this, e8 = function() {
          return t6.w.config.series.map(function() {
            return [];
          });
        }, i8 = new H2(), a4 = this.w.globals;
        i8.initGlobalVars(a4), a4.seriesXvalues = e8(), a4.seriesYvalues = e8();
      } }, { key: "isMultipleY", value: function() {
        return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = true, true);
      } }, { key: "xySettings", value: function() {
        var t6 = this.w, e8 = null;
        if (t6.globals.axisCharts) {
          if ("back" === t6.config.xaxis.crosshairs.position && new it(this.ctx).drawXCrosshairs(), "back" === t6.config.yaxis[0].crosshairs.position && new it(this.ctx).drawYCrosshairs(), "datetime" === t6.config.xaxis.type && void 0 === t6.config.xaxis.labels.formatter) {
            this.ctx.timeScale = new jt(this.ctx);
            var i8 = [];
            isFinite(t6.globals.minX) && isFinite(t6.globals.maxX) && !t6.globals.isBarHorizontal ? i8 = this.ctx.timeScale.calculateTimeScaleTicks(t6.globals.minX, t6.globals.maxX) : t6.globals.isBarHorizontal && (i8 = this.ctx.timeScale.calculateTimeScaleTicks(t6.globals.minY, t6.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i8);
          }
          e8 = new A2(this.ctx).getCalculatedRatios();
        }
        return e8;
      } }, { key: "updateSourceChart", value: function(t6) {
        this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t6.w.globals.minX, max: t6.w.globals.maxX } } } }, false, false);
      } }, { key: "setupBrushHandler", value: function() {
        var t6 = this, e8 = this.w;
        if (e8.config.chart.brush.enabled && "function" != typeof e8.config.chart.events.selection) {
          var i8 = Array.isArray(e8.config.chart.brush.targets) ? e8.config.chart.brush.targets : [e8.config.chart.brush.target];
          i8.forEach(function(e9) {
            var i9 = ApexCharts.getChartByID(e9);
            i9.w.globals.brushSource = t6.ctx, "function" != typeof i9.w.config.chart.events.zoomed && (i9.w.config.chart.events.zoomed = function() {
              return t6.updateSourceChart(i9);
            }), "function" != typeof i9.w.config.chart.events.scrolled && (i9.w.config.chart.events.scrolled = function() {
              return t6.updateSourceChart(i9);
            });
          }), e8.config.chart.events.selection = function(t7, e9) {
            i8.forEach(function(t8) {
              ApexCharts.getChartByID(t8).ctx.updateHelpers._updateOptions({ xaxis: { min: e9.xaxis.min, max: e9.xaxis.max } }, false, false, false, false);
            });
          };
        }
      } }]), t5;
    }();
    var Ut = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "_updateOptions", value: function(t6) {
        var e8 = this, i8 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a4 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s5 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r7 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return new Promise(function(o8) {
          var n7 = [e8.ctx];
          s5 && (n7 = e8.ctx.getSyncedCharts()), e8.ctx.w.globals.isExecCalled && (n7 = [e8.ctx], e8.ctx.w.globals.isExecCalled = false), n7.forEach(function(s6, l4) {
            var h4 = s6.w;
            if (h4.globals.shouldAnimate = a4, i8 || (h4.globals.resized = true, h4.globals.dataChanged = true, a4 && s6.series.getPreviousPaths()), t6 && "object" === b3(t6) && (s6.config = new D2(t6), t6 = A2.extendArrayProps(s6.config, t6, h4), s6.w.globals.chartID !== e8.ctx.w.globals.chartID && delete t6.series, h4.config = m2.extend(h4.config, t6), r7 && (h4.globals.lastXAxis = t6.xaxis ? m2.clone(t6.xaxis) : [], h4.globals.lastYAxis = t6.yaxis ? m2.clone(t6.yaxis) : [], h4.globals.initialConfig = m2.extend({}, h4.config), h4.globals.initialSeries = m2.clone(h4.config.series), t6.series))) {
              for (var c5 = 0; c5 < h4.globals.collapsedSeriesIndices.length; c5++) {
                var d4 = h4.config.series[h4.globals.collapsedSeriesIndices[c5]];
                h4.globals.collapsedSeries[c5].data = h4.globals.axisCharts ? d4.data.slice() : d4;
              }
              for (var g3 = 0; g3 < h4.globals.ancillaryCollapsedSeriesIndices.length; g3++) {
                var u4 = h4.config.series[h4.globals.ancillaryCollapsedSeriesIndices[g3]];
                h4.globals.ancillaryCollapsedSeries[g3].data = h4.globals.axisCharts ? u4.data.slice() : u4;
              }
              s6.series.emptyCollapsedSeries(h4.config.series);
            }
            return s6.update(t6).then(function() {
              l4 === n7.length - 1 && o8(s6);
            });
          });
        });
      } }, { key: "_updateSeries", value: function(t6, e8) {
        var i8 = this, a4 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(function(s5) {
          var r7, o8 = i8.w;
          return o8.globals.shouldAnimate = e8, o8.globals.dataChanged = true, e8 && i8.ctx.series.getPreviousPaths(), o8.globals.axisCharts ? (0 === (r7 = t6.map(function(t7, e9) {
            return i8._extendSeries(t7, e9);
          })).length && (r7 = [{ data: [] }]), o8.config.series = r7) : o8.config.series = t6.slice(), a4 && (o8.globals.initialConfig.series = m2.clone(o8.config.series), o8.globals.initialSeries = m2.clone(o8.config.series)), i8.ctx.update().then(function() {
            s5(i8.ctx);
          });
        });
      } }, { key: "_extendSeries", value: function(t6, e8) {
        var i8 = this.w, a4 = i8.config.series[e8];
        return g2(g2({}, i8.config.series[e8]), {}, { name: t6.name ? t6.name : null == a4 ? void 0 : a4.name, color: t6.color ? t6.color : null == a4 ? void 0 : a4.color, type: t6.type ? t6.type : null == a4 ? void 0 : a4.type, group: t6.group ? t6.group : null == a4 ? void 0 : a4.group, hidden: void 0 !== t6.hidden ? t6.hidden : null == a4 ? void 0 : a4.hidden, data: t6.data ? t6.data : null == a4 ? void 0 : a4.data, zIndex: void 0 !== t6.zIndex ? t6.zIndex : e8 });
      } }, { key: "toggleDataPointSelection", value: function(t6, e8) {
        var i8 = this.w, a4 = null, s5 = ".apexcharts-series[data\\:realIndex='".concat(t6, "']");
        return i8.globals.axisCharts ? a4 = i8.globals.dom.Paper.select("".concat(s5, " path[j='").concat(e8, "'], ").concat(s5, " circle[j='").concat(e8, "'], ").concat(s5, " rect[j='").concat(e8, "']")).members[0] : void 0 === e8 && (a4 = i8.globals.dom.Paper.select("".concat(s5, " path[j='").concat(t6, "']")).members[0], "pie" !== i8.config.chart.type && "polarArea" !== i8.config.chart.type && "donut" !== i8.config.chart.type || this.ctx.pie.pieClicked(t6)), a4 ? (new k2(this.ctx).pathMouseDown(a4, null), a4.node ? a4.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
      } }, { key: "forceXAxisUpdate", value: function(t6) {
        var e8 = this.w;
        if (["min", "max"].forEach(function(i9) {
          void 0 !== t6.xaxis[i9] && (e8.config.xaxis[i9] = t6.xaxis[i9], e8.globals.lastXAxis[i9] = t6.xaxis[i9]);
        }), t6.xaxis.categories && t6.xaxis.categories.length && (e8.config.xaxis.categories = t6.xaxis.categories), e8.config.xaxis.convertedCatToNumeric) {
          var i8 = new F(t6);
          t6 = i8.convertCatToNumericXaxis(t6, this.ctx);
        }
        return t6;
      } }, { key: "forceYAxisUpdate", value: function(t6) {
        return t6.chart && t6.chart.stacked && "100%" === t6.chart.stackType && (Array.isArray(t6.yaxis) ? t6.yaxis.forEach(function(e8, i8) {
          t6.yaxis[i8].min = 0, t6.yaxis[i8].max = 100;
        }) : (t6.yaxis.min = 0, t6.yaxis.max = 100)), t6;
      } }, { key: "revertDefaultAxisMinMax", value: function(t6) {
        var e8 = this, i8 = this.w, a4 = i8.globals.lastXAxis, s5 = i8.globals.lastYAxis;
        t6 && t6.xaxis && (a4 = t6.xaxis), t6 && t6.yaxis && (s5 = t6.yaxis), i8.config.xaxis.min = a4.min, i8.config.xaxis.max = a4.max;
        var r7 = function(t7) {
          void 0 !== s5[t7] && (i8.config.yaxis[t7].min = s5[t7].min, i8.config.yaxis[t7].max = s5[t7].max);
        };
        i8.config.yaxis.map(function(t7, a5) {
          i8.globals.zoomed || void 0 !== s5[a5] ? r7(a5) : void 0 !== e8.ctx.opts.yaxis[a5] && (t7.min = e8.ctx.opts.yaxis[a5].min, t7.max = e8.ctx.opts.yaxis[a5].max);
        });
      } }]), t5;
    }();
    Nt = "undefined" != typeof window ? window : void 0, Wt = function(t5, e8) {
      var i8 = (void 0 !== this ? this : t5).SVG = function(t6) {
        if (i8.supported) return t6 = new i8.Doc(t6), i8.parser.draw || i8.prepare(), t6;
      };
      if (i8.ns = "http://www.w3.org/2000/svg", i8.xmlns = "http://www.w3.org/2000/xmlns/", i8.xlink = "http://www.w3.org/1999/xlink", i8.svgjs = "http://svgjs.dev", i8.supported = true, !i8.supported) return false;
      i8.did = 1e3, i8.eid = function(t6) {
        return "Svgjs" + c5(t6) + i8.did++;
      }, i8.create = function(t6) {
        var i9 = e8.createElementNS(this.ns, t6);
        return i9.setAttribute("id", this.eid(t6)), i9;
      }, i8.extend = function() {
        var t6, e9;
        e9 = (t6 = [].slice.call(arguments)).pop();
        for (var a5 = t6.length - 1; a5 >= 0; a5--) if (t6[a5]) for (var s6 in e9) t6[a5].prototype[s6] = e9[s6];
        i8.Set && i8.Set.inherit && i8.Set.inherit();
      }, i8.invent = function(t6) {
        var e9 = "function" == typeof t6.create ? t6.create : function() {
          this.constructor.call(this, i8.create(t6.create));
        };
        return t6.inherit && (e9.prototype = new t6.inherit()), t6.extend && i8.extend(e9, t6.extend), t6.construct && i8.extend(t6.parent || i8.Container, t6.construct), e9;
      }, i8.adopt = function(e9) {
        return e9 ? e9.instance ? e9.instance : ((a5 = "svg" == e9.nodeName ? e9.parentNode instanceof t5.SVGElement ? new i8.Nested() : new i8.Doc() : "linearGradient" == e9.nodeName ? new i8.Gradient("linear") : "radialGradient" == e9.nodeName ? new i8.Gradient("radial") : i8[c5(e9.nodeName)] ? new i8[c5(e9.nodeName)]() : new i8.Element(e9)).type = e9.nodeName, a5.node = e9, e9.instance = a5, a5 instanceof i8.Doc && a5.namespace().defs(), a5.setData(JSON.parse(e9.getAttribute("svgjs:data")) || {}), a5) : null;
        var a5;
      }, i8.prepare = function() {
        var t6 = e8.getElementsByTagName("body")[0], a5 = (t6 ? new i8.Doc(t6) : i8.adopt(e8.documentElement).nested()).size(2, 0);
        i8.parser = { body: t6 || e8.documentElement, draw: a5.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: a5.polyline().node, path: a5.path().node, native: i8.create("svg") };
      }, i8.parser = { native: i8.create("svg") }, e8.addEventListener("DOMContentLoaded", function() {
        i8.parser.draw || i8.prepare();
      }, false), i8.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, i8.utils = { map: function(t6, e9) {
        for (var i9 = t6.length, a5 = [], s6 = 0; s6 < i9; s6++) a5.push(e9(t6[s6]));
        return a5;
      }, filter: function(t6, e9) {
        for (var i9 = t6.length, a5 = [], s6 = 0; s6 < i9; s6++) e9(t6[s6]) && a5.push(t6[s6]);
        return a5;
      }, filterSVGElements: function(e9) {
        return this.filter(e9, function(e10) {
          return e10 instanceof t5.SVGElement;
        });
      } }, i8.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, i8.Color = function(t6) {
        var e9, a5;
        this.r = 0, this.g = 0, this.b = 0, t6 && ("string" == typeof t6 ? i8.regex.isRgb.test(t6) ? (e9 = i8.regex.rgb.exec(t6.replace(i8.regex.whitespace, "")), this.r = parseInt(e9[1]), this.g = parseInt(e9[2]), this.b = parseInt(e9[3])) : i8.regex.isHex.test(t6) && (e9 = i8.regex.hex.exec(4 == (a5 = t6).length ? ["#", a5.substring(1, 2), a5.substring(1, 2), a5.substring(2, 3), a5.substring(2, 3), a5.substring(3, 4), a5.substring(3, 4)].join("") : a5), this.r = parseInt(e9[1], 16), this.g = parseInt(e9[2], 16), this.b = parseInt(e9[3], 16)) : "object" === b3(t6) && (this.r = t6.r, this.g = t6.g, this.b = t6.b));
      }, i8.extend(i8.Color, { toString: function() {
        return this.toHex();
      }, toHex: function() {
        return "#" + d4(this.r) + d4(this.g) + d4(this.b);
      }, toRgb: function() {
        return "rgb(" + [this.r, this.g, this.b].join() + ")";
      }, brightness: function() {
        return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
      }, morph: function(t6) {
        return this.destination = new i8.Color(t6), this;
      }, at: function(t6) {
        return this.destination ? (t6 = t6 < 0 ? 0 : t6 > 1 ? 1 : t6, new i8.Color({ r: ~~(this.r + (this.destination.r - this.r) * t6), g: ~~(this.g + (this.destination.g - this.g) * t6), b: ~~(this.b + (this.destination.b - this.b) * t6) })) : this;
      } }), i8.Color.test = function(t6) {
        return t6 += "", i8.regex.isHex.test(t6) || i8.regex.isRgb.test(t6);
      }, i8.Color.isRgb = function(t6) {
        return t6 && "number" == typeof t6.r && "number" == typeof t6.g && "number" == typeof t6.b;
      }, i8.Color.isColor = function(t6) {
        return i8.Color.isRgb(t6) || i8.Color.test(t6);
      }, i8.Array = function(t6, e9) {
        0 == (t6 = (t6 || []).valueOf()).length && e9 && (t6 = e9.valueOf()), this.value = this.parse(t6);
      }, i8.extend(i8.Array, { toString: function() {
        return this.value.join(" ");
      }, valueOf: function() {
        return this.value;
      }, parse: function(t6) {
        return t6 = t6.valueOf(), Array.isArray(t6) ? t6 : this.split(t6);
      } }), i8.PointArray = function(t6, e9) {
        i8.Array.call(this, t6, e9 || [[0, 0]]);
      }, i8.PointArray.prototype = new i8.Array(), i8.PointArray.prototype.constructor = i8.PointArray;
      for (var a4 = { M: function(t6, e9, i9) {
        return e9.x = i9.x = t6[0], e9.y = i9.y = t6[1], ["M", e9.x, e9.y];
      }, L: function(t6, e9) {
        return e9.x = t6[0], e9.y = t6[1], ["L", t6[0], t6[1]];
      }, H: function(t6, e9) {
        return e9.x = t6[0], ["H", t6[0]];
      }, V: function(t6, e9) {
        return e9.y = t6[0], ["V", t6[0]];
      }, C: function(t6, e9) {
        return e9.x = t6[4], e9.y = t6[5], ["C", t6[0], t6[1], t6[2], t6[3], t6[4], t6[5]];
      }, Q: function(t6, e9) {
        return e9.x = t6[2], e9.y = t6[3], ["Q", t6[0], t6[1], t6[2], t6[3]];
      }, S: function(t6, e9) {
        return e9.x = t6[2], e9.y = t6[3], ["S", t6[0], t6[1], t6[2], t6[3]];
      }, Z: function(t6, e9, i9) {
        return e9.x = i9.x, e9.y = i9.y, ["Z"];
      } }, s5 = "mlhvqtcsaz".split(""), r7 = 0, o8 = s5.length; r7 < o8; ++r7) a4[s5[r7]] = /* @__PURE__ */ function(t6) {
        return function(e9, i9, s6) {
          if ("H" == t6) e9[0] = e9[0] + i9.x;
          else if ("V" == t6) e9[0] = e9[0] + i9.y;
          else if ("A" == t6) e9[5] = e9[5] + i9.x, e9[6] = e9[6] + i9.y;
          else for (var r8 = 0, o9 = e9.length; r8 < o9; ++r8) e9[r8] = e9[r8] + (r8 % 2 ? i9.y : i9.x);
          if (a4 && "function" == typeof a4[t6]) return a4[t6](e9, i9, s6);
        };
      }(s5[r7].toUpperCase());
      i8.PathArray = function(t6, e9) {
        i8.Array.call(this, t6, e9 || [["M", 0, 0]]);
      }, i8.PathArray.prototype = new i8.Array(), i8.PathArray.prototype.constructor = i8.PathArray, i8.extend(i8.PathArray, { toString: function() {
        return function(t6) {
          for (var e9 = 0, i9 = t6.length, a5 = ""; e9 < i9; e9++) a5 += t6[e9][0], null != t6[e9][1] && (a5 += t6[e9][1], null != t6[e9][2] && (a5 += " ", a5 += t6[e9][2], null != t6[e9][3] && (a5 += " ", a5 += t6[e9][3], a5 += " ", a5 += t6[e9][4], null != t6[e9][5] && (a5 += " ", a5 += t6[e9][5], a5 += " ", a5 += t6[e9][6], null != t6[e9][7] && (a5 += " ", a5 += t6[e9][7])))));
          return a5 + " ";
        }(this.value);
      }, move: function(t6, e9) {
        var i9 = this.bbox();
        return i9.x, i9.y, this;
      }, at: function(t6) {
        if (!this.destination) return this;
        for (var e9 = this.value, a5 = this.destination.value, s6 = [], r8 = new i8.PathArray(), o9 = 0, n8 = e9.length; o9 < n8; o9++) {
          s6[o9] = [e9[o9][0]];
          for (var l5 = 1, h5 = e9[o9].length; l5 < h5; l5++) s6[o9][l5] = e9[o9][l5] + (a5[o9][l5] - e9[o9][l5]) * t6;
          "A" === s6[o9][0] && (s6[o9][4] = +(0 != s6[o9][4]), s6[o9][5] = +(0 != s6[o9][5]));
        }
        return r8.value = s6, r8;
      }, parse: function(t6) {
        if (t6 instanceof i8.PathArray) return t6.valueOf();
        var e9, s6 = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
        t6 = "string" == typeof t6 ? t6.replace(i8.regex.numbersWithDots, l4).replace(i8.regex.pathLetters, " $& ").replace(i8.regex.hyphen, "$1 -").trim().split(i8.regex.delimiter) : t6.reduce(function(t7, e10) {
          return [].concat.call(t7, e10);
        }, []);
        var r8 = [], o9 = new i8.Point(), n8 = new i8.Point(), h5 = 0, c6 = t6.length;
        do {
          i8.regex.isPathLetter.test(t6[h5]) ? (e9 = t6[h5], ++h5) : "M" == e9 ? e9 = "L" : "m" == e9 && (e9 = "l"), r8.push(a4[e9].call(null, t6.slice(h5, h5 += s6[e9.toUpperCase()]).map(parseFloat), o9, n8));
        } while (c6 > h5);
        return r8;
      }, bbox: function() {
        return i8.parser.draw || i8.prepare(), i8.parser.path.setAttribute("d", this.toString()), i8.parser.path.getBBox();
      } }), i8.Number = i8.invent({ create: function(t6, e9) {
        this.value = 0, this.unit = e9 || "", "number" == typeof t6 ? this.value = isNaN(t6) ? 0 : isFinite(t6) ? t6 : t6 < 0 ? -34e37 : 34e37 : "string" == typeof t6 ? (e9 = t6.match(i8.regex.numberAndUnit)) && (this.value = parseFloat(e9[1]), "%" == e9[5] ? this.value /= 100 : "s" == e9[5] && (this.value *= 1e3), this.unit = e9[5]) : t6 instanceof i8.Number && (this.value = t6.valueOf(), this.unit = t6.unit);
      }, extend: { toString: function() {
        return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit;
      }, toJSON: function() {
        return this.toString();
      }, valueOf: function() {
        return this.value;
      }, plus: function(t6) {
        return t6 = new i8.Number(t6), new i8.Number(this + t6, this.unit || t6.unit);
      }, minus: function(t6) {
        return t6 = new i8.Number(t6), new i8.Number(this - t6, this.unit || t6.unit);
      }, times: function(t6) {
        return t6 = new i8.Number(t6), new i8.Number(this * t6, this.unit || t6.unit);
      }, divide: function(t6) {
        return t6 = new i8.Number(t6), new i8.Number(this / t6, this.unit || t6.unit);
      }, to: function(t6) {
        var e9 = new i8.Number(this);
        return "string" == typeof t6 && (e9.unit = t6), e9;
      }, morph: function(t6) {
        return this.destination = new i8.Number(t6), t6.relative && (this.destination.value += this.value), this;
      }, at: function(t6) {
        return this.destination ? new i8.Number(this.destination).minus(this).times(t6).plus(this) : this;
      } } }), i8.Element = i8.invent({ create: function(t6) {
        this._stroke = i8.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t6) && (this.type = t6.nodeName, this.node.instance = this, this._stroke = t6.getAttribute("stroke") || this._stroke);
      }, extend: { x: function(t6) {
        return this.attr("x", t6);
      }, y: function(t6) {
        return this.attr("y", t6);
      }, cx: function(t6) {
        return null == t6 ? this.x() + this.width() / 2 : this.x(t6 - this.width() / 2);
      }, cy: function(t6) {
        return null == t6 ? this.y() + this.height() / 2 : this.y(t6 - this.height() / 2);
      }, move: function(t6, e9) {
        return this.x(t6).y(e9);
      }, center: function(t6, e9) {
        return this.cx(t6).cy(e9);
      }, width: function(t6) {
        return this.attr("width", t6);
      }, height: function(t6) {
        return this.attr("height", t6);
      }, size: function(t6, e9) {
        var a5 = g3(this, t6, e9);
        return this.width(new i8.Number(a5.width)).height(new i8.Number(a5.height));
      }, clone: function(t6) {
        this.writeDataToDom();
        var e9 = p4(this.node.cloneNode(true));
        return t6 ? t6.add(e9) : this.after(e9), e9;
      }, remove: function() {
        return this.parent() && this.parent().removeElement(this), this;
      }, replace: function(t6) {
        return this.after(t6).remove(), t6;
      }, addTo: function(t6) {
        return t6.put(this);
      }, putIn: function(t6) {
        return t6.add(this);
      }, id: function(t6) {
        return this.attr("id", t6);
      }, show: function() {
        return this.style("display", "");
      }, hide: function() {
        return this.style("display", "none");
      }, visible: function() {
        return "none" != this.style("display");
      }, toString: function() {
        return this.attr("id");
      }, classes: function() {
        var t6 = this.attr("class");
        return null == t6 ? [] : t6.trim().split(i8.regex.delimiter);
      }, hasClass: function(t6) {
        return -1 != this.classes().indexOf(t6);
      }, addClass: function(t6) {
        if (!this.hasClass(t6)) {
          var e9 = this.classes();
          e9.push(t6), this.attr("class", e9.join(" "));
        }
        return this;
      }, removeClass: function(t6) {
        return this.hasClass(t6) && this.attr("class", this.classes().filter(function(e9) {
          return e9 != t6;
        }).join(" ")), this;
      }, toggleClass: function(t6) {
        return this.hasClass(t6) ? this.removeClass(t6) : this.addClass(t6);
      }, reference: function(t6) {
        return i8.get(this.attr(t6));
      }, parent: function(e9) {
        var a5 = this;
        if (!a5.node.parentNode) return null;
        if (a5 = i8.adopt(a5.node.parentNode), !e9) return a5;
        for (; a5 && a5.node instanceof t5.SVGElement; ) {
          if ("string" == typeof e9 ? a5.matches(e9) : a5 instanceof e9) return a5;
          if (!a5.node.parentNode || "#document" == a5.node.parentNode.nodeName) return null;
          a5 = i8.adopt(a5.node.parentNode);
        }
      }, doc: function() {
        return this instanceof i8.Doc ? this : this.parent(i8.Doc);
      }, parents: function(t6) {
        var e9 = [], i9 = this;
        do {
          if (!(i9 = i9.parent(t6)) || !i9.node) break;
          e9.push(i9);
        } while (i9.parent);
        return e9;
      }, matches: function(t6) {
        return function(t7, e9) {
          return (t7.matches || t7.matchesSelector || t7.msMatchesSelector || t7.mozMatchesSelector || t7.webkitMatchesSelector || t7.oMatchesSelector).call(t7, e9);
        }(this.node, t6);
      }, native: function() {
        return this.node;
      }, svg: function(t6) {
        var a5 = e8.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (!(t6 && this instanceof i8.Parent)) return a5.appendChild(t6 = e8.createElementNS("http://www.w3.org/2000/svg", "svg")), this.writeDataToDom(), t6.appendChild(this.node.cloneNode(true)), a5.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
        a5.innerHTML = "<svg>" + t6.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
        for (var s6 = 0, r8 = a5.firstChild.childNodes.length; s6 < r8; s6++) this.node.appendChild(a5.firstChild.firstChild);
        return this;
      }, writeDataToDom: function() {
        return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
          this.writeDataToDom();
        }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
      }, setData: function(t6) {
        return this.dom = t6, this;
      }, is: function(t6) {
        return function(t7, e9) {
          return t7 instanceof e9;
        }(this, t6);
      } } }), i8.easing = { "-": function(t6) {
        return t6;
      }, "<>": function(t6) {
        return -Math.cos(t6 * Math.PI) / 2 + 0.5;
      }, ">": function(t6) {
        return Math.sin(t6 * Math.PI / 2);
      }, "<": function(t6) {
        return 1 - Math.cos(t6 * Math.PI / 2);
      } }, i8.morph = function(t6) {
        return function(e9, a5) {
          return new i8.MorphObj(e9, a5).at(t6);
        };
      }, i8.Situation = i8.invent({ create: function(t6) {
        this.init = false, this.reversed = false, this.reversing = false, this.duration = new i8.Number(t6.duration).valueOf(), this.delay = new i8.Number(t6.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = t6.ease, this.loop = 0, this.loops = false, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
      } }), i8.FX = i8.invent({ create: function(t6) {
        this._target = t6, this.situations = [], this.active = false, this.situation = null, this.paused = false, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
      }, extend: { animate: function(t6, e9, a5) {
        "object" === b3(t6) && (e9 = t6.ease, a5 = t6.delay, t6 = t6.duration);
        var s6 = new i8.Situation({ duration: t6 || 1e3, delay: a5 || 0, ease: i8.easing[e9 || "-"] || e9 });
        return this.queue(s6), this;
      }, target: function(t6) {
        return t6 && t6 instanceof i8.Element ? (this._target = t6, this) : this._target;
      }, timeToAbsPos: function(t6) {
        return (t6 - this.situation.start) / (this.situation.duration / this._speed);
      }, absPosToTime: function(t6) {
        return this.situation.duration / this._speed * t6 + this.situation.start;
      }, startAnimFrame: function() {
        this.stopAnimFrame(), this.animationFrame = t5.requestAnimationFrame(function() {
          this.step();
        }.bind(this));
      }, stopAnimFrame: function() {
        t5.cancelAnimationFrame(this.animationFrame);
      }, start: function() {
        return !this.active && this.situation && (this.active = true, this.startCurrent()), this;
      }, startCurrent: function() {
        return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
      }, queue: function(t6) {
        return ("function" == typeof t6 || t6 instanceof i8.Situation) && this.situations.push(t6), this.situation || (this.situation = this.situations.shift()), this;
      }, dequeue: function() {
        return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof i8.Situation ? this.start() : this.situation.call(this)), this;
      }, initAnimations: function() {
        var t6, e9 = this.situation;
        if (e9.init) return this;
        for (var a5 in e9.animations) {
          t6 = this.target()[a5](), Array.isArray(t6) || (t6 = [t6]), Array.isArray(e9.animations[a5]) || (e9.animations[a5] = [e9.animations[a5]]);
          for (var s6 = t6.length; s6--; ) e9.animations[a5][s6] instanceof i8.Number && (t6[s6] = new i8.Number(t6[s6])), e9.animations[a5][s6] = t6[s6].morph(e9.animations[a5][s6]);
        }
        for (var a5 in e9.attrs) e9.attrs[a5] = new i8.MorphObj(this.target().attr(a5), e9.attrs[a5]);
        for (var a5 in e9.styles) e9.styles[a5] = new i8.MorphObj(this.target().style(a5), e9.styles[a5]);
        return e9.initialTransformation = this.target().matrixify(), e9.init = true, this;
      }, clearQueue: function() {
        return this.situations = [], this;
      }, clearCurrent: function() {
        return this.situation = null, this;
      }, stop: function(t6, e9) {
        var i9 = this.active;
        return this.active = false, e9 && this.clearQueue(), t6 && this.situation && (!i9 && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
      }, after: function(t6) {
        var e9 = this.last();
        return this.target().on("finished.fx", function i9(a5) {
          a5.detail.situation == e9 && (t6.call(this, e9), this.off("finished.fx", i9));
        }), this._callStart();
      }, during: function(t6) {
        var e9 = this.last(), a5 = function(a6) {
          a6.detail.situation == e9 && t6.call(this, a6.detail.pos, i8.morph(a6.detail.pos), a6.detail.eased, e9);
        };
        return this.target().off("during.fx", a5).on("during.fx", a5), this.after(function() {
          this.off("during.fx", a5);
        }), this._callStart();
      }, afterAll: function(t6) {
        var e9 = function e10(i9) {
          t6.call(this), this.off("allfinished.fx", e10);
        };
        return this.target().off("allfinished.fx", e9).on("allfinished.fx", e9), this._callStart();
      }, last: function() {
        return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
      }, add: function(t6, e9, i9) {
        return this.last()[i9 || "animations"][t6] = e9, this._callStart();
      }, step: function(t6) {
        var e9, i9, a5;
        t6 || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), false !== this.situation.loops ? (e9 = Math.max(this.absPos, 0), i9 = Math.floor(e9), true === this.situation.loops || i9 < this.situation.loops ? (this.pos = e9 - i9, a5 = this.situation.loop, this.situation.loop = i9) : (this.absPos = this.situation.loops, this.pos = 1, a5 = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a5) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
        var s6 = this.situation.ease(this.pos);
        for (var r8 in this.situation.once) r8 > this.lastPos && r8 <= s6 && (this.situation.once[r8].call(this.target(), this.pos, s6), delete this.situation.once[r8]);
        return this.active && this.target().fire("during", { pos: this.pos, eased: s6, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = false)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s6, this) : this;
      }, eachAt: function() {
        var t6, e9 = this, a5 = this.target(), s6 = this.situation;
        for (var r8 in s6.animations) t6 = [].concat(s6.animations[r8]).map(function(t7) {
          return "string" != typeof t7 && t7.at ? t7.at(s6.ease(e9.pos), e9.pos) : t7;
        }), a5[r8].apply(a5, t6);
        for (var r8 in s6.attrs) t6 = [r8].concat(s6.attrs[r8]).map(function(t7) {
          return "string" != typeof t7 && t7.at ? t7.at(s6.ease(e9.pos), e9.pos) : t7;
        }), a5.attr.apply(a5, t6);
        for (var r8 in s6.styles) t6 = [r8].concat(s6.styles[r8]).map(function(t7) {
          return "string" != typeof t7 && t7.at ? t7.at(s6.ease(e9.pos), e9.pos) : t7;
        }), a5.style.apply(a5, t6);
        if (s6.transforms.length) {
          t6 = s6.initialTransformation, r8 = 0;
          for (var o9 = s6.transforms.length; r8 < o9; r8++) {
            var n8 = s6.transforms[r8];
            n8 instanceof i8.Matrix ? t6 = n8.relative ? t6.multiply(new i8.Matrix().morph(n8).at(s6.ease(this.pos))) : t6.morph(n8).at(s6.ease(this.pos)) : (n8.relative || n8.undo(t6.extract()), t6 = t6.multiply(n8.at(s6.ease(this.pos))));
          }
          a5.matrix(t6);
        }
        return this;
      }, once: function(t6, e9, i9) {
        var a5 = this.last();
        return i9 || (t6 = a5.ease(t6)), a5.once[t6] = e9, this;
      }, _callStart: function() {
        return setTimeout(function() {
          this.start();
        }.bind(this), 0), this;
      } }, parent: i8.Element, construct: { animate: function(t6, e9, a5) {
        return (this.fx || (this.fx = new i8.FX(this))).animate(t6, e9, a5);
      }, delay: function(t6) {
        return (this.fx || (this.fx = new i8.FX(this))).delay(t6);
      }, stop: function(t6, e9) {
        return this.fx && this.fx.stop(t6, e9), this;
      }, finish: function() {
        return this.fx && this.fx.finish(), this;
      } } }), i8.MorphObj = i8.invent({ create: function(t6, e9) {
        return i8.Color.isColor(e9) ? new i8.Color(t6).morph(e9) : i8.regex.delimiter.test(t6) ? i8.regex.pathLetters.test(t6) ? new i8.PathArray(t6).morph(e9) : new i8.Array(t6).morph(e9) : i8.regex.numberAndUnit.test(e9) ? new i8.Number(t6).morph(e9) : (this.value = t6, void (this.destination = e9));
      }, extend: { at: function(t6, e9) {
        return e9 < 1 ? this.value : this.destination;
      }, valueOf: function() {
        return this.value;
      } } }), i8.extend(i8.FX, { attr: function(t6, e9, i9) {
        if ("object" === b3(t6)) for (var a5 in t6) this.attr(a5, t6[a5]);
        else this.add(t6, e9, "attrs");
        return this;
      }, plot: function(t6, e9, i9, a5) {
        return 4 == arguments.length ? this.plot([t6, e9, i9, a5]) : this.add("plot", new (this.target()).morphArray(t6));
      } }), i8.Box = i8.invent({ create: function(t6, e9, a5, s6) {
        if (!("object" !== b3(t6) || t6 instanceof i8.Element)) return i8.Box.call(this, null != t6.left ? t6.left : t6.x, null != t6.top ? t6.top : t6.y, t6.width, t6.height);
        var r8;
        4 == arguments.length && (this.x = t6, this.y = e9, this.width = a5, this.height = s6), null == (r8 = this).x && (r8.x = 0, r8.y = 0, r8.width = 0, r8.height = 0), r8.w = r8.width, r8.h = r8.height, r8.x2 = r8.x + r8.width, r8.y2 = r8.y + r8.height, r8.cx = r8.x + r8.width / 2, r8.cy = r8.y + r8.height / 2;
      } }), i8.BBox = i8.invent({ create: function(t6) {
        if (i8.Box.apply(this, [].slice.call(arguments)), t6 instanceof i8.Element) {
          var a5;
          try {
            if (!e8.documentElement.contains) {
              for (var s6 = t6.node; s6.parentNode; ) s6 = s6.parentNode;
              if (s6 != e8) throw new Error("Element not in the dom");
            }
            a5 = t6.node.getBBox();
          } catch (e9) {
            if (t6 instanceof i8.Shape) {
              i8.parser.draw || i8.prepare();
              var r8 = t6.clone(i8.parser.draw.instance).show();
              r8 && r8.node && "function" == typeof r8.node.getBBox && (a5 = r8.node.getBBox()), r8 && "function" == typeof r8.remove && r8.remove();
            } else a5 = { x: t6.node.clientLeft, y: t6.node.clientTop, width: t6.node.clientWidth, height: t6.node.clientHeight };
          }
          i8.Box.call(this, a5);
        }
      }, inherit: i8.Box, parent: i8.Element, construct: { bbox: function() {
        return new i8.BBox(this);
      } } }), i8.BBox.prototype.constructor = i8.BBox, i8.Matrix = i8.invent({ create: function(t6) {
        var e9 = f4([1, 0, 0, 1, 0, 0]);
        t6 = null === t6 ? e9 : t6 instanceof i8.Element ? t6.matrixify() : "string" == typeof t6 ? f4(t6.split(i8.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? f4([].slice.call(arguments)) : Array.isArray(t6) ? f4(t6) : t6 && "object" === b3(t6) ? t6 : e9;
        for (var a5 = v3.length - 1; a5 >= 0; --a5) this[v3[a5]] = null != t6[v3[a5]] ? t6[v3[a5]] : e9[v3[a5]];
      }, extend: { extract: function() {
        var t6 = u4(this, 0, 1);
        u4(this, 1, 0);
        var e9 = 180 / Math.PI * Math.atan2(t6.y, t6.x) - 90;
        return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(e9 * Math.PI / 180) + this.f * Math.sin(e9 * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(e9 * Math.PI / 180) + this.e * Math.sin(-e9 * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: e9, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new i8.Matrix(this) };
      }, clone: function() {
        return new i8.Matrix(this);
      }, morph: function(t6) {
        return this.destination = new i8.Matrix(t6), this;
      }, multiply: function(t6) {
        return new i8.Matrix(this.native().multiply(function(t7) {
          return t7 instanceof i8.Matrix || (t7 = new i8.Matrix(t7)), t7;
        }(t6).native()));
      }, inverse: function() {
        return new i8.Matrix(this.native().inverse());
      }, translate: function(t6, e9) {
        return new i8.Matrix(this.native().translate(t6 || 0, e9 || 0));
      }, native: function() {
        for (var t6 = i8.parser.native.createSVGMatrix(), e9 = v3.length - 1; e9 >= 0; e9--) t6[v3[e9]] = this[v3[e9]];
        return t6;
      }, toString: function() {
        return "matrix(" + x3(this.a) + "," + x3(this.b) + "," + x3(this.c) + "," + x3(this.d) + "," + x3(this.e) + "," + x3(this.f) + ")";
      } }, parent: i8.Element, construct: { ctm: function() {
        return new i8.Matrix(this.node.getCTM());
      }, screenCTM: function() {
        if (this instanceof i8.Nested) {
          var t6 = this.rect(1, 1), e9 = t6.node.getScreenCTM();
          return t6.remove(), new i8.Matrix(e9);
        }
        return new i8.Matrix(this.node.getScreenCTM());
      } } }), i8.Point = i8.invent({ create: function(t6, e9) {
        var i9;
        i9 = Array.isArray(t6) ? { x: t6[0], y: t6[1] } : "object" === b3(t6) ? { x: t6.x, y: t6.y } : null != t6 ? { x: t6, y: null != e9 ? e9 : t6 } : { x: 0, y: 0 }, this.x = i9.x, this.y = i9.y;
      }, extend: { clone: function() {
        return new i8.Point(this);
      }, morph: function(t6, e9) {
        return this.destination = new i8.Point(t6, e9), this;
      } } }), i8.extend(i8.Element, { point: function(t6, e9) {
        return new i8.Point(t6, e9).transform(this.screenCTM().inverse());
      } }), i8.extend(i8.Element, { attr: function(t6, e9, a5) {
        if (null == t6) {
          for (t6 = {}, a5 = (e9 = this.node.attributes).length - 1; a5 >= 0; a5--) t6[e9[a5].nodeName] = i8.regex.isNumber.test(e9[a5].nodeValue) ? parseFloat(e9[a5].nodeValue) : e9[a5].nodeValue;
          return t6;
        }
        if ("object" === b3(t6)) for (var s6 in t6) this.attr(s6, t6[s6]);
        else if (null === e9) this.node.removeAttribute(t6);
        else {
          if (null == e9) return null == (e9 = this.node.getAttribute(t6)) ? i8.defaults.attrs[t6] : i8.regex.isNumber.test(e9) ? parseFloat(e9) : e9;
          "stroke-width" == t6 ? this.attr("stroke", parseFloat(e9) > 0 ? this._stroke : null) : "stroke" == t6 && (this._stroke = e9), "fill" != t6 && "stroke" != t6 || (i8.regex.isImage.test(e9) && (e9 = this.doc().defs().image(e9, 0, 0)), e9 instanceof i8.Image && (e9 = this.doc().defs().pattern(0, 0, function() {
            this.add(e9);
          }))), "number" == typeof e9 ? e9 = new i8.Number(e9) : i8.Color.isColor(e9) ? e9 = new i8.Color(e9) : Array.isArray(e9) && (e9 = new i8.Array(e9)), "leading" == t6 ? this.leading && this.leading(e9) : "string" == typeof a5 ? this.node.setAttributeNS(a5, t6, e9.toString()) : this.node.setAttribute(t6, e9.toString()), !this.rebuild || "font-size" != t6 && "x" != t6 || this.rebuild(t6, e9);
        }
        return this;
      } }), i8.extend(i8.Element, { transform: function(t6, e9) {
        var a5;
        return "object" !== b3(t6) ? (a5 = new i8.Matrix(this).extract(), "string" == typeof t6 ? a5[t6] : a5) : (a5 = new i8.Matrix(this), e9 = !!e9 || !!t6.relative, null != t6.a && (a5 = e9 ? a5.multiply(new i8.Matrix(t6)) : new i8.Matrix(t6)), this.attr("transform", a5));
      } }), i8.extend(i8.Element, { untransform: function() {
        return this.attr("transform", null);
      }, matrixify: function() {
        return (this.attr("transform") || "").split(i8.regex.transforms).slice(0, -1).map(function(t6) {
          var e9 = t6.trim().split("(");
          return [e9[0], e9[1].split(i8.regex.delimiter).map(function(t7) {
            return parseFloat(t7);
          })];
        }).reduce(function(t6, e9) {
          return "matrix" == e9[0] ? t6.multiply(f4(e9[1])) : t6[e9[0]].apply(t6, e9[1]);
        }, new i8.Matrix());
      }, toParent: function(t6) {
        if (this == t6) return this;
        var e9 = this.screenCTM(), i9 = t6.screenCTM().inverse();
        return this.addTo(t6).untransform().transform(i9.multiply(e9)), this;
      }, toDoc: function() {
        return this.toParent(this.doc());
      } }), i8.Transformation = i8.invent({ create: function(t6, e9) {
        if (arguments.length > 1 && "boolean" != typeof e9) return this.constructor.call(this, [].slice.call(arguments));
        if (Array.isArray(t6)) for (var i9 = 0, a5 = this.arguments.length; i9 < a5; ++i9) this[this.arguments[i9]] = t6[i9];
        else if (t6 && "object" === b3(t6)) for (i9 = 0, a5 = this.arguments.length; i9 < a5; ++i9) this[this.arguments[i9]] = t6[this.arguments[i9]];
        this.inversed = false, true === e9 && (this.inversed = true);
      } }), i8.Translate = i8.invent({ parent: i8.Matrix, inherit: i8.Transformation, create: function(t6, e9) {
        this.constructor.apply(this, [].slice.call(arguments));
      }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), i8.extend(i8.Element, { style: function(t6, e9) {
        if (0 == arguments.length) return this.node.style.cssText || "";
        if (arguments.length < 2) if ("object" === b3(t6)) for (var a5 in t6) this.style(a5, t6[a5]);
        else {
          if (!i8.regex.isCss.test(t6)) return this.node.style[h4(t6)];
          for (t6 = t6.split(/\s*;\s*/).filter(function(t7) {
            return !!t7;
          }).map(function(t7) {
            return t7.split(/\s*:\s*/);
          }); e9 = t6.pop(); ) this.style(e9[0], e9[1]);
        }
        else this.node.style[h4(t6)] = null === e9 || i8.regex.isBlank.test(e9) ? "" : e9;
        return this;
      } }), i8.Parent = i8.invent({ create: function(t6) {
        this.constructor.call(this, t6);
      }, inherit: i8.Element, extend: { children: function() {
        return i8.utils.map(i8.utils.filterSVGElements(this.node.childNodes), function(t6) {
          return i8.adopt(t6);
        });
      }, add: function(t6, e9) {
        return null == e9 ? this.node.appendChild(t6.node) : t6.node != this.node.childNodes[e9] && this.node.insertBefore(t6.node, this.node.childNodes[e9]), this;
      }, put: function(t6, e9) {
        return this.add(t6, e9), t6;
      }, has: function(t6) {
        return this.index(t6) >= 0;
      }, index: function(t6) {
        return [].slice.call(this.node.childNodes).indexOf(t6.node);
      }, get: function(t6) {
        return i8.adopt(this.node.childNodes[t6]);
      }, first: function() {
        return this.get(0);
      }, last: function() {
        return this.get(this.node.childNodes.length - 1);
      }, each: function(t6, e9) {
        for (var a5 = this.children(), s6 = 0, r8 = a5.length; s6 < r8; s6++) a5[s6] instanceof i8.Element && t6.apply(a5[s6], [s6, a5]), e9 && a5[s6] instanceof i8.Container && a5[s6].each(t6, e9);
        return this;
      }, removeElement: function(t6) {
        return this.node.removeChild(t6.node), this;
      }, clear: function() {
        for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
        return delete this._defs, this;
      }, defs: function() {
        return this.doc().defs();
      } } }), i8.extend(i8.Parent, { ungroup: function(t6, e9) {
        return 0 === e9 || this instanceof i8.Defs || this.node == i8.parser.draw || (t6 = t6 || (this instanceof i8.Doc ? this : this.parent(i8.Parent)), e9 = e9 || 1 / 0, this.each(function() {
          return this instanceof i8.Defs ? this : this instanceof i8.Parent ? this.ungroup(t6, e9 - 1) : this.toParent(t6);
        }), this.node.firstChild || this.remove()), this;
      }, flatten: function(t6, e9) {
        return this.ungroup(t6, e9);
      } }), i8.Container = i8.invent({ create: function(t6) {
        this.constructor.call(this, t6);
      }, inherit: i8.Parent }), i8.ViewBox = i8.invent({ parent: i8.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(t6) {
        i8.Element.prototype[t6] = function(e9) {
          return i8.on(this.node, t6, e9), this;
        };
      }), i8.listeners = [], i8.handlerMap = [], i8.listenerId = 0, i8.on = function(t6, e9, a5, s6, r8) {
        var o9 = a5.bind(s6 || t6.instance || t6), n8 = (i8.handlerMap.indexOf(t6) + 1 || i8.handlerMap.push(t6)) - 1, l5 = e9.split(".")[0], h5 = e9.split(".")[1] || "*";
        i8.listeners[n8] = i8.listeners[n8] || {}, i8.listeners[n8][l5] = i8.listeners[n8][l5] || {}, i8.listeners[n8][l5][h5] = i8.listeners[n8][l5][h5] || {}, a5._svgjsListenerId || (a5._svgjsListenerId = ++i8.listenerId), i8.listeners[n8][l5][h5][a5._svgjsListenerId] = o9, t6.addEventListener(l5, o9, r8 || { passive: false });
      }, i8.off = function(t6, e9, a5) {
        var s6 = i8.handlerMap.indexOf(t6), r8 = e9 && e9.split(".")[0], o9 = e9 && e9.split(".")[1], n8 = "";
        if (-1 != s6) if (a5) {
          if ("function" == typeof a5 && (a5 = a5._svgjsListenerId), !a5) return;
          i8.listeners[s6][r8] && i8.listeners[s6][r8][o9 || "*"] && (t6.removeEventListener(r8, i8.listeners[s6][r8][o9 || "*"][a5], false), delete i8.listeners[s6][r8][o9 || "*"][a5]);
        } else if (o9 && r8) {
          if (i8.listeners[s6][r8] && i8.listeners[s6][r8][o9]) {
            for (var l5 in i8.listeners[s6][r8][o9]) i8.off(t6, [r8, o9].join("."), l5);
            delete i8.listeners[s6][r8][o9];
          }
        } else if (o9) for (var h5 in i8.listeners[s6]) for (var n8 in i8.listeners[s6][h5]) o9 === n8 && i8.off(t6, [h5, o9].join("."));
        else if (r8) {
          if (i8.listeners[s6][r8]) {
            for (var n8 in i8.listeners[s6][r8]) i8.off(t6, [r8, n8].join("."));
            delete i8.listeners[s6][r8];
          }
        } else {
          for (var h5 in i8.listeners[s6]) i8.off(t6, h5);
          delete i8.listeners[s6], delete i8.handlerMap[s6];
        }
      }, i8.extend(i8.Element, { on: function(t6, e9, a5, s6) {
        return i8.on(this.node, t6, e9, a5, s6), this;
      }, off: function(t6, e9) {
        return i8.off(this.node, t6, e9), this;
      }, fire: function(e9, a5) {
        return e9 instanceof t5.Event ? this.node.dispatchEvent(e9) : this.node.dispatchEvent(e9 = new i8.CustomEvent(e9, { detail: a5, cancelable: true })), this._event = e9, this;
      }, event: function() {
        return this._event;
      } }), i8.Defs = i8.invent({ create: "defs", inherit: i8.Container }), i8.G = i8.invent({ create: "g", inherit: i8.Container, extend: { x: function(t6) {
        return null == t6 ? this.transform("x") : this.transform({ x: t6 - this.x() }, true);
      } }, construct: { group: function() {
        return this.put(new i8.G());
      } } }), i8.Doc = i8.invent({ create: function(t6) {
        t6 && ("svg" == (t6 = "string" == typeof t6 ? e8.getElementById(t6) : t6).nodeName ? this.constructor.call(this, t6) : (this.constructor.call(this, i8.create("svg")), t6.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
      }, inherit: i8.Container, extend: { namespace: function() {
        return this.attr({ xmlns: i8.ns, version: "1.1" }).attr("xmlns:xlink", i8.xlink, i8.xmlns).attr("xmlns:svgjs", i8.svgjs, i8.xmlns);
      }, defs: function() {
        var t6;
        return this._defs || ((t6 = this.node.getElementsByTagName("defs")[0]) ? this._defs = i8.adopt(t6) : this._defs = new i8.Defs(), this.node.appendChild(this._defs.node)), this._defs;
      }, parent: function() {
        return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null;
      }, remove: function() {
        return this.parent() && this.parent().removeChild(this.node), this;
      }, clear: function() {
        for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
        return delete this._defs, i8.parser.draw && !i8.parser.draw.parentNode && this.node.appendChild(i8.parser.draw), this;
      }, clone: function(t6) {
        this.writeDataToDom();
        var e9 = this.node, i9 = p4(e9.cloneNode(true));
        return t6 ? (t6.node || t6).appendChild(i9.node) : e9.parentNode.insertBefore(i9.node, e9.nextSibling), i9;
      } } }), i8.extend(i8.Element, {}), i8.Gradient = i8.invent({ create: function(t6) {
        this.constructor.call(this, i8.create(t6 + "Gradient")), this.type = t6;
      }, inherit: i8.Container, extend: { at: function(t6, e9, a5) {
        return this.put(new i8.Stop()).update(t6, e9, a5);
      }, update: function(t6) {
        return this.clear(), "function" == typeof t6 && t6.call(this, this), this;
      }, fill: function() {
        return "url(#" + this.id() + ")";
      }, toString: function() {
        return this.fill();
      }, attr: function(t6, e9, a5) {
        return "transform" == t6 && (t6 = "gradientTransform"), i8.Container.prototype.attr.call(this, t6, e9, a5);
      } }, construct: { gradient: function(t6, e9) {
        return this.defs().gradient(t6, e9);
      } } }), i8.extend(i8.Gradient, i8.FX, { from: function(t6, e9) {
        return "radial" == (this._target || this).type ? this.attr({ fx: new i8.Number(t6), fy: new i8.Number(e9) }) : this.attr({ x1: new i8.Number(t6), y1: new i8.Number(e9) });
      }, to: function(t6, e9) {
        return "radial" == (this._target || this).type ? this.attr({ cx: new i8.Number(t6), cy: new i8.Number(e9) }) : this.attr({ x2: new i8.Number(t6), y2: new i8.Number(e9) });
      } }), i8.extend(i8.Defs, { gradient: function(t6, e9) {
        return this.put(new i8.Gradient(t6)).update(e9);
      } }), i8.Stop = i8.invent({ create: "stop", inherit: i8.Element, extend: { update: function(t6) {
        return ("number" == typeof t6 || t6 instanceof i8.Number) && (t6 = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), null != t6.opacity && this.attr("stop-opacity", t6.opacity), null != t6.color && this.attr("stop-color", t6.color), null != t6.offset && this.attr("offset", new i8.Number(t6.offset)), this;
      } } }), i8.Pattern = i8.invent({ create: "pattern", inherit: i8.Container, extend: { fill: function() {
        return "url(#" + this.id() + ")";
      }, update: function(t6) {
        return this.clear(), "function" == typeof t6 && t6.call(this, this), this;
      }, toString: function() {
        return this.fill();
      }, attr: function(t6, e9, a5) {
        return "transform" == t6 && (t6 = "patternTransform"), i8.Container.prototype.attr.call(this, t6, e9, a5);
      } }, construct: { pattern: function(t6, e9, i9) {
        return this.defs().pattern(t6, e9, i9);
      } } }), i8.extend(i8.Defs, { pattern: function(t6, e9, a5) {
        return this.put(new i8.Pattern()).update(a5).attr({ x: 0, y: 0, width: t6, height: e9, patternUnits: "userSpaceOnUse" });
      } }), i8.Shape = i8.invent({ create: function(t6) {
        this.constructor.call(this, t6);
      }, inherit: i8.Element }), i8.Symbol = i8.invent({ create: "symbol", inherit: i8.Container, construct: { symbol: function() {
        return this.put(new i8.Symbol());
      } } }), i8.Use = i8.invent({ create: "use", inherit: i8.Shape, extend: { element: function(t6, e9) {
        return this.attr("href", (e9 || "") + "#" + t6, i8.xlink);
      } }, construct: { use: function(t6, e9) {
        return this.put(new i8.Use()).element(t6, e9);
      } } }), i8.Rect = i8.invent({ create: "rect", inherit: i8.Shape, construct: { rect: function(t6, e9) {
        return this.put(new i8.Rect()).size(t6, e9);
      } } }), i8.Circle = i8.invent({ create: "circle", inherit: i8.Shape, construct: { circle: function(t6) {
        return this.put(new i8.Circle()).rx(new i8.Number(t6).divide(2)).move(0, 0);
      } } }), i8.extend(i8.Circle, i8.FX, { rx: function(t6) {
        return this.attr("r", t6);
      }, ry: function(t6) {
        return this.rx(t6);
      } }), i8.Ellipse = i8.invent({ create: "ellipse", inherit: i8.Shape, construct: { ellipse: function(t6, e9) {
        return this.put(new i8.Ellipse()).size(t6, e9).move(0, 0);
      } } }), i8.extend(i8.Ellipse, i8.Rect, i8.FX, { rx: function(t6) {
        return this.attr("rx", t6);
      }, ry: function(t6) {
        return this.attr("ry", t6);
      } }), i8.extend(i8.Circle, i8.Ellipse, { x: function(t6) {
        return null == t6 ? this.cx() - this.rx() : this.cx(t6 + this.rx());
      }, y: function(t6) {
        return null == t6 ? this.cy() - this.ry() : this.cy(t6 + this.ry());
      }, cx: function(t6) {
        return null == t6 ? this.attr("cx") : this.attr("cx", t6);
      }, cy: function(t6) {
        return null == t6 ? this.attr("cy") : this.attr("cy", t6);
      }, width: function(t6) {
        return null == t6 ? 2 * this.rx() : this.rx(new i8.Number(t6).divide(2));
      }, height: function(t6) {
        return null == t6 ? 2 * this.ry() : this.ry(new i8.Number(t6).divide(2));
      }, size: function(t6, e9) {
        var a5 = g3(this, t6, e9);
        return this.rx(new i8.Number(a5.width).divide(2)).ry(new i8.Number(a5.height).divide(2));
      } }), i8.Line = i8.invent({ create: "line", inherit: i8.Shape, extend: { array: function() {
        return new i8.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
      }, plot: function(t6, e9, a5, s6) {
        return null == t6 ? this.array() : (t6 = void 0 !== e9 ? { x1: t6, y1: e9, x2: a5, y2: s6 } : new i8.PointArray(t6).toLine(), this.attr(t6));
      }, move: function(t6, e9) {
        return this.attr(this.array().move(t6, e9).toLine());
      }, size: function(t6, e9) {
        var i9 = g3(this, t6, e9);
        return this.attr(this.array().size(i9.width, i9.height).toLine());
      } }, construct: { line: function(t6, e9, a5, s6) {
        return i8.Line.prototype.plot.apply(this.put(new i8.Line()), null != t6 ? [t6, e9, a5, s6] : [0, 0, 0, 0]);
      } } }), i8.Polyline = i8.invent({ create: "polyline", inherit: i8.Shape, construct: { polyline: function(t6) {
        return this.put(new i8.Polyline()).plot(t6 || new i8.PointArray());
      } } }), i8.Polygon = i8.invent({ create: "polygon", inherit: i8.Shape, construct: { polygon: function(t6) {
        return this.put(new i8.Polygon()).plot(t6 || new i8.PointArray());
      } } }), i8.extend(i8.Polyline, i8.Polygon, { array: function() {
        return this._array || (this._array = new i8.PointArray(this.attr("points")));
      }, plot: function(t6) {
        return null == t6 ? this.array() : this.clear().attr("points", "string" == typeof t6 ? t6 : this._array = new i8.PointArray(t6));
      }, clear: function() {
        return delete this._array, this;
      }, move: function(t6, e9) {
        return this.attr("points", this.array().move(t6, e9));
      }, size: function(t6, e9) {
        var i9 = g3(this, t6, e9);
        return this.attr("points", this.array().size(i9.width, i9.height));
      } }), i8.extend(i8.Line, i8.Polyline, i8.Polygon, { morphArray: i8.PointArray, x: function(t6) {
        return null == t6 ? this.bbox().x : this.move(t6, this.bbox().y);
      }, y: function(t6) {
        return null == t6 ? this.bbox().y : this.move(this.bbox().x, t6);
      }, width: function(t6) {
        var e9 = this.bbox();
        return null == t6 ? e9.width : this.size(t6, e9.height);
      }, height: function(t6) {
        var e9 = this.bbox();
        return null == t6 ? e9.height : this.size(e9.width, t6);
      } }), i8.Path = i8.invent({ create: "path", inherit: i8.Shape, extend: { morphArray: i8.PathArray, array: function() {
        return this._array || (this._array = new i8.PathArray(this.attr("d")));
      }, plot: function(t6) {
        return null == t6 ? this.array() : this.clear().attr("d", "string" == typeof t6 ? t6 : this._array = new i8.PathArray(t6));
      }, clear: function() {
        return delete this._array, this;
      } }, construct: { path: function(t6) {
        return this.put(new i8.Path()).plot(t6 || new i8.PathArray());
      } } }), i8.Image = i8.invent({ create: "image", inherit: i8.Shape, extend: { load: function(e9) {
        if (!e9) return this;
        var a5 = this, s6 = new t5.Image();
        return i8.on(s6, "load", function() {
          i8.off(s6);
          var t6 = a5.parent(i8.Pattern);
          null !== t6 && (0 == a5.width() && 0 == a5.height() && a5.size(s6.width, s6.height), t6 && 0 == t6.width() && 0 == t6.height() && t6.size(a5.width(), a5.height()), "function" == typeof a5._loaded && a5._loaded.call(a5, { width: s6.width, height: s6.height, ratio: s6.width / s6.height, url: e9 }));
        }), i8.on(s6, "error", function(t6) {
          i8.off(s6), "function" == typeof a5._error && a5._error.call(a5, t6);
        }), this.attr("href", s6.src = this.src = e9, i8.xlink);
      }, loaded: function(t6) {
        return this._loaded = t6, this;
      }, error: function(t6) {
        return this._error = t6, this;
      } }, construct: { image: function(t6, e9, a5) {
        return this.put(new i8.Image()).load(t6).size(e9 || 0, a5 || e9 || 0);
      } } }), i8.Text = i8.invent({ create: function() {
        this.constructor.call(this, i8.create("text")), this.dom.leading = new i8.Number(1.3), this._rebuild = true, this._build = false, this.attr("font-family", i8.defaults.attrs["font-family"]);
      }, inherit: i8.Shape, extend: { x: function(t6) {
        return null == t6 ? this.attr("x") : this.attr("x", t6);
      }, text: function(t6) {
        if (void 0 === t6) {
          t6 = "";
          for (var e9 = this.node.childNodes, a5 = 0, s6 = e9.length; a5 < s6; ++a5) 0 != a5 && 3 != e9[a5].nodeType && 1 == i8.adopt(e9[a5]).dom.newLined && (t6 += "\n"), t6 += e9[a5].textContent;
          return t6;
        }
        if (this.clear().build(true), "function" == typeof t6) t6.call(this, this);
        else {
          a5 = 0;
          for (var r8 = (t6 = t6.split("\n")).length; a5 < r8; a5++) this.tspan(t6[a5]).newLine();
        }
        return this.build(false).rebuild();
      }, size: function(t6) {
        return this.attr("font-size", t6).rebuild();
      }, leading: function(t6) {
        return null == t6 ? this.dom.leading : (this.dom.leading = new i8.Number(t6), this.rebuild());
      }, lines: function() {
        var t6 = (this.textPath && this.textPath() || this).node, e9 = i8.utils.map(i8.utils.filterSVGElements(t6.childNodes), function(t7) {
          return i8.adopt(t7);
        });
        return new i8.Set(e9);
      }, rebuild: function(t6) {
        if ("boolean" == typeof t6 && (this._rebuild = t6), this._rebuild) {
          var e9 = this, a5 = 0, s6 = this.dom.leading * new i8.Number(this.attr("font-size"));
          this.lines().each(function() {
            this.dom.newLined && (e9.textPath() || this.attr("x", e9.attr("x")), "\n" == this.text() ? a5 += s6 : (this.attr("dy", s6 + a5), a5 = 0));
          }), this.fire("rebuild");
        }
        return this;
      }, build: function(t6) {
        return this._build = !!t6, this;
      }, setData: function(t6) {
        return this.dom = t6, this.dom.leading = new i8.Number(t6.leading || 1.3), this;
      } }, construct: { text: function(t6) {
        return this.put(new i8.Text()).text(t6);
      }, plain: function(t6) {
        return this.put(new i8.Text()).plain(t6);
      } } }), i8.Tspan = i8.invent({ create: "tspan", inherit: i8.Shape, extend: { text: function(t6) {
        return null == t6 ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t6 ? t6.call(this, this) : this.plain(t6), this);
      }, dx: function(t6) {
        return this.attr("dx", t6);
      }, dy: function(t6) {
        return this.attr("dy", t6);
      }, newLine: function() {
        var t6 = this.parent(i8.Text);
        return this.dom.newLined = true, this.dy(t6.dom.leading * t6.attr("font-size")).attr("x", t6.x());
      } } }), i8.extend(i8.Text, i8.Tspan, { plain: function(t6) {
        return false === this._build && this.clear(), this.node.appendChild(e8.createTextNode(t6)), this;
      }, tspan: function(t6) {
        var e9 = (this.textPath && this.textPath() || this).node, a5 = new i8.Tspan();
        return false === this._build && this.clear(), e9.appendChild(a5.node), a5.text(t6);
      }, clear: function() {
        for (var t6 = (this.textPath && this.textPath() || this).node; t6.hasChildNodes(); ) t6.removeChild(t6.lastChild);
        return this;
      }, length: function() {
        return this.node.getComputedTextLength();
      } }), i8.TextPath = i8.invent({ create: "textPath", inherit: i8.Parent, parent: i8.Text, construct: { morphArray: i8.PathArray, array: function() {
        var t6 = this.track();
        return t6 ? t6.array() : null;
      }, plot: function(t6) {
        var e9 = this.track(), i9 = null;
        return e9 && (i9 = e9.plot(t6)), null == t6 ? i9 : this;
      }, track: function() {
        var t6 = this.textPath();
        if (t6) return t6.reference("href");
      }, textPath: function() {
        if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return i8.adopt(this.node.firstChild);
      } } }), i8.Nested = i8.invent({ create: function() {
        this.constructor.call(this, i8.create("svg")), this.style("overflow", "visible");
      }, inherit: i8.Container, construct: { nested: function() {
        return this.put(new i8.Nested());
      } } });
      var n7 = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(t6, e9) {
        return "color" == e9 ? t6 : t6 + "-" + e9;
      } };
      function l4(t6, e9, a5, s6) {
        return a5 + s6.replace(i8.regex.dots, " .");
      }
      function h4(t6) {
        return t6.toLowerCase().replace(/-(.)/g, function(t7, e9) {
          return e9.toUpperCase();
        });
      }
      function c5(t6) {
        return t6.charAt(0).toUpperCase() + t6.slice(1);
      }
      function d4(t6) {
        var e9 = t6.toString(16);
        return 1 == e9.length ? "0" + e9 : e9;
      }
      function g3(t6, e9, i9) {
        if (null == e9 || null == i9) {
          var a5 = t6.bbox();
          null == e9 ? e9 = a5.width / a5.height * i9 : null == i9 && (i9 = a5.height / a5.width * e9);
        }
        return { width: e9, height: i9 };
      }
      function u4(t6, e9, i9) {
        return { x: e9 * t6.a + i9 * t6.c + 0, y: e9 * t6.b + i9 * t6.d + 0 };
      }
      function f4(t6) {
        return { a: t6[0], b: t6[1], c: t6[2], d: t6[3], e: t6[4], f: t6[5] };
      }
      function p4(e9) {
        for (var a5 = e9.childNodes.length - 1; a5 >= 0; a5--) e9.childNodes[a5] instanceof t5.SVGElement && p4(e9.childNodes[a5]);
        return i8.adopt(e9).id(i8.eid(e9.nodeName));
      }
      function x3(t6) {
        return Math.abs(t6) > 1e-37 ? t6 : 0;
      }
      ["fill", "stroke"].forEach(function(t6) {
        var e9 = {};
        e9[t6] = function(e10) {
          if (void 0 === e10) return this;
          if ("string" == typeof e10 || i8.Color.isRgb(e10) || e10 && "function" == typeof e10.fill) this.attr(t6, e10);
          else for (var a5 = n7[t6].length - 1; a5 >= 0; a5--) null != e10[n7[t6][a5]] && this.attr(n7.prefix(t6, n7[t6][a5]), e10[n7[t6][a5]]);
          return this;
        }, i8.extend(i8.Element, i8.FX, e9);
      }), i8.extend(i8.Element, i8.FX, { translate: function(t6, e9) {
        return this.transform({ x: t6, y: e9 });
      }, matrix: function(t6) {
        return this.attr("transform", new i8.Matrix(6 == arguments.length ? [].slice.call(arguments) : t6));
      }, opacity: function(t6) {
        return this.attr("opacity", t6);
      }, dx: function(t6) {
        return this.x(new i8.Number(t6).plus(this instanceof i8.FX ? 0 : this.x()), true);
      }, dy: function(t6) {
        return this.y(new i8.Number(t6).plus(this instanceof i8.FX ? 0 : this.y()), true);
      } }), i8.extend(i8.Path, { length: function() {
        return this.node.getTotalLength();
      }, pointAt: function(t6) {
        return this.node.getPointAtLength(t6);
      } }), i8.Set = i8.invent({ create: function(t6) {
        Array.isArray(t6) ? this.members = t6 : this.clear();
      }, extend: { add: function() {
        for (var t6 = [].slice.call(arguments), e9 = 0, i9 = t6.length; e9 < i9; e9++) this.members.push(t6[e9]);
        return this;
      }, remove: function(t6) {
        var e9 = this.index(t6);
        return e9 > -1 && this.members.splice(e9, 1), this;
      }, each: function(t6) {
        for (var e9 = 0, i9 = this.members.length; e9 < i9; e9++) t6.apply(this.members[e9], [e9, this.members]);
        return this;
      }, clear: function() {
        return this.members = [], this;
      }, length: function() {
        return this.members.length;
      }, has: function(t6) {
        return this.index(t6) >= 0;
      }, index: function(t6) {
        return this.members.indexOf(t6);
      }, get: function(t6) {
        return this.members[t6];
      }, first: function() {
        return this.get(0);
      }, last: function() {
        return this.get(this.members.length - 1);
      }, valueOf: function() {
        return this.members;
      } }, construct: { set: function(t6) {
        return new i8.Set(t6);
      } } }), i8.FX.Set = i8.invent({ create: function(t6) {
        this.set = t6;
      } }), i8.Set.inherit = function() {
        var t6 = [];
        for (var e9 in i8.Shape.prototype) "function" == typeof i8.Shape.prototype[e9] && "function" != typeof i8.Set.prototype[e9] && t6.push(e9);
        for (var e9 in t6.forEach(function(t7) {
          i8.Set.prototype[t7] = function() {
            for (var e10 = 0, a5 = this.members.length; e10 < a5; e10++) this.members[e10] && "function" == typeof this.members[e10][t7] && this.members[e10][t7].apply(this.members[e10], arguments);
            return "animate" == t7 ? this.fx || (this.fx = new i8.FX.Set(this)) : this;
          };
        }), t6 = [], i8.FX.prototype) "function" == typeof i8.FX.prototype[e9] && "function" != typeof i8.FX.Set.prototype[e9] && t6.push(e9);
        t6.forEach(function(t7) {
          i8.FX.Set.prototype[t7] = function() {
            for (var e10 = 0, i9 = this.set.members.length; e10 < i9; e10++) this.set.members[e10].fx[t7].apply(this.set.members[e10].fx, arguments);
            return this;
          };
        });
      }, i8.extend(i8.Element, {}), i8.extend(i8.Element, { remember: function(t6, e9) {
        if ("object" === b3(arguments[0])) for (var i9 in t6) this.remember(i9, t6[i9]);
        else {
          if (1 == arguments.length) return this.memory()[t6];
          this.memory()[t6] = e9;
        }
        return this;
      }, forget: function() {
        if (0 == arguments.length) this._memory = {};
        else for (var t6 = arguments.length - 1; t6 >= 0; t6--) delete this.memory()[arguments[t6]];
        return this;
      }, memory: function() {
        return this._memory || (this._memory = {});
      } }), i8.get = function(t6) {
        var a5 = e8.getElementById(function(t7) {
          var e9 = (t7 || "").toString().match(i8.regex.reference);
          if (e9) return e9[1];
        }(t6) || t6);
        return i8.adopt(a5);
      }, i8.select = function(t6, a5) {
        return new i8.Set(i8.utils.map((a5 || e8).querySelectorAll(t6), function(t7) {
          return i8.adopt(t7);
        }));
      }, i8.extend(i8.Parent, { select: function(t6) {
        return i8.select(t6, this.node);
      } });
      var v3 = "abcdef".split("");
      if ("function" != typeof t5.CustomEvent) {
        var m3 = function(t6, i9) {
          i9 = i9 || { bubbles: false, cancelable: false, detail: void 0 };
          var a5 = e8.createEvent("CustomEvent");
          return a5.initCustomEvent(t6, i9.bubbles, i9.cancelable, i9.detail), a5;
        };
        m3.prototype = t5.Event.prototype, i8.CustomEvent = m3;
      } else i8.CustomEvent = t5.CustomEvent;
      return i8;
    }, "function" == typeof define && define.amd ? define(function() {
      return Wt(Nt, Nt.document);
    }) : "object" === ("undefined" == typeof exports ? "undefined" : b3(exports)) && "undefined" != typeof module ? module.exports = Nt.document ? Wt(Nt, Nt.document) : function(t5) {
      return Wt(t5, t5.document);
    } : Nt.SVG = Wt(Nt, Nt.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
    * https://github.com/wout/svg.filter.js
    * Copyright (c) 2016 Wout Fierens; Licensed MIT */
    function() {
      SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: true, put: function(t6, e9) {
        return this.add(t6, e9), !t6.attr("in") && this.autoSetIn && t6.attr("in", this.source), t6.attr("result") || t6.attr("result", t6), t6;
      }, blend: function(t6, e9, i9) {
        return this.put(new SVG.BlendEffect(t6, e9, i9));
      }, colorMatrix: function(t6, e9) {
        return this.put(new SVG.ColorMatrixEffect(t6, e9));
      }, convolveMatrix: function(t6) {
        return this.put(new SVG.ConvolveMatrixEffect(t6));
      }, componentTransfer: function(t6) {
        return this.put(new SVG.ComponentTransferEffect(t6));
      }, composite: function(t6, e9, i9) {
        return this.put(new SVG.CompositeEffect(t6, e9, i9));
      }, flood: function(t6, e9) {
        return this.put(new SVG.FloodEffect(t6, e9));
      }, offset: function(t6, e9) {
        return this.put(new SVG.OffsetEffect(t6, e9));
      }, image: function(t6) {
        return this.put(new SVG.ImageEffect(t6));
      }, merge: function() {
        var t6 = [void 0];
        for (var e9 in arguments) t6.push(arguments[e9]);
        return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t6))());
      }, gaussianBlur: function(t6, e9) {
        return this.put(new SVG.GaussianBlurEffect(t6, e9));
      }, morphology: function(t6, e9) {
        return this.put(new SVG.MorphologyEffect(t6, e9));
      }, diffuseLighting: function(t6, e9, i9) {
        return this.put(new SVG.DiffuseLightingEffect(t6, e9, i9));
      }, displacementMap: function(t6, e9, i9, a5, s6) {
        return this.put(new SVG.DisplacementMapEffect(t6, e9, i9, a5, s6));
      }, specularLighting: function(t6, e9, i9, a5) {
        return this.put(new SVG.SpecularLightingEffect(t6, e9, i9, a5));
      }, tile: function() {
        return this.put(new SVG.TileEffect());
      }, turbulence: function(t6, e9, i9, a5, s6) {
        return this.put(new SVG.TurbulenceEffect(t6, e9, i9, a5, s6));
      }, toString: function() {
        return "url(#" + this.attr("id") + ")";
      } } }), SVG.extend(SVG.Defs, { filter: function(t6) {
        var e9 = this.put(new SVG.Filter());
        return "function" == typeof t6 && t6.call(e9, e9), e9;
      } }), SVG.extend(SVG.Container, { filter: function(t6) {
        return this.defs().filter(t6);
      } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(t6) {
        return this.filterer = t6 instanceof SVG.Element ? t6 : this.doc().filter(t6), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
      }, unfilter: function(t6) {
        return this.filterer && true === t6 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
      } }), SVG.Effect = SVG.invent({ create: function() {
        this.constructor.call(this);
      }, inherit: SVG.Element, extend: { in: function(t6) {
        return null == t6 ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t6);
      }, result: function(t6) {
        return null == t6 ? this.attr("result") : this.attr("result", t6);
      }, toString: function() {
        return this.result();
      } } }), SVG.ParentEffect = SVG.invent({ create: function() {
        this.constructor.call(this);
      }, inherit: SVG.Parent, extend: { in: function(t6) {
        return null == t6 ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t6);
      }, result: function(t6) {
        return null == t6 ? this.attr("result") : this.attr("result", t6);
      }, toString: function() {
        return this.result();
      } } });
      var t5 = { blend: function(t6, e9) {
        return this.parent() && this.parent().blend(this, t6, e9);
      }, colorMatrix: function(t6, e9) {
        return this.parent() && this.parent().colorMatrix(t6, e9).in(this);
      }, convolveMatrix: function(t6) {
        return this.parent() && this.parent().convolveMatrix(t6).in(this);
      }, componentTransfer: function(t6) {
        return this.parent() && this.parent().componentTransfer(t6).in(this);
      }, composite: function(t6, e9) {
        return this.parent() && this.parent().composite(this, t6, e9);
      }, flood: function(t6, e9) {
        return this.parent() && this.parent().flood(t6, e9);
      }, offset: function(t6, e9) {
        return this.parent() && this.parent().offset(t6, e9).in(this);
      }, image: function(t6) {
        return this.parent() && this.parent().image(t6);
      }, merge: function() {
        return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
      }, gaussianBlur: function(t6, e9) {
        return this.parent() && this.parent().gaussianBlur(t6, e9).in(this);
      }, morphology: function(t6, e9) {
        return this.parent() && this.parent().morphology(t6, e9).in(this);
      }, diffuseLighting: function(t6, e9, i9) {
        return this.parent() && this.parent().diffuseLighting(t6, e9, i9).in(this);
      }, displacementMap: function(t6, e9, i9, a5) {
        return this.parent() && this.parent().displacementMap(this, t6, e9, i9, a5);
      }, specularLighting: function(t6, e9, i9, a5) {
        return this.parent() && this.parent().specularLighting(t6, e9, i9, a5).in(this);
      }, tile: function() {
        return this.parent() && this.parent().tile().in(this);
      }, turbulence: function(t6, e9, i9, a5, s6) {
        return this.parent() && this.parent().turbulence(t6, e9, i9, a5, s6).in(this);
      } };
      SVG.extend(SVG.Effect, t5), SVG.extend(SVG.ParentEffect, t5), SVG.ChildEffect = SVG.invent({ create: function() {
        this.constructor.call(this);
      }, inherit: SVG.Element, extend: { in: function(t6) {
        this.attr("in", t6);
      } } });
      var e8 = { blend: function(t6, e9, i9) {
        this.attr({ in: t6, in2: e9, mode: i9 || "normal" });
      }, colorMatrix: function(t6, e9) {
        "matrix" == t6 && (e9 = s5(e9)), this.attr({ type: t6, values: void 0 === e9 ? null : e9 });
      }, convolveMatrix: function(t6) {
        t6 = s5(t6), this.attr({ order: Math.sqrt(t6.split(" ").length), kernelMatrix: t6 });
      }, composite: function(t6, e9, i9) {
        this.attr({ in: t6, in2: e9, operator: i9 });
      }, flood: function(t6, e9) {
        this.attr("flood-color", t6), null != e9 && this.attr("flood-opacity", e9);
      }, offset: function(t6, e9) {
        this.attr({ dx: t6, dy: e9 });
      }, image: function(t6) {
        this.attr("href", t6, SVG.xlink);
      }, displacementMap: function(t6, e9, i9, a5, s6) {
        this.attr({ in: t6, in2: e9, scale: i9, xChannelSelector: a5, yChannelSelector: s6 });
      }, gaussianBlur: function(t6, e9) {
        null != t6 || null != e9 ? this.attr("stdDeviation", function(t7) {
          if (!Array.isArray(t7)) return t7;
          for (var e10 = 0, i9 = t7.length, a5 = []; e10 < i9; e10++) a5.push(t7[e10]);
          return a5.join(" ");
        }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
      }, morphology: function(t6, e9) {
        this.attr({ operator: t6, radius: e9 });
      }, tile: function() {
      }, turbulence: function(t6, e9, i9, a5, s6) {
        this.attr({ numOctaves: e9, seed: i9, stitchTiles: a5, baseFrequency: t6, type: s6 });
      } }, i8 = { merge: function() {
        var t6;
        if (arguments[0] instanceof SVG.Set) {
          var e9 = this;
          arguments[0].each(function(t7) {
            this instanceof SVG.MergeNode ? e9.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e9.put(new SVG.MergeNode(this));
          });
        } else {
          t6 = Array.isArray(arguments[0]) ? arguments[0] : arguments;
          for (var i9 = 0; i9 < t6.length; i9++) t6[i9] instanceof SVG.MergeNode ? this.put(t6[i9]) : this.put(new SVG.MergeNode(t6[i9]));
        }
      }, componentTransfer: function(t6) {
        if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach(function(t7) {
          this[t7] = new SVG["Func" + t7.toUpperCase()]("identity"), this.rgb.add(this[t7]), this.node.appendChild(this[t7].node);
        }.bind(this)), t6) for (var e9 in t6.rgb && (["r", "g", "b"].forEach(function(e10) {
          this[e10].attr(t6.rgb);
        }.bind(this)), delete t6.rgb), t6) this[e9].attr(t6[e9]);
      }, diffuseLighting: function(t6, e9, i9) {
        this.attr({ surfaceScale: t6, diffuseConstant: e9, kernelUnitLength: i9 });
      }, specularLighting: function(t6, e9, i9, a5) {
        this.attr({ surfaceScale: t6, diffuseConstant: e9, specularExponent: i9, kernelUnitLength: a5 });
      } }, a4 = { distantLight: function(t6, e9) {
        this.attr({ azimuth: t6, elevation: e9 });
      }, pointLight: function(t6, e9, i9) {
        this.attr({ x: t6, y: e9, z: i9 });
      }, spotLight: function(t6, e9, i9, a5, s6, r8) {
        this.attr({ x: t6, y: e9, z: i9, pointsAtX: a5, pointsAtY: s6, pointsAtZ: r8 });
      }, mergeNode: function(t6) {
        this.attr("in", t6);
      } };
      function s5(t6) {
        return Array.isArray(t6) && (t6 = new SVG.Array(t6)), t6.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
      }
      function r7() {
        var t6 = function() {
        };
        for (var e9 in "function" == typeof arguments[arguments.length - 1] && (t6 = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i9 in arguments[e9]) t6(arguments[e9][i9], i9, arguments[e9]);
      }
      ["r", "g", "b", "a"].forEach(function(t6) {
        a4["Func" + t6.toUpperCase()] = function(t7) {
          switch (this.attr("type", t7), t7) {
            case "table":
              this.attr("tableValues", arguments[1]);
              break;
            case "linear":
              this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
              break;
            case "gamma":
              this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
          }
        };
      }), r7(e8, function(t6, e9) {
        var i9 = e9.charAt(0).toUpperCase() + e9.slice(1);
        SVG[i9 + "Effect"] = SVG.invent({ create: function() {
          this.constructor.call(this, SVG.create("fe" + i9)), t6.apply(this, arguments), this.result(this.attr("id") + "Out");
        }, inherit: SVG.Effect, extend: {} });
      }), r7(i8, function(t6, e9) {
        var i9 = e9.charAt(0).toUpperCase() + e9.slice(1);
        SVG[i9 + "Effect"] = SVG.invent({ create: function() {
          this.constructor.call(this, SVG.create("fe" + i9)), t6.apply(this, arguments), this.result(this.attr("id") + "Out");
        }, inherit: SVG.ParentEffect, extend: {} });
      }), r7(a4, function(t6, e9) {
        var i9 = e9.charAt(0).toUpperCase() + e9.slice(1);
        SVG[i9] = SVG.invent({ create: function() {
          this.constructor.call(this, SVG.create("fe" + i9)), t6.apply(this, arguments);
        }, inherit: SVG.ChildEffect, extend: {} });
      }), SVG.extend(SVG.MergeEffect, { in: function(t6) {
        return t6 instanceof SVG.MergeNode ? this.add(t6, 0) : this.add(new SVG.MergeNode(t6), 0), this;
      } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(t6) {
        return null == t6 ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t6);
      } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
    }.call(void 0), function() {
      function t5(t6, s6, r7, o8, n7, l4, h4) {
        for (var c5 = t6.slice(s6, r7 || h4), d4 = o8.slice(n7, l4 || h4), g3 = 0, u4 = { pos: [0, 0], start: [0, 0] }, f4 = { pos: [0, 0], start: [0, 0] }; ; ) {
          if (c5[g3] = e8.call(u4, c5[g3]), d4[g3] = e8.call(f4, d4[g3]), c5[g3][0] != d4[g3][0] || "M" == c5[g3][0] || "A" == c5[g3][0] && (c5[g3][4] != d4[g3][4] || c5[g3][5] != d4[g3][5]) ? (Array.prototype.splice.apply(c5, [g3, 1].concat(a4.call(u4, c5[g3]))), Array.prototype.splice.apply(d4, [g3, 1].concat(a4.call(f4, d4[g3])))) : (c5[g3] = i8.call(u4, c5[g3]), d4[g3] = i8.call(f4, d4[g3])), ++g3 == c5.length && g3 == d4.length) break;
          g3 == c5.length && c5.push(["C", u4.pos[0], u4.pos[1], u4.pos[0], u4.pos[1], u4.pos[0], u4.pos[1]]), g3 == d4.length && d4.push(["C", f4.pos[0], f4.pos[1], f4.pos[0], f4.pos[1], f4.pos[0], f4.pos[1]]);
        }
        return { start: c5, dest: d4 };
      }
      function e8(t6) {
        switch (t6[0]) {
          case "z":
          case "Z":
            t6[0] = "L", t6[1] = this.start[0], t6[2] = this.start[1];
            break;
          case "H":
            t6[0] = "L", t6[2] = this.pos[1];
            break;
          case "V":
            t6[0] = "L", t6[2] = t6[1], t6[1] = this.pos[0];
            break;
          case "T":
            t6[0] = "Q", t6[3] = t6[1], t6[4] = t6[2], t6[1] = this.reflection[1], t6[2] = this.reflection[0];
            break;
          case "S":
            t6[0] = "C", t6[6] = t6[4], t6[5] = t6[3], t6[4] = t6[2], t6[3] = t6[1], t6[2] = this.reflection[1], t6[1] = this.reflection[0];
        }
        return t6;
      }
      function i8(t6) {
        var e9 = t6.length;
        return this.pos = [t6[e9 - 2], t6[e9 - 1]], -1 != "SCQT".indexOf(t6[0]) && (this.reflection = [2 * this.pos[0] - t6[e9 - 4], 2 * this.pos[1] - t6[e9 - 3]]), t6;
      }
      function a4(t6) {
        var e9 = [t6];
        switch (t6[0]) {
          case "M":
            return this.pos = this.start = [t6[1], t6[2]], e9;
          case "L":
            t6[5] = t6[3] = t6[1], t6[6] = t6[4] = t6[2], t6[1] = this.pos[0], t6[2] = this.pos[1];
            break;
          case "Q":
            t6[6] = t6[4], t6[5] = t6[3], t6[4] = 1 * t6[4] / 3 + 2 * t6[2] / 3, t6[3] = 1 * t6[3] / 3 + 2 * t6[1] / 3, t6[2] = 1 * this.pos[1] / 3 + 2 * t6[2] / 3, t6[1] = 1 * this.pos[0] / 3 + 2 * t6[1] / 3;
            break;
          case "A":
            e9 = function(t7, e10) {
              var i9, a5, s6, r7, o8, n7, l4, h4, c5, d4, g3, u4, f4, p4, x3, b4, v3, m3, y4, w3, k3, A3, S4, C4, L3, P3, M3 = Math.abs(e10[1]), I3 = Math.abs(e10[2]), T3 = e10[3] % 360, z3 = e10[4], X2 = e10[5], E3 = e10[6], Y2 = e10[7], R3 = new SVG.Point(t7), F2 = new SVG.Point(E3, Y2), D3 = [];
              if (0 === M3 || 0 === I3 || R3.x === F2.x && R3.y === F2.y) return [["C", R3.x, R3.y, F2.x, F2.y, F2.x, F2.y]];
              i9 = new SVG.Point((R3.x - F2.x) / 2, (R3.y - F2.y) / 2).transform(new SVG.Matrix().rotate(T3)), (a5 = i9.x * i9.x / (M3 * M3) + i9.y * i9.y / (I3 * I3)) > 1 && (M3 *= a5 = Math.sqrt(a5), I3 *= a5);
              s6 = new SVG.Matrix().rotate(T3).scale(1 / M3, 1 / I3).rotate(-T3), R3 = R3.transform(s6), F2 = F2.transform(s6), r7 = [F2.x - R3.x, F2.y - R3.y], n7 = r7[0] * r7[0] + r7[1] * r7[1], o8 = Math.sqrt(n7), r7[0] /= o8, r7[1] /= o8, l4 = n7 < 4 ? Math.sqrt(1 - n7 / 4) : 0, z3 === X2 && (l4 *= -1);
              h4 = new SVG.Point((F2.x + R3.x) / 2 + l4 * -r7[1], (F2.y + R3.y) / 2 + l4 * r7[0]), c5 = new SVG.Point(R3.x - h4.x, R3.y - h4.y), d4 = new SVG.Point(F2.x - h4.x, F2.y - h4.y), g3 = Math.acos(c5.x / Math.sqrt(c5.x * c5.x + c5.y * c5.y)), c5.y < 0 && (g3 *= -1);
              u4 = Math.acos(d4.x / Math.sqrt(d4.x * d4.x + d4.y * d4.y)), d4.y < 0 && (u4 *= -1);
              X2 && g3 > u4 && (u4 += 2 * Math.PI);
              !X2 && g3 < u4 && (u4 -= 2 * Math.PI);
              for (p4 = Math.ceil(2 * Math.abs(g3 - u4) / Math.PI), b4 = [], v3 = g3, f4 = (u4 - g3) / p4, x3 = 4 * Math.tan(f4 / 4) / 3, k3 = 0; k3 <= p4; k3++) y4 = Math.cos(v3), m3 = Math.sin(v3), w3 = new SVG.Point(h4.x + y4, h4.y + m3), b4[k3] = [new SVG.Point(w3.x + x3 * m3, w3.y - x3 * y4), w3, new SVG.Point(w3.x - x3 * m3, w3.y + x3 * y4)], v3 += f4;
              for (b4[0][0] = b4[0][1].clone(), b4[b4.length - 1][2] = b4[b4.length - 1][1].clone(), s6 = new SVG.Matrix().rotate(T3).scale(M3, I3).rotate(-T3), k3 = 0, A3 = b4.length; k3 < A3; k3++) b4[k3][0] = b4[k3][0].transform(s6), b4[k3][1] = b4[k3][1].transform(s6), b4[k3][2] = b4[k3][2].transform(s6);
              for (k3 = 1, A3 = b4.length; k3 < A3; k3++) S4 = (w3 = b4[k3 - 1][2]).x, C4 = w3.y, L3 = (w3 = b4[k3][0]).x, P3 = w3.y, E3 = (w3 = b4[k3][1]).x, Y2 = w3.y, D3.push(["C", S4, C4, L3, P3, E3, Y2]);
              return D3;
            }(this.pos, t6), t6 = e9[0];
        }
        return t6[0] = "C", this.pos = [t6[5], t6[6]], this.reflection = [2 * t6[5] - t6[3], 2 * t6[6] - t6[4]], e9;
      }
      function s5(t6, e9) {
        if (false === e9) return false;
        for (var i9 = e9, a5 = t6.length; i9 < a5; ++i9) if ("M" == t6[i9][0]) return i9;
        return false;
      }
      SVG.extend(SVG.PathArray, { morph: function(e9) {
        for (var i9 = this.value, a5 = this.parse(e9), r7 = 0, o8 = 0, n7 = false, l4 = false; false !== r7 || false !== o8; ) {
          var h4;
          n7 = s5(i9, false !== r7 && r7 + 1), l4 = s5(a5, false !== o8 && o8 + 1), false === r7 && (r7 = 0 == (h4 = new SVG.PathArray(c5.start).bbox()).height || 0 == h4.width ? i9.push(i9[0]) - 1 : i9.push(["M", h4.x + h4.width / 2, h4.y + h4.height / 2]) - 1), false === o8 && (o8 = 0 == (h4 = new SVG.PathArray(c5.dest).bbox()).height || 0 == h4.width ? a5.push(a5[0]) - 1 : a5.push(["M", h4.x + h4.width / 2, h4.y + h4.height / 2]) - 1);
          var c5 = t5(i9, r7, n7, a5, o8, l4);
          i9 = i9.slice(0, r7).concat(c5.start, false === n7 ? [] : i9.slice(n7)), a5 = a5.slice(0, o8).concat(c5.dest, false === l4 ? [] : a5.slice(l4)), r7 = false !== n7 && r7 + c5.start.length, o8 = false !== l4 && o8 + c5.dest.length;
        }
        return this.value = i9, this.destination = new SVG.PathArray(), this.destination.value = a5, this;
      } });
    }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
    * https://github.com/svgdotjs/svg.draggable.js
    * Copyright (c) 2019 Wout Fierens; Licensed MIT */
    function() {
      function t5(t6) {
        t6.remember("_draggable", this), this.el = t6;
      }
      t5.prototype.init = function(t6, e8) {
        var i8 = this;
        this.constraint = t6, this.value = e8, this.el.on("mousedown.drag", function(t7) {
          i8.start(t7);
        }), this.el.on("touchstart.drag", function(t7) {
          i8.start(t7);
        });
      }, t5.prototype.transformPoint = function(t6, e8) {
        var i8 = (t6 = t6 || window.event).changedTouches && t6.changedTouches[0] || t6;
        return this.p.x = i8.clientX - (e8 || 0), this.p.y = i8.clientY, this.p.matrixTransform(this.m);
      }, t5.prototype.getBBox = function() {
        var t6 = this.el.bbox();
        return this.el instanceof SVG.Nested && (t6 = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t6.x = this.el.x(), t6.y = this.el.y()), t6;
      }, t5.prototype.start = function(t6) {
        if ("click" != t6.type && "mousedown" != t6.type && "mousemove" != t6.type || 1 == (t6.which || t6.buttons)) {
          var e8 = this;
          if (this.el.fire("beforedrag", { event: t6, handler: this }), !this.el.event().defaultPrevented) {
            t6.preventDefault(), t6.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
            var i8, a4 = this.getBBox();
            if (this.el instanceof SVG.Text) switch (i8 = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
              case "middle":
                i8 /= 2;
                break;
              case "start":
                i8 = 0;
            }
            this.startPoints = { point: this.transformPoint(t6, i8), box: a4, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(t7) {
              e8.drag(t7);
            }), SVG.on(window, "touchmove.drag", function(t7) {
              e8.drag(t7);
            }), SVG.on(window, "mouseup.drag", function(t7) {
              e8.end(t7);
            }), SVG.on(window, "touchend.drag", function(t7) {
              e8.end(t7);
            }), this.el.fire("dragstart", { event: t6, p: this.startPoints.point, m: this.m, handler: this });
          }
        }
      }, t5.prototype.drag = function(t6) {
        var e8 = this.getBBox(), i8 = this.transformPoint(t6), a4 = this.startPoints.box.x + i8.x - this.startPoints.point.x, s5 = this.startPoints.box.y + i8.y - this.startPoints.point.y, r7 = this.constraint, o8 = i8.x - this.startPoints.point.x, n7 = i8.y - this.startPoints.point.y;
        if (this.el.fire("dragmove", { event: t6, p: i8, m: this.m, handler: this }), this.el.event().defaultPrevented) return i8;
        if ("function" == typeof r7) {
          var l4 = r7.call(this.el, a4, s5, this.m);
          "boolean" == typeof l4 && (l4 = { x: l4, y: l4 }), true === l4.x ? this.el.x(a4) : false !== l4.x && this.el.x(l4.x), true === l4.y ? this.el.y(s5) : false !== l4.y && this.el.y(l4.y);
        } else "object" == typeof r7 && (null != r7.minX && a4 < r7.minX ? o8 = (a4 = r7.minX) - this.startPoints.box.x : null != r7.maxX && a4 > r7.maxX - e8.width && (o8 = (a4 = r7.maxX - e8.width) - this.startPoints.box.x), null != r7.minY && s5 < r7.minY ? n7 = (s5 = r7.minY) - this.startPoints.box.y : null != r7.maxY && s5 > r7.maxY - e8.height && (n7 = (s5 = r7.maxY - e8.height) - this.startPoints.box.y), null != r7.snapToGrid && (a4 -= a4 % r7.snapToGrid, s5 -= s5 % r7.snapToGrid, o8 -= o8 % r7.snapToGrid, n7 -= n7 % r7.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o8, y: n7 }, true) : this.el.move(a4, s5));
        return i8;
      }, t5.prototype.end = function(t6) {
        var e8 = this.drag(t6);
        this.el.fire("dragend", { event: t6, p: e8, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
      }, SVG.extend(SVG.Element, { draggable: function(e8, i8) {
        "function" != typeof e8 && "object" != typeof e8 || (i8 = e8, e8 = true);
        var a4 = this.remember("_draggable") || new t5(this);
        return (e8 = void 0 === e8 || e8) ? a4.init(i8 || {}, e8) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
      } });
    }.call(void 0), function() {
      function t5(t6) {
        this.el = t6, t6.remember("_selectHandler", this), this.pointSelection = { isSelected: false }, this.rectSelection = { isSelected: false }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(t7, e8, i8) {
          var a4 = "string" != typeof t7 ? t7 : e8[t7];
          return i8 ? a4 / 2 : a4;
        }, this.pointCoords = function(t7, e8) {
          var i8 = this.pointsList[t7];
          return { x: this.pointCoord(i8[0], e8, "t" === t7 || "b" === t7), y: this.pointCoord(i8[1], e8, "r" === t7 || "l" === t7) };
        };
      }
      t5.prototype.init = function(t6, e8) {
        var i8 = this.el.bbox();
        this.options = {};
        var a4 = this.el.selectize.defaults.points;
        for (var s5 in this.el.selectize.defaults) this.options[s5] = this.el.selectize.defaults[s5], void 0 !== e8[s5] && (this.options[s5] = e8[s5]);
        var r7 = ["points", "pointsExclude"];
        for (var s5 in r7) {
          var o8 = this.options[r7[s5]];
          "string" == typeof o8 ? o8 = o8.length > 0 ? o8.split(/\s*,\s*/i) : [] : "boolean" == typeof o8 && "points" === r7[s5] && (o8 = o8 ? a4 : []), this.options[r7[s5]] = o8;
        }
        this.options.points = [a4, this.options.points].reduce(function(t7, e9) {
          return t7.filter(function(t8) {
            return e9.indexOf(t8) > -1;
          });
        }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(t7, e9) {
          return t7.filter(function(t8) {
            return e9.indexOf(t8) < 0;
          });
        }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i8.x, i8.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t6) : this.selectRect(t6), this.observe(), this.cleanup();
      }, t5.prototype.selectPoints = function(t6) {
        return this.pointSelection.isSelected = t6, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
      }, t5.prototype.getPointArray = function() {
        var t6 = this.el.bbox();
        return this.el.array().valueOf().map(function(e8) {
          return [e8[0] - t6.x, e8[1] - t6.y];
        });
      }, t5.prototype.drawPoints = function() {
        for (var t6 = this, e8 = this.getPointArray(), i8 = 0, a4 = e8.length; i8 < a4; ++i8) {
          var s5 = /* @__PURE__ */ function(e9) {
            return function(i9) {
              (i9 = i9 || window.event).preventDefault ? i9.preventDefault() : i9.returnValue = false, i9.stopPropagation();
              var a5 = i9.pageX || i9.touches[0].pageX, s6 = i9.pageY || i9.touches[0].pageY;
              t6.el.fire("point", { x: a5, y: s6, i: e9, event: i9 });
            };
          }(i8), r7 = this.drawPoint(e8[i8][0], e8[i8][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s5).on("mousedown", s5);
          this.pointSelection.set.add(r7);
        }
      }, t5.prototype.drawPoint = function(t6, e8) {
        var i8 = this.options.pointType;
        switch (i8) {
          case "circle":
            return this.drawCircle(t6, e8);
          case "rect":
            return this.drawRect(t6, e8);
          default:
            if ("function" == typeof i8) return i8.call(this, t6, e8);
            throw new Error("Unknown " + i8 + " point type!");
        }
      }, t5.prototype.drawCircle = function(t6, e8) {
        return this.nested.circle(this.options.pointSize).center(t6, e8);
      }, t5.prototype.drawRect = function(t6, e8) {
        return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t6, e8);
      }, t5.prototype.updatePointSelection = function() {
        var t6 = this.getPointArray();
        this.pointSelection.set.each(function(e8) {
          this.cx() === t6[e8][0] && this.cy() === t6[e8][1] || this.center(t6[e8][0], t6[e8][1]);
        });
      }, t5.prototype.updateRectSelection = function() {
        var t6 = this, e8 = this.el.bbox();
        if (this.rectSelection.set.get(0).attr({ width: e8.width, height: e8.height }), this.options.points.length && this.options.points.map(function(i9, a4) {
          var s5 = t6.pointCoords(i9, e8);
          t6.rectSelection.set.get(a4 + 1).center(s5.x, s5.y);
        }), this.options.rotationPoint) {
          var i8 = this.rectSelection.set.length();
          this.rectSelection.set.get(i8 - 1).center(e8.width / 2, 20);
        }
      }, t5.prototype.selectRect = function(t6) {
        var e8 = this, i8 = this.el.bbox();
        function a4(t7) {
          return function(i9) {
            (i9 = i9 || window.event).preventDefault ? i9.preventDefault() : i9.returnValue = false, i9.stopPropagation();
            var a5 = i9.pageX || i9.touches[0].pageX, s6 = i9.pageY || i9.touches[0].pageY;
            e8.el.fire(t7, { x: a5, y: s6, event: i9 });
          };
        }
        if (this.rectSelection.isSelected = t6, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i8.width, i8.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2) {
          this.options.points.map(function(t7, s6) {
            var r8 = e8.pointCoords(t7, i8), o8 = e8.drawPoint(r8.x, r8.y).attr("class", e8.options.classPoints + "_" + t7).on("mousedown", a4(t7)).on("touchstart", a4(t7));
            e8.rectSelection.set.add(o8);
          }), this.rectSelection.set.each(function() {
            this.addClass(e8.options.classPoints);
          });
        }
        if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
          var s5 = function(t7) {
            (t7 = t7 || window.event).preventDefault ? t7.preventDefault() : t7.returnValue = false, t7.stopPropagation();
            var i9 = t7.pageX || t7.touches[0].pageX, a5 = t7.pageY || t7.touches[0].pageY;
            e8.el.fire("rot", { x: i9, y: a5, event: t7 });
          }, r7 = this.drawPoint(i8.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s5).on("mousedown", s5);
          this.rectSelection.set.add(r7);
        }
      }, t5.prototype.handler = function() {
        var t6 = this.el.bbox();
        this.nested.matrix(new SVG.Matrix(this.el).translate(t6.x, t6.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
      }, t5.prototype.observe = function() {
        var t6 = this;
        if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function() {
          t6.handler();
        }), this.observerInst.observe(this.el.node, { attributes: true });
        else try {
          this.observerInst.disconnect(), delete this.observerInst;
        } catch (t7) {
        }
        else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
          t6.handler();
        });
      }, t5.prototype.cleanup = function() {
        !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
          this.remove();
        }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
          this.remove();
        }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
      }, SVG.extend(SVG.Element, { selectize: function(e8, i8) {
        return "object" == typeof e8 && (i8 = e8, e8 = true), (this.remember("_selectHandler") || new t5(this)).init(void 0 === e8 || e8, i8 || {}), this;
      } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: true, deepSelect: false, pointType: "circle" };
    }(), function() {
      (function() {
        function t5(t6) {
          t6.remember("_resizeHandler", this), this.el = t6, this.parameters = {}, this.lastUpdateCall = null, this.p = t6.doc().node.createSVGPoint();
        }
        t5.prototype.transformPoint = function(t6, e8, i8) {
          return this.p.x = t6 - (this.offset.x - window.pageXOffset), this.p.y = e8 - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i8 || this.m);
        }, t5.prototype._extractPosition = function(t6) {
          return { x: null != t6.clientX ? t6.clientX : t6.touches[0].clientX, y: null != t6.clientY ? t6.clientY : t6.touches[0].clientY };
        }, t5.prototype.init = function(t6) {
          var e8 = this;
          if (this.stop(), "stop" !== t6) {
            for (var i8 in this.options = {}, this.el.resize.defaults) this.options[i8] = this.el.resize.defaults[i8], void 0 !== t6[i8] && (this.options[i8] = t6[i8]);
            this.el.on("lt.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("rt.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("rb.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("lb.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("t.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("r.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("b.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("l.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("rot.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.el.on("point.resize", function(t7) {
              e8.resize(t7 || window.event);
            }), this.update();
          }
        }, t5.prototype.stop = function() {
          return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
        }, t5.prototype.resize = function(t6) {
          var e8 = this;
          this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
          var i8 = this._extractPosition(t6.detail.event);
          if (this.parameters = { type: this.el.type, p: this.transformPoint(i8.x, i8.y), x: t6.detail.x, y: t6.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t6.detail.i) {
            var a4 = this.el.array().valueOf();
            this.parameters.i = t6.detail.i, this.parameters.pointCoords = [a4[t6.detail.i][0], a4[t6.detail.i][1]];
          }
          switch (t6.type) {
            case "lt":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9);
                if (this.parameters.box.width - i9[0] > 0 && this.parameters.box.height - i9[1] > 0) {
                  if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i9[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i9[0]);
                  i9 = this.checkAspectRatio(i9), this.el.move(this.parameters.box.x + i9[0], this.parameters.box.y + i9[1]).size(this.parameters.box.width - i9[0], this.parameters.box.height - i9[1]);
                }
              };
              break;
            case "rt":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 2);
                if (this.parameters.box.width + i9[0] > 0 && this.parameters.box.height - i9[1] > 0) {
                  if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i9[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i9[0]);
                  i9 = this.checkAspectRatio(i9, true), this.el.move(this.parameters.box.x, this.parameters.box.y + i9[1]).size(this.parameters.box.width + i9[0], this.parameters.box.height - i9[1]);
                }
              };
              break;
            case "rb":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 0);
                if (this.parameters.box.width + i9[0] > 0 && this.parameters.box.height + i9[1] > 0) {
                  if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i9[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i9[0]);
                  i9 = this.checkAspectRatio(i9), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i9[0], this.parameters.box.height + i9[1]);
                }
              };
              break;
            case "lb":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 1);
                if (this.parameters.box.width - i9[0] > 0 && this.parameters.box.height + i9[1] > 0) {
                  if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i9[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i9[0]);
                  i9 = this.checkAspectRatio(i9, true), this.el.move(this.parameters.box.x + i9[0], this.parameters.box.y).size(this.parameters.box.width - i9[0], this.parameters.box.height + i9[1]);
                }
              };
              break;
            case "t":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 2);
                if (this.parameters.box.height - i9[1] > 0) {
                  if ("text" === this.parameters.type) return;
                  this.el.move(this.parameters.box.x, this.parameters.box.y + i9[1]).height(this.parameters.box.height - i9[1]);
                }
              };
              break;
            case "r":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 0);
                if (this.parameters.box.width + i9[0] > 0) {
                  if ("text" === this.parameters.type) return;
                  this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i9[0]);
                }
              };
              break;
            case "b":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 0);
                if (this.parameters.box.height + i9[1] > 0) {
                  if ("text" === this.parameters.type) return;
                  this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i9[1]);
                }
              };
              break;
            case "l":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, 1);
                if (this.parameters.box.width - i9[0] > 0) {
                  if ("text" === this.parameters.type) return;
                  this.el.move(this.parameters.box.x + i9[0], this.parameters.box.y).width(this.parameters.box.width - i9[0]);
                }
              };
              break;
            case "rot":
              this.calc = function(t7, e9) {
                var i9 = t7 + this.parameters.p.x, a5 = e9 + this.parameters.p.y, s5 = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), r7 = Math.atan2(a5 - this.parameters.box.y - this.parameters.box.height / 2, i9 - this.parameters.box.x - this.parameters.box.width / 2), o8 = this.parameters.rotation + 180 * (r7 - s5) / Math.PI + this.options.snapToAngle / 2;
                this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o8 - o8 % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
              };
              break;
            case "point":
              this.calc = function(t7, e9) {
                var i9 = this.snapToGrid(t7, e9, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), a5 = this.el.array().valueOf();
                a5[this.parameters.i][0] = this.parameters.pointCoords[0] + i9[0], a5[this.parameters.i][1] = this.parameters.pointCoords[1] + i9[1], this.el.plot(a5);
              };
          }
          this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t6 }), SVG.on(window, "touchmove.resize", function(t7) {
            e8.update(t7 || window.event);
          }), SVG.on(window, "touchend.resize", function() {
            e8.done();
          }), SVG.on(window, "mousemove.resize", function(t7) {
            e8.update(t7 || window.event);
          }), SVG.on(window, "mouseup.resize", function() {
            e8.done();
          });
        }, t5.prototype.update = function(t6) {
          if (t6) {
            var e8 = this._extractPosition(t6), i8 = this.transformPoint(e8.x, e8.y), a4 = i8.x - this.parameters.p.x, s5 = i8.y - this.parameters.p.y;
            this.lastUpdateCall = [a4, s5], this.calc(a4, s5), this.el.fire("resizing", { dx: a4, dy: s5, event: t6 });
          } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
        }, t5.prototype.done = function() {
          this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
        }, t5.prototype.snapToGrid = function(t6, e8, i8, a4) {
          var s5;
          return void 0 !== a4 ? s5 = [(i8 + t6) % this.options.snapToGrid, (a4 + e8) % this.options.snapToGrid] : (i8 = null == i8 ? 3 : i8, s5 = [(this.parameters.box.x + t6 + (1 & i8 ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e8 + (2 & i8 ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t6 < 0 && (s5[0] -= this.options.snapToGrid), e8 < 0 && (s5[1] -= this.options.snapToGrid), t6 -= Math.abs(s5[0]) < this.options.snapToGrid / 2 ? s5[0] : s5[0] - (t6 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e8 -= Math.abs(s5[1]) < this.options.snapToGrid / 2 ? s5[1] : s5[1] - (e8 < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t6, e8, i8, a4);
        }, t5.prototype.constraintToBox = function(t6, e8, i8, a4) {
          var s5, r7, o8 = this.options.constraint || {};
          return void 0 !== a4 ? (s5 = i8, r7 = a4) : (s5 = this.parameters.box.x + (1 & i8 ? 0 : this.parameters.box.width), r7 = this.parameters.box.y + (2 & i8 ? 0 : this.parameters.box.height)), void 0 !== o8.minX && s5 + t6 < o8.minX && (t6 = o8.minX - s5), void 0 !== o8.maxX && s5 + t6 > o8.maxX && (t6 = o8.maxX - s5), void 0 !== o8.minY && r7 + e8 < o8.minY && (e8 = o8.minY - r7), void 0 !== o8.maxY && r7 + e8 > o8.maxY && (e8 = o8.maxY - r7), [t6, e8];
        }, t5.prototype.checkAspectRatio = function(t6, e8) {
          if (!this.options.saveAspectRatio) return t6;
          var i8 = t6.slice(), a4 = this.parameters.box.width / this.parameters.box.height, s5 = this.parameters.box.width + t6[0], r7 = this.parameters.box.height - t6[1], o8 = s5 / r7;
          return o8 < a4 ? (i8[1] = s5 / a4 - this.parameters.box.height, e8 && (i8[1] = -i8[1])) : o8 > a4 && (i8[0] = this.parameters.box.width - r7 * a4, e8 && (i8[0] = -i8[0])), i8;
        }, SVG.extend(SVG.Element, { resize: function(e8) {
          return (this.remember("_resizeHandler") || new t5(this)).init(e8 || {}), this;
        } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: false };
      }).call(this);
    }(), void 0 === window.Apex && (window.Apex = {});
    var qt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "initModules", value: function() {
        this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new y3(this.ctx), this.ctx.axes = new et(this.ctx), this.ctx.core = new _t(this.ctx.el, this.ctx), this.ctx.config = new D2({}), this.ctx.data = new _2(this.ctx), this.ctx.grid = new Z2(this.ctx), this.ctx.graphics = new k2(this.ctx), this.ctx.coreUtils = new A2(this.ctx), this.ctx.crosshairs = new it(this.ctx), this.ctx.events = new K(this.ctx), this.ctx.exports = new U(this.ctx), this.ctx.fill = new N2(this.ctx), this.ctx.localization = new tt(this.ctx), this.ctx.options = new X(), this.ctx.responsive = new at(this.ctx), this.ctx.series = new V2(this.ctx), this.ctx.theme = new st(this.ctx), this.ctx.formatters = new P2(this.ctx), this.ctx.titleSubtitle = new rt(this.ctx), this.ctx.legend = new gt(this.ctx), this.ctx.toolbar = new ut(this.ctx), this.ctx.tooltip = new wt(this.ctx), this.ctx.dimensions = new ct(this.ctx), this.ctx.updateHelpers = new Ut(this.ctx), this.ctx.zoomPanSelection = new ft(this.ctx), this.ctx.w.globals.tooltip = new wt(this.ctx);
      } }]), t5;
    }();
    var Zt = function() {
      function t5(e8) {
        i7(this, t5), this.ctx = e8, this.w = e8.w;
      }
      return s4(t5, [{ key: "clear", value: function(t6) {
        var e8 = t6.isUpdating;
        this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e8 });
      } }, { key: "killSVG", value: function(t6) {
        t6.each(function() {
          this.removeClass("*"), this.off(), this.stop();
        }, true), t6.ungroup(), t6.clear();
      } }, { key: "clearDomElements", value: function(t6) {
        var e8 = this, i8 = t6.isUpdating, a4 = this.w.globals.dom.Paper.node;
        a4.parentNode && a4.parentNode.parentNode && !i8 && (a4.parentNode.parentNode.style.minHeight = "unset");
        var s5 = this.w.globals.dom.baseEl;
        s5 && this.ctx.eventList.forEach(function(t7) {
          s5.removeEventListener(t7, e8.ctx.events.documentEvent);
        });
        var r7 = this.w.globals.dom;
        if (null !== this.ctx.el) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
        this.killSVG(r7.Paper), r7.Paper.remove(), r7.elWrap = null, r7.elGraphical = null, r7.elLegendWrap = null, r7.elLegendForeign = null, r7.baseEl = null, r7.elGridRect = null, r7.elGridRectMask = null, r7.elGridRectBarMask = null, r7.elGridRectMarkerMask = null, r7.elForecastMask = null, r7.elNonForecastMask = null, r7.elDefs = null;
      } }]), t5;
    }();
    var $t = /* @__PURE__ */ new WeakMap();
    var Jt = function() {
      function t5(e8, a4) {
        i7(this, t5), this.opts = a4, this.ctx = this, this.w = new O(a4).init(), this.el = e8, this.w.globals.cuid = m2.randomId(), this.w.globals.chartID = this.w.config.chart.id ? m2.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new qt(this).initModules(), this.create = m2.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
      }
      return s4(t5, [{ key: "render", value: function() {
        var t6 = this;
        return new Promise(function(e8, i8) {
          if (null !== t6.el) {
            void 0 === Apex._chartInstances && (Apex._chartInstances = []), t6.w.config.chart.id && Apex._chartInstances.push({ id: t6.w.globals.chartID, group: t6.w.config.chart.group, chart: t6 }), t6.setLocale(t6.w.config.chart.defaultLocale);
            var a4 = t6.w.config.chart.events.beforeMount;
            "function" == typeof a4 && a4(t6, t6.w), t6.events.fireEvent("beforeMount", [t6, t6.w]), window.addEventListener("resize", t6.windowResizeHandler), function(t7, e9) {
              var i9 = false;
              if (t7.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                var a5 = t7.getBoundingClientRect();
                "none" !== t7.style.display && 0 !== a5.width || (i9 = true);
              }
              var s6 = new ResizeObserver(function(a6) {
                i9 && e9.call(t7, a6), i9 = true;
              });
              t7.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t7.children).forEach(function(t8) {
                return s6.observe(t8);
              }) : s6.observe(t7), $t.set(e9, s6);
            }(t6.el.parentNode, t6.parentResizeHandler);
            var s5 = t6.el.getRootNode && t6.el.getRootNode(), r7 = m2.is("ShadowRoot", s5), o8 = t6.el.ownerDocument, n7 = r7 ? s5.getElementById("apexcharts-css") : o8.getElementById("apexcharts-css");
            if (!n7) {
              var l4;
              (n7 = document.createElement("style")).id = "apexcharts-css", n7.textContent = '@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,\n.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,\n.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,\n.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n';
              var h4 = (null === (l4 = t6.opts.chart) || void 0 === l4 ? void 0 : l4.nonce) || t6.w.config.chart.nonce;
              h4 && n7.setAttribute("nonce", h4), r7 ? s5.prepend(n7) : o8.head.appendChild(n7);
            }
            var c5 = t6.create(t6.w.config.series, {});
            if (!c5) return e8(t6);
            t6.mount(c5).then(function() {
              "function" == typeof t6.w.config.chart.events.mounted && t6.w.config.chart.events.mounted(t6, t6.w), t6.events.fireEvent("mounted", [t6, t6.w]), e8(c5);
            }).catch(function(t7) {
              i8(t7);
            });
          } else i8(new Error("Element not found"));
        });
      } }, { key: "create", value: function(t6, e8) {
        var i8 = this, a4 = this.w;
        new qt(this).initModules();
        var s5 = this.w.globals;
        (s5.noData = false, s5.animationEnded = false, this.responsive.checkResponsiveConfig(e8), a4.config.xaxis.convertedCatToNumeric) && new F(a4.config).convertCatToNumericXaxis(a4.config, this.ctx);
        if (null === this.el) return s5.animationEnded = true, null;
        if (this.core.setupElements(), "treemap" === a4.config.chart.type && (a4.config.grid.show = false, a4.config.yaxis[0].show = false), 0 === s5.svgWidth) return s5.animationEnded = true, null;
        var r7 = t6;
        t6.forEach(function(t7, e9) {
          t7.hidden && (r7 = i8.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: e9 }));
        });
        var o8 = A2.checkComboSeries(r7, a4.config.chart.type);
        s5.comboCharts = o8.comboCharts, s5.comboBarCount = o8.comboBarCount;
        var n7 = r7.every(function(t7) {
          return t7.data && 0 === t7.data.length;
        });
        (0 === r7.length || n7 && s5.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(r7), this.theme.init(), new W(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s5.noData && s5.collapsedSeries.length !== s5.series.length && !a4.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s5.axisCharts && (this.core.coreCalculations(), "category" !== a4.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = a4.globals.minX, this.ctx.toolbar.maxX = a4.globals.maxX), this.formatters.heatmapLabelFormatters(), new A2(this).getLargestMarkerSize(), this.dimensions.plotCoords();
        var l4 = this.core.xySettings();
        this.grid.createGridMask();
        var h4 = this.core.plotChartType(r7, l4), c5 = new G(this);
        return c5.bringForward(), a4.config.dataLabels.background.enabled && c5.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: h4, xyRatios: l4, dimensions: { plot: { left: a4.globals.translateX, top: a4.globals.translateY, width: a4.globals.gridWidth, height: a4.globals.gridHeight } } };
      } }, { key: "mount", value: function() {
        var t6 = this, e8 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i8 = this, a4 = i8.w;
        return new Promise(function(s5, r7) {
          if (null === i8.el) return r7(new Error("Not enough data to display or target element not found"));
          (null === e8 || a4.globals.allSeriesCollapsed) && i8.series.handleNoData(), i8.grid = new Z2(i8);
          var o8, n7, l4 = i8.grid.drawGrid();
          (i8.annotations = new E2(i8), i8.annotations.drawImageAnnos(), i8.annotations.drawTextAnnos(), "back" === a4.config.grid.position) && (l4 && a4.globals.dom.elGraphical.add(l4.el), null != l4 && null !== (o8 = l4.elGridBorders) && void 0 !== o8 && o8.node && a4.globals.dom.elGraphical.add(l4.elGridBorders));
          if (Array.isArray(e8.elGraph)) for (var h4 = 0; h4 < e8.elGraph.length; h4++) a4.globals.dom.elGraphical.add(e8.elGraph[h4]);
          else a4.globals.dom.elGraphical.add(e8.elGraph);
          "front" === a4.config.grid.position && (l4 && a4.globals.dom.elGraphical.add(l4.el), null != l4 && null !== (n7 = l4.elGridBorders) && void 0 !== n7 && n7.node && a4.globals.dom.elGraphical.add(l4.elGridBorders));
          "front" === a4.config.xaxis.crosshairs.position && i8.crosshairs.drawXCrosshairs(), "front" === a4.config.yaxis[0].crosshairs.position && i8.crosshairs.drawYCrosshairs(), "treemap" !== a4.config.chart.type && i8.axes.drawAxis(a4.config.chart.type, l4);
          var c5 = new q(t6.ctx, l4), d4 = new Q(t6.ctx, l4);
          if (null !== l4 && (c5.xAxisLabelCorrections(l4.xAxisTickWidth), d4.setYAxisTextAlignments(), a4.config.yaxis.map(function(t7, e9) {
            -1 === a4.globals.ignoreYAxisIndexes.indexOf(e9) && d4.yAxisTitleRotate(e9, t7.opposite);
          })), i8.annotations.drawAxesAnnotations(), !a4.globals.noData) {
            if (a4.config.tooltip.enabled && !a4.globals.noData && i8.w.globals.tooltip.drawTooltip(e8.xyRatios), a4.globals.axisCharts && (a4.globals.isXNumeric || a4.config.xaxis.convertedCatToNumeric || a4.globals.isRangeBar)) (a4.config.chart.zoom.enabled || a4.config.chart.selection && a4.config.chart.selection.enabled || a4.config.chart.pan && a4.config.chart.pan.enabled) && i8.zoomPanSelection.init({ xyRatios: e8.xyRatios });
            else {
              var g3 = a4.config.chart.toolbar.tools;
              ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(t7) {
                g3[t7] = false;
              });
            }
            a4.config.chart.toolbar.show && !a4.globals.allSeriesCollapsed && i8.toolbar.createToolbar();
          }
          a4.globals.memory.methodsToExec.length > 0 && a4.globals.memory.methodsToExec.forEach(function(t7) {
            t7.method(t7.params, false, t7.context);
          }), a4.globals.axisCharts || a4.globals.noData || i8.core.resizeNonAxisCharts(), s5(i8);
        });
      } }, { key: "destroy", value: function() {
        var t6, e8;
        window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t6 = this.parentResizeHandler, (e8 = $t.get(t6)) && (e8.disconnect(), $t.delete(t6));
        var i8 = this.w.config.chart.id;
        i8 && Apex._chartInstances.forEach(function(t7, e9) {
          t7.id === m2.escapeString(i8) && Apex._chartInstances.splice(e9, 1);
        }), new Zt(this.ctx).clear({ isUpdating: false });
      } }, { key: "updateOptions", value: function(t6) {
        var e8 = this, i8 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a4 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s5 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r7 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o8 = this.w;
        return o8.globals.selection = void 0, t6.series && (this.series.resetSeries(false, true, false), t6.series.length && t6.series[0].data && (t6.series = t6.series.map(function(t7, i9) {
          return e8.updateHelpers._extendSeries(t7, i9);
        })), this.updateHelpers.revertDefaultAxisMinMax()), t6.xaxis && (t6 = this.updateHelpers.forceXAxisUpdate(t6)), t6.yaxis && (t6 = this.updateHelpers.forceYAxisUpdate(t6)), o8.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t6.theme && (t6 = this.theme.updateThemeOptions(t6)), this.updateHelpers._updateOptions(t6, i8, a4, s5, r7);
      } }, { key: "updateSeries", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t6, e8, i8);
      } }, { key: "appendSeries", value: function(t6) {
        var e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a4 = this.w.config.series.slice();
        return a4.push(t6), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a4, e8, i8);
      } }, { key: "appendData", value: function(t6) {
        var e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = this;
        i8.w.globals.dataChanged = true, i8.series.getPreviousPaths();
        for (var a4 = i8.w.config.series.slice(), s5 = 0; s5 < a4.length; s5++) if (null !== t6[s5] && void 0 !== t6[s5]) for (var r7 = 0; r7 < t6[s5].data.length; r7++) a4[s5].data.push(t6[s5].data[r7]);
        return i8.w.config.series = a4, e8 && (i8.w.globals.initialSeries = m2.clone(i8.w.config.series)), this.update();
      } }, { key: "update", value: function(t6) {
        var e8 = this;
        return new Promise(function(i8, a4) {
          new Zt(e8.ctx).clear({ isUpdating: true });
          var s5 = e8.create(e8.w.config.series, t6);
          if (!s5) return i8(e8);
          e8.mount(s5).then(function() {
            "function" == typeof e8.w.config.chart.events.updated && e8.w.config.chart.events.updated(e8, e8.w), e8.events.fireEvent("updated", [e8, e8.w]), e8.w.globals.isDirty = true, i8(e8);
          }).catch(function(t7) {
            a4(t7);
          });
        });
      } }, { key: "getSyncedCharts", value: function() {
        var t6 = this.getGroupedCharts(), e8 = [this];
        return t6.length && (e8 = [], t6.forEach(function(t7) {
          e8.push(t7);
        })), e8;
      } }, { key: "getGroupedCharts", value: function() {
        var t6 = this;
        return Apex._chartInstances.filter(function(t7) {
          if (t7.group) return true;
        }).map(function(e8) {
          return t6.w.config.chart.group === e8.group ? e8.chart : t6;
        });
      } }, { key: "toggleSeries", value: function(t6) {
        return this.series.toggleSeries(t6);
      } }, { key: "highlightSeriesOnLegendHover", value: function(t6, e8) {
        return this.series.toggleSeriesOnHover(t6, e8);
      } }, { key: "showSeries", value: function(t6) {
        this.series.showSeries(t6);
      } }, { key: "hideSeries", value: function(t6) {
        this.series.hideSeries(t6);
      } }, { key: "highlightSeries", value: function(t6) {
        this.series.highlightSeries(t6);
      } }, { key: "isSeriesHidden", value: function(t6) {
        this.series.isSeriesHidden(t6);
      } }, { key: "resetSeries", value: function() {
        var t6 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.series.resetSeries(t6, e8);
      } }, { key: "addEventListener", value: function(t6, e8) {
        this.events.addEventListener(t6, e8);
      } }, { key: "removeEventListener", value: function(t6, e8) {
        this.events.removeEventListener(t6, e8);
      } }, { key: "addXaxisAnnotation", value: function(t6) {
        var e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a4 = this;
        i8 && (a4 = i8), a4.annotations.addXaxisAnnotationExternal(t6, e8, a4);
      } }, { key: "addYaxisAnnotation", value: function(t6) {
        var e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a4 = this;
        i8 && (a4 = i8), a4.annotations.addYaxisAnnotationExternal(t6, e8, a4);
      } }, { key: "addPointAnnotation", value: function(t6) {
        var e8 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i8 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a4 = this;
        i8 && (a4 = i8), a4.annotations.addPointAnnotationExternal(t6, e8, a4);
      } }, { key: "clearAnnotations", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e8 = this;
        t6 && (e8 = t6), e8.annotations.clearAnnotations(e8);
      } }, { key: "removeAnnotation", value: function(t6) {
        var e8 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i8 = this;
        e8 && (i8 = e8), i8.annotations.removeAnnotation(i8, t6);
      } }, { key: "getChartArea", value: function() {
        return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
      } }, { key: "getSeriesTotalXRange", value: function(t6, e8) {
        return this.coreUtils.getSeriesTotalsXRange(t6, e8);
      } }, { key: "getHighestValueInSeries", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new J(this.ctx).getMinYMaxY(t6).highestY;
      } }, { key: "getLowestValueInSeries", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new J(this.ctx).getMinYMaxY(t6).lowestY;
      } }, { key: "getSeriesTotal", value: function() {
        return this.w.globals.seriesTotals;
      } }, { key: "toggleDataPointSelection", value: function(t6, e8) {
        return this.updateHelpers.toggleDataPointSelection(t6, e8);
      } }, { key: "zoomX", value: function(t6, e8) {
        this.ctx.toolbar.zoomUpdateOptions(t6, e8);
      } }, { key: "setLocale", value: function(t6) {
        this.localization.setCurrentLocaleValues(t6);
      } }, { key: "dataURI", value: function(t6) {
        return new U(this.ctx).dataURI(t6);
      } }, { key: "exportToCSV", value: function() {
        var t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new U(this.ctx).exportToCSV(t6);
      } }, { key: "paper", value: function() {
        return this.w.globals.dom.Paper;
      } }, { key: "_parentResizeCallback", value: function() {
        this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
      } }, { key: "_windowResize", value: function() {
        var t6 = this;
        clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
          t6.w.globals.resized = true, t6.w.globals.dataChanged = false, t6.ctx.update();
        }, 150);
      } }, { key: "_windowResizeHandler", value: function() {
        var t6 = this.w.config.chart.redrawOnWindowResize;
        "function" == typeof t6 && (t6 = t6()), t6 && this._windowResize();
      } }], [{ key: "getChartByID", value: function(t6) {
        var e8 = m2.escapeString(t6);
        if (Apex._chartInstances) {
          var i8 = Apex._chartInstances.filter(function(t7) {
            return t7.id === e8;
          })[0];
          return i8 && i8.chart;
        }
      } }, { key: "initOnLoad", value: function() {
        for (var e8 = document.querySelectorAll("[data-apexcharts]"), i8 = 0; i8 < e8.length; i8++) {
          new t5(e8[i8], JSON.parse(e8[i8].getAttribute("data-options"))).render();
        }
      } }, { key: "exec", value: function(t6, e8) {
        var i8 = this.getChartByID(t6);
        if (i8) {
          i8.w.globals.isExecCalled = true;
          var a4 = null;
          if (-1 !== i8.publicMethods.indexOf(e8)) {
            for (var s5 = arguments.length, r7 = new Array(s5 > 2 ? s5 - 2 : 0), o8 = 2; o8 < s5; o8++) r7[o8 - 2] = arguments[o8];
            a4 = i8[e8].apply(i8, r7);
          }
          return a4;
        }
      } }, { key: "merge", value: function(t6, e8) {
        return m2.extend(t6, e8);
      } }]), t5;
    }();
    module.exports = Jt;
  }
});

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t4, e7, o7) {
    if (this._$cssResult$ = true, o7 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e7;
  }
  get styleSheet() {
    let t4 = this.o;
    const s4 = this.t;
    if (e && void 0 === t4) {
      const e7 = void 0 !== s4 && 1 === s4.length;
      e7 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && o.set(s4, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var i = (t4, ...e7) => {
  const o7 = 1 === t4.length ? t4[0] : e7.reduce((e8, s4, o8) => e8 + ((t5) => {
    if (true === t5._$cssResult$) return t5.cssText;
    if ("number" == typeof t5) return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t4[o8 + 1], t4[0]);
  return new n(o7, t4, s);
};
var S = (s4, o7) => {
  if (e) s4.adoptedStyleSheets = o7.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else for (const e7 of o7) {
    const o8 = document.createElement("style"), n6 = t.litNonce;
    void 0 !== n6 && o8.setAttribute("nonce", n6), o8.textContent = e7.cssText, s4.appendChild(o8);
  }
};
var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e7 = "";
  for (const s4 of t5.cssRules) e7 += s4.cssText;
  return r(e7);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t4, s4) => t4;
var u = { toAttribute(t4, s4) {
  switch (s4) {
    case Boolean:
      t4 = t4 ? l : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s4) {
  let i7 = t4;
  switch (s4) {
    case Boolean:
      i7 = null !== t4;
      break;
    case Number:
      i7 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i7 = JSON.parse(t4);
      } catch (t5) {
        i7 = null;
      }
  }
  return i7;
} };
var f = (t4, s4) => !i2(t4, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t4) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
      const i7 = Symbol(), h3 = this.getPropertyDescriptor(t4, i7, s4);
      void 0 !== h3 && e2(this.prototype, t4, h3);
    }
  }
  static getPropertyDescriptor(t4, s4, i7) {
    const { get: e7, set: r6 } = h(this.prototype, t4) ?? { get() {
      return this[s4];
    }, set(t5) {
      this[s4] = t5;
    } };
    return { get: e7, set(s5) {
      const h3 = e7?.call(this);
      r6?.call(this, s5), this.requestUpdate(t4, h3, i7);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t4 = n2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
      for (const i7 of s4) this.createProperty(i7, t5[i7]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s4 = litPropertyMetadata.get(t4);
      if (void 0 !== s4) for (const [t5, i7] of s4) this.elementProperties.set(t5, i7);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s4] of this.elementProperties) {
      const i7 = this._$Eu(t5, s4);
      void 0 !== i7 && this._$Eh.set(i7, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i7 = [];
    if (Array.isArray(s4)) {
      const e7 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e7) i7.unshift(c(s5));
    } else void 0 !== s4 && i7.push(c(s4));
    return i7;
  }
  static _$Eu(t4, s4) {
    const i7 = s4.attribute;
    return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
  }
  addController(t4) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
  }
  removeController(t4) {
    this._$EO?.delete(t4);
  }
  _$E_() {
    const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i7 of s4.keys()) this.hasOwnProperty(i7) && (t4.set(i7, this[i7]), delete this[i7]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t4) => t4.hostDisconnected?.());
  }
  attributeChangedCallback(t4, s4, i7) {
    this._$AK(t4, i7);
  }
  _$ET(t4, s4) {
    const i7 = this.constructor.elementProperties.get(t4), e7 = this.constructor._$Eu(t4, i7);
    if (void 0 !== e7 && true === i7.reflect) {
      const h3 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s4, i7.type);
      this._$Em = t4, null == h3 ? this.removeAttribute(e7) : this.setAttribute(e7, h3), this._$Em = null;
    }
  }
  _$AK(t4, s4) {
    const i7 = this.constructor, e7 = i7._$Eh.get(t4);
    if (void 0 !== e7 && this._$Em !== e7) {
      const t5 = i7.getPropertyOptions(e7), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
      this._$Em = e7;
      const r6 = h3.fromAttribute(s4, t5.type);
      this[e7] = r6 ?? this._$Ej?.get(e7) ?? r6, this._$Em = null;
    }
  }
  requestUpdate(t4, s4, i7, e7 = false, h3) {
    if (void 0 !== t4) {
      const r6 = this.constructor;
      if (false === e7 && (h3 = this[t4]), i7 ?? (i7 = r6.getPropertyOptions(t4)), !((i7.hasChanged ?? f)(h3, s4) || i7.useDefault && i7.reflect && h3 === this._$Ej?.get(t4) && !this.hasAttribute(r6._$Eu(t4, i7)))) return;
      this.C(t4, s4, i7);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t4, s4, { useDefault: i7, reflect: e7, wrapped: h3 }, r6) {
    i7 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t4) && (this._$Ej.set(t4, r6 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r6) || (this._$AL.has(t4) || (this.hasUpdated || i7 || (s4 = void 0), this._$AL.set(t4, s4)), true === e7 && this._$Em !== t4 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t4));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t6, s5] of this._$Ep) this[t6] = s5;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0) for (const [s5, i7] of t5) {
        const { wrapped: t6 } = i7, e7 = this[s5];
        true !== t6 || this._$AL.has(s5) || void 0 === e7 || this.C(s5, void 0, i7, e7);
      }
    }
    let t4 = false;
    const s4 = this._$AL;
    try {
      t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t4 = false, this._$EM(), s5;
    }
    t4 && this._$AE(s4);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t5) => this._$ET(t5, this[t5]))), this._$EM();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t4) => t4;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
var u2 = Array.isArray;
var d2 = (t4) => u2(t4) || "function" == typeof t4?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t4) => (i7, ...s4) => ({ _$litType$: t4, strings: i7, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t4, i7) {
  if (!u2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i7) : i7;
}
var N = (t4, i7) => {
  const s4 = t4.length - 1, e7 = [];
  let n6, l3 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c4 = v;
  for (let i8 = 0; i8 < s4; i8++) {
    const s5 = t4[i8];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n6 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n6 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n6 = void 0);
    const x2 = c4 === p2 && t4[i8 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e7.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i8 : x2);
  }
  return [V(t4, l3 + (t4[s4] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")), e7];
};
var S2 = class _S {
  constructor({ strings: t4, _$litType$: i7 }, e7) {
    let r6;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = N(t4, i7);
    if (this.el = _S.createElement(f3, e7), P.currentNode = this.el.content, 2 === i7 || 3 === i7) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (; null !== (r6 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r6.nodeType) {
        if (r6.hasAttributes()) for (const t5 of r6.getAttributeNames()) if (t5.endsWith(h2)) {
          const i8 = v2[a3++], s4 = r6.getAttribute(t5).split(o3), e8 = /([.?@])?(.*)/.exec(i8);
          d3.push({ type: 1, index: l3, name: e8[2], strings: s4, ctor: "." === e8[1] ? I : "?" === e8[1] ? L : "@" === e8[1] ? z : H }), r6.removeAttribute(t5);
        } else t5.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r6.removeAttribute(t5));
        if (y2.test(r6.tagName)) {
          const t5 = r6.textContent.split(o3), i8 = t5.length - 1;
          if (i8 > 0) {
            r6.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i8; s4++) r6.append(t5[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r6.append(t5[i8], c3());
          }
        }
      } else if (8 === r6.nodeType) if (r6.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t5 = -1;
        for (; -1 !== (t5 = r6.data.indexOf(o3, t5 + 1)); ) d3.push({ type: 7, index: l3 }), t5 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t4, i7) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t4, s4;
  }
};
function M(t4, i7, s4 = t4, e7) {
  if (i7 === E) return i7;
  let h3 = void 0 !== e7 ? s4._$Co?.[e7] : s4._$Cl;
  const o7 = a2(i7) ? void 0 : i7._$litDirective$;
  return h3?.constructor !== o7 && (h3?._$AO?.(false), void 0 === o7 ? h3 = void 0 : (h3 = new o7(t4), h3._$AT(t4, s4, e7)), void 0 !== e7 ? (s4._$Co ?? (s4._$Co = []))[e7] = h3 : s4._$Cl = h3), void 0 !== h3 && (i7 = M(t4, h3._$AS(t4, i7.values), h3, e7)), i7;
}
var R = class {
  constructor(t4, i7) {
    this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i7;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i7 }, parts: s4 } = this._$AD, e7 = (t4?.creationScope ?? l2).importNode(i7, true);
    P.currentNode = e7;
    let h3 = P.nextNode(), o7 = 0, n6 = 0, r6 = s4[0];
    for (; void 0 !== r6; ) {
      if (o7 === r6.index) {
        let i8;
        2 === r6.type ? i8 = new k(h3, h3.nextSibling, this, t4) : 1 === r6.type ? i8 = new r6.ctor(h3, r6.name, r6.strings, this, t4) : 6 === r6.type && (i8 = new Z(h3, this, t4)), this._$AV.push(i8), r6 = s4[++n6];
      }
      o7 !== r6?.index && (h3 = P.nextNode(), o7++);
    }
    return P.currentNode = l2, e7;
  }
  p(t4) {
    let i7 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i7), i7 += s4.strings.length - 2) : s4._$AI(t4[i7])), i7++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t4, i7, s4, e7) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i7, this._$AM = s4, this.options = e7, this._$Cv = e7?.isConnected ?? true;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i7 = this._$AM;
    return void 0 !== i7 && 11 === t4?.nodeType && (t4 = i7.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i7 = this) {
    t4 = M(this, t4, i7), a2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== E && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : d2(t4) ? this.k(t4) : this._(t4);
  }
  O(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  T(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
  }
  _(t4) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(l2.createTextNode(t4)), this._$AH = t4;
  }
  $(t4) {
    const { values: i7, _$litType$: s4 } = t4, e7 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e7) this._$AH.p(i7);
    else {
      const t5 = new R(e7, this), s5 = t5.u(this.options);
      t5.p(i7), this.T(s5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i7 = C.get(t4.strings);
    return void 0 === i7 && C.set(t4.strings, i7 = new S2(t4)), i7;
  }
  k(t4) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i7 = this._$AH;
    let s4, e7 = 0;
    for (const h3 of t4) e7 === i7.length ? i7.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i7[e7], s4._$AI(h3), e7++;
    e7 < i7.length && (this._$AR(s4 && s4._$AB.nextSibling, e7), i7.length = e7);
  }
  _$AR(t4 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t4 !== this._$AB; ) {
      const s5 = i3(t4).nextSibling;
      i3(t4).remove(), t4 = s5;
    }
  }
  setConnected(t4) {
    void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i7, s4, e7, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i7, this._$AM = e7, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t4, i7 = this, s4, e7) {
    const h3 = this.strings;
    let o7 = false;
    if (void 0 === h3) t4 = M(this, t4, i7, 0), o7 = !a2(t4) || t4 !== this._$AH && t4 !== E, o7 && (this._$AH = t4);
    else {
      const e8 = t4;
      let n6, r6;
      for (t4 = h3[0], n6 = 0; n6 < h3.length - 1; n6++) r6 = M(this, e8[s4 + n6], i7, n6), r6 === E && (r6 = this._$AH[n6]), o7 || (o7 = !a2(r6) || r6 !== this._$AH[n6]), r6 === A ? t4 = A : t4 !== A && (t4 += (r6 ?? "") + h3[n6 + 1]), this._$AH[n6] = r6;
    }
    o7 && !e7 && this.j(t4);
  }
  j(t4) {
    t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t4) {
    this.element[this.name] = t4 === A ? void 0 : t4;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== A);
  }
};
var z = class extends H {
  constructor(t4, i7, s4, e7, h3) {
    super(t4, i7, s4, e7, h3), this.type = 5;
  }
  _$AI(t4, i7 = this) {
    if ((t4 = M(this, t4, i7, 0) ?? A) === E) return;
    const s4 = this._$AH, e7 = t4 === A && s4 !== A || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== A && (s4 === A || e7);
    e7 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var Z = class {
  constructor(t4, i7, s4) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    M(this, t4);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.3");
var D = (t4, i7, s4) => {
  const e7 = s4?.renderBefore ?? i7;
  let h3 = e7._$litPart$;
  if (void 0 === h3) {
    const t5 = s4?.renderBefore ?? null;
    e7._$litPart$ = h3 = new k(i7.insertBefore(c3(), t5), t5, void 0, s4 ?? {});
  }
  return h3._$AI(t4), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t4 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t4.firstChild), t4;
  }
  update(t4) {
    const r6 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(r6, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

// node_modules/@lit/reactive-element/decorators/property.js
var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r4 = (t4 = o5, e7, r6) => {
  const { kind: n6, metadata: i7 } = r6;
  let s4 = globalThis.litPropertyMetadata.get(i7);
  if (void 0 === s4 && globalThis.litPropertyMetadata.set(i7, s4 = /* @__PURE__ */ new Map()), "setter" === n6 && ((t4 = Object.create(t4)).wrapped = true), s4.set(r6.name, t4), "accessor" === n6) {
    const { name: o7 } = r6;
    return { set(r7) {
      const n7 = e7.get.call(this);
      e7.set.call(this, r7), this.requestUpdate(o7, n7, t4, true, r7);
    }, init(e8) {
      return void 0 !== e8 && this.C(o7, void 0, t4, e8), e8;
    } };
  }
  if ("setter" === n6) {
    const { name: o7 } = r6;
    return function(r7) {
      const n7 = this[o7];
      e7.call(this, r7), this.requestUpdate(o7, n7, t4, true, r7);
    };
  }
  throw Error("Unsupported decorator location: " + n6);
};
function n4(t4) {
  return (e7, o7) => "object" == typeof o7 ? r4(t4, e7, o7) : ((t5, e8, o8) => {
    const r6 = e8.hasOwnProperty(o8);
    return e8.constructor.createProperty(o8, t5), r6 ? Object.getOwnPropertyDescriptor(e8, o8) : void 0;
  })(t4, e7, o7);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}

// node_modules/@lit/reactive-element/decorators/base.js
var e4 = (e7, t4, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t4 && Object.defineProperty(e7, t4, c4), c4);

// node_modules/@lit/reactive-element/decorators/query.js
function e5(e7, r6) {
  return (n6, s4, i7) => {
    const o7 = (t4) => t4.renderRoot?.querySelector(e7) ?? null;
    if (r6) {
      const { get: e8, set: r7 } = "object" == typeof s4 ? n6 : i7 ?? (() => {
        const t4 = Symbol();
        return { get() {
          return this[t4];
        }, set(e9) {
          this[t4] = e9;
        } };
      })();
      return e4(n6, s4, { get() {
        let t4 = e8.call(this);
        return void 0 === t4 && (t4 = o7(this), (null !== t4 || this.hasUpdated) && r7.call(this, t4)), t4;
      } });
    }
    return e4(n6, s4, { get() {
      return o7(this);
    } });
  };
}

// node_modules/lit-html/directive.js
var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e6 = (t4) => (...e7) => ({ _$litDirective$: t4, values: e7 });
var i5 = class {
  constructor(t4) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t4, e7, i7) {
    this._$Ct = t4, this._$AM = e7, this._$Ci = i7;
  }
  _$AS(t4, e7) {
    return this.update(t4, e7);
  }
  update(t4, e7) {
    return this.render(...e7);
  }
};

// node_modules/lit-html/directives/style-map.js
var n5 = "important";
var i6 = " !" + n5;
var o6 = e6(class extends i5 {
  constructor(t4) {
    if (super(t4), t4.type !== t3.ATTRIBUTE || "style" !== t4.name || t4.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t4) {
    return Object.keys(t4).reduce((e7, r6) => {
      const s4 = t4[r6];
      return null == s4 ? e7 : e7 + `${r6 = r6.includes("-") ? r6 : r6.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s4};`;
    }, "");
  }
  update(e7, [r6]) {
    const { style: s4 } = e7.element;
    if (void 0 === this.ft) return this.ft = new Set(Object.keys(r6)), this.render(r6);
    for (const t4 of this.ft) null == r6[t4] && (this.ft.delete(t4), t4.includes("-") ? s4.removeProperty(t4) : s4[t4] = null);
    for (const t4 in r6) {
      const e8 = r6[t4];
      if (null != e8) {
        this.ft.add(t4);
        const r7 = "string" == typeof e8 && e8.endsWith(i6);
        t4.includes("-") || r7 ? s4.setProperty(t4, r7 ? e8.slice(0, -11) : e8, r7 ? n5 : "") : s4[t4] = e8;
      }
    }
    return E;
  }
});

// src/cards/fleet-card/styles.ts
var fleetStyles = i`
  :host {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  .card {
    background: var(--ha-card-background, #0d1117);
    border-radius: 12px;
    overflow: hidden;
    color: #c9d1d9;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 8px;
    border-bottom: 1px solid #30363d;
    background: #161b22;
  }
  .header-title {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #00bcd4;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    color: #c9d1d9;
  }
  .badge {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .badge-cache { background: #ffd700; color: #000; }
  .badge-stale { background: #ff8c00; color: #000; }

  /* ── Sub-header ── */
  .sub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    background: #0d1117;
    font-size: 0.75rem;
    color: #7a8491;
    border-bottom: 1px solid #30363d;
  }
  .soc-summary span { margin-right: 8px; }
  .soc-summary .soc-val { color: #00ff88; font-weight: 600; }

  /* ── Discharge banner ── */
  .discharge-banner {
    background: linear-gradient(90deg, #1a1000, #241800);
    border-bottom: 1px solid #ffd70040;
    padding: 6px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #ffd700;
  }
  .discharge-banner .label { font-weight: 700; letter-spacing: 0.05em; }
  .discharge-stats { color: #c9d1d9; }
  .discharge-stats strong { color: #ffd700; }

  /* ── Battery grid ── */
  .batteries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    padding: 12px;
  }

  /* ── Per-battery card ── */
  .battery-card {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 12px;
    min-width: 0;
  }
  .battery-card.charging { border-color: #00ff8840; }
  .battery-card.discharging { border-color: #ffd70040; }
  .battery-card.warn { border-color: #ff8c0060; }

  /* ── Battery header ── */
  .bat-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .bat-alias {
    font-weight: 700;
    font-size: 0.9rem;
    color: #00bcd4;
    margin-right: auto;
  }
  .state-badge {
    font-size: 0.6rem;
    font-weight: 700;
    padding: 2px 5px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .badge-chg  { background: #00ff8822; color: #00ff88; border: 1px solid #00ff8844; }
  .badge-dchg { background: #ffd70022; color: #ffd700; border: 1px solid #ffd70044; }
  .badge-idle { background: #55555522; color: #999;    border: 1px solid #55555544; }
  .badge-bal  { background: #ffd70033; color: #ffd700; border: 1px solid #ffd70066; }
  .badge-health-good { background: #00ff8822; color: #00ff88; border: 1px solid #00ff8844; }
  .badge-health-warn { background: #ffd70022; color: #ffd700; border: 1px solid #ffd70044; }
  .badge-health-bad  { background: #ff444422; color: #ff4444; border: 1px solid #ff444444; }

  /* ── SOC row ── */
  .soc-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  .soc-pct {
    font-size: 2.8rem;
    font-weight: 700;
    font-family: 'Courier New', monospace;
    line-height: 1;
  }
  .soc-kwh {
    font-size: 0.85rem;
    color: #7a8491;
    font-family: 'Courier New', monospace;
  }

  /* ── Progress bar ── */
  .soc-bar-track {
    height: 4px;
    background: #30363d;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 4px;
  }
  .soc-bar-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 0.4s ease;
  }

  /* ── Time estimate ── */
  .time-est {
    font-size: 0.72rem;
    color: #7a8491;
    margin-bottom: 8px;
    font-family: 'Courier New', monospace;
  }
  .time-est strong { color: #c9d1d9; }
  .time-est .eta { color: #00bcd4; }

  /* ── Stats row ── */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    margin-bottom: 8px;
  }
  .stat {
    background: #0d1117;
    border-radius: 4px;
    padding: 4px 6px;
    text-align: center;
  }
  .stat-label {
    font-size: 0.58rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #555e6b;
    display: block;
    margin-bottom: 1px;
  }
  .stat-value {
    font-size: 0.78rem;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
    font-weight: 600;
  }

  /* ── Trend ── */
  .trend-row {
    font-size: 0.72rem;
    color: #7a8491;
    margin-bottom: 8px;
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .trend-improving { color: #00ff88; }
  .trend-worsening { color: #ff4444; }
  .trend-stable    { color: #ffd700; }
  .cycle-count { color: #7a8491; }
  .bal-icon { color: #ffd700; }

  /* ── Cells section ── */
  .cells-header {
    font-size: 0.68rem;
    color: #7a8491;
    margin-bottom: 6px;
    font-family: 'Courier New', monospace;
    display: flex;
    justify-content: space-between;
  }
  .cells-grid {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 2px;
    margin-bottom: 4px;
    position: relative;
  }
  .cell-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  .cell-mv-label {
    font-size: 0.5rem;
    color: #555e6b;
    font-family: 'Courier New', monospace;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  }
  .cell-col:hover .cell-mv-label { color: #c9d1d9; }
  .cell-bar {
    width: 100%;
    min-height: 32px;
    border-radius: 2px 2px 0 0;
    transition: opacity 0.2s, filter 0.2s;
    position: relative;
  }
  .cell-col:hover .cell-bar { filter: brightness(1.3); }
  .cell-num {
    font-size: 0.5rem;
    color: #555e6b;
    font-family: 'Courier New', monospace;
    margin-top: 1px;
  }

  /* ── Cell tooltip ── */
  .cell-tooltip {
    position: absolute;
    z-index: 10;
    background: #21262d;
    border: 1px solid #30363d;
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 0.75rem;
    min-width: 200px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.6);
    pointer-events: none;
  }
  .tooltip-title {
    font-weight: 700;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
    margin-bottom: 4px;
  }
  .tooltip-role {
    font-weight: 700;
    margin-bottom: 6px;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .tooltip-role.lowest { color: #ff4444; }
  .tooltip-role.highest { color: #4fc3f7; }
  .tooltip-row {
    color: #7a8491;
    line-height: 1.5;
  }
  .tooltip-row strong { color: #c9d1d9; }

  /* ── Module temps ── */
  .modules-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3px;
    margin-top: 6px;
  }
  .module-cell {
    background: #0d1117;
    border-radius: 3px;
    padding: 3px 4px;
    text-align: center;
  }
  .module-label {
    font-size: 0.58rem;
    color: #555e6b;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .module-temp {
    font-size: 0.72rem;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
  }
  .module-delta {
    font-size: 0.58rem;
    color: #7a8491;
    font-family: 'Courier New', monospace;
  }

  /* ── Footer ── */
  .bat-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    padding-top: 6px;
    border-top: 1px solid #30363d;
    font-size: 0.65rem;
    color: #555e6b;
  }

  /* ── Loading / Error ── */
  .state-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    gap: 12px;
    text-align: center;
  }
  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #30363d;
    border-top-color: #00bcd4;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .error-msg {
    color: #ff4444;
    font-size: 0.85rem;
  }
  .retry-btn {
    background: #21262d;
    border: 1px solid #30363d;
    color: #c9d1d9;
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background 0.15s;
  }
  .retry-btn:hover { background: #30363d; }
  .connecting-msg { color: #7a8491; font-size: 0.85rem; }
`;

// src/shared/api.ts
var FsolarApi = class {
  constructor(base, apiKey) {
    this.base = base.replace(/\/$/, "");
    this.apiKey = apiKey;
  }
  get headers() {
    const h3 = { "Accept": "application/json" };
    if (this.apiKey) h3["Authorization"] = `Bearer ${this.apiKey}`;
    return h3;
  }
  async fetch(path) {
    const r6 = await fetch(`${this.base}${path}`, { headers: this.headers });
    if (r6.status === 401) throw new Error("AUTH_FAILED");
    if (!r6.ok) throw new Error(`${r6.status} ${r6.statusText}`);
    return r6.json();
  }
  async batteries() {
    return this.fetch("/batteries");
  }
  async health() {
    return this.fetch("/health");
  }
  async alerts() {
    return this.fetch("/alerts");
  }
  async snapshotsIntraday() {
    return this.fetch("/snapshots/intraday");
  }
  async snapshotsDaily() {
    return this.fetch("/snapshots/daily");
  }
  subscribeSSE(onData, onError) {
    const es = new EventSource(`${this.base}/events`);
    es.addEventListener("snapshot", (e7) => {
      try {
        onData("snapshot", JSON.parse(e7.data));
      } catch {
      }
    });
    es.addEventListener("state", (e7) => {
      try {
        onData("state", JSON.parse(e7.data));
      } catch {
      }
    });
    if (onError) es.onerror = onError;
    return () => es.close();
  }
};

// src/shared/colours.ts
var C2 = {
  green: "#00ff88",
  cyan: "#00bcd4",
  yellow: "#ffd700",
  orange: "#ff8c00",
  red: "#ff4444",
  grey: "#555e6b",
  dim: "#7a8491",
  text: "#c9d1d9",
  bg: "#0d1117",
  panel: "#161b22",
  border: "#30363d"
};
function cellColour(cellIdx, mv, avgMv, packMinIdx, packMaxIdx, outlierIdxs) {
  if (outlierIdxs.includes(cellIdx)) return C2.orange;
  if (cellIdx === packMinIdx) return C2.red;
  if (cellIdx === packMaxIdx) return C_BLUE;
  if (Math.abs(mv - avgMv) <= 10) return C2.green;
  return C2.dim;
}
var C_BLUE = "#4fc3f7";
function deltaColour(mv) {
  if (mv < 30) return C2.green;
  if (mv < 80) return C2.yellow;
  if (mv < 150) return C2.orange;
  return C2.red;
}
function socColour(pct) {
  if (pct > 80) return C2.green;
  if (pct > 40) return "#aaff44";
  if (pct > 20) return C2.orange;
  return C2.red;
}
var BATTERY_COLOURS = [C2.green, C2.cyan, C2.orange, "#b39ddb", "#f48fb1"];
function batteryColour(idx) {
  return BATTERY_COLOURS[idx % BATTERY_COLOURS.length];
}

// src/shared/formatters.ts
function formatW(w2) {
  if (Math.abs(w2) >= 1e3) return `${(w2 / 1e3).toFixed(1)} kW`;
  return `${Math.round(w2)} W`;
}
function formatA(a3) {
  return `${a3 >= 0 ? "+" : ""}${a3.toFixed(1)} A`;
}
function formatV(v2) {
  return `${v2.toFixed(1)} V`;
}
function formatMv(mv) {
  return `${Math.round(mv)} mV`;
}
function formatKwh(kwh) {
  return `${kwh.toFixed(1)} kWh`;
}
function formatTimeRemaining(hours) {
  if (!isFinite(hours) || hours <= 0) return "\u2014";
  if (hours < 1 / 60) return "<1m";
  if (hours < 1) return `${Math.round(hours * 60)}m`;
  if (hours < 24) return `${hours.toFixed(1)}h`;
  return `${(hours / 24).toFixed(1)}d`;
}
function formatEta(hoursFromNow) {
  const d3 = new Date(Date.now() + hoursFromNow * 36e5);
  const hh = d3.getHours().toString().padStart(2, "0");
  const mm = d3.getMinutes().toString().padStart(2, "0");
  const label = hoursFromNow >= 24 ? " tomorrow" : "";
  return `${hh}:${mm}${label}`;
}
function formatTemp(c4) {
  return `${Math.round(c4)}\xB0C`;
}
function formatDbm(dbm) {
  return `${dbm} dBm`;
}

// src/shared/lifepo4.ts
var CURVE = [
  [3e3, 0],
  [3100, 2],
  [3200, 10],
  [3250, 20],
  [3280, 40],
  [3300, 60],
  [3320, 80],
  [3350, 90],
  [3400, 95],
  [3450, 99],
  [3500, 100]
];
function voltageToSocPct(mv) {
  if (mv <= CURVE[0][0]) return 0;
  if (mv >= CURVE[CURVE.length - 1][0]) return 100;
  for (let i7 = 1; i7 < CURVE.length; i7++) {
    const [v0, s0] = CURVE[i7 - 1];
    const [v1, s1] = CURVE[i7];
    if (mv <= v1) {
      const t4 = (mv - v0) / (v1 - v0);
      return Math.round(s0 + t4 * (s1 - s0));
    }
  }
  return 100;
}

// src/cards/fleet-card/index.ts
var FelicityFleetCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = null;
    this._batteries = [];
    this._health = {};
    this._trend = {};
    this._loading = true;
    this._error = null;
    this._stale = false;
    this._tooltip = null;
    this._api = null;
    this._sseCleanup = null;
    this._pollTimer = null;
    this._lastFetch = 0;
  }
  setConfig(config) {
    if (!config.url) throw new Error("url is required");
    this._config = { mode: "sse", poll_interval: 30, show_trend: true, show_module_temps: true, ...config };
    this._api = new FsolarApi(config.url, config.api_key);
  }
  static getConfigElement() {
    return document.createElement("felicity-fleet-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:felicity-fleet-card", url: "http://localhost:3010" };
  }
  connectedCallback() {
    super.connectedCallback();
    this._startDataFlow();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopDataFlow();
  }
  _startDataFlow() {
    if (!this._api || !this._config) return;
    this._fetchAll();
    if (this._config.mode === "sse") {
      this._sseCleanup = this._api.subscribeSSE((_evt) => {
        this._fetchAll();
      }, () => {
        if (this._config?.mode === "sse") {
          setTimeout(() => this._startSSE(), 5e3);
        }
      });
    } else {
      const interval = (this._config.poll_interval ?? 30) * 1e3;
      this._pollTimer = setInterval(() => this._fetchAll(), interval);
    }
  }
  _startSSE() {
    if (!this._api) return;
    this._sseCleanup?.();
    this._sseCleanup = this._api.subscribeSSE((_evt) => {
      this._fetchAll();
    }, () => {
      setTimeout(() => this._startSSE(), 5e3);
    });
  }
  _stopDataFlow() {
    this._sseCleanup?.();
    this._sseCleanup = null;
    if (this._pollTimer) {
      clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  }
  async _fetchAll() {
    if (!this._api) return;
    try {
      const result = await this._api.batteries();
      this._batteries = result.batteries;
      this._trend = result.trend ?? {};
      this._health = this._deriveHealth(result.batteries, result.trend ?? {});
      this._loading = false;
      this._error = null;
      this._stale = Date.now() - this._lastFetch > 12e4 && this._lastFetch > 0;
      this._lastFetch = Date.now();
    } catch (err) {
      const msg = err.message;
      if (msg === "AUTH_FAILED") {
        this._error = "Auth failed \u2014 check api_key";
      } else {
        this._error = `Server unreachable: ${msg}`;
      }
      this._loading = false;
      if (this._lastFetch > 0) this._stale = true;
    }
  }
  _deriveHealth(batteries, trend) {
    const health = {};
    for (const bat of batteries) {
      const delta = bat.cellDelta ?? 0;
      const t4 = trend[bat.sn];
      health[bat.sn] = {
        soc: bat.soc,
        socStatus: bat.soc < 10 ? "bad" : bat.soc < 20 ? "warn" : "good",
        cellDeltaStatus: delta > 50 ? "bad" : delta > 20 ? "warn" : "good",
        outliers: [],
        trend: t4?.direction ?? null
      };
    }
    return health;
  }
  _retry() {
    this._loading = true;
    this._error = null;
    this._fetchAll();
  }
  _packStats() {
    if (!this._batteries.length) return null;
    const totalKwh = this._batteries.reduce((s4, b3) => s4 + b3.remainingKwh, 0);
    const totalW = this._batteries.reduce((s4, b3) => s4 + b3.power, 0);
    const totalA = this._batteries.reduce((s4, b3) => s4 + b3.current, 0);
    const allVoltages = this._batteries.flatMap((b3) => b3.cellVoltages);
    const packMinMv = Math.min(...allVoltages);
    const packMaxMv = Math.max(...allVoltages);
    const avgMv = allVoltages.length ? allVoltages.reduce((s4, v2) => s4 + v2, 0) / allVoltages.length : 0;
    const packMinIdx = allVoltages.indexOf(packMinMv);
    const packMaxIdx = allVoltages.indexOf(packMaxMv);
    return { totalKwh, totalW, totalA, packMinMv, packMaxMv, avgMv, packMinIdx, packMaxIdx };
  }
  _packMinMaxPerBattery() {
    const all = [];
    for (const b3 of this._batteries) {
      b3.cellVoltages.forEach((mv, idx) => all.push({ sn: b3.sn, idx, mv }));
    }
    if (!all.length) return { minSn: "", minIdx: 0, maxSn: "", maxIdx: 0 };
    const min = all.reduce((a3, b3) => b3.mv < a3.mv ? b3 : a3);
    const max = all.reduce((a3, b3) => b3.mv > a3.mv ? b3 : a3);
    return { minSn: min.sn, minIdx: min.idx, maxSn: max.sn, maxIdx: max.idx };
  }
  _timeRemaining(bat) {
    const powerW = Math.abs(bat.power);
    if (powerW < 5) return { label: "\u2014", etaStr: "", direction: null };
    if (bat.chargingState === "charging") {
      const remainingKwh = bat.ratedEnergyKwh ? bat.ratedEnergyKwh * (1 - bat.soc / 100) : bat.capacityAh * (1 - bat.soc / 100) * bat.voltage / 1e3;
      const hours = remainingKwh / (powerW / 1e3);
      return {
        label: `FULL IN ${formatTimeRemaining(hours)}`,
        etaStr: `\u2192 100% ${formatEta(hours)}`,
        direction: "full"
      };
    } else {
      const hours = bat.remainingKwh / (powerW / 1e3);
      const targetSoc = 5;
      return {
        label: `EMPTY IN ${formatTimeRemaining(hours)}`,
        etaStr: `\u2192 ${targetSoc}% ${formatEta(hours)}`,
        direction: "empty"
      };
    }
  }
  _healthEntry(sn) {
    return this._health[sn] ?? null;
  }
  _showTooltip(batSn, cellIdx, e7) {
    const rect = this.shadowRoot.host.getBoundingClientRect();
    const target = e7.currentTarget;
    const targetRect = target.getBoundingClientRect();
    this._tooltip = {
      cellIdx,
      batSn,
      x: targetRect.left - rect.left + targetRect.width / 2,
      y: targetRect.top - rect.top - 4
    };
  }
  _hideTooltip() {
    this._tooltip = null;
  }
  _renderTooltip() {
    if (!this._tooltip) return A;
    const { batSn, cellIdx } = this._tooltip;
    const bat = this._batteries.find((b3) => b3.sn === batSn);
    if (!bat) return A;
    const mv = bat.cellVoltages[cellIdx] ?? 0;
    const allMv = bat.cellVoltages;
    const avg = allMv.length ? allMv.reduce((s4, v2) => s4 + v2, 0) / allMv.length : 0;
    const delta = mv - avg;
    const health = this._healthEntry(batSn);
    const outliers = health?.outliers ?? [];
    const { minSn, minIdx, maxSn, maxIdx } = this._packMinMaxPerBattery();
    const isPackMin = batSn === minSn && cellIdx === minIdx;
    const isPackMax = batSn === maxSn && cellIdx === maxIdx;
    const module = bat.modules.find((m2) => m2.cells.includes(cellIdx + 1));
    const moduleSpread = module ? module.max - module.min : null;
    const moduleTemp = module?.temp ?? null;
    const packSpread = bat.cellVoltageMax != null && bat.cellVoltageMin != null ? bat.cellVoltageMax - bat.cellVoltageMin : null;
    const lifePo4 = voltageToSocPct(mv);
    const isOutlier = outliers.includes(cellIdx);
    const role = isPackMin ? "lowest" : isPackMax ? "highest" : isOutlier ? "outlier" : "";
    const roleText = isPackMin ? "LOWEST IN PACK" : isPackMax ? "HIGHEST IN PACK" : isOutlier ? "OUTLIER" : null;
    const roleHint = isPackMin ? "weakest cell limits capacity" : isPackMax ? "sets the charging ceiling" : null;
    const style = o6({
      left: `${this._tooltip.x}px`,
      top: `${this._tooltip.y}px`,
      transform: "translate(-50%, -100%)"
    });
    return b2`
      <div class="cell-tooltip" style=${style}>
        <div class="tooltip-title">CELL ${cellIdx + 1} · ${formatMv(mv)}</div>
        ${roleText ? b2`<div class="tooltip-role ${role}">${roleText}</div>` : A}
        <div class="tooltip-row">
          <strong>${delta >= 0 ? "+" : ""}${Math.round(delta)} mV vs avg</strong>
          ${roleHint ? b2` · ${roleHint}` : A}
        </div>
        ${module ? b2`<div class="tooltip-row">Module ${module.index} spread: <strong>${formatMv(moduleSpread ?? 0)}</strong></div>` : A}
        ${moduleTemp != null ? b2`<div class="tooltip-row">Module ${module.index} temp: <strong>${formatTemp(moduleTemp)}</strong></div>` : A}
        ${packSpread != null ? b2`<div class="tooltip-row">Pack spread: <strong>${formatMv(packSpread)}</strong></div>` : A}
        <div class="tooltip-row">LiFePO4 charge: <strong>${lifePo4}%</strong></div>
        <div class="tooltip-row">Avg: <strong>${formatMv(avg)}</strong></div>
      </div>
    `;
  }
  _renderBattery(bat, _idx) {
    const health = this._healthEntry(bat.sn);
    const outliers = health?.outliers ?? [];
    const { minSn, minIdx, maxSn, maxIdx } = this._packMinMaxPerBattery();
    const allMv = bat.cellVoltages;
    const avg = allMv.length ? allMv.reduce((s4, v2) => s4 + v2, 0) / allMv.length : 0;
    const socColor = socColour(bat.soc);
    const deltaColor = bat.cellDelta != null ? deltaColour(bat.cellDelta) : C2.grey;
    const timeEst = this._timeRemaining(bat);
    const healthStatus = health?.cellDeltaStatus ?? "unknown";
    const socStatus = health?.socStatus ?? "unknown";
    const stateClass = bat.chargingState === "charging" ? "charging" : bat.chargingState === "discharging" ? "discharging" : "";
    const warnClass = bat.warningCount > 0 || healthStatus === "warn" || healthStatus === "bad" ? " warn" : "";
    const trend = health?.trend ?? null;
    const trendClass = trend?.includes("improving") ? "trend-improving" : trend?.includes("worsening") ? "trend-worsening" : "trend-stable";
    const batTrend = this._trend[bat.sn];
    const balPct = batTrend && batTrend.snapshotCount > 0 ? batTrend.balancingCount / batTrend.snapshotCount : null;
    const showBalPct = balPct !== null && balPct > 0 && balPct < 0.9;
    const showModuleTemps = this._config?.show_module_temps !== false;
    const showTrend = this._config?.show_trend !== false;
    const cellBarHeight = (mv) => {
      const min = Math.min(...allMv, 0);
      const max = Math.max(...allMv, 1);
      const norm = max === min ? 0.7 : 0.4 + 0.55 * ((mv - min) / (max - min));
      return Math.max(8, Math.round(norm * 52));
    };
    return b2`
      <div class="battery-card ${stateClass}${warnClass}">
        <!-- Header -->
        <div class="bat-header">
          <span class="bat-alias">${bat.alias}</span>
          ${this._renderHealthBadge(healthStatus, socStatus)}
          ${bat.chargingState === "charging" ? b2`<span class="state-badge badge-chg">▲ CHG</span>` : A}
          ${bat.chargingState === "discharging" ? b2`<span class="state-badge badge-dchg">▼ DCHG</span>` : A}
          ${bat.chargingState === "standby" ? b2`<span class="state-badge badge-idle">◼ IDLE</span>` : A}
          ${bat.isBalancing ? b2`<span class="state-badge badge-bal">⚡ BAL</span>` : A}
        </div>

        <!-- SOC -->
        <div class="soc-row">
          <span class="soc-pct" style=${o6({ color: socColor })}>${bat.soc}%</span>
          <span class="soc-kwh">${formatKwh(bat.remainingKwh)}</span>
        </div>
        <div class="soc-bar-track">
          <div class="soc-bar-fill" style=${o6({
      width: `${bat.soc}%`,
      background: `linear-gradient(90deg, ${socColor}88, ${socColor})`
    })}></div>
        </div>
        <div class="time-est">
          ${timeEst.direction === "full" ? b2`<strong>FULL IN</strong> ${timeEst.label.replace("FULL IN ", "")} <span class="eta">${timeEst.etaStr}</span>` : timeEst.direction === "empty" ? b2`<strong>EMPTY IN</strong> ${timeEst.label.replace("EMPTY IN ", "")} <span class="eta">${timeEst.etaStr}</span>` : b2`<strong>${timeEst.label}</strong>`}
        </div>

        <!-- Stats -->
        <div class="stats-row">
          <div class="stat">
            <span class="stat-label">Power</span>
            <span class="stat-value" style=${o6({ color: bat.power > 5 ? "#00ff88" : bat.power < -5 ? "#ffd700" : C2.dim })}>
              ${formatW(bat.power)}
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Current</span>
            <span class="stat-value">${formatA(bat.current)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Voltage</span>
            <span class="stat-value">${formatV(bat.voltage)}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Temp</span>
            <span class="stat-value" style=${o6({ color: bat.tempMax > 35 ? C2.orange : bat.tempMax > 40 ? C2.red : C2.text })}>
              ${formatTemp(bat.tempMax)}
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">SOH</span>
            <span class="stat-value" style=${o6({ color: bat.soh < 80 ? C2.orange : bat.soh < 60 ? C2.red : C2.text })}>
              ${bat.soh}%
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Cell Δ</span>
            <span class="stat-value" style=${o6({ color: deltaColor })}>
              ${bat.cellDelta != null ? formatMv(bat.cellDelta) : "\u2014"}
            </span>
          </div>
        </div>

        <!-- Trend -->
        ${showTrend ? b2`
          <div class="trend-row">
            <span class="${trendClass}">${trend ?? "\u2014"}</span>
            ${bat.batCycleIndex != null ? b2`<span class="cycle-count">· ${bat.batCycleIndex}×</span>` : A}
            ${showBalPct ? b2`<span class="bal-icon">· ${Math.round(balPct * 100)}% ⚡</span>` : A}
          </div>
        ` : A}

        <!-- Cells -->
        ${allMv.length > 0 ? b2`
          <div class="cells-header">
            <span>
              ${formatMv(Math.min(...allMv))} – ${formatMv(Math.max(...allMv))} · avg ${formatMv(avg)}
            </span>
            <span style="color:${deltaColor}">Δ ${bat.cellDelta != null ? formatMv(bat.cellDelta) : "\u2014"}</span>
          </div>
          <div class="cells-grid" style="position:relative">
            ${allMv.map((mv, ci) => {
      const colour = cellColour(
        ci,
        mv,
        avg,
        bat.sn === minSn ? minIdx : -1,
        bat.sn === maxSn ? maxIdx : -1,
        outliers
      );
      const realColour = ci === minIdx && bat.sn === minSn ? C2.red : ci === maxIdx && bat.sn === maxSn ? C_BLUE : colour;
      const barH = cellBarHeight(mv);
      return b2`
                <div class="cell-col"
                  @mouseenter=${(e7) => this._showTooltip(bat.sn, ci, e7)}
                  @mouseleave=${this._hideTooltip}>
                  <span class="cell-mv-label" style=${o6({ color: realColour })}>${Math.round(mv)}</span>
                  <div class="cell-bar" style=${o6({
        height: `${barH}px`,
        background: realColour,
        opacity: realColour === C2.grey ? "0.4" : "0.85"
      })}></div>
                  <span class="cell-num">${ci + 1}</span>
                </div>
              `;
    })}
            ${this._tooltip?.batSn === bat.sn ? this._renderTooltip() : A}
          </div>
        ` : A}

        <!-- Module temps -->
        ${showModuleTemps && bat.modules.length > 0 ? b2`
          <div class="modules-row">
            ${bat.modules.map((m2) => b2`
              <div class="module-cell">
                <div class="module-label">M${m2.index}</div>
                <div class="module-temp">${m2.temp != null ? formatTemp(m2.temp) : "\u2014"}</div>
                <div class="module-delta" style=${o6({ color: deltaColour(m2.delta) })}>Δ${formatMv(m2.delta)}</div>
              </div>
            `)}
          </div>
        ` : A}

        <!-- Footer -->
        <div class="bat-footer">
          <span>${bat.model}</span>
          <span>${formatDbm(bat.wifiSignal)}</span>
        </div>
      </div>
    `;
  }
  _renderHealthBadge(cellDeltaStatus, socStatus) {
    const worst = cellDeltaStatus === "bad" || socStatus === "bad" ? "bad" : cellDeltaStatus === "warn" || socStatus === "warn" ? "warn" : "good";
    return b2`<span class="state-badge badge-health-${worst}">
      ${worst === "good" ? "\u2713" : worst === "warn" ? "!" : "\u2717"} HEALTH
    </span>`;
  }
  _renderDischargeBanner() {
    const discharging = this._batteries.filter((b3) => b3.chargingState === "discharging");
    if (!discharging.length) return A;
    const hour = (/* @__PURE__ */ new Date()).getHours();
    const isNight = hour >= 20 || hour < 6;
    const totalKwh = this._batteries.reduce((s4, b3) => s4 + b3.remainingKwh, 0);
    const ratedKwh = this._batteries.reduce((s4, b3) => s4 + (b3.ratedEnergyKwh ?? b3.remainingKwh / (b3.soc / 100)), 0);
    const totalW = Math.abs(this._batteries.reduce((s4, b3) => s4 + b3.power, 0));
    const avgSoc = this._batteries.reduce((s4, b3) => s4 + b3.soc, 0) / this._batteries.length;
    const cRate = ratedKwh > 0 ? (totalW / 1e3 / ratedKwh).toFixed(2) : "\u2014";
    const hoursToSunrise = isNight ? hour >= 20 ? 24 - hour + 6 : 6 - hour : 0;
    return b2`
      <div class="discharge-banner">
        <div class="label">
          ${isNight ? `\u2600 SUNRISE EST. IN ${hoursToSunrise.toFixed(1)}H` : "\u25BC DISCHARGING"}
        </div>
        <div class="discharge-stats">
          <strong>${Math.round(avgSoc)}% SOC</strong> ·
          ≈ ${formatKwh(totalKwh)} ·
          ${formatW(-totalW)} · ${cRate}C
        </div>
      </div>
    `;
  }
  render() {
    if (!this._config) return b2`<div class="card"><div class="state-panel"><span>No config</span></div></div>`;
    if (this._loading && !this._batteries.length) {
      return b2`
        <div class="card">
          <div class="state-panel">
            <div class="spinner"></div>
            <span class="connecting-msg">Connecting to mcp-fsolar…</span>
          </div>
        </div>
      `;
    }
    if (this._error && !this._batteries.length) {
      return b2`
        <div class="card">
          <div class="state-panel">
            <span class="error-msg">⚠ ${this._error}</span>
            <button class="retry-btn" @click=${this._retry}>Retry</button>
          </div>
        </div>
      `;
    }
    const stats = this._packStats();
    const title = this._config.title ?? "\u26A1 FELICITY PACK";
    const allDeltas = this._batteries.map((b3) => b3.cellDelta ?? 0);
    const maxDelta = allDeltas.length ? Math.max(...allDeltas) : 0;
    return b2`
      <div class="card" @mouseleave=${this._hideTooltip}>
        <!-- Header -->
        <div class="header">
          <span class="header-title">${title}</span>
          <div class="header-right">
            ${stats ? b2`
              <span>${formatKwh(stats.totalKwh)}</span>
              <span>${formatW(stats.totalW)}</span>
              <span>${stats.totalA.toFixed(1)} A</span>
            ` : A}
            ${this._stale ? b2`<span class="badge badge-stale">STALE</span>` : A}
            ${this._error ? b2`<span class="badge badge-cache">CACHE</span>` : A}
          </div>
        </div>

        <!-- Sub-header -->
        <div class="sub-header">
          <div class="soc-summary">
            ${this._batteries.map((b3) => b2`
              <span><span class="soc-val">${b3.alias} ${b3.soc}%</span></span>
            `)}
            <span style="color:${deltaColour(maxDelta)}">Δ${Math.round(maxDelta)}mV</span>
          </div>
          <span style="color:#555e6b">${this._config?.mode?.toUpperCase() ?? "SSE"}</span>
        </div>

        <!-- Discharge banner (when any battery discharging) -->
        ${this._renderDischargeBanner()}

        <!-- Error overlay (data is stale) -->
        ${this._error && this._batteries.length ? b2`
          <div style="background:#ff444411;padding:6px 16px;font-size:0.75rem;color:#ff8888;border-bottom:1px solid #ff444430">
            ⚠ ${this._error} — showing last known data
            <button class="retry-btn" style="margin-left:8px;padding:2px 8px;font-size:0.7rem" @click=${this._retry}>Retry</button>
          </div>
        ` : A}

        <!-- Battery panels -->
        <div class="batteries">
          ${this._batteries.map((bat, idx) => this._renderBattery(bat, idx))}
        </div>
      </div>
    `;
  }
};
FelicityFleetCard.styles = fleetStyles;
__decorateClass([
  n4({ attribute: false })
], FelicityFleetCard.prototype, "hass", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_config", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_batteries", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_health", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_trend", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_loading", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_error", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_stale", 2);
__decorateClass([
  r5()
], FelicityFleetCard.prototype, "_tooltip", 2);

// src/cards/fleet-card/editor.ts
var FelicityFleetCardEditor = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = { type: "custom:felicity-fleet-card", url: "" };
  }
  setConfig(config) {
    this._config = config;
  }
  _changed(key, value) {
    const ev = new CustomEvent("config-changed", {
      detail: { config: { ...this._config, [key]: value } },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(ev);
    this._config = { ...this._config, [key]: value };
  }
  render() {
    return b2`
      <div class="editor">
        <div class="field">
          <label>Server URL *</label>
          <input type="url" .value=${this._config.url ?? ""}
            placeholder="http://192.168.1.x:3010"
            @change=${(e7) => this._changed("url", e7.target.value)} />
          <div class="hint">Base URL of your mcp-fsolar instance</div>
        </div>

        <div class="field">
          <label>API Key (optional)</label>
          <input type="password" .value=${this._config.api_key ?? ""}
            placeholder="leave empty if no auth"
            @change=${(e7) => this._changed("api_key", e7.target.value || void 0)} />
        </div>

        <div class="field">
          <label>Update mode</label>
          <select .value=${this._config.mode ?? "sse"}
            @change=${(e7) => this._changed("mode", e7.target.value)}>
            <option value="sse">SSE (live push)</option>
            <option value="poll">Poll (interval)</option>
          </select>
        </div>

        ${this._config.mode === "poll" ? b2`
          <div class="field">
            <label>Poll interval: ${this._config.poll_interval ?? 30}s</label>
            <input type="range" min="10" max="300" step="5"
              .value=${String(this._config.poll_interval ?? 30)}
              @input=${(e7) => this._changed("poll_interval", Number(e7.target.value))} />
          </div>
        ` : ""}

        <div class="field">
          <label>Card title</label>
          <input type="text" .value=${this._config.title ?? ""}
            placeholder="⚡ FELICITY PACK"
            @change=${(e7) => this._changed("title", e7.target.value || void 0)} />
        </div>

        <div class="field">
          <label class="toggle-row">
            <input type="checkbox" ?checked=${this._config.show_trend !== false}
              @change=${(e7) => this._changed("show_trend", e7.target.checked)} />
            Show trend row
          </label>
        </div>

        <div class="field">
          <label class="toggle-row">
            <input type="checkbox" ?checked=${this._config.show_module_temps !== false}
              @change=${(e7) => this._changed("show_module_temps", e7.target.checked)} />
            Show module temperatures
          </label>
        </div>
      </div>
    `;
  }
};
FelicityFleetCardEditor.styles = i`
    .editor { padding: 12px; }
    .field  { margin-bottom: 12px; }
    label   { display: block; font-size: 0.8rem; color: var(--secondary-text-color, #999); margin-bottom: 4px; }
    input, select {
      width: 100%; box-sizing: border-box;
      background: var(--input-fill-color, #1c1c1c);
      border: 1px solid var(--divider-color, #444);
      border-radius: 4px; padding: 6px 8px;
      color: var(--primary-text-color, #fff);
      font-size: 0.9rem;
    }
    input[type=range] { border: none; background: transparent; padding: 0; }
    .row { display: flex; gap: 8px; align-items: center; }
    .hint { font-size: 0.7rem; color: var(--secondary-text-color, #888); margin-top: 2px; }
    .toggle-row { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; }
    input[type=checkbox] { width: auto; }
  `;
__decorateClass([
  n4({ attribute: false })
], FelicityFleetCardEditor.prototype, "hass", 2);
__decorateClass([
  r5()
], FelicityFleetCardEditor.prototype, "_config", 2);

// src/cards/history-card/index.ts
var import_apexcharts = __toESM(require_apexcharts_common(), 1);

// src/cards/history-card/styles.ts
var historyStyles = i`
  :host {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  .card {
    background: var(--ha-card-background, #0d1117);
    border-radius: 12px;
    overflow: hidden;
    color: #c9d1d9;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 8px;
    border-bottom: 1px solid #30363d;
    background: #161b22;
  }
  .header-title {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #00bcd4;
  }

  /* ── Tabs ── */
  .tabs {
    display: flex;
    gap: 0;
    background: #161b22;
    border-bottom: 1px solid #30363d;
    padding: 0 16px;
  }
  .tab {
    padding: 8px 16px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    cursor: pointer;
    color: #555e6b;
    border-bottom: 2px solid transparent;
    transition: color 0.15s, border-color 0.15s;
    user-select: none;
  }
  .tab:hover { color: #c9d1d9; }
  .tab.active { color: #00bcd4; border-bottom-color: #00bcd4; }
  .tab-count {
    font-size: 0.65rem;
    background: #30363d;
    border-radius: 3px;
    padding: 1px 4px;
    margin-left: 4px;
    font-weight: 400;
    color: #7a8491;
  }

  /* ── Charts row ── */
  .charts-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 12px;
  }
  @media (max-width: 600px) {
    .charts-row { grid-template-columns: 1fr; }
  }
  .chart-panel {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    overflow: hidden;
  }
  .chart-title {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #555e6b;
    padding: 8px 12px 4px;
    border-bottom: 1px solid #30363d;
  }
  .chart-container {
    padding: 8px;
  }

  /* ── Deviation heatmap ── */
  .heatmap-section {
    padding: 12px;
    border-top: 1px solid #30363d;
  }
  .heatmap-title {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #555e6b;
    margin-bottom: 12px;
  }
  .heatmap-bat {
    margin-bottom: 12px;
  }
  .heatmap-bat-label {
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 6px;
    font-family: 'Courier New', monospace;
  }
  .heatmap-cells {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 2px;
    align-items: end;
  }
  .dev-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.5rem;
    font-family: 'Courier New', monospace;
  }
  .dev-label-pos { color: #00bcd4; height: 12px; display: flex; align-items: flex-end; }
  .dev-bar-pos {
    width: 100%;
    background: #00bcd4;
    min-height: 1px;
    border-radius: 1px 1px 0 0;
  }
  .dev-midline {
    width: 100%;
    height: 1px;
    background: #30363d;
  }
  .dev-bar-neg {
    width: 100%;
    background: #ff8c00;
    min-height: 1px;
    border-radius: 0 0 1px 1px;
  }
  .dev-label-neg { color: #ff8c00; height: 12px; display: flex; align-items: flex-start; }
  .dev-cell-num { color: #555e6b; margin-top: 2px; }

  /* ── Lifetime tab ── */
  .lifetime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
    padding: 12px;
  }
  .lifetime-card {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 12px;
  }
  .lifetime-bat-name {
    font-size: 0.8rem;
    font-weight: 700;
    color: #00bcd4;
    margin-bottom: 8px;
  }
  .lifetime-stat {
    margin-bottom: 4px;
  }
  .lifetime-stat-label {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #555e6b;
  }
  .lifetime-stat-value {
    font-size: 0.85rem;
    font-family: 'Courier New', monospace;
    color: #c9d1d9;
  }

  /* ── State panels ── */
  .state-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    gap: 12px;
    text-align: center;
  }
  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #30363d;
    border-top-color: #00bcd4;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .error-msg { color: #ff4444; font-size: 0.85rem; }
  .retry-btn {
    background: #21262d; border: 1px solid #30363d;
    color: #c9d1d9; border-radius: 6px; padding: 6px 14px;
    cursor: pointer; font-size: 0.8rem;
  }
  .retry-btn:hover { background: #30363d; }
  .empty-msg { color: #555e6b; font-size: 0.85rem; }
`;

// src/cards/history-card/index.ts
var FelicityHistoryCard = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = null;
    this._tab = "recent";
    this._loading = true;
    this._error = null;
    this._batteries = [];
    this._snapshots = [];
    this._dailySnapshots = [];
    this._api = null;
    this._deltaChart = null;
    this._tempChart = null;
    this._dailyDeltaChart = null;
    this._dailyTempChart = null;
  }
  setConfig(config) {
    if (!config.url) throw new Error("url is required");
    this._config = config;
    this._tab = config.default_tab ?? "recent";
    this._api = new FsolarApi(config.url, config.api_key);
  }
  static getConfigElement() {
    return document.createElement("felicity-history-card-editor");
  }
  static getStubConfig() {
    return { type: "custom:felicity-history-card", url: "http://localhost:3010" };
  }
  connectedCallback() {
    super.connectedCallback();
    this._fetchAll();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._destroyCharts();
  }
  _destroyCharts() {
    this._deltaChart?.destroy();
    this._tempChart?.destroy();
    this._dailyDeltaChart?.destroy();
    this._dailyTempChart?.destroy();
    this._deltaChart = null;
    this._tempChart = null;
    this._dailyDeltaChart = null;
    this._dailyTempChart = null;
  }
  async _fetchAll() {
    if (!this._api) return;
    this._loading = true;
    try {
      const [batteries, intradayRes, dailyRes] = await Promise.all([
        this._api.batteries(),
        this._api.snapshotsIntraday(),
        this._api.snapshotsDaily()
      ]);
      this._batteries = batteries.batteries;
      this._snapshots = intradayRes.snapshots;
      this._dailySnapshots = dailyRes.snapshots;
      this._error = null;
    } catch (err) {
      this._error = err.message === "AUTH_FAILED" ? "Auth failed" : err.message;
    } finally {
      this._loading = false;
    }
  }
  _retry() {
    this._fetchAll();
  }
  updated() {
    if (this._tab === "recent" && this._snapshots.length > 0) {
      this._renderRecentCharts();
    }
    if (this._tab === "daily" && this._dailySnapshots.length > 0) {
      this._renderDailyCharts();
    }
  }
  _renderRecentCharts() {
    if (!this._deltaChartEl || !this._tempChartEl) return;
    const batAliases = [...new Set(this._snapshots.flatMap((s4) => s4.batteries.map((b3) => b3.alias)))];
    const timestamps = this._snapshots.map((s4) => new Date(s4.ts).getTime());
    const baseOpts = {
      chart: {
        type: "line",
        height: 160,
        background: "#161b22",
        toolbar: { show: false },
        animations: { enabled: false },
        zoom: { enabled: false }
      },
      stroke: { width: 2, curve: "smooth" },
      grid: { borderColor: "#30363d", strokeDashArray: 2 },
      xaxis: { type: "datetime", labels: { style: { colors: "#555e6b", fontSize: "0.6rem" } } },
      yaxis: { labels: { style: { colors: "#555e6b", fontSize: "0.6rem" } } },
      legend: { labels: { colors: "#c9d1d9" }, fontSize: "11px" },
      tooltip: { theme: "dark" }
    };
    const deltaSeries = batAliases.map((alias, i7) => ({
      name: alias,
      color: batteryColour(i7),
      data: this._snapshots.map((s4, si) => {
        const bat = s4.batteries.find((b3) => b3.alias === alias);
        return [timestamps[si], bat?.cellDelta ?? null];
      })
    }));
    const deltaOpts = {
      ...baseOpts,
      series: deltaSeries,
      annotations: {
        yaxis: [
          { y: 30, borderColor: "#00ff88", label: { text: "30mV", style: { color: "#000", background: "#00ff88" } } },
          { y: 80, borderColor: "#ffd700", label: { text: "80mV", style: { color: "#000", background: "#ffd700" } } },
          { y: 150, borderColor: "#ff4444", label: { text: "150mV", style: { color: "#fff", background: "#ff4444" } } }
        ]
      },
      yaxis: { ...baseOpts.yaxis, title: { text: "mV", style: { color: "#555e6b" } } }
    };
    if (this._deltaChart) {
      this._deltaChart.updateOptions(deltaOpts, true, false);
    } else {
      this._deltaChart = new import_apexcharts.default(this._deltaChartEl, deltaOpts);
      this._deltaChart.render();
    }
    const tempSeries = batAliases.map((alias, i7) => ({
      name: alias,
      color: batteryColour(i7),
      data: this._snapshots.map((s4, si) => {
        const bat = s4.batteries.find((b3) => b3.alias === alias);
        return [timestamps[si], bat?.tempMax ?? null];
      })
    }));
    const tempOpts = {
      ...baseOpts,
      series: tempSeries,
      yaxis: { ...baseOpts.yaxis, title: { text: "\xB0C", style: { color: "#555e6b" } } }
    };
    if (this._tempChart) {
      this._tempChart.updateOptions(tempOpts, true, false);
    } else {
      this._tempChart = new import_apexcharts.default(this._tempChartEl, tempOpts);
      this._tempChart.render();
    }
  }
  /** Group daily raw snapshots by date; pair min-voltage and max-voltage entries. */
  _groupDailyByDate() {
    const byDate = /* @__PURE__ */ new Map();
    for (const snap of this._dailySnapshots) {
      const date = snap.ts.slice(0, 10);
      if (!byDate.has(date)) byDate.set(date, []);
      byDate.get(date).push(snap);
    }
    const result = /* @__PURE__ */ new Map();
    for (const [date, snaps] of byDate) {
      const minSnap = snaps.find((s4) => s4.ts.includes("T11:59:59")) ?? snaps[0];
      const maxSnap = snaps.find((s4) => s4.ts.includes("T12:00:01")) ?? snaps[snaps.length - 1];
      result.set(date, { minSnap, maxSnap });
    }
    return result;
  }
  _renderDailyCharts() {
    if (!this._dailyDeltaChartEl || !this._dailyTempChartEl) return;
    const grouped = this._groupDailyByDate();
    const dates = [...grouped.keys()].sort();
    const batAliases = [...new Set(this._dailySnapshots.flatMap((s4) => s4.batteries.map((b3) => b3.alias)))];
    const baseOpts = {
      chart: { background: "#161b22", toolbar: { show: false }, animations: { enabled: false } },
      dataLabels: { enabled: false },
      grid: { borderColor: "#30363d" },
      xaxis: { type: "datetime", labels: { style: { colors: "#555e6b", fontSize: "0.6rem" } } },
      yaxis: { labels: { style: { colors: "#555e6b", fontSize: "0.6rem" } } },
      legend: { labels: { colors: "#c9d1d9" }, fontSize: "11px" },
      tooltip: { theme: "dark" }
    };
    const rangeSeries = batAliases.map((alias, i7) => ({
      name: alias,
      color: batteryColour(i7),
      data: dates.map((date) => {
        const { minSnap, maxSnap } = grouped.get(date);
        const minBat = minSnap.batteries.find((b3) => b3.alias === alias);
        const maxBat = maxSnap.batteries.find((b3) => b3.alias === alias);
        if (!minBat || !maxBat) return null;
        const avgLow = minBat.voltages.length ? Math.round(minBat.voltages.reduce((a3, v2) => a3 + v2, 0) / minBat.voltages.length) : minBat.cellMin ?? 0;
        const avgHigh = maxBat.voltages.length ? Math.round(maxBat.voltages.reduce((a3, v2) => a3 + v2, 0) / maxBat.voltages.length) : maxBat.cellMax ?? 0;
        return { x: (/* @__PURE__ */ new Date(date + "T12:00:00Z")).getTime(), y: [avgLow, avgHigh] };
      }).filter((d3) => d3 !== null)
    }));
    const rangeOpts = {
      ...baseOpts,
      chart: { ...baseOpts.chart, type: "rangeBar", height: 160 },
      plotOptions: { bar: { horizontal: false, columnWidth: "60%" } },
      series: rangeSeries,
      yaxis: {
        ...baseOpts.yaxis,
        title: { text: "avg cell mV", style: { color: "#555e6b" } },
        min: 3e3,
        max: 3700
      },
      tooltip: {
        theme: "dark",
        y: { formatter: (val) => `${val} mV` }
      }
    };
    if (this._dailyDeltaChart) {
      this._dailyDeltaChart.updateOptions(rangeOpts, true, false);
    } else {
      this._dailyDeltaChart = new import_apexcharts.default(this._dailyDeltaChartEl, rangeOpts);
      this._dailyDeltaChart.render();
    }
    const deltaSeries = batAliases.map((alias, i7) => ({
      name: alias,
      color: batteryColour(i7),
      data: dates.map((date) => {
        const { minSnap, maxSnap } = grouped.get(date);
        const minBat = minSnap.batteries.find((b3) => b3.alias === alias);
        const maxBat = maxSnap.batteries.find((b3) => b3.alias === alias);
        const delta = Math.max(minBat?.cellDelta ?? 0, maxBat?.cellDelta ?? 0);
        return [(/* @__PURE__ */ new Date(date + "T12:00:00Z")).getTime(), delta || null];
      })
    }));
    const deltaOpts = {
      ...baseOpts,
      chart: { ...baseOpts.chart, type: "bar", height: 160 },
      series: deltaSeries,
      yaxis: { ...baseOpts.yaxis, title: { text: "mV", style: { color: "#555e6b" } } }
    };
    if (this._dailyTempChart) {
      this._dailyTempChart.updateOptions(deltaOpts, true, false);
    } else {
      this._dailyTempChart = new import_apexcharts.default(this._dailyTempChartEl, deltaOpts);
      this._dailyTempChart.render();
    }
  }
  _renderDeviationHeatmap() {
    if (!this._snapshots.length || !this._batteries.length) {
      return b2`<div class="empty-msg">No snapshot data</div>`;
    }
    const avgDevFromBatteries = this._batteries.map((bat, bi) => {
      const avg = bat.cellVoltages.length ? bat.cellVoltages.reduce((s4, v2) => s4 + v2, 0) / bat.cellVoltages.length : 0;
      const devs = bat.cellVoltages.map((v2) => v2 - avg);
      return { alias: bat.alias, colour: batteryColour(bi), devs };
    });
    const maxAbsDev = Math.max(...avgDevFromBatteries.flatMap((b3) => b3.devs.map(Math.abs)), 1);
    return avgDevFromBatteries.map((bat) => b2`
      <div class="heatmap-bat">
        <div class="heatmap-bat-label" style=${o6({ color: bat.colour })}>${bat.alias}</div>
        <div class="heatmap-cells">
          ${bat.devs.map((dev, ci) => {
      const posH = dev > 0 ? Math.round(dev / maxAbsDev * 40) : 0;
      const negH = dev < 0 ? Math.round(-dev / maxAbsDev * 40) : 0;
      return b2`
              <div class="dev-col">
                <div class="dev-label-pos">${dev > 0 ? Math.round(dev) : ""}</div>
                <div class="dev-bar-pos" style=${o6({ height: `${posH}px` })}></div>
                <div class="dev-midline"></div>
                <div class="dev-bar-neg" style=${o6({ height: `${negH}px` })}></div>
                <div class="dev-label-neg">${dev < 0 ? Math.round(dev) : ""}</div>
                <div class="dev-cell-num">${ci + 1}</div>
              </div>
            `;
    })}
        </div>
      </div>
    `);
  }
  _renderRecentTab() {
    if (!this._snapshots.length) {
      return b2`<div class="state-panel"><span class="empty-msg">No intraday snapshots yet</span></div>`;
    }
    return b2`
      <div class="charts-row">
        <div class="chart-panel">
          <div class="chart-title">Cell Δ (mV) · Last 23h</div>
          <div class="chart-container"><div id="delta-chart"></div></div>
        </div>
        <div class="chart-panel">
          <div class="chart-title">Max Temp (°C) · Last 23h</div>
          <div class="chart-container"><div id="temp-chart"></div></div>
        </div>
      </div>
      <div class="heatmap-section">
        <div class="heatmap-title">
          Cell Deviation · Avg of ${this._snapshots.length} snapshots
        </div>
        ${this._renderDeviationHeatmap()}
      </div>
    `;
  }
  _renderDailyTab() {
    if (!this._dailySnapshots.length) {
      return b2`<div class="state-panel"><span class="empty-msg">No daily snapshots yet</span></div>`;
    }
    return b2`
      <div class="charts-row">
        <div class="chart-panel">
          <div class="chart-title">Pack Voltage Range (avg cell mV) · Daily</div>
          <div class="chart-container"><div id="daily-delta-chart"></div></div>
        </div>
        <div class="chart-panel">
          <div class="chart-title">Max Cell Δ (mV) · Daily</div>
          <div class="chart-container"><div id="daily-temp-chart"></div></div>
        </div>
      </div>
    `;
  }
  _renderLifetimeTab() {
    if (!this._batteries.length) {
      return b2`<div class="state-panel"><span class="empty-msg">No data</span></div>`;
    }
    return b2`
      <div class="lifetime-grid">
        ${this._batteries.map((bat) => b2`
          <div class="lifetime-card">
            <div class="lifetime-bat-name">${bat.alias}</div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Cycles</div>
              <div class="lifetime-stat-value">${bat.batCycleIndex ?? "\u2014"}</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Full charges</div>
              <div class="lifetime-stat-value">${bat.batFullCount ?? "\u2014"}</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">SOH</div>
              <div class="lifetime-stat-value">${bat.soh}%</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Capacity</div>
              <div class="lifetime-stat-value">${bat.capacityAh} Ah</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Under-voltage events</div>
              <div class="lifetime-stat-value">${bat.batUnderVoltageCount ?? "\u2014"}</div>
            </div>
            <div class="lifetime-stat">
              <div class="lifetime-stat-label">Warnings</div>
              <div class="lifetime-stat-value">${bat.warningCount}</div>
            </div>
          </div>
        `)}
      </div>
    `;
  }
  render() {
    if (!this._config) return b2`<div class="card"><div class="state-panel"><span>No config</span></div></div>`;
    if (this._loading) {
      return b2`
        <div class="card">
          <div class="state-panel">
            <div class="spinner"></div>
            <span style="color:#7a8491">Loading history…</span>
          </div>
        </div>
      `;
    }
    if (this._error) {
      return b2`
        <div class="card">
          <div class="state-panel">
            <span class="error-msg">⚠ ${this._error}</span>
            <button class="retry-btn" @click=${this._retry}>Retry</button>
          </div>
        </div>
      `;
    }
    const title = this._config.title ?? "\u{1F4CA} BATTERY HISTORY";
    return b2`
      <div class="card">
        <div class="header">
          <span class="header-title">${title}</span>
        </div>

        <div class="tabs">
          <div class="tab ${this._tab === "recent" ? "active" : ""}"
            @click=${() => {
      this._destroyCharts();
      this._tab = "recent";
    }}>
            Recent
            <span class="tab-count">${this._snapshots.length}</span>
          </div>
          <div class="tab ${this._tab === "daily" ? "active" : ""}"
            @click=${() => {
      this._destroyCharts();
      this._tab = "daily";
    }}>
            Daily
            <span class="tab-count">${new Set(this._dailySnapshots.map((s4) => s4.ts.slice(0, 10))).size}d</span>
          </div>
          <div class="tab ${this._tab === "lifetime" ? "active" : ""}"
            @click=${() => {
      this._tab = "lifetime";
    }}>
            Lifetime
          </div>
        </div>

        ${this._tab === "recent" ? this._renderRecentTab() : A}
        ${this._tab === "daily" ? this._renderDailyTab() : A}
        ${this._tab === "lifetime" ? this._renderLifetimeTab() : A}
      </div>
    `;
  }
};
FelicityHistoryCard.styles = historyStyles;
__decorateClass([
  n4({ attribute: false })
], FelicityHistoryCard.prototype, "hass", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_config", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_tab", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_loading", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_error", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_batteries", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_snapshots", 2);
__decorateClass([
  r5()
], FelicityHistoryCard.prototype, "_dailySnapshots", 2);
__decorateClass([
  e5("#delta-chart")
], FelicityHistoryCard.prototype, "_deltaChartEl", 2);
__decorateClass([
  e5("#temp-chart")
], FelicityHistoryCard.prototype, "_tempChartEl", 2);
__decorateClass([
  e5("#daily-delta-chart")
], FelicityHistoryCard.prototype, "_dailyDeltaChartEl", 2);
__decorateClass([
  e5("#daily-temp-chart")
], FelicityHistoryCard.prototype, "_dailyTempChartEl", 2);

// src/cards/history-card/editor.ts
var FelicityHistoryCardEditor = class extends i4 {
  constructor() {
    super(...arguments);
    this._config = { type: "custom:felicity-history-card", url: "" };
  }
  setConfig(config) {
    this._config = config;
  }
  _changed(key, value) {
    const ev = new CustomEvent("config-changed", {
      detail: { config: { ...this._config, [key]: value } },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(ev);
    this._config = { ...this._config, [key]: value };
  }
  render() {
    return b2`
      <div class="editor">
        <div class="field">
          <label>Server URL *</label>
          <input type="url" .value=${this._config.url ?? ""}
            placeholder="http://192.168.1.x:3010"
            @change=${(e7) => this._changed("url", e7.target.value)} />
          <div class="hint">Base URL of your mcp-fsolar instance</div>
        </div>

        <div class="field">
          <label>API Key (optional)</label>
          <input type="password" .value=${this._config.api_key ?? ""}
            @change=${(e7) => this._changed("api_key", e7.target.value || void 0)} />
        </div>

        <div class="field">
          <label>Default tab</label>
          <select .value=${this._config.default_tab ?? "recent"}
            @change=${(e7) => this._changed("default_tab", e7.target.value)}>
            <option value="recent">Recent (last 23h)</option>
            <option value="daily">Daily</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>

        <div class="field">
          <label>Card title</label>
          <input type="text" .value=${this._config.title ?? ""}
            placeholder="📊 BATTERY HISTORY"
            @change=${(e7) => this._changed("title", e7.target.value || void 0)} />
        </div>
      </div>
    `;
  }
};
FelicityHistoryCardEditor.styles = i`
    .editor { padding: 12px; }
    .field  { margin-bottom: 12px; }
    label   { display: block; font-size: 0.8rem; color: var(--secondary-text-color, #999); margin-bottom: 4px; }
    input, select {
      width: 100%; box-sizing: border-box;
      background: var(--input-fill-color, #1c1c1c);
      border: 1px solid var(--divider-color, #444);
      border-radius: 4px; padding: 6px 8px;
      color: var(--primary-text-color, #fff);
      font-size: 0.9rem;
    }
    .hint { font-size: 0.7rem; color: var(--secondary-text-color, #888); margin-top: 2px; }
  `;
__decorateClass([
  n4({ attribute: false })
], FelicityHistoryCardEditor.prototype, "hass", 2);
__decorateClass([
  r5()
], FelicityHistoryCardEditor.prototype, "_config", 2);

// src/index.ts
customElements.define("felicity-fleet-card", FelicityFleetCard);
customElements.define("felicity-fleet-card-editor", FelicityFleetCardEditor);
customElements.define("felicity-history-card", FelicityHistoryCard);
customElements.define("felicity-history-card-editor", FelicityHistoryCardEditor);
window.customCards = window.customCards || [];
window.customCards.push(
  {
    type: "felicity-fleet-card",
    name: "Felicity Fleet Card",
    description: "Real-time Felicity Solar battery fleet monitor \u2014 live SOC, cell voltages, temperatures",
    preview: true,
    documentationURL: "https://github.com/RicardoSantos/ha-fsolar"
  },
  {
    type: "felicity-history-card",
    name: "Felicity Battery History",
    description: "Cell delta trends, temperature history and deviation heatmap (24h + daily)",
    preview: true,
    documentationURL: "https://github.com/RicardoSantos/ha-fsolar"
  }
);
console.info(
  "%c FELICITY BATTERY CARDS %c loaded ",
  "background:#00bcd4;color:#000;font-weight:700",
  "background:#161b22;color:#00bcd4"
);
/*! Bundled license information:

apexcharts/dist/apexcharts.common.js:
  (*!
   * ApexCharts v3.54.1
   * (c) 2018-2024 ApexCharts
   * Released under the MIT License.
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=ha-fsolar.js.map
